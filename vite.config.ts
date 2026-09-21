import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";
import https from "https";
import crypto from "crypto";
import fs from "fs";

function solveAESChallenge(html: string): string | null {
  const a = html.match(/\ba=toNumbers\("([0-9a-f]+)"\)/);
  const b = html.match(/\bb=toNumbers\("([0-9a-f]+)"\)/);
  const c = html.match(/\bc=toNumbers\("([0-9a-f]+)"\)/);
  if (!a || !b || !c) return null;
  try {
    const key = Buffer.from(a[1], "hex");
    const iv  = Buffer.from(b[1], "hex");
    const enc = Buffer.from(c[1], "hex");
    const dec = crypto.createDecipheriv("aes-128-cbc", key, iv);
    dec.setAutoPadding(false);
    return Buffer.concat([dec.update(enc), dec.final()]).toString("hex");
  } catch {
    return null;
  }
}

// Cache the solved cookie — valid for 6 hours per the CMS max-age
let cachedCookie: string | null = null;
let cacheExpiry = 0;

function httpsGet(urlPath: string, cookie?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const headers: Record<string, string> = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
      "Accept": "application/json, */*",
    };
    if (cookie) headers["Cookie"] = "__test=" + cookie;

    const req = https.request(
      { hostname: "aicampus.mits.ac.in", path: "/mits-cms" + urlPath, method: "GET", headers, rejectUnauthorized: false },
      (res) => {
        let body = "";
        res.on("data", (chunk) => { body += chunk; });
        res.on("end", () => resolve(body));
      }
    );
    req.on("error", reject);
    req.end();
  });
}

// Strip leading PHP warnings/notices so JSON detection works correctly
function stripPhpWarnings(body: string): string {
  // PHP warnings end before the first '{' or '['
  const idx = body.search(/[{[]/);
  return idx > 0 ? body.slice(idx) : body;
}

async function cmsRequest(urlPath: string): Promise<string> {
  // Use cached cookie if still valid
  if (cachedCookie && Date.now() < cacheExpiry) {
    const body = stripPhpWarnings(await httpsGet(urlPath, cachedCookie));
    if (!body.trimStart().startsWith("<")) return body;
    cachedCookie = null;
  }

  const raw = await httpsGet(urlPath);
  const body = stripPhpWarnings(raw);
  if (!body.trimStart().startsWith("<")) return body;

  // AES challenge (legacy InfinityFree protection)
  const solved = solveAESChallenge(raw);
  if (!solved) throw new Error("Failed to solve AES challenge. HTML: " + raw.slice(0, 150));

  cachedCookie = solved;
  cacheExpiry = Date.now() + 5.5 * 60 * 60 * 1000;

  const retried = stripPhpWarnings(await httpsGet(urlPath, solved));
  if (retried.trimStart().startsWith("<")) throw new Error("Challenge not resolved after solving. Body: " + retried.slice(0, 150));
  return retried;
}

function cmsProxyPlugin() {
  return {
    name: "cms-proxy",
    configureServer(server: import("vite").ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        const cleanUrl = (req.url || "").split("?")[0];
        if (cleanUrl === "/site.webmanifest" || cleanUrl === "/manifest.json" || cleanUrl === "/university/site.webmanifest" || cleanUrl === "/university/manifest.json") {
          const manifestPath = path.resolve(__dirname, "public/site.webmanifest");
          if (fs.existsSync(manifestPath)) {
            res.setHeader("Content-Type", "application/manifest+json; charset=utf-8");
            res.statusCode = 200;
            res.end(fs.readFileSync(manifestPath));
            return;
          }
        }
        if (!req.url?.startsWith("/cms-api")) return next();
        const urlPath = "/backend/public_api" + req.url.slice("/cms-api".length);
        const isImage = req.url.includes("get_content_image.php");
        if (isImage) {
          // Serve image as binary, not JSON
          const imgReq = () => new Promise<Buffer>((resolve, reject) => {
            const headers: Record<string, string> = {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
              "Accept": "image/*,*/*",
            };
            if (cachedCookie) headers["Cookie"] = "__test=" + cachedCookie;
            const r = https.request(
              { hostname: "aicampus.mits.ac.in", path: "/mits-cms/backend" + req.url!.slice("/cms-api".length), method: "GET", headers, rejectUnauthorized: false },
              (resp) => {
                const chunks: Buffer[] = [];
                resp.on("data", (c) => chunks.push(c));
                resp.on("end", () => {
                  const buf = Buffer.concat(chunks);
                  const ct = resp.headers["content-type"] ?? "";
                  if (ct.startsWith("image/")) resolve(buf);
                  else reject(new Error("Not an image: " + ct));
                });
              }
            );
            r.on("error", reject);
            r.end();
          });
          imgReq()
            .then((buf) => {
              res.setHeader("Content-Type", "image/jpeg");
              res.setHeader("Cache-Control", "public, max-age=86400");
              res.setHeader("Access-Control-Allow-Origin", "*");
              res.statusCode = 200;
              res.end(buf);
            })
            .catch(() => { res.statusCode = 404; res.end(); });
          return;
        }
        cmsRequest(urlPath)
          .then((body) => {
            res.setHeader("Content-Type", "application/json; charset=utf-8");
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.statusCode = 200;
            res.end(body);
          })
          .catch((err) => {
            console.error("[cms-proxy] Error:", err.message);
            res.statusCode = 502;
            res.end(JSON.stringify({ success: false, error: err.message }));
          });
      });
    },
  };
}

function facultyProxyPlugin() {
  return {
    name: "faculty-proxy",
    configureServer(server: import("vite").ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        if (!req.url || !req.url.startsWith("/faculty-api")) return next();
        const urlPath = "/mitsfaculty/api" + req.url.slice("/faculty-api".length);
        const headers: Record<string, string> = {
          "User-Agent": "Mozilla/5.0 (compatible; MITSWeb/1.0)",
          "Accept": "*/*",
          "x-api-key": "mits_faculty_public_api_key_2026",
        };

        const r = https.request(
          {
            hostname: "engageai.mits.ac.in",
            path: urlPath,
            method: "GET",
            headers,
            rejectUnauthorized: false,
          },
          (resp) => {
            const chunks: Buffer[] = [];
            resp.on("data", (chunk) => {
              chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
            });
            resp.on("end", () => {
              const contentType = resp.headers["content-type"] || (urlPath.includes("/uploads/") ? "image/jpeg" : "application/json");
              res.setHeader("Content-Type", contentType);
              res.setHeader("Access-Control-Allow-Origin", "*");
              res.statusCode = resp.statusCode || 200;
              res.end(Buffer.concat(chunks));
            });
          }
        );

        r.on("error", (err) => {
          console.error("[faculty-proxy] Error:", err.message);
          res.statusCode = 502;
          res.setHeader("Content-Type", "application/json");
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.end(JSON.stringify({ success: false, error: err.message }));
        });
        r.end();
      });
    },
  };
}

export default defineConfig(({ mode }) => ({
  base: "/university/",
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [
    react(),
    cmsProxyPlugin(),
    facultyProxyPlugin(),
    mode === "development" && componentTagger(),
    visualizer({
      filename: "dist/stats.html",
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-accordion",
            "@radix-ui/react-tabs",
            "@radix-ui/react-select",
            "@radix-ui/react-popover",
          ],
          motion: ["framer-motion"],
          query: ["@tanstack/react-query"],
          utils: ["clsx", "tailwind-merge", "class-variance-authority"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
}));

/**
 * Cloudflare Worker — MITS CMS CORS Proxy
 *
 * Deploy steps:
 *   1. Go to https://dash.cloudflare.com → Workers & Pages → Create Worker
 *   2. Paste this entire file into the editor and click "Deploy"
 *   3. Note your worker URL, e.g. https://mits-cms-proxy.YOUR-SUBDOMAIN.workers.dev
 *   4. Set WORKER_URL in src/hooks/useDeptCMSData.ts to that URL
 *
 * The worker:
 *   - Accepts:  GET /public_api/<endpoint>?<params>
 *   - Forwards: to https://aicampus.mits.ac.in/mits-cms/backend/public_api/<endpoint>?<params>
 *   - Strips the duplicate Access-Control-Allow-Origin header the CMS sends
 *   - Sets a single clean Access-Control-Allow-Origin: https://mits.edu
 */

const CMS_ORIGIN = "https://aicampus.mits.ac.in";
const CMS_BASE   = "/mits-cms/backend/public_api";
const ALLOWED_ORIGIN = "https://mits.edu";

// AES-128-CBC challenge solver (InfinityFree bot protection)
async function solveChallenge(html) {
  const get = (pat) => { const m = html.match(pat); return m ? m[1] : null; };
  const aHex = get(/\ba=toNumbers\("([0-9a-f]+)"\)/);
  const bHex = get(/\bb=toNumbers\("([0-9a-f]+)"\)/);
  const cHex = get(/\bc=toNumbers\("([0-9a-f]+)"\)/);
  if (!aHex || !bHex || !cHex) return null;
  const hex = (h) => new Uint8Array(h.match(/../g).map((b) => parseInt(b, 16)));
  const key = await crypto.subtle.importKey("raw", hex(aHex), { name: "AES-CBC" }, false, ["decrypt"]);
  const dec = await crypto.subtle.decrypt({ name: "AES-CBC", iv: hex(bHex) }, key, hex(cHex));
  return Array.from(new Uint8Array(dec)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function stripPhpWarnings(text) {
  const idx = text.search(/[{[]/);
  return idx > 0 ? text.slice(idx) : text;
}

async function fetchCMS(path, cookie) {
  const headers = {
    "User-Agent": "Mozilla/5.0 (compatible; MITSProxy/1.0)",
    "Accept": "application/json, */*",
  };
  if (cookie) headers["Cookie"] = "__test=" + cookie;
  return fetch(CMS_ORIGIN + path, { headers });
}

// Cached cookie (lives for the duration of the Worker isolate — typically minutes)
let cachedCookie = null;
let cacheExpiry  = 0;

async function cmsRequest(path) {
  // Try with cached cookie first
  if (cachedCookie && Date.now() < cacheExpiry) {
    const res  = await fetchCMS(path, cachedCookie);
    const text = stripPhpWarnings(await res.text());
    if (!text.trimStart().startsWith("<")) return text;
    cachedCookie = null;
  }

  // First attempt without cookie
  const res1  = await fetchCMS(path);
  const raw   = await res1.text();
  const body1 = stripPhpWarnings(raw);
  if (!body1.trimStart().startsWith("<")) return body1;

  // Solve AES challenge and retry
  const cookie = await solveChallenge(raw);
  if (!cookie) throw new Error("Could not solve CMS challenge");

  cachedCookie = cookie;
  cacheExpiry  = Date.now() + 5.5 * 60 * 60 * 1000;

  const res2  = await fetchCMS(path, cookie);
  const body2 = stripPhpWarnings(await res2.text());
  if (body2.trimStart().startsWith("<")) throw new Error("Challenge retry failed");
  return body2;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    if (request.method !== "GET") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    // Route: /public_api/<anything>
    if (!url.pathname.startsWith("/public_api/")) {
      return new Response("Not Found", { status: 404 });
    }

    const cmsPath = CMS_BASE + url.pathname.slice("/public_api".length) + url.search;

    try {
      const body = await cmsRequest(cmsPath);
      return new Response(body, {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
          "Access-Control-Allow-Credentials": "true",
          "Cache-Control": "public, max-age=60",
        },
      });
    } catch (err) {
      return new Response(JSON.stringify({ success: false, error: err.message }), {
        status: 502,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
          "Access-Control-Allow-Credentials": "true",
        },
      });
    }
  },
};

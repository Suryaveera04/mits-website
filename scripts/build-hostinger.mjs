import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

console.log("=================================================");
console.log(" Building MITS Website for Hostinger (Root Base /)");
console.log(" Domain: mitscloud.in");
console.log("=================================================");

// 1. Set environment variables for root build
process.env.VITE_BASE_PATH = "/";
process.env.BUILD_TARGET = "hostinger";

try {
  // 2. Generate sitemap
  console.log("\n[1/3] Generating sitemap...");
  execSync("node scripts/generate-sitemap.mjs", { stdio: "inherit", cwd: ROOT_DIR, env: process.env });

  // 3. Run Vite build with base="/"
  console.log("\n[2/3] Building production bundles with Vite (base: /)...");
  execSync("npx vite build --base=/", { stdio: "inherit", cwd: ROOT_DIR, env: process.env });

  // 4. Ensure dist/.htaccess is present with correct root rules
  console.log("\n[3/3] Verifying .htaccess in dist/ for Hostinger...");
  const htaccessContent = `# Hostinger Apache / LiteSpeed SPA Configuration
<IfModule mod_mime.c>
  AddType application/manifest+json .webmanifest
</IfModule>

<IfModule mod_headers.c>
  Header always unset Content-Security-Policy
  Header always set Content-Security-Policy "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https:; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https:;"
  
  <FilesMatch "^(index\\.html)$">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
    Header set Pragma "no-cache"
    Header set Expires "0"
  </FilesMatch>
</IfModule>

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Allow direct access to existing files and directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_URI} !\\.webmanifest$

  # Route all other URLs to index.html for React Router
  RewriteRule ^ index.html [L]
</IfModule>
`;

  const distHtaccess = path.join(ROOT_DIR, "dist", ".htaccess");
  fs.writeFileSync(distHtaccess, htaccessContent, "utf8");
  console.log(" Created dist/.htaccess successfully.");

  // 5. Create ready-to-upload dist-hostinger.zip
  console.log("\n[4/4] Packing ready-to-upload dist-hostinger.zip...");
  try {
    execSync("tar -a -cf dist-hostinger.zip -C dist .", { stdio: "ignore", cwd: ROOT_DIR });
    console.log(" Created dist-hostinger.zip successfully.");
  } catch (err) {
    console.warn("Could not create zip archive automatically:", err.message);
  }

  console.log("\n=================================================");
  console.log(" SUCCESS: Hostinger build ready!");
  console.log(" Option A (Easiest): Upload 'dist-hostinger.zip' to Hostinger");
  console.log("   public_html/ and click 'Extract'.");
  console.log(" Option B: Upload all files inside 'dist/' directly.");
  console.log("=================================================\n");
} catch (error) {
  console.error("Hostinger build failed:", error);
  process.exit(1);
}

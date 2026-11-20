import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const DATA_DIR = path.join(ROOT_DIR, "public", "data");
const GALLERY_DIR = path.join(ROOT_DIR, "public", "gallery", "instagram");
const PINS_FILE = path.join(DATA_DIR, "pinned-highlights.json");
const FEED_FILE = path.join(DATA_DIR, "trending-feed.json");

const INSTAGRAM_USERNAME = "mits_mpl";
const MAX_ITEMS = 10;
const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 750;
const WEBP_QUALITY = 82;

// Ensure directories exist
fs.mkdirSync(DATA_DIR, { recursive: true });
fs.mkdirSync(GALLERY_DIR, { recursive: true });

/**
 * Fetch Instagram posts from MITS official Instagram feed
 */
async function fetchInstagramPosts() {
  const posts = [];

  // 1. Fetch from MITS official feed endpoint (provides 100% real Instagram post thumbnails and captions)
  try {
    const res = await fetch("https://api.curator.io/v1/feeds/1a6d1223-3ae3-46ea-8c39-adea5ff5e1d8/posts?limit=25", {
      signal: AbortSignal.timeout(10000),
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.posts) && data.posts.length > 0) {
        console.log(`[Instagram Feed] Successfully fetched ${data.posts.length} real Instagram posts from @${INSTAGRAM_USERNAME}`);
        for (const p of data.posts) {
          const rawImage = p.image_large || p.image || "";
          if (!rawImage) continue;

          // Clean hashtags and extra line breaks from Instagram caption
          const cleanCaption = (p.text || "")
            .replace(/#[\w_]+/g, "")
            .replace(/\n+/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 140);

          posts.push({
            id: `ig-${p.id}`,
            url: p.url || `https://www.instagram.com/p/${p.source_identifier || ""}/`,
            rawImage,
            caption: cleanCaption || "Campus highlight from @mits_mpl",
            date: p.source_created_at ? p.source_created_at.split("T")[0] : "",
            isReel: p.has_video === 1 || (p.url && p.url.includes("/reel/")),
            pinned: false,
          });
        }
        if (posts.length > 0) return posts;
      }
    }
  } catch (err) {
    console.warn("[Instagram Feed] Primary fetch error:", err.message);
  }

  // 2. Fallback to public web profile info API
  try {
    const url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${INSTAGRAM_USERNAME}`;
    const headers = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
      "x-ig-app-id": "936619743392459",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept": "*/*",
    };

    const res = await fetch(url, { headers, signal: AbortSignal.timeout(8000) });
    if (res.ok) {
      const json = await res.json();
      const edges = json?.data?.user?.edge_owner_to_timeline_media?.edges || [];
      console.log(`[Instagram Web API] Fetched ${edges.length} items`);
      for (const { node } of edges) {
        const isReel = node.is_video || node.__typename === "GraphVideo";
        const shortcode = node.shortcode;
        const permalink = `https://www.instagram.com/p/${shortcode}/`;
        const caption = node.edge_media_to_caption?.edges?.[0]?.node?.text || "";
        const timestamp = node.taken_at_timestamp
          ? new Date(node.taken_at_timestamp * 1000).toISOString().split("T")[0]
          : "";
        const rawImage = node.display_url || node.thumbnail_src || "";

        posts.push({
          id: `ig-${shortcode}`,
          url: permalink,
          rawImage,
          caption: caption.replace(/#[\w_]+/g, "").replace(/\n+/g, " ").slice(0, 140).trim(),
          date: timestamp,
          isReel,
          pinned: false,
        });
      }
      if (posts.length > 0) return posts;
    }
  } catch (err) {
    console.warn("[Instagram Web API] Fallback did not complete:", err.message);
  }

  return posts;
}

/**
 * Downloads and compresses the real Instagram thumbnail into a tiny WebP file (~35-50 KB)
 */
async function processImage(sourceUrlOrPath, slotIndex) {
  const fileName = `highlight-${slotIndex + 1}.webp`;
  const destPath = path.join(GALLERY_DIR, fileName);
  const publicPath = `/gallery/instagram/${fileName}`;

  try {
    let inputBuffer;

    if (sourceUrlOrPath.startsWith("http://") || sourceUrlOrPath.startsWith("https://")) {
      const res = await fetch(sourceUrlOrPath, { signal: AbortSignal.timeout(15000) });
      if (!res.ok) throw new Error(`HTTP ${res.status} when downloading image`);
      const arrayBuf = await res.arrayBuffer();
      inputBuffer = Buffer.from(arrayBuf);
    } else {
      // Local file in public/
      const cleanPath = sourceUrlOrPath.replace(/^\//, "");
      const localFile = path.join(ROOT_DIR, "public", cleanPath);
      if (fs.existsSync(localFile)) {
        inputBuffer = fs.readFileSync(localFile);
      } else {
        throw new Error(`Local file not found: ${localFile}`);
      }
    }

    await sharp(inputBuffer)
      .resize({
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        fit: "cover",
        position: "center",
      })
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(destPath);

    const stats = fs.statSync(destPath);
    console.log(`[Image] Slot ${slotIndex + 1}: Saved ${fileName} (${Math.round(stats.size / 1024)} KB)`);
    return publicPath;
  } catch (err) {
    console.warn(`[Image] Slot ${slotIndex + 1}: Warning: ${err.message}`);
    // If destination already exists, keep it
    if (fs.existsSync(destPath)) {
      return publicPath;
    }
    return sourceUrlOrPath;
  }
}

/**
 * Main Sync Function
 */
async function main() {
  console.log("=== MITS Instagram & Campus Highlights Auto-Sync ===");

  // 1. Read user pinned configuration (empty by default - pin ONLY when specified by user)
  let pinnedConfig = { pinnedUrls: [], customPinned: [] };
  if (fs.existsSync(PINS_FILE)) {
    try {
      pinnedConfig = JSON.parse(fs.readFileSync(PINS_FILE, "utf-8"));
      console.log(`[Pins] User pinned configuration loaded: ${pinnedConfig.pinnedUrls?.length || 0} pinned URLs, ${pinnedConfig.customPinned?.length || 0} custom pinned items.`);
    } catch (e) {
      console.warn("[Pins] Could not parse pinned-highlights.json:", e.message);
    }
  }

  // 2. Fetch the REAL Instagram posts
  const fetchedPosts = await fetchInstagramPosts();

  // 3. Fallback to existing feed if fetch failed
  let basePosts = fetchedPosts;
  if (basePosts.length === 0 && fs.existsSync(FEED_FILE)) {
    try {
      basePosts = JSON.parse(fs.readFileSync(FEED_FILE, "utf-8"));
      console.log(`[Fallback] Using ${basePosts.length} previously saved items.`);
    } catch {
      basePosts = [];
    }
  }

  if (basePosts.length === 0) {
    console.error("[Error] No posts could be retrieved. Keeping existing files intact.");
    return;
  }

  // 4. Build pinned and unpinned lists
  // NOTE: Nothing is pinned automatically! Pinning ONLY happens if the user explicitly added it.
  const pinnedList = [];
  const unpinnedList = [];

  // A. Add any custom pinned items the user explicitly created
  if (Array.isArray(pinnedConfig.customPinned)) {
    for (const custom of pinnedConfig.customPinned) {
      pinnedList.push({
        id: custom.id || `custom-${Math.random().toString(36).substring(2, 8)}`,
        url: custom.url || "https://www.instagram.com/mits_mpl/",
        rawImage: custom.image,
        image: custom.image,
        caption: custom.caption,
        date: custom.date || new Date().toISOString().split("T")[0],
        isReel: !!custom.isReel,
        pinned: true,
      });
    }
  }

  // B. Process fetched Instagram posts
  const userPinnedUrls = new Set(
    (pinnedConfig.pinnedUrls || []).map((u) => u.trim().toLowerCase()).filter(Boolean)
  );

  for (const post of basePosts) {
    // Skip if already in custom pinned
    if (pinnedList.some((p) => p.url && post.url && p.url === post.url)) continue;

    // Check if the user explicitly pinned this Instagram post URL
    const isPinnedByUser =
      userPinnedUrls.has((post.url || "").toLowerCase()) ||
      userPinnedUrls.has((post.id || "").toLowerCase());

    if (isPinnedByUser) {
      pinnedList.push({ ...post, pinned: true });
    } else {
      unpinnedList.push({ ...post, pinned: false });
    }
  }

  // Sort unpinned posts by date descending (newest real posts first)
  unpinnedList.sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime();
    const dateB = new Date(b.date || 0).getTime();
    return dateB - dateA;
  });

  // Combine: User-pinned items first, followed by the latest real Instagram posts
  const combined = [...pinnedList, ...unpinnedList];

  // Strictly maintain max 10 items (rolling window)
  const finalItems = combined.slice(0, MAX_ITEMS);

  console.log(`[Sync] Selected top ${finalItems.length} items (${pinnedList.length} pinned by user, ${finalItems.length - pinnedList.length} recent from Instagram).`);

  // 5. Download and process REAL Instagram thumbnails into fixed slots (highlight-1.webp .. highlight-10.webp)
  for (let i = 0; i < finalItems.length; i++) {
    const item = finalItems[i];
    item.order = i + 1;

    const sourceImage = item.rawImage || item.image;
    if (sourceImage) {
      item.image = await processImage(sourceImage, i);
    }
  }

  // 6. Clean up orphan images (> MAX_ITEMS)
  const activeFiles = new Set(finalItems.map((_, i) => `highlight-${i + 1}.webp`));
  const existingGalleryFiles = fs.readdirSync(GALLERY_DIR);
  for (const file of existingGalleryFiles) {
    if (file.startsWith("highlight-") && file.endsWith(".webp") && !activeFiles.has(file)) {
      try {
        fs.unlinkSync(path.join(GALLERY_DIR, file));
        console.log(`[Cleanup] Removed obsolete image: ${file}`);
      } catch {}
    }
  }

  // 7. Write updated feed file
  fs.writeFileSync(FEED_FILE, JSON.stringify(finalItems, null, 2), "utf-8");
  console.log(`[Success] Written ${finalItems.length} real Instagram items to ${FEED_FILE}`);

  // Calculate total gallery size
  let totalBytes = 0;
  for (const file of fs.readdirSync(GALLERY_DIR)) {
    totalBytes += fs.statSync(path.join(GALLERY_DIR, file)).size;
  }
  console.log(`[Storage] Total Instagram gallery size: ${Math.round(totalBytes / 1024)} KB (Target: < 500 KB)`);
}

main().catch((err) => {
  console.error("[Fatal Error]", err);
  process.exit(1);
});

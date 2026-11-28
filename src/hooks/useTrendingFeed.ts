import { useState, useEffect, useCallback } from "react";
import { type TrendingItem } from "@/services/googleSheetsService";

export const DEFAULT_TRENDING_ITEMS: TrendingItem[] = [
  {
    id: "ig-396315558",
    url: "https://www.instagram.com/reel/Dfm3StiD5Dk/",
    image: `https://mits.edu/gallery/instagram/highlight-1.webp`,
    caption: "⚡ 𝗧𝗘𝗥𝗔–𝟮𝗞𝟮𝟲 | 𝗣𝗼𝘄𝗲𝗿𝗶𝗻𝗴 𝗜𝗱𝗲𝗮𝘀, 𝗜𝗻𝘀𝗽𝗶𝗿𝗶𝗻𝗴 𝗜𝗻𝗻𝗼𝘃𝗮𝘁𝗶𝗼𝗻𝘀! ⚡ A glimpse into the excitement, innovation and technical brilliance of TERA–2K26.",
    date: "2026-11-11",
    isReel: true,
    pinned: false,
    order: 1,
  },
  {
    id: "ig-396315559",
    url: "https://www.instagram.com/p/Dfly2KHmlLt/",
    image: `https://mits.edu/gallery/instagram/highlight-2.webp`,
    caption: "𝗪𝗜𝗘 𝗔𝗻𝗮𝗻𝘁𝗮𝗽𝘂𝗿𝗮𝗺 𝗭𝗼𝗻𝗮𝗹 𝗖𝗼𝗻𝗴𝗿𝗲𝘀𝘀 – 𝟮𝟬𝟮𝟲! IEEE Women in Engineering Student Branch at MITS.",
    date: "2026-11-11",
    isReel: false,
    pinned: false,
    order: 2,
  },
  {
    id: "ig-396315560",
    url: "https://www.instagram.com/p/DflhOT7CePc/",
    image: `https://mits.edu/gallery/instagram/highlight-3.webp`,
    caption: "𝗡𝗮𝘁𝗶𝗼𝗻𝗮𝗹 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 𝗗𝗮𝘆 | 𝟭𝟭 𝗡𝗼𝘃𝗲𝗺𝗯𝗲𝗿 - MITS proudly celebrates National Education Day.",
    date: "2026-11-11",
    isReel: false,
    pinned: false,
    order: 3,
  },
  {
    id: "ig-396267402",
    url: "https://www.instagram.com/reel/DfkFoHmNsoA/",
    image: `https://mits.edu/gallery/instagram/highlight-4.webp`,
    caption: "🎃👻 HALLOWEEN VIBES AT MITS! 🕸️🦇 Creative costumes, thrilling moments and unforgettable memories!",
    date: "2026-11-10",
    isReel: true,
    pinned: false,
    order: 4,
  },
  {
    id: "ig-396267403",
    url: "https://www.instagram.com/p/DfjRZ6ZGvim/",
    image: `https://mits.edu/gallery/instagram/highlight-5.webp`,
    caption: "𝗣𝗵.𝗗. 𝗔𝗱𝗺𝗶𝘀𝘀𝗶𝗼𝗻𝘀 𝟮𝟬𝟮𝟲–𝟮𝟳 𝗡𝗼𝘄 𝗢𝗽𝗲𝗻 𝗮𝘁 𝗠𝗜𝗧𝗦! Apply online for doctoral research programs.",
    date: "2026-11-10",
    isReel: false,
    pinned: false,
    order: 5,
  },
  {
    id: "ig-396221907",
    url: "https://www.instagram.com/p/DfhHvTsn0LD/",
    image: `https://mits.edu/gallery/instagram/highlight-6.webp`,
    caption: "𝗗𝗢𝗡’𝗧 𝗝𝗨𝗦𝗧 𝗨𝗦𝗘 𝗔𝗜. 𝗕𝗨𝗜𝗟𝗗 𝗜𝗧! 🎓 B.Tech. in CSE (Artificial Intelligence & Machine Learning).",
    date: "2026-11-09",
    isReel: false,
    pinned: false,
    order: 6,
  },
  {
    id: "ig-396174288",
    url: "https://www.instagram.com/p/Dfdy1eiDfG8/",
    image: `https://mits.edu/gallery/instagram/highlight-7.webp`,
    caption: "𝗛𝗮𝗽𝗽𝘆 𝗗𝗶𝘄𝗮𝗹𝗶! ✨🪔 May the divine light of Diwali illuminate our lives with wisdom and happiness.",
    date: "2026-11-08",
    isReel: false,
    pinned: false,
    order: 7,
  },
  {
    id: "ig-396174289",
    url: "https://www.instagram.com/p/DfbOCiwj-WX/",
    image: `https://mits.edu/gallery/instagram/highlight-8.webp`,
    caption: "𝗪𝗮𝗿𝗺 𝗪𝗶𝘀𝗵𝗲𝘀 𝗼𝗻 𝗡𝗮𝗿𝗮𝗸𝗮 𝗖𝗵𝗮𝘁𝘂𝗿𝗱𝗮𝘀𝗵𝗶! Celebrating the triumph of light and learning.",
    date: "2026-11-07",
    isReel: false,
    pinned: false,
    order: 8,
  },
  {
    id: "ig-396174290",
    url: "https://www.instagram.com/reel/DfaFVaNNBrX/",
    image: `https://mits.edu/gallery/instagram/highlight-9.webp`,
    caption: "A Festival of Lights, Joy, Togetherness & New Beginnings! ✨🪔 Diwali celebrations at MITS campus.",
    date: "2026-11-06",
    isReel: true,
    pinned: false,
    order: 9,
  },
  {
    id: "ig-396174291",
    url: "https://www.instagram.com/p/DfX0vB4DWiV/",
    image: `https://mits.edu/gallery/instagram/highlight-10.webp`,
    caption: "𝗠𝗜𝗧𝗦 𝗛𝗢𝗦𝗧𝗦 𝗧𝗛𝗥𝗘𝗘-𝗗𝗔𝗬 𝗡𝗔𝗧𝗜𝗢𝗡𝗔𝗟 𝗪𝗢𝗥𝗞𝗦𝗛𝗢𝗣 - Hands-on engineering and industrial training.",
    date: "2026-11-06",
    isReel: false,
    pinned: false,
    order: 10,
  },
];

function normalizeImageUrl(img: string): string {
  if (!img) return "";
  if (img.startsWith("http://") || img.startsWith("https://") || img.startsWith("data:")) {
    return img;
  }
  const cleanPath = img.replace(/^\//, "");
  return `https://mits.edu/${cleanPath}`;
}

export function useTrendingFeed() {
  const [items, setItems] = useState<TrendingItem[]>(DEFAULT_TRENDING_ITEMS);
  const [loading, setLoading] = useState<boolean>(false);

  const loadFeed = useCallback(async () => {
    setLoading(true);
    try {
      // 1. Fetch the automatically synced JSON feed
      const feedUrl = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/data/trending-feed.json?t=${Date.now()}`;
      const res = await fetch(feedUrl);
      if (res.ok) {
        const json: TrendingItem[] = await res.json();
        if (Array.isArray(json) && json.length > 0) {
          // Clean and deduplicate items that have similar captions across Facebook and Instagram
          const seen = new Set<string>();
          const normalized: TrendingItem[] = [];

          for (const item of json) {
            const cleanCap = (item.caption || "")
              .normalize("NFKD")
              .replace(/<br\s*\/?>/gi, " ")
              .replace(/<\/?[^>]+(>|$)/g, " ")
              .replace(/&#039;/g, "'")
              .replace(/&apos;/g, "'")
              .replace(/&quot;/g, '"')
              .replace(/&amp;/g, "&")
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&;s/g, "'s")
              .replace(/&;/g, "")
              .replace(/#[\w_]+/g, "")
              .replace(/[\r\n\t]+/g, " ")
              .replace(/\s+/g, " ")
              .trim();

            // Key to deduplicate cross-posts between Facebook and Instagram
            const dedupKey = cleanCap.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 25);
            if (dedupKey && seen.has(dedupKey)) {
              continue;
            }
            if (dedupKey) {
              seen.add(dedupKey);
            }

            normalized.push({
              ...item,
              caption: cleanCap,
              image: normalizeImageUrl(item.image),
            });
          }

          setItems(normalized);
          setLoading(false);
          return;
        }
      }
    } catch (err) {
      console.warn("[useTrendingFeed] Could not load static JSON feed:", err);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    loadFeed();
  }, [loadFeed]);

  return {
    items,
    loading,
    refresh: loadFeed,
  };
}

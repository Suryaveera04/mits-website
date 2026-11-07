import { useState, useEffect, useCallback } from "react";
import { SHEETS_CONFIG } from "@/config/sheetsConfig";
import { fetchSheetTab, parseTrendingItems, type TrendingItem } from "@/services/googleSheetsService";

export const DEFAULT_TRENDING_ITEMS: TrendingItem[] = [
  {
    id: "ashv-2027",
    url: SHEETS_CONFIG.INSTAGRAM_PROFILE_URL,
    image: `${import.meta.env.BASE_URL}gallery/ashv(2k26).jpg`,
    caption: "ASHV 2027 moments from the campus cultural festival",
    date: "2027-03-01",
    isReel: true,
    pinned: false,
    order: 1,
  },
  {
    id: "alumni-connect",
    url: SHEETS_CONFIG.INSTAGRAM_PROFILE_URL,
    image: `${import.meta.env.BASE_URL}gallery/alumni.jpg`,
    caption: "Alumni connect and career inspiration at MITS",
    date: "2027-02-25",
    isReel: false,
    pinned: false,
    order: 2,
  },
  {
    id: "computer-lab",
    url: SHEETS_CONFIG.INSTAGRAM_PROFILE_URL,
    image: `${import.meta.env.BASE_URL}gallery/computer_Lab1.jpg`,
    caption: "Digital learning spaces and hands-on lab experiences",
    date: "2027-02-20",
    isReel: false,
    pinned: false,
    order: 3,
  },
  {
    id: "seminar-hall",
    url: SHEETS_CONFIG.INSTAGRAM_PROFILE_URL,
    image: `${import.meta.env.BASE_URL}gallery/seminar_hall_audience.jpg`,
    caption: "Guest lectures, seminars, and student engagement",
    date: "2027-02-15",
    isReel: true,
    pinned: false,
    order: 4,
  },
  {
    id: "sports-ground",
    url: SHEETS_CONFIG.INSTAGRAM_PROFILE_URL,
    image: `${import.meta.env.BASE_URL}gallery/Ground-1.JPG`,
    caption: "Sports and fitness culture across campus",
    date: "2027-02-10",
    isReel: false,
    pinned: false,
    order: 5,
  },
  {
    id: "campus-activities",
    url: SHEETS_CONFIG.INSTAGRAM_PROFILE_URL,
    image: `${import.meta.env.BASE_URL}gallery/camp1.JPG`,
    caption: "Student activities, industry visits, and campus life",
    date: "2027-02-05",
    isReel: true,
    pinned: false,
    order: 6,
  },
];

export function useTrendingFeed() {
  const [items, setItems] = useState<TrendingItem[]>(DEFAULT_TRENDING_ITEMS);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLiveSheet, setIsLiveSheet] = useState<boolean>(false);

  const loadFeed = useCallback(async () => {
    if (!SHEETS_CONFIG.SPREADSHEET_ID.trim()) return;

    setLoading(true);
    try {
      const rows = await fetchSheetTab(SHEETS_CONFIG.TRENDING_TAB);
      if (rows && rows.length > 0) {
        console.log("[MITS Trending] Loaded live rows from Google Sheet:", rows);
        const parsed = parseTrendingItems(rows);
        if (parsed.length > 0) {
          // Put sheet items first, and fill the remaining spots up to 6 with default campus highlights
          const combined: TrendingItem[] = [...parsed];
          for (const def of DEFAULT_TRENDING_ITEMS) {
            if (combined.length >= 6) break;
            if (!combined.some((c) => c.caption === def.caption || c.id === def.id)) {
              combined.push({ ...def, pinned: false });
            }
          }
          setItems(combined);
          setIsLiveSheet(true);
        }
      }
    } catch (err) {
      console.warn("[useTrendingFeed] Could not load live sheet:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadFeed();
  }, [loadFeed]);

  return {
    items,
    loading,
    isLiveSheet,
    refresh: loadFeed,
  };
}

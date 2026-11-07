import { useState, useEffect, useCallback, useMemo } from "react";
import { SHEETS_CONFIG } from "@/config/sheetsConfig";
import { fetchSheetTab, parseEventItems, type LiveEventItem } from "@/services/googleSheetsService";
import { fetchAllCMSEvents, type CMSEvent } from "@/hooks/useDeptCMSData";
import { newsEvents, type NewsEventItem } from "@/data/newsEvents";

export function useLiveEvents() {
  const [liveSheetEvents, setLiveSheetEvents] = useState<LiveEventItem[]>([]);
  const [cmsEvents, setCmsEvents] = useState<CMSEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadEvents = useCallback(async () => {
    setLoading(true);
    try {
      // 1. Fetch Google Sheets live events
      const sheetPromise = (async () => {
        if (!SHEETS_CONFIG.SPREADSHEET_ID.trim()) return [];
        try {
          const rows = await fetchSheetTab(SHEETS_CONFIG.EVENTS_TAB);
          return rows && rows.length > 0 ? parseEventItems(rows) : [];
        } catch (err) {
          console.warn("[useLiveEvents] Could not load live sheet events:", err);
          return [];
        }
      })();

      // 2. Fetch live CMS events from backend
      const cmsPromise = (async () => {
        try {
          const list = await fetchAllCMSEvents();
          return Array.isArray(list) ? list : [];
        } catch (err) {
          console.warn("[useLiveEvents] Could not load CMS events:", err);
          return [];
        }
      })();

      const [sheetData, cmsData] = await Promise.all([sheetPromise, cmsPromise]);
      setLiveSheetEvents(sheetData);
      setCmsEvents(cmsData);
    } catch (err) {
      console.warn("[useLiveEvents] Error loading events:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  // Merge: Live sheet events, live CMS events, and baseline catalog events
  const combinedEvents = useMemo(() => {
    // Convert live sheet events
    const convertedSheet: NewsEventItem[] = liveSheetEvents.map((e) => ({
      slug: e.slug,
      date: e.date,
      title: e.title,
      category: "Event" as const,
      image: e.image,
      location: e.location,
      excerpt: e.excerpt,
      details: e.details,
      pdfUrl: e.pdfUrl,
      pinned: e.pinned,
    }));

    // Convert live CMS events
    const convertedCMS: NewsEventItem[] = cmsEvents.map((ev) => {
      const cleanSlug = `cms-${ev.id}-${ev.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 50)}`;
      return {
        slug: cleanSlug,
        date: ev.from_date || ev.date || "Upcoming",
        title: ev.title,
        category: "Event" as const,
        image: ev.poster || ev.file || `${import.meta.env.BASE_URL}Hero-Section/image-2.jpg`,
        location: ev.venue || (ev.department ? `Dept. of ${ev.department}` : "MITS Campus"),
        excerpt: (ev.description || ev.title).replace(/<[^>]+>/g, "").slice(0, 160) + "...",
        details: ev.description || ev.title,
        pdfUrl: ev.file,
        pinned: false,
      };
    });

    const seenSlugs = new Set<string>();
    const seenTitles = new Set<string>();
    const result: NewsEventItem[] = [];

    // Prioritize pinned sheet events
    for (const e of convertedSheet.filter((x) => x.pinned)) {
      if (!seenSlugs.has(e.slug) && !seenTitles.has(e.title.toLowerCase().trim())) {
        seenSlugs.add(e.slug);
        seenTitles.add(e.title.toLowerCase().trim());
        result.push(e);
      }
    }

    // Next, CMS events
    for (const e of convertedCMS) {
      if (!seenSlugs.has(e.slug) && !seenTitles.has(e.title.toLowerCase().trim())) {
        seenSlugs.add(e.slug);
        seenTitles.add(e.title.toLowerCase().trim());
        result.push(e);
      }
    }

    // Next, remaining sheet events
    for (const e of convertedSheet.filter((x) => !x.pinned)) {
      if (!seenSlugs.has(e.slug) && !seenTitles.has(e.title.toLowerCase().trim())) {
        seenSlugs.add(e.slug);
        seenTitles.add(e.title.toLowerCase().trim());
        result.push(e);
      }
    }

    // Finally, baseline catalog events
    for (const e of newsEvents) {
      if (!seenSlugs.has(e.slug) && !seenTitles.has(e.title.toLowerCase().trim())) {
        seenSlugs.add(e.slug);
        seenTitles.add(e.title.toLowerCase().trim());
        result.push(e);
      }
    }

    return result;
  }, [liveSheetEvents, cmsEvents]);

  const getEventBySlug = useCallback(
    (slug: string): NewsEventItem | undefined => {
      return combinedEvents.find((e) => e.slug === slug);
    },
    [combinedEvents]
  );

  return {
    events: combinedEvents,
    getEventBySlug,
    loading,
    isLive: liveSheetEvents.length > 0 || cmsEvents.length > 0,
    refresh: loadEvents,
  };
}

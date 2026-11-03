import { useState, useEffect, useCallback, useMemo } from "react";
import { SHEETS_CONFIG } from "@/config/sheetsConfig";
import { fetchSheetTab, parseEventItems, type LiveEventItem } from "@/services/googleSheetsService";
import { newsEvents, type NewsEventItem } from "@/data/newsEvents";

export function useLiveEvents() {
  const [liveSheetEvents, setLiveSheetEvents] = useState<LiveEventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadEvents = useCallback(async () => {
    if (!SHEETS_CONFIG.SPREADSHEET_ID.trim()) return;

    setLoading(true);
    try {
      const rows = await fetchSheetTab(SHEETS_CONFIG.EVENTS_TAB);
      if (rows && rows.length > 0) {
        const parsed = parseEventItems(rows);
        if (parsed.length > 0) {
          setLiveSheetEvents(parsed);
        }
      } else {
        setLiveSheetEvents([]);
      }
    } catch (err) {
      console.warn("[useLiveEvents] Could not load live sheet events:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  // Merge: Live sheet events (pinned first) followed by baseline catalog events
  const combinedEvents = useMemo(() => {
    if (liveSheetEvents.length === 0) {
      return newsEvents;
    }

    // Convert live events into NewsEventItem structure
    const convertedLive: NewsEventItem[] = liveSheetEvents.map((e) => ({
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

    // Filter out baseline events that share the same slug
    const liveSlugs = new Set(convertedLive.map((e) => e.slug));
    const filteredBaseline = newsEvents.filter((e) => !liveSlugs.has(e.slug));

    return [...convertedLive, ...filteredBaseline];
  }, [liveSheetEvents]);

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
    isLive: liveSheetEvents.length > 0,
    refresh: loadEvents,
  };
}

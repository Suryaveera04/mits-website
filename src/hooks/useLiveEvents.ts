import { useState, useEffect, useCallback, useMemo } from "react";
import { SHEETS_CONFIG } from "@/config/sheetsConfig";
import { fetchSheetTab, parseEventItems, type LiveEventItem } from "@/services/googleSheetsService";
import { fetchAllCMSEvents, type CMSEvent } from "@/hooks/useDeptCMSData";
import { newsEvents, type NewsEventItem } from "@/data/newsEvents";

export interface CanonicalDeptInfo {
  key: string;
  name: string;
  badge: string;
}

/**
 * Normalizes raw department strings from CMS (or sheets) into canonical department info.
 * Maps variations like "Computer Applications" / "MCA", "CIVIL" / "CE", "MECH" / "ME",
 * "Basic Sciences & Humanities" / "BSH", "CS" / "CSECS", "Management Studies" / "MBA"
 * into a single canonical department.
 */
export function getCanonicalDept(rawDept?: string | null): CanonicalDeptInfo {
  if (!rawDept) return { key: "campus", name: "Campus Event", badge: "MITS" };
  const d = rawDept.toLowerCase().trim();

  if (d === "cse" || d.includes("computer science & eng") || d.includes("computer science and eng")) {
    return { key: "cse", name: "Computer Science & Engineering", badge: "CSE" };
  }
  if (d === "cst" || d.includes("computer science and tech") || d.includes("computer science & tech")) {
    return { key: "cst", name: "Computer Science & Technology", badge: "CST" };
  }
  if (d === "ai" || d === "cse-ai" || (d.includes("artificial intelligence") && !d.includes("machine learning"))) {
    return { key: "ai", name: "Artificial Intelligence", badge: "CSE (AI)" };
  }
  if (d === "aiml" || d.includes("aiml") || d.includes("ai & ml") || d.includes("machine learning")) {
    return { key: "aiml", name: "AI & Machine Learning", badge: "CSE (AI & ML)" };
  }
  if (d === "cseds" || d === "ds" || d === "aids" || d.includes("data science")) {
    return { key: "cseds", name: "Data Science", badge: "CSE (DS)" };
  }
  if (d === "csecs" || d === "cs" || d.includes("cyber")) {
    return { key: "csecs", name: "Cyber Security", badge: "Cyber Security" };
  }
  if (d === "ece" || d.includes("electronics")) {
    return { key: "ece", name: "Electronics & Communication Engineering", badge: "ECE" };
  }
  if (d === "eee" || d.includes("electrical")) {
    return { key: "eee", name: "Electrical & Electronics Engineering", badge: "EEE" };
  }
  if (d === "me" || d === "mech" || d.includes("mech") || d.includes("mechanical")) {
    return { key: "me", name: "Mechanical Engineering", badge: "Mechanical" };
  }
  if (d === "ce" || d === "civil" || d.includes("civil")) {
    return { key: "ce", name: "Civil Engineering", badge: "Civil" };
  }
  if (d === "mca" || d === "ca" || d.includes("computer application") || d.includes("mca")) {
    return { key: "mca", name: "Computer Applications", badge: "MCA" };
  }
  if (d === "mba" || d === "mna" || d.includes("management")) {
    return { key: "mba", name: "Management Studies", badge: "MBA" };
  }
  if (d === "bsh" || d.includes("basic science") || d.includes("humanities")) {
    return { key: "bsh", name: "Basic Sciences & Humanities", badge: "BSH" };
  }

  const clean = rawDept.replace(/<[^>]+>/g, "").trim();
  const key = clean.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return { key, name: clean, badge: clean };
}

export function useLiveEvents() {
  const [liveSheetEvents, setLiveSheetEvents] = useState<LiveEventItem[]>([]);
  const [cmsEvents, setCmsEvents] = useState<CMSEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  // Convert live CMS events into standard NewsEventItem format with canonical dept info
  const convertedCMS: NewsEventItem[] = useMemo(() => {
    return cmsEvents.map((ev) => {
      const cleanSlug = `cms-${ev.id}-${ev.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 50)}`;
      const deptInfo = getCanonicalDept(ev.department);
      return {
        slug: cleanSlug,
        date: ev.from_date || ev.date || "Upcoming",
        title: ev.title,
        category: "Event" as const,
        image: ev.poster || ev.file || "",
        location: ev.venue || (deptInfo.name ? `Dept. of ${deptInfo.name}` : "MITS Campus"),
        excerpt: (ev.description || ev.title).replace(/<[^>]+>/g, "").slice(0, 160) + "...",
        details: ev.description || ev.title,
        pdfUrl: ev.file,
        pinned: false,
        department: deptInfo.name,
        departmentBadge: deptInfo.badge,
        deptKey: deptInfo.key,
        id: ev.id,
      };
    });
  }, [cmsEvents]);

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
      department: "Campus",
      departmentBadge: "MITS",
      deptKey: "campus",
    }));

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

    return result;
  }, [liveSheetEvents, convertedCMS]);

  /**
   * Strictly ONE event per department:
   * 1. Groups events by canonical department.
   * 2. Within each department, prioritizes the latest event that has an image/poster.
   *    If no event in that department has a poster, picks the most recent event.
   * 3. Sorts across departments so departments with events having posters come first (ordered by recency),
   *    then any remaining departments.
   */
  const latestDeptEvents = useMemo(() => {
    if (convertedCMS.length === 0) return [];

    const deptGroups = new Map<string, NewsEventItem[]>();

    // Sort convertedCMS by entry recency: highest id first (order of entry in database)
    const sortedCMS = [...convertedCMS].sort((a, b) => {
      const idA = a.id || 0;
      const idB = b.id || 0;
      if (idA !== idB) return idB - idA;
      const da = a.date || "";
      const db = b.date || "";
      return db.localeCompare(da);
    });

    for (const ev of sortedCMS) {
      const k = ev.deptKey || "other";
      if (!deptGroups.has(k)) {
        deptGroups.set(k, []);
      }
      deptGroups.get(k)!.push(ev);
    }

    // For each department: pick the latest event with a poster image, or fallback to newest event
    const deptRepresentatives: { item: NewsEventItem; hasImage: boolean }[] = [];
    for (const [, list] of deptGroups) {
      const withPoster = list.find((e) => e.image && e.image.trim().length > 0);
      if (withPoster) {
        deptRepresentatives.push({ item: withPoster, hasImage: true });
      } else {
        deptRepresentatives.push({ item: list[0], hasImage: false });
      }
    }

    // Sort across departments: departments with poster images first (sorted by id desc), then others
    deptRepresentatives.sort((a, b) => {
      if (a.hasImage !== b.hasImage) return a.hasImage ? -1 : 1;
      const idA = a.item.id || 0;
      const idB = b.item.id || 0;
      if (idA !== idB) return idB - idA;
      return (b.item.date || "").localeCompare(a.item.date || "");
    });

    return deptRepresentatives.map((d) => d.item);
  }, [convertedCMS]);

  const getEventBySlug = useCallback(
    (slug: string): NewsEventItem | undefined => {
      return combinedEvents.find((e) => e.slug === slug);
    },
    [combinedEvents]
  );

  return {
    events: combinedEvents,
    latestDeptEvents,
    cmsEvents,
    getEventBySlug,
    loading,
    isLive: liveSheetEvents.length > 0 || cmsEvents.length > 0,
    refresh: loadEvents,
  };
}

import { SHEETS_CONFIG } from "@/config/sheetsConfig";

export interface TrendingItem {
  id: string;
  url: string;
  image: string;
  caption: string;
  date: string;
  isReel: boolean;
  pinned: boolean;
  order: number;
}

export interface LiveEventItem {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  location: string;
  excerpt: string;
  details: string;
  pdfUrl?: string;
  pinned: boolean;
}

function cleanSheetId(raw: string): string {
  const match = raw.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match) return match[1];
  return raw.split("/")[0].split("?")[0].trim();
}

/**
 * Parses Google Visualization JSON response:
 * /*O_o*\/ google.visualization.Query.setResponse({...});
 * Handles both cases: headers in cols, or headers in row 0.
 */
function parseGvizResponse(rawText: string): Record<string, string>[] {
  const start = rawText.indexOf("{");
  const end = rawText.lastIndexOf("}");
  if (start === -1 || end === -1) return [];

  let json: { table?: { cols?: { label?: string; id?: string }[]; rows?: { c?: ({ v?: unknown; f?: string } | null)[] }[] } };
  try {
    json = JSON.parse(rawText.substring(start, end + 1));
  } catch {
    return [];
  }

  const table = json.table;
  if (!table || !table.cols || !table.rows || table.rows.length === 0) return [];

  // Check if cols have labels
  let headers: string[] = table.cols.map((col) => {
    return (col.label && col.label.trim().toLowerCase()) || "";
  });

  let dataRows = table.rows;

  // If cols don't have labels, row 0 contains the headers!
  const hasColLabels = headers.some((h) => h.length > 0);
  if (!hasColLabels && table.rows.length > 0) {
    const firstRow = table.rows[0];
    if (firstRow && firstRow.c) {
      headers = firstRow.c.map((cell, idx) => {
        const val = cell?.v !== undefined && cell?.v !== null ? String(cell.v).toLowerCase().trim() : "";
        return val || `col_${idx}`;
      });
      dataRows = table.rows.slice(1);
    }
  }

  const results: Record<string, string>[] = [];

  for (const row of dataRows) {
    if (!row.c) continue;
    const entry: Record<string, string> = {};
    let hasValue = false;

    row.c.forEach((cell, idx) => {
      const header = headers[idx] || `col_${idx}`;
      const val = cell ? (cell.f !== undefined ? cell.f : cell.v) : "";
      const strVal = val !== null && val !== undefined ? String(val).trim() : "";
      if (strVal) hasValue = true;
      entry[header] = strVal;
    });

    if (hasValue) {
      results.push(entry);
    }
  }

  return results;
}

/**
 * Normalizes boolean strings ("true", "1", "yes", "pinned") to boolean
 */
function toBoolean(val?: unknown): boolean {
  if (val === true || val === 1) return true;
  if (!val) return false;
  const s = String(val).toLowerCase().trim();
  return s === "true" || s === "yes" || s === "1" || s === "pinned" || s === "y";
}

/**
 * Fetches rows from Google Sheets.
 * If tabName is "Events", strictly only queries the "Events" tab so Trending rows are never mixed in!
 */
export async function fetchSheetTab(tabName: string): Promise<Record<string, string>[]> {
  const sheetId = cleanSheetId(SHEETS_CONFIG.SPREADSHEET_ID);
  if (!sheetId) return [];

  const CACHE_VERSION = "v5";
  const cacheKey = `mits_sheet_${CACHE_VERSION}_${sheetId}_${tabName}`;
  const cacheTimeKey = `${cacheKey}_time`;

  // 1. Check client-side localStorage cache
  if (typeof window !== "undefined") {
    try {
      const cached = localStorage.getItem(cacheKey);
      const cachedTime = localStorage.getItem(cacheTimeKey);
      const ttlMs = SHEETS_CONFIG.CACHE_TTL_MINUTES * 60 * 1000;
      if (cached && cachedTime && Date.now() - parseInt(cachedTime, 10) < ttlMs) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // ignore storage access error
    }
  }

  const isEvents = tabName.toLowerCase() === "events";

  // For Events: ONLY query the specific Events tab. Do NOT fallback to default sheet!
  const candidateUrls = isEvents
    ? [
        `https://docs.google.com/spreadsheets/d/${encodeURIComponent(sheetId)}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tabName)}&headers=1`,
        `https://docs.google.com/spreadsheets/d/${encodeURIComponent(sheetId)}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tabName)}`,
        `https://opensheet.elk.sh/${encodeURIComponent(sheetId)}/${encodeURIComponent(tabName)}`,
      ]
    : [
        `https://docs.google.com/spreadsheets/d/${encodeURIComponent(sheetId)}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tabName)}&headers=1`,
        `https://docs.google.com/spreadsheets/d/${encodeURIComponent(sheetId)}/gviz/tq?tqx=out:json&headers=1`,
        `https://docs.google.com/spreadsheets/d/${encodeURIComponent(sheetId)}/gviz/tq?tqx=out:json`,
        `https://opensheet.elk.sh/${encodeURIComponent(sheetId)}/${encodeURIComponent(tabName)}`,
        `https://opensheet.elk.sh/${encodeURIComponent(sheetId)}/Sheet1`,
      ];

  for (const url of candidateUrls) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
      if (!res.ok) continue;

      if (url.includes("opensheet.elk.sh")) {
        const json = await res.json();
        if (Array.isArray(json) && json.length > 0) {
          const normalized = json.map((row: Record<string, unknown>) => {
            const entry: Record<string, string> = {};
            Object.keys(row).forEach((k) => {
              entry[k.toLowerCase().trim()] = String(row[k] ?? "").trim();
            });
            return entry;
          });
          saveCache(cacheKey, cacheTimeKey, normalized);
          return normalized;
        }
      } else {
        const text = await res.text();
        const rows = parseGvizResponse(text);
        if (rows.length > 0) {
          saveCache(cacheKey, cacheTimeKey, rows);
          return rows;
        }
      }
    } catch {
      // try next URL
    }
  }

  return [];
}

function saveCache(key: string, timeKey: string, data: Record<string, string>[]) {
  if (typeof window !== "undefined" && data.length > 0) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      localStorage.setItem(timeKey, String(Date.now()));
    } catch {
      // ignore
    }
  }
}

/**
 * Transforms raw sheet rows into typed TrendingItem objects with pinning and sorting
 */
export function parseTrendingItems(rows: Record<string, string>[]): TrendingItem[] {
  const items: TrendingItem[] = rows.map((r, idx) => {
    const title = r.title || r.caption || r.name || "Campus Highlight";
    const rawUrl =
      r.url ||
      r.instagram_url ||
      r.insta_url ||
      r.link ||
      r.reel_url ||
      SHEETS_CONFIG.INSTAGRAM_PROFILE_URL;

    const isReel =
      r.type?.toLowerCase().includes("reel") ||
      rawUrl.includes("/reel/") ||
      toBoolean(r.isreel || r.is_reel);

    const isPinned = toBoolean(r.pinned || r.is_pinned || r.is_pin || r.pin || r.highlight);
    const imgUrl =
      r.image ||
      r.image_url ||
      r.imge_url ||
      r.img_url ||
      r.img ||
      r.thumbnail ||
      r.photo ||
      r.poster;

    return {
      id: r.id || `sheet-trending-${idx}`,
      url: rawUrl,
      image: imgUrl || `${import.meta.env.BASE_URL}gallery/camp1.JPG`,
      caption: title,
      date: r.date || "",
      isReel: Boolean(isReel),
      pinned: isPinned,
      order: parseInt(r.order || String(idx + 1), 10) || idx + 1,
    };
  });

  // Sort: Pinned items first, then by date / order
  return items.sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    if (a.date && b.date) {
      const timeA = new Date(a.date).getTime();
      const timeB = new Date(b.date).getTime();
      if (!isNaN(timeA) && !isNaN(timeB)) return timeB - timeA;
    }
    return a.order - b.order;
  });
}

/**
 * Transforms raw sheet rows into typed LiveEventItem objects with pinning and sorting
 */
export function parseEventItems(rows: Record<string, string>[]): LiveEventItem[] {
  const items: LiveEventItem[] = rows.map((r, idx) => {
    const title = r.title || "Campus Event";
    const slug =
      r.slug ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const imgUrl =
      r.image ||
      r.image_url ||
      r.imge_url ||
      r.img_url ||
      r.img ||
      r.thumbnail ||
      r.photo ||
      "news-events/rampex-mou.jpg";

    const pdfUrl =
      r.pdf_url ||
      r.pdf ||
      r.pdf_link ||
      r.report_pdf ||
      r.report_link ||
      r.report_url ||
      r.report ||
      undefined;

    return {
      slug,
      title,
      date: r.date || "Upcoming",
      category: r.category || "Event",
      image: imgUrl,
      location: r.location || "MITS Campus",
      excerpt: r.excerpt || r.summary || title,
      details: r.details || r.description || r.excerpt || title,
      pdfUrl: pdfUrl || undefined,
      pinned: toBoolean(r.pinned || r.is_pinned || r.is_pin || r.pin),
    };
  });

  return items.sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    if (a.date && b.date) {
      const timeA = new Date(a.date).getTime();
      const timeB = new Date(b.date).getTime();
      if (!isNaN(timeA) && !isNaN(timeB)) return timeB - timeA;
    }
    return 0;
  });
}

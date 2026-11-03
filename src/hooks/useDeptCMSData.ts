import { useState, useEffect, useCallback } from "react";

const IS_LOCAL = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
const WORKER_URL = "https://mits-cms-proxy.23691a4054.workers.dev/public_api";
export const CMS_BASE = IS_LOCAL ? "/cms-api" : WORKER_URL;

// Primary CMS department code mapping
export const CMS_CODE: Record<string, string> = {
  cse:   "CSE",
  cst:   "CST",
  ce:    "CE",
  civil: "CE",
  eee:   "EEE",
  me:    "ME",
  mech:  "ME",
  mechanical: "ME",
  ece:   "ECE",
  ai:    "AI",
  aiml:  "AIML",
  cseds: "CSEDS",
  csecs: "CSECS",
  mca:   "MCA",
  "computer-applications": "MCA",
  mba:   "MBA",
  mna:   "MBA",
  management: "MBA",
  bsh:   "BSH",
  "basic-sciences": "BSH",
  "basic-sciences-humanities": "BSH",
};

// Alternate codes to query to make sure no data entered under aliases is missed
export const CMS_ALT_CODES: Record<string, string[]> = {
  me:    ["ME", "MECH"],
  mech:  ["ME", "MECH"],
  mechanical: ["ME", "MECH"],
  ce:    ["CE", "CIVIL"],
  civil: ["CE", "CIVIL"],
  bsh:   ["BSH", "Basic Sciences & Humanities", "Basic Sciences"],
  "basic-sciences": ["BSH", "Basic Sciences & Humanities", "Basic Sciences"],
  "basic-sciences-humanities": ["BSH", "Basic Sciences & Humanities", "Basic Sciences"],
  mca:   ["MCA", "Computer Applications", "CA"],
  "computer-applications": ["MCA", "Computer Applications", "CA"],
  mba:   ["MBA", "MNA", "Management"],
  mna:   ["MBA", "MNA", "Management"],
  management: ["MBA", "MNA", "Management"],
  cseds: ["CSEDS", "DS", "AIDS"],
  csecs: ["CSECS", "CS"],
  cst:   ["CST", "CSE"],
};

export interface CMSEvent {
  id: number;
  title: string;
  date?: string;
  from_date?: string;
  to_date?: string;
  from_time?: string | null;
  to_time?: string | null;
  type?: string;
  event_type?: string;
  venue?: string;
  department?: string;
  description?: string;
  poster?: string | null;
  // detail fields (populated by event_detail.php)
  posterDataUrl?: string | null;
  gallery?: string[];
  registrationLink?: string | null;
  registrationDeadline?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  sponsorOrg?: string | null;
  sponsorAmount?: string | null;
  collaborationDept?: string | null;
  approvedBudget?: string | null;
  totalRegistered?: number | null;
  totalAttended?: number | null;
  feedbackLink?: string | null;
  createdAt?: string;
  coordinators?: CMSEventCoordinator[];
  resourcePersons?: CMSEventResourcePerson[];
}

export interface CMSEventCoordinator {
  id: number;
  name: string;
  role?: string;
  type?: string;  // 'faculty' | 'student'
  phone?: string;
  email?: string;
}

export interface CMSEventResourcePerson {
  id: number;
  name: string;
  designation?: string;
  organization?: string;
  topic?: string;
}

export interface CMSMoU {
  id: number;
  title: string;
  organization: string;
  partner_org?: string;
  purpose?: string;
  country?: string;
  year: string;
  status?: string;
  collabAreas?: string[];
}

export interface CMSAchievement {
  id: number;
  title: string;
  type: "faculty" | "student";
  name?: string;
  date?: string;
  description?: string;
  external_link?: string;
}

export interface CMSPatent {
  id: number;
  title: string;
  status: "Filed" | "Published" | "Granted";
  patent_type?: string;
  year?: string;
  inventors?: string;
  patent_number?: string;
  application_number?: string;
  abstract?: string;
  external_link?: string;
}

export interface CMSPublication {
  id: number;
  title: string;
  type: "journal" | "conference";
  year: string;
  authors?: string;
  venue?: string;
  doi?: string;
  indexing?: string;
  citationCount?: number;
  external_link?: string;
}

export interface CMSPlacement {
  id: number;
  subtype: "Placement" | "Internship" | "Training";
  studentName?: string;
  rollNumber?: string;
  companyName?: string;
  package?: string;
  role?: string;
  year?: string;
  programTitle?: string;
  conductedBy?: string;
  startDate?: string;
  endDate?: string;
  numberOfStudents?: number;
  description?: string;
}

export interface CMSProject {
  id: number;
  title: string;
  students?: string;
  guide?: string;
  stack?: string;
  github?: string;
  demo?: string;
  description?: string;
  academicYear?: string;
}

export interface CMSDeptData {
  events: CMSEvent[];
  mous: CMSMoU[];
  achievements: CMSAchievement[];
  patents: CMSPatent[];
  publications: CMSPublication[];
  placements: CMSPlacement[];
  projects: CMSProject[];
}

// Solve the AES-CBC cookie challenge the CMS server sends to non-browser clients.
async function solveCMSChallenge(html: string, retryUrl: string): Promise<string | null> {
  const match = (pat: RegExp) => { const m = html.match(pat); return m ? m[1] : null; };
  const aHex = match(/\ba=toNumbers\("([0-9a-f]+)"\)/);
  const bHex = match(/\bb=toNumbers\("([0-9a-f]+)"\)/);
  const cHex = match(/\bc=toNumbers\("([0-9a-f]+)"\)/);
  if (!aHex || !bHex || !cHex) return null;
  try {
    const hexToBytes = (h: string) => new Uint8Array(h.match(/../g)!.map(b => parseInt(b, 16)));
    const key = await crypto.subtle.importKey("raw", hexToBytes(aHex), { name: "AES-CBC" }, false, ["decrypt"]);
    const decrypted = await crypto.subtle.decrypt({ name: "AES-CBC", iv: hexToBytes(bHex) }, key, hexToBytes(cHex));
    const cookieVal = Array.from(new Uint8Array(decrypted)).map(b => b.toString(16).padStart(2, "0")).join("");
    if (typeof document !== "undefined") {
      document.cookie = `__test=${cookieVal}; max-age=21600; path=/`;
    }
    const res = await fetch(retryUrl, { credentials: "include", signal: AbortSignal.timeout(10000) });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

export function stripPhpWarnings(text: string): string {
  const idx = text.search(/[{[]/);
  return idx > 0 ? text.slice(idx) : text;
}

export async function safeFetch<T>(endpoint: string, key: string): Promise<T[]> {
  const url = CMS_BASE + "/" + endpoint;
  try {
    const res = await fetch(url, {
      credentials: IS_LOCAL ? "include" : "omit",
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return [];
    let text = stripPhpWarnings(await res.text());
    if (IS_LOCAL && text.trimStart().startsWith("<")) {
      text = stripPhpWarnings((await solveCMSChallenge(text, url)) ?? "");
    }
    if (!text || text.trimStart().startsWith("<")) return [];
    const json = JSON.parse(text);
    return json.success ? ((json[key] as T[]) ?? []) : [];
  } catch {
    return [];
  }
}

export function normalizeEvents(items: CMSEvent[]): CMSEvent[] {
  return items.map((e) => ({
    ...e,
    type: e.type || e.event_type,
    date: e.date || e.from_date,
    poster: IS_LOCAL && e.poster
      ? e.poster.replace("https://aicampus.mits.ac.in/mits-cms/backend", "/cms-api")
      : (e.poster ?? null),
  }));
}

export function normalizeMoUs(items: CMSMoU[]): CMSMoU[] {
  return items.map((m) => ({
    ...m,
    organization: m.organization || m.partner_org || "",
  }));
}

export async function fetchEventDetail(id: number): Promise<CMSEvent | null> {
  const url = `${CMS_BASE}/event_detail.php?id=${id}`;
  try {
    const res = await fetch(url, {
      credentials: IS_LOCAL ? "include" : "omit",
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return null;
    let text = stripPhpWarnings(await res.text());
    if (IS_LOCAL && text.trimStart().startsWith("<")) {
      text = stripPhpWarnings((await solveCMSChallenge(text, url)) ?? "");
    }
    if (!text || text.trimStart().startsWith("<")) return null;
    const json = JSON.parse(text);
    if (!json.success || !json.event) return null;
    const ev = json.event as CMSEvent;
    ev.type = ev.type || ev.event_type;
    ev.date = ev.date || ev.from_date;
    if (IS_LOCAL) {
      const rewrite = (u: string | null | undefined) =>
        u ? u.replace("https://aicampus.mits.ac.in/mits-cms/backend", "/cms-api") : u;
      ev.poster = rewrite(ev.poster) ?? null;
      ev.gallery = (ev.gallery ?? []).map((u) => rewrite(u) ?? u);
    }
    return ev;
  } catch {
    return null;
  }
}

// ── Shared Cache for All CMS Events ──────────────────────────────────────────
let cachedAllEvents: CMSEvent[] = [];
let allEventsCacheExpiry = 0;
let ongoingAllEventsPromise: Promise<CMSEvent[]> | null = null;

const ALL_CMS_DEPT_CODES = [
  "CSE", "CE", "ME", "BSH", "ECE", "EEE", "AI", "AIML", "CSECS", "MCA", "MBA", "CST"
];

// Standalone event IDs known to exist in the database where department query parameter
// was entered under alternate string (e.g. ID 48 "Computer Applications", ID 33 "Biomedical Informatics")
const KNOWN_STANDALONE_EVENT_IDS = [48, 33];

/**
 * Fetches all events present in the CMS database across all departments and standalone records.
 * Uses a 2-minute in-memory cache to guarantee fast response and avoid redundant network load.
 */
export async function fetchAllCMSEvents(forceRefresh = false): Promise<CMSEvent[]> {
  const now = Date.now();
  if (!forceRefresh && cachedAllEvents.length > 0 && now < allEventsCacheExpiry) {
    return cachedAllEvents;
  }
  if (!forceRefresh && ongoingAllEventsPromise) {
    return ongoingAllEventsPromise;
  }

  ongoingAllEventsPromise = (async () => {
    const eventMap = new Map<number, CMSEvent>();

    // 1. Fetch department-specific events in parallel
    const deptFetches = ALL_CMS_DEPT_CODES.map(async (code) => {
      const list = await safeFetch<CMSEvent>(`events.php?dept=${encodeURIComponent(code)}`, "events");
      return list;
    });

    const deptResults = await Promise.all(deptFetches);
    for (const list of deptResults) {
      for (const ev of list) {
        if (ev && typeof ev.id === "number") {
          eventMap.set(ev.id, ev);
        }
      }
    }

    // 2. Fetch standalone / unqueried event IDs directly via event_detail.php
    const standaloneFetches = KNOWN_STANDALONE_EVENT_IDS.map(async (id) => {
      if (!eventMap.has(id)) {
        const detail = await fetchEventDetail(id);
        if (detail && detail.id) {
          eventMap.set(detail.id, {
            id: detail.id,
            title: detail.title,
            date: detail.date || detail.from_date,
            from_date: detail.from_date,
            to_date: detail.to_date,
            from_time: detail.from_time,
            to_time: detail.to_time,
            type: detail.type || detail.event_type,
            event_type: detail.event_type || detail.type,
            venue: detail.venue,
            department: detail.department,
            description: detail.description,
            poster: detail.poster,
          });
        }
      }
    });

    await Promise.all(standaloneFetches);

    // 3. Normalize and sort descending by date (or ID if date missing)
    const normalized = normalizeEvents(Array.from(eventMap.values())).sort((a, b) => {
      const da = a.from_date || a.date || "";
      const db = b.from_date || b.date || "";
      if (da && db && da !== db) return db.localeCompare(da);
      return b.id - a.id;
    });

    cachedAllEvents = normalized;
    allEventsCacheExpiry = Date.now() + 2 * 60 * 1000; // 2 minutes
    return normalized;
  })().finally(() => {
    ongoingAllEventsPromise = null;
  });

  return ongoingAllEventsPromise;
}

/**
 * React hook to fetch all events from the CMS database
 */
export function useAllCMSEvents() {
  const [events, setEvents] = useState<CMSEvent[]>(cachedAllEvents);
  const [loading, setLoading] = useState<boolean>(cachedAllEvents.length === 0);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async (force = false) => {
    if (cachedAllEvents.length === 0 || force) {
      setLoading(true);
    }
    try {
      const data = await fetchAllCMSEvents(force);
      setEvents(data);
      setError(null);
    } catch (e: any) {
      setError(e?.message || "Failed to load events");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { events, loading, error, refresh: () => load(true) };
}

/**
 * Checks whether an event belongs to a given department key based on department name/code
 */
export function isEventForDepartment(event: CMSEvent, deptKey: string): boolean {
  const k = deptKey.toLowerCase().trim();
  const d = (event.department || "").toLowerCase().trim();

  if (k === "cse") return d === "cse" || d.includes("computer science & eng");
  if (k === "cst") return d === "cst" || d.includes("computer science and tech");
  if (k === "ce" || k === "civil") return d === "ce" || d === "civil" || d.includes("civil");
  if (k === "me" || k === "mech" || k === "mechanical") return d === "me" || d === "mech" || d.includes("mech");
  if (k === "eee") return d === "eee" || d.includes("electrical");
  if (k === "ece") return d === "ece" || d.includes("electronics & comm");
  if (k === "ai") return d === "ai" || d === "cse-ai";
  if (k === "aiml") return d === "aiml" || d.includes("aiml") || d.includes("ai & ml") || d.includes("machine learning");
  if (k === "cseds") return d === "cseds" || d === "ds" || d === "aids" || d.includes("data science");
  if (k === "csecs") return d === "csecs" || d === "cs" || d.includes("cyber security");
  if (k === "mca" || k === "computer-applications") return d === "mca" || d.includes("computer application");
  if (k === "mba" || k === "mna" || k === "management" || k === "management-studies") return d === "mba" || d === "mna" || d.includes("management");
  if (k === "bsh" || k === "basic-sciences" || k === "basic-sciences-humanities") {
    return d === "bsh" || d.includes("basic science") || d.includes("humanities");
  }
  return false;
}

/**
 * React hook for fetching all CMS content for a department
 */
export function useDeptCMSData(deptKey: string) {
  const [data, setData] = useState<CMSDeptData>({
    events: [], mous: [], achievements: [],
    patents: [], publications: [], placements: [], projects: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const normalizedKey = (deptKey || "").toLowerCase().trim();
    const primaryCode = CMS_CODE[normalizedKey];
    if (!normalizedKey || !primaryCode) {
      setData({ events: [], mous: [], achievements: [], patents: [], publications: [], placements: [], projects: [] });
      setLoading(false);
      return;
    }
    let cancelled = false;

    // Reset to empty + show loading immediately
    setData({ events: [], mous: [], achievements: [], patents: [], publications: [], placements: [], projects: [] });
    setLoading(true);

    const codes = CMS_ALT_CODES[normalizedKey] || [primaryCode];

    // Helper to query an endpoint across all department code variants and deduplicate
    async function queryAcrossCodes<T extends { id: number }>(ep: string, key: string): Promise<T[]> {
      const results = await Promise.all(
        codes.map((code) => safeFetch<T>(`${ep}.php?dept=${encodeURIComponent(code)}`, key))
      );
      const map = new Map<number, T>();
      for (const list of results) {
        for (const item of list) {
          if (item && typeof item.id === "number") {
            map.set(item.id, item);
          }
        }
      }
      return Array.from(map.values());
    }

    Promise.all([
      queryAcrossCodes<CMSEvent>      ("events",       "events"),
      queryAcrossCodes<CMSMoU>        ("mous",         "mous"),
      queryAcrossCodes<CMSAchievement>("achievements", "achievements"),
      queryAcrossCodes<CMSPatent>     ("patents",      "patents"),
      queryAcrossCodes<CMSPublication>("publications", "publications"),
      queryAcrossCodes<CMSPlacement>  ("placements",   "placements"),
      queryAcrossCodes<CMSProject>    ("projects",     "projects"),
    ]).then(async ([events, mous, achievements, patents, publications, placements, projects]) => {
      if (cancelled) return;

      let finalEvents = normalizeEvents(events);

      // If department events list is still empty, check the global CMS events pool
      // (covers cases like MCA where event is saved with department "Computer Applications"
      // or BSH / Civil / Mechanical aliases)
      if (finalEvents.length === 0) {
        try {
          const all = await fetchAllCMSEvents();
          const matched = all.filter((e) => isEventForDepartment(e, normalizedKey));
          if (matched.length > 0) {
            finalEvents = matched;
          }
        } catch {}
      }

      if (!cancelled) {
        setData({
          events: finalEvents,
          mous: normalizeMoUs(mous),
          achievements,
          patents,
          publications,
          placements,
          projects,
        });
        setLoading(false);
      }
    }).catch(() => {
      if (!cancelled) setLoading(false);
    });

    return () => { cancelled = true; };
  }, [deptKey]);

  return { data, loading };
}

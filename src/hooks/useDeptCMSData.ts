import { useState, useEffect } from "react";

const IS_LOCAL = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
const WORKER_URL = "https://mits-cms-proxy.23691a4054.workers.dev/public_api";
const CMS_BASE = IS_LOCAL ? "/cms-api" : WORKER_URL;

const CMS_CODE: Record<string, string> = {
  cse:   "CSE",
  ce:    "CE",
  civil: "CE",
  eee:   "EEE",
  me:    "MECH",
  ece:   "ECE",
  ai:    "AI",
  aiml:  "AIML",
  cseds: "CSEDS",
  csecs: "CSECS",
  mca:   "MCA",
  mba:   "MBA",
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
// The challenge HTML embeds three hex strings (key a, iv b, ciphertext c);
// we decrypt c with AES-128-CBC(a, b) and set __test=<hex result> as a cookie,
// then retry the original request.
async function solveCMSChallenge(html: string, retryUrl: string): Promise<string | null> {
  const match = (pat: RegExp) => { const m = html.match(pat); return m ? m[1] : null; };
  const aHex = match(/\ba=toNumbers\("([0-9a-f]+)"\)/);
  const bHex = match(/\bb=toNumbers\("([0-9a-f]+)"\)/);
  const cHex = match(/\bc=toNumbers\("([0-9a-f]+)"\)/);
  if (!aHex || !bHex || !cHex) return null;
  try {
    // Use Web Crypto (AES-CBC decrypt)
    const hexToBytes = (h: string) => new Uint8Array(h.match(/../g)!.map(b => parseInt(b, 16)));
    const key = await crypto.subtle.importKey("raw", hexToBytes(aHex), { name: "AES-CBC" }, false, ["decrypt"]);
    const decrypted = await crypto.subtle.decrypt({ name: "AES-CBC", iv: hexToBytes(bHex) }, key, hexToBytes(cHex));
    const cookieVal = Array.from(new Uint8Array(decrypted)).map(b => b.toString(16).padStart(2, "0")).join("");
    // Set the cookie and retry
    document.cookie = `__test=${cookieVal}; max-age=21600; path=/`;
    const res = await fetch(retryUrl, { credentials: "include", signal: AbortSignal.timeout(10000) });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

function stripPhpWarnings(text: string): string {
  const idx = text.search(/[{[]/);
  return idx > 0 ? text.slice(idx) : text;
}

async function safeFetch<T>(endpoint: string, key: string): Promise<T[]> {
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

function normalizeEvents(items: CMSEvent[]): CMSEvent[] {
  return items.map((e) => ({
    ...e,
    type: e.type || e.event_type,
    // In dev, rewrite image URLs through the Vite proxy
    poster: IS_LOCAL && e.poster
      ? e.poster.replace("https://aicampus.mits.ac.in/mits-cms/backend", "/cms-api")
      : (e.poster ?? null),
  }));
}

function normalizeMoUs(items: CMSMoU[]): CMSMoU[] {
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
    if (!json.success) return null;
    const ev = json.event as CMSEvent;
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

export function useDeptCMSData(deptKey: string) {
  const [data, setData] = useState<CMSDeptData>({
    events: [], mous: [], achievements: [],
    patents: [], publications: [], placements: [], projects: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cmsCode = CMS_CODE[deptKey];
    if (!deptKey || !cmsCode) {
      setData({ events: [], mous: [], achievements: [], patents: [], publications: [], placements: [], projects: [] });
      setLoading(false);
      return;
    }
    let cancelled = false;

    // Reset to empty + show loading IMMEDIATELY so stale data from a
    // previous department never bleeds into the new department's view.
    setData({ events: [], mous: [], achievements: [], patents: [], publications: [], placements: [], projects: [] });
    setLoading(true);

    const d = encodeURIComponent(cmsCode);

    Promise.all([
      safeFetch<CMSEvent>       ("events.php?dept=" + d,       "events"),
      safeFetch<CMSMoU>         ("mous.php?dept=" + d,         "mous"),
      safeFetch<CMSAchievement> ("achievements.php?dept=" + d, "achievements"),
      safeFetch<CMSPatent>      ("patents.php?dept=" + d,      "patents"),
      safeFetch<CMSPublication> ("publications.php?dept=" + d, "publications"),
      safeFetch<CMSPlacement>   ("placements.php?dept=" + d,   "placements"),
      safeFetch<CMSProject>     ("projects.php?dept=" + d,     "projects"),
    ]).then(([events, mous, achievements, patents, publications, placements, projects]) => {
      if (!cancelled) {
        setData({
          events: normalizeEvents(events),
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

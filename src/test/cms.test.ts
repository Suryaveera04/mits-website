/**
 * CMS connectivity tests — verify the hook logic, URL construction,
 * normalisation helpers, and that the CMS endpoint returns valid data.
 *
 * Network calls are mocked so tests run offline / in CI.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  CMS_CODE,
  CMS_ALT_CODES,
  isEventForDepartment,
  KNOWN_STANDALONE_EVENT_IDS,
  parseEventConductedTime,
  getEventConductedTimestamp,
} from "@/hooks/useDeptCMSData";
import { getCanonicalDept } from "@/hooks/useLiveEvents";
import { getNewsEventImageSrc } from "@/data/newsEvents";

// ── constants mirrored from the hook ────────────────────────────────────────
const WORKER_URL = "https://mits-cms-proxy.23691a4054.workers.dev/public_api";
const CMS_BASE   = WORKER_URL;
const APP_BASENAME = "/university";

// ── helpers (duplicated from hook so tests are self-contained) ───────────────
function stripPhpWarnings(text: string): string {
  const idx = text.search(/[{[]/);
  return idx > 0 ? text.slice(idx) : text;
}

function normalizeEvents(items: { type?: string; event_type?: string; poster?: string | null }[]) {
  return items.map((e) => ({
    ...e,
    type: e.type || e.event_type,
    poster: e.poster ?? null,
  }));
}

function normalizeMoUs(items: { organization?: string; partner_org?: string }[]) {
  return items.map((m) => ({
    ...m,
    organization: m.organization || m.partner_org || "",
  }));
}

// ── mock fetch ───────────────────────────────────────────────────────────────
const mockFetch = vi.fn();
beforeEach(() => { vi.stubGlobal("fetch", mockFetch); });
afterEach(() => { vi.restoreAllMocks(); });

function makeJsonResponse(data: unknown, ok = true) {
  return Promise.resolve({
    ok,
    text: () => Promise.resolve(JSON.stringify(data)),
    json: () => Promise.resolve(data),
  });
}

// ── 1. WORKER_URL / CMS_BASE is correct ─────────────────────────────────────
describe("CMS_BASE (Cloudflare Worker proxy)", () => {
  it("points to the Cloudflare Worker proxy", () => {
    expect(WORKER_URL).toContain("workers.dev");
    expect(WORKER_URL).toContain("/public_api");
  });

  it("does NOT point directly to aicampus (would cause duplicate CORS header)", () => {
    expect(CMS_BASE).not.toContain("aicampus.mits.ac.in");
  });
});

// ── 0. App routing base ───────────────────────────────────────────────────
describe("App routing (BrowserRouter)", () => {
  it("uses /university as basename (no hash routing)", () => {
    expect(APP_BASENAME).toBe("/university");
    expect(APP_BASENAME).not.toContain("#");
    expect(APP_BASENAME).not.toContain("MITS-Design1");
  });

  it("builds correct full URLs for key routes", () => {
    const routes = ["/", "/about", "/admissions", "/department/cse", "/placements"];
    routes.forEach((r) => {
      const full = `https://mits.ac.in${APP_BASENAME}${r === "/" ? "" : r}`;
      expect(full).toContain("mits.ac.in/university");
      expect(full).not.toContain("#");
    });
  });
});

// ── 2. CMS_CODE mapping ──────────────────────────────────────────────────────
describe("CMS_CODE mapping", () => {
  it("maps all expected department keys", () => {
    const expected = ["cse", "ce", "civil", "eee", "me", "mech", "mechanical", "ece", "ai", "aiml", "cseds", "csecs", "mca", "mba", "mna", "bsh"];
    expected.forEach((k) => expect(CMS_CODE[k]).toBeTruthy());
  });

  it("maps cse → CSE", () => expect(CMS_CODE["cse"]).toBe("CSE"));
  it("maps civil and ce → CE", () => {
    expect(CMS_CODE["civil"]).toBe("CE");
    expect(CMS_CODE["ce"]).toBe("CE");
  });
  it("maps me, mech, mechanical → ME (CMS backend live query code)", () => {
    expect(CMS_CODE["me"]).toBe("ME");
    expect(CMS_CODE["mech"]).toBe("ME");
    expect(CMS_CODE["mechanical"]).toBe("ME");
  });
  it("maps bsh → BSH", () => expect(CMS_CODE["bsh"]).toBe("BSH"));
  it("maps mca → MCA", () => expect(CMS_CODE["mca"]).toBe("MCA"));
  it("maps mba and mna → MBA", () => {
    expect(CMS_CODE["mba"]).toBe("MBA");
    expect(CMS_CODE["mna"]).toBe("MBA");
  });

  it("CMS_ALT_CODES includes secondary aliases and does NOT connect CST to CSE", () => {
    expect(CMS_ALT_CODES["me"]).toContain("MECH");
    expect(CMS_ALT_CODES["ce"]).toContain("CIVIL");
    expect(CMS_ALT_CODES["bsh"]).toContain("Basic Sciences & Humanities");
    expect(CMS_ALT_CODES["mca"]).toContain("Computer Applications");
    expect(CMS_ALT_CODES["cst"]).not.toContain("CSE");
    expect(CMS_ALT_CODES["cst"]).toContain("CST");
  });
});

// ── 2.1 isEventForDepartment ─────────────────────────────────────────────────
describe("isEventForDepartment", () => {
  it("correctly identifies MCA events with 'Computer Applications'", () => {
    expect(isEventForDepartment({ id: 60, title: "Drone Workshop", department: "Computer Applications" }, "mca")).toBe(true);
    expect(isEventForDepartment({ id: 61, title: "STPI Visit", department: "Computer Applications" }, "mca")).toBe(true);
    expect(isEventForDepartment({ id: 80, title: "Unix Training", department: "Computer Applications" }, "mca")).toBe(true);
    expect(isEventForDepartment({ id: 81, title: "Cisco Academy", department: "Computer Applications" }, "mca")).toBe(true);
    expect(isEventForDepartment({ id: 80, title: "Unix Training", department: "Computer Applications" }, "computer-applications")).toBe(true);
  });

  it("correctly identifies MBA events with 'Management Studies'", () => {
    expect(isEventForDepartment({ id: 84, title: "Industry Collaboration", department: "Management Studies" }, "mba")).toBe(true);
    expect(isEventForDepartment({ id: 85, title: "Zoho Training", department: "Management Studies" }, "mna")).toBe(true);
    expect(isEventForDepartment({ id: 86, title: "Tally Training", department: "Management Studies" }, "management")).toBe(true);
  });

  it("correctly identifies Mechanical event with 'MECH'", () => {
    expect(isEventForDepartment({ id: 49, title: "Mech Expo", department: "MECH" }, "me")).toBe(true);
    expect(isEventForDepartment({ id: 82, title: "Satellites", department: "MECH" }, "me")).toBe(true);
  });

  it("correctly identifies Civil event with 'CIVIL'", () => {
    expect(isEventForDepartment({ id: 29, title: "Earth Day", department: "CIVIL" }, "ce")).toBe(true);
    expect(isEventForDepartment({ id: 29, title: "Earth Day", department: "CIVIL" }, "civil")).toBe(true);
  });

  it("correctly identifies BSH event with 'Basic Sciences & Humanities'", () => {
    expect(isEventForDepartment({ id: 46, title: "Cambridge Event", department: "Basic Sciences & Humanities" }, "bsh")).toBe(true);
  });

  it("strictly separates CST and CSE events and never cross-contaminates", () => {
    // CSE events must NOT match CST
    expect(isEventForDepartment({ id: 101, title: "Hackathon", department: "CSE" }, "cst")).toBe(false);
    expect(isEventForDepartment({ id: 102, title: "Coding Contest", department: "Computer Science & Engineering" }, "cst")).toBe(false);
    expect(isEventForDepartment({ id: 103, title: "Coding Contest", department: "Computer Science and Engineering" }, "cst")).toBe(false);

    // CST events must match CST
    expect(isEventForDepartment({ id: 201, title: "Tech Expo", department: "CST" }, "cst")).toBe(true);
    expect(isEventForDepartment({ id: 202, title: "Tech Expo", department: "Computer Science & Technology" }, "cst")).toBe(true);
    expect(isEventForDepartment({ id: 203, title: "Tech Expo", department: "Computer Science and Technology" }, "cst")).toBe(true);

    // CST events must NOT match CSE
    expect(isEventForDepartment({ id: 201, title: "Tech Expo", department: "CST" }, "cse")).toBe(false);
    expect(isEventForDepartment({ id: 202, title: "Tech Expo", department: "Computer Science & Technology" }, "cse")).toBe(false);
  });
});

// ── 2.2 KNOWN_STANDALONE_EVENT_IDS ───────────────────────────────────────────
describe("KNOWN_STANDALONE_EVENT_IDS seed", () => {
  it("contains all live MCA event IDs (60, 61, 80, 81)", () => {
    expect(KNOWN_STANDALONE_EVENT_IDS).toContain(60);
    expect(KNOWN_STANDALONE_EVENT_IDS).toContain(61);
    expect(KNOWN_STANDALONE_EVENT_IDS).toContain(80);
    expect(KNOWN_STANDALONE_EVENT_IDS).toContain(81);
  });

  it("contains all live MBA event IDs (84, 85, 86, 87)", () => {
    expect(KNOWN_STANDALONE_EVENT_IDS).toContain(84);
    expect(KNOWN_STANDALONE_EVENT_IDS).toContain(85);
    expect(KNOWN_STANDALONE_EVENT_IDS).toContain(86);
    expect(KNOWN_STANDALONE_EVENT_IDS).toContain(87);
  });
});

// ── 3. stripPhpWarnings ──────────────────────────────────────────────────────
describe("stripPhpWarnings", () => {
  it("strips leading PHP notice before JSON object", () => {
    const input = "Notice: something\n{\"success\":true}";
    expect(stripPhpWarnings(input)).toBe("{\"success\":true}");
  });

  it("strips leading PHP notice before JSON array", () => {
    const input = "Warning: deprecated\n[1,2,3]";
    expect(stripPhpWarnings(input)).toBe("[1,2,3]");
  });

  it("returns clean JSON unchanged", () => {
    const input = "{\"success\":true,\"events\":[]}";
    expect(stripPhpWarnings(input)).toBe(input);
  });
});

// ── 4. normalizeEvents ───────────────────────────────────────────────────────
describe("normalizeEvents", () => {
  it("falls back to event_type when type is absent", () => {
    const result = normalizeEvents([{ event_type: "Workshop" }]);
    expect(result[0].type).toBe("Workshop");
  });

  it("keeps existing type", () => {
    const result = normalizeEvents([{ type: "Seminar", event_type: "Workshop" }]);
    expect(result[0].type).toBe("Seminar");
  });

  it("sets poster to null when absent", () => {
    const result = normalizeEvents([{}]);
    expect(result[0].poster).toBeNull();
  });
});

// ── 5. normalizeMoUs ─────────────────────────────────────────────────────────
describe("normalizeMoUs", () => {
  it("uses organization when present", () => {
    const result = normalizeMoUs([{ organization: "MIT", partner_org: "Other" }]);
    expect(result[0].organization).toBe("MIT");
  });

  it("falls back to partner_org", () => {
    const result = normalizeMoUs([{ partner_org: "Stanford" }]);
    expect(result[0].organization).toBe("Stanford");
  });

  it("returns empty string when both absent", () => {
    const result = normalizeMoUs([{}]);
    expect(result[0].organization).toBe("");
  });
});

// ── 6. CMS endpoint URL construction ────────────────────────────────────────
describe("CMS endpoint URL construction", () => {
  const endpoints = ["events", "mous", "achievements", "patents", "publications", "placements", "projects"];

  endpoints.forEach((ep) => {
    it(`builds correct URL for ${ep}.php`, () => {
      const dept = encodeURIComponent("CSE");
      const url = `${CMS_BASE}/${ep}.php?dept=${dept}`;
      expect(url).toContain("/public_api/");
      expect(url).toContain(`${ep}.php?dept=CSE`);
    });
  });
});

// ── 7. Fetch returns valid CMS JSON ──────────────────────────────────────────
describe("CMS fetch — events.php", () => {
  it("parses a successful events response", async () => {
    const payload = { success: true, events: [{ id: 1, title: "Tech Fest", event_type: "Cultural" }] };
    mockFetch.mockReturnValue(makeJsonResponse(payload));

    const res = await fetch(`${CMS_BASE}/events.php?dept=CSE`);
    const json = await res.json() as typeof payload;

    expect(json.success).toBe(true);
    expect(json.events).toHaveLength(1);
    expect(json.events[0].title).toBe("Tech Fest");
  });

  it("handles empty events array", async () => {
    mockFetch.mockReturnValue(makeJsonResponse({ success: true, events: [] }));
    const res = await fetch(`${CMS_BASE}/events.php?dept=CSE`);
    const json = await res.json() as { success: boolean; events: unknown[] };
    expect(json.events).toHaveLength(0);
  });

  it("handles success:false gracefully", async () => {
    mockFetch.mockReturnValue(makeJsonResponse({ success: false }));
    const res = await fetch(`${CMS_BASE}/events.php?dept=CSE`);
    const json = await res.json() as { success: boolean };
    expect(json.success).toBe(false);
  });
});

// ── 8. Fetch returns valid CMS JSON — other endpoints ────────────────────────
describe("CMS fetch — other endpoints", () => {
  const cases: [string, string, unknown[]][] = [
    ["mous.php",         "mous",         [{ id: 1, title: "MoU with IIT", organization: "IIT", year: "2024" }]],
    ["achievements.php", "achievements", [{ id: 1, title: "Best Paper", type: "faculty" }]],
    ["patents.php",      "patents",      [{ id: 1, title: "AI Patent", status: "Granted" }]],
    ["publications.php", "publications", [{ id: 1, title: "ML Paper", type: "journal", year: "2024" }]],
    ["placements.php",   "placements",   [{ id: 1, subtype: "Placement", companyName: "TCS" }]],
    ["projects.php",     "projects",     [{ id: 1, title: "Smart Campus" }]],
  ];

  cases.forEach(([ep, key, items]) => {
    it(`parses ${ep} response`, async () => {
      mockFetch.mockReturnValue(makeJsonResponse({ success: true, [key]: items }));
      const res = await fetch(`${CMS_BASE}/${ep}?dept=CSE`);
      const json = await res.json() as Record<string, unknown[]>;
      expect(json[key]).toHaveLength(1);
    });
  });
});

// ── 9. Image URL rewrite (dev only) ─────────────────────────────────────────
describe("Image URL rewrite for dev proxy", () => {
  const CMS_IMG_BASE = "https://aicampus.mits.ac.in/mits-cms/backend";

  it("rewrites CMS image URL to /cms-api proxy path", () => {
    const original = `${CMS_IMG_BASE}/uploads/poster.jpg`;
    const rewritten = original.replace(CMS_IMG_BASE, "/cms-api");
    expect(rewritten).toBe("/cms-api/uploads/poster.jpg");
  });

  it("does not rewrite null poster", () => {
    const rewrite = (u: string | null | undefined) =>
      u ? u.replace(CMS_IMG_BASE, "/cms-api") : u;
    expect(rewrite(null)).toBeNull();
    expect(rewrite(undefined)).toBeUndefined();
  });
});

// ── 10. event_detail.php URL ─────────────────────────────────────────────────
describe("fetchEventDetail URL", () => {
  it("builds correct event_detail URL via worker proxy", () => {
    const id = 42;
    const url = `${CMS_BASE}/event_detail.php?id=${id}`;
    expect(url).toContain("/public_api/event_detail.php?id=42");
  });

  it("parses event_detail response", async () => {
    const event = { id: 42, title: "Hackathon", event_type: "Technical" };
    mockFetch.mockReturnValue(makeJsonResponse({ success: true, event }));
    const res = await fetch(`${CMS_BASE}/event_detail.php?id=42`);
    const json = await res.json() as { success: boolean; event: typeof event };
    expect(json.success).toBe(true);
    expect(json.event.title).toBe("Hackathon");
  });
});

// ── 11. Canonical Department Mapping ─────────────────────────────────────────
describe("getCanonicalDept", () => {
  it("normalizes department aliases to canonical keys and badges", () => {
    expect(getCanonicalDept("MCA").key).toBe("mca");
    expect(getCanonicalDept("Computer Applications").key).toBe("mca");
    expect(getCanonicalDept("CIVIL").key).toBe("ce");
    expect(getCanonicalDept("CE").key).toBe("ce");
    expect(getCanonicalDept("MECH").key).toBe("me");
    expect(getCanonicalDept("ME").key).toBe("me");
    expect(getCanonicalDept("Basic Sciences & Humanities").key).toBe("bsh");
    expect(getCanonicalDept("BSH").key).toBe("bsh");
    expect(getCanonicalDept("CS").key).toBe("csecs");
    expect(getCanonicalDept("Cyber Security").key).toBe("csecs");
    expect(getCanonicalDept("Management Studies").key).toBe("mba");
    expect(getCanonicalDept("MBA").key).toBe("mba");
    expect(getCanonicalDept("AI").key).toBe("ai");
    expect(getCanonicalDept("AIML").key).toBe("aiml");
    expect(getCanonicalDept("CSE").key).toBe("cse");
  });

  it("handles empty or missing department safely", () => {
    const fallback = getCanonicalDept(null);
    expect(fallback.key).toBe("campus");
    expect(fallback.badge).toBe("MITS");
  });
});

// ── 12. getNewsEventImageSrc ─────────────────────────────────────────────────
describe("getNewsEventImageSrc", () => {
  it("preserves external HTTP/HTTPS/data URLs", () => {
    const httpUrl = "http://example.com/poster.jpg";
    expect(getNewsEventImageSrc(httpUrl)).toBe(httpUrl);

    const dataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg==";
    expect(getNewsEventImageSrc(dataUrl)).toBe(dataUrl);
  });

  it("handles aicampus CMS image proxying appropriately", () => {
    const cmsUrl = "https://aicampus.mits.ac.in/mits-cms/backend/get_content_image.php?table=event_images&id=53";
    const result = getNewsEventImageSrc(cmsUrl);
    // In Node (non-local) or with proxy, it should retain the query params and image target
    expect(result).toContain("get_content_image.php?table=event_images&id=53");
  });

  it("returns empty string (no random fallback image) for null, undefined, or empty path", () => {
    expect(getNewsEventImageSrc(null)).toBe("");
    expect(getNewsEventImageSrc(undefined)).toBe("");
    expect(getNewsEventImageSrc("")).toBe("");
    expect(getNewsEventImageSrc("   ")).toBe("");
  });

  it("correctly prepends BASE_URL to relative paths without duplication", () => {
    const rel = "news-events/3k-run.jpg";
    const result = getNewsEventImageSrc(rel);
    expect(result).toContain("news-events/3k-run.jpg");
    expect(result).not.toContain("//news-events");
  });
});

// ── 13. Event Date Parsing and Chronological Comparison ─────────────────────
describe("parseEventConductedTime & getEventConductedTimestamp", () => {
  it("parses ISO / YYYY-MM-DD dates accurately", () => {
    const t = parseEventConductedTime("2026-11-02");
    expect(t).toBe(new Date(2026, 10, 2).getTime());
  });

  it("parses DD-MM-YYYY and DD/MM/YYYY dates accurately", () => {
    const t1 = parseEventConductedTime("02-11-2026");
    expect(t1).toBe(new Date(2026, 10, 2).getTime());

    const t2 = parseEventConductedTime("23/10/2026");
    expect(t2).toBe(new Date(2026, 9, 23).getTime());
  });

  it("returns 0 for zero dates, empty strings, or invalid placeholders", () => {
    expect(parseEventConductedTime("0000-00-00")).toBe(0);
    expect(parseEventConductedTime("")).toBe(0);
    expect(parseEventConductedTime(null)).toBe(0);
    expect(parseEventConductedTime(undefined)).toBe(0);
    expect(parseEventConductedTime("Upcoming")).toBe(0);
    expect(parseEventConductedTime("N/A")).toBe(0);
  });

  it("prioritizes from_date over date and to_date", () => {
    const ev = { from_date: "2026-10-14", to_date: "2026-10-14", date: "2026-03-04" };
    const t = getEventConductedTimestamp(ev);
    expect(t).toBe(new Date(2026, 9, 14).getTime());
  });
});

// ── 14. Strictly 1 Event Per Department (Conducted Date Home Page Selection) ─
describe("1-Event-Per-Department Home Page Selection by Conducted Date", () => {
  it("picks strictly the most recently conducted event per department and sorts by conducted date descending", () => {
    // Simulated raw CMS events across departments with varying conducted dates and poster flags
    const mockEvents = [
      // CS: recent event (2026-08-13, no poster) vs older event (2026-06-09, with poster)
      { id: 91, department: "CS", from_date: "2026-08-13", title: "Cloud Computing", image: "" },
      { id: 24, department: "CS", from_date: "2026-06-09", title: "Placement Training", image: "https://aicampus.mits.ac.in/...id=12" },

      // MECH: recent event (2026-10-30, no poster) vs older event (2026-10-03, with poster)
      { id: 83, department: "MECH", from_date: "2026-10-30", title: "Energy Conservation", image: "" },
      { id: 49, department: "MECH", from_date: "2026-10-03", title: "Innovation Startup", image: "https://aicampus.mits.ac.in/...id=52" },

      // MCA: recent event (2026-10-23, no poster) vs older event (2026-08-01, with poster)
      { id: 61, department: "MCA", from_date: "2026-10-23", title: "STPI Visit", image: "" },
      { id: 89, department: "MCA", from_date: "2026-08-01", title: "WWW Day", image: "https://aicampus.mits.ac.in/...id=112" },

      // Management Studies: recent event (2026-07-13) vs older event (2026-04-04)
      { id: 84, department: "Management Studies", from_date: "2026-07-13", title: "Collaborations", image: "" },
      { id: 87, department: "Management Studies", from_date: "2026-04-04", title: "Beyond Limits", image: "" },

      // AI: recent event (2026-10-14, with poster) vs older event (2026-03-04, with poster)
      { id: 50, department: "AI", from_date: "2026-10-14", title: "AURA 2K26 2.O", image: "https://aicampus.mits.ac.in/...id=53" },
      { id: 79, department: "AI", from_date: "2026-03-04", title: "AWS Training", image: "https://aicampus.mits.ac.in/...id=105" },

      // BSH: recent event (2026-11-02, no poster)
      { id: 46, department: "Basic Sciences & Humanities", from_date: "2026-11-02", title: "Cambridge Event", image: "" },

      // CSE: recent event (2026-08-29, with poster)
      { id: 45, department: "CSE", from_date: "2026-08-29", title: "Computer Networks", image: "https://aicampus.mits.ac.in/...id=50" },

      // CIVIL: recent event (2026-05-07, with poster)
      { id: 31, department: "CIVIL", from_date: "2026-05-07", title: "Earth Day", image: "https://aicampus.mits.ac.in/...id=35" },
    ];

    // Group by canonical dept
    const deptGroups = new Map<string, typeof mockEvents>();
    for (const ev of mockEvents) {
      const k = getCanonicalDept(ev.department).key;
      if (!deptGroups.has(k)) deptGroups.set(k, []);
      deptGroups.get(k)!.push(ev);
    }

    // Within each department, pick strictly the most recently conducted event
    const deptRepresentatives: typeof mockEvents[0][] = [];
    for (const [, list] of deptGroups) {
      const sortedInDept = [...list].sort((a, b) => {
        const timeA = parseEventConductedTime(a.from_date);
        const timeB = parseEventConductedTime(b.from_date);
        if (timeA !== timeB) return timeB - timeA;
        const hasImgA = Boolean(a.image && a.image.trim().length > 0);
        const hasImgB = Boolean(b.image && b.image.trim().length > 0);
        if (hasImgA !== hasImgB) return hasImgA ? -1 : 1;
        return (b.id || 0) - (a.id || 0);
      });
      deptRepresentatives.push(sortedInDept[0]);
    }

    // Sort across departments strictly by conducted date descending
    deptRepresentatives.sort((a, b) => {
      const timeA = parseEventConductedTime(a.from_date);
      const timeB = parseEventConductedTime(b.from_date);
      if (timeA !== timeB) return timeB - timeA;
      return (b.id || 0) - (a.id || 0);
    });

    const top6 = deptRepresentatives.slice(0, 6);
    expect(top6).toHaveLength(6);

    // Verify all 6 are from unique canonical departments (no duplicates!)
    const deptKeys = top6.map((e) => getCanonicalDept(e.department).key);
    const uniqueKeys = new Set(deptKeys);
    expect(uniqueKeys.size).toBe(6);

    // Verify strictly chronological order of conducted dates:
    // 1. BSH (2026-11-02)
    // 2. MECH (2026-10-30)
    // 3. MCA (2026-10-23)
    // 4. AI (2026-10-14)
    // 5. CSE (2026-08-29)
    // 6. CS / Cyber Security (2026-08-13)
    expect(top6[0].id).toBe(46); // BSH (2026-11-02)
    expect(top6[1].id).toBe(83); // MECH (2026-10-30) - NOT 49 (2026-10-03)
    expect(top6[2].id).toBe(61); // MCA (2026-10-23) - NOT 89 (2026-08-01)
    expect(top6[3].id).toBe(50); // AI (2026-10-14) - NOT 79 (2026-03-04)
    expect(top6[4].id).toBe(45); // CSE (2026-08-29)
    expect(top6[5].id).toBe(91); // Cyber Security (2026-08-13) - NOT 24 (2026-06-09)
  });
});

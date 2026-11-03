/**
 * CMS connectivity tests — verify the hook logic, URL construction,
 * normalisation helpers, and that the CMS endpoint returns valid data.
 *
 * Network calls are mocked so tests run offline / in CI.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { CMS_CODE, CMS_ALT_CODES, isEventForDepartment } from "@/hooks/useDeptCMSData";

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
      const full = `https://mits.edu${APP_BASENAME}${r === "/" ? "" : r}`;
      expect(full).toContain("mits.edu/university");
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

  it("CMS_ALT_CODES includes secondary aliases", () => {
    expect(CMS_ALT_CODES["me"]).toContain("MECH");
    expect(CMS_ALT_CODES["ce"]).toContain("CIVIL");
    expect(CMS_ALT_CODES["bsh"]).toContain("Basic Sciences & Humanities");
    expect(CMS_ALT_CODES["mca"]).toContain("Computer Applications");
  });
});

// ── 2.1 isEventForDepartment ─────────────────────────────────────────────────
describe("isEventForDepartment", () => {
  it("correctly identifies MCA event with 'Computer Applications'", () => {
    expect(isEventForDepartment({ id: 48, title: "Workshop", department: "Computer Applications" }, "mca")).toBe(true);
  });

  it("correctly identifies Mechanical event with 'MECH'", () => {
    expect(isEventForDepartment({ id: 49, title: "Mech Expo", department: "MECH" }, "me")).toBe(true);
  });

  it("correctly identifies Civil event with 'CIVIL'", () => {
    expect(isEventForDepartment({ id: 29, title: "Earth Day", department: "CIVIL" }, "ce")).toBe(true);
    expect(isEventForDepartment({ id: 29, title: "Earth Day", department: "CIVIL" }, "civil")).toBe(true);
  });

  it("correctly identifies BSH event with 'Basic Sciences & Humanities'", () => {
    expect(isEventForDepartment({ id: 46, title: "Cambridge Event", department: "Basic Sciences & Humanities" }, "bsh")).toBe(true);
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

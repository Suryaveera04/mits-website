/**
 * Cloudflare Worker — MITS CMS CORS Proxy
 *
 * Deploy steps:
 *   1. Go to https://dash.cloudflare.com → Workers & Pages → Create Worker
 *   2. Paste this entire file into the editor and click "Deploy"
 *   3. Note your worker URL, e.g. https://mits-cms-proxy.YOUR-SUBDOMAIN.workers.dev
 *   4. Set WORKER_URL in src/hooks/useDeptCMSData.ts to that URL
 *
 * The worker:
 *   - Accepts:  GET /public_api/<endpoint>?<params>
 *   - Forwards: to https://aicampus.mits.ac.in/mits-cms/backend/public_api/<endpoint>?<params>
 *   - Strips the duplicate Access-Control-Allow-Origin header the CMS sends
 *   - Sets a single clean Access-Control-Allow-Origin: * (or https://mits.edu)
 *   - Supports /public_api/all_events.php to aggregate all department events in one call
 */

const CMS_ORIGIN = "https://aicampus.mits.ac.in";
const CMS_BASE   = "/mits-cms/backend/public_api";
const ALLOWED_ORIGIN = "*";

function isDeptMatch(itemDept, targetDept) {
  if (!itemDept || !targetDept) return false;
  const a = itemDept.toLowerCase().trim();
  const b = targetDept.toLowerCase().trim();
  if (a === b) return true;
  if (b === "cse" && (a === "cse" || a.includes("computer science & eng") || a.includes("computer science and eng"))) return true;
  if (b === "cst" && (a === "cst" || a.includes("computer science and tech") || a.includes("computer science & tech"))) return true;
  if ((b === "ce" || b === "civil") && (a === "ce" || a === "civil" || a.includes("civil"))) return true;
  if ((b === "me" || b === "mech" || b === "mechanical") && (a === "me" || a === "mech" || a.includes("mech") || a.includes("mechanical"))) return true;
  if (b === "eee" && (a === "eee" || a.includes("electrical"))) return true;
  if (b === "ece" && (a === "ece" || a.includes("electronics"))) return true;
  if (b === "ai" && (a === "ai" || a === "cse-ai")) return true;
  if (b === "aiml" && (a === "aiml" || a.includes("aiml") || a.includes("machine learning"))) return true;
  if (b === "cseds" && (a === "cseds" || a === "ds" || a.includes("data science"))) return true;
  if (b === "csecs" && (a === "csecs" || a === "cs" || a.includes("cyber"))) return true;
  if ((b === "mca" || b === "ca" || b === "computer applications") && (a === "mca" || a === "ca" || a.includes("computer application") || a.includes("mca"))) return true;
  if (b === "mba" && (a === "mba" || a.includes("management"))) return true;
  if (b === "bsh" && (a === "bsh" || a.includes("basic science") || a.includes("humanities"))) return true;
  return a.includes(b) || b.includes(a);
}

// AES-128-CBC challenge solver (InfinityFree bot protection)
async function solveChallenge(html) {
  const get = (pat) => { const m = html.match(pat); return m ? m[1] : null; };
  const aHex = get(/\ba=toNumbers\("([0-9a-f]+)"\)/);
  const bHex = get(/\bb=toNumbers\("([0-9a-f]+)"\)/);
  const cHex = get(/\bc=toNumbers\("([0-9a-f]+)"\)/);
  if (!aHex || !bHex || !cHex) return null;
  const hex = (h) => new Uint8Array(h.match(/../g).map((b) => parseInt(b, 16)));
  const key = await crypto.subtle.importKey("raw", hex(aHex), { name: "AES-CBC" }, false, ["decrypt"]);
  const dec = await crypto.subtle.decrypt({ name: "AES-CBC", iv: hex(bHex) }, key, hex(cHex));
  return Array.from(new Uint8Array(dec)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function stripPhpWarnings(text) {
  const idx = text.search(/[{[]/);
  return idx > 0 ? text.slice(idx) : text;
}

async function fetchCMS(path, cookie) {
  const headers = {
    "User-Agent": "Mozilla/5.0 (compatible; MITSProxy/1.0)",
    "Accept": "application/json, */*",
  };
  if (cookie) headers["Cookie"] = "__test=" + cookie;
  return fetch(CMS_ORIGIN + path, { headers });
}

// Cached cookie (lives for the duration of the Worker isolate — typically minutes)
let cachedCookie = null;
let cacheExpiry  = 0;

async function cmsRequest(path) {
  // Try with cached cookie first
  if (cachedCookie && Date.now() < cacheExpiry) {
    const res  = await fetchCMS(path, cachedCookie);
    const text = stripPhpWarnings(await res.text());
    if (!text.trimStart().startsWith("<")) return text;
    cachedCookie = null;
  }

  // First attempt without cookie
  const res1  = await fetchCMS(path);
  const raw   = await res1.text();
  const body1 = stripPhpWarnings(raw);
  if (!body1.trimStart().startsWith("<")) return body1;

  // Solve AES challenge and retry
  const cookie = await solveChallenge(raw);
  if (!cookie) throw new Error("Could not solve CMS challenge");

  cachedCookie = cookie;
  cacheExpiry  = Date.now() + 5.5 * 60 * 60 * 1000;

  const res2  = await fetchCMS(path, cookie);
  const body2 = stripPhpWarnings(await res2.text());
  if (body2.trimStart().startsWith("<")) throw new Error("Challenge retry failed");
  return body2;
}

const ALL_DEPT_CODES = ["CSE", "CE", "ME", "BSH", "ECE", "EEE", "AI", "AIML", "CSECS", "MCA", "MBA", "CST"];
const STANDALONE_EVENT_IDS = [29, 31, 33, 46, 49, 60, 61, 80, 81, 84, 85, 86, 87];

async function handleAllEvents() {
  const eventMap = new Map();

  const results = await Promise.all(
    ALL_DEPT_CODES.map(async (d) => {
      try {
        const text = await cmsRequest(`${CMS_BASE}/events.php?dept=${encodeURIComponent(d)}`);
        const json = JSON.parse(text);
        return json.success ? (json.events || []) : [];
      } catch {
        return [];
      }
    })
  );

  for (const list of results) {
    for (const ev of list) {
      if (ev && typeof ev.id === "number") eventMap.set(ev.id, ev);
    }
  }

  await Promise.all(
    STANDALONE_EVENT_IDS.map(async (id) => {
      if (!eventMap.has(id)) {
        try {
          const text = await cmsRequest(`${CMS_BASE}/event_detail.php?id=${id}`);
          const json = JSON.parse(text);
          if (json.success && json.event) {
            const e = json.event;
            eventMap.set(id, {
              id: e.id,
              title: e.title,
              date: e.date || e.from_date,
              from_date: e.from_date,
              to_date: e.to_date,
              type: e.type || e.event_type,
              event_type: e.event_type || e.type,
              venue: e.venue,
              department: e.department,
              description: e.description,
              poster: e.poster || null,
            });
          }
        } catch {}
      }
    })
  );

  // Dynamic discovery: probe gap IDs and forward window up to maxId + 15
  const existingIds = Array.from(eventMap.keys());
  if (existingIds.length > 0) {
    const maxId = Math.max(...existingIds);
    const candidateIds = [];
    for (let id = 1; id <= maxId + 15; id++) {
      if (!eventMap.has(id)) candidateIds.push(id);
    }
    const BATCH_SIZE = 15;
    for (let i = 0; i < candidateIds.length; i += BATCH_SIZE) {
      const batch = candidateIds.slice(i, i + BATCH_SIZE);
      await Promise.all(
        batch.map(async (id) => {
          try {
            const text = await cmsRequest(`${CMS_BASE}/event_detail.php?id=${id}`);
            const json = JSON.parse(text);
            if (json.success && json.event && json.event.id) {
              const e = json.event;
              eventMap.set(e.id, {
                id: e.id,
                title: e.title,
                date: e.date || e.from_date,
                from_date: e.from_date,
                to_date: e.to_date,
                type: e.type || e.event_type,
                event_type: e.event_type || e.type,
                venue: e.venue,
                department: e.department,
                description: e.description,
                poster: e.poster || null,
              });
            }
          } catch {}
        })
      );
    }
  }

  const events = Array.from(eventMap.values()).sort((a, b) => {
    const da = a.from_date || a.date || "";
    const db = b.from_date || b.date || "";
    if (da && db && da !== db) return db.localeCompare(da);
    return b.id - a.id;
  });

  return JSON.stringify({ success: true, count: events.length, events });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    if (request.method !== "GET") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    // Route: /public_api/<anything> or direct endpoint
    let endpoint = url.pathname;
    if (endpoint.startsWith("/public_api/")) {
      endpoint = endpoint.slice("/public_api".length);
    } else if (!endpoint.startsWith("/get_subjects.php") && !endpoint.startsWith("/subjects.php") &&
               !endpoint.startsWith("/get_projects.php") && !endpoint.startsWith("/projects.php")) {
      return new Response("Not Found", { status: 404 });
    }

    // Subjects routing to origin /mits-cms/backend/get_subjects.php
    if (endpoint === "/get_subjects.php" || endpoint === "/subjects.php") {
      try {
        const body = await cmsRequest("/mits-cms/backend/get_subjects.php");
        const json = JSON.parse(body);
        let subjects = json.success ? (json.subjects || []) : [];
        const deptParam = url.searchParams.get("dept") || url.searchParams.get("department");
        if (deptParam && deptParam !== "all") {
          subjects = subjects.filter((s) => isDeptMatch(s.department, deptParam));
        }
        return new Response(JSON.stringify({ success: true, count: subjects.length, subjects }), {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
            "Access-Control-Allow-Credentials": "true",
            "Cache-Control": "public, max-age=60",
          },
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message, subjects: [] }), {
          status: 502,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
            "Access-Control-Allow-Credentials": "true",
          },
        });
      }
    }

    // Student projects routing to origin /mits-cms/backend/get_projects.php
    if (endpoint === "/get_projects.php" || endpoint === "/projects.php") {
      try {
        const body = await cmsRequest("/mits-cms/backend/get_projects.php");
        const json = JSON.parse(body);
        let projects = json.success ? (json.projects || []) : [];
        const deptParam = url.searchParams.get("dept") || url.searchParams.get("department");
        if (deptParam && deptParam !== "all") {
          projects = projects.filter((p) => isDeptMatch(p.department, deptParam));
        }
        return new Response(JSON.stringify({ success: true, count: projects.length, projects }), {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
            "Access-Control-Allow-Credentials": "true",
            "Cache-Control": "public, max-age=60",
          },
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message, projects: [] }), {
          status: 502,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
            "Access-Control-Allow-Credentials": "true",
          },
        });
      }
    }

    // Aggregate all events
    if (endpoint === "/all_events.php" || (endpoint === "/events.php" && (!url.searchParams.get("dept") || url.searchParams.get("dept") === "all"))) {
      try {
        const body = await handleAllEvents();
        return new Response(body, {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
            "Access-Control-Allow-Credentials": "true",
            "Cache-Control": "public, max-age=120",
          },
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 502,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
            "Access-Control-Allow-Credentials": "true",
          },
        });
      }
    }

    const cmsPath = CMS_BASE + endpoint + url.search;

    try {
      const body = await cmsRequest(cmsPath);
      return new Response(body, {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
          "Access-Control-Allow-Credentials": "true",
          "Cache-Control": "public, max-age=60",
        },
      });
    } catch (err) {
      return new Response(JSON.stringify({ success: false, error: err.message }), {
        status: 502,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
          "Access-Control-Allow-Credentials": "true",
        },
      });
    }
  },
};

/**
 * Production Sitemap Generator for MITS Madanapalle (https://mits.ac.in/university)
 * Generates public/sitemap.xml with strictly canonical URLs on mits.ac.in.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

export const BASE_URL = "https://mits.ac.in/university";
export const LASTMOD_DATE = new Date().toISOString().split("T")[0];

/**
 * @typedef {{ path: string; changefreq: "daily" | "weekly" | "monthly" | "yearly"; priority: string }} SitemapEntry
 */

/** @type {SitemapEntry[]} */
export const CORE_PAGES = [
  // Primary Institutional Portals
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.9" },
  { path: "/admissions", changefreq: "weekly", priority: "0.9" },
  { path: "/academics", changefreq: "monthly", priority: "0.9" },
  { path: "/departments", changefreq: "monthly", priority: "0.9" },
  { path: "/placements", changefreq: "weekly", priority: "0.9" },
  { path: "/research", changefreq: "monthly", priority: "0.8" },
  { path: "/faculty-information", changefreq: "weekly", priority: "0.9" },
  { path: "/examinations", changefreq: "weekly", priority: "0.8" },
  { path: "/academic-calendar", changefreq: "weekly", priority: "0.8" },
  { path: "/eligibility-and-fees", changefreq: "monthly", priority: "0.8" },
  { path: "/careers", changefreq: "weekly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/campus-life", changefreq: "monthly", priority: "0.8" },
  { path: "/infrastructure", changefreq: "monthly", priority: "0.8" },
  { path: "/library", changefreq: "monthly", priority: "0.8" },
  { path: "/news-events", changefreq: "weekly", priority: "0.8" },
  { path: "/gallery", changefreq: "monthly", priority: "0.7" },
  { path: "/Venture-Studio", changefreq: "monthly", priority: "0.8" },

  // Governance & Leadership
  { path: "/about/leadership", changefreq: "monthly", priority: "0.8" },
  { path: "/about/academic-leadership", changefreq: "monthly", priority: "0.7" },
  { path: "/about/deans", changefreq: "monthly", priority: "0.7" },
  { path: "/about/department-heads", changefreq: "monthly", priority: "0.7" },
  { path: "/about/executive-council", changefreq: "monthly", priority: "0.7" },
  { path: "/about/academic-council", changefreq: "monthly", priority: "0.7" },
  { path: "/about/bos", changefreq: "monthly", priority: "0.6" },
  { path: "/about/organogram", changefreq: "yearly", priority: "0.6" },
  { path: "/about/mandatory-disclosures", changefreq: "monthly", priority: "0.7" },
  { path: "/bog", changefreq: "monthly", priority: "0.6" },
  { path: "/minutes-ac", changefreq: "monthly", priority: "0.6" },
  { path: "/university-finance-committee", changefreq: "monthly", priority: "0.6" },
  { path: "/finance-committee", changefreq: "monthly", priority: "0.6" },

  // Admissions & Academics Sub-Pages
  { path: "/national-admissions-procedure", changefreq: "monthly", priority: "0.8" },
  { path: "/international-admissions-procedure", changefreq: "monthly", priority: "0.8" },
  { path: "/phd-admissions", changefreq: "weekly", priority: "0.8" },
  { path: "/academic-regulations", changefreq: "monthly", priority: "0.7" },
  { path: "/curriculum-academic-syllabus", changefreq: "monthly", priority: "0.7" },

  // Quality, Accreditation & Rankings
  { path: "/naac", changefreq: "monthly", priority: "0.8" },
  { path: "/nirf", changefreq: "monthly", priority: "0.8" },
  { path: "/iqac", changefreq: "monthly", priority: "0.8" },
  { path: "/aqarcriteria", changefreq: "monthly", priority: "0.7" },
  { path: "/affiliations-accreditations", changefreq: "monthly", priority: "0.8" },
  { path: "/public-self-disclosures", changefreq: "monthly", priority: "0.7" },
  { path: "/qs-sustainability", changefreq: "monthly", priority: "0.7" },
  { path: "/ui-greenmetric", changefreq: "monthly", priority: "0.7" },

  // Academic Departments & Faculty Roster Pages
  { path: "/department/cse", changefreq: "monthly", priority: "0.8" },
  { path: "/department/cse/faculty", changefreq: "monthly", priority: "0.7" },
  { path: "/department/ce", changefreq: "monthly", priority: "0.8" },
  { path: "/department/ce/faculty", changefreq: "monthly", priority: "0.7" },
  { path: "/department/eee", changefreq: "monthly", priority: "0.8" },
  { path: "/department/eee/faculty", changefreq: "monthly", priority: "0.7" },
  { path: "/department/me", changefreq: "monthly", priority: "0.8" },
  { path: "/department/me/faculty", changefreq: "monthly", priority: "0.7" },
  { path: "/department/ece", changefreq: "monthly", priority: "0.8" },
  { path: "/department/ece/faculty", changefreq: "monthly", priority: "0.7" },
  { path: "/department/cseds", changefreq: "monthly", priority: "0.8" },
  { path: "/department/cseds/faculty", changefreq: "monthly", priority: "0.7" },
  { path: "/department/csecs", changefreq: "monthly", priority: "0.8" },
  { path: "/department/csecs/faculty", changefreq: "monthly", priority: "0.7" },
  { path: "/department/ai", changefreq: "monthly", priority: "0.8" },
  { path: "/department/ai/faculty", changefreq: "monthly", priority: "0.7" },
  { path: "/department/aiml", changefreq: "monthly", priority: "0.8" },
  { path: "/department/aiml/faculty", changefreq: "monthly", priority: "0.7" },
  { path: "/department/mca", changefreq: "monthly", priority: "0.8" },
  { path: "/department/mca/faculty", changefreq: "monthly", priority: "0.7" },
  { path: "/department/mba", changefreq: "monthly", priority: "0.8" },
  { path: "/department/mba/faculty", changefreq: "monthly", priority: "0.7" },
  { path: "/department/bsh", changefreq: "monthly", priority: "0.8" },
  { path: "/department/bsh/faculty", changefreq: "monthly", priority: "0.7" },

  // Research, Innovation & Cells
  { path: "/research-areas", changefreq: "monthly", priority: "0.7" },
  { path: "/cells", changefreq: "monthly", priority: "0.7" },
  { path: "/cells/paarcc", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/rd-cell", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/cie", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/iic", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/edc", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/wpc", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/icc", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/grievance", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/antiragging", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/sc-st", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/obc", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/minority", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/pcc", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/sac", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/nss", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/ncc-army", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/ncc-airwing", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/nasscom", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/ieee", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/iete", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/csi", changefreq: "monthly", priority: "0.6" },
  { path: "/cells/iste", changefreq: "monthly", priority: "0.6" },
  { path: "/sdg", changefreq: "monthly", priority: "0.6" },

  // Campus Life & Athletics
  { path: "/studentclubs", changefreq: "monthly", priority: "0.7" },
  { path: "/sports", changefreq: "monthly", priority: "0.7" },
  { path: "/sports-athletics", changefreq: "monthly", priority: "0.7" },
  { path: "/campus-life/cultural-life", changefreq: "monthly", priority: "0.7" },
  { path: "/hostels", changefreq: "monthly", priority: "0.7" },

  // Specialized Training & Academies
  { path: "/cisco-networking-academy", changefreq: "monthly", priority: "0.7" },
  { path: "/cisco-self-paced-courses", changefreq: "monthly", priority: "0.7" },
  { path: "/skill-development-centre", changefreq: "monthly", priority: "0.7" },

  // International Relations
  { path: "/international-relations", changefreq: "monthly", priority: "0.7" },
  { path: "/international-relations/stanford-initiative", changefreq: "monthly", priority: "0.7" },

  // Media & Events
  { path: "/mits-radio", changefreq: "monthly", priority: "0.6" },
  { path: "/e-content", changefreq: "monthly", priority: "0.6" },
  { path: "/newsletter", changefreq: "monthly", priority: "0.6" },
  { path: "/cse-events", changefreq: "monthly", priority: "0.6" },

  // Policies & Legal
  { path: "/terms-conditions-policy", changefreq: "yearly", priority: "0.5" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.5" },
  { path: "/refund-policy", changefreq: "yearly", priority: "0.5" },
];

/**
 * Builds the complete list of sitemap URLs including dynamic faculty profiles
 * @returns {SitemapEntry[]}
 */
export function buildSitemapUrls() {
  const entries = [...CORE_PAGES];

  // Load official faculty list for dynamic profiles
  const facultyJsonPath = path.join(ROOT_DIR, "src/data/officialFacultyList.json");
  if (fs.existsSync(facultyJsonPath)) {
    try {
      const facultyData = JSON.parse(fs.readFileSync(facultyJsonPath, "utf8"));
      if (Array.isArray(facultyData)) {
        const seen = new Set();
        for (const f of facultyData) {
          if (f.deptKey && f.slug) {
            const profilePath = `/department/${f.deptKey}/faculty/${f.slug}`;
            if (!seen.has(profilePath)) {
              seen.add(profilePath);
              entries.push({
                path: profilePath,
                changefreq: "monthly",
                priority: "0.6",
              });
            }
          }
        }
      }
    } catch (err) {
      console.warn("Could not parse officialFacultyList.json for sitemap:", err);
    }
  }

  return entries;
}

/**
 * Generates the XML sitemap string
 * @returns {string}
 */
export function generateSitemapXml() {
  const entries = buildSitemapUrls();
  const xmlLines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const entry of entries) {
    const loc =
      entry.path === "/"
        ? `${BASE_URL}/`
        : `${BASE_URL}${entry.path.startsWith("/") ? entry.path : "/" + entry.path}`;
    xmlLines.push("  <url>");
    xmlLines.push(`    <loc>${loc}</loc>`);
    xmlLines.push(`    <lastmod>${LASTMOD_DATE}</lastmod>`);
    xmlLines.push(`    <changefreq>${entry.changefreq}</changefreq>`);
    xmlLines.push(`    <priority>${entry.priority}</priority>`);
    xmlLines.push("  </url>");
  }

  xmlLines.push("</urlset>");
  return xmlLines.join("\n") + "\n";
}

// Direct execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const outputPath = path.join(ROOT_DIR, "public/sitemap.xml");
  const xml = generateSitemapXml();
  fs.writeFileSync(outputPath, xml, "utf8");
  console.log(`Successfully generated ${outputPath} with ${buildSitemapUrls().length} URLs.`);
}

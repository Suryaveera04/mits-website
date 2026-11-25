import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import { buildCanonicalUrl, SITE_URL, DOMAIN_URL, DEFAULT_OG_IMAGE } from "@/components/SEO";

describe("SEO - Canonical URL generation (mits.ac.in)", () => {
  it("defaults root path to official university home URL with trailing slash", () => {
    expect(buildCanonicalUrl()).toBe("https://mits.ac.in/university/");
    expect(buildCanonicalUrl("")).toBe("https://mits.ac.in/university/");
    expect(buildCanonicalUrl("/")).toBe("https://mits.ac.in/university/");
    expect(buildCanonicalUrl("   ")).toBe("https://mits.ac.in/university/");
  });

  it("builds clean canonical URLs for standard relative routes", () => {
    expect(buildCanonicalUrl("/about")).toBe("https://mits.ac.in/university/about");
    expect(buildCanonicalUrl("about")).toBe("https://mits.ac.in/university/about");
    expect(buildCanonicalUrl("/admissions")).toBe("https://mits.ac.in/university/admissions");
    expect(buildCanonicalUrl("/department/cse")).toBe("https://mits.ac.in/university/department/cse");
    expect(buildCanonicalUrl("/department/cse/faculty/dr-m-sreedevi")).toBe(
      "https://mits.ac.in/university/department/cse/faculty/dr-m-sreedevi"
    );
  });

  it("avoids duplicate /university when path already includes basename", () => {
    expect(buildCanonicalUrl("/university/academic-calendar")).toBe(
      "https://mits.ac.in/university/academic-calendar"
    );
    expect(buildCanonicalUrl("university/academic-calendar")).toBe(
      "https://mits.ac.in/university/academic-calendar"
    );
    expect(buildCanonicalUrl("/university/faculty-information")).toBe(
      "https://mits.ac.in/university/faculty-information"
    );
    expect(buildCanonicalUrl("/university")).toBe("https://mits.ac.in/university/");
  });

  it("strips hash routing fragments (#) from canonical URLs", () => {
    expect(buildCanonicalUrl("/#about")).toBe("https://mits.ac.in/university/about");
    expect(buildCanonicalUrl("/#/about")).toBe("https://mits.ac.in/university/about");
    expect(buildCanonicalUrl("#/placements")).toBe("https://mits.ac.in/university/placements");
    expect(buildCanonicalUrl("https://mits.ac.in/university/#/admissions")).toBe(
      "https://mits.ac.in/university/admissions"
    );
  });

  it("transforms outdated GitHub Pages and staging URLs to official mits.ac.in domain", () => {
    expect(buildCanonicalUrl("https://ragupathi05.github.io/MITS-Design1/#/about")).toBe(
      "https://mits.ac.in/university/about"
    );
    expect(buildCanonicalUrl("https://ragupathi05.github.io/MITS-Design1/#/")).toBe(
      "https://mits.ac.in/university/"
    );
    expect(buildCanonicalUrl("https://mits.edu/university/about")).toBe(
      "https://mits.ac.in/university/about"
    );
  });

  it("guarantees no canonical URL ever contains '#', 'github.io', or 'mits.edu'", () => {
    const testCases = [
      "/",
      "/about",
      "/#/about",
      "https://ragupathi05.github.io/MITS-Design1/#/contact",
      "https://mits.edu/university/examinations",
    ];
    testCases.forEach((tc) => {
      const canonical = buildCanonicalUrl(tc);
      expect(canonical).not.toContain("#");
      expect(canonical).not.toContain("github.io");
      expect(canonical).not.toContain("mits.edu");
      expect(canonical).toContain("mits.ac.in/university");
    });
  });

  it("exports official constants for site and domain", () => {
    expect(SITE_URL).toBe("https://mits.ac.in/university");
    expect(DOMAIN_URL).toBe("https://mits.ac.in");
    expect(DEFAULT_OG_IMAGE).toBe("https://mits.ac.in/university/mits-logo.png");
  });
});

describe("robots.txt configuration", () => {
  const robotsPath = path.resolve(__dirname, "../../public/robots.txt");

  it("exists in the public directory", () => {
    expect(fs.existsSync(robotsPath)).toBe(true);
  });

  it("declares crawler access and points strictly to mits.ac.in sitemaps", () => {
    const content = fs.readFileSync(robotsPath, "utf8");
    expect(content).toContain("User-agent: *");
    expect(content).toContain("Allow: /");
    expect(content).toContain("Sitemap: https://mits.ac.in/university/sitemap.xml");
    expect(content).not.toContain("github.io");
    expect(content).not.toContain("MITS-Design1");
    expect(content).not.toContain("mits.edu");
  });
});

describe("sitemap.xml configuration", () => {
  const sitemapPath = path.resolve(__dirname, "../../public/sitemap.xml");

  it("exists in public directory and is valid XML", () => {
    expect(fs.existsSync(sitemapPath)).toBe(true);
    const content = fs.readFileSync(sitemapPath, "utf8");
    expect(content.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    expect(content).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(content).toContain("</urlset>");
  });

  it("contains 200+ canonical URLs including core pages and faculty profiles", () => {
    const content = fs.readFileSync(sitemapPath, "utf8");
    const locMatches = [...content.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    expect(locMatches.length).toBeGreaterThan(200);

    // Verify key institutional pages
    expect(locMatches).toContain("https://mits.ac.in/university/");
    expect(locMatches).toContain("https://mits.ac.in/university/about");
    expect(locMatches).toContain("https://mits.ac.in/university/admissions");
    expect(locMatches).toContain("https://mits.ac.in/university/placements");
    expect(locMatches).toContain("https://mits.ac.in/university/academics");
    expect(locMatches).toContain("https://mits.ac.in/university/faculty-information");
    expect(locMatches).toContain("https://mits.ac.in/university/academic-calendar");
    expect(locMatches).toContain("https://mits.ac.in/university/examinations");
    expect(locMatches).toContain("https://mits.ac.in/university/department/cse");
    expect(locMatches).toContain("https://mits.ac.in/university/department/ece");
    expect(locMatches).toContain("https://mits.ac.in/university/department/bsh");
  });

  it("contains zero hash fragments (#) or outdated hostnames in any <loc>", () => {
    const content = fs.readFileSync(sitemapPath, "utf8");
    const locMatches = [...content.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

    locMatches.forEach((loc) => {
      expect(loc).not.toContain("#");
      expect(loc).not.toContain("github.io");
      expect(loc).not.toContain("MITS-Design1");
      expect(loc).not.toContain("mits.edu");
      expect(loc.startsWith("https://mits.ac.in/university/")).toBe(true);
    });
  });

  it("ensures every entry has lastmod, valid changefreq and priority", () => {
    const content = fs.readFileSync(sitemapPath, "utf8");
    const urlBlocks = content.split("<url>").slice(1);

    expect(urlBlocks.length).toBeGreaterThan(200);
    urlBlocks.forEach((block) => {
      expect(block).toContain("<loc>");
      expect(block).toContain("<lastmod>");
      expect(block).toContain("<changefreq>");
      expect(block).toContain("<priority>");

      const priorityMatch = block.match(/<priority>([0-9.]+)<\/priority>/);
      expect(priorityMatch).not.toBeNull();
      const p = parseFloat(priorityMatch![1]);
      expect(p).toBeGreaterThanOrEqual(0.1);
      expect(p).toBeLessThanOrEqual(1.0);
    });
  });
});

describe("index.html SEO & Open Graph tags", () => {
  const indexPath = path.resolve(__dirname, "../../index.html");

  it("references canonical and Open Graph metadata on mits.ac.in", () => {
    const content = fs.readFileSync(indexPath, "utf8");
    expect(content).toContain('<link rel="canonical" href="https://mits.ac.in/university/" />');
    expect(content).toContain('<meta property="og:url" content="https://mits.ac.in/university/" />');
    expect(content).toContain('<meta property="og:image" content="https://mits.ac.in/university/mits-logo.png" />');
    expect(content).toContain('<meta name="twitter:image" content="https://mits.ac.in/university/mits-logo.png" />');
    expect(content).not.toContain("mits.edu");
    expect(content).not.toContain("github.io");
  });
});

describe("Index.tsx Schema.org metadata", () => {
  const indexTsxPath = path.resolve(__dirname, "../pages/Index.tsx");

  it("references mits.ac.in for organization url and logo", () => {
    const content = fs.readFileSync(indexTsxPath, "utf8");
    expect(content).toContain('"url": "https://mits.ac.in/university"');
    expect(content).toContain('"logo": "https://mits.ac.in/university/mits-logo.png"');
    expect(content).not.toContain("ragupathi05.github.io");
    expect(content).not.toContain("MITS-Design1");
  });
});

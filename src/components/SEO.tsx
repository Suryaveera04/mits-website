import { Helmet } from "react-helmet-async";

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  jsonLd?: object | object[];
  keywords?: string | string[];
  noindex?: boolean;
}

export const DOMAIN_URL = "https://mits.ac.in";
export const SITE_URL = "https://mits.ac.in/university";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/mits-logo.png`;
export const SITE_NAME = "Madanapalle Institute of Technology & Science";

/**
 * Builds an absolute canonical URL on the official mits.ac.in domain.
 * Strictly prevents hash routing fragments, trailing duplicate paths, or outdated staging/GitHub domains.
 */
export function buildCanonicalUrl(canonical?: string): string {
  if (!canonical || canonical.trim() === "" || canonical.trim() === "/") {
    return `${SITE_URL}/`;
  }

  let clean = canonical.trim();

  // Strip accidental hash fragment e.g. /#about or #/about
  clean = clean.replace(/#\/?/g, "");

  // If already an absolute URL, normalize domain to mits.ac.in
  if (/^https?:\/\//i.test(clean)) {
    clean = clean.replace(/#.*$/, "");
    clean = clean
      .replace(/https?:\/\/[^/]+\.github\.io\/[^/]+/i, SITE_URL)
      .replace(/https?:\/\/mits\.edu\/university/i, SITE_URL)
      .replace(/https?:\/\/mits\.edu/i, DOMAIN_URL);

    // If it's https://mits.ac.in without path or just /
    if (clean === DOMAIN_URL || clean === `${DOMAIN_URL}/`) {
      return `${SITE_URL}/`;
    }
    return clean;
  }

  // Remove leading slashes
  clean = clean.replace(/^\/+/, "");

  // Handle paths that already start with "university/"
  if (clean.startsWith("university/")) {
    return `${DOMAIN_URL}/${clean}`;
  }
  if (clean === "university") {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}/${clean}`;
}

const SEO = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage,
  jsonLd,
  keywords,
  noindex = false,
}: SEOProps) => {
  const fullCanonical = buildCanonicalUrl(canonical);
  const fullOgImage = ogImage
    ? (/^https?:\/\//i.test(ogImage) ? ogImage : `${SITE_URL}/${ogImage.replace(/^\/+/, "")}`)
    : DEFAULT_OG_IMAGE;

  const keywordsString = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords ||
      "MITS Madanapalle, Madanapalle Institute of Technology & Science, NAAC A+, Deemed University, Engineering Colleges Andhra Pradesh, B.Tech, M.Tech, MBA, MCA, Placements";

  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  // Guarantee page title ends with clean branding if not already present
  const fullTitle = title.includes("MITS") ? title : `${title} | MITS Madanapalle`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content={SITE_NAME} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:alt" content="MITS Madanapalle Logo" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:site" content="@MITSMadanapalle" />
      <meta name="twitter:creator" content="@MITSMadanapalle" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* JSON-LD structured data */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;

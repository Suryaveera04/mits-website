import { useEffect, useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  ArrowLeft, ArrowRight, Mail, GraduationCap, BookOpen,
  Award, FileText, Users, ExternalLink, ChevronRight, Sparkles, Briefcase
} from "lucide-react";
import { getPlacementFacultyProfile, allPlacementFaculty, type PlacementFacultyProfile } from "@/data/placementFacultyData";

// ─── helpers ─────────────────────────────────────────────────────────────────

const KNOWN_LINK_BRANDS: Record<string, { color: string; label: string }> = {
  scopus: { color: "from-orange-500 to-red-500", label: "Scopus" },
  vidwan: { color: "from-emerald-600 to-teal-600", label: "Vidwan" },
  scholar: { color: "from-blue-600 to-indigo-600", label: "Google Scholar" },
  google: { color: "from-blue-600 to-indigo-600", label: "Google Scholar" },
  orcid: { color: "from-green-600 to-lime-600", label: "ORCID" },
  researchgate: { color: "from-cyan-600 to-sky-600", label: "ResearchGate" },
  linkedin: { color: "from-blue-700 to-blue-500", label: "LinkedIn" },
};

function brandFor(identifier: string) {
  const key = identifier.toLowerCase();
  for (const k of Object.keys(KNOWN_LINK_BRANDS)) {
    if (key.includes(k)) return KNOWN_LINK_BRANDS[k];
  }
  return { color: "from-slate-700 to-slate-500", label: identifier };
}

function isTableContent(content: unknown): content is Record<string, string>[] {
  if (!Array.isArray(content) || content.length === 0) return false;
  return typeof content[0] === "object" && content[0] !== null;
}

function isLinkList(content: unknown): boolean {
  if (!Array.isArray(content) || content.length === 0) return false;
  const first = content[0];
  if (typeof first !== "object" || first === null) return false;
  return "Link" in first && "Identifier" in first;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function renderSectionContent(section: { content: unknown }) {
  const content = section.content;
  if (typeof content === "string") {
    return <p className="text-slate-700 leading-relaxed whitespace-pre-line">{content}</p>;
  }
  if (Array.isArray(content)) {
    if (isLinkList(content)) {
      const items = content as Record<string, string>[];
      return (
        <ul className="space-y-2">
          {items.map((it, i) => (
            <li key={i} className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-semibold text-secondary">{it.Identifier}:</span>
              {it.Link?.startsWith("http") ? (
                <a href={it.Link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">{it.Link}</a>
              ) : (
                <span className="text-slate-600">{it.Link}</span>
              )}
            </li>
          ))}
        </ul>
      );
    }
    if (isTableContent(content)) {
      const rows = content;
      const columns = Object.keys(rows[0]);
      return (
        <>
          <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
                <tr>
                  {columns.map((c) => (
                    <th key={c} className="px-4 py-3 text-left font-semibold whitespace-nowrap">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((r, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 odd:bg-white even:bg-slate-50/30">
                    {columns.map((c) => (
                      <td key={c} className="px-4 py-3 text-slate-700 align-top">{r[c] || "–"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-3">
            {rows.map((r, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                {columns.map((c) => (
                  <div key={c} className="flex flex-col py-1.5 border-b border-slate-100 last:border-0">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{c}</span>
                    <span className="text-sm text-slate-800">{r[c] || "–"}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      );
    }
    return (
      <ul className="space-y-2">
        {(content as string[]).map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-700">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return null;
}

const SECTION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Details of Educational Qualification": GraduationCap,
  "Education": GraduationCap,
  "Research Areas": Sparkles,
  "Research Identifiers": ExternalLink,
  "Publication Details": BookOpen,
  "Publications": BookOpen,
  "Patents": FileText,
  "Awards/Achievements": Award,
  "Projects": Briefcase,
  "Books": BookOpen,
  "Conferences": Users,
};

// ─── page ─────────────────────────────────────────────────────────────────────

const PlacementFacultyProfilePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const { profile, prev, next, index } = useMemo(() => {
    if (!slug) return { profile: undefined, prev: undefined, next: undefined, index: -1 };
    const idx = allPlacementFaculty.findIndex((f) => f.slug === slug);
    if (idx < 0) return { profile: undefined, prev: undefined, next: undefined, index: -1 };
    return {
      profile: allPlacementFaculty[idx],
      prev: allPlacementFaculty[idx - 1],
      next: allPlacementFaculty[idx + 1],
      index: idx,
    };
  }, [slug]);

  useEffect(() => {
    if (slug && !profile) navigate("/placements", { replace: true });
  }, [slug, profile, navigate]);

  if (!profile) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />
        <div className="container mx-auto px-4 py-24 text-center text-slate-500">Loading profile…</div>
        <Footer />
      </div>
    );
  }

  // Extract research links + h-index
  const idSection = profile.sections.find((s) => /research identifier/i.test(s.title));
  const researchLinks: { label: string; url: string; color: string }[] = [];
  let hIndex: string | undefined;
  if (idSection && Array.isArray(idSection.content)) {
    for (const item of idSection.content as unknown[]) {
      if (typeof item === "object" && item !== null && "Identifier" in item) {
        const obj = item as Record<string, string>;
        if (!obj.Identifier) continue;
        if (/h-?index/i.test(obj.Identifier)) { hIndex = obj.Link; continue; }
        if (obj.Link?.startsWith("http")) {
          const b = brandFor(obj.Identifier);
          researchLinks.push({ label: b.label, url: obj.Link, color: b.color });
        }
      } else if (typeof item === "string") {
        if (/h-?index/i.test(item)) {
          const hMatch = item.match(/:\s*(\d+)/);
          if (hMatch) hIndex = hMatch[1];
          continue;
        }
        const urlMatch = item.match(/(https?:\/\/[^\s]+)/);
        if (urlMatch) {
          const url = urlMatch[1];
          const labelPart = item.split(":")[0]?.trim() || item;
          const b = brandFor(labelPart);
          researchLinks.push({ label: b.label, url, color: b.color });
        }
      }
    }
  }

  const pubSection = profile.sections.find((s) => /publication/i.test(s.title));
  const pubCount = Array.isArray(pubSection?.content) ? (pubSection!.content as unknown[]).length : 0;
  const patentSection = profile.sections.find((s) => /patent/i.test(s.title));
  const patentCount = Array.isArray(patentSection?.content) ? (patentSection!.content as unknown[]).length : 0;
  const eduSection = profile.sections.find((s) => /educational qualification|education/i.test(s.title));
  const eduCount = Array.isArray(eduSection?.content) ? (eduSection!.content as unknown[]).length : 0;
  const researchAreasSection = profile.sections.find((s) => /research area/i.test(s.title));
  const researchTags = typeof researchAreasSection?.content === "string"
    ? researchAreasSection!.content.split(/,|;/).map((s) => s.trim()).filter(Boolean)
    : Array.isArray(researchAreasSection?.content)
      ? (researchAreasSection!.content as string[])
      : [];

  const mainSections = profile.sections.filter(
    (s) => !/research identifier|research area/i.test(s.title)
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <SEO
        title={`${profile.name} – ${profile.designation} | MITS Madanapalle`}
        description={`${profile.name}, ${profile.designation} at MITS Madanapalle. ${profile.qualification || ""}`}
        canonical={`/placements/team/${profile.slug}`}
      />
      <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-[#0a1f33] text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-primary blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-accent blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 pt-6 pb-12 md:pt-10 md:pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm md:text-sm text-white/70 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/placements" className="hover:text-white">Placements</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/placements#placement-training-team" className="hover:text-white">Placement & Training Team</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-medium">{profile.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-[auto,1fr] gap-6 md:gap-10 items-center"
          >
            <div className="relative mx-auto md:mx-0">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent to-primary blur-xl opacity-50" />
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-slate-200">
                {profile.image && !imgError ? (
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 text-white font-extrabold text-5xl">
                    {getInitials(profile.name)}
                  </div>
                )}
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="inline-block text-[11px] tracking-[0.3em] uppercase font-semibold text-accent mb-3 px-3 py-1 rounded-full bg-white/10 border border-white/15">
                {profile.team === "placement" ? "Placement Team" : "Training Team"}
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight text-white" style={{ fontFamily: "var(--font-body)" }}>
                {profile.name}
              </h1>
              <p className="text-lg md:text-xl text-accent font-medium mb-3">{profile.designation}</p>
              {profile.qualification && (
                <p className="text-sm text-white/70 mb-4">{profile.qualification}</p>
              )}
              {profile.department && (
                <p className="text-sm text-white/70 mb-4">Department: {profile.department}</p>
              )}
              {profile.email && (
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-white/90 hover:text-accent text-sm">
                  <Mail className="w-4 h-4" /> {profile.email}
                </a>
              )}
            </div>
          </motion.div>

          {/* Stats strip */}
          {(pubCount + patentCount + eduCount > 0 || hIndex) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10"
            >
              {[
                { label: "Publications", value: pubCount, icon: BookOpen, show: pubCount > 0 },
                { label: "Patents", value: patentCount, icon: FileText, show: patentCount > 0 },
                { label: "Qualifications", value: eduCount, icon: GraduationCap, show: eduCount > 0 },
                { label: "h-Index (Scopus)", value: hIndex, icon: Sparkles, show: !!hIndex },
              ].filter((s) => s.show).map((s, i) => (
                <div key={i} className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 px-4 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold leading-none">{s.value}</div>
                    <div className="text-[11px] uppercase tracking-wider text-white/70 mt-1">{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* BODY */}
      <main className="container mx-auto px-4 py-10 md:py-14 flex-1 w-full">
        <div className="grid lg:grid-cols-[300px,1fr] gap-8">
          {/* SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            {/* Research links */}
            {researchLinks.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-4">Research Profiles</h3>
                <div className="space-y-2">
                  {researchLinks.map((l, i) => (
                    <a
                      key={i}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-between gap-3 rounded-xl px-4 py-3 bg-gradient-to-r ${l.color} text-white font-semibold text-sm shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all`}
                    >
                      <span className="flex items-center gap-2"><ExternalLink className="w-4 h-4" /> {l.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Expertise tags */}
            {researchTags.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-4">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {researchTags.map((t, i) => (
                    <span key={i} className="text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">{t}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Back button */}
            <Link
              to="/placements#placement-training-team"
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-secondary hover:bg-secondary hover:text-white transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Team
            </Link>
          </aside>

          {/* MAIN CONTENT */}
          <div className="space-y-6 min-w-0">
            {mainSections.length === 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center text-slate-500">
                Detailed academic profile is being updated. Please check the official MITS faculty profile for the latest information.
              </div>
            )}

            {mainSections.map((section, i) => {
              const Icon = SECTION_ICONS[section.title] || BookOpen;
              return (
                <motion.section
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.2) }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
                >
                  <header className="flex items-center gap-3 px-5 md:px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-secondary" style={{ fontFamily: "var(--font-body)" }}>
                      {section.title}
                    </h2>
                  </header>
                  <div className="p-5 md:p-6">{renderSectionContent(section)}</div>
                </motion.section>
              );
            })}

            {/* Prev / Next */}
            {(prev || next) && (
              <div className="grid sm:grid-cols-2 gap-3 pt-4">
                {prev ? (
                  <Link
                    to={`/placements/team/${prev.slug}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-4 hover:border-primary/40 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-slate-500 mb-1">
                      <ArrowLeft className="w-3 h-3" /> Previous
                    </div>
                    <div className="font-bold text-secondary group-hover:text-primary">{prev.name}</div>
                    <div className="text-sm text-slate-500">{prev.designation}</div>
                  </Link>
                ) : <div />}
                {next ? (
                  <Link
                    to={`/placements/team/${next.slug}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-4 hover:border-primary/40 hover:shadow-md transition-all text-right"
                  >
                    <div className="flex items-center justify-end gap-2 text-[11px] uppercase tracking-widest text-slate-500 mb-1">
                      Next <ArrowRight className="w-3 h-3" />
                    </div>
                    <div className="font-bold text-secondary group-hover:text-primary">{next.name}</div>
                    <div className="text-sm text-slate-500">{next.designation}</div>
                  </Link>
                ) : <div />}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PlacementFacultyProfilePage;

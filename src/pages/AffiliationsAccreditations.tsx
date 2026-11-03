import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  FileText,
  ExternalLink,
  Award,
  Shield,
  GraduationCap,
  Microscope,
  BadgeCheck,
  Landmark,
  ScrollText,
  Building2,
  BarChart3,
  LucideIcon,
} from "lucide-react";
const BASE = import.meta.env.BASE_URL;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ugcDocs,
  aiuDoc,
  aicteApprovals,
  nbaAccreditations,
  isoCertUrl,
  ugc2f12bUrl,
} from "@/data/affiliationsData";

type SectionKey =
  | "ugc"
  | "aiu"
  | "aicte"
  | "naac"
  | "nirf"
  | "nba"
  | "research"
  | "ugc2f12b"
  | "dsir"
  | "iso";

const sections: { key: SectionKey; title: string; icon: LucideIcon }[] = [
  { key: "ugc", title: "UGC – Deemed to be University Approval", icon: Landmark },
  { key: "aiu", title: "Affiliation to Association of Indian Universities (AIU)", icon: GraduationCap },
  { key: "aicte", title: "Approved by AICTE, New Delhi", icon: ScrollText },
  { key: "naac", title: "Accredited by NAAC", icon: Award },
  { key: "nirf", title: "National Institutional Ranking Framework", icon: BarChart3 },
  { key: "nba", title: "Accredited by NBA for CIVIL, CSE, ECE, EEE, ME, MBA & MCA", icon: BadgeCheck },
  { key: "research", title: "Recognised Research Centre", icon: Microscope },
  { key: "ugc2f12b", title: "Recognised by UGC under Sections 2(f) & 12(B)", icon: Shield },
  { key: "dsir", title: "Recognised as Scientific & Industrial Research Organisation (SIRO)", icon: Building2 },
  { key: "iso", title: "ISO 21001:2018 Certificate", icon: BadgeCheck },
];

const PdfLink = ({ title, url, highlight = false }: { title: string; url: string; highlight?: boolean }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -2 }}
    className={`group flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm transition-all hover:shadow-[0_12px_32px_rgba(15,42,68,0.12)] hover:border-[#caa74d] ${
      highlight ? "border-[#caa74d]/60 bg-gradient-to-br from-[#fff8e6] to-white" : "border-[#0f2a44]/10"
    }`}
  >
    <div className={`shrink-0 w-11 h-11 rounded-lg flex items-center justify-center text-white ${highlight ? "bg-gradient-to-br from-[#caa74d] to-[#a8862e]" : "bg-gradient-to-br from-[#b31317] to-[#7a0a0d]"}`}>
      <FileText className="w-5 h-5" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-body font-semibold text-[#0f2a44] text-sm leading-snug">{title}</p>
      <p className="font-body text-[11px] uppercase tracking-wider text-[#0f2a44]/55 mt-0.5">PDF · View / Download</p>
    </div>
    <ExternalLink className="w-4 h-4 text-[#0f2a44]/40 group-hover:text-[#b31317]" />
  </motion.a>
);

const AffiliationsAccreditations = () => {
  const [open, setOpen] = useState<Record<SectionKey, boolean>>({
    ugc: false,
    aiu: false,
    aicte: false,
    naac: false,
    nirf: false,
    nba: false,
    research: false,
    ugc2f12b: false,
    dsir: false,
    iso: false,
  });

  const splitTitle = (text: string) => {
    const words = text.trim().split(/\s+/);
    if (words.length <= 1) {
      return <span className="text-white">{text}</span>;
    }
    const splitIndex = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, splitIndex).join(" ");
    const secondHalf = words.slice(splitIndex).join(" ");
    return (
      <>
        <span className="text-white">{firstHalf}</span>{" "}
        <span className="text-[#ffd15c]">{secondHalf}</span>
      </>
    );
  };

  const filteredAicte = aicteApprovals;
  const filteredNba = nbaAccreditations;

  const toggle = (k: SectionKey) => setOpen((o) => ({ ...o, [k]: !o[k] }));

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />

      {/* HERO */}
      <section
        className="relative pt-32 md:pt-44 pb-24 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.2em] uppercase text-sm sm:text-sm mb-4">
            Institutional Recognition
          </p>
          <h1
            className="font-display text-4xl md:text-6xl font-bold mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {splitTitle("Affiliations & Accreditations")}
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Institutional Recognition, Academic Quality Assurance, National &amp; International
            Accreditations of Madanapalle Institute of Technology &amp; Science.
          </p>
        </div>

        <div className="absolute bottom-4 left-6 z-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-white/80">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/50">›</li>
              <li className="text-white/70">Academic &amp; Compliance</li>
              <li className="text-white/50">›</li>
              <li className="text-[#ffd15c] font-semibold">Affiliations &amp; Accreditations</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* MAIN */}
      <main className="container mx-auto px-4 py-10 md:py-14 space-y-5">
        {sections.map((s, idx) => {
          const isOpen = open[s.key];
          return (
            <ScrollReveal key={s.key}>
              <section
                  id={`sec-${s.key}`}
                  className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden scroll-mt-44"
                >
                <button
                  onClick={() => toggle(s.key)}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-7 py-5 text-left hover:bg-[#fff8e6]/40 transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f2a44] to-[#11355a] text-[#caa74d] flex items-center justify-center font-display font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-lg md:text-xl font-bold text-[#0f2a44] leading-tight">{s.title}</p>
                      <p className="font-body text-sm text-[#0f2a44]/60 mt-1 hidden md:block">
                        Official institutional disclosure & supporting documents.
                      </p>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-[#0f2a44]/60 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-7 pb-7 border-t border-[#0f2a44]/5">
                        {/* SECTION BODIES */}
                        {s.key === "ugc" && (
                          <div className="grid sm:grid-cols-2 gap-3 mt-5">
                            {ugcDocs.map((d) => (
                              <PdfLink key={d.url} title={d.title} url={d.url} highlight />
                            ))}
                          </div>
                        )}

                        {s.key === "aiu" && (
                          <div className="mt-5 flex flex-col md:flex-row items-start gap-5">
                            <div className="shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#caa74d] to-[#a8862e] flex items-center justify-center text-white">
                              <GraduationCap className="w-10 h-10" />
                            </div>
                            <div className="flex-1">
                              <p className="font-body text-[#0f2a44]/80 text-sm md:text-base leading-relaxed">
                                MITS holds active membership and affiliation with the Association of Indian
                                Universities (AIU), a national body recognising academic equivalence and
                                fostering inter-university collaboration across India.
                              </p>
                              <div className="mt-4">
                                <PdfLink title="AIU Membership Certificate" url={aiuDoc.url} highlight />
                              </div>
                            </div>
                          </div>
                        )}

                        {s.key === "aicte" && (
                          <>
                            <p className="font-body text-[#0f2a44]/70 text-sm mt-5">
                              All annual AICTE Extension of Approval (EoA) reports since the institute's
                              inception in 1998.
                            </p>
                            <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {filteredAicte.map((a) => (
                                <motion.a
                                  key={a.url}
                                  whileHover={{ y: -3 }}
                                  href={a.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group relative rounded-xl border border-[#0f2a44]/10 bg-white p-4 hover:border-[#caa74d] hover:shadow-md transition-all"
                                >
                                  <div className="flex items-center justify-between mb-3">
                                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#b31317]">AICTE EoA</span>
                                    <FileText className="w-4 h-4 text-[#0f2a44]/40 group-hover:text-[#b31317]" />
                                  </div>
                                  <p className="font-display font-bold text-[#0f2a44] text-base leading-tight">{a.year}</p>
                                  <p className="font-body text-[11px] text-[#0f2a44]/55 mt-1">View Approval PDF</p>
                                </motion.a>
                              ))}
                              {filteredAicte.length === 0 && (
                                <p className="col-span-full text-sm text-[#0f2a44]/60 py-8 text-center">
                                  No AICTE approvals available.
                                </p>
                              )}
                            </div>
                          </>
                        )}

                        {s.key === "naac" && (
                          <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#fff8e6] to-white border border-[#caa74d]/30 p-6 md:p-8">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                              <div className="shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-[#caa74d] to-[#a8862e] flex items-center justify-center text-white shadow-lg">
                                <Award className="w-12 h-12" />
                              </div>
                              <div className="flex-1">
                                <p className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44]">NAAC Grade A+</p>
                                <p className="font-body text-sm text-[#0f2a44]/70 mt-1">
                                  Accredited by the National Assessment & Accreditation Council, India.
                                </p>
                              </div>
                              <Link
                                to="/naac"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#b31317] text-white text-sm font-semibold hover:bg-[#7a0a0d] transition-colors"
                              >
                                View Complete NAAC Details
                                <ChevronRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        )}

                        {s.key === "nirf" && (
                          <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#fff8e6] to-white border border-[#caa74d]/30 p-6 md:p-8">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                              <div className="shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0f2a44] to-[#1a3a5c] flex items-center justify-center text-[#caa74d] shadow-md">
                                <BarChart3 className="w-10 h-10" />
                              </div>
                              <div className="flex-1">
                                <span className="inline-block px-3 py-1 rounded-full bg-[#caa74d]/20 text-[#0f2a44] text-xs font-bold uppercase tracking-wider mb-2">
                                  Ministry of Education · MoE
                                </span>
                                <p className="font-display text-2xl font-bold text-[#0f2a44]">
                                  NIRF Ranking — Band 201–300
                                </p>
                                <p className="font-body text-sm text-[#0f2a44]/75 mt-1 leading-relaxed">
                                  Madanapalle Institute of Technology & Science participates annually in the National Institutional Ranking Framework (NIRF) and has consistently ranked in the top engineering colleges band in India.
                                </p>
                              </div>
                              <Link
                                to="/nirf"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0f2a44] text-white text-sm font-semibold hover:bg-[#b31317] transition-colors shrink-0 shadow-md"
                              >
                                View Complete NIRF Portal
                                <ChevronRight className="w-4 h-4" />
                              </Link>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6 pt-5 border-t border-[#caa74d]/20">
                              <PdfLink
                                title="NIRF 2025 Ranking Certificate (Band 201–300)"
                                url="https://mits.ac.in/public/uploads/scholarship/Ranking%20Engg_2025-band%20201-300.pdf"
                                highlight
                              />
                              <PdfLink
                                title="NIRF 2027 Engineering Data"
                                url="https://mits.ac.in/public/uploads/scholarship/Engg.NIRF_2027.pdf"
                              />
                              <PdfLink
                                title="NIRF 2027 Overall Data"
                                url="https://mits.ac.in/public/uploads/scholarship/Overall.NIRF_2027.pdf"
                              />
                            </div>
                          </div>
                        )}

                        {s.key === "nba" && (
                          <>
                            <p className="font-body text-[#0f2a44]/70 text-sm mt-5">
                              NBA (National Board of Accreditation) certifications for UG and PG programmes
                              across Civil, CSE, ECE, EEE, ME, MBA and MCA.
                            </p>
                            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                              {filteredNba.map((n) => (
                                <motion.a
                                  key={n.url + n.period}
                                  whileHover={{ y: -3 }}
                                  href={n.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group rounded-xl border border-[#0f2a44]/10 bg-white p-5 hover:border-[#caa74d] hover:shadow-md transition-all"
                                >
                                  <div className="flex items-center justify-between mb-3">
                                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-white bg-[#b31317] px-2 py-1 rounded">
                                      NBA
                                    </span>
                                    <span className="text-[11px] text-[#0f2a44]/55 font-body">{n.period}</span>
                                  </div>
                                  <p className="font-display font-bold text-[#0f2a44] text-base leading-tight">{n.programme}</p>
                                  <p className="font-body text-sm text-[#caa74d] font-semibold mt-3 inline-flex items-center gap-1">
                                    View Certificate <ExternalLink className="w-3 h-3" />
                                  </p>
                                </motion.a>
                              ))}
                              {filteredNba.length === 0 && (
                                <p className="col-span-full text-sm text-[#0f2a44]/60 py-8 text-center">
                                  No NBA accreditations available.
                                </p>
                              )}
                            </div>
                          </>
                        )}

                        {s.key === "research" && (
                          <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#0f2a44] to-[#11355a] text-white p-6 md:p-8">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                              <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center">
                                <Microscope className="w-10 h-10 text-[#caa74d]" />
                              </div>
                              <div className="flex-1">
                                <p className="font-display text-xl md:text-2xl font-bold text-white">Recognised Research Centre</p>
                                <p className="font-body text-white/75 text-sm mt-2 max-w-2xl">
                                  MITS is a recognised research centre offering Ph.D. programmes, supervised
                                  research, and inter-disciplinary innovation across engineering, computing,
                                  sciences and management.
                                </p>
                              </div>
                              <Link
                                to="/research"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#caa74d] text-[#0f2a44] text-sm font-semibold hover:bg-white transition-colors"
                              >
                                Explore Research
                                <ChevronRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        )}

                        {s.key === "ugc2f12b" && (
                          <div className="mt-5 grid md:grid-cols-[1fr_auto] gap-5 items-center">
                            <p className="font-body text-[#0f2a44]/80 text-sm md:text-base leading-relaxed">
                              MITS is recognised by the University Grants Commission (UGC) under Sections
                              <strong> 2(f) </strong> and <strong>12(B)</strong> of the UGC Act, 1956 — affirming
                              the institute's academic standing and eligibility for central financial assistance.
                            </p>
                            <PdfLink title="2(f) & 12(B) Recognition" url={ugc2f12bUrl} highlight />
                          </div>
                        )}

                        {s.key === "dsir" && (
                          <div className="mt-5 grid md:grid-cols-[1fr_auto] gap-5 items-center">
                            <p className="font-body text-[#0f2a44]/80 text-sm md:text-base leading-relaxed">
                              MITS is recognised as a Scientific & Industrial Research Organisation (SIRO) by
                              the Department of Scientific & Industrial Research (DSIR), Ministry of Science &
                              Technology, Government of India.
                            </p>
                            <a
                              href="https://www.dsir.gov.in/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0f2a44] text-white text-sm font-semibold hover:bg-[#11355a] transition-colors"
                            >
                              DSIR Portal <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        )}

                        {s.key === "iso" && (
                          <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#fff8e6] via-white to-[#fff8e6] border border-[#caa74d]/40 p-6 md:p-8">
                            <div className="flex flex-col md:flex-row items-start gap-6">
                              <div className="shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#caa74d] to-[#a8862e] flex items-center justify-center text-white shadow-md">
                                <BadgeCheck className="w-12 h-12" />
                              </div>
                              <div className="flex-1">
                                <p className="font-display text-2xl font-bold text-[#0f2a44]">ISO 21001:2018</p>
                                <p className="font-body text-sm text-[#0f2a44]/70 mt-2 max-w-2xl">
                                  Educational Organisations – Management Systems for Educational Organisations
                                  (EOMS). Certifies MITS's commitment to a quality-driven, learner-focused and
                                  continuously improving educational ecosystem.
                                </p>
                                <a
                                  href={isoCertUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 mt-5 px-5 py-3 rounded-full bg-[#b31317] text-white text-sm font-semibold hover:bg-[#7a0a0d] transition-colors"
                                >
                                  View ISO Certificate <ExternalLink className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            </ScrollReveal>
          );
        })}
      </main>

      <Footer />
    </div>
  );
};

export default AffiliationsAccreditations;

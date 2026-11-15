import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  FileText,
  Download,
  ExternalLink,
  Search,
  Award,
  TrendingUp,
  Users,
  Mail,
  Building2,
  Calendar,
  Archive,
  Sparkles,
  Trophy,
  BookOpen,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import {
  nirfYears,
  nirfDataDocs,
  nirfCommitteeDocs,
  nirfCategories,
  nirfHighlights,
  nirfCoordinator,
  NIRF_INSTITUTE_ID,
  type NirfDoc,
} from "@/data/nirfData";

const BASE = import.meta.env.BASE_URL;

type TabKey = string; // year key, "data", "committee"

const tabs: { key: TabKey; label: string }[] = [
  ...nirfYears.map((y) => ({ key: y.key, label: y.year })),
  { key: "data", label: "NIRF Data" },
  { key: "committee", label: "Committee" },
];

const DocCard = ({ doc }: { doc: NirfDoc }) => {
  const isRar = doc.type === "rar" || doc.url.toLowerCase().endsWith(".rar");
  return (
    <motion.a
      href={doc.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className={`group relative flex items-center gap-4 rounded-xl border bg-white p-4 md:p-5 shadow-sm transition-all hover:shadow-[0_12px_32px_rgba(15,42,68,0.12)] hover:border-[#caa74d] ${
        doc.highlight ? "border-[#caa74d]/60 bg-gradient-to-br from-[#fff8e6] to-white" : "border-[#0f2a44]/10"
      }`}
    >
      <div
        className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center ${
          isRar
            ? "bg-gradient-to-br from-[#4a5568] to-[#2d3748] text-white"
            : doc.highlight
              ? "bg-gradient-to-br from-[#caa74d] to-[#a8862e] text-white"
              : "bg-gradient-to-br from-[#b31317] to-[#7a0a0d] text-white"
        }`}
      >
        {isRar ? <Archive className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-body font-semibold text-[#0f2a44] text-sm md:text-base leading-snug">
          {doc.title}
        </p>
        {doc.category && (
          <p className="font-body text-sm text-[#0f2a44]/60 mt-1 truncate">
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block w-1 h-1 rounded-full bg-[#caa74d]" />
              {doc.category}
            </span>
            <span className="mx-2 text-[#0f2a44]/30">·</span>
            <span className="uppercase tracking-wider">{isRar ? "RAR" : "PDF"}</span>
          </p>
        )}
      </div>
      <div className="shrink-0 flex items-center gap-2 text-[#0f2a44]/40 group-hover:text-[#b31317] transition-colors">
        {isRar ? <Download className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
      </div>
    </motion.a>
  );
};

const NIRF = () => {
  const [activeTab, setActiveTab] = useState<TabKey>(nirfYears[0].key);
  const [query, setQuery] = useState("");

  const currentDocs: NirfDoc[] = useMemo(() => {
    if (activeTab === "data") return nirfDataDocs;
    if (activeTab === "committee") return nirfCommitteeDocs;
    return nirfYears.find((y) => y.key === activeTab)?.docs ?? [];
  }, [activeTab]);

  const currentTitle =
    activeTab === "data"
      ? "NIRF Research Data"
      : activeTab === "committee"
        ? "NIRF Committee – Office Orders"
        : nirfYears.find((y) => y.key === activeTab)?.year ?? "";

  const currentRankingNote =
    activeTab !== "data" && activeTab !== "committee"
      ? nirfYears.find((y) => y.key === activeTab)?.rankingNote
      : undefined;

  const filteredDocs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return currentDocs;
    return currentDocs.filter(
      (d) =>
        d.title.toLowerCase().includes(q) ||
        (d.category ?? "").toLowerCase().includes(q),
    );
  }, [currentDocs, query]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f5f0]">
      <Header />
      <SEO
        title="MITS NIRF Ranking – 201–300 Band Engineering | Madanapalle"
        description="MITS Madanapalle NIRF ranking: consistently placed in the 201–300 band in Engineering. Access year-wise NIRF submissions, ranking certificates, and committee documents."
        canonical="/nirf"
      />
      <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2a44] via-[#143557] to-[#0a1f33] text-white">
          <div className="absolute inset-0 opacity-20">
            <img
              src={`${BASE}Hero-Section/image%204.JPG`}
              alt=""
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2a44]/95 via-[#0f2a44]/85 to-[#0a1f33]/95" />
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-[#caa74d]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] bg-[#b31317]/15 rounded-full blur-3xl" />

          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1.5 text-sm md:text-sm text-white/70 mb-6"
            >
              <Link to="/" className="hover:text-[#caa74d] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/about" className="hover:text-[#caa74d] transition-colors">Accreditations</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#caa74d]">NIRF</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#caa74d]/15 border border-[#caa74d]/30 text-[#e8c96a] text-sm font-body font-semibold tracking-widest uppercase mb-5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Ministry of Education · Government of India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl bg-gradient-to-r from-[#e8c96a] via-[#f7df8a] to-white bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-display)", textShadow: "0 6px 30px rgba(0,0,0,0.45)" }}
            >
              National Institutional Ranking Framework
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-5 max-w-3xl text-white/85 text-base md:text-lg leading-relaxed"
            >
              MITS has consistently participated in NIRF since 2017, ranked in the band <span className="text-[#caa74d] font-semibold">201–300</span> in Engineering. Access year-wise NIRF submissions, ranking certificates, committee office orders and research data — all sourced from official MoE filings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-3 text-sm md:text-sm"
            >
              <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur">Institute ID: <span className="text-[#caa74d] font-semibold">{NIRF_INSTITUTE_ID}</span></span>
              <a
                href="https://www.nirfindia.org/Home"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-[#caa74d] text-[#0f2a44] font-semibold hover:bg-[#e8c96a] transition-colors inline-flex items-center gap-1.5"
              >
                Official NIRF India <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
          <div className="h-1 bg-gradient-to-r from-transparent via-[#caa74d] to-transparent" />
        </section>

        {/* HIGHLIGHTS */}
        <section className="relative -mt-16 md:-mt-20 z-10 container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 items-stretch" style={{ gridAutoRows: '1fr' }}>
            {nirfHighlights.map((h, i) => (
              <ScrollReveal key={h.label} delay={i * 0.08}>
                <div className="relative rounded-2xl bg-white border border-[#0f2a44]/10 p-5 md:p-6 shadow-[0_12px_36px_rgba(15,42,68,0.12)] hover:-translate-y-1 transition-transform h-full flex flex-col overflow-hidden">
                  <div className="absolute top-0 left-5 right-5 md:left-6 md:right-6 h-1 z-10 rounded-full bg-gradient-to-r from-[#ffd775] via-[#f7df8a] to-[#ffd775]" />
                  <div className="mt-3 md:mt-4 flex-1">
                    <p className="font-display text-3xl md:text-4xl font-extrabold text-[#0f2a44] leading-none">{h.value}</p>
                    <p className="font-body text-sm font-semibold text-[#b31317] mt-2">{h.label}</p>
                    <p className="font-body text-sm text-[#0f2a44]/60 mt-1">{h.note}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="container mx-auto px-4 py-14 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <ScrollReveal className="lg:col-span-7" direction="left">
              <p className="text-[#b31317] font-body font-semibold tracking-[0.22em] uppercase text-sm mb-3">About NIRF</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0f2a44] leading-tight">
                A national framework for measuring institutional excellence
              </h2>
              <div className="w-20 h-1 bg-[#caa74d] mt-4 mb-6 rounded-full" />
              <div className="space-y-4 font-body text-[#0f2a44]/80 leading-relaxed text-[15px] md:text-base">
                <p>
                  The National Institutional Ranking Framework (NIRF) was accepted by the Ministry of Education
                  and launched by the Honourable Minister for Education on 29<sup>th</sup> September 2015. It outlines
                  a methodology to rank institutions across the country.
                </p>
                <p>
                  The methodology was developed by a Core Committee set up by MHRD, identifying the broad parameters
                  for ranking universities and institutions. Parameters cover <em>Teaching, Learning &amp; Resources</em>,
                  <em> Research and Professional Practices</em>, <em>Graduation Outcomes</em>, <em>Outreach and Inclusivity</em>,
                  and <em>Perception</em>.
                </p>
                <p className="bg-[#fff8e6] border-l-4 border-[#caa74d] p-4 rounded-r-lg">
                  <strong className="text-[#0f2a44]">Feedback from Stakeholders:</strong> To excel among stakeholders
                  (students, faculty, alumni, parents, recruiters, industries, regulators, management, academic peers),
                  inputs may be forwarded to{" "}
                  <a href={`mailto:${nirfCoordinator.email}`} className="text-[#b31317] font-semibold underline">
                    {nirfCoordinator.email}
                  </a>.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-5" direction="right" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {nirfCategories.map((c) => (
                  <div
                    key={c.code}
                    className="rounded-xl bg-white border border-[#0f2a44]/10 p-5 hover:border-[#caa74d] hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0f2a44] to-[#1a4a7a] flex items-center justify-center mb-3">
                      <Trophy className="w-5 h-5 text-[#caa74d]" />
                    </div>
                    <p className="font-display text-lg font-bold text-[#0f2a44]">{c.code}</p>
                    <p className="font-body text-[11px] text-[#caa74d] font-semibold tracking-wider mt-0.5">{c.id}</p>
                    <p className="font-body text-sm text-[#0f2a44]/65 mt-2 leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* YEAR NAVIGATION + DOCS */}
        <section id="rankings" className="bg-white border-y border-[#0f2a44]/10">
          <div className="container mx-auto px-4 py-14 md:py-20">
            <div className="text-center mb-10">
              <p className="text-[#b31317] font-body font-semibold tracking-[0.22em] uppercase text-sm mb-3">Year-wise Submissions</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0f2a44]">
                NIRF Rankings &amp; Data Archive
              </h2>
              <div className="w-20 h-1 bg-[#caa74d] mx-auto mt-4 rounded-full" />
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-2.5 mb-8">
              {tabs.map((t) => {
                const isActive = activeTab === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => {
                      setActiveTab(t.key);
                      setQuery("");
                    }}
                    className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full font-body text-sm md:text-sm font-semibold border transition-all ${
                      isActive
                        ? "bg-[#0f2a44] text-[#caa74d] border-[#0f2a44] shadow-[0_8px_24px_rgba(15,42,68,0.25)]"
                        : "bg-white text-[#0f2a44] border-[#0f2a44]/15 hover:border-[#caa74d] hover:text-[#b31317]"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            {/* Active panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="max-w-5xl mx-auto"
              >
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44] flex items-center gap-2.5">
                      {activeTab === "committee" ? (
                        <Users className="w-6 h-6 text-[#b31317]" />
                      ) : activeTab === "data" ? (
                        <BookOpen className="w-6 h-6 text-[#b31317]" />
                      ) : (
                        <Calendar className="w-6 h-6 text-[#b31317]" />
                      )}
                      {currentTitle}
                    </h3>
                    {currentRankingNote && (
                      <p className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#caa74d]/15 text-[#7a5e1a] text-sm font-body font-semibold">
                        <Award className="w-3.5 h-3.5" /> {currentRankingNote}
                      </p>
                    )}
                  </div>
                  <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0f2a44]/40" />
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search documents..."
                      className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-[#0f2a44]/15 bg-[#f7f5f0] text-sm font-body text-[#0f2a44] placeholder:text-[#0f2a44]/40 focus:outline-none focus:border-[#caa74d] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {filteredDocs.length === 0 ? (
                  <div className="text-center py-12 rounded-xl bg-[#f7f5f0] border border-dashed border-[#0f2a44]/15">
                    <FileText className="w-10 h-10 text-[#0f2a44]/30 mx-auto mb-3" />
                    <p className="font-body text-[#0f2a44]/60">No documents match your search.</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                    {filteredDocs.map((doc) => (
                      <DocCard key={doc.url} doc={doc} />
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* COMMITTEE QUICK SECTION */}
        <section id="committee" className="container mx-auto px-4 py-14 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <ScrollReveal className="lg:col-span-7" direction="left">
              <p className="text-[#b31317] font-body font-semibold tracking-[0.22em] uppercase text-sm mb-3">Institutional Governance</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0f2a44]">NIRF Committee</h2>
              <div className="w-20 h-1 bg-[#caa74d] mt-4 mb-6 rounded-full" />
              <p className="font-body text-[#0f2a44]/75 leading-relaxed mb-6">
                MITS constitutes an NIRF Committee every cycle to coordinate data collection, verification and
                submission. Office Orders constituting the committee are published below.
              </p>
              <div className="space-y-3">
                {nirfCommitteeDocs.map((d) => (
                  <DocCard key={d.url} doc={d} />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-5" direction="right" delay={0.1}>
              <div id="contact" className="sticky top-24 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f2a44]/95 via-[#12334a]/92 to-[#163f57]/95 text-white shadow-[0_20px_50px_rgba(15,42,68,0.25)]">
                  <div className="h-1 bg-gradient-to-r from-[#ffd775] via-[#f7df8a] to-[#ffd775]" />
                  <div className="p-7 md:p-8">
                    <p className="text-[#f7df8a] font-body font-semibold tracking-[0.22em] uppercase text-sm mb-3">Contact</p>
                    <h3 className="font-display text-2xl font-bold text-white">NIRF Coordinator</h3>
                    <div className="w-12 h-0.5 bg-[#f7df8a] mt-3 mb-6" />

                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ffd775] to-[#d0a942] flex items-center justify-center flex-shrink-0">
                        <Users className="w-10 h-10 text-[#0f2a44]" />
                      </div>
                      <div>
                        <p className="font-display text-xl font-bold text-white leading-tight">{nirfCoordinator.name}</p>
                        {nirfCoordinator.designation && (
                          <p className="text-[#f7df8a] text-sm font-medium mt-1">{nirfCoordinator.designation}</p>
                        )}
                      </div>
                    </div>

                  <div className="mt-6 space-y-3 text-base">
                    <a href={`mailto:${nirfCoordinator.email}`} className="flex items-center gap-3 text-white/90 hover:text-[#f7df8a] transition-colors group">
                      <span className="w-9 h-9 rounded-lg bg-white/8 group-hover:bg-[#f7df8a]/20 flex items-center justify-center transition-colors">
                        <Mail className="w-4 h-4" />
                      </span>
                      <span className="font-body break-all text-white">{nirfCoordinator.email}</span>
                    </a>
                    <div className="flex items-center gap-3 text-white/90">
                      <span className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center">
                        <Building2 className="w-4 h-4" />
                      </span>
                      <span className="font-body text-white">{nirfCoordinator.institute}</span>
                    </div>
                  </div>

                  {/* Removed external 'Visit Official NIRF Portal' button as requested */}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA FOOTER */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#b31317] via-[#9c1014] to-[#7a0a0d] text-white">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#caa74d]/20 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 py-14 md:py-16 relative">
            <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                <p className="text-[#e8c96a] font-body font-semibold tracking-[0.22em] uppercase text-sm mb-3">Explore More</p>
                <div className="inline-block bg-white/6 backdrop-blur-sm rounded-lg px-5 py-3">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                    Accreditations, rankings &amp; statutory disclosures
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#ffd775] to-[#f7df8a] mt-3 rounded-full" />
                </div>
                <p className="mt-4 text-white/90 font-body max-w-2xl">
                  Beyond NIRF, MITS publishes complete information under NAAC, UGC, AICTE and statutory mandates.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                <Link to="/about/mandatory-disclosures" className="px-5 py-3 rounded-lg bg-white text-[#b31317] font-body font-bold text-sm text-center hover:bg-[#caa74d] hover:text-[#0f2a44] transition-colors inline-flex items-center justify-center gap-2">
                  Mandatory Disclosures <ChevronRight className="w-4 h-4" />
                </Link>
                <Link to="/naac" className="px-5 py-3 rounded-lg bg-[#0f2a44] text-white font-body font-bold text-sm text-center hover:bg-[#caa74d] hover:text-[#0f2a44] transition-colors inline-flex items-center justify-center gap-2">
                  NAAC Portal <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NIRF;

import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  Target,
  Search,
  Handshake,
  Download,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  iiicAboutParagraphs,
  iiicObjectives,
  iiicDocuments,
  iiicKeyOfficials,
  iiicMousByYear,
  iiicActivities,
} from "./iiicData";

const BASE = import.meta.env.BASE_URL;

const relatedCells = [
  { label: "Training & Placements", to: "/placements" },
  { label: "Intellectual Property Facilitation Centre (IPFC)", to: "/cells/ipfc" },
  { label: "Centre of Innovation & Incubation (CII)", to: "/cells/cii" },
  { label: "Startup Cell / NISP", to: "/cells/startup" },
  { label: "Entrepreneurship Development Cell (EDC)", to: "/cells/edc" },
];

const addressBlock = (
  <div className="text-xs text-slate-600 leading-relaxed">
    <p>Madanapalle Institute of Technology &amp; Science</p>
    <p className="font-semibold text-slate-700">Deemed to be University</p>
    <p>Madanapalle-Kadiri Road</p>
    <p>Kurabalakota Mandal, Madanapalle-517325</p>
    <p>Andhra Pradesh, India</p>
  </div>
);

export default function IiicView() {
  const navigate = useNavigate();
  const [activitySearch, setActivitySearch] = useState("");
  const [selectedMouYear, setSelectedMouYear] = useState<string>("all");
  const [mouSearch, setMouSearch] = useState("");

  // Total MOUs count
  const totalMous = useMemo(
    () => iiicMousByYear.reduce((acc, curr) => acc + curr.items.length, 0),
    []
  );

  // Filtered MOUs
  const filteredMous = useMemo(() => {
    let result = iiicMousByYear;
    if (selectedMouYear !== "all") {
      result = result.filter((y) => y.year === selectedMouYear);
    }
    if (mouSearch.trim()) {
      const term = mouSearch.toLowerCase();
      result = result
        .map((y) => ({
          ...y,
          items: y.items.filter((item) => item.toLowerCase().includes(term)),
        }))
        .filter((y) => y.items.length > 0);
    }
    return result;
  }, [selectedMouYear, mouSearch]);

  // Filtered activities
  const filteredActivities = useMemo(() => {
    if (!activitySearch.trim()) return iiicActivities;
    const term = activitySearch.toLowerCase();
    return iiicActivities.filter((act) => act.text.toLowerCase().includes(term));
  }, [activitySearch]);

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />

      {/* HERO — Standardized with UHV & IPFC Cell */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 bg-gradient-to-b from-black/15 via-transparent to-black/30" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 drop-shadow-sm">
            Cells &amp; Committees • Innovation, Research &amp; Entrepreneurship
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Industry-Institute Interaction Cell
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            Bridging academia with contemporary industry practices, corporate MoUs, student internships, and technological training.
          </p>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li>
              <Link to="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-white/50">›</li>
            <li>
              <Link to="/cells" className="text-white/70 hover:text-white transition-colors">
                Cells &amp; Committees
              </Link>
            </li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold">IIIC Cell</li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTAINER */}
      <main className="container mx-auto px-4 py-10 md:py-14 max-w-7xl">
        <button
          onClick={() => navigate("/cells")}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells &amp; Committees
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN CONTENT (LEFT 2 COLUMNS) */}
          <div className="lg:col-span-2 space-y-8">
            {/* ABOUT IIIC */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-[#b31317] mb-4 flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-[#b31317]" />
                  About IIIC
                </h2>
                <div className="space-y-3">
                  {iiicAboutParagraphs.map((p, i) => (
                    <p key={i} className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* SERVICES / OBJECTIVES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#b31317] mb-4 flex items-center gap-2.5">
                  <Target className="w-5 h-5 text-[#b31317]" />
                  IIIC Services / Objectives
                </h2>
                <ul className="space-y-3">
                  {iiicObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0 mt-2" />
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
                        {obj}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* MOUS SIGNED */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                  <div>
                    <h2 className="font-display text-xl font-bold text-[#b31317] flex items-center gap-2.5">
                      <Handshake className="w-5 h-5 text-[#b31317]" />
                      Following MoUs Signed
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      {totalMous} active and historic partnerships with premier industries, research institutes &amp; international universities.
                    </p>
                  </div>

                  {/* SEARCH MOUS */}
                  <div className="relative min-w-[200px] shrink-0">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={mouSearch}
                      onChange={(e) => setMouSearch(e.target.value)}
                      placeholder="Search company/partner..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-gray-200 focus:outline-hidden focus:border-[#b31317] transition-colors"
                    />
                  </div>
                </div>

                {/* YEAR TABS */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-5 border-b border-gray-100 scrollbar-none">
                  <button
                    onClick={() => setSelectedMouYear("all")}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                      selectedMouYear === "all"
                        ? "bg-[#0f2a44] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    All Years ({totalMous})
                  </button>
                  {iiicMousByYear.map((y) => (
                    <button
                      key={y.year}
                      onClick={() => setSelectedMouYear(y.year)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                        selectedMouYear === y.year
                          ? "bg-[#b31317] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {y.year} ({y.items.length})
                    </button>
                  ))}
                </div>

                {/* MOUS LIST BY YEAR */}
                <div className="space-y-6">
                  {filteredMous.length > 0 ? (
                    filteredMous.map((group) => (
                      <div key={group.year} className="rounded-xl border border-gray-100 bg-gray-50/50 p-4">
                        <div className="flex items-center justify-between mb-3 border-b border-gray-200/60 pb-2">
                          <h3 className="font-display font-bold text-sm text-[#0f2a44] flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-sm bg-[#caa74d]" />
                            Academic Year {group.year}
                          </h3>
                          <span className="text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-gray-200">
                            {group.items.length} {group.items.length === 1 ? "MoU" : "MoUs"}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {group.items.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 bg-white rounded-lg p-2.5 border border-gray-100 text-xs text-slate-700"
                            >
                              <ChevronRight className="w-3.5 h-3.5 text-[#caa74d] shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-8 text-center text-sm text-gray-400">
                      No MoUs found matching "{mouSearch}".
                    </div>
                  )}
                </div>
              </section>
            </ScrollReveal>

            {/* ACTIVITIES UNDER IIIC */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                  <div>
                    <h2 className="font-display text-xl font-bold text-[#b31317] flex items-center gap-2.5">
                      <FileText className="w-5 h-5 text-[#b31317]" />
                      Activities under IIIC
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      Industrial visits, guest lectures, hackathons, and professional capability workshops ({iiicActivities.length} total events recorded).
                    </p>
                  </div>

                  {/* SEARCH ACTIVITIES */}
                  <div className="relative min-w-[220px] shrink-0">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={activitySearch}
                      onChange={(e) => setActivitySearch(e.target.value)}
                      placeholder="Search activities..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-gray-200 focus:outline-hidden focus:border-[#b31317] transition-colors"
                    />
                  </div>
                </div>

                <ul className="space-y-4">
                  {filteredActivities.length > 0 ? (
                    filteredActivities.map((act, i) => (
                      <li key={i} className="flex items-start gap-3 group pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                        <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0 mt-2" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-slate-700 leading-relaxed text-justify">
                            {act.text}
                          </p>
                          {act.href && (
                            <a
                              href={act.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 mt-1.5 text-xs font-semibold text-[#b31317] hover:text-[#0f2a44] transition-colors"
                            >
                              <ExternalLink className="w-3 h-3 shrink-0" />
                              {act.linkLabel || "Click here for Report on Event"}
                            </a>
                          )}
                        </div>
                      </li>
                    ))
                  ) : (
                    <li className="py-8 text-center text-sm text-gray-400">
                      No activities match "{activitySearch}".
                    </li>
                  )}
                </ul>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Showing {filteredActivities.length} of {iiicActivities.length} activities</span>
                  <span className="font-medium text-[#0f2a44]">Industry Institute Interaction Cell</span>
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* SIDEBAR (RIGHT 1 COLUMN) */}
          <div className="space-y-6">
            {/* IIIC DOCUMENTS / POLICIES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#b31317] px-5 py-3">
                  <h3 className="font-display text-base font-bold text-white tracking-wide">
                    IIIC Documents &amp; Policy
                  </h3>
                </div>
                <div className="p-5">
                  <ul className="divide-y divide-gray-100">
                    {iiicDocuments.map((doc, i) => (
                      <li key={i}>
                        <a
                          href={doc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 py-2.5 group hover:bg-[#fff8e6]/40 -mx-2 px-2 rounded-lg transition-colors"
                        >
                          <span className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0f2a44] group-hover:text-[#b31317] transition-colors">
                            <ChevronRight className="w-4 h-4 shrink-0 text-[#caa74d] group-hover:text-[#b31317] transition-colors" />
                            {doc.label}
                          </span>
                          <Download className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-[#b31317] transition-colors" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </ScrollReveal>

            {/* CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#0f2a44] px-5 py-3">
                  <h3 className="font-display text-base font-bold text-white tracking-wide">
                    Contact IIIC
                  </h3>
                </div>
                <div className="p-5 space-y-4 text-sm text-slate-700">
                  <div className="space-y-2">
                    {iiicKeyOfficials.map((official, idx) => (
                      <div key={idx} className={idx > 0 ? "pt-2 border-t border-gray-100" : ""}>
                        <p className="font-bold text-[#b31317] text-sm">{official.name}</p>
                        <p className="text-xs text-slate-600 mt-0.5">{official.designation}</p>
                      </div>
                    ))}
                  </div>

                  <hr className="border-slate-100" />

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5" />
                    {addressBlock}
                  </div>

                  <hr className="border-slate-100" />

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#b31317] shrink-0" />
                    <span className="text-xs text-slate-700 font-medium">
                      +91-8571-280255; 280706
                    </span>
                  </div>

                  <hr className="border-slate-100" />

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#b31317] shrink-0" />
                    <a
                      href="mailto:iiic@mits.ac.in"
                      className="text-xs text-[#b31317] hover:underline font-medium"
                    >
                      iiic@mits.ac.in
                    </a>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* RELATED CELL LINKS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-5">
                <h3 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-3">
                  Related Portals &amp; Cells
                </h3>
                <div className="space-y-2">
                  {relatedCells.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="flex items-center justify-between text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-1.5 border-b border-gray-50 last:border-0 group"
                    >
                      <span>{p.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#caa74d] group-hover:text-[#b31317] transition-colors" />
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* SOURCE LINK */}
            <ScrollReveal>
              <a
                href="https://mits.ac.in/iiic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 text-sm text-[#0f2a44]/50 hover:text-[#b31317] transition-colors px-1"
              >
                <span>View original source page</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

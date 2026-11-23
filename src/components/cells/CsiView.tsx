import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Download,
  X,
  Search,
  Calendar,
  BookOpen,
  Globe,
  Users,
  Target,
  FileText,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  csiCoordinator,
  csiCommitteeMembers,
  csiAbout,
  csiEventsByYear,
  allCsiEvents,
  type CsiEventItem,
} from "./csiData";

const BASE = "https://mits.edu/";

// Sharp PDF Icon matching the official MITS style
function PdfIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <div className={`shrink-0 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 28 32" fill="none" className="w-full h-full drop-shadow-sm">
        <path
          d="M4 2h13l7 7v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
          fill="#ffffff"
          stroke="#b31317"
          strokeWidth="1.8"
        />
        <path
          d="M17 2v7h7"
          stroke="#b31317"
          strokeWidth="1.8"
          fill="#fde8e8"
        />
        {/* PDF text label */}
        <rect x="4.5" y="14" width="17" height="10" rx="2" fill="#b31317" />
        <text
          x="6"
          y="21.5"
          fill="#ffffff"
          fontSize="7"
          fontWeight="800"
          fontFamily="sans-serif"
          letterSpacing="0.4"
        >
          PDF
        </text>
      </svg>
    </div>
  );
}

export default function CsiView() {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [previewPdf, setPreviewPdf] = useState<{ url: string; title: string } | null>(null);

  const yearKeys = useMemo(() => Object.keys(csiEventsByYear), []);

  // Filter events based on selected year and search query
  const filteredEvents: CsiEventItem[] = useMemo(() => {
    let list: CsiEventItem[] =
      selectedYear === "All" ? allCsiEvents : csiEventsByYear[selectedYear] || [];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (evt) =>
          evt.title.toLowerCase().includes(q) ||
          (evt.category && evt.category.toLowerCase().includes(q)) ||
          evt.year.toLowerCase().includes(q)
      );
    }
    return list;
  }, [selectedYear, searchQuery]);

  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800">
      <Header />

      {/* HERO BANNER - Professional Societies Standard */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />

        <div className="relative z-10 w-full max-w-[96%] mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm">
            Professional Societies &amp; Chapters
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            Computer Society of India (CSI) Student Branch
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
            MITS CSI Student Branch [M10660] • Department of Computer Science &amp; Engineering
          </p>
        </div>

        {/* BOTTOM-LEFT CORNER BREADCRUMB */}
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
            <li className="text-[#ffd15c] font-semibold truncate max-w-[280px] sm:max-w-md">
              Computer Society of India (CSI)
            </li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTENT CONTAINER - Balanced Full-Width Layout */}
      <main className="w-full max-w-[96%] mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-12">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/cells")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#990000] transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-xs hover:shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#990000]" />
            <span>Back to Cells &amp; Committees</span>
          </button>
        </div>

        {/* 2-COLUMN BALANCED WIDE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* PRIMARY CONTENT AREA (7-8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            {/* CHAPTER OVERVIEW */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 md:p-8 space-y-8">
                {/* BRANCH TITLE */}
                <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] border-b border-gray-100 pb-4">
                  {csiAbout.branchTitle}
                </h2>

                {/* ABOUT CSI */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-[#990000]" />
                    <h3 className="text-xl font-bold font-display text-[#0f2a44]">
                      {csiAbout.nationalTitle}
                    </h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-justify text-sm sm:text-base">
                    {csiAbout.nationalDescription}
                  </p>
                </div>

                {/* MISSION */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-[#990000]" />
                    <h3 className="text-xl font-bold font-display text-[#0f2a44]">
                      Mission
                    </h3>
                  </div>
                  <div className="space-y-4 text-slate-700 leading-relaxed text-justify text-sm sm:text-base">
                    <p>{csiAbout.missionParagraph1}</p>
                    <p>{csiAbout.missionParagraph2}</p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* EVENTS ORGANIZED ARCHIVE SECTION */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#990000]" />
                      <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44]">
                        Events Organized
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                      Archive of official technical workshops, guest lectures, hackathons, and FDPs
                    </p>
                  </div>

                  <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-gray-200">
                    {filteredEvents.length} {filteredEvents.length === 1 ? "Event" : "Events"}
                  </span>
                </div>

                {/* SEARCH BAR & YEAR FILTER */}
                <div className="space-y-4 mb-6">
                  {/* Search Input */}
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search events by title, keyword, or category (e.g. AI, Machine Learning, Hackathon)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#990000]/20 focus:border-[#990000] transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                        title="Clear search"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Year Tabs */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                    <button
                      onClick={() => setSelectedYear("All")}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        selectedYear === "All"
                          ? "bg-[#990000] text-white shadow-xs"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      All Years ({allCsiEvents.length})
                    </button>
                    {yearKeys.map((yr) => (
                      <button
                        key={yr}
                        onClick={() => setSelectedYear(yr)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                          selectedYear === yr
                            ? "bg-[#990000] text-white shadow-xs"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {yr} ({csiEventsByYear[yr]?.length || 0})
                      </button>
                    ))}
                  </div>
                </div>

                {/* EVENTS LIST */}
                {filteredEvents.length === 0 ? (
                  <div className="text-center py-12 px-4 bg-slate-50 rounded-xl border border-dashed border-gray-300">
                    <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                    <p className="text-slate-600 font-medium text-sm">
                      No events found matching your search.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedYear("All");
                      }}
                      className="mt-3 text-xs font-semibold text-[#990000] hover:underline cursor-pointer"
                    >
                      Reset filters
                    </button>
                  </div>
                ) : (
                  <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200 bg-white shadow-xs">
                    {filteredEvents.map((evt, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 hover:bg-slate-50 transition-colors gap-3 group"
                      >
                        <div className="min-w-0 pr-2">
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#990000]/10 text-[#990000]">
                              {evt.year}
                            </span>
                            {evt.category && (
                              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-600 border border-gray-200">
                                {evt.category}
                              </span>
                            )}
                          </div>
                          <p className="text-sm sm:text-[15px] font-medium text-slate-800 group-hover:text-[#990000] transition-colors leading-relaxed">
                            {evt.title}
                          </p>
                        </div>

                        {/* Action Buttons: Preview Modal & Direct Open */}
                        <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                          <button
                            onClick={() =>
                              setPreviewPdf({
                                url: evt.pdfUrl,
                                title: evt.title,
                              })
                            }
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#990000]/10 hover:bg-[#990000] text-[#990000] hover:text-white transition-all shadow-2xs cursor-pointer"
                            title="Preview PDF Report"
                          >
                            <PdfIcon className="w-5 h-5" />
                            <span>View Report</span>
                          </button>

                          <a
                            href={evt.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-slate-400 hover:text-[#990000] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                            title="Open in new window"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </ScrollReveal>
          </div>

          {/* SIDEBAR AREA (4-5 cols - Sticky) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* COORDINATOR CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
                <div className="bg-[#990000] px-6 py-4 flex items-center gap-2">
                  <Phone className="w-4 h-4 !text-white text-white" />
                  <h3 className="font-display text-lg font-bold !text-white text-white">
                    Coordinator Contact
                  </h3>
                </div>

                <div className="p-6 space-y-6">
                  {/* Coordinator Details */}
                  <div className="border-b border-gray-100 pb-5">
                    <span className="text-xs font-bold text-[#990000] uppercase tracking-wider block mb-1">
                      Faculty Coordinator
                    </span>
                    <h4 className="font-display text-xl font-bold text-[#0f2a44]">
                      {csiCoordinator.name}
                    </h4>
                    <p className="text-sm font-semibold text-[#0f2a44] mt-1">
                      {csiCoordinator.designation}
                    </p>
                    <p className="text-xs text-slate-600 font-medium">
                      {csiCoordinator.department}
                    </p>
                  </div>

                  {/* Address */}
                  <div className="space-y-4 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 text-[#0f2a44] shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-[#990000]" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0f2a44] block text-xs uppercase tracking-wide mb-1">
                          Address :
                        </span>
                        <p className="leading-snug text-slate-600 text-xs sm:text-sm">
                          {csiCoordinator.address.map((line, idx) => (
                            <React.Fragment key={idx}>
                              {line}
                              {idx < csiCoordinator.address.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3 border-t border-gray-100 pt-4">
                      <div className="p-2 rounded-lg bg-slate-100 text-[#0f2a44] shrink-0 mt-0.5">
                        <Phone className="w-4 h-4 text-[#990000]" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0f2a44] block text-xs uppercase tracking-wide mb-1">
                          Phone :
                        </span>
                        {csiCoordinator.phone.map((ph, idx) => (
                          <a
                            key={idx}
                            href={`tel:${ph.replace(/[^0-9+]/g, "")}`}
                            className="text-slate-700 hover:text-[#990000] transition-colors block text-xs sm:text-sm font-medium"
                          >
                            {ph}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3 border-t border-gray-100 pt-4">
                      <div className="p-2 rounded-lg bg-slate-100 text-[#0f2a44] shrink-0 mt-0.5">
                        <Mail className="w-4 h-4 text-[#990000]" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0f2a44] block text-xs uppercase tracking-wide mb-1">
                          E Mail :
                        </span>
                        <a
                          href={`mailto:${csiCoordinator.email}`}
                          className="text-[#990000] hover:underline font-semibold block text-xs sm:text-sm break-all"
                        >
                          {csiCoordinator.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* COMMITTEE MEMBERS CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
                <div className="bg-[#800000] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 !text-white text-white" />
                    <h3 className="font-display text-lg font-bold !text-white text-white">
                      Committee Members
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-white/20 !text-white text-white">
                    {csiCommitteeMembers.length} Members
                  </span>
                </div>

                <div className="p-6 divide-y divide-gray-100">
                  {csiCommitteeMembers.map((member, idx) => (
                    <div key={idx} className={idx > 0 ? "pt-4 mt-4" : ""}>
                      <h4 className="font-display text-base font-bold text-[#0f2a44]">
                        {member.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#990000] mt-0.5">
                        {member.designation}
                      </p>
                      <p className="text-xs text-slate-600 font-medium mt-0.5">
                        {member.department}
                      </p>

                      <div className="mt-2.5 flex flex-wrap gap-y-1.5 gap-x-4 text-xs text-slate-600">
                        {member.phone && (
                          <div className="flex items-center gap-1.5">
                            <Phone className="w-3 h-3 text-slate-400" />
                            <a
                              href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`}
                              className="hover:text-[#990000]"
                            >
                              {member.phone}
                            </a>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5">
                          <Mail className="w-3 h-3 text-slate-400" />
                          <a
                            href={`mailto:${member.email}`}
                            className="text-[#990000] hover:underline break-all"
                          >
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* NATIONAL CSI SUMMARY */}
            <ScrollReveal>
              <div className="bg-[#0f2a44] text-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-[#ffd15c]" />
                  <h4 className="font-display font-bold text-base text-[#ffd15c]">
                    About National CSI
                  </h4>
                </div>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  Computer Society of India (CSI), formed in 1965, has 70 chapters across India, 418 student branches, and over 90,000 members dedicated to IT advancement and research.
                </p>
                <a
                  href="https://www.csi-india.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#ffd15c] hover:underline font-semibold"
                >
                  <span>Visit CSI National Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </ScrollReveal>

            {/* RELATED CHAPTERS & PORTALS LINKS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 space-y-4">
                <h4 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider">
                  Related Chapters &amp; Portals
                </h4>
                <div className="divide-y divide-gray-100 text-sm">
                  {[
                    { label: "Indian Society for Technical Education (ISTE)", to: "/iste" },
                    { label: "Institution of Electronics & Telecommunication Engineers (IETE)", to: "/iete" },
                    { label: "The Institution of Engineers (India) [IEI]", to: "/cells/iei" },
                    { label: "Student Activity Center (SAC)", to: "/cells/sac" },
                    { label: "Internal Quality Assurance Cell (IQAC)", to: "/iqac" },
                    { label: "Entrepreneurship Development Cell (EDC)", to: "/cells/edc" },
                  ].map((p, idx) => (
                    <Link
                      key={idx}
                      to={p.to}
                      className="flex items-center justify-between py-3 text-slate-700 hover:text-[#990000] transition-all group"
                    >
                      <span className="font-medium group-hover:translate-x-0.5 transition-transform text-xs sm:text-sm">
                        {p.label}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#990000] group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </main>

      {/* PDF PREVIEW MODAL */}
      {previewPdf && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setPreviewPdf(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[88vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0f2a44] text-white">
              <div className="flex items-center gap-3 min-w-0 pr-4">
                <PdfIcon className="w-6 h-6 shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-sm sm:text-base truncate !text-white text-white">
                    {previewPdf.title}
                  </h3>
                  <p className="text-xs text-white/70">Official CSI Event Report Preview</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={previewPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  title="Open in new window"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={previewPdf.url}
                  download
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  title="Download PDF"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setPreviewPdf(null)}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-1 cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body / Iframe */}
            <div className="flex-1 bg-slate-100 relative">
              <iframe
                src={previewPdf.url}
                title={previewPdf.title}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

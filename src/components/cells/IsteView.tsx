import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Maximize2,
  X,
  FileText,
  ExternalLink,
  Download,
  Search,
  Award,
  Calendar,
  CheckCircle2,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  isteCoordinator,
  isteCommitteeMembers,
  isteAbout,
  isteAwards,
  isteObjectives,
  isteFocusAreas,
  isteConsolidatedDocs,
  isteActivitiesByYear,
  type ActivityItem,
} from "./isteData";

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

export default function IsteView() {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState<string>("2026-27");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [previewPdf, setPreviewPdf] = useState<{ url: string; title: string } | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const years = useMemo(() => Object.keys(isteActivitiesByYear), []);

  // Filter activities for selected year or across all if searching
  const currentActivities: ActivityItem[] = useMemo(() => {
    const list = isteActivitiesByYear[selectedYear] || [];
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase();
    return list.filter((act) => act.title.toLowerCase().includes(q));
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
            Indian Society for Technical Education (ISTE) Chapter
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Madanapalle Institute of Technology &amp; Science • Established 2011
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
              Indian Society for Technical Education (ISTE)
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#990000] transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-xs hover:shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-[#990000]" />
            <span>Back to Cells &amp; Committees</span>
          </button>
        </div>

        {/* 2-COLUMN BALANCED WIDE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* PRIMARY CONTENT AREA (7-8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            {/* 1. TOP AWARD IMAGE BANNER */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="relative group bg-slate-900">
                  <img
                    src={`${BASE}images/iste/ista-image.png`}
                    alt="ISTE State Award for Best Engineering College in A.P"
                    className="w-full h-auto object-cover max-h-[520px] transition-transform duration-300 group-hover:scale-[1.01]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://mits.ac.in/public/uploads/iste/ista-image.png";
                    }}
                  />
                  <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => setPreviewImage(`${BASE}images/iste/ista-image.png`)}
                      className="inline-flex items-center gap-1.5 bg-black/60 hover:bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg backdrop-blur-sm transition-colors border border-white/20"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View full image</span>
                    </button>
                  </div>
                </div>
                <div className="bg-[#990000] text-white px-6 py-3.5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-[#800000]">
                  <span className="font-bold text-sm sm:text-base tracking-wide !text-white text-white">
                    ISTE State Award for &ldquo;Best Engineering College&rdquo; in A.P
                  </span>
                  <span className="text-xs text-[#ffd15c] font-semibold tracking-wider uppercase">
                    MITS AP Section Honor
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. ABOUT ISTE SECTION */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/90 shadow-sm p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] mb-5 flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-red-50 text-[#990000] shrink-0">
                    <Award className="w-6 h-6 text-[#990000]" />
                  </span>
                  <span>About ISTE</span>
                </h2>
                <div className="text-slate-700 leading-relaxed text-justify space-y-4 text-sm sm:text-base font-normal">
                  <p>{isteAbout}</p>
                </div>

                {/* 3. ISTE AP STATE AWARDS (PDF LIST) */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg md:text-xl font-bold font-display text-[#0f2a44] mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#990000]" />
                    <span>ISTE AP State Awards</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {isteAwards.map((award, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3.5 rounded-xl border border-gray-200 bg-slate-50 hover:bg-red-50/50 hover:border-[#990000]/30 transition-all group"
                      >
                        <div className="flex items-center gap-3 min-w-0 pr-2">
                          <PdfIcon className="w-7 h-7 group-hover:scale-105 transition-transform shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#990000] transition-colors truncate">
                            {award.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => setPreviewPdf({ url: award.url, title: award.title })}
                            className="text-xs font-semibold px-2.5 py-1 rounded bg-white text-[#990000] border border-[#990000]/30 hover:bg-[#990000] hover:text-white transition-all shadow-2xs"
                          >
                            View
                          </button>
                          <a
                            href={award.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded text-slate-400 hover:text-[#990000] transition-colors"
                            title="Open in new window"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. MAJOR OBJECTIVES */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg md:text-xl font-bold font-display text-[#0f2a44] mb-4">
                    The major objectives of the ISTE are :
                  </h3>
                  <ul className="space-y-2.5">
                    {isteObjectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#990000] text-white text-[11px] font-bold shrink-0 mt-0.5 shadow-2xs">
                          {i + 1}
                        </span>
                        <span className="pt-0.5">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 5. FOCUS AREAS */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg md:text-xl font-bold font-display text-[#0f2a44] mb-4">
                    The MITS-ISTE Chapter major focus areas are:
                  </h3>
                  <ul className="space-y-2.5">
                    {isteFocusAreas.map((fa, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-1" />
                        <span>{fa}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 6. CONSOLIDATED DATA & OFFICE ORDERS */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg md:text-xl font-bold font-display text-[#0f2a44] mb-4">
                    ISTE Institutional Documents &amp; Faculty Lists
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {isteConsolidatedDocs.map((doc, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-between p-4 rounded-xl border border-gray-200 bg-white hover:border-[#990000]/40 hover:bg-red-50/20 shadow-xs hover:shadow-sm transition-all group"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <PdfIcon className="w-8 h-8 group-hover:scale-105 transition-transform shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#990000] transition-colors leading-snug">
                            {doc.title}
                          </span>
                        </div>
                        <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                          <button
                            onClick={() => setPreviewPdf({ url: doc.url, title: doc.title })}
                            className="text-xs font-semibold px-2.5 py-1 rounded bg-[#990000] text-white hover:bg-[#800000] transition-colors"
                          >
                            Preview
                          </button>
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-slate-500 hover:text-[#990000] inline-flex items-center gap-1 transition-colors"
                          >
                            <span>Open</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* 7. ACTIVITIES ORGANIZED SECTION */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/90 shadow-sm p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-2.5">
                      <Calendar className="w-7 h-7 text-[#990000]" />
                      <span>Activities Organized</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Comprehensive archive of technical events, workshops, seminars &amp; industrial visits
                    </p>
                  </div>

                  {/* Search box */}
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search activities..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#990000]/20 focus:border-[#990000] transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Academic Year Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
                  {years.map((yr) => {
                    const count = isteActivitiesByYear[yr]?.length || 0;
                    const isActive = selectedYear === yr;
                    return (
                      <button
                        key={yr}
                        onClick={() => {
                          setSelectedYear(yr);
                          setSearchQuery("");
                        }}
                        className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                          isActive
                            ? "bg-[#990000] text-white shadow-xs"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        <span>{yr}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Activities Table / List */}
                {currentActivities.length === 0 ? (
                  <div className="text-center py-12 border border-dashed border-gray-200 rounded-xl bg-slate-50">
                    <p className="text-slate-500 text-sm font-medium">
                      No activities match your search &ldquo;{searchQuery}&rdquo; in {selectedYear}.
                    </p>
                    <button
                      onClick={() => setSearchQuery("")}
                      className="mt-3 text-xs font-semibold text-[#990000] hover:underline"
                    >
                      Clear search filter
                    </button>
                  </div>
                ) : (
                  <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100 bg-white">
                    {currentActivities.map((act, index) => (
                      <div
                        key={index}
                        className="p-4 sm:p-5 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
                      >
                        <div className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1">
                          <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#990000] group-hover:text-white transition-colors">
                            {index + 1}
                          </span>
                          <div className="min-w-0">
                            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed group-hover:text-[#0f2a44] transition-colors">
                              {act.title}
                            </p>
                          </div>
                        </div>

                        {act.pdfUrl ? (
                          <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                            <button
                              onClick={() =>
                                setPreviewPdf({
                                  url: act.pdfUrl,
                                  title: act.title,
                                })
                              }
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-[#990000]/30 text-[#990000] hover:bg-[#990000] hover:text-white transition-all shadow-2xs"
                            >
                              <PdfIcon className="w-4 h-4" />
                              <span>Report</span>
                            </button>
                            <a
                              href={act.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-[#990000] transition-colors"
                              title="Open in new window"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        ) : (
                          <span className="text-[11px] font-medium text-slate-400 self-end sm:self-center italic">
                            Report Archived
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </ScrollReveal>
          </div>

          {/* SIDEBAR AREA (4-5 cols) - Matches Official Screenshot with High Contrast */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            {/* COORDINATOR OF ISTE CARD */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm overflow-hidden sticky top-24">
                {/* Header with crimson background and CRISP WHITE TEXT */}
                <div className="bg-[#990000] px-6 py-3.5 border-b border-[#800000]">
                  <h2 className="!text-white text-white font-display text-base sm:text-lg font-bold tracking-wider uppercase m-0 p-0 flex items-center gap-2">
                    Coordinator of ISTE
                  </h2>
                </div>

                <div className="p-6 space-y-5">
                  {/* Coordinator profile */}
                  <div className="pb-4 border-b border-gray-100">
                    <h3 className="font-display text-xl font-bold text-[#0f2a44] leading-snug">
                      {isteCoordinator.name}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium mt-0.5">
                      {isteCoordinator.designation}
                    </p>
                    <p className="text-xs text-[#990000] font-bold uppercase tracking-wider mt-1">
                      {isteCoordinator.department}
                    </p>
                  </div>

                  {/* Details section */}
                  <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-red-50 text-[#990000] shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="font-bold text-[#990000] block text-xs uppercase tracking-wider mb-1">
                          Address :
                        </span>
                        <p className="leading-relaxed text-slate-700 text-xs sm:text-sm">
                          {isteCoordinator.address.map((line, i) => (
                            <span key={i} className="block">
                              {line}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3 pt-3 border-t border-gray-100">
                      <div className="p-2 rounded-lg bg-red-50 text-[#990000] shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="font-bold text-[#990000] block text-xs uppercase tracking-wider mb-1">
                          Phone :
                        </span>
                        <a
                          href={`tel:${isteCoordinator.phone.replace(/[^0-9+]/g, "")}`}
                          className="text-slate-800 hover:text-[#990000] font-semibold transition-colors block text-xs sm:text-sm"
                        >
                          {isteCoordinator.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3 pt-3 border-t border-gray-100">
                      <div className="p-2 rounded-lg bg-red-50 text-[#990000] shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="font-bold text-[#990000] block text-xs uppercase tracking-wider mb-1">
                          E Mail :
                        </span>
                        <a
                          href={`mailto:${isteCoordinator.email}`}
                          className="text-[#990000] hover:underline font-semibold block break-all text-xs sm:text-sm"
                        >
                          {isteCoordinator.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Committee Members (Matching Screenshot with Crimson Header) */}
                  <div className="pt-5 border-t border-gray-200">
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#990000] flex items-center gap-2 mb-3 pb-1 border-b border-red-100">
                      <Users className="w-4 h-4 text-[#990000]" />
                      <span>Committee Members</span>
                    </h3>
                    <div className="space-y-3">
                      {isteCommitteeMembers.map((member, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-slate-50 border border-gray-100 hover:border-red-200 transition-colors"
                        >
                          <p className="text-sm font-bold text-[#0f2a44]">{member.name}</p>
                          <p className="text-xs text-slate-600 font-medium">
                            {member.designation}
                          </p>
                          <p className="text-xs text-slate-500 font-semibold mt-0.5">
                            {member.department}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* RELATED SOCIETIES & PORTALS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 space-y-4">
                <h4 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider">
                  Related Chapters &amp; Cells
                </h4>
                <div className="divide-y divide-gray-100 text-sm">
                  {[
                    { label: "Computer Society of India (CSI)", to: "/csi" },
                    { label: "Institution of Electronics & Telecom (IETE)", to: "/iete" },
                    { label: "Institution of Engineers (India) [IEI]", to: "/iei" },
                    { label: "Student Activity Center (SAC)", to: "/cells/sac" },
                    { label: "Internal Quality Assurance Cell (IQAC)", to: "/iqac" },
                    { label: "Entrepreneurship Development Cell (EDC)", to: "/edc" },
                    { label: "Industry Institute Interaction Cell (IIIC)", to: "/iiic" },
                  ].map((p, idx) => (
                    <Link
                      key={idx}
                      to={p.to}
                      className="flex items-center justify-between py-2.5 text-slate-700 hover:text-[#990000] transition-all group"
                    >
                      <span className="font-medium text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-slate-300">
            <div className="flex items-center justify-between p-4 bg-[#990000] text-white">
              <div className="flex items-center gap-2.5 min-w-0 pr-4">
                <FileText className="w-5 h-5 text-[#ffd15c] shrink-0" />
                <h3 className="font-semibold text-sm sm:text-base truncate !text-white text-white">
                  {previewPdf.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={previewPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Open in new window"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setPreviewPdf(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-slate-100 p-2 overflow-hidden flex flex-col">
              <iframe
                src={previewPdf.url}
                title={previewPdf.title}
                className="w-full h-full rounded-lg border border-slate-300 bg-white"
              />
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="truncate max-w-md">Source: {previewPdf.url}</span>
              <a
                href={previewPdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#990000] hover:underline inline-flex items-center gap-1"
              >
                <span>Open / Download</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FULL-IMAGE LIGHTBOX MODAL */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={previewImage}
              alt="ISTE State Award Preview"
              className="w-full h-auto max-h-[82vh] object-contain rounded-xl"
            />
            <p className="text-center text-xs font-semibold text-slate-700 py-2">
              ISTE State Award for &ldquo;Best Engineering College&rdquo; in A.P
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

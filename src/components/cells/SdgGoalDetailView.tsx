import React from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Globe2,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Award,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  sdgGoals2027Data,
  sdgGoals2025Data,
  allSdgGoalsList,
  type SdgGoalDetail,
} from "./sdgGoalDetailData";
import { sdgContactData } from "./sdgData";

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

interface SdgGoalDetailViewProps {
  overrideSlug?: string;
}

export default function SdgGoalDetailView({ overrideSlug }: SdgGoalDetailViewProps) {
  const { slug: paramSlug } = useParams<{ slug?: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  // Resolve current slug: from prop, route param, or pathname
  const currentPath = location.pathname.replace(/^\//, "").replace(/\/$/, "");
  const slug = (overrideSlug || paramSlug || currentPath || "sdg1-2027").toLowerCase();

  const is2027 = slug.includes("2027");
  const dataMap = is2027 ? sdgGoals2027Data : sdgGoals2025Data;
  const goalData: SdgGoalDetail | undefined = dataMap[slug] || sdgGoals2027Data[slug] || sdgGoals2025Data[slug];

  const goalNumber = goalData?.goal || 1;
  const currentGoalMeta = allSdgGoalsList.find((g) => g.goal === goalNumber) || allSdgGoalsList[0];

  const prevGoalNumber = goalNumber > 1 ? goalNumber - 1 : 17;
  const nextGoalNumber = goalNumber < 17 ? goalNumber + 1 : 1;

  const prevSlug = is2027 ? `sdg${prevGoalNumber}-2027` : `sdg${prevGoalNumber}`;
  const nextSlug = is2027 ? `sdg${nextGoalNumber}-2027` : `sdg${nextGoalNumber}`;

  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800">
      <Header />

      {/* HERO BANNER - Standard Lighter Overlay */}
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
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm inline-flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-[#ffd15c]" />
            <span>
              UN Sustainable Development Goals • {is2027 ? "Impact Rankings 2027" : "Impact Rankings 2025"}
            </span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight !text-white text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            {goalData?.title || `SDG ${goalNumber}: ${currentGoalMeta.name}`}
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Madanapalle Institute of Technology &amp; Science • Deemed to be University
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
              <Link to="/sdg-cell" className="text-white/70 hover:text-white transition-colors">
                SDG Cell
              </Link>
            </li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold truncate max-w-[280px] sm:max-w-md">
              SDG {goalNumber}: {currentGoalMeta.name}
            </li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTENT CONTAINER - Balanced Full-Width Layout */}
      <main className="w-full max-w-[96%] mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-12">
        {/* Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <Link
            to="/sdg-cell"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#990000] transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-xs hover:shadow-sm self-start"
          >
            <ArrowLeft className="w-4 h-4 text-[#990000]" />
            <span>Back to SDG Cell</span>
          </Link>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <Link
              to={`/${prevSlug}`}
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#990000] bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-2xs hover:shadow-xs transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Goal {prevGoalNumber}</span>
            </Link>
            <Link
              to={`/${nextSlug}`}
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#990000] bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-2xs hover:shadow-xs transition-all"
            >
              <span>Goal {nextGoalNumber}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 2-COLUMN BALANCED WIDE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* PRIMARY CONTENT AREA (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* GOAL BANNER CARD */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-gray-100">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 shrink-0 p-1">
                    <img
                      src={`${BASE}images/sdg/1E-WEB-Goal-${goalNumber.toString().padStart(2, "0")}.png`}
                      alt={goalData?.title || currentGoalMeta.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://mits.ac.in/public/uploads/courses/1E-WEB-Goal-${goalNumber.toString().padStart(2, "0")}.png`;
                      }}
                    />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 text-white shadow-2xs" style={{ backgroundColor: currentGoalMeta.color }}>
                      UN Sustainable Development Goal {goalNumber}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] leading-tight">
                      {goalData?.title || `SDG ${goalNumber} : ${currentGoalMeta.name}`}
                    </h2>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {is2027 ? "Times Higher Education (THE) Impact Rankings 2027" : "Times Higher Education (THE) Impact Rankings 2025"}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="text-slate-700 leading-relaxed text-justify space-y-4 text-sm sm:text-base">
                  <p>{goalData?.description}</p>
                </div>

                {/* Publications & Research Reports */}
                <div className="pt-6 border-t border-gray-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold font-display text-[#0f2a44] flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#990000]" />
                      <span>Publications &amp; Reports</span>
                    </h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-100 text-[#990000]">
                      {goalData?.publications.length || 0} Document{(goalData?.publications.length || 0) > 1 ? "s" : ""}
                    </span>
                  </div>

                  {(!goalData?.publications || goalData.publications.length === 0) ? (
                    <div className="p-6 rounded-xl bg-slate-50 border border-dashed border-gray-200 text-center text-xs text-slate-500">
                      No publications currently archived for this goal.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {goalData.publications.map((pub, idx) => (
                        <a
                          key={idx}
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 rounded-xl border border-gray-200 bg-slate-50 hover:bg-white hover:border-[#990000]/40 hover:shadow-xs transition-all flex items-center justify-between gap-3 group cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0 flex-1">
                            <PdfIcon className="w-8 h-8 shrink-0 group-hover:scale-105 transition-transform" />
                            <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#990000] transition-colors leading-snug">
                              {pub.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0 text-slate-400 group-hover:text-[#990000] transition-colors">
                            <span className="text-[11px] font-semibold text-slate-500 group-hover:text-[#990000] hidden sm:inline">
                              Open PDF
                            </span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* BOTTOM PAGINATION */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-200 shadow-xs">
              <Link
                to={`/${prevSlug}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#990000] transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-[#990000]" />
                <span>
                  Previous: SDG {prevGoalNumber}
                </span>
              </Link>

              <Link
                to="/sdg-cell"
                className="text-xs font-bold text-[#990000] uppercase tracking-wider hover:underline"
              >
                All 17 Goals
              </Link>

              <Link
                to={`/${nextSlug}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#990000] transition-colors"
              >
                <span>
                  Next: SDG {nextGoalNumber}
                </span>
                <ChevronRight className="w-4 h-4 text-[#990000]" />
              </Link>
            </div>
          </div>

          {/* SIDEBAR AREA (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* QUICK GOAL JUMP SELECTOR */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden sticky top-24">
                <div className="bg-[#990000] px-5 py-3.5 border-b border-[#800000]">
                  <h3 className="!text-white text-white font-display text-sm font-bold tracking-wider uppercase m-0 p-0 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#ffd15c]" />
                    <span>All 17 SDG Goals ({is2027 ? "2027" : "2025"})</span>
                  </h3>
                </div>

                <div className="p-3 max-h-[460px] overflow-y-auto space-y-1 scrollbar-thin">
                  {allSdgGoalsList.map((g) => {
                    const targetSlug = is2027 ? `sdg${g.goal}-2027` : `sdg${g.goal}`;
                    const isSelected = g.goal === goalNumber;

                    return (
                      <Link
                        key={g.goal}
                        to={`/${targetSlug}`}
                        className={`flex items-center justify-between p-2 rounded-xl text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-[#990000] !text-white text-white font-bold shadow-xs"
                            : "text-slate-700 hover:bg-slate-100 hover:text-[#990000]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <span
                            className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                            style={{ backgroundColor: g.color }}
                          >
                            {g.goal}
                          </span>
                          <span className="truncate">{g.name}</span>
                        </div>
                        <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-[#ffd15c]" : "text-slate-400"}`} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* COORDINATOR WIDGET */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-5 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                <div className="p-2 rounded-lg bg-red-50 text-[#990000]">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0f2a44]">{sdgContactData.coordinator}</h3>
                  <p className="text-xs text-[#990000] font-semibold">{sdgContactData.role}</p>
                </div>
              </div>
              <div className="space-y-2 text-xs text-slate-600">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#990000] shrink-0" />
                  <a href={`tel:${sdgContactData.phone}`} className="hover:text-[#990000]">
                    {sdgContactData.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#990000] shrink-0" />
                  <a href={`mailto:${sdgContactData.email}`} className="text-[#990000] hover:underline font-semibold">
                    {sdgContactData.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

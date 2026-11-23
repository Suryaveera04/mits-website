import React, { useState } from "react";
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
  Award,
  Globe2,
  Users,
  ShieldCheck,
  Building2,
  Leaf,
  Target,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  sdgAboutData,
  sdgRankings2027,
  sdgRankings2025,
  sdgNirfData,
  sdgPoliciesData,
  sdgCommitteeMembers,
  sdgCommitteeOfficeOrder,
  sdgsSpecificToMitsDoc,
  sdgActivitiesDoc,
  sdgImpactRankingsResultsDoc,
  sdgContactData,
  type PdfDocument,
} from "./sdgData";

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

type TabKey =
  | "about"
  | "rankings-2027"
  | "rankings-2025"
  | "impact-rankings-results"
  | "nirf-sdg"
  | "sdg-policies"
  | "committee-members"
  | "sdgs-specific"
  | "activities"
  | "contact";

interface NavItem {
  id: TabKey | "ext" | "link";
  label: string;
  isExternal?: boolean;
  href?: string;
  internalPath?: string;
}

const navItems: NavItem[] = [
  { id: "about", label: "About SDG Cell:" },
  { id: "rankings-2027", label: "Times Higher Education (THE) Impact Rankings 2027" },
  {
    id: "ext",
    label: "Publications",
    isExternal: true,
    href: "https://mits.ac.in/assets/pdf/sdg/SDG%20wise%20Publications%20MITS.pdf",
  },
  { id: "rankings-2025", label: "Times Higher Education (THE) Impact Rankings 2025" },
  {
    id: "ext",
    label: "SDG Annual Report 2025-26",
    isExternal: true,
    href: "https://mits.ac.in/assets/pdf/sdg/SDG%20ANNUAL%20REPORT%202025-26.pdf",
  },
  {
    id: "link",
    label: "QS World University Rankings: Sustainability",
    internalPath: "/qs-sustainability",
  },
  {
    id: "link",
    label: "UI GreenMetric Sustainable University Ranking",
    internalPath: "/ui-greenmetric-sustainable-university-ranking",
  },
  {
    id: "ext",
    label: "UI GreenMetric World University Rankings 2026",
    isExternal: true,
    href: "https://uigreenmetric.com/university/mits.ac.in",
  },
  {
    id: "ext",
    label: "The Impact Rankings 2025",
    isExternal: true,
    href: "https://www.timeshighereducation.com/world-university-rankings/madanapalle-institute-technology-and-science",
  },
  { id: "impact-rankings-results", label: "The Impact Rankings Results" },
  { id: "nirf-sdg", label: "NIRF SDG" },
  { id: "sdg-policies", label: "SDG Policies" },
  { id: "committee-members", label: "Committee Members" },
  { id: "sdgs-specific", label: "SDGs Specific to MITS" },
  { id: "activities", label: "Activities" },
  { id: "contact", label: "Contact" },
];

export default function SdgView() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabKey>("about");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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
            <span>United Nations 2030 Agenda • Institutional Framework</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight !text-white text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            Sustainable Development Goals (SDG) Cell
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
              <Link to="/cells" className="text-white/70 hover:text-white transition-colors">
                Cells &amp; Committees
              </Link>
            </li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold truncate max-w-[280px] sm:max-w-md">
              Sustainable Development Goals (SDG) Cell
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
          {/* LEFT VERTICAL NAVIGATION TABS (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden sticky top-24">
              <div className="bg-[#990000] px-5 py-3.5 border-b border-[#800000]">
                <h2 className="!text-white text-white font-display text-sm sm:text-base font-bold tracking-wider uppercase m-0 p-0 flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-[#ffd15c]" />
                  <span>SDG Cell Navigation</span>
                </h2>
              </div>

              <div className="p-2 space-y-1">
                {navItems.map((item, idx) => {
                  if (item.internalPath) {
                    return (
                      <Link
                        key={idx}
                        to={item.internalPath}
                        className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between text-slate-700 hover:bg-slate-100 hover:text-[#990000] group"
                      >
                        <span className="truncate pr-2 leading-snug">{item.label}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#990000] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    );
                  }

                  if (item.isExternal && item.href) {
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between text-slate-700 hover:bg-slate-100 hover:text-[#990000] group"
                      >
                        <span className="truncate pr-2 leading-snug">{item.label}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#990000] shrink-0" />
                      </a>
                    );
                  }

                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(item.id as TabKey)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-[#990000] !text-white text-white shadow-xs font-semibold"
                          : "text-slate-700 hover:bg-slate-100 hover:text-[#990000]"
                      }`}
                    >
                      <span className="truncate pr-2 leading-snug">{item.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive
                            ? "text-[#ffd15c] translate-x-0.5"
                            : "text-slate-400 group-hover:translate-x-0.5"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* QUICK CONTACT CARD IN SIDEBAR */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-5 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                <div className="p-2 rounded-lg bg-red-50 text-[#990000]">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0f2a44]">{sdgContactData.coordinator}</h3>
                  <p className="text-xs text-[#990000] font-semibold">{sdgContactData.role}</p>
                </div>
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#990000] shrink-0 mt-0.5" />
                  <span>MITS Kadiri Road, Madanapalle</span>
                </p>
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

          {/* RIGHT TAB CONTENT AREA (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* TAB 1: ABOUT SDG CELL */}
            {activeTab === "about" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  {/* Title */}
                  <div className="pb-4 border-b border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                      <span className="p-2 rounded-xl bg-red-50 text-[#990000] shrink-0">
                        <Globe2 className="w-6 h-6" />
                      </span>
                      <span>About SDG Cell</span>
                    </h2>
                  </div>

                  {/* 17 SDG Poster Banner (Matching Screenshot Exactly) */}
                  <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative group bg-white">
                    <img
                      src={`${BASE}images/sdg/sdg_poster.png`}
                      alt="17 Sustainable Development Goals Poster"
                      className="w-full h-auto object-contain cursor-pointer transition-transform duration-300 group-hover:scale-[1.005]"
                      onClick={() => setPreviewImage(`${BASE}images/sdg/sdg_poster.png`)}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://mits.ac.in/public/uploads/courses/sdg_poster.png";
                      }}
                    />
                    <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => setPreviewImage(`${BASE}images/sdg/sdg_poster.png`)}
                        className="inline-flex items-center gap-1.5 bg-black/60 hover:bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg backdrop-blur-sm transition-colors border border-white/20"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View full poster</span>
                      </button>
                    </div>
                  </div>

                  {/* Introduction Paragraphs Verbatim */}
                  <div className="text-slate-700 leading-relaxed text-justify space-y-4 text-sm sm:text-base">
                    <p>{sdgAboutData.intro1}</p>
                    <p>{sdgAboutData.intro2}</p>
                  </div>

                  {/* Vision & Mission Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="p-5 rounded-xl border border-gray-100 bg-slate-50 space-y-2">
                      <div className="flex items-center gap-2 text-[#990000] font-bold text-base font-display">
                        <Target className="w-5 h-5 text-[#990000]" />
                        <span>Vision</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {sdgAboutData.vision}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-gray-100 bg-slate-50 space-y-2">
                      <div className="flex items-center gap-2 text-[#990000] font-bold text-base font-display">
                        <Sparkles className="w-5 h-5 text-[#990000]" />
                        <span>Mission</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {sdgAboutData.mission}
                      </p>
                    </div>
                  </div>

                  {/* Goals & Initiatives */}
                  <div className="pt-4 border-t border-gray-100 space-y-4">
                    <h3 className="text-lg font-bold font-display text-[#0f2a44]">
                      Goals &amp; Initiatives
                    </h3>
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-red-50/50 border border-[#990000]/20">
                        <span className="font-bold text-[#990000] text-xs uppercase tracking-wider block mb-1">
                          Sustainability Goals:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {sdgAboutData.sustainabilityGoals}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200">
                        <span className="font-bold text-amber-800 text-xs uppercase tracking-wider block mb-1">
                          Sustainability Initiatives:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {sdgAboutData.sustainabilityInitiatives}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 2: THE IMPACT RANKINGS 2027 */}
            {activeTab === "rankings-2027" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                        <Award className="w-7 h-7 text-[#990000]" />
                        <span>Times Higher Education (THE) Impact Rankings 2027</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Explore MITS sustainability performance across all 17 UN Sustainable Development Goals for 2027.
                      </p>
                    </div>
                    <a
                      href="https://mits.ac.in/assets/pdf/sdg/SDG%20wise%20Publications%20MITS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#990000] text-white text-xs sm:text-sm font-semibold hover:bg-[#800000] transition-all shrink-0 shadow-xs hover:shadow-sm self-start sm:self-auto group"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Publications</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {sdgRankings2027.map((item) => (
                      <Link
                        key={item.goal}
                        to={`/sdg${item.goal}-2027`}
                        className="group flex flex-col p-4 rounded-xl border border-gray-200 bg-slate-50 hover:bg-white hover:border-[#990000]/40 hover:shadow-md transition-all cursor-pointer"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden mb-3 bg-white shadow-xs shrink-0 mx-auto">
                          <img
                            src={`${BASE}${item.img.replace(/^\//, "")}`}
                            alt={item.title}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://mits.ac.in/public/uploads/courses/1E-WEB-Goal-${item.goal.toString().padStart(2, "0")}.png`;
                            }}
                          />
                        </div>
                        <div className="text-center flex-1 flex flex-col justify-between">
                          <div>
                            <span className="text-[11px] font-bold text-[#990000] uppercase tracking-wider block mb-0.5">
                              SDG Goal {item.goal}
                            </span>
                            <h3 className="text-sm font-bold text-[#0f2a44] group-hover:text-[#990000] transition-colors leading-snug">
                              {item.title}
                            </h3>
                          </div>
                          <span className="mt-3 inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-500 group-hover:text-[#990000] transition-colors">
                            <span>View Goal Details</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 3: THE IMPACT RANKINGS 2025 */}
            {activeTab === "rankings-2025" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                        <Award className="w-7 h-7 text-[#990000]" />
                        <span>Times Higher Education (THE) Impact Rankings 2025</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Explore MITS sustainability submissions and achievements across all 17 UN Goals for 2025.
                      </p>
                    </div>
                    <a
                      href="https://mits.ac.in/assets/pdf/sdg/SDG%20ANNUAL%20REPORT%202025-26.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#990000] text-white text-xs sm:text-sm font-semibold hover:bg-[#800000] transition-all shrink-0 shadow-xs hover:shadow-sm self-start sm:self-auto group"
                    >
                      <FileText className="w-4 h-4" />
                      <span>SDG Annual Report 2025-26</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {sdgRankings2025.map((item) => (
                      <Link
                        key={item.goal}
                        to={`/sdg${item.goal}`}
                        className="group flex flex-col p-4 rounded-xl border border-gray-200 bg-slate-50 hover:bg-white hover:border-[#990000]/40 hover:shadow-md transition-all cursor-pointer"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden mb-3 bg-white shadow-xs shrink-0 mx-auto">
                          <img
                            src={`${BASE}${item.img.replace(/^\//, "")}`}
                            alt={item.title}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://mits.ac.in/public/uploads/courses/1E-WEB-Goal-${item.goal.toString().padStart(2, "0")}.png`;
                            }}
                          />
                        </div>
                        <div className="text-center flex-1 flex flex-col justify-between">
                          <div>
                            <span className="text-[11px] font-bold text-[#990000] uppercase tracking-wider block mb-0.5">
                              SDG Goal {item.goal}
                            </span>
                            <h3 className="text-sm font-bold text-[#0f2a44] group-hover:text-[#990000] transition-colors leading-snug">
                              {item.title}
                            </h3>
                          </div>
                          <span className="mt-3 inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-500 group-hover:text-[#990000] transition-colors">
                            <span>View Goal Details</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 4: IMPACT RANKINGS RESULTS */}
            {activeTab === "impact-rankings-results" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                      <Award className="w-7 h-7 text-[#990000]" />
                      <span>The Impact Rankings Results</span>
                    </h2>
                    <a
                      href={sdgImpactRankingsResultsDoc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#990000] text-white hover:bg-[#800000] transition-colors shrink-0"
                    >
                      <span>Open PDF</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <a
                    href={sdgImpactRankingsResultsDoc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border border-gray-200 bg-slate-50 hover:bg-white hover:border-[#990000]/40 hover:shadow-sm transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <PdfIcon className="w-10 h-10 shrink-0 group-hover:scale-105 transition-transform" />
                      <div>
                        <h3 className="font-bold text-base text-[#0f2a44] group-hover:text-[#990000] transition-colors">
                          {sdgImpactRankingsResultsDoc.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Official Results summary for Times Higher Education Impact Rankings 2025
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 text-slate-500 group-hover:text-[#990000] transition-colors">
                      <span className="text-xs sm:text-sm font-semibold">Open PDF</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 5: NIRF SDG */}
            {activeTab === "nirf-sdg" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-4 border-b border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                      <ShieldCheck className="w-7 h-7 text-[#990000]" />
                      <span>NIRF SDG 2026 - Sustainability Details</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Comprehensive metric downloads and documentation for NIRF Sustainability criteria.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {sdgNirfData.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl border border-gray-200 bg-slate-50 hover:bg-white hover:border-[#990000]/40 hover:shadow-sm transition-all flex items-center justify-between gap-3 group cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <PdfIcon className="w-8 h-8 shrink-0 group-hover:scale-105 transition-transform" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#990000] transition-colors leading-snug">
                            {doc.title}
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
                </div>
              </ScrollReveal>
            )}

            {/* TAB 6: SDG POLICIES */}
            {activeTab === "sdg-policies" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-4 border-b border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                      <FileText className="w-7 h-7 text-[#990000]" />
                      <span>SDG Policies</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Institutional statutory policies formulated in alignment with the United Nations Sustainable Development Goals.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {sdgPoliciesData.map((policy, idx) => (
                      <a
                        key={idx}
                        href={policy.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#990000]/40 hover:bg-red-50/20 shadow-xs hover:shadow-sm transition-all flex items-center justify-between gap-3 group cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <PdfIcon className="w-8 h-8 shrink-0 group-hover:scale-105 transition-transform" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#990000] transition-colors leading-snug">
                            {policy.title}
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
                </div>
              </ScrollReveal>
            )}

            {/* TAB 7: COMMITTEE MEMBERS */}
            {activeTab === "committee-members" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                        <Users className="w-7 h-7 text-[#990000]" />
                        <span>SDG Committee Members</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Executive committee members responsible for SDG governance and policy implementation.
                      </p>
                    </div>

                    <a
                      href={sdgCommitteeOfficeOrder.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-red-50 text-[#990000] border border-[#990000]/30 hover:bg-[#990000] hover:text-white transition-all shrink-0"
                    >
                      <PdfIcon className="w-5 h-5" />
                      <span>Office Order (09-07-2024)</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                  </div>

                  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-[#990000] !text-white text-white font-bold">
                          <tr>
                            <th className="p-3.5 text-center w-14">S.No</th>
                            <th className="p-3.5">Name</th>
                            <th className="p-3.5">Designation in SDG Cell / Institute</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {sdgCommitteeMembers.map((m) => (
                            <tr key={m.sno} className="hover:bg-slate-50 transition-colors">
                              <td className="p-3.5 text-center font-bold text-slate-500">{m.sno}</td>
                              <td className="p-3.5 font-bold text-[#0f2a44]">{m.name}</td>
                              <td className="p-3.5 text-slate-700">{m.designation}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 8: SDGS SPECIFIC TO MITS */}
            {activeTab === "sdgs-specific" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                        <Target className="w-7 h-7 text-[#990000]" />
                        <span>SDGs Specific to MITS</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Institutional priorities, key focus SDGs, and target alignments.
                      </p>
                    </div>

                    <a
                      href={sdgsSpecificToMitsDoc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#990000] text-white hover:bg-[#800000] transition-colors shrink-0"
                    >
                      <span>Open Document</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-gray-200 h-[750px] bg-slate-50">
                    <iframe
                      src={sdgsSpecificToMitsDoc.url}
                      title={sdgsSpecificToMitsDoc.title}
                      className="w-full h-full border-none"
                    />
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 9: ACTIVITIES */}
            {activeTab === "activities" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                        <Leaf className="w-7 h-7 text-[#990000]" />
                        <span>Activities</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Official report of programs, workshops, community drives, and initiatives organized by SDG Cell.
                      </p>
                    </div>

                    <a
                      href={sdgActivitiesDoc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#990000] text-white hover:bg-[#800000] transition-colors shrink-0"
                    >
                      <span>Open Report</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-gray-200 h-[750px] bg-slate-50">
                    <iframe
                      src={sdgActivitiesDoc.url}
                      title={sdgActivitiesDoc.title}
                      className="w-full h-full border-none"
                    />
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 10: CONTACT */}
            {activeTab === "contact" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-4 border-b border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                      <Phone className="w-7 h-7 text-[#990000]" />
                      <span>Contact Us</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Official secretariat and coordinator contact details for SDG Cell.
                    </p>
                  </div>

                  <div className="max-w-xl p-6 rounded-2xl border border-gray-200 bg-slate-50 space-y-5">
                    <div className="pb-4 border-b border-gray-200">
                      <h3 className="font-display text-xl font-bold text-[#0f2a44]">
                        {sdgContactData.coordinator}
                      </h3>
                      <p className="text-sm text-slate-600 font-medium mt-0.5">
                        {sdgContactData.designation}
                      </p>
                      <p className="text-xs text-slate-500 font-semibold mt-0.5">
                        {sdgContactData.department}
                      </p>
                      <p className="text-xs font-bold text-[#990000] uppercase tracking-wider mt-1.5">
                        {sdgContactData.role}
                      </p>
                    </div>

                    <div className="space-y-4 text-xs sm:text-sm">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-red-50 text-[#990000] shrink-0 mt-0.5">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-[#990000] block text-xs uppercase tracking-wider mb-1">
                            Address :
                          </span>
                          <p className="leading-relaxed text-slate-700">
                            {sdgContactData.address.map((line, i) => (
                              <span key={i} className="block">
                                {line}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 pt-3 border-t border-gray-200">
                        <div className="p-2 rounded-lg bg-red-50 text-[#990000] shrink-0 mt-0.5">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-[#990000] block text-xs uppercase tracking-wider mb-1">
                            Phone :
                          </span>
                          <a
                            href={`tel:${sdgContactData.phone}`}
                            className="text-slate-800 hover:text-[#990000] font-semibold transition-colors block"
                          >
                            {sdgContactData.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 pt-3 border-t border-gray-200">
                        <div className="p-2 rounded-lg bg-red-50 text-[#990000] shrink-0 mt-0.5">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-[#990000] block text-xs uppercase tracking-wider mb-1">
                            E Mail :
                          </span>
                          <a
                            href={`mailto:${sdgContactData.email}`}
                            className="text-[#990000] hover:underline font-semibold block break-all"
                          >
                            {sdgContactData.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </main>

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
              alt="SDG Poster Preview"
              className="w-full h-auto max-h-[82vh] object-contain rounded-xl"
            />
            <p className="text-center text-xs font-semibold text-slate-700 py-2">
              United Nations 17 Sustainable Development Goals
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

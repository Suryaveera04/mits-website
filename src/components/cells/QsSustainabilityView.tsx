import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Leaf,
  Globe2,
  Users,
  ShieldCheck,
  FileText,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  qsAboutIntroData,
  qsEnvironmentalSustainabilityData,
  qsSocialResponsibilityData,
  qsGovernanceData,
  qsPoliciesAndDocumentsData,
  qsSdgAnnualReportsData,
  qsAdditionalInfoData,
  type QsSectionItem,
} from "./qsSustainabilityData";
import { sdgContactData } from "./sdgData";

const BASE = "https://mits.edu/";

type QsTabKey =
  | "about"
  | "environmental-impact"
  | "social-impact"
  | "governance"
  | "sdg-annual-reports"
  | "additional-info";

interface TabItem {
  id: QsTabKey;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const qsTabs: TabItem[] = [
  { id: "about", label: "About Sustainability", icon: Globe2 },
  { id: "environmental-impact", label: "Environmental Impact", icon: Leaf },
  { id: "social-impact", label: "Social Impact", icon: Users },
  { id: "governance", label: "Governance", icon: ShieldCheck },
  { id: "sdg-annual-reports", label: "SDG Annual Reports", icon: FileText },
  { id: "additional-info", label: "Additional Information", icon: Award },
];

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

// Reusable Section Renderer for individual criteria
function SectionListRenderer({ sections }: { sections: QsSectionItem[] }) {
  return (
    <div className="space-y-6">
      {sections.map((sec, idx) => (
        <div key={idx} className="space-y-2.5">
          <h3 className="font-display font-bold text-lg sm:text-xl text-[#990000] border-b border-gray-100 pb-1.5">
            {sec.title}
          </h3>
          {sec.paragraphs.map((p, pidx) => (
            <p key={pidx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {p}
            </p>
          ))}
          {sec.bullets && sec.bullets.length > 0 && (
            <ul className="my-2.5 space-y-1.5 pl-2">
              {sec.bullets.map((b, bidx) => (
                <li key={bidx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#990000] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

interface QsSustainabilityViewProps {
  initialTab?: QsTabKey;
}

export default function QsSustainabilityView({ initialTab = "about" }: QsSustainabilityViewProps) {
  const [activeTab, setActiveTab] = useState<QsTabKey>(initialTab);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes("environmental")) {
      setActiveTab("environmental-impact");
    } else if (path.includes("social")) {
      setActiveTab("social-impact");
    } else if (path.includes("governance")) {
      setActiveTab("governance");
    } else if (path.includes("annual") || path.includes("report")) {
      setActiveTab("sdg-annual-reports");
    } else if (location.hash) {
      const hash = location.hash.replace("#", "").toLowerCase();
      const matched = qsTabs.find((t) => t.id === hash);
      if (matched) setActiveTab(matched.id);
    }
  }, [location]);

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

        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm inline-flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-[#ffd15c]" />
            <span>QS World University Rankings • Sustainability Framework</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            QS World University Rankings: Sustainability
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
            <li className="text-[#ffd15c] font-semibold">
              QS Sustainability
            </li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTAINER */}
      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <Link
            to="/sdg-cell"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#990000] transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-xs hover:shadow-sm self-start"
          >
            <ArrowLeft className="w-4 h-4 text-[#990000]" />
            <span>Back to SDG Cell</span>
          </Link>
        </div>

        {/* 2-COLUMN BALANCED WIDE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT VERTICAL NAVIGATION TABS (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden sticky top-24">
              <div className="bg-[#990000] px-5 py-3.5 border-b border-[#800000]">
                <h2 className="!text-white text-white font-display text-sm sm:text-base font-bold tracking-wider uppercase m-0 p-0 flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-[#ffd15c]" />
                  <span>QS Sustainability</span>
                </h2>
              </div>

              <div className="p-2 space-y-1">
                {qsTabs.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-[#990000] !text-white text-white shadow-xs font-semibold"
                          : "text-slate-700 hover:bg-slate-100 hover:text-[#990000]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#ffd15c]" : "text-[#990000]"}`} />
                        <span className="truncate leading-snug">{item.label}</span>
                      </div>
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

            {/* QUICK CONTACT CARD */}
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

          {/* RIGHT CONTENT PANEL (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* TAB 1: ABOUT SUSTAINABILITY (FULL EXACT OFFICIAL CONTENT) */}
            {activeTab === "about" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-8">
                  {/* 1. About Sustainability Header & Intro */}
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#990000]">
                      {qsAboutIntroData.title}
                    </h2>
                    <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {qsAboutIntroData.paragraphs.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>

                  {/* 2. Environmental Sustainability */}
                  <div className="space-y-5 pt-4 border-t border-gray-200">
                    <h2 className="text-xl md:text-2xl font-bold font-display text-[#990000]">
                      {qsEnvironmentalSustainabilityData.title}
                    </h2>
                    <SectionListRenderer sections={qsEnvironmentalSustainabilityData.sections} />
                  </div>

                  {/* 3. Social Responsibility */}
                  <div className="space-y-5 pt-4 border-t border-gray-200">
                    <h2 className="text-xl md:text-2xl font-bold font-display text-[#990000]">
                      {qsSocialResponsibilityData.title}
                    </h2>
                    <SectionListRenderer sections={qsSocialResponsibilityData.sections} />
                  </div>

                  {/* 4. Governance and Institutional Practices */}
                  <div className="space-y-5 pt-4 border-t border-gray-200">
                    <h2 className="text-xl md:text-2xl font-bold font-display text-[#990000]">
                      {qsGovernanceData.title}
                    </h2>
                    <SectionListRenderer sections={qsGovernanceData.sections} />
                  </div>

                  {/* 5. Policies and Institutional Documents */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <h2 className="text-xl md:text-2xl font-bold font-display text-[#990000]">
                      {qsPoliciesAndDocumentsData.title}
                    </h2>
                    <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {qsPoliciesAndDocumentsData.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 2: ENVIRONMENTAL IMPACT */}
            {activeTab === "environmental-impact" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-3 border-b border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#990000] flex items-center gap-2.5">
                      <Leaf className="w-7 h-7 text-[#990000]" />
                      <span>Environmental Sustainability</span>
                    </h2>
                  </div>

                  <SectionListRenderer sections={qsEnvironmentalSustainabilityData.sections} />
                </div>
              </ScrollReveal>
            )}

            {/* TAB 3: SOCIAL IMPACT */}
            {activeTab === "social-impact" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-3 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#990000] flex items-center gap-2.5">
                      <Users className="w-7 h-7 text-[#990000]" />
                      <span>Social Responsibility</span>
                    </h2>

                    <a
                      href={qsSocialResponsibilityData.doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-red-50 text-[#990000] border border-[#990000]/30 hover:bg-[#990000] hover:text-white transition-all shrink-0"
                    >
                      <PdfIcon className="w-5 h-5" />
                      <span>{qsSocialResponsibilityData.doc.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                  </div>

                  <SectionListRenderer sections={qsSocialResponsibilityData.sections} />
                </div>
              </ScrollReveal>
            )}

            {/* TAB 4: GOVERNANCE */}
            {activeTab === "governance" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-3 border-b border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#990000] flex items-center gap-2.5">
                      <ShieldCheck className="w-7 h-7 text-[#990000]" />
                      <span>Governance and Institutional Practices</span>
                    </h2>
                  </div>

                  <SectionListRenderer sections={qsGovernanceData.sections} />
                </div>
              </ScrollReveal>
            )}

            {/* TAB 5: SDG ANNUAL REPORTS */}
            {activeTab === "sdg-annual-reports" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-3 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#990000] flex items-center gap-2.5">
                      <FileText className="w-7 h-7 text-[#990000]" />
                      <span>{qsSdgAnnualReportsData.title}</span>
                    </h2>

                    <a
                      href={qsSdgAnnualReportsData.doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#990000] text-white hover:bg-[#800000] transition-colors shrink-0"
                    >
                      <PdfIcon className="w-5 h-5" />
                      <span>{qsSdgAnnualReportsData.doc.title}</span>
                      <ExternalLink className="w-4 h-4 ml-0.5" />
                    </a>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {qsSdgAnnualReportsData.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* Direct Document Link Card */}
                  <a
                    href={qsSdgAnnualReportsData.doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-gray-200 bg-slate-50 hover:bg-white hover:border-[#990000]/40 hover:shadow-xs transition-all flex items-center justify-between gap-3 group cursor-pointer block"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <PdfIcon className="w-8 h-8 shrink-0 group-hover:scale-105 transition-transform" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#990000] transition-colors leading-snug">
                        {qsSdgAnnualReportsData.doc.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 text-slate-400 group-hover:text-[#990000] transition-colors">
                      <span className="text-[11px] font-semibold text-slate-500 group-hover:text-[#990000] hidden sm:inline">
                        Open PDF
                      </span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 6: ADDITIONAL INFORMATION */}
            {activeTab === "additional-info" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-3 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#990000] flex items-center gap-2.5">
                      <Award className="w-7 h-7 text-[#990000]" />
                      <span>{qsAdditionalInfoData.title}</span>
                    </h2>

                    <a
                      href={qsAdditionalInfoData.doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#990000] text-white hover:bg-[#800000] transition-colors shrink-0"
                    >
                      <PdfIcon className="w-5 h-5" />
                      <span>{qsAdditionalInfoData.doc.title}</span>
                      <ExternalLink className="w-4 h-4 ml-0.5" />
                    </a>
                  </div>

                  {/* Direct Document Link Card */}
                  <a
                    href={qsAdditionalInfoData.doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-gray-200 bg-slate-50 hover:bg-white hover:border-[#990000]/40 hover:shadow-xs transition-all flex items-center justify-between gap-3 group cursor-pointer block"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <PdfIcon className="w-8 h-8 shrink-0 group-hover:scale-105 transition-transform" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#990000] transition-colors leading-snug">
                        {qsAdditionalInfoData.doc.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 text-slate-400 group-hover:text-[#990000] transition-colors">
                      <span className="text-[11px] font-semibold text-slate-500 group-hover:text-[#990000] hidden sm:inline">
                        Open PDF
                      </span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

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
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  qsAboutData,
  qsEnvironmentalImpactData,
  qsSocialImpactData,
  qsGovernanceData,
  qsSdgAnnualReportsData,
  qsAdditionalInfoData,
} from "./qsSustainabilityData";
import { sdgContactData } from "./sdgData";

const BASE = import.meta.env.BASE_URL;

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
            {/* TAB 1: ABOUT SUSTAINABILITY */}
            {activeTab === "about" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-4 border-b border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                      <Globe2 className="w-7 h-7 text-[#990000]" />
                      <span>About Sustainability</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Institutional commitment to environmental stewardship, social responsibility, and transparent governance.
                    </p>
                  </div>

                  <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                    {qsAboutData.paragraphs.map((para, idx) => (
                      <p key={idx} className="bg-slate-50/70 p-4 rounded-xl border border-gray-100">
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-2xs text-center space-y-2">
                      <div className="w-10 h-10 mx-auto rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                        <Leaf className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm text-[#0f2a44]">Environmental Impact</h4>
                      <p className="text-xs text-slate-500">Education, research &amp; sustainable campus operations</p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-2xs text-center space-y-2">
                      <div className="w-10 h-10 mx-auto rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                        <Users className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm text-[#0f2a44]">Social Impact</h4>
                      <p className="text-xs text-slate-500">Equality, health, community outreach &amp; disability support</p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-2xs text-center space-y-2">
                      <div className="w-10 h-10 mx-auto rounded-full bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm text-[#0f2a44]">Governance</h4>
                      <p className="text-xs text-slate-500">Ethical standards, transparency &amp; student engagement</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 2: ENVIRONMENTAL IMPACT */}
            {activeTab === "environmental-impact" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-4 border-b border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                      <Leaf className="w-7 h-7 text-[#990000]" />
                      <span>QS: Environmental Impact</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Comprehensive measures advancing ecological stewardship, renewable energy, and environmental research.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {qsEnvironmentalImpactData.map((sec, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl border border-gray-200 bg-slate-50/70 hover:bg-white hover:border-[#990000]/30 transition-all space-y-3"
                      >
                        <h3 className="font-bold text-base sm:text-lg text-[#0f2a44] flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#990000]" />
                          <span>{sec.title}</span>
                        </h3>
                        {sec.paragraphs.map((p, pidx) => (
                          <p key={pidx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            {p}
                          </p>
                        ))}
                        {sec.bullets && sec.bullets.length > 0 && (
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                            {sec.bullets.map((b, bidx) => (
                              <li
                                key={bidx}
                                className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-xl border border-gray-200 shadow-2xs"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 3: SOCIAL IMPACT */}
            {activeTab === "social-impact" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                        <Users className="w-7 h-7 text-[#990000]" />
                        <span>QS: Social Impact</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Advancing societal equity, inclusive higher education, employability, and health &amp; wellbeing.
                      </p>
                    </div>

                    <a
                      href={qsSocialImpactData.doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-red-50 text-[#990000] border border-[#990000]/30 hover:bg-[#990000] hover:text-white transition-all shrink-0"
                    >
                      <PdfIcon className="w-5 h-5" />
                      <span>{qsSocialImpactData.doc.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                  </div>

                  <div className="space-y-6">
                    {qsSocialImpactData.sections.map((sec, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl border border-gray-200 bg-slate-50/70 hover:bg-white hover:border-[#990000]/30 transition-all space-y-3"
                      >
                        <h3 className="font-bold text-base sm:text-lg text-[#0f2a44] flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#990000]" />
                          <span>{sec.title}</span>
                        </h3>
                        {sec.paragraphs.map((p, pidx) => (
                          <p key={pidx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            {p}
                          </p>
                        ))}
                        {sec.bullets && sec.bullets.length > 0 && (
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                            {sec.bullets.map((b, bidx) => (
                              <li
                                key={bidx}
                                className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-xl border border-gray-200 shadow-2xs"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 4: GOVERNANCE */}
            {activeTab === "governance" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-4 border-b border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                      <ShieldCheck className="w-7 h-7 text-[#990000]" />
                      <span>QS: Governance</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Statutory governance frameworks, administrative accountability, transparent policies, and student participation.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {qsGovernanceData.map((sec, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl border border-gray-200 bg-slate-50/70 hover:bg-white hover:border-[#990000]/30 transition-all space-y-3"
                      >
                        <h3 className="font-bold text-base sm:text-lg text-[#0f2a44] flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#990000]" />
                          <span>{sec.title}</span>
                        </h3>
                        {sec.paragraphs.map((p, pidx) => (
                          <p key={pidx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 5: SDG ANNUAL REPORTS */}
            {activeTab === "sdg-annual-reports" && (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                        <FileText className="w-7 h-7 text-[#990000]" />
                        <span>QS: SDG Annual Reports</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Systematic review and institutional reports detailing annual progress on the United Nations Sustainable Development Goals.
                      </p>
                    </div>

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

                  <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {qsSdgAnnualReportsData.paragraphs.map((p, idx) => (
                      <p key={idx} className="p-4 rounded-xl border border-gray-200 bg-slate-50/70">
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Direct Document Card */}
                  <a
                    href={qsSdgAnnualReportsData.doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border border-gray-200 bg-slate-50 hover:bg-white hover:border-[#990000]/40 hover:shadow-sm transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group cursor-pointer block"
                  >
                    <div className="flex items-center gap-4">
                      <PdfIcon className="w-10 h-10 shrink-0 group-hover:scale-105 transition-transform" />
                      <div>
                        <h3 className="font-bold text-base text-[#0f2a44] group-hover:text-[#990000] transition-colors">
                          {qsSdgAnnualReportsData.doc.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Official institutional publication detailing annual progress and SDG integration at MITS.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 text-slate-500 group-hover:text-[#990000]">
                      <span className="text-xs sm:text-sm font-semibold">Open PDF</span>
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
                  <div className="pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                        <Award className="w-7 h-7 text-[#990000]" />
                        <span>Additional Information</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Awareness initiatives, quizzes, and documentation supporting sustainability education.
                      </p>
                    </div>

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

                  {/* Direct Document Card */}
                  <a
                    href={qsAdditionalInfoData.doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border border-gray-200 bg-slate-50 hover:bg-white hover:border-[#990000]/40 hover:shadow-sm transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group cursor-pointer block"
                  >
                    <div className="flex items-center gap-4">
                      <PdfIcon className="w-10 h-10 shrink-0 group-hover:scale-105 transition-transform" />
                      <div>
                        <h3 className="font-bold text-base text-[#0f2a44] group-hover:text-[#990000] transition-colors">
                          {qsAdditionalInfoData.doc.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Interactive awareness quiz report on the United Nations Sustainable Development Goals.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 text-slate-500 group-hover:text-[#990000]">
                      <span className="text-xs sm:text-sm font-semibold">Open PDF</span>
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

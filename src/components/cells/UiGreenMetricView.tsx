import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Leaf,
  Globe2,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Building2,
  Zap,
  Trash2,
  Droplets,
  Car,
  GraduationCap,
  FileCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  uiGreenMetricData,
  uiGreenMetricExternalRanking,
  type UiGreenMetricItem,
} from "./uiGreenMetricData";
import { sdgContactData } from "./sdgData";

const BASE = import.meta.env.BASE_URL;

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

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "settings-infrastructure": Building2,
  "energy-climate": Zap,
  waste: Trash2,
  water: Droplets,
  transportation: Car,
  "education-research": GraduationCap,
  "governance-digitalization": FileCheck,
};

export default function UiGreenMetricView() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const selectedItem: UiGreenMetricItem | undefined = uiGreenMetricData.find(
    (item) => item.id === activeTab
  );

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
            <Leaf className="w-4 h-4 text-[#ffd15c]" />
            <span>UI GreenMetric World University Rankings • Sustainability Criteria</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            UI GreenMetric Sustainable University Ranking
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
              UI GreenMetric
            </li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTAINER */}
      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Top Back Link */}
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
                  <Leaf className="w-4 h-4 text-[#ffd15c]" />
                  <span>UI GreenMetric Navigation</span>
                </h2>
              </div>

              <div className="p-2 space-y-1">
                {/* External Global Ranking Portal */}
                <a
                  href={uiGreenMetricExternalRanking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between text-slate-700 hover:bg-slate-100 hover:text-[#990000] group"
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    <Globe2 className="w-4 h-4 text-[#990000] shrink-0" />
                    <span className="truncate leading-snug">{uiGreenMetricExternalRanking.title}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#990000] shrink-0" />
                </a>

                {/* All Categories Tab */}
                <button
                  onClick={() => setActiveTab("all")}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                    activeTab === "all"
                      ? "bg-[#990000] !text-white text-white shadow-xs font-semibold"
                      : "text-slate-700 hover:bg-slate-100 hover:text-[#990000]"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    <Award className={`w-4 h-4 shrink-0 ${activeTab === "all" ? "text-[#ffd15c]" : "text-[#990000]"}`} />
                    <span className="truncate leading-snug">All Metric Categories (Overview)</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      activeTab === "all"
                        ? "text-[#ffd15c] translate-x-0.5"
                        : "text-slate-400 group-hover:translate-x-0.5"
                    }`}
                  />
                </button>

                {/* 7 Metric Category Tabs */}
                {uiGreenMetricData.map((item) => {
                  const Icon = categoryIcons[item.id] || Leaf;
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
                        <span
                          className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 ${
                            isActive
                              ? "bg-white text-[#990000]"
                              : "bg-red-50 text-[#990000] border border-[#990000]/20"
                          }`}
                        >
                          {item.category}
                        </span>
                        <span className="truncate leading-snug">{item.title}</span>
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
            {/* FEATURED GLOBAL RANKING BANNER CARD */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0f2a44] to-[#1e3a5f] text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border border-slate-700">
              <div className="space-y-1.5">
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-400/30">
                  {uiGreenMetricExternalRanking.badge}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  {uiGreenMetricExternalRanking.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  {uiGreenMetricExternalRanking.description}
                </p>
              </div>

              <a
                href={uiGreenMetricExternalRanking.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#ffb300] text-slate-950 hover:bg-[#ffc107] transition-all shadow-md shrink-0 cursor-pointer font-bold"
              >
                <span>Visit Global Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* OVERVIEW / ALL CATEGORIES */}
            {activeTab === "all" ? (
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                  <div className="pb-4 border-b border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                      <Leaf className="w-7 h-7 text-[#990000]" />
                      <span>Sustainability Criteria &amp; Metric Submissions</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Explore official institutional documentation for all 7 UI GreenMetric evaluation pillars.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {uiGreenMetricData.map((item) => {
                      const Icon = categoryIcons[item.id] || Leaf;
                      return (
                        <a
                          key={item.id}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-5 rounded-xl border border-gray-200 bg-slate-50/70 hover:bg-white hover:border-[#990000]/40 hover:shadow-sm transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group cursor-pointer"
                        >
                          <div className="flex items-start gap-4 min-w-0 flex-1">
                            <span className="w-10 h-10 rounded-xl bg-red-50 text-[#990000] border border-[#990000]/20 flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                              {item.category}
                            </span>
                            <div className="space-y-1">
                              <h3 className="font-bold text-base text-[#0f2a44] group-hover:text-[#990000] transition-colors flex items-center gap-2">
                                <span>{item.title}</span>
                              </h3>
                              <p className="text-xs text-slate-500 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0 text-slate-500 group-hover:text-[#990000] self-end sm:self-center">
                            <PdfIcon className="w-6 h-6" />
                            <span className="text-xs sm:text-sm font-semibold">Open PDF</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            ) : (
              selectedItem && (
                <ScrollReveal>
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-red-50 text-[#990000] border border-[#990000]/30">
                            Category: {selectedItem.category}
                          </span>
                          <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44]">
                            {selectedItem.title}
                          </h2>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                          {selectedItem.description}
                        </p>
                      </div>

                      <a
                        href={selectedItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#990000] text-white hover:bg-[#800000] transition-colors shrink-0"
                      >
                        <PdfIcon className="w-5 h-5" />
                        <span>Open PDF</span>
                        <ExternalLink className="w-4 h-4 ml-0.5" />
                      </a>
                    </div>

                    {/* Embedded PDF iframe for instant viewing */}
                    <div className="rounded-xl overflow-hidden border border-gray-200 h-[750px] bg-slate-50">
                      <iframe
                        src={selectedItem.url}
                        title={selectedItem.title}
                        className="w-full h-full border-none"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              )
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

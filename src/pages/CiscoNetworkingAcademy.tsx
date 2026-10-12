import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  aboutCiscoData,
  academyAtMitsData,
  ccnaTrainingData,
  networkingClubData,
  clubActivitiesData,
  selfPacedCoursesData,
  flyersData,
  contactData,
  type SelfPacedCourse
} from "@/data/ciscoData";
import {
  Network,
  ShieldCheck,
  Cloud,
  Cpu,
  Radio,
  Users2,
  Workflow,
  Sparkles,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Award,
  Calendar,
  Layers,
  ArrowRight,
  ExternalLink,
  Search,
  FileText,
  Download,
  UserCheck,
  Clock,
  Target,
  Rocket,
  Lightbulb,
  Building
} from "lucide-react";

const BASE = import.meta.env.BASE_URL;

type TabId =
  | "about-cisco"
  | "academy-at-mits"
  | "ccna-training"
  | "networking-club"
  | "club-activities"
  | "self-paced-courses"
  | "ccna-flyer"
  | "contact";

interface TabItem {
  id: TabId;
  label: string;
}

const tabs: TabItem[] = [
  { id: "about-cisco", label: "About Cisco" },
  { id: "academy-at-mits", label: "Cisco Networking Academy @ MITS" },
  { id: "ccna-training", label: "Cisco CCNA Training" },
  { id: "networking-club", label: "Cisco Networking Club" },
  { id: "club-activities", label: "Cisco Networking Club Activities" },
  { id: "self-paced-courses", label: "Cisco Self-Paced Courses List" },
  { id: "ccna-flyer", label: "Cisco CCNA Flyer" },
  { id: "contact", label: "Contact" },
];

const techIcons: Record<string, React.ElementType> = {
  "Networking & Connectivity": Network,
  "Cybersecurity": ShieldCheck,
  "Cloud & Data Centre Technologies": Cloud,
  "Artificial Intelligence": Cpu,
  "Internet of Things (IoT)": Radio,
  "Collaboration & Communication": Users2,
  "Automation & Programmability": Workflow,
  "Digital Transformation": Sparkles,
};

const CiscoNetworkingAcademy = () => {
  const [activeTab, setActiveTab] = useState<TabId>("about-cisco");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans">
      <SEO
        title="Cisco Networking Academy @ MITS – CCNA Training & Certification"
        description="Explore the Cisco Networking Academy at MITS Madanapalle. CCNA training, self-paced certification courses, Cisco Networking Club, and skill development in networking and cybersecurity."
        canonical="/cisco-networking-academy"
      />
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION - Standard MITS Hero Layout */}
        <section
          className="relative pt-32 md:pt-44 pb-24 overflow-hidden"
          style={{
            backgroundImage: `url("${BASE}Hero-Section/image-3.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0f2a44]/70" />
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p className="text-[#ffb300] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
              INDUSTRY SKILL DEVELOPMENT & CERTIFICATION
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Cisco <span className="text-[#ffd15c]">Networking Academy</span>
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
              Industry-oriented technical education, Cisco CCNA training, hands-on laboratory experience, and globally recognized digital credentials at MITS.
            </p>
          </div>

          {/* Bottom Left Breadcrumb Navigation */}
          <div className="absolute bottom-4 left-6 sm:left-8 z-10 hidden sm:block">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-white/50">›</li>
                <li>
                  <Link to="/placements" className="hover:text-white transition-colors">
                    Placements
                  </Link>
                </li>
                <li className="text-white/50">›</li>
                <li className="text-amber-300 font-semibold">Cisco Networking Academy</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* MAIN BODY: 12-COLUMN ROBUST CSS GRID */}
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT SIDEBAR: Exactly matches the user's reference screenshot */}
            <aside className="lg:col-span-4 xl:col-span-4 w-full">
              <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-[0_10px_30px_rgba(15,42,68,0.07)] border border-slate-200/80 sticky top-28">
                <nav className="flex flex-col space-y-1" aria-label="Cisco Tabs">
                  {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => {
                          if (tab.id === "self-paced-courses") {
                            navigate("/cisco-self-paced-courses");
                          } else {
                            setActiveTab(tab.id);
                          }
                        }}
                        className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-left text-[14px] sm:text-[15px] font-semibold transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-gradient-to-r from-[#d99000] via-[#e5a00d] to-[#f5b318] text-[#900000] font-bold shadow-[0_6px_18px_rgba(229,160,13,0.35)]"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 border-b border-slate-100 last:border-b-0"
                        }`}
                      >
                        <span className="pr-3 leading-snug">{tab.label}</span>
                        <ArrowRight
                          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                            isActive
                              ? "text-white translate-x-1"
                              : "text-[#d99000] group-hover:translate-x-1"
                          }`}
                        />
                      </button>
                    );
                  })}
                </nav>

                {/* Info Card Inside Sidebar */}
                <div className="mt-5 pt-4 border-t border-slate-100 px-1">
                  <div className="rounded-2xl overflow-hidden border border-[#0f2a44]/20 shadow-sm">
                    {/* Card Header */}
                    <div className="bg-[#0f2a44] px-4 py-3 flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      <p className="font-bold text-[11px] uppercase tracking-widest text-amber-300">
                        Cisco Centre of Excellence
                      </p>
                    </div>
                    {/* Card Body */}
                    <div className="bg-white px-4 py-3">
                      <p className="text-[12px] text-slate-600 leading-relaxed mb-3">
                        Access self-paced and instructor-led Cisco certification pathways.
                      </p>
                      <a
                        href={selfPacedCoursesData.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full bg-[#b30000] hover:bg-[#950000] text-white text-[12px] font-bold py-2.5 px-3 rounded-xl transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" /> Download Course List
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT MAIN PANEL: Content corresponding to active tab */}
            <section className="lg:col-span-8 xl:col-span-8 w-full min-w-0">
              
              {/* TAB 1: About Cisco */}
              {activeTab === "about-cisco" && (
                <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_10px_30px_rgba(15,42,68,0.06)] border border-slate-200/80">
                  <div className="mb-6 border-b border-slate-100 pb-5">
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-amber-600 mb-2">
                      GLOBAL TECHNOLOGY LEADER
                    </p>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f2a44]">
                      About <span className="text-amber-500">Cisco</span>
                    </h2>
                  </div>

                  <div className="space-y-4 text-slate-700 text-base leading-relaxed text-justify mb-10">
                    {aboutCiscoData.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0f2a44]">
                        {aboutCiscoData.keyTechnologyAreasTitle}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {aboutCiscoData.keyTechnologyAreas.map((tech) => {
                        const IconComp = techIcons[tech] || Sparkles;
                        return (
                          <div
                            key={tech}
                            className="group p-4 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-amber-400 hover:shadow-md transition-all duration-200 flex items-center gap-4"
                          >
                            <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0f2a44] group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all">
                              <IconComp className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-slate-800 text-sm sm:text-[15px]">
                              {tech}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Cisco Networking Academy @ MITS */}
              {activeTab === "academy-at-mits" && (
                <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_10px_30px_rgba(15,42,68,0.06)] border border-slate-200/80">
                  <div className="mb-6 border-b border-slate-100 pb-5">
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-amber-600 mb-2">
                      INSTITUTIONAL INITIATIVE
                    </p>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f2a44]">
                      Cisco Networking Academy <span className="text-amber-500">@ MITS</span>
                    </h2>
                  </div>

                  <div className="space-y-4 text-slate-700 text-base leading-relaxed text-justify mb-8">
                    {academyAtMitsData.introParagraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* Key Objectives */}
                  <div className="mb-10 p-6 rounded-2xl bg-amber-50/50 border border-amber-200/80">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-amber-500 text-white flex items-center justify-center">
                        <Target className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-[#0f2a44]">
                        {academyAtMitsData.keyObjectivesTitle}
                      </h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      {academyAtMitsData.keyObjectives.map((obj, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-800 leading-snug">{obj}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Major Areas of Learning */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-[#0f2a44] text-white flex items-center justify-center">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-[#0f2a44]">
                        {academyAtMitsData.majorAreasTitle}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {academyAtMitsData.majorAreas.map((area, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#0f2a44] hover:text-white transition-all text-slate-800 text-sm font-semibold border border-slate-200 shadow-xs"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: Cisco CCNA Training */}
              {activeTab === "ccna-training" && (
                <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_10px_30px_rgba(15,42,68,0.06)] border border-slate-200/80">
                  <div className="mb-6 border-b border-slate-100 pb-5">
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-amber-600 mb-2">
                      PROFESSIONAL CERTIFICATION PATHWAY
                    </p>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f2a44]">
                      About <span className="text-amber-500">Cisco CCNA Training</span>
                    </h2>
                  </div>

                  <p className="text-slate-700 text-base leading-relaxed text-justify mb-6">
                    {ccnaTrainingData.intro}
                  </p>

                  {/* Core Concepts Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
                    {ccnaTrainingData.concepts.map((concept, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-amber-400 hover:shadow-md transition-all"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">
                          {idx + 1}
                        </div>
                        <span className="text-slate-800 font-medium text-sm">{concept}</span>
                      </div>
                    ))}
                  </div>

                  {/* Student Benefits */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-slate-50 border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0f2a44] text-white flex items-center justify-center">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0f2a44]">
                        {ccnaTrainingData.studentBenefitsTitle}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-5">
                      {ccnaTrainingData.studentBenefitsIntro}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      {ccnaTrainingData.studentBenefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: Cisco Networking Club */}
              {activeTab === "networking-club" && (
                <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_10px_30px_rgba(15,42,68,0.06)] border border-slate-200/80">
                  <div className="mb-6 border-b border-slate-100 pb-5">
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-amber-600 mb-2">
                      STUDENT-LED EXCELLENCE
                    </p>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f2a44]">
                      Cisco Networking Club <span className="text-amber-500">Importance, Roles & Responsibilities</span>
                    </h2>
                  </div>

                  <div className="space-y-4 text-slate-700 text-base leading-relaxed text-justify mb-8">
                    {networkingClubData.introParagraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* Importance */}
                  <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
                    <h3 className="font-display text-xl font-bold text-[#0f2a44] mb-5 flex items-center gap-2.5">
                      <Lightbulb className="w-5 h-5 text-amber-500" />
                      {networkingClubData.importanceTitle}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {networkingClubData.importancePoints.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200/80">
                          <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                          <p className="text-xs sm:text-sm text-slate-800 leading-snug">{pt}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Student Team - Roles & Responsibilities */}
                  <div>
                    <div className="mb-6">
                      <h3 className="font-display text-2xl font-bold text-[#0f2a44] mb-2 flex items-center gap-3">
                        <Users2 className="w-6 h-6 text-[#0f2a44]" />
                        {networkingClubData.teamTitle}
                      </h3>
                      <p className="text-slate-600 text-sm">{networkingClubData.teamIntro}</p>
                    </div>

                    <div className="space-y-4">
                      {networkingClubData.roles.map((r, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-md transition-all"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <span className="w-7 h-7 rounded-lg bg-amber-500 text-white font-bold text-xs flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <h4 className="font-bold text-slate-900 text-base sm:text-lg">{r.role}</h4>
                          </div>
                          <ul className="space-y-1.5 pl-10">
                            {r.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="text-xs sm:text-sm text-slate-700 list-disc leading-relaxed">
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: Cisco Networking Club Activities */}
              {activeTab === "club-activities" && (
                <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_10px_30px_rgba(15,42,68,0.06)] border border-slate-200/80">
                  <div className="mb-6 border-b border-slate-100 pb-5">
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-amber-600 mb-2">
                      COMMUNITY & WORKSHOPS
                    </p>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f2a44]">
                      Major Activities of the <span className="text-amber-500">Cisco Networking Club</span>
                    </h2>
                  </div>

                  <p className="text-slate-700 text-base mb-8">{clubActivitiesData.intro}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* Technical Activities */}
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                            <Cpu className="w-5 h-5" />
                          </div>
                          <h3 className="font-display text-lg font-bold text-[#0f2a44]">
                            {clubActivitiesData.technicalActivitiesTitle}
                          </h3>
                        </div>
                        <ul className="space-y-2.5">
                          {clubActivitiesData.technicalActivities.map((act, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Career & Industry Activities */}
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-[#0f2a44] text-white flex items-center justify-center">
                            <Rocket className="w-5 h-5" />
                          </div>
                          <h3 className="font-display text-lg font-bold text-[#0f2a44]">
                            {clubActivitiesData.careerActivitiesTitle}
                          </h3>
                        </div>
                        <ul className="space-y-2.5">
                          {clubActivitiesData.careerActivities.map((act, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Suggested Club Structure Flowchart */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0f2a44] to-[#1a3d5c] text-white shadow-xl">
                    <h3 className="font-display text-xl sm:text-2xl font-bold mb-6 text-center text-amber-300">
                      {clubActivitiesData.suggestedStructureTitle}
                    </h3>

                    <div className="flex flex-col items-center max-w-xl mx-auto space-y-3">
                      {clubActivitiesData.structureSteps.map((step, idx) => (
                        <React.Fragment key={idx}>
                          <div
                            className={`w-full py-3.5 px-6 rounded-2xl text-center text-xs sm:text-sm font-bold shadow-md transition-transform hover:scale-102 ${
                              idx === 0
                                ? "bg-amber-400 text-slate-950"
                                : idx === 3
                                ? "bg-white/20 border border-amber-300/40 text-amber-200"
                                : "bg-white/10 border border-white/20 text-white"
                            }`}
                          >
                            {step}
                          </div>
                          {idx < clubActivitiesData.structureSteps.length - 1 && (
                            <div className="w-0.5 h-4 bg-amber-400/60" />
                          )}
                        </React.Fragment>
                      ))}

                      <div className="mt-6 pt-4 border-t border-white/20 w-full text-center">
                        <p className="text-amber-300 font-bold text-sm sm:text-base tracking-wide">
                          {clubActivitiesData.overallGoal}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 6: Cisco Self-Paced Courses List */}
              {activeTab === "self-paced-courses" && (
                <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(15,42,68,0.06)] border border-slate-200/80 overflow-hidden">
                  {/* Header Banner */}
                  <div className="bg-[#0f2a44] px-6 sm:px-10 py-8">
                    <h2 className="text-white font-bold text-xl sm:text-2xl mb-1">
                      MITS – <span className="text-amber-400">Cisco Networking Academy</span>
                    </h2>
                    <p className="text-white/75 text-sm sm:text-base mt-1 leading-relaxed">
                      {selfPacedCoursesData.subtitle}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 bg-amber-500 text-slate-950 font-bold text-sm px-5 py-2 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {selfPacedCoursesData.deadline}
                    </div>
                  </div>

                  {/* Search & Filter Bar */}
                  <div className="px-5 sm:px-8 py-5 border-b border-slate-200 bg-slate-50 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                    <div className="relative w-full md:max-w-xs">
                      <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search courses..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white transition-all"
                      />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {domains.map((dom) => (
                        <button
                          key={dom}
                          onClick={() => setSelectedDomain(dom)}
                          className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all border ${
                            selectedDomain === dom
                              ? "bg-[#0f2a44] text-white border-[#0f2a44]"
                              : "bg-white text-slate-700 border-slate-200 hover:border-[#0f2a44] hover:text-[#0f2a44]"
                          }`}
                        >
                          {dom.replace("&amp;", "&")}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Table — spacious rows, readable fonts */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#1e3a52] text-white text-left">
                          <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap w-14 text-center">S.No</th>
                          <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap">Domain</th>
                          <th className="px-5 py-4 font-semibold text-sm">Name of the Course</th>
                          <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap">Duration</th>
                          <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap">Level</th>
                          <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap">Learning Type</th>
                          <th className="px-5 py-4 font-semibold text-sm">Achievements Badge &amp; Certifications</th>
                          <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap text-center">Enroll</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredCourses.map((c, idx) => (
                          <tr
                            key={c.sno}
                            className={`border-b border-slate-100 hover:bg-amber-50/50 transition-colors ${
                              idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"
                            }`}
                          >
                            <td className="px-5 py-5 text-sm font-semibold text-slate-500 text-center align-top">
                              {c.sno}
                            </td>
                            <td className="px-5 py-5 align-top">
                              <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-[#0f2a44]/10 text-[#0f2a44] border border-[#0f2a44]/20 whitespace-nowrap leading-none">
                                {c.domain.replace("&amp;", "&")}
                              </span>
                            </td>
                            <td className="px-5 py-5 align-top min-w-[180px]">
                              <span className="font-bold text-[#0f2a44] text-sm sm:text-base leading-snug">
                                {c.courseName}
                              </span>
                            </td>
                            <td className="px-5 py-5 text-sm text-slate-700 font-medium whitespace-nowrap align-top">
                              {c.duration}
                            </td>
                            <td className="px-5 py-5 align-top whitespace-nowrap">
                              <span className="text-sm font-bold text-blue-700">{c.level}</span>
                            </td>
                            <td className="px-5 py-5 text-sm text-slate-600 whitespace-nowrap align-top">
                              Self-paced
                            </td>
                            <td className="px-5 py-5 text-sm text-slate-600 leading-relaxed align-top min-w-[260px]">
                              {c.achievements}
                            </td>
                            <td className="px-5 py-5 align-top text-center">
                              {c.enrollLink ? (
                                <a
                                  href={c.enrollLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 bg-[#b30000] hover:bg-[#950000] text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors whitespace-nowrap shadow-sm"
                                >
                                  Enroll Now <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              ) : (
                                <span className="text-sm text-slate-400 italic">Via NetAcad</span>
                              )}
                            </td>
                          </tr>
                        ))}
                        {filteredCourses.length === 0 && (
                          <tr>
                            <td colSpan={8} className="px-6 py-16 text-center text-slate-500 text-base">
                              No courses found. Try adjusting your search or domain filter.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Footer */}
                  <div className="px-6 sm:px-10 py-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <p className="text-sm text-slate-500">
                      Showing{" "}
                      <strong className="text-slate-800">{filteredCourses.length}</strong> of{" "}
                      <strong className="text-slate-800">{selfPacedCoursesData.courses.length}</strong>{" "}
                      courses
                      {selectedDomain !== "All" && ` in "${selectedDomain.replace("&amp;", "&")}"`}
                    </p>
                    <a
                      href={selfPacedCoursesData.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0f2a44] hover:bg-[#1a3f63] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
                    >
                      <FileText className="w-4 h-4" /> Download Full Course List PDF
                    </a>
                  </div>

                  {/* Note */}
                  <div className="px-6 sm:px-10 pb-8">
                    <p className="text-sm text-slate-500 leading-relaxed pt-5 border-t border-slate-100">
                      <strong>Note:</strong> {selfPacedCoursesData.note}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 7: Cisco CCNA Flyer */}
              {activeTab === "ccna-flyer" && (
                <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_10px_30px_rgba(15,42,68,0.06)] border border-slate-200/80">
                  <div className="mb-6 border-b border-slate-100 pb-5">
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-amber-600 mb-2">
                      OFFICIAL PUBLICATIONS
                    </p>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f2a44]">
                      Cisco <span className="text-amber-500">CCNA Flyers & Brochures</span>
                    </h2>
                  </div>

                  <div className="space-y-8">
                    {flyersData.map((flyer, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
                      >
                        <div className="bg-[#0f2a44] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-amber-400" />
                            <h3 className="font-bold text-sm sm:text-base text-white">{flyer.title}</h3>
                          </div>
                          <div className="flex items-center gap-2">
                            <a
                              href={flyer.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-1.5 px-4 rounded-lg transition-colors"
                            >
                              View PDF <ExternalLink className="w-3 h-3" />
                            </a>
                            <a
                              href={flyer.pdfUrl}
                              download
                              className="inline-flex items-center gap-1.5 bg-slate-600 hover:bg-slate-500 text-white font-bold text-xs py-1.5 px-4 rounded-lg transition-colors border border-slate-500"
                            >
                              <Download className="w-3 h-3" /> Download
                            </a>
                          </div>
                        </div>
                        <div className="p-2 sm:p-4 bg-slate-50">
                          <iframe
                            src={flyer.pdfUrl}
                            title={flyer.title}
                            className="w-full h-[550px] sm:h-[650px] rounded-xl border border-slate-200 bg-white"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 8: Contact */}
              {activeTab === "contact" && (
                <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_10px_30px_rgba(15,42,68,0.06)] border border-slate-200/80">
                  <div className="mb-6 border-b border-slate-100 pb-5">
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-amber-600 mb-2">
                      ACADEMY COORDINATOR & CENTRE HEAD
                    </p>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f2a44]">
                      Contact <span className="text-amber-500">Information</span>
                    </h2>
                  </div>

                  <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 mb-8">
                    <h3 className="font-bold text-[#0f2a44] text-base mb-2">
                      {contactData.title}
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed text-justify">
                      {contactData.description}
                    </p>
                  </div>

                  {/* Coordinator Profile Card — clean icon card, no photo, no buttons */}
                  <div className="max-w-sm rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md">
                    {/* Dark blue person icon */}
                    <div className="w-14 h-14 rounded-2xl bg-[#0f2a44] flex items-center justify-center mb-5 shadow-sm">
                      <UserCheck className="w-7 h-7 text-amber-400" />
                    </div>

                    {/* Name */}
                    <h4 className="font-bold text-[#0f2a44] text-lg mb-4">
                      {contactData.coordinator.name}
                    </h4>

                    {/* Details — each on its own row with divider */}
                    <div className="divide-y divide-slate-100">
                      <p className="py-2.5 text-sm text-slate-600">
                        {contactData.coordinator.designation}
                      </p>
                      <p className="py-2.5 text-sm text-slate-600">
                        {contactData.coordinator.department}
                      </p>
                      <p className="py-2.5 text-sm text-slate-600">
                        {contactData.coordinator.experience}
                      </p>
                      <p className="py-2.5 text-sm text-slate-600">
                        {contactData.coordinator.centerRole}
                      </p>
                      <p className="py-2.5 text-sm text-slate-600">
                        {contactData.coordinator.academyRole}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CiscoNetworkingAcademy;

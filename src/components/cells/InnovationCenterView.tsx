import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  FileText,
  ExternalLink,
  Download,
  Phone,
  Mail,
  MapPin,
  Award,
  Sparkles,
  Trophy,
  CheckCircle2,
  Calendar,
  Search,
  Maximize2,
  X,
  Lightbulb,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  innovationOverviewData,
  innovationCenterDetailData,
  innovationProjectsData as innovationProjects,
  innovationAchievementsData,
  iicCertificates,
  iicCalendarEventsData as iicCalendarEvents,
  mitsBuildCharterDoc,
  mitsNmrlDoc,
  innovationAllEventsData as innovationEvents,
  innovationContactData,
} from "./innovationCenterData";

const mitsBuildPdfUrl = mitsBuildCharterDoc.url;
const mitsNmrlPdfUrl = mitsNmrlDoc.url;
const innovationAchievements = innovationAchievementsData;

const BASE = "https://mits.edu/";

type TabId =
  | "about"
  | "mits-build"
  | "center-details"
  | "projects"
  | "achievements"
  | "iic"
  | "events"
  | "mits-nmrl"
  | "contact";

const TABS: { id: TabId; label: string }[] = [
  { id: "about", label: "About Us" },
  { id: "mits-build", label: "MITS Build" },
  { id: "center-details", label: "Innovation and Incubation Center" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "iic", label: "IIC" },
  { id: "events", label: "Events" },
  { id: "mits-nmrl", label: "MITS NMRL" },
  { id: "contact", label: "Contact Us" },
];

const resolvePdfUrl = (url: string) => {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `https://mits.ac.in${url}`;
  return `https://mits.ac.in/${url}`;
};

export default function InnovationCenterView({
  initialTab = "about",
}: {
  initialTab?: TabId;
}) {
  const [activeTab, setActiveTab] = useState<TabId>(initialTab);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Search states for long lists
  const [projectSearch, setProjectSearch] = useState("");
  const [eventSearch, setEventSearch] = useState("");
  const [iicEventSearch, setIicEventSearch] = useState("");

  // Pagination for events (15 per page)
  const [eventsPage, setEventsPage] = useState(1);
  const EVENTS_PER_PAGE = 15;

  const filteredProjects = useMemo(() => {
    if (!projectSearch.trim()) return innovationProjects;
    const q = projectSearch.toLowerCase();
    return innovationProjects.filter((p) => p.toLowerCase().includes(q));
  }, [projectSearch]);

  const filteredEvents = useMemo(() => {
    if (!eventSearch.trim()) return innovationEvents;
    const q = eventSearch.toLowerCase();
    return innovationEvents.filter((e) => e.title.toLowerCase().includes(q));
  }, [eventSearch]);

  const totalEventPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
  const paginatedEvents = useMemo(() => {
    const start = (eventsPage - 1) * EVENTS_PER_PAGE;
    return filteredEvents.slice(start, start + EVENTS_PER_PAGE);
  }, [filteredEvents, eventsPage]);

  const filteredIicEvents = useMemo(() => {
    if (!iicEventSearch.trim()) return iicCalendarEvents;
    const q = iicEventSearch.toLowerCase();
    return iicCalendarEvents.filter((e) => e.title.toLowerCase().includes(q));
  }, [iicEventSearch]);

  return (
    <div className="min-h-screen bg-[#fafaf7] flex flex-col font-sans">
      <Header />

      {/* HERO BANNER - Standard MITS Cell Hero matching RdCell, SdgView, SacView */}
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
            <Sparkles className="w-4 h-4 text-[#ffd15c]" />
            <span>Cells &amp; Committees • Innovation, Research &amp; Entrepreneurship</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            Centre of Innovation &amp; Incubation
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
              Centre of Innovation &amp; Incubation
            </li>
          </ol>
        </nav>
      </section>

      {/* Horizontal Tab Navigation Bar matching Screenshot 1 directly under hero banner */}
      <div className="bg-white border-b border-gray-200 shadow-xs sticky top-16 md:top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto no-scrollbar py-3.5 gap-1 sm:gap-2 text-xs sm:text-sm font-semibold">
            {TABS.map((tab, idx) => {
              const isActive = activeTab === tab.id;
              return (
                <React.Fragment key={tab.id}>
                  {idx > 0 && (
                    <span className="text-gray-300 select-none px-1">|</span>
                  )}
                  <button
                    onClick={() => {
                      setActiveTab(tab.id);
                      setEventsPage(1);
                    }}
                    className={`whitespace-nowrap px-2.5 py-1.5 transition-all relative cursor-pointer ${
                      isActive
                        ? "text-[#800000] font-bold after:absolute after:bottom-[-14px] after:left-0 after:right-0 after:h-[2.5px] after:bg-[#800000]"
                        : "text-gray-700 hover:text-[#800000]"
                    }`}
                  >
                    {tab.label}
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Container: 2-Column layout with sticky contact sidebar */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        {/* Back to Cells & Committees Button */}
        <div className="mb-6">
          <Link
            to="/cells"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#990000] transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-xs hover:shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-[#990000]" />
            <span>Back to Cells &amp; Committees</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Left Content Column */}
          <div className="lg:col-span-8 bg-white rounded-xl shadow-xs border border-gray-200 p-6 sm:p-8">
            {/* TAB 1: About Us */}
            {activeTab === "about" && (
              <ScrollReveal>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 border-b pb-3 mb-4">
                      Overview
                    </h2>
                    <p className="text-gray-700 leading-relaxed font-medium mb-3">
                      {innovationOverviewData.overview}
                    </p>
                    <ul className="space-y-2.5">
                      {innovationOverviewData.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#800000] mt-2 shrink-0" />
                          <span className="text-gray-700 leading-relaxed font-medium">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#800000] mb-3">
                      {innovationOverviewData.ignitionHeading}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {innovationOverviewData.ignitionText}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#800000]" />
                      Committee Reconstitution Orders
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {innovationOverviewData.committeePdfs.map((pdf, idx) => (
                        <a
                          key={idx}
                          href={pdf.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3.5 bg-red-50/60 hover:bg-red-100/70 border border-red-200/80 rounded-lg group transition-all"
                        >
                          <div className="flex items-center gap-2.5">
                            <FileText className="w-4 h-4 text-[#800000] shrink-0" />
                            <span className="text-xs font-semibold text-gray-800 group-hover:text-[#800000] line-clamp-2">
                              {pdf.title}
                            </span>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#800000] shrink-0 ml-2" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 2: MITS Build */}
            {activeTab === "mits-build" && (
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b gap-3">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        MITS Build
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        Charter document detailing the purpose, goals, and
                        activities of the MITS BUILD Innovation Initiative.
                      </p>
                    </div>
                    <a
                      href={mitsBuildPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#800000] hover:bg-[#660000] text-white text-xs font-bold transition-colors shadow-xs w-fit shrink-0"
                    >
                      <Download className="w-4 h-4" />
                      Open / Download PDF
                    </a>
                  </div>

                  {/* Summary Details */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm space-y-2">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div>
                        <span className="font-semibold text-gray-700">Type:</span>{" "}
                        <span className="text-gray-900">Charter Proposal</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Scope:</span>{" "}
                        <span className="text-gray-900">Initiative</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Category:</span>{" "}
                        <span className="text-gray-900">Innovation</span>
                      </div>
                    </div>
                  </div>

                  {/* PDF Viewer Iframe */}
                  <div className="border border-gray-300 rounded-lg overflow-hidden bg-gray-100 shadow-inner">
                    <iframe
                      src={`${mitsBuildPdfUrl}#toolbar=1`}
                      title="MITS BUILD Chapter Document"
                      className="w-full h-[650px] border-0"
                    />
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 3: Innovation and Incubation Center */}
            {activeTab === "center-details" && (
              <ScrollReveal>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 border-b pb-3 mb-4">
                      {innovationCenterDetailData.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {innovationCenterDetailData.intro}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <h3 className="text-xl font-bold text-[#800000] mb-2 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-[#800000]" />
                      {innovationCenterDetailData.innovationCenter.heading}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {innovationCenterDetailData.innovationCenter.description}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <h3 className="text-xl font-bold text-[#800000] mb-2 flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-[#800000]" />
                      {innovationCenterDetailData.incubationCenter.heading}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {innovationCenterDetailData.incubationCenter.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Objectives
                    </h3>
                    <ul className="space-y-3">
                      {innovationCenterDetailData.objectives.map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#800000] shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            {obj}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Functions
                    </h3>
                    <ul className="space-y-3">
                      {innovationCenterDetailData.functions.map((fn, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            {fn}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 4: Projects (35 projects) */}
            {activeTab === "projects" && (
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b gap-3">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        List of Projects
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        Innovations, prototypes, and applied research projects
                        developed at MITS Innovation Center.
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-[#800000] self-start sm:self-auto">
                      {innovationProjects.length} Projects
                    </span>
                  </div>

                  {/* Search filter */}
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={projectSearch}
                      onChange={(e) => setProjectSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#800000]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {filteredProjects.map((project, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 bg-gray-50 hover:bg-red-50/50 rounded-lg border border-gray-200/90 transition-all hover:border-red-200 group"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#800000] mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-[#800000] leading-snug">
                          {project}
                        </span>
                      </div>
                    ))}
                    {filteredProjects.length === 0 && (
                      <p className="text-sm text-gray-500 col-span-2 py-6 text-center">
                        No projects match "{projectSearch}"
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 5: Achievements (14 achievements) */}
            {activeTab === "achievements" && (
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b gap-3">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Achievements
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        Prestigious national and international awards, hackathon
                        victories, and grant funding achieved by MITS innovators.
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 self-start sm:self-auto">
                      {innovationAchievements.length} Key Milestones
                    </span>
                  </div>

                  <div className="space-y-4">
                    {innovationAchievements.map((itemText, idx) => (
                      <div
                        key={idx}
                        className="p-5 bg-gradient-to-r from-white via-amber-50/20 to-white rounded-xl border border-amber-200/80 shadow-xs hover:shadow-md transition-all relative overflow-hidden"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 shadow-xs">
                            <Trophy className="w-5 h-5 text-amber-600" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#800000] text-white">
                                Achievement #{idx + 1}
                              </span>
                            </div>
                            <p className="text-sm sm:text-base font-semibold text-gray-900 leading-relaxed pt-1">
                              {itemText}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 6: IIC */}
            {activeTab === "iic" && (
              <ScrollReveal>
                <div className="space-y-8">
                  <div className="pb-3 border-b">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Institution's Innovation Council (IIC)
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Ministry of Education (MoE) Innovation Cell, Government of
                      India ratings, certificates, and annual activity reports.
                    </p>
                  </div>

                  {/* Certificates Gallery */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#800000]" />
                      IIC Ratings & Certificates
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {iicCertificates.map((cert, idx) => (
                        <div
                          key={idx}
                          className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer"
                          onClick={() =>
                            setSelectedImage(`${BASE}${cert.image.replace(/^\//, "")}`)
                          }
                        >
                          <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                            <img
                              src={`${BASE}${cert.image.replace(/^\//, "")}`}
                              alt={cert.title}
                              className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                              <Maximize2 className="w-6 h-6" />
                            </div>
                          </div>
                          <div className="p-3 text-center bg-gray-50 border-t border-gray-100">
                            <p className="text-xs font-bold text-gray-800 line-clamp-2">
                              {cert.title}
                            </p>
                            <span className="inline-block mt-1 text-[11px] font-semibold text-[#800000]">
                              {cert.year}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* IIC Calendar Activity Reports */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 mb-3 gap-2">
                      <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-[#800000]" />
                        IIC Calendar Activity Reports
                      </h3>
                      <span className="text-xs font-semibold text-gray-500">
                        {filteredIicEvents.length} Reports
                      </span>
                    </div>

                    <div className="relative mb-3">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search IIC activity reports..."
                        value={iicEventSearch}
                        onChange={(e) => setIicEventSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#800000]"
                      />
                    </div>

                    <div className="divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden max-h-[500px] overflow-y-auto">
                      {filteredIicEvents.map((evt, idx) => {
                        const pdf = resolvePdfUrl(evt.reportUrl);
                        return (
                          <div
                            key={idx}
                            className="p-3.5 bg-white hover:bg-slate-50 flex items-center justify-between gap-3 transition-colors"
                          >
                            <div className="flex items-start gap-3 flex-1">
                              <span className="text-xs font-bold text-gray-400 w-6 shrink-0 mt-0.5">
                                #{idx + 1}
                              </span>
                              <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                                {evt.title}
                              </p>
                            </div>
                            {pdf ? (
                              <a
                                href={pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-red-50 text-[#800000] hover:bg-red-100 border border-red-200 shrink-0 transition-colors"
                              >
                                <FileText className="w-3.5 h-3.5" />
                                Report
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : (
                              <span className="text-xs text-gray-400 italic shrink-0">
                                No doc
                              </span>
                            )}
                          </div>
                        );
                      })}
                      {filteredIicEvents.length === 0 && (
                        <p className="text-sm text-gray-500 p-6 text-center">
                          No reports match "{iicEventSearch}"
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 7: Events (118 chronological events) */}
            {activeTab === "events" && (
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b gap-3">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Events & Workshops
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        Chronological record of workshops, hackathons, guest
                        lectures, and innovation bootcamps conducted by CII.
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 self-start sm:self-auto">
                      {innovationEvents.length} Events Total
                    </span>
                  </div>

                  {/* Search box */}
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search across 118 events..."
                      value={eventSearch}
                      onChange={(e) => {
                        setEventSearch(e.target.value);
                        setEventsPage(1);
                      }}
                      className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#800000]"
                    />
                  </div>

                  {/* Event list */}
                  <div className="space-y-2.5">
                    {paginatedEvents.map((evt, idx) => {
                      const absoluteIdx =
                        (eventsPage - 1) * EVENTS_PER_PAGE + idx + 1;
                      const pdf = resolvePdfUrl(evt.reportUrl);
                      return (
                        <div
                          key={idx}
                          className="p-3.5 bg-gray-50 hover:bg-slate-100/80 rounded-lg border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-xs font-bold text-[#800000] bg-red-100/70 px-2 py-0.5 rounded-sm shrink-0">
                              #{absoluteIdx}
                            </span>
                            <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                              {evt.title}
                            </p>
                          </div>
                          {pdf && (
                            <a
                              href={pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-white text-[#800000] hover:bg-[#800000] hover:text-white border border-red-300 shrink-0 transition-colors self-end sm:self-auto shadow-2xs"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              View Report
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      );
                    })}

                    {paginatedEvents.length === 0 && (
                      <p className="text-sm text-gray-500 py-6 text-center">
                        No events match "{eventSearch}"
                      </p>
                    )}
                  </div>

                  {/* Pagination Controls */}
                  {totalEventPages > 1 && (
                    <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-xs font-semibold text-gray-600">
                      <span>
                        Showing {paginatedEvents.length} of {filteredEvents.length}{" "}
                        events (Page {eventsPage} of {totalEventPages})
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() =>
                            setEventsPage((p) => Math.max(1, p - 1))
                          }
                          disabled={eventsPage === 1}
                          className="px-3 py-1.5 rounded-md border border-gray-300 disabled:opacity-40 hover:bg-gray-100 transition-colors"
                        >
                          Previous
                        </button>
                        <button
                          onClick={() =>
                            setEventsPage((p) =>
                              Math.min(totalEventPages, p + 1)
                            )
                          }
                          disabled={eventsPage === totalEventPages}
                          className="px-3 py-1.5 rounded-md border border-gray-300 disabled:opacity-40 hover:bg-gray-100 transition-colors"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )}

            {/* TAB 8: MITS NMRL */}
            {activeTab === "mits-nmrl" && (
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b gap-3">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        MITS NMRL
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        National Materials Research Laboratory chapter and
                        innovation collaboration document.
                      </p>
                    </div>
                    <a
                      href={mitsNmrlPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#800000] hover:bg-[#660000] text-white text-xs font-bold transition-colors shadow-xs w-fit shrink-0"
                    >
                      <Download className="w-4 h-4" />
                      Open / Download PDF
                    </a>
                  </div>

                  {/* PDF Viewer Iframe */}
                  <div className="border border-gray-300 rounded-lg overflow-hidden bg-gray-100 shadow-inner">
                    <iframe
                      src={`${mitsNmrlPdfUrl}#toolbar=1`}
                      title="MITS NMRL Document"
                      className="w-full h-[650px] border-0"
                    />
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 9: Contact Us */}
            {activeTab === "contact" && (
              <ScrollReveal>
                <div className="space-y-8">
                  <div className="pb-3 border-b">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Contact Us
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Get in touch with the Centre of Innovation & Incubation team
                      for startup incubation, project guidance, and collaboration.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Coordinator */}
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#800000] text-white">
                        {innovationContactData.coordinator.role}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900">
                        {innovationContactData.coordinator.name}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {innovationContactData.coordinator.designation}
                      </p>
                      <div className="pt-2 space-y-2 text-xs text-gray-700">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#800000]" />
                          <span>{innovationContactData.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#800000]" />
                          <a
                            href={`mailto:${innovationContactData.email}`}
                            className="hover:underline text-[#800000]"
                          >
                            {innovationContactData.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Co-Coordinator */}
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-700 text-white">
                        {innovationContactData.coCoordinator.role}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900">
                        {innovationContactData.coCoordinator.name}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {innovationContactData.coCoordinator.designation}
                      </p>
                      <div className="pt-2 space-y-2 text-xs text-gray-700">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#800000]" />
                          <span>{innovationContactData.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#800000]" />
                          <a
                            href={`mailto:${innovationContactData.email}`}
                            className="hover:underline text-[#800000]"
                          >
                            {innovationContactData.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Postal Address */}
                  <div className="p-6 bg-red-50/50 rounded-xl border border-red-200/80">
                    <h3 className="text-base font-bold text-[#800000] mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#800000]" />
                      Campus Address
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed font-medium">
                      {innovationContactData.address.line1}
                      <br />
                      {innovationContactData.address.line2}
                      <br />
                      {innovationContactData.address.line3}
                      <br />
                      {innovationContactData.address.line4}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Right Sticky Sidebar Contact Card (exact match of official screenshots) */}
          <aside className="lg:col-span-4 sticky top-28">
            <div className="bg-white rounded-xl shadow-xs border border-gray-200 overflow-hidden">
              <div className="bg-[#800000] px-5 py-3.5 text-white font-bold text-lg tracking-wide flex items-center gap-2">
                <span>Contact</span>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="text-base font-bold text-gray-900">
                    {innovationContactData.coordinator.name}
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    {innovationContactData.coordinator.designation}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-start gap-2.5 mb-1 text-xs font-bold text-gray-700 uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                    <span>Address :</span>
                  </div>
                  <div className="text-xs text-gray-600 pl-6 leading-relaxed space-y-0.5">
                    <p className="font-semibold text-gray-800">
                      {innovationContactData.address.line1}
                    </p>
                    <p>{innovationContactData.address.line2}</p>
                    <p>Madanapalle-Kadiri Road</p>
                    <p>kurabalakota Mandal, Madanapalle-517325</p>
                    <p>Andhra Pradesh, India</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-2.5 mb-1 text-xs font-bold text-gray-700 uppercase tracking-wider">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span>Phone :</span>
                  </div>
                  <p className="text-xs text-gray-700 pl-6 font-semibold">
                    {innovationContactData.phone}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-2.5 mb-1 text-xs font-bold text-gray-700 uppercase tracking-wider">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>E Mail :</span>
                  </div>
                  <p className="text-xs pl-6">
                    <a
                      href={`mailto:${innovationContactData.email}`}
                      className="text-[#800000] hover:underline font-semibold"
                    >
                      {innovationContactData.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Lightbox Modal for Certificate Previews */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Certificate Full View"
              className="max-h-[82vh] w-auto mx-auto object-contain rounded"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

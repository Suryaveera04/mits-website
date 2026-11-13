import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Maximize2,
  X,
  Download,
  ExternalLink,
  GraduationCap,
  BookOpen,
  Calendar,
  Users,
  Search,
  FileText,
  CheckCircle2,
  Award,
  Eye,
  Building,
  Bell,
  Target,
  Compass,
  Layers,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  nepTabs,
  nepAboutData,
  nepPolicyFrameworks,
  nepCommitteesTaskForces,
  nepDigitalLearning,
  nepInternshipCollaboration,
  nepResearchCommunity,
  nepStudentCentric,
  nepInstitutionalPlanning,
  nepNoticesDownloads,
  nepAccreditationData,
  nepEventsData,
  nepGalleryItems,
  nepContactData,
  NepLinkItem,
  NepEventItem,
} from "./nepData";

const BASE = import.meta.env.BASE_URL;

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

// Clean Document Row matching official MITS publication-list
function PublicationLinkRow({
  item,
  index,
  onPreview,
}: {
  item: NepLinkItem;
  index: number;
  onPreview: (item: NepLinkItem) => void;
}) {
  const isDirectPdf = item.url.toLowerCase().endsWith(".pdf");

  return (
    <div className="group bg-white rounded-xl border border-slate-200/90 p-4 sm:p-5 hover:border-[#b31317]/50 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
        <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-[#b31317] group-hover:text-white transition-colors">
          {index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <h4 className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-[#b31317] transition-colors leading-snug">
            {item.title}
          </h4>
        </div>
      </div>

      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
        <button
          onClick={() => onPreview(item)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-[#b31317] text-slate-700 hover:text-white text-xs font-semibold border border-slate-200 hover:border-[#b31317] transition-all"
          title="Preview Document"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View</span>
        </button>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          title={isDirectPdf ? "Open PDF" : "Open Link"}
        >
          {isDirectPdf ? (
            <PdfIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          ) : (
            <ExternalLink className="w-5 h-5 text-slate-500 hover:text-[#b31317]" />
          )}
        </a>
      </div>
    </div>
  );
}

export default function NepView() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [previewPdf, setPreviewPdf] = useState<{ title: string; url: string } | null>(null);

  // Search state for Notices & Downloads
  const [noticesSearch, setNoticesSearch] = useState("");
  // Search state for Events
  const [eventSearch, setEventSearch] = useState("");

  const filteredNotices = nepNoticesDownloads.filter((doc) =>
    doc.title.toLowerCase().includes(noticesSearch.toLowerCase())
  );

  const filteredEvents = nepEventsData.filter((ev) =>
    ev.title.toLowerCase().includes(eventSearch.toLowerCase()) ||
    ev.date.toLowerCase().includes(eventSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800 flex flex-col font-sans">
      <Header />

      {/* HERO BANNER - Exact project standard */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/45 via-black/30 to-black/60" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm flex items-center justify-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#ffd15c]" />
            National Education Policy 2020 Implementation
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            National Education Policy (NEP) Cell
          </h1>
          <p className="text-white/95 text-sm sm:text-base md:text-lg font-medium max-w-3xl mx-auto drop-shadow-sm">
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
              National Education Policy Cell
            </li>
          </ol>
        </nav>
      </section>

      {/* ALL 13 TABS NAVIGATION BAR - Sticky underneath hero */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-sm">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-2.5 no-scrollbar">
            {nepTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.scrollTo({ top: 380, behavior: "smooth" });
                }}
                className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[#0f2a44] text-white shadow-sm"
                    : "text-slate-600 hover:text-[#b31317] hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER - FULL WIDTH max-w-[1400px] */}
      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1">
        {/* Top Control Bar */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
          <button
            onClick={() => navigate("/cells")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Cells &amp; Committees</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: ABOUT NATIONAL EDUCATION POLICY CELL (ug-tab20) */}
        {/* ============================================================== */}
        {activeTab === "about" && (
          <ScrollReveal>
            <div className="space-y-8">
              {/* Notice Board Banner + About Header */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Main Content (8 cols) */}
                <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 md:p-10 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#990000]/10 flex items-center justify-center text-[#990000]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                        {nepAboutData.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Madanapalle Institute of Technology &amp; Science - Deemed to be University
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
                    {nepAboutData.description}
                  </p>

                  {/* Vision & Mission */}
                  <div className="space-y-6">
                    {/* Vision */}
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
                      <div className="flex items-center gap-2 mb-2 text-[#990000]">
                        <Compass className="w-5 h-5" />
                        <h3 className="font-bold text-base sm:text-lg text-slate-900">Vision</h3>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed pl-7">
                        {nepAboutData.vision}
                      </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
                      <div className="flex items-center gap-2 mb-3 text-[#0f2a44]">
                        <Target className="w-5 h-5" />
                        <h3 className="font-bold text-base sm:text-lg text-slate-900">Mission</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-slate-700 pl-7">
                        {nepAboutData.mission.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Core Objectives */}
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
                      <div className="flex items-center gap-2 mb-3 text-[#990000]">
                        <Layers className="w-5 h-5" />
                        <h3 className="font-bold text-base sm:text-lg text-slate-900">Core Objectives</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-slate-700 pl-7">
                        {nepAboutData.coreObjectives.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#0f2a44] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Activities */}
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
                      <div className="flex items-center gap-2 mb-3 text-[#0f2a44]">
                        <Award className="w-5 h-5" />
                        <h3 className="font-bold text-base sm:text-lg text-slate-900">Key Activities</h3>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700 pl-7">
                        {nepAboutData.keyActivities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sidebar (4 cols): E-Notice Board + Coordinator Card */}
                <div className="lg:col-span-4 space-y-6">
                  {/* NEP E-Notice Board (Exact official right-box) */}
                  <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm">
                    <div className="bg-[#990000] text-white px-5 py-3.5 flex items-center gap-2 font-bold text-sm tracking-wide">
                      <Bell className="w-4 h-4 text-white" />
                      <span>NEP E-Notice Board</span>
                    </div>
                    <div className="p-5">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-red-100 text-[#990000] text-xs font-bold mb-2">
                        {nepAboutData.noticeBoard.badge}
                      </span>
                      <h4 className="font-bold text-base text-slate-900">
                        {nepAboutData.noticeBoard.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Official mandates and ongoing institutional implementation.
                      </p>
                    </div>
                  </div>

                  {/* Coordinator & Contact Details */}
                  <div className="bg-[#990000] text-white rounded-2xl p-6 shadow-md border border-[#800000]">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-bold tracking-wider uppercase mb-3">
                      NEP Cell Secretariat
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white mb-4">Contact Coordinator</h3>

                    <div className="space-y-3.5 text-xs sm:text-sm text-white">
                      <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                        <Users className="w-4 h-4 text-[#ffd15c] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-white text-sm">{nepContactData.coordinator}</p>
                          <p className="text-white/80 text-xs">{nepContactData.role}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                        <Phone className="w-4 h-4 text-[#ffd15c] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/70 text-xs">Phone</p>
                          <p className="font-semibold text-white">{nepContactData.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                        <Mail className="w-4 h-4 text-[#ffd15c] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/70 text-xs">Email</p>
                          <a href={`mailto:${nepContactData.email}`} className="font-semibold text-white hover:text-[#ffd15c] transition-colors break-all">
                            {nepContactData.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                        <MapPin className="w-4 h-4 text-[#ffd15c] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/70 text-xs">Address</p>
                          <p className="text-white/90 text-xs leading-relaxed">
                            {nepContactData.address.join(", ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Publication / Document List (7 Official Links in About Tab) */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                      NEP Cell Official Notifications &amp; Documents
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Committee orders, action plans, and governance documents
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {nepAboutData.documents.map((doc, idx) => (
                    <PublicationLinkRow
                      key={doc.id}
                      item={doc}
                      index={idx}
                      onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 2: POLICY FRAMEWORKS (ug-tab21) */}
        {/* ============================================================== */}
        {activeTab === "policy" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      Policy Frameworks
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Official policy documents, curriculum frameworks, and degree schemes
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {nepPolicyFrameworks.map((item, idx) => (
                  <PublicationLinkRow
                    key={item.id}
                    item={item}
                    index={idx}
                    onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 3: COMMITTEES & TASK FORCES (ug-tab22) */}
        {/* ============================================================== */}
        {activeTab === "committees" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#990000]/10 flex items-center justify-center text-[#990000]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      Committees &amp; Task Forces
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Committee orders, organogram, NEP SAARTHI lists, and activity calendar
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {nepCommitteesTaskForces.map((item, idx) => (
                  <PublicationLinkRow
                    key={item.id}
                    item={item}
                    index={idx}
                    onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 4: DIGITAL & ONLINE LEARNING (ug-tab23) */}
        {/* ============================================================== */}
        {activeTab === "digital" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      Digital &amp; Online Learning
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Digital learning initiatives, SWAYAM adoption, MOOC courses, and Indian Knowledge System
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {nepDigitalLearning.map((item, idx) => (
                  <PublicationLinkRow
                    key={item.id}
                    item={item}
                    index={idx}
                    onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 5: INTERNSHIP & INDUSTRY COLLABORATION (ug-tab24) */}
        {/* ============================================================== */}
        {activeTab === "internship" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#990000]/10 flex items-center justify-center text-[#990000]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      Internship &amp; Industry Collaboration
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Internship policy, embedded degree programmes, summer reports, and corporate collaborations
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {nepInternshipCollaboration.map((item, idx) => (
                  <PublicationLinkRow
                    key={item.id}
                    item={item}
                    index={idx}
                    onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 6: RESEARCH, INNOVATION & COMMUNITY ENGAGEMENT (ug-tab54) */}
        {/* ============================================================== */}
        {activeTab === "research" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      Research, Innovation &amp; Community Engagement
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Research and Development Cell, Incubation Center, community engagement, and novel courses
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {nepResearchCommunity.map((item, idx) => (
                  <PublicationLinkRow
                    key={item.id}
                    item={item}
                    index={idx}
                    onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 7: STUDENT-CENTRIC INITIATIVES (ug-tab55) */}
        {/* ============================================================== */}
        {activeTab === "student" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#990000]/10 flex items-center justify-center text-[#990000]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      Student-Centric Initiatives
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Learner-centric education, honours programmes, SEDGs support, and faculty initiatives
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {nepStudentCentric.map((item, idx) => (
                  <PublicationLinkRow
                    key={item.id}
                    item={item}
                    index={idx}
                    onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 8: INSTITUTIONAL PLANNING & REGULATIONS (ug-tab53) */}
        {/* ============================================================== */}
        {activeTab === "planning" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44]">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      Institutional Planning &amp; Regulations
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Institutional Development Plan, project/thesis rules, UGC regulatory compliance, and plagiarism policy
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {nepInstitutionalPlanning.map((item, idx) => (
                  <PublicationLinkRow
                    key={item.id}
                    item={item}
                    index={idx}
                    onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 9: NOTICES & DOWNLOADS (ug-tab61 - 27 Links) */}
        {/* ============================================================== */}
        {activeTab === "notices" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317]">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      Notices &amp; Downloads
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Official circulars, national frameworks, guidelines, and schemes (27 documents)
                    </p>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search across all 27 downloads..."
                    value={noticesSearch}
                    onChange={(e) => setNoticesSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b31317]/20 focus:border-[#b31317]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {filteredNotices.length > 0 ? (
                  filteredNotices.map((item, idx) => (
                    <PublicationLinkRow
                      key={item.id}
                      item={item}
                      index={idx}
                      onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                    />
                  ))
                ) : (
                  <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
                    <p className="text-slate-500 font-medium">No documents match your search criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 10: ACCREDITATION READINESS (ug-tab56 to ug-tab515) */}
        {/* ============================================================== */}
        {activeTab === "accreditation" && (
          <ScrollReveal>
            <div className="space-y-8">
              {/* Header */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      Accreditation Readiness
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Audit formats, reports, student satisfaction surveys, and AQAR documentation
                    </p>
                  </div>
                </div>
              </div>

              {/* General Accreditation Readiness */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Accreditation Readiness (NAAC, NBA, NIRF, etc.)</h3>
                <div className="grid grid-cols-1 gap-3">
                  {nepAccreditationData.general.map((item, idx) => (
                    <PublicationLinkRow
                      key={item.id}
                      item={item}
                      index={idx}
                      onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                    />
                  ))}
                </div>
              </div>

              {/* Audit Formats */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Audit Formats</h3>
                <div className="grid grid-cols-1 gap-3">
                  {nepAccreditationData.auditFormats.map((item, idx) => (
                    <PublicationLinkRow
                      key={item.id}
                      item={item}
                      index={idx}
                      onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                    />
                  ))}
                </div>
              </div>

              {/* Reports */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Reports</h3>
                <div className="grid grid-cols-1 gap-3">
                  {nepAccreditationData.reports.map((item, idx) => (
                    <PublicationLinkRow
                      key={item.id}
                      item={item}
                      index={idx}
                      onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                    />
                  ))}
                </div>
              </div>

              {/* Student Satisfaction Survey */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Student Satisfaction Survey</h3>
                <div className="grid grid-cols-1 gap-3">
                  {nepAccreditationData.studentSatisfactionSurvey.map((item, idx) => (
                    <PublicationLinkRow
                      key={item.id}
                      item={item}
                      index={idx}
                      onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                    />
                  ))}
                </div>
              </div>

              {/* AQAR */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 mb-4">AQAR</h3>
                <div className="grid grid-cols-1 gap-3">
                  {nepAccreditationData.aqar.map((item, idx) => (
                    <PublicationLinkRow
                      key={item.id}
                      item={item}
                      index={idx}
                      onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 11: EVENTS & COLLABORATIONS (ug-tab25 - 15 Events) */}
        {/* ============================================================== */}
        {activeTab === "events" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#990000]/10 flex items-center justify-center text-[#990000]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      Events &amp; Collaborations
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Official activities, awareness rallies, guest lectures, and workshops (15 events)
                    </p>
                  </div>
                </div>

                {/* Search Events */}
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search events by title or date..."
                    value={eventSearch}
                    onChange={(e) => setEventSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#990000]/20 focus:border-[#990000]"
                  />
                </div>
              </div>

              {/* Event Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((ev) => (
                    <div
                      key={ev.id}
                      className="bg-white rounded-xl border border-slate-200 p-5 hover:border-[#990000]/50 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                            <Calendar className="w-3.5 h-3.5 text-[#990000]" />
                            {ev.date}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">#{ev.id}</span>
                        </div>
                        <h4 className="font-semibold text-sm sm:text-base text-slate-800 leading-snug line-clamp-3">
                          {ev.title}
                        </h4>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => setPreviewPdf({ title: ev.title, url: ev.url })}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-[#990000] text-slate-700 hover:text-white text-xs font-semibold transition-all"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Preview Report</span>
                        </button>
                        <a
                          href={ev.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded hover:bg-slate-100 transition-colors"
                          title="Open Report PDF"
                        >
                          <PdfIcon className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 bg-white rounded-xl p-12 text-center border border-slate-200">
                    <p className="text-slate-500 font-medium">No events found matching your search.</p>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 12: GALLERY (ug-tab42 - MITS' NEP SAARTHI's) */}
        {/* ============================================================== */}
        {activeTab === "gallery" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      Gallery
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      MITS' NEP SAARTHI's photo highlights • All 48 Photos
                    </p>
                  </div>
                </div>
              </div>

              {/* Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {nepGalleryItems.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                  >
                    <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-900">
                      <img
                        src={img.src}
                        alt={img.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `${BASE}images/nep/gallery/nep-gallery-1.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-slate-900 text-xs font-bold backdrop-blur-sm shadow">
                          <Maximize2 className="w-3.5 h-3.5" /> Enlarge
                        </span>
                      </div>
                    </div>
                    <div className="p-3.5 flex items-center justify-between">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#b31317] transition-colors truncate">
                        {img.title}
                      </h4>
                      <span className="text-[11px] font-semibold text-slate-400 shrink-0 ml-2">#{idx + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 13: CONTACT US (ug-tab43) */}
        {/* ============================================================== */}
        {activeTab === "contact" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#990000]/10 flex items-center justify-center text-[#990000]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      Contact Us
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Official coordinator and secretariat contact information
                    </p>
                  </div>
                </div>
              </div>

              {/* Exact Contact Card */}
              <div className="bg-[#990000] text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-[#800000] max-w-2xl">
                <div className="space-y-6">
                  {/* Coordinator */}
                  <div className="flex items-start gap-4 bg-white/10 p-5 rounded-xl border border-white/10">
                    <Users className="w-6 h-6 text-[#ffd15c] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-white text-lg sm:text-xl">
                        {nepContactData.coordinator}
                      </h3>
                      <p className="text-white/80 text-sm font-medium mt-0.5">
                        {nepContactData.role}
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 bg-white/10 p-5 rounded-xl border border-white/10">
                    <MapPin className="w-6 h-6 text-[#ffd15c] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-1">
                        Address
                      </p>
                      <div className="text-white/95 text-sm leading-relaxed space-y-0.5">
                        {nepContactData.address.map((line, idx) => (
                          <p key={idx}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 bg-white/10 p-5 rounded-xl border border-white/10">
                    <Phone className="w-6 h-6 text-[#ffd15c] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-1">
                        Phone :
                      </p>
                      <p className="font-bold text-white text-base">
                        {nepContactData.phone}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 bg-white/10 p-5 rounded-xl border border-white/10">
                    <Mail className="w-6 h-6 text-[#ffd15c] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-1">
                        Email :
                      </p>
                      <a
                        href={`mailto:${nepContactData.email}`}
                        className="font-bold text-white text-base hover:text-[#ffd15c] underline transition-colors"
                      >
                        {nepContactData.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}
      </main>

      {/* PDF PREVIEW MODAL */}
      {previewPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-slate-300">
            <div className="flex items-center justify-between p-4 bg-[#0f2a44] text-white">
              <div className="flex items-center gap-2.5 min-w-0 pr-4">
                <FileText className="w-5 h-5 text-[#ffd15c] shrink-0" />
                <h3 className="font-semibold text-sm sm:text-base truncate">{previewPdf.title}</h3>
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
                className="font-bold text-[#b31317] hover:underline inline-flex items-center gap-1"
              >
                <span>Open / Download</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL FOR ALL 48 GALLERY IMAGES */}
      {lightboxIndex !== null && nepGalleryItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl max-h-[92vh] flex flex-col items-center bg-black/70 rounded-2xl p-4 sm:p-6 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-200 transition-colors shadow-xl z-20"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Arrow */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + nepGalleryItems.length) % nepGalleryItems.length
                )
              }
              className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#b31317] text-white flex items-center justify-center border border-white/20 transition-all shadow-xl z-20"
              title="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % nepGalleryItems.length)
              }
              className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#b31317] text-white flex items-center justify-center border border-white/20 transition-all shadow-xl z-20"
              title="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={nepGalleryItems[lightboxIndex].src}
              alt={nepGalleryItems[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `${BASE}images/nep/gallery/nep-gallery-1.jpg`;
              }}
            />

            {/* Caption */}
            <div className="mt-4 text-center text-white">
              <h4 className="font-bold text-base sm:text-lg">
                {nepGalleryItems[lightboxIndex].title}
              </h4>
              <p className="text-xs text-white/70 mt-1">
                Photo {lightboxIndex + 1} of {nepGalleryItems.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

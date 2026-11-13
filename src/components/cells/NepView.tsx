import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Phone,
  Mail,
  Play,
  Pause,
  Maximize2,
  X,
  Download,
  ExternalLink,
  Shield,
  BookOpen,
  Calendar,
  Users,
  Search,
  FileText,
  CheckCircle2,
  Award,
  GraduationCap,
  Sparkles,
  Lightbulb,
  Layers,
  Globe,
  Compass,
  Clock,
  Send,
  Eye,
  Filter,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  nepCarouselSlides,
  nepTabs,
  nepCommitteeMembers,
  nepPolicyDocuments,
  nepCommitteesDocs,
  nepDigitalDocs,
  nepInternshipDocs,
  nepResearchDocs,
  nepStudentDocs,
  nepPlanningDocs,
  nepNoticesDocs,
  nepAccreditationDocs,
  nepEvents,
  nepGalleryImages,
  NepDocument,
  NepEvent,
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

// Reusable Document Card/Row component
function DocumentRow({
  doc,
  index,
  onPreview,
}: {
  doc: NepDocument;
  index: number;
  onPreview: (doc: NepDocument) => void;
}) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200/90 p-4 sm:p-5 hover:border-[#b31317]/50 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
        <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-[#b31317] group-hover:text-white transition-colors">
          {index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            {doc.category && (
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold tracking-wide border border-slate-200">
                {doc.category}
              </span>
            )}
          </div>
          <h4 className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-[#b31317] transition-colors leading-snug">
            {doc.title}
          </h4>
        </div>
      </div>

      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
        <button
          onClick={() => onPreview(doc)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-[#b31317] text-slate-700 hover:text-white text-xs font-semibold border border-slate-200 hover:border-[#b31317] transition-all"
          title="Preview Document"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View</span>
        </button>
        <a
          href={doc.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          title="Open in New Tab"
        >
          <PdfIcon className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </div>
    </div>
  );
}

export default function NepView() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string; subtitle?: string } | null>(null);
  const [previewPdf, setPreviewPdf] = useState<{ title: string; url: string } | null>(null);

  // Search & Filter States
  const [noticesSearch, setNoticesSearch] = useState("");
  const [noticesCategory, setNoticesCategory] = useState("all");

  const [eventSearch, setEventSearch] = useState("");
  const [eventYear, setEventYear] = useState("all");

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll Hero Carousel
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % nepCarouselSlides.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + nepCarouselSlides.length) % nepCarouselSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % nepCarouselSlides.length);
  };

  // Filtered Notices
  const noticeCategories = [
    "all",
    ...Array.from(new Set(nepNoticesDocs.map((d) => d.category).filter(Boolean))),
  ];

  const filteredNotices = nepNoticesDocs.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(noticesSearch.toLowerCase()) ||
      (doc.category && doc.category.toLowerCase().includes(noticesSearch.toLowerCase()));
    const matchesCategory =
      noticesCategory === "all" || doc.category === noticesCategory;
    return matchesSearch && matchesCategory;
  });

  // Filtered Events
  const eventYears = ["all", "2026-27", "2025-26", "2024-25"];

  const filteredEvents = nepEvents.filter((ev) => {
    const matchesSearch =
      ev.title.toLowerCase().includes(eventSearch.toLowerCase()) ||
      ev.date.toLowerCase().includes(eventSearch.toLowerCase());
    const matchesYear = eventYear === "all" || ev.academicYear === eventYear;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800 flex flex-col font-sans">
      <Header />

      {/* HERO BANNER */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/35 bg-gradient-to-b from-black/40 via-black/25 to-black/60" />

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

      {/* ALL 13 TABS NAVIGATION BAR */}
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

      {/* MAIN CONTENT CONTAINER - FULL WIDTH max-w-[1400px] without blank side space */}
      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1">
        {/* Back Button & Badge */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
          <button
            onClick={() => navigate("/cells")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Cells &amp; Committees</span>
          </button>

          <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
            Official Portal: <span className="font-semibold text-slate-700">mits.ac.in/nep-cell</span>
          </span>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: ABOUT NEP CELL */}
        {/* ============================================================== */}
        {activeTab === "about" && (
          <ScrollReveal>
            <div className="space-y-10">
              {/* Full-width Big Hero Carousel */}
              <div className="relative w-full h-[380px] sm:h-[480px] md:h-[560px] lg:h-[620px] rounded-2xl overflow-hidden shadow-2xl bg-black border border-slate-800 group">
                <img
                  src={nepCarouselSlides[currentSlide].src}
                  alt={nepCarouselSlides[currentSlide].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out transform scale-100 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `${BASE}images/nep/nep-hero.jpeg`;
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                {/* Caption */}
                <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-10 text-white max-w-3xl">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#990000]/90 text-white text-xs font-bold tracking-wider uppercase mb-2 shadow-md">
                    {nepCarouselSlides[currentSlide].tag}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-white drop-shadow-md leading-tight">
                    {nepCarouselSlides[currentSlide].title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-200 drop-shadow line-clamp-2 sm:line-clamp-none max-w-2xl">
                    {nepCarouselSlides[currentSlide].subtitle}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-[#990000] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 z-20 shadow-lg"
                  title="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-[#990000] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 z-20 shadow-lg"
                  title="Next Slide"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Controls (Pause/Play) */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-medium backdrop-blur-md border border-white/20 transition-all"
                  >
                    {isPaused ? <Play className="w-3.5 h-3.5 text-green-400" /> : <Pause className="w-3.5 h-3.5 text-amber-400" />}
                    <span>{isPaused ? "Play" : "Pause"}</span>
                  </button>
                </div>

                {/* Dots */}
                <div className="absolute bottom-3 right-6 z-20 flex items-center gap-1.5">
                  {nepCarouselSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === idx ? "w-6 bg-[#ffb300]" : "w-2 bg-white/50 hover:bg-white/80"
                      }`}
                      title={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Overview & About NEP Cell */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 md:p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#990000]/10 flex items-center justify-center text-[#990000]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                      About National Education Policy (NEP) Cell
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Transformative Academic &amp; Institutional Governance Reforms
                    </p>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
                  <p>
                    The <strong>National Education Policy (NEP) 2020</strong> envisions an education system rooted in Indian ethos that contributes directly to transforming India sustainably into an equitable and vibrant knowledge society. In accordance with directives and frameworks issued by the <strong>University Grants Commission (UGC)</strong> and the <strong>Ministry of Education, Government of India</strong>, Madanapalle Institute of Technology &amp; Science established the <strong>NEP Cell</strong> to spearhead the institutional implementation of multidisciplinary, learner-centric, and holistic higher education.
                  </p>
                  <p>
                    The NEP Cell acts as the nodal agency facilitating seamless transition to flexible credit frameworks (CCFUP / FYUP), operationalization of the <strong>Academic Bank of Credits (ABC)</strong>, active pedagogical interventions, multiple entry and exit pathways, embedded degree programmes, industry-academia linkages, and the promotion of the <strong>Indian Knowledge System (IKS)</strong> across all undergraduate and postgraduate engineering disciplines.
                  </p>
                </div>
              </div>

              {/* Vision & Mission - 2 Full-Width Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Vision Card */}
                <div className="bg-gradient-to-br from-[#0f2a44] to-[#1a4066] text-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-700/50 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#ffd15c] mb-4">
                      <Compass className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#ffd15c]">Institutional Horizon</span>
                    <h3 className="font-serif text-2xl font-bold mt-1 mb-4 text-white">Our Vision</h3>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                      To transform higher technical education into an inclusive, holistic, multidisciplinary, and globally competitive learning ecosystem that fosters critical inquiry, research innovation, ethical leadership, and sustainable nation-building in alignment with the National Education Policy 2020.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>UGC &amp; AICTE Compliant Quality Framework</span>
                  </div>
                </div>

                {/* Mission Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/90 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#990000]/10 flex items-center justify-center text-[#990000] mb-4">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#990000]">Core Mandates</span>
                    <h3 className="font-serif text-2xl font-bold mt-1 mb-4 text-slate-900">Our Mission</h3>
                    <ul className="space-y-3 text-sm text-slate-700">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                        <span><strong>Multidisciplinary Flexibility:</strong> Implement flexible choice-based credit systems, minor degrees, and multiple entry-exit options supported by ABC.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                        <span><strong>Experiential &amp; Value-Based Learning:</strong> Integrate hands-on internships, community immersion (Unnat Bharat Abhiyan), and Indian Knowledge Systems (IKS).</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                        <span><strong>Pedagogical Innovation:</strong> Institutionalize 200+ active learning strategies, continuous formative evaluation, and blended digital education via SWAYAM.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                        <span><strong>Student Leadership:</strong> Mentor UGC-approved NEP SAARTHIs to foster peer advocacy, digital literacy, and student-driven campus governance.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Objectives Grid - 4 Columns Full Width */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44]">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                      Key Objectives of the NEP Cell
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Pillars of educational transformation at MITS
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      icon: Layers,
                      title: "Academic Bank of Credits",
                      desc: "Complete onboarding on DigiLocker / ABC portal for seamless credit storage and institutional transfer.",
                    },
                    {
                      icon: GraduationCap,
                      title: "Curricular Flexibility",
                      desc: "Adoption of UGC CCFUP with Honors, Minors, multidisciplinary electives and skill-based learning.",
                    },
                    {
                      icon: BookOpen,
                      title: "200+ Active Pedagogies",
                      desc: "Promoting WIT & WIL, flipped classrooms, case-based learning, and continuous formative assessment.",
                    },
                    {
                      icon: Globe,
                      title: "Digital & IKS Integration",
                      desc: "Integration of SWAYAM courses, regional language learning, and traditional Indian knowledge systems.",
                    },
                    {
                      icon: Users,
                      title: "NEP SAARTHI Leadership",
                      desc: "UGC student ambassadors driving campus awareness, peer mentorship, and reform advocacy.",
                    },
                    {
                      icon: Shield,
                      title: "Accreditation Readiness",
                      desc: "Continuous academic, administrative, and faculty audits aligned with NAAC & NIRF standards.",
                    },
                    {
                      icon: Award,
                      title: "Industry Apprenticeships",
                      desc: "Mandatory embedded industry internships, corporate tracks, and Capstone project rubrics.",
                    },
                    {
                      icon: Sparkles,
                      title: "Holistic Student Induction",
                      desc: "Deeksharambh Student Induction Programme, Jeevan Kaushal life skills, and wellness initiatives.",
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-slate-50/70 rounded-xl border border-slate-200/80 p-5 hover:bg-white hover:border-[#b31317]/40 hover:shadow-sm transition-all"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] mb-3">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-sm text-slate-900 mb-1.5">{item.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Section: E-Notice Board (8 cols) & Contact Card (4 cols) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* E-Notice Board (8 Cols) */}
                <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317]">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900">
                          E-Notice Board &amp; Latest Highlights
                        </h3>
                        <p className="text-xs text-slate-500">Key notifications and recent institutional orders</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveTab("notices")}
                      className="text-xs font-bold text-[#b31317] hover:underline flex items-center gap-1"
                    >
                      View All 27 Downloads <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {nepNoticesDocs.slice(0, 5).map((doc, idx) => (
                      <DocumentRow
                        key={doc.id}
                        doc={doc}
                        index={idx}
                        onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                      />
                    ))}
                  </div>
                </div>

                {/* Coordinator & Contact Card (4 Cols) */}
                <div className="lg:col-span-4 bg-[#990000] text-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#800000] flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-bold tracking-wider uppercase mb-4">
                      NEP Cell Secretariat
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">Coordinator Contact</h3>
                    <p className="text-white/85 text-xs mb-6">
                      Madanapalle Institute of Technology &amp; Science (Deemed to be University)
                    </p>

                    <div className="space-y-4 text-xs sm:text-sm text-white">
                      <div className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/10">
                        <Users className="w-4 h-4 text-[#ffd15c] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-white text-sm">Mr. E. Sathiyanarayanan</p>
                          <p className="text-white/80 text-xs">Assistant Professor, Dept. of ECE</p>
                          <p className="text-[#ffd15c] text-xs font-semibold mt-0.5">Coordinator, NEP Cell</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/10">
                        <Phone className="w-4 h-4 text-[#ffd15c] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/70 text-xs">Direct Phone &amp; Helpline</p>
                          <a href="tel:+919100973376" className="font-semibold text-white hover:text-[#ffd15c] transition-colors block">
                            +91 9100973376
                          </a>
                          <span className="text-white/80 text-xs">08571-280255</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/10">
                        <Mail className="w-4 h-4 text-[#ffd15c] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/70 text-xs">Official Email</p>
                          <a href="mailto:nep@mits.ac.in" className="font-semibold text-white hover:text-[#ffd15c] transition-colors break-all">
                            nep@mits.ac.in
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/10">
                        <MapPin className="w-4 h-4 text-[#ffd15c] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/70 text-xs">Office Location</p>
                          <p className="text-white/90 text-xs leading-relaxed">
                            Academic Block, MITS Campus, Post Box No: 14, Angallu, Madanapalle-517325, Andhra Pradesh
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                    <button
                      onClick={() => setActiveTab("contact")}
                      className="text-xs font-bold text-white hover:text-[#ffd15c] flex items-center gap-1 transition-colors"
                    >
                      <span>Full Contact Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <span className="text-[11px] text-white/70">Mon - Sat: 9 AM - 5 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 2: POLICY FRAMEWORKS */}
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
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      NEP Policy Frameworks &amp; Statutory Guidelines
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      National and institutional policy frameworks governing undergraduate &amp; postgraduate degrees
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {nepPolicyDocuments.map((doc, idx) => (
                  <DocumentRow
                    key={doc.id}
                    doc={doc}
                    index={idx}
                    onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 3: COMMITTEES & TASK FORCES */}
        {/* ============================================================== */}
        {activeTab === "committees" && (
          <ScrollReveal>
            <div className="space-y-8">
              {/* Committee Members Table */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#990000]/10 flex items-center justify-center text-[#990000]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      NEP Implementation Committee Members
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Statutory institutional committee constituted by the Vice Chancellor
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#0f2a44] text-white">
                        <th className="py-3 px-4 font-semibold text-xs uppercase tracking-wider w-16">S.No</th>
                        <th className="py-3 px-4 font-semibold text-xs uppercase tracking-wider">Name of Member</th>
                        <th className="py-3 px-4 font-semibold text-xs uppercase tracking-wider">Designation / Department</th>
                        <th className="py-3 px-4 font-semibold text-xs uppercase tracking-wider">Position in Cell</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {nepCommitteeMembers.map((m, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-slate-600">{m.sno}</td>
                          <td className="py-3.5 px-4 font-bold text-slate-900">{m.name}</td>
                          <td className="py-3.5 px-4 text-slate-700">{m.designation}</td>
                          <td className="py-3.5 px-4">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                                m.position === "Chairperson"
                                  ? "bg-amber-100 text-amber-900 border border-amber-300"
                                  : m.position === "Coordinator"
                                  ? "bg-red-100 text-red-900 border border-red-300"
                                  : "bg-slate-100 text-slate-700 border border-slate-300"
                              }`}
                            >
                              {m.position}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Committees Documents & Official Notifications */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Committees, Notifications &amp; NEP SAARTHI Orders
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Official notifications, organograms, UGC SAARTHI national selections and activity roadmaps
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {nepCommitteesDocs.map((doc, idx) => (
                    <DocumentRow
                      key={doc.id}
                      doc={doc}
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
        {/* TAB 4: DIGITAL & ONLINE LEARNING */}
        {/* ============================================================== */}
        {activeTab === "digital" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Digital &amp; Online Learning Initiatives
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      LMS integration, SWAYAM / NPTEL credit transfer frameworks, and multilingual technical modules
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {nepDigitalDocs.map((doc, idx) => (
                  <DocumentRow
                    key={doc.id}
                    doc={doc}
                    index={idx}
                    onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 5: INTERNSHIP & INDUSTRY COLLABORATION */}
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
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Internship &amp; Industry Collaboration
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Apprenticeship-embedded degree programs, CRC corporate frameworks, and summer internship reports
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {nepInternshipDocs.map((doc, idx) => (
                  <DocumentRow
                    key={doc.id}
                    doc={doc}
                    index={idx}
                    onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 6: RESEARCH & INNOVATION */}
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
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Research, Innovation &amp; Community Engagement
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      RDC directives, Innovation &amp; Incubation Center (IIC) seed funds, and Unnat Bharat Abhiyan outreach
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {nepResearchDocs.map((doc, idx) => (
                  <DocumentRow
                    key={doc.id}
                    doc={doc}
                    index={idx}
                    onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 7: STUDENT-CENTRIC INITIATIVES */}
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
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Student-Centric Initiatives &amp; Inclusion
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Learner-centric pathways, B.Tech Honours regulations, SEDG equity mechanisms, and faculty vitality
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {nepStudentDocs.map((doc, idx) => (
                  <DocumentRow
                    key={doc.id}
                    doc={doc}
                    index={idx}
                    onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 8: INSTITUTIONAL PLANNING */}
        {/* ============================================================== */}
        {activeTab === "planning" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Institutional Planning &amp; Regulations
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Institutional Development Plan (IDP 2022-2027), thesis guidelines, statutory matrix, and plagiarism code
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {nepPlanningDocs.map((doc, idx) => (
                  <DocumentRow
                    key={doc.id}
                    doc={doc}
                    index={idx}
                    onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 9: NOTICES & DOWNLOADS (27 Documents) */}
        {/* ============================================================== */}
        {activeTab === "notices" && (
          <ScrollReveal>
            <div className="space-y-6">
              {/* Search & Filter Header */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317]">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Notices, Active Learning Tools &amp; Official Downloads
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Complete collection of 27 official guidelines, ABSS resolutions, SIP, LOCF, and pedagogical templates
                    </p>
                  </div>
                </div>

                {/* Filter Controls */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                  {/* Search */}
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search across 27 official documents..."
                      value={noticesSearch}
                      onChange={(e) => setNoticesSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b31317]/20 focus:border-[#b31317]"
                    />
                  </div>

                  {/* Category filter */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                    <Filter className="w-4 h-4 text-slate-400 shrink-0" />
                    <button
                      onClick={() => setNoticesCategory("all")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                        noticesCategory === "all"
                          ? "bg-[#0f2a44] text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      All ({nepNoticesDocs.length})
                    </button>
                    {noticeCategories.slice(1).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setNoticesCategory(cat!)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                          noticesCategory === cat
                            ? "bg-[#0f2a44] text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Documents List */}
              <div className="grid grid-cols-1 gap-3">
                {filteredNotices.length > 0 ? (
                  filteredNotices.map((doc, idx) => (
                    <DocumentRow
                      key={doc.id}
                      doc={doc}
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
        {/* TAB 10: ACCREDITATION READINESS */}
        {/* ============================================================== */}
        {activeTab === "accreditation" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Accreditation Readiness &amp; Quality Audits
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Academic, admin &amp; faculty audit formats, NAAC reports, Student Satisfaction Surveys &amp; AQAR reports
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {nepAccreditationDocs.map((doc, idx) => (
                  <DocumentRow
                    key={doc.id}
                    doc={doc}
                    index={idx}
                    onPreview={(d) => setPreviewPdf({ title: d.title, url: d.url })}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 11: EVENTS & COLLABORATIONS (15 Events) */}
        {/* ============================================================== */}
        {activeTab === "events" && (
          <ScrollReveal>
            <div className="space-y-6">
              {/* Header with Search and Year Filters */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#990000]/10 flex items-center justify-center text-[#990000]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Events, Awareness Rallies &amp; NEP SAARTHI Activities
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Chronological record of 15 institutional programs, wellness sessions, and NITTTR workshops
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search events, topics, or dates..."
                      value={eventSearch}
                      onChange={(e) => setEventSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#990000]/20 focus:border-[#990000]"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500">Academic Year:</span>
                    {eventYears.map((yr) => (
                      <button
                        key={yr}
                        onClick={() => setEventYear(yr)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          eventYear === yr
                            ? "bg-[#990000] text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {yr === "all" ? "All" : yr}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Event Cards Grid */}
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
                          <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-[11px] font-bold">
                            AY {ev.academicYear}
                          </span>
                        </div>
                        <h4 className="font-semibold text-sm sm:text-base text-slate-800 leading-snug line-clamp-3">
                          {ev.title}
                        </h4>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-500 font-medium">Activity #{ev.id}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setPreviewPdf({ title: ev.title, url: ev.url })}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-[#990000] text-slate-700 hover:text-white text-xs font-semibold transition-all"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Preview</span>
                          </button>
                          <a
                            href={ev.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded hover:bg-slate-100 transition-colors"
                            title="Open Official Report PDF"
                          >
                            <PdfIcon className="w-6 h-6" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 bg-white rounded-xl p-12 text-center border border-slate-200">
                    <p className="text-slate-500 font-medium">No events found matching your filter.</p>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 12: GALLERY (10 Local High-Res Images) */}
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
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      NEP Cell Photo Gallery
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Photographic coverage of rallies, poster presentations, IKS discussions, and campus events
                    </p>
                  </div>
                </div>
              </div>

              {/* Responsive Grid - 3 Columns Full Width */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {nepGalleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxImg(img)}
                    className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                  >
                    <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `${BASE}images/nep/nep-hero.jpeg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-slate-900 text-xs font-bold backdrop-blur-sm shadow">
                          <Maximize2 className="w-3.5 h-3.5" /> Click to Enlarge
                        </span>
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#b31317] transition-colors line-clamp-1">
                          {img.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{img.subtitle}</p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                        <span>Photo #{idx + 1}</span>
                        <span className="font-semibold text-[#b31317]">View Photo</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* TAB 13: CONTACT US */}
        {/* ============================================================== */}
        {activeTab === "contact" && (
          <ScrollReveal>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#990000]/10 flex items-center justify-center text-[#990000]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Contact National Education Policy (NEP) Cell
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Reach out to our coordinator, secretariat, or submit institutional inquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid: Contact Info + Inquiry Form */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Contact Info (5 Cols) */}
                <div className="lg:col-span-5 bg-[#990000] text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-[#800000] flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold tracking-wider uppercase mb-4">
                      NEP Cell Secretariat
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">Get in Touch</h3>
                    <p className="text-white/85 text-sm mb-6 leading-relaxed">
                      For curriculum guidelines, ABC credit registration queries, NEP SAARTHI activities, or academic collaborations.
                    </p>

                    <div className="space-y-4 text-white">
                      <div className="flex items-start gap-3.5 bg-white/10 p-4 rounded-xl border border-white/10">
                        <Users className="w-5 h-5 text-[#ffd15c] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-white text-base">Mr. E. Sathiyanarayanan</p>
                          <p className="text-white/80 text-xs">Assistant Professor, Dept. of ECE</p>
                          <p className="text-[#ffd15c] text-xs font-bold mt-1">Coordinator, NEP Cell</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5 bg-white/10 p-4 rounded-xl border border-white/10">
                        <Phone className="w-5 h-5 text-[#ffd15c] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/70 text-xs">Telephone Helpline</p>
                          <a href="tel:+919100973376" className="font-bold text-white text-sm hover:text-[#ffd15c] transition-colors block">
                            +91 9100973376
                          </a>
                          <span className="text-white/80 text-xs">08571-280255 / 280788</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5 bg-white/10 p-4 rounded-xl border border-white/10">
                        <Mail className="w-5 h-5 text-[#ffd15c] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/70 text-xs">Email Address</p>
                          <a href="mailto:nep@mits.ac.in" className="font-bold text-white text-sm hover:text-[#ffd15c] transition-colors break-all">
                            nep@mits.ac.in
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5 bg-white/10 p-4 rounded-xl border border-white/10">
                        <MapPin className="w-5 h-5 text-[#ffd15c] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/70 text-xs">Campus Address</p>
                          <p className="text-white/90 text-xs leading-relaxed">
                            Madanapalle Institute of Technology &amp; Science (Deemed to be University), Post Box No: 14, Kadiri Road, Angallu, Madanapalle-517325, Chittoor Dist, Andhra Pradesh, India.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5 bg-white/10 p-4 rounded-xl border border-white/10">
                        <Clock className="w-5 h-5 text-[#ffd15c] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/70 text-xs">Working Hours</p>
                          <p className="text-white/90 text-xs">Monday – Saturday: 9:00 AM – 5:00 PM</p>
                          <p className="text-white/70 text-xs">Sunday &amp; Public Holidays: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Quick Query Form (7 Cols) */}
                <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                  <h4 className="font-serif text-xl font-bold text-slate-900 mb-2">Send an Inquiry to NEP Cell</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    Fill out the form below and the NEP Cell coordinator will respond promptly.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Thank you! Your inquiry has been submitted to the NEP Cell.");
                    }}
                    className="space-y-4 text-sm"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#990000]/20 focus:border-[#990000]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="you@domain.com"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#990000]/20 focus:border-[#990000]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+91 "
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#990000]/20 focus:border-[#990000]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Query Category</label>
                        <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#990000]/20 focus:border-[#990000]">
                          <option>Academic Bank of Credits (ABC / DigiLocker)</option>
                          <option>Multiple Entry &amp; Exit / FYUP</option>
                          <option>NEP SAARTHI Student Ambassadors</option>
                          <option>Active Pedagogical Techniques</option>
                          <option>Internships &amp; Embedded Degrees</option>
                          <option>General Inquiry / Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Subject *</label>
                      <input
                        type="text"
                        required
                        placeholder="Inquiry Subject"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#990000]/20 focus:border-[#990000]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Message / Inquiry Details *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please write your questions or details here..."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#990000]/20 focus:border-[#990000]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#990000] hover:bg-[#800000] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
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
                <span>Download PDF</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL FOR GALLERY */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center bg-black/60 rounded-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-200 transition-colors shadow-lg z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="mt-3 text-center text-white">
              <h4 className="font-bold text-base sm:text-lg">{lightboxImg.title}</h4>
              {lightboxImg.subtitle && (
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{lightboxImg.subtitle}</p>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

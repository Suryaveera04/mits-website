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
  Plane,
  Award,
  BookOpen,
  Calendar,
  Users,
  Search,
  FileText,
  Compass,
  CheckCircle2,
  Info,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

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

// 4 Carousel Slides for Home Tab
const carouselSlides = [
  {
    src: `${BASE}images/ncc-airwing/banner-ac.jpg`,
    title: "National Cadet Corps (Air Wing)",
    subtitle: "11 (A) Air Squadron (T) NCC, Tirupati • MITS Deemed to be University",
    tag: "Established 2025-26",
  },
  {
    src: `${BASE}images/ncc-airwing/banner-aw-1.jpg`,
    title: "Air Wing Cadets Squad & Flight Training",
    subtitle: "Aviation Fundamentals, Precision Drill, and Military Discipline",
    tag: "Cadet Training",
  },
  {
    src: `${BASE}images/ncc-airwing/banner-aw-2.jpeg`,
    title: "Aeromodelling, Firing & Field Expeditions",
    subtitle: "Hands-on RC Aircraft Assembly, 0.22 Rifle Range Practice & Trekking",
    tag: "Technical Skills",
  },
  {
    src: `${BASE}images/ncc-airwing/banner-aw-3.jpeg`,
    title: "Ceremonial Honors & National Leadership",
    subtitle: "Nurturing Patriotic Youth for National Service & Armed Forces Careers",
    tag: "Leadership",
  },
];

// Tabs Definition (matching NCC Army tab bar layout)
const NCC_AIR_TABS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About NCC" },
  { id: "activities", label: "Activities & Training" },
  { id: "uniform", label: "Uniform & Ranks" },
  { id: "events", label: "Events & Workshops" },
  { id: "downloads", label: "Downloads" },
  { id: "how-to-join", label: "How to Join" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

// Official Events from mits.ac.in/ncc-airwing
const nccAirEvents = [
  {
    id: 1,
    title: "A Visit of the Commanding Officer for NCC Air Wing Cadet Selections was organized by NCC Air Wing, MITS on 21st October 2026.",
    date: "21st October 2026",
    year: "2026-27",
    category: "Cadet Selection",
    pdfUrl: "https://mits.ac.in/assets/pdf/assoc/Visit of the Commanding Officer for NCC Air Wing Cadet Selections.pdf",
  },
  {
    id: 2,
    title: 'Participation in "RC Aircraft Aeromodelling Training and IGC-1 (AIVSC-2026) Selection Activities" at RC Build Fly Club, Chennai from 01st to 03rd August 2026.',
    date: "01st - 03rd August 2026",
    year: "2026-27",
    category: "Aeromodelling & IGC",
    pdfUrl: "https://mits.ac.in/assets/pdf/assoc/RC Aircraft Aeromodelling Training and IGC-1 (AIVSC-2026) Selection Activities.pdf",
  },
  {
    id: 3,
    title: "Participation in CATC-III Camp and NCC Air Wing Activities at SVCE, Tirupathi from 16th to 18th June 2026.",
    date: "16th - 18th June 2026",
    year: "2026-27",
    category: "Camp Training",
    pdfUrl: "https://mits.ac.in/assets/pdf/assoc/7. CATC- III Camp and NCC Air Wing Activities.pdf",
  },
  {
    id: 4,
    title: 'An Awareness Campaign on "World No Tobacco Day" was organized by NCC Air Wing on 31st May 2026.',
    date: "31st May 2026",
    year: "2025-26",
    category: "Social Outreach",
    pdfUrl: "https://mits.ac.in/assets/pdf/assoc/6. World No Tobacco Day Awareness Campaign.pdf",
  },
  {
    id: 5,
    title: "Visit of Commanding Officer, 11(A) Air SQN (T) NCC was organized by NCC Air Wing on 22nd May 2026.",
    date: "22nd May 2026",
    year: "2025-26",
    category: "Unit Inspection",
    pdfUrl: "https://mits.ac.in/assets/pdf/assoc/5. Visit of Commanding Officer, 11(A) Air SQN (T) NCC.pdf",
  },
  {
    id: 6,
    title: "0.22 Rifle-25 Meter Range Firing Practice was organized by NCC Air Wing on 16th March 2026.",
    date: "16th March 2026",
    year: "2025-26",
    category: "Weapon Training",
    pdfUrl: "https://mits.ac.in/assets/pdf/assoc/4. 0.22 Rifle-25 Meter Range Firing Practice.pdf",
  },
  {
    id: 7,
    title: "A Two-Day Aeromodelling Design Workshop was organized by NCC Air Wing on 23rd & 24th February 2026.",
    date: "23rd & 24th February 2026",
    year: "2025-26",
    category: "Aeromodelling Workshop",
    pdfUrl: "https://mits.ac.in/assets/pdf/assoc/3. Two-Day Aeromodelling Design Workshop.pdf",
  },
  {
    id: 8,
    title: "NCC Airwing Trekking Programme for Horsley Hills on 2nd February 2026.",
    date: "2nd February 2026",
    year: "2025-26",
    category: "Adventure Trekking",
    pdfUrl: "https://mits.ac.in/assets/pdf/assoc/2. NCC Airwing _Trekking.pdf",
  },
  {
    id: 9,
    title: "NCC Air Wing Uniform Distribution Programme at MITS on 22nd January 2026.",
    date: "22nd January 2026",
    year: "2025-26",
    category: "Uniform Ceremony",
    pdfUrl: "https://mits.ac.in/assets/pdf/assoc/1. NCC Air Wing Uniform Distribution.pdf",
  },
];

// Official Downloads from mits.ac.in/ncc-airwing
const nccAirDownloads = [
  {
    id: 1,
    title: "NCC OE - 01 - Forms by Cdts - Acceptance of Enrolment",
    code: "OE - 01",
    desc: "Enrolment acceptance declaration form for new inductees.",
    url: "https://mits.ac.in/assets/pdf/assoc/162814116795NCC OE - 01 - Forms by Cdts - Acceptance of Enrolment.pdf",
  },
  {
    id: 2,
    title: "NCC OE - 02 - Forms by Cdts - Medical Certificate",
    code: "OE - 02",
    desc: "Medical fitness certificate verified by registered medical practitioner.",
    url: "https://mits.ac.in/assets/pdf/assoc/162814116813NCC OE - 02 - Forms by Cdts - Medical Certificate.pdf",
  },
  {
    id: 3,
    title: "NCC OE - 03 - Forms by Cdts - Extension of Enrolment",
    code: "OE - 03",
    desc: "Application for extension of cadet tenure into subsequent training year.",
    url: "https://mits.ac.in/assets/pdf/assoc/162814116812NCC OE - 03 - Forms by Cdts - Extension of Enrolment.pdf",
  },
  {
    id: 4,
    title: "NCC OE - 04 - Forms by Cdts - Nomination to CWS",
    code: "OE - 04",
    desc: "Cadet Welfare Society (CWS) nomination and family declaration.",
    url: "https://mits.ac.in/assets/pdf/assoc/162814116813NCC OE - 04 - Forms by Cdts - Nomination to CWS.pdf",
  },
  {
    id: 5,
    title: "Enrolment Form 2024-25",
    code: "REG-24",
    desc: "Annual Senior Division / Wing Cadet Enrolment Application Form.",
    url: "https://mits.ac.in/assets/pdf/assoc/Enrolment form 2024-25.pdf",
  },
  {
    id: 6,
    title: "SD Enrolment Form",
    code: "SD-FORM",
    desc: "Prescribed Senior Division Cadet registration and biographical form.",
    url: "https://mits.ac.in/assets/pdf/assoc/SD Enrolment Form.pdf",
  },
];

// Official Gallery Images (9 downloaded photos)
const galleryImages = [
  {
    src: `${BASE}images/ncc-airwing/gallery-1.jpeg`,
    title: "Aeromodelling Training & Construction",
    subtitle: "Hands-on RC airplane building and technical briefing",
  },
  {
    src: `${BASE}images/ncc-airwing/gallery-2.jpeg`,
    title: "Parade Drills & Fall-in Formations",
    subtitle: "Cadets practicing precision march-past on campus grounds",
  },
  {
    src: `${BASE}images/ncc-airwing/gallery-3.jpeg`,
    title: "Aviation Theory & Meteorology Session",
    subtitle: "Classroom instruction on aerodynamics and flight navigation",
  },
  {
    src: `${BASE}images/ncc-airwing/gallery-4.jpeg`,
    title: "Group Dynamics & Team Leadership",
    subtitle: "Collaborative leadership workshops for air wing cadets",
  },
  {
    src: `${BASE}images/ncc-airwing/gallery-5.jpeg`,
    title: "0.22 Rifle Range Firing Practice",
    subtitle: "Target marksmanship and weapon safety protocols",
  },
  {
    src: `${BASE}images/ncc-airwing/gallery-6.jpeg`,
    title: "Adventure Trekking Expedition",
    subtitle: "Horsley Hills nature trek and endurance expedition",
  },
  {
    src: `${BASE}images/ncc-airwing/gallery-7.jpeg`,
    title: "Commanding Officer Official Visit",
    subtitle: "11(A) Air SQN (T) NCC leadership inspecting unit cadets",
  },
  {
    src: `${BASE}images/ncc-airwing/gallery-8.jpeg`,
    title: "World No Tobacco Day Awareness Rally",
    subtitle: "Public health awareness campaign led by MITS cadets",
  },
  {
    src: `${BASE}images/ncc-airwing/gallery-9.jpeg`,
    title: "Uniform & Kit Distribution Ceremony",
    subtitle: "Official issuance of blues, berets, hackles and accoutrements",
  },
];

export default function NccAirView() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);
  const [eventSearch, setEventSearch] = useState("");
  const [eventYear, setEventYear] = useState("all");
  const [previewPdf, setPreviewPdf] = useState<{ title: string; url: string } | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll Carousel (Pause / Play supported)
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const filteredEvents = nccAirEvents.filter((ev) => {
    const matchesSearch =
      ev.title.toLowerCase().includes(eventSearch.toLowerCase()) ||
      ev.category.toLowerCase().includes(eventSearch.toLowerCase());
    const matchesYear = eventYear === "all" || ev.year === eventYear;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800 flex flex-col font-sans">
      <Header />

      {/* HERO BANNER - Exact match to ncc-army and other cell pages */}
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
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-sm sm:text-sm mb-4 drop-shadow-sm flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-[#ffd15c]" />
            Student Support &amp; Welfare • Armed Services
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            National Cadet Corps (Air Wing) - NCC Unit
          </h1>
          <p className="text-white/90 text-sm sm:text-base font-medium max-w-2xl mx-auto drop-shadow-sm">
            11 (A) Air Squadron (T) NCC, Tirupati • MITS Deemed to be University
          </p>
        </div>

        {/* BOTTOM-LEFT CORNER BREADCRUMB - Exact match to ncc-army */}
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
              National Cadet Corps (Air Wing)
            </li>
          </ol>
        </nav>
      </section>

      {/* ALL TABS NAVIGATION BAR - Sticky underneath hero, matching ncc-army */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-sm">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 no-scrollbar">
            {NCC_AIR_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.scrollTo({ top: 380, behavior: "smooth" });
                }}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
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

      {/* MAIN CONTENT CONTAINER */}
      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1">
        {/* Back Button */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate("/cells")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Cells &amp; Committees</span>
          </button>

          <span className="text-xs text-slate-500 font-medium">
            MITS NCC Unit • 16 Authorized Air Wing Cadets
          </span>
        </div>

        {/* TAB 1: HOME */}
        {activeTab === "home" && (
          <ScrollReveal>
            <div className="space-y-8">
              {/* Full-width Big Hero Carousel */}
              <div className="relative w-full h-[380px] sm:h-[500px] md:h-[600px] lg:h-[640px] rounded-2xl overflow-hidden shadow-2xl bg-black border border-slate-800 group">
                {/* Current Slide Image */}
                <img
                  src={carouselSlides[currentSlide].src}
                  alt={carouselSlides[currentSlide].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out transform scale-100 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `${BASE}images/ncc/banner2024.jpg`;
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                {/* Carousel Caption */}
                <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-10 text-white max-w-3xl">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#990000]/90 text-white text-xs font-bold tracking-wider uppercase mb-2 shadow-md">
                    {carouselSlides[currentSlide].tag}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-white drop-shadow-md leading-tight">
                    {carouselSlides[currentSlide].title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-200 drop-shadow line-clamp-2 sm:line-clamp-none max-w-2xl">
                    {carouselSlides[currentSlide].subtitle}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-[#990000] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 z-20 shadow-lg"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-[#990000] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 z-20 shadow-lg"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Top Controls: Play/Pause Toggle + Lightbox */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-medium backdrop-blur-md border border-white/20 transition shadow"
                    title={isPaused ? "Play auto-scroll" : "Pause auto-scroll"}
                  >
                    {isPaused ? (
                      <>
                        <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                        <span>Play</span>
                      </>
                    ) : (
                      <>
                        <Pause className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span>Pause</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() =>
                      setLightboxImg({
                        src: carouselSlides[currentSlide].src,
                        title: carouselSlides[currentSlide].title,
                      })
                    }
                    className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition shadow"
                    title="View Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Slide Indicators Dots */}
                <div className="absolute bottom-4 right-6 z-20 flex items-center gap-1.5">
                  {carouselSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === idx ? "w-7 bg-amber-400" : "w-2 bg-white/50 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* POST-CAROUSEL CONTENT: Contact details placed strictly after the images */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
                {/* Left & Center: Mission, Brief History & Highlights */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Mission Card */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#990000]" />
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-[#990000] flex items-center justify-center font-bold">
                        <Compass className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0f2a44]">
                        Mission
                      </h3>
                    </div>
                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                      The mission of the NCC Air Wing at MITS is to build character, leadership qualities,
                      and civic responsibility in students. Through structured aviation-oriented training and
                      social service activities, the unit nurtures confident and service-oriented youth.
                    </p>
                  </div>

                  {/* Brief History Card */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#0f2a44]" />
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0f2a44] flex items-center justify-center font-bold">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0f2a44]">
                        Brief History
                      </h3>
                    </div>
                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
                      The NCC Air Wing at MITS began its journey in the academic year <strong>2025 - 2026</strong> with
                      the sanctioning of <strong>16 cadets</strong> by <strong>11 (A) AIR SQN (T) NCC, Tirupati</strong>,
                      marking a significant milestone in the institute's commitment to youth leadership and national service.
                    </p>
                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                      With the introduction of this unit, students gained access to Air Wing flight training,
                      aero-modelling design, firing practice, and national-level NCC opportunities. The NCC Air Wing
                      Cell continues to grow as a platform for discipline, leadership, and patriotic service among the
                      youth of MITS.
                    </p>
                  </div>

                  {/* Key Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#990000]">16</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Sanctioned Cadets</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#0f2a44]">11 (A) SQN</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Air Squadron (T)</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#990000]">VSC / RDC</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">National Camps</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#0f2a44]">2025-26</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Established Year</div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Contact Card */}
                <div className="space-y-6">
                  {/* Official Contact Card with high-contrast text */}
                  <div className="bg-white rounded-2xl shadow-lg border border-slate-200/90 overflow-hidden sticky top-32">
                    {/* Header Bar */}
                    <div className="bg-[#990000] px-6 py-4 flex items-center gap-3">
                      <Phone className="w-5 h-5 !text-white text-white shrink-0" />
                      <h3 className="text-lg font-bold font-serif !text-white text-white tracking-wide">
                        Contact Details
                      </h3>
                    </div>

                    <div className="p-6 space-y-5">
                      <div>
                        <h4 className="text-xl font-bold font-serif text-[#0f2a44]">
                          Dr. Charan Kuchi
                        </h4>
                        <p className="text-sm font-semibold text-[#990000] mt-0.5">
                          Caretaker Officer (CTO)
                        </p>
                        <p className="text-xs text-slate-600">
                          Assistant Professor, Department of Physics
                        </p>
                      </div>

                      <div className="space-y-3 pt-2 text-sm text-slate-700 border-t border-slate-100">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                          <span>
                            Madanapalle Institute of Technology & Science,
                            <br />
                            Deemed to be University,
                            <br />
                            Madanapalle – 517326, Andhra Pradesh
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-[#990000] shrink-0" />
                          <a
                            href="tel:+919705559770"
                            className="text-slate-800 font-medium hover:text-[#990000] transition"
                          >
                            +91 9705559770
                          </a>
                        </div>

                        <div className="flex items-center gap-3">
                          <Mail className="w-4 h-4 text-[#990000] shrink-0" />
                          <a
                            href="mailto:nccairwing@mits.ac.in"
                            className="text-slate-800 font-medium hover:text-[#990000] transition break-all"
                          >
                            nccairwing@mits.ac.in
                          </a>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-2 flex flex-col gap-2">
                        <a
                          href="mailto:nccairwing@mits.ac.in"
                          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#990000] hover:bg-[#800000] text-white text-xs font-semibold shadow transition"
                        >
                          <Mail className="w-4 h-4" /> Email Caretaker Officer
                        </a>
                        <a
                          href="tel:+919705559770"
                          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0f2a44] hover:bg-[#0a1c2e] text-white text-xs font-semibold shadow transition"
                        >
                          <Phone className="w-4 h-4" /> Call: +91 9705559770
                        </a>
                      </div>

                      {/* Squadron Affiliation Note */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
                        <span className="font-semibold text-slate-800 block mb-1">
                          Affiliated Squadron:
                        </span>
                        11 (A) Air Squadron (T) NCC, Tirupati under the Andhra Pradesh & Telangana Directorate.
                      </div>
                    </div>
                  </div>

                  {/* Quick Access Card */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
                    <h4 className="text-sm font-bold text-[#0f2a44] uppercase tracking-wide mb-3 flex items-center gap-2">
                      <Download className="w-4 h-4 text-[#990000]" />
                      Quick Downloads
                    </h4>
                    <ul className="space-y-2 text-xs">
                      <li>
                        <a
                          href="https://mits.ac.in/assets/pdf/assoc/162814116795NCC OE - 01 - Forms by Cdts - Acceptance of Enrolment.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between text-slate-700 hover:text-[#990000] p-2 rounded-lg hover:bg-white transition"
                        >
                          <span>Enrolment Acceptance Form (OE-01)</span>
                          <PdfIcon className="w-4 h-4" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mits.ac.in/assets/pdf/assoc/162814116813NCC OE - 02 - Forms by Cdts - Medical Certificate.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between text-slate-700 hover:text-[#990000] p-2 rounded-lg hover:bg-white transition"
                        >
                          <span>Cadet Medical Certificate (OE-02)</span>
                          <PdfIcon className="w-4 h-4" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mits.ac.in/assets/pdf/assoc/SD Enrolment Form.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between text-slate-700 hover:text-[#990000] p-2 rounded-lg hover:bg-white transition"
                        >
                          <span>Senior Division Application</span>
                          <PdfIcon className="w-4 h-4" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* TAB 2: ABOUT NCC */}
        {activeTab === "about" && (
          <ScrollReveal>
            <div className="space-y-8">
              {/* About NCC Overview */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0f2a44] mb-4">
                  About National Cadet Corps (NCC)
                </h2>
                <div className="prose max-w-none text-slate-700 text-base sm:text-lg leading-relaxed space-y-4">
                  <p>
                    National Cadet Corps is a Tri-Services Organisation comprising the Army, Navy and Air
                    Force, engaged in grooming the youth – <em>'The Leaders of Tomorrow'</em> – into disciplined
                    and patriotic citizens.
                  </p>
                  <p>
                    After independence, the present-day NCC under the Ministry of Defence came into existence
                    on <strong>16 Apr 1948</strong> through the NCC Act XXXI, 1948. NCC was formally inaugurated
                    on <strong>15 Jul 1948</strong>, as soon as the schools and colleges reopened after summer
                    vacation.
                  </p>
                  <p>
                    The Girls Division of the NCC was started in Jul 1949. In 1950, <strong>Air Wing was added on
                    01 Apr</strong> with one Air squadron each at Bombay and Kolkata. The Naval Wing of the NCC
                    was raised in Jul 1952, thus completing the true representation of all services in the
                    Corps. Presently, NCC has approximately <strong>13 Lakhs Cadets</strong> under its fold across
                    India.
                  </p>
                </div>
              </div>

              {/* Motto & Pledge Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Motto */}
                <div className="bg-gradient-to-br from-[#0f2a44] to-[#16385d] text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
                  <div className="text-xs uppercase tracking-wider text-amber-300 font-bold mb-2">
                    Official Motto
                  </div>
                  <h3 className="text-3xl font-serif font-extrabold text-white mb-3">
                    Unity and Discipline
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    "Ekta aur Anushasan" — The solemn commitment that guides every cadet toward selfless
                    devotion to the nation, uncompromising integrity, and collective strength.
                  </p>
                </div>

                {/* Pledge */}
                <div className="bg-gradient-to-br from-[#990000] to-[#b31317] text-white rounded-2xl p-6 sm:p-8 shadow-md">
                  <div className="text-xs uppercase tracking-wider text-amber-300 font-bold mb-2">
                    The Cadet's Pledge
                  </div>
                  <blockquote className="text-xs sm:text-sm font-medium leading-relaxed italic border-l-2 border-white/40 pl-3">
                    "WE THE CADETS OF THE NATIONAL CADET CORPS, DO SOLEMNLY PLEDGE THAT WE SHALL ALWAYS UPHOLD
                    THE UNITY OF INDIA. WE RESOLVE TO BE DISCIPLINED AND RESPONSIBLE CITIZENS OF OUR NATION. WE
                    SHALL UNDERTAKE POSITIVE COMMUNITY SERVICE IN THE SPIRIT OF SELFLESSNESS AND CONCERN FOR OUR
                    FELLOW BEINGS."
                  </blockquote>
                </div>
              </div>

              {/* NCC Flag & Song Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* NCC Flag */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                  <h3 className="text-xl font-bold font-serif text-[#0f2a44] mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#990000]" />
                    The NCC Flag
                  </h3>
                  <div className="rounded-xl overflow-hidden border border-slate-200 mb-4 bg-slate-50 flex items-center justify-center p-4">
                    <img
                      src={`${BASE}images/ncc/ncc-flag.jpg`}
                      alt="NCC Tri-Color Flag"
                      className="max-h-64 object-contain shadow rounded"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://mits.ac.in/assets/images/ncc-flag.jpg";
                      }}
                    />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    The NCC flag contains three colors: <strong>Red</strong> for the Indian Army,{" "}
                    <strong>Deep Blue</strong> for the Indian Navy, and <strong>Light Blue</strong> for the
                    Indian Air Force. The seventeen lotuses around the NCC crest represent the 17 Directorates
                    spread across the nation.
                  </p>
                </div>

                {/* NCC Song */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                  <h3 className="text-xl font-bold font-serif text-[#0f2a44] mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#990000]" />
                    NCC Song: "Hum Sab Bharatiya Hain"
                  </h3>
                  <div className="bg-amber-50/60 border border-amber-200/60 rounded-xl p-5 text-xs sm:text-sm text-slate-800 leading-relaxed font-serif italic space-y-2 max-h-[340px] overflow-y-auto">
                    <p className="font-bold text-[#990000] not-italic">
                      Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain
                    </p>
                    <p>Apni Manzil Ek Hai, Ha Ha Ha Ek Hai, Ho Ho Ho Ek Hai,</p>
                    <p>Hum Sab Bharatiya Hain</p>
                    <p className="pt-1">Kashmir Ki Dharti Rani Hai, Sartaj Himalaya Hai</p>
                    <p>Sadiyon Se Hamne Isko Apne Khoon Se Pala Hai</p>
                    <p>Desh Ki Raksha Ki Khatir Hum Shamshir Utha Lenge</p>
                    <p>Hum Shamshir Utha Lenge</p>
                    <p className="pt-1">Bikhre Bikhre Tare Hain Hum Lekin Jhilmil Ek Hai</p>
                    <p>Ha Ha Ha Ha Ek Hai, Hum Sab Bharatiya Hain</p>
                    <p className="pt-1">Mandir Gurudware Bhi Hain Yahan, Aur Masjid Bhi Hai Yahan</p>
                    <p>Girija Ka Ghadiyal Kahin, Mulla Ki Kahin Hai Azan</p>
                    <p className="pt-1">Ek Hi Apna Ram Hai, Ek Hi Allah-Tala Hai</p>
                    <p>Ek Hi Allah-Tala Hai</p>
                    <p className="pt-1">Rang-Birange Deepak Hain, Lekin Mahfil Ek Hai</p>
                    <p className="font-bold text-[#990000] not-italic">
                      Ha Ha Ha Ek Hai, Ho Ho Ho Ek Hai, Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain !!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* TAB 3: ACTIVITIES & TRAINING */}
        {activeTab === "activities" && (
          <ScrollReveal>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0f2a44] mb-3">
                  Activities & Training Curriculum
                </h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  The NCC Air Wing at MITS conducts a broad range of military, aviation, and
                  personality-development activities under the guidance of trained instructors and the
                  affiliated 11 (A) Air Squadron (T) NCC.
                </p>
              </div>

              {/* 3 Activity Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Regular Activities */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#990000] flex items-center justify-center font-bold mb-4">
                    <Plane className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#0f2a44] mb-3">
                    Regular Activities
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-700 flex-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                      <span>Parade drills (fall-in, fall-out, march-past, commands)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                      <span>Physical training (PT), endurance exercises, and sports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                      <span>Weapon training (0.22 Rifle practice as permitted)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                      <span>Aeromodelling basics and static/flying model demonstrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                      <span>Theory classes on civil aviation, meteorology, and flight principles</span>
                    </li>
                  </ul>
                </div>

                {/* Special Training */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0f2a44] flex items-center justify-center font-bold mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#0f2a44] mb-3">
                    Special Training
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-700 flex-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0f2a44] shrink-0 mt-0.5" />
                      <span>Annual Training Camps (ATC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0f2a44] shrink-0 mt-0.5" />
                      <span>Combined Annual Training Camps (CATC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0f2a44] shrink-0 mt-0.5" />
                      <span>Inter-Group Competitions (IGC) for AIVSC selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0f2a44] shrink-0 mt-0.5" />
                      <span>Social service & outreach (Swachh Bharat, blood drives, rallies)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0f2a44] shrink-0 mt-0.5" />
                      <span>Adventure expeditions: Horsley Hills trekking and cycling</span>
                    </li>
                  </ul>
                </div>

                {/* Highlights */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#0f2a44] mb-3">
                    National Highlights
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-700 flex-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Opportunities for All India Vayu Sainik Camp (AIVSC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Republic Day Camp (RDC) at Rajpath, New Delhi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Exposure to flight simulators and RC aeromodelling competitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Republic Day & Independence Day ceremonial campus parades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Interaction with commissioned Indian Air Force officers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* TAB 4: UNIFORM & RANKS */}
        {activeTab === "uniform" && (
          <ScrollReveal>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0f2a44] mb-3">
                  NCC Air Wing Uniform & Ranks
                </h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  The NCC Air Wing cadets at MITS are provided with a complete uniform and accessories by
                  the institute, ensuring that all students participate with pride, dignity, and military
                  uniformity.
                </p>
              </div>

              {/* Uniform Components & Guidelines */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
                  <h3 className="text-xl font-bold font-serif text-[#0f2a44] border-b border-slate-100 pb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#990000]" />
                    Uniform Components
                  </h3>
                  <ul className="space-y-2.5 text-slate-700 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#990000]" />
                      <span>Blue shirt and trousers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#990000]" />
                      <span>Beret with NCC badge and Hackle</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#990000]" />
                      <span>Belt with brass buckle and Leather belt</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#990000]" />
                      <span>Lanyard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#990000]" />
                      <span>Parade shoes with proper polish</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#990000]" />
                      <span>Standard name plate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#990000]" />
                      <span>Ranks (issued as per promotional examinations)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
                  <h3 className="text-xl font-bold font-serif text-[#0f2a44] border-b border-slate-100 pb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#0f2a44]" />
                    Uniform Guidelines
                  </h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                      <span>Cadets must maintain uniform neatness, crease alignment, and proper fitting.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                      <span>Uniform must be worn during parades, training sessions, camps, and official NCC events.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                      <span>Accessories such as badges, ranks, and lanyards must be worn strictly as per NCC regulations.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Uniform & Ranks Visual Illustrations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Uniform Illustration */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 text-center">
                  <h3 className="text-lg font-bold font-serif text-[#0f2a44] mb-3">
                    Air Wing Uniform Illustration
                  </h3>
                  <div
                    className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-2 cursor-pointer group relative"
                    onClick={() =>
                      setLightboxImg({
                        src: `${BASE}images/ncc-airwing/uniform.png`,
                        title: "Official NCC Air Wing Uniform Specifications",
                      })
                    }
                  >
                    <img
                      src={`${BASE}images/ncc-airwing/uniform.png`}
                      alt="NCC Air Wing Uniform"
                      className="w-full h-80 object-contain mx-auto group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://mits.ac.in/assets/images/Uniform.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition text-white text-xs font-semibold gap-1.5">
                      <Maximize2 className="w-4 h-4" /> Click to enlarge
                    </div>
                  </div>
                </div>

                {/* Ranks Illustration */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 text-center">
                  <h3 className="text-lg font-bold font-serif text-[#0f2a44] mb-3">
                    NCC Cadet Hierarchy & Ranks
                  </h3>
                  <div
                    className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-2 cursor-pointer group relative"
                    onClick={() =>
                      setLightboxImg({
                        src: `${BASE}images/ncc-airwing/ranks.jpg`,
                        title: "NCC Cadets Rank Insignia & Hierarchy",
                      })
                    }
                  >
                    <img
                      src={`${BASE}images/ncc-airwing/ranks.jpg`}
                      alt="NCC Ranks"
                      className="w-full h-80 object-contain mx-auto group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://mits.ac.in/assets/images/Ranks.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition text-white text-xs font-semibold gap-1.5">
                      <Maximize2 className="w-4 h-4" /> Click to enlarge
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* TAB 5: EVENTS */}
        {activeTab === "events" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold font-serif text-[#0f2a44]">
                      NCC Air Wing Events & Workshops
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      Official reports, camp records, firing practices, and aeromodelling training programs
                    </p>
                  </div>

                  {/* Year Badges Filter */}
                  <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start sm:self-center">
                    <button
                      onClick={() => setEventYear("all")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                        eventYear === "all" ? "bg-white text-[#990000] shadow-sm" : "text-slate-600"
                      }`}
                    >
                      All Years ({nccAirEvents.length})
                    </button>
                    <button
                      onClick={() => setEventYear("2026-27")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                        eventYear === "2026-27" ? "bg-white text-[#990000] shadow-sm" : "text-slate-600"
                      }`}
                    >
                      2026-27
                    </button>
                    <button
                      onClick={() => setEventYear("2025-26")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                        eventYear === "2025-26" ? "bg-white text-[#990000] shadow-sm" : "text-slate-600"
                      }`}
                    >
                      2025-26
                    </button>
                  </div>
                </div>

                {/* Search Box */}
                <div className="mt-4 relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={eventSearch}
                    onChange={(e) => setEventSearch(e.target.value)}
                    placeholder="Search events by title, workshop, or camp name..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#990000]/20 focus:border-[#990000]"
                  />
                </div>
              </div>

              {/* Event Clean List Rows (Matching official MITS & IETE layout) */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 divide-y divide-slate-100 overflow-hidden">
                {filteredEvents.length === 0 ? (
                  <div className="p-8 text-center text-slate-500 text-sm">
                    No events found matching your search.
                  </div>
                ) : (
                  filteredEvents.map((ev) => (
                    <div
                      key={ev.id}
                      className="p-4 sm:p-5 hover:bg-slate-50/80 transition flex items-center justify-between gap-4 group"
                    >
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-red-100/70 text-[#990000]">
                            {ev.year}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {ev.category} • {ev.date}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-[#990000] transition leading-snug">
                          {ev.title}
                        </p>
                      </div>

                      {/* PDF Action Link */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => setPreviewPdf({ title: ev.title, url: ev.pdfUrl })}
                          className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#0f2a44] hover:text-[#990000] px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-[#990000]/40 transition"
                        >
                          Preview
                        </button>
                        <a
                          href={ev.pdfUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="Open official PDF document"
                          className="hover:scale-110 transition-transform duration-200 p-1"
                        >
                          <PdfIcon className="w-8 h-8" />
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* TAB 6: DOWNLOADS */}
        {activeTab === "downloads" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
                <h2 className="text-2xl font-bold font-serif text-[#0f2a44]">
                  NCC Air Wing Official Downloads & Enrolment Forms
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Prescribed enrolment templates, medical certificates, and Cadet Welfare Society forms
                </p>
              </div>

              {/* Downloads Clean List Rows */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 divide-y divide-slate-100 overflow-hidden">
                {nccAirDownloads.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 sm:p-5 hover:bg-slate-50 transition flex items-center justify-between gap-4 group"
                  >
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#0f2a44] text-white">
                          {doc.code}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">Official Form</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-[#990000] transition">
                        {doc.title}
                      </h4>
                      <p className="text-xs text-slate-600">{doc.desc}</p>
                    </div>

                    {/* PDF Action Link */}
                    <div className="flex items-center gap-3 shrink-0">
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-[#990000] text-xs font-semibold transition"
                      >
                        <Download className="w-3.5 h-3.5" /> Download
                      </a>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noreferrer"
                        title="Download official PDF document"
                        className="hover:scale-110 transition-transform duration-200"
                      >
                        <PdfIcon className="w-8 h-8" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* TAB 7: HOW TO JOIN */}
        {activeTab === "how-to-join" && (
          <ScrollReveal>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0f2a44] mb-3">
                  How to Join NCC Air Wing at MITS
                </h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  Join the elite ranks of the National Cadet Corps Air Wing and experience flight theory,
                  aeromodelling, leadership, and national service.
                </p>
              </div>

              {/* 3 Steps Process */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. Eligibility Criteria */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#990000] flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#0f2a44]">
                    Eligibility Criteria
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                      <span>Must be a bonafide student of MITS Deemed to be University.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                      <span>Age limit: 16 to 26 years (as per NCC norms).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                      <span>Should possess basic physical fitness and willingness for drills.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                      <span>Good academic standing and disciplined record.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                      <span>Both boys and girls are eligible to apply.</span>
                    </li>
                  </ul>
                </div>

                {/* 2. How to Apply */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0f2a44] flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#0f2a44]">
                    Application Steps
                  </h3>
                  <ol className="space-y-2.5 text-sm text-slate-700 list-decimal list-inside">
                    <li>Download the NCC Air Wing Application Form from Downloads tab.</li>
                    <li>
                      Attach:
                      <ul className="list-disc list-inside pl-4 text-xs text-slate-600 mt-1 space-y-1">
                        <li>Recent passport-size photographs</li>
                        <li>Copy of Student ID & Aadhaar Card</li>
                        <li>Signed Medical fitness certificate (OE-02)</li>
                      </ul>
                    </li>
                    <li>Submit the completed dossier to the NCC Air Wing Office before the deadline.</li>
                    <li>Attend the physical fitness screening and personal interview.</li>
                    <li>Selected candidates will receive official confirmation & uniform issuance.</li>
                  </ol>
                </div>

                {/* 3. Selection Process */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#0f2a44]">
                    Selection Process
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Initial Document Verification & Academic Check</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Basic Physical Fitness Test (Running, Push-ups, Sit-ups)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Short Interview by Officer & Caretaker Officer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Final approval by 11 (A) AIR SQN (T) NCC, Tirupati</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* TAB 8: GALLERY */}
        {activeTab === "gallery" && (
          <ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
                <h2 className="text-2xl font-bold font-serif text-[#0f2a44]">
                  NCC Air Wing Photo Gallery
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Glimpses of cadet flight workshops, parade drills, firing range practice, and trekking expeditions
                </p>
              </div>

              {/* 9 Gallery Images Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxImg(img)}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 group cursor-pointer transition-all duration-300"
                  >
                    <div className="relative h-60 overflow-hidden bg-slate-900">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `${BASE}images/ncc/banner2024.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#990000] rounded">
                          NCC Air Wing #{idx + 1}
                        </span>
                        <h4 className="text-sm font-bold mt-1 line-clamp-1">{img.title}</h4>
                      </div>
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition backdrop-blur-sm">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="p-3.5">
                      <p className="text-xs text-slate-600 line-clamp-2">{img.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* TAB 9: CONTACT */}
        {activeTab === "contact" && (
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden">
                {/* Header Bar */}
                <div className="bg-[#990000] px-6 py-5 flex items-center gap-3">
                  <Phone className="w-6 h-6 !text-white text-white shrink-0" />
                  <h3 className="text-xl font-bold font-serif !text-white text-white">
                    NCC Air Wing Unit Contact
                  </h3>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h4 className="text-2xl font-bold font-serif text-[#0f2a44]">
                      Dr. Charan Kuchi
                    </h4>
                    <p className="text-base font-semibold text-[#990000] mt-1">
                      Caretaker Officer (CTO)
                    </p>
                    <p className="text-sm text-slate-600">
                      Assistant Professor, Department of Physics
                    </p>
                  </div>

                  <div className="space-y-4 pt-2 text-base text-slate-700 border-t border-slate-100">
                    <div className="flex items-start gap-3.5">
                      <MapPin className="w-5 h-5 text-[#990000] shrink-0 mt-1" />
                      <div>
                        <strong>Unit Address:</strong>
                        <p className="text-sm text-slate-600 mt-0.5">
                          NCC Air Wing Cell, MITS Deemed to be University,
                          <br />
                          Post Box No: 17, Kadiri Road, Angallu,
                          <br />
                          Madanapalle – 517326, Chittoor Dist, Andhra Pradesh, India.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <Phone className="w-5 h-5 text-[#990000] shrink-0" />
                      <div>
                        <strong>Phone / Mobile:</strong>
                        <p className="text-sm text-slate-600 mt-0.5">
                          <a
                            href="tel:+919705559770"
                            className="text-[#990000] font-semibold hover:underline"
                          >
                            +91 9705559770
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <Mail className="w-5 h-5 text-[#990000] shrink-0" />
                      <div>
                        <strong>Official Email:</strong>
                        <p className="text-sm text-slate-600 mt-0.5">
                          <a
                            href="mailto:nccairwing@mits.ac.in"
                            className="text-[#990000] font-semibold hover:underline"
                          >
                            nccairwing@mits.ac.in
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
                    <strong className="text-[#0f2a44] block mb-1">
                      Command & Affiliation Hierarchy:
                    </strong>
                    11 (A) Air Squadron (T) NCC, Tirupati • Andhra Pradesh & Telangana Directorate, Ministry of Defence.
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}
      </main>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-[#990000] text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="max-h-[80vh] w-auto mx-auto object-contain"
            />
            <div className="p-4 bg-slate-900 text-white text-center">
              <h4 className="text-base font-bold">{lightboxImg.title}</h4>
            </div>
          </div>
        </div>
      )}

      {/* Embedded PDF Preview Modal */}
      {previewPdf && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewPdf(null)}
        >
          <div
            className="relative w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 bg-[#0f2a44] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PdfIcon className="w-6 h-6" />
                <h3 className="text-sm sm:text-base font-bold line-clamp-1">{previewPdf.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={previewPdf.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded bg-[#990000] text-xs font-semibold text-white flex items-center gap-1 hover:bg-[#800000] transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open Tab
                </a>
                <button
                  onClick={() => setPreviewPdf(null)}
                  className="p-1 rounded-full hover:bg-white/10 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-slate-100">
              <iframe
                src={previewPdf.url}
                className="w-full h-full border-0"
                title={previewPdf.title}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

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
  Flag,
  Music,
  Award,
  BookOpen,
  Calendar,
  Users,
  Search,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { nccResultsData, nccActivitiesData } from "./nccData";

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

// 6 Carousel Slides for the Home Tab
const carouselSlides = [
  {
    src: `${BASE}images/ncc/banner2024.jpg`,
    title: "National Cadet Corps (Army) Unit",
    subtitle: "Madanapalle Institute of Technology & Science • 35 Andhra Battalion",
  },
  {
    src: `${BASE}images/ncc/batch-2020-23.jpg`,
    title: "Passing Out Parade & Ceremonial Honor",
    subtitle: "Excellence in Training, Military Bearing, and Discipline",
  },
  {
    src: `${BASE}images/ncc/batch-2020-2023.jpg`,
    title: "Senior Division Cadets Squad",
    subtitle: "Pride of MITS NCC • Annual Unit Assembling",
  },
  {
    src: `${BASE}images/ncc/banner1.jpg`,
    title: "National Integration & Trekking Camps",
    subtitle: "Darjeeling, Sikkim, and Himalayan Adventure Expeditions",
  },
  {
    src: `${BASE}images/ncc/banner3.jpg`,
    title: "Social Service & Nation-Building Activities",
    subtitle: "Tiranga Rallies, Blood Donation, Disaster Relief & Swachh Bharat Drives",
  },
  {
    src: `${BASE}images/ncc/ncc-group.jpg`,
    title: "Rank Promotions & Honor Felicitations",
    subtitle: "Nurturing Character, Leadership, and Selfless Service",
  },
];

// Tabs Definition (All 14 Tabs from official page)
const NCC_TABS = [
  { id: "home", label: "Home" },
  { id: "history", label: "NCC History" },
  { id: "song", label: "NCC Song" },
  { id: "flag", label: "NCC Flag" },
  { id: "camps", label: "NCC Camps" },
  { id: "ranks", label: "NCC Ranks" },
  { id: "certification", label: "Certification Programme" },
  { id: "results", label: "NCC Result Analysis" },
  { id: "cadets-2021-22", label: "Selected NCC Cadets 2021-22" },
  { id: "cadets-2022-23", label: "Selected NCC Cadets 2022-23" },
  { id: "cadets-2023-24", label: "Selected NCC Cadets 2023-24" },
  { id: "cadets-2024-25", label: "Selected NCC Cadets 2024-25" },
  { id: "cadets-2025-26", label: "Selected NCC Cadets 2025-26" },
  { id: "contact", label: "Contact" },
];

// PDF Cadets Documents Mapping
const cadetPdfs: Record<string, { year: string; url: string }> = {
  "cadets-2021-22": {
    year: "2021-22",
    url: "https://mits.ac.in/pdf/cell/NCC-2021-2022.pdf",
  },
  "cadets-2022-23": {
    year: "2022-23",
    url: "https://mits.ac.in/assets/pdf/NCC 2022-23 LIST OF CADETS.pdf",
  },
  "cadets-2023-24": {
    year: "2023-24",
    url: "https://mits.ac.in/assets/pdf/NCC 2023-24 LIST OF CADETS.pdf",
  },
  "cadets-2024-25": {
    year: "2024-25",
    url: "https://mits.ac.in/assets/pdf/naac/MITS NCC ENROLLMENT LIST - 2024.pdf",
  },
  "cadets-2025-26": {
    year: "2025-26",
    url: "https://mits.ac.in/assets/pdf/naac/Selected NCC Cadets 2025-26.pdf",
  },
};

// Camps Data
const nccCamps = [
  { name: "Leadership Camp", desc: "Develops commanding capabilities, tactical thinking, and interpersonal skills." },
  { name: "Vayu Sainik Camp", desc: "Specialized aviation training, aeromodelling, and flight simulations." },
  { name: "Nau Sainik Camp", desc: "Naval orientation, seamanship, boat pulling, and naval communications." },
  { name: "Rock Climbing Camp", desc: "High-altitude climbing techniques, endurance building, and mountaineering." },
  { name: "Trekking Camp", desc: "Cross-terrain expeditions in Darjeeling, Sikkim, and Western Ghats." },
  { name: "National Integration Camp (NIC)", desc: "Uniting cadets across all Indian states and Union Territories." },
  { name: "Thal Sainik Camp (TSC)", desc: "Premier Army Wing competition in shooting, obstacle courses, and map reading." },
  { name: "Army Attachment Camp (AAC)", desc: "Live exposure with regular Indian Army infantry regiments." },
  { name: "Airforce Attachment Camp (AAC)", desc: "Immersive training at Indian Air Force bases." },
  { name: "Republic Day Camp (RDC)", desc: "Prestigious annual parade at Kartavya Path, New Delhi representing AP & Telangana." },
  { name: "Annual Training Camp (ATC)", desc: "Mandatory foundational drill, weapon training, and field craft." },
];

export default function NccArmyView() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("home");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
      }, 4000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  // Filter activities
  const filteredActivities = nccActivitiesData.filter((act) =>
    act.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800">
      <Header />

      {/* HERO BANNER - Matching other cell pages */}
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
            National Cadet Corps (Army) - NCC Unit
          </h1>
          <p className="text-white/90 text-sm sm:text-base font-medium max-w-2xl mx-auto drop-shadow-sm">
            35 Andhra Battalion, Chittoor • Tirupati Group Headquarters (Estd. 2016)
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
              National Cadet Corps (Army)
            </li>
          </ol>
        </nav>
      </section>

      {/* ALL 14 TABS NAVIGATION BAR */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-sm">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 no-scrollbar">
            {NCC_TABS.map((tab) => (
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
      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
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
            MITS NCC Unit • 108 Authorized Army Cadets
          </span>
        </div>

        {/* FULL PAGE WIDTH BIG HERO CAROUSEL FOR HOME TAB */}
        {activeTab === "home" && (
          <ScrollReveal>
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl mb-10 group w-full">
              {/* Carousel Slides - Large full-page height */}
              <div className="relative h-[360px] sm:h-[500px] md:h-[620px] w-full overflow-hidden">
                {carouselSlides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 right-20 text-white">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#ffd15c] bg-black/40 backdrop-blur-sm px-3 py-1 rounded inline-block mb-2">
                        Slide {idx + 1} of {carouselSlides.length}
                      </span>
                      <h3 className="font-display text-xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-md">
                        {slide.title}
                      </h3>
                      <p className="text-xs sm:text-base text-white/90 mt-1 max-w-2xl line-clamp-2 drop-shadow-sm">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Controls: Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/45 hover:bg-black/80 text-white backdrop-blur-sm transition-all group-hover:scale-105 shadow-md"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/45 hover:bg-black/80 text-white backdrop-blur-sm transition-all group-hover:scale-105 shadow-md"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Top Right: Pause/Play Button & Full Image Preview */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/55 hover:bg-black/85 text-white text-xs font-semibold backdrop-blur-sm transition-all border border-white/20 shadow-md"
                  title={isPlaying ? "Pause auto-scroll" : "Resume auto-scroll"}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#ffd15c]" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Play</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setPreviewImage(carouselSlides[currentSlide].src)}
                  className="p-2 rounded-full bg-black/55 hover:bg-black/85 text-white text-xs backdrop-blur-sm transition-all border border-white/20 shadow-md"
                  title="View full image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 right-8 z-20 flex items-center gap-2">
                {carouselSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === currentSlide ? "w-8 bg-[#ffd15c]" : "w-2.5 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* 2-COLUMN BALANCED WIDE GRID - PLACED AFTER THE FULL WIDTH IMAGES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* PRIMARY CONTENT AREA (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* ============================================================== */}
            {/* TAB 1: HOME */}
            {/* ============================================================== */}
            {activeTab === "home" && (
              <ScrollReveal>
                <div className="space-y-8">
                  {/* ABOUT NCC AT MITS */}
                  <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 md:p-8">
                    <h2 className="text-2xl font-bold font-display text-[#0f2a44] mb-4">
                      About NCC AT MITS
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-justify text-sm sm:text-base">
                      National Cadet Corps Unit of MITS started in 2016. It has presently a strength of 108 - Cadets (Army), it is attached to 35 - Andhra Battalion, Chittoor, under Tirupati Head Quarters. NCC unit of MITS is certainly a leading cell that fosters the overall development of each of its cadet in every field like sports, academics, cultural activities or adventurous activities. NCC has made an ineradicable mark in its entire program. The humble growth of NCC in MITS from just a cell that lacked shine to a group that brought glory to the institution.
                    </p>

                    {/* AIM */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <h3 className="text-xl font-bold font-display text-[#0f2a44] mb-3">
                        AIM
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-justify text-sm sm:text-base mb-4">
                        The ‘Aims’ of the NCC laid out in 1988 have stood the test of time and continue to meet the requirements expected of it in the current socio–economic scenario of the country. The NCC aims at developing character, comradeship, discipline, a secular outlook, the spirit of adventure and ideals of selfless service amongst young citizens. Further, it aims at creating a pool of organized, trained and motivated youth with leadership qualities in all walks of life, who will serve the Nation regardless of which career they choose. Needless to say, the NCC also provides an environment conducive to motivating young Indians to join the armed forces.
                      </p>
                      <p className="text-slate-700 font-semibold text-sm mb-3">
                        The aims of NCC as approved by MOD in Mar 2001 are as under:-
                      </p>
                      <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0 mt-2" />
                          <span>To develop character, comradeship, discipline, leadership, secular outlook, spirit of adventure, sportsmanship and ideals of selfless service among the youth of the country.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0 mt-2" />
                          <span>To create a human resource of organized, trained and motivated youth, to provide leadership in all walks of life and be always available for the service of the nation.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0 mt-2" />
                          <span>To provide a suitable environment to motivate the youth to take up a career in the Armed Forces.</span>
                        </li>
                      </ul>
                    </div>

                    {/* ACTIVITIES ORGANIZED (ALL 144) */}
                    <div className="mt-10 pt-8 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold font-display text-[#0f2a44]">
                            Activities Organized
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {nccActivitiesData.length} camps, parades, treks, rallies &amp; special training events
                          </p>
                        </div>

                        {/* Search Input */}
                        <div className="relative sm:w-72">
                          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search activities or camps..."
                            className="w-full pl-9 pr-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#b31317]"
                          />
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200 bg-white shadow-sm max-h-[600px] overflow-y-auto">
                        {filteredActivities.length === 0 ? (
                          <div className="p-6 text-center text-xs text-slate-500">
                            No activities match &ldquo;{searchQuery}&rdquo;.
                          </div>
                        ) : (
                          filteredActivities.map((act, idx) => (
                            <a
                              key={idx}
                              href={act.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3.5 sm:px-5 hover:bg-slate-50 transition-colors group"
                            >
                              <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-[#b31317] transition-colors leading-relaxed pr-4">
                                {act.title}
                              </span>
                              <PdfIcon className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-105 transition-transform shrink-0" />
                            </a>
                          ))
                        )}
                      </div>
                    </div>
                  </section>
                </div>
              </ScrollReveal>
            )}

            {/* ============================================================== */}
            {/* TAB 2: NCC HISTORY */}
            {/* ============================================================== */}
            {activeTab === "history" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-bold font-display text-[#0f2a44] mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-[#b31317]" />
                    NCC History
                  </h2>
                  <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-justify space-y-4 text-sm sm:text-base">
                    <p>
                      The genesis of the NCC can be traced back to the First World War when the Britishers created the University Corps as the second line of defense and to have a large pool of trained youth available for employment into the Armed Forces.
                    </p>
                    <p>
                      The Naval Wing of the NCC was raised in Jul 1952, thus completing the true representation of all services in the Corps. Presently, NCC has approximately 13 Lakhs Cadets under its fold across all states and union territories.
                    </p>
                  </div>
                </section>
              </ScrollReveal>
            )}

            {/* ============================================================== */}
            {/* TAB 3: NCC SONG */}
            {/* ============================================================== */}
            {activeTab === "song" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600">
                      <Music className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-display text-[#0f2a44]">
                        NCC Official Song
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500">
                        &ldquo;Hum Sab Bharatiya Hain&rdquo; — Anthem of Unity and Patriotism
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#fcfcf9] border border-amber-200/70 rounded-xl p-6 md:p-8 text-center">
                    <p className="font-display font-bold text-lg md:text-xl text-[#0f2a44] leading-relaxed mb-6">
                      Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain<br />
                      Apni Manzil Ek Hai, Ha Ha Ha Ek Hai, Ho Ho Ho Ek Hai,<br />
                      Hum Sab Bharatiya Hain
                    </p>
                    <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                      <p>
                        Kashmir Ki Dharti Rani Hai, Sartaj Himalaya Hai<br />
                        Sadiyon Se Hamne Isko Apne Khoon Se Pala Hai<br />
                        Desh Ki Raksha Ki Khatir Hum Shamshir Utha Lenge<br />
                        Hum Shamshir Utha Lenge
                      </p>
                      <p>
                        Bikhre Bikhre Tare Hain Hum Lekin Jhilmil Ek Hai<br />
                        Ha Ha Ha Ha Ek Hai, Hum Sab Bharatiya Hain
                      </p>
                      <p>
                        Mandir Gurudware Bhi Hain Yahan, Aur Masjid Bhi Hai Yahan<br />
                        Girija Ka Ghadiyal Kahin, Mulla Ki Kahin Hai Azan<br />
                        Ek Hi Apna Ram Hai, Ek Hi Allah-Tala Hai<br />
                        Ek Hi Allah-Tala Hai
                      </p>
                      <p className="font-semibold text-[#0f2a44] pt-2">
                        Rang–Birange Deepak Hain, Lekin Mahfil Ek Hai<br />
                        Ha Ha Ha Ek Hai, Ho Ho Ho Ek Hai<br />
                        Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain !!
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollReveal>
            )}

            {/* ============================================================== */}
            {/* TAB 4: NCC FLAG */}
            {/* ============================================================== */}
            {activeTab === "flag" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-bold font-display text-[#0f2a44] mb-6 flex items-center gap-2">
                    <Flag className="w-6 h-6 text-[#b31317]" />
                    NCC Flag
                  </h2>

                  <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                    <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-slate-50 p-4 flex items-center justify-center">
                      <img
                        src={`${BASE}images/ncc/ncc-flag.jpg`}
                        alt="NCC Flag"
                        className="max-h-[300px] w-auto object-contain"
                      />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                      <p>
                        NCC Flag Contains NCC Crest in gold in the middle, with the letters &ldquo;NCC&rdquo; encircled by a wreath of seventeen lotuses with a background in Red, Blue and Light blue.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-red-600 shrink-0" />
                          <span><strong>Red:</strong> Depicts the Army</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-blue-900 shrink-0" />
                          <span><strong>Deep Blue:</strong> Depicts the Navy</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-sky-400 shrink-0" />
                          <span><strong>Light Blue:</strong> Depicts the Air Force</span>
                        </li>
                      </ul>
                      <p>
                        The seventeen lotuses represent the 17 State Directorates. &ldquo;Unity of Discipline&rdquo; (Ekta aur Anushasan) is written at the bottom of the NCC Flag.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollReveal>
            )}

            {/* ============================================================== */}
            {/* TAB 5: NCC CAMPS */}
            {/* ============================================================== */}
            {activeTab === "camps" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-bold font-display text-[#0f2a44] mb-2">
                    Centrally Organized Camps
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    Official camp classifications for National Cadet Corps Senior Division / Senior Wing
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {nccCamps.map((camp, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-gray-200/80 hover:border-[#b31317] hover:shadow-sm transition-all bg-[#fafaf9]"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="w-6 h-6 rounded-full bg-[#0f2a44] text-white flex items-center justify-center text-xs font-bold shrink-0">
                            {idx + 1}
                          </span>
                          <h4 className="font-bold text-sm text-[#0f2a44]">
                            {camp.name}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                          {camp.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            )}

            {/* ============================================================== */}
            {/* TAB 6: NCC RANKS */}
            {/* ============================================================== */}
            {activeTab === "ranks" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <div>
                      <h2 className="text-2xl font-bold font-display text-[#0f2a44]">
                        NCC Ranks Structure
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Senior Division Cadets rank hierarchy and shoulder badges
                      </p>
                    </div>

                    <button
                      onClick={() => setPreviewImage(`${BASE}images/ncc/ncc-ranks.jpg`)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#b31317] hover:text-white text-xs font-semibold transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Enlarge Diagram</span>
                    </button>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-slate-50 p-4 flex items-center justify-center">
                    <img
                      src={`${BASE}images/ncc/ncc-ranks.jpg`}
                      alt="NCC Ranks Hierarchy"
                      className="max-h-[500px] w-auto object-contain cursor-pointer"
                      onClick={() => setPreviewImage(`${BASE}images/ncc/ncc-ranks.jpg`)}
                    />
                  </div>
                </section>
              </ScrollReveal>
            )}

            {/* ============================================================== */}
            {/* TAB 7: CERTIFICATION PROGRAMME */}
            {/* ============================================================== */}
            {activeTab === "certification" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 md:p-8 space-y-6">
                  <h2 className="text-2xl font-bold font-display text-[#0f2a44] flex items-center gap-2">
                    <Award className="w-6 h-6 text-[#b31317]" />
                    Certification Programme
                  </h2>

                  <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                    <div>
                      <h3 className="font-bold text-[#0f2a44] text-base mb-1">General</h3>
                      <p>
                        The eligibility conditions and the general procedure for the conduct of the Certificate Examination for Cadets of Senior and Junior Division/Wings NCC (All wings) have been issued by this HQ from time to time. The aim of this Directive is to consolidate all such instructions and revise these, where necessary.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <h3 className="font-bold text-[#0f2a44] text-base mb-2">Type of Examination</h3>
                      <div className="border border-gray-200 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                          <thead className="bg-[#0f2a44] text-white">
                            <tr>
                              <th className="py-2.5 px-4 text-left">Type of Certificate</th>
                              <th className="py-2.5 px-4 text-left">NCC Unit Division</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            <tr>
                              <td className="py-2.5 px-4 font-semibold text-[#b31317]">Certificate &lsquo;A&rsquo;</td>
                              <td className="py-2.5 px-4">Junior Division / Wing NCC</td>
                            </tr>
                            <tr>
                              <td className="py-2.5 px-4 font-semibold text-[#b31317]">Certificate &lsquo;B&rsquo; &amp; &lsquo;C&rsquo;</td>
                              <td className="py-2.5 px-4">Senior Division / Wing NCC (Offered at MITS)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <h3 className="font-bold text-[#0f2a44] text-base mb-2">
                        Eligibilities for &lsquo;B&rsquo; &amp; &lsquo;C&rsquo; Certificate Examinations
                      </h3>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>Cadet must have attended a minimum of 75% of total training parades held during each training year.</li>
                        <li>Cadet must have attended at least one Annual Training Camp (ATC) / specialized camp for &lsquo;B&rsquo; Certificate.</li>
                        <li>Cadet must have passed Certificate &lsquo;B&rsquo; examination prior to appearing for Certificate &lsquo;C&rsquo;.</li>
                        <li>For Certificate &lsquo;C&rsquo;, cadet must have attended a minimum of two camps including one Centrally Organized Camp (NIC/TSC/RDC/AAC).</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </ScrollReveal>
            )}

            {/* ============================================================== */}
            {/* TAB 8: NCC RESULT ANALYSIS */}
            {/* ============================================================== */}
            {activeTab === "results" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-bold font-display text-[#0f2a44] mb-2">
                    National Cadet Corps – &lsquo;B &amp; C&rsquo; Certificate Result Analysis
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    Official examination pass rates, grading distribution, and academic performance (2017 to 2026)
                  </p>

                  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#0f2a44] text-white text-center">
                          <th className="py-3 px-3">S.No</th>
                          <th className="py-3 px-3 text-left">Academic Year</th>
                          <th className="py-3 px-3 text-left">Examination</th>
                          <th className="py-3 px-3">Appeared</th>
                          <th className="py-3 px-3">Passed</th>
                          <th className="py-3 px-3">Grade A</th>
                          <th className="py-3 px-3">Grade B</th>
                          <th className="py-3 px-3">Grade C</th>
                          <th className="py-3 px-3">Pass %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-center">
                        {nccResultsData.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="py-2.5 px-3 text-slate-500 font-medium">{row.sno}</td>
                            <td className="py-2.5 px-3 text-left font-semibold text-[#0f2a44]">{row.year}</td>
                            <td className="py-2.5 px-3 text-left">
                              <span className="px-2 py-0.5 rounded bg-red-50 text-[#b31317] font-semibold text-xs border border-red-200/50">
                                {row.exam}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 font-medium">{row.appeared}</td>
                            <td className="py-2.5 px-3 font-medium text-emerald-700">{row.passed}</td>
                            <td className="py-2.5 px-3">{row.gradeA}</td>
                            <td className="py-2.5 px-3">{row.gradeB}</td>
                            <td className="py-2.5 px-3">{row.gradeC}</td>
                            <td className="py-2.5 px-3 font-bold text-[#0f2a44]">{row.passPercent}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </ScrollReveal>
            )}

            {/* ============================================================== */}
            {/* TABS 9-13: SELECTED CADETS PDF VIEWERS */}
            {/* ============================================================== */}
            {cadetPdfs[activeTab] && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
                    <div>
                      <h2 className="text-2xl font-bold font-display text-[#0f2a44]">
                        Selected NCC Cadets {cadetPdfs[activeTab].year}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Official enrolled cadets roster issued by 35 Andhra Battalion
                      </p>
                    </div>

                    <a
                      href={cadetPdfs[activeTab].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#b31317] hover:bg-[#8b0000] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm self-start sm:self-center"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download / Open PDF</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>

                  {/* Embedded PDF iframe */}
                  <div className="w-full h-[700px] rounded-xl overflow-hidden border border-gray-300 shadow-inner bg-slate-100">
                    <iframe
                      src={cadetPdfs[activeTab].url}
                      title={`Selected NCC Cadets ${cadetPdfs[activeTab].year}`}
                      width="100%"
                      height="100%"
                      className="w-full h-full border-0"
                    />
                  </div>
                </section>
              </ScrollReveal>
            )}

            {/* ============================================================== */}
            {/* TAB 14: CONTACT */}
            {/* ============================================================== */}
            {activeTab === "contact" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-bold font-display text-[#0f2a44] mb-6">
                    NCC Officer Contact
                  </h2>

                  <div className="border border-gray-200 rounded-xl p-6 bg-[#fafaf9] max-w-lg space-y-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#990000]">
                        Capt. Dr. N. Naveen Kumar
                      </h3>
                      <p className="text-sm font-semibold text-[#0f2a44] mt-0.5">
                        Associate NCC Officer (ANO)
                      </p>
                      <p className="text-xs text-slate-500">
                        35 Andhra Battalion, Chittoor • Tirupati HQ
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-200 space-y-2 text-sm text-slate-700">
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#b31317]" />
                        <span>Email: <a href="mailto:ncc@mits.ac.in" className="text-[#990000] font-semibold hover:underline">ncc@mits.ac.in</a></span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#b31317]" />
                        <span>Phone: +91-8571-280255, 280706</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5" />
                        <span>Madanapalle Institute of Technology &amp; Science, Madanapalle-517325</span>
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollReveal>
            )}
          </div>

          {/* SIDEBAR AREA (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
                <div className="bg-[#990000] px-6 py-4 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-white !text-white" />
                  <h3 className="font-display text-lg font-bold text-white !text-white">
                    Contact Information
                  </h3>
                </div>

                <div className="p-6 space-y-6">
                  {/* Officer Details */}
                  <div className="border-b border-gray-100 pb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#990000] bg-red-50 px-2.5 py-1 rounded-full inline-block mb-2">
                      Associate NCC Officer
                    </span>
                    <h4 className="font-display text-xl font-bold text-[#990000]">
                      Capt. Dr. N. Naveen Kumar
                    </h4>
                    <p className="text-sm font-semibold text-[#0f2a44] mt-1">
                      ANO — Senior Division (Army Wing)
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      35 Andhra Battalion, Chittoor
                    </p>
                  </div>

                  {/* Address */}
                  <div className="space-y-4 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 text-[#0f2a44] shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0f2a44] block text-xs uppercase tracking-wide mb-1">
                          Address :
                        </span>
                        <p className="leading-snug text-slate-600">
                          Madanapalle Institute of Technology &amp; Science<br />
                          Deemed to be University<br />
                          Madanapalle-Kadiri Road<br />
                          Kurabalakota Mandal, Madanapalle-517325<br />
                          Andhra Pradesh, India
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3 border-t border-gray-100 pt-4">
                      <div className="p-2 rounded-lg bg-slate-100 text-[#0f2a44] shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0f2a44] block text-xs uppercase tracking-wide mb-1">
                          Phone :
                        </span>
                        <a
                          href="tel:+918571280255"
                          className="text-slate-700 hover:text-[#990000] transition-colors block"
                        >
                          +91-8571-280255
                        </a>
                        <a
                          href="tel:+918571280706"
                          className="text-slate-700 hover:text-[#990000] transition-colors block"
                        >
                          +91-8571-280706
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3 border-t border-gray-100 pt-4">
                      <div className="p-2 rounded-lg bg-slate-100 text-[#0f2a44] shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0f2a44] block text-xs uppercase tracking-wide mb-1">
                          E Mail :
                        </span>
                        <a
                          href="mailto:ncc@mits.ac.in"
                          className="text-[#990000] hover:underline font-semibold block"
                        >
                          ncc@mits.ac.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* QUICK STATS CARD */}
            <ScrollReveal>
              <div className="bg-[#0f2a44] text-white p-6 rounded-2xl shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-[#ffd15c]">
                  <Award className="w-5 h-5" />
                  <h4 className="font-display font-bold text-base">NCC Quick Facts</h4>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <span className="font-display text-2xl font-bold text-[#ffd15c]">108</span>
                    <span className="block text-[11px] text-white/80 mt-0.5">Army Cadets</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <span className="font-display text-2xl font-bold text-[#ffd15c]">100%</span>
                    <span className="block text-[11px] text-white/80 mt-0.5">Cert-B Pass Rate</span>
                  </div>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Attached to 35 Andhra Battalion, Chittoor. Regular participants in RDC, TSC, and National Adventure Treks.
                </p>
              </div>
            </ScrollReveal>

            {/* WORKING RELATED CHAPTERS & PORTALS LINKS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 space-y-4">
                <h4 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider">
                  Related Chapters &amp; Portals
                </h4>
                <div className="divide-y divide-gray-100 text-sm">
                  {[
                    { label: "Student Activity Center (SAC)", to: "/cells/sac" },
                    { label: "The Institution of Engineers (India) [IEI]", to: "/cells/iei" },
                    { label: "Institution of Electronics & Telecommunication Engineers (IETE)", to: "/cells/iete" },
                    { label: "Computer Society of India (CSI)", to: "/cells/csi" },
                    { label: "Internal Quality Assurance Cell (IQAC)", to: "/iqac" },
                    { label: "Entrepreneurship Development Cell (EDC)", to: "/cells/edc" },
                  ].map((p, idx) => (
                    <Link
                      key={idx}
                      to={p.to}
                      className="flex items-center justify-between py-3 text-slate-700 hover:text-[#b31317] transition-all group"
                    >
                      <span className="font-medium group-hover:translate-x-0.5 transition-transform">
                        {p.label}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#b31317] group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </main>

      {/* IMAGE PREVIEW LIGHTBOX MODAL */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

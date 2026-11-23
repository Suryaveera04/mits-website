import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { FileDown, Search, Calendar } from "lucide-react";

const BASE = "https://mits.edu/";

interface CalendarItem {
  sno: number;
  title: string;
  pdfUrl: string;
}

// UG Academic Calendars - Exact order and S.No matching official mits.ac.in list
const ugCalendars: CalendarItem[] = [
  {
    sno: 5,
    title: "Academic Calendar 2026-27 For B.Tech I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B. Tech-1st Year 2026-27.pdf",
  },
  {
    sno: 4,
    title: "Academic Calendar 2026-27 For BBA I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/BBA-1ST Year 2026-27.pdf",
  },
  {
    sno: 3,
    title: "Academic Calendar 2026-27 For BCA I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/BCA-1ST Year 2026-27.pdf",
  },
  {
    sno: 2,
    title: "Academic Calendar 2026-27 For B.Tech II Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/Academic Calendar 2026-27 For B.Tech II Year I & II Semesters.pdf",
  },
  {
    sno: 1,
    title: "Academic Calendar 2025-26 For B.Tech I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MITS DTBU - 2025-26- BTech Academic Calender.pdf",
  },
];

// PG Academic Calendars - Exact order and S.No matching official mits.ac.in list
const pgCalendars: CalendarItem[] = [
  {
    sno: 9,
    title: "Academic Calendar 2026-27 For M.Tech. I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/Academic%20Calendar%202026-27%20M.%20Tech%20I%20Year%20I%20&%20II%20Semesters.pdf",
  },
  {
    sno: 8,
    title: "Academic Calendar 2026-27 For M.B.A. I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MITS%20DTBU_I%20Year%20I%20&%20II%20Semester_M.B.A_Academic%20Calendar_2026-27.pdf",
  },
  {
    sno: 7,
    title: "Academic Calendar 2026-27 For M.C.A. I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MITS%20DTBU_I%20Year%20I%20&%20II%20Semester_M.C.A_Academic%20Calendar_2026-27.pdf",
  },
  {
    sno: 6,
    title: "Academic Calendar 2026-27 For M.B.A. II Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MBA-2nd%20Year%202026-27.pdf",
  },
  {
    sno: 5,
    title: "Academic Calendar 2026-27 For M.C.A. II Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MCA-2nd%20Year%202026-27.pdf",
  },
  {
    sno: 4,
    title: "Academic Calendar 2026-27 For M.Tech. II Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/M.%20Tech-2nd%20Year%202026-27.pdf",
  },
  {
    sno: 3,
    title: "Academic Calendar 2025-26 For M.B.A. I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MITS%20DTBU%20-%202025-26-%20MBA%20Academic%20Calender.pdf",
  },
  {
    sno: 2,
    title: "Academic Calendar 2025-26 For M.C.A. I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MITS%20DTBU%20-%202025-26-%20MCA%20Academic%20Calender.pdf",
  },
  {
    sno: 1,
    title: "Academic Calendar 2025-26 For M.Tech I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MITS%20DTBU%20-%202025-26-%20MTech%20Academic%20Calender.pdf",
  },
];

// Ph.D. Academic Calendars - Exact data matching official mits.ac.in/academic-calenders list
const phdCalendars: CalendarItem[] = [
  {
    sno: 1,
    title: "Ph.D Academic Calendar July Session - 2026-27",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/MITS%20DTBU_Ph.D_July%202026%20Session_I%20&%20II%20Semester_Academic%20Calender.pdf",
  },
];

const AcademicCalendar = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const getInitialTab = (): "UG" | "PG" | "PHD" => {
    const tabParam = (searchParams.get("tab") || "").toUpperCase();
    if (tabParam === "PHD" || tabParam === "DOCTORAL" || tabParam === "ATTEMPT") return "PHD";
    if (tabParam === "PG" || tabParam === "GUIDELINES") return "PG";
    const hash = location.hash.replace("#", "").toLowerCase();
    if (hash === "phd" || hash === "doctoral" || hash === "attempt") return "PHD";
    if (hash === "pg" || hash === "guidelines") return "PG";
    return "UG";
  };

  const [activeTab, setActiveTab] = useState<"UG" | "PG" | "PHD">(getInitialTab);
  const [searchTerm, setSearchTerm] = useState("");

  const currentList =
    activeTab === "UG" ? ugCalendars : activeTab === "PG" ? pgCalendars : phdCalendars;
  const filteredList = currentList.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fcfbf9] via-white to-gray-50 text-slate-800">
      <Header />
      <SEO
        title="Academic Calendars – MITS Madanapalle"
        description="Official UG, PG & Ph.D. Academic Calendars for B.Tech, M.Tech, MCA, MBA, BCA, BBA, and Doctoral programs at Madanapalle Institute of Technology & Science."
        canonical="/university/academic-calendar"
      />

      <main className="pt-0">
        {/* HERO SECTION - Exact match to Library page layout and typography */}
        <section
          className="relative pt-32 md:pt-44 pb-24 overflow-hidden"
          style={{
            backgroundImage: `url("${BASE}Hero-Section/image-2.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p className="text-[#ffb300] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
              ACADEMIC SCHEDULE
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Academic <span className="text-[#ffd15c]">Calendars</span>
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
              Semester schedules, examination dates, instruction periods, and academic timelines for UG, PG, &amp; Ph.D. programs.
            </p>
          </div>

          {/* Bottom Left Breadcrumb Navigation */}
          <div className="absolute bottom-4 left-6 sm:left-8 z-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-white/50">›</li>
                <li>
                  <Link to="/academics" className="hover:text-white transition-colors">
                    Academics
                  </Link>
                </li>
                <li className="text-white/50">›</li>
                <li className="text-amber-300 font-semibold">Academic Calendar</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-10 md:py-14 px-2 sm:px-4">
          <div className="w-full max-w-[96%] mx-auto px-2 sm:px-4">
            {/* Title Header with Graduation Icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center gap-3 text-2xl sm:text-3xl font-display font-bold text-[#8b0000]">
                <span className="text-3xl">🎓</span>
                <h2>Academic Calendars</h2>
              </div>
              <p className="text-slate-500 text-sm mt-1">
                Select degree level (UG, PG, or Ph.D.) to view official academic schedules
              </p>
            </div>

            {/* UG / PG / Ph.D. Sub-Tabs Switcher */}
            <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
              <button
                onClick={() => setActiveTab("UG")}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm cursor-pointer ${
                  activeTab === "UG"
                    ? "bg-[#8b0000] text-white shadow-md scale-105"
                    : "bg-[#f5e6e6] text-[#8b0000] hover:bg-[#ebd0d0]"
                }`}
              >
                UG Academic Calendars
              </button>
              <button
                onClick={() => setActiveTab("PG")}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm cursor-pointer ${
                  activeTab === "PG"
                    ? "bg-[#8b0000] text-white shadow-md scale-105"
                    : "bg-[#f5e6e6] text-[#8b0000] hover:bg-[#ebd0d0]"
                }`}
              >
                PG Academic Calendars
              </button>
              <button
                onClick={() => setActiveTab("PHD")}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm cursor-pointer ${
                  activeTab === "PHD"
                    ? "bg-[#8b0000] text-white shadow-md scale-105"
                    : "bg-[#f5e6e6] text-[#8b0000] hover:bg-[#ebd0d0]"
                }`}
              >
                Ph.D. Academic Calendar
              </button>
            </div>

            {/* Filter / Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder={`Search ${activeTab === "PHD" ? "Ph.D." : activeTab} academic calendars...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8b0000]/20 focus:border-[#8b0000] transition-all shadow-xs"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* List Container matching Official Portal */}
            <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden">
              <div className="divide-y divide-slate-100">
                {filteredList.length > 0 ? (
                  filteredList.map((item, idx) => (
                    <a
                      key={`${activeTab}-${idx}-${item.title}`}
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-3.5 px-4 sm:px-6 hover:bg-slate-50 transition-colors group"
                    >
                      <span className="font-body text-xs sm:text-sm text-slate-700 group-hover:text-[#b31317] transition-colors pr-4 leading-relaxed">
                        {item.title}
                      </span>
                      <FileDown className="w-5 h-5 text-slate-400 group-hover:text-[#b31317] transition-colors shrink-0" />
                    </a>
                  ))
                ) : (
                  <div className="p-12 text-center text-slate-400 text-sm">
                    No academic calendars found matching "{searchTerm}".
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AcademicCalendar;

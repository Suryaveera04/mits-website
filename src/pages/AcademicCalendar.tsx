import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { GraduationCap, FileText, Download, Eye, X, Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const BASE = import.meta.env.BASE_URL;

interface CalendarItem {
  sno: number;
  title: string;
  pdfUrl: string;
}

// UG Academic Calendars - Exact order and S.No matching official mits.ac.in screenshot
const ugCalendars: CalendarItem[] = [
  {
    sno: 5,
    title: "Academic Calendar 2027-28 For B.Tech I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/Academic-Calendars-2027-28/5.%20Academic%20Calendar%202026-27%20For%20B.Tech%20I%20Year%20I%20&%20II%20Semesters.pdf",
  },
  {
    sno: 4,
    title: "Academic Calendar 2027-28 For BBA I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/Academic-Calendars-2027-28/4.%20Academic%20Calendar%202026-27%20For%20BBA%20I%20Year%20I%20&%20II%20Semesters.pdf",
  },
  {
    sno: 3,
    title: "Academic Calendar 2027-28 For BCA I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/Academic-Calendars-2027-28/3.%20Academic%20Calendar%202026-27%20For%20BCA%20I%20Year%20I%20&%20II%20Semesters.pdf",
  },
  {
    sno: 2,
    title: "Academic Calendar 2027-28 For B.Tech II Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/Academic-Calendars-2027-28/2.%20Academic%20Calendar%202026-27%20For%20B.Tech%20II%20Year%20I%20&%20II%20Semesters.pdf",
  },
  {
    sno: 1,
    title: "Academic Calendar 2025-26 For B.Tech I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/Academic-Calendars-2025-26/1.%20Academic%20Calendar%202025-26%20For%20B.Tech%20I%20Year%20I%20&%20II%20Semesters.pdf",
  },
];

// PG Academic Calendars - Exact order and S.No matching official mits.ac.in screenshot
const pgCalendars: CalendarItem[] = [
  {
    sno: 6,
    title: "Academic Calendar 2027-28 For M.B.A. II Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/Academic-Calendars-2027-28/6.%20Academic%20Calendar%202026-27%20For%20M.B.A.%20II%20Year%20I%20&%20II%20Semesters.pdf",
  },
  {
    sno: 5,
    title: "Academic Calendar 2027-28 For M.C.A. II Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/Academic-Calendars-2027-28/5.%20Academic%20Calendar%202026-27%20For%20M.C.A.%20II%20Year%20I%20&%20II%20Semesters.pdf",
  },
  {
    sno: 4,
    title: "Academic Calendar 2027-28 For M.Tech. II Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/Academic-Calendars-2027-28/4.%20Academic%20Calendar%202026-27%20For%20M.Tech.%20II%20Year%20I%20&%20II%20Semesters.pdf",
  },
  {
    sno: 3,
    title: "Academic Calendar 2025-26 For M.B.A. I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/Academic-Calendars-2025-26/3.%20Academic%20Calendar%202025-26%20For%20M.B.A.%20I%20Year%20I%20&%20II%20Semesters.pdf",
  },
  {
    sno: 2,
    title: "Academic Calendar 2025-26 For M.C.A. I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/Academic-Calendars-2025-26/2.%20Academic%20Calendar%202025-26%20For%20M.C.A.%20I%20Year%20I%20&%20II%20Semesters.pdf",
  },
  {
    sno: 1,
    title: "Academic Calendar 2025-26 For M.Tech I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/Academic-Calendars-2025-26/1.%20Academic%20Calendar%202025-26%20For%20M.Tech%20I%20Year%20I%20&%20II%20Semesters.pdf",
  },
];

const AcademicCalendar = () => {
  const [activeTab, setActiveTab] = useState<"UG" | "PG">("UG");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPdf, setSelectedPdf] = useState<{ title: string; pdfUrl: string } | null>(null);

  const currentList = activeTab === "UG" ? ugCalendars : pgCalendars;
  const filteredList = currentList.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fcfbf9] via-white to-gray-50 text-slate-800">
      <Header />
      <SEO
        title="Academic Calendars – MITS Madanapalle"
        description="Official UG & PG Academic Calendars for B.Tech, M.Tech, MCA, MBA, BCA, and BBA programs at Madanapalle Institute of Technology & Science."
        canonical="/academic-calendar"
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
              Semester schedules, examination dates, instruction periods, and academic timelines for UG &amp; PG programs.
            </p>
          </div>

          {/* Bottom Left Breadcrumb Navigation (Exact match to Library screenshot) */}
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
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Title Header with Graduation Icon matching reference design */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center gap-3 text-2xl sm:text-3xl font-display font-bold text-[#8b0000]">
                <GraduationCap className="w-8 h-8 text-[#8b0000]" />
                <h2>Academic Calendars</h2>
              </div>
              <p className="text-slate-500 text-sm mt-1">Select degree level to view official academic calendars</p>
            </div>

            {/* UG / PG Sub-Tabs Switcher */}
            <div className="flex justify-center items-center gap-3 mb-8">
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
            </div>

            {/* Filter / Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder={`Search ${activeTab} academic calendars...`}
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

            {/* List Container */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden">
              <div className="divide-y divide-slate-100">
                {filteredList.length > 0 ? (
                  filteredList.map((item) => (
                    <div
                      key={item.sno}
                      className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors group"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <span className="font-semibold text-sm text-slate-400 group-hover:text-[#8b0000] transition-colors pt-0.5 min-w-[20px]">
                          {item.sno}.
                        </span>
                        <div>
                          <h3 className="font-medium text-sm sm:text-base text-slate-800 group-hover:text-[#8b0000] transition-colors leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-400 mt-0.5">Official Academic Schedule • Approved</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedPdf({ title: item.title, pdfUrl: item.pdfUrl })}
                          className="h-9 px-3 text-xs font-semibold border-slate-200 text-slate-700 hover:text-[#8b0000] hover:border-[#8b0000]/30 hover:bg-[#8b0000]/5 transition-all gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#8b0000]" />
                          <span>View</span>
                        </Button>

                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-md bg-[#8b0000] hover:bg-[#6e0000] text-white text-xs font-semibold transition-all shadow-xs"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </a>
                      </div>
                    </div>
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

      {/* PDF MODAL VIEWER */}
      {selectedPdf && (
        <div className="fixed inset-0 z-[200] bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6">
          <div className="bg-white w-full max-w-5xl h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="px-4 py-3 bg-[#0f2a44] text-white flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2 truncate pr-4">
                <FileText className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm truncate">{selectedPdf.title}</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={selectedPdf.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open Original</span>
                </a>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                  aria-label="Close PDF Viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body / iframe */}
            <div className="flex-1 bg-slate-100 relative">
              <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(selectedPdf.pdfUrl)}&embedded=true`}
                title={selectedPdf.title}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AcademicCalendar;

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { GraduationCap, FileText, Download, Eye, X, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const BASE = import.meta.env.BASE_URL;

interface SyllabusItem {
  id: number;
  title: string;
  pdfUrl: string;
  level: "UG" | "PG";
  regulation: "R25" | "R26";
}

const ugSyllabus: SyllabusItem[] = [
  {
    id: 1,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Civil Engineering",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech CIVIL-R25-MITS DTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 2,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Electrical and Electronics Engineering",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech EEE - R25 MITS DTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 3,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Mechanical Engineering",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech MECH-R25 MITS-DTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 4,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Electronics & Communication Engineering",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech-ECE-25 MITS DTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 5,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Computer Science & Engineering",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech-CSE-R25-MITS-DTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 6,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Computer Science and Engineering (Artificial Intelligence)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech-CSE (AI) - R25 MITS DTTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 7,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Computer Science and Engineering (Data Science)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech CSE (DS)-R25 MITS-DTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 8,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Computer Science and Engineering (Cyber Security)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech CSE (Cyber Security) - R25 MITS DTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 9,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech CSE (AI&ML) - R25 MITS DTTBU-1.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 10,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Computer Science and Engineering (Artificial Intelligence and Data Science)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech CSE (AI & DS) - R25 MITS DTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 11,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Computer Science and Engineering (Artificial Intelligence and Robotics)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech CSE (AI and Robotics) - R25 MITS DTTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 12,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Bioinformatics",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech Bioinformatics-R25 MITS DTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 13,
    title: "Course Structure & Syllabi (R26) Bachelor of Business Administration Programme - BBA",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/BBA - R26 MITS DTBU-1.pdf",
    level: "UG",
    regulation: "R26",
  },
  {
    id: 14,
    title: "Course Structure & Syllabi (R26) Bachelor of Computer Applications Programme - BCA",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/BCA - R26 MITS DTBU-1.pdf",
    level: "UG",
    regulation: "R26",
  },
];

const pgSyllabus: SyllabusItem[] = [
  {
    id: 1,
    title: "Course Structure & Syllabi (R25) For M.Tech (CSE)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/M.Tech CSE-R25 MITS DTBU.pdf",
    level: "PG",
    regulation: "R25",
  },
  {
    id: 2,
    title: "Course Structure & Syllabi (R25) For M.Tech (CSE - Artificial Intelligence and Machine Learning)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/M.Tech CSE(AI and ML) - R25 MITS DTBU.pdf",
    level: "PG",
    regulation: "R25",
  },
  {
    id: 3,
    title: "Course Structure & Syllabi (R25) For M.Tech (Automation and Robotics)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/M.Tech AAR - R25 MITS DTBU.pdf",
    level: "PG",
    regulation: "R25",
  },
  {
    id: 4,
    title: "Course Structure & Syllabi (R25) For M.Tech (CSE - Automation and Robotics)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/M.Tech CSE(AI and ML) - R25 MITS DTBU.pdf",
    level: "PG",
    regulation: "R25",
  },
  {
    id: 5,
    title: "Course Structure & Syllabi (R25) For M.Tech (VLSI Design and Embedded Systems)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/M.Tech-VLSI-R25-MITS-DTBU.pdf",
    level: "PG",
    regulation: "R25",
  },
  {
    id: 6,
    title: "Course Structure & Syllabi (R25) For M.Tech (Construction Engineering and Management )",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/M.Tech CEM - R25 MITS DTBU.pdf",
    level: "PG",
    regulation: "R25",
  },
  {
    id: 7,
    title: "Course Structure & Syllabi (R25) For M.Tech (Electric Vehicle Technology)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/M.Tech EVT - R25 MITS DTBU.pdf",
    level: "PG",
    regulation: "R25",
  },
  {
    id: 8,
    title: "Course Structure & Syllabi (R25) For M.B.A Degree",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MBA - R25 MITS DTBU (1).pdf",
    level: "PG",
    regulation: "R25",
  },
  {
    id: 9,
    title: "Course Structure & Syllabi (R25) For M.C.A Degree",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MCA-R25 MITS-DTBU.pdf",
    level: "PG",
    regulation: "R25",
  },
  {
    id: 10,
    title: "Academic Calendar 2026-27 For M.Tech. I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/Academic%20Calendar%202026-27%20M.%20Tech%20I%20Year%20I%20&%20II%20Semesters.pdf",
    level: "PG",
    regulation: "R25",
  },
  {
    id: 11,
    title: "Academic Calendar 2026-27 For M.B.A. I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/I%20MBA%20(DTBU)%20AC%2026-27.pdf",
    level: "PG",
    regulation: "R25",
  },
  {
    id: 12,
    title: "Academic Calendar 2026-27 For M.C.A. I Year I & II Semesters",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/I%20MCA%20(DTBU)%20AC%2026-27.pdf",
    level: "PG",
    regulation: "R25",
  },
];

const CurriculumSyllabus = () => {
  const [activeTab, setActiveTab] = useState<"UG" | "PG">("UG");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPdf, setSelectedPdf] = useState<{ title: string; pdfUrl: string } | null>(null);

  const currentList = activeTab === "UG" ? ugSyllabus : pgSyllabus;
  const filteredList = currentList.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fcfbf9] via-white to-slate-50 text-slate-800">
      <Header />
      <SEO
        title="Curriculum & Academic Syllabus – MITS Deemed to be University"
        description="Official Course Structure & Syllabi (R25 & R26) for B.Tech, BBA, BCA, M.Tech, MBA, and MCA programs at Madanapalle Institute of Technology & Science."
        canonical="/curriculum-academic-syllabus"
      />

      <main className="pt-0">
        {/* HERO SECTION - Exact match to standard Academic hero layout and styling */}
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
            <p className="text-[#ffd15c] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
              ACADEMIC CURRICULUM
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Curriculum &amp; <span className="text-[#ffd15c]">Academic Syllabus</span>
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
              Official R25 &amp; R26 Course Structures, credit distribution, and comprehensive syllabi for all UG and PG programs.
            </p>
          </div>

          {/* Breadcrumb Navigation */}
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
                <li className="text-amber-300 font-semibold">Curriculum &amp; Syllabus</li>
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
                <span className="text-3xl">🎓</span>
                <h2>Curriculum &amp; Academic Syllabus</h2>
              </div>
              <p className="text-slate-500 text-sm mt-1">Select degree level to download official course structure &amp; syllabus PDFs</p>
            </div>

            {/* UG / PG Sub-Tabs Switcher */}
            <div className="flex justify-center items-center gap-3 mb-8">
              <button
                onClick={() => setActiveTab("UG")}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-xs cursor-pointer ${
                  activeTab === "UG"
                    ? "bg-[#8b0000] text-white shadow-md scale-105"
                    : "bg-[#f5e6e6] text-[#8b0000] hover:bg-[#ebd0d0]"
                }`}
              >
                UG Curriculum &amp; Academic Syllabus
              </button>
              <button
                onClick={() => setActiveTab("PG")}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-xs cursor-pointer ${
                  activeTab === "PG"
                    ? "bg-[#8b0000] text-white shadow-md scale-105"
                    : "bg-[#f5e6e6] text-[#8b0000] hover:bg-[#ebd0d0]"
                }`}
              >
                PG Curriculum &amp; Academic Syllabus
              </button>
            </div>

            {/* Search Filter */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder={`Search ${activeTab} course syllabus...`}
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

            {/* List Container matching Image 3 */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="divide-y divide-slate-100">
                {filteredList.length > 0 ? (
                  filteredList.map((item, idx) => (
                    <div
                      key={item.id}
                      className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors group"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <span className="font-semibold text-sm text-slate-400 group-hover:text-[#8b0000] transition-colors pt-0.5">
                          {idx + 1}.
                        </span>
                        <div>
                          <h3 className="font-medium text-sm sm:text-base text-slate-800 group-hover:text-[#8b0000] transition-colors leading-snug">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/50">
                              {item.regulation} Regulation
                            </span>
                            <span className="text-xs text-slate-400">• Approved by Academic Council</span>
                          </div>
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
                    No syllabus found matching "{searchTerm}".
                  </div>
                )}
              </div>
            </div>

            {/* Related links callout */}
            <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center sm:flex sm:items-center sm:justify-between gap-4 text-xs sm:text-sm text-amber-900">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 sm:mb-0">
                <BookOpen className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Looking for examination rules and grading policies?</span>
              </div>
              <Link
                to="/academic-regulations"
                className="inline-flex items-center gap-1 font-semibold text-[#8b0000] hover:underline"
              >
                <span>View Academic Regulations</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* PDF MODAL VIEWER */}
      {selectedPdf && (
        <div className="fixed inset-0 z-[200] bg-[#0f2a44]/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6">
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

export default CurriculumSyllabus;

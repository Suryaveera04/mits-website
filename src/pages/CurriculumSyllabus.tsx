import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { FileDown, Search, BookOpen } from "lucide-react";

const BASE = "https://mits.edu/";

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
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech MECH - R25 MITS DTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 4,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Electronics & Communication Engineering",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech ECE - R25 MITS DTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 5,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Computer Science & Engineering",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech CSE - R25 MITS DTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 6,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Computer Science and Engineering (Artificial Intelligence)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech CSE (AI) - R25 MITS DTTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 7,
    title: "Course Structure & Syllabi (R25) B.Tech Programme - Computer Science and Engineering (Data Science)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech CSE (DS) - R25 MITS DTBU.pdf",
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
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech CSE (AI&ML) - R25 MITS DTBU.pdf",
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
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech Bioinformatics - R25 MITS DTBU.pdf",
    level: "UG",
    regulation: "R25",
  },
  {
    id: 13,
    title: "Course Structure & Syllabi (R26) Bachelor of Business Administration Programme - BBA",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/BBA - R26 MITS DTBU.pdf",
    level: "UG",
    regulation: "R26",
  },
  {
    id: 14,
    title: "Course Structure & Syllabi (R26) Bachelor of Computer Applications Programme - BCA",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/BCA - R26 MITS DTBU.pdf",
    level: "UG",
    regulation: "R26",
  },
];

const pgSyllabus: SyllabusItem[] = [
  {
    id: 1,
    title: "Course Structure & Syllabi (R25) For M.Tech (CSE)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/M.Tech CSE - R25 MITS DTBU.pdf",
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
    title: "Course Structure & Syllabi (R25) For M.Tech (VLSI Design and Embedded Systems)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/M.Tech VLSI - R25 MITS DTBU.pdf",
    level: "PG",
    regulation: "R25",
  },
  {
    id: 5,
    title: "Course Structure & Syllabi (R25) For M.Tech (Construction Engineering and Management )",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/M.Tech CEM - R25 MITS DTBU.pdf",
    level: "PG",
    regulation: "R25",
  },
  {
    id: 6,
    title: "Course Structure & Syllabi (R25) For M.Tech (Electric Vehicle Technology)",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/M.Tech EVT - R25 MITS DTBU.pdf",
    level: "PG",
    regulation: "R25",
  },
  {
    id: 7,
    title: "Course Structure & Syllabi (R25) For M.B.A Degree",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MBA - R25 MITS DTBU.pdf",
    level: "PG",
    regulation: "R25",
  },
  {
    id: 8,
    title: "Course Structure & Syllabi (R25) For M.C.A Degree",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MCA - R25 MITS DTBU.pdf",
    level: "PG",
    regulation: "R25",
  },
];

const CurriculumSyllabus = () => {
  const [activeTab, setActiveTab] = useState<"UG" | "PG">("UG");
  const [searchTerm, setSearchTerm] = useState("");

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
        <section className="py-10 md:py-14 px-2 sm:px-4">
          <div className="w-full max-w-[96%] mx-auto px-2 sm:px-4">
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

            {/* List Container matching Official Portal */}
            <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden">
              <div className="divide-y divide-slate-100">
                {filteredList.length > 0 ? (
                  filteredList.map((item) => (
                    <a
                      key={item.id}
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

      <Footer />
    </div>
  );
};

export default CurriculumSyllabus;

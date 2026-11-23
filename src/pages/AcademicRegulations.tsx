import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { FileDown, Search, BookOpen } from "lucide-react";

const BASE = "https://mits.edu/";

interface RegulationItem {
  id: number;
  title: string;
  pdfUrl: string;
}

const ugRegulations: RegulationItem[] = [
  {
    id: 1,
    title: "Academic Regulations (R25) For B.Tech.",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech_R25_AR_MITS_DTBU-3-1.pdf",
  },
  {
    id: 2,
    title: "Academic Regulations (R26) For B.B.A.",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/BBA R26_AR_17.10.2026.pdf",
  },
  {
    id: 3,
    title: "Academic Regulations (R26) For B.C.A.",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/BCA R26_AR_22.10.2026.pdf",
  },
];

const pgRegulations: RegulationItem[] = [
  {
    id: 1,
    title: "Academic Regulations R25 For M.B.A.",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MBA_R25_AR_MITS_DTBU_.pdf",
  },
  {
    id: 2,
    title: "Academic Regulations R25 For M.C.A.",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MCA_R25_AR_MITS_DTBU_.pdf",
  },
  {
    id: 3,
    title: "Academic Regulations R25 For M.Tech.",
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/M.Tech_R25_AR_MITS_DTBU_.pdf",
  },
];

const AcademicRegulations = () => {
  const [activeTab, setActiveTab] = useState<"UG" | "PG">("UG");
  const [searchTerm, setSearchTerm] = useState("");

  const currentList = activeTab === "UG" ? ugRegulations : pgRegulations;
  const filteredList = currentList.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fcfbf9] via-white to-gray-50 text-slate-800">
      <Header />
      <SEO
        title="Academic Regulations – MITS Madanapalle"
        description="Official Academic Regulations (R25) for B.Tech, M.Tech, MCA, and MBA programs at Madanapalle Institute of Technology & Science."
        canonical="/academic-regulations"
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
            <p className="text-[#ffb300] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
              ACADEMIC GOVERNANCE
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Academic <span className="text-[#ffd15c]">Regulations</span>
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
              Official R25 &amp; R26 academic framework, course structures, and evaluation regulations for Under-Graduate (UG) &amp; Post-Graduate (PG) programs.
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
                <li className="text-amber-300 font-semibold">Academic Regulations</li>
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
                <h2>Academic Regulations</h2>
              </div>
              <p className="text-slate-500 text-sm mt-1">Select degree level to view official regulations</p>
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
                UG Academic Regulations
              </button>
              <button
                onClick={() => setActiveTab("PG")}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm cursor-pointer ${
                  activeTab === "PG"
                    ? "bg-[#8b0000] text-white shadow-md scale-105"
                    : "bg-[#f5e6e6] text-[#8b0000] hover:bg-[#ebd0d0]"
                }`}
              >
                PG Academic Regulations
              </button>
            </div>

            {/* Filter / Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder={`Search ${activeTab} regulations...`}
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
                    No regulations found matching "{searchTerm}".
                  </div>
                )}
              </div>
            </div>

            {/* Info Footer Callout */}
            <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center sm:flex sm:items-center sm:justify-between gap-4 text-xs sm:text-sm text-amber-900">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 sm:mb-0">
                <BookOpen className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Need complete syllabus or curriculum details?</span>
              </div>
              <Link
                to="/academics"
                className="inline-flex items-center gap-1 font-semibold text-[#8b0000] hover:underline"
              >
                <span>Explore Departments & Courses</span>
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

export default AcademicRegulations;

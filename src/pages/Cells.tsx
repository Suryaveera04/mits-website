import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Grid,
  List,
  HeartHandshake,
  Scale,
  Award,
  Lightbulb,
  Flag,
  BookOpen,
  ChevronRight,
  Sparkles,
  SearchX,
  FileText,
  BadgeAlert,
  ArrowUpRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { cellCategories, type CellItem, type CellCategory } from "@/data/cellsData";
import { cellsDetailData } from "@/data/cellsDetailData";

const BASE = import.meta.env.BASE_URL;

// Mapping categories to Lucide icons
const categoryIcons: Record<string, any> = {
  "student-welfare": HeartHandshake,
  "equity-inclusion": Scale,
  "academic-quality": Award,
  "innovation-career": Lightbulb,
  "national-schemes": Flag,
  "professional-societies": BookOpen,
};

// Breadcrumbs component
const Breadcrumbs = () => (
  <nav aria-label="Breadcrumb" className="absolute bottom-4 left-6 z-10">
    <ol className="flex items-center gap-1.5 text-sm text-white/80">
      <li>
        <Link to="/" className="text-white/70 hover:text-white transition-colors">
          Home
        </Link>
      </li>
      <li className="text-white/50">›</li>
      <li className="text-white/70">Academics</li>
      <li className="text-white/50">›</li>
      <li className="text-[#ffd15c] font-semibold">Cells &amp; Committees</li>
    </ol>
  </nav>
);

export default function Cells() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  // Flattened cells list with category title for searches
  const allCells = useMemo(() => {
    return cellCategories.flatMap((category) =>
      category.cells.map((cell) => ({
        ...cell,
        categoryId: category.id,
        categoryTitle: category.title,
      }))
    );
  }, []);

  // Filtered cells list
  const filteredCells = useMemo(() => {
    let result = allCells;

    if (activeCategory !== "all") {
      result = result.filter((cell) => cell.categoryId === activeCategory);
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (cell) =>
          cell.name.toLowerCase().includes(query) ||
          cell.abbreviation?.toLowerCase().includes(query)
      );
    }

    return result;
  }, [allCells, activeCategory, searchQuery]);

  // Statistics calculation
  const stats = useMemo(() => {
    const totalCells = allCells.length;
    const professionalBodies = cellCategories.find(c => c.id === "professional-societies")?.cells.length || 0;
    const studentWelfare = cellCategories.find(c => c.id === "student-welfare")?.cells.length || 0;
    return { totalCells, professionalBodies, studentWelfare };
  }, [allCells]);

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />

      {/* HERO BANNER */}
      <section
        className="relative pt-32 md:pt-44 pb-24 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-sm sm:text-sm mb-4 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#ffd15c] animate-pulse" />
            Governance &amp; Student Ecosystem
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5 tracking-tight text-white">
            Cells &amp; <span className="text-[#ffd15c]">Committees</span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Explore Madanapalle Institute of Technology &amp; Science's rich ecosystem of functional cells, student welfare committees, professional societies, and compliance branches.
          </p>
        </div>
        <Breadcrumbs />
      </section>

      {/* QUICK STATS PANEL */}
      <section className="relative z-20 -mt-10 max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-xl p-6 md:p-8 grid grid-cols-3 gap-4 text-center divide-x divide-gray-100">
          <div>
            <p className="text-2xl md:text-4xl font-display font-bold text-[#b31317]">{stats.totalCells}</p>
            <p className="text-sm md:text-sm font-semibold text-[#0f2a44]/65 uppercase tracking-wider mt-1">Total Cells</p>
          </div>
          <div>
            <p className="text-2xl md:text-4xl font-display font-bold text-[#0f2a44]">{stats.studentWelfare}</p>
            <p className="text-sm md:text-sm font-semibold text-[#0f2a44]/65 uppercase tracking-wider mt-1">Student Welfare</p>
          </div>
          <div>
            <p className="text-2xl md:text-4xl font-display font-bold text-[#caa74d]">{stats.professionalBodies}</p>
            <p className="text-sm md:text-sm font-semibold text-[#0f2a44]/65 uppercase tracking-wider mt-1">Professional Bodies</p>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH PANEL */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-[#0f2a44]/5">
          
          {/* Categories Tab Bar */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-3 lg:pb-0 no-scrollbar">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2.5 rounded-full text-sm md:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                activeCategory === "all"
                  ? "bg-[#0f2a44] text-white shadow-md"
                  : "bg-white text-[#0f2a44] border border-[#0f2a44]/10 hover:bg-[#fff8e6]"
              }`}
            >
              All Cells
            </button>
            {cellCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-sm md:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? "bg-[#0f2a44] text-white shadow-md"
                    : "bg-white text-[#0f2a44] border border-[#0f2a44]/10 hover:bg-[#fff8e6]"
                }`}
              >
                {cat.id === "all" ? null : (() => {
                  const Icon = categoryIcons[cat.id];
                  return Icon ? <Icon className="w-3.5 h-3.5" /> : null;
                })()}
                {cat.title.replace(" & Committees", "")}
              </button>
            ))}
          </div>

          {/* Search & Layout Control */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
            <div className="relative flex-1 lg:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search cell name or abbreviation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#0f2a44]/10 rounded-full text-sm text-[#0f2a44] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f2a44]/20 focus:border-[#0f2a44] transition-all"
              />
            </div>
            
            {/* View Mode Switcher */}
            <div className="flex bg-white border border-[#0f2a44]/10 rounded-full p-1 shrink-0">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-all ${
                  viewMode === "grid" ? "bg-[#0f2a44]/10 text-[#0f2a44]" : "text-gray-400 hover:text-gray-600"
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-2 rounded-full transition-all ${
                  viewMode === "table" ? "bg-[#0f2a44]/10 text-[#0f2a44]" : "text-gray-400 hover:text-gray-600"
                }`}
                title="Table View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* CELLS GRID / TABLE CONTAINER */}
        <ScrollReveal>
          <AnimatePresence mode="wait">
            {filteredCells.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="bg-white border border-[#0f2a44]/10 rounded-2xl py-16 px-6 text-center shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#b31317]/10 text-[#b31317] mb-4">
                  <SearchX className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#0f2a44]">No cells found</h3>
                <p className="text-gray-500 text-sm mt-1 max-w-sm mx-auto">
                  We couldn't find any cell or committee matching "{searchQuery}". Try using different keywords or abbreviations.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-5 px-5 py-2 rounded-full bg-[#0f2a44] text-white text-sm font-semibold hover:bg-[#11355a] transition-all shadow-sm"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : viewMode === "grid" ? (
              // GRID VIEW
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredCells.map((cell, idx) => {
                  const CategoryIcon = categoryIcons[cell.categoryId] || FileText;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.02 }}
                      key={`${cell.categoryId}-${cell.name}`}
                    >
                      {cell.detailId && cellsDetailData[cell.detailId] ? (
                        <Link
                          to={`/cells/${cell.detailId}`}
                          className="group bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 hover:shadow-lg hover:border-[#caa74d] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer h-full block"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-10 h-10 rounded-xl bg-[#0f2a44]/5 text-[#0f2a44] flex items-center justify-center group-hover:bg-[#caa74d]/10 group-hover:text-[#b31317] transition-all">
                                <CategoryIcon className="w-5 h-5" />
                              </div>
                              {cell.abbreviation && (
                                <span className="bg-[#fff8e6] border border-[#ffd15c]/25 text-[#b31317] text-sm font-bold px-2.5 py-0.5 rounded-full">
                                  {cell.abbreviation}
                                </span>
                              )}
                            </div>
                            <h3 className="font-display font-bold text-base text-[#0f2a44] group-hover:text-[#b31317] transition-colors leading-snug">
                              {cell.name}
                            </h3>
                            <p className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 mt-2 block">
                              {cell.categoryTitle}
                            </p>
                          </div>
                          <div className="mt-6 pt-4 border-t border-[#0f2a44]/5 flex items-center justify-between">
                            <span className="text-sm font-medium text-[#caa74d] group-hover:underline">View details</span>
                            <span className="w-8 h-8 rounded-full bg-gray-50 text-gray-400 group-hover:bg-[#b31317] group-hover:text-white flex items-center justify-center transition-all shadow-sm">
                              <ArrowUpRight className="w-4 h-4" />
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <a
                          href={cell.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 hover:shadow-lg hover:border-[#caa74d] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer h-full block"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-10 h-10 rounded-xl bg-[#0f2a44]/5 text-[#0f2a44] flex items-center justify-center group-hover:bg-[#caa74d]/10 group-hover:text-[#b31317] transition-all">
                                <CategoryIcon className="w-5 h-5" />
                              </div>
                              {cell.abbreviation && (
                                <span className="bg-[#fff8e6] border border-[#ffd15c]/25 text-[#b31317] text-sm font-bold px-2.5 py-0.5 rounded-full">
                                  {cell.abbreviation}
                                </span>
                              )}
                            </div>
                            <h3 className="font-display font-bold text-base text-[#0f2a44] group-hover:text-[#b31317] transition-colors leading-snug">
                              {cell.name}
                            </h3>
                            <p className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 mt-2 block">
                              {cell.categoryTitle}
                            </p>
                          </div>
                          <div className="mt-6 pt-4 border-t border-[#0f2a44]/5 flex items-center justify-between">
                            <span className="text-sm font-medium text-[#caa74d] group-hover:underline">Visit page</span>
                            <span className="w-8 h-8 rounded-full bg-gray-50 text-gray-400 group-hover:bg-[#b31317] group-hover:text-white flex items-center justify-center transition-all shadow-sm">
                              <ArrowUpRight className="w-4 h-4" />
                            </span>
                          </div>
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              // TABLE VIEW
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden"
              >
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-[#0f2a44] text-white font-display text-sm md:text-sm font-semibold uppercase tracking-wider">
                        <th className="py-4 px-6 w-16 text-center">S.No</th>
                        <th className="py-4 px-6">Name of the Cell</th>
                        <th className="py-4 px-6 hidden md:table-cell">Category</th>
                        <th className="py-4 px-6 w-32 text-center">Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredCells.map((cell, idx) => (
                        <tr
                          key={`${cell.categoryId}-${cell.name}`}
                          className="hover:bg-[#fff8e6]/30 transition-colors text-sm"
                        >
                          <td className="py-4 px-6 text-center text-[#0f2a44]/55 font-medium">
                            {idx + 1}
                          </td>
                          <td className="py-4 px-6 font-semibold text-[#0f2a44]">
                            {cell.detailId && cellsDetailData[cell.detailId] ? (
                              <Link to={`/cells/${cell.detailId}`} className="hover:text-[#b31317] transition-colors inline-flex items-center gap-1.5">
                                {cell.name}
                                {cell.abbreviation && (
                                  <span className="text-[10px] bg-red-50 text-[#b31317] border border-red-100 px-2 py-0.5 rounded font-bold uppercase tracking-wide">
                                    {cell.abbreviation}
                                  </span>
                                )}
                              </Link>
                            ) : (
                              <a href={cell.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#b31317] transition-colors inline-flex items-center gap-1.5">
                                {cell.name}
                                {cell.abbreviation && (
                                  <span className="text-[10px] bg-red-50 text-[#b31317] border border-red-100 px-2 py-0.5 rounded font-bold uppercase tracking-wide">
                                    {cell.abbreviation}
                                  </span>
                                )}
                              </a>
                            )}
                          </td>
                          <td className="py-4 px-6 hidden md:table-cell text-gray-500 text-sm font-medium">
                            {cell.categoryTitle}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {cell.detailId && cellsDetailData[cell.detailId] ? (
                              <Link to={`/cells/${cell.detailId}`} className="inline-flex items-center gap-1 text-sm font-bold text-[#b31317] hover:text-[#0f2a44] transition-colors hover:underline">
                                <span>View Cell</span>
                                <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                              </Link>
                            ) : (
                              <a href={cell.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-[#b31317] hover:text-[#0f2a44] transition-colors hover:underline">
                                <span>View Cell</span>
                                <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollReveal>

        {/* BOTTOM PORTALS HIGHLIGHT */}
        <ScrollReveal>
          <section className="rounded-2xl bg-gradient-to-br from-[#0f2a44] to-[#11355a] text-white p-8 md:p-12 mt-16 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#caa74d]/5 rounded-full blur-3xl pointer-events-none" />
            
            <p className="text-[#caa74d] uppercase tracking-[0.25em] text-sm font-bold mb-3 flex items-center gap-2">
              <BadgeAlert className="w-4 h-4" />
              Information Disclosures
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-5 text-white tracking-tight">
              Looking for Compliance Portals?
            </h2>
            <p className="text-white/70 max-w-2xl text-sm md:text-base leading-relaxed mb-8">
              MITS is dedicated to quality maintenance, transparency, and public record disclosure. Explore our compliance cells and national accreditation frameworks directly.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Internal Quality (IQAC)", to: "/iqac" },
                { label: "NAAC Accreditations", to: "/naac" },
                { label: "NIRF Rankings Data", to: "/nirf" },
                { label: "Public Disclosures (PSD)", to: "/psd" },
              ].map((portal) => (
                <Link
                  key={portal.to}
                  to={portal.to}
                  className="group flex items-center justify-between gap-3 px-5 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#caa74d] transition-all"
                >
                  <span className="font-body font-semibold text-sm text-white group-hover:text-[#ffd15c] transition-colors">
                    {portal.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#caa74d] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}

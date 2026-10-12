import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Search,
  BookOpen,
  User,
  GraduationCap,
  PlayCircle,
  Sparkles,
  Layers,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  econtentDepartmentsData,
  DepartmentEContent,
  FacultyEContent,
  EContentLink,
} from "@/data/econtentData";

const BASE = import.meta.env.BASE_URL;

const EContentPage: React.FC = () => {
  const [activeDeptId, setActiveDeptId] = useState<string>(
    econtentDepartmentsData[0]?.id || "ug-tab20"
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedFaculty, setExpandedFaculty] = useState<Record<string, boolean>>({});

  // Current active department object
  const activeDepartment = useMemo(() => {
    return (
      econtentDepartmentsData.find((d) => d.id === activeDeptId) ||
      econtentDepartmentsData[0]
    );
  }, [activeDeptId]);

  // Filtered faculty list based on search term
  const filteredFacultyList = useMemo(() => {
    if (!searchTerm.trim()) {
      return activeDepartment.facultyList;
    }

    const term = searchTerm.toLowerCase().trim();
    return activeDepartment.facultyList
      .map((fac) => {
        const matchesName = fac.name.toLowerCase().includes(term);
        const matchingLinks = fac.links.filter((l) =>
          l.title.toLowerCase().includes(term)
        );

        if (matchesName) {
          return fac; // keep all links if name matches
        } else if (matchingLinks.length > 0) {
          return { ...fac, links: matchingLinks }; // keep matching links
        }
        return null;
      })
      .filter((fac): fac is FacultyEContent => fac !== null);
  }, [activeDepartment, searchTerm]);

  // Total lectures in active department
  const totalLecturesCount = useMemo(() => {
    return activeDepartment.facultyList.reduce(
      (sum, f) => sum + f.links.length,
      0
    );
  }, [activeDepartment]);

  // Toggle individual faculty accordion
  const toggleFaculty = (facName: string) => {
    setExpandedFaculty((prev) => ({
      ...prev,
      [facName]: !prev[facName],
    }));
  };

  // Expand all / Collapse all in active department
  const setAllExpanded = (expand: boolean) => {
    const newState: Record<string, boolean> = {};
    activeDepartment.facultyList.forEach((f) => {
      newState[f.name] = expand;
    });
    setExpandedFaculty(newState);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col font-body">
      <Header />

      {/* Hero Section — Rich dark navy overlay for crystal clear contrast */}
      <section
        className="relative pt-32 md:pt-44 pb-24 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0f2a44]/85 bg-gradient-to-b from-[#0f2a44]/90 via-[#0f2a44]/75 to-[#0f2a44]/95" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffd15c] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 drop-shadow-sm">
            E-Content Development Center
          </p>
          <h1
            className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-5 text-white tracking-tight drop-shadow-md"
            style={{ fontFamily: "var(--font-display)" }}
          >
            E-Content Developed by{" "}
            <span className="text-[#ffd15c] drop-shadow-md">MITS Faculty</span>
          </h1>
          <p className="text-white/95 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4 font-medium drop-shadow-sm">
            Comprehensive digital repository of video lectures, interactive courseware,
            and specialized e-learning modules recorded at MITS Audio-Visual Studio.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-8 max-w-2xl mx-auto">
            {[
              { k: "Departments", v: "20 Active" },
              { k: "Faculty", v: "260+ Members" },
              { k: "Lectures", v: "Video Library" },
              { k: "Studio", v: "MITS AV Studio" },
            ].map((s) => (
              <div
                key={s.k}
                className="p-3.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 text-center shadow-lg hover:bg-white/20 transition-all"
              >
                <p className="font-display font-extrabold text-[#ffd15c] text-sm md:text-base drop-shadow-sm">
                  {s.v}
                </p>
                <p className="font-body text-[11px] text-white/90 font-semibold uppercase tracking-wider mt-0.5">
                  {s.k}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 left-6 z-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-white/90">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">›</li>
              <li>
                <Link to="/iqac" className="text-white/70 hover:text-white transition-colors">
                  IQAC
                </Link>
              </li>
              <li className="text-white/50">›</li>
              <li className="text-[#ffd15c] font-semibold">e-Content Repository</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-4 py-10 md:py-14">
        {/* Top Search & Action Bar */}
        <div className="bg-white rounded-2xl p-4 md:p-6 border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search faculty name or lecture title..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#b31317] focus:ring-1 focus:ring-[#b31317] transition-all bg-slate-50/50"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 hover:text-slate-600 font-bold"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold">
            <button
              onClick={() => setAllExpanded(true)}
              className="px-3.5 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#b31317] hover:text-white transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={() => setAllExpanded(false)}
              className="px-3.5 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Layout Grid: Left Sidebar Departments + Right Main Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDEBAR: Department Navigation */}
          <aside className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sticky top-28">
            <div className="flex items-center justify-between px-3 pb-3 mb-2 border-b border-slate-100">
              <span className="font-display font-bold text-sm text-[#0f2a44] uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#b31317]" /> Departments
              </span>
              <span className="text-sm bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">
                {econtentDepartmentsData.length}
              </span>
            </div>

            <nav className="space-y-1 max-h-[600px] overflow-y-auto pr-1 custom-scrollbar">
              {econtentDepartmentsData.map((dept) => {
                const isActive = dept.id === activeDeptId;
                const facultyCount = dept.facultyList.length;

                return (
                  <button
                    key={dept.id}
                    onClick={() => {
                      setActiveDeptId(dept.id);
                      setSearchTerm("");
                    }}
                    className={`w-full flex items-center justify-between gap-3 px-3.5 py-3 rounded-xl text-left text-sm md:text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-[#b31317] text-white shadow-md shadow-[#b31317]/20"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#b31317]"
                    }`}
                  >
                    <span className="line-clamp-2">{dept.name}</span>
                    <span
                      className={`shrink-0 text-[11px] px-2 py-0.5 rounded-full font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {facultyCount}
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* RIGHT MAIN PANEL: Faculty & Video Lectures */}
          <section className="lg:col-span-8 space-y-6">
            {/* Department Title Header Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm border-l-4 border-l-[#b31317]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-[#b31317] uppercase tracking-wider">
                    Department E-Content Repository
                  </p>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44] mt-1">
                    {activeDepartment.name}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-sm font-semibold">
                    <User className="w-3.5 h-3.5 text-[#caa74d]" />
                    {activeDepartment.facultyList.length} Faculty
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#b31317] border border-red-100 text-sm font-semibold">
                    <Video className="w-3.5 h-3.5" />
                    {totalLecturesCount} Lectures
                  </span>
                </div>
              </div>
            </div>

            {/* Faculty Accordion List */}
            {filteredFacultyList.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
                <Video className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="font-display font-bold text-slate-700 text-base">
                  No matching e-content found
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Try adjusting your search query or select another department.
                </p>
              </div>
            ) : (
              <div className="space-y-3.5">
                {filteredFacultyList.map((fac, idx) => {
                  const isExpanded = expandedFaculty[fac.name] ?? idx < 3; // expand first 3 by default

                  return (
                    <div
                      key={fac.name + idx}
                      className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all hover:border-slate-300"
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleFaculty(fac.name)}
                        className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-gradient-to-r from-slate-50/70 to-white hover:bg-slate-100/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-red-50 text-[#b31317] flex items-center justify-center font-bold shrink-0">
                            <User className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-[#b31317] text-base md:text-lg">
                              {fac.name}
                            </h3>
                            <p className="text-sm text-slate-500 font-medium">
                              {fac.links.length} {fac.links.length === 1 ? "Lecture Available" : "Lectures Available"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-slate-400 hidden sm:inline">
                            {isExpanded ? "Collapse" : "View"}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                              isExpanded ? "rotate-180 text-[#b31317]" : ""
                            }`}
                          />
                        </div>
                      </button>

                      {/* Accordion Content Links */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="border-t border-slate-100 px-4 py-3 md:px-6 md:py-4 bg-white"
                          >
                            <ul className="space-y-2.5">
                              {fac.links.map((link, lIdx) => (
                                <li key={link.url + lIdx}>
                                  <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-50/60 hover:bg-red-50/50 border border-slate-100 hover:border-red-200 transition-all"
                                  >
                                    <div className="flex items-start gap-2.5">
                                      <PlayCircle className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                      <span className="font-body text-sm md:text-sm font-semibold text-slate-800 group-hover:text-[#b31317] leading-relaxed">
                                        {link.title}
                                      </span>
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 group-hover:text-[#b31317] shrink-0 pt-0.5">
                                      Watch Video <ExternalLink className="w-3.5 h-3.5" />
                                    </span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EContentPage;

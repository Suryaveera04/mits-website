import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Users, ExternalLink, GraduationCap, Mail, ArrowRight, Building2, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { useFacultyData, getFacultySeniorityPriority } from "@/hooks/useFacultyData";
import { slugifyFaculty, cleanFacultyName } from "@/lib/facultySlug";
import { departmentsData } from "@/data/departmentData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DEPT_FILTERS = [
  { key: "all", label: "All Departments" },
  { key: "cse", label: "CSE" },
  { key: "ece", label: "ECE" },
  { key: "eee", label: "EEE" },
  { key: "me", label: "Mechanical" },
  { key: "ce", label: "Civil" },
  { key: "ai", label: "CSE (AI)" },
  { key: "aiml", label: "CSE (AI & ML)" },
  { key: "cseds", label: "Data Science" },
  { key: "csecs", label: "Cyber Security" },
  { key: "cst", label: "CST" },
  { key: "mca", label: "Computer Applications (MCA)" },
  { key: "mba", label: "Management Studies (MBA)" },
  { key: "bsh", label: "Basic Sciences & Humanities" },
];

const FacultyInformation = () => {
  const { facultyList, loading } = useFacultyData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");
  const [selectedDesignation, setSelectedDesignation] = useState("all");

  const filteredFaculty = useMemo(() => {
    return facultyList.filter((f) => {
      const name = (f.fullName || "").toLowerCase();
      const email = (f.email || "").toLowerCase();
      const des = (f.designation || "").toLowerCase();
      const deptName = (f.department?.name || "").toLowerCase();
      const deptCode = (f.department?.code || "").toLowerCase();

      // Search filter
      const matchesSearch =
        !searchTerm.trim() ||
        name.includes(searchTerm.toLowerCase()) ||
        email.includes(searchTerm.toLowerCase()) ||
        des.includes(searchTerm.toLowerCase()) ||
        deptName.includes(searchTerm.toLowerCase());

      // Department filter
      let matchesDept = selectedDept === "all";
      if (!matchesDept) {
        if (selectedDept === "bsh") {
          matchesDept = ["chy", "phy", "mat", "eng", "hum", "bsh"].includes(deptCode) || deptName.includes("humanities") || deptName.includes("chemistry") || deptName.includes("physics") || deptName.includes("mathematics");
        } else if (selectedDept === "me") {
          matchesDept = deptCode === "me" || deptCode === "mech" || deptName.includes("mechanical");
        } else if (selectedDept === "ce") {
          matchesDept = deptCode === "ce" || deptCode === "civil" || deptName.includes("civil");
        } else if (selectedDept === "mca") {
          matchesDept = deptCode === "mca" || deptCode === "ca" || deptName.includes("computer application");
        } else if (selectedDept === "mba") {
          matchesDept = deptCode === "mba" || deptCode === "mna" || deptName.includes("management");
        } else {
          matchesDept = deptCode === selectedDept || deptName.includes(selectedDept);
        }
      }

      // Designation filter
      let matchesDes = selectedDesignation === "all";
      if (!matchesDes) {
        if (selectedDesignation === "prof") {
          matchesDes = des.includes("professor") && !des.includes("assistant") && !des.includes("associate");
        } else if (selectedDesignation === "assoc") {
          matchesDes = des.includes("associate professor");
        } else if (selectedDesignation === "asst") {
          matchesDes = des.includes("assistant professor") || des.includes("assistant professors");
        } else if (selectedDesignation === "head") {
          matchesDes =
            des.includes("vice principal") ||
            des.includes("vice-principal") ||
            des.includes("principal") ||
            des.includes("registrar") ||
            des.includes("hod") ||
            des.includes("head") ||
            des.includes("dean") ||
            des.includes("director");
        }
      }

      return matchesSearch && matchesDept && matchesDes;
    });

    return [...list].sort((a, b) => {
      const deptA = getDeptKey(a.department?.code, a.department?.name);
      const deptB = getDeptKey(b.department?.code, b.department?.name);
      if (selectedDept === "all" && deptA !== deptB) {
        return deptA.localeCompare(deptB);
      }
      const pA = getFacultySeniorityPriority(a, deptA);
      const pB = getFacultySeniorityPriority(b, deptB);
      if (pA !== pB) return pA - pB;
      return cleanFacultyName(a.fullName).localeCompare(cleanFacultyName(b.fullName));
    });
  }, [facultyList, searchTerm, selectedDept, selectedDesignation]);

  const getDeptKey = (code?: string, name?: string) => {
    const c = (code || "").toLowerCase().trim();
    const n = (name || "").toLowerCase().trim();
    if (["chy", "phy", "mat", "eng", "hum", "bsh"].includes(c) || n.includes("humanities") || n.includes("physics") || n.includes("chemistry") || n.includes("mathematics")) return "bsh";
    if (c === "me" || c === "mech" || n.includes("mechanical")) return "me";
    if (c === "ce" || c === "civil" || n.includes("civil")) return "ce";
    if (c === "mca" || c === "ca" || n.includes("computer application")) return "mca";
    if (c === "mba" || c === "mna" || n.includes("management")) return "mba";
    if (c === "cse" || n.includes("computer science and engineering")) return "cse";
    if (c === "ece" || n.includes("electronics")) return "ece";
    if (c === "eee" || n.includes("electrical")) return "eee";
    if (c === "cst" || n.includes("technology")) return "cst";
    if (c === "ai" || n.includes("artificial intelligence")) return "ai";
    if (c === "aiml" || n.includes("machine learning")) return "aiml";
    if (c === "cseds" || n.includes("data science")) return "cseds";
    if (c === "csecs" || n.includes("cyber security")) return "csecs";
    return "cse";
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <SEO
        title="University Faculty Information – MITS Madanapalle"
        description="Comprehensive directory of distinguished faculty members, researchers, and professors across all academic departments at MITS Deemed to be University."
        canonical="/faculty-information"
      />

      {/* Hero Header */}
      <section className="pt-28 md:pt-36 pb-12 bg-gradient-to-br from-[#0f2a44] via-[#1a3a5c] to-[#0f2a44] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#caa74d_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/academics" className="hover:text-white transition-colors">Academics</Link>
            <span>/</span>
            <span className="text-[#caa74d] font-semibold">Faculty Information</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffd15c] text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-sm border border-white/15">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Directory</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
              University Faculty Information
            </h1>
            <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-2xl">
              Meet our world-class faculty of dedicated scholars, researchers, and mentors shaping the next generation of engineers, managers, and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="bg-white border-b border-slate-200 sticky top-16 md:top-[100px] z-30 shadow-xs">
        <div className="container mx-auto px-4 py-4 space-y-3">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by faculty name, designation, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#caa74d] focus:ring-2 focus:ring-[#caa74d]/20 transition-all"
              />
            </div>

            {/* Designation Dropdown */}
            <div className="flex items-center gap-2">
              <select
                value={selectedDesignation}
                onChange={(e) => setSelectedDesignation(e.target.value)}
                className="px-3 py-2.5 rounded-xl border border-slate-200 text-xs md:text-sm font-medium bg-white text-slate-700 focus:outline-hidden focus:border-[#caa74d]"
              >
                <option value="all">All Ranks</option>
                <option value="head">Leadership &amp; HoDs</option>
                <option value="prof">Professors</option>
                <option value="assoc">Associate Professors</option>
                <option value="asst">Assistant Professors</option>
              </select>

              <a
                href="https://mits.ac.in/faculty-information"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                title="Open live faculty directory on mits.ac.in"
              >
                <span>Live Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Department Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {DEPT_FILTERS.map((d) => (
              <button
                key={d.key}
                onClick={() => setSelectedDept(d.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedDept === d.key
                    ? "bg-[#0f2a44] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Directory Grid */}
      <main className="container mx-auto px-4 py-10 flex-1">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-medium text-slate-500">
            Showing <span className="font-bold text-[#0f2a44]">{filteredFaculty.length}</span> faculty members
          </p>
          {(searchTerm || selectedDept !== "all" || selectedDesignation !== "all") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedDept("all");
                setSelectedDesignation("all");
              }}
              className="text-xs text-[#b31317] font-semibold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {loading && filteredFaculty.length === 0 ? (
          <div className="py-24 text-center">
            <div className="w-10 h-10 border-4 border-[#0f2a44] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-500 font-medium">Loading faculty directory...</p>
          </div>
        ) : filteredFaculty.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto">
            <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No faculty members found</h3>
            <p className="text-sm text-slate-500 mt-1 mb-4">Try adjusting your search criteria or clearing selected filters.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedDept("all");
                setSelectedDesignation("all");
              }}
            >
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredFaculty.map((f, i) => {
              const deptKey = getDeptKey(f.department?.code, f.department?.name);
              const slug = slugifyFaculty(f.fullName);
              const profileLink = `/department/${deptKey}/faculty/${slug}`;

              return (
                <ScrollReveal key={f._id || `${f.fullName}-${i}`} delay={Math.min(0.2, (i % 8) * 0.03)}>
                  <Link
                    to={profileLink}
                    className="group bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-xl hover:border-[#caa74d]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full no-underline"
                  >
                    <div>
                      {/* Photo */}
                      <div className="w-32 h-32 mx-auto rounded-2xl bg-slate-100 overflow-hidden mb-4 border-2 border-slate-100 group-hover:border-[#caa74d]/40 transition-colors shadow-xs relative">
                        {f.profilePhoto ? (
                          <img
                            src={f.profilePhoto.startsWith("http") ? f.profilePhoto : `https://aicampus.mits.ac.in/mits-cms/backend${f.profilePhoto}`}
                            alt={f.fullName}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              (e.currentTarget as HTMLElement).style.display = "none";
                              const fallback = e.currentTarget.parentElement?.querySelector(".avatar-fallback") as HTMLElement;
                              if (fallback) fallback.style.display = "flex";
                            }}
                          />
                        ) : null}
                        <div
                          className={`avatar-fallback w-full h-full ${
                            f.profilePhoto ? "hidden" : "flex"
                          } items-center justify-center bg-gradient-to-br from-[#0f2a44]/10 to-slate-200 text-[#0f2a44] font-bold text-2xl`}
                        >
                          {f.fullName.split(" ").filter(Boolean).slice(0, 2).map((n) => n[0]).join("")}
                        </div>
                      </div>

                      {/* Name & Designation */}
                      <div className="text-center space-y-1">
                        <h3 className="font-display font-bold text-base text-[#0f2a44] group-hover:text-[#b31317] transition-colors line-clamp-1">
                          {f.fullName}
                        </h3>
                        <p className="text-xs font-semibold text-[#b31317] line-clamp-1">
                          {f.designation || "Faculty"}
                        </p>
                        <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                          {f.department?.name || f.department?.code}
                        </p>
                      </div>
                    </div>

                    {/* Footer View Profile */}
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0f2a44] group-hover:text-[#caa74d] transition-colors">
                      <span>View Profile</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default FacultyInformation;

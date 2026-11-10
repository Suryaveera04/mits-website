import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Users, ExternalLink, GraduationCap, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { useFacultyData, getFacultySeniorityPriority } from "@/hooks/useFacultyData";
import { slugifyFaculty, cleanFacultyName } from "@/lib/facultySlug";
import { getFacultyPhotoUrl } from "@/lib/facultyApi";
import { Button } from "@/components/ui/button";
import officialFacultyData from "@/data/officialFacultyList.json";

interface OfficialFacultyItem {
  sno: string;
  name: string;
  qualification: string;
  designation: string;
  department: string;
  deptKey: string;
  dbId: string | null;
  dbFullName: string;
  slug: string;
  email: string | null;
  profilePhoto: string | null;
  oldProfileUrl: string | null;
}

const DEPT_ORDER = ["ce", "me", "eee", "ece", "cse", "ai", "cseds", "csecs", "aiml", "mba", "mca", "bsh"];

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
  { key: "mca", label: "Computer Applications (MCA)" },
  { key: "mba", label: "Management Studies (MBA)" },
  { key: "bsh", label: "Basic Sciences & Humanities" },
];

const FacultyInformation = () => {
  const { facultyList, loading } = useFacultyData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");
  const [selectedDesignation, setSelectedDesignation] = useState("all");

  // Enrich the strict official roster of 189 faculties with database profiles
  const enrichedFacultyList = useMemo(() => {
    const dbMapById = new Map<string, (typeof facultyList)[0]>();
    const dbMapBySlug = new Map<string, (typeof facultyList)[0]>();

    for (const db of facultyList) {
      if (db._id) dbMapById.set(db._id, db);
      const s = slugifyFaculty(db.fullName);
      if (s) dbMapBySlug.set(s, db);
    }

    return (officialFacultyData as OfficialFacultyItem[]).map((item) => {
      const dbMatch =
        (item.dbId ? dbMapById.get(item.dbId) : null) ||
        dbMapBySlug.get(item.slug) ||
        dbMapBySlug.get(slugifyFaculty(item.name)) ||
        dbMapBySlug.get(slugifyFaculty(item.dbFullName));

      const rawPhoto = dbMatch?.profilePhoto || item.profilePhoto;
      const photoUrl = getFacultyPhotoUrl(rawPhoto) || (rawPhoto?.startsWith("http") ? rawPhoto : undefined);
      const email = dbMatch?.email || item.email || undefined;
      const cleanName = cleanFacultyName(item.name);
      const slug = item.slug || slugifyFaculty(cleanName);

      return {
        ...item,
        fullName: item.name,
        cleanName,
        slug,
        email,
        photoUrl,
        dbMatch,
      };
    });
  }, [facultyList]);

  const filteredFaculty = useMemo(() => {
    const list = enrichedFacultyList.filter((f) => {
      const name = (f.name || "").toLowerCase();
      const email = (f.email || "").toLowerCase();
      const des = (f.designation || "").toLowerCase();
      const deptName = (f.department || "").toLowerCase();
      const qual = (f.qualification || "").toLowerCase();

      // Search filter
      const matchesSearch =
        !searchTerm.trim() ||
        name.includes(searchTerm.toLowerCase()) ||
        email.includes(searchTerm.toLowerCase()) ||
        des.includes(searchTerm.toLowerCase()) ||
        deptName.includes(searchTerm.toLowerCase()) ||
        qual.includes(searchTerm.toLowerCase());

      // Department filter
      const matchesDept = selectedDept === "all" || f.deptKey === selectedDept;

      // Designation filter
      let matchesDes = selectedDesignation === "all";
      if (!matchesDes) {
        if (selectedDesignation === "prof") {
          matchesDes = des.includes("professor") && !des.includes("assistant") && !des.includes("associate");
        } else if (selectedDesignation === "assoc") {
          matchesDes = des.includes("associate professor") || des.includes("assoc. prof");
        } else if (selectedDesignation === "asst") {
          matchesDes =
            des.includes("assistant professor") ||
            des.includes("asst. prof") ||
            des.includes("assistant professors");
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
      // Group by department in official order when showing all
      if (selectedDept === "all" && a.deptKey !== b.deptKey) {
        const orderA = DEPT_ORDER.indexOf(a.deptKey);
        const orderB = DEPT_ORDER.indexOf(b.deptKey);
        const idxA = orderA === -1 ? 99 : orderA;
        const idxB = orderB === -1 ? 99 : orderB;
        if (idxA !== idxB) return idxA - idxB;
      }

      // Hierarchy: Vice Principal -> Principal -> Registrar -> HODs -> PhD Professors -> Professors -> Associate Professors -> Assistant Professors
      const pA = getFacultySeniorityPriority(
        {
          fullName: a.name,
          designation: a.designation,
          qualification: a.qualification,
          academicAdministrationRoles: a.dbMatch?.academicAdministrationRoles,
          phd: a.dbMatch?.phd,
        },
        a.deptKey
      );
      const pB = getFacultySeniorityPriority(
        {
          fullName: b.name,
          designation: b.designation,
          qualification: b.qualification,
          academicAdministrationRoles: b.dbMatch?.academicAdministrationRoles,
          phd: b.dbMatch?.phd,
        },
        b.deptKey
      );

      if (pA !== pB) return pA - pB;
      return a.cleanName.localeCompare(b.cleanName);
    });
  }, [enrichedFacultyList, searchTerm, selectedDept, selectedDesignation]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <SEO
        title="University Faculty Information – MITS Madanapalle"
        description="Comprehensive directory of distinguished faculty members, researchers, and professors across all academic departments at MITS Deemed to be University."
        canonical="/university/faculty-information"
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
              Official faculty directory of distinguished professors, researchers, and academic leaders at MITS Deemed to be University.
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
                placeholder="Search by faculty name, qualification, designation, or department..."
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
                title="Verify official faculty information on mits.ac.in"
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

        {filteredFaculty.length === 0 ? (
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
              const profileLink = `/department/${f.deptKey}/faculty/${f.slug}`;

              return (
                <ScrollReveal key={f.dbId || `${f.name}-${i}`} delay={Math.min(0.2, (i % 8) * 0.03)}>
                  <Link
                    to={profileLink}
                    className="group bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-xl hover:border-[#caa74d]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full no-underline"
                  >
                    <div>
                      {/* Photo */}
                      <div className="w-32 h-32 mx-auto rounded-2xl bg-slate-100 overflow-hidden mb-4 border-2 border-slate-100 group-hover:border-[#caa74d]/40 transition-colors shadow-xs relative">
                        {f.photoUrl ? (
                          <img
                            src={f.photoUrl}
                            alt={f.name}
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
                            f.photoUrl ? "hidden" : "flex"
                          } items-center justify-center bg-gradient-to-br from-[#0f2a44]/10 to-slate-200 text-[#0f2a44] font-bold text-2xl`}
                        >
                          {f.cleanName.split(" ").filter(Boolean).slice(0, 2).map((n) => n[0].toUpperCase()).join("")}
                        </div>
                      </div>

                      {/* Name & Designation & Department */}
                      <div className="text-center space-y-1">
                        <h3 className="font-display font-bold text-base text-[#0f2a44] group-hover:text-[#b31317] transition-colors line-clamp-1">
                          {f.name}
                        </h3>
                        {f.qualification && (
                          <p className="text-[11px] font-medium text-slate-500 line-clamp-1">
                            {f.qualification}
                          </p>
                        )}
                        <p className="text-xs font-semibold text-[#b31317] line-clamp-1">
                          {f.designation}
                        </p>
                        <p className="text-[11px] text-slate-400 font-medium line-clamp-1">
                          {f.department}
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

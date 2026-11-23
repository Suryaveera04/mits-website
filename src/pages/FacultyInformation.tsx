import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Users,
  ExternalLink,
  GraduationCap,
  ArrowRight,
  BookOpen,
  Calculator,
  Atom,
  FlaskConical,
  Landmark,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { useFacultyData } from "@/hooks/useFacultyData";
import { slugifyFaculty, cleanFacultyName, hasPhdDegree } from "@/lib/facultySlug";
import {
  getFacultyPhotoUrl,
  mapApiDeptToDeptKey,
  getBshSubDepartment,
  compareFacultyByApiOrder,
  resolveFacultyQualification,
} from "@/lib/facultyApi";
import { Button } from "@/components/ui/button";

interface EnrichedFacultyItem {
  sno: string;
  name: string;
  qualification: string;
  designation: string;
  department: string;
  deptKey: string;
  dbId: string | null;
  dbFullName: string;
  slug: string;
  email: string | undefined;
  photoUrl: string | undefined;
  profilePhoto: string | null;
  oldProfileUrl: string | null;
  dbMatch: any;
  fullName: string;
  cleanName: string;
  subDepartment?: string;
  teamDisplayOrder?: number;
  institutionCadre?: string;
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

/**
 * Constituent academic departments that form Basic Sciences & Humanities (BSH)
 */
interface BshConstituentDept {
  key: string;
  name: string;
  shortName: string;
  icon: typeof BookOpen;
  description: string;
  matcher: (f: EnrichedFacultyItem) => boolean;
}

const BSH_CONSTITUENT_DEPTS: BshConstituentDept[] = [
  {
    key: "english",
    name: "Department of English & Foreign Languages",
    shortName: "English & Foreign Languages",
    icon: BookOpen,
    description: "Faculty specializing in communicative English, linguistics, literature, and foreign languages.",
    matcher: (f) => {
      const d = ((f.subDepartment || "") + " " + (f.department || "")).toLowerCase();
      if (d.includes("humanit")) return false;
      return d.includes("english") || d.includes("efl") || d.includes("foreign language");
    },
  },
  {
    key: "humanities",
    name: "Department of Humanities",
    shortName: "Humanities",
    icon: Landmark,
    description: "Faculty specializing in humanities, social sciences, human values, and physical education.",
    matcher: (f) => {
      const d = ((f.subDepartment || "") + " " + (f.department || "")).toLowerCase();
      return d.includes("humanit");
    },
  },
  {
    key: "math",
    name: "Department of Mathematics",
    shortName: "Mathematics",
    icon: Calculator,
    description: "Faculty specializing in pure & applied mathematics, numerical analysis, and statistics.",
    matcher: (f) => {
      const d = ((f.subDepartment || "") + " " + (f.department || "")).toLowerCase();
      return d.includes("math");
    },
  },
  {
    key: "physics",
    name: "Department of Physics",
    shortName: "Physics",
    icon: Atom,
    description: "Faculty specializing in materials science, crystallography, optics, and applied physics.",
    matcher: (f) => {
      const d = ((f.subDepartment || "") + " " + (f.department || "")).toLowerCase();
      return d.includes("physic");
    },
  },
  {
    key: "chemistry",
    name: "Department of Chemistry",
    shortName: "Chemistry",
    icon: FlaskConical,
    description: "Faculty specializing in organic, inorganic, analytical, and applied chemistry.",
    matcher: (f) => {
      const d = ((f.subDepartment || "") + " " + (f.department || "")).toLowerCase();
      return d.includes("chemis");
    },
  },
];

/**
 * Standard reusable faculty card component
 */
const FacultyCard = ({
  faculty,
  index,
}: {
  faculty: EnrichedFacultyItem;
  index: number;
}) => {
  const profileLink = `/department/${faculty.deptKey}/faculty/${faculty.slug}`;

  return (
    <ScrollReveal delay={Math.min(0.2, (index % 8) * 0.03)}>
      <Link
        to={profileLink}
        className="group bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-xl hover:border-[#caa74d]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full no-underline"
      >
        <div>
          {/* Photo */}
          <div className="w-32 h-32 mx-auto rounded-2xl bg-slate-100 overflow-hidden mb-4 border-2 border-slate-100 group-hover:border-[#caa74d]/40 transition-colors shadow-xs relative">
            {faculty.photoUrl ? (
              <img
                src={faculty.photoUrl}
                alt={faculty.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const fallbackPhoto = getFacultyPhotoUrl(faculty.profilePhoto || undefined);
                  if (
                    fallbackPhoto &&
                    e.currentTarget.dataset.fallbackAttempted !== "true"
                  ) {
                    e.currentTarget.dataset.fallbackAttempted = "true";
                    e.currentTarget.src = fallbackPhoto;
                    return;
                  }
                  (e.currentTarget as HTMLElement).style.display = "none";
                  const fallback = e.currentTarget.parentElement?.querySelector(".avatar-fallback") as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
            ) : null}
            <div
              className={`avatar-fallback w-full h-full ${
                faculty.photoUrl ? "hidden" : "flex"
              } items-center justify-center bg-gradient-to-br from-[#0f2a44]/10 to-slate-200 text-[#0f2a44] font-bold text-2xl`}
            >
              {faculty.cleanName.split(" ").filter(Boolean).slice(0, 2).map((n) => n[0].toUpperCase()).join("")}
            </div>
          </div>

          {/* Name & Designation & Department */}
          <div className="text-center space-y-1">
            <h3 className="font-display font-bold text-base text-[#0f2a44] group-hover:text-[#b31317] transition-colors line-clamp-1">
              {faculty.name}
            </h3>
            {faculty.qualification && (
              <p className="text-[11px] font-medium text-slate-500 line-clamp-1">
                {faculty.qualification}
              </p>
            )}
            <p className="text-xs font-semibold text-[#b31317] line-clamp-1">
              {faculty.designation}
            </p>
            <p className="text-[11px] text-slate-400 font-medium line-clamp-1">
              {faculty.department}
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
};

const FacultyInformation = () => {
  const { facultyList } = useFacultyData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");
  const [selectedBshSubDept, setSelectedBshSubDept] = useState("all");
  const [selectedDesignation, setSelectedDesignation] = useState("all");

  // Dynamically map all active faculty directly from the database API
  const enrichedFacultyList: EnrichedFacultyItem[] = useMemo(() => {
    // Sort strictly by API order (teamDisplayOrder ascending where set, then alphabetical by name)
    const sortedList = [...facultyList].sort(compareFacultyByApiOrder);

    return sortedList.map((f, index) => {
      const cleanName = cleanFacultyName(f.fullName);
      const slug = slugifyFaculty(cleanName);
      const deptKey = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
      const subDept = deptKey === "bsh" ? getBshSubDepartment(f.department?.code, f.department?.name) : undefined;
      const qualification = resolveFacultyQualification(f);
      const photoUrl = getFacultyPhotoUrl(f.profilePhoto);

      return {
        sno: String(index + 1),
        name: cleanName,
        fullName: cleanName,
        cleanName,
        slug,
        qualification,
        designation: f.designation,
        department: subDept || f.department?.name || deptKey.toUpperCase(),
        deptKey,
        dbId: f._id,
        dbFullName: f.fullName,
        email: f.email || undefined,
        photoUrl,
        profilePhoto: f.profilePhoto || null,
        oldProfileUrl: null,
        dbMatch: f,
        subDepartment: subDept,
        teamDisplayOrder: f.teamDisplayOrder,
        institutionCadre: f.institutionCadre,
      };
    });
  }, [facultyList]);

  const filteredFaculty = useMemo(() => {
    const list = enrichedFacultyList.filter((f) => {
      // In University Faculty Information, strictly include only University faculty.
      // Exclude faculty whose status is set to 'Autonomous'.
      const isAutonomous = (f.institutionCadre || "").trim().toLowerCase() === "autonomous";
      if (isAutonomous) return false;

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

      return compareFacultyByApiOrder(a, b);
    });
  }, [enrichedFacultyList, searchTerm, selectedDept, selectedDesignation]);

  // Dynamic counts for BSH constituent departments based on currently applied search & rank filters
  const bshConstituentCounts = useMemo(() => {
    const bshMembers = filteredFaculty.filter((f) => f.deptKey === "bsh");
    const counts: Record<string, number> = { total: bshMembers.length };
    for (const sub of BSH_CONSTITUENT_DEPTS) {
      counts[sub.key] = bshMembers.filter(sub.matcher).length;
    }
    return counts;
  }, [filteredFaculty]);

  const deptSections = useMemo(() => {
    if (selectedDept !== "all") {
      const deptFilter = DEPT_FILTERS.find((d) => d.key === selectedDept);
      return [
        {
          key: selectedDept,
          name: deptFilter?.label || selectedDept.toUpperCase(),
          members: filteredFaculty,
        },
      ];
    }

    const sections: { key: string; name: string; members: typeof filteredFaculty }[] = [];
    for (const dKey of DEPT_ORDER) {
      const members = filteredFaculty.filter((f) => f.deptKey === dKey);
      if (members.length > 0) {
        const deptFilter = DEPT_FILTERS.find((d) => d.key === dKey);
        sections.push({
          key: dKey,
          name: deptFilter?.label || dKey.toUpperCase(),
          members,
        });
      }
    }
    return sections;
  }, [filteredFaculty, selectedDept]);

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
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white" style={{ fontFamily: "var(--font-display)" }}>
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
                onClick={() => {
                  setSelectedDept(d.key);
                  if (d.key !== "bsh") {
                    setSelectedBshSubDept("all");
                  }
                }}
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

          {/* BSH Constituent Sub-Department Tabs (Visible when BSH is selected) */}
          {selectedDept === "bsh" && (
            <div className="flex items-center gap-1.5 overflow-x-auto pt-2.5 pb-1 border-t border-slate-100 no-scrollbar">
              <span className="text-xs font-semibold text-slate-400 whitespace-nowrap mr-1">
                Discipline:
              </span>
              <button
                onClick={() => setSelectedBshSubDept("all")}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedBshSubDept === "all"
                    ? "bg-[#caa74d] text-[#0f2a44] shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                All {BSH_CONSTITUENT_DEPTS.length} Departments ({bshConstituentCounts.total})
              </button>
              {BSH_CONSTITUENT_DEPTS.map((sub) => {
                const count = bshConstituentCounts[sub.key] || 0;
                return (
                  <button
                    key={sub.key}
                    onClick={() => setSelectedBshSubDept(sub.key)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedBshSubDept === sub.key
                        ? "bg-[#caa74d] text-[#0f2a44] shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {sub.shortName} ({count})
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Faculty Directory Grid */}
      <main className="container mx-auto px-4 py-10 flex-1">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-medium text-slate-500">
            Showing <span className="font-bold text-[#0f2a44]">{filteredFaculty.length}</span> faculty members
          </p>
          {(searchTerm || selectedDept !== "all" || selectedDesignation !== "all" || selectedBshSubDept !== "all") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedDept("all");
                setSelectedDesignation("all");
                setSelectedBshSubDept("all");
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
                setSelectedBshSubDept("all");
              }}
            >
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div
            key={`${selectedDept}-${selectedBshSubDept}-${selectedDesignation}-${searchTerm ? "search" : "all"}`}
            className="space-y-14"
          >
            {deptSections.map((section) => {
              // Specialized rendering for BSH: Segregated into the 4 constituent academic departments
              if (section.key === "bsh") {
                const visibleConstituents = BSH_CONSTITUENT_DEPTS.map((c) => {
                  const members = section.members.filter(c.matcher);
                  return { ...c, members };
                }).filter((c) => {
                  if (c.members.length === 0) return false;
                  if (selectedDept === "bsh" && selectedBshSubDept !== "all") {
                    return c.key === selectedBshSubDept;
                  }
                  return true;
                });

                const otherMembers = section.members.filter(
                  (f) => !BSH_CONSTITUENT_DEPTS.some((c) => c.matcher(f))
                );

                if (visibleConstituents.length === 0 && otherMembers.length === 0) {
                  return null;
                }

                return (
                  <section key={section.key} className="space-y-8">
                    {/* BSH Overall Department Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b-2 border-slate-200">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="w-3.5 h-3.5 rounded-full bg-[#b31317] shrink-0" />
                          <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] font-display">
                            Department of Basic Sciences &amp; Humanities
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-slate-500 mt-1 pl-6">
                          Faculty organized into 5 constituent academic disciplines: English &amp; Foreign Languages, Humanities, Mathematics, Physics, and Chemistry.
                        </p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs font-bold text-[#b31317] bg-[#b31317]/10 px-3 py-1 rounded-full">
                          {section.members.length} {section.members.length === 1 ? "Member" : "Members"} Total
                        </span>
                        <Link
                          to="/department/bsh"
                          className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                        >
                          <span>Explore Department</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Constituent Sub-Departments */}
                    <div className="space-y-10">
                      {visibleConstituents.map((constituent) => {
                        const IconComponent = constituent.icon;
                        return (
                          <div
                            key={constituent.key}
                            className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200 shadow-xs space-y-6"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-[#0f2a44]/5 border border-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44] shrink-0">
                                  <IconComponent className="w-5 h-5 text-[#0f2a44]" />
                                </div>
                                <div>
                                  <h3 className="text-lg md:text-xl font-bold text-[#0f2a44] font-display">
                                    {constituent.name}
                                  </h3>
                                  <p className="text-xs text-slate-500 hidden sm:block">
                                    {constituent.description}
                                  </p>
                                </div>
                              </div>
                              <span className="text-xs font-bold text-[#0f2a44] bg-slate-100 border border-slate-200 px-3 py-1 rounded-full shrink-0 self-start sm:self-auto">
                                {constituent.members.length} {constituent.members.length === 1 ? "Faculty" : "Faculties"}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                              {constituent.members.map((f, i) => (
                                <FacultyCard
                                  key={`bsh-${constituent.key}-${f.sno}-${f.slug || f.name}`}
                                  faculty={f}
                                  index={i}
                                />
                              ))}
                            </div>
                          </div>
                        );
                      })}

                      {otherMembers.length > 0 && (
                        <div className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200 shadow-xs space-y-6">
                          <h3 className="text-lg font-bold text-[#0f2a44]">
                            Other Basic Sciences &amp; Humanities Faculty
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {otherMembers.map((f, i) => (
                              <FacultyCard
                                key={`bsh-other-${f.sno}-${f.slug || f.name}`}
                                faculty={f}
                                index={i}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                );
              }

              // Standard department rendering for non-BSH departments
              return (
                <section key={section.key} className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b-2 border-slate-200">
                    <div className="flex items-center gap-3">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#b31317] shrink-0" />
                      <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] font-display">
                        {section.name.startsWith("Department") || section.name.startsWith("Basic") ? section.name : `Department of ${section.name}`}
                      </h2>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#b31317] bg-[#b31317]/10 px-3 py-1 rounded-full">
                        {section.members.length} {section.members.length === 1 ? "Member" : "Members"}
                      </span>
                      <Link
                        to={`/department/${section.key}`}
                        className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                      >
                        <span>Explore Department</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {section.members.map((f, i) => (
                      <FacultyCard
                        key={`${section.key}-${f.sno}-${f.slug || f.name}`}
                        faculty={f}
                        index={i}
                      />
                    ))}
                  </div>
                </section>
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

/**
 * Madanapalle Institute of Technology & Science (MITS) - Department Details Rendering Page
 * 
 * ============================================================================
 * HOW FACULTY DETAILS ARE FETCHED AND DISPLAYED / HOW TO CHANGE LAYOUT
 * ============================================================================
 * 
 * 1. HOW FACULTY ARE RENDERED:
 *    - The page renders the department layout with multiple tabs (About, Faculty, Labs, etc.).
 *    - Under the "Faculty" tab, the code iterates over the `department.faculty` array sourced
 *      from `src/data/departmentData.ts`.
 *    - The faculty list displays the members in the EXACT index order specified in the data file.
 * 
 * 2. HOW TO MODIFY CARD LAYOUT:
 *    - Search for the grid mapping that renders the faculty cards (look for `department.faculty.map`).
 *    - To change card size or column count, modify the tailwind grid classes on the container
 *      (e.g., `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` or `lg:grid-cols-4`).
 *    - To change border colors, background colors, card paddings, or font sizes, edit the tailwind
 *      classes of the card wrapper div.
 * 
 * 3. HOW TO MODIFY FILTERING / SORTING:
 *    - By default, the faculty members are displayed in the exact order they are listed in the database.
 *    - To sort them alphabetically, sort the list before mapping:
 *      `[...department.faculty].sort((a, b) => a.name.localeCompare(b.name)).map(...)`
 *    - To filter them (e.g., show HOD at the top), the data file already places HOD as the first item,
 *      which is the best practice.
 */
import { useState, useEffect } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getDepartmentByKey } from "@/data/departmentData";
import { Card, CardContent } from "@/components/ui/card";
import InlineFacultyProfile from "@/components/InlineFacultyProfile";
import { getFacultyProfile, type FacultyProfile } from "@/data/facultyProfiles";
import { slugifyFaculty } from "@/lib/facultySlug";
import { useDeptCMSData, type CMSMoU, type CMSAchievement, type CMSPatent, type CMSPublication, type CMSPlacement, type CMSProject } from "@/hooks/useDeptCMSData";
import { useFacultyData } from "@/hooks/useFacultyData";
import EventDetailModal from "@/components/EventDetailModal";
import MouDetailModal from "@/components/MouDetailModal";
import AchievementDetailModal from "@/components/AchievementDetailModal";
import PatentDetailModal from "@/components/PatentDetailModal";
import PublicationDetailModal from "@/components/PublicationDetailModal";
import PlacementDetailModal from "@/components/PlacementDetailModal";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import {
  Users, Award, FlaskConical, FileText, BookOpen, Calendar, Handshake, Briefcase, FolderOpen, GraduationCap, Building2, ChevronRight, Eye, Target, Trophy, Lightbulb, Mail, Phone, ExternalLink, Search, Filter, Sparkles, RefreshCw
} from "lucide-react";

const sidebarItems = [
  { id: "about", label: "About Department", icon: Building2 },
  { id: "faculty", label: "People / Faculty", icon: Users },
  { id: "achievements", label: "Achievements", icon: Award },
  { id: "facilities", label: "Facilities", icon: FlaskConical },
  { id: "patents", label: "Patents", icon: FileText },
  { id: "publications", label: "Publications", icon: BookOpen },
  { id: "consultancy", label: "Consultancy", icon: Briefcase },
  { id: "events", label: "Events", icon: Calendar },
  { id: "mou", label: "MoU", icon: Handshake },
  { id: "placement", label: "Placement / Internship", icon: Trophy },
  { id: "projects", label: "Student Projects", icon: FolderOpen },
  { id: "subjects", label: "Subjects", icon: GraduationCap },
];

const DepartmentPage = () => {
  const { deptKey } = useParams<{ deptKey: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<FacultyProfile | null>(null);
  const [facultySearch, setFacultySearch] = useState("");
  const [designationFilter, setDesignationFilter] = useState("all");
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [selectedMou, setSelectedMou] = useState<CMSMoU | null>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<CMSAchievement | null>(null);
  const [selectedPatent, setSelectedPatent] = useState<CMSPatent | null>(null);
  const [selectedPublication, setSelectedPublication] = useState<CMSPublication | null>(null);
  const [selectedPlacement, setSelectedPlacement] = useState<CMSPlacement | null>(null);
  const [selectedProject, setSelectedProject] = useState<CMSProject | null>(null);
  const dept = getDepartmentByKey(deptKey || "");
  const { data: cms, loading: cmsLoading } = useDeptCMSData(deptKey || "");
  const { getFacultyByDept, getFacultyProfileBySlug, getDepartmentHod, loading: facultyLoading, refresh: refreshFaculty } = useFacultyData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSelectedProfile(null);

    if (!dept && deptKey) {
      navigate('/departments', { replace: true });
      return;
    }
    const pathParts = location.pathname.split('/');
    const lastPart = pathParts[pathParts.length - 1];
    if (lastPart && sidebarItems.some(item => item.id === lastPart)) {
      setActiveSection(lastPart);
    } else if (location.hash) {
      const hash = location.hash.replace('#', '');
      if (hash && sidebarItems.some(item => item.id === hash)) {
        setActiveSection(hash);
      }
    }
    // Deep-link: ?faculty=Name auto-opens that faculty's profile
    const params = new URLSearchParams(location.search);
    const facultyName = params.get('faculty');
    if (facultyName && deptKey) {
      const profile = getFacultyProfileBySlug(deptKey, slugifyFaculty(facultyName)) || getFacultyProfile(deptKey, facultyName);
      if (profile) {
        setActiveSection('faculty');
        setSelectedProfile(profile);
      }
    }
  }, [location.pathname, location.hash, location.search, deptKey, dept, navigate, getFacultyProfileBySlug]);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const basePath = `/department/${deptKey}`;
    const newPath = sectionId === "about" ? basePath : `${basePath}/${sectionId}`;
    navigate(newPath, { replace: true });
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  useEffect(() => {
    if (!dept) {
      navigate('/departments', { replace: true });
    }
  }, [dept]);

  if (!dept) {
    return null;
  }

  const splitTitle = (name: string) => {
    const match = name.match(/^(.*?)(\s*\(.*\))$/);
    if (!match) {
      return { main: name, sub: "" };
    }
    return { main: match[1].trim(), sub: match[2].trim() };
  };

  const title = splitTitle(dept.name);

  const bshGroupOrder = [
    "Department of English & Foreign Languages",
    "Department of Mathematics",
    "Department of Physics",
    "Department of Chemistry",
    "Department of Humanities",
  ];

  const bshFacultyGroupByName: Record<string, string> = {
    "Dr. Prageetha G Raju": "Department of Humanities",
    "Dr. Sudhakar Beedam": "Department of English & Foreign Languages",
    "Dr. S. Shanmuga Priya": "Department of English & Foreign Languages",
    "Dr. R. Saravana": "Department of Mathematics",
    "Dr. K. V. Narasimha Murthy": "Department of Mathematics",
    "Dr. M. Chandra Sekhar": "Department of Physics",
    "Dr. Renjith Bhaskaran": "Department of Chemistry",
  };

  const dynamicHod = getDepartmentHod(deptKey || "");
  const hod = dynamicHod || dept.hod;

  const liveFaculty = getFacultyByDept(deptKey || "");
  const effectiveFaculty =
    deptKey === "aiml"
      ? liveFaculty
      : liveFaculty.length > 0
      ? liveFaculty
      : dept.faculty || [];

  const filteredFaculty = effectiveFaculty.filter((f) => {
    const q = facultySearch.toLowerCase().trim();
    const matchesSearch =
      !q ||
      f.name.toLowerCase().includes(q) ||
      f.designation.toLowerCase().includes(q) ||
      f.qualification.toLowerCase().includes(q) ||
      (f.email && f.email.toLowerCase().includes(q)) ||
      (f.profile?.researchAreas && f.profile.researchAreas.toLowerCase().includes(q));

    const des = f.designation.toLowerCase();
    let matchesDesignation = true;
    if (designationFilter === "professor") {
      matchesDesignation = des.includes("professor") && !des.includes("assistant") && !des.includes("associate");
    } else if (designationFilter === "associate") {
      matchesDesignation = des.includes("associate professor");
    } else if (designationFilter === "assistant") {
      matchesDesignation = des.includes("assistant professor");
    } else if (designationFilter === "hod") {
      matchesDesignation = des.includes("hod") || des.includes("head");
    }

    return matchesSearch && matchesDesignation;
  });

  const groupedBshFaculty =
    deptKey === "bsh"
      ? filteredFaculty.reduce((acc, member) => {
          const group = member.subDepartment || bshFacultyGroupByName[member.name] || "Department of Basic Sciences";
          if (!acc[group]) {
            acc[group] = [];
          }
          acc[group].push(member);
          return acc;
        }, {} as Record<string, typeof filteredFaculty>)
      : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title={`${dept.name} Department – MITS Madanapalle`}
        description={`${dept.shortName} Department at MITS Madanapalle – ${dept.about.slice(0, 120).trim()}...`}
        canonical={`/department/${deptKey}`}
      />

      <div className="relative h-[240px] sm:h-[300px] md:h-[380px] overflow-hidden">
        <img src={dept.bannerImage} alt={dept.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 pt-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white drop-shadow-2xl" style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block">{title.main}</span>
              {title.sub && <span className="block">{title.sub}</span>}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 mt-2 text-base md:text-lg"
            >
              Established {dept.established} | {dept.nbaAccredited ? "NBA Accredited" : "MITS Deemed to be University"}
            </motion.p>
            <div className="w-20 h-0.5 bg-accent mx-auto mt-3 rounded-full" />
          </div>
        </div>
        <div className="absolute bottom-4 left-6">
          <nav className="flex items-center gap-1.5 text-sm">
            <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
            <span className="text-white/50">›</span>
            <Link to="/departments" className="text-white/70 hover:text-white transition-colors">Departments</Link>
            <span className="text-white/50">›</span>
            <span className="text-white font-semibold">{dept.shortName}</span>
          </nav>
        </div>
      </div>

      <div className="xl:hidden sticky top-16 md:top-[100px] z-40 bg-card border-b border-border shadow-sm">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-secondary"
        >
          <span className="flex items-center gap-2">
            {(() => {
              const activeItem = sidebarItems.find(i => i.id === activeSection);
              if (activeItem) {
                const Icon = activeItem.icon;
                return <Icon className="w-4 h-4 text-primary" />;
              }
              return null;
            })()}
            {sidebarItems.find(i => i.id === activeSection)?.label}
          </span>
          <ChevronRight className={`w-4 h-4 transition-transform ${mobileMenuOpen ? "rotate-90" : ""}`} />
        </button>
        {mobileMenuOpen && (
          <div className="bg-card border-t border-border max-h-[50vh] overflow-y-auto">
            {sidebarItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                  activeSection === item.id ? "text-primary bg-primary/5 font-semibold" : "text-muted-foreground hover:text-primary"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {!selectedProfile && (
          <aside className="hidden xl:block w-64 shrink-0">
            <div className="sticky top-[140px]">
              <nav className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
                <div className="bg-primary px-4 py-3">
                  <h3 className="text-primary-foreground font-bold text-sm">Quick Navigation</h3>
                </div>
                {sidebarItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleSectionChange(item.id)}
                    className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-all duration-200 border-l-3 ${
                      activeSection === item.id
                        ? "text-primary bg-primary/5 font-semibold border-l-primary border-l-[3px]"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5 border-l-transparent border-l-[3px]"
                    }`}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    <span className="text-left">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>
          )}

          <main id="department-content" className="flex-1 min-w-0 space-y-10">
            {activeSection === "about" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-secondary mb-4" style={{ fontFamily: "var(--font-display)" }}>About Us</h2>
                    <p className="text-muted-foreground leading-relaxed">{dept.about}</p>
                  </div>
                  <div>
                    <Card className="overflow-hidden border-2 border-primary/10 group hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
                      <div className="bg-gradient-to-br from-primary to-primary/80 p-4 text-center">
                        <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center overflow-hidden mb-2 ring-2 ring-white/30">
                          {hod.image ? (
                            <img
                              src={hod.image}
                              alt={hod.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                if (dept.hod?.image && (e.currentTarget as HTMLImageElement).src !== dept.hod.image) {
                                  (e.currentTarget as HTMLImageElement).src = dept.hod.image;
                                }
                              }}
                            />
                          ) : (
                            <Users className="w-8 h-8 text-primary-foreground" />
                          )}
                        </div>
                        <h4 className="text-primary-foreground font-bold text-sm">{hod.name}</h4>
                        <p className="text-primary-foreground/80 text-xs mt-0.5">{hod.designation}</p>
                        {hod.qualification && (
                          <p className="text-primary-foreground/60 text-xs mt-0.5">{hod.qualification}</p>
                        )}
                      </div>
                      <CardContent className="p-3 text-center bg-card">
                        <span className="inline-block text-xs font-semibold text-accent-foreground bg-accent/20 px-2.5 py-1 rounded-full mb-2">
                          Head of Department
                        </span>
                        {hod.name && (
                          <div>
                            <Link
                              to={hod.profileUrl || `/department/${deptKey}/faculty/${slugifyFaculty(hod.name)}`}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                            >
                              <span>View Profile</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <Card className="h-full border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Eye className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-lg text-secondary">Vision</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{dept.vision}</p>
                    </CardContent>
                  </Card>
                  <Card className="h-full border-l-4 border-l-accent">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-accent-foreground" />
                        <h3 className="font-bold text-lg text-secondary">Mission</h3>
                      </div>
                      <ul className="space-y-2">
                        {dept.mission.map((m, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex gap-2">
                            <span className="text-primary font-bold shrink-0">M{i + 1}:</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-secondary mb-4" style={{ fontFamily: "var(--font-display)" }}>Key Achievements</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Consultancy", value: dept.achievements.consultancyAmount, icon: Briefcase },
                      { label: "Research Projects", value: dept.achievements.researchProjects, icon: FlaskConical },
                      { label: "Patents", value: dept.achievements.patents, icon: FileText },
                      { label: "Publications", value: dept.achievements.publications, icon: BookOpen },
                    ].map((stat) => (
                      <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-4">
                          <stat.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                          <p className="text-xl md:text-2xl font-bold text-secondary">{stat.value}</p>
                          <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="w-5 h-5 text-accent-foreground" />
                        <h3 className="font-bold text-lg text-secondary">Teaching Approach</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{dept.teachingApproach.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {dept.teachingApproach.points.map((p, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-3 h-3 text-primary shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-secondary mb-3">Courses Offered</h3>
                      <ul className="space-y-2">
                        {dept.courses.map((c, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-secondary mb-3">Contact Us</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="w-4 h-4 text-primary shrink-0" />
                          <a href={`mailto:${dept.contactInfo.email}`} className="hover:text-primary transition-colors">{dept.contactInfo.email}</a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="w-4 h-4 text-primary shrink-0" />
                          {dept.contactInfo.phone}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Building2 className="w-4 h-4 text-primary shrink-0" />
                          MITS, Madanapalle, Andhra Pradesh
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}

            {activeSection === "faculty" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {selectedProfile ? (
                  <InlineFacultyProfile 
                    profile={selectedProfile}
                    onBack={() => setSelectedProfile(null)}
                  />
                ) : (
                  <>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-border/60">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-secondary flex items-center gap-3" style={{ fontFamily: "var(--font-display)" }}>
                          People / Faculty
                          <span className="text-xs md:text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {filteredFaculty.length} {filteredFaculty.length === 1 ? "Member" : "Members"}
                          </span>
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1">
                          Distinguished faculty and researchers in the Department of {dept.shortName}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => refreshFaculty()}
                          disabled={facultyLoading}
                          title="Refresh faculty list from database"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors disabled:opacity-50"
                        >
                          <RefreshCw className={`w-3.5 h-3.5 ${facultyLoading ? "animate-spin text-primary" : ""}`} />
                          <span className="hidden sm:inline">Sync Data</span>
                        </button>
                      </div>
                    </div>

                    {/* Search & Filter Toolbar */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 mb-8 space-y-3">
                      <div className="relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={facultySearch}
                          onChange={(e) => setFacultySearch(e.target.value)}
                          placeholder="Search faculty by name, designation, specialization, email..."
                          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                        {facultySearch && (
                          <button
                            onClick={() => setFacultySearch("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded"
                          >
                            Clear
                          </button>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 mr-1">
                          <Filter className="w-3 h-3" /> Filter:
                        </span>
                        {[
                          { id: "all", label: "All" },
                          { id: "hod", label: "HOD / Leadership" },
                          { id: "professor", label: "Professors" },
                          { id: "associate", label: "Associate Prof." },
                          { id: "assistant", label: "Assistant Prof." },
                        ].map((chip) => (
                          <button
                            key={chip.id}
                            onClick={() => setDesignationFilter(chip.id)}
                            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                              designationFilter === chip.id
                                ? "bg-primary text-white shadow-sm"
                                : "bg-white text-slate-600 border border-slate-200 hover:border-primary/40 hover:text-primary"
                            }`}
                          >
                            {chip.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {filteredFaculty.length === 0 ? (
                      <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                        <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                        <h4 className="font-bold text-slate-700 text-lg">
                          {facultySearch || designationFilter !== "all"
                            ? "No Matching Faculty Found"
                            : "Faculty Roster Updating"}
                        </h4>
                        <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                          {facultySearch || designationFilter !== "all"
                            ? `No profiles matched "${facultySearch || designationFilter}". Try adjusting your search term or reset filters.`
                            : "Faculty details for this department are being compiled and updated from the university database."}
                        </p>
                        {(facultySearch || designationFilter !== "all") && (
                          <button
                            onClick={() => { setFacultySearch(""); setDesignationFilter("all"); }}
                            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 hover:bg-primary hover:text-white px-4 py-2 rounded-lg transition-colors"
                          >
                            Reset Filters
                          </button>
                        )}
                      </div>
                    ) : (deptKey === "bsh" && groupedBshFaculty) ? (
                      <div className="space-y-10">
                        {[...bshGroupOrder, "Department of Basic Sciences", "Other"].map((groupTitle) => {
                          const members = groupedBshFaculty[groupTitle] || [];
                          if (members.length === 0) {
                            return null;
                          }
                          return (
                            <section key={groupTitle} className="bg-slate-50/50 p-6 rounded-2xl border border-slate-200/60">
                              <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-slate-200">
                                <h3 className="text-xl md:text-2xl font-bold text-secondary flex items-center gap-2.5" style={{ fontFamily: "var(--font-display)" }}>
                                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                                  {groupTitle}
                                </h3>
                                <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                                  {members.length} {members.length === 1 ? "Faculty" : "Faculties"}
                                </span>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {members.map((f, i) => (
                                  <Link
                                    key={`${groupTitle}-${i}`}
                                    to={`/department/${deptKey}/faculty/${slugifyFaculty(f.name)}`}
                                    className="group relative bg-white border border-slate-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 flex flex-col items-center text-center cursor-pointer no-underline"
                                  >
                                    <div className="w-36 h-36 sm:w-40 sm:h-40 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center mb-4 overflow-hidden border-2 border-transparent group-hover:border-primary/20 transition-colors shadow-sm relative">
                                      {f.image ? (
                                        <img
                                          src={f.image}
                                          alt={f.name}
                                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                          onError={(e) => {
                                            (e.currentTarget as HTMLElement).style.display = "none";
                                            const fallback = (e.currentTarget.parentElement?.querySelector(".avatar-fallback") as HTMLElement);
                                            if (fallback) fallback.style.display = "flex";
                                          }}
                                        />
                                      ) : null}
                                      <div className={`avatar-fallback w-full h-full ${f.image ? "hidden" : "flex"} items-center justify-center bg-gradient-to-br from-primary/10 to-slate-100 text-primary font-bold text-2xl`}>
                                        {f.name.split(" ").filter(Boolean).slice(0, 2).map((n) => n[0]).join("")}
                                      </div>
                                    </div>
                                    <h4 className="font-extrabold text-secondary mb-1 line-clamp-1" style={{ fontFamily: "var(--font-display)" }}>{f.name}</h4>
                                    <p className="text-[13px] text-primary font-semibold mb-0.5">{f.designation}</p>
                                    <p className="text-[11px] text-slate-500 mb-3 uppercase tracking-wider">{f.qualification}</p>
                                    <div className="mt-auto pt-4 w-full flex justify-center border-t border-slate-50">
                                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary bg-primary/5 px-4 py-1.5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors uppercase tracking-widest">
                                        View Profile <ChevronRight className="w-3 h-3" />
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </section>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredFaculty.map((f, i) => (
                          <Link
                            key={i}
                            to={`/department/${deptKey}/faculty/${slugifyFaculty(f.name)}`}
                            className="group relative bg-white border border-slate-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 flex flex-col items-center text-center cursor-pointer no-underline"
                          >
                            <div className="w-36 h-36 sm:w-40 sm:h-40 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center mb-4 overflow-hidden border-2 border-transparent group-hover:border-primary/20 transition-colors shadow-sm relative">
                              {f.image ? (
                                <img
                                  src={f.image}
                                  alt={f.name}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                  onError={(e) => {
                                    (e.currentTarget as HTMLElement).style.display = "none";
                                    const fallback = (e.currentTarget.parentElement?.querySelector(".avatar-fallback") as HTMLElement);
                                    if (fallback) fallback.style.display = "flex";
                                  }}
                                />
                              ) : null}
                              <div className={`avatar-fallback w-full h-full ${f.image ? "hidden" : "flex"} items-center justify-center bg-gradient-to-br from-primary/10 to-slate-100 text-primary font-bold text-2xl`}>
                                {f.name.split(" ").filter(Boolean).slice(0, 2).map((n) => n[0]).join("")}
                              </div>
                            </div>
                            <h4 className="font-extrabold text-secondary mb-1 line-clamp-1" style={{ fontFamily: "var(--font-display)" }}>{f.name}</h4>
                            <p className="text-[13px] text-primary font-semibold mb-0.5">{f.designation}</p>
                            <p className="text-[11px] text-slate-500 mb-3 uppercase tracking-wider">{f.qualification}</p>
                            <div className="mt-auto pt-4 w-full flex justify-center border-t border-slate-50">
                              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary bg-primary/5 px-4 py-1.5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors uppercase tracking-widest">
                                View Profile <ChevronRight className="w-3 h-3" />
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            )}

            {activeSection === "achievements" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Achievements</h2>
                {(() => {
                  const facultyAch = (!cmsLoading && cms.achievements.length > 0)
                    ? cms.achievements.filter(a => a.type === "faculty")
                    : dept.detailedAchievements.filter(a => a.type === "faculty");
                  const studentAch = (!cmsLoading && cms.achievements.length > 0)
                    ? cms.achievements.filter(a => a.type === "student")
                    : dept.detailedAchievements.filter(a => a.type === "student");
                  if (facultyAch.length === 0 && studentAch.length === 0) {
                    return <p className="text-muted-foreground text-sm py-8">No achievement records available at this time.</p>;
                  }
                  return (
                    <div className="space-y-4">
                      {facultyAch.length > 0 && (
                        <>
                          <h3 className="font-semibold text-primary">Faculty Achievements</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                        {facultyAch.map((a, i) => {
                          const isCMS = 'id' in a && typeof a.id === 'number';
                          return (
                            <Card key={i} onClick={() => isCMS && setSelectedAchievement(a as CMSAchievement)}
                              className={`border-l-4 border-l-primary transition-all ${
                                isCMS ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer" : "hover:shadow-md"
                              }`}>
                              <CardContent className="p-4">
                                <h4 className="font-semibold text-sm text-secondary">{a.title}</h4>
                                {a.description && <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{a.description}</p>}
                                {'name' in a && a.name && <p className="text-sm text-primary font-medium mt-1">{a.name}</p>}
                                {isCMS && <p className="text-sm text-primary font-medium mt-2 flex items-center gap-1"><ChevronRight className="w-3 h-3" />View Details</p>}
                                {'external_link' in a && a.external_link && !isCMS && (
                                  <a href={a.external_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1">
                                    <ExternalLink className="w-3 h-3" />View
                                  </a>
                                )}
                              </CardContent>
                            </Card>
                          );
                        })}
                          </div>
                        </>
                      )}
                      {studentAch.length > 0 && (
                        <>
                          <h3 className="font-semibold text-accent-foreground mt-6">Student Achievements</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                        {studentAch.map((a, i) => {
                          const isCMS = 'id' in a && typeof a.id === 'number';
                          return (
                            <Card key={i} onClick={() => isCMS && setSelectedAchievement(a as CMSAchievement)}
                              className={`border-l-4 border-l-accent transition-all ${
                                isCMS ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer" : "hover:shadow-md"
                              }`}>
                              <CardContent className="p-4">
                                <h4 className="font-semibold text-sm text-secondary">{a.title}</h4>
                                {a.description && <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{a.description}</p>}
                                {'name' in a && a.name && <p className="text-sm text-primary font-medium mt-1">{a.name}</p>}
                                {isCMS && <p className="text-sm text-primary font-medium mt-2 flex items-center gap-1"><ChevronRight className="w-3 h-3" />View Details</p>}
                              </CardContent>
                            </Card>
                          );
                        })}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })()}
              </motion.div>
            )}

            {activeSection === "facilities" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Facilities</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {dept.facilities.map((f, i) => (
                    <Card key={i} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <FlaskConical className="w-5 h-5 text-primary" />
                          <h4 className="font-bold text-secondary">{f.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{f.description}</p>
                        {f.equipment && f.equipment.length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-secondary mb-1">Key Equipment:</p>
                            <div className="flex flex-wrap gap-1.5">
                              {f.equipment.map((e, j) => (
                                <span key={j} className="text-sm bg-muted px-2 py-0.5 rounded-full text-muted-foreground">{e}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "patents" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Patents</h2>
                {(() => {
                  const patents = (!cmsLoading && cms.patents.length > 0) ? cms.patents : dept.patents;
                  if (patents.length === 0) return <p className="text-muted-foreground text-sm">No patent records available.</p>;
                  return (
                    <div className="space-y-3">
                      {(["Granted", "Published", "Filed"] as const).map(status => {
                        const filtered = patents.filter(p => p.status === status);
                        if (filtered.length === 0) return null;
                        return (
                          <div key={status}>
                            <h3 className="font-semibold text-sm text-primary mb-2">{status} ({filtered.length})</h3>
                            <div className="space-y-2">
                              {filtered.map((p, i) => {
                                const isCMS = 'id' in p && typeof p.id === 'number';
                                return (
                                  <Card key={i} onClick={() => isCMS && setSelectedPatent(p as CMSPatent)}
                                    className={`transition-all ${
                                      isCMS ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer" : "hover:shadow-md"
                                    }`}>
                                    <CardContent className="p-3 flex items-center justify-between">
                                      <div className="flex-1 min-w-0 pr-3">
                                        <p className="text-sm font-medium text-secondary">{p.title}</p>
                                        {'inventors' in p && (p as Record<string, unknown>).inventors && <p className="text-sm text-muted-foreground mt-0.5">Inventors: {String((p as Record<string, unknown>).inventors)}</p>}
                                        {p.year && <p className="text-sm text-muted-foreground">Year: {p.year}</p>}
                                        {isCMS && <p className="text-sm text-primary font-medium mt-1 flex items-center gap-1"><ChevronRight className="w-3 h-3" />View Details</p>}
                                        {'external_link' in p && (p as Record<string, unknown>).external_link && !isCMS && (
                                          <a href={String((p as Record<string, unknown>).external_link)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1">
                                            <ExternalLink className="w-3 h-3" />View
                                          </a>
                                        )}
                                      </div>
                                      <span className={`shrink-0 text-sm px-2 py-1 rounded-full font-medium ${status === "Granted" ? "bg-green-100 text-green-700" : status === "Published" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"}`}>{status}</span>
                                    </CardContent>
                                  </Card>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </motion.div>
            )}

                        {activeSection === "publications" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Publications</h2>
                {(() => {
                  if (cmsLoading) {
                    return <p className="text-muted-foreground text-sm py-8">Loading publications…</p>;
                  }
                  const pubs = cms.publications.length > 0 ? cms.publications : dept.publications;
                  if (pubs.length === 0) {
                    return <p className="text-muted-foreground text-sm py-8">No publication records available.</p>;
                  }
                  const norm = (t) => (t ?? "").toLowerCase().trim();
                  const journals    = pubs.filter(p => norm(p.type) === "journal");
                  const conferences = pubs.filter(p => norm(p.type) === "conference");
                  const others      = pubs.filter(p => norm(p.type) !== "journal" && norm(p.type) !== "conference");
                  const groups = [
                    ...(journals.length    ? [{ label: `Journal Publications (${journals.length})`,       items: journals }]    : []),
                    ...(conferences.length ? [{ label: `Conference Publications (${conferences.length})`, items: conferences }] : []),
                    ...(others.length      ? [{ label: `Other Publications (${others.length})`,           items: others }]      : []),
                  ];
                  return groups.map(({ label, items }) => (
                    <div key={label} className="mb-6">
                      <h3 className="font-semibold text-primary mb-3">{label}</h3>
                      <div className="space-y-2">
                        {items.map((p, i) => {
                          const isCMS = ('id' in p) && typeof p.id === 'number';
                          return (
                            <Card key={i} onClick={() => isCMS && setSelectedPublication(p as CMSPublication)}
                              className={`transition-all ${isCMS ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer" : "hover:shadow-md"}`}>
                              <CardContent className="p-3">
                                <p className="text-sm font-medium text-secondary">{p.title}</p>
                                <div className="flex flex-wrap items-center gap-3 mt-1">
                                  {p.authors && <span className="text-sm text-muted-foreground">{p.authors}</span>}
                                  {p.year && <span className="text-sm bg-muted px-2 py-0.5 rounded-full">{p.year}</span>}
                                  {('venue' in p) && (p as Record<string, unknown>).venue && <span className="text-sm text-muted-foreground italic">{String((p as Record<string, unknown>).venue)}</span>}
                                  {('indexing' in p) && (p as Record<string, unknown>).indexing && <span className="text-sm bg-primary/5 text-primary px-2 py-0.5 rounded-full">{String((p as Record<string, unknown>).indexing)}</span>}
                                  {isCMS && <span className="text-sm text-primary font-medium flex items-center gap-1"><ChevronRight className="w-3 h-3" />View Details</span>}
                                  {!isCMS && ('doi' in p) && (p as Record<string, unknown>).doi && <a href={`https://doi.org/${(p as Record<string, unknown>).doi}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline"><ExternalLink className="w-3 h-3" />DOI</a>}
                                  {!isCMS && ('external_link' in p) && (p as Record<string, unknown>).external_link && <a href={String((p as Record<string, unknown>).external_link)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline"><ExternalLink className="w-3 h-3" />Link</a>}
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    </div>
                  ));
                })()}
              </motion.div>
            )}

            {activeSection === "consultancy" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Consultancy</h2>
                <div className="space-y-3">
                  {dept.consultancy.map((c, i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-sm text-secondary">{c.title}</p>
                          <p className="text-sm text-muted-foreground">Agency: {c.agency}</p>
                        </div>
                        {c.amount && <span className="text-sm font-bold text-primary">{c.amount}</span>}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "events" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Events</h2>
                {(() => {
                  const allEvents = (!cmsLoading && cms.events.length > 0) ? cms.events : dept.events;
                  if (allEvents.length === 0) {
                    return <p className="text-muted-foreground text-sm py-8">No event records available at this time.</p>;
                  }
                  return (
                    <div className="grid md:grid-cols-2 gap-4">
                      {allEvents.map((e, i) => {
                      const isCMS = 'id' in e && typeof e.id === 'number';
                      return (
                        <Card
                          key={i}
                          onClick={() => isCMS && setSelectedEventId((e as { id: number }).id)}
                          className={`transition-all duration-300 overflow-hidden ${
                            isCMS ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer" : ""
                          }`}
                        >
                          {'poster' in e && e.poster && (
                            <div className="relative w-full h-36 bg-slate-100 overflow-hidden">
                              <img
                                src={e.poster}
                                alt={e.title}
                                loading="lazy"
                                className="w-full h-full object-cover"
                                onError={ev => { (ev.target as HTMLImageElement).style.display = 'none'; }}
                              />
                            </div>
                          )}
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Calendar className="w-3.5 h-3.5 text-primary" />
                                {('date' in e ? e.date : '') || ('from_date' in e ? e.from_date : '')}
                              </span>
                              {e.type && <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{e.type}</span>}
                            </div>
                            <h4 className="font-semibold text-sm text-secondary">{e.title}</h4>
                            {e.description && <p className="text-sm text-muted-foreground mt-1 line-clamp-2" dangerouslySetInnerHTML={{ __html: e.description }} />}
                            {'venue' in e && e.venue && <p className="text-sm text-muted-foreground mt-1">📍 {e.venue}</p>}
                            {isCMS && (
                              <p className="text-sm text-primary font-medium mt-2 flex items-center gap-1">
                                <ChevronRight className="w-3 h-3" /> View Details
                              </p>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                  );
                })()}
              </motion.div>
            )}

            {activeSection === "mou" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Memoranda of Understanding (MoU)</h2>
                {(() => {
                  const allMous = (!cmsLoading && cms.mous.length > 0) ? cms.mous : dept.mous;
                  if (allMous.length === 0) {
                    return <p className="text-muted-foreground text-sm py-8">No MoU records available at this time.</p>;
                  }
                  return (
                    <div className="grid md:grid-cols-2 gap-4">
                      {allMous.map((m, i) => {
                      const isCMS = 'id' in m && typeof m.id === 'number';
                      return (
                        <Card key={i} onClick={() => isCMS && setSelectedMou(m as CMSMoU)}
                          className={`border-l-4 border-l-primary/30 transition-all ${
                            isCMS ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer" : "hover:shadow-md"
                          }`}>
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="font-bold text-sm text-secondary flex-1">
                                {'organization' in m ? m.organization : ('name' in m ? m.name : '')}
                              </h4>
                              {'status' in m && m.status && (
                                <span className={`shrink-0 text-sm px-2 py-0.5 rounded-full font-medium ${ m.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>{m.status}</span>
                              )}
                            </div>
                            {'title' in m && m.title && <p className="text-sm font-medium text-primary mt-1">{m.title}</p>}
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{m.purpose}</p>
                            {'country' in m && m.country && <p className="text-sm text-muted-foreground mt-0.5">🌍 {m.country}</p>}
                            <div className="flex flex-wrap gap-2 mt-2">
                              {m.year && <span className="text-sm bg-muted px-2 py-0.5 rounded-full">{m.year}</span>}
                              {'collabAreas' in m && (m.collabAreas ?? []).slice(0, 3).map((area: string, j: number) => (
                                <span key={j} className="text-sm bg-primary/5 text-primary px-2 py-0.5 rounded-full">{area}</span>
                              ))}
                            </div>
                            {isCMS && <p className="text-sm text-primary font-medium mt-2 flex items-center gap-1"><ChevronRight className="w-3 h-3" />View Details</p>}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                );
              })()}
            </motion.div>
          )}

            {activeSection === "placement" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Placement / Internship</h2>
                {dept.placement.percentage !== "N/A" && (
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10">
                      <CardContent className="p-4">
                        <p className="text-2xl font-bold text-primary">{dept.placement.percentage}</p>
                        <p className="text-sm text-muted-foreground">Placed</p>
                      </CardContent>
                    </Card>
                    <Card className="text-center bg-gradient-to-br from-accent/10 to-accent/20">
                      <CardContent className="p-4">
                        <p className="text-2xl font-bold text-accent-foreground">{dept.placement.avgPackage}</p>
                        <p className="text-sm text-muted-foreground">Avg Package</p>
                      </CardContent>
                    </Card>
                    <Card className="text-center bg-gradient-to-br from-muted to-muted/50">
                      <CardContent className="p-4">
                        <p className="text-2xl font-bold text-secondary">{dept.placement.highestPackage}</p>
                        <p className="text-sm text-muted-foreground">Highest</p>
                      </CardContent>
                    </Card>
                  </div>
                )}
                {dept.placement.recruiters.length > 0 && (
                  <>
                    <h3 className="font-semibold text-secondary mb-3">Top Recruiters</h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {dept.placement.recruiters.map((r, i) => (
                        <span key={i} className="bg-muted text-muted-foreground text-sm px-3 py-1.5 rounded-full font-medium">{r}</span>
                      ))}
                    </div>
                  </>
                )}
                {dept.placement.percentage === "N/A" && !cmsLoading && cms.placements.length === 0 && (
                  <p className="text-muted-foreground text-sm py-8">No placement records available at this time.</p>
                )}
                {/* Live placement records from CMS */}
                {!cmsLoading && cms.placements.length > 0 && (
                  <>
                    <h3 className="font-semibold text-secondary mb-3">Placement Records</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {cms.placements.map((p, i) => (
                        <Card key={i} onClick={() => setSelectedPlacement(p)}
                          className="hover:shadow-lg hover:-translate-y-1 cursor-pointer transition-all">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                {p.subtype === 'Training' ? (
                                  <>
                                    <p className="font-semibold text-sm text-secondary">{p.programTitle}</p>
                                    <p className="text-sm text-muted-foreground mt-0.5">By: {p.conductedBy}</p>
                                    {p.numberOfStudents ? <p className="text-sm text-muted-foreground">{p.numberOfStudents} students</p> : null}
                                  </>
                                ) : (
                                  <>
                                    <p className="font-semibold text-sm text-secondary">{p.studentName}</p>
                                    <p className="text-sm text-primary font-medium">{p.companyName}</p>
                                    {p.role && <p className="text-sm text-muted-foreground">{p.role}</p>}
                                    {p.package && <p className="text-sm font-semibold text-green-700">{p.package}</p>}
                                  </>
                                )}
                              </div>
                              <div className="text-right shrink-0">
                                <span className={`text-sm px-2 py-0.5 rounded-full font-medium ${
                                  p.subtype === 'Placement' ? 'bg-green-100 text-green-700' :
                                  p.subtype === 'Internship' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                                }`}>{p.subtype}</span>
                                {p.year && <p className="text-sm text-muted-foreground mt-1">{p.year}</p>}
                              </div>
                            </div>
                            <p className="text-sm text-primary font-medium mt-2 flex items-center gap-1"><ChevronRight className="w-3 h-3" />View Details</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            )}

            {activeSection === "projects" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Student Projects</h2>
                {(() => {
                  const allProjects = (!cmsLoading && cms.projects.length > 0) ? cms.projects : dept.studentProjects;
                  if (allProjects.length === 0) {
                    return <p className="text-muted-foreground text-sm py-8">No student project records available at this time.</p>;
                  }
                  return (
                    <div className="grid md:grid-cols-2 gap-4">
                      {allProjects.map((p, i) => {
                      const isCMS = 'id' in p && typeof p.id === 'number';
                      return (
                        <Card key={i} onClick={() => isCMS && setSelectedProject(p as CMSProject)}
                          className={`transition-all ${
                            isCMS ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer" : "hover:shadow-lg"
                          }`}>
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-sm text-secondary">{p.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{p.students}</p>
                            {'guide' in p && p.guide && <p className="text-sm text-primary font-medium mt-0.5">Guide: {p.guide}</p>}
                            {'stack' in p && p.stack && <p className="text-sm text-muted-foreground mt-0.5">Stack: {p.stack}</p>}
                            {p.description && <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.description}</p>}
                            {'academicYear' in p && p.academicYear && <span className="text-sm bg-muted px-2 py-0.5 rounded-full mt-2 inline-block">{p.academicYear}</span>}
                            {isCMS && <p className="text-sm text-primary font-medium mt-2 flex items-center gap-1"><ChevronRight className="w-3 h-3" />View Details</p>}
                            {!isCMS && (
                              <div className="flex gap-2 mt-2">
                                {'github' in p && p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">GitHub</a>}
                                {'demo' in p && p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Demo</a>}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                );
              })()}
            </motion.div>
          )}

            {activeSection === "subjects" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Subjects</h2>
                {dept.subjects.length === 0 ? (
                  <p className="text-muted-foreground text-sm py-8">No curriculum / syllabus records available at this time.</p>
                ) : (
                  ["core", "elective", "professional-skill", "optional-training"].map(type => {
                  const filtered = dept.subjects.filter(s => s.type === type);
                  if (filtered.length === 0) return null;
                  const label = type === "core" ? "Core Subjects" : type === "elective" ? "Elective Subjects" : type === "professional-skill" ? "Professional Skills" : "Optional Training (Industry)";
                  const color = type === "core" ? "primary" : type === "elective" ? "accent-foreground" : type === "professional-skill" ? "violet-600" : "emerald-600";
                  return (
                    <div key={type} className="mb-6">
                      <h3 className="font-semibold text-primary mb-3">{label}</h3>
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {filtered.map((s, i) => (
                          <Card key={i} className="hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <h4 className="font-semibold text-sm text-secondary flex-1">{s.name}</h4>
                                <span className="shrink-0 text-sm font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full">Sem {s.semester}</span>
                              </div>
                              {(s as Record<string, unknown>).code && <p className="text-sm text-muted-foreground">Code: {String((s as Record<string, unknown>).code)}</p>}
                              {(s as Record<string, unknown>).credits && <p className="text-sm text-primary font-medium">Credits: {String((s as Record<string, unknown>).credits)}</p>}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                }))}
              </motion.div>
            )}
          </main>
        </div>
      </div>

      {selectedEventId !== null && (
        <EventDetailModal
          eventId={selectedEventId}
          onClose={() => setSelectedEventId(null)}
        />
      )}

      {selectedMou && (
        <MouDetailModal
          mou={selectedMou}
          onClose={() => setSelectedMou(null)}
        />
      )}

      {selectedAchievement && (
        <AchievementDetailModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}

      {selectedPatent && (
        <PatentDetailModal
          patent={selectedPatent}
          onClose={() => setSelectedPatent(null)}
        />
      )}

      {selectedPublication && (
        <PublicationDetailModal
          publication={selectedPublication}
          onClose={() => setSelectedPublication(null)}
        />
      )}

      {selectedPlacement && (
        <PlacementDetailModal
          placement={selectedPlacement}
          onClose={() => setSelectedPlacement(null)}
        />
      )}

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default DepartmentPage;

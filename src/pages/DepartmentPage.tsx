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
import { useState, useEffect, useMemo, Fragment } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getDepartmentByKey, getDepartmentUnderGraduate, getDepartmentPostGraduate, getDepartmentMore, getDepartmentTopTabs } from "@/data/departmentData";
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
  Users, Award, FlaskConical, FileText, BookOpen, Calendar, Handshake, Briefcase, FolderOpen, GraduationCap, Building2, ChevronRight, Eye, Target, Trophy, Lightbulb, Mail, Phone, ExternalLink, Search, Filter, Sparkles, RefreshCw, ChevronDown, Layers, Download, Clock, MoreHorizontal
} from "lucide-react";

interface SidebarSubItem {
  id: string;
  label: string;
  externalUrl?: string;
  directPdf?: boolean;
}

interface SidebarItem {
  id: string;
  label: string;
  icon: any;
  subItems?: SidebarSubItem[];
}

const sidebarItems: SidebarItem[] = [
  { id: "about", label: "About Department", icon: Building2 },
  {
    id: "under-graduate",
    label: "Under Graduate",
    icon: GraduationCap,
    subItems: [
      { id: "ug", label: "UG" },
      { id: "course-syllabus", label: "Course Syllabus" },
    ],
  },
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
  { id: "subjects", label: "Subjects", icon: Layers },
  {
    id: "more",
    label: "More",
    icon: MoreHorizontal,
    subItems: [
      { id: "mentor-mentee", label: "Mentor & Mentee" },
      { id: "minor", label: "Minor" },
    ],
  },
];

const DepartmentPage = () => {
  const { deptKey } = useParams<{ deptKey: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("about");
  const [activeUgTab, setActiveUgTab] = useState<string>("ug");
  const [ugDropdownOpen, setUgDropdownOpen] = useState(false);
  const [ugHovered, setUgHovered] = useState(false);
  const [activePgTab, setActivePgTab] = useState<string>("pg-course-syllabus");
  const [pgDropdownOpen, setPgDropdownOpen] = useState(false);
  const [pgHovered, setPgHovered] = useState(false);
  const [pgSearch, setPgSearch] = useState("");
  const [activeMoreTab, setActiveMoreTab] = useState<string>("mentor-mentee");
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [moreHovered, setMoreHovered] = useState(false);
  const [activeObeSubTab, setActiveObeSubTab] = useState<string>("pos-psos-peos");
  const [obeHovered, setObeHovered] = useState(false);
  const [obeDropdownOpen, setObeDropdownOpen] = useState(false);
  const [syllabusFilter, setSyllabusFilter] = useState("all");
  const [syllabusSearch, setSyllabusSearch] = useState("");
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
  const [activeTopTab, setActiveTopTab] = useState<string>("department");
  const dept = getDepartmentByKey(deptKey || "");
  const ugData = getDepartmentUnderGraduate(deptKey || "", dept?.subjects || []);
  const pgData = getDepartmentPostGraduate(deptKey || "");
  const moreData = getDepartmentMore(deptKey || "");
  const topTabs = getDepartmentTopTabs(deptKey || "");
  const { data: cms, loading: cmsLoading } = useDeptCMSData(deptKey || "");
  const { getFacultyByDept, getFacultyProfileBySlug, getDepartmentHod, loading: facultyLoading, refresh: refreshFaculty } = useFacultyData();

  const currentSidebarItems = useMemo(() => {
    const items: SidebarItem[] = [];
    sidebarItems.forEach(item => {
      if (item.id === "under-graduate") {
        items.push({
          ...item,
          subItems: ugData.subTabs || [
            { id: "ug", label: "UG" },
            { id: "course-syllabus", label: "Course Syllabus" },
          ]
        });
        if (pgData) {
          items.push({
            id: "post-graduate",
            label: "Post Graduate",
            icon: GraduationCap,
            subItems: pgData.subTabs || [
              { id: "pg-course-syllabus", label: "Course Syllabus" }
            ]
          });
        }
      } else if (item.id === "more") {
        items.push({
          ...item,
          subItems: moreData.subTabs || [
            { id: "mentor-mentee", label: "Mentor & Mentee" },
            { id: "minor", label: "Minor" },
          ]
        });
      } else {
        items.push(item);
      }
    });
    return items;
  }, [ugData.subTabs, pgData, moreData.subTabs]);

  const specializations = useMemo(() => {
    if (!ugData.syllabusTables || ugData.syllabusTables.length === 0) return [];
    const specs = new Set<string>();
    const hasAimL = ugData.syllabusTables.some(t => t.title.includes("AI & ML") || t.title.includes("AI&ML"));
    const hasNetworks = ugData.syllabusTables.some(t => t.title.includes("Networks"));
    const hasR23 = ugData.syllabusTables.some(t => t.title.includes("R23"));
    const hasR20 = ugData.syllabusTables.some(t => t.title.includes("R20"));

    if (hasAimL || hasNetworks) {
      if (hasAimL) specs.add("CSE (AI & ML)");
      if (hasNetworks) specs.add("CSE (Networks)");
    } else if (hasR23 && hasR20) {
      specs.add("R23 Scheme");
      specs.add("R20 Scheme");
    }
    return Array.from(specs);
  }, [ugData.syllabusTables]);

  const calculateTableCredits = (rows: { credits: string }[]) => {
    const sum = rows.reduce((acc, row) => {
      const num = parseFloat(row.credits);
      return isNaN(num) ? acc : acc + num;
    }, 0);
    return sum > 0 ? (Number.isInteger(sum) ? `${sum}` : `${sum.toFixed(1)}`) : "-";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSelectedProfile(null);

    if (!dept && deptKey) {
      navigate('/departments', { replace: true });
      return;
    }
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      if (hash === "tab-1" || hash === "sub-tab-1") {
        setActiveSection("about");
        setActiveTopTab("department");
        return;
      }
      if (hash === "sub-tab-264" || hash === "faculty-list") {
        setActiveSection("about");
        setActiveTopTab("faculty-list");
        return;
      }
      if (hash === "sub-tab-29" || hash === "bos" || hash === "board-of-studies") {
        setActiveSection("about");
        setActiveTopTab("bos");
        return;
      }
      if (hash === "sub-tab-211" || hash === "iaab") {
        setActiveSection("about");
        setActiveTopTab("iaab");
        return;
      }
      if (hash === "sub-tab-212" || hash === "pac") {
        setActiveSection("about");
        setActiveTopTab("pac");
        return;
      }
      if (hash === "sub-tab-213" || hash === "dab") {
        setActiveSection("about");
        setActiveTopTab("dab");
        return;
      }
      if (hash === "sub-tab-237" || hash === "newsletter" || hash === "news-letters") {
        setActiveSection("about");
        setActiveTopTab("newsletter");
        return;
      }
      if (hash === "tab-2") {
        setActiveSection("under-graduate");
        setActiveUgTab("ug");
        setUgDropdownOpen(true);
        return;
      }
      if (hash === "tab-3") {
        setActiveSection("faculty");
        return;
      }
      if (hash === "tab-14") {
        setActiveSection("events");
        return;
      }
      if (hash === "tab-8") {
        setActiveSection("achievements");
        return;
      }
      if (hash === "tab-9") {
        setActiveSection("publications");
        return;
      }
      if (hash === "tab57") {
        setActiveSection("consultancy");
        return;
      }
      if (hash === "tab72") {
        setActiveSection("more");
        setActiveMoreTab("mentor-mentee");
        setMoreDropdownOpen(true);
        return;
      }
      if (hash === "tab88" || hash === "tab31" || hash === "surveys") {
        setActiveSection("more");
        setActiveMoreTab("surveys");
        setMoreDropdownOpen(true);
        return;
      }
      if (hash === "tab113" || hash === "timetable" || hash === "time-table" || hash === "ug-tab60") {
        setActiveSection("under-graduate");
        setActiveUgTab("timetable");
        setUgDropdownOpen(true);
        return;
      }
      if (hash === "tab137") {
        setActiveSection("projects");
        return;
      }
      if (hash === "tab-15") {
        setActiveSection("placement");
        return;
      }
      if (hash === "tab-17") {
        setActiveSection("facilities");
        return;
      }
      if (hash === "tab-19" || hash === "obe") {
        setActiveSection("more");
        setActiveMoreTab("obe");
        setMoreDropdownOpen(true);
        setObeDropdownOpen(true);
        return;
      }
      if (hash === "tab150" || hash === "civil-engineering-notes" || hash === "notes") {
        setActiveSection("more");
        setActiveMoreTab("civil-engineering-notes");
        setMoreDropdownOpen(true);
        return;
      }
      if (hash === "tab151" || hash === "course-attainment") {
        setActiveSection("more");
        setActiveMoreTab("course-attainment");
        setMoreDropdownOpen(true);
        return;
      }
      if (hash === "tab119" || hash === "alumni") {
        setActiveSection("more");
        setActiveMoreTab("alumni");
        setMoreDropdownOpen(true);
        return;
      }
      if (hash === "event-tab10" || hash === "pos-psos-peos" || hash === "peos") {
        setActiveSection("more");
        setActiveMoreTab("obe");
        setActiveObeSubTab("pos-psos-peos");
        setMoreDropdownOpen(true);
        setObeDropdownOpen(true);
        return;
      }
      if (hash === "event-tab11" || hash === "remedial-classes" || hash === "remedial") {
        setActiveSection("more");
        setActiveMoreTab("obe");
        setActiveObeSubTab("remedial-classes");
        setMoreDropdownOpen(true);
        setObeDropdownOpen(true);
        return;
      }
      if (hash === "event-tab12" || hash === "graduate-exit-survey" || hash === "exit-survey") {
        setActiveSection("more");
        setActiveMoreTab("obe");
        setActiveObeSubTab("graduate-exit-survey");
        setMoreDropdownOpen(true);
        setObeDropdownOpen(true);
        return;
      }
      if (hash === "event-tab13" || hash === "event-tab14" || hash === "copo-attainment" || hash === "copo") {
        setActiveSection("more");
        setActiveMoreTab("obe");
        setActiveObeSubTab("copo-attainment");
        setMoreDropdownOpen(true);
        setObeDropdownOpen(true);
        return;
      }
      if (hash === "obe") {
        setActiveSection("more");
        setActiveMoreTab("obe");
        setMoreDropdownOpen(true);
        setObeDropdownOpen(true);
        return;
      }
      if (hash === "tab-7" || hash === "tab7" || hash === "lab") {
        setActiveSection("more");
        setActiveMoreTab("lab");
        setMoreDropdownOpen(true);
        return;
      }
      if (hash === "ug" || hash === "ug-tab20") {
        setActiveSection("under-graduate");
        setActiveUgTab("ug");
        setUgDropdownOpen(true);
        return;
      }
      if (hash === "course-syllabus" || hash === "ug-tab50" || hash === "syllabus") {
        setActiveSection("under-graduate");
        setActiveUgTab("course-syllabus");
        setUgDropdownOpen(true);
        return;
      }
      if (hash === "timetable" || hash === "time-table" || hash === "ug-tab60") {
        setActiveSection("under-graduate");
        setActiveUgTab("timetable");
        setUgDropdownOpen(true);
        return;
      }
      if (hash === "under-graduate") {
        setActiveSection("under-graduate");
        setUgDropdownOpen(true);
        return;
      }
      if (hash === "post-graduate" || hash === "pg" || hash === "pg-course-syllabus") {
        setActiveSection("post-graduate");
        setActivePgTab("pg-course-syllabus");
        setPgDropdownOpen(true);
        return;
      }
      if (hash === "mentor-mentee" || hash === "mentors") {
        setActiveSection("more");
        setActiveMoreTab("mentor-mentee");
        setMoreDropdownOpen(true);
        return;
      }
      if (hash === "minor") {
        setActiveSection("more");
        setActiveMoreTab("minor");
        setMoreDropdownOpen(true);
        return;
      }
      if (hash === "interdisciplinary-projects" || hash === "interdisciplinary") {
        setActiveSection("more");
        setActiveMoreTab("interdisciplinary-projects");
        setMoreDropdownOpen(true);
        return;
      }
      if (hash === "doctoral") {
        setActiveSection("more");
        setActiveMoreTab("doctoral");
        setMoreDropdownOpen(true);
        return;
      }
      if (hash === "feedback") {
        setActiveSection("more");
        setActiveMoreTab("feedback");
        setMoreDropdownOpen(true);
        return;
      }
      if (hash === "innovative-teaching") {
        setActiveSection("more");
        setActiveMoreTab("innovative-teaching");
        setMoreDropdownOpen(true);
        return;
      }
      if (hash === "stock-register") {
        setActiveSection("more");
        setActiveMoreTab("stock-register");
        setMoreDropdownOpen(true);
        return;
      }
      if (hash === "faculty-list") {
        setActiveSection("about");
        setActiveTopTab("faculty-list");
        return;
      }
      if (hash === "bos" || hash === "board-of-studies") {
        setActiveSection("about");
        setActiveTopTab("bos");
        return;
      }
      if (hash === "dab") {
        setActiveSection("about");
        setActiveTopTab("dab");
        return;
      }
      if (hash === "pac") {
        setActiveSection("about");
        setActiveTopTab("pac");
        return;
      }
      if (hash === "newsletter") {
        setActiveSection("about");
        setActiveTopTab("newsletter");
        return;
      }
      if (hash === "iaab") {
        setActiveSection("about");
        setActiveTopTab("iaab");
        return;
      }
      if (hash === "magazine") {
        setActiveSection("about");
        setActiveTopTab("magazine");
        return;
      }
      if (hash === "department") {
        setActiveSection("about");
        setActiveTopTab("department");
        return;
      }
      if (hash && sidebarItems.some(item => item.id === hash)) {
        setActiveSection(hash);
        return;
      }
    }

    const pathParts = location.pathname.split('/');
    const lastPart = pathParts[pathParts.length - 1];
    if (lastPart === "ug") {
      setActiveSection("under-graduate");
      setActiveUgTab("ug");
      setUgDropdownOpen(true);
    } else if (lastPart === "course-syllabus" || lastPart === "syllabus") {
      setActiveSection("under-graduate");
      setActiveUgTab("course-syllabus");
      setUgDropdownOpen(true);
    } else if (lastPart === "timetable" || lastPart === "time-table") {
      setActiveSection("under-graduate");
      setActiveUgTab("timetable");
      setUgDropdownOpen(true);
    } else if (lastPart === "under-graduate") {
      setActiveSection("under-graduate");
      setUgDropdownOpen(true);
    } else if (lastPart === "post-graduate" || lastPart === "pg" || lastPart === "pg-course-syllabus") {
      setActiveSection("post-graduate");
      setActivePgTab("pg-course-syllabus");
      setPgDropdownOpen(true);
    } else if (lastPart === "tab-7" || lastPart === "tab7" || lastPart === "lab") {
      setActiveSection("more");
      setActiveMoreTab("lab");
      setMoreDropdownOpen(true);
    } else if (lastPart === "tab150" || lastPart === "civil-engineering-notes" || lastPart === "notes") {
      setActiveSection("more");
      setActiveMoreTab("civil-engineering-notes");
      setMoreDropdownOpen(true);
    } else if (lastPart === "tab151" || lastPart === "course-attainment") {
      setActiveSection("more");
      setActiveMoreTab("course-attainment");
      setMoreDropdownOpen(true);
    } else if (lastPart === "stock-register") {
      setActiveSection("more");
      setActiveMoreTab("stock-register");
      setMoreDropdownOpen(true);
    } else if (lastPart === "tab119" || lastPart === "alumni") {
      setActiveSection("more");
      setActiveMoreTab("alumni");
      setMoreDropdownOpen(true);
    } else if (lastPart === "mentor-mentee" || lastPart === "mentor-and-mentee" || lastPart === "mentee") {
      setActiveSection("more");
      setActiveMoreTab("mentor-mentee");
      setMoreDropdownOpen(true);
    } else if (lastPart === "student-innovative-projects" || lastPart === "student-projects" || lastPart === "innovative-projects") {
      setActiveSection("more");
      setActiveMoreTab("student-innovative-projects");
      setMoreDropdownOpen(true);
    } else if (lastPart === "minor" || lastPart === "minor-degree") {
      setActiveSection("more");
      setActiveMoreTab("minor");
      setMoreDropdownOpen(true);
    } else if (lastPart === "interdisciplinary-projects" || lastPart === "interdisciplinary") {
      setActiveSection("more");
      setActiveMoreTab("interdisciplinary-projects");
      setMoreDropdownOpen(true);
    } else if (lastPart === "doctoral") {
      setActiveSection("more");
      setActiveMoreTab("doctoral");
      setMoreDropdownOpen(true);
    } else if (lastPart === "feedback") {
      setActiveSection("more");
      setActiveMoreTab("feedback");
      setMoreDropdownOpen(true);
    } else if (lastPart === "innovative-teaching") {
      setActiveSection("more");
      setActiveMoreTab("innovative-teaching");
      setMoreDropdownOpen(true);
    } else if (pathParts.includes("obe") || lastPart === "obe") {
      setActiveSection("more");
      setActiveMoreTab("obe");
      setMoreDropdownOpen(true);
      setObeDropdownOpen(true);
      if (lastPart === "pos-psos-peos" || lastPart === "surveys" || lastPart === "remedial-classes" || lastPart === "graduate-exit-survey" || lastPart === "copo-attainment") {
        setActiveObeSubTab(lastPart);
      }
    } else if (lastPart === "pos-psos-peos" || lastPart === "remedial-classes" || lastPart === "graduate-exit-survey" || lastPart === "copo-attainment") {
      setActiveSection("more");
      setActiveMoreTab("obe");
      setActiveObeSubTab(lastPart);
      setMoreDropdownOpen(true);
      setObeDropdownOpen(true);
    } else if (lastPart === "surveys" || lastPart === "tab31") {
      setActiveSection("more");
      if (deptKey === "cse") {
        setActiveMoreTab("obe");
        setActiveObeSubTab("surveys");
        setObeDropdownOpen(true);
      } else {
        setActiveMoreTab("surveys");
      }
      setMoreDropdownOpen(true);
    } else if (lastPart === "more") {
      setActiveSection("more");
      if (deptKey === "cse") {
        setActiveMoreTab("doctoral");
      } else if (deptKey === "cseds" || deptKey === "cse-ds" || deptKey === "csd" || deptKey === "ds") {
        setActiveMoreTab("lab");
      } else if (deptKey === "csecs" || deptKey === "cse-cs" || deptKey === "csc" || deptKey === "cs" || deptKey === "cyber-security" || deptKey === "csec") {
        setActiveMoreTab("surveys");
      } else if (deptKey === "ce" || deptKey === "civil" || deptKey === "6") {
        setActiveMoreTab("civil-engineering-notes");
      } else if (deptKey === "eee" || deptKey === "electrical-electronics-engineering" || deptKey === "electrical-and-electronics-engineering" || deptKey === "ee" || deptKey === "2") {
        setActiveMoreTab("stock-register");
      }
      setMoreDropdownOpen(true);
    } else if (lastPart === "faculty-list") {
      setActiveSection("about");
      setActiveTopTab("faculty-list");
    } else if (lastPart === "bos" || lastPart === "board-of-studies") {
      setActiveSection("about");
      setActiveTopTab("bos");
    } else if (lastPart === "dab") {
      setActiveSection("about");
      setActiveTopTab("dab");
    } else if (lastPart === "pac") {
      setActiveSection("about");
      setActiveTopTab("pac");
    } else if (lastPart === "newsletter") {
      setActiveSection("about");
      setActiveTopTab("newsletter");
    } else if (lastPart === "iaab") {
      setActiveSection("about");
      setActiveTopTab("iaab");
    } else if (lastPart === "dcs") {
      setActiveSection("about");
      setActiveTopTab("dcs");
    } else if (lastPart === "magazine" || lastPart === "magazines") {
      setActiveSection("about");
      setActiveTopTab("magazine");
    } else if (lastPart === "department" || lastPart === "about") {
      setActiveSection("about");
      setActiveTopTab("department");
    } else if (lastPart && sidebarItems.some(item => item.id === lastPart)) {
      setActiveSection(lastPart);
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

  const handleTopTabClick = (tabId: string) => {
    setActiveTopTab(tabId);
    if (activeSection !== "about") {
      setActiveSection("about");
    }
    const basePath = `/department/${deptKey}`;
    const newPath = tabId === "department" ? basePath : `${basePath}/${tabId}`;
    navigate(newPath, { replace: true });
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const handleUgSubItemClick = (tabId: string) => {
    setActiveSection("under-graduate");
    setActiveUgTab(tabId);
    setUgDropdownOpen(true);
    setMobileMenuOpen(false);
    const basePath = `/department/${deptKey}`;
    navigate(`${basePath}/${tabId}`, { replace: true });
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const handlePgSubItemClick = (tabId: string, externalUrl?: string) => {
    if (externalUrl) {
      window.open(externalUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setActiveSection("post-graduate");
    setActivePgTab(tabId);
    setPgDropdownOpen(true);
    setMobileMenuOpen(false);
    const basePath = `/department/${deptKey}`;
    navigate(`${basePath}/${tabId}`, { replace: true });
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const handleMoreSubItemClick = (tabId: string, externalUrl?: string) => {
    if (externalUrl) {
      window.open(externalUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setActiveSection("more");
    setActiveMoreTab(tabId);
    setMoreDropdownOpen(true);
    setMobileMenuOpen(false);
    const basePath = `/department/${deptKey}`;
    navigate(`${basePath}/${tabId}`, { replace: true });
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const handleObeSubItemClick = (subTabId: string) => {
    setActiveSection("more");
    setActiveMoreTab("obe");
    setActiveObeSubTab(subTabId);
    setMoreDropdownOpen(true);
    setObeDropdownOpen(true);
    setMobileMenuOpen(false);
    const basePath = `/department/${deptKey}`;
    navigate(`${basePath}/obe/${subTabId}`, { replace: true });
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    if (sectionId === "under-graduate") {
      setUgDropdownOpen(true);
      setPgDropdownOpen(false);
      setMoreDropdownOpen(false);
    } else if (sectionId === "post-graduate") {
      setPgDropdownOpen(true);
      setUgDropdownOpen(false);
      setMoreDropdownOpen(false);
    } else if (sectionId === "more") {
      setMoreDropdownOpen(true);
      setUgDropdownOpen(false);
      setPgDropdownOpen(false);
    } else {
      setUgDropdownOpen(false);
      setPgDropdownOpen(false);
      setMoreDropdownOpen(false);
    }
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
          <div className="bg-card border-t border-border max-h-[60vh] overflow-y-auto">
            {currentSidebarItems.map(item => {
              if (item.subItems) {
                const isParentActive = activeSection === item.id;
                const isUg = item.id === "under-graduate";
                const isPg = item.id === "post-graduate";
                const isDropdownOpen = isUg ? ugDropdownOpen : isPg ? pgDropdownOpen : moreDropdownOpen;
                const activeSubTab = isUg ? activeUgTab : isPg ? activePgTab : activeMoreTab;
                const handleSubClick = isUg ? handleUgSubItemClick : isPg ? handlePgSubItemClick : handleMoreSubItemClick;

                return (
                  <div key={item.id} className="border-b border-border/40">
                    <button
                      onClick={() => {
                        if (activeSection !== item.id) {
                          handleSectionChange(item.id);
                        } else {
                          if (isUg) setUgDropdownOpen(prev => !prev);
                          else if (isPg) setPgDropdownOpen(prev => !prev);
                          else setMoreDropdownOpen(prev => !prev);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                        isParentActive ? "text-primary bg-primary/5 font-semibold" : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? "rotate-180 text-primary" : ""}`} />
                    </button>
                    {isDropdownOpen && (
                      <div className="bg-muted/30 pl-9 pr-4 py-1 space-y-1">
                        {item.subItems.map(sub => {
                          const hasNested = !!(sub.subItems && sub.subItems.length > 0);
                          const isSubActive = isParentActive && activeSubTab === sub.id;

                          if (hasNested) {
                            return (
                              <div key={sub.id} className="space-y-1">
                                <button
                                  onClick={() => {
                                    handleSubClick(sub.id, sub.externalUrl);
                                    setObeDropdownOpen(prev => !prev);
                                  }}
                                  className={`w-full flex items-center justify-between py-1.5 text-xs transition-colors ${
                                    isSubActive
                                      ? "text-primary font-bold"
                                      : "text-muted-foreground hover:text-primary"
                                  }`}
                                >
                                  <span>{sub.label}</span>
                                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${obeDropdownOpen ? "rotate-180 text-primary" : ""}`} />
                                </button>
                                {obeDropdownOpen && (
                                  <div className="pl-4 py-1 space-y-1 border-l-2 border-primary/40 ml-2">
                                    {sub.subItems!.map(nested => (
                                      <button
                                        key={nested.id}
                                        onClick={() => handleObeSubItemClick(nested.id)}
                                        className={`w-full flex items-center justify-between py-1 text-[11px] transition-colors text-left ${
                                          isSubActive && activeObeSubTab === nested.id
                                            ? "text-primary font-bold"
                                            : "text-muted-foreground hover:text-primary"
                                        }`}
                                      >
                                        <span>{nested.label}</span>
                                        <ChevronRight className="w-2.5 h-2.5 text-primary/70" />
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          }

                          return (
                            <button
                              key={sub.id}
                              onClick={() => handleSubClick(sub.id, sub.externalUrl)}
                              className={`w-full flex items-center justify-between py-1.5 text-xs transition-colors ${
                                isSubActive
                                  ? "text-primary font-bold"
                                  : "text-muted-foreground hover:text-primary"
                              }`}
                            >
                              <span>{sub.label}</span>
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              return (
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
              );
            })}
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
                {currentSidebarItems.map(item => {
                  if (item.subItems) {
                    const isParentActive = activeSection === item.id;
                    const isUg = item.id === "under-graduate";
                    const isPg = item.id === "post-graduate";
                    const isDropdownOpen = isUg ? ugDropdownOpen : isPg ? pgDropdownOpen : moreDropdownOpen;
                    const isHovered = isUg ? ugHovered : isPg ? pgHovered : moreHovered;
                    const setHovered = isUg ? setUgHovered : isPg ? setPgHovered : setMoreHovered;
                    const activeSubTab = isUg ? activeUgTab : isPg ? activePgTab : activeMoreTab;
                    const handleSubClick = isUg ? handleUgSubItemClick : isPg ? handlePgSubItemClick : handleMoreSubItemClick;

                    return (
                      <div
                        key={item.id}
                        className="relative"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                      >
                        <button
                          onClick={() => {
                            if (activeSection !== item.id) {
                              handleSectionChange(item.id);
                            } else {
                              if (isUg) setUgDropdownOpen(prev => !prev);
                              else if (isPg) setPgDropdownOpen(prev => !prev);
                              else setMoreDropdownOpen(prev => !prev);
                            }
                          }}
                          className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-all duration-200 border-l-3 ${
                            isParentActive
                              ? "text-primary bg-primary/5 font-semibold border-l-primary border-l-[3px]"
                              : "text-muted-foreground hover:text-primary hover:bg-primary/5 border-l-transparent border-l-[3px]"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <item.icon className="w-4 h-4 shrink-0" />
                            <span className="text-left">{item.label}</span>
                          </div>
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${
                              isDropdownOpen ? "rotate-180 text-primary" : ""
                            }`}
                          />
                        </button>

                        {/* Accordion / Dropdown inside sidebar */}
                        {isDropdownOpen && (
                          <div className="bg-muted/30 border-y border-border/40 py-1 space-y-0.5">
                            {item.subItems.map(sub => {
                              const isSubActive = isParentActive && activeSubTab === sub.id;
                              const hasNested = !!(sub.subItems && sub.subItems.length > 0);

                              if (hasNested) {
                                return (
                                  <div
                                    key={sub.id}
                                    className="relative group/nested"
                                    onMouseEnter={() => {
                                      if (sub.id === "obe") setObeHovered(true);
                                    }}
                                    onMouseLeave={() => {
                                      if (sub.id === "obe") setObeHovered(false);
                                    }}
                                  >
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleSubClick(sub.id, sub.externalUrl);
                                        if (sub.id === "obe") {
                                          setObeDropdownOpen(prev => !prev);
                                        }
                                      }}
                                      className={`w-full flex items-center justify-between pl-10 pr-4 py-2 text-xs transition-colors ${
                                        isSubActive
                                          ? "text-primary font-bold bg-primary/10"
                                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                                      }`}
                                    >
                                      <span>{sub.label}</span>
                                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSubActive ? "text-primary font-bold" : "text-muted-foreground/60"} ${(sub.id === "obe" && obeHovered) ? "translate-x-0.5 text-primary" : ""}`} />
                                    </button>

                                    {/* Flyout Submenu to the RIGHT on Hover or when active - matching user screenshot */}
                                    {sub.id === "obe" && obeHovered && (
                                      <div
                                        onMouseEnter={() => setObeHovered(true)}
                                        onMouseLeave={() => setObeHovered(false)}
                                        className="absolute left-full top-0 ml-2 w-56 bg-card border border-border shadow-xl rounded-xl py-1.5 z-50 animate-in fade-in slide-in-from-left-2 duration-150"
                                      >
                                        <div className="px-3 py-1.5 text-[11px] font-bold text-muted-foreground uppercase tracking-wider border-b border-border/50 mb-1 flex items-center justify-between">
                                          <span>{sub.label}</span>
                                          <span className="text-[10px] text-primary font-bold">OBE</span>
                                        </div>
                                        {sub.subItems!.map(nested => {
                                          const isNestedActive = isSubActive && activeObeSubTab === nested.id;
                                          return (
                                            <button
                                              key={nested.id}
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handleObeSubItemClick(nested.id);
                                                setObeHovered(false);
                                              }}
                                              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors text-left ${
                                                isNestedActive
                                                  ? "text-primary bg-primary/10 font-bold"
                                                  : "text-secondary hover:text-primary hover:bg-primary/5"
                                              }`}
                                            >
                                              <span>{nested.label}</span>
                                              <ChevronRight className="w-3.5 h-3.5 text-primary/70 shrink-0 ml-2" />
                                            </button>
                                          );
                                        })}
                                      </div>
                                    )}

                                    {/* Inline accordion when clicked */}
                                    {sub.id === "obe" && obeDropdownOpen && (
                                      <div className="bg-muted/40 border-l-2 border-primary/40 ml-12 py-1 space-y-0.5">
                                        {sub.subItems!.map(nested => {
                                          const isNestedActive = isSubActive && activeObeSubTab === nested.id;
                                          return (
                                            <button
                                              key={nested.id}
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handleObeSubItemClick(nested.id);
                                              }}
                                              className={`w-full flex items-center justify-between px-3 py-1.5 text-[11px] transition-colors text-left ${
                                                isNestedActive
                                                  ? "text-primary font-bold bg-primary/10"
                                                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                                              }`}
                                            >
                                              <span>{nested.label}</span>
                                              <ChevronRight className={`w-3 h-3 ${isNestedActive ? "text-primary" : "text-muted-foreground/40"}`} />
                                            </button>
                                          );
                                        })}
                                      </div>
                                    )}
                                  </div>
                                );
                              }

                              return (
                                <button
                                  key={sub.id}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSubClick(sub.id, sub.externalUrl);
                                  }}
                                  className={`w-full flex items-center justify-between pl-10 pr-4 py-2 text-xs transition-colors ${
                                    isSubActive
                                      ? "text-primary font-bold bg-primary/10"
                                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                                  }`}
                                >
                                  <span>{sub.label}</span>
                                  <ChevronRight className={`w-3 h-3 ${isSubActive ? "text-primary" : "text-muted-foreground/40"}`} />
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Hover flyout menu on right side of menu bar */}
                        {isHovered && (
                          <div className="absolute left-full top-0 ml-1.5 w-52 bg-card border border-border shadow-xl rounded-xl py-1.5 z-50 animate-in fade-in slide-in-from-left-2 duration-150">
                            <div className="px-3 py-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/50 mb-1">
                              {item.label}
                            </div>
                            {item.subItems.map(sub => {
                              const isSubActive = isParentActive && activeSubTab === sub.id;
                              const hasNested = !!(sub.subItems && sub.subItems.length > 0);

                              if (hasNested) {
                                return (
                                  <div
                                    key={sub.id}
                                    className="relative group/nestedhover"
                                    onMouseEnter={() => {
                                      if (sub.id === "obe") setObeHovered(true);
                                    }}
                                    onMouseLeave={() => {
                                      if (sub.id === "obe") setObeHovered(false);
                                    }}
                                  >
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleSubClick(sub.id, sub.externalUrl);
                                        setHovered(false);
                                      }}
                                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors text-left ${
                                        isSubActive
                                          ? "text-primary bg-primary/10 font-bold"
                                          : "text-secondary hover:text-primary hover:bg-primary/5"
                                      }`}
                                    >
                                      <span>{sub.label}</span>
                                      <ChevronRight className="w-3.5 h-3.5 text-primary/70" />
                                    </button>

                                    {sub.id === "obe" && obeHovered && (
                                      <div
                                        onMouseEnter={() => setObeHovered(true)}
                                        onMouseLeave={() => setObeHovered(false)}
                                        className="absolute left-full top-0 ml-1.5 w-56 bg-card border border-border shadow-xl rounded-xl py-1.5 z-50 animate-in fade-in slide-in-from-left-2 duration-150"
                                      >
                                        <div className="px-3 py-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/50 mb-1">
                                          {sub.label}
                                        </div>
                                        {sub.subItems!.map(nested => (
                                          <button
                                            key={nested.id}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleObeSubItemClick(nested.id);
                                              setHovered(false);
                                              setObeHovered(false);
                                            }}
                                            className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors text-left ${
                                              isSubActive && activeObeSubTab === nested.id
                                                ? "text-primary bg-primary/10 font-bold"
                                                : "text-secondary hover:text-primary hover:bg-primary/5"
                                            }`}
                                          >
                                            <span>{nested.label}</span>
                                            <ChevronRight className="w-3.5 h-3.5 text-primary/70 shrink-0 ml-2" />
                                          </button>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                );
                              }

                              return (
                                <button
                                  key={sub.id}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSubClick(sub.id, sub.externalUrl);
                                    setHovered(false);
                                  }}
                                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors text-left ${
                                    isSubActive
                                      ? "text-primary bg-primary/10 font-bold"
                                      : "text-secondary hover:text-primary hover:bg-primary/5"
                                  }`}
                                >
                                  <span>{sub.label}</span>
                                  <ChevronRight className="w-3.5 h-3.5 text-primary/70" />
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
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
                  );
                })}
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
                {/* Modern Tab Switcher (Department, BoS, IAAB, Magazine, etc.) */}
                {topTabs && topTabs.length > 1 && (
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {topTabs.map((tab) => {
                      const isActive = activeTopTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => handleTopTabClick(tab.id)}
                          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "bg-primary text-white border-primary shadow-xs"
                              : "bg-card text-primary border-primary/80 hover:bg-primary/10 hover:border-primary"
                          }`}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                )}

                {activeTopTab === "department" ? (
                  <>
                    {dept.isUnderUpdate && (
                      <div className="mb-6 p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200 flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-semibold text-sm sm:text-base">
                            Department Portal Update Notice
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                            This department page is currently being updated. Detailed curriculum, faculty profiles, and laboratory facilities will be available shortly.
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold text-secondary mb-4" style={{ fontFamily: "var(--font-display)" }}>About Us</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {dept.about.split("\n\n").map((para, pIdx) => (
                            <p key={pIdx}>{para.trim()}</p>
                          ))}
                        </div>
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

                    <div className={`grid gap-6 mt-8 ${dept.goals && dept.goals.length > 0 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                      {dept.goals && dept.goals.length > 0 && (
                        <Card className="h-full border-l-4 border-l-amber-500">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Trophy className="w-5 h-5 text-amber-500" />
                              <h3 className="font-bold text-lg text-secondary">Goals</h3>
                            </div>
                            <ul className="space-y-2">
                              {dept.goals.map((g, i) => (
                                <li key={i} className="text-muted-foreground text-sm flex gap-2">
                                  <span className="text-amber-500 font-bold shrink-0">•</span>
                                  <span>{g}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      )}
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
                  </>
                ) : (
                  /* When BoS, IAAB, Magazine, etc. is active - Styled identically to Timetable / Mentor & Mentee */
                  (() => {
                    const currentTab = topTabs?.find(t => t.id === activeTopTab);
                    return (
                      <div className="space-y-6">
                        {currentTab?.documents && currentTab.documents.length > 0 ? (
                          <Card className="border border-border/80 shadow-xs bg-card p-6 sm:p-8">
                            <div className="space-y-6">
                              <h3 className="text-xl font-bold text-secondary tracking-tight">
                                {currentTab.title || currentTab.label}
                              </h3>

                              {currentTab.description && (
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {currentTab.description}
                                </p>
                              )}

                              {currentTab.points && currentTab.points.length > 0 && (
                                <div className="space-y-2.5 my-3 pl-1">
                                  {currentTab.points.map((pt, pIdx) => (
                                    <div key={pIdx} className="flex items-start gap-3 text-sm text-secondary">
                                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                                        {pIdx + 1}
                                      </span>
                                      <span className="leading-relaxed">{pt}</span>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {currentTab.members && currentTab.members.length > 0 && (
                                <div className="space-y-3 my-5">
                                  <h4 className="font-semibold text-sm sm:text-base text-secondary">
                                    The external members of the current department {currentTab.label} are:
                                  </h4>
                                  <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-xs">
                                    <table className="w-full text-sm border-collapse text-left">
                                      <thead>
                                        <tr className="border-b border-border bg-muted/40 text-secondary font-bold divide-x divide-border">
                                          <th className="py-3 px-3 text-center w-16">S.No</th>
                                          <th className="py-3 px-4">{currentTab.id === "iaab" ? "Name of the Expert" : "Name of the member"}</th>
                                          {currentTab.members.some(m => m.composition) && (
                                            <th className="py-3 px-4">Composition as per UGC Autonomous Guidelines</th>
                                          )}
                                          <th className="py-3 px-4">{currentTab.id === "iaab" ? "Affiliation" : "Designation & Address"}</th>
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-border">
                                        {currentTab.members.map((member, mIdx) => (
                                          <tr key={mIdx} className="divide-x divide-border hover:bg-muted/10 transition-colors">
                                            <td className="py-3 px-3 text-center font-medium text-secondary">{member.sno}</td>
                                            <td className="py-3 px-4 font-semibold text-secondary">{member.name}</td>
                                            {currentTab.members.some(m => m.composition) && (
                                              <td className="py-3 px-4 text-muted-foreground">{member.composition || "-"}</td>
                                            )}
                                            <td className="py-3 px-4 text-secondary">{member.designation}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}

                              <div className="space-y-3 pl-1 pt-2">
                                {currentTab.documents.map((doc, dIdx) => (
                                  <a
                                    key={dIdx}
                                    href={doc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 py-1 text-secondary hover:text-primary transition-colors text-sm sm:text-base"
                                  >
                                    <div className="w-4.5 h-4.5 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                                      <ChevronRight className="w-3 h-3 stroke-[3]" />
                                    </div>
                                    <span className="font-medium text-muted-foreground group-hover:text-primary group-hover:underline transition-colors">
                                      {doc.title}
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Card>
                        ) : (
                          <Card className="p-10 text-center text-muted-foreground bg-card">
                            <FileText className="w-12 h-12 mx-auto mb-3 text-muted-foreground/40" />
                            <p className="font-semibold text-base text-secondary">{currentTab?.label || "Information"} details will be uploaded soon.</p>
                          </Card>
                        )}
                      </div>
                    );
                  })()
                )}
              </motion.div>
            )}

            {activeSection === "under-graduate" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Header & Section Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-secondary flex items-center gap-2.5" style={{ fontFamily: "var(--font-display)" }}>
                      <GraduationCap className="w-7 h-7 text-primary" />
                      Under <span className="text-primary">Graduate</span>
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Academic programs, curriculum structure, and official course syllabi for {dept.name}
                    </p>
                  </div>

                  {/* Top Segmented Tab Switcher */}
                  <div className="inline-flex p-1 bg-muted/60 rounded-xl border border-border/80 shrink-0 self-start sm:self-center shadow-xs flex-wrap gap-1">
                    {(ugData.subTabs || [
                      { id: "ug", label: "UG" },
                      { id: "course-syllabus", label: "Course Syllabus" },
                    ]).map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => handleUgSubItemClick(tab.id)}
                        className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                          activeUgTab === tab.id
                            ? "bg-primary text-white shadow-xs"
                            : "text-muted-foreground hover:text-primary hover:bg-card"
                        }`}
                      >
                        {tab.id === "ug" ? "UG Overview" : tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content Area - FULL WIDTH */}
                {activeUgTab === "timetable" ? (
                  <div className="space-y-6">
                    {ugData.timeTables && ugData.timeTables.length > 0 ? (
                      <Card className="border border-border/80 shadow-xs bg-card p-6 sm:p-8">
                        <div className="space-y-8">
                          {ugData.timeTables.map((group, gIdx) => (
                            <div key={gIdx} className="space-y-4">
                              <h3 className="text-xl font-bold text-secondary tracking-tight">
                                {group.groupTitle}
                              </h3>

                              <div className="space-y-3 pl-1">
                                {group.items.map((item, iIdx) => (
                                  <a
                                    key={iIdx}
                                    href={item.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 py-1 text-secondary hover:text-primary transition-colors text-sm sm:text-base"
                                  >
                                    <div className="w-4.5 h-4.5 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                                      <ChevronRight className="w-3 h-3 stroke-[3]" />
                                    </div>
                                    <span className="font-medium text-muted-foreground group-hover:text-primary group-hover:underline transition-colors">
                                      {item.title}
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                    ) : (
                      <Card className="p-10 text-center text-muted-foreground bg-card">
                        <Calendar className="w-12 h-12 mx-auto mb-3 text-muted-foreground/40" />
                        <p className="font-semibold text-base text-secondary">Department Timetables will be uploaded soon.</p>
                      </Card>
                    )}
                  </div>
                ) : activeUgTab === "course-syllabus" ? (
                  <div className="space-y-6">
                    {/* Toolbar: Program Stream Filter & Subject Search */}
                    {ugData.syllabusTables && ugData.syllabusTables.length > 0 && (
                      <div className="bg-card border border-border/80 rounded-2xl p-4 sm:p-5 space-y-4 shadow-xs">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          {/* Search Input */}
                          <div className="relative flex-1">
                            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                              type="text"
                              value={syllabusSearch}
                              onChange={(e) => setSyllabusSearch(e.target.value)}
                              placeholder="Search subjects by name, type (Theory/Lab), or credits..."
                              className="w-full pl-10 pr-4 py-2.5 bg-muted/20 border border-border/80 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-card transition-all"
                            />
                            {syllabusSearch && (
                              <button
                                onClick={() => setSyllabusSearch("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground hover:text-foreground bg-muted px-2 py-1 rounded-md transition-colors"
                              >
                                Clear
                              </button>
                            )}
                          </div>

                          {/* Regulation indicator */}
                          <div className="text-xs font-semibold text-muted-foreground px-3.5 py-2 bg-muted/30 border border-border/70 rounded-xl shrink-0">
                            Academic Regulation: <span className="text-primary font-bold">
                              {syllabusFilter === "R20 Scheme" ? "R20 Autonomous Scheme" : syllabusFilter === "R23 Scheme" ? "R23 Autonomous Scheme" : (ugData.syllabusTables.some(t => t.title.includes("R20")) ? "R23 & R20 Schemes" : "R23 Autonomous Scheme")}
                            </span>
                          </div>
                        </div>

                        {/* Stream Filter Pills if multiple streams exist */}
                        {specializations.length > 1 && (
                          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/50">
                            <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1 mr-1">
                              <Filter className="w-3.5 h-3.5 text-primary" /> Program Stream:
                            </span>
                            <button
                              onClick={() => setSyllabusFilter("all")}
                              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                syllabusFilter === "all"
                                  ? "bg-primary text-white shadow-xs"
                                  : "bg-muted/40 text-muted-foreground border border-border/70 hover:bg-muted hover:text-foreground"
                              }`}
                            >
                              All Schemes ({ugData.syllabusTables.length})
                            </button>
                            {specializations.map((spec) => {
                              let count = 0;
                              if (spec.includes("R23")) {
                                count = ugData.syllabusTables?.filter(t => t.title.includes("R23")).length || 0;
                              } else if (spec.includes("R20")) {
                                count = ugData.syllabusTables?.filter(t => t.title.includes("R20")).length || 0;
                              } else {
                                const cleanSpec = spec.toLowerCase().replace("cse", "").replace(/[()]/g, "").trim();
                                count = ugData.syllabusTables?.filter(t => t.title.toLowerCase().includes(cleanSpec)).length || 0;
                              }
                              return (
                                <button
                                  key={spec}
                                  onClick={() => setSyllabusFilter(spec)}
                                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                    syllabusFilter === spec
                                      ? "bg-primary text-white shadow-xs"
                                      : "bg-muted/40 text-muted-foreground border border-border/70 hover:bg-muted hover:text-foreground"
                                  }`}
                                >
                                  {spec} {count > 0 ? `(${count})` : ""}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Syllabus Tables List */}
                    {(() => {
                      if (!ugData.syllabusTables || ugData.syllabusTables.length === 0) {
                        return (
                          <Card className="p-10 text-center text-muted-foreground bg-card">
                            <GraduationCap className="w-12 h-12 mx-auto mb-3 text-muted-foreground/40" />
                            <p className="font-semibold text-base text-secondary">Course Syllabus will be updated soon.</p>
                          </Card>
                        );
                      }

                      // Filter tables by stream
                      const filteredTables = ugData.syllabusTables.filter((table) => {
                        if (syllabusFilter === "all") return true;
                        if (syllabusFilter === "R23 Scheme" || syllabusFilter === "R23") {
                          return table.title.includes("R23");
                        }
                        if (syllabusFilter === "R20 Scheme" || syllabusFilter === "R20") {
                          return table.title.includes("R20");
                        }
                        const cleanSpec = syllabusFilter.toLowerCase().replace("cse", "").replace(/[()]/g, "").trim();
                        return table.title.toLowerCase().includes(cleanSpec);
                      });

                      // Filter rows within table by search query
                      const q = syllabusSearch.toLowerCase().trim();
                      const tablesWithMatchingRows = filteredTables.map((table) => {
                        if (!q) return { table, matchingRows: table.rows };
                        const matching = table.rows.filter(
                          (r) =>
                            r.name.toLowerCase().includes(q) ||
                            r.type.toLowerCase().includes(q) ||
                            r.credits.toLowerCase().includes(q) ||
                            table.title.toLowerCase().includes(q)
                        );
                        return { table, matchingRows: matching };
                      }).filter(item => item.matchingRows.length > 0 || table.title.toLowerCase().includes(q));

                      if (tablesWithMatchingRows.length === 0) {
                        return (
                          <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm">
                            <p className="text-muted-foreground font-medium">No subjects found matching "{syllabusSearch}".</p>
                            <button
                              onClick={() => {
                                setSyllabusSearch("");
                                setSyllabusFilter("all");
                              }}
                              className="mt-3 text-xs font-bold text-primary hover:underline"
                            >
                              Reset filters
                            </button>
                          </div>
                        );
                      }

                      return (
                        <div className="space-y-6">
                          {tablesWithMatchingRows.map(({ table, matchingRows }, tIdx) => (
                            <div
                              key={tIdx}
                              className="bg-card rounded-2xl border border-border/80 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden"
                            >
                              {/* Table Header Bar - Clean Institutional Standard */}
                              <div className="bg-muted/30 border-b border-border/80 px-5 py-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div className="space-y-0.5">
                                  <h3 className="text-base sm:text-lg font-bold text-secondary tracking-wide">
                                    {table.title}
                                  </h3>
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <span>Curriculum Matrix</span>
                                    <span>•</span>
                                    <span>{table.rows.length} Subjects</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="px-2.5 py-1 bg-card border border-border text-secondary rounded-full text-xs font-bold">
                                    {table.title.includes("R20") ? "R20" : "R23"}
                                  </span>
                                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold shadow-xs">
                                    Total: {calculateTableCredits(table.rows)} Credits
                                  </span>
                                </div>
                              </div>

                              {/* Table Content */}
                              <div className="overflow-x-auto">
                                <table className="w-full text-sm border-collapse text-left">
                                  <thead>
                                    <tr className="bg-muted/40 text-secondary border-b border-border text-xs uppercase font-bold tracking-wider divide-x divide-border/60">
                                      <th className="py-3.5 px-4 text-center w-16">S.No</th>
                                      <th className="py-3.5 px-6">Name of the Subject</th>
                                      <th className="py-3.5 px-4 text-center w-36">Theory / Lab</th>
                                      <th className="py-3.5 px-4 text-center w-28">Credits</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-border/60">
                                    {matchingRows.map((row, rIdx) => (
                                      <tr key={rIdx} className="hover:bg-muted/20 transition-colors even:bg-muted/10 divide-x divide-border/60">
                                        <td className="py-3.5 px-4 text-center font-medium text-muted-foreground text-xs">
                                          {row.sno}
                                        </td>
                                        <td className="py-3.5 px-6 font-semibold text-secondary">
                                          {row.name}
                                        </td>
                                        <td className="py-3.5 px-4 text-center text-sm font-medium text-muted-foreground">
                                          {row.type}
                                        </td>
                                        <td className="py-3.5 px-4 text-center text-sm font-bold text-secondary">
                                          {row.credits}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Program Overview Card */}
                    <Card className="border border-border/80 shadow-xs overflow-hidden bg-card">
                      <div className="bg-muted/30 border-b border-border/70 p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs uppercase font-bold tracking-widest text-primary">Under Graduate Program</span>
                          <h3 className="text-xl sm:text-2xl font-bold text-secondary mt-0.5" style={{ fontFamily: "var(--font-display)" }}>
                            {ugData.programTitle}
                          </h3>
                        </div>
                      </div>
                      <CardContent className="p-6 sm:p-8 space-y-6">
                        <div>
                          <h4 className="text-base font-bold text-secondary mb-2 flex items-center gap-2">
                            <Eye className="w-4 h-4 text-primary" /> Program Overview & Philosophy
                          </h4>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                            {ugData.programOverview}
                          </p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border/60">
                          <div className="bg-muted/20 border border-border/70 rounded-xl p-4">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Degree Type</span>
                            <span className="text-sm font-bold text-secondary">B.Tech (4 Years / 8 Semesters)</span>
                          </div>
                          <div className="bg-muted/20 border border-border/70 rounded-xl p-4">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Regulation</span>
                            <span className="text-sm font-bold text-secondary">
                              {ugData.syllabusTables?.some(t => t.title.includes("R20")) ? "R23 & R20 Schemes" : "R23 Autonomous Scheme"}
                            </span>
                          </div>
                          <div className="bg-muted/20 border border-border/70 rounded-xl p-4">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Curriculum</span>
                            <button
                              onClick={() => handleUgSubItemClick("course-syllabus")}
                              className="text-sm font-bold text-primary hover:underline flex items-center gap-1 mt-0.5"
                            >
                              <span>Explore Syllabi</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Additional Department Sections (Curriculum, Dept Info, Activities, Computer Lab) */}
                    {ugData.sections && ugData.sections.length > 0 && (
                      <div className="grid md:grid-cols-2 gap-6">
                        {ugData.sections.map((sec, sIdx) => (
                          <Card key={sIdx} className="border border-border/80 shadow-xs bg-card">
                            <CardContent className="p-6 space-y-3">
                              <h4 className="text-lg font-bold text-secondary flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                                {sec.title}
                              </h4>
                              {sec.description && (
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  {sec.description}
                                </p>
                              )}
                              {sec.points && sec.points.length > 0 && (
                                <ul className="space-y-2">
                                  {sec.points.map((pt, pIdx) => (
                                    <li key={pIdx} className="text-muted-foreground text-sm flex gap-2">
                                      <span className="text-primary font-bold shrink-0">•</span>
                                      <span className="leading-relaxed">{pt}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>
                )}
            </motion.div>
          )}

            {activeSection === "post-graduate" && pgData && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Header Card */}
                <Card className="border border-border/80 shadow-xs overflow-hidden bg-card">
                  <div className="bg-muted/30 border-b border-border/70 p-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-bold tracking-widest text-primary">Post Graduate Program</span>
                        <h3 className="text-xl sm:text-2xl font-bold text-secondary mt-0.5" style={{ fontFamily: "var(--font-display)" }}>
                          {pgData.programTitle}
                        </h3>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold shadow-xs">
                      R24 Autonomous Scheme
                    </span>
                  </div>
                </Card>

                {/* Sub-tabs if more than 1 */}
                {pgData.subTabs && pgData.subTabs.length > 1 && (
                  <div className="flex flex-wrap items-center gap-2">
                    {pgData.subTabs.map((sub) => {
                      const isActive = activePgTab === sub.id;
                      return (
                        <button
                          key={sub.id}
                          onClick={() => handlePgSubItemClick(sub.id, sub.externalUrl)}
                          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "bg-primary text-white border-primary shadow-xs"
                              : "bg-card text-primary border-primary/80 hover:bg-primary/10 hover:border-primary"
                          }`}
                        >
                          {sub.label}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Search & Syllabus Tables */}
                <div className="space-y-6">
                  <div className="bg-muted/20 border border-border/70 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="relative flex-1 max-w-md">
                      <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={pgSearch}
                        onChange={(e) => setPgSearch(e.target.value)}
                        placeholder="Search PG subjects by name or type..."
                        className="w-full pl-9 pr-3 py-2 bg-card border border-border rounded-lg text-xs sm:text-sm text-secondary placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    {pgSearch && (
                      <button
                        onClick={() => setPgSearch("")}
                        className="text-xs font-bold text-primary hover:underline self-start sm:self-center"
                      >
                        Clear Search
                      </button>
                    )}
                  </div>

                  <div className="space-y-6">
                    {pgData.syllabusTables.map((table, tIdx) => {
                      const matchingRows = table.rows.filter((r) =>
                        pgSearch
                          ? r.name.toLowerCase().includes(pgSearch.toLowerCase()) ||
                            r.type.toLowerCase().includes(pgSearch.toLowerCase())
                          : true
                      );
                      if (pgSearch && matchingRows.length === 0) return null;

                      return (
                        <div key={tIdx} className="bg-card border border-border/80 rounded-2xl shadow-xs overflow-hidden">
                          <div className="bg-muted/30 border-b border-border/70 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                              <h3 className="text-base sm:text-lg font-bold text-secondary">
                                {table.title}
                              </h3>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                                <span>Curriculum Matrix</span>
                                <span>•</span>
                                <span>{table.rows.length} Subjects</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="px-2.5 py-1 bg-card border border-border text-secondary rounded-full text-xs font-bold">
                                R24
                              </span>
                              <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold shadow-xs">
                                Total: {calculateTableCredits(table.rows)} Credits
                              </span>
                            </div>
                          </div>

                          <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse text-left">
                              <thead>
                                <tr className="bg-muted/40 text-secondary border-b border-border text-xs uppercase font-bold tracking-wider divide-x divide-border/60">
                                  <th className="py-3.5 px-4 text-center w-16">S.No</th>
                                  <th className="py-3.5 px-6">Name of the Subject</th>
                                  <th className="py-3.5 px-4 text-center w-36">Theory / Lab</th>
                                  <th className="py-3.5 px-4 text-center w-28">Credits</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/60">
                                {matchingRows.map((row, rIdx) => (
                                  <tr key={rIdx} className="hover:bg-muted/20 transition-colors even:bg-muted/10 divide-x divide-border/60">
                                    <td className="py-3.5 px-4 text-center font-medium text-muted-foreground text-xs">
                                      {row.sno}
                                    </td>
                                    <td className="py-3.5 px-6 font-semibold text-secondary">
                                      {row.name}
                                    </td>
                                    <td className="py-3.5 px-4 text-center text-sm font-medium text-muted-foreground">
                                      {row.type}
                                    </td>
                                    <td className="py-3.5 px-4 text-center text-sm font-bold text-secondary">
                                      {row.credits}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      );
                    })}
                  </div>
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
                {dept.facilities.length === 0 ? (
                  <p className="text-muted-foreground text-sm">Facility details will be updated soon.</p>
                ) : (
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
                )}
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

            {activeSection === "more" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Header & Section Title - Clean title only */}
                <div className="pb-4 border-b border-border/60">
                  <h2 className="text-2xl sm:text-3xl font-bold text-secondary flex items-center gap-2.5" style={{ fontFamily: "var(--font-display)" }}>
                    <Layers className="w-7 h-7 text-primary" />
                    {activeMoreTab === "lab" ? (
                      <span>Department <span className="text-primary">Lab</span></span>
                    ) : activeMoreTab === "civil-engineering-notes" ? (
                      <span>Civil Engineering <span className="text-primary">Notes</span></span>
                    ) : activeMoreTab === "course-attainment" ? (
                      <span>Course <span className="text-primary">Attainment</span></span>
                    ) : activeMoreTab === "alumni" ? (
                      <span>Alumni <span className="text-primary">Guest Lectures & Interaction</span></span>
                    ) : activeMoreTab === "stock-register" ? (
                      <span>Stock <span className="text-primary">Register</span></span>
                    ) : activeMoreTab === "student-innovative-projects" ? (
                      <span>Student <span className="text-primary">Innovative Projects</span></span>
                    ) : activeMoreTab === "surveys" ? (
                      <span>Stakeholder <span className="text-primary">Surveys</span></span>
                    ) : activeMoreTab === "minor" ? (
                      <span>Minor <span className="text-primary">Degree</span></span>
                    ) : activeMoreTab === "mentor-mentee" ? (
                      <span>Mentor & <span className="text-primary">Mentee</span></span>
                    ) : activeMoreTab === "interdisciplinary-projects" ? (
                      <span>Interdisciplinary <span className="text-primary">Projects</span></span>
                    ) : activeMoreTab === "doctoral" ? (
                      <span>Doctoral <span className="text-primary">Program</span></span>
                    ) : activeMoreTab === "feedback" ? (
                      <span>Stakeholder <span className="text-primary">Feedback</span></span>
                    ) : activeMoreTab === "innovative-teaching" ? (
                      <span>Innovative <span className="text-primary">Teaching Approach</span></span>
                    ) : activeMoreTab === "obe" ? (
                      <span>Outcome Based Education <span className="text-primary">(OBE)</span></span>
                    ) : (
                      <span>More <span className="text-primary">Information</span></span>
                    )}
                  </h2>
                </div>

                {/* Modern Tab Switcher for More subtabs */}
                {moreData.subTabs && moreData.subTabs.length > 1 && (
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {moreData.subTabs.map((tab) => {
                      const isActive = activeMoreTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => {
                            if (tab.externalUrl && tab.directPdf) {
                              window.open(tab.externalUrl, "_blank", "noopener,noreferrer");
                              return;
                            }
                            setActiveMoreTab(tab.id);
                            navigate(`/department/${deptKey}/more/${tab.id}`, { replace: true });
                          }}
                          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "bg-primary text-white border-primary shadow-xs"
                              : "bg-card text-primary border-primary/80 hover:bg-primary/10 hover:border-primary"
                          }`}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Content Area */}
                {activeMoreTab === "lab" ? (
                  <div className="space-y-6">
                    {moreData.labPdfUrl ? (
                      <Card className="border border-border/80 shadow-xs bg-card overflow-hidden">
                        <div className="p-4 sm:p-6 bg-muted/20 border-b border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold text-secondary">Department Laboratories & Software</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                              State-of-the-art laboratory infrastructure, configurations, and licensed software
                            </p>
                          </div>
                          <a
                            href={moreData.labPdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition-colors shrink-0 self-start sm:self-center"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Open Full Document</span>
                          </a>
                        </div>
                        <div className="p-4 sm:p-6">
                          <iframe
                            src={moreData.labPdfUrl}
                            title="Department Laboratories and Software"
                            className="w-full h-[750px] rounded-lg border border-border shadow-xs"
                          />
                        </div>
                      </Card>
                    ) : (
                      <Card className="p-10 text-center text-muted-foreground bg-card">
                        <Layers className="w-12 h-12 mx-auto mb-3 text-muted-foreground/40" />
                        <p className="font-semibold text-base text-secondary">Department laboratory details will be updated soon.</p>
                      </Card>
                    )}
                  </div>
                ) : activeMoreTab === "civil-engineering-notes" ? (
                  <div className="space-y-8">
                    {moreData.civilNotes ? (
                      <>
                        {/* FDP Section */}
                        <div className="space-y-4">
                          <div className="text-center space-y-1 mb-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                              Department of Civil Engineering
                            </h3>
                            <h4 className="text-lg sm:text-xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                              Five-Day Faculty Development Programme (Hybrid Mode)
                            </h4>
                            <h4 className="text-lg sm:text-xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                              “AICE 2025: Advances in Intelligent Civil Engineering”
                            </h4>
                          </div>

                          <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-xs">
                            <table className="w-full text-sm border-collapse text-left">
                              <thead>
                                <tr className="border-b border-border text-red-700 font-bold divide-x divide-border bg-muted/20">
                                  <th className="py-3 px-3 text-center w-16 text-red-700 font-bold">S.No.</th>
                                  <th className="py-3 px-6 text-center text-red-700 font-bold">Resource Person</th>
                                  <th className="py-3 px-6 text-center text-red-700 font-bold w-80">Link</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border">
                                {moreData.civilNotes.fdpSessions.map((session, sIdx) => (
                                  <Fragment key={sIdx}>
                                    <tr className="bg-muted/10 border-t border-b border-border">
                                      <td colSpan={3} className="py-2.5 px-4 text-center font-bold text-red-600 text-sm">
                                        {session.dateSchedule}
                                      </td>
                                    </tr>
                                    <tr className="divide-x divide-border hover:bg-muted/10 transition-colors">
                                      <td className="py-4 px-3 text-center font-bold text-red-600 align-top">
                                        {session.sno}
                                      </td>
                                      <td className="py-4 px-6 align-top space-y-1">
                                        <p className="font-bold text-red-800 dark:text-red-400 text-sm sm:text-base">
                                          {session.resourcePerson.split(",")[0]}
                                        </p>
                                        <p className="text-red-900/80 dark:text-red-300/80 text-xs sm:text-sm">
                                          {session.resourcePerson.split(",").slice(1).join(",").trim()}
                                        </p>
                                        <p className="text-red-900/90 dark:text-red-200 text-xs sm:text-sm pt-1">
                                          <span className="font-bold text-red-800 dark:text-red-400">Topic: </span>
                                          {session.topic}
                                        </p>
                                      </td>
                                      <td className="py-4 px-6 align-middle text-center">
                                        <a
                                          href={session.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-blue-700 hover:text-blue-900 dark:text-blue-400 underline break-all text-xs sm:text-sm font-medium"
                                        >
                                          {session.link}
                                        </a>
                                      </td>
                                    </tr>
                                  </Fragment>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Course Materials */}
                        <div className="space-y-4 pt-6">
                          <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-xs">
                            <table className="w-full text-sm border-collapse text-left">
                              <thead>
                                <tr className="bg-[#8B0000] text-white border-b border-border font-bold divide-x divide-white/20">
                                  <th className="py-3.5 px-3 text-center w-16">S.No</th>
                                  <th className="py-3.5 px-4 w-44">Course Name</th>
                                  <th className="py-3.5 px-6">Topic Name</th>
                                  <th className="py-3.5 px-6">Course Material</th>
                                  <th className="py-3.5 px-6">Feedback</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border">
                                {moreData.civilNotes.materials.map((mat, mIdx) => (
                                  <tr key={mIdx} className="divide-x divide-border hover:bg-muted/10 transition-colors">
                                    <td className="py-3.5 px-3 text-center font-medium text-secondary">
                                      {mat.sno}
                                    </td>
                                    <td className="py-3.5 px-4 font-semibold text-secondary">
                                      {mat.courseName}
                                    </td>
                                    <td className="py-3.5 px-6 text-secondary">
                                      {mat.topicName}
                                    </td>
                                    <td className="py-3.5 px-6">
                                      <a
                                        href={mat.materialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-700 hover:text-blue-900 dark:text-blue-400 underline break-all text-xs sm:text-sm"
                                      >
                                        {mat.materialUrl}
                                      </a>
                                    </td>
                                    <td className="py-3.5 px-6">
                                      {mat.feedbackUrl && (
                                        <a
                                          href={mat.feedbackUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-blue-700 hover:text-blue-900 dark:text-blue-400 underline break-all text-xs sm:text-sm"
                                        >
                                          {mat.feedbackUrl}
                                        </a>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Card className="p-10 text-center text-muted-foreground bg-card">
                        <FileText className="w-12 h-12 mx-auto mb-3 text-muted-foreground/40" />
                        <p className="font-semibold text-base text-secondary">Civil engineering notes will be uploaded soon.</p>
                      </Card>
                    )}
                  </div>
                ) : activeMoreTab === "course-attainment" ? (
                  <div className="space-y-6">
                    <Card className="border border-border/80 shadow-xs bg-card p-6 sm:p-8">
                      <div className="space-y-6">
                        <div className="border-b border-border/60 pb-3">
                          <h3 className="text-xl sm:text-2xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                            Course Attainment
                          </h3>
                        </div>

                        {moreData.courseAttainment && moreData.courseAttainment.length > 0 ? (
                          <div className="space-y-3 pl-1">
                            {moreData.courseAttainment.map((item, aIdx) => (
                              <a
                                key={aIdx}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 py-1.5 text-secondary hover:text-primary transition-colors text-sm sm:text-base"
                              >
                                <div className="w-4.5 h-4.5 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                                  <ChevronRight className="w-3 h-3 stroke-[3]" />
                                </div>
                                <span className="font-medium text-muted-foreground group-hover:text-primary group-hover:underline transition-colors">
                                  {item.title}
                                </span>
                              </a>
                            ))}
                          </div>
                        ) : (
                          <p className="text-center text-muted-foreground py-8">No course attainment records available at this time.</p>
                        )}
                      </div>
                    </Card>
                  </div>
                ) : activeMoreTab === "alumni" ? (
                  <div className="space-y-6">
                    <Card className="border border-border/80 shadow-xs bg-card p-6 sm:p-8">
                      <div className="space-y-8">
                        {moreData.alumniEvents && moreData.alumniEvents.length > 0 ? (
                          <div className="space-y-8">
                            {moreData.alumniEvents.map((group, gIdx) => (
                              <div key={gIdx} className="space-y-4">
                                <h3 className="text-xl sm:text-2xl font-bold text-secondary tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                                  {group.groupTitle}
                                </h3>
                                <div className="space-y-5 pl-1">
                                  {group.documents.map((doc, dIdx) => (
                                    <div key={dIdx} className="space-y-1">
                                      <div className="flex items-start gap-2.5">
                                        <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs">
                                          <ChevronRight className="w-2.5 h-2.5 stroke-[3]" />
                                        </div>
                                        <span className="font-semibold text-secondary text-sm sm:text-base leading-snug">
                                          {doc.title}
                                        </span>
                                      </div>
                                      <div className="pl-6.5">
                                        <a
                                          href={doc.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-xs sm:text-sm text-muted-foreground hover:text-primary hover:underline transition-colors inline-flex items-center gap-1 font-medium"
                                        >
                                          Click here for Report on Event
                                        </a>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-center text-muted-foreground py-8">No alumni event records available at this time.</p>
                        )}
                      </div>
                    </Card>
                  </div>
                ) : activeMoreTab === "stock-register" ? (
                  <div className="space-y-6">
                    {(() => {
                      const stockPdf = moreData.stockRegisterPdfUrl || (deptKey === "ce" || deptKey === "civil" || deptKey === "6"
                        ? "https://mits.ac.in/assets/pdf/stock-registers/Civil%20Stock%20Register.pdf"
                        : "https://mits.ac.in/assets/pdf/stock-registers/EEE%20Stock%20Register.pdf");
                      return (
                        <Card className="border border-border/80 shadow-xs bg-card overflow-hidden">
                          <div className="p-4 sm:p-6 bg-muted/20 border-b border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-bold text-secondary">Department Stock Register</h3>
                              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                                Equipment, instruments, and laboratory inventory register records
                              </p>
                            </div>
                            <a
                              href={stockPdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition-colors shrink-0 self-start sm:self-center"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Open Full Document</span>
                            </a>
                          </div>
                          <div className="p-4 sm:p-6">
                            <iframe
                              src={stockPdf}
                              title="Department Stock Register"
                              className="w-full h-[750px] rounded-lg border border-border shadow-xs"
                            />
                          </div>
                        </Card>
                      );
                    })()}
                  </div>
                ) : activeMoreTab === "mentor-mentee" ? (
                  <div className="space-y-6">
                    {moreData.mentorMentee && moreData.mentorMentee.length > 0 ? (
                      <Card className="border border-border/80 shadow-xs bg-card p-6 sm:p-8">
                        <div className="space-y-8">
                          {moreData.mentorMentee.map((group, gIdx) => (
                            <div key={gIdx} className="space-y-4">
                              <h3 className="text-xl font-bold text-secondary tracking-tight">
                                {group.groupTitle}
                              </h3>

                              <div className="space-y-3 pl-1">
                                {group.items.map((item, iIdx) => (
                                  <a
                                    key={iIdx}
                                    href={item.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 py-1 text-secondary hover:text-primary transition-colors text-sm sm:text-base"
                                  >
                                    <div className="w-4.5 h-4.5 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                                      <ChevronRight className="w-3 h-3 stroke-[3]" />
                                    </div>
                                    <span className="font-medium text-muted-foreground group-hover:text-primary group-hover:underline transition-colors">
                                      {item.title}
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                    ) : (
                      <Card className="p-10 text-center text-muted-foreground bg-card">
                        <Users className="w-12 h-12 mx-auto mb-3 text-muted-foreground/40" />
                        <p className="font-semibold text-base text-secondary">Mentor-Mentee allocation details will be uploaded soon.</p>
                      </Card>
                    )}
                  </div>
                ) : activeMoreTab === "minor" ? (
                  <div className="space-y-6">
                    {moreData.minor ? (
                      <Card className="border border-border/80 shadow-xs overflow-hidden bg-card">
                        {/* Header */}
                        <div className="bg-muted/30 border-b border-border/70 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                              <GraduationCap className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <span className="text-xs uppercase font-bold tracking-widest text-primary">Interdisciplinary Specialization</span>
                              <h3 className="text-2xl sm:text-3xl font-bold text-secondary mt-0.5" style={{ fontFamily: "var(--font-display)" }}>
                                {moreData.minor.title}
                              </h3>
                              {moreData.minor.tagline && (
                                <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
                                  {moreData.minor.tagline}
                                </p>
                              )}
                            </div>
                          </div>

                          {moreData.minor.pdfUrl && (
                            <a
                              href={moreData.minor.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition-colors shrink-0 self-start md:self-center"
                            >
                              <FileText className="w-4 h-4" />
                              <span>{moreData.minor.pdfLabel || "Download Minor Syllabus"}</span>
                            </a>
                          )}
                        </div>

                        <CardContent className="p-6 sm:p-8 space-y-8">
                          {/* Overview */}
                          <div>
                            <h4 className="text-base font-bold text-secondary mb-3 flex items-center gap-2">
                              <Eye className="w-4 h-4 text-primary" /> Overview & Purpose
                            </h4>
                            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                              {moreData.minor.overview}
                            </p>
                          </div>

                          {/* Sections / Highlights Grid */}
                          {moreData.minor.highlights && moreData.minor.highlights.length > 0 && (
                            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-border/60">
                              {moreData.minor.highlights.map((sec, sIdx) => (
                                <div key={sIdx} className="bg-muted/20 border border-border/70 rounded-xl p-5 space-y-3">
                                  <h5 className="font-bold text-secondary text-sm sm:text-base flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    {sec.title}
                                  </h5>
                                  <ul className="space-y-2 pl-1">
                                    {sec.points.map((pt, pIdx) => (
                                      <li key={pIdx} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                                        <span className="text-primary font-bold mt-0.5">•</span>
                                        <span>{pt}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* PDF Document direct bullet link */}
                          {moreData.minor.pdfUrl && (
                            <div className="pt-4 border-t border-border/60">
                              <h5 className="text-sm font-bold text-secondary mb-3">Official Curriculum & Regulations</h5>
                              <a
                                href={moreData.minor.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 py-1 text-secondary hover:text-primary transition-colors text-sm sm:text-base"
                              >
                                <div className="w-4.5 h-4.5 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                                  <ChevronRight className="w-3 h-3 stroke-[3]" />
                                </div>
                                <span className="font-medium text-muted-foreground group-hover:text-primary group-hover:underline transition-colors">
                                  {moreData.minor.pdfLabel || "Minor - 2025-26"}
                                </span>
                              </a>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ) : (
                      <Card className="p-10 text-center text-muted-foreground bg-card">
                        <GraduationCap className="w-12 h-12 mx-auto mb-3 text-muted-foreground/40" />
                        <p className="font-semibold text-base text-secondary">Minor degree program details will be updated soon.</p>
                      </Card>
                    )}
                  </div>
                ) : activeMoreTab === "interdisciplinary-projects" ? (
                  <div className="space-y-6">
                    {moreData.interdisciplinaryProjects && moreData.interdisciplinaryProjects.length > 0 ? (
                      <Card className="border border-border/80 shadow-xs bg-card p-6 sm:p-8">
                        <div className="space-y-8">
                          {moreData.interdisciplinaryProjects.map((group, gIdx) => (
                            <div key={gIdx} className="space-y-4">
                              <h3 className="text-xl font-bold text-secondary tracking-tight">
                                {group.groupTitle}
                              </h3>

                              <div className="space-y-3 pl-1">
                                {group.items.map((item, iIdx) => (
                                  <a
                                    key={iIdx}
                                    href={item.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 py-1 text-secondary hover:text-primary transition-colors text-sm sm:text-base"
                                  >
                                    <div className="w-4.5 h-4.5 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                                      <ChevronRight className="w-3 h-3 stroke-[3]" />
                                    </div>
                                    <span className="font-medium text-muted-foreground group-hover:text-primary group-hover:underline transition-colors">
                                      {item.title}
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                    ) : (
                      <Card className="p-10 text-center text-muted-foreground bg-card">
                        <Layers className="w-12 h-12 mx-auto mb-3 text-muted-foreground/40" />
                        <p className="font-semibold text-base text-secondary">Interdisciplinary project details will be uploaded soon.</p>
                      </Card>
                    )}
                  </div>
                ) : activeMoreTab === "doctoral" ? (
                  <div className="space-y-6">
                    {moreData.doctoral ? (
                      <Card className="border border-border/80 shadow-xs overflow-hidden bg-card">
                        <div className="bg-muted/30 border-b border-border/70 p-6 sm:p-8">
                          <span className="text-xs uppercase font-bold tracking-widest text-primary">Research & Ph.D</span>
                          <h3 className="text-2xl sm:text-3xl font-bold text-secondary mt-0.5" style={{ fontFamily: "var(--font-display)" }}>
                            {moreData.doctoral.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mt-3">
                            {moreData.doctoral.description}
                          </p>
                        </div>

                        {moreData.doctoral.scholars && moreData.doctoral.scholars.length > 0 && (
                          <div className="p-6 sm:p-8 space-y-4">
                            {moreData.doctoral.batchTitle && (
                              <h4 className="text-base sm:text-lg font-bold text-secondary">
                                {moreData.doctoral.batchTitle}
                              </h4>
                            )}
                            <div className="overflow-x-auto rounded-xl border border-border">
                              <table className="w-full text-sm border-collapse text-left">
                                <thead>
                                  <tr className="bg-muted/40 text-secondary border-b border-border text-xs uppercase font-bold tracking-wider divide-x divide-border/60">
                                    <th className="py-3 px-3 text-center w-14">S.No</th>
                                    <th className="py-3 px-4">Research Scholar</th>
                                    <th className="py-3 px-4">Research Guide</th>
                                    <th className="py-3 px-4 text-center w-36">Date of Joining</th>
                                    <th className="py-3 px-6">Research Title / Area</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-border/60">
                                  {moreData.doctoral.scholars.map((sch, sIdx) => (
                                    <tr key={sIdx} className="hover:bg-muted/20 transition-colors even:bg-muted/10 divide-x divide-border/60">
                                      <td className="py-3 px-3 text-center font-medium text-muted-foreground text-xs">
                                        {sch.sno}
                                      </td>
                                      <td className="py-3 px-4 font-semibold text-secondary">
                                        {sch.name}
                                      </td>
                                      <td className="py-3 px-4 text-muted-foreground font-medium">
                                        {sch.guide}
                                      </td>
                                      <td className="py-3 px-4 text-center text-xs text-muted-foreground font-medium">
                                        {sch.dateOfJoining}
                                      </td>
                                      <td className="py-3 px-6 text-sm text-secondary">
                                        {sch.researchTitle}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                      </Card>
                    ) : (
                      <Card className="p-10 text-center text-muted-foreground bg-card">
                        <GraduationCap className="w-12 h-12 mx-auto mb-3 text-muted-foreground/40" />
                        <p className="font-semibold text-base text-secondary">Doctoral program details will be updated soon.</p>
                      </Card>
                    )}
                  </div>
                ) : activeMoreTab === "feedback" ? (
                  <div className="space-y-6">
                    {moreData.feedback && moreData.feedback.documents.length > 0 ? (
                      <Card className="border border-border/80 shadow-xs bg-card p-6 sm:p-8">
                        <div className="space-y-6">
                          <h3 className="text-xl font-bold text-secondary tracking-tight">
                            {moreData.feedback.groupTitle}
                          </h3>
                          <div className="space-y-3 pl-1">
                            {moreData.feedback.documents.map((doc, dIdx) => (
                              <a
                                key={dIdx}
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 py-1 text-secondary hover:text-primary transition-colors text-sm sm:text-base"
                              >
                                <div className="w-4.5 h-4.5 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                                  <ChevronRight className="w-3 h-3 stroke-[3]" />
                                </div>
                                <span className="font-medium text-muted-foreground group-hover:text-primary group-hover:underline transition-colors">
                                  {doc.title}
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Card>
                    ) : (
                      <Card className="p-10 text-center text-muted-foreground bg-card">
                        <FileText className="w-12 h-12 mx-auto mb-3 text-muted-foreground/40" />
                        <p className="font-semibold text-base text-secondary">Feedback analysis reports will be uploaded soon.</p>
                      </Card>
                    )}
                  </div>
                ) : activeMoreTab === "innovative-teaching" ? (
                  <div className="space-y-6">
                    {moreData.innovativeTeaching && moreData.innovativeTeaching.documents.length > 0 ? (
                      <Card className="border border-border/80 shadow-xs bg-card p-6 sm:p-8">
                        <div className="space-y-6">
                          <h3 className="text-xl font-bold text-secondary tracking-tight">
                            {moreData.innovativeTeaching.groupTitle}
                          </h3>
                          <div className="space-y-3 pl-1">
                            {moreData.innovativeTeaching.documents.map((doc, dIdx) => (
                              <a
                                key={dIdx}
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 py-1 text-secondary hover:text-primary transition-colors text-sm sm:text-base"
                              >
                                <div className="w-4.5 h-4.5 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                                  <ChevronRight className="w-3 h-3 stroke-[3]" />
                                </div>
                                <span className="font-medium text-muted-foreground group-hover:text-primary group-hover:underline transition-colors">
                                  {doc.title}
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Card>
                    ) : (
                      <Card className="p-10 text-center text-muted-foreground bg-card">
                        <Lightbulb className="w-12 h-12 mx-auto mb-3 text-muted-foreground/40" />
                        <p className="font-semibold text-base text-secondary">Innovative teaching details will be uploaded soon.</p>
                      </Card>
                    )}
                  </div>
                ) : activeMoreTab === "student-innovative-projects" ? (
                  <div className="space-y-6">
                    {moreData.studentProjects && moreData.studentProjects.documents.length > 0 ? (
                      <Card className="border border-border/80 shadow-xs bg-card p-6 sm:p-8">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-bold text-secondary tracking-tight">
                              {moreData.studentProjects.groupTitle}
                            </h3>
                            {moreData.studentProjects.description && (
                              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                {moreData.studentProjects.description}
                              </p>
                            )}
                          </div>
                          <div className="space-y-3 pl-1">
                            {moreData.studentProjects.documents.map((doc, dIdx) => (
                              <a
                                key={dIdx}
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 py-1 text-secondary hover:text-primary transition-colors text-sm sm:text-base"
                              >
                                <div className="w-4.5 h-4.5 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                                  <ChevronRight className="w-3 h-3 stroke-[3]" />
                                </div>
                                <span className="font-medium text-muted-foreground group-hover:text-primary group-hover:underline transition-colors">
                                  {doc.title}
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Card>
                    ) : (
                      <Card className="p-10 text-center text-muted-foreground bg-card">
                        <Lightbulb className="w-12 h-12 mx-auto mb-3 text-muted-foreground/40" />
                        <p className="font-semibold text-base text-secondary">Student innovative projects will be uploaded soon.</p>
                      </Card>
                    )}
                  </div>
                ) : activeMoreTab === "surveys" ? (
                  <div className="space-y-6">
                    <Card className="border border-border/80 shadow-xs bg-card p-6 sm:p-8">
                      <div className="space-y-8">
                        <div className="border-b border-border/60 pb-4">
                          <h3 className="text-2xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                            Surveys
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                            Feedback surveys and Action Taken Reports from stakeholders
                          </p>
                        </div>

                        {(() => {
                          const surveysList = moreData.surveys || moreData.obe?.surveys;
                          return surveysList && surveysList.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-6">
                              {surveysList.map((cat, cIdx) => (
                                <div key={cIdx} className="bg-muted/20 border border-border/70 rounded-xl p-5 space-y-3">
                                  <h4 className="text-base sm:text-lg font-bold text-secondary flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                    {cat.title}
                                  </h4>
                                  <div className="space-y-2.5 pl-1">
                                    {cat.links.map((link, lIdx) => (
                                      <a
                                        key={lIdx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 py-1 text-secondary hover:text-primary transition-colors text-xs sm:text-sm"
                                      >
                                        <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                          <ChevronRight className="w-3 h-3 stroke-[2.5]" />
                                        </div>
                                        <span className="font-medium text-muted-foreground group-hover:text-primary group-hover:underline transition-colors truncate">
                                          {link.title}
                                        </span>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-center text-muted-foreground py-8">No survey records available at this time.</p>
                          );
                        })()}
                      </div>
                    </Card>
                  </div>
                ) : activeMoreTab === "obe" ? (
                  <div className="space-y-6">
                    {/* OBE Top Tabs Switcher - matches screenshot exactly */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-6">
                      {(moreData.obe?.subTabs || [
                        { id: "pos-psos-peos", label: "POs, PSOs & PEOs" },
                        { id: "surveys", label: "Surveys" },
                        { id: "remedial-classes", label: "Remedial Classes" },
                        { id: "copo-attainment", label: "CO-PO Attainment" }
                      ]).map((tab) => {
                        const isActive = activeObeSubTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => {
                              setActiveObeSubTab(tab.id);
                              navigate(`/department/${deptKey}/obe/${tab.id}`, { replace: true });
                            }}
                            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                              isActive
                                ? "bg-primary text-white border-primary shadow-sm"
                                : "bg-background text-primary border-primary/70 hover:bg-primary/5 hover:border-primary"
                            }`}
                          >
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Content Section based on activeObeSubTab */}
                    {activeObeSubTab === "pos-psos-peos" ? (
                      moreData.obe?.posPsosPeosPdfUrl ? (
                        <div className="space-y-6">
                          <Card className="border border-border/80 shadow-xs bg-card overflow-hidden">
                            <div className="p-4 sm:p-6 bg-muted/20 border-b border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div>
                                <h3 className="text-xl font-bold text-secondary">PEOs, POs & PSOs</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                                  Program Educational Objectives, Program Outcomes and Program Specific Outcomes
                                </p>
                              </div>
                              <a
                                href={moreData.obe.posPsosPeosPdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition-colors shrink-0 self-start sm:self-center"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>Open Full Document</span>
                              </a>
                            </div>
                            <div className="p-4 sm:p-6">
                              <iframe
                                src={moreData.obe.posPsosPeosPdfUrl}
                                title="PEOs, POs & PSOs"
                                className="w-full h-[750px] rounded-lg border border-border shadow-xs"
                              />
                            </div>
                          </Card>
                        </div>
                      ) : (
                        <div className="w-full flex justify-center bg-card rounded-xl border border-border/80 p-2 sm:p-4 shadow-xs overflow-hidden">
                          <img
                            src={moreData.obe?.posPsosPeosImage || "https://mits.ac.in/public/uploads/event/pso-po-peo.jpg"}
                            alt="POs, PSOs & PEOs"
                            className="w-full h-auto object-contain block max-w-5xl rounded-lg"
                            loading="lazy"
                          />
                        </div>
                      )
                    ) : activeObeSubTab === "surveys" ? (
                      <div className="space-y-6">
                        <Card className="border border-border/80 shadow-xs bg-card p-6 sm:p-8">
                          <div className="space-y-8">
                            <div className="border-b border-border/60 pb-4">
                              <h3 className="text-2xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                                Surveys
                              </h3>
                              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                Feedback surveys collected across students, graduates, employers, and alumni
                              </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              {moreData.obe?.surveys?.map((cat, cIdx) => (
                                <div key={cIdx} className="bg-muted/20 border border-border/70 rounded-xl p-5 space-y-3">
                                  <h4 className="text-base sm:text-lg font-bold text-secondary flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                    {cat.title}
                                  </h4>
                                  <div className="space-y-2.5 pl-1">
                                    {cat.links.map((link, lIdx) => (
                                      <a
                                        key={lIdx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 py-1 text-secondary hover:text-primary transition-colors text-sm"
                                      >
                                        <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                                          <ChevronRight className="w-2.5 h-2.5 stroke-[3]" />
                                        </div>
                                        <span className="font-medium text-muted-foreground group-hover:text-primary group-hover:underline transition-colors">
                                          {link.title}
                                        </span>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </div>
                    ) : activeObeSubTab === "remedial-classes" ? (
                      <div className="space-y-6">
                        <Card className="border border-border/80 shadow-xs bg-card p-6 sm:p-8">
                          <div className="space-y-6">
                            <div className="border-b border-border/60 pb-4">
                              <h3 className="text-2xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                                Remedial Classes
                              </h3>
                              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                Academic remedial schedules and timetables across odd and even semesters
                              </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-3">
                              {moreData.obe?.remedialClasses?.map((item, rIdx) => (
                                <a
                                  key={rIdx}
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group flex items-center justify-between p-3.5 rounded-xl border border-border/70 bg-muted/20 hover:bg-primary/5 hover:border-primary/40 transition-all text-secondary hover:text-primary shadow-2xs"
                                >
                                  <div className="flex items-center gap-3 min-w-0">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                      <FileText className="w-4 h-4" />
                                    </div>
                                    <span className="font-semibold text-xs sm:text-sm truncate text-secondary group-hover:text-primary">
                                      {item.title}
                                    </span>
                                  </div>
                                  <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 ml-2 transition-transform group-hover:translate-y-0.5" />
                                </a>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </div>
                    ) : activeObeSubTab === "graduate-exit-survey" ? (
                      <div className="space-y-6">
                        <Card className="border border-border/80 shadow-xs bg-card p-6 sm:p-8">
                          <div className="space-y-6">
                            <div className="border-b border-border/60 pb-4">
                              <h3 className="text-2xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                                Graduate Exit Survey
                              </h3>
                              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                Graduate exit survey feedback analysis reports across graduating batches
                              </p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {moreData.obe?.graduateExitSurvey?.map((item, gIdx) => (
                                <a
                                  key={gIdx}
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group flex flex-col justify-between p-5 rounded-xl border border-border/70 bg-muted/20 hover:bg-primary/5 hover:border-primary/40 transition-all text-secondary hover:text-primary shadow-2xs"
                                >
                                  <div className="space-y-2">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                      <FileText className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-sm sm:text-base text-secondary group-hover:text-primary pt-2">
                                      {item.title}
                                    </h4>
                                  </div>
                                  <div className="flex items-center gap-1.5 text-xs text-primary font-semibold mt-4 pt-3 border-t border-border/50">
                                    <span>View Analysis Report</span>
                                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </div>
                    ) : activeObeSubTab === "copo-attainment" ? (
                      <div className="space-y-6">
                        <Card className="border border-border/80 shadow-xs bg-card p-6 sm:p-8">
                          <div className="space-y-6">
                            <div className="border-b border-border/60 pb-4">
                              <h3 className="text-2xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                                CO-PO Attainment
                              </h3>
                              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                Course Outcome & Program Outcome batch-wise attainment evaluation reports
                              </p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {moreData.obe?.copoAttainment?.map((item, aIdx) => (
                                <a
                                  key={aIdx}
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group flex flex-col justify-between p-5 rounded-xl border border-border/70 bg-muted/20 hover:bg-primary/5 hover:border-primary/40 transition-all text-secondary hover:text-primary shadow-2xs"
                                >
                                  <div className="space-y-2">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                      <FileText className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-sm sm:text-base text-secondary group-hover:text-primary pt-2">
                                      {item.title}
                                    </h4>
                                  </div>
                                  <div className="flex items-center gap-1.5 text-xs text-primary font-semibold mt-4 pt-3 border-t border-border/50">
                                    <span>View Attainment Report</span>
                                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </div>
                    ) : null}
                  </div>
                ) : null}
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

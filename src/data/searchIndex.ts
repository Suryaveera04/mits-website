import { departmentsData } from "@/data/departmentData";
import fallbackFacultyData from "@/data/facultyApiFallback.json";
import { mapApiDeptToDeptKey } from "@/lib/facultyApi";
import { slugifyFaculty } from "@/lib/facultySlug";
import {
  leadershipProfiles,
  deansList,
  departmentHeads,
  aboutSections,
  mandatoryDisclosures,
} from "@/data/aboutData";
import { cellCategories } from "@/data/cellsData";
import { newsEvents } from "@/data/newsEvents";
import { allPlacementFaculty } from "@/data/placementFacultyData";

export type SearchCategory =
  | "All"
  | "Pages"
  | "Departments"
  | "Faculty & Leadership"
  | "Academics & Courses"
  | "Admissions & Fees"
  | "Placements & Careers"
  | "Research & Innovation"
  | "Campus Life & Facilities"
  | "Cells & Committees"
  | "News & Events";

export interface SearchItem {
  id: string;
  title: string;
  category: SearchCategory;
  description: string;
  href: string;
  isExternal?: boolean;
  tags: string[];
  department?: string;
  designation?: string;
  qualification?: string;
  metaBadge?: string;
}

// Pre-compiled static website items covering all core sections
const coreWebsiteItems: SearchItem[] = [
  // Core Pages
  {
    id: "page-home",
    title: "MITS Home Page",
    category: "Pages",
    description: "Madanapalle Institute of Technology & Science (MITS) - Deemed to be University, NAAC A+ accredited institution.",
    href: "/",
    tags: ["home", "main", "mits", "university", "deemed", "madanapalle", "overview"],
    metaBadge: "Main Page",
  },
  {
    id: "page-about",
    title: "About MITS University",
    category: "Pages",
    description: "History, vision, mission, legacy, milestone achievements, and institutional profile of MITS Deemed to be University.",
    href: "/about",
    tags: ["about", "history", "vision", "mission", "legacy", "profile", "institution", "governance"],
    metaBadge: "Institutional Info",
  },
  {
    id: "page-leadership",
    title: "University Leadership & Governance",
    category: "Faculty & Leadership",
    description: "Founder & Chancellor Dr. N. Vijaya Bhaskar Choudary, Pro-Chancellor, Vice Chancellor, Registrar, and Governing Bodies.",
    href: "/about/leadership",
    tags: ["leadership", "chancellor", "vice chancellor", "vc", "registrar", "governance", "management", "administration"],
    metaBadge: "Leadership",
  },
  {
    id: "page-academic-leadership",
    title: "Academic Leadership & Administration",
    category: "Faculty & Leadership",
    description: "Deans, Directors, and Academic Administrators driving excellence across all university disciplines.",
    href: "/about/academic-leadership",
    tags: ["academic leadership", "deans", "directors", "administration", "academic officers"],
    metaBadge: "Administration",
  },
  {
    id: "page-deans",
    title: "Deans of MITS",
    category: "Faculty & Leadership",
    description: "Deans of Academics, School of Engineering, School of Computing, School of Management, and Student Affairs.",
    href: "/about/deans",
    tags: ["deans", "dean academics", "dean rd", "dean administration", "dean student affairs", "academic heads"],
    metaBadge: "Deans",
  },
  {
    id: "page-hods",
    title: "Heads of Departments (HODs)",
    category: "Faculty & Leadership",
    description: "Department Heads leading CSE, CST, CSIT, AI&ML, ECE, EEE, ME, CE, MBA, MCA, and BSH.",
    href: "/about/department-heads",
    tags: ["hod", "department heads", "hods", "chairs", "department leaders", "branch heads"],
    metaBadge: "HODs",
  },
  {
    id: "page-organogram",
    title: "Institutional Organogram",
    category: "Pages",
    description: "Organizational structure, administrative hierarchy, and governance flow of MITS University.",
    href: "/about/organogram",
    tags: ["organogram", "organization structure", "hierarchy", "administrative flow", "governance chart"],
    metaBadge: "Governance",
  },
  {
    id: "page-mandatory-disclosures",
    title: "Mandatory Disclosures (AICTE & UGC)",
    category: "Pages",
    description: "Official public mandatory disclosures, AICTE approvals, UGC compliance, and statutory filings.",
    href: "/about/mandatory-disclosures",
    tags: ["mandatory disclosures", "aicte approval", "ugc compliance", "statutory filings", "public disclosures"],
    metaBadge: "Compliance",
  },
  {
    id: "page-nirf",
    title: "NIRF Rankings & Reports",
    category: "Pages",
    description: "National Institutional Ranking Framework (NIRF) data, scores, ranking reports, and submitted metrics.",
    href: "/nirf",
    tags: ["nirf", "ranking", "rankings", "national ranking", "engineering rank", "mhrd", "scores"],
    metaBadge: "Rankings",
  },
  {
    id: "page-naac",
    title: "NAAC Accreditation & SSR",
    category: "Pages",
    description: "NAAC A+ Grade accreditation details, Self Study Report (SSR), peer team evaluations, and certificates.",
    href: "/naac",
    tags: ["naac", "accreditation", "naac a+", "grade a+", "ssr", "peer team", "quality"],
    metaBadge: "Accreditation",
  },
  {
    id: "page-iqac",
    title: "Internal Quality Assurance Cell (IQAC)",
    category: "Cells & Committees",
    description: "Quality initiatives, AQAR reports, academic audits, feedback mechanisms, and minutes of meetings.",
    href: "/iqac",
    tags: ["iqac", "quality assurance", "aqar", "academic audit", "quality policy", "feedback"],
    metaBadge: "Quality Cell",
  },
  {
    id: "page-affiliations",
    title: "Affiliations & Accreditations (NBA, NAAC, UGC, AICTE)",
    category: "Pages",
    description: "NBA Tier-1 accredited programs, UGC autonomous & deemed status, AICTE approvals, and certifications.",
    href: "/affiliations-accreditations",
    tags: ["affiliations", "accreditations", "nba", "aicte", "ugc", "autonomous", "tier 1", "approval"],
    metaBadge: "Accreditation",
  },
  {
    id: "page-psd",
    title: "Public Self Disclosures (PSD)",
    category: "Pages",
    description: "Public self-disclosure reports, academic audit summaries, and transparency documentation.",
    href: "/public-self-disclosures",
    tags: ["public self disclosures", "psd", "transparency", "audit reports", "disclosures"],
    metaBadge: "Disclosures",
  },
  {
    id: "page-international-relations",
    title: "International Relations & Global MoUs",
    category: "Pages",
    description: "Global university partnerships, foreign student exchange, faculty mobility, and international MoUs.",
    href: "/international-relations",
    tags: ["international relations", "global", "mou", "foreign universities", "study abroad", "partnerships", "exchange"],
    metaBadge: "Global",
  },
  {
    id: "page-stanford-initiative",
    title: "Stanford University Innovation Fellows (UIF)",
    category: "Pages",
    description: "Stanford University Innovation Fellowship program, student changemakers, and campus design thinking initiatives.",
    href: "/international-relations/stanford-initiative",
    tags: ["stanford", "uif", "innovation fellows", "design thinking", "stanford university", "changemakers"],
    metaBadge: "Innovation",
  },
  {
    id: "page-mits-radio",
    title: "MITS Radio 90.8 CRS (Community Radio Station)",
    category: "Campus Life & Facilities",
    description: "MITS Community Radio 90.8 FM broadcast programs, student RJ shows, awareness drives, and live audio.",
    href: "/mits-radio",
    tags: ["radio", "mits radio", "90.8 fm", "crs", "community radio", "broadcast", "rj", "shows"],
    metaBadge: "Radio CRS",
  },

  // Admissions & Fees
  {
    id: "admissions-main",
    title: "Admissions 2027 - Apply Online",
    category: "Admissions & Fees",
    description: "Admissions process for B.Tech, M.Tech, MBA, MCA, and Ph.D. programs for the academic year 2027.",
    href: "/admissions",
    tags: ["admissions", "apply online", "admission 2027", "btech admission", "mtech", "mba", "mca", "enrollment", "seats"],
    metaBadge: "Admissions 2027",
  },
  {
    id: "admissions-national",
    title: "National Admission Procedure",
    category: "Admissions & Fees",
    description: "EAPCET / JEE / GATE / ICET counseling procedure, management quota seats, and national application steps.",
    href: "/national-admissions-procedure",
    tags: ["national admission", "eapcet", "eamcet", "jee main", "gate", "icet", "counseling", "quota", "merit"],
    metaBadge: "Admissions",
  },
  {
    id: "admissions-international",
    title: "International & NRI Admission Procedure",
    category: "Admissions & Fees",
    description: "Admission guidelines for foreign nationals, NRI students, PIO, visa guidelines, and eligibility requirements.",
    href: "/international-admissions-procedure",
    tags: ["international admission", "nri", "foreign students", "pio", "overseas admission", "visa requirements"],
    metaBadge: "Admissions",
  },
  {
    id: "admissions-fees",
    title: "Eligibility Criteria & Fee Structure",
    category: "Admissions & Fees",
    description: "Tuition fees for B.Tech, PG courses, scholarships, merit incentives, and installment details.",
    href: "/eligibility-and-fees",
    tags: ["fees", "fee structure", "tuition fee", "cost", "eligibility", "scholarship", "scholarships", "concession", "payment"],
    metaBadge: "Fees & Aid",
  },
  {
    id: "admissions-portal",
    title: "Official Online Admission Application Portal",
    category: "Admissions & Fees",
    description: "Direct online application portal for registering and applying for 2027 admissions at MITS.",
    href: "https://admission.mits.ac.in/",
    isExternal: true,
    tags: ["admission portal", "apply now", "application form", "registration", "online application", "admission link"],
    metaBadge: "Apply Online",
  },

  // Academics & Examinations
  {
    id: "academics-main",
    title: "Academics & Degree Programs Offered",
    category: "Academics & Courses",
    description: "Undergraduate (B.Tech), Postgraduate (M.Tech, MBA, MCA), and Doctoral (Ph.D.) degree programs.",
    href: "/academics",
    tags: ["academics", "programs", "degrees", "btech", "mtech", "mba", "mca", "phd", "curriculum", "courses offered"],
    metaBadge: "Academics",
  },
  {
    id: "academic-regulations",
    title: "Academic Regulations (R25, R26)",
    category: "Academics & Courses",
    description: "Official R25 & R26 Academic Regulations for B.Tech, BBA, BCA, M.Tech, MBA, and MCA.",
    href: "/academic-regulations",
    tags: ["regulations", "academic regulations", "r25", "r26", "credits", "grading", "cgpa", "rules", "evaluation"],
    metaBadge: "Regulations",
  },
  {
    id: "curriculum-academic-syllabus",
    title: "Curriculum & Academic Syllabus (R25, R26)",
    category: "Academics & Courses",
    description: "Official UG and PG Course Structures and syllabi for all engineering and management programs with PDF downloads.",
    href: "/curriculum-academic-syllabus",
    tags: ["curriculum", "syllabus", "academic syllabus", "r25", "r26", "course structure", "btech", "mtech", "bba", "bca", "mba", "mca"],
    metaBadge: "Syllabus",
  },
  {
    id: "academic-calendar",
    title: "Academic Calendar & Schedules",
    category: "Academics & Courses",
    description: "Semester start dates, internal exam schedules, vacation periods, working days, and key academic dates.",
    href: "/academic-calendar",
    tags: ["academic calendar", "calendar", "semester schedule", "exam dates", "holidays", "working days", "mid exams"],
    metaBadge: "Calendar",
  },
  {
    id: "examinations-cell",
    title: "Examinations Cell & Results Portal",
    category: "Academics & Courses",
    description: "Examination timetables, semester end results, hall tickets, revaluation procedures, and grade cards.",
    href: "/examinations",
    tags: ["examinations", "exam", "results", "timetable", "hall tickets", "revaluation", "grade card", "exam cell", "controller of examinations"],
    metaBadge: "Exams",
  },
  {
    id: "digital-library",
    title: "Central & Digital Library",
    category: "Campus Life & Facilities",
    description: "Over 80,000+ volumes, IEEE / ScienceDirect / Springer e-journals, DELNET, NPTEL videos, and digital reading rooms.",
    href: "/library",
    tags: ["library", "digital library", "books", "journals", "ieee", "sciencedirect", "e-resources", "reading room", "nptel", "delnet"],
    metaBadge: "Library",
  },
  {
    id: "e-content-portal",
    title: "E-Content & LMS Learning Resources",
    category: "Academics & Courses",
    description: "Digital lecture notes, video lectures, online courseware, PPTs, and e-learning resources across departments.",
    href: "/e-content",
    tags: ["e-content", "lms", "moodle", "online lectures", "lecture notes", "courseware", "video lectures", "study material"],
    metaBadge: "E-Learning",
  },
  {
    id: "newsletter-page",
    title: "University Newsletters & Publications",
    category: "Academics & Courses",
    description: "Quarterly department newsletters, institutional magazines, student editorial articles, and campus roundups.",
    href: "/newsletter",
    tags: ["newsletter", "magazines", "publications", "articles", "department newsletter", "news"],
    metaBadge: "Newsletters",
  },

  // Placements & Careers
  {
    id: "placements-main",
    title: "Training & Placement Cell",
    category: "Placements & Careers",
    description: "Top tier placements with 24+ LPA highest package, 90%+ placement rate, 200+ visiting marquee recruiters.",
    href: "/placements",
    tags: ["placements", "placement", "jobs", "salary", "package", "highest package", "average package", "recruiters", "hiring", "tpo", "companies"],
    metaBadge: "24+ LPA Top CTC",
  },
  {
    id: "placements-recruiters",
    title: "Top Hiring Recruiters & Companies",
    category: "Placements & Careers",
    description: "Marquee hiring partners including TCS, Infosys, Cognizant, Wipro, Accenture, Capgemini, Tech Mahindra, and Core Giants.",
    href: "/placements/recruiters",
    tags: ["recruiters", "companies", "tcs", "infosys", "wipro", "cognizant", "accenture", "top recruiters", "corporate partners"],
    metaBadge: "200+ Recruiters",
  },
  {
    id: "placements-stats",
    title: "Placement Statistics & Track Record",
    category: "Placements & Careers",
    description: "Year-wise placement metrics, branch-wise offers, salary distribution curves, and student success stories.",
    href: "/placements/statistics",
    tags: ["placement statistics", "statistics", "stats", "salary stats", "placement record", "offers count", "highest offer"],
    metaBadge: "Statistics",
  },
  {
    id: "placements-team",
    title: "Placement Team & Corporate Relations Officers",
    category: "Placements & Careers",
    description: "Training & Placement Officers, corporate trainers, verbal ability coaches, and placement coordinators.",
    href: "/placements/team",
    tags: ["placement team", "tpo", "placement officer", "trainers", "corporate relations", "placement cell"],
    metaBadge: "Team",
  },
  {
    id: "careers-page",
    title: "Careers & Faculty Recruitment",
    category: "Placements & Careers",
    description: "Current job openings, faculty positions (Professor, Associate, Assistant), staff vacancies, and application forms.",
    href: "/careers",
    tags: ["careers", "recruitment", "faculty jobs", "vacancies", "job openings", "hiring faculty", "staff recruitment", "apply job"],
    metaBadge: "Openings",
  },

  // Research & Innovation
  {
    id: "research-main",
    title: "Research & Development (R&D) Cell",
    category: "Research & Innovation",
    description: "Sponsored research projects, funded research grants (DST, SERB, ISRO, AICTE), patents, and international publications.",
    href: "/research",
    tags: ["research", "r&d", "projects", "patents", "publications", "scopus", "web of science", "grants", "dst", "isro", "funding"],
    metaBadge: "R&D Cell",
  },
  {
    id: "research-centres",
    title: "Recognised Research Centres & Ph.D. Hubs",
    category: "Research & Innovation",
    description: "University recognized research laboratories, doctoral research centers, high-performance computing clusters.",
    href: "/research#centres",
    tags: ["research centres", "phd centre", "research labs", "laboratories", "doctoral research", "computing cluster"],
    metaBadge: "Centres",
  },
  {
    id: "research-patents",
    title: "Patents & Intellectual Property (IPFC)",
    category: "Research & Innovation",
    description: "Patents filed, published, and granted to faculty and student innovators across engineering disciplines.",
    href: "/research#patents",
    tags: ["patents", "ipfc", "intellectual property", "innovations", "patent granted", "patent filed", "copyrights"],
    metaBadge: "Patents",
  },
  {
    id: "research-seed",
    title: "Seed Money Scheme for Faculty Research",
    category: "Research & Innovation",
    description: "Institutional funding and seed grants supporting faculty-led pioneering research and initial prototype development.",
    href: "/research#seed",
    tags: ["seed money", "seed grant", "faculty funding", "internal grants", "research support"],
    metaBadge: "Grants",
  },

  // Campus Life & Facilities
  {
    id: "campus-life-main",
    title: "Campus Life & Student Experience",
    category: "Campus Life & Facilities",
    description: "Vibrant campus experience, tech fests, annual celebrations, student councils, recreational hubs, and culture.",
    href: "/campus-life",
    tags: ["campus life", "student life", "fests", "campus experience", "student activities", "culture", "events"],
    metaBadge: "Campus Life",
  },
  {
    id: "campus-sports",
    title: "Sports, Games & Gymnasium Complex",
    category: "Campus Life & Facilities",
    description: "Cricket ground, football field, basketball & volleyball courts, indoor badminton arena, modern gym, and tournaments.",
    href: "/sports",
    tags: ["sports", "gym", "games", "cricket", "badminton", "basketball", "volleyball", "athletics", "gymnasium", "tournaments"],
    metaBadge: "Sports",
  },
  {
    id: "campus-clubs",
    title: "Student Technical & Cultural Clubs",
    category: "Campus Life & Facilities",
    description: "Coding clubs, robotics society, music and dance clubs, photography guild, literary circle, and social outreach.",
    href: "/campus-life/student-clubs",
    tags: ["clubs", "student clubs", "coding club", "robotics", "cultural club", "music", "dance", "photography", "literary"],
    metaBadge: "Clubs",
  },
  {
    id: "campus-cultural",
    title: "Cultural Life & Annual Celebrations",
    category: "Campus Life & Facilities",
    description: "Annual cultural festival, ethnic days, youth festivals, inter-collegiate arts competitions, and musical concerts.",
    href: "/campus-life/cultural-life",
    tags: ["cultural life", "fest", "annual day", "ethnic day", "youth festival", "dance", "singing", "competitions"],
    metaBadge: "Cultural",
  },
  {
    id: "infrastructure-main",
    title: "Campus Infrastructure & Facilities",
    category: "Campus Life & Facilities",
    description: "Smart classrooms, air-conditioned auditoriums, advanced computing centers, university bus transport, and cafeteria.",
    href: "/infrastructure",
    tags: ["infrastructure", "classrooms", "auditorium", "labs", "bus", "transport", "cafeteria", "canteen", "wifi", "facilities"],
    metaBadge: "Facilities",
  },
  {
    id: "gallery-page",
    title: "Campus Photo & Event Gallery",
    category: "Campus Life & Facilities",
    description: "Visual glimpses of MITS scenic green campus, ceremonies, graduation days, lab facilities, and sports meets.",
    href: "/gallery",
    tags: ["gallery", "photos", "images", "campus photos", "pictures", "convocation photos", "event gallery"],
    metaBadge: "Gallery",
  },
  {
    id: "contact-page",
    title: "Contact Us & Campus Location",
    category: "Pages",
    description: "MITS postal address, Madanapalle campus location map, key administrative phone numbers, and enquiry emails.",
    href: "/contact",
    tags: ["contact", "address", "phone", "email", "location", "reach us", "helpdesk", "enquiry", "map"],
    metaBadge: "Contact",
  },
];

// Helper to generate items for all departments dynamically
function generateDepartmentItems(): SearchItem[] {
  const items: SearchItem[] = [];

  Object.entries(departmentsData).forEach(([key, dept]) => {
    // 1. Main Department Card
    items.push({
      id: `dept-${key}`,
      title: `Department of ${dept.name} (${dept.shortName})`,
      category: "Departments",
      description: `${dept.about ? dept.about.slice(0, 160) + "..." : `Explore the Department of ${dept.name} at MITS.`}`,
      href: `/department/${key}`,
      tags: [
        key,
        dept.shortName.toLowerCase(),
        dept.name.toLowerCase(),
        "department",
        "engineering",
        "branch",
        "courses",
        "curriculum",
        "hod",
        "faculty",
        "labs",
      ],
      department: dept.shortName,
      metaBadge: dept.nbaAccredited ? "NBA Accredited" : "Department",
    });

    // 2. Department Faculty Tab
    items.push({
      id: `dept-${key}-faculty`,
      title: `${dept.shortName} Department Faculty Directory`,
      category: "Faculty & Leadership",
      description: `Browse all qualified professors, associate professors, and assistant professors in ${dept.name}.`,
      href: `/department/${key}/faculty`,
      tags: [key, dept.shortName.toLowerCase(), "faculty", "professors", "teachers", "staff", "lecturers"],
      department: dept.shortName,
      metaBadge: `${dept.faculty?.length || 0} Faculty Members`,
    });

    // 3. Department Facilities Tab
    items.push({
      id: `dept-${key}-facilities`,
      title: `${dept.shortName} Department Laboratories & Facilities`,
      category: "Campus Life & Facilities",
      description: `State-of-the-art specialized laboratories, software tools, and testing apparatus in ${dept.shortName}.`,
      href: `/department/${key}/facilities`,
      tags: [key, dept.shortName.toLowerCase(), "facilities", "laboratories", "labs", "equipment", "infrastructure"],
      department: dept.shortName,
      metaBadge: `${dept.facilities?.length || 0} Laboratories`,
    });

    // 4. Department Syllabus Tab
    items.push({
      id: `dept-${key}-syllabus`,
      title: `${dept.shortName} Curriculum & Subject Syllabi`,
      category: "Academics & Courses",
      description: `Semester-wise course structure, core and elective subjects, and lab practicals for ${dept.shortName}.`,
      href: `/department/${key}/syllabus`,
      tags: [key, dept.shortName.toLowerCase(), "syllabus", "subjects", "curriculum", "courses", "credits"],
      department: dept.shortName,
      metaBadge: "Curriculum",
    });

    // 5. Department Achievements & Research Tab
    items.push({
      id: `dept-${key}-achievements`,
      title: `${dept.shortName} Department Achievements & Research`,
      category: "Research & Innovation",
      description: `Patents, consultancy projects, publications, and faculty recognitions in ${dept.shortName}.`,
      href: `/department/${key}/achievements`,
      tags: [key, dept.shortName.toLowerCase(), "achievements", "patents", "publications", "research", "projects"],
      department: dept.shortName,
      metaBadge: "Achievements",
    });

    // 6. Individual Faculty Members inside this department
    if (dept.faculty && Array.isArray(dept.faculty)) {
      dept.faculty.forEach((fac, idx) => {
        if (!fac.name) return;
        const facSlug = fac.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        items.push({
          id: `fac-${key}-${idx}`,
          title: `${fac.name}`,
          category: "Faculty & Leadership",
          description: `${fac.designation} (${fac.qualification || "Faculty"}) in ${dept.name}. ${fac.email ? `Email: ${fac.email}` : ""}`,
          href: fac.profileUrl || `/department/${key}/faculty/${facSlug}`,
          isExternal: Boolean(fac.profileUrl?.startsWith("http")),
          tags: [
            fac.name.toLowerCase(),
            fac.designation.toLowerCase(),
            dept.shortName.toLowerCase(),
            dept.name.toLowerCase(),
            "faculty",
            "professor",
            fac.qualification ? fac.qualification.toLowerCase() : "",
            fac.email ? fac.email.toLowerCase() : "",
          ].filter(Boolean),
          department: dept.shortName,
          designation: fac.designation,
          qualification: fac.qualification,
          metaBadge: dept.shortName,
        });
      });
    }
  });

  // 7. Dynamic Faculty from live database fallback snapshot
  if (fallbackFacultyData && Array.isArray((fallbackFacultyData as { data?: any[] }).data)) {
    (fallbackFacultyData as { data: any[] }).data.forEach((f, idx) => {
      if (!f.fullName) return;
      const deptKey = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
      const facSlug = slugifyFaculty(f.fullName);
      const deptName = f.department?.name || deptKey.toUpperCase();
      const qualification = f.phd?.status === "Awarded" || f.phd?.topic ? "Ph.D." : (f.pg?.degree || f.ug?.degree || "Faculty");
      items.push({
        id: `fac-api-${f._id || idx}`,
        title: f.fullName,
        category: "Faculty & Leadership",
        description: `${f.designation} (${qualification}) in Department of ${deptName}. ${f.email ? `Email: ${f.email}` : ""}`,
        href: `/department/${deptKey}/faculty/${facSlug}`,
        isExternal: false,
        tags: [
          f.fullName.toLowerCase(),
          f.designation.toLowerCase(),
          deptKey,
          deptName.toLowerCase(),
          "faculty",
          "professor",
          qualification.toLowerCase(),
          f.email ? f.email.toLowerCase() : "",
          ...(f.specialization || []).map((s: string) => s.toLowerCase()),
        ].filter(Boolean),
        department: deptKey.toUpperCase(),
        designation: f.designation,
        qualification: qualification,
        metaBadge: deptKey.toUpperCase(),
      });
    });
  }

  return items;
}

// Helper to generate items for all Cells & Committees
function generateCellItems(): SearchItem[] {
  const items: SearchItem[] = [];

  cellCategories.forEach((category) => {
    category.cells.forEach((cell) => {
      const detailHref = cell.detailId ? `/cells/${cell.detailId}` : cell.href;
      const isExt = !cell.detailId && cell.href.startsWith("http");
      items.push({
        id: `cell-${cell.detailId || cell.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        title: `${cell.name}${cell.abbreviation ? ` (${cell.abbreviation})` : ""}`,
        category: "Cells & Committees",
        description: `${category.title}: ${category.description}`,
        href: detailHref,
        isExternal: isExt,
        tags: [
          cell.name.toLowerCase(),
          cell.abbreviation ? cell.abbreviation.toLowerCase() : "",
          category.title.toLowerCase(),
          "cell",
          "committee",
          "student support",
          "welfare",
        ].filter(Boolean),
        metaBadge: cell.abbreviation || "Cell",
      });
    });
  });

  return items;
}

// Helper to generate items for Leadership & Governance
function generateLeadershipItems(): SearchItem[] {
  const items: SearchItem[] = [];

  // Leadership profiles (Chancellor, VC, Registrar, etc.)
  Object.values(leadershipProfiles).forEach((leader) => {
    items.push({
      id: `leader-${leader.slug}`,
      title: `${leader.name} - ${leader.designation}`,
      category: "Faculty & Leadership",
      description: leader.tagline || leader.bio?.[0] || `${leader.designation} at MITS Deemed to be University.`,
      href: `/about/leadership/${leader.slug}`,
      tags: [
        leader.name.toLowerCase(),
        leader.designation.toLowerCase(),
        "leadership",
        "chancellor",
        "vice chancellor",
        "registrar",
        "governance",
      ],
      designation: leader.designation,
      qualification: leader.qualification,
      metaBadge: "University Leadership",
    });
  });

  // Deans list
  if (deansList && Array.isArray(deansList)) {
    deansList.forEach((dean, idx) => {
      items.push({
        id: `dean-${idx}`,
        title: `${dean.name} - ${dean.designation} (${dean.school})`,
        category: "Faculty & Leadership",
        description: `${dean.qualification} • ${dean.school}. Dean leading academic vertical at MITS.`,
        href: dean.deptKey ? `/department/${dean.deptKey}/faculty` : "/about/deans",
        isExternal: Boolean(dean.externalProfile?.startsWith("http")),
        tags: [dean.name.toLowerCase(), dean.designation.toLowerCase(), dean.school.toLowerCase(), "dean", "deans", "leadership"],
        designation: dean.designation,
        qualification: dean.qualification,
        metaBadge: "Dean",
      });
    });
  }

  // HOD profiles / Department Heads
  if (departmentHeads && Array.isArray(departmentHeads)) {
    departmentHeads.forEach((hod, idx) => {
      items.push({
        id: `hod-${idx}`,
        title: `${hod.name} - Head of Department (${hod.department})`,
        category: "Faculty & Leadership",
        description: `Head of Department for ${hod.department} at MITS.`,
        href: hod.deptKey ? `/department/${hod.deptKey}` : "/about/department-heads",
        isExternal: Boolean(hod.externalProfile?.startsWith("http")),
        tags: [hod.name.toLowerCase(), hod.department.toLowerCase(), "hod", "head of department", "department head"],
        designation: "Head of Department",
        department: hod.department,
        metaBadge: "HOD",
      });
    });
  }

  // Placement Team profiles
  if (allPlacementFaculty && Array.isArray(allPlacementFaculty)) {
    allPlacementFaculty.forEach((teamMember) => {
      items.push({
        id: `placement-${teamMember.slug}`,
        title: `${teamMember.name} - ${teamMember.designation}`,
        category: "Placements & Careers",
        description: `${teamMember.department} (${teamMember.team === "placement" ? "Placement Officer" : "Training Lead"}). ${teamMember.email ? `Email: ${teamMember.email}` : ""}`,
        href: `/placements/team/${teamMember.slug}`,
        tags: [
          teamMember.name.toLowerCase(),
          teamMember.designation.toLowerCase(),
          teamMember.department.toLowerCase(),
          "placement",
          "training",
          "tpo",
          "trainer",
        ],
        designation: teamMember.designation,
        qualification: teamMember.qualification,
        metaBadge: teamMember.team === "placement" ? "Placement Cell" : "Training Lead",
      });
    });
  }

  return items;
}

// Helper to generate items for News & Events
function generateNewsEventItems(): SearchItem[] {
  const items: SearchItem[] = [];

  newsEvents.forEach((evt) => {
    items.push({
      id: `news-${evt.slug}`,
      title: evt.title,
      category: "News & Events",
      description: `${evt.date} • ${evt.location} — ${evt.excerpt}`,
      href: `/news-events/${evt.slug}`,
      tags: [evt.title.toLowerCase(), "event", "news", "announcement", "celebration", "workshop", "conference", "expo"],
      metaBadge: "Event",
    });
  });

  return items;
}

// Master search index aggregator
let masterSearchIndexCache: SearchItem[] | null = null;

export function getMasterSearchIndex(): SearchItem[] {
  if (masterSearchIndexCache) {
    return masterSearchIndexCache;
  }

  const allItems: SearchItem[] = [
    ...coreWebsiteItems,
    ...generateDepartmentItems(),
    ...generateCellItems(),
    ...generateLeadershipItems(),
    ...generateNewsEventItems(),
  ];

  // Deduplicate by ID
  const seenIds = new Set<string>();
  const uniqueItems = allItems.filter((item) => {
    if (seenIds.has(item.id)) return false;
    seenIds.add(item.id);
    return true;
  });

  masterSearchIndexCache = uniqueItems;
  return uniqueItems;
}

// Search algorithm with multi-token scoring, tag matching, and category filtering
export interface SearchResultMatch {
  item: SearchItem;
  score: number;
  matchedField: "title" | "tags" | "description" | "designation" | "department";
}

// Common synonyms / query expansions for smarter matching
const synonymMap: Record<string, string[]> = {
  fee: ["fees", "cost", "scholarship", "tuition", "payment", "eligibility"],
  fees: ["fee", "cost", "scholarship", "tuition", "payment", "eligibility"],
  job: ["placement", "placements", "salary", "package", "hiring", "recruiters", "careers"],
  jobs: ["placement", "placements", "salary", "package", "hiring", "recruiters", "careers"],
  package: ["placement", "placements", "salary", "highest package", "average package", "lpa"],
  salary: ["placement", "placements", "package", "lpa", "highest package"],
  sports: ["gym", "cricket", "badminton", "games", "gymnasium", "fitness"],
  bus: ["transport", "route", "bus route", "infrastructure"],
  transport: ["bus", "bus route", "transportation"],
  syllabus: ["curriculum", "regulations", "r23", "r20", "r18", "subjects", "courses"],
  curriculum: ["syllabus", "regulations", "r23", "r20", "subjects"],
  exam: ["examinations", "results", "timetable", "schedule", "grades"],
  exams: ["examinations", "results", "timetable", "schedule", "grades"],
  result: ["results", "examinations", "grades", "marks", "revaluation"],
  results: ["result", "examinations", "grades", "marks", "revaluation"],
  dean: ["deans", "academic leadership", "administration"],
  hod: ["hods", "head of department", "department heads"],
  chancellor: ["founder", "vijaya bhaskar choudary", "leadership", "chancellor"],
  vc: ["vice chancellor", "leadership"],
  radio: ["mits radio", "90.8", "crs", "fm"],
  moodle: ["e-content", "lms", "online learning", "lecture notes"],
  lms: ["e-content", "moodle", "online learning"],
  nss: ["nss", "national service scheme", "social outreach"],
  ncc: ["ncc", "national cadet corps", "army"],
  clubs: ["student clubs", "technical clubs", "cultural life"],
};

export function searchWebsite(
  query: string,
  selectedCategory: SearchCategory = "All",
  limit: number = 40
): SearchResultMatch[] {
  const trimmed = query.trim().toLowerCase();
  const index = getMasterSearchIndex();

  if (!trimmed) {
    // If query is empty, return popular / featured items within category
    const filtered = selectedCategory === "All" ? index : index.filter((item) => item.category === selectedCategory);
    return filtered.slice(0, 15).map((item) => ({
      item,
      score: 1,
      matchedField: "title",
    }));
  }

  const queryTokens = trimmed.split(/\s+/).filter(Boolean);
  
  // Expand synonyms
  const expandedTokens = new Set<string>(queryTokens);
  queryTokens.forEach((tok) => {
    if (synonymMap[tok]) {
      synonymMap[tok].forEach((syn) => expandedTokens.add(syn.toLowerCase()));
    }
  });

  const results: SearchResultMatch[] = [];

  for (const item of index) {
    // Category filter
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      continue;
    }

    const titleLower = item.title.toLowerCase();
    const descLower = item.description.toLowerCase();
    const deptLower = (item.department || "").toLowerCase();
    const desigLower = (item.designation || "").toLowerCase();
    const tagsLower = item.tags.map((t) => t.toLowerCase());

    let score = 0;
    let matchedField: "title" | "tags" | "description" | "designation" | "department" = "description";

    // 1. Exact query match in title
    if (titleLower === trimmed) {
      score += 120;
      matchedField = "title";
    } else if (titleLower.startsWith(trimmed)) {
      score += 90;
      matchedField = "title";
    } else if (titleLower.includes(trimmed)) {
      score += 60;
      matchedField = "title";
    }

    // 2. Token matches in title
    let allTokensInTitle = true;
    for (const tok of queryTokens) {
      if (titleLower.includes(tok)) {
        score += 25;
        matchedField = "title";
      } else {
        allTokensInTitle = false;
      }
    }
    if (allTokensInTitle && queryTokens.length > 1) {
      score += 35;
    }

    // 3. Designation & Department matches
    if (desigLower && desigLower.includes(trimmed)) {
      score += 40;
      matchedField = "designation";
    }
    if (deptLower && deptLower.includes(trimmed)) {
      score += 35;
      matchedField = "department";
    }

    // 4. Tag matches (including expanded synonyms)
    for (const tag of tagsLower) {
      if (tag === trimmed) {
        score += 50;
        matchedField = "tags";
      } else if (tag.includes(trimmed)) {
        score += 25;
        matchedField = "tags";
      }
      for (const tok of expandedTokens) {
        if (tag === tok) {
          score += 20;
        } else if (tag.includes(tok)) {
          score += 10;
        }
      }
    }

    // 5. Description matches
    if (descLower.includes(trimmed)) {
      score += 15;
    }
    for (const tok of queryTokens) {
      if (descLower.includes(tok)) {
        score += 8;
      }
    }

    if (score > 0) {
      results.push({ item, score, matchedField });
    }
  }

  // Sort descending by score
  results.sort((a, b) => b.score - a.score);

  return results.slice(0, limit);
}

// Popular / Trending search suggestions
export const popularSearchSuggestions = [
  "Admissions 2027",
  "Fee Structure",
  "Placement Statistics",
  "Computer Science (CSE)",
  "Student Clubs",
  "Faculty Directory",
  "Academic Calendar",
  "Examination Results",
  "Research Grants",
  "Digital Library",
  "Sports Complex",
  "MITS Radio 90.8",
];

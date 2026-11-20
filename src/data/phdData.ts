// src/data/phdData.ts - Ph.D. Admissions, Supervisors & Syllabus Data from https://mits.ac.in/phd-admissions

export interface PhdSubTab {
  title: string;
  href: string;
  badge?: boolean;
  isExternal?: boolean;
  isNavy?: boolean;
}

export interface DepartmentSyllabus {
  id: string;
  name: string;
  subname?: string;
  heading: string;
  iconName: string;
  pdfUrl: string;
}

export interface SupervisorDepartment {
  id: string;
  name: string;
  heading: string;
  iconName: string;
  pdfUrl: string;
}

export interface ResearchAreaDept {
  id: string;
  name: string;
  heading: string;
  iconName: string;
  items: string[];
}

// ── 12 Disciplines with MITSDAT Syllabus ───────────────────────────────────────
export const PHD_SYLLABUS_DEPARTMENTS: DepartmentSyllabus[] = [
  {
    id: "ug-tab21",
    name: "Research Methodology",
    subname: "(Common to all Disciplines)",
    heading: "Ph.D. Entrance Syllabus for Research Methodology",
    iconName: "Microscope",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/Research Methodology for PHD.pdf",
  },
  {
    id: "ug-tab22",
    name: "Computer Science & Engineering",
    heading: "Ph.D. Entrance Syllabus for Computer Science & Engineering",
    iconName: "Laptop",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/PhD Entrance Syllabus-CSE.pdf#zoom=125",
  },
  {
    id: "ug-tab24",
    name: "Electronics & Communication Engineering",
    heading: "Ph.D. Entrance Syllabus for Electronics & Communication Engineering",
    iconName: "Radio",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/PhD Entrance Syllabus-ECE.pdf#zoom=125",
  },
  {
    id: "ug-tab25",
    name: "Electrical & Electronics Engineering",
    heading: "Ph.D. Entrance Syllabus for Electrical & Electronics Engineering",
    iconName: "Zap",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/PhD Entrance Syllabus-EEE.pdf#zoom=125",
  },
  {
    id: "ug-tab26",
    name: "Mechanical Engineering",
    heading: "Ph.D. Entrance Syllabus for Mechanical Engineering",
    iconName: "Settings",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/PhD Entrance Syllabus-Mechanical.pdf#zoom=125",
  },
  {
    id: "ug-tab33",
    name: "Civil Engineering",
    heading: "Ph.D. Entrance Syllabus for Civil Engineering",
    iconName: "Building2",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/PhD Entrance Syllabus-Civil.pdf#zoom=125",
  },
  {
    id: "ug-tab27",
    name: "Management",
    heading: "Ph.D. Entrance Syllabus for Management Studies",
    iconName: "TrendingUp",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/PhD Entrance Syllabus-MBA-Research Methodologies.pdf#zoom=125",
  },
  {
    id: "ug-tab28",
    name: "Computer Science",
    heading: "Ph.D. Entrance Syllabus for Computer Science",
    iconName: "Code2",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/PhD Entrance Syllabus-MCA-Research Methodologies.pdf#zoom=125",
  },
  {
    id: "ug-tab29",
    name: "English",
    heading: "Ph.D. Entrance Syllabus for English",
    iconName: "BookOpen",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/PhD Entrance Syllabus-English.pdf#zoom=125",
  },
  {
    id: "ug-tab30",
    name: "Mathematics",
    heading: "Ph.D. Entrance Syllabus for Mathematics",
    iconName: "Calculator",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/PhD Entrance Syllabus-Mathematics.pdf#zoom=125",
  },
  {
    id: "ug-tab31",
    name: "Physics",
    heading: "Ph.D. Entrance Syllabus for Physics",
    iconName: "Atom",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/PhD Entrance Syllabus-Physics.pdf#zoom=125",
  },
  {
    id: "ug-tab32",
    name: "Chemistry",
    heading: "Ph.D. Entrance Syllabus for Chemistry",
    iconName: "FlaskConical",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/PhD Entrance Syllabus-Chemistry.pdf#zoom=125",
  },
];

// ── January Session Sub-Tabs (Pills) ──────────────────────────────────────────
export const JANUARY_SUB_TABS: PhdSubTab[] = [
  {
    title: "MITSDAT Notification 2026-27 January Session",
    href: "https://mits.ac.in/assets/pdf/syllabus/MITSDAT-2026-27-January Session.pdf",
    badge: true,
    isExternal: true,
  },
  {
    title: "Ph.D. Regulations",
    href: "https://mits.ac.in/assets/pdf/syllabus/PhD_Regulations_23.09.2026.pdf",
    badge: true,
    isExternal: true,
  },
  {
    title: "Fee Structure",
    href: "https://mits.ac.in/assets/pdf/syllabus/FeeDetails.pdf",
    badge: true,
    isExternal: true,
  },
  {
    title: "Apply Now",
    href: "https://admission.mits.ac.in/",
    badge: true,
    isExternal: true,
  },
  {
    title: "MITS Research Fellowship",
    href: "https://mits.ac.in/assets/pdf/syllabus/Monthly Fellowship.pdf",
    badge: true,
    isExternal: true,
  },
  {
    title: "MITSDAT QP Pattern",
    href: "https://mits.ac.in/assets/pdf/syllabus/MITSDAT Question Paper Pattern 2026-27.pdf",
    badge: true,
    isExternal: true,
  },
  {
    title: "CHANCELLOR’S RESEARCH SUPERVISION AWARD (CRSA)",
    href: "https://mits.ac.in/assets/pdf/syllabus/CRSA.pdf",
    badge: true,
    isExternal: true,
  },
  {
    title: "List of Eligible supervisors for the Academic Year 2026-27 January Session",
    href: "/phd-supervisors",
    badge: true,
    isExternal: false,
  },
  {
    title: "MITSDAT Notification 2026-27 July Session",
    href: "/phd-admissions-2026-27-july-session",
    badge: false,
    isExternal: false,
    isNavy: true,
  },
  {
    title: "Research Areas",
    href: "/research-areas",
    badge: false,
    isExternal: false,
  },
];

// ── July Session Sub-Tabs (Pills) ─────────────────────────────────────────────
export const JULY_SUB_TABS: PhdSubTab[] = [
  {
    title: "MITSDAT Notification 2026-27 July Session",
    href: "https://mits.ac.in/assets/pdf/syllabus/Ph.D. Admission-Notification 2026-27.pdf",
    badge: true,
    isExternal: true,
  },
  {
    title: "Selected Candidates for Ph.D. Admissions",
    href: "https://mits.ac.in/assets/pdf/syllabus/MITSDAT PhD Results July 2026 Session 22-07-2026.pdf",
    badge: true,
    isExternal: true,
  },
  {
    title: "Results",
    href: "https://mits.ac.in/assets/pdf/syllabus/Ph.D Qualified List.pdf",
    badge: true,
    isExternal: true,
  },
  {
    title: "Offline Interview Schedule",
    href: "https://mits.ac.in/assets/pdf/syllabus/Schedule-PhD1.pdf",
    badge: true,
    isExternal: true,
  },
  {
    title: "Ph.D. Regulations",
    href: "https://mits.ac.in/assets/pdf/syllabus/PhD_Regulations_23.09.2026.pdf",
    badge: false,
    isExternal: true,
  },
  {
    title: "Fee Structure",
    href: "https://mits.ac.in/assets/pdf/syllabus/FeeDetails.pdf",
    badge: false,
    isExternal: true,
  },
  {
    title: "CHANCELLOR’S RESEARCH SUPERVISION AWARD (CRSA)",
    href: "https://mits.ac.in/assets/pdf/syllabus/CRSA.pdf",
    badge: false,
    isExternal: true,
  },
  {
    title: "MITS Research Fellowship",
    href: "https://mits.ac.in/assets/pdf/syllabus/Monthly Fellowship.pdf",
    badge: false,
    isExternal: true,
  },
  {
    title: "Research Areas",
    href: "/research-areas",
    badge: false,
    isExternal: false,
  },
  {
    title: "MITSDAT QP Pattern",
    href: "https://mits.ac.in/assets/pdf/syllabus/MITSDAT Question Paper Pattern 2026-27.pdf",
    badge: false,
    isExternal: true,
  },
  {
    title: "Ph.D. Course Work Timetable - July Session",
    href: "https://mits.ac.in/assets/pdf/syllabus/Ph.D-Timetable.pdf",
    badge: false,
    isExternal: true,
  },
  {
    title: "Ph.D Academic Calendar - 2026-27",
    href: "https://mits.ac.in/assets/pdf/syllabus/MITS DTBU_Ph.D_July 2026 Session_I & II Semester_Academic Calender.pdf",
    badge: false,
    isExternal: true,
  },
  {
    title: "List of Eligible Supervisors for Academic Year 2026-27 July Session",
    href: "/phd-supervisors-2026-27-july-session",
    badge: false,
    isExternal: false,
  },
  {
    title: "MITSDAT Notification 2026-27 January Session",
    href: "/phd-admissions",
    badge: false,
    isExternal: false,
    isNavy: true,
  },
];

// ── January Session Supervisors (11 Departments from https://mits.ac.in/phd-supervisors) ────
export const PHD_SUPERVISORS_JANUARY_DEPARTMENTS: SupervisorDepartment[] = [
  {
    id: "sup-jan-civil",
    name: "DEPARTMENT OF CIVIL ENGINEERING",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27",
    iconName: "Building2",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/01Civil.pdf",
  },
  {
    id: "sup-jan-eee",
    name: "DEPARTMENT OF ELECTRICAL AND ELCETRONICS ENGINEERING",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27",
    iconName: "Zap",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/02-EE.pdf#zoom=125",
  },
  {
    id: "sup-jan-mech",
    name: "DEPARTMENT OF MECHANICAL ENGINEERING",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27",
    iconName: "Settings",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/03-ME.pdf#zoom=125",
  },
  {
    id: "sup-jan-ece",
    name: "DEPARTMENT OF ELCETRONICS & COMMUNICATION ENGINEERING",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27",
    iconName: "Radio",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/04-ECE.pdf#zoom=125",
  },
  {
    id: "sup-jan-cse",
    name: "DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27",
    iconName: "Laptop",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/05-CSE.pdf#zoom=125",
  },
  {
    id: "sup-jan-mca",
    name: "DEPARTMENT OF COMPUTER SCIENCE (MCA)",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27",
    iconName: "Code2",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/06-MCA.pdf#zoom=125",
  },
  {
    id: "sup-jan-mba",
    name: "DEPARTMENT OF MANAGEMENT STUDIES (MBA)",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27",
    iconName: "TrendingUp",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/07-MBA.pdf#zoom=125",
  },
  {
    id: "sup-jan-phy",
    name: "DEPARTMENT OF PHYSICS",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27",
    iconName: "Atom",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/08-PHY.pdf#zoom=125",
  },
  {
    id: "sup-jan-chem",
    name: "DEPARTMENT OF CHEMISTRY",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27",
    iconName: "FlaskConical",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/09-CHEM.pdf#zoom=125",
  },
  {
    id: "sup-jan-eng",
    name: "DEPARTMENT OF ENGLISH",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27",
    iconName: "BookOpen",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/10-ENG.pdf#zoom=125",
  },
  {
    id: "sup-jan-math",
    name: "DEPARTMENT OF MATHEMATICS",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27",
    iconName: "Calculator",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/11-MATH.pdf#zoom=125",
  },
];

// ── July Session Supervisors (11 Departments from https://mits.ac.in/phd-supervisors-2026-27-july-session) ────
export const PHD_SUPERVISORS_JULY_DEPARTMENTS: SupervisorDepartment[] = [
  {
    id: "sup-jul-civil",
    name: "DEPARTMENT OF CIVIL ENGINEERING",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27 (July Session)",
    iconName: "Building2",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/01-Civil-July Session 2026.pdf",
  },
  {
    id: "sup-jul-eee",
    name: "DEPARTMENT OF ELECTRICAL AND ELCETRONICS ENGINEERING",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27 (July Session)",
    iconName: "Zap",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/02-EE-July Session 2026.pdf#zoom=125",
  },
  {
    id: "sup-jul-mech",
    name: "DEPARTMENT OF MECHANICAL ENGINEERING",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27 (July Session)",
    iconName: "Settings",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/03-ME-July Session 2026.pdf#zoom=125",
  },
  {
    id: "sup-jul-ece",
    name: "DEPARTMENT OF ELCETRONICS & COMMUNICATION ENGINEERING",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27 (July Session)",
    iconName: "Radio",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/04-ECE-July Session 2026.pdf#zoom=125",
  },
  {
    id: "sup-jul-cse",
    name: "DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27 (July Session)",
    iconName: "Laptop",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/05-CSE-July Session 2026.pdf#zoom=125",
  },
  {
    id: "sup-jul-mca",
    name: "DEPARTMENT OF COMPUTER SCIENCE (MCA)",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27 (July Session)",
    iconName: "Code2",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/06-MCA-July Session 2026.pdf#zoom=125",
  },
  {
    id: "sup-jul-mba",
    name: "DEPARTMENT OF MANAGEMENT STUDIES (MBA)",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27 (July Session)",
    iconName: "TrendingUp",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/07-MBA-July Session 2026.pdf#zoom=125",
  },
  {
    id: "sup-jul-phy",
    name: "DEPARTMENT OF PHYSICS",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27 (July Session)",
    iconName: "Atom",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/08-PHY-July Session 2026.pdf#zoom=125",
  },
  {
    id: "sup-jul-chem",
    name: "DEPARTMENT OF CHEMISTRY",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27 (July Session)",
    iconName: "FlaskConical",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/09-CHEM-July Session 2026.pdf#zoom=125",
  },
  {
    id: "sup-jul-eng",
    name: "DEPARTMENT OF ENGLISH",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27 (July Session)",
    iconName: "BookOpen",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/10-ENG-July Session 2026.pdf#zoom=125",
  },
  {
    id: "sup-jul-math",
    name: "DEPARTMENT OF MATHEMATICS",
    heading: "Eligible Supervisors for Ph.D. Admissions 2026-27 (July Session)",
    iconName: "Calculator",
    pdfUrl: "https://mits.ac.in/assets/pdf/syllabus/11-MATH-July Session 2026.pdf#zoom=125",
  },
];

// ── Research Areas Data (from https://mits.ac.in/research-areas) ──────────────
export const RESEARCH_AREAS_DEPARTMENTS: ResearchAreaDept[] = [
  {
    id: "ug-tab22",
    name: "Computer Science & Engineering",
    heading: "Research Areas for Computer Science & Engineering",
    iconName: "Laptop",
    items: [
      "Network Security, Machine Learning",
      "Wireless Body Area Network, Machine Learning",
      "Software Process Improvement, ML, IOT",
      "Image Processing, ML, DL, AI, NL, IOT",
      "ML, DM & Cyber Security",
      "Data Analytics, ML, DL",
      "Cloud Computing",
      "Artificial Intelligence & Machine Learning, Deep Learning",
      "Image Processing, Deep Learning",
      "Deep Learning, Social Network Analysis",
      "Machine Learning & Computer Vision",
      "Network Security & Machine Learning",
      "Internet of Things, AI, ML & Information Security",
      "Mobile Networks & Machine Learning",
      "Network Traffic Classification",
      "Machine Learning & Data Science",
      "Artificial Intelligence, Deep Learning",
      "Machine Learning, Image Processing",
      "Cloud Computing, Optimization Algorithm",
      "Image Processing, Computer Vision, NLP",
      "Cyber Security",
      "Image Processing",
      "Image Processing and Machine Learning",
      "Network Security",
      "Cyber Security",
    ],
  },
  {
    id: "ug-tab24",
    name: "Electronics & Communication Engineering",
    heading: "Research Areas for Electronics & Communication Engineering",
    iconName: "Radio",
    items: [
      "Antenna Design, Control Systems",
      "Low power VLSI, Testing of VLSI circuits, QCA & Non-Volatile Memory circuits.",
      "VLSI-Biomedical Signal Processing",
      "VLSI Design",
      "Antennas And Wireless Communications",
      "Digital Image Processing, VLSI & Embedded Systems",
      "Perovskite solar cell, 6G and beyond",
      "Medical Image Analysis & Enhancement",
      "Semiconductor Optical Device Modelling, 6G & Beyond",
      "Wireless Communication & Antenna",
    ],
  },
  {
    id: "ug-tab25",
    name: "Electrical & Electronics Engineering",
    heading: "Research Areas for Electrical & Electronics Engineering",
    iconName: "Zap",
    items: [
      "Power electronics, Microgrids and Renewable Energy",
    ],
  },
  {
    id: "ug-tab26",
    name: "Mechanical Engineering",
    heading: "Research Areas for Mechanical Engineering",
    iconName: "Settings",
    items: [
      "Turbomachines, CFD Space Tribology Composites, Machining, Additive Manufacturing, Sustainable machining techniques",
      "Solar Thermal Engineering",
      "Material Science, Tribology with Optimization Techniques in Mechanical and Manufacturing Systems, Additive Manufacturing / 3D Printing",
      "Whole Body Vibration, Biomechanics, Biomechanical Smart Materials & Smart Structures",
      "Cooling systems, Energy savings, Advanced manufacturing",
      "Thermal Engineering, Manufacturing and Materials Engineering",
      "Sustainable machining, AI & ML, Robotics",
      "Tribology; Nano-Hybrid composite; Bio-composite; Mechanical, Thermal and Physical Characterizations",
    ],
  },
  {
    id: "ug-tab33",
    name: "Civil Engineering",
    heading: "Research Areas for Civil Engineering",
    iconName: "Building2",
    items: [
      "Structural Engineering",
      "Advanced Concrete Technology",
    ],
  },
  {
    id: "ug-tab27",
    name: "Management Studies",
    heading: "Research Areas for Management Studies",
    iconName: "TrendingUp",
    items: [
      "Finance & Marketing",
      "HR & Finance",
      "Finance",
      "Human Resource Management",
      "Marketing & HR",
    ],
  },
  {
    id: "ug-tab28",
    name: "Computer Science",
    heading: "Research Areas for Computer Science",
    iconName: "Code2",
    items: [
      "Data Mining",
      "AI & Quantum Computing",
      "Networks & AI",
      "Cyber security",
      "Software Quality Assurance / Computer Networks",
      "Cloud Computing, Data Mining, Machine learning",
      "Cloud Computing, Computer Networks, Machine learning",
      "Image Processing, ML & DL",
      "Internet of Things, Machine learning",
    ],
  },
  {
    id: "ug-tab29",
    name: "English",
    heading: "Research Areas for English",
    iconName: "BookOpen",
    items: [
      "English Language Teaching & Literature",
    ],
  },
  {
    id: "ug-tab30",
    name: "Mathematics",
    heading: "Research Areas for Mathematics",
    iconName: "Calculator",
    items: [
      "Fluid Dynamics",
      "Stochastic Modeling",
      "Algebraic Graph Theory",
      "Fluid Mechanics",
      "Statistics",
    ],
  },
  {
    id: "ug-tab31",
    name: "Physics",
    heading: "Research Areas for Physics",
    iconName: "Atom",
    items: [
      "Development and Fabrication of Thin Films and Nanomaterials for Microelectronics and Energy Technologies",
      "Thin film based Ultraviolet / Broadband Photodetectors / Gas Sensors / Schottky Diodes",
      "Energy storage devices (Polymer batteries)",
      "Theoretical Nuclear Physics",
      "Laser spectroscopy, Ferroelectrics",
      "Experimental Condensed Matter Physics",
      "Energy storage devices (Supercapacitors & battery)",
      "Semiconductor materials & devices",
      "Applied Spectroscopy",
    ],
  },
  {
    id: "ug-tab32",
    name: "Chemistry",
    heading: "Research Areas for Chemistry",
    iconName: "FlaskConical",
    items: [
      "Organic Chemistry",
      "Nanotechnology / Material Chemistry",
      "Thin film Technology, Electroanalysis",
      "Nanocatalysis",
      "Materials Chemistry for Photocatalysis in Environment and Energy",
      "Electrochemistry",
      "Computational Chemistry & Biology",
      "Material Science (Nanomaterials, Raman spectroscopy, Sensing)",
      "Supramolecular / Organometallic Chemistry",
      "Electrocatalysis, Electrochemical biosensor",
    ],
  },
];


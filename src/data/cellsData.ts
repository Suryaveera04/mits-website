export interface CellItem {
  name: string;
  abbreviation?: string;
  href: string;
  detailId?: string; // key into cellsDetailData
}

export interface CellCategory {
  id: string;
  title: string;
  description: string;
  cells: CellItem[];
}

export const cellCategories: CellCategory[] = [
  {
    id: "student-welfare",
    title: "Student Support & Welfare",
    description: "Support systems dedicated to student wellbeing, mentoring, counseling, and activities.",
    cells: [
      { name: "Grievance Redressal Cell", abbreviation: "GRC", href: "https://mits.ac.in/grc", detailId: "grc" },
      { name: "Anti-Ragging Cell", href: "https://mits.ac.in/anti-ragging", detailId: "anti-ragging" },
      { name: "Internal Complaints Cell", abbreviation: "ICC", href: "https://mits.ac.in/icc", detailId: "icc" },
      { name: "Psychological Counselling Cell", abbreviation: "PCC", href: "https://mits.ac.in/pcc", detailId: "pcc" },
      { name: "Student Welfare Cell", abbreviation: "SWC", href: "https://mits.ac.in/swc", detailId: "swc" },
      { name: "Student Activity Centre", abbreviation: "SAC", href: "https://mits.ac.in/student-activity-center-sac", detailId: "sac" },
      { name: "Mentor - Mentee Cell", abbreviation: "MMC", href: "https://mits.ac.in/mentor-menteecell", detailId: "mmc" },
      { name: "Alumni Cell", href: "https://alumni.mits.ac.in/" },
    ],
  },
  {
    id: "equity-inclusion",
    title: "Equity & Inclusion",
    description: "Cells ensuring equal opportunities, safety, and empowerment for diverse student groups.",
    cells: [
      { name: "Minority Cell", href: "https://mits.ac.in/minoritycell", detailId: "minority" },
      { name: "SC & ST Cell", href: "https://mits.ac.in/sc-st-cell", detailId: "sc-st" },
      { name: "Women Empowerment Cell", abbreviation: "WEC", href: "https://mits.ac.in/wec", detailId: "wec" },
      { name: "Socio-Economically Disadvantaged Group Cell", abbreviation: "SEDG Cell", href: "https://mits.ac.in/sedg-cell", detailId: "sedg" },
      { name: "Equal Opportunity Facilitation Cell", abbreviation: "EOF Cell", href: "https://mits.ac.in/eofc", detailId: "eof" },
    ],
  },
  {
    id: "academic-quality",
    title: "Academic & Quality Governance",
    description: "Governance cells driving institutional quality, policy implementation, and strategic planning.",
    cells: [
      { name: "Planning, Approvals, Accreditations, Rankings & Certifications Cell", abbreviation: "PAARCC", href: "https://mits.ac.in/paarc-cell", detailId: "paarcc" },
      { name: "Internal Quality Assurance Cell", abbreviation: "IQAC", href: "https://mits.ac.in/newiqac1", detailId: "iqac" },
      { name: "Universal Human Values Cell", abbreviation: "UHVC", href: "https://mits.ac.in/uhv-cell", detailId: "uhvc" },
      { name: "AICTE PARAKH Cell", href: "https://mits.ac.in/parakh", detailId: "parakh" },
      { name: "National Education Policy Cell", abbreviation: "NEP Cell", href: "https://www.mits.ac.in/nep-cell", detailId: "nep" },
      { name: "Sustainable Development Goals Cell", abbreviation: "SDG Cell", href: "https://mits.ac.in/sdg-cell", detailId: "sdg" },
    ],
  },
  {
    id: "innovation-career",
    title: "Innovation, Research & Entrepreneurship",
    description: "Incubation, start-ups, intellectual property facilitation, and industry linkage cells.",
    cells: [
      { name: "Startup Cell", href: "https://mits.ac.in/nisp", detailId: "startup" },
      { name: "Intellectual Property Rights Cell", abbreviation: "IPRC", href: "https://mits.ac.in/ipr", detailId: "ipr" },
      { name: "Design Thinking Studio", abbreviation: "DTS", href: "https://mits.ac.in/dts", detailId: "dts" },
      { name: "Centre of Innovation & Incubation", abbreviation: "CII", href: "https://mits.ac.in/innovation-center", detailId: "cii" },
      { name: "Intellectual Property Facilitation Centre", abbreviation: "IPFC", href: "https://mits.ac.in/ipfc", detailId: "ipfc" },
      { name: "Industry-Institute Interaction Cell", abbreviation: "IIIC", href: "https://mits.ac.in/iiic", detailId: "iiic" },
      { name: "Entrepreneurship Development Cell", abbreviation: "EDC", href: "https://mits.ac.in/ed-cell", detailId: "edc" },
      { name: "R & D Cell Formation", href: "https://mits.ac.in/r&d-cell", detailId: "rd-cell" },
    ],
  },
  {
    id: "national-schemes",
    title: "Extracurricular & National Service",
    description: "National service units encouraging civic engagement, leadership, and discipline.",
    cells: [
      { name: "National Service Scheme - NSS Unit", href: "https://mits.ac.in/nss", detailId: "nss" },
      { name: "National Cadet Corps (Army) - NCC Unit", href: "https://mits.ac.in/ncc", detailId: "ncc-army" },
      { name: "National Cadet Corps (Air Wing) - NCC Unit", href: "https://mits.ac.in/ncc-airwing", detailId: "ncc-air" },
    ],
  },
  {
    id: "professional-societies",
    title: "Professional Societies & Chapters",
    description: "Student and faculty chapters of national and international professional bodies.",
    cells: [
      { name: "Institute of Electrical and Electronics Engineers - IEEE Student Branch", href: "https://mits.ac.in/ieee", detailId: "ieee" },
      { name: "Indian Society for Technical Education - ISTE Chapter", href: "https://mits.ac.in/iste", detailId: "iste" },
      { name: "Computer Society of India - CSI Student Branch", href: "https://mits.ac.in/csi-content", detailId: "csi" },
      { name: "Institution of Electronics and Telecommunication Engineers", abbreviation: "IETE", href: "https://mits.ac.in/iete", detailId: "iete" },
      { name: "National Association of Software and Services Companies", abbreviation: "NASSCOM", href: "https://mits.ac.in/nasscom-cell", detailId: "nasscom" },
      { name: "The Institution of Engineers (India) - IEI Student Chapter", abbreviation: "IEI", href: "/cells/iei", detailId: "iei" },
    ],
  },
];

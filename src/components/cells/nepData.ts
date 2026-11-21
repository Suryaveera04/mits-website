// Official Exact Structured Data for National Education Policy (NEP) Cell
// Exactly matched with live https://www.mits.ac.in/nep-cell

const BASE = "https://mits.edu/";

export interface NepLinkItem {
  id: number;
  title: string;
  url: string;
  category?: string;
}

export interface NepEventItem {
  id: number;
  title: string;
  date: string;
  url: string;
}

// All 13 Tabs from the Official MITS NEP Cell Portal
export const nepTabs = [
  { id: "about", label: "About National Education Policy Cell" },
  { id: "policy", label: "Policy Frameworks" },
  { id: "committees", label: "Committees & Task Forces" },
  { id: "digital", label: "Digital & Online Learning" },
  { id: "internship", label: "Internship & Industry Collaboration" },
  { id: "research", label: "Research, Innovation & Community Engagement" },
  { id: "student", label: "Student-Centric Initiatives" },
  { id: "planning", label: "Institutional Planning & Regulations" },
  { id: "notices", label: "Notices & Downloads" },
  { id: "accreditation", label: "Accreditation Readiness" },
  { id: "events", label: "Events & Collaborations" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact Us" },
];

// TAB 1: About NEP Cell Exact Data
export const nepAboutData = {
  noticeBoard: {
    badge: "NEP",
    title: "National Education Policy (NEP) 2020",
  },
  title: "About NEP Cell",
  description:
    "The NEP Cell of Madanapalle Institute of Technology & Science - Deemed to be University serves as the driving force behind the adoption and implementation of the National Education Policy 2020 across the institution. The Cell works collaboratively with academic and administrative units to bring transformative changes aligned with the goals of holistic, flexible, and multidisciplinary education.",
  vision:
    "To foster an inclusive, student-centric learning environment through the progressive implementation of NEP 2020 recommendations, shaping future-ready graduates.",
  mission: [
    "To plan and oversee the phased integration of NEP 2020 reforms in academics and governance.",
    "To encourage innovation, skill development, and interdisciplinary learning.",
    "To sensitize faculty, students, and stakeholders about NEP goals and practices.",
    "To ensure compliance with regulatory frameworks set by UGC, AICTE, and other statutory bodies.",
  ],
  coreObjectives: [
    "Implement NEP 2020 guidelines in curriculum design and academic structure.",
    "Facilitate faculty development and student orientation programs.",
    "Promote academic flexibility through CBCS, ABC, and multidisciplinary courses.",
    "Collaborate with IQAC, departments, and other cells for policy execution.",
  ],
  keyActivities: [
    "Awareness sessions for faculty and students.",
    "Initial review of curriculum gaps vs NEP requirements.",
    "CBCS framework introduced in UG programs.",
    "Faculty workshops on NEP-aligned teaching methods.",
    "Academic Bank of Credits framework initiated.",
    "Multidisciplinary electives offered.",
    "Internships and skill-based courses strengthened.",
    "Feedback and review mechanisms enhanced.",
  ],
  documents: [
    {
      id: 1,
      title: "NEP Co-ordinator & Committee Members 2025-26",
      url: "https://mits.ac.in/assets/pdf/iqac/NEP Cell 2025-26.pdf",
    },
    {
      id: 2,
      title: "NEP Co-ordinator & Committee Members 2024-25",
      url: "https://mits.ac.in/assets/pdf/iqac/NEP%20Committee%20-%202024.pdf",
    },
    {
      id: 3,
      title: "Establishment of NEP Cell",
      url: "https://mits.ac.in/assets/pdf/iqac/",
    },
    {
      id: 4,
      title: "NEP 2020 Implementation Plan (Year-wise)",
      url: "https://mits.ac.in/assets/pdf/iqac/",
    },
    {
      id: 5,
      title: "Action Plan for Implementation of NEP-2020",
      url: "https://mits.ac.in/assets/pdf/iqac/",
    },
    {
      id: 6,
      title: "Governance Structure",
      url: "https://mits.ac.in/assets/pdf/iqac/",
    },
    {
      id: 7,
      title: "Ranking & Accreditations",
      url: "https://mits.ac.in/assets/pdf/iqac/",
    },
  ],
};

// TAB 2: Policy Frameworks Exact Data (12 Links)
export const nepPolicyFrameworks: NepLinkItem[] = [
  {
    id: 1,
    title: "NEP Policy Documents",
    url: "https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf",
  },
  {
    id: 2,
    title: "Academic Bank of Credits (ABC)",
    url: "https://mits.ac.in/public/uploads/ugc/CIRCULAR48%20DATE%20-%2024.11.2023.pdf",
  },
  {
    id: 3,
    title: "NAD – National Academic Depository",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 4,
    title: "Flexible Curriculum & Schemes",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 5,
    title: "Minor Degree Options",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 6,
    title: "FYUP Curriculum, Syllabus, Ordinances",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 7,
    title: "Curriculum Scheme",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 8,
    title: "Academic Workflow (Flexible, Structured)",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 9,
    title: "Adoption of National Higher Education Qualification Framework",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 10,
    title: "Curriculum and Credit Framework",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 11,
    title: "Choice Based Credit System (CBCS)",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 12,
    title: "Provision of Multiple Entry & Exit",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
];

// TAB 3: Committees & Task Forces Exact Data (9 Links)
export const nepCommitteesTaskForces: NepLinkItem[] = [
  {
    id: 1,
    title: "NEP Co-ordinator & Committee Members 2025-26",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP Cell 2025-26.pdf",
  },
  {
    id: 2,
    title: "NEP Co-ordinator & Committee Members 2024-25",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP Committee - 2024.pdf",
  },
  {
    id: 3,
    title: "Organogram",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP-Cell Organogram 2025-26.pdf",
  },
  {
    id: 4,
    title: "NEP Task Force",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 5,
    title: "Institutional & Departmental Committees",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 6,
    title: "MoU Signed – Industry-Institute Linkage",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 7,
    title: "NEP SAARTHI",
    url: "https://mits.ac.in/assets/pdf/nep/2873663_771-SAARTHIs-from-127-HEIs-Feb-2025.pdf",
  },
  {
    id: 8,
    title: "UGC Approved SAARTHIs",
    url: "https://mits.ac.in/assets/pdf/nep/MITS NEP SAARTHIS.pdf",
  },
  {
    id: 9,
    title: "Activity Calendar",
    url: "https://mits.ac.in/assets/pdf/nep/SAARTHI Activity Calender.pdf",
  },
];

// TAB 4: Digital & Online Learning Exact Data (7 Links)
export const nepDigitalLearning: NepLinkItem[] = [
  {
    id: 1,
    title: "Digital Learning Initiatives",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 2,
    title: "Online Education",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 3,
    title: "SWAYAM Adoption & Guidelines",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 4,
    title: "MOOC Coordination (Faculty Roles)",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 5,
    title: "List of MOOC Courses",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 6,
    title: "Development of Digital Content in Indian Languages",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 7,
    title: "Indian Knowledge System in Curriculum",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
];

// TAB 5: Internship & Industry Collaboration Exact Data (5 Links)
export const nepInternshipCollaboration: NepLinkItem[] = [
  {
    id: 1,
    title: "Internship Policy & Formatss",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 2,
    title: "Embedded Degree Programmes (Internship/Apprenticeship)",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 3,
    title: "Summer Internship Reports",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 4,
    title: "Provision of Internships (e.g., Corporate Resource Center)",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 5,
    title: "Industry-Institute Collaborations",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
];

// TAB 6: Research, Innovation & Community Engagement Exact Data (5 Links)
export const nepResearchCommunity: NepLinkItem[] = [
  {
    id: 1,
    title: "Research and Development Cell",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 2,
    title: "Innovation and Incubation Center",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 3,
    title: "Community Engagement Projects",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 4,
    title: "Facilitation of Academic and Research Collaboration",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 5,
    title: "Novel Engaging Courses (NEC)",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
];

// TAB 7: Student-Centric Initiatives Exact Data (5 Links)
export const nepStudentCentric: NepLinkItem[] = [
  {
    id: 1,
    title: "Learner-Centric Education",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 2,
    title: "Honours Degree Programmes",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 3,
    title: "Community Engagement Projects",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 4,
    title: "Socio- Economically Disadvantaged Groups (SEDGs) Support",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 5,
    title: "Motivated, Energized, and Capable Faculty",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
];

// TAB 8: Institutional Planning & Regulations Exact Data (4 Links)
export const nepInstitutionalPlanning: NepLinkItem[] = [
  {
    id: 1,
    title: "Institutional Development Plan",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 2,
    title: "Rules & Regulations (Project, Thesis, Plagiarism)",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 3,
    title: "UGC and Other Regulatory Compliance",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 4,
    title: "Plagiarism Policy (Including Turnitin Login)",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
];

// TAB 9: Notices & Downloads Exact Data (27 Links)
export const nepNoticesDownloads: NepLinkItem[] = [
  {
    id: 1,
    title: "Announcements / Notices",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 2,
    title: "Important Office Memos / Circulars",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 3,
    title: "Downloads (Policies, Formats, PPTs, Schemes)",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 4,
    title: "NEP 2020 - Akhil Bharatiya Shiksha Samagam 2022",
    url: "https://www.education.gov.in/nep/abss-2022",
  },
  {
    id: 5,
    title: "NEP 2020 - Akhil Bharatiya Shiksha Samagam 2023",
    url: "https://www.education.gov.in/nep/abss-2023",
  },
  {
    id: 6,
    title: "NEP 2020 - Akhil Bharatiya Shiksha Samagam 2024",
    url: "https://www.education.gov.in/hi/node/22597",
  },
  {
    id: 7,
    title: "Deeksharambh - Student Induction Programme (SIP)",
    url: "https://www.ugc.gov.in/pdfnews/3830821_DeeksharambhEnglish.pdf",
  },
  {
    id: 8,
    title: "LOCF -Learing Outcomes-Based Curriculum Framework",
    url: "https://www.ugc.gov.in/e-book/locf.pdf",
  },
  {
    id: 9,
    title: "Jeevan Kaushal -Curriculum for Life Skills",
    url: "https://www.ugc.gov.in/pdfnews/4874522_Draft-Curriculum-for-Life-SKill-Jeevan-Kaushal.pdf",
  },
  {
    id: 10,
    title: "Social and Industry Connect - Fostering Social Responsibility & Community Engagement",
    url: "https://www.ugc.gov.in/e-book/UNNAT%20BHARAT%20ABHIYAN.pdf",
  },
  {
    id: 11,
    title: "CARE - Consortium for Academic Research and Ethics",
    url: "https://www.ugc.gov.in/e-book/CARE%20ENGLISH.pdf",
  },
  {
    id: 12,
    title: "STRIDE - Scheme for Trans-disciplinary Research for India’s Developing Economy",
    url: "https://www.ugc.gov.in/pdfnews/2089255_STRIDE_FINAL_BOOK.pdf",
  },
  {
    id: 13,
    title: "SATAT - Framework for Eco-Friendly and Sustainable Campus Development",
    url: "https://www.ugc.gov.in/e-book/STAT%20ENGLISH/mobile/index.html#p=6",
  },
  {
    id: 14,
    title: "MULYA PRAVAH - Guidelines for Inculcation of Human Values and Professional Ethics",
    url: "https://www.ugc.gov.in/pdfnews/8799370_Mulya-Parvah_Guideline.pdf",
  },
  {
    id: 15,
    title: "GURU DAKSHTA - Faculty Induction Programme (FIP) for newly appointed faculty members",
    url: "https://www.ugc.gov.in/e-book/GURU%20DAKSHTA%20English.pdf",
  },
  {
    id: 16,
    title: "National Higher Education Qualifications Framework (NHEQF)",
    url: "https://www.ugc.gov.in/pdfnews/2990035_Final-NHEQF.pdf",
  },
  {
    id: 17,
    title: "National Credit Framework (NCrF)",
    url: "https://www.ugc.gov.in/pdfnews/9028476_Report-of-National-Credit-Framework.pdf",
  },
  {
    id: 18,
    title: "Curriculum and Credit Framework for Undergraduate Programmes",
    url: "https://www.ugc.gov.in/e-book/FYUGP/mobile/index.html",
  },
  {
    id: 19,
    title: "Curriculum and Credit Framework for Postgraduate Programmes",
    url: "https://mits.ac.in/assets/pdf/iqac/Curriculum-and-Credit-Framework-for-Postgraduate-Programmes.pdf",
  },
  {
    id: 20,
    title: "Guidelines for Establishment of Research & Development Cell In Higher Education Institutions",
    url: "https://www.ugc.gov.in/e-book/RDC_Guidelines/mobile/index.html",
  },
  {
    id: 21,
    title: "UTSAH (Undertaking Transformative Strategies and Actions in Higher Education)",
    url: "https://utsah.ugc.ac.in/",
  },
  {
    id: 22,
    title: "National Educational Policy (NEP) 2020",
    url: "https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf",
  },
  {
    id: 23,
    title: "NEP SAARTHI - Student Ambassador for Academic Reforms in Transforming Higher Education in India",
    url: "https://www.ugc.gov.in/pdfnews/1566510_SAARTHI-GUIDELINES.pdf",
  },
  {
    id: 24,
    title: "NEP 2020 - Guidelines for Multiple Entry and Exit in Academic Programmes",
    url: "https://www.ugc.gov.in/e-book/GL%20Multipe%20Entry%20Exit.pdf",
  },
  {
    id: 25,
    title: "Initiatives undertaken by UGC for implementation of NEP - 2020",
    url: "https://www.ugc.gov.in/pdfnews/6769753_UGC-Letter-Implementation-of-NEP.pdf",
  },
  {
    id: 26,
    title: "National Skills Qualification Framework (NSQF)",
    url: "https://nqr.gov.in/downloads/pdfs/NSQF_Gazette_Notification.pdf",
  },
  {
    id: 27,
    title: "Grading of Higher Education Institutions (HEIs) based on Implementation of National Education Policy (NEP) 2020",
    url: "https://www.ugc.gov.in/pdfnews/8308176_NAAC-Grading.pdf",
  },
];

// TAB 10: Accreditation Readiness Exact Subsections
export const nepAccreditationData = {
  general: [
    {
      id: 1,
      title: "Accreditation Readiness (NAAC, NBA, NIRF, etc.)",
      url: "https://mits.ac.in/public/uploads/naac/",
    },
  ],
  auditFormats: [
    {
      id: 1,
      title: "Admin Audit Format",
      url: "https://mits.ac.in/public/uploads/naac/ADMIN%20AUDIT%20FORMAT.pdf",
    },
    {
      id: 2,
      title: "Department Audit Format",
      url: "https://mits.ac.in/public/uploads/naac/DEPARTMENT%20AUDIT%20FORMAT.pdf",
    },
    {
      id: 3,
      title: "Faculty Audit Format",
      url: "https://mits.ac.in/public/uploads/naac/FACULTY%20AUDIT%20FORMAT.pdf",
    },
  ],
  reports: [
    {
      id: 1,
      title: "NAAC Peer Team Report",
      url: "https://mits.ac.in/public/uploads/naac/NAAC PEER TEAM REPORT.pdf",
    },
    {
      id: 2,
      title: "Peer Team Metric wise Score Report",
      url: "https://mits.ac.in/public/uploads/naac/NAAC Peer Team Metric wise Score Report.pdf",
    },
    {
      id: 3,
      title: "Report of External Peer Team Visit of IQAC during UGC Autonomy",
      url: "https://mits.ac.in/public/uploads/naac/Report of External Peer Team Visit of IQAC during UGC Autonomy.pdf",
    },
  ],
  studentSatisfactionSurvey: [
    {
      id: 1,
      title: "Student Satisfaction Survey 2023-24",
      url: "https://mits.ac.in/public/uploads/naac/Student Satisfaction Survey AY 2023-24.pdf",
    },
    {
      id: 2,
      title: "Student Satisfaction Survey 2022-23",
      url: "https://mits.ac.in/public/uploads/naac/Student Satisfaction Survey AY 2022-23.pdf",
    },
    {
      id: 3,
      title: "Student Satisfaction Survey 2021-22",
      url: "https://mits.ac.in/public/uploads/naac/Student%20Satisfaction%20Survey%202021-%202022.pdf",
    },
  ],
  aqar: [
    {
      id: 1,
      title: "AQAR 2023-24 Report",
      url: "#",
    },
    {
      id: 2,
      title: "AQAR Criterion wise",
      url: "https://mits.ac.in/aqarcriteria",
    },
    {
      id: 3,
      title: "AQAR 2022-23 Report",
      url: "https://mits.ac.in/public/uploads/naac/AQAR 2022-23.pdf",
    },
  ],
};

// TAB 11: Events & Collaborations Exact 15 Events
export const nepEventsData: NepEventItem[] = [
  {
    id: 1,
    title:
      'NEP SAARTHI - A Programme on "Holistic Wellness Activities" was organized by NEP Cell on 21st June 2026.',
    date: "21st June 2026",
    url: "https://mits.ac.in/assets/pdf/iqac/Report for Month of June 2026_Holistic Wellness Activities.pdf",
  },
  {
    id: 2,
    title:
      'NEP SAARTHI - A Programme on "Sustainability & Environmental Initiatives" was organized by NEP Cell on 2nd May 2026.',
    date: "2nd May 2026",
    url: "https://mits.ac.in/assets/pdf/iqac/Report on Sustainability & Environmental Initiatives.pdf",
  },
  {
    id: 3,
    title:
      'NEP SAARTHI - A Guest Lecture on "Digital Literacy & Innovation" was organized by NEP Cell on 30th April 2026.',
    date: "30th April 2026",
    url: "https://mits.ac.in/assets/pdf/iqac/Digital Literacy & Innovation April 2026.pdf",
  },
  {
    id: 4,
    title:
      'NEP SAARTHI - A student-Centric Activity titled "Language Quiz & Trivia" was organized by NEP Cell on 18th March 2026',
    date: "18th March 2026",
    url: "https://mits.ac.in/assets/pdf/iqac/Language Quiz & Trivia.pdf",
  },
  {
    id: 5,
    title:
      'NEP SAARTHI - A Lecture on "Connecting with Traditional Practices" was organized by NEP Cell on 26th February 2026',
    date: "26th February 2026",
    url: "https://mits.ac.in/assets/pdf/iqac/Event Report on Connecting with Traditional Practices Feb 2026.pdf",
  },
  {
    id: 6,
    title:
      "NEP SAARTHI - Induction Programme for NEP SAARTHIS for the Academic Year of 2025–26 on 30th January 2026",
    date: "30th January 2026",
    url: "https://mits.ac.in/assets/pdf/iqac/Report on Induction Programme for NEP SAARTHIS.pdf",
  },
  {
    id: 7,
    title:
      "NEP SAARTHI - Group Discussion for the academic year 2025-26 was organized by NEP SAARTHIs on 17th September 2025",
    date: "17th September 2025",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP_Event Report(GD)_Sep 2025 Activity.pdf",
  },
  {
    id: 8,
    title:
      "NEP SAARTHI - Poster Presentation for the academic year 2025-26 was organized by NEP SAARTHIs on 17th September 2025",
    date: "17th September 2025",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP_Event Report(PosterPresentation)_Sep 2025 Activity.pdf",
  },
  {
    id: 9,
    title:
      "NEP SAARTHI - Monthly Activity, NEP-2020 Awareness Rally was organized by NEP SAARTHIs on 25th August 2025",
    date: "25th August 2025",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP Aug 2025 - Rally.pdf",
  },
  {
    id: 10,
    title:
      "NEP SAARTHI - Monthly Activity, IKS Panel Discussion was organized by NEP SAARTHIs on 25th August 2025",
    date: "25th August 2025",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP Aug 2025 - IKS Panel Discussion.pdf",
  },
  {
    id: 11,
    title:
      "NEP SAARTHI - Monthly Activity, Help Desk was organized by NEP SAARTHIs on 30th April 2025",
    date: "30th April 2025",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP April 2025 - Help Desk_Report.pdf",
  },
  {
    id: 12,
    title:
      "NEP SAARTHI - Monthly Activity, Essay Writing Competetion was organized by NEP SAARTHIs on 30th April 2025",
    date: "30th April 2025",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP April 2025 - Essay Report.pdf",
  },
  {
    id: 13,
    title:
      "NEP SAARTHI - Monthly Activity, Quiz Competetion was organized by NEP SAARTHIs on 30th April 2025",
    date: "30th April 2025",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP Feb 2025 - Quiz_Report.pdf",
  },
  {
    id: 14,
    title:
      "NEP SAARTHI - Monthly Activity - April 2025, Organized by NEP SAARTHIs",
    date: "15th April 2025",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP_Report_104821.pdf",
  },
  {
    id: 15,
    title:
      'A 5-day Professional Development Programme (PDP) on "National Education Policy 2020 & Institutional Development" in association with NITTTR Chennai, was held from March 10th -14th, 2025.',
    date: "10th - 14th March 2025",
    url: "https://mits.ac.in/assets/pdf/iqac/Report_National%20Education%20Policy%202020%20&%20Institutional%20Development.pdf",
  },
];

// TAB 12: Gallery (All 48 MITS' NEP SAARTHI's photos)
export const nepGalleryItems = [
  { src: `${BASE}images/nep/gallery/nep-gallery-1.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-2.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-3.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-4.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-5.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-6.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-7.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-8.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-9.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-10.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-11.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-12.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-13.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-14.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-15.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-16.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-17.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-18.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-19.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-20.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-21.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-22.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-23.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-24.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-25.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-26.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-27.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-28.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-29.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-30.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-31.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-32.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-33.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-34.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-35.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-36.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-37.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-38.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-39.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-40.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-41.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-42.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-43.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-44.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-45.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-46.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-47.jpg` },
  { src: `${BASE}images/nep/gallery/nep-gallery-48.jpg` },
];

// TAB 13: Contact Us Exact Details
export const nepContactData = {
  coordinator: "Mr. E. Sathiyanarayanan",
  role: "NEP Cell Coordinator",
  address: [
    "Madanapalle Institute of Technology & Science",
    "Deemed to be University",
    "Madanapalle-Kadiri Road",
    "kurabalakota Mandal, Madanapalle-517325",
    "Andhra Pradesh, India",
  ],
  phone: "+91- 9100973376, 08571280255",
  email: "nep@mits.ac.in",
};

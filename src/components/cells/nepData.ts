// Official Structured Data for National Education Policy (NEP) Cell
// Synchronized directly with live https://www.mits.ac.in/nep-cell

const BASE = import.meta.env.BASE_URL;

export interface NepDocument {
  id: number;
  title: string;
  category?: string;
  url: string;
}

export interface NepEvent {
  id: number;
  title: string;
  date: string;
  academicYear: string;
  url: string;
}

export interface NepCommitteeMember {
  sno: string;
  name: string;
  designation: string;
  position: string;
}

// 5 Carousel Slides for the About Tab
export const nepCarouselSlides = [
  {
    src: `${BASE}images/nep/nep-hero.jpeg`,
    title: "National Education Policy (NEP 2020) Cell",
    subtitle: "Madanapalle Institute of Technology & Science • Transformative Higher Education Reforms",
    tag: "Institutional Implementation",
  },
  {
    src: `${BASE}images/nep/nep-poster.jpg`,
    title: "NEP SAARTHI Student Ambassadors",
    subtitle: "Student Ambassadors for Academic Reforms in Transforming Higher Education in India",
    tag: "UGC Initiative",
  },
  {
    src: `${BASE}images/nep/nep-2026-1.jpeg`,
    title: "Multidisciplinary Learning & ABC Portals",
    subtitle: "Flexible Curricula, Multiple Entry-Exit Pathways & Academic Bank of Credits",
    tag: "Academic Framework",
  },
  {
    src: `${BASE}images/nep/nep-2026-2.jpeg`,
    title: "Student Induction & Holistic Pedagogy",
    subtitle: "Deeksharambh SIP, Experiential Workshops & Indian Knowledge Systems (IKS)",
    tag: "Student Centric",
  },
  {
    src: `${BASE}images/nep/nep-2026-3.jpeg`,
    title: "Sustainability, Innovation & Community Action",
    subtitle: "Unnat Bharat Abhiyan, Skill-Based Learning & Industry-Linked Internships",
    tag: "Impact & Outreach",
  },
];

// All 13 Tabs from the Official MITS NEP Cell Portal
export const nepTabs = [
  { id: "about", label: "About NEP Cell" },
  { id: "policy", label: "Policy Frameworks" },
  { id: "committees", label: "Committees & Task Forces" },
  { id: "digital", label: "Digital & Online Learning" },
  { id: "internship", label: "Internship & Industry Collaboration" },
  { id: "research", label: "Research & Innovation" },
  { id: "student", label: "Student-Centric Initiatives" },
  { id: "planning", label: "Institutional Planning" },
  { id: "notices", label: "Notices & Downloads" },
  { id: "accreditation", label: "Accreditation Readiness" },
  { id: "events", label: "Events & Collaborations" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact Us" },
];

// Committee Members
export const nepCommitteeMembers: NepCommitteeMember[] = [
  {
    sno: "1",
    name: "Dr. C. Yuvaraj",
    designation: "Vice Chancellor (I/c)",
    position: "Chairperson",
  },
  {
    sno: "2",
    name: "Mr. E. Sathiyanarayanan",
    designation: "Assistant Professor, Dept. of ECE",
    position: "Coordinator",
  },
  {
    sno: "3",
    name: "Dr. P. Ramanathan",
    designation: "Vice-Principal (Administration)",
    position: "Member",
  },
  {
    sno: "4",
    name: "Dr. C. Kamal Basha",
    designation: "Dean Quality Assurance",
    position: "Member",
  },
  {
    sno: "5",
    name: "Dr. S. Baskaran",
    designation: "Head, Dept. of Mechanical Engineering",
    position: "Member",
  },
  {
    sno: "6",
    name: "Dr. K. Arul kumar",
    designation: "Associate Professor, Dept. of EEE",
    position: "Member",
  },
  {
    sno: "7",
    name: "Dr. M. Sreedevi",
    designation: "Professor & Head, Dept. of CST",
    position: "Member",
  },
];

// Policy Frameworks (Tab 2)
export const nepPolicyDocuments: NepDocument[] = [
  {
    id: 1,
    title: "National Education Policy 2020 Official Document",
    category: "Apex National Policy",
    url: "https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf",
  },
  {
    id: 2,
    title: "Academic Bank of Credits (ABC) Circular & Implementation Framework",
    category: "Credit Mobility",
    url: "https://mits.ac.in/public/uploads/ugc/CIRCULAR48%20DATE%20-%2024.11.2023.pdf",
  },
  {
    id: 3,
    title: "NAD – National Academic Depository Portal Guidelines",
    category: "Digital Records",
    url: "https://mits.ac.in/assets/pdf/iqac/CIRCULAR48 DATE - 24.11.2023.pdf",
  },
  {
    id: 4,
    title: "Flexible Curriculum & CBCS Credit Distribution Schemes",
    category: "Curricular Reform",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 5,
    title: "Minor Degree Guidelines & Interdisciplinary Tracks",
    category: "Multidisciplinary",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 6,
    title: "Four-Year Undergraduate Programme (FYUP) Curriculum, Syllabus & Ordinances",
    category: "Degree Structure",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 7,
    title: "Curriculum Scheme for Holistic Education",
    category: "Curricular Scheme",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 8,
    title: "Academic Workflow (Flexible, Structured Choice-Based System)",
    category: "Academic Operations",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 9,
    title: "Adoption of National Higher Education Qualification Framework (NHEQF)",
    category: "Qualification Framework",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 10,
    title: "Curriculum and Credit Framework for Undergraduate Programmes (CCFUP)",
    category: "UGC Guidelines",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 11,
    title: "Guidelines for Multiple Entry and Exit in Academic Programmes offered in HEIs",
    category: "Multiple Pathways",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 12,
    title: "Guidelines for Transforming Higher Education Institutions into Multidisciplinary Institutions",
    category: "Institutional Transformation",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
];

// Committees & Task Forces Documents (Tab 3)
export const nepCommitteesDocs: NepDocument[] = [
  {
    id: 1,
    title: "NEP Co-ordinator & Committee Members Notification 2025-26",
    category: "Official Order",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP Cell 2025-26.pdf",
  },
  {
    id: 2,
    title: "NEP Co-ordinator & Committee Members Notification 2024-25",
    category: "Official Order",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP Committee - 2024.pdf",
  },
  {
    id: 3,
    title: "NEP Cell Organogram 2025-26",
    category: "Governance Structure",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP-Cell Organogram 2025-26.pdf",
  },
  {
    id: 4,
    title: "NEP Task Force Constitution & Terms of Reference",
    category: "Implementation Body",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 5,
    title: "Institutional & Departmental NEP Implementation Committees",
    category: "Departmental Cells",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 6,
    title: "MoU Signed – Industry-Institute Linkage for NEP Internship Mandate",
    category: "Industry Connect",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 7,
    title: "NEP SAARTHI National List (771 SAARTHIs from 127 HEIs Approved by UGC)",
    category: "UGC National List",
    url: "https://mits.ac.in/assets/pdf/nep/2873663_771-SAARTHIs-from-127-HEIs-Feb-2025.pdf",
  },
  {
    id: 8,
    title: "MITS UGC Approved NEP SAARTHIs Student Ambassadors",
    category: "Student Leadership",
    url: "https://mits.ac.in/assets/pdf/nep/MITS NEP SAARTHIS.pdf",
  },
  {
    id: 9,
    title: "NEP SAARTHI Annual Activity Calendar",
    category: "Event Roadmap",
    url: "https://mits.ac.in/assets/pdf/nep/SAARTHI Activity Calender.pdf",
  },
];

// Digital & Online Learning (Tab 4)
export const nepDigitalDocs: NepDocument[] = [
  {
    id: 1,
    title: "Digital Learning Initiatives & LMS Integration",
    category: "E-Learning",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 2,
    title: "Online Education Policy & Blended Learning Guidelines",
    category: "Pedagogy",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 3,
    title: "SWAYAM Credit Transfer Adoption & Institutional Guidelines",
    category: "SWAYAM / NPTEL",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 4,
    title: "MOOC Coordination & Faculty Course Mentorship Roles",
    category: "Faculty Roles",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 5,
    title: "Approved List of MOOC Courses for Credit Equivalency",
    category: "Credit Equivalence",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 6,
    title: "Development of Digital Content in Indian Languages",
    category: "Multilingual Tech",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 7,
    title: "Indian Knowledge System (IKS) in Technical Curriculum",
    category: "IKS Modules",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
];

// Internship & Industry Collaboration (Tab 5)
export const nepInternshipDocs: NepDocument[] = [
  {
    id: 1,
    title: "Internship Policy, Evaluation Rubrics & Prescribed Formats",
    category: "Policy & Formats",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 2,
    title: "Embedded Degree Programmes (Apprenticeship/Internship Linked)",
    category: "Degree Integration",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 3,
    title: "Summer Internship Consolidated Performance Reports",
    category: "Student Reports",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 4,
    title: "Corporate Resource Center (CRC) Internship Allotment Framework",
    category: "Placement & CRC",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 5,
    title: "Industry-Institute Collaborations & Corporate Skill Tracks",
    category: "Corporate Ties",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
];

// Research & Community Engagement (Tab 6)
export const nepResearchDocs: NepDocument[] = [
  {
    id: 1,
    title: "Research and Development Cell (RDC) Establishment & Guidelines",
    category: "Research Governance",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 2,
    title: "Innovation and Incubation Center (IIC) Seed Fund Guidelines",
    category: "Startups & IP",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 3,
    title: "Community Engagement & Rural Immersion Projects (UBA Framework)",
    category: "Social Outreach",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 4,
    title: "Facilitation of National & International Academic Collaborations",
    category: "Global Collaborations",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 5,
    title: "Novel Engaging Courses (NEC) Interdisciplinary Curriculum",
    category: "Innovative Courses",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
];

// Student-Centric Initiatives (Tab 7)
export const nepStudentDocs: NepDocument[] = [
  {
    id: 1,
    title: "Learner-Centric Education Framework & Personalized Learning Paths",
    category: "Student Pedagogy",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 2,
    title: "B.Tech Honours Degree Programmes Regulations",
    category: "Honours Degree",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 3,
    title: "Student Community Engagement Projects & Societal Field Visits",
    category: "Experiential Learning",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 4,
    title: "Socio-Economically Disadvantaged Groups (SEDGs) Support Mechanism",
    category: "Inclusion & Equity",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 5,
    title: "Motivated, Energized, and Capable Faculty Empowerment Initiatives",
    category: "Faculty Vitality",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
];

// Institutional Planning & Regulations (Tab 8)
export const nepPlanningDocs: NepDocument[] = [
  {
    id: 1,
    title: "Institutional Development Plan (IDP) 2022-2027",
    category: "Strategic Blueprint",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 2,
    title: "Rules & Regulations (Capstone Project, Master's Thesis & Research Integrity)",
    category: "Academic Integrity",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 3,
    title: "UGC, AICTE and Statutory Regulatory Compliance Matrix",
    category: "Statutory Standards",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
  {
    id: 4,
    title: "Plagiarism Policy & Turnitin Anti-Plagiarism Verification Guidelines",
    category: "Ethics & Turnitin",
    url: "https://mits.ac.in/assets/pdf/iqac/",
  },
];

// Notices & Downloads (Tab 9) - 27 Official Documents
export const nepNoticesDocs: NepDocument[] = [
  {
    id: 1,
    title: "NEP 2020 - Akhil Bharatiya Shiksha Samagam (ABSS) 2022 Resolutions",
    category: "ABSS National Summit",
    url: "https://www.education.gov.in/nep/abss-2022",
  },
  {
    id: 2,
    title: "NEP 2020 - Akhil Bharatiya Shiksha Samagam (ABSS) 2023 Resolutions",
    category: "ABSS National Summit",
    url: "https://www.education.gov.in/nep/abss-2023",
  },
  {
    id: 3,
    title: "NEP 2020 - Akhil Bharatiya Shiksha Samagam (ABSS) 2024 Framework",
    category: "ABSS National Summit",
    url: "https://www.education.gov.in/hi/node/22597",
  },
  {
    id: 4,
    title: "Deeksharambh - Student Induction Programme (SIP) UGC Guidelines",
    category: "SIP Guidelines",
    url: "https://www.ugc.gov.in/pdfnews/3830821_DeeksharambhEnglish.pdf",
  },
  {
    id: 5,
    title: "LOCF - Learning Outcomes-Based Curriculum Framework Guidelines",
    category: "Curricular Outcomes",
    url: "https://www.ugc.gov.in/e-book/locf.pdf",
  },
  {
    id: 6,
    title: "Jeevan Kaushal - Curriculum for Life Skills (Draft Framework)",
    category: "Life Skills",
    url: "https://www.ugc.gov.in/pdfnews/4874522_Draft-Curriculum-for-Life-SKill-Jeevan-Kaushal.pdf",
  },
  {
    id: 7,
    title: "Social and Industry Connect - Fostering Social Responsibility (Unnat Bharat Abhiyan)",
    category: "Community Immersion",
    url: "https://www.ugc.gov.in/e-book/UNNAT%20BHARAT%20ABHIYAN.pdf",
  },
  {
    id: 8,
    title: "Evaluation Reforms in Higher Educational Institutions (UGC Mandate)",
    category: "Assessment Reforms",
    url: "https://www.ugc.gov.in/pdfnews/1031121_Guidelines-Innovative-Pedagogical-Approaches-Evaluation-Reforms.pdf",
  },
  {
    id: 9,
    title: "228 Active Learning Strategies Handout (Interactive Classroom Techniques)",
    category: "Active Pedagogy",
    url: "https://mits.ac.in/assets/pdf/iqac/handout-interactive-techniques.pdf",
  },
  {
    id: 10,
    title: "Innovative Pedagogy: 3-2-1 Technique Guide",
    category: "Teaching Tools",
    url: "https://mits.ac.in/assets/pdf/iqac/3-2-1 Technique.pdf",
  },
  {
    id: 11,
    title: "Innovative Pedagogy: Analytic Teams Collaborative Framework",
    category: "Teaching Tools",
    url: "https://mits.ac.in/assets/pdf/iqac/Analytic Teams.pdf",
  },
  {
    id: 12,
    title: "Blended Learning Methodologies & Instructional Models",
    category: "Teaching Tools",
    url: "https://mits.ac.in/assets/pdf/iqac/Blended Learning.pdf",
  },
  {
    id: 13,
    title: "Case-Based Learning Pedagogical Template",
    category: "Teaching Tools",
    url: "https://mits.ac.in/assets/pdf/iqac/Case Based Learning.pdf",
  },
  {
    id: 14,
    title: "Contemporary Issues Journal Template for Students",
    category: "Teaching Tools",
    url: "https://mits.ac.in/assets/pdf/iqac/Contemporary Issues Journal.pdf",
  },
  {
    id: 15,
    title: "Digital Storytelling in Multidisciplinary Education",
    category: "Teaching Tools",
    url: "https://mits.ac.in/assets/pdf/iqac/Digital Story.pdf",
  },
  {
    id: 16,
    title: "Experiential Learning Implementation Protocols",
    category: "Teaching Tools",
    url: "https://mits.ac.in/assets/pdf/iqac/Experential Learning.pdf",
  },
  {
    id: 17,
    title: "FishBowl Interactive Discussion Strategy",
    category: "Teaching Tools",
    url: "https://mits.ac.in/assets/pdf/iqac/FishBowl.pdf",
  },
  {
    id: 18,
    title: "Flipped Classroom Instruction Manual",
    category: "Teaching Tools",
    url: "https://mits.ac.in/assets/pdf/iqac/Flipped Classroom.pdf",
  },
  {
    id: 19,
    title: "Group Grid Assessment Technique",
    category: "Teaching Tools",
    url: "https://mits.ac.in/assets/pdf/iqac/Group Grid.pdf",
  },
  {
    id: 20,
    title: "Mind Mapping Techniques for Complex Concept Visualization",
    category: "Teaching Tools",
    url: "https://mits.ac.in/assets/pdf/iqac/Mind Mapping.pdf",
  },
  {
    id: 21,
    title: "Peer-Assisted Learning (PAL) Framework",
    category: "Teaching Tools",
    url: "https://mits.ac.in/assets/pdf/iqac/Peer Assisted Learning.pdf",
  },
  {
    id: 22,
    title: "Problem-Based Learning (PBL) Rubrics",
    category: "Teaching Tools",
    url: "https://mits.ac.in/assets/pdf/iqac/Problem Based Learning.pdf",
  },
  {
    id: 23,
    title: "Project-Based Learning Course Project Execution Template",
    category: "Teaching Tools",
    url: "https://mits.ac.in/assets/pdf/iqac/Project based Learning.pdf",
  },
  {
    id: 24,
    title: "WIT & WIL Method (What I Teach & What I Learn) NEP Sample Template",
    category: "Teaching Tools",
    url: "https://mits.ac.in/assets/pdf/iqac/Sample Template_WIT& WIL method.pdf",
  },
  {
    id: 25,
    title: "NEP 2020 – MITS Laboratory Protocol",
    category: "Lab Guidelines",
    url: "https://mits.ac.in/assets/pdf/iqac/MITS Lab Protocol 6.11.24.pdf",
  },
  {
    id: 26,
    title: "NEP 2020 – Show & Tell Corner Implementation Guide",
    category: "Active Learning",
    url: "https://mits.ac.in/assets/pdf/iqac/Show & Tell Corner.pdf",
  },
  {
    id: 27,
    title: "Sample Procedure for SDG Curriculum Mapping",
    category: "SDG Alignment",
    url: "https://mits.ac.in/assets/pdf/iqac/Sample Procedure for SDG Curriculum Mapping.pdf",
  },
];

// Accreditation Readiness (Tab 10)
export const nepAccreditationDocs: NepDocument[] = [
  {
    id: 1,
    title: "Admin Audit Format (Institutional Infrastructure & Admin Review)",
    category: "Audit Format",
    url: "https://mits.ac.in/public/uploads/naac/ADMIN%20AUDIT%20FORMAT.pdf",
  },
  {
    id: 2,
    title: "Department Audit Format (Academic & Pedagogical Compliance)",
    category: "Audit Format",
    url: "https://mits.ac.in/public/uploads/naac/DEPARTMENT%20AUDIT%20FORMAT.pdf",
  },
  {
    id: 3,
    title: "Faculty Audit Format (Teaching, Research & NEP Alignment Review)",
    category: "Audit Format",
    url: "https://mits.ac.in/public/uploads/naac/FACULTY%20AUDIT%20FORMAT.pdf",
  },
  {
    id: 4,
    title: "NAAC Peer Team Report",
    category: "NAAC Accreditation",
    url: "https://mits.ac.in/public/uploads/naac/NAAC PEER TEAM REPORT.pdf",
  },
  {
    id: 5,
    title: "Peer Team Metric-wise Score Report",
    category: "NAAC Accreditation",
    url: "https://mits.ac.in/public/uploads/naac/NAAC Peer Team Metric wise Score Report.pdf",
  },
  {
    id: 6,
    title: "Report of External Peer Team Visit of IQAC during UGC Autonomy",
    category: "Autonomy Review",
    url: "https://mits.ac.in/public/uploads/naac/Report of External Peer Team Visit of IQAC during UGC Autonomy.pdf",
  },
  {
    id: 7,
    title: "Student Satisfaction Survey (SSS) AY 2023-24",
    category: "Survey Report",
    url: "https://mits.ac.in/public/uploads/naac/Student Satisfaction Survey AY 2023-24.pdf",
  },
  {
    id: 8,
    title: "Student Satisfaction Survey (SSS) AY 2022-23",
    category: "Survey Report",
    url: "https://mits.ac.in/public/uploads/naac/Student Satisfaction Survey AY 2022-23.pdf",
  },
  {
    id: 9,
    title: "Student Satisfaction Survey (SSS) AY 2021-22",
    category: "Survey Report",
    url: "https://mits.ac.in/public/uploads/naac/Student%20Satisfaction%20Survey%202021-%202022.pdf",
  },
  {
    id: 10,
    title: "AQAR 2022-23 Annual Quality Assurance Report",
    category: "AQAR Report",
    url: "https://mits.ac.in/public/uploads/naac/AQAR 2022-23.pdf",
  },
  {
    id: 11,
    title: "AQAR 2021-22 Annual Quality Assurance Report",
    category: "AQAR Report",
    url: "https://mits.ac.in/public/uploads/naac/AQAR%202021-2022.pdf",
  },
  {
    id: 12,
    title: "MITS Deemed to be University Comprehensive Brochure 2026",
    category: "Brochure",
    url: "https://www.mits.ac.in/public/uploads/static-pdf/MITS Deemed to be University Brochure 2026.pdf",
  },
];

// All 15 Events from ug-tab25
export const nepEvents: NepEvent[] = [
  {
    id: 1,
    title: "NEP SAARTHI - A Programme on \"Holistic Wellness Activities\" was organized by NEP Cell on 21st June 2026.",
    date: "21st June 2026",
    academicYear: "2026-27",
    url: "https://mits.ac.in/assets/pdf/iqac/Report for Month of June 2026_Holistic Wellness Activities.pdf",
  },
  {
    id: 2,
    title: "NEP SAARTHI - A Programme on \"Sustainability & Environmental Initiatives\" was organized by NEP Cell on 2nd May 2026.",
    date: "2nd May 2026",
    academicYear: "2026-27",
    url: "https://mits.ac.in/assets/pdf/iqac/Report on Sustainability & Environmental Initiatives.pdf",
  },
  {
    id: 3,
    title: "NEP SAARTHI - A Guest Lecture on \"Digital Literacy & Innovation\" was organized by NEP Cell on 30th April 2026.",
    date: "30th April 2026",
    academicYear: "2025-26",
    url: "https://mits.ac.in/assets/pdf/iqac/Digital Literacy & Innovation April 2026.pdf",
  },
  {
    id: 4,
    title: "NEP SAARTHI - A student-Centric Activity titled \"Language Quiz & Trivia\" was organized by NEP Cell on 18th March 2026.",
    date: "18th March 2026",
    academicYear: "2025-26",
    url: "https://mits.ac.in/assets/pdf/iqac/Language Quiz & Trivia.pdf",
  },
  {
    id: 5,
    title: "NEP SAARTHI - A Lecture on \"Connecting with Traditional Practices\" was organized by NEP Cell on 26th February 2026.",
    date: "26th February 2026",
    academicYear: "2025-26",
    url: "https://mits.ac.in/assets/pdf/iqac/Event Report on Connecting with Traditional Practices Feb 2026.pdf",
  },
  {
    id: 6,
    title: "NEP SAARTHI - Induction Programme for NEP SAARTHIS for the Academic Year of 2025–26 on 30th January 2026.",
    date: "30th January 2026",
    academicYear: "2025-26",
    url: "https://mits.ac.in/assets/pdf/iqac/Report on Induction Programme for NEP SAARTHIS.pdf",
  },
  {
    id: 7,
    title: "NEP SAARTHI - Group Discussion for the academic year 2025-26 was organized by NEP SAARTHIs on 17th September 2025.",
    date: "17th September 2025",
    academicYear: "2025-26",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP_Event Report(GD)_Sep 2025 Activity.pdf",
  },
  {
    id: 8,
    title: "NEP SAARTHI - Poster Presentation for the academic year 2025-26 was organized by NEP SAARTHIs on 17th September 2025.",
    date: "17th September 2025",
    academicYear: "2025-26",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP_Event Report(PosterPresentation)_Sep 2025 Activity.pdf",
  },
  {
    id: 9,
    title: "NEP SAARTHI - Monthly Activity, NEP-2020 Awareness Rally was organized by NEP SAARTHIs on 25th August 2025.",
    date: "25th August 2025",
    academicYear: "2025-26",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP Aug 2025 - Rally.pdf",
  },
  {
    id: 10,
    title: "NEP SAARTHI - Monthly Activity, IKS Panel Discussion was organized by NEP SAARTHIs on 25th August 2025.",
    date: "25th August 2025",
    academicYear: "2025-26",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP Aug 2025 - IKS Panel Discussion.pdf",
  },
  {
    id: 11,
    title: "NEP SAARTHI - Monthly Activity, Help Desk was organized by NEP SAARTHIs on 30th April 2025.",
    date: "30th April 2025",
    academicYear: "2024-25",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP April 2025 - Help Desk_Report.pdf",
  },
  {
    id: 12,
    title: "NEP SAARTHI - Monthly Activity, Essay Writing Competition was organized by NEP SAARTHIs on 30th April 2025.",
    date: "30th April 2025",
    academicYear: "2024-25",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP April 2025 - Essay Report.pdf",
  },
  {
    id: 13,
    title: "NEP SAARTHI - Monthly Activity, Quiz Competition was organized by NEP SAARTHIs on 30th April 2025.",
    date: "30th April 2025",
    academicYear: "2024-25",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP Feb 2025 - Quiz_Report.pdf",
  },
  {
    id: 14,
    title: "NEP SAARTHI - Monthly Activity - April 2025, Organized by NEP SAARTHIs.",
    date: "15th April 2025",
    academicYear: "2024-25",
    url: "https://mits.ac.in/assets/pdf/iqac/NEP_Report_104821.pdf",
  },
  {
    id: 15,
    title: "A 5-day Professional Development Programme (PDP) on \"National Education Policy 2020 & Institutional Development\" in association with NITTTR Chennai (March 10th-14th, 2025).",
    date: "10th - 14th March 2025",
    academicYear: "2024-25",
    url: "https://mits.ac.in/assets/pdf/iqac/Report_National%20Education%20Policy%202020%20&%20Institutional%20Development.pdf",
  },
];

// 10 High-Resolution Gallery Photos (Tab 12)
export const nepGalleryImages = [
  {
    src: `${BASE}images/nep/nep-gallery-1.jpg`,
    title: "MITS NEP SAARTHIs Inauguration",
    subtitle: "UGC student ambassadors taking the pledge for educational transformation",
  },
  {
    src: `${BASE}images/nep/nep-gallery-2.jpg`,
    title: "NEP 2020 Student Awareness Rally",
    subtitle: "Campus-wide rally highlighting multiple entry-exit and skill education",
  },
  {
    src: `${BASE}images/nep/nep-gallery-3.jpg`,
    title: "Poster Presentation Competition",
    subtitle: "Students presenting multidisciplinary research and innovation concepts",
  },
  {
    src: `${BASE}images/nep/nep-gallery-4.jpg`,
    title: "IKS Panel Discussion",
    subtitle: "Scholars deliberating on Indian Knowledge Systems in engineering education",
  },
  {
    src: `${BASE}images/nep/nep-gallery-5.jpg`,
    title: "NEP SAARTHI Induction Session",
    subtitle: "Orientation for newly inducted student ambassadors and faculty mentors",
  },
  {
    src: `${BASE}images/nep/nep-gallery-6.jpg`,
    title: "Academic Bank of Credits (ABC) Help Desk",
    subtitle: "Assisting students with DigiLocker registration and credit mapping",
  },
  {
    src: `${BASE}images/nep/nep-gallery-7.jpg`,
    title: "Professional Development Programme with NITTTR",
    subtitle: "5-day faculty training on institutional development and OBE reforms",
  },
  {
    src: `${BASE}images/nep/nep-gallery-8.jpg`,
    title: "Language Quiz & Trivia Challenge",
    subtitle: "Promoting linguistic diversity and multilingual education on campus",
  },
  {
    src: `${BASE}images/nep/nep-gallery-9.jpg`,
    title: "Digital Literacy & Innovation Lecture",
    subtitle: "Expert talk on AI, cyber systems, and modern digital pedagogies",
  },
  {
    src: `${BASE}images/nep/nep-gallery-10.jpg`,
    title: "Sustainability & Environmental Initiatives",
    subtitle: "Community tree plantation and environmental pledge under NEP mandates",
  },
];

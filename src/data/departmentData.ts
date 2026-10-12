/**
 * Madanapalle Institute of Technology & Science (MITS) - Department & Faculty Data
 * 
 * ============================================================================
 * HOW TO MODIFY DEPARTMENT ROSTERS & FACULTY DISPLAY POSITIONS
 * ============================================================================
 * 
 * 1. HOW TO CHANGE DISPLAY POSITION (REORDER):
 *    - Each department has a list of faculty members in the `departmentsData` object,
 *      under the key `faculty`.
 *    - The order of the faculty items inside the `faculty` array determines their display
 *      order on the department page faculty tab. Reorder the array elements to change positions.
 * 
 * 2. HOW TO ADD A NEW FACULTY MEMBER:
 *    - Add a new object inside the department's `faculty` array:
 *      {
 *         name: "Dr. Name",
 *         designation: "Associate Professor",
 *         qualification: "Ph.D.",
 *         email: "name@mits.ac.in",
 *         image: "https://mits.ac.in/public/uploads/faculty/Dr. Name.JPG",
 *         profileUrl: "https://mits.ac.in/facultyprofile/ID"
 *      }
 * 
 * 3. HOW TO EDIT DETAILS:
 *    - Search for the department name (e.g. "Computer Science & Engineering") and edit
 *      the corresponding faculty array item directly.
 */
// Comprehensive department data extracted from official MITS website (mits.ac.in)
const BASE = import.meta.env.BASE_URL;

export interface FacultyMember {
  name: string;
  designation: string;
  qualification: string;
  image?: string;
  email?: string;
  subDepartment?: string;
  profileUrl?: string;
  profile?: {
    researchAreas?: string;
    publications?: { title: string; year: string; index: string }[];
    patents?: { title: string; year: string; status: string }[];
    awards?: string[];
    education?: { degree: string; specializatio: string; university: string; year: string }[];
  };
}

export interface Achievement {
  title: string;
  description: string;
  type: "faculty" | "student";
}

export interface Facility {
  name: string;
  description: string;
  image?: string;
  equipment?: string[];
}

export interface Patent {
  title: string;
  status: "Filed" | "Published" | "Granted";
  year?: string;
}

export interface Publication {
  title: string;
  type: "journal" | "conference";
  year: string;
  authors?: string;
}

export interface ConsultancyProject {
  title: string;
  agency: string;
  amount?: string;
}

export interface DeptEvent {
  title: string;
  date: string;
  image?: string;
  description?: string;
}

export interface MoUPartner {
  name: string;
  purpose: string;
  year?: string;
}

export interface PlacementInfo {
  percentage: string;
  avgPackage: string;
  highestPackage: string;
  recruiters: string[];
}

export interface StudentProject {
  title: string;
  students: string;
  description?: string;
}

export interface Subject {
  name: string;
  semester: number;
  type: "core" | "elective" | "professional-skill" | "optional-training";
}

export interface DepartmentData {
  key: string;
  name: string;
  shortName: string;
  established: string;
  bannerImage: string;
  about: string;
  vision: string;
  mission: string[];
  nbaAccredited: boolean;
  hod: FacultyMember;
  achievements: { consultancyAmount: string; researchProjects: string; patents: string; publications: string };
  teachingApproach: { description: string; points: string[] };
  courses: string[];
  contactInfo: { email: string; phone: string };
  faculty: FacultyMember[];
  detailedAchievements: Achievement[];
  facilities: Facility[];
  patents: Patent[];
  publications: Publication[];
  consultancy: ConsultancyProject[];
  events: DeptEvent[];
  mous: MoUPartner[];
  placement: PlacementInfo;
  studentProjects: StudentProject[];
  subjects: Subject[];
  documents: { title: string; url: string }[];
  underGraduate?: UnderGraduateData;
  more?: DepartmentMoreData;
  topTabs?: DepartmentTopTab[];
  goals?: string[];
  isUnderUpdate?: boolean;
}

export interface DepartmentTopTabDoc {
  title: string;
  url: string;
}

export interface DepartmentTopTabMember {
  sno: string;
  name: string;
  composition?: string;
  designation: string;
}

export interface DepartmentTopTab {
  id: string;
  label: string;
  title?: string;
  description?: string;
  points?: string[];
  members?: DepartmentTopTabMember[];
  documents?: DepartmentTopTabDoc[];
}

export interface MentorMenteeItem {
  title: string;
  pdfUrl: string;
  academicYear?: string;
  category?: string;
}

export interface MentorMenteeGroup {
  groupTitle: string;
  items: MentorMenteeItem[];
}

export interface MinorHighlight {
  title: string;
  points: string[];
}

export interface MinorDegreeData {
  title: string;
  tagline: string;
  overview: string;
  highlights: MinorHighlight[];
  pdfUrl?: string;
  pdfLabel?: string;
}

export interface InterdisciplinaryProjectItem {
  title: string;
  pdfUrl: string;
  academicYear?: string;
  category?: string;
}

export interface InterdisciplinaryProjectGroup {
  groupTitle: string;
  items: InterdisciplinaryProjectItem[];
}

export interface DepartmentMoreSubTab {
  id: string;
  label: string;
  externalUrl?: string;
  directPdf?: boolean;
  subItems?: DepartmentMoreSubTab[];
}

export interface DoctoralScholar {
  sno: string;
  name: string;
  guide: string;
  coGuide?: string;
  dateOfJoining: string;
  researchTitle: string;
}

export interface DoctoralBatch {
  batchTitle: string;
  scholars: DoctoralScholar[];
}

export interface DoctoralData {
  title: string;
  description: string;
  batchTitle?: string;
  scholars?: DoctoralScholar[];
  batches?: DoctoralBatch[];
}

export interface MoreDocumentItem {
  title: string;
  url: string;
}

export interface InnovativeTeachingTableItem {
  sno: string | number;
  courseCodeAndName: string;
  facultyName: string;
  innovativeDetails: string;
  link: string;
}

export interface MoreDocumentGroup {
  groupTitle: string;
  description?: string;
  documents: MoreDocumentItem[];
  tableTitle?: string;
  tableItems?: InnovativeTeachingTableItem[];
  critiqueReviewText?: string;
  critiqueReviewLink?: string;
}

export interface ObeSurveyCategory {
  title: string;
  links: { title: string; url: string }[];
}

export interface ObeData {
  title: string;
  subTabs: { id: string; label: string }[];
  posPsosPeosImage?: string;
  posPsosPeosPdfUrl?: string;
  surveys?: ObeSurveyCategory[];
  remedialClasses?: { title: string; url: string }[];
  graduateExitSurvey?: { title: string; url: string }[];
  copoAttainment?: { title: string; url: string }[];
}

export interface FdpSession {
  sno: string;
  resourcePerson: string;
  topic: string;
  link: string;
  dateSchedule: string;
}

export interface CourseMaterialItem {
  sno: string;
  courseName: string;
  topicName: string;
  materialUrl: string;
  feedbackUrl: string;
}

export interface CivilNotesData {
  title: string;
  fdpTitle: string;
  fdpSessions: FdpSession[];
  materials: CourseMaterialItem[];
}

export interface MbaAlumniYearGroup {
  year: string;
  lectures: string[];
  reportTitle?: string;
  reportUrl?: string;
}

export interface MbaCoordinatorContact {
  title: string;
  name: string;
  designation: string;
  department: string;
  institute: string;
  address: string;
  phone: string;
  email: string;
}

export interface MbaAlumniData {
  title: string;
  yearGroups: MbaAlumniYearGroup[];
  coordinator?: MbaCoordinatorContact;
}

export interface MbaRuralImmersionBatch {
  batchTitle: string;
  videoLinks?: { title: string; url: string }[];
  youtubeEmbeds?: string[];
}

export interface MbaRuralImmersionData {
  title: string;
  batches: MbaRuralImmersionBatch[];
  galleries: { title: string; pdfUrl: string }[];
}

export interface MbaInternationalProgramItem {
  subTitle: string;
  points?: string[];
  linkTitle?: string;
  linkUrl?: string;
}

export interface MbaInternationalYearGroup {
  year: string;
  items: MbaInternationalProgramItem[];
}

export interface MbaInternationalRelationsData {
  title: string;
  yearGroups: MbaInternationalYearGroup[];
  coordinator?: MbaCoordinatorContact;
}

export interface MbaBestPracticeSection {
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  links?: { title: string; url: string }[];
}

export interface MbaBestPracticesData {
  title: string;
  overview: string;
  sections: MbaBestPracticeSection[];
}

export interface DepartmentMoreData {
  subTabs: DepartmentMoreSubTab[];
  mentorMentee?: MentorMenteeGroup[];
  minor?: MinorDegreeData;
  interdisciplinaryProjects?: InterdisciplinaryProjectGroup[];
  doctoral?: DoctoralData;
  feedback?: MoreDocumentGroup;
  innovativeTeaching?: MoreDocumentGroup;
  studentProjects?: MoreDocumentGroup;
  obe?: ObeData;
  surveys?: ObeSurveyCategory[];
  labPdfUrl?: string;
  civilNotes?: CivilNotesData;
  courseAttainment?: MoreDocumentItem[];
  alumniEvents?: MoreDocumentGroup[];
  stockRegisterPdfUrl?: string;
  budgetPdfUrl?: string;
  newsletterGroup?: MoreDocumentGroup;
  professionalActivities?: { description: string; reportUrl: string }[];
  committees?: MoreDocumentGroup;
  researchGroup?: MoreDocumentGroup;
  placementsGroup?: MoreDocumentGroup;
  ruralImmersion?: {
    videos?: { title: string; url: string; isDropbox?: boolean; isSharePoint?: boolean }[];
    reports?: MoreDocumentItem[];
  };
  internationalRelations?: MoreDocumentGroup;
  bestPractices?: MoreDocumentGroup;
  industrialVisits?: MoreDocumentGroup;
  celebrations?: MoreDocumentGroup;
  internships?: MoreDocumentGroup;
  caseStudiesPdfUrl?: string;
  galleryPdfUrl?: string;
  mbaAlumni?: MbaAlumniData;
  mbaRuralImmersion?: MbaRuralImmersionData;
  mbaInternationalRelations?: MbaInternationalRelationsData;
  mbaBestPractices?: MbaBestPracticesData;
  mous?: MoreDocumentGroup;
  nbaAccreditation?: MoreDocumentGroup;
  departmentBudgetGroup?: MoreDocumentGroup;
  timetablesGroup?: MoreDocumentGroup;
  researchProjects?: {
    overview: string;
    sections: {
      academicYear: string;
      agency?: string;
      totalAmount?: string;
      headers: string[];
      rows: Record<string, string>[];
    }[];
  };
}

export interface UnderGraduateTimeTableItem {
  title: string;
  pdfUrl: string;
  academicYear?: string;
  category?: string;
}

export interface UnderGraduateTimeTableGroup {
  groupTitle: string;
  items: UnderGraduateTimeTableItem[];
}

export interface SyllabusRow {
  sno: string;
  name: string;
  type: string;
  credits: string;
}

export interface SyllabusTable {
  title: string;
  headers: string[];
  rows: SyllabusRow[];
}

export interface UnderGraduateSection {
  title: string;
  description?: string;
  points?: string[];
}

export interface UnderGraduateData {
  programTitle: string;
  programOverview: string;
  sections?: UnderGraduateSection[];
  syllabusTables?: SyllabusTable[];
  subTabs?: { id: string; label: string }[];
  timeTables?: UnderGraduateTimeTableGroup[];
}

export interface PostGraduateData {
  programTitle: string;
  programOverview?: string;
  subTabs?: { id: string; label: string; externalUrl?: string; directPdf?: boolean }[];
  syllabusTables?: SyllabusTable[];
  obe?: {
    overview: string;
    peos: { id: string; description: string }[];
    posR22R24: { id: string; title: string; description: string }[];
    posR20: { id: string; title: string; description: string }[];
  };
  timetables?: { title: string; url: string; academicYear?: string }[];
  academicsOverview?: { title: string; paragraphs: string[] };
}

// Helper to get dept image
const deptImg = (key: string) => `${BASE}departments/${key}.jpg`;

export const departmentsData: Record<string, DepartmentData> = {
  cse: {
    key: "cse",
    name: "Computer Science & Engineering",
    shortName: "CSE",
    established: "1998",
    bannerImage: deptImg("cse"),
    about: "The Department of Computer Science & Engineering was established in 1998 and has been playing a vital role in producing value-based professionals. The department offers 4-year undergraduate program and 2-year postgraduate program to cater the ever-challenging needs of technical excellence in the emerging areas of Computer Science & Engineering. The course is designed in a flexible and structured way to meet the evolving needs of the IT industry. The CSE department has eminent faculty  with rich academic and industry exposure who have pursued Masters/Ph.D. Degree from prestigious institutions like NITs, IITs, and Central Universities within India and abroad. Many research activities in the domain of Artificial Intelligence (AI) and Machine Learning (ML) are under progress. The department has good interactions and MoUs with leading Industries for technology domain Training & Development.\n\nThe Department regularly organizes Symposia, Exhibitions, Conferences, Seminars and Workshops for students , Faculty and to  Research Scholars who belong to various Technical Educational Institutions, and Industries all over India.\nCSE students got placement offers in various top MNCs like TCS, Infosys, IBM, Tech Mahindra, Accenture, Mind Tree etc., with a package  of more than 4.5 Lakhs to 24 LPA. The department also offers training in certification programs and encourages students in self-learning with MooCs such as NPTEL, Microsoft, Coursera, edX, etc. The students can become the members of CSI, IEEE, ISTE, ACM, etc and can participate in various activities through these professional bodies.\n\nThe Department is committed to encourage students/researchers to carry out innovative research in the field of Computer Science & Engineering, keeping excellence in focus and deliver quality services to match the needs of the technical education system, industry and society. The research outcomes are presented/published in National / International Conferences / Journals.\n\nThe Department is accredited by NBA (National Board of Accreditation) of All India Council for Technical Education (AICTE), New Delhi.",
    vision: "To advance Computer Science & Engineering through excellence in education, research, innovation, and community engagement by creating knowledge, developing globally competent professionals, and delivering sustainable technological solutions for the benefit of society.",
    mission: [
      "To provide a dynamic and outcome-based learning environment through a contemporary curriculum, experiential learning, state-of-the-art infrastructure, and competent faculty that nurtures strong foundations, critical thinking, and lifelong learning in Computer Science and Engineering.",
      "To foster research, innovation, interdisciplinary collaboration, and entrepreneurship by promoting knowledge creation, emerging technologies, industry partnerships, consultancy, and doctoral research to address contemporary technological and societal challenges.",
      "To nurture ethical, socially responsible, and globally competent professionals with leadership, communication, and entrepreneurial skills who contribute sustainable technological solutions for the advancement of society."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. M. Sreedevi", designation: "Professor & Head", qualification: "Ph.D. (S V University)", image: "https://mits.ac.in/public/uploads/faculty/Dr. M. Sreedavi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/140" },
    achievements: { consultancyAmount: "₹25+ Lakhs", researchProjects: "15+", patents: "12+", publications: "200+" },
    teachingApproach: {
      description: "The department follows an outcome-based education (OBE) framework integrated with experiential learning methodologies.",
      points: ["Project-based learning with industry problems", "NPTEL, Coursera & edX integrated MOOCs", "Hackathons and coding competitions", "Industry mentorship programs", "IBM, Microsoft, Accenture certification tracks"]
    },
    courses: ["Computer Science & Engineering", "Computer Science and Engineering"],
    contactInfo: { email: "csehod@mits.ac.in", phone: "+91-9160020784; 8571-280255; 280706" },
    faculty: [
      /*
{
        name: "Dr. M. Sreedevi",
        designation: "Professor &amp; Head",
        qualification: "Ph.D. (S V University)",
        email: "drmsreedevi@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. M. Sreedavi.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/140"
      },
      {
        name: "Dr. R. Nidhya",
        designation: "Professor",
        qualification: "Ph.D. (Anna University)",
        email: "drrnidhya@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. Nidhya.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/83"
      },
      {
        name: "Dr. G. Arun Kumar",
        designation: "Assoc. Professor",
        qualification: "Ph.D. (Anna University)",
        email: "drgarunkumar@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. G. Arun Kumar.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/84"
      },
      {
        name: "Dr. R. Sudhakar",
        designation: "Assoc. Professor",
        qualification: "Ph.D. (Anna University)",
        email: "drrsudhakar@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Sudhakar.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/86"
      },
      {
        name: "Dr. P. Kavitha",
        designation: "Assoc. Professor",
        qualification: "Ph.D. (Hindustan Institute of Technology and Science)",
        email: "drpkavitha@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. P. Kavitha - CSE.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1129"
      },
      {
        name: "Dr. N. Krishnaiah",
        designation: "Assoc. Professor",
        qualification: "Ph.D. (JNTUK, Kakinada)",
        email: "drnkrishnaiah@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Krishnaiah.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1093"
      },
      {
        name: "Dr. D. J. Ashpin Pabi",
        designation: "Assoc. Professor",
        qualification: "Ph.D. (Annamalai University)",
        email: "drdjashpinpabi@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. D. J. Ashpin Pabi.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/90"
      },
      {
        name: "Dr. Thanikaivel. B",
        designation: "Sr. Asst. Professor",
        qualification: "Ph.D. (Anna University)",
        email: "drthanikaivelb@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/thani.jpg",
        profileUrl: "https://mits.ac.in/facultyprofile/749"
      },
      {
        name: "Dr. K. Sree Divya",
        designation: "Asst. Professor",
        qualification: "Ph.D. (SPMVV, Tirupati)",
        email: "drksreedivya@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/DSC_7933.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/146"
      },
      {
        name: "Dr. G. Sreenivasulu",
        designation: "Asst. Professor",
        qualification: "Ph.D. (Bharathiar University)",
        email: "drgsreenivasulu@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/DSC_5445.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/102"
      },
      {
        name: "Dr. Kuraku Nirmala",
        designation: "Asst. Professor",
        qualification: "Ph.D. (Puducherry Technological University)",
        email: "drkurakunirmala@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/DSC_7299.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/635"
      },
      {
        name: "Dr. Dinesh Singh Dhakar",
        designation: "Asst. Professor",
        qualification: "Ph.D. (Jaipur National University)",
        email: "drdineshsinghdhakar@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. Dinesh Singh Dhakar.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1125"
      },
      {
        name: "Dr. Senthil Kumar. K",
        designation: "Asst. Professor",
        qualification: "Ph.D. (Anna University)",
        email: "drsenthilkumark@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. Senthil Kumar. K.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/679"
      },
      {
        name: "Dr. Prasath. B",
        designation: "Asst. Professor",
        qualification: "Ph.D. (Anna University)",
        email: "drprasathb@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. Prasath. B.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/690"
      },
      {
        name: "Dr. Lakshmana Rao. N",
        designation: "Asst. Professor",
        qualification: "Ph.D. (University of Technology, Jaipur)",
        email: "drlakshmanaraon@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. Lakshmana Rao. N - CSE.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1118"
      },
      {
        name: "Mr. Nitin B. Raut",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (Amrita Vishwa Vidyapeetham)",
        email: "mrnitinbraut@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. Nitin B. Raut.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/747"
      },
      {
        name: "Ms. S. Sowmyadevi",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D.) (SRM University)",
        email: "msssowmyadevi@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Ms. S. Sowmyadevi.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/447"
      },
      {
        name: "Mr. K. Sathish",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (Annamalai University)",
        email: "mrksathish@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/DSC_7307.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/114"
      },
      {
        name: "Mrs. M. Sri Lakshmi Preethi",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D) (Presidency University)",
        email: "mrsmsrilakshmipreethi@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mrs. M. Sri Lakshmi Preethi.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/562"
      },
      {
        name: "Mr. Ch. Hemanand",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (Andhra University )",
        email: "mrchhemanand@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/DSC_7289.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/468"
      },
      {
        name: "Mr. E. Rajesh",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D) (JNTU, Kakinada)",
        email: "mrerajesh@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. E. Rajesh.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/576"
      },
      {
        name: "Mr. Aleemullakhan Pathan",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D) (NIT, Silchar)",
        email: "mraleemullakhanpathan@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. Aleemullakhan Pathan.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/101"
      },
      {
        name: "Mr. B. Galeebathullah",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D) (Anna University)",
        email: "mrbgaleebathullah@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/DSC_7319.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/97"
      },
      {
        name: "Mrs. G. B. Renuka",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D) (SRM University)",
        email: "mrsgbrenuka@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mrs. G. B. Renuka.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/120"
      },
      {
        name: "Mrs. Sangeetha.M",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D) (St. Peter&#039;s Institute Of Higher Education and Research)",
        email: "mrssangeetham@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mrs. Sangeetha.M.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/471"
      },
      {
        name: "Mrs. M. Bommy",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D.) (NIT, Puducherry)",
        email: "mrsmbommy@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/DSC_7284.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/100"
      },
      {
        name: "Mrs. Deepthi. P",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (Amrita Vishwa Vidyapeetham)",
        email: "mrsdeepthip@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Deepthi - CSE.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/535"
      },
      {
        name: "Mr. Anandaraj B",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (SRM Institute of Science &amp; Technology)",
        email: "mranandarajb@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. Anandaraj B.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/104"
      },
      {
        name: "Mrs. S. Varshadevi",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D.) (Dr. M.G.R. Educational and Research Institute)",
        email: "mrssvarshadevi@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mrs. S. Varshadevi.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/746"
      },
      {
        name: "Mrs. P. Jayaselvi",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (SRM Institute of Science and Technology)",
        email: "mrspjayaselvi@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mrs. P. Jayaselvi.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/589"
      },
      {
        name: "Mr.  L.  Arul Jaya Prakash",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D.) (Anna University)",
        email: "mrlaruljayaprakash@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/DSC_7919.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/590"
      },
      {
        name: "Mrs. R. Kavi Priya",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D.) (SRM Institute of Science And Technology)",
        email: "mrsrkavipriya@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mrs. R. Kavi Priya.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/579"
      },
      {
        name: "Mr. Vijayaganth. R",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D.) (Puducherry Technological University)",
        email: "mrvijayaganthr@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/DSC_7302.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/617"
      },
      {
        name: "Mrs. G. Vasundara Devi",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (NIT, Puducherry)",
        email: "mrsgvasundaradevi@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mrs. G. Vasundara Devi.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/110"
      },
      {
        name: "Mr. A. Kumar",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (NIT, Puducherry)",
        email: "mrakumar@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/DSC_7323.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/456"
      },
      {
        name: "Mrs. V. Geetha",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (NIT, Mizoram)",
        email: "mrsvgeetha@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/V. Geetha.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/117"
      },
      {
        name: "Mr. T. Murali",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D.) (SRM Institute of Science And Technology)",
        email: "mrtmurali@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Murali CSE.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/689"
      },
      {
        name: "Mr. Ramalingam. D",
        designation: "Asst. Professor",
        qualification: "M.E.",
        email: "mrramalingamd@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. Ramalingam. D.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/651"
      },
      {
        name: "Mr. Thangarasan T",
        designation: "Asst. Professor",
        qualification: "M.E.",
        email: "mrthangarasant@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/DSC_7309.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/103"
      },
      {
        name: "Mr. D. M. Abhinay Kanth",
        designation: "Asst. Professor",
        qualification: "M.Tech.",
        email: "mrdmabhinaykanth@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. D. M. Abhinay Kanth.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/109"
      },
      {
        name: "Mr. K H Shabbeer Basha",
        designation: "Asst. Professor",
        qualification: "M.Tech.",
        email: "mrkhshabbeerbasha@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/shaber.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/115"
      },
      {
        name: "Mr. K. Manju Preetham",
        designation: "Asst. Professor",
        qualification: "M.Tech.",
        email: "mrkmanjupreetham@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/9c0fd543b92b2b9fb41db5a88b0eb090.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/118"
      },
      {
        name: "Ms. Gangarapu Vandana",
        designation: "Asst. Professor",
        qualification: "M.Tech.",
        email: "msgangarapuvandana@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Ms. Gangarapu Vandana.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1117"
      }
      */
    ],
    detailedAchievements: [
      /*
{ title: "NBA Accreditation received for B.Tech CSE program", description: "Accredited by the National Board of Accreditation (NBA) under AICTE", type: "faculty" },
      { title: "CSE students placed in TCS, Infosys, IBM, Tech Mahindra", description: "Packages ranging from 4.5 LPA to 24 LPA in top MNC companies", type: "student" },
      { title: "200+ Research Publications", description: "Faculty have published in National/International Journals and Conferences", type: "faculty" },
      { title: "12+ Patents Filed", description: "Multiple patents filed in areas of AI, ML, and IoT", type: "faculty" },
      { title: "NPTEL Star Performers", description: "Students consistently achieving Gold and Silver in NPTEL certifications", type: "student" },
      { title: "Hackathon Winners", description: "Students won multiple state and national level hackathons", type: "student" },
      */
    ],
    facilities: [
      { name: "Programming Lab", description: "Equipped with high-end systems for C, C++, Java, Python programming", equipment: ["60 HP Workstations", "Intel i7 Processors", "16GB RAM each"] },
      { name: "AI & Machine Learning Lab", description: "Dedicated GPU-powered systems for AI/ML research and training", equipment: ["NVIDIA GPU Workstations", "TensorFlow/PyTorch setup", "Jupyter Notebook servers"] },
      { name: "Networking Lab", description: "Cisco networking equipment for hands-on training", equipment: ["Cisco Routers & Switches", "Network simulation tools", "Wireshark analysis stations"] },
      { name: "Project Development Lab", description: "Open lab for final year and mini project development", equipment: ["Cloud-connected workstations", "Version control servers", "Collaborative tools"] },
      { name: "Database Lab", description: "Oracle and MySQL database training infrastructure", equipment: ["Oracle 19c Server", "MySQL clusters", "MongoDB instances"] },
    ],
    patents: [
      /*
{ title: "Smart IoT-based Health Monitoring System", status: "Published", year: "2023" },
      { title: "AI-Driven Crop Disease Detection using Deep Learning", status: "Filed", year: "2023" },
      { title: "Blockchain-Based Secure Voting System", status: "Published", year: "2022" },
      { title: "Intelligent Traffic Management Using Computer Vision", status: "Filed", year: "2024" },
      { title: "Natural Language Processing for Regional Languages", status: "Granted", year: "2022" },
      { title: "Cloud-Based Smart Classroom Management System", status: "Filed", year: "2023" },
      */
    ],
    publications: [
      /*
{ title: "Deep Learning Approaches for Medical Image Analysis", type: "journal", year: "2024", authors: "Dr. K. Subramanyam et al." },
      { title: "Sentiment Analysis of Social Media Using NLP", type: "journal", year: "2023", authors: "Dr. B. Srinivasa Rao et al." },
      { title: "IoT-based Smart Agriculture System", type: "conference", year: "2023", authors: "Dr. M. Sreenivasulu et al." },
      { title: "Cybersecurity Framework for Cloud Computing", type: "journal", year: "2024", authors: "Dr. N. Venkateswara Rao et al." },
      { title: "Machine Learning for Predictive Maintenance", type: "conference", year: "2022", authors: "Dr. S. Nagaprasad et al." },
      { title: "Edge Computing in Healthcare Applications", type: "journal", year: "2023", authors: "Dr. P. Rajesh et al." },
      */
    ],
    consultancy: [
      { title: "Web Application Development", agency: "Local Industries", amount: "₹3 Lakhs" },
      { title: "Data Analytics Training Program", agency: "AP State Government", amount: "₹5 Lakhs" },
      { title: "Network Infrastructure Setup", agency: "Regional Businesses", amount: "₹2 Lakhs" },
    ],
    events: [
      /*
{ title: "National Level Technical Symposium GMOCS-2K26", date: "2nd April 2026", description: "A One Day National Level Technical Symposium GMOCS-2K26 organized by Department of Computer Science & Engineering." },
      { title: "Seminar on Engineering the Human–Machine Future", date: "16th March 2026", description: "Seminar on 'Engineering the Human–Machine Future: Converging CPS, AI, and Human Intelligence for Industry 5.0' under AICTE - DPS." },
      { title: "Industrial Visit to National Atmospheric Research Laboratory (NARL)", date: "13th March 2026", description: "Industrial Visit to National Atmospheric Research Laboratory (NARL), Gadanki, Pakala, Andhra Pradesh organized by Department." },
      { title: "AWS Global Certificate Training Programme", date: "4th to 18th March 2026", description: "15 days Skill Development Program on AWS – Amazon Web Services – Global Certificate Training." },
      { title: "Professional Development Programme Series-I", date: "20th February 2026", description: "Series-I: Transforming Students into Industry Professionals organized by Department." },
      { title: "Behavioural Competencies Workshop", date: "13th February 2026", description: "Series-I: Behavioural Competencies and Professional Skills for Career Success." },
      { title: "Early Preparation Strategies for Placement Excellence", date: "12th February 2026", description: "Series-I: Early Preparation Strategies for Placement Excellence organized by Department." },
      { title: "One Week International Faculty Development Programme", date: "December 2025", description: "International Faculty Development Programme organized by Department of Computer Science and Engineering." },
      { title: "Expert Talk on Latest Technologies in Computing", date: "October 2025", description: "Expert Talk series on emerging technologies and industry trends organized by Department." },
      { title: "Hackathon Event", date: "September 2025", description: "Annual hackathon event for student innovation and skill development." },
      */
    ],
    mous: [
      /*
{ name: "Infosys", purpose: "Campus Connect Program & Training", year: "2020" },
      { name: "IBM", purpose: "Center of Excellence in AI", year: "2021" },
      { name: "Microsoft", purpose: "Azure Academy Partner", year: "2022" },
      { name: "TCS", purpose: "TCS iON Digital Learning Hub", year: "2019" },
      { name: "Accenture", purpose: "Industry Readiness Training", year: "2021" },
      { name: "Tech Mahindra", purpose: "Skill Development Partnership", year: "2022" },
      */
    ],
    placement: {
      /*
percentage: "98%",
      avgPackage: "₹6.5 LPA",
      highestPackage: "₹24 LPA",
      recruiters: ["TCS", "Infosys", "IBM", "Tech Mahindra", "Accenture", "Mindtree", "Wipro", "Cognizant", "HCL", "Capgemini"]
      */
      percentage: "N/A", avgPackage: "N/A", highestPackage: "N/A", recruiters: [],
    },
    studentProjects: [
      /*
{ title: "AI-Powered Chatbot for Student Services", students: "Team of 4 - Final Year", description: "NLP-based chatbot for answering student queries about academics and placements" },
      { title: "Smart Attendance System using Face Recognition", students: "Team of 3 - Final Year", description: "OpenCV and deep learning based automated attendance system" },
      { title: "E-Commerce Platform with Recommendation Engine", students: "Team of 4 - Final Year", description: "Full-stack web application with ML-based product recommendations" },
      { title: "IoT-based Weather Monitoring Station", students: "Team of 3 - Third Year", description: "Arduino and sensor-based real-time weather data collection system" },
      */
    ],
    subjects: [
      /*
{ name: "Programming for Problem Solving (C)", semester: 1, type: "core" },
      { name: "Data Structures", semester: 2, type: "core" },
      { name: "Object Oriented Programming (Java)", semester: 3, type: "core" },
      { name: "Database Management Systems", semester: 3, type: "core" },
      { name: "Computer Organization & Architecture", semester: 3, type: "core" },
      { name: "Operating Systems", semester: 4, type: "core" },
      { name: "Design & Analysis of Algorithms", semester: 4, type: "core" },
      { name: "Computer Networks", semester: 5, type: "core" },
      { name: "Software Engineering", semester: 5, type: "core" },
      { name: "Compiler Design", semester: 6, type: "core" },
      { name: "Machine Learning", semester: 6, type: "core" },
      { name: "Artificial Intelligence", semester: 7, type: "core" },
      { name: "Cloud Computing", semester: 7, type: "elective" },
      { name: "Cyber Security", semester: 7, type: "elective" },
      { name: "Big Data Analytics", semester: 7, type: "elective" },
      { name: "Deep Learning", semester: 8, type: "elective" },
      { name: "Internet of Things", semester: 8, type: "elective" },
      { name: "Blockchain Technology", semester: 8, type: "elective" },
      { name: "Aptitude & Reasoning", semester: 3, type: "professional-skill" },
      { name: "Communication Skills", semester: 4, type: "professional-skill" },
      { name: "IBM Full Stack Development", semester: 5, type: "optional-training" },
      { name: "Accenture Developer Program", semester: 6, type: "optional-training" },
      { name: "AWS Cloud Practitioner", semester: 7, type: "optional-training" },
      */
    ],
    documents: [
      { title: "Faculty List 2024-25", url: "https://mits.ac.in/assets/pdf/cse/CSE%20CAY%202024-25.pdf" },
      { title: "Placement Statistics 2023-24", url: "https://mits.ac.in/assets/pdf/cse/AY%202023-24%20Placement%20Statistics.pdf" },
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/CSE%20Stock%20Register.pdf" },
      { title: "BoS 2024-25", url: "https://www.mits.ac.in/public/uploads/departments/b3eb1bb0eeb2ed4149b1683e2e47d27d.pdf" },
      { title: "BoS DTBU 2025-26", url: "https://www.mits.ac.in/public/uploads/departments/ff4a954407b62475ffaf4933ca3f9caf.pdf" },
      { title: "BoS 2025-26", url: "https://www.mits.ac.in/public/uploads/departments/ace641c64a92a3b2249bf63ea83894eb.pdf" },
    ],
  },

  cst: {
    key: "cst",
    name: "Computer Science & Technology",
    shortName: "CST",
    established: "2018",
    bannerImage: deptImg("cse"),
    about: "The Department of Computer Science and Technology (CST) was established in 2018 and plays a vital role in producing value-based professionals to meet the ever-challenging demands of technical excellence in emerging areas of CST. The department offers one undergraduate (UG) program with an initial intake of 60 students, which was increased to 180 seats in 2019. The Department of CST has adequate infrastructure to deliver high-quality education and is fully equipped to meet the contemporary needs of the industry. High-quality education is supported by well-qualified and experienced faculty members with rich academic and industry exposure, many of whom hold Master's or Ph.D. degrees from prestigious institutions like NITs, IITs, and Central Universities in India and abroad. The Department of CST maintains strong interactions and MoUs with leading industries for training and development in technology domains. It regularly organizes symposia, exhibitions, conferences, seminars, and workshops for students, faculty from various technical educational institutions, research scholars, and industry professionals across India. Our students have received placement offers from top MNCs such as TCS, Infosys, IBM, Tech Mahindra, Accenture, and Mindtree. The department also offers training in certification programs and encourages self-learning through platforms like NPTEL, Microsoft, Coursera, and edX. Research activities and outcomes are presented and published in national and international conferences and journals. Students can become members of professional bodies such as CSI, IEEE, ISTE, and ACM, participating in various activities through these organizations. The department is committed to encouraging students and researchers to conduct innovative research in Computer Science & Engineering, focusing on excellence and providing quality services that meet the needs of technical education, industry, and society. Students of the CST department are motivated to be innovative thinkers while maintaining a strong foundation in core Computer Science knowledge. The department is also accredited by the NBA (National Board of Accreditation) under the All India Council for Technical Education (AICTE), New Delhi.",
    vision: "To bring forth globally competent engineers with societal consciousness, who thrive in academics and research in Computer Science and Technology.",
    mission: [
      "M1: To deliver technical education of the highest quality by improving the curriculum and using effective pedagogical techniques by qualified faculty.",
      "M2: To foster interaction between Industry and academia, to improve students' abilities in research, innovation, and entrepreneurship.",
      "M3: To prepare the students to become professionally competent and intellectually adept by imparting required Skills to mitigate the societal problems."
    ],
    nbaAccredited: true,
    hod: {
      name: "Dr. K. Dinesh",
      designation: "Assoc. Professor & Head",
      qualification: "Ph.D.",
      image: "https://engageai.mits.ac.in/mitsfaculty/api/v1/uploads/profile/profilePhoto-recent_photo-1787634982890-519201313.jpeg",
      profileUrl: "https://mits.ac.in/department/4"
    },
    achievements: {
      consultancyAmount: "₹10+ Lakhs",
      researchProjects: "8+",
      patents: "6+",
      publications: "90+"
    },
    teachingApproach: {
      description: "Project-based and experiential learning through state-of-the-art programming laboratories and hackathons.",
      points: [
        "Full-stack software engineering projects",
        "Cloud and distributed systems implementation",
        "Algorithmic problem solving and coding challenges",
        "Industry-aligned capstone projects"
      ]
    },
    courses: ["B.Tech - Computer Science & Technology"],
    contactInfo: {
      email: "cst-hod@mits.ac.in",
      phone: "+91-9100973281"
    },
    faculty: [
      {
        name: "Dr. K. Dinesh",
        designation: "Assoc. Professor & Head",
        qualification: "Ph.D.",
        image: "https://engageai.mits.ac.in/mitsfaculty/api/v1/uploads/profile/profilePhoto-recent_photo-1787634982890-519201313.jpeg",
        email: "cst-hod@mits.ac.in",
        profileUrl: "https://mits.ac.in/department/4"
      }
    ],
    detailedAchievements: [],
    facilities: [
      { name: "Advanced Computing Lab", description: "Modern computing systems for algorithms and software engineering." },
      { name: "Software Development Lab", description: "IDE and full-stack development workstations." },
      { name: "Database & Cloud Lab", description: "High-performance servers for distributed databases and virtualization." }
    ],
    patents: [],
    publications: [],
    consultancy: [],
    events: [],
    mous: [],
    placement: {
      percentage: "93%",
      avgPackage: "₹6.5 LPA",
      highestPackage: "₹18 LPA",
      recruiters: ["Cognizant", "TCS", "Wipro", "Infosys", "Accenture"]
    },
    studentProjects: [],
    subjects: [],
    documents: [
      { title: "BoS — Computer Science & Technology", url: "https://mits.ac.in/assets/pdf/admin/BOS-CST.pdf" },
      { title: "NBA — UG CST (2024–27)", url: "https://mits.ac.in/public/uploads/affiliations/NBA%20-%20CST-%20confirmation%20-till%2030.6.2027.pdf" },
      { title: "Intellectual Property Rights 2024", url: "https://mits.ac.in/assets/pdf/cst/Intellectual%20Property%20Rights-2024.pdf" },
      { title: "Departmental Level Hackathon CST", url: "https://mits.ac.in/assets/pdf/cst/Departmental%20Level%20Hackathon-CST.pdf" },
      { title: "Internal Project Expo 2024", url: "https://mits.ac.in/assets/pdf/cst/Internal%20Project%20Expo-2024.pdf" }
    ]
  },

  ce: {
    key: "ce",
    name: "Civil Engineering",
    shortName: "CE",
    established: "2014",
    bannerImage: deptImg("civil"),
    about: "The Department of Civil Engineering was established in the year 2014. The Department offers 4-year B.Tech programme with a deep insight into the discipline which enables the promising engineers to acquire the skills required to succeed both individually as well as in Industry. Keeping in view of the technological advancement, the department is fortified by the most qualified and experienced faculty. The department is also well equipped with the modern laboratories.\n\nThe B.Tech. Programme under Department of Civil Engineering was accredited by the National Board of Accreditation (NBA) of All India Council for Technical Education (AICTE).",
    vision: "To grow as a globally recognized Civil Engineering Department through cutting-edge education and research to bring sustainable cultural, economic and social growth in the nation.",
    mission: [
      "To provide modern educational tools and techniques to the students in order to enrich them to solve complex civil engineering problems.",
      "To develop sustainable technologies and solutions for various organizations involved in developmental activities through consultancy and research services.",
      "To foster the socio-economic and cultural upliftment in the region through formal and informal education."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. Vijayakumar Natesan", designation: "Asst. Professor & Head", qualification: "Ph.D. (IIT, Hyderabad)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Vijayakumar Natesan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/7" },
    achievements: { consultancyAmount: "₹10+ Lakhs", researchProjects: "8+", patents: "5+", publications: "100+" },
    goals: [
      "All the engineering departments set very high aims for graduate teaching. Our goal is to shape your professional future as engineers, to be creative and innovative and to excel in your chosen field.",
      "Our degrees will also put you on the right career path in sectors such as manufacturing, engineering consultancies, R&D or investment banking.",
      "An impressive proportion of graduates also go on to further education."
    ],
    teachingApproach: {
      description: "All the engineering departments set very high aims for graduate teaching. Our goal is to shape your professional future as engineers, to be creative and innovative and to excel in your chosen field. Our degrees will also put you on the right career path in sectors such as manufacturing, engineering consultancies, R&D or investment banking. An impressive proportion of graduates also go on to further education.",
      points: [
        "To shape professional future as creative and innovative engineers",
        "To provide right career pathways in engineering consultancies, manufacturing, R&D and banking",
        "To support higher education and postgraduate research progression"
      ]
    },
    courses: ["B.Tech in Civil Engineering", "M.Tech in Structural Engineering"],
    contactInfo: { email: "civilhod@mits.ac.in", phone: "+91-9100973371; 8571-280255; 280706" },
    faculty: [
      /*
{ name: "Dr. Dipankar Roy", designation: "Professor & Dean - School of Engineering", qualification: "Ph.D. (University of Pisa, Italy)", image: "https://mits.ac.in/public/uploads/faculty/Deepankar Roy.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1" },
      { name: "Dr. Sudheer Kumar Yantrapalli", designation: "Assoc. Professor", qualification: "Ph.D. (NIT, Warangal)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sudheer Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/5" },
      { name: "Dr. Ashok Julaganti", designation: "Sr. Asst. Professor", qualification: "Ph.D. (IIT, Guwahati)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Ashok.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1131" },
      { name: "Dr. Vijayakumar Natesan", designation: "Asst. Professor & Head", qualification: "Ph.D. (IIT, Hyderabad)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Vijayakumar Natesan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/7" },
      { name: "Dr. T. Venkatesh Varma", designation: "Asst. Professor", qualification: "Ph.D. (IIT, Indore)", image: "https://mits.ac.in/public/uploads/faculty/Venkatesh Verma.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1067" },
      { name: "Dr. Imran Kuttagola", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Karnataka)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Imran Kuttagola.JPG", profileUrl: "https://mits.ac.in/facultyprofile/680" },
      { name: "Mrs. Kandukuri Anitha", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Mohan Babu University)", image: "https://mits.ac.in/public/uploads/faculty/Mrs.Anitha.png", profileUrl: "https://mits.ac.in/facultyprofile/13" },
      { name: "Mr. P. Sabarishkumar", designation: "Asst. Professor", qualification: "M.E. (Institute of Road & Transport Technology, Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. P. Sabarishkumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/517" },
      */
    ],
    detailedAchievements: [
      /*
{ title: "Civil Faculty Achievements 2024-25", description: "Department maintains year-wise faculty achievement records in official tab.", type: "faculty" },
      { title: "Civil Faculty Achievements 2023-24", description: "Faculty achievement updates are published annually.", type: "faculty" },
      { title: "Civil Faculty Achievements 2022-23", description: "Official year-wise achievements are available on department page.", type: "faculty" },
      */
    ],
    facilities: [
      { name: "Structural Engineering Lab", description: "Testing of concrete, steel, and composite structures", equipment: ["Universal Testing Machine", "Compression Testing Machine"] },
      { name: "Geotechnical Engineering Lab", description: "Soil testing and foundation analysis", equipment: ["Triaxial Testing", "Permeability apparatus"] },
      { name: "Surveying Lab", description: "Total station and GPS-based surveying", equipment: ["Total Station", "Auto Level", "GPS equipment"] },
      { name: "Environmental Engineering Lab", description: "Water and wastewater quality testing", equipment: ["BOD incubator", "Turbidity meter", "pH meters"] },
    ],
    patents: [
      /*
{ title: "Eco-friendly Concrete Mix using Industrial Waste", status: "Filed", year: "2023" },
      { title: "Smart Water Distribution Monitoring System", status: "Published", year: "2022" },
      */
    ],
    publications: [
      /*
{ title: "Faculty Publications 2024-2025", type: "journal", year: "2024-25" },
      { title: "Faculty Publications 2023-2024", type: "journal", year: "2023-24" },
      { title: "Faculty Publications 2022-2023", type: "journal", year: "2022-23" },
      */
    ],
    consultancy: [
      { title: "Soil Testing for Construction Projects", agency: "Local Builders", amount: "₹3 Lakhs" },
      { title: "Structural Design Review", agency: "AP Government", amount: "₹5 Lakhs" },
    ],
    events: [
      /*
{ title: "Alumni Guest Lecture on Higher Education Abroad", date: "3rd February 2024", description: "'The Path of Higher Education Abroad' organized by Department in association with Builders Club." },
      { title: "Quality Control & Management Workshop", date: "2nd February 2024", description: "'Understanding Quality control and Quality Management in Construction Activities' organized by Department." },
      { title: "National Pollution Control Day", date: "2nd December 2023", description: "Organized by Department of Civil Engineering in association with Institution Innovation Council." },
      { title: "World Soil Day Celebration", date: "5th December 2023", description: "Organized by Department in association with ASCE MITS Student Chapter." },
      { title: "Traffic Flow Models Seminar", date: "16th November 2023", description: "'Traffic Flow Models for Urban Roads Under Indian Traffic Condition' & Wastewater treatment topics organized by Department." },
      { title: "National Level Technical Symposium CITA'23", date: "26th April 2023", description: "National Level Student Symposium Civil Engineering Technical Augury organized by Department." },
      { title: "Industrial Visit to Chandragiri Fort & Kalyani Dam", date: "21st May 2023", description: "Industrial visit organized for students by Department of Civil Engineering." },
      { title: "Engineers' Day Celebration", date: "15th September 2022", description: "Organized by Department of Civil Engineering commemorating Sir M. Visvesvaraya." },
      { title: "Sustainable Construction Practices Workshop", date: "2023", description: "Workshop on sustainable and green building technologies organized by Department." },
      { title: "BIM Technology Seminar", date: "2023", description: "Building Information Modeling seminar organized for students and faculty." },
      */
    ],
    mous: [
      /*
{ name: "L&T Construction", purpose: "Industrial Training", year: "2021" },
      { name: "NHAI", purpose: "Highway Design Projects", year: "2022" },
      */
    ],
    placement: {
      /*
percentage: "80%", avgPackage: "₹4.5 LPA", highestPackage: "₹9 LPA", recruiters: ["L&T", "Shapoorji Pallonji", "NCC", "Ramky Group", "Megha Engineering"]
      */
      percentage: "N/A", avgPackage: "N/A", highestPackage: "N/A", recruiters: [],
    },
    studentProjects: [
      /*
{ title: "Green Concrete using Fly Ash", students: "Team of 4", description: "Sustainable concrete mix design using industrial waste" },
      { title: "Rainwater Harvesting System Design", students: "Team of 3", description: "Comprehensive design for campus rainwater collection" },
      */
    ],
    subjects: [
      /*
{ name: "Engineering Mechanics", semester: 1, type: "core" },
      { name: "Building Materials & Construction", semester: 2, type: "core" },
      { name: "Strength of Materials", semester: 3, type: "core" },
      { name: "Surveying", semester: 3, type: "core" },
      { name: "Fluid Mechanics", semester: 4, type: "core" },
      { name: "Structural Analysis", semester: 4, type: "core" },
      { name: "Geotechnical Engineering", semester: 5, type: "core" },
      { name: "Reinforced Concrete Structures", semester: 5, type: "core" },
      { name: "Transportation Engineering", semester: 6, type: "core" },
      { name: "Environmental Engineering", semester: 6, type: "core" },
      { name: "Steel Structures", semester: 7, type: "elective" },
      { name: "Foundation Engineering", semester: 7, type: "elective" },
      { name: "Estimation & Costing", semester: 7, type: "core" },
      */
    ],
    documents: [
      { title: "Faculty List 2024-25", url: "https://mits.ac.in/public/uploads/departments/34609776fc6d3d8390a9657b4aa23f5a.pdf" },
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/Civil%20Stock%20Register.pdf" },
      { title: "BoS 2024-25", url: "https://mits.ac.in/public/uploads/departments/5ebd8d1eccab5799909d40d4136d8f51.pdf" },
      { title: "BoS 2023-24", url: "https://mits.ac.in/public/uploads/departments/94cd2c24256628213ab83695f17dd91d.pdf" },
      { title: "DAB 2023-24", url: "https://mits.ac.in/public/uploads/departments/fb5e44d7665f44ca9232cc905fbad821.pdf" },
    ],
  },

  eee: {
    key: "eee",
    name: "Electrical and Electronics Engineering",
    shortName: "EEE",
    established: "1998",
    bannerImage: deptImg("eee"),
    about: "The Department of Electrical and Electronics Engineering was established in the year 1998 and has been playing a vital role in producing value-based professionals ever since. The department offers an undergraduate program in Electrical and Electronics Engineering with an intake of 60 to cater to the ever-challenging needs of technical excellence in all areas such as Power systems, Control Systems, Power Electronics, Digital Signal Processing, Robotics & Drones, and also in the emerging areas of electrical engineering such as Renewable Power Generation, Smart Grids, Electric & Hybrid Vehicles. The B.Tech. program under the department has been continuously accredited and re-accredited by the National Board of Accreditation (NBA) since 2013 and Under Tier-I in 2019. The most recent NBA accreditation, in 2022, was under TIER I and is accredited again in 2025 for the period 2025–28.\n\nThe Department conducts regular seminars, guest lectures, workshops and technical symposiums on latest technologies for the benefit of student and faculty community.\n\nThe College Academic Council (AC) and Board of Studies (BoS) of the department strive to provide quality education with the most advanced curriculum for both UG and PG programmes with a vision to provide quality education to the students and make them excel in the domain of Electrical and Electronics Engineering.\n\nWith research proficiency, deep sense of commitment and ethics, the Department has a thriving research program with externally funded projects. Faculty are also engaged in providing engineering consultancy for industrial entities. The research output in terms of quality journal publications and patents, has been steadily increasing in recent years. The students of the department benefit from this thriving R&D culture which provides them with an exposure to the state of the art research facilities and cutting-edge technologies to meet the industry requirements and challenges of society.",
    vision: "“To become a Department recognized for its ability to provide quality education to the students and make them excel in the domain of Electrical and Electronics Engineering, with research proficiency and ethics, to meet the challenges of society.”",
    mission: [
      "M1: To impart quality education and advancements in program of studies for producing engineers with scientific temperament and moral values in the field of Electrical and Electronics Engineering.",
      "M2: To create and develop research culture with deep sense of commitment, so as to enable the industries to adopt the research outputs.",
      "M3: To enhance the technical dexterity, so as to find the suitable solutions in their respective domain, for welfare of the society."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. Manavaalan Gunasekaran", designation: "Assoc. Professor & Head", qualification: "Ph.D. (IIT, Kanpur)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Manavaalan Gunasekaran.JPG", profileUrl: "https://mits.ac.in/facultyprofile/931" },
    achievements: { consultancyAmount: "₹8+ Lakhs", researchProjects: "6+", patents: "3+", publications: "80+" },
    teachingApproach: { description: "Hands-on approach with emphasis on renewable energy projects and smart grid technologies.", points: ["Power systems simulation labs", "Renewable energy installations", "Industry visits to power plants", "Smart grid research projects", "NPTEL certification courses"] },
    courses: ["Electrical and Electronics Engineering", "Electric Vehicle Technology"],
    contactInfo: { email: "hod_eee@mits.ac.in", phone: "+91-8571-280255" },
faculty: [
      /*
{ name: "Dr. C. Kamal Basha", designation: "Professor & Vice Principal", qualification: "Ph.D. (JNTUA, Anantapur)", image: "https://mits.ac.in/public/uploads/faculty/kamalbasha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/223" },
      { name: "Dr. A. V. Pavan Kumar", designation: "Professor & Assistant Dean", qualification: "Ph.D. (Birla Institute of Technology & Science, Pilani, Hyderabad Campus)", image: "https://mits.ac.in/public/uploads/faculty/Dr. A. V. Pavan Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/224" },
      { name: "Dr. Manavaalan Gunasekaran", designation: "Assoc. Professor & Head", qualification: "Ph.D. (Indian Institute of Technology, Kanpur)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Manavaalan Gunasekaran.JPG", profileUrl: "https://mits.ac.in/facultyprofile/931" },
      { name: "Dr. Somu Vijaya Bhaskar", designation: "Assoc. Professor", qualification: "Ph.D. (University of Florida, USA)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Somu Vijaya Bhaskar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/694" },
      { name: "Dr. K. Lakshmikhandan", designation: "Assoc. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Lakshmikhandan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/226" },
      { name: "Dr. T. S. Balaji Damodhar", designation: "Asst. Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Dr. T. S. Balaji Damodhar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/227" },
      { name: "Dr. Sarat Kumar Mishra", designation: "Asst. Professor", qualification: "Ph.D. (BIT., Mesra (Ranchi))", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sarat Kumar Mishra.JPG", profileUrl: "https://mits.ac.in/facultyprofile/713" },
      { name: "Dr. V. B. Thurai Raaj", designation: "Asst. Professor", qualification: "Ph.D. (Vignan Foundation for Science, Technology & Research)", image: "https://mits.ac.in/public/uploads/faculty/Thurai Raaj.JPG", profileUrl: "https://mits.ac.in/facultyprofile/230" },
      { name: "Dr. Vineet Kumar", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Hamirpur)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Vineet Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/597" },
      { name: "Dr. Satish Kumar Ramoji", designation: "Asst. Professor", qualification: "Ph.D. (NIT Silchar)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Satish Kumar Ramoji.JPG", profileUrl: "https://mits.ac.in/facultyprofile/625" },
      { name: "Dr. R. Saravana Kumar", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Puducherry)", image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Saravana Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/583" },
      { name: "Dr. Sovit Kumar Pradhan", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Silchar)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sovit Kumar Pradhan.png", profileUrl: "https://mits.ac.in/facultyprofile/703" },
      { name: "Dr. B. Karthick", designation: "Asst. Professor", qualification: "Ph.D. (Pondicherry Engineering College, Pondicherry University)", image: "https://mits.ac.in/public/uploads/faculty/karthik.jpg", profileUrl: "https://mits.ac.in/facultyprofile/206" },
      { name: "Mr. A. Karthik", designation: "Assistant Professor of Practice", qualification: "M.E. (Regional Engineering College, Tiruchirappalli)", image: "https://mits.ac.in/public/uploads/faculty/Mr. A. Karthik.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1097" },
      { name: "Mr. Sridhar. N", designation: "Asst. Professor", qualification: "Ph.D. (VIT university)", image: "https://mits.ac.in/public/uploads/faculty/Sridhar. N.JPG", profileUrl: "https://mits.ac.in/facultyprofile/232" },
      { name: "Mr. G. Mahammed Rafi", designation: "Asst. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. G. Mahammed Rafi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/205" },
      { name: "Mr. E. Sathiyanarayanan", designation: "Asst. Professor", qualification: "Ph.D. (Puducherry Technological University (PTU))", image: "https://mits.ac.in/public/uploads/faculty/Mr. E. Sathiyanarayanan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/210" },
      { name: "Mr. Ch Srinivas", designation: "Asst. Professor", qualification: "Ph.D. (Christ university)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Ch Srinivas.JPG", profileUrl: "https://mits.ac.in/facultyprofile/480" },
      { name: "Mr. Rajesh KS", designation: "Asst. Professor", qualification: "Ph.D. (JNTU, Kakinada)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Rajesh KS.JPG", profileUrl: "https://mits.ac.in/facultyprofile/238" },
      { name: "Mr. M. Venkatesh", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Mizoram)", image: "https://mits.ac.in/public/uploads/faculty/Venkatesh.JPG", profileUrl: "https://mits.ac.in/facultyprofile/425" },
      { name: "Mr. E. Raghu Babu", designation: "Asst. Professor", qualification: "M.Tech. (National Institute of Technology, Kurukshetra)", image: "https://mits.ac.in/public/uploads/faculty/Raghu Babu.JPG", profileUrl: "https://mits.ac.in/facultyprofile/484" },
      { name: "Mr. Ramesh Kumar R", designation: "Asst. Professor", qualification: "M.E. (College of Engineering, Guindy (CEG), Anna University)", image: "https://mits.ac.in/public/uploads/faculty/aravana Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/505" },
      */
    ],
    detailedAchievements: [
      /*
{ title: "Smart Grid Research Publications", description: "Published 80+ papers in reputed journals", type: "faculty" },
      { title: "Solar Energy Installation on Campus", description: "Designed and installed 50KW solar plant for campus use", type: "faculty" },
      { title: "Robotic Arm Design Competition Winners", description: "Students won state-level robotics competition", type: "student" },
      */
    ],
    facilities: [
      { name: "Power Electronics Lab", description: "Advanced power converter systems and drives", equipment: ["Inverters", "Converters", "Motor drives"] },
      { name: "Electrical Machines Lab", description: "Various electrical machines for testing", equipment: ["DC Machines", "Transformers", "Induction Motors"] },
      { name: "Control Systems Lab", description: "PID controllers and simulation tools", equipment: ["MATLAB/Simulink", "PLC trainers"] },
      { name: "Renewable Energy Lab", description: "Solar panel testing and wind energy systems", equipment: ["Solar panels", "Wind turbine models", "Battery systems"] },
    ],
    patents: [
      /*
{ title: "Efficient Solar MPPT Controller", status: "Filed", year: "2023" },
      { title: "Smart Meter with IoT Integration", status: "Published", year: "2022" },
      */
    ],
    publications: [
      /*
{ title: "Optimal Power Flow Analysis using PSO", type: "journal", year: "2024" },
      { title: "Solar Inverter Efficiency Enhancement", type: "conference", year: "2023" },
      */
    ],
    consultancy: [
      { title: "Power Audit for Local Industries", agency: "APSPDCL", amount: "₹4 Lakhs" },
    ],
    events: [
      /*
{ title: "EEE Alumni Meet-2026", date: "4th April 2026", description: "Organized by Department of Electrical & Electronics Engineering." },
      { title: "Skill Development Program on AI in Electronics", date: "9th to 13th March 2026", description: "Five-day offline training organized by APSSDC and Department of EEE." },
      { title: "Hands-on Workshop on Real World Applications of IoT", date: "19th to 21st February 2026", description: "Three-day workshop organized by Department of EEE in association with MITS IE(I) Students’ Chapter." },
      */
    ],
    mous: [
      /*
{ name: "APSPDCL", purpose: "Industrial Training & Internships", year: "2021" },
      { name: "Schneider Electric", purpose: "Automation Training", year: "2022" },
      */
    ],
    placement: {
      /*
percentage: "85%", avgPackage: "₹4.5 LPA", highestPackage: "₹10 LPA", recruiters: ["Schneider Electric", "Siemens", "ABB", "L&T", "BHEL"]
      */
      percentage: "N/A", avgPackage: "N/A", highestPackage: "N/A", recruiters: [],
    },
    studentProjects: [
      /*
{ title: "Solar Powered EV Charging Station", students: "Team of 4", description: "Renewable energy based charging infrastructure" },
      */
    ],
    subjects: [
      /*
{ name: "Circuit Theory", semester: 2, type: "core" },
      { name: "Electrical Machines - I", semester: 3, type: "core" },
      { name: "Network Analysis", semester: 3, type: "core" },
      { name: "Power Systems - I", semester: 5, type: "core" },
      { name: "Power Electronics", semester: 5, type: "core" },
      { name: "Control Systems", semester: 4, type: "core" },
      { name: "Renewable Energy Sources", semester: 7, type: "elective" },
      { name: "Smart Grid", semester: 7, type: "elective" },
      */
    ],
    documents: [
      { title: "Faculty List 2024-25", url: "https://mits.ac.in/assets/pdf/eee/EEE Faculty List AY 2024-25.pdf" },
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/EEE%20Stock%20Register.pdf" },
      { title: "BoS 2025-26", url: "https://www.mits.ac.in/public/uploads/departments/995645838ce4a60d761c4a4c41b31439.pdf" },
      { title: "BoS DTBU 2025-26", url: "https://www.mits.ac.in/public/uploads/departments/731c6de00e50600f614706ca4d6c740a.pdf" },
    ],
  },

  me: {
    key: "me",
    name: "Mechanical Engineering",
    shortName: "ME",
    established: "1998",
    bannerImage: deptImg("mech"),
    about: "The Department of Mechanical Engineering was started at the inception of the institution in the year 1998. The department is currently offering one UG program (B.Tech in Mechanical Engineering) with an intake of 60. The B.Tech. program has been continuously accredited by the National Board of Accreditation (NBA) since 2013 and is accredited under Tier I in 2019 with a score of 715 out of 1000. Subsequently, the program received NBA accreditation in 2022 under Tier I and is accredited again in 2025 for the period 2025–28. The College Academic Council and the Department Board of Studies strive hard to provide quality education with the most advanced curriculum to make the students industry ready and excel in today’s technologically intensive careers. The alumni of the department have been successfully building the remarkable careers in Mechanical engineering and allied disciplines.\n\nThe Department has a thriving research program with externally funded projects worth a total of more than Rs. 1.75 Crore. Faculty are engaged in providing engineering consultancy for industrial entities. The research output from the department, in terms of quality journal publications and patents, has been steadily increasing in recent years. The students of the Department benefit from this thriving R&D culture ,which provides them with an exposure to the state-of-the-art research facilities and cutting-edge technologies.\n\nThe Department is endowed with highly qualified and experienced faculty who have obtained their Doctoral degrees from eminent institution in India like IITs, NITs. The department is well equipped with modern industry laboratories which are established with the support of core engineering companies like Siemens and Dassault Systems. The industry related labs strive to improve the employability of the students in core companies.\n\nSince its inception, the department has been striving to take forward the vision and mission of the institution by making specific contributions in promoting education and research in the broad field of Mechanical Engineering.",
    goals: [
      "To maintain a high standard of mechanical engineering education through outstanding teaching innovative curriculum and research training that reflect the changing needs of society.",
      "To attract highly motivated students with enthusiasm, attitude and interest in Mechanical Engineering.",
      "To pursue excellence in research and technology transfer.",
      "To increase the public awareness of departmental activities and the Mechanical Engineering profession."
    ],
    vision: "\"To be a globally recognized center of excellence in Mechanical Engineering through academic excellence, research, innovation, international collaborations, and community engagement, nurturing competent, ethical, and socially responsible engineers for sustainable technological advancement and the holistic development of society and the nation.\"",
    mission: [
      "M1: Academic Excellence and Inclusive Learning - To provide inclusive, value-based, and outcome-driven education that fosters intellectual curiosity, critical thinking, ethical leadership, and lifelong learning, enabling at least 90% of graduates to achieve academic excellence, professional competence, and successful career progression in Mechanical Engineering.",
      "M2: Research, Innovation, and Industry Engagement - To promote research, innovation, entrepreneurship, startup incubation, and technology commercialization through strong collaborations with industry and academia, integrating Industry 4.0, Industry 5.0, Artificial Intelligence, Digital Manufacturing, IoT, and Smart Manufacturing into teaching, research, and professional practice.",
      "M3: Sustainable Development and Societal Impact - To cultivate socially responsible engineers by promoting community outreach, extension activities, rural technology initiatives, SDG-based projects, environmental sustainability, and ethical professional practices that contribute to the holistic development of society and the nation."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. S. Baskaran", designation: "Assoc. Professor & Head", qualification: "Ph.D. (NIT, Tiruchirappalli)", image: "https://mits.ac.in/public/uploads/faculty/DR S BASKARAN.JPG", profileUrl: "https://mits.ac.in/facultyprofile/306" },
    achievements: { consultancyAmount: "₹12+ Lakhs", researchProjects: "10+", patents: "4+", publications: "120+" },
    teachingApproach: { description: "Emphasis on hands-on training through workshops, CAD/CAM labs, and industry-oriented projects.", points: ["Advanced CAD/CAM training", "Manufacturing workshop practice", "Industry visits", "Design competitions", "ANSYS simulation projects"] },
    courses: ["Mechanical Engineering", "Automation and Robotics"],
    contactInfo: { email: "mehod@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      /*
{ name: "Dr. C. Yuvaraj", designation: "Professor & Vice Chancellor (I/c)", qualification: "Ph.D. (Bangalore University)", image: "https://mits.ac.in/public/uploads/faculty/Dr. C. Yuvaraj.JPG", profileUrl: "https://mits.ac.in/facultyprofile/245" },
      { name: "Dr. I. Arun", designation: "Professor", qualification: "Ph.D. (National Institute of Technology, Tiruchirappalli)", image: "https://mits.ac.in/public/uploads/faculty/DR I ARUN.JPG", profileUrl: "https://mits.ac.in/facultyprofile/303" },
      { name: "Dr. V. Vamsidhar", designation: "Assoc. Professor", qualification: "Ph.D. (J.N.T.U.A, Anantapuram)", image: "https://mits.ac.in/public/uploads/faculty/vamsi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/304" },
      { name: "Dr. S. Baskaran", designation: "Assoc. Professor & Head", qualification: "Ph.D. (National Institute of Technology, Trichy)", image: "https://mits.ac.in/public/uploads/faculty/DR S BASKARAN.JPG", profileUrl: "https://mits.ac.in/facultyprofile/306" },
      { name: "Dr. K. V. Nagesha", designation: "Assoc. Professor", qualification: "Ph.D. (National Institute of Technology, Karnataka)", image: "https://mits.ac.in/public/uploads/faculty/Nagesha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/307" },
      { name: "Dr. P. Sivaiah", designation: "Assoc. Professor", qualification: "Ph.D. (National Institute of Technology, Karnataka)", image: "https://mits.ac.in/public/uploads/faculty/Dr. P. Sivaiah.png", profileUrl: "https://mits.ac.in/facultyprofile/308" },
      { name: "Dr. R. Prithivirajan", designation: "Assoc. Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Prithivirajan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/309" },
      { name: "Dr. Praveen Kumar Bannaravuri", designation: "Sr. Asst. Professor", qualification: "Post Doctoral Fellow (IIT, Guwahati)", image: "https://mits.ac.in/public/uploads/faculty/DR PRAVEEN KUMAR BANNARVAVURI.JPG", profileUrl: "https://mits.ac.in/facultyprofile/728" },
      { name: "Dr. Kamlesh Kumar", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Rourkela, Odisha, India.)", image: "https://mits.ac.in/public/uploads/faculty/PHOTO_ Dr. Kamlesh Kumar(1).png", profileUrl: "https://mits.ac.in/facultyprofile/311" },
      { name: "Dr. Guniputi Balanarasimha", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Karnataka)", image: "https://mits.ac.in/public/uploads/faculty/DR GUNIPUTI BALANARASIMHA.JPG", profileUrl: "https://mits.ac.in/facultyprofile/702" },
      { name: "Dr. Anantha Raman L", designation: "Asst. Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Anantha Raman L.JPG", profileUrl: "https://mits.ac.in/facultyprofile/315" },
      { name: "Dr. Arun Kumar.D", designation: "Asst. Professor", qualification: "Ph.D. (PSG College of Technology/Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Dr. G. Arun Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/316" },
      { name: "Dr. Manish Sharma", designation: "Asst. Professor", qualification: "Ph.D. (Sardar Vallabhbhai National Institute\n\t\t\tof Technology, Surat)", image: "https://mits.ac.in/public/uploads/faculty/DR MANIS SHARAM.JPG", profileUrl: "https://mits.ac.in/facultyprofile/318" },
      { name: "Dr. Thrinadh Jadam", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology (NIT), Rourkela)", image: "https://mits.ac.in/public/uploads/faculty/DR THRINADH JADAM.JPG", profileUrl: "https://mits.ac.in/facultyprofile/707" },
      { name: "Dr. Thota S S Bhaskara Rao", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Rourkela)", image: "https://mits.ac.in/public/uploads/faculty/THOTA SS BHASKARARA RAO.JPG", profileUrl: "https://mits.ac.in/facultyprofile/596" },
      { name: "Dr. G. Veeresalingam", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Rourkela)", image: "https://mits.ac.in/public/uploads/faculty/Veeresalingam.JPG", profileUrl: "https://mits.ac.in/facultyprofile/613" },
      { name: "Dr. Jagannath Pattar", designation: "Asst. Professor", qualification: "Ph.D. (Sri Siddhartha Academy of Higher Education, Tumkur)", image: "https://mits.ac.in/public/uploads/faculty/Jagannath Pattar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/334" },
      { name: "Dr. Ved Prakash", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Rourkela)", image: "https://mits.ac.in/public/uploads/faculty/DR VED PRAKSASH.JPG", profileUrl: "https://mits.ac.in/facultyprofile/629" },
      { name: "Dr. Gejendhiran. S", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Puducherry)", image: "https://mits.ac.in/public/uploads/faculty/Gejendhiran.JPG", profileUrl: "https://mits.ac.in/facultyprofile/619" },
      { name: "Dr. Muthu Lakshmanan", designation: "Asst. Professor", qualification: "Ph.D. (SIMATS University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Muthu Laxmanan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/327" },
      { name: "Dr. A. Pruthvi Deep", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Durgapur)", image: "https://mits.ac.in/public/uploads/faculty/DR A PRUTVI DEEP.JPG", profileUrl: "https://mits.ac.in/facultyprofile/623" },
      { name: "Mr. S. Manoj Kumar", designation: "Asst. Professor", qualification: "Ph.D (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Manoj Kumar K.JPG", profileUrl: "https://mits.ac.in/facultyprofile/329" },
      { name: "Mr. Pujari Rajesh", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Tiruchirappalli)", image: "https://mits.ac.in/public/uploads/faculty/Pujari Rajesh.JPG", profileUrl: "https://mits.ac.in/facultyprofile/333" },
      { name: "Mr. G. Kumar", designation: "Asst. Professor", qualification: "Ph.D. (VELS University)", image: "https://mits.ac.in/public/uploads/faculty/G. Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/326" },
      { name: "Mr. P. Mohammed Rizwan Ali", designation: "Asst. Professor", qualification: "M.Tech. (Madanapalle Institute of Technology and Science, JNTUA)", image: "https://mits.ac.in/public/uploads/faculty/MR P MOHAMMED RIZWAN ALI.JPG", profileUrl: "https://mits.ac.in/facultyprofile/622" },
      */
    ],
    detailedAchievements: [
      /*
{ title: "Published 120+ research papers", description: "In national and international journals", type: "faculty" },
      { title: "SAE India BAJA competition participants", description: "Students designed and built ATV vehicles for SAE BAJA", type: "student" },
      */
    ],
    facilities: [
      { name: "CAD/CAM Lab", description: "SolidWorks, AutoCAD, CATIA workstations", equipment: ["40 CAD workstations", "SolidWorks Enterprise", "ANSYS simulation"] },
      { name: "Manufacturing Workshop", description: "CNC machines, lathes, milling machines", equipment: ["CNC Lathe", "Milling Machine", "Drilling machines"] },
      { name: "Thermal Engineering Lab", description: "IC engines, boilers, and refrigeration systems", equipment: ["4-Stroke engine models", "Refrigeration units", "Heat exchangers"] },
      { name: "Metallurgy Lab", description: "Material testing and analysis", equipment: ["Metallurgical microscope", "Hardness testers", "Impact testing machines"] },
    ],
    patents: [
      /*
{ title: "Efficient Heat Exchanger Design using Nano-fluids", status: "Filed", year: "2023" },
      { title: "3D Printed Prosthetic Limb Design", status: "Published", year: "2022" },
      */
    ],
    publications: [
      /*
{ title: "Optimization of CNC Machining Parameters", type: "journal", year: "2024" },
      { title: "Thermal Analysis of IC Engines", type: "conference", year: "2023" },
      */
    ],
    consultancy: [
      { title: "Material Testing Services", agency: "Local Industries", amount: "₹4 Lakhs" },
      { title: "CAD Design for SMEs", agency: "Small Enterprises", amount: "₹3 Lakhs" },
    ],
    events: [
      /*
{ title: "International FDP on Sustainability and Research in Modern Mechanical Engineering", date: "9th to 13th March 2026", description: "International Five Day Faculty Development Programme on 'Sustainability and Research in Modern Mechanical Engineering' organized by Department." },
      { title: "Seminar on Drone Technology and Career Opportunities", date: "6th March 2026", description: "'Drone Technology and Its Career Opportunities' organized under AICTE Distinguished Professionals Scheme." },
      { title: "Parents Meeting", date: "26th February 2026", description: "Regular parental engagement activity organized by Department." },
      { title: "Seminar on Maritime Sector Opportunities", date: "6th February 2026", description: "'Maritime sector opportunities and career for Mechanical Engineers' organized with ISTE Student Chapter." },
      { title: "Webinar on Additive Manufacturing Advancements", date: "2nd February 2026", description: "'Recent trends and technological advancements in Additive Manufacturing' organized by Department." },
      { title: "Three Days Hands-on Workshop on Hypermesh 3D Analysis", date: "7th to 9th January 2026", description: "Hands-on training on 'Hypermesh for Engineering Analysis' organized by Department." },
      { title: "National Level Technical Symposium Mechonance-2K25", date: "7th May 2025", description: "One Day National Level Technical Symposium organized by Department of Mechanical Engineering." },
      { title: "Hands on Workshop on IC Engine Dismantling & Assembly", date: "8th October 2025", description: "Workshop with Institution of Engineers - INDIA Student Chapter organized by Department." },
      { title: "Industrial Visit to IIT Tirupati Centre of Excellence", date: "6th September 2025", description: "Industry visit to Centre of Excellence Mechanical Engineering organized for students." },
      { title: "Workshop on CAD/CAM and Design Optimization", date: "2024-2025", description: "Regular workshops on CAD/CAM tools and design optimization organized by Department." },
      */
    ],
    mous: [
      /*
{ name: "Ashok Leyland", purpose: "Automotive Training", year: "2021" },
      { name: "TVS Motors", purpose: "Industrial Internships", year: "2022" },
      */
    ],
    placement: {
      /*
percentage: "88%", avgPackage: "₹5 LPA", highestPackage: "₹11 LPA", recruiters: ["Ashok Leyland", "TVS", "Mahindra", "Tata Motors", "L&T"]
      */
      percentage: "N/A", avgPackage: "N/A", highestPackage: "N/A", recruiters: [],
    },
    studentProjects: [
      /*
{ title: "Design of Hybrid Vehicle Chassis", students: "Team of 4", description: "Lightweight chassis design for electric-hybrid vehicle" },
      { title: "Solar Water Heater Optimization", students: "Team of 3", description: "Efficiency improvement using reflector design" },
      */
    ],
    subjects: [
      /*
{ name: "Engineering Drawing", semester: 1, type: "core" },
      { name: "Engineering Mechanics", semester: 2, type: "core" },
      { name: "Thermodynamics", semester: 3, type: "core" },
      { name: "Strength of Materials", semester: 3, type: "core" },
      { name: "Fluid Mechanics", semester: 4, type: "core" },
      { name: "Manufacturing Technology", semester: 4, type: "core" },
      { name: "Machine Design", semester: 5, type: "core" },
      { name: "Heat Transfer", semester: 5, type: "core" },
      { name: "IC Engines", semester: 6, type: "core" },
      { name: "CAD/CAM", semester: 6, type: "core" },
      { name: "Automobile Engineering", semester: 7, type: "elective" },
      { name: "Robotics", semester: 7, type: "elective" },
      { name: "Finite Element Analysis", semester: 8, type: "elective" },
      */
    ],
    documents: [
      { title: "Faculty List 2024-25", url: "https://mits.ac.in/public/uploads/departments/4715af8e6a43fe8dfdc8ef6c72de286f.pdf" },
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/Mechanical%20Stock%20Register.pdf" },
      { title: "BoS 2024-25", url: "https://mits.ac.in/public/uploads/departments/e24f944adcb19447e4b42ed17e83ab04.pdf" },
      { title: "IAAB 2024-25", url: "https://mits.ac.in/public/uploads/departments/3a98077bfb1d9689a33ce475cf2551a7.pdf" },
    ],
  },

  ece: {
    key: "ece",
    name: "Electronics & Communication Engg",
    shortName: "ECE",
    established: "2005",
    bannerImage: deptImg("ece"),
    about: "The Department of Electronics & Communication Engineering was established in the year 1998 for B. Tech course. The department offers 4 years of undergraduate program and 2 years of postgraduate program . The department lays stress on all round development of the students, faculty and laboratory staff by providing them conducive academic environment with necessary infrastructure to carry out their academic and research work. The department has distinguished faculty, most of them holding their Ph.D. degrees.\n\nThe Department obtained UGC-Autonomous Status in the year 2014 and since then running the program successfully by meeting all the requirements. The College Academic Council, Board of Studies of the department strive to provide quality education with the most advanced curriculum to make the students industry ready and to excel in the contemporary business world.\n\nThe B.Tech Program under Department of Electronics & Communication Engineering was accredited by the National Board of Accreditation (NBA) of All India Council for Technical Education (AICTE).",
    vision: "Department is to excel in technical education and research in the area of Electronics and Communication Engineering and to produce skilled, trained and competent individuals with high motivation to meet the present day challenges of the society.",
    mission: [
      "M1: To impart high quality education to enable students face challenges in the fields of Electronics and Communication Engineering.",
      "M2: To provide facilities, infrastructure, environment to develop the spirit of innovation, creativity, and research among students and faculty.",
      "M3: To inculcate ethical, moral values and lifelong learning skills in students to address the societal needs."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. Sanjay Kumar C. Gowre", designation: "Professor & Head", qualification: "Ph.D. (IIT-Kharagpur)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sanjay Kumar C. Gowre.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1018" },
    achievements: { consultancyAmount: "₹15+ Lakhs", researchProjects: "12+", patents: "8+", publications: "150+" },
    teachingApproach: { description: "The department integrates simulation-based learning with hands-on hardware projects.", points: ["VLSI design with Cadence tools", "IoT prototyping with Arduino/Raspberry Pi", "PCB design and fabrication", "Communication system simulation", "MATLAB & Simulink projects"] },
    courses: ["Electronics & Communication Engg", "VLSI Design and Embedded Systems"],
    contactInfo: { email: "ecehod@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      /*
      { name: "Dr. Rama S Komaragiri", designation: "Professor & Dean-Academics", qualification: "Ph.D. (Technical University of Darmstadt, Germany)", image: "public/uploads/faculty/rama.jpg", profileUrl: "https://mits.ac.in/facultyprofile/735" },
      { name: "Dr. P. Ramanathan", designation: "Professor & Principal", qualification: "Ph.D. (PSG College of Technology & Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/a744ebed6a293a48de32e80ba66680c8.JPG", profileUrl: "https://mits.ac.in/facultyprofile/172" },
      { name: "Dr. Sanjay Kumar C. Gowre", designation: "Professor & Head", qualification: "Ph.D. (IIT-Kharagpur)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sanjay Kumar C. Gowre.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1018" },
      { name: "Dr. S. Rajasekaran", designation: "Professor", qualification: "Ph.D. (Coimbatore Institute of Technology, Anna University, Chennai, India.)", image: "public/uploads/faculty/f8983b3c4255e5b248d9b51eb8f62e38.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/173" },
      { name: "Dr. Nehru Kandasamy", designation: "Professor", qualification: "Ph.D. (Anna University, Chennai, India.)", image: "public/uploads/faculty/Nehru.JPG", profileUrl: "https://mits.ac.in/facultyprofile/174" },
      { name: "Dr. Murli Manohar", designation: "Assoc. Professor", qualification: "Ph.D. (Indian Institute of Technology, Guwahati)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Murali Manohar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/734" },
      { name: "Dr. V. Jayaprakasan", designation: "Assoc. Professor", qualification: "Ph.D. (JNTUA, Ananthapuramu)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Jayaprakasan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/751" },
      { name: "Dr. K. Sathesh", designation: "Assoc. Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Dr. K. Sathesh.JPG", profileUrl: "https://mits.ac.in/facultyprofile/177" },
      { name: "Dr. Maneesh Kumar Singh", designation: "Assoc. Professor", qualification: "Ph.D. (Curtin University, Perth Australia)", image: "https://mits.ac.in/public/uploads/faculty/Dr_Maneesh_Kumar_Singh.png", profileUrl: "https://mits.ac.in/facultyprofile/695" },
      { name: "Dr. Grande Naga Jyothi", designation: "Assoc. Professor", qualification: "Ph.D. (VIT University)", image: "public/uploads/faculty/Naga Jyothi.jpg", profileUrl: "https://mits.ac.in/facultyprofile/400" },
      { name: "Dr. Rakesh Nath Tiwari", designation: "Assoc. Professor", qualification: "Ph.D. (Uttarakhand Technical University, India)", image: "public/uploads/faculty/1120faf5d8ab8c822818d9c4034e8f1f.jpg", profileUrl: "https://mits.ac.in/facultyprofile/185" },
      { name: "Dr. R. Ravindraiah", designation: "Asst. Professor", qualification: "Ph.D. (JNTUA, Anantapuramu)", image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Ravindraiah.JPG", profileUrl: "https://mits.ac.in/facultyprofile/514" },
      { name: "Dr. G. Reddy Hemantha", designation: "Asst. Professor", qualification: "Ph.D. (JNTUA, Anantapuramum)", image: "https://mits.ac.in/public/uploads/faculty/Reddy Hemantha(1).JPG", profileUrl: "https://mits.ac.in/facultyprofile/396" },
      { name: "Dr. Janmoni Borah", designation: "Asst. Professor", qualification: "Ph.D. (NERIST, Arunachal Pradesh)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Janmoni Borah.JPG", profileUrl: "https://mits.ac.in/facultyprofile/191" },
      { name: "Dr. S K Nurul Islam", designation: "Asst. Professor", qualification: "Ph.D. (Indian Institute of Engineering Science and Technology (IIEST), Shibpur)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Nurul Islam.JPG", profileUrl: "https://mits.ac.in/facultyprofile/732" },
      { name: "Dr. C. Kumar", designation: "Asst. Professor", qualification: "Ph.D. (Anna University)", image: "public/uploads/faculty/cf383c1cdc0f26fc0b61ec41145a7dfb.jpg", profileUrl: "https://mits.ac.in/facultyprofile/193" },
      { name: "Dr. Smriti Baruah", designation: "Asst. Professor", qualification: "Ph.D. (NERIST, Arunachal Pradesh)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Smriti Baruah.JPG", profileUrl: "https://mits.ac.in/facultyprofile/197" },
      { name: "Dr. Rahul Mondal", designation: "Asst. Professor", qualification: "Post-Doctoral Fellow (IIT Madras & IIT Patna)", image: "public/uploads/faculty/rahul.JPG", profileUrl: "https://mits.ac.in/facultyprofile/720" },
      { name: "Dr. V. Sai Kumar", designation: "Asst. Professor", qualification: "Ph.D. (Rayalaseema University, Kurnool)", image: "https://mits.ac.in/public/uploads/faculty/Sai Sir.JPG", profileUrl: "https://mits.ac.in/facultyprofile/201" },
      { name: "Dr. E. Aravindraj", designation: "Asst. Professor", qualification: "Ph.D. (Pondicherry University)", image: "public/uploads/faculty/ara.jpg", profileUrl: "https://mits.ac.in/facultyprofile/519" },
      { name: "Dr. Gutti Nagaswetha", designation: "Asst. Professor", qualification: "Ph.D. (Viswesaraya Technological University,Belgaum)", image: "https://mits.ac.in/public/uploads/faculty/nagaswetha.png", profileUrl: "https://mits.ac.in/facultyprofile/204" },
      { name: "Dr. Simadri Badatya", designation: "Asst. Professor", qualification: "Ph.D. (Academy of Scientific Innovation & Research (AcSIR), India)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Simadri Badatya.JPG", profileUrl: "https://mits.ac.in/facultyprofile/700" },
      { name: "Dr. Anurag Kumar Pandey", designation: "Asst. Professor", qualification: "Ph.D. (Indian Institute of Technology (IIT), Kharagpur)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Anurag Kumar Pandey.JPG", profileUrl: "https://mits.ac.in/facultyprofile/731" },
      { name: "Dr. H. Shree Kumar", designation: "Asst. Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "public/uploads/faculty/sreekumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/443" },
      { name: "Dr. Rakesh Singh", designation: "Asst. Professor", qualification: "Ph.D. (Indian Institute of Technology, Roorkee)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Rakesh Singh.JPG", profileUrl: "https://mits.ac.in/facultyprofile/742" },
      { name: "Dr. G. Subbarao", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology Mizoram (NITMZ), Mizoram)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Subbarao.JPG", profileUrl: "https://mits.ac.in/facultyprofile/212" },
      { name: "Mr. T. Manivannan", designation: "Asst. Professor", qualification: "Ph.D. (Vel Tech University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. T. Manivannan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/202" },
      { name: "Mr. Asif Moiz", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Patna)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Asif Moiz.JPG", profileUrl: "https://mits.ac.in/facultyprofile/419" },
      { name: "Mr. V. Mustafa", designation: "Asst. Professor", qualification: "Ph.D (Vel Tech University)", image: "https://mits.ac.in/public/uploads/faculty/V. Mustafa.JPG", profileUrl: "https://mits.ac.in/facultyprofile/218" },
      { name: "Mr. G. Charan Kumar", designation: "Asst. Professor", qualification: "Ph.D (Vel Tech University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. G. Charan Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/251" },
      { name: "Mrs. K. Revathi", designation: "Asst. Professor", qualification: "Ph.D (NIT, Mizoram)", image: "https://mits.ac.in/public/uploads/faculty/Mrs. Revathi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/244" },
      { name: "Mr. M. Kamesh", designation: "Asst. Professor", qualification: "Ph.D. (Vel Tech University, Chennai)", image: "public/uploads/faculty/1d0ccd786e3504191039a886e12fe837.jpg", profileUrl: "https://mits.ac.in/facultyprofile/216" },
      { name: "Mrs. Kowsalya P", designation: "Asst. Professor", qualification: "M.E. (Arulmigu Kalasalingam College of Engg., Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Mrs. Kowsalya P.JPG", profileUrl: "https://mits.ac.in/facultyprofile/434" },
      { name: "Mrs. P. Susmitha", designation: "Asst. Professor", qualification: "M.Tech. (CMR Institute & Technology, JNTU Hyderabad)", image: "https://mits.ac.in/public/uploads/faculty/Mrs. P. Susmitha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/653" },
      { name: "Mr. Shaik Tipu Rahaman", designation: "Asst. Professor", qualification: "M.Sc. (Bharathiar University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Shaik Tipu Rahaman.JPG", profileUrl: "https://mits.ac.in/facultyprofile/797" },
      { name: "Mr. B. Subbarayudu", designation: "Asst. Professor", qualification: "M.Tech. (CMR College of Engineering & Technology (J.N.T.U.H))", image: "https://mits.ac.in/public/uploads/faculty/Mr. B. Subbarayudu - ECE.JPG", profileUrl: "https://mits.ac.in/facultyprofile/252" },
      { name: "Ms. S. Kavi Priya", designation: "Asst. Professor", qualification: "M.Tech. (VIT University)", image: "public/uploads/faculty/kavi.jpg", profileUrl: "https://mits.ac.in/facultyprofile/424" },
      { name: "Mrs. V. Sai Anusha", designation: "Asst. Professor", qualification: "M.Tech. (Amrita Vishwa Vidyapeetham, Amrita Universit)", image: "https://mits.ac.in/public/uploads/faculty/V. Sai Anusha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/416" },
      { name: "Mr. V. Nagaraja", designation: "Asst. Professor", qualification: "M.Tech. (SVU, Tirupathi)", image: "public/uploads/faculty/nagaraju.jpg", profileUrl: "https://mits.ac.in/facultyprofile/534" },
      */
    ],
    detailedAchievements: [
      /*
{ title: "NBA Accredited Program", description: "B.Tech ECE accredited by National Board of Accreditation", type: "faculty" },
      { title: "150+ Research Publications", description: "Published in IEEE, Elsevier, and Springer journals", type: "faculty" },
      { title: "IoT Hackathon Winners", description: "Students won regional IoT innovation challenge", type: "student" },
      */
    ],
    facilities: [
      { name: "VLSI Design Lab", description: "Cadence tools for chip design and verification", equipment: ["Cadence Virtuoso", "Xilinx FPGA kits", "Logic analyzers"] },
      { name: "Communication Systems Lab", description: "Analog and digital communication trainers", equipment: ["Spectrum Analyzer", "Signal generators", "Communication kits"] },
      { name: "Embedded Systems Lab", description: "ARM and microcontroller programming", equipment: ["ARM Development boards", "Arduino kits", "Raspberry Pi"] },
      { name: "PCB Design Lab", description: "PCB fabrication and testing", equipment: ["PCB prototyping machine", "Soldering stations", "Oscilloscopes"] },
    ],
    patents: [
      /*
{ title: "Low Power VLSI Circuit Design for IoT Sensors", status: "Granted", year: "2022" },
      { title: "Antenna Design for 5G Applications", status: "Filed", year: "2023" },
      { title: "Smart Home Automation System", status: "Published", year: "2023" },
      */
    ],
    publications: [
      /*
{ title: "MIMO Antenna Design for 5G Communications", type: "journal", year: "2024" },
      { title: "IoT-based Environmental Monitoring", type: "conference", year: "2023" },
      { title: "FPGA Implementation of Image Processing Algorithms", type: "journal", year: "2023" },
      */
    ],
    consultancy: [
      { title: "PCB Design Services", agency: "Electronics Firms", amount: "₹5 Lakhs" },
      { title: "IoT Sensor Network Design", agency: "Agriculture Dept", amount: "₹6 Lakhs" },
    ],
    events: [
      /*
{ title: "National Level Technical Symposium ECLECTICA 2K26", date: "1st April 2026", description: "Organized by Department of Electronics and Communication Engineering." },
      { title: "Seminar on Semiconductor Innovation", date: "24th February 2026", description: "Seminar on 'From Silicon to Systems: Powering the future with Semiconductor Innovation' organized by ECE with MITS IETE Students Forum." },
      { title: "MoU Signing Ceremony with Sense Semiconductor", date: "24th February 2026", description: "Organized by Department of ECE in association with Industry Relation Cell MITS." },
      */
    ],
    mous: [
      /*
{ name: "Texas Instruments", purpose: "Embedded Systems Training", year: "2021" },
      { name: "Qualcomm", purpose: "5G Research Collaboration", year: "2022" },
      { name: "BSNL", purpose: "Telecom Training", year: "2020" },
      */
    ],
    placement: {
      /*
percentage: "90%", avgPackage: "₹5 LPA", highestPackage: "₹12 LPA", recruiters: ["Qualcomm", "Samsung", "Intel", "TCS", "Infosys", "Wipro"]
      */
      percentage: "N/A", avgPackage: "N/A", highestPackage: "N/A", recruiters: [],
    },
    studentProjects: [
      /*
{ title: "IoT-based Smart Agriculture System", students: "Team of 4", description: "Sensor-based soil moisture and weather monitoring" },
      { title: "Gesture Controlled Robot", students: "Team of 3", description: "Accelerometer-based robot control system" },
      */
    ],
    subjects: [
      /*
{ name: "Electronic Devices & Circuits", semester: 2, type: "core" },
      { name: "Signals & Systems", semester: 3, type: "core" },
      { name: "Analog Communications", semester: 4, type: "core" },
      { name: "Digital Communications", semester: 5, type: "core" },
      { name: "Microprocessors & Microcontrollers", semester: 4, type: "core" },
      { name: "VLSI Design", semester: 6, type: "core" },
      { name: "Embedded Systems", semester: 6, type: "core" },
      { name: "Antenna & Wave Propagation", semester: 5, type: "core" },
      { name: "IoT", semester: 7, type: "elective" },
      { name: "5G & Beyond", semester: 7, type: "elective" },
      */
    ],
    documents: [
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/ECE%20Stock%20Register.pdf" },
      { title: "BoS 2022-23", url: "https://mits.ac.in/public/uploads/departments/016da0715e97c1d3d0a16083565a153f.pdf" },
      { title: "IAAB 2023-24", url: "https://mits.ac.in/public/uploads/departments/0cb69816b5667fe09b0e368687a8dbed.pdf" },
      { title: "BOS 2021-22", url: "https://mits.ac.in/public/uploads/departments/7af6d7984f445b07f1d5868977680e08.pdf" },
    ],
  },

  cseds: {
    key: "cseds",
    name: "Computer Science and Engineering (Artificial Intelligence and Data Science)",
    shortName: "CSE-DS",
    established: "2020",
    bannerImage: deptImg("csd"),
    about: "The Department of Computer Science and Engineering in Data Science offers 4-year degree in Data Science, which is established in the year 2020. The courses are flexible and have been structured to meet the evolving needs of the IT industry. The College Academic Council and  Board of Studies of the department strive to provide quality education with the  most advanced curriculum and syllabus to make the students industry ready and excel in the contemporary business world.\n\nB. Tech. in Data Science is an undergraduate programme with advanced learning solutions to impart the  knowledge of advanced innovations like Artificial Intelligence, Data Science, Machine Learning and Deep Learning.",
    vision: "To become recognized data science centre, emphasizing academic excellence, pioneering research, and data driven solutions, contributing significantly to global technological advancement and socio-economic development.",
    mission: [
      "To foster a culture that empowers students with state-of-the-art laboratories and learned faculty to compete in the data driven world.",
      "To provide a dynamic atmosphere for data-driven exploration in collaboration with global industry and research organization, encouraging innovation and entrepreneurship.",
      "To nurture inter-disciplinary and project-based learning among students along with professional ethics to serve the society."
    ],
    nbaAccredited: false,
    hod: { name: "Dr. S. Kusuma", designation: "Asst. Professor & Head", qualification: "Ph.D. (VIT University)", image: "https://mits.ac.in/public/uploads/faculty/c9fcfd6e1946a61df27003a2c31fbb64.JPG", profileUrl: "https://mits.ac.in/facultyprofile/98" },
    achievements: { consultancyAmount: "INR 5+ Lakhs", researchProjects: "6+", patents: "4+", publications: "60+" },
    goals: [
      "To maintain a high standard of education through outstanding teaching innovative curriculum and research training that reflect the changing needs of society.",
      "To attract highly motivated students with enthusiasm, attitude and interest in Artificial Intelligence and Data Science.",
      "To pursue excellence in research and technology transfer.",
      "To increase the public awareness of departmental activities and the Artificial Intelligence & Data Science profession."
    ],
    teachingApproach: {
      description: "To maintain a high standard of education through outstanding teaching innovative curriculum and research training that reflect the changing needs of society.",
      points: [
        "To attract highly motivated students with enthusiasm, attitude and interest in Artificial Intelligence and Data Science.",
        "To pursue excellence in research and technology transfer.",
        "To increase the public awareness of departmental activities and the Artificial Intelligence & Data Science profession."
      ]
    },
    courses: ["B.Tech in CSE - Data Science"],
    contactInfo: { email: "dshod@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      /*
{ name: "Dr. K. Nirmala Devi", designation: "Assoc. Professor", qualification: "Post-Doctoral Researcher (Lincoln University College, Malaysia)", image: "https://mits.ac.in/public/uploads/faculty/c9fcfd6e1946a61df27003a2c31fbb64.JPG", profileUrl: "https://mits.ac.in/facultyprofile/729" },
      { name: "Dr. S. Kusuma", designation: "Asst. Professor & Head", qualification: "Post-Doctoral Researcher (Lincoln University College, Malaysia)", image: "https://mits.ac.in/public/uploads/faculty/c9fcfd6e1946a61df27003a2c31fbb64.JPG", profileUrl: "https://mits.ac.in/facultyprofile/98" },
      { name: "Dr. S. Gopalakrishnan", designation: "Asst. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Gopalakrishnan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/509" },
      { name: "Dr. M. Kiran Kumar", designation: "Asst. Professor", qualification: "Ph.D. (VIT University)", image: "https://mits.ac.in/public/uploads/faculty/Kiran.JPG", profileUrl: "https://mits.ac.in/facultyprofile/408" },
      { name: "Dr. K. Pugazharasi", designation: "Asst. Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Dr. K. Pugazharasi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/548" },
      { name: "Mr. T. Balaji", designation: "Asst. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. T. Balaji.JPG", profileUrl: "https://mits.ac.in/facultyprofile/603" },
      { name: "Mrs. R. Roopa", designation: "Asst. Professor", qualification: "Ph.D. (Sri Venkateswara University)", image: "https://mits.ac.in/public/uploads/faculty/Mrs. R. Roopa.JPG", profileUrl: "https://mits.ac.in/facultyprofile/508" },
      { name: "Mrs. Vidhyashree B", designation: "Asst. Professor", qualification: "Ph.D. (Visvesvaraya Technological University)", image: "https://mits.ac.in/public/uploads/faculty/Mrs. Vidhyashree B.JPG", profileUrl: "https://mits.ac.in/facultyprofile/428" },
      { name: "Mrs. F. Twinkle Graf", designation: "Asst. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Twinkle.JPG", profileUrl: "https://mits.ac.in/facultyprofile/588" },
      { name: "Mr. A. Kalyan Kumar", designation: "Asst. Professor", qualification: "Ph.D. (Acharya Nagarjuna University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. A. Kalyan Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/432" },
      { name: "Mrs. S. Manjula", designation: "Asst. Professor", qualification: "Ph.D. (Annamalai University)", image: "https://mits.ac.in/public/uploads/faculty/Mrs. S. Manjula.JPG", profileUrl: "https://mits.ac.in/facultyprofile/123" },
      { name: "Mr. K. Durga Charan", designation: "Asst. Professor", qualification: "Ph.D. (JNTU, Kakinada)", image: "https://mits.ac.in/public/uploads/faculty/Mr. K. Durga Charan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/133" },
      { name: "Mrs. T. Swetha", designation: "Asst. Professor", qualification: "Ph.D. (Amrita Vishwa Vidyapeetham)", image: "https://mits.ac.in/public/uploads/faculty/Mrs. T. Swetha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/431" },
      { name: "Mr. Vishnukumar Ravula", designation: "Asst. Professor", qualification: "Ph.D. (VIT University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Vishnukumar Ravula.JPG", profileUrl: "https://mits.ac.in/facultyprofile/661" },
      { name: "Mr. Rajkumar. G", designation: "Asst. Professor", qualification: "Ph.D. (St. Peter)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Rajkumar. G.JPG", profileUrl: "https://mits.ac.in/facultyprofile/470" },
      { name: "Mr. G. Kiran Kumar", designation: "Asst. Professor", qualification: "Ph.D. (Puducherry Technological University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. G. Kiran Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/511" },
      { name: "Mrs. Anuradha Prudhivi", designation: "Asst. Professor", qualification: "Ph.D. (Dayananda Sagar University, Bangalore)", image: "https://mits.ac.in/public/uploads/faculty/Mrs. Anuradha Prudhivi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/134" },
      { name: "Mr. Arockia Raj Abraham", designation: "Asst. Professor", qualification: "Ph.D. (Saveetha University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Arockia Raj Abraham.JPG", profileUrl: "https://mits.ac.in/facultyprofile/426" },
      { name: "Mrs. M. Nandhini", designation: "Asst. Professor", qualification: "Ph.D. (Puducherry Technological University)", image: "https://mits.ac.in/public/uploads/faculty/Mrs. M. Nandhini.JPG", profileUrl: "https://mits.ac.in/facultyprofile/453" },
      { name: "Mr. B. Bhaskar", designation: "Asst. Professor", qualification: "M.Tech. (Madanapalle Institution of Technology and Science, JNTUA University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. B. Bhaskar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/116" },
      { name: "Mr. Nukala Bhargav Krishna", designation: "Asst. Professor", qualification: "M.Tech. (Integrated) (Vellore Institute of Technology, Vellore)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Nukala Bhargav Krishna.JPG", profileUrl: "https://mits.ac.in/facultyprofile/750" },
      { name: "Mr. Yawar Ayub Matta", designation: "Asst. Professor", qualification: "M.Tech. (NIT, Srinagar)", image: "https://mits.ac.in/public/uploads/faculty/Yawar Ayub Matta.JPG", profileUrl: "https://mits.ac.in/facultyprofile/664" },
      */
    ],
    detailedAchievements: [
      /*
{ title: "Faculty Achievements 2023-24", description: "Department maintains year-wise faculty achievement records on official page.", type: "faculty" },
      { title: "Student Achievements 2024-25", description: "Department highlights student achievements year-wise in the achievements tab.", type: "student" },
      { title: "Student Achievements 2023-24", description: "Official records include academic and co-curricular achievement updates.", type: "student" },
      */
    ],
    facilities: [
      { name: "Digital Classrooms", description: "State-of-the-art digital classrooms for interactive learning.", equipment: ["Digital boards", "Projectors", "Audio systems"] },
      { name: "IT-Enabled Computing Labs", description: "Department infrastructure includes IT-enabled labs for practical sessions.", equipment: ["High-performance workstations", "Programming toolchains"] },
    ],
    patents: [
      /*
{ title: "Predictive Analytics Model for Student Performance", status: "Filed", year: "2023" },
      { title: "Real-Time Data Pipeline Architecture", status: "Published", year: "2022" },
      */
    ],
    publications: [
      /*
{ title: "Faculty Publications 2024-25", type: "journal", year: "2024-25" },
      { title: "Faculty Publications 2023-24", type: "journal", year: "2023-24" },
      { title: "Faculty Publications 2022-23", type: "journal", year: "2022-23" },
      */
    ],
    consultancy: [{ title: "Data Analytics for SMEs", agency: "Local Businesses", amount: "INR 2 Lakhs" }],
    events: [
      /*
{ title: "National Level Technical Symposium DFesta-2026", date: "8th April 2026", description: "Organized by Department of CSE - Data Science." },
      { title: "Technical Talk on Fostering Innovation and Entrepreneurship in Engineering Education", date: "16th March 2026", description: "Organized by Departments of CSE-(AI) and CSE-(DS) under AICTE Sponsored DPS Scheme." },
      { title: "Career Talk on Process Mining and AI in Process Intelligence", date: "13th March 2026", description: "Organized by Department of Training & Skill Development in association with CSE - Data Science." },
      */
    ],
    mous: [
      /*
{ name: "Google", purpose: "Cloud Data Analytics", year: "2022" }, { name: "AWS", purpose: "Data Engineering Training", year: "2023" }
      */
    ],
    placement: {
      /*
percentage: "2023-24: 50 offers out of 62 eligible", avgPackage: "As per placement cell records", highestPackage: "As per placement cell records", recruiters: ["TCS", "Infosys", "Wipro", "Capgemini", "Deloitte", "Accenture"]
      */
      percentage: "N/A", avgPackage: "N/A", highestPackage: "N/A", recruiters: [],
    },
    studentProjects: [
      /*
{ title: "Credit Card Fraud Detection System", students: "Team of 3", description: "ML model for real-time fraud detection" },
      { title: "Sentiment Analysis Dashboard", students: "Team of 4", description: "NLP-based social media sentiment tracker" },
      */
    ],
    subjects: [
      /*
{ name: "Introduction to Data Science", semester: 2, type: "core" },
      { name: "Statistics for Data Science", semester: 3, type: "core" },
      { name: "Machine Learning", semester: 4, type: "core" },
      { name: "Big Data Technologies", semester: 5, type: "core" },
      { name: "Data Visualization", semester: 5, type: "core" },
      { name: "Deep Learning", semester: 6, type: "core" },
      { name: "NLP", semester: 7, type: "elective" },
      { name: "Reinforcement Learning", semester: 7, type: "elective" },
      */
    ],
    documents: [
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/CSD%20Stock%20Register.pdf" },
      { title: "BoS DTBU 2025-26", url: "https://mits.ac.in/public/uploads/departments/134cb472d81ed7a3efdf49d4f9830ed4.pdf" },
      { title: "BoS 2024-25", url: "https://mits.ac.in/public/uploads/departments/61632879672f9d1af4e7af1e07014ba4.pdf" },
      { title: "MAGDATAZINE - 2023-24", url: "https://mits.ac.in/public/uploads/departments/a4baf88bf27ad0d2e296b8217cbc57fa.pdf" },
    ],
  },

  csecs: {
    key: "csecs",
    name: "Computer Science and Engineering (Cyber Security)",
    shortName: "CSE-CS",
    established: "2020",
    bannerImage: deptImg("csc"),
    about: "The Department of Computer Science and Engineering (Cyber Security) was established in 2020 with an initial intake of 60 students, which increased to 120 in 2023 and further expanded to 180 in 2024. The Department offers an undergraduate programme in Computer Science and Engineering (Cyber Security), designed to produce competent professionals equipped with strong theoretical foundations and practical skills to secure modern software and hardware systems. The B.Tech. programme emphasizes advanced learning in areas such as ethical hacking, artificial intelligence, and web and data security.\n\nThe Department is supported by robust infrastructural facilities that enable high-quality education aligned with current industry needs. It has a team of well-qualified and experienced faculty members with significant academic and industry expertise. To foster continuous learning and skill enhancement among students and faculty, the Department regularly organizes Faculty Development Programmes (FDPs), seminars, workshops, and technical symposiums.",
    vision: "Building globally competent, ethically responsible, and industry-ready cyber security professionals and technologists, serving the society by securing the digital world, addressing cyber threats through excellence in cyber security education, research and innovation.",
    mission: [
      "To provide quality education on Cyber Security threats and technologies through industry oriented curriculum, modern teaching-learning practices, advanced laboratories and experiential learning.",
      "To promote research, innovation, and industry collaboration in emerging domains of Cyber Security for developing skilled professionals capable of addressing real-world cyber threats.",
      "To inculcate ethical values, awareness on cyber laws, leadership qualities, lifelong learning, and social responsibility among students for building a secure and sustainable digital society."
    ],
    nbaAccredited: false,
    hod: { name: "Dr. Brahm Prakash", designation: "Assoc. Professor & Head", qualification: "Ph.D. (IKG Punjab Technical University)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Brahm Prakash.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1085" },
    achievements: { consultancyAmount: "INR 3+ Lakhs", researchProjects: "4+", patents: "2+", publications: "40+" },
    
    teachingApproach: {
      points: [
        "To uphold a high standard of education by delivering outstanding teaching, fostering an innovative curriculum, and providing research training that reflects the evolving needs of society.",
        "To attract highly motivated students who demonstrate enthusiasm, a positive attitude, and a strong interest in Artificial Intelligence and Data Science.",
        "To pursue excellence in research and promote effective technology transfer.",
        "To enhance public awareness of departmental activities and promote a deeper understanding of the Artificial Intelligence and Data Science profession."
      ],
      description: "With its revolutionary approach to education, multidisciplinary research, and emphasis on diligent collaboration, MITS fosters a conducive environment for students to broaden their perspectives. Students arrive with bright ideas, and MITS empowers them to transform those ideas into thoughtful, effective leadership that contributes to a better global society by positively impacting lives.\n\nTo another century of expanding minds and leading the world forward.",
      
    },
    courses: ["B.Tech in Computer Science and Engineering (Cyber Security)"],
    contactInfo: { email: "cshod@mits.ac.in", phone: "+91-9100973396; 8571-280255; 280706" },
    faculty: [
      /*
{ name: "Dr. Chandra Prakash Gupta", designation: "Professor & Dean-School of Computing", qualification: "Ph.D. (University of Kota)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Chandraprakash Guptha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/730" },
      { name: "Dr. Sachikanta Dash", designation: "Assoc. Professor", qualification: "Ph.D. (Berhampur University)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sachikanta Dash.JPG", profileUrl: "https://mits.ac.in/facultyprofile/745" },
      { name: "Dr. M. Jaganathan", designation: "Assoc. Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Dr. M. Jaganathan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1103" },
      { name: "Dr. Brahm Prakash", designation: "Assoc. Professor & Head", qualification: "Ph.D. (IKG Punjab Technical University)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Brahm Prakash.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1085" },
      { name: "Dr. K. P. Manikandan", designation: "Asst. Professor", qualification: "Ph.D. (JNTU-Kakinada)", image: "https://mits.ac.in/public/uploads/faculty/Dr. K. P. Manikandan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/91" },
      { name: "Dr. R. Sandeep Kumar", designation: "Asst. Professor", qualification: "Ph.D. (MS Ramaiah University of Applied Sciences)", image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Sandeep Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1092" },
      { name: "Mrs. A. Komala", designation: "Asst. Professor", qualification: "Ph.D. (University of Hyderabad, Hyderabad)", image: "https://mits.ac.in/public/uploads/faculty/Mrs. A. Komala.jpg", profileUrl: "https://mits.ac.in/facultyprofile/95" },
      { name: "Mr. Tunikipalli Nagaraju Yadav", designation: "Asst. Professor", qualification: "Ph.D. (Annamalai University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Tunikipalli Nagaraju Yadav.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1091" },
      { name: "Mr. Bhabani Sankar Samantray", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (VIT-AP University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Bhabani Sankar Samantray.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1128" },
      { name: "Mrs. M. Fathima Begum", designation: "Asst. Professor", qualification: "Ph.D. (VIT University, Vellore)", image: "https://mits.ac.in/public/uploads/faculty/Mrs. M. Fathima Begum.JPG", profileUrl: "https://mits.ac.in/facultyprofile/566" },
      { name: "Mr. Goli Nageswararao", designation: "Asst. Professor", qualification: "Ph.D. (IIT Tirupati)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Goli Nageswararao.JPG", profileUrl: "https://mits.ac.in/facultyprofile/719" },
      { name: "Mr. M. Mutharasu", designation: "Asst. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. M. Mutharasu.JPG", profileUrl: "https://mits.ac.in/facultyprofile/489" },
      { name: "Mr. Roni Das", designation: "Asst. Professor", qualification: "Ph.D. (Vikrant University, Gwalior)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Roni Das.JPG", profileUrl: "https://mits.ac.in/facultyprofile/741" },
      { name: "Mr. K. C. Mohanraj", designation: "Asst. Professor", qualification: "M.E. (Karpagam university, Coimbatore)", image: "https://mits.ac.in/public/uploads/faculty/Mr. K. C. Mohanraj - CSC.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1101" },
      { name: "Mrs. C. Ushapriya", designation: "Asst. Professor", qualification: "M.Tech. (VSB Engineering College, Karur)", image: "https://mits.ac.in/public/uploads/faculty/Mrs. C. Ushapriya.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1099" },
      { name: "Mrs. Pagadala Naveena", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/Mrs. Pagadala Naveena.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1106" },
      { name: "Mr. Karanam Seshagiri Rao", designation: "Asst. Professor", qualification: "M.Tech. (St.Johns College of Engineering, JNTUA)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Karanam Seshagiri Rao.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1102" },
      { name: "Ms. Chinnapapannagari Aparna", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/Ms. Chinnapapannagari Aparna.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1104" },
      */
    ],
    detailedAchievements: [
      /*
{ title: "Faculty Achievements 2023-24", description: "Department publishes annual faculty achievements in the official achievements tab.", type: "faculty" },
      { title: "Student Achievements 2023-24", description: "Student achievement records are maintained year-wise by the department.", type: "student" },
      { title: "Student Achievements 2022-23", description: "Official page includes year-wise student performance highlights.", type: "student" },
      */
    ],
    facilities: [
      { name: "Digital Classrooms", description: "IT-enabled classrooms support cybersecurity-focused teaching and demonstrations.", equipment: ["Digital boards", "Projectors", "Networked systems"] },
      { name: "Department Labs", description: "Lab facilities support practical sessions in security, systems, and computing.", equipment: ["Configured lab workstations", "Security software stack"] },
    ],
    patents: [
      /*
{ title: "AI-based Intrusion Detection System", status: "Filed", year: "2023" },
      */
    ],
    publications: [
      /*
{ title: "ML-based Malware Detection Framework", type: "journal", year: "2024" },
      { title: "Phishing URL Detection using Deep Learning", type: "conference", year: "2023" },
      */
    ],
    consultancy: [{ title: "Security Audit Services", agency: "Local IT Companies", amount: "INR 2 Lakhs" }],
    events: [
      /*
{ title: "Workshop cum Hackathon on Ethical Hacking and Cyber Security", date: "2nd to 21st March 2026", description: "Organized by CSE - Cyber Security with IIIC and ISTE Student Chapter." },
      { title: "International Conference on Cyber and AI Security", date: "9th to 10th March 2026", description: "Organized by Department of CSE - Cyber Security." },
      { title: "National Level Technical Symposium EPICS 2K26", date: "26th February 2026", description: "Organized by Department of CSE - Cyber Security." },
      */
    ],
    mous: [
      /*
{ name: "EC-Council", purpose: "CEH Certification Training", year: "2022" }
      */
    ],
    placement: {
      /*
percentage: "92%", avgPackage: "INR 5.5 LPA", highestPackage: "INR 15 LPA", recruiters: ["Deloitte", "KPMG", "TCS", "Infosys", "Wipro"]
      */
      percentage: "N/A", avgPackage: "N/A", highestPackage: "N/A", recruiters: [],
    },
    studentProjects: [
      /*
{ title: "Network Vulnerability Scanner", students: "Team of 3", description: "Automated vulnerability scanning tool" },
      */
    ],
    subjects: [
      /*
{ name: "Network Security", semester: 4, type: "core" },
      { name: "Ethical Hacking", semester: 5, type: "core" },
      { name: "Cryptography", semester: 5, type: "core" },
      { name: "Digital Forensics", semester: 6, type: "core" },
      { name: "Cloud Security", semester: 7, type: "elective" },
      { name: "Malware Analysis", semester: 7, type: "elective" },
      */
    ],
    documents: [
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/CS%20Stock%20register.pdf" },
      { title: "BoS DTBU 2025-26", url: "https://mits.ac.in/public/uploads/departments/ff1445758c7e035a46406f1ad1313fc6.pdf" },
      { title: "BoS 2025-26", url: "https://mits.ac.in/public/uploads/departments/4d63589b6b4b722a7d486b5ed5985382.pdf" },
      { title: "IAAB 2025-26", url: "https://mits.ac.in/public/uploads/departments/42577665d2b14fd0d4a8bcb325c6b965.pdf" },
    ],
  },

  ai: {
    key: "ai",
    name: "Computer Science and Engineering (Artificial Intelligence)",
    shortName: "CSE-AI",
    established: "2020",
    bannerImage: deptImg("ai"),
    about: "The Department of Artificial Intelligence offers 4-year degree in Artificial Intelligence, which is established in the year 2020. The course is flexible and has been structured to meet the evolving needs of the IT industry. The College Academic Council, Board of Studies of the department strive to provide quality education and most advanced curriculum and syllabus to make the students industry ready and excel in the contemporary business world.\n\nB. Tech. in Artificial Intelligence (AI) is an undergraduate programme with advanced learning solutions imparting knowledge of advanced innovations like Artificial Intelligence, Machine Learning and Deep Learning. The main goal of artificial intelligence (AI) is to program computers to use example data or experience to solve a real-life / real-time problem.",
    goals: [
      "To maintain a high standard of education through outstanding teaching innovative curriculum and research training that reflect the changing needs of society.",
      "To attract highly motivated students with enthusiasm, attitude and interest in Artificial Intelligence.",
      "To pursue excellence in research and technology transfer.",
      "To increase the public awareness of departmental activities and the Artificial Intelligence profession."
    ],
    vision: "To develop socially responsible, globally competent and skilled professionals with ethics through education and research in the field of Artificial intelligence.",
    mission: [
      "To educate the students in fundamental principles of Mathematics, Statistics and Artificial Intelligence with the required infrastructure and well qualified faculty.",
      "To provide state-of-the art computing laboratory facilities for strengthening innovation, research & development.",
      "To motivate students to emerge as entrepreneurs with self-learning abilities, team spirit and leadership qualities through continuous industry-institute interaction."
    ],
    nbaAccredited: false,
    hod: { name: "Dr. R. Kalpana", designation: "Professor & Head", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Kalpana.JPG", profileUrl: "https://mits.ac.in/facultyprofile/80" },
    achievements: { consultancyAmount: "₹8+ Lakhs", researchProjects: "8+", patents: "6+", publications: "80+" },
    teachingApproach: { description: "Research-driven approach with GPU cluster access, Kaggle competitions, and generative AI projects.", points: ["GPU cluster computing access", "Kaggle & competitive ML", "Generative AI hands-on projects", "Industry capstone projects", "Research paper writing workshops"] },
    courses: ["Computer Science and Engineering (Artificial Intelligence)"],
    contactInfo: { email: "aihod@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      /*
{
        name: "Dr. R. Kalpana",
        designation: "Professor &amp; Head",
        qualification: "Ph.D. (Anna University)",
        email: "drrkalpana@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Kalpana.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/80"
      },
      {
        name: "Dr. Ben Sujin",
        designation: "Professor",
        qualification: "Ph.D. (Karunya University)",
        email: "drbensujin@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. Ben Sujin.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/564"
      },
      {
        name: "Dr. S. Satheesh Kumar",
        designation: "Assoc. Professor",
        qualification: "Ph.D. (Anna University)",
        email: "drssatheeshkumar@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. S. Satheesh Kumar.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/743"
      },
      {
        name: "Dr. K. Chokkanathan",
        designation: "Assoc. Professor",
        qualification: "Ph.D. (Veltech University)",
        email: "drkchokkanathan@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. K. Chokkanathan.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/121"
      },
      {
        name: "Dr. A. Poongodai",
        designation: "Asst. Professor",
        qualification: "Ph.D. (Pondicherry University)",
        email: "drapoongodai@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. A. Poongodai.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/557"
      },
      {
        name: "Dr. Vamsi Bandi",
        designation: "Asst. Professor",
        qualification: "Ph.D. (Lincoln University College, Malaysia)",
        email: "drvamsibandi@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. Vamsi Bandi.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/122"
      },
      {
        name: "Dr. Purandhar N",
        designation: "Asst. Professor",
        qualification: "Ph.D. (Anna University)",
        email: "drpurandharn@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. Purandhar N.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/609"
      },
      {
        name: "Dr. K. Hemalatha",
        designation: "Asst. Professor",
        qualification: "Ph.D. (SPMVV, Tirupathi)",
        email: "drkhemalatha@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Hemalatha.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/418"
      },
      {
        name: "Dr. R. Rampriya",
        designation: "Asst. Professor",
        qualification: "Ph.D. (Annamalai University )",
        email: "drrrampriya@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Rampriya.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/547"
      },
      {
        name: "Dr. Y. Ravi Raju",
        designation: "Asst. Professor",
        qualification: "Ph.D. (Kalinga University)",
        email: "dryraviraju@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. Y. Ravi Raju.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/155"
      },
      {
        name: "Mr. K. Chandra Sekhar",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (GITAM University)",
        email: "mrkchandrasekhar@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/K. Chandra Sekhar.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/494"
      },
      {
        name: "Mr. J. Viswanath",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D) (Jain University)",
        email: "mrjviswanath@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. J. Viswanath.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/129"
      },
      {
        name: "Mr. P. Raguraman",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D) (Jain University)",
        email: "mrpraguraman@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. P. Raguraman.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/427"
      },
      {
        name: "Mr. Praneel Kumar Peruru",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (JNTU Anantapur)",
        email: "mrpraneelkumarperuru@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. Praneel Kumar Peruru.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/676"
      },
      {
        name: "Mr. Vasudevan M",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D.) (Puducherry Technological University)",
        email: "mrvasudevanm@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. Vasudevan M.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/488"
      },
      {
        name: "Mr. Kiran Palakeeti",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (Puducherry Technological University)",
        email: "mrkiranpalakeeti@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/fe2eba45961fcbed70a1a5b29e7ea727.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/497"
      },
      {
        name: "Mr. Toralkar Pawan",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D.) (Visvesvaraya Technological University (VTU))",
        email: "mrtoralkarpawan@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. Toralkar Pawan.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/138"
      },
      {
        name: "Mr. K. Mahammad",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (JNTU, Anantapur)",
        email: "mrkmahammad@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. K. Mahammad.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/403"
      },
      {
        name: "Mrs. A. Naga Lakshmi",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (Amrita University)",
        email: "mrsanagalakshmi@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mrs. A. Naga Lakshmi.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/475"
      },
      {
        name: "Mrs. A. Esther Merlin",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (Visvesvaraya Technological University)",
        email: "mrsaesthermerlin@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mrs. A. Esther Merlin.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/659"
      },
      {
        name: "Ms. N. Mohana Priya",
        designation: "Asst. Professor",
        qualification: "M.Tech",
        email: "msnmohanapriya@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Ms. N. Mohana Priya.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/406"
      },
      {
        name: "Mr. Surya Bahadur",
        designation: "Asst. Professor",
        qualification: "M.Tech.",
        email: "mrsuryabahadur@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/surya-bahudur.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/722"
      },
      {
        name: "Mr. D. Jaganathan",
        designation: "Asst. Professor",
        qualification: "M.Tech",
        email: "mrdjaganathan@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. D. Jaganathan.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/457"
      },
      {
        name: "Mr. Sreenath Kocharala",
        designation: "Asst. Professor",
        qualification: "M.Tech.",
        email: "mrsreenathkocharala@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. Sreenath Kocharla.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/599"
      },
      {
        name: "Mr. K. Venkata Subramanyam",
        designation: "Asst. Professor",
        qualification: "M.Tech.",
        email: "mrkvenkatasubramanyam@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. K. Venkata Subramanyam.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1096"
      }
      */
    ],
    detailedAchievements: [
      /*
{ title: "Achievements Tab Status", description: "Official department tab currently indicates achievements will be updated soon.", type: "faculty" },
      { title: "AI Powered Solution Expo 2025-26", description: "Department conducted an innovation-driven AI/Industry 4.0 prototype demo day.", type: "student" },
      */
    ],
    facilities: [
      { name: "Digital Classrooms", description: "State-of-the-art digital classrooms support AI-enabled teaching workflows.", equipment: ["Digital boards", "Projectors", "Network-enabled systems"] },
      { name: "Department Labs", description: "Lab facilities are listed in department infrastructure for practical AI sessions.", equipment: ["Computing workstations", "Programming environments"] },
    ],
    patents: [
      /*
{ title: "AI-based Medical Diagnosis System", status: "Published", year: "2023" },
      { title: "Generative AI for Content Creation", status: "Filed", year: "2024" },
      { title: "Autonomous Drone Navigation using RL", status: "Filed", year: "2023" },
      */
    ],
    publications: [
      /*
{ title: "Publication Records", type: "journal", year: "Will be updated soon" },
      */
    ],
    consultancy: [{ title: "AI Model Development for Agri-Tech", agency: "Agri Startups", amount: "₹5 Lakhs" }],
    events: [
      /*
{ title: "AI Powered Solution Expo", date: "7th April 2026", description: "Innovation driven exhibition Demo Day for AI / Industry 4.0 prototypes organized by Department of CSE - Artificial Intelligence." },
      { title: "AI Innovation Workshop using LangChain and MCP", date: "17th March 2026", description: "Organized by Department of CSE - Artificial Intelligence." },
      { title: "Hands-on Workshop on AWS and Docker", date: "16th March 2026", description: "Industrial View of Cloud Computing workshop organized by Department of CSE - Artificial Intelligence." },
      */
    ],
    mous: [
      /*
{ name: "NVIDIA", purpose: "GPU Computing Partnership", year: "2022" },
      { name: "Google DeepMind", purpose: "Research Collaboration", year: "2023" },
      */
    ],
    placement: {
      /*
percentage: "96%", avgPackage: "₹8 LPA", highestPackage: "₹20 LPA", recruiters: ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "IBM"]
      */
      percentage: "N/A", avgPackage: "N/A", highestPackage: "N/A", recruiters: [],
    },
    studentProjects: [
      /*
{ title: "AI-Powered Medical Diagnosis Assistant", students: "Team of 4", description: "Deep learning model for X-ray analysis" },
      { title: "Chatbot using Large Language Models", students: "Team of 3", description: "Custom LLM-based conversational AI" },
      */
    ],
    subjects: [
      /*
{ name: "Machine Learning Fundamentals", semester: 3, type: "core" },
      { name: "Deep Learning", semester: 4, type: "core" },
      { name: "Natural Language Processing", semester: 5, type: "core" },
      { name: "Computer Vision", semester: 5, type: "core" },
      { name: "Reinforcement Learning", semester: 6, type: "core" },
      { name: "Generative AI", semester: 7, type: "elective" },
      { name: "Explainable AI", semester: 7, type: "elective" },
      { name: "AI Ethics & Responsible AI", semester: 8, type: "elective" },
      */
    ],
    documents: [
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/CAI%20Stock%20Register.pdf" },
      { title: "BOS 2025-26", url: "https://mits.ac.in/public/uploads/departments/c113d7cb15132aba80706010f82e7817.pdf" },
      { title: "IAAB-2025-26", url: "https://mits.ac.in/public/uploads/departments/ffb04bfeb3972fec2a32218964aecb15.pdf" },
      { title: "BOS 2024-25", url: "https://mits.ac.in/public/uploads/departments/4b0edb027df8d3f8c3c0c53679b5ff5b.pdf" },
    ],
  },

  aiml: {
    key: "aiml",
    name: "Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    shortName: "AI and ML",
    established: "2023",
    bannerImage: deptImg("ai&ml"),
    about: "The Department of Computer Science and Engineering (Artificial Intelligence and Machine Learning) and Computer Science and Engineering (Networks) was established in 2023. The department offers four-year undergraduate degree program designed to be flexible and aligned with the evolving demands of the information technology industry. The College Academic Council and the department's Board of Studies are committed to deliver a high-quality education with an advanced curriculum, ensuring that students are industry-ready and prepared to excel in the modern business environment.",
    vision: "To be a centre of excellence in Artificial Intelligence and Machine Learning, driving cutting-edge research, innovation, and academic excellence to contribute to technological advancements and societal progress.",
    mission: [
      "M1: To foster analytical thinking, problem-solving, and interdisciplinary knowledge for future Artificial Intelligence Professionals through innovative curriculum and Collaborative initiatives that contribute to scientific and technological progress.",
      "M2: To strengthen industry partnerships and entrepreneurial ventures to develop ethical AI solutions for socio-economic and technological development."
    ],
    nbaAccredited: false,
    hod: { name: "Dr. S. Padma", designation: "Assoc. Professor & Head", qualification: "Ph.D. (Bharathiar University)", image: "https://mits.ac.in/public/uploads/faculty/Dr. S. Padma.JPG", profileUrl: "https://mits.ac.in/facultyprofile/144" },
    achievements: { consultancyAmount: "₹8+ Lakhs", researchProjects: "8+", patents: "6+", publications: "80+" },
    teachingApproach: { description: "Research-driven approach with GPU cluster access, Kaggle competitions, and generative AI projects.", points: ["GPU cluster computing access", "Kaggle & competitive ML", "Generative AI hands-on projects", "Industry capstone projects", "Research paper writing workshops"] },
    courses: ["Computer Science and Engineering (Artificial Intelligence and Machine Learning)"],
    contactInfo: { email: "aimlhod@mits.ac.in", phone: "+91-9154291788; 8571-280255; 280706" },
    faculty: [
      /*
{
        name: "Mr. Sanath Hegde",
        designation: "Professor of Practice",
        qualification: "M.B.A. (IISC, Bangalore)",
        email: "sanathhegde@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. Sanath Hegde.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/884"
      },
      {
        name: "Dr. V. Chandra Sekhar",
        designation: "Professor of Practice",
        qualification: "Ph.D. (IIIT, SriCity)",
        email: "drchandrasekharv@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. V. Chandra Sekhar.png",
        profileUrl: "https://mits.ac.in/facultyprofile/1130"
      },
      {
        name: "Dr. Ramakanta Mohanty",
        designation: "Professor",
        qualification: "Ph.D. (Berhampur University)",
        email: "drramakantham@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/eb2a41b68e1a35df79af8f682114ed41.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1100"
      },
      {
        name: "Dr. M. Rajeswari",
        designation: "Assoc. Professor",
        qualification: "Ph.D. (Anna University)",
        email: "drrajeswarim@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. M. Rajeswari.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/744"
      },
      {
        name: "Dr. Kurumalla Suresh",
        designation: "Assoc. Professor",
        qualification: "Ph.D. (JNTUK)",
        email: "drsureshk@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. Kurumalla Suresh.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1110"
      },
      {
        name: "Dr. S. Padma",
        designation: "Assoc. Professor & Head",
        qualification: "Ph.D. (Bharathiar University)",
        email: "drpadmas@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. S. Padma.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/144"
      },
      {
        name: "Dr. Sandhya. E",
        designation: "Asst. Professor",
        qualification: "Ph.D. (SRMIST, Chennai)",
        email: "drsandhyae@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. Sandhya. E.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/501"
      },
      {
        name: "Dr. D. Sathyanarayanan",
        designation: "Asst. Professor",
        qualification: "Ph.D. (AMET University)",
        email: "drsathyanarayanand@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. Sathyanarayanan.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1127"
      },
      {
        name: "Dr. R. Praveen Kumar",
        designation: "Asst. Professor",
        qualification: "Ph.D. (NIT, Durgapur)",
        email: "drpraveenkumarr@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Praveen Kumar.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/628"
      },
      {
        name: "Dr. Shahnazeer C K",
        designation: "Asst. Professor",
        qualification: "Ph.D. (Pondicherry University)",
        email: "drshahnazeerck@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Dr. Shahnazeer C K.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1114"
      },
      {
        name: "Mr. V. Sivaraman",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D.) (Visvesvaraya Technological University)",
        email: "sivaramanv@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. V. Sivaraman.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/594"
      },
      {
        name: "Mr. P. Udayakumar",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D.) (VIT, Vellore)",
        email: "udayakumarp@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. P. Udayakumar.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/660"
      },
      {
        name: "Mr. C. Anbarasan",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D.) (Anna University, Chennai)",
        email: "anbarasanc@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. C. Anbarasan.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1107"
      },
      {
        name: "Mr. B. S. H. Shayeez Ahamed",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (Saveetha University)",
        email: "shayeezahamedbsh@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. B. S. H. Shayeez Ahamed.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/108"
      },
      {
        name: "Mrs. R. Usha",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (Saveetha University)",
        email: "ushar@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/P. Usha.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/107"
      },
      {
        name: "Mr. Rama Krushna Rath",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (IIIT-Sri City)",
        email: "ramakrushnar@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. Rama Krushna Rath.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1123"
      },
      {
        name: "Mr. Manoj Kumar K",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D) (Anna University)",
        email: "manojkumark@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. Manoj Kumar K.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1095"
      },
      {
        name: "Ms. Nighitha Varghese",
        designation: "Asst. Professor",
        qualification: "M.E., (Ph.D) (Anna University)",
        email: "nighithav@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Ms. Nighitha Varghese.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1111"
      },
      {
        name: "Mr. Tharakeswara Raju B",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (IIT, Tirupati)",
        email: "tharakeswararajub@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. Tharakeswara Raju B.png",
        profileUrl: "https://mits.ac.in/facultyprofile/684"
      },
      {
        name: "Mr. Subhas Das",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (IIIT, Nagpur)",
        email: "Subhasdas@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. Subhas Das.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/737"
      },
      {
        name: "Ms. Harsharani",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (VIT-AP)",
        email: "harsharani@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Ms. Harsharani.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1124"
      },
      {
        name: "Mrs. S. Annapurna Shobitha",
        designation: "Asst. Professor",
        qualification: "M.Tech., (Ph.D.) (Saveetha University)",
        email: "annapurnas@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mrs. S. Annapurna Shobitha.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1098"
      },
      {
        name: "Mr. G. Nithin",
        designation: "Asst. Professor",
        qualification: "MS",
        email: "nithing@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. G. Nithin.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/685"
      },
      {
        name: "Mr. M. Esakkiraj",
        designation: "Asst. Professor",
        qualification: "M.Tech",
        email: "esakkirajm@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Mr. M. Esakkiraj.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1094"
      },
      {
        name: "Ms. Shivani Jha",
        designation: "Asst. Professor",
        qualification: "M.Tech",
        email: "shivani@mits.ac.in",
        image: "https://mits.ac.in/public/uploads/faculty/Ms. Shivani Jha.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/1122"
      }
      */
    ],
    detailedAchievements: [
      /*
{ title: "Achievements Tab Status", description: "Official AIML achievements section currently marked to be updated shortly.", type: "faculty" },
      { title: "Industry Readiness Programme 2025-26", description: "Department conducted skill development programme for AIML engineers.", type: "student" },
      */
    ],
    facilities: [
      { name: "Class Rooms", description: "Department class room infrastructure is maintained for regular academic delivery.", equipment: ["Smart boards", "Projection systems"] },
      { name: "Labs", description: "Department labs are listed in infrastructure and are progressively expanded.", equipment: ["Computing systems", "Programming toolchains"] },
    ],
    patents: [
      /*
{ title: "AI-based Medical Diagnosis System", status: "Published", year: "2023" },
      { title: "Generative AI for Content Creation", status: "Filed", year: "2024" },
      { title: "Autonomous Drone Navigation using RL", status: "Filed", year: "2023" },
      */
    ],
    publications: [
      /*
{ title: "Journals", type: "journal", year: "To be updated shortly" },
      { title: "Conferences", type: "conference", year: "To be updated shortly" },
      */
    ],
    consultancy: [{ title: "AI Model Development for Agri-Tech", agency: "Agri Startups", amount: "₹5 Lakhs" }],
    events: [
      /*
{ title: "Guest Lecture on Knowledge and Skills for the AI-Driven World", date: "10th April 2026", description: "A Guest Lecture under AICTE DPS Scheme organized by Department of CSE - Artificial Intelligence and Machine Learning.", image: "" },
      { title: "Skill Development Programme on Industry Readiness for AIML Engineers", date: "6th April 2026", description: "A Skill Development Programme on 'Industry Readiness for an AIML Engineer' organized by Department of CSE - Artificial Intelligence and Machine Learning." },
      { title: "Six-Day Online Faculty Development Program on Cyber Defense with Deep Learning", date: "16th to 21st March 2026", description: "An Online Faculty Development Program on 'Next Generation Cyber Defense with Deep Learning' organized by Department of CSE - Artificial Intelligence and Machine Learning." },
      { title: "One-Day Workshop on Interactive Game Development using Scratch", date: "13th March 2026", description: "A One day workshop on 'Interactive Game Development using Scratch' organized by Department of Computer Science and Engineering - Artificial Intelligence and Machine Learning." },
      { title: "National Level Technical Symposium AIMEX 2K26", date: "5th March 2026", description: "A One Day National Level Technical Symposium AIMEX 2K26 organized by Department of CSE - Artificial Intelligence and Machine Learning." },
      { title: "One Day Seminar on Expert Systems in Engineering: A Few Case Studies", date: "23rd February 2026", description: "A One Day Seminar on 'Expert Systems in Engineering: A Few Case Studies' organized by Department of CSE - Artificial Intelligence and Machine Learning under AICTE Sponsored-Distinguished Professional Scheme (DPS)." },
      { title: "Technical Event SPARK 2K26", date: "18th February 2026", description: "A Technical Event 'SPARK 2K26' organized by Department of CSE - Artificial Intelligence & Machine Learning." },
      { title: "One-Day Hands-on Workshop on Object Detection using YOLO Model", date: "6th February 2026", description: "A One-Day Hands-on Workshop on 'Object Detection using YOLO Model' organized by Department of CSE-Artificial Intelligence & Machine Learning." },
      { title: "Technical Event Demo Verse: Multidisciplinary Projects", date: "3rd February 2026", description: "A Technical Event on 'Demo Verse: Multidisciplinary Projects' organized by Department of CSE-Artificial Intelligence & Machine Learning In Association with IEEE information Theory Society Student Chapter." },
      { title: "One Day Workshop on Effective Sales and Marketing Strategies for Start-ups", date: "29th January 2026", description: "A One Day Workshop on 'Effective Sales and Marketing Strategies for Start-ups' organized by Department of Computer Science & Engineering – Artificial Intelligence & Machine Learning." },
      { title: "Career Guidance Program", date: "29th January 2026", description: "A 'Career Guidance Program' organized by Department of Computer Science & Engineering – Artificial Intelligence & Machine Learning." },
      { title: "MoU Exchange between MITS and GUVI – HCL Corporation Pvt. Ltd", date: "2nd January 2026", description: "An MoU Exchange between MITS and GUVI – HCL Corporation Pvt. Ltd organized by Department of CSE - AI and Department of CSE (AI & ML) In collaboration with Start-Up Cell & ED Cell." },
      { title: "Guest Lecture on AI in Ethical Hacking", date: "24th December 2025", description: "A Guest Lecture on 'AI in Ethical Hacking' organized by Department of CSE-Artificial Intelligence & Machine Learning." },
      { title: "MoU Exchange with Hackers Infotech, Chennai", date: "24th December 2025", description: "An MoU Exchange Between Department of Computer Science and Engineering (AI and ML) & Hackers Infotech, Chennai organized by Department." },
      { title: "MoU Exchange with Woollemia Infosec Pvt. Ltd., Bengaluru", date: "22nd December 2025", description: "An MoU Exchange between Department of Computer Science and Engineering (AI and ML) & Woollemia Infosec Pvt. Ltd., Bengaluru." },
      { title: "Expert Talk on AI in Cyber Security", date: "22nd December 2025", description: "An Expert Talk on 'AI in Cyber Security' organized by Department of CSE-Artificial Intelligence & Machine Learning." },
      { title: "One Week Online International Faculty Development Programme on IoT & AI", date: "8th to 12th December 2025", description: "The Department of CSE (AI and ML) organized A One Week Online International Faculty Development Programme on 'The Intelligent City: Building Urban Futures with IoT & AI'." },
      { title: "One Day Workshop on Interdisciplinary Approaches to Innovation", date: "15th November 2025", description: "A One Day Workshop on 'Interdisciplinary Approaches to Innovation: AI, Networks, and Industry 4.0 dynamics' organized by Department of Computer Science & Engineering - Artificial Intelligence & Machine Learning." },
      { title: "One Day Domain-Specific Lecture on Deep Learning Models for Predictive Cyber Threat Intelligence", date: "14th November 2025", description: "A One Day Domain-Specific Lecture on 'Deep Learning Models for Predictive Cyber Threat Intelligence' organized by Department of Computer Science & Engineering - Artificial Intelligence & Machine Learning." },
      { title: "Technical Debate on War of Words", date: "5th November 2025", description: "A Technical Debate on 'War of Words' organized by Department of Computer Science & Engineering - Artificial Intelligence & Machine Learning." },
      { title: "One Day Seminar on Machine Learning Applications in Geographic Information Systems (GIS)", date: "5th November 2025", description: "A One Day Seminar on 'Machine Learning Applications in Geographic Information Systems (GIS)' organized by Department of Computer Science & Engineering - Artificial Intelligence & Machine Learning." },
      { title: "One Day Program on Bridging Code and Creativity", date: "4th November 2025", description: "A One Day Program on 'Bridging Code and Creativity: A Hands-on Introduction to GitHub and Blogs' organized by Department of Computer Science & Engineering - Artificial Intelligence & Machine Learning." },
      { title: "Technical Coding Quiz on Tech Escape Room", date: "3rd November 2025", description: "A Technical coding quiz on 'Tech Escape Room' organized by Department of Computer Science & Engineering - Artificial Intelligence & Machine Learning." },
      { title: "One-Day Guest Lecture on AI Beyond Boundaries", date: "29th October 2025", description: "A One-Day Guest Lecture on 'AI Beyond Boundaries: The Power of Multidisciplinary Collaboration' organized by Department of Computer Science and Engineering (AI and ML)." },
      { title: "One Day Workshop on Edge Computing in Practice", date: "28th October 2025", description: "A One Day Workshop on 'Edge Computing in Practice: Hosting from Your Own Hardware' organized by Department of Computer Science and Engineering (AI and ML) in association with the Indian Society for Technical Education (ISTE)." },
      { title: "Industrial Visit to ISTRAC/ISRO, Bengaluru", date: "24th October 2025", description: "An Industrial Visit to 'ISTRAC/ISRO, Bengaluru' organized by Department of Computer Science and Engineering (AI and ML)." },
      { title: "Department-level Internal Hackathon 2025", date: "16th September 2025", description: "The Department-level Internal Hackathon 2025 organized by Department of Computer Science and Engineering (AI and ML)." },
      { title: "One day Expert Talk on Robotics and AI", date: "11th September 2025", description: "A One day Expert Talk on 'Robotics and AI' organized by Department of Computer Science and Engineering (AI and ML)." },
      { title: "Two-Day Career Guidance Programme on Engineering Elevates and Enlightens", date: "9th to 10th September 2025", description: "A Two-Day Career Guidance Programme on 'Engineering Elevates and Enlightens' organized by Department of Computer Science and Engineering (AI and ML)." },
      { title: "One Day Workshop on Innovate for India: Roadmap to Hackathon", date: "6th September 2025", description: "One Day Workshop on 'Innovate for India: Roadmap to Hackathon' organized by Department of Computer Science and Engineering (AI and ML) in association with Academy for Creative Computing." },
      { title: "Parents - Teachers Meeting for 2nd Year Students", date: "3rd September 2025", description: "A Parents - Teachers meeting for 2nd Year students organized by Department of Computer Science & Engineering (Artificial Intelligence and Machine Learning)." },
      { title: "Hands-on Session on Cisco Packet Tracer Skills for All", date: "25th August 2025", description: "A hands-on session on 'Cisco Packet Tracer Skills for All' organized by Department of Computer Science & Engineering (Artificial Intelligence and Machine Learning)." },
      { title: "One Day Workshop on Beginner's Guide to Agentic AI", date: "22nd August 2025", description: "A One Day Workshop on 'Beginner's Guide to Agentic AI: Creating Intentional AI' organized by Department of Computer Science & Engineering (Artificial Intelligence and Machine Learning)." },
      { title: "Awareness Program on 7 Habits of Highly Effective Students", date: "18th to 21st August 2025", description: "An Awareness Program on '7 Habits of Highly Effective Students' organized by Department of Computer Science & Engineering - Artificial Intelligence & Machine Learning." },
      { title: "Parents - Teachers Meeting for B.Tech III Year Students", date: "2nd August 2025", description: "A Parents - Teachers meeting for B.Tech III Year students organized by Department of Computer Science & Engineering (Artificial Intelligence and Machine Learning)." },
      { title: "Voice of Love: A Tribute to Mothers", date: "8th May 2025", description: "The Department organized a heartfelt event on 'Voice of Love: A Tribute to Mothers' on celebration of Mother's Day." },
      { title: "National Level Technical Symposium AIMEX 2k25", date: "23rd April 2025", description: "A National Level Technical Symposium 'AIMEX 2k25' organized by Department of Computer Science and Engineering (Artificial Intelligence and Machine Learning)." },
      { title: "Faculty Development Program on Microsoft Azure AI Engineer Associate", date: "7th to 11th April 2025", description: "A Faculty Development Program on 'Microsoft Azure AI Engineer Associate' organized by Department of Computer Science and Engineering (Artificial Intelligence and Machine Learning) in association with ICT ACADEMY." },
      { title: "Mini CSR Training from IBM", date: "26th to 29th March 2025", description: "A Four-days training program on 'Mini CSR Training from IBM' organized by Department of CSE-AI & ML in association with ICT Academy & Department of CSE - AI." },
      { title: "One Day Seminar on Deep Learning (AI) in AgriTech and Healthcare", date: "25th March 2025", description: "A One Day Seminar on 'Deep Learning (AI) in AgriTech and Healthcare' organized by Department of Computer Science and Engineering (Artificial Intelligence and Machine Learning) in association with the IEEE Information Theory Society Student Chapter." },
      { title: "Workshop on AI & ML Product Development Bootcamp", date: "3rd to 5th March 2025", description: "A Workshop on 'AI & ML Product Development Bootcamp: From Idea to Deployment' organized by Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning in association with Industry Institute Interaction Cell (IIIC)." },
      { title: "One Day Training Program on Cybersecurity Awareness", date: "25th February 2025", description: "An One Day Training Program on 'Cybersecurity Awareness' organized by Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning." },
      { title: "3-Days Hands on Workshop on Web and Mobile App Development", date: "27th to 29th January 2025", description: "A 3-Days Hands on Workshop on 'Web and Mobile App Development: From Basics to Deployment' organized by Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning in association with Industry Institute Interaction Cell (IIIC)." },
      { title: "Awareness Programme on Internship and MoU", date: "23rd January 2025", description: "An Awareness Programme on 'Internship and MoU' organized by Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning." },
      { title: "One Week Online International Faculty Development Programme on Empowering Educators with AI", date: "30th December 2024 to 4th January 2025", description: "A One Week Online International Faculty Development Programme (FDP) on 'Empowering Educators with AI: From Research Tools to Generative Innovations' organized by Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning." },
      { title: "Inauguration of IEEE Information Theory Society Student Branch Chapter", date: "16th December 2024", description: "Inauguration of IEEE Information Theory Society Student Branch Chapter In Association with IEEE Student Chapter organized by Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning." },
      { title: "MoU Exchange with Menmozhi Technologies Pvt Ltd, Trichy", date: "2nd December 2024", description: "A MoU Exchange Between Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning & Menmozhi Technologies Pvt Ltd, Trichy." },
      { title: "Hands on Session on GenAI Tools and App Development", date: "2nd December 2024", description: "A Hands on Session on 'GenAI Tools and App Development' organized by Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning in association with Industry Institute Interaction Cell (IIIC)." },
      { title: "One Day Workshop on Tranquillizing Empathy", date: "30th November 2024", description: "A One Day Workshop on 'Tranquillizing Empathy' organized by Department of Computer Science and Engineering – Artificial Intelligence & Machine Learning in association with Indian Society for Technical Education (ISTE)." },
      { title: "Industry Collaboration Workshop on Data Science", date: "27th November 2024", description: "An 'Industry Collaboration – Workshop on Data Science' organized by Department of Computer Science & Engineering- Artificial Intelligence & Machine Learning in Association with IIIC - MITS." },
      { title: "MoU Signing with Xenovex Technologies, Chennai", date: "21st November 2024", description: "The Department signed a Memorandum of Understanding (MoU) with Xenovex Technologies, Chennai." },
      { title: "Expert Talk on Software Life Cycle", date: "21st November 2024", description: "An Expert Talk on 'Software Life Cycle' organized by Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning." },
      { title: "One-Day Workshop on Hands on Design Thinking", date: "13th November 2024", description: "A One-Day Workshop on 'Hands on Design Thinking' organized by Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning." },
      { title: "Awareness Program on Safe Mobile Application Usage for School Students", date: "12th November 2024", description: "An Awareness Program on 'Safe Mobile Application usage for School students' organized by Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning in association with MITS - NSS Unit." },
      { title: "MoU Exchange with Xenovex Technologies Private Limited, Chennai", date: "8th November 2024", description: "A MoU Exchange Between Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning & Xenovex Technologies Private Limited, Chennai." },
      { title: "Expert Talk on Artificial Intelligence and Machine Learning", date: "8th November 2024", description: "An Expert Talk on 'Artificial Intelligence and Machine Learning' organized by Department of Computer Science and Engineering – Artificial Intelligence & Machine Learning." },
      { title: "Guest Lecture on Basics of IPR and Patent Filing", date: "6th November 2024", description: "A Guest Lecture on 'Basics of IPR and Patent Filing' organized by Department of Computer Science and Engineering – Artificial Intelligence & Machine Learning in association with Institution Innovation Cell (IIC) & ED Cell." },
      { title: "Parents Meeting", date: "25th October 2024", description: "A 'Parents Meeting' organized by Department of Computer Science & Engineering - Artificial Intelligence & Machine Learning." },
      { title: "Career Counselling Session on Current Market Trends in IT", date: "29th October 2024", description: "A Career Counselling Session on 'Current Market Trends in IT' organized by Department of Computer Science and Engineering – Artificial Intelligence & Machine Learning in association with the ICT ACADEMY." },
      { title: "One-Day Seminar on Navigating IEEE Xplore", date: "25th October 2024", description: "A One-Day Seminar on 'Navigating IEEE Xplore: Essential Tool for Research and Development in Academia and Industry' organized by Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning." },
      { title: "Beta Version Release of Project - Automated Attendance Calculator", date: "23rd October 2024", description: "A 'Beta Version Release of Project – Automated Attendance Calculator' organized by Department of Computer Science & Engineering – Artificial Intelligence & Machine Learning." },
      { title: "One Day Workshop on IoT Applications", date: "26th September 2024", description: "A One Day Workshop on IoT Applications organized by Department of Computer Science & Engineering - Artificial Intelligence & Machine Learning." },
      { title: "One-Day Seminar on Harnessing Machine Learning for Electrical and Electronic Engineering", date: "24th September 2024", description: "A One-Day Seminar on 'Harnessing Machine Learning for Breakthroughs in Electrical and Electronic Engineering' organized by Department of Computer Science & Engineering - Artificial Intelligence & Machine Learning." },
      { title: "One Day Seminar on Applications of AI & ML in Civil Engineering", date: "19th September 2024", description: "A One Day Seminar on 'Applications of AI & ML in Civil Engineering' organized by Department of Computer Science & Engineering - Artificial Intelligence & Machine Learning." },
      { title: "One Day Workshop on IOT Applications", date: "6th September 2024", description: "A One Day Workshop on 'IOT Applications' organized by Department of Computer Science & Engineering - Artificial Intelligence & Machine Learning." },
      { title: "CISCO Networking Awareness Program", date: "2nd September 2024", description: "An Awareness Program 'CISCO Networking Awareness Program' organized by Department of Computer Science & Engineering - Artificial Intelligence & Machine Learning." },
      { title: "Departmental Level Hackathon", date: "30th August 2024", description: "A 'Departmental Level Hackathon' organized by Department of Computer Science & Engineering - Artificial Intelligence & Machine Learning in association with Institution's Innovation Council." },
      */
    ],
    mous: [
      /*
{ name: "NVIDIA", purpose: "GPU Computing Partnership", year: "2022" },
      { name: "Google DeepMind", purpose: "Research Collaboration", year: "2023" },
      */
    ],
    placement: {
      /*
percentage: "96%", avgPackage: "₹8 LPA", highestPackage: "₹20 LPA", recruiters: ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "IBM"]
      */
      percentage: "N/A", avgPackage: "N/A", highestPackage: "N/A", recruiters: [],
    },
    studentProjects: [
      /*
{ title: "AI-Powered Medical Diagnosis Assistant", students: "Team of 4", description: "Deep learning model for X-ray analysis" },
      { title: "Chatbot using Large Language Models", students: "Team of 3", description: "Custom LLM-based conversational AI" },
      */
    ],
    subjects: [
      /*
{ name: "Machine Learning Fundamentals", semester: 3, type: "core" },
      { name: "Deep Learning", semester: 4, type: "core" },
      { name: "Natural Language Processing", semester: 5, type: "core" },
      { name: "Computer Vision", semester: 5, type: "core" },
      { name: "Reinforcement Learning", semester: 6, type: "core" },
      { name: "Generative AI", semester: 7, type: "elective" },
      { name: "Explainable AI", semester: 7, type: "elective" },
      { name: "AI Ethics & Responsible AI", semester: 8, type: "elective" },
      */
    ],
    documents: [
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/Stock_Register_CSE_AIML.pdf" },
      { title: "BoS CSE (AI and ML) 2025-26", url: "https://mits.ac.in/public/uploads/departments/CSE_AIML_BOS_AY_2025-2026.pdf" },
      { title: "BoS CSE (AI and ML) DTBU 2025-26", url: "https://mits.ac.in/public/uploads/departments/MITS_Univ_CSE_AIML_BOS_AY_2025-2026.pdf" },
      { title: "IAAB CSE (AI and ML) 2025-26", url: "https://mits.ac.in/public/uploads/departments/CSE(AI and ML) IAAB 2025-26.pdf" },
    ],
  },

  mca: {
    key: "mca",
    name: "Master of Computer Applications",
    shortName: "MCA",
    established: "2004",
    bannerImage: deptImg("mca"),
    about: "The Department has grown steadily since its inception in 2004 and currently offers a two-year MCA program. The program governed by AICTE, New Delhi, and are affiliated with JNTU Ananthapuramu. The Department is committed to foster value-based education and socially responsible professionalism, contributing to the holistic development of students and society. Its primary objective is to educate and prepare students to become dynamic, competent, and knowledgeable professionals. The Department’s core strengths are excellent academic results, state-of-the-art computer laboratories, well-defined & well-documented academic and administrative processes, and comprehensive student counselling services encompassing both personal and academic guidance.\n\nThe Department was granted UGC Autonomous status in 2014 and has been successfully offering its programs in full compliance with all prescribed requirements. The College Academic Council and the Department’s Board of Studies continuously strive to deliver quality education through a contemporary and industry-oriented curriculum, equipping students with the skills and knowledge required to excel in today’s competitive and dynamic business environment.\n\nThe Department regularly organizes Faculty Development Programs, conferences, seminars, symposiums, and workshops focusing on emerging areas and advanced technologies. Guest lectures are conducted by eminent professors and experienced industry professionals from reputed IT organizations and top-ranked universities. The Department has an excellent placement record, with all eligible and competent students securing positions in renowned national and international organizations. Maintaining global standards in teaching and learning, achieving consistent placement success, and recording 100% admissions year after year are the hallmark achievements of the Department.\n\nThe M.C.A. program offered by the Department of Computer Applications is accredited by the National Board of Accreditation (NBA) under the All India Council for Technical Education (AICTE)",
    vision: "To be a center of Excellence in Computer Applications through academic Excellence, innovative research, digital transformation, ethical values and Community engagement, nurturing globally competent. Industry ready, and socially responsible professional for sustainable development.",
    mission: [
      "M1: Deliver quality and inclusive education through an industry –aligned curriculum, experimental learning, emerging technologies, and continuous curriculum development to develop competent computing professionals.",
      "M2: Foster research excellence, innovation, entrepreneurship, interdisciplinary collaboration, and lifelong learning through projects, funded research, publications, and consultancy, incubation and industry partnerships.",
      "M3: develop ethical leadership, professional competence. Global perspectives.communicaion skills, teamwork, and social responsibility by promoting community engagement, sustainable development, and responsible computing practices."
    ],
    goals: [
      "To equip students with the necessary skills to meet the challenges of the rapidly evolving computer and IT landscape by providing a strong academic foundation and practical competence, thereby enhancing their analytical abilities and making them valuable assets to any organization.",
      "To develop creative and versatile professionals who demonstrate strong ethical values, leadership qualities, and a commitment to social responsibility through comprehensive and relevant training.",
      "To provide excellent learning opportunities tailored to the interests, abilities, and career aspirations of learners."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. N. Naveen Kumar", designation: "Professor & Head", qualification: "Ph.D. (S V University, Tirupathi)", image: "https://mits.ac.in/public/uploads/faculty/Naveen Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/254" },
    achievements: { consultancyAmount: "₹6+ Lakhs", researchProjects: "6+", patents: "4+", publications: "90+" },
    teachingApproach: { description: "Outcome-based teaching with industry projects, case studies, and research-oriented labs.", points: ["Industry-oriented mini and major projects", "Hands-on training in full-stack and enterprise development", "Research paper and patent mentoring", "Guest lectures from IT professionals", "Internship-integrated learning"] },
    courses: ["Master of Computer Applications"],
    contactInfo: { email: "mcahod@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      /*
{ name: "Dr. S. V. S. Ganga Devi", designation: "Professor", qualification: "Ph.D. (Sri Padmavathi Mahila Visva Vidyalayam, Tirupathi)", image: "https://mits.ac.in/public/uploads/faculty/Dr. S. V. S. Ganga Devi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/253" },
      { name: "Dr. N. Naveen Kumar", designation: "Professor & Head", qualification: "Ph.D (S. V. University, Tirupathi)", image: "https://mits.ac.in/public/uploads/faculty/Naveen Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/254" },
      { name: "Dr. K. Nirmala Devi", designation: "Assoc. Professor", qualification: "Ph.D., (Anna university)", image: "https://mits.ac.in/public/uploads/faculty/Dr. K. Nirmala Devi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/600" },
      { name: "Dr.  K. Prathapchandran", designation: "Asst. Professor", qualification: "Ph.D. (The Gandhigram Rural Institute)", image: "https://mits.ac.in/public/uploads/faculty/Dr.  K. Prathapchandran.JPG", profileUrl: "https://mits.ac.in/facultyprofile/736" },
      { name: "Dr. R. Maruthamuthu", designation: "Asst. Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Maruthamuthu.JPG", profileUrl: "https://mits.ac.in/facultyprofile/260" },
      { name: "Dr. A. Althaf Ali", designation: "Asst. Professor", qualification: "Ph.D. (Bharathiar University)", image: "https://mits.ac.in/public/uploads/faculty/Althaf Ali.JPG", profileUrl: "https://mits.ac.in/facultyprofile/262" },
      { name: "Dr. Srinivasan Jagannathan", designation: "Asst. Professor", qualification: "Ph.D. (Bharathiar University)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Srinivasan Jagannathan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/263" },
      { name: "Dr. T. Saravanan", designation: "Asst. Professor", qualification: "Ph.D. (Bharathidasan University)", image: "https://mits.ac.in/public/uploads/faculty/T. Saravanan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/616" },
      { name: "Dr. N. Nirmala Devi", designation: "Asst. Professor", qualification: "Ph.D. (Dr.SNS RajaLakshmi Arts and Science College, Bharathiar University)", image: "https://mits.ac.in/public/uploads/faculty/Dr. N. Nirmala Devi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/544" },
      { name: "Dr. Radhika K", designation: "Asst. Professor", qualification: "Ph.D. (Bharathidasan University, Trichy)", image: "https://mits.ac.in/public/uploads/faculty/rad.JPG", profileUrl: "https://mits.ac.in/facultyprofile/611" },
      { name: "Dr. J. Jude Moses Anto Devakanth", designation: "Asst. Professor", qualification: "Ph.D. (Manonmaniam Sundaranar University)", image: "https://mits.ac.in/public/uploads/faculty/Dr. J. Jude Moses Anto Devakanth.JPG", profileUrl: "https://mits.ac.in/facultyprofile/634" },
      { name: "Dr. Saravanan Thirunavukarasu", designation: "Asst. Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Saravanan Thirunavukarasu.JPG", profileUrl: "https://mits.ac.in/facultyprofile/264" },
      { name: "Mrs. S. Suganya", designation: "Asst. Professor", qualification: "Ph.D. (SRM Institute of Science and Technology)", image: "https://mits.ac.in/public/uploads/faculty/S. Suganya MCA.JPG", profileUrl: "https://mits.ac.in/facultyprofile/639" },
      { name: "Mr. G. R. Hemanth Kumar", designation: "Asst. Professor", qualification: "M.Tech. (Nagarjuna University, Guntur)", image: "https://mits.ac.in/public/uploads/faculty/Hemanth.JPG", profileUrl: "https://mits.ac.in/facultyprofile/125" },
      { name: "Mr. S. Suresh", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Trichy)", image: "https://mits.ac.in/public/uploads/faculty/Suresh.JPG", profileUrl: "https://mits.ac.in/facultyprofile/268" },
      { name: "Mr. P. Hanok", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Tiruchirappalli)", image: "https://mits.ac.in/public/uploads/faculty/Hanook.JPG", profileUrl: "https://mits.ac.in/facultyprofile/462" },
      { name: "Mr. P. Seshu Kumar", designation: "Asst. Professor", qualification: "Ph.D. (JNTU Kakinada)", image: "https://mits.ac.in/public/uploads/faculty/Seshu Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/473" },
      { name: "Mrs. Roopa", designation: "Asst. Professor", qualification: "M.Tech. (Sri Sai Institute of Science and Technology, JNTUA)", image: "https://mits.ac.in/public/uploads/faculty/Roopa MCA.JPG", profileUrl: "https://mits.ac.in/facultyprofile/506" },
      { name: "Mr. Repana Mallikarjuna", designation: "Asst. Professor", qualification: "M.Tech. (Vellore Institute of Technology)", image: "https://mits.ac.in/public/uploads/faculty/malli.JPG", profileUrl: "https://mits.ac.in/facultyprofile/678" },
      { name: "Mrs. K. Kavitha", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Puducherry)", image: "https://mits.ac.in/public/uploads/faculty/Mrs. K. Kavitha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/460" },
      */
    ],
    detailedAchievements: [
      /*
{ title: "MCA Faculty Achievements 2025-26", description: "Department publishes year-wise faculty achievements in the official achievements tab.", type: "faculty" },
      { title: "MCA Faculty Achievements 2024-25", description: "Official annual records include academic and research accomplishments.", type: "faculty" },
      { title: "MCA Faculty Achievements 2023-24", description: "Achievements are maintained and updated year-wise.", type: "faculty" },
      */
    ],
    facilities: [
      { name: "Class Rooms", description: "Department has sufficient class rooms supporting regular academic activities.", equipment: ["Digital teaching aids", "Projection systems"] },
      { name: "Department Labs", description: "Labs are available beyond curriculum requirements and used through weekly schedules.", equipment: ["Programming workstations", "Practical lab infrastructure"] },
    ],
    patents: [
      /*
{ title: "Smart Workflow Automation for Campus Services", status: "Filed", year: "2024" },
      */
    ],
    publications: [
      /*
{ title: "Faculty Publications 2024-2025", type: "journal", year: "2024-25" },
      { title: "Faculty Publications 2023-2024", type: "journal", year: "2023-24" },
      { title: "Faculty Publications 2022-2023", type: "journal", year: "2022-23" },
      */
    ],
    consultancy: [{ title: "Web Application Development Support", agency: "Local Organizations", amount: "₹2 Lakhs" }],
    events: [
      /*
{ title: "Workshop on Machine Learning: From Fundamentals to Future Frontiers", date: "22nd December 2025", description: "Organized by Department of Computer Applications in association with ISTE, MITS." },
      { title: "Workshop on Generative AI Using Microservices Architecture", date: "13th June 2025", description: "One-day workshop organized by Department of Computer Applications in association with ISTE and IIC." },
      { title: "Workshop on NS3 for Cybersecurity through Cloud-based Innovations", date: "29th to 30th January 2025", description: "Two-day workshop organized by Department of Computer Applications in association with ISTE." },
      */
    ],
    mous: [
      /*
{ name: "Industry Partners (IT)", purpose: "Internships and project collaborations", year: "2024" }
      */
    ],
    placement: {
      /*
percentage: "95%", avgPackage: "₹8 LPA", highestPackage: "₹14 LPA", recruiters: ["TCS", "Infosys", "Wipro", "Accenture", "Cognizant"]
      */
      percentage: "N/A", avgPackage: "N/A", highestPackage: "N/A", recruiters: [],
    },
    studentProjects: [
      /*
{ title: "Enterprise Task Automation Platform", students: "Team of 4", description: "Workflow automation system for institutional operations" },
      { title: "AI-enabled Resume Screening Tool", students: "Team of 3", description: "ML-based profile matching for recruitment use-cases" },
      */
    ],
    subjects: [
      /*
{ name: "Advanced Algorithms", semester: 1, type: "core" },
      { name: "Software Architecture", semester: 1, type: "core" },
      { name: "Cloud Computing", semester: 2, type: "core" },
      { name: "Artificial Intelligence", semester: 2, type: "core" },
      { name: "Enterprise Application Development", semester: 3, type: "core" },
      { name: "Data Science for Applications", semester: 3, type: "elective" },
      { name: "Cyber Security for Applications", semester: 4, type: "elective" },
      { name: "DevOps and MLOps", semester: 4, type: "elective" },
      */
    ],
    documents: [
      { title: "BoS 2024-25", url: "https://mits.ac.in/public/uploads/departments/3ce2d90ae1fbe764f9eefdf900e2a803.pdf" },
      { title: "BoS 2023-24", url: "https://mits.ac.in/public/uploads/departments/40e13e2e004ed338002c36fc28347f68.pdf" },
      { title: "IAAB 2024-25", url: "https://mits.ac.in/public/uploads/departments/a81dde5b99179d390058f64e20235c06.pdf" },
      { title: "IAAB 2023-24", url: "https://mits.ac.in/public/uploads/departments/5add1cae928258f5fe7f0c97efe0fd58.pdf" },
    ],
  },

  mba: {
    key: "mba",
    name: "MBA",
    shortName: "MBA",
    established: "2004",
    bannerImage: deptImg("mba"),
    about: "The Department offers a full time M.B.A. programme affiliated to JNTUA, Anantapur governed by AICTE. The programme was started in the year 2004 with a very good infrastructure and an environment that is conducive for learning. It has been a hub of innovative activities and is constantly on the look out for the opportunities to collaborate with the industry as well as the educational institutions around the globe. The specializations offered are HR, Marketing, Systems and Finance.\n\nThe Department has obtained UGC-Autonomous Status in the year 2014 and is running the programme successfully by meeting all the requirements. The College Academic Council, Board of Studies of the department strive to provide quality education with the most advanced curriculum to make the students industry ready and excel in the contemporary business world.\n\nThe M.B.A. Programme under the Department of Management Studies was accredited by the National Board of Accreditation (NBA) of All India Council for Technical Education (AICTE).",
    vision: "To become a centre of academic excellence in management education, serving the region, nation, and the world through research relevance and community engagement while emphasising the importance of the individual.",
    mission: [
      "M1: To provide a dynamic and inclusive learning environment that fosters managerial competence, critical thinking, and an entrepreneurial mindset.",
      "M2: To promote research-driven and industry-integrated education that fosters innovation and prepares graduates to address real-world business challenges in a rapidly evolving global environment",
      "M3: To instil ethical leadership, professional values, and social responsibility through value-based pedagogy and experiential learning for the holistic development of the individual",
      "M4: To engage with the community and contribute to the sustainable socio-economic development of the region, nation, and the world through excellence in teaching, research, and outreach."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. Bhanu Sree Reddy", designation: "Professor & Dean-School of Management", qualification: "Ph.D. (Sri Venkateswara University)", image: "https://mits.ac.in/public/uploads/faculty/Bhanu Sree Reddy.JPG", profileUrl: "https://mits.ac.in/facultyprofile/701" },
    achievements: { consultancyAmount: "₹5+ Lakhs", researchProjects: "4+", patents: "0", publications: "50+" },
    teachingApproach: { description: "Case-study based pedagogy with industry mentorship and live consulting projects.", points: ["Harvard case study methodology", "Industry mentorship programs", "Business simulation exercises", "National case competitions", "Live consulting projects"] },
    courses: ["MBA"],
    contactInfo: { email: "mbahod@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      /*
{ name: "Dr. Bhanu Sree Reddy", designation: "Professor & Dean-School of Management", qualification: "Ph.D. (Sri Venkateswara University, Tirupati)", image: "https://mits.ac.in/public/uploads/faculty/Bhanu Sree Reddy.JPG", profileUrl: "https://mits.ac.in/facultyprofile/701" },
      { name: "Dr. Nagarajan. G", designation: "Professor", qualification: "PGDM-AICTE (ISBR)", image: "https://mits.ac.in/public/uploads/faculty/DSC_6987.JPG", profileUrl: "https://mits.ac.in/facultyprofile/636" },
      { name: "Dr. D. Pradeep Kumar", designation: "Professor & Registrar (I/c)", qualification: "Ph.D. (Sri Krishnadevaraya University, Anantapur)", image: "https://mits.ac.in/public/uploads/faculty/Dr. D. Pradeep.JPG", profileUrl: "https://mits.ac.in/facultyprofile/270" },
      { name: "Dr. N. Gangisetty", designation: "Professor", qualification: "Ph.D. (Sri Venkateswara University, Tirupati)", image: "https://mits.ac.in/public/uploads/faculty/Gangi Setty.JPG", profileUrl: "https://mits.ac.in/facultyprofile/271" },
      { name: "Dr. K. V. Geetha Devi", designation: "Assoc. Professor", qualification: "Ph.D. (S.K. University, Anantapur)", image: "https://mits.ac.in/public/uploads/faculty/DSC_6966.JPG", profileUrl: "https://mits.ac.in/facultyprofile/274" },
      { name: "Dr. N. Seshadri", designation: "Asst. Professor", qualification: "Ph.D. (J.N.T.U. Anantapuramu)", image: "https://mits.ac.in/public/uploads/faculty/DSC_6973.JPG", profileUrl: "https://mits.ac.in/facultyprofile/276" },
      { name: "Dr. Venkateswarlu Karumuri", designation: "Asst. Professor", qualification: "Ph.D. (Andhra university)", image: "https://mits.ac.in/public/uploads/faculty/DSC_6997.JPG", profileUrl: "https://mits.ac.in/facultyprofile/554" },
      { name: "Dr. E. Gnanaprasuna", designation: "Asst. Professor", qualification: "Ph.D. (S V University, Tirupati)", image: "https://mits.ac.in/public/uploads/faculty/Dr. E. Gnanaprasuna MBA.JPG", profileUrl: "https://mits.ac.in/facultyprofile/537" },
      { name: "Dr. B. Rajesh Kumar", designation: "Asst. Professor", qualification: "Ph.D. (Andhra University, Visakhapatnam)", image: "https://mits.ac.in/public/uploads/faculty/Dr. B. Rajesh Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/499" },
      { name: "Dr. G. Thouseef Ahamed", designation: "Asst. Professor", qualification: "Ph.D. (Sri Krishnadevaraya University, Anantapuramu)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7021.JPG", profileUrl: "https://mits.ac.in/facultyprofile/640" },
      { name: "Dr. V V Subba Rao Adhikari", designation: "Asst. Professor", qualification: "Ph.D. (School of Management & Labour Studies, Tata Institute of Social Sciences (TISS), Mumbai)", image: "https://mits.ac.in/public/uploads/faculty/subba.jpg", profileUrl: "https://mits.ac.in/facultyprofile/718" },
      { name: "Dr. Kosaraju Sireesha", designation: "Asst. Professor", qualification: "Ph.D. (SPMVV, Tirupati)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Kosaraju Sireesha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/712" },
      { name: "Dr. Prem Sundar. M", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology - Tiruchirappalli)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Prem Sundar. M.JPG", profileUrl: "https://mits.ac.in/facultyprofile/726" },
      { name: "Dr. Kolati Yeliyya", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology - Puducherry)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Kolati Yeliyya.JPG", profileUrl: "https://mits.ac.in/facultyprofile/727" },
      { name: "Mr. Roja Kiran", designation: "Asst. Professor", qualification: "Ph.D. (S.K. University, Anantapur)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7005.JPG", profileUrl: "https://mits.ac.in/facultyprofile/539" },
      { name: "Mr. V. Venkata Rao", designation: "Asst. Professor", qualification: "M.Phil. (S.V. University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7012.JPG", profileUrl: "https://mits.ac.in/facultyprofile/292" },
      { name: "Mr. B. Sreekanth", designation: "Asst. Professor", qualification: "M.B.A. (Edith Cowan University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. B. Sreekanth.JPG", profileUrl: "https://mits.ac.in/facultyprofile/399" },
      */
    ],
    detailedAchievements: [
      /*
{ title: "MBA Faculty Achievements 2024-25", description: "Department records faculty achievements year-wise in the achievements tab.", type: "faculty" },
      { title: "MBA Faculty Achievements 2023-24", description: "Annual faculty achievement records are maintained on official page.", type: "faculty" },
      { title: "MBA Faculty Achievements 2022-23", description: "Department publishes year-wise achievement updates for faculty.", type: "faculty" },
      */
    ],
    facilities: [
      { name: "Business Analytics Lab", description: "Data-driven decision making training", equipment: ["SPSS", "Excel Advanced", "Tableau"] },
      { name: "Finance & Trading Lab", description: "Stock market simulation", equipment: ["Bloomberg Terminal", "Trading software"] },
      { name: "Conference Hall", description: "Guest lectures and seminars", equipment: ["100-seat capacity", "AV equipment"] },
    ],
    patents: [],
    publications: [
      /*
{ title: "Faculty Publications 2024-2025", type: "journal", year: "2024-25" },
      { title: "Faculty Publications 2023-2024", type: "journal", year: "2023-24" },
      { title: "Faculty Publications 2022-2023", type: "journal", year: "2022-23" },
      */
    ],
    consultancy: [{ title: "Business Strategy Consulting", agency: "SMEs", amount: "₹2 Lakhs" }],
    events: [
      /*
{ title: "Industry Leader Talk on Global Business Strategy Post-2025 Trends", date: "15th April 2026", description: "An insightful session by senior executives from Fortune 500 companies discussing emerging global business opportunities and strategic frameworks in the post-pandemic era. Participants will learn about digital transformation, ESG integration, and market expansion strategies. Organized by Department of Management Studies." },
      { title: "National Case Study Competition on Business Innovation 2026", date: "8th April 2026", description: "A competitive platform where MBA teams present solutions to real-time business challenges from industry partners. Participants analyze complex case studies in marketing, finance, supply chain, and HR domains. Winners receive recognition and internship opportunities. Hosted by Department of Management Studies." },
      { title: "Workshop on Artificial Intelligence for Business Decision Making", date: "28th March 2026", description: "Hands-on training on leveraging AI and machine learning tools for business analytics, demand forecasting, and customer behavior prediction. Industry experts demonstrate real-world applications and tools used in management consulting. Organized in collaboration with IIC and industry partners." },
      { title: "Alumni Entrepreneurs Roundtable: Starting Your Business", date: "20th March 2026", description: "A panel discussion featuring MITS MBA alumni who have founded and scaled successful startups. Topics include funding strategies, market entry, team building, and managing growth. Interactive Q&A session with guidance on entrepreneurship. Organized by Department of Management Studies." },
      { title: "International Webinar on Supply Chain Resilience and Sustainability", date: "15th March 2026", description: "Speakers from global supply chain and logistics companies discuss building resilient and sustainable supply chains. Coverage includes nearshoring trends, automation, green logistics, and digital supplier networks. Registered participants receive certificates. Collaboration with CII and industry bodies." },
      { title: "Finance and Investment Summit 2026", date: "6th March 2026", description: "A full-day summit covering portfolio management, emerging investment sectors, cryptocurrency and blockchain in finance, and wealth management. Features presentations from banking leaders and market analysts. Includes networking session with finance industry professionals." },
      { title: "HR Leadership Conference on Future of Work 2026", date: "22nd February 2026", description: "Senior HR leaders from multinational corporations discuss organizational transformation, remote work strategy, talent acquisition in digital age, and employee wellness programs. Sessions include diversity and inclusion initiatives, upskilling strategies, and change management frameworks." },
      { title: "Marketing Strategy Workshop: Digital Transformation for Businesses", date: "14th February 2026", description: "Hands-on workshop on modern digital marketing strategies including social media marketing, SEO/SEM, content marketing, and customer relationship management. Industry practitioners share case studies from successful campaigns across FMCG, e-commerce, and B2B sectors." },
      { title: "Corporate Finance and Risk Management Seminar", date: "31st January 2026", description: "A comprehensive seminar on contemporary corporate finance practices including M&A strategies, financial modeling, risk assessment, and derivative instruments. Guest speakers from investment banks and corporate finance teams share insights on capital management and portfolio optimization." },
      { title: "Business Excellence and Entrepreneurial Leadership Lecture Series", date: "18th January 2026", description: "Inaugural lecture series featuring renowned business leaders discussing lessons in leadership, organizational culture, and building high-performing teams. Topics include ethical business practices, corporate governance, and sustainable business models for long-term value creation." },
      */
    ],
    mous: [
      /*
{ name: "ICFAI Business School", purpose: "Academic Exchange", year: "2021" },
      { name: "CII", purpose: "Industry Interaction", year: "2022" },
      */
    ],
    placement: {
      /*
percentage: "90%", avgPackage: "₹5 LPA", highestPackage: "₹12 LPA", recruiters: ["Deloitte", "KPMG", "HDFC", "ICICI", "Amazon", "Flipkart"]
      */
      percentage: "N/A", avgPackage: "N/A", highestPackage: "N/A", recruiters: [],
    },
    studentProjects: [
      /*
{ title: "Market Research for FMCG Product Launch", students: "Team of 5", description: "Primary and secondary research for new product positioning" },
      */
    ],
    subjects: [
      /*
{ name: "Principles of Management", semester: 1, type: "core" },
      { name: "Financial Accounting", semester: 1, type: "core" },
      { name: "Marketing Management", semester: 2, type: "core" },
      { name: "Human Resource Management", semester: 2, type: "core" },
      { name: "Business Analytics", semester: 3, type: "core" },
      { name: "Strategic Management", semester: 3, type: "core" },
      { name: "International Business", semester: 4, type: "elective" },
      { name: "Digital Marketing", semester: 4, type: "elective" },
      */
    ],
    documents: [
      { title: "Faculty Initiatives on Teaching and Learning", url: "https://mits.ac.in/assets/pdf/mba/Faculty Initiatives on Teaching and learning-MBA.pdf" },
      { title: "BoS 2024-25", url: "https://mits.ac.in/public/uploads/departments/9b48d30c4372e6d4448b7e1343864fb3.pdf" },
      { title: "IAAB 2024-25", url: "https://mits.ac.in/public/uploads/departments/1d8fb739bdb0a8a2ff230e7ca05b7ff5.pdf" },
      { title: "DAB 2024-25", url: "https://mits.ac.in/public/uploads/departments/c488b4a26a4da652bf7ccc3906c2637c.pdf" },
    ],
  },

  bsh: {
    key: "bsh",
    name: "Basic Sciences & Humanities",
    shortName: "BSH",
    established: "2004",
    bannerImage: deptImg("cse"),
    about: "The Department of Basic Sciences & Humanities offers foundational subjects including English and Foreign Languages, Mathematics, Physics, Chemistry, and Humanities. The department supports first-year engineering education through a structured and time-tested curriculum, communication and personality development, and preparation support for competitive exams. It operates under autonomous curriculum governance with continuous updates through academic bodies.",
    vision: "To become a centre of excellence in language and foundational competencies by empowering global communication and multidisciplinary academic readiness.",
    mission: [
      "To provide students with comprehensive education in language, sciences, and humanities with strong conceptual foundations.",
      "To nurture multilingual, culturally sensitive, and globally competent learners.",
      "To empower students to engage thoughtfully in diverse local and global social contexts."
    ],
    nbaAccredited: false,
    hod: { name: "Dr. Sudhakar Beedam", designation: "Assoc. Professor & Head (I/c) - English & Foreign Languages", qualification: "Ph.D. (EFLU, Hyderabad)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sudhakar Beedam.JPG", profileUrl: "https://mits.ac.in/facultyprofile/691.html" },
    achievements: { consultancyAmount: "-", researchProjects: "-", patents: "-", publications: "Year-wise records" },
    teachingApproach: {
      description: "Interdisciplinary foundational training with communication labs, core sciences, mathematics, and humanities modules integrated for first-year engineering outcomes.",
      points: [
        "Foundation courses for all engineering streams",
        "Language and communication skill development",
        "Analytical and mathematical reasoning training",
        "Laboratory-oriented physics and chemistry learning",
        "Bridge and induction academic support"
      ]
    },
    courses: [
      "Common Core Courses for B.Tech First Year",
      "English & Foreign Languages",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Humanities"
    ],
    contactInfo: { email: "humhod@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      /*
{ name: "Dr. Sudhakar Beedam", designation: "Assoc. Professor & Head (I/c)", qualification: "Ph.D. (EFLU, Hyderabad)", subDepartment: "Department of English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sudhakar Beedam.JPG", profileUrl: "https://mits.ac.in/facultyprofile/691.html" },
      { name: "Dr. S. Shanmuga Priya", designation: "Assoc. Professor", qualification: "Ph.D. (Sri Padmavathi Mahila Visva Vidyalayam (Women’s University), Tirupati, A.P.)", subDepartment: "Department of English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/Dr. S. Shanmuga Priya.JPG", profileUrl: "https://mits.ac.in/facultyprofile/281.html" },
      { name: "Dr. Bishnu Paramguru Mahapatra", designation: "Assoc. Professor", qualification: "Ph.D. (Berhampur University)", subDepartment: "Department of English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/Dr. Bishnu Paramguru Mahapatra.JPG", profileUrl: "https://mits.ac.in/facultyprofile/697.html" },
      { name: "Dr. P. Athahar", designation: "Assoc. Professor  & Senior Manager-Student Affairs", qualification: "Ph.D. (Dravidian University)", subDepartment: "Department of English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/sam.JPG", profileUrl: "https://mits.ac.in/facultyprofile/280.html" },
      { name: "Dr. B. Anitha", designation: "Sr. Asst. Professor", qualification: "TEFL/TESOL (London College of Teachers)", subDepartment: "Department of English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/Dr. B. Anitha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/413.html" },
      { name: "Dr. K. Lakshmi Devi", designation: "Asst. Professor", qualification: "Ph.D. (Sri Venkateswara University, Tirupati)", subDepartment: "Department of English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/lakshmidevi.png", profileUrl: "https://mits.ac.in/facultyprofile/321.html" },
      { name: "Dr.  G. Hemalatha", designation: "Asst. Professor", qualification: "PG Diploma (PG Diploma in Communicative English, School of Distance Education, Bharathiar University)", subDepartment: "Department of English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/Hemalatha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/552.html" },
      { name: "Dr. S. Mohankumar", designation: "Asst. Professor", qualification: "Ph.D. (VIT University, Chennai)", subDepartment: "Department of English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/Dr.Mohankumar S_English.jpg", profileUrl: "https://mits.ac.in/facultyprofile/330.html" },
      { name: "Dr. R. Sriganesh", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Tiruchirappalli)", subDepartment: "Department of English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Sriganesh.JPG", profileUrl: "https://mits.ac.in/facultyprofile/332.html" },
      { name: "Dr. Saktheeswar V. B.", designation: "Asst. Professor", qualification: "Ph.D. (Bharathiar University)", subDepartment: "Department of English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/Saktheeswar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/339.html" },
      { name: "Dr. Suresh Chimata", designation: "Asst. Professor", qualification: "Ph.D. (Acharya Nagarjuna University)", subDepartment: "Department of English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/sureshchimata.JPG", profileUrl: "https://mits.ac.in/facultyprofile/567.html" },
      { name: "Dr. M. Parvathi", designation: "Asst. Professor", qualification: "Ph.D. (S. V. University, Tirupati)", subDepartment: "Department of English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/Dr. M. Parvathi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/346.html" },
      { name: "Dr. Md Nasir Hossain", designation: "Asst. Professor", qualification: "Ph.D. (School of LL&I, MANU University (A Central University), Hyderabad)", subDepartment: "Department of English & Foreign Languages", image: "../public/uploads/faculty/Dr. Md Nasir Hossain.JPG", profileUrl: "https://mits.ac.in/facultyprofile/709.html" },
      { name: "Mr. Naresh Maruboina", designation: "Asst. Professor", qualification: "M.A. (Andhra University)", subDepartment: "Department of English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/naresh.JPG", profileUrl: "https://mits.ac.in/facultyprofile/545.html" },
      { name: "Dr. R. Saravana", designation: "Assoc. Professor & Head (I/c)", qualification: "Ph.D. (S. V. University, Tirupati)", subDepartment: "Department of Mathematics", image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Saravana.JPG", profileUrl: "https://mits.ac.in/facultyprofile/351.html" },
      { name: "Dr. K. V. Narasimha Murthy", designation: "Assoc. Professor", qualification: "Ph.D. (S. K. University, Anantapur)", subDepartment: "Department of Mathematics", image: "https://mits.ac.in/public/uploads/faculty/Dr. K.V N. Murthy.jpg", profileUrl: "https://mits.ac.in/facultyprofile/352.html" },
      { name: "Dr. M. Sudhakar Reddy", designation: "Assoc. Professor", qualification: "Ph.D. (Sri Venkateswara University)", subDepartment: "Department of Mathematics", image: "https://mits.ac.in/public/uploads/faculty/sudhakar.jpg", profileUrl: "https://mits.ac.in/facultyprofile/752.html" },
      { name: "Dr. T. Chalapathi", designation: "Asst. Professor", qualification: "Ph.D. (Sri VenkateswaraUniversity, Tirupati)", subDepartment: "Department of Mathematics", image: "https://mits.ac.in/public/uploads/faculty/Dr. T. Chalapathi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/446.html" },
      { name: "Dr. A. Subba Rao", designation: "Asst. Professor & Assistant Dean", qualification: "Ph.D. (S.V. University, Tirupati)", subDepartment: "Department of Mathematics", image: "https://mits.ac.in/public/uploads/faculty/6d4daba8d4b2624f111fde2850c07c8f.JPG", profileUrl: "https://mits.ac.in/facultyprofile/353.html" },
      { name: "Dr. P. Ramesh Reddy", designation: "Asst. Professor", qualification: "Ph.D. (S. K. University)", subDepartment: "Department of Mathematics", image: "https://mits.ac.in/public/uploads/faculty/DSC_7332.JPG", profileUrl: "https://mits.ac.in/facultyprofile/354.html" },
      { name: "Dr. Kata Sreelakshmi", designation: "Asst. Professor", qualification: "Ph.D. (Sri Padmavathi Mahila Visvavidyalayam)", subDepartment: "Department of Mathematics", image: "https://mits.ac.in/public/uploads/faculty/Dr. Kata Sreelakshmi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/536.html" },
      { name: "Dr. Bibin Mathew", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Calicut)", subDepartment: "Department of Mathematics", image: "https://mits.ac.in/public/uploads/faculty/Dr. Bibin Mathew.JPG", profileUrl: "https://mits.ac.in/facultyprofile/696.html" },
      { name: "Dr. Ramesh . P", designation: "Asst. Professor", qualification: "Ph.D. (Periyar University)", subDepartment: "Department of Mathematics", image: "https://mits.ac.in/public/uploads/faculty/DSC_7448.JPG", profileUrl: "https://mits.ac.in/facultyprofile/526.html" },
      { name: "Dr. Pujari Bharath Kumar", designation: "Asst. Professor", qualification: "Ph.D. (Vellore Institute of Technology, Amaravati)", subDepartment: "Department of Mathematics", image: "https://mits.ac.in/public/uploads/faculty/DSC_7461.JPG", profileUrl: "https://mits.ac.in/facultyprofile/529.html" },
      { name: "Dr. T. Thamizharasan", designation: "Asst. Professor", qualification: "Ph.D. (Vellore Institute of Technology, Vellore)", subDepartment: "Department of Mathematics", image: "https://mits.ac.in/public/uploads/faculty/DSC_7456.JPG", profileUrl: "https://mits.ac.in/facultyprofile/530.html" },
      { name: "Dr. Murugan. P", designation: "Asst. Professor", qualification: "Ph.D. (Pondicherry University)", subDepartment: "Department of Mathematics", image: "https://mits.ac.in/public/uploads/faculty/DSC_7451.JPG", profileUrl: "https://mits.ac.in/facultyprofile/580.html" },
      { name: "Dr. Bhanupriya C. K", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Calicut)", subDepartment: "Department of Mathematics", image: "https://mits.ac.in/public/uploads/faculty/Dr. Bhanupriya C. K.JPG", profileUrl: "https://mits.ac.in/facultyprofile/681.html" },
      { name: "Dr. Sangeeta Dhawan", designation: "Asst. Professor", qualification: "Ph.D. (Birla Institute of Technology & Science - Pilani, Hyderabad)", subDepartment: "Department of Mathematics", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sangeeta Dhawan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/693.html" },
      { name: "Dr. M. Chandra Sekhar", designation: "Assoc. Professor & Head", qualification: "International Research Professor (Yeungnam University, Republic of Korea)", subDepartment: "Department of Physics", image: "https://mits.ac.in/public/uploads/faculty/Dr. M. Chandra Sekhar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/372.html" },
      { name: "Dr. N. Nanda Kumar Reddy", designation: "Assoc. Professor & Associate Dean", qualification: "Ph.D. (Sri Venkateswara University)", subDepartment: "Department of Physics", image: "https://mits.ac.in/public/uploads/faculty/nanda.jpg", profileUrl: "https://mits.ac.in/facultyprofile/378.html" },
      { name: "Dr. Sanjaya Brahma", designation: "Research Asst. Professor", qualification: "Post Doctoral Fellow (National Cheng Kung University, Tainan, Taiwan)", subDepartment: "Department of Physics", image: "https://mits.ac.in/public/uploads/faculty/Sanjaya-Brahma.jpg", profileUrl: "https://mits.ac.in/facultyprofile/715.html" },
      { name: "Dr. N. Reddeppa", designation: "Asst. Professor", qualification: "Research Professor (Seoul National University of Science & Technology, Seoul, Republic of Korea)", subDepartment: "Department of Physics", image: "https://mits.ac.in/public/uploads/faculty/Dr. N. Reddeppa.JPG", profileUrl: "https://mits.ac.in/facultyprofile/370.html" },
      { name: "Dr. Jagadeesh Babu Bellam", designation: "Asst. Professor", qualification: "Post-Doctoral Fellow (University of Maine, Le Mans-CNRS, France)", subDepartment: "Department of Physics", image: "https://mits.ac.in/public/uploads/faculty/fbbd46bc1db8ec973c35f6bca55a3663.JPG", profileUrl: "https://mits.ac.in/facultyprofile/375.html" },
      { name: "Dr. Sunku Sreedhar", designation: "Asst. Professor", qualification: "Post-doctoral Fellow (SSCU, Indian Institute of Sciences, Bangalore, India)", subDepartment: "Department of Physics", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sunku Sreedhar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/379.html" },
      { name: "Dr. Rajesh Dagupati", designation: "Asst. Professor", qualification: "Researcher (The Alexander Dubček University of Trenčín, Slovakia, Europe)", subDepartment: "Department of Physics", image: "https://mits.ac.in/public/uploads/faculty/Dr. Rajesh Dagupati.JPG", profileUrl: "https://mits.ac.in/facultyprofile/550.html" },
      { name: "Dr. Charan Kuchi", designation: "Asst. Professor", qualification: "Ph.D. (Sri Venkateswara University, Tirupati)", subDepartment: "Department of Physics", image: "https://mits.ac.in/public/uploads/faculty/Charan Kuchi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/482.html" },
      { name: "Dr. Usuf Rahaman", designation: "Asst. Professor", qualification: "Ph.D. (Aligarh Muslim University)", subDepartment: "Department of Physics", image: "https://mits.ac.in/public/uploads/faculty/Dr. Usuf Rahaman.JPG", profileUrl: "https://mits.ac.in/facultyprofile/384.html" },
      { name: "Dr. K. Chandrakanta", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Rourkela)", subDepartment: "Department of Physics", image: "https://mits.ac.in/public/uploads/faculty/Dr. K. Chandrakanta.JPG", profileUrl: "https://mits.ac.in/facultyprofile/387.html" },
      { name: "Dr. Alok Barik", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Rourkela)", subDepartment: "Department of Physics", image: "https://mits.ac.in/public/uploads/faculty/Dr. Alok Barik.JPG", profileUrl: "https://mits.ac.in/facultyprofile/560.html" },
      { name: "Dr. K. Chandra Mohan", designation: "Assoc. Professor & Assistant Dean", qualification: "Ph.D. (S. V. University, Tirupati)", subDepartment: "Department of Chemistry", image: "https://mits.ac.in/public/uploads/faculty/Chandra Mohan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/376.html" },
      { name: "Dr. Gajanan Kunde", designation: "Assoc. Professor", qualification: "Postdoc Fellow (Indian Institute Technology, Delhi, India)", subDepartment: "Department of Chemistry", image: "https://mits.ac.in/public/uploads/faculty/kunde.jpg", profileUrl: "https://mits.ac.in/facultyprofile/710.html" },
      { name: "Dr. P. Amaladass", designation: "Asst. Professor", qualification: "Research professor (Korea University, South Korea)", subDepartment: "Department of Chemistry", image: "https://mits.ac.in/public/uploads/faculty/Amaladass.JPG", profileUrl: "https://mits.ac.in/facultyprofile/368.html" },
      { name: "Dr. Renjith Bhaskaran", designation: "Asst. Professor & Head", qualification: "Postdoctoral Research Associate (Texas A&M University)", subDepartment: "Department of Chemistry", image: "https://mits.ac.in/public/uploads/faculty/renjithbhaskar.png", profileUrl: "https://mits.ac.in/facultyprofile/377.html" },
      { name: "Dr. M. Balaji", designation: "Asst. Professor", qualification: "Post-Doctoral Fellow (Pusan National University, South Korea)", subDepartment: "Department of Chemistry", image: "https://mits.ac.in/public/uploads/faculty/Mr. T. Balaji.JPG", profileUrl: "https://mits.ac.in/facultyprofile/595.html" },
      { name: "Dr. K. V. Vivekananda", designation: "Asst. Professor", qualification: "Post Doctoral Research (Bhabha Atomic Research Centre, Mumbai, India)", subDepartment: "Department of Chemistry", image: "https://mits.ac.in/public/uploads/faculty/90949dbc63eb24468711fe5cf72dadcb.JPG", profileUrl: "https://mits.ac.in/facultyprofile/714.html" },
      { name: "Dr. Rajaram. R", designation: "Asst. Professor", qualification: "Post-doctoral Fellow (Indian Institute of Technology, Madras)", subDepartment: "Department of Chemistry", image: "https://mits.ac.in/public/uploads/faculty/Rajaram.JPG", profileUrl: "https://mits.ac.in/facultyprofile/491.html" },
      { name: "Dr. V. Raju", designation: "Asst. Professor", qualification: "Ph.D. (VIT University)", subDepartment: "Department of Chemistry", image: "https://mits.ac.in/public/uploads/faculty/6bba97aa042cf03062920fdcaa74422f.JPG", profileUrl: "https://mits.ac.in/facultyprofile/380.html" },
      { name: "Dr. K. Imran", designation: "Asst. Professor", qualification: "Ph.D. (SVU College of Sciences, S V University)", subDepartment: "Department of Chemistry", image: "https://mits.ac.in/public/uploads/faculty/Imran.JPG", profileUrl: "https://mits.ac.in/facultyprofile/381.html" },
      { name: "Dr. C. Venkateswara Raju", designation: "Asst. Professor", qualification: "Post Doctoral (Chung Ang University)", subDepartment: "Department of Chemistry", image: "https://mits.ac.in/public/uploads/faculty/raju.JPG", profileUrl: "https://mits.ac.in/facultyprofile/602.html" },
      { name: "Dr. Sanoop P", designation: "Asst. Professor", qualification: "Ph.D. (University of Kerala)", subDepartment: "Department of Chemistry", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sanoop P.JPG", profileUrl: "https://mits.ac.in/facultyprofile/500.html" },
      { name: "Dr. Ugrabadi Sahoo", designation: "Asst. Professor", qualification: "Ph.D. (National Institute of Technology, Rourkela)", subDepartment: "Department of Chemistry", image: "https://mits.ac.in/public/uploads/faculty/Ugrabadi Sahoo.JPG", profileUrl: "https://mits.ac.in/facultyprofile/620.html" },
      { name: "Dr. Prageetha G Raju", designation: "Professor", qualification: "Ph.D. (Osmania University)", subDepartment: "Department of Humanities", image: "https://mits.ac.in/public/uploads/faculty/pragathi.png", profileUrl: "https://mits.ac.in/facultyprofile/704.html" },
      { name: "Dr. N. Venkata Ramana", designation: "Asst. Professor", qualification: "Ph.D. (Sri Venkateswara University, Tirupati)", subDepartment: "Department of Humanities", image: "https://mits.ac.in/public/uploads/faculty/Humanities.JPG", profileUrl: "https://mits.ac.in/facultyprofile/390.html" },
      { name: "Mr. T. Gangadharam", designation: "Asst. Professor", qualification: "Ph.D. (S.V. University Tirupati)", subDepartment: "Department of Humanities", image: "https://mits.ac.in/public/uploads/faculty/Mr. T. Gangadharam.png", profileUrl: "https://mits.ac.in/facultyprofile/435.html" },
      { name: "Mr. Chandran Krishnamurthy", designation: "Asst. Professor", qualification: "Ph.D. (Karunya University, Coimbatore)", subDepartment: "Department of Humanities", image: "https://mits.ac.in/public/uploads/faculty/253e1b744bcefdad07d24bf986db6060.JPG", profileUrl: "https://mits.ac.in/facultyprofile/414.html" },
      { name: "Dr. C. Srinivasa Raju", designation: "Librarian", qualification: "Ph.D. (J.N.T.U. Kakinada)", subDepartment: "Department of Humanities", image: "https://mits.ac.in/public/uploads/faculty/Dr. C. Srinivasa Raju.JPG", profileUrl: "https://mits.ac.in/facultyprofile/393.html" },
      { name: "Dr. C. Damodharan", designation: "Physical Director", qualification: "Ph.D (Karpagam university, Coimbatore)", subDepartment: "Department of Humanities", image: "https://mits.ac.in/public/uploads/faculty/damodaran.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/394.html" },
      { name: "Mrs. Kadithi Radha", designation: "Assistant Physical Director", qualification: "Ph.D (Sri Krishnadevaraya University)", subDepartment: "Department of Humanities", image: "https://mits.ac.in/public/uploads/faculty/Mrs. Kadithi Radha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1088.html" },
      */
    ],
    detailedAchievements: [
      /*
{ title: "English & Foreign Languages Events", description: "International conferences, language-day programs, and communication-focused FDPs are organized regularly.", type: "faculty" },
      { title: "Mathematics Day and FDP Series", description: "Department conducts Mathematics Day events and specialized FDPs in computational intelligence and applied mathematics.", type: "faculty" },
      { title: "Physics and Chemistry Conferences", description: "Departments organize science-day celebrations, international symposia, and domain seminars for student engagement.", type: "student" }
      */
    ],
    facilities: [
      { name: "English & Foreign Languages", description: "Language and communication training facilities supporting professional communication and global competence." },
      { name: "Mathematics", description: "Mathematics support and foundational analytical learning modules for all engineering branches." },
      { name: "Physics", description: "Physics laboratory-based instruction for first-year engineering streams." },
      { name: "Chemistry", description: "Chemistry laboratory and foundational science practical facilities for first-year curriculum." },
      { name: "Humanities", description: "Humanities courses supporting ethics, society, and behavioural competency development." }
    ],
    patents: [],
    publications: [
      /*
{ title: "Department of English & Foreign Languages - Year-wise publications", type: "journal", year: "Published on official records" },
      { title: "Department of Mathematics - Year-wise publications", type: "journal", year: "Published on official records" },
      { title: "Department of Physics/Chemistry - Year-wise publications", type: "journal", year: "Published on official records" }
      */
    ],
    consultancy: [],
    events: [
      /*
{ title: "Cultural Studies and AI-Enabled ELT", date: "11-12 Mar 2026", description: "Organized by Department of English & Foreign Languages." },
      { title: "National Science Day Celebrations", date: "28 Feb 2026", description: "Organized by Department of Physics with NSS." },
      { title: "Mathematics Day Celebrations", date: "22 Dec 2025", description: "Organized by Department of Mathematics." },
      { title: "World Ozone Day", date: "16 Sep 2025", description: "Organized by Department of Chemistry." }
      */
    ],
    mous: [],
    placement: {
      /*
percentage: "N/A", avgPackage: "N/A", highestPackage: "N/A", recruiters: []
      */
      percentage: "N/A", avgPackage: "N/A", highestPackage: "N/A", recruiters: [],
    },
    studentProjects: [],
    subjects: [
      /*
{ name: "Communicative English", semester: 1, type: "core" },
      { name: "English for Professional Purposes", semester: 2, type: "core" },
      { name: "Engineering Mathematics", semester: 1, type: "core" },
      { name: "Engineering Physics", semester: 1, type: "core" },
      { name: "Engineering Chemistry", semester: 1, type: "core" },
      { name: "Physics Laboratory", semester: 1, type: "core" },
      { name: "Chemistry Laboratory", semester: 1, type: "core" },
      { name: "Communicative English Laboratory", semester: 1, type: "core" }
      */
    ],
    documents: [
      { title: "Department of English and Foreign Languages - BOS 2023-24", url: "https://mits.ac.in/public/uploads/departments/ca7f5260ce3ca09f652eb43f45f03f4f.pdf" },
      { title: "Department of Mathematics - BOS 2023-24", url: "https://mits.ac.in/public/uploads/departments/6e35d2d56bc6caf2ec6ec7f8ae0f471c.pdf" },
      { title: "Department of Physics - BOS 2023-24", url: "https://mits.ac.in/public/uploads/departments/Physics%20BoS%202023-2024.pdf" },
      { title: "Department of Chemistry - BOS 2024-25", url: "https://mits.ac.in/public/uploads/departments/R23_Chemistry_AY-2024-25.pdf" }
    ],
  },

  bba: {
    key: "bba",
    name: "BBA",
    shortName: "BBA",
    established: "2020",
    bannerImage: deptImg("bba"),
    isUnderUpdate: true,
    about: "The Department of Business Administration (BBA) provides foundational business, leadership, and management education aligned with contemporary industry requirements.",
    vision: "To develop ethically grounded, innovative business leaders and entrepreneurs equipped for the dynamic global economy.",
    mission: [
      "To provide high quality undergraduate business management education with practical application.",
      "To foster analytical, leadership, and entrepreneurial capabilities through experiential learning."
    ],
    nbaAccredited: false,
    hod: {
      name: "Dr. P. Bhanu Sree Reddy",
      designation: "Professor & Dean, Management Studies",
      qualification: "Ph.D.",
      image: "https://mits.ac.in/public/uploads/faculty/Dr. P. Bhanu Sree Reddy.JPG",
      profileUrl: "https://mits.ac.in/facultyprofile/339"
    },
    achievements: {
      consultancyAmount: "N/A",
      researchProjects: "N/A",
      patents: "N/A",
      publications: "N/A"
    },
    teachingApproach: {
      description: "Interactive case studies, industry seminars, and practical management exercises.",
      points: ["Case study analysis", "Business presentations", "Industry interactions"]
    },
    courses: ["BBA"],
    contactInfo: {
      email: "bbahod@mits.ac.in",
      phone: "+91-8571-280255"
    },
    faculty: [],
    detailedAchievements: [],
    facilities: [],
    patents: [],
    publications: [],
    consultancy: [],
    events: [],
    mous: [],
    placement: {
      percentage: "N/A",
      avgPackage: "N/A",
      highestPackage: "N/A",
      recruiters: []
    },
    studentProjects: [],
    subjects: [],
    documents: []
  },

  bca: {
    key: "bca",
    name: "BCA",
    shortName: "BCA",
    established: "2020",
    bannerImage: deptImg("bca"),
    isUnderUpdate: true,
    about: "The Department of Computer Applications (BCA) provides foundational and advanced education in computer applications, programming, and software systems.",
    vision: "To deliver top quality computing education and foster skilled software professionals capable of meeting IT industry challenges.",
    mission: [
      "To impart comprehensive knowledge of software development, web applications, and database management.",
      "To cultivate practical problem-solving skills and professional ethics in future computer specialists."
    ],
    nbaAccredited: false,
    hod: {
      name: "Dr. N. Naveen Kumar",
      designation: "Assoc. Professor & Head",
      qualification: "Ph.D.",
      image: "https://mits.ac.in/public/uploads/faculty/Dr. N. Naveen Kumar.JPG",
      profileUrl: "https://mits.ac.in/facultyprofile/272"
    },
    achievements: {
      consultancyAmount: "N/A",
      researchProjects: "N/A",
      patents: "N/A",
      publications: "N/A"
    },
    teachingApproach: {
      description: "Hands-on software development laboratory sessions and practical computing projects.",
      points: ["Practical programming labs", "Project-based learning", "Industry tool workshops"]
    },
    courses: ["BCA"],
    contactInfo: {
      email: "bcahod@mits.ac.in",
      phone: "+91-8571-280255"
    },
    faculty: [],
    detailedAchievements: [],
    facilities: [],
    patents: [],
    publications: [],
    consultancy: [],
    events: [],
    mous: [],
    placement: {
      percentage: "N/A",
      avgPackage: "N/A",
      highestPackage: "N/A",
      recruiters: []
    },
    studentProjects: [],
    subjects: [],
    documents: []
  },
};

// Helper to get all department keys
export const getAllDepartmentKeys = () => Object.keys(departmentsData);

// Helper to find department by key
export const getDepartmentByKey = (key: string): DepartmentData | undefined => {
  if (departmentsData[key]) return departmentsData[key];
  if (key === "cse-ds" || key === "csd" || key === "ds") return departmentsData.cseds;
  if (key === "cse-ai-ml" || key === "cai") return departmentsData.aiml;
  if (key === "cse-cs" || key === "csc" || key === "cs" || key === "cyber-security" || key === "csec") return departmentsData.csecs;
  if (key === "civil" || key === "ce" || key === "6") return departmentsData.ce;
  if (key === "eee" || key === "electrical-electronics-engineering" || key === "electrical-and-electronics-engineering" || key === "ee" || key === "2") return departmentsData.eee;
  if (key === "cst" || key === "4") return departmentsData.cst;
  return undefined;
};

export const aimlUnderGraduateData: UnderGraduateData = {
  programTitle: "Bachelor of Technology (B.Tech) - Computer Science & Engineering (AI & ML)",
  programOverview:
    "The Department of Computer Science and Engineering (Artificial Intelligence & Machine Learning) offers a 4-year undergraduate B.Tech program aligned with modern industry standards and emerging technology paradigms. The curriculum combines core computer science fundamentals with specialized topics in Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Generative AI. Designed under the autonomous R23 scheme, the course ensures hands-on practical mastery through GPU-enabled lab sessions, industry capstone projects, and research opportunities.",
  subTabs: [
    { id: "ug", label: "UG" },
    { id: "course-syllabus", label: "Course Syllabus" },
    { id: "timetable", label: "Timetable" }
  ],
  timeTables: [
    {
      groupTitle: "Academic Year 2024-25 Timetables",
      items: [
        {
          title: "B.Tech II Year II Sem Class Time Table (CSE-AI & ML) 2024-25",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/CSE%20AI%20&%20ML%20II%20Year%20II%20Sem%20Class%20TimeTable.pdf",
          academicYear: "2024-25",
          category: "Class Time Table"
        },
        {
          title: "B.Tech II Year I Sem Class Time Table (CSE-AI & ML) 2024-25",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/CSE%20AI%20&%20ML%20II%20Year%20I%20Sem%20Class%20TimeTable.pdf",
          academicYear: "2024-25",
          category: "Class Time Table"
        },
        {
          title: "Individual Faculty Time Tables (CSE-AI & ML) 2024-25",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/CSE%20AI%20&%20ML%20Faculty%20Individual%20TimeTable.pdf",
          academicYear: "2024-25",
          category: "Faculty Time Table"
        }
      ]
    }
  ],
  syllabusTables: [
    {
      title: "CSE - (AI & ML) First Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Linear Algebra and Calculus", type: "Theory", credits: "3" },
        { sno: "2", name: "Engineering Physics", type: "Theory", credits: "3" },
        { sno: "3", name: "Basic Electrical and Electronics Engineering", type: "Theory", credits: "3" },
        { sno: "4", name: "Introduction to Programming", type: "Theory", credits: "3" },
        { sno: "5", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "6", name: "Engineering Physics Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Electrical and Electronics Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Computer Programming Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "IT Workshop", type: "Lab", credits: "1" },
        { sno: "10", name: "NSS / NCC / Scouts and Guides / Community Service", type: "Activity", credits: "0.5" }
      ]
    },
    {
      title: "CSE - (AI & ML) First Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Communicative English", type: "Theory", credits: "2" },
        { sno: "2", name: "Differential Equations and Vector Calculus", type: "Theory", credits: "3" },
        { sno: "3", name: "Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "Basic Civil and Mechanical Engineering", type: "Theory", credits: "3" },
        { sno: "5", name: "Data Structures", type: "Theory", credits: "3" },
        { sno: "6", name: "Communicative English Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Chemistry Laboratory", type: "Lab", credits: "1" },
        { sno: "8", name: "Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Data Structures Laboratory", type: "Lab", credits: "1.5" },
        { sno: "10", name: "Health and Wellness, Yoga and Sports", type: "Activity", credits: "0.5" }
      ]
    },
    {
      title: "CSE - (AI & ML) Second Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Universal Human Values", type: "Theory", credits: "3" },
        { sno: "2", name: "Economics and Financial Accounting For Engineers", type: "Theory", credits: "2" },
        { sno: "3", name: "Probability and Statistics for Computer Science", type: "Theory", credits: "3" },
        { sno: "4", name: "Digital Logic and Computer Organization", type: "Theory", credits: "3" },
        { sno: "5", name: "Python Programming", type: "Theory", credits: "3" },
        { sno: "6", name: "Python Programming Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Database Management Systems Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "JAVA Programming", type: "Theory", credits: "2" }
      ]
    },
    {
      title: "CSE - (AI & ML) Second Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Discrete Mathematical Structures", type: "Theory", credits: "3" },
        { sno: "2", name: "Innovation and Incubation Courses", type: "Theory", credits: "2" },
        { sno: "3", name: "Machine Learning", type: "Theory", credits: "3" },
        { sno: "4", name: "Principles of Artificial Intelligence", type: "Theory", credits: "3" },
        { sno: "5", name: "Advanced Data Structures and Algorithms Analysis", type: "Theory", credits: "3" },
        { sno: "6", name: "Artificial Intelligence and Machine Learning Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Advanced Data Structures and Algorithms Analysis Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Full Stack Development - I", type: "Theory", credits: "2" },
        { sno: "9", name: "Environmental Science", type: "Theory", credits: "-" }
      ]
    },
    {
      title: "CSE - (Networks) First Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Linear Algebra and Calculus", type: "Theory", credits: "3" },
        { sno: "2", name: "Engineering Physics", type: "Theory", credits: "3" },
        { sno: "3", name: "Basic Electrical and Electronics Engineering", type: "Theory", credits: "3" },
        { sno: "4", name: "Introduction to Programming", type: "Theory", credits: "3" },
        { sno: "5", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "6", name: "Engineering Physics Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Electrical and Electronics Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Computer Programming Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "IT Workshop", type: "Lab", credits: "1" },
        { sno: "10", name: "NSS / NCC / Scouts and Guides / Community Service", type: "Activity", credits: "0.5" }
      ]
    },
    {
      title: "CSE - (Networks) First Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Communicative English", type: "Theory", credits: "2" },
        { sno: "2", name: "Differential Equations and Vector Calculus", type: "Theory", credits: "3" },
        { sno: "3", name: "Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "Basic Civil and Mechanical Engineering", type: "Theory", credits: "3" },
        { sno: "5", name: "Data Structures", type: "Theory", credits: "3" },
        { sno: "6", name: "Communicative English Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Chemistry Laboratory", type: "Lab", credits: "1" },
        { sno: "8", name: "Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Data Structures Laboratory", type: "Lab", credits: "1.5" },
        { sno: "10", name: "Health and Wellness, Yoga and Sports", type: "Activity", credits: "0.5" }
      ]
    },
    {
      title: "CSE - (Networks) Second Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Universal Human Values", type: "Theory", credits: "3" },
        { sno: "2", name: "Economics and Financial Accounting For Engineers", type: "Theory", credits: "2" },
        { sno: "3", name: "Probability and Statistics for Computer Science", type: "Theory", credits: "3" },
        { sno: "4", name: "Digital Logic and Computer Organization", type: "Theory", credits: "3" },
        { sno: "5", name: "Object-Oriented Programming Through JAVA", type: "Theory", credits: "3" },
        { sno: "6", name: "Operating Systems", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Object-Oriented Programming Through JAVA Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Operating Systems Laboratory", type: "Theory", credits: "2" },
        { sno: "9", name: "Python Programming", type: "Theory", credits: "2" }
      ]
    },
    {
      title: "CSE - (Networks) Second Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Discrete Mathematical Structures", type: "Theory", credits: "3" },
        { sno: "2", name: "Innovation and Incubation Courses", type: "Theory", credits: "2" },
        { sno: "3", name: "Data Communications and Computer Networks", type: "Theory", credits: "3" },
        { sno: "4", name: "Automata Theory and Compiler Design", type: "Theory", credits: "3" },
        { sno: "5", name: "Advanced Data Structures and Algorithms Analysis", type: "Theory", credits: "3" },
        { sno: "6", name: "Computer Networks Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Advanced Data Structures and Algorithms Analysis Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Data Science using Python", type: "Theory", credits: "2" },
        { sno: "9", name: "Environmental Science", type: "Theory", credits: "-" }
      ]
    }
  ]
};

export const aiUnderGraduateData: UnderGraduateData = {
  programTitle: "Bachelor of Technology (B.Tech) Program",
  programOverview:
    "The Department of Computer Science & Engineering (Artificial Intelligence) offers B.Tech program designed to equip the students with cutting-edge AI, Machine Learning, Deep Learning and Data Science skills. The curriculum combines strong foundational courses with advanced AI-driven specializations, preparing students for industry, research, and innovation.",
  subTabs: [
    { id: "ug", label: "UG Overview" },
    { id: "course-syllabus", label: "Course Syllabus" },
    { id: "timetable", label: "Timetable" }
  ],
  sections: [
    {
      title: "Curriculum",
      description:
        "The B.Tech program follows a structured R20 & R23 Curriculum, balancing core Computer Science Fundamentals with AI-focused subjects.",
      points: [
        "First Year: Foundational courses in Mathematics, Physics, Chemistry, and Programming.",
        "Second Year: Core computer science subjects like Data Structures, Operating Systems, and Algorithms, alongside AI Fundamentals.",
        "Third Year: Specialized courses in Machine Learning, Deep Learning, Big Data Analytics, and Computer Networks.",
        "Fourth Year: Advanced electives, industry-driven projects, and mandatory internships for real-world exposure.",
        "The program includes hands-on labs, research opportunities, and skill-oriented courses to ensure students graduate with industry-ready expertise."
      ]
    },
    {
      title: "Department Information",
      description:
        "Established in 2020, the Department of Computer Science & Engineering (Artificial Intelligence) has been focussing on AI-driven innovations, interdisciplinary learning, and industry collaborations. The curriculum is flexible and industry-relevant, ensuring students gain strong analytical, programming, and problem-solving skills required in today’s AI-driven world."
    },
    {
      title: "Department Activities",
      description:
        "The Department actively organizes faculty development programs (FDPs), Student Term Training Program (STTP), Expert Talks, Workshops, Hackathons, and Industry Collaborations to enhance academic and professional growth.",
      points: [
        "Industry Engagements: MoUs with leading AI firms, industry-driven internships, and guest lectures.",
        "Student Development: Hands-on workshops in Cloud Computing, DevOps, UI/UX, NLP, Robotics, and AI applications.",
        "Research & Conferences: Hosting national conferences, technical symposiums, and AI innovation challenges."
      ]
    },
    {
      title: "Computer Lab",
      description:
        "The Department boasts a state-of-the-art computer lab with high-performance systems and advanced software tools for AI research and development.",
      points: [
        "Model: Mantra Momentum 4599 Tower Work Station (MSI)",
        "Processor: Intel i7, 12th Generation",
        "RAM: 32GB DDR4",
        "HDD: 2 TB SATA + 500 GB SSD",
        "Graphic card: NVIDIA 12GB",
        "Monitor: Samsung 22’’ LED",
        "Keyboard & Mouse: Logitech",
        "Licensed & Open-Source Software (Python, Jupyter Notebook, MongoDB, Hadoop, Spark, IntelliJ, Anaconda Navigator etc.).",
        "Dedicated AI, ML, DL, and Big Data Labs for hands-on learning.",
        "CISCO Networking Infrastructure with high-speed internet connectivity.",
        "Smart Classroom Integration with EPSON LCD Projector & Delta 20 kVA UPS for uninterrupted learning.",
        "The lab provides an ideal environment for students to develop AI applications, conduct research, and work on real-world projects in AI domain."
      ]
    }
  ],
  timeTables: [
    {
      groupTitle: "Master Time Tables",
      items: [
        {
          title: "B.Tech II Year 2025-26 I Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/B.%20Tech%20II%20Year%202025-26%20I%20Semester%20Timetable-AI.pdf",
          academicYear: "2025-26",
          category: "Master Timetable"
        },
        {
          title: "B.Tech III Year 2025-26 I Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/B.%20Tech%20III%20Year%202025-26%20I%20Semester%20Timetable-AI.pdf",
          academicYear: "2025-26",
          category: "Master Timetable"
        },
        {
          title: "B.Tech IV Year 2025-26 I Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/B.%20Tech%20IV%20Year%202025-26%20I%20Semester%20Timetable-AI.pdf",
          academicYear: "2025-26",
          category: "Master Timetable"
        }
      ]
    },
    {
      groupTitle: "Individual Faculty Time Tables",
      items: [
        {
          title: "Individual Faculty Timetables",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/CAI-Faculty%20Individual%20Time%20Tables%20(2024-25).pdf",
          academicYear: "2024-25",
          category: "Faculty Timetable"
        }
      ]
    }
  ],
  syllabusTables: [
    {
      title: "AI - B.Tech I Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Communicative English", type: "Theory", credits: "2" },
        { sno: "2", name: "Linear Algebra and Calculus", type: "Theory", credits: "3" },
        { sno: "3", name: "Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "Basic Civil and Mechanical Engineering", type: "Theory", credits: "3" },
        { sno: "5", name: "Introduction to Programming", type: "Theory", credits: "3" },
        { sno: "6", name: "Communicative English Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Chemistry Laboratory", type: "Lab", credits: "1" },
        { sno: "8", name: "Computer Programming Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "10", name: "Health and Wellness, Yoga and Sports", type: "Activity", credits: "0.5" }
      ]
    },
    {
      title: "AI - B.Tech I Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Differential Equations and Vector Calculus", type: "Theory", credits: "3" },
        { sno: "2", name: "Engineering Physics", type: "Theory", credits: "3" },
        { sno: "3", name: "Basic Electrical and Electronics Engineering", type: "Theory", credits: "3" },
        { sno: "4", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "5", name: "Data Structures", type: "Theory", credits: "3" },
        { sno: "6", name: "Engineering Physics Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Electrical and Electronics Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "8", name: "IT Workshop", type: "Lab", credits: "1" },
        { sno: "9", name: "Data Structures Laboratory", type: "Lab", credits: "1.5" },
        { sno: "10", name: "NSS / NCC / Scouts and Guides / Community Service", type: "Activity", credits: "0.5" }
      ]
    },
    {
      title: "AI - B.Tech II Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Universal Human Values", type: "Theory", credits: "3" },
        { sno: "2", name: "Economics and Financial Accounting For Engineers", type: "Theory", credits: "2" },
        { sno: "3", name: "Probability and Statistics for Computer Science", type: "Theory", credits: "3" },
        { sno: "4", name: "Principles of Artificial Intelligence", type: "Theory", credits: "3" },
        { sno: "5", name: "Advanced Data Structures and Algorithms Analysis", type: "Theory", credits: "3" },
        { sno: "6", name: "Database Management Systems", type: "Theory", credits: "3" },
        { sno: "7", name: "Advanced Data Structures and Algorithms Analysis Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Database Management Systems Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Python programming", type: "Theory", credits: "2" }
      ]
    },
    {
      title: "AI - B.Tech II Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Discrete Mathematical Structures", type: "Theory", credits: "3" },
        { sno: "2", name: "Digital Logic and Computer Organization", type: "Theory", credits: "3" },
        { sno: "3", name: "Innovation and Incubation Courses", type: "Theory", credits: "2" },
        { sno: "4", name: "Machine Learning", type: "Theory", credits: "3" },
        { sno: "5", name: "Object-Oriented Programming Through JAVA", type: "Theory", credits: "3" },
        { sno: "6", name: "Artificial Intelligence and Machine Learning Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Object-Oriented Programming Through JAVA Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Full Stack Development-1", type: "Lab", credits: "2" },
        { sno: "9", name: "Environmental Science", type: "Theory", credits: "1.5" }
      ]
    },
    {
      title: "AI - B.Tech I Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Engineering Calculus", type: "Theory", credits: "3" },
        { sno: "2", name: "Applied Physics", type: "Theory", credits: "4" },
        { sno: "3", name: "Basic Electrical Engineering", type: "Theory", credits: "3" },
        { sno: "4", name: "Programming for Problem Solving (Python)", type: "Theory", credits: "3.5" },
        { sno: "5", name: "English for Professional Purposes Laboratory", type: "Theory", credits: "1" },
        { sno: "6", name: "Physics Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Electrical Engineering Laboratory", type: "Lab", credits: "1.5" }
      ]
    },
    {
      title: "AI - B.Tech I Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Professional English", type: "Theory", credits: "3" },
        { sno: "2", name: "Linear Algebra", type: "Theory", credits: "3" },
        { sno: "3", name: "Engineering Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "C Programming and Data Structures", type: "Theory", credits: "3" },
        { sno: "5", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "6", name: "Chemistry Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "C Programming and Data Structures Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Engineering and IT Workshop", type: "Lab", credits: "1.5" }
      ]
    },
    {
      title: "AI - B.Tech II Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Probability and Statistics for Computer Science", type: "Theory", credits: "3" },
        { sno: "2", name: "Computer System Architecture", type: "Theory", credits: "3" },
        { sno: "3", name: "Data Structures using Python", type: "Theory", credits: "3" },
        { sno: "4", name: "Object Oriented Programming - JAVA", type: "Theory", credits: "3" },
        { sno: "5", name: "Fundamentals of Artificial Intelligence", type: "Theory", credits: "3" },
        { sno: "6", name: "Data Structures using Python Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Object Oriented Programming - JAVA Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Fundamentals of Artificial Intelligence Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course – I (Refer Annexure - IV)", type: "Skill", credits: "2" },
        { sno: "10", name: "Environmental Science", type: "Theory", credits: "0" }
      ]
    },
    {
      title: "AI - B.Tech II Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Economics and Financial Accounting for Engineers", type: "Theory", credits: "3" },
        { sno: "2", name: "Discrete Mathematical Structures", type: "Theory", credits: "3" },
        { sno: "3", name: "Operating Systems Fundamentals", type: "Theory", credits: "3" },
        { sno: "4", name: "AI Tools, Techniques and Applications", type: "Theory", credits: "3" },
        { sno: "5", name: "Design and Analysis of Algorithms", type: "Theory", credits: "3" },
        { sno: "6", name: "Operating Systems Fundamentals Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "AI Tools, Techniques and Applications Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Design and Analysis of Algorithms Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course – II (Refer Annexure - IV)", type: "Lab", credits: "2" },
        { sno: "10", name: "Indian Constitution", type: "Theory", credits: "0" }
      ]
    },
    {
      title: "AI - B.Tech III Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Computer Networks", type: "Theory", credits: "3" },
        { sno: "2", name: "Database Management Systems", type: "Theory", credits: "3" },
        { sno: "3", name: "Machine Learning", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-1", type: "Theory", credits: "3" },
        { sno: "5", name: "Professional Elective-1", type: "Theory", credits: "3" },
        { sno: "6", name: "Database Management Systems Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Machine Learning Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Skill Oriented Course – III (Refer Annexure - IV)", type: "Lab", credits: "2" },
        { sno: "9", name: "Disaster Management", type: "Lab", credits: "0" },
        { sno: "10", name: "Summer Internship-1*", type: "Theory", credits: "1.5" }
      ]
    },
    {
      title: "AI - B.Tech III Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Big Data Analytics", type: "Theory", credits: "3" },
        { sno: "2", name: "Deep Learning", type: "Theory", credits: "3" },
        { sno: "3", name: "Data Science", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-II", type: "Theory", credits: "3" },
        { sno: "5", name: "Professional Elective-II", type: "Theory", credits: "3" },
        { sno: "6", name: "Big Data Analytics Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Deep Learning Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Data Science Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course – IV (Refer Annexure - IV)", type: "Lab", credits: "2" },
        { sno: "10", name: "Universal Human Values", type: "Theory", credits: "0" }
      ]
    },
    {
      title: "AI - B.Tech IV Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Professional Elective-III", type: "Theory", credits: "3" },
        { sno: "2", name: "Professional Elective-IV", type: "Theory", credits: "3" },
        { sno: "3", name: "Professional Elective-V", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-III", type: "Theory", credits: "3" },
        { sno: "5", name: "Open Elective-IV", type: "Theory", credits: "3" },
        { sno: "6", name: "Open Elective-V (Taken from Humanities & Social Science)", type: "Theory", credits: "3" },
        { sno: "7", name: "Skill Oriented Course – V (Refer Annexure - IV)", type: "Lab", credits: "2" },
        { sno: "8", name: "Summer Internship-2 *", type: "Project", credits: "3" }
      ]
    },
    {
      title: "AI - B.Tech IV Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Project Work, Seminar and Internship in Industry (6 months)", type: "Project", credits: "12" }
      ]
    }
  ]
};

export const cseUnderGraduateData: UnderGraduateData = {
  programTitle: "Bachelor of Technology (B.Tech) Program",
  programOverview:
    "The Department has the best undergraduate program required for the IT industry . The course curriculum for the undergraduate program gives the flexibility to the students to prepare for advanced specializations. The department commits to offer a set of electives so that students can plan their academic program in advance. The course structure provides a right mix of compulsory and elective courses.",
  sections: [
    {
      title: "Curriculum",
      description:
        "The B.Tech Program is divided into two distinct parts. A student has to go through a common program called Core Curriculum. Most of the core curriculum is completed within the first four semesters. The last four semesters have many professional courses, can initiate the student towards the topics in Computer Science & Engineering. The Core Curriculum consists of a package of compulsory courses in Physics, Chemistry, Mathematics, Engineering Sciences and Technical Arts.\n\nThe Professional Curriculum consists of courses and Project Work. There are some compulsory courses along with a significant number of professional electives as well."
    },
    {
      title: "Department Information",
      description:
        "Department of Computer Science & Engineering offers 4-year degree, which was established in the year 1998. The course is flexible and has been structured to meet the evolving needs of the IT industry. The Department is offering M.Tech - (C.S.E) for the academic year 2024-- 2025."
    },
    {
      title: "Department Activities",
      points: [
        "To train up the students to enhance their managerial skills on par with the industry",
        "Conducting IT games & classes to boost up the creative thoughts and to improve their personality"
      ]
    },
    {
      title: "Computer Lab",
      description:
        "The computer center is located in three floor circular building with centralized A/c and it is equipped with 575 P – IV systems with latest configuration and 3 servers. Internet facility is provided to all the students with an independent workstation."
    }
  ],
  subTabs: [
    { id: "ug", label: "UG" },
    { id: "course-syllabus", label: "Course Syllabus" },
    { id: "timetable", label: "Timetable" }
  ],
  timeTables: [
    {
      groupTitle: "Master Time Tables",
      items: [
        {
          title: "B.Tech III Year 2026-27 II Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/B.Tech%20III%20Year%202026-27%20II%20Semester%20Timetable.pdf",
          academicYear: "2026-27",
          category: "Master Timetable"
        },
        {
          title: "B.Tech IV Year 2026-27 II Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/B.Tech%20IV%20Year%202026-27%20II%20Semester%20Timetable.pdf",
          academicYear: "2026-27",
          category: "Master Timetable"
        },
        {
          title: "M.Tech I Year 2025-26 II Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/I%20M.Tech%20II%20Sem%202025-26%20Time%20Table.pdf",
          academicYear: "2025-26",
          category: "Master Timetable"
        },
        {
          title: "M.Tech II Year 2025-26 I Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/M.Tech%20II%20Year%202025-26%20I%20Semester%20Timetable.pdf",
          academicYear: "2025-26",
          category: "Master Timetable"
        }
      ]
    },
    {
      groupTitle: "Individual Faculty Time Tables",
      items: [
        {
          title: "Individual Faculty Timetables",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/Individual%20Time%20Tables%20CSE%202025.pdf",
          academicYear: "2024-25",
          category: "Faculty Timetable"
        }
      ]
    }
  ],
  syllabusTables: [
    {
      title: "CSE - First Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Linear Algebra and Calculus", type: "Theory", credits: "3" },
        { sno: "2", name: "Engineering Physics", type: "Theory", credits: "3" },
        { sno: "3", name: "Basic Electrical and Electronics Engineering", type: "Theory", credits: "3" },
        { sno: "4", name: "Introduction to Programming", type: "Theory", credits: "3" },
        { sno: "5", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "6", name: "Engineering Physics Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Electrical and Electronics Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Computer Programming Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "IT Workshop", type: "Lab", credits: "1" },
        { sno: "10", name: "NSS / NCC / Scouts and Guides / Community Service", type: "Audit", credits: "0.5" }
      ]
    },
    {
      title: "CSE - First Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Communicative English", type: "Theory", credits: "2" },
        { sno: "2", name: "Differential Equations and Vector Calculus", type: "Theory", credits: "3" },
        { sno: "3", name: "Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "Basic Civil and Mechanical Engineering", type: "Theory", credits: "3" },
        { sno: "5", name: "Data Structures", type: "Theory", credits: "3" },
        { sno: "6", name: "Communicative English Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Chemistry Laboratory", type: "Lab", credits: "1" },
        { sno: "8", name: "Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Data Structures Laboratory", type: "Lab", credits: "1.5" },
        { sno: "10", name: "Health and Wellness, Yoga and Sports", type: "Audit", credits: "0.5" }
      ]
    },
    {
      title: "CSE - Second Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Universal Human Values", type: "Theory", credits: "3" },
        { sno: "2", name: "Probability and Statistics for Computer Science", type: "Theory", credits: "3" },
        { sno: "3", name: "Digital Logic and Computer Organization", type: "Theory", credits: "3" },
        { sno: "4", name: "Advanced Data Structures and Algorithm Analysis", type: "Theory", credits: "3" },
        { sno: "5", name: "Object Oriented Programming Through Java", type: "Theory", credits: "3" },
        { sno: "6", name: "Advanced Data Structures and Algorithm Analysis Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Object Oriented Programming Through Java Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Python Programming", type: "Lab", credits: "2" },
        { sno: "9", name: "Environmental Science", type: "Theory", credits: "-" }
      ]
    },
    {
      title: "CSE - Second Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Economics and Financial Accounting For Engineers", type: "Theory", credits: "2" },
        { sno: "2", name: "Discrete Mathematical Structures", type: "Theory", credits: "3" },
        { sno: "3", name: "Innovation and Incubation Courses", type: "Theory", credits: "2" },
        { sno: "4", name: "Database Management Systems", type: "Theory", credits: "3" },
        { sno: "5", name: "Operating Systems", type: "Theory", credits: "3" },
        { sno: "6", name: "Software Engineering", type: "Theory", credits: "3" },
        { sno: "7", name: "Database Management Systems Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Operating Systems Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Full Stack Development - 1", type: "Theory", credits: "2" }
      ]
    },
    {
      title: "CSE - First Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Engineering Calculus", type: "Theory", credits: "4" },
        { sno: "2", name: "Applied Physics", type: "Theory", credits: "4" },
        { sno: "3", name: "Basic Electrical Engineering", type: "Theory", credits: "4" },
        { sno: "4", name: "Programming for Problem Solving (Python)", type: "Theory", credits: "3.5" },
        { sno: "5", name: "English for Professional Purposes Laboratory", type: "Lab", credits: "1" },
        { sno: "6", name: "Physics Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Electrical Engineering Laboratory", type: "Lab", credits: "1.5" }
      ]
    },
    {
      title: "CSE - First Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Professional English", type: "Theory", credits: "3" },
        { sno: "2", name: "Linear Algebra", type: "Theory", credits: "3" },
        { sno: "3", name: "Engineering Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "C Programming and Data Structures", type: "Theory", credits: "3" },
        { sno: "5", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "6", name: "Chemistry Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "C Programming and Data Structures Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Engineering and IT Workshop", type: "Lab", credits: "1.5" }
      ]
    },
    {
      title: "CSE - Second Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Probability Models and Statistics", type: "Theory", credits: "3" },
        { sno: "2", name: "Computer System Architecture", type: "Theory", credits: "3" },
        { sno: "3", name: "Data Structures", type: "Theory", credits: "3" },
        { sno: "4", name: "Object Oriented Programming using C++", type: "Theory", credits: "3" },
        { sno: "5", name: "Database Management System", type: "Theory", credits: "3" },
        { sno: "6", name: "Data Structures Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Object Oriented Programming using JAVA Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Database Management System Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course – I", type: "Skill", credits: "0" },
        { sno: "10", name: "Environmental Science", type: "Audit", credits: "0" }
      ]
    },
    {
      title: "CSE - Second Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Economics and Financial Accounting for Engineers", type: "Theory", credits: "3" },
        { sno: "2", name: "Discrete Mathematical Structures", type: "Theory", credits: "3" },
        { sno: "3", name: "Operating Systems Fundamentals", type: "Theory", credits: "3" },
        { sno: "4", name: "JAVA Programming", type: "Theory", credits: "3" },
        { sno: "5", name: "Design and Analysis of Algorithms", type: "Theory", credits: "3" },
        { sno: "6", name: "Operating Systems Fundamentals Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "JAVA Programming Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Design and Analysis of Algorithms Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course – II", type: "Skill", credits: "2" },
        { sno: "10", name: "Indian Constitution", type: "Audit", credits: "0" }
      ]
    },
    {
      title: "CSE - Third Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Formal Language and Automata Theory", type: "Theory", credits: "3" },
        { sno: "2", name: "Computer Networks", type: "Theory", credits: "3" },
        { sno: "3", name: "Machine Learning", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-I", type: "Theory", credits: "3" },
        { sno: "5", name: "Professional Elective-I", type: "Theory", credits: "3" },
        { sno: "6", name: "Computer Networks Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Computer Networks Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Skill Oriented Course – III", type: "Lab", credits: "2" },
        { sno: "9", name: "Disaster Management", type: "Audit", credits: "0" },
        { sno: "10", name: "Summer Internship-1*", type: "Project", credits: "1.5" }
      ]
    },
    {
      title: "CSE - Third Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Compiler Design", type: "Theory", credits: "3" },
        { sno: "2", name: "Internet of Things", type: "Theory", credits: "3" },
        { sno: "3", name: "Software Engineering", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-II", type: "Theory", credits: "3" },
        { sno: "5", name: "Professional Elective-II", type: "Theory", credits: "3" },
        { sno: "6", name: "Compiler Design Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Internet of Things Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Software Engineering Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course – IV", type: "Lab", credits: "2" },
        { sno: "10", name: "Universal Human Values", type: "Theory", credits: "0/3" }
      ]
    },
    {
      title: "CSE - Fourth Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Professional Elective-III", type: "Theory", credits: "3" },
        { sno: "2", name: "Professional Elective-IV", type: "Theory", credits: "3" },
        { sno: "3", name: "Professional Elective-V", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-III", type: "Theory", credits: "3" },
        { sno: "5", name: "Open Elective-IV", type: "Theory", credits: "3" },
        { sno: "6", name: "Open Elective-V (Taken from Humanities & Social Science)", type: "Theory", credits: "3" },
        { sno: "7", name: "Skill Oriented Course - V", type: "Lab", credits: "2" },
        { sno: "8", name: "Summer Internship-2*", type: "Project", credits: "3" }
      ]
    },
    {
      title: "CSE - Fourth Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Project Work / Internship", type: "Project", credits: "12" }
      ]
    }
  ]
};

export const csePostGraduateData: PostGraduateData = {
  programTitle: "Master of Technology (M.Tech) Program",
  programOverview:
    "The Department of Computer Science & Engineering offers M.Tech in Computer Science & Engineering. The curriculum is structured to provide advanced research, specialization, and comprehensive laboratory training in modern computing paradigms.",
  subTabs: [
    { id: "pg-course-syllabus", label: "Course Syllabus" }
  ],
  syllabusTables: [
    {
      title: "M.Tech - First Year I Semester - R24",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Advanced Data Structures and Algorithms", type: "Theory", credits: "3" },
        { sno: "2", name: "Advanced Databases", type: "Theory", credits: "3" },
        { sno: "3", name: "Professional Elective – I", type: "Theory", credits: "3" },
        { sno: "4", name: "Professional Elective – II", type: "Theory", credits: "3" },
        { sno: "5", name: "Advanced Data Structures and Algorithms Laboratory", type: "Lab", credits: "2" },
        { sno: "6", name: "Advanced Databases Laboratory", type: "Lab", credits: "2" },
        { sno: "7", name: "Research Methodology and IPR", type: "Lab", credits: "2" },
        { sno: "8", name: "Audit Course - I", type: "Theory", credits: "0" }
      ]
    },
    {
      title: "M.Tech - First Year II Semester - R24",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Deep Learning and its Applications", type: "Theory", credits: "3" },
        { sno: "2", name: "Advanced Computer Networks", type: "Theory", credits: "3" },
        { sno: "3", name: "Professional Elective – III", type: "Theory", credits: "3" },
        { sno: "4", name: "Professional Elective – IV", type: "Theory", credits: "3" },
        { sno: "5", name: "Deep Learning and its Applications Laboratory", type: "Lab", credits: "2" },
        { sno: "6", name: "Advanced Computer Networks Laboratory", type: "Lab", credits: "2" },
        { sno: "7", name: "Technical Seminar", type: "Lab", credits: "2" },
        { sno: "8", name: "Audit Course – II", type: "Theory", credits: "0" }
      ]
    }
  ]
};

export const mcaPostGraduateData: PostGraduateData = {
  programTitle: "Master of Computer Applications (MCA) Program",
  programOverview:
    "The Department has grown steadily since its inception in 2004 and currently offers a two-year MCA program. The program is governed by AICTE, New Delhi, and affiliated with JNTU Ananthapuramu. The Department was granted UGC Autonomous status in 2014 and is accredited by NBA.",
  subTabs: [
    { id: "obe", label: "OBE" },
    { id: "timetable", label: "Timetables" }
  ],
  obe: {
    overview:
      "In accordance with the philosophy of Outcome Based Education (OBE), the expected learning outcomes for students at various stages of the programme are clearly defined in advance. All academic activities are systematically planned and implemented to ensure their effective contribution toward the attainment of these outcomes. The curriculum structure, teaching–learning processes, assessment methods, infrastructural facilities, and co-curricular and extra-curricular activities are carefully aligned with the overall programme objectives.\n\nGiven below are the Programme Educational Objectives (PEOs) and Programme Outcomes (POs) of the M.C.A. programme offered by the Department.",
    peos: [
      {
        id: "PEO1",
        description: "Excel in the software industry with the application of comprehensive knowledge and skills."
      },
      {
        id: "PEO2",
        description: "Contribute by building innovative and sustainable solutions to the problems in the IT industry."
      },
      {
        id: "PEO3",
        description: "Become successful professionals, exhibiting social responsibility leading to lifelong learning."
      }
    ],
    posR22R24: [
      {
        id: "PO1",
        title: "Foundation Knowledge",
        description: "Apply knowledge of mathematics, programming logic and coding fundamentals for solution architecture and problem solving."
      },
      {
        id: "PO2",
        title: "Problem Analysis",
        description: "Identify, review, formulate and analyse problems for primarily focusing on customer requirements using critical thinking frameworks."
      },
      {
        id: "PO3",
        title: "Development of Solutions",
        description: "Design, develop and investigate problems with as an innovative approach for solutions incorporating ESG/SDG goals."
      },
      {
        id: "PO4",
        title: "Modern Tool Usage",
        description: "Select, adapt and apply modern computational tools such as development of algorithms with an understanding of the limitations including human biases."
      },
      {
        id: "PO5",
        title: "Individual and Teamwork",
        description: "Function and communicate effectively as an individual or a team leader in diverse and multidisciplinary groups. Use methodologies such as agile."
      },
      {
        id: "PO6",
        title: "Project Management and Finance",
        description: "Use the principles of project management such as scheduling, work breakdown structure and be conversant with the principles of Finance for profitable project management."
      },
      {
        id: "PO7",
        title: "Ethics",
        description: "Commit to professional ethics in managing software projects with financial aspects. Learn to use new technologies for cyber security and insulate customers from malware."
      },
      {
        id: "PO8",
        title: "Life-long learning",
        description: "Change management skills and the ability to learn, keep up with contemporary technologies and ways of working."
      }
    ],
    posR20: [
      {
        id: "PO1",
        title: "Computational Knowledge",
        description: "Apply knowledge of computing fundamentals, computing specialisation, mathematics, and domain knowledge appropriate for the computing specialisation to the abstraction and conceptualisation of computing models from defined problems and requirements."
      },
      {
        id: "PO2",
        title: "Problem Analysis",
        description: "Identify, formulate, research literature, and solve complex computing problems reaching substantiated conclusions using fundamental principles of mathematics, computing sciences, and relevant domain disciplines."
      },
      {
        id: "PO3",
        title: "Design/Development of solutions",
        description: "Design and evaluate solutions for complex computing problems, and design and evaluate systems, components, or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations."
      },
      {
        id: "PO4",
        title: "Conduct investigations of complex problems",
        description: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions."
      },
      {
        id: "PO5",
        title: "Modern tool usage",
        description: "Create, select, adapt and apply appropriate techniques, resources, and modern computing tools to complex computing activities, with an understanding of the limitations."
      },
      {
        id: "PO6",
        title: "Professional Ethics",
        description: "Understand and commit to professional ethics and cyber regulations, responsibilities, and norms of professional computing practice."
      },
      {
        id: "PO7",
        title: "Life-long Learning",
        description: "Recognize the need, and have the ability, to engage in independent learning for continual development as a computing professional."
      },
      {
        id: "PO8",
        title: "Project Management and Finance",
        description: "Demonstrate knowledge and understanding of the computing and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments."
      },
      {
        id: "PO9",
        title: "Communication efficacy",
        description: "Communicate effectively with the computing community, and with society at large, about complex computing activities by being able to comprehend and write effective reports, design documentation, make effective presentations, and give and understand clear instructions."
      },
      {
        id: "PO10",
        title: "Societal and Environmental Concern",
        description: "Understand and assess societal, environmental, health, safety, legal, and cultural issues within local and global contexts, and the consequential responsibilities relevant to professional computing practice."
      },
      {
        id: "PO11",
        title: "Individual and Team Work",
        description: "Function effectively as an individual and as a member or leader in diverse teams and in multidisciplinary environments."
      },
      {
        id: "PO12",
        title: "Innovation and Entrepreneurship",
        description: "Identify a timely opportunity and using innovation to pursue that opportunity to create value and wealth for the betterment of the individual and society at large."
      }
    ]
  },
  timetables: [
    {
      title: "MCA I Year 2024 - 2025 I Semester (Section A, B, C, D & E) Class Time Table (2024 Admitted Batch)",
      url: "https://mits.ac.in/assets/pdf/ca/MCA%20I%20Year%202024%20-%202025%20I%20Semester%20(Section%20A,B,C,D%20&%20E)%20Class%20Time%20Table%20(2024%20Admitted%20Batch).pdf"
    },
    {
      title: "MCA I Year 2024 - 2025 II Semester (Section A, B, C, D & E) Class Time Table (2024 Admitted Batch)",
      url: "https://mits.ac.in/assets/pdf/ca/MCA%20I%20Year%202024%20-%202025%20II%20Semester%20(Section%20A,B,C,D&%20E)%20Class%20Time%20Table%20(2024%20Admitted%20Batch)-min.pdf"
    },
    {
      title: "MCA II Year 2024 - 2025 I Semester (Section A, B & C) Class Time Table (2023 Admitted Batch)",
      url: "https://mits.ac.in/assets/pdf/ca/MCA%20II%20Year%202024%20-%202025%20I%20Semester%20(Section%20A,B&C)%20Class%20Time%20Table%20(2024%20Admitted%20Batch).pdf"
    }
  ]
};

export const mbaPostGraduateData: PostGraduateData = {
  programTitle: "Master of Business Administration (MBA)",
  programOverview:
    "In the relatively short period since it was established (2004), the Department of Management Studies at MITS has earned a place among the most distinguished institutions of higher learning in Management.\n\nWith good access to Bangalore, Chennai and Tirupati, DMS-MITS has become the principal point for people of talent and ambition in the region. It is always ahead in implanting the conceptual knowledge coupled with the practical applications in the young minds. DMS-MITS plays a big brother role in the region by organizing Management Meets, Workshops, Conferences for both students and faculty on a regular basis on the latest management practices, Innovative Management Strategies like SPSS, Supply Chain Management etc.\n\nResearch at DMS-MITS is a continuous activity and the fruits are transferred to the students not only in teaching but also by involving them in the research activity.",
  subTabs: [
    { id: "academics", label: "Academics" },
    {
      id: "academic-regulations",
      label: "Academic Regulations",
      externalUrl: "https://mits.ac.in/ugc-autonomous-exam-portal"
    }
  ],
  academicsOverview: {
    title: "Academics at MITS",
    paragraphs: [
      "In the relatively short period since it was established (2004), the Department of Management Studies at MITS has earned a place among the most distinguished institutions of higher learning in Management.",
      "With good access to Bangalore, Chennai and Tirupati, DMS-MITS has become the principal point for people of talent and ambition in the region. It is always ahead in implanting the conceptual knowledge coupled with the practical applications in the young minds. DMS-MITS plays a big brother role in the region by organizing Man-Meets, Workshops, Conferences for both students and faculty on a regular basis on the latest management practices., Innovative Management Strategies like SPSS, Supply Chain Management etc.",
      "Research at DMS-MITS is a continuous activity and the fruits are transferred to the students not only in teaching but also by involving them in the research activity."
    ]
  }
};

/**
 * Returns postgraduate program and syllabus data for any department.
 */
export function getDepartmentPostGraduate(deptKey: string): PostGraduateData | undefined {
  if (deptKey === "mba" || deptKey === "management-studies" || deptKey === "5") {
    return mbaPostGraduateData;
  }
  if (deptKey === "mca" || deptKey === "computer-applications" || deptKey === "18") {
    return mcaPostGraduateData;
  }
  if (deptKey === "cse") {
    return csePostGraduateData;
  }
  return undefined;
}

/**
 * Returns undergraduate program and syllabus data for any department.
 */
export const csedsUnderGraduateData: UnderGraduateData = {
  programTitle: "Bachelor of Technology (B.Tech) Program",
  programOverview:
    "The Department has the best undergraduate program required for the IT industry. The course curriculum for the undergraduate program gives the flexibility to the students to prepare for advanced specializations. The department commits to offer a set of electives so that students can plan their academic program in advance. The course structure provides a right mix of compulsory and elective courses.",
  subTabs: [
    { id: "ug", label: "UG" },
    { id: "course-syllabus", label: "Course Syllabus" },
    { id: "timetable", label: "Timetable" }
  ],
  sections: [
    {
      title: "Curriculum",
      description:
        "The B.Tech Program is divided into two distinct parts. A student has to go through a common program called Core Curriculum. Most of the core curriculum is completed in the first four semesters. The last four semesters have a large number of professional courses, that initiates the student to acquire the knowledge in the field of Artificial Intelligence and Data Science. The Core Curriculum consists of a package of compulsory courses in Physics, Chemistry, Mathematics, Engineering Sciences and Technical Arts.\n\nThe Professional Curriculum consists of courses and Project Work. There are some compulsory courses, but there is a significant number of professional electives as well."
    },
    {
      title: "Department Activities",
      description:
        "“To train up the students to increase their managerial skills on par with Industry. Conducting IT games to bring up the creative thoughts and conducting classes to improve their personality”."
    },
    {
      title: "Computer Lab",
      description:
        "The computer center is located in three floor circular building with centralized A/c and it is equipped with 575 P – IV systems with latest configuration and 3 servers. Internet facility is provided to all the students. Each student is provided with an independent workstation."
    }
  ],
  syllabusTables: [
    {
      title: "Data Science - B.Tech I Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Communicative English", type: "Theory", credits: "2" },
        { sno: "2", name: "Linear Algebra and Calculus", type: "Theory", credits: "3" },
        { sno: "3", name: "Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "Basic Civil and Mechanical Engineering", type: "Theory", credits: "3" },
        { sno: "5", name: "Introduction to Programming", type: "Theory", credits: "3" },
        { sno: "6", name: "Communicative English Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Chemistry Laboratory", type: "Lab", credits: "1" },
        { sno: "8", name: "Computer Programming Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "10", name: "Health and Wellness, Yoga and Sports", type: "Activity", credits: "0.5" }
      ]
    },
    {
      title: "Data Science - B.Tech I Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Differential Equations and Vector Calculus", type: "Theory", credits: "3" },
        { sno: "2", name: "Engineering Physics", type: "Theory", credits: "3" },
        { sno: "3", name: "Basic Electrical and Electronics Engineering", type: "Theory", credits: "3" },
        { sno: "4", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "5", name: "Data Structures", type: "Theory", credits: "3" },
        { sno: "6", name: "Engineering Physics Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Electrical and Electronics Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "8", name: "IT Workshop", type: "Lab", credits: "1" },
        { sno: "9", name: "Data Structures Laboratory", type: "Lab", credits: "1.5" },
        { sno: "10", name: "NSS / NCC / Scouts and Guides / Community Service", type: "Activity", credits: "0.5" }
      ]
    },
    {
      title: "Data Science - B.Tech II Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Universal Human Values", type: "Theory", credits: "3" },
        { sno: "2", name: "Economics and Financial Accounting For Engineers", type: "Theory", credits: "2" },
        { sno: "3", name: "Probability and Statistics for Computer Science", type: "Theory", credits: "3" },
        { sno: "4", name: "Database Systems", type: "Theory", credits: "3" },
        { sno: "5", name: "Design and Analysis of Algorithms", type: "Theory", credits: "3" },
        { sno: "6", name: "JAVA Programming", type: "Theory", credits: "3" },
        { sno: "7", name: "Database Systems Laboratory", type: "Lab", credits: "3" },
        { sno: "8", name: "JAVA Programming Laboratory", type: "Lab", credits: "3" },
        { sno: "9", name: "Python Programming", type: "Theory", credits: "3" }
      ]
    },
    {
      title: "Data Science - B.Tech II Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Discrete Mathematical Structures", type: "Theory", credits: "3" },
        { sno: "2", name: "Digital Logic and Computer Organization", type: "Theory", credits: "3" },
        { sno: "3", name: "Innovation and Incubation Courses", type: "Theory", credits: "2" },
        { sno: "4", name: "Introduction to Data Science", type: "Theory", credits: "3" },
        { sno: "5", name: "Data Engineering", type: "Theory", credits: "3" },
        { sno: "6", name: "Data Science Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Data Engineering Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Exploratory Data Analysis with Python", type: "Lab", credits: "2" },
        { sno: "9", name: "Environmental Science", type: "Lab", credits: "-" }
      ]
    },
    {
      title: "Data Science - B.Tech I Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Engineering Calculus", type: "Theory", credits: "3" },
        { sno: "2", name: "Applied Physics", type: "Theory", credits: "4" },
        { sno: "3", name: "Basic Electrical Engineering", type: "Theory", credits: "3" },
        { sno: "4", name: "Programming for Problem Solving (Python)", type: "Theory", credits: "3.5" },
        { sno: "5", name: "English for Professional Purposes Laboratory", type: "Theory", credits: "1" },
        { sno: "6", name: "Physics Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Electrical Engineering Laboratory", type: "Lab", credits: "1.5" }
      ]
    },
    {
      title: "Data Science - B.Tech I Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Professional English", type: "Theory", credits: "3" },
        { sno: "2", name: "Linear Algebra", type: "Theory", credits: "3" },
        { sno: "3", name: "Engineering Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "C Programming and Data Structures", type: "Theory", credits: "3" },
        { sno: "5", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "6", name: "Chemistry Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "C Programming and Data Structures Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Engineering and IT Workshop", type: "Lab", credits: "1.5" }
      ]
    },
    {
      title: "Data Science - B.Tech II Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Probability and Statistics for Computer Science", type: "Theory", credits: "3" },
        { sno: "2", name: "Computer System Architecture", type: "Theory", credits: "3" },
        { sno: "3", name: "Data Structures using Python", type: "Theory", credits: "3" },
        { sno: "4", name: "Object Oriented Programming - JAVA", type: "Theory", credits: "3" },
        { sno: "5", name: "Fundamentals of Artificial Intelligence", type: "Theory", credits: "3" },
        { sno: "6", name: "Data Structures using Python Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Object Oriented Programming - JAVA Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Fundamentals of Artificial Intelligence Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course – I (Refer Annexure - IV)", type: "Skill", credits: "2" },
        { sno: "10", name: "Environmental Science", type: "Audit", credits: "0" }
      ]
    },
    {
      title: "Data Science - B.Tech II Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Economics and Financial Accounting for Engineers", type: "Theory", credits: "3" },
        { sno: "2", name: "Discrete Mathematical Structures", type: "Theory", credits: "3" },
        { sno: "3", name: "Operating Systems Fundamentals", type: "Theory", credits: "3" },
        { sno: "4", name: "Python for Data Science", type: "Theory", credits: "3" },
        { sno: "5", name: "Design and Analysis of Algorithms", type: "Theory", credits: "3" },
        { sno: "6", name: "Operating Systems Fundamentals Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Python for Data Science Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Design and Analysis of Algorithms Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course – II (Refer Annexure - IV)", type: "Lab", credits: "2" },
        { sno: "10", name: "Indian Constitution", type: "Audit", credits: "0" }
      ]
    },
    {
      title: "Data Science - B.Tech III Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Database Management System", type: "Theory", credits: "3" },
        { sno: "2", name: "Data Visualization", type: "Theory", credits: "3" },
        { sno: "3", name: "Machine Learning", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-1", type: "Theory", credits: "3" },
        { sno: "5", name: "Professional Elective-1", type: "Theory", credits: "3" },
        { sno: "6", name: "Data Visualization Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Machine Learning Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Skill Oriented Course – III (Refer Annexure - IV)", type: "Lab", credits: "2" },
        { sno: "9", name: "Disaster Management", type: "Lab", credits: "0" },
        { sno: "10", name: "Summer Internship-1*", type: "Theory", credits: "1.5" }
      ]
    },
    {
      title: "Data Science - B.Tech III Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Big Data Analytics", type: "Theory", credits: "3" },
        { sno: "2", name: "Deep Learning", type: "Theory", credits: "3" },
        { sno: "3", name: "Computer Networks", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-II", type: "Theory", credits: "3" },
        { sno: "5", name: "Professional Elective-II", type: "Theory", credits: "3" },
        { sno: "6", name: "Big Data Analytics Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Deep Learning Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Computer Networks Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course – IV (Refer Annexure - IV)", type: "Lab", credits: "2" },
        { sno: "10", name: "Universal Human Values", type: "Theory", credits: "0" }
      ]
    },
    {
      title: "Data Science - B.Tech IV Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Professional Elective-III", type: "Theory", credits: "3" },
        { sno: "2", name: "Professional Elective-IV", type: "Theory", credits: "3" },
        { sno: "3", name: "Professional Elective-V", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-III", type: "Theory", credits: "3" },
        { sno: "5", name: "Open Elective-IV", type: "Theory", credits: "3" },
        { sno: "6", name: "Open Elective-V (Taken from Humanities & Social Science)", type: "Theory", credits: "3" },
        { sno: "7", name: "Skill Oriented Course – V (Refer Annexure - IV)", type: "Lab", credits: "2" },
        { sno: "8", name: "Summer Internship-2 *", type: "Project", credits: "3" }
      ]
    },
    {
      title: "Data Science - B.Tech IV Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Project Work, Seminar and Internship in Industry (6 months)", type: "Project", credits: "12" }
      ]
    }
  ],
  timeTables: [
    {
      groupTitle: "Master Time Tables",
      items: [
        {
          title: "B.Tech II Year 2026-27 I Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/DS-B.Tech%20II%20Year%202026-27%20I%20Semester%20Timetable.pdf",
          academicYear: "2026-27",
          category: "Master Timetable"
        },
        {
          title: "B.Tech III Year 2026-27 I Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/DS-B.Tech%20III%20Year%202026-27%20I%20Semester%20Timetable.pdf",
          academicYear: "2026-27",
          category: "Master Timetable"
        },
        {
          title: "B.Tech IV Year 2026-27 I Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/DS-B.Tech%20IV%20Year%202026-27%20I%20Semester%20Timetable.pdf",
          academicYear: "2026-27",
          category: "Master Timetable"
        }
      ]
    },
    {
      groupTitle: "Individual Faculty Time Tables",
      items: [
        {
          title: "Individual Faculty Timetables",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/CSE-DS-Individual%20Time%20Table-2025.pdf",
          academicYear: "2025",
          category: "Faculty Timetable"
        }
      ]
    }
  ]
};

export const csecsUnderGraduateData: UnderGraduateData = {
  programTitle: "Bachelor of Technology (B.Tech) - Computer Science & Engineering (Cyber Security)",
  programOverview:
    "The Department of Computer Science & Engineering in Cyber Security was established in 2020. The course offers 4-year degree, which is flexible and has been structured to meet the evolving needs of the IT industry. The course curriculum for the undergraduate program gives the flexibility to the students to prepare for advanced specializations. The department commits to offer a set of electives so that students can plan their academic program in advance. The course structure provides a right mix of compulsory and elective courses.",
  sections: [
    {
      title: "Curriculum",
      description:
        "The B.Tech Program is divided into two distinct parts. Every student has to go through a common program called Core Curriculum. Most of the core curriculum is completed within the first four semesters. The last four semesters have many professional courses, that initiate the student towards the topics in Computer Science & Engineering. The Core Curriculum consists of compulsory courses in Physics, Chemistry, Mathematics, Engineering Sciences and Technical Arts.\n\nThe Professional Curriculum consists of courses and Project Work. There are some compulsory courses along with a significant number of professional electives as well."
    },
    {
      title: "Department Information",
      description:
        "Department of Computer Science & Engineering in Cyber Security was established in 2020. The course offers 4-year degree, which is flexible and has been structured to meet the evolving needs of the IT industry."
    },
    {
      title: "Department Activities",
      description:
        "“To train the students to enhance their managerial skills on par with Industry the department conducts IT games and special classes on regular basis to trigger the creative thoughts of the students and to improve their personality.”"
    },
    {
      title: "Computer Lab",
      description:
        "The Cyber Security Computer Lab is located at South Block First Floor building with centralized A/c and it is equipped with 73 Systems with the latest Processor of i7 13th Generation with RAM 32GB DDR5, 1TB NVMe M.2 SSD, 8GB NVIDIA T1000 Graphic Card and HP-21.5” FHD Monitor. Internet facility is provided to all the students with an independent workstation."
    }
  ],
  subTabs: [
    { id: "ug", label: "UG" },
    { id: "course-syllabus", label: "Course Syllabus" },
    { id: "timetable", label: "Timetable" }
  ],
  syllabusTables: [
    {
      title: "Cyber Security - First Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Communicative English", type: "Theory", credits: "2" },
        { sno: "2", name: "Linear Algebra and Calculus", type: "Theory", credits: "3" },
        { sno: "3", name: "Engineering Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "Basic Civil and Mechanical Engineering", type: "Theory", credits: "3" },
        { sno: "5", name: "Introduction to Programming", type: "Theory", credits: "3" },
        { sno: "6", name: "Communicative English Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Engineering Chemistry Laboratory", type: "Lab", credits: "1" },
        { sno: "8", name: "Computer Programming Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "10", name: "Health and Wellness, Yoga and Sports", type: "Audit", credits: "0.5" }
      ]
    },
    {
      title: "Cyber Security - First Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Differential Equations and Vector Calculus", type: "Theory", credits: "3" },
        { sno: "2", name: "Engineering Physics", type: "Theory", credits: "3" },
        { sno: "3", name: "Basic Electrical and Electronics Engineering", type: "Theory", credits: "3" },
        { sno: "4", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "5", name: "Data Structures", type: "Theory", credits: "3" },
        { sno: "6", name: "Engineering Physics Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Electrical and Electronics Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "8", name: "IT Workshop", type: "Lab", credits: "1" },
        { sno: "9", name: "Data Structures Laboratory", type: "Lab", credits: "1.5" },
        { sno: "10", name: "NSS / NCC / Scouts and Guides / Community Service", type: "Audit", credits: "0.5" }
      ]
    },
    {
      title: "Cyber Security - Second Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Universal Human Values", type: "Theory", credits: "3" },
        { sno: "2", name: "Economics and Financial Accounting For Engineers", type: "Theory", credits: "2" },
        { sno: "3", name: "Discrete Mathematical Structures", type: "Theory", credits: "3" },
        { sno: "4", name: "Digital Logic and Computer Organization", type: "Theory", credits: "3" },
        { sno: "5", name: "Advanced Data Structures and Algorithm Analysis", type: "Theory", credits: "3" },
        { sno: "6", name: "Database Management Systems", type: "Theory", credits: "3" },
        { sno: "7", name: "Advanced Data Structures and Algorithm Analysis Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Database Management Systems Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Python programming", type: "Theory", credits: "2" }
      ]
    },
    {
      title: "Cyber Security - Second Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Probability and Statistics for Computer Science", type: "Theory", credits: "3" },
        { sno: "2", name: "Innovation and Incubation Courses", type: "Theory", credits: "2" },
        { sno: "3", name: "Object-Oriented Programming Through JAVA", type: "Theory", credits: "3" },
        { sno: "4", name: "Operating Systems", type: "Theory", credits: "3" },
        { sno: "5", name: "Computer Networks", type: "Theory", credits: "3" },
        { sno: "6", name: "Object-Oriented Programming Through JAVA Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Computer Networks Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Full Stack Development-1", type: "Lab", credits: "2" },
        { sno: "9", name: "Environmental Science", type: "Theory", credits: "0" }
      ]
    },
    {
      title: "Cyber Security - B.Tech I Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Engineering Calculus", type: "Theory", credits: "4" },
        { sno: "2", name: "Applied Physics", type: "Theory", credits: "4" },
        { sno: "3", name: "Basic Electrical Engineering", type: "Theory", credits: "4" },
        { sno: "4", name: "Programming for Problem Solving (Python)", type: "Theory", credits: "3.5" },
        { sno: "5", name: "English for Professional Purposes Laboratory", type: "Theory", credits: "1" },
        { sno: "6", name: "Physics Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Electrical Engineering Laboratory", type: "Lab", credits: "1.5" }
      ]
    },
    {
      title: "Cyber Security - B.Tech I Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Professional English", type: "Theory", credits: "3" },
        { sno: "2", name: "Linear Algebra", type: "Theory", credits: "3" },
        { sno: "3", name: "Engineering Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "C Programming and Data Structures", type: "Theory", credits: "3" },
        { sno: "5", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "6", name: "Chemistry Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "C Programming and Data Structures Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Engineering and IT Workshop", type: "Lab", credits: "1.5" }
      ]
    },
    {
      title: "Cyber Security - B.Tech II Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Probability and Statistics for Computer Science", type: "Theory", credits: "3" },
        { sno: "2", name: "Computer System Architecture", type: "Theory", credits: "3" },
        { sno: "3", name: "Data Structures using Python", type: "Theory", credits: "3" },
        { sno: "4", name: "Object Oriented Programming using C++", type: "Theory", credits: "3" },
        { sno: "5", name: "Data Structures using Python Laboratory", type: "Theory", credits: "3" },
        { sno: "6", name: "Data Structures using Python Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Object Oriented Programming using C++ Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Database Fundamentals for Security Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course – I (Refer Annexure - IV)", type: "Skill", credits: "2" },
        { sno: "10", name: "Environmental Science", type: "Audit", credits: "0" }
      ]
    },
    {
      title: "Cyber Security - B.Tech II Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Economics and Financial Accounting for Engineers", type: "Theory", credits: "3" },
        { sno: "2", name: "Discrete Mathematical Structures", type: "Theory", credits: "3" },
        { sno: "3", name: "Operating System Fundamentals for Security", type: "Theory", credits: "3" },
        { sno: "4", name: "JAVA Programming", type: "Theory", credits: "3" },
        { sno: "5", name: "Design and Analysis of Algorithms", type: "Theory", credits: "3" },
        { sno: "6", name: "Operating System Fundamentals for Security Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "JAVA Programming Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Design and Analysis of Algorithms Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course – II (Refer Annexure - IV)", type: "Lab", credits: "2" },
        { sno: "10", name: "Indian Constitution", type: "Audit", credits: "0" }
      ]
    },
    {
      title: "Cyber Security - B.Tech III Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Automata Theory and Compiler Design", type: "Theory", credits: "3" },
        { sno: "2", name: "Computer Networks", type: "Theory", credits: "3" },
        { sno: "3", name: "Software Engineering", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-1", type: "Theory", credits: "3" },
        { sno: "5", name: "Professional Elective-1", type: "Theory", credits: "3" },
        { sno: "6", name: "Computer Networks Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Software Engineering Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Skill Oriented Course – III (Refer Annexure - IV)", type: "Lab", credits: "2" },
        { sno: "9", name: "Disaster Management", type: "Lab", credits: "0" },
        { sno: "10", name: "Summer Internship-1*", type: "Theory", credits: "1.5" }
      ]
    },
    {
      title: "Cyber Security - B.Tech III Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Cloud Computing", type: "Theory", credits: "3" },
        { sno: "2", name: "Foundation of Cryptography", type: "Theory", credits: "3" },
        { sno: "3", name: "AI Tools, Techniques and Applications", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-2", type: "Theory", credits: "3" },
        { sno: "5", name: "Professional Elective-2", type: "Theory", credits: "3" },
        { sno: "6", name: "Cloud Computing Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Cryptography Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "AI Tools, Techniques and Applications Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course – IV (Refer Annexure - IV)", type: "Lab", credits: "2" },
        { sno: "10", name: "Universal Human Values", type: "Theory", credits: "0" }
      ]
    },
    {
      title: "Cyber Security - B.Tech IV Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Professional Elective-III", type: "Theory", credits: "3" },
        { sno: "2", name: "Professional Elective-IV", type: "Theory", credits: "3" },
        { sno: "3", name: "Professional Elective-V", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-III", type: "Theory", credits: "3" },
        { sno: "5", name: "Open Elective-IV", type: "Theory", credits: "3" },
        { sno: "6", name: "Open Elective-V (Taken from Humanities & Social Science)", type: "Theory", credits: "3" },
        { sno: "7", name: "Skill Oriented Course – V (Refer Annexure - IV)", type: "Lab", credits: "2" },
        { sno: "8", name: "Summer Internship-2 *", type: "Project", credits: "3" }
      ]
    },
    {
      title: "Cyber Security - B.Tech IV Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Project Work, Seminar and Internship in Industry (6 months)", type: "Project", credits: "12" }
      ]
    }
  ],
  timeTables: [
    {
      groupTitle: "Master Time Tables",
      items: [
        {
          title: "B.Tech II Year 2025-26 II Semester (CSE-Cyber Security) Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/B.Tech%20II%20Year%202025-26%20II%20Semester%20(CSE-Cyber%20Security)%20Timetable.pdf",
          academicYear: "2025-26",
          category: "Master Timetable"
        },
        {
          title: "B.Tech III Year 2025-26 II Semester (CSE-Cyber Security) Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/B.Tech%20III%20Year%202025-26%20II%20Semester%20(CSE-Cyber%20Security)%20Timetable.pdf",
          academicYear: "2025-26",
          category: "Master Timetable"
        },
        {
          title: "B.Tech IV Year 2025-26 II Semester (CSE-Cyber Security) Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/B.Tech%20IV%20Year%202025-26%20II%20Semester%20(CSE-Cyber%20Security)%20Timetable.pdf",
          academicYear: "2025-26",
          category: "Master Timetable"
        }
      ]
    },
    {
      groupTitle: "Individual Faculty Time Tables",
      items: [
        {
          title: "Individual Faculty Timetables",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/II%20SEM%202024-25%20Faculty%20Individual%20Workload%20Cyber%20Security.pdf",
          academicYear: "2024-25",
          category: "Faculty Timetable"
        }
      ]
    }
  ]
};

export const ceUnderGraduateData: UnderGraduateData = {
  programTitle: "Bachelor of Technology (B.Tech) - Civil Engineering",
  programOverview:
    "The Department has the best undergraduate program required for the Civil Industry. The course curriculum for the undergraduate program gives the flexibility to the students to prepare for advanced specializations. The department commits to offer a set of electives so that students can plan their academic program in advance. The course structure provides a right mix of compulsory and elective courses.",
  sections: [
    {
      title: "Curriculum",
      description:
        "The B.Tech Program is divided into two distinct parts. A student has to go through a common program called Core Curriculum. Most of the core curriculum is completed in the first four semesters. The last four semesters have many professional courses to initiate the students towards the topics in Information Technology.\n\nThe Core Curriculum is a package of compulsory courses in Physics, Chemistry, Mathematics, Engineering Sciences and Technical Arts.\n\nThe Professional Curriculum consists of courses and Project Work. There are some compulsory courses along with a significant number of professional electives as well."
    }
  ],
  subTabs: [
    { id: "ug", label: "UG" },
    { id: "course-syllabus", label: "Course Syllabus" },
    { id: "timetable", label: "Timetable" }
  ],
  syllabusTables: [
    {
      title: "Course Structure & Syllabi (R23) B.Tech Programmes - Civil Engineering",
      headers: ["Document", "Regulation", "Programme", "Link"],
      rows: [
        {
          sno: "1",
          name: "Course Structure & Syllabi (R23) B.Tech Programmes - Civil Engineering",
          type: "Official Curriculum PDF",
          credits: "R23"
        }
      ]
    },
    {
      title: "Course Structure & Syllabi (R20) B.Tech Programmes - Civil Engineering",
      headers: ["Document", "Regulation", "Programme", "Link"],
      rows: [
        {
          sno: "2",
          name: "Course Structure & Syllabi (R20) B.Tech Programmes - Civil Engineering",
          type: "Official Curriculum PDF",
          credits: "R20"
        }
      ]
    }
  ],
  timeTables: [
    {
      groupTitle: "Master Time Tables",
      items: [
        {
          title: "B.Tech II Year 2025-26 I Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/civil/B.Tech%20II%20Year%202025-26%20I%20Semester%20Timetable.pdf",
          academicYear: "2025-26",
          category: "Master Timetable"
        },
        {
          title: "B.Tech III Year 2025-26 I Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/civil/B.Tech%20III%20Year%202025-26%20I%20Semester%20Timetable.pdf",
          academicYear: "2025-26",
          category: "Master Timetable"
        },
        {
          title: "B.Tech IV Year 2025-26 I Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/civil/B.Tech%20IV%20Year%202025-26%20I%20Semester%20Timetable.pdf",
          academicYear: "2025-26",
          category: "Master Timetable"
        }
      ]
    },
    {
      groupTitle: "Individual Faculty Time Tables",
      items: [
        {
          title: "Individual Faculty Timetables",
          pdfUrl: "https://mits.ac.in/assets/pdf/civil/Individual%20TT%20for%20II%20Sem%20for%20AY%202023-24%20Time%20Table.pdf",
          academicYear: "2023-24",
          category: "Faculty Timetable"
        }
      ]
    }
  ]
};

export const eeeUnderGraduateData: UnderGraduateData = {
  programTitle: "Bachelor of Technology (B.Tech) - Electrical and Electronics Engineering",
  programOverview:
    "The Department has designed its undergraduate programme to meet the industry requirements. The curriculum of the undergraduate programme provides the flexibility to students to learn advanced specializations. The department commits to offer a set of electives so that the students can plan their academic programme in advance. The course structure provides a right combination of compulsory and elective courses.",
  sections: [
    {
      title: "Curriculum",
      description:
        "The B. Tech. Programme is divided into two distinct parts. A student has to go through a common programme called Core Curriculum. Most of the core curriculum is completed in the First four semesters. The last four semesters consists of more number of professional courses, for the students to become familiar with the concept of Electrical and Electronics Engineering. The Core Curriculum consists of a package of compulsory courses in Physics, Chemistry, Mathematics, Engineering Sciences and Technical Arts.\n\nThe Professional Curriculum consists of courses and Project Work. There are some compulsory courses, along with a significant number of professional electives as well."
    }
  ],
  subTabs: [
    { id: "ug", label: "UG" },
    { id: "course-syllabus", label: "Course Syllabus" },
    { id: "timetable", label: "Timetables" }
  ],
  timeTables: [
    {
      groupTitle: "Master Time Tables",
      items: [
        {
          title: "B.Tech II Year 2026-27 I Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/eee/B.Tech%20II%20Year%202026-27%20I%20Semester%20Timetable.pdf",
          academicYear: "2026-27",
          category: "Master Timetable"
        },
        {
          title: "B.Tech III Year 2026-27 I Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/eee/B.Tech%20III%20Year%202026-27%20I%20Semester%20Timetable.pdf",
          academicYear: "2026-27",
          category: "Master Timetable"
        },
        {
          title: "B.Tech IV Year 2026-27 II Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/eee/B.Tech%20IV%20Year%202026-27%20I%20Semester%20Timetable.pdf",
          academicYear: "2026-27",
          category: "Master Timetable"
        }
      ]
    },
    {
      groupTitle: "Individual Faculty Time Tables",
      items: [
        {
          title: "Individual Faculty Timetables",
          pdfUrl: "https://mits.ac.in/assets/pdf/eee/Individual%20TT_EEE%20%2021.09.2026.pdf",
          category: "Faculty Timetable"
        }
      ]
    },
    {
      groupTitle: "Academic Regulations and Course Structure & Syllabi for B.Tech Programme",
      items: [
        {
          title: "UGC-Autonomous Syllabi (R20) For B.Tech Electrical & Electronics Engineering",
          pdfUrl: "https://mits.ac.in/ugc-autonomous-exam-portal.html",
          category: "Academic Regulations"
        },
        {
          title: "UGC-Autonomous Syllabi (R18) For B.Tech Electrical & Electronics Engineering",
          pdfUrl: "https://mits.ac.in/ugc-autonomous-exam-portal.html",
          category: "Academic Regulations"
        },
        {
          title: "UGC-Autonomous Syllabi (R14) For B.Tech Electrical & Electronics Engineering",
          pdfUrl: "https://mits.ac.in/ugc-autonomous-exam-portal.html",
          category: "Academic Regulations"
        }
      ]
    }
  ],
  syllabusTables: [
    {
      title: "First Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Linear Algebra and Calculus", type: "Theory", credits: "2" },
        { sno: "2", name: "Engineering Physics", type: "Theory", credits: "3" },
        { sno: "3", name: "Basic Electrical and Electronics Engineering", type: "Theory", credits: "3" },
        { sno: "4", name: "Introduction to Programming", type: "Theory", credits: "3" },
        { sno: "5", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "6", name: "Engineering Physics Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Electrical and Electronics Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Computer Programming Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "IT Workshop", type: "Lab", credits: "1" },
        { sno: "10", name: "NSS / NCC / Scouts and Guides / Community Service", type: "Mandatory Course", credits: "0.5" }
      ]
    },
    {
      title: "First Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Communicative English", type: "Theory", credits: "2" },
        { sno: "2", name: "Differential Equations and Vector Calculus", type: "Theory", credits: "3" },
        { sno: "3", name: "Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "Basic Civil and Mechanical Engineering", type: "Theory", credits: "3" },
        { sno: "5", name: "Electrical Circuits Analysis - I", type: "Theory", credits: "3" },
        { sno: "6", name: "Communicative English Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Chemistry Laboratory", type: "Lab", credits: "1" },
        { sno: "8", name: "Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Electrical Circuits Laboratory", type: "Lab", credits: "1.5" },
        { sno: "10", name: "Health and Wellness, Yoga and Sports", type: "Mandatory Course", credits: "0.5" }
      ]
    },
    {
      title: "Second Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Universal Human Values", type: "Theory", credits: "3" },
        { sno: "2", name: "Complex Variables and Transforms", type: "Theory", credits: "3" },
        { sno: "3", name: "Electromagnetic Field Theory", type: "Theory", credits: "3" },
        { sno: "4", name: "Electrical Circuit Analysis - II", type: "Theory", credits: "3" },
        { sno: "5", name: "DC Machines and Transformers", type: "Theory", credits: "3" },
        { sno: "6", name: "Electrical Circuit Analysis and Simulation Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "DC Machines and Transformers Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Data Structures", type: "Theory", credits: "2" },
        { sno: "9", name: "Environmental Science", type: "Theory", credits: "0" }
      ]
    },
    {
      title: "Second Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Economics and Financial Accounting For Engineers", type: "Theory", credits: "2" },
        { sno: "2", name: "Innovation and Incubation Courses", type: "Theory", credits: "2" },
        { sno: "3", name: "Analog Circuits", type: "Theory", credits: "3" },
        { sno: "4", name: "Power Systems - I", type: "Theory", credits: "3" },
        { sno: "5", name: "Induction and Synchronous Machines", type: "Theory", credits: "3" },
        { sno: "6", name: "Control Systems", type: "Theory", credits: "3" },
        { sno: "7", name: "Induction and Synchronous Machines Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Control Systems Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Python Programming", type: "Lab", credits: "2" }
      ]
    },
    {
      title: "First Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Professional English", type: "Theory", credits: "3" },
        { sno: "2", name: "Calculus and Differential Equations", type: "Theory", credits: "4" },
        { sno: "3", name: "Engineering Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "5", name: "Programming for Problem Solving (Python)", type: "Lab", credits: "3.5" },
        { sno: "6", name: "Chemistry Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Workshop Practice", type: "Lab", credits: "1.5" }
      ]
    },
    {
      title: "First Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Linear Algebra and Transform Calculus", type: "Theory", credits: "3" },
        { sno: "2", name: "Applied Physics", type: "Theory", credits: "3" },
        { sno: "3", name: "Basic Electrical Engineering", type: "Theory", credits: "4" },
        { sno: "4", name: "C Programming and Data Structures", type: "Theory", credits: "3" },
        { sno: "5", name: "English for Professional Purposes Laboratory", type: "Theory", credits: "1" },
        { sno: "6", name: "Physics Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Electrical Engineering Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "C Programming and Data Structures Laboratory", type: "Lab", credits: "1.5" }
      ]
    },
    {
      title: "Second Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Economics and Financial Accounting for Engineers", type: "Theory", credits: "3" },
        { sno: "2", name: "Numerical Methods", type: "Theory", credits: "3" },
        { sno: "3", name: "Electrical Circuit Analysis", type: "Theory", credits: "4" },
        { sno: "4", name: "Analog Electronics", type: "Theory", credits: "3" },
        { sno: "5", name: "DC Machines and Transformers", type: "Theory", credits: "3" },
        { sno: "6", name: "Electrical Circuits and Simulation Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Analog Electronics Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "DC Machines and Transformers Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course – I", type: "Skill Oriented Course", credits: "2" },
        { sno: "10", name: "Indian Constitution", type: "Mandatory Course", credits: "0" }
      ]
    },
    {
      title: "Second Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Probability And Statistics For Engineers", type: "Theory", credits: "3" },
        { sno: "2", name: "Electromagnetic Fields", type: "Theory", credits: "3" },
        { sno: "3", name: "Digital Electronics", type: "Theory", credits: "3" },
        { sno: "4", name: "Induction and Synchronous Machines", type: "Theory", credits: "3" },
        { sno: "5", name: "Control Systems", type: "Theory", credits: "3" },
        { sno: "6", name: "Digital Electronics Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Induction and Synchronous Machines Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Control Systems Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course - II", type: "Skill Oriented Course", credits: "2" },
        { sno: "10", name: "Environmental Science", type: "Mandatory Course", credits: "0" }
      ]
    },
    {
      title: "Third Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Power Systems – I", type: "Theory", credits: "3" },
        { sno: "2", name: "Power Electronics", type: "Theory", credits: "3" },
        { sno: "3", name: "Micro-controllers and Interfacing", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-I", type: "Theory", credits: "3" },
        { sno: "5", name: "Professional Elective-I", type: "Theory", credits: "3" },
        { sno: "6", name: "Power System – I Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Micro-controllers and Interfacing Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Skill Oriented Course - III", type: "Lab", credits: "2" },
        { sno: "9", name: "Universal Human Values", type: "Mandatory Course", credits: "0" },
        { sno: "10", name: "Summer Internship-1*", type: "Theory", credits: "1.5" }
      ]
    },
    {
      title: "Third Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Measurements and Transducers", type: "Theory", credits: "3" },
        { sno: "2", name: "Signals and Systems", type: "Theory", credits: "3" },
        { sno: "3", name: "Power Systems – II (Analysis)", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-II", type: "Theory", credits: "3" },
        { sno: "5", name: "Professional Elective-II", type: "Theory", credits: "3" },
        { sno: "6", name: "Measurements and Transducers Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Power Systems – II Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Power Electronics Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course - IV", type: "Lab", credits: "2" },
        { sno: "10", name: "Disaster Management", type: "Theory", credits: "0" }
      ]
    },
    {
      title: "Fourth Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Professional Elective-III", type: "Theory", credits: "3" },
        { sno: "2", name: "Professional Elective-IV", type: "Theory", credits: "3" },
        { sno: "3", name: "Professional Elective-V", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-III", type: "Theory", credits: "3" },
        { sno: "5", name: "Open Elective-IV", type: "Theory", credits: "3" },
        { sno: "6", name: "Open Elective-V (Taken from Humanities & Social Science)", type: "Theory", credits: "3" },
        { sno: "7", name: "Skill Oriented Course - V", type: "Lab", credits: "2" },
        { sno: "8", name: "Summer Internship-2*", type: "Mandatory Course", credits: "3" }
      ]
    },
    {
      title: "Fourth Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Project Work / Internship", type: "Mandatory Course", credits: "12" }
      ]
    }
  ]
};

export const meUnderGraduateData: UnderGraduateData = {
  "programTitle": "Bachelor of Technology (B.Tech) - Mechanical Engineering",
  "programOverview": "Bachelor of Technology (B.Tech.) in Mechanical Engineering is the flagship program of the Department which was started in the year 1998. This program is designed to lay a strong foundation for students to build a successful career or pursue higher education in the Mechanical Engineering and allied fields. The program is administered strictly according to the tenets of Outcome Based Education (OBE) and it has been continuously accredited by NBA since the year 2013. The program curriculum is regularly updated and evolved considering of the guidelines given by All India Council for Technical Education (AICTE) and American Society for Mechanical Engineers (ASME), and the syllabi is also designed in accordance with the syllabi of competitive examinations for Mechanical Engineering like GATE and IES.",
  "sections": [
    {
      "title": "Salient Features of the Programme",
      "points": [
        "Industry related labs, established in the Department with help from Siemens and Dassault Systemes, add immense value to the UG programme by aiding targeted employability training for the students.",
        "Students benefit from the experience and expertise of the highly qualified faculty who are all engaged in research and development.",
        "Scholarship programme titled SHARP incentivizes the student participation in faculty research thus their enrichment with valuable work experience while still on campus.",
        "Unique aspects of the programme include emphasis on MOOCS, self-learning, and internships which are all incorporated into the curriculum.",
        "Ample support is provided to the students to ensure their timely academic progress and to facilitate the realization of their potential.",
        "Initiatives like make up classes and remedial classes are in place to assist the students falling behind in their academic performance.",
        "Co-curricular and extra-curricular activities are conducted to galvanize the performing students towards higher achievement."
      ]
    },
    {
      "title": "Co-curricular & Extra-curricular Activities",
      "points": [
        "Employability training in Siemens Lab and Dassault Systemes Lab",
        "Training for competitive exams and core placements",
        "Industry visits",
        "Guest lectures",
        "Seminars",
        "Workshops",
        "Symposium with project expos",
        "Conferences"
      ]
    }
  ],
  "subTabs": [
    {
      "id": "ug",
      "label": "UG Overview"
    },
    {
      "id": "course-syllabus",
      "label": "Course syllabus"
    },
    {
      "id": "minors",
      "label": "Minors"
    },
    {
      "id": "timetable",
      "label": "Time Tables"
    },
    {
      "id": "remedial-classes",
      "label": "Remedial Classes"
    },
    {
      "id": "surveys",
      "label": "Surveys"
    },
    {
      "id": "obe",
      "label": "OBE"
    }
  ],
  "timeTables": [
    {
      "groupTitle": "Master Timetables",
      "items": [
        {
          "title": "B.Tech II Year 2025-26 I Semester Timetable",
          "pdfUrl": "https://mits.ac.in/assets/pdf/mech/B.Tech%20II%20Year%202025-26%20I%20Semester%20Timetable.pdf",
          "academicYear": "2025-26"
        },
        {
          "title": "B.Tech III Year 2025-26 I Semester Timetable",
          "pdfUrl": "https://mits.ac.in/assets/pdf/mech/B.Tech%20III%20Year%202025-26%20I%20Semester%20Timetable.pdf",
          "academicYear": "2025-26"
        },
        {
          "title": "B.Tech IV Year 2025-26 I Semester Timetable",
          "pdfUrl": "https://mits.ac.in/assets/pdf/mech/B.Tech%20IV%20Year%202025-26%20I%20Semester%20Timetable.pdf",
          "academicYear": "2025-26"
        }
      ]
    },
    {
      "groupTitle": "Individual Faculty Timetables",
      "items": [
        {
          "title": "Individual Faculty Timetables 2025-2026",
          "pdfUrl": "https://mits.ac.in/assets/pdf/mech/FACULTY%20TT%202025-2026.pdf",
          "academicYear": "2025-26"
        }
      ]
    }
  ],
  "syllabusTables": [
    {
      "title": "First Year I Semester - R23",
      "headers": [
        "S.No",
        "Name of the Subject",
        "Theory/Lab",
        "Credits"
      ],
      "rows": [
        {
          "sno": "1",
          "name": "Communicative English",
          "type": "Theory",
          "credits": "2"
        },
        {
          "sno": "2",
          "name": "Linear Algebra and Calculus",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "3",
          "name": "Engineering Chemistry",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "4",
          "name": "Basic Civil and Mechanical Engineering",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "5",
          "name": "Introduction to Programming",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "6",
          "name": "Communicative English Laboratory",
          "type": "Lab",
          "credits": "1"
        },
        {
          "sno": "7",
          "name": "Engineering Chemistry Laboratory",
          "type": "Lab",
          "credits": "1"
        },
        {
          "sno": "8",
          "name": "Computer Programming Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "9",
          "name": "Engineering Workshop",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "10",
          "name": "Health and Wellness, Yoga and Sports",
          "type": "",
          "credits": "0.5"
        }
      ]
    },
    {
      "title": "First Year II Semester - R23",
      "headers": [
        "S.No",
        "Name of the Subject",
        "Theory/Lab",
        "Credits"
      ],
      "rows": [
        {
          "sno": "1",
          "name": "Differential Equations and Vector Calculus",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "2",
          "name": "Engineering Physics",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "3",
          "name": "Basic Electrical and Electronics Engineering",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "4",
          "name": "Engineering Graphics",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "5",
          "name": "Engineering Mechanics",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "6",
          "name": "Engineering Physics Laboratory",
          "type": "Lab",
          "credits": "1"
        },
        {
          "sno": "7",
          "name": "Electrical and Electronics Engineering Workshop",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "8",
          "name": "IT Workshop",
          "type": "Lab",
          "credits": "1"
        },
        {
          "sno": "9",
          "name": "Engineering Mechanics Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "10",
          "name": "NSS / NCC / Scouts and Guides / Community Service",
          "type": "",
          "credits": "0.5"
        }
      ]
    },
    {
      "title": "Second Year I Semester - R23",
      "headers": [
        "S.No",
        "Name of the Subject",
        "Theory/Lab",
        "Credits"
      ],
      "rows": [
        {
          "sno": "1",
          "name": "Universal Human Values",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "2",
          "name": "Numerical Methods",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "3",
          "name": "Thermodynamics",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "4",
          "name": "Mechanics of Solids",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "5",
          "name": "Materials Science and Engineering",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "6",
          "name": "Mechanics of Solids and Materials Science Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "7",
          "name": "Computer Aided Machine Drawing Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "8",
          "name": "Soft Skills",
          "type": "Lab",
          "credits": "2"
        },
        {
          "sno": "9",
          "name": "Environmental Science",
          "type": "Theory",
          "credits": "0"
        }
      ]
    },
    {
      "title": "Second Year II Semester - R23",
      "headers": [
        "S.No",
        "Name of the Subject",
        "Theory/Lab",
        "Credits"
      ],
      "rows": [
        {
          "sno": "1",
          "name": "Economics and Financial Accounting For Engineers",
          "type": "Theory",
          "credits": "2"
        },
        {
          "sno": "2",
          "name": "Probability and Statistics for Engineers",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "3",
          "name": "Innovation and Incubation Courses",
          "type": "Theory",
          "credits": "2"
        },
        {
          "sno": "4",
          "name": "Manufacturing Technology - I",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "5",
          "name": "Fluid Mechanics and Hydraulic Machines",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "6",
          "name": "Theory of Machines",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "7",
          "name": "Fluid Mechanics and Hydraulic Machines Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "8",
          "name": "Manufacturing Technology - I Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "9",
          "name": "Python Programming",
          "type": "Theory",
          "credits": "2"
        }
      ]
    },
    {
      "title": "First Year I Semester - R20",
      "headers": [
        "S.No",
        "Name of the Subject",
        "Theory/Lab",
        "Credits"
      ],
      "rows": [
        {
          "sno": "1",
          "name": "Professional English",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "2",
          "name": "Engineering Calculus",
          "type": "Theory",
          "credits": "4"
        },
        {
          "sno": "3",
          "name": "Engineering Chemistry",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "4",
          "name": "Engineering Graphics",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "5",
          "name": "Programming for Problem Solving (Python)",
          "type": "Theory",
          "credits": "3.5"
        },
        {
          "sno": "6",
          "name": "Chemistry Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "7",
          "name": "Workshop Practice",
          "type": "Lab",
          "credits": "1.5"
        }
      ]
    },
    {
      "title": "First Year II Semester - R20",
      "headers": [
        "S.No",
        "Name of the Subject",
        "Theory/Lab",
        "Credits"
      ],
      "rows": [
        {
          "sno": "1",
          "name": "Linear Algebra and Differential Equations",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "2",
          "name": "Engineering Physics",
          "type": "Theory",
          "credits": "4"
        },
        {
          "sno": "3",
          "name": "Basic Electrical Engineering",
          "type": "Theory",
          "credits": "4"
        },
        {
          "sno": "4",
          "name": "C Programming and Data Structures",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "5",
          "name": "English for Professional Purposes Laboratory",
          "type": "Lab",
          "credits": "1"
        },
        {
          "sno": "6",
          "name": "Physics Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "7",
          "name": "Electrical Engineering Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "8",
          "name": "C Programming and Data Structures Laboratory",
          "type": "Lab",
          "credits": "1.5"
        }
      ]
    },
    {
      "title": "Second Year I Semester - R20",
      "headers": [
        "S.No",
        "Name of the Subject",
        "Theory/Lab",
        "Credits"
      ],
      "rows": [
        {
          "sno": "1",
          "name": "Numerical Methods",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "2",
          "name": "Engineering Mechanics",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "3",
          "name": "Basic Thermodynamics",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "4",
          "name": "Materials Science and Engineering",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "5",
          "name": "Fluid Mechanics and Hydraulic Machinery",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "6",
          "name": "Materials Science and Engineering Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "7",
          "name": "Fluid Mechanics and Hydraulic Machinery Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "8",
          "name": "3-D Modelling Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "9",
          "name": "Skill Oriented Course-I",
          "type": "Theory",
          "credits": "2"
        },
        {
          "sno": "9",
          "name": "Skill Oriented Course-I",
          "type": "Theory",
          "credits": "2"
        },
        {
          "sno": "10",
          "name": "Environmental Science",
          "type": "Theory",
          "credits": "0"
        }
      ]
    },
    {
      "title": "Second Year II Semester - R20",
      "headers": [
        "S.No",
        "Name of the Subject",
        "Theory/Lab",
        "Credits"
      ],
      "rows": [
        {
          "sno": "1",
          "name": "Economics and Financial Accounting for Engineers",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "2",
          "name": "Probability and Statistics",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "3",
          "name": "Mechanics of Solids",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "4",
          "name": "Theory of Machines",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "5",
          "name": "Manufacturing Technology-I",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "6",
          "name": "Manufacturing Technology-I Laboratory",
          "type": "Theory",
          "credits": "1.5"
        },
        {
          "sno": "7",
          "name": "Mechanics of Solids Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "8",
          "name": "Dynamics & Electrical Machines Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "9",
          "name": "Skill Oriented Course \u2013 II",
          "type": "Lab",
          "credits": "2"
        },
        {
          "sno": "10",
          "name": "Indian Constitution",
          "type": "Theory",
          "credits": "0"
        }
      ]
    },
    {
      "title": "Third Year I Semester - R20",
      "headers": [
        "S.No",
        "Name of the Subject",
        "Theory/Lab",
        "Credits"
      ],
      "rows": [
        {
          "sno": "1",
          "name": "Design of Machine Elements",
          "type": "Theory & Lab",
          "credits": "3"
        },
        {
          "sno": "2",
          "name": "Manufacturing Technology-II",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "3",
          "name": "Heat Transfer",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "4",
          "name": "Open Elective-I",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "5",
          "name": "Professional Elective-I",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "6",
          "name": "Manufacturing Technology-II Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "7",
          "name": "Thermal Engineering Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "8",
          "name": "Skill Oriented Course-III",
          "type": "Lab",
          "credits": "2"
        },
        {
          "sno": "9",
          "name": "Disaster Management",
          "type": "Lab",
          "credits": "0"
        },
        {
          "sno": "10",
          "name": "Summer Internship-I*",
          "type": "Theory",
          "credits": "1.5"
        }
      ]
    },
    {
      "title": "Third Year II Semester - R20",
      "headers": [
        "S.No",
        "Name of the Subject",
        "Theory/Lab",
        "Credits"
      ],
      "rows": [
        {
          "sno": "1",
          "name": "CAD/ CAM",
          "type": "Theory",
          "credits": "2"
        },
        {
          "sno": "2",
          "name": "Automation and Robotics",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "3",
          "name": "Machine Learning for Mechanical Engineers",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "4",
          "name": "Open Elective-II",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "5",
          "name": "Professional Elective-II",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "6",
          "name": "CAD/ CAM Laboratory",
          "type": "Theory",
          "credits": "1.5"
        },
        {
          "sno": "7",
          "name": "Robotics Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "8",
          "name": "Engineering Metrology and Measurements Laboratory",
          "type": "Lab",
          "credits": "1.5"
        },
        {
          "sno": "9",
          "name": "Skill Oriented Course-IV",
          "type": "Lab",
          "credits": "2"
        },
        {
          "sno": "10",
          "name": "Universal Human Values",
          "type": "Theory",
          "credits": "0/3"
        }
      ]
    },
    {
      "title": "Fourth Year I Semester - R20",
      "headers": [
        "S.No",
        "Name of the Subject",
        "Theory/Lab",
        "Credits"
      ],
      "rows": [
        {
          "sno": "1",
          "name": "Professional Elective-III",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "2",
          "name": "Professional Elective-IV",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "3",
          "name": "Professional Elective-V",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "4",
          "name": "Open Elective-III",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "5",
          "name": "Open Elective-IV",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "6",
          "name": "Open Elective-V (Taken from Humanities & Social Science)",
          "type": "Theory",
          "credits": "3"
        },
        {
          "sno": "7",
          "name": "Skill Oriented Course - V",
          "type": "Lab",
          "credits": "2"
        },
        {
          "sno": "8",
          "name": "Summer Internship-2*",
          "type": "-",
          "credits": "3"
        }
      ]
    },
    {
      "title": "Fourth Year II Semester - R20",
      "headers": [
        "S.No",
        "Name of the Subject",
        "Theory/Lab",
        "Credits"
      ],
      "rows": [
        {
          "sno": "1",
          "name": "Project Work / Internship",
          "type": "-",
          "credits": "12"
        }
      ]
    }
  ]
};

export const cstUnderGraduateData: UnderGraduateData = {
  programTitle: "Bachelor of Technology (B.Tech) Program",
  programOverview:
    "The Department has the best undergraduate program required for the IT industry. The course curriculum for the undergraduate program gives the flexibility to the students to prepare for advanced specializations. The department commits to offer a set of electives so that students can plan their academic program in advance. The course structure provides a right mix of compulsory and elective courses.",
  sections: [
    {
      title: "Curriculum",
      description:
        "The B.Tech Program is divided in to two distinct parts. A student has to go through a common program called Core Curriculum. Most of the core curriculum is completed in the first four semesters. The last four semesters has a large number of professional courses, that initiates the student to topics in Computer Science & Technology. The Core Curriculum consists of a package of compulsory courses in Physics, Chemistry, Mathematics, Engineering Sciences and Technical Arts.\n\nThe Professional Curriculum consists of courses and Project Work. There are some compulsory courses, but there is a significant number of professional electives as well."
    },
    {
      title: "Department Information",
      description:
        "The Department of Computer Science & Technology (CST) was established in the year 2018 and plays a vital role in producing value-based professionals to cater to the ever challenging needs of technical excellence in the emerging areas of CST. The department offers one UG program with an intake of 60 students and the intake was enhanced to 180 seats in the year 2019."
    },
    {
      title: "Dept Activities",
      description:
        "To train up the students to increase their managerial skills on par with Industry. Conducting IT games to bring up the creative thoughts and conducting classes to improve their personality"
    },
    {
      title: "Computer Lab",
      description:
        "The computer center is located in three floor circular building with centralized A/c and it is equipped with 575 P – IV systems with latest configuration and 3 servers. Internet facility is provided to all the students. Each student is provided with an independent workstation."
    }
  ],
  subTabs: [
    { id: "ug", label: "UG Overview" },
    { id: "timetable", label: "Time Tables" }
  ],
  timeTables: [
    {
      groupTitle: "Master Time Tables",
      items: [
        {
          title: "B.Tech II Year 2024-25 II Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cst/B.Tech%20II%20Year%202024-25%20II%20Semester%20Timetable.pdf",
          academicYear: "2024-25",
          category: "Master Timetable"
        },
        {
          title: "B.Tech III Year 2024-25 II Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cst/B.Tech%20III%20Year%202024-25%20II%20Semester%20Timetable.pdf",
          academicYear: "2024-25",
          category: "Master Timetable"
        },
        {
          title: "B.Tech IV Year 2024-25 II Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/cst/B.Tech%20IV%20Year%202024-25%20II%20Semester%20Timetable.pdf",
          academicYear: "2024-25",
          category: "Master Timetable"
        }
      ]
    },
    {
      groupTitle: "Individual Faculty Time Tables",
      items: [
        {
          title: "Individual Faculty Timetables",
          pdfUrl: "https://mits.ac.in/assets/pdf/cst/Individual%20WorkLoad-CST.pdf",
          academicYear: "2024-25",
          category: "Faculty Timetable"
        }
      ]
    }
  ]
};

export const eceUnderGraduateData: UnderGraduateData = {
  programTitle: "Bachelor of Technology (B.Tech) Program",
  programOverview:
    "The Department was established in the year 1998 with the B. Tech program in Electronics and Communication Engineering. After four years of its inception, in 2002, the department got approval for the M. Tech program from A.I.C.T.E. The department has a team of highly qualified senior faculty with specializations in communication systems, Microwave Engineering, Digital Signal Processing, Digital Image Processing, VLSI and Embedded Systems.\n\nThe Objective of the Department is to provide high quality man power by giving the technical inputs to meet the requirements of Indian Industries and R & D establishment both in India and in abroad.\n\nThe Department regularly conducts seminars, guest lectures, workshops and technical symposiums on latest technologies. Apart from the curriculum a project development centre is there to impart the real and practical technical skills to the students. The department has been in the fore front for research and training activities in Embedded Systems, Digital Image Processing, Digital Signal Processing, Cryptography and Network Security.\n\nThe Department has the best undergraduate program required for the Civil Industry. The course curriculum for the undergraduate program gives the flexibility to the students to prepare for advanced specializations. The department offers a set of electives so that students can plan their academic program in advance. The course structure provides a right mix of compulsory and elective courses.",
  subTabs: [
    { id: "ug", label: "UG Overview" },
    { id: "timetable", label: "Timetables" },
    { id: "course-syllabus", label: "Course Syllabus" }
  ],
  sections: [
    {
      title: "Curriculum",
      description:
        "The B.Tech Program is divided into two distinct parts. A student has to go through a common program called Core Curriculum. Most of the core curriculum is completed in the first four semesters. The last four semesters have a large number of professional courses, that initiate the student to topics in Electronics and Communication Engineering. The Professional Curriculum consists of courses and Project Work. There are not only some compulsory courses but also significant professional electives as well."
    },
    {
      title: "Department Laboratories & Computing Facilities",
      points: [
        "1. Microprocessor & DSP Lab: Equipped with 22 systems installed with windows XP, MATLAB Software and tools version 7.5. 20 TMS DSP Processor kits, 13 Embedded Trainer Kits, Code composer Studio Software and Keil Software.",
        "2. Microprocessor & Microcontroller Lab: Equipped with Thirty PCs installed with MASM tool and Twenty five 8086 Microprocessor kits, twenty four 8051 Microcontroller kits, Five 8085 Microprocessor Kits and various Interfacing cards.",
        "3. Electronic Computer Aided Design Lab: Equipped with 29 P-IV systems installed with windows XP, Xilinx Software, MATLAB, Multisim Software. KEIL'S, Code Composer Studio Software and Flash Magic Software's and FPGA and CPLD Kits.",
        "4. Analog Communication / Digital Communication Lab: Equipped with fourteen CRO's, fourteen Function Generators, 110 Digital Communication & Analog communication Trainer Kits, Nine Electronic Lab Trainers, Four SDC Trainer Kits and the components required to conduce the experiments.",
        "5. Micro Wave Engineering & Optical Fiber Communication Lab: Equipped with 11 Klystron Mounts, Seven Optical Communication Trainer kits, Two Gunn benches and Three CRO's.",
        "6. Pulse and Digital Circuits Lab 1 & Lab 2: Equipped with 10 DSOs , 8 twenty three CRO's, Thirteen Function Generators, 12 RPSs, Thirteen SDC Trainer Kits, Analog to Digital, Digital to Analog trainer kits, IC tester and the components required to conduct the experiments.",
        "7. IC Applications Lab: Equipped with 07 DSOs , 07 Function Generators, 07 RPSs, Thirteen SDC Trainer Kits, Linear IC Trainer kits and the components required to conduct the experiments.",
        "8. Electronic Devices and Circuits Lab -1: Equipped with Twenty six CRO's, 10 DSOs, 20 RPSs, thirty nine Function Generators, Twenty one SDC Trainer kits and the components required to conduct the experiments.",
        "9. Electronic Devices and Circuits Lab -2: Equipped with 18 DSOs , 18 Function Generators, 18 RPSs and the components required to conduct the experiments.",
        "Exclusive Department Computing Facilities: 29 Computer Systems in ECAD / EC Lab; 21 computer systems in DSP / Embedded Systems Lab; 30 PCs in Microprocessor and Microcontroller Lab; 7 PCs in M.Tech Lab.",
        "Availability of laboratories and project support: All Department Laboratories are available with Technical support during working hours and one hour beyond working hours. DSP Lab (17 P-IV systems with Internet) operates two hours beyond working hours for students."
      ]
    }
  ],
  timeTables: [
    {
      groupTitle: "Master Time Tables",
      items: [
        {
          title: "B.Tech II Year 2026-27 I Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/ece/ECE%20II%20Year%20I%20SEM-2026-27.pdf",
          academicYear: "2026-27",
          category: "Master Timetable"
        },
        {
          title: "B.Tech III Year 2026-27 I Semester Timetable",
          pdfUrl: "https://mits.ac.in/assets/pdf/ece/ECE%20III%20Year%20I%20SEM-2026-27.pdf",
          academicYear: "2026-27",
          category: "Master Timetable"
        }
      ]
    },
    {
      groupTitle: "Individual Faculty Time Tables",
      items: [
        {
          title: "Individual Faculty Timetables 2025-26",
          pdfUrl: "https://mits.ac.in/assets/pdf/ece/Faculty%20Load%20ECE-min.pdf",
          academicYear: "2025-26",
          category: "Faculty Timetable"
        }
      ]
    }
  ],
  syllabusTables: [
    {
      title: "First Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Linear Algebra and Calculus", type: "Theory", credits: "3" },
        { sno: "2", name: "Engineering Physics", type: "Theory", credits: "3" },
        { sno: "3", name: "Basic Electrical and Electronics Engineering", type: "Theory", credits: "3" },
        { sno: "4", name: "Introduction to Programming", type: "Theory", credits: "3" },
        { sno: "5", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "6", name: "Engineering Physics Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Electrical and Electronics Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Computer Programming Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "IT Workshop", type: "Lab", credits: "1" },
        { sno: "10", name: "NSS / NCC / Scouts and Guides / Community Service", type: "-", credits: "0.5" }
      ]
    },
    {
      title: "First Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/lab", "Credits"],
      rows: [
        { sno: "1", name: "Communicative English", type: "Theory", credits: "2" },
        { sno: "2", name: "Differential Equations and Vector Calculus", type: "Theory", credits: "3" },
        { sno: "3", name: "Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "Basic Civil and Mechanical Engineering", type: "Theory", credits: "3" },
        { sno: "5", name: "Network Analysis", type: "Theory", credits: "3" },
        { sno: "6", name: "Communicative English Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Chemistry Laboratory", type: "Lab", credits: "1" },
        { sno: "8", name: "Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Network Analysis and Simulation Laboratory", type: "Lab", credits: "1.5" },
        { sno: "10", name: "Health and Wellness, Yoga and Sports", type: "-", credits: "0.5" }
      ]
    },
    {
      title: "Second Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Universal Human Values", type: "Theory", credits: "3" },
        { sno: "2", name: "Complex Variables and Probability Theory", type: "Theory", credits: "3" },
        { sno: "3", name: "Signals and Systems", type: "Theory", credits: "3" },
        { sno: "4", name: "Electronic Devices and Circuits", type: "Theory", credits: "3" },
        { sno: "5", name: "Digital Circuits Design", type: "Theory", credits: "3" },
        { sno: "6", name: "Electronic Devices and Circuits Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Digital Circuits and Signal Simulation Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Python Programming", type: "Lab", credits: "2" },
        { sno: "9", name: "Environmental Science", type: "Theory", credits: "-" }
      ]
    },
    {
      title: "Second Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/lab", "Credits"],
      rows: [
        { sno: "1", name: "Economics and Financial Accounting For Engineers", type: "Theory", credits: "2" },
        { sno: "2", name: "Innovation and Incubation Courses", type: "Theory", credits: "2" },
        { sno: "3", name: "Linear Control Systems", type: "Theory", credits: "3" },
        { sno: "4", name: "EM Waves and Transmission Lines", type: "Theory", credits: "3" },
        { sno: "5", name: "Analog Circuits", type: "Theory", credits: "3" },
        { sno: "6", name: "Analog Communication", type: "Lab", credits: "3" },
        { sno: "7", name: "Analog Circuits Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Analog Communication Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Soft Skills", type: "-", credits: "2" }
      ]
    },
    {
      title: "First Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Professional English", type: "Theory", credits: "3" },
        { sno: "2", name: "Engineering Calculus", type: "Theory", credits: "4" },
        { sno: "3", name: "Engineering Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "5", name: "Programming for Problem Solving (Python)", type: "Theory", credits: "3.5" },
        { sno: "6", name: "Chemistry Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Workshop Practice", type: "Lab", credits: "1.5" }
      ]
    },
    {
      title: "First Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/lab", "Credits"],
      rows: [
        { sno: "1", name: "Linear Algebra, Complex Variables and Ordinary Differential Equations", type: "Theory", credits: "3" },
        { sno: "2", name: "Applied Physics", type: "Theory", credits: "4" },
        { sno: "3", name: "Basic Electrical Engineering", type: "Theory", credits: "4" },
        { sno: "4", name: "C Programming and Data Structures", type: "Theory", credits: "3" },
        { sno: "5", name: "English for Professional Purposes Laboratory", type: "Theory", credits: "1" },
        { sno: "6", name: "Physics Laboratory", type: "Theory", credits: "1.5" },
        { sno: "7", name: "Electrical Engineering Laboratory", type: "lab", credits: "1.5" },
        { sno: "8", name: "C Programming and Data Structures Laboratory", type: "lab", credits: "1.5" }
      ]
    },
    {
      title: "Second Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/lab", "Credits"],
      rows: [
        { sno: "1", name: "Economics and Financial Accounting for Engineers", type: "Theory", credits: "3" },
        { sno: "2", name: "Transforms and Partial Differential Equations", type: "Theory", credits: "3" },
        { sno: "3", name: "Network Theory", type: "Theory", credits: "3" },
        { sno: "4", name: "Digital System Design", type: "Theory", credits: "3" },
        { sno: "5", name: "Electronic Devices and Circuits", type: "Theory", credits: "3" },
        { sno: "6", name: "Networks and Simulation Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Digital System Design Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Electronic Devices and Circuits Simulation Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course -I", type: "-", credits: "2" },
        { sno: "10", name: "Skill Oriented Course -I", type: "-", credits: "2" }
      ]
    },
    {
      title: "Second Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Probability and Stochastic Process", type: "Theory", credits: "4" },
        { sno: "2", name: "Control System Engineering", type: "Theory", credits: "3" },
        { sno: "3", name: "Principles of Signals and Systems", type: "Theory", credits: "3" },
        { sno: "4", name: "Analog Circuits", type: "Theory", credits: "3" },
        { sno: "5", name: "Microprocessor and Microcontrollers", type: "Theory", credits: "3" },
        { sno: "6", name: "Simulation and Control Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Analog Circuits Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Microprocessor and Microcontroller Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course - II", type: "-", credits: "2" },
        { sno: "10", name: "Environmental Science", type: "-", credits: "0" }
      ]
    },
    {
      title: "Third Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Electromagnetic Fields and Transmission Lines", type: "Theory", credits: "3" },
        { sno: "2", name: "Analog Communication", type: "Theory", credits: "3" },
        { sno: "3", name: "Digital Signal Processing", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-I", type: "Theory", credits: "3" },
        { sno: "5", name: "Professional Elective-I", type: "Theory", credits: "3" },
        { sno: "6", name: "Analog Communication Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Digital Signal Processing Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Skill Oriented Course -III", type: "Lab", credits: "2" },
        { sno: "9", name: "Universal Human Values", type: "Lab", credits: "0/3" },
        { sno: "10", name: "Summer Internship-1*", type: "Theory", credits: "1.5" }
      ]
    },
    {
      title: "Third Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "VLSI Design", type: "Theory", credits: "3" },
        { sno: "2", name: "Antenna and Microwave Engineering", type: "Theory", credits: "3" },
        { sno: "3", name: "Digital Communication", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-II", type: "Theory", credits: "3" },
        { sno: "5", name: "Professional Elective-II (MOOCS)", type: "Theory", credits: "3" },
        { sno: "6", name: "VLSI Design Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Microwave Engineering Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Digital Communication Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Skill Oriented Course-IV", type: "Lab", credits: "2" },
        { sno: "10", name: "Disaster Management", type: "Lab", credits: "0" }
      ]
    },
    {
      title: "Fourth Year I Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Professional Elective-III", type: "Theory", credits: "3" },
        { sno: "2", name: "Professional Elective-IV", type: "Theory", credits: "3" },
        { sno: "3", name: "Professional Elective-V", type: "Theory", credits: "3" },
        { sno: "4", name: "Open Elective-III", type: "Theory", credits: "3" },
        { sno: "5", name: "Open Elective-IV", type: "Theory", credits: "3" },
        { sno: "6", name: "Open Elective-V (Taken from Humanities & Social Science)", type: "Theory", credits: "3" },
        { sno: "7", name: "Skill Oriented Course - V", type: "-", credits: "2" },
        { sno: "8", name: "Summer Internship-2*", type: "-", credits: "3" }
      ]
    },
    {
      title: "Fourth Year II Semester - R20",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Project Work / Internship", type: "-", credits: "12" }
      ]
    }
  ]
};

export function getDepartmentUnderGraduate(deptKey: string, deptSubjects: Subject[] = []): UnderGraduateData {
  const dept = departmentsData[deptKey];
  if (dept && dept.underGraduate) {
    return dept.underGraduate;
  }
  if (deptKey === "ece" || deptKey === "electronics-communication-engineering" || deptKey === "electronics-and-communication-engineering" || deptKey === "3") {
    return eceUnderGraduateData;
  }
  if (deptKey === "cst" || deptKey === "computer-science-and-technology" || deptKey === "computer-science-technology" || deptKey === "4") {
    return cstUnderGraduateData;
  }
  if (deptKey === "aiml" || deptKey === "cse-ai-ml") {
    return aimlUnderGraduateData;
  }
  if (deptKey === "ai" || deptKey === "cai") {
    return aiUnderGraduateData;
  }
  if (deptKey === "cse") {
    return cseUnderGraduateData;
  }
  if (deptKey === "cseds" || deptKey === "cse-ds" || deptKey === "csd" || deptKey === "ds") {
    return csedsUnderGraduateData;
  }
  if (deptKey === "csecs" || deptKey === "cse-cs" || deptKey === "csc" || deptKey === "cs" || deptKey === "cyber-security" || deptKey === "csec") {
    return csecsUnderGraduateData;
  }
  if (deptKey === "ce" || deptKey === "civil" || deptKey === "6") {
    return ceUnderGraduateData;
  }
  if (deptKey === "eee" || deptKey === "electrical-electronics-engineering" || deptKey === "electrical-and-electronics-engineering" || deptKey === "ee" || deptKey === "2") {
    return eeeUnderGraduateData;
  }
  if (deptKey === "me" || deptKey === "mech" || deptKey === "mechanical" || deptKey === "mechanical-engineering" || deptKey === "8") {
    return meUnderGraduateData;
  }

  const semMap = new Map<number, Subject[]>();
  deptSubjects.forEach(s => {
    const list = semMap.get(s.semester) || [];
    list.push(s);
    semMap.set(s.semester, list);
  });

  const syllabusTables: SyllabusTable[] = [];
  const semNumbers = Array.from(semMap.keys()).sort((a, b) => a - b);

  if (semNumbers.length > 0) {
    semNumbers.forEach(sem => {
      const subs = semMap.get(sem) || [];
      syllabusTables.push({
        title: `Semester ${sem} Curriculum`,
        headers: ["S.No", "Name of the Subject", "Type", "Credits"],
        rows: subs.map((sub, idx) => ({
          sno: String(idx + 1),
          name: sub.name,
          type: sub.type.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase()),
          credits: sub.type === "core" ? "3" : sub.type === "elective" ? "3" : "1.5"
        }))
      });
    });
  }

  return {
    programTitle: `Bachelor of Technology (B.Tech) - ${dept?.name || "Program"}`,
    programOverview:
      dept?.about ||
      "The Department offers an outstanding undergraduate program aligned with the evolving needs of the IT industry. The curriculum is designed to be flexible, enabling students to prepare for advanced specializations. A wide range of elective courses is offered, allowing students to plan their academic journey effectively.",
    syllabusTables: syllabusTables.length > 0 ? syllabusTables : undefined
  };
}

export const aimlMoreData: DepartmentMoreData = {
  subTabs: [
    { id: "mentor-mentee", label: "Mentor & Mentee" },
    { id: "minor", label: "Minor" },
    { id: "interdisciplinary-projects", label: "Interdisciplinary Projects" },
    {
      id: "stock-register",
      label: "Stock Register",
      externalUrl: "https://mits.ac.in/assets/pdf/stock-registers/Stock_Register_CSE_AIML.pdf",
      directPdf: true
    }
  ],
  mentorMentee: [
    {
      groupTitle: "Mentor & Mentee Allocation",
      items: [
        {
          title: "B.Tech II Year II Semester Mentor-Mentee Allocation (CSE-AI & ML) 2024-25",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/2nd%20Year%202nd%20Sem%20Mentor-Mentee%20Allocation-CSE-AI%20&%20ML-2024-25.pdf",
          academicYear: "2024-25",
          category: "CSE - AI & ML"
        },
        {
          title: "B.Tech II Year I Semester Mentor-Mentee Allocation (CSE-AI & ML) 2024-25",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/2nd%20Year%201st%20Sem%20Mentor-Mentee%20Allocation-CSE-AI%20&%20ML-2024-25.pdf",
          academicYear: "2024-25",
          category: "CSE - AI & ML"
        }
      ]
    }
  ],
  minor: {
    title: "Minor Degree in AI-ML",
    tagline: "Additional Specialization Alongside Core B.Tech Degree",
    overview:
      "A Minor Degree is an additional specialization pursued alongside your core degree. It allows you to gain expertise in a focused domain without changing your primary field of study. In today’s rapidly evolving digital world, Artificial Intelligence (AI) and Machine Learning (ML) are transforming every industry—from healthcare and finance to transportation and smart cities. Our Minor Degree in AI & ML is designed to equip students with cutting-edge skills, enabling them to stay ahead in the competitive job market.",
    highlights: [
      {
        title: "Key Highlights of Our Program",
        points: [
          "Industry-relevant curriculum aligned with current trends",
          "Hands-on learning with real-time projects",
          "Exposure to tools like Python, TensorFlow, and data analytics",
          "Guidance from experienced faculty and industry experts",
          "Opportunities to work on interdisciplinary applications"
        ]
      },
      {
        title: "Career Opportunities",
        points: [
          "Opens doors to roles like AI Engineer, Data Scientist, ML Developer",
          "Enhances employability across industries"
        ]
      },
      {
        title: "Skill Enhancement",
        points: [
          "Develops problem-solving and analytical thinking",
          "Builds strong programming and data handling skills"
        ]
      },
      {
        title: "Interdisciplinary Learning",
        points: [
          "Combine AI & ML with your core branch (CSE, ECE, Mechanical, etc.)",
          "Apply AI solutions in diverse domains"
        ]
      },
      {
        title: "Higher Studies & Research",
        points: [
          "Strong foundation for pursuing MS, M.Tech, or research in AI fields",
          "Prepares students for innovation and entrepreneurship"
        ]
      },
      {
        title: "Competitive Edge",
        points: [
          "Stand out in placements and internships",
          "Adds value to your academic profile"
        ]
      },
      {
        title: "Who Can Enrol?",
        points: [
          "Students from all engineering disciplines",
          "Those interested in AI, ML, Data Science, and emerging technologies",
          "Learners eager to build future-ready skills"
        ]
      }
    ],
    pdfUrl: "https://mits.ac.in/assets/pdf/aids/Minor%20in%20AIML.pdf",
    pdfLabel: "Minor - 2025-26"
  },
  interdisciplinaryProjects: [
    {
      groupTitle: "Interdisciplinary Projects",
      items: [
        {
          title: "Interdisciplinary Projects (2024-25)",
          pdfUrl: "https://mits.ac.in/assets/pdf/aids/Interdisciplinary%20Projects-2024-25.pdf",
          academicYear: "2024-25",
          category: "Projects"
        }
      ]
    }
  ]
};

export const aiMoreData: DepartmentMoreData = {
  subTabs: [
    {
      id: "stock-register",
      label: "Stock Register",
      externalUrl: "https://mits.ac.in/assets/pdf/stock-registers/CAI%20Stock%20Register.pdf",
      directPdf: true
    }
  ],
  mentorMentee: []
};

export const cseMoreData: DepartmentMoreData = {
  subTabs: [
    { id: "doctoral", label: "Doctoral" },
    {
      id: "stock-register",
      label: "Stock Register",
      externalUrl: "https://mits.ac.in/assets/pdf/stock-registers/CSE%20Stock%20Register.pdf",
      directPdf: true
    },
    { id: "feedback", label: "Feedback" },
    {
      id: "innovative-teaching",
      label: "Innovative Teaching Approach",
      externalUrl: "https://mits.ac.in/assets/pdf/cse/cse-Innovations%20by%20the%20Faculty%20in%20Teaching%20and%20Learning.pdf",
      directPdf: true
    },
    {
      id: "obe",
      label: "OBE",
      subItems: [
        { id: "pos-psos-peos", label: "POs, PSOs, and PEOs" },
        { id: "surveys", label: "Survey" },
        { id: "remedial-classes", label: "Remedial Classes" },
        { id: "copo-attainment", label: "CO-PO Attainment" }
      ]
    }
  ],
  doctoral: {
    title: "Doctoral Programs",
    description:
      "Computer Science & Engineering department is one of the recognized research centres for doctoral programs affiliated to JNTU Anatapur since 2013. Full time research scholars of doctoral programs are working under guidance of highly qualified faculty with strong inclination towards research and development of innovative technologies like Machine Learning, Artificial Intelligence, Computer Networks & Security, Data Mining, Big Data and IoT etc...",
    batchTitle: "Full-Time Research Scholars Details 2015-2016 Batch",
    scholars: [
      {
        sno: "1",
        name: "Y. Harinath",
        guide: "Dr. A. Suresh Babu",
        dateOfJoining: "06-06-2016",
        researchTitle: "Enabling trust worthiness of users in symmetric searchable encryption schemes over cloud data"
      }
    ]
  },
  feedback: {
    groupTitle: "Feedback from Stakeholders",
    documents: [
      {
        title: "StakeHolder Feedback 2025-26",
        url: "https://mits.ac.in/public/uploads/surveys/MITS%20CSE%20Feedback%20Analysis%20Report%2025-26.pdf"
      },
      {
        title: "StakeHolder Feedback 2024-25",
        url: "https://mits.ac.in/public/uploads/surveys/CSE%20Stackholder%2024-25.pdf"
      },
      {
        title: "StakeHolder Feedback 2023-24",
        url: "https://mits.ac.in/public/uploads/surveys/Stakeholder-Feedback%202023-24.pdf"
      },
      {
        title: "StakeHolder Feedback 2022-23",
        url: "https://mits.ac.in/public/uploads/surveys/Stakeholder-Feedback%202022-23.pdf"
      },
      {
        title: "StakeHolder Feedback 2021-22",
        url: "https://mits.ac.in/public/uploads/surveys/StakeHolder%20Feedback%202021-22.pdf"
      },
      {
        title: "StakeHolder Feedback 2020-21",
        url: "https://mits.ac.in/public/uploads/surveys/20-21%20analysis-min.pdf"
      },
      {
        title: "StakeHolder Feedback 2019-20",
        url: "https://mits.ac.in/public/uploads/surveys/19-20%20analysis-min.pdf"
      },
      {
        title: "StakeHolder Feedback 2018-19",
        url: "https://mits.ac.in/public/uploads/surveys/18-19%20analysis%20proof%20-%20scanned.pdf"
      },
      {
        title: "StakeHolder Feedback 2017-18",
        url: "https://mits.ac.in/public/uploads/surveys/17-18%20analysis%20proof%20-%20scanned.pdf"
      },
      {
        title: "StakeHolder Feedback 2016-17",
        url: "https://mits.ac.in/public/uploads/surveys/16-17%20analysis%20proof%20-%20scanned.pdf"
      }
    ]
  },
  innovativeTeaching: {
    groupTitle: "Innovative Teaching & Learning",
    documents: [
      {
        title: "Innovations by the Faculty in Teaching and Learning",
        url: "https://mits.ac.in/assets/pdf/cse/cse-Innovations%20by%20the%20Faculty%20in%20Teaching%20and%20Learning.pdf"
      }
    ]
  },
  obe: {
    title: "Outcome Based Education (OBE)",
    subTabs: [
      { id: "pos-psos-peos", label: "POs, PSOs & PEOs" },
      { id: "surveys", label: "Surveys" },
      { id: "remedial-classes", label: "Remedial Classes" },
      { id: "copo-attainment", label: "CO-PO Attainment" }
    ],
    posPsosPeosImage: "https://mits.ac.in/public/uploads/event/pso-po-peo.jpg",
    surveys: [
      {
        title: "Course Exit Survey",
        links: [
          {
            title: "Course Exit Survey 2020-24",
            url: "https://mits.ac.in/assets/pdf/cse/Course%20Exit%20Survey%202020-24.pdf"
          },
          {
            title: "Course Exit Survey 2019-23",
            url: "https://mits.ac.in/assets/pdf/cse/Course%20Exit%20Survey%202019-23.pdf"
          },
          {
            title: "Course Exit Survey 2018-22",
            url: "https://mits.ac.in/assets/pdf/cse/Course%20Exit%20Survey%202018-22.pdf"
          }
        ]
      },
      {
        title: "Graduate Exit Survey",
        links: [
          {
            title: "Graduate Exit Survey 2020-24",
            url: "https://mits.ac.in/assets/pdf/cse/2020-24%20Graduate%20Exit%20Survey.pdf"
          },
          {
            title: "Graduate Exit Survey 2019-23",
            url: "https://mits.ac.in/assets/pdf/cse/2019-23%20Graduate%20Exit%20Survey.pdf"
          },
          {
            title: "Graduate Exit Survey 2018-22",
            url: "https://mits.ac.in/assets/pdf/cse/2018-22%20Graduate%20Exit%20Survey.pdf"
          }
        ]
      },
      {
        title: "Employer Survey",
        links: [
          {
            title: "Employer Survey 2020-24",
            url: "https://mits.ac.in/assets/pdf/cse/2020-24%20Graduate%20Exit%20Survey.pdf"
          },
          {
            title: "Employer Survey 2019-23",
            url: "https://mits.ac.in/assets/pdf/cse/2019-23%20Graduate%20Exit%20Survey.pdf"
          },
          {
            title: "Employer Survey 2018-22",
            url: "https://mits.ac.in/assets/pdf/cse/2018-22%20Graduate%20Exit%20Survey.pdf"
          }
        ]
      },
      {
        title: "Alumni Survey",
        links: [
          {
            title: "Alumni Survey 2020-24",
            url: "https://mits.ac.in/assets/pdf/cse/2020-24%20Graduate%20Exit%20Survey.pdf"
          },
          {
            title: "Alumni Survey 2019-23",
            url: "https://mits.ac.in/assets/pdf/cse/2019-23%20Graduate%20Exit%20Survey.pdf"
          },
          {
            title: "Alumni Survey 2018-22",
            url: "https://mits.ac.in/assets/pdf/cse/2018-22%20Graduate%20Exit%20Survey.pdf"
          }
        ]
      }
    ],
    remedialClasses: [
      {
        title: "AY 2025-2026 Even Sem",
        url: "https://mits.ac.in/assets/pdf/cse/AY%202025-2026%20Even%C2%A0Sem.pdf"
      },
      {
        title: "AY 2025-2026 Odd Sem",
        url: "https://mits.ac.in/assets/pdf/cse/AY%202025-26%20Remedial%20class%20schedule%20(odd%20sem)-compressed.pdf"
      },
      {
        title: "AY 2024-2025 Even Sem",
        url: "https://mits.ac.in/assets/pdf/cse/AY%202024-25%20Sem%20II%20Remedial%20schedule.pdf"
      },
      {
        title: "AY 2024-2025 Odd Sem",
        url: "https://mits.ac.in/assets/pdf/cse/AY%202024-25%20Sem%20I%20Remedial%20schedule.pdf"
      },
      {
        title: "AY 2023-2024 Even Sem",
        url: "https://mits.ac.in/assets/pdf/cse/AY%202023-24%20Even%20Sem.pdf"
      },
      {
        title: "AY 2023-2024 Odd Sem",
        url: "https://mits.ac.in/assets/pdf/cse/AY%202023-24%20Odd%20Sem.pdf"
      },
      {
        title: "AY 2022-2023 Even Sem",
        url: "https://mits.ac.in/assets/pdf/cse/AY%202022-23%20Even%20Sem.pdf"
      },
      {
        title: "AY 2022-2023 Odd Sem",
        url: "https://mits.ac.in/assets/pdf/cse/AY%202022-23%20Odd%20Sem.pdf"
      },
      {
        title: "AY 2021-2022 Even Sem",
        url: "https://mits.ac.in/assets/pdf/cse/AY%202021-22%20Even%20Sem.pdf"
      },
      {
        title: "AY 2021-2022 Odd Sem",
        url: "https://mits.ac.in/assets/pdf/cse/AY%202021-22%20Odd%20Sem.pdf"
      },
      {
        title: "AY 2019-2020 Even Sem",
        url: "https://mits.ac.in/assets/pdf/cse/AY%202019-20%20Sem-1%20Remedial%20Class%20TT.pdf"
      },
      {
        title: "AY 2019-2020 Odd Sem",
        url: "https://mits.ac.in/assets/pdf/cse/AY%202019-20%20Sem-2%20Remedial%20Class%20TT.pdf"
      }
    ],
    copoAttainment: [
      {
        title: "CO-PO Attainment (2020-2024) Batch",
        url: "https://mits.ac.in/assets/pdf/cse/Overall%20Attainment%202020-24.pdf"
      },
      {
        title: "CO-PO Attainment (2019-2023) Batch",
        url: "https://mits.ac.in/assets/pdf/cse/Overall%20Attainment%202019-23.pdf"
      },
      {
        title: "CO-PO Attainment (2018-2022) Batch",
        url: "https://mits.ac.in/assets/pdf/cse/Overall%20Attainment%202018-22.pdf"
      }
    ]
  }
};

export const csedsMoreData: DepartmentMoreData = {
  subTabs: [
    {
      id: "lab",
      label: "Lab",
      externalUrl: "https://mits.ac.in/public/uploads/departments/DS_Lab%20Softwares.pdf",
      directPdf: true
    },
    {
      id: "mentor-mentee",
      label: "Mentor & Mentee"
    },
    {
      id: "stock-register",
      label: "Stock Register",
      externalUrl: "https://mits.ac.in/assets/pdf/stock-registers/CSD%20Stock%20Register.pdf",
      directPdf: true
    }
  ],
  labPdfUrl: "https://mits.ac.in/public/uploads/departments/DS_Lab%20Softwares.pdf",
  mentorMentee: [
    {
      groupTitle: "Mentor & Mentee Name List",
      items: [
        {
          title: "Mentor & Mentee Name List - AY 2024-25",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/CSE-DS-Mentor%20Mentee%20Name%20List-AY%2024-25.pdf"
        },
        {
          title: "Mentor & Mentee Name List - AY 2023-24",
          pdfUrl: "https://mits.ac.in/assets/pdf/cse/2023-24%20Mentor-Mentee-Datscience.pdf"
        }
      ]
    }
  ]
};

export const csecsMoreData: DepartmentMoreData = {
  subTabs: [
    {
      id: "stock-register",
      label: "Stock Register",
      externalUrl: "https://mits.ac.in/assets/pdf/stock-registers/CS%20Stock%20register.pdf",
      directPdf: true
    },
    {
      id: "surveys",
      label: "Surveys"
    },
    {
      id: "mentor-mentee",
      label: "Mentor & Mentee"
    },
    {
      id: "student-innovative-projects",
      label: "Student Innovative Projects"
    }
  ],
  mentorMentee: [
    {
      groupTitle: "Mentor & Mentee Name List",
      items: [
        {
          title: "2025-26 - Mentor & Mentee",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/CSE-CS%20Mentor-Mentee%20list%202025-26.pdf",
          academicYear: "2025-26"
        },
        {
          title: "2024-25 - Mentor & Mentee",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/CSE-CS%20Mentor-Mentee%20list%202024-25.pdf",
          academicYear: "2024-25"
        },
        {
          title: "2023-24 - Mentor & Mentee",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/CSE(CS)%20Mentor-%20Mentee%20List%202023-24.pdf",
          academicYear: "2023-24"
        }
      ]
    }
  ],
  studentProjects: {
    groupTitle: "Student Innovative Projects",
    description: "Year-wise student innovative project documents and technical implementation reports",
    documents: [
      {
        title: "Student Innovative Projects 2024-2025",
        url: "https://mits.ac.in/assets/pdf/cse/Student%20Innovative%20Projects%202024-25.pdf"
      },
      {
        title: "Student Innovative Projects 2023-2024",
        url: "https://mits.ac.in/assets/pdf/cse/Student%20Innovative%20Projects%202023-24.pdf"
      },
      {
        title: "Student Innovative Projects 2022-2023",
        url: "https://mits.ac.in/assets/pdf/cse/Student%20Innovative%20Projects%202022-23.pdf"
      }
    ]
  },
  obe: {
    title: "Surveys",
    subTabs: [{ id: "surveys", label: "Surveys" }],
    surveys: [
      {
        title: "Surveys from Stakeholders",
        links: [
          {
            title: "Academic Year 2023-24 Action Taken",
            url: "https://mits.ac.in/public/uploads/surveys/CS-AY%202023-24%20ACTION%20TAKEN.pdf"
          },
          {
            title: "Academic Year 2023-24 Faculty Feedback",
            url: "https://mits.ac.in/public/uploads/surveys/CS-AY%202023-24%20FACULTY%20FEEDBACK.pdf"
          },
          {
            title: "Academic Year 2023-24 Parents Feedback",
            url: "https://mits.ac.in/public/uploads/surveys/CS-AY%202023-24%20PARENTS%20FEEDBACK.pdf"
          },
          {
            title: "Academic Year 2023-24 Students Feedback",
            url: "https://mits.ac.in/public/uploads/surveys/CS-AY%202023-24%20STUDENTS%20FEEDBACK.pdf"
          },
          {
            title: "Academic Year 2022-23 Action Taken",
            url: "https://mits.ac.in/public/uploads/surveys/CS-AY%202022-23%20ACTION%20TAKEN.pdf"
          },
          {
            title: "Academic Year 2022-23 Faculty Feedback",
            url: "https://mits.ac.in/public/uploads/surveys/CS-AY%202022-23%20FACULTY%20FEEDBACK.pdf"
          },
          {
            title: "Academic Year 2022-23 Parents Feedback",
            url: "https://mits.ac.in/public/uploads/surveys/CS-AY%202022-23%20PARENTS%20FEEDBACK.pdf"
          },
          {
            title: "Academic Year 2022-23 Students Feedback",
            url: "https://mits.ac.in/public/uploads/surveys/CS-AY%202022-23%20STUDENTS%20FEEDBACK.pdf"
          },
          {
            title: "Academic Year 2021-22 Action Taken",
            url: "https://mits.ac.in/public/uploads/surveys/CS-AY%202021-22%20ACTION%20TAKEN.pdf"
          },
          {
            title: "Academic Year 2021-22 Faculty Feedback",
            url: "https://mits.ac.in/public/uploads/surveys/CS-AY%202021-22%20FACULTY%20FEEDBACK.pdf"
          },
          {
            title: "Academic Year 2021-22 Parents Feedback",
            url: "https://mits.ac.in/public/uploads/surveys/CS-AY%202021-22%20PARENTS%20FEEDBACK.pdf"
          },
          {
            title: "Academic Year 2021-22 Students Feedback",
            url: "https://mits.ac.in/public/uploads/surveys/CS-AY%202021-22%20STUDENTS%20FEEDBACK.pdf"
          }
        ]
      },
      {
        title: "Feedback Surveys",
        links: [
          {
            title: "2022-23 Feedback Survey",
            url: "https://mits.ac.in/public/uploads/surveys/C.S.E(CS)%20Survey%20A.Y-%202022-2023.pdf"
          },
          {
            title: "2021-22 Feedback Survey",
            url: "https://mits.ac.in/public/uploads/surveys/C.S.E(CS)%20Survey%20A.Y-%202021-2022.pdf"
          }
        ]
      }
    ]
  }
};

export const ceMoreData: DepartmentMoreData = {
  subTabs: [
    {
      id: "lab",
      label: "Lab",
      externalUrl: "https://mits.ac.in/public/uploads/departments/Civil%20Engineering%20Labs.pdf",
      directPdf: true
    },
    {
      id: "civil-engineering-notes",
      label: "Civil Engineering Notes"
    },
    {
      id: "course-attainment",
      label: "Course Attainment"
    },
    {
      id: "mentor-mentee",
      label: "Mentor & Mentee"
    },
    {
      id: "stock-register",
      label: "Stock Register",
      externalUrl: "https://mits.ac.in/assets/pdf/stock-registers/Civil%20Stock%20Register.pdf"
    },
    {
      id: "surveys",
      label: "Surveys"
    },
    {
      id: "alumni",
      label: "Alumni"
    }
  ],
  labPdfUrl: "https://mits.ac.in/public/uploads/departments/Civil%20Engineering%20Labs.pdf",
  civilNotes: {
    title: "Civil Engineering Notes & FDP Sessions",
    fdpTitle: "Department of Civil Engineering Five-Day Faculty Development Programme (Hybrid Mode) “AICE 2025: Advances in Intelligent Civil Engineering”",
    fdpSessions: [
      {
        sno: "1",
        dateSchedule: "10-Sep-2025, Wednesday (Time: 2.30-4.30 PM)",
        resourcePerson: "Dr. Dipankar Roy, Dept. of Civil Eng., MITS",
        topic: "AI applications in Civil Engineering",
        link: "https://www.youtube.com/live/BKbv6dv1wAg?si=JdF_aPlrG9AO47GX"
      },
      {
        sno: "2",
        dateSchedule: "11-Sep-2025, Thursday (Time: 2.30-4.30 PM)",
        resourcePerson: "Dr. Arkopal Kishore Goswami, RCGSIDM, IIT Kharagpur",
        topic: "Transport & Environment - The Role of Urban Transport Electrification",
        link: "https://www.youtube.com/live/KAaBtYsWbT0?si=1xFe-cZ5OIMwIze1"
      },
      {
        sno: "3",
        dateSchedule: "12-Sep-2025, Friday (Time: 10:30 AM - 12:30 PM)",
        resourcePerson: "Dr. Roshni T, Dept. of Civil Eng., NIT Patna",
        topic: "Application of AI in water resources",
        link: "https://www.youtube.com/live/XfDCAhaGGRg?si=oyOdrbrrrQ_q6MHG"
      },
      {
        sno: "4",
        dateSchedule: "12-Sep-2025, Friday (Time: 2.30-4.30 PM)",
        resourcePerson: "Dr. Chandan M C, Dept. of Water resources and Ocean Eng., NITK Surathkal",
        topic: "Applications of Geoinformatics and SWAT+ for Hydrological Modelling: A special focus on Urban Centers",
        link: "https://www.youtube.com/live/sGTHL32D0iE?si=dmK1tJzMAFOSNhKq"
      },
      {
        sno: "5",
        dateSchedule: "13-Sep-2025, Saturday (Time: 10:30 AM - 12:30 PM)",
        resourcePerson: "Dr. Eeshan Bhaduri, Institute for Transport Studies - University of Leeds, UK",
        topic: "Travel Behavioral Modelling",
        link: "https://www.youtube.com/live/nuy_voW_2R8?si=PwW5XIX4XkbBHHbJ"
      },
      {
        sno: "6",
        dateSchedule: "13-Sep-2025, Saturday (Time: 2.30-4.30 PM)",
        resourcePerson: "Dr. Prasanna Kumar Behera, Dept. of Civil Eng., IIT Tirupati",
        topic: "Health Monitoring of Civil Structures",
        link: "https://www.youtube.com/live/0wUjCHzdXUA?si=-dNfT4cyr4yKTKX2"
      },
      {
        sno: "7",
        dateSchedule: "14-Sep-2025, Sunday (Time: 10:30 AM - 12:30 PM)",
        resourcePerson: "Dr. Sudeep Banad, WELL LABS, Bengaluru",
        topic: "Water security indicators using open-source geospatial data",
        link: "https://www.youtube.com/live/EUr729x6BCs?si=3ZgvvWG4o1ilxLFX"
      },
      {
        sno: "8",
        dateSchedule: "14-Sep-2025, Sunday (Time: 2.30-4.30 PM)",
        resourcePerson: "Dr. Bharath H Aithal, RCGSIDM, IIT Kharagpur",
        topic: "Remote Sensing and Machine Learning Applications",
        link: "https://www.youtube.com/live/IS2ltOGXi9Y?si=DyuZFYas0pCQBOnw"
      }
    ],
    materials: [
      {
        sno: "1",
        courseName: "Surveying",
        topicName: "Basic Surveying",
        materialUrl: "https://mits.ac.in/assets/pdf/civil/Basic%20Surveying.pdf",
        feedbackUrl: "https://forms.office.com/r/A1ziCVn7iE"
      },
      {
        sno: "2",
        courseName: "Strength of Materials",
        topicName: "Simple Stress and Strains",
        materialUrl: "https://mits.ac.in/assets/pdf/civil/Simple%20stress%20and%20strains.pdf",
        feedbackUrl: "https://forms.office.com/r/A1ziCVn7iE"
      },
      {
        sno: "3",
        courseName: "Strength of Materials",
        topicName: "Compound Stresses and Strains",
        materialUrl: "https://mits.ac.in/assets/pdf/civil/Compound%20Stresses%20and%20Strains.pdf",
        feedbackUrl: "https://forms.office.com/r/A1ziCVn7iE"
      },
      {
        sno: "4",
        courseName: "Strength of Materials",
        topicName: "Shear Stress",
        materialUrl: "https://mits.ac.in/assets/pdf/civil/Shear%20Stress.pdf",
        feedbackUrl: "https://forms.office.com/r/A1ziCVn7iE"
      },
      {
        sno: "5",
        courseName: "Strength of Materials",
        topicName: "Bending Stress",
        materialUrl: "https://mits.ac.in/assets/pdf/civil/Bending%20Stress.pdf",
        feedbackUrl: "https://forms.office.com/r/A1ziCVn7iE"
      },
      {
        sno: "6",
        courseName: "Strength of Materials",
        topicName: "Torsion",
        materialUrl: "https://mits.ac.in/assets/pdf/civil/Torsion.pdf",
        feedbackUrl: "https://forms.office.com/r/A1ziCVn7iE"
      },
      {
        sno: "7",
        courseName: "Strength of Materials",
        topicName: "Slope and Deflection",
        materialUrl: "https://mits.ac.in/assets/pdf/civil/Slope%20and%20Deflection.pdf",
        feedbackUrl: "https://forms.office.com/r/A1ziCVn7iE"
      },
      {
        sno: "8",
        courseName: "Engineering Mechanics",
        topicName: "Introduction to Engineering Mechanics and Frictions",
        materialUrl: "https://mits.ac.in/assets/pdf/civil/Introduction%20to%20Engineering%20Mechanics%20and%20Frictions.pdf",
        feedbackUrl: "https://forms.office.com/r/A1ziCVn7iE"
      }
    ]
  },
  courseAttainment: [
    {
      title: "2020-24 - Course Attainment",
      url: "https://mits.ac.in/assets/pdf/civil/Batch%202020-2024.pdf"
    },
    {
      title: "2019-23 - Course Attainment",
      url: "https://mits.ac.in/assets/pdf/civil/Batch%202019-2023.pdf"
    },
    {
      title: "2018-22 - Course Attainment",
      url: "https://mits.ac.in/assets/pdf/civil/Batch%202018-2022.pdf"
    },
    {
      title: "2022-23 - Course Attainment",
      url: "https://mits.ac.in/assets/pdf/civil/PO%20attainment%202022-23.pdf"
    },
    {
      title: "2016-20 - Course Attainment",
      url: "https://mits.ac.in/assets/pdf/civil/Course_Attainment_2016_2020.pdf"
    },
    {
      title: "2015-19 - Course Attainment",
      url: "https://mits.ac.in/assets/pdf/civil/Couse_Attainment_2015_2019.pdf"
    },
    {
      title: "2014-18 - Course Attainment",
      url: "https://mits.ac.in/assets/pdf/civil/Couse_Attainment_2014_2018.pdf"
    }
  ],
  mentorMentee: [
    {
      groupTitle: "Mentor & Mentee Name List",
      items: [
        {
          title: "2025-26 - Mentor & Mentee List for Civil",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/Civil%20Engineering%20Mentor%20Mentee%20List%20AY%202025-26.pdf",
          academicYear: "2025-26"
        },
        {
          title: "2024-25 - Mentor & Mentee List for Civil",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/2024-25%20-%20Mentor%20&%20Mentee%20List%20for%20Civil.pdf",
          academicYear: "2024-25"
        },
        {
          title: "2023-24 - Mentor & Mentee List for Civil",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/Civil-Mentor%20Metee%20List%20AY%202023-24.pdf",
          academicYear: "2023-24"
        },
        {
          title: "2022-23 - Mentor & Mentee List for Civil",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/Civil-Mentor%20Mentee%20List%20AY%202022-23.pdf",
          academicYear: "2022-23"
        },
        {
          title: "2020-21 - Mentor & Mentee List for Civil",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/Mentor_list_2020_2021.pdf",
          academicYear: "2020-21"
        },
        {
          title: "2019-20 - Mentor & Mentee List for Civil",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/Mentor_list%20_2019_2020.pdf",
          academicYear: "2019-20"
        }
      ]
    }
  ],
  surveys: [
    {
      title: "Surveys from Stakeholders",
      links: [
        {
          title: "2024-25 Academic Year Surveys",
          url: "https://mits.ac.in/assets/pdf/civil/AY%202024-25.pdf"
        },
        {
          title: "2023-24 Academic Year Surveys",
          url: "https://mits.ac.in/assets/pdf/civil/AY%202023-24.pdf"
        },
        {
          title: "2022-23 Academic Year Surveys",
          url: "https://mits.ac.in/assets/pdf/civil/AY%202022-23.pdf"
        },
        {
          title: "2019-20 Academic Year Surveys from Employer Feedback",
          url: "https://mits.ac.in/public/uploads/surveys/employer%20feedback.pdf"
        },
        {
          title: "2019-20 Academic Year Surveys from Faculty Feedback",
          url: "https://mits.ac.in/public/uploads/surveys/faculty%20feedback.pdf"
        },
        {
          title: "2019-20 Academic Year Surveys from Parent Feedback",
          url: "https://mits.ac.in/public/uploads/surveys/parent%20feedback.pdf"
        },
        {
          title: "2019-20 Academic Year Surveys from Curriculum by Students",
          url: "https://mits.ac.in/public/uploads/surveys/curriculum%20by%20students.pdf"
        },
        {
          title: "2019-20 Academic Year Surveys from Alumni 2019",
          url: "https://mits.ac.in/public/uploads/surveys/alumni%202019.pdf"
        }
      ]
    }
  ],
  alumniEvents: [
    {
      groupTitle: "Academic Year 2024-25",
      documents: [
        {
          title: "Alumni Guest Lecture by Finishers in Residential Buildings - 2024-10-30",
          url: "https://mits.ac.in/assets/pdf/civil/Finishers%20in%20Residential%20Buildings.pdf"
        },
        {
          title: "Alumni Guest Lecture Tunnelling by TBM and NATM - 2024-07-22",
          url: "https://mits.ac.in/assets/pdf/civil/Tunneling%20by%20TBM%20and%20NATM.pdf"
        },
        {
          title: "Alumni Guest Lecture Alumni talk on How to Reinforce the Stuctured Career - 2024-09-20",
          url: "https://mits.ac.in/assets/pdf/civil/How%20to%20reinforce%20the%20Structured%20Career.pdf"
        },
        {
          title: "Alumni Guest Lecture Alumni Talk on Manufacturing of Cement: Theory to the Reality - 2024-10-15",
          url: "https://mits.ac.in/assets/pdf/civil/Manufacturing%20of%20Cement%20Theory%20to%20the%20Reality.pdf"
        }
      ]
    },
    {
      groupTitle: "Academic Year 2023-24",
      documents: [
        {
          title: "Alumni Guest Lecture on Career Prospects for Civil Engineering Graduates After B. Tech. - 2023-10-07",
          url: "https://mits.ac.in/assets/pdf/civil/07-10-2023%20Career%20Prospects%20for%20Civil%20Engineering%20Graduates%20After%20B.%20Tech..pdf"
        },
        {
          title: "Alumni Guest Lecture on Career Opportunities in Civil Engineering - 2023-11-01",
          url: "https://mits.ac.in/assets/pdf/civil/01-11-2023%20Alumin%20Guest%20Lecture%20Interaction.pdf"
        },
        {
          title: "Alumni Guest Lecture The Path of Higher Education Abroad - 2024-02-03",
          url: "https://mits.ac.in/assets/pdf/civil/The%20Path%20of%20Higher%20Education%20Abroad.pdf"
        }
      ]
    },
    {
      groupTitle: "Academic Year 2021-22",
      documents: [
        {
          title: "Alumni Webinar on Path to Higher Studies in USA - 2022-03-16",
          url: "https://mits.ac.in/assets/pdf/civil/Alumni%20webinar%20on%20Path%20to%20Higher%20Studies%20in%20USA.pdf"
        }
      ]
    }
  ]
};

export const eeeMoreData: DepartmentMoreData = {
  subTabs: [
    { id: "stock-register", label: "Stock Register" },
    { id: "mentor-mentee", label: "Mentor & Mentee" },
    { id: "surveys", label: "Surveys" },
    { id: "obe", label: "OBE" }
  ],
  stockRegisterPdfUrl: "https://mits.ac.in/assets/pdf/stock-registers/EEE%20Stock%20Register.pdf",
  mentorMentee: [
    {
      groupTitle: "Academic Year Wise Mentor & Mentee Lists",
      items: [
        {
          title: "Mentor and Mentees 2025-26",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/Mentor%20Mentee%202025-26.pdf",
          academicYear: "2025-26"
        },
        {
          title: "Mentor and Mentees 2024-25",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/EEE%20Mentor%20Mentee%202024-25.pdf",
          academicYear: "2024-25"
        },
        {
          title: "Mentor and Mentees 2023-24",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/401b27dcbef50037379294bb75550a1c.pdf",
          academicYear: "2023-24"
        },
        {
          title: "Mentor and Mentees 2022-23",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/ebd489871342a31286a2092b694bdbbe.pdf",
          academicYear: "2022-23"
        },
        {
          title: "Mentor and Mentees 2021-22",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/0279c5241ae0f4475d14bfc6a0c14462.pdf",
          academicYear: "2021-22"
        },
        {
          title: "Mentor and Mentees 2020-21",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/a8a7d201c0a9b2404250e3df76819ad4.pdf",
          academicYear: "2020-21"
        },
        {
          title: "Mentor and Mentees 2019-20",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/bd0be3316f68455f8ce5ef405c9ad134.pdf",
          academicYear: "2019-20"
        },
        {
          title: "Mentor and Mentees 2017-18 & 2018-19",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/c424695fa33ca84ef4ac09bf2fd93ff6.pdf",
          academicYear: "2017-19"
        }
      ]
    }
  ],
  surveys: [
    {
      title: "Surveys from Stakeholders",
      links: [
        {
          title: "Feedback 2025-26",
          url: "https://mits.ac.in/public/uploads/surveys/EEE%20survey%202025-26.pdf"
        },
        {
          title: "Feedback 2024-25",
          url: "https://mits.ac.in/public/uploads/surveys/EEE%20survey%202024-25.pdf"
        },
        {
          title: "Feedback 2023-24",
          url: "https://mits.ac.in/public/uploads/surveys/2023-24%20Stakeholder.pdf"
        },
        {
          title: "Feedback 2022-23",
          url: "https://mits.ac.in/public/uploads/surveys/stake%20holders%20feedback%20EEE%202022-23.pdf"
        },
        {
          title: "Feedback 2021-22",
          url: "https://mits.ac.in/public/uploads/surveys/stake%20holders%20feedback%20EEE%202021-22.pdf"
        },
        {
          title: "Feedback 2020-21",
          url: "https://mits.ac.in/public/uploads/surveys/stake%20holders%20feedback%20EEE%202020-21.pdf"
        },
        {
          title: "Feedback 2019-20",
          url: "https://mits.ac.in/public/uploads/surveys/stake%20holders%20feedback%20EEE%202019-20.pdf"
        },
        {
          title: "Feedback 2018-19",
          url: "https://mits.ac.in/public/uploads/surveys/Stake%20holders%20feedback%202018-19.pdf"
        },
        {
          title: "Feedback 2017-18",
          url: "https://mits.ac.in/public/uploads/surveys/Stake%20Holders%20feedback%202017-18.pdf"
        }
      ]
    },
    {
      title: "Action Taken Report",
      links: [
        {
          title: "Action Taken Report 2025-26",
          url: "https://mits.ac.in/public/uploads/surveys/2025-26%20ATR.pdf"
        }
      ]
    }
  ],
  obe: {
    title: "Outcome Based Education (OBE)",
    subTabs: [
      { id: "pos-psos-peos", label: "PEOs, POs & PSOs" },
      { id: "remedial-classes", label: "Remedial Class Timetables" },
      { id: "graduate-exit-survey", label: "Graduate Exit Survey" },
      { id: "copo-attainment", label: "CO-PO Attainment" }
    ],
    posPsosPeosPdfUrl: "https://mits.ac.in/public/uploads/courseattainment/2.%20POs,%20PEOs%20and%20PSOs%20-%20EEE-compressed.pdf",
    remedialClasses: [
      {
        title: "EEE - Remedial Class Timetable for the Academic Year 2025-26",
        url: "https://mits.ac.in/assets/pdf/eee/EEE%20-%20Remedial%20Class%20Timetable%20for%20the%20Academic%20Year%202025-26-compressed.pdf"
      },
      {
        title: "EEE - Remedial Class Timetable for the Academic Year 2024-25",
        url: "https://mits.ac.in/assets/pdf/eee/EEE%20-%20Remedial%20Class%20Timetable%20for%20the%20Academic%20Year%202024-25-compressed.pdf"
      },
      {
        title: "EEE - Remedial Class Timetable for the Academic Year 2023-24",
        url: "https://mits.ac.in/assets/pdf/eee/EEE_Remedial%20Class%20Timetable_AY%202023-24.pdf"
      },
      {
        title: "EEE - Remedial Class Timetable for the Academic Year 2022-23",
        url: "https://mits.ac.in/assets/pdf/eee/EEE_Remedial%20Class%20Timetable_AY%202022-23.pdf"
      },
      {
        title: "EEE - Remedial Class Timetable for the Academic Year 2021-22",
        url: "https://mits.ac.in/assets/pdf/eee/EEE_Remedial%20Class%20Timetable_AY%202021-22.pdf"
      },
      {
        title: "EEE - Remedial Class Timetable for the Academic Year 2020-21",
        url: "https://mits.ac.in/assets/pdf/eee/EEE_Remedial%20Class%20Timetable_AY%202020-21.pdf"
      },
      {
        title: "EEE - Remedial Class Timetable for the Academic Years 2014-20",
        url: "https://mits.ac.in/assets/pdf/eee/Remedial%20Timetable.pdf"
      }
    ],
    graduateExitSurvey: [
      {
        title: "Graduate Exit Survey 2026",
        url: "https://mits.ac.in/assets/pdf/eee/Graduate%20Survey%202026.pdf"
      },
      {
        title: "Graduate Exit Survey 2025",
        url: "https://mits.ac.in/assets/pdf/eee/EEE%20Graduate%20Exit%20Survey%202025.pdf"
      },
      {
        title: "Graduate Exit Survey 2024",
        url: "https://mits.ac.in/assets/pdf/eee/Graduate%202024.pdf"
      },
      {
        title: "Graduate Exit Survey 2023",
        url: "https://mits.ac.in/assets/pdf/eee/Graduate%202023.pdf"
      },
      {
        title: "Graduate Exit Survey 2022",
        url: "https://mits.ac.in/assets/pdf/eee/Graduate%20exit%20survey%202022.pdf"
      },
      {
        title: "Graduate Exit Survey 2021",
        url: "https://mits.ac.in/assets/pdf/eee/Graduate%20exit%20survey%202021.pdf"
      },
      {
        title: "Graduate Exit Survey 2020",
        url: "https://mits.ac.in/assets/pdf/eee/Graduate%20exit%20survey%202020.pdf"
      },
      {
        title: "Graduate Exit Survey 2019",
        url: "https://mits.ac.in/assets/pdf/eee/Graduate%20exit%20survey%202019.pdf"
      },
      {
        title: "Graduate Exit Survey 2018",
        url: "https://mits.ac.in/assets/pdf/eee/Graduate%20Exit%20Survey%202018.pdf"
      },
      {
        title: "Graduate Exit Survey 2017",
        url: "https://mits.ac.in/assets/pdf/eee/Graduate%20Exit%20Survey%202017.pdf"
      }
    ],
    copoAttainment: [
      {
        title: "CO-PO Attainment 2021-25 Batch",
        url: "https://mits.ac.in/assets/pdf/eee/CO-PO%20Attainment%202021-25%20Batch.pdf"
      },
      {
        title: "CO-PO Attainment 2020-24 Batch",
        url: "https://mits.ac.in/assets/pdf/eee/CO-PO%20Attainment%202020-24%20Batch.pdf"
      },
      {
        title: "CO-PO Attainment 2019-23 Batch",
        url: "https://mits.ac.in/assets/pdf/eee/CO-PO%20Attainment%202019-23%20Batch.pdf"
      },
      {
        title: "CO-PO Attainment 2018-22 Batch",
        url: "https://mits.ac.in/assets/pdf/eee/EEE%202018-22%20Batch%20CO-PO%20attainment.pdf"
      },
      {
        title: "CO-PO Attainment 2017-21 Batch",
        url: "https://mits.ac.in/assets/pdf/eee/EEE%202017-21%20Batch%20CO-PO%20attainment.pdf"
      },
      {
        title: "CO-PO Attainment 2016-20 Batch",
        url: "https://mits.ac.in/assets/pdf/eee/EEE%202016%20-%2020%20Batch%20CO-PO%20attainment.pdf"
      },
      {
        title: "CO-PO Attainment 2015-19 Batch",
        url: "https://mits.ac.in/assets/pdf/eee/CO-PO-2015-19.pdf"
      },
      {
        title: "CO-PO Attainment 2014-18 Batch",
        url: "https://mits.ac.in/assets/pdf/eee/CO-PO-2014-18.pdf"
      }
    ]
  }
};

export const meMoreData: DepartmentMoreData = {
  "subTabs": [
    {
      "id": "phd",
      "label": "PhD"
    },
    {
      "id": "newsletters",
      "label": "Newsletters"
    },
    {
      "id": "stock-register",
      "label": "Stock Register"
    },
    {
      "id": "surveys",
      "label": "Survey"
    },
    {
      "id": "innovative-teaching",
      "label": "Innovation in Teaching-Learning Process"
    }
  ],
  "stockRegisterPdfUrl": "https://mits.ac.in/assets/pdf/stock-registers/Mechanical%20Stock%20Register.pdf",
  "doctoral": {
    "title": "Doctoral",
    "description": "There is provision for research scholars to conduct their doctoral research at the Department of Mechanical Engineering at MITS through its Recognized Research Centre under JNTUA, Anantapuramu. The scholars can benefit from the intellectual wealth of highly qualified and experienced faculty of the Department with the advanced facilities for research. Given below is a list of scholars who are working under the guidance of the Department faculty towards PhD degree from JNTUA.",
    "batches": [
      {
        "batchTitle": "Full-Time Research Scholars Details 2014-2015 Batch",
        "scholars": [
          {
            "sno": "1",
            "name": "V. Chengal Reddy",
            "guide": "Dr. G. Harinath Gowd",
            "coGuide": "Prof. MLS. Deva Kumar, Professor, Dept. of ME, JNTUA College of Engineering, Anantapuramu",
            "dateOfJoining": "21-04-2015",
            "researchTitle": "Laser Beam Machining"
          }
        ]
      },
      {
        "batchTitle": "Full-Time Research Scholars Details 2015-2016 Batch",
        "scholars": [
          {
            "sno": "1",
            "name": "T. Siva Prasad",
            "guide": "Dr. C. Yuvaraj",
            "coGuide": "Dr. K. Prahlada Rao, Principal, JNTUA College of Engineering, Ananthapuramu",
            "dateOfJoining": "2015-16",
            "researchTitle": "Composite Materials"
          },
          {
            "sno": "2",
            "name": "H. Raghavendra",
            "guide": "Dr. P. Suryanarayana Raju",
            "coGuide": "Dr. K. Hemachandra Reddy, Professor, Dept. of ME, JNTUA College of Engineering, Ananthapuramu",
            "dateOfJoining": "2015-16",
            "researchTitle": "Renewable Energy"
          },
          {
            "sno": "3",
            "name": "Bazani Shaik",
            "guide": "Dr. G. Harinath Gowd",
            "coGuide": "Prof. B. Durga Prasad, Professor, Dept. of ME, JNTUA College of Engineering, Ananthapuramu",
            "dateOfJoining": "2015-16",
            "researchTitle": "Friction Stir process"
          }
        ]
      }
    ]
  },
  "studentProjects": {
    "groupTitle": "Newsletters",
    "documents": [
      {
        "title": "Newsletter 2024 - Issue 4",
        "url": "https://mits.ac.in/assets/pdf/mech/Newsletter 2024-Issue 4.pdf"
      },
      {
        "title": "Newsletter 2024 - Issue 3",
        "url": "https://mits.ac.in/assets/pdf/mech/Newsletter 2024-Issue 3.pdf"
      },
      {
        "title": "Newsletter 2024 - Issue 2",
        "url": "https://mits.ac.in/assets/pdf/mech/Newsletter 2024-Issue 2.pdf"
      },
      {
        "title": "Newsletter 2024 - Issue 1",
        "url": "https://mits.ac.in/assets/pdf/mech/Newsletter 2024-issue 1.pdf"
      },
      {
        "title": "Newsletter 2023 - Issue 4",
        "url": "https://mits.ac.in/assets/pdf/mech/2023 NewsLetter issue 4.pdf"
      },
      {
        "title": "Newsletter 2023 - Issue 3",
        "url": "https://mits.ac.in/assets/pdf/mech/2023 NewsLetter Issue 3.pdf"
      },
      {
        "title": "Newsletter 2023 - Issue 2",
        "url": "https://mits.ac.in/assets/pdf/mech/2023 NewsLetter Issue 2.pdf"
      },
      {
        "title": "Newsletter 2023 - Issue 1",
        "url": "https://mits.ac.in/assets/pdf/mech/2023 NewsLetter Issue 1.pdf"
      },
      {
        "title": "Newsletter 2022",
        "url": "https://mits.ac.in/assets/pdf/mech/NEWSLETTER 2022.pdf"
      }
    ]
  },
  "surveys": [
    {
      "title": "Surveys from Stakeholders",
      "links": [
        {
          "title": "Stake Holder Feedback (A.Y. 2025-26)",
          "url": "https://mits.ac.in/assets/pdf/mech/2025-26 Mech Feedback.pdf"
        },
        {
          "title": "Stake Holder Feedback (A.Y. 2024-25)",
          "url": "https://mits.ac.in/assets/pdf/mech/2024-25 Mech Feedback.pdf"
        },
        {
          "title": "Stake Holder Feedback (A.Y. 2023-24)",
          "url": "https://mits.ac.in/assets/pdf/mech/2023-24 Mech Feedback.pdf"
        },
        {
          "title": "Stake Holder Feedback (A.Y. 2022-23)",
          "url": "https://mits.ac.in/assets/pdf/mech/2022-23 Mech Feedback.pdf"
        },
        {
          "title": "Stake Holder Feedback (A.Y. 2021-22)",
          "url": "https://mits.ac.in/assets/pdf/mech/2021-22 Mech Feedback.pdf"
        },
        {
          "title": "Stake Holder Feedback (A.Y. 2020-21)",
          "url": "https://mits.ac.in/public/uploads/surveys/fdsurvey.PDF"
        }
      ]
    }
  ],
  "innovativeTeaching": {
    "groupTitle": "Innovation in Teaching-Learning Process",
    "description": "The Department of Mechanical Engineering delivers a dynamic, student-focused education through modern, tech-enabled classrooms and innovative teaching methods. Critical thinking, teamwork, and practical skills are cultivated through teaching methodologies such as Project-Based Learning, Flipped Classrooms, Blended Learning, and Collaborative Learning. Real-world challenges are prepared for by students through project-based learning, case studies, industrial problem-solving, and participation in technical events. Further enrichment of the learning experience is provided by online platforms like NPTEL, MOOCs, and SWAYAM.",
    "tableTitle": "Innovation in Teaching-Learning Process",
    "tableItems": [
      {
        "sno": 1,
        "courseCodeAndName": "20ME101 – Engineering Graphics",
        "facultyName": "Dr. Anantha Raman L.",
        "innovativeDetails": "Developed Tutorial video to draw engineering drawings using AutoCAD",
        "link": "https://mitsacin-my.sharepoint.com/:u:/g/personal/dhrubajitsarma_mits_ac_in/EZGygMdVDghDjJM8Y0tUyp8BWyajC3nsWpRRt8Dj9pt2xQ?e=w8dhPf"
      },
      {
        "sno": 2,
        "courseCodeAndName": "20ME114 – Machine Learning for Mechanical Engineers",
        "facultyName": "Dr. S. Baskaran",
        "innovativeDetails": "Developed Case Studies with Python Codes on various Machine Learning Algorithms",
        "link": "https://mitsacin-my.sharepoint.com/:u:/g/personal/dhrubajitsarma_mits_ac_in/EQ5b4GYNWHxMnnRCgeDeNnoBFa2WSJL60T5jowloj1ftlg?e=6UD8sU"
      },
      {
        "sno": 3,
        "courseCodeAndName": "20ME203 – Fluid Mechanics and Hydraulic Machinery Laboratory",
        "facultyName": "Dr. Bageerathan T.",
        "innovativeDetails": "Developed Python Codes for Laboratory Observations and Numerical Calculations",
        "link": "https://mitsacin-my.sharepoint.com/:u:/g/personal/dhrubajitsarma_mits_ac_in/EYjxxXUbDPBBv0LBbz4nkPEBGDFKvWxV3Sw4km5lrchwTw?e=SQc3eP"
      },
      {
        "sno": 4,
        "courseCodeAndName": "20ME211 – Robotics Laboratory",
        "facultyName": "Dr. Anantha Raman L.",
        "innovativeDetails": "Developed Codes and Algorithms for IoT Automation using Python & TinkerCAD",
        "link": "https://mitsacin-my.sharepoint.com/:u:/g/personal/dhrubajitsarma_mits_ac_in/ERSkP-jxUzpEsb2TKggXch4BXFC03ByTIzEC2531t44HZw?e=BjyBUG"
      }
    ],
    "critiqueReviewText": "To ensure the highest quality and academic rigor, the course coordinator(s) request faculty and student review through the provided link.",
    "critiqueReviewLink": "https://forms.office.com/r/n5AAfZEHEX",
    "documents": []
  }
};

export const cstMoreData: DepartmentMoreData = {
  subTabs: [
    {
      id: "mentor-mentee",
      label: "Mentor & Mentee"
    },
    {
      id: "stock-register",
      label: "Stock Register",
      externalUrl: "https://mits.ac.in/assets/pdf/stock-registers/CST-Stock-Registers.pdf",
      directPdf: true
    },
    {
      id: "surveys",
      label: "Surveys"
    },
    {
      id: "obe",
      label: "OBE"
    }
  ],
  stockRegisterPdfUrl: "https://mits.ac.in/assets/pdf/stock-registers/CST-Stock-Registers.pdf",
  mentorMentee: [
    {
      groupTitle: "Mentor & Mentee List",
      items: [
        {
          title: "Mentoring List - 2025-26",
          pdfUrl: "https://mits.ac.in/assets/pdf/cst/2025-26%20CST-Mentor-Mentee.pdf",
          academicYear: "2025-26"
        },
        {
          title: "Mentoring List - 2024-25",
          pdfUrl: "https://mits.ac.in/assets/pdf/cst/2024-25%20CST-Mentor-Mentee.pdf",
          academicYear: "2024-25"
        },
        {
          title: "Mentoring List - 2023-24",
          pdfUrl: "https://mits.ac.in/assets/pdf/cst/2023-24%20CST-Mentor-Mentee.pdf",
          academicYear: "2023-24"
        },
        {
          title: "Mentoring List - 2022-23",
          pdfUrl: "https://mits.ac.in/assets/pdf/cst/CST-2022-23.pdf",
          academicYear: "2022-23"
        },
        {
          title: "Mentoring List - 2021-22",
          pdfUrl: "https://mits.ac.in/assets/pdf/cst/2021-22%20CST-Mentor-Mentee.pdf",
          academicYear: "2021-22"
        },
        {
          title: "Mentoring List - 2020-21",
          pdfUrl: "https://mits.ac.in/assets/pdf/cst/CST-2020-21.pdf",
          academicYear: "2020-21"
        },
        {
          title: "Mentoring List - 2019-20",
          pdfUrl: "https://mits.ac.in/assets/pdf/cst/CST-2019-20.pdf",
          academicYear: "2019-20"
        }
      ]
    }
  ],
  surveys: [
    {
      title: "Surveys from Stakeholders",
      links: [
        {
          title: "Stakeholder Feedback - Action Taken Report Academic Year 2025-26",
          url: "https://mits.ac.in/public/uploads/surveys/STAKEHOLDER%20FEEDBACK-ACTION%20TAKEN%20REPORT%20ACADEMIC%20YEAR%202025-26.pdf"
        },
        {
          title: "Stakeholder Feedback - Action Taken Report Academic Year 2024-25",
          url: "https://mits.ac.in/public/uploads/surveys/STAKEHOLDERFEEDBACKATRAY2425.pdf"
        },
        {
          title: "2023-24 Academic Year Surveys from Stakeholders",
          url: "https://mits.ac.in/public/uploads/surveys/2023-24%20Academic%20Year%20Surveys%20from%20Stakeholders.pdf"
        },
        {
          title: "Alumni Survey 2023-24 Admitted Batches",
          url: "https://mits.ac.in/public/uploads/surveys/CST_Alumni%20Survey_2023-24.pdf"
        },
        {
          title: "Employer Survey 2023-24 Amitted Batches",
          url: "https://mits.ac.in/public/uploads/surveys/CST_Employer%20Survey_2023-24.pdf"
        },
        {
          title: "Graduate Survey 2023-24 Admitted Batches",
          url: "https://mits.ac.in/public/uploads/surveys/CST_Graduate%20Survey_2023-24.pdf"
        },
        {
          title: "2022-23 Academic Year Surveys from Stakeholders",
          url: "https://mits.ac.in/public/uploads/surveys/2022-23%20Academic%20Year%20Surveys%20from%20Stakeholders.pdf"
        },
        {
          title: "2021-22 Academic Year Surveys from Stakeholders",
          url: "https://mits.ac.in/public/uploads/surveys/55e056ebcea4af36725d9ce10978e9f7.pdf"
        },
        {
          title: "2020-21 Academic Year Surveys from Stakeholders",
          url: "https://mits.ac.in/public/uploads/surveys/2020-21%20Academic%20Year%20Surveys%20from%20Stakeholders.pdf"
        },
        {
          title: "Alumni Survey 2019 & 2018 Admitted Batches",
          url: "https://mits.ac.in/public/uploads/surveys/Alumni%20Survey%202019%20&%202018%20Admitted%20Batches.pdf"
        },
        {
          title: "Employer Survey 2019 & 2018 Admitted Batches",
          url: "https://mits.ac.in/public/uploads/surveys/Employer%20Survey%202019%20&%202018%20Admitted%20Batches.pdf"
        },
        {
          title: "Graduate Survey 2019 & 2018 Admitted Batches",
          url: "https://mits.ac.in/public/uploads/surveys/Graduate%20Survey%202019%20&%202018%20Admitted%20Batches.pdf"
        }
      ]
    }
  ],
  obe: {
    title: "Outcome Based Education (OBE)",
    remedialClasses: [
      {
        title: "Semester I 2024-2025",
        url: "https://mits.ac.in/assets/pdf/cst/II,%20III%20&%20IV%20Year%20Sem%20-%20I%20Remedial%20Class%20Schedule%20AY%20-%202024-25.pdf"
      },
      {
        title: "Semester I & II 2023-2024",
        url: "https://mits.ac.in/assets/pdf/cst/CST%20Remedial%20Class%202023-24.pdf"
      },
      {
        title: "Semester I & II 2022-2023",
        url: "https://mits.ac.in/assets/pdf/cst/CST%20Remedial%20Class%202022-23.pdf"
      },
      {
        title: "Semester I & II 2021-2022",
        url: "https://mits.ac.in/assets/pdf/cst/CST%20Remedial%20Class%202021-22.pdf"
      },
      {
        title: "Semester I & II 2020-2021",
        url: "https://mits.ac.in/assets/pdf/cst/CST%20Remedial%20Class%202020-21.pdf"
      },
      {
        title: "Semester I & II 2019-2020",
        url: "https://mits.ac.in/assets/pdf/cst/CST%20Remedial%20Class%202019-20.pdf"
      }
    ],
    copoAttainment: [
      {
        title: "CO-PO Attainment Batch 1",
        url: "https://mits.ac.in/assets/pdf/cst/co%20po%20attainment%202018%20Batch.pdf"
      },
      {
        title: "CO-PO Attainment Batch 2",
        url: "https://mits.ac.in/assets/pdf/cst/co%20po%20attainment%202019%20Batch.pdf"
      },
      {
        title: "Overall Attainment Batch 1 & Batch 2",
        url: "https://mits.ac.in/assets/pdf/cst/Comparision%20of%20overall%20attenment.pdf"
      }
    ]
  }
};

export const mcaMoreData: DepartmentMoreData = {
  subTabs: [
    { id: "alumni", label: "Alumni" },
    { id: "innovative-teaching", label: "Innovative Teaching and Learning" },
    { id: "budget", label: "Department Budget" },
    { id: "newsletters", label: "Newsletter" },
    { id: "professional-activities", label: "Professional Society Activities" },
    { id: "mentor-mentee", label: "Mentor & Mentee" },
    { id: "committees", label: "Department Committees" },
    { id: "surveys", label: "Survey" },
    { id: "research", label: "Research" }
  ],
  budgetPdfUrl: "https://mits.ac.in/assets/pdf/ca/Budget%20MCA%20Department.pdf",
  alumniEvents: [
    {
      groupTitle: "2024-25",
      documents: [
        {
          title: "Alumni Reports 2024-25",
          url: "https://mits.ac.in/assets/pdf/ca/Alumni%202024-25.pdf"
        }
      ]
    },
    {
      groupTitle: "2023-24",
      documents: [
        {
          title: "Alumni Meet Report 2024",
          url: "https://mits.ac.in/assets/pdf/ca/Department%20of%20MCA%20-%20Alumni%20meet%2030.3.24.pdf"
        },
        {
          title: "Alumni Guest Lecture Reports 2023-24",
          url: "https://mits.ac.in/assets/pdf/ca/Alumni%20Guest%20Lecture%20Reports%202023-24.pdf"
        }
      ]
    },
    {
      groupTitle: "2022-23",
      documents: [
        {
          title: "Alumni Guest Lecture Reports 2022-23",
          url: "https://mits.ac.in/assets/pdf/ca/Alumni%20Guest%20Lecture%20Reports%202022-23.pdf"
        }
      ]
    },
    {
      groupTitle: "2021-22",
      documents: [
        {
          title: "Alumni Guest Lecture Reports 2021-22",
          url: "https://mits.ac.in/assets/pdf/ca/2021-22-Alumni.pdf"
        }
      ]
    },
    {
      groupTitle: "2020-21",
      documents: [
        {
          title: "Alumni Guest Lecture Reports 2020-21",
          url: "https://mits.ac.in/assets/pdf/ca/2020-21-Alumni.pdf"
        }
      ]
    },
    {
      groupTitle: "2019-20",
      documents: [
        {
          title: "Alumni Guest Lecture Reports 2019-20",
          url: "https://mits.ac.in/assets/pdf/ca/2019-20-Alumni.pdf"
        }
      ]
    },
    {
      groupTitle: "2018-19",
      documents: [
        {
          title: "Alumni Guest Lecture Reports 2018-19",
          url: "https://mits.ac.in/assets/pdf/ca/2018-19-Alumni.pdf"
        }
      ]
    },
    {
      groupTitle: "2017-18",
      documents: [
        {
          title: "Alumni Guest Lecture Reports 2017-18",
          url: "https://mits.ac.in/assets/pdf/ca/2017-18-Alumni.pdf"
        }
      ]
    },
    {
      groupTitle: "2016-17",
      documents: [
        {
          title: "Alumni Guest Lecture Reports 2016-17",
          url: "https://mits.ac.in/assets/pdf/ca/2016-17-Alumni.pdf"
        }
      ]
    },
    {
      groupTitle: "2015-16",
      documents: [
        {
          title: "Alumni Guest Lecture Reports 2015-16",
          url: "https://mits.ac.in/assets/pdf/ca/2015-16-Alumni.pdf"
        }
      ]
    }
  ],
  innovativeTeaching: {
    groupTitle: "Innovative Teaching and Learning",
    documents: [
      {
        title: "Innovative Teaching and Learning 2024-25",
        url: "https://mits.ac.in/assets/pdf/ca/innovative%20learning%202024-2025.pdf"
      },
      {
        title: "Innovative Teaching and Learning 2023-24",
        url: "https://mits.ac.in/assets/pdf/ca/Innovative%20Teaching%20Learning%20Process-2023-24.pdf"
      },
      {
        title: "Innovative Teaching and Learning 2022-23",
        url: "https://mits.ac.in/assets/pdf/ca/Innovative%20Teaching%20Learning%20Process-2022-23.pdf"
      },
      {
        title: "Innovative Teaching and Learning 2021-22",
        url: "https://mits.ac.in/assets/pdf/ca/Innovative%20Teaching%20Learning%20Process-2021-22.pdf"
      }
    ],
    critiqueReviewText: "To uphold the highest standards of quality and academic rigor, the course coordinators invite faculty and student feedback through the provided link.",
    critiqueReviewLink: "https://forms.gle/3nD7xdRoBP8X94LdA"
  },
  newsletterGroup: {
    groupTitle: "Newsletter",
    documents: [
      {
        title: "Newsletter 2025-26",
        url: "https://mits.ac.in/assets/pdf/ca/MCA_Newsletter%202025_2026.pdf"
      },
      {
        title: "Newsletter 2024-25",
        url: "https://mits.ac.in/assets/pdf/ca/Newsletter-2024-25.pdf"
      },
      {
        title: "Newsletter 2023-24",
        url: "https://mits.ac.in/assets/pdf/ca/MCA-Newsletter%202023-2024.pdf"
      },
      {
        title: "Newsletter 2022-23",
        url: "https://mits.ac.in/assets/pdf/ca/MCA%20Newsletter%202022-2023.pdf"
      },
      {
        title: "Newsletter 2021-22",
        url: "https://mits.ac.in/assets/pdf/ca/MCA%20Newsletter%202021-2022.pdf"
      },
      {
        title: "Newsletter 2020-21",
        url: "https://mits.ac.in/assets/pdf/ca/MCA%20Newsletter%202020-2021.pdf"
      },
      {
        title: "Newsletter 2019-20",
        url: "https://mits.ac.in/assets/pdf/ca/MCA%20Newsletter%202019-2020.pdf"
      },
      {
        title: "Newsletter 2018-19",
        url: "https://mits.ac.in/assets/pdf/ca/MCA%20Newsletter%202018-2019.pdf"
      },
      {
        title: "Newsletter 2017-18",
        url: "https://mits.ac.in/assets/pdf/ca/MCA%20Newsletter%202017-2018.pdf"
      }
    ]
  },
  professionalActivities: [
    {
      description: "A Workshop on “Machine Learning: From Fundamentals to Future Frontiers” was organised by Department of Computer Applications in association with ISTE, MITS on 22nd December 2025.",
      reportUrl: "https://mits.ac.in/assets/pdf/ca/Machine%20Learning%20From%20Fundamentals%20to%20Future%20Frontiers.pdf"
    },
    {
      description: "A One Day Workshop on \"Generative AI Using Microservices Architecture\" was organized by Department of Computer Applications In association with ISTE & IIC on 13th June 2025.",
      reportUrl: "https://mits.ac.in/assets/pdf/ca/Generative%20AI%20Using%20Microservices%20Architecture.pdf"
    },
    {
      description: "The Two-day Workshop on \"The Role of NS3 in Enhancing Cybersecurity through Cloud based\" Innovations was organized by Department of Computer Applications in Association with ISTE 29th January 2025 to 30th January 2025.",
      reportUrl: "https://mits.ac.in/assets/pdf/ca/Two-day%20Workshop%20on%20The%20Role%20of%20NS3%20in%20Enhancing%20Cybersecurity%20through%20Cloud%20based%20Innovations%20was%20organized%20by%20Department%20of%20Computer%20Application%2029th%20January%202025.pdf"
    },
    {
      description: "An Expert Talk on \"7 Habits of Highly Effective People\" was organized by Department of Computer Applications in Association with ISTE 27th December 2024.",
      reportUrl: "https://mits.ac.in/assets/pdf/ca/Expert%20Talk%20on%207%20Habits%20of%20Highly%20Effective%20People%20was%20organized%20by%20Department%20of%20Computer%20Applications%20in%20Association%20with%20ISTE%2027th%20December%202024.pdf"
    },
    {
      description: "A Guest Lecture on \"UX/UI Design\" was organized by Department of Computer Applications in Association with ISTE 12th December 2024.",
      reportUrl: "https://mits.ac.in/assets/pdf/ca/A%20Guest%20Lecture%20on%20UXUI%20Design%20was%20organized%20by%20Department%20of%20Computer%20Applications%20in%20Association%20with%20ISTE%20%2012th%20December%202024.pdf"
    },
    {
      description: "A “3-Day Cyber Security Hands-on Training with Next Generation Firewall” was organized by Department of Computer Applications in Association with IEEE GRSS Student Branch from 25th to 27th July 2024.",
      reportUrl: "https://mits.ac.in/assets/pdf/ca/Cyber%20Security%20with%20Next%20Generation%20Firewall%20report-min.pdf"
    },
    {
      description: "A Guest Lecture on “Software Testing Tools & Techniques\" was organised by Department of Computer Applications on 14th March 2024.",
      reportUrl: "https://mits.ac.in/assets/pdf/ca/Guest%20Lecture%20on%20%E2%80%9Csoftware%20Testing%20Tools%20and%20Techniques-min.pdf"
    },
    {
      description: "IEEE MITS Computational Intelligence Society Student Branch Chapter at MITS has been formed on 17th February 2024.",
      reportUrl: "https://mits.ac.in/assets/pdf/ca/CIS%20formation%20Letter-min.pdf"
    },
    {
      description: "An IEEE MITS Computational Intelligence Society Inauguration was organised by Department of Computer Applications on 09th February 2024.",
      reportUrl: "https://mits.ac.in/assets/pdf/ca/IEEE%20MITS%20Computational%20Intelligence%20Society%20Inauguration-min.pdf"
    },
    {
      description: "A Guest Lecture on \"Career Guidance for IT Industry\" was organised by Department of Computer Applications on 03rd February 2024.",
      reportUrl: "https://mits.ac.in/assets/pdf/ca/Alumni%20Guest%20Lecture%20%E2%80%9CCareer%20Guidance%20in%20IT%20industry-min.pdf"
    }
  ],
  mentorMentee: [
    {
      groupTitle: "Mentor & Mentee Lists",
      items: [
        {
          title: "Mentor - Mentee Academic Year 2025-2026",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/Mentor%20-%20Mentee%20Academic%20Year%202025-2026.pdf",
          academicYear: "2025-26"
        },
        {
          title: "Mentor - Mentee Academic Year 2024-2025",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/mentor%20-mentee%20Allotment%20AY%202024-2025.pdf",
          academicYear: "2024-25"
        },
        {
          title: "Mentor - Mentee Academic Year 2023-2024",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/Mentor%20-mentee%20Allotment%20AY%202023-2024.pdf",
          academicYear: "2023-24"
        },
        {
          title: "Mentor - Mentee Academic Year 2022-2023",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/Mentor%20-mentee%20Allotment%20AY%202022-2023.pdf",
          academicYear: "2022-23"
        },
        {
          title: "Mentor - Mentee Academic Year 2021-2022",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/Mentor%20-mentee%20Allotment-AY%202021-22.pdf",
          academicYear: "2021-22"
        },
        {
          title: "Mentor - Mentee Academic Year 2020-2021",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/Mentor%20-mentee%20Allotment-%20AY%202020-21.pdf",
          academicYear: "2020-21"
        },
        {
          title: "Student Mentoring System : Mentor - Mentee",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/2b45ff2582bfd10bbb1f485a4591b817.pdf"
        }
      ]
    }
  ],
  committees: {
    groupTitle: "Department Committees",
    documents: [
      {
        title: "Various Committee's for the Academic Year 2026-27",
        url: "https://mits.ac.in/assets/pdf/ca/Department%20Commitee%202026-2027.pdf"
      },
      {
        title: "Various Committee's for the Academic Year 2025-26",
        url: "https://mits.ac.in/assets/pdf/ca/co%20ordinator%20list%202025-26.pdf"
      },
      {
        title: "Various Committee's for the Academic Year 2024-25",
        url: "https://mits.ac.in/assets/pdf/ca/Various%20Committee-%20AY%202024-25.pdf"
      },
      {
        title: "Various Committee's for the Academic Year 2023-24",
        url: "https://mits.ac.in/assets/pdf/ca/MCA_Dep_committee_2023-24.pdf"
      }
    ]
  },
  surveys: [
    {
      title: "Surveys from Stakeholders",
      links: [
        {
          title: "Survey 2025-26 (Stakeholder Feedback)",
          url: "https://mits.ac.in/assets/pdf/ca/MCA_Stakeholder_Feedback_2025_2026.pdf"
        },
        {
          title: "Survey 2024-25",
          url: "https://mits.ac.in/assets/pdf/ca/Survey%202024-25.rar"
        },
        {
          title: "Survey 2023-24",
          url: "https://mits.ac.in/assets/pdf/ca/survey%202023%20-%202024.rar"
        },
        {
          title: "Survey 2022-23",
          url: "https://mits.ac.in/assets/pdf/ca/survey%202022%20-%202023.rar"
        },
        {
          title: "Survey 2021-22",
          url: "https://mits.ac.in/assets/pdf/ca/Survey%202021-22.rar"
        }
      ]
    }
  ],
  researchProjects: {
    overview:
      "The Department secured its first externally funded project in the academic year 2015–16, and since then, research funding has shown steady growth. Below is a list of funded research projects undertaken by the department in recent years.",
    sections: [
      {
        academicYear: "2023-24",
        headers: [
          "S.No",
          "Name of the Principal Investigator",
          "Project Title",
          "Funding Agency",
          "Duration",
          "Total Sanctioned Amount",
          "Status of the Projects"
        ],
        rows: [
          {
            "S.No": "1",
            "Name of the Principal Investigator": "Dr. J. Srinivasan",
            "Project Title": "Application Development for Payroll Management System",
            "Funding Agency": "K TECH Power Projects, Chennai",
            "Duration": "2 years",
            "Total Sanctioned Amount": "Rs.1,30,000/-",
            "Status of the Projects": "Ongoing"
          },
          {
            "S.No": "2",
            "Name of the Principal Investigator": "Dr. C. Sivaraj",
            "Project Title": "College Management Systems",
            "Funding Agency": "Bals Technology, Chennai",
            "Duration": "2 years",
            "Total Sanctioned Amount": "Rs.1,00,000/-",
            "Status of the Projects": "Ongoing"
          }
        ]
      },
      {
        academicYear: "2021-22",
        headers: [
          "S.No",
          "Name of the Principal Investigator",
          "Project Title",
          "Funding Agency",
          "Duration",
          "Total Sanctioned Amount",
          "Status of the Projects"
        ],
        rows: [
          {
            "S.No": "1",
            "Name of the Principal Investigator": "Dr. S. Jansi",
            "Project Title": "Website Development for a Seva NGO",
            "Funding Agency": "Seva NGO, Tirupathi",
            "Duration": "2 years",
            "Total Sanctioned Amount": "Rs.2,10,000/-",
            "Status of the Projects": "Completed"
          }
        ]
      },
      {
        academicYear: "2016-17",
        agency: "UGC-SERO MINOR PROJECT",
        totalAmount: "Rs.5,45,000/-",
        headers: [
          "S.No",
          "Name of the Principal Investigator",
          "Sanctioned Letter Number with date",
          "Project Title",
          "Duration of the Project",
          "Total Sanctioned Amount",
          "Status of the Projects"
        ],
        rows: [
          {
            "S.No": "1",
            "Name of the Principal Investigator": "Mr. V. Maruthi Prasad",
            "Sanctioned Letter Number with date": "File No. MRP-6515/16(SERO-UGC), dated:30.06.2017",
            "Project Title": "Detection Approach for Botnets with Cross Cluster Correlation",
            "Duration of the Project": "2 years",
            "Total Sanctioned Amount": "Rs.2,15,000/-",
            "Status of the Projects": "Completed"
          },
          {
            "S.No": "2",
            "Name of the Principal Investigator": "Dr. S. V. S. Ganga Devi",
            "Sanctioned Letter Number with date": "File No. MRP-6543/16(SERO-UGC), dated:30.06.2017",
            "Project Title":
              "Analyzing Ground Water Quality Using Data Mining Techniques for the Regions of Kadapa District, A.P. and Developing A Portal for Drinking Water Supply Management System",
            "Duration of the Project": "2 years",
            "Total Sanctioned Amount": "Rs.3,30,000/-",
            "Status of the Projects": "Completed"
          }
        ]
      },
      {
        academicYear: "2015-16",
        agency: "UGC-SERO MINOR PROJECT",
        totalAmount: "Rs.80,000/-",
        headers: [
          "S.No",
          "Name of the Principal Investigator",
          "Sanctioned Letter Number with date",
          "Project Title",
          "Duration of the Project",
          "Total Sanctioned Amount",
          "Status of the Projects"
        ],
        rows: [
          {
            "S.No": "1",
            "Name of the Principal Investigator": "Mr. B. Sudhir",
            "Sanctioned Letter Number with date": "MRP-6097/15(SERO/UGC), dated:01-01-2015",
            "Project Title": "Decision Support System for Agricultural Land for Crops in Kadapa and Chittoor District",
            "Duration of the Project": "2 years",
            "Total Sanctioned Amount": "Rs.80,000/-",
            "Status of the Projects": "Completed"
          }
        ]
      }
    ]
  }
};

export const eceMoreData: DepartmentMoreData = {
  subTabs: [
    { id: "doctoral", label: "Doctoral" },
    { id: "lab", label: "Lab" },
    { id: "course-attainment", label: "Course Attainment Matrix ECE" },
    { id: "mentor-mentee", label: "Mentor & Mentee" },
    { id: "stock-register", label: "Stock Register" },
    { id: "surveys", label: "Surveys" },
    { id: "research", label: "Research" }
  ],
  labPdfUrl: "https://mits.ac.in/public/uploads/departments/labs.pdf",
  stockRegisterPdfUrl: "https://mits.ac.in/assets/pdf/stock-registers/ECE%20Stock%20Register.pdf",
  doctoral: {
    title: "Doctoral Programs",
    description:
      "The Department of Electronics and Communication Engineering is one of the recognized research centers for doctoral programs affiliated to JNTU Anatapur since 2013.\n\nFull time research scholars of doctoral programs are working under the guidance of highly qualified faculty with strong inclination towards research and development of innovative technologies like Cryptography, Computer vision, VLSI and Embedded Systems.",
    batches: [
      {
        batchTitle: "Full-Time Research Scholars Details 2013-2014 Batch",
        scholars: [
          {
            sno: "1",
            name: "E.LAKSHMI PRASAD",
            guide: "Dr.A.R.REDDY\nProfessor & HOD",
            coGuide: "Dr.M.N.GIRI PRASAD\nProfessor",
            dateOfJoining: "25-06-2014",
            researchTitle: "VLSI"
          },
          {
            sno: "2",
            name: "K.SAI VENU PRATHAP",
            guide: "Dr.S.A.K.JILANI\nProfessor",
            coGuide: "Dr.P.RAMANA REDDY\nProfessor",
            dateOfJoining: "25-06-2014",
            researchTitle: "IMAGE PROCESSING"
          }
        ]
      },
      {
        batchTitle: "Full-Time Research Scholars Details 2014-2015 Batch",
        scholars: [
          {
            sno: "1",
            name: "T.Prahalad Reddy",
            guide: "Dr.A.R.Reddy\nProfessor & HOD",
            coGuide: "Dr.M.N.Giri Prasad\nProfessor",
            dateOfJoining: "04-05-2015",
            researchTitle: "Embedded Systems"
          },
          {
            sno: "2",
            name: "Brahmadesam. T.Madav",
            guide: "Dr.S.A.K.Jilani\nProfessor",
            coGuide: "Dr.S.Aruna Mastani\nAssistant Professor",
            dateOfJoining: "04-05-2015",
            researchTitle: "Video Processing"
          }
        ]
      },
      {
        batchTitle: "Full-Time Research Scholars Details 2015-2016 Batch",
        scholars: [
          {
            sno: "1",
            name: "Shaik Mohammed Rafi",
            guide: "Dr.J.L.Mazher Iqbal\nProfessor",
            coGuide: "Dr.S.Chandra Mohan Reddy\nAssistant Professor",
            dateOfJoining: "13-04-2016",
            researchTitle: "VLSI"
          }
        ]
      }
    ]
  },
  courseAttainment: [
    { title: "2017-21 Course Attainment Matrix ECE", url: "https://mits.ac.in/assets/pdf/ece/2017-21%20Course%20Attainment%20Matrix%20ECE.pdf" },
    { title: "2016-20 Course Attainment Matrix ECE", url: "https://mits.ac.in/assets/pdf/ece/2016-20%20Course%20Attainment%20Matrix%20ECE.pdf" },
    { title: "2015-19 Course Attainment Matrix ECE", url: "https://mits.ac.in/assets/pdf/ece/2015-19%20Course%20Attainment%20Matrix%20ECE.pdf" },
    { title: "2014-18 Course Attainment Matrix ECE", url: "https://mits.ac.in/assets/pdf/ece/2014-18%20Course%20Attainment%20Matrix%20ECE.pdf" }
  ],
  mentorMentee: [
    {
      groupTitle: "Mentor-Mentee Allocation Lists",
      items: [
        {
          title: "2021-22 - Mentor-Mentee Allocation List for ECE",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/2021-22%20-%20Mentor-Mentee%20Allocation%20List%20for%20ECE.pdf",
          academicYear: "2021-22"
        },
        {
          title: "2020-21 - Mentor-Mentee Allocation List for ECE",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/2020-21%20-%20Mentor-Mentee%20Allocation%20List%20for%20ECE.pdf",
          academicYear: "2020-21"
        },
        {
          title: "2019-20 - Mentor-Mentee Allocation List for ECE",
          pdfUrl: "https://mits.ac.in/public/uploads/menteementors/2019-20%20-%20Mentor-Mentee%20Allocation%20List%20for%20ECE.pdf",
          academicYear: "2019-20"
        }
      ]
    }
  ],
  surveys: [
    {
      title: "Surveys from Stakeholders",
      links: [
        { title: "2023-24 Academic Year Surveys from Stakeholders", url: "https://mits.ac.in/public/uploads/surveys/2023-24%20Academic%20Year%20Survey%20from%20Stakeholders.pdf" },
        { title: "2022-23 Academic Year Surveys from Stakeholders", url: "https://mits.ac.in/public/uploads/surveys/Feedback%20Analysis%202022-23.pdf" },
        { title: "2021-22 Academic Year Surveys from Stakeholders", url: "https://mits.ac.in/public/uploads/surveys/80c358e3d7a30701bc314db8db919d57.pdf" },
        { title: "2020-21 Academic Year Surveys from Stakeholders", url: "https://mits.ac.in/public/uploads/surveys/7d39f7a05a409edbc80aa54c08592ec4.pdf" },
        { title: "2019-20 Academic Year Surveys from Stakeholders", url: "https://mits.ac.in/public/uploads/surveys/a2dba4acd0a3b9d8383526c1224d6bab.pdf" },
        { title: "2018-19 Academic Year Surveys from Stakeholders", url: "https://mits.ac.in/public/uploads/surveys/5691513edb61ee2e88a9da6752d52a94.pdf" },
        { title: "2017-18 Academic Year Surveys from Stakeholders", url: "https://mits.ac.in/public/uploads/surveys/6be932bf35adaf28bbe410a805ccd40a.pdf" },
        { title: "2016-17 Academic Year Surveys from Stakeholders", url: "https://mits.ac.in/public/uploads/surveys/365c3971d8d06cf71123491e961f888e.pdf" },
        { title: "2015-16 Academic Year Surveys from Stakeholders", url: "https://mits.ac.in/public/uploads/surveys/35cfb3257bbf27943e8d00c65a8eaca1.pdf" },
        { title: "2014-15 Academic Year Surveys from Stakeholders", url: "https://mits.ac.in/public/uploads/surveys/3b164c3299a2c5bc7da152152b497008.pdf" }
      ]
    }
  ],
  researchGroup: {
    groupTitle: "Research",
    description: "Department research publications, projects, and developmental reports.",
    documents: [
      { title: "Research 2024-2025", url: "https://mits.ac.in/assets/pdf/ece/Research-2024-2025.pdf" },
      { title: "Research 2023-2024", url: "https://mits.ac.in/assets/pdf/ece/Research-2023-2024.pdf" },
      { title: "Research 2022-2023", url: "https://mits.ac.in/assets/pdf/ece/Research-2022-2023.pdf" },
      { title: "Research 2021-2022", url: "https://mits.ac.in/assets/pdf/ece/Research-2021-2022.pdf" }
    ]
  }
};

export const mbaMoreData: DepartmentMoreData = {
  mbaAlumni: {
    title: "Alumni Guest Lectures",
    yearGroups: [
      {
        year: "2024-25",
        lectures: [
          'An Alumni Guest Lecture by Ms.Jayashree R on " Health insurance sector: Career opportunities" was organized by Department of Management Studies on 19th October 2024.'
        ]
      },
      {
        year: "2023-24",
        lectures: [
          'An Alumni Guest Lecture by Ms. Madhuri R on " How to survive in corporate world" was organized by Department of Management Studies on 27th June 2024.',
          'An Alumni Guest Lecture by Miss. P. Nandini on "Career opportunities in Amazon" was organized by Department of Management Studies on 22nd February 2024.',
          'An Alumni Guest Lecture by Mr. P. Naveen Kumar Reddy on " Career opportunities in banking sector for MBA students " was organized by Department of Management Studies on 12th February, 2024.',
          'An Alumni Guest Lecture by Miss Karishma on "Tips to be industry ready" was organized by Department of Management Studies on 1st February, 2024.',
          'An Alumni Guest Lecture by Miss Jyothi Priyanka on "Job opportunities in Accenture" was organized by Department of Management Studies on 22nd August, 2023.'
        ],
        reportTitle: "Alumni Guest Lecture Reports 2023-24",
        reportUrl: "https://mits.ac.in/assets/pdf/mba/alumni guest lecture reports 23- 24.pdf"
      },
      {
        year: "2022-23",
        lectures: [
          'An Alumni Guest Lecture by Mr. Sai Bhargv Raju on Awareness on Job opportunities in Genpact" was organized by Department of Management Studies on 16th August 2022',
          'An Alumni Guest Lecture by Ms.Saivarshini on “ Placement awareness for I MBA students” was organized by Department of Management Studies on 16th August 2022.'
        ],
        reportTitle: "Alumni Guest Lecture Reports 2022-23",
        reportUrl: "https://mits.ac.in/assets/pdf/mba/alumni guest lecture reports 2022- 23.pdf"
      },
      {
        year: "2021-22",
        lectures: [
          'An Alumni Guest Lecture by Mr. M. Raghavendra on "Qualities required for an entrepreneur" was organized by Department of Management Studies on 14th March 2022.',
          'An Alumni Guest Lecture by Miss. K. Swathi on "Funding Process at State Street Bank" was organized by Department of Management Studies on 08th March 2022.',
          'An Alumni Guest Lecture by Miss Pratyusha on "Customer Relationship Building & Manage the Complete Customer Service" was organized by Department of Management Studies on 04th March 2022.',
          'An Alumni Guest Lecture by Miss B. Tejeswaini on "Managerial Competencies for HR Professionals" was organized by Department of Management Studies on 04th February 2022.'
        ],
        reportTitle: "Alumni Guest Lecture Reports 2021-22",
        reportUrl: "https://mits.ac.in/assets/pdf/mba/2021-22-Alumni.pdf"
      },
      {
        year: "2020-21",
        lectures: [
          'An Alumni Guest Lecture by Mr. Syed Anees on “Career Opportunities through SAP” was organized by Department of Management Studies on 20th March 2021.'
        ],
        reportTitle: "Alumni Guest Lecture Reports 2020-21",
        reportUrl: "https://mits.ac.in/assets/pdf/mba/2020-21-Alumni.pdf"
      },
      {
        year: "2019-20",
        lectures: [
          'An Alumni Guest Lecture by Mr. Anil Duth on “Entrepreneurial Avenues for II MBA Students” was organized by Department of Management Studies on 27th August 2019.'
        ],
        reportTitle: "Alumni Guest Lecture Reports 2019-20",
        reportUrl: "https://mits.ac.in/assets/pdf/mba/2019-20-Alumni.pdf"
      },
      {
        year: "2018-19",
        lectures: [
          'An Alumni Guest Lecture by Mr. P. Gajendra on “Financial Derivatives” was organized by Department of Management Studies on 5th December 2018.',
          'An Alumni Guest Lecture by Mr. D. Durga Prasad on “Investment Patterns” was organized by Department of Management Studies on 16th September 2018.',
          'An Alumni Guest Lecture by Mr. P. Kiran Kumar on “Interview Techniques” was organized by Department of Management Studies on 21st January 2019.',
          'An Alumni Guest Lecture by Mr. Kiran Kumar G.P on “Sales and Distribution Management” was organized by Department of Management Studies on 20th February 2019.',
          'An Alumni Guest Lecture by Mr. K Arun Sharma on “Data Analytics Using Excel” was organized by Department of Management Studies on 20th March 2019.',
          'An Alumni Guest Lecture by Mr. G. Srinivasulu on “Supply Chain Management” was organized by Department of Management Studies on 20th April 2019.',
          'An Alumni Guest Lecture by Ms. Michael Steffi on “Recent Trends in HR” was organized by Department of Management Studies on 22nd May 2019.'
        ],
        reportTitle: "Alumni Guest Lecture Reports 2018-19",
        reportUrl: "https://mits.ac.in/assets/pdf/mba/2018-19-Alumni.pdf"
      },
      {
        year: "2017-18",
        lectures: [
          'An Alumni Guest Lecture by Mr. Naga Raja A on “Career Planning” was organized by Department of Management Studies on 28th August 2017.',
          'An Alumni Guest Lecture by Mr. K. Jagadeeshwar Reddy on “Financial Investments” was organized by Department of Management Studies on 30th September 2017.',
          'An Alumni Guest Lecture by Mr. S. Muni Prasad on “Digital Marketing” was organized by Department of Management Studies on 20th November 2017.',
          'An Alumni Guest Lecture by Mr. Reddy Sekhar on “Business Analytics” was organized by Department of Management Studies on 17th February 2018.',
          'An Alumni Guest Lecture by Mr. Uday Kumar on “DEBT Capital Markets” was organized by Department of Management Studies on 6th April 2018.',
          'An Alumni Guest Lecture by Mr. M. Gunasekhar on “Interaction on Trends shaping the Payments Industry: From Payment Cards to Mobile Payments” was organized by Department of Management Studies on 2nd May 2018.'
        ],
        reportTitle: "Alumni Guest Lecture Reports 2017-18",
        reportUrl: "https://mits.ac.in/assets/pdf/mba/2017-18-Alumni.pdf"
      },
      {
        year: "2016-17",
        lectures: [
          'An Alumni Guest Lecture by Mr. Naga Raju on "Report interaction on modern branding offline and online" was organized by Department of Management Studies on 09th February 2017.',
          'An Alumni Guest Lecture by Mr. Anil Duth on "Report on guest lecture on digital payments" was organized by Department of Management Studies on 10th April 2017.'
        ],
        reportTitle: "Alumni Guest Lecture Reports 2016-17",
        reportUrl: "https://mits.ac.in/assets/pdf/mba/2016-17-Alumni.pdf"
      }
    ],
    coordinator: {
      title: "Departmental Alumni Coordinator",
      name: "Dr. K. Venkateswarlu",
      designation: "Assistant Professor",
      department: "Department of Management Studies",
      institute: "Madanapalle Institute of Technology & Science",
      address: "Post Box No: 14, Kadiri Road, Angallu, Madanapalle-517325, Andhra Pradesh",
      phone: "+91-8571-280255; 280706",
      email: "drvenkateswarluk@mits.ac.in"
    }
  },
  mbaRuralImmersion: {
    title: "Rural Immersion",
    batches: [
      {
        batchTitle: "Batch 2023-25 Year 2023-24 Semester II Regulation R22 Village Rajulavaripalli",
        videoLinks: [
          {
            title: "Click here to watch the video on Rural Immersion Batch 2023-25 & Year 2023-24",
            url: "https://www.dropbox.com/scl/fi/bkhbh1drb94v8l3k0hdgc/Rural-Immersion-Program-Batch-2023-25-Year-2023-24.mp4?rlkey=zb12q36ccrhobqq8m08819kb8&e=1&st=o6tkx90d&dl=0"
          }
        ]
      },
      {
        batchTitle: "Batch 2021-23 Year 2022-23 Semester II-I Regulation R20 Village Rangasamudram, Thummanakunta, Kosuvaripalli & Naarlapalli",
        videoLinks: [
          {
            title: "Click here to watch the video on Responsible consumption and production",
            url: "https://mitsacin-my.sharepoint.com/:v:/g/personal/21691e00d1_mits_ac_in/EWXnw6KLF5JEhUFqomiv9nsBD7zctCaINcsgkGE-CU8iOA?e=wS98oe"
          },
          {
            title: "Click here to watch the video on Education for all",
            url: "https://mitsacin-my.sharepoint.com/:v:/g/personal/21691e00d1_mits_ac_in/EaowWySkBwFMtkviszk1ArYBLJ9EEkWIhD0FYlZux6xngg?e=DH5kk2"
          },
          {
            title: "Click here to watch the video on Nutrition, health and well being",
            url: "https://mitsacin-my.sharepoint.com/:v:/g/personal/21691e00d1_mits_ac_in/EW8Oz3-b12xIuxWL5t3t_-ABT3fktgUrDogF06C2xYPm0Q?e=f54ePz"
          },
          {
            title: "Click here to watch the video on Clean Energy",
            url: "https://mitsacin-my.sharepoint.com/:v:/g/personal/21691e00d1_mits_ac_in/Ef8BPy1LMnlPkKAEhuJVmM4BL0HwQKXjSR51RbhUY3S5yA?e=Kefu5W"
          }
        ]
      },
      {
        batchTitle: "Batch 2020-22 Year 2021-22 Semester II-I Regulation R20 Village Kotavaripalli",
        youtubeEmbeds: [
          "https://www.youtube.com/embed/ARSuF1wdCU4"
        ]
      },
      {
        batchTitle: "Batch 2018-20 Year 2019-20 Semester II-I Regulation R2018 Villages Chintaparthy, Kondamarripalli, Munganpalli",
        youtubeEmbeds: [
          "https://www.youtube.com/embed/GHPhBBs9AvU",
          "https://www.youtube.com/embed/xzYjDbpk8Gc",
          "https://www.youtube.com/embed/qgq4d9aazhc"
        ]
      }
    ],
    galleries: [
      {
        title: "Rural Immersion Gallery Year Wise 2020-22",
        pdfUrl: "https://mits.ac.in/assets/pdf/mba/RURAL IMMERSION PICTURES YEAR WISE 2020-22-min.pdf"
      },
      {
        title: "Rural Immersion Gallery Year Wise 2018-20",
        pdfUrl: "https://mits.ac.in/assets/pdf/mba/RURAL IMMERSION PICTURES YEAR WISE 2018-20-min.pdf"
      },
      {
        title: "Rural Immersion Gallery Year Wise 2017-19",
        pdfUrl: "https://mits.ac.in/assets/pdf/mba/RURAL IMMERSION PICTURES YEAR WISE 2017-19-min.pdf"
      }
    ]
  },
  mbaInternationalRelations: {
    title: "International Internship Programme",
    yearGroups: [
      {
        year: "2022-23",
        items: [
          {
            subTitle: "Opportunities in Europe",
            points: [
              'Virtual Session on "Opportunities in Europe" for Students of Department of Management Studies by Dr. Vladimir Kulish, Czech Technical University'
            ],
            linkTitle: "Click here for Details",
            linkUrl: "https://mits.ac.in/assets/pdf/mba/kulish.pdf"
          },
          {
            subTitle: "Artificial Intelligence, in Management Asia University",
            points: [
              '49 students have done their Internship on “Artificial Intelligence in Management” from Asia University.'
            ],
            linkTitle: "Click here for Participants List",
            linkUrl: "https://mits.ac.in/assets/pdf/mba/22-23.pdf"
          }
        ]
      },
      {
        year: "2021-22",
        items: [
          {
            subTitle: "Visit to Brno Technical University, Brno, Czech Republic",
            points: [
              'Dr. Sremmant Basu Dean International and HOD, Department of Management Studies visited Brno Technical University, Czech Republic from 8th to 10th June, 2022.'
            ],
            linkTitle: "Click here for Visit Details",
            linkUrl: "https://mits.ac.in/assets/pdf/mba/Brno Technical University.pdf"
          },
          {
            subTitle: "Business Research Methods, Asia University",
            points: [
              '14 students have done their Internship on “Business Research Methods” from Asia University.'
            ],
            linkTitle: "Click here for Participants List",
            linkUrl: "https://mits.ac.in/assets/pdf/mba/21-22-min.pdf"
          }
        ]
      },
      {
        year: "2020-21",
        items: [
          {
            subTitle: "Investment Portfolio Analysis, Managerial Ethics and Corporate Social Responsibility, Asia University",
            points: [
              '06 students have done their Internship on “Investment Portfolio Analysis” from Asia University from 22nd February to 25th June 2021.',
              '05 students have done their Internship on “Managerial Ethics and Corporate Social Responsibility” from Asia University from 22nd February to 25th June 2021.'
            ],
            linkTitle: "Click here for Participants List",
            linkUrl: "https://mits.ac.in/assets/pdf/mba/20-21-min.pdf"
          }
        ]
      },
      {
        year: "2018-19",
        items: [
          {
            subTitle: "Dean International Relations and Head of the Department of Management Studies Signed MOU with Special Communication Research Center, Kookmin University, South Korea",
            linkTitle: "Click here for MOU",
            linkUrl: "https://mits.ac.in/assets/pdf/mba/18-19.1MOU-min.pdf"
          },
          {
            subTitle: "Visit of Dr. Rushikesh from Department of Management, Providence University Taiwan",
            linkTitle: "Click here for Visit Photographs",
            linkUrl: "https://mits.ac.in/assets/pdf/mba/18-19 2-min.pdf"
          }
        ]
      },
      {
        year: "2017-18",
        items: [
          {
            subTitle: "Internship in Dubai at Jenmars Technical Services LLC, Dubai",
            points: [
              "Mr. Harsha Vardhan Bandarla - MBA February 2018",
              "Mr. B. Chitanya Kumar - MBA February 2018"
            ],
            linkTitle: "Click here for Internship in Dubai",
            linkUrl: "https://mits.ac.in/assets/pdf/mba/17-18 1-min.pdf"
          },
          {
            subTitle: "University Innovation Fellowship Programme-Hasso Plattner Institute of Design School, Stanford university , Stanford.",
            points: [
              "Mr. Harshavardhan Bandarla - MBA November 2017"
            ],
            linkTitle: "Click here for Photographs & Details",
            linkUrl: "https://mits.ac.in/assets/pdf/mba/2017-18. 2-min.pdf"
          }
        ]
      }
    ],
    coordinator: {
      title: "Departmental International Relations Coordinator",
      name: "Dr. K. S. Krishna",
      designation: "Assistant Professor",
      department: "Department of Management Studies",
      institute: "Madanapalle Institute of Technology & Science",
      address: "Post Box No: 14, Kadiri Road, Angallu, Madanapalle-517325, Andhra Pradesh",
      phone: "+91-8571-280255; 280706 (Extn: 162)",
      email: "drkskrishna@mits.ac.in"
    }
  },
  mbaBestPractices: {
    title: "Best Practices",
    overview: "For Enriching the Curriculum, the Department of Management Studies has three unique Best Practices, which help the students to remain updated with the latest trends in the industry and by getting overall exposer. These are Rural Immersion, International Internship, involvement of Industry Representative and Alumni Representation.",
    sections: [
      {
        title: "1. Rural Immersion",
        paragraphs: [
          "Under the Board of Studies Regulations R22 and R24, 1st Year, 2nd Semester Students are exposed to socio-economic issues in rural settings. The students visit nearby villages in batches of 5 to 6 members to study the following aspects."
        ],
        bulletPoints: [
          "Village profile: Population, literacy rate, number of families, occupations, etc.",
          "Historical background",
          "Cultural Aspects",
          "Agriculture",
          "Economic conditions of the people",
          "Education",
          "Healthcare",
          "Water resources",
          "Electricity",
          "Family Income",
          "Infrastructure (Roads, water tanks, pumps, communication facilities, bridges, storage facilities, small scale industries, irrigation facilities etc.)",
          "Implementation of Govt. Schemes"
        ],
        links: [
          {
            title: "Please click here for Rural Immersion Video",
            url: "https://www.youtube.com/embed/ARSuF1wdCU4"
          },
          {
            title: "Please click here for Rural Immersion Gallery",
            url: "https://mba.mits.ac.in/assets/pdf/mba/RURAL%20IMMERSION%20PICTURES%20YEAR%20WISE%202020-22-min.pdf"
          }
        ]
      },
      {
        title: "2. International Internship",
        paragraphs: [
          "Our students are getting virtual Internship opportunities at Asia University, Taiwan. Some of the Students also got Internship opportunity in a company in Dubai. These opportunities give them International exposer which helps them in shaping their future career."
        ],
        links: [
          {
            title: "Click here for Report on International Internship",
            url: "https://mba.mits.ac.in/assets/pdf/mba/INTERNATIONAL-min.pdf"
          }
        ]
      },
      {
        title: "3. Curriculum Enrichment through Industry & Alumni",
        paragraphs: [
          "The department has initiated Involvement of Industry and Alumni representatives through a structured Board meeting which is called “Industry Alumni Advisory Board”. The Industry expert and Alumni give their suggestions for Curriculum Enrichment. These Proposals are being shared based on the Industry requirements. This process helps to make our Curriculum more Industry oriented."
        ],
        links: [
          {
            title: "Click here for Report",
            url: "https://mba.mits.ac.in/assets/pdf/mba/IAAB.pdf"
          }
        ]
      }
    ]
  },
  subTabs: [
    { id: "lab", label: "Labs" },
    { id: "research", label: "Research" },
    { id: "journal", label: "Journal", externalUrl: "https://mits.ac.in/mits_new/mba" },
    { id: "placement", label: "Placement" },
    { id: "alumni", label: "Alumni" },
    { id: "rural-immersion", label: "Rural Immersion" },
    { id: "international-relations", label: "International Relations" },
    { id: "best-practices", label: "Best Practices" },
    { id: "industrial-visit", label: "Industrial Visit" },
    { id: "budget", label: "Department Budget" },
    { id: "newsletters", label: "NewsLetter" },
    { id: "nba", label: "NBA" },
    { id: "celebrations", label: "Celebrations" },
    { id: "gallery", label: "Gallery" },
    { id: "surveys", label: "Survey" },
    { id: "timetables", label: "Timetables" },
    { id: "internships", label: "Internships" },
    { id: "mentor-mentee", label: "Mentor & Mentee" },
    { id: "case-studies", label: "Case Studies" },
    { id: "mou", label: "MoU" },
    { id: "faculty-initiatives", label: "Faculty Initiatives on Teaching and Learning", externalUrl: "https://mits.ac.in/assets/pdf/mba/Faculty Initiatives on Teaching and learning-MBA.pdf", directPdf: true },
    { id: "students-projects", label: "Students Projects" }
  ],
  labPdfUrl: "https://mits.ac.in/public/uploads/departments/MBA LAB.pdf",
  caseStudiesPdfUrl: "https://mits.ac.in/assets/pdf/mba/NBA CASE STUDIES-min.pdf",
  galleryPdfUrl: "https://mits.ac.in/assets/pdf/mba/studentclub.pdf",
  researchProjects: {
    overview: "The Department of Management Studies has undertaken various research and development projects sponsored by prestigious funding agencies like AICTE, UGC, and BSE-IPF.",
    sections: [
      {
        academicYear: "2019-20",
        agency: "AICTE",
        totalAmount: "Rs.13,14,000/-",
        headers: ["S.No", "Name of the Principal Investigator", "Sanctioned Letter Number with date", "Programme Title", "Duration of the Programme", "Total Sanctioned Amount", "Status of the Programme"],
        rows: [
          {
            "S.No": "1",
            "Name of the Principal Investigator": "Dr. Mohd Mujahed Ali",
            "Sanctioned Letter Number with date": "F.No.73-9/RIFD/Samriddhi/Policy-1/2018-19",
            "Programme Title": "Empowering Socially Changelled Youth of Rural India Through Entrepreneurship",
            "Duration of the Programme": "2 years (2019-20 & 2020-21)",
            "Total Sanctioned Amount": "Rs.13,14,000/-",
            "Status of the Programme": "Completed"
          }
        ]
      },
      {
        academicYear: "2018-19",
        agency: "AICTE",
        totalAmount: "Rs.18,53,000/-",
        headers: ["S.No", "Name of the Principal Investigator", "Sanctioned Letter Number with date", "Programme Title", "Duration of the Programme", "Total Sanctioned Amount", "Status of the Programme"],
        rows: [
          {
            "S.No": "1",
            "Name of the Principal Investigator": "Dr. D. Pradeep Kumar",
            "Sanctioned Letter Number with date": "File No.65-5/RIFD/SPDP/policy-1/2017-18",
            "Programme Title": "Skill development for weaker sections in Madanapalle Institute of Technology and Science",
            "Duration of the Programme": "3 years (2018-19, 2019-20 & 2020-21)",
            "Total Sanctioned Amount": "Rs.18,53,000/-",
            "Status of the Programme": "Completed"
          }
        ]
      },
      {
        academicYear: "2016-17",
        agency: "UGC-SERO MINOR PROJECT",
        totalAmount: "Rs.2,35,000/-",
        headers: ["S.No", "Name of the Principal Investigator", "Sanctioned Letter Number with date", "Project Title", "Duration of the Project", "Total Sanctioned Amount", "Status of the Projects"],
        rows: [
          {
            "S.No": "1",
            "Name of the Principal Investigator": "Dr. Mohd Mujahed Ali",
            "Sanctioned Letter Number with date": "File No. MRP-6707/16(SERO-UGC), dated:30.06.2017",
            "Project Title": "Skill Development for Enhancing Employability for Unemployed Youth of Andhra Pradesh Region",
            "Duration of the Project": "2 years",
            "Total Sanctioned Amount": "Rs.2,35,000/-",
            "Status of the Projects": "Completed"
          }
        ]
      },
      {
        academicYear: "2015-16",
        agency: "BSE - IPF",
        totalAmount: "Rs.60,000/-",
        headers: ["S.No", "Name of the Principal Investigator", "Sanctioned Letter Number with date", "Project Title", "Duration of the Project", "Total Sanctioned Amount", "Status of the Projects"],
        rows: [
          {
            "S.No": "1",
            "Name of the Principal Investigator": "Dr. N. Subramanyam",
            "Sanctioned Letter Number with date": "Lr From. C.Vasudevan, Head-BSE,IPF, dated:20.10.2015",
            "Project Title": "Performance of FMCG vis-vis Infrastructure Companies which are listed in BSE 500 Index",
            "Duration of the Project": "1 year",
            "Total Sanctioned Amount": "Rs.60,000/-",
            "Status of the Projects": "Completed"
          }
        ]
      },
      {
        academicYear: "2014-15",
        agency: "UGC-SERO MINOR PROJECT",
        totalAmount: "Rs.1,20,000/-",
        headers: ["S.No", "Name of the Principal Investigator", "Sanctioned Letter Number with date", "Project Title", "Duration of the Project", "Total Sanctioned Amount", "Status of the Projects"],
        rows: [
          {
            "S.No": "1",
            "Name of the Principal Investigator": "Mr Ismail. S",
            "Sanctioned Letter Number with date": "File No.MRP-6096/15(SERO/UGC), dated:01.01.2015",
            "Project Title": "A Study on Career Planning Absurd Among Students and its Impact on Employability",
            "Duration of the Project": "2 years",
            "Total Sanctioned Amount": "Rs.1,20,000/-",
            "Status of the Projects": "Completed"
          }
        ]
      },
      {
        academicYear: "2013-14",
        agency: "UGC-SERO MINOR PROJECT",
        totalAmount: "Rs.4,50,000/-",
        headers: ["S.No", "Name of the Principal Investigator", "Sanctioned Letter Number with date", "Project Title", "Duration of the Project", "Total Sanctioned Amount", "Status of the Projects"],
        rows: [
          {
            "S.No": "1",
            "Name of the Principal Investigator": "Mr. K. Srinivas",
            "Sanctioned Letter Number with date": "File No.MRP-4611/14(SERO/UGC), dated:MAR 2014",
            "Project Title": "Challenges and Opportunities in Empowering Women of Backward Classes Through SHG’s in Chittoor District in Andhra Pradesh",
            "Duration of the Project": "2 years",
            "Total Sanctioned Amount": "Rs.2,50,000/-",
            "Status of the Projects": "Completed"
          },
          {
            "S.No": "2",
            "Name of the Principal Investigator": "Mr. K.V.V Raaju",
            "Sanctioned Letter Number with date": "File No.MRP-4614/14(SERO/UGC), dated:MAR 2014",
            "Project Title": "Study on Aadhaar Card Implementation in Chittoor District",
            "Duration of the Project": "2 years",
            "Total Sanctioned Amount": "Rs.2,00,000/-",
            "Status of the Projects": "Completed"
          }
        ]
      }
    ]
  },
  placementsGroup: {
    groupTitle: "Placement Details",
    documents: [
      { title: "Placement 2022 - 24 Statistics", url: "https://mits.ac.in/assets/pdf/mba/Placement 2022-24 Statistics.pdf" },
      { title: "Placement 2021 - 23 Statistics", url: "https://mits.ac.in/assets/pdf/mba/Placement 2021-23 Statistics.pdf" },
      { title: "Student wise Placement Details 2019-2022 (Passed out)", url: "https://mits.ac.in/assets/pdf/mba/STUDENT%20WISE%20PLACEMENT%20DETAILS-2017-19.pdf" },
      { title: "Placement 2020 - 22 Statistics", url: "https://mits.ac.in/assets/pdf/mba/Placement%20Statistics%202020_22.pdf" },
      { title: "Placement 2019 - 21 Statistics", url: "https://mits.ac.in/assets/pdf/mba/Placement%20Statistics%202019_21.pdf" },
      { title: "Placement 2018 - 20 Statistics", url: "https://mits.ac.in/assets/pdf/mba/Placement%20Statistics%202018_20.pdf" },
      { title: "Placement 2017 - 19 Statistics", url: "https://mits.ac.in/assets/pdf/mba/Placement%20Statistics%202017_19.pdf" },
      { title: "Placement 2016 - 18 Statistics", url: "https://mits.ac.in/assets/pdf/mba/Placement%20Statistics%202016_18.pdf" },
      { title: "Placement 2015 - 17 Statistics", url: "https://mits.ac.in/assets/pdf/mba/Placement%20Statistics%202015_17.pdf" },
      { title: "Placement 2014 - 16 Statistics", url: "https://mits.ac.in/assets/pdf/mba/Placement%20Statistics%202014_16.pdf" }
    ]
  },
  alumniEvents: [
    {
      groupTitle: "Alumni Guest Lecture Reports",
      documents: [
        { title: "Alumni Guest Lecture Reports 2023-24", url: "https://mits.ac.in/assets/pdf/mba/alumni guest lecture reports 23- 24.pdf" },
        { title: "Alumni Guest Lecture Reports 2022-23", url: "https://mits.ac.in/assets/pdf/mba/alumni guest lecture reports 2022- 23.pdf" },
        { title: "Alumni Guest Lecture Reports 2021-22", url: "https://mits.ac.in/assets/pdf/mba/2021-22-Alumni.pdf" },
        { title: "Alumni Guest Lecture Reports 2020-21", url: "https://mits.ac.in/assets/pdf/mba/2020-21-Alumni.pdf" },
        { title: "Alumni Guest Lecture Reports 2019-20", url: "https://mits.ac.in/assets/pdf/mba/2019-20-Alumni.pdf" },
        { title: "Alumni Guest Lecture Reports 2018-19", url: "https://mits.ac.in/assets/pdf/mba/2018-19-Alumni.pdf" },
        { title: "Alumni Guest Lecture Reports 2017-18", url: "https://mits.ac.in/assets/pdf/mba/2017-18-Alumni.pdf" },
        { title: "Alumni Guest Lecture Reports 2016-17", url: "https://mits.ac.in/assets/pdf/mba/2016-17-Alumni.pdf" }
      ]
    }
  ],
  ruralImmersion: {
    videos: [
      { title: "Rural Immersion Batch 2023-25 & Year 2023-24", url: "https://www.dropbox.com/scl/fi/bkhbh1drb94v8l3k0hdgc/Rural-Immersion-Program-Batch-2023-25-Year-2023-24.mp4?rlkey=zb12q36ccrhobqq8m08819kb8&e=1&st=o6tkx90d&dl=0", isDropbox: true },
      { title: "Responsible consumption and production", url: "https://mitsacin-my.sharepoint.com/:v:/g/personal/21691e00d1_mits_ac_in/EWXnw6KLF5JEhUFqomiv9nsBD7zctCaINcsgkGE-CU8iOA?e=wS98oe", isSharePoint: true },
      { title: "Education for all", url: "https://mitsacin-my.sharepoint.com/:v:/g/personal/21691e00d1_mits_ac_in/EaowWySkBwFMtkviszk1ArYBLJ9EEkWIhD0FYlZux6xngg?e=DH5kk2", isSharePoint: true },
      { title: "Nutrition, health and well being", url: "https://mitsacin-my.sharepoint.com/:v:/g/personal/21691e00d1_mits_ac_in/EW8Oz3-b12xIuxWL5t3t_-ABT3fktgUrDogF06C2xYPm0Q?e=f54ePz", isSharePoint: true },
      { title: "Clean Energy", url: "https://mitsacin-my.sharepoint.com/:v:/g/personal/21691e00d1_mits_ac_in/Ef8BPy1LMnlPkKAEhuJVmM4BL0HwQKXjSR51RbhUY3S5yA?e=Kefu5W", isSharePoint: true },
      { title: "Rural Immersion Video 1", url: "https://www.youtube.com/embed/ARSuF1wdCU4" },
      { title: "Rural Immersion Video 2", url: "https://www.youtube.com/embed/GHPhBBs9AvU" },
      { title: "Rural Immersion Video 3", url: "https://www.youtube.com/embed/xzYjDbpk8Gc" },
      { title: "Rural Immersion Video 4", url: "https://www.youtube.com/embed/qgq4d9aazhc" }
    ],
    reports: [
      { title: "Rural Immersion Pictures Year Wise 2020-22", url: "https://mits.ac.in/assets/pdf/mba/RURAL IMMERSION PICTURES YEAR WISE 2020-22-min.pdf" },
      { title: "Rural Immersion Pictures Year Wise 2018-20", url: "https://mits.ac.in/assets/pdf/mba/RURAL IMMERSION PICTURES YEAR WISE 2018-20-min.pdf" },
      { title: "Rural Immersion Pictures Year Wise 2017-19", url: "https://mits.ac.in/assets/pdf/mba/RURAL IMMERSION PICTURES YEAR WISE 2017-19-min.pdf" }
    ]
  },
  internationalRelations: {
    groupTitle: "International Internship Programme",
    description: "International Relations initiatives, exchange programs, and foreign university internships of the MBA department.",
    documents: [
      { title: "Virtual Session on 'Opportunities in Europe' by Dr. Vladimir Kulish, Czech Technical University (2022-23)", url: "https://mits.ac.in/assets/pdf/mba/kulish.pdf" },
      { title: "Internship on 'Artificial Intelligence in Management' from Asia University - 49 Students Participants List (2022-23)", url: "https://mits.ac.in/assets/pdf/mba/22-23.pdf" },
      { title: "Visit to Brno Technical University, Czech Republic by Dr. Sremmant Basu (2021-22)", url: "https://mits.ac.in/assets/pdf/mba/Brno Technical University.pdf" },
      { title: "Internship on 'Business Research Methods' from Asia University - 14 Students Participants List (2021-22)", url: "https://mits.ac.in/assets/pdf/mba/21-22-min.pdf" },
      { title: "Internship on 'Investment Portfolio Analysis' & 'Managerial Ethics' from Asia University - Participants List (2020-21)", url: "https://mits.ac.in/assets/pdf/mba/20-21-min.pdf" },
      { title: "MOU with Special Communication Research Center, Kookmin University, South Korea (2018-19)", url: "https://mits.ac.in/assets/pdf/mba/18-19.1MOU-min.pdf" },
      { title: "Visit of Dr. Rushikesh from Department of Management, Providence University Taiwan - Photographs (2018-19)", url: "https://mits.ac.in/assets/pdf/mba/18-19 2-min.pdf" },
      { title: "Internship in Dubai at Jenmars Technical Services LLC - Mr. Harsha Vardhan Bandarla & Mr. B. Chitanya Kumar (2017-18)", url: "https://mits.ac.in/assets/pdf/mba/17-18 1-min.pdf" },
      { title: "University Innovation Fellowship Programme - Stanford University, Stanford - Mr. Harshavardhan Bandarla (2017-18)", url: "https://mits.ac.in/assets/pdf/mba/2017-18. 2-min.pdf" }
    ]
  },
  bestPractices: {
    groupTitle: "Best Practices",
    documents: [
      { title: "Rural Immersion Video", url: "https://www.youtube.com/embed/ARSuF1wdCU4" },
      { title: "Rural Immersion Gallery (2020-22)", url: "https://mba.mits.ac.in/assets/pdf/mba/RURAL%20IMMERSION%20PICTURES%20YEAR%20WISE%202020-22-min.pdf" },
      { title: "Report on International Internship", url: "https://mba.mits.ac.in/assets/pdf/mba/INTERNATIONAL-min.pdf" },
      { title: "Industry Alumni Advisory Board (IAAB) Report", url: "https://mba.mits.ac.in/assets/pdf/mba/IAAB.pdf" }
    ]
  },
  industrialVisits: {
    groupTitle: "Industrial Visits",
    documents: [
      { title: "Industrial Visit - Student Club", url: "https://mba.mits.ac.in/assets/pdf/mba/studentclub.pdf" },
      { title: "Industrial Visit to Hatsun Agro Products (HAP) Dairy Plant (2025)", url: "https://mits.ac.in/assets/pdf/mba/Hatsun Agro Products (HAP) Dairy Plant.pdf" },
      { title: "Industrial Visit to 'Titan Manufacturing entity, Hosur' (21st June 2025)", url: "https://mits.ac.in/assets/pdf/mba/Titan Manufacturing entity, Hosur.pdf" },
      { title: "Two-day Industrial Visit and Consultant work to the Industries at Bengaluru (29th-30th April 2025)", url: "https://mits.ac.in/assets/pdf/mba/Two-day Industrial Visit and Consultant work to the Industries.pdf" },
      { title: "Industrial Visit to Karnataka Silk Industries Corporation (KSIC), Mysore (04th January 2025)", url: "https://mits.ac.in/assets/pdf/mba/Industrial Visit to Karnataka Silk Industries Corporation (KSIC), Mysore on 04th January 2025.pdf" },
      { title: "Industrial Visit to Hatsun Agro Products (HAP) Dairy Plant (11th-16th December 2024)", url: "https://mits.ac.in/assets/pdf/mba/Industrial Visit to Hatsun Agro Products (HAP) Dairy Plant, 11th December 2024 to 16th December 2024.pdf" },
      { title: "Industrial Visit to 'Thirumala Dairy, Palamaneru' (7th December 2023)", url: "https://mits.ac.in/assets/pdf/mba/Industrial Visit-Thirumala Dairy.pdf" },
      { title: "Industrial Visit to 'Thirumala Dairy, Palamaneru' (6th December 2023)", url: "https://mits.ac.in/assets/pdf/mba/Industrial Visit thirumala dairy.pdf" },
      { title: "Industrial Visit to Tirumala Milk Products Pvt. Ltd, Pasupathur Village (22-July-2022)", url: "https://mits.ac.in/assets/pdf/mba/Industrial%20Visit_Section.pdf" },
      { title: "Industrial Visit to Tirumala Diary Products Pvt. Ltd, Pasupathur Village (19-July-2022)", url: "https://mits.ac.in/assets/pdf/mba/Industrial%20Visit%2019july%202021-min.pdf" },
      { title: "Industrial Visit to Tirumala Dairy Products Pvt. Ltd, Pasupathur Village (16-July-2022)", url: "https://mits.ac.in/assets/pdf/mba/Industrial%20Visit%2016july%202021-min.pdf" }
    ]
  },
  departmentBudgetGroup: {
    groupTitle: "Department Budget",
    documents: [
      { title: "Budget 2024-25", url: "https://mits.ac.in/assets/pdf/mba/Budget 2024-25.pdf" },
      { title: "Budget 2023-24", url: "https://mits.ac.in/assets/pdf/mba/Budget 2023-24.pdf" },
      { title: "Budget 2022-23", url: "https://mits.ac.in/assets/pdf/mba/B%202022-2023.pdf" },
      { title: "Budget 2021-22", url: "https://mits.ac.in/assets/pdf/mba/B%202021-2022.pdf" },
      { title: "Budget 2020-21", url: "https://mits.ac.in/assets/pdf/mba/B%202020-2021.pdf" },
      { title: "Budget 2019-20", url: "https://mits.ac.in/assets/pdf/mba/B%202019-2020.pdf" }
    ]
  },
  newsletterGroup: {
    groupTitle: "Department Newsletters",
    documents: [
      { title: "July 2025 Volume 7 Edition 2", url: "https://mits.ac.in/assets/pdf/mba/July 2025 volumn 7 Edition 2.pdf" },
      { title: "January 2025 Volume 7 Edition 1", url: "https://mits.ac.in/assets/pdf/mba/January 2025 volumn 7 Edition 1.pdf" },
      { title: "July 2024 Volume 6 Edition 2", url: "https://mits.ac.in/assets/pdf/mba/July 2024 volumn 6 Edition 2.pdf" },
      { title: "January 2024 Volume 6 Edition 1", url: "https://mits.ac.in/assets/pdf/mba/January 2024 volumn 6 Edition 1.pdf" },
      { title: "July 2023 Volume 5 Edition 2", url: "https://mits.ac.in/assets/pdf/mba/July 2023 volumn 5 Edition 2.pdf" },
      { title: "January 2023 Volume 5 Edition 1", url: "https://mits.ac.in/assets/pdf/mba/January 2023 volumn 5 Edition 1.pdf" },
      { title: "July 2022 Volume 4 Edition 2", url: "https://mits.ac.in/assets/pdf/mba/July 2022 volumn 4 Edition 2.pdf" },
      { title: "January 2022 Volume 4 Edition 1", url: "https://mits.ac.in/assets/pdf/mba/January 2022 volumn 4 Edition 1.pdf" },
      { title: "July 2021 Volume 3 Edition 2", url: "https://mits.ac.in/assets/pdf/mba/July%202021%20V3E2.pdf" },
      { title: "January 2021 Volume 3 Edition 1", url: "https://mits.ac.in/assets/pdf/mba/Jan%202021-v3e1.pdf" },
      { title: "January 2020 Volume 2 Edition 1", url: "https://mits.ac.in/assets/pdf/mba/Jan%202020-v2e1.pdf" },
      { title: "July 2019 Volume 1 Edition 2", url: "https://mits.ac.in/assets/pdf/mba/July%202019-v1e2.pdf" },
      { title: "January 2019 Volume 1 Edition 1", url: "https://mits.ac.in/assets/pdf/mba/Jan%202019%20E1%20Final-min.pdf" }
    ]
  },
  nbaAccreditation: {
    groupTitle: "National Board of Accreditation (NBA)",
    documents: [
      { title: "NBA 2025-2028", url: "https://mits.ac.in/assets/pdf/mba/NBA 2025-2028.pdf" },
      { title: "NBA 2022-2025", url: "https://mits.ac.in/assets/pdf/mba/NBA 2022-2025.pdf" },
      { title: "NBA 2019-2022", url: "https://mits.ac.in/assets/pdf/mba/19-22%20NBA.pdf" },
      { title: "NBA 2018-2019", url: "https://mits.ac.in/assets/pdf/mba/NBA 2018-2019.pdf" },
      { title: "NBA 2016-2018", url: "https://mits.ac.in/assets/pdf/mba/NBA 2016-2018.pdf" }
    ]
  },
  celebrations: {
    groupTitle: "Department Celebrations",
    documents: [
      { title: "Guru Purnima Celebrations organized in the Department on 21st July, 2024", url: "https://mits.ac.in/assets/pdf/mba/Guru Poornima Celebrations was organized in the Department on 21th July, 2024.pdf" },
      { title: "Farewell Party on 29th August 2022 organized by Department of Management Studies (2021-23 Batch)", url: "https://mits.ac.in/assets/pdf/mba/farewell-min.pdf" },
      { title: "Har Ghar Tiranga on 15th August 2022 - Azadi Ka Amrit Mahotsav", url: "https://mits.ac.in/assets/pdf/mba/Tiranga-min.pdf" },
      { title: "International Yoga Day organized by Department of Management Studies on 21st June, 2022", url: "https://mits.ac.in/assets/pdf/mba/yoga%20day-min.pdf" },
      { title: "Guru Purnima Celebrations organized in the Department on 13th July, 2022", url: "https://mits.ac.in/assets/pdf/mba/Guru%20purnima-min.pdf" }
    ]
  },
  surveys: [
    {
      title: "Feedback Surveys",
      links: [
        { title: "2025-26 Feedback Survey", url: "https://mits.ac.in/public/uploads/surveys/2025-26 Feedback Survey.pdf" },
        { title: "2024-25 Feedback Survey", url: "https://mits.ac.in/public/uploads/surveys/2024-25 survey-compressed.pdf" },
        { title: "2023-24 Feedback Survey", url: "https://mits.ac.in/public/uploads/surveys/Stakeholders survey 23-24.pdf" },
        { title: "2022-23 Feedback Survey", url: "https://mits.ac.in/public/uploads/surveys/2022-2023 Survey-MBA Department.pdf" },
        { title: "2021-22 Feedback Survey", url: "https://mits.ac.in/public/uploads/surveys/0118bbed19b36c0a93275579436bdddf.pdf" },
        { title: "2020-21 Feedback Survey", url: "https://mits.ac.in/public/uploads/surveys/184b29c0ed45481de921979068d9b61a.pdf" },
        { title: "2019-20 Feedback Survey", url: "https://mits.ac.in/public/uploads/surveys/90b117cc8e411755135130389e2cc4c3.pdf" },
        { title: "2018-19 Feedback Survey", url: "https://mits.ac.in/public/uploads/surveys/08b6ba72271dddad17173bb72700b7fb.pdf" },
        { title: "2017-18 Feedback Survey", url: "https://mits.ac.in/public/uploads/surveys/98f387f1cc50fb73cb5aa621f72866b6.pdf" },
        { title: "2016-17 Feedback Survey", url: "https://mits.ac.in/public/uploads/surveys/e94a969339042b2ed66f3a075e0bcd1a.pdf" }
      ]
    }
  ],
  timetablesGroup: {
    groupTitle: "Timetables",
    documents: [
      { title: "MBA I Year II Semester Timetable Batch (2024-26)", url: "https://mits.ac.in/assets/pdf/mba/MBA I-II Time table AY 2024-25-min.pdf" },
      { title: "MBA II Year II Semester Timetable Batch (2023-25)", url: "https://mits.ac.in/assets/pdf/mba/MBA II-II Time table AY 2024-25-min.pdf" }
    ]
  },
  internships: {
    groupTitle: "MBA Internships",
    documents: [
      { title: "2024-25 - MBA Internships", url: "https://mits.ac.in/assets/pdf/mba/2024-25 - MBA - Internships.pdf" },
      { title: "2023-24 - MBA Internships", url: "https://mits.ac.in/assets/pdf/mba/2023-24 MBA Internships.pdf" },
      { title: "2022-23 - MBA Internships", url: "https://mits.ac.in/assets/pdf/mba/2022-23 MBA Internships.pdf" },
      { title: "2021-22 - MBA Internships", url: "https://mits.ac.in/assets/pdf/mba/2021-22 MBA Internships.pdf" }
    ]
  },
  mentorMentee: [
    {
      groupTitle: "Mentor & Mentee Allocation",
      items: [
        { title: "Mentor & Mentee Batch 2025-2027", pdfUrl: "https://mits.ac.in/assets/pdf/mba/Mentor Mentee Allocation 2025-27.pdf" },
        { title: "Mentor & Mentee Batch 2024-2026", pdfUrl: "https://mits.ac.in/assets/pdf/mba/Mentor-Mentee-Batch 2024-26.pdf" },
        { title: "Mentor & Mentee Batch 2023-2025", pdfUrl: "https://mits.ac.in/assets/pdf/mba/Mentor-Mentee-Batch 2023-25.pdf" },
        { title: "Mentor & Mentee Batch 2022-2024", pdfUrl: "https://mits.ac.in/assets/pdf/mba/Mentor-Mentee-Batch 2022-24.pdf" },
        { title: "Mentor & Mentee Batch 2021-2023", pdfUrl: "https://mits.ac.in/assets/pdf/mba/Mentor-Mentee-Batch 2021-23.pdf" }
      ]
    }
  ],
  mous: {
    groupTitle: "Memorandum of Understanding (MoU)",
    documents: [
      { title: "Bajaj Finserv College Signed MOU", url: "https://mits.ac.in/assets/pdf/mba/Bajaj FInserv College_Signed_MOU_1772098610770.pdf" },
      { title: "Career School HR Solutions MoU", url: "https://mits.ac.in/assets/pdf/mba/Career School HR solutions MoU.pdf" },
      { title: "DataQuotes Edutech Pvt Ltd MoU", url: "https://mits.ac.in/assets/pdf/mba/DataQuotes Edutech pvt ltd MoU.pdf" },
      { title: "Dattha Institute MoU", url: "https://mits.ac.in/assets/pdf/mba/Dattha Institute MoU.pdf" },
      { title: "PARD India MoU", url: "https://mits.ac.in/assets/pdf/mba/PARD India MoU.pdf" },
      { title: "National Institute of Technical Teachers Training and Research (NITTTR) MOU", url: "https://mits.ac.in/assets/pdf/mba/National Institute of Technical Teachers Training and Research MOU.pdf" },
      { title: "NASSCOM IT-ITeS Sector Skills Council MoU", url: "https://mits.ac.in/assets/pdf/mba/NASSCOM IT-ITeS SECTOR SKILLS COUNCIL MoU.pdf" },
      { title: "Asia University, Taiwan MoA", url: "https://mits.ac.in/assets/pdf/mba/MoA-Management studies-Asia Unv Taiwan-23.pdf" },
      { title: "Inspire Softech Solutions MoU", url: "https://mits.ac.in/assets/pdf/mba/Inspire Softech Solutions.pdf" },
      { title: "Dhara HR Solutions MoU", url: "https://mits.ac.in/assets/pdf/mba/Dhara HR Solutions.pdf" }
    ]
  },
  studentProjects: {
    groupTitle: "Students Projects",
    documents: [
      { title: "Project Data - 2025-2026", url: "https://mits.ac.in/assets/pdf/mba/Project Data- 2025-26.pdf" },
      { title: "Project Data - 2024-2025", url: "https://mits.ac.in/assets/pdf/mba/Project Data- 2024-25.pdf" },
      { title: "Project Data - 2023-2024", url: "https://mits.ac.in/assets/pdf/mba/Project Data- 2023-24.pdf" },
      { title: "Project Data - 2022-2023", url: "https://mits.ac.in/assets/pdf/mba/Project Data- 2022-23.pdf" }
    ]
  }
};

export function getDepartmentMore(deptKey: string): DepartmentMoreData {
  if (deptKey === "mba" || deptKey === "management-studies" || deptKey === "5") {
    return mbaMoreData;
  }
  const dept = departmentsData[deptKey];
  if (dept && dept.more) {
    return dept.more;
  }
  if (deptKey === "ece" || deptKey === "electronics-communication-engineering" || deptKey === "electronics-and-communication-engineering" || deptKey === "3") {
    return eceMoreData;
  }
  if (deptKey === "mca" || deptKey === "computer-applications" || deptKey === "18") {
    return mcaMoreData;
  }
  if (deptKey === "cst" || deptKey === "computer-science-and-technology" || deptKey === "computer-science-technology" || deptKey === "4") {
    return cstMoreData;
  }
  if (deptKey === "cseds" || deptKey === "cse-ds" || deptKey === "csd" || deptKey === "ds") {
    return csedsMoreData;
  }
  if (deptKey === "csecs" || deptKey === "cse-cs" || deptKey === "csc" || deptKey === "cs" || deptKey === "cyber-security" || deptKey === "csec") {
    return csecsMoreData;
  }
  if (deptKey === "ce" || deptKey === "civil" || deptKey === "6") {
    return ceMoreData;
  }
  if (deptKey === "eee" || deptKey === "electrical-electronics-engineering" || deptKey === "electrical-and-electronics-engineering" || deptKey === "ee" || deptKey === "2") {
    return eeeMoreData;
  }
  if (deptKey === "me" || deptKey === "mech" || deptKey === "mechanical" || deptKey === "mechanical-engineering" || deptKey === "8") {
    return meMoreData;
  }
  if (deptKey === "aiml" || deptKey === "cse-ai-ml") {
    return aimlMoreData;
  }
  if (deptKey === "ai" || deptKey === "cai") {
    return aiMoreData;
  }
  if (deptKey === "cse") {
    return cseMoreData;
  }
  return {
    subTabs: [
      { id: "mentor-mentee", label: "Mentor & Mentee" },
      { id: "minor", label: "Minor" }
    ],
    mentorMentee: [],
    minor: undefined
  };
}

export const aimlTopTabs: DepartmentTopTab[] = [
  {
    id: "department",
    label: "Department"
  },
  {
    id: "bos",
    label: "BoS",
    title: "Board Of Studies",
    documents: [
      {
        title: "BoS CSE (AI and ML) DTBU 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/BoS%20CSE(AI%20and%20ML)%20DTBU%202026-27.pdf"
      },
      {
        title: "BoS CSE (AI and ML) DTBU 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/MITS_Univ_CSE_AIML_BOS_AY_2025-2026.pdf"
      },
      {
        title: "BoS CSE (AI and ML) 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/BoS%20CSE(AIML)%202026-27.pdf"
      },
      {
        title: "BoS CSE (AI and ML) 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/CSE_AIML_BOS_AY_2025-2026.pdf"
      },
      {
        title: "BoS CSE (AI and ML) 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/CSE_AIML_BOS_AY_2024-2025.pdf"
      },
      {
        title: "BoS CSE (AI and ML) 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/CSE_AIML_BOS_AY_2023-2024.pdf"
      },
      {
        title: "BoS CSE (Networks) 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/BoS%20CSE(Networks)%202026-27.pdf"
      },
      {
        title: "BoS CSE (Networks) 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/BoS%20CSE(Networks)-2025-26.pdf"
      },
      {
        title: "BoS CSE (Networks) 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/BoS%20CSE(NETWORKS)-2024-25.pdf"
      },
      {
        title: "BoS CSE (Networks) 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/BoS%20CSE(Networks)-2023-24.pdf"
      }
    ]
  },
  {
    id: "iaab",
    label: "IAAB",
    title: "Industry Alumni Advisory Board",
    documents: [
      {
        title: "IAAB CSE (AI and ML) DTBU 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/IAAB%20CSE(AI%20and%20ML)%20DTBU%202026-27.pdf"
      },
      {
        title: "IAAB CSE (AI and ML) 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/IAAB%20CSE(AIML)%202026-27.pdf"
      },
      {
        title: "IAAB CSE (Networks) 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/IAAB%20CSE(Networks)%202026-27.pdf"
      },
      {
        title: "IAAB CSE (AI and ML) 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/CSE(AI%20and%20ML)%20IAAB%202025-26.pdf"
      },
      {
        title: "IAAB CSE (AI and ML) 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/CSE(AI%20and%20ML)%20IAAB%202024-25.pdf"
      },
      {
        title: "IAAB CSE (Networks) 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/CSE(Networks)%20IAAB%202025-26.pdf"
      },
      {
        title: "IAAB CSE (Networks) 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/CSE(Networks)%20IAAB%202024-25.pdf"
      }
    ]
  },
  {
    id: "magazine",
    label: "Magazine",
    title: "Magazine",
    documents: [
      {
        title: "AIXpert Magazine - 2026",
        url: "https://mits.ac.in/public/uploads/departments/AIMEX%202k26.pdf"
      },
      {
        title: "AIXpert Magazine - 2025",
        url: "https://mits.ac.in/public/uploads/departments/AIMEX%202k25.pdf"
      }
    ]
  }
];

export const aiTopTabs: DepartmentTopTab[] = [
  {
    id: "department",
    label: "Department"
  },
  {
    id: "bos",
    label: "BoS",
    title: "Board Of Studies",
    documents: [
      {
        title: "BoS 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/c113d7cb15132aba80706010f82e7817.pdf"
      },
      {
        title: "BoS 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/4b0edb027df8d3f8c3c0c53679b5ff5b.pdf"
      },
      {
        title: "BoS 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/e57c7d32d03795ae813663ab993ac412.pdf"
      },
      {
        title: "BoS 2022-23",
        url: "https://mits.ac.in/public/uploads/departments/b66ec423059e5e8476426f058da9536b.pdf"
      }
    ]
  },
  {
    id: "iaab",
    label: "IAAB",
    title: "Industry Alumni Advisory Board",
    documents: [
      {
        title: "IAAB-2025-26",
        url: "https://mits.ac.in/public/uploads/departments/ffb04bfeb3972fec2a32218964aecb15.pdf"
      },
      {
        title: "IAAB-2024-25",
        url: "https://mits.ac.in/public/uploads/departments/b5ef510df20d8ba93b350f86473e9689.pdf"
      },
      {
        title: "IAAB-2023-24",
        url: "https://mits.ac.in/public/uploads/departments/52c2fac94f88759c92531be99044a0af.pdf"
      },
      {
        title: "IAAB-2022-23",
        url: "https://mits.ac.in/public/uploads/departments/b9210ea109ba406fe9241d5b62e6cdcf.pdf"
      }
    ]
  }
];

export const cseTopTabs: DepartmentTopTab[] = [
  {
    id: "department",
    label: "Department"
  },
  {
    id: "faculty-list",
    label: "Faculty List",
    title: "Faculty List",
    documents: [
      {
        title: "Faculty List for the Academic Year 2024-25",
        url: "https://mits.ac.in/assets/pdf/cse/CSE%20CAY%202024-25.pdf"
      },
      {
        title: "Faculty List for the Academic Year 2023-24",
        url: "https://mits.ac.in/assets/pdf/cse/Faculty%20List%20Ay%202023-%2024.pdf"
      },
      {
        title: "Faculty List for the Academic Year 2022-23",
        url: "https://mits.ac.in/assets/pdf/cse/Faculty%20List%20Ay%202022%20-%2023.pdf"
      }
    ]
  },
  {
    id: "placement-statistics",
    label: "Placement Statistics",
    title: "Placement Statistics",
    documents: [
      {
        title: "Placement Statistics for the Academic Year 2023-24",
        url: "https://mits.ac.in/assets/pdf/cse/AY%202023-24%20Placement%20Statistics.pdf"
      },
      {
        title: "Placement Statistics for the Academic Year 2022-23",
        url: "https://mits.ac.in/assets/pdf/cse/AY%202022-23%20Placement%20Statistics.pdf"
      },
      {
        title: "Placement Statistics for the Academic Year 2021-22",
        url: "https://mits.ac.in/assets/pdf/cse/AY%202021-22%20Placement%20Statistics.pdf"
      }
    ]
  },
  {
    id: "bos",
    label: "BOS",
    title: "Board Of Studies",
    description:
      "Department’s Board of Studies (BoS) is a statutory body which is primarily responsible for compiling the curricula for all the courses offered by the Department and for regularly revising the syllabi for keeping it up to date with the changing trends. In addition, BoS also reviews the progress of the Department in terms of academics and research and suggests strategies for continuous improvement. The BoS comprises of senior faculty of the Department and experts from Industry and Peer Institutions. The external members in the current Bo of the Department are:",
    documents: [
      {
        title: "BoS DTBU 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/6f1a51faea534758791cd8595b2c6e5d.pdf"
      },
      {
        title: "BoS 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/ef8aafaa47ffe68b8c369f2218580501.pdf"
      },
      {
        title: "BoS DTBU 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/d80f20ec59b18943d4032bce53cf0a1d.pdf"
      },
      {
        title: "BOS 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/ace641c64a92a3b2249bf63ea83894eb.pdf"
      },
      {
        title: "BOS 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/b3eb1bb0eeb2ed4149b1683e2e47d27d.pdf"
      },
      {
        title: "BOS 2023-24 (R23 Regulation)",
        url: "https://mits.ac.in/public/uploads/departments/b68a5b83f70320fe6c5a1ee64467d402.pdf"
      },
      {
        title: "BOS 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/5641b43636c24484dddcab88db2d298e.pdf"
      },
      {
        title: "BOS 2022-23",
        url: "https://mits.ac.in/public/uploads/departments/db5a4fc06b6f2c8cde62582ce795951d.pdf"
      },
      {
        title: "BOS 2021-22",
        url: "https://mits.ac.in/public/uploads/departments/7dc7c5081bbedffca60be57bdd828502.pdf"
      },
      {
        title: "BOS 2020-21",
        url: "https://mits.ac.in/public/uploads/departments/24b9e0f1c4a49a4756db0ef84e8b76a9.pdf"
      },
      {
        title: "BOS 2019-20",
        url: "https://mits.ac.in/public/uploads/departments/8efc6ad6b68d340219812d7326929134.pdf"
      },
      {
        title: "BOS 2018-19",
        url: "https://mits.ac.in/public/uploads/departments/03f983eb04e03f0b6d8e90b1f33c76e6.pdf"
      },
      {
        title: "BOS 2017-18",
        url: "https://mits.ac.in/public/uploads/departments/44747954fe3bb16772cfeabf9b054198.pdf"
      },
      {
        title: "BOS 2016-17",
        url: "https://mits.ac.in/public/uploads/departments/b06dc948589428a3d91c9b6fd5a42b1a.pdf"
      },
      {
        title: "BOS 2015-16",
        url: "https://mits.ac.in/public/uploads/departments/0440941328c9e537fb3116f2f5d708da.pdf"
      },
      {
        title: "BOS 2014-15",
        url: "https://mits.ac.in/public/uploads/departments/898e9961375d23e0daddbad58ccbcd76.pdf"
      }
    ]
  },
  {
    id: "iaab",
    label: "IAAB",
    title: "Industry Alumni Advisory Board",
    description:
      "The Department constituted an advisory board with experts from the Industry and department alumni to seek guidance on strategic planning and functioning of the Department especially with regards to academic aspects like curriculum development and teaching and learning processes. The current external members of the IAAB are:",
    documents: [
      {
        title: "IAAB DTBU 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/2ac3489c08a46c40a368e7594b6f39bd.pdf"
      },
      {
        title: "IAAB 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/94e8517d1079f756607ec35e05202a88.pdf"
      },
      {
        title: "IAAB 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/404112e8a4e7e487c048b7c3e5bf48c8.pdf"
      },
      {
        title: "IAAB 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/387e0b7cb3b9344bf276565797acb84f.pdf"
      },
      {
        title: "IAAB 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/312657dc4992e72fa74a6220a20edc99.pdf"
      },
      {
        title: "IAAB 2022-23",
        url: "https://mits.ac.in/public/uploads/departments/0959470f53f0ba9a4594ffb5ea8cd612.pdf"
      },
      {
        title: "IAAB 2021-22",
        url: "https://mits.ac.in/public/uploads/departments/ed8da59057682733c4dd382728623752.pdf"
      },
      {
        title: "IAAB 2020-21",
        url: "https://mits.ac.in/public/uploads/departments/608508e84f2b8e222dd8f3691861281c.pdf"
      },
      {
        title: "IAAB 2019-20",
        url: "https://mits.ac.in/public/uploads/departments/b732fe014cadb7ce310de92838fc13c7.pdf"
      },
      {
        title: "IAAB 2018-19",
        url: "https://mits.ac.in/public/uploads/departments/aa2eaa7a87477d03ab28c526c2e70dae.pdf"
      },
      {
        title: "IAAB 2017-18",
        url: "https://mits.ac.in/public/uploads/departments/94173c59083bffae0a262e4891581405.pdf"
      }
    ]
  },
  {
    id: "pac",
    label: "PAC",
    title: "Programme Assessment Committee",
    documents: [
      {
        title: "PAC 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/17cc877f1fd7adf7fd742301e55ef8cf.pdf"
      },
      {
        title: "PAC 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/8af7ce2b2d8462918052e23590a817bd.pdf"
      },
      {
        title: "PAC 2022-23",
        url: "https://mits.ac.in/public/uploads/departments/319373a456505e1258284ff8297cb93b.pdf"
      },
      {
        title: "PAC 2021-22",
        url: "https://mits.ac.in/public/uploads/departments/a1aafe6a2c8b10745b4d310ece81e2cb.pdf"
      },
      {
        title: "PAC 2020-21",
        url: "https://mits.ac.in/public/uploads/departments/1109c3c57886322cca7e7480e8247fbf.pdf"
      },
      {
        title: "PAC 2019-20",
        url: "https://mits.ac.in/public/uploads/departments/26b16af2bddc6a910d00a72c60b32011.pdf"
      },
      {
        title: "PAC 2018-19",
        url: "https://mits.ac.in/public/uploads/departments/7cd82edf2aad13550ce507aa414eab6e.pdf"
      },
      {
        title: "PAC 2017-18",
        url: "https://mits.ac.in/public/uploads/departments/186f548e253243e63eb84a22611eaf31.pdf"
      }
    ]
  },
  {
    id: "magazine",
    label: "Magazine - Techera",
    title: "Magazine - Techera",
    documents: [
      {
        title: "Techera 2024",
        url: "https://mits.ac.in/public/uploads/departments/b746e8ac58629fb858149e7626d8d54a.pdf"
      },
      {
        title: "Techera 2023",
        url: "https://mits.ac.in/public/uploads/departments/4e46123f24e9d0ad934eeca0a6c125d5.pdf"
      },
      {
        title: "Techera 2022",
        url: "https://mits.ac.in/public/uploads/departments/858b5e38736a2bda28f42ff2676cf158.pdf"
      },
      {
        title: "Techera 2021",
        url: "https://mits.ac.in/public/uploads/departments/58837c0bd659429f2b7f824166324c59.pdf"
      },
      {
        title: "Techera 2020",
        url: "https://mits.ac.in/public/uploads/departments/11cb246f24a1fc5ca82c658de3da1d15.pdf"
      },
      {
        title: "Techera 2019",
        url: "https://mits.ac.in/public/uploads/departments/0ab0175c5f4eba71c8983e865751a8f8.pdf"
      },
      {
        title: "Techera 2018",
        url: "https://mits.ac.in/public/uploads/departments/516d97c6a580d7a61b4e0cc7c9414aa1.pdf"
      },
      {
        title: "Techera 2017",
        url: "https://mits.ac.in/public/uploads/departments/7a32ea89844f716739889f5ab92ca731.pdf"
      },
      {
        title: "Techera 2016",
        url: "https://mits.ac.in/public/uploads/departments/be624b2c0526d47e17bc256fc90d9212.pdf"
      }
    ]
  },
  {
    id: "news-bulletin",
    label: "News Bulletin",
    title: "Bulletin",
    documents: [
      {
        title: "Bulletin 2025-26 (Issue 1)",
        url: "https://mits.ac.in/public/uploads/departments/2025_-_26_Issue_-_1%20News%20Bulletin-compressed.pdf"
      },
      {
        title: "Bulletin 2024-25 (Issue 2)",
        url: "https://mits.ac.in/public/uploads/departments/2024_-_25_Issue_-_2.pdf"
      },
      {
        title: "Bulletin 2024-25 (Issue 1)",
        url: "https://mits.ac.in/public/uploads/departments/27ae2b85a432a1607fc24738aa863be2.pdf"
      },
      {
        title: "Bulletin 2023-24 (Issue 4)",
        url: "https://mits.ac.in/assets/pdf/cse/2023%20-%2024%20Issue%20-%204.pdf"
      },
      {
        title: "Bulletin 2023-24 (Issue 3)",
        url: "https://mits.ac.in/assets/pdf/cse/2023%20-%2024%20Issue%20-%203.pdf"
      },
      {
        title: "Bulletin 2023-24 (Issue 2)",
        url: "https://mits.ac.in/assets/pdf/cse/2023%20-%2024%20Issue%20-%202.pdf"
      },
      {
        title: "Bulletin 2023-24 (Issue 1)",
        url: "https://mits.ac.in/assets/pdf/cse/2023%20-%2024%20Issue%20-%201.pdf"
      },
      {
        title: "Bulletin 2022-23 (Issue 4)",
        url: "https://mits.ac.in/assets/pdf/cse/2022-23%20Issue-4.pdf"
      },
      {
        title: "Bulletin 2022-23 (Issue 3)",
        url: "https://mits.ac.in/assets/pdf/cse/2022-23%20Issue-3.pdf"
      },
      {
        title: "Bulletin 2022-23 (Issue 2)",
        url: "https://mits.ac.in/assets/pdf/cse/2022-23%20Issue-2.pdf"
      },
      {
        title: "Bulletin 2022-23 (Issue 1)",
        url: "https://mits.ac.in/assets/pdf/cse/2022-23%20Issue-1.pdf"
      },
      {
        title: "Bulletin 2021-22 (Issue 4)",
        url: "https://mits.ac.in/assets/pdf/cse/2021-2022%20Issue-4.pdf"
      },
      {
        title: "Bulletin 2021-22 (Issue 3)",
        url: "https://mits.ac.in/assets/pdf/cse/2021-2022%20Issue-3.pdf"
      },
      {
        title: "Bulletin 2021-22 (Issue 2)",
        url: "https://mits.ac.in/assets/pdf/cse/2021-2022%20Issue-2.pdf"
      },
      {
        title: "Bulletin 2021-22 (Issue 1)",
        url: "https://mits.ac.in/assets/pdf/cse/2021-2022%20Issue-1.pdf"
      },
      {
        title: "Bulletin 2020-21",
        url: "https://mits.ac.in/public/uploads/departments/ea464ac239a9710758eb321dd181695a.pdf"
      },
      {
        title: "Bulletin 2019-20",
        url: "https://mits.ac.in/public/uploads/departments/a6afa94fff30c7e7ef118e134822db62.pdf"
      },
      {
        title: "Bulletin 2018-19",
        url: "https://mits.ac.in/public/uploads/departments/e42205c53a0b057c7287b0dbcdc3dde2.pdf"
      },
      {
        title: "Bulletin 2017-18",
        url: "https://mits.ac.in/public/uploads/departments/568780197c9ddd581429ae5f44dd34de.pdf"
      },
      {
        title: "Bulletin 2016-17",
        url: "https://mits.ac.in/public/uploads/departments/a61e1925a8150641ca0382e196b3b07f.pdf"
      },
      {
        title: "Bulletin 2015-16",
        url: "https://mits.ac.in/public/uploads/departments/b01d9b74cfbf0e8694988febf3b0d39b.pdf"
      }
    ]
  }
];

export const csedsTopTabs: DepartmentTopTab[] = [
  {
    id: "department",
    label: "Department"
  },
  {
    id: "bos",
    label: "BoS",
    title: "Board Of Studies",
    documents: [
      {
        title: "BoS DTBU 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/134cb472d81ed7a3efdf49d4f9830ed4.pdf"
      },
      {
        title: "BoS 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/61632879672f9d1af4e7af1e07014ba4.pdf"
      },
      {
        title: "BOS 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/8e2ac6507446d7928d610d94aeabf592.pdf"
      },
      {
        title: "BOS 2022-23",
        url: "https://mits.ac.in/public/uploads/departments/9450470e4976e0513cf4e7d63925118a.pdf"
      },
      {
        title: "BOS 2021-22",
        url: "https://mits.ac.in/public/uploads/departments/02063e190daa75eec000c9f58efd85f9.pdf"
      },
      {
        title: "BOS 2020-21",
        url: "https://mits.ac.in/public/uploads/departments/f75721dd6dad2037e3657e9c8c59235a.pdf"
      }
    ]
  },
  {
    id: "iaab",
    label: "IAAB",
    title: "Industry Alumni Advisory Board",
    documents: [
      {
        title: "IAAB 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/f39c719768296dd86e7ac93a5b42475f.pdf"
      }
    ]
  },
  {
    id: "magazine",
    label: "Magazine",
    title: "Magazine",
    documents: [
      {
        title: "MAGDATAZINE - 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/a4baf88bf27ad0d2e296b8217cbc57fa.pdf"
      }
    ]
  }
];

export const csecsTopTabs: DepartmentTopTab[] = [
  {
    id: "department",
    label: "Department"
  },
  {
    id: "bos",
    label: "BoS",
    title: "Board Of Studies",
    documents: [
      {
        title: "BoS DTBU 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/51cab881f9f2e9d2bc8abddd458b6006.pdf"
      },
      {
        title: "BOS 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/7bde38c598e37f72108157a9e9c44fd1.pdf"
      },
      {
        title: "BoS DTBU 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/ff1445758c7e035a46406f1ad1313fc6.pdf"
      },
      {
        title: "BOS 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/4d63589b6b4b722a7d486b5ed5985382.pdf"
      },
      {
        title: "BOS 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/03b27e1585986fca75424e237fb45ce4.pdf"
      },
      {
        title: "BOS 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/7e9cec49f47012365841f5d20e7b6b33.pdf"
      }
    ]
  },
  {
    id: "iaab",
    label: "IAAB",
    title: "Industry Alumni Advisory Board",
    documents: [
      {
        title: "IAAB DTBU 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/0778d382f9441cd8654b1b2bf2c2fb10.pdf"
      },
      {
        title: "IAAB 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/635e24a74ac78b5d756d852091cc4af3.pdf"
      },
      {
        title: "IAAB 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/42577665d2b14fd0d4a8bcb325c6b965.pdf"
      },
      {
        title: "IAAB 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/2f0b622ec2924391faa7bfc764d9aecb.pdf"
      },
      {
        title: "IAAB 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/c73c91341e78ec3ff782903061f85ad2.pdf"
      }
    ]
  },
  {
    id: "dcs",
    label: "DCS",
    title: "Department Curriculum / Advisory Committee",
    documents: [
      {
        title: "DCS",
        url: "https://mits.ac.in/public/uploads/departments/97c521a394e52a5f7a5ade9e25962315.pdf"
      }
    ]
  }
];

export const ceTopTabs: DepartmentTopTab[] = [
  {
    id: "department",
    label: "Department"
  },
  {
    id: "faculty-list",
    label: "Faculty List",
    title: "Faculty List",
    documents: [
      {
        title: "Faculty List for the Academic Year 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/34609776fc6d3d8390a9657b4aa23f5a.pdf"
      },
      {
        title: "Faculty List for the Academic Year 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/e69d899abe97fd5e36ed6550f0483aea.pdf"
      },
      {
        title: "Faculty List for the Academic Year 2022-23",
        url: "https://mits.ac.in/public/uploads/departments/824fd42977ce4aaacf2bb00033567041.pdf"
      }
    ]
  },
  {
    id: "bos",
    label: "BoS",
    title: "Board of Studies",
    documents: [
      {
        title: "BoS 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/5ebd8d1eccab5799909d40d4136d8f51.pdf"
      },
      {
        title: "BoS 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/94cd2c24256628213ab83695f17dd91d.pdf"
      },
      {
        title: "BoS 2021-22",
        url: "https://mits.ac.in/public/uploads/departments/37f010e623c44a947cb8707c492638b9.pdf"
      },
      {
        title: "BoS 2019-20",
        url: "https://mits.ac.in/public/uploads/departments/8ff87e720735b4f72d24c4345730eba3.pdf"
      },
      {
        title: "BoS 2018-19",
        url: "https://mits.ac.in/public/uploads/departments/bc33d1be7144127a3e4ffe62cf23c916.pdf"
      },
      {
        title: "BoS 2017-18",
        url: "https://mits.ac.in/public/uploads/departments/e78f50832c37e1fdb0fe53dd70b07d24.pdf"
      }
    ]
  },
  {
    id: "dab",
    label: "DAB",
    title: "Departmental Advisory Board",
    documents: [
      {
        title: "DAB 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/fb5e44d7665f44ca9232cc905fbad821.pdf"
      },
      {
        title: "DAB 2022-23",
        url: "https://mits.ac.in/public/uploads/departments/93a33481b9901ab358ec8fc50aecbdb6.pdf"
      },
      {
        title: "DAB 2021-22",
        url: "https://mits.ac.in/public/uploads/departments/a30e2a00c25317dd815ef1e313a75d95.pdf"
      },
      {
        title: "DAB 2020-21",
        url: "https://mits.ac.in/public/uploads/departments/335fef3421ea7e7f789d04a2eb5eed55.pdf"
      },
      {
        title: "DAB 2019-20",
        url: "https://mits.ac.in/public/uploads/departments/4092546250940eeed0e87e4bcf7bbdb8.pdf"
      },
      {
        title: "DAB 2018-19",
        url: "https://mits.ac.in/public/uploads/departments/dee03e43857ae3ebf135d6dbc1acc99f.pdf"
      },
      {
        title: "DAB 2017-18",
        url: "https://mits.ac.in/public/uploads/departments/778fecafab6da179a1c0f9b639185b35.pdf"
      }
    ]
  },
  {
    id: "pac",
    label: "PAC",
    title: "Program Assessment Committee",
    documents: [
      {
        title: "PAC 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/4db1e62d5dd87a0209d5e9125d4244da.pdf"
      },
      {
        title: "PAC 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/e8a356e163801d10d94352a3b5e5b57a.pdf"
      },
      {
        title: "PAC 2021-22",
        url: "https://mits.ac.in/public/uploads/departments/0532180613e8f28c29bcf6352279166e.pdf"
      },
      {
        title: "PAC 2020-21",
        url: "https://mits.ac.in/public/uploads/departments/7e3a61f4830902ed330a46893e2cc8cc.pdf"
      },
      {
        title: "PAC 2019-20",
        url: "https://mits.ac.in/public/uploads/departments/e856aab8a4b1ba4fa1458e82f6ed583a.pdf"
      },
      {
        title: "PAC 2018-19",
        url: "https://mits.ac.in/public/uploads/departments/aa285dfcf2f99ad381b67ebb684c8694.pdf"
      },
      {
        title: "PAC 2017-18",
        url: "https://mits.ac.in/public/uploads/departments/52fad3d88a8c82febf2e77106fc7c143.pdf"
      }
    ]
  },
  {
    id: "newsletter",
    label: "Newsletter",
    title: "News Letter - Ranchana",
    documents: [
      {
        title: "Ranchana News letter 2024-25",
        url: "https://mits.ac.in/assets/pdf/civil/Ranchana%20News%20letter_2024-25.pdf"
      },
      {
        title: "Ranchana News letter 2023-24",
        url: "https://mits.ac.in/assets/pdf/civil/Ranchana%20News%20letter_2023-24.pdf"
      },
      {
        title: "Ranchana News letter 2022-23",
        url: "https://mits.ac.in/assets/pdf/civil/Ranchana%20News%20letter_2022-23.pdf"
      },
      {
        title: "Ranchana News letter 2021-22",
        url: "https://mits.ac.in/assets/pdf/civil/Ranchana%20News%20letter_2021-22.pdf"
      }
    ]
  },
  {
    id: "magazine",
    label: "Magazine",
    title: "Magazine - TERRA",
    documents: [
      {
        title: "TERRA - 2023-2024",
        url: "https://mits.ac.in/assets/pdf/civil/TERRA-2023-24.pdf"
      },
      {
        title: "TERRA - 2022-2023",
        url: "https://mits.ac.in/assets/pdf/civil/TERRA-2022-23.pdf"
      },
      {
        title: "TERRA - 2021-2022",
        url: "https://mits.ac.in/assets/pdf/civil/TERRA-2021-22.pdf"
      },
      {
        title: "TERRA - 2020-2021",
        url: "https://mits.ac.in/assets/pdf/civil/TERRA%202020-2021.pdf"
      },
      {
        title: "TERRA - 2019-2020",
        url: "https://mits.ac.in/assets/pdf/civil/TERRA%202019-2020.pdf"
      }
    ]
  }
];

export const eeeTopTabs: DepartmentTopTab[] = [
  {
    id: "department",
    label: "Department"
  },
  {
    id: "faculty-list",
    label: "Faculty List",
    title: "Faculty List",
    documents: [
      {
        title: "Faculty List for the Academic Year 2024-25",
        url: "https://mits.ac.in/assets/pdf/eee/EEE%20Faculty%20List%20AY%202024-25.pdf"
      },
      {
        title: "Faculty List for the Academic Year 2023-24",
        url: "https://mits.ac.in/assets/pdf/eee/EEE%20Faculty%20List%20AY%202023-24.pdf"
      },
      {
        title: "Faculty List for the Academic Year 2022-23",
        url: "https://mits.ac.in/assets/pdf/eee/EEE%20Faculty%20List%20AY%202022-23.pdf"
      }
    ]
  },
  {
    id: "bos",
    label: "BoS",
    title: "Board of Studies",
    description: "Department’s Board of Studies (BoS) is a statutory body which is primarily responsible for compiling the curriculum for all the courses offered by the Department and for regularly revising the syllabi for keeping it up to date with the changing trends. The Board of Studies (BoS) meeting is conducted every year and the agenda of the meeting focuses on the following points.",
    points: [
      "Prepare syllabi for various courses keeping in view the Mission & Vision of the Department, interest of the stakeholders, industry and national requirement for consideration.",
      "Different methodologies for innovative teaching and evaluation techniques.",
      "Coordinate research, teaching and other academic activities in the department."
    ],
    members: [
      {
        sno: "1",
        name: "Prof. Dr. P. S. Nagendra Rao",
        composition: "Expert in subject nominated by academic council",
        designation: "Professor, Dept of Electrical Engineering, IISc, Bangalore (Retd), IIT Dharwad (Visiting Professor)"
      },
      {
        sno: "2",
        name: "Dr. K. Siva Kumar",
        composition: "Expert in subject nominated by academic council",
        designation: "Professor, Dept. of EE, IIT - Hyd"
      },
      {
        sno: "3",
        name: "Dr. R. Kiranmayi",
        composition: "Expert nominated by the Vice-Chancellor",
        designation: "Director, Foreign Affairs & Alumni Matters and Professor, EEE Department, JNTUA CEA"
      },
      {
        sno: "4",
        name: "Dr. Balakrishna P",
        composition: "Expert from Industry.",
        designation: "Senior Engineer - Emerging Technologies, GE Grid Solutions, Hyderabad, T.S."
      },
      {
        sno: "5",
        name: "Ms. B. R. Sushma",
        composition: "Member-Meritorious Alumnus",
        designation: "Scientist, DRDO, Bangalore."
      }
    ],
    documents: [
      {
        title: "BoS DTBU 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/731c6de00e50600f614706ca4d6c740a.pdf"
      },
      {
        title: "BoS 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/995645838ce4a60d761c4a4c41b31439.pdf"
      },
      {
        title: "BoS 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/4a25f001eaec2b41f0fc56d2d64b01c9.pdf"
      },
      {
        title: "BoS 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/1b9743c7eaa3e95b4cd060da7c9fbeaa.pdf"
      },
      {
        title: "BoS 2023-24 (R23 Regulation)",
        url: "https://mits.ac.in/public/uploads/departments/ac9db5d30535286a039f327795c840b2.pdf"
      },
      {
        title: "BoS 2022-23",
        url: "https://mits.ac.in/public/uploads/departments/a28c5ea54db0faf41d60e32bea857ddc.pdf"
      },
      {
        title: "BoS 2021-22",
        url: "https://mits.ac.in/public/uploads/departments/c931672fec6d0f112fb051bdfd2a2fe4.pdf"
      },
      {
        title: "BoS 2020-21",
        url: "https://mits.ac.in/public/uploads/departments/a21d97dc807d35dc1058c8ea31b02b35.pdf"
      },
      {
        title: "BoS 2019-20",
        url: "https://mits.ac.in/public/uploads/departments/34028d4539fbcf8a629cc4205face2b7.pdf"
      },
      {
        title: "BoS 2018-19",
        url: "https://mits.ac.in/public/uploads/departments/4cbb046df53d3e0cf58fbe79703cd96d.pdf"
      },
      {
        title: "BoS 2017-18",
        url: "https://mits.ac.in/public/uploads/departments/c69a8c4c059d03bca6eebda3d1f5cf30.pdf"
      },
      {
        title: "BoS 2016-17",
        url: "https://mits.ac.in/public/uploads/departments/785f513f750031e8b548cc592a98c020.pdf"
      },
      {
        title: "BoS 2015-16",
        url: "https://mits.ac.in/public/uploads/departments/aaedb95985294a69836b3801889a3bda.pdf"
      },
      {
        title: "BoS 2014-15",
        url: "https://mits.ac.in/public/uploads/departments/b1b3eba43bab42024b291f0aee156a6e.pdf"
      }
    ]
  },
  {
    id: "iaab",
    label: "IAAB",
    title: "Industry Alumni Advisory Board",
    description: "Industry Alumni Advisory Board (IAAB) is constituted with industry experts and alumni of the department. IAAB meeting is held in every year and the following points are discussed during the meeting.",
    points: [
      "Various aspects to fill the gaps in the curriculum to meet industrial expectations.",
      "Different methodologies for innovative teaching and learning to improve employability skills.",
      "Suggest to promote industry internship and project based learning activities to bridge the gap between theory and practical knowledge."
    ],
    members: [
      {
        sno: "1",
        name: "Mr. Vishnu Charan Thippana",
        designation: "Deputy General Manager, TATA Projects, Hyderabad"
      },
      {
        sno: "2",
        name: "Dr. Vinay Kumar T",
        designation: "Assistant Professor Gr-I, Department of Electrical Engineering, National Institute of Technology, Warangal, T. S."
      }
    ],
    documents: [
      {
        title: "IAAB 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/a5881c4bf65c0c1b0f53228bd1ef3e7d.pdf"
      },
      {
        title: "IAAB 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/d97989abc0a5294a42357bfb39585f87.pdf"
      },
      {
        title: "IAAB 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/a1ee151669594bb22da1319f2b2bbe47.pdf"
      },
      {
        title: "IAAB 2022-23",
        url: "https://mits.ac.in/public/uploads/departments/0cd4f05d5f8bf8838555ee82d3227ab1.pdf"
      },
      {
        title: "IAAB 2021-22",
        url: "https://mits.ac.in/public/uploads/departments/34acb085b3ada1e954f4b66b048f3bb6.pdf"
      },
      {
        title: "IAAB 2020-21",
        url: "https://mits.ac.in/public/uploads/departments/be4a18da761d2727dd9db341d3e626b2.pdf"
      },
      {
        title: "IAAB 2019-20",
        url: "https://mits.ac.in/public/uploads/departments/984d560e713f2ea3557cd8159da27acd.pdf"
      },
      {
        title: "IAAB 2018-19",
        url: "https://mits.ac.in/public/uploads/departments/535b1f5e32c0a97397b923a30ff8c419.pdf"
      },
      {
        title: "IAAB 2017-18",
        url: "https://mits.ac.in/public/uploads/departments/a11da7c423089fc25e8b542e72d80dfc.pdf"
      },
      {
        title: "IAAB 2016-17",
        url: "https://mits.ac.in/public/uploads/departments/88fefe2ea0157d7e09139cf7ae3a1b88.pdf"
      },
      {
        title: "IAAB 2015-16",
        url: "https://mits.ac.in/public/uploads/departments/21de38fd8fcc632e2e33b1988c8e160c.pdf"
      },
      {
        title: "IAAB 2014-15",
        url: "https://mits.ac.in/public/uploads/departments/7a0aa987b1e61c6b6623385abde7e618.pdf"
      }
    ]
  },
  {
    id: "pac",
    label: "PAC",
    title: "PAC",
    documents: [
      {
        title: "PAC 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/3864c5980a1139e71dab37c19cce41d1.pdf"
      },
      {
        title: "PAC 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/8d191204b9cd9660e2547ed219b38b6e.pdf"
      },
      {
        title: "PAC 2022-23",
        url: "https://mits.ac.in/public/uploads/departments/23a227cb9da0011aa0778afd74c9d6b2.pdf"
      },
      {
        title: "PAC 2021-22",
        url: "https://mits.ac.in/public/uploads/departments/15a45ac97a940567a77b32e368901df0.pdf"
      },
      {
        title: "PAC 2020-21",
        url: "https://mits.ac.in/public/uploads/departments/c7fffa57f37e6f860e632ef9b0e13f03.pdf"
      },
      {
        title: "PAC 2019-20",
        url: "https://mits.ac.in/public/uploads/departments/1385034918639d60f85eb0faa4bf8c03.pdf"
      },
      {
        title: "PAC 2018-19",
        url: "https://mits.ac.in/public/uploads/departments/c4151ab59d4a74723e5d4086422a757e.pdf"
      },
      {
        title: "PAC 2017-18",
        url: "https://mits.ac.in/public/uploads/departments/07b29ab1cc0d2731c28dad3e46f2feca.pdf"
      },
      {
        title: "PAC 2016-17",
        url: "https://mits.ac.in/public/uploads/departments/9086415ed35966cd487d24ee858f889e.pdf"
      },
      {
        title: "PAC 2015-16",
        url: "https://mits.ac.in/public/uploads/departments/0cebf0f467447a2235fd8cf1160883db.pdf"
      }
    ]
  },
  {
    id: "dab",
    label: "DAB",
    title: "DAB",
    documents: [
      {
        title: "DAB 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/4db64137c0ac43cea7dc96df560df7cc.pdf"
      },
      {
        title: "DAB 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/fa59016818005b227b5f8e2ad5de7a5d.pdf"
      },
      {
        title: "DAB 2022-23",
        url: "https://mits.ac.in/public/uploads/departments/ff8c5a166131376f343db29fd9321c70.pdf"
      },
      {
        title: "DAB 2021-22",
        url: "https://mits.ac.in/public/uploads/departments/f27f74c298bff7de05fdac8176fea447.pdf"
      },
      {
        title: "DAB 2020-21",
        url: "https://mits.ac.in/public/uploads/departments/1d6d771ad0448a6a878acef68bcaf699.pdf"
      },
      {
        title: "DAB 2019-20",
        url: "https://mits.ac.in/public/uploads/departments/1ae5bf8f2b8d010a6d6899f2c088dddc.pdf"
      },
      {
        title: "DAB 2018-19",
        url: "https://mits.ac.in/public/uploads/departments/45683adf375ba77f91f3bd27640755ce.pdf"
      },
      {
        title: "DAB 2017-18",
        url: "https://mits.ac.in/public/uploads/departments/ad538c33ba681a608338059d9e2ff183.pdf"
      },
      {
        title: "DAB 2016-17",
        url: "https://mits.ac.in/public/uploads/departments/51dc3f0440af95174ef68e2e207cfff0.pdf"
      }
    ]
  },
  {
    id: "newsletter",
    label: "News Letters",
    title: "News Letters",
    documents: [
      {
        title: "News Letter 2024",
        url: "https://mits.ac.in/public/uploads/departments/a1b978fa72c7aa97631874c4e854b978.pdf"
      },
      {
        title: "News Letter 2023",
        url: "https://mits.ac.in/public/uploads/departments/aa969f147b80763f2b295a87f6f9e041.pdf"
      },
      {
        title: "News Letter 2022",
        url: "https://mits.ac.in/public/uploads/departments/3d2b9ff688980b5b92f49d7620b6f597.pdf"
      },
      {
        title: "News Letter 2021",
        url: "https://mits.ac.in/public/uploads/departments/9f7a03c4ae68283581ef4b33bc34f6dc.pdf"
      },
      {
        title: "News Letter 2020",
        url: "https://mits.ac.in/public/uploads/departments/eae123f1b4e16c4e788bac6f7a73104a.pdf"
      },
      {
        title: "News Letter 2019",
        url: "https://mits.ac.in/public/uploads/departments/306fa41079a6407a34b6481ca253c969.pdf"
      },
      {
        title: "News Letter 2018",
        url: "https://mits.ac.in/public/uploads/departments/30e7eca71158f2b2f4142860ab83d7e9.pdf"
      },
      {
        title: "News Letter 2017",
        url: "https://mits.ac.in/public/uploads/departments/aa0a805ea155f595bf8803a106aeb7bb.pdf"
      },
      {
        title: "News Letter 2016",
        url: "https://mits.ac.in/public/uploads/departments/5fbb833b962b8853ec5cdd25ce1800f4.pdf"
      }
    ]
  }
];

export const meTopTabs: DepartmentTopTab[] = [
  {
    "id": "department",
    "label": "Department"
  },
  {
    "id": "faculty-list",
    "label": "Faculty List",
    "title": "Faculty List",
    "documents": [
      {
        "title": "Faculty List for the Academic Year 2024-25",
        "url": "https://mits.ac.in/public/uploads/departments/4715af8e6a43fe8dfdc8ef6c72de286f.pdf"
      },
      {
        "title": "Faculty List for the Academic Year 2023-24",
        "url": "https://mits.ac.in/public/uploads/departments/57b286c04591787e070adfde8465d653.pdf"
      },
      {
        "title": "Faculty List for the Academic Year 2022-23",
        "url": "https://mits.ac.in/public/uploads/departments/e0e3087439772f87fcbb1d83a4ad814e.pdf"
      }
    ]
  },
  {
    "id": "bos",
    "label": "BoS",
    "title": "Board of Studies",
    "description": "Department\u2019s Board of Studies (BoS) is a statutory body which is primarily responsible for compiling the curricula for all the courses offered by the Department and for regularly revising the syllabi for keeping it up to date with the changing trends. In addition, BoS also reviews the progress of the Department in terms of academics and research and suggests strategies for continuous improvement. The BoS comprises of senior faculty of the Department and experts from Industry and Peer Institutions. The external members in the current Bo of the Department are:",
    "members": [
      {
        "sno": "1",
        "name": "Dr. S. Baskaran(BoS - Chairman)",
        "designation": "Assoc. Professor & Head of the Department, ME"
      },
      {
        "sno": "2",
        "name": "Dr. B. Durga Prasad(JNTUA University Nominee)",
        "designation": "Professor, Mechanical Department, JNTUA CEA, Ananthapuramu."
      },
      {
        "sno": "3",
        "name": "Dr. E. Anil Kumar(Subject Expert)",
        "designation": "Professor, Mechanical Engineering, IIT, Tirupati."
      },
      {
        "sno": "4",
        "name": "Dr. B. Venkatesham(Subject Expert)",
        "designation": "Professor, Mechanical and Aerospace Engineering, IIT, Hyderabad."
      },
      {
        "sno": "5",
        "name": "Mr. Kashinath M Patnasetty(Industry Expert)",
        "designation": "Head, VAS Application Support Ace Designers Limited, Bangalore."
      },
      {
        "sno": "6",
        "name": "Mr. Anand Swaroop Donepudi(Alumni)",
        "designation": "Product and Application Engineer CBRE South Asia Pvt. Ltd.,"
      }
    ],
    "documents": [
      {
        "title": "BOS 2024-25",
        "url": "https://mits.ac.in/public/uploads/departments/e24f944adcb19447e4b42ed17e83ab04.pdf"
      },
      {
        "title": "BOS 2023-24 (R23)",
        "url": "https://mits.ac.in/public/uploads/departments/a344a8249472535c6700ff90a39acf50.pdf"
      },
      {
        "title": "BOS 2023-24",
        "url": "https://mits.ac.in/public/uploads/departments/585f6d68bfedf9844672a53fe30f8c29.pdf"
      },
      {
        "title": "BOS 2022-23",
        "url": "https://mits.ac.in/public/uploads/departments/5c365ff5e562f985268e73c669710c86.pdf"
      },
      {
        "title": "BOS 2021-22",
        "url": "https://mits.ac.in/public/uploads/departments/16d7a897423c9bb4e52eaa8ec55a4073.pdf"
      },
      {
        "title": "BOS 2020-21",
        "url": "https://mits.ac.in/public/uploads/departments/d0a2803be431cc23a6383b3d2d100320.pdf"
      },
      {
        "title": "BOS 2019-20",
        "url": "https://mits.ac.in/public/uploads/departments/ce21685429487c73b5c97ec25c721fb5.pdf"
      },
      {
        "title": "BOS 2018-19",
        "url": "https://mits.ac.in/public/uploads/departments/afd2025244e4f8e8ec54191ceb2f3997.pdf"
      },
      {
        "title": "BOS 2017-18",
        "url": "https://mits.ac.in/public/uploads/departments/94015127a15c7ccb09d2a3b937a48b40.pdf"
      },
      {
        "title": "BOS 2016-17",
        "url": "https://mits.ac.in/public/uploads/departments/e155b6d17f3626998a6a4578cc277b00.pdf"
      },
      {
        "title": "BoS 2015-16",
        "url": "https://mits.ac.in/public/uploads/departments/d331268a3371d754f30bb27a588adb03.pdf"
      },
      {
        "title": "BoS 2014-15",
        "url": "https://mits.ac.in/public/uploads/departments/074bd16ef26b2d661b000446f580a7b9.pdf"
      }
    ]
  },
  {
    "id": "iaab",
    "label": "IAAB",
    "title": "Industry Alumni Advisory Board",
    "description": "The Department constituted an advisory board with experts from the Industry and department alumni to seek guidance on strategic planning and functioning of the Department especially with regards to academic aspects like curriculum development and teaching and learning processes. The current external members of the IAAB are:",
    "members": [
      {
        "sno": "1",
        "name": "Mr. M. Hari Prasad(Industry Expert)",
        "designation": "Former Scientist, Aeronautical Development Establishment (ADE), Bangalore"
      },
      {
        "sno": "2",
        "name": "Dr. R. Thundil Karuppa Raj(Academic Expert)",
        "designation": "Professor, Automotive Engineering, VIT, Vellore"
      },
      {
        "sno": "3",
        "name": "Mr. M. Venkata Satyanarayana",
        "designation": "MITS Alumni, Principal Engineer \u2013 R&D, Sahajanand Medical Technologies, Surat"
      },
      {
        "sno": "4",
        "name": "Mr. Anand Swaroop Donepudi",
        "designation": "MITS Alumni"
      }
    ],
    "documents": [
      {
        "title": "IAAB 2024-25",
        "url": "https://mits.ac.in/public/uploads/departments/3a98077bfb1d9689a33ce475cf2551a7.pdf"
      },
      {
        "title": "IAAB 2023-24",
        "url": "https://mits.ac.in/public/uploads/departments/e6449ac35adb10d33769360a1bfd768d.pdf"
      },
      {
        "title": "IAAB 2022-23",
        "url": "https://mits.ac.in/public/uploads/departments/e0b464f6cb9e0bce945672b700743c67.pdf"
      },
      {
        "title": "IAAB 2021-22",
        "url": "https://mits.ac.in/public/uploads/departments/7f3a7ea927ff773e4a37a45526b3b976.pdf"
      },
      {
        "title": "IAAB 2020-21",
        "url": "https://mits.ac.in/public/uploads/departments/7dba9972ce0fa2726bd56f892c87bfdb.pdf"
      },
      {
        "title": "IAAB 2019-20",
        "url": "https://mits.ac.in/public/uploads/departments/2cad3eb9f0d212f1599f0a0288ddba9f.pdf"
      },
      {
        "title": "IAAB 2018-19",
        "url": "https://mits.ac.in/public/uploads/departments/5f2b057e6cf4a3f5cd3eace02b0ae4aa.pdf"
      }
    ]
  },
  {
    "id": "pac",
    "label": "PAC",
    "title": "Program Assessment Committee",
    "documents": [
      {
        "title": "PAC 2024-25",
        "url": "https://mits.ac.in/assets/pdf/mech/PAC 2024-25 M2.pdf"
      },
      {
        "title": "PAC 2024-25",
        "url": "https://mits.ac.in/assets/pdf/mech/PAC 2024-25 M1.pdf"
      },
      {
        "title": "PAC 2023-24",
        "url": "https://mits.ac.in/assets/pdf/mech/PAC 2023-24 M2.pdf"
      },
      {
        "title": "PAC 2023-24",
        "url": "https://mits.ac.in/assets/pdf/mech/PAC 2023-24 M1.pdf"
      },
      {
        "title": "PAC 2022-23",
        "url": "https://mits.ac.in/assets/pdf/mech/PAC 2022-23 M2.pdf"
      },
      {
        "title": "PAC 2022-23",
        "url": "https://mits.ac.in/assets/pdf/mech/PAC 2022-23 M1.pdf"
      },
      {
        "title": "PAC 2021-22",
        "url": "https://mits.ac.in/assets/pdf/mech/PAC 2021-22 M2.pdf"
      },
      {
        "title": "PAC 2021-22",
        "url": "https://mits.ac.in/public/uploads/departments/0b3ad6b1ee544b404eb26e234c9f988f.pdf"
      },
      {
        "title": "PAC 2020-21",
        "url": "https://mits.ac.in/public/uploads/departments/23156e74aacc9979a1cd9cdf89c96eb5.pdf"
      },
      {
        "title": "PAC 2019-20",
        "url": "https://mits.ac.in/public/uploads/departments/01e6f9f2a6d95fd015b934b7dec13fee.pdf"
      },
      {
        "title": "PAC 2018-19",
        "url": "https://mits.ac.in/public/uploads/departments/fcd3d2091fe2c2a91bcd94f4f017f2c2.pdf"
      },
      {
        "title": "PAC 2017-18",
        "url": "https://mits.ac.in/public/uploads/departments/30e6c0c0c0910e04d138200efdc14ac1.pdf"
      },
      {
        "title": "PAC 2016-17",
        "url": "https://mits.ac.in/public/uploads/departments/a259ae782d3351e9495d5dbe89622782.pdf"
      }
    ]
  }
];

export const cstTopTabs: DepartmentTopTab[] = [
  {
    id: "department",
    label: "Department"
  },
  {
    id: "bos",
    label: "BoS",
    title: "Board Of Studies",
    description: "Department’s Board of Studies (BoS) is a statutory body which is primarily responsible for compiling the curricula for all the courses offered by the Department and for regularly revising the syllabi for keeping it up to date with the changing trends. In addition, BoS also reviews the progress of the Department in terms of academics and research and suggests strategies for continuous improvement. The BoS comprises of senior faculty of the Department and experts from Industry and Peer Institutions. The external members in the current Bo of the Department are:",
    documents: [
      {
        title: "BoS 2026-27",
        url: "https://mits.ac.in/public/uploads/departments/442f80347264df21cffbae907ee72d5c.pdf"
      },
      {
        title: "BoS 2025-26",
        url: "https://mits.ac.in/public/uploads/departments/21829492e83850371e5ef11cbf8e34ea.pdf"
      },
      {
        title: "BoS 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/872951a72ebb4754954fd70edea3e181.pdf"
      },
      {
        title: "BOS 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/6426608dd7f2c6d9cb9f9eb15de47de6.pdf"
      },
      {
        title: "BOS 2022-23",
        url: "https://mits.ac.in/public/uploads/departments/0b79d9a230826a8387b27b8bf39aa195.pdf"
      },
      {
        title: "BOS 2021-22",
        url: "https://mits.ac.in/public/uploads/departments/630d0f9dc475a4c952e61bc500c5a6ad.pdf"
      },
      {
        title: "BoS 2020-21",
        url: "https://mits.ac.in/public/uploads/departments/b142c10532231df739f4527f16b19312.pdf"
      },
      {
        title: "BoS 2019-20",
        url: "https://mits.ac.in/public/uploads/departments/66b8171b008e8a651f8c680b12ac0daf.pdf"
      },
      {
        title: "BoS 2018-19",
        url: "https://mits.ac.in/public/uploads/departments/4cd9e467724289d8ce3cedbfe01a2cb1.pdf"
      }
    ]
  },
  {
    id: "iaab",
    label: "IAAB",
    title: "IAAB",
    documents: [
      {
        title: "IAAB 2024-25",
        url: "https://mits.ac.in/public/uploads/departments/70790676b47fc14c69430a3c004e806a.pdf"
      },
      {
        title: "IAAB 2023-24",
        url: "https://mits.ac.in/public/uploads/departments/6cdb7b6d5596626a56bfcfee37f6950f.pdf"
      },
      {
        title: "IAAB 2022-23",
        url: "https://mits.ac.in/public/uploads/departments/a5efedbaba9a2fbfbf794bf6d5cb9f94.pdf"
      }
    ]
  },
  {
    id: "magazine",
    label: "Magazine",
    title: "Magazine",
    documents: [
      {
        title: "SPARK 2024-2025 (Issue - 6 Volume - 1)",
        url: "https://mits.ac.in/public/uploads/departments/471ecb6135b92321230e1ae407b8740d.pdf"
      },
      {
        title: "SPARK 2023-2024 (Issue - 5 Volume - 1)",
        url: "https://mits.ac.in/public/uploads/departments/caa674599b229163e82d8f70e07b17ce.pdf"
      },
      {
        title: "SPARK 2022-2023 (Issue - 4 Volume - 1)",
        url: "https://mits.ac.in/public/uploads/departments/b32ff5c0d6e9040c76e417d27e49cce8.pdf"
      },
      {
        title: "SPARK 2021-2022 (Issue - 3 Volume - 1)",
        url: "https://mits.ac.in/public/uploads/departments/eb45bc91a9511f1741012ce12b10c51a.pdf"
      },
      {
        title: "SPARK 2020-2021 (Issue - 2 Volume - 1)",
        url: "https://mits.ac.in/public/uploads/departments/ab8a269cbbe19d0f34d1e632c81f74fa.pdf"
      },
      {
        title: "SPARK 2019-2020 (Issue - 1 Volume - 1)",
        url: "https://mits.ac.in/public/uploads/departments/899a2cf062d555e9ee5dbdc63de76fa4.pdf"
      }
    ]
  },
  {
    id: "pac",
    label: "PAC & DAB",
    title: "PAC & DAB",
    documents: [
      {
        title: "PAC & DAB 2024-25",
        url: "https://mits.ac.in/assets/pdf/cst/PAC%20&%20DAB%202024-25.pdf"
      },
      {
        title: "PAC & DAB 2023-24",
        url: "https://mits.ac.in/assets/pdf/cst/PAAC%20&%20DAAB%202023-2024.pdf"
      },
      {
        title: "PAC & DAB 2022-23",
        url: "https://mits.ac.in/assets/pdf/cst/PAAC%20&%20DAAB%202022-2023.pdf"
      },
      {
        title: "PAC & DAB 2021-22",
        url: "https://mits.ac.in/assets/pdf/cst/PAAC%20&%20DAAB%202021-2022.pdf"
      },
      {
        title: "PAC & DAB 2020-21",
        url: "https://mits.ac.in/assets/pdf/cst/PAAC%20&%20DAAB%202020-2021.pdf"
      },
      {
        title: "PAC & DAB 2019-20",
        url: "https://mits.ac.in/assets/pdf/cst/PAAC%20&%20DAAB%202019-20.pdf"
      },
      {
        title: "PAC & DAB 2018-19",
        url: "https://mits.ac.in/assets/pdf/cst/PAAC%20&%20DAAB%202018-2019.pdf"
      }
    ]
  },
  {
    id: "student-projects",
    label: "Student Projects",
    title: "Student Projects",
    documents: [
      {
        title: "Batch 2021-25 Project Titles",
        url: "https://mits.ac.in/public/uploads/departments/34b81c5caffd6a58085450305aa15c5c.pdf"
      },
      {
        title: "Batch 2020-24 Project Titles",
        url: "https://mits.ac.in/public/uploads/departments/a5366fad63d845d4e75e2dd6781ba7bd.pdf"
      },
      {
        title: "Batch 2019-23 Project Titles",
        url: "https://mits.ac.in/public/uploads/departments/380b753e5962ebf542a17086d9ba7a3f.pdf"
      },
      {
        title: "Batch 2018-22 Project Titles",
        url: "https://mits.ac.in/public/uploads/departments/07e0d2d438043335fe09243da6401a58.pdf"
      }
    ]
  },
  {
    id: "technical-symposium",
    label: "Technical Symposium",
    title: "Technical Symposium",
    documents: [
      {
        title: "INVICTA - 2K23",
        url: "https://mits.ac.in/assets/pdf/cst/INVICTA_2K23.pdf"
      },
      {
        title: "INVICTA - 2K22",
        url: "https://mits.ac.in/assets/pdf/cst/INVICTA_2K22.pdf"
      }
    ]
  },
  {
    id: "newsletter",
    label: "Newsletter",
    title: "Newsletter",
    documents: [
      {
        title: "ECHO 2024 - 2025 Volume 6 Issue 1",
        url: "https://mits.ac.in/public/uploads/departments/3946a7a235d05c12b17730d62e1fb4a4.pdf"
      },
      {
        title: "ECHO 2023 - 2024 Volume 5 Issue 1",
        url: "https://mits.ac.in/public/uploads/departments/f7793c310c093a1f4e89bf14a79a5618.pdf"
      },
      {
        title: "ECHO 2022 - 2023 Volume 4 Issue 1",
        url: "https://mits.ac.in/public/uploads/departments/26e00fb63da62a87599909b80bc3fb70.pdf"
      },
      {
        title: "ECHO 2021 - 2022 Volume 3 Issue 1",
        url: "https://mits.ac.in/public/uploads/departments/f56dc113194ff548985070846bda6714.pdf"
      },
      {
        title: "ECHO 2020 - 2021 Volume 2 Issue 1",
        url: "https://mits.ac.in/public/uploads/departments/d4eb8c36251abd8e436282c7eff6956e.pdf"
      },
      {
        title: "ECHO 2019 - 2020 Volume 1 Issue 1",
        url: "https://mits.ac.in/public/uploads/departments/2786b6bbb13352f1e6b271e4d345eee5.pdf"
      }
    ]
  }
];

export const mcaTopTabs: DepartmentTopTab[] = [
  {
    id: "department",
    label: "Department"
  },
  {
    id: "bos",
    label: "BoS",
    title: "Board Of Studies",
    documents: [
      { title: "BoS 2026-27", url: "https://mits.ac.in/public/uploads/departments/f0bdd3ad8c7b674151453ab6ceefcc32.pdf" },
      { title: "BoS 2025-26", url: "https://mits.ac.in/public/uploads/departments/f2e7acf38e23f4b6708601542f820d48.pdf" },
      { title: "BoS 2024-25", url: "https://mits.ac.in/public/uploads/departments/3ce2d90ae1fbe764f9eefdf900e2a803.pdf" },
      { title: "BoS 2023-24", url: "https://mits.ac.in/public/uploads/departments/40e13e2e004ed338002c36fc28347f68.pdf" },
      { title: "BoS 2022-23", url: "https://mits.ac.in/public/uploads/departments/87e28388d59a97a56f59b5a9c09fd8da.pdf" },
      { title: "BoS 2021-22", url: "https://mits.ac.in/public/uploads/departments/f3d5fefe7a78f186bb704db07978bd45.pdf" },
      { title: "BoS 2020-21", url: "https://mits.ac.in/public/uploads/departments/8347d6e0d93e005887b214e5c9db9932.pdf" },
      { title: "BoS 2019-20", url: "https://mits.ac.in/public/uploads/departments/4e55da3011e61a8cb27bc6151a756e8b.pdf" },
      { title: "BoS 2018-19", url: "https://mits.ac.in/public/uploads/departments/caf48f7b3f121c84b8b9b89bcac9192a.pdf" },
      { title: "BoS 2017-18", url: "https://mits.ac.in/public/uploads/departments/de01117b2abb030d91bba8f3afbe9f2d.pdf" },
      { title: "BoS 2016-17", url: "https://mits.ac.in/public/uploads/departments/b975e1c83fa17fefcfc80da327cd1d38.pdf" }
    ]
  },
  {
    id: "iaab",
    label: "IAAB",
    title: "Industry Alumni Advisory Board",
    documents: [
      { title: "IAAB 2026-27", url: "https://mits.ac.in/public/uploads/departments/a47658b320fadafccbfaa214db0781a4.pdf" },
      { title: "IAAB 2024-25", url: "https://mits.ac.in/public/uploads/departments/a81dde5b99179d390058f64e20235c06.pdf" },
      { title: "IAAB 2023-24", url: "https://mits.ac.in/public/uploads/departments/5add1cae928258f5fe7f0c97efe0fd58.pdf" },
      { title: "IAAB 2022-23", url: "https://mits.ac.in/public/uploads/departments/d810b5ae6efc5b435c99159efbb8b8d7.pdf" },
      { title: "IAAB 2021-22", url: "https://mits.ac.in/public/uploads/departments/1adb72b79d02f0f8ceb670b1a246074c.pdf" },
      { title: "IAAB 2020-21", url: "https://mits.ac.in/public/uploads/departments/a64546be60280521829c51eb10bc92f0.pdf" },
      { title: "IAAB 2019-20", url: "https://mits.ac.in/public/uploads/departments/890cf318b641d57d2b6e5fd184df4926.pdf" },
      { title: "IAAB 2018-19", url: "https://mits.ac.in/public/uploads/departments/3f4f45079cb332afc510bf578cc33365.pdf" },
      { title: "IAAB 2017-18", url: "https://mits.ac.in/public/uploads/departments/d7e628d73bc6caf7a29b5cb06b7559f1.pdf" }
    ]
  },
  {
    id: "dab",
    label: "DAB",
    title: "Departmental Advisory Board",
    documents: [
      { title: "DAB 2024-25", url: "https://mits.ac.in/public/uploads/departments/75426e824534d69586732df50570199a.pdf" },
      { title: "DAB 2023-24", url: "https://mits.ac.in/public/uploads/departments/244177523444a15d0c3a53d2eeccd95f.pdf" },
      { title: "DAB 2022-23", url: "https://mits.ac.in/public/uploads/departments/873ddba6d42ad393aaf3086eee07579c.pdf" },
      { title: "DAB 2021-22", url: "https://mits.ac.in/public/uploads/departments/b1464d502949fced793558d5805752c8.pdf" },
      { title: "DAB 2020-21", url: "https://mits.ac.in/public/uploads/departments/ea134d8905a78d3ff89454967366c330.pdf" },
      { title: "DAB 2019-20", url: "https://mits.ac.in/public/uploads/departments/2f62eb8f00624d0162ef3123b58add7d.pdf" },
      { title: "DAB 2018-19", url: "https://mits.ac.in/public/uploads/departments/7429424126f2b338ec554d8c6a98432d.pdf" },
      { title: "DAB 2017-18", url: "https://mits.ac.in/public/uploads/departments/0aa639bb2b33a8dffd9fc6fc1e268262.pdf" },
      { title: "DAB 2016-17", url: "https://mits.ac.in/public/uploads/departments/013d223645fb5afecfb08b40459ffa15.pdf" }
    ]
  },
  {
    id: "pac",
    label: "PAC",
    title: "Program Assessment Committee",
    documents: [
      { title: "PAC 2023-24", url: "https://mits.ac.in/public/uploads/departments/ce5e93a50b0c64fbb2608ffabf6ee5cd.pdf" },
      { title: "PAC 2022-23", url: "https://mits.ac.in/public/uploads/departments/193b35b72009a939bc4e0a6cc2a6ad99.pdf" },
      { title: "PAC 2021-22", url: "https://mits.ac.in/public/uploads/departments/03ddf39d0eee4282c652115f581997b7.pdf" },
      { title: "PAC 2020-21", url: "https://mits.ac.in/public/uploads/departments/635469918df9c445703c117d9e19676d.pdf" },
      { title: "PAC 2019-20", url: "https://mits.ac.in/public/uploads/departments/a414d964a7f682280db2c1871ea6facb.pdf" },
      { title: "PAC 2018-19", url: "https://mits.ac.in/public/uploads/departments/4947a1d640c4959e236994f8ec90726d.pdf" },
      { title: "PAC 2017-18", url: "https://mits.ac.in/public/uploads/departments/92f9fb51652022855c4214a5f1ccd441.pdf" },
      { title: "PAC 2016-17", url: "https://mits.ac.in/public/uploads/departments/7010f4e0b5c74f1a19ca0ac295fc3484.pdf" }
    ]
  },
  {
    id: "faculty-list",
    label: "Faculty List",
    title: "Faculty List",
    documents: [
      { title: "Faculty List for the Academic Year 2024-25", url: "https://mits.ac.in/assets/pdf/ca/MCA-Faculty%20list%20for%20AY%202024-2025.pdf" },
      { title: "Faculty List for the Academic Year 2023-24", url: "https://mits.ac.in/assets/pdf/ca/MCA-Faculty%20list%20for%20AY%202023-2024.pdf" },
      { title: "Faculty List for the Academic Year 2022-23", url: "https://mits.ac.in/assets/pdf/ca/Faculty%20information%20wesite%20copy%20AY%202022-23.pdf" }
    ]
  },
  {
    id: "placement-statistics",
    label: "Placement Statistics",
    title: "Placement Statistics",
    documents: [
      { title: "Placement Statistics Batch 2022-2024", url: "https://mits.ac.in/assets/pdf/ca/Placement%20Statistics-2022-24.pdf" },
      { title: "Placement Statistics Batch 2021-2023", url: "https://mits.ac.in/assets/pdf/ca/Placement%20Statistics-2021-23.pdf" },
      { title: "Placement Statistics Batch 2020-2022", url: "https://mits.ac.in/assets/pdf/ca/Placement%20Statistics-2020-22.pdf" }
    ]
  },
  {
    id: "magazines",
    label: "Magazines",
    title: "Magazines",
    documents: [
      { title: "Magazine 2025-26", url: "https://mits.ac.in/assets/pdf/ca/Magazine%202025-26.pdf" },
      { title: "Magazine 2024-25", url: "https://mits.ac.in/assets/pdf/ca/Magazine%202024-25.pdf" },
      { title: "Magazine 2023-24", url: "https://mits.ac.in/assets/pdf/ca/Magazine-2023-24.pdf" },
      { title: "Magazine 2022-23", url: "https://mits.ac.in/assets/pdf/ca/Magazine-2022-23.pdf" },
      { title: "Magazine 2021-22", url: "https://mits.ac.in/assets/pdf/ca/Magazine-2021-22.pdf" },
      { title: "Magazine 2020-21", url: "https://mits.ac.in/assets/pdf/ca/MCA%20Magazine%202020-2021.pdf" }
    ]
  }
];

export const eceTopTabs: DepartmentTopTab[] = [
  {
    id: "department",
    label: "Department"
  },
  {
    id: "faculty-list",
    label: "Faculty List",
    title: "Faculty List",
    documents: [
      { title: "Faculty List for the Academic Year 2024-25", url: "https://mits.ac.in/assets/pdf/ece/2024-25%20ECE.pdf" },
      { title: "Faculty List for the Academic Year 2023-24", url: "https://mits.ac.in/assets/pdf/ece/2023-24%20ECE.pdf" },
      { title: "Faculty List for the Academic Year 2022-23", url: "https://mits.ac.in/assets/pdf/ece/2022-23%20ECE.pdf" }
    ]
  },
  {
    id: "placement-details",
    label: "Placement Details",
    title: "Placement Details",
    documents: [
      { title: "Placement Details 2023-24", url: "https://mits.ac.in/assets/pdf/ece/ECE%20Placements%202023-24.pdf" },
      { title: "Placement Details 2022-23", url: "https://mits.ac.in/assets/pdf/ece/ECE%20Placements%202022-23.pdf" },
      { title: "Placement Details 2021-22", url: "https://mits.ac.in/assets/pdf/ece/ECE%20Placements%202021-22.pdf" }
    ]
  },
  {
    id: "bos",
    label: "BoS",
    title: "Board of Studies (BoS)",
    documents: [
      { title: "BOS 2022-23", url: "https://mits.ac.in/public/uploads/departments/016da0715e97c1d3d0a16083565a153f.pdf" },
      { title: "BOS 2021-22", url: "https://mits.ac.in/public/uploads/departments/7af6d7984f445b07f1d5868977680e08.pdf" },
      { title: "BOS 2020-21", url: "https://mits.ac.in/public/uploads/departments/2aa457941c4fe9f5a7be1a8b4dfbe6ec.pdf" },
      { title: "BOS 2019-20", url: "https://mits.ac.in/public/uploads/departments/0a031ccf98b2c282b88f6cb92a15d579.pdf" },
      { title: "BOS 2018-19", url: "https://mits.ac.in/public/uploads/departments/78b91747c588db25787a3f56bf5d3218.pdf" },
      { title: "BOS 2017-18", url: "https://mits.ac.in/public/uploads/departments/2795bee7e8b8440c9df33a01307a6b86.pdf" },
      { title: "BOS 2016-17", url: "https://mits.ac.in/public/uploads/departments/c746295a1245c510e6c374f2c1ab40c0.pdf" },
      { title: "BOS 2015-16", url: "https://mits.ac.in/public/uploads/departments/efcf5bbe6fd0a4698a1e030a913744c0.pdf" },
      { title: "BOS 2014-15", url: "https://mits.ac.in/public/uploads/departments/668c7684ba77fea21cdf93f00b06802c.pdf" }
    ]
  },
  {
    id: "iaab",
    label: "IAAB",
    title: "Industry Alumni Advisory Board (IAAB)",
    documents: [
      { title: "IAAB 2023-24", url: "https://mits.ac.in/public/uploads/departments/0cb69816b5667fe09b0e368687a8dbed.pdf" },
      { title: "IAAB 2022-23", url: "https://mits.ac.in/public/uploads/departments/c98eeda2229bd3122ad035e9b46ce56a.pdf" },
      { title: "IAAB 2021-22", url: "https://mits.ac.in/public/uploads/departments/a29dd83b700bf62904b70b2b533bae79.pdf" },
      { title: "IAAB 2020-21", url: "https://mits.ac.in/public/uploads/departments/de7580614f7b84008a90465c910a6af3.pdf" },
      { title: "IAAB 2019-20", url: "https://mits.ac.in/public/uploads/departments/10aab453d279e50d124ec53fabe21945.pdf" },
      { title: "IAAB 2018-19", url: "https://mits.ac.in/public/uploads/departments/5d8ab3098e7823516ecedadb865272b1.pdf" },
      { title: "IAAB 2017-18", url: "https://mits.ac.in/public/uploads/departments/e621de16f441e4303e96c6be5d031a04.pdf" },
      { title: "IAAB 2016-17", url: "https://mits.ac.in/public/uploads/departments/3bea21e09aaf7b4fb787c3207b271b25.pdf" },
      { title: "IAAB 2015-16", url: "https://mits.ac.in/public/uploads/departments/42ad366e0de05782643087f2cb07e8fd.pdf" },
      { title: "IAAB 2014-15", url: "https://mits.ac.in/public/uploads/departments/178642668ce810dcf96b8db83abec4ff.pdf" }
    ]
  },
  {
    id: "dab",
    label: "DAB",
    title: "Departmental Advisory Board (DAB)",
    documents: [
      { title: "DAB 2023-24", url: "https://mits.ac.in/public/uploads/departments/dd0125dc5a4891344fe2d280c4de28ea.pdf" },
      { title: "DAB 2023-24", url: "https://mits.ac.in/public/uploads/departments/e5c213879f849b4982c997f42022a619.pdf" },
      { title: "DAB 2022-23", url: "https://mits.ac.in/public/uploads/departments/ba076498d18cef452d7a581c222a6430.pdf" },
      { title: "DAB 2021-22", url: "https://mits.ac.in/public/uploads/departments/988a8a20df9c52b3661db40eece9c455.pdf" },
      { title: "DAB 2020-21", url: "https://mits.ac.in/public/uploads/departments/dc32bdc48c2580833d0829583cef0995.pdf" },
      { title: "DAB 2019-20", url: "https://mits.ac.in/public/uploads/departments/114b1893f0ba05f5307451e71c84c8b9.pdf" },
      { title: "DAB 2018-19", url: "https://mits.ac.in/public/uploads/departments/e7a09d7697b1085476d5ffabf2f76531.pdf" },
      { title: "DAB 2017-18", url: "https://mits.ac.in/public/uploads/departments/ff95b792dd5769ce3f558eaf89b34d9c.pdf" },
      { title: "DAB 2016-17", url: "https://mits.ac.in/public/uploads/departments/8fb707d01664a99855a380b5e91d28b5.pdf" }
    ]
  },
  {
    id: "pac",
    label: "PAC",
    title: "Program Assessment Committee (PAC)",
    documents: [
      { title: "PAC 2023-24", url: "https://mits.ac.in/public/uploads/departments/639ffe43261ebfd8355cb837e46313e1.pdf" },
      { title: "PAC 2022-23", url: "https://mits.ac.in/public/uploads/departments/2ff47d4f33569277f69355113bc1a577.pdf" },
      { title: "PAC 2021-22", url: "https://mits.ac.in/public/uploads/departments/8a5852f2eb4d798fae767168ac28d802.pdf" },
      { title: "PAC 2020-21", url: "https://mits.ac.in/public/uploads/departments/931276292f2a98191d780a66ffcf84a5.pdf" },
      { title: "PAC 2019-20", url: "https://mits.ac.in/public/uploads/departments/bddad031c5af2788f5d61efe838f5a83.pdf" },
      { title: "PAC 2018-19", url: "https://mits.ac.in/public/uploads/departments/90e820ae78488fe024749839965fbda0.pdf" },
      { title: "PAC 2016-17", url: "https://mits.ac.in/public/uploads/departments/eb793480f13e878cc4b444892142710a.pdf" },
      { title: "PAC 2015-16", url: "https://mits.ac.in/public/uploads/departments/aa0c266f6b68b2a13e435e94e1c6dda0.pdf" },
      { title: "PAC 2014-15", url: "https://mits.ac.in/public/uploads/departments/6d6347f35655d43724683741ae57336c.pdf" }
    ]
  },
  {
    id: "ccc",
    label: "CCC",
    title: "Course Coordinator Committee",
    documents: [
      { title: "B. Tech II Year 2025-26 II Semester course coordinator committee", url: "https://mits.ac.in/assets/pdf/ece/B.%20Tech%20II%20Year%202025-26%20II%20Semester%20course%20coordinator%20committee.pdf" },
      { title: "B. Tech II Year 2025-26 I Semester course coordinator committee", url: "https://mits.ac.in/assets/pdf/ece/B.Tech%20II%20Year%202025-26%20I%20Semester%20course%20coordinator%20committee.pdf" },
      { title: "B. Tech IV Year 2025-26 I Semester course coordinator committee", url: "https://mits.ac.in/assets/pdf/ece/B.%20Tech%20IV%20Year%202025-26%20I%20Semester%20course%20coordinator%20committee.pdf" },
      { title: "B.Tech II Year 2024-25 II Semester Course Coordinator Committee", url: "https://mits.ac.in/assets/pdf/ece/CCC_II%20Year_II%20SEM%202024-25.pdf" },
      { title: "B.Tech III Year 2024-25 II Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/4de0360bf667b8fead93c9b1ccea3db4.pdf" },
      { title: "B.Tech II Year 2024-25 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/8e53032d58087705b578932a46cc4abb.pdf" },
      { title: "B.Tech IV Year 2024-25 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/a53e42882baa7391df1cf8bdd87e08d2.pdf" },
      { title: "B.Tech III Year 2024-25 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/ef94331ed70958cdd5e84d42c5af5cb9.pdf" },
      { title: "B.Tech III Year 2023-24 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/b2134febbcc6f3ffb5e4f1232ef3f5ea.pdf" },
      { title: "B.Tech III Year 2023-24 II Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/21a35a151e2045c07cbbf8489dc1b39a.pdf" },
      { title: "B.Tech III Year 2023-24 II Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/e08cbb54aea62f0d7449e4ee45cef652.pdf" },
      { title: "B.Tech II Year 2023-24 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/1d259bc0831191f5db1d0a1b261a2577.pdf" },
      { title: "B.Tech II Year 2023-24 II Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/a9056394a7889f6db562795728a46e85.pdf" },
      { title: "B.Tech IV Year 2023-24 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/e023f30f34aa22d3a34074bbbd7a1fad.pdf" },
      { title: "B.Tech IV Year 2022-23 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/91edef9afc548f538554af308c0928a4.pdf" },
      { title: "B.Tech IV Year 2022-23 II Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/1002ea3cc88c12fa22c5af65d9511209.pdf" },
      { title: "B.Tech III Year 2022-23 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/82e1e41e7692100fff2123ee753fe34d.pdf" },
      { title: "B.Tech III Year 2022-23 II Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/e1680ab9e527638704b20a14b910de71.pdf" },
      { title: "B.Tech II Year 2022-23 II Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/a16975ed9422f24c031644abd3da7064.pdf" },
      { title: "B.Tech II Year 2022-23 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/b445f0e321921f5409d17febc23342b3.pdf" },
      { title: "B.Tech IV Year 2021-22 II Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/e07b0986e3a623c070b40e9b5eb2bd0d.pdf" },
      { title: "B.Tech II Year 2021-22 II Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/9a6d292bed20261259369e7e5a9351e5.pdf" },
      { title: "B.Tech III Year 2021-22 II Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/44891a0eb66be466d36066f797a6fbbc.pdf" },
      { title: "B.Tech II Year 2021-22 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/9c0ce4010d1e75f698fb4fde529672d7.pdf" },
      { title: "B.Tech IV Year 2021-22 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/fa103e2f39766c93eb261312d6072213.pdf" },
      { title: "B.Tech III Year 2020-21 II Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/044f27a55b0af9e18ff7e08d38724871.pdf" },
      { title: "B.Tech III Year 2021-22 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/519532bfae61a77ffc750ac6f6dc6437.pdf" },
      { title: "B.Tech IV Year 2020-21 II Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/95861662b1d499303f3c2be8cd792ec2.pdf" },
      { title: "B.Tech IV Year 2020-21 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/835810b06aad88bda217e8aad42a1f16.pdf" },
      { title: "B.Tech III Year 2020-21 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/9b00f489e3b8e2713a63639dd8310fb7.pdf" },
      { title: "B.Tech II Year 2020-21 II Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/9b2c24914421712365ad2af8e24101bf.pdf" },
      { title: "B.Tech II Year 2020-21 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/b11a9897363e8c46cd37209a2bd2b0e1.pdf" },
      { title: "B.Tech II Year 2019-20 II Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/8a4537bcb864bc1140ac508d8e1068e0.pdf" },
      { title: "B.Tech II Year 2019-20 I Semester Course Coordinator Committee", url: "https://mits.ac.in/public/uploads/departments/199a2c8abecf204c4436d68fd412369d.pdf" }
    ]
  },
  {
    id: "dugc",
    label: "DUGC",
    title: "Departmental Under Graduate Committee (DUGC)",
    documents: [
      { title: "DUGC 2023-24", url: "https://mits.ac.in/public/uploads/departments/4970ecf6082bd71f2279be60b6b82098.pdf" },
      { title: "DUGC 2022-23", url: "https://mits.ac.in/public/uploads/departments/8222f92f447a1d7a92fb2cf3d7e20b8f.pdf" },
      { title: "DUGC 2021-22", url: "https://mits.ac.in/public/uploads/departments/1c0596da8cd45b0578d77eef83d6e62e.pdf" },
      { title: "DUGC 2020-21", url: "https://mits.ac.in/public/uploads/departments/f411d641ee1f7a866c554b188ae9ad65.pdf" }
    ]
  }
];

export const mbaTopTabs: DepartmentTopTab[] = [
  {
    id: "department",
    label: "Department"
  },
  {
    id: "bos",
    label: "BoS",
    title: "Board of Studies (BoS)",
    documents: [
      { title: "BoS 2026-27", url: "https://mits.ac.in/public/uploads/departments/04145840a3c2d210cb57567d3d277e9e.pdf" },
      { title: "BoS 2025-26", url: "https://mits.ac.in/public/uploads/departments/d89e5782130f5ef8a89a3e161ef70733.pdf" },
      { title: "BoS 2024-25", url: "https://mits.ac.in/public/uploads/departments/9b48d30c4372e6d4448b7e1343864fb3.pdf" },
      { title: "BoS 2023-24", url: "https://mits.ac.in/public/uploads/departments/e193394b7e0a762cb7996b1170e4ecb3.pdf" },
      { title: "BoS 2022-23", url: "https://mits.ac.in/public/uploads/departments/aba3797698f40117a75b732b9fc8c478.pdf" },
      { title: "BoS 2021-22", url: "https://mits.ac.in/public/uploads/departments/19833131c5e79441550f57f969a14c9e.pdf" },
      { title: "BoS 2020-21", url: "https://mits.ac.in/public/uploads/departments/5a58c017309faae038d12ea2eb704142.pdf" },
      { title: "BoS 2019-20", url: "https://mits.ac.in/public/uploads/departments/cb57a026ffff03094f4dc204c5b80276.pdf" },
      { title: "BoS 2018-19", url: "https://mits.ac.in/public/uploads/departments/5ab25f1061df36b8aa832a931841b7ed.pdf" }
    ]
  },
  {
    id: "iaab",
    label: "IAAB",
    title: "Industry Alumni Advisory Board (IAAB)",
    documents: [
      { title: "IAAB 2026-27", url: "https://mits.ac.in/public/uploads/departments/a0a0822c4e9252b9bff820b9b57ad870.pdf" },
      { title: "IAAB 2025-26", url: "https://mits.ac.in/public/uploads/departments/390937111079f8b6634f9f22628bcc0b.pdf" },
      { title: "IAAB 2024-25", url: "https://mits.ac.in/public/uploads/departments/1d8fb739bdb0a8a2ff230e7ca05b7ff5.pdf" },
      { title: "IAAB 2023-24", url: "https://mits.ac.in/public/uploads/departments/14135c7332b5d21bf8ddddf247699d94.pdf" },
      { title: "IAAB 2022-23", url: "https://mits.ac.in/public/uploads/departments/f28455e5597af18ef9ef42805b1bd890.pdf" },
      { title: "IAAB 2021-22", url: "https://mits.ac.in/public/uploads/departments/9a1bb46c355218bc0b4a42a74c66e4b5.pdf" },
      { title: "IAAB 2020-21", url: "https://mits.ac.in/public/uploads/departments/3e5e1ef86b125d6773b89e2153637bb4.pdf" },
      { title: "IAAB 2019-20", url: "https://mits.ac.in/public/uploads/departments/66b3127cc20998583b2a13e96e40c3b9.pdf" },
      { title: "IAAB 2018-19", url: "https://mits.ac.in/public/uploads/departments/7b4c1353e9782786181a10e85ebdf036.pdf" }
    ]
  },
  {
    id: "dab",
    label: "DAB",
    title: "Departmental Advisory Board (DAB)",
    documents: [
      { title: "DAB 2024-25", url: "https://mits.ac.in/public/uploads/departments/c488b4a26a4da652bf7ccc3906c2637c.pdf" },
      { title: "DAB 2023-24", url: "https://mits.ac.in/public/uploads/departments/113686fbaa11661298ab989e422bf3d0.pdf" },
      { title: "DAB 2022-23", url: "https://mits.ac.in/public/uploads/departments/4a2a2a072ab8d5593382460bd1fedd42.pdf" },
      { title: "DAB 2021-22", url: "https://mits.ac.in/public/uploads/departments/09b82297d42316d6c9695eda97ed61c2.pdf" },
      { title: "DAB 2020-21", url: "https://mits.ac.in/public/uploads/departments/98bf4345de92be18f68ba7eb6b7aa999.pdf" },
      { title: "DAB 2019-20", url: "https://mits.ac.in/public/uploads/departments/96689986dd6a75f628ca8ed55ed63d07.pdf" },
      { title: "DAB 2018-19", url: "https://mits.ac.in/public/uploads/departments/8cc6a82aaf2c983e3ef86ae3afcf8ad7.pdf" }
    ]
  },
  {
    id: "pac",
    label: "PAC",
    title: "Program Assessment Committee (PAC)",
    documents: [
      { title: "PAC 2024-25", url: "https://mits.ac.in/public/uploads/departments/0ee9c31743fd8980d2ac8cf8371a8f56.pdf" },
      { title: "PAC 2023-24", url: "https://mits.ac.in/public/uploads/departments/a4c425d1f566eccfe649847d0bd3b309.pdf" },
      { title: "PAC 2022-23", url: "https://mits.ac.in/public/uploads/departments/2f1ea62ee3e82f542d5020f96d6a3747.pdf" },
      { title: "PAC 2021-22", url: "https://mits.ac.in/public/uploads/departments/c6e4805f9898c1f76fe262675aee82a1.pdf" },
      { title: "PAC 2020-21", url: "https://mits.ac.in/public/uploads/departments/5d24062147daedef23d20f32c2b9c094.pdf" },
      { title: "PAC 2019-20", url: "https://mits.ac.in/public/uploads/departments/06958561e08d8aa67426311f45275dbe.pdf" },
      { title: "PAC 2018-19", url: "https://mits.ac.in/public/uploads/departments/af862680ec0220f838fcc4e40141e1b4.pdf" }
    ]
  },
  {
    id: "faculty-list",
    label: "Faculty List",
    title: "Faculty List",
    documents: [
      { title: "Faculty List for the Academic Year 2024-25", url: "https://mits.ac.in/assets/pdf/mba/Information of Faculty 2024-25.pdf" },
      { title: "Faculty List for the Academic Year 2023-24", url: "https://mits.ac.in/assets/pdf/mba/Information of Faculty 2023-24.pdf" },
      { title: "Faculty List for the Academic Year 2022-23", url: "https://mits.ac.in/assets/pdf/mba/Information of Faculty 2022-23.pdf" }
    ]
  },
  {
    id: "placement-statistics",
    label: "Placement Statistics",
    title: "Placement Statistics",
    documents: [
      { title: "Placement Statistics Batch 2022-2024", url: "https://mits.ac.in/assets/pdf/mba/Placement Statistics 2022-24 Batch.pdf" },
      { title: "Placement Statistics Batch 2021-2023", url: "https://mits.ac.in/assets/pdf/mba/Placement Statistics 2021-23 Batch.pdf" },
      { title: "Placement Statistics Batch 2020-2022", url: "https://mits.ac.in/assets/pdf/mba/Placement Statistics 2020-22 Batch.pdf" }
    ]
  }
];

export function getDepartmentTopTabs(deptKey: string): DepartmentTopTab[] | undefined {
  const dept = departmentsData[deptKey];
  if (dept && dept.topTabs && dept.topTabs.length > 0) {
    return dept.topTabs;
  }
  if (deptKey === "mba" || deptKey === "management-studies" || deptKey === "5") {
    return mbaTopTabs;
  }
  if (deptKey === "ece" || deptKey === "electronics-communication-engineering" || deptKey === "electronics-and-communication-engineering" || deptKey === "3") {
    return eceTopTabs;
  }
  if (deptKey === "mca" || deptKey === "computer-applications" || deptKey === "18") {
    return mcaTopTabs;
  }
  if (deptKey === "cst" || deptKey === "computer-science-and-technology" || deptKey === "computer-science-technology" || deptKey === "4") {
    return cstTopTabs;
  }
  if (deptKey === "ce" || deptKey === "civil" || deptKey === "6") {
    return ceTopTabs;
  }
  if (deptKey === "eee" || deptKey === "electrical-electronics-engineering" || deptKey === "electrical-and-electronics-engineering" || deptKey === "ee" || deptKey === "2") {
    return eeeTopTabs;
  }
  if (deptKey === "me" || deptKey === "mech" || deptKey === "mechanical" || deptKey === "mechanical-engineering" || deptKey === "8") {
    return meTopTabs;
  }
  if (deptKey === "cseds" || deptKey === "cse-ds" || deptKey === "csd" || deptKey === "ds") {
    return csedsTopTabs;
  }
  if (deptKey === "csecs" || deptKey === "cse-cs" || deptKey === "csc" || deptKey === "cs" || deptKey === "cyber-security" || deptKey === "csec") {
    return csecsTopTabs;
  }
  if (deptKey === "aiml" || deptKey === "cse-ai-ml") {
    return aimlTopTabs;
  }
  if (deptKey === "ai" || deptKey === "cai") {
    return aiTopTabs;
  }
  if (deptKey === "cse") {
    return cseTopTabs;
  }
  return undefined;
}





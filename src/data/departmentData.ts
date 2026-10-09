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

export interface DepartmentTopTab {
  id: string;
  label: string;
  title?: string;
  description?: string;
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
  dateOfJoining: string;
  researchTitle: string;
}

export interface DoctoralData {
  title: string;
  description: string;
  batchTitle?: string;
  scholars?: DoctoralScholar[];
}

export interface MoreDocumentItem {
  title: string;
  url: string;
}

export interface MoreDocumentGroup {
  groupTitle: string;
  description?: string;
  documents: MoreDocumentItem[];
}

export interface ObeSurveyCategory {
  title: string;
  links: { title: string; url: string }[];
}

export interface ObeData {
  title: string;
  subTabs: { id: string; label: string }[];
  posPsosPeosImage?: string;
  surveys?: ObeSurveyCategory[];
  remedialClasses?: { title: string; url: string }[];
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
  subTabs?: { id: string; label: string }[];
  syllabusTables?: SyllabusTable[];
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

  bioinfo: {
    key: "bioinfo",
    name: "Bioinformatics",
    shortName: "Bioinformatics",
    established: "2010",
    bannerImage: deptImg("bioinformatics"),
    about: "The Bioinformatics program at MITS is an interdisciplinary undergraduate curriculum under the School of Engineering. It integrates biological sciences with computational tools, programming, and data analysis to address complex challenges in genomics, proteomics, systems biology, and computational drug discovery. The program is designed to produce skilled graduates with expertise in both biological data analysis and engineering principles.",
    vision: "To be a center of excellence in interdisciplinary education and research at the intersection of biology and computing, preparing professionals to address global scientific challenges.",
    mission: [
      "To provide high-quality education in computational biology, genomics, and programming.",
      "To encourage interdisciplinary research and collaboration across the School of Engineering and School of Computing.",
      "To prepare students for professional careers in biotech and IT sectors with strong problem-solving capabilities."
    ],
    nbaAccredited: false,
    hod: {
      name: "Dr. Dipankar Roy",
      designation: "Dean, School of Engineering",
      qualification: "Ph.D. (University of Pisa, Italy)",
      image: "https://mits.ac.in/public/uploads/faculty/Deepankar Roy.JPG",
      profileUrl: "https://mits.ac.in/facultyprofile/dean-engineering"
    },
    achievements: {
      consultancyAmount: "N/A",
      researchProjects: "Interdisciplinary",
      patents: "3+",
      publications: "50+"
    },
    teachingApproach: {
      description: "Our teaching methodology focuses on experiential learning, computational laboratory sessions, and project-based assignments.",
      points: [
        "Hands-on database exploration and sequence analysis tools",
        "Outcome-based education framework integrated with MOOC courses",
        "Interdisciplinary projects in genomics and molecular modeling"
      ]
    },
    courses: [
      "Bioinformatics"
    ],
    contactInfo: {
      email: "admissions@mits.ac.in",
      phone: "+91-8571-280255; 280706"
    },
    faculty: [
      /*
{
        name: "Dr. Dipankar Roy",
        designation: "Dean, School of Engineering",
        qualification: "Ph.D. (University of Pisa, Italy)",
        image: "https://mits.ac.in/public/uploads/faculty/Deepankar Roy.JPG",
        profileUrl: "https://mits.ac.in/facultyprofile/dean-engineering"
      }
      */
    ],
    detailedAchievements: [],
    facilities: [
      {
        name: "Bioinformatics Computational Lab",
        description: "Equipped with specialized bioinformatics tools, databases, and molecular modeling software.",
        image: ""
      }
    ],
    patents: [],
    publications: [],
    consultancy: [],
    events: [],
    mous: [],
    placement: {
      /*
percentage: "85%",
      averagePackage: "₹6 LPA",
      highestPackage: "₹10 LPA",
      topRecruiters: ["Cognizant", "TCS", "Accenture", "Wipro"]
      */
      percentage: "N/A", avgPackage: "N/A", highestPackage: "N/A", recruiters: [],
    },
    studentProjects: [],
    subjects: [
      /*
{
        code: "20BI101",
        name: "Introduction to Bioinformatics",
        semester: 3,
        type: "core"
      },
      {
        code: "20BI102",
        name: "Biological Databases & Tools",
        semester: 4,
        type: "core"
      }
      */
    ],
    documents: [
      {
        title: "B.Tech Bioinformatics Academic Calendar 2025-26",
        url: "https://mits.ac.in/public/uploads/ugc/B.Tech%20Bioinformatics%20Academic%20Calendar%202025-26.pdf"
      }
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
    about: "The Department of Electrical & Electronics Engineering was established in 1998 and offers an undergraduate programme in EEE with strong foundations in power systems, control systems, power electronics, digital signal processing, robotics and emerging electrical domains such as renewable power generation, smart grids, and electric/hybrid vehicles. The programme has been continuously accredited and re-accredited by NBA, including Tier-I accreditation cycles. The department regularly conducts seminars, workshops, guest lectures, and technical symposiums, and sustains active research, consultancy, publications, and patents to support industry and societal needs.",
    vision: "To become a department recognized for quality education in Electrical & Electronics Engineering, with research proficiency and ethics, to meet the challenges of society.",
    mission: [
      "To impart quality education and advancements in programme studies to produce engineers with scientific temperament and moral values in EEE.",
      "To create and develop a research culture with deep commitment so industries can adopt research outcomes.",
      "To enhance technical dexterity so graduates can find domain-appropriate solutions for societal welfare."
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
    about: "The Department of Mechanical Engineering was started in 1998 and currently offers a B.Tech programme in Mechanical Engineering. The programme has received continuous NBA accreditation cycles including Tier-I accreditation. The department has strong academic governance through AC and BoS, a thriving R&D ecosystem with funded projects and consultancy, and modern industry-linked laboratories established with core companies such as Siemens and Dassault Systems. The department focuses on employability, innovation, and research-driven learning aligned with present industrial demands.",
    vision: "To be a centre of excellence in Mechanical Engineering that develops quality human resources contributing to technological and socio-economic development.",
    mission: [
      "To provide globally competent mechanical engineers through experienced and committed faculty.",
      "To nurture graduates with scientific temperament, rational thinking, and humanistic approach for career excellence.",
      "To promote excellence in teaching and research through collaborative activities."
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
    about: "The Department of Electronics & Communication Engineering was established in 1998 for B.Tech and currently offers undergraduate and postgraduate programmes. The department emphasizes all-round development of students, faculty, and staff through a strong academic environment, qualified faculty, and research infrastructure. Since autonomous status, the department has continuously evolved curriculum through AC and BoS to make students industry-ready. The programme is NBA accredited under AICTE.",
    vision: "To excel in technical education and research in Electronics and Communication Engineering and produce skilled, trained, and competent individuals to meet present-day societal challenges.",
    mission: [
      "To impart high quality education to enable students to face challenges in ECE.",
      "To provide infrastructure and environment for innovation, creativity, and research among students and faculty.",
      "To inculcate ethical and lifelong learning values to address societal needs."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. S. Rajasekaran", designation: "Professor & Head", qualification: "Ph.D. (Anna University, Chennai)", image: "public/uploads/faculty/f8983b3c4255e5b248d9b51eb8f62e38.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/173" },
    achievements: { consultancyAmount: "₹15+ Lakhs", researchProjects: "12+", patents: "8+", publications: "150+" },
    teachingApproach: { description: "The department integrates simulation-based learning with hands-on hardware projects.", points: ["VLSI design with Cadence tools", "IoT prototyping with Arduino/Raspberry Pi", "PCB design and fabrication", "Communication system simulation", "MATLAB & Simulink projects"] },
    courses: ["Electronics & Communication Engg", "VLSI Design and Embedded Systems"],
    contactInfo: { email: "hod_ece@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      /*
{ name: "Dr. Rama S Komaragiri", designation: "Professor & Dean-Academics", qualification: "Ph.D. (Technical University of Darmstadt, Germany)", image: "public/uploads/faculty/rama.jpg", profileUrl: "https://mits.ac.in/facultyprofile/735" },
      { name: "Dr. P. Ramanathan", designation: "Professor & Principal", qualification: "Ph.D. (PSG College of Technology & Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/a744ebed6a293a48de32e80ba66680c8.JPG", profileUrl: "https://mits.ac.in/facultyprofile/172" },
      { name: "Dr. Sanjay Kumar C. Gowre", designation: "Professor", qualification: "Ph.D. (IIT-Kharagpur)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sanjay Kumar C. Gowre.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1018" },
      { name: "Dr. S. Rajasekaran", designation: "Professor & Head", qualification: "Ph.D. (Coimbatore Institute of Technology, Anna University, Chennai, India.)", image: "public/uploads/faculty/f8983b3c4255e5b248d9b51eb8f62e38.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/173" },
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
    about: "The Department of Computer Applications has grown steadily since 2004 and currently offers a three-year MCA and a two-year MCA (Direct Second Year) programme. The programmes are AICTE governed and aligned to industry needs through contemporary curriculum updates. The department emphasizes value-based education, strong academic outcomes, modern labs, structured academic processes, mentoring, and regular FDPs/workshops. The MCA programme is NBA accredited under AICTE and has consistently strong placement outcomes.",
    vision: "To be the source of producing competent computer application professionals in academic and research activities to serve industry and society.",
    mission: [
      "To empower students with computer application knowledge through state-of-the-art infrastructure and curriculum.",
      "To groom students into competent professionals in emerging technologies through industry-specific programmes.",
      "To inculcate ethical values, leadership, and managerial skills in students."
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
    about: "The Department of Management Studies offers a full-time MBA programme started in 2004, governed by AICTE, with specializations in HR, Marketing, Systems, and Finance. The department operates with strong infrastructure and continuously collaborates with industry and academic institutions. Academic Council and BoS drive curriculum quality to make students industry-ready. The MBA programme under the department is NBA accredited under AICTE.",
    vision: "To become a globally recognized centre of excellence in management by building managerial competencies and preparing visionary global business leaders.",
    mission: ["To empower students to face real-time business situations and foster entrepreneurship.", "To facilitate industry-driven learning among students and faculty.", "To provide a platform for knowledge creation and dissemination through relevant infrastructure.", "To contribute to socio-economic development through excellence in teaching and research."],
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

  cser: {
    key: "cser",
    name: "Computer Science and Engineering with Specialisation in Artificial Intelligence and Robotics",
    shortName: "CSE-AIR",
    established: "2022",
    bannerImage: deptImg("ai"),
    isUnderUpdate: true,
    about: "The Department of Computer Science and Engineering with Specialisation in Artificial Intelligence and Robotics offers undergraduate education focusing on intelligent robotics, machine learning, autonomous systems, and advanced computing paradigms.",
    vision: "To be a center of excellence in Artificial Intelligence and Robotics, producing competent engineers and innovators.",
    mission: [
      "To impart foundational and modern education in artificial intelligence, automation, and intelligent robotics.",
      "To foster practical and research capabilities in intelligent robotic systems and autonomous technologies."
    ],
    nbaAccredited: false,
    hod: {
      name: "Dr. R. Kalpana",
      designation: "Professor & Head",
      qualification: "Ph.D. (Anna University)",
      image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Kalpana.JPG",
      profileUrl: "https://mits.ac.in/facultyprofile/80"
    },
    achievements: {
      consultancyAmount: "N/A",
      researchProjects: "N/A",
      patents: "N/A",
      publications: "N/A"
    },
    teachingApproach: {
      description: "Hands-on robotics laboratory sessions, sensor integration, and machine learning application projects.",
      points: ["Robotics and automation lab", "AI and machine learning applications", "Autonomous system design"]
    },
    courses: ["Computer Science and Engineering with Specialisation in Artificial Intelligence and Robotics"],
    contactInfo: {
      email: "aihod@mits.ac.in",
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

/**
 * Returns postgraduate program and syllabus data for any department.
 */
export function getDepartmentPostGraduate(deptKey: string): PostGraduateData | undefined {
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

export function getDepartmentUnderGraduate(deptKey: string, deptSubjects: Subject[] = []): UnderGraduateData {
  const dept = departmentsData[deptKey];
  if (dept && dept.underGraduate) {
    return dept.underGraduate;
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

/**
 * Returns customized "More" section data (Mentor & Mentee, Minor, etc.) for any department.
 */
export function getDepartmentMore(deptKey: string): DepartmentMoreData {
  const dept = departmentsData[deptKey];
  if (dept && dept.more) {
    return dept.more;
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

/**
 * Returns top tabs data (Department, BoS, IAAB, Magazine, etc.) for any department.
 */
export function getDepartmentTopTabs(deptKey: string): DepartmentTopTab[] | undefined {
  const dept = departmentsData[deptKey];
  if (dept && dept.topTabs && dept.topTabs.length > 0) {
    return dept.topTabs;
  }
  if (deptKey === "ce" || deptKey === "civil" || deptKey === "6") {
    return ceTopTabs;
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





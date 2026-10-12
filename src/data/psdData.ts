export type PsdRowAction = { label: string; href: string; internal?: boolean };
export type PsdRow = {
  subject: string;
  details?: string;
  actions: PsdRowAction[];
  category: string;
};

const ext = (href: string): PsdRowAction => ({ label: "View", href });
const int = (href: string): PsdRowAction => ({ label: "Open", href, internal: true });

export type PsdSection = {
  id: string;
  number: number;
  title: string;
  category: string;
  rows: PsdRow[];
};

export const psdOverviewPdf =
  "https://mits.ac.in/assets/pdf/admin/psd.pdf";

export const psdSections: PsdSection[] = [
  {
    id: "about-hei",
    number: 1,
    title: "About HEI",
    category: "Governance",
    rows: [
      { subject: "About Us – Overview", category: "Governance", actions: [int("/about")] },
      { subject: "Act and Statutes or MoA", category: "Governance", actions: [ext("https://mits.ac.in/assets/pdf/admin/MITS-MOA%20signed%2028.07.2025.pdf")] },
      { subject: "Institutional Development Plan", category: "Governance", actions: [ext("https://mits.ac.in/assets/pdf/admin/MITS%20DTBU%20IDP%202025-35.pdf")] },
      { subject: "Constituent Units / Affiliated Colleges", details: "NA", category: "Governance", actions: [] },
      { subject: "NAAC Accreditation", category: "Accreditation", actions: [int("/naac"), ext("https://mits.ac.in/public/uploads/naac/9b55cb6cdd40bf4ca955cdd3a5383031.pdf")] },
      { subject: "NBA Accreditation", category: "Accreditation", actions: [int("/affiliations-accreditations"), ext("https://mits.ac.in/public/uploads/NBA.pdf")] },
      { subject: "NIRF Ranking", category: "Accreditation", actions: [int("/nirf")] },
      { subject: "Deemed to be University – Gazette Notification", category: "Statutory", actions: [ext("https://mits.ac.in/assets/pdf/admin/Gazette%20Notification%20No.%209-1-2025-U.3A%20dated%2015.07.2025-1.pdf")] },
      { subject: "Deemed to be University – UGC Notification", category: "Statutory", actions: [ext("https://mits.ac.in/assets/pdf/admin/MITS-%20DTBU%20Orders%20from%20UGC-%20U.3A-150725.pdf")] },
      { subject: "UGC Recognition under Sections 2(f) & 12(B)", category: "Statutory", actions: [ext("https://mits.ac.in/assets/pdf/admin/2f%20&%2012B.pdf")] },
      { subject: "Annual Reports", category: "Reports", actions: [int("/about/mandatory-disclosures")] },
      { subject: "Annual Accounts, Balance Sheet & Audit Report", category: "Financial", actions: [int("/about/mandatory-disclosures")] },
      { subject: "Sponsoring Body", details: "Ratakonda Ranga Reddy Educational Academy", category: "Governance", actions: [] },
    ],
  },
  {
    id: "administration",
    number: 2,
    title: "Administration",
    category: "Governance",
    rows: [
      { subject: "Chancellor", details: "Dr. N. Vijaya Bhaskar Choudary", category: "Leadership", actions: [{ label: "View Profile", href: "/about/leadership/chancellor", internal: true }] },
      { subject: "Pro Chancellor", details: "Sri. N. Dwarakanath Naidu", category: "Leadership", actions: [{ label: "View Profile", href: "/about/leadership/pro-chancellor", internal: true }] },
      { subject: "Vice-Chancellor", details: "Dr. C. Yuvaraj", category: "Leadership", actions: [{ label: "View Profile", href: "/about/leadership/vice-chancellor", internal: true }] },
      { subject: "Registrar", details: "Dr. D. Pradeep Kumar", category: "Leadership", actions: [{ label: "View Profile", href: "/about/leadership/registrar", internal: true }] },
      { subject: "Principal (MITS Autonomous)", details: "Dr. P. Ramanathan", category: "Leadership", actions: [{ label: "View Profile", href: "/about/leadership/principal", internal: true }] },
      { subject: "Finance Officer", details: "Mr. Anil Kumar P", category: "Leadership", actions: [int("/about/leadership")] },
      { subject: "Controller of Examination", details: "Dr. V. Sai Kumar", category: "Leadership", actions: [{ label: "View Profile", href: "/about/leadership/controller-of-examinations", internal: true }] },
      { subject: "Ombudsperson", details: "Prof. K. Dasaratha Ramaiah", category: "Leadership", actions: [{ label: "View Profile", href: "/about/leadership/ombudsperson", internal: true }] },
      { subject: "Executive Council / Board of Governors", category: "Committees", actions: [int("/about/executive-council"), ext("https://mits.ac.in/assets/pdf/admin/Executive%20Council-Constitution-DTBU-2025.pdf"), ext("https://mits.ac.in/bog")] },
      { subject: "Board of Management", details: "Ratakonda Ranga Reddy Educational Academy", category: "Committees", actions: [] },
      { subject: "Academic Council", category: "Committees", actions: [int("/about/academic-council"), ext("https://mits.ac.in/assets/pdf/admin/Academic%20Council%20Constitution%20DTBU.pdf"), ext("https://mits.ac.in/minutes-ac")] },
      { subject: "Board of Studies (BoS)", category: "Committees", actions: [int("/about/bos"), ext("https://mits.ac.in/assets/pdf/admin/MITS-DTBU-BOS-AY(2025-2026).pdf")] },
      { subject: "Finance Committee – Composition & Members", category: "Committees", actions: [ext("https://mits.ac.in/assets/pdf/admin/Finance%20Committee%20-%20Order-DTBU-2025%20(1).pdf")] },
      { subject: "Internal Complaint Committee", category: "Committees", actions: [int("/cells")] },
      { subject: "Academic Leadership (Deans / HoDs)", category: "Leadership", actions: [int("/about/deans"), int("/about/department-heads")] },
    ],
  },
  {
    id: "academics",
    number: 3,
    title: "Academics",
    category: "Academic",
    rows: [
      { subject: "Details of Academic Programs", category: "Academic", actions: [int("/academics")] },
      { subject: "Academic Calendar", category: "Academic", actions: [int("/academic-calendar")] },
      { subject: "Statutes / Ordinances – Academics & Examinations", category: "Academic", actions: [int("/academic-regulations")] },
      { subject: "School of Engineering", category: "Schools", actions: [int("/departments")] },
      { subject: "School of Computing", category: "Schools", actions: [int("/departments")] },
      { subject: "School of Management", category: "Schools", actions: [int("/departments")] },
      { subject: "School of Artificial Intelligence", category: "Schools", actions: [int("/departments")] },
      { subject: "Departments – Faculty & Staff Directory", category: "Faculty", actions: [int("/departments")] },
      { subject: "UGC-Recognized ODL / Online Programs", details: "NA", category: "Academic", actions: [] },
      { subject: "Internal Quality Assurance Cell (IQAC)", category: "Quality", actions: [int("/iqac")] },
      { subject: "Library", category: "Academic", actions: [int("/library")] },
      { subject: "Academic Collaborations", category: "Academic", actions: [int("/international-relations")] },
    ],
  },
  {
    id: "admissions-fee",
    number: 4,
    title: "Admissions & Fee",
    category: "Student",
    rows: [
      { subject: "Prospectus (with fee structure)", category: "Student", actions: [ext("https://mits.ac.in/assets/pdf/admin/Updated%20Prospectus.pdf")] },
      { subject: "Admission Process & Guidelines", category: "Student", actions: [int("/admissions")] },
      { subject: "Fee Refund Policy", category: "Student", actions: [int("/refund-policy")] },
    ],
  },
  {
    id: "research",
    number: 5,
    title: "Research",
    category: "Research",
    rows: [
      { subject: "Research & Development Cell", category: "Research", actions: [int("/research")] },
      { subject: "Incubation Centre", category: "Research", actions: [int("/research")] },
      { subject: "Start-Up Cell (NISP)", category: "Research", actions: [int("/research")] },
      { subject: "Entrepreneurship Development Cell", category: "Research", actions: [int("/research")] },
      { subject: "Central Facilities", category: "Research", actions: [int("/infrastructure")] },
    ],
  },
  {
    id: "student-life",
    number: 6,
    title: "Student Life",
    category: "Student",
    rows: [
      { subject: "Sports", category: "Student", actions: [int("/campus-life")] },
      { subject: "NSS", category: "Student", actions: [int("/campus-life")] },
      { subject: "NCC", category: "Student", actions: [int("/campus-life")] },
      { subject: "Student Clubs & Activities", category: "Student", actions: [int("/campus-life/student-clubs")] },
      { subject: "Placements & Activities", category: "Student", actions: [int("/placements")] },
      { subject: "Student Grievance Redressal Committee (SGRC)", category: "Student", actions: [int("/cells")] },
      { subject: "Health Facilities", category: "Student", actions: [int("/infrastructure")] },
      { subject: "Internal Complaint Committee", category: "Student", actions: [int("/cells")] },
      { subject: "Anti-Ragging Cell", category: "Student", actions: [int("/cells")] },
      { subject: "Equal Opportunity Cell", category: "Student", actions: [int("/cells")] },
      { subject: "Socio-Economically Disadvantaged Groups Cell (SEDG)", category: "Student", actions: [int("/cells")] },
      { subject: "Facilities for Differently Abled", category: "Student", actions: [int("/infrastructure")] },
    ],
  },
  {
    id: "alumni",
    number: 7,
    title: "Alumni",
    category: "Alumni",
    rows: [
      { subject: "Alumni Association", category: "Alumni", actions: [ext("https://alumni.mits.ac.in/")] },
    ],
  },
  {
    id: "information-corner",
    number: 8,
    title: "Information Corner",
    category: "Compliance",
    rows: [
      { subject: "RTI – CPIO and Appellate Authority", category: "Compliance", actions: [int("/about/mandatory-disclosures")] },
      { subject: "Circulars and Notices", category: "Compliance", actions: [ext("https://mits.ac.in/assets/pdf/admin/Circulars.pdf")] },
      { subject: "Announcements", category: "Compliance", actions: [int("/news-events")] },
      { subject: "Newsletters", category: "Compliance", actions: [int("/newsletter")] },
      { subject: "News, Events & Achievements", category: "Compliance", actions: [int("/news-events")] },
      { subject: "Job Openings", category: "Compliance", actions: [int("/career")] },
      { subject: "Reservation Roster", category: "Compliance", actions: [int("/about/mandatory-disclosures")] },
      { subject: "Study in India", category: "Compliance", actions: [ext("https://studyinindia.gov.in/")] },
      { subject: "International Students – Admission Procedure", category: "Compliance", actions: [int("/international-admissions-procedure")] },
    ],
  },
  {
    id: "gallery",
    number: 9,
    title: "Picture Gallery",
    category: "Media",
    rows: [
      { subject: "Gallery", category: "Media", actions: [int("/gallery")] },
    ],
  },
  {
    id: "contact",
    number: 10,
    title: "Contact Us",
    category: "Contact",
    rows: [
      { subject: "Address", details: "Madanapalle Institute of Technology & Science, Post Box No: 14, Kadiri Road, Angallu (V), Madanapalle-517325, Annamayya District, Andhra Pradesh, India", category: "Contact", actions: [] },
      { subject: "Phone", details: "+91-8571-280255 ; 280706", category: "Contact", actions: [] },
      { subject: "Email", details: "admissions@mits.ac.in", category: "Contact", actions: [] },
      { subject: "Map", category: "Contact", actions: [ext("https://maps.app.goo.gl/oPC6PUsFf5VY2tbt9")] },
    ],
  },
];

export const psdCategories = [
  "All",
  "Governance",
  "Statutory",
  "Accreditation",
  "Academic",
  "Research",
  "Student",
  "Financial",
  "Compliance",
];

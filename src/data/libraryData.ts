// Central Library — official data (source: Central Library Details doc + mits.ac.in)

export interface LibStat {
  key: string;
  label: string;
  value: number;
  suffix?: string;
  note?: string;
}

export const libraryStats: LibStat[] = [
  { key: "titles", label: "Book Titles", value: 10507, note: "Incl. 597 complimentary & donated" },
  { key: "volumes", label: "Total Volumes", value: 64003 },
  { key: "reference", label: "Reference Books", value: 10507 },
  { key: "ebooks", label: "E-Books", value: 14225, note: "Incl. DELNET, NDL & GDLC" },
  { key: "ejournals", label: "E-Journals", value: 3406, note: "IEEE, Springer, EBSCO" },
  { key: "projectReports", label: "Project Reports", value: 5009 },
  { key: "boundVolumes", label: "Bound Volumes", value: 587 },
  { key: "cdroms", label: "CD-ROM Collection", value: 2002 },
  { key: "digitalSystems", label: "Digital Library Systems", value: 30 },
  { key: "newspapers", label: "Newspapers", value: 12, note: "10 Telugu + 5 English" },
  { key: "periodicals", label: "Intl. & National Journals", value: 136 },
  { key: "magazines", label: "Magazines", value: 14 },
];

export interface DigitalResource {
  name: string;
  count?: string;
  desc: string;
  category: "Journals" | "E-Books" | "Network" | "Platform" | "Software";
  href?: string;
}

export const digitalResources: DigitalResource[] = [
  { name: "IEEE Digital Library", count: "219 journals", desc: "Full-text access to IEEE's premier engineering and technology research journals.", category: "Journals", href: "https://ieeexplore.ieee.org/" },
  { name: "Springer Nature", count: "776 journals", desc: "Peer-reviewed research spanning science, technology and medicine.", category: "Journals", href: "https://link.springer.com/" },
  { name: "EBSCO (Management)", count: "1,510 journals", desc: "Comprehensive management, business and social sciences database.", category: "Journals", href: "https://www.ebsco.com/" },
  { name: "DELNET", count: "1,000+ e-books", desc: "Developing Library Network — resource sharing (Membership ID: IM-9078).", category: "Network", href: "https://delnet.in/" },
  { name: "National Digital Library (NDL)", count: "3,200+ e-books", desc: "Government of India's virtual repository of learning resources.", category: "E-Books", href: "https://ndl.iitkgp.ac.in/" },
  { name: "INFLIBNET SOUL 3.0", desc: "Software for University Libraries — integrated library management system.", category: "Software", href: "https://inflibnet.ac.in/soul/" },
];

export const quickLibraryActions = [
  {
    title: "Plagiarism",
    href: "https://madanpalle.turnitin.com/home/sign-in?redirect_to=https:%2F%2Fmadanpalle.turnitin.com%2F",
    external: true,
    variant: "primary" as const,
  },
  {
    title: "Digital Library",
    href: "http://172.16.0.250/gdlc/",
    external: true,
    variant: "secondary" as const,
  },
  {
    title: "Previous Year's Question Papers",
    href: "/examinations",
    external: false,
    variant: "primary" as const,
  },
  {
    title: "Download Request Letter for Plagiarism Verification Certificate",
    href: "https://mits.ac.in/images/request-letter-for-plagiarism-verification-certificate.pdf",
    external: true,
    variant: "secondary" as const,
  },
];

export const libraryAchievements = [
  "Dr. C. Srinivasa Raju Presented a paper in International conference on Building Sustainable Libraries in Connecting Communities: Librarianship, Technology and Collaboration organized by Central Library, Bharatidasan University at Tiruchirapalli during 7th and 8th February 2025.",
  "Dr. C. Srinivasa Raju, Librarian presented a paper in National conference on Recent Technology Innovation towards Best practices of Libraries in Knowledge Society organized by Central Library, Alagappa University at Karaikudi during 12th and 13th April 2023.",
  "Dr. P. Rama Murthy Librarian I/c & Mr. G. Sudheer Babu attended One Day Workshop on Consortium of Library Resources and DELNET Services organized by Directorate of Faculty Development & IQAC, JNTUA, Ananthapur on 8th May, 2019.",
  "Mr. L. Husman & Mr. J. Bharat Kumar attended One-Day National Workshop on \"DELNET: Resources, Services & Facilities\" organised by JSS Academy of Technical Education, Bangalore on 7th May 2013.",
  "Mr. L. Husman & Mr. J. Bharat Kumar attended Participated in Two Day National Level Workshop on \"Library & Automation\" was organized by Sree Vidyanikethan Engineering College, Sree Sainath Nagar, Tirupathi - 517102, A. P. on 19th - 20th January 2013.",
];

export const libraryEvents = [
  {
    title: "A \"National Librarians Day\" was organized by Central Library of MITS, Deemed to be University on 12th August 2026.",
    date: "12th August 2026",
    reportUrl: "https://mits.ac.in/public/uploads/mandatory/Librarians_Day_Report_2026.pdf",
  },
  {
    title: "A One-Day User Awareness Programme on IEEE and EBSCO, E-Journals Accesses was organised by Department of Library on 8th May 2024.",
    date: "8th May 2024",
    reportUrl: "https://mits.ac.in/public/uploads/mandatory/Library_IEEE_EBSCO_Awareness_2024.pdf",
  },
];

export const libraryContacts = [
  {
    name: "Dr. M. Suresh Babu",
    designation: "Librarian",
    address: "Madanapalle Institute of Technology & Science (Deemed to be University), Madanapalle-Kadiri Road, Kurabalakota Mandal, Madanapalle-517325, Andhra Pradesh, India",
    phone: "+91-8571-280255; 280706",
    email: "librarian@mits.ac.in",
  },
  {
    name: "Dr. C. Srinivasa Raju",
    designation: "Librarian",
    address: "Madanapalle Institute of Technology & Science (Deemed to be University), Madanapalle-Kadiri Road, Kurabalakota Mandal, Madanapalle-517325, Andhra Pradesh, India",
    phone: "+91-8571-280255; 280706",
    email: "drsrinivasarajuc@mits.ac.in",
  },
];

export const memberships = [
  { title: "DELNET", id: "IM-9078", desc: "Developing Library Network membership for national resource sharing." },
  { title: "National Digital Library of India", id: "Institutional Member", desc: "IIT Kharagpur-hosted digital library repository." },
  { title: "NDL Club", id: "INTGNC5MX4PHLSJ", desc: "Officially registered NDL Club with unique institutional ID." },
];

export const facilities = [
  { title: "Digital Library", desc: "30 dedicated systems with high-speed internet access for digital learning and research." },
  { title: "SOUL 3.0", desc: "INFLIBNET software for circulation, cataloguing and OPAC-based discovery." },
  { title: "Photocopying", desc: "In-house photocopy service for approved materials." },
  { title: "Printing", desc: "Print facility for academic and research documents." },
  { title: "Scanning", desc: "Document and page scanning for digital archiving." },
  { title: "Barcoding", desc: "Barcode-enabled circulation and inventory management." },
  { title: "Reading Hall", desc: "Spacious reading spaces for individual and group study." },
  { title: "Reference Section", desc: "Curated reference books, encyclopedias and manuals." },
  { title: "Internet & Wi-Fi", desc: "Campus-wide internet access throughout the library." },
];

export const services = [
  { title: "Book Lending", desc: "Circulation of books to students, faculty and staff." },
  { title: "Reference Services", desc: "Assistance in locating information and research material." },
  { title: "Digital Access", desc: "Access to e-books, e-journals and digital databases." },
  { title: "Journal Access", desc: "Print and online journal subscriptions across disciplines." },
  { title: "Research Support", desc: "Literature search, citation and plagiarism-check guidance." },
  { title: "Library Membership", desc: "Membership issuance for all campus stakeholders." },
  { title: "Document Delivery", desc: "Inter-library document delivery via DELNET." },
  { title: "Online Catalogue (OPAC)", desc: "Web-based catalogue search for the entire collection." },
  { title: "Current Awareness", desc: "Alerts on new arrivals, journals and research updates." },
];

export const collections = [
  { title: "Books", value: "64,003 vols" },
  { title: "Reference Books", value: "10,507" },
  { title: "Journals", value: "136 print + 3406 e-journals" },
  { title: "Magazines", value: "14 titles" },
  { title: "Newspapers", value: "12" },
  { title: "Project Reports", value: "5,009" },
  { title: "CD-ROM Collection", value: "2,002" },
  { title: "Digital Content", value: "4,200+" },
  { title: "Research Resources", value: "IEEE • Springer • EBSCO" },
];

export const quickAccess = [
  { title: "IEEE Xplore", href: "https://ieeexplore.ieee.org/" },
  { title: "Springer Nature", href: "https://link.springer.com/" },
  { title: "EBSCO", href: "https://www.ebsco.com/" },
  { title: "DELNET", href: "https://delnet.in/" },
  { title: "National Digital Library of India", href: "https://ndl.iitkgp.ac.in/" },
];

export const libraryContact = {
  location: "Central Library, MITS Campus, Angallu (V), Madanapalle — 517325, Annamayya Dist., A.P.",
  email: "librarian@mits.ac.in",
  phone: "+91-8571-280255; 280706",
  hours: [
    { day: "Monday — Friday", time: "8:00 AM — 10:00 PM" },
    { day: "Saturday", time: "9:00 AM — 5:00 PM" },
    { day: "Sunday & Holidays", time: "Closed" },
  ],
};

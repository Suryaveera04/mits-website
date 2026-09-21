/**
 * Madanapalle Institute of Technology & Science (MITS) - Administration & HOD Profiles
 * 
 * ============================================================================
 * HOW TO MODIFY HIGHER OFFICIALS & HOD DISPLAY POSITION / DATA
 * ============================================================================
 * 
 * 1. HOW TO CHANGE DISPLAY POSITION (REORDER):
 *    - To change the display order on the website, simply change the order of the
 *      profile objects in the arrays below (e.g. `administrationProfiles` or `hodProfiles`).
 *    - The website renders profiles sequentially in the exact order they are listed.
 * 
 * 2. HOW TO ADD A NEW PROFILE:
 *    - Add a new object to the array with the following fields:
 *      {
 *         name: "Dr. Name",
 *         designation: "Designation",
 *         image: "https://mits.ac.in/public/uploads/faculty/Dr. Name.JPG", // Official image URL
 *         externalProfile: "https://mits.ac.in/facultyprofile/ID",         // Official profile URL
 *         email: "email@mits.ac.in"
 *      }
 * 
 * 3. HOW TO EDIT DETAILS:
 *    - Locate the profile object by the name and modify the fields directly.
 */
// Centralized data for the About / institutional governance hub.
// All content sourced from official mits.ac.in pages.

export interface LeadershipProfile {
  slug: string;
  name: string;
  designation: string;
  qualification?: string;
  image: string;
  tagline?: string;
  message?: string;
  bio: string[];
  highlights?: string[];
  email?: string;
  documentTitle?: string;
  documents?: { label: string; url: string }[];
  sourceUrl: string;
  sections?: {
    title: string;
    content: any;
  }[];
}

export const leadershipProfiles: Record<string, LeadershipProfile> = {
  chancellor: {
    slug: "chancellor",
    name: "Dr. N. Vijaya Bhaskar Choudary",
    designation: "Founder & Chancellor",
    qualification: "M.Com., Ph.D.",
    image: "https://mits.ac.in/images/chancellor1.jpg",
    tagline: "Attracting global talent to local village",
    message:
      "By the grace of God, I have been entrusted with the sacred responsibility to serve as the Chancellor of a Deemed to be University, a divine opportunity to lay the foundation for a vibrant ecosystem of knowledge, innovation and transformation. I wish MITS shall stand as a beacon of learning, nurturing minds and shaping leaders for generations to come, attracting global talent to local village to create pathbreaking disruptive new technologies. To be able to give back to the very soil that shaped me and to serve the community that raised me, is both an honour and a responsibility. I hold with deep reverence. This is not just about education; it is about building a legacy of hope, growth, and transformation for society at large.",
    bio: [
      "Dr. Nadella Vijaya Bhaskar Choudary is a distinguished academician, visionary entrepreneur, and philanthropist deeply committed to the cause of quality education. Hailing from Madanapalle, he has dedicated his life to the advancement of knowledge and upliftment of the society. Guided with a resolute vision, he aspired to establish a globally acclaimed research and academic institution that contributes significantly to the growth of the nation.",
      "He was awarded doctoral degree from Jawaharlal Nehru Technological University, Anantapur for his seminal work on Change Management Practices in the IT Industry. His in-depth analysis of organizational transformation and leadership dynamics played a crucial role in shaping his vision. Dr. Choudary’s mission to enhance the quality of human life through education, innovation, and continuous learning stands as a true reflection of his ideals. This empowers the fraternity of Madanapalle Institute of Technology & Science (MITS) adapt to the rapidly evolving global landscape.",
      "Originating from a modest agricultural family, Dr. Choudary firmly believes that while agriculture is the foundation of human existence, technology plays a crucial role in enhancing its productivity and sustainability. Dr. Choudary’s noble vision to deliver quality technical and management education began with the establishment of MITS in 1998 with an intake of 180 students. In recognition of this perseverance, vision, and dedication to educational excellence the UGC conferred MITS with the prestigious Deemed to be University in 2025. Dr. Choudary has published numerous research papers in various reputed national and international journals and conferences. In pursuit of academic excellence, he has travelled extensively across Asia Europe the USA and Africa gaining invaluable insights into diverse educational systems and emerging global trends.",
      "Dr. Choudary’s international exposure and intellectual curiosity have enriched his understanding of emerging technologies and academic innovation. Thousands of MITS alumni are now excelling in their respective fields worldwide, reflecting the institution’s academic strength and impact. Under his visionary leadership, MITS students successfully completed the University Innovation Fellowship program. Stanford University has recognized MITS as one of the most happening campuses. It stands as a testament to the vibrant culture of innovation and academic excellence that defines MITS.",
      "Beyond his commitment to quality technical education, Dr. Choudary actively engages in a wide range of social initiatives, including free medical camps, community outreach programs, blood donation drives. As a pioneering educational entrepreneur, he has emerged as a true change-maker in the field of technical education, redefining academic standards through innovation, accessibility, and community engagement.",
      "In recognition of his exemplary contributions to education and society, Dr. Choudary was honored with the prestigious Paul Harris Award by Rotary International in 2008. He was also conferred the Excellence in Education Sector Award by Ravindra Bharathi, Hyderabad. His dedication continues to inspire countless students and educators worldwide.",
    ],
    highlights: [
      "Paul Harris Award by Rotary International (2008)",
      "Excellence in Education Sector Award by Ravindra Bharathi, Hyderabad",
      "Founded MITS in 1998; conferred Deemed to be University status in 2025",
      "Stanford University recognized MITS as one of the most happening campuses",
    ],
    sourceUrl: "https://mits.ac.in/chancellor",
  },
  "pro-chancellor": {
    slug: "pro-chancellor",
    name: "Sri. Nadella Dwarakanath",
    designation: "Pro-Chancellor",
    image: "https://mits.ac.in/images/proc.jpg",
    bio: [
      "Sri. Nadella Dwarakanath is widely respected for his dedication to empowering communities through education and with the intention of serving the common good. In recognition of the decades of leadership in education and public service, he was formally appointed as the Pro-Chancellor of MITS Deemed to be University on 26th July 2025. As Pro-Chancellor, now he plays a pivotal role in steering the university's strategic direction in extending his great support to the leadership team.",
      "Sri. Nadella Dwarakanath is a renowned public figure and a leader. With over 25 years of experience across education, he has consistently championed progress through integrity and local empowerment. He began his journey in the service of people as an elected ZPTC Member (Zilla Parishad Territorial Constituency Member) from 1995 to 2000. During this tenure he played a crucial role in rural development initiatives and positively impacted local population.",
      "In 2004, he founded Indian Public School and served as the Founder and Correspondent until 2018. As a firm believer in the transformative power of education, under his dynamic leadership, the school earned a reputation for academic excellence and holistic development, nurturing many young minds.",
      "He assumed educational leadership from 1998 to 2021 and served as President of Ratakonda Ranga Reddy Academy contributing to institutional growth of Madanapalle Institute of technology & Science. Further, he extended his venerable services as an Estate Manager of Beasant Theosophical Collage in Madanapalle from 2017 to 2021.",
      "As Pro-Chancellor, with diverse experience he reflects a deep-rooted dedication to governance and institutional development with a special focus on the community impact.",
    ],
    sourceUrl: "https://mits.ac.in/pro-chancellor",
  },
  "vice-chancellor": {
    slug: "vice-chancellor",
    name: "Dr. C. Yuvaraj",
    designation: "Vice-Chancellor (I/c)",
    qualification: "M.E., Ph.D., MISTE., FIE",
    image: "https://mits.ac.in/images/vc.jpg",
    bio: [
      "Dr. C. Yuvaraj is the Vice Chancellor (I/c) of MITS Deemed to be University. He obtained his B.E from M.S. Ramaiah Institute of Technology, Bangalore, M.E. from University Visveswaraiah College of Engineering, Bangalore, Ph.D from Bangalore University and MBA from S.K. University, Anantapur. With more than 34 years of professional experience, Dr. Yuvaraj has made significant contributions to academia in various capacities. His areas of interest include Composite Materials, Development of new material, Material Characterization, Development of Tubular Electrodes, and Hybrid Metal Matrix Composites. Dr. C. Yuvaraj has to his credit 42 publications in various International Journals and 30 presentations at International Conferences/Seminars (17 National and 13 International). He chaired several Sessions at Conferences, and participated in 58 refresher courses/short-term courses/conferences/ workshops.",
      "He also holds memberships in several professional bodies/societies. Dr. C. Yuvaraj has supervised 7 Ph.D., Scholars. As a Co-Principal Investigator (Co-PI), he has completed two funded research projects worth Rs. 39,12,690/-. He received the ISTE AP Section “Best Engineering College Principal Award-2023”. He was also honoured with the “University Best Principal Awards 2023” by JNT University Anantapur, Ananthapuramu, A.P. In 2011 he received both the “Best Educationist Award” from the International Institute of Education and Management, New Delhi, and the “Rashtriya Vidya Gaurav Gold Medal Award” from the Indian Solidarity Council, New Delhi.",
    ],
    highlights: [
      "ISTE AP Section “Best Engineering College Principal Award-2023”",
      "University Best Principal Award 2023 — JNT University Anantapur",
      "Best Educationist Award — International Institute of Education & Management, New Delhi (2011)",
      "Rashtriya Vidya Gaurav Gold Medal Award — Indian Solidarity Council, New Delhi (2011)",
      "Supervised 7 Ph.D. scholars & completed 2 funded research projects worth Rs. 39.12 Lakhs",
      "Over 34 years of academic experience; 42 international journal publications & 30 conference papers",
    ],
    email: "vicechancellor@mits.ac.in",
    sourceUrl: "https://mits.ac.in/vice-chancellor",
  },
  registrar: {
    slug: "registrar",
    name: "Dr. D. Pradeep Kumar",
    designation: "Registrar (I/c)",
    qualification: "Ph.D.",
    image: "https://mits.ac.in/public/uploads/faculty/Dr.%20D.%20Pradeep.JPG",
    bio: [
      "Dr. D. Pradeep Kumar is a Professor of Management with an MBA (1988) and a Ph.D. in Strategic Marketing (2004) from Sri Krishnadevaraya University, Anantapur. He has over 36 years of experience, including six years in industry and 30 years in academia at institutions such as ISSR Vellore, KSRMCE Kadapa, and MITS. His areas of expertise include Marketing Management, Human Resource Management, Strategy, Business Analytics, and Digital Marketing. He has authored 4 books with leading publishers, published and presented more than 50 papers in reputed journals and conferences, and guided 10 Ph.D. scholars. He has organized AICTE-funded national and international conferences, delivered numerous guest lectures, and chaired technical sessions. He is a Member of the Board of Studies for AITS, Rajampet, SSGS College, Guntakal and JNTUA, Anantapuram.",
    ],
    highlights: [
      "Over 36 years of experience (6 years in industry and 30 years in academia)",
      "Ph.D. in Strategic Marketing (2004) & MBA (1988) from Sri Krishnadevaraya University",
      "Authored 4 books with leading publishers and published/presented 50+ papers in reputed journals & conferences",
      "Guided 10 Ph.D. research scholars in Management & Marketing",
      "Member of the Board of Studies for AITS Rajampet, SSGS College Guntakal, and JNTUA Anantapuram",
    ],
    email: "registrar@mits.ac.in",
    sourceUrl: "https://mits.ac.in/registrar",
  },
  "controller-of-examinations": {
    slug: "controller-of-examinations",
    name: "Dr. Sai Kumar. V",
    designation: "Controller of Examinations (I/c)",
    qualification: "B.E, M.Tech, Ph.D.",
    image: "https://mits.ac.in/public/uploads/faculty/Sai%20Sir.JPG",
    bio: [
      "Dr. Sai Kumar.V is having a professional career with over 18 years of academic and industry experience, of which more than 12 years is in academic administration. He was awarded a Doctor of Philosophy degree from Rayalaseema University, Kurnool, Andhra Pradesh, India. He holds a Master of Technology degree in VLSI Design from Vellore Institute of Technology University, Vellore, Tamil Nadu, and a Bachelor of Engineering degree in Electrical and Electronics Engineering from Periyar University, Salem, Tamil Nadu.",
      "Dr. Sai Kumar’s areas of expertise include VLSI, Micro and Nano Electronics, IC Fabrication, Image Processing, Neural Networks, and Computer Vision Techniques. Throughout his career, he has made significant contributions to research, having published research papers, filed multiple patents, and participated in various faculty development and management enhancement programs. He has also guided numerous undergraduate and postgraduate students, helping them with their project work and supporting them in publishing their research work.",
      "In the academic administration contributions, Dr. Sai Kumar has been actively involved in designing curriculum frameworks for various undergraduate and postgraduate programs. He has played a pivotal role in framing academic policies, rules, and regulations for both undergraduate and postgraduate degree programs. During his tenure at MITS, Madanapalle, he served as Assistant Controller of Examinations and Controller of Examinations (I/c) under Autonomous status. In the capacity of the Controller of Examinations(I/c) for the MITS Deemed to be University, Madanapalle, he was instrumental in developing examination policies, bringing several examination reforms and digitalization of various examination procedures.",
      "He has also been involved in the UGC's initiative for the digitalization of academic credentials, the Academic Bank of Credits (ABC) through the National Academic Depository (NAD) platform. With over 11 years of experience in managing the examination process, he has consistently ensured strict compliance with regulatory guidelines while improving examination procedures and safeguarding the integrity and security of examinations.",
      "He is also the NEP 2020 Cell Coordinator. Through the NEP Cell, various NEP initiatives like multiple entry multiple exit, dual degree programs, Academic Bank of Credits were suggested to be incorporated into the curriculum of various under and post graduate degree programs. Additionally, he is also the NEP SAARTHI (Student Ambassador for Academic Reforms in Transforming Higher Education in India) Coordinator launched by University Grants Commission (UGC) to promote the NEP 2020 initiatives. He has coordinated the UGC nominated NEP SAARTHI’s in successfully implementing the monthly activity calendar to promote NEP 2020 Initiatives in the student and faculty fraternity.",
      "Dr. Sai Kumar is also responsible for providing verification and genuineness services to a variety of stakeholders, including government entities, educational institutions, corporate bodies, and private verification agencies.",
    ],
    highlights: [
      "Over 18 years of academic & industry experience; 12+ years in academic administration",
      "Over 11 years managing institutional examination processes, security, and examination reforms",
      "Instrumental in developing examination policies and complete digitalization of examination procedures",
      "Led university implementation of Academic Bank of Credits (ABC) via UGC National Academic Depository (NAD)",
      "Institutional Coordinator for NEP 2020 Cell and UGC NEP SAARTHI Coordinator",
    ],
    email: "coeu@mits.ac.in",
    sourceUrl: "https://mits.ac.in/controller-of-examinations",
  },
  principal: {
    slug: "principal",
    name: "Dr. P. Ramanathan",
    designation: "Principal",
    qualification: "B.E., M.E., Ph.D.",
    image: "https://mits.ac.in/public/uploads/faculty/a744ebed6a293a48de32e80ba66680c8.JPG",
    bio: [
      "Dr. P. Ramanathan is an eminent academician known for his distinguished record of academic leadership and scholarly excellence. He completed his Ph.D. in Information and Communication Engineering from Anna University in 2010. He completed his M.E. in VLSI Design from PSG College of Technology in 2006 and B.E. in Electronics and Instrumentation Engineering in 1997.",
      "He has distinguished teaching experience of over 25 years with expertise in VLSI Design and Embedded Systems. His profound commitment to excellence in teaching and research is reflected in 27 research articles published in reputed National / International Journals and research papers presented in various National and International Conferences. He has acted as Joint Supervisor for research scholars.",
      "He has completed nearly 20 Swayam NPTEL Courses and has secured NPTEL Domain Scholar Certification in Computer Science and Engineering (Data Science) and Computer Science and Engineering (Systems).",
      "He has worked as Assistant Professor at PSG College of Technology for a period of ten years and later at Manipal University, Dubai Campus. He has been working in Madanapalle Institute of Technology & Science since November 2017. He has served as Vice Principal (Academics) and IQAC Coordinator at MITS Madanapalle. He is currently the Principal of Madanapalle Institute of Technology & Science, Madanapalle, Andhra Pradesh.",
    ],
    highlights: [
      "Excellence in Leadership Award — Inspire Softech Solutions, Chennai (2024)",
      "27 research articles in reputed National / International Journals",
      "NPTEL Domain Scholar — CSE (Data Science) & CSE (Systems)",
      "Nearly 20 Swayam NPTEL Courses completed",
      "Life Member of ISTE and IEI; Fellow of IETE",
      "Over 25 years of teaching experience in VLSI Design & Embedded Systems",
    ],
    email: "principal@mits.ac.in",
    sourceUrl: "https://mits.ac.in/principal",
  },
  ombudsperson: {
    slug: "ombudsperson",
    name: "Prof. Konanki Dasaratha Ramaiah",
    designation: "Ombudsperson",
    qualification: "Ph.D.",
    image: "https://mits.ac.in/images/ram.jpg",
    bio: [
      "Prof. K. Dasaratha Ramaiah is a distinguished academician and scholar in the field of Economics, with over three decades of experience in teaching, research, and administration. He obtained his B.A., M.A., and Ph.D. in Economics from Sri Krishnadevaraya University, Ananthapuramu. His doctoral research focused on “Finances of Gram Panchayats in Andhra Pradesh.” His areas of specialization include Public Economics, Local Finance, Agricultural Economics, and Welfare Economics.",
      "Prof. Ramaiah served at Sri Krishnadevaraya University in several key academic and administrative capacities. He held the positions of Registrar, Director, Directorate of Admissions, Head and Chairman, Board of Studies, Department of Economics & Applied Economics, and Coordinator, University Examinations. He also served as a Project Officer, Sarva Shiksha Abhiyan (SSA), Ananthapuramu District, contributing to community-based educational development.",
      "Prof. Ramaiah has published 66 research papers in reputed national and international journals. He has authored four books, and edited three books in the field of Economics. He has also presented 43 research papers in various academic seminars and conferences, and organized several national-level seminars focusing on rural development, sustainable agriculture, and women empowerment. As a committed research supervisor, he has guided 24 Ph.D. and 11 M.Phil. scholars in the disciplines of Public Economics, Local Finance, and Agricultural Economics. His mentorship has produced several distinguished researchers contributing to academia and policy development.",
      "Prof. Ramaiah has successfully completed three major research projects funded by the UGC and ICSSR on socio-economic themes: “Financial Resources of Panchayati Raj Institutions,” “Tribal Development through Sericulture,” and “Watershed Development and Sustainable Livelihoods.”",
      "Throughout his career, he has demonstrated exemplary leadership in both academic governance and social service. He actively participated in various government outreach programs such as Janma Bhoomi, Vanam–Manam, Clean and Green, and Shrama Danam, reflecting his commitment to community welfare and sustainable development.",
      "In recognition of his outstanding contribution to higher education, Prof. Ramaiah received the State Best Teacher Award (2018) from the Hon’ble Chief Minister of Andhra Pradesh, Sri N. Chandrababu Naidu. He continues to uphold academic integrity and institutional ethics in his current role as the Ombudsperson of MITS (Deemed-to-be University).",
    ],
    highlights: [
      "State Best Teacher Award (2018) by the Hon’ble CM of Andhra Pradesh, Sri N. Chandrababu Naidu",
      "Guided 24 Ph.D. and 11 M.Phil. scholars in Public Economics, Local Finance & Agricultural Economics",
      "Published 66 research papers; 4 authored books & 3 edited books in Economics",
      "Completed 3 major research projects funded by UGC & ICSSR",
      "Former Registrar, Director Admissions, and Dept Head at Sri Krishnadevaraya University",
    ],
    documentTitle: "Official Order",
    documents: [
      {
        label: "Ombudsperson Appointment Order - Click to View",
        url: "https://mits.ac.in/assets/pdf/admin/Ombudsperson%20Appointment.pdf",
      },
    ],
    sourceUrl: "https://mits.ac.in/ombudsperson",
  },
};

export const leadershipOrder = [
  "chancellor",
  "pro-chancellor",
  "vice-chancellor",
  "registrar",
  "controller-of-examinations",
  "ombudsperson",
];

// ── Deans ─────────────────────────────────────────────────────────────
export interface DeanEntry {
  name: string;
  designation: string;
  school: string;
  qualification: string;
  image: string;
  deptKey?: string; // department to navigate to; faculty name used to open profile
  facultyName?: string;
  externalProfile?: string;
}

export const deansList: DeanEntry[] = [
  
  {
    name: "Dr. Dipankar Roy",
    designation: "Professor & Dean",
    school: "School of Engineering",
    qualification: "Ph.D. (University of Pisa, Italy)",
    image: "https://mits.ac.in/public/uploads/faculty/Deepankar Roy.JPG",
    deptKey: "ce",
    facultyName: "Dr. Dipankar Roy",
    externalProfile: "https://mits.ac.in/facultyprofile/1",
  },
  {
    name: "Dr. Chandra Prakash Gupta",
    designation: "Professor & Dean",
    school: "School of Computing",
    qualification: "Ph.D. (University of Kota)",
    image: "https://mits.ac.in/public/uploads/faculty/Dr. Chandraprakash Guptha.JPG",
    deptKey: "csecs",
    facultyName: "Dr. Chandra Prakash Gupta",
    externalProfile: "https://mits.ac.in/facultyprofile/730",
  },
  {
    name: "Dr. Bhanu Sree Reddy",
    designation: "Professor & Dean",
    school: "School of Management",
    qualification: "Ph.D. (Sri Venkateswara University)",
    image: "https://mits.ac.in/public/uploads/faculty/Bhanu Sree Reddy.JPG",
    deptKey: "mba",
    facultyName: "Dr. Bhanu Sree Reddy",
    externalProfile: "https://mits.ac.in/facultyprofile/701",
  },
];

// ── Department Heads ─────────────────────────────────────────────────
export interface HODEntry {
  name: string;
  department: string;
  image: string;
  deptKey: string; // links to existing department page
  externalProfile?: string;
}

export const departmentHeads: HODEntry[] = [
  { name: "Dr. Vijayakumar Natesan", department: "Civil Engineering", image: "https://mits.ac.in/public/uploads/faculty/Dr. Vijayakumar Natesan.JPG", deptKey: "ce", externalProfile: "https://mits.ac.in/facultyprofile/7" },
  { name: "Dr. Manavaalan Gunasekaran", department: "Electrical & Electronics Engineering", image: "https://mits.ac.in/public/uploads/faculty/Dr. Manavaalan Gunasekaran.JPG", deptKey: "eee", externalProfile: "https://mits.ac.in/facultyprofile/931" },
  { name: "Dr. S. Baskaran", department: "Mechanical Engineering", image: "https://mits.ac.in/public/uploads/faculty/DR S BASKARAN.JPG", deptKey: "me", externalProfile: "https://mits.ac.in/facultyprofile/306" },
  { name: "Dr. Sanjay Kumar C. Gowre", department: "Electronics & Communication Engineering", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sanjay Kumar C. Gowre.JPG", deptKey: "ece", externalProfile: "https://mits.ac.in/facultyprofile/1018" },
  { name: "Dr. M. Sreedevi", department: "Computer Science & Engineering", image: "https://mits.ac.in/public/uploads/faculty/Dr. M. Sreedavi.JPG", deptKey: "cse", externalProfile: "https://mits.ac.in/facultyprofile/140" },
  { name: "Dr. R. Kalpana", department: "CSE (Artificial Intelligence)", image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Kalpana.JPG", deptKey: "ai", externalProfile: "https://mits.ac.in/facultyprofile/80" },
  { name: "Dr. S. Kusuma", department: "CSE (Data Science)", image: "https://mits.ac.in/public/uploads/faculty/c9fcfd6e1946a61df27003a2c31fbb64.JPG", deptKey: "cseds", externalProfile: "https://mits.ac.in/facultyprofile/98" },
  { name: "Dr. Brahm Prakash", department: "CSE (Cyber Security)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Brahm Prakash.JPG", deptKey: "csecs", externalProfile: "https://mits.ac.in/facultyprofile/1085" },
  { name: "Dr. S. Padma", department: "CSE (AI & ML)", image: "https://mits.ac.in/public/uploads/faculty/Dr. S. Padma.JPG", deptKey: "aiml", externalProfile: "https://mits.ac.in/facultyprofile/144" },
  { name: "Dr. N. Naveen Kumar", department: "Computer Applications (MCA)", image: "https://mits.ac.in/public/uploads/faculty/Naveen Kumar.JPG", deptKey: "mca", externalProfile: "https://mits.ac.in/facultyprofile/254" },
  { name: "Dr. R. Saravana", department: "Mathematics", image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Saravana.JPG", deptKey: "bsh", externalProfile: "https://mits.ac.in/facultyprofile/351.html" },
  { name: "Dr. M. Chandra Sekhar", department: "Physics", image: "https://mits.ac.in/public/uploads/faculty/Dr. M. Chandra Sekhar.JPG", deptKey: "bsh", externalProfile: "https://mits.ac.in/facultyprofile/372" },
  { name: "Dr. Renjith Bhaskaran", department: "Chemistry", image: "https://mits.ac.in/public/uploads/faculty/renjithbhaskar.png", deptKey: "bsh", externalProfile: "https://mits.ac.in/facultyprofile/377" },
  { name: "Dr. Sudhakar Beedam", department: "English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sudhakar Beedam.JPG", deptKey: "bsh" },
];

// ── Councils & Governance ────────────────────────────────────────────
export const executiveCouncil = {
  title: "Executive Council",
  description:
    "The Executive Council is the principal governance body of MITS Deemed to be University. It is responsible for the overall administration, financial governance and strategic direction of the institution in accordance with UGC regulations.",
  constitutionUrl:
    "https://mits.ac.in/assets/pdf/admin/Executive%20Council%20Constitution-2025.pdf",
  sourceUrl: "https://mits.ac.in/mits-minutes-ec",
};

export const academicCouncil = {
  title: "Academic Council",
  description:
    "The Academic Council is the apex academic body of the University, responsible for academic policy, curriculum, evaluation reforms and overall academic standards of all schools and departments.",
  constitutionUrl:
    "https://mits.ac.in/assets/pdf/admin/Academic%20Council%20Constitution%20DTBU.pdf",
  sourceUrl: "https://mits.ac.in/mits-minutes-ac",
};

// ── Mandatory Disclosures ────────────────────────────────────────────
export interface DisclosureItem {
  label: string;
  url: string;
}
export interface DisclosureCategory {
  category: string;
  items: DisclosureItem[];
}

export const mandatoryDisclosures: DisclosureCategory[] = [
  {
    category: "Handbooks & Codes",
    items: [
      { label: "MITS Handbook — Service Rules", url: "https://mits.ac.in/assets/pdf/admin/Staff%20Hand%20Book%20Service%20Rules-2024-25.pdf" },
      { label: "MITS Student Handbook", url: "https://mits.ac.in/assets/pdf/admin/Code%20of%20Conduct-Student.pdf" },
      { label: "Code of Conduct for BoG / Principal", url: "https://mits.ac.in/assets/pdf/admin/Code-of-Conduct-for-BoG-Principal.pdf" },
      { label: "MITS Strategic Plan 2022–27", url: "https://mits.ac.in/assets/pdf/admin/Strategic%20Plan%202022-27.pdf" },
      { label: "Professional Code of Conduct", url: "https://mits.ac.in/assets/pdf/admin/Professional%20Code%20of%20Conduct.pdf" },
    ],
  },
  {
    category: "UGC",
    items: [
      { label: "UGC Guidelines", url: "https://mits.ac.in/assets/pdf/admin/UGC%20AUTONOMOUS%20GUIDELINES.pdf" },
      { label: "UGC Undertaking", url: "https://mits.ac.in/assets/pdf/admin/UGC-Undertaking.pdf" },
      { label: "UGC Approval Letter for Autonomous Status", url: "https://mits.ac.in/assets/pdf/admin/Extension%20of%20Autonomous%20Status.pdf" },
      { label: "2(f) & 12(B) Certificates", url: "https://mits.ac.in/assets/pdf/admin/2f%20&%2012B.pdf" },
    ],
  },
  {
    category: "Governance & Finance",
    items: [
      { label: "Executive Council Constitution 2025", url: "https://mits.ac.in/assets/pdf/admin/Executive%20Council%20Constitution-2025.pdf" },
      { label: "Minutes of 4th Executive Council Meeting", url: "https://mits.ac.in/assets/pdf/admin/Minutes%204th%20EC%20Meeting.pdf" },
      { label: "Minutes of 3rd Executive Council Meeting", url: "https://mits.ac.in/assets/pdf/admin/MoM%20-Scan-3rd%20EC-%2011.03.2026-MITS%20DTBU.pdf" },
      { label: "Minutes of 2nd Executive Council Meeting", url: "https://mits.ac.in/assets/pdf/admin/EC-Minutes-2nd-Meeting-25.8.2025.pdf" },
      { label: "Minutes of 1st Executive Council Meeting", url: "https://mits.ac.in/assets/pdf/admin/EC-Minutes-1st%20Meeting-5.08.2025.pdf" },
      { label: "Minutes of Governing Council Meeting 2014–2026", url: "/bog" },
      { label: "Minutes of Academic Council Meeting 2014–2026", url: "/minutes-ac" },
      { label: "Delegation of Financial Power", url: "https://mits.ac.in/assets/pdf/admin/DELEGATION%20OF%20FINANCIAL-POWER.pdf" },
      { label: "Finance Committee (DTBU) 2025–26", url: "/university-finance-committee" },
      { label: "Finance Committee 2015–16 to 2025–26", url: "/finance-committee" },
    ],
  },
  {
    category: "Audited Financial Statements",
    items: [
      { label: "Audited Statement 2024–25", url: "https://mits.ac.in/assets/pdf/admin/Audit%20Report%202024-25.pdf" },
      { label: "Audited Statement 2023–24", url: "https://mits.ac.in/assets/pdf/admin/Audit%20Report%202023-24.pdf" },
      { label: "Audited Statement 2022–23", url: "https://mits.ac.in/assets/pdf/admin/Audit%20Report%202022-23.pdf" },
      { label: "Audited Statement 2021–22", url: "https://mits.ac.in/assets/pdf/admin/Audit%20Report%202021-22.pdf" },
      { label: "Audited Statement 2020–21", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202020-21-min.pdf" },
      { label: "Audited Statement 2019–20", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202019-20.pdf" },
      { label: "Audited Statement 2018–19", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202018-19.pdf" },
      { label: "Audited Statement 2017–18", url: "https://mits.ac.in/assets/pdf/admin/I%20%26%20E%2C%20Bal%20%20fin%20statement%202017-18.pdf" },
      { label: "Audited Statement 2016–17", url: "https://mits.ac.in/assets/pdf/admin/I%20%26%20E%2C%20BAL%202016-17%20MITS%20Audit%20Statement.pdf" },
      { label: "Audited Statement 2015–16", url: "https://mits.ac.in/assets/pdf/admin/I%20%26%20E%2C%20BAL%202015-16%20MITS%20Audit%20Statement.pdf" },
      { label: "Audited Statement 2014–15", url: "https://mits.ac.in/assets/pdf/admin/I%20%26%20E%2C%20BAL%202014-15%20MITS%20Audit%20Statement.pdf" },
    ],
  },
  {
    category: "AICTE Mandatory Disclosures",
    items: [
      { label: "AICTE Mandatory Disclosure 2025–26", url: "https://mits.ac.in/assets/pdf/admin/MITS%20Mandatory%20Disclosure%202025-26.pdf" },
      { label: "AICTE Mandatory Disclosure 2024–25", url: "https://mits.ac.in/assets/pdf/admin/Mandatory%20Disclosures_2024-25.pdf" },
      { label: "AICTE Mandatory Disclosure 2018–19", url: "https://mits.ac.in/assets/pdf/admin/AICTE%20Mandatory%20Disclosure%202018-19.pdf" },
    ],
  },
  {
    category: "AICTE Approvals",
    items: [
      { label: "AICTE Approval 2026–27", url: "https://mits.ac.in/assets/pdf/admin/EOA%20Report%202026-2027.PDF" },
      { label: "AICTE Approval 2025–26", url: "https://mits.ac.in/public/uploads/affiliations/AICTE%20EoA%202026-26%20[16.01.2026].pdf" },
      { label: "AICTE Approval 2024–25", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202024-2025.PDF" },
      { label: "AICTE Approval 2023–24", url: "https://mits.ac.in/public/uploads/affiliations/EOA-Report-2023-2024.PDF" },
      { label: "AICTE Approval 2022–23", url: "https://mits.ac.in/assets/pdf/admin/AICTE-%20Affiliation-EOA%20_2022-23%20Report.PDF" },
      { label: "AICTE Approval 2021–22", url: "https://mits.ac.in/assets/pdf/admin/AICTE-%20Affiliation-EOA%20Report_2021-22.PDF" },
      { label: "AICTE Approval 2020–21", url: "https://mits.ac.in/assets/pdf/admin/EOA_Report_2020-21.PDF" },
      { label: "AICTE Approval 2019–20", url: "https://mits.ac.in/assets/pdf/admin/Corrigendum%20Report%20for%20EOA%202019-2020.PDF" },
      { label: "AICTE Approval 2018–19", url: "https://mits.ac.in/assets/pdf/admin/EOA%20Report_2018-19.pdf" },
      { label: "AICTE Approval 2017–18", url: "https://mits.ac.in/assets/pdf/admin/Corrigendum%20Report%20for%20EOA%202017-2018.pdf" },
      { label: "AICTE Approval 2016–17", url: "https://mits.ac.in/assets/pdf/admin/EOA%20Report-2016-17.pdf" },
      { label: "AICTE Approval 2015–16", url: "https://mits.ac.in/assets/pdf/admin/Corrigendum_Report_for_EOA_2015-2016[4].pdf" },
      { label: "AICTE Approval 2014–15", url: "https://mits.ac.in/assets/pdf/admin/AICTE%20APPROVAL(2014-15).pdf" },
    ],
  },
  {
    category: "Board of Studies (BoS) Documents",
    items: [
      { label: "BoS — Computer Science & Technology", url: "https://mits.ac.in/assets/pdf/admin/BOS-CST.pdf" },
      { label: "BoS — Computer Science & Information Technology", url: "https://mits.ac.in/assets/pdf/admin/BOS-CSIT.pdf" },
      { label: "BoS — Department of Management Studies (MBA)", url: "https://mits.ac.in/assets/pdf/admin/BOS-MBA.pdf" },
      { label: "BoS — Department of Computer Applications (MCA)", url: "https://mits.ac.in/assets/pdf/admin/BOS-MCA.pdf" },
      { label: "BoS — Department of Mathematics", url: "https://mits.ac.in/assets/pdf/admin/BoS%20Mathematics.pdf" },
      { label: "BoS — Department of Physics", url: "https://mits.ac.in/assets/pdf/admin/Physics_BOS_MOM.pdf" },
      { label: "BoS — Department of Chemistry", url: "https://mits.ac.in/assets/pdf/admin/Chemistry-BOS-MOM.pdf" },
      { label: "BoS — Department of English & Foreign Languages", url: "https://mits.ac.in/assets/pdf/admin/BOS-EFL.pdf" },
      { label: "BoS — Department of Humanities", url: "https://mits.ac.in/assets/pdf/admin/BOS-Humanities.pdf" },
    ],
  },
  {
    category: "Accreditations & Certifications",
    items: [
      { label: "MITS TEQIP Revised IDP", url: "https://mits.ac.in/assets/pdf/teqip/IDP.pdf" },
      { label: "SWAYAM-NPTEL Certificate", url: "https://mits.ac.in/assets/pdf/admin/MITS-NPTEL.pdf" },
      { label: "ISO 21001:2018 Certificate", url: "https://mits.ac.in/assets/pdf/admin/Madanapalle%20Institute%20of%20Technology%20&%20Science-ISO.pdf" },
      { label: "NABL Accredited Certificate (Labs)", url: "https://mits.ac.in/assets/pdf/admin/Certificate%20TC-15590.pdf" },
      { label: "Fire Safety NOC 2022–2027", url: "https://mits.ac.in/assets/pdf/admin/Fire%20safety%20NOC%202022-2027.pdf" },
    ],
  },
  {
    category: "NBA Accreditations",
    items: [
      { label: "NBA — PG MBA (2025–28)", url: "https://mits.ac.in/public/uploads/affiliations/MBA%20NBA%20Cetificate-2025.pdf" },
      { label: "NBA — PG MCA (2025–28)", url: "https://mits.ac.in/public/uploads/affiliations/MCA%20NBA%20Cetificate-2025.pdf" },
      { label: "NBA — UG Programmes Civil, CSE, ECE, EEE, ME (2025–28)", url: "https://mits.ac.in/public/uploads/affiliations/Madanapalle%20Institute%20of%20Technology%20_%20Science,%20Andhra%20Pradesh19_6_2025_12_45_57.pdf" },
      { label: "NBA — PG MCA (2024–25)", url: "https://mits.ac.in/public/uploads/affiliations/NBA-MCA%20Extention%20till%202025%20June.pdf" },
      { label: "NBA — UG CST (2024–27)", url: "https://mits.ac.in/public/uploads/affiliations/NBA%20-%20CST-%20confirmation%20-till%2030.6.2027.pdf" },
      { label: "NBA — UG Programmes Civil, CSE, ECE, EEE, ME (2022–25)", url: "https://mits.ac.in/public/uploads/affiliations/b6c8a081779294cbbd70a1180dc7746f.pdf" },
      { label: "NBA — PG MCA (2022–24)", url: "https://mits.ac.in/public/uploads/affiliations/NBA-MCA-2022-24.pdf" },
      { label: "NBA — PG MBA (2022–25)", url: "https://mits.ac.in/public/uploads/affiliations/NBA-MBA-2022-25.pdf" },
      { label: "NBA — UG Programmes CSE, ECE, EEE, ME & PG MBA (2019–22)", url: "https://mits.ac.in/assets/pdf/admin/Madanapalle%20Institute%20of%20Technology%20_%20Science21_11_2019_12_47_22.pdf" },
      { label: "NBA — UG Civil & PG MCA (2019–21)", url: "https://mits.ac.in/assets/pdf/admin/NBA%20-%20Accreditation%20-%20MCA%20Civil%20-%20Till%202021%202022.pdf" },
    ],
  },
  {
    category: "Annual Reports",
    items: [
      { label: "Annual Report 2024–25", url: "https://mits.ac.in/assets/pdf/admin/AnnualReport%202024-25.pdf" },
      { label: "Annual Report 2023–24", url: "https://mits.ac.in/assets/pdf/admin/AnnualReport%202023-24.pdf" },
      { label: "Annual Report 2022–23", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%202022-23.pdf" },
      { label: "Annual Report 2021–22", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%20AY%202021-22.pdf" },
      { label: "Annual Report 2018–19", url: "https://mits.ac.in/assets/pdf/admin/2018-19%20Annual%20Report.pdf" },
      { label: "Annual Report 2017–18", url: "https://mits.ac.in/assets/pdf/admin/2017-18%20Annual%20Report.pdf" },
      { label: "Annual Report 2016–17", url: "https://mits.ac.in/assets/pdf/admin/2016-17%20Annual%20Report.pdf" },
      { label: "Annual Report 2015–16", url: "https://mits.ac.in/assets/pdf/admin/2015-16%20Annual%20Report.pdf" },
      { label: "Annual Report 2014–15", url: "https://mits.ac.in/assets/pdf/admin/2014-15%20Annual%20Report.pdf" },
    ],
  },
  {
    category: "Compliance & Other Disclosures",
    items: [
      { label: "Implementing Food Safety & Standard Act", url: "https://mits.ac.in/assets/pdf/admin/Implementing%20Food%20Safety%20%26%20Standard%20Act.%20sign.pdf" },
      { label: "Insurance for Students (valid up to June 2025)", url: "https://mits.ac.in/assets/pdf/admin/Insurance%20for%20Students%20upto%20June%20%20Sign%202025.pdf" },
    ],
  },
];

// ── PDF references ───────────────────────────────────────────────────
export const bosPdfUrl =
  "https://mits.ac.in/assets/pdf/admin/MITS-DTBU-BOS-AY(2025-2026).pdf";
export const organogramPdfUrl =
  "https://mits.ac.in/assets/pdf/admin/Organogram-MITS%20DTBU.pdf";

// ── About sections (used for mega menu & hub page) ───────────────────
export interface AboutSectionDef {
  key: string;
  label: string;
  href: string;
  description: string;
}

export const aboutSections: AboutSectionDef[] = [
  { key: "leadership", label: "Leadership", href: "/about/leadership", description: "Chancellor, Pro-Chancellor, Vice-Chancellor and statutory officers." },
  { key: "academic-leadership", label: "Academic Leadership", href: "/about/academic-leadership", description: "Deans of Academics, Engineering, Computing and Management." },
  { key: "deans", label: "Deans", href: "/about/deans", description: "School Deans steering each academic vertical at MITS." },
  { key: "department-heads", label: "Department Heads", href: "/about/department-heads", description: "Heads of every academic department across the University." },
  { key: "executive-council", label: "Executive Council", href: "/about/executive-council", description: "Apex governance body responsible for institutional administration." },
  { key: "academic-council", label: "Academic Council", href: "/about/academic-council", description: "Highest academic authority for curriculum and academic reforms." },
  { key: "bos", label: "Board of Studies (BoS)", href: "/about/bos", description: "Departmental academic boards across schools." },
  { key: "organogram", label: "Organogram", href: "/about/organogram", description: "Organisational structure of MITS Deemed to be University." },
  { key: "important-links", label: "Important Links", href: "#", description: "NIRF, NAAC, Accreditations, Public Self Disclosures, and Mandatory Disclosures." },
];

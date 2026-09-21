// International Relations - MITS Deemed to be University
// Source: https://mits.ac.in/international-relations
// All PDFs and images link to official mits.ac.in resources.

import { University } from "lucide-react";

export type IRPerson = {
  name: string;
  designation: string;
  initials?: string;
  email?: string;
  phone?: string;
  image?: string;
};

export type Partner = {
  name: string;
  country: string;
  region: "US" | "Europe" | "Japan" | "Taiwan" | "South Korea" | "Singapore" | "Middle East" | "Other";
  website: string;
  ranking?: string;
  description?: string;
  strengths?: string[];
  highlight?: string;
};

export type ProgramCard = {
  title: string;
  subtitle?: string;
  period?: string;
  academicYear?: string;
  partner?: string;
  country?: string;
  description?: string;
  activity?: string;
  reportUrl?: string;
  brochureUrl?: string;
  image?: string;
  participants?: { sno: number; name: string; dept: string; roll: string; extra?: string }[];
};

export type IREvent = {
  title: string;
  date: string;
  description: string;
  reportUrl?: string;
  image?: string;
  scientists?: string[];
  objectives?: string[];
};

export type Fellow = {
  batch: string;
  facultyChampions: string;
  students: { sno: number; name: string; dept: string; roll: string; wiki?: string }[];
};

/* ---------- ABOUT ---------- */

export const aboutIR = {
  title: "MITS Deemed to be University - A Global Academic Community",
  intro: [
    "MITS- Deemed to be University is committed to becoming a globally recognized institution for academic excellence, innovation, and research. Internationalization is a key pillar of this vision, creating opportunities for the students, empowering the faculty and researchers to engage with leading institutions across the world. It has built a strong international academic ecosystem by recruiting distinguished faculty members from renowned universities worldwide, who have valuable research experiences and international industry exposure. Their expertise is enriching this ecosystem with global perspectives.",
    "MITS further strengthens its international outlook by regularly hosting eminent scholars, researchers and professionals from across the globe through seminars, conferences, workshops and collaborative research initiatives.",
  ],
  functionsTitle: "Functions of IRO in Creating a Vibrant Multicultural Campus Environment",
  functionsDesc: "MITS strongly believes that global exposure is essential for developing future-ready professionals. IRO facilitates both inbound and outbound international engagement by connecting students and faculty with a wide range of global opportunities in building international networks, experience diverse cultures, exploring innovation ecosystems to develop a strong cross-cultural competency for an interconnected world.",
  centralHubObjectives: [
    "Global partnerships and MoUs",
    "Outbound mobility programs for students and faculty",
    "Inbound exchange and visiting student programs",
    "International internships and research collaboration opportunities",
    "Scholarship guidance and mobility support",
    "Coordination of global events and collaborations",
  ],
  studentBenefits: [
    "Gain international academic exposure at one of the world's leading universities",
    "Understand the impact of disruptive technologies across industries",
    "Exposure to project-based and experiential learning approaches",
    "Develop critical thinking and problem-solving skills",
    "Strengthen their profile for internships, placements, and higher studies",
    "Build global awareness and professional confidence",
    "Network with global community",
    "Foreign Language Instruction",
  ],
  journey: {
    title: "Our International Journey",
    text: "The University's journey toward global engagement began in 2016, marking an important milestone in its internationalization efforts. The first batch of students participated in the prestigious University Innovation Fellowship Program at the Hasso Plattner Institute of Design (d.school), Stanford University, California, USA, where 60 students received training in innovation, design thinking, and leadership.",
  },
  longTermObjectives: [
    "Create a Sustainable Ecosystem for Internationalization",
    "Foster collaborative research, Twinning Programmes and Global Educational Pathways",
    "Create long-term knowledge partners with International institutions, broadening the scope of research collaboration, and deepening institutional partnerships – noting that reaffirming the strategic importance of bilateral research",
    "International Higher Education Fairs",
    "Co-teaching courses and Co-host conferences",
    "Planning and implementation of cooperative research projects",
  ],
  tagline: "Committed to Building a Globally Connected Learning Ecosystem",
  goal: "Promotion of the Institution's Internationalization and Academic Exchanges.",
  mission: [
    "Promote academic collaborations and faculty & student exchange programmes with foreign universities and research organisations.",
    "Handle MoUs of academic collaboration with foreign universities and institutions.",
    "Facilitate MITS students' internships, scholarships and other opportunities for global exposure.",
    "Serve as the international contact and assist visiting faculty and foreign students.",
    "Help international students with their life in India and Madanapalle (including admission information, academic and psychological counselling).",
  ],
  office: "Dr. S. Narayanan is the Senior Advisor – International Relations Office under whose guidance the IRO operates. IRO at Madanapalle Institute of Technology & Science is headed by Mrs. U. Vijaya Lakshmi, Associate Director, International Relations & Institute Counsellor and Mrs. P. L. Susmitha, Assistant Manager. All the departments have international coordinators and country specific coordinators as well.",
};

export const aboutGallery: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/T3-min.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/T4-min.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/T5-min.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/mou1.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/mou2.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/iro1.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/iro2.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/iro3.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/iro4.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/iro5.jpeg",
];

/* ---------- CONTACT ---------- */

export const contactCard = {
  
  office: "Office of International Relations (IRO)",
  institute: "Madanapalle Institute of Technology & Science (Deemed to be University)",
  address:
    "Madanapalle-Kadiri Road, kurabalakota Mandal, Madanapalle-517325, Andhra Pradesh, India",
  timings: "Mon – Sat: 9:00 AM – 5:00 PM",
  phone: "+91 9100600773 , 9160140270",
  email: "iro@mits.ac.in",
  mapsUrl: "https://maps.google.com/?q=Madanapalle+Institute+of+Technology+and+Science",
  team: [
    { initials: "UV", name: "Mrs. U. Vijaya Lakshmi", designation: "Associate Director & Institute Counsellor", email: "ad-iro@mits.ac.in" },
    { initials: "PL", name: "Mrs. P. L. Susmitha", designation: "Assistant Manager - International Relations", email: "susmithap@mits.ac.in" },
  ] as IRPerson[],
};

/* ---------- MoUs ---------- */

export const partners: Partner[] = [
  {
    name: "Bowling Green State University (BGSU)",
    country: "USA",
    region: "US",
    website: "https://www.bgsu.edu/",
    ranking: "QS Sustainability Rankings 2026: 1501+ band",
    description: "Bowling Green State University (BGSU) is a public research university in Bowling Green, Ohio, known for being the No. 1 Public University in Ohio that students say they would choose again. For more than 114 years, Bowling Green State University has been a public university for the public good, always moving forward. Founded by the state, for the state, as a teacher-training institution, the University's history is defined by an educational pursuit for more.\nToday, BGSU is a high-research, nationally ranked, comprehensive university, always proud to be public. It is best known for its historic roots in teacher education, alongside prominent specialties in education, popular psychology and supply chain management/business. It is recognized for its strengths in business, engineering, computer science, education, health sciences, psychology, media, and the arts. However, it is included in the QS Sustainability Rankings 2026, where it is placed in the 1501+ band.\nThe university emphasizes applied research, innovation, experiential learning through internships and co-ops, and strong industry partnerships, preparing students with the practical skills and global perspective needed for successful careers",
    // strengths: ["Business & Supply Chain Management", "Engineering & Computer Science", "Education & Health Sciences", "Media & Arts", "Experiential Learning & Co-ops"],
    highlight: "Ranking:  It is a No. 1 Public University in Ohio and 1501+ band in QS Sustainability Rankings 2026."
  },
  {
    name: "University of Applied Sciences Upper Austria (Hagenberg Campus)",
    country: "Austria",
    region: "Europe",
    website: "https://fh-ooe.at/en",
    description: `The University of Applied Sciences Upper Austria aims to be the leading university of applied sciences in Austria. This ambition is based on a strong student-centred approach with excellent teaching, modern services, and an attractive environment, as well as outstanding applied research with strong regional roots and international connections. 
The unique strength lies in the close integration of these two areas. Their mutual reinforcement makes our university a unique place for studying, research and knowledge transfer. University of Applied Sciences Upper Austria – Hagenberg Campus is internationally recognized for its excellence in information technology, software engineering, artificial intelligence, cybersecurity, data science, media technology, and communication engineering. 
The university emphasizes applied research, industry collaboration, innovation and project-based learning, equipping students with practical skills and strong career opportunities in the digital and technology sectors.`,

    // strengths: ["Information Technology & Software Engineering", "Artificial Intelligence & Cybersecurity", "Data Science & Media Technology", "Communication Engineering", "Project-Based Learning & Industry Collaboration"],
    highlight: "Ranking: University of Applied Sciences Upper Austria ranks 39th nationally."
  },
  {
    name: "Brno University of Technology (BUT)",
    country: "Czech Republic",
    region: "Europe",
    website: "https://www.vut.cz/en/?aid_redir=1",
    ranking: "QS World University Rankings 2027: #=588",
    description: `Brno University of Technology (BUT), established in 1899, is one of the largest and most prestigious technical universities in the Czech Republic. Located in Brno, a leading technology and innovation hub, the university is recognized for its excellence in Engineering, Information Technology, Architecture, Business and Applied Sciences. 
The university is ranked =588 in the QS World University Rankings 2027, reflecting its growing international reputation in engineering, technology, and applied sciences. BUT offers modern research facilities, strong industry collaborations with companies such as IBM, Siemens, Bosch, and Honeywell, and extensive international exchange opportunities through Erasmus and other global partnerships. 
With a strong emphasis on innovation, practical learning, and research, BUT prepares graduates for successful careers in academia, industry, and entrepreneurship`,

    // strengths: ["Engineering & Information Technology", "Architecture & Applied Sciences", "IBM, Siemens, Bosch & Honeywell Industry Ties", "Erasmus+ & Global Partnerships"],
    highlight: "World Rank: It is ranked with: #1201–1400 in QS World University Rankings 2027"
  },
  {
    name: "The University of South Bohemia in České Budějovice (USB)",
    country: "Czech Republic",
    region: "Europe",
    website: "https://www.jcu.cz/en",
    ranking: "QS World University Rankings 2027: #1201–1400",
    description: `The University of South Bohemia (USB), established in 1991, is a leading public university in the Czech Republic, renowned for its excellence in Life Sciences, Agriculture, Fisheries, Environmental Sciences, Biology, Health Sciences, And Education. Located in the historic city of České Budějovice, the university is recognized for its strong research collaborations, modern laboratories, and interdisciplinary approach to teaching. 
It is ranked with QS World University Rankings 2027: #1201–1400. USB maintains extensive international partnerships and actively participates in Erasmus+ and other global exchange programs, providing students with valuable international learning and research opportunities. 
The university offers a supportive academic environment with a strong focus on sustainability, innovation, and applied research.`,

    // strengths: ["Life Sciences & Environmental Sciences", "Agriculture & Fisheries", "Biology & Health Sciences", "Erasmus+ Exchange & Sustainability Research"],
    highlight: "World Rank: It is ranked with: #1201–1400 in QS World University Rankings 2027"
  },
  {
    name: "Maharishi Vedic University",
    country: "Holland",
    region: "Europe",
    website: "https://meru.international/",
    description: `Maharishi Vedic University, based in the Netherlands, is a specialized institution dedicated to Consciousness-Based Education, integrating Vedic knowledge with modern education, personal development, and scientific research. Inspired by the teachings of Maharishi Mahesh Yogi, the university emphasizes Holistic Learning Through Transcendental Meditation, Yoga, Vedic Sciences and Leadership Development. Its international learning environment attracts students from various countries seeking education that combines academic knowledge with mental well-being, self-development, and sustainable living. 
The university's key strengths include its unique interdisciplinary curriculum, focus on holistic education, global network of Maharishi institutions, and emphasis on developing human potential through consciousness-based learning.`,

    // strengths: ["Consciousness-Based Education", "Transcendental Meditation & Yoga", "Vedic Sciences & Leadership Development", "Holistic Education & Mental Well-being"],
    highlight: "Ranking: It is ranked #66 nationally among Indian universities in the 2024 IIRF University Rankings."
  },
  {
    name: "University of Aizu (UoA)",
    country: "Japan",
    region: "Japan",
    website: "https://u-aizu.ac.jp/en/",
    description: `The University of Aizu (UoA), established in 1993 in Fukushima Prefecture, is Japan's first university dedicated exclusively to computer science and engineering. Renowned for its innovative education and research, the university offers programs in computer science, artificial intelligence, software engineering, cybersecurity, data science, and information systems. 
UoA has a highly international academic environment, with many courses taught in English and students and faculty from around the world. The university is recognized for its cutting-edge research, advanced computing facilities, and strong collaborations with industry and international universities. 
Its key strengths include specialization in Computer Science, Global Outlook, Research Excellence in AI And ICT, practical industry partnerships, and a strong focus on innovation and entrepreneurship.`,

    // strengths: ["Exclusive Computer Science & Engineering Focus", "AI, ICT & Cybersecurity Research", "English-Taught Degree Programs", "Global Outlook & Research Excellence"],
    highlight: "Ranking:: UoA is ranked in the 601–800 band globally in Times Higher Education (THE) World University Rankings."
  },
  {
    name: "Ichinoseki College (National Institute of Technology - KOSEN)",
    country: "Japan",
    region: "Japan",
    website: "https://www.ichinoseki.ac.jp/english.html",
    description: `The National Institute of Technology (KOSEN), Ichinoseki College, established in 1964 in Iwate Prefecture, Japan, is one of Japan's prestigious KOSEN (Colleges of Technology) dedicated to producing highly skilled engineers through practice-oriented education. The college offers specialized programs in Mechanical Engineering, Electrical and Electronic Engineering, Control and Information Systems, Chemical and Biotechnology, And Civil Engineering. 
It is well known for its strong emphasis on hands-on learning, industry collaboration, research, and innovation, enabling students to gain practical technical skills from an early stage. Ichinoseki College also promotes international exchange programs and collaborative research, preparing graduates for successful careers in engineering, manufacturing, and advanced technology industries. 
Its key strengths include practical engineering education, strong industry partnerships, advanced technical training, and a high graduate employability rate.`,

    // strengths: ["Practical Engineering Education", "Mechanical, EEE, Biotech & Civil Engineering", "Advanced Technical Training & Employability", "Sakura Science Exchange Host"],
    highlight: "Host institute for the Sakura Science Exchange Program in Japan."
  },
  {
    name: "Iwate Prefectural University (Faculty of Software & Information Science)",
    country: "Japan",
    region: "Japan",
    website: "https://www.iwate-pu.ac.jp/en/",
    description: `The Faculty of Software and Information Science at Iwate Prefectural University (IPU), established in 1998, is recognized for its excellence in software engineering, artificial intelligence, data science, cybersecurity, networking, and information systems. 
Located in Iwate Prefecture, Japan, the faculty emphasizes a balance of theoretical knowledge and practical application, equipping students with advanced digital and computing skills. It maintains strong collaborations with industry, government, and international universities, providing opportunities for research, internships, and global exchange. 
The faculty's key strengths include high-quality software and IT education, cutting-edge research in AI and information technologies, industry-oriented curriculum, modern research facilities, and a strong focus on innovation and digital transformation.`,

    // strengths: ["High-Quality Software & IT Education", "Cutting-edge AI & Info Tech Research", "Industry-Oriented Curriculum", "Modern Computing Research Facilities"],
    highlight: "Ranking: It has historically placed in the 151–200 tier in Times Higher Education Japan University "
  },
  {
    name: "Asia University (AU)",
    country: "Taiwan",
    region: "Taiwan",
    website: "https://www.asia.edu.tw/",
    ranking: "QS World University Rankings 2027: #=649",
    description: `Asia University (AU), established in 2001 in Taichung, Taiwan, is a leading private university recognized for its excellence in Artificial Intelligence, Information Technology, Health Sciences, Management, Design, and Creative Innovation. 
In the QS World University Rankings 2027, Asia University is ranked #=649, reflecting its growing global reputation and research impact. The university is known for its modern campus, interdisciplinary education, and strong emphasis on research and international collaboration. Asia University has established partnerships with universities and industries worldwide, providing students with global learning, exchange, and internship opportunities. 
Its key strengths include AI and smart healthcare research, innovation-driven education, industry-linked curriculum, advanced research centres and a strong commitment to entrepreneurship and internationalization, preparing graduates for careers in the global knowledge economy. `,

    // strengths: ["AI & Smart Healthcare Research", "Information Technology & Management", "Creative Innovation & Design", "Industry-Linked Exchange Programs"],
    highlight: "Ranking: Asia University is ranked #=649 in QS World University Rankings 2027."
  },
  {
    name: "Providence University",
    country: "Taiwan",
    region: "Taiwan",
    website: "https://enpu.pu.edu.tw/",
    ranking: "QS Asian University Rankings 2026: #951–1000",
    description: `Providence University, established in 1956 in Taichung, Taiwan, is a well-respected private university known for its strengths in business and management, foreign languages, humanities, social sciences, information technology, and applied sciences.
It is ranked in QS Asian University Rankings 2026: #951–1000. The university provides a student-centred learning environment with a strong emphasis on international education, interdisciplinary learning, and community engagement. Through partnerships with universities across the globe, Providence University offers extensive student exchange, dual-degree, and internship opportunities. 
Its key strengths include quality teaching, global collaborations, multilingual education, research in business and social sciences and a commitment to sustainable development and social responsibility, preparing graduates for successful careers in an increasingly globalized world. `,

    // strengths: ["Business & Management", "Foreign Languages & Multilingual Education", "Information Technology & Applied Sciences", "Dual-Degree & Internship Pathways"],
    highlight: "Ranking: It is ranked #951–1000 in QS Asian University Rankings- 2026. "
  },
  {
    name: "Pusan National University (PNU)",
    country: "South Korea",
    region: "South Korea",
    website: "https://www.pusan.ac.kr/eng/Main.do",
    ranking: "QS World University Rankings 2027: #=449",
    description: `Pusan National University (PNU), established in 1946, is one of South Korea's leading national research universities, located in Busan, the country's second-largest city. It has QS World University Rankings 2027: #=449. 
The university is renowned for its excellence in Engineering, Natural Sciences, Medicine, Business, Information Technology and Environmental Sciences. PNU is recognized for its world-class research, modern academic facilities, and strong collaborations with global universities and industry partners. 
The university offers a wide range of English-taught programs and international exchange opportunities, fostering a diverse and globally connected learning environment. Its key strengths include high-impact research, outstanding engineering and STEM programs, strong industry partnerships, innovation-driven education, and excellent graduate employability, making it one of the top higher education institutions in South Korea.`,

    // strengths: ["High-Impact Research & STEM Programs", "Engineering, Natural Sciences & Medicine", "Business & Environmental Sciences", "Excellent Graduate Employability"],
    highlight: "Ranking: It has QS World University Rankings 2027: #=449. "
  },
  {
    name: "Kookmin University",
    country: "South Korea",
    region: "South Korea",
    website: "https://english.kookmin.ac.kr/",
    ranking: "QS World University Rankings 2027: #1001–1200",
    description: `Kookmin University is ranked #1001–1200 in the QS World University Rankings 2027, reflecting its growing international presence in higher education and research. Established in 1946 in Seoul, South Korea, is one of the country's leading private universities, recognized for its strengths in Engineering, Computer Science, Artificial Intelligence, Automotive Engineering, Business, Design, and Architecture. 
The university is well known for its innovation-driven education, cutting-edge research, and close collaboration with industry, particularly in the fields of mobility, smart technologies, and digital transformation. Kookmin University maintains extensive international partnerships and offers a wide range of student exchange and joint research opportunities, creating a globally oriented academic environment. 
Its key strengths include advanced engineering and AI research, strong industry linkages, interdisciplinary education, modern research facilities and a focus on entrepreneurship and innovation, preparing graduates for successful careers in the global workforce.`,

    // strengths: ["Automotive Engineering & Mobility", "Artificial Intelligence & Computer Science", "Business, Design & Architecture", "Industry Linkages & Entrepreneurship"],
    highlight: "Ranking: Pusan National University is ranked #=449 globally in the QS World University Rankings."
  }
];

export const partnerImages = [
  "https://mits.ac.in/public/uploads/internationalrelation/mou1.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/mou2.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/bowling.JPG",
  "https://mits.ac.in/public/uploads/internationalrelation/us-mou.JPG",
  "https://mits.ac.in/public/uploads/internationalrelation/Rivier%20University%201.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/Rivier%20University%202.JPG",
  "https://mits.ac.in/public/uploads/internationalrelation/nctu.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/germany.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/finland.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/dubai.png",
];

/* ---------- INTERNSHIPS / EXCHANGE ---------- */

export const internships: ProgramCard[] = [
  {
    title: "Research Internship – University of Aizu, Fukushima",
    country: "Japan",
    partner: "University of Aizu",
    academicYear: "2025-26",
    period: "15 January – 30 March 2026",
    participants: [
      { sno: 1, name: "Devisriprasad Subbanna Vinodkumar", dept: "IV-CSE-AI", roll: "22691A3131" },
      { sno: 2, name: "Gowri Shankar Mugadi", dept: "IV-CSE-AI", roll: "22691A3139" },
    ],
  },
  {
    title: "Sakura Science Exchange Program",
    country: "Japan",
    partner: "National Institute of Technology – Ichinoseki College",
    academicYear: "2025-26",
    period: "17 – 23 November 2025",
    reportUrl:
      "https://mits.ac.in/assets/pdf/event/Report%20on%20Sakura%20Science%20Exchange%20Program%202025.pdf",
    description:
      "Faculty and student delegation from MITS participated in the Sakura Science Exchange Programme at Ichinoseki College, Japan.",
    participants: [
      { sno: 1, name: "Vamsi Bandi", dept: "AI Dept", roll: "Faculty", extra: "Asst. Professor" },
      { sno: 2, name: "Chershitha Reddy Chapati", dept: "IV-CSE-A", roll: "22691A0544" },
      { sno: 3, name: "Hema Charitha Kodanda", dept: "IV-CST-A", roll: "22691A2864" },
      { sno: 4, name: "Aniket Arun Sasmal", dept: "IV-CST-A", roll: "22691A2814" },
      { sno: 5, name: "Tejasree Kothapalli", dept: "IV-CAI-C", roll: "22691A31H2" },
      { sno: 6, name: "Vyshnavi Sarode", dept: "IV-CAI-C", roll: "22691A31J2" },
      { sno: 7, name: "Lokesh Ayyaswamy", dept: "IV-CAI-B", roll: "22691A3180" },
      { sno: 8, name: "Tejeswar Reddy Meegada", dept: "IV-ECE-E", roll: "22691A04S1" },
    ],
  },
  {
    title: "Research Internship – GS Co., Ltd., Gyeonggi-do",
    country: "South Korea",
    partner: "GS Co., Ltd.",
    academicYear: "2025-26",
    period: "16 June 2025 – 14 August 2025",
    description: "Completed research internship programme under industry guidance for ECE and AI-ML students.",
    participants: [
      { sno: 1, name: "Pathakunta Lokeswar Reddy", dept: "ECE", roll: "22691A04C4" },
      { sno: 2, name: "Muli Vijay Kumar Reddy", dept: "ECE", roll: "23695A0407" },
      { sno: 3, name: "Madamanchi Mohan Krishna", dept: "AI-ML", roll: "23691A3334" },
      { sno: 4, name: "Matli Vishnu Vardhan Naidu", dept: "CSN (Networks)", roll: "24695A4006" },
    ],
  },
  {
    title: "University of Aizu – Offline Research Internship",
    country: "Japan",
    partner: "University of Aizu",
    academicYear: "2024-25",
    period: "30 December 2024 – 4 March 2025",
    participants: [
      { sno: 1, name: "Pallavi Konduru", dept: "IV AI-B", roll: "21691a31b5" },
      { sno: 2, name: "Manasa Nelluri", dept: "IV AI-B", roll: "21691a3190" },
      { sno: 3, name: "Ayesha Penugonda", dept: "IV AI-A", roll: "21691a3117" },
      { sno: 4, name: "Sai Ganeswari Nallapoosala", dept: "IV AI-A", roll: "21691a3145" },
      { sno: 5, name: "Bindusree Gopalappa", dept: "IV DS", roll: "21691A3210" },
      { sno: 6, name: "Indu Eswar Shivani Nayuni", dept: "IV DS", roll: "21691a3237" },
    ],
  },
  {
    title: "Iwate Prefectural University – Offline Internship",
    country: "Japan",
    partner: "Iwate Prefectural University",
    academicYear: "2024-25",
    period: "16 January – 18 March 2025",
    participants: [
      { sno: 1, name: "Vivek Bhojanam", dept: "IV CSE", roll: "21691a05p1" },
      { sno: 2, name: "Teja Gorla", dept: "IV CSE", roll: "21691a05m9" },
      { sno: 3, name: "Maruthi Gowtham Reddy Kadapa", dept: "IV CSE", roll: "21691a05a8" },
      { sno: 4, name: "Sai Sandeep Arreddula", dept: "IV AI", roll: "21691a31e3" },
    ],
  },
  {
    title: "Asia University Taiwan – 2024 Summer Program",
    country: "Taiwan",
    partner: "Asia University",
    academicYear: "2024-25",
    period: "6 July 2024 – 16 August 2024",
    activity: "MoU Activity – Artificial Intelligence",
    participants: [
      { sno: 1, name: "Sai Mounish Kesarla Venkata", dept: "CST", roll: "21691A28I5" },
      { sno: 2, name: "Dadapeer Agraharam Shaik", dept: "CST", roll: "21691a2821" },
      { sno: 3, name: "Rishitha Chokkappagari", dept: "CSE", roll: "21691a05h3" },
      { sno: 4, name: "Praneetha Neelapareddigari", dept: "CSE", roll: "21691a05f0" },
      { sno: 5, name: "Sai Spoorthi Konkala", dept: "CSE", roll: "21691a05i8" },
      { sno: 6, name: "Ameya Sree Kasa", dept: "CS-AI", roll: "21691a3110" },
      { sno: 7, name: "Dhanush Reddy Chinthaparthy Reddy", dept: "CS-AI", roll: "21691a3134" },
      { sno: 8, name: "Raiyan Ali Syed", dept: "CS-DS", roll: "21691a3271" },
      { sno: 9, name: "Indu Eswar Shivani Nayuni", dept: "CS-DS", roll: "21691a3237" },
      { sno: 10, name: "Poojitha Nagishetti", dept: "CS-DS", roll: "21691a3267" },
    ],
  },
  // ── 2023-24 ──────────────────────────────────────────────────────────────
  {
    title: "University of Aizu – Research Internship",
    country: "Japan",
    partner: "University of Aizu",
    academicYear: "2023-24",
    period: "17 January – 20 March 2024",
    activity: "Non-MoU Activity",
    participants: [
      { sno: 1, name: "Charan Teja Marrimanu", dept: "IV AI (2020-2024)", roll: "21695A3101" },
      { sno: 2, name: "Hareesh Kumar Yerragolla", dept: "IV AI (2020-2024)", roll: "20691A3116" },
    ],
  },
  {
    title: "Iwate Prefectural University – Research Internship",
    country: "Japan",
    partner: "Iwate Prefectural University",
    academicYear: "2023-24",
    period: "5 January – 29 March 2024",
    activity: "MoU Activity",
    participants: [
      { sno: 1, name: "Tahaseen Naguru", dept: "IV CSE-CS (2020-2024)", roll: "20691A3744" },
      { sno: 2, name: "Mokshitha Reedy Busireddy", dept: "IV CSE-CS (2020-2024)", roll: "20691A3730" },
      { sno: 3, name: "Chaitanya Kumar Kurra", dept: "IV CSE-CS (2020-2024)", roll: "20691A3706" },
    ],
  },
  {
    title: "Research Internship – HEIG-VD, Switzerland (Virtual)",
    country: "Switzerland",
    partner: "HEIG-VD (Prof. Cédric Bornand)",
    academicYear: "2023-24",
    period: "4 months (Virtual)",
    activity: "Non-MoU Activity",
    participants: [
      { sno: 1, name: "Sine Nitesh", dept: "IV CSE-B (2020-2024)", roll: "20691A05B4" },
      { sno: 2, name: "Venkata Puneeth Chowdary Gangarapu", dept: "IV CSE-D (2020-2024)", roll: "20691A05l8" },
    ],
  },
  // ── 2021-22 ──────────────────────────────────────────────────────────────
  {
    title: "Nanyang Technological University – India Connect Program",
    country: "Singapore",
    partner: "Nanyang Technological University (NTU)",
    academicYear: "2021-22",
    period: "3 August – 31 December 2021",
    activity: "Non-MoU Activity",
    participants: [
      { sno: 1, name: "K V N S Jayanth Sarma", dept: "ECE (2018-2022)", roll: "18691A0474" },
    ],
  },
  // ── 2019-20 ──────────────────────────────────────────────────────────────
  {
    title: "Innopolis University – Research Internship",
    country: "Russia",
    partner: "Innopolis University",
    academicYear: "2019-20",
    period: "15 January – 10 April 2020",
    participants: [
      { sno: 1, name: "Sunil Reddy Aramreddys", dept: "CSE (2016-20)", roll: "16691A0598" },
      { sno: 2, name: "Gnana Sanjeev Majjari", dept: "ECE (2016-20)", roll: "16691A0430" },
      { sno: 3, name: "Mohammed Sohel Madirepalle", dept: "MECH (2016-20)", roll: "16691A03C9" },
      { sno: 4, name: "Yugal Kishore Nadimicherla", dept: "MECH (2016-20)", roll: "16691A03B9" },
      { sno: 5, name: "Madhava Reddy Pesala", dept: "MECH (2016-20)", roll: "16691A03C7" },
      { sno: 6, name: "Nagendra Babu Vallepu", dept: "MECH (2016-20)", roll: "17695A0355" },
      { sno: 7, name: "Sailokesh Ramesh", dept: "MECH (2016-20)", roll: "16691A0359" },
    ],
  },
  {
    title: "Asia University Taiwan – Offline Internship",
    country: "Taiwan",
    partner: "Asia University",
    academicYear: "2019-20",
    period: "3 February – 2 April 2020",
    participants: [
      { sno: 1, name: "Ramyasree", dept: "ECE (2016-20)", roll: "17695A0435" },
      { sno: 2, name: "Issac", dept: "ECE (2016-20)", roll: "16691A0445" },
      { sno: 3, name: "Teja Venkata Sai", dept: "CSE (2016-20)", roll: "16691A05A1" },
    ],
  },
  {
    title: "National Chiao Tung University (NCTU) – Internship",
    country: "Taiwan",
    partner: "National Chiao Tung University",
    academicYear: "2019-20",
    period: "3 February – 2 April 2020",
    participants: [
      { sno: 1, name: "Susmitha Dupati", dept: "ECE (2016-20)", roll: "16691A04F5" },
      { sno: 2, name: "Sai Kumar Naidu Peddi Neni", dept: "ECE (2016-20)", roll: "16691A04E2" },
    ],
  },
  {
    title: "National Chung Cheng University (NCCU) – Internship",
    country: "Taiwan",
    partner: "National Chung Cheng University",
    academicYear: "2019-20",
    period: "15 June – 15 September 2019",
    participants: [
      { sno: 1, name: "T. Varsha", dept: "ECE (2016-20)", roll: "16691A04G9" },
    ],
  },
  // ── 2018-19 ──────────────────────────────────────────────────────────────
  {
    title: "Asia University – First Batch Internship Programme",
    country: "Taiwan",
    partner: "Asia University",
    academicYear: "2017-18",
    period: "2017-18",
    description: "First batch of MITS students completed a fully paid semester internship at Asia University, Taichung, Taiwan.",
    participants: [
      { sno: 1, name: "T. Pruthvi Naidu", dept: "EEE (2014-18)", roll: "-" },
      { sno: 2, name: "C. Jhansi Lakshmi", dept: "ECE (2014-18)", roll: "-" },
      { sno: 3, name: "Manikanta T C", dept: "ECE (2014-18)", roll: "-" },
      { sno: 4, name: "Manoj Kumar Reddy T", dept: "ECE (2014-18)", roll: "-" },
      { sno: 5, name: "S. Mukula", dept: "ECE (2014-18)", roll: "-" },
    ],
  },
  {
    title: "Asia University – Second Batch Internship Programme",
    country: "Taiwan",
    partner: "Asia University",
    academicYear: "2018-19",
    period: "2018-19",
    description: "Second batch of MITS students participated in the Asia University internship programme in Taiwan.",
    participants: [
      { sno: 1, name: "P. Arjun Chakravarthi", dept: "ECE (2015-19)", roll: "-" },
      { sno: 2, name: "K. Jayasree", dept: "ECE (2015-19)", roll: "-" },
    ],
  },
  {
    title: "National Chiao Tung University (NCTU) – Professor-Level Programme",
    country: "Taiwan",
    partner: "National Chiao Tung University",
    academicYear: "2018-19",
    period: "2018-19",
    description: "Professor-level academic exposure and collaboration with National Chiao Tung University, Taiwan.",
    participants: [
      { sno: 1, name: "Sucharitha C", dept: "ECE (2015-19)", roll: "-" },
      { sno: 2, name: "Umeshwar Reddy N", dept: "ECE (2015-19)", roll: "-" },
    ],
  },
  {
    title: "Nanyang Technological University – India Connect Programme",
    country: "Singapore",
    partner: "Nanyang Technological University",
    academicYear: "2018-19",
    period: "2018-19",
    description: "Student participation in the NTU India Connect Programme with academic exposure in Singapore.",
    participants: [
      { sno: 1, name: "Sai Kumar Perimbeti", dept: "Mechanical (2015-19)", roll: "-" },
    ],
  },
  {
    title: "Karlsruhe Institute of Technology – Professor-Level Programme",
    country: "Germany",
    partner: "Karlsruhe Institute of Technology",
    academicYear: "2018-19",
    period: "2018-19",
    description: "Professor-level academic collaboration and exchange with Karlsruhe Institute of Technology, Germany.",
    participants: [
      { sno: 1, name: "Sai Praneeth R", dept: "Mechanical (2015-19)", roll: "-" },
      { sno: 2, name: "Yuvasree M", dept: "Mechanical (2015-19)", roll: "-" },
    ],
  },
  {
    title: "Iwate Prefectural University – Japan Internship",
    country: "Japan",
    partner: "Iwate Prefectural University",
    academicYear: "2018-19",
    period: "2018-19",
    description: "Student internship and academic engagement programme at Iwate Prefectural University, Japan.",
    participants: [
      { sno: 1, name: "Kavya Sree Gajjala", dept: "CSE (2015-19)", roll: "-" },
      { sno: 2, name: "Ashika Kothamachu Ramesh", dept: "CSE (2015-19)", roll: "-" },
    ],
  },
  {
    title: "Internship in Rise and Shine Group of Companies – Dubai",
    country: "UAE",
    partner: "Rise and Shine Group of Companies",
    academicYear: "2018-19",
    period: "2018-19",
    description: "Industry internship programme in Dubai for civil engineering students with Rise and Shine Group of Companies.",
    participants: [
      { sno: 1, name: "Ashok Kumar P", dept: "Civil (2015-19)", roll: "-" },
      { sno: 2, name: "Asif Hussain S", dept: "Civil (2015-19)", roll: "-" },
      { sno: 3, name: "Ganesh Kumar Reddy S", dept: "Civil (2015-19)", roll: "-" },
      { sno: 4, name: "Moinuddin Shaik N", dept: "Civil (2015-19)", roll: "-" },
      { sno: 5, name: "Chiranjeevi P", dept: "Civil (2015-19)", roll: "-" },
    ],
  },
  {
    title: "University of Eastern Finland – Professor-Level Programme",
    country: "Finland",
    partner: "University of Eastern Finland",
    academicYear: "2018-19",
    period: "2018-19",
    description: "Professor-level academic exchange and collaboration with the University of Eastern Finland, Finland.",
    participants: [
      { sno: 1, name: "Susmitha Dupati", dept: "ECE (2016-20)", roll: "-" },
      { sno: 2, name: "Kutagulla Issac", dept: "ECE (2016-20)", roll: "-" },
      { sno: 3, name: "Sai Kumar Kesarla Venkata", dept: "ECE (2016-20)", roll: "-" },
    ],
  },
  {
    title: "Internship in Egypt – AIESEC Leadership Development Experience",
    country: "Egypt",
    partner: "AIESEC",
    academicYear: "2017-18",
    period: "18 June – 18 July 2017",
    description: "Leadership development internship experience in Egypt organised through AIESEC (programme duration: 2 months).",
    participants: [
      { sno: 1, name: "Sailokesh Ramesh", dept: "Mechanical (2016-20)", roll: "-" },
    ],
  },
  {
    title: "Asia Pacific Innovation Academy (APIA) – International Innovation Accelerator Program",
    country: "China",
    partner: "Chinachem Foundation & European Innovation Institute",
    academicYear: "2018-19",
    period: "19 July – 9 August 2018",
    description: "The 2018 APIA International Innovation Accelerator Program held at Shenzhen University, China. 40+ teams, 350+ participants & speakers with mentors from Silicon Valley, EU & Asia, 50+ nationalities. From MITS, Sucharitha's team was selected in top 5 among 42 teams and awarded Business Mentoring by HAG Consulting.",
    participants: [
      { sno: 1, name: "Arjun Chakravarthi P", dept: "ECE (2015-19)", roll: "15691A04N8", extra: "CDO at Gotch'ya, APIA Delegate at European Innovation Academy" },
      { sno: 2, name: "Sucharitha C", dept: "ECE (2015-19)", roll: "15699A04A0", extra: "CTO at B2Brain, APIA Delegate at European Innovation Academy" },
      { sno: 3, name: "Umeshwar Reddy N", dept: "ECE (2015-19)", roll: "15699A04A8", extra: "CEO & CTO at Kids Matter, APIA Delegate at European Innovation Academy" },
    ],
  },
  {
    title: "Global Immersion Program – Providence University, Taiwan",
    country: "Taiwan",
    partner: "Providence University",
    academicYear: "2018-19",
    period: "16 December 2018 – 11 January 2019",
    description: "15 students and 5 faculty attended two programmes: (1) Special topics on IoT and Big Data Analytics (16–25 Dec 2018) and (2) Introduction to Big Data & Artificial Intelligence (2–11 Jan 2019). Sponsored by Providence University (PU), Taiwan.",
    participants: [
      { sno: 1, name: "Sunil Kumar Pattem", dept: "EEE", roll: "15699a0223", extra: "Student" },
      { sno: 2, name: "Harinatha Reddy Digavinti", dept: "EEE", roll: "15699a0210", extra: "Student" },
      { sno: 3, name: "Sai Sumanth Dega", dept: "EEE", roll: "15691a0258", extra: "Student" },
      { sno: 4, name: "Kodandaramu Saraipulikonda", dept: "EEE", roll: "15691A0225", extra: "Student" },
      { sno: 5, name: "Prem Kumar Gutta", dept: "EEE", roll: "15691A0247", extra: "Student" },
      { sno: 6, name: "Yandapalli Siva Reddy", dept: "ECE", roll: "15699a0494", extra: "Student" },
      { sno: 7, name: "Sravani Varapana", dept: "ECE", roll: "15699a0497", extra: "Student" },
      { sno: 8, name: "Sudheer Ragula", dept: "ECE", roll: "15699A04A1", extra: "Student" },
      { sno: 9, name: "Sai Santhosh Dinnuri", dept: "ECE", roll: "15699a0488", extra: "Student" },
      { sno: 10, name: "Umamaheswari Kaveti", dept: "ECE", roll: "16690a0402", extra: "Student" },
      { sno: 11, name: "M. Lokesh Gorrela Krishna Reddy", dept: "CSE", roll: "15691a0567", extra: "Student" },
      { sno: 12, name: "Srinath Laka", dept: "MECH", roll: "16695A0339", extra: "Student" },
      { sno: 13, name: "Patan Irfan Khan", dept: "MCA", roll: "16691F0010", extra: "Student" },
      { sno: 14, name: "Vamsi Thummakula", dept: "MCA", roll: "17699f00a0", extra: "Student" },
      { sno: 15, name: "Venkatesh Pagadala", dept: "MCA", roll: "17691f0056", extra: "Student" },
      { sno: 16, name: "Gaurav Varshney", dept: "ECE", roll: "Faculty", extra: "Faculty" },
      { sno: 17, name: "Kuppusamy Pothanicker", dept: "CSE", roll: "Faculty", extra: "Faculty" },
      { sno: 18, name: "Prasanna Kumar Duvvi", dept: "MECH", roll: "Faculty", extra: "Faculty" },
      { sno: 19, name: "Siva Shankar", dept: "MCA", roll: "Faculty", extra: "Faculty" },
      { sno: 20, name: "Subhasish Mahapatra", dept: "EEE", roll: "Faculty", extra: "Faculty" },
    ],
  },
  {
    title: "Internship at Jenmars Technical Services LLC – Dubai",
    country: "UAE",
    partner: "Jenmars Technical Services LLC",
    academicYear: "2017-18",
    period: "2017-18",
    description: "Industrial internship opportunity in Dubai with Jenmars Technical Services LLC.",
    participants: [
      { sno: 1, name: "Harsha Vardhan Bandarla", dept: "MBA (2016-18)", roll: "-" },
      { sno: 2, name: "B. Chitanya Kumar", dept: "MBA (2016-18)", roll: "-" },
    ],
  },
];

export const internshipArchives: never[] = [];

/* ---------- FELLOWSHIPS (Scholarships / Programmes referenced) ---------- */

export const fellowships: ProgramCard[] = [
  {
    title: "NTU India Connect Research Internship",
    country: "Singapore",
    partner: "Nanyang Technological University",
    period: "August – December",
    description:
      "Fully-funded research internship at NTU Singapore for outstanding undergraduate students in engineering and applied sciences.",
  },
  {
    title: "USC Viterbi Scholarship",
    country: "USA",
    partner: "University of Southern California",
    description:
      "Merit-based scholarship for research internships at the USC Viterbi School of Engineering.",
  },
  {
    title: "S. N. Bose Scholars Program (Fulbright)",
    country: "USA",
    partner: "IUSSTF / Fulbright",
    description:
      "Prestigious fellowship for Indian undergraduates to pursue a 10-12 week summer research internship at premier US universities.",
  },
  {
    title: "Globalink Research Internship – MITACS",
    country: "Canada",
    partner: "MITACS",
    description:
      "12-week research internship at leading Canadian universities for talented undergraduate students.",
  },
  {
    title: "Sakura Science Exchange Program",
    country: "Japan",
    partner: "Japan Science and Technology Agency (JST)",
    description:
      "Short-term exchange programme inviting Indian students & faculty for collaborative research at Japanese institutions.",
    reportUrl:
      "https://mits.ac.in/assets/pdf/event/Report%20on%20Sakura%20Science%20Exchange%20Program%202025.pdf",
  },
  {
    title: "University Innovation Fellows (Stanford d.school)",
    country: "USA",
    partner: "Hasso Plattner Institute of Design, Stanford University",
    description:
      "Global student leadership programme empowering students to become agents of change on their campus.",
  },
];

/* ---------- GLOBAL IMMERSION / SUMMER / WINTER ---------- */

export const globalPrograms: ProgramCard[] = [
  {
    title: "Global Immersion Program for Indian Students and Teachers – Providence University, Taiwan",
    country: "Taiwan",
    partner: "Providence University",
    academicYear: "2018-19",
    period: "16 December 2018 – 11 January 2019",
    description: "15 students and 5 faculty members attended the Global Immersion Program sponsored by Providence University (PU), Taiwan. The programme covered IoT and Big Data Analytics and Introduction to Big Data & Artificial Intelligence.",
    participants: [
      { sno: 1, name: "Sunil Kumar Pattem", dept: "EEE", roll: "15699A0223", extra: "Student" },
      { sno: 2, name: "Harinatha Reddy Digavinti", dept: "EEE", roll: "15699A0210", extra: "Student" },
      { sno: 3, name: "Sai Sumanth Dega", dept: "EEE", roll: "15691A0258", extra: "Student" },
      { sno: 4, name: "Kodandaramu Saraipulikonda", dept: "EEE", roll: "15691A0225", extra: "Student" },
      { sno: 5, name: "Prem Kumar Gutta", dept: "EEE", roll: "15691A0247", extra: "Student" },
      { sno: 6, name: "Yandapalli Siva Reddy", dept: "ECE", roll: "15699A0494", extra: "Student" },
      { sno: 7, name: "Sravani Varapana", dept: "ECE", roll: "15699A0497", extra: "Student" },
      { sno: 8, name: "Sudheer Ragula", dept: "ECE", roll: "15699A04A1", extra: "Student" },
      { sno: 9, name: "Sai Santhosh Dinnuri", dept: "ECE", roll: "15699A0488", extra: "Student" },
      { sno: 10, name: "Umamaheswari Kaveti", dept: "ECE", roll: "16690A0402", extra: "Student" },
      { sno: 11, name: "M. Lokesh Gorrela Krishna Reddy", dept: "CSE", roll: "15691A0567", extra: "Student" },
      { sno: 12, name: "Srinath Laka", dept: "MECH", roll: "16695A0339", extra: "Student" },
      { sno: 13, name: "Patan Irfan Khan", dept: "MCA", roll: "16691F0010", extra: "Student" },
      { sno: 14, name: "Vamsi Thummakula", dept: "MCA", roll: "17699F00A0", extra: "Student" },
      { sno: 15, name: "Venkatesh Pagadala", dept: "MCA", roll: "17691F0056", extra: "Student" },
      { sno: 16, name: "Gaurav Varshney", dept: "ECE", roll: "Faculty", extra: "Faculty" },
      { sno: 17, name: "Kuppusamy Pothanicker", dept: "CSE", roll: "Faculty", extra: "Faculty" },
      { sno: 18, name: "Prasanna Kumar Duvvi", dept: "MECH", roll: "Faculty", extra: "Faculty" },
      { sno: 19, name: "Siva Shankar", dept: "MCA", roll: "Faculty", extra: "Faculty" },
      { sno: 20, name: "Subhasish Mahapatra", dept: "EEE", roll: "Faculty", extra: "Faculty" },
    ],
  },
  {
    title: "Asia Pacific Innovation Academy – International Innovation Accelerator Program",
    country: "China",
    partner: "Asia Pacific Innovation Academy",
    academicYear: "2018-19",
    period: "19 July – 9 August 2018",
    description: "The 2018 APIA International Innovation Accelerator Program was conducted at Shenzhen University, China, with 40+ teams, 350+ participants and speakers, and 50+ nationalities. From MITS, the team led by Sucharitha C was selected among the top 5 teams and received business mentoring from HAG Consulting.",
    participants: [
      { sno: 1, name: "Arjun Chakravarthi P", dept: "ECE (2015-19)", roll: "15691A04N8", extra: "CDO at Gotch'ya, APIA Delegate" },
      { sno: 2, name: "Sucharitha C", dept: "ECE (2015-19)", roll: "15699A04A0", extra: "CTO at B2Brain, APIA Delegate" },
      { sno: 3, name: "Umeshwar Reddy N", dept: "ECE (2015-19)", roll: "15699A04A8", extra: "CEO & CTO at Kids Matter, APIA Delegate" },
    ],
  },
  {
    title: "Asia University Summer Program (Offline)",
    country: "Taiwan",
    partner: "Asia University",
    period: "6 July – 16 August 2024",
    description: "Offline intensive Summer Program in Artificial Intelligence and smart technologies at Taichung, Taiwan.",
    participants: [
      { sno: 1, name: "Sai Mounish Kesarla Venkata", dept: "CST ", roll: "21691A28I5", extra: "Artificial Intelligence" },
      { sno: 2, name: "Dadapeer Agraharam Shaik", dept: "CST ", roll: "21691a2821", extra: "Artificial Intelligence" },
      { sno: 3, name: "Rishitha Chokkappagari", dept: "CSE", roll: "21691a05h3", extra: "Artificial Intelligence" },
      { sno: 4, name: "Praneetha Neelapareddigari", dept: "CSE", roll: "21691a05f0", extra: "Artificial Intelligence" },
      { sno: 5, name: "Sai Spoorthi Konkala", dept: "CSE", roll: "21691a05i8", extra: "Artificial Intelligence" },
      { sno: 6, name: "Ameya Sree Kasa", dept: "CS-AI", roll: "21691a3110", extra: "Artificial Intelligence" },
      { sno: 7, name: "Dhanush Reddy Chinthaparthy Reddy", dept: "CS-AI", roll: "21691a3134", extra: "Artificial Intelligence" },
      { sno: 8, name: "Raiyan Ali Syed", dept: "CS-DS", roll: "21691a3271", extra: "Artificial Intelligence" },
      { sno: 9, name: "Indu Eswar Shivani Nayuni", dept: "CS-DS", roll: "21691a3237", extra: "Artificial Intelligence" },
      { sno: 10, name: "Poojitha Nagishetti", dept: "CS-DS", roll: "21691a3267", extra: "Artificial Intelligence" },
    ],
  },
  {
    title: "Virtual Summer Program of Asia University",
    country: "Taiwan",
    partner: "Asia University",
    period: "26 June – 21 August 2023",
    description: "Online virtual exchange tracks covering Artificial Intelligence & AI Applications in Management.",
    participants: [
      { sno: 1, name: "Susindra Reddy Bandi", dept: "AI-DS", roll: "20691A3156", extra: "Artificial Intelligence" },
      { sno: 2, name: "Gayathri Priya Chennama Reddy Gari", dept: "AI-DS", roll: "20691A3112", extra: "Artificial Intelligence" },
      { sno: 3, name: "Hareesh Kumar Yerragolla", dept: "AI-DS", roll: "20691A3116", extra: "Artificial Intelligence" },
      { sno: 4, name: "Bindusree G.", dept: "AI-DS", roll: "21691A3210", extra: "Artificial Intelligence" },
      { sno: 5, name: "Niharika Kapu", dept: "AI-DS", roll: "20691A05A8", extra: "Artificial Intelligence" },
      { sno: 6, name: "Sai Gayathri Mukku", dept: "AI-DS", roll: "20691A3147", extra: "Artificial Intelligence" },
      { sno: 7, name: "Sai Manogyna K", dept: "AI-DS", roll: "20691A3148", extra: "Artificial Intelligence" },
      { sno: 8, name: "Umesh Chandra Sompalli Penchala", dept: "AI-DS", roll: "20691A3140", extra: "Artificial Intelligence" },
      { sno: 9, name: "Harikrishna Chidathala", dept: "AI-DS", roll: "21695A3103", extra: "Artificial Intelligence" },
      { sno: 10, name: "Hemalatha Vijapuram", dept: "AI-DS", roll: "20691A3119", extra: "Artificial Intelligence" },
      { sno: 11, name: "Jaswanth Muthineedi", dept: "AI-DS", roll: "21691A3168", extra: "Artificial Intelligence" },
      { sno: 12, name: "Dhanush Reddy Chinthaparthy Reddy", dept: "AI-DS", roll: "21691A3134", extra: "Artificial Intelligence" },
      { sno: 13, name: "Rishitha C", dept: "CSE", roll: "21691A05H3", extra: "Artificial Intelligence" },
      { sno: 14, name: "Mansoor Shaik", dept: "AI-DS", roll: "21691A3195", extra: "Artificial Intelligence" },
      { sno: 15, name: "Lakshmi Chandana Akkisetty", dept: "CSE", roll: "21691A0586", extra: "Artificial Intelligence" },
      { sno: 16, name: "Lakshmi Charani Akkisetty", dept: "CSE", roll: "21691A0587", extra: "Artificial Intelligence" },
      { sno: 17, name: "Abhitha Lakshmi Povakula", dept: "AIDS", roll: "21691A3102", extra: "Artificial Intelligence" },
      { sno: 18, name: "Manikantha Rudrapankti", dept: "MECH", roll: "21695A03l7", extra: "Artificial Intelligence" },
      { sno: 19, name: "Ameya Sree Kasa", dept: "AI-DS", roll: "21691A3110", extra: "Artificial Intelligence" },
      { sno: 20, name: "Shaik Ishrat", dept: "DI-DS", roll: "21691A3164", extra: "Artificial Intelligence" },
      { sno: 21, name: "Balabharathi Talla", dept: "MBA", roll: "22691E0020", extra: "AI Application in Management" },
      { sno: 22, name: "Mithila Katepalle", dept: "MBA", roll: "22691E00A0", extra: "AI Application in Management" },
      { sno: 23, name: "Muskan shaik", dept: "MBA", roll: "22691E00B0", extra: "AI Application in Management" },
      { sno: 24, name: "Bhavana Polem", dept: "MBA", roll: "22691E0028", extra: "AI Application in Management" },
      { sno: 25, name: "Khushnuma shaik", dept: "MBA", roll: "22691E0076", extra: "AI Application in Management" },
      { sno: 26, name: "Praveen Kimar Pogaku", dept: "MBA", roll: "22691E00 D1", extra: "AI Application in Management" },
      { sno: 27, name: "Navaneetha Y.", dept: "MBA", roll: "22691E00B4", extra: "AI Application in Management" },
      { sno: 28, name: "Latha Medikurthi", dept: "MBA", roll: "22691E0081", extra: "AI Application in Management" },
      { sno: 29, name: "Dhana Lakshmi Bompalli", dept: "MBA", roll: "22691E0040", extra: "AI Application in Management" },
      { sno: 30, name: "Malika Devi Karamala", dept: "MBA", roll: "22691E0089", extra: "AI Application in Management" },
      { sno: 31, name: "Saradhi Kamalesh Arkad", dept: "MBA", roll: "22691E00 F7", extra: "AI Application in Management" },
      { sno: 32, name: "Ismail Kalasamudram", dept: "MBA", roll: "22691E0060", extra: "AI Application in Management" },
      { sno: 33, name: "Vishnu Vardhan Rao S", dept: "MBA", roll: "22691E00J5", extra: "AI Application in Management" },
      { sno: 34, name: "Sai Sandhya Tamatam", dept: "MBA", roll: "22691E00 E9", extra: "AI Application in Management" },
      { sno: 35, name: "Shreya Annam", dept: "MBA", roll: "22691E00G1", extra: "AI Application in Management" },
      { sno: 36, name: "Roshan Ali N", dept: "MBA", roll: "22691E00E4", extra: "AI Application in Management" },
      { sno: 37, name: "Reddy Jayasree P", dept: "MBA", roll: "22691E00E1", extra: "AI Application in Management" },
    ],
  },
  {
    title: "Asia University Virtual Exchange Program – Spring Semester 2023",
    country: "Taiwan",
    partner: "Asia University",
    period: "13 February – 16 June 2023",
    description: "Virtual academic exchange modules spanning web design, machine learning, digital image processing, and auditing.",
    participants: [
      { sno: 1, name: "VAMSIDHAR REDDY ANNAREDDY", dept: "MBA", roll: "21691E00I8", extra: "Web Design" },
      { sno: 2, name: "SUMANTH LINGAMPALLI", dept: "CSE", roll: "20691A05J7", extra: "Web Design" },
      { sno: 3, name: "MOHAMMAD UMAR SHAIK", dept: "CSE", roll: "21695A0505", extra: "Web Design" },
      { sno: 4, name: "VENKATA SWETHA SURABOINA", dept: "CSE", roll: "20691A05M0", extra: "Web Design" },
      { sno: 5, name: "GOUTHAM SARADESI", dept: "CSE", roll: "20691A3504", extra: "Web Design" },
      { sno: 6, name: "RAKSHITHA KAMMARA", dept: "ECE", roll: "21695A0493", extra: "Web Design" },
      { sno: 7, name: "SAI THANUSH REDDY KAMATHAM", dept: "CSE", roll: "21695A2818", extra: "Web Design" },
      { sno: 8, name: "AVINASH THALUPULA", dept: "CSE", roll: "20691A05I1", extra: "Web Design" },
      { sno: 9, name: "SUPRIYA KONDETI", dept: "CSE", roll: "20691A05J9", extra: "Web Design" },
      { sno: 10, name: "GOVARDHAN SIVAKAVI", dept: "CSE", roll: "21695A2802", extra: "Machine Learning" },
      { sno: 11, name: "MONISHA POTHAMSETTY", dept: "CSE", roll: "20691A0592", extra: "Machine Learning" },
      { sno: 12, name: "SHAMANTH GIDDALURU", dept: "MECH", roll: "21695A0392", extra: "Machine Learning" },
      { sno: 13, name: "SUSHMANTH MUPPALLA", dept: "MECH", roll: "21695A03G3", extra: "Machine Learning" },
      { sno: 14, name: "NAVEEN RAMANJI", dept: "MECH", roll: "21695A03M1", extra: "Machine Learning" },
      { sno: 15, name: "MAHESH POLINENI", dept: "CSE", roll: "20691A0581", extra: "Digital Image Processing" },
      { sno: 16, name: "VAMSI YELAKAPATI", dept: "CSE", roll: "20691A05l0", extra: "Digital Image Processing" },
      { sno: 17, name: "NITISH SINE", dept: "CSE", roll: "20691A05B4", extra: "Digital Image Processing" },
      { sno: 18, name: "MOHAMMAD SUHAIL SHAIK", dept: "CSE", roll: "20691A0588", extra: "Digital Image Processing" },
      { sno: 19, name: "MAHAMMAD ALI PATHAN", dept: "CSE", roll: "20691A0578", extra: "Digital Image Processing" },
      { sno: 20, name: "MOULIDHAR PULI", dept: "CSE", roll: "21695A0518", extra: "Digital Image Processing" },
      { sno: 21, name: "SAHITYA J", dept: "CSE", roll: "20691A05B9", extra: "Digital Image Processing" },
      { sno: 22, name: "SAI MOHAN SRIRAM GUVVALA", dept: "CSE", roll: "20691A3528", extra: "Digital Image Processing" },
      { sno: 23, name: "VENKATA PUNEETH CHOWDARY GANGARAPU", dept: "CSE", roll: "20691A05L8", extra: "Digital Image Processing" },
      { sno: 24, name: "RAVINDRA SAI MANGALA", dept: "CSE", roll: "21695A0521", extra: "Digital Image Processing" },
      { sno: 25, name: "HARSHINI MARPURI", dept: "AI-DS", roll: "20691A3118", extra: "Digital Image Processing" },
      { sno: 26, name: "LINGALA DEVA DINESH", dept: "AI-DS", roll: "20691A3109", extra: "Digital Image Processing" },
      { sno: 27, name: "MANVITHA BL", dept: "CSE", roll: "20691A0585", extra: "Digital Image Processing" },
      { sno: 28, name: "GEETHA PRIYA DARSHINI VUJJA", dept: "AI-DS", roll: "20691A3114", extra: "Digital Image Processing" },
      { sno: 29, name: "HARSHITHA MARPURI", dept: "CSE", roll: "20691A3507", extra: "Digital Image Processing" },
      { sno: 30, name: "MAHESH BABU KONA", dept: "AI-DS", roll: "20691A3130", extra: "Digital Image Processing" },
      { sno: 31, name: "WAHAZ N.B", dept: "AI-DS", roll: "20691A3162", extra: "Digital Image Processing" },
      { sno: 32, name: "PRAHARSHA M", dept: "CST", roll: "20691A28D5", extra: "Digital Image Processing" },
      { sno: 33, name: "SIDDESWARA RAMSHETTI", dept: "CST", roll: "20691A28F7", extra: "Digital Image Processing" },
      { sno: 34, name: "SUBBARAYUDU BIRLA C", dept: "CST", roll: "20691A28G2", extra: "Digital Image Processing" },
      { sno: 35, name: "DHARANIDHAR BEERE", dept: "AI-DS", roll: "20691A3110", extra: "Digital Image Processing" },
      { sno: 36, name: "BHAVYA SRI K", dept: "AI-DS", roll: "206911A3107", extra: "Digital Image Processing" },
      { sno: 37, name: "PAVANI RAMISETTY", dept: "AI-DS", roll: "20691A3138", extra: "Digital Image Processing" },
      { sno: 38, name: "PRADEEPTHI SANDEPOGU", dept: "AI-DS", roll: "20691A3141", extra: "Digital Image Processing" },
      { sno: 39, name: "BHAVANA RAMISETTY", dept: "AI-DS", roll: "20691A3106", extra: "Digital Image Processing" },
      { sno: 40, name: "REDDY DEEPIKA GANJIKUNTA", dept: "CST", roll: "20691A28D8", extra: "Digital Image Processing" },
      { sno: 41, name: "VIKAS AMIDALA", dept: "CSE", roll: "20691A3548", extra: "Digital Image Processing" },
      { sno: 42, name: "SHREYA PALADI", dept: "CST", roll: "20691A28F6", extra: "Digital Image Processing" },
      { sno: 43, name: "SYED JAVEED HUSSAIN", dept: "MBA", roll: "21691E00I5", extra: "Marketing Management" },
      { sno: 44, name: "SALMANBASHA SHAIK", dept: "MBA", roll: "21691E00F5", extra: "Marketing Management" },
      { sno: 45, name: "MUHEED AHMED SHAIK", dept: "MBA", roll: "21691E00F2", extra: "Marketing Management" },
      { sno: 46, name: "ALTHAF SHAIK", dept: "MBA", roll: "21691E00D3", extra: " Marketing Management" },
      { sno: 47, name: "SHAZIYA SHAIK", dept: "MBA", roll: "21691E00F6", extra: "Marketing Management" },
      { sno: 48, name: "SABAALIYA SHAIK", dept: "MBA", roll: "21691E00F4", extra: "Auditing" },
      { sno: 49, name: "SAI JAHNAVI ALUVALA", dept: "MBA", roll: "21691E00C4", extra: "Auditing" },
      { sno: 50, name: "SAI JYOSHNA ALUVALA", dept: "MBA", roll: "21691E00C5", extra: "Auditing" },
      { sno: 51, name: "SURESH B", dept: "MBA", roll: "21691E00I0", extra: "Auditing" },
      { sno: 52, name: "KOWSAR NIGAR SHAIK", dept: "MBA", roll: "21691E00F0", extra: "Auditing" },
      { sno: 53, name: "REDDY BHAVAGANA MITRA B", dept: "MBA", roll: "21691E0065", extra: "Auditing" },
      { sno: 54, name: "MRUNALINI MARAM", dept: "MBA", roll: "21691E0084", extra: "Auditing" },
      { sno: 55, name: "SWATHI AVULAMACHAIAHGARI", dept: "MBA", roll: "21691E00I3", extra: " Auditing" },
      { sno: 56, name: "REDDY KUMARI YANAMALA", dept: "MBA", roll: "21691E00B6", extra: "Auditing" },
    ],
  },
  {
    title: "Asia University Virtual Summer Program 2022",
    country: "Taiwan",
    partner: "Asia University",
    period: "1 – 24 August 2022",
    description: "Online summer courses in AI Applications in Management for MBA and management students.",
    participants: [
      { sno: 1, name: "A GIRISH", dept: "MBA", roll: "21691E0030", extra: "AI Application in Management" },
      { sno: 2, name: "ALLEMPALLI ARAVIND", dept: "MBA", roll: "21691E0009", extra: "AI Application in Management" },
      { sno: 3, name: "ALUVALA SAI JAHNAVI", dept: "MBA", roll: "21691E00C4", extra: "AI Application in Management" },
      { sno: 4, name: "ALUVALA SAI JYOSHNA", dept: "MBA", roll: "21691E00C5", extra: "AI Application in Management" },
      { sno: 5, name: "AVVAGARI DEEPTHI", dept: "MBA", roll: "21691E0022", extra: "AI Application in Management" },
      { sno: 6, name: "BAPANA PALLE MUNIPRASADU", dept: "MBA", roll: "21691E0086", extra: "AI Application in Management" },
      { sno: 7, name: "BEEMAVARAM SAI HARISH", dept: "MBA", roll: "21691E00C3", extra: "AI Application in Management" },
      { sno: 8, name: "BUKKE CHINNA NAGARJUNA NAIK", dept: "MBA", roll: "21691E0088", extra: "AI Application in Management" },
      { sno: 9, name: "DADUBAIGARI SADDAM HUSSAIN", dept: "MBA", roll: "21691E00C0", extra: "AI Application in Management" },
      { sno: 10, name: "DESUGARI MANOJ KUMAR", dept: "MBA", roll: "21691E0078", extra: "AI Application in Management" },
      { sno: 11, name: "EEGA PRIYANKA", dept: "MBA", roll: "21691E00A7", extra: "AI Application in Management" },
      { sno: 12, name: "GANTASALA MAHIDHAR", dept: "MBA", roll: "21691E0072", extra: "AI Application in Management" },
      { sno: 13, name: "GOPU NIRANJAN", dept: "MBA", roll: "21691E0098", extra: "AI Application in Management" },
      { sno: 14, name: "GUNDLAPALLI ANITHA", dept: "MBA", roll: "21691E0005", extra: "AI Application in Management" },
      { sno: 15, name: "HASANAPURAM KEERTHANA", dept: "MBA", roll: "21691E0056", extra: "AI Application in Management" },
      { sno: 16, name: "JINKALA KIRAN KUMAR", dept: "MBA", roll: "21691E0059", extra: "AI Application in Management" },
      { sno: 17, name: "K.HARINADH", dept: "MBA", roll: "21691E0033", extra: "AI Application in Management" },
      { sno: 18, name: "KANAKANTI RAJESWARI", dept: "MBA", roll: "21691E00E6", extra: "AI Application in Management" },
      { sno: 19, name: "KOLLA SANTHOSH KUMAR REDDY", dept: "MBA", roll: "21691E00c8", extra: "AI Application in Management" },
      { sno: 20, name: "KONDAKAMARALA NAWAZ", dept: "MBA", roll: "21691E0095", extra: "AI Application in Management" },
      { sno: 21, name: "KOPPALLI PREETHI", dept: "MBA", roll: "21691E00A6", extra: "AI Application in Management" },
      { sno: 22, name: "KOSUVARIPALLI NANDEESH", dept: "MBA", roll: "21691E0089", extra: "AI Application in Management" },
      { sno: 23, name: "KUMMARA KARTHIK", dept: "MBA", roll: "21691E0051", extra: "AI Application in Management" },
      { sno: 24, name: "MEKALA KALYAN KUMAR", dept: "MBA", roll: "21691E0049", extra: "AI Application in Management" },
      { sno: 25, name: "MUULLAN JAVID KHAN", dept: "MBA", roll: "21691E0042", extra: "AI Application in Management" },
      { sno: 26, name: "MUPPA RADHA", dept: "MBA", roll: "21691E00B0", extra: "AI Application in Management" },
      { sno: 27, name: "NALLABOTHULA RVATHI", dept: "MBA", roll: "21691E00B8", extra: "AI Application in Management" },
      { sno: 28, name: "NALLAGUTTA MANIKANTA REDDY", dept: "MBA", roll: "21691e0075", extra: "AI Application in Management" },
      { sno: 29, name: "NARAYANOLLA ANIL KUMAR", dept: "MBA", roll: "21691E0004", extra: "AI Application in Management" },
      { sno: 30, name: "P MASOOD ALI KHAN", dept: "MBA", roll: "21691E0079", extra: "AI Application in Management" },
      { sno: 31, name: "PAGADALA SAI KIRAN", dept: "MBA", roll: "201691E00E", extra: "AI Application in Management" },
      { sno: 32, name: "PATAN AYESHA NIKHATH", dept: "MBA", roll: "21691E0013", extra: "AI Application in Management" },
      { sno: 33, name: "RAMAKKAGARI HARSHITHA", dept: "MBA", roll: "21691E0035", extra: "AI Application in Management" },
      { sno: 34, name: "RAMINENI ATHREYA", dept: "MBA", roll: "21691E0012", extra: "AI Application in Management" },
      { sno: 35, name: "RAYACHOTI PRATHIMA", dept: "MBA", roll: "21691E00A5", extra: "AI Application in Management" },
      { sno: 36, name: "S.GOVARDHANA", dept: "MBA", roll: "21691E0031", extra: "AI Application in Management" },
      { sno: 37, name: "SHAIK HALIMA SADIYA", dept: "MBA", roll: "21691E00C9", extra: "AI Application in Management" },
      { sno: 38, name: "SHAIK INTHIYAZ", dept: "MBA", roll: "21691E00D1", extra: "AI Application in Management" },
      { sno: 39, name: "SHAIK KARISHMA", dept: "MBA", roll: "21691E00D2", extra: "AI Application in Management" },
      { sno: 40, name: "SHAIK MOHAMMAD SANIYA", dept: "MBA", roll: "21691E00F1", extra: "AI Application in Management" },
      { sno: 41, name: "SHAIK SHAFEEQ UL AMEEN", dept: "MBA", roll: "21691E0055", extra: "AI Application in Management" },
      { sno: 42, name: "SHAIK SHAHID AKHEEL", dept: "MBA", roll: "21691E0066", extra: "AI Application in Management" },
      { sno: 43, name: "SIVALA PRASANNA", dept: "MBA", roll: "21691E00A2", extra: "AI Application in Management" },
      { sno: 44, name: "T CHIRANJEEVI", dept: "MBA", roll: "21691E0021", extra: "AI Application in Management" },
      { sno: 45, name: "T HEMANTH KUMAR", dept: "MBA", roll: "21691E0039", extra: "AI Application in Management" },
      { sno: 46, name: "VANISAE DHARANI", dept: "MBA", roll: "21691E0025", extra: "AI Application in Management" },
      { sno: 47, name: "VELPULA ANUPAMA", dept: "MBA", roll: "21691E0007", extra: "AI Application in Management" },
      { sno: 48, name: "YERRAMADDU MANOJ", dept: "MBA", roll: "21691E00E2", extra: "AI Application in Management" },
      { sno: 49, name: "ANKE NAVEEN KUMAR", dept: "MBA", roll: "21691E0093", extra: "AI Application in Management" },
      { sno: 50, name: "KAMBOJI REDDY PRIYA DARSHINI", dept: "ECE", roll: "20691A04H7", extra: "Artificial Intelligence" },
      { sno: 51, name: "UNDAVALLI POOJITHA", dept: "ECE", roll: "20691A04G1", extra: "Artificial Intelligence" },
      { sno: 52, name: "SHAIK SHAHEEN", dept: "ECE", roll: "21695A0414", extra: "Artificial Intelligence" },
      { sno: 53, name: "SAI VELLALA-BAKTHAVATHSALA", dept: "ECE", roll: "20691A0420", extra: "Artificial Intelligence" },
      { sno: 54, name: "VEMI REDDY MAHESWAR REDDY", dept: "ECE", roll: "20691A04C8", extra: "Artificial Intelligence" },
      { sno: 55, name: "BAGGIDI-ANSHITHA", dept: "ECE", roll: "20691A0407", extra: "Artificial Intelligence" },
      { sno: 56, name: "CHINTHAPARTHI CHANDANA", dept: "ECE", roll: "20691A0430", extra: "Artificial Intelligence" },
      { sno: 57, name: "CHUKKA THULASI KRISHNA", dept: "ECE", roll: "20691a04q1", extra: "Artificial Intelligence" },
      { sno: 58, name: "TADIMARRI SAI VARDHINI", dept: "CSE", roll: "20691A05F7", extra: "Artificial Intelligence" },
      { sno: 59, name: "GIRIGARI NANDINI", dept: "ECE", roll: "21695A0404", extra: "Artificial Intelligence" },
      { sno: 60, name: "PARNAPALLI SARAYU", dept: "ECE", roll: "21695A0446", extra: "Artificial Intelligence" },
      { sno: 61, name: "GOLLA VAMSHI KRISHANA", dept: "ECE", roll: "20691A04Q5", extra: "Artificial Intelligence" },
      { sno: 62, name: "YENUGANTI HASANTHI", dept: "ECE", roll: "20691A0470", extra: "Artificial Intelligence" },
      { sno: 63, name: "PEDDAKOTLA HEMA LATHA", dept: "ECE", roll: "20691A0472", extra: "Artificial Intelligence" },
      { sno: 64, name: "MADDIPATLA LASYA", dept: "ECE", roll: "20691A04A5", extra: "Artificial Intelligence" },
      { sno: 65, name: "GANAPURAM SAHITHYA", dept: "ECE", roll: "21695A0445", extra: "Artificial Intelligence" },
      { sno: 66, name: "MEESALA LIKHITH KRISHNA YADAV", dept: "ECE", roll: "20691a04A9", extra: "Artificial Intelligence" },
      { sno: 67, name: "CHINNAMUTRA ANUSHA", dept: "ECE", roll: "20691A0408", extra: "Artificial Intelligence" },
      { sno: 68, name: "MADDIRALA GOMATHI", dept: "ECE", roll: "20691A0452", extra: "Artificial Intelligence" },
      { sno: 69, name: "AYODHYAPURAM SHMRUTHI", dept: "ECE", roll: "21695A0405", extra: "Artificial Intelligence" },
      { sno: 70, name: "CHITTIPOTHALA JAYANTHI", dept: "ECE", roll: "20691A0483", extra: "Artificial Intelligence" },
      { sno: 71, name: "KANGANELLURU JAYANTH KUMAR", dept: "ECE", roll: "20691a0482", extra: "Artificial Intelligence" },
      { sno: 72, name: "PATAN APSIYA", dept: "ECE", roll: "20681a0410", extra: "Artificial Intelligence" },
      { sno: 73, name: "UMMANI ANJALI", dept: "ECE", roll: "20691a0405", extra: "Artificial Intelligence" },
      { sno: 74, name: "PUTHUMBAKAM MOKSHITHA", dept: "ECE", roll: "20691A0B7", extra: "Artificial Intelligence" },
    ],
  },
  {
    title: "Asia University Virtual Exchange Program – Fall Semester 2021",
    country: "Taiwan",
    partner: "Asia University",
    period: "13 September 2021 – 15 January 2022",
    description: "Semester-long online exchange program covering advanced computing and business management fields.",
    participants: [
      { sno: 1, name: "Mr. PAINENI SAI DINESH", dept: "CSE", roll: "19691A05D1", extra: "Digital Image Processing" },
      { sno: 2, name: "Ms. BANDLU SAI RUTHU", dept: "ECE", roll: "19691A04G5", extra: "Digital Image Processing" },
      { sno: 3, name: "Ms. V.SRAVANTHI", dept: "ECE", roll: "19691A04J0", extra: "Digital Image Processing" },
      { sno: 4, name: "Mr. SYED IRFAN BASHA", dept: "ECE", roll: "19691A0472", extra: "Digital Image Processing" },
      { sno: 5, name: "Ms. R SARATH CHANDRIKA", dept: "ECE", roll: "19691A04H3", extra: "Digital Image Processing" },
      { sno: 6, name: "Ms. UPPU SIVA SRUTHI", dept: "ECE", roll: "19691A04I5", extra: "Digital Image Processing" },
      { sno: 7, name: "Mr. GOTURU VISWANATH", dept: "ECE", roll: "20695A0428", extra: "Digital Image Processing" },
      { sno: 8, name: "Ms. SHAIK SHAFIYA BALKIES", dept: "ECE", roll: "20695A0420", extra: "Digital Image Processing" },
      { sno: 9, name: "Ms. TALARI SHIREESHA", dept: "ECE", roll: "19691a04h7", extra: "Digital Image Processing" },
      { sno: 10, name: "Ms. SUBBAREDDYPALLI SREE KEERTHANA", dept: "ECE", roll: "19691A04J1", extra: "Digital Image Processing" },
      { sno: 11, name: "Mr. PALA HEMANTH", dept: "ECE", roll: "20695A0406", extra: "Digital Image Processing" },
      { sno: 12, name: "Mr. BANDARLA MANOJ", dept: "ECE", roll: "19699a0448", extra: "Digital Image Processing" },
      { sno: 13, name: "Mr. SINGARAYACHERUVU SREEKAR", dept: "ECE", roll: "19699A0495", extra: "Digital Image Processing" },
      { sno: 14, name: "Mr. BUJJIREDDY SATHISH", dept: "ECE", roll: "19699A0487", extra: "Digital Image Processing" },
      { sno: 15, name: "Ms. GANJIGUNTLA BHARGAVI", dept: "ECE", roll: "20695A0402", extra: "Digital Image Processing" },
      { sno: 16, name: "Ms. BALENENI CHINNI", dept: "ECE", roll: "20695A0403", extra: "Digital Image Processing" },
      { sno: 17, name: "Ms. VURAGAYALA PADMINI", dept: "ECE", roll: "20690A0403", extra: "Digital Image Processing" },
      { sno: 18, name: "Mr. CHAPATLA ASWANI KUMAR", dept: "ECE", roll: "20690A0401", extra: "Digital Image Processing" },
      { sno: 19, name: "Mr. CHENNAM SETTY RAJESH", dept: "ECE", roll: "20690A0404", extra: "Digital Image Processing" },
      { sno: 20, name: "Mr. SHAIK ABDULLA", dept: "ECE", roll: "19699A0401", extra: "Digital Image Processing" },
      { sno: 21, name: "Ms. THUPAKULA NANDITHA", dept: "ECE", roll: "19691A04B8", extra: "Digital Image Processing" },
      { sno: 22, name: "Ms. K.VYSHNAVI", dept: "ECE", roll: "19691A04N8", extra: "Digital Image Processing" },
      { sno: 23, name: "Ms. B.MOUNIKA", dept: "ECE", roll: "19691A04B3", extra: "Digital Image Processing" },
      { sno: 24, name: "Ms. APPIREDDY MOUNIKA", dept: "ECE", roll: "20695A0411", extra: "Digital Image Processing" },
      { sno: 25, name: "Mr. VYKUNTAM RAKESH NAIDU", dept: "ECE", roll: "20695A0417", extra: "Digital Image Processing" },
      { sno: 26, name: "Mr. NARALA SRINIVASULA REDDY", dept: "ECE", roll: "20690A0408", extra: "Digital Image Processing" },
      { sno: 27, name: "Mr. BOGGADI RAMA KISHORE REDDY", dept: "ECE", roll: "20695A0427", extra: "Digital Image Processing" },
      { sno: 28, name: "Mr. SHEIK MUDASSIR KHALANDAR BABA", dept: "ECE", roll: "19691A0487", extra: "Digital Image Processing" },
      { sno: 29, name: "Ms. DEVANENI JAHNAVI", dept: "ECE", roll: "20695A0408", extra: "Digital Image Processing" },
      { sno: 30, name: "Mr. VASANTHA HARSHITH", dept: "ECE", roll: "19691a0467", extra: "Digital Image Processing" },
      { sno: 31, name: "Ms. LOURDHU LIKHITHA YERUVA", dept: "ECE", roll: "20695A0409", extra: "Digital Image Processing" },
      { sno: 32, name: "Ms. MEEGADA VENKATA KEERTHI REDDY", dept: "ECE", roll: "20695A0425", extra: "Digital Image Processing" },
      { sno: 33, name: "Ms. YESASWINI TANGUTURU", dept: "ECE", roll: "20690A0413", extra: "Digital Image Processing" },
      { sno: 34, name: "Mr. JALLA REDDY THARUN", dept: "ECE", roll: "19691A04F6", extra: "Digital Image Processing" },
      { sno: 35, name: "Ms. CHALLA THULASI NIKHILA", dept: "ECE", roll: "20690A0410", extra: "Digital Image Processing" },
      { sno: 36, name: "Ms. RAYASAM SARANYA", dept: "ECE", roll: "19691A04H2", extra: "Digital Image Processing" },
      { sno: 37, name: "Ms. GAJULAPALLI GOPIPRIYA", dept: "ECE", roll: "19691A0458", extra: "Digital Image Processing" },
      { sno: 38, name: "Ms. VOOTUKURI GNANA PRASANNA", dept: "ECE", roll: "19691A0455", extra: "Digital Image Processing" },
      { sno: 39, name: "Ms. KUMMETHA GNANESWARI", dept: "ECE", roll: "19691A0456", extra: "Digital Image Processing" },
      { sno: 40, name: "Mr. SADU DEVANAND PRASAD", dept: "ECE", roll: "19691A0442", extra: "Digital Image Processing" },
      { sno: 41, name: "Ms. HARSHITHA TANGALA", dept: "CSE", roll: "19699A0515", extra: "Data Science" },
      { sno: 42, name: "Ms. MANDI SHAIK ASHIFA ANJUM", dept: "CSE", roll: "19699A0551", extra: "Data Science" },
      { sno: 43, name: "Mr. GUNDLURU MAHESH", dept: "MCA", roll: "20691F0045", extra: "Data Science" },
      { sno: 44, name: "Mr. HARSHAVARDHAN REDDY", dept: "MCA", roll: "20691F0034", extra: "Data Science" },
      { sno: 45, name: "Mr. MADAN MOHAN REDDY.PERAM", dept: "MCA", roll: "20691f0044", extra: "Data Science" },
      { sno: 46, name: "Mr. KOTHAREDDYGARI MANIKANTA REDDY", dept: "MCA", roll: "20691F0048", extra: "Data Science" },
      { sno: 47, name: "Mr. SHAIK RAJMATH MOHAMMAD SADIK", dept: "MCA", roll: "20691F0087", extra: "Data Science" },
      { sno: 48, name: "Ms. KOPPULA MEGHANA", dept: "MCA", roll: "20691F0086", extra: "Text Mining" },
      { sno: 49, name: "Mr. GANESH BABU P", dept: "MCA", roll: "20691F0027", extra: "Text Mining" },
      { sno: 50, name: "Mr. SHAIK SAIFULLA", dept: "MCA", roll: "20691F00B8", extra: "Text Mining" },
      { sno: 51, name: "Ms. BRS PRASOONA SWATHI LAKSHMI", dept: "MCA", roll: "20691F00A8", extra: "Text Mining" },
      { sno: 52, name: "Ms. SHAIK NAZIYA", dept: "MCA", roll: "20691F0099", extra: "Text Mining" },
      { sno: 53, name: "Ms. K.MADHURI", dept: "MCA", roll: "20691F0080", extra: "Text Mining" },
      { sno: 54, name: "Ms. MUNI JYOTHIRMAI UNDELA", dept: "MCA", roll: "20691F0089", extra: "Text Mining" },
      { sno: 55, name: "Mr. VINUKONDA RAJITH BHARGAV", dept: "MCA", roll: "20691f00b2", extra: "Text Mining" },
      { sno: 56, name: "Mr. KUNI SUDHAKARA", dept: "MCA", roll: "20691F00H6", extra: "Text Mining" },
      { sno: 57, name: "Ms. KALLURI TAHEERA", dept: "MCA", roll: "20691F00I3", extra: "Text Mining" },
      { sno: 58, name: "Ms. NIHARIKA S", dept: "MCA", roll: "20691F00A0", extra: "Text Mining" },
      { sno: 59, name: "Ms. S LEKHA", dept: "MCA", roll: "20691F0079", extra: "Text Mining" },
      { sno: 60, name: "Mr. PRABHAT CHAURASIYA", dept: "MCA", roll: "20691F00A6", extra: "Text Mining" },
      { sno: 61, name: "Mr. G SUDHAKAR", dept: "MCA", roll: "20691F00C7", extra: "Text Mining" },
      { sno: 62, name: "Mr. VADDE CHAITHANYA", dept: "MCA", roll: "20691F0069", extra: "Text Mining" },
      { sno: 63, name: "Mr. ATHIKARI VENKATA PRASAD", dept: "MCA", roll: "20691F00C9", extra: "Text Mining" },
      { sno: 64, name: "Mr. KOTAGADDA PRASANTH", dept: "MBA", roll: "20691E00C5", extra: "Business Research Methods" },
      { sno: 65, name: "Mr. N.SUSHANTH", dept: "MBA", roll: "20691E00E4", extra: "Business Research Methods" },
      { sno: 66, name: "Mr. KANCHARLA HARSHA SAI", dept: "MBA", roll: "20691E0053", extra: "Business Research Methods" },
      { sno: 67, name: "Ms. DONTHI AVANI", dept: "MBA", roll: "20691E0013", extra: "Business Research Methods" },
      { sno: 68, name: "Mr. ASHOK KUMAR", dept: "MBA", roll: "20691E0009", extra: "Business Research Methods" },
      { sno: 69, name: "Ms. DIGAVINTI DEEPA CHANDANA", dept: "MBA", roll: "20691E0031", extra: "Business Research Methods" },
      { sno: 70, name: "Ms. PASALA RAMA", dept: "MBA", roll: "20691E0055", extra: "Business Research Methods" },
      { sno: 71, name: "Ms. ANNAM JAHNAVI", dept: "MBA", roll: "20691E0058", extra: "Business Research Methods" },
      { sno: 72, name: "Ms. MAHAMMAD HANEEFA BANU", dept: "MBA", roll: "20691E0040", extra: "Business Research Methods" },
      { sno: 73, name: "Ms. DEEPTHI S N", dept: "MBA", roll: "20691E0032", extra: "Business Research Methods" },
      { sno: 74, name: "Mr. SIDDALA SUDHARSHAN REDDY", dept: "MBA", roll: "20691E00I9", extra: "Business Research Methods" },
      { sno: 75, name: "Ms. AKUTHOTA SANDHYA", dept: "MBA", roll: "20691E00G0", extra: "Business Research Methods" },
      { sno: 76, name: "Mr. B.SASI KUMAR", dept: "MBA", roll: "20691E00G3", extra: "Business Research Methods" },
      { sno: 77, name: "Ms. SURAGIRI SAI VARSHINI", dept: "MBA", roll: "20691E00F4", extra: "Business Research Methods" },
      { sno: 78, name: "Mr. BURRA THARUN", dept: "MECH", roll: "19691A03E6", extra: "Product Semantics" },
    ],
  },
  {
    title: "Asia University Virtual Summer Program 2021 (5th Batch)",
    country: "Taiwan",
    partner: "Asia University",
    period: "2 – 24 August 2021",
    description: "Intensive summer program covering emerging computing trends and artificial intelligence.",
    participants: [
      { sno: 1, name: "Mr. THOTA ROOPESH", dept: "CSE", roll: "18691A05B3", extra: "Artificial Intelligence" },
      { sno: 2, name: "Ms. V. GREESHMA", dept: "ECE", roll: "18691A0451", extra: "Artificial Intelligence" },
      { sno: 3, name: "Ms. SHAIK DAHUBAIGARI ANISA", dept: "ECE", roll: "18691A0405", extra: "Artificial Intelligence" },
      { sno: 4, name: "Mr. GONDHIMALLA MYTHRESH", dept: "ECE", roll: "18691A04A8", extra: "Artificial Intelligence" },
      { sno: 5, name: "Mr. M.DEEPTHI VARDHAN", dept: "ECE", roll: "18691A0432", extra: "Artificial Intelligence" },
      { sno: 6, name: "Ms. NAGOTHI DIVYA", dept: "ECE", roll: "18691A0437", extra: "Artificial Intelligence" },
      { sno: 7, name: "Mr. OBULA REDDY GARI MAHESH REDDY", dept: "ECE", roll: "18691A0492", extra: "Artificial Intelligence" },
      { sno: 8, name: "Ms. YERRAGUDI LOHITHA", dept: "ECE", roll: "18691A0486", extra: "Artificial Intelligence" },
      { sno: 9, name: "Ms. NANDAVARAM SHIRISHA", dept: "ECE", roll: "18691A04H5", extra: "Artificial Intelligence" },
      { sno: 10, name: "Ms. KONKALA VYSHNAVI", dept: "ECE", roll: "18699A04B3", extra: "Artificial Intelligence" },
      { sno: 11, name: "Ms. ADUSUMALLI HARITHA", dept: "ECE", roll: "18691A0458", extra: "Artificial Intelligence" },
      { sno: 12, name: "Ms. OBULAMPALLI CHANDANA", dept: "ECE", roll: "18691A0430", extra: "Artificial Intelligence" },
      { sno: 13, name: "Mr. MAHESH BABU V", dept: "ECE", roll: "19695A0414", extra: "Artificial Intelligence" },
      { sno: 14, name: "Mr. TADIPATRI LAKSHMIKAR REDDY", dept: "ECE", roll: "18691A0484", extra: "Artificial Intelligence" },
      { sno: 15, name: "Mr. SANDA MOHAN KUMAR", dept: "ECE", roll: "18691A04A2", extra: "Artificial Intelligence" },
      { sno: 16, name: "Mr. PALLAMKUPPAM ROHITH", dept: "ECE", roll: "18691A04F3", extra: "Artificial Intelligence" },
      { sno: 17, name: "Ms. LEKKALA GIRIJA", dept: "ECE", roll: "18691A0446", extra: "Artificial Intelligence" },
      { sno: 18, name: "Mr. LINGASANI BHASKAR REDDY", dept: "ECE", roll: "18691A0422", extra: "Artificial Intelligence" },
      { sno: 19, name: "Ms. GADIPUTI NARMADA", dept: "ECE", roll: "18691A04B6", extra: "Artificial Intelligence" },
      { sno: 20, name: "Mr. PEDDANNAGARI JAYAPAL REDDY", dept: "ECE", roll: "18691A0475", extra: "Artificial Intelligence" },
      { sno: 21, name: "Ms. DAYADI SHARON JERUSHA", dept: "ECE", roll: "18691A04H3", extra: "Artificial Intelligence" },
      { sno: 22, name: "Ms. SHAIK SHEHANAZ", dept: "ECE", roll: "18691A04H4", extra: "Artificial Intelligence" },
      { sno: 23, name: "Ms. PAIDI HARITHA", dept: "MCA", roll: "20691F0033", extra: "Artificial Intelligence" },
      { sno: 24, name: "Mr. MUNIGOTI MANJUNATH", dept: "MCA", roll: "20691F0049", extra: "Artificial Intelligence" },
      { sno: 25, name: "Ms. BANDARU SANDHYA RANI", dept: "MCA", roll: "20691F00G1", extra: "Artificial Intelligence" },
      { sno: 26, name: "Ms. GELAVANI LAHARI", dept: "MCA", roll: "20691F0042", extra: "Artificial Intelligence" },
      { sno: 27, name: "MS. KALLURI THAHEERA", dept: "MCA", roll: "20691F00I3", extra: "Artificial Intelligence" },
      { sno: 28, name: "Mr. P. GANESH BABU", dept: "MCA", roll: "20691F0027", extra: "Artificial Intelligence" },
      { sno: 29, name: "Ms. UNDELA MUNI JYOTHIRMAI", dept: "MCA", roll: "20691F0089", extra: "Artificial Intelligence" },
      { sno: 30, name: "Ms. BEERANNAGARI GEETHA", dept: "MCA", roll: "20691F00D7", extra: "Artificial Intelligence" },
      { sno: 31, name: "Mr. DEGANIPALLE AJAY REDDY", dept: "MCA", roll: "20691F00D0", extra: "Artificial Intelligence" },
      { sno: 32, name: "Mr. A. SREEKANTH", dept: "MCA", roll: "20691F00H1", extra: "Artificial Intelligence" },
      { sno: 33, name: "Ms. P SUPRIYA", dept: "MCA", roll: "20691F00H9", extra: "Artificial Intelligence" },
      { sno: 34, name: "Mr. ATHIKARI VENKATA PRASAD", dept: "MCA", roll: "20691F00C9", extra: "Artificial Intelligence" },
      { sno: 35, name: "Ms. MARKAPURAM REVATHI", dept: "MCA", roll: "20691F00F4", extra: "Artificial Intelligence" },
      { sno: 36, name: "Ms. THALARI VASAVI", dept: "MCA", roll: "20691F00J0", extra: "Artificial Intelligence" },
      { sno: 37, name: "Ms. POOLA CHANDANA", dept: "MCA", roll: "20691F0019", extra: "Artificial Intelligence" },
      { sno: 38, name: "Ms. V. MOUNIKA", dept: "MCA", roll: "20691F00E5", extra: "Artificial Intelligence" },
      { sno: 39, name: "Ms. MALKARI JAYASREE", dept: "MCA", roll: "20691F00D9", extra: "Artificial Intelligence" },
      { sno: 40, name: "Ms. K.MADHURI", dept: "MCA", roll: "20691F0080", extra: "Artificial Intelligence" },
      { sno: 41, name: "Ms. BRS PRASOONA SWATHI LAKSHMI", dept: "MCA", roll: "20691F00A8", extra: "Artificial Intelligence" },
      { sno: 42, name: "Mr. PALETI MANAS KUMAR", dept: "MCA", roll: "20691F00E3", extra: "Artificial Intelligence" },
      { sno: 43, name: "Mr. SHAIK SAIFULLA", dept: "MCA", roll: "20691F00B8", extra: "Artificial Intelligence" },
      { sno: 44, name: "Mr. AKULETY HARSHA VARDHAN", dept: "Mech", roll: "18691A0331", extra: "Artificial Intelligence" },
      { sno: 45, name: "Mr. MARRIBOYINA THARUN YADAV", dept: "Mech", roll: "18691A03E6", extra: "Artificial Intelligence" },
      { sno: 46, name: "Mr. KURUBA AKHIL", dept: "Mech", roll: "18691A0309", extra: "Artificial Intelligence" },
      { sno: 47, name: "Mr. M.B.JASWANTH", dept: "Mech.", roll: "18691A0338", extra: "Artificial Intelligence" },
      { sno: 48, name: "Mr. BHARATH SIMHA V", dept: "ECE", roll: "18699A0412", extra: "Web Design" },
      { sno: 49, name: "Mr. PATAN ASLAM", dept: "ECE", roll: "18699A04B7", extra: "Web Design" },
      { sno: 50, name: "Mr. GULURU MANOJ REDDY", dept: "ECE", roll: "18699A0461", extra: "Web Design" },
      { sno: 51, name: "Ms. ALLURI EKSHITHA", dept: "MCA", roll: "20691F00D5", extra: "Web Design" },
      { sno: 52, name: "Ms. RATAKONDA SHALINI PRIYA", dept: "MCA", roll: "20691F00G4", extra: "Web Design" },
      { sno: 53, name: "Ms. SOWMYA E. C", dept: "MCA", roll: "20691F00C2", extra: "Web Design" },
      { sno: 54, name: "Mr. B REDDI SHEKHAR", dept: "MCA", roll: "20691F00F3", extra: "AI Application in Management" },
      { sno: 55, name: "Ms. YEDUGURU SAI KEERTHANA", dept: "MCA", roll: "20691F00F6", extra: "AI Application in Management" },
      { sno: 56, name: "Mr. NAGASAMUDHRAM PRAVEEN KUMAR", dept: "MCA", roll: "20691F00E9", extra: "AI Application in Management" },
      { sno: 57, name: "Ms. REDDEM SREELATHA", dept: "MCA", roll: "20691F00H3", extra: "AI Application in Management" },
      { sno: 58, name: "Mr. PATAN THABREZ", dept: "MCA", roll: "20691F00I6", extra: "AI Application in Management" },
      { sno: 59, name: "Mr. CHEVITI SOMA SAI DINESH", dept: "MCA", roll: "20691F00F5", extra: "AI Application in Management" },
      { sno: 60, name: "Ms. TALAMARLA PALLAVI", dept: "MCA", roll: "20691F00E8", extra: "AI Application in Management" },
      { sno: 61, name: "Ms. SHAIK SUMIYA", dept: "MCA", roll: "20691F00H7", extra: "AI Application in Management" },
      { sno: 62, name: "Ms. JINKALA DIVYA", dept: "MCA", roll: "20691F00D4", extra: "AI Application in Management" },
    ],
  },
  {
    title: "Asia University Virtual Exchange Program – Spring Semester 2021",
    country: "Taiwan",
    partner: "Asia University",
    period: "22 February – 25 June 2021",
    description: "Online study exchange program focusing on computing, communication, and languages.",
    participants: [
      { sno: 1, name: "Mr Munipranay Polampalli", dept: "CSE", roll: "17691A0595", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 2, name: "Mr. Munnaf Koilakuntla", dept: "CSE", roll: "17691A0581", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 3, name: "Mr. D Lokanath Reddy", dept: "CSE", roll: "17691A0561", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 4, name: "Mr. P Pratheek Reddy", dept: "CSE", roll: "17691A0596", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 5, name: "Mr. Sai Sumith G", dept: "CSE", roll: "17691A1241", extra: "Computer Networks" },
      { sno: 6, name: "Ms. Ramineni Sravani", dept: "ECE", roll: "17699A0496", extra: "Digital Image Processing" },
      { sno: 7, name: "Ms. M Sravani Lakshmi", dept: "ECE", roll: "17691A04I5", extra: "Digital Image Processing" },
      { sno: 8, name: "Ms. P V Sravani", dept: "ECE", roll: "17699A0494", extra: "Digital Image Processing" },
      { sno: 9, name: "Mr. P Vineeth", dept: "ECE", roll: "17699A04B6", extra: "Digital Image Processing" },
      { sno: 10, name: "Mr. Akula Saisankar", dept: "ECE", roll: "17699A0482", extra: "Digital Image Processing" },
      { sno: 11, name: "Mr. Madduri Sai Chandu", dept: "ECE", roll: "17699A0478", extra: "Digital Image Processing" },
      { sno: 12, name: "Mr. Talari Somasekhar", dept: "ECE", roll: "17691A04I2", extra: "Digital Image Processing" },
      { sno: 13, name: "Mr. Swarna Deva Wesley Jawahar", dept: "ECE", roll: "17691A04N7", extra: "Digital Image Processing" },
      { sno: 14, name: "Mr. Godhana Durga Prasad", dept: "MBA", roll: "19691E0034", extra: "Investment Portfolio Analysis" },
      { sno: 15, name: "Ms. Aleke Hithyshi", dept: "MBA", roll: "19691E0051", extra: "Investment Portfolio Analysis" },
      { sno: 16, name: "Ms. Desha Ramya", dept: "MBA", roll: "19691E00D1", extra: "Investment Portfolio Analysis" },
      { sno: 17, name: "Mr. Kuchigalla Hari Krishna", dept: "MBA", roll: "19691E0044", extra: "Investment Portfolio Analysis" },
      { sno: 18, name: "Mr. S.R. Naveen kumar", dept: "MBA", roll: "19691E00A8", extra: "Investment Portfolio Analysis" },
      { sno: 19, name: "Ms. Male Pallavi", dept: "MBA", roll: "19691E00O0", extra: "Investment Portfolio Analysis" },
      { sno: 20, name: "Mr. Shaik Mubarak", dept: "ECE", roll: "17691A04A7", extra: "Machine Learning" },
      { sno: 21, name: "Mr. Thimmapuram Piyush Datta", dept: "ECE", roll: "17691A04D4", extra: "Machine Learning" },
      { sno: 22, name: "Mr. Shaik Masthan Shareef", dept: "ECE", roll: "17691A0497", extra: "Machine Learning" },
      { sno: 23, name: "Mr. Somu Veera Sekhar Reddy", dept: "ECE", roll: "17699A04B0", extra: "Machine Learning" },
      { sno: 24, name: "Mr. Shaik Javeed Basha", dept: "ECE", roll: "17691A0463", extra: "Machine Learning" },
      { sno: 25, name: "Ms. Ganesham Sowmya", dept: "ECE", roll: "17699A0493", extra: "Machine Learning" },
      { sno: 26, name: "Mr.K Fayaz", dept: "ECE", roll: "18695A0443", extra: "Machine Learning" },
      { sno: 27, name: "Mr. Nagirimadugu Nageswar Reddy", dept: "ECE", roll: "17699A0462", extra: "Machine Learning" },
      { sno: 28, name: "Ms. Dhara Sruthi", dept: "ECE", roll: "17691A04J5", extra: "Machine Learning" },
      { sno: 29, name: "Mr. Vayalpadu Harish", dept: "ECE", roll: "18695A0439", extra: "Machine Learning" },
      { sno: 30, name: "Ms. Valleru Muralidharnaidu Sucharitha", dept: "ECE", roll: "17699A0499", extra: "Machine Learning" },
      { sno: 31, name: "Mr. V. Sunil Kumar Reddy", dept: "ECE", roll: "17699A04A0", extra: "Machine Learning" },
      { sno: 32, name: "Ms. Nandyala Vandana Reddy", dept: "ECE", roll: "17691A04L6", extra: "Machine Learning" },
      { sno: 33, name: "Mr. S. Reddy Prasad", dept: "ECE", roll: "18695A0438", extra: "Machine Learning" },
      { sno: 34, name: "Mr. Pujari Jeevan Kumar", dept: "ECE", roll: "18695A0444", extra: "Machine Learning" },
      { sno: 35, name: "Mr. Bodingar Vishnu", dept: "ECE", roll: "17699A04B9", extra: "Machine Learning" },
      { sno: 36, name: "Ms. Tejaswani Chinnamallayyagari", dept: "ECE", roll: "17699A04A8", extra: "Machine Learning" },
      { sno: 37, name: "Mr. P Shahulkhan", dept: "ECE", roll: "18690A0418", extra: "Machine Learning" },
      { sno: 38, name: "Mr. Teja Bhargava Reddy Mallappagari", dept: "ECE", roll: "17699A04A7", extra: "Machine Learning" },
      { sno: 39, name: "Mr. Poola Saibhagavan", dept: "ECE", roll: "18695A0429", extra: "Machine Learning" },
      { sno: 40, name: "Ms. K.N. Sri Chandana", dept: "ECE", roll: "17691A04J2", extra: "Machine Learning" },
      { sno: 41, name: "Mr. N. Izaz Ahmed", dept: "ECE", roll: "17691A0478", extra: "Machine Learning" },
      { sno: 42, name: "Mr. Poojari Sreekanth", dept: "ECE", roll: "17691A04I9", extra: "Machine Learning" },
      { sno: 43, name: "Mr. Rangam Raviteja", dept: "ECE", roll: "17699A0472", extra: "Machine Learning" },
      { sno: 44, name: "Ms. Bandlapalli Rohini", dept: "ECE", roll: "17699A0474", extra: "Machine Learning" },
      { sno: 45, name: "Ms. Manyamgiri Navya", dept: "ECE", roll: "17699A0464", extra: "Machine Learning" },
      { sno: 46, name: "Ms. Siddimatam Madeeha Jeelani", dept: "ECE", roll: "17691A0483", extra: "Machine Learning" },
      { sno: 47, name: "Ms. Rayadurgam Venkata Sai Meghana", dept: "ECE", roll: "17691A04M3", extra: "Machine Learning" },
      { sno: 48, name: "Ms. Susmitha Eerthineni", dept: "ECE", roll: "17699A04A5", extra: "Machine Learning" },
      { sno: 49, name: "Ms. Vineesha Gorla", dept: "ECE", roll: "17691A04N3", extra: "Machine Learning" },
      { sno: 50, name: "Mr. N V Srinivasulu", dept: "ECE", roll: "17691A04J4", extra: "Machine Learning" },
      { sno: 51, name: "Ms. Yanamala Sindhu", dept: "ECE", roll: "17699A0489", extra: "Machine Learning" },
      { sno: 52, name: "Mr. Putluru Nagamalleswara Reddy", dept: "ECE", roll: "18695A0437", extra: "Machine Learning" },
      { sno: 53, name: "Mr. Venkateswar Reddy Velugu", dept: "ECE", roll: "18690A0415", extra: "Machine Learning" },
      { sno: 54, name: "Mr. A Roopendra Kumar", dept: "ECE", roll: "17699A0475", extra: "Machine Learning" },
      { sno: 55, name: "Mr. Vinod Kumar Reddy Makireddy", dept: "ECE", roll: "18695A0440", extra: "Machine Learning" },
      { sno: 56, name: "Mr. Praveen Kumar Reddy", dept: "ECE", roll: "18695A0420", extra: "Machine Learning" },
      { sno: 57, name: "Mr. Kishore Kumar Reddy P", dept: "ECE", roll: "17691A0475", extra: "Machine Learning" },
      { sno: 58, name: "Mr. Vaddipuri Mahesh", dept: "ECE", roll: "17691A0490", extra: "Machine Learning" },
      { sno: 59, name: "Ms. P. M. Kousalya", dept: "ECE", roll: "17691A0477", extra: "Machine Learning" },
      { sno: 60, name: "Mr. Sunakanti Vara Prasad", dept: "ECE", roll: "17691A04L7", extra: "Machine Learning" },
      { sno: 61, name: "Ms. S. Lakshmi Prasanna", dept: "ECE", roll: "17691A0480", extra: "Machine Learning" },
      { sno: 62, name: "Mr. Yellala Venkata Jagadananda Reddy", dept: "ECE", roll: "18690A0414", extra: "Machine Learning" },
      { sno: 63, name: "Mr. V Venkata Surya Kiran Naidu", dept: "ECE", roll: "17699A04B3", extra: "Machine Learning" },
      { sno: 64, name: "Mr. Konduru Vinod Kumar Raju", dept: "ECE", roll: "17699A04B7", extra: "Machine Learning" },
      { sno: 65, name: "Ms. Vangimalli Mounika", dept: "ECE", roll: "18690A0416", extra: "Machine Learning" },
      { sno: 66, name: "Mr. Mantrala Abhinay", dept: "ECE", roll: "18690A0423", extra: "Machine Learning" },
      { sno: 67, name: "Mr. J.Venkata Rakesh", dept: "ECE", roll: "17691A04M2", extra: "Machine Learning" },
      { sno: 68, name: "Ms. Aaliya Samreen Shaik", dept: "ECE", roll: "17691A0406", extra: "Machine Learning" },
      { sno: 69, name: "Mr. Sibbala Narendra", dept: "ECE", roll: "18695A0441", extra: "Machine Learning" },
      { sno: 70, name: "Ms. R Sravani", dept: "ECE", roll: "17699A0495 ", extra: "Machine Learning" },
      { sno: 71, name: "Ms. Kanala Sreevani", dept: "ECE", roll: "17699A0498", extra: "Machine Learning" },
      { sno: 72, name: "Ms. Bisalamanepalli Bhavitha", dept: "ECE", roll: "17691A0422", extra: "Machine Learning" },
      { sno: 73, name: "Ms. Mallela Deekshitha", dept: "ECE", roll: "17691A0429", extra: "Machine Learning" },
      { sno: 74, name: "Mr. Y Suresh Reddy", dept: "ECE", roll: "17699A04A2 ", extra: "Machine Learning" },
      { sno: 75, name: "Mr. Puttaparthi Venugopal Reddy", dept: "ECE", roll: "17699A04B5 ", extra: "Machine Learning" },
      { sno: 76, name: "Ms. Ananthaneni Sravani", dept: "ECE", roll: "18690A0413", extra: "Machine Learning" },
      { sno: 77, name: "Mr. Sagi Chinna Obulu", dept: "Mechanical", roll: "18695A0336", extra: "Machine Learning" },
      { sno: 78, name: "Mr. S Sasikumar", dept: "Mechanical", roll: "17691A03H9", extra: "Machine Learning" },
      { sno: 79, name: "Mr. Guggilla Sreenath", dept: "Mechanical", roll: "18695A0330", extra: "Machine Learning" },
      { sno: 80, name: "Mr. Ganigipenta Sai Kumar", dept: "Mechanical", roll: "17691A03G5", extra: "Machine Learning" },
      { sno: 81, name: "Mr. Bonasi Ranjith Kumar Reddy", dept: "Mechanical", roll: "17691A03E8", extra: "Machine Learning" },
      { sno: 82, name: "Mr. Reddy Hemanth Babu M", dept: "Mechanical", roll: "17691A03F5", extra: "Machine Learning" },
      { sno: 83, name: "Ms. Makireddy Sushma Reddy", dept: "ECE", roll: " 17699A04A4", extra: "Machine Learning" },
      { sno: 84, name: "Mr. Ija Suchendra", dept: "Mechanical", roll: "18695A0337", extra: "Machine Learning" },
      { sno: 85, name: "Ms. Kundelu Gayathri", dept: "MBA", roll: "19691E0039", extra: "Managerial Ethics and Corporate Social Responsibility (Ethic 2)" },
      { sno: 86, name: "Ms. Nallabothula Jyothi Priyanka", dept: "MBA", roll: "19691E0057", extra: "Managerial Ethics and Corporate Social Responsibility (Ethic 2)" },
      { sno: 87, name: "Ms. Bhojanapu Bhargavi", dept: "MBA", roll: "19691E0015", extra: "Managerial Ethics and Corporate Social Responsibility (Ethic 2)" },
      { sno: 88, name: "Ms. Adi Andhra Chandrika", dept: "MBA", roll: "19691E0022", extra: "Managerial Ethics and Corporate Social Responsibility (Ethic 2)" },
      { sno: 89, name: "Mr. Shaik Mohemmed Ghouse", dept: "MBA", roll: "19691E0089", extra: "Managerial Ethics and Corporate Social Responsibility (Ethic 2)" },
      { sno: 90, name: "Ms. Gurram Parinitha", dept: "CSE", roll: "17691A0591", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 91, name: "Ms. Priyanka Kodidela", dept: "CSE", roll: "17691A0599", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 92, name: "Mr. Rohith Bopathi", dept: "CSE", roll: "17691A0581", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 93, name: "Mr. Puthin Kumar Reddy", dept: "CSE", roll: "17691A05A3", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 94, name: "Mr. Shaik Nayaz Basha", dept: "CSE", roll: "17691A0588", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 95, name: "Mr. Shaik Mansoor", dept: "CSE", roll: "17691A0573", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 96, name: "Mr. Shaik Nawaz", dept: "CSE", roll: "17691A0587", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 97, name: "Ms. M Pruthvi", dept: "CSE", roll: "17691A05A2", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 98, name: "Mr. P Mohith", dept: "CSE", roll: "17691A0578", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 99, name: "Mr. Akula Mahesh Babu", dept: "CSE", roll: "17691A0567", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 100, name: "Mr. Ketham Reddy Mohan Vamsi Reddy", dept: "CSE", roll: "17691A0577", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 101, name: "Ms. K Priyanka", dept: "CSE", roll: "17691A0598", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 102, name: "Ms. K Naga Poojitha", dept: "CSE", roll: "17691A0582", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 103, name: "Ms. C. Rishika Ram", dept: "CSE", roll: "17691A05A9", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 104, name: "Ms. Somisetty Sai Harsha", dept: "CSE", roll: "17691A05B7", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 105, name: "Mr. Abhishek Pasupulate", dept: "EEE", roll: "17691A0201", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 106, name: "Mr. K Uday Kumar", dept: "Mechanical", roll: "17691A03K7", extra: "Python Programming Basics for Data Science and Machine Learning" },
    ],
  },
  {
    title: "Asia University Virtual Winter Program 2020-21",
    country: "Taiwan",
    partner: "Asia University",
    period: "18 January – 5 February 2021",
    description: "Winter school program covering Artificial Intelligence and web applications.",
    participants: [
      { sno: 1, name: "Mr. Koduru Balasubramanyam", dept: "CSE", roll: "18691A0511", extra: "Artificial Intelligence (AI)" },
      { sno: 2, name: "Mr. Peesugalla Dinesh", dept: "CSE", roll: "18691A0526", extra: "Artificial Intelligence (AI)" },
      { sno: 3, name: "Mr. Pogathota Viswanath Srujan", dept: "CSE", roll: "18691A05E0", extra: "Artificial Intelligence (AI)" },
      { sno: 4, name: "Ms. Sandra Lekhana", dept: "CSE", roll: "18699A0552", extra: "Artificial Intelligence (AI)" },
      { sno: 5, name: "Mr. Shaik. Asif Basha", dept: "CSE", roll: "18699A0502", extra: "Artificial Intelligence (AI)" },
      { sno: 6, name: "Ms. Tanguturi Manasa", dept: "ECE", roll: "18691A0494", extra: "Artificial Intelligence (AI)" },
      { sno: 7, name: "Mr. Yellammagari Madhu", dept: "ECE", roll: "18691A0488", extra: "Artificial Intelligence (AI)" },
      { sno: 8, name: "Ms. Ellanki Harshitha", dept: "ECE", roll: "18691A0488", extra: "Artificial Intelligence (AI)" },
      { sno: 9, name: "Ms. Shaik Shehanaz", dept: "ECE", roll: "18691A04H4", extra: "Artificial Intelligence (AI)" },
      { sno: 10, name: "Mr. Abdul Sameer Shiak", dept: "ECE", roll: "18699A0401", extra: "Artificial Intelligence (AI)" },
      { sno: 11, name: "Ms. Dayadi Sharon Jerusha", dept: "ECE", roll: "18691A04H3", extra: "Artificial Intelligence (AI)" },
      { sno: 12, name: "Ms. Chowla Akhila", dept: "ECE", roll: "19690A0401", extra: "Artificial Intelligence (AI)" },
      { sno: 13, name: "Ms. Nukareddy Devanandini", dept: "ECE", roll: "18699A0424", extra: "Artificial Intelligence (AI)" },
      { sno: 14, name: "Ms.Kommireddy Bhavani", dept: "ECE", roll: "18699A0416", extra: "Artificial Intelligence (AI)" },
      { sno: 15, name: "Ms. Animela Niharika", dept: "ECE", roll: "18699A0460", extra: "Artificial Intelligence (AI)" },
      { sno: 16, name: "Ms. Korrapati Nagareddy Sai Monisha", dept: "ECE", roll: "18699A0457", extra: "Artificial Intelligence (AI)" },
      { sno: 17, name: "Ms. Gangireddy Kusuma Priya", dept: "ECE", roll: "18699A0444", extra: "Artificial Intelligence (AI)" },
      { sno: 18, name: "Mr. Allam Mahesh Kumar Reddy", dept: "ECE", roll: "18699A0449", extra: "Artificial Intelligence (AI)" },
      { sno: 19, name: "Ms. Pidugu Manasa", dept: "ECE", roll: "18699A0452", extra: "Artificial Intelligence (AI)" },
      { sno: 20, name: "Ms. Bukka Kavya", dept: "ECE", roll: "18699A0443", extra: "Artificial Intelligence (AI)" },
      { sno: 21, name: "Ms. Andela Nethra", dept: "ECE", roll: "18699A0459", extra: "Artificial Intelligence (AI)" },
      { sno: 22, name: "Mr. S Gaurav Desai", dept: "ECE", roll: "18699A0431", extra: "Artificial Intelligence (AI)" },
      { sno: 23, name: "Ms.Y Girisree", dept: "ECE", roll: "18699A0432", extra: "Artificial Intelligence (AI)" },
      { sno: 24, name: "Mr. K Uday Kiran", dept: "ECE", roll: "18699A0498", extra: "Artificial Intelligence (AI)" },
      { sno: 25, name: "Ms. Poola Maneesha", dept: "ECE", roll: "18699A0452", extra: "Artificial Intelligence (AI)" },
      { sno: 26, name: "Ms. Yellela Jahnavi", dept: "ECE", roll: "18699A0439", extra: "Artificial Intelligence (AI)" },
      { sno: 27, name: "Mr. Shaik Mohammed Shoyab", dept: "EEE", roll: "18691A0244", extra: "Artificial Intelligence (AI)" },
      { sno: 28, name: "Mr. Pradyumna Simha. T", dept: "Mechanical", roll: "18691A0389", extra: "Artificial Intelligence (AI)" },
      { sno: 29, name: "Mr. Akram. S", dept: "Mechanical", roll: "18691A0310", extra: "Artificial Intelligence (AI)" },
      { sno: 30, name: "Ms. Gundluru Rushitha", dept: "Mechanical", roll: "18691A03A5", extra: "Artificial Intelligence (AI)" },
      { sno: 31, name: "Mr. Angadala Dileepkumar", dept: "Mechanical", roll: "19695A0374", extra: "Artificial Intelligence (AI)" },
      { sno: 32, name: "Mr. Kuncha Tharakesh", dept: "Mechanical", roll: "18691A0310", extra: "Artificial Intelligence (AI)" },
      { sno: 33, name: "Mr. Sajjanna Gari Rakesh", dept: "Mechanical", roll: "18691A0397", extra: "Artificial Intelligence (AI)" },
      { sno: 34, name: "Mr. Yammanuru Jagadeeswara Reddy", dept: "Mechanical", roll: "19695A0306", extra: "Artificial Intelligence (AI)" },
      { sno: 35, name: "Mr. Reddy Manoj Sai", dept: "Mechanical", roll: "18691A03A0", extra: "Artificial Intelligence (AI)" },
      { sno: 36, name: "Mr. Eligaram Reddy Prasad", dept: "Mechanical", roll: "18691A03A2", extra: "Artificial Intelligence (AI)" },
      { sno: 37, name: "Ms. Jajala Naga Pavithra", dept: "MCA", roll: "19691F0069", extra: "Web Design" },
      { sno: 38, name: "Ms. Tippu Noore Nusrath", dept: "MCA", roll: "19691F0078", extra: "Web Design" },
      { sno: 39, name: "Ms. Gangula Preethi", dept: "MCA", roll: "19691F0090", extra: "Web Design" },
      { sno: 40, name: "Ms. S Rehanuma Kousar", dept: "MCA", roll: "19691F00A1", extra: "Web Design" },
      { sno: 41, name: "Ms. K Rajitha", dept: "MCA", roll: "19691F0094", extra: "Web Design" },
      { sno: 42, name: "Ms. Macharam Pooja", dept: "CSE", roll: "18699A0527", extra: "Web Design" },
      { sno: 43, name: "Ms. Bangaru Tejaswari", dept: "CSE", roll: "18699A0546", extra: "Web Design" },
      { sno: 44, name: "Mr. Chinnam Harisrujan", dept: "CSE", roll: "18691A0544", extra: "Web Design" },
      { sno: 45, name: "Ms. Mummaadi Raane", dept: "CSE", roll: "18699A0529", extra: "Web Design" },
      { sno: 46, name: "Ms. M.Ramya", dept: "ECE", roll: "18691A04E8", extra: "Web Design" },
      { sno: 47, name: "Ms. K.Poojitha", dept: "ECE", roll: "18691A04D2", extra: "Web Design" },
      { sno: 48, name: "Ms. V.Poojitha", dept: "ECE", roll: "18691A04D3", extra: "Web Design" },
      { sno: 49, name: "Mr. Mallempallli Syed Dadapeer", dept: "MCA", roll: "19691F00C5", extra: "Web Design" },
      { sno: 50, name: "Mr. Koti Venkata Yuvatej Kumar", dept: "MCA", roll: "19691F00E2", extra: "Web Design" },
    ],
  },
  {
    title: "Asia University Virtual Exchange Program – Fall Semester 2020",
    country: "Taiwan",
    partner: "Asia University",
    period: "21 September 2020 – 19 January 2021",
    description: "First online semester-long exchange program initiated during global travel restrictions.",
    participants: [
      { sno: 1, name: "Mr. Shaik Babjan", dept: "ECE", roll: "17691A0414", extra: "Artificial Intelligence (AI)" },
      { sno: 2, name: "Mr. Shaik Ali Nawaz", dept: "ECE", roll: "17699A0402", extra: "Artificial Intelligence (AI)" },
      { sno: 3, name: "Mr. Chandragiri Vishnu Vardhan", dept: "ECE", roll: "17691A04N5", extra: "Artificial Intelligence (AI)" },
      { sno: 4, name: "Mr. Shaik Khazi Mohammad Affan", dept: "ECE", roll: "17699A0456", extra: "Artificial Intelligence (AI)" },
      { sno: 5, name: "Mr. Gorantla Ravi Teja", dept: "ECE", roll: "17691A04F0", extra: "Artificial Intelligence (AI)" },
      { sno: 6, name: "Ms. Baripireddy Bhavitha", dept: "ECE", roll: "17691A0421", extra: "Artificial Intelligence (AI)" },
      { sno: 7, name: "Ms. Tholeti Gayathri", dept: "ECE", roll: "17691A0438", extra: "Artificial Intelligence (AI)" },
      { sno: 8, name: "Mr. Perikipalli Arunteja", dept: "ECE", roll: "18695A0431", extra: "Artificial Intelligence (AI)" },
      { sno: 9, name: "Ms. B Kaushalya", dept: "ECE", roll: "17691A0418", extra: "Artificial Intelligence (AI)" },
      { sno: 10, name: "Mr. Marthala Praveen Kumar Reddy", dept: "ECE", roll: "17691A03D2", extra: "Artificial Intelligence (AI)" },
      { sno: 11, name: "Mr. Billi Bhargav", dept: "ECE", roll: "17691A0420", extra: "Data Science" },
      { sno: 12, name: "Mr. Ethamukkala Gnanendra Naidu", dept: "ECE", roll: "17699A0423", extra: "Data Science" },
      { sno: 13, name: "Ms. Vadla Madhuri", dept: "ECE", roll: "17699A0453", extra: "Data Science" },
      { sno: 14, name: "Ms. Maddala Maneesha", dept: "ECE", roll: "17699A0454", extra: "Data Science" },
      { sno: 15, name: "Mr. Vitalam Madhana Teja", dept: "ECE", roll: "18691A0487", extra: "Text Mining" },
      { sno: 16, name: "Mr. Malichetti Hima Vignesh", dept: "ECE", roll: "17699A0436", extra: "Text Mining" },
      { sno: 17, name: "Mr. Saparam Gnana Srinidhi", dept: "ECE", roll: "17699A0421", extra: "Text Mining" },
    ],
  },
  {
    title: "Asia University Virtual Summer Program 2020",
    country: "Taiwan",
    partner: "Asia University",
    period: "10 – 25 August 2020",
    description: "Short-term summer program on AI foundations and management applications.",
    participants: [
      { sno: 1, name: "Mr. Tanguturi Sanjeevaiah", dept: "CSE", roll: "17691A05C9", extra: "Artificial Intelligence (AI)" },
      { sno: 2, name: "Ms. A. Durga Dharani", dept: "ECE", roll: "17691A0433", extra: "Artificial Intelligence (AI)" },
      { sno: 3, name: "Ms. N.Bhavya Raj", dept: "ECE", roll: "17691A0423", extra: "Artificial Intelligence (AI)" },
      { sno: 4, name: "Mr. B. Chetan Sri Sai", dept: "Mech", roll: "17691A0332", extra: "Artificial Intelligence (AI)" },
      { sno: 5, name: "Ms. G.Anitha", dept: "Mech", roll: "17691A0309", extra: "Artificial Intelligence (AI)" },
      { sno: 6, name: "Mr. A.Arun", dept: "Mech", roll: "17691A0313", extra: "Artificial Intelligence (AI)" },
      { sno: 7, name: "Ms. M.Divya", dept: "Mech", roll: "17691A0340", extra: "Artificial Intelligence (AI)" },
      { sno: 8, name: "Ms. M. Jahnavi", dept: "CSE", roll: "17699A0522", extra: "Web Design" },
    ],
  },
  {
    title: "Global Immersion Program – Providence University",
    country: "Taiwan",
    partner: "Providence University",
    period: "16 December 2018 – 11 January 2019",
    description: "Sponsored international study program covering IoT, Big Data Analytics, and Artificial Intelligence, attended by both students and faculty.",
    participants: [
      { sno: 1, name: "Sunil Kumar Pattem", dept: "EEE", roll: "15699a0223", extra: "" },
      { sno: 2, name: "Harinatha Reddy Digavinti", dept: "EEE", roll: "15699a0210", extra: "" },
      { sno: 3, name: "Sai Sumanth Dega", dept: "EEE", roll: "15691a0258", extra: "" },
      { sno: 4, name: "Kodandaramu Saraipulikonda", dept: "EEE", roll: "15691A0225", extra: "" },
      { sno: 5, name: "Prem Kumar Gutta", dept: "EEE", roll: "15691A0247", extra: "" },
      { sno: 6, name: "Yandapalli Siva Reddy", dept: "ECE", roll: "15699a0494", extra: "" },
      { sno: 7, name: "Sravani Varapana", dept: "ECE", roll: "15699a0497", extra: "" },
      { sno: 8, name: "Sudheer Ragula", dept: "ECE", roll: "15699A04A1", extra: "" },
      { sno: 9, name: "Sai Santhosh Dinnuri", dept: "ECE", roll: "15699a0488", extra: "" },
      { sno: 10, name: "Umamaheswari Kaveti", dept: "ECE", roll: "16690a0402", extra: "" },
      { sno: 11, name: "M. Lokesh Gorrela Krishna Reddy", dept: "CSE", roll: "15691a0567", extra: "" },
      { sno: 12, name: "Srinath Laka", dept: "MECH", roll: "16695A0339", extra: "" },
      { sno: 13, name: "Patan Irfan Khan", dept: "MCA", roll: "16691F0010", extra: "" },
      { sno: 14, name: "Vamsi Thummakula", dept: "MCA", roll: "17699f00a0", extra: "" },
      { sno: 15, name: "Venkatesh Pagadala", dept: "MCA", roll: "17691f0056", extra: "" },
    ],
  },
  {
    title: "Asia Pacific Innovation Academy (APIA)",
    country: "China",
    partner: "Chinachem Foundation & European Innovation Institute",
    period: "19 July – 9 August 2018",
    description: "World's largest international innovation accelerator held at Shenzhen University with 350+ participants and mentors from Silicon Valley, EU & Asia. Team led by Sucharitha C. from MITS was selected in the top 5 among 42 teams.",
  },
];

/* ---------- EVENTS ---------- */

export const events: IREvent[] = [
  {
    title: "Visit of Dr. Mallesham Dasari – Northeastern University, Boston",
    date: "8 & 9 June 2026",
    description: "Visit of Dr. Mallesham Dasari, Director-Spatial Intelligence Research Group & Assistant Professor, Northeastern University, Boston, USA on 8th & 9th June 2026. Click below to view the official report.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/Pdf-Report%20of%20Dr.%20Mallesham%20Dasari%20-Director-Spatial%20Intelligence%20Research%20Group.pdf",
  },
  {
    title: "Awareness Program on Overseas Education – WhatNext Overseas Consultancy",
    date: "10 March 2026",
    description: "An Awareness Program on Overseas Education-WhatNext Overseas Consultancy held on 10th March 2026.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/WhatNext%20Consultancy%20Team.pdf",
  },
  {
    title: "BGSU Senior Leadership Team Visit",
    date: "20 November 2025",
    description: "Senior Leadership Team, from Bowling Green State University visited MITS Campus on 20th November 2025. The members of the respective team are:\n\n1. Dr. Rodney K. Rogers President Bowling Green State University- Ohio, USA\n2. Dr. Sandra Earle- University Advocate BGSU-Ohio, USA\n3. Dr. Ravi Krovi the Provost and Senior Vice President BGSU- Ohio, USA\n4. Dr. Ram Veerapaneni Vice Provost for Academic Affairs BGSU- Ohio, USA\n5. Dr. Wael Mokhtar, Dean College of Technology, Architecture and Applied Engineering BGSU-USA\n\nThe team visited MITS-Deemed to be University for strengthening the Academic collaborations, and to Sign in an MoA and MoU on 20th November 2025.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/Report%20of%20BGSU%20Team%2020.11.2025-min.pdf",
  },
  {
    title: "Alabama International Education & Economic Partnership Roundtable Interaction",
    date: "22 September 2025",
    description: "An exclusive academic roundtable interaction event was organized by One Window Overseas Education (One Window) and the Alabama International Education & Economic Partnership (ALIEEP) in Hotel ITC Kakatiya- Hyderabad-Telangana on 22nd September 2025.\n\nThe event aimed to foster collaboration between Indian academic institutions and universities in the state of Alabama, USA, and to explore opportunities for international education partnerships, student exchange programs, and research collaborations.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/Interactive%20Session%2022.09.2025.pdf",
  },
  {
    title: "Awareness Program on Higher Education Opportunities in Europe, UK & Australia",
    date: "16 September 2025",
    description: "MITS International Relations office organized an awareness program on “Higher Education Opportunities in Europe, UK & Australia” on 16th September 2025 in Seminar Hall-A at 2.00 to 4.00 PM.\n\nThe resource person Mr. Seshu Babu- Head of Marketing & Operations (Head of European Dept) Global Degrees, addressed the interested final year students of all branches. This program is aimed to enlighten students about the wide range of academic prospects, scholarships, and application procedures pertaining to the program and country specific.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/An%20Awareness%20Program%20on%2016-09-2025.pdf",
  },
  {
    title: "Interactive Session featuring H.E. Mr. Chang Nyun Kim, Consul General of Republic of Korea",
    date: "10 September 2025",
    description: "An Interactive Session was held on 10th September 2025, featuring His Excellency, Mr. Chang Nyun Kim, the Consul General of the Republic of Korea in Chennai organized by ASSOCHAM held in Hotel Novotel Vijayawada Varun, Andhra Pradesh. The session aimed to strengthen bilateral ties in the fields of trade and education between India and South Korea, focusing on sectors such as trade investment, infrastructure, education, food processing and smart agriculture.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/Interactive%20Session%2010-09-2025.pdf",
  },
  {
    title: "Visit of Ms. Barriga Dey – Director of Strategic Global Engagement, Rivier University, USA",
    date: "20 February 2025",
    description: "On 20th February, 2025, Ms. Barriga Dey, Director of Strategic Global Engagement and her team from Rivier University - Nashua, New Hampshire, United States visited Madanapalle Institute of Technology & Science (MITS) with the purpose of initiating an educational collaboration with MITS. This visit marks a significant step in strengthening ties between the two institutions, with a special focus on student exchange programs and the signing of a Memorandum of Understanding (MoU) to solidify future academic cooperation.\n\nThe visit of this delegation has been initiated by Mr. Venu Choudary, Head-Training & Placements. Dr. C. Yuvaraj, Principal of MITS extended a warm welcome along with the international relations team including Dr. Sremmant Basu, Dean-Administration International Relations & UGC Affairs Mrs. U. Vijaya Lakshmi, Senior Manager-International Relations and Student Counsellor and all the HoDs of various departments.\n\nThe team interacted with the students, followed by discussions about potential collaborative opportunities in higher education, international research initiatives, and, notably, the student exchange program that will provide both Rivier University and MITS students with an opportunity to study abroad, immerse with diverse cultures, and to broaden their academic horizons.\n\nThe highlight of this visit was a presentation of Rivier University and interaction with the students. This would be a great opportunity for the faculty and students to interact with the visiting delegation that shared the first-hand information and about the insights on the importance of global immersion in the world of work.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/Report%20of%20Rivier%20University.pdf",
  },
  {
    title: "2-Day US Delegation Visit & MoU Signing – Bowling Green State University, USA",
    date: "17 February 2025",
    description: "In the 2 days Visit, Dr. Ram Veerapaneni, Vice Provost for Academic Affairs, Dr. Warl Mokhtar, Dean College of Technology, Architecture and Applied Engineering and Mr. Can (Jon) Erdogmus, International Programs & Partnerships, International Student Recruiter/Advisor, Bowling Green State University, USA interacted with the administrators of Madanapalle Institute of Technology & Science, India and entered into academic partnership with MITS by signing in an MoU on 17th February 2025.\n\nThe MoU, which was officially signed on 17th of February 2025 by Madanapalle Institute of Technology & Science and Bowling Green State University- USA initiates the beginning of an exciting partnership aimed at fostering academic excellence, enhancing research efforts and providing unique global opportunities for students and faculty alike.\n\nThe agreement highlights several key areas of collaboration, including: Pathways for students to complete degree program, Joint Research Projects, Student and Faculty Exchange, Framing the Curriculum.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/Report%20of%20BGSU%2017.02.2025.pdf",
  },
  {
    title: "Visit and Research Training by Prof. Uday Kiran Rage & Japanese Students – University of Aizu",
    date: "12 – 24 August 2024",
    description: "Prof. Uday Kiran Rage, Associate Professor & Leader of Aizu Research Centre Cluster (B)- iTransporation, from the University of Aizu, - Japan has visited MITS, to strengthen the process of MoU requirements. In that process two Japanese students, Mr. Suzuki Shota pursuing Master's and Mr. Usami pursuing a Bachelor's program, have accompanied him to complete their Two-Week Research Internship Program. They stayed in MITS from 12-08-2024 to 24-08-2024.\n\nProf. Uday Kiran Rage, has given an intensive, hands-on training for 16 hours to the students of School of Computers in the fields such as Artificial Intelligence, Machine Learning, Data mining, Data Structures and pattern mining, covering the topics in various scenarios such as traffic congestion, weather, and sales data. Nearly 80 students have taken advantage of his lectures and are now focusing on research-based education.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/Report%20of%20University%20of%20Aizu.pdf",
  },
  {
    title: "MoU Discussion & Research Internships Lecture by Prof. Uday Kiran Rage",
    date: "2 April 2024",
    description: "Prof. Uday Kiran Rage, Associate Professor – Fukushima- Japan has visited MITS on 2nd April 2024, discussed with the Administrators about the MoU with University of AIZU-Japan. He addressed the students of AI and highlighted the importance of research internship & MS program opportunities in University of AIZU-Japan.",
  },
  {
    title: "Visit of Prof. Cédric Bornand – REDS Institute, HEIG-VD, Switzerland",
    date: "27 October 2023",
    description: "Prof. Cédric Bornand working in the Reconfigurable & Embedded Digital Systems (REDS) Institute of the HEIG-VD, Switzerland visited MITS on 27th October 2023 and discussed with the administrators about the opportunities in Switzerland.",
  },
  {
    title: "Visit of Japanese Academic Delegation on Machine Learning & Smart Industry",
    date: "31 July to 2nd August 2023",
    description: "Japanese Delgation comprising of Prof. Yukari Shirota, Gakushuin University, and Prof. Tetsuji Kuboyama from Gakushuin University, and Prof. Takako Hashimoto from Chiba University of Commerce-Japan, visited Madanapalle Institute of Technology & Science campus on 31st July.\n\nAs part of this, an interaction session with students and faculty was organized on 1st of August, Prof. Takako Hashimoto enabled the students about IEEE ethics and their purpose. Prof. Tetsuji Kuboyama enabled the faculty and students about more opportunities in the fields of construction, machine parts and tool industry, electronics and information, ship building and ship machinery, etc. as more than 60 lakh job opportunities will be created in Japan by 2030.\n\nFurther, the School of Management and School of Computing will work on joint research in the fields of Artificial Intelligence, Machine learning, and Data Science. This is a good opportunity to encourage students and faculty in academic excellence and innovation.",
  },
  {
    title: "Visit of Asia University Delegation (5 Deans)",
    date: "7 July 2023",
    description: "The delegation comprises: Dr. Yinghuei Chen- Dean of International College, Dr. Jiunn-Jong Wu Dean of College of Medical and Health Sciences, Dr. Ching-Hsien Hsu Dean of College of Information and Electrical Engineering, Dr. Chun-Wei Lin- Dean of College of Management, Dr. Charles C.N. Wang Dean of Industry Academia Collaboration.\n\n5 Deans from Asia University- Taiwan, which is one of the world’s top 900 universities, visited MITS on 7th July 2023. MITS entered into Memorandum of Understanding with Asia University-Taiwan in November 2017 for a period of 5 years and as a result many academic activities like internships, collaborative activities. The MoU was renewed. Further, a Memorandum of Agreement with the College of Information and Electrical Engineering and also with the College of Management of Asia University - Taiwan MITS signed an MoA for further academic collaboration. This visit is very significant as many of MITS students will get good opportunities to do research, internships and also MS programs in Asia University - Taiwan.",
  },
  {
    title: "3-Day Visit of International Delegation from Brno University of Technology, Czech Republic",
    date: "20 – 23 February 2023",
    description: "A Three Day Program of International Delegation from BRNO University of Technology – Czech Republic- Europe Prof. Jiri HAZE Head of Microelectronics Dept and Dr. Pavel STEFFAN Associate Professor and Secretary of the Dept of Microelectronics in BRNO University of Technology – Czech Republic- Europe visited MITS from 20-02-2023 to 23-02-2023.\n\nThe team entered into a detailed discussion on the outline of the MoU with MITS towards 1+3 Semesters MS Program in Microelectronics as a collaborative of MITS and BRNO University of Technology. The team also interacted with the students of ECE & EEE and inspired them about the trending technologies in the field of semiconductors. They also motivated the students to study MS in Microelectronics in BRNO University of Technology-Czech Republic Europe.",
  },
  {
    title: "Interaction on University of Aizu MoU by Prof. Uday Kiran Rage",
    date: "30 December 2022",
    description: "Prof. Uday Kiran Rage from AIZU University – Japan visited MITS on 30-12-2022. He interacted with International Relations Office and the administrators regarding the MoU and research activities with AIZU University in Japan. The draft MoU has been shared and it is under progress for finalization.",
  },
  {
    title: "Guest Lecture on Australian Higher Education by Prof. Subhas Mukhopadhyay",
    date: "29 December 2022",
    description: "Prof. Subhas Mukhopadhyay from Macquarie University Sydney- Australia visited MITS on 29-12-2022. He interacted with the HoDs, administrators and the faculty for collaborative & research activities with Macquarie University Sydney- Australia. Thereafter, a guest lecture was conducted in the Seminar Hall for the benefit of Mechanical & Computer Science students, highlighting the higher education opportunities in Australia.",
  },
  {
    title: "Virtual Session on Higher Education Opportunities in Europe by Dr. Vladimir Kulish",
    date: "7 September 2022",
    description: "A Virtual Session by Dr. Vladimir Kulish - Visiting Professor of Czech Technical University, Czech Republic- Europe: He highlighted about the “Higher Education Opportunities in Europe\" for the benefit of students of ECE & EEE. The event took place in MITS Auditorium on 07-09-2022.",
  },
  {
    title: "MITS Delegation Visit to Brno University of Technology, Czech Republic",
    date: "7 – 11 June 2022",
    description: "Dr. Sremmant Basu visited BRNO University of Technology- Czech Republic from 07-06-2022 to 11-06-2022 along with Dr. Vladimir Kulish visiting professor MITS. The team met Prof. Jiri HAZE Head of the dept of Microelectronics and the other administrators and discussed way forward for 1+3 Semesters MS Program Model.",
  },
  {
    title: "Virtual Session on Avenues in Europe for Management Students by Dr. Vladimir Kulish",
    date: "4 August 2020",
    description: "A Virtual Session by Dr. Vladimir Kulish - Visiting Professor of Czech Technical University, Czech Republic- Europe. He enlightened the students of Management Studies Department on the topic,\" Opportunities in Europe.\" The event had happened in MITS Auditorium on 04-08-2020.",
  },
  {
    title: "Global Career Talks in AI & Machine Learning by Mr. Phani Madhav Jathi",
    date: "20 June 2022",
    description: "Mr. Phani Madhav Jathi, Senior manager, Citrix Systems from USA had addressed the students of School of Computing, on 20th June, 2022 on the topic in “Global Career opportunities in Artificial Intelligence & Machine learning. The career talk gave the students a lot of insights on 20-06-2022.",
  },
  {
    title: "MoU Signing & Transcendental Meditation Classes – Maharishi Vedic University, Holland",
    date: "18 October 2019",
    description: "Prof. Brian from Maharshi Vedic University Holland, Prof. Ashley Deans Executive Director of Maharishi School of the Age of Enlightenment and Mr. Thai and Mrs. Sucha from Thailand visited MITS on 18th October, 2019. Prof. Rambabu Kodali Director of MITS and Prof. Brian has signed in the MoU, between two institutions to initiate Transcendental Meditation Classes in MITS and to foster research collaborations.",
  },
  {
    title: "Induction Session on Neuroscience by Prof. Brian Levine – Maharishi Vedic University",
    date: "4 September 2019",
    description: "Prof. Brian Levine Professor in Neuro Science ( Maharshi Vedic University – Holland) and Sri. Chandra Sekhar visited the campus on 4th September 2019, addressed the faculty of MCA Dept and also took a session in the Induction Program for the MBA & MCA new entrants.",
  },
  {
    title: "Global Connectivity and International Collaboration discussions by Dr. Vladimir Kulish",
    date: "26 – 29 August 2019",
    description: "Dr. Vladimir Kulish, (Professor & former Vice Chancellor of Avantika University) Czech Technological University, Prague visited MITS and was in the campus from 26th August to 29th August 2019 (3 days) to establish global connectivity. He interacted with Deans & HoDs of Electrical & Mechanical Engineering faculty to explore the avenues for international collaborations, internships & other Exchange Programs.",
  },
  {
    title: "Seminar on Higher Education Abroad by Azent Overseas Education Limited",
    date: "28 August 2019",
    description: "Mr. R. Premanand, Center Head, Mr. Pritam Save, Marketing Manager & Mr. Sailesh Davey Senior Marketing Manager from AZENT OVERSEAS EDUCATION LIMITED conducted a Seminar on 28th August 2019 in MITS Auditorium on, “ Higher Education opportunities in1000+ TOP Universities abroad USA • Canada • Uk Ireland • Australia New Zealand • Germany” and interacted with the students extending admission and free IELTS coaching.",
  },
  {
    title: "Vidya Vahini Study Abroad funding awareness by APNRT Society",
    date: "26 August 2019",
    description: "Mr. Praveen Career Counsellor from APNRT (AP Govt Non-Resident Telugu Society) visited MITS on 26th August 2019 to create awareness about the Govt Program & support to go abroad for higher studies. He interacted with the students and enabled the students about Vidya Vahini program and also the avenues for obtaining the funds for higher education abroad.",
  },
  {
    title: "Importance of AI in Leading India by Brunel University (UK) & Bennett University",
    date: "14 May 2019",
    description: "Dr. George Ghinea, Reader in Computer Science – Department of Computer Science at Brunel University & Dr. Sridhar Swaminathan, Assistant Professor at Bennett University, Greater Noida visited the campus on 14th May 2019. The team interacted with MITS - AI team and Heads of the departments to give an overview of the importance of Artificial Intelligence in Leading India & exploring research collaborations with Bennett University & Brunel University London, UK.",
  },
  {
    title: "MoU setting up Mandarin Language training center – YUNTECH, Taiwan",
    date: "16 April 2019",
    description: "Prof. Dr. Neng-Shu Yang President, Prof. Yu-Hsun Nien, Vice Dean of Office of International Affairs and Ms. Carol Qiu, Manager-International Relations of National Yunlin University of Science and Technology (YUNTECH) -Taiwan visited the campus on 16th April 2019. The President signed the MoU on setting up of Mandarin language training center & arranging a teacher to train the students. The President and the team addressed the faculty & students and created awareness about MS & Ph.D. programs in YUNTECH-Taiwan.",
  },
  {
    title: "Japanese Job Opportunities awareness by Conomity, Tokyo",
    date: "6 March 2019",
    description: "Mr. Kobayashz, CEO & owner of Conomity and Mr. Kentaro Kuroiwa, H R Manager from Tokyo –Japan, visited MITS on 6th March 2019 along with Dr. G.S. Saggu and Mr. Manish Gupta of Orion Productions & Consulting Pvt. Ltd, Japan and interacted with MITS students and created an awareness about the job opportunities in Japan.",
  },
  {
    title: "Agreement to establish Mandarin Language Centre – YUNTECH, Taiwan",
    date: "13 February 2019",
    description: "National Yunlin University of Science & Technology- Taiwan Dean of International Relations & Professor in Mechanical Engineering Prof. Dr. Stanley Tseng and Ms. Carol Qiu- Manager -International Relations visited MITS on 13th February 2019 and signed an agreement to establish Mandarin Language Centre along with a trainer in MITS Campus.",
  },
  {
    title: "Space Science & Astronomy research proposal by Chungnam National University, South Korea",
    date: "28 January 2019",
    description: "Dr. S. Eswar, Senior Researcher, Space Science Laboratory, Department of Astronomy and Space Science, Chungnam National University, visited MITS on 28th January 2019. There is a proposal for initiating future space research activities in MITS.",
  },
  {
    title: "MoU & Special Communication Research collaboration – Kookmin University, South Korea",
    date: "17 – 20 December 2018",
    description: "Prof. Soo Hyun Park, President, Special Communication Research Center and Prof. Soo Young Shin, Vice-President, Special Communication Research Center from Kookmin University visited MITS as part of MoU between Special Communication Research Center (SPRC), Kookmin University, Seoul, South Korea, and were in the campus from 17th to 20th December 2018.",
  },
  {
    title: "Innovative Technologies Seminar by Research Scientist of University of Heidelberg, Germany",
    date: "13 December 2018",
    description: "Dr. Sreeganesh Thottempudi, a Research scientist from University Of Heidelberg, Germany visited the campus, on 13th December 2018 and addressed the faculty & Students of MCA on \"Innovative Ideas on new Technologies\" organized by Dept of Computer Applications.",
  },
  {
    title: "Careers & Japanese Proficiency Awareness by Silverpeak Global Private Ltd",
    date: "30 August 2018",
    description: "Mr. Vinay N Director - INDIA SILVERPEAK GLOBAL PRIVATE LTD, Bangalore visited MITS on 30th of August 2018, to create awareness on “Opportunities in Japan & Japanese Language Proficiency” addressed students of all Engineering branches from 11.00 AM to 4.00 PM in Main Seminar Hall.",
  },
  {
    title: "IUCEE-EPICS Societal Projects Workshop by Purdue University, USA",
    date: "3 July 2018",
    description: "Prof. William Oakes Director EPICS Purdue University & Dr. Kantha Reddy, Director of IUCEE India Epics Team & Irlapati Nagababu APSSDC visited MITS on 3rd July 2018, to conduct IUCEE-EPICS workshop (Engineering Projects In Community Services) in Scale-Up Classroom. He visited the campus, addressed the Research &Develop Department, interacted with the faculty involved in the societal projects. Further, he also interacted with the students who are involved in research activities and enabled all about the significance of EPICS Projects.",
  },
];

export const workshops: IREvent[] = [
  {
    title: "The First International Research Awareness Workshop (IRAW)",
    date: "16 – 18 June 2022",
    description: "The First International Research Awareness Workshop (IRAW) was held at MITS for 3 days to establish a pathway for new innovations and international research programmes. The workshop was inaugurated by Dr. C. Yuvaraj (Principal), Dr. Venkat Ratnam (NARL), and other academic council members, setting a milestone for global research collaborations at MITS.",
    reportUrl: "https://mits.ac.in/assets/pdf/oir/Report-%20The%20First%20International%20Research%20Awareness%20Workshop.pdf",
    scientists: [
      "Dr. Venkat Ratnam (Guest of Honour) – Shanti Swarup Bhatnagar Awardee, Senior Scientist & Head, NARL, Tirupati",
      "Prof. Priyadarshanam – Indian Institute of Space Science & Technology (IIST), Thiruvananthapuram, Kerala",
      "Prof. Dr. Harsha Simha M. S – Dept. of Avionics, IIST Thiruvananthapuram",
      "Dr. Eswar Sunkara – Senior Researcher, Pusan National University, South Korea",
      "Dr. Raghavendra Ashrit – Scientist-F, National Centre for Medium Range Weather Forecasting (NCMRWF), Ministry of Earth Sciences (MoES)",
      "Dr. Niranjan Kumar Kondapalli – Scientist-D, NCMRWF, Ministry of Earth Sciences (MoES)",
      "Dr. Jothiram Vivekanandan – Senior Scientist, National Centre for Atmospheric Research (NCAR), Boulder, NASA Colorado, USA",
      "Dr. Chalachew Kindie Mengist – Scientist, Adama Science and Technology University, Ethiopia"
    ],
    objectives: [
      "Establishment of research centres at MITS",
      "Giving a major impetus to international collaborations",
      "Securing financial support from renowned global organizations",
      "Arranging faculty and student visits to leading global labs",
      "Involving both faculty and students directly in high-impact research activities."
    ]
  },
  {
    title: "International Workshop on Advances in Space & Radar Technologies",
    date: "8 – 10 December 2022",
    description: "An International 3-day workshop focusing on Advances in Space & Radar Technologies. Distinguished scientists from ISRO, NARL, and ATRAD Australia interacted with students and faculty, sharing valuable insights on space exploration, radar signal processing, and atmospheric research.",
    reportUrl: "https://mits.ac.in/assets/pdf/oir/Report-%20The%20First%20International%20Research%20Awareness%20Workshop.pdf",
    scientists: [
      "Prof. G. Viswanath – Indian Space Research Organisation (ISRO)",
      "Dr. V. Vara Prasad – Satish Dhawan Space Centre (SHAR), Sriharikota",
      "Dr. M. Venkat Ratnam – National Atmospheric Research Laboratory (NARL)",
      "Dr. Durga Rao – Head of Radar Group, NARL",
      "Dr. P. V. Ramana – Radar Tracking Head, NARL",
      "Dr. Chris Adami – Chief Engineer, ATRAD, Australia",
      "Prof. Ion Reid – Director, ATRAD, Australia"
    ],
    objectives: [
      "Create awareness about Radar and Space technologies and their real-world applications",
      "Facilitate interactions between students and leading scientists from ISRO, NARL, and ATRAD Australia",
      "Promote space research and radar technology training at MITS"
    ]
  }
];

/* ---------- STANFORD INITIATIVE (UIF) ---------- */

export const stanfordAbout = {
  intro: [
    "The University Innovation Fellows (UIF) program empowers students to become agents of change on their campus. The Fellows are a global community of students leading a movement to ensure that all students gain the necessary attitudes, skills and knowledge required to compete in the economy of the future. These student leaders create new opportunities that help their peers develop an entrepreneurial mindset, build creative confidence, seize opportunities, define problems and address global challenges.",
    "Fellows create student innovation spaces, found entrepreneurship organisations, host experiential events, and work with faculty and administrators to develop courses. They serve as advocates for lasting institutional change with academic leaders and represent their schools at national events.",
    "The University Innovation Fellows is a programme of Stanford University's Hasso Plattner Institute of Design (d.school). The programme was created as part of the National Center for Engineering Pathways to Innovation (Epicenter), a five-year National Science Foundation grant.",
    "MITS has produced multiple batches of Fellows since Spring 2017, making MITS one of the most consistently represented Indian institutions in the global UIF network.",
  ],
  coordinator: {
    name: "Mrs. U. Vijaya Lakshmi",
    designation: "UIF Programme Coordinator",
    emailGmail: "mitsuifellows@gmail.com",
    emailOffice: "uif@mits.ac.in",
    website: "http://mitsuifellows.wixsite.com/mitsuif",
    qsIssue: "QS Wow News Issue No. 24 (February – April 2017)",
  },
};

export const stanfordFellows: Fellow[] = [
  {
    batch: "Fall 2024",
    facultyChampions: "Mr. Arjun Pogaku & Mrs. Vijaya Lakshmi Udayagiri",
    students: [
      { sno: 1, name: "Siri Reddy Nandi Reddy", dept: "CSE-D", roll: "23691A05K5", wiki: "https://universityinnovation.org/wiki/Fellow:Siri_Reddy_Nandireddy" },
      { sno: 2, name: "Devi Sri Samhita Kattamudi", dept: "CSE-D", roll: "23691A05l4", wiki: "https://universityinnovation.org/wiki/Fellow:Devi_Sri_Samhita_Kattamudi" },
      { sno: 3, name: "Jyothi Venkat Reddy Vellapalem", dept: "CSC-A", roll: "23691A3752", wiki: "https://universityinnovation.org/wiki/Fellow:Jyothi_Venkat_Reddy_Vellapalem" },
      { sno: 4, name: "Sai Charan Reddy Poreddy", dept: "CAI-C", roll: "23691A31E0", wiki: "https://universityinnovation.org/wiki/Fellow:P._Sai_Charan_Reddy" },
    ],
  },
  {
    batch: "Fall 2023",
    facultyChampions: "Mrs. Vijaya Lakshmi Udayagiri & Dr. Kusuma",
    students: [
      { sno: 1, name: "Munithanoj Vasanthapalle", dept: "CSE-AI", roll: "22691A31A1", wiki: "https://universityinnovation.org/wiki/Fellow:V.MUNI_THANOJ" },
      { sno: 2, name: "Lokesh Ayyaswamy", dept: "CSE-AI", roll: "22691A3180", wiki: "https://universityinnovation.org/wiki/Fellow:A_Lokesh" },
      { sno: 3, name: "Ameya Sree Kasa", dept: "CSE-AI", roll: "21691A3110", wiki: "https://universityinnovation.org/wiki/Fellow:Ameya_Sree" },
      { sno: 4, name: "Dharani Vemuri", dept: "EEE", roll: "21691A0213", wiki: "https://universityinnovation.org/wiki/Fellow:Dharani_Vemuri" },
    ],
  },
  {
    batch: "Fall 2022",
    facultyChampions: "Dr. Balaji Ramanujam, Mrs. Kusuma & Mrs. Vijaya Lakshmi Udayagiri",
    students: [
      { sno: 1, name: "R. Guru Aishwarya Reddy", dept: "CSE", roll: "20691A0537", wiki: "https://universityinnovation.org/wiki/Fellow:Guru_Aishwarya_Reddy.R" },
      { sno: 2, name: "K. Sai Spoorthi", dept: "CSE", roll: "21691A05I8", wiki: "https://universityinnovation.org/wiki/Fellow:K_._Sai_Spoorthi" },
      { sno: 3, name: "S. Chinmai", dept: "EEE", roll: "21691A0211", wiki: "https://universityinnovation.org/wiki/Fellow:Chinmai_Seshadri_(2022)" },
      { sno: 4, name: "Desai Rohith Reddy", dept: "CSC", roll: "21691A3743", wiki: "https://universityinnovation.org/wiki/Fellow:Desai_Rohith_Reddy" },
      { sno: 5, name: "D. Pavithra", dept: "CSE", roll: "21691A05E3", wiki: "https://universityinnovation.org/wiki/Fellow:Pavithra_Dinnemeeda" },
      { sno: 6, name: "Sai Nithya Sree K.", dept: "CSD", roll: "21691A3289", wiki: "https://universityinnovation.org/wiki/Fellow:Sai_Nithya_Sree_Kummara" },
    ],
  },
  {
    batch: "Fall 2021",
    facultyChampions: "Dr. Balaji Ramanujam & Mrs. Vijaya Lakshmi Udayagiri",
    students: [
      { sno: 1, name: "Thota Roopesh", dept: "CSE", roll: "18691A05B3", wiki: "https://universityinnovation.org/wiki/Fellow:Thota_Roopesh" },
      { sno: 2, name: "Hima Siri Kadepalli", dept: "CSE", roll: "19691A05J5", wiki: "https://universityinnovation.org/wiki/Fellow:Hima_Siri_Kadepalli" },
      { sno: 3, name: "Sine Nitish", dept: "CSE", roll: "20691A05B4", wiki: "https://universityinnovation.org/wiki/Fellow:Sine_Nitish" },
      { sno: 4, name: "Manvitha BL", dept: "CSE", roll: "20691A0585", wiki: "https://universityinnovation.org/wiki/Fellow:Manvitha_BL" },
      { sno: 5, name: "Sai Raghavi Vagga", dept: "CSE", roll: "20691A05F6", wiki: "https://universityinnovation.org/wiki/Fellow:Sai_Raghavi_Vagga" },
      { sno: 6, name: "Malle Sangeetha", dept: "CSE", roll: "20691A05G2", wiki: "https://universityinnovation.org/wiki/Fellow:Malle_Sangeetha" },
      { sno: 7, name: "Puneeth Gangarapu", dept: "CSE", roll: "20691A05L8", wiki: "https://universityinnovation.org/wiki/Fellow:Puneeth_Gangarapu" },
      { sno: 8, name: "Sulasya Jangam Mopidi", dept: "CSE", roll: "20691A05H6", wiki: "https://universityinnovation.org/wiki/Fellow:Sulasya_Jangam_Mopidi" },
    ],
  },
  {
    batch: "Fall 2020",
    facultyChampions: "Dr. Balaji Ramanujam & Dr. Pradeep Kumar",
    students: [
      { sno: 1, name: "T. Puthin Kumar Reddy", dept: "CSE", roll: "17691A05A3", wiki: "https://universityinnovation.org/wiki/Fellow:PUTHIN_KUMAR_REDDY_THALLAPALLI" },
      { sno: 2, name: "Sai Sumith Gorla", dept: "IT", roll: "17691A1241", wiki: "https://universityinnovation.org/wiki/Fellow:Sai_Sumith_Gorla" },
      { sno: 3, name: "Abdul Sameer Shaik", dept: "ECE", roll: "18691A0401", wiki: "https://universityinnovation.org/wiki/Fellow:Abdul_Sameer_Shaik" },
      { sno: 4, name: "Likitha Kurapothula", dept: "ECE", roll: "19695A0431", wiki: "https://universityinnovation.org/wiki/Fellow:Likhitha_Kurapothula" },
      { sno: 5, name: "Vishal Meda", dept: "CST", roll: "18691A2860", wiki: "https://universityinnovation.org/wiki/Fellow:Vishal_Meda" },
      { sno: 6, name: "Poojitha Reddy Konkala", dept: "CST", roll: "19691A2891", wiki: "https://universityinnovation.org/wiki/Fellow:Poojitha_Reddy_Konkala" },
      { sno: 7, name: "Sasi Supraja Muthakana", dept: "CSE", roll: "19691A05E2", wiki: "https://universityinnovation.org/wiki/Fellow:Sasi_Supraja_Muthakana" },
      { sno: 8, name: "B. N. V. Vasu Deva Rao", dept: "ECE", roll: "19691A04M5", wiki: "https://universityinnovation.org/wiki/Fellow:B.N.V._Vasu_Deva_Rao" },
    ],
  },
  {
    batch: "Fall 2019",
    facultyChampions: "Dr. Balaji Ramanujam & Dr. Pradeep Kumar",
    students: [
      { sno: 1, name: "K. Naga Bharat Kumar", dept: "CSE", roll: "18691A0584", wiki: "http://universityinnovation.org/wiki/Bharat" },
      { sno: 2, name: "M. Naga Bhavana", dept: "CSE", roll: "18691A0585", wiki: "http://universityinnovation.org/wiki/Bhavana" },
      { sno: 3, name: "K V N S Jayanth Sarma", dept: "ECE", roll: "18691A0474", wiki: "http://universityinnovation.org/wiki/K_V_N_S_Jayanth_Sarma" },
      { sno: 4, name: "N. Sai Sucharitha", dept: "ECE", roll: "18691A04G1", wiki: "http://universityinnovation.org/wiki/Sucharitha" },
      { sno: 5, name: "S. Sidharth Kartheek", dept: "MECH", roll: "17691A0312", wiki: "http://universityinnovation.org/wiki/SIDHARTHSARASA" },
      { sno: 6, name: "P. Himabindu", dept: "CSE", roll: "18691A0551", wiki: "http://universityinnovation.org/wiki/HIMABINDU_PERAMALA" },
      { sno: 7, name: "Sarafi Ahamed", dept: "EEE", roll: "18691A0251", wiki: "http://universityinnovation.org/wiki/Sarafi" },
      { sno: 8, name: "D. Sharon Jerusha", dept: "ECE", roll: "18691A04H3", wiki: "http://universityinnovation.org/wiki/Sharon" },
    ],
  },
  {
    batch: "Fall 2018",
    facultyChampions: "Dr. Balaji Ramanujam",
    students: [
      { sno: 1, name: "Abhishek P", dept: "EEE", roll: "17691A0201", wiki: "http://universityinnovation.org/wiki/Abhishek_pasupulate" },
      { sno: 2, name: "Rohith B.", dept: "CSE", roll: "17691A05B1", wiki: "http://universityinnovation.org/wiki/Rohith.B" },
      { sno: 3, name: "Sreevani Kanala", dept: "ECE", roll: "17699A0498", wiki: "http://universityinnovation.org/wiki/Sreevanikanala" },
      { sno: 4, name: "Tasmiya Samreen", dept: "ECE", roll: "17699A04A6", wiki: "http://universityinnovation.org/wiki/Tasmi_samreen" },
    ],
  },
  {
    batch: "Spring 2018",
    facultyChampions: "Mrs. U. Vijaya Lakshmi",
    students: [
      { sno: 1, name: "Arjun Chakravarthi P", dept: "ECE", roll: "15691A04N8", wiki: "http://universityinnovation.org/wiki/Arjun_Chakravarthi_Pogaku" },
      { sno: 2, name: "Hema Malini C", dept: "ECE", roll: "17691a0456", wiki: "http://universityinnovation.org/wiki/Hema_Malini_Charvakula" },
      { sno: 3, name: "Preethi Koduru", dept: "EEE", roll: "16695a0216", wiki: "http://universityinnovation.org/wiki/Preethi_Koduru" },
      { sno: 4, name: "Swapna Priya Pala", dept: "EEE", roll: "16691a0253", wiki: "http://universityinnovation.org/wiki/Swapna_Priya_Pala" },
    ],
  },
  {
    batch: "Fall 2017",
    facultyChampions: "Dr. Vara Prasad",
    students: [
      { sno: 1, name: "Harshavardhan B", dept: "MBA", roll: "16691e0061", wiki: "http://universityinnovation.org/wiki/Harshavardhan_Bandarla" },
      { sno: 2, name: "Kusuma Amilineni", dept: "ECE", roll: "14691a0482", wiki: "http://universityinnovation.org/wiki/Kusuma_Amilineni" },
      { sno: 3, name: "Sucharitha C", dept: "ECE", roll: "15699A04A0", wiki: "http://universityinnovation.org/wiki/Sucharitha_Chokkappagari" },
      { sno: 4, name: "Umeshwar Reddy N", dept: "ECE", roll: "15699A04A8", wiki: "http://universityinnovation.org/wiki/Umeshwar_Reddy" },
    ],
  },
  {
    batch: "Spring 2017",
    facultyChampions: "Dr. Rajendra Prasad Narne",
    students: [
      { sno: 1, name: "Nishkala Kollu", dept: "ECE", roll: "14691A04C1", wiki: "http://universityinnovation.org/wiki/KOLLU_NISHKALA" },
      { sno: 2, name: "Manasa Kakarla", dept: "ECE", roll: "14691A04K6", wiki: "http://universityinnovation.org/wiki/Manasa_kakarla" },
      { sno: 3, name: "Praneeth Sai", dept: "MECH", roll: "14691a03e0", wiki: "http://universityinnovation.org/wiki/Praneeth_sai" },
      { sno: 4, name: "Suchitra Nidiginti", dept: "ECE", roll: "14691A04C1", wiki: "http://universityinnovation.org/wiki/Suchitra_nidiginti" },
    ],
  },
  {
    batch: "Fall 2016",
    facultyChampions: "Dr. B. Rama Kumar",
    students: [
      { sno: 1, name: "Anitha Narnavaram", dept: "CSE", roll: "14691a0598", wiki: "http://universityinnovation.org/wiki/Anitha_Narnavaram" },
      { sno: 2, name: "Charan Sai Pala", dept: "ECE", roll: "14691a0432", wiki: "http://universityinnovation.org/wiki/Charan_Sai_Pala" },
      { sno: 3, name: "Priyanka Bonthala", dept: "CSE", roll: "14691a0569", wiki: "http://universityinnovation.org/wiki/Priyanka_Bonthala" },
      { sno: 4, name: "Sai Kiran Kumar Reddy", dept: "ECE", roll: "14691a04g2", wiki: "http://universityinnovation.org/wiki/Sai_Kiran" },
      { sno: 5, name: "M. N. Sameer Ahmed", dept: "ECE", roll: "14691A04H0", wiki: "http://universityinnovation.org/wiki/Sameer_Ahmed" },
      { sno: 6, name: "Sindhu Bhonsley", dept: "CSE", roll: "14691a0590", wiki: "http://universityinnovation.org/wiki/Sindhu_Bhonsley" },
    ],
  },
];

export const stanfordGallery: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/uif6.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/uif7.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/uif8.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/UIF_2022.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/UIF_2021.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/cor1.png",
  "https://mits.ac.in/public/uploads/internationalrelation/IMG-20241214-WA0035.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/427ca6ac5a84e22be86999e91d3a4f5e.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/622dadcb06ff56feb21b462f9fe45ad1.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/b888ddfef19bf417b1c31eba407d986a.jpeg",
];

export const internshipGallery: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/sakura4.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/sakura3.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/sakura2.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/sakura1.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/internships2024.png",
  "https://mits.ac.in/public/uploads/internationalrelation/1-min.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/IMG-20210106-WA0008.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/IMG-20210106-WA0007.jpg",
];

export const fellowshipGallery: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/IMG-20241214-WA0035.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/cor1.png",
  "https://mits.ac.in/public/uploads/internationalrelation/UIF_2022.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/UIF_2021.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/uif6.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/uif7.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/uif8.jpeg",
];

export const globalGallery: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/taiwanasiauniversity-min.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/taiwanasiauniversity-min (1).jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/asia.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/providence.jpg",
];

export const eventGallery: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/bowling.JPG",
  "https://mits.ac.in/public/uploads/internationalrelation/Overseas%20Education.JPG",
  "https://mits.ac.in/public/uploads/internationalrelation/Rivier%20University%201.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/Rivier%20University%202.JPG",
  "https://mits.ac.in/public/uploads/internationalrelation/ram.JPG",
  "https://mits.ac.in/public/uploads/internationalrelation/us-mou.JPG",
];

export const workshopGallery: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/iraw_1.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/iraw_2.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/iraw_3.jpeg",
];

export const heroBanners: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/DSC_6447.JPG",
  "https://mits.ac.in/public/uploads/internationalrelation/DSC_9252-min.JPG",
  "https://mits.ac.in/public/uploads/internationalrelation/c466d28d5c52137b70bc61a2ccea05f7.JPG",
];

export const heroBanner =
  "https://mits.ac.in/public/uploads/internationalrelation/DSC_6447.JPG";

export const heroStats = [
  { value: "20+", label: "Global University Partners" },
  { value: "9", label: "Countries" },
  { value: "11", label: "UIF Batches since 2016" },
  { value: "300+", label: "Students Sent Abroad" },
];

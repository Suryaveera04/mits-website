// ISTE (Indian Society for Technical Education) Chapter Data
// Verbatim synchronized from official source: https://mits.ac.in/iste

export interface AwardItem {
  title: string;
  url: string;
}

export interface ConsolidatedDoc {
  title: string;
  url: string;
}

export interface ActivityItem {
  title: string;
  pdfUrl: string;
}

export interface CommitteeMember {
  name: string;
  designation: string;
  department: string;
}

export interface CoordinatorInfo {
  name: string;
  designation: string;
  department: string;
  address: string[];
  phone: string;
  email: string;
}

export const isteCoordinator: CoordinatorInfo = {
  name: "Dr. Ved Prakash",
  designation: "Assistant Professor",
  department: "Department of MECH",
  address: [
    "Madanapalle Institute of Technology & Science",
    "Deemed to be University",
    "Madanapalle-Kadiri Road",
    "kurabalakota Mandal, Madanapalle-517325",
    "Andhra Pradesh, India",
  ],
  phone: "+91-8571-280255",
  email: "istechapter@mits.ac.in",
};

export const isteCommitteeMembers: CommitteeMember[] = [
  {
    name: "Mr. Pujari Rajesh",
    designation: "Assistant Professor",
    department: "MECH Department",
  },
  {
    name: "Mr. K. Sathish",
    designation: "Assistant Professor",
    department: "CSE Department",
  },
  {
    name: "Mr. K. Mahammad",
    designation: "Assistant Professor",
    department: "AI Department",
  },
  {
    name: "Mrs. R. Roopa",
    designation: "Assistant Professor",
    department: "DS Department",
  },
];

export const isteAbout: string = "The Indian Society for Technical Education (ISTE) stands as the foremost national professional non-profit organization dedicated to technical education in engineering and technology. It is duly registered under the Societies Registration Act of 1860. The ISTE student chapter at MITS was established in 2011 with 72 faculty members and 275 students. Its activities span various dimensions, including career development, subject enhancement, personality grooming, communication skills refinement, aptitude nurturing, and preparation for competitive examinations. The overarching aim of the ISTE is to mould faculty into master trainers and students into master learners. To achieve these objectives, a plethora of programs are regularly organized, comprising invited talks by industry experts, industrial visits, seminars, workshops for subject enhancement, competitions, quizzes, audio-visual presentations, and more. Renowned for its vibrancy and activity, the ISTE student chapter stands out as the most dynamic entity on campus, orchestrating expert talks, quizzes, paper presentations, robotics contests, hands-on events, and other engaging activities.";

export const isteAwards: AwardItem[] = [
  {
    "title": "ISTE AP State Awards-2022",
    "url": "https://mits.ac.in/assets/pdf/assoc/ISTE AP State Award 2022.pdf"
  },
  {
    "title": "ISTE AP State Awards-2021",
    "url": "https://mits.ac.in/assets/pdf/assoc/ISTE AP State Award 2021.pdf"
  },
  {
    "title": "ISTE AP State Awards-2020",
    "url": "https://mits.ac.in/assets/pdf/assoc/2020-ISTE-Awards.pdf"
  },
  {
    "title": "ISTE AP State Awards-2019",
    "url": "https://mits.ac.in/assets/pdf/assoc/2019-ISTE-Awards.pdf"
  },
  {
    "title": "ISTE AP State Awards-2018",
    "url": "https://mits.ac.in/assets/pdf/mech/Indian%20Society%20for%20Technical%20Education%20(ISTE)%20AP%20Section%20Awards%202018-min.pdf"
  }
];

export const isteObjectives: string[] = [
  "Offering high-quality training programs tailored for teachers and administrators in technical institutions.",
  "Delivering guidance and training to students aimed at enhancing their learning abilities and personal development.",
  "Keeping their knowledge and skills up-to-date in their respective fields of expertise.",
  "Assisting and contributing to the production and development of top-tier professional engineers and technicians required by industries and other organizations.",
  "Formulate the general goals and responsibilities of technical education.",
  "Modify curriculum and educational processes to changing conditions.",
  "Develop effective teachers and educational administrators.",
  "Improve instructional methods and practices and administrative usages.",
  "Enhance professional ideals and standards.",
  "Foster research as complementary to teaching.",
  "Cultivate fraternal spirit amongst the teachers, administrators, industrialists and professionals.",
  "Bring out effective linkage between technical institutions, industry and society",
  "Award honorary fellowships, awards and prizes for furthering the objectives of Technical Education."
];

export const isteFocusAreas: string[] = [
  "Empowering students with training to excel as \"Master Students\".",
  "Cultivating innovation and fostering excellence among students through diverse avenues.",
  "Advocating for improved career development services and opportunities for students.",
  "Organizing expert lectures for knowledge enrichment.",
  "Providing comprehensive support for national seminars and technical events within the college.",
  "Boosting students' self-confidence and self-esteem.",
  "Hosting a range of competitions within the college to refine students' competency and presentation skills.",
  "Providing training to the students to become \"Master Students\".",
  "Encouraging innovation and excellence in students through various means.",
  "Publishing half-yearly newsletter to all its members.",
  "Promoting better career development opportunities and services for students.",
  "Arranging expert lectures.",
  "Extending full support for all the national seminars and technical events in the college.",
  "Enhancing the self-confidence and self-esteem of students.",
  "Conducting various competitions within the college to enhance the competency and presentation skills of students."
];

export const isteConsolidatedDocs: ConsolidatedDoc[] = [
  {
    "title": "ISTE Consolidated Data",
    "url": "https://mits.ac.in/assets/pdf/assoc/ISTE_CSE_AI_ Data.pdf"
  },
  {
    "title": "ISTE Committee Office Order 2024-25",
    "url": "https://mits.ac.in/assets/pdf/assoc/ISTE committee orders.pdf"
  },
  {
    "title": "ISTE Department-wise Faculty List 2024-25",
    "url": "https://mits.ac.in/assets/pdf/assoc/Department wise faculty ISTE list.pdf"
  }
];

export const isteActivitiesByYear: Record<string, ActivityItem[]> = {
  "2026-27": [
    {
      "title": "An Industrial Visit to \"Society for Electronic Transactions and Security (SETS), Taramani, Chennai\" was organized by Department of Computer Science & Engineering - Cyber Security in association with ISTE on 28th October 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/Society for Electronic Transactions and Security (SETS).pdf"
    },
    {
      "title": "An Industrial Visit to Amara Raja Skill Development Centre-I&II (ARSDC), Chittoor, Andhra Pradesh was organised by Department of Electrical & Electronics Engineering in Association with IIIC and ISTE Chapter, MITS on 08th September 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/eee/Report%20on%20II%20Year%20EEE%20Mech%20visit%20to%20Vikram%20Solar%20Power%20Plant.pdf"
    },
    {
      "title": "A 2-Day Workshop on \"Data Engineering and Gen AI\" was organized by Department of Data Science in collaboration with \"ISTE\" on 10th & 11th August 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/Data Engineering and Gen AI.pdf"
    },
    {
      "title": "An Online Expert Talk on \"World Wide Web Day\" was organized by Department of Computer Applications in association with ISTE & SDG on 1st August 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/ca/World Wide Web Day.pdf"
    },
    {
      "title": "A Workshop on \"Pitch to Win: Crafting Research Proposal that Attract Funding\" was organized by Department of Computer Applications in association with ISTE on 05th August 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/ca/Pitch to Win Crafting Research Proposal that Attract Funding.pdf"
    },
    {
      "title": "An Industrial Visit to Vikram Solar Power Plant, Kosuvaripalle, Andhra Pradesh was organized by Department of Electrical & Electronics Engineering in Association with IIIC and ISTE Chapter, MITS 01st August 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/eee/Report on II Year EEE Mech visit to Vikram Solar Power Plant.pdf"
    }
  ],
  "2025-26": [
    {
      "title": "An Industry-Oriented Technical Event and Knowledge-Sharing Session on \"Github Copilot Dev Days\" was organized by Department of Computer Science and Engineering - Data Science in collaboration with ISTE on 18th April 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/Github Copilot Dev Days.pdf"
    },
    {
      "title": "An One Week Hands on Workshop cum Hackathon on \"Ethical Hacking and Cyber Security (Level-4, 5 and 6)\" was organized by Department of Computer Science & Engineering - Cyber Security In association with Industry Institute Interaction Cell and ISTE Student Chapter from 02nd to 21st March 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/Ethical Hacking and Cyber Security (Level-4, 5 and 6).pdf"
    },
    {
      "title": "A Two Day Hands-on Workshop on \"Full Stack Application Development\" was organized By Department of CSE - Artificial Intelligence in Association with MITS ISTE Student Chapter on 12th & 13th March 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/aids/Full Stack Application Development 12-3-2026-compressed.pdf"
    },
    {
      "title": "An Orientation of Multi-Cloud Computing: Concepts and Career Opportunities was organized by Department of Computer Science & Technology in association with Madanapalle ISTE Student Chapter on 24th February 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cst/Multi-Cloud Computing Concepts and Career Opportunities.pdf"
    },
    {
      "title": "A One Day Professional Development Programme on \"Series-I: Transforming Students into Industry Professionals\" was organized by Department of Computer Science & Engineering In Association with ISTE, MITS on 20th February 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/Series-I Transforming Students into Industry Professionals.pdf"
    },
    {
      "title": "A One Day Seminar on \"Advanced Technologies and Trends in VLSI Testing and Physical Design\" was organised by Department of Electronics & Communication Engineering in association with ISTE Student Chapter on 17th February 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/ece/Advanced Technologies and Trends in VLSI Testing and Physical Design.pdf"
    },
    {
      "title": "A Three-Day Hands-on Workshop on \"Embedded Systems and IoT\" was organized by Department of Electrical and Electronics Engineering in association with MITS ISTE Student Chapter from 16th to 18 February 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/eee/Embedded Systems and IoT-16-2-2025.pdf"
    },
    {
      "title": "A One Day Professional Development Programme on \"Series-I: Behavioural Competencies and Professional Skills for career Success\" was organized by Department of Computer Science & Engineering In Association with ISTE, MITS on 13th February 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/Series-I Behavioural Competencies and Professional Skills for career Success.pdf"
    },
    {
      "title": "A One Day Professional Development Programme on \"Series-I: Early Preparation Strategies for Placement Excellence\" was organized by Department of Computer Science & Engineering In Association with ISTE, MITS on 12th February 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/Series-I Early Preparation Strategies for Placement Excellence.pdf.pdf"
    },
    {
      "title": "A Seminar on \"Maritime sector opportunities and career for Mechanical Engineers\" was organized by Department of Mechanical Engineering In association with MITS ISTE Student Chapter on 06th February 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/mech/Maritime sector opportunities and career for Mechanical Engineers.pdf"
    },
    {
      "title": "The L4G Training Program on \"Generative AI Leadership \" was organized by the Department of Data Science under the aegis of the Indian Society for Technical Education (ISTE) from 29 December 2025 - 10 January 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/l4g gen ai report-min.pdf"
    },
    {
      "title": "A Three days hands-on training on \"Hypermesh for Engineering Analysis\" was organized by Department of Mechanical Engineering In association with ISTE Student Chapter From 07th to 09th January 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/mech/Hypermesh for Engineering Analysis.pdf"
    },
    {
      "title": "An Industrial Visit to Vikram Solar Power Plant, Kosuvaripalle, Andhra Pradesh was organised by Department of Electrical & Electronics Engineering in Association with IIIC and ISTE Chapter, MITS on 09th January 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/eee/Report on II Year EEE Industrial visit to Vikram Solar Power Plant.pdf"
    },
    {
      "title": "A One-Day National Level Workshop on \"LUT-Based Device Modeling for Advanced Circuit Design: A Cadence Workflow\" was organized by Department of Electronics & Communication Engineering in association with MITS–ISTE on 06th January 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/ece/LUT-Based Device Modeling for Advanced Circuit Design A Cadence Workflow.pdf"
    },
    {
      "title": "A One Week Hands on Workshop cum Hackathon on \"Ethical Hacking and Cyber Security (Level-1)\" was organized by Department of Computer Science & Engineering - Cyber Security In association with Industry Institute Interaction Cell and ISTE Student Chapter from 29th December to 04th January 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/Ethical Hacking and Cyber Security Level-1.pdf"
    },
    {
      "title": "An Industrial Visit to \"400 kV/220 kV Substation, Kalikiri\" was organised by Department of Electrical and Electronics Engineering In Association with IIIC and ISTE Chapter, MITS on 03rd January 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/eee/Report on III Year Industrial Visit to 400 kV to 220 kV Substation, Kalikiri-min.pdf"
    },
    {
      "title": "A One Week Domain-Specific Hands-On Workshop on Full Stack Web Development using Modern Frameworks was organized by Department of Computer Science & Engineering In Association with ISTE Student Chapter 29th December 2025 to 03rd January 2026",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/Full Stack Web Development using Modern Frameworks.pdf"
    },
    {
      "title": "A Workshop on \"Machine Learning: From Fundamentals to Future Frontiers\" was organised by Department of Computer Applications in association with ISTE, MITS on 22nd December 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/ca/Machine Learning From Fundamentals to Future Frontiers.pdf"
    },
    {
      "title": "A One week Workshop on \"CATIA for Design, Modeling, and Drafting\" was organized by Department of Mechanical Engineering In association with ISTE Student Chapter from 15th to 20th December 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/mech/CATIA for Design, Modeling, and Drafting.pdf"
    },
    {
      "title": "A One day Domain Specific Lecture on \"AI-Driven Big Data Applications Across Domains: From Healthcare to Smart Cities\" wa organized by Department of Computer Science & Engineering - Artificial Intelligence in association with ISTE Student Chapteron 14th November 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/aids/AI-Driven Big Data Applications Across Domains From Healthcare to Smart Cities.pdf"
    },
    {
      "title": "An Alumni Guest Lecture on \"Exploring Data Science Opportunities for Mechanical Engineers\" was organized by Department of Mechanical Engineering in association with MITS Alumni Welfare Association & ISTE Student Chapter on 13th November 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/mech/Exploring Data Science Opportunities for Mechanical Engineers.pdf"
    },
    {
      "title": "An Industrial Visit to \"33 kV/11 kV Substation, Madanapalle\" was organised by Department of Electrical and Electronics Engineering In Association with IIIC and ISTE Chapter on 02nd November 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/eee/33 kV 11 kV Substation.pdf"
    },
    {
      "title": "A One Day Workshop on \"Edge Computing in Practice: Hosting from Your Own Hardware\" was organized by Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning in association with the Indian Society for Technical Education (ISTE) on 28th October 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/aids/Edge Computing in Practice Hosting from Your Own Hardware.pdf"
    },
    {
      "title": "An Industrial Visit to \"Sathanur Hydro-Electric Power Station\" was organized by Department of Electrical & Electronics Engineering In Association with IIIC and ISTE Chapter, MITS on 17th October 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/eee/Sathanur Hydro-Electric Power Station.pdf"
    },
    {
      "title": "A \"Parents Meeting\" was organized by Department of Electrical and Electronics Engineering In association with ISTE Students chapter on 16th October 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/eee/EEE-Parents Meeting-2025.pdf"
    },
    {
      "title": "A Two-days Hands on Workshop on \"The DevOps Vanguard: Tools, Tactics & Transformation\" was organized by Department of Computer Science & Engineering in association with ISTE Student Chapter on 19th & 20th September 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/The DevOps Vanguard Tools Tactics Transformation.pdf"
    },
    {
      "title": "A One Day Hands on Workshop on \"SAP Fundamentals & Applications\" was organized by Department of Computer Science and Engineering - Data Science in association with Institution of Engineers (India) & ISTE on 30th August 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/SAP Fundamentals & Applications-min.pdf"
    }
  ],
  "2024-25": [
    {
      "title": "A One Day Workshop on \"Generative AI Using Microservices Architecture\" was organized by Department of Computer Applications In association with ISTE & IIC on 13th June 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/ca/Generative AI Using Microservices Architecture.pdf"
    },
    {
      "title": "A Workshop on \"Financial Wellness - Building a Secure Future\" was organized by Department of Management Studies in association with ISTE 30th May 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/mba/Financial Wellness - Building a Secure Future.pdf"
    },
    {
      "title": "A Workshop on \"Resume Preparation Tips and Tricks: ATS-Friendly Strategies for Faster Shortlisting\" was organized by Department of Mechanical Engineering in Association with ISTE Student Chapter on 16th May 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/mech/Resume Preparation Tips and Tricks ATS-Friendly Strategies for Faster Shortlisting.pdf"
    },
    {
      "title": "A Hands on Workshop on \"Getting started with Google Cloud\" was organized by Department of Computer Science & Technology in association with ISTE Student Chapter on 10th May 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cst/INVICTA 2K25.pdf"
    },
    {
      "title": "A One Day National Level Technical Symposium on \"GMOCS'2K25\" was organized by Department of Computer Science & Engineering In Association with Computer Society of India on 30th April 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/GMOCS’2K25.pdf"
    },
    {
      "title": "A Two Day Hands-on Workshop on \"Mastering Cloud & DevOps Tools\" was organized by Department of CSE- Artificial Intelligence in Association with MITS ISTE Student Chapter from 28th February to 01st March 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/aids/Mastering Cloud & DevOps Tools.pdf"
    },
    {
      "title": "A One Day Training Program on Cybersecurity Awareness was organized by Department of Computer Science & Engineering – AI & ML on 25th February 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/Cybersecurity Awareness 25-2-2025.pdf"
    },
    {
      "title": "A Guest Lecture on \"Recent Trends in Artificial Intelligence and Robotics\" was organized by Department of Computer Science & Engineering - Cyber Security In association with Indian Society for Technical Education (ISTE) Student Chapter on 17th February 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/Recent Trends in Artificial Intelligence and Robotics.pdf"
    },
    {
      "title": "A Two Day Hands-on Workshop \"AI for Beginners: from Data to Decisions\" was organized by Department of Computer Science & Engineering - Data Science In association with ISTE-MITS from 14th & 15 February 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/AI for Beginners from Data to Decisions.pdf"
    },
    {
      "title": "A One day Guest Lecture on \"Beyond AI: Unlocking the Power of EI for Future Technocrats\" was organised by Department of Computer Science & Technologyin association with Indian Society for Technical Education (ISTE) on 13th February 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cst/Beyond AI Unlocking the Power of EI for Future Technocrats.pdf"
    },
    {
      "title": "A Two Day Hands-on Workshop \"Recent Trends in Industrial Automation\" was organized by Department of Mechanical Engineering in association with ISTE Student Chapter & Department of Electrical and Electronics Engineering from 10th & 11th February 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/eee/Recent Trends in Industrial Automation.pdf"
    },
    {
      "title": "A Two-Day Workshop on \"Embedded Systems with C, Microcontrollers, and Networking\" was organized by Department of Electronics & Communication Engineering In association with MITS ISTE on 6th & 7th February 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/ece/Embedded Systems with C, Microcontrollers, and Networking.pdf"
    },
    {
      "title": "A Two-days Hands on Workshop on \"Code Craft: A Deep Dive into Java Development\" was organized by Department of Computer Science & Engineering in association with ISTE Student Chapter from 31st January to 01st February 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/Code Craft A Deep Dive into Java Development.pdf"
    },
    {
      "title": "A Two-Day Workshop on \"The Role of NS3 in Enhancing Cybersecurity through Cloud based Innovations\" was organised by Department of Computer Applications in association with ISTE on 29th January 2025",
      "pdfUrl": "https://mits.ac.in/assets/pdf/ca/The Role of NS3 in Enhancing Cybersecurity through Cloud based Innovations.pdf"
    },
    {
      "title": "An Expert Talk on \"7 Habits of Highly Effective People\" was organised by Department of Computer Applications in association with ISTE on 27th December 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/ca/7 Habits of Highly Effective People-27-12-2024.pdf"
    },
    {
      "title": "A Guest Lecture on \"UX/UI Design\" was organized by Department of Computer Applications in association with ISTE on 12th December 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/ca/UXUI Design.pdf"
    },
    {
      "title": "A One Day Workshop On Tranquillizing Empathy was organized by Department of Computer Science and Engineering – AI & ML in association with the Indian Society for Technical Education (ISTE) on 30th November 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/Tranquillizing Empathy-30-11-2024.pdf"
    },
    {
      "title": "A One Day Hands on Design Thinking Workshop was organized by Department of Computer Science & Engineering – AI & ML on 13th November 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/Design Thinking Workshop  13-11-2024.pdf"
    },
    {
      "title": "An \"ISTE Student Chapter Event\" was organized by Department of Computer Science and Technology in association with ISTE on 14th November 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cst/ISTE Student Chapter Event-2024.pdf"
    },
    {
      "title": "A Guest Lecture on \"From Aspirant to Achiever: GATE and PSU Career Guidance\" was organised by Department of Mechanical Engineering in association with ISTE Student Chapter, MITS on 19th November 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/mech/Journey from a Tinkerer to an Entrepreneur.pdf"
    },
    {
      "title": "A Two-Days Workshop on \"Empowering Real-time Solutions through IOT, AI, and Cloud Computing\" was organized by Department of Computer Science & Engineering in association with ISTE Student Chapter from 15th to 18th November 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/Empowering Real-time Solutions through IOT AI and Cloud Computing.pdf"
    },
    {
      "title": "A Guest Lecture on \"Engineering the Future: A Journey from Defence to Digital Transformation\" was organised by Department of Civil Engineering In Association with ASCE – MITS Student Chapter & MITS ISTE Student Chapter on 11th November 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/civil/Engineering the Future A Journey from Defence to Digital Transformation.pdf"
    },
    {
      "title": "A Five-Days Hands on Training on \"3D BIM Modeling using Revit and Navisworks Manage\" was organised by ASCE – MITS Student Chapter & MITS ISTE Student Chapter in Association with Department of Civil Engineering from 06th to 11th November 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/civil/3D BIM Modeling using Revit and Navisworks Manage.pdf"
    },
    {
      "title": "A Webinar on \"Recent Data and Visualization tools for IT Industry\" was organized by Department of Computer Science & Engineering in association with ISTE-MITS on 29th October 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/Recent Data and Visualization tools for IT Industry.pdf"
    },
    {
      "title": "A Seminar on \"A DevOps Journey for Beginners\" was organised by Department of Computer Science & Engineering in association with ISTE Student Chapter on 25th October 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/A DevOps Journey for Beginners.pdf"
    },
    {
      "title": "A Guest Lecture on \"How to Write Research Proposals, Books, and Papers\" was organized by Department of Electronics and Communication Engineering in association with ISTE 24th October 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/ece/How to Write Research Proposals Books and Papers.pdf"
    },
    {
      "title": "A Workshop on \"DevOps\" was organised by Department of Computer Science & Engineering - Artificial Intelligence in collaboration with ISTE Student Chapter on 23rd October 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/aids/DevOps-2024.pdf"
    },
    {
      "title": "A Two Days Workshop on \"Computer Aided Machining (CAM) using NX\" was organized by Department of Mechanical Engineering in association with ISTE Student chapter on 19th & 20th October 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/mech/Computer Aided Machining (CAM) using NX.pdf"
    },
    {
      "title": "An Inaugural Ceremony of \"ISTE Student Chapter\" was organised on 19th October 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/mba/ISTE Student Chapter 2024.pdf"
    },
    {
      "title": "An Online Guest Lecture on \"Fundamentals & Applications of Additive Manufacturing\" was organised by Department of Mechanical Engineering in association with ISTE, MITS on 01st October 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/mech/Fundamentals & Applications of Additive Manufacturing.pdf"
    },
    {
      "title": "An Online Guest Lecture on \"Fundamentals & Applications of Additive Manufacturing\" was organised by Department of Mechanical Engineering in association with ISTE, MITS on 01st October 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/mech/Fundamentals & Applications of Additive Manufacturing.pdf"
    },
    {
      "title": "A Workshop on \"Hands-on 3DP Workshop on Design Optimization and Part Printing\" was organized by Department of Mechanical Engineering in association with ISTE student chapter on 12th September 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/mech/Hands-on 3DP Workshop on Design Optimization and Part Printing.pdf"
    },
    {
      "title": "A Guest Lecture on \"Cracking the Code: Expert Strategies for Technical Interviews\" was organized by Department of Computer Science & Technology in association with ISTE student chapter on 03rd September 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cst/Cracking the Code Expert Strategies for Technical Interviews.pdf"
    },
    {
      "title": "An Online Expert Talk On \"NEP 2020 Leading to an Outcome Based Curriculum\" was organised by Department of Electrical & Electronics Engineering In Association with ISTE chapter, IEEE Student Chapter, and MITS on 1st August 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/eee/Report on Online Expert Talk On NEP 2020 Leading to an Outcome Based Curriculum Organised by Department of Electrical & Electronics Engineering.pdf"
    }
  ],
  "2023-24": [
    {
      "title": "A Hands on Workshop on \"Azure Cloud Essentials\" was organized by Department of Computer Science & Engineering - Data Science in Association with ISTE student chapter on 20th April 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/1. Azure Cloud Essentials.pdf"
    },
    {
      "title": "An Alumni student interaction on \"Career Development Interaction\" was organized by Department of Mechanical Engineering In association with ISTE Student Chapter on 26th March 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/mech/Career Development Interaction-26.03.2024.pdf"
    },
    {
      "title": "An Industrial Visit to \"Sathanur Hydro-Electric Power Station\" was organised by Department of Electrical & Electronics Engineering In Association with IIIC, IEEE and ISTE Chapter for II Year students on 23rd February 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/2. Report on II Year Industrial Visit to Sathanur Power House.pdf"
    },
    {
      "title": "An Industrial Visit to \"Sathanur Hydro-Electric Power Station\" was organised by Department of Electrical & Electronics Engineering In Association with IIIC, IEEE and ISTE Chapter for III Year students on 23rd February 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/3. Report on III Year Industrial Visit to Sathanur Power House.pdf"
    },
    {
      "title": "A Three Days Hand's on Training Program on \"Cloud Computing with Amazon Web Services\" was organised by Department of Computer Science & Engineering In Association with ISTE Chapter from 19th to 21st February 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/4. Cloud Computing with Amazon Web Services.pdf"
    },
    {
      "title": "A 5 Days International Level Online FDP on \"Unveiling Emerging Trends in Artificial Intelligence and Data Renaissance\" was organized by Department of Computer Science & Engineering - Artificial Intelligence during 19th to 23 February 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/5. Unveiling Emerging Trends in Artificial Intelligence and Data Renaissance.pdf"
    },
    {
      "title": "One-week Short Term Course Program on \"Big Data Analytics for Smart Grid\" was organised by Department of Electrical & Electronics Engineering In Association with ISTE Chapter from 12th to 16 February 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/6. Big Data Analytics for Smart Grid.pdf"
    },
    {
      "title": "A Guest Lecture on \"Software Product Management\" was organized by Department of Computer Science & Engineering in association with Indian Society for Technical Education (ISTE) on 22nd November 2023",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/7.Software Product Management.pdf"
    },
    {
      "title": "A Hands on Workshop on \"Image Processing And Computer Vision\" was Organized by Department Of Computer Science & Engineering (Data Science) on 17.11.2023",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/8. Report on Image Processing and CV.pdf"
    },
    {
      "title": "A Guest Lecture \"Neural Network and Deep Learning\" was organized by Department of Computer Science & Engineering in Association with ISTE Student Chapter on 16th November 2023",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/9. Neural Network and Deep Learning.pdf"
    },
    {
      "title": "A Hands-On workshop on \"No-SQL (MongoDB) and Scalable E-commerce Solutions\" was organized by Department of Computer Science and Engineering (Data Science) on 08th November 2023",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/10.No-SQL MongoDB and Scalable E-commerce Solutions.pdf"
    },
    {
      "title": "A Guest Lecture on \"Role of Optimization Techniques in Electrical Engineering\" was organised by Department of Electrical & Electronics Engineering on 04th November 2023",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/11. Role of Optimization Techniques in Electrical Engineering.pdf"
    },
    {
      "title": "A Guest Lecture on \"Rule-based Approach for Peak Shaving with Energy Storage\" was organised by Department of Electrical & Electronics Engineering on 02nd November 2023",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/12. Rule-based Approach for Peak Shaving with Energy Storage.pdf"
    },
    {
      "title": "A One day Entrepreneurship Development Programme on \"Entrepreneurship and the Companies Act 2013\" was organised by Entrepreneurship Development Cell in Association with Institution Innovation Council (IIC) Indian Society for Technical Education (ISTE) on 21st August 2023",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/13. Entrepreneurship and the Companies Act 2013.pdf"
    },
    {
      "title": "A Seminar on Campus to Corporate was organized by Department of Computer Science and Engineering - Artificial Intelligence on 14th September 2023",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/14. MoU Signing Ceremony.pdf"
    },
    {
      "title": "One-Day Hands-on workshop in the topic \"Primer on Containers and Microservices\" was organised by Department of Artificial Intelligence MITS-IIC & ISTE on 25th July 2023",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/15. Primer on Containers and Microservices.pdf"
    }
  ],
  "2022-23": [
    {
      "title": "The Department of EEE had conducted an Alumni Interaction on \"Opportunities Available for Electrical Engineering Graduates in Government and Private Sector\" on 18th March 2023 in association with ISTE Student Chapter",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/1. Opportunities available.pdf"
    },
    {
      "title": "A Webinar on \"Driver Behavior Modelling for Autonomous Vehicle\" was Organized by Department of Electrical and Electronics Engineering in association with ISTE on 7th March 2023",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/2. Driver Behavior Modelling for Autonomous Vehicle.pdf"
    },
    {
      "title": "The Department of EEE Organized a Webinar on \"Power Quality Events Monitoring System using Signal Processing Techniques on an Embedded Platform\" on 4th March 2023 in association with ISTE Student Chapter",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/3. Power Quality Events Monitoring System using Signal Processing Techniques on an Embedded Platform-min.pdf"
    },
    {
      "title": "A 5 Days International Level Online FDP on \"Unveiling Emerging Trends in Artificial Intelligence and Data Renaissance\" was organized by Department of Computer Science & Engineering (Artificial Intelligence) in association with MITS - IEEE Student Branch, Indian Society for Technical Education (ISTE) and MITS IIC during 19th to 23 February 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/Unveiling Emerging Trends in Artificial Intelligence and Data Renaissance.pdf"
    },
    {
      "title": "An Industrial Visit to \"Sathanur Hydro-Electric Power Station\" was organised by Department of Electrical & Electronics Engineering In Association with IIIC, IEEE and ISTE Chapter for II Year students on 23rd February 2024",
      "pdfUrl": "https://mits.ac.in/assets/pdf/eee/Report on II Year Industrial Visit to Sathanur Power House.pdf"
    },
    {
      "title": "A Guest Lecture on \" Role of Static Power Conversion in Current and Future Power Systems\" was Organized by Department of Electrical and Electronics Engineering in association with ISTE on 21st January 2023",
      "pdfUrl": "assets/pdf/assoc/4. Role of Static Power Conversion in Current and Future Power Systems.pdf"
    },
    {
      "title": "A Webinar on \"Artificial Intelligence in Real Time Applications\" was Organized by Department of Artificial Intelligence & Data Science in association with ISTE on 28th December 2022",
      "pdfUrl": "assets/pdf/assoc/5. AI.pdf"
    },
    {
      "title": "The Department of Mechanical Engineering had conducted a National Mathematics Day Celebration on 12th December 2022 in association with ISTE Student Chapter",
      "pdfUrl": "assets/pdf/assoc/6. Report on National mathematics day.pdf"
    },
    {
      "title": "A Workshop on \"Production Planning & Control and Machine Learning Algorithms\" was organized by Department of Mechanical Engineering in association with ISTE Student Chapter on 17th December 2022",
      "pdfUrl": "assets/pdf/assoc/7. PPC & Machine learning.pdf"
    },
    {
      "title": "A Webinar on \"Hybrid Electric Vehicle Technology \"was organized by Department of Mechanical Engineering in association with ISTE Student Chapter on 11th December 2022",
      "pdfUrl": "assets/pdf/assoc/8. Hybrid Electric Vehicle.pdf"
    },
    {
      "title": "A Guest Lecture on \"Software Product Management\" was organized by Department of Computer Science & Engineering in association with Indian Society for Technical Education (ISTE) on 22nd November 2023",
      "pdfUrl": "https://mits.ac.in/assets/pdf/cse/Software Product Management.pdf"
    },
    {
      "title": "A One day Entrepreneurship Development Programme on \"Entrepreneurship and the Companies Act 2013\" was organised by Entrepreneurship Development Cell in Association with Institution Innovation Council (IIC) Indian Society for Technical Education (ISTE) on 21st August 2023",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship and the Companies Act 2013.pdf"
    },
    {
      "title": "An Industrial Visit to \"APSRTC Workshop\" was organised by Department of Electrical & Electronics Engineering In Association with ISTE Chapter on 5th November 2022",
      "pdfUrl": "assets/pdf/assoc/10. Apsrtc Workshop.pdf"
    },
    {
      "title": "A Three Day On Campus Skill Development (Hands-on) Programme on Conventional Bike Retrofitting in to EV was organized by Department of EEE in association with ISTE Student Chapter from 3rd to 5th November 2022",
      "pdfUrl": "assets/pdf/assoc/9. EV Report.pdf"
    },
    {
      "title": "An international Webinar on \"Cyber Security Applications Using Python\" was organized by Department of Computer Science & Engineering in Association with MITS ISTE student chapter on 26th October 2022",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/11. Cyber security.pdf"
    },
    {
      "title": "An industrial expert talk on \" Mechanical Engineering Career\" was organized by Department of Mechanical Engineering in association with ISTE Student Chapter on 26th October 2022",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/12. Mechanical engineering career.pdf"
    },
    {
      "title": "A Webinar on \"Entrepreneurship, Innovation and Career Opportunity\" was organized by Department of Mechanical Engineering in association with ISTE Student Chapter on 21st October 2022",
      "pdfUrl": "https://mits.ac.in/assets/pdf/assoc/13. Enterpreneurship report.pdf"
    },
    {
      "title": "The Department of EEE had conducted an industry guest-lecture on \"Solar Projects, Future Technology, Growth & Opportunities\" on 17th September 2022 in association with ISTE Student Chapter, IEEE student chapter & Institute Innovation Council",
      "pdfUrl": "assets/pdf/eee/Report_Guest Lecture_17-09-2022-min.pdf"
    }
  ],
  "2021-22": [
    {
      "title": "The Department of EEE in association with ISTE Student Chapter is organized an Rayalaseema Thermal Power Project (RTPP) Muddanur, Kadapa, AP on 06th April 2022",
      "pdfUrl": "assets/pdf/eee/Report-Industrial Visit to RTPP-min.pdf"
    },
    {
      "title": "The Department of EEE in association with ISTE Student Chapter is organized an Industrial Visit for B.Tech II Year EEE students on 11th to 15th March 2022",
      "pdfUrl": "assets/pdf/eee/IV Report-min.pdf"
    },
    {
      "title": "A Webinar on \"Programmable Logic Controller (PLC) for Industrial Automation\"\" was jointly organized by the Department of Mechanical Engineering & Electrical & Electronics Engineering in association with the ISTE Student Chapter on 11th March 2022",
      "pdfUrl": "assets/pdf/assoc/3. Programmable Logic Controller (PLC) for Industrial Automation Report.pdf"
    },
    {
      "title": "A webinar on \"Overview of Integrated Steel Plant and Role of Engineer in Steel Making\" was organized by Department of Electrical & Electronics Engineering in Association with ISTE Student Chapter on 04th December 2021. Click here for Event Details",
      "pdfUrl": "assets/event/Overview of Integrated Steel Plant and Role of Engineer in Steel Making-min.pdf"
    },
    {
      "title": "A One Day Online Workshop on \"Opportunities & Challenges in Electric Vehicle (EV) Technology\" was organized by Department of Electrical & Electronics Engineering in Association with ISTE Student Chapter on 13th November 2021",
      "pdfUrl": "assets/pdf/eee/Opportunities & Challenges in Electric Vehicle (EV) Technology.pdf"
    },
    {
      "title": "A Webinar \"Career Opportunities after B.Tech and GATE Orientation\" was Organized by Department of Electrical and Electronics Engineering on 09-10-2021 in association with ISTE Students Chapter & OHM Institute, Hyderabad",
      "pdfUrl": "assets/pdf/eee/Career Opportunities after B.Tech and GATE Orientation.pdf"
    },
    {
      "title": "A Webinar on \"Application of Artificial Intelligence (AI) in Induction Motor (IM) Drive\" is conducted on 17th July 2021 in the Department of EEE in association with ISTE through Microsoft Team",
      "pdfUrl": "assets/pdf/eee/Webinar Report Application of Artificial Intelligence (AI) in Induction Motor (IM) Drive-signed.pdf"
    },
    {
      "title": "An Awareness Program on \"DISHA APP\" was organized by Women Empowerment cell on 12th July 2021",
      "pdfUrl": "assets/pdf/assoc/8. DISHA App-min.pdf"
    }
  ],
  "2020-21": [
    {
      "title": "A Webinar on \"IT Skills: The Pathway for a Successful Career in IT-Sector For Engineering Graduated\" was conducted by Department of Electrical and Electronics Engineering in association with ISTE & MITSAWA through Microsoft Teams on 14th June 2021",
      "pdfUrl": "assets/pdf/eee/Webinar Report _ IT Skill-min.pdf"
    },
    {
      "title": "A Webinar on \"Electric Vehicle – Design Overview\" was conducted by Department of Electrical and Electronics Engineering in association with ISTE on 11th June 2021",
      "pdfUrl": "assets/pdf/assoc/2. Webinar Report on EV.pdf"
    },
    {
      "title": "A Guest Lecture Report on \"Organizational Behavior & Ethics\" was conducted by Department of Electrical and Electronics Engineering in association with ISTE & MITSAWA through Microsoft Teams on 05th June 2021",
      "pdfUrl": "assets/pdf/eee/Guest Lecture Report_Organizational Behavior _ Ethics.pdf"
    },
    {
      "title": "Deep Learning and Cyber Security – Phase I 22.02.2021 to 27.02.2021",
      "pdfUrl": "assets/pdf/cst/Deep Learning and Cyber Security – Phase I-min.pdf"
    },
    {
      "title": "Deep Learning and Cyber Security – Phase II 05.04.2021 to 10.04.2021",
      "pdfUrl": "assets/pdf/cst/Deep Learning and Cyber Security – Phase II-min.pdf"
    },
    {
      "title": "Deep Learning and Cyber Security – Phase III 17.05.2021 to 22.05.2021",
      "pdfUrl": "assets/pdf/assoc/4. Deep Learning Phase III.pdf"
    },
    {
      "title": "A Three Days workshop on \"Dynamic System Modelling and Signal Processing with MATLAB / Simulink\" was organized by Department of Electronics & Communication Engineering on 20th to 23rd April 2021",
      "pdfUrl": "assets/pdf/assoc/5. Dynamic System Modelling and Signal Processing with MATLAB-Simulink Report.pdf"
    },
    {
      "title": "A Guest Lecture Report on \"Visualizing Quantum Mechanics\" was organized by Department of Physics on 17th April 2021",
      "pdfUrl": "assets/pdf/assoc/6. Visualizing Quantum Mechanics.pdf"
    },
    {
      "title": "A Two-day Online Faculty Training Programme on \"LabVIEW based Real Time Measurement for Engineering Applications\" was organized by Department of Electrical & Electronics Engineering on 16th & 17th March 2021",
      "pdfUrl": "assets/pdf/eee/A Two-day Online Faculty Training Programme.pdf"
    },
    {
      "title": "The Department of Electrical & Electronics Engineering organized an Industry Expert Talk on Electrical Power System Design on 30th December 2020 through Microsoft team Platform",
      "pdfUrl": "assets/pdf/eee/Report on Industry Expert Talk on 30-12-2020.pdf"
    },
    {
      "title": "A Science Academies' Virtual Lecture Workshop on \"Modern Computational Techniques\" was organized by Department of Computer Science & Technology on 10th & 11th December",
      "pdfUrl": "assets/pdf/assoc/11. Modern Computational Techniques Report.pdf"
    }
  ],
  "2019-20": [
    {
      "title": "An Ethical Hacking and cyber security workshop was organized by Department of Computer Science & Engineering and Department of Computer Science & Technology in association with ISTE from 27th January 2020 to 31st January 2020",
      "pdfUrl": "assets/pdf/assoc/1. EH & CS.pdf"
    },
    {
      "title": "ISTE Sponsored A Guest Lecture on Nano Materials for Energy Harvesting, Environmental and Biomedical Applications organized by Dept. of ECE on 9th January 2020",
      "pdfUrl": "assets/pdf/assoc/Nano Materials for Energy Harvesting.pdf"
    },
    {
      "title": "ISTE Sponsored A Workshop on \"Data Science using Python\" on 07th - 08th Jan 2020",
      "pdfUrl": "assets/pdf/assoc/3. DATA SCIENCE USING PYTHON-min.pdf"
    },
    {
      "title": "ISTE Sponsored The National Energy Conservation day was organized by Department of Electrical & Electronics Engineering on 14th December 2019",
      "pdfUrl": "https://mits.ac.in/assets/pdf/eee/Report%20of%20Awareness%20Program%20on%20World%20Energy%20Conservation%20Day%202019.pdf"
    },
    {
      "title": "ISTE Sponsored World Water Monitoring Day was organized by Department of Civil on 18th September 2019",
      "pdfUrl": "assets/pdf/assoc/World Water Monitoring Day.pdf"
    },
    {
      "title": "ISTE Sponsored A Two-Day Workshop on \"IoT Research Challenges-Best Practices\" was organized by Department of CSE & ECE on 4th & 5th September 2019",
      "pdfUrl": "assets/pdf/assoc/IoT Research Challenges.pdf"
    },
    {
      "title": "ISTE Sponsored A Guest Lecture on \"Student to Start-Up: A Motivational Talk\" was organized by Dept. of ECE on 20th August 2019",
      "pdfUrl": "assets/pdf/assoc/A Motivational Talk.pdf"
    },
    {
      "title": "ISTE Sponsored An Awareness program on \"Jal Shakti Abhiyan Jal Divas\" was organized by Department of Civil Engineering on 22nd July 2019",
      "pdfUrl": "assets/pdf/assoc/Jal Shakti Abhiyan.pdf"
    }
  ],
  "2018-19": [
    {
      "title": "A Guest Lecture on \"Role of an Engineer in IT-sector\" was organized by Department Electrical & Electronics Engineering in association with ISTE on 2nd March 2019",
      "pdfUrl": "assets/pdf/assoc/1. Role of an Engineer in IT-Sector-1.pdf"
    },
    {
      "title": "ISTE Sponsored A Guest Lecture on \"Career Guidance after Engineering\" was organized by Department of Electrical & Electronics Engineering in association with MITSAWA and ISTE on 2nd February 2019",
      "pdfUrl": "assets/pdf/assoc/CAREER OPPORTUNITIES AFTER ENGINEERING.pdf"
    },
    {
      "title": "ISTE Sponsored One Day Workshop on DSIR Scheme - Promoting Innovations in Individuals Start-ups and MSMEs (PRISM) and Business Incubator Opportunities for Faculty and Students organized by Department of Mechanical Engineering on 05th May 2018 Sponsored by ISTE",
      "pdfUrl": "assets/pdf/mech/PRISM-min.pdf"
    },
    {
      "title": "ISTE Sponsored A Guest Lecture on \"Network Layering Protocols\" sponsored by ISTE and was organized by Dept of CSE on 04-11-2017",
      "pdfUrl": "assets/pdf/cse/Network Layering Protocols.pdf"
    },
    {
      "title": "ISTE Sponsored A Guest Lecture on \"Academic Engineer Vs Industrial Engineer\" was organized by Department of Mechanical Engineering on 14-09-2017 Sponsored by ISTE",
      "pdfUrl": "assets/pdf/mech/ACADEMIC ENGINEER Vs INDUSTRIAL ENGINEER.pdf"
    },
    {
      "title": "ISTE Sponsored A one-day Industrial Visit to Wind Power Project, Rekulakunta was organized for the II Year B.Tech – EEE & I M.Tech E.P.S students on 23rd December 2016 under ISTE Students Chapter. Mr D Chinna Kullay Reddy & Mr. G Ravi Prakash from EEE Department were associated with students as faculty coordinators",
      "pdfUrl": ""
    },
    {
      "title": "ISTE Sponsored Engineers' Day Celebrations 2016 was organized by ISTE chapter on 15 September 2016",
      "pdfUrl": "assets/pdf/assoc/EngineersDayCelebrations2016.pdf"
    },
    {
      "title": "ISTE Sponsored A Three Day Program on \"CATIA V5 Essentials in Mechanical Engineering\" Under ISTE Chapter Sponsored by TEQIP II Organized by Department of Mechanical Engineering & IIIC In Association with EDS Technologies, Bangalore from 28th December 2015 to 30th December 2015",
      "pdfUrl": ""
    },
    {
      "title": "ISTE Sponsored One Day National Level Workshop on \"Autonomous Status of Engineering Institutions-The Road Map\" On 11-01-2013. Dr. G. Prabhakar Rao, Director of AITS, Rajampet, and Dr.M.Muralidhar, Principal of Sri Venkateswara college of Engineering and Technology acted as resource persons for the workshop",
      "pdfUrl": ""
    },
    {
      "title": "ISTE Sponsored A Three Day \"Entrepreneurship Awareness Camp for Students (EACS)\" was organized by the \"ISTE Students Chapter\" of Madanapalle Institute of Technology & Science (MITS) sponsored by Indian Society for Technical Education (ISTE) during August 1-3, 2012",
      "pdfUrl": ""
    },
    {
      "title": "ISTE Sponsored The Institution was awarded ISTE Best Student Chapter Award for Andhra Pradesh Section 2013 has been epitomizing with various activities through the year amongst the student chapters in Andhra Pradesh section",
      "pdfUrl": ""
    },
    {
      "title": "ISTE Sponsored National Science Day is celebrated at MITS with great enthusiasm on 28th February every year to commemorate the invention of the Raman Effect in India by the Indian physicist, Dr. Chandrasekhara Venkata Raman on the same day in the year 1928. For his discovery, Raman was awarded the Nobel Prize in Physics in 1930. Prof K.Subbarangaiah visited MITS and delivered lecture on \"Fostering Scientific Temper\" on the National Science Day Celebrations conducted by ISTE Chapter, MITS",
      "pdfUrl": ""
    }
  ]
};

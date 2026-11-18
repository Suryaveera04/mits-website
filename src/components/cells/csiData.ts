// Computer Society of India (CSI) Student Branch Data
// Verbatim synchronized from official sources:
// Primary: https://mits.ac.in/csi-content
// Portal: https://mits.ac.in/csi

export interface CsiEventItem {
  title: string;
  pdfUrl: string;
  year: string;
  category?: string;
}

export interface CsiCommitteeMember {
  name: string;
  designation: string;
  department: string;
  address?: string[];
  phone?: string;
  email: string;
}

export interface CsiCoordinatorInfo {
  name: string;
  designation: string;
  department: string;
  address: string[];
  phone: string[];
  email: string;
}

export const csiCoordinator: CsiCoordinatorInfo = {
  name: "Dr. R. Nidhya",
  designation: "Professor",
  department: "Department of Computer Science & Engineering",
  address: [
    "Madanapalle Institute of Technology & Science",
    "Deemed to be University",
    "Madanapalle-Kadiri Road",
    "Kurabalakota Mandal, Madanapalle-517325",
    "Andhra Pradesh, India",
  ],
  phone: ["+91-8571-280255", "+91-8571-280706"],
  email: "drnidhyar@mits.ac.in",
};

export const csiCommitteeMembers: CsiCommitteeMember[] = [
  {
    name: "Dr. S. Mahaboob Basha",
    designation: "Head of the Department",
    department: "Department of Computer Science & Engineering",
    address: [
      "Madanapalle Institute of Technology & Science",
      "Post Box No: 14, Kadiri Road, Angallu",
      "Madanapalle-517325, Andhra Pradesh",
    ],
    phone: "+91-8571-280255 (Extn: 129)",
    email: "csehod@mits.ac.in",
  },
  {
    name: "Dr. R. Nidhya",
    designation: "Professor / Associate Professor",
    department: "Department of Computer Science & Engineering",
    address: [
      "Madanapalle Institute of Technology & Science",
      "Post Box No: 14, Kadiri Road, Angallu",
      "Madanapalle-517325, Andhra Pradesh",
    ],
    email: "drnidhyar@mits.ac.in",
  },
  {
    name: "Mr. M. Kiran Kumar B.Tech, M.Tech., (Ph.D).",
    designation: "Assistant Professor",
    department: "Department of Computer Science & Engineering",
    address: [
      "Madanapalle Institute of Technology & Science",
      "Post Box No: 14, Kadiri Road, Angallu",
      "Madanapalle-517325, Andhra Pradesh",
    ],
    email: "kirankumarm@mits.ac.in",
  },
];

export const csiAbout = {
  branchTitle: "MITS CSI Student Branch [M10660]",
  nationalTitle: "About CSI",
  nationalDescription:
    "Formed in 1965, the CSI has been instrumental in guiding the Indian IT industry down the right path since its formative years. Today, the CSI has 70 chapters all over India, 418 student branches, and more than 90000 members including India's most famous IT industry leaders, brilliant scientists and dedicated academicians.",
  missionParagraph1:
    "The mission of the CSI is to facilitate research, knowledge sharing, learning and career enhancement for all categories of IT professionals, while simultaneously inspiring and nurturing new entrants into the industry and helping them to integrate into the IT community. The CSI is also working closely with other industry associations, government bodies and academia to ensure that the benefits of IT advancement ultimately percolate down to every single citizen of India.",
  missionParagraph2:
    "Eminent personnel from industry (entrepreneurs), financial institutions (Banks), and academics will be invited to interact and to empower the knowledge in the concern fields that enrich the students how to start an entrepreneur at their own cost and procedures to be followed further. They also share their experiences about their success and failures of growth as an entrepreneur and motivate students at the plethora of opportunities they have in the World of industrial sector and encourage the students to launch new ventures.",
};

export const csiEventsByYear: Record<string, CsiEventItem[]> = {
  "2025-26": [
    {
      title:
        "A One Day Workshop on “Human Centered Applied AI Research” was organized by Department of Computer Science & Engineering in Association with Computer Society of India & Bellu AI on 22nd December 2025.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Human Centered Applied AI Research.pdf",
      year: "2025-26",
      category: "Workshop",
    },
    {
      title:
        "A Guest Lecture on “Generative AI & Reimagining Retail Supply Chains: Transformative Power of Agentic AI” was organized by Department of Computer Science & Engineering in Association with Computer Society of India (CSI) on 19th August 2025.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Generative AI & Reimagining Retail Supply Chains Transformative Power of Agentic AI.pdf",
      year: "2025-26",
      category: "Guest Lecture",
    },
  ],
  "2024-25": [
    {
      title:
        "A Guest Lecture on “Edge AI 2.0: Towards Establishing & Sustaining Real-Time Enterprises” was organized by Department of Computer Science & Engineering in Association with Computer Society of India (CSI) on 20th March 2025.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Edge AI 2.0 Towards Establishing & Sustaining Real-Time Enterprises.pdf",
      year: "2024-25",
      category: "Guest Lecture",
    },
    {
      title:
        "A National Level Hackathon \"InnoSpark 1.0\" was organized by Department of Computer Science & Engineering in association with CSI on 25th November 2024.",
      pdfUrl: "https://mits.ac.in/assets/pdf/cse/INNOSPARK 1.0.pdf",
      year: "2024-25",
      category: "Hackathon",
    },
    {
      title:
        "A Short Term Training Programme on “Gen AI Tools and Techniques” was organized by Department of Computer Science & Engineering in Association with Computer Society of India (CSI) from 11th to 16th November 2024.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Gen AI Tools and Techniques.pdf",
      year: "2024-25",
      category: "STTP / Workshop",
    },
  ],
  "2023-24": [
    {
      title:
        "A Guest Lecture on \"Introduction and Real-World Applications of Machine Learning\" was organized by Department of Computer Science & Engineering in association with Computer Society of India (CSI) on 06th May 2024.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Introduction and Real-World Applications of Machine Learning.pdf",
      year: "2023-24",
      category: "Guest Lecture",
    },
    {
      title:
        "A Webinar on \"Smart Surveillance: Advancements in Video Analytics with Machine Learning\" was organized by Department of Computer Science & Engineering on 4th May 2024.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Smart Surveillance Advancements in Video Analytics with Machine Learning.pdf",
      year: "2023-24",
      category: "Webinar",
    },
    {
      title:
        "An Online Guest Lecture on “Machine Learning Techniques\" was organized by Department of Computer Science & Engineering on 01st May 2024.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Machine Learning Techniques.pdf",
      year: "2023-24",
      category: "Guest Lecture",
    },
    {
      title:
        "An Online Guest Lecture on “Basic Concepts of cryptography & Block chain Technologies” was organized by Department of Computer Science & Engineering on 1st May 2024.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Basic Concepts of cryptography & Block chain Technologies.pdf",
      year: "2023-24",
      category: "Guest Lecture",
    },
    {
      title:
        "A One Week Online National Level Faculty Development Programme on “Impact of Emerging Technologies in AI/ML and Data Science” was organized by Department of Computer Science & Engineering In Association with Computer Society of India (CSI) from 26-02-2024 to 02-03-2024.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Impact of Emerging Technologies in AI-ML and Data Science.pdf",
      year: "2023-24",
      category: "FDP",
    },
    {
      title:
        "One Week Online International Faculty Development Programme on “Emerging Tools & Techniques in Machine Learning and Data Science“ was organized by Department of CSE in association with Computer Society of India (CSI) from 5th to 10th February 2024.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Emerging Tools & Techniques in Machine Learning and Data Science.pdf",
      year: "2023-24",
      category: "FDP",
    },
    {
      title:
        "A Guest Lecture on “Data Science for Engineers\" was organized by Department of Computer Science & Engineering in association with Computer Society of India (CSI) on 2nd December 2023.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Data Science for Engineers.pdf",
      year: "2023-24",
      category: "Guest Lecture",
    },
    {
      title:
        "A Webinar “Research Opportunities in Integration of IoT and Blockchain for Smart Applications” was organized by Department of Computer Science & Engineering in association with Computer Society of India (CSI) on 22nd November 2023.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Research%20Opportunities%20in%20Integration%20of%20IoT%20and%20Blockchain%20for%20Smart%20Applications.pdf",
      year: "2023-24",
      category: "Webinar",
    },
    {
      title:
        "A Guest Lecture on “Post Quantum Cryptography “ was organized by Department of Computer Science & Engineering in association with Computer Society of India (CSI) on 20th November 2023.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Post Quantum Cryptography.pdf",
      year: "2023-24",
      category: "Guest Lecture",
    },
  ],
  "2022-23": [
    {
      title:
        "A 5 Days Online Workshop on Recent Trends in Machine Learning and BigData in association with Computer Society of India from 24th to 31st May 2023.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Recent Trends in Machine Learning and BigData.pdf",
      year: "2022-23",
      category: "Workshop",
    },
    {
      title:
        "A Two Days National Conference NASA'23, was organized by Department of Computer Science and Engineering on 19th & 20th April 2023.",
      pdfUrl: "https://mits.ac.in/assets/pdf/cse/NASA-23.pdf",
      year: "2022-23",
      category: "Conference",
    },
    {
      title:
        "A National Level Technical Symposium GMOCS-2023 was organized by Department of Computer Science & Engineering on 29th March 2023.",
      pdfUrl: "https://mits.ac.in/assets/pdf/cse/GMOCS-2K23.pdf",
      year: "2022-23",
      category: "Symposium",
    },
    {
      title:
        "An Quiz Contest on “Web Development V1.0” was organized by Department of Computer Science & Engineering in Association with Computer Society of India (CSI) on 19th November 2022.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Web Development V1.0-min.pdf",
      year: "2022-23",
      category: "Quiz / Competition",
    },
    {
      title:
        "One Week Online International Faculty Development Programme on \"Emerging Trends and Research Opportunities in Computer Science\" was organized by Department of Computer Science & Engineering from 31st October to 5th November 2022.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Emerging Trends & Research Opportunities in Computer Science.pdf",
      year: "2022-23",
      category: "FDP",
    },
    {
      title:
        "A \"One Week Online Faculty Induction Workshop on Thrust Areas\" in association with IEEE & CSI was organized by Department of Computer Science & Engineering on 10th to 15th October 2022.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/One Week Online Faculty Induction Workshop on Thrust Areas.pdf",
      year: "2022-23",
      category: "Workshop",
    },
  ],
  "2021-22": [
    {
      title:
        "A National Level Technical Symposium GMOCS-2K22 was organized by Department of Computer Science and Engineering on 25th May 2022.",
      pdfUrl: "https://mits.ac.in/assets/pdf/cse/GMOCS-2022.pdf",
      year: "2021-22",
      category: "Symposium",
    },
    {
      title:
        "Report on Webinar on Cloud Technologies opportunities learnings, and growth. In association with the Computer Society of India (CSI) 21st May 2022.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Webinar_on_cloud_Computing_21_05_22.pdf",
      year: "2021-22",
      category: "Webinar",
    },
    {
      title:
        "Report on Guest Lecture Organized by Department of Computer Science & Engineering on “Role of IoT in Smart Spaces” in Association with Computer Society of India (CSI) 04th May 2022.",
      pdfUrl: "https://mits.ac.in/assets/pdf/cse/Report on IOT.pdf",
      year: "2021-22",
      category: "Guest Lecture",
    },
    {
      title:
        "\"Opportunities and challenges of Entrepreneur\" in association with Computer Science of India, was organized by Department of Computer Science & Engineering on 27th April 2022.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Report On Guest Lecture.pdf",
      year: "2021-22",
      category: "Guest Lecture",
    },
    {
      title:
        "Five Day Workshop Report on \"Applications Of Blockchain And Artificial Intelligence In Diverse Domain” was organized by Department of Computer Science & Engineering on 21st to 26th October 2021.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Applications of Blockchain and Artificial Intelligence in Diverse Domain.pdf",
      year: "2021-22",
      category: "Workshop",
    },
    {
      title:
        "One day National webinar report on \"Research Perspectives in Cloud Security” was Organized by Department of Computer Science & Engineering in Association with Computer Society of India [CSI], 12 October 2021.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Webinar RPCC  REPORT 12.10.21.pdf",
      year: "2021-22",
      category: "Webinar",
    },
    {
      title:
        "One day National webinar report on \"DEEP LEARNING AND ITS APPLICATIONS” was organized by Department of Computer Science & Engineering in Association with Institute of Electrical and Electronics Engineers [IEEE] and Computer Society of India [CSI], on 09 October 2021.",
      pdfUrl:
        "https://mits.ac.in/assets/pdf/cse/Webinar-Deep-Learning  REPORT 09.10.21.pdf",
      year: "2021-22",
      category: "Webinar",
    },
  ],
};

export const allCsiEvents: CsiEventItem[] = Object.values(csiEventsByYear).flat();

export const csiQuickStats = [
  { label: "Branch Code", value: "M10660" },
  { label: "Archived Events", value: "27" },
  { label: "Academic Years", value: "5 Years" },
  { label: "National Members", value: "90,000+" },
];

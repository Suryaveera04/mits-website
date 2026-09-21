export interface ClubReport {
  title: string;
  url: string;
  year?: string;
}

export interface StudentClubItem {
  id: string;
  name: string;
  sno?: number;
  category?: string;
  facultyAdvisor: string;
  studentCoordinator: string;
  contactNumber: string;
  image?: string;
  about: string;
  vision?: string;
  mission?: string;
  activities?: string[];
  events: ClubReport[];
}

export interface NoticeBoardItem {
  title: string;
  description: string;
  date: string;
  reportUrl: string;
}

export const noticeBoardData: NoticeBoardItem = {
  title: "Inauguration of AI Learning Hub",
  description: 'Student Activity Center [SAC] organized "Inauguration of AI Learning Hub" on 26th May 2026.',
  date: "26th May 2026",
  reportUrl: "https://mits.ac.in/public/uploads/sac/Inauguration%20of%20AI%20Learning%20Hub.pdf"
};

export const aboutClubsContent = {
  intro:
    "The dynamism of academic life spills out of the classrooms. It is a credit to the mental and intellectual focus of the students that many of the clubs are extensions of their academic and career aspirations. There are several annual 'fests' and entertainment events organized by the institution every year. Students' clubs provide a forum for interaction among themselves and the outside world events, however varied, it may be formal or informal, but brings out the passion in youngsters and develop their organizational skills. The clubs bring about a good balance of work, fun and leisure activities and ensure the all round development of students.",
  importance:
    "Students' Clubs are the main hub of student activity. They provide an outlet and a stage for the creative juices of young minds and hearts. The clubs give you the chance to apply classroom learning in the outside world. This helps you to gain invaluable leadership as well as life skills. In addition to connecting other students who have similar interests, students' clubs make students to interact with alumni and professionals in their fields of interest.",
  benefits: [
    "Students' clubs enrich your experience, create a diverse community, encourage involvement, and provide opportunities for students to build valuable skills",
    "This helps you to build formal and informal networks while exploring career opportunities.",
    "Open to all students, these clubs organize programs, events, and meetings throughout the academic year. Clubs listed here are officially recognized."
  ],
  quickLinks: [
    {
      title: "Student Club Constitution",
      url: "https://mits.ac.in/public/uploads/sac/Students%20club%20Constitution.pdf"
    },
    {
      title: "Event Calendar",
      url: "https://mits.ac.in/public/uploads/sac/calender1.pdf"
    },
    {
      title: "Consolidate Student Club Activities-2021-2022",
      url: "https://mits.ac.in/public/uploads/sac/Consolidate%20Student%20Club%20Activities-2021-2022.pdf"
    }
  ]
};

export const studentClubsDirectory = [
  {
    sno: 1,
    name: "Arts & Cultural Club",
    tabId: "arts-cultural",
    facultyAdvisor: "Dr. P. Athahar Samina Khan",
    studentCoordinator: "Y. Chakradhar Reddy",
    contactNumber: "9347293212"
  },
  {
    sno: 2,
    name: "Film Makers Club",
    tabId: "film-makers",
    facultyAdvisor: "Mr. K. Md.Riyaz Ali",
    studentCoordinator: "K. Basha",
    contactNumber: "8247428668"
  },
  {
    sno: 3,
    name: "Sports Club",
    tabId: "sports",
    facultyAdvisor: "Dr. C. Damodharan",
    studentCoordinator: "V. Nikitha",
    contactNumber: "6302403221"
  },
  {
    sno: 4,
    name: "MSR Club",
    tabId: "msr",
    facultyAdvisor: "Mr. B.S.H. Shayeez Ahamed",
    studentCoordinator: "G. Sriram",
    contactNumber: "9182659483"
  },
  {
    sno: 5,
    name: "Web Club",
    tabId: "web",
    facultyAdvisor: "Dr. R. Nidhya",
    studentCoordinator: "V. Saran",
    contactNumber: "8886200010"
  },
  {
    sno: 6,
    name: "Tech Club",
    tabId: "tech",
    facultyAdvisor: "Dr. K. Dinesh",
    studentCoordinator: "P. Kiranmaie",
    contactNumber: "6303226294"
  },
  {
    sno: 7,
    name: "Coding Club",
    tabId: "coding",
    facultyAdvisor: "Dr. Velumani M",
    studentCoordinator: "P. Harsha Vardhan",
    contactNumber: "9490123845"
  },
  {
    sno: 8,
    name: "Builders Club",
    tabId: "builders",
    facultyAdvisor: "Dr. Priyam Nath B",
    studentCoordinator: "A. Vyshnavi",
    contactNumber: "9010764482"
  },
  {
    sno: 9,
    name: "Literary Club",
    tabId: "literary",
    facultyAdvisor: "Dr. M. Parvathi, Dr. Sriganesh Radhakrishnan",
    studentCoordinator: "P. Uday kumar",
    contactNumber: "7815880507"
  },
  {
    sno: 10,
    name: "Yoga & Meditation Club",
    tabId: "yoga-meditation",
    facultyAdvisor: "Mr. K. Manju Vikram",
    studentCoordinator: "D. Aravind",
    contactNumber: "7330843432"
  },
  {
    sno: 11,
    name: "SKILL BEE Club",
    tabId: "skill-bee",
    facultyAdvisor: "Mr. K. Durga Charan",
    studentCoordinator: "M Rasheed Ahamed",
    contactNumber: "8332040887"
  },
  {
    sno: 12,
    name: "ARC Club",
    tabId: "arc",
    facultyAdvisor: "Mr. P. Firoze khan",
    studentCoordinator: "S. Mohammed Mateen Hussain",
    contactNumber: "8297472017"
  },
  {
    sno: 13,
    name: "Drone Technology Club",
    tabId: "drone-technology",
    facultyAdvisor: "Dr. K. Arul kumar",
    studentCoordinator: "K. Sai Teja",
    contactNumber: "9182345671"
  },
  {
    sno: 14,
    name: "Entrepreneur's Club",
    tabId: "entrepreneurs",
    facultyAdvisor: "Dr. P. Sivaiah",
    studentCoordinator: "T. Naveen Kumar",
    contactNumber: "9848123456"
  },
  {
    sno: 15,
    name: "Anchors Club",
    tabId: "arts-cultural",
    facultyAdvisor: "Mrs. U. Vijaya Lakshmi",
    studentCoordinator: "K. Ameya Sree",
    contactNumber: "8247897374"
  }
];

export const studentClubsList: StudentClubItem[] = [
  {
    id: "arts-cultural",
    name: "Arts & Cultural Club",
    sno: 1,
    category: "Fine & Performing Arts",
    facultyAdvisor: "Dr. P. Athahar Samina Khan",
    studentCoordinator: "Y. Chakradhar Reddy",
    contactNumber: "9347293212",
    image: "https://mits.ac.in/assets/images/club/arts.jpg",
    about:
      "The Arts & Cultural Club provides a vibrant platform for students to express their creative energies through dance, music, theater, classical arts, and fine arts. The club organizes flagship cultural events, inter-collegiate festivals, and talent showcases that celebrate artistic diversity and campus unity.",
    vision:
      "To foster artistic creativity, cultural appreciation, and expressive performing talents among students, enriching campus vitality.",
    mission:
      "To provide stage opportunities, workshops, and inter-collegiate avenues for music, dance, visual arts, and drama.",
    activities: [
      "Annual Inter-Departmental Cultural Fest & Talent Hunt",
      "Traditional & Classical Dance and Musical Performances",
      "Street Plays, Theatrical Skits, and Social Awareness Drama",
      "Art & Painting Exhibitions, Rangoli, and Photography Displays"
    ],
    events: [
      {
        title: "Arts & Cultural Club Activities (2022-23)",
        url: "https://mits.ac.in/public/uploads/sac/22904fc4e7a83d4c38d82d49ecaa418b.pdf",
        year: "2022-23"
      },
      {
        title: "Arts & Cultural Club Activities (2021-22)",
        url: "https://mits.ac.in/public/uploads/sac/Arts and Cultural Club Activities - 2021 - 2022.pdf",
        year: "2021-22"
      },
      {
        title: "Arts & Cultural Club Activities (2018-19)",
        url: "https://mits.ac.in/public/uploads/sac/0b979ec7fcf499709a3411b6ff490799.pdf",
        year: "2018-19"
      },
      {
        title: "Arts & Cultural Club Activities (2017-18)",
        url: "https://mits.ac.in/public/uploads/sac/0064d1421f1530e7bf099d08e5beabf3.pdf",
        year: "2017-18"
      },
      {
        title: "Arts & Cultural Club Activities (2016-17)",
        url: "https://mits.ac.in/public/uploads/sac/97ecf383e58b1f5bbab928d1192e2702.pdf",
        year: "2016-17"
      },
      {
        title: "Arts & Cultural Club Activities (2015-16)",
        url: "https://mits.ac.in/public/uploads/sac/4ec09fa71337422f87ee26131b79fdd2.pdf",
        year: "2015-16"
      },
      {
        title: "Apna Time Aayega Season 2 - Campus Talent Showcase",
        url: "https://mits.ac.in/public/uploads/sac/Apna%20time%20Aayega2.pdf",
        year: "2022-23"
      },
      {
        title: "Freshers' Day Cultural Celebrations",
        url: "https://mits.ac.in/assets/pdf/assoc/Freshers%E2%80%99%20Day%20Celebrations%202025.pdf",
        year: "2024-25"
      }
    ]
  },
  {
    id: "film-makers",
    name: "Film Makers Club",
    sno: 2,
    category: "Cinema & Photography",
    facultyAdvisor: "Mr. K. Md.Riyaz Ali",
    studentCoordinator: "K. Basha",
    contactNumber: "8247428668",
    image: "https://mits.ac.in/assets/images/club/fm.jpg",
    about:
      "This Film Makers Club is open to all students interested in making, directing, filming, acting in, or editing student films and photography in our campus. Our goal is to bring together students who are interested in film and film making in order to encourage and provide support and guidance for student filmmaking projects. The club serves as a platform for sharing work, ideas, and knowledge, and as a network for finding individuals to help in all aspects of production.",
    vision:
      "To nurture cinematic storytelling, visual direction, and digital media production among enthusiastic student filmmakers.",
    mission:
      "To empower young creators with technical workshops in cinematography, screenwriting, editing, and sound design while producing short films and documentaries.",
    activities: [
      "Short Film Productions & Scriptwriting Competitions",
      "Cinematography, Lighting & Camera Handling Masterclasses",
      "Video Editing Workshops (Premiere Pro, DaVinci Resolve)",
      "Annual Campus Film Festival and Screenings"
    ],
    events: [
      {
        title: "Film Makers Club Events 2022-2023",
        url: "https://mits.ac.in/public/uploads/sac/Film Makers Club Events 2022-2023.pdf",
        year: "2022-23"
      },
      {
        title: "Film Makers Club Events Summary",
        url: "https://mits.ac.in/public/uploads/sac/Film Makers Club Events Summary.pdf",
        year: "Summary"
      },
      {
        title: "Film Makers Club Events 2021-2022",
        url: "https://mits.ac.in/public/uploads/sac/a83d18f2a6f05ff36a11346fd9a45526.pdf",
        year: "2021-22"
      },
      {
        title: "Film Makers Club Events 2018-19",
        url: "https://mits.ac.in/public/uploads/sac/f150a65ebc83259882969dd54da1c762.pdf",
        year: "2018-19"
      },
      {
        title: "Film Makers Club Events 2017-18",
        url: "https://mits.ac.in/public/uploads/sac/7f1e2a5f5f7902c674ebbbf90e910c15.pdf",
        year: "2017-18"
      },
      {
        title: "Film Makers Club Events 2016-17",
        url: "https://mits.ac.in/public/uploads/sac/b248f532e51f89c1c5b71ec25acbf35f.pdf",
        year: "2016-17"
      },
      {
        title: "Film Makers Club Events 2015-16",
        url: "https://mits.ac.in/public/uploads/sac/530f7804fe9e7c8ad3b3615e6f6cd8a1.pdf",
        year: "2015-16"
      }
    ]
  },
  {
    id: "sports",
    name: "Sports Club",
    sno: 3,
    category: "Athletics & Games",
    facultyAdvisor: "Dr. C. Damodharan",
    studentCoordinator: "V. Nikitha",
    contactNumber: "6302403221",
    image: "https://mits.ac.in/assets/images/club/sports.jpg",
    about:
      "The Sports Club at MITS promotes physical endurance, fitness, and team camaraderie. Through state-of-the-art outdoor grounds and indoor sports arenas, students train and compete in cricket, football, basketball, volleyball, athletics, table tennis, badminton, and chess, representing MITS at university and national levels.",
    vision:
      "To build a vibrant culture of physical fitness, competitive sportsmanship, and mental resilience among the student fraternity.",
    mission:
      "To organize structured leagues, collegiate tournaments, and professional coaching sessions across individual and team sports.",
    activities: [
      "Annual Inter-Branch Sports Tournament",
      "Participation in JNTUA & All India Inter-University Tournaments",
      "Intramural Leagues in Cricket, Volleyball, Basketball & Kabaddi",
      "Indoor Sports Championships (Chess, Table Tennis, Badminton)"
    ],
    events: [
      {
        title: "Sports Club Events 2022-23",
        url: "https://mits.ac.in/public/uploads/sac/Sports Club Events 2022-23.pdf",
        year: "2022-23"
      },
      {
        title: "Sports Club Events 2021-22",
        url: "https://mits.ac.in/public/uploads/sac/da75522eec89e9f6ceae5a2a2ba7768e.pdf",
        year: "2021-22"
      },
      {
        title: "Sports Club Events 2018-19",
        url: "https://mits.ac.in/public/uploads/sac/2c0f6daec9a25b331043743431eb040c.pdf",
        year: "2018-19"
      },
      {
        title: "Sports Club Events 2017-18",
        url: "https://mits.ac.in/public/uploads/sac/db90264101e1dcad59d009fe16f6b553.pdf",
        year: "2017-18"
      },
      {
        title: "Sports Club Events 2016-17",
        url: "https://mits.ac.in/public/uploads/sac/d72e7be5903932e65d21ba99d2568f9b.pdf",
        year: "2016-17"
      },
      {
        title: "Sports Club Events 2015-16",
        url: "https://mits.ac.in/public/uploads/sac/7b183dd2cf1675231c62f256086f68c7.pdf",
        year: "2015-16"
      }
    ]
  },
  {
    id: "msr",
    name: "MSR Club",
    sno: 4,
    category: "Social Responsibility & Outreach",
    facultyAdvisor: "Mr. B.S.H. Shayeez Ahamed",
    studentCoordinator: "G. Sriram",
    contactNumber: "9182659483",
    image: "https://mits.ac.in/assets/images/club/msr.jpg",
    about:
      "The MITS Social Responsibility (MSR) Club is dedicated to instilling social awareness, moral empathy, and proactive community service among students. Under SAC guidance, the club conducts blood donation camps, rural school literacy drives, environmental sustainability programs, and community relief initiatives.",
    vision:
      "To nurture empathetic and socially conscientious engineers dedicated to uplifting society and resolving real-world community challenges.",
    mission:
      "To spearhead meaningful student-driven social outreach, rural development, environmental preservation, and disaster assistance programs.",
    activities: [
      "Mega Blood Donation Camps in coordination with Red Cross",
      "Rural School Mentoring & Educational Aid Distributions",
      "Eco-friendly Cleanliness & Tree Plantation Drives",
      "Health & Hygiene Awareness Camps in Surrounding Villages"
    ],
    events: [
      {
        title: "MSR Club Activities 2022-2023",
        url: "https://mits.ac.in/public/uploads/sac/MSR Club Activities 2022-2023.pdf",
        year: "2022-23"
      },
      {
        title: "MSR Club Activities 2021-2022",
        url: "https://mits.ac.in/public/uploads/sac/90f84578964e528f14798e2bb75aeb93.pdf",
        year: "2021-22"
      },
      {
        title: "MSR Club Activities 2018-19",
        url: "https://mits.ac.in/public/uploads/sac/229a8f4cff2556dcfa28b6d36e2f1837.pdf",
        year: "2018-19"
      },
      {
        title: "MSR Club Activities 2017-18",
        url: "https://mits.ac.in/public/uploads/sac/e43960fe2efd29df89da0e53a35cf9c9.pdf",
        year: "2017-18"
      },
      {
        title: "MSR Club Activities 2016-17",
        url: "https://mits.ac.in/public/uploads/sac/66d713c7c25c16e7dd782bc4e5bbf6c9.pdf",
        year: "2016-17"
      },
      {
        title: "MSR Club Activities 2015-16",
        url: "https://mits.ac.in/public/uploads/sac/c774f76239ec672722650f9689ca5828.pdf",
        year: "2015-16"
      }
    ]
  },
  {
    id: "web",
    name: "Web Club",
    sno: 5,
    category: "Full-Stack & Cloud Computing",
    facultyAdvisor: "Dr. R. Nidhya",
    studentCoordinator: "V. Saran",
    contactNumber: "8886200010",
    image: "https://mits.ac.in/assets/images/club/web.jpg",
    about:
      "Web Club at MITS cultivates modern web design, full-stack application development, API integration, and cloud deployment skills. The club organizes hands-on workshops on modern frameworks like React, Next.js, Node.js, and Tailwind CSS, preparing students for real-world software engineering careers.",
    vision:
      "To build proficient full-stack developers and UI/UX designers capable of crafting scalable, secure web solutions.",
    mission:
      "To host interactive bootcamps, web hackathons, open-source sprints, and peer-to-peer coding sessions.",
    activities: [
      "Web Development Hackathons & Code Sprints",
      "UI/UX Prototyping Masterclasses in Figma",
      "Full-Stack Workshops (Frontend, Backend, Databases, REST APIs)",
      "Hands-on Deployment Sessions on Cloud Platforms"
    ],
    events: [
      {
        title: "Web Club Events 2022-2023",
        url: "https://mits.ac.in/public/uploads/sac/Web Club Events 2022-2023.pdf",
        year: "2022-23"
      },
      {
        title: "Web Club Events 2021-22",
        url: "https://mits.ac.in/public/uploads/sac/3c0598687a17bc137976e5e8e81561f0.pdf",
        year: "2021-22"
      },
      {
        title: "Web Club Events 2018-19",
        url: "https://mits.ac.in/public/uploads/sac/a44410052ae30c904e9eb8e860fcb3b0.pdf",
        year: "2018-19"
      },
      {
        title: "Web Club Events 2017-18",
        url: "https://mits.ac.in/public/uploads/sac/96cb1006e9324e93fb22c92fe38d9987.pdf",
        year: "2017-18"
      },
      {
        title: "Web Club Events 2016-17",
        url: "https://mits.ac.in/public/uploads/sac/fa60bbfd5326ea081b2aa2622956f4d3.pdf",
        year: "2016-17"
      }
    ]
  },
  {
    id: "tech",
    name: "Tech Club",
    sno: 6,
    category: "Technical Innovation & IoT",
    facultyAdvisor: "Dr. K. Dinesh",
    studentCoordinator: "P. Kiranmaie",
    contactNumber: "6303226294",
    image: "https://mits.ac.in/assets/images/club/tech.jpg",
    about:
      "Tech Club is an incubator for cutting-edge engineering projects, IoT systems, artificial intelligence experiments, and embedded computing. It inspires multidisciplinary collaboration to solve complex problems through technology symposiums, quizzes, and project expos.",
    vision:
      "To foster an inquisitive culture of technical exploration, emerging tech experimentation, and applied innovation.",
    mission:
      "To organize symposiums, technical paper presentations, hackathons, and hardware-software integration workshops.",
    activities: [
      "Annual Inter-College Technical Symposium",
      "IoT Prototyping & Sensor Telemetry Workshops",
      "Tech Quizzes, Debugging Competitions, and Project Expos",
      "Guest Lectures from Senior Technology Leaders"
    ],
    events: [
      {
        title: "Tech Club Activities 2022-2023",
        url: "https://mits.ac.in/public/uploads/sac/Tech Club Activities 2022-2023.pdf",
        year: "2022-23"
      },
      {
        title: "Tech Club Activities 2021-2022",
        url: "https://mits.ac.in/public/uploads/sac/b703ea339178bfd8b87eeafbc0ca22d9.pdf",
        year: "2021-22"
      },
      {
        title: "Tech Club Activities 2018-19",
        url: "https://mits.ac.in/public/uploads/sac/efc4bbcfc86236b28ebc91e0a2965451.pdf",
        year: "2018-19"
      },
      {
        title: "Tech Club Activities 2017-18",
        url: "https://mits.ac.in/public/uploads/sac/4f179c3dbe7264875704a2fe7e7ec9e3.pdf",
        year: "2017-18"
      },
      {
        title: "Tech Club Activities 2016-17",
        url: "https://mits.ac.in/public/uploads/sac/4e78b77aa1a97d7c67c51d6c8b051df1.pdf",
        year: "2016-17"
      },
      {
        title: "Tech Club Activities 2015-16",
        url: "https://mits.ac.in/public/uploads/sac/b72d1373ea89cefd0799757f495ca988.pdf",
        year: "2015-16"
      }
    ]
  },
  {
    id: "coding",
    name: "Coding Club",
    sno: 7,
    category: "Competitive Programming & DSA",
    facultyAdvisor: "Dr. Velumani M",
    studentCoordinator: "P. Harsha Vardhan",
    contactNumber: "9490123845",
    image: "https://mits.ac.in/assets/images/club/tech.jpg",
    about:
      "The Coding Club is dedicated to training students in advanced data structures, algorithmic thinking, and competitive programming. Conducting weekly contests, code debugging challenges, and interview problem breakdowns, the club powers students to succeed in top product-based company assessments.",
    vision:
      "To produce world-class algorithmic problem solvers who excel in competitive programming arenas and global software engineering careers.",
    mission:
      "To conduct structured DSA bootcamps, weekly algorithmic sprints, mock coding assessments, and national coding marathons.",
    activities: [
      "Weekly DSA Problem Solving Sessions on LeetCode & Codeforces",
      "Competitive Coding Marathons & Speed Programming Contests",
      "Mock Technical Coding Interviews & Resume Reviews",
      "Open Source Contribution Drives & Git Masterclasses"
    ],
    events: [
      {
        title: "Annual Coding Marathon & DSA Hackathon Report",
        url: "https://mits.ac.in/public/uploads/sac/calender1.pdf",
        year: "2023-24"
      },
      {
        title: "Algorithmic Contest Series & CodeBlitz",
        url: "https://mits.ac.in/public/uploads/sac/Consolidate%20Student%20Club%20Activities-2021-2022.pdf",
        year: "2022-23"
      },
      {
        title: "Inauguration of AI Learning Hub & Coding Sprints",
        url: "https://mits.ac.in/public/uploads/sac/Inauguration%20of%20AI%20Learning%20Hub.pdf",
        year: "2023-24"
      }
    ]
  },
  {
    id: "builders",
    name: "Builders Club",
    sno: 8,
    category: "Infrastructure & Sustainable Engineering",
    facultyAdvisor: "Dr. Priyam Nath B",
    studentCoordinator: "A. Vyshnavi",
    contactNumber: "9010764482",
    image: "https://mits.ac.in/assets/images/club/builders.jpg",
    about:
      "Vision: To bring in astonishing innovation for the benefit of the society through the Civil Engineering domain, including innovative buildings, innovative building materials, innovative bridges, green buildings, green pavement etc., which will serve the community and develop the nation.\n\nMission: To build student interest in sustainable construction, structural design software, green architecture, smart cities modeling, and disaster-resilient building technologies.",
    vision:
      "To bring in astonishing innovation for the benefit of society through the Civil Engineering domain, creating sustainable buildings, green pavements, and innovative infrastructure.",
    mission:
      "To provide hands-on experience in CAD/BIM tools, structural testing, surveying technologies, and low-cost housing models.",
    activities: [
      "Guest Lectures on Low-Cost Housing and Sustainable Infrastructure",
      "Bridge Building Competitions & Structural Load Testing Expos",
      "Smart City Architectural Modeling & Green Building Designs",
      "Site Visits to Major Construction and Surveying Projects"
    ],
    events: [
      {
        title: "Builder's Club Activities 2023-24",
        url: "https://mits.ac.in/public/uploads/sac/7d8a9b93ec0e765a3e787d15b7054b6a.pdf",
        year: "2023-24"
      },
      {
        title: "Builder's Club Activities 2022-23 (Guest Lecture on Low-Cost Housing)",
        url: "https://mits.ac.in/public/uploads/sac/Report of Guest Lecture on Low-Cost Housing-1-min.pdf",
        year: "2022-23"
      }
    ]
  },
  {
    id: "literary",
    name: "Literary Club",
    sno: 9,
    category: "Oratory, Debating & Writing",
    facultyAdvisor: "Dr. M. Parvathi, Dr. Sriganesh Radhakrishnan",
    studentCoordinator: "P. Uday kumar",
    contactNumber: "7815880507",
    image: "https://mits.ac.in/assets/images/club/literary.jpg",
    about:
      "The Literary Club at MITS is a vibrant community of writers, debaters, poets, and avid readers. Through parliamentary debates, Model United Nations (MUN), creative writing, elocution, and book clubs, members develop eloquence, intellectual depth, and persuasive communication.",
    vision:
      "To cultivate articulate, thoughtful, and expressive communicators capable of constructive debate and literary excellence.",
    mission:
      "To organize debating leagues, creative writing contests, poetry slams, and literary publications across the campus.",
    activities: [
      "Parliamentary Debates & Youth Parliament Assemblies",
      "Model United Nations (MUN) Training and Conferences",
      "Creative Writing, Essay, and Poetry Competitions",
      "Elocution, Extempore, and Book Review Sessions"
    ],
    events: [
      {
        title: "Literary Club Events 2022-2023",
        url: "https://mits.ac.in/public/uploads/sac/Literary Club Events 2022-2023.pdf",
        year: "2022-23"
      },
      {
        title: "Literary Club Events Summary",
        url: "https://mits.ac.in/public/uploads/sac/Literary Club Events Summary.pdf",
        year: "Summary"
      },
      {
        title: "Literary Club Events 2021-2022",
        url: "https://mits.ac.in/public/uploads/sac/a444a4ebda293dfdf98a96d1ebdfae12.pdf",
        year: "2021-22"
      },
      {
        title: "Literary Club Events 2018-19",
        url: "https://mits.ac.in/public/uploads/sac/3c419c80d46d0e806c9a3bf3eb4a5b67.pdf",
        year: "2018-19"
      },
      {
        title: "Literary Club Events 2017-18",
        url: "https://mits.ac.in/public/uploads/sac/2569766bb73dd383ebbaea5c23e80f48.pdf",
        year: "2017-18"
      },
      {
        title: "Literary Club Events 2016-17",
        url: "https://mits.ac.in/public/uploads/sac/da7595568f9435b6dfaa7e7c9bf13a30.pdf",
        year: "2016-17"
      },
      {
        title: "Literary Club Events 2015-16",
        url: "https://mits.ac.in/public/uploads/sac/d72da20da5dc364f84c8be19f128e4e7.pdf",
        year: "2015-16"
      }
    ]
  },
  {
    id: "yoga-meditation",
    name: "Yoga & Meditation Club",
    sno: 10,
    category: "Holistic Wellness & Mindfulness",
    facultyAdvisor: "Mr. K. Manju Vikram",
    studentCoordinator: "D. Aravind",
    contactNumber: "7330843432",
    image: "https://mits.ac.in/assets/images/club/yoga.jpg",
    about:
      "Yoga & Meditation Club fosters mental equanimity, physical vitality, and inner balance. In today's fast-paced academic journey, the club provides students with structured mindfulness training, asana practice, pranayama techniques, and stress reduction workshops.",
    vision:
      "To nurture balanced, healthy, and stress-free individuals through time-tested yogic science and meditation.",
    mission:
      "To conduct daily and weekly yoga sessions, mental wellness workshops, and celebratory events on International Day of Yoga.",
    activities: [
      "International Yoga Day Celebrations and Demonstrations",
      "Pranayama & Guided Meditation for Academic Focus",
      "Stress Management and Mental Resilience Workshops",
      "Asana Practice Clinics for Posture and Spinal Health"
    ],
    events: [
      {
        title: "Yoga & Meditation Club Events 2022-23",
        url: "https://mits.ac.in/public/uploads/sac/Yoga & Meditation Club Events 2022-23.pdf",
        year: "2022-23"
      },
      {
        title: "Yoga & Meditation Club Events 2021-22",
        url: "https://mits.ac.in/public/uploads/sac/5e53e77f0a8f79f2203ebbeeb1c1106e.pdf",
        year: "2021-22"
      },
      {
        title: "Yoga & Meditation Club Events 2018-19",
        url: "https://mits.ac.in/public/uploads/sac/96c78aee371239c8ebdd94132808064b.pdf",
        year: "2018-19"
      },
      {
        title: "Yoga & Meditation Club Events 2017-18",
        url: "https://mits.ac.in/public/uploads/sac/23977c07e868a2bf6feec69f6e6d1cbf.pdf",
        year: "2017-18"
      },
      {
        title: "Yoga & Meditation Club Events 2016-17",
        url: "https://mits.ac.in/public/uploads/sac/0b912c96c4291f0eb987505342a7fa95.pdf",
        year: "2016-17"
      },
      {
        title: "Yoga & Meditation Club Events 2015-16",
        url: "https://mits.ac.in/public/uploads/sac/7b5fbe8db85a067d5ceca0495f504ca0.pdf",
        year: "2015-16"
      }
    ]
  },
  {
    id: "skill-bee",
    name: "SKILL BEE Club",
    sno: 11,
    category: "Professional & Soft Skills",
    facultyAdvisor: "Mr. K. Durga Charan",
    studentCoordinator: "M Rasheed Ahamed",
    contactNumber: "8332040887",
    image: "https://mits.ac.in/assets/images/club/arts.jpg",
    about:
      "Skill Bee Club equips students with essential industry-ready soft skills, corporate etiquette, logical reasoning, and career aptitude. Through interactive group discussions, mock interviews, and presentation clinics, the club bridges the transition from campus to corporate.",
    vision:
      "To produce self-confident, articulate, and professionally polished graduates equipped for modern workplace leadership.",
    mission:
      "To provide continuous skill enrichment modules in communication, critical thinking, teamwork, and placement readiness.",
    activities: [
      "Group Discussion & Personal Interview (GD/PI) Simulation Clinics",
      "Aptitude, Quantitative Reasoning & Logic Problem Sprints",
      "Professional Resume Writing & LinkedIn Branding Workshops",
      "Corporate Etiquette, Email Writing, and Business Communication"
    ],
    events: [
      {
        title: "Skill Bee Club Events & Workshop Report",
        url: "https://mits.ac.in/public/uploads/sac/7b183dd2cf1675231c62f256086f68c7.pdf",
        year: "2022-23"
      },
      {
        title: "Soft Skills and Placement Aptitude Masterclass Series",
        url: "https://mits.ac.in/public/uploads/sac/Consolidate%20Student%20Club%20Activities-2021-2022.pdf",
        year: "2021-22"
      }
    ]
  },
  {
    id: "arc",
    name: "ARC Club",
    sno: 12,
    category: "Automation & Robotics",
    facultyAdvisor: "Mr. P. Firoze khan",
    studentCoordinator: "S. Mohammed Mateen Hussain",
    contactNumber: "8297472017",
    image: "https://mits.ac.in/assets/images/club/tech.jpg",
    about:
      "ARC Club (Automation & Robotics Club / UIRPA) empowers students to dive into robotic process automation, autonomous machines, micro-controllers, and intelligent automated systems. Irrespective of branch, members build automated bots, drone payloads, and industrial automation prototypes.",
    vision:
      "Enhancing all students to participate actively in their passionate stream (Robotic Process Automation) and creating the finest platform to share and present their skills irrespective of departments under the Student Activity Centre.",
    mission:
      "To build software and hardware technology concepts as a group, driving new efficiencies and creating innovative automation solutions to solve complex everyday tasks.",
    activities: [
      "Conducting Robotics events such as symposiums, Quizzes, Model exhibitions",
      "Organizing Guest Lectures from Robotics & Automation Specialists",
      "Hands-on Workshops on Robotic Process Automation (RPA) Tools",
      "Robo-War, Line Follower, and Autonomous Bot Competitions"
    ],
    events: [
      {
        title: "Robotic Process Automation Workshop & Model Exhibition",
        url: "https://mits.ac.in/public/uploads/sac/Inauguration%20of%20AI%20Learning%20Hub.pdf",
        year: "2023-24"
      },
      {
        title: "UIRPA Club Technical Activities & Competitions",
        url: "https://mits.ac.in/public/uploads/sac/Consolidate%20Student%20Club%20Activities-2021-2022.pdf",
        year: "2021-22"
      }
    ]
  },
  {
    id: "drone-technology",
    name: "Drone Technology Club",
    sno: 13,
    category: "Aerospace & Autonomous UAVs",
    facultyAdvisor: "Dr. K. Arul kumar",
    studentCoordinator: "K. Sai Teja",
    contactNumber: "9182345671",
    image: "https://mits.ac.in/assets/images/club/tech.jpg",
    about:
      "Drone Technology Club is the aerial innovation arm of MITS SAC. The club focuses on Unmanned Aerial Vehicle (UAV) design, flight telemetry, drone piloting, autonomous mission programming, 3D aerial mapping, and aerial photography applications.",
    vision:
      "To spearhead research, design, and piloting capabilities in autonomous aerial systems and next-generation drone technologies.",
    mission:
      "To guide students through flight dynamics, drone fabrication, FAA/DGCA regulatory protocols, and AI-enabled aerial computer vision.",
    activities: [
      "Quadcopter Assembly & Flight Calibration Workshops",
      "Drone Piloting Simulator Training & Obstacle Course Flying",
      "Aerial Surveillance & Agricultural Thermal Mapping Demos",
      "Guest Lectures on Drone Regulations and Aerospace Careers"
    ],
    events: [
      {
        title: "Drone Flight Mechanics & Autonomous Navigation Workshop",
        url: "https://mits.ac.in/public/uploads/sac/calender1.pdf",
        year: "2023-24"
      },
      {
        title: "Aerial Robotics & Telemetry Symposium",
        url: "https://mits.ac.in/public/uploads/sac/Students%20club%20Constitution.pdf",
        year: "2022-23"
      }
    ]
  },
  {
    id: "entrepreneurs",
    name: "Entrepreneur's Club",
    sno: 14,
    category: "Startups & Venture Incubation",
    facultyAdvisor: "Dr. P. Sivaiah",
    studentCoordinator: "T. Naveen Kumar",
    contactNumber: "9848123456",
    image: "https://mits.ac.in/assets/images/club/builders.jpg",
    about:
      "Operating in close tandem with the MITS Venture Studio and EDC, the Entrepreneur's Club fosters visionary startup ideation, venture prototyping, business model pitching, and angel investment readiness among ambitious student founders.",
    vision:
      "To transform innovative student engineers into job-creating founders, tech entrepreneurs, and sustainable venture builders.",
    mission:
      "To provide incubation support, founder bootcamps, intellectual property guidance, and investor networking for student startups.",
    activities: [
      "Campus Venture Pitch Competitions & Shark-Tank Simulations",
      "Founder Talks with Successful Alumni Entrepreneurs",
      "Startup Business Model Canvas & Pitch Deck Workshops",
      "IPR & Patent Filing Guidance Clinics for Student Inventions"
    ],
    events: [
      {
        title: "Venture Ideation Bootcamp & Pitch Fest",
        url: "https://mits.ac.in/public/uploads/sac/Inauguration%20of%20AI%20Learning%20Hub.pdf",
        year: "2023-24"
      },
      {
        title: "Entrepreneurship Awareness Drive & Founder Stories",
        url: "https://mits.ac.in/public/uploads/sac/Consolidate%20Student%20Club%20Activities-2021-2022.pdf",
        year: "2022-23"
      }
    ]
  }
];

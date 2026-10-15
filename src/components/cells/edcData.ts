export interface EdcActivity {
  id: string;
  title: string;
  date?: string;
  year: string;
  department?: string;
  collaborators?: string[];
  reportUrl?: string;
  linkLabel?: string;
  category?: "Workshop" | "Expert Talk" | "Seminar" | "Competition" | "Exhibition" | "Orientation" | "MoU" | "Program";
}

export interface EdcDocument {
  title: string;
  href: string;
  tag?: string;
}

export const edcObjectives = [
  "To create greater awareness of opportunities and benefits of entrepreneurship among the students, to make them realize their dream business through innovative products and to develop greater entrepreneurial culture within the institution.",
  "To create greater number of sustainable startup business with potential for further growth.",
  "To create awareness among students on industrial business and on the availability of financial assistance enabling them to start their own industrial ventures."
];

export const edcDocuments: EdcDocument[] = [
  {
    title: "ED Cell Committee 2025-26 Office Order",
    href: "https://mits.ac.in/assets/pdf/assoc/Office order-ED CELL-2025.pdf",
    tag: "Committee"
  },
  {
    title: "MITS - NEN MoU (Wadhwani Foundation)",
    href: "https://mits.ac.in/assets/pdf/assoc/wadhwani.pdf",
    tag: "Partnership"
  },
  {
    title: "MoU Exchange with GUVI – HCL Corporation",
    href: "https://mits.ac.in/assets/pdf/aids/GUVI%20%E2%80%93%20HCL%20Corporation%20Pvt.pdf",
    tag: "Industry MoU"
  }
];

export const nenCapacityBuilding = [
  "Content and Curricula Integration",
  "Faculty and Mentor Development Programs",
  "Consultancy for Advanced Ventures",
  "Infrastructure & Prototyping Support",
  "Experts Bureau and Strategic Networking",
  "National Platforms & Pitch Competitions"
];

export const nenForEntrepreneurs = [
  "Action-oriented Knowledge and Skills Building",
  "One-on-One Mentoring & Milestone Reviews",
  "Access to Experts Bureau & Angel Networks",
  "National & Regional Showcase Platforms",
  "Online Entrepreneur Academy Modules"
];

export const edcActivities: EdcActivity[] = [
  {
    id: "act-1",
    title: '"World Water Day" was organized by Department of Civil Engineering in association with ED Cell & Builders Club Under the aegis of ASCE MITS Student Chapter on 23rd March 2026.',
    date: "23rd March 2026",
    year: "2026",
    department: "Civil Engineering",
    category: "Program",
    reportUrl: "https://mits.ac.in/assets/pdf/civil/WORLD WATER DAY 2026.pdf"
  },
  {
    id: "act-2",
    title: 'A Hands-on Workshop on "Business Plan Development" was organized by School of Management in association with ED cell on 09th March 2026.',
    date: "09th March 2026",
    year: "2026",
    department: "School of Management",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/mba/Business Plan Development.pdf"
  },
  {
    id: "act-3",
    title: 'An Online Expert Talk on "Building Growth and Innovation Mindset using AI" was organized by Department of Master of Computer Applications in association with ED Cell on 31st January 2026.',
    date: "31st January 2026",
    year: "2026",
    department: "Master of Computer Applications",
    category: "Expert Talk",
    reportUrl: "https://mits.ac.in/assets/pdf/ca/Building Growth and Innovation Mindset using AI.pdf"
  },
  {
    id: "act-4",
    title: 'A Workshop on "Design Thinking, Critical Thinking & Innovation Design" was organized by Department of Civil Engineering in association with ASCE MITS Student Chapter, Institution’s Innovation Council (IIC), ED Cell & Builders Club on 31st January 2026.',
    date: "31st January 2026",
    year: "2026",
    department: "Civil Engineering",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/civil/Design Thinking, Critical Thinking Innovation Design.pdf"
  },
  {
    id: "act-5",
    title: 'An Online Expert Talk on "Effective Sales and Marketing Strategies For Start-ups" was organized by Department of Computer Science & Engineering in association with ED Cell on 28th January 2026.',
    date: "28th January 2026",
    year: "2026",
    department: "Computer Science & Engineering",
    category: "Expert Talk",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Effective sales And Marketing Strategies For Start-ups.pdf"
  },
  {
    id: "act-6",
    title: 'An MoU Exchange between MITS and GUVI – HCL Corporation Pvt. Ltd was organized by Department of CSE - AI and Department of CSE (AI & ML) in collaboration with Start-Up Cell & ED Cell on 02nd January 2026.',
    date: "02nd January 2026",
    year: "2026",
    department: "CSE (AI & ML)",
    category: "MoU",
    reportUrl: "https://mits.ac.in/assets/pdf/aids/GUVI%20%E2%80%93%20HCL%20Corporation%20Pvt.pdf"
  },
  {
    id: "act-7",
    title: '"Finance for Everyone" was organized by School of Management in association with Entrepreneurship & Development Cell on 17th December 2025.',
    date: "17th December 2025",
    year: "2025",
    department: "School of Management",
    category: "Program",
    reportUrl: "https://mits.ac.in/assets/pdf/mba/Finance for Everyone.pdf"
  },
  {
    id: "act-8",
    title: 'An "Art & Craft Exhibition" was organized by School of Management in association with Entrepreneurship & Development Cell on 16th December 2025.',
    date: "16th December 2025",
    year: "2025",
    department: "School of Management",
    category: "Exhibition",
    reportUrl: "https://mits.ac.in/assets/pdf/mba/Art & Craft Exhibition.pdf"
  },
  {
    id: "act-9",
    title: 'An "Exhibition on Value Chain Activities" was organized by School of Management in association with Entrepreneurship & Development Cell on 20th November 2025.',
    date: "20th November 2025",
    year: "2025",
    department: "School of Management",
    category: "Exhibition",
    reportUrl: "https://mits.ac.in/assets/pdf/mba/Exhibition on Value Chain Activities.pdf"
  },
  {
    id: "act-10",
    title: 'An Awareness Workshop on "Entrepreneurship & Innovation as Career opportunities" was organized by Department of Mechanical Engineering in association with ED Cell on 15th November 2025.',
    date: "15th November 2025",
    year: "2025",
    department: "Mechanical Engineering",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/mech/Entrepreneurship & Innovation as Career opportunities.pdf"
  },
  {
    id: "act-11",
    title: 'An "Entrepreneurship Awareness Program" was organized by School of Management in association with NSIC and MITS – ED cell on 13th November 2025.',
    date: "13th November 2025",
    year: "2025",
    department: "School of Management",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/mba/Entrepreneurship Awareness Program-13-11-2025.pdf"
  },
  {
    id: "act-12",
    title: '"Celebrating Entrepreneurship Day" was organized by School of Management in association with ED Cell and ED Club on 10th November 2025.',
    date: "10th November 2025",
    year: "2025",
    department: "School of Management",
    category: "Program",
    reportUrl: "https://mits.ac.in/assets/pdf/mba/Celebrating Entrepreneurship Day.pdf"
  },
  {
    id: "act-13",
    title: 'An "Entrepreneurship Talk" was organized by Builders Club Under the aegis of ASCE MITS Student Chapter & ED Cell on 14th October 2025.',
    date: "14th October 2025",
    year: "2025",
    department: "Civil Engineering",
    category: "Expert Talk",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Talk-2025.pdf"
  },
  {
    id: "act-14",
    title: 'An Induction Program of Entrepreneurship Development Program "From Passion to Profit: Turning Your Idea into a Business" was organized by Department of Master of Computer Applications in association with ED Cell on 6th September 2025.',
    date: "6th September 2025",
    year: "2025",
    department: "MCA",
    category: "Program",
    reportUrl: "https://mits.ac.in/assets/pdf/ca/From Passion to Profit Turning Your Idea into a Business.pdf"
  },
  {
    id: "act-15",
    title: 'An "Entrepreneurial Mindset-Preparing Youth for Success" was organized by Department of Management Studies in association with ED Cell on 11th February 2025.',
    date: "11th February 2025",
    year: "2025",
    department: "Management Studies",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Report on Entrepreneurial Mindset-11th February 2025.pdf"
  },
  {
    id: "act-16",
    title: 'A "Business Idea Contest" was organized by Department of Management Studies in association with ED Cell on 12th December 2024.',
    date: "12th December 2024",
    year: "2024",
    department: "Management Studies",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Report on business idea contest-12th December 2024.pdf"
  },
  {
    id: "act-17",
    title: 'An Online Seminar on "Startup Success: Turning Ambition into Achievement" was organized by Department of Computer Science & Engineering in association with ED Cell on 05th December 2024.',
    date: "05th December 2024",
    year: "2024",
    department: "Computer Science & Engineering",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Startup Success Turning Ambition into Achievement.pdf"
  },
  {
    id: "act-18",
    title: 'A Workshop of Entrepreneurship Development Program "Pathways to Entrepreneurship: Building a Successful Career as an Entrepreneur" was organized by Department of Computer Applications in association with ED Cell on 23rd November 2024.',
    date: "23rd November 2024",
    year: "2024",
    department: "Computer Applications",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/ca/Pathways to Entrepreneurship Building a Successful Career as an Entrepreneur.pdf"
  },
  {
    id: "act-19",
    title: 'An Awareness Program on "Entrepreneurship Opportunities on Embedded Systems" was organized by Department of Electronics and Communication Engineering in association with ED Cell on 11th November 2024.',
    date: "11th November 2024",
    year: "2024",
    department: "ECE",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Entrepreneurship Opportunities on Embedded Systems-11-11-2024.pdf"
  },
  {
    id: "act-20",
    title: 'A Guest Lecture on "Basics of IPR and Patent Filing" was organized by Department of Computer Science and Engineering – AI & ML in association with IIC & ED Cell on 06th November 2024.',
    date: "06th November 2024",
    year: "2024",
    department: "CSE (AI & ML)",
    category: "Expert Talk",
    reportUrl: "https://mits.ac.in/assets/pdf/aids/Basics of IPR and Patent Filing.pdf"
  },
  {
    id: "act-21",
    title: 'A Workshop of Entrepreneurship Development program on "From IDEA to Execution" was organized by Department of CSE - Data Science in association with IEEE & ED Cell on 22nd October 2024.',
    date: "22nd October 2024",
    year: "2024",
    department: "CSE (Data Science)",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/From IDEA to Execution.pdf"
  },
  {
    id: "act-22",
    title: 'An "Ice-breaking session on Entrepreneurship" was organized by Department of MBA in association with ED Cell on 22nd October 2024.',
    date: "22nd October 2024",
    year: "2024",
    department: "MBA",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Ice-breaking session on Entrepreneurship 22.10.2024.pdf"
  },
  {
    id: "act-23",
    title: 'An Entrepreneurship Development - Pathway to Innovation & Success was organized by Department of MBA in association with ED Cell on 4th October 2024.',
    date: "4th October 2024",
    year: "2024",
    department: "MBA",
    category: "Program",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Development- Pathway to Innovation & Success-04.10.2024.pdf"
  },
  {
    id: "act-24",
    title: 'An "Economic Indicators and understanding their importance in Start-up business" was organized by Department of MBA in association with ED Cell on 1st October 2024.',
    date: "1st October 2024",
    year: "2024",
    department: "MBA",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Economic Indicators and understanding their importance in Start-up business 01.10.2024.pdf"
  },
  {
    id: "act-25",
    title: 'A "Young Entrepreneurs in India: Inspiring stories - Shaping the future of India\'s Economy" organized by Department of MBA in association with ED Cell on 30th September 2024.',
    date: "30th September 2024",
    year: "2024",
    department: "MBA",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Young Entrepreneurs in India Inspiring stories Shaping the future of Indias Economy 30.9.2024.pdf"
  },
  {
    id: "act-26",
    title: 'An Alumni Talk on "How to reinforce the Structured Career" was organised by Department of Civil Engineering in association with ASCE MITS Student Chapter and ED Cell on 20th September 2024.',
    date: "20th September 2024",
    year: "2024",
    department: "Civil Engineering",
    category: "Expert Talk",
    reportUrl: "https://mits.ac.in/assets/pdf/civil/How to reinforce the Structured Career.pdf"
  },
  {
    id: "act-27",
    title: 'An Expert talk on "A Talk on Journey towards Entrepreneurship" was organized by Department of Mechanical Engineering in association with IIC & ED Cell on 21st August 2024.',
    date: "21st August 2024",
    year: "2024",
    department: "Mechanical Engineering",
    category: "Expert Talk",
    reportUrl: "https://mits.ac.in/assets/pdf/mech/A Talk on Journey towards Entrepreneurship.pdf"
  },
  {
    id: "act-28",
    title: 'An Internal Project Expo - 2024 was organized by Department of Computer Science & Technology in Association with IIC & ED Cell on 24th April 2024.',
    date: "24th April 2024",
    year: "2024",
    department: "Computer Science & Technology",
    category: "Exhibition",
    reportUrl: "https://mits.ac.in/assets/pdf/cst/Internal Project Expo-2024.pdf"
  },
  {
    id: "act-29",
    title: 'A One Day Entrepreneurship Development Program on "Company registration and Documentations to start a new Business" was organised by Department of EEE on 01st February 2024.',
    date: "01st February 2024",
    year: "2024",
    department: "EEE",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Report_Company registration and Documentations to start a new Business.pdf"
  },
  {
    id: "act-30",
    title: 'Online Current Affairs Quiz Competition (December 2nd week) organized by ED Cell with Dept of CST on 13th December 2023.',
    date: "13th December 2023",
    year: "2023",
    department: "Computer Science & Technology",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition December 2nd week.pdf"
  },
  {
    id: "act-31",
    title: 'Online Current Affairs Quiz Competition (December 1st week) organized by ED Cell with Dept of CST on 6th December 2023.',
    date: "6th December 2023",
    year: "2023",
    department: "Computer Science & Technology",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition December 1st week.pdf"
  },
  {
    id: "act-32",
    title: 'Online Current Affairs Quiz Competition (November week 5) organized by ED Cell with Dept of Mechanical Engineering on 29th November 2023.',
    date: "29th November 2023",
    year: "2023",
    department: "Mechanical Engineering",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition November week 5.pdf"
  },
  {
    id: "act-33",
    title: 'Online Current Affairs Quiz Competition (November week 4) organized by ED Cell with Dept of Mechanical Engineering on 23rd November 2023.',
    date: "23rd November 2023",
    year: "2023",
    department: "Mechanical Engineering",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition November week 4.pdf"
  },
  {
    id: "act-34",
    title: 'One Day Workshop on "Entrepreneurship and Innovation" as Career Opportunity organized by Department of Mechanical Engineering with IIC & ED Cell on 29th November 2023.',
    date: "29th November 2023",
    year: "2023",
    department: "Mechanical Engineering",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship and Innovation.pdf"
  },
  {
    id: "act-35",
    title: 'A One Day Entrepreneurship Development Program on "Company registration and Documentations to start a new Business" organized by Dept of CSE-DS on 24th November 2023.',
    date: "24th November 2023",
    year: "2023",
    department: "CSE (Data Science)",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Company%20registration%20and%20Documentations%20to%20start%20a%20new%20Business.pdf"
  },
  {
    id: "act-36",
    title: 'A Guest Lecture on "Soft Skills for Managers and Entrepreneurs" organised by Department of Management Studies with ED Cell on 18th November 2023.',
    date: "18th November 2023",
    year: "2023",
    department: "Management Studies",
    category: "Expert Talk",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Soft Skills for Managers and Entrepreneurs.pdf"
  },
  {
    id: "act-37",
    title: 'Online Current Affairs Quiz Competition (16-11-23) organized with Department of Mechanical Engineering.',
    date: "16th November 2023",
    year: "2023",
    department: "Mechanical Engineering",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition-16-11-23.pdf"
  },
  {
    id: "act-38",
    title: 'Online Current Affairs Quiz Competition (08-11-23) organized with Department of Mechanical Engineering.',
    date: "08th November 2023",
    year: "2023",
    department: "Mechanical Engineering",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition-08-11-23.pdf"
  },
  {
    id: "act-39",
    title: 'A Guest Lecture on "The Seven Habits of Highly Effective People" organised by Department of Management Studies on 4th November 2023.',
    date: "4th November 2023",
    year: "2023",
    department: "Management Studies",
    category: "Expert Talk",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/The Seven Habits of Highly Effective People.pdf"
  },
  {
    id: "act-40",
    title: 'Online Current Affairs Quiz Competition (November week 1) organized with Dept of Mechanical Engineering on 1st November 2023.',
    date: "1st November 2023",
    year: "2023",
    department: "Mechanical Engineering",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition November week1.pdf"
  },
  {
    id: "act-41",
    title: 'An Orientation Programme on "Entrepreneurship and Career Development" organised by Department of Management Studies on 26th October 2023.',
    date: "26th October 2023",
    year: "2023",
    department: "Management Studies",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Orientation Programme on Entrepreneurship and Career Development.pdf"
  },
  {
    id: "act-42",
    title: 'Online Current Affairs Quiz Competition (October week 4) with Dept of CSE-AI on 26th October 2023.',
    date: "26th October 2023",
    year: "2023",
    department: "CSE (AI)",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition October week 4.pdf"
  },
  {
    id: "act-43",
    title: 'A Guest Lecture on "Networking for Entrepreneurial Success" organised by Dept of Management Studies on 20th October 2023.',
    date: "20th October 2023",
    year: "2023",
    department: "Management Studies",
    category: "Expert Talk",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Networking for Entrepreneurial Success.pdf"
  },
  {
    id: "act-44",
    title: 'Online Current Affairs Quiz Competition (October week 3) with Dept of CSE-AI on 18th October 2023.',
    date: "18th October 2023",
    year: "2023",
    department: "CSE (AI)",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition October week3.pdf"
  },
  {
    id: "act-45",
    title: 'Virtual Session on "Unlocking India\'s Wealth Potential: Navigating Equities, Mutual Funds, and Equity Capital Markets" with AIMA on 13th October 2023.',
    date: "13th October 2023",
    year: "2023",
    department: "Management Studies",
    category: "Expert Talk",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Unlocking Indias Wealth Potential.pdf"
  },
  {
    id: "act-46",
    title: 'Online Current Affairs Quiz Competition (October week 2) with Dept of CSE-AI on 11th October 2023.',
    date: "11th October 2023",
    year: "2023",
    department: "CSE (AI)",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition October week2.pdf"
  },
  {
    id: "act-47",
    title: 'Online Current Affairs Quiz Competition (October week 1) with Dept of CSE-AI on 4th October 2023.',
    date: "4th October 2023",
    year: "2023",
    department: "CSE (AI)",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition October week1.pdf"
  },
  {
    id: "act-48",
    title: 'Online Current Affairs Quiz Competition with Dept of Management Studies on 27th September 2023.',
    date: "27th September 2023",
    year: "2023",
    department: "Management Studies",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition-27-9-23.pdf"
  },
  {
    id: "act-49",
    title: 'Online Current Affairs Quiz Competition with Dept of Management Studies on 20th September 2023.',
    date: "20th September 2023",
    year: "2023",
    department: "Management Studies",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition.pdf"
  },
  {
    id: "act-50",
    title: 'National Webinar on "Inclination of Construction Industries Towards Geospatial Technology" with Dept of Civil Engineering on 20th September 2023.',
    date: "20th September 2023",
    year: "2023",
    department: "Civil Engineering",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Inclination of Construction Industries Towards Geospatial Technology.pdf"
  },
  {
    id: "act-51",
    title: 'Online Current Affairs Quiz Competition - September week 2 on 13th September 2023.',
    date: "13th September 2023",
    year: "2023",
    department: "Management Studies",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/week2 Report on Online Current Affairs Quiz Competition.pdf"
  },
  {
    id: "act-52",
    title: 'Online Current Affairs Quiz Competition - September week 1 on 2nd September 2023.',
    date: "2nd September 2023",
    year: "2023",
    department: "Management Studies",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/week1 Report on Online Current Affairs Quiz Competition.pdf"
  },
  {
    id: "act-53",
    title: 'A One day EDP on "Entrepreneurship and the Companies Act 2013" with IIC & ISTE on 21st August 2023.',
    date: "21st August 2023",
    year: "2023",
    department: "ED Cell",
    category: "Program",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship and the Companies Act 2013.pdf"
  },
  {
    id: "act-54",
    title: 'Online Webinar on "Entrepreneurship Opportunities in the Livestock Sector" on 19th August 2023.',
    date: "19th August 2023",
    year: "2023",
    department: "ED Cell",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Opportunities in the Livestock Sector.pdf"
  },
  {
    id: "act-55",
    title: 'Orphanage Visit organized jointly by ED Cell and Dept of Management Studies on 15th August 2023.',
    date: "15th August 2023",
    year: "2023",
    department: "Management Studies",
    category: "Program",
    reportUrl: "https://mits.ac.in/assets/pdf/mba/Orphanage Visit.pdf"
  },
  {
    id: "act-56",
    title: 'A Webinar on "Role of Women in Tech Leadership" with Dept of Management Studies on 27th July 2023.',
    date: "27th July 2023",
    year: "2023",
    department: "Management Studies",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Role of Women in Tech Leadership.pdf"
  },
  {
    id: "act-57",
    title: '"ARTS & CRAFTS EXHIBITION - 2023" organised with Dept of Management Studies & IIC on 17th July 2023.',
    date: "17th July 2023",
    year: "2023",
    department: "Management Studies",
    category: "Exhibition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/ARTS & CRAFTS EXHIBITION 2023.pdf"
  },
  {
    id: "act-58",
    title: 'Virtual Orientation Programme on "Agribusiness Incubation Scheme & The Funding Opportunities For Agri Innovators" in association with ANGRAU Poshan Incubator on 06th July 2023.',
    date: "06th July 2023",
    year: "2023",
    department: "Mechanical & MBA",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/AGRIBUSINESS INCUBATION SCHEME.pdf"
  },
  {
    id: "act-59",
    title: 'A Webinar on "Legal System for Startups" with Dept of Management Studies & IIC on 28th June 2023.',
    date: "28th June 2023",
    year: "2023",
    department: "Management Studies",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Legal System for Startups.pdf"
  },
  {
    id: "act-60",
    title: 'World MSME Day 2023 organized with R&D Cell, IIC Cell and ED Cell on 27th June 2023.',
    date: "27th June 2023",
    year: "2023",
    department: "R&D / ED Cell",
    category: "Program",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/MSME Day 2023.pdf"
  },
  {
    id: "act-61",
    title: 'Awareness Generation Program On Entrepreneurship recommended by APSSDC on 12th June 2023.',
    date: "12th June 2023",
    year: "2023",
    department: "Management Studies",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/AWARENESS GENERATION PROGRAM ON ENTREPRENEURSHIP.pdf"
  },
  {
    id: "act-62",
    title: 'Skill Development Programme on "Industry Led Training Orientation & Selection" (APSSDC) on 9th June 2023.',
    date: "9th June 2023",
    year: "2023",
    department: "Management Studies",
    category: "Program",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Industry led training orientation and selection.pdf"
  },
  {
    id: "act-63",
    title: 'Skill quiz on "Characteristics or qualities or values of Advertisement Copy" on 8th June 2023.',
    date: "8th June 2023",
    year: "2023",
    department: "Management Studies",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Values of Advertising.pdf"
  },
  {
    id: "act-64",
    title: 'Webinar on "Empowering Workplace: Managing Stress for Better Performance" with AIMA on 26th May 2023.',
    date: "26th May 2023",
    year: "2023",
    department: "Management Studies",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Empowering Workplace Managing Stress for Better Performance.pdf"
  },
  {
    id: "act-65",
    title: 'One Day Online Workshop on "Application of Automated Machine Learning in Electrical Industry" with Dept of EEE & IIC on 24th May 2023.',
    date: "24th May 2023",
    year: "2023",
    department: "EEE",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Application of Automated Machine Learning in Electrical Industry.pdf"
  },
  {
    id: "act-66",
    title: 'Webinar on "Entrepreneurship Challenges in 21st Century" with Dept of Management Studies on 10th February 2023.',
    date: "10th February 2023",
    year: "2023",
    department: "Management Studies",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/ENTREPRENEURSHIP CHALLENGES IN 21STCENTURY.pdf"
  },
  {
    id: "act-67",
    title: 'Webinar on "Entrepreneurial Uses of AI" with Dept of AI & DS on 25th January 2023.',
    date: "25th January 2023",
    year: "2023",
    department: "AI & DS",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurial Uses of AI.pdf"
  },
  {
    id: "act-68",
    title: 'Awareness program on "How to Groom Entrepreneurs" organized by ED Cell on 24th January 2023.',
    date: "24th January 2023",
    year: "2023",
    department: "ED Cell",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/How to Groom Entrepreneurs.pdf"
  },
  {
    id: "act-69",
    title: 'Guest Lecture on "Entrepreneurship Skill, Attitude and Behavior Development" with Dept of Civil Engineering & IIC on 27th December 2022.',
    date: "27th December 2022",
    year: "2022",
    department: "Civil Engineering",
    category: "Expert Talk",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/A talk on Entrepreneurship Skill, Attitude and Behavior Development.pdf"
  },
  {
    id: "act-70",
    title: 'Awareness program on "APSCHE Start-Up Programmes & MSME Schemes" with Dept of CSE on 22nd December 2022.',
    date: "22nd December 2022",
    year: "2022",
    department: "CSE",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/APSCHE Start-Up Programmes & MSME Schemes.pdf"
  },
  {
    id: "act-71",
    title: 'Awareness program on "APSCHE Start-Up Programmes & MSME Schemes" with Dept of CSE on 22nd November 2022.',
    date: "22nd November 2022",
    year: "2022",
    department: "CSE",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/APSCHE Start-Up Programmes MSME Schemes.pdf"
  },
  {
    id: "act-72",
    title: '"Opportunities and Challenges of Entrepreneur" in association with Computer Society of India (CSI) on 27th April 2022.',
    date: "27th April 2022",
    year: "2022",
    department: "CSI Chapter",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Opportunities and Challenges of Entrepreneuron 27th April 2022.pdf"
  },
  {
    id: "act-73",
    title: 'Entrepreneurship Programme organized by ED Cell for MBA graduates on 22nd April 2022.',
    date: "22nd April 2022",
    year: "2022",
    department: "MBA",
    category: "Program",
    reportUrl: "https://mba.mits.ac.in/assets/pdf/mba/Entrepreneurship%20Program-2022.pdf"
  },
  {
    id: "act-74",
    title: '"Financial Planning - Feasibility for Project Proposals" for B.Tech, MBA & MCA Students on 23rd April 2022.',
    date: "23rd April 2022",
    year: "2022",
    department: "ED Cell",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Financial Planning - Feasibility for Project Proposals on 23 April 2022.pdf"
  },
  {
    id: "act-75",
    title: 'Awareness Program on "Intellectual Property Rights & MSME Schemes for Faculty" with R&D Cell on 09th April 2022.',
    date: "09th April 2022",
    year: "2022",
    department: "R&D / ED Cell",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Awareness Program on Intellectual Property Rights & MSME Schemes for Faculty Organized by Research & Development and Entrepreneurship Development Cell on 09 April 2022.pdf"
  },
  {
    id: "act-76",
    title: 'Agripreneurship Orientation Programme for B.Tech, MBA & MCA students (Seminar Hall B) on 24th January 2022.',
    date: "24th January 2022",
    year: "2022",
    department: "ED Cell",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Agripreneurship Orientation Programme on 24 January 2022.pdf"
  },
  {
    id: "act-77",
    title: 'Entrepreneurial Motivation for MBA & MCA Students on 07th January 2022.',
    date: "07th January 2022",
    year: "2022",
    department: "MBA & MCA",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurial Motivation on 07 January 2022.pdf"
  },
  {
    id: "act-78",
    title: 'Positive Entrepreneurship for MBA & MCA Students on 06th January 2022.',
    date: "06th January 2022",
    year: "2022",
    department: "MBA & MCA",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Positive Entrepreneurship on 6 January 2022.pdf"
  },
  {
    id: "act-79",
    title: "World's Entrepreneurs Day Celebrations on 21st August 2021.",
    date: "21st August 2021",
    year: "2021",
    department: "ED Cell",
    category: "Program",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Worlds Entrepreneurs Day on 21 August 2021.pdf"
  },
  {
    id: "act-80",
    title: 'Agri-based Start-ups in Agriculture and Allied Sectors on 16th June 2021.',
    date: "16th June 2021",
    year: "2021",
    department: "ED Cell",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Schemes for Agri based start-ups in Agriculture and Allied sectors.pdf"
  },
  {
    id: "act-81",
    title: 'Government Schemes for Start-ups organized by ED Cell on 1st May 2021.',
    date: "1st May 2021",
    year: "2021",
    department: "ED Cell",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Govt. Schemes for Start-up.pdf"
  },
  {
    id: "act-82",
    title: 'Secrets in Starting a Successful Startup on 18th October 2020.',
    date: "18th October 2020",
    year: "2020",
    department: "ED Cell",
    category: "Expert Talk",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Secrets in Starting a Successful Startup.pdf"
  },
  {
    id: "act-83",
    title: 'Entrepreneurship Orientation Programme on 18th September 2020.',
    date: "18th September 2020",
    year: "2020",
    department: "ED Cell",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/ENTREPRENEURSHIP ORIENTATION PROGRAMME.pdf"
  },
  {
    id: "act-84",
    title: "World's Entrepreneurship Day on 21st August 2020.",
    date: "21st August 2020",
    year: "2020",
    department: "ED Cell",
    category: "Program",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/WORLD'S ENTREPRENEURS DAY.pdf"
  },
  {
    id: "act-85",
    title: 'Awareness Programme on Entrepreneurship on 04th February 2020.',
    date: "04th February 2020",
    year: "2020",
    department: "ED Cell",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/AWARENESS PROGRAM ON ENTREPRENEURSHIP.pdf"
  },
  {
    id: "act-86",
    title: 'Awareness Program on "Skilling Imperatives for Enabling the Clean Tech & Agri Business Community Entrepreneurship" on 24th October 2019.',
    date: "24th October 2019",
    year: "2019",
    department: "B.Tech & MBA",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Skilling Imperatives for Enabling the Clean Tech and Agri Business Community Entrepreneurship.pdf"
  },
  {
    id: "act-87",
    title: 'Workshop on "Entrepreneurship for Start-ups: Role of Technology & Innovation" for B.Tech III Year on 27th August 2019.',
    date: "27th August 2019",
    year: "2019",
    department: "ED Cell",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship for start-ups- Role of Technology & Innovation.pdf"
  },
  {
    id: "act-88",
    title: 'Agripreneurship Orientation Programme on 22nd August 2019.',
    date: "22nd August 2019",
    year: "2019",
    department: "ED Cell",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Agripreneurship Orientation Programme.pdf"
  },
  {
    id: "act-89",
    title: 'Two-day Workshop on "IoT and Drones" on 20th & 21st April 2019.',
    date: "20th & 21st April 2019",
    year: "2019",
    department: "ED Cell",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/A Two-day Workshop on IoT and Drones (20&21.04.2019).pdf"
  },
  {
    id: "act-90",
    title: 'Workshop on Web Application & Server App Development on 18th January 2019.',
    date: "18th January 2019",
    year: "2019",
    department: "ED Cell",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Workshop on Web Application & Server App Development .pdf"
  },
  {
    id: "act-91",
    title: 'Role of Innovative Technologies in Entrepreneurship on 12th December 2018.',
    date: "12th December 2018",
    year: "2018",
    department: "ED Cell",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/ROLE OF INNOVATIVE TECHNOLOGIES IN ENTREPRENEURSHIP (12.12.2018).pdf"
  },
  {
    id: "act-92",
    title: 'Demonstration of Hybrid Solar Inverter for PV Power Generation on 02nd November 2018.',
    date: "02nd November 2018",
    year: "2018",
    department: "ED Cell",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Demonstration of Hybrid Solar Inverter for PV Power Generation (02.11.2018).pdf"
  },
  {
    id: "act-93",
    title: 'Entrepreneurship in Power Electronics - Practical Applications and Future Industry Needs on 27th September 2018.',
    date: "27th September 2018",
    year: "2018",
    department: "ED Cell",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship in Power Electronics-Practical Applications and Future Industry Needs (27.09.2018).pdf"
  },
  {
    id: "act-94",
    title: 'Workshop on Open Source Technologies on 31st August 2018.',
    date: "31st August 2018",
    year: "2018",
    department: "ED Cell",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/A Workshop on Open Source Technologies (31.08.2018).pdf"
  },
  {
    id: "act-95",
    title: 'The Excitement of Combining Research, Innovation and Entrepreneurship on 28th August 2018.',
    date: "28th August 2018",
    year: "2018",
    department: "ED Cell",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/The Excitement of Combining Research, Innovation and Entrepreneurship (28.08.2018).pdf"
  },
  {
    id: "act-96",
    title: 'Guest Lecture on "Entrepreneurship Development & Opportunities" on 6th August 2018.',
    date: "6th August 2018",
    year: "2018",
    department: "ED Cell",
    category: "Expert Talk"
  },
  {
    id: "act-97",
    title: '2-Day Workshop with Hands-on Training on Android Applications organized by MITS Innovation Society & ED Cell on 26th & 27th April 2018.',
    date: "26th & 27th April 2018",
    year: "2018",
    department: "MITS Innovation Society & ED Cell",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Android Applications.pdf"
  },
  {
    id: "act-98",
    title: 'Inauguration of Pradhan Mantri Yuva Yojana Certificate Course in Entrepreneurship & Seminar by Ms. Swetha Narayan on 22nd February 2018.',
    date: "22nd February 2018",
    year: "2018",
    department: "PM Yuva Yojana / ED Cell",
    category: "Program",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Awareness Programme on Entrepreneurship.pdf"
  },
  {
    id: "act-99",
    title: '48 Hours WEBATHON organized by ED Cell on 16th & 17th February 2018.',
    date: "16th & 17th February 2018",
    year: "2018",
    department: "ED Cell",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/48 Hour WEB-A-THON-min.pdf"
  },
  {
    id: "act-100",
    title: 'Entrepreneurship Awareness Camp (EAC) for B.Tech Students from 04-01-2018 to 06-01-2018.',
    date: "04-01-2018 to 06-01-2018",
    year: "2018",
    department: "ED Cell",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/EAC.pdf"
  },
  {
    id: "act-101",
    title: 'Workshop on "Entrepreneurship & Research Proposals to Various Funding Agencies" with IIIC Cell on 15th November 2017.',
    date: "15th November 2017",
    year: "2017",
    department: "ED Cell & IIIC",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship and Research Proposals to Various Funding Agencies.pdf"
  },
  {
    id: "act-102",
    title: 'Seminar on "Entrepreneurship and Self Development" with IIIC Cell on 19th September 2017.',
    date: "19th September 2017",
    year: "2017",
    department: "ED Cell & IIIC",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship & Self Development.pdf"
  },
  {
    id: "act-103",
    title: 'Workshop on "Innovation and Entrepreneurship" by Dr. Pavan Soni on 10th August 2017.',
    date: "10th August 2017",
    year: "2017",
    department: "ED Cell",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Innovation and Entrepreneurship 2017.pdf"
  },
  {
    id: "act-104",
    title: 'Awareness programme on "Entrepreneurship Development on E-talk on I3" on 29th July 2017.',
    date: "29th July 2017",
    year: "2017",
    department: "ED Cell",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/E-TALK on I3.pdf"
  },
  {
    id: "act-105",
    title: 'Report on DIYA (Dynamic Ideas by Young Aspirants) - Idea Generation Contest on 20th April 2017.',
    date: "20th April 2017",
    year: "2017",
    department: "ED Cell",
    category: "Competition",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/A Report on DIYA (Dynamic Ideas by Young Aspirants) - An Idea Generation Contest (20.04.2017).pdf"
  },
  {
    id: "act-106",
    title: 'Two Day Seminar on "Creating Entrepreneurship and Developing Entrepreneurial Management" for B.Tech Students on 16th & 17th March 2017.',
    date: "16th & 17th March 2017",
    year: "2017",
    department: "ED Cell",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Creating Entrepreneurship Environment and Developing Entrepreneurial Management.pdf"
  },
  {
    id: "act-107",
    title: 'Two Day Entrepreneurship Orientation Programme with National Small Industries Corporation (NSIC), Hyderabad on 21st & 22nd December 2016.',
    date: "21st & 22nd December 2016",
    year: "2016",
    department: "NSIC & ED Cell",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Orientation Program.pdf"
  },
  {
    id: "act-108",
    title: 'MoU with National Entrepreneurship Network (NEN), Bengaluru (Wadhwani Foundation) on 15th September 2016.',
    date: "15th September 2016",
    year: "2016",
    department: "NEN / ED Cell",
    category: "MoU",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/wadhwani.pdf"
  },
  {
    id: "act-109",
    title: 'Mentoring Program for ED Cell Faculty Coordinators by Sri. Vikram Jit Misra, Regional Manager, NEN Hyderabad.',
    date: "September 2016",
    year: "2016",
    department: "NEN / ED Cell",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Mentoring Program on entrepreneurship development.pdf"
  },
  {
    id: "act-110",
    title: 'Orientation Programme on Entrepreneurship Development for B.Tech III Year, MBA & MCA by Sri. Vikram Jit Misra (NEN Hyderabad).',
    date: "September 2016",
    year: "2016",
    department: "NEN / ED Cell",
    category: "Orientation",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/entrepreneurship development2016.pdf"
  },
  {
    id: "act-111",
    title: 'Guest Lecture on "Innovation and Entrepreneurship" by Mr. Koushal Kushi, CEO, @Vendext, Bangalore on 28th September 2016.',
    date: "28th September 2016",
    year: "2016",
    department: "ED Cell",
    category: "Expert Talk",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Innovation & Entrepreneurship.pdf"
  },
  {
    id: "act-112",
    title: 'One Day Workshop on Technology Entrepreneurship Development on 31st March 2016.',
    date: "31st March 2016",
    year: "2016",
    department: "ED Cell",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/One day Workshop on Technology Entrepreneurship Development (31.03.2016).pdf"
  },
  {
    id: "act-113",
    title: 'One Day Workshop on "Entrepreneurship Development" for IV B.Tech Students of all branches on 12th February 2016.',
    date: "12th February 2016",
    year: "2016",
    department: "ED Cell",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/One Day Workshop on Entrepreneurship Developmentfor IV- B.Tech Students.pdf"
  },
  {
    id: "act-114",
    title: 'Two Day Workshop on "Entrepreneurship Development" with NSIC Hyderabad on 3rd - 4th November 2015.',
    date: "3rd - 4th November 2015",
    year: "2015",
    department: "NSIC & ED Cell",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Two Day Workshop on Entrepreneurship Development Nov 2015.pdf"
  },
  {
    id: "act-115",
    title: 'Workshop on "Latest Trends in Technology Entrepreneurship Development" on 6th October 2015.',
    date: "6th October 2015",
    year: "2015",
    department: "ED Cell",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Workshop on Latest Trends in Technology Entrepreneurship Development (6.10.2015).pdf"
  },
  {
    id: "act-116",
    title: 'Entrepreneurship & Promotion of SMEs Opportunities and Challenges on 27th & 28th May 2015.',
    date: "27th & 28th May 2015",
    year: "2015",
    department: "ED Cell",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship & Promotion of SMEs Opportunities and Challenges (27&28.05.2015).pdf"
  },
  {
    id: "act-117",
    title: 'Two Day Workshop on "Entrepreneurship Development" held at MITS during 16 - 17 March 2015.',
    date: "16th - 17th March 2015",
    year: "2015",
    department: "ED Cell",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/A Two day Workshop on Entrepreneurship Development (1).pdf"
  },
  {
    id: "act-118",
    title: 'Entrepreneurship in Renewable Energy Sources & REC Mechanism on 30th January 2015.',
    date: "30th January 2015",
    year: "2015",
    department: "ED Cell",
    category: "Seminar",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship in Renewable Energy Sources & REC Mechanism (30.01.2015).pdf"
  },
  {
    id: "act-119",
    title: 'One Day Workshop on Entrepreneurship Development by Resource Person Mr. V. Chaturvedi (Former Registrar NIMSME Hyderabad) on 7th November 2014.',
    date: "7th November 2014",
    year: "2014",
    department: "ED Cell",
    category: "Workshop",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Development.pdf"
  },
  {
    id: "act-120",
    title: 'Seminar on "Necessity is the mother of Invention" by Sri C. Mallesam, Inventor of Lakshmi Aasu Machine (for weavers) on 20/10/2012.',
    date: "20th October 2012",
    year: "2012",
    department: "ED Cell",
    category: "Seminar"
  },
  {
    id: "act-121",
    title: 'Seminar on "Ethics in Entrepreneurship" by Mr. C. Ashok Kumar, Asst. Director, District Industries Centre, Chittoor on 23/11/2011.',
    date: "23rd November 2011",
    year: "2011",
    department: "ED Cell",
    category: "Seminar"
  },
  {
    id: "act-122",
    title: 'Workshop on "Entrepreneurship Opportunities" by Mr. Prabhakaran, ERS Consultants, Bangalore on 18/07/2010.',
    date: "18th July 2010",
    year: "2010",
    department: "ED Cell",
    category: "Workshop"
  },
  {
    id: "act-123",
    title: 'Workshop on "Financial Assistance for the Entrepreneurs" by Sri Seetharama Rao, Branch Manager, SBH Madanapalle on 28/12/2010.',
    date: "28th December 2010",
    year: "2010",
    department: "ED Cell",
    category: "Workshop"
  }
];

export const edcRelatedPortals = [
  { label: "MITS Next New Venture Studio", to: "/venture-studio" },
  { label: "Startup & Incubation Cell (NISP)", to: "/cells/startup" },
  { label: "Design Thinking Studio (DTS)", to: "/cells/dts" },
  { label: "Industry-Institute Interaction Cell (IIIC)", to: "/cells/iiic" },
  { label: "Intellectual Property Facilitation Centre (IPFC)", to: "/cells/ipfc" },
  { label: "Student Activity Centre (SAC)", to: "/cells/sac" }
];

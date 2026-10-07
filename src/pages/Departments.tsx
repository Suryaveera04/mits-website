import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
const BASE = import.meta.env.BASE_URL;
import { ArrowRight, Search, Filter, Cpu, Building2, Zap, CircuitBoard, Microscope, Database, Shield, Code, Briefcase, Brain, GraduationCap, Beaker, TrendingUp, Users, BookOpen, Award, Target, Activity, Factory, Construction, Globe, Sparkles, FlaskConical, LineChart, GraduationCap as Cap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

// MITS Theme Colors
const THEME = {
  primary: "#b30000",    // Deep red
  secondary: "#0f2a44",   // Dark blue  
  accent: "#caa74d",     // Gold
  lightGray: "#f8f9fa"
};
const deptImages: Record<string, string> = {
  ce:       `${BASE}departments/civil.jpg`,
  eee:      `${BASE}departments/eee.jpg`,
  me:       `${BASE}departments/mech.jpg`,
  ece:      `${BASE}departments/ece.jpg`,
  bioinfo:  `${BASE}departments/bioinformatics.jpg`,
  cse:      `${BASE}departments/cse.jpg`,
  cseds:    `${BASE}departments/csd.jpg`,
  csecs:    `${BASE}departments/csc.jpg`,
  bca:      `${BASE}departments/bca.jpg`,
  mca:      `${BASE}departments/mca.jpg`,
  bba:      `${BASE}departments/bba.jpg`,
  mba:      `${BASE}departments/mba.jpg`,
  aiml:     `${BASE}departments/ai&ml.jpg`,
  ai:       `${BASE}departments/ai.jpg`,
  cser:     `${BASE}departments/ai.jpg`,
  bsh:      `${BASE}Hero-Section/image%206.jpg`,
};

// Schools data structure - Corrected as per MITS college
const schools = [
  {
    name: "School of Engineering",
    description: "Cutting-edge programs designed to prepare the engineers and technologists of tomorrow.",
    accentColor: "from-red-600 to-red-800",
    borderColor: "border-l-red-500",
    departments: [
      {
        key: "ce",
        name: "Civil Engineering",
        shortName: "CE",
        established: "2008",
        description: "Specialization in structural design and construction management",
        highlights: ["Advanced BIM labs", "Infrastructure and highway projects", "Sustainability focus", "80% placement rate with ₹9 LPA avg"],
        facilities: ["Structural testing laboratory", "Materials testing center", "BIM and CAD laboratory", "Geotechnical engineering lab"],
        courses: ["Structural Analysis & Design", "Soil Mechanics", "Construction Management", "Transportation Engineering"],
        faculty: 9,
        students: 270,
        specialization: ["Structural Engineering", "Geotechnical", "Water Resources", "Sustainability"],
        areas: ["Structural Design", "BIM", "Infrastructure"],
        labHighlights: ["Structural Lab", "BIM Center", "Geotech Lab"],
        placementStrength: "80% | ₹9 LPA Avg",
        mission: "To prepare civil engineers for designing and constructing sustainable infrastructure.",
        externalLink: "http://www.mits.ac.in/department/6",
      },
      {
        key: "eee",
        name: "Electrical and Electronics Engineering",
        shortName: "EEE",
        established: "2007",
        description: "Focus on power systems, renewable energy, and power electronics",
        highlights: ["Advanced power system analysis labs", "Research in smart grids and renewable energy", "Industry partnerships", "85% placement rate with ₹10 LPA avg"],
        facilities: ["High voltage laboratory", "Power electronics and drives lab", "Electrical machines laboratory", "Renewable energy research lab"],
        courses: ["Circuit Theory & Analysis", "Electrical Machines", "Power Systems", "Renewable Energy Sources"],
        faculty: 10,
        students: 270,
        specialization: ["Power Systems", "Renewable Energy", "Smart Grids", "Power Electronics"],
        areas: ["Power Systems", "Renewable Energy", "Smart Grids"],
        labHighlights: ["Power Systems Lab", "Renewable Energy Lab", "HV Lab"],
        placementStrength: "85% | ₹10 LPA Avg",
        mission: "To produce electrical engineers capable of designing and implementing electrical systems for sustainable energy.",
        externalLink: "http://www.mits.ac.in/department/11",
      },
      {
        key: "me",
        name: "Mechanical Engineering",
        shortName: "ME",
        established: "2006",
        description: "Comprehensive programs in mechanical design and manufacturing",
        highlights: ["Advanced CAD/CAM and simulation facilities", "Automotive and aerospace partnerships", "Research in thermal engineering", "88% placement rate with ₹11 LPA avg"],
        facilities: ["CAD/CAM laboratory", "Manufacturing and workshop", "Thermal & fluid mechanics lab", "Dynamics and vibration lab"],
        courses: ["Engineering Mechanics", "Thermodynamics", "Machine Design", "Manufacturing Technology"],
        faculty: 11,
        students: 270,
        specialization: ["Automotive Engineering", "Manufacturing", "Thermal Systems", "Aerospace"],
        areas: ["CAD/CAM", "Automotive", "Thermal Engineering"],
        labHighlights: ["CAD/CAM Lab", "Manufacturing Workshop", "Thermal Lab"],
        placementStrength: "88% | ₹11 LPA Avg",
        mission: "To develop mechanical engineers with strong fundamentals and expertise in design, manufacturing, and thermal systems.",
        externalLink: "http://www.mits.ac.in/department/8",
      },
      {
        key: "ece",
        name: "Electronics & Communication Engg",
        shortName: "ECE",
        established: "2005",
        description: "Specialization in 5G networks, IoT, and embedded systems",
        highlights: ["Advanced telecommunications labs", "Industry collaborations with telecom companies", "Research in RF and microwave engineering", "90% placement rate with ₹12 LPA avg"],
        facilities: ["RF & Microwave laboratory", "Digital signal processing lab", "Embedded systems development center", "Telecommunications equipment lab"],
        courses: ["Analog & Digital Electronics", "Communication Systems", "RF & Microwave Engineering", "VLSI Design"],
        faculty: 12,
        students: 270,
        specialization: ["5G Networks", "IoT", "Embedded Systems", "RF Engineering"],
        areas: ["5G & IoT", "Embedded Systems", "VLSI Design"],
        labHighlights: ["RF Lab", "IoT Center", "VLSI Design Lab"],
        placementStrength: "90% | ₹12 LPA Avg",
        mission: "To nurture skilled engineers in electronics and communication with expertise in modern communication systems.",
        externalLink: "https://mits.ac.in/electronics-communication-engineering",
      },
      {
        key: "bioinfo",
        name: "Bioinformatics",
        shortName: "Bioinformatics",
        established: "2010",
        description: "Interdisciplinary curriculum combining biology and computer science",
        highlights: ["Advanced genomics and proteomics research labs", "Collaborations with biotech companies", "Research in computational drug discovery", "Strong placement in biotech sectors"],
        facilities: ["Genomics and sequencing laboratory", "Computational biology research center", "Bioinformatics software and tools lab", "Proteomics analysis facility"],
        courses: ["Molecular Biology & Genetics", "Computational Biology", "Genomics & Proteomics", "Drug Discovery & Design"],
        faculty: 8,
        students: 120,
        specialization: ["Genomics", "Computational Drug Discovery", "Proteomics", "Systems Biology"],
        areas: ["Genomics", "Drug Discovery", "Computational Biology"],
        labHighlights: ["Genomics Lab", "Drug Discovery Center", "Proteomics Lab"],
        placementStrength: "85% | ₹10 LPA Avg",
        mission: "To train students at the intersection of biology and computing for breakthroughs in genomics and drug discovery."
      }
    ]
  },
  {
    name: "School of Computing",
    description: "Innovative computing programs preparing students for the digital future.",
    accentColor: "from-blue-600 to-blue-800",
    borderColor: "border-l-blue-500",
    departments: [
      {
        key: "cse",
        name: "Computer Science & Engineering",
        shortName: "CSE",
        established: "2005",
        description: "Focus on AI, Machine Learning, Cloud Computing, and Cybersecurity",
        highlights: ["Advanced curriculum covering AI, ML, Cloud Computing", "Industry partnerships with tech giants", "State-of-the-art computing labs", "98% placement rate with ₹18 LPA avg"],
        facilities: ["High-performance computing labs", "AI/ML innovation hub", "Cybersecurity research center", "Cloud computing infrastructure"],
        courses: ["Data Structures & Algorithms", "Artificial Intelligence and Machine Learning", "Cloud Computing & DevOps", "Cybersecurity"],
        faculty: 22,
        students: 540,
        specialization: ["AI and ML", "Cloud Computing", "Cybersecurity", "Big Data Analytics"],
        areas: ["AI and ML", "Cloud Computing", "Cyber Security"],
        labHighlights: ["AI Research Lab", "Cloud Center", "Cyber Security Ops"],
        placementStrength: "98% | ₹18 LPA Avg",
        mission: "To prepare students as world-class computer science professionals with expertise in emerging technologies.",
        externalLink: "https://www.mits.ac.in/department/9",
      },
      {
        key: "csecs",
        name: "Computer Science and Engineering\n(Cyber Security)",
        shortName: "CSE-CS",
        established: "2020",
        description: "Hands-on training in ethical hacking and penetration testing",
        highlights: ["Dedicated cybersecurity operations center", "Industry certifications integrated", "Research in network security", "High demand placements"],
        facilities: ["SOC center", "Ethical hacking lab", "Network security research facility", "Cryptography and forensics lab"],
        courses: ["Network Security", "Ethical Hacking & Penetration Testing", "Cryptography", "Digital Forensics"],
        faculty: 10,
        students: 240,
        specialization: ["Ethical Hacking", "Network Security", "Digital Forensics", "Cloud Security"],
        areas: ["Ethical Hacking", "Network Security", "Forensics"],
        labHighlights: ["SOC Center", "Ethical Hacking Lab", "Forensics Lab"],
        placementStrength: "92% | ₹15 LPA Avg",
        mission: "To produce cybersecurity professionals capable of protecting digital infrastructure.",
        externalLink: "http://www.mits.ac.in/department/27",
      },
      {
        key: "bca",
        name: "BCA",
        shortName: "BCA",
        established: "2020",
        description: "Foundational and modern curriculum in programming and software development",
        highlights: ["Hands-on programming labs", "Web and cloud technologies", "Software development projects", "Strong placement opportunities"],
        facilities: ["Programming lab", "Web development lab", "Database systems lab"],
        courses: ["BCA"],
        faculty: 6,
        students: 120,
        specialization: ["Web Development", "Cloud Computing", "Database Systems", "Software Engineering"],
        areas: ["Programming", "Web Dev", "Databases"],
        labHighlights: ["Software Lab", "Cloud Lab"],
        placementStrength: "Industry Ready",
        mission: "To produce competent computer application specialists equipped with industry-demanded technical skills.",
        externalLink: "https://mits.ac.in",
      },
      {
        key: "mca",
        name: "Master of Computer Applications",
        shortName: "MCA",
        established: "2006",
        description: "Advanced postgraduate curriculum in computing",
        highlights: ["Research and industry project opportunities", "Strong alumni network in top IT companies", "Specializations in AI, cloud", "95% placement rate with ₹14 LPA avg"],
        facilities: ["Advanced computing research lab", "Enterprise software development center", "AI and cloud computing lab", "Industry collaboration center"],
        courses: ["Master of Computer Applications"],
        faculty: 10,
        students: 120,
        specialization: ["Enterprise Software", "AI & Cloud", "Data Science", "Software Architecture"],
        areas: ["Enterprise Software", "Cloud Computing", "AI"],
        labHighlights: ["Research Lab", "Dev Center", "AI Cloud Lab"],
        placementStrength: "95% | ₹14 LPA Avg",
        mission: "To produce highly skilled computing professionals with advanced knowledge in software engineering.",
        externalLink: "http://www.mits.ac.in/department/18",
      }
    ]
  },
  {
    name: "School of Management Studies",
    description: "Developing future business leaders with strong analytical and leadership skills.",
    accentColor: "from-amber-600 to-amber-800",
    borderColor: "border-l-amber-500",
    departments: [
      {
        key: "bba",
        name: "BBA",
        shortName: "BBA",
        established: "2020",
        description: "Undergraduate education in business foundations, leadership, and entrepreneurship",
        highlights: ["Case study based pedagogy", "Industry seminars and webinars", "Entrepreneurship incubation", "Strong business foundation"],
        facilities: ["Business analytics lab", "Discussion rooms", "Seminar hall"],
        courses: ["BBA"],
        faculty: 6,
        students: 120,
        specialization: ["Marketing", "Finance", "Human Resource", "General Management"],
        areas: ["Management", "Marketing", "Finance"],
        labHighlights: ["Analytics Lab", "Discussion Center"],
        placementStrength: "Industry Ready",
        mission: "To cultivate aspiring business leaders and entrepreneurs with practical managerial skills.",
        externalLink: "https://mits.ac.in",
      },
      {
        key: "mba",
        name: "MBA",
        shortName: "MBA",
        established: "2008",
        description: "AICTE approved MBA program with industry mentorship",
        highlights: ["Industry mentorship and live consulting projects", "National case competitions", "Strong corporate recruitment network", "90% placement rate with ₹12 LPA avg"],
        facilities: ["Advanced business analytics lab", "Bloomberg terminal and finance center", "Leadership development center", "Digital business innovation lab"],
        courses: ["MBA"],
        faculty: 12,
        students: 120,
        specialization: ["Finance", "Marketing", "Operations", "Business Analytics"],
        areas: ["Finance", "Marketing", "Operations"],
        labHighlights: ["Bloomberg Lab", "Analytics Center", "Leadership Lab"],
        placementStrength: "90% | ₹12 LPA Avg",
        mission: "To cultivate strategic thinkers and ethical business leaders for global environments.",
        externalLink: "http://www.mits.ac.in/department/5",
      }
    ]
  },
  {
    name: "School of AI and ML",
    description: "Leading the future of artificial intelligence and machine learning.",
    accentColor: "from-purple-600 to-purple-800",
    borderColor: "border-l-purple-500",
    departments: [
      {
        key: "aiml",
        name: "Computer Science and Engineering\n(Artificial Intelligence and Machine Learning)",
        shortName: "AI and ML",
        established: "2020",
        description: "Cutting-edge curriculum in deep learning, NLP, and computer vision",
        highlights: ["GPU-powered AI research infrastructure", "Collaborations with AI-focused companies", "Hands-on projects in generative AI", "96% placement rate with ₹20 LPA avg"],
        facilities: ["GPU cluster and AI computing lab", "Computer vision and robotics lab", "NLP and speech processing center", "Generative AI research studio"],
        courses: ["Machine Learning Fundamentals", "Deep Learning", "Natural Language Processing", "Computer Vision"],
        faculty: 12,
        students: 240,
        specialization: ["Deep Learning", "NLP", "Computer Vision", "Generative AI"],
        areas: ["Deep Learning", "NLP", "Computer Vision"],
        labHighlights: ["GPU Cluster", "Computer Vision Lab", "NLP Center"],
        placementStrength: "96% | ₹20 LPA Avg",
        mission: "To produce AI engineers and researchers capable of building intelligent systems.",
        externalLink: "https://mits.ac.in/cse-ai-ml",
      },
      {
        key: "cseds",
        name: "Computer Science and Engineering\n(Artificial Intelligence and Data Science)",
        shortName: "CSE-DS",
        established: "2019",
        description: "Specialized curriculum in data analytics and machine learning",
        highlights: ["Industry projects with data-driven companies", "Advanced data visualization labs", "Research in predictive analytics", "95% placement rate with ₹16 LPA avg"],
        facilities: ["Big data analytics laboratory", "Data visualization center", "Machine learning research lab", "Statistical computing facility"],
        courses: ["Statistics for Data Science", "Machine Learning", "Big Data Technologies", "Data Visualization"],
        faculty: 14,
        students: 360,
        specialization: ["Data Analytics", "Machine Learning", "Big Data", "Business Intelligence"],
        areas: ["Data Analytics", "Big Data", "ML"],
        labHighlights: ["Big Data Lab", "Data Viz Center", "ML Research Lab"],
        placementStrength: "95% | ₹16 LPA Avg",
        mission: "To develop data-driven problem solvers equipped with analytical skills for the modern data economy.",
        externalLink: "http://www.mits.ac.in/department/26",
      },
      {
        key: "ai",
        name: "Computer Science and Engineering\n(Artificial Intelligence)",
        shortName: "AI",
        established: "2021",
        description: "Strong theoretical foundation in AI algorithms and logic",
        highlights: ["Research-oriented curriculum", "Industry tie-ups with AI product companies", "Focus on explainable AI", "94% placement rate with ₹18 LPA avg"],
        facilities: ["AI algorithms research lab", "Knowledge representation center", "Explainable AI research facility", "Multi-agent systems lab"],
        courses: ["Foundations of AI", "Knowledge Representation", "Search & Optimization", "Probabilistic Reasoning"],
        faculty: 10,
        students: 180,
        specialization: ["Explainable AI", "Knowledge Systems", "AI Research", "Responsible AI"],
        areas: ["AI Research", "Knowledge Systems", "Explainable AI"],
        labHighlights: ["Research Lab", "XAI Center", "Agent Systems Lab"],
        placementStrength: "94% | ₹18 LPA Avg",
        mission: "To train students in the theoretical and applied foundations of artificial intelligence.",
        externalLink: "https://www.mits.ac.in/department/28",
      },
      {
        key: "cser",
        name: "Computer Science and Engineering with\nSpecialisation in Artificial Intelligence and Robotics",
        shortName: "CSE-AIR",
        established: "2022",
        description: "Specialized engineering curriculum at the confluence of AI, machine learning, and robotics",
        highlights: ["Robotics and automation lab access", "Autonomous systems projects", "Industry sensor & control interfaces", "High growth career opportunities"],
        facilities: ["Robotics laboratory", "AI algorithms simulation lab", "Microcontroller and embedded lab"],
        courses: ["Robotics & Automation", "Artificial Intelligence", "Sensors & Actuators", "Autonomous Systems"],
        faculty: 8,
        students: 180,
        specialization: ["Robotics", "Autonomous Systems", "Machine Intelligence", "Control Systems"],
        areas: ["Robotics", "AI", "Automation"],
        labHighlights: ["Robotics Lab", "AI Sim Lab"],
        placementStrength: "Industry Ready",
        mission: "To train skilled engineers in robotics and artificial intelligence capable of engineering next-generation autonomous systems.",
        externalLink: "https://mits.ac.in",
      }
    ]
  },
  {
    name: "School of Basic Sciences & Humanities",
    description: "Foundational education in languages, mathematics, sciences, and humanities for engineering learners.",
    accentColor: "from-emerald-600 to-teal-700",
    borderColor: "border-l-emerald-500",
    departments: [
      {
        key: "bsh",
        name: "Basic Sciences & Humanities",
        shortName: "BSH",
        established: "2004",
        description: "Integrated foundation in English, Mathematics, Physics, Chemistry, and Humanities",
        highlights: ["Core foundation for all B.Tech programs", "Language and communication skill development", "Strong science and math fundamentals", "Interdisciplinary academic support"],
        facilities: ["Language and communication support", "Physics and chemistry laboratory support", "Mathematics foundational training", "Humanities and professional readiness modules"],
        courses: ["Communicative English", "Engineering Mathematics", "Engineering Physics", "Engineering Chemistry"],
        faculty: 0,
        students: 0,
        specialization: ["English & Foreign Languages", "Mathematics", "Physics", "Chemistry", "Humanities"],
        areas: ["Foundational Sciences", "Language Skills", "Humanities"],
        labHighlights: ["Physics Lab", "Chemistry Lab", "Language Support"],
        placementStrength: "Foundation Department",
        mission: "To build strong foundational competencies that support all engineering and professional learning pathways.",
        externalLink: "https://mits.ac.in/basic-sciences-humanities",
      }
    ]
  }
];

const Departments = () => {
  const schoolOrder = [
    "School of AI and ML",
    "School of Computing",
    "School of Engineering",
    "School of Management Studies",
  ];

  const orderedSchools = [...schools].sort((a, b) => {
    const aIdx = schoolOrder.indexOf(a.name);
    const bIdx = schoolOrder.indexOf(b.name);
    const safeA = aIdx === -1 ? Number.MAX_SAFE_INTEGER : aIdx;
    const safeB = bIdx === -1 ? Number.MAX_SAFE_INTEGER : bIdx;
    return safeA - safeB;
  });

  const [selectedDept, setSelectedDept] = useState(orderedSchools[0].departments[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSchool, setFilterSchool] = useState("all");

  const filteredSchools = orderedSchools
    .filter(school => filterSchool === "all" || school.name === filterSchool)
    .map(school => ({
      ...school,
      departments: school.departments.filter(dept =>
        dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dept.shortName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter(school => school.departments.length > 0);

  // Department Card - Image with name, hover shows description and button with school color
  const DeptCard = ({ dept, index, schoolAccent }: { 
    dept: typeof schools[0]["departments"][0]; 
    index: number;
    schoolAccent: string;
  }) => {
    const imageUrl = deptImages[dept.key] || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80";

    return (
      <ScrollReveal delay={index * 0.05}>
        <div 
          className="group relative h-[220px] md:h-[250px] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-[#0f2a44] p-[2px]"
        >
          {/* Accent border on hover */}
          <div className={`absolute inset-0 bg-gradient-to-r ${schoolAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0`} />

          {/* Inner Card Content */}
          <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-[#0f2a44] z-10">
            {/* Background Image */}
            <img 
              src={imageUrl} 
              alt={dept.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 opacity-75 group-hover:opacity-40"
            />
            
            {/* Dark Overlay for high contrast */}
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors duration-300" />

            {/* Department Name - Centered (default state) */}
            <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 p-4">
              <h3 className="font-display text-base md:text-lg font-bold text-white text-center drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] whitespace-pre-line leading-snug">
                {dept.name}
              </h3>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-display text-base md:text-lg font-bold text-white text-center mb-2 drop-shadow-md whitespace-pre-line leading-snug w-full">
                {dept.name}
              </h3>
              <p className="text-white/90 text-xs md:text-sm text-center mb-4 line-clamp-3 mx-auto w-full">
                {dept.description}
              </p>
              <Link to={`/department/${dept.key}`} className={`bg-gradient-to-r ${schoolAccent} text-white px-4 py-2 rounded-lg text-xs md:text-sm font-semibold hover:opacity-90 transition-opacity shadow-md`}>
                Explore Department
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="pt-0">
        {/* HERO SECTION - Exact match to Library page layout and typography */}
        <section
          className="relative pt-32 md:pt-44 pb-24 overflow-hidden"
          style={{
            backgroundImage: `url("${BASE}Hero-Section/image-6.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p className="text-[#ffb300] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
              ACADEMIC DEPARTMENTS
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Departments <span className="text-[#ffd15c]">&amp; Schools</span>
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
              Explore our academic excellence across disciplines
            </p>
          </div>

          {/* Bottom Left Breadcrumb Navigation (Exact match to Library screenshot) */}
          <div className="absolute bottom-4 left-6 sm:left-8 z-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-white/50">›</li>
                <li>
                  <Link to="/academics" className="hover:text-white transition-colors">
                    Academics
                  </Link>
                </li>
                <li className="text-white/50">›</li>
                <li className="text-amber-300 font-semibold">Departments</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* ==================== SEARCH & FILTER SECTION ==================== */}
        <div className="bg-gradient-to-r from-[#0f2a44] to-[#1a3d5c] shadow-md relative z-10 -mt-1">
          <div className="container mx-auto px-4 py-2.5">
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search departments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 h-8 border-0 bg-white text-sm"
                />
              </div>
                
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-white/80" />
                <select
                  value={filterSchool}
                  onChange={(e) => setFilterSchool(e.target.value)}
                  className="h-8 px-2 rounded border-0 bg-white/10 text-white cursor-pointer text-sm"
                >
                  <option value="all" className="text-gray-900">All Schools</option>
                  {orderedSchools.map(s => (
                    <option key={s.name} value={s.name} className="text-gray-900">{s.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== SCHOOLS & DEPARTMENTS ==================== */}
        {filteredSchools.length > 0 ? filteredSchools.map((school, si) => (
          <section key={school.name} className="py-6 bg-gray-50">
            <div className="container mx-auto px-4">
              <ScrollReveal>
                <div className="mb-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${school.accentColor} flex items-center justify-center shadow-lg`}>
                      {si === 0 && <Factory className="w-6 h-6 text-white" />}
                      {si === 1 && <Database className="w-6 h-6 text-white" />}
                      {si === 2 && <Briefcase className="w-6 h-6 text-white" />}
                      {si === 3 && <Brain className="w-6 h-6 text-white" />}
                      {si === 4 && <BookOpen className="w-6 h-6 text-white" />}
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">{school.name}</h2>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base ml-0 md:ml-16">{school.description}</p>
                </div>
              </ScrollReveal>
               
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-0 md:ml-9">
                {school.departments.map((dept, di) => (
                  <DeptCard 
                    key={dept.key} 
                    dept={dept} 
                    index={di}
                    schoolAccent={school.accentColor}
                  />
                ))}
              </div>
            </div>
          </section>
        )) : (
          <div className="container mx-auto px-4 py-10 text-center">
            <p className="text-gray-500">No departments match your search criteria.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Departments;




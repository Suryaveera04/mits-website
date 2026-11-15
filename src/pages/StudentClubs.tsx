import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ExternalLink, FileText, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { officialClubsTabs, OfficialClubTab } from "@/data/studentClubsData";

const BASE = import.meta.env.BASE_URL;

// Detailed directory table from Screenshot 2 (Official 17 rows)
interface CoordinatorEntry {
  name: string;
  phone: string;
}

interface ClubDirectoryEntry {
  sno: number;
  name: string;
  tabId?: string;
  facultyAdvisor: string;
  coordinators: CoordinatorEntry[];
}

const detailedClubsDirectory: ClubDirectoryEntry[] = [
  {
    sno: 1,
    name: "Arts and Cultural Club",
    tabId: "ug-tab2",
    facultyAdvisor: "Mr. Y. Pradeep Kumar",
    coordinators: [
      { name: "B. Amrutha", phone: "6281360083" },
      { name: "R. Nikhil", phone: "9666685646" },
    ],
  },
  {
    sno: 2,
    name: "Film Makers Club",
    tabId: "ug-tab3",
    facultyAdvisor: "Mr. K. Md.Riyaz Ali",
    coordinators: [
      { name: "M.K. Sudheer", phone: "7013242253" },
      { name: "G. Ramanjeneyulu Reddy", phone: "8555946223" },
    ],
  },
  {
    sno: 3,
    name: "Web Club",
    tabId: "ug-tab6",
    facultyAdvisor: "Dr. P. Kavitha",
    coordinators: [
      { name: "R. Baba Fakhruddin", phone: "9704290783" },
      { name: "Syed Mansoor", phone: "8096126294" },
    ],
  },
  {
    sno: 4,
    name: "MSR Club",
    tabId: "ug-tab5",
    facultyAdvisor: "Mr. B.S.H. Shayeez Ahamed",
    coordinators: [{ name: "V. Venkata Tarun", phone: "6303544711" }],
  },
  {
    sno: 5,
    name: "Sports Club",
    tabId: "ug-tab4",
    facultyAdvisor: "Dr. C. Damodharan",
    coordinators: [
      { name: "M.G. Lokesh", phone: "9515771641" },
      { name: "P. Vyshnavi", phone: "9154790706" },
    ],
  },
  {
    sno: 6,
    name: "Yoga & Meditation Club",
    tabId: "ug-tab10",
    facultyAdvisor: "Mr. K. Manju Vikram",
    coordinators: [
      { name: "Muppireddy Keerthi", phone: "7569116140" },
      { name: "Sai Phani Charan S.M", phone: "6361772686" },
    ],
  },
  {
    sno: 7,
    name: "ARC Club",
    tabId: "ug-tabarc",
    facultyAdvisor: "Mr. Rajkumar. G",
    coordinators: [
      { name: "C. Usman Gani", phone: "9441578782" },
      { name: "T. Yugesh", phone: "6281185755" },
    ],
  },
  {
    sno: 8,
    name: "Tech Club",
    tabId: "ug-tab7",
    facultyAdvisor: "Mr. D. Abdul Jaleel",
    coordinators: [
      { name: "Y. Charan Teja Reddy", phone: "8341484199" },
      { name: "K. Ayesha", phone: "8978703213" },
    ],
  },
  {
    sno: 9,
    name: "Anchors Club",
    tabId: "ug-tab1",
    facultyAdvisor: "Mr. Narasimha Charlu",
    coordinators: [{ name: "Gavvala Narendra Kumar", phone: "9010735719" }],
  },
  {
    sno: 10,
    name: "Literary club",
    tabId: "ug-tab9",
    facultyAdvisor: "Mr. T. Rama Mohan",
    coordinators: [
      { name: "Yangala Likitha", phone: "9391504875" },
      { name: "J. Naveen Kumar", phone: "7013255586" },
    ],
  },
  {
    sno: 11,
    name: "Builders Club",
    tabId: "ug-tab8",
    facultyAdvisor: "Dr. K. Imran",
    coordinators: [
      { name: "Kopparthi Nandini Reddy", phone: "7793933029" },
      { name: "Sabir Shaik", phone: "7815970442" },
    ],
  },
  {
    sno: 12,
    name: "Drone Technology Club",
    tabId: "ug-tabdtc",
    facultyAdvisor: "Mr. P. Mohammed Rizwan Ali",
    coordinators: [{ name: "B.Sathvik", phone: "9030304850" }],
  },
  {
    sno: 13,
    name: "AI Learning Hub Club",
    tabId: "ug-tab1",
    facultyAdvisor: "Mr. Shaik Tipu Rahaman",
    coordinators: [
      { name: "N. Ashraf Vali", phone: "6281025228" },
      { name: "Palagiri Mahammad Aman", phone: "9989706451" },
    ],
  },
  {
    sno: 14,
    name: "Enterprenuers Club",
    tabId: "ug-tabed",
    facultyAdvisor: "Dr. Kosaraju Sireesha",
    coordinators: [
      { name: "Yasheen Khan Nyazi", phone: "7993657748" },
      { name: "Thoppireddy Sai Poojitha", phone: "-" },
    ],
  },
  {
    sno: 15,
    name: "Skill Bee club",
    tabId: "ug-tab11",
    facultyAdvisor: "Mr. K. Durga Charan",
    coordinators: [
      { name: "K. Nikhil", phone: "9390125801" },
      { name: "G. Gangaiah", phone: "-" },
    ],
  },
  {
    sno: 16,
    name: "Coding Club",
    tabId: "ug-tab15",
    facultyAdvisor: "Mrs. Komala Anamalamudi",
    coordinators: [
      { name: "Mogili Kushal vardhan", phone: "7382545438" },
      { name: "S C Sujan", phone: "6309959667" },
    ],
  },
  {
    sno: 17,
    name: "Cisco Networking Club",
    tabId: "ug-tab1",
    facultyAdvisor: "Dr. V. Jayaprakasan",
    coordinators: [{ name: "K. Lokeswar Reddy", phone: "7989239624" }],
  },
];

// 7 Document Action Buttons from Screenshot 2
const tab1DocumentButtons = [
  {
    title: "Student Club Constitution",
    url: "https://mits.ac.in/public/uploads/sac/SOP of SAC 2025-26.pdf",
    isPrimary: false,
  },
  {
    title: "Event Calender",
    url: "https://calendar.google.com/calendar/u/0/embed?src=69849e23341ca5a7ae2952df17e3fb78318e6d704f514726f577a8391f650481@group.calendar.google.com&ctz=Asia/Kolkata",
    isPrimary: false,
  },
  {
    title: "Consolidate Student Club Activities 2025-2026",
    url: "https://mits.ac.in/public/uploads/sac/AY 2025-26 Odd Semester_ Consolidated Activities List 2025-26.pdf",
    isPrimary: true, // Solid dark blue filled button in official screenshot
  },
  {
    title: "Consolidate Student Club Activities 2024-2025",
    url: "https://mits.ac.in/public/uploads/sac/STUDENT CLUB ACTIVITIES -ACADEMIC YEAR 2024-25.pdf",
    isPrimary: false,
  },
  {
    title: "Consolidate Student Club Activities 2023-2024",
    url: "https://mits.ac.in/public/uploads/sac/Consolidate Student Club Activities-2023-2024.pdf",
    isPrimary: false,
  },
  {
    title: "Consolidate Student Club Activities 2022-2023",
    url: "https://mits.ac.in/public/uploads/sac/Consolidate Student Club Activities-2022-2023.pdf",
    isPrimary: false,
  },
  {
    title: "Consolidate Student Club Activities 2021-2022",
    url: "https://mits.ac.in/public/uploads/sac/Consolidate Student Club Activities-2021-2022.pdf",
    isPrimary: false,
  },
];

export default function StudentClubs() {
  const location = useLocation();
  const [activeTabId, setActiveTabId] = useState<string>("ug-tab1");

  // Sync with URL Hash (e.g. #ug-tab1, #ug-tab2, etc.)
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && officialClubsTabs.some((tab) => tab.id === hash)) {
      setActiveTabId(hash);
    }
  }, [location.hash]);

  const handleSelectTab = (tabId: string) => {
    setActiveTabId(tabId);
    window.history.replaceState(null, "", `#${tabId}`);
    window.scrollTo({ top: 320, behavior: "smooth" });
  };

  const currentTab: OfficialClubTab =
    officialClubsTabs.find((tab) => tab.id === activeTabId) || officialClubsTabs[0];

  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800">
      <Header />

      {/* HERO SECTION - Exact match to other MITS pages (SacView, Cells, etc.) */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/25 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffd15c]" />
            <span>Campus Life &amp; Student Welfare</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            Student Clubs
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Student-driven technical societies, cultural associations, and social initiative clubs fostering innovation, leadership, and holistic development.
          </p>
        </div>

        {/* BOTTOM-LEFT CORNER BREADCRUMB (Standard across all MITS pages) */}
        <nav className="absolute bottom-4 left-6 md:left-12 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li>
              <Link to="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-medium">Student Clubs</li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTAINER - Using Space Wisely */}
      <main className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10">
        {/* Mobile Club Selector (Dropdown) */}
        <div className="lg:hidden mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <label htmlFor="club-mobile-select" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Select Club / Tab
          </label>
          <select
            id="club-mobile-select"
            value={activeTabId}
            onChange={(e) => handleSelectTab(e.target.value)}
            className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm font-semibold text-[#8B1D1D] focus:outline-hidden focus:ring-2 focus:ring-[#8B1D1D]"
          >
            {officialClubsTabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.name}
              </option>
            ))}
          </select>
        </div>

        {/* 2-COLUMN LAYOUT: Sidebar (3 cols) + Content (9 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDEBAR NAVIGATION */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24">
            <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden">
              <div className="p-4 bg-slate-50/80 border-b border-slate-200">
                <h2 className="font-serif text-base font-bold text-[#8B1D1D] tracking-wide uppercase">
                  Student Clubs
                </h2>
              </div>
              <nav className="divide-y divide-slate-100">
                {officialClubsTabs.map((tab) => {
                  const isActive = activeTabId === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleSelectTab(tab.id)}
                      className={`w-full text-left px-4 py-3.5 flex items-center justify-between text-sm transition-colors cursor-pointer group ${
                        isActive
                          ? "bg-red-50/60 font-semibold text-[#8B1D1D] border-l-4 border-[#8B1D1D]"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#8B1D1D]"
                      }`}
                    >
                      <span className="truncate pr-2">{tab.name}</span>
                      <span
                        className={`text-base transition-transform group-hover:translate-x-0.5 ${
                          isActive ? "text-[#8B1D1D] font-bold" : "text-slate-400"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* RIGHT CONTENT PANEL */}
          <div className="lg:col-span-9 bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-slate-200/90 shadow-xs">
            {/* TAB 1: ABOUT STUDENT CLUBS */}
            {activeTabId === "ug-tab1" ? (
              <div className="space-y-8">
                {/* E-Notice Board Card (Exact match to Screenshot 1) */}
                <div className="rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="bg-[#8B1D1D] text-white px-5 py-3 font-semibold text-base sm:text-lg">
                    E-Notice Board
                  </div>
                  <div className="p-5 sm:p-6 bg-white space-y-3">
                    <h3 className="font-bold text-slate-800 text-base sm:text-lg">Workshop</h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      The MITS Web Club under Student Activity Center (SAC), organized a workshop on &quot;Introduction to Development Environment&quot;.
                    </p>
                    <p className="text-slate-600 text-sm font-medium">Date: 12th September 2025</p>
                    <div className="pt-2">
                      <a
                        href="https://mits.ac.in/public/uploads/sac/Introduction to Development Environment.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8B1D1D] hover:underline"
                      >
                        Click here for Event Details
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* About Student Clubs Heading & Content */}
                <ScrollReveal>
                  <section className="space-y-4">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                      About Student Clubs
                    </h2>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      The dynamism of academic life spills out of the classrooms. It is a credit to the mental and intellectual focus of the students that many of the clubs are extensions of their academic and career aspirations. There are several annual &apos;fests&apos; and entertainment events organized by the institution every year. Students&apos; clubs provide a forum for interaction among themselves and the outside world events, however varied, it may be formal or informal, but brings out the passion in youngsters and develop their organizational skills. The clubs bring about a good balance of work, fun and leisure activities and ensure the all round development of students.
                    </p>
                  </section>
                </ScrollReveal>

                {/* Importance of Student Clubs */}
                <ScrollReveal>
                  <section className="space-y-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                      Importance of Student Clubs :
                    </h3>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      Students&apos; Clubs are the main hub of student activity. They provide an outlet and a stage for the creative juices of young minds and hearts. The clubs give you the chance to apply classroom learning in the outside world. This helps you to gain invaluable leadership as well as life skills. In addition to connecting other students who have similar interests, students&apos; clubs make students to interact with alumni and professionals in their fields of interest.
                    </p>
                  </section>
                </ScrollReveal>

                {/* Benefits of Students Clubs */}
                <ScrollReveal>
                  <section className="space-y-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                      Benefits of Students Clubs:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#8B1D1D] text-white text-[9px] font-bold shrink-0 mt-1 select-none">
                          ›
                        </span>
                        <span>
                          Students&apos; clubs enrich your experience, create a diverse community, encourage involvement, and provide opportunities for students to build valuable skills
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#8B1D1D] text-white text-[9px] font-bold shrink-0 mt-1 select-none">
                          ›
                        </span>
                        <span>
                          This helps you to build formal and informal networks while exploring career opportunities.
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#8B1D1D] text-white text-[9px] font-bold shrink-0 mt-1 select-none">
                          ›
                        </span>
                        <span>
                          Open to all students, these clubs organize programs, events, and meetings throughout the academic year. Clubs listed here are officially recognized.
                        </span>
                      </li>
                    </ul>
                  </section>
                </ScrollReveal>

                {/* 7 Document Action Buttons (Screenshot 2) */}
                <ScrollReveal>
                  <div className="pt-2 space-y-3">
                    {/* Row 1 */}
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={tab1DocumentButtons[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded border border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                      >
                        {tab1DocumentButtons[0].title}
                      </a>
                      <a
                        href={tab1DocumentButtons[1].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded border border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                      >
                        {tab1DocumentButtons[1].title}
                      </a>
                      <a
                        href={tab1DocumentButtons[2].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded bg-[#0B2545] text-white hover:bg-[#081c34] text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                      >
                        {tab1DocumentButtons[2].title}
                      </a>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={tab1DocumentButtons[3].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded border border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                      >
                        {tab1DocumentButtons[3].title}
                      </a>
                      <a
                        href={tab1DocumentButtons[4].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded border border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                      >
                        {tab1DocumentButtons[4].title}
                      </a>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={tab1DocumentButtons[5].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded border border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                      >
                        {tab1DocumentButtons[5].title}
                      </a>
                      <a
                        href={tab1DocumentButtons[6].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded border border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                      >
                        {tab1DocumentButtons[6].title}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* CLUBS DIRECTORY TABLE (Screenshot 2) */}
                <ScrollReveal>
                  <section className="pt-6">
                    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Clubs</h2>
                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-[#8B1D1D] text-white font-semibold">
                            <th className="py-3 px-4 w-[28%]">Name of the Club</th>
                            <th className="py-3 px-4 w-[26%]">Faculty Advisor</th>
                            <th className="py-3 px-4 w-[24%]">Student Coordinator</th>
                            <th className="py-3 px-4 w-[22%]">Contact Number</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                          {detailedClubsDirectory.map((club, idx) => (
                            <tr
                              key={club.sno}
                              className={`hover:bg-amber-50/30 transition-colors ${
                                idx % 2 === 1 ? "bg-slate-50/50" : ""
                              }`}
                            >
                              <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                                {club.tabId && club.tabId !== "ug-tab1" ? (
                                  <button
                                    onClick={() => handleSelectTab(club.tabId!)}
                                    className="text-left hover:text-[#8B1D1D] hover:underline cursor-pointer transition-colors"
                                  >
                                    {club.name}
                                  </button>
                                ) : (
                                  club.name
                                )}
                              </td>
                              <td className="py-3.5 px-4 text-slate-700 align-top">{club.facultyAdvisor}</td>
                              <td className="py-3.5 px-4 text-slate-700 align-top">
                                <div className="space-y-1.5">
                                  {club.coordinators.map((c, cIdx) => (
                                    <div key={cIdx}>{c.name}</div>
                                  ))}
                                </div>
                              </td>
                              <td className="py-3.5 px-4 text-slate-700 align-top font-mono text-xs">
                                <div className="space-y-1.5">
                                  {club.coordinators.map((c, cIdx) => (
                                    <div key={cIdx}>{c.phone || "-"}</div>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                </ScrollReveal>
              </div>
            ) : (
              /* INDIVIDUAL CLUBS: ug-tab2 through ug-tabed */
              <div className="space-y-6">
                {/* Heading */}
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                    {currentTab.name}
                  </h2>
                </div>

                {/* Club Logo / Banner at Top of Content (Exact match to Screenshots 3 & 4) */}
                {currentTab.logo && (
                  <div className="py-2">
                    <img
                      src={`${BASE}${currentTab.logo.replace(/^\//, "")}`}
                      alt={currentTab.name}
                      onError={(e) => {
                        // Fallback to official server URL if needed
                        const target = e.currentTarget;
                        if (!target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = "true";
                          target.src = `https://mits.ac.in/assets/${currentTab.logo.replace(/^\//, "")}`;
                        } else {
                          target.style.display = "none";
                        }
                      }}
                      className="max-h-72 w-auto object-contain rounded-lg border border-slate-200/60 p-2 shadow-xs bg-white"
                    />
                  </div>
                )}

                {/* Content Blocks: Headings, Paragraphs, Ordered Lists, Bullet Lists */}
                {currentTab.blocks && currentTab.blocks.length > 0 && (
                  <div className="space-y-4">
                    {currentTab.blocks.map((block, bIdx) => {
                      if (block.type === "heading") {
                        return (
                          <h3
                            key={bIdx}
                            className="font-serif text-lg sm:text-xl font-bold text-slate-900 pt-3"
                          >
                            {block.text}
                          </h3>
                        );
                      }
                      if (block.type === "ordered_list") {
                        return (
                          <ol
                            key={bIdx}
                            className="space-y-2.5 my-3 list-decimal pl-6 text-slate-700 text-sm sm:text-base leading-relaxed"
                          >
                            {block.items.map((item, iIdx) => (
                              <li key={iIdx} className="pl-1 text-slate-700">
                                {item}
                              </li>
                            ))}
                          </ol>
                        );
                      }
                      if (block.type === "bullet_list") {
                        return (
                          <ul key={bIdx} className="space-y-2.5 my-3">
                            {block.items.map((item, iIdx) => (
                              <li
                                key={iIdx}
                                className="flex items-start gap-2.5 text-slate-700 text-sm sm:text-base leading-relaxed"
                              >
                                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#8B1D1D] text-white text-[9px] font-bold shrink-0 mt-1 select-none">
                                  ›
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      // Paragraph
                      return (
                        <p
                          key={bIdx}
                          className="text-slate-700 text-sm sm:text-base leading-relaxed my-2"
                        >
                          {block.text}
                        </p>
                      );
                    })}
                  </div>
                )}

                {/* List of Activities (PDF Reports list with document icons on right) */}
                {currentTab.reports && currentTab.reports.length > 0 && (
                  <div className="pt-6 space-y-4">
                    <h3 className="font-serif text-xl font-bold text-slate-900">
                      List of Activities:
                    </h3>
                    <div className="rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
                      {currentTab.reports.map((report, rIdx) => (
                        <a
                          key={rIdx}
                          href={report.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-5 py-3.5 bg-white hover:bg-red-50/30 transition-colors group"
                        >
                          <span className="text-sm sm:text-base text-slate-700 group-hover:text-[#8B1D1D] font-medium pr-4">
                            {report.title}
                          </span>
                          <span className="shrink-0 p-1.5 rounded-md text-slate-400 group-hover:text-[#8B1D1D] group-hover:bg-red-100/50 transition-colors">
                            <FileText className="w-5 h-5" />
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

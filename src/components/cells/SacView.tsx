import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Award,
  Maximize2,
  FileText,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

interface SacNotice {
  id: number;
  title: string;
  body: string;
  link: string;
  linkText: string;
}

const sacNotices: SacNotice[] = [
  {
    id: 1,
    title: "Group Discussion",
    body: 'A Group Discussion on - “Strong Minds, Safe Lives: Youth at Risk” organized by MITS ANCHOR’S CLUB Under SAC (Student Activity Center) at MITS Radio Station on 18th December 2025.',
    link: "https://mits.ac.in/assets/pdf/assoc/Strong Minds, Safe Lives.pdf",
    linkText: "Click here for Event Details",
  },
  {
    id: 2,
    title: "Freshers’ Day Celebrations 2025",
    body: 'A "Freshers’ Day Celebrations 2025" was organized by Student Activity Center for the Academic Year 2025-26 on 10th November 2025.',
    link: "https://mits.ac.in/assets/pdf/assoc/Freshers’ Day Celebrations 2025.pdf",
    linkText: "Click here for Report on Event",
  },
  {
    id: 3,
    title: "Apna Time Aayega - S2",
    body: "An Arts & Cutural Club Event",
    link: "https://mits.ac.in/assets/pdf/assoc/Arts & Culture Poster-2023.pdf",
    linkText: "Click here for Event Details",
  },
  {
    id: 4,
    title: "Awareness Programme",
    body: 'TECH CLUB conducted an awareness programme on “Cloud Computing” on 24-05-2022',
    link: "https://mits.ac.in/assets/pdf/swc/TechClub.png",
    linkText: "TECH CLUB conducted an awareness programme on “Cloud Computing” on 24-05-2022",
  },
  {
    id: 5,
    title: "Investiture Ceremony",
    body: "Investiture Ceremony of Student Council was organized at MITS on 19th November 2022.",
    link: "https://mits.ac.in/assets/event/Investiture Ceremony.pdf",
    linkText: "Investiture Ceremony of Student Council was organized at MITS on 19th November 2022.",
  },
];

export default function SacView() {
  const navigate = useNavigate();
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [activeTab, setActiveTab] = useState<number>(0); // 0: SAC, 1: Student Clubs

  const prevNotice = () => {
    setCurrentNoticeIndex((prev) => (prev === 0 ? sacNotices.length - 1 : prev - 1));
  };

  const nextNotice = () => {
    setCurrentNoticeIndex((prev) => (prev === sacNotices.length - 1 ? 0 : prev + 1));
  };

  // Mouse Drag Handlers (Hand Cursor)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 45) {
      prevNotice();
    } else if (dragOffset < -45) {
      nextNotice();
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (dragOffset > 45) {
        prevNotice();
      } else if (dragOffset < -45) {
        nextNotice();
      }
      setDragOffset(0);
    }
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 45) {
      prevNotice();
    } else if (dragOffset < -45) {
      nextNotice();
    }
    setDragOffset(0);
  };

  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800">
      <Header />

      {/* HERO BANNER - Standard MITS Cell Design */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}images/sac-banner.jpg"), url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/25 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffd15c]" />
            <span>Student Support &amp; Welfare</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            Student Activity Center (SAC)
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Empowering student talent, creative expression, and leadership through active student clubs • Madanapalle Institute of Technology &amp; Science (Deemed to be University)
          </p>
        </div>

        {/* BOTTOM-LEFT CORNER BREADCRUMB */}
        <nav className="absolute bottom-4 left-6 md:left-12 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li>
              <Link to="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-white/50">›</li>
            <li>
              <Link to="/cells" className="text-white/70 hover:text-white transition-colors">
                Cells &amp; Committees
              </Link>
            </li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-medium">Student Activity Center (SAC)</li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTAINER - Full Space Wise Utilization */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 space-y-10">
        {/* BACK BUTTON */}
        <div>
          <Link
            to="/cells"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#8B1D1D] hover:text-[#691313] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Cells &amp; Committees
          </Link>
        </div>

        {/* TOP NAVIGATION TABS (Exact match to official layout - Clean rectangular tabs, no arrow icon) */}
        <div className="flex flex-wrap items-center gap-2 pt-1 pb-1 border-b border-slate-200">
          <button
            type="button"
            onClick={() => setActiveTab(0)}
            className={`px-5 py-2 text-xs sm:text-sm font-semibold transition-colors border border-[#003366] cursor-pointer ${
              activeTab === 0
                ? "bg-[#003366] text-white"
                : "bg-white text-[#003366] hover:bg-[#003366] hover:text-white"
            }`}
          >
            SAC
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab(1);
              navigate("/studentclubs");
            }}
            className={`px-5 py-2 text-xs sm:text-sm font-semibold transition-colors border border-[#003366] cursor-pointer ${
              activeTab === 1
                ? "bg-[#003366] text-white"
                : "bg-white text-[#003366] hover:bg-[#003366] hover:text-white"
            }`}
          >
            Student Clubs
          </button>
        </div>

        {/* MAIN 12-COL RESPONSIVE GRID (FULL SPACE UTILIZATION) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: ARTICLES, CONSTITUTION & CALENDAR (8 COLS) */}
          <div className="lg:col-span-8 space-y-8">
            {/* PREAMBLE CARD */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Preamble
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                  Intellectual Innovation, social engagement, and universal sustainability demand the students to groom their diverse values, communication skills and hidden talents. These diverse values would complement the academic and co-curricular streams of the institution. Hence, club activities play a pivotal in transforming students' passion and hobbies into socially skills desirable for the present global demands. With more self-efficacy, students would get an opportunity to enhance their performance skills in diverse social scenarios.
                </p>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  Student clubs will take forward all activities under Student Council.
                </p>

                {/* OFFICIAL ORDER BUTTON */}
                <div className="pt-2">
                  <a
                    href="https://mits.ac.in/assets/pdf/assoc/Office Order-SAC Committe.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-red-50 hover:bg-red-100/80 border border-[#8B1D1D]/30 text-[#8B1D1D] font-bold text-xs sm:text-sm transition-all shadow-2xs group"
                  >
                    <FileText className="w-4 h-4 text-[#8B1D1D] shrink-0" />
                    <span>Office Order - SAC Committee - 05.11.2025</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 shrink-0" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* ARTICLE-I: NAME, PURPOSE & MEMBERSHIP */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold text-[#8B1D1D] uppercase tracking-wider">
                    SAC Constitution
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Article-I: Name, Purpose &amp; Membership
                  </h2>
                </div>

                <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 font-bold">Name:</strong> The official name is Student Activity Center
                  </p>
                  <p>
                    <strong className="text-slate-900 font-bold">Purpose:</strong> Encouraging student to move over to activities for which he/she has a passion
                  </p>
                  <p>
                    <strong className="text-slate-900 font-bold">Membership:</strong>
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide text-[#8B1D1D] mb-1.5">
                      SECTION 1
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      The coordinators at the top level would invite students those who are interested to be as members of the council. The core committee will be selected among the interested candidates through the prescribed criteria. (duration of the membership may vary as per the requirement)
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide text-[#8B1D1D] mb-1.5">
                      SECTION 2
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      Membership is open to all students irrespective of their, gender, caste, creed, colour, race, religion, national origin, disability, age veteran status, marital status, public assistance status, or sexual orientation.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide text-[#8B1D1D] mb-1.5">
                      SECTION 3
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      To become a member, one must show up to club meetings at the beginning of the semester. The club, as a whole, can vote on individual's membership with a 2/3 (66%) majority.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide text-[#8B1D1D] mb-1.5">
                      SECTION 4
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      Any member may be impeached for misconduct (to be defined by the group). For example: Failure to perform his/her duty as a member, non-attendance in regular meetings etc. Impeachment will be done based on the voting of the core group with a 2/3 (66%) majority.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ARTICLE-II: COORDINATORS & MEETINGS */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold text-[#8B1D1D] uppercase tracking-wider">
                    Governance
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Article-II: Coordinators &amp; Meetings
                  </h2>
                </div>

                <div className="space-y-4 pt-1">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide text-[#8B1D1D] mb-1.5">
                      SECTION 1
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      It is mandatory for the Coordinator, (both student &amp; faculty as well) to attend meetings.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide text-[#8B1D1D] mb-1.5">
                      SECTION 2
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      Meeting shall be conducted once in a month to initiate discussion on the progression of the club activities.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide text-[#8B1D1D] mb-1.5">
                      SECTION 3
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      Any kind of amendments can be carried down with ¾ majority (Quorum) of the Coordinators attended the meeting.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ARTICLE-III: SCHEDULE AND DUTIES OF THE COORDINATORS */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold text-[#8B1D1D] uppercase tracking-wider">
                    Operations
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Article-III: Schedule and duties of the Coordinators
                  </h2>
                </div>

                <div className="space-y-4 pt-1">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide text-[#8B1D1D]">
                      SECTION 1
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      Event Calendar must be constructed and it is mandatory to follow it. The calendar for each semester will be prepared in the beginning of each semester and it consists of three major activities:
                    </p>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-slate-800 font-medium pl-2 space-y-1">
                      <li>Awareness programs</li>
                      <li>Workshops</li>
                      <li>Events</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide text-[#8B1D1D] mb-1.5">
                      SECTION 2
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      Every club Coordinator should maintain a logbook for meetings. Coordinators should attend the meetings without fail. If anyone fails to attend the two successive meetings, they should be answerable to the Student Council.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide text-[#8B1D1D] mb-1.5">
                      SECTION 3
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      Club Coordinators should maintain proper documentation of event and finance. Club Coordinators are responsible for the, maintenance of the property of the club and the funds and resources that are issued by the management.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* STUDENT ACTIVITY CALENDAR 2026-27 (EXACT LOCAL IMAGE AND GOOGLE CALENDAR LINK) */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-5 h-5 text-[#8B1D1D]" />
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      Student Activity Calender 2026-27
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://calendar.google.com/calendar/embed?src=69849e23341ca5a7ae2952df17e3fb78318e6d704f514726f577a8391f650481%40group.calendar.google.com&ctz=Asia%2FKolkata"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003366] hover:underline"
                    >
                      <span>Open Google Calendar</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-slate-300">|</span>
                    <a
                      href="https://mits.ac.in/assets/images/SAC-2026-27.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B1D1D] hover:underline"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Full View</span>
                    </a>
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-slate-50/60 flex items-center justify-center">
                  <img
                    src={`${BASE}images/SAC-2026-27.jpg`}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "https://mits.ac.in/assets/images/SAC-2026-27.jpg";
                    }}
                    alt="MITS Student Activity Calendar 2026-27"
                    className="w-full h-auto object-contain rounded-lg border border-slate-200 shadow-sm hover:scale-[1.005] transition-transform duration-300"
                  />
                </div>

                <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
                  Academic year 2026-27 scheduled activities across technical, cultural, and sports student clubs.
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: E-NOTICE BOARD + CONTACT CARD (4 COLS) */}
          <div className="lg:col-span-4 space-y-8">
            {/* E-NOTICE BOARD (Shows exactly 100% of ONE notice at a time) */}
            <div className="bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
              {/* RED HEADER BAR */}
              <div className="bg-[#8B1D1D] px-6 py-3 flex items-center justify-between">
                <h2 className="text-white !text-white text-base sm:text-lg font-bold tracking-normal m-0">
                  E-Notice Board
                </h2>
                {/* Previous / Next Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevNotice}
                    className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center transition-colors cursor-pointer"
                    title="Previous notice"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextNotice}
                    className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center transition-colors cursor-pointer"
                    title="Next notice"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 100% FULL-WIDTH NOTICE CAROUSEL (Hand Cursor) */}
              <div
                className={`relative overflow-hidden ${
                  isDragging ? "cursor-grabbing" : "cursor-grab"
                } select-none`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className={`flex ${isDragging ? "" : "transition-transform duration-300 ease-out"}`}
                  style={{
                    transform: `translateX(calc(-${currentNoticeIndex * 100}% + ${dragOffset}px))`,
                  }}
                >
                  {sacNotices.map((notice) => (
                    <div
                      key={notice.id}
                      className="w-full min-w-full flex-none p-6 sm:p-7 space-y-3"
                    >
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                        {notice.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify whitespace-pre-line">
                        {notice.body}
                      </p>
                      {notice.link && (
                        <div className="pt-2">
                          <a
                            href={notice.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B1D1D] hover:underline"
                          >
                            <span>{notice.linkText}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* DOT INDICATORS */}
              <div className="flex items-center justify-center gap-2 pb-4 pt-1">
                {sacNotices.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentNoticeIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentNoticeIndex === idx
                        ? "w-6 bg-[#8B1D1D]"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    title={`Notice ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* CONTACT CARD */}
            <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
              {/* RED HEADER BAR */}
              <div className="bg-[#8B1D1D] px-6 py-3">
                <h2 className="text-white !text-white text-base sm:text-lg font-bold tracking-normal m-0">
                  Contact
                </h2>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 !text-slate-900 leading-snug">
                    Dr. G. Reddy Hemantha
                  </h4>
                  <div className="text-xs font-semibold text-[#8B1D1D] mt-1">
                    Coordinator for Student Activity Center (SAC)
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3 space-y-3 text-sm">
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5 text-xs">
                      Address :
                    </strong>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Madanapalle Institute of Technology &amp; Science<br />
                      Deemed to be University<br />
                      Madanapalle-Kadiri Road<br />
                      Kurabalakota Mandal, Madanapalle - 517325<br />
                      Andhra Pradesh, India
                    </p>
                  </div>

                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5 text-xs">
                      Phone :
                    </strong>
                    <p className="text-xs text-slate-700">
                      +91-8571-280255; 280706
                    </p>
                  </div>

                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5 text-xs">
                      E Mail :
                    </strong>
                    <p className="text-xs text-slate-700">
                      <a
                        href="mailto:sac@mits.ac.in"
                        className="hover:underline font-semibold text-[#8B1D1D]"
                      >
                        sac@mits.ac.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

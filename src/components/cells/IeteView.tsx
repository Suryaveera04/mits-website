import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Maximize2,
  X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

// Sharp PDF Icon matching the official MITS style shown in Screenshot 4
function PdfIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <div className={`shrink-0 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 28 32" fill="none" className="w-full h-full drop-shadow-sm">
        <path
          d="M4 2h13l7 7v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
          fill="#ffffff"
          stroke="#b31317"
          strokeWidth="1.8"
        />
        <path
          d="M17 2v7h7"
          stroke="#b31317"
          strokeWidth="1.8"
          fill="#fde8e8"
        />
        {/* PDF text label */}
        <rect x="4.5" y="14" width="17" height="10" rx="2" fill="#b31317" />
        <text
          x="6"
          y="21.5"
          fill="#ffffff"
          fontSize="7"
          fontWeight="800"
          fontFamily="sans-serif"
          letterSpacing="0.4"
        >
          PDF
        </text>
      </svg>
    </div>
  );
}

// Official Documents
const officialDocuments = [
  {
    title: "IETE Committee Office Order 2025-26",
    url: "https://mits.ac.in/assets/pdf/assoc/IETE Committee Office Order 2025.pdf",
  },
  {
    title: "IETE Committee Office Order 2024-25",
    url: "https://mits.ac.in/assets/pdf/assoc/IETE Committee Office Order 2024.pdf",
  },
  {
    title: "IETE Technical Event Form",
    url: "https://mits.ac.in/assets/pdf/assoc/IETE-Technical event Form.pdf",
  },
];

// Complete 23 official events retrieved verbatim from https://mits.ac.in/iete
const events2026_27 = [
  {
    title:
      "A One Day Seminar on “Industry 5.0: Human-Centric Smart Manufacturing and the Future Role of ECE & EEE Engineers and AI on Wheels: From ADAS to Autonomous Driving” was organized by Department of EEE and ECE in Association with MITS – IETE Students Forum (ISF) 13th October 2026.",
    url: "https://mits.ac.in/assets/pdf/ece/Industry 5.0 Human-Centric Smart Manufacturing.pdf",
  },
];

const events2025_26 = [
  {
    title:
      "A Skill Development Programme on “Full Stack Development for Future Software Engineers” was organized by Department of Electronics and Communication Engineering in Association with MITS IETE Students Forum (ISF) on 06th April 2026.",
    url: "https://mits.ac.in/assets/pdf/ece/IETE technical event report 06.04.2026.pdf",
  },
  {
    title:
      "A Seminar on “From Silicon to Systems: Powering the future with Semiconductor Innovation” was organized by Department of Electronics and Communication Engineering in Association with MITS IETE Students Forum (ISF) on 24th February 2026.",
    url: "https://mits.ac.in/assets/pdf/ece/From Silicon to Systems Powering the future with Semiconductor-compressed.pdf",
  },
  {
    title:
      "A Seminar on “VLSI and Electromagnetic: A Practical Journey from Academia to Industry” was organized by Department of Electronics and Communication Engineering in Association with MITS – IETE Students Forum (ISF) on 16th February 2026.",
    url: "https://mits.ac.in/assets/pdf/ece/VLSI%20and%20Electromagnetic%20%20A%20Practical%20Journey%20from%20Academia%20to%20Industry-compressed.pdf",
  },
  {
    title:
      "A Three Days Offline Workshop on “Introduction to Electric Vehicles Technology” was conducted by EEE department and sponsored by MITS-IETE Students Forum (ISF) in association with IETE on 27th to 29th January 2026.",
    url: "https://mits.ac.in/assets/pdf/assoc/IETE report 27.1.26.pdf",
  },
  {
    title:
      "A Seminar on “The Digital Twin in Medicine: A key to Future of Healthcare” “The Game Changer Towards Autonomous Driving System” organized by Department of Electronics and Communication Engineering in Association with MITS – IETE Students Forum (ISF) on 31st December 2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Digital Twin in Medicine.pdf",
  },
  {
    title:
      "A Seminar on “Cyber Security and Cyber Forensics” was organized by Department of Electronics and Communication Engineering in Association with MITS – IETE Students Forum (ISF) 08th October 2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Cyber Security and Cyber Forensics 08.10.2025.pdf",
  },
  {
    title:
      "A One Day Hands on Training “Computer Vision and Image Processing Fundamentals Using Python and OpenCV” was organized by Department of EEE and ECE in Association with MITS – IETE Students Forum (ISF) on 04th October 2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Computer Vision and Image Processing Fundamentals Using Python and OpenCV 04.10.2025.pdf",
  },
  {
    title:
      "A One Day Seminar on “Entrepreneurial ECO System” was organized by Department of EEE and ECE in Association with MITS – IETE Students Forum (ISF) 26th September 2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurial ECO System 26.9.2025.pdf",
  },
  {
    title:
      "A Hands on Training on “OrCAD Fundamentals for Beginners” was organised by Department of Electrical and Electronics Engineering in Association with IETE – ISF - MITS on 19th September 2025.",
    url: "https://mits.ac.in/assets/pdf/eee/OrCAD%20Fundamentals%20for%20Beginners.pdf",
  },
  {
    title:
      "Celebrated India’s 79th Independence Day with IETE was organized by Department of EEE and ECE in Association with MITS – IETE Students Forum (ISF) 12th August 2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Celebrating India’s 79th Independence Day with IETE 12.8.2025.pdf",
  },
];

const events2024_25 = [
  {
    title:
      "A Three Days Offline Workshop on “Automated Water Level Detection Using ARM Cortex Microcontroller” was organised by MITS-IETE Students Forum (ISF) in association with IETE on 09th to 11th April 2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Automated Water Level Detection Using ARM cortex Micro.pdf",
  },
  {
    title:
      "A Two Days Offline Workshop on “Automatic Water and Sump Monitoring and Controlling System Using ARM Cortex Microcontroller” was organised by MITS-IETE Students Forum (ISF) in association with IETE on 28.04.2025 and 29.04.2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Automatic Water and Sump Monitoring and Controlling System using.pdf",
  },
  {
    title:
      "A One Day Workshop on “µC Fusion: Where Hardware Meets Code” was organised by MITS-IETE Students Forum (ISF) in association with IETE on 21st April 2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Fusion Where Hardware Meets Code.pdf",
  },
  {
    title:
      "A Career Guidance session on “Navigating the Path to Full-Stack Mastery: Building Your Career as a Versatile Developer was organized by Department of Computer Science & Technology in association with IETE Students Forum (ISF), MITS on 07th March 2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Navigating the Path to Full-Stack Mastery Building Your Career as a Versatile Developer.pdf",
  },
  {
    title:
      "An Online Guest Lecture on “A rudimentary overview of Microgrids and their role in the global energy landscape” was organized MITS-IETE Students Forum (ISF) in association with IETE on 25th February 2025.",
    url: "https://mits.ac.in/assets/pdf/eee/A%20rudimentary%20overview%20of%20Microgrids%20and%20their%20role%20in%20the%20global%20energy%20landscape.pdf",
  },
  {
    title:
      "An Expert Talk on “Smart Grid and its Future” was organised by MITS-IETE Students Forum (ISF) in association with IETE on 14th February 2025.",
    url: "https://mits.ac.in/assets/pdf/eee/Smart Grid and its Future.pdf",
  },
  {
    title:
      "An Expert Talk on “Innovative Virtual Simulators for Agile, Cost-Effective, and Efficient Robotics Learning” was organised by MITS-IETE Students Forum (ISF) in association with IETE on 11th February 2025.",
    url: "https://mits.ac.in/assets/pdf/eee/Innovative Virtual Simulators for Agile Cost-Effective and Efficient Robotics Learning.pdf",
  },
  {
    title:
      "An Expert Talk on “Industrial Energy System & Career guide- Core Industries” was organised by Department of Electronics and Communication Engineering in association with MITS-IETE Student Forum (ISF) on 04th February 2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Industrial Energy System & Career guide- Core Industries.pdf",
  },
  {
    title:
      "A National Energy Conservation Day Programme Event was organised by Department of Electrical & Electronics Engineering on 05th February 2024.",
    url: "https://mits.ac.in/assets/pdf/assoc/National Energy Conservation Day Programme.pdf",
  },
  {
    title:
      "An One Day Workshop on “Entrepreneurship From Idea to Reality” Sponsored by IETE Student Forum on 04th February 2025.",
    url: "https://mits.ac.in/assets/pdf/eee/Entrepreneurship%20From%20Idea%20to%20Reality.pdf",
  },
  {
    title:
      "An Inaugural Ceremony of “IETE Student Forum (ISF)” was organised by MITS-IETE Student Forum (ISF) in association with IETE on 24th January 2025.",
    url: "https://mits.ac.in/assets/pdf/eee/IETE Student Forum (ISF).pdf",
  },
  {
    title:
      "An Expert Talk on “The Rise, Reality and Future of Wearable Devices” was organised by MITS-IETE Student Forum (ISF) in association with IETE on 24th January 2025.",
    url: "https://mits.ac.in/assets/pdf/eee/The Rise Reality and Future of Wearable Devices.pdf",
  },
];

const objectives = [
  "Focus on advancing electro-technology.",
  "Conducts and sponsors technical meetings, conferences, symposia, and exhibitions all over India, publishes technical journals and provides continuing education as well as career advancement opportunities to its members.",
  "Focus on advancement of the Science and Technology of Electronics, Telecommunication, Computers, Information Technology and related areas.",
  "Promotes and conducts basic engineering and continuing technical education programmes for human resource development.",
];

export default function IeteView() {
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800">
      <Header />

      {/* HERO BANNER - Matching other cell pages */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-sm sm:text-sm mb-4 drop-shadow-sm">
            Professional Societies &amp; Chapters
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Institution of Electronics and Telecommunication Engineers (IETE)
          </h1>
        </div>

        {/* BOTTOM-LEFT CORNER BREADCRUMB */}
        <nav className="absolute bottom-4 left-6 z-10">
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
            <li className="text-[#ffd15c] font-semibold truncate max-w-[280px] sm:max-w-md">
              Institution of Electronics and Telecommunication Engineers (IETE)
            </li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTENT CONTAINER - Balanced full width eliminating empty margins */}
      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/cells")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Cells &amp; Committees</span>
          </button>
        </div>

        {/* 2-COLUMN BALANCED WIDE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* PRIMARY CONTENT AREA (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. ABOUT IETE SECTION WITH OFFICIAL IMAGE */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] mb-5">
                  About IETE Cell
                </h2>

                {/* OFFICIAL PHOTO 1: images/iete-1.jpg */}
                <div className="mb-6 relative group rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-slate-50">
                  <img
                    src={`${BASE}images/iete-1.jpg`}
                    alt="IETE Student Forum & Inauguration Ceremony at MITS"
                    className="w-full h-auto max-h-[500px] object-cover object-center transition-transform duration-300 group-hover:scale-[1.01]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://mits.ac.in/images/iete-1.JPG";
                    }}
                  />
                  <div className="p-3 bg-gradient-to-t from-black/75 to-transparent absolute bottom-0 inset-x-0 text-white text-xs flex justify-between items-center">
                    <span>MITS – IETE Students Forum (ISF) Technical Activities</span>
                    <button
                      onClick={() => setPreviewImage(`${BASE}images/iete-1.jpg`)}
                      className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/40 px-2 py-1 rounded text-white text-xs transition-colors backdrop-blur-sm"
                    >
                      <Maximize2 className="w-3 h-3" /> View full image
                    </button>
                  </div>
                </div>

                {/* ABOUT PARAGRAPH VERBATIM */}
                <div className="text-slate-700 leading-relaxed text-justify space-y-4 text-sm sm:text-base">
                  <p>
                    The Institution of Electronics and Telecommunication Engineers (IETE) is
                    India’s leading recognised professional society devoted to the advancement of Science and Technology
                    of Electronics, Telecommunication &amp; IT. Founded in 1953. The IETE is the National Apex Professional
                    body of Electronics and Telecommunication, Computer Science and IT Professionals. It serves more
                    than 1,25,000 members (including Corporate, Student and ISF members) through various 63 Centres,
                    spread all over India and abroad.
                  </p>
                  <p>
                    The Institution provides leadership in Scientific and Technical
                    areas of direct importance to the national development and economy. Government of India has
                    recognised IETE as a Scientific and Industrial Research Organization (SIRO) and also notified as an
                    educational Institution of national eminence.
                  </p>
                </div>

                {/* OBJECTIVES */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold font-display text-[#0f2a44] mb-4">
                    Objectives of IETE
                  </h3>
                  <ul className="space-y-3">
                    {objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0 mt-2" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* VISION */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold font-display text-[#0f2a44] mb-3">
                    Vision
                  </h3>
                  <div className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0 mt-2" />
                    <span>
                      Reaching the unreached and empowering the youth through technical education and skill development
                    </span>
                  </div>
                </div>

                {/* MISSION & DOCUMENTS (EXACT LAYOUT FROM SCREENSHOT 4) */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-xl md:text-2xl font-bold font-display text-[#0f2a44] mb-4">
                    Mission
                  </h3>
                  <div className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#b31317] text-white shrink-0 mt-0.5 text-xs font-bold">
                      ›
                    </span>
                    <span>
                      Advancement of Electronics, Telecommunication, Information Technology &amp; other related disciplines to contribute in Nation’s Human Resource &amp; Infrastructure Development through our Engineers
                    </span>
                  </div>

                  {/* OFFICIAL DOCUMENTS ROWS (MATCHING SCREENSHOT 4 EXACTLY) */}
                  <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200 bg-white shadow-sm mt-4">
                    {officialDocuments.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 sm:px-6 hover:bg-slate-50 transition-colors group"
                      >
                        <span className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-[#b31317] transition-colors pr-4">
                          {doc.title}
                        </span>
                        <PdfIcon className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-105 transition-transform shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* EVENTS SECTION (EXACT LAYOUT FROM SCREENSHOT 4) */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] mb-6">
                    Events
                  </h2>

                  {/* 2026-27 */}
                  <div className="mb-8">
                    <h3 className="text-lg md:text-xl font-bold font-display text-[#0f2a44] mb-3">
                      2026-27
                    </h3>
                    <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200 bg-white shadow-sm">
                      {events2026_27.map((evt, idx) => (
                        <a
                          key={idx}
                          href={evt.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 sm:px-6 hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-sm sm:text-[15px] font-medium text-slate-800 group-hover:text-[#b31317] transition-colors leading-relaxed pr-4">
                            {evt.title}
                          </span>
                          <PdfIcon className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-105 transition-transform shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* 2025-26 */}
                  <div className="mb-8">
                    <h3 className="text-lg md:text-xl font-bold font-display text-[#0f2a44] mb-3">
                      2025-26
                    </h3>
                    <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200 bg-white shadow-sm">
                      {events2025_26.map((evt, idx) => (
                        <a
                          key={idx}
                          href={evt.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 sm:px-6 hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-sm sm:text-[15px] font-medium text-slate-800 group-hover:text-[#b31317] transition-colors leading-relaxed pr-4">
                            {evt.title}
                          </span>
                          <PdfIcon className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-105 transition-transform shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* 2024-25 */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-display text-[#0f2a44] mb-3">
                      2024-25
                    </h3>
                    <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200 bg-white shadow-sm">
                      {events2024_25.map((evt, idx) => (
                        <a
                          key={idx}
                          href={evt.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 sm:px-6 hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-sm sm:text-[15px] font-medium text-slate-800 group-hover:text-[#b31317] transition-colors leading-relaxed pr-4">
                            {evt.title}
                          </span>
                          <PdfIcon className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-105 transition-transform shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 5. ISF STUDENTS BOARD MEMBERS WITH OFFICIAL IMAGE */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="text-xl md:text-2xl font-bold font-display text-[#0f2a44] mb-4">
                    IETE - ISF Students Board Members List
                  </h3>
                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-slate-50 relative group">
                    <img
                      src={`${BASE}images/isf.jpg`}
                      alt="IETE - ISF Students Board Members List"
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://mits.ac.in/images/isf.JPG";
                      }}
                    />
                    <div className="p-3 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 inset-x-0 text-white text-xs flex justify-between items-center">
                      <span>Official Board Members Roster — MITS IETE Students Forum</span>
                      <button
                        onClick={() => setPreviewImage(`${BASE}images/isf.jpg`)}
                        className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/40 px-2.5 py-1 rounded text-white text-xs transition-colors backdrop-blur-sm"
                      >
                        <Maximize2 className="w-3.5 h-3.5" /> Enlarge
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* SIDEBAR AREA (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* CONTACT CARD - ACCORDING TO LIVE MITS.AC.IN/IETE */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
                <div className="bg-[#990000] px-6 py-4 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-white !text-white" />
                  <h3 className="font-display text-lg font-bold text-white !text-white">
                    Contact
                  </h3>
                </div>

                <div className="p-6 space-y-6">
                  {/* Coordinator Details */}
                  <div className="border-b border-gray-100 pb-5">
                    <h4 className="font-display text-xl font-bold text-[#990000]">
                      Mrs. K. Revathi
                    </h4>
                    <p className="text-sm font-semibold text-[#0f2a44] mt-1">
                      Coordinator of IETE
                    </p>
                    <p className="text-sm text-slate-600">
                      Assistant Professor
                    </p>
                    <p className="text-sm text-slate-600 font-medium">
                      Department of ECE
                    </p>
                  </div>

                  {/* Address */}
                  <div className="space-y-4 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 text-[#0f2a44] shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0f2a44] block text-xs uppercase tracking-wide mb-1">
                          Address :
                        </span>
                        <p className="leading-snug text-slate-600">
                          Madanapalle Institute of Technology &amp; Science<br />
                          Deemed to be University<br />
                          Madanapalle-Kadiri Road<br />
                          Kurabalakota Mandal, Madanapalle-517325<br />
                          Andhra Pradesh, India
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3 border-t border-gray-100 pt-4">
                      <div className="p-2 rounded-lg bg-slate-100 text-[#0f2a44] shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0f2a44] block text-xs uppercase tracking-wide mb-1">
                          Phone :
                        </span>
                        <a
                          href="tel:+918571280255"
                          className="text-slate-700 hover:text-[#990000] transition-colors block"
                        >
                          +91-8571-280255
                        </a>
                        <a
                          href="tel:+918571280706"
                          className="text-slate-700 hover:text-[#990000] transition-colors block"
                        >
                          +91-8571-280706
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3 border-t border-gray-100 pt-4">
                      <div className="p-2 rounded-lg bg-slate-100 text-[#0f2a44] shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0f2a44] block text-xs uppercase tracking-wide mb-1">
                          E Mail :
                        </span>
                        <a
                          href="mailto:iete-sf@mits.ac.in"
                          className="text-[#990000] hover:underline font-semibold block break-all"
                        >
                          iete-sf@mits.ac.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* WORKING RELATED CHAPTERS & PORTALS LINKS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 space-y-4">
                <h4 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider">
                  Related Chapters &amp; Portals
                </h4>
                <div className="divide-y divide-gray-100 text-sm">
                  {[
                    { label: "The Institution of Engineers (India) [IEI]", to: "/cells/iei" },
                    { label: "Student Activity Center (SAC)", to: "/cells/sac" },
                    { label: "Internal Quality Assurance Cell (IQAC)", to: "/iqac" },
                    { label: "Entrepreneurship Development Cell (EDC)", to: "/cells/edc" },
                    { label: "Industry Institute Interaction Cell (IIIC)", to: "/cells/iiic" },
                    { label: "Women Empowerment Cell (WEC)", to: "/cells/wec" },
                    { label: "Planning & Accreditations (PAARCC)", to: "/cells/paarcc" },
                  ].map((p, idx) => (
                    <Link
                      key={idx}
                      to={p.to}
                      className="flex items-center justify-between py-3 text-slate-700 hover:text-[#b31317] transition-all group"
                    >
                      <span className="font-medium group-hover:translate-x-0.5 transition-transform">
                        {p.label}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#b31317] group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* NATIONAL IETE SUMMARY */}
            <ScrollReveal>
              <div className="bg-[#0f2a44] text-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-display font-bold text-base text-[#ffd15c] mb-2">
                  About National IETE
                </h4>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  The Institution of Electronics and Telecommunication Engineers (IETE), founded in 1953, is one of India&apos;s foremost premier technical societies recognized as SIRO by Government of India.
                </p>
                <a
                  href="https://www.iete.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#ffd15c] hover:underline font-semibold"
                >
                  <span>Visit IETE National Portal</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      {/* IMAGE PREVIEW LIGHTBOX MODAL */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

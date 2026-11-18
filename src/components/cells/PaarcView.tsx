import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Sparkles,
  Award,
  Globe,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

interface PaarcMember {
  sno: number;
  name: string;
  designation: string;
}

const members: PaarcMember[] = [
  { sno: 1, name: "Dr. C. Yuvaraj", designation: "Vice Chancellor (I/c)" },
  { sno: 2, name: "Dr. A V Pavan Kumar", designation: "Asst. Dean Accreditations & Coordinator (NIRF)" },
  { sno: 3, name: "Dr. C. Kamal Basha", designation: "Vice Principal - Admin (JNTUA Affairs)" },
  { sno: 4, name: "Dr. K. Sathesh", designation: "Coordinator (IQAC)" },
  { sno: 5, name: "Dr. R. Ravindraiah", designation: "Coordinator (AICTE)" },
  { sno: 6, name: "Dr. Manish Sharma", designation: "Coordinator (NBA)" },
  { sno: 7, name: "Mr. T. Manivannan", designation: "Accreditation Compliance & Data Validation Associate (Planning, Approvals and Accreditations)" },
  { sno: 8, name: "Mr. Ch. Srinivas", designation: "Accreditation Compliance & Data Validation Associate (Ranking & Certifications)" },
];

const documents = [
  { label: "PAARC Functions", href: "https://mits.ac.in/public/uploads/paars/PAARC functions.pdf" },
  { label: "PAARC Organization Chart", href: "https://mits.ac.in/public/uploads/paars/PAARC-ORGANIZATION CHART.pdf" },
  { label: "PAARC Flow Chart", href: "https://mits.ac.in/public/uploads/paars/1PAARC-Flow Chart-esign.pdf" },
  { label: "AISHE", href: "https://mits.ac.in/public/uploads/paars/AISHE-esign.pdf" },
];

const officialNotices = [
  {
    id: 1,
    title: "Orientation Programme",
    text: `An Orientation Programme on "Outcome-Based Curriculum – Criterion 1 of the New NBA SAR" is scheduled as per the following details:\nDate: 16th October 2026\nTime: 4:30 PM\nVenue: Scale-Up Classroom, LB 102`,
  },
  {
    id: 2,
    title: "🌍 Times Higher Education World University Rankings 2027",
    text: `Madanapalle Institute of Technology and Science (MITS) Deemed to be University\n🏆 World Rank: 1401–1600\n📊 Overall Score: 27.3–30.4`,
  },
  {
    id: 3,
    title: "🌿 UI GreenMetric World University Rankings 2026",
    text: `Madanapalle Institute of Technology and Science (MITS) Deemed to be University\n🏆 World Rank: #704\n📊 Total Score: 6,425`,
  },
  {
    id: 4,
    title: "Integrated Management System",
    text: `Integrated Management System (IMS) – ISO 14001:2015 & ISO 50001:2018 Stage – 01 Audit Dates: 15th and 16th June 2026.`,
  },
];

export default function PaarcView() {
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [activeTab, setActiveTab] = useState<number>(3); // AISHE active by default as shown in screenshot

  const prevNotice = () => {
    setCurrentNoticeIndex((prev) => (prev === 0 ? officialNotices.length - 1 : prev - 1));
  };

  const nextNotice = () => {
    setCurrentNoticeIndex((prev) => (prev === officialNotices.length - 1 ? 0 : prev + 1));
  };

  // Mouse drag handlers
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
    if (dragOffset > 50) {
      prevNotice();
    } else if (dragOffset < -50) {
      nextNotice();
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (dragOffset > 50) {
        prevNotice();
      } else if (dragOffset < -50) {
        nextNotice();
      }
      setDragOffset(0);
    }
  };

  // Touch swipe handlers
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
    if (dragOffset > 50) {
      prevNotice();
    } else if (dragOffset < -50) {
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
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffd15c]" />
            <span>Institutional Planning, Approvals &amp; Accreditations</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            PAARC Cell
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Planning, Approvals, Accreditations, Rankings &amp; Certifications Cell • Madanapalle Institute of Technology &amp; Science (Deemed to be University)
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
            <li className="text-[#ffd15c] font-medium">PAARC Cell</li>
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

        {/* TOP DOCUMENT TABS (Clean rectangular tabs without arrow icons) */}
        <div className="flex flex-wrap items-center gap-2 pt-1 pb-1 border-b border-slate-200">
          {documents.map((doc, idx) => (
            <a
              key={idx}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-colors border border-[#003366] ${
                activeTab === idx
                  ? "bg-[#003366] text-white"
                  : "bg-white text-[#003366] hover:bg-[#003366] hover:text-white"
              }`}
            >
              {doc.label}
            </a>
          ))}
        </div>

        {/* TOP SECTION: E-NOTICE BOARD + CONTACT CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* E-NOTICE BOARD (8 COLS) - Shows exactly 100% of ONE notice at a time */}
          <div className="lg:col-span-8 bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
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

            {/* FULL 100% WIDTH NOTICE CAROUSEL (Hand Cursor) */}
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
                {officialNotices.map((notice) => (
                  <div
                    key={notice.id}
                    className="w-full min-w-full flex-none p-6 sm:p-8"
                  >
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-3 leading-snug">
                      {notice.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line text-justify">
                      {notice.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* DOT INDICATORS */}
            <div className="flex items-center justify-center gap-2 pb-4 pt-1">
              {officialNotices.map((_, idx) => (
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

          {/* RIGHT SIDEBAR: CONTACT CARD (4 COLS) */}
          <div className="lg:col-span-4 bg-white border border-slate-200 shadow-sm overflow-hidden">
            {/* RED HEADER BAR */}
            <div className="bg-[#8B1D1D] px-6 py-3">
              <h2 className="text-white !text-white text-base sm:text-lg font-bold tracking-normal m-0">
                Contact
              </h2>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 !text-slate-900 leading-snug">
                  Dr. A V Pavan Kumar
                </h4>
                <div className="text-xs font-semibold text-[#8B1D1D] mt-1">
                  Asst. Dean Accreditations &amp; Chief Coordinator - PAARC Cell
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
                    E Mail :
                  </strong>
                  <p className="text-xs text-slate-700">
                    <a
                      href="mailto:paarc@mits.ac.in"
                      className="hover:underline font-semibold text-[#8B1D1D]"
                    >
                      paarc@mits.ac.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAARC CELL OVERVIEW & SCOPE */}
        <ScrollReveal>
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              PAARC Cell
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
              This cell plans, organizes, gathers, records and disseminates the day-to-day information on activities pertaining to all the Departments / Committees / Cells of the entire Institute.
            </p>
          </div>
        </ScrollReveal>

        {/* THE TWO FULL-WIDTH INFOGRAPHIC POSTERS (SIDE-BY-SIDE IN 2 COLS - EXACT MATCH TO SCREENSHOT 2) */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* LEFT POSTER: NBA ACCREDITATION JOURNEY */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between">
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#8B1D1D]" />
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    Programme-Wise NBA Accreditation Journey
                  </h3>
                </div>
                <a
                  href="https://mits.ac.in/assets/images/MITS-NBA Accreditation-Journey1.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#8B1D1D] hover:underline"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full View</span>
                </a>
              </div>

              <div className="p-2 sm:p-4 bg-slate-50/50 flex items-center justify-center">
                <img
                  src={`${BASE}images/MITS-NBA-Accreditation-Journey.jpg`}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://mits.ac.in/assets/images/MITS-NBA Accreditation-Journey1.jpg";
                  }}
                  alt="MITS Programme Wise NBA Accreditation Journey"
                  className="w-full h-auto object-contain rounded-lg shadow-xs hover:scale-[1.01] transition-transform duration-300"
                />
              </div>

              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
                All eligible UG &amp; PG programmes are accredited by NBA across multiple cycles.
              </div>
            </div>

            {/* RIGHT POSTER: RANKINGS, RATINGS & GLOBAL RECOGNITION */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between">
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#003366]" />
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    MITS at a Glance: Rankings, Ratings &amp; Global Recognition
                  </h3>
                </div>
                <a
                  href="https://mits.ac.in/assets/images/MITS at a Glance Rankings-Ratings-Global Recognition.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#003366] hover:underline"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full View</span>
                </a>
              </div>

              <div className="p-2 sm:p-4 bg-slate-50/50 flex items-center justify-center">
                <img
                  src={`${BASE}images/MITS-at-a-Glance-Rankings.png`}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://mits.ac.in/assets/images/MITS at a Glance Rankings-Ratings-Global Recognition.png";
                  }}
                  alt="MITS at a Glance: Rankings, Ratings & Global Recognition"
                  className="w-full h-auto object-contain rounded-lg shadow-xs hover:scale-[1.01] transition-transform duration-300"
                />
              </div>

              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
                National &amp; global rankings: NIRF (201–300), THE Impact, UI GreenMetric, and NAAC A+ Grade.
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* FULL-WIDTH SECTION: PAARC MEMBERS TABLE (NON-SCROLLABLE) */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  PAARC Members
                </h3>
                <p className="text-xs text-slate-500">
                  Institutional leadership and accreditation coordinators
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 overflow-hidden shadow-2xs">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#8B1D1D] text-white">
                    <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase text-center w-16 whitespace-nowrap">
                      S.No
                    </th>
                    <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase whitespace-nowrap">
                      Name
                    </th>
                    <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase">
                      Designation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {members.map((m) => (
                    <tr key={m.sno} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-medium text-slate-500 text-center whitespace-nowrap">
                        {m.sno}
                      </td>
                      <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">
                        {m.name}
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        {m.designation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <Footer />
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  ExternalLink,
  MapPin,
  Mail,
  ChevronRight,
  Users,
  Sparkles,
  Bell,
  Award,
  Globe,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Maximize2,
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

const noticeItems = [
  {
    title: "UI GreenMetric World University Rankings 2026",
    subtitle: "Madanapalle Institute of Technology and Science (MITS) Deemed to be University",
    icon: "🌿",
    badge: "World Rank #704",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    details: [
      { label: "World Rank", value: "#704" },
      { label: "Total Score", value: "6,425" },
    ],
  },
  {
    title: "Times Higher Education World University Rankings 2027",
    subtitle: "Madanapalle Institute of Technology and Science (MITS) Deemed to be University",
    icon: "🌍",
    badge: "Rank 1401–1600",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    details: [
      { label: "World Rank", value: "1401–1600" },
      { label: "Overall Score", value: "27.3–30.4" },
    ],
  },
  {
    title: "Orientation Programme on Outcome-Based Curriculum",
    subtitle: "Criterion 1 of the New NBA SAR",
    icon: "📋",
    badge: "NBA SAR",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    details: [
      { label: "Date", value: "16th October 2026" },
      { label: "Time", value: "4:30 PM" },
      { label: "Venue", value: "Scale-Up Classroom, LB 102" },
    ],
  },
  {
    title: "Integrated Management System (IMS)",
    subtitle: "ISO 14001:2015 & ISO 50001:2018 Certification",
    icon: "🏛️",
    badge: "ISO Stage-01 Audit",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    details: [
      { label: "Audit Dates", value: "15th and 16th June 2026" },
      { label: "Standards", value: "ISO 14001:2015 & ISO 50001:2018" },
    ],
  },
];

export default function PaarcView() {
  const [activeNoticeTab, setActiveNoticeTab] = useState(0);

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

        {/* TOP DOCUMENT TABS (Exact match to Screenshot 1) */}
        <div className="flex flex-wrap items-center gap-2.5">
          {documents.map((doc, idx) => (
            <a
              key={idx}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold transition-all shadow-2xs rounded-xs group ${
                idx === 0
                  ? "bg-[#0b3b60] text-white border border-[#0b3b60] hover:bg-[#07263e]"
                  : "bg-white text-[#0b3b60] border border-[#0b3b60] hover:bg-[#0b3b60] hover:text-white"
              }`}
            >
              <span>{doc.label}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        {/* TOP SECTION: E-NOTICE BOARD + CONTACT CARD (FULL-SPACE 12-COL GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* E-NOTICE BOARD (8 COLS) */}
          <div className="lg:col-span-8 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-[#8B1D1D] px-6 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-white">
                <Bell className="w-5 h-5 text-amber-300 animate-pulse" />
                <h3 className="text-lg font-bold tracking-tight">E-Notice Board</h3>
              </div>
              <span className="text-[11px] font-semibold text-white/80 uppercase tracking-widest">
                Official Updates
              </span>
            </div>

            <div className="p-6">
              {/* Notice Carousel / Tabs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {noticeItems.map((notice, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#8B1D1D]/30 transition-all shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xl">{notice.icon}</span>
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded border ${notice.badgeColor}`}>
                          {notice.badge}
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug mb-1">
                        {notice.title}
                      </h4>
                      <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                        {notice.subtitle}
                      </p>
                    </div>

                    <div className="border-t border-slate-200/60 pt-2.5 space-y-1">
                      {notice.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex justify-between items-center text-xs">
                          <span className="text-slate-500 font-medium">{detail.label}:</span>
                          <span className="text-slate-900 font-bold">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR: CONTACT CARD (4 COLS) */}
          <div className="lg:col-span-4 bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
            <div className="bg-[#8B1D1D] px-6 py-3.5">
              <h3 className="text-lg font-bold tracking-tight text-white !text-white leading-tight">
                Contact
              </h3>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 !text-slate-900">
                  Dr. A V Pavan Kumar
                </h4>
                <div className="text-xs font-bold text-[#8B1D1D] mt-0.5">
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
                    <a href="mailto:paarc@mits.ac.in" className="hover:underline font-semibold text-[#8B1D1D]">
                      paarc@mits.ac.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAARC CELL OVERVIEW & SCOPE (FULL WIDTH) */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              PAARC Cell
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
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
                    (e.currentTarget as HTMLImageElement).src = "https://mits.ac.in/assets/images/MITS-NBA Accreditation-Journey1.jpg";
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
                    (e.currentTarget as HTMLImageElement).src = "https://mits.ac.in/assets/images/MITS at a Glance Rankings-Ratings-Global Recognition.png";
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

        {/* FULL-WIDTH SECTION: PAARC MEMBERS TABLE (NON-SCROLLABLE & HIGH RESOLUTION) */}
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

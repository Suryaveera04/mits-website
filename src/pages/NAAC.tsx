import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ChevronDown,
  FileText,
  Download,
  Mail,
  Phone,
  MapPin,
  User,
  Video,
  ExternalLink,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const BASE = "https://mits.edu/";

// Data structures matching official https://mits.ac.in/naac

interface SubmenuItem {
  title: string;
  url: string;
  type?: "pdf" | "video" | "link";
}

interface DropdownItem {
  title: string;
  url?: string;
  type?: "pdf" | "video" | "link";
  isSubmenu?: boolean;
  submenuItems?: SubmenuItem[];
}

const cycleDropdownItems: DropdownItem[] = [
  {
    title: "NAAC Certificate",
    url: "https://mits.ac.in/public/uploads/naac/9b55cb6cdd40bf4ca955cdd3a5383031.pdf",
    type: "pdf",
  },
  {
    title: "Validity Extension Public Notification - NAAC",
    url: "https://mits.ac.in/public/uploads/naac/NAAC_notification_public_notice_BAF_MBGL_22nd_April_2026.pdf",
    type: "pdf",
  },
  {
    title: "Peer Team Report",
    url: "https://mits.ac.in/public/uploads/naac/Peer Team Report.pdf",
    type: "pdf",
  },
  {
    title: "SSR",
    url: "https://mits.ac.in/public/uploads/naac/MITS-Updated-SSR-16.pdf",
    type: "pdf",
  },
  {
    title: "MITS-NAAC visit Video",
    isSubmenu: true,
    submenuItems: [
      {
        title: "MITS NAAC Visit Video",
        url: "https://mits.ac.in/assets/videos/MITS-NAAC.mp4",
        type: "video",
      },
    ],
  },
];

const reassessmentDropdownItems: DropdownItem[] = [
  {
    title: "NAAC Certificate",
    url: "https://mits.ac.in/public/uploads/naac/9b55cb6cdd40bf4ca955cdd3a5383031.pdf",
    type: "pdf",
  },
  {
    title: "NAAC Institutional Grade Sheet",
    url: "https://mits.ac.in/public/uploads/naac/Institutional_Grade_Sheet.pdf",
    type: "pdf",
  },
  {
    title: "NAAC Peer Team Report",
    url: "https://mits.ac.in/public/uploads/naac/NAAC%20PEER%20TEAM%20REPORT.pdf",
    type: "pdf",
  },
  {
    title: "Peer Team Metric wise Score Report",
    url: "https://mits.ac.in/public/uploads/naac/NAAC%20Peer%20Team%20Metric%20wise%20Score%20Report.pdf",
    type: "pdf",
  },
  {
    title: "NAAC Committee",
    url: "https://mits.ac.in/public/uploads/naac/NAAC Revised Advisory Committee.pdf",
    type: "pdf",
  },
  {
    title: "NAAC Undertaking",
    url: "https://mits.ac.in/public/uploads/naac/NAAC Undertaking.pdf",
    type: "pdf",
  },
  {
    title: "NAAC Declaration",
    url: "https://mits.ac.in/public/uploads/naac/NAAC  Declaration.pdf",
    type: "pdf",
  },
  {
    title: "AISHE",
    isSubmenu: true,
    submenuItems: [
      { title: "AISHE 2024-25", url: "https://mits.ac.in/public/uploads/naac/AISHE Certificate 2024-25.pdf", type: "pdf" },
      { title: "AISHE 2023-24", url: "https://mits.ac.in/public/uploads/naac/AISHE Certificate 2023-24.pdf", type: "pdf" },
      { title: "AISHE 2022-23", url: "https://mits.ac.in/public/uploads/naac/AISHE Certificate 2022-23.pdf", type: "pdf" },
      { title: "AISHE 2021-22", url: "https://mits.ac.in/public/uploads/naac/AISHE Certificate 2021-22.pdf", type: "pdf" },
      { title: "AISHE 2020-21", url: "https://mits.ac.in/public/uploads/naac/AISHE_Certificate 2020-21.pdf", type: "pdf" },
      { title: "AISHE 2019-20", url: "https://mits.ac.in/public/uploads/naac/AISHE Certificate-2019-20.pdf", type: "pdf" },
      { title: "AISHE 2018-19", url: "https://mits.ac.in/public/uploads/naac/f5af7fa3126e73f5849448285357c15b.pdf", type: "pdf" },
      { title: "AISHE 2017-18", url: "https://mits.ac.in/public/uploads/naac/abb32c1c49e24a4aa4cc09776ea9f0e5.pdf", type: "pdf" },
      { title: "AISHE 2016-17", url: "https://mits.ac.in/public/uploads/naac/b888a17d471e9045000bf6179deb334b.pdf", type: "pdf" },
      { title: "AISHE 2015-16", url: "https://mits.ac.in/public/uploads/naac/3ea2b62d7c31398763fa3b97008d33ec.pdf", type: "pdf" },
    ],
  },
  {
    title: "IIQA",
    url: "https://mits.ac.in/public/uploads/naac/IIQA.pdf",
    type: "pdf",
  },
  {
    title: "SSR",
    url: "https://mits.ac.in/public/uploads/naac/SSR of MITS.pdf",
    type: "pdf",
  },
];

const metricsDropdownItems: DropdownItem[] = [
  { title: "Criterion 1", url: "https://mits.ac.in/criterion/1", type: "link" },
  { title: "Criterion 2", url: "https://mits.ac.in/criterion/2", type: "link" },
  { title: "Criterion 3", url: "https://mits.ac.in/criterion/3", type: "link" },
  { title: "Criterion 4", url: "https://mits.ac.in/criterion/4", type: "link" },
  { title: "Criterion 5", url: "https://mits.ac.in/criterion/5", type: "link" },
  { title: "Criterion 6", url: "https://mits.ac.in/criterion/6", type: "link" },
  { title: "Criterion 7", url: "https://mits.ac.in/criterion/7", type: "link" },
];

const extendedProfileDocs = [
  {
    title: "Number of programs offered year-wise for last five years?",
    url: "https://mits.ac.in/public/uploads/dvv/EP-DVV-1.1.pdf",
  },
  {
    title: "Number of departments offering academic programmes.",
    url: "https://mits.ac.in/public/uploads/dvv/EP-DVV-1.2.pdf",
  },
  {
    title: "Number of students year-wise during last five years",
    url: "https://mits.ac.in/public/uploads/dvv/EP-DVV-2.1.pdf",
  },
  {
    title: "Number of outgoing / final year students year-wise during last five years",
    url: "https://mits.ac.in/public/uploads/dvv/EP-DVV-2.2.pdf",
  },
  {
    title: "Number of students appeared in the examination conducted by the Institution, year-wise during the last five years",
    url: "https://mits.ac.in/public/uploads/dvv/EP-DVV-2.3.pdf",
  },
  {
    title: "Number of revaluation applications year-wise during last five years",
    url: "https://mits.ac.in/public/uploads/dvv/EP-DVV-2.4.pdf",
  },
  {
    title: "Number of courses in all programs year-wise during last five years",
    url: "https://mits.ac.in/public/uploads/dvv/EP-DVV-3.1.pdf",
  },
  {
    title: "Number of full time teachers year-wise during the last five years",
    url: "https://mits.ac.in/public/uploads/dvv/EP-DVV-3.2.pdf",
  },
  {
    title: "Number of sanctioned posts year-wise during last five years",
    url: "https://mits.ac.in/public/uploads/dvv/EP-DVV-3.3.pdf",
  },
  {
    title: "Number of eligible applications received for admissions to all the programs year-wise during last five years",
    url: "https://mits.ac.in/public/uploads/dvv/EP-DVV-4.1.pdf",
  },
  {
    title: "Number of seats earmarked for reserved category as per GOI/State Govt rule year-wise during last five years",
    url: "https://mits.ac.in/public/uploads/dvv/EP-DVV-4.2.pdf",
  },
  {
    title: "Total number of classrooms and seminar halls",
    url: "https://mits.ac.in/public/uploads/dvv/EP-DVV-4.3.pdf",
  },
  {
    title: "Total number of computers in the campus for academic purpose",
    url: "https://mits.ac.in/public/uploads/dvv/EP-DVV-4.4.pdf",
  },
  {
    title: "Total Expenditure excluding salary year-wise during last five years ( INR in Lakhs)",
    url: "https://mits.ac.in/public/uploads/dvv/EP-DVV-4.5.pdf",
  },
];

export const NAAC = () => {
  const [activeTab, setActiveTab] = useState<"home" | "extendedProfile">("home");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const closeDropdowns = () => {
    setOpenDropdown(null);
    setOpenSubmenu(null);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] font-body text-slate-800">
      <Header />
      <SEO
        title="NAAC – Madanapalle Institute of Technology & Science"
        description="National Assessment and Accreditation Council (NAAC) details, Cycles, Reassessment, DVV Clarifications Quantitative Metrics, and Extended Profile of Madanapalle Institute of Technology & Science."
        canonical="/naac"
      />

      {/* Hero — Simple Title */}
      <section
        className="relative pt-32 md:pt-40 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight">
            NAAC
          </h1>
        </div>
        <div className="absolute bottom-3 left-6 z-10 hidden sm:block">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs text-white/80">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">›</li>
              <li className="text-[#ffd15c] font-semibold">NAAC</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Horizontal Navigation Menu — Matches old portal library-tabs */}
        <div className="relative z-30 bg-white border-b border-slate-200 shadow-2xs rounded-t-xl mb-8">
          <ul
            className="flex flex-wrap items-center text-xs sm:text-sm font-semibold text-slate-700 divide-x divide-slate-200"
            onMouseLeave={closeDropdowns}
          >
            {/* 1. Home */}
            <li className="relative">
              <button
                onClick={() => {
                  setActiveTab("home");
                  closeDropdowns();
                }}
                className={`px-4 py-3.5 transition-colors cursor-pointer flex items-center gap-1 ${
                  activeTab === "home"
                    ? "text-[#b31317] border-b-2 border-[#b31317] font-bold"
                    : "hover:text-[#b31317]"
                }`}
              >
                Home
              </button>
            </li>

            {/* 2. IQAC */}
            <li className="relative">
              <Link
                to="/iqac"
                className="px-4 py-3.5 transition-colors flex items-center gap-1 hover:text-[#b31317] text-slate-700"
              >
                IQAC
              </Link>
            </li>

            {/* 3. Cycle */}
            <li
              className="relative"
              onMouseEnter={() => {
                setOpenDropdown("cycle");
                setOpenSubmenu(null);
              }}
            >
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "cycle" ? null : "cycle")
                }
                className={`px-4 py-3.5 transition-colors cursor-pointer flex items-center gap-1 ${
                  openDropdown === "cycle"
                    ? "text-[#b31317] font-bold"
                    : "hover:text-[#b31317]"
                }`}
              >
                <span>Cycle</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {/* Cycle Dropdown */}
              {openDropdown === "cycle" && (
                <div className="absolute left-0 top-full mt-0 w-72 bg-[#8a0e12] text-white shadow-xl rounded-b-md py-1.5 z-50">
                  {cycleDropdownItems.map((item, idx) => {
                    if (item.isSubmenu) {
                      const isSubOpen = openSubmenu === "cycle-video";
                      return (
                        <div
                          key={idx}
                          className="relative"
                          onMouseEnter={() => setOpenSubmenu("cycle-video")}
                        >
                          <div
                            onClick={() =>
                              setOpenSubmenu(
                                isSubOpen ? null : "cycle-video"
                              )
                            }
                            className={`flex items-center justify-between px-4 py-2.5 text-xs sm:text-[13px] font-medium transition-colors cursor-pointer ${
                              isSubOpen
                                ? "bg-[#0f2a44] text-white"
                                : "hover:bg-[#a01015]"
                            }`}
                          >
                            <span>{item.title}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </div>

                          {/* Flyout Submenu */}
                          {isSubOpen && (
                            <div
                              className="absolute left-full top-0 w-64 bg-[#8a0e12] text-white shadow-xl rounded-md py-1.5 -ml-0.5 z-50 border-l border-red-900/30"
                              onMouseLeave={() => setOpenSubmenu(null)}
                            >
                              {item.submenuItems?.map((sub, sIdx) => (
                                <a
                                  key={sIdx}
                                  href={sub.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 px-4 py-2 text-xs sm:text-[13px] hover:bg-[#a01015] transition-colors"
                                  onClick={closeDropdowns}
                                >
                                  <Video className="w-3.5 h-3.5 text-[#caa74d] shrink-0" />
                                  <span>{sub.title}</span>
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2.5 text-xs sm:text-[13px] font-medium hover:bg-[#a01015] transition-colors"
                        onClick={closeDropdowns}
                      >
                        {item.title}
                      </a>
                    );
                  })}
                </div>
              )}
            </li>

            {/* 4. REASSESSMENT 2020 - (Cycle: 1) */}
            <li
              className="relative"
              onMouseEnter={() => {
                setOpenDropdown("reassessment");
                setOpenSubmenu(null);
              }}
            >
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "reassessment" ? null : "reassessment"
                  )
                }
                className={`px-4 py-3.5 transition-colors cursor-pointer flex items-center gap-1 ${
                  openDropdown === "reassessment"
                    ? "text-[#b31317] font-bold"
                    : "hover:text-[#b31317]"
                }`}
              >
                <span>REASSESSMENT 2020 - (Cycle: 1)</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {/* Reassessment Dropdown */}
              {openDropdown === "reassessment" && (
                <div className="absolute left-0 top-full mt-0 w-80 bg-[#8a0e12] text-white shadow-xl rounded-b-md py-1.5 z-50">
                  {reassessmentDropdownItems.map((item, idx) => {
                    if (item.isSubmenu) {
                      const isSubOpen = openSubmenu === "aishe";
                      return (
                        <div
                          key={idx}
                          className="relative"
                          onMouseEnter={() => setOpenSubmenu("aishe")}
                        >
                          <div
                            onClick={() =>
                              setOpenSubmenu(isSubOpen ? null : "aishe")
                            }
                            className={`flex items-center justify-between px-4 py-2 text-xs sm:text-[13px] font-medium transition-colors cursor-pointer ${
                              isSubOpen
                                ? "bg-[#0f2a44] text-white"
                                : "hover:bg-[#a01015]"
                            }`}
                          >
                            <span>{item.title}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </div>

                          {/* Flyout Submenu for AISHE */}
                          {isSubOpen && (
                            <div
                              className="absolute left-full top-0 w-56 bg-[#8a0e12] text-white shadow-xl rounded-md py-1.5 -ml-0.5 z-50 border-l border-red-900/30 max-h-96 overflow-y-auto"
                              onMouseLeave={() => setOpenSubmenu(null)}
                            >
                              {item.submenuItems?.map((sub, sIdx) => (
                                <a
                                  key={sIdx}
                                  href={sub.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-4 py-1.5 text-xs sm:text-[13px] hover:bg-[#a01015] transition-colors"
                                  onClick={closeDropdowns}
                                >
                                  {sub.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-xs sm:text-[13px] font-medium hover:bg-[#a01015] transition-colors"
                        onClick={closeDropdowns}
                      >
                        {item.title}
                      </a>
                    );
                  })}
                </div>
              )}
            </li>

            {/* 5. DVV Clarifications Quantitative Metrics */}
            <li
              className="relative"
              onMouseEnter={() => {
                setOpenDropdown("metrics");
                setOpenSubmenu(null);
              }}
            >
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "metrics" ? null : "metrics"
                  )
                }
                className={`px-4 py-3.5 transition-colors cursor-pointer flex items-center gap-1 ${
                  openDropdown === "metrics"
                    ? "text-[#b31317] font-bold"
                    : "hover:text-[#b31317]"
                }`}
              >
                <span>DVV Clarifications Quantitative Metrics</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {/* Metrics Dropdown */}
              {openDropdown === "metrics" && (
                <div className="absolute left-0 top-full mt-0 w-56 bg-[#8a0e12] text-white shadow-xl rounded-b-md py-1.5 z-50">
                  {metricsDropdownItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-xs sm:text-[13px] font-medium hover:bg-[#a01015] transition-colors"
                      onClick={closeDropdowns}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </li>

            {/* 6. DVV Clarifications Extended Profile */}
            <li className="relative">
              <button
                onClick={() => {
                  setActiveTab("extendedProfile");
                  closeDropdowns();
                }}
                className={`px-4 py-3.5 transition-colors cursor-pointer flex items-center gap-1 ${
                  activeTab === "extendedProfile"
                    ? "text-[#b31317] border-b-2 border-[#b31317] font-bold"
                    : "hover:text-[#b31317]"
                }`}
              >
                DVV Clarifications Extended Profile
              </button>
            </li>
          </ul>
        </div>

        {/* Tab 1 Content: Home */}
        {activeTab === "home" && (
          <div className="space-y-6">
            {/* Heading */}
            <div className="border-b border-slate-200 pb-3">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#b31317] tracking-tight">
                Welcome to MITS National Assessment and Accreditation Council (NAAC) Details Page!
              </h2>
            </div>

            {/* Official Campus Photo */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <img
                src="https://mits.ac.in/public/uploads/naac/3f118aff-9c81-4949-bf33-b96aa5a8fc41.jfif"
                alt="MITS NAAC Accredited Campus"
                className="w-full h-auto max-h-[460px] object-cover"
                loading="eager"
              />
            </div>

            {/* Text Content — Verbatim from Official Portal */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4 font-body text-slate-700 text-sm md:text-base leading-relaxed text-justify">
              <p>
                Madanapalle Institute of Technology &amp; Science (MITS), established in 1998, is a premier institution with a strong legacy of academic excellence. In recognition of its sustained quality in higher education, MITS has been conferred the status of a <strong>Deemed to be University</strong> by the Government of India under Section 3 of the UGC Act, 1956 (Notification dated 15th July 2025).
              </p>
              <p>
                MITS is committed to excellence in higher education through continuous quality enhancement, innovation, and institutional best practices.
              </p>
              <p>
                The institution is accredited by the <strong>National Assessment and Accreditation Council (NAAC)</strong>, which serves as a hallmark of quality in teaching-learning processes, research, infrastructure, governance, and student support systems. NAAC accreditation reflects the institution’s adherence to well-defined standards and its commitment to fostering a culture of academic and administrative excellence.
              </p>
              <p>
                MITS has successfully undergone its <strong>first cycle of NAAC accreditation</strong>, achieving an <strong>A+ Grade</strong>, which signifies its strong foundation in quality education, research output, and holistic student development. The institution is now progressing towards its next cycle of accreditation, with a focus on strengthening outcome-based education, research impact, innovation ecosystems, and global engagement.
              </p>
              <p>
                Through its <strong>Internal Quality Assurance Cell (IQAC)</strong>, MITS continuously monitors and enhances academic and administrative performance by implementing quality benchmarks, collecting stakeholder feedback, and ensuring systematic documentation and compliance with NAAC criteria.
              </p>
              <div>
                <p className="font-bold text-[#0f2a44] mb-2">The university emphasizes:</p>
                <ul className="space-y-1.5 pl-4 list-disc text-slate-700">
                  <li>Student-centric learning and outcome-based education</li>
                  <li>Research, innovation, and consultancy</li>
                  <li>Industry interaction and skill development</li>
                  <li>Inclusive practices and social responsibility</li>
                  <li>Sustainable and green campus initiatives</li>
                </ul>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-[#0f2a44]">
                  <strong>MITS</strong> is dedicated to maintaining the highest standards of <strong>quality, accountability, and continuous improvement</strong>, aligned with national and global educational benchmarks.
                </p>
              </div>

              {/* 2 Document Links */}
              <div className="pt-4 border-t border-slate-100">
                <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
                  <a
                    href="https://mits.ac.in/assets/pdf/iqac/NAAC%20Coordinator%20Order.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-3.5 px-5 hover:bg-red-50/30 transition-colors group"
                  >
                    <span className="font-body text-sm font-semibold text-[#0f2a44] group-hover:text-[#b31317] transition-colors pr-4">
                      NAAC Coordinator Office Order
                    </span>
                    <span className="shrink-0 flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-[#b31317]">
                      <FileText className="w-4 h-4 text-[#b31317]" />
                      <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#b31317]" />
                    </span>
                  </a>
                  <a
                    href="https://mits.ac.in/assets/pdf/iqac/Office%20Order-78-NAAC%20Criterion-Coordinator.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-3.5 px-5 hover:bg-red-50/30 transition-colors group"
                  >
                    <span className="font-body text-sm font-semibold text-[#0f2a44] group-hover:text-[#b31317] transition-colors pr-4">
                      University-wise NAAC Criterion Coordinators
                    </span>
                    <span className="shrink-0 flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-[#b31317]">
                      <FileText className="w-4 h-4 text-[#b31317]" />
                      <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#b31317]" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Contact Us Card — Verbatim from Official Portal */}
              <div className="pt-6 border-t border-slate-100">
                <h3 className="font-display font-bold text-xl text-[#0f2a44] mb-4">
                  Contact Us
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Coordinator 1 */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-[#b31317]/10 text-[#b31317] flex items-center justify-center mb-3">
                      <User className="w-4 h-4" />
                    </div>
                    <h5 className="font-bold text-[#0f2a44] text-sm">Dr. K. Sathesh</h5>
                    <p className="text-xs text-slate-600 mt-1">IQAC &amp; NAAC Coordinator</p>
                  </div>

                  {/* Coordinator 2 */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-[#b31317]/10 text-[#b31317] flex items-center justify-center mb-3">
                      <User className="w-4 h-4" />
                    </div>
                    <h5 className="font-bold text-[#0f2a44] text-sm">Mr. T. Manivannan</h5>
                    <p className="text-xs text-slate-600 mt-1">
                      Accreditation Compliance &amp; Data Validation Associate
                    </p>
                  </div>

                  {/* Address */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-[#caa74d]/20 text-[#caa74d] flex items-center justify-center mb-3">
                      <MapPin className="w-4 h-4 text-[#0f2a44]" />
                    </div>
                    <h5 className="font-bold text-[#0f2a44] text-sm mb-1">Address</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Room No: SRB211A<br />
                      Madanapalle Institute of Technology &amp; Science<br />
                      Deemed to be University<br />
                      Madanapalle–Kadiri Road<br />
                      Kurabalakota Mandal, Madanapalle–517325<br />
                      Andhra Pradesh, India
                    </p>
                  </div>

                  {/* Phone & Email */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f2a44] mb-1">
                        <Phone className="w-3.5 h-3.5 text-[#b31317]" />
                        <span>Phone</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        <a href="tel:+918571280255" className="hover:text-[#b31317] hover:underline">
                          +91 08571 280255
                        </a>
                        ,{" "}
                        <a href="tel:+919100973388" className="hover:text-[#b31317] hover:underline">
                          9100973388
                        </a>
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f2a44] mb-1">
                        <Mail className="w-3.5 h-3.5 text-[#b31317]" />
                        <span>Email</span>
                      </div>
                      <p className="text-xs text-slate-600 space-y-0.5">
                        <a
                          href="mailto:naaccell@mits.ac.in"
                          className="block text-[#b31317] hover:underline"
                        >
                          naaccell@mits.ac.in
                        </a>
                        <a
                          href="mailto:compliance.datavalidation@mits.ac.in"
                          className="block text-[#b31317] hover:underline break-all"
                        >
                          compliance.datavalidation@mits.ac.in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 6 Content: DVV Clarifications Extended Profile */}
        {activeTab === "extendedProfile" && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-5">
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#b31317] tracking-tight">
                Extended Profile DVV Clarifications
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#b31317] border border-red-100">
                14 Documents
              </span>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
              {extendedProfileDocs.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-3.5 px-5 hover:bg-red-50/30 transition-colors group"
                >
                  <span className="font-body text-xs sm:text-sm font-medium text-slate-800 group-hover:text-[#b31317] transition-colors pr-4 leading-relaxed">
                    {doc.title}
                  </span>
                  <span className="shrink-0 flex items-center gap-1 text-slate-400 group-hover:text-[#b31317]">
                    <FileText className="w-4 h-4 text-[#b31317]" />
                    <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#b31317]" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default NAAC;

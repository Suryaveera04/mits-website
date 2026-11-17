import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Target,
  ChevronDown,
  ChevronUp,
  FileText,
  ExternalLink,
  Award,
  Layers,
  Wrench,
  Compass,
  MapPin,
  Phone,
  Mail,
  Building,
  Quote,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { sdcEventsData } from "@/data/sdcEventsData";

const BASE = import.meta.env.BASE_URL;

const officialDocs = [
  {
    title: "Office Order - Skill Development Cell - 14.07.2026",
    url: "https://mits.ac.in/assets/pdf/assoc/Office%20Order-SDC-14-07-2026.pdf",
    date: "14.07.2026",
  },
  {
    title: "Office Order - Skill Development Cell - 05.11.2025",
    url: "https://mits.ac.in/assets/pdf/assoc/Office%20Order-SDC-5-11-2025.pdf",
    date: "05.11.2025",
  },
  {
    title: "Standard Operating Procedure for Skill Development Cell",
    url: "https://mits.ac.in/assets/pdf/apssdc/APSSDC-SoP.pdf",
    date: "SOP Guideline",
  },
  {
    title: "APSSDC Appreciation Certificate",
    url: "https://mits.ac.in/assets/pdf/apssdc/APSSDC%20Appreciation.pdf",
    date: "Recognition",
  },
];

const siemensLabs = [
  {
    name: "Agriculture Machinery Lab",
    url: "https://mits.ac.in/assets/pdf/apssdc/Agriculture%20Machinery%20Lab.pdf",
  },
  {
    name: "Manufacturing CNC Lab",
    url: "https://mits.ac.in/assets/pdf/apssdc/Siemens-CNC-Lab.pdf",
  },
  {
    name: "Computer Based Training (CBT) Lab",
    url: "https://mits.ac.in/assets/pdf/apssdc/Siemens%20CBT%20Lab.pdf",
  },
  {
    name: "R & AC Lab",
    url: "https://mits.ac.in/assets/pdf/apssdc/R%20-%20AC%20Lab.pdf",
  },
  {
    name: "Electrical Home Lab",
    url: "https://mits.ac.in/assets/pdf/apssdc/Electrical%20Home%20Lab.pdf",
  },
  {
    name: "Manufacturing Welding Lab",
    url: "https://mits.ac.in/assets/pdf/apssdc/Siemens%20Welding%20Lab.pdf",
  },
];

const traineeStats = [
  { sno: 1, qualification: "B.Tech.", count: "3,527" },
  { sno: 2, qualification: "Intermediate", count: "263" },
  { sno: 3, qualification: "Diploma", count: "562" },
  { sno: 4, qualification: "SSC", count: "93" },
  { sno: 5, qualification: "ITI", count: "462" },
  { sno: 6, qualification: "Below SSC", count: "192" },
  { sno: 7, qualification: "Intermediate VOC", count: "7" },
];

export default function SkillDevelopmentCentre() {
  // Default open the first year (Events 2026-27)
  const [openYears, setOpenYears] = useState<Record<string, boolean>>({
    "Events 2026-27": true,
  });

  const toggleYear = (year: string) => {
    setOpenYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <SEO
        title="Skill Development Centre | MITS Madanapalle"
        description="MITS-APSSDC Skill Development Centre fulfills growing industry needs by upgrading youth skills, offering Siemens t-SDI labs, Dassault Systemes 3D Experience, and CM Centre of Excellence."
        keywords="MITS Skill Development Centre, APSSDC MITS, Siemens t-SDI, Dassault Systemes 3D, CM Centre of Excellence, MITS skill development cell"
      />

      <Header />

      {/* Hero Banner matching other pages with bottom-left breadcrumbs */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Soft natural dark overlay */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            Skill Development Centre
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm">
            MITS-APSSDC skill development initiative bridging the industry-academia gap through advanced Siemens t-SDI labs, Dassault 3D experience, and corporate-ready training programs.
          </p>
        </div>

        {/* Breadcrumb at bottom-left corner of the hero section matching other pages */}
        <nav className="absolute bottom-4 left-6 md:bottom-6 md:left-12 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80 drop-shadow">
            <li>
              <Link to="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-medium">Skill Development Centre</li>
          </ol>
        </nav>
      </section>

      {/* Main Content - Utilizing full container width with elegant 2-column layout */}
      <main className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols): Vision/Mission, Objective, Programmes, Events */}
          <div className="lg:col-span-8 space-y-10">
            {/* Vision & Mission Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vision Card (Orange) */}
              <div className="bg-gradient-to-br from-[#ea6312] to-[#d45209] text-white p-7 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5 shadow-inner">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4 tracking-wide text-white">
                    Vision
                  </h2>
                  <p className="text-white/95 text-base sm:text-lg leading-relaxed">
                    MITS-APSSDC is set up to fulfill the growing needs for skilled manpower across
                    IT and narrow the existing gap between the demand and supply of skills.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/20 flex items-center text-xs font-semibold text-white/80">
                  <span>MITS-APSSDC Skill Initiative</span>
                </div>
              </div>

              {/* Mission Card (Purple) */}
              <div className="bg-gradient-to-br from-[#775ba3] to-[#5b3e8a] text-white p-7 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5 shadow-inner">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4 tracking-wide text-white">
                    Mission
                  </h2>
                  <p className="text-white/95 text-base sm:text-lg leading-relaxed">
                    Upgrading skills to international standards through substantial industry
                    involvement and develop frameworks. MSDC provides an opportunity for career
                    development of students. Increasing demand of productive manpower for jobs
                    triggered ourselves to engage in skill development sectors across the world.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/20 flex items-center text-xs font-semibold text-white/80">
                  <span>Global Industry Engagement</span>
                </div>
              </div>
            </div>

            {/* Objective Section */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-8 lg:p-10">
              <div className="inline-block bg-[#8B1D1D] text-white px-4 py-1.5 rounded-md font-display font-bold text-lg uppercase tracking-wide mb-5">
                Objective
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                To strengthen students with the scope of Technical Skills by providing a series of
                training programs. Precisely, the Scheme aims to:
              </p>

              {/* 5 Objectives list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Boost employability and productivity of youth by providing training on updated technologies",
                  "Encourage standardization and initiate a process of creating a registry of skills",
                  "Impart training through Industry & Academia experts in close interaction to produce readily employable graduates",
                  "Empower students living in rural areas so as to bridge the urban rural divide",
                  "Develop and deploy e-Governance applications in cost effective manner",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B1D1D]/10 text-[#8B1D1D] flex items-center justify-center text-xs font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <hr className="my-8 border-slate-200" />

              {/* Strategy 50-30-20 Rule */}
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#ea6312]" />
                  <span>Strategy to follow the 50-30-20 rule:</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-6 rounded-xl bg-orange-50 border border-orange-200/80">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl font-extrabold text-[#ea6312]">50%</span>
                      <span className="px-3 py-1 text-xs font-bold uppercase rounded-full bg-orange-200/60 text-[#ea6312]">
                        Action Learning
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      50% of the development should come from on-the-job activities and action
                      learning. This can include development experiences like managing a project,
                      serving on a cross-functional team, taking on a new task, job shadowing, job
                      rotation, etc.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-purple-50 border border-purple-200/80">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl font-extrabold text-[#775ba3]">30%</span>
                      <span className="px-3 py-1 text-xs font-bold uppercase rounded-full bg-purple-200/60 text-[#775ba3]">
                        Interactions
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      30% of the development should come from interactions with others. This includes
                      having a mentor, being a mentor, coaching, participating in communities of
                      practice, serving as a leader in a staff organization, etc.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-blue-50 border border-blue-200/80">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl font-extrabold text-[#1d5b8b]">20%</span>
                      <span className="px-3 py-1 text-xs font-bold uppercase rounded-full bg-blue-200/60 text-[#1d5b8b]">
                        Formal Training
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      20% of the development should come from training, classroom courses, structured
                      modules, and technical workshops.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Box */}
              <div className="p-6 rounded-xl bg-slate-50 border-l-4 border-[#8B1D1D] mb-8">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-[#8B1D1D]/40 shrink-0 mt-1" />
                  <div>
                    <blockquote className="text-base sm:text-lg italic text-slate-800 font-serif leading-relaxed mb-2">
                      “All of the top achievers are life-long learners ....looking for new skills,
                      insights and ideas. If they&apos;re not learning, they&apos;re not growing....
                      not moving towards excellence.”
                    </blockquote>
                    <p className="text-sm text-slate-600 font-medium">
                      To reach this excellence MITS Student Development Centre (MSDC) provides the
                      necessary training for career development of students.
                    </p>
                  </div>
                </div>
              </div>

              {/* Official PDF Document Links */}
              <div>
                <h4 className="font-display font-bold text-slate-900 text-base uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#8B1D1D]" />
                  <span>Official Orders &amp; Documents</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {officialDocs.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#8B1D1D] hover:shadow-md transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <FileText className="w-5 h-5 text-[#8B1D1D] group-hover:scale-110 transition-transform" />
                          <span className="text-[11px] font-semibold text-slate-500 uppercase">
                            {doc.date}
                          </span>
                        </div>
                        <h5 className="font-semibold text-slate-800 text-sm group-hover:text-[#8B1D1D] transition-colors leading-snug">
                          {doc.title}
                        </h5>
                      </div>
                      <div className="mt-4 pt-2 border-t border-slate-100 flex items-center text-xs text-[#8B1D1D] font-medium gap-1">
                        <span>View Document</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* APSSDC - Programmes Section */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-8 lg:p-10">
              <div className="inline-block bg-[#8B1D1D] text-white px-4 py-1.5 rounded-md font-display font-bold text-lg uppercase tracking-wide mb-5">
                APSSDC - Programmes
              </div>

              <p className="text-slate-700 text-base leading-relaxed mb-8">
                Under the APSSDC initiative, three training programs viz.,{" "}
                <strong className="text-slate-900">APSSDC- SIEMENS t-SDI</strong>,{" "}
                <strong className="text-slate-900">Dassault Systemes 3D experience centre</strong> and{" "}
                <strong className="text-slate-900">CM&apos;s Centre of Excellence</strong> are
                offering to the students.
              </p>

              {/* 1. SIEMENS t-SDI PROJECT */}
              <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-slate-50/70 border border-slate-200">
                <h3 className="text-xl font-display font-bold text-[#8B1D1D] mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  <span>1. tSDI-APSSDC SIEMENS PROJECT</span>
                </h3>

                <p className="text-sm text-slate-600 mb-5">
                  Technical Skill Development Institute equipped with state-of-the-art laboratory
                  facilities:
                </p>

                {/* 6 Siemens Labs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {siemensLabs.map((lab, idx) => (
                    <a
                      key={idx}
                      href={lab.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#8B1D1D] hover:shadow-sm transition-all group flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#8B1D1D]/10 text-[#8B1D1D] flex items-center justify-center shrink-0">
                          <Layers className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-[#8B1D1D] transition-colors">
                          {lab.name}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#8B1D1D] transition-colors shrink-0" />
                    </a>
                  ))}
                </div>

                {/* Beneficiary Highlight Banner */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#8B1D1D] text-white flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-[#ffd15c] shrink-0" />
                    <span className="font-display font-bold text-base sm:text-lg">
                      Total 5,106 beneficiaries are benefited from APSSDC- SIEMENS t-SDI Programme
                    </span>
                  </div>
                  <span className="text-xs bg-white/20 px-3.5 py-1.5 rounded-full font-semibold uppercase tracking-wider">
                    2017 to Present
                  </span>
                </div>

                {/* Qualification Breakdown Table */}
                <div className="overflow-x-auto">
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                    No. of students Trained Count with educational qualification from 2017 to till
                    date
                  </h4>
                  <table className="w-full text-left text-sm border-collapse bg-white rounded-xl overflow-hidden border border-slate-200">
                    <thead className="bg-[#8B1D1D] text-white uppercase text-xs tracking-wider">
                      <tr>
                        <th className="py-3 px-4 w-16 text-center font-bold">S.No</th>
                        <th className="py-3 px-6 font-bold">Educational Qualification</th>
                        <th className="py-3 px-6 text-right font-bold">No. of Trainees</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {traineeStats.map((row) => (
                        <tr key={row.sno} className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 text-center font-semibold text-slate-500">
                            {row.sno}
                          </td>
                          <td className="py-3 px-6 font-medium text-slate-800">
                            {row.qualification}
                          </td>
                          <td className="py-3 px-6 text-right font-bold text-slate-900">
                            {row.count}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-slate-100/80 font-bold border-t-2 border-slate-300">
                        <td className="py-3 px-4 text-center text-slate-700">Total</td>
                        <td className="py-3 px-6 text-slate-900">Cumulative Trainees</td>
                        <td className="py-3 px-6 text-right text-[#8B1D1D] text-base font-extrabold">
                          5,106
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2 & 3: CM's Centre of Excellence & Dassault Systemes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* CM Centre of Excellence */}
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#8B1D1D] mb-2 flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      <span>2. CM&apos;s Centre of Excellence</span>
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      Flagship skill development hub setup to build advanced capabilities across
                      specialized engineering and emerging technology domains.
                    </p>
                  </div>
                  <a
                    href="https://mits.ac.in/assets/pdf/apssdc/CMs%20Centre%20of%20Excellence%20Lab.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-[#8B1D1D] transition-colors group"
                  >
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-[#8B1D1D]">
                      CM&apos;s Centre of Excellence Lab
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#8B1D1D]" />
                  </a>
                </div>

                {/* Dassault Systemes */}
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#8B1D1D] mb-2 flex items-center gap-2">
                      <Layers className="w-5 h-5" />
                      <span>3. Dassault Systemes</span>
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      Advanced 3D design, simulation, and collaborative product lifecycle management
                      centre empowering students with industry standard 3D design skills.
                    </p>
                  </div>
                  <a
                    href="https://mits.ac.in/assets/pdf/apssdc/3D%20Dassault%20Systemes%20Experience%20Centre.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-[#8B1D1D] transition-colors group"
                  >
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-[#8B1D1D]">
                      3D Dassault Systemes Experience Centre
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#8B1D1D]" />
                  </a>
                </div>
              </div>
            </section>

            {/* Events Accordion Section */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-8 lg:p-10">
              <div className="inline-block bg-[#8B1D1D] text-white px-4 py-1.5 rounded-md font-display font-bold text-lg uppercase tracking-wide mb-6">
                Events
              </div>

              <div className="space-y-3">
                {sdcEventsData.map((yearGroup) => {
                  const isOpen = !!openYears[yearGroup.year];
                  return (
                    <div
                      key={yearGroup.year}
                      className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200"
                    >
                      {/* Year Accordion Header */}
                      <button
                        onClick={() => toggleYear(yearGroup.year)}
                        className={`w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between font-display font-bold text-base transition-colors ${
                          isOpen
                            ? "bg-slate-100/90 text-slate-900 border-b border-slate-200"
                            : "bg-white hover:bg-slate-50 text-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#8B1D1D]" />
                          <span>{yearGroup.year}</span>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-200/70 text-slate-600 font-sans font-semibold">
                            {yearGroup.events.length}{" "}
                            {yearGroup.events.length === 1 ? "Event" : "Events"}
                          </span>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-500" />
                        )}
                      </button>

                      {/* Collapsible Events List */}
                      {isOpen && (
                        <div className="p-5 sm:p-6 bg-slate-50/50 space-y-4">
                          {yearGroup.events.map((ev, evIdx) => (
                            <div
                              key={evIdx}
                              className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors"
                            >
                              {/* Red circular bullet › matching official MITS screenshot */}
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8B1D1D] text-white flex items-center justify-center text-xs font-bold mt-0.5">
                                ›
                              </span>
                              <div className="flex-1 text-sm text-slate-700 leading-relaxed">
                                <p className="font-medium text-slate-800 mb-2">{ev.description}</p>
                                {ev.links && ev.links.length > 0 && (
                                  <div className="flex flex-wrap gap-3 mt-2">
                                    {ev.links.map((link, lIdx) => (
                                      <a
                                        key={lIdx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 underline text-xs font-semibold hover:font-bold transition-all"
                                      >
                                        <span>{link.title}</span>
                                        <ExternalLink className="w-3.5 h-3.5 no-underline" />
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Right Column (4 cols): Sticky Contact Sidebar with NO wasted white space */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-200/80 overflow-hidden">
              {/* Red Contact Header at the very top of the card */}
              <div className="bg-[#8B1D1D] px-6 py-3.5 flex items-center justify-between">
                <h3 className="text-white font-display font-bold text-lg tracking-wider uppercase">
                  Contact
                </h3>
                <span className="text-xs bg-white/20 text-white font-medium px-2.5 py-1 rounded-full uppercase tracking-wider">
                  SDC Desk
                </span>
              </div>

              {/* Card Body: Logo & Coordinator presented cleanly with zero dead space */}
              <div className="p-6 space-y-5">
                {/* Logo and SPOC info grouped together */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 p-2 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                    <img
                      src={`${BASE}images/apssdc.png`}
                      alt="Skill AP APSSDC Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#8B1D1D] bg-[#8B1D1D]/10 px-2 py-0.5 rounded mb-1">
                      APSSDC Coordinator (SPOC)
                    </span>
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-tight">
                      Mr. P. Mohammed Rizwan Ali
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-0.5 font-medium">Assistant Professor</p>
                    <p className="text-slate-500 text-xs">Department of MECH</p>
                  </div>
                </div>

                {/* Contact details */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <MapPin className="w-4 h-4 text-[#8B1D1D] shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong className="text-slate-800">Address:</strong> Madanapalle Institute of
                      Technology &amp; Science, Deemed to be University, Madanapalle-Kadiri Road,
                      Kurabalakota Mandal, Madanapalle-517325, Andhra Pradesh, India
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600">
                    <Phone className="w-4 h-4 text-[#8B1D1D] shrink-0" />
                    <div>
                      <strong className="text-slate-800">Phone: </strong>
                      <a href="tel:+918571280255" className="hover:text-[#8B1D1D]">
                        +91-8571-280255
                      </a>
                      ,{" "}
                      <a href="tel:+918571280706" className="hover:text-[#8B1D1D]">
                        280706
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600">
                    <Mail className="w-4 h-4 text-[#8B1D1D] shrink-0" />
                    <div>
                      <strong className="text-slate-800">Email: </strong>
                      <a
                        href="mailto:sdc@mits.ac.in"
                        className="text-[#8B1D1D] font-medium hover:underline"
                      >
                        sdc@mits.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Document Access in the sidebar */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6">
              <h4 className="font-display font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#8B1D1D]" />
                <span>Quick Document Access</span>
              </h4>
              <div className="space-y-2.5">
                {officialDocs.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl text-xs font-medium text-slate-700 hover:text-[#8B1D1D] hover:bg-slate-50 transition-colors border border-slate-100 hover:border-slate-200"
                  >
                    <span className="truncate pr-2">{doc.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

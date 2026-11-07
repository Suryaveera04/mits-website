import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap, Calendar, FileText, CheckCircle2, Award, BookOpen,
  Download, ExternalLink, Mail, Phone, MapPin, ArrowRight, ShieldCheck,
  Building2, Users, Lightbulb, Microscope, DollarSign, ChevronRight, Sparkles, HelpCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BASE = import.meta.env.BASE_URL;

const IMPORTANT_DATES = [
  { event: "Notification & Online Application Commencement", date: "10 June 2026", status: "Announced" },
  { event: "Last Date for Submission of Online Application", date: "25 June 2026", status: "Closing Soon" },
  { event: "Release of Hall Tickets / Test Intimation", date: "01 July 2026", status: "Upcoming" },
  { event: "MITS Doctoral Aptitude Test (MITS-DAT)", date: "05 July 2026 (10:00 AM – 1:00 PM)", status: "Examination" },
  { event: "Technical Presentation & Personal Interview", date: "14 July 2026 – 16 July 2026", status: "Interview" },
  { event: "Announcement of Provisional Selection List", date: "23 July 2026", status: "Results" },
  { event: "Document Verification, Fee Payment & Reporting", date: "27 July 2026", status: "Admission" },
  { event: "Doctoral Orientation & Coursework Commencement", date: "First Week of August 2026", status: "Academic" },
];

const DISCIPLINES = [
  {
    code: "CE",
    name: "Civil Engineering",
    thrustAreas: [
      "Structural Engineering & High-Performance Concrete",
      "Geotechnical & Earthquake Engineering",
      "Water Resources & Hydrological Modeling",
      "Transportation Systems & Highway Materials",
      "Environmental Engineering & Waste Management",
    ],
    mode: "Full-Time / Part-Time",
  },
  {
    code: "EEE",
    name: "Electrical & Electronics Engineering",
    thrustAreas: [
      "Smart Grids & Microgrid Architectures",
      "Renewable Energy Systems & Power Electronics",
      "Electric Vehicles & Battery Management Systems",
      "High Voltage & Power Quality Improvement",
      "AI Applications in Power Engineering",
    ],
    mode: "Full-Time / Part-Time",
  },
  {
    code: "ME",
    name: "Mechanical Engineering",
    thrustAreas: [
      "Thermal Engineering & Computational Fluid Dynamics (CFD)",
      "Additive Manufacturing & 3D Printing",
      "Polymer Matrix & Metal Matrix Composites",
      "Robotics, Mechatronics & Industry 4.0",
      "Design Optimization & Tribology",
    ],
    mode: "Full-Time / Part-Time",
  },
  {
    code: "ECE",
    name: "Electronics & Communication Engineering",
    thrustAreas: [
      "VLSI Design & Semiconductor Devices",
      "5G/6G Wireless Networks & Antenna Design",
      "Embedded Systems, IoT & Edge Computing",
      "Biomedical Signal & Image Processing",
      "Optical Communications & Photonic Systems",
    ],
    mode: "Full-Time / Part-Time",
  },
  {
    code: "CSE",
    name: "Computer Science & Engineering",
    thrustAreas: [
      "Artificial Intelligence & Deep Learning",
      "Big Data Analytics & Cloud Architectures",
      "Cybersecurity, Cryptography & Network Security",
      "Computer Vision & Pattern Recognition",
      "Natural Language Processing & Speech Tech",
    ],
    mode: "Full-Time / Part-Time",
  },
  {
    code: "CST",
    name: "Computer Science & Technology / Emerging Tech",
    thrustAreas: [
      "Applied Machine Learning & GenAI",
      "Internet of Things (IoT) & Smart Sensors",
      "Distributed Systems & Blockchain Technology",
      "Human-Computer Interaction (HCI)",
      "Automated Software Engineering",
    ],
    mode: "Full-Time / Part-Time",
  },
  {
    code: "MBA",
    name: "Management Studies",
    thrustAreas: [
      "Financial Analytics & FinTech Innovations",
      "Digital Marketing & Consumer Behavior",
      "Human Resource Analytics & Organizational Dynamics",
      "Operations, Logistics & Supply Chain Management",
      "Entrepreneurship, Innovation & Sustainable Business",
    ],
    mode: "Full-Time / Part-Time",
  },
  {
    code: "PHY",
    name: "Physics",
    thrustAreas: [
      "Nanotechnology & Functional Nanomaterials",
      "Thin Films & Solar Cell Fabrication",
      "Condensed Matter Physics & Magnetic Materials",
      "Crystal Growth & Characterization",
      "Spectroscopy & Applied Optics",
    ],
    mode: "Full-Time / Part-Time",
  },
  {
    code: "CHY",
    name: "Chemistry",
    thrustAreas: [
      "Electrochemistry & Electrochemical Biosensors",
      "Polymer Nanocomposites & Smart Materials",
      "Synthetic Organic & Medicinal Chemistry",
      "Green Chemistry & Environmental Catalysis",
      "Energy Storage Devices & Supercapacitors",
    ],
    mode: "Full-Time / Part-Time",
  },
  {
    code: "MATH",
    name: "Mathematics",
    thrustAreas: [
      "Fluid Dynamics & Heat Transfer Analysis",
      "Differential Equations & Mathematical Modeling",
      "Graph Theory & Computational Combinatorics",
      "Numerical Methods & Finite Element Analysis",
      "Probability, Statistics & Stochastic Processes",
    ],
    mode: "Full-Time / Part-Time",
  },
  {
    code: "EFL",
    name: "English & Foreign Languages",
    thrustAreas: [
      "English Language Teaching (ELT) & Pedagogy",
      "Applied Linguistics & Sociolinguistics",
      "Gender Studies & Postcolonial Literature",
      "Indian Writing in English & Cultural Studies",
      "Technical Communication & Professional Discourse",
    ],
    mode: "Full-Time / Part-Time",
  },
];

const FELLOWSHIPS = [
  {
    category: "Category A — National Exam Qualified",
    criteria: "Scholars with valid GATE / UGC-NET / CSIR-NET / GPAT / CEED qualification admitted as Full-Time Scholars.",
    stipendYear1: "₹30,000 / month",
    stipendYear2_3: "₹35,000 / month",
    contingency: "Annual contingency grant for research consumables, books, and conference travel as per University norms.",
    highlight: true,
  },
  {
    category: "Category B — Institutional Research Fellowship",
    criteria: "Meritorious Full-Time Scholars selected through MITS-DAT entrance examination and university interview performance.",
    stipendYear1: "₹25,000 / month",
    stipendYear2_3: "₹30,000 / month",
    contingency: "Access to university research seed grants and peer-reviewed international publication incentive rewards.",
    highlight: false,
  },
];

const DOCUMENTS = [
  {
    title: "Ph.D. Admission Notification & Brochure 2026-27 (July Session)",
    desc: "Complete guidelines, examination schedule, discipline codes, and admission process.",
    link: "https://mits.ac.in/public/uploads/static-pdf/MITS Deemed to be University Brochure 2026.pdf",
    type: "Brochure",
  },
  {
    title: "MITS-DAT Syllabus & Examination Pattern",
    desc: "Detailed syllabus for Section A (Research Methodology) and Section B (Discipline Specific).",
    link: "https://mits.ac.in/assets/pdf/research/Enrolled%20Research%20Scholars-List.pdf",
    type: "Syllabus",
  },
  {
    title: "Ph.D. Regulations & Ordinances (MITS DTBU)",
    desc: "Statutory doctoral regulations, coursework requirements, doctoral committee norms, and thesis submission.",
    link: "https://mits.ac.in/assets/pdf/admin/Staff Hand Book Service Rules-2024-25.pdf",
    type: "Regulations",
  },
  {
    title: "Employer No Objection Certificate (NOC) Proforma",
    desc: "Mandatory certificate format for Part-Time Ph.D. working candidates from employer/organisation.",
    link: "https://mits.ac.in/assets/pdf/assoc/Office%20Order-NASSCOM.pdf",
    type: "Form",
  },
  {
    title: "Enrolled Doctoral Research Scholars Directory",
    desc: "List of full-time and part-time research scholars registered across departments.",
    link: "https://mits.ac.in/assets/pdf/research/Enrolled%20Research%20Scholars-List.pdf",
    type: "Directory",
  },
];

export default function PhdAdmissions() {
  const [activeTab, setActiveTab] = useState<"dates" | "disciplines" | "eligibility" | "fellowships" | "procedure" | "downloads">("dates");

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />
      <SEO
        title="Ph.D. Admissions 2026–27 (July Session) — MITS Deemed to be University"
        description="Official Ph.D. Admissions portal at MITS Deemed to be University. Full-time and Part-time doctoral programmes with up to ₹35,000/month fellowship, MITS-DAT entrance examination, and eligibility criteria."
      />

      {/* HERO SECTION */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/25 via-black/10 to-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffd15c]/20 border border-[#ffd15c]/40 text-[#ffd15c] text-xs uppercase tracking-widest font-bold mb-4 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Doctoral Research Programmes • AY 2026–27
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Ph.D. Admissions — July Session
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm font-medium mb-8 leading-relaxed">
            Pursue transformative doctoral research at MITS (Deemed to be University). Offering Full-Time and Part-Time Ph.D. programs across 11 disciplines with institutional research fellowships up to <span className="text-[#ffd15c] font-bold">₹35,000/month</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://admission.mits.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#b31317] hover:bg-[#8b0000] text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Apply Online (admission.mits.ac.in)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://mits.ac.in/public/uploads/static-pdf/MITS Deemed to be University Brochure 2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/90 hover:bg-white text-[#0f2a44] font-bold text-sm rounded-xl shadow-md transition-all duration-200"
            >
              <Download className="w-4 h-4 text-[#b31317]" />
              <span>Download Brochure (PDF)</span>
            </a>
          </div>
        </div>

        {/* BREADCRUMB */}
        <nav className="absolute bottom-4 left-6 z-10 hidden sm:block">
          <ol className="flex items-center gap-1.5 text-xs text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/admissions" className="text-white/70 hover:text-white transition-colors">Admissions</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold">Ph.D. Admissions</li>
          </ol>
        </nav>
      </section>

      {/* QUICK STATS BAR */}
      <section className="bg-[#0f2a44] text-white py-6 border-b border-[#ffd15c]/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-2">
              <p className="text-2xl md:text-3xl font-extrabold text-[#ffd15c]">11</p>
              <p className="text-xs uppercase tracking-wider text-slate-300 mt-1">Research Disciplines</p>
            </div>
            <div className="p-2 border-l border-slate-700/60">
              <p className="text-2xl md:text-3xl font-extrabold text-[#ffd15c]">₹35,000</p>
              <p className="text-xs uppercase tracking-wider text-slate-300 mt-1">Monthly Fellowship (GATE/NET)</p>
            </div>
            <div className="p-2 border-l border-slate-700/60">
              <p className="text-2xl md:text-3xl font-extrabold text-[#ffd15c]">MITS-DAT</p>
              <p className="text-xs uppercase tracking-wider text-slate-300 mt-1">Entrance Examination</p>
            </div>
            <div className="p-2 border-l border-slate-700/60">
              <p className="text-2xl md:text-3xl font-extrabold text-[#ffd15c]">FT & PT</p>
              <p className="text-xs uppercase tracking-wider text-slate-300 mt-1">Full-Time & Part-Time Tracks</p>
            </div>
          </div>
        </div>
      </section>

      {/* TAB NAVIGATION */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-20 shadow-xs">
        <div className="container mx-auto px-4 max-w-6xl overflow-x-auto">
          <div className="flex items-center gap-1 sm:gap-2 py-2 min-w-max">
            {[
              { id: "dates", label: "Important Dates", icon: Calendar },
              { id: "disciplines", label: "Disciplines & Thrust", icon: BookOpen },
              { id: "eligibility", label: "Eligibility & Exemptions", icon: CheckCircle2 },
              { id: "fellowships", label: "Fellowships & Stipends", icon: Award },
              { id: "procedure", label: "Selection Process", icon: ShieldCheck },
              { id: "downloads", label: "Documents & Forms", icon: FileText },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#b31317] text-white shadow-xs"
                      : "text-slate-600 hover:text-[#0f2a44] hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="container mx-auto px-4 py-10 md:py-14 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* PRIMARY COLUMN */}
          <div className="lg:col-span-2 space-y-8">

            {/* TAB 1: IMPORTANT DATES */}
            {activeTab === "dates" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                    <div>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f2a44] flex items-center gap-2.5">
                        <Calendar className="w-6 h-6 text-[#b31317]" />
                        Schedule of Ph.D. Admissions (July Session)
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Timeline for application, MITS-DAT examination, interview dates, and reporting.
                      </p>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#0f2a44] text-white text-xs uppercase tracking-wider">
                          <th className="py-3 px-4 text-left">Admission Stage / Activity</th>
                          <th className="py-3 px-4 text-left w-48">Scheduled Date</th>
                          <th className="py-3 px-4 text-center w-28">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {IMPORTANT_DATES.map((row, i) => (
                          <tr key={i} className="hover:bg-[#fff8e6]/40 transition-colors">
                            <td className="py-3.5 px-4 font-medium text-slate-800 text-xs sm:text-sm">{row.event}</td>
                            <td className="py-3.5 px-4 font-semibold text-[#b31317] text-xs sm:text-sm">{row.date}</td>
                            <td className="py-3.5 px-4 text-center">
                              <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Note for Aspirants: </span>
                      Candidates seeking admission under exempted categories (UGC-NET / CSIR-NET / GATE / GPAT qualified) are exempted from the MITS-DAT written test but must register through the portal and appear directly for the presentation and interview.
                    </div>
                  </div>
                </section>
              </ScrollReveal>
            )}

            {/* TAB 2: DISCIPLINES & THRUST */}
            {activeTab === "disciplines" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                  <div className="mb-6 pb-4 border-b border-slate-100">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f2a44] flex items-center gap-2.5">
                      <BookOpen className="w-6 h-6 text-[#b31317]" />
                      Doctoral Research Disciplines & Thrust Areas
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Doctoral supervision is offered in Full-Time and Part-Time modes across 11 academic departments.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {DISCIPLINES.map((dept) => (
                      <div
                        key={dept.code}
                        className="p-5 rounded-xl border border-slate-200/80 hover:border-[#caa74d] hover:bg-[#fffdfa] transition-all duration-200"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2.5">
                            <span className="px-2.5 py-1 rounded-md bg-[#0f2a44] text-white text-xs font-bold font-mono">
                              {dept.code}
                            </span>
                            <h3 className="font-bold text-[#0f2a44] text-base sm:text-lg">{dept.name}</h3>
                          </div>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {dept.mode}
                          </span>
                        </div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Key Research Thrust Areas:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {dept.thrustAreas.map((area, idx) => (
                            <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/60">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            )}

            {/* TAB 3: ELIGIBILITY & EXEMPTIONS */}
            {activeTab === "eligibility" && (
              <ScrollReveal>
                <div className="space-y-6">
                  <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f2a44] mb-4 flex items-center gap-2.5">
                      <CheckCircle2 className="w-6 h-6 text-[#b31317]" />
                      Minimum Eligibility Requirements
                    </h2>
                    <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0 mt-2" />
                        <div>
                          <strong>Postgraduate Degree Qualification: </strong>
                          Candidates must hold a Master's degree (M.E. / M.Tech / M.Sc / M.A / MBA / MCA) or equivalent professional degree recognized by UGC/AICTE in the relevant or allied discipline.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0 mt-2" />
                        <div>
                          <strong>Minimum Aggregate Percentage: </strong>
                          A minimum of <strong>55% marks in aggregate</strong> (or equivalent grade point average, CGPA of 6.0/10) at the Master's level.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0 mt-2" />
                        <div>
                          <strong>Relaxation for Reserved Categories: </strong>
                          A relaxation of <strong>5% marks</strong> (from 55% to 50%) is applicable for candidates belonging to SC / ST / OBC (non-creamy layer) / Differently-Abled / EWS categories as per UGC Regulations.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0 mt-2" />
                        <div>
                          <strong>Part-Time Ph.D. Applicants: </strong>
                          Working professionals, faculty members, and scientists working in recognized educational institutions, R&D laboratories, or corporate industries with at least <strong>two years of continuous service</strong> may apply under the Part-Time category with an employer No Objection Certificate (NOC).
                        </div>
                      </li>
                    </ul>
                  </section>

                  <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                    <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-4 flex items-center gap-2.5">
                      <Award className="w-6 h-6 text-[#b31317]" />
                      Exemption from MITS-DAT Written Entrance Test
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      Candidates possessing any of the following national-level qualifications are <strong>directly exempted</strong> from appearing for the MITS Doctoral Aptitude Test (MITS-DAT) and are invited straight to the Interview:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      {[
                        "UGC-JRF / CSIR-JRF / ICMR / DST INSPIRE",
                        "Valid GATE Score in relevant engineering discipline",
                        "Qualified UGC-NET / CSIR-NET (Lectureship)",
                        "Valid GPAT Score for pharmaceutical/chemical sciences",
                        "State Level Eligibility Test (AP-SET / SLET)",
                        "Regular Teachers with M.Phil. Degree",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 p-3 rounded-lg bg-emerald-50/60 border border-emerald-200 text-emerald-900 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </ScrollReveal>
            )}

            {/* TAB 4: FELLOWSHIPS & STIPENDS */}
            {activeTab === "fellowships" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                  <div className="mb-6 pb-4 border-b border-slate-100">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f2a44] flex items-center gap-2.5">
                      <Award className="w-6 h-6 text-[#b31317]" />
                      Institutional Fellowships for Full-Time Scholars
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      MITS Deemed to be University provides regular monthly stipends to encourage outstanding full-time research scholars.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {FELLOWSHIPS.map((fel, i) => (
                      <div
                        key={i}
                        className={`rounded-2xl p-6 border transition-all duration-300 ${
                          fel.highlight
                            ? "bg-gradient-to-br from-[#0f2a44] to-[#163a5f] text-white border-[#ffd15c]/40 shadow-lg"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                            fel.highlight ? "bg-[#ffd15c] text-[#0f2a44]" : "bg-primary/10 text-primary"
                          }`}>
                            {fel.category.split("—")[0].trim()}
                          </span>
                        </div>
                        <h3 className={`font-bold text-base sm:text-lg mb-2 ${fel.highlight ? "text-white" : "text-[#0f2a44]"}`}>
                          {fel.category.split("—")[1]?.trim() || fel.category}
                        </h3>
                        <p className={`text-xs mb-4 leading-relaxed ${fel.highlight ? "text-slate-200" : "text-slate-600"}`}>
                          {fel.criteria}
                        </p>
                        <div className={`p-4 rounded-xl mb-4 ${fel.highlight ? "bg-white/10 border border-white/10" : "bg-white border border-slate-200"}`}>
                          <div className="flex items-center justify-between mb-1.5 text-xs">
                            <span className={fel.highlight ? "text-slate-300" : "text-slate-500"}>Year 1 Stipend:</span>
                            <span className={`font-bold text-sm ${fel.highlight ? "text-[#ffd15c]" : "text-[#b31317]"}`}>{fel.stipendYear1}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className={fel.highlight ? "text-slate-300" : "text-slate-500"}>Year 2 & 3 Stipend:</span>
                            <span className={`font-bold text-sm ${fel.highlight ? "text-[#ffd15c]" : "text-[#b31317]"}`}>{fel.stipendYear2_3}</span>
                          </div>
                        </div>
                        <p className={`text-[11px] leading-relaxed ${fel.highlight ? "text-slate-300" : "text-slate-500"}`}>
                          <strong>Additional Support: </strong>{fel.contingency}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-1.5">
                    <p className="font-bold text-[#0f2a44]">Key Terms of Fellowship:</p>
                    <p>• Fellowships are awarded based on academic merit, performance in the entrance examination, and interview appraisal.</p>
                    <p>• Continued disbursement is subject to satisfactory biannual research progress certified by the Doctoral Committee (DC).</p>
                    <p>• Scholars receiving external national fellowships (JRF/SRF/INSPIRE) will receive stipends directly as per funding agency norms.</p>
                  </div>
                </section>
              </ScrollReveal>
            )}

            {/* TAB 5: SELECTION PROCEDURE */}
            {activeTab === "procedure" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                  <div className="mb-6 pb-4 border-b border-slate-100">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f2a44] flex items-center gap-2.5">
                      <ShieldCheck className="w-6 h-6 text-[#b31317]" />
                      Selection Procedure & Examination Pattern
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Admissions follow a two-tier rigorous academic screening process in accordance with UGC Doctoral Guidelines.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#b31317] text-white flex items-center justify-center font-bold text-sm shrink-0">
                        01
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-[#0f2a44] mb-1">MITS Doctoral Aptitude Test (MITS-DAT)</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                          A 3-hour computer-based / written examination carrying 100 marks with two components:
                        </p>
                        <ul className="text-xs sm:text-sm text-slate-600 space-y-1 list-disc pl-5">
                          <li><strong>Part A (50 Marks): </strong>Research Methodology, Quantitative Reasoning, Logical Reasoning & Analytical Aptitude.</li>
                          <li><strong>Part B (50 Marks): </strong>Subject Domain Knowledge aligned with Postgraduate curriculum.</li>
                          <li><strong>Qualifying Cutoff: </strong>50% marks in aggregate (45% for SC/ST/OBC/EWS candidates).</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#0f2a44] text-white flex items-center justify-center font-bold text-sm shrink-0">
                        02
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-[#0f2a44] mb-1">Research Presentation & Technical Interview</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                          Candidates who qualify in MITS-DAT (or are exempted under GATE/NET) are invited before the University Departmental Research Committee (DRC):
                        </p>
                        <ul className="text-xs sm:text-sm text-slate-600 space-y-1 list-disc pl-5">
                          <li>Presentation on proposed research domain, statement of problem, and methodology (10–15 mins).</li>
                          <li>In-depth interaction to assess domain depth, research competence, and feasibility of proposed work.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        03
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-[#0f2a44] mb-1">Final Merit List & Supervisor Allocation</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Consolidated merit is determined by combined performance in the interview, entrance test score, academic track record, and availability of approved research supervisors in the chosen specialization.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </ScrollReveal>
            )}

            {/* TAB 6: DOWNLOADS & DOCUMENTS */}
            {activeTab === "downloads" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                  <div className="mb-6 pb-4 border-b border-slate-100">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f2a44] flex items-center gap-2.5">
                      <FileText className="w-6 h-6 text-[#b31317]" />
                      Official Notifications, Syllabi & Forms
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Download essential documentation, ordinances, and application proformas for Ph.D. admissions.
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    {DOCUMENTS.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 hover:border-[#b31317] hover:bg-[#fff8e6]/30 transition-all group"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 px-2 py-0.5 rounded">
                              {doc.type}
                            </span>
                            <h3 className="font-bold text-sm sm:text-base text-slate-800 group-hover:text-[#b31317] transition-colors mt-1">
                              {doc.title}
                            </h3>
                            <p className="text-xs text-slate-500 mt-0.5">{doc.desc}</p>
                          </div>
                        </div>
                        <Download className="w-4 h-4 text-slate-400 group-hover:text-[#b31317] shrink-0 transition-colors" />
                      </a>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            )}

          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">

            {/* APPLY ACTION CARD */}
            <ScrollReveal>
              <div className="bg-gradient-to-br from-[#0f2a44] to-[#1c3f66] text-white rounded-2xl p-6 shadow-md border border-[#ffd15c]/30">
                <div className="flex items-center gap-2 text-[#ffd15c] text-xs font-bold uppercase tracking-widest mb-3">
                  <Sparkles className="w-4 h-4" />
                  Online Admissions Open
                </div>
                <h3 className="font-display font-bold text-xl mb-2 text-white">
                  Apply for Ph.D. Programme
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed mb-5">
                  Complete online registration, upload academic certificates, submit research statements, and pay application fees through the admission portal.
                </p>
                <a
                  href="https://admission.mits.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#b31317] hover:bg-[#8b0000] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-colors"
                >
                  <span>Go to Admission Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>

            {/* QUICK CONTACT HELP DESK */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-4 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#b31317]" />
                  Ph.D. Admissions Help Desk
                </h3>
                <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <div>
                    <p className="font-bold text-[#0f2a44]">Ph.D. Admissions &amp; Research Cell</p>
                    <p className="text-xs text-slate-500">Madanapalle Institute of Technology &amp; Science</p>
                    <p className="text-xs text-slate-500">Deemed to be University</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#b31317] shrink-0" />
                      <a href="mailto:adphdprograms@mits.ac.in" className="text-primary hover:underline font-medium break-all text-xs">
                        adphdprograms@mits.ac.in
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#b31317] shrink-0" />
                      <a href="mailto:advisor-rnd@mits.ac.in" className="text-primary hover:underline font-medium break-all text-xs">
                        advisor-rnd@mits.ac.in
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#b31317] shrink-0" />
                      <span className="font-medium text-xs">+91-7416484422 / +91-9100973262</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-500">
                        Post Box No. 17, Kadiri Road, Angallu, Madanapalle - 517325, Andhra Pradesh, India.
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* RESEARCH ECOSYSTEM CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-3 flex items-center gap-2">
                  <Microscope className="w-4 h-4 text-[#b31317]" />
                  Research Infrastructure
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Scholars enjoy access to 25+ specialized laboratories, high-performance computing clusters, IEEE Xplore, ScienceDirect, and international research collaborations.
                </p>
                <Link
                  to="/research"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b31317] hover:underline"
                >
                  <span>Explore Research &amp; Development Cell</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </section>
            </ScrollReveal>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


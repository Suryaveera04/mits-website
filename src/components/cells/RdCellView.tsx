import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Users,
  Award,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  FileText,
  Lightbulb,
  Building2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "https://mits.edu/";

interface AdvisoryMember {
  sno: number;
  name: string;
  designation: string;
  position: string;
}

const advisoryBoard: AdvisoryMember[] = [
  {
    sno: 1,
    name: "Dr. C. Yuvaraj",
    designation: "Vice Chancellor (I/c)",
    position: "Chairman",
  },
  {
    sno: 2,
    name: "Dr. D. Pradeep Kumar",
    designation: "Registrar & Cheif Coordinator (PAARC)",
    position: "In-Charge - 1",
  },
  {
    sno: 3,
    name: "Dr. P. Ramanathan",
    designation: "Principal",
    position: "In-Charge - 2",
  },
  {
    sno: 4,
    name: "Dr. C. Kamal Basha",
    designation: "Vice Principal (Administration)",
    position: "Member",
  },
  {
    sno: 5,
    name: "Dr. R. Thulasiram Naidu",
    designation: "Advisor (Advisor - R&D & Consultancy)",
    position: "Member",
  },
  {
    sno: 6,
    name: "Dr. G. Sreenivasulu",
    designation: "NIRF Coordinator",
    position: "Member",
  },
  {
    sno: 7,
    name: "Dr. Manish Sharma",
    designation: "NBA Coordinator",
    position: "Member",
  },
  {
    sno: 8,
    name: "Dr. P. Sivaiah",
    designation: "Associate Dean - R&D",
    position: "Member",
  },
  {
    sno: 9,
    name: "Dr. N. Nanda Kumar Reddy",
    designation: "Associate Dean - R&D-Ph.D. Programs",
    position: "Member",
  },
];

const contactPersonnel = [
  {
    name: "Dr. R. Thulasiram Naidu",
    role: "Advisor - R&D & Consultancy",
    department: "Department of Humanities",
  },
  {
    name: "Dr. P. Sivaiah",
    role: "Associate Dean - R&D",
    department: "Department of ME",
  },
  {
    name: "Dr. N. Nanda Kumar Reddy",
    role: "Associate Dean - R&D-Ph.D Programs",
    department: "Department of Physics",
  },
  {
    name: "Dr. Maneesh Kumar Singh",
    role: "Assistant Dean – R&D - Ph.D. Programs",
    department: "Department of ECE",
  },
];

const focusAreas = [
  {
    title: "Research Publications Scrutiny",
    desc: "Rigorous quality review and ethical validation for national and international research manuscripts across Scopus & Web of Science journals.",
    icon: BookOpen,
  },
  {
    title: "Project Proposals & Grants",
    desc: "Mentoring, coordinating, and processing research grant proposals submitted to premier funding agencies like DST, SERB, AICTE, ISRO, and DRDO.",
    icon: Lightbulb,
  },
  {
    title: "Industrial Consultancy",
    desc: "Bridging academia and industry through contracted testing, consultancy services, collaborative problem solving, and technology development.",
    icon: Building2,
  },
  {
    title: "Patents & Commercialization",
    desc: "Assisting faculty and students in the protection of intellectual property, patent filing, technology transfer, and commercialization of innovations.",
    icon: ShieldCheck,
  },
  {
    title: "Interdisciplinary Research",
    desc: "Fostering cross-departmental research clusters and state-of-the-art laboratory utilization to address complex real-world challenges.",
    icon: Sparkles,
  },
  {
    title: "Ph.D. Programs Coordination",
    desc: "Administering doctoral research scholars, doctoral committee meetings, coursework reviews, and quality metrics across departments.",
    icon: Award,
  },
];

export default function RdCellView() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800">
      <Header />

      {/* HERO BANNER - Standard Lighter Overlay */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />

        <div className="relative z-10 w-full max-w-[96%] mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffd15c]" />
            <span>Academic &amp; Research Excellence • Established 11-06-2013</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            Research and Development (R&amp;D) Cell
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Madanapalle Institute of Technology &amp; Science • Deemed to be University
          </p>
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
            <li className="text-[#ffd15c] font-semibold">
              R&amp;D Cell
            </li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <main className="w-full max-w-[96%] mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-12">
        {/* Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <Link
            to="/cells"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#990000] transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-xs hover:shadow-sm self-start"
          >
            <ArrowLeft className="w-4 h-4 text-[#990000]" />
            <span>Back to Cells &amp; Committees</span>
          </Link>

          <Link
            to="/research"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#990000] hover:text-[#800000] transition-colors bg-red-50 hover:bg-red-100/70 px-4 py-2 rounded-xl border border-[#990000]/20 self-start sm:self-auto"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore Research Portal &amp; Publications</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2-COLUMN BALANCED WIDE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* PRIMARY CONTENT AREA (7-8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            {/* ABOUT R&D CELL CARD */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                  <div className="space-y-1">
                    <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-red-50 text-[#990000] rounded-lg border border-[#990000]/20">
                      R&amp;D Cell Formation
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44]">
                      About the Cell
                    </h2>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 bg-slate-50 px-3.5 py-1.5 rounded-xl border border-gray-200 shrink-0">
                    <Calendar className="w-4 h-4 text-[#990000]" />
                    <span>Constituted: <strong>11-06-2013</strong></span>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed text-justify">
                  <p>
                    In pursuance of the Institute vision, to enhance academic excellence, foster innovation, industry collaborations and contribute to advancements in the field of education and research, Madanapalle Institute of Technology &amp; Science - Deemed to be University has constituted the <strong>Research and Development (R&amp;D) CelI on 11-06-2013</strong> to scrutinize the matters related to Research Publications, Research Project Proposals and Consultancy.
                  </p>
                  <p>
                    This cell will also focus on identifying and undertaking research projects, coordinating research activities across departments, assisting in the commercialization of research outcomes and patents, developing new knowledge, and contributing to the overall growth of the Institution.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* ADVISORY BOARD TABLE */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-100">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                      <Users className="w-7 h-7 text-[#990000]" />
                      <span>Advisory Board Members</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Governing advisory board responsible for research scrutinization, policy governance, and consultancy oversight.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#990000] !text-white text-white font-bold">
                        <tr>
                          <th className="p-3.5 text-center w-16">Sl. No.</th>
                          <th className="p-3.5">Name</th>
                          <th className="p-3.5">Designation</th>
                          <th className="p-3.5 text-center">Position in the Advisory Board</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {advisoryBoard.map((m) => (
                          <tr key={m.sno} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 text-center font-bold text-slate-500">{m.sno}</td>
                            <td className="p-3.5 font-bold text-[#0f2a44]">{m.name}</td>
                            <td className="p-3.5 text-slate-700">{m.designation}</td>
                            <td className="p-3.5 text-center">
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                  m.position === "Chairman"
                                    ? "bg-red-100 text-[#990000] font-bold"
                                    : m.position.includes("In-Charge")
                                    ? "bg-amber-100 text-amber-900 font-bold"
                                    : "bg-slate-100 text-slate-700"
                                }`}
                              >
                                {m.position}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* KEY FOCUS AREAS / MANDATE */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
                <div className="pb-4 border-b border-gray-100">
                  <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] flex items-center gap-3">
                    <Lightbulb className="w-7 h-7 text-[#990000]" />
                    <span>Key Objectives &amp; Focus Areas</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Strategic pillars propelling MITS towards premier global research ranking and impactful societal innovation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {focusAreas.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="p-5 rounded-xl border border-gray-200 bg-slate-50/70 hover:bg-white hover:border-[#990000]/30 hover:shadow-xs transition-all space-y-2 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-red-50 text-[#990000] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-sm sm:text-base text-[#0f2a44] group-hover:text-[#990000] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* SIDEBAR / CONTACT DETAILS (4-5 cols) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            {/* R&D LEADERSHIP & CONTACT CARD */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden sticky top-24">
              <div className="bg-[#990000] px-5 py-3.5 border-b border-[#800000]">
                <h2 className="!text-white text-white font-display text-sm sm:text-base font-bold tracking-wider uppercase m-0 p-0 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#ffd15c]" />
                  <span>R&amp;D Cell Leadership</span>
                </h2>
              </div>

              <div className="p-5 space-y-5">
                {/* 4 Officials */}
                <div className="space-y-4">
                  {contactPersonnel.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-gray-100 bg-slate-50/80 hover:bg-white hover:border-[#990000]/20 transition-all space-y-1"
                    >
                      <h4 className="font-bold text-sm text-[#0f2a44]">{c.name}</h4>
                      <p className="text-xs font-semibold text-[#990000]">{c.role}</p>
                      <p className="text-xs text-slate-500">{c.department}</p>
                    </div>
                  ))}
                </div>

                {/* Institutional Address, Phone & Email */}
                <div className="pt-4 border-t border-gray-100 space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block mb-0.5">Address :</strong>
                      <p className="leading-relaxed">
                        Madanapalle Institute of Technology &amp; Science<br />
                        Deemed to be University<br />
                        Madanapalle-Kadiri Road<br />
                        kurabalakota Mandal, Madanapalle-517325<br />
                        Andhra Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#990000] shrink-0" />
                    <div>
                      <strong className="text-slate-800 block">Phone :</strong>
                      <p className="text-slate-700">+91-8571-280255, 280706</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#990000] shrink-0" />
                    <div>
                      <strong className="text-slate-800 block">E Mail :</strong>
                      <a
                        href="mailto:dean_research@mits.ac.in"
                        className="text-[#990000] hover:underline font-semibold break-all"
                      >
                        dean_research@mits.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK LINK TO RESEARCH PORTAL */}
            <div className="bg-gradient-to-br from-[#0f2a44] to-[#1e3a5f] rounded-2xl p-6 text-white shadow-sm space-y-3 border border-slate-700">
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-400/30">
                Central Research Portal
              </span>
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                Research Ecosystem at MITS
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Explore comprehensive statistics on 3,085+ Scopus publications, ₹118.44 Cr sponsored projects, patent portfolios, and faculty incentive schemes.
              </p>
              <Link
                to="/research"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#ffb300] text-slate-950 hover:bg-[#ffc107] transition-all shadow-xs mt-2"
              >
                <span>Visit Research Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

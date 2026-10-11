import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft, BookOpen, FileText, ExternalLink,
  Users, Phone, Mail, MapPin, CheckCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const objectives = [
  "To establish a structured evaluation system covering aptitude, NEP-allied courses, core subjects, and emerging disciplines.",
  "To assess students' academic knowledge, aptitude, and higher-order thinking skills across AICTE-approved institutions.",
  "To conduct regular assessments with an extensive and frequently updated question bank to maintain assessment relevance and depth.",
  "To offer both proctored and self-paced assessments, ensuring accessibility and adaptability for students across different academic levels.",
  "To provide detailed performance analysis through a dynamic dashboard, helping institutions and students recognize areas of improvement.",
  "To measure students' skill development and readiness for industry-specific roles, ensuring they are well-prepared for employment opportunities.",
  "To help students track their academic growth and prepare for higher studies, professional certifications, and job placements.",
];

const documents = [
  { title: "Coordination Team for PARAKH (AY 2026-27)", href: "https://mits.ac.in/assets/pdf/assoc/PARAKH Co-coordinators 2026-27.pdf" },
  { title: "AICTE PARAKH - Institute Profile", href: "https://mits.ac.in/assets/pdf/assoc/AICTE PARAKH - Institute Profile.pdf" },
  { title: "AICTE PARAKH - Committee Office Order 2025-26", href: "https://mits.ac.in/assets/pdf/assoc/Office Order-PARAKH.pdf" },
  { title: "AICTE PARAKH - Committee Office Order 2024-25", href: "https://mits.ac.in/assets/pdf/assoc/AICTE PARAKH - Committee Office Order-2025.pdf" },
  { title: "SOP for AICTE PARAKH", href: "https://mits.ac.in/assets/pdf/assoc/SOP for AICTE PARAKH.pdf" },
];

const members = [
  { sno: "1",  name: "Dr. C. Yuvaraj",          designation: "Vice Chancellor (I/c)",                    position: "Chairman",                          email: "principal@mits.ac.in" },
  { sno: "2",  name: "Dr. P. Ramanathan",        designation: "Professor, Dept of ECE",                   position: "Member Secretary",                  email: "drramanathanp@mits.ac.in" },
  { sno: "3",  name: "Mr. P. Sabarishkumar",     designation: "Assistant Professor, Dept of CE",          position: "Member",                            email: "sabarishkumarp@mits.ac.in" },
  { sno: "4",  name: "Dr. Thrinadh Jadam",       designation: "Assistant Professor, Dept of ME",          position: "Member",                            email: "drthrinadhj@mits.ac.in" },
  { sno: "5",  name: "Mrs. V. Sai Anusha",       designation: "Assistant Professor, Dept of ECE",         position: "Member",                            email: "saianushav@mits.ac.in" },
  { sno: "6",  name: "Dr. Vineeth Kumar",        designation: "Assistant Professor, Dept of EEE",         position: "Member",                            email: "drvineetkumar@mits.ac.in" },
  { sno: "7",  name: "Mr. B. Anandaraj",         designation: "Assistant Professor, Dept of CSE",         position: "Member",                            email: "anandarajb@mits.ac.in" },
  { sno: "8",  name: "Mr. Roni Das",             designation: "Assistant Professor, Dept of CSE (CS)",    position: "Member",                            email: "ronidas@mits.ac.in" },
  { sno: "10", name: "Mr. K. Chandra Sekhar",    designation: "Assistant Professor, Dept of CSE (AI)",    position: "Member",                            email: "chandrasekhark@mits.ac.in" },
  { sno: "11", name: "Ms. Shivani Jha",          designation: "Assistant Professor, Dept of CSE (AI and ML)", position: "Member",                        email: "shivani@mits.ac.in" },
  { sno: "12", name: "Mr. Noorbhasha Junnubabu", designation: "Assistant Professor, Dept of CST",         position: "Member",                            email: "junnubabun@mits.ac.in" },
  { sno: "13", name: "Dr. N. Gangisetty",        designation: "Professor, Dept of MBA",                   position: "Member",                            email: "gangisetty@mits.ac.in" },
  { sno: "14", name: "Mrs. S. Suganya",          designation: "Assistant Professor, Dept of MCA",         position: "Member",                            email: "suganyas@mits.ac.in" },
  { sno: "15", name: "Mr. Sridhar. N",           designation: "Assistant Professor, Dept of EEE",         position: "Coordinator - AICTE PARAKH",         email: "sridharn@mits.ac.in" },
  { sno: "16", name: "Mr. Darshan B V",          designation: "Assistant Professor, Dept of ME",          position: "Assistant Coordinator - AICTE PARAKH", email: "mitsparakh@mits.ac.in" },
];

export default function ParakhView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />

      {/* HERO */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 bg-gradient-to-b from-black/15 via-transparent to-black/30" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 drop-shadow-sm">
            Cells &amp; Committees • Assessment Initiatives
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            AICTE Student Learning Assessment PARAKH
          </h1>
          <p className="text-white/95 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            Performance Assessment, Review and Analysis of Knowledge for Holistic Development
          </p>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells &amp; Committees</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold truncate max-w-[220px]">AICTE PARAKH</li>
          </ol>
        </nav>
      </section>

      <main className="container mx-auto px-4 py-10 md:py-14 max-w-6xl">
        <button
          onClick={() => navigate("/cells")}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells &amp; Committees
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN COLUMN */}
          <div className="lg:col-span-2 space-y-8">

            {/* ABOUT */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="mb-4 text-[#8b0000] font-display text-2xl font-bold flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-[#8b0000]" />
                  About The AICTE Student Learning Assessment PARAKH
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify mb-6">
                  AICTE Student Learning Assessment PARAKH (Performance Assessment, Review and Analysis of Knowledge for
                  Holistic Development) is a competency-based assessment initiative aligned with India's National Education
                  Policy (NEP), focusing on evaluating students' Academic, Aptitude, and Higher-Order Thinking Skills which
                  targets learners in AICTE-approved institutions across Engineering, Management, Computer Applications, and
                  Emerging Disciplines to ensure a standardized evaluation process. To achieve this, the assessment follows a
                  structured pattern based on the student's academic year, incorporating aptitude, NEP-allied courses, core
                  subjects, and emerging areas, thereby providing a holistic evaluation framework. Ensuring flexibility and
                  accessibility, the assessment is available in both proctored and self-paced modes, allowing students to
                  demonstrate their knowledge in a controlled yet adaptable environment. By integrating these features, PARAKH
                  establishes itself as a learner-centric initiative aimed at enhancing the quality of technical education,
                  fostering career advancement opportunities, and guiding policy decisions in higher education.
                </p>

                <h3 className="font-display font-bold text-base text-[#0f2a44] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8b0000]" />
                  Objectives of AICTE SLA PARAKH
                </h3>
                <ul className="space-y-2.5">
                  {objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-[#8b0000]/10 text-[#8b0000] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* DOCUMENTS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="mb-4 text-[#8b0000] font-display text-xl font-bold flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#8b0000]" />
                  Documents &amp; Downloads
                </div>
                <ul className="divide-y divide-gray-100">
                  {documents.map((doc, i) => (
                    <li key={i}>
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 py-3 group hover:bg-amber-50/40 -mx-2 px-2 rounded-lg transition-colors"
                      >
                        <span className="flex items-center gap-2.5 text-sm text-[#0f2a44] group-hover:text-[#b31317] transition-colors font-medium leading-snug">
                          <FileText className="w-4 h-4 shrink-0 text-[#caa74d]" />
                          {doc.title}
                        </span>
                        <ExternalLink className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-[#b31317] transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* COMMITTEE TABLE */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#8b0000]" />
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0f2a44]">
                    Committee for the Academic Year 2025-26
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#8b0000] text-white">
                        <th className="py-3 px-4 text-center w-14 font-semibold border border-white/20">S.No</th>
                        <th className="py-3 px-4 text-left font-semibold border border-white/20">Name</th>
                        <th className="py-3 px-4 text-left font-semibold border border-white/20">Designation</th>
                        <th className="py-3 px-4 text-left font-semibold border border-white/20">Position</th>
                        <th className="py-3 px-4 text-left font-semibold border border-white/20">E-Mail ID</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {members.map((m, idx) => (
                        <tr key={m.sno} className={`hover:bg-amber-50/40 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                          <td className="py-3 px-4 text-center font-medium text-slate-500 border border-slate-100">{m.sno}</td>
                          <td className="py-3 px-4 font-bold text-slate-900 border border-slate-100 whitespace-nowrap">{m.name}</td>
                          <td className="py-3 px-4 text-slate-700 border border-slate-100">{m.designation}</td>
                          <td className="py-3 px-4 border border-slate-100 whitespace-nowrap">
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                              m.position === "Chairman"
                                ? "bg-amber-100 text-amber-900 border border-amber-300"
                                : m.position === "Member Secretary"
                                ? "bg-blue-100 text-blue-900 border border-blue-300"
                                : m.position.startsWith("Coordinator") || m.position.startsWith("Assistant Coordinator")
                                ? "bg-green-100 text-green-900 border border-green-300"
                                : "bg-slate-100 text-slate-800"
                            }`}>
                              {m.position}
                            </span>
                          </td>
                          <td className="py-3 px-4 border border-slate-100 whitespace-nowrap">
                            <a href={`mailto:${m.email}`} className="text-xs text-[#8b0000] hover:underline flex items-center gap-1 font-medium">
                              <Mail className="w-3 h-3 shrink-0" />{m.email}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6">
                <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Phone className="w-4 h-4 text-[#8b0000]" />
                  Contact
                </h3>
                <div className="space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-bold text-[#8b0000]">Mr. N. Sridhar</p>
                    <p className="text-xs text-slate-600">Coordinator - AICTE PARAKH</p>
                    <p className="text-xs text-slate-600">Assistant Professor</p>
                    <p className="text-xs text-slate-600">Department of Electrical and Electronics Engineering</p>
                  </div>
                  <hr className="border-slate-100" />
                  <div>
                    <p className="font-bold text-[#8b0000]">Mr. Darshan B V</p>
                    <p className="text-xs text-slate-600">Assistant Coordinator - AICTE PARAKH</p>
                    <p className="text-xs text-slate-600">Assistant Professor</p>
                    <p className="text-xs text-slate-600">Department of Mechanical Engineering</p>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#8b0000] shrink-0 mt-1" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Madanapalle Institute of Technology &amp; Science<br />
                      Deemed to be University<br />
                      Madanapalle-Kadiri Road<br />
                      Kurabalakota Mandal, Madanapalle-517325<br />
                      Andhra Pradesh, India
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#8b0000] shrink-0" />
                    <p className="text-xs text-slate-600">+91-8571-280255, 280706</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#8b0000] shrink-0" />
                    <a href="mailto:mitsparakh@mits.ac.in" className="text-xs text-[#8b0000] hover:underline font-medium">
                      mitsparakh@mits.ac.in
                    </a>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="bg-gradient-to-br from-[#0f2a44] to-[#1c4066] text-white rounded-2xl shadow-sm p-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#ffd15c] mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-1">AICTE PARAKH Portal</h4>
                <p className="text-xs text-white/85 mb-4 leading-relaxed">
                  Access the official AICTE PARAKH assessment portal for student evaluations and performance analytics.
                </p>
                <a
                  href="https://parakh.aicte-india.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#b31317] hover:bg-[#990000] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Visit PARAKH Portal
                </a>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

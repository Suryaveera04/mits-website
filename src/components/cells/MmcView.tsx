import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft, BookOpen, Users, FileText, ExternalLink,
  MapPin, Phone, Mail, CheckCircle2, Download, Calendar,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const members = [
  { sno: "1",  name: "Dr. P. Ramanathan",    designation: "Principal",                          position: "Chairman",    email: "principal@mits.ac.in" },
  { sno: "2",  name: "Mrs. U. Vijaya Lakshmi", designation: "Senior Manager - Student Counsellor", position: "Member",      email: "vijayalakshmiu@mits.ac.in" },
  { sno: "3",  name: "Dr. Sudheer Kumar Y",   designation: "Assistant Professor - CIVIL",        position: "Member",      email: "sudheerkumary@mits.ac.in" },
  { sno: "4",  name: "Mr. G. Mahammed Rafi",  designation: "Assistant Professor - EEE",          position: "Member",      email: "mahammedrafig@mits.ac.in" },
  { sno: "5",  name: "Dr. Smriti Baruah",     designation: "Assistant Professor - ECE",          position: "Member",      email: "smritib@mits.ac.in" },
  { sno: "6",  name: "Dr. G. Veeresalingam",  designation: "Assistant Professor - MECH",         position: "Member",      email: "drveerasalingamg@mits.ac.in" },
  { sno: "7",  name: "Mrs. G. Vasundara Devi", designation: "Assistant Professor - CSE",         position: "Member",      email: "vasundaradevig@mits.ac.in" },
  { sno: "8",  name: "Mr. Sreenath K.",        designation: "Assistant Professor - AI",           position: "Member",      email: "sreenathk@mits.ac.in" },
  { sno: "9",  name: "Dr. M. Kiran Kumar",     designation: "Assistant Professor - DS",           position: "Member",      email: "kirankumarm@mits.ac.in" },
  { sno: "10", name: "Mr. T. Niranjan Babu",   designation: "Assistant Professor - CS",           position: "Member",      email: "niranjanbabut@mits.ac.in" },
  { sno: "11", name: "Mr. Roni Das",           designation: "Assistant Professor - AI & ML",      position: "Member",      email: "ronidas@mits.ac.in" },
  { sno: "12", name: "Mr. Ashok Dasari",       designation: "Assistant Professor - CST",          position: "Member",      email: "ashokd@mits.ac.in" },
  { sno: "13", name: "Dr. D. Rajesh Kumar",    designation: "Assistant Professor - MBA",          position: "Member",      email: "drrajeshkumar@mits.ac.in" },
  { sno: "14", name: "Mrs. Roopa Prasad",      designation: "Assistant Professor - MCA",          position: "Member",      email: "roopak@mits.ac.in" },
  { sno: "15", name: "Dr. Sunku Sreedhar",     designation: "Assistant Professor - Physics",      position: "Member",      email: "drsreedhars@mits.ac.in" },
  { sno: "16", name: "Dr. C. V. Raju",         designation: "Assistant Professor - Chemistry",    position: "Member",      email: "drvenkateswararajuc@mits.ac.in" },
  { sno: "17", name: "Dr. B. Anitha",          designation: "Sr. Assistant Professor",            position: "Member",      email: "dranithab@mits.ac.in" },
  { sno: "18", name: "Dr. Bibin Mathew",       designation: "Assistant Professor - Maths",        position: "Member",      email: "drbibinmathew@mits.ac.in" },
  { sno: "19", name: "Dr. M. Parvathi",        designation: "Assistant Professor - English",      position: "Coordinator", email: "parvathim@mits.ac.in" },
];

const documents = [
  { title: "Mentoring System",                        href: "https://mits.ac.in/assets/pdf/admin/Mentoring System scan-min.pdf" },
  { title: "Mentor Mentee Office Order 2025",         href: "https://mits.ac.in/assets/pdf/admin/Mentor Mentee Cell-office order-feb 2025.pdf" },
  { title: "Mentor Mentee Office Order 2024",         href: "https://mits.ac.in/assets/pdf/admin/Mentor Mentee office Order.pdf" },
  { title: "Mentor Coordinators",                     href: "https://mits.ac.in/assets/pdf/admin/Mentor Coordinators.pdf" },
  { title: "Student Mentoring Brochure Guidelines",   href: "https://mits.ac.in/assets/pdf/admin/Student Mentoring Brochure Guidelines.pdf" },
  { title: "Mentor-Mentee Interaction Forms",         href: "http://www.mits.ac.in/assets/pdf/admin/Mentor-Mentee Interaction Forms.pdf" },
  { title: "Grading Details",                         href: "http://www.mits.ac.in/assets/pdf/admin/Grading Details.pdf" },
  { title: "Remarks by the Mentor",                   href: "http://www.mits.ac.in/assets/pdf/admin/Remarks by the Mentor.pdf" },
  { title: "MITS-Consolidated Mentoring Meeting Schedules", href: "http://www.mits.ac.in/assets/pdf/admin/MITS-Consolidated Mentoring meeting schedules.pdf" },
];

const highlights = [
  "The mentoring system caters to students' professional, career, personal, and holistic development.",
  "Faculty members are acquainted with the institute's mentoring system during their induction program through structured orientation sessions.",
  "On average, 20–25 students are allotted to each faculty member for mentoring.",
  "The mentor in-charge convenes a meeting once a month, in addition to holding regular, unscheduled meetings with student mentees three to four times per semester.",
  "Currently, the proctoring system at the institutional level is headed by Dr. M. Parvathi, Assistant Professor of English.",
];

export default function MmcView() {
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
            Cells &amp; Committees • Student Support &amp; Welfare
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Mentor – Mentee Cell
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            A structured initiative since 2016 fostering holistic student development through personalised faculty mentoring.
          </p>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells &amp; Committees</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold">Mentor – Mentee Cell</li>
          </ol>
        </nav>
      </section>

      <main className="container mx-auto px-4 py-10 md:py-14 max-w-7xl">
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
                <h2 className="font-display text-2xl font-bold text-[#b31317] mb-4 flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-[#b31317]" />
                  About Mentor – Mentee Cell
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify mb-6">
                  The Mentor-Mentee Program is a crucial element for a successful academic journey and fostering closer connections between faculty and students. Through mentoring, students receive vital support, guidance, and encouragement, enriching their academic experience. Mentors serve as counsellors, helping students stay motivated and excel in their studies. Students can rely on their mentors for assistance with both academic and personal challenges. This program focuses on nurturing student growth and competence while strengthening the bonds between faculty and students.
                </p>

                {/* Mentoring System highlights */}
                <div className="mb-2">
                  <h3 className="font-display font-bold text-[#0f2a44] text-base mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#b31317]" />
                    Mentoring System
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    The institute has an effective and well-structured mentoring system in place. Mentor-Mentee Cell – MITS has been a structured initiative since 2016, designed to support and guide students throughout their academic journey. It promotes a professional relationship between mentors and mentees, ensuring holistic development.
                  </p>
                  <div className="space-y-2.5">
                    {highlights.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                        <CheckCircle2 className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-700 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* COMPREHENSIVE MENTORING SYSTEM */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#b31317] mb-4 flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-[#b31317]" />
                  Comprehensive Mentoring System at the Institution
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    The revised mentoring system, implemented through <strong>AviScio :: MITS (172.16.0.222)</strong> — an integrated digital platform — has been operational since February 2025 to monitor and document mentoring interactions for all B.Tech students. From the odd semester of the academic year 2025-26, M.Tech, MBA, and MCA students are being mapped to mentors and engaged through this platform.
                  </p>
                  <p>
                    The shift to this digital platform marks a significant improvement over the traditional one-page hard copy records and the earlier IMS system. The new digital system provides mentors with comprehensive, real-time access to student data, allowing for deeper analysis, personalised mentoring, and better documentation.
                  </p>
                  <div className="bg-[#fff8e6] border border-[#caa74d]/40 rounded-xl p-4">
                    <p className="text-sm text-[#0f2a44]/85 leading-relaxed">
                      This system serves as a <strong>centralised digital repository</strong>, recording key metrics such as academic progress, attendance records, and mentor-mentee engagements. The platform automatically synchronises real-time academic data — including attendance, academic grades, backlog status, and achievements — into individual student profiles, enabling mentors to analyse performance trends and provide personalised, data-driven guidance.
                    </p>
                  </div>
                  <p>
                    In the system, mentors play a multifaceted role, focusing not only on academic improvement through remedial suggestions, time management strategies, and study plans, but also on holistic development. They guide students in career planning, personality development, and behavioural aspects. Recognising the importance of parental involvement, the institution facilitates periodic parent meetings two to three times a semester, either in person or virtually.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* DOCUMENTS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#b31317] mb-5 flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#b31317]" />
                  Documents &amp; Downloads
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {documents.map((doc, i) => (
                    <a
                      key={i}
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 p-3.5 rounded-xl border border-slate-200 hover:border-[#b31317] hover:bg-[#fff8e6]/40 transition-all group shadow-sm"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <FileText className="w-4 h-4 text-[#caa74d] shrink-0" />
                        <p className="text-sm font-semibold text-slate-800 group-hover:text-[#b31317] transition-colors leading-snug">
                          {doc.title}
                        </p>
                      </div>
                      <Download className="w-4 h-4 text-slate-400 group-hover:text-[#b31317] shrink-0 transition-colors" />
                    </a>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* COMMITTEE MEMBERS TABLE */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0f2a44] flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#b31317]" />
                    Committee Members
                  </h3>
                  <span className="text-xs font-semibold bg-[#b31317]/10 text-[#b31317] px-2.5 py-1 rounded-full">
                    {members.length} Members
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#0f2a44] text-white">
                        <th className="py-3 px-4 text-center w-14 font-semibold border border-white/10">S.No</th>
                        <th className="py-3 px-4 text-left font-semibold border border-white/10">Name</th>
                        <th className="py-3 px-4 text-left font-semibold border border-white/10 hidden sm:table-cell">Designation</th>
                        <th className="py-3 px-4 text-center font-semibold border border-white/10">Position</th>
                        <th className="py-3 px-4 text-left font-semibold border border-white/10 hidden md:table-cell">Email</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {members.map((m, idx) => (
                        <tr
                          key={m.sno}
                          className={`hover:bg-[#fff8e6]/40 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                        >
                          <td className="py-3 px-4 text-center font-medium text-slate-500 border border-slate-100">{m.sno}</td>
                          <td className="py-3 px-4 font-bold text-slate-900 border border-slate-100 whitespace-nowrap">{m.name}</td>
                          <td className="py-3 px-4 text-slate-600 border border-slate-100 hidden sm:table-cell">{m.designation}</td>
                          <td className="py-3 px-4 text-center border border-slate-100 whitespace-nowrap">
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                              m.position === "Chairman"
                                ? "bg-[#fff8e6] text-[#b31317] border border-[#caa74d]/50"
                                : m.position === "Coordinator"
                                ? "bg-[#0f2a44]/10 text-[#0f2a44] border border-[#0f2a44]/20"
                                : "bg-slate-100 text-slate-700"
                            }`}>
                              {m.position}
                            </span>
                          </td>
                          <td className="py-3 px-4 border border-slate-100 hidden md:table-cell">
                            <a
                              href={`mailto:${m.email}`}
                              className="text-xs text-[#b31317] hover:underline flex items-center gap-1 font-medium"
                            >
                              <Mail className="w-3 h-3 shrink-0" />
                              {m.email}
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

            {/* CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6">
                <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Phone className="w-4 h-4 text-[#b31317]" />
                  Contact
                </h3>
                <div className="space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-bold text-slate-900">Dr. M. Parvathi</p>
                    <p className="text-xs text-[#b31317] font-semibold mt-0.5">Coordinator, Mentor-Mentee Cell</p>
                    <p className="text-xs text-slate-500 mt-0.5">Assistant Professor – English &amp; Foreign Languages</p>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Madanapalle Institute of Technology &amp; Science, Deemed to be University,
                      Madanapalle-Kadiri Road, Kurabalakota Mandal, Madanapalle – 517325, Andhra Pradesh, India
                    </p>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700 space-y-0.5">
                      <p>+91-8571-280255</p>
                      <p>+91-8571-280706</p>
                    </div>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#b31317] shrink-0" />
                    <a href="mailto:parvathim@mits.ac.in" className="text-xs text-[#b31317] hover:underline font-medium">
                      parvathim@mits.ac.in
                    </a>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* DIGITAL PLATFORM BADGE */}
            <ScrollReveal>
              <section className="bg-gradient-to-br from-[#0f2a44] to-[#1c4066] text-white rounded-2xl shadow-sm p-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#ffd15c] mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-1">Digital Mentoring</h4>
                <p className="text-xs text-white/80 mb-3 leading-relaxed">
                  Powered by AviScio :: MITS — an integrated digital platform operational since February 2025.
                </p>
                <div className="bg-white/10 rounded-lg p-3 text-center border border-white/10">
                  <p className="text-[11px] uppercase tracking-wider text-[#ffd15c] font-bold">Active Since</p>
                  <p className="font-bold text-base text-white mt-0.5">February 2025</p>
                </div>
                <a
                  href="https://mits.ac.in/mentor-menteecell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#b31317] hover:bg-[#990000] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Original Page
                </a>
              </section>
            </ScrollReveal>

            {/* COMPLIANCE PORTALS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-5">
                <h3 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-3">
                  Compliance Portals
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "IQAC", to: "/cells/iqac" },
                    { label: "NAAC", to: "/naac" },
                    { label: "NIRF Rankings", to: "/nirf" },
                    { label: "Public Disclosures", to: "/psd" },
                  ].map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="flex items-center justify-between text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-1.5 border-b border-gray-50 last:border-0 group"
                    >
                      {p.label}
                      <ExternalLink className="w-3.5 h-3.5 text-[#caa74d] group-hover:text-[#b31317] transition-colors" />
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

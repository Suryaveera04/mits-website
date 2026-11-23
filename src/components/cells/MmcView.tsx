import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Users,
  FileText,
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  FileDown,
  Calendar,
  ChevronRight,
  Sparkles,
  Layers,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "https://mits.edu/";

const members = [
  { sno: "1", name: "Dr. P. Ramanathan", designation: "Principal", position: "Chairman", email: "principal@mits.ac.in" },
  { sno: "2", name: "Mrs. U. Vijaya Lakshmi", designation: "Senior Manager - Student Counsellor", position: "Member", email: "vijayalakshmiu@mits.ac.in" },
  { sno: "3", name: "Dr. Sudheer Kumar Y", designation: "Assistant Professor - CIVIL", position: "Member", email: "sudheerkumary@mits.ac.in" },
  { sno: "4", name: "Mr. G. Mahammed Rafi", designation: "Assistant Professor - EEE", position: "Member", email: "mahammedrafig@mits.ac.in" },
  { sno: "5", name: "Dr. Smriti Baruah", designation: "Assistant Professor - ECE", position: "Member", email: "smritib@mits.ac.in" },
  { sno: "6", name: "Dr. G. Veeresalingam", designation: "Assistant Professor - MECH", position: "Member", email: "drveerasalingamg@mits.ac.in" },
  { sno: "7", name: "Mrs. G. Vasundara Devi", designation: "Assistant Professor - CSE", position: "Member", email: "vasundaradevig@mits.ac.in" },
  { sno: "8", name: "Mr. Sreenath K.", designation: "Assistant Professor - AI", position: "Member", email: "sreenathk@mits.ac.in" },
  { sno: "9", name: "Dr. M. Kiran Kumar", designation: "Assistant Professor - DS", position: "Member", email: "kirankumarm@mits.ac.in" },
  { sno: "10", name: "Mr. T. Niranjan Babu", designation: "Assistant Professor - CS", position: "Member", email: "niranjanbabut@mits.ac.in" },
  { sno: "11", name: "Mr. Roni Das", designation: "Assistant Professor - AI & ML", position: "Member", email: "ronidas@mits.ac.in" },
  { sno: "12", name: "Mr. Ashok Dasari", designation: "Assistant Professor - CST", position: "Member", email: "ashokd@mits.ac.in" },
  { sno: "13", name: "Dr. D. Rajesh Kumar", designation: "Assistant Professor - MBA", position: "Member", email: "drrajeshkumar@mits.ac.in" },
  { sno: "14", name: "Mrs. Roopa Prasad", designation: "Assistant Professor - MCA", position: "Member", email: "roopak@mits.ac.in" },
  { sno: "15", name: "Dr. Sunku Sreedhar", designation: "Assistant Professor - Physics", position: "Member", email: "drsreedhars@mits.ac.in" },
  { sno: "16", name: "Dr. C. V. Raju", designation: "Assistant Professor - Chemistry", position: "Member", email: "drvenkateswararajuc@mits.ac.in" },
  { sno: "17", name: "Dr. B. Anitha", designation: "Sr. Assistant Professor", position: "Member", email: "dranithab@mits.ac.in" },
  { sno: "18", name: "Dr. Bibin Mathew", designation: "Assistant Professor - Maths", position: "Member", email: "drbibinmathew@mits.ac.in" },
  { sno: "19", name: "Dr. M. Parvathi", designation: "Assistant Professor - English", position: "Coordinator", email: "parvathim@mits.ac.in" },
];

const documents = [
  { title: "Mentoring System", href: "https://mits.ac.in/assets/pdf/admin/Mentoring%20System%20scan-min.pdf" },
  { title: "Mentor Mentee Office Order 2025", href: "https://mits.ac.in/assets/pdf/admin/Mentor%20Mentee%20Cell-office%20order-feb%202025.pdf" },
  { title: "Mentor Mentee Office Order 2024", href: "https://mits.ac.in/assets/pdf/admin/Mentor%20Mentee%20office%20Order.pdf" },
  { title: "Mentor Coordinators", href: "https://mits.ac.in/assets/pdf/admin/Mentor%20Coordinators.pdf" },
  { title: "Student Mentoring Brochure Guidelines", href: "https://mits.ac.in/assets/pdf/admin/Student%20Mentoring%20Brochure%20Guidelines.pdf" },
  { title: "Mentor-Mentee Interaction Forms", href: "http://www.mits.ac.in/assets/pdf/admin/Mentor-Mentee%20Interaction%20Forms.pdf" },
  { title: "Grading Details", href: "http://www.mits.ac.in/assets/pdf/admin/Grading%20Details.pdf" },
  { title: "Remarks by the Mentor", href: "http://www.mits.ac.in/assets/pdf/admin/Remarks%20by%20the%20Mentor.pdf" },
  { title: "MITS-Consolidated Mentoring Meeting Schedules", href: "http://www.mits.ac.in/assets/pdf/admin/MITS-Consolidated%20Mentoring%20meeting%20schedules.pdf" },
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
    <div className="min-h-screen bg-[#fafaf7] text-slate-800">
      <Header />

      {/* HERO SECTION */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/25 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 drop-shadow-sm inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffd15c]" />
            <span>Cells &amp; Committees • Student Support &amp; Welfare</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            Mentor – Mentee Cell
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            A structured initiative since 2016 fostering holistic student development through personalised faculty mentoring.
          </p>
        </div>
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
            <li className="text-[#ffd15c] font-semibold">Mentor – Mentee Cell</li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTAINER */}
      <main className="w-full max-w-[96%] mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-12">
        <button
          onClick={() => navigate("/cells")}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells &amp; Committees
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* MAIN COLUMN (7 cols on lg, 8 cols on xl) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            {/* ABOUT */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <BookOpen className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-[#b31317]">
                      About Mentor – Mentee Cell
                    </h2>
                    <p className="text-xs text-[#0f2a44]/60">
                      Nurturing academic, career, and personal excellence across every student cohort
                    </p>
                  </div>
                </div>

                <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 !text-justify text-justify">
                  <p>
                    The Mentor-Mentee Program is a crucial element for a successful academic journey and fostering closer connections between faculty and students. Through mentoring, students receive vital support, guidance, and encouragement, enriching their academic experience. Mentors serve as counsellors, helping students stay motivated and excel in their studies. Students can rely on their mentors for assistance with both academic and personal challenges. This program focuses on nurturing student growth and competence while strengthening the bonds between faculty and students.
                  </p>
                </div>

                {/* Mentoring System highlights */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="font-display font-bold text-[#0f2a44] text-base mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#b31317]" />
                    Mentoring System
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4 !text-justify text-justify">
                    The institute has an effective and well-structured mentoring system in place. Mentor-Mentee Cell – MITS has been a structured initiative since 2016, designed to support and guide students throughout their academic journey. It promotes a professional relationship between mentors and mentees, ensuring holistic development.
                  </p>
                  <div className="space-y-2.5">
                    {highlights.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                        <CheckCircle2 className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-700 leading-relaxed !text-justify text-justify">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* COMPREHENSIVE MENTORING SYSTEM */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <Layers className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                      Comprehensive Mentoring System at the Institution
                    </h2>
                    <p className="text-xs text-[#0f2a44]/60">
                      Real-time digital profiling and holistic student development via AviScio :: MITS
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed !text-justify text-justify">
                  <p>
                    The revised mentoring system, implemented through <strong>AviScio :: MITS (172.16.0.222)</strong> — an integrated digital platform — has been operational since February 2025 to monitor and document mentoring interactions for all B.Tech students. From the odd semester of the academic year 2025-26, M.Tech, MBA, and MCA students are being mapped to mentors and engaged through this platform.
                  </p>
                  <p>
                    The shift to this digital platform marks a significant improvement over the traditional one-page hard copy records and the earlier IMS system. The new digital system provides mentors with comprehensive, real-time access to student data, allowing for deeper analysis, personalised mentoring, and better documentation.
                  </p>
                  <div className="bg-[#fff8e6] border border-[#caa74d]/40 rounded-xl p-4.5 my-3">
                    <p className="text-sm text-[#0f2a44] leading-relaxed !text-justify text-justify">
                      This system serves as a <strong>centralised digital repository</strong>, recording key metrics such as academic progress, attendance records, and mentor-mentee engagements. The platform automatically synchronises real-time academic data — including attendance, academic grades, backlog status, and achievements — into individual student profiles, enabling mentors to analyse performance trends and provide personalised, data-driven guidance.
                    </p>
                  </div>
                  <p>
                    In the system, mentors play a multifaceted role, focusing not only on academic improvement through remedial suggestions, time management strategies, and study plans, but also on holistic development. They guide students in career planning, personality development, and behavioural aspects. Recognising the importance of parental involvement, the institution facilitates periodic parent meetings two to three times a semester, either in person or virtually.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* DOCUMENTS (SINGLE-LINE STYLE) */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                      <FileDown className="w-5 h-5 text-[#b31317]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44]">
                        Documents &amp; Downloads
                      </h3>
                      <p className="text-xs text-[#0f2a44]/60">Mentoring schedules, forms, brochures, and official cell appointment orders</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-[#0f2a44] rounded-full">
                    {documents.length} Documents
                  </span>
                </div>

                <div className="divide-y divide-gray-100">
                  {documents.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-3.5 px-3 sm:px-4 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <span className="text-sm sm:text-base text-[#0f2a44] font-medium group-hover:text-[#b31317] transition-colors pr-4">
                        {doc.title}
                      </span>
                      <span className="shrink-0 text-slate-400 group-hover:text-[#b31317] transition-colors p-1">
                        <FileDown className="w-5 h-5 text-slate-500 group-hover:text-[#b31317]" />
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* COMMITTEE MEMBERS TABLE */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0f2a44] mb-1 flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#b31317]" />
                    Committee Members
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Institutional mentor coordinators across academic disciplines and senior administration.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full border-collapse text-xs sm:text-sm whitespace-nowrap min-w-[900px]">
                    <thead>
                      <tr className="bg-[#b31317] text-white font-semibold">
                        <th className="py-3 px-4 text-center w-16">S.No</th>
                        <th className="py-3 px-4 text-left">Name</th>
                        <th className="py-3 px-6 text-center">Designation</th>
                        <th className="py-3 px-4 text-center">Position</th>
                        <th className="py-3 px-6 text-center">Contact Email-ID</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {members.map((member, idx) => (
                        <tr
                          key={member.sno}
                          className={`hover:bg-amber-50/40 transition-colors ${
                            idx % 2 === 1 ? "bg-slate-50/50" : ""
                          }`}
                        >
                          <td className="py-3.5 px-4 text-center font-bold text-slate-500 whitespace-nowrap">
                            {member.sno}
                          </td>
                          <td className="py-3.5 px-4 text-left font-semibold text-slate-900 whitespace-nowrap">
                            {member.name}
                          </td>
                          <td className="py-3.5 px-6 text-center text-slate-700 whitespace-nowrap">
                            {member.designation}
                          </td>
                          <td className="py-3.5 px-4 text-center font-medium text-slate-900 whitespace-nowrap">
                            <span className="whitespace-nowrap">
                              {member.position}
                            </span>
                          </td>
                          <td className="py-3.5 px-6 text-center whitespace-nowrap">
                            <a
                              href={`mailto:${member.email}`}
                              className="text-[#b31317] hover:underline font-mono text-xs whitespace-nowrap inline-block"
                            >
                              {member.email}
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

          {/* SIDEBAR (5 cols on lg, 4 cols on xl - Increased Width) */}
          <aside className="lg:col-span-5 xl:col-span-4 space-y-6">
            {/* CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden text-left">
                <div className="bg-[#b31317] px-6 py-4">
                  <h3 className="font-display text-lg font-bold !text-white text-white tracking-wide">Contact</h3>
                </div>
                <div className="p-6 space-y-5 text-sm text-slate-700">
                  <div className="text-left">
                    <p className="font-bold text-[#0f2a44] text-lg !text-left">Dr. M. Parvathi</p>
                    <p className="text-sm text-[#b31317] font-semibold mt-0.5 !text-left">
                      Coordinator, Mentor-Mentee Cell
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 !text-left">
                      Assistant Professor – English &amp; Foreign Languages
                    </p>
                  </div>
                  <hr className="border-gray-100" />
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                    <div className="text-xs sm:text-sm leading-relaxed text-left space-y-0.5">
                      <p className="font-semibold text-[#0f2a44] !text-left">Address :</p>
                      <p className="font-bold text-[#0f2a44] !text-left">Madanapalle Institute of Technology &amp; Science</p>
                      <p className="!text-left">Deemed to be University</p>
                      <p className="!text-left">Madanapalle-Kadiri Road</p>
                      <p className="!text-left">Kurabalakota Mandal, Madanapalle-517325</p>
                      <p className="!text-left">Andhra Pradesh, India</p>
                    </div>
                  </div>
                  <hr className="border-gray-100" />
                  <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                    <Phone className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                    <div className="text-left">
                      <p className="font-semibold text-[#0f2a44] !text-left">Phone :</p>
                      <p className="text-slate-600 !text-left">+91-8571-280255; 280706</p>
                    </div>
                  </div>
                  <hr className="border-gray-100" />
                  <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                    <Mail className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                    <div className="text-left">
                      <p className="font-semibold text-[#0f2a44] !text-left">Email :</p>
                      <a
                        href="mailto:parvathim@mits.ac.in"
                        className="text-[#b31317] hover:underline font-semibold whitespace-nowrap block"
                      >
                        parvathim@mits.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* DIGITAL PLATFORM BADGE */}
            <ScrollReveal>
              <div className="bg-[#0f2a44] text-white p-6 rounded-2xl shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-[#ffd15c] font-semibold text-xs tracking-wider uppercase">
                  <Layers className="w-4 h-4 text-[#ffd15c]" />
                  <span>Digital Campus Initiative</span>
                </div>
                <h4 className="font-display font-bold text-lg text-white">AviScio :: MITS</h4>
                <p className="text-xs text-white/80 leading-relaxed !text-justify text-justify">
                  Integrated internal web platform operating at IP <strong>172.16.0.222</strong> for automated real-time academic synchronisation, attendance monitoring, and proactive mentoring guidance.
                </p>
                <div className="pt-2">
                  <span className="text-[11px] font-mono bg-white/10 text-white/90 px-3 py-1.5 rounded-lg inline-block">
                    Status: Active (Since Feb 2025)
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* COMPLIANCE & SAFETY PORTALS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-5">
                <h3 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-3">
                  Safety &amp; Compliance Portals
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Grievance Redressal Cell (GRC)", to: "/grc" },
                    { label: "Anti-Ragging Cell", to: "/anti-ragging" },
                    { label: "SC & ST Cell", to: "/sc-st-cell" },
                    { label: "Minority Cell", to: "/minoritycell" },
                    { label: "Psychological Counselling Cell (PCC)", to: "/pcc" },
                    { label: "Women Empowerment Cell (WEC)", to: "/wec" },
                    { label: "Internal Complaints Committee (ICC)", to: "/cells/icc" },
                    { label: "IQAC", to: "/cells/iqac" },
                  ].map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="flex items-center justify-between text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-1.5 border-b border-gray-50 last:border-0 group"
                    >
                      {p.label}
                      <ChevronRight className="w-3.5 h-3.5 text-[#caa74d] group-hover:text-[#b31317] transition-colors" />
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

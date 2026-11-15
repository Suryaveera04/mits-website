import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Award,
  Users,
  Calendar,
  FileText,
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Bookmark,
  GraduationCap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

// Chapter Codes Table Data
const chapterCodes = [
  { sno: "1", department: "Department of Mechanical Engineering", code: "517325/MITS/MC" },
  { sno: "2", department: "Department of Electrical & Electronics Engineering", code: "517325/MITS/EE" },
  { sno: "3", department: "Department of Electronics & Communication Engineering", code: "517325/MITS/EC" },
  {
    sno: "4",
    department: "Department of Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    code: "517325/MITS/AM",
  },
  { sno: "5", department: "Department of Computer Science & Engineering", code: "517325/MITS/CS" },
  { sno: "6", department: "Department of Computer Science and Engineering (Data Science)", code: "517325/MITS/DS" },
];

// Department Coordinators Table Data
const coordinators = [
  {
    sno: "1",
    name: "Dr. C. Yuvaraj",
    designation: "Vice Chancellor (I/c)",
    position: "Chairman",
    email: "vicechancellor@mits.ac.in",
  },
  {
    sno: "2",
    name: "Dr. P. Ramanathan",
    designation: "Principal",
    position: "Member",
    email: "drramanathanp@mits.ac.in",
  },
  {
    sno: "3",
    name: "Dr. S. Baskaran",
    designation: "Assoc. Professor & Head, ME",
    position: "Member",
    email: "mehod@mits.ac.in",
  },
  {
    sno: "4",
    name: "Dr. A. V. Pavan Kumar",
    designation: "Professor & Asst. Dean Accreditations",
    position: "Member",
    email: "eeehod@mits.ac.in",
  },
  {
    sno: "5",
    name: "Dr. S. Padma",
    designation: "Assoc. Professor & Head, CSE (AI and ML)",
    position: "Member",
    email: "drpadmas@mits.ac.in",
  },
  {
    sno: "6",
    name: "Ms. Revathi K.",
    designation: "Assistant Professor, EEE",
    position: "Co-Coordinator",
    email: "revathik@mits.ac.in",
  },
];

// Documents & Chapter Certificates
const chapterCertificates = [
  {
    label: "Faculty Members IEI",
    url: "https://mits.ac.in/assets/pdf/assoc/Faculty Members IEI.pdf",
    tag: "Faculty List",
  },
  {
    label: "IEI Committee Office Order 2025",
    url: "https://mits.ac.in/assets/pdf/assoc/IEI Committee Office Order 2025.pdf",
    tag: "Office Order",
  },
  {
    label: "Chapter Certificate — ME",
    url: "https://mits.ac.in/assets/pdf/assoc/Chapter Certificate-ME.pdf",
    tag: "Mechanical",
  },
  {
    label: "Chapter Certificate — EEE",
    url: "https://mits.ac.in/assets/pdf/assoc/Chapter Certificate-EEE.pdf",
    tag: "Electrical",
  },
  {
    label: "Chapter Certificate — ECE",
    url: "https://mits.ac.in/assets/pdf/assoc/Chapter Certificate-ECE.pdf",
    tag: "Electronics",
  },
  {
    label: "Chapter Certificate — CSE",
    url: "https://mits.ac.in/assets/pdf/assoc/Chapter Certificate CSE.pdf",
    tag: "Computer Science",
  },
  {
    label: "Chapter Certificate — CSE (AI&ML)",
    url: "https://mits.ac.in/assets/pdf/assoc/Chapter Certificate CSE (AI&ML).pdf",
    tag: "AI & ML",
  },
  {
    label: "Chapter Certificate — CSE (DS)",
    url: "https://mits.ac.in/assets/pdf/assoc/Chapter Certificate DS.pdf",
    tag: "Data Science",
  },
  {
    label: "The Institution Engineers (IEI) Certificate",
    url: "https://mits.ac.in/assets/pdf/assoc/The Institution Engineers (IEI) certificate.pdf",
    tag: "Institutional",
  },
];

// Events List with verified live URLs
const eventsList = [
  {
    title:
      "An Industry Insight on “Energy Conservation – Watt You Save Matters!” was organised by Department of Electrical and Electronics Engineering In Association with IEI Students’ Chapter and IIIC on 03rd February 2026.",
    url: "https://mits.ac.in/assets/pdf/eee/Report%20on%20Industry%20Insight%20on%20Energy%20Conseravtion%20-%20Watt%20You%20Save%20Matters.pdf",
    dept: "Electrical & Electronics Engineering",
    date: "03 February 2026",
  },
  {
    title:
      "A One week training program on “ANSYS & Space Claim” was organized by Department of Mechanical Engineering In association with IEI Student Chapter from 13.10.2025 to 18.10.2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/ANSYS & Space Claim - Event Report_IEI_ME_13.10.2025-18.10.2025-min.pdf",
    dept: "Mechanical Engineering",
    date: "13.10.2025 – 18.10.2025",
  },
  {
    title:
      "A One Day Workshop on “Career Development in Mechanical Engineering through Computational Analysis” was organized by Department of Mechanical Engineering In association with IEI Student Chapter on 12.09.2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Career Development in Mechanical Engineering through Computational Analysis Event Report_IEI_ME_12.09.2025-min.pdf",
    dept: "Mechanical Engineering",
    date: "12.09.2025",
  },
  {
    title:
      "The Poster Presentation on Cutting-Edge Technologies was organized by the Department of Electronics and Communication Engineering in association with the IEI (ECE) Student’s Forum, at MITS on 29 December 2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Cutting-Edge Technologies  - Event Report_IEI_ECE_ 29-12-2025-min.pdf",
    dept: "Electronics & Communication Engineering",
    date: "29 December 2025",
  },
  {
    title:
      "A Guest Lecture on “EEE in the 21st Century: Career Paths & Emerging Trends” was organised by Department of Electrical and Electronics Engineering In association with The Institution of Engineers (India) [IEI] on 09.05.2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/EEE in the 21st Century  Career Paths & Emerging Trends - Event Report _IEI_EEE-09.05.2025-min.pdf",
    dept: "Electrical & Electronics Engineering",
    date: "09.05.2025",
  },
  {
    title:
      "A Guest Lecture on “Emerging Trends and Skill Sets in Core Electronics Careers” was organized by Department of Electronics & Communication Engineering In Association with MITS IEI Student’s Forum 15.11.2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Emerging Trends and Skill Sets in Core Electronics Careers Event Report_IEI_ECE_15-11-2025-min.pdf",
    dept: "Electronics & Communication Engineering",
    date: "15.11.2025",
  },
  {
    title:
      "A Hands on Workshop on “IC Engine Dismantling & Assembly” was organized by Department of Mechanical Engineering In association with Institution of Engineers-INDIA Student Chapter- Mechanical Engineering on 08-10-2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/IC Engine Dismantling & Assembly Event Report_IEI_ME_08.10.2025-min.pdf",
    dept: "Mechanical Engineering",
    date: "08.10.2025",
  },
  {
    title:
      "A Seminar on “Integrating VLSI with Industry 5.0: A New Era of Smart Manufacturing” was organized by Department of Electronics & Communication Engineering In Association with MITS IEI Student’s Forum 19.09.2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Integrating VLSI with Industry 5.0 A New Era of Smart Manufacturing Event Report_IEI_ECE_19.09.2025-min.pdf",
    dept: "Electronics & Communication Engineering",
    date: "19.09.2025",
  },
  {
    title:
      "The Department of CSE (AI and ML), in association with the Institute of Engineers (India) – IEI Student Chapter, MITS, organized a one-day seminar on “Machine Learning Applications in Geographic Information Systems (GIS)” on 05-11-2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Machine Learning Applications in Geographic Information Systems  Event Report_IEI_AIML_05.11.2025-min.pdf",
    dept: "CSE (AI & ML)",
    date: "05.11.2025",
  },
  {
    title:
      "A One-Day Hands-on Training Program on “POWER BI” was organized by Department of Electrical and Electronics Engineering In association with MITS - IE (I) Students’ Chapter on 03/11/2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/POWER BI Event Report_IEI_EEE_03.11.2025-min.pdf",
    dept: "Electrical & Electronics Engineering",
    date: "03.11.2025",
  },
  {
    title:
      "A Guest Lecture on “Sustainable Innovation through Collaborative DevOps Culture and Practices” was organized by Department of CSE-Data Science in association with Institution of Engineers(India) on 15.11.2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Sustainable Innovation through Collaborative DevOps Culture and Practices - Event Report_IEI_CSE DS_15.11.2025-min.pdf",
    dept: "CSE (Data Science)",
    date: "15.11.2025",
  },
  {
    title:
      "A Hands-on workshop on “Understanding Prompt Engineering and Today’s AI Tools” was organized by Department of Electronics & Communication Engineering In Association with MITS IEI Student’s Forum 11.11.2025.",
    url: "https://mits.ac.in/assets/pdf/assoc/Understanding Prompt Engineering and Today’s AI Tools Event Report_IEI_ECE_11.11.2025-min.pdf",
    dept: "Electronics & Communication Engineering",
    date: "11.11.2025",
  },
];

export default function IeiView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />

      {/* HERO BANNER */}
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
            Cells &amp; Committees • Professional Societies &amp; Chapters
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            The Institution of Engineers (India) [IEI] Cell
          </h1>
          <p className="text-white/95 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            Fostering technical knowledge, professional engineering skills, and industry exposure through the MITS-IE(I) Students Chapter.
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
            <li className="text-[#ffd15c] font-semibold truncate max-w-[220px]">
              IEI Student Chapter
            </li>
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
            {/* 1. ABOUT SECTION */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="heading mb-4 text-[#8b0000] font-display text-2xl font-bold flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-[#8b0000]" />
                  About The Institution of Engineers (India) [IEI]
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify mb-6">
                  The Institution of Engineers (India) [IEI], headquartered in Kolkata, aims to address the needs of the student community by serving as a platform for global engineering connections and actively supporting R&amp;D initiatives through various promotional programs. Additionally, it facilitates activities such as lectures, seminars, symposium, workshops, and other educational programs. Madanapalle Institute of Technology and Science - Deemed to be University has been fostering academic excellence by encouraging and promoting student chapters of various technical societies. This initiative led to the establishment of the MITS-IE(I) Students Chapter.
                </p>

                {/* BULLET POINTS / HIGHLIGHTS MATCHING LIVE PAGE */}
                <div className="space-y-4 pt-2">
                  {/* Point 1 */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5">
                    <div className="font-semibold text-[#0f2a44] text-sm sm:text-base mb-2.5 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8b0000] shrink-0 mt-1" />
                      <span>Nineteen esteemed faculty members hold prestigious IEI Memberships, including:</span>
                    </div>
                    <ul className="list-disc list-inside pl-4 text-sm text-slate-700 space-y-1">
                      <li>Fellow (FIE)</li>
                      <li>Member (MIE)</li>
                      <li>Associate Member (AMIE)</li>
                    </ul>
                  </div>

                  {/* Point 2 */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5">
                    <div className="font-semibold text-[#0f2a44] text-sm sm:text-base mb-2.5 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8b0000] shrink-0 mt-1" />
                      <span>The Institution of Engineers (India), Kolkata, approves three department student chapter at MITS:</span>
                    </div>
                    <ul className="list-disc list-inside pl-4 text-sm text-slate-700 space-y-1">
                      <li>Mechanical Engineering</li>
                      <li>Electrical &amp; Electronics Engineering</li>
                      <li>Electronics &amp; Communication Engineering</li>
                    </ul>
                  </div>

                  {/* Point 3 */}
                  <div className="bg-[#fff8e6] border border-[#ffd15c]/40 rounded-xl p-4 sm:p-5">
                    <div className="font-semibold text-[#8b0000] text-sm sm:text-base flex items-start gap-2">
                      <Award className="w-5 h-5 text-[#caa74d] shrink-0 mt-0.5" />
                      <span>
                        Madanapalle Institute of Technology &amp; Science has received <strong>Institutional Membership</strong> from Institution of Engineers (India) on <strong>18.02.2025</strong>.
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* 2. DOCUMENTS & CHAPTER CERTIFICATES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="heading mb-4 text-[#8b0000] font-display text-xl font-bold flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#8b0000]" />
                  Chapter Certificates &amp; Official Orders
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {chapterCertificates.map((doc, i) => (
                    <a
                      key={i}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 p-3.5 rounded-xl border border-slate-200 hover:border-[#8b0000] hover:bg-amber-50/30 transition-all group shadow-2xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <FileText className="w-4 h-4 text-[#8b0000] shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-800 group-hover:text-[#8b0000] truncate">
                            {doc.label}
                          </p>
                          <span className="text-[11px] text-slate-500 font-medium">{doc.tag}</span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#8b0000] shrink-0" />
                    </a>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* 3. TABLE 1: STUDENT CHAPTER CODES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0f2a44] flex items-center gap-2">
                    <Bookmark className="w-5 h-5 text-[#8b0000]" />
                    Institute membership No: <span className="text-[#8b0000]">IM000804-6</span>
                  </h3>
                  <span className="text-xs font-semibold bg-[#8b0000]/10 text-[#8b0000] px-2.5 py-1 rounded-full">
                    6 Departments
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#8b0000] text-white">
                        <th className="py-3 px-4 text-center w-14 font-semibold border border-white/20">S.No</th>
                        <th className="py-3 px-4 text-left font-semibold border border-white/20">Department</th>
                        <th className="py-3 px-4 text-left font-semibold border border-white/20 whitespace-nowrap">Students Chapter Code</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {chapterCodes.map((item, idx) => (
                        <tr
                          key={item.sno}
                          className={`hover:bg-amber-50/40 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                        >
                          <td className="py-3 px-4 text-center font-medium text-slate-500 border border-slate-100">
                            {item.sno}
                          </td>
                          <td className="py-3 px-4 font-medium text-slate-800 border border-slate-100">
                            {item.department}
                          </td>
                          <td className="py-3 px-4 font-mono font-semibold text-[#8b0000] border border-slate-100">
                            {item.code}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollReveal>

            {/* 4. TABLE 2: LIST OF DEPARTMENT COORDINATORS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <p className="text-slate-700 text-sm leading-relaxed text-justify mb-4">
                    The Institution of Engineers (India) [IEI] MITS comprising of the following faculty is constituted for the Academic Year (2024-25) for implementing various initiatives. The Objective of the committee is to empower students with Technical Knowledge, Professional Skills &amp; Industry Exposure, fostering innovation, collaboration, and career growth. The members of this cell will work to provide a platform for students to enhance their engineering expertise, leadership capabilities and industry readiness through learning and innovation.
                  </p>
                  <h3 className="font-display font-bold text-lg text-[#0f2a44] flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#8b0000]" />
                    List of Department Coordinators
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#8b0000] text-white">
                        <th className="py-3 px-4 text-center w-14 font-semibold border border-white/20">S.No</th>
                        <th className="py-3 px-4 text-left font-semibold border border-white/20">Name</th>
                        <th className="py-3 px-4 text-left font-semibold border border-white/20">Designation and Department</th>
                        <th className="py-3 px-4 text-center font-semibold border border-white/20">Position</th>
                        <th className="py-3 px-4 text-left font-semibold border border-white/20">E-Mail ID</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {coordinators.map((coord, idx) => (
                        <tr
                          key={coord.sno}
                          className={`hover:bg-amber-50/40 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                        >
                          <td className="py-3 px-4 text-center font-medium text-slate-500 border border-slate-100">
                            {coord.sno}
                          </td>
                          <td className="py-3 px-4 font-bold text-slate-900 border border-slate-100 whitespace-nowrap">
                            {coord.name}
                          </td>
                          <td className="py-3 px-4 text-slate-700 border border-slate-100">
                            {coord.designation}
                          </td>
                          <td className="py-3 px-4 text-center border border-slate-100 whitespace-nowrap">
                            <span
                              className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                                coord.position === "Chairman"
                                  ? "bg-amber-100 text-amber-900 border border-amber-300"
                                  : coord.position === "Co-Coordinator"
                                  ? "bg-blue-100 text-blue-900 border border-blue-300"
                                  : "bg-slate-100 text-slate-800"
                              }`}
                            >
                              {coord.position}
                            </span>
                          </td>
                          <td className="py-3 px-4 border border-slate-100 whitespace-nowrap">
                            <a
                              href={`mailto:${coord.email}`}
                              className="text-xs text-[#8b0000] hover:underline flex items-center gap-1 font-medium"
                            >
                              <Mail className="w-3 h-3 shrink-0" />
                              {coord.email}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollReveal>

            {/* 5. LIST OF EVENTS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="heading mb-5 text-[#8b0000] font-display text-xl font-bold flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#8b0000]" />
                    List of Events
                  </div>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                    {eventsList.length} Events Organized
                  </span>
                </div>
                <div className="space-y-4">
                  {eventsList.map((ev, i) => (
                    <div
                      key={i}
                      className="p-4 sm:p-5 rounded-xl border border-slate-200/80 hover:border-[#8b0000]/40 hover:bg-amber-50/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="font-semibold text-[#8b0000] bg-[#8b0000]/10 px-2 py-0.5 rounded">
                            {ev.dept}
                          </span>
                          <span className="text-slate-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {ev.date}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-800 leading-snug">
                          {ev.title}
                        </p>
                      </div>
                      <a
                        href={ev.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#8b0000] hover:bg-[#6e0000] rounded-lg transition-colors shrink-0 shadow-2xs"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        View Report
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
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
                  <Phone className="w-4 h-4 text-[#8b0000]" />
                  Contact
                </h3>
                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#8b0000] shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900">Madanapalle Institute of Technology &amp; Science</p>
                      <p className="text-xs text-slate-500 font-semibold mb-1">Deemed to be University</p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Madanapalle-Kadiri Road, NH-42, Angallu, Madanapalle - 517325, Andhra Pradesh, India
                      </p>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#8b0000] shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700 space-y-0.5">
                      <p>+91-8571-280255</p>
                      <p>+91-8571-280706</p>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#8b0000] shrink-0 mt-0.5" />
                    <a
                      href="mailto:principal@mits.ac.in"
                      className="text-xs text-[#8b0000] hover:underline font-medium"
                    >
                      principal@mits.ac.in
                    </a>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* INSTITUTIONAL MEMBERSHIP BADGE CARD */}
            <ScrollReveal>
              <section className="bg-gradient-to-br from-[#0f2a44] to-[#1c4066] text-white rounded-2xl shadow-sm p-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#ffd15c] mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-1">Institutional Member</h4>
                <p className="text-xs text-white/85 mb-3 leading-relaxed">
                  Institution of Engineers (India) membership since 18 February 2025.
                </p>
                <div className="bg-white/10 rounded-lg p-3 text-center border border-white/10">
                  <p className="text-[11px] uppercase tracking-wider text-[#ffd15c] font-bold">Membership No</p>
                  <p className="font-mono font-bold text-base text-white mt-0.5">IM000804-6</p>
                </div>
                <a
                  href="https://mits.ac.in/assets/pdf/assoc/The Institution Engineers (IEI) certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#b31317] hover:bg-[#990000] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  View IEI Certificate
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
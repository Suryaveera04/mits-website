import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  FileText,
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Heart,
  Sparkles,
  Download,
  Users,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

interface CommitteeMember {
  sno: string;
  name: string;
  designation: string;
  position: string;
  email: string;
}

const committeeMembers: CommitteeMember[] = [
  {
    sno: "1",
    name: "Dr. C. Yuvaraj",
    designation: "Vice Chancellor (I/c)",
    position: "Chairman",
    email: "vicechancellor@mits.ac.in",
  },
  {
    sno: "2",
    name: "Dr. C. Kamal Basha",
    designation: "Vice Principal - Administration",
    position: "Member",
    email: "viceprincipaladministration@mits.ac.in",
  },
  {
    sno: "3",
    name: "Dr. K. Chandra Mohan",
    designation: "Associate Professor",
    position: "Member",
    email: "drkchandramohan@mits.ac.in",
  },
  {
    sno: "4",
    name: "Dr. K. Dasthagiri Basha",
    designation: "Psychologist",
    position: "Member",
    email: "drdasthagiribashak@mits.ac.in",
  },
  {
    sno: "5",
    name: "Dr. Sujay Nama",
    designation: "External Expert Counsellor (Psychiatrist)",
    position: "Member",
    email: "dr_sujay@yahoo.com",
  },
  {
    sno: "6",
    name: "Mr. Jaswanth Muthineedi",
    designation: "Student (3rd Year AI-B)",
    position: "Member",
    email: "21691A3168@mits.ac.in",
  },
  {
    sno: "7",
    name: "Ms. Lakshmi Sree Kota",
    designation: "Student (3rd Year AI-B)",
    position: "Member",
    email: "21691A3183@mits.ac.in",
  },
  {
    sno: "8",
    name: "Mr. Abubakar Siddiq Khan P",
    designation: "Student (3rd Year Civil)",
    position: "Member",
    email: "21691A0101@mits.ac.in",
  },
  {
    sno: "9",
    name: "Mr. Prasad",
    designation: "Parent",
    position: "Member",
    email: "prasadfour@gmail.com",
  },
  {
    sno: "10",
    name: "Dr. M. Parvathi",
    designation: "Assistant Professor - Department of English & Foreign Languages",
    position: "Member",
    email: "parvathim@mits.ac.in",
  },
  {
    sno: "11",
    name: "Mrs. U. Vijaya Lakshmi",
    designation: "Institute Counsellor",
    position: "Member Secretary",
    email: "vijayalakshmiu@mits.ac.in",
  },
];

interface OfficialDocument {
  title: string;
  href: string;
  badge?: string;
}

const officialDocuments: OfficialDocument[] = [
  {
    title: "Psychological Counselling Committee Office Order 2025-26",
    href: "https://mits.ac.in/assets/pdf/admin/SSC%20Cell-2025-26.pdf",
    badge: "2025-26",
  },
  {
    title: "Students Services Centre Office Order 2025-26",
    href: "https://mits.ac.in/assets/pdf/admin/SSC-2025-26.pdf",
    badge: "2025-26",
  },
  {
    title: "Institute Counsellor Office Order",
    href: "https://mits.ac.in/assets/pdf/admin/Institute%20Counsellor%20Office%20Order.pdf",
    badge: "Office Order",
  },
  {
    title: "Action Taken Counselling Report",
    href: "https://mits.ac.in/assets/pdf/admin/Action%20taken_counselling_30th%20nov%202019.pdf",
    badge: "Report",
  },
  {
    title: "Psychological Counselling Committee Office Order 2023-24",
    href: "https://mits.ac.in/assets/pdf/admin/Psychological%20Counselling%20Committee%20Office%20Order.pdf",
    badge: "2023-24",
  },
  {
    title: "Minutes of Meeting",
    href: "https://mits.ac.in/assets/pdf/admin/MoM-01%20&%2002.pdf",
    badge: "MoM",
  },
  {
    title: "External Counsellor Order",
    href: "https://mits.ac.in/assets/pdf/admin/Acknowledgement-Office%20Order%20-%20Student%20Counsellor.pdf",
    badge: "Order",
  },
];

const principlesOfCounselling = [
  "Principle of Acceptance",
  "Principle of communication",
  "Principle of empathy",
  "Principle of non-judgemental attitude",
  "Principle of confidentiality",
  "Principle of individuality",
  "Principle of non-emotional involvement",
];

export default function PccView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800">
      <Header />

      {/* HERO SECTION - Aligned with Standard MITS Pages */}
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
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffd15c]" />
            <span>Student Support &amp; Wellness</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            Psychological Counselling Cell
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm italic">
            &ldquo;Emotional well-being is just as important to us as Breathing is&rdquo;
          </p>
        </div>

        {/* BOTTOM-LEFT CORNER BREADCRUMB (Standard across all MITS pages) */}
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
            <li className="text-[#ffd15c] font-medium">Psychological Counselling Cell (PCC)</li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTAINER - Using Space Wisely without narrow clamping */}
      <main className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10">
        {/* Back Link */}
        <button
          onClick={() => navigate("/cells")}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#8B1D1D] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells &amp; Committees
        </button>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* MAIN CONTENT COLUMN (8 of 12 cols on desktop) */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            {/* ABOUT PCC & COUNSELLING OVERVIEW */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 md:p-10 space-y-6">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#8B1D1D] mb-1">
                    ABOUT PCC
                  </h2>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 tracking-wide uppercase mt-1">
                    COUNSELLING - NURTURING MINDS and TRANSFORMING LIVES
                  </h3>
                </div>

                <div className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify space-y-4">
                  <p>
                    In today&apos;s ever-changing complex world, educational institutions play a crucial role in shaping young minds by preparing them for future success. Academic achievement is undeniably important, but it is equally vital to address students&apos; emotional and mental well-being. Hence, MITS initiated Counselling services through Mrs. Vijaya Lakshmi, Institutional Counsellor, who completed Masters in Guidance &amp; Counselling in NCERT, Mysore. She has been rendering Mental Health &amp; Counselling services to MITS students.
                  </p>
                  <p>
                    Psychological problems, parental counselling, interpersonal relationship, stress related problems are dealt with. How to promote mental health, significance of yoga and meditation, healthy habits and positive thinking and trends in the life style etc are being addressed in the campus. She also coordinates with Dr. Sujay Nama an External Expert Counsellor &amp; Psychiatrist to handle the vulnerable cases.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* OBJECTIVES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 md:p-10 space-y-5">
                <div className="inline-block bg-[#0f2a44] text-white font-serif font-bold px-4 py-1.5 text-base sm:text-lg rounded shadow-xs tracking-wide">
                  Objectives
                </div>
                <ul className="space-y-3 pt-2 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B1D1D] font-bold text-base select-none shrink-0 mt-0.5">◆</span>
                    <span>To empower the students in recognizing their unique potentials and skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B1D1D] font-bold text-base select-none shrink-0 mt-0.5">◆</span>
                    <span>To guide them to handle social, personality development and adjustment issues.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B1D1D] font-bold text-base select-none shrink-0 mt-0.5">◆</span>
                    <span>To encourage listening skills, developing empathy and interpersonal skills by enriching healthy relationship.</span>
                  </li>
                </ul>
              </section>
            </ScrollReveal>

            {/* IMPORTANCE OF COUNSELLING */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 md:p-10 space-y-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    Importance of Counselling
                  </h3>
                  <p className="text-sm sm:text-base text-[#8B1D1D] font-medium italic">
                    &ldquo;Emotional well-being is just as important to us as Breathing is&rdquo;
                  </p>
                </div>

                <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
                    <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0f2a44] text-white text-xs font-bold">1</span>
                      Promoting Mental Health
                    </h4>
                    <p className="text-slate-700 text-justify">
                      It is a proactive approach to promote mental health. By providing a safe and confidential environment for students to express their thoughts, emotions, and concerns there is always a need for a Counsellor. By addressing issues such as anxiety, stress, depression, and low self-esteem, a counsellor can help a student to build resilience, coping strategies, and foster self-esteem. In turn, this contributes to improve the academic performance and overall well-being of a student.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
                    <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0f2a44] text-white text-xs font-bold">2</span>
                      Emotional Support and Personal Development
                    </h4>
                    <p className="text-slate-700 text-justify">
                      Counselling offers invaluable emotional support to students who have been experiencing challenges at home, school, or within themselves. A patient listening ear, empathetic guidance, and practical advice will enable the students to navigate difficulties effectively. By addressing personal issues, it teaches essential life skills, and empowers students to develop resilience, decision-making abilities, and establish healthy relationships.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
                    <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0f2a44] text-white text-xs font-bold">3</span>
                      Academic Success
                    </h4>
                    <p className="text-slate-700 text-justify">
                      The connection between emotional well-being and academic success is complementary. Students who are struggling emotionally often find it challenging to concentrate, engage in learning, and perform to their full potential. Hence, counselling interventions address underlying emotional barriers, by equipping students with effective coping mechanisms and study skills.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* PRINCIPLES OF COUNSELLING */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 md:p-10 space-y-5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#8B1D1D]">
                  Principles of Counselling
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {principlesOfCounselling.map((principle, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm sm:text-base font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#8B1D1D] shrink-0" />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* CONFIDENTIAL PROBLEM FIX / FORM CALLOUT */}
            <ScrollReveal>
              <section className="rounded-2xl border border-red-200 bg-gradient-to-r from-red-50 via-rose-50 to-amber-50 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B1D1D] bg-red-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" /> 100% Confidential
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                    Kindly fill the form to fix your problem:
                  </h4>
                  <p className="text-sm text-slate-600 max-w-xl">
                    Reach out directly to our Institutional Counsellor. Your privacy and confidentiality are strictly protected under institutional ethics.
                  </p>
                </div>
                <a
                  href="https://forms.office.com/r/vKhj6MSXEs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-6 py-3.5 rounded-xl bg-[#8B1D1D] text-white font-semibold text-sm hover:bg-[#6e1515] transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Open Counselling Form</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </section>
            </ScrollReveal>

            {/* PCC COMMITTEE MEMBERS TABLE */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 md:p-10 space-y-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#8B1D1D]" />
                    PCC Committee Members
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Official Psychological Counselling Committee members, faculty leaders, external experts, and student representatives.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#8B1D1D] text-white font-semibold">
                        <th className="py-3 px-4 text-center w-12">S.No</th>
                        <th className="py-3 px-4 w-[28%]">Name</th>
                        <th className="py-3 px-4 w-[32%]">Designation</th>
                        <th className="py-3 px-4 w-[16%]">Position</th>
                        <th className="py-3 px-4 w-[24%]">Contact Email-ID</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {committeeMembers.map((member, idx) => (
                        <tr
                          key={member.sno}
                          className={`hover:bg-amber-50/40 transition-colors ${
                            idx % 2 === 1 ? "bg-slate-50/50" : ""
                          }`}
                        >
                          <td className="py-3.5 px-4 text-center font-bold text-slate-400">
                            {member.sno}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-slate-900">
                            {member.name}
                          </td>
                          <td className="py-3.5 px-4 text-slate-700">
                            {member.designation}
                          </td>
                          <td className="py-3.5 px-4 font-medium text-slate-900">
                            <span
                              className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold ${
                                member.position === "Chairman"
                                  ? "bg-red-100 text-[#8B1D1D]"
                                  : member.position === "Member Secretary"
                                  ? "bg-blue-100 text-[#0f2a44]"
                                  : "bg-slate-100 text-slate-700"
                              }`}
                            >
                              {member.position}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-slate-700">
                            <a
                              href={`mailto:${member.email}`}
                              className="text-[#8B1D1D] hover:underline font-mono text-xs break-all"
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

            {/* DOCUMENTS & OFFICE ORDERS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 md:p-10 space-y-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#8B1D1D]" />
                    Official Orders &amp; Documents
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Official constitution orders, minutes of meeting, and counselling action reports.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {officialDocuments.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between p-4 rounded-xl border border-slate-200/80 hover:border-[#8B1D1D] hover:bg-red-50/20 transition-all duration-200 group shadow-xs"
                    >
                      <div className="pr-3 space-y-1.5">
                        {doc.badge && (
                          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#8B1D1D] bg-red-100/60 px-2 py-0.5 rounded">
                            {doc.badge}
                          </span>
                        )}
                        <h4 className="font-semibold text-slate-900 group-hover:text-[#8B1D1D] transition-colors text-sm leading-snug">
                          {doc.title}
                        </h4>
                      </div>
                      <span className="shrink-0 p-2 rounded-lg text-slate-400 group-hover:text-[#8B1D1D] group-hover:bg-red-100/50 transition-colors">
                        <Download className="w-4 h-4" />
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* SIDEBAR COLUMN (4 of 12 cols on desktop) */}
          <aside className="lg:col-span-4 xl:col-span-3 space-y-6 sticky top-24">
            {/* Quick Consultation Form Box */}
            <div className="bg-[#0f2a44] text-white p-6 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs tracking-wider uppercase">
                <Heart className="w-4 h-4 fill-amber-300" />
                <span>Student Support</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white leading-snug drop-shadow-xs">
                Need Confidential Assistance?
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Fill the institutional counselling request form to schedule an appointment with our counsellor.
              </p>
              <a
                href="https://forms.office.com/r/vKhj6MSXEs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#ffd15c] hover:bg-[#ffc83b] text-[#0f2a44] font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
              >
                <span>Book Counselling Session</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Coordinator Details Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 space-y-4">
              <h3 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8B1D1D]" />
                Contact Coordinator
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Coordinator</p>
                  <p className="font-bold text-slate-900 text-sm sm:text-base mt-0.5">Mrs. U. Vijaya Lakshmi</p>
                  <p className="text-xs text-[#8B1D1D] font-medium mt-0.5">
                    Associate Director-International Relations &amp; Institute Counsellor - MITS
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Madanapalle Institute of Technology &amp; Science (Deemed to be University), Madanapalle-Kadiri Road, Kurabalakota Mandal, Madanapalle-517325, Andhra Pradesh, India
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <p className="text-slate-700 font-mono text-xs">
                      +91-9100600773, 8571-280255, 280706
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <a
                      href="mailto:vijayalakshmiu@mits.ac.in"
                      className="text-[#8B1D1D] hover:underline font-medium text-xs break-all"
                    >
                      vijayalakshmiu@mits.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 space-y-3">
              <h4 className="font-serif text-base font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#8B1D1D]" />
                Key Documents
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="https://mits.ac.in/assets/pdf/admin/SSC%20Cell-2025-26.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-slate-700 hover:text-[#8B1D1D] py-1 transition-colors"
                  >
                    <span>PCC Office Order 2025-26</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://mits.ac.in/assets/pdf/admin/SSC-2025-26.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-slate-700 hover:text-[#8B1D1D] py-1 transition-colors"
                  >
                    <span>SSC Office Order 2025-26</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://mits.ac.in/assets/pdf/admin/MoM-01%20&%2002.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-slate-700 hover:text-[#8B1D1D] py-1 transition-colors"
                  >
                    <span>Minutes of Meeting</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

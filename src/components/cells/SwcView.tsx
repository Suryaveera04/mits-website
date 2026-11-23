import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Users,
  FileDown,
  Calendar,
  Sparkles,
  Award,
  Image as ImageIcon,
  DollarSign,
  AlertCircle,
  GraduationCap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "https://mits.edu/";

interface CommitteeMember {
  sno: string;
  name: string;
  designation: string;
  position: string;
  email?: string;
}

const committeeMembers: CommitteeMember[] = [
  {
    sno: "1",
    name: "Dr. C. Yuvaraj",
    designation: "Vice Chancellor (I/c)",
    position: "Chairperson",
    email: "vicechancellor@mits.ac.in",
  },
  {
    sno: "2",
    name: "Dr. P. Athahar",
    designation: "Senior Manager – Student Affairs",
    position: "Coordinator",
    email: "sm.studentaffairs@mits.ac.in",
  },
  {
    sno: "3",
    name: "Ms. Raga Deepthi",
    designation: "Assistant Administrative Officer (Students Welfare)",
    position: "Member Secretary",
    email: "swo@mits.ac.in",
  },
  {
    sno: "4",
    name: "Dr. P. Ramanathan",
    designation: "Vice-Principal (Administration)",
    position: "Member",
    email: "viceprincipaladministration@mits.ac.in",
  },
  {
    sno: "5",
    name: "Dr. K. Arul Kumar",
    designation: "Associate Professor, Dept. of EEE",
    position: "Member",
    email: "drarulkumark@mits.ac.in",
  },
];

const documents = [
  {
    title: "MITS Academic Policy (MITSDTBU)",
    href: "https://mits.ac.in/assets/pdf/swc/Academic%20Policy%20(MITSDTBU).pdf",
  },
  {
    title: "Office Order - Scholarship Committee - 2025",
    href: "https://mits.ac.in/assets/pdf/swc/Scholarship%20committee%20-%202025.pdf",
  },
  {
    title: "Financial Aid Scheme Guidelines",
    href: "https://mits.ac.in/assets/pdf/swc/Financial-AID.pdf",
  },
  {
    title: "MITS Extra Co-Curricular Criteria Awards List",
    href: "https://mits.ac.in/assets/pdf/swc/Extra%20Co-Curricular%20Criteria%20Awards%20List.pdf",
  },
  {
    title: "List of Awards",
    href: "https://mits.ac.in/assets/pdf/swc/List%20of%20Awards.pdf",
  },
  {
    title: "SWC Request Form",
    href: "https://mits.ac.in/pdf/2018-19-Request-Form.docx",
  },
  {
    title: "No Dues Form",
    href: "https://mits.ac.in/pdf/No-due-form.doc",
  },
  {
    title: "Student Affidavit Form",
    href: "https://mits.ac.in/pdf/student-affidavit.pdf",
  },
  {
    title: "Parent Affidavit Form",
    href: "https://mits.ac.in/pdf/parent-affidavit.pdf",
  },
  {
    title: "Declaration & Undertaking from Student",
    href: "https://mits.ac.in/pdf/DECLARATION-UNDERTAKING-FROM-THE-STUDENT.pdf",
  },
];

const beneficiariesData = [
  { year: "2025-26", scholarships: "16 (Progressive)", beneficiaries: "405 (Progressive)" },
  { year: "2024-25", scholarships: "9", beneficiaries: "351" },
  { year: "2023-24", scholarships: "10", beneficiaries: "269" },
  { year: "2022-23", scholarships: "13", beneficiaries: "374" },
  { year: "2021-22", scholarships: "12", beneficiaries: "224" },
  { year: "2020-21", scholarships: "12", beneficiaries: "361" },
  { year: "2019-20", scholarships: "20", beneficiaries: "364" },
  { year: "2018-19", scholarships: "18", beneficiaries: "637" },
  { year: "2017-18", scholarships: "14", beneficiaries: "569" },
  { year: "2016-17", scholarships: "12", beneficiaries: "408" },
  { year: "2015-16", scholarships: "11", beneficiaries: "383" },
  { year: "2014-15", scholarships: "10", beneficiaries: "336" },
  { year: "2013-14", scholarships: "6", beneficiaries: "64" },
];

const events = [
  {
    title: 'An Expert Talk on "Personal Branding in the Digital Age: The LinkedIn Blueprint" on 10th April 2026 at the Auditorium.',
    href: "https://mits.ac.in/assets/pdf/swc/Personal%20Branding%20in%20the%20Digital%20Age%20The%20LinkedIn%20Blueprint.pdf",
    date: "10-04-2026",
  },
  {
    title: 'An Awareness Session on "Scholarships and Study Abroad Success Strategies" was organized on 27/02/26.',
    href: "https://mits.ac.in/assets/pdf/swc/Scholarships%20and%20Study%20Abroad%20Success%20Strategies.pdf",
    date: "27-02-2026",
  },
  {
    title: 'An Awareness Session on "University-Specific Private Scholarships for Master\'s Programs Abroad" was organized on 23/02/26.',
    href: "https://mits.ac.in/assets/pdf/swc/University-Specific%20Private%20Scholarships%20for%20Master%E2%80%99s%20Programs%20Abroad%20.pdf",
    date: "23-02-2026",
  },
  {
    title: 'An Awareness Session on "Financial Support Options for Indian Students to study abroad" on 4th February 2026.',
    href: "https://mits.ac.in/assets/pdf/swc/Financial%20Support%20Options.pdf",
    date: "04-02-2026",
  },
  {
    title: 'An Awareness Session about Vidya Lakshmi Educational Loan scheme on 2nd December 2025.',
    href: "https://mits.ac.in/assets/pdf/swc/Vidya%20Lakshmi%20Educational%20Loan%20scheme.pdf",
    date: "02-12-2025",
  },
  {
    title: 'An Awareness programme on the National Scholarship Portal (NSP) application process was conducted on 16th November 2025.',
    href: "https://mits.ac.in/assets/pdf/swc/NSP%20Application%20Process.pdf",
    date: "16-11-2025",
  },
  {
    title: 'An Awareness Programme on "Central and Private Scholarships" was organized on 15-02-2025.',
    href: "https://mits.ac.in/assets/pdf/swc/Awareness%20Program%20Report%20Central%20and%20Private%20Scholarships.pdf",
    date: "15-02-2025",
  },
];

const galleryImages = [
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-05-19%20at%208.17.02%20AM.jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-05-19%20at%208.55.26%20AM.jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-05-07%20at%2010.05.39%20AM.jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-05-15%20at%208.05.06%20AM%20(1).jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-05-07%20at%2010.05.39%20AM%20(1).jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-05-15%20at%208.05.04%20AM%20(1).jpeg",
  "https://mits.ac.in/public/uploads/gallery/swc-2026.jpg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-04-01%20at%203.41.53%20PM.jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-04-06%20at%208.07.31%20AM%20(1).jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-04-06%20at%208.07.31%20AM.jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-04-06%20at%208.07.32%20AM%20(1).jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-04-06%20at%208.07.34%20AM.jpeg",
];

export default function SwcView() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("home");

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
            Student Welfare Cell (SWC)
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            Fostering inclusive academic excellence, scholarships, educational loans, and holistic student growth.
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
            <li className="text-[#ffd15c] font-semibold">Student Welfare Cell</li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTAINER */}
      <main className="w-full max-w-[96%] mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-12 space-y-8">
        <button
          onClick={() => navigate("/cells")}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells &amp; Committees
        </button>

        {/* TABS NAVIGATION BAR */}
        <div className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-2 flex flex-wrap items-center gap-2">
          {[
            { id: "home", label: "Home" },
            { id: "scholarships", label: "Scholarships" },
            { id: "documents", label: "Forms & Documents" },
            { id: "events", label: "Events" },
            { id: "gallery", label: "Gallery" },
            { id: "financial-aid", label: "Financial Aid" },
            { id: "contact", label: "Contact Us" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#b31317] text-white shadow-sm"
                  : "text-[#0f2a44] hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}

          {/* VIDYA LAXMI PORTAL TAB - DIRECT EXTERNAL REDIRECT PER USER INSTRUCTION */}
          <a
            href="https://pmvidyalaxmi.co.in/StudentLogin.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-sm flex items-center gap-1.5 transition-all ml-auto cursor-pointer"
            title="Opens Government Vidya Laxmi Portal in a new tab"
          >
            <span>Vidya Laxmi Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* TAB 1: HOME */}
        {activeTab === "home" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* LEFT / MAIN (8 cols) */}
              <div className="lg:col-span-8 xl:col-span-8 space-y-8">
                {/* PREAMBLE / SCHOLARSHIP POLICY */}
                <ScrollReveal>
                  <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-5">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                        <GraduationCap className="w-5 h-5 text-[#b31317]" />
                      </div>
                      <div>
                        <h2 className="font-display text-xl md:text-2xl font-bold text-[#b31317]">
                          MITS Scholarship Provision &amp; Scope
                        </h2>
                        <p className="text-xs text-[#0f2a44]/60">
                          Student Welfare Cell – MITS Deemed to be University
                        </p>
                      </div>
                    </div>

                    <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 !text-justify text-justify">
                      <p>
                        Madanapalle Institute of Technology &amp; Science (MITS), Deemed to be University, firmly believes that education is the greatest enabler of social and economic progress. In pursuit of its mission to promote inclusive excellence, MITS has established a comprehensive scholarship policy designed to support and encourage students from diverse backgrounds, ensuring that financial constraints do not impede access to quality education.
                      </p>
                      <p>
                        This policy reflects the University&apos;s commitment to provide financial assistance to students with academic potential and economic need, foster inclusion by supporting students from underrepresented, marginalized or economically disadvantaged backgrounds by recognizing their academic achievement with exemplary conduct and holistic development.
                      </p>
                      <p>
                        This policy applies to all students admitted to various full-time programs of MITS Deemed to be University and covers institutional, governmental, and externally funded scholarships administered through the University.
                      </p>
                    </div>

                    {/* ALERT NOTE */}
                    <div className="p-4.5 rounded-xl bg-[#fff8e6] border border-[#caa74d]/50 flex items-start gap-3 mt-4">
                      <AlertCircle className="w-5 h-5 text-[#b31317] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-[#0f2a44] text-sm">Important Notice:</p>
                        <p className="text-xs sm:text-sm text-slate-700 mt-0.5 leading-relaxed">
                          After Applying, Please Check Your Mail to Collect Your Document at SWC.
                        </p>
                      </div>
                    </div>
                  </section>
                </ScrollReveal>

                {/* SUPPORT & GUIDANCE */}
                <ScrollReveal>
                  <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-4">
                    <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44] flex items-center gap-2.5">
                      <BookOpen className="w-5 h-5 text-[#b31317]" />
                      MITS Support and Guidance for External Scholarships
                    </h3>
                    <div className="space-y-3 pt-2 text-slate-700 text-sm sm:text-base leading-relaxed !text-justify text-justify">
                      <p>
                        <strong>Dedicated Student Affairs Cell:</strong> MITS has a Student Affairs Cell whose key role is to support students in finding and applying for scholarships both government-funded and from private/NGO sources.
                      </p>
                      <p>
                        <strong>Information Dissemination:</strong> The cell circulates details about scholarships such as those available through the National Scholarship Portal (NSP), AICTE, UGC, Ministry of Minority Affairs (MOMA), SC/ST scholarships, AICTE&apos;s Single Girl Child Scholarship, and other schemes like ONGC and private organisations.
                      </p>
                      <p>
                        <strong>Regular Updates &amp; Guidance:</strong> Students receive notifications throughout the year when new applications open, with complete guidance on eligibility criteria and documentation. Over the years, hundreds of MITS students have benefited from central and private scholarship schemes through this support system.
                      </p>
                    </div>
                  </section>
                </ScrollReveal>
              </div>

              {/* RIGHT / SIDEBAR (4 cols) */}
              <aside className="lg:col-span-4 xl:col-span-4 space-y-6">
                {/* DIRECT VIDYA LAXMI PORTAL CALLOUT */}
                <div className="bg-[#0f2a44] text-white p-6 rounded-2xl shadow-sm space-y-3.5">
                  <div className="flex items-center gap-2 text-[#ffd15c] font-semibold text-xs tracking-wider uppercase">
                    <DollarSign className="w-4 h-4 text-[#ffd15c]" />
                    <span>Education Loan Portal</span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">Vidya Laxmi Portal</h4>
                  <p className="text-xs text-white/80 leading-relaxed !text-justify text-justify">
                    Vidya Lakshmi is a first-of-its-kind portal for students seeking Education Loans. View, apply, and track applications across banks anytime, anywhere.
                  </p>
                  <a
                    href="https://pmvidyalaxmi.co.in/StudentLogin.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#ffd15c] hover:bg-[#ffc83b] text-[#0f2a44] font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
                  >
                    <span>Visit Vidya Laxmi Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* CONTACT CARD */}
                <ScrollReveal>
                  <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden text-left">
                    <div className="bg-[#b31317] px-6 py-4">
                      <h3 className="font-display text-lg font-bold !text-white text-white tracking-wide">
                        Contact
                      </h3>
                    </div>
                    <div className="p-6 space-y-5 text-sm text-slate-700">
                      {/* Coordinator 1 */}
                      <div className="text-left">
                        <p className="font-bold text-[#0f2a44] text-base !text-left">Dr. P. Athahar</p>
                        <p className="text-xs text-[#b31317] font-semibold mt-0.5 !text-left">
                          Senior Manager – Student Affairs
                        </p>
                        <p className="text-xs text-slate-600 mt-1 !text-left">Phone: +91-8571-280255</p>
                        <a
                          href="mailto:sm.studentaffairs@mits.ac.in"
                          className="text-[#b31317] hover:underline font-semibold text-xs whitespace-nowrap block mt-0.5"
                        >
                          sm.studentaffairs@mits.ac.in
                        </a>
                      </div>

                      <hr className="border-gray-100" />

                      {/* Coordinator 2 */}
                      <div className="text-left">
                        <p className="font-bold text-[#0f2a44] text-base !text-left">Ms. Raga Deepthi</p>
                        <p className="text-xs text-[#b31317] font-semibold mt-0.5 !text-left">
                          Assistant Administrative Officer (Students Welfare)
                        </p>
                        <p className="text-xs text-slate-600 mt-1 !text-left">Phone: +91-8571-280255</p>
                        <a
                          href="mailto:swo@mits.ac.in"
                          className="text-[#b31317] hover:underline font-semibold text-xs whitespace-nowrap block mt-0.5"
                        >
                          swo@mits.ac.in
                        </a>
                      </div>

                      <hr className="border-gray-100" />

                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                        <div className="text-xs sm:text-sm leading-relaxed text-left space-y-0.5">
                          <p className="font-semibold text-[#0f2a44] !text-left">Address :</p>
                          <p className="font-bold text-[#0f2a44] !text-left">
                            Madanapalle Institute of Technology &amp; Science
                          </p>
                          <p className="!text-left">Deemed to be University</p>
                          <p className="!text-left">Madanapalle-Kadiri Road</p>
                          <p className="!text-left">Kurabalakota Mandal, Madanapalle-517325</p>
                          <p className="!text-left">Andhra Pradesh, India</p>
                        </div>
                      </div>
                    </div>
                  </section>
                </ScrollReveal>

                {/* SAFETY & COMPLIANCE PORTALS */}
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
                        { label: "Mentor – Mentee Cell (MMC)", to: "/mentor-menteecell" },
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

            {/* FULL WIDTH SECTION: COMMITTEE MEMBERS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0f2a44] mb-1 flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#b31317]" />
                    Student Welfare Cell Committee Members
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Institutional committee members and administrative coordinators for Student Welfare.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full border-collapse text-xs sm:text-sm whitespace-nowrap min-w-[850px]">
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
                      {committeeMembers.map((member, idx) => (
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
                            {member.email ? (
                              <a
                                href={`mailto:${member.email}`}
                                className="text-[#b31317] hover:underline font-mono text-xs whitespace-nowrap inline-block"
                              >
                                {member.email}
                              </a>
                            ) : (
                              <span className="text-slate-400">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollReveal>

            {/* FULL WIDTH SECTION: DOCUMENTS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                      <FileDown className="w-5 h-5 text-[#b31317]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44]">
                        Office Orders &amp; Documents
                      </h3>
                      <p className="text-xs text-[#0f2a44]/60">
                        Official policies, scholarship committee orders, and downloadable forms
                      </p>
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
          </div>
        )}

        {/* TAB 2: SCHOLARSHIPS */}
        {activeTab === "scholarships" && (
          <ScrollReveal>
            <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0f2a44]">
                    Scholarships Beneficiaries Data
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Annual progression of scholarships awarded and students benefited at MITS.
                  </p>
                </div>
                <a
                  href="https://mits.ac.in/assets/pdf/swc/Scholarship%20committee%20-%202025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#b31317] hover:underline"
                >
                  <span>Scholarship Committee 2025 (PDF)</span>
                  <FileDown className="w-4 h-4" />
                </a>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full border-collapse text-xs sm:text-sm whitespace-nowrap min-w-[700px]">
                  <thead>
                    <tr className="bg-[#b31317] text-white font-semibold">
                      <th className="py-3 px-4 text-left w-1/4">Academic Year</th>
                      <th className="py-3 px-6 text-center w-1/3">No. of Scholarships</th>
                      <th className="py-3 px-6 text-center w-1/3">No. of Student Beneficiaries</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {beneficiariesData.map((item, idx) => (
                      <tr
                        key={item.year}
                        className={`hover:bg-amber-50/40 transition-colors ${
                          idx % 2 === 1 ? "bg-slate-50/50" : ""
                        }`}
                      >
                        <td className="py-3.5 px-4 text-left font-bold text-[#0f2a44]">
                          {item.year}
                        </td>
                        <td className="py-3.5 px-6 text-center font-semibold text-[#b31317]">
                          {item.scholarships}
                        </td>
                        <td className="py-3.5 px-6 text-center font-semibold text-slate-700">
                          {item.beneficiaries}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* TAB 3: FORMS & DOCUMENTS */}
        {activeTab === "documents" && (
          <ScrollReveal>
            <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <FileDown className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44]">
                      Forms &amp; Official Documents
                    </h3>
                    <p className="text-xs text-[#0f2a44]/60">Download official application forms, affidavits, and policy guidelines</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-[#0f2a44] rounded-full">
                  {documents.length} Files
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
        )}

        {/* TAB 4: EVENTS */}
        {activeTab === "events" && (
          <ScrollReveal>
            <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <Calendar className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44]">
                      Events &amp; Awareness Sessions
                    </h3>
                    <p className="text-xs text-[#0f2a44]/60">Chronological student welfare seminars, workshops, and expert sessions</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-[#0f2a44] rounded-full">
                  {events.length} Events
                </span>
              </div>

              <div className="divide-y divide-gray-100">
                {events.map((ev, idx) => (
                  <div
                    key={idx}
                    className="py-3.5 px-3 sm:px-4 rounded-lg hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b31317] shrink-0 mt-1.5" />
                      <div>
                        <p className="text-sm sm:text-base text-slate-700 leading-snug !text-justify text-justify group-hover:text-[#0f2a44] transition-colors">
                          {ev.title}
                        </p>
                        <span className="text-xs text-slate-400 font-mono mt-1 inline-block">Date: {ev.date}</span>
                      </div>
                    </div>
                    <a
                      href={ev.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#b31317] hover:underline shrink-0 pl-5.5 sm:pl-0"
                    >
                      <span>Event Report</span>
                      <FileDown className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* TAB 5: GALLERY */}
        {activeTab === "gallery" && (
          <ScrollReveal>
            <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-5">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0f2a44] flex items-center gap-2">
                  <ImageIcon className="w-6 h-6 text-[#b31317]" />
                  SWC Event Gallery
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Photographic highlights of student welfare programs and workshops.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {galleryImages.map((src, i) => (
                  <a
                    key={i}
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-xl border border-gray-100 hover:border-[#b31317] transition-all group aspect-4/3 shadow-xs"
                  >
                    <img
                      src={src}
                      alt={`SWC Gallery image ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* TAB 6: FINANCIAL AID */}
        {activeTab === "financial-aid" && (
          <ScrollReveal>
            <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0f2a44]">
                    Financial Aid Guidelines
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Institutional policies and financial assistance provisions.
                  </p>
                </div>
                <a
                  href="https://mits.ac.in/assets/pdf/swc/Financial-AID.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#b31317] text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#8e0f13] transition-colors"
                >
                  <span>Download Financial Aid PDF</span>
                  <FileDown className="w-4 h-4" />
                </a>
              </div>

              <iframe
                src="https://mits.ac.in/assets/pdf/swc/Financial-AID.pdf#toolbar=1&navpanes=0&scrollbar=1&zoom=page-width"
                width="100%"
                height="900"
                className="border border-gray-200 rounded-xl w-full block shadow-xs"
                title="Financial Aid Guidelines"
              />
            </section>
          </ScrollReveal>
        )}

        {/* TAB 7: CONTACT US */}
        {activeTab === "contact" && (
          <ScrollReveal>
            <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden text-left max-w-4xl mx-auto">
              <div className="bg-[#b31317] px-6 py-4">
                <h3 className="font-display text-xl font-bold !text-white text-white tracking-wide">
                  Contact Student Welfare Cell
                </h3>
              </div>
              <div className="p-8 space-y-6 text-sm text-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Coordinator 1 */}
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <p className="font-bold text-[#0f2a44] text-lg">Dr. P. Athahar</p>
                    <p className="text-sm text-[#b31317] font-semibold">
                      Senior Manager – Student Affairs
                    </p>
                    <p className="text-xs text-slate-600">Phone: +91-8571-280255</p>
                    <a
                      href="mailto:sm.studentaffairs@mits.ac.in"
                      className="text-[#b31317] hover:underline font-semibold text-xs whitespace-nowrap block"
                    >
                      sm.studentaffairs@mits.ac.in
                    </a>
                  </div>

                  {/* Coordinator 2 */}
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <p className="font-bold text-[#0f2a44] text-lg">Ms. Raga Deepthi</p>
                    <p className="text-sm text-[#b31317] font-semibold">
                      Assistant Administrative Officer (Students Welfare)
                    </p>
                    <p className="text-xs text-slate-600">Phone: +91-8571-280255</p>
                    <a
                      href="mailto:swo@mits.ac.in"
                      className="text-[#b31317] hover:underline font-semibold text-xs whitespace-nowrap block"
                    >
                      swo@mits.ac.in
                    </a>
                  </div>
                </div>

                <hr className="border-gray-100" />

                <div className="flex items-start gap-3 p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <MapPin className="w-5 h-5 text-[#b31317] shrink-0 mt-1" />
                  <div className="text-xs sm:text-sm leading-relaxed text-left space-y-0.5">
                    <p className="font-semibold text-[#0f2a44] text-base">Campus Address :</p>
                    <p className="font-bold text-[#0f2a44]">
                      Madanapalle Institute of Technology &amp; Science
                    </p>
                    <p>Deemed to be University</p>
                    <p>Madanapalle-Kadiri Road</p>
                    <p>Kurabalakota Mandal, Madanapalle-517325</p>
                    <p>Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}
      </main>

      <Footer />
    </div>
  );
}

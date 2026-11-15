import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Award,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  FileText,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Building2,
  GraduationCap,
  Layers,
  Globe,
  Compass,
  Trophy,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

interface SocietyItem {
  sno: number;
  society: string;
  department: string;
  code?: string;
}

interface CommitteeMember {
  sno: number;
  name: string;
  designation: string;
  branchOrSociety: string;
  position: "Chairperson" | "Advisor" | "Counsellor";
}

interface DocumentItem {
  title: string;
  category: string;
  href: string;
}

const societies: SocietyItem[] = [
  { sno: 1, society: "IEEE - Computer Society", department: "Computer Science & Technology", code: "SBC64791C" },
  { sno: 2, society: "IEEE - Education Society", department: "Computer Science & Technology", code: "SBC64791E" },
  { sno: 3, society: "IEEE - Intelligent Transportation Systems Society", department: "Computer Science & Engineering", code: "SBC64791K" },
  { sno: 4, society: "IEEE - Robotics and Automation Society", department: "Computer Science & Engineering (Artificial Intelligence)", code: "SBC64791J" },
  { sno: 5, society: "IEEE - Systems, Man, and Cybernetics Society", department: "Computer Science & Engineering (Cyber Security)", code: "SBC64791I" },
  { sno: 6, society: "IEEE - Reliability Society", department: "Computer Science & Engineering (Data Science)", code: "SBC64791L" },
  { sno: 7, society: "IEEE - Information Theory Society", department: "Computer Science & Engineering (AI & ML)", code: "SBC64791M" },
  { sno: 8, society: "IEEE - Women in Engineering (WIE)", department: "Computer Science & Engineering (AI & ML)", code: "SBA64791" },
  { sno: 9, society: "IEEE - Power & Energy Society", department: "Electrical & Electronics Engineering", code: "SBC64791N" },
  { sno: 10, society: "IEEE - Circuits and Systems Society", department: "Electronics & Communication Engineering", code: "SBC64791A" },
  { sno: 11, society: "IEEE - Communications Society", department: "Electronics & Communication Engineering", code: "SBC64791I" },
  { sno: 12, society: "IEEE - Sensors Council", department: "Electronics & Communication Engineering", code: "SBC64791B" },
  { sno: 13, society: "IEEE - Signal Processing Society and Systems Council", department: "Electronics & Communication Engineering", code: "SBC64791H" },
  { sno: 14, society: "IEEE - Nanotechnology Council", department: "Mechanical Engineering", code: "SBC64791D" },
  { sno: 15, society: "IEEE - Computational Intelligence Society", department: "Master of Computer Applications", code: "SBC64791F" },
  { sno: 16, society: "IEEE - Geoscience and Remote Sensing Society", department: "Master of Computer Applications" },
  { sno: 17, society: "IEEE - Electron Devices Society", department: "Electrical & Electronics Engineering", code: "SBC64791O" },
];

const committeeMembers: CommitteeMember[] = [
  {
    sno: 1,
    name: "Dr. C. Yuvaraj",
    designation: "Vice Chancellor (I/c)",
    branchOrSociety: "MITS IEEE Student Branch [STB64791]",
    position: "Chairperson",
  },
  {
    sno: 2,
    name: "Dr. Pavan Kumar A V",
    designation: "Professor & Asst. Dean Accreditations",
    branchOrSociety: "Power & Energy Society [SBC64791N]",
    position: "Advisor",
  },
  {
    sno: 3,
    name: "Dr. Arun I",
    designation: "Professor - ME",
    branchOrSociety: "Nanotechnology Council [SBC64791D]",
    position: "Advisor",
  },
  {
    sno: 4,
    name: "Dr. Nehru Kandasamy",
    designation: "Professor - ECE",
    branchOrSociety: "Circuits and Systems Society [SBC64791A] & Electron Devices Society [SBC64791O]",
    position: "Advisor",
  },
  {
    sno: 5,
    name: "Dr. E. Aravind Raj",
    designation: "Assistant Professor - ECE",
    branchOrSociety: "Communications Society [SBC64791I]",
    position: "Advisor",
  },
  {
    sno: 6,
    name: "Dr. Gutti Nagaswetha",
    designation: "Assistant Professor - ECE",
    branchOrSociety: "Signal Processing Society and Systems Council [SBC64791H]",
    position: "Advisor",
  },
  {
    sno: 7,
    name: "Dr. G. Reddy Hemantha",
    designation: "Assistant Professor - ECE",
    branchOrSociety: "Sensors Council [SBC64791B]",
    position: "Advisor",
  },
  {
    sno: 8,
    name: "Dr. E. Gayatri",
    designation: "Assistant Professor - CSE",
    branchOrSociety: "Intelligent Transportation Systems Society [SBC64791K]",
    position: "Advisor",
  },
  {
    sno: 9,
    name: "Dr. K. Dinesh",
    designation: "Associate Professor & Head - CST",
    branchOrSociety: "Computer Society [SBC64791C] & Education Society [SBC64791E]",
    position: "Advisor",
  },
  {
    sno: 10,
    name: "Mr. K. Mahammad",
    designation: "Assistant Professor - CSE (AI)",
    branchOrSociety: "Robotics and Automation Society [SBC64791J]",
    position: "Advisor",
  },
  {
    sno: 11,
    name: "Dr. S. Kusuma",
    designation: "Assistant Professor & Head - CSE (DS)",
    branchOrSociety: "Reliability Society [SBC64791L]",
    position: "Advisor",
  },
  {
    sno: 12,
    name: "Mr. T. Niranjan Babu",
    designation: "Assistant Professor - CSE (CS)",
    branchOrSociety: "Systems, Man, and Cybernetics Society [SBC64791I]",
    position: "Advisor",
  },
  {
    sno: 13,
    name: "Dr. S. Padma",
    designation: "Associate Professor & Head - CSE (AI & ML)",
    branchOrSociety: "Women in Engineering [SBA64791] & Information Theory Society [SBC64791M]",
    position: "Advisor",
  },
  {
    sno: 14,
    name: "Dr. R. Marathamuthu",
    designation: "Assistant Professor - MCA",
    branchOrSociety: "Computational Intelligence Society [SBC64791F]",
    position: "Advisor",
  },
  {
    sno: 15,
    name: "Dr. C. Kumar",
    designation: "Assistant Professor - ECE",
    branchOrSociety: "MITS IEEE Student Branch [STB64791]",
    position: "Counsellor",
  },
];

const documents: DocumentItem[] = [
  {
    title: "Office Order: MITS IEEE Professional Executive Committee & Advisors - 2025",
    category: "Office Order",
    href: "https://mits.ac.in/assets/pdf/assoc/IEEE Student branch-2025.pdf",
  },
  {
    title: "MITS IEEE Student Branch Standard Operating Procedure (SOP)",
    category: "Governance & SOP",
    href: "https://mits.ac.in/assets/pdf/assoc/MITS IEEE SOP.pdf",
  },
  {
    title: "MITS IEEE Technical Society List",
    category: "Technical Societies",
    href: "https://mits.ac.in/assets/pdf/assoc/Society List.pdf",
  },
  {
    title: "MITS IEEE Society Advisors List",
    category: "Faculty Advisors",
    href: "https://mits.ac.in/assets/pdf/assoc/Society Advisors List.pdf",
  },
  {
    title: "MITS IEEE Organizational Hierarchy",
    category: "Institutional Structure",
    href: "https://mits.ac.in/assets/pdf/assoc/MITS IEEE Hierarchy.pdf",
  },
  {
    title: "MITS IEEE Student Branch Student Head Committee",
    category: "Student Leadership",
    href: "https://mits.ac.in/assets/pdf/assoc/Student Head Committee.pdf",
  },
  {
    title: "MITS IEEE Society Approval Letters from IEEE Headquarters",
    category: "Official Approvals",
    href: "https://mits.ac.in/assets/pdf/assoc/MITS IEEE Society Approval Letters.pdf",
  },
  {
    title: "MITS IEEE Student Executive Committee (ExCom)",
    category: "Executive Committee",
    href: "https://mits.ac.in/assets/pdf/assoc/Student Excom.pdf",
  },
  {
    title: "2025 Student Membership List",
    category: "Membership Roster",
    href: "https://mits.ac.in/assets/pdf/assoc/2025 Student Membership List.pdf",
  },
  {
    title: "2024 Student Membership List (Top in Hyderabad Section)",
    category: "Membership Roster",
    href: "https://mits.ac.in/assets/pdf/assoc/2024 Student Membership List.pdf",
  },
  {
    title: "2023 Student Membership List",
    category: "Membership Roster",
    href: "https://mits.ac.in/assets/pdf/assoc/2023 Student Membership List.pdf",
  },
  {
    title: "Department of CST - Consolidated IEEE Events",
    category: "Department Events",
    href: "https://mits.ac.in/assets/pdf/cst/CST IEEE Events.pdf",
  },
  {
    title: "Department of EEE - Consolidated IEEE Events",
    category: "Department Events",
    href: "https://mits.ac.in/assets/pdf/assoc/IEEE consolidated-EEE.pdf",
  },
  {
    title: "Department of CSE - Consolidated IEEE Events Summary 2025-26",
    category: "Department Events",
    href: "https://mits.ac.in/assets/pdf/assoc/IEEE Events Summary Data 2025-26.pdf",
  },
  {
    title: "Department of CSE (AI & ML) - Achievements with IEEE Student Branch",
    category: "Department Events",
    href: "https://mits.ac.in/assets/pdf/assoc/CSE(AIML) Achievement with IEEE Student Branch Chapter.pdf",
  },
  {
    title: "Department of CSE (AI) - All IEEE Events Consolidated",
    category: "Department Events",
    href: "https://mits.ac.in/assets/pdf/assoc/IEEE_ALL_CSE_AI.pdf",
  },
  {
    title: "Department of CSE - Complete List of IEEE Events",
    category: "Department Events",
    href: "https://mits.ac.in/assets/pdf/assoc/List of IEEE Events - Department of CSE.pdf",
  },
  {
    title: "Activities Allotted to Faculty",
    category: "Faculty Activity",
    href: "https://mits.ac.in/public/uploads/ieee/Activities alloted to the Faculty.pdf",
  },
  {
    title: "Activities Organized Report",
    category: "Annual Report",
    href: "https://mits.ac.in/public/uploads/ieee/Activities Organized.pdf",
  },
];

const achievements = [
  {
    title: "Top Membership Count in Hyderabad Section",
    description: "106 active student members in 2024, securing the highest student membership count under the IEEE Hyderabad Section.",
    icon: Trophy,
  },
  {
    title: "IEEE CAS Seasonal School Grant ($2,173 USD)",
    description: "Approved by IEEE Circuits & Systems Society (CAS) Headquarters to host Seasonal School on Neuromorphic Computing & Logic in Memory with $2,173 USD (~Rs. 1.8 Lakhs) funding.",
    icon: Award,
  },
  {
    title: "IEEE Nanotechnology Summer School ($4,620 USD)",
    description: "Received $4,620 USD grant through IEEE Nanotechnology Council for International Summer School titled 'NANO-CRHES: Nanotechnology for Integrated Computing, Robotics, Healthcare & Sustainability'.",
    icon: Sparkles,
  },
  {
    title: "17 Active Technical Societies & Affinity Groups",
    description: "Initiated 17 official IEEE technical society student branch chapters and affinity groups, empowering students across multiple engineering domains.",
    icon: Layers,
  },
];

const objectives = [
  "Foster technological innovation and excellence across undergraduate, postgraduate, and doctoral engineering curricula.",
  "Advance technical and educational competencies in computer science, telecommunications, electrical, electronics, and mechanical engineering.",
  "Provide rigorous training to students to emerge as industry-ready 'Masters in Technology'.",
  "Promote high-impact career development opportunities, global conferences, Hackathons, and IEEE competitions.",
  "Extend complete sponsorship and organizational mentorship for IEEE-endorsed national seminars and expert lectures.",
  "Empower students through humanitarian technology projects, UN Sustainable Development Goals alignment, and IEEE SPAx initiatives.",
];

export default function IeeeView() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800">
      <Header />

      {/* HERO BANNER - Standard MITS Cell Design */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffd15c]" />
            <span>Professional Society &amp; Technical Student Branch • STB64791</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            IEEE Student Branch
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Institute of Electrical and Electronics Engineers • Madanapalle Institute of Technology &amp; Science
          </p>
        </div>

        {/* BOTTOM-LEFT CORNER BREADCRUMB */}
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
            <li className="text-[#ffd15c] font-medium">IEEE Student Branch</li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTAINER - Full Space Coverage */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        {/* BACK BUTTON */}
        <div className="mb-6">
          <Link
            to="/cells"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#8B1D1D] hover:text-[#691313] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Cells &amp; Committees
          </Link>
        </div>

        {/* TOP SECTION: 2-COLUMN EXPANSIVE OVERVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start mb-10">
          {/* LEFT COLUMN (8-9 COLS) */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            {/* ABOUT IEEE */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                      About MITS IEEE Student Branch (STB64791)
                    </h2>
                    <p className="text-xs text-slate-500">
                      Affiliated with IEEE Hyderabad Section &amp; IEEE Ananthapuramu Subsection • Established 2005
                    </p>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
                  <p>
                    IEEE stands for the <strong>Institute of Electrical and Electronics Engineers</strong>. It is the largest technical professional organization in the world, dedicated to advancing technology for the benefit of humanity. IEEE inspires a global community through its publications, conferences, technology standards, and professional and educational activities.
                  </p>
                  <p>
                    The <strong>MITS IEEE Student Branch (STB64791)</strong> was initiated in 2005 and formally inaugurated on 2nd February 2006. Operating under the IEEE Hyderabad Section and IEEE Ananthapuramu Subsection, it is one of the most proactive and award-winning student branches across Andhra Pradesh and Telangana, supporting 17 specialized technical societies and councils.
                  </p>
                </div>

                {/* MISSION & VISION GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
                  <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#8B1D1D]" />
                      Our Mission
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#8B1D1D]" />
                      Our Vision
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      To be essential to the global technical community and recognized for the contributions of technical professionals in improving global conditions.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* KEY OBJECTIVES */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                      Major Objectives &amp; Focus Areas
                    </h2>
                    <p className="text-xs text-slate-500">
                      Core technical, humanitarian &amp; professional development tenets
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {objectives.map((obj, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-lg bg-slate-50/70 border border-slate-200/60 hover:bg-red-50/20 hover:border-red-200/60 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#8B1D1D] text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                        {obj}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* KEY ACHIEVEMENTS & GRANTS */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                      Distinguished Achievements &amp; Global Grants
                    </h2>
                    <p className="text-xs text-slate-500">
                      International funding, record memberships &amp; technical summits
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {achievements.map((ach, idx) => {
                    const IconComp = ach.icon;
                    return (
                      <div
                        key={idx}
                        className="p-5 rounded-xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/50 hover:border-[#8B1D1D]/40 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 mb-2.5">
                          <div className="w-8 h-8 rounded-lg bg-red-100/70 text-[#8B1D1D] flex items-center justify-center shrink-0">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <h4 className="font-bold text-slate-900 text-sm">
                            {ach.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {ach.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT SIDEBAR (3-4 COLS) */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6 lg:sticky lg:top-28">
            {/* CONTACT CARD - Crisp High Contrast */}
            <div className="bg-white rounded-xl shadow-md border border-slate-200/80 overflow-hidden">
              <div className="bg-[#8B1D1D] px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white !text-white leading-tight">
                    Contact Us
                  </h3>
                  <p className="text-xs text-amber-100/90 !text-amber-100 font-medium">
                    MITS IEEE Student Branch
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 !text-slate-900">
                    Dr. Somu Vijaya Bhaskar
                  </h4>
                  <div className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-[#8B1D1D] border border-red-200">
                    IEEE Coordinator
                  </div>
                  <p className="text-xs text-slate-700 font-medium mt-1.5 leading-relaxed">
                    Associate Professor, Dept. of EEE<br />
                    Chair, Communications Society - IEEE Hyderabad Section
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md bg-red-50 text-[#8B1D1D] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-slate-800 leading-relaxed">
                      <strong className="block text-slate-900 font-bold mb-0.5 uppercase tracking-wider text-[11px]">
                        Address:
                      </strong>
                      Madanapalle Institute of Technology &amp; Science<br />
                      Deemed to be University<br />
                      Madanapalle-Kadiri Road<br />
                      Kurabalakota Mandal, Madanapalle - 517325<br />
                      Andhra Pradesh, India
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md bg-red-50 text-[#8B1D1D] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-slate-800 leading-relaxed">
                      <strong className="block text-slate-900 font-bold mb-0.5 uppercase tracking-wider text-[11px]">
                        Phone:
                      </strong>
                      <a
                        href="tel:+918571280255"
                        className="text-[#8B1D1D] font-bold hover:underline"
                      >
                        +91-8571-280255
                      </a>
                      ,{" "}
                      <a
                        href="tel:+918571280706"
                        className="text-[#8B1D1D] font-bold hover:underline"
                      >
                        280706
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md bg-red-50 text-[#8B1D1D] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-slate-800 leading-relaxed">
                      <strong className="block text-slate-900 font-bold mb-0.5 uppercase tracking-wider text-[11px]">
                        E-Mail:
                      </strong>
                      <a
                        href="mailto:ieeechapter@mits.ac.in"
                        className="text-[#8B1D1D] hover:underline font-bold block break-all text-sm"
                      >
                        ieeechapter@mits.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* KEY CHAPTER HIGHLIGHTS */}
            <div className="bg-gradient-to-br from-red-50/50 to-amber-50/30 rounded-xl p-5 border border-red-100 shadow-sm">
              <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8B1D1D]" />
                Chapter Quick Facts
              </h4>
              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span><strong>Branch Code:</strong> STB64791</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span><strong>Section:</strong> IEEE Hyderabad Section</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span><strong>Subsection:</strong> IEEE Ananthapuramu Subsection</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span><strong>Technical Societies:</strong> 17 Chapters &amp; Councils</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span><strong>Global Footprint:</strong> IEEE SPAx, CAS, ComSoc, Nano</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FULL-WIDTH SECTION 1: OFFICIAL ORDERS & DOCUMENTS (Clean Horizontal Rows) */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 overflow-hidden mb-10">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  Official Orders, SOPs &amp; Documentation
                </h2>
                <p className="text-xs text-slate-500">
                  Institutional orders, standard operating procedures, societies &amp; membership reports
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {documents.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-6 py-4 hover:bg-red-50/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-800 text-sm sm:text-base group-hover:text-[#8B1D1D] transition-colors">
                      {doc.title}
                    </span>
                    <span className="hidden md:inline-block text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {doc.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200/80">
                      PDF
                    </span>
                    <FileText className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* FULL-WIDTH SECTION 2: 17 TECHNICAL SOCIETIES & COUNCILS (Completely Visible Without Scroll) */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Technical Societies &amp; Department Associations
                </h2>
                <p className="text-xs text-slate-500">
                  17 Specialized IEEE Technical Chapters &amp; Councils under MITS IEEE Student Branch
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 shadow-2xs overflow-hidden">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#8B1D1D] text-white">
                    <th className="py-3.5 px-4 font-semibold text-xs tracking-wider uppercase text-center w-14 whitespace-nowrap">
                      S.No
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-xs tracking-wider uppercase whitespace-nowrap">
                      Society / Council Name
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-xs tracking-wider uppercase">
                      Department Association
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-xs tracking-wider uppercase text-center whitespace-nowrap">
                      Chapter Code
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {societies.map((soc) => (
                    <tr
                      key={soc.sno}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="py-3 px-4 font-medium text-slate-500 text-center whitespace-nowrap">
                        {soc.sno}
                      </td>
                      <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">
                        {soc.society}
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        {soc.department}
                      </td>
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        {soc.code ? (
                          <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold bg-red-50 text-red-800 border border-red-200">
                            {soc.code}
                          </span>
                        ) : (
                          <span className="text-slate-400 text-xs">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* FULL-WIDTH SECTION 3: PROFESSIONAL EXECUTIVE COMMITTEE & ADVISORS 2025-26 (Completely Visible) */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  MITS IEEE Professional Executive Committee &amp; Advisors (2025-26)
                </h2>
                <p className="text-xs text-slate-500">
                  Executive governance, faculty advisors &amp; branch counselors
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 shadow-2xs overflow-hidden">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#8B1D1D] text-white">
                    <th className="py-3.5 px-4 font-semibold text-xs tracking-wider uppercase text-center w-14 whitespace-nowrap">
                      S.No
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-xs tracking-wider uppercase whitespace-nowrap">
                      Name of the Committee Member
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-xs tracking-wider uppercase whitespace-nowrap">
                      Designation
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-xs tracking-wider uppercase">
                      Name of IEEE Student Branch / Society / Council
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-xs tracking-wider uppercase text-center whitespace-nowrap">
                      Position
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {committeeMembers.map((member) => (
                    <tr
                      key={member.sno}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="py-3 px-4 font-medium text-slate-500 text-center whitespace-nowrap">
                        {member.sno}
                      </td>
                      <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">
                        {member.name}
                      </td>
                      <td className="py-3 px-4 text-slate-700 whitespace-nowrap">
                        {member.designation}
                      </td>
                      <td className="py-3 px-4 text-slate-800">
                        {member.branchOrSociety}
                      </td>
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                            member.position === "Chairperson"
                              ? "bg-amber-100 text-amber-900 border border-amber-300"
                              : member.position === "Counsellor"
                              ? "bg-red-100 text-red-900 border border-red-300"
                              : "bg-blue-50 text-blue-800 border border-blue-200"
                          }`}
                        >
                          {member.position}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <Footer />
    </div>
  );
}

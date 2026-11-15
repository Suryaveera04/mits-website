import React from "react";
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
  ChevronRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Building2,
  GraduationCap,
  Layers,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

interface CoordinatorMember {
  sno: number;
  name: string;
  designation: string;
  position: "Chairperson" | "Coordinator" | "Member" | "External Member";
  email: string;
}

const coordinators: CoordinatorMember[] = [
  {
    sno: 1,
    name: "Dr. C. Yuvaraj",
    designation: "Vice Chancellor I/C",
    position: "Chairperson",
    email: "vicechancellor@mits.ac.in",
  },
  {
    sno: 2,
    name: "Dr. P. Ramanathan",
    designation: "Professor, Dept. of ECE",
    position: "Member",
    email: "drramanathanp@mits.ac.in",
  },
  {
    sno: 3,
    name: "Mr. Imran Kuttagola",
    designation: "Assistant Professor, Dept. of CE",
    position: "Member",
    email: "imrankuttagola@mits.ac.in",
  },
  {
    sno: 4,
    name: "Mr. G. Kumar",
    designation: "Assistant Professor, Dept. of ME",
    position: "Member",
    email: "kumarg@mits.ac.in",
  },
  {
    sno: 5,
    name: "Mr. Asif Moiz",
    designation: "Assistant Professor, Dept. of ECE",
    position: "Member",
    email: "asifmoiz@mits.ac.in",
  },
  {
    sno: 6,
    name: "Dr. Vineet Kumar",
    designation: "Assistant Professor, Dept. of EEE",
    position: "Member",
    email: "drvineetkumar@mits.ac.in",
  },
  {
    sno: 7,
    name: "Dr. Senthil Kumar.K",
    designation: "Assistant Professor, Dept. of CSE",
    position: "Member",
    email: "drsenthilkumark@mits.ac.in",
  },
  {
    sno: 8,
    name: "Mr. L. Arul Jaya Prakash",
    designation: "Assistant Professor, Dept. of CST",
    position: "Member",
    email: "aruljayaprakashl@mits.ac.in",
  },
  {
    sno: 9,
    name: "Dr. Vamsi Bandi",
    designation: "Assistant Professor, Dept. of CSE (AI)",
    position: "Member",
    email: "drvamsib@mits.ac.in",
  },
  {
    sno: 10,
    name: "Ms. K. Mamatha",
    designation: "Lab Assistant, Dept. of CSE (CS)",
    position: "Member",
    email: "mamathak@mits.ac.in",
  },
  {
    sno: 11,
    name: "Dr. K. Nirmaladevi",
    designation: "Assistant Professor, Dept. of MCA",
    position: "Member",
    email: "drnirmaladevik@mits.ac.in",
  },
  {
    sno: 12,
    name: "Mr. Bojjam Praveen Kumar",
    designation: "Regional Lead, AP Academic and Government Relations NASSCOM Representative",
    position: "External Member",
    email: "t-Bojjam@mail.nasscom.in",
  },
  {
    sno: 13,
    name: "Dr. K. Sathesh",
    designation: "IQAC Coordinator",
    position: "Member",
    email: "iqac-coordinator@mits.ac.in",
  },
  {
    sno: 14,
    name: "Ms. S. Madhu Priya",
    designation: "Student Representative, II Year ECE",
    position: "External Member",
    email: "24691A04D3@mits.ac.in",
  },
  {
    sno: 15,
    name: "Mr. Nagesh Sreesanth",
    designation: "Student Representative, II Year CSE (AI and ML)",
    position: "External Member",
    email: "2469lA33B3@mits.ac.in",
  },
  {
    sno: 16,
    name: "Dr. E. Sandhya",
    designation: "NASSCOM SPOC, Assistant Professor, Dept. of CSE (AI&ML)",
    position: "Coordinator",
    email: "drsandhyae@mits.ac.in",
  },
];

interface DocumentItem {
  title: string;
  href: string;
  subItems?: { title: string; href: string }[];
}

const documents: DocumentItem[] = [
  {
    title: "NASSCOM Committee Order 2025-26",
    href: "https://mits.ac.in/assets/pdf/assoc/Office%20Order-NASSCOM.pdf",
  },
  {
    title: "NASSCOM Committee Order 2024-25",
    href: "https://mits.ac.in/assets/pdf/assoc/NASSCOM-Committee-order-2024.pdf",
  },
  {
    title: "NASSCOMM Office Order",
    href: "https://mits.ac.in/assets/pdf/assoc/NASSCOMM OFFICE ORDER.pdf",
  },
  {
    title: "Memorandum of Understanding (MoU)",
    href: "https://mits.ac.in/assets/pdf/assoc/NASSCOMM MoU 09.07.2024.pdf",
  },
  {
    title: "2024-25 I Semester",
    href: "https://mits.ac.in/nasscom",
    subItems: [
      {
        title: "Certification Details",
        href: "https://mits.ac.in/assets/pdf/assoc/Certification Details.pdf",
      },
      {
        title: "List of Courses",
        href: "https://mits.ac.in/assets/pdf/assoc/ListofCourses.pdf",
      },
      {
        title: "Registration Details",
        href: "https://mits.ac.in/assets/pdf/assoc/RegistrationDetails.pdf",
      },
    ],
  },
  {
    title: "Certificate Summary 2024-25 Sem I",
    href: "https://mits.ac.in/assets/pdf/assoc/certificatesummary_2024-25_Sem1.pdf",
  },
  {
    title: "Certificate Summary 2024-25 Sem II",
    href: "https://mits.ac.in/assets/pdf/assoc/certificatesummary_2024-25_Sem2.pdf",
  },
];

const objectives = [
  "To encourage continuous, self-paced learning, enabling participants to acquire new, industry-relevant skills.",
  "To implement short-term awareness and skill competency development programs including Foundation and Deep Skilling courses (both free and paid) in the emerging technologies area.",
  "To equip the students & faculty/staff members with specific skills that are important in today’s context. The learning intervention will keep them updated with the key trends / challenges faced in today’s digital ecosystem.",
];

export default function NasscomView() {
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
            <span>Industry Collaboration &amp; Skilling • MITS</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            NASSCOM Cell
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
            National Association of Software and Service Companies • Madanapalle Institute of Technology &amp; Science
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
            <li className="text-[#ffd15c] font-medium">NASSCOM Cell</li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTAINER - Full Page Coverage */}
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

        {/* 2-COLUMN EXPANSIVE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start">
          {/* LEFT CONTENT (8-9 COLS) */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            {/* ABOUT NASSCOM CELL */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                      About NASSCOM Cell
                    </h2>
                    <p className="text-xs text-slate-500">
                      Madanapalle Institute of Technology &amp; Science - Deemed to be University
                    </p>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
                  <p>
                    Madanapalle Institute of Technology &amp; Science - Deemed to be University, India, has signed a Memorandum of Understanding (MoU) with the National Association of Software and Service Companies (Nasscom). Represented by Vice Chancellor (I/c) &amp; Professor Dr. C. Yuvaraj, this collaboration aims to enhance the skill sets of MITS students, faculty, and staff through specialized training programs in emerging technologies.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* OBJECTIVES OF THE MOU */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                      Objectives of The MoU
                    </h2>
                    <p className="text-xs text-slate-500">
                      Core learning interventions &amp; capability goals
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {objectives.map((obj, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-4 rounded-lg bg-slate-50/70 border border-slate-200/60 hover:bg-red-50/20 hover:border-red-200/60 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#8B1D1D] text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        {obj}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* OFFICIAL ORDERS & DOCUMENTS - Clean Row List matching official site */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                      Official Orders &amp; Documents
                    </h2>
                    <p className="text-xs text-slate-500">
                      NASSCOM orders, agreements &amp; semester certifications
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-slate-100">
                  {documents.map((doc, idx) => (
                    <div key={idx} className="group">
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-6 py-4 hover:bg-red-50/20 transition-colors"
                      >
                        <span className="font-semibold text-slate-800 text-sm sm:text-base group-hover:text-[#8B1D1D] transition-colors">
                          {doc.title}
                        </span>
                        <div className="flex items-center gap-2.5 shrink-0">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200/80">
                            PDF
                          </span>
                          <FileText className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
                        </div>
                      </a>

                      {doc.subItems && doc.subItems.length > 0 && (
                        <div className="bg-slate-50/70 px-6 py-3 border-t border-slate-100 flex flex-wrap gap-2.5 items-center text-xs">
                          <span className="text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
                            Semester Documents:
                          </span>
                          {doc.subItems.map((sub, sIdx) => (
                            <a
                              key={sIdx}
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 hover:border-[#8B1D1D] hover:text-[#8B1D1D] font-medium text-slate-700 shadow-2xs transition-colors"
                            >
                              <FileText className="w-3.5 h-3.5 text-red-600" />
                              <span>{sub.title}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT SIDEBAR (3-4 COLS) */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6 lg:sticky lg:top-28">
            {/* CONTACT CARD - Crisp High-Contrast Colors */}
            <div className="bg-white rounded-xl shadow-md border border-slate-200/80 overflow-hidden">
              <div className="bg-[#8B1D1D] px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white !text-white leading-tight">
                    Contact
                  </h3>
                  <p className="text-xs text-amber-100/90 !text-amber-100 font-medium">
                    NASSCOM SPOC &amp; Directorate
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 !text-slate-900">
                    Dr. E. Sandhya
                  </h4>
                  <div className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-[#8B1D1D] border border-red-200">
                    Nasscom SPOC
                  </div>
                  <p className="text-xs text-slate-700 font-medium mt-1.5 leading-relaxed">
                    Assistant Professor, Dept. of CSE (AI&amp;ML)
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
                        href="mailto:nasscomcell@mits.ac.in"
                        className="text-[#8B1D1D] hover:underline font-bold block break-all text-sm"
                      >
                        nasscomcell@mits.ac.in
                      </a>
                      <a
                        href="mailto:drsandhyae@mits.ac.in"
                        className="text-slate-600 hover:text-[#8B1D1D] hover:underline block text-xs mt-1 break-all font-medium"
                      >
                        drsandhyae@mits.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* KEY HIGHLIGHTS CARD */}
            <div className="bg-gradient-to-br from-red-50/50 to-amber-50/30 rounded-xl p-5 border border-red-100 shadow-sm">
              <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8B1D1D]" />
                Key Focus Areas
              </h4>
              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span>Artificial Intelligence &amp; Machine Learning</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span>Cybersecurity &amp; Network Defense</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span>Cloud Computing &amp; Big Data Engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span>Robotics &amp; Autonomous Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span>FutureSkills Prime Foundation &amp; Deep-Skilling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FULL-WIDTH SECTION: LIST OF DEPARTMENT COORDINATORS (Completely visible without scroll) */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  List of Department Coordinators
                </h2>
                <p className="text-xs text-slate-500">
                  NASSCOM Cell Committee &amp; Institutional Representatives
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
                      Department Name
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-xs tracking-wider uppercase">
                      Designation
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-xs tracking-wider uppercase text-center whitespace-nowrap">
                      Position
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-xs tracking-wider uppercase whitespace-nowrap">
                      E-Mail ID
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {coordinators.map((member) => (
                    <tr
                      key={member.sno}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="py-3.5 px-4 font-medium text-slate-500 text-center whitespace-nowrap">
                        {member.sno}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                        {member.name}
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        {member.designation}
                      </td>
                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                            member.position === "Chairperson"
                              ? "bg-amber-100 text-amber-900 border border-amber-300"
                              : member.position === "Coordinator"
                              ? "bg-red-100 text-red-900 border border-red-300"
                              : member.position === "External Member"
                              ? "bg-blue-50 text-blue-800 border border-blue-200"
                              : "bg-slate-100 text-slate-800"
                          }`}
                        >
                          {member.position}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-1.5 text-xs text-[#8B1D1D] hover:underline font-semibold whitespace-nowrap"
                        >
                          <Mail className="w-3.5 h-3.5 shrink-0" />
                          <span className="whitespace-nowrap">{member.email}</span>
                        </a>
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

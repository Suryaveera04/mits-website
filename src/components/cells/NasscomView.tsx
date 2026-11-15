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

const documents = [
  {
    title: "NASSCOM Committee Order 2025-26",
    category: "Office Order",
    href: "https://mits.ac.in/assets/pdf/assoc/Office%20Order-NASSCOM.pdf",
  },
  {
    title: "NASSCOM Committee Order 2024-25",
    category: "Office Order",
    href: "https://mits.ac.in/assets/pdf/assoc/NASSCOM-Committee-order-2024.pdf",
  },
  {
    title: "NASSCOMM Office Order",
    category: "Institutional Order",
    href: "https://mits.ac.in/assets/pdf/assoc/NASSCOMM OFFICE ORDER.pdf",
  },
  {
    title: "Memorandum of Understanding (MoU)",
    category: "Legal & Partnership MoU",
    href: "https://mits.ac.in/assets/pdf/assoc/NASSCOMM MoU 09.07.2024.pdf",
  },
  {
    title: "2024-25 I Semester - Certification Details",
    category: "Semester Document",
    href: "https://mits.ac.in/assets/pdf/assoc/Certification Details.pdf",
  },
  {
    title: "2024-25 I Semester - List of Courses",
    category: "Curriculum & Courses",
    href: "https://mits.ac.in/assets/pdf/assoc/ListofCourses.pdf",
  },
  {
    title: "2024-25 I Semester - Registration Details",
    category: "Student Registration",
    href: "https://mits.ac.in/assets/pdf/assoc/RegistrationDetails.pdf",
  },
  {
    title: "Certificate Summary 2024-25 Sem I",
    category: "Summary Report",
    href: "https://mits.ac.in/assets/pdf/assoc/certificatesummary_2024-25_Sem1.pdf",
  },
  {
    title: "Certificate Summary 2024-25 Sem II",
    category: "Summary Report",
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

      {/* MAIN CONTAINER */}
      <div className="container mx-auto px-4 py-10 max-w-7xl">
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

        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT CONTENT (8 COLS) */}
          <div className="lg:col-span-8 space-y-8">
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

            {/* OFFICIAL DOCUMENTS & ORDERS */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Official Orders &amp; Documents
                      </h2>
                      <p className="text-xs text-slate-500">
                        Direct downloads &amp; regulatory documentation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {documents.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col justify-between p-4 rounded-xl border border-slate-200 hover:border-[#8B1D1D]/50 hover:shadow-md transition-all duration-200 bg-white"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center shrink-0 group-hover:bg-[#8B1D1D] group-hover:text-white transition-colors">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[11px] font-semibold text-[#8B1D1D] uppercase tracking-wider block">
                            {doc.category}
                          </span>
                          <h4 className="font-semibold text-slate-900 group-hover:text-[#8B1D1D] transition-colors text-sm line-clamp-2 leading-snug">
                            {doc.title}
                          </h4>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500 font-medium">
                        <span>View Document (PDF)</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#8B1D1D] transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* LIST OF DEPARTMENT COORDINATORS */}
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

                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#8B1D1D] text-white">
                        <th className="py-3 px-3 sm:px-4 font-semibold text-xs tracking-wider uppercase text-center w-14">
                          S.No
                        </th>
                        <th className="py-3 px-3 sm:px-4 font-semibold text-xs tracking-wider uppercase">
                          Name
                        </th>
                        <th className="py-3 px-3 sm:px-4 font-semibold text-xs tracking-wider uppercase">
                          Designation
                        </th>
                        <th className="py-3 px-3 sm:px-4 font-semibold text-xs tracking-wider uppercase text-center">
                          Position
                        </th>
                        <th className="py-3 px-3 sm:px-4 font-semibold text-xs tracking-wider uppercase">
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
                          <td className="py-3 px-3 sm:px-4 font-medium text-slate-500 text-center">
                            {member.sno}
                          </td>
                          <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                            {member.name}
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-slate-700">
                            {member.designation}
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-center">
                            <span
                              className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
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
                          <td className="py-3 px-3 sm:px-4">
                            <a
                              href={`mailto:${member.email}`}
                              className="inline-flex items-center gap-1.5 text-xs text-[#8B1D1D] hover:underline font-medium"
                            >
                              <Mail className="w-3.5 h-3.5 shrink-0" />
                              <span className="break-all">{member.email}</span>
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

          {/* RIGHT SIDEBAR (4 COLS) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* CONTACT CARD */}
            <div className="bg-white rounded-xl shadow-md border border-slate-200/80 overflow-hidden">
              <div className="bg-[#8B1D1D] text-white px-6 py-4">
                <h3 className="text-xl font-bold tracking-tight">Contact</h3>
                <p className="text-xs text-white/80">NASSCOM SPOC &amp; Directorate</p>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Dr. E. Sandhya
                  </h4>
                  <p className="text-xs font-semibold text-[#8B1D1D] uppercase tracking-wide mt-0.5">
                    Nasscom SPOC
                  </p>
                  <p className="text-xs text-slate-600">
                    Assistant Professor, Dept. of CSE (AI&amp;ML)
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-3.5 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#8B1D1D] shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700 leading-relaxed">
                      <strong className="block text-slate-900 font-semibold mb-0.5">
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
                    <Phone className="w-4 h-4 text-[#8B1D1D] shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700 leading-relaxed">
                      <strong className="block text-slate-900 font-semibold mb-0.5">
                        Phone:
                      </strong>
                      <a
                        href="tel:+918571280255"
                        className="hover:text-[#8B1D1D] transition-colors"
                      >
                        +91-8571-280255
                      </a>
                      ,{" "}
                      <a
                        href="tel:+918571280706"
                        className="hover:text-[#8B1D1D] transition-colors"
                      >
                        280706
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#8B1D1D] shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700 leading-relaxed">
                      <strong className="block text-slate-900 font-semibold mb-0.5">
                        E-Mail:
                      </strong>
                      <a
                        href="mailto:nasscomcell@mits.ac.in"
                        className="text-[#8B1D1D] hover:underline font-semibold block"
                      >
                        nasscomcell@mits.ac.in
                      </a>
                      <a
                        href="mailto:drsandhyae@mits.ac.in"
                        className="text-slate-600 hover:underline block text-[11px] mt-0.5"
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
      </div>

      <Footer />
    </div>
  );
}

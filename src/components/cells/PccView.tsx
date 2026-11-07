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
  ShieldCheck,
  Heart,
  Calendar,
  Download,
  Clock,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

type TabId = "home" | "documents" | "events" | "contact";

const tabs: { id: TabId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "documents", label: "Documents" },
  { id: "events", label: "Events" },
  { id: "contact", label: "Contact Us" },
];

const committeeMembers = [
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

const documents = [
  {
    title: "SSC Cell 2025 26",
    href: "https://mits.ac.in/assets/pdf/admin/SSC Cell-2025-26.pdf",
  },
  {
    title: "SSC 2025 26",
    href: "https://mits.ac.in/assets/pdf/admin/SSC-2025-26.pdf",
  },
  {
    title: "Institute Counsellor Office Order",
    href: "https://mits.ac.in/assets/pdf/admin/Institute Counsellor Office Order.pdf",
  },
  {
    title: "Action taken counselling 30th nov 2019",
    href: "https://mits.ac.in/assets/pdf/admin/Action taken_counselling_30th nov 2019.pdf",
  },
  {
    title: "Psychological Counselling Committee Office Order",
    href: "https://mits.ac.in/assets/pdf/admin/Psychological Counselling Committee Office Order.pdf",
  },
  {
    title: "MoM 01 & 02",
    href: "https://mits.ac.in/assets/pdf/admin/MoM-01 & 02.pdf",
  },
  {
    title: "Acknowledgement Office Order Student Counsellor",
    href: "https://mits.ac.in/assets/pdf/admin/Acknowledgement-Office Order - Student Counsellor.pdf",
  },
  {
    title: "MITS Deemed to be University Brochure",
    href: "https://mits.ac.in/public/uploads/static-pdf/MITS Deemed to be University Brochure 2026.pdf",
  },
];

const events = [
  {
    title: "Action Taken Report & Student Counselling Review Session",
    date: "30th November 2019",
    description: "Detailed institutional review and action taken proceedings covering student mental health, personal counselling, stress relief, and parental guidance sessions.",
    href: "https://mits.ac.in/assets/pdf/admin/Action taken_counselling_30th nov 2019.pdf",
  },
  {
    title: "Mindfulness, Yoga & Meditation Workshop for Students",
    date: "Regular Academic Initiative",
    description: "Campus-wide workshops emphasizing stress reduction, mindfulness practices, mental well-being, and establishing healthy lifestyles.",
    href: "https://forms.office.com/r/vKhj6MSXEs",
  },
  {
    title: "Specialized Psychiatric Consultation & Vulnerable Case Guidance",
    date: "Continuous Student Support",
    description: "Personalized clinical guidance in collaboration with External Expert Counsellor & Psychiatrist Dr. Sujay Nama.",
    href: "https://forms.office.com/r/vKhj6MSXEs",
  },
  {
    title: "Parent-Student Interactive Counselling & Adaptation Sessions",
    date: "Annual Orientation Programme",
    description: "Guidance sessions aimed at smoothing the transition into higher education, managing adjustment concerns, and building emotional resilience.",
    href: "https://forms.office.com/r/vKhj6MSXEs",
  },
];

export default function PccView() {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafaf7]">
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
        <div className="absolute inset-0 bg-black/25 bg-gradient-to-b from-black/20 via-black/10 to-black/35" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 drop-shadow-sm">
            Cells &amp; Committees • Student Support &amp; Wellness
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Psychological Counselling Cell
          </h1>
          <p className="text-white/95 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium italic">
            &ldquo;Emotional well-being is just as important to us as Breathing is&rdquo;
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
            <li className="text-[#ffd15c] font-semibold truncate max-w-[240px]">
              Psychological Counselling Cell
            </li>
          </ol>
        </nav>
      </section>

      {/* TAB NAVIGATION BAR */}
      <div className="border-b border-gray-200 bg-white sticky top-16 md:top-20 z-20 shadow-xs">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="flex items-center gap-0 overflow-x-auto">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-4 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? "text-[#b31317] border-b-2 border-[#b31317]"
                    : "text-[#0f2a44]/70 hover:text-[#0f2a44]"
                }`}
              >
                {i > 0 && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 text-base select-none">
                    |
                  </span>
                )}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-10 md:py-14 max-w-6xl">
        <button
          onClick={() => navigate("/cells")}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells &amp; Committees
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN CONTENT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            {activeTab === "home" && (
              <>
                {/* PRIMARY CELL OVERVIEW & VERBATIM PORTAL CARD */}
                <ScrollReveal>
                  <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-6">
                    {/* Introductory Paragraph */}
                    <div className="text-[#0f2a44]/85 text-sm md:text-base leading-relaxed text-justify space-y-3">
                      <p>
                        In today&apos;s ever-changing complex world, educational institutions play a crucial role in shaping young minds by preparing them for future success. Academic achievement is undeniably important, but it is equally vital to address students&apos; emotional and mental well-being. Hence, MITS initiated Counselling services through Mrs. Vijaya Lakshmi, Institutional Counsellor, who completed Masters in Guidance &amp; Counselling in NCERT, Mysore. She has been rendering Mental Health &amp; Counselling services to MITS students. Psychological problems, parental counselling, interpersonal relationship, stress related problems are dealt with. How to promote mental health, significance of yoga and meditation, healthy habits and positive thinking and trends in the life style etc are being addressed in the campus. She also coordinates with Dr. Sujay Nama an External Expert Counsellor &amp; Psychiatrist to handle the vulnerable cases.
                      </p>
                    </div>

                    <hr className="border-gray-100 my-6" />

                    {/* Objectives Section - Exact badge styling from old site */}
                    <div>
                      <div className="inline-block bg-[#1a446c] text-white font-bold px-3.5 py-1 text-base md:text-lg rounded shadow-xs mb-4 tracking-wide">
                        Objectives
                      </div>
                      <ul className="space-y-2 text-[#0f2a44]/85 text-sm md:text-base leading-relaxed">
                        <li className="flex items-start gap-2.5">
                          <span className="text-[#1a446c] font-bold text-sm select-none shrink-0 mt-0.5">◆</span>
                          <span>To empower the students in recognizing their unique potentials and skills</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="text-[#1a446c] font-bold text-sm select-none shrink-0 mt-0.5">◆</span>
                          <span>To guide them to handle social, personality development and adjustment issues.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="text-[#1a446c] font-bold text-sm select-none shrink-0 mt-0.5">◆</span>
                          <span>To encourage listening skills, developing empathy and interpersonal skills by enriching healthy relationship.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Importance of Counselling */}
                    <div className="pt-2">
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-3 leading-snug">
                        Importance of Counselling: &ldquo;Emotional well-being is just as important to us as Breathing is&rdquo;
                      </h3>

                      <div className="space-y-4 text-[#0f2a44]/85 text-sm md:text-[15px] leading-relaxed text-justify">
                        <p>
                          <strong className="text-gray-900 font-semibold">1. Promoting Mental Health:</strong> It is a proactive approach to promote mental health. By providing a safe and confidential environment for students to express their thoughts, emotions, and concerns there is always a need for a Counsellor. By addressing issues such as anxiety, stress, depression, and low self-esteem, a counsellor can help a student to build resilience, coping strategies, and foster self-esteem. In turn, this contributes to improve the academic performance and overall well-being of a student.
                        </p>
                        <p>
                          <strong className="text-gray-900 font-semibold">2. Emotional Support and Personal Development:</strong> Counselling offers invaluable emotional support to students who have been experiencing challenges at home, school, or within themselves. a A patient listening ear, empathetic guidance, and practical advice will enable the students to navigate difficulties effectively. By addressing personal issues, it teaches essential life skills, and empowers students to develop resilience, decision-making abilities, and establish healthy relationships.
                        </p>
                        <p>
                          <strong className="text-gray-900 font-semibold">3. Academic Success:</strong> The connection between emotional well-being and academic success is complementary. Students who are struggling emotionally often find it challenging to concentrate, engage in learning, and perform to their full potential. Hence, counselling interventions address underlying emotional barriers, by equipping students with effective coping mechanisms and study skills.
                        </p>
                      </div>
                    </div>

                    {/* Principles of Counselling */}
                    <div className="pt-2">
                      <h3 className="text-xl md:text-2xl font-bold text-[#b31317] mb-3">
                        Principles of Counselling
                      </h3>
                      <ul className="space-y-1.5 text-[#0f2a44]/85 text-sm md:text-base">
                        <li className="flex items-center gap-2">
                          <span className="text-gray-600 select-none">•</span>
                          <span>Principle of Acceptance</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-gray-600 select-none">•</span>
                          <span>Principle of communication</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-gray-600 select-none">•</span>
                          <span>Principle of empathy</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-gray-600 select-none">•</span>
                          <span>Principle of non-judgemental attitude</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-gray-600 select-none">•</span>
                          <span>Principle of confidentiality</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-gray-600 select-none">•</span>
                          <span>Principle of individuality</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-gray-600 select-none">•</span>
                          <span>Principle of non-emotional involvement</span>
                        </li>
                      </ul>
                    </div>

                    {/* Call-to-action Form */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="font-bold text-[#0f2a44] text-sm md:text-base mb-2">
                        Kindly fill the form to fix your problem:
                      </p>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#fff8e6]/60 border border-[#caa74d]/30">
                        <a
                          href="https://forms.office.com/r/vKhj6MSXEs"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 text-[#b31317] hover:text-[#8b0000] font-semibold text-sm sm:text-base group break-all"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#b31317] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                            <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                          </span>
                          <span className="underline">https://forms.office.com/r/vKhj6MSXEs</span>
                        </a>
                        <a
                          href="https://forms.office.com/r/vKhj6MSXEs"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#b31317] hover:bg-[#8b0000] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition-colors shrink-0"
                        >
                          Fill Form <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </section>
                </ScrollReveal>

                {/* COMMITTEE MEMBERS TABLE */}
                <ScrollReveal>
                  <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                    <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#b31317]" />
                      Psychological Counselling Committee
                    </h2>
                    <p className="text-[#0f2a44]/60 text-xs sm:text-sm mb-6">
                      Official committee constituted to oversee student guidance, emotional well-being, and psychiatric consultations.
                    </p>

                    <div className="overflow-x-auto rounded-xl border border-gray-200">
                      <table className="w-full text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-[#0f2a44] text-white">
                            <th className="py-3 px-3 text-center font-semibold w-12">S.No</th>
                            <th className="py-3 px-4 text-left font-semibold">Name</th>
                            <th className="py-3 px-4 text-left font-semibold">Designation</th>
                            <th className="py-3 px-4 text-left font-semibold">Position</th>
                            <th className="py-3 px-4 text-left font-semibold">Email ID</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {committeeMembers.map((m, idx) => (
                            <tr
                              key={m.sno}
                              className={idx % 2 === 0 ? "bg-white hover:bg-gray-50/80" : "bg-gray-50/50 hover:bg-gray-50"}
                            >
                              <td className="py-3 px-3 text-center font-medium text-gray-500">{m.sno}</td>
                              <td className="py-3 px-4 font-semibold text-[#0f2a44] whitespace-nowrap">{m.name}</td>
                              <td className="py-3 px-4 text-gray-700">{m.designation}</td>
                              <td className="py-3 px-4">
                                <span
                                  className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                                    m.position === "Chairman"
                                      ? "bg-amber-100 text-amber-800"
                                      : m.position === "Member Secretary"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-gray-100 text-gray-700"
                                  }`}
                                >
                                  {m.position}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-gray-600">
                                {m.email ? (
                                  <a
                                    href={`mailto:${m.email}`}
                                    className="text-[#b31317] hover:underline flex items-center gap-1 font-medium text-xs break-all"
                                  >
                                    <Mail className="w-3 h-3 shrink-0" />
                                    {m.email}
                                  </a>
                                ) : (
                                  "—"
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                </ScrollReveal>
              </>
            )}

            {activeTab === "documents" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                  <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#b31317]" />
                    Documents &amp; Office Orders
                  </h2>
                  <p className="text-[#0f2a44]/60 text-xs sm:text-sm mb-6">
                    Download and inspect official office orders, minutes of meetings, and student counselling policies.
                  </p>

                  <ul className="divide-y divide-gray-100">
                    {documents.map((doc, idx) => (
                      <li key={idx}>
                        <a
                          href={doc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 py-3.5 group hover:bg-[#fff8e6]/40 -mx-3 px-3 rounded-lg transition-colors"
                        >
                          <span className="flex items-center gap-3 text-sm text-[#0f2a44] group-hover:text-[#b31317] transition-colors font-medium">
                            <FileText className="w-4 h-4 shrink-0 text-[#caa74d]" />
                            {doc.title}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs text-gray-400 group-hover:text-[#b31317] font-medium shrink-0">
                            Download <Download className="w-3.5 h-3.5" />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              </ScrollReveal>
            )}

            {activeTab === "events" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                  <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#b31317]" />
                    Events &amp; Mental Health Initiatives
                  </h2>
                  <p className="text-[#0f2a44]/60 text-xs sm:text-sm mb-6">
                    Workshops, awareness drives, and interactive sessions conducted by the Psychological Counselling Cell.
                  </p>

                  <div className="space-y-4">
                    {events.map((ev, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-gray-200 hover:border-[#caa74d] hover:bg-[#fff8e6]/20 transition-all space-y-2"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h3 className="font-semibold text-[#0f2a44] text-base">{ev.title}</h3>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-[#b31317] border border-red-100 shrink-0 self-start sm:self-auto">
                            {ev.date}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{ev.description}</p>
                        <div className="pt-1">
                          <a
                            href={ev.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#b31317] hover:underline"
                          >
                            View Details / Proceedings <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            )}

            {activeTab === "contact" && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-6">
                  <h2 className="font-display text-2xl font-bold text-[#0f2a44] flex items-center gap-2">
                    <Phone className="w-6 h-6 text-[#b31317]" />
                    Contact Counselling Cell
                  </h2>

                  <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                    <h3 className="font-bold text-[#0f2a44] text-lg">Mrs. U. Vijaya Lakshmi</h3>
                    <p className="text-sm font-semibold text-[#b31317]">
                      Coordinator • Senior Manager - Student Counsellor &amp; Associate Director - International Relations
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Masters in Guidance &amp; Counselling, NCERT, Mysore. Certified Student Counsellor.
                    </p>

                    <div className="pt-2 space-y-2 text-sm text-[#0f2a44]">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#caa74d] shrink-0" />
                        <a href="mailto:vijayalakshmiu@mits.ac.in" className="hover:underline font-medium text-[#b31317]">
                          vijayalakshmiu@mits.ac.in
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#caa74d] shrink-0" />
                        <span className="font-medium">+91-9100600773, 08571-280255, 280706</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#caa74d] shrink-0 mt-0.5" />
                        <span>Madanapalle Institute of Technology &amp; Science (Deemed to be University), Kadiri Road, Angallu, Madanapalle - 517325, A.P.</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2">
                    <h4 className="font-bold text-[#0f2a44] text-base">External Psychiatrist &amp; Expert Consultant</h4>
                    <p className="text-sm text-gray-700">
                      <strong>Dr. Sujay Nama</strong> — Psychiatrist &amp; External Expert Counsellor
                    </p>
                    <p className="text-xs text-gray-600">
                      Email:{" "}
                      <a href="mailto:dr_sujay@yahoo.com" className="text-[#b31317] underline">
                        dr_sujay@yahoo.com
                      </a>
                    </p>
                  </div>
                </section>
              </ScrollReveal>
            )}
          </div>

          {/* SIDEBAR COLUMN */}
          <div className="space-y-6">
            {/* APPOINTMENT FORM CALLOUT */}
            <ScrollReveal>
              <div className="bg-gradient-to-br from-[#0f2a44] to-[#1a446c] text-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#ffd15c]">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Need Support?</h3>
                    <p className="text-xs text-white/70">100% Confidential</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-4">
                  Students and staff can fix appointments and share their concerns in a completely safe, welcoming, and non-judgemental environment.
                </p>
                <a
                  href="https://forms.office.com/r/vKhj6MSXEs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#b31317] hover:bg-[#8b0000] text-white text-sm font-semibold transition-colors shadow-sm"
                >
                  Book Counselling Session <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>

            {/* COUNSELLOR QUICK CONTACT CARD */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 space-y-4">
                <div className="flex items-center gap-2 text-[#0f2a44] font-bold text-base border-b border-gray-100 pb-3">
                  <ShieldCheck className="w-5 h-5 text-[#b31317]" />
                  Cell Coordinator
                </div>
                <div>
                  <p className="font-bold text-[#0f2a44] text-base">Mrs. U. Vijaya Lakshmi</p>
                  <p className="text-xs font-semibold text-[#b31317] mt-0.5">
                    Senior Manager - Student Counsellor
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Masters in Guidance &amp; Counselling, NCERT Mysore
                  </p>
                </div>
                <div className="space-y-2 text-xs sm:text-sm pt-2 border-t border-gray-100">
                  <a
                    href="mailto:vijayalakshmiu@mits.ac.in"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#b31317] transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-[#caa74d] shrink-0" />
                    vijayalakshmiu@mits.ac.in
                  </a>
                  <a
                    href="tel:+919100600773"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#b31317] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#caa74d] shrink-0" />
                    +91-9100600773
                  </a>
                  <div className="flex items-start gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-[#caa74d] shrink-0 mt-0.5" />
                    <span>MITS Deemed to be University, Madanapalle</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* SEVEN GUIDING PRINCIPLES MINI CARD */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-[#caa74d]/30 bg-gradient-to-br from-[#fffdfa] to-[#fff8e6]/40 p-6 shadow-sm">
                <div className="flex items-center gap-2 text-[#0f2a44] font-bold text-sm mb-3">
                  <Sparkles className="w-4 h-4 text-[#caa74d]" />
                  Core Guiding Principles
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs text-gray-700">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b31317]" /> Principle of Acceptance
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b31317]" /> Principle of Communication
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b31317]" /> Principle of Empathy
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b31317]" /> Principle of Non-Judgemental Attitude
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b31317]" /> Principle of Confidentiality
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b31317]" /> Principle of Individuality
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b31317]" /> Principle of Non-Emotional Involvement
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* TIMINGS & HELPLINE */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-[#0f2a44] font-bold text-sm">
                  <Clock className="w-4 h-4 text-[#b31317]" />
                  Cell Timings &amp; Walk-ins
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Monday – Saturday: <strong>9:00 AM – 5:00 PM</strong>
                  <br />
                  Walk-in consultations welcome, or book ahead using the MS Office form for scheduled time slots.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


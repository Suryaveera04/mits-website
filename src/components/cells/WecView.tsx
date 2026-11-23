import React from "react";
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
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "https://mits.edu/";

const documents = [
  {
    title: "Office Order - Women helpline 24X7 - 15.08.2025",
    href: "https://mits.ac.in/assets/pdf/assoc/Women%20Helpline-16-8-2025.pdf",
  },
  {
    title: "Office Order - Women helpline 24X7 - 02.09.2024",
    href: "https://mits.ac.in/public/uploads/wec/Women%20helpline%2024-7%20-Office%20order-%20Sep%202024.pdf",
  },
  {
    title: "Office Order - Women Empowerment Cell - 05.11.2025",
    href: "https://mits.ac.in/public/uploads/wec/Women%20Empowerment%20Cell-5-11-2025.pdf",
  },
  {
    title: "Office Order - Women Empowerment Cell - 02.09.2024",
    href: "https://mits.ac.in/public/uploads/wec/Women%20Empowerment%20Committee-sep%202024.pdf",
  },
  {
    title: "Office Order - Women Empowerment Cell - 22.07.2024",
    href: "https://mits.ac.in/public/uploads/wec/Office%20order%20-%20Women%20%20Empowerment%20Cell-%20July%202024.pdf",
  },
  {
    title: "Office Order - Women Empowerment Cell - 19.01.2024",
    href: "https://mits.ac.in/public/uploads/wec/WEC-Members%20office%20order.pdf",
  },
];

const objectives = [
  "Identification of strong leadership and change makers and building their capacity.",
  "To promote a culture of respect and equality for female gender.",
  "The provision of opportunities and programs for female gender to be financially, mentally and emotionally empowered so as to promote their growth as individuals in their own right.",
  "To make them aware about the guidelines of Supreme Court and to ensure that sexual harassment is treated as an unacceptable social behavior within the institution and the society.",
  "To conduct seminar, workshop to impart knowledge of opportunities and tools available and train the women.",
  "To inculcate entrepreneurial attitude among young girls, at the earliest so that they can be 'job givers' rather than 'job takers'.",
  "To make women understand that Empowered and educated women are less likely to fall prey to sexual abuse, workplace harassment, domestic abuse and many more.",
  "To show that the Empowered women can have happier families.",
  "To imbibe the idea that child marriage, dowry killings, discrimination, female feticide, etc., and other harmful acts can be stopped by women empowerment.",
];

const events = [
  {
    title: 'An "International Women\'s Day Celebration - 2026" was organized by Women Empowerment Cell on 07th March 2026.',
    href: "https://mits.ac.in/assets/pdf/assoc/International%20Women's%20Day%20Celebration-2026.pdf",
  },
  {
    title: 'An awareness programme "Women Health and Self-Hygiene" was organized by Women Empowerment Cell on 04th December 2025.',
    href: "https://mits.ac.in/assets/pdf/assoc/Women%20Health%20and%20Self-Hygiene-2025.pdf",
  },
  {
    title: 'An Awareness Program on "Building Gender Sensitivity: Towards an inclusive Campus" was organized by WEC in Collaboration with GRC and ICC on 27th & 28th October 2025.',
    href: "https://mits.ac.in/assets/pdf/aids/Building%20Gender%20Sensitivity%20Towards%20an%20inclusive%20Campus.pdf",
  },
  {
    title: 'An event on "Nurturing Minds, Empowering Futures" was organized by Dept. of CSE-AI in association with WEC and IEEE-RAS Student Chapter on 06th August 2025.',
    href: "https://mits.ac.in/assets/pdf/aids/Nurturing%20Minds,%20Empowering%20Futures.pdf",
  },
  {
    title: 'An Awareness Program on "Wired For Success: Empowering Girls in ICT" was organized by WEC in association with Dept. of ECE on 24th April 2025.',
    href: "https://mits.ac.in/assets/pdf/assoc/Wired%20For%20Success%20Empowering%20Girls%20in%20ICT.pdf",
  },
  {
    title: 'An "International Women\'s Day Celebration - 2025" was organized by Women Empowerment Cell on 07th March 2025.',
    href: "https://mits.ac.in/assets/pdf/assoc/International%20Women's%20Day%20Celebration-2025.pdf",
  },
  {
    title: 'An Awareness program on "Menstrual Hygiene Management" was organised by Women Empowerment Cell on 12th December 2024.',
    href: "https://mits.ac.in/assets/pdf/aids/Menstrual%20Hygiene%20Management.pdf",
  },
  {
    title: 'An Awareness program on "Health and Hygiene for Women" was organised by Women Empowerment Cell on 22nd October 2024.',
    href: "https://mits.ac.in/assets/pdf/aids/Health%20and%20Hygiene%20for%20Women.pdf",
  },
  {
    title: 'An Expert talk on Fostering "Fortify, Hygiene, Etiquette, and Safety Triad" was organized by Dept. of CSE-AI in association with WEC on 20th August 2024.',
    href: "https://mits.ac.in/assets/pdf/aids/Fortify%20Hygiene%20Etiquette%20and%20Safety%20Triad.pdf",
  },
  {
    title: '"International Women\'s Day" was organized by ICC of MITS on 7th March, 2024.',
    href: "https://mits.ac.in/assets/pdf/assoc/International%20Womens%20Day-2024.pdf",
  },
  {
    title: 'An Awareness Programme on "She Leads: Empowering Women for a Better Tomorrow" was organized by WEC of MITS on 16th November 2023.',
    href: "https://mits.ac.in/assets/pdf/assoc/SHE%20LEADS%20EMPOWERING%20WOMEN%20FOR%20A%20BETTER%20TOMORROW.pdf",
  },
  {
    title: '"International Women\'s Day" was organized by ICC of MITS on 8th March, 2023.',
    href: "https://mits.ac.in/assets/pdf/assoc/International%20Womens%20Day%202023.pdf",
  },
  {
    title: 'An Awareness Programme on "Step Forwarding and Championing – Women\'s Rights and Opportunities" was organized by WEC of MITS on 24th February 2023.',
    href: "https://mits.ac.in/assets/pdf/assoc/STEP%20FORWARDING%20AND%20CHAMPIONING.pdf",
  },
  {
    title: 'An awareness session on "DISHA App" was organized by Women Empowerment Cell on 2-08-2021.',
    href: "https://mits.ac.in/assets/pdf/assoc/DISHA-App-02-08-2021.pdf",
  },
  {
    title: 'An awareness session on "DISHA App" was organized by Women Empowerment Cell on 12-07-2021.',
    href: "https://mits.ac.in/assets/pdf/assoc/DISHA%20App-min.pdf",
  },
  {
    title: "National Girl Child Day was organized by ICC on 24th January 2020.",
    href: "https://mits.ac.in/assets/pdf/assoc/National%20Girl%20Child%20Day%2020%20by%20ICC%20_%20WEC.pdf",
  },
];

const committeeMembers = [
  { name: "Mrs. M. Sangeetha", designation: "Asst Professor", dept: "CSE" },
  { name: "Mrs. Anitha K", designation: "Asst Professor", dept: "Civil" },
];

export default function WecView() {
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
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 drop-shadow-sm">
            Cells &amp; Committees • Equity &amp; Inclusion
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Women Empowerment Cell
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            Empowering and safeguarding the rights of female students and staff members of MITS.
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
            <li className="text-[#ffd15c] font-semibold">Women Empowerment Cell</li>
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT / MAIN CONTENT (7 cols on lg, 8 cols on xl) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            {/* ABOUT WEC */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <BookOpen className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-[#b31317]">
                      About WEC
                    </h2>
                    <p className="text-xs text-[#0f2a44]/60">
                      Women Empowerment Cell – MITS Deemed to be University
                    </p>
                  </div>
                </div>

                <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3.5 !text-justify text-justify">
                  <p>
                    MITS - Deemed to be University has constituted Women Empowerment Cell (WEC) to empower and safeguard the rights of female students and staff members of the college.
                  </p>
                  <p>
                    With a view to taking up women&apos;s issues and problems, the cell aims at creating awareness of their rights and duties. It also provides a platform for women to share their experiences and views regarding their status in the society and to suggest ways to improve and empower themselves.
                  </p>
                  <p>
                    Aiming at intellectual and social upliftment of the female students, the cell stands for facilitating women&apos;s empowerment through guest lectures, seminars, awareness programmes and other welfare activities.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* VISION & MISSION - EXACT MATCHING TO THE IMAGE SPECIFICATION */}
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* VISION - ORANGE CARD */}
                <div className="bg-[#f58220] rounded-2xl p-7 md:p-8 text-white flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3">
                    <img
                      src="/assets/icons/vision-icon.png"
                      alt="VISION"
                      className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-sm"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-wider uppercase mb-4 !text-white text-white drop-shadow-sm">
                    VISION
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-white/95 !text-justify text-justify font-normal">
                    To promote general well-being of female students, teaching and non-teaching women staff of the College and to provide and maintain a dignified, congenial working environment for women and enable them to explore their imminent potential in all aspects.
                  </p>
                </div>

                {/* MISSION - PURPLE CARD */}
                <div className="bg-[#7e57c2] rounded-2xl p-7 md:p-8 text-white flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3">
                    <img
                      src="/assets/icons/mission-icon.png"
                      alt="MISSION"
                      className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-sm"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-wider uppercase mb-4 !text-white text-white drop-shadow-sm">
                    MISSION
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-white/95 !text-justify text-justify font-normal">
                    To train women to acquire wide range of skills and knowledge and to develop and increase their social, economic and intellectual capacities for amity, security and prosperity of mankind.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* OBJECTIVES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-4 flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#b31317]" />
                  Objectives
                </h2>
                <ul className="space-y-3">
                  {objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#b31317] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed !text-justify text-justify">
                        {obj}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* OFFICIAL ORDERS & DOCUMENTS (SINGLE-LINE STYLE) */}
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
                      <p className="text-xs text-[#0f2a44]/60">Official appointments, guidelines, and women helpline orders</p>
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

            {/* EVENTS ORGANIZED (SINGLE-LINE STYLE WITH PDF REPORT LINK) */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                      <Calendar className="w-5 h-5 text-[#b31317]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44]">
                        Events Organized
                      </h3>
                      <p className="text-xs text-[#0f2a44]/60">Chronological awareness sessions, workshops, and celebrations</p>
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
                        <p className="text-sm sm:text-base text-slate-700 leading-snug !text-justify text-justify group-hover:text-[#0f2a44] transition-colors">
                          {ev.title}
                        </p>
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
          </div>

          {/* RIGHT / SIDEBAR COLUMN (5 cols on lg, 4 cols on xl - Increased Width) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            {/* CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden text-left">
                <div className="bg-[#b31317] px-6 py-4">
                  <h3 className="font-display text-lg font-bold !text-white text-white tracking-wide">Contact</h3>
                </div>
                <div className="p-6 space-y-5 text-sm text-slate-700">
                  <div className="text-left">
                    <p className="font-bold text-[#0f2a44] text-lg !text-left">Dr. S. Shanmuga Priya</p>
                    <p className="text-sm text-[#b31317] font-semibold mt-0.5 !text-left">
                      WEC Coordinator - Chairperson
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
                      <p className="text-slate-600 !text-left">+91-9100973251; 8571-280255; 280706</p>
                    </div>
                  </div>
                  <hr className="border-gray-100" />
                  <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                    <Mail className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                    <div className="text-left">
                      <p className="font-semibold text-[#0f2a44] !text-left">Email :</p>
                      <a
                        href="mailto:wec@mits.ac.in"
                        className="text-[#b31317] hover:underline font-semibold whitespace-nowrap block"
                      >
                        wec@mits.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* COMMITTEE MEMBERS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#b31317] px-6 py-3.5">
                  <h3 className="font-display text-base font-bold !text-white text-white tracking-wide flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Committee Members
                  </h3>
                </div>
                <div className="divide-y divide-slate-100">
                  {committeeMembers.map((m, i) => (
                    <div key={i} className="p-4">
                      <p className="font-bold text-[#0f2a44] text-sm">{m.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{m.designation}</p>
                      <p className="text-xs text-[#b31317] font-semibold">{m.dept}</p>
                    </div>
                  ))}
                </div>
              </section>
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

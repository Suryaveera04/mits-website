import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, FileText, ExternalLink, MapPin, Phone, Mail, ChevronRight, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const documents = [
  { title: "Office Order - Women helpline 24X7 - 15.08.2025", href: "https://mits.ac.in/assets/pdf/assoc/Women Helpline-16-8-2025.pdf" },
  { title: "Office Order - Women helpline 24X7 - 02.09.2024", href: "https://mits.ac.in/public/uploads/wec/Women helpline 24-7 -Office order- Sep 2024.pdf" },
  { title: "Office Order - Women Empowerment Cell - 05.11.2025", href: "https://mits.ac.in/public/uploads/wec/Women Empowerment Cell-5-11-2025.pdf" },
  { title: "Office Order - Women Empowerment Cell - 02.09.2024", href: "https://mits.ac.in/public/uploads/wec/Women Empowerment Committee-sep 2024.pdf" },
  { title: "Office Order - Women Empowerment Cell - 22.07.2024", href: "https://mits.ac.in/public/uploads/wec/Office order - Women  Empowerment Cell- July 2024.pdf" },
  { title: "Office Order - Women Empowerment Cell - 19.01.2024", href: "https://mits.ac.in/public/uploads/wec/WEC-Members office order.pdf" },
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
  { title: "An \"International Women's Day Celebration - 2026\" was organized by Women Empowerment Cell on 07th March 2026.", href: "https://mits.ac.in/assets/pdf/assoc/International Women's Day Celebration-2026.pdf" },
  { title: "An awareness programme \"Women Health and Self-Hygiene\" was organized by Women Empowerment Cell on 04th December 2025.", href: "https://mits.ac.in/assets/pdf/assoc/Women Health and Self-Hygiene-2025.pdf" },
  { title: "An Awareness Program on \"Building Gender Sensitivity: Towards an inclusive Campus\" was organized by WEC in Collaboration with GRC and ICC on 27th & 28th October 2025.", href: "https://mits.ac.in/assets/pdf/aids/Building Gender Sensitivity Towards an inclusive Campus.pdf" },
  { title: "An event on \"Nurturing Minds, Empowering Futures\" was organized by Dept. of CSE-AI in association with WEC and IEEE-RAS Student Chapter on 06th August 2025.", href: "https://mits.ac.in/assets/pdf/aids/Nurturing Minds, Empowering Futures.pdf" },
  { title: "An Awareness Program on \"Wired For Success: Empowering Girls in ICT\" was organized by WEC in association with Dept. of ECE on 24th April 2025.", href: "https://mits.ac.in/assets/pdf/assoc/Wired For Success Empowering Girls in ICT.pdf" },
  { title: "An \"International Women's Day Celebration - 2025\" was organized by Women Empowerment Cell on 07th March 2025.", href: "https://mits.ac.in/assets/pdf/assoc/International Women's Day Celebration-2025.pdf" },
  { title: "An Awareness program on \"Menstrual Hygiene Management\" was organised by Women Empowerment Cell on 12th December 2024.", href: "https://mits.ac.in/assets/pdf/aids/Menstrual Hygiene Management.pdf" },
  { title: "An Awareness program on \"Health and Hygiene for Women\" was organised by Women Empowerment Cell on 22nd October 2024.", href: "https://mits.ac.in/assets/pdf/aids/Health and Hygiene for Women.pdf" },
  { title: "An Expert talk on Fostering \"Fortify, Hygiene, Etiquette, and Safety Triad\" was organized by Dept. of CSE-AI in association with WEC on 20th August 2024.", href: "https://mits.ac.in/assets/pdf/aids/Fortify Hygiene Etiquette and Safety Triad.pdf" },
  { title: "\"International Women's Day\" was organized by ICC of MITS on 7th March, 2024.", href: "https://mits.ac.in/assets/pdf/assoc/International Womens Day-2024.pdf" },
  { title: "An Awareness Programme on \"She Leads: Empowering Women for a Better Tomorrow\" was organized by WEC of MITS on 16th November 2023.", href: "https://mits.ac.in/assets/pdf/assoc/SHE LEADS EMPOWERING WOMEN FOR A BETTER TOMORROW.pdf" },
  { title: "\"International Women's Day\" was organized by ICC of MITS on 8th March, 2023.", href: "https://mits.ac.in/assets/pdf/assoc/International Womens Day 2023.pdf" },
  { title: "An Awareness Programme on \"Step Forwarding and Championing – Women's Rights and Opportunities\" was organized by WEC of MITS on 24th February 2023.", href: "https://mits.ac.in/assets/pdf/assoc/STEP FORWARDING AND CHAMPIONING.pdf" },
  { title: "An awareness session on \"DISHA App\" was organized by Women Empowerment Cell on 2-08-2021.", href: "https://mits.ac.in/assets/pdf/assoc/DISHA-App-02-08-2021.pdf" },
  { title: "An awareness session on \"DISHA App\" was organized by Women Empowerment Cell on 12-07-2021.", href: "https://mits.ac.in/assets/pdf/assoc/DISHA App-min.pdf" },
  { title: "National Girl Child Day was organized by ICC on 24th January 2020.", href: "https://mits.ac.in/assets/pdf/assoc/National Girl Child Day 20 by ICC _ WEC.pdf" },
];

const committeeMembers = [
  { name: "Mrs. M. Sangeetha", designation: "Asst Professor", dept: "CSE" },
  { name: "Mrs. Anitha K", designation: "Asst Professor", dept: "Civil" },
];

export default function WecView() {
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
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells &amp; Committees</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold">Women Empowerment Cell</li>
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

          {/* LEFT / MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* ABOUT */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-[#b31317] mb-4 flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-[#b31317]" />
                  Women Empowerment Cell
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify mb-3">
                  MITS - Deemed to be University has constituted Women Empowerment Cell (WEC) to empower and safeguard the rights of female students and staff members of the college.
                </p>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify mb-3">
                  With a view to taking up women's issues and problems, the cell aims at creating awareness of their rights and duties. It also provides a platform for women to share their experiences and views regarding their status in the society and to suggest ways to improve and empower themselves.
                </p>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify mb-5">
                  Aiming at intellectual and social upliftment of the female students, the cell stands for facilitating women's empowerment through guest lectures, seminars, awareness programmes and other welfare activities.
                </p>

                {/* Office Orders */}
                <ul className="divide-y divide-slate-100">
                  {documents.map((doc, i) => (
                    <li key={i}>
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 py-3 group hover:bg-[#fff8e6]/40 -mx-2 px-2 rounded-lg transition-colors"
                      >
                        <span className="flex items-center gap-2.5 text-sm font-semibold text-[#0f2a44] group-hover:text-[#b31317] transition-colors leading-snug">
                          <ChevronRight className="w-4 h-4 shrink-0 text-[#caa74d] group-hover:text-[#b31317] transition-colors" />
                          {doc.title}
                        </span>
                        <ExternalLink className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-[#b31317] transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* VISION & MISSION */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#b31317]/10 flex items-center justify-center">
                      <span className="text-[#b31317] font-bold text-lg">V</span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[#0f2a44] uppercase tracking-wider mb-3">Vision</h3>
                    <p className="text-slate-700 text-sm leading-relaxed text-justify">
                      To promote general well-being of female students, teaching and non-teaching women staff of the College and to provide and maintain a dignified, congenial working environment for women and enable them to explore their imminent potential in all aspects.
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#0f2a44]/10 flex items-center justify-center">
                      <span className="text-[#0f2a44] font-bold text-lg">M</span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[#0f2a44] uppercase tracking-wider mb-3">Mission</h3>
                    <p className="text-slate-700 text-sm leading-relaxed text-justify">
                      To train women to acquire wide range of skills and knowledge and to develop and increase their social, economic and intellectual capacities for amity, security and prosperity of mankind.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* OBJECTIVES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-4 flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#b31317]" />
                  Objectives
                </h2>
                <ul className="space-y-2.5">
                  {objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#b31317] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-sm text-slate-700 leading-relaxed text-justify">{obj}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* EVENTS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-5 flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-[#b31317]" />
                  Events Organized
                </h2>
                <ul className="space-y-4">
                  {events.map((ev, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b31317] shrink-0 mt-1.5" />
                      <div>
                        <p className="text-sm text-slate-700 leading-relaxed text-justify">{ev.title}</p>
                        <a
                          href={ev.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#b31317] hover:underline text-sm font-medium mt-0.5"
                        >
                          Click here for Report on Event
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            {/* CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#b31317] px-5 py-3">
                  <h3 className="font-display text-base font-bold text-white tracking-wide">Contact us</h3>
                </div>
                <div className="p-5 space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-bold text-[#0f2a44] text-base">Dr. S. Shanmuga Priya</p>
                    <p className="text-xs text-[#b31317] font-semibold mt-0.5">WEC Coordinator - Chair Person</p>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-600 leading-relaxed">
                      <p className="font-semibold text-slate-800">Address:</p>
                      <p>Madanapalle Institute of Technology &amp; Science</p>
                      <p>Deemed to be University</p>
                      <p>Madanapalle-Kadiri Road</p>
                      <p>Kurabalakota Mandal, Madanapalle-517325</p>
                      <p>Andhra Pradesh, India</p>
                    </div>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#b31317] shrink-0" />
                    <div className="text-xs text-slate-700">
                      <span className="font-semibold">Phone: </span>+91-9100973251; 8571-280255; 280706
                    </div>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#b31317] shrink-0" />
                    <a href="mailto:wec@mits.ac.in" className="text-xs text-[#b31317] hover:underline font-medium">
                      wec@mits.ac.in
                    </a>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* COMMITTEE MEMBERS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#b31317] px-5 py-3">
                  <h3 className="font-display text-base font-bold text-white tracking-wide flex items-center gap-2">
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
                      <ChevronRight className="w-3.5 h-3.5 text-[#caa74d] group-hover:text-[#b31317] transition-colors" />
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* ORIGINAL SOURCE */}
            <ScrollReveal>
              <a
                href="https://mits.ac.in/wec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 text-sm text-[#0f2a44]/50 hover:text-[#b31317] transition-colors px-1"
              >
                <span>View original source page</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </ScrollReveal>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

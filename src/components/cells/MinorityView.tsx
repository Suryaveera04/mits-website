import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, FileText, ExternalLink, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const missionPoints = [
  "Introduce schemes launched by the central Government to promote and accelerate socio-economic development of minorities.",
  "Assisting the students to apply for various scholarship schemes introduced by the department of minority welfare, Government of India.",
  "Exploring training and employment opportunities provided by the central as well as state Government.",
  "Provide guidance to those in the minority communities wanting to set up entrepreneurial ventures.",
];

const publications = [
  { title: "Minority Cell Committee 2025-26",              href: "https://mits.ac.in/assets/pdf/assoc/office Order-Minority Cells Appointment-2025.pdf" },
  { title: "Minority Cell Committee & Activities 2023-24", href: "https://mits.ac.in/assets/pdf/assoc/2023-2024-Minority Cell.pdf" },
  { title: "Minority Cell Committee & Activities 2022-23", href: "https://mits.ac.in/assets/pdf/assoc/Minority Cell Committee 2022-23.pdf" },
  { title: "Minority Cell Committee & Activities 2021-22", href: "https://mits.ac.in/assets/pdf/assoc/Minority Cell Committeee 2021-2022.pdf" },
  { title: "Minority Cell Committee & Activities 2020-21", href: "https://mits.ac.in/assets/pdf/assoc/Minority Cell 2020-21.pdf" },
  { title: "Minority Cell Committee & Activities 2019-20", href: "https://mits.ac.in/assets/pdf/assoc/Minority Cell 2019-20.pdf" },
  { title: "Minority Cell Committee & Activities 2018-19", href: "https://mits.ac.in/assets/pdf/assoc/Minority Cell 2018-19.pdf" },
  { title: "Minority Cell Committee & Activities 2017-18", href: "https://mits.ac.in/assets/pdf/assoc/Minority Cell 2017-18.pdf" },
  { title: "Minority Cell Committee & Activities 2016-17", href: "https://mits.ac.in/assets/pdf/assoc/Minority Cell 2016-17.pdf" },
  { title: "Minority Cell Committee & Activities 2015-16", href: "https://mits.ac.in/assets/pdf/assoc/Minority Cell 2015-16.pdf" },
  { title: "Minority Cell Committee & Activities 2014-15", href: "https://mits.ac.in/assets/pdf/assoc/Minority Cell 2014-15.pdf" },
];

export default function MinorityView() {
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
            Minority Cell
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            Established on 28th July 2014 to promote hassle-free education and financial welfare of minority communities at MITS.
          </p>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells &amp; Committees</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold">Minority Cell</li>
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

        {/* TWO-COLUMN LAYOUT matching original: left content + right sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT / MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* ABOUT */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-[#b31317] mb-4 flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-[#b31317]" />
                  About Minority Cell
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify mb-4">
                  The Minority Cell was established on <strong>28th July, 2014</strong> in MITS, with a view to focus on the promotion of hassle-free education and financial welfare of the minorities. Under this cell, two meetings are held each year. In these meetings various issues and ways to enhance quality education among the minorities are discussed to ensure the implementation of the directives of various ministries and commissions. As per the suggestions in the meetings, various programmes for the welfare of minorities are proposed by the members of this cell who belong to various streams of the Institution.
                </p>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  • Provide guidance to those who want to set up entrepreneurial ventures.
                </p>
              </section>
            </ScrollReveal>

            {/* VISION & MISSION */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#b31317] mb-3 flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-[#b31317]" />
                  Vision &amp; Mission
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify mb-5">
                  The Minorities Welfare Cell forms its primary objective as socio-economic development and educational advancement of minorities in the Institution. The main functions of the Cell are as follows:
                </p>
                <ul className="space-y-3">
                  {missionPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                      <span className="w-5 h-5 rounded-full bg-[#b31317] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-sm text-slate-700 leading-relaxed text-justify">{point}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* PUBLICATION LIST — matches original's <div class="publication-list"> */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#b31317] mb-5 flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#b31317]" />
                  Committee &amp; Activities Reports
                </h2>
                <ul className="divide-y divide-slate-100">
                  {publications.map((doc, i) => (
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

          </div>

          {/* RIGHT SIDEBAR — matches original's <div class="dce-right"> */}
          <div className="space-y-6">

            {/* CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                {/* Red header bar matching original's bg-red */}
                <div className="bg-[#b31317] px-5 py-3">
                  <h3 className="font-display text-base font-bold text-white tracking-wide">Contact</h3>
                </div>
                <div className="p-5 space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-bold text-[#0f2a44] text-base">Mrs. M. Fathima Begum</p>
                    <p className="text-xs text-[#b31317] font-semibold mt-0.5">Minority Cell Coordinator</p>
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
                      <span className="font-semibold">Phone: </span>+91-8571-280255
                    </div>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#b31317] shrink-0" />
                    <a
                      href="mailto:minoritycell@mits.ac.in"
                      className="text-xs text-[#b31317] hover:underline font-medium"
                    >
                      minoritycell@mits.ac.in
                    </a>
                  </div>
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

            {/* ORIGINAL SOURCE LINK */}
            <ScrollReveal>
              <a
                href="https://mits.ac.in/minority"
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

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Target,
  FileDown,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Shield,
  Award
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "https://mits.edu/";

const missionPoints = [
  "Introduce schemes launched by the central Government to promote accelerate socio economic development of minorities",
  "Assisting the students to apply for various scholarship Schemes introduced by the department of minority welfare, Government of India",
  "Exploring training and employment opportunities, provided by the central as well as state Government",
  "Provide guidance to those in the minority communities wanting to set up entrepreneurial ventures"
];

const minorityDocuments = [
  {
    title: "Minority Cell Committee 2025-26",
    href: "https://mits.ac.in/assets/pdf/assoc/office%20Order-Minority%20Cells%20Appointment-2025.pdf"
  },
  {
    title: "Minority Cell Committee & Activities 2023-24",
    href: "https://mits.ac.in/assets/pdf/assoc/2023-2024-Minority%20Cell.pdf"
  },
  {
    title: "Minority Cell Committee & Activities 2022-23",
    href: "https://mits.ac.in/assets/pdf/assoc/Minority%20Cell%20Committee%202022-23.pdf"
  },
  {
    title: "Minority Cell Committee & Activities 2021-22",
    href: "https://mits.ac.in/assets/pdf/assoc/Minority%20Cell%20Committeee%202021-2022.pdf"
  },
  {
    title: "Minority Cell Committee & Activities 2020-21",
    href: "https://mits.ac.in/assets/pdf/assoc/Minority%20Cell%202020-21.pdf"
  },
  {
    title: "Minority Cell Committee & Activities 2019-20",
    href: "https://mits.ac.in/assets/pdf/assoc/Minority%20Cell%202019-20.pdf"
  },
  {
    title: "Minority Cell Committee & Activities 2018-19",
    href: "https://mits.ac.in/assets/pdf/assoc/Minority%20Cell%202018-19.pdf"
  },
  {
    title: "Minority Cell Committee & Activities 2017-18",
    href: "https://mits.ac.in/assets/pdf/assoc/Minority%20Cell%202017-18.pdf"
  },
  {
    title: "Minority Cell Committee & Activities 2016-17",
    href: "https://mits.ac.in/assets/pdf/assoc/Minority%20Cell%202016-17.pdf"
  },
  {
    title: "Minority Cell Committee & Activities 2015-16",
    href: "https://mits.ac.in/assets/pdf/assoc/Minority%20Cell%202015-16.pdf"
  },
  {
    title: "Minority Cell Committee & Activities 2014-15",
    href: "https://mits.ac.in/assets/pdf/assoc/Minority%20Cell%202014-15.pdf"
  }
];

export default function MinorityView() {
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
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 w-full max-w-[96%] mx-auto px-4 text-center">
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 drop-shadow-sm">
            Statutory Bodies &amp; Student Welfare • Equity &amp; Inclusion
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Minority Cell
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-3xl mx-auto drop-shadow-sm font-medium">
            Dedicated to promoting hassle-free education, socio-economic advancement, and welfare schemes for minority students at MITS.
          </p>
        </div>
        <nav className="absolute bottom-4 left-6 z-10 hidden sm:block">
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
            <li className="text-[#ffd15c] font-semibold">Minority Cell</li>
          </ol>
        </nav>
      </section>

      {/* FULL WIDTH CONTAINER - COMPLETE SPACE WITH MINIMAL SIDE PADDING */}
      <main className="w-full max-w-[96%] mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-12">
        <button
          onClick={() => navigate("/cells")}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells &amp; Committees
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT / MAIN COLUMN (7 cols on lg, 8 cols on xl) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            {/* ABOUT MINORITY CELL */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <BookOpen className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                      About Minority Cell
                    </h2>
                    <p className="text-xs text-[#0f2a44]/60">
                      Madanapalle Institute of Technology &amp; Science (Deemed to be University)
                    </p>
                  </div>
                </div>

                <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4">
                  <p className="!text-left text-left">
                    The Minority Cell was established on <strong>28th July, 2014</strong> in MITS, with a view to focus on the promotion of hassle-free education and financial welfare of the minorities. Under this cell, two meetings are held each year. In these meetings various issues and ways to enhance quality education among the minorities are discussed to ensure the implementation of the directives of various ministries and commissions. As per the suggestions in the meetings, various programmes for the welfare of minorities are proposed by the members of this cell who belong to various streams of the Institution.
                  </p>
                  <p className="!text-left text-left font-medium text-[#0f2a44] flex items-center gap-2 pt-1">
                    <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0" />
                    <span>Provide guidance to those who want to set up entrepreneurial ventures.</span>
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* VISION & MISSION */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <Target className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                      Vision &amp; Mission
                    </h2>
                    <p className="text-xs text-[#0f2a44]/60">
                      Socio-economic development and educational advancement of minorities
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed !text-left text-left">
                    The Minorities Welfare cell forms its primary objective as socio economic development and educational advancement of minorities in the Institution. The main functions of the Cell are as follows:
                  </p>

                  <div className="space-y-3 pt-2">
                    {missionPoints.map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3.5 bg-slate-50/80 border border-slate-200/70 rounded-xl p-4 hover:border-[#b31317]/30 hover:bg-slate-50 transition-colors"
                      >
                        <span className="w-6 h-6 rounded-full bg-[#b31317] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          {index + 1}
                        </span>
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed !text-left text-left">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* COMMITTEE & ACTIVITIES REPORTS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                      <FileDown className="w-5 h-5 text-[#b31317]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44]">
                        Committee &amp; Activities Reports
                      </h3>
                      <p className="text-xs text-[#0f2a44]/60">Official appointments, notifications and annual proceedings</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-[#0f2a44] rounded-full">
                    {minorityDocuments.length} Documents
                  </span>
                </div>

                <div className="divide-y divide-gray-100">
                  {minorityDocuments.map((doc, idx) => (
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

          {/* RIGHT / SIDEBAR COLUMN (5 cols on lg, 4 cols on xl - Increased Width) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            {/* CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden text-left">
                <div className="bg-[#b31317] text-white px-6 py-4">
                  <h2 className="font-display text-lg font-bold !text-white text-white">Contact</h2>
                </div>
                <div className="p-6 space-y-5">
                  <div className="text-left">
                    <h3 className="font-semibold text-lg text-[#0f2a44] !text-left">Mrs. M. Fathima Begum</h3>
                    <p className="text-sm text-[#b31317] font-semibold !text-left">Minority Cell Coordinator</p>
                  </div>

                  <hr className="border-gray-100" />

                  <div className="space-y-4 text-sm text-[#0f2a44]/80 text-left">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                      <div className="text-xs sm:text-sm leading-relaxed text-left space-y-0.5">
                        <p className="font-semibold text-[#0f2a44] !text-left">Address :</p>
                        <p className="font-bold text-[#0f2a44] !text-left">Madanapalle Institute of Technology &amp; Science</p>
                        <p className="!text-left">Deemed to be University</p>
                        <p className="!text-left">Madanapalle-Kadiri Road</p>
                        <p className="!text-left">kurabalakota Mandal, Madanapalle-517325</p>
                        <p className="!text-left">Andhra Pradesh, India</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                      <Phone className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                      <div className="text-left">
                        <p className="font-semibold text-[#0f2a44] !text-left">Phone :</p>
                        <p className="text-slate-600 !text-left">+91-8571-280255</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                      <Mail className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                      <div className="text-left">
                        <p className="font-semibold text-[#0f2a44] !text-left">E Mail :</p>
                        <a
                          href="mailto:minoritycell@mits.ac.in"
                          className="text-[#b31317] hover:underline font-semibold whitespace-nowrap block"
                        >
                          minoritycell@mits.ac.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* COMPLIANCE & STUDENT WELFARE PORTALS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-5">
                <h3 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-3">
                  Safety &amp; Compliance Portals
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Grievance Redressal Cell (GRC)", to: "/grc" },
                    { label: "Anti-Ragging Cell", to: "/anti-ragging" },
                    { label: "SC & ST Cell", to: "/cells/sc-st" },
                    { label: "Women Empowerment Cell", to: "/cells/wec" },
                    { label: "Internal Quality Assurance Cell (IQAC)", to: "/iqac" }
                  ].map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="flex items-center justify-between text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-2 border-b border-gray-50 last:border-0 group font-medium"
                    >
                      <span>{p.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#caa74d] group-hover:translate-x-0.5 transition-transform shrink-0" />
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

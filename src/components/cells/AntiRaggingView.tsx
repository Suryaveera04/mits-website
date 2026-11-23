import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShieldAlert,
  FileText,
  Calendar,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  FileDown,
  Instagram,
  Facebook
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "https://mits.edu/";

// Policies, SOPs, Affidavits & Legal Regulations
const policyAndLegalDocs = [
  {
    title: "Anti-Ragging Cell Policy (MITSDTBU) 2026-27",
    href: "https://mits.ac.in/assets/pdf/admin/AR-MITSDTBU-Policy%202026-27.pdf"
  },
  {
    title: "Anti-Ragging Cell Standard Operating Procedure",
    href: "https://mits.ac.in/assets/pdf/admin/SOP%20-%20Anti-Ragging.pdf"
  },
  {
    title: "Anti-Ragging Cell with effective from 07-08-2026",
    href: "https://mits.ac.in/assets/pdf/admin/Antiragging-2026-27.pdf"
  },
  {
    title: "Student Affidavit",
    href: "https://mits.ac.in/public/uploads/antiraggging/student%20affidavit.pdf"
  },
  {
    title: "Parent Affidavit",
    href: "https://mits.ac.in/public/uploads/antiraggging/parent%20affidavit.pdf"
  },
  {
    title: "Summary of UGC Regulations",
    href: "https://mits.ac.in/public/uploads/antiraggging/summary%20of%20ugc%20regulation.pdf"
  },
  {
    title: "Summary of the Supreme Court Judgment",
    href: "https://mits.ac.in/public/uploads/antiraggging/Summary%20of%20the%20Supreme%20court%20Judgment.pdf"
  },
  {
    title: "Anti-Ragging Notice",
    href: "https://mits.ac.in/public/uploads/antiraggging/AICTE-anti_ragging_notice.pdf"
  },
  {
    title: "AP Prohibition of Ragging in All Educational Institutions Rules, 2002",
    href: "https://mits.ac.in/public/uploads/antiraggging/AP%20Prohibition%20of%20Ragging%20in%20All%20Educational%20Institutions%20Rules%202002.pdf"
  }
];

// Annual Committees
const committeeDocs = [
  {
    title: "Anti-Ragging Committee 2026-27",
    href: "https://mits.ac.in/assets/pdf/admin/Anti%20Ragging%20Proceedings-scan-2026.pdf"
  },
  {
    title: "Anti-Ragging Committee 2025-26",
    href: "https://mits.ac.in/assets/pdf/admin/Anti%20Ragging%20Committee%20Cells%20Squad-2025-26.pdf"
  },
  {
    title: "Anti-Ragging Committee 2024-25",
    href: "https://mits.ac.in/assets/pdf/admin/Anti-Ragging%20Committee%202024-25.pdf"
  },
  {
    title: "Anti-Ragging Committee 2023-24",
    href: "https://mits.ac.in/assets/pdf/admin/AntiRagging%20Committee%20-%202023-24.pdf"
  },
  {
    title: "Anti-Ragging Committee 2022-23",
    href: "https://mits.ac.in/public/uploads/antiraggging/Anti-ragging%202022-23.pdf"
  },
  {
    title: "Anti-Ragging Committee 2021-22",
    href: "https://mits.ac.in/public/uploads/antiraggging/Anti%20Ragging%202021-22.pdf"
  },
  {
    title: "Anti-Ragging Committee 2020-21",
    href: "https://mits.ac.in/public/uploads/antiraggging/anti-ragging%202020.pdf"
  },
  {
    title: "Anti-Ragging Committee 2019-20",
    href: "https://mits.ac.in/public/uploads/antiraggging/anti-ragging%202019.pdf"
  },
  {
    title: "Anti-Ragging Committee 2018-19",
    href: "https://mits.ac.in/public/uploads/antiraggging/anti-ragging%202018.pdf"
  },
  {
    title: "Anti-Ragging Committee 2017-18",
    href: "https://mits.ac.in/public/uploads/antiraggging/anti-ragging.pdf"
  },
  {
    title: "Anti-Ragging Committee 2016-17",
    href: "https://mits.ac.in/public/uploads/antiraggging/2016-17-Anti-Ragging-Proceedings.pdf"
  },
  {
    title: "Anti-Ragging Committee 2015-16",
    href: "https://mits.ac.in/public/uploads/antiraggging/2015-16-Anti-Ragging-Proceedings.pdf"
  },
  {
    title: "Anti-Ragging Committee 2014-15",
    href: "https://mits.ac.in/public/uploads/antiraggging/2014-15-Anti-Ragging-Proceedings.pdf"
  }
];

// Annual Activities
const activityDocs = [
  {
    title: "Anti-Ragging Activities 2019-20",
    href: "https://mits.ac.in/public/uploads/antiraggging/2019-20-Anti-Ragging.pdf"
  },
  {
    title: "Anti-Ragging Activities 2018-19",
    href: "https://mits.ac.in/public/uploads/antiraggging/2018-19-Anti-Ragging.pdf"
  },
  {
    title: "Anti-Ragging Activities 2017-18",
    href: "https://mits.ac.in/public/uploads/antiraggging/2017-18-Anti-Ragging.pdf"
  },
  {
    title: "Anti-Ragging Activities 2016-17",
    href: "https://mits.ac.in/public/uploads/antiraggging/2016-17-Anti-Ragging.pdf"
  },
  {
    title: "Anti-Ragging Activities 2015-16",
    href: "https://mits.ac.in/public/uploads/antiraggging/2015-16-Anti-Ragging.pdf"
  },
  {
    title: "Anti-Ragging Activities 2014-15",
    href: "https://mits.ac.in/public/uploads/antiraggging/2014-15-Anti-Ragging.pdf"
  }
];

// Events
const events = [
  {
    title: "Anti-Ragging Week Celebrations - 12th to 18th August 2026",
    href: "https://mits.ac.in/assets/pdf/assoc/Report%20on%20Anti-Ragging%20Week%20Celebrations%20-%2012-18%20August%202026.pdf"
  },
  {
    title: "Anti-Ragging Week – Essay Writing & Elocution Competitions – 13th August 2026.",
    href: "https://mits.ac.in/assets/pdf/assoc/Anti-Ragging%20Week-2026.pdf"
  },
  {
    title: 'An "Anti-Ragging Day Rally" was organized on 12th August 2026.',
    href: "https://mits.ac.in/assets/pdf/assoc/Anti-Ragging%20Day%20Rally-2026.pdf"
  },
  {
    title: 'An "Anti-Ragging Day" was organized on 12th August 2026.',
    href: "https://mits.ac.in/assets/pdf/admin/Anti-Ragging%20Day%20%E2%80%93%20Awareness%20Program.pdf"
  },
  {
    title: 'An "Anti-Ragging Week" was organized from 12th to 18th August 2025.',
    href: "https://mits.ac.in/assets/pdf/admin/Anti-Ragging%20Week%202025.pdf"
  },
  {
    title: 'An "Anti-Ragging Day" was organized on 12th August 2025.',
    href: "https://mits.ac.in/assets/pdf/admin/Anti-Ragging%20Day-Rally%202025-26.pdf"
  },
  {
    title: "An Awareness programme on Anti-Ragging by Shri. K. Ramesh, Circle - Inspector of Police on 5th November 2024.",
    href: "https://mits.ac.in/assets/pdf/admin/Anti-Ragging%20Awareness%20program%2005-11-2024.pdf"
  },
  {
    title: "An Anti-Ragging Day was organized on 12th August 2024.",
    href: "https://mits.ac.in/assets/pdf/admin/Anti-Ragging%20Day%20-%2012th%20August%202024.pdf"
  },
  {
    title: "An Anti-Ragging Week was organized on 12th & 17th August 2024.",
    href: "https://mits.ac.in/assets/pdf/admin/Report%20of%20Anti-Ragging%20Week%20Celebration%20-%2012-17,%20August%202024.pdf"
  },
  {
    title: "An Awareness programs on Anti-Ragging to the freshers of B.Tech, MBA and MCA in all the venues of Student Induction Program for the academic year 2024-25 was concucted at MITS.",
    href: "https://mits.ac.in/assets/pdf/admin/Report%20on%20Awareness%20on%20Anti%20Ragging%20%20to%20Freshers%20(B.Tech.,%20M.B.A%20and%20M.C.A)%202024-25%20in%20Stident%20Induction%20Program.pdf"
  }
];

export default function AntiRaggingView() {
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
        <div className="absolute inset-0 bg-black/25 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm">
            Cells &amp; Committees • Zero Tolerance Campus
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Anti-Ragging Cell
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-3xl mx-auto drop-shadow-sm font-medium">
            MITS strictly enforces zero tolerance for ragging. Upholding UGC &amp; AICTE Regulations to ensure a secure, respectful, and fear-free academic environment.
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
            <li className="text-[#ffd15c] font-semibold">Anti-Ragging Cell</li>
          </ol>
        </nav>
      </section>

      {/* FULL WIDTH NATIONAL POSTER BANNER */}
      <div className="w-full max-w-[96%] mx-auto px-2 sm:px-4 md:px-6 pt-8">
        <ScrollReveal>
          <div className="rounded-2xl border-2 border-[#b31317]/20 shadow-lg overflow-hidden bg-white">
            <img
              src="https://mits.ac.in/images/anti-ragging-banner-2026.jpg"
              alt="National Ragging Prevention Programme Banner"
              className="w-full h-auto object-cover block"
            />
          </div>
        </ScrollReveal>
      </div>

      {/* FULL WIDTH MAIN CONTENT CONTAINER - LEAVING LITTLE SPACE LEFT AND RIGHT */}
      <main className="w-full max-w-[96%] mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-12">
        <button
          onClick={() => navigate("/cells")}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells &amp; Committees
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT / MAIN COLUMN */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            {/* ABOUT ANTI-RAGGING CELL */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-[#0f2a44]">
                      Anti-Ragging <span className="text-[#b31317]">Cell</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-[#0f2a44]/60 font-medium">
                      Zero Tolerance Policy &amp; Strict Compliance Mechanism
                    </p>
                  </div>
                </div>

                <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4 text-justify">
                  <p>
                    MITS - Deemed to be University, facilities have zero tolerance for ragging and proud to state that MITS is ragging free. Students are informed to follow the act and ensure a ragging free campus.
                  </p>
                  <p>
                    To ensure compliance as per the UGC Regulations on curbing menace of ragging in higher educational institutions, 2009, the Anti-Ragging Committee is nominated and headed by the Head of the institution, and comprises of representatives as prescribed by the UGC Regulations, including civil and police administration, local media, Non-Government Organizations involved in youth activities and representatives from the institute.
                  </p>
                  <p>
                    The committee will ensure compliance with the provisions of the Anti-ragging regulations; monitor and oversee the performance of the Anti-Ragging Squad in prevention of ragging in the institution.
                  </p>
                </div>

                {/* HELPLINE HIGHLIGHT */}
                <div className="mt-6 p-4 md:p-5 rounded-xl bg-gradient-to-r from-[#b31317]/5 via-[#ffd15c]/15 to-[#0f2a44]/5 border border-[#b31317]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider font-bold text-[#b31317]">
                      National Anti-Ragging 24x7 Toll Free Helpline
                    </p>
                    <p className="text-xl sm:text-2xl font-extrabold text-[#0f2a44]">
                      1800-180-5522
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Email: <a href="mailto:helpline@antiragging.in" className="text-[#b31317] underline font-semibold">helpline@antiragging.in</a> | Web: <a href="https://www.antiragging.in" target="_blank" rel="noopener noreferrer" className="text-[#b31317] underline font-semibold">www.antiragging.in</a>
                    </p>
                  </div>
                  <a
                    href="mailto:antiragginghelpline@mits.ac.in"
                    className="shrink-0 bg-[#b31317] hover:bg-[#8b0000] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Campus Helpline</span>
                  </a>
                </div>
              </section>
            </ScrollReveal>

            {/* POLICIES, SOPS & LEGAL REGULATIONS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#0f2a44]">
                      Policies, SOPs &amp; Statutory Regulations
                    </h3>
                    <p className="text-xs text-[#0f2a44]/60">Affidavits, guidelines and institutional policies</p>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {policyAndLegalDocs.map((doc, idx) => (
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

            {/* COMMITTEES & ANNUAL PROCEEDINGS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44] shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#0f2a44]">
                      Anti-Ragging Committee Orders (Year-wise)
                    </h3>
                    <p className="text-xs text-[#0f2a44]/60">Official appointment proceedings and squad compositions</p>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {committeeDocs.map((doc, idx) => (
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

            {/* ANNUAL ACTIVITIES REPORTS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#ffd15c]/30 flex items-center justify-center text-[#0f2a44] shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#0f2a44]">
                      Anti-Ragging Activities Reports
                    </h3>
                    <p className="text-xs text-[#0f2a44]/60">Documentation of preventive actions, squads and inspections</p>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {activityDocs.map((doc, idx) => (
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

            {/* EVENTS & AWARENESS SESSIONS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#0f2a44]">Events</h3>
                    <p className="text-xs text-[#0f2a44]/60">Awareness drives, rallies, competitions, and orientation programs</p>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {events.map((ev, idx) => (
                    <a
                      key={idx}
                      href={ev.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-3.5 px-3 sm:px-4 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <span className="text-sm sm:text-base text-[#0f2a44] font-medium group-hover:text-[#b31317] transition-colors pr-4">
                        {ev.title}
                      </span>
                      <span className="shrink-0 text-slate-400 group-hover:text-[#b31317] transition-colors p-1">
                        <FileDown className="w-5 h-5 text-slate-500 group-hover:text-[#b31317]" />
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* SOCIAL MEDIA AWARENESS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-8">
                {/* INSTAGRAM */}
                <div className="space-y-4">
                  <div>
                    <img
                      src="https://mits.ac.in/images/ar-instagram.jpg"
                      alt="Instagram"
                      className="h-8 md:h-9 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#b31317] flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRight className="w-2.5 h-2.5 text-white stroke-[3]" />
                    </span>
                    <a
                      href="https://www.instagram.com/p/C-xqEMSPG4l/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-[#0f2a44] hover:text-[#b31317] break-all underline transition-colors"
                    >
                      https://www.instagram.com/p/C-xqEMSPG4l/?utm_source=ig_web_copy_link&amp;igsh=MzRlODBiNWFlZA==
                    </a>
                  </div>
                </div>

                {/* FACEBOOK */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <div>
                    <img
                      src="https://mits.ac.in/images/fb.png"
                      alt="Facebook"
                      className="h-8 md:h-9 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-2.5">
                    {[
                      "https://www.facebook.com/share/p/12EMRtxoQNd/",
                      "https://www.facebook.com/share/p/159URfnm6h/",
                      "https://www.facebook.com/share/v/1Ew6f3MciT/"
                    ].map((fbUrl, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#b31317] flex items-center justify-center shrink-0 mt-0.5">
                          <ChevronRight className="w-2.5 h-2.5 text-white stroke-[3]" />
                        </span>
                        <a
                          href={fbUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm text-[#0f2a44] hover:text-[#b31317] break-all underline transition-colors"
                        >
                          {fbUrl}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* RIGHT / SIDEBAR COLUMN */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            {/* CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden text-left">
                <div className="bg-[#b31317] text-white px-6 py-4">
                  <h2 className="font-display text-lg font-bold !text-white text-white">Contact</h2>
                </div>
                <div className="p-6 space-y-6">
                  {/* HELPLINE */}
                  <div className="bg-[#fff8e6] border border-[#ffd15c] rounded-xl p-3.5">
                    <p className="text-xs font-bold text-[#b31317] uppercase tracking-wider mb-1 !text-left">
                      Help Line
                    </p>
                    <a
                      href="mailto:antiragginghelpline@mits.ac.in"
                      className="text-xs sm:text-[13px] font-bold text-[#0f2a44] hover:text-[#b31317] underline whitespace-nowrap flex items-center gap-1.5 overflow-hidden"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#b31317] shrink-0" />
                      <span className="whitespace-nowrap">antiragginghelpline@mits.ac.in</span>
                    </a>
                  </div>

                  {/* OFFICER 1 */}
                  <div className="space-y-1.5 text-sm border-b border-gray-100 pb-4 text-left">
                    <p className="font-bold text-[#0f2a44] text-base !text-left">Dr Thulasiram Naidu R</p>
                    <p className="text-xs text-[#b31317] font-semibold !text-left">
                      Advisor R&amp;D and Chief Coordinator - Anti-Ragging Cell
                    </p>
                    <div className="pt-1 space-y-1 text-xs text-slate-600 text-left">
                      <p className="flex items-start gap-1.5 !text-left">
                        <MapPin className="w-3.5 h-3.5 text-[#b31317] shrink-0 mt-0.5" />
                        <span className="!text-left">Address : Meet @ EB-016, Ground Floor, East Block, MITS</span>
                      </p>
                      <p className="flex items-center gap-1.5 !text-left">
                        <Phone className="w-3.5 h-3.5 text-[#b31317] shrink-0" />
                        <span className="!text-left">Phone : +91 8008500767</span>
                      </p>
                      <p className="flex items-center gap-1.5 !text-left">
                        <Mail className="w-3.5 h-3.5 text-[#b31317] shrink-0" />
                        <span className="!text-left">
                          E Mail :{" "}
                          <a href="mailto:drrtnaidu@mits.ac.in" className="text-[#b31317] hover:underline font-medium whitespace-nowrap">
                            drrtnaidu@mits.ac.in
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* OFFICER 2 */}
                  <div className="space-y-1.5 text-sm border-b border-gray-100 pb-4 text-left">
                    <p className="font-bold text-[#0f2a44] text-base !text-left">Dr. Chandra Mohan K</p>
                    <p className="text-xs text-[#b31317] font-semibold !text-left">
                      Coordinator - Anti-Ragging Cell
                    </p>
                    <div className="pt-1 space-y-1 text-xs text-slate-600 text-left">
                      <p className="flex items-start gap-1.5 !text-left">
                        <MapPin className="w-3.5 h-3.5 text-[#b31317] shrink-0 mt-0.5" />
                        <span className="!text-left">Address : Meet @ SB-211, IInd Floor, South Block, MITS</span>
                      </p>
                      <p className="flex items-center gap-1.5 !text-left">
                        <Phone className="w-3.5 h-3.5 text-[#b31317] shrink-0" />
                        <span className="!text-left">Phone : +91 9100973269</span>
                      </p>
                      <p className="flex items-center gap-1.5 !text-left">
                        <Mail className="w-3.5 h-3.5 text-[#b31317] shrink-0" />
                        <span className="!text-left">
                          E Mail :{" "}
                          <a href="mailto:fbc-che@mits.ac.in" className="text-[#b31317] hover:underline font-medium whitespace-nowrap">
                            fbc-che@mits.ac.in
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* OFFICER 3 */}
                  <div className="space-y-1.5 text-sm border-b border-gray-100 pb-4 text-left">
                    <p className="font-bold text-[#0f2a44] text-base !text-left">Dr.Subba Rao A</p>
                    <p className="text-xs text-[#b31317] font-semibold !text-left">
                      Co-Coordinator - Anti-Ragging Cell
                    </p>
                    <div className="pt-1 space-y-1 text-xs text-slate-600 text-left">
                      <p className="flex items-center gap-1.5 !text-left">
                        <Phone className="w-3.5 h-3.5 text-[#b31317] shrink-0" />
                        <span className="!text-left">Phone : +91 9160020473</span>
                      </p>
                      <p className="flex items-center gap-1.5 !text-left">
                        <Mail className="w-3.5 h-3.5 text-[#b31317] shrink-0" />
                        <span className="!text-left">
                          E Mail :{" "}
                          <a href="mailto:fbc-phy@mits.ac.in" className="text-[#b31317] hover:underline font-medium whitespace-nowrap">
                            fbc-phy@mits.ac.in
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* OFFICER 4 */}
                  <div className="space-y-1.5 text-sm border-b border-gray-100 pb-4 text-left">
                    <p className="font-bold text-[#0f2a44] text-base !text-left">Dr. K. Lakshmi Devi</p>
                    <p className="text-xs text-[#b31317] font-semibold !text-left">
                      Additional Coordinator - Anti-Ragging Cell
                    </p>
                    <div className="pt-1 space-y-1 text-xs text-slate-600 text-left">
                      <p className="flex items-center gap-1.5 !text-left">
                        <Phone className="w-3.5 h-3.5 text-[#b31317] shrink-0" />
                        <span className="!text-left">Phone : +91 9703108186</span>
                      </p>
                      <p className="flex items-center gap-1.5 !text-left">
                        <Mail className="w-3.5 h-3.5 text-[#b31317] shrink-0" />
                        <span className="!text-left">
                          E Mail :{" "}
                          <a href="mailto:drlakshmidevik@mits.ac.in" className="text-[#b31317] hover:underline font-medium whitespace-nowrap">
                            drlakshmidevik@mits.ac.in
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* OFFICER 5 */}
                  <div className="space-y-1.5 text-sm border-b border-gray-100 pb-4 text-left">
                    <p className="font-bold text-[#0f2a44] text-base !text-left">Mrs. Vijaya Lakshmi U</p>
                    <p className="text-xs text-[#b31317] font-semibold !text-left">
                      Associate Director - International Relations &amp; Institute Counsellor - MITS
                    </p>
                    <div className="pt-1 space-y-1 text-xs text-slate-600 text-left">
                      <p className="flex items-center gap-1.5 !text-left">
                        <Phone className="w-3.5 h-3.5 text-[#b31317] shrink-0" />
                        <span className="!text-left">Phone : +91 9100600773</span>
                      </p>
                      <p className="flex items-center gap-1.5 !text-left">
                        <Mail className="w-3.5 h-3.5 text-[#b31317] shrink-0" />
                        <span className="!text-left">
                          E Mail :{" "}
                          <a href="mailto:vijayalakshmiu@mits.ac.in" className="text-[#b31317] hover:underline font-medium whitespace-nowrap">
                            vijayalakshmiu@mits.ac.in
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* OFFICER 6 */}
                  <div className="space-y-1.5 text-sm text-left">
                    <p className="font-bold text-[#0f2a44] text-base !text-left">Mr. Pavan Kumar Sarma P</p>
                    <p className="text-xs text-[#b31317] font-semibold !text-left">
                      Administrative Assistant
                    </p>
                    <div className="pt-1 space-y-1 text-xs text-slate-600 text-left">
                      <p className="flex items-center gap-1.5 !text-left">
                        <Phone className="w-3.5 h-3.5 text-[#b31317] shrink-0" />
                        <span className="!text-left">Phone : +91 9063435712</span>
                      </p>
                      <p className="flex items-center gap-1.5 !text-left">
                        <Mail className="w-3.5 h-3.5 text-[#b31317] shrink-0" />
                        <span className="!text-left">
                          E Mail :{" "}
                          <a href="mailto:pavankumarsarmap@mits.ac.in" className="text-[#b31317] hover:underline font-medium whitespace-nowrap">
                            pavankumarsarmap@mits.ac.in
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* COMPLIANCE & STUDENT SAFETY PORTALS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-5">
                <h3 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-3">
                  Safety &amp; Compliance Portals
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Grievance Redressal Cell (GRC)", to: "/grc" },
                    { label: "Internal Complaints Committee (ICC)", to: "/cells/icc" },
                    { label: "SC & ST Cell", to: "/cells/sc-st" },
                    { label: "Women Empowerment Cell", to: "/cells/wec" },
                    { label: "Internal Quality Assurance Cell", to: "/iqac" }
                  ].map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="flex items-center justify-between text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-1.5 border-b border-gray-50 last:border-0 group"
                    >
                      {p.label}
                      <ChevronRight className="w-3.5 h-3.5 text-[#caa74d] group-hover:translate-x-0.5 transition-transform" />
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

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, FileText, ExternalLink, MapPin, Mail, ChevronRight, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const members = [
  { sno: 1, name: "Dr. C. Yuvaraj", designation: "Vice Chancellor (I/c)" },
  { sno: 2, name: "Dr. A V Pavan Kumar", designation: "Asst. Dean Accreditations & Coordinator (NIRF)" },
  { sno: 3, name: "Dr. C. Kamal Basha", designation: "Vice Principal - Admin (JNTUA Affairs)" },
  { sno: 4, name: "Dr. K. Sathesh", designation: "Coordinator (IQAC)" },
  { sno: 5, name: "Dr. R. Ravindraiah", designation: "Coordinator (AICTE)" },
  { sno: 6, name: "Dr. Manish Sharma", designation: "Coordinator (NBA)" },
  { sno: 7, name: "Mr. T. Manivannan", designation: "Accreditation Compliance & Data Validation Associate (Planning, Approvals and Accreditations)" },
  { sno: 8, name: "Mr. Ch. Srinivas", designation: "Accreditation Compliance & Data Validation Associate (Ranking & Certifications)" },
];

const documents = [
  { label: "PAARC Functions", href: "https://mits.ac.in/public/uploads/paars/PAARC functions.pdf" },
  { label: "PAARC Organization Chart", href: "https://mits.ac.in/public/uploads/paars/PAARC-ORGANIZATION CHART.pdf" },
  { label: "PAARC Flow Chart", href: "https://mits.ac.in/public/uploads/paars/1PAARC-Flow Chart-esign.pdf" },
  { label: "AISHE", href: "https://mits.ac.in/public/uploads/paars/AISHE-esign.pdf" },
];

export default function PaarcView() {
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
            Cells &amp; Committees • Planning &amp; Accreditations
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Planning, Approvals, Accreditations, Rankings &amp; Certifications Cell
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            Planning, organizing, gathering, recording and disseminating day-to-day information on activities across all Departments, Committees and Cells.
          </p>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells &amp; Committees</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold">PAARC Cell</li>
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

        {/* DOCUMENT TAB BAR */}
        <div className="flex flex-wrap gap-2 mb-8">
          {documents.map((doc) => (
            <a
              key={doc.href}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold border-2 border-[#0f2a44] text-[#0f2a44] hover:bg-[#0f2a44] hover:text-white transition-colors rounded"
            >
              {doc.label}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* ABOUT */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-[#b31317] mb-4 flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-[#b31317]" />
                  PAARC Cell
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                  This cell plans, organizes, gathers, records and disseminates the day-to-day information on activities
                  pertaining to all the Departments / Committees / Cells of the entire Institute.
                </p>
              </section>
            </ScrollReveal>

            {/* IMAGES */}
            <ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-2xl overflow-hidden border border-[#0f2a44]/10 shadow-sm">
                  <img
                    src="https://mits.ac.in/assets/images/MITS-NBA Accreditation-Journey1.jpg"
                    alt="MITS NBA Accreditation Journey"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#0f2a44]/10 shadow-sm">
                  <img
                    src="https://mits.ac.in/assets/images/MITS at a Glance Rankings-Ratings-Global Recognition.png"
                    alt="MITS at a Glance Rankings, Ratings & Global Recognition"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* MEMBERS TABLE */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="px-6 md:px-8 py-5 border-b border-[#0f2a44]/5 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#b31317]" />
                  <h2 className="font-display text-xl font-bold text-[#0f2a44]">PAARC Members</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#0f2a44] text-white text-sm uppercase tracking-wider">
                        <th className="py-3 px-4 text-center w-14">S.No</th>
                        <th className="py-3 px-4 text-left">Name</th>
                        <th className="py-3 px-4 text-left">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {members.map((m) => (
                        <tr key={m.sno} className="hover:bg-[#fff8e6]/30 transition-colors">
                          <td className="py-3 px-4 text-center text-[#0f2a44]/50 font-medium">{m.sno}</td>
                          <td className="py-3 px-4 font-semibold text-[#0f2a44]">{m.name}</td>
                          <td className="py-3 px-4 text-[#0f2a44]/70 leading-snug">{m.designation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollReveal>

            {/* DOCUMENTS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-4 flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#b31317]" />
                  Documents
                </h2>
                <ul className="divide-y divide-gray-100">
                  {documents.map((doc) => (
                    <li key={doc.href}>
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 py-3 group hover:bg-[#fff8e6]/40 -mx-2 px-2 rounded-lg transition-colors"
                      >
                        <span className="flex items-center gap-2.5 text-sm font-semibold text-[#0f2a44] group-hover:text-[#b31317] transition-colors">
                          <ChevronRight className="w-4 h-4 shrink-0 text-[#caa74d] group-hover:text-[#b31317] transition-colors" />
                          {doc.label}
                        </span>
                        <ExternalLink className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-[#b31317] transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">

            {/* CONTACT */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#b31317] px-5 py-3">
                  <h3 className="font-display text-base font-bold text-white tracking-wide">Contact</h3>
                </div>
                <div className="p-5 space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-bold text-[#b31317] text-sm">Dr. A V Pavan Kumar</p>
                    <p className="text-xs text-slate-600 mt-0.5">Asst. Dean Accreditations &amp; Chief Coordinator - PAARC Cell</p>
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
                    <Mail className="w-4 h-4 text-[#b31317] shrink-0" />
                    <a
                      href="mailto:paarc@mits.ac.in"
                      className="text-xs text-[#b31317] hover:underline font-medium"
                    >
                      paarc@mits.ac.in
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

            {/* SOURCE LINK */}
            <ScrollReveal>
              <a
                href="https://mits.ac.in/paarc-cell"
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

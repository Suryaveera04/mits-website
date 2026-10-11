import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft, BookOpen, FileText, ExternalLink,
  Phone, Mail, MapPin, ChevronLeft, ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const galleryImages = [
  "https://mits.ac.in/public/uploads/images/nisp1.JPG",
  "https://mits.ac.in/public/uploads/images/nisp2.JPG",
  "https://mits.ac.in/public/uploads/images/nisp3.JPG",
  "https://mits.ac.in/public/uploads/images/nisp4.JPG",
  "https://mits.ac.in/public/uploads/images/nisp5.JPG",
  "https://mits.ac.in/public/uploads/images/nisp6.JPG",
  "https://mits.ac.in/public/uploads/images/nisp7.jpeg",
];

const documents = [
  { title: "MITS Startup Policy", href: "https://mits.ac.in/assets/pdf/assoc/MITS-Startup-Policy.pdf" },
  { title: "Pitch Deck Template - 2025", href: "https://mits.ac.in/assets/pdf/assoc/Pitch_Deck_Template.pptx" },
  { title: "Startup Cell Achievements", href: "https://mits.ac.in/assets/pdf/assoc/Startup Cell Achievements.pdf" },
  { title: "List of Startups Incubated in the Year 2024-25", href: "https://mits.ac.in/assets/pdf/assoc/List of Startups Incubated in the Year 2024-25.pdf" },
  { title: "List of Startups Incubated in the Year 2023-24", href: "https://mits.ac.in/assets/pdf/assoc/List of Startups Incubated in the Year 2023-24.pdf" },
  { title: "NISP Annual News Letter 2023-24", href: "https://mits.ac.in/assets/pdf/assoc/NISP_Annual News Letter 2022-23.pdf" },
  { title: "NISP 2019", href: "https://mits.ac.in/assets/pdf/assoc/NISP%202019.pdf" },
  { title: "AP Innovation and Startup Policy", href: "https://mits.ac.in/assets/pdf/assoc/AP%20Innovation%20and%20Startup%20Policy.pdf" },
  { title: "NISP Committee Members 2025-26", href: "https://mits.ac.in/assets/pdf/assoc/Office Order-STARTUP & INCUBATION CELL-2025.pdf" },
  { title: "NISP Committee Members 2023-24", href: "https://mits.ac.in/assets/pdf/assoc/NISP%20Commitee%20Members.pdf" },
  { title: "MITS Startup Policy (Scanned)", href: "https://mits.ac.in/assets/pdf/assoc/Scanned_MITS_ISP_policy.pdf" },
  { title: "Documents Required for Startup", href: "https://mits.ac.in/assets/pdf/assoc/Documents Required for Startup.pdf" },
  { title: "Flowchart for Startup Registration", href: "https://mits.ac.in/assets/pdf/assoc/Flowchart for Startup Registration.pdf" },
];

export default function StartupView() {
  const navigate = useNavigate();
  const [imgIdx, setImgIdx] = useState(0);

  const prev = () => setImgIdx((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setImgIdx((i) => (i + 1) % galleryImages.length);

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
            Cells &amp; Committees • Innovation &amp; Entrepreneurship
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Startup &amp; Incubation Cell
          </h1>
          <p className="text-white/95 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            Madanapalle Institute of Technology and Science Foundation
          </p>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells &amp; Committees</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold truncate max-w-[220px]">Startup Cell</li>
          </ol>
        </nav>
      </section>

      <main className="container mx-auto px-4 py-10 md:py-14 max-w-6xl">
        <button
          onClick={() => navigate("/cells")}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells &amp; Committees
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN COLUMN */}
          <div className="lg:col-span-2 space-y-8">

            {/* IMAGE SLIDER */}
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden border border-[#0f2a44]/10 shadow-sm bg-black aspect-video">
                <img
                  src={galleryImages[imgIdx]}
                  alt={`Startup Cell ${imgIdx + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {galleryImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === imgIdx ? "bg-white" : "bg-white/40"}`}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* FOUNDATION HEADER */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-1">
                  Madanapalle Institute of Technology and Science Foundation
                </h3>
                <p className="text-sm text-[#b31317] font-medium mb-1">
                  Supported by Madanapalle Institute of Technology &amp; Science - Deemed to be University
                </p>
                <p className="text-xs text-slate-500">
                  (CIN No: U85500AP2024NPL116231, registered as a Section-8 Company under the Companies Act, 2013)
                </p>
              </div>
            </ScrollReveal>

            {/* ABOUT */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-6">
                <div>
                  <h2 className="font-display text-xl font-bold text-[#8b0000] mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    About
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                    Madanapalle Institute of Technology &amp; Science - Deemed to be University has inculcated the culture of
                    entrepreneurship. MITS has initiated the incubation centre in the year 2023 with an intention to provide
                    creative atmosphere, wherein new ideas and projects can flourish. The incubation centre is registered as
                    Madanapalle Institute of Technology and Science Foundation (MITS Foundation), a section 8 company as per
                    the Companies Act, 2013. The foundation was registered on 3rd October 2024. The Foundation is established
                    to offer a platform for staffs, students, alumni and general public who are aligned with its theme, for
                    the purpose of business incubation and innovation. The center is taking an active role in fostering an
                    entrepreneurial culture and environment for ideating, establishing, and commercializing businesses. Also,
                    it provides working spaces for incubation and offers counseling services on business management and
                    technological solutions. The approach is intended to help innovators in transforming their ideas into
                    products. It identifies tools, devices, and technology and putting together a network to commercialize
                    the items or services, thereby innovators and entrepreneurs can get benefitted.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-base font-bold text-[#0f2a44] mb-2">Vision</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    ❖ To become a prominent incubation center for developing sustainable and successful startup ventures and
                    contribute to the Socio-techno-economic development of the nation.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-base font-bold text-[#0f2a44] mb-2">Mission</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    ❖ MITS Foundation is committed to foster an innovation and entrepreneurship culture and support budding
                    innovators in their early-stage business ventures.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-base font-bold text-[#0f2a44] mb-2">Objectives</h3>
                  <p className="text-slate-700 text-sm mb-2">The main objectives of Foundation are</p>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {[
                      "To inspire faculty, staff and students to participate in innovation, ideation, and product development.",
                      "To transfer technology-based entrepreneurial knowledge, methodology, and practice and support for students' creative ideas.",
                      "To educate researchers, faculty, and students about patenting.",
                      "To connect scientific and technology related industries and higher education institutions.",
                      "To establish a platform for information exchange and application in real-time research.",
                    ].map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#8b0000] font-bold mt-0.5">•</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-base font-bold text-[#0f2a44] mb-2">Facilities</h3>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {[
                      "Office space with basic infrastructure",
                      "Computing facility",
                      "Common meeting room",
                      "Laboratory facilities on nominal charges as per the college norms",
                      "Professional services like accounting, legal and IPR",
                      "Facilitate interaction with Alumni, VCs, Industry Professionals, etc.",
                      "Mentoring from domain experts/faculty members of MITS",
                      "Intern Support from students of the MITS",
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#8b0000] font-bold mt-0.5">•</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-base font-bold text-[#0f2a44] mb-2">
                    National Innovation Startup Policy Statement
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed text-justify">
                    To provide guidelines for creating an ecosystem for fostering innovation and entrepreneurial spirit among
                    Students, Faculty and Staff, that promotes the establishment of Science &amp; Technology Driven Start-ups
                    which benefits the society, nation and beyond.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* DOCUMENTS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#8b0000] mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Documents &amp; Downloads
                </h2>
                <ul className="divide-y divide-gray-100">
                  {documents.map((doc, i) => (
                    <li key={i}>
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 py-3 group hover:bg-amber-50/40 -mx-2 px-2 rounded-lg transition-colors"
                      >
                        <span className="flex items-center gap-2.5 text-sm text-[#0f2a44] group-hover:text-[#b31317] transition-colors font-medium leading-snug">
                          <FileText className="w-4 h-4 shrink-0 text-[#caa74d]" />
                          {doc.title}
                        </span>
                        <ExternalLink className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-[#b31317] transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6">
                <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Phone className="w-4 h-4 text-[#8b0000]" />
                  Contact
                </h3>
                <div className="space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-bold text-[#8b0000]">Mr. Praneel Kumar Peruru</p>
                    <p className="text-xs text-slate-600">Coordinator</p>
                    <p className="text-xs text-slate-600">Assistant Professor</p>
                    <p className="text-xs text-slate-600">Department of CSE (Artificial Intelligence)</p>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#8b0000] shrink-0 mt-1" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Madanapalle Institute of Technology &amp; Science<br />
                      Deemed to be University<br />
                      Madanapalle-Kadiri Road<br />
                      Kurabalakota Mandal, Madanapalle-517325<br />
                      Andhra Pradesh, India
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#8b0000] shrink-0" />
                    <p className="text-xs text-slate-600">+91-8571-280255, 280706</p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="bg-gradient-to-br from-[#0f2a44] to-[#1c4066] text-white rounded-2xl shadow-sm p-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#ffd15c] mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-1">MITS Foundation</h4>
                <p className="text-xs text-white/85 mb-4 leading-relaxed">
                  Section-8 Company under the Companies Act, 2013.<br />
                  CIN: U85500AP2024NPL116231
                </p>
                <a
                  href="https://mits.ac.in/assets/pdf/assoc/MITS-Startup-Policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#b31317] hover:bg-[#990000] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  View Startup Policy
                </a>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

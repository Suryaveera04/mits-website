import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  ExternalLink,
  MapPin,
  Phone,
  ChevronRight,
  Target,
  CheckCircle2,
  Download,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "https://mits.edu/";

const objectives = [
  "To provide academic mentoring, socio-emotional counselling, support and monitor, circulate, publicise the implementation of facilities, guidelines and instructions of UGC and Govt from time to time.",
  "To implement outreach and bridge course programme designed and monitored by the University to avail the various educational/ academic/ career development opportunities, and ensure implementation of policies, schemes, and guidelines for such students.",
  "To redress the grievances and complaints through Grievances Redressal Committee (GRC) without compromising the safety, privacy and dignity of the complainant.",
];

const functions = [
  "To conduct regular meetings with SEDGs students to check their requirements and meet with university authorities for facilitate discussion and maintain confidentiality of deliberations.",
  "To co-ordinate with other cells of the university and enable implementation of the existing schemes, provisions, scholarships and fellowships of Govt.",
  "To implementation of bridge courses and outreach programmes designed by the university, and sensitize the students to bring an attitudinal change to ensure participation in curricular, co-curricular, extra-curricular activities in the university.",
  "To provide socio-economic, academic and psychological support and mentoring for such student through proper counselling and mentoring programme.",
  "To coordinate with the Internal Quality Assurance Cell to raise awareness about the implementation of various policies for inclusive and equitable quality higher education.",
  "To upload and disseminate guidelines, facilities, welfare, and safety measures on university portal and maintain such records to review and monitor amenities and basic facilities for a safe and secure environment.",
  "To focus on overall personality and skill development, including professional and soft skills, so as to ensure enhancing the student employability, and organise periodic meetings and to monitor the progress of various schemes and prepare database of such schemes.",
  "To inform all students during induction/counselling session about Zero-tolerance policy for any form of discrimination and to review, monitor, and ensure disposal of all grievances within 15 days.",
];

export default function SedgView() {
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
        <div className="absolute inset-0 bg-black/25 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        <div className="relative z-10 w-full max-w-[96%] mx-auto px-4 text-center">
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 drop-shadow-sm flex items-center justify-center gap-1.5">
            <Scale className="w-4 h-4 text-[#ffd15c]" />
            <span>Cells &amp; Committees • Equity &amp; Inclusion</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight !text-white text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Socio-Economically Disadvantaged Group Cell
            <span className="block text-2xl md:text-3xl text-[#ffd15c] mt-2 font-semibold">
              (SEDG Cell)
            </span>
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-3xl mx-auto drop-shadow-sm font-medium">
            Providing equitable opportunity for socio-economically disadvantaged groups to ensure prospects for all-inclusive, equal and quality higher education at MITS.
          </p>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells &amp; Committees</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold">SEDG Cell</li>
          </ol>
        </nav>
      </section>

      <main className="w-full max-w-[96%] mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-12">
        <button
          onClick={() => navigate("/cells")}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells &amp; Committees
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT / MAIN CONTENT */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">

            {/* ABOUT */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-[#b31317] mb-4 flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-[#b31317]" />
                  About Socio-Economically Disadvantaged Group Cell
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                  MITS deemed to be University is constituted SEDG Cell to provide Equitable Opportunity for the Socio-Economically Disadvantaged Groups to ensure prospects for all-inclusive, equal and quality higher education. The NEP 2020 has indicated as Socio-Economically Disadvantaged Groups (SEDG) and emphasized on their increased participation, particularly in higher education, and also ensure the protection of the constitutionally guaranteed rights, dignity, safety, security, equalizing access to avail opportunities to pursue higher education of all individuals belonging to the SEDGs. Also ensure them with the help of the other cells in university (such as SC, ST, OBC, EWS, Minority, Persons with Disabilities and bench mark Disabilities Cells etc to the SEDGs students).
                </p>
              </section>
            </ScrollReveal>

            {/* OBJECTIVES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#b31317] mb-4 flex items-center gap-2.5">
                  <Target className="w-5 h-5 text-[#b31317]" />
                  Objectives of SEDG Cell
                </h2>
                <ul className="space-y-3">
                  {objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#b31317] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        {i + 1}
                      </span>
                      <p className="text-sm text-slate-700 leading-relaxed text-justify">{obj}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* FUNCTIONS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-4 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#b31317]" />
                  Functions of SEDG Cell:
                </h2>
                <ul className="space-y-3.5">
                  {functions.map((fn, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#0f2a44]/10 text-[#0f2a44] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-sm text-slate-700 leading-relaxed text-justify">{fn}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* DOCUMENT */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-4 flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#b31317]" />
                  Official Documents &amp; Orders
                </h2>
                <div className="bg-gradient-to-r from-red-50/50 to-amber-50/30 border border-red-100 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#b31317] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#0f2a44]">
                        SEDG Cell Committee 2025-26
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Office Order • Constitution and guidelines for SEDG Cell
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://mits.ac.in/assets/pdf/assoc/Office%20Order-SEDG%20CELL-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#b31317] hover:bg-[#990000] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shrink-0 shadow-xs hover:shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>View Document</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                </div>
              </section>
            </ScrollReveal>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">

            {/* CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#b31317] px-5 py-3">
                  <h3 className="font-display text-base font-bold !text-white text-white tracking-wide">Contact</h3>
                </div>
                <div className="p-5 space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                    <div className="text-xs text-slate-600 leading-relaxed !text-left text-left space-y-0.5">
                      <p className="font-semibold text-slate-800">Address :</p>
                      <p className="font-semibold text-slate-900">Madanapalle Institute of Technology &amp; Science</p>
                      <p className="text-slate-700">Deemed to be University</p>
                      <p>Madanapalle-Kadiri Road</p>
                      <p>kurabalakota Mandal, Madanapalle-517325</p>
                      <p>Andhra Pradesh, India</p>
                    </div>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700">
                      <p className="font-semibold text-slate-800 mb-0.5">Phone :</p>
                      <p className="text-slate-600 font-medium">
                        <a href="tel:+918571280255" className="hover:text-[#b31317] transition-colors">+91-8571-280255</a>,{" "}
                        <a href="tel:+918571280706" className="hover:text-[#b31317] transition-colors">280706</a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* ASSOCIATED EQUITY & INCLUSION CELLS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-5">
                <h3 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#b31317]" />
                  <span>Equity &amp; Welfare Cells</span>
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Equal Opportunity Facilitation Cell", to: "/cells/eof" },
                    { label: "SC & ST Cell", to: "/cells/sc-st" },
                    { label: "Minority Cell", to: "/cells/minority" },
                    { label: "Women Empowerment Cell (WEC)", to: "/cells/wec" },
                    { label: "Internal Complaints Committee (ICC)", to: "/cells/icc" },
                    { label: "Grievance Redressal Cell (GRC)", to: "/grc" },
                    { label: "Student Welfare Cell (SWC)", to: "/swc" },
                  ].map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="flex items-center justify-between text-xs sm:text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-1.5 border-b border-gray-50 last:border-0 group"
                    >
                      <span>{p.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#caa74d] group-hover:text-[#b31317] transition-colors" />
                    </Link>
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
                      className="flex items-center justify-between text-xs sm:text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-1.5 border-b border-gray-50 last:border-0 group"
                    >
                      <span>{p.label}</span>
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

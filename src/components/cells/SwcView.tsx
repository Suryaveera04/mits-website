import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  FileDown,
  Calendar,
  Sparkles,
  AlertCircle,
  GraduationCap,
  CheckCircle2,
  Image as ImageIcon,
  DollarSign,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "https://mits.edu/";

const beneficiariesData = [
  { year: "2025-26", scholarships: "16 (Progressive)", beneficiaries: "405 (Progressive)" },
  { year: "2024-25", scholarships: "9", beneficiaries: "351" },
  { year: "2023-24", scholarships: "10", beneficiaries: "269" },
  { year: "2022-23", scholarships: "13", beneficiaries: "374" },
  { year: "2021-22", scholarships: "12", beneficiaries: "224" },
  { year: "2020-21", scholarships: "12", beneficiaries: "361" },
  { year: "2019-20", scholarships: "20", beneficiaries: "364" },
  { year: "2018-19", scholarships: "18", beneficiaries: "637" },
  { year: "2017-18", scholarships: "14", beneficiaries: "569" },
  { year: "2016-17", scholarships: "12", beneficiaries: "408" },
  { year: "2015-16", scholarships: "11", beneficiaries: "383" },
  { year: "2014-15", scholarships: "10", beneficiaries: "336" },
  { year: "2013-14", scholarships: "6", beneficiaries: "64" },
];

const formsAndDocuments = [
  {
    title: "Request Form",
    href: "https://mits.ac.in/pdf/2018-19-Request-Form.docx",
  },
  {
    title: "No Dues Form",
    href: "https://mits.ac.in/pdf/No-due-form.doc",
  },
  {
    title: "Student Affidavit",
    href: "https://mits.ac.in/pdf/student-affidavit.pdf",
  },
  {
    title: "Parent Affidavit",
    href: "https://mits.ac.in/pdf/parent-affidavit.pdf",
  },
  {
    title: "Attendance Declaration",
    href: "https://mits.ac.in/pdf/DECLARATION-UNDERTAKING-FROM-THE-STUDENT.pdf",
  },
];

const eventsData = [
  {
    title: 'An Expert Talk on "Personal Branding in the Digital Age: The LinkedIn Blueprint" on 10th April 2026 at the Auditorium.',
    href: "https://mits.ac.in/assets/pdf/swc/Personal%20Branding%20in%20the%20Digital%20Age%20The%20LinkedIn%20Blueprint.pdf",
  },
  {
    title: 'An Awareness Session on "Scholarships and Study Abroad Success Strategies" was organized on 27/02/26.',
    href: "https://mits.ac.in/assets/pdf/swc/Scholarships%20and%20Study%20Abroad%20Success%20Strategies.pdf",
  },
  {
    title: 'An Awareness Session on "University-Specific Private Scholarships for Master’s Programs Abroad" was organized on 23/02/26.',
    href: "https://mits.ac.in/assets/pdf/swc/University-Specific%20Private%20Scholarships%20for%20Master%E2%80%99s%20Programs%20Abroad%20.pdf",
  },
  {
    title: 'An Awareness Session on "Financial Support Options for Indian Students to study abroad" on 4th February 2026',
    href: "https://mits.ac.in/assets/pdf/swc/Financial%20Support%20Options.pdf",
  },
  {
    title: 'An Awareness Session about Vidya Lakshmi Educational Loan scheme on 2nd December 2025',
    href: "https://mits.ac.in/assets/pdf/swc/Vidya%20Lakshmi%20Educational%20Loan%20scheme.pdf",
  },
  {
    title: 'An Awareness programme on the National Scholarship Portal (NSP) application process was conducted on 16th November 2025',
    href: "https://mits.ac.in/assets/pdf/swc/NSP%20Application%20Process.pdf",
  },
  {
    title: 'An Awareness Programme on "Central and Private Scholarships", was organized on 15-02-2025.',
    href: "https://mits.ac.in/assets/pdf/swc/Awareness%20Program%20Report%20Central%20and%20Private%20Scholarships.pdf",
  },
];

const galleryImages = [
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-05-19%20at%208.17.02%20AM.jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-05-19%20at%208.55.26%20AM.jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-05-07%20at%2010.05.39%20AM.jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-05-15%20at%208.05.06%20AM%20(1).jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-05-07%20at%2010.05.39%20AM%20(1).jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-05-15%20at%208.05.04%20AM%20(1).jpeg",
  "https://mits.ac.in/public/uploads/gallery/swc-2026.jpg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-04-01%20at%203.41.53%20PM.jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-04-06%20at%208.07.31%20AM%20(1).jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-04-06%20at%208.07.31%20AM.jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-04-06%20at%208.07.32%20AM%20(1).jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-04-06%20at%208.07.32%20AM%20(2).jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-04-06%20at%208.07.32%20AM.jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-04-06%20at%208.07.33%20AM%20(1).jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-04-06%20at%208.07.33%20AM%20(2).jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-04-06%20at%208.07.33%20AM.jpeg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-04-06%20at%208.07.34%20AM.jpeg",
  "https://mits.ac.in/public/uploads/gallery/886a22fa-24a3-4f01-897e-2b7c1fa67cc6.jpg",
  "https://mits.ac.in/public/uploads/gallery/aa98f6e3-3f9b-471d-942f-1594d8244609.jpg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-03-05%20at%202.51.59%20PM.jpg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-03-05%20at%202.52.01%20PM.jpg",
  "https://mits.ac.in/public/uploads/gallery/111swc.jpg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-03-09%20at%203.43.27%20PM.jpg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-03-09%20at%203.43.28%20PM%20(3).jpg",
  "https://mits.ac.in/public/uploads/gallery/WhatsApp%20Image%202026-03-09%20at%203.43.28%20PM.jpg",
];

export default function SwcView() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("home");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#tab-gallery" || hash === "#gallery") {
        setActiveTab("gallery");
      } else if (hash === "#tab-8" || hash === "#financial-aid" || hash === "#tab-financial-aid") {
        setActiveTab("financial-aid");
      } else if (hash === "#tab-2" || hash === "#scholarships") {
        setActiveTab("scholarships");
      } else if (hash === "#tab-4" || hash === "#documents") {
        setActiveTab("documents");
      } else if (hash === "#tab-5" || hash === "#events") {
        setActiveTab("events");
      } else if (hash === "#tab-7" || hash === "#contact") {
        setActiveTab("contact");
      } else if (hash === "#tab-1" || hash === "#home") {
        setActiveTab("home");
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

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
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 drop-shadow-sm inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffd15c]" />
            <span>Cells &amp; Committees • Student Support &amp; Welfare</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            Student Welfare Cell
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            Empowering students with institutional and governmental scholarships, educational loans, and holistic support.
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
            <li className="text-[#ffd15c] font-semibold">Student Welfare Cell</li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTAINER */}
      <main className="w-full max-w-[96%] mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-12 space-y-8">
        <button
          onClick={() => navigate("/cells")}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells &amp; Committees
        </button>

        {/* TABS NAVIGATION BAR */}
        <div className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-2 flex flex-wrap items-center gap-2">
          {[
            { id: "home", label: "Home" },
            { id: "scholarships", label: "Scholarships" },
            { id: "documents", label: "Forms & Documents" },
            { id: "events", label: "Events" },
            { id: "gallery", label: "Gallery" },
            { id: "financial-aid", label: "Financial Aid" },
            { id: "contact", label: "Contact Us" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#b31317] text-white shadow-sm"
                  : "text-[#0f2a44] hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}

          {/* VIDYA LAXMI PORTAL TAB - DIRECT REDIRECT IN NEW TAB PER INSTRUCTION */}
          <a
            href="https://pmvidyalaxmi.co.in/StudentLogin.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-sm flex items-center gap-1.5 transition-all ml-auto cursor-pointer"
            title="Direct link to Vidya Laxmi Portal (Government of India)"
          >
            <span>Vidya Laxmi Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: HOME (ABOUT US) - FULL WIDTH WITH NO RIGHT CONTACT FEED PER PROMPT */}
        {/* ========================================================================= */}
        {activeTab === "home" && (
          <div className="space-y-8">
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-10 space-y-8">
                {/* ABOUT US TITLE */}
                <div className="border-b border-gray-100 pb-5">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#b31317] flex items-center gap-2.5">
                    <BookOpen className="w-7 h-7 text-[#b31317]" />
                    About Us
                  </h2>
                  <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44] mt-2">
                    MITS Scholarship provision &amp; Scope
                  </h3>
                </div>

                {/* PROVISION & SCOPE TEXT */}
                <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4 !text-justify text-justify">
                  <p>
                    Madanapalle Institute of Technology &amp; Science (MITS), Deemed to be University, firmly believes that education is the greatest enabler of social and economic progress. In pursuit of its mission to promote inclusive excellence, MITS has established a comprehensive scholarship policy designed to support and encourage students from diverse backgrounds, ensuring that financial constraints do not impede access to quality education.
                  </p>
                  <p>
                    This policy reflects the University&apos;s commitment to provide financial assistance to students with academic potential and economic need, foster inclusion by supporting students from underrepresented, marginalized or economically disadvantaged backgrounds by recognizing their academic achievement with exemplary conduct and holistic development.
                  </p>
                  <p>
                    This policy applies to all students admitted to various full-time programs of MITS Deemed to be University and covers institutional, governmental, and externally funded scholarships administered through the University.
                  </p>
                </div>

                {/* SINGLE LINE DOCUMENT LINK */}
                <div className="pt-2">
                  <a
                    href="https://mits.ac.in/assets/pdf/swc/Scholarship%20committee%20-%202025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#b31317] hover:bg-[#fff8e6]/40 transition-all group shadow-2xs"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#0f2a44] group-hover:text-[#b31317] transition-colors flex items-center gap-2.5">
                      <FileDown className="w-5 h-5 text-[#b31317]" />
                      Office Order - Scholarship Committee - 2025
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 bg-white border border-slate-200 rounded-lg text-[#b31317] group-hover:bg-[#b31317] group-hover:text-white transition-colors">
                      Download PDF
                    </span>
                  </a>
                </div>

                {/* SECTION 2: SUPPORT & GUIDANCE */}
                <div className="pt-6 border-t border-gray-100 space-y-4">
                  <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44] flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#b31317]" />
                    MITS Support and Guidance for External Scholarships
                  </h3>
                  <div className="space-y-3.5 text-slate-700 text-sm md:text-base leading-relaxed !text-justify text-justify">
                    <p>
                      <strong>Dedicated Student Affairs Cell:</strong> MITS has a Student Affairs Cell whose key role is to support students in finding and applying for scholarships both government-funded and from private/NGO sources:
                    </p>
                    <ul className="space-y-2.5 pl-4 sm:pl-6 list-disc text-slate-700">
                      <li>
                        <strong>Information dissemination:</strong> The cell circulates details about scholarships such as those available through the National Scholarship Portal (NSP), AICTE, UGC, Ministry of Minority Affairs (MOMA), SC/ST scholarships, AICTE&apos;s Single Girl Child Scholarship, and other schemes like ONGC and private organisations.
                      </li>
                      <li>
                        <strong>Regular updates:</strong> Students receive notifications almost throughout the year when new scholarships or applications open.
                      </li>
                      <li>
                        <strong>Guidance on eligibility &amp; application process:</strong> The cell explains eligibility criteria and correct documentation needed for various schemes.
                      </li>
                    </ul>
                    <p className="pt-2">
                      Over the years, hundreds of MITS students have benefited from central government and private scholarship schemes through this support system.
                    </p>
                  </div>
                </div>

                {/* SECTION 3: SCHOLARSHIP AWARENESS & APPLICATION HELP */}
                <div className="pt-6 border-t border-gray-100 space-y-4">
                  <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#b31317]" />
                    Scholarship Awareness &amp; Application Help
                  </h3>
                  <div className="space-y-3 text-slate-700 text-sm md:text-base leading-relaxed !text-justify text-justify">
                    <p>
                      <strong>Counselling on scholarship choices:</strong> Helping students identify which scholarships they are eligible for based on category (e.g., SC/ST, minority, EWS) and academic performance.
                    </p>
                    <p>
                      <strong>Assistance with online portals:</strong> Particularly the National Scholarship Portal (NSP) the central government&apos;s unified platform for applying and tracking scholarship applications.
                    </p>
                    <p>
                      <strong>Circulation of application procedures:</strong> Official circulars and directions for how to register, which forms to use, and how to complete applications properly (both fresh and renewal).
                    </p>
                  </div>
                </div>

                {/* SECTION 4: ELIGIBILITY CRITERIA */}
                <div className="pt-6 border-t border-gray-100 space-y-4">
                  <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#b31317]" />
                    Eligibility Criteria
                  </h3>
                  <p className="text-slate-700 text-sm md:text-base">
                    To qualify for any scholarship or award under this policy, a student must:
                  </p>
                  <ol className="space-y-2.5 pl-4 sm:pl-6 list-decimal text-slate-700 text-sm md:text-base leading-relaxed !text-justify text-justify font-medium">
                    <li>Be a bonafide, full-time student of MITS.</li>
                    <li>Maintain good scholastic standing.</li>
                    <li>Exhibit good conduct, discipline, and attendance throughout the academic year.</li>
                    <li>Submit valid income and merit documents as applicable.</li>
                    <li>Not simultaneously hold another full scholarship for the same purpose unless permitted by the Scholarship Committee.</li>
                  </ol>
                </div>
              </section>
            </ScrollReveal>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: SCHOLARSHIPS (#tab-2) */}
        {/* ========================================================================= */}
        {activeTab === "scholarships" && (
          <ScrollReveal>
            <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-10 space-y-6">
              <div className="border-b border-gray-100 pb-5">
                <h2 className="font-display text-2xl font-bold text-[#b31317]">
                  Scholarships Beneficiaries Data
                </h2>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed mt-2 !text-justify text-justify">
                  The Student Affairs Cell at MITS plays a key role in supporting students by identifying, exploring, and applying for various scholarship schemes offered by government bodies as well as private and NGO sources.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full border-collapse text-xs sm:text-sm whitespace-nowrap min-w-[700px]">
                  <thead>
                    <tr className="bg-[#b31317] text-white font-semibold">
                      <th className="py-3 px-4 text-left w-1/4">Year</th>
                      <th className="py-3 px-6 text-center w-1/3">No.of Scholarships</th>
                      <th className="py-3 px-6 text-center w-1/3">No.of Student Beneficiaries</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {beneficiariesData.map((item, idx) => (
                      <tr
                        key={item.year}
                        className={`hover:bg-amber-50/40 transition-colors ${
                          idx % 2 === 1 ? "bg-slate-50/50" : ""
                        }`}
                      >
                        <td className="py-3.5 px-4 text-left font-bold text-[#0f2a44]">
                          {item.year}
                        </td>
                        <td className="py-3.5 px-6 text-center font-semibold text-[#b31317]">
                          {item.scholarships}
                        </td>
                        <td className="py-3.5 px-6 text-center font-semibold text-slate-700">
                          {item.beneficiaries}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: FORMS & DOCUMENTS (#tab-4) */}
        {/* ========================================================================= */}
        {activeTab === "documents" && (
          <ScrollReveal>
            <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-10 space-y-6">
              {/* NOTICE BANNER */}
              <div className="p-5 rounded-xl bg-[#fff8e6] border border-[#caa74d]/50 flex items-start gap-3.5">
                <AlertCircle className="w-6 h-6 text-[#b31317] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0f2a44]">
                    After Applying, Please Check Your Mail to Collect Your Document at SWC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                    Download official application forms, affidavits, and declaration undertakings below:
                  </p>
                </div>
              </div>

              {/* SINGLE LINE DOCUMENTS TABLE */}
              <div className="divide-y divide-gray-100 border border-slate-200 rounded-xl overflow-hidden bg-white">
                {formsAndDocuments.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-4 px-4 sm:px-6 hover:bg-slate-50 transition-colors group"
                  >
                    <span className="text-sm sm:text-base text-[#0f2a44] font-medium group-hover:text-[#b31317] transition-colors pr-4 flex items-center gap-2.5">
                      <FileDown className="w-5 h-5 text-[#b31317] shrink-0" />
                      {doc.title}
                    </span>
                    <span className="shrink-0 text-xs font-semibold px-3 py-1 bg-slate-100 text-[#0f2a44] rounded-lg group-hover:bg-[#b31317] group-hover:text-white transition-colors">
                      Download
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: EVENTS (#tab-5) */}
        {/* ========================================================================= */}
        {activeTab === "events" && (
          <ScrollReveal>
            <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-10 space-y-6">
              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#0f2a44] flex items-center gap-2.5">
                    <Calendar className="w-6 h-6 text-[#b31317]" />
                    Events
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Student Welfare awareness programs, talks, and loan scheme sessions.
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-[#0f2a44] rounded-full">
                  {eventsData.length} Events
                </span>
              </div>

              {/* SINGLE LINE EVENTS LIST */}
              <div className="divide-y divide-gray-100 border border-slate-200 rounded-xl overflow-hidden bg-white">
                {eventsData.map((ev, idx) => (
                  <div
                    key={idx}
                    className="py-4 px-4 sm:px-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
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
        )}

        {/* ========================================================================= */}
        {/* TAB 5: GALLERY (#tab-gallery) */}
        {/* ========================================================================= */}
        {activeTab === "gallery" && (
          <ScrollReveal>
            <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0f2a44] flex items-center gap-2.5">
                  <ImageIcon className="w-6 h-6 text-[#b31317]" />
                  Gallery
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Photographic highlights of student welfare programs, scholarship drives, and workshops.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {galleryImages.map((src, i) => (
                  <a
                    key={i}
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-xl border border-gray-200 hover:border-[#b31317] transition-all group aspect-4/3 shadow-xs bg-slate-50"
                  >
                    <img
                      src={src}
                      alt={`SWC Gallery image ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: FINANCIAL AID (#tab-8) */}
        {/* ========================================================================= */}
        {activeTab === "financial-aid" && (
          <ScrollReveal>
            <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0f2a44] flex items-center gap-2.5">
                    <DollarSign className="w-6 h-6 text-[#b31317]" />
                    Financial Aid
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    MITS Financial Aid Scheme guidelines and eligibility criteria.
                  </p>
                </div>
                <a
                  href="https://mits.ac.in/assets/pdf/swc/Financial-AID.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#b31317] text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#8e0f13] transition-colors shadow-sm"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Financial Aid PDF</span>
                </a>
              </div>

              <div className="w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-slate-50">
                <iframe
                  src="https://mits.ac.in/assets/pdf/swc/Financial-AID.pdf#toolbar=1&navpanes=0&scrollbar=1&zoom=page-width"
                  width="100%"
                  height="1000"
                  className="w-full min-h-[700px] md:min-h-[1000px] border-0"
                  title="Financial Aid"
                >
                  Financial Aid
                </iframe>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* TAB 7: CONTACT (#tab-7) - EXACT TEXT & ADDRESS PER USER PROMPT */}
        {/* ========================================================================= */}
        {activeTab === "contact" && (
          <ScrollReveal>
            <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden text-left max-w-4xl mx-auto">
              <div className="bg-[#b31317] px-6 py-4">
                <h3 className="font-display text-xl font-bold !text-white text-white tracking-wide">
                  Contact
                </h3>
              </div>
              <div className="p-8 space-y-8 text-sm text-slate-700">
                {/* COORDINATOR 1: Dr. P. Athahar */}
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-4">
                  <div>
                    <p className="font-bold text-[#0f2a44] text-xl">Dr. P. Athahar</p>
                    <p className="text-sm text-[#b31317] font-semibold mt-0.5">
                      Senior Manager – Student Affairs
                    </p>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-slate-200/60">
                    <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                    <div className="text-xs sm:text-sm leading-relaxed space-y-0.5 !text-left text-left">
                      <p className="font-semibold text-[#0f2a44]">Address :</p>
                      <p className="font-bold text-[#0f2a44]">
                        Madanapalle Institute of Technology &amp; Science
                      </p>
                      <p>Deemed to be University</p>
                      <p>Madanapalle-Kadiri Road</p>
                      <p>kurabalakota Mandal, Madanapalle-517325</p>
                      <p>Andhra Pradesh, India</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 space-y-2">
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#b31317] shrink-0" />
                      <span className="font-semibold text-[#0f2a44]">Phone:</span>
                      <span className="text-slate-600">+91-8571-280255</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#b31317] shrink-0" />
                      <span className="font-semibold text-[#0f2a44]">Email:</span>
                      <a
                        href="mailto:sm.studentaffairs@mits.ac.in"
                        className="text-[#b31317] hover:underline font-semibold whitespace-nowrap"
                      >
                        sm.studentaffairs@mits.ac.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* COORDINATOR 2: Ms. Raga Deepthi */}
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-4">
                  <div>
                    <p className="font-bold text-[#0f2a44] text-xl">Ms. Raga Deepthi</p>
                    <p className="text-sm text-[#b31317] font-semibold mt-0.5">
                      Assistant Administrative Officer (Students Welfare)
                    </p>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-slate-200/60">
                    <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                    <div className="text-xs sm:text-sm leading-relaxed space-y-0.5 !text-left text-left">
                      <p className="font-semibold text-[#0f2a44]">Address :</p>
                      <p className="font-bold text-[#0f2a44]">
                        Madanapalle Institute of Technology &amp; Science
                      </p>
                      <p>Deemed to be University</p>
                      <p>Madanapalle-Kadiri Road</p>
                      <p>kurabalakota Mandal, Madanapalle-517325</p>
                      <p>Andhra Pradesh, India</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 space-y-2">
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#b31317] shrink-0" />
                      <span className="font-semibold text-[#0f2a44]">Phone:</span>
                      <span className="text-slate-600">+91-8571-280255</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#b31317] shrink-0" />
                      <span className="font-semibold text-[#0f2a44]">Email:</span>
                      <a
                        href="mailto:swo@mits.ac.in"
                        className="text-[#b31317] hover:underline font-semibold whitespace-nowrap"
                      >
                        swo@mits.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}
      </main>

      <Footer />
    </div>
  );
}

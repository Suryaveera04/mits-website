import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, FileText, ExternalLink, MapPin, Phone, Mail, ChevronRight, Youtube, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const aboutParagraphs = [
  "MITS - Deemed to be University Universal Human Values Cell is constituted, with the following members, to ensure proper infrastructure and structure for UHV Cell as per guidelines of AICTE, to articulate, refine & share vision and educational goals, particularly those that are related to Universal Human Values and to define indicators or measures related to Universal Human Values goals & activities.",
  "MITS UHV Cell undertakes events for the stakeholders to realize their full human potential and there by assist in Social and Emotional Learning. It also helps the students and faculty to live with feeling of relationship, harmony and co-existence.",
  "This Cell will conduct / organize programmes to create awareness among the students and faculty about Universal values and ethics which would be beneficial for their self-exploration towards harmony in individual, prosperity in family, fearlessness in society and co-existence in nature with right understanding.",
];

const activities = [
  { text: "A Student Induction Program (SIP) was conducted for B. Tech I Year students from 18th to 29th August 2026.", href: "https://mits.ac.in/assets/pdf/bsh/SIP_MAIN REPORT - 11.09.26.pdf" },
  { text: "Dr. B. Jagadeesh Babu, UHV cell coordinator participated as a Co-facilitator at AICTE Approved Five Day Self-funded face to face FDP on Universal Human Values-II held at Gokaraju Rangaraju Institute of Engineering and Technology (GRIET), Hyderabad from 06th to 10th April 2026.", href: "https://mits.ac.in/assets/pdf/assoc/GRIET Duty certificate.pdf" },
  { text: "Madanapalle Institute of Technology and Science (MITS) Deemed to be University, Madanapalle, Andhra Pradesh, has been recognized as a Nodal Centre for Universal Human Values (UHV) by the All India Council for Technical Education (AICTE) for the period 2025-27.", href: "https://mits.ac.in/assets/pdf/assoc/Certificate UHV - 2025-27-Nodal Centre.pdf" },
  { text: 'MITS Wellness club under the mentorship of MITS UHV Cell conducted "Guess the Song" activity for the students on 07/03/2026.', href: "https://mits.ac.in/assets/pdf/assoc/wellness club event 2.pdf" },
  { text: 'MITS Wellness club under the mentorship of MITS UHV Cell conducted "Fun event" activity for the students on 21/02/2026.', href: "https://mits.ac.in/assets/pdf/assoc/Wellness club event 1.pdf" },
  { text: "A Survey on the Transformative Impact of Universal Human Values Education: Insights from MITS (Deemed to be University) was conducted. 74% students strongly agree that UHV enhances the holistic vision of life.", href: "https://mits.ac.in/assets/pdf/assoc/MITS UHV Impact Survey FINAL DRAFT.pdf" },
  { text: "Dr. B. Jagadeesh Babu participated as a Panelist (Educational panel) in the 10th International Conference on Human Values in Higher Education (ICHVHE 2025) from 19/12/2025 to 21/12/2025 (Worldwide).", href: "https://mits.ac.in/assets/pdf/assoc/ICHVHE 2025 Panelist-min.pdf" },
  { text: "Dr. Jagadeesh Babu Bellam was a Presenter (Impact of UHV-based Student Induction Program (UHV-I) at MITS) at 10th International Conference on Human Values in Higher Education (ICHVHE 2025) from 19/12/2025 to 21/12/2025 (Worldwide).", href: "https://mits.ac.in/assets/pdf/assoc/ICHVEHE 2025 Institutional sharing-min.pdf" },
  { text: "A 5-Day self-funded face to face Faculty Development Program (FDP) on Universal Human Values (UHV-II) was organized by UHV Cell, in association with NCC-IP, AICTE from 21st to 25th July 2025.", href: "https://mits.ac.in/assets/pdf/assoc/5-Day UHV-II FDP-25.07.2025.pdf" },
  { text: "Dr. B. Jagadeesh Babu, UHV cell coordinator participated as an observer at AICTE Approved Five Day Self-funded face to face FDP on Universal Human Values-II held at Raghu Engineering College (REC), Visakhapatnam from 16th to 20th June 2025.", href: "https://mits.ac.in/assets/pdf/assoc/Universal Human Values-II -2025.pdf" },
  { text: 'Dr. B. Jagadeesh Babu, UHV Cell coordinator attended "National Conference of UHV Volunteers" organized by UHV Foundation in association with AICTE at SRMIST, Delhi-NCR Campus, Ghaziabad (U.P.), INDIA from 03rd to 05th April 2025.', href: "https://mits.ac.in/assets/pdf/assoc/UHV conference.pdf" },
  { text: 'An "International Day of Happiness – 2025" was organized by Wellness Club in association with Universal Human Values Cell, MITS on 20th March 2025.', href: "https://mits.ac.in/assets/pdf/assoc/International Day of Happiness-2025.pdf" },
  { text: "Dr. B. Jagadeesh Babu, UHV cell coordinator Participated as a Volunteer (Education Panel) in the 9th International Conference on Human Values in Higher Education (ICHVHE 2024) from 22/11/2024 to 24/11/2024 (Worldwide).", href: "https://mits.ac.in/assets/pdf/assoc/ICHVHE 2024.pdf" },
  { text: "Dr. B. Jagadeesh Babu, UHV cell coordinator participated as a co-facilitator at AICTE Approved Three Days FDP on Introductory UHV held at SITAMS, Chittoor, Andhra Pradesh from 18.10.2024 to 20.10.2024.", href: "https://mits.ac.in/assets/pdf/assoc/SITAMS UHV FDP Report.pdf" },
  { text: "Dr. B. Jagadeesh Babu, UHV cell coordinator participated as a co-facilitator at AICTE Approved Five Days FDP on Universal Human Values-II held at GITAM University, Visakhapatnam from 15.05.2024 to 19.05.2024.", href: "https://mits.ac.in/assets/pdf/assoc/GITAM UHV-II FDP report.pdf" },
  { text: "Dr. B. Jagadeesh Babu, UHV cell coordinator attended AICTE Supported Eight Days FDP on Universal Human Values-III held at SRMIST, SRM University, Chennai from 01.05.2024 to 08.05.2024.", href: "https://mits.ac.in/assets/pdf/assoc/UHV-III Report.pdf" },
  { text: "International Day of Happiness - 2024 was organized by Wellness Club and UHV Cell, MITS, on 20th March 2024.", href: "https://mits.ac.in/assets/pdf/assoc/International Day of Happiness – 2024.pdf" },
  { text: "A Three-Day Self-funded face to face Faculty Development Program (FDP) on Introductory Universal Human Values (UHV) was organized by UHV Cell, in association with NCC-IP, AICTE from 05th to 07th October 2023.", href: "https://mits.ac.in/assets/pdf/assoc/Introductory%20Universal%20Human%20Values.pdf" },
  { text: "A Five Day FDP on Introductory UHV was held at International Delhi Public School (IDPS), Madanapalle, A. P. from 7th June to 12th June 2023.", href: "https://mits.ac.in/assets/pdf/assoc/DPS Report.pdf" },
  { text: "Dr. B. Jagadeesh Babu, UHV cell coordinator attended five-day residential FDP on UHV-II as a co-facilitator sponsored by AICTE and organized by JNTUA College of Engineering, Kalikiri, Annamayya Dist. A. P. from 16th to 20th August 2022.", href: "https://mits.ac.in/assets/pdf/assoc/report UHV-II Kalikiri.pdf" },
  { text: "Dr. B. Jagadeesh Babu, Assistant Professor, Department of Physics participated in 1st Southern, South-Central and South-Western Regional Conference for UHV Volunteers, Organized by AICTE at RV College of Engineering, Bangalore, during 28th to 30th April 2022.", href: "https://mits.ac.in/assets/pdf/assoc/report-UHV Volunteers.pdf" },
];

const usefulLinks = [
  { label: "UHV YouTube Playlist", href: "https://www.youtube.com/playlist?list=PLkF5EHt-5lpoq8Di2s3QxJXlYWe8w4GFp" },
  { label: "AICTE – Student Induction Program & UHV Content", href: "https://fdp-si.aicte-india.org/index.php" },
  { label: "UHV FDP Registration Link", href: "https://fdp-si.aicte-india.org/verifiedProgramDetailsList.php" },
  { label: "UHV.org.in – All UHV Related Courses", href: "https://uhv.org.in/" },
  { label: "YouTube Channel for UHV", href: "https://www.youtube.com/@UniversalHumanValues/playlists" },
];

const documents = [
  { label: "UHV Cell Policy Document 2025-26", href: "https://mits.ac.in/assets/pdf/assoc/UHV Cell Policy document ver01_25-26.pdf" },
  { label: "Student Induction Program (SIP) 2024-25", href: "https://mits.ac.in/assets/pdf/assoc/SIP%202024-25.pdf" },
  { label: "Student Induction Program (SIP) 2023-24", href: "https://mits.ac.in/public/uploads/uhv/UHV-SIP-2023-24.pdf" },
  { label: "Student Induction Program (SIP) 2022-23", href: "https://mits.ac.in/public/uploads/uhv/UHV-SIP-2022-23.pdf" },
  { label: "Office Order 4 - Universal Human Values Cell - 05.11.2025", href: "https://mits.ac.in/public/uploads/uhv/office Order- UHV Cells Appointment-2025.pdf" },
  { label: "Office Order 3 - Universal Human Values Cell - 16.04.2024", href: "https://mits.ac.in/public/uploads/uhv/Universal Human Values Cell 18.04.2024.pdf" },
  { label: "Office Order 2 - Universal Human Values Cell - 22.07.2022", href: "https://mits.ac.in/public/uploads/uhv/UHV-Office Order-22.07.2022.pdf" },
  { label: "Office Order 1 - Universal Human Values Cell - 23.11.2020", href: "https://mits.ac.in/public/uploads/uhv/Office Order - Universal Human Values Cell.pdf" },
  { label: "Circular - Universal Human Values Cell", href: "https://mits.ac.in/public/uploads/uhv/UHV-II Circular Feb 2020.PDF" },
  { label: "A Vision for Universal Human Education", href: "https://mits.ac.in/public/uploads/uhv/Vision of Universal Human Education.pdf" },
];

const addressBlock = (
  <div className="text-xs text-slate-600 leading-relaxed">
    <p>Madanapalle Institute of Technology &amp; Science</p>
    <p>Deemed to be University</p>
    <p>Madanapalle-Kadiri Road</p>
    <p>Kurabalakota Mandal, Madanapalle-517325</p>
    <p>Andhra Pradesh, India</p>
  </div>
);

export default function UhvcView() {
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
            Cells &amp; Committees • Academic &amp; Quality Governance
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Universal Human Values Cell
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            Fostering harmony, co-existence and ethical values among students and faculty through AICTE-guided Universal Human Values programmes.
          </p>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells &amp; Committees</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold">UHV Cell</li>
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

          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* ABOUT */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-[#b31317] mb-4 flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-[#b31317]" />
                  About Universal Human Values Cell
                </h2>
                <div className="space-y-3">
                  {aboutParagraphs.map((p, i) => (
                    <p key={i} className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">{p}</p>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* ACTIVITIES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#b31317] mb-5 flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#b31317]" />
                  UHV Cell Activities
                </h2>
                <ul className="space-y-4">
                  {activities.map((act, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0 mt-2" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-700 leading-relaxed text-justify">{act.text}</p>
                        <a
                          href={act.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-1.5 text-xs font-semibold text-[#b31317] hover:text-[#0f2a44] transition-colors"
                        >
                          <ExternalLink className="w-3 h-3 shrink-0" />
                          Click here for Report on Event
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* USEFUL LINKS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#b31317] mb-4 flex items-center gap-2.5">
                  <Globe className="w-5 h-5 text-[#b31317]" />
                  UHV Cell Useful Links
                </h2>
                <ul className="divide-y divide-gray-100">
                  {usefulLinks.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 py-3 group hover:bg-[#fff8e6]/40 -mx-2 px-2 rounded-lg transition-colors"
                      >
                        <span className="flex items-center gap-2.5 text-sm font-semibold text-[#0f2a44] group-hover:text-[#b31317] transition-colors">
                          <ChevronRight className="w-4 h-4 shrink-0 text-[#caa74d] group-hover:text-[#b31317] transition-colors" />
                          {link.label}
                        </span>
                        <ExternalLink className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-[#b31317] transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>
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
                  {documents.map((doc, i) => (
                    <li key={i}>
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

            {/* CONTACT — Coordinator */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#b31317] px-5 py-3">
                  <h3 className="font-display text-base font-bold text-white tracking-wide">Contact</h3>
                </div>
                <div className="p-5 space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-bold text-[#b31317] text-sm">Dr. Jagadeesh Babu Bellam</p>
                    <p className="text-xs text-slate-600 mt-0.5">Coordinator of UHV Cell</p>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5" />
                    {addressBlock}
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#b31317] shrink-0" />
                    <span className="text-xs text-slate-700">+91-9100973266; 8571-280255, 280706</span>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#b31317] shrink-0" />
                    <a href="mailto:jagadeeshbabub@mits.ac.in" className="text-xs text-[#b31317] hover:underline font-medium">
                      jagadeeshbabub@mits.ac.in
                    </a>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* CONTACT — Co-coordinator */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#0f2a44] px-5 py-3">
                  <h3 className="font-display text-base font-bold text-white tracking-wide">Co-Coordinator</h3>
                </div>
                <div className="p-5 space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-bold text-[#b31317] text-sm">Dr. K. Chandra Mohan</p>
                    <p className="text-xs text-slate-600 mt-0.5">Co-coordinator of UHV Cell</p>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5" />
                    {addressBlock}
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#b31317] shrink-0" />
                    <span className="text-xs text-slate-700">+91-9100973269; 8571-280255, 280706</span>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#b31317] shrink-0" />
                    <a href="mailto:drkchandramohan@mits.ac.in" className="text-xs text-[#b31317] hover:underline font-medium">
                      drkchandramohan@mits.ac.in
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
                href="https://mits.ac.in/uhv-cell"
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

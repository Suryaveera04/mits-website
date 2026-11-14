import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

// Sharp PDF Icon matching the official MITS style
function PdfIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <div className={`shrink-0 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 28 32" fill="none" className="w-full h-full drop-shadow-sm">
        <path
          d="M4 2h13l7 7v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
          fill="#ffffff"
          stroke="#b31317"
          strokeWidth="1.8"
        />
        <path
          d="M17 2v7h7"
          stroke="#b31317"
          strokeWidth="1.8"
          fill="#fde8e8"
        />
        {/* PDF text label */}
        <rect x="4.5" y="14" width="17" height="10" rx="2" fill="#b31317" />
        <text
          x="6"
          y="21.5"
          fill="#ffffff"
          fontSize="7"
          fontWeight="800"
          fontFamily="sans-serif"
          letterSpacing="0.4"
        >
          PDF
        </text>
      </svg>
    </div>
  );
}

// Complete 27 official events retrieved verbatim from https://mits.ac.in/csi-content
const events2025_26 = [
  {
    title:
      "A One Day Workshop on “Human Centered Applied AI Research” was organized by Department of Computer Science & Engineering in Association with Computer Society of India & Bellu AI on 22nd December 2025.",
    url: "https://mits.ac.in/assets/pdf/cse/Human Centered Applied AI Research.pdf",
  },
  {
    title:
      "A Guest Lecture on “Generative AI & Reimagining Retail Supply Chains: Transformative Power of Agentic AI” was organized by Department of Computer Science & Engineering in Association with Computer Society of India (CSI) on 19th August 2025.",
    url: "https://mits.ac.in/assets/pdf/cse/Generative AI & Reimagining Retail Supply Chains Transformative Power of Agentic AI.pdf",
  },
];

const events2024_25 = [
  {
    title:
      "A Guest Lecture on “Edge AI 2.0: Towards Establishing & Sustaining Real-Time Enterprises” was organized by Department of Computer Science & Engineering in Association with Computer Society of India (CSI) on 20th March 2025.",
    url: "https://mits.ac.in/assets/pdf/cse/Edge AI 2.0 Towards Establishing & Sustaining Real-Time Enterprises.pdf",
  },
  {
    title:
      "A National Level Hackathon \"InnoSpark 1.0\" was organized by Department of Computer Science & Engineering in association with CSI on 25th November 2024.",
    url: "https://mits.ac.in/assets/pdf/cse/INNOSPARK 1.0.pdf",
  },
  {
    title:
      "A Short Term Training Programme on “Gen AI Tools and Techniques” was organized by Department of Computer Science & Engineering in Association with Computer Society of India (CSI) from 11th to 16th November 2024.",
    url: "https://mits.ac.in/assets/pdf/cse/Gen AI Tools and Techniques.pdf",
  },
];

const events2023_24 = [
  {
    title:
      "A Guest Lecture on \"Introduction and Real-World Applications of Machine Learning\" was organized by Department of Computer Science & Engineering in association with Computer Society of India (CSI) on 06th May 2024.",
    url: "https://mits.ac.in/assets/pdf/cse/Introduction and Real-World Applications of Machine Learning.pdf",
  },
  {
    title:
      "A Webinar on \"Smart Surveillance: Advancements in Video Analytics with Machine Learning\" was organized by Department of Computer Science & Engineering on 4th May 2024.",
    url: "https://mits.ac.in/assets/pdf/cse/Smart Surveillance Advancements in Video Analytics with Machine Learning.pdf",
  },
  {
    title:
      "An Online Guest Lecture on “Machine Learning Techniques\" was organized by Department of Computer Science & Engineering on 01st May 2024.",
    url: "https://mits.ac.in/assets/pdf/cse/Machine Learning Techniques.pdf",
  },
  {
    title:
      "An Online Guest Lecture on “Basic Concepts of cryptography & Block chain Technologies” was organized by Department of Computer Science & Engineering on 1st May 2024.",
    url: "https://mits.ac.in/assets/pdf/cse/Basic Concepts of cryptography & Block chain Technologies.pdf",
  },
  {
    title:
      "A One Week Online National Level Faculty Development Programme on “Impact of Emerging Technologies in AI/ML and Data Science” was organized by Department of Computer Science & Engineering In Association with Computer Society of India (CSI) from 26-02-2024 to 02-03-2024.",
    url: "https://mits.ac.in/assets/pdf/cse/Impact of Emerging Technologies in AI-ML and Data Science.pdf",
  },
  {
    title:
      "One Week Online International Faculty Development Programme on “Emerging Tools & Techniques in Machine Learning and Data Science“ was organized by Department of CSE in association with Computer Society of India (CSI) from 5th to 10th February 2024.",
    url: "https://mits.ac.in/assets/pdf/cse/Emerging Tools & Techniques in Machine Learning and Data Science.pdf",
  },
  {
    title:
      "A Guest Lecture on “Data Science for Engineers\" was organized by Department of Computer Science & Engineering in association with Computer Society of India (CSI) on 2nd December 2023.",
    url: "https://mits.ac.in/assets/pdf/cse/Data Science for Engineers.pdf",
  },
  {
    title:
      "A Webinar “Research Opportunities in Integration of IoT and Blockchain for Smart Applications” was organized by Department of Computer Science & Engineering in association with Computer Society of India (CSI) on 22nd November 2023.",
    url: "https://mits.ac.in/assets/pdf/cse/Research%20Opportunities%20in%20Integration%20of%20IoT%20and%20Blockchain%20for%20Smart%20Applications.pdf",
  },
  {
    title:
      "A Guest Lecture on “Post Quantum Cryptography “ was organized by Department of Computer Science & Engineering in association with Computer Society of India (CSI) on 20th November 2023.",
    url: "https://mits.ac.in/assets/pdf/cse/Post Quantum Cryptography.pdf",
  },
];

const events2022_23 = [
  {
    title:
      "A 5 Days Online Workshop on Recent Trends in Machine Learning and BigData in association with Computer Society of India from 24th to 31st May 2023.",
    url: "https://mits.ac.in/assets/pdf/cse/Recent Trends in Machine Learning and BigData.pdf",
  },
  {
    title:
      "A Two Days National Conference NASA'23, was organized by Department of Computer Science and Engineering on 19th & 20th April 2023.",
    url: "https://mits.ac.in/assets/pdf/cse/NASA-23.pdf",
  },
  {
    title:
      "A National Level Technical Symposium GMOCS-2023 was organized by Department of Computer Science & Engineering on 29th March 2023.",
    url: "https://mits.ac.in/assets/pdf/cse/GMOCS-2K23.pdf",
  },
  {
    title:
      "An Quiz Contest on “Web Development V1.0” was organized by Department of Computer Science & Engineering in Association with Computer Society of India (CSI) on 19th November 2022.",
    url: "https://mits.ac.in/assets/pdf/cse/Web Development V1.0-min.pdf",
  },
  {
    title:
      "One Week Online International Faculty Development Programme on \"Emerging Trends and Research Opportunities in Computer Science\" was organized by Department of Computer Science & Engineering from 31st October to 5th November 2022.",
    url: "https://mits.ac.in/assets/pdf/cse/Emerging Trends & Research Opportunities in Computer Science.pdf",
  },
  {
    title:
      "A \"One Week Online Faculty Induction Workshop on Thrust Areas\" in association with IEEE & CSI was organized by Department of Computer Science & Engineering on 10th to 15th October 2022.",
    url: "https://mits.ac.in/assets/pdf/cse/One Week Online Faculty Induction Workshop on Thrust Areas.pdf",
  },
];

const events2021_22 = [
  {
    title:
      "A National Level Technical Symposium GMOCS-2K22 was organized by Department of Computer Science and Engineering on 25th May 2022.",
    url: "https://mits.ac.in/assets/pdf/cse/GMOCS-2022.pdf",
  },
  {
    title:
      "Report on Webinar on Cloud Technologies opportunities learnings, and growth. In association with the Computer Society of India (CSI) 21st May 2022.",
    url: "https://mits.ac.in/assets/pdf/cse/Webinar_on_cloud_Computing_21_05_22.pdf",
  },
  {
    title:
      "Report on Guest Lecture Organized by Department of Computer Science & Engineering on “Role of IoT in Smart Spaces” in Association with Computer Society of India (CSI) 04th May 2022.",
    url: "https://mits.ac.in/assets/pdf/cse/Report on IOT.pdf",
  },
  {
    title:
      "\"Opportunities and challenges of Entrepreneur\" in association with Computer Science of India, was organized by Department of Computer Science & Engineering on 27th April 2022.",
    url: "https://mits.ac.in/assets/pdf/cse/Report On Guest Lecture.pdf",
  },
  {
    title:
      "Five Day Workshop Report on \"Applications Of Blockchain And Artificial Intelligence In Diverse Domain” was organized by Department of Computer Science & Engineering on 21st to 26th October 2021.",
    url: "https://mits.ac.in/assets/pdf/cse/Applications of Blockchain and Artificial Intelligence in Diverse Domain.pdf",
  },
  {
    title:
      "One day National webinar report on \"Research Perspectives in Cloud Security” was Organized by Department of Computer Science & Engineering in Association with Computer Society of India [CSI], 12 October 2021.",
    url: "https://mits.ac.in/assets/pdf/cse/Webinar RPCC  REPORT 12.10.21.pdf",
  },
  {
    title:
      "One day National webinar report on \"DEEP LEARNING AND ITS APPLICATIONS” was organized by Department of Computer Science & Engineering in Association with Institute of Electrical and Electronics Engineers [IEEE] and Computer Society of India [CSI], on 09 October 2021.",
    url: "https://mits.ac.in/assets/pdf/cse/Webinar-Deep-Learning  REPORT 09.10.21.pdf",
  },
];

export default function CsiView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800">
      <Header />

      {/* HERO BANNER - Matching other cell pages */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-sm sm:text-sm mb-4 drop-shadow-sm">
            Professional Societies &amp; Chapters
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Computer Society of India (CSI) Student Branch
          </h1>
          <p className="text-white/90 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            MITS CSI Student Branch [M10660]
          </p>
        </div>

        {/* BOTTOM-LEFT CORNER BREADCRUMB */}
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
            <li className="text-[#ffd15c] font-semibold truncate max-w-[280px] sm:max-w-md">
              Computer Society of India (CSI)
            </li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTENT CONTAINER - Balanced full width eliminating empty margins */}
      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/cells")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Cells &amp; Committees</span>
          </button>
        </div>

        {/* 2-COLUMN BALANCED WIDE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* PRIMARY CONTENT AREA (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 md:p-8">
                {/* BRANCH SUBTITLE */}
                <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] mb-6">
                  MITS CSI Student Branch [M10660]
                </h2>

                {/* ABOUT CSI */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold font-display text-[#0f2a44] mb-3">
                    About CSI
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-justify text-sm sm:text-base">
                    Formed in 1965, the CSI has been instrumental in guiding the Indian IT industry down the right path since its formative years. Today, the CSI has 70 chapters all over India, 418 student branches, and more than 90000 members including India&apos;s most famous IT industry leaders, brilliant scientists and dedicated academicians.
                  </p>
                </div>

                {/* MISSION */}
                <div className="pt-6 border-t border-gray-100 mb-8">
                  <h3 className="text-xl font-bold font-display text-[#0f2a44] mb-3">
                    Mission
                  </h3>
                  <div className="space-y-4 text-slate-700 leading-relaxed text-justify text-sm sm:text-base">
                    <p>
                      The mission of the CSI is to facilitate research, knowledge sharing, learning and career enhancement for all categories of IT professionals, while simultaneously inspiring and nurturing new entrants into the industry and helping them to integrate into the IT community. The CSI is also working closely with other industry associations, government bodies and academia to ensure that the benefits of IT advancement ultimately percolate down to every single citizen of India.
                    </p>
                    <p>
                      Eminent personnel from industry (entrepreneurs), financial institutions (Banks), and academics will be invited to interact and to empower the knowledge in the concern fields that enrich the students how to start an entrepreneur at their own cost and procedures to be followed further. They also share their experiences about their success and failures of growth as an entrepreneur and motivate students at the plethora of opportunities they have in the World of industrial sector and encourage the students to launch new ventures.
                    </p>
                  </div>
                </div>

                {/* EVENTS ORGANIZED */}
                <div className="pt-8 border-t border-gray-200">
                  <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0f2a44] mb-6">
                    Events Organized
                  </h2>

                  {/* 2025-26 */}
                  <div className="mb-8">
                    <h3 className="text-lg md:text-xl font-bold font-display text-[#0f2a44] mb-3">
                      2025-26
                    </h3>
                    <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200 bg-white shadow-sm">
                      {events2025_26.map((evt, idx) => (
                        <a
                          key={idx}
                          href={evt.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 sm:px-6 hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-sm sm:text-[15px] font-medium text-slate-800 group-hover:text-[#b31317] transition-colors leading-relaxed pr-4">
                            {evt.title}
                          </span>
                          <PdfIcon className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-105 transition-transform shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* 2024-25 */}
                  <div className="mb-8">
                    <h3 className="text-lg md:text-xl font-bold font-display text-[#0f2a44] mb-3">
                      2024-25
                    </h3>
                    <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200 bg-white shadow-sm">
                      {events2024_25.map((evt, idx) => (
                        <a
                          key={idx}
                          href={evt.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 sm:px-6 hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-sm sm:text-[15px] font-medium text-slate-800 group-hover:text-[#b31317] transition-colors leading-relaxed pr-4">
                            {evt.title}
                          </span>
                          <PdfIcon className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-105 transition-transform shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* 2023-24 */}
                  <div className="mb-8">
                    <h3 className="text-lg md:text-xl font-bold font-display text-[#0f2a44] mb-3">
                      2023-24
                    </h3>
                    <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200 bg-white shadow-sm">
                      {events2023_24.map((evt, idx) => (
                        <a
                          key={idx}
                          href={evt.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 sm:px-6 hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-sm sm:text-[15px] font-medium text-slate-800 group-hover:text-[#b31317] transition-colors leading-relaxed pr-4">
                            {evt.title}
                          </span>
                          <PdfIcon className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-105 transition-transform shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* 2022-23 */}
                  <div className="mb-8">
                    <h3 className="text-lg md:text-xl font-bold font-display text-[#0f2a44] mb-3">
                      2022-23
                    </h3>
                    <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200 bg-white shadow-sm">
                      {events2022_23.map((evt, idx) => (
                        <a
                          key={idx}
                          href={evt.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 sm:px-6 hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-sm sm:text-[15px] font-medium text-slate-800 group-hover:text-[#b31317] transition-colors leading-relaxed pr-4">
                            {evt.title}
                          </span>
                          <PdfIcon className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-105 transition-transform shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* 2021-22 */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-display text-[#0f2a44] mb-3">
                      2021-22
                    </h3>
                    <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200 bg-white shadow-sm">
                      {events2021_22.map((evt, idx) => (
                        <a
                          key={idx}
                          href={evt.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 sm:px-6 hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-sm sm:text-[15px] font-medium text-slate-800 group-hover:text-[#b31317] transition-colors leading-relaxed pr-4">
                            {evt.title}
                          </span>
                          <PdfIcon className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-105 transition-transform shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* SIDEBAR AREA (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
                <div className="bg-[#990000] px-6 py-4 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-white !text-white" />
                  <h3 className="font-display text-lg font-bold text-white !text-white">
                    Contact
                  </h3>
                </div>

                <div className="p-6 space-y-6">
                  {/* Coordinator Details */}
                  <div className="border-b border-gray-100 pb-5">
                    <h4 className="font-display text-xl font-bold text-[#990000]">
                      Dr. R. Nidhya
                    </h4>
                    <p className="text-sm font-semibold text-[#0f2a44] mt-1">
                      Professor
                    </p>
                    <p className="text-sm text-slate-600 font-medium">
                      Department of Computer Science &amp; Engineering
                    </p>
                  </div>

                  {/* Address */}
                  <div className="space-y-4 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 text-[#0f2a44] shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0f2a44] block text-xs uppercase tracking-wide mb-1">
                          Address :
                        </span>
                        <p className="leading-snug text-slate-600">
                          Madanapalle Institute of Technology &amp; Science<br />
                          Deemed to be University<br />
                          Madanapalle-Kadiri Road<br />
                          Kurabalakota Mandal, Madanapalle-517325<br />
                          Andhra Pradesh, India
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3 border-t border-gray-100 pt-4">
                      <div className="p-2 rounded-lg bg-slate-100 text-[#0f2a44] shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0f2a44] block text-xs uppercase tracking-wide mb-1">
                          Phone :
                        </span>
                        <a
                          href="tel:+918571280255"
                          className="text-slate-700 hover:text-[#990000] transition-colors block"
                        >
                          +91-8571-280255
                        </a>
                        <a
                          href="tel:+918571280706"
                          className="text-slate-700 hover:text-[#990000] transition-colors block"
                        >
                          +91-8571-280706
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3 border-t border-gray-100 pt-4">
                      <div className="p-2 rounded-lg bg-slate-100 text-[#0f2a44] shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0f2a44] block text-xs uppercase tracking-wide mb-1">
                          E Mail :
                        </span>
                        <a
                          href="mailto:drnidhyar@mits.ac.in"
                          className="text-[#990000] hover:underline font-semibold block break-all"
                        >
                          drnidhyar@mits.ac.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* RELATED CHAPTERS & PORTALS LINKS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 space-y-4">
                <h4 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider">
                  Related Chapters &amp; Portals
                </h4>
                <div className="divide-y divide-gray-100 text-sm">
                  {[
                    { label: "The Institution of Engineers (India) [IEI]", to: "/cells/iei" },
                    { label: "Institution of Electronics & Telecommunication Engineers (IETE)", to: "/cells/iete" },
                    { label: "Student Activity Center (SAC)", to: "/cells/sac" },
                    { label: "Internal Quality Assurance Cell (IQAC)", to: "/iqac" },
                    { label: "Entrepreneurship Development Cell (EDC)", to: "/cells/edc" },
                    { label: "Industry Institute Interaction Cell (IIIC)", to: "/cells/iiic" },
                  ].map((p, idx) => (
                    <Link
                      key={idx}
                      to={p.to}
                      className="flex items-center justify-between py-3 text-slate-700 hover:text-[#b31317] transition-all group"
                    >
                      <span className="font-medium group-hover:translate-x-0.5 transition-transform">
                        {p.label}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#b31317] group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* NATIONAL CSI SUMMARY */}
            <ScrollReveal>
              <div className="bg-[#0f2a44] text-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-display font-bold text-base text-[#ffd15c] mb-2">
                  About National CSI
                </h4>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  Computer Society of India (CSI), formed in 1965, has 70 chapters across India, 418 student branches, and over 90,000 members dedicated to IT advancement.
                </p>
                <a
                  href="https://www.csi-india.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#ffd15c] hover:underline font-semibold"
                >
                  <span>Visit CSI National Portal</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

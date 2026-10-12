import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, ExternalLink, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const objectives = [
  "Shift the emphasis from purely theoretical courses to practical, hands-on learning through design thinking principles.",
  "Act as a catalyst for creating out of box thinking by cultivating an innovative mindset among students.",
  "Lay a foundation for entrepreneurial culture in the ecosystem by encouraging creative problem-solving and solution-oriented thinking.",
];

const activities = [
  "Design thinking workshops tailored to bridge the gap between theoretical knowledge and practical application.",
  "Entrepreneurship-focused sessions highlighting how design thinking can be a framework (cornerstone) for startups.",
  "Mentorship programs connecting aspiring entrepreneurs with experienced professionals.",
];

const missions = [
  "To instill Design Thinking principles institute-wide, from freshmen to faculty, fostering a culture of innovation and entrepreneurship.",
  "Organizing tailored workshops, entrepreneurship sessions, and mentorship programs.",
  "To empower individuals to apply design thinking beyond the classroom, enriching their academic journey to preparing them for impactful roles in a rapidly changing world.",
  "To involve public participation in Community based innovations for community benefits. Emphasize the value of bringing people together to develop and generate new ideas in innovation processes.",
];

const documents = [
  { title: "DTS Office Order", href: "https://mits.ac.in/assets/pdf/assoc/DTS-Office Order.pdf" },
  { title: "DTS Policy", href: "https://mits.ac.in/assets/pdf/assoc/DTS Policy Doc.pdf" },
  { title: "DTS Committee", href: "https://mits.ac.in/assets/pdf/assoc/DTS-Committee.pdf" },
  { title: "MITS University Innovation Fellows Weblink", href: "https://mitsuifellows.wixsite.com/mitsuif" },
];

export default function DtsView() {
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
            Cells &amp; Committees • Innovation &amp; Entrepreneurship
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Design Thinking Studio
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto drop-shadow-sm font-medium">
            MITS-DTS — Madanapalle Institute of Technology &amp; Science
          </p>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells &amp; Committees</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold">Design Thinking Studio</li>
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

            {/* ABOUT */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#8b0000] mb-4">
                  Design Thinking Studio
                </h2>
                <p className="text-slate-700 text-sm leading-relaxed text-justify">
                  We propose the creation of MITS-DTS for "impact continuum", a Design Thinking Studio at our esteemed
                  college aiming to foster creativity, innovation, and problem-solving skills among students. In response
                  to the prevailing focus on traditional courses and theoretical learning, we believe that imparting a
                  Design Thinking (DT) mindset through MITS-DTS can impart hands-on experiences, which are practical,
                  innovative and entrepreneurial pursuits.
                </p>
              </section>
            </ScrollReveal>

            {/* OBJECTIVES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h3 className="font-display text-lg font-bold text-[#8b0000] mb-2">Objectives:</h3>
                <p className="text-sm font-semibold text-[#0f2a44] mb-5">MITS-DTS aims to:</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  {objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#8b0000] font-bold shrink-0">›</span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* ACTIVITIES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h3 className="font-display text-lg font-bold text-[#8b0000] mb-2">Activities:</h3>
                <p className="text-sm font-semibold text-[#0f2a44] mb-5">MITS-DTS aims to:</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  {activities.map((act, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#8b0000] font-bold shrink-0">›</span>
                      {act}
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* VISION */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h3 className="font-display text-lg font-bold text-[#8b0000] mb-4">Vision</h3>
                <p className="text-slate-700 text-sm leading-relaxed text-justify">
                  MITS-DTS envisions a dynamic and inclusive learning environment, where every student and faculty member
                  is equipped with a Design Thinking mindset. We aspire to cultivate a community of innovators, who
                  fearlessly embrace challenges, pioneer creative solutions, and contribute positively to the ever-evolving
                  global landscape.
                </p>
              </section>
            </ScrollReveal>

            {/* MISSION */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h3 className="font-display text-lg font-bold text-[#8b0000] mb-5"> Mission</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {missions.map((m, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#8b0000] font-bold shrink-0">›</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* DOCUMENTS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#8b0000] mb-4">Documents &amp; Links</h2>
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

            {/* CONTACT */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#8b0000] px-5 py-3">
                  <h3 className="font-display font-bold text-white text-sm flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Contact
                  </h3>
                </div>
                <div className="p-5 space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#8b0000] shrink-0 mt-0.5" />
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

            {/* UIF CTA */}
            <ScrollReveal>
              <a
                href="https://mitsuifellows.wixsite.com/mitsuif"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 bg-gradient-to-br from-[#0f2a44] to-[#1c4066] text-white rounded-2xl p-5 hover:shadow-lg transition-all group"
              >
                <div>
                  <p className="text-xs text-[#caa74d] font-semibold uppercase tracking-wider mb-1">Official Portal</p>
                  <p className="font-display font-bold text-base">UIF Fellows</p>
                  <p className="text-white/60 text-xs mt-0.5">MITS University Innovation Fellows</p>
                </div>
                <ExternalLink className="w-5 h-5 text-[#caa74d] group-hover:scale-110 transition-transform shrink-0" />
              </a>
            </ScrollReveal>

            {/* Quick links */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#8b0000] px-5 py-3">
                  <h3 className="font-display font-bold text-white text-sm">Quick Downloads</h3>
                </div>
                <ul className="divide-y divide-gray-100 px-4 py-2">
                  {documents.slice(0, 3).map((doc, i) => (
                    <li key={i}>
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-2 py-3 group hover:bg-amber-50/40 -mx-2 px-2 rounded-lg transition-colors"
                      >
                        <span className="text-xs text-[#0f2a44] group-hover:text-[#b31317] transition-colors font-medium flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5 shrink-0 text-[#caa74d]" />
                          {doc.title}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0 text-gray-400 group-hover:text-[#b31317] transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

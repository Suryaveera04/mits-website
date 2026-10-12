import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, FileText, ExternalLink, Phone, MapPin, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const objectives = [
  "Create a conducive environment in MITS for development of IPs.",
  "Provide a single window reference system for all the activities relating to IP generated through various activities carried out inside and outside on behalf of MITS.",
  "Safeguard the inventor's intellectual property and provide incentives to the investors with fair IP management and culture.",
  "Provide legal support, wherever necessary / possible, to defend and protect the intellectual property rights obtained by the MITS against any infringement/ unauthorized use.",
  "Ensure that once the Inventors decide to explore the prospects of commercialization of IP, Inventors must disclose the same to the Institute, while continuing to keep the information confidential while / until patent application(s) is (are) being processed.",
  "Enable MITS to make beneficial implementation of such developed IPs for the benefit of the inventors, the College, and the Nation at large.",
];

const ipTypes = [
  { term: "Patent", def: "is an exclusive right granted for an invention, which is a product or a process that provides a new way of doing something or offers a new technical solution to a problem." },
  { term: "Copyright", def: "is an exclusive right given to the author of the original literary, architectural, dramatic, musical and artistic works; cinematograph films; and sound recordings." },
  { term: "Trade/Service Mark", def: "means a mark capable of being represented graphically and which is capable of distinguishing the goods or services of one person from those of others and may include shape of goods, their packaging and combination of colours." },
  { term: "Industrial Design", def: "means only the features of shape, configuration, pattern, ornament or composition of lines or colours applied to any article whether in two dimensional or three dimensional or in both forms, by any industrial process or means, whether manual, mechanical or chemical, separate or combined, which in the finished article appeal to and are judged solely by the eye." },
  { term: "IC Layout Designs", def: "means a layout of transistors and other circuitry elements and includes lead wires connecting such elements and expressed in any manner in a semiconductor integrated circuit." },
  { term: "New Plant Variety", def: "a plant variety that is novel, distinct and shows uniform and stable characteristics." },
  { term: "Biotechnology Inventions", def: "Include recombinant products such as vectors, nucleotide sequences and micro‐organisms." },
  { term: "Traditional Knowledge", def: "The knowledge developed by the indigenous or local communities for the use of a natural resource with respect to agriculture, food, medicine etc. over a period of time and has been passed from one generation to another traditionally." },
  { term: "Geographical Indications", def: "means an indication which identify such goods as agricultural goods, natural goods as originating or manufactured in the territory of a country or a region or locality in that territory where a given quality, reputation or other characteristic of such goods is essentially attributable to its geographical origin." },
];

const sidebarDocs = [
  { title: "MITS Intellectual Property Rights Policy", href: "https://mits.ac.in/assets/pdf/admin/MITS-IPR-Policy.pdf", download: true },
  { title: "MITS Patent Details", href: "https://mits.ac.in/assets/pdf/patent/Patent_2024.xlsx", download: true },
  { title: "IPR Events", href: "https://mits.ac.in/ipr-events", download: false },
];

const usefulLinks = [
  { label: "Cell for IPR Promotion and Management", href: "https://cipam.gov.in/" },
  { label: "Indian Patent Office", href: "https://ipindia.gov.in/" },
  { label: "Google Patent", href: "https://patents.google.com/" },
  { label: "Lens Database", href: "https://www.lens.org/" },
];

export default function IprView() {
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
            Intellectual Property Rights Cell
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto drop-shadow-sm font-medium">
            IPRC — Madanapalle Institute of Technology &amp; Science
          </p>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells &amp; Committees</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold">IPR Cell</li>
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

            {/* NATIONAL IPR POLICY + COMMITTEE LINK */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-4">
                <h2 className="font-display text-xl font-bold text-[#8b0000] flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  About IPRC
                </h2>
                <h3 className="font-semibold text-[#8b0000]">National IPR Policy</h3>
                <p className="text-slate-700 text-sm leading-relaxed text-justify">
                  The National IPR policy was released by Department of Industrial Policy and Promotion (DIPP), Ministry of
                  Commerce and Industry, Government of India on May 12, 2016. This policy brings about a vibrant intellectual
                  policy ecosystem to leverage technology and innovation for growth and competitiveness.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed text-justify">
                  Intellectual property plays an important role in providing a competitive edge with respect to tangible
                  assists like inventions, designs, software, brand and innovative ideas. It is necessary to protect these
                  creations in order to enable organizations to earn recognition or financial benefits. The rationale for
                  this IPR Policy lies in the need to create awareness about the importance of IPRs as a marketable
                  financial asset and economic tool among the researchers, faculty and students of this College.
                </p>

                {/* Committee link */}
                <a
                  href="https://mits.ac.in/assets/pdf/admin/IPR Committee-17-12-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#8b0000] hover:text-[#b31317] underline underline-offset-2 transition-colors"
                >
                  <FileText className="w-4 h-4 shrink-0" />
                  MITS IPR Committee 2025-26
                </a>
              </section>
            </ScrollReveal>

            {/* OBJECTIVES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#8b0000] mb-2">Objectives</h2>
                <p className="text-slate-700 text-sm mb-4">The objectives of this Intellectual Property Right (IPR) Policy are to:</p>
                <ul className="space-y-2.5">
                  {objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                      <span className="text-[#8b0000] font-bold mt-0.5 shrink-0">•</span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* VISION & MISSION */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-6">
                <div>
                  <h2 className="font-display text-xl font-bold text-[#8b0000] mb-2">Vision</h2>
                  <p className="text-slate-700 text-sm leading-relaxed text-justify">
                    An India where creativity and innovation are stimulated by Intellectual Property for the benefit of all;
                    an India where intellectual property promotes advancement in Science and Technology, arts and culture,
                    traditional knowledge and biodiversity resources; an India where knowledge is the main driver of
                    development, and knowledge owned is transformed into knowledge shared.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-[#8b0000] mb-2">Mission</h2>
                  <p className="text-slate-700 text-sm leading-relaxed text-justify">
                    Stimulate a dynamic, vibrant and balanced intellectual property rights system in India to foster
                    creativity and innovation and thereby, promote entrepreneurship and enhance socio-economic and cultural
                    development and Focus on enhancing access to healthcare, food security and environmental protection,
                    among other sectors of vital social, economic and technological importance.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* TYPES OF IP */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#8b0000] mb-4">Types of IP</h2>
                <p className="text-slate-700 text-sm mb-4">The intellectual properties can be broadly listed as follows:</p>
                <ul className="space-y-3">
                  {ipTypes.map((ip, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                      <span className="text-[#8b0000] font-bold mt-0.5 shrink-0">•</span>
                      <span><span className="font-semibold text-[#0f2a44]">{ip.term}:</span> {ip.def}</span>
                    </li>
                  ))}
                </ul>

                {/* Patent image */}
                <div className="mt-6">
                  <img
                    src="https://mits.ac.in/assets/images/patent.jpg"
                    alt="Patent"
                    className="rounded-xl border border-gray-100 w-[300px] h-[250px] object-cover"
                  />
                </div>

                {/* Google form */}
                <div className="mt-5">
                  <a
                    href="https://forms.gle/HWQToesWNo1oP1bU8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#8b0000] hover:text-[#b31317] underline underline-offset-2 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 shrink-0" />
                    Google form to submit the Ideas: https://forms.gle/HWQToesWNo1oP1bU8
                  </a>
                </div>
              </section>
            </ScrollReveal>

            {/* USEFUL WEBSITES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#8b0000] mb-4">Useful Websites</h2>
                <ul className="space-y-2.5">
                  {usefulLinks.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors group"
                      >
                        <ExternalLink className="w-4 h-4 shrink-0 text-[#caa74d] group-hover:text-[#b31317] transition-colors" />
                        {link.label}: <span className="text-[#8b0000] underline underline-offset-2">{link.href}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">

            {/* MITS IPR Policy docs */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#8b0000] px-5 py-3">
                  <h3 className="font-display font-bold text-white text-sm">MITS IPR Policy</h3>
                </div>
                <ul className="divide-y divide-gray-100 px-4 py-2">
                  {sidebarDocs.map((doc, i) => (
                    <li key={i}>
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 py-3 group hover:bg-amber-50/40 -mx-2 px-2 rounded-lg transition-colors"
                      >
                        <span className="text-sm text-[#0f2a44] group-hover:text-[#b31317] transition-colors font-medium leading-snug flex items-center gap-2">
                          <FileText className="w-4 h-4 shrink-0 text-[#caa74d]" />
                          {doc.title}
                        </span>
                        {doc.download
                          ? <Download className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-[#b31317] transition-colors" />
                          : <ExternalLink className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-[#b31317] transition-colors" />
                        }
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* CONTACT */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#8b0000] px-5 py-3">
                  <h3 className="font-display font-bold text-white text-sm flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Contact
                  </h3>
                </div>
                <div className="p-5 space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="text-xs font-semibold text-[#8b0000] uppercase tracking-wide mb-1">Coordinator</p>
                    <p className="font-bold text-[#0f2a44]">Dr. P. Sivaiah</p>
                    <p className="text-xs text-slate-600">Associate Professor</p>
                    <p className="text-xs text-slate-600">Department of ME</p>
                    <a
                      href="mailto:dean_research@mits.ac.in"
                      className="text-xs text-[#8b0000] hover:underline"
                    >
                      dean_research@mits.ac.in
                    </a>
                  </div>
                  <hr className="border-slate-100" />
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

            {/* CTA */}
            <ScrollReveal>
              <a
                href="https://ipindia.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 bg-gradient-to-br from-[#0f2a44] to-[#1c4066] text-white rounded-2xl p-5 hover:shadow-lg transition-all group"
              >
                <div>
                  <p className="text-xs text-[#caa74d] font-semibold uppercase tracking-wider mb-1">Official Portal</p>
                  <p className="font-display font-bold text-base">Indian Patent Office</p>
                  <p className="text-white/60 text-xs mt-0.5">ipindia.gov.in</p>
                </div>
                <ExternalLink className="w-5 h-5 text-[#caa74d] group-hover:scale-110 transition-transform shrink-0" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

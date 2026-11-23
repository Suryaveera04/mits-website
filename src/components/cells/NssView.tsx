import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  FileDown,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
  Sparkles,
  Search,
  ExternalLink,
  Users,
  Award,
  HeartHandshake,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { nssEvents } from "@/data/nssEvents";
import nssBanner from "@/assets/nss-banner.jpg";

const BASE = "https://mits.edu/";

// Quick Action Pill Links displayed directly under the banner
const quickPills = [
  { label: "SoP", href: "https://mits.ac.in/public/uploads/paars/SOP_NSS.pdf" },
  { label: "NSS Year Plan 2025", href: "https://mits.ac.in/public/uploads/paars/NSS%20Year%20Plan%202025.pdf" },
  { label: "NSS Year Plan 2024", href: "https://mits.ac.in/public/uploads/paars/NSS%20Year%20Plan%202024.pdf" },
  { label: "NSS Year Plan 2023", href: "https://mits.ac.in/public/uploads/paars/NSS%20Year%20Plan%202023.pdf" },
  { label: "NSS Year Plan 2022", href: "https://mits.ac.in/public/uploads/paars/NSS%20Year%20Plan%202022.pdf" },
  { label: "NSS Year Plan 2021", href: "https://mits.ac.in/public/uploads/paars/NSS%202021%20Year%20Plan.pdf" },
  { label: "NSS Year Plan 2020", href: "https://mits.ac.in/public/uploads/paars/NSS%202020%20Year%20Plan.pdf" },
  { label: "NSS Faculty & Student Coordinator Committee", href: "https://mits.ac.in/public/uploads/paars/NSS%20Faculty%20and%20Student%20Committee.pdf" },
  { label: "Student Volunteers", href: "https://mits.ac.in/public/uploads/paars/NSS%20Student%20Volunteers%20List%202022-25.pdf" },
  { label: "Gallery", href: "https://mits.ac.in/public/uploads/paars/NSS%20Photo%20Gallery.pdf" },
  { label: "NSS MITS List of Events 2021-2022", href: "https://mits.ac.in/public/uploads/paars/NSS%20Events%20List%202021-22.pdf" },
  { label: "NSS MITS List of Events 2022-2023", href: "https://mits.ac.in/public/uploads/paars/NSS%20Events%20List%202022-23.pdf" },
  { label: "NSS MITS List of Events 2023-2024", href: "https://mits.ac.in/public/uploads/paars/NSS%20Events%20List%202023-24.pdf" },
  { label: "NSS MITS List of Events 2024-2025", href: "https://mits.ac.in/public/uploads/paars/NSS%20Events%20List%202024-25.pdf" },
  { label: "NSS MITS List of Events 2025-2026", href: "https://mits.ac.in/assets/pdf/assoc/List%20events%20during%20April%202026.pdf" },
];

// Official Orders & Regulations
const officialDocuments = [
  {
    title: "NSS Committee Office Order 2025-26",
    href: "https://mits.ac.in/assets/pdf/assoc/NSS-19-11-2025.pdf",
  },
  {
    title: "NSS - Nasha Mukti Bharath Abhiyaan Committee",
    href: "https://mits.ac.in/assets/pdf/assoc/Nasha%20Mukti%20Bharath%20Abhiyaan%20Committee.pdf",
  },
  {
    title: "NSS - Unnat Bharat Abhiyan - Villages adopted",
    href: "https://mits.ac.in/assets/pdf/assoc/NSS%20-%20Unnat%20Bharat%20Abhiyan%20-%20Villages%20adopted.pdf",
  },
  {
    title: "NSS PO Appointment Office Order",
    href: "https://mits.ac.in/public/uploads/paars/NSS%20PO%20Appointment%20order.pdf",
  },
];

// Service hour allocation items
const hourAllocations = [
  {
    title: "(i) Orientation of NSS Volunteers",
    hours: "20 Hours",
    description:
      "To get the NSS volunteers acquainted with the basics of NSS Programmes, 20 hours are allocated for their orientation through lectures, discussions, field visits, and audio-visuals etc.",
    color: "from-blue-500/10 to-indigo-500/10 border-blue-200 text-blue-900",
    badge: "bg-blue-600 text-white",
  },
  {
    title: "(ii) Campus Work",
    hours: "30 Hours",
    description:
      "The NSS volunteers may be involved in the projects undertaken for the benefit of the institution and students concerned. Such projects cover development of playgrounds, laying of gardens, tree plantation in the premises, awareness programmes on drug abuse, AIDS, population education and other projects. Not exceeding 30 hours in a year.",
    color: "from-amber-500/10 to-orange-500/10 border-amber-200 text-amber-900",
    badge: "bg-amber-600 text-white",
  },
  {
    title: "(iii) Community Service in Adopted Villages",
    hours: "70 Hours",
    description:
      "The remaining 70 hours will be utilized for community service on the projects in adopted villages/urban slums independently or in collaboration with others in this field, addressing rural empowerment, health camps, literacy, and environmental sustainability.",
    color: "from-emerald-500/10 to-teal-500/10 border-emerald-200 text-emerald-900",
    badge: "bg-emerald-600 text-white",
  },
];

export default function NssView() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(20);

  // Filter events based on search query and optional year filter
  const filteredEvents = useMemo(() => {
    return nssEvents.filter((ev) => {
      const matchesSearch = ev.title.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;
      if (selectedYear === "all") return true;
      return ev.title.includes(selectedYear);
    });
  }, [searchQuery, selectedYear]);

  return (
    <div className="min-h-screen bg-[#fafaf7]">
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
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 w-full max-w-[96%] mx-auto px-4 text-center">
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 drop-shadow-sm">
            Community Service • Youth Empowerment • Social Responsibility
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            National Service Scheme (NSS)
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-3xl mx-auto drop-shadow-sm font-medium">
            Madanapalle Institute of Technology &amp; Science (Deemed to be University) — Nurturing empathetic leadership and social service since 2003.
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
            <li className="text-[#ffd15c] font-semibold">National Service Scheme (NSS)</li>
          </ol>
        </nav>
      </section>

      {/* FULL WIDTH CONTAINER */}
      <main className="w-full max-w-[96%] mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-12">
        <button
          onClick={() => navigate("/cells")}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells &amp; Committees
        </button>

        {/* TOP BANNER & QUICK LINKS CONTAINER */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-4 sm:p-6 mb-8">
            {/* OFFICIAL NSS BANNER IMAGE */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 mb-6 bg-slate-50">
              <img
                src={nssBanner}
                alt="MITS National Service Scheme (NSS) Cell"
                className="w-full h-auto object-cover max-h-[260px] md:max-h-[320px]"
                onError={(e) => {
                  e.currentTarget.src = "https://mits.ac.in/public/uploads/paarc/nss.JPG";
                }}
              />
            </div>

            {/* QUICK PDF PILLS - RESPONSIVE FLEX LAYOUT */}
            <div className="flex flex-wrap gap-2.5 items-center justify-start">
              {quickPills.map((pill, idx) => (
                <a
                  key={idx}
                  href={pill.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white hover:bg-[#b31317] hover:border-[#b31317] hover:text-white text-slate-800 text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow"
                >
                  <FileDown className="w-3.5 h-3.5 shrink-0 opacity-70 group-hover:opacity-100" />
                  <span>{pill.label}</span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* MAIN COLUMN (8 cols on xl, 7 cols on lg) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            {/* ABOUT NSS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <BookOpen className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                      About NSS
                    </h2>
                    <p className="text-xs text-[#0f2a44]/60">
                      National Service Scheme • MITS Deemed to be University
                    </p>
                  </div>
                </div>

                <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4 !text-justify text-justify">
                  <p>
                    National Service Scheme Unit has been introduced at MITS - Deemed to be University since 2003 as a part of the academic programs and since then NSS has been functioning as a regular feature in the realm of our Academics. The overall objective of the scheme is educational and service to the community is the activity through which the objective is sought to be achieved. It is a student-centred program in which projects are implemented by the NSS volunteers in the community in close collaboration with the community and thereby it provides vast scope for the student's interaction with the people.
                  </p>
                  <p>
                    N.S.S has enriched the students’ souls and minds. The overall objective of this scheme is Education and Service to the community and by the community. It’s students’ programme where we cater to the need of the community, as and when required, It will also help the students to communicate with the society. Student develop many skills and learn how to behave and interact with different kinds of people. The students go to the rural areas and try to develop a Technocratic Environment and help the underprivileged people to develop themselves.
                  </p>
                  <p>
                    NSS volunteers undertake various activities in adopted villages and slums for community service, Duration of these services is <strong>120 hours</strong>. The NSS Units organize the regular activities as detailed below :
                  </p>
                </div>

                {/* 120 HOURS ALLOCATION CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {hourAllocations.map((alloc, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border bg-gradient-to-br ${alloc.color} flex flex-col justify-between`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${alloc.badge}`}>
                            {alloc.hours}
                          </span>
                        </div>
                        <h4 className="font-bold text-sm text-[#0f2a44] mb-2">
                          {alloc.title}
                        </h4>
                        <p className="text-xs text-slate-700 leading-relaxed !text-left text-left">
                          {alloc.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* RURAL PROJECT CARD */}
                <div className="mt-6 bg-[#fff8e6] border border-[#ffd15c] rounded-xl p-5 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <HeartHandshake className="w-5 h-5 text-[#b31317]" />
                    <h3 className="font-display font-bold text-base text-[#0f2a44]">
                      Rural Project
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed !text-justify text-justify">
                    The rural projects generally include the working of NSS volunteers in adopted villages for eradication of illiteracy, watershed management and wasteland development, agricultural operations, health, nutrition, hygiene, sanitation, mother and child care, family life education, gender justice, development of rural cooperatives, savings drives, construction of rural roads, campaign against social evils etc.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* OFFICIAL DOCUMENTS & ORDERS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                      <FileDown className="w-5 h-5 text-[#b31317]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44]">
                        Official Orders &amp; Documents
                      </h3>
                      <p className="text-xs text-[#0f2a44]/60">
                        NSS committee orders, appointments, and adopted village directives
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-[#0f2a44] rounded-full">
                    {officialDocuments.length} Orders
                  </span>
                </div>

                <div className="divide-y divide-gray-100">
                  {officialDocuments.map((doc, idx) => (
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

            {/* EVENTS ORGANIZED */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                      <Calendar className="w-5 h-5 text-[#b31317]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44]">
                        Events Organized
                      </h3>
                      <p className="text-xs text-[#0f2a44]/60">
                        Complete chronicle of NSS camps, social drives, and community events
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-[#0f2a44] rounded-full self-start sm:self-auto">
                    {filteredEvents.length} Events Listed
                  </span>
                </div>

                {/* SEARCH AND YEAR FILTER */}
                <div className="flex flex-col sm:flex-row gap-3 mb-5">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search events (e.g., Blood Donation, Yoga Day, Camp)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#b31317]/20 focus:border-[#b31317]"
                    />
                  </div>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#b31317]/20 focus:border-[#b31317]"
                  >
                    <option value="all">All Years</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                  </select>
                </div>

                {/* EVENTS LIST IN SINGLE-LINE TABLE STYLE */}
                <div className="divide-y divide-gray-100">
                  {filteredEvents.slice(0, visibleCount).map((event, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 px-3 sm:px-4 rounded-lg hover:bg-slate-50 transition-colors group gap-2"
                    >
                      <span className="text-sm text-[#0f2a44] font-medium group-hover:text-[#b31317] transition-colors pr-2">
                        {event.title}
                      </span>
                      {event.href ? (
                        <a
                          href={event.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 group-hover:bg-[#b31317] group-hover:text-white transition-colors"
                        >
                          <FileDown className="w-3.5 h-3.5" />
                          <span>Report</span>
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400 italic shrink-0">Report pending</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* LOAD MORE BUTTON */}
                {visibleCount < filteredEvents.length && (
                  <div className="mt-6 text-center pt-2">
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 25)}
                      className="px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0f2a44] text-xs sm:text-sm font-semibold transition-colors"
                    >
                      Load More Events ({filteredEvents.length - visibleCount} remaining)
                    </button>
                  </div>
                )}
              </section>
            </ScrollReveal>
          </div>

          {/* SIDEBAR COLUMN (4 cols on xl, 5 cols on lg) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            {/* CONTACT CARD WITH RED HEADER AND CRISP WHITE TEXT */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden text-left">
                <div className="bg-[#b31317] text-white px-6 py-4">
                  <h2 className="font-display text-lg font-bold !text-white text-white">Contact</h2>
                </div>
                <div className="p-6 space-y-5">
                  <div className="text-left">
                    <h3 className="font-semibold text-lg text-[#0f2a44] !text-left">Mr. Pujari Rajesh</h3>
                    <p className="text-sm text-[#b31317] font-semibold !text-left">
                      Program Officer
                    </p>
                  </div>

                  <hr className="border-gray-100" />

                  <div className="space-y-4 text-sm text-[#0f2a44]/80 text-left">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#b31317] shrink-0 mt-0.5" />
                      <div className="!text-left text-left space-y-0.5 text-xs sm:text-sm">
                        <strong className="block text-[#0f2a44]">Address :</strong>
                        <p>Madanapalle Institute of Technology &amp; Science</p>
                        <p>Deemed to be University</p>
                        <p>Madanapalle-Kadiri Road</p>
                        <p>Kurabalakota Mandal, Madanapalle-517325</p>
                        <p>Andhra Pradesh, India</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#b31317] shrink-0" />
                      <div>
                        <strong className="block text-[#0f2a44] text-xs">Phone :</strong>
                        <a href="tel:+919100069516" className="text-xs sm:text-sm hover:text-[#b31317] transition-colors">
                          +91-9100069516; 8571-280255; 280706
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#b31317] shrink-0" />
                      <div className="min-w-0">
                        <strong className="block text-[#0f2a44] text-xs">E Mail :</strong>
                        <a
                          href="mailto:nsscell@mits.ac.in"
                          className="text-xs sm:text-sm text-[#b31317] font-medium hover:underline whitespace-nowrap block"
                        >
                          nsscell@mits.ac.in
                        </a>
                      </div>
                    </div>
                  </div>
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

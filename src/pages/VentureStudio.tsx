import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Rocket, Sparkles, Award, Users, CheckCircle2,
  ExternalLink, Calendar, MapPin, Mail, Phone,
  ArrowRight, Target, Lightbulb, Compass, Globe,
  Briefcase, Laptop, GraduationCap, ChevronRight,
  TrendingUp, Building2, Shield, HeartHandshake,
  DollarSign, Network, FileCheck, Layers
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const BASE = import.meta.env.BASE_URL;

type TabKey = "ug-tab20" | "ug-tab53" | "ug-tab24" | "ug-tab54";

interface TabItem {
  id: TabKey;
  alias: string;
  label: string;
  icon: any;
}

const tabs: TabItem[] = [
  { id: "ug-tab20", alias: "about", label: "About Venture Studio", icon: Rocket },
  { id: "ug-tab53", alias: "ambassador", label: "About Faculty Ambassador", icon: Award },
  { id: "ug-tab24", alias: "registration", label: "Registration Details", icon: CheckCircle2 },
  { id: "ug-tab54", alias: "contact", label: "Contact", icon: Mail },
];

const services = [
  {
    num: "01",
    title: "Next New Venture Studio Setup",
    desc: "Transform your institution into an ecosystem of innovation, rather than merely a place of instruction.",
    icon: Rocket,
  },
  {
    num: "02",
    title: "Exponential Thinking Bootcamps",
    desc: "Empower faculty and students to think beyond conventional boundaries and drive transformative change.",
    icon: Lightbulb,
  },
  {
    num: "03",
    title: "Idea-to-Startup Labs",
    desc: "Support community based projects into scalable ventures with real-world impact.",
    icon: Target,
  },
  {
    num: "04",
    title: "EduVerse: Immersive Academic Metaverse",
    desc: "Enable immersive 3D virtual laboratories and global collaborative learning experiences across disciplines, from engineering to medicine.",
    icon: Globe,
  },
  {
    num: "05",
    title: "Smart Co-Educators like RIA",
    desc: "Integrate robotics and Artificial Intelligence into classrooms to create interactive, engaging, and learner-centric educational experiences.",
    icon: Laptop,
  },
  {
    num: "06",
    title: "Adaptive Personal tech enabled learning Assistants",
    desc: "Scale academic mentorship through technology-enabled solutions that guide, support, and personalize each student's learning journey.",
    icon: Compass,
  },
  {
    num: "07",
    title: "Global Challenge Solution",
    desc: "Host cross-functional innovation challenges that transform ideas into prototypes and startups.",
    icon: Sparkles,
  },
  {
    num: "08",
    title: "Faculty Innovation Fellowships",
    desc: "Empower faculty with design-led, AI-integrated pedagogical approaches to mentor and inspire the next generation of change makers.",
    icon: Award,
  },
  {
    num: "09",
    title: "Community based learning",
    desc: "Build industry and mentor connections, engage in peer-to-peer learning, and showcase your skills through industry gig projects.",
    icon: Users,
  },
  {
    num: "10",
    title: "Better placement",
    desc: "Unlock internship opportunities, evaluate job readiness with cutting-edge tools, and secure placements in top industries.",
    icon: TrendingUp,
  },
];

const benefits = [
  {
    title: "Future-Ready Education",
    desc: "Empower faculty to go beyond conventional curricula by integrating exponential thinking, emerging technologies, and innovation-driven pedagogical approaches.",
  },
  {
    title: "Research Commercialization",
    desc: "Support the transformation of research outcomes into intellectual property, startups, industry collaborations, and externally funded innovation initiatives.",
  },
  {
    title: "Student Leadership and Entrepreneurial Development",
    desc: "Cultivate purpose-driven, entrepreneurial leaders equipped to address complex global challenges.",
  },
  {
    title: "Recognition and Visibility",
    desc: "Strengthen the institution’s reputation by showcasing innovation, research excellence, and student achievements on national and international platforms.",
  },
  {
    title: "Integrated Learning and Career Ecosystem",
    desc: "Leverage a unified ecosystem that supports learning management, accreditation preparedness, industry engagement, career readiness, and lifelong learning pathways equipped to tackle global challenges.",
  },
];

const consultationAreas = [
  "Institutional Innovation Strategy and Studio Setup",
  "Venture Studio Governance and Operating Models",
  "Faculty Capacity Building in Innovation and Entrepreneurship",
  "Accreditation Readiness through Research and Startups",
  "Integrating Immersive Learning Technologies (like Metaverse Labs)",
  "Career and Placement Innovation through AI-powered profiling and guidance",
];

const partners = [
  {
    name: "INUNITY",
    role: "Provides leadership development programs and a comprehensive digital ecosystem designed to support the holistic growth and personal development.",
  },
  {
    name: "COMMUNIOUS.AI",
    role: "Facilitates industry and mentor engagement through personalized learning pathways, training support, and industry-oriented hackathons that enhance experiential learning.",
  },
  {
    name: "MANTRIKA.AI",
    role: "Offers internship opportunities, job-readiness assessments, and placement support to build successful careers with leading organizations.",
  },
  {
    name: "TEXNERE",
    role: "Provides industry consulting opportunities for faculty, GIG-based projects and real-world challenges for students, and professional development programs aimed at career advancement.",
  },
  {
    name: "ISF",
    role: "Connects aspiring student entrepreneurs with global mentors, investors, and startup networks, fostering innovation and venture creation.",
  },
  {
    name: "XARPIE",
    role: "Enables the establishment of advanced industry-aligned laboratories, facilitates global enterprise exposure, drives impact-driven challenges, and provides access to international faculty, experts, and summits focused on exponential technologies.",
  },
];

const ambassadorGains = [
  {
    title: "Monthly Honorarium",
    desc: "Receive a monetary benefit of INR 10,000 per Month in recognition of your commitment, leadership, and contributions to the growth of the Next New Venture Studio.",
    highlight: "INR 10,000 per Month",
    icon: DollarSign,
  },
  {
    title: "Leadership Recognition",
    desc: "Be acknowledged as a key institutional leader driving innovation and transformational initiatives.",
    icon: Award,
  },
  {
    title: "Exposure & Strategic Networking",
    desc: "Engage with leading entrepreneurs, investors, industry experts, academicians, policymakers, and innovation ecosystem leaders through exclusive networking opportunities.",
    icon: Network,
  },
  {
    title: "Global Learning Opportunities",
    desc: "Gain access to curated masterclasses, fellowships and international exposure initiatives designed to enhance your professional growth.",
    icon: Globe,
  },
  {
    title: "Institutional Recognition & Influence",
    desc: "Receive formal institutional recognition through awards, acknowledgments, and opportunities to contribute to strategic planning and leadership discussions.",
    icon: Shield,
  },
  {
    title: "Professional Growth & Thought Leadership",
    desc: "Strengthen your profile as an innovation champion through opportunities to lead initiatives, publish insights, represent MITS at external forums, and contribute to institutional transformation.",
    icon: TrendingUp,
  },
  {
    title: "Legacy Creation",
    desc: "Play a defining role in shaping the next decade of MITS’s growth, impact, and reputation, while helping build a lasting culture of innovation, entrepreneurship, and societal contribution.",
    icon: Rocket,
  },
];

export default function VentureStudio() {
  const location = useLocation();
  const [activeTabId, setActiveTabId] = useState<TabKey>("ug-tab20");

  useEffect(() => {
    const rawHash = location.hash.replace("#", "");
    if (!rawHash) return;

    // Check by tab ID or alias
    const match = tabs.find((t) => t.id === rawHash || t.alias === rawHash);
    if (match) {
      setActiveTabId(match.id);
    }
  }, [location.hash]);

  const handleSelectTab = (tabId: TabKey) => {
    setActiveTabId(tabId);
    window.history.replaceState(null, "", `#${tabId}`);
    window.scrollTo({ top: 340, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800">
      <SEO
        title="Venture Studio – MITS Deemed to be University"
        description="Venture Studio at MITS: Where Innovation Leads, the Future Follows. Empowering educators to cultivate innovation-driven ecosystems, student startups, and faculty ambassador leadership."
        canonical="/Venture-Studio"
      />
      <Header />

      {/* HERO SECTION - Aligned with standard MITS subpage design */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}images/inner-banner.jpg"), url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/45 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffd15c]" />
            <span>Innovation &amp; Entrepreneurship Ecosystem</span>
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            Venture Studio
          </h1>
          <p className="text-white/95 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Where Innovation Leads, the Future Follows
          </p>
        </div>

        {/* BOTTOM-LEFT BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="absolute bottom-4 left-6 md:left-12 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li>
              <Link to="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-medium">Venture Studio</li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTAINER */}
      <main className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Mobile Tab Selector */}
        <div className="lg:hidden mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <label htmlFor="venture-tab-select" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Select Section / Tab
          </label>
          <select
            id="venture-tab-select"
            value={activeTabId}
            onChange={(e) => handleSelectTab(e.target.value as TabKey)}
            className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm font-semibold text-[#8B1D1D] focus:outline-hidden focus:ring-2 focus:ring-[#8B1D1D]"
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>

        {/* 2-COLUMN LAYOUT: Sidebar (3 cols) + Content (9 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDEBAR NAVIGATION */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden">
              <div className="p-4 bg-slate-50/90 border-b border-slate-200">
                <h2 className="font-serif text-base font-bold text-[#8B1D1D] tracking-wide uppercase">
                  Venture Studio
                </h2>
              </div>
              <nav className="divide-y divide-slate-100">
                {tabs.map((tab) => {
                  const isActive = activeTabId === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleSelectTab(tab.id)}
                      className={`w-full text-left px-4 py-3.5 flex items-center justify-between text-sm transition-colors cursor-pointer group ${
                        isActive
                          ? "bg-red-50/70 font-semibold text-[#8B1D1D] border-l-4 border-[#8B1D1D]"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#8B1D1D]"
                      }`}
                    >
                      <span className="pr-2">{tab.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive
                            ? "text-[#8B1D1D] translate-x-1"
                            : "text-slate-400 group-hover:text-[#8B1D1D] group-hover:translate-x-0.5"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* RELATED INNOVATION HUBS CARD */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
              <h3 className="font-serif text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-3">
                Related Innovation Hubs
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link
                    to="/cells/edc"
                    className="flex items-center justify-between text-slate-600 hover:text-[#8B1D1D] transition-colors py-1 group"
                  >
                    <span>Entrepreneurship Dev Cell (EDC)</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cells/startup"
                    className="flex items-center justify-between text-slate-600 hover:text-[#8B1D1D] transition-colors py-1 group"
                  >
                    <span>Startup &amp; Incubation Cell (NISP)</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cells/dts"
                    className="flex items-center justify-between text-slate-600 hover:text-[#8B1D1D] transition-colors py-1 group"
                  >
                    <span>Design Thinking Studio (DTS)</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cells/ipfc"
                    className="flex items-center justify-between text-slate-600 hover:text-[#8B1D1D] transition-colors py-1 group"
                  >
                    <span>IP Facilitation Centre (IPFC)</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cells"
                    className="flex items-center justify-between text-slate-600 hover:text-[#8B1D1D] transition-colors py-1 group"
                  >
                    <span>All Cells &amp; Committees</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* RIGHT MAIN CONTENT AREA */}
          <div className="lg:col-span-9 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 md:p-10 shadow-xs">
            {/* TAB 1: ABOUT NEXT-NEW-VENTURE-STUDIO */}
            {activeTabId === "ug-tab20" && (
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#8B1D1D] tracking-tight">
                    Venture Studio
                  </h2>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed mt-4 font-normal">
                    Empowering educators to cultivate innovation-driven ecosystems where students move beyond learning to become leaders and change-makers.
                  </p>
                </div>

                {/* Section 1: Services & Solutions */}
                <div className="pt-4 space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#8B1D1D]">
                    Our Services and Solutions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {services.map((item) => (
                      <div
                        key={item.num}
                        className="p-5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-[#8B1D1D]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-black text-[#8B1D1D] tracking-wider bg-red-100/60 px-2.5 py-0.5 rounded-md">
                              {item.num}
                            </span>
                            <div className="w-8 h-8 rounded-lg bg-[#8B1D1D]/5 text-[#8B1D1D] flex items-center justify-center">
                              <item.icon className="w-4 h-4" />
                            </div>
                          </div>
                          <h4 className="font-serif font-bold text-base text-slate-900 mb-1.5">
                            {item.title}
                          </h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 2: Key Benefits */}
                <div className="pt-6 space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#8B1D1D]">
                    Key Benefits for Faculties and Institutions
                  </h3>
                  <ul className="space-y-3 pt-2">
                    {benefits.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl border border-slate-200/70 bg-white hover:bg-red-50/20 transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#8B1D1D] shrink-0 mt-0.5" />
                        <div className="text-sm sm:text-base leading-relaxed">
                          <strong className="text-slate-900 font-bold">{b.title} : </strong>
                          <span className="text-slate-700">{b.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 3: Our Areas of Consultation */}
                <div className="pt-6 space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#8B1D1D]">
                    Our Areas of Consultation
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {consultationAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-lg border border-slate-200 bg-slate-50/60"
                      >
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#8B1D1D] text-white text-[10px] font-bold shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-slate-800 text-sm font-medium leading-snug">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 4: Partners & Ecosystem Collaborators */}
                <div className="pt-6 space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#8B1D1D]">
                    Our Partners &amp; Ecosystem Collaborators
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                    {partners.map((partner, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl border border-slate-200 bg-white hover:border-[#caa74d] hover:shadow-xs transition-all flex flex-col justify-between"
                      >
                        <div>
                          <p className="font-serif text-base font-bold text-[#8B1D1D] tracking-wide mb-2">
                            {partner.name}
                          </p>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            {partner.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 5: Vision */}
                <div className="pt-6">
                  <div className="rounded-2xl border border-[#8B1D1D]/20 bg-gradient-to-br from-red-50/40 via-white to-amber-50/30 p-6 sm:p-8">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#8B1D1D] mb-3">
                      Our Vision
                    </h3>
                    <p className="font-serif font-bold text-lg text-slate-900 mb-3">
                      From Classrooms to Venture Studios.
                    </p>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                      We are building a future where every institution becomes a hub for innovation, entrepreneurship, and societal transformation—Going beyond delivering knowledge to create impact at scale.
                    </p>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      At Next New Venture, we don’t just provide tools. We collaborate with educators and institutions to build the systems, mindsets, and ecosystems that make your institution a true leader in the future of education.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: ABOUT FACULTY AMBASSADOR */}
            {activeTabId === "ug-tab53" && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#8B1D1D] tracking-tight mb-4">
                    About Faculty Ambassador
                  </h2>

                  {/* Metadata Info Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="text-base">📍</span>
                      <span><strong>Location:</strong> Madanapalle Institute of Technology &amp; Science (MITS), Annamayya District, Andhra Pradesh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base">📅</span>
                      <span><strong>Type:</strong> Faculty Leadership Role (Voluntary / With Institutional Recognition)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base">🎯</span>
                      <span><strong>Duration:</strong> 1-year term (Renewable)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base">🤝</span>
                      <span><strong>Reports to:</strong> Studio Leadership Team &amp; MITS Leadership Council</span>
                    </div>
                  </div>
                </div>

                {/* Section: Next New Venture Studio */}
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#8B1D1D]">
                    Next New Venture Studio
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                    MITS is proud to launch the Next New Venture Studio, a bold initiative to transform our institution as a hub of exponential thinking, innovation, and venture creation. The Studio will serve as a catalyst for entrepreneurship, intrapreneurship, and solopreneurship across disciplines, empowering both students and faculty to ideate, innovate, and scale impactful solutions. To drive this transformation, we invite visionary, passionate, and committed faculty members to join us as Faculty Ambassadors of the Studio to lead from the front, inspire change, and amplify MITS’s voice to the world.
                  </p>
                </div>

                {/* Section: Role Summary */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-serif text-xl font-bold text-[#8B1D1D]">
                    Role Summary
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                    As a Faculty Ambassador, you will play a integral role in shaping the vision and growth of the Next New Venture Studio. You will serve as a vital link between the Studio and the broader academic, industry, and societal ecosystem, facilitating meaningful collaborations and opportunities for innovation. Beyond campus, you will play a key role in strengthening the external perception of MITS as a leading center for innovation and venture creation—showcasing its achievements, inspiring prospective students, engaging industry partners, and building confidence among parents and stakeholders.
                  </p>
                </div>

                {/* Section: Key Responsibilities */}
                <div className="space-y-4 pt-2">
                  <h3 className="font-serif text-xl font-bold text-[#8B1D1D]">
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {[
                      {
                        title: "Champion the Vision",
                        desc: "Advocate for a culture of entrepreneurship, intrapreneurship, and solopreneurship within your department and across the institution.",
                      },
                      {
                        title: "Mentor Innovators",
                        desc: "Identify, guide, and support students and faculty members working on high-potential ideas and entrepreneurial ventures.",
                      },
                      {
                        title: "Program Leadership",
                        desc: "Co-lead and actively contribute to Studio initiatives, including idea sprints, venture bootcamps, hackathons, innovation challenges, intellectual property (IP) workshops, and go-to-market acceleration programs.",
                      },
                      {
                        title: "Build Strategic Partnerships",
                        desc: "Represent MITS across industry forums, innovation networks, academic collaborations, and entrepreneurial ecosystems. Develop meaningful relationships with startups, investors, corporate partners, incubators, and research organizations.",
                      },
                      {
                        title: "Strengthen the MITS Brand",
                        desc: "Serve as a visible ambassador for MITS by showcasing success stories, sharing thought leadership, contributing to institutional branding initiatives, and promoting the university’s innovation achievements to students, parents, industry stakeholders, and the wider community.",
                      },
                      {
                        title: "Foster Ecosystem Engagement",
                        desc: "Facilitate active engagement with alumni, entrepreneurs, innovators, industry leaders, and community partners to co-create learning experiences, mentorship opportunities, and venture-building initiatives.",
                      },
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
                      >
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#8B1D1D] text-white text-[11px] font-bold shrink-0 mt-0.5">
                          ›
                        </span>
                        <div className="text-sm sm:text-base leading-relaxed">
                          <strong className="text-slate-900 font-bold">{item.title} : </strong>
                          <span className="text-slate-700">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section: Who Should Apply */}
                <div className="space-y-4 pt-2">
                  <h3 className="font-serif text-xl font-bold text-[#8B1D1D]">
                    Who Should Apply
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      "Full-time faculty at MITS, regardless of discipline, with a strong commitment to innovation, entrepreneurship, and societal impact.",
                      "Relevant experience in research, mentoring, industry engagement, innovation initiatives, startup ecosystems, or interdisciplinary collaboration.",
                      "Excellent communication and relationship-building skills.",
                      "Leadership and influence, demonstrated through the ability to inspire, mobilize, and mentor individuals and teams toward shared goals.",
                      "An entrepreneurial mindset, with a strong belief in the transformative power of innovation, venture creation, and future-ready thinking.",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed"
                      >
                        <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#8B1D1D] shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section: What will you Gain? */}
                <div className="space-y-4 pt-2">
                  <h3 className="font-serif text-xl font-bold text-[#8B1D1D]">
                    What will you Gain?
                  </h3>
                  <div className="space-y-3">
                    {ambassadorGains.map((gain, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xs transition-all flex items-start gap-3.5"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#8B1D1D]/10 text-[#8B1D1D] flex items-center justify-center shrink-0 mt-0.5">
                          <gain.icon className="w-5 h-5" />
                        </div>
                        <div className="text-sm sm:text-base leading-relaxed">
                          <strong className="text-slate-900 font-bold">{gain.title} : </strong>
                          {gain.highlight ? (
                            <span className="text-slate-700">
                              Receive a monetary benefit of{" "}
                              <span className="text-[#8B1D1D] font-bold bg-red-100/70 px-1.5 py-0.5 rounded">
                                {gain.highlight}
                              </span>{" "}
                              in recognition of your commitment, leadership, and contributions to the growth of the Next New Venture Studio.
                            </span>
                          ) : (
                            <span className="text-slate-700">{gain.desc}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: REGISTRATION DETAILS */}
            {activeTabId === "ug-tab24" && (
              <div className="space-y-8 max-w-4xl">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#8B1D1D] tracking-tight mb-2">
                    Registration Details
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Next New Venture Studio Portal application and submission process.
                  </p>
                </div>

                <div className="space-y-4 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/70">
                  <div className="flex items-start gap-3.5">
                    <span className="text-xl shrink-0 mt-0.5">📌</span>
                    <p className="text-slate-800 text-base leading-relaxed">
                      Interested faculty can submit a short Statement of Interest via the Next New Venture Studio Portal at:
                    </p>
                  </div>

                  {/* FORM CTA BOX */}
                  <div className="my-4 p-5 sm:p-6 rounded-xl border-2 border-dashed border-[#8B1D1D]/40 bg-white shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase font-bold tracking-wider text-[#8B1D1D] mb-1">
                          Official Microsoft Form
                        </p>
                        <h4 className="font-serif font-bold text-lg text-slate-900">
                          Next New Venture Studio Portal
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 font-mono break-all">
                          https://forms.office.com/r/SwW9HV1J2u
                        </p>
                      </div>
                      <a
                        href="https://forms.office.com/r/SwW9HV1J2u"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#8B1D1D] hover:bg-[#6e1515] text-white text-sm font-bold shadow-sm transition-all shrink-0 hover:-translate-y-0.5"
                      >
                        Open Registration Form
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="text-xl shrink-0 mt-0.5">📌</span>
                    <p className="text-slate-800 text-base leading-relaxed">
                      <strong>Deadline to Apply :</strong>{" "}
                      <span className="inline-block bg-amber-100/80 text-[#8B1D1D] font-bold px-2 py-0.5 rounded-md">
                        10 May, 2025
                      </span>
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="text-xl shrink-0 mt-0.5">📌</span>
                    <p className="text-slate-800 text-base leading-relaxed">
                      Shortlisted faculty will be invited for a brief interaction with the Studio Leadership Team.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: CONTACT */}
            {activeTabId === "ug-tab54" && (
              <div className="space-y-8 max-w-4xl">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#8B1D1D] tracking-tight mb-2">
                    Contact Us
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Next New Venture Studio Office &amp; Coordinator details.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Coordinator Profile Card */}
                  <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-[#8B1D1D] text-xs font-bold uppercase tracking-wider">
                      Faculty Coordinator
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-slate-900">
                        Dr. M. Kiran Kumar
                      </h3>
                      <p className="text-slate-600 text-sm font-medium">
                        Assistant Professor
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200 space-y-2.5 text-sm">
                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-[#8B1D1D] shrink-0" />
                        <span className="text-slate-500 text-xs">Email:</span>
                        <a
                          href="mailto:kirankumarm@mits.ac.in"
                          className="text-[#8B1D1D] hover:underline font-semibold"
                        >
                          kirankumarm@mits.ac.in
                        </a>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-[#8B1D1D] shrink-0" />
                        <span className="text-slate-500 text-xs">Phone:</span>
                        <span className="text-slate-800 font-medium">
                          8571-280255, 280706
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Campus Address Card */}
                  <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
                      Campus Location
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-900">
                        Address:
                      </h3>
                      <p className="text-slate-700 text-sm leading-relaxed mt-1">
                        Madanapalle Institute of Technology &amp; Science<br />
                        Deemed to be University<br />
                        Madanapalle-Kadiri Road<br />
                        kurabalakota Mandal, Madanapalle-517325<br />
                        Andhra Pradesh, India
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        How to Reach MITS
                      </p>
                      <a
                        href="https://maps.app.goo.gl/Wim46nkjnqccRgR88"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[#8B1D1D] font-semibold hover:underline"
                      >
                        <MapPin className="w-4 h-4" />
                        Open Google Maps Location
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className="rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                  <iframe
                    title="MITS Campus Map"
                    src="https://maps.google.com/maps?q=Madanapalle%20Institute%20of%20Technology%20%26%20Science&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-72 border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

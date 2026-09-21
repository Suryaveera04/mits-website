import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket, Sparkles, Award, Users, CheckCircle2,
  ExternalLink, Calendar, MapPin, Mail, Phone,
  ArrowRight, ShieldCheck, Target, Lightbulb, Compass, Globe,
  Briefcase, Laptop, BookOpen
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";

const BASE = import.meta.env.BASE_URL;

type TabKey = "about" | "ambassador" | "registration" | "contact";

const tabs: { id: TabKey; label: string; icon: any }[] = [
  { id: "about", label: "About Next-New-Venture-Studio", icon: Rocket },
  { id: "ambassador", label: "About Faculty Ambassador", icon: Award },
  { id: "registration", label: "Registration Details", icon: CheckCircle2 },
  { id: "contact", label: "Contact", icon: Mail },
];

const services = [
  {
    num: "01",
    title: "Next New Venture Studio Setup",
    desc: "Transform your institution into an ecosystem of innovation, rather than merely a place of traditional learning.",
    icon: Rocket,
  },
  {
    num: "02",
    title: "Exponential Thinking Bootcamps",
    desc: "Empower faculty and students to think beyond conventional boundaries and drive transformative solutions.",
    icon: Lightbulb,
  },
  {
    num: "03",
    title: "Idea-to-Startup Labs",
    desc: "Support community-based projects into scalable ventures with real-world impact.",
    icon: Target,
  },
  {
    num: "04",
    title: "EduVerse: Immersive Academic Metaverse",
    desc: "Enable immersive 3D virtual laboratories and global collaborative learning experiences across disciplines.",
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
    title: "Adaptive Personal Tech-Enabled Learning Assistants",
    desc: "Scale academic mentorship through technology-enabled solutions that guide, support, and personalize each student's learning journey.",
    icon: Compass,
  },
  {
    num: "07",
    title: "Global Challenge Solution",
    desc: "Host cross-functional innovation challenges that transform ideas into prototypes and venture-backed startups.",
    icon: TrophyIcon,
  },
  {
    num: "08",
    title: "Faculty Innovation Fellowships",
    desc: "Empower faculty with design-led, AI-integrated pedagogical approaches to mentor and inspire the next generation of change makers.",
    icon: Award,
  },
  {
    num: "09",
    title: "Community Based Learning",
    desc: "Build industry and mentor connections, engage in peer-to-peer learning, and showcase your skills through industry gig projects.",
    icon: Users,
  },
];

function TrophyIcon(props: any) {
  return <Sparkles {...props} />;
}

const partners = [
  { name: "INUNITY", role: "Leadership development programs and holistic growth digital ecosystem." },
  { name: "COMMUNIOUS.AI", role: "Industry mentor engagement through personalized learning pathways and hackathons." },
  { name: "MANTRIKA.AI", role: "Internship opportunities, job-readiness assessments, and placement support." },
  { name: "TEXNERE", role: "Industry consulting for faculty, GIG-based projects, and career development." },
  { name: "ISF", role: "Global mentors, investors, and startup networks fostering venture creation." },
  { name: "XARPIE", role: "Advanced industry-aligned labs, global enterprise exposure, and summits." },
];

export default function VentureStudio() {
  const [activeTab, setActiveTab] = useState<TabKey>("about");

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />
      <SEO
        title="Next New Venture Studio – MITS Deemed to be University"
        description="Next New Venture Studio at MITS: Where Innovation Leads, the Future Follows. Empowering educators and students to cultivate innovation-driven ventures and startup ecosystems."
        canonical="/Venture-Studio"
      />

      {/* HERO BANNER */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4">
            Innovation &amp; Entrepreneurship Ecosystem
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white leading-tight">
            Next New <span className="text-[#ffd15c]">Venture Studio</span>
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium">
            Where Innovation Leads, the Future Follows • From Classrooms to Venture Studios
          </p>
        </div>

        <nav aria-label="Breadcrumb" className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li>
              <Link to="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold">Next New Venture Studio</li>
          </ol>
        </nav>
      </section>

      {/* STICKY TAB NAVIGATION BAR */}
      <div className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-border shadow-xs">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-none gap-2 py-3">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shrink-0 ${
                    isActive
                      ? "bg-[#0f2a44] text-white shadow-md shadow-[#0f2a44]/20"
                      : "text-slate-600 hover:text-[#0f2a44] hover:bg-slate-100"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#ffd15c]" : "text-slate-400"}`} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* MAIN BODY CONTENT */}
      <main className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <AnimatePresence mode="wait">
          {/* TAB 1: ABOUT STUDIO */}
          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="space-y-10"
            >
              {/* Mission Statement */}
              <div className="bg-gradient-to-br from-white to-[#fffcf5] border border-[#caa74d]/30 rounded-2xl p-6 md:p-10 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fff8e6] border border-[#caa74d]/30 text-[#8a6a1a] text-xs font-bold uppercase tracking-wider mb-4">
                  <Rocket className="w-3.5 h-3.5" /> Institutional Vision
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44] mb-4">
                  Next New Venture Studio at MITS
                </h2>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4">
                  Empowering educators to cultivate innovation-driven ecosystems where students move beyond learning to become leaders and change-makers.
                </p>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  We are building a future where every institution becomes a hub for innovation, entrepreneurship, and societal transformation—going beyond delivering knowledge to create impact at scale. At Next New Venture, we collaborate with educators and institutions to build the systems, mindsets, and ecosystems that make your institution a true leader.
                </p>
              </div>

              {/* Services and Solutions Grid */}
              <div>
                <div className="mb-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                    Our Services and Solutions
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    End-to-end framework transforming ideas into impactful scalable ventures.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((s) => (
                    <div
                      key={s.num}
                      className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-lg hover:border-[#caa74d] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-extrabold text-[#caa74d] tracking-widest">{s.num}</span>
                        <div className="w-10 h-10 rounded-xl bg-[#0f2a44]/5 text-[#0f2a44] flex items-center justify-center">
                          <s.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h4 className="font-display font-bold text-base text-[#0f2a44] mb-2">{s.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mt-auto">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-[#0f2a44] text-white rounded-2xl p-8 md:p-10 shadow-xl">
                <h3 className="font-display text-xl md:text-2xl font-bold text-[#ffd15c] mb-6">
                  Key Benefits for Faculties and Institutions
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Future-Ready Education", desc: "Empower faculty to go beyond conventional curricula by integrating exponential thinking, emerging technologies, and innovation-driven pedagogical approaches." },
                    { title: "Research Commercialization", desc: "Support the transformation of research outcomes into intellectual property, startups, industry collaborations, and externally funded innovation projects." },
                    { title: "Student Leadership & Entrepreneurship", desc: "Cultivate purpose-driven, entrepreneurial leaders equipped to address complex global challenges." },
                    { title: "Recognition and Visibility", desc: "Strengthen the institution's reputation by showcasing innovation, research excellence, and student achievements on national and international forums." },
                  ].map((b, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#ffd15c] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-white text-sm">{b.title}</h4>
                        <p className="text-slate-300 text-xs md:text-sm mt-1 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partners & Ecosystem Collaborators */}
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44] mb-6">
                  Our Partners &amp; Ecosystem Collaborators
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {partners.map((p, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                      <p className="font-bold text-base text-[#b31317] tracking-wider mb-2">{p.name}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{p.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: ABOUT FACULTY AMBASSADOR */}
          {activeTab === "ambassador" && (
            <motion.div
              key="ambassador"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Ambassador Role Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 border-b border-slate-100 pb-4">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#b31317]" /> MITS Madanapalle</span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-primary" /> Faculty Leadership Role</span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#caa74d]" /> 1-Year Term (Renewable)</span>
                </div>

                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44]">
                    Next New Venture Studio — Faculty Ambassador
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-3">
                    MITS is proud to launch the Next New Venture Studio, a bold initiative to transform our institution into a hub of exponential thinking, innovation, and venture creation. The Studio will serve as a catalyst for entrepreneurship, intrapreneurship, and solopreneurship across disciplines.
                  </p>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-2">
                    To drive this transformation, we invite visionary, passionate, and committed faculty members to join us as Faculty Ambassadors of the Studio to lead from the front, inspire change, and amplify MITS’s voice to the world.
                  </p>
                </div>

                {/* Key Responsibilities */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-4">Key Responsibilities</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: "Champion the Vision", desc: "Advocate for a culture of entrepreneurship, intrapreneurship, and solopreneurship within your department and across the institution." },
                      { title: "Mentor Innovators", desc: "Identify, guide, and support students and faculty members working on high-potential ideas and entrepreneurial ventures." },
                      { title: "Program Leadership", desc: "Co-lead Studio initiatives, including idea sprints, venture bootcamps, hackathons, innovation challenges, and go-to-market acceleration." },
                      { title: "Build Strategic Partnerships", desc: "Represent MITS across industry forums, startup ecosystems, investors, corporate partners, and research bodies." },
                      { title: "Strengthen the MITS Brand", desc: "Serve as a visible ambassador by showcasing success stories, thought leadership, and university innovation achievements." },
                      { title: "Foster Ecosystem Engagement", desc: "Engage with alumni, entrepreneurs, and industry leaders to co-create learning experiences and venture initiatives." },
                    ].map((r, i) => (
                      <div key={i} className="flex gap-3 items-start bg-slate-50 border border-slate-200/60 rounded-xl p-4">
                        <div className="w-2 h-2 rounded-full bg-[#b31317] mt-2 shrink-0" />
                        <div>
                          <strong className="text-[#0f2a44] text-sm block">{r.title}</strong>
                          <p className="text-slate-600 text-xs md:text-sm mt-1 leading-snug">{r.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What will you Gain? */}
                <div className="bg-gradient-to-br from-[#fffdfa] to-[#fff8e6]/60 border border-[#caa74d]/40 rounded-xl p-6 space-y-4">
                  <h3 className="font-display text-lg font-bold text-[#8a6a1a] flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#caa74d]" /> What Will You Gain?
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                    <p>💰 <strong>Monthly Honorarium:</strong> Monetary benefit of INR 10,000 per month in recognition of leadership contributions.</p>
                    <p>🌟 <strong>Leadership Recognition:</strong> Formal institutional recognition as a key leader driving transformational initiatives.</p>
                    <p>🤝 <strong>Global Networking:</strong> Access to leading entrepreneurs, venture funds, investors, and policymakers.</p>
                    <p>🚀 <strong>Legacy Creation:</strong> Play a defining role in shaping the next decade of MITS’s entrepreneurial growth.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: REGISTRATION DETAILS */}
          {activeTab === "registration" && (
            <motion.div
              key="registration"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-3xl mx-auto space-y-6">
                <div className="text-center space-y-2">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44]">
                    Next New Venture Studio Portal Registration
                  </h2>
                  <p className="text-slate-600 text-sm md:text-base">
                    Submit your Statement of Interest to become a Venture Studio Faculty Ambassador or register your startup venture idea.
                  </p>
                </div>

                <div className="space-y-4 bg-slate-50 border border-slate-200 rounded-xl p-6 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <span className="text-[#caa74d] font-bold text-lg leading-none">📌</span>
                    <p>Interested faculty and innovators can submit a short Statement of Interest via the Next New Venture Studio Portal.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#caa74d] font-bold text-lg leading-none">📌</span>
                    <p><strong>Application Link:</strong> Official Microsoft Forms Portal</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#caa74d] font-bold text-lg leading-none">📌</span>
                    <p>Shortlisted applicants will be invited for a brief interaction with the Studio Leadership Team.</p>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <a
                    href="https://forms.office.com/r/SwW9HV1J2u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#b31317] hover:bg-[#8b0000] text-white font-bold text-base shadow-lg shadow-[#b31317]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    Open Registration Form <ExternalLink className="w-5 h-5" />
                  </a>
                  <p className="text-xs text-slate-400 mt-3">
                    Portal URL: https://forms.office.com/r/SwW9HV1J2u
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: CONTACT */}
          {activeTab === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-3xl mx-auto space-y-6">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44] mb-2">
                    Contact Venture Studio Office
                  </h2>
                  <p className="text-slate-600 text-sm">
                    For inquiries regarding venture creation, faculty ambassadorship, or collaborative partnerships.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 pt-2">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                    <p className="text-xs uppercase font-bold text-[#b31317] tracking-wider">Campus Address</p>
                    <p className="text-sm font-semibold text-[#0f2a44]">
                      Madanapalle Institute of Technology &amp; Science (Deemed to be University)
                    </p>
                    <p className="text-xs text-slate-600">
                      Madanapalle-Kadiri Road, Kurabalakota Mandal, Madanapalle – 517325, Andhra Pradesh, India
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                    <p className="text-xs uppercase font-bold text-[#b31317] tracking-wider">Get in Touch</p>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <span>08571-280255, 280706</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <a href="mailto:dean_research@mits.ac.in" className="text-primary hover:underline font-medium">
                        dean_research@mits.ac.in
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <a
                        href="https://maps.app.goo.gl/Wim46nkjnqccRgR88"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        View Google Location Map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight, Download, UserRoundPlus, FileText,
  ShieldCheck, ClipboardCheck, IndianRupee, TrendingUp,
  Users, Building, ChevronLeft, ChevronRight,
} from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const whyCards = [
  { img: `${BASE}Hero-Section/image 1.JPG`, caption: "Modern Learning Environment", sub: "State-of-the-art classrooms & smart labs" },
  { img: `${BASE}Hero-Section/image 2.JPG`, caption: "Advanced Research Labs", sub: "Cutting-edge facilities for innovation" },
  { img: `${BASE}Hero-Section/image 3.JPG`, caption: "Active Student Community", sub: "Vibrant campus life & cultural events" },
  { img: `${BASE}Hero-Section/image 4.JPG`, caption: "Excellent Placements", sub: "Top recruiters, global opportunities" },
];

const steps = [
  { icon: UserRoundPlus, num: "01", title: "Register Online",        desc: "Create your account on the MITS admissions portal and fill in your personal & academic details." },
  { icon: FileText,      num: "02", title: "Complete Application",   desc: "Fill the application form carefully, selecting your preferred program and specialisation." },
  { icon: ShieldCheck,   num: "03", title: "Upload Documents",       desc: "Submit mark sheets, ID proof, category certificates and passport-size photograph." },
  { icon: ClipboardCheck,num: "04", title: "Admission Confirmation", desc: "Attend counselling, pay fees and receive your official admission confirmation letter." },
];

const galleryItems = [
  { img: `${BASE}gallery/ashv(2k26).jpg`, caption: "ASHV Cultural Festival" },
  { img: `${BASE}gallery/Ground-1.JPG`,            caption: "Campus Sports & Fitness" },
  { img: `${BASE}gallery/seminar_hall_audience.jpg`,caption: "IEEE Guest Lectures" },
  { img: `${BASE}gallery/camp1.JPG`,   caption: "Industry Visits" },
  { img: `${BASE}gallery/alumni.jpg`,        caption: "Alumni Connect" },
  { img: `${BASE}gallery/computer_Lab1.jpg`,       caption: "Digital Era Seminars" },
  { img: `${BASE}gallery/camp5.JPG`,                caption: "Student Gatherings" },
  { img: `${BASE}gallery/ashv(2k25)15.jpg`,               caption: "Campus Celebrations" },
];

const stories = [
  { img: `${BASE}gallery/advanced manufacring lab.jpg`,             dir: "left",  title: "Hands-On Learning",    body: "Our advanced laboratories give students real-world exposure from day one. Every program is designed to bridge theory with practice through industry-aligned projects and research." },
  { img: `${BASE}gallery/ashv(2k25)30.jpg`,     dir: "right", title: "Vibrant Campus Life",  body: "From ASHV cultural festivals to sports meets and student clubs, life at MITS is rich with experiences that shape well-rounded professionals." },
  { img: `${BASE}gallery/Circular Block.JPG`,             dir: "left",  title: "Inspiring Environment",body: "Spread across a lush green campus, MITS provides a peaceful and inspiring academic environment that fosters creativity, collaboration and growth." },
];

const placementStats = [
  { icon: IndianRupee, value: 21,  suffix: " LPA", label: "Highest Package",  color: "#b30000" },
  { icon: TrendingUp,  value: 6,   suffix: ".8 LPA",label: "Average Package", color: "#0f2a44" },
  { icon: Building,    value: 200, suffix: "+",     label: "Top Recruiters",  color: "#b30000" },
  { icon: Users,       value: 94,  suffix: "%",     label: "Students Placed", color: "#0f2a44" },
];

/* CountUp */
const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = Math.ceil(target / 80);
    const t = setInterval(() => {
      n += step;
      if (n >= target) { setCount(target); clearInterval(t); } else setCount(n);
    }, 1000 / 60);
    return () => clearInterval(t);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
};

/* ── Page ── */
const admissionsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the eligibility for B.Tech admission at MITS Madanapalle?",
      "acceptedAnswer": { "@type": "Answer", "text": "Candidates must have passed 10+2 (or equivalent) with Physics, Chemistry and Mathematics, securing at least 45% aggregate marks. Admission is through AP EAMCET / JEE Main counselling or direct admission based on merit." }
    },
    {
      "@type": "Question",
      "name": "Does MITS accept AP EAMCET scores?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. MITS Madanapalle accepts AP EAMCET scores for B.Tech admissions. Candidates who have appeared in AP EAMCET are eligible to apply through the APSCHE counselling process." }
    },
    {
      "@type": "Question",
      "name": "Is MITS a deemed university or affiliated college?",
      "acceptedAnswer": { "@type": "Answer", "text": "MITS is a Deemed-to-be University recognised by UGC under Section 3 of the UGC Act, 1956. It is also NAAC A+ accredited and AICTE approved." }
    },
    {
      "@type": "Question",
      "name": "What programmes does MITS offer?",
      "acceptedAnswer": { "@type": "Answer", "text": "MITS offers B.Tech (CSE, ECE, EEE, Mechanical, Civil, AI, AI&ML, CSE-Data Science, CSE-Cyber Security), M.Tech, MBA, MCA, and BCA/BBA programmes." }
    },
    {
      "@type": "Question",
      "name": "How do I apply for admission to MITS?",
      "acceptedAnswer": { "@type": "Answer", "text": "Applications can be submitted online at admission.mits.ac.in. The process involves registering, filling the application form, uploading documents, and attending counselling for fee payment and confirmation." }
    },
    {
      "@type": "Question",
      "name": "Are scholarships available at MITS?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. MITS students are eligible for state government scholarships (AP Jagananna Vidya Deevena, Vasathi Deevena), central government scholarships, and merit-based fee concessions. Details are available on the admissions portal." }
    },
    {
      "@type": "Question",
      "name": "What is the placement record at MITS?",
      "acceptedAnswer": { "@type": "Answer", "text": "MITS has a 94% placement rate with an average package of ₹6.8 LPA and a highest package of ₹21 LPA. Over 200 companies recruit from campus, including Google, Microsoft, Amazon, TCS, Infosys, and Wipro." }
    }
  ]
};

const Admissions = () => {
  /* gallery auto-scroll */
  const VISIBLE = 3;
  const MAX = galleryItems.length - VISIBLE;
  const [slide, setSlide] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (n: number) => setSlide(Math.max(0, Math.min(n, MAX)));

  useEffect(() => {
    autoRef.current = setInterval(() => setSlide((s) => (s >= MAX ? 0 : s + 1)), 3000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const manualNav = (n: number) => {
    if (autoRef.current) clearInterval(autoRef.current);
    goTo(n);
    autoRef.current = setInterval(() => setSlide((s) => (s >= MAX ? 0 : s + 1)), 3000);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <SEO
        title="MITS Admissions 2027 – B.Tech, MBA & MCA | Madanapalle"
        description="Apply for MITS Madanapalle admissions 2027. B.Tech via AP EAMCET, direct admission for MBA & MCA. NAAC A+ deemed university. 94% placement rate. Apply at admission.mits.ac.in."
        canonical="/admissions"
        jsonLd={admissionsFaqSchema}
      />
      <main>

        {/* ── HERO ── */}
        {/* mobile: nav=64px | md+: ticker=36px + nav=80px = 116px */}
        <section
          className="relative flex items-center justify-center overflow-hidden"
          style={{ minHeight: "100vh", paddingTop: "148px" }}
        >
          <img
            src={`${BASE}admissions/admission1.jpg`}
            alt="MITS Campus"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ animation: "heroZoom 20s ease-in-out infinite alternate" }}
          />
          {/* layered gradient: dark at top (behind navbar text) fading to semi-transparent in middle */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.60) 40%, rgba(0,0,0,0.50) 70%, rgba(0,0,0,0.45) 100%)"
          }} />
          {/* bottom wave */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />

          <div
            className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full"
            style={{ paddingBottom: "80px" }}
          >
            <motion.span
              initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 bg-[#b30000] text-white text-sm font-bold tracking-[0.15em] uppercase px-6 py-2.5 rounded-full mb-8 shadow-2xl border border-white/20"
            >
              🎓 Admissions 2027 — Now Open
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display font-bold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4.8rem)", textShadow: "0 0 30px rgba(0,0,0,1), 0 2px 12px rgba(0,0,0,1)" }}
            >
              Start Your Journey at <span style={{ color: "#FFD700", textShadow: "0 0 20px rgba(0,0,0,1), 0 2px 8px rgba(0,0,0,1)" }}>MITS</span><br />
              <span style={{ fontSize: "clamp(2.3rem, 5.4vw, 4.3rem)", textShadow: "0 0 20px rgba(0,0,0,1), 0 2px 8px rgba(0,0,0,1)" }}>Deemed to be University</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
            >
              <span style={{ color: "#FFD700", fontWeight: "700", textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.8)" }}>Madanapalle Institute of Technology &amp; Science</span><br />
              <span style={{ color: "#ffffff", fontWeight: "600", textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.8)" }}>NAAC A+ Accredited &nbsp;&middot;&nbsp; Shaping engineers &amp; innovators since 1998</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 justify-center mb-10"
            >
              <a href="https://admission.mits.ac.in/" target="_blank" rel="noreferrer">
                <Button className="bg-[#b30000] hover:bg-[#900000] text-white font-bold px-8 py-3 text-base rounded-full shadow-2xl transition-all duration-300 hover:scale-105">
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="https://mits.ac.in/public/uploads/static-pdf/MITS%20Deemed%20to%20be%20University%20Brochure%202027.pdf" target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-2 border-white text-white bg-white/15 hover:bg-white hover:text-[#0f2a44] font-bold px-8 py-3 text-base rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  <Download className="mr-2 w-5 h-5" /> Download Brochure
                </Button>
              </a>
              
            </motion.div>


          </div>
        </section>

        {/* ── ADMISSION PROCEDURES & PATHS ── */}
        <section className="py-20 bg-slate-50 border-y border-slate-200/50" id="phd">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-[#b30000] font-semibold tracking-widest uppercase text-sm mb-2">Admission Paths</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0f2a44] mb-3">Admission Procedures</h2>
                <p className="text-gray-500 max-w-xl mx-auto">Please select the appropriate pathway based on your residency status or program level to review eligibility, quotas, and registration steps.</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <ScrollReveal delay={0.1}>
                <Card className="p-8 bg-white border border-slate-200 hover:border-[#caa74d] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0f2a44] group-hover:bg-[#caa74d] transition-colors" />
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] uppercase font-bold tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#caa74d]" /> Domestic Candidates
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#0f2a44]">National Admission Procedure</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Detailed admissions criteria, quotas, tie-breaker rules, and lateral entry procedures (direct 2nd year B.Tech) for candidates applying within India.
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link to="/national-admissions-procedure">
                      <Button className="w-full bg-[#0f2a44] hover:bg-[#caa74d] hover:text-[#0f2a44] text-white font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group-hover:translate-y-[-2px]">
                        Explore National Procedure <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card className="p-8 bg-white border border-slate-200 hover:border-[#caa74d] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0f2a44] group-hover:bg-[#caa74d] transition-colors" />
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] uppercase font-bold tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> NRI &amp; Foreign Nationals
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#0f2a44]">International Admission Procedure</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Guidelines for foreign nationals, NRI status holders, OCI, PIO, and NRI-sponsored candidates. Information on AIU equivalence, Student Visas, and registration.
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link to="/international-admissions-procedure">
                      <Button className="w-full bg-[#0f2a44] hover:bg-[#caa74d] hover:text-[#0f2a44] text-white font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group-hover:translate-y-[-2px]">
                        Explore International Procedure <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card className="p-8 bg-white border-2 border-[#b31317]/20 hover:border-[#b31317] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#b31317] transition-colors" />
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#b31317] text-[10px] uppercase font-bold tracking-wider border border-red-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b31317] animate-pulse" /> Doctoral Research
                    </span>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-2xl font-bold text-[#0f2a44]">Ph.D. Admissions</h3>
                      <span className="bg-[#b31317] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">New</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Explore Full-Time and Part-Time Ph.D. programs across Engineering, Management, and Basic Sciences. Institutional fellowships, eligibility, and entrance guidelines.
                    </p>
                    <div className="pt-2 space-y-2">
                      <a
                        href="https://mits.ac.in/phd-admissions-2026-27-july-session"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-red-50/50 border border-slate-200 hover:border-[#b31317]/40 text-xs font-semibold text-[#0f2a44] hover:text-[#b31317] transition-all"
                      >
                        <span>Ph.D. Admissions (July Session)</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#b31317]" />
                      </a>
                      <a
                        href="https://mits.ac.in/phd-admissions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-[#caa74d] text-xs font-semibold text-[#0f2a44] transition-all"
                      >
                        <span>Ph.D. Admissions Overview</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#0f2a44]" />
                      </a>
                    </div>
                  </div>
                  <div className="pt-4">
                    <a
                      href="https://mits.ac.in/phd-admissions-2026-27-july-session"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-[#b31317] hover:bg-[#8b0000] text-white font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group-hover:translate-y-[-2px]">
                        Apply for Ph.D. Admissions <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE MITS ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-[#b30000] font-semibold tracking-widest uppercase text-sm mb-2">Why MITS?</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0f2a44] mb-3">A Campus Built for Excellence</h2>
                <p className="text-gray-500 max-w-xl mx-auto">World-class infrastructure, passionate faculty, and a community that pushes you to achieve more.</p>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyCards.map((card, i) => (
                <ScrollReveal key={card.caption} delay={i * 0.1}>
                  <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-72">
                    <img src={card.img} alt={card.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a44]/90 via-[#0f2a44]/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-display text-xl font-bold leading-tight">{card.caption}</p>
                      <p className="text-white/70 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{card.sub}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#b30000] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── ADMISSION PROCESS ── */}
        <section className="py-24 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-[#b30000] font-semibold tracking-widest uppercase text-sm mb-2">How to Apply</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0f2a44] mb-3">Admission Process</h2>
                <p className="text-gray-500 max-w-xl mx-auto">Four simple steps to begin your journey at MITS.</p>
              </div>
            </ScrollReveal>
            <div className="relative max-w-5xl mx-auto">
              <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#b30000] via-[#f5a623] to-[#b30000]" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, i) => (
                  <ScrollReveal key={step.num} delay={i * 0.12}>
                    <div className="group flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <div className="w-28 h-28 rounded-full bg-white border-4 border-[#b30000] shadow-xl flex flex-col items-center justify-center group-hover:bg-[#b30000] transition-colors duration-300">
                          <step.icon className="w-8 h-8 text-[#b30000] group-hover:text-white transition-colors duration-300" />
                          <span className="text-sm font-bold text-[#b30000] group-hover:text-white/80 mt-1 transition-colors duration-300">{step.num}</span>
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-bold text-[#0f2a44] mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <ScrollReveal delay={0.5}>
              <div className="text-center mt-12">
                <a href="https://admission.mits.ac.in/" target="_blank" rel="noreferrer">
                  <Button className="bg-[#b30000] hover:bg-[#900000] text-white font-bold px-10 py-5 text-base rounded-full shadow-lg transition-all duration-300 hover:scale-105">
                    Start Your Application <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CAMPUS LIFE GALLERY — auto-scroll ── */}
        <section className="py-24 bg-[#0f2a44] overflow-hidden">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-[#f5a623] font-semibold tracking-widest uppercase text-sm mb-2">Campus Life</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Life at MITS</h2>
                <p className="text-white/60 max-w-xl mx-auto">From cultural festivals to academic milestones — every day at MITS is an experience.</p>
              </div>
            </ScrollReveal>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <motion.div
                  className="flex gap-4"
                  animate={{ x: `calc(-${slide * (100 / VISIBLE)}% - ${slide * 16 / VISIBLE}px)` }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                >
                  {galleryItems.map((item) => (
                    <div
                      key={item.caption}
                      className="group relative flex-shrink-0 rounded-xl overflow-hidden cursor-pointer"
                      style={{ width: `calc(${100 / VISIBLE}% - ${(VISIBLE - 1) * 16 / VISIBLE}px)` }}
                    >
                      <img src={item.img} alt={item.caption} className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-display text-lg font-bold">{item.caption}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <button onClick={() => manualNav(slide - 1)} disabled={slide === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center disabled:opacity-30 hover:bg-[#b30000] hover:text-white transition-all duration-200 z-10">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => manualNav(slide + 1)} disabled={slide === MAX}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center disabled:opacity-30 hover:bg-[#b30000] hover:text-white transition-all duration-200 z-10">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: MAX + 1 }).map((_, i) => (
                <button key={i} onClick={() => manualNav(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${slide === i ? "bg-[#f5a623] w-6" : "bg-white/30 w-2.5"}`} />
              ))}
            </div>
          </div>
        </section>

        {/* ── STUDENT EXPERIENCE ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-[#b30000] font-semibold tracking-widest uppercase text-sm mb-2">Student Experience</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0f2a44] mb-3">Stories from Campus</h2>
              </div>
            </ScrollReveal>
            <div className="space-y-20 max-w-5xl mx-auto">
              {stories.map((story, i) => (
                <ScrollReveal key={story.title} direction={story.dir as "left" | "right"} delay={0.1}>
                  <div className={`flex flex-col ${story.dir === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center`}>
                    <div className="md:w-1/2 relative group">
                      <div className={`absolute -inset-3 rounded-2xl ${i % 2 === 0 ? "bg-[#b30000]/8" : "bg-[#0f2a44]/8"} -z-10`} />
                      <img src={story.img} alt={story.title}
                        className="w-full h-72 object-cover rounded-2xl shadow-xl group-hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                    <div className="md:w-1/2">
                      <div className={`w-12 h-1 rounded-full mb-4 ${i % 2 === 0 ? "bg-[#b30000]" : "bg-[#0f2a44]"}`} />
                      <h3 className="font-display text-3xl font-bold text-[#0f2a44] mb-4">{story.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{story.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLACEMENT HIGHLIGHTS — white bg, red/navy cards ── */}
        <section className="py-24 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-[#b30000] font-semibold tracking-widest uppercase text-sm mb-2">Career Success</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0f2a44] mb-3">Placement Highlights</h2>
                <p className="text-gray-500 max-w-xl mx-auto">Our graduates are hired by the world's leading companies across every industry.</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {placementStats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 0.1}>
                  <div
                    className="group text-center rounded-2xl p-8 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default"
                    style={{ background: stat.color, color: "#fff" }}
                  >
                    <div className="w-14 h-14 mx-auto rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors duration-300">
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="font-display text-4xl font-bold text-white leading-none">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-white/80 text-sm mt-2 font-medium">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="text-center mt-10">
                <Link to="/placements">
                  <Button className="bg-[#0f2a44] hover:bg-[#0a1e33] text-white font-bold px-8 py-5 rounded-full text-base shadow-lg transition-all duration-300 hover:scale-105">
                    View Full Placement Report <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section className="py-24 bg-white" aria-labelledby="admissions-faq-heading">
          <div className="container mx-auto px-4 max-w-3xl">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-[#b30000] font-semibold tracking-widest uppercase text-sm mb-2">Got Questions?</p>
                <h2 id="admissions-faq-heading" className="font-display text-4xl font-bold text-[#0f2a44] mb-3">Admissions FAQ</h2>
                <p className="text-gray-500">Answers to the questions students and parents ask most.</p>
              </div>
            </ScrollReveal>
            <div className="space-y-4">
              {admissionsFaqSchema.mainEntity.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <details className="group border border-gray-200 rounded-xl bg-gray-50 open:bg-white open:shadow-md transition-all duration-300">
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-[#0f2a44] list-none">
                      {item.name}
                      <span className="ml-4 text-[#b30000] text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">{item.acceptedAnswer.text}</p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={0.4}>
              <p className="text-center text-gray-500 mt-8 text-sm">
                More questions? <Link to="/contact" className="text-[#b30000] font-semibold hover:underline">Contact our admissions team</Link> or visit the <Link to="/eligibility-and-fees" className="text-[#b30000] font-semibold hover:underline">Eligibility &amp; Fees</Link> page.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-32 overflow-hidden">
          <img src={`${BASE}admissions/admission2.jpg`} alt="MITS Campus" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a44]/95 via-[#0f2a44]/82 to-[#b30000]/72" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <ScrollReveal>
              <p className="text-[#f5a623] font-semibold tracking-widest uppercase text-sm mb-4">Your Future Starts Here</p>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
                Start Your Journey<br />at MITS
              </h2>
              <p className="text-white/75 text-xl max-w-2xl mx-auto mb-10">
                Join thousands of students who chose MITS to build their careers. Applications for 2027 are open — don't miss your chance.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://admission.mits.ac.in/" target="_blank" rel="noreferrer">
                  <Button className="bg-[#b30000] hover:bg-[#900000] text-white font-bold px-10 py-6 text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-105">
                    Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="outline" className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-[#0f2a44] font-bold px-10 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105">
                    Contact Admissions
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.0); }
          to   { transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
};

export default Admissions;


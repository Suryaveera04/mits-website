import Header from "@/components/Header";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { Award, BookOpen, Building2, ExternalLink, GraduationCap, History, Landmark, Shield, ShieldCheck, Star, Target, Eye, Users, MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { leadershipProfiles, type LeadershipProfile } from "@/data/aboutData";

const BASE = import.meta.env.BASE_URL;

const EomsLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="ISO 21001:2018 EOMS Certified Logo"
  >
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.45" />
    <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="1.75" />
    <text
      x="24"
      y="18"
      textAnchor="middle"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontSize="9"
      fontWeight="900"
      letterSpacing="1"
    >
      ISO
    </text>
    <line x1="11" y1="21.5" x2="37" y2="21.5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <polygon points="24,20 25.5,21.5 24,23 22.5,21.5" fill="currentColor" />
    <text
      x="24"
      y="31"
      textAnchor="middle"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontSize="8"
      fontWeight="800"
      letterSpacing="0.5"
    >
      21001
    </text>
    <text
      x="24"
      y="38"
      textAnchor="middle"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontSize="5"
      fontWeight="700"
      letterSpacing="1.2"
      opacity="0.9"
    >
      EOMS
    </text>
  </svg>
);

const achievements = [
  { icon: Award, title: "NAAC A+ Accredited", desc: "Highest grade by the National Assessment and Accreditation Council." },
  { icon: Shield, title: "UGC Recognized", desc: "Recognized under Sections 2(f) & 12(B) of UGC Act." },
  { icon: Star, title: "NBA Accredited", desc: "Multiple programs accredited by the National Board of Accreditation." },
  { icon: Landmark, title: "NIRF Ranked", desc: "Consistently ranked in the NIRF Engineering category (201-300 band)." },
  { icon: BookOpen, title: "AICTE Approved", desc: "All engineering programs are approved by AICTE." },
  { icon: GraduationCap, title: "Deemed to be University", desc: "Declared as Deemed to be University u/s 3 of UGC Act, 1956." },
];

const institutionalKeys = ["chancellor", "pro-chancellor", "Executive Director"];
const academicKeys = [
  "vice-chancellor",
  "registrar",
  "controller-of-examinations",
  "ombudsperson",
];


const institutional = institutionalKeys.map((k) => leadershipProfiles[k]).filter((p): p is LeadershipProfile => Boolean(p));
const academic = academicKeys.map((k) => leadershipProfiles[k]).filter((p): p is LeadershipProfile => Boolean(p));

const infrastructure = [
  { icon: Building2, title: "26.17-acre Campus", desc: "26.17-acre campus with modern academic blocks and amenities." },
  { icon: BookOpen, title: "Central Library", desc: "50,000+ volumes, e-journals, digital resources, and reading halls." },
  { icon: Users, title: "Smart Classrooms", desc: "ICT-enabled classrooms with projectors and interactive learning tools." },
  { icon: GraduationCap, title: "Research Labs", desc: "Advanced laboratories for engineering, sciences, and computing disciplines." },
];

const contactInfo = [
  { icon: MapPin, title: "Address", lines: ["Post Box No. 4, Angallu", "Madanapalle – 517325", "Annamayya District, Andhra Pradesh"] },
  { icon: Phone, title: "Phone", lines: ["+91 8571 280255", "+91 8571 280256"] },
  { icon: Mail, title: "Email", lines: ["info@mits.ac.in", "admissions@mits.ac.in"] },
  { icon: Clock, title: "Office Hours", lines: ["Mon – Fri: 9:00 AM – 5:00 PM", "Sat: 9:00 AM – 1:00 PM"] },
];

const About = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We will get back to you shortly." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <SEO
        title="About MITS Madanapalle – History, Vision & Leadership"
        description="Learn about Madanapalle Institute of Technology & Science – established 1998, NAAC A+ deemed university in Andhra Pradesh. Vision, mission, leadership, and institutional achievements."
        canonical="/about"
      />
      <main>
        {/* Hero */}
        <section
          className="relative pt-32 md:pt-44 pb-24 overflow-hidden"
          style={{
            backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.2)_70%,rgba(0,0,0,0.4)_100%)]" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p
              className="text-[#ffb300] font-extrabold tracking-[0.2em] uppercase text-sm sm:text-sm mb-4"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8)" }}
            >
              About MITS
            </p>
            <h1
              className="font-display text-4xl md:text-6xl font-extrabold mb-5 text-white tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                textShadow: "0 3px 15px rgba(0,0,0,0.95), 0 1px 3px rgba(0,0,0,0.9)",
              }}
            >
              Shaping Futures <span className="text-[#ffd15c]" style={{ textShadow: "0 3px 15px rgba(0,0,0,0.95), 0 0 10px rgba(0,0,0,0.8)" }}>Since 1998</span>
            </h1>
            <p
              className="text-white font-medium text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.95), 0 1px 3px rgba(0,0,0,0.9)" }}
            >
              Madanapalle Institute of Technology &amp; Science — a premier institution committed to academic excellence, research innovation, and holistic development.
            </p>
          </div>
          <div className="absolute bottom-4 left-6 z-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-sm text-white/90">
                <li>
                  <Link
                    to="/"
                    className="text-white/80 hover:text-white transition-colors"
                    style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="text-white/60">›</li>
                <li
                  className="text-[#ffd15c] font-bold"
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}
                >
                  About
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* History */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="flex items-center gap-3 mb-4">
                  <History className="w-8 h-8 text-primary" />
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our History</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Madanapalle Institute of Technology & Science (MITS) was established in 1998 in the scenic and serene surroundings of Madanapalle. The institute is ideally situated on a spacious 26.17-acre campus in the Madanapalle–Anantapur Highway (NH-42), near Angallu, approximately 10 km from Madanapalle.
                  <br></br>
                  MITS was founded under the Ratakonda Ranga Reddy Educational Academy, under the leadership of Late Sri N. Krishna Kumar, M.S. (U.S.A.), the then President, and Dr. N. Vijaya Bhaskar Choudary, Ph.D. the visionary leader of the Academy.<br></br>

                  With 28 years of academic excellence, MITS has earned NAAC A+ accreditation and NBA recognition for its programs. In recognition of its quality standards and contributions to higher education, the Government of India has conferred MITS the status of a Deemed to be University under Section 3 of the UGC Act, 1956. vide Notification No. 9-1/2025-U.3(A) dated 15th July, 2025.

                  MITS - Deemed to be University is now governed by the visionary and proactive leadership of Dr. N. Vijaya Bhaskar Choudary, the founder and Chancellor. Redefining the education in the international standard, MITS Deemed to be University, now continues to strive with a total commitment and dedication to establish the institution as one of the foremost centers of academic excellence in India. With well-defined strategies and action plans that align with the evolving needs of the globe, MITS Deemed to be University has set forth its educational Odyssey.
                </p>
                {/* <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  The institution is located in Madanapalle, Annamayya District, Andhra Pradesh, nestled in the scenic Horsely Hills region. MITS has consistently expanded its academic offerings and research capabilities, earning NAAC A+ accreditation and NBA recognition for multiple programs.
                </p> */}
                {/* <p className="text-muted-foreground text-lg leading-relaxed">
                  Today, MITS serves over 12,000 students across 4 schools — Engineering, Computing, Management, and Science — with 600+ faculty members and a growing network of global academic and industry partners.
                </p> */}
              </ScrollReveal>
              <ScrollReveal direction="right">
                <img
                  src={`${BASE}Hero-Section/image%201.JPG`}
                  alt="MITS Campus"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Vision, Mission & EOMS Policy */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-7xl">
            <ScrollReveal>
              <div className="text-center mb-14">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Vision, Mission &amp; EOMS Policy</h2>
              </div>
            </ScrollReveal>

            {/* Top row: Vision & Mission side-by-side */}
            <div className="grid md:grid-cols-2 gap-8 mb-8 items-stretch">
              <ScrollReveal direction="left">
                <div className="bg-card border border-border rounded-xl p-8 md:p-10 shadow-sm h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5 shrink-0 shadow-sm">
                      <Eye className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-card-foreground mb-4">Vision</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify text-base">
                      To serve our region, nation and world through academic excellence, research relevance, and community engagement while emphasizing the importance of the individuals.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="bg-card border border-border rounded-xl p-8 md:p-10 shadow-sm h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 shrink-0 shadow-sm">
                      <Target className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-card-foreground mb-4">Mission</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify text-base">
                      The MITS - Deemed to be University is committed to providing a dynamic and inclusive learning environment that nurtures intellectual curiosity, promotes critical thinking, and cultivates ethical leadership. Our mission is to empower students with the knowledge, skills, and values necessary to thrive in a rapidly changing global society.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Bottom row: EOMS Policy full width */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-card border border-border rounded-xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border/60">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0 shadow-sm text-secondary-foreground">
                      <EomsLogo className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-card-foreground">EOMS Policy</h3>
                      <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-0.5">
                        Educational Organizations Management System &bull; ISO 21001:2018
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20 self-start sm:self-auto">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>ISO 21001:2018 Certified</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-justify text-base">
                    Madanapalle Institute of Technology &amp; Science (MITS) Deemed to be University is committed to bring out and nurture the talents and skills of youth in the fields of Engineering and Management to cater to the challenging needs of Society and Industry by
                  </p>

                  <ul className="space-y-2.5 my-4">
                    {[
                      "Contributing to the Academic standards and overall knowledge development of the Students",
                      "Providing excellent Infrastructure and a conducive learning environment",
                      "Enhancing the competence of Faculty and promoting R & D Programs",
                      "Collaborating with Institutions and Industries",
                      "Ensuring continual improvement of Educational Organizations Management System",
                    ].map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground leading-relaxed text-justify text-base">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                        <span className="flex-1">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-muted-foreground leading-relaxed text-justify text-base">
                    We identify, understand, and address the needs and expectations of all Stakeholders and are committed to complying with all applicable statutory and regulatory requirements and to fulfilling our social responsibilities towards the Community and Society at large. Further, we are dedicated to safeguarding Intellectual Property through appropriate policies, practices and respect for Innovations and Research outcomes.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-muted-foreground font-medium">
                    Internal Quality Assurance Cell (IQAC) &bull; Educational Organizations Management System
                  </span>
                  <a
                    href="https://mits.ac.in/public/uploads/naac/EOMS%20Policy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
                  >
                    Official Policy PDF <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Administration</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership</h2>
              </div>
            </ScrollReveal>

            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-8">
                  <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Administration</p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">Institutional Leadership</h3>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {institutional.map((person, i) => (
                  <ScrollReveal key={person.slug} delay={i * 0.06}>
                    <Link
                      to={`/about/leadership/${person.slug}`}
                      className="group block bg-card border border-border rounded-xl p-6 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                    >
                      <div className="w-20 h-20 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4 overflow-hidden">
                        <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display text-lg font-bold text-card-foreground mb-1 min-h-[3rem] flex items-center justify-center">{person.name}</h4>
                        <p className="text-primary font-semibold text-sm mb-2">{person.designation}</p>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <div className="text-center mb-8">
                  <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Academic</p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">Academic Leadership</h3>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {academic.map((person, i) => (
                  <ScrollReveal key={person.slug} delay={i * 0.06}>
                    <Link
                      to={`/about/leadership/${person.slug}`}
                      className="group block bg-card border border-border rounded-xl p-6 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                    >
                      <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4 overflow-hidden">
                        <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display text-lg font-bold text-card-foreground mb-1 min-h-[3rem] flex items-center justify-center">{person.name}</h4>
                        <p className="text-primary font-semibold text-sm mb-2">{person.designation}</p>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Recognition</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Institutional Achievements</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {achievements.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <div className="bg-white/10 border border-white/15 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Facilities</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Infrastructure Overview</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {infrastructure.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Reach Us</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
              {contactInfo.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm text-center h-full hover:shadow-lg transition-all">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-primary flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-muted-foreground text-sm">{line}</p>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Form & Map */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ScrollReveal direction="left">
                <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                  <h2 className="font-display text-2xl font-bold text-card-foreground mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                      <input
                        type="text"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                    <textarea
                      placeholder="Your Message *"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    />
                    <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 rounded-full">
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5!2d78.4867!3d13.5535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb28cb0e7c5b5e7%3A0xae7e3e8c1b9e3f47!2sMadanapalle%20Institute%20of%20Technology%20%26%20Science!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MITS Location"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

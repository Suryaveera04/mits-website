import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { BookOpen, Brain, Building2, FlaskConical, GraduationCap, Microscope, Users, Calendar, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BASE = import.meta.env.BASE_URL;

const schools = [
  {
    name: "School of AI & ML",
    depts: [
      "Computer Science and Engineering (Artificial Intelligence)",
      "Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
      "Computer Science and Engineering (Artificial Intelligence and Data Science)",
      "Computer Science and Engineering with Specialisation in Artificial Intelligence and Robotics"
    ],
    icon: Brain,
  },
  {
    name: "School of Computing",
    depts: [
      "Computer Science & Engineering",
      "Computer Science and Engineering (Cyber Security)",
      "BCA",
      "Master of Computer Applications"
    ],
    icon: Monitor,
  },
  {
    name: "School of Engineering",
    depts: [
      "Bioinformatics",
      "Civil Engineering",
      "Electrical and Electronics Engineering",
      "Electronics & Communication Engg",
      "Mechanical Engineering"
    ],
    icon: Building2,
  },
  {
    name: "School of Management",
    depts: [
      "BBA",
      "MBA"
    ],
    icon: Users,
  }
];

const features = [
  { icon: BookOpen, title: "Academic Regulations", desc: "OBE-aligned curriculum framework with choice-based credit system and continuous assessment." },
  { icon: Users, title: "Experienced Faculty", desc: "600+ faculty members including PhDs, industry practitioners, and international collaborators." },
  { icon: Microscope, title: "Advanced Laboratories", desc: "State-of-the-art labs for computing, engineering, sciences, and interdisciplinary research." },
  { icon: Calendar, title: "Academic Calendar", desc: "Structured semester schedule with exam dates, events, and academic milestones." },
];

const Academics = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SEO
        title="Academics at MITS Madanapalle – B.Tech, M.Tech, MBA, MCA"
        description="Explore academic programmes at MITS Madanapalle – B.Tech, M.Tech, MBA, MCA across 4 schools. OBE curriculum, 600+ faculty, NBA-accredited departments, AICTE approved."
        canonical="/academics"
      />
      <main>
        <section
          className="relative pt-32 md:pt-40 pb-20 overflow-hidden"
          style={{
            backgroundImage: `url("${BASE}Hero-Section/image-2.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Academics</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              Academic Excellence <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">at MITS</span>
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto mb-6">
              Explore programs across four schools with outcome-based education, industry alignment, and research integration.
            </p>
            <Link to="/departments">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-7 rounded-full">
                View Departments
              </Button>
            </Link>
          </div>
          <div className="absolute bottom-4 left-6 z-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-sm">
                <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/50">›</li>
                <li className="text-white font-semibold">Academics</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Schools</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Schools & Departments</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {schools.map((school, i) => (
                <ScrollReveal key={school.name} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                        <school.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-card-foreground">{school.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {school.depts.map((dept) => (
                        <li key={dept} className="text-muted-foreground text-sm flex items-center gap-2 text-left tracking-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span>{dept}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Programs</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Programs Offered</h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  MITS offers UG, PG, and PhD programs across Engineering, Computing, Management, and Science.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { label: "Undergraduate", count: "12 Programs", icon: GraduationCap },
                { label: "Postgraduate", count: "8 Programs", icon: BookOpen },
                { label: "PhD", count: "10+ Disciplines", icon: Microscope },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 mx-auto rounded-lg bg-secondary flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-secondary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-card-foreground mb-1">{item.label}</h3>
                    <p className="text-primary font-semibold text-sm">{item.count}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Academic Framework</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {features.map((item, i) => (
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
      </main>
      <Footer />
    </div>
  );
};

export default Academics;



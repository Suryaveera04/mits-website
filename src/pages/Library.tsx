import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  Globe,
  Monitor,
  Home,
  ChevronRight,
  Database,
  ExternalLink,
  MapPin,
  Mail,
  Phone,
  Award,
  FileText,
  Newspaper,
  Disc,
  Printer,
  Copy,
  ScanLine,
  Barcode,
  Library as LibraryIcon,
  BookMarked,
  Sparkles,
  Wifi,
  Users,
  ShieldCheck,
  Calendar,
  Download,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  libraryStats,
  digitalResources,
  memberships,
  facilities,
  services,
  collections,
  quickAccess,
  libraryContact,
  quickLibraryActions,
  libraryAchievements,
  libraryEvents,
  libraryContacts,
} from "@/data/libraryData";

const BASE = import.meta.env.BASE_URL;
const heroImg = `${BASE}departments/department images/library.png`;
const galleryImgs = [
  `${BASE}infrastructure/library/library-2.webp`,
  `${BASE}infrastructure/library/library-3.webp`,
  `${BASE}infrastructure/library/library-4.webp`,
  `${BASE}gallery/lib1.jpg`,
];

const useCountUp = (target: number, duration = 1400, start = false) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    const startTime = performance.now();

    const tick = (time: number) => {
      const progress = Math.min(1, (time - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return value;
};

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
    {eyebrow && <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">{eyebrow}</p>}
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-lg mt-4 leading-relaxed">{subtitle}</p>}
    <div className="h-1 w-16 bg-primary rounded-full mx-auto mt-5" />
  </div>
);

const StatCard = ({
  stat,
  icon: Icon,
  index,
}: {
  stat: (typeof libraryStats)[0];
  icon: typeof BookOpen;
  index: number;
}) => {
  const [inView, setInView] = useState(false);
  const count = useCountUp(stat.value, 1400, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      onViewportEnter={() => setInView(true)}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
      className="group relative rounded-2xl border border-border/80 bg-white p-5 md:p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">{stat.key}</span>
          <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            <Icon className="w-4 h-4" />
          </div>
        </div>
        <p className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          {count.toLocaleString()}
          {stat.suffix && <span className="text-primary text-2xl ml-0.5">{stat.suffix}</span>}
        </p>
        <p className="text-sm font-semibold text-secondary mt-1">{stat.label}</p>
      </div>
      {stat.note && (
        <p className="text-[11px] text-muted-foreground border-t border-border/60 pt-2.5 mt-4">{stat.note}</p>
      )}
    </motion.div>
  );
};

const Library = () => {
  const statIconFor = (key: string) => {
    const map: Record<string, typeof BookOpen> = {
      titles: BookOpen,
      volumes: LibraryIcon,
      reference: BookMarked,
      ebooks: Monitor,
      ejournals: Newspaper,
      projectReports: FileText,
      boundVolumes: Disc,
      cdroms: Disc,
      digitalSystems: Database,
      newspapers: Newspaper,
      periodicals: Globe,
      magazines: Newspaper,
    };

    return map[key] || BookOpen;
  };

  const facilityIconFor = (title: string) => {
    const map: Record<string, typeof BookOpen> = {
      "Digital Library": Monitor,
      "SOUL 3.0": Database,
      Photocopying: Copy,
      Printing: Printer,
      Scanning: ScanLine,
      Barcoding: Barcode,
      "Reading Hall": Users,
      "Reference Section": BookMarked,
      "Internet & Wi-Fi": Wifi,
      "Remote Access": Globe,
    };

    return map[title] || Sparkles;
  };

  const serviceByTitle = Object.fromEntries(services.map((service) => [service.title, service.desc])) as Record<string, string>;

  const audienceServices = [
    {
      key: "students",
      label: "Students",
      note: "Borrow print material, discover the catalogue and stay connected to the core collection.",
      items: [
        { title: "Book Lending", desc: serviceByTitle["Book Lending"] },
        { title: "Digital Access", desc: serviceByTitle["Digital Access"] },
        { title: "Online OPAC", desc: serviceByTitle["Online Catalogue (OPAC)"] },
        { title: "Reference Help", desc: serviceByTitle["Reference Services"] },
      ],
    },
    {
      key: "faculty",
      label: "Faculty & Staff",
      note: "Access high-impact journals, inter-library requests and research databases.",
      items: [
        { title: "Journal Access", desc: serviceByTitle["Journal Access"] },
        { title: "Research Support", desc: serviceByTitle["Research Support"] },
        { title: "Document Delivery", desc: serviceByTitle["Document Delivery"] },
        { title: "Current Awareness", desc: serviceByTitle["Current Awareness"] },
      ],
    },
    {
      key: "researchers",
      label: "Research Scholars",
      note: "Literature search support, citation assistance and plagiarism guidance.",
      items: [
        { title: "Plagiarism Support", desc: "Turnitin authentication and plagiarism verification assistance." },
        { title: "IEEE & Springer", desc: "Full-text access to IEEE Xplore, Springer Nature and EBSCO." },
        { title: "DELNET Document Delivery", desc: serviceByTitle["Document Delivery"] },
        { title: "Research Guidance", desc: serviceByTitle["Research Support"] },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEO
        title="Central Library | MITS Madanapalle — Print, Digital & Research Access"
        description="Explore the Central Library at MITS Madanapalle. Access 64,000+ volumes, 14,000+ e-books, IEEE, Springer, EBSCO databases, SOUL 3.0 OPAC and DELNET services."
        canonical="/library"
      />

      <Header />

      <main>
        {/* Exact Hero Section from User Screenshot */}
        <section
          className="relative pt-32 md:pt-44 pb-24 overflow-hidden"
          style={{
            backgroundImage: `url("${heroImg}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p className="text-[#ffb300] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
              CENTRAL LIBRARY
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Knowledge Access <span className="text-[#ffd15c]">at MITS</span>
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
              The Central Library is the academic spine of the campus, combining print collections, digital access, research support and quiet study spaces in one fully computerised environment.
            </p>
          </div>

          {/* Bottom Left Breadcrumb Navigation (Exact match to screenshot: Home › About › Central Library) */}
          <div className="absolute bottom-4 left-6 z-10 hidden sm:block">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-xs text-white/80">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-white/50">›</li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li className="text-white/50">›</li>
                <li className="text-amber-300 font-semibold">Central Library</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
              <ScrollReveal>
                <div>
                  <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">About</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                    A modern knowledge resource centre for teaching and research
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                    <p>
                      The Central Library at MITS is the intellectual heart of the campus — a spacious, fully computerised facility with a rich collection of print and digital resources spanning engineering, sciences, management, humanities and research.
                    </p>
                    <p>
                      The library operates on the INFLIBNET <strong className="text-foreground">SOUL 3.0 Integrated</strong> library management system and offers barcoded circulation, an online OPAC, and network-wide document delivery via <strong className="text-foreground">DELNET</strong>.
                    </p>
                    <p>
                      With access to <strong className="text-foreground">IEEE, Springer Nature, EBSCO</strong>, and the <strong className="text-foreground">National Digital Library of India</strong>, students and faculty gain a research-ready digital environment alongside the print collection.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.12}>
                <div className="space-y-4">
                  <Card className="p-6 border-border shadow-sm">
                    <div className="flex items-center gap-2 text-primary font-bold mb-3">
                      <Sparkles className="w-4 h-4" /> Mission
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      To acquire, organise and disseminate high-quality knowledge resources that empower academic excellence, innovation and lifelong learning.
                    </p>
                  </Card>

                  <Card className="p-6 border-border shadow-sm">
                    <div className="flex items-center gap-2 text-secondary font-bold mb-3">
                      <Award className="w-4 h-4" /> What the library supports
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {[
                        "A diverse print and digital collection aligned to curriculum and research.",
                        "24x7 access pathways to e-resources on campus and remotely.",
                        "Research productivity through database access and document delivery.",
                        "An inclusive, technology-enabled learning environment for all users.",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  {/* e-Content Callout Box */}
                  <Card className="p-6 bg-gradient-to-br from-primary via-[#7a0a0d] to-slate-900 text-white border-none shadow-lg">
                    <div className="flex items-center gap-2 text-amber-300 font-bold mb-2 text-xs uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" /> Digital Repository
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-2">e-Content & Faculty Video Lectures</h3>
                    <p className="text-xs text-white/80 leading-relaxed mb-4">
                      Access courseware, video lectures, SOPs, lab manuals, and digital learning assets created by MITS faculty across departments.
                    </p>
                    <Button asChild size="sm" className="w-full bg-amber-400 text-slate-950 hover:bg-white font-bold text-xs">
                      <Link to="/e-content">
                        <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                        Open e-Content Portal
                        <ChevronRight className="w-3.5 h-3.5 ml-auto" />
                      </Link>
                    </Button>
                  </Card>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Clean, Compact Quick Action Links Section */}
        <section id="quick-links" className="py-10 bg-muted/40 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <p className="text-primary font-bold text-xs uppercase tracking-widest">Library Direct Services</p>
              <h3 className="font-display text-2xl font-bold text-foreground">Quick Actions & Portals</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Plagiarism Button */}
              <a
                href={quickLibraryActions[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-border bg-white hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Plagiarism Check</h4>
                    <p className="text-xs text-muted-foreground">Turnitin Portal</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>

              {/* Digital Library Button */}
              <a
                href={quickLibraryActions[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-border bg-white hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Digital Library</h4>
                    <p className="text-xs text-muted-foreground">GDLC Intranet</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>

              {/* Previous Year Papers Button */}
              <Link
                to={quickLibraryActions[2].href}
                className="group flex items-center justify-between p-4 rounded-xl border border-border bg-white hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Previous Year Papers</h4>
                    <p className="text-xs text-muted-foreground">Exam Question Bank</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </Link>

              {/* Plagiarism Request Letter Button */}
              <a
                href={quickLibraryActions[3].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-border bg-white hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors">Plagiarism Request Letter</h4>
                    <p className="text-xs text-muted-foreground">Verification Form PDF</p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Statistics"
              title="Library at a glance"
              subtitle="Official collection figures from the Central Library, presented once and in full."
            />
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
              {libraryStats.map((stat, index) => (
                <StatCard key={stat.key} stat={stat} icon={statIconFor(stat.key)} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Digital Resources */}
        <section id="digital-resources" className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Digital Resources"
              title="Collections, e-resources and quick access in one place"
              subtitle="A unified view of print holdings, research databases, remote access platforms and official portals."
            />

            <div className="grid lg:grid-cols-[1fr_1.05fr] gap-8 items-start">
              <ScrollReveal>
                <Card className="overflow-hidden border-border/80 shadow-sm h-full">
                  <div className="border-b border-border bg-secondary/5 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Collections</p>
                        <h3 className="font-display text-xl font-bold text-foreground">Print and digital stock</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {collections
                        .filter((collection) => collection.title !== "Research Resources")
                        .map((collection) => (
                          <div
                            key={collection.title}
                            className="rounded-xl border border-border bg-muted/30 px-4 py-3"
                          >
                            <div className="text-sm uppercase tracking-[0.18em] text-primary font-semibold">
                              {collection.title}
                            </div>
                            <div className="font-display text-xl font-bold text-foreground mt-1">
                              {collection.value}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.12}>
                <Card className="overflow-hidden border-border/80 shadow-sm">
                  <div className="border-b border-border bg-secondary/5 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Database className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">E-Databases</p>
                        <h3 className="font-display text-xl font-bold text-foreground">Subscribed electronic resources</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-secondary mb-3">
                        Subscribed E-Journals
                      </h4>
                      <div className="space-y-3">
                        {digitalResources
                          .filter((resource) => resource.category === "Journals")
                          .map((resource) => (
                            <a
                              key={resource.name}
                              href={resource.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-white p-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
                            >
                              <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                                    {resource.name}
                                  </span>
                                  {resource.count && (
                                    <span className="inline-flex rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-semibold text-secondary">
                                      {resource.count}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{resource.desc}</p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                            </a>
                          ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-secondary mb-3">
                        E-resources and systems
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {digitalResources
                          .filter((resource) => resource.category !== "Journals")
                          .map((resource) => (
                            <a
                              key={resource.name}
                              href={resource.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-xl border border-border bg-muted/25 p-4 hover:border-primary/40 hover:shadow-sm transition-all"
                            >
                              <div className="text-sm font-bold text-foreground">{resource.name}</div>
                              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{resource.desc}</p>
                            </a>
                          ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-secondary mb-3">
                        Memberships
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {memberships.map((membership) => (
                          <span
                            key={membership.title}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/5 px-3 py-1.5 text-sm font-semibold text-secondary"
                          >
                            {membership.title}
                            <span className="rounded-full bg-white/70 px-2 py-0.5 text-[10px] font-bold text-primary">
                              {membership.id}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-secondary mb-3">
                        Quick access
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {quickAccess.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-2 text-sm font-semibold text-secondary hover:bg-primary hover:text-white transition-colors"
                          >
                            {item.title}
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS & EVENTS SECTION */}
        <section className="py-20 bg-background border-y border-border/80">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Achievements */}
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm h-full">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3 border-b border-border pb-4">
                    <Award className="w-6 h-6 text-primary" />
                    Achievements
                  </h3>
                  <ul className="space-y-4">
                    {libraryAchievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-secondary/85 leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-red-700 shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Events */}
              <ScrollReveal delay={0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3 border-b border-border pb-4">
                      <Calendar className="w-6 h-6 text-primary" />
                      Events
                    </h3>
                    <div className="space-y-6">
                      {libraryEvents.map((evt, idx) => (
                        <div key={idx} className="p-4 rounded-xl border border-border bg-muted/30 space-y-2">
                          <p className="text-sm font-bold text-foreground leading-relaxed flex items-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-700 shrink-0 mt-2" />
                            {evt.title}
                          </p>
                          <a
                            href={evt.reportUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline pt-1 pl-4"
                          >
                            <span>Click here for Report on Event</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Facilities"
              title="Library facilities that support study and access"
              subtitle="Merged physical and digital infrastructure presented as one cohesive support system."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {facilities.map((facility, index) => {
                const Icon = facilityIconFor(facility.title);

                return (
                  <motion.div
                    key={facility.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
                  >
                    <Card className="p-6 h-full border-border shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-foreground text-lg mb-2">{facility.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{facility.desc}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading eyebrow="Gallery" title="Inside the Central Library" subtitle="A concise visual snapshot of the reading and digital spaces." />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryImgs.map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.05, 0.3) }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-secondary/90"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center blur-xl scale-110 opacity-30"
                    style={{ backgroundImage: `url(${src})` }}
                    aria-hidden
                  />
                  <img
                    src={src}
                    alt="Central Library"
                    loading="lazy"
                    className="relative z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    onError={(event) => {
                      (event.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* REACH THE LIBRARY SECTION */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <SectionHeading eyebrow="Contact" title="Reach the library" subtitle="Contact details and working hours for visits, assistance and enquiries." />

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              <Card className="p-6 md:p-7 border-border shadow-sm">
                <h3 className="font-display font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Location and contact
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3 text-muted-foreground leading-relaxed">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{libraryContact.location}</span>
                  </div>
                  <a href={`mailto:${libraryContact.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <span>{libraryContact.email}</span>
                  </a>
                  <a href={`tel:${libraryContact.phone}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <span>{libraryContact.phone}</span>
                  </a>
                </div>
              </Card>

              <Card className="p-6 md:p-7 border-border shadow-sm">
                <h3 className="font-display font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" /> Working hours
                </h3>
                <div className="space-y-3 text-sm">
                  {libraryContact.hours.map((hour) => (
                    <div key={hour.day} className="flex items-center justify-between gap-4 border-b border-border last:border-0 pb-2.5 last:pb-0">
                      <span className="text-muted-foreground font-medium">{hour.day}</span>
                      <span className="font-bold text-foreground">{hour.time}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Individual Librarians Contact Cards */}
            <div className="pt-8 border-t border-border/80">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground">Library Administration</h3>
                <p className="text-sm text-muted-foreground mt-1">Direct contact information for the Central Librarians</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {libraryContacts.map((contact, idx) => (
                  <Card key={idx} className="p-6 md:p-7 border-border shadow-sm space-y-4">
                    <div>
                      <h4 className="font-display text-xl font-bold text-red-800 dark:text-red-400">{contact.name}</h4>
                      <p className="text-sm font-bold text-red-900 dark:text-red-300">{contact.designation}</p>
                    </div>
                    
                    <div className="space-y-3 text-sm pt-2 border-t border-border">
                      <div>
                        <p className="font-bold text-red-900 dark:text-red-400">Address:</p>
                        <p className="text-muted-foreground mt-1 leading-relaxed">{contact.address}</p>
                      </div>
                      <div>
                        <p className="font-bold text-red-900 dark:text-red-400">Phone:</p>
                        <a href={`tel:${contact.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {contact.phone}
                        </a>
                      </div>
                      <div>
                        <p className="font-bold text-red-900 dark:text-red-400">Email:</p>
                        <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Library;

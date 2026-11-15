import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  BookOpen, FlaskConical, Lightbulb, Microscope, FileText, Award,
  Building2, GraduationCap, Globe, Download, ExternalLink, Calendar,
  Users, ChevronDown, ChevronRight, Mail, Phone, Shield, Briefcase,
  Target, Eye, ArrowRight, Layers, Scale, TrendingUp, Rocket, Droplets,
  Sparkles, Trophy, Handshake, Library, Wrench, Recycle,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  researchOverview, projectsData, publicationsData, writingTipsContent,
  policiesData, eventsData, iprCellData,
  researchVisionMission, keyAchievements, scopusPublications,
  projectFunding, patentsAYWise, patentTotals,
  mitsFoundationData, collaborationData,
  ipfcData, consultancyData, innovationData, researchCentresData,
  academicResearchData, yearWisePublications,committeeData,wosPublications,hIndexTrend,
} from "@/data/researchData";
import BarChart from "@/components/research/BarChart";

const BASE = import.meta.env.BASE_URL;

const sectionTabs = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "publications", label: "Publications", icon: FileText },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "patents", label: "Patents", icon: Lightbulb },
  { id: "policies", label: "Policies & Committees", icon: Shield },
  { id: "events", label: "Events", icon: Calendar },
  // { id: "documents", label: "Documents", icon: Layers },
  // { id: "advisory", label: "Advisory", icon: Users },
  // { id: "committee", label: "Committee", icon: Users },
  { id: "academic", label: "Academic Research Programs", icon: GraduationCap },
  { id: "ipr", label: "IPR Cell", icon: Scale },
  { id: "collaborations", label: "Collaborations", icon: Handshake },
  { id: "innovation", label: "Innovation", icon: Sparkles },

  { id: "foundation", label: "MITS Foundation", icon: Rocket },
  { id: "mdrf", label: "MDRF", icon: Globe },
  { id: "wwrc", label: "WWRC", icon: Recycle },
];

/* --- Reusable Card --- */
const LinkCard = ({ title, link, icon: Icon = ExternalLink }: { title: string; link: string; icon?: React.ElementType }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
  >
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all">
      <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
    </div>
    <span className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors flex-1">{title}</span>
    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
  </a>
);

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-8">
    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
    {subtitle && <p className="text-muted-foreground mt-2 max-w-3xl">{subtitle}</p>}
  </div>
);

/* --- OVERVIEW TAB --- */
const OverviewSection = () => (
  <div className="space-y-8">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="About Research & Development Cell" />
        <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
          In alignment with the vision of the University to promote academic excellence, innovation
          and impactful research, the Research &amp; Development (R&amp;D) Cell at MITS, Deemed to
          be University, strengthens and supports the university's research ecosystem. The Cell
          facilitates and monitors research publications, sponsored projects, patents, technology
          transfer and consultancy activities, and plays a vital role in fostering interdisciplinary
          research, innovation, and academic & technological growth of the Institution.
        </p>
        {/* <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-primary" /> Recognised Research Centre
            </h3>
            <p className="text-muted-foreground text-sm">{researchOverview.recognisedCenter}</p>
          </div>
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
            <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-accent" /> Ph.D. Stipend
            </h3>
            <p className="text-muted-foreground text-sm">{researchOverview.scholarStipend}</p>
          </div>
        </div> */}
        {/* <a
          href={researchOverview.enrolledScholarsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
        >
          <Download className="w-4 h-4" /> List of Enrolled Research Scholars
        </a> */}
      </div>
    </ScrollReveal>

    {/* Vision / Mission */}
    <ScrollReveal delay={0.05}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2 mb-3">
            <Eye className="w-5 h-5 text-primary" /> Vision
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed text-justify">{researchVisionMission.vision}</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-primary" /> Mission
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed text-justify">{researchVisionMission.mission}</p>
        </div>
      </div>
    </ScrollReveal>

    {/* Objectives */}
    <ScrollReveal delay={0.08}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Objectives of R&D Cell" />
        <ul className="grid sm:grid-cols-2 gap-3">
          {researchVisionMission.objectives.map((o, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>

    {/* Key Achievements stat grid */}
    <ScrollReveal delay={0.1}>
      <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Key Research Achievements" subtitle="A consolidated snapshot of MITS research performance and recognitions." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {keyAchievements.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="relative bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-2xl font-bold text-foreground leading-tight">{k.value}</p>
                  <p className="text-sm font-semibold text-card-foreground mt-1">{k.label}</p>
                  {k.sub && <p className="text-sm text-muted-foreground mt-1">{k.sub}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollReveal>

    {/* H-Index chart
    <ScrollReveal delay={0.12}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="H-Index Growth" subtitle="MITS institutional H-Index trend (Scopus, 2019  -  2025)." />
        <div className="flex items-center gap-3 mb-4 text-sm">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">H-Index has grown from <b className="text-foreground">21</b> in 2019 to <b className="text-foreground">70</b> in 2025.</span>
        </div>
        <BarChart data={hIndexTrend} rotateLabels={false} height={280} />
      </div>
    </ScrollReveal> */}

    {/* Contacts */}
    <ScrollReveal delay={0.15}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="R&D Cell Leadership" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {researchOverview.contacts.map((c) => (
            <div key={c.email} className="border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-card-foreground text-sm">{c.name}</h4>
              <p className="text-primary text-sm font-medium mb-2">{c.role}</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {c.email}</p>
                <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {c.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* --- PROJECTS TAB --- */
const ProjectsSection = () => (
  <div className="space-y-8">
    {/* Funding analytics */}
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="About Projects" />
        <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
          The faculty members of MITS, Deemed to be University have consistently exhibited a strong commitment to research, innovation,
           and academic excellence through their active involvement in sponsored research and development activities. The university has 
           attracted research/seminar/conference grants from renowned national funding agencies including DST, SERB, ISRO, MSME, ICSSR, UGC,
            AICTE, ANRF and several other governmental and industrial organizations.  These projects exhibit a consistent emphasis on STEM research 
            fields and collaborations with many organizations to tackle current issues. This demonstrates the organization's commitment towards significant research and development. 
            Researchers at MITS are engaged in carrying out impactful projects in diverse areas such as science, engineering, emerging technologies, healthcare, sustainability, 
            and interdisciplinary domains. Along with successfully completed and ongoing projects, faculty members continuously submit innovative research proposals to various funding agencies,
             reflecting the institution - s vibrant research ecosystem and dedication to solving real-world societal and technological challenges. 
             These efforts demonstrate MITS University - s emphasis on high-quality research, industry interaction, innovation-led growth, and meaningful contributions to national and global scientific advancement.
        </p>
      </div>
    </ScrollReveal>
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Project Funding Analytics" subtitle="Year-wise sanctioned project funding (Amount in ₹ Lakhs)." />
        <div className="grid place-items-center mb-6">
  <div className="w-full max-w-md bg-primary/5 border border-primary/20 rounded-xl p-5">
    <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
      Total Sanctioned
    </p>
    <p className="font-display text-3xl font-bold text-primary mt-1">
      ₹18.46 Cr
    </p>
    <p className="text-sm text-muted-foreground mt-1">
      Cumulative Research Projects / Workshops/ seminar grants till date
    </p>
  </div>
</div>
        <div className="mb-2 text-center">
  <p className="text-sm font-semibold text-muted-foreground">Amount in ₹ Lakhs</p>
</div>
<BarChart data={projectFunding} height={300} />  
</div>  </ScrollReveal>

    <ScrollReveal delay={0.05}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Sanctioned Research Projects" subtitle="Download year-wise funded project reports." />
         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {projectsData.sanctionedProjects.yearWise.map((y) => (
            <a
              key={y.year}
              href={(y as any).local ? `${BASE}${y.link}` : y.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group"
            >
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">A.Y. {y.year}</span>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground ml-auto group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.1}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Research Resources" />
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <LinkCard title="Research Areas" link={projectsData.subSections[0].link!} icon={Microscope} />
        </div>
        <div className="border border-border rounded-xl p-5 bg-muted/20">
          <h3 className="font-display text-lg font-bold text-foreground mb-2 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" /> Writing Tips for Research Proposals
          </h3>
          <p className="text-sm text-muted-foreground mb-4 text-justify">{writingTipsContent.intro}</p>
          <Accordion type="single" collapsible>
            {writingTipsContent.sections.map((s, i) => (
              <AccordionItem key={i} value={`tip-${i}`}>
                <AccordionTrigger className="text-sm font-semibold text-foreground">{s.heading}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1.5">
                    {s.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </ScrollReveal>


    <ScrollReveal delay={0.15}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Research Facilities" subtitle="Advanced lab equipment across departments." />
        <div className="grid sm:grid-cols-2 gap-3">
          {projectsData.subSections[1].items?.map((item) => (
            <LinkCard key={item.title} title={item.title} link={item.link} icon={FlaskConical} />
          ))}
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.2}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Funding Agencies" subtitle="National agencies providing research grants." />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {[
            { name: "Department of Science & Technology",          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Emblem_of_India.svg/120px-Emblem_of_India.svg.png",                                                                    link: "https://dst.gov.in/" },
            { name: "AICTE",                                        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/AICTE_Logo.svg/200px-AICTE_Logo.svg.png",                                                                                    link: "https://www.aicte-india.org/" },
            { name: "AP State Disaster Management Authority",       logo: "https://apsdma.ap.gov.in/images/apsdma-logo.png",                                                                                                                                link: "https://apsdma.ap.gov.in/" },
            { name: "DAE",                                          logo: "https://dae.gov.in/sites/default/files/dae-logo.png",                                                                                                                            link: "https://dae.gov.in/" },
            { name: "DRDO",                                         logo: "https://www.drdo.gov.in/sites/default/files/inline-images/drdo-logo.png",                                                                                                        link: "https://www.drdo.gov.in/" },
            { name: "ICMR",                                         logo: "https://main.icmr.nic.in/sites/default/files/ICMR_New_Logo.png",                                                                                                                link: "https://main.icmr.nic.in/" },
            { name: "ICSSR",                                        logo: "https://icssr.org/sites/default/files/icssr-logo.png",                                                                                                                           link: "https://icssr.org/" },
            { name: "ISRO",                                         logo: "https://www.isro.gov.in/media_isro/image/index/Isro_logo.png.webp",                                                                                                             link: "https://www.isro.gov.in/" },
            { name: "MeitY",                                        logo: "https://www.meity.gov.in/sites/upload_files/dit/files/meity-logo.png",                                                                                                           link: "https://www.meity.gov.in/" },
            { name: "MSME",                                         logo: "https://msme.gov.in/sites/default/files/msme-logo.png",                                                                                                                          link: "https://msme.gov.in/" },
            { name: "SERB / ANRF",                                  logo: "https://anrf.gov.in/sites/default/files/2023-09/ANRF-Logo.png",                                                                                                                 link: "https://anrf.gov.in/" },
            { name: "UGC",                                          logo: "https://www.ugc.gov.in/images/ugc-logo.png",                                                                                                                                     link: "https://www.ugc.gov.in/" },
            { name: "Ministry of Education",                        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Emblem_of_India.svg/120px-Emblem_of_India.svg.png",                                                                    link: "https://www.education.gov.in/" },
            { name: "Ministry of Environment, Forest & Climate Change", logo: "https://moef.gov.in/wp-content/uploads/2017/08/moef-logo.png",                                                                                                             link: "https://moef.gov.in/" },
            { name: "DBT",                                          logo: "https://dbtindia.gov.in/sites/default/files/DBT%20Logo%20New_0.png",                                                                                                            link: "https://dbtindia.gov.in/" },
          ].map((agency) => (
            <a
              key={agency.name}
              href={agency.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 bg-card border border-border rounded-2xl p-4 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group min-h-[120px]"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={agency.logo}
                  alt={agency.name}
                  className="max-h-16 max-w-[64px] object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.style.display = "none";
                    (t.nextElementSibling as HTMLElement)?.classList.remove("hidden");
                  }}
                />
                <span className="hidden w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary text-center leading-tight p-1">{agency.name.slice(0,4)}</span>
              </div>
              <span className="text-[10px] font-semibold text-muted-foreground group-hover:text-primary transition-colors text-center leading-tight line-clamp-2">{agency.name}</span>
            </a>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* --- PUBLICATIONS TAB --- */
const PublicationsSection = () => {
  const [openYear, setOpenYear] = useState<string>(publicationsData.topRated[0].year);
  return (
    <div className="space-y-6">
      {/* Stat strip */}
      <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="About Publications" />
        <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
          MITS, Deemed to be University has emerged as a distinguished centre for research, innovation,
           and knowledge creation with a strong commitment toward addressing global challenges through impactful scientific contributions.
          The university has consistently demonstrated excellence in research through quality publications in reputed international and national journals, conferences, and academic proceedings 
          indexed in Scopus and Web of Science databases. With a rapidly growing research ecosystem, MITS has made remarkable contributions in emerging areas such as Artificial Intelligence, 
          Machine Learning, Smart Healthcare, Renewable Energy, Advanced Materials, Cyber Security, Sustainable Infrastructure, and Data Science.
          The institution - s research initiatives are closely aligned with the United Nations Sustainable Development Goals (SDGs), contributing to advancements in healthcare, clean energy, environmental sustainability, smart technologies, and societal development.
          Faculty members and researchers at MITS actively collaborate with premier national and international institutions, industries, and research organizations, thereby enhancing the quality, visibility, and global impact of their research outcomes.
        </p>
      </div>
    </ScrollReveal>
      <ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-2xl p-5">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Scopus/WOS Indexed Publications</p>
            <p className="font-display text-3xl font-bold text-primary mt-1">3,200+</p>
            {/* <p className="text-sm text-muted-foreground mt-1"> -  Scopus ID 60107346</p> */}
          </div>
          {/* <div className="bg-card border border-border rounded-2xl p-5">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">SCI / Scopus Articles</p>
            <p className="font-display text-3xl font-bold text-foreground mt-1">3,000+</p>
            <p className="text-sm text-muted-foreground mt-1">Published in reputed indexed journals</p>
          </div> */}
          <div className="bg-card border border-border rounded-2xl p-5">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">H-Index </p>
            <p className="font-display text-3xl font-bold text-accent mt-1">75</p>
            {/* <p className="text-sm text-muted-foreground mt-1">sustained growth</p> */}
          </div>
        </div>
      </ScrollReveal>

      {/* All 3 charts in one section */}
      <ScrollReveal delay={0.05}>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Publications Details</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="border border-border rounded-xl p-5">
              <p className="font-sans text-sm font-semibold text-muted-foreground italic mb-4">Scopus Indexed Publications</p>
              <BarChart data={scopusPublications} height={280} />
            </div>
            <div className="border border-border rounded-xl p-5">
              <p className="font-sans text-sm font-semibold text-muted-foreground italic mb-4">Web of Science Indexed Publications</p>
              <BarChart data={wosPublications} height={280} accent="hsl(var(--accent))" />
            </div>
            <div className="border border-border rounded-xl p-5">
              <p className="font-sans text-sm font-semibold text-muted-foreground italic mb-4">H-Index</p>
              <BarChart data={hIndexTrend} rotateLabels={false} height={280} />
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <SectionHeading title={publicationsData.title} subtitle={publicationsData.subtitle} />
          <div className="space-y-4">
            {publicationsData.topRated.map((yr) => (
              <div key={yr.year} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenYear(openYear === yr.year ? "" : yr.year)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-muted hover:bg-primary/10 transition-colors"
                >
                  <span className="font-display font-bold text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" /> Academic Year: {yr.year}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-primary transition-transform ${openYear === yr.year ? "rotate-180" : ""}`} />
                </button>
                {openYear === yr.year && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary/5 border-b border-border">
                          <th className="text-left px-4 py-3 font-semibold text-foreground">Name</th>
                          <th className="text-left px-4 py-3 font-semibold text-foreground">Dept</th>
                          <th className="text-left px-4 py-3 font-semibold text-foreground">Publication Details</th>
                          <th className="text-left px-4 py-3 font-semibold text-foreground whitespace-nowrap">IF & Publisher</th>
                        </tr>
                      </thead>
                      <tbody>
                        {yr.entries.map((pub, i) => (
                          <tr key={i} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}>
                            <td className="px-4 py-3 font-medium text-foreground align-top whitespace-nowrap">{pub.name}</td>
                            <td className="px-4 py-3 text-primary font-semibold align-top whitespace-nowrap">{pub.dept}</td>
                            <td className="px-4 py-3 text-muted-foreground align-top leading-relaxed">{pub.details}</td>
                            <td className="px-4 py-3 text-foreground font-medium align-top whitespace-nowrap">{pub.ifPublisher}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            
            ))}
          </div>
          <div className="mt-6">
            {/* <a
              href={publicationsData.moreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
            >
              <ExternalLink className="w-4 h-4" /> View All Publications on mits.ac.in
            </a> */}

          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Year Wise Publications" subtitle="Download year-wise publication reports." />
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {yearWisePublications.map((y) => (
            <a
              key={y.year}
              href={(y as any).local ? `${BASE}${y.link}` : y.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group"
            >
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">E.Y. {y.year}</span>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground ml-auto group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </ScrollReveal>

      {/* SDGs Publications & Book Chapters  -  PDF boxes, no title */}
      <ScrollReveal delay={0.08}>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: "SDGs Publications", icon: FileText },
            { label: "Book / Book Chapters", icon: BookOpen },
          ].map(({ label, icon: Icon }) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all">
                <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors flex-1">{label}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

/* --- PATENTS TAB --- */
const PatentsSection = () => {
  
  const totals = [
    { label: "Total IPR", value: patentTotals.total, color: "hsl(var(--primary))" },
    { label: "Patents Published", value: patentTotals.published, color: "hsl(var(--accent))" },
    { label: "Patents Granted", value: patentTotals.granted, color: "hsl(var(--secondary))" },
  ];
  return (
    <div className="space-y-6">
      {/* Headline totals */}
      <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="About Patents" />
        <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
        The university consistently motivates faculty members, researchers, and students to transform innovative ideas and research outcomes 
        into valuable intellectual property with significant societal and industrial impact. Through periodic workshops, training programs, expert mentoring, 
        and dedicated institutional support, the IPR Cell promotes a strong culture of innovation, creativity, and entrepreneurship while enhancing collaboration between
         academia and industry. The increasing number of patent applications, granted patents, copyrights, trademarks, and technology-driven innovations demonstrates
          MITS University - s dedication to research excellence, knowledge commercialization, and meaningful contributions to national and global technological progress.
        </p>
      </div>
    </ScrollReveal>
      <ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-4 color transition-all duration-300">
          {[
            { l: "Total IPR", v: patentTotals.total, cls: "text-primary" },
            { l: "Published", v: patentTotals.published, cls: "text-accent" },
            { l: "Granted", v: patentTotals.granted, cls: "text-secondary" },
          ].map((s) => (
            <div key={s.l} className="bg-card border border-border rounded-2xl p-6 text-center">
              <p className={`font-display text-5xl font-bold ${s.cls}`}>{s.v}</p>
              <p className="text-sm font-semibold text-card-foreground mt-2 uppercase tracking-wider">{s.l}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Composition + AY-wise chart */}
      <ScrollReveal delay={0.05}>
        <div className="bg-card border border-border rounded-4xl p-6 md:p-8">
          {/* <SectionHeading title="Patent Portfolio Breakdown" subtitle="Includes Patents, Copyrights, Trademarks & Geographical Indications (GI)." /> */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 mb-6">
            {[
              { l: "Copyrights", v: "08" },
              { l: "Trademarks", v: "03" },
              { l: "GI", v: "30" }, 
            ].map((s) => (
              <div key={s.l} className="bg-muted/40 border border-border rounded-2xl p-6 text-center">
                <p className="font-display text-5xl font-bold text-foreground">{s.v}</p>
                <p className="text-sm font-semibold text-card-foreground mt-2 uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </div>
          <BarChart data={totals} rotateLabels={false} height={420} minBarSpacing={200} />        </div>
      </ScrollReveal>

      {/* AY-wise charts */}
      <ScrollReveal delay={0.08}>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <SectionHeading title="Patents — Academic Year wise" subtitle="Filed, published, granted and total patents across academic years." />
          <BarChart
            series={[
              { name: "Total",     color: "hsl(var(--primary))" },
              { name: "Published", color: "hsl(var(--accent))" },
              { name: "Granted",   color: "hsl(var(--secondary))" },
              { name: "Filed",     color: "#f59e0b" },
            ]}
            seriesData={patentsAYWise.map((p) => ({
              label: p.year,
              values: [p.total, p.published, p.granted, p.filed],
            }))}
            height={380}
          />

          {/* Table */}
          <div className="overflow-x-auto mt-6 border border-border rounded-xl">
            <table className="w-full text-sm">
              <thead className="bg-primary/5">
                <tr>
                  {["A.Y.", "Filed", "Published","Granted", "Total"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 font-semibold text-foreground whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {patentsAYWise.map((p, i) => (
                  <tr key={p.year} className={`border-t border-border/50 ${i % 2 ? "bg-muted/30" : ""}`}>
                    <td className="px-4 py-3 font-semibold text-foreground">{p.year}</td>
                    <td className="px-4 py-3 text-muted-foreground">{p.filed}</td>
                    <td className="px-4 py-3 text-muted-foreground">{p.published}</td>
                    {/* <td className="px-4 py-3 text-muted-foreground">{p.underExam}</td> */}
                    <td className="px-4 py-3 text-muted-foreground">{p.granted}</td>
                    <td className="px-4 py-3 font-semibold text-primary">{p.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>

      {/* <ScrollReveal delay={0.12}>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <SectionHeading title={patentsData.title} subtitle={patentsData.description} />
          <div className="grid sm:grid-cols-2 gap-4">
            <LinkCard title="Download Patent Details (Excel)" link={patentsData.patentDetailsLink} icon={Download} />
            <LinkCard title="View All Patents" link={patentsData.patentDetailsLink} icon={FileText} />
          </div>
        </div>
      </ScrollReveal> */}

    </div>
  );
};

/* --- POLICIES TAB --- */
const PoliciesSection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Policies" subtitle="Research and innovation policies governing MITS R&D activities." />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary/5 border-b border-border">
                <th className="text-left px-4 py-3 font-semibold text-foreground w-16">S.No</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground">Name of the Policy</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground">View</th>
              </tr>
            </thead>
            <tbody>
              {policiesData.map((p, i) => (
                <tr key={p.sno} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}>
                  <td className="px-4 py-3 text-muted-foreground">{p.sno}</td>
                  <td className="px-4 py-3 font-medium text-foreground">{p.title}</td>
                  <td className="px-4 py-3">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ScrollReveal>

    {/* SEED Grant Policy  -  inline */}
    {/* <ScrollReveal delay={0.05}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading
          title="SEED Grant Policy"
          subtitle="The SEED Money scheme supports faculty-led early-stage research at MITS. Application, utilisation, expenditure and completion forms are provided below."
        />
        <div className="grid sm:grid-cols-2 gap-3">
          {seedGrantDocs.map((d) => (
            <LinkCard key={d.title} title={d.title} link={d.link} icon={FileText} />
          ))}
        </div>
      </div>
    </ScrollReveal> */}
  </div>
);


/* --- EVENTS TAB --- */
const EventsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? eventsData : eventsData.slice(0, 8);

  return (
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Research Events" subtitle="Workshops, seminars, and awareness programs organized by the R&D Cell." />
        <div className="space-y-3">
          {visible.map((e, i) => (
            <a
              key={i}
              href={e.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary transition-colors">
                  <Calendar className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors leading-snug">{e.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{e.dept}</p>
                  <p className="text-sm text-primary/80 font-medium mt-1">{e.date}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1 group-hover:text-primary" />
              </div>
            </a>
          ))}
        </div>
        {eventsData.length > 8 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
          >
            {showAll ? "Show Less" : `Show All ${eventsData.length} Events`}
            <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
    </ScrollReveal>
  );
};

/* --- COMMITTEES TAB --- */

// const CommitteeSection = () => (
//   <div className="space-y-6">
//     <ScrollReveal>
//       <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
//         <SectionHeading title="Research Committees" subtitle="Key committees governing research, innovation and intellectual property at MITS." />
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead>
//               <tr className="bg-primary/5 border-b border-border">
//                 <th className="text-left px-4 py-3 font-semibold text-foreground w-16">S.No</th>
//                 <th className="text-left px-4 py-3 font-semibold text-foreground">Name of the Committee</th>
//                 <th className="text-left px-4 py-3 font-semibold text-foreground">View</th>
//               </tr>
//             </thead>
//             <tbody>
//               {committeeData.map((p, i) => (
//                 <tr key={p.sno} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}>
//                   <td className="px-4 py-3 text-muted-foreground">{p.sno}</td>
//                   <td className="px-4 py-3 font-medium text-foreground">{p.title}</td>
//                   <td className="px-4 py-3">
//                     <a href={p.link} target="_blank" rel="noopener noreferrer"
//                       className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline">
//                       <ExternalLink className="w-3.5 h-3.5" /> View
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </ScrollReveal>
//   </div>
// );

/* --- IPR CELL TAB --- */
const IPRSection = () => (
  <div className="space-y-8">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title={iprCellData.title} />
        <div className="space-y-4">
          <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">National IPR Policy</h3>
            <p className="text-muted-foreground text-sm leading-relaxed text-justify">{iprCellData.nationalPolicy}</p>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed text-justify">{iprCellData.rationale}</p>
          <a href={iprCellData.committeeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
            <Download className="w-4 h-4" /> MITS IPR Committee 2025-26
          </a>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.05}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2 mb-3">
            <Eye className="w-5 h-5 text-primary" /> Vision
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed text-justify">{iprCellData.vision}</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-primary" /> Mission
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed text-justify">{iprCellData.mission}</p>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.1}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Objectives" />
        <ul className="space-y-2">
          {iprCellData.objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.15}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Types of Intellectual Property" />
        <Accordion type="multiple" className="space-y-2">
          {iprCellData.ipTypes.map((ip, i) => (
            <AccordionItem key={i} value={`ip-${i}`} className="border border-border rounded-xl px-4">
              <AccordionTrigger className="text-sm font-semibold text-card-foreground hover:text-primary py-3">
                {ip.name}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-3">
                {ip.desc}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.2}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-2xl p-6">
          <SectionHeading title="Submit Your Ideas" />
          <a
            href={iprCellData.ideaSubmissionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-4 h-4" /> Google Form
          </a>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6">
          <SectionHeading title="Useful Websites" />
          <div className="space-y-2">
            {iprCellData.usefulLinks.map((l) => (
              <a key={l.name} href={l.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ExternalLink className="w-3.5 h-3.5" /> {l.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.25}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="IPR Policy & Documents" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {iprCellData.policyDocuments.map((d) => (
            <LinkCard key={d.title} title={d.title} link={d.link} icon={FileText} />
          ))}
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.3}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Contact" />
        <div className="grid sm:grid-cols-2 gap-4">
          {iprCellData.contacts.map((c) => (
            <div key={c.email} className="border border-border rounded-xl p-4">
              <p className="text-sm text-primary font-semibold mb-1">{c.role}</p>
              <h4 className="font-bold text-card-foreground text-sm">{c.name}</h4>
              <p className="text-sm text-muted-foreground">{c.dept}</p>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground mt-2"><Mail className="w-3.5 h-3.5" /> {c.email}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* --- ADVISORY COMMITTEE TAB --- */
// const AdvisorySection = () => (
//   <div className="space-y-6">
//     <ScrollReveal>
//       <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
//         <SectionHeading title={advisoryCommitteeData.title} subtitle={advisoryCommitteeData.description} />
//         <div className="grid sm:grid-cols-2 gap-4">
//           {advisoryCommitteeData.members.map((m, i) => (
//             <div key={i} className="border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
//               <h4 className="font-bold text-card-foreground text-sm">{m.name}</h4>
//               <p className="text-primary text-sm font-medium mt-1">{m.designation}</p>
//               <p className="text-muted-foreground text-sm mt-1">{m.affiliation}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </ScrollReveal>
//     <ScrollReveal delay={0.05}>
//       <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
//         <SectionHeading title="Responsibilities" />
//         <ul className="grid sm:grid-cols-2 gap-3">
//           {advisoryCommitteeData.responsibilities.map((r, i) => (
//             <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
//               <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
//               <span>{r}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </ScrollReveal>
//   </div>
// );

/* --- ACADEMIC RESEARCH TAB --- */
const AcademicResearchSection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title={academicResearchData.title} subtitle={academicResearchData.description} />
        <div className="space-y-4">
          {academicResearchData.programmes.map((p, i) => (
            <div key={i} className="bg-muted/40 border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">{p.details}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          {academicResearchData.links.map((l) => (
            <LinkCard key={l.title} title={l.title} link={l.link} icon={ExternalLink} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* --- COLLABORATIONS TAB --- */
const CollaborationsSection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Research Collaborations" subtitle={collaborationData.description} />
        <div className="grid sm:grid-cols-2 gap-4">
          {collaborationData.partners.map((p, i) => (
            <div key={i} className="bg-muted/40 border border-border rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Handshake className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{p}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* --- IPFC TAB --- */
const IPFCSection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title={ipfcData.title} subtitle={ipfcData.description} />
        <a href={ipfcData.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
          <ExternalLink className="w-4 h-4" /> Visit IPFC Portal
        </a>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.05}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-2xl p-6">
          <SectionHeading title="Objectives" />
          <ul className="space-y-2">
            {ipfcData.objectives.map((o, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6">
          <SectionHeading title="Services" />
          <ul className="space-y-2">
            {ipfcData.services.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.1}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Contact" />
        <div className="grid sm:grid-cols-2 gap-4">
          {ipfcData.contacts.map((c, i) => (
            <div key={i} className="border border-border rounded-xl p-4">
              <h4 className="font-bold text-card-foreground text-sm">{c.name}</h4>
              <p className="text-primary text-sm font-medium mt-1">{c.role}</p>
              <div className="space-y-1 text-sm text-muted-foreground mt-2">
                <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {c.email}</p>
                <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {c.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* --- CONSULTANCY TAB --- */
const ConsultancySection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title={consultancyData.title} subtitle={consultancyData.description} />
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Consultancy Revenue</p>
            <p className="font-display text-4xl font-bold text-primary mt-2">{consultancyData.revenue}</p>
            <p className="text-sm text-muted-foreground mt-1">{consultancyData.revenueNote}</p>
          </div>
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">Core Activities</p>
            <ul className="space-y-1">
              {consultancyData.activities.slice(0, 3).map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a href={consultancyData.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
          <ExternalLink className="w-4 h-4" /> Explore Consultancy
        </a>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.05}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Consultancy Services" />
        <ul className="grid sm:grid-cols-2 gap-3">
          {consultancyData.activities.map((a, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.1}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Resources" />
        <div className="grid sm:grid-cols-2 gap-3">
          {consultancyData.links.map((l) => (
            <LinkCard key={l.title} title={l.title} link={l.link} icon={ExternalLink} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* --- INNOVATION TAB --- */
const InnovationSection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title={innovationData.title} subtitle={innovationData.description} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {innovationData.highlights.map((h, i) => (
            <div key={i} className="bg-muted/40 border border-border rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{h}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.05}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Innovation Ecosystem" />
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">Startup Support</h3>
            <p className="text-muted-foreground text-sm text-justify">20+ startups incubated with MSME support, mentoring and seed funding.</p>
          </div>
          <div className="border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">Entrepreneurship</h3>
            <p className="text-muted-foreground text-sm text-justify">Regular hackathons, idea pitches and innovation challenges for students and faculty.</p>
          </div>
          <div className="border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">Idea Lab</h3>
            <p className="text-muted-foreground text-sm text-justify">AICTE IDEA Lab provides prototype development, 3D printing and hands-on innovation support.</p>
          </div>
          <div className="border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">Incubation Activities</h3>
            <p className="text-muted-foreground text-sm text-justify">MITS Foundation incubation centre offers co-working space, IPR support and investor connect.</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.1}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Resources" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {innovationData.links.map((l) => (
            <LinkCard key={l.title} title={l.title} link={l.link} icon={ExternalLink} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* --- RESEARCH CENTRES TAB --- */
const ResearchCentresSection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title={researchCentresData.title} subtitle={researchCentresData.description} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {researchCentresData.centres.map((c, i) => (
            <div key={i} className="bg-muted/40 border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">{c.name}</h3>
              <p className="text-muted-foreground text-sm">{c.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.05}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Centre Objectives" />
        <ul className="grid sm:grid-cols-2 gap-3">
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>Foster interdisciplinary research aligned with national priorities</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>Provide specialised infrastructure and lab facilities</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>Support doctoral and post-doctoral research programmes</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>Facilitate industry-sponsored projects and consultancy</span>
          </li>
        </ul>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.1}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Resources" />
        <div className="grid sm:grid-cols-2 gap-3">
          {researchCentresData.links.map((l) => (
            <LinkCard key={l.title} title={l.title} link={l.link} icon={ExternalLink} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);




/* --- MITS FOUNDATION TAB --- */
const FoundationSection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-gradient-to-br from-primary/10 via-background to-accent/5 border border-border rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
            <Rocket className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{mitsFoundationData.title}</h2>
            <p className="text-sm text-primary font-semibold mt-1 uppercase tracking-wider">Section 8 Company  -  Incubation & Innovation</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed text-justify">{mitsFoundationData.description}</p>
        <a href={mitsFoundationData.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
          <ExternalLink className="w-4 h-4" /> Visit mitsfoundation.org
        </a>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.05}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Key Highlights" />
        <ul className="grid sm:grid-cols-2 gap-3">
          {mitsFoundationData.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  </div>
);

/* --- MDRF TAB --- */
const MDRFSection = () => {
  const [activeMdrf, setActiveMdrf] = useState<string>("about");

  const mdrfTabs = [
    { id: "about",        label: "About MDRF" },
    { id: "admin",        label: "Administrative Support" },
    { id: "clusters",     label: "Research Areas & Clusters" },
    { id: "partnerships", label: "Partnerships / Collaborations" },
    { id: "facilities",   label: "Facilities" },
    { id: "outcomes",     label: "Outcomes" },
    { id: "projects",     label: "Projects" },
    { id: "gallery",      label: "Gallery" },
    { id: "contact",      label: "Contact" },
  ];

  const thrustAreas = [
    "High performance materials for Defense Applications",
    "Bio Materials & devices",
    "Electrical Vehicle Technology",
    "Sustainable and Green Technologies",
    "Semiconductor technologies",
    "Nano materials and devices",
    "Smart Technologies",
  ];

  const deptFacilities = [
    {
      dept: "Civil Engineering",
      paragraphs: [
        "The Civil Engineering department has well-equipped laboratories for structural engineering and material testing.",
        "It also includes geotechnical, environmental, and fluid mechanics labs to support basic and advanced studies.",
        "The department supports research in sustainable construction and smart infrastructure. It also provides surveying and GIS tools for field work and data analysis.",
      ],
      link: "https://mits.ac.in/public/uploads/departments/Civil Engineering Labs.pdf",
      label: "Civil Research Facilities",
    },
    {
      dept: "Mechanical Engineering",
      paragraphs: [
        "The Mechanical Engineering department has well-equipped laboratories for Design, Product development. Conventional Manufacturing, Advanced manufacturing, Thermal engineering, Automation and Robotics.",
      ],
      link: "https://mits.ac.in/assets/pdf/mech/Research Labs in the Department ME.pdf",
      label: "ME Research Facilities",
    },
    {
      dept: "Electrical & Electronics Engineering (EEE)",
      paragraphs: [
        "The Electrical and Electronics Engineering (EEE) department has well-equipped laboratories for power systems, electrical machines, and control systems. It also includes facilities for power electronics and circuit analysis.",
        "The department supports research in renewable energy and energy management systems. Simulation tools and practical setups are available for designing and testing electrical systems.",
      ],
      link: "https://mits.ac.in/assets/pdf/eee/Research & Industry Supported Labs  EEE.pdf",
      label: "EEE Research Facilities",
    },
    {
      dept: "Electronics and Communication Engineering (ECE)",
      paragraphs: [
        "The Electronics and Communication Engineering (ECE) department has well-equipped laboratories for embedded systems, communication, and electronics. It includes facilities for signal processing, VLSI, and circuit design.",
        "The department supports research in areas such as IoT, wireless communication, and smart systems. Facilities are available for hardware development, testing, and real-time applications.",
      ],
      link: "https://mits.ac.in/public/uploads/departments/labs.pdf",
      label: "ECE Research Facilities",
    },
    {
      dept: "Computer Science & Engineering",
      paragraphs: [
        "The Computer Science and Engineering (CSE) department has well-equipped computer laboratories with advanced systems. It provides access to tools and software for programming, data science, artificial intelligence, and machine learning.",
        "The department supports research in areas such as AI, Data Analytics, Cloud Computing, and Cybersecurity. Facilities are available for software development, simulation, and Data analysis.",
      ],
      links: [
        { label: "CSE Research Facilities", url: "https://mits.ac.in/assets/pdf/cse/CSE%20Lab%20Details.pdf" },
        { label: "CSE-AI Research Facilities", url: "https://mits.ac.in/assets/pdf/cse/AI LAB DETAILS.pdf" },
        { label: "CSE-CS Research Facilities", url: "https://mits.ac.in/assets/pdf/cse/Lab%20Details%20Dept.%20of%20CSE(Cyber%20Security).pdf" },
        { label: "CST Research Facilities", url: "https://mits.ac.in/public/uploads/departments/8787aafa08f6df23fb7e650ed58d904d.pdf" },
        { label: "CSE - DS Research Facilities", url: "https://mits.ac.in/public/uploads/departments/DS_Lab Softwares.pdf" },
        { label: "CSE - AI and ML Research Facilities", url: "#" },
      ],
    },
    {
      dept: "Chemistry",
      paragraphs: [
        "The Chemistry department has well-equipped laboratories for chemical analysis and material synthesis. It provides facilities for conducting experiments related to environmental chemistry and material science.",
        "The department supports research in areas such as energy materials, corrosion studies, and sustainability. Facilities are available for testing, analysis, and interdisciplinary research applications.",
      ],
      link: "https://mits.ac.in/assets/pdf/bsh/Research%20Facilities%20-%20Chemistry.pdf",
      label: "Chemistry Research Facilities",
    },
    {
      dept: "Physics",
      paragraphs: [
        "The Physics department has well-equipped laboratories for experimental and applied physics. It provides facilities for studies in optics, materials, and basic instrumentation.",
        "The department supports research in areas such as advanced materials and nanotechnology. Facilities are available for testing, measurement, and interdisciplinary research applications.",
      ],
      link: "https://mits.ac.in/assets/pdf/bsh/Research Facilities - Physics.pdf",
      label: "Physics Research Facilities",
    },
  ];

  const mdrfGallery = [
    { src: "https://mits.ac.in/public/uploads/event/mdrf-1.jpeg", title: "MDRF Presentation by Dr. G. Bala Narasimha" },
    { src: "https://mits.ac.in/public/uploads/event/mdrf-2.jpeg", title: "MDRF Seminar & Faculty Discussion" },
  ];

  return (
    <div className="space-y-6">
      {/* Header banner */}
      <ScrollReveal>
        <div className="bg-gradient-to-br from-blue-50 dark:from-blue-950/30 via-background to-indigo-50 dark:to-indigo-950/10 border border-border rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/15 flex items-center justify-center shrink-0">
              <Globe className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Multidisciplinary Research Forum (MDRF)</h2>
              <p className="text-sm text-blue-700 dark:text-blue-400 font-semibold mt-1 uppercase tracking-wider">Constituted 2024  -  Cross-Disciplinary Synergies  -  MITS Deemed University</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm text-justify">
            The Multidisciplinary Research Forum (MDRF) at Madanapalle Institute of Technology &amp; Science (MITS), Deemed to be University, was constituted in 2024 with the vision of fostering collaborative research across diverse engineering and science disciplines.
          </p>
        </div>
      </ScrollReveal>

      {/* Sub-tab Navigation */}
      <ScrollReveal delay={0.05}>
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="flex overflow-x-auto border-b border-border scrollbar-none">
            {mdrfTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveMdrf(t.id)}
                className={`whitespace-nowrap px-4 py-3.5 text-sm md:text-sm font-semibold transition-colors shrink-0 border-b-2 ${
                  activeMdrf === t.id
                    ? "border-blue-600 text-blue-700 dark:text-blue-400 bg-blue-600/8"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Sub-tab Content Panels */}
          <div className="p-6 md:p-8">

            {/* 1  -  About MDRF */}
            {activeMdrf === "about" && (
              <div className="space-y-6">
                <div>
                  <SectionHeading title="Multidisciplinary Research @ MITS" />
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 text-justify">
                    The Multidisciplinary Research Forum (MDRF) at Madanapalle Institute of Technology &amp; Science (MITS), Deemed to be University, was constituted in 2024 with the vision of fostering collaborative research across diverse engineering and science disciplines.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                    The forum serves as a unified platform that brings together faculty, researchers, and students to address complex real-world challenges through integrated knowledge and innovative approaches. MDRF promotes a culture of research synergy, interdisciplinary collaboration, and knowledge sharing, aligned with national priorities and emerging global technological trends.
                  </p>
                </div>

                <div className="border-t border-border/60 pt-6">
                  <SectionHeading title="Purpose" />
                  <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    <p className="text-justify"><strong>Academic & Research Ecosystem:</strong> The forum aims to create a cohesive research ecosystem where expertise from Civil, Mechanical, Electrical, Electronics, and Computer Science disciplines is integrated to solve complex engineering and societal problems.</p>
                    <p className="text-justify"><strong>Industry Alignment:</strong> MDRF supports the development of practical, scalable, and technology-driven solutions by integrating core engineering knowledge with modern tools such as automation, data analytics, artificial intelligence, and sustainable practices.</p>
                    <p className="text-justify"><strong>Societal Impact:</strong> Focuses on addressing critical challenges such as sustainable infrastructure, renewable energy, environmental conservation, smart systems, and healthcare technologies.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 border-t border-border/60 pt-6">
                  <div className="bg-muted/30 border border-border rounded-xl p-5">
                    <SectionHeading title="Objectives" />
                    <ul className="space-y-2.5">
                      {[
                        "To promote collaborative research across diverse departments and disciplines.",
                        "To identify societal and industrial problems and develop Interdisciplinary Research solutions.",
                        "To strengthen the University's research ecosystem on thrust / high priority areas through seminars, workshops, and capacity-building activities.",
                        "To encourage faculty to actively submit interdisciplinary research proposals to national/international funding agencies.",
                      ].map((obj, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm md:text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-muted/30 border border-border rounded-xl p-5">
                    <SectionHeading title="Goals" />
                    <ul className="space-y-2.5">
                      {[
                        "To promote a culture of regular research talks and scholarly discussions.",
                        "To mentor young researchers, early-career faculty, and students.",
                        "To foster strong partnerships with industries, research labs, and universities for joint research.",
                        "To establish interdisciplinary research clusters addressing contemporary societal and technological challenges.",
                        "To secure external research funding through multidisciplinary project proposals (DST, ANRF, MSME, AICTE, Industry).",
                        "To enhance research output and impact through collaborative projects and high-quality publications.",
                      ].map((goal, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm md:text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 2  -  Administrative Support */}
            {activeMdrf === "admin" && (
              <div className="space-y-6 text-foreground text-sm leading-relaxed">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3">Administrative Support</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3 text-justify">
                    Madanapalle Institute of Technology &amp; Science (MITS) recognizes the growing importance of interdisciplinary research in addressing complex real-world challenges and has established a supportive administrative framework to promote such collaborations. This framework provides essential resources, encourages interaction among departments, and simplifies the research process for faculty and students working across disciplines.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    At MITS, interdisciplinary research activities are coordinated through the Research &amp; Development (R&amp;D) Cell, functioning under the guidance of the institute leadership. The R&amp;D Cell provides strategic direction, facilitates collaboration among various departments, and ensures that research initiatives are aligned with the institution - s academic goals and societal needs.
                  </p>
                </div>

                <div className="border-t border-border pt-5">
                  <h4 className="font-bold text-lg text-foreground mb-2">1. Research Clusters</h4>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    Madanapalle Institute of Technology &amp; Science (MITS) promotes interdisciplinary research through well-defined research clusters. These clusters bring together faculty and researchers from different departments to work collaboratively on common research themes, ensuring integration of knowledge across disciplines.
                  </p>
                </div>

                <div className="border-t border-border pt-5">
                  <h4 className="font-bold text-lg text-foreground mb-2">2. Research Funding</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3 text-justify">
                    Madanapalle Institute of Technology &amp; Science (MITS) provides structured financial and administrative support to encourage faculty and researchers to secure research funding, particularly for interdisciplinary projects. The institute promotes a proactive research culture by offering internal funding opportunities.
                  </p>
                  <ul className="space-y-2.5 pl-1">
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span><strong>R&amp;D Cell Support:</strong> The Research &amp; Development (R&amp;D) Cell actively identifies suitable national and international funding opportunities and guides faculty in proposal preparation, submission, and follow-up processes.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span><strong>Seed Funding Initiatives:</strong> The institution provides internal seed funding to support innovative interdisciplinary research projects, enabling preliminary studies, prototype development, and data collection.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span><strong>Institutional Research Grants:</strong> MITS encourages faculty to undertake collaborative research by offering internal grants and financial assistance. In recent years, the institute has consistently supported faculty members with funding to initiate and strengthen interdisciplinary research efforts.</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-border pt-5">
                  <h4 className="font-bold text-lg text-foreground mb-2">3. Training and Mentorship</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3 text-justify">
                    Madanapalle Institute of Technology &amp; Science (MITS) emphasizes continuous learning and skill enhancement to promote interdisciplinary research. The institution conducts various training and mentoring activities to equip faculty and students with the necessary knowledge and competencies. Key initiatives include:
                  </p>
                  <ul className="space-y-2.5 pl-1">
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span><strong>Workshops and Seminars:</strong> Regularly organized sessions focusing on interdisciplinary research methodologies, effective research communication, and collaborative teamwork.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span><strong>Mentorship Programs:</strong> Senior faculty guide students and early-career researchers in adopting interdisciplinary approaches and developing quality research outcomes.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span><strong>Faculty Development Programs (FDPs):</strong> Periodic training programs designed to enhance faculty expertise in emerging areas, research tools, and interdisciplinary domains.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span><strong>Webinars and Capacity-Building Initiatives:</strong> Online and offline sessions addressing research strategies, funding opportunities, proposal development, and project management.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span><strong>Proposal Writing Workshops:</strong> MITS organizes sessions and mentoring support to help faculty develop strong and competitive research proposals, especially for interdisciplinary themes.</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-border pt-5">
                  <h4 className="font-bold text-lg text-foreground mb-2">4. Bridging Interdisciplinary Collaborations</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3 text-justify">
                    Madanapalle Institute of Technology &amp; Science (MITS) fosters interdisciplinary collaboration by creating platforms and support systems that encourage interaction, joint research, and knowledge exchange across domains. Key initiatives include:
                  </p>
                  <ul className="space-y-2.5 pl-1">
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span><strong>Knowledge Exchange:</strong> Organizing interdisciplinary seminars, workshops, and research symposiums to bring together faculty, researchers, and experts from diverse fields.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span><strong>Interdepartmental Research Collaboration:</strong> Encouraging faculty to initiate cross-departmental research projects with necessary administrative, technical, and logistical support.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span><strong>Industry and Institutional Collaborations:</strong> Promoting partnerships with industries, research organizations, and academic institutions to address real-world challenges through interdisciplinary approaches.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span><strong>International Research Collaborations:</strong> Facilitating collaborations with global institutions through joint research initiatives, funding opportunities, and faculty/student exchange programs.</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-border pt-5">
                  <h4 className="font-bold text-lg text-foreground mb-2">5. Research Facilities and Infrastructure:</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3 text-justify">
                    Madanapalle Institute of Technology &amp; Science (MITS) provides a robust ecosystem of shared resources and infrastructure to support interdisciplinary research and innovation. The institution ensures that faculty and students have access to advanced facilities, knowledge resources, and innovation spaces to carry out high-quality research. Key provisions include:
                  </p>
                  <ul className="space-y-2.5 pl-1">
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span><strong>Advanced Research Facilities:</strong> Well-equipped laboratories across departments to support experimental and interdisciplinary research activities.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span><strong>Library and Digital Resources:</strong> Access to a wide range of scientific journals, e-books, research databases, and digital repositories that facilitate cross-disciplinary learning and research.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span><strong>Intellectual Property and Innovation Support:</strong> Guidance and support for patent filing, intellectual property rights (IPR), and technology transfer to promote research commercialization.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* 3  -  Research Areas & Clusters */}
            {activeMdrf === "clusters" && (
              <div className="space-y-6">
                <div>
                  <SectionHeading title="Thrust Areas & Research Clusters" subtitle="High-priority interdisciplinary research domains identified under MDRF." />
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {thrustAreas.map((area, index) => (
                    <div key={index} className="border border-border rounded-xl p-4 bg-muted/20 hover:bg-muted/40 transition-colors flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/15 text-blue-600 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                        0{index + 1}
                      </div>
                      <span className="text-sm font-medium text-foreground leading-snug">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4  -  Partnerships / Collaborations */}
            {activeMdrf === "partnerships" && (
              <div className="space-y-6">
                <div>
                  <SectionHeading title="Partnerships & Research Collaborations" />
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                    MDRF actively promotes strategic alliances with premier academic institutions, national research centers, and industry leaders to conduct joint research, exchange expertise, and solve industrial problems.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border border-border rounded-xl p-5 bg-card">
                    <h4 className="font-semibold text-foreground text-sm mb-2">Industry Connect</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed text-justify">Consultancy, sponsored research projects, and collaborative lab setups with core engineering & tech industries.</p>
                  </div>
                  <div className="border border-border rounded-xl p-5 bg-card">
                    <h4 className="font-semibold text-foreground text-sm mb-2">Academic Alliances</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed text-justify">Joint publications, co-guided Ph.D. research, and faculty/student knowledge exchange programs with reputed universities.</p>
                  </div>
                  <div className="border border-border rounded-xl p-5 bg-card">
                    <h4 className="font-semibold text-foreground text-sm mb-2">National Research Labs</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed text-justify">Collaborative proposal submissions to DST, ANRF, AICTE, MSME, and other funding bodies.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 5  -  Facilities */}
            {activeMdrf === "facilities" && (
              <div className="space-y-6">
                <div>
                  <SectionHeading title="Departmental Facilities & Infrastructure for MDRF" subtitle="Explore research facilities and downloadable laboratory details across departments." />
                </div>
                <div className="grid gap-4">
                  {deptFacilities.map((fac, idx) => (
                    <div key={idx} className="border border-border rounded-xl p-5 bg-card hover:border-primary/40 transition-colors">
                      <h4 className="font-semibold text-foreground text-base mb-2">{fac.dept}</h4>
                      <div className="space-y-2 mb-3">
                        {fac.paragraphs.map((p, pi) => (
                          <p key={pi} className="text-muted-foreground text-sm leading-relaxed text-justify">{p}</p>
                        ))}
                      </div>
                      {fac.link && (
                        <a
                          href={fac.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {fac.label}
                        </a>
                      )}
                      {fac.links && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {fac.links.map((lk, li) => (
                            <a
                              key={li}
                              href={lk.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-medium bg-muted px-2.5 py-1 rounded-md text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              {lk.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6  -  Outcomes */}
            {activeMdrf === "outcomes" && (
              <div className="space-y-6">
                <div>
                  <SectionHeading title="MDRF Key Research Outcomes" />
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-justify">
                    The Multidisciplinary Research Forum strives to deliver tangible outcomes across high-impact publications, patents, interdisciplinary grants, and technological solutions.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="border border-border rounded-xl p-4 bg-muted/20">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">3,080+</p>
                    <p className="text-sm text-muted-foreground mt-1 font-medium">Scopus Publications</p>
                  </div>
                  <div className="border border-border rounded-xl p-4 bg-muted/20">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">₹18.44 Cr</p>
                    <p className="text-sm text-muted-foreground mt-1 font-medium">Funded Research Projects</p>
                  </div>
                  <div className="border border-border rounded-xl p-4 bg-muted/20">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">200+</p>
                    <p className="text-sm text-muted-foreground mt-1 font-medium">Patents Published & Granted</p>
                  </div>
                  <div className="border border-border rounded-xl p-4 bg-muted/20">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">H-Index 70</p>
                    <p className="text-sm text-muted-foreground mt-1 font-medium">Institutional Impact</p>
                  </div>
                </div>
              </div>
            )}

            {/* 7  -  Projects */}
            {activeMdrf === "projects" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-4">Projects</h3>
                  <div className="overflow-x-auto rounded-xl border border-border">
                    <table className="w-full text-sm">
                      <thead className="bg-primary/10 border-b border-border">
                        <tr>
                          <th className="text-center px-4 py-3 font-semibold text-foreground whitespace-nowrap">S.No</th>
                          <th className="text-center px-4 py-3 font-semibold text-foreground whitespace-nowrap">Academic Year</th>
                          <th className="text-left px-4 py-3 font-semibold text-foreground">Title of the Project</th>
                          <th className="text-left px-4 py-3 font-semibold text-foreground whitespace-nowrap">Team</th>
                          <th className="text-center px-4 py-3 font-semibold text-foreground whitespace-nowrap">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50 bg-background">
                          <td className="px-4 py-3 font-bold text-primary text-center">1.</td>
                          <td className="px-4 py-3 text-center whitespace-nowrap font-medium text-foreground">2025-26</td>
                          <td className="px-4 py-3 text-foreground leading-relaxed">
                            Investigation of Nanofluid-Coated SMA Actuators to Achieve Rapid Cooling Cycles and Enhanced Functional Durability
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap font-medium text-foreground">Dr. G. Bala Narasimha</td>
                          <td className="px-4 py-3 text-center">
                            <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-400/30 text-sm font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                              Ongoing
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 8  -  Gallery */}
            {activeMdrf === "gallery" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-4">Gallery</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {mdrfGallery.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border border-border bg-muted group shadow-sm">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={img.src}
                            alt={img.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://placehold.co/600x450/1e293b/38bdf8?text=MDRF+Gallery";
                            }}
                          />
                        </div>
                        <div className="p-3 bg-card border-t border-border">
                          <p className="text-sm font-medium text-foreground text-center">{img.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 9  -  Contact */}
            {activeMdrf === "contact" && (
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 md:p-4">
                  <h3 className="font-display text-xl font-bold text-primary mb-1">Contact us</h3>
                </div>
                <div className="border border-border rounded-xl p-6 bg-card max-w-2xl space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Dr. G. Bala Narasimha</h4>
                    <p className="text-muted-foreground text-sm font-medium">Co-ordinator</p>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground border-t border-border/60 pt-4">
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <span>E Mail: <a href="mailto:mdrf@mits.ac.in" className="text-primary hover:underline font-medium">mdrf@mits.ac.in</a></span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <span>Phone: +91-8571-280255; 280706</span>
                    </p>
                  </div>

                  <div className="border-t border-border/60 pt-4">
                    <h5 className="font-semibold text-foreground text-sm mb-1.5 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-primary shrink-0" />
                      Address :
                    </h5>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-5">
                      Madanapalle Institute of Technology &amp; Science<br />
                      Deemed to be University<br />
                      Madanapalle-Kadiri Road<br />
                      kurabalakota Mandal, Madanapalle-517325<br />
                      Andhra Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

/* --- WWRC TAB --- */
const WWRCSection = () => {
  const [activeWwrc, setActiveWwrc] = useState<string>("about");

  const wwrcTabs = [
    { id: "about",    label: "About WWRC" },
    { id: "admin",    label: "Administrative Support" },
    { id: "areas",    label: "Research Areas" },
    { id: "projects", label: "Projects" },
    { id: "gallery",  label: "Gallery" },
  ];

  const projects = [
    { sno: 1, year: "2025  -  2026", title: "Mechanical properties of PP fiber reinforced concrete with partial replacement of Aggregates with glass waste.", team: "Dr. Vijay Kumar Natesan", status: "On Going" },
    { sno: 2, year: "2025  -  2026", title: "Mechanical Properties of coconut Fibre Reinforced Concrete with Partial Replacement of Aggregates using Glass Waste.", team: "Dr. Vijay Kumar Natesan", status: "On Going" },
    { sno: 3, year: "2025  -  2026", title: "Smart waste management solutions for MITS campus Madanapalle.", team: "Dr. N Tagore Sai Priya", status: "On Going" },
    { sno: 4, year: "2025  -  2026", title: "A study on Utilization of C & D waste and granite dust as a Fine Aggregate in Paver Blocks and Plain Cement Concrete.", team: "Dr. Sudheer Kumar Y", status: "On Going" },
  ];

  const galleryImages = [
    { src: "https://mits.ac.in/Civil1.jpg", alt: "WWRC Activity 1" },
    { src: "https://mits.ac.in/Civil2.jpg", alt: "WWRC Activity 2" },
    { src: "https://mits.ac.in/Civil3.jpg", alt: "WWRC Activity 3" },
    { src: "https://mits.ac.in/Civil4.jpg", alt: "WWRC Activity 4" },
  ];

  return (
    <div className="space-y-6">
      {/* Header card */}
      <ScrollReveal>
        <div className="bg-gradient-to-br from-green-50 dark:from-green-950/30 via-background to-emerald-50 dark:to-emerald-900/10 border border-border rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-green-600/15 flex items-center justify-center shrink-0">
              <Recycle className="w-7 h-7 text-green-700 dark:text-green-400" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Waste to Wealth Research Centre (WWRC)</h2>
              <p className="text-sm text-green-700 dark:text-green-400 font-semibold mt-1 uppercase tracking-wider">Circular Economy  -  Waste Valorization  -  Sustainable Innovation</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm text-justify">
            The Waste to Wealth Research Centre (WWRC) was established in 2024 with the vision of transforming waste streams into valuable resources through innovative, sustainable, and commercially viable technologies. The centre serves as a dedicated hub bringing together environmental engineers, chemists, biotechnologists, material scientists, and policy researchers to address the growing challenge of waste management while unlocking economic value.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm mt-3 text-justify">
            By integrating scientific excellence with entrepreneurial thinking, W2WRC promotes a culture of closed-loop systems, resource efficiency, and low-carbon innovation, aligned with national missions such as Swachh Bharat, LiFE (Lifestyle for Environment), and the UN Sustainable Development Goals (SDGs).
          </p>
        </div>
      </ScrollReveal>

      {/* Tab navigator */}
      <ScrollReveal delay={0.05}>
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          {/* Tab bar */}
          <div className="flex overflow-x-auto border-b border-border scrollbar-none">
            {wwrcTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveWwrc(t.id)}
                className={`whitespace-nowrap px-5 py-3.5 text-sm font-semibold transition-colors shrink-0 border-b-2 ${
                  activeWwrc === t.id
                    ? "border-green-600 text-green-700 dark:text-green-400 bg-green-600/8"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab panels */}
          <div className="p-6 md:p-8">

            {/* 1  -  About */}
            {activeWwrc === "about" && (
              <div className="space-y-4">
                <SectionHeading title="About Waste to Wealth Research Center" />
                <p className="text-muted-foreground leading-relaxed text-sm text-justify">
                  The Waste to Wealth Research Centre (WWRC) was established in 2024 with the vision of transforming waste streams into valuable resources through innovative, sustainable, and commercially viable technologies. The centre serves as a dedicated hub bringing together environmental engineers, chemists, biotechnologists, material scientists, and policy researchers to address the growing challenge of waste management while unlocking economic value.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm text-justify">
                  By integrating scientific excellence with entrepreneurial thinking, W2WRC promotes a culture of closed-loop systems, resource efficiency, and low-carbon innovation, aligned with national missions such as Swachh Bharat, LiFE (Lifestyle for Environment), and the UN Sustainable Development Goals (SDGs).
                </p>
              </div>
            )}

            {/* 2  -  Administrative Support */}
            {activeWwrc === "admin" && (
              <div className="space-y-4">
                <SectionHeading title="Administrative Support" />
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Research Clusters",
                    "Research Funding",
                    "Training and Mentorship",
                    "Industry Collaborations",
                    "Research Facilities and Infrastructure",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-muted/40 rounded-xl p-4 border border-border">
                      <div className="w-8 h-8 rounded-lg bg-green-500/15 flex items-center justify-center shrink-0">
                        <ChevronRight className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-sm text-foreground font-medium leading-snug pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 3  -  Research Areas */}
            {activeWwrc === "areas" && (
              <div className="space-y-4">
                <SectionHeading title="Research Areas" />
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Organic Waste to Bioenergy & Bio-products",
                    "Plastic & Polymer Circularity",
                    "E-waste & Critical Metal Recovery",
                    "Construction & Demolition (C&D) Waste Reuse",
                    "Industrial & Hazardous Waste Valorization",
                    "Circular Economy Modelling & Policy Innovation",
                  ].map((area, i) => (
                    <li key={i} className="flex items-start gap-3 bg-green-50 dark:bg-green-500/5 border border-green-200 dark:border-green-500/20 rounded-xl p-4">
                      <div className="w-7 h-7 rounded-full bg-green-200 dark:bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-green-800 dark:text-green-400 text-sm font-bold">{i + 1}</span>
                      </div>
                      <span className="text-sm text-foreground font-medium leading-snug">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 4  -  Projects */}
            {activeWwrc === "projects" && (
              <div className="space-y-4">
                <SectionHeading title="Projects" subtitle="Active research projects under the Waste to Wealth Research Centre (2025 - 2026)." />
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead className="bg-green-500/10 border-b border-border">
                      <tr>
                        {["S. No", "Academic Year", "Title of the Project", "Team", "Status"].map((h) => (
                          <th key={h} className="text-left px-4 py-3 font-semibold text-foreground whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {projects.map((p, i) => (
                        <tr key={p.sno} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}>
                          <td className="px-4 py-3 font-bold text-green-700 dark:text-green-400 text-center">{p.sno}</td>
                          <td className="px-4 py-3 whitespace-nowrap font-medium text-foreground">{p.year}</td>
                          <td className="px-4 py-3 text-muted-foreground leading-relaxed">{p.title}</td>
                          <td className="px-4 py-3 whitespace-nowrap font-medium text-foreground">{p.team}</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-600 border border-amber-400/30 text-sm font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                              {p.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 5  -  Gallery */}
            {activeWwrc === "gallery" && (
              <div className="space-y-4">
                <SectionHeading title="Gallery" subtitle="Images from W2WRC activities, lab work, and field projects." />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {galleryImages.map((img, i) => (
                    <div key={i} className="aspect-square rounded-xl overflow-hidden border border-border bg-muted group">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://placehold.co/400x400/1a3a2a/22c55e?text=W2WRC";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

const Research = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen">
      <Header />
      <SEO
        title="Research & Innovation at MITS Madanapalle  -  3,085 Scopus Papers"
        description="MITS research: 3,085 Scopus publications, H-Index 70, ₹118.44 Cr funded projects, 200+ patents. Explore R&D cell, IPR, consultancy, MDRF and innovation ecosystem."
        canonical="/research"
      />
      <main>
        {/* Hero */}
        <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={`${BASE}Hero-Section/image%203.JPG`} alt="Research at MITS" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-primary/70" />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4">
                Research & Development
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Advancing Knowledge Through <span className="text-accent">Innovation</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-white/85 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                MITS fosters a vibrant research ecosystem through advanced labs, funded projects, and industry collaborations driving impactful outcomes.
              </motion.p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 80V40C240 0 480 60 720 40C960 20 1200 60 1440 40V80H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Tabs Navigation + Content */}
        <section className="py-6 md:py-12 bg-background -mt-1">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
              {/* Two-row Tab List */}
              <div className="mb-8">
                <TabsList className="flex flex-wrap h-auto p-1 bg-muted rounded-xl gap-1 w-full justify-start">
                  {sectionTabs.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="flex items-center gap-1.5 px-3 py-2 text-sm md:text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:scale-[1.03] hover:shadow-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value="overview"><OverviewSection /></TabsContent>
              <TabsContent value="projects"><ProjectsSection /></TabsContent>
              <TabsContent value="publications"><PublicationsSection /></TabsContent>
              <TabsContent value="patents"><PatentsSection /></TabsContent>
              <TabsContent value="policies"><PoliciesSection /></TabsContent>
              <TabsContent value="events"><EventsSection /></TabsContent>
              {/* <TabsContent value="documents"><DocumentsSection /></TabsContent> */}
              {/* <TabsContent value="advisory"><AdvisorySection /></TabsContent> */}
              {/* <TabsContent value="committee"><CommitteeSection /></TabsContent> */}
              <TabsContent value="academic"><AcademicResearchSection /></TabsContent>
              <TabsContent value="ipr"><IPRSection /></TabsContent>
              <TabsContent value="collaborations"><CollaborationsSection /></TabsContent>
              <TabsContent value="ipfc"><IPFCSection /></TabsContent>
              <TabsContent value="innovation"><InnovationSection /></TabsContent>

              <TabsContent value="foundation"><FoundationSection /></TabsContent>
              <TabsContent value="mdrf"><MDRFSection /></TabsContent>
              <TabsContent value="wwrc"><WWRCSection /></TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;



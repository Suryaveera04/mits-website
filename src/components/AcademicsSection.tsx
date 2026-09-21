import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Atom,
  Binary,
  BookOpenCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Cable,
  ChartNoAxesCombined,
  CircuitBoard,
  Code2,
  Cog,
  Construction,
  Cpu,
  Dna,
  FlaskConical,
  Gauge,
  HardHat,
  Landmark,
  Library,
  Microscope,
  Monitor,
  Network,
  Orbit,
  Rocket,
  ScanLine,
  ShieldCheck,
  Sigma,
  Sparkles,
  SquareSigma,
  Zap,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

type Program = {
  name: string;
  icon: LucideIcon;
  link?: string;
};

type SchoolGroup = {
  school: string;
  courses: Program[];
};

type ProgramBucket = "ug" | "pg" | "phd";

const tabItems: { key: ProgramBucket; label: string }[] = [
  { key: "ug", label: "UG Courses" },
  { key: "pg", label: "PG Courses" },
  { key: "phd", label: "PhD Programs" },
];

const programsByTab: Record<ProgramBucket, SchoolGroup[]> = {
  ug: [
    {
      school: "School of AI & ML",
      courses: [
        { name: "B.Tech CSE (Artificial Intelligence)", icon: Bot, link: "/department/ai" },
        { name: "B.Tech CSE (AI and ML)", icon: BrainCircuit, link: "/department/aiml" },
        { name: "B.Tech CSE (AI and Data Science)", icon: ChartNoAxesCombined, link: "/department/cseds" },
        { name: "B.Tech CSE (AI and Robotics)", icon: Bot, link: "/department/ai" },
      ],
    },
    {
      school: "School of Computing",
      courses: [
        { name: "B.Tech Computer Science and Engineering", icon: Cpu, link: "/department/cse" },
        { name: "B.Tech CSE (Cyber Security)", icon: ShieldCheck, link: "/department/csecs" },
        { name: "BCA - Bachelor of Computer Applications", icon: Monitor, link: "/department/mca" },
      ],
    },
    {
      school: "School of Engineering",
      courses: [
        { name: "B.Tech in Civil Engineering", icon: HardHat, link: "/department/ce" },
        { name: "B.Tech in Electrical & Electronics Engineering", icon: Zap, link: "/department/eee" },
        { name: "B.Tech in Mechanical Engineering", icon: Cog, link: "/department/me" },
        { name: "B.Tech in Electronics & Communication Engineering", icon: CircuitBoard, link: "/department/ece" },
        { name: "B.Tech in Bioinformatics", icon: Dna, link: "/department/bioinfo" },
      ],
    },
    {
      school: "School of Management",
      courses: [{ name: "BBA - Bachelor of Business Administration", icon: BriefcaseBusiness, link: "/department/mba" }],
    },
  ],
  pg: [
    {
      school: "School of AI & ML",
      courses: [
        { name: "M.Tech CSE (AI and ML)", icon: Sparkles },
      ],
    },
    {
      school: "School of Computing",
      courses: [
        { name: "M.Tech Computer Science and Engineering", icon: Network },
        { name: "MCA - Master of Computer Applications", icon: Code2, link: "/department/mca" },
      ],
    },
    {
      school: "School of Engineering",
      courses: [
        { name: "M.Tech Civil Engineering (Construction Engineering & Management)", icon: Construction },
        { name: "M.Tech Automation and Robotics", icon: Rocket },
        { name: "M.Tech Electric Vehicle Technology", icon: Gauge },
        { name: "M.Tech VLSI Design & Embedded Systems", icon: Cable },
      ],
    },
    {
      school: "School of Management",
      courses: [{ name: "MBA - Master of Business Administration", icon: Landmark, link: "/department/mba" }],
    },
  ],
  phd: [
    {
      school: "School of AI & ML",
      courses: [
        { name: "Ph.D Artificial Intelligence & Machine Learning", icon: Sparkles },
      ],
    },
    {
      school: "School of Computing",
      courses: [
        { name: "Ph.D Computer Science", icon: Orbit },
        { name: "Ph.D Computer Science and Engineering", icon: Library },
      ],
    },
    {
      school: "School of Engineering",
      courses: [
        { name: "Ph.D Civil Engineering", icon: Building2 },
        { name: "Ph.D Electronics & Communication Engineering", icon: ScanLine },
        { name: "Ph.D Electrical & Electronics Engineering", icon: Binary },
        { name: "Ph.D Mechanical Engineering", icon: Microscope },
      ],
    },
    {
      school: "School of Management",
      courses: [{ name: "Ph.D MBA", icon: BookOpenCheck }],
    },
    {
      school: "School of Science",
      courses: [
        { name: "Ph.D Physics", icon: Atom },
        { name: "Ph.D Chemistry", icon: FlaskConical },
        { name: "Ph.D Mathematics", icon: Sigma },
        { name: "Ph.D English", icon: SquareSigma },
      ],
    },
  ],
};

const schoolContainerVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.985, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 130,
      damping: 17,
      mass: 0.8,
    },
  },
};

const AcademicsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<ProgramBucket>("ug");
  const [tabDirection, setTabDirection] = useState(1);

  const activeIndex = tabItems.findIndex((tab) => tab.key === activeTab);

  const handleTabChange = (nextTab: ProgramBucket) => {
    const nextIndex = tabItems.findIndex((tab) => tab.key === nextTab);

    if (nextIndex !== activeIndex) {
      setTabDirection(nextIndex > activeIndex ? 1 : -1);
      setActiveTab(nextTab);
    }
  };

  return (
    <section id="academics" className="py-24 bg-[#f5f6f8]">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-[#b30000] font-body font-semibold tracking-[0.18em] uppercase text-sm md:text-sm mb-3">Academics</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#0f172a] mb-4 leading-tight">
              Programs Offered
            </h2>
            <p className="font-body text-[#1a1a1a] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Explore MITS academic pathways across engineering, computing, management, and science through a structured institutional catalog.
            </p>
          </div>
        </ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-[#d9dee5] bg-white/85 backdrop-blur-sm p-2 md:p-2.5 mb-10 shadow-[0_8px_24px_rgba(15,42,68,0.08)]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {tabItems.map((tab) => {
                const isActive = activeTab === tab.key;

                return (
                  <motion.button
                    key={tab.key}
                    type="button"
                    onClick={() => handleTabChange(tab.key)}
                    whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.992 }}
                    className={`relative overflow-hidden rounded-xl px-4 py-3 text-sm md:text-base font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-white shadow-[0_10px_20px_rgba(179,0,0,0.26)]"
                        : "bg-white text-[#0f2a44] hover:bg-[#eef2f6]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="programs-tab-indicator"
                        className="absolute inset-0 bg-[#b30000]"
                        transition={shouldReduceMotion ? { duration: 0.15 } : { type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 20, x: 40 * tabDirection }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, x: 0 }
              }
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -10, x: -32 * tabDirection }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0.18 }
                  : { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
              }
              className="space-y-10"
            >
              {programsByTab[activeTab].map((group) => (
                <div key={group.school}>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44] mb-5">
                    {group.school}
                  </h3>

                  <motion.div
                    variants={schoolContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.18 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                  >
                    {group.courses.map((course) => {
                      const Icon = course.icon;

                      return (
                        <motion.article
                          key={course.name}
                          variants={cardVariants}
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  y: -7,
                                  scale: 1.013,
                                  transition: {
                                    type: "spring",
                                    stiffness: 320,
                                    damping: 20,
                                    mass: 0.52,
                                  },
                                }
                          }
                          whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
                          className="group relative overflow-hidden rounded-2xl border border-[#dde2e9] bg-[#f3f5f8] shadow-[0_6px_18px_rgba(15,42,68,0.09)] px-4 py-3.5 flex items-center gap-3.5 transition-shadow duration-300 hover:shadow-[0_16px_30px_rgba(15,42,68,0.16)]"
                        >
                          {course.link && (
                            <Link to={course.link} className="absolute inset-0 z-20" aria-label={course.name} />
                          )}
                          <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-[linear-gradient(105deg,rgba(255,255,255,0.12)_0%,rgba(179,0,0,0.06)_35%,rgba(15,42,68,0.04)_100%)] transition-opacity duration-300" />
                          <div className="relative z-10 w-12 h-12 shrink-0 rounded-xl border border-[#b30000]/40 bg-white flex items-center justify-center shadow-[0_3px_10px_rgba(179,0,0,0.08)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                            <Icon className="w-5 h-5 text-[#b30000]" />
                          </div>
                          <p className="relative z-10 text-sm md:text-[15px] font-medium leading-snug text-[#0f2a44] text-left tracking-normal transition-transform duration-300 group-hover:translate-x-1">
                            {course.name}
                          </p>
                        </motion.article>
                      );
                    })}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;


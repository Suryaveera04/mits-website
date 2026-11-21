import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  FileText,
  ExternalLink,
  Award,
  Users,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Trophy,
  BookOpen,
  ClipboardList,
  ScrollText,
  GraduationCap,
  Building2,
  ShieldCheck,
  Download,
  Target,
  Layers,
  Milestone,
  Calendar,
  MessageSquare,
  BarChart3,
  Library as LibraryIcon,
  Globe,
  Newspaper,
  BookMarked,
  FolderTree,
  ImageIcon,
  Bell,
  Search,
  Files,
  Star,
  ClipboardCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  about,
  objectives,
  strategies,
  functions as iqacFunctions,
  benefits,
  followUp,
  qualityFrameworkImg,
  actionPlanImg,
  milestonesImg,
  qualityInitiativeInfographics,
  organogramPdf,
  compositionIntroText,
  compositionMitsText,
  compositionNotes,
  compositionYearly,
  aqarSubmissionParagraphs,
  aqarTimelineParagraphs,
  iqacENotices,
  milestones,
  certifications,
  aicteMandate,
  qualityInitiatives,
  newsletterDocs,
  iqacPolicies,
  mitsDtbuPolicies,
  meetingsMom,
  meetingsDtbu,
  aqarReportsList,
  aqarAccordionGroups,
  userReportsDocs,
  feedbackSystemData,
  userFeedbackSections,
  userAaaDocs,
  userAaaRefDocs,
  userStrategicDocs,
  userBestPracticesDocs,
  userSssDocs,
  userAnnualReportsDocs,
  userIqacHoursDocs,
  userHandbookDocs,
  userUgcMandateDocs,
  userIqacEventsDocs,
  userEiqacDocs,
  userGalleryDocs,
  userManualsTableData,
  naacReforms2024,
  econtent,
  poPsoCoUG,
  poPsoCoPG,
  contact,
  type Doc,
} from "@/data/iqac";

const BASE = "https://mits.edu/";

type SectionKey =
  | "about"
  | "objectives"
  | "functions"
  | "composition"
  | "organogram"
  | "policies"
  | "policiesDtbu"
  | "activities"
  | "initiatives"
  | "milestones"
  | "meetings"
  | "meetingsDtbu"
  | "certifications"
  | "iso"
  | "ims"
  | "aicte"
  | "aqar"
  | "reports"
  | "feedback"
  | "aaa"
  | "aaaRef"
  | "strategic"
  | "bestPractices"
  | "distinctive"
  | "sss"
  | "econtent"
  | "popsoco"
  | "annual"
  | "newsletter"
  | "handbook"
  | "ugc"
  | "events"
  | "eiqac"
  | "naacReforms"
  | "manuals"
  | "gallery"
  | "contact";

const sections: { key: SectionKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "about", label: "About IQAC", icon: BookOpen },
  { key: "objectives", label: "Objective & Strategies", icon: Target },
  { key: "functions", label: "Functions & Benefits", icon: Layers },
  { key: "composition", label: "IQAC Composition", icon: Users },
  { key: "organogram", label: "IQAC Organogram", icon: FolderTree },
  { key: "policies", label: "IQAC Policies", icon: ShieldCheck },
  { key: "policiesDtbu", label: "Policies (MITS DTBU)", icon: ShieldCheck },
  { key: "activities", label: "Activities of IQAC", icon: Calendar },
  { key: "initiatives", label: "IQAC Quality Initiatives", icon: Sparkles },
  { key: "milestones", label: "Milestones", icon: Milestone },
  { key: "meetings", label: "Minutes of the Meeting", icon: ClipboardList },
  { key: "meetingsDtbu", label: "Minutes of Meeting (MITS DTBU)", icon: ClipboardList },
  { key: "certifications", label: "Certifications", icon: Award },
  { key: "iso", label: "ISO 21001 : 2018 EOMS", icon: ShieldCheck },
  { key: "ims", label: "IMS (ISO 14001:2015 and ISO 50001:2018)", icon: ShieldCheck },
  { key: "aicte", label: "AICTE Quality Mandate", icon: Trophy },
  { key: "aqar", label: "AQAR", icon: ClipboardCheck },
  { key: "reports", label: "Reports", icon: FileText },
  { key: "feedback", label: "Feedback System", icon: MessageSquare },
  { key: "aaa", label: "Academic and Administrative Audit (AAA)", icon: ScrollText },
  { key: "aaaRef", label: "AAA & R References", icon: BookMarked },
  { key: "strategic", label: "Strategic Plan", icon: Target },
  { key: "bestPractices", label: "Best Practice of the Institute", icon: Star },
  { key: "distinctive", label: "Distinctive Performance of the Institute", icon: Sparkles },
  { key: "sss", label: "Student Satisfaction Survey", icon: BarChart3 },
  { key: "econtent", label: "e-Content Facility", icon: LibraryIcon },
  { key: "popsoco", label: "Vision-Mission-PEO-PO-PSO-CO of All Departments", icon: GraduationCap },
  { key: "annual", label: "MITS Annual Report", icon: FileText },
  { key: "newsletter", label: "Newsletter", icon: Newspaper },
  { key: "handbook", label: "Hand Book", icon: BookMarked },
  { key: "ugc", label: "UGC Quality Mandate", icon: Building2 },
  { key: "events", label: "IQAC Events & Collaborations", icon: Calendar },
  { key: "eiqac", label: "e-IQAC", icon: Globe },
  { key: "naacReforms", label: "NAAC Reforms 2024", icon: ShieldCheck },
  { key: "manuals", label: "Manual / Format / Guidelines", icon: Files },
  { key: "gallery", label: "Gallery", icon: ImageIcon },
  { key: "contact", label: "Contact Us", icon: Mail },
];

const TabHeading = ({ title }: { title: string }) => (
  <div className="border-b border-slate-200 pb-2.5 mb-4">
    <h3 className="font-display font-bold text-xl md:text-2xl text-[#0f2a44] uppercase tracking-wide">
      {title}
    </h3>
  </div>
);

const BoldIntro = ({ text }: { text: string }) => (
  <p className="font-body font-bold text-[#0f2a44] text-sm md:text-base mb-3 leading-relaxed">
    {text}
  </p>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2.5 my-3 font-body text-slate-800 text-sm md:text-base leading-relaxed">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#b31317] shrink-0 mt-1.5 ring-2 ring-[#b31317]/25" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const PublicationList = ({ docs }: { docs: Doc[] }) => (
  <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs my-4">
    {docs.length === 0 ? (
      <p className="p-4 text-sm font-body text-slate-500 italic">No documents available.</p>
    ) : (
      docs.map((doc, idx) => (
        <a
          key={idx}
          href={doc.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between py-3.5 px-5 hover:bg-slate-50 transition-colors group"
        >
          <span className="font-body text-sm font-semibold text-[#0f2a44] group-hover:text-[#b31317] transition-colors pr-4">
            {doc.title}
          </span>
          <span className="shrink-0 flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-[#b31317]">
            {doc.type === "link" ? (
              <ExternalLink className="w-4 h-4 text-[#caa74d]" />
            ) : (
              <div className="flex items-center gap-1 text-slate-500 group-hover:text-[#b31317]">
                <FileText className="w-4 h-4 text-[#b31317]" />
                <Download className="w-3.5 h-3.5" />
              </div>
            )}
          </span>
        </a>
      ))
    )}
  </div>
);

const IQACENoticeBoardTicker = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (container) {
      const scrollAmount = direction === "left" ? -460 : 460;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-8 rounded-2xl border border-[#0f2a44]/15 bg-white shadow-md overflow-hidden">
      <div className="bg-[#b31317] text-white px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bell className="w-5 h-5 animate-pulse text-[#caa74d]" />
          <h3 className="font-display font-bold text-base md:text-xl text-white">IQAC E-Notice Board</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block text-[11px] font-semibold tracking-wider uppercase bg-white/15 px-3 py-1 rounded-full text-white/90 mr-1">
            Live Updates
          </span>
          <button
            onClick={() => scroll("left")}
            aria-label="Previous notice"
            className="p-1.5 rounded-lg bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next notice"
            className="p-1.5 rounded-lg bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        className="relative p-5 md:p-6 bg-gradient-to-br from-slate-50/80 to-white overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={(el) => setContainer(el)}
          className="overflow-x-auto scrollbar-none flex gap-5 py-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          <motion.div
            className="flex gap-5 shrink-0"
            animate={isPaused ? { x: undefined } : { x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 120 }}
          >
            {[...iqacENotices, ...iqacENotices].map((item, idx) => (
              <div
                key={idx}
                className="w-[340px] sm:w-[420px] md:w-[480px] shrink-0 bg-white rounded-2xl border border-slate-200 p-5 md:p-6 shadow-sm hover:border-[#b31317] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-display font-bold text-[#0f2a44] text-base md:text-lg leading-snug">
                      {item.title}
                    </h4>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#b31317] shrink-0 mt-1.5" />
                  </div>
                  <p className="font-body text-sm text-slate-700 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {item.url && (
                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#b31317] hover:text-[#0f2a44] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{item.linkText || "Click here for Details"}</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const IQACMilestonesSlider = () => {
  const [selectedYearIdx, setSelectedYearIdx] = useState(0);
  const currentMilestone = milestones[selectedYearIdx] || milestones[0];

  const handlePrev = () => {
    setSelectedYearIdx((prev) => (prev > 0 ? prev - 1 : milestones.length - 1));
  };

  const handleNext = () => {
    setSelectedYearIdx((prev) => (prev < milestones.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="mb-10 space-y-6">
      <div className="rounded-2xl border border-[#0f2a44]/15 bg-white shadow-xl overflow-hidden">
        <div className="bg-[#b31317] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Milestone className="w-5 h-5 text-[#caa74d]" />
            <h3 className="font-display font-bold text-base md:text-xl text-white tracking-wider">MILESTONES</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Milestone"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm font-bold tracking-widest uppercase bg-white/15 px-3 py-1 rounded-full text-white">
              {currentMilestone.year}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next Milestone"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-6 md:p-8 bg-gradient-to-br from-slate-50 via-white to-slate-50/50 space-y-6">
          <p className="text-sm uppercase tracking-widest font-bold text-slate-400 text-center md:text-left">
            Select Year to View Milestone
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-2 md:gap-3">
            {milestones.map((m, idx) => {
              const isSelected = idx === selectedYearIdx;
              return (
                <button
                  key={m.year}
                  onClick={() => setSelectedYearIdx(idx)}
                  className={`py-2 px-3 rounded-xl transition-all cursor-pointer focus:outline-none flex flex-col items-center justify-center gap-0.5 ${
                    isSelected
                      ? "bg-gradient-to-br from-[#b31317] to-[#8a0e12] text-white shadow-md ring-2 ring-[#caa74d] scale-105"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-[#b31317] hover:text-[#b31317] hover:shadow-xs"
                  }`}
                >
                  <span className={`text-sm font-extrabold font-display ${isSelected ? "text-white" : ""}`}>
                    {m.year}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? "bg-[#caa74d]" : "bg-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <motion.div
            key={currentMilestone.year}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-md flex flex-col md:flex-row items-center gap-6 text-center md:text-left relative overflow-hidden"
          >
            <div className="w-28 h-28 md:w-36 md:h-36 shrink-0 rounded-2xl bg-gradient-to-br from-slate-50 to-white p-4 border border-slate-200 shadow-sm flex items-center justify-center">
              <img
                src="https://mits.ac.in/assets/images/mits-logo.png"
                alt="MITS Deemed to be University Logo"
                className="w-full h-auto max-h-full object-contain"
              />
            </div>
            
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#b31317] text-white font-extrabold text-sm shadow-xs">
                  Year {currentMilestone.year}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#caa74d]/15 text-[#0f2a44] font-bold text-sm">
                  MITS Quality Milestone
                </span>
              </div>
              
              <h4 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                {currentMilestone.year === "2025"
                  ? "Deemed to be University Conferment"
                  : currentMilestone.year === "2021"
                  ? "NAAC 'A+' Grade Accreditation"
                  : currentMilestone.year === "2018"
                  ? "NAAC 'A+' Grade (Cycle 1)"
                  : currentMilestone.year === "2014"
                  ? "UGC Autonomous Status Conferred"
                  : "MITS Institutional Quality Milestone"}
              </h4>
              <p className="font-body text-slate-700 text-sm md:text-base leading-relaxed">
                {currentMilestone.event}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const AQARAccordion = ({ search }: { search: string }) => {
  const [openYears, setOpenYears] = useState<Record<string, boolean>>({
    "AQAR 2025-26": true,
  });

  const toggleYear = (year: string) => {
    setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <div className="space-y-3 my-4">
      {aqarAccordionGroups.map((group) => {
        const filteredDocs = search.trim()
          ? group.docs.filter((d) => d.title.toLowerCase().includes(search.toLowerCase()))
          : group.docs;

        if (search.trim() && filteredDocs.length === 0 && !group.year.toLowerCase().includes(search.toLowerCase())) {
          return null;
        }

        const isOpen = search.trim() ? true : !!openYears[group.year];

        return (
          <div
            key={group.year}
            className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-all"
          >
            <button
              onClick={() => toggleYear(group.year)}
              className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100/80 transition-colors text-left cursor-pointer"
            >
              <span className="font-display font-bold text-base md:text-lg text-[#b31317]">
                {group.year}
              </span>
              <ChevronRight
                className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                  isOpen ? "rotate-90 text-[#b31317]" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden border-t border-slate-100"
                >
                  <div className="p-3 bg-white">
                    <PublicationList docs={filteredDocs} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const IQAC = () => {
  const [active, setActive] = useState<SectionKey>("about");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filter = (docs: Doc[]) => {
    if (!search.trim()) return docs;
    const q = search.toLowerCase();
    return docs.filter((d) => d.title.toLowerCase().includes(q));
  };

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <Header />

      {/* Hero — Simple Title */}
      <section
        className="relative pt-32 md:pt-40 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight">
            Internal Quality Assurance Cell (IQAC)
          </h1>
        </div>
        <div className="absolute bottom-3 left-6 z-10 hidden sm:block">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs text-white/80">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">›</li>
              <li className="text-[#ffd15c] font-semibold">IQAC</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Layout */}
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-8">
          {/* Sidebar Tabs — Flat Sequential Order, No Numbers */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
              <div className="bg-white rounded-xl border border-[#0f2a44]/10 p-4 shadow-sm">
                <p className="font-display font-bold text-[#0f2a44] text-sm uppercase tracking-wider mb-3 px-2">
                  IQAC Portal
                </p>
                <div className="relative mb-3">
                  <Search className="w-4 h-4 text-[#0f2a44]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search documents..."
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#0f2a44]/15 bg-[#faf7f2] text-sm font-body focus:outline-none focus:border-[#caa74d]"
                  />
                </div>
                <nav className="space-y-0.5">
                  {sections.map((s) => {
                    const Icon = s.icon;
                    const isActive = active === s.key;
                    if (s.key === "iso") {
                      return (
                        <Link
                          key={s.key}
                          to="/iso"
                          className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-body font-semibold text-left transition-all text-[#0f2a44]/80 hover:bg-[#b31317]/10 hover:text-[#b31317] group"
                          title={s.label}
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <Icon className="w-4 h-4 shrink-0 text-[#b31317]" />
                            <span className="truncate">{s.label}</span>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#b31317] shrink-0" />
                        </Link>
                      );
                    }
                    return (
                      <button
                        key={s.key}
                        onClick={() => setActive(s.key)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-body font-semibold text-left transition-all cursor-pointer ${
                          isActive
                            ? "bg-gradient-to-r from-[#b31317] to-[#8a0e12] text-white shadow-md shadow-[#b31317]/20 font-bold"
                            : "text-[#0f2a44]/80 hover:bg-[#b31317]/10 hover:text-[#b31317]"
                        }`}
                        title={s.label}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{s.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
              <div className="bg-gradient-to-br from-[#0f2a44] to-[#152f4f] text-white rounded-xl p-5 shadow-sm">
                <p className="font-body text-xs uppercase tracking-[0.2em] text-[#caa74d] mb-1 font-bold">IQAC Leadership</p>
                <p className="font-display font-bold text-base text-white">Dr. A. V. Pavan Kumar</p>
                <p className="text-xs text-white/70 mb-2">Chief Coordinator</p>
                <div className="space-y-1.5 text-xs text-white/80">
                  <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#caa74d]" /> iqac@mits.ac.in</p>
                  <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#caa74d]" /> +91-8571-280255</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Nav */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileNavOpen((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#0f2a44]/10 rounded-xl shadow-sm cursor-pointer"
            >
              <span className="flex items-center gap-2 font-body font-semibold text-primary">
                {sections.find((s) => s.key === active)?.label}
              </span>
              <ChevronRight className={`w-4 h-4 transition-transform ${mobileNavOpen ? "rotate-90" : ""}`} />
            </button>
            <AnimatePresence>
              {mobileNavOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-white border border-t-0 border-[#0f2a44]/10 rounded-b-xl"
                >
                  <div className="p-2 grid grid-cols-1 sm:grid-cols-2 gap-1 max-h-[60vh] overflow-y-auto">
                    {sections.map((s) => {
                      const Icon = s.icon;
                      const isActive = active === s.key;
                      if (s.key === "iso") {
                        return (
                          <Link
                            key={s.key}
                            to="/iso"
                            onClick={() => setMobileNavOpen(false)}
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs sm:text-sm font-body font-semibold text-left transition-all text-[#0f2a44]/80 hover:bg-[#b31317]/10 hover:text-[#b31317]"
                          >
                            <div className="flex items-center gap-2.5 truncate">
                              <Icon className="w-3.5 h-3.5 shrink-0 text-[#b31317]" />
                              <span className="truncate">{s.label}</span>
                            </div>
                            <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                          </Link>
                        );
                      }
                      return (
                        <button
                          key={s.key}
                          onClick={() => { setActive(s.key); setMobileNavOpen(false); }}
                          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs sm:text-sm font-body font-semibold text-left transition-all cursor-pointer ${
                            isActive ? "bg-[#b31317] text-white font-bold shadow-xs" : "text-[#0f2a44]/80 hover:bg-[#b31317]/10"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{s.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Main Content Area — Exact Data and Structure from official portal */}
          <main className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* 1. About IQAC */}
                {active === "about" && (
                  <section className="space-y-6">
                    <IQACENoticeBoardTicker />

                    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                      <TabHeading title="About IQAC" />
                      <div className="space-y-4 font-body text-slate-800 text-sm md:text-base leading-relaxed text-justify">
                        {about.intro.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>

                      <TabHeading title="Vision" />
                      <p className="font-body text-slate-800 text-sm md:text-base leading-relaxed text-justify">
                        {about.vision}
                      </p>

                      <TabHeading title="Mission" />
                      <BulletList items={about.mission} />

                      <div className="my-6 space-y-6">
                        <img
                          src={qualityFrameworkImg}
                          alt="MITS IQAC Quality Framework"
                          className="w-full h-auto rounded-xl border border-slate-200"
                        />
                        <img
                          src={actionPlanImg}
                          alt="MITS IQAC Action Plan 2026-27"
                          className="w-full h-auto rounded-xl border border-slate-200"
                        />
                      </div>
                    </div>
                  </section>
                )}

                {/* 2. Objective & Strategies */}
                {active === "objectives" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
                    <TabHeading title="OBJECTIVE" />
                    <BoldIntro text="The primary aim of IQAC is" />
                    <BulletList items={objectives} />

                    <div className="my-8 border-t border-slate-100" />

                    <TabHeading title="STRATEGIES" />
                    <BoldIntro text="IQAC shall evolve mechanisms and procedures for:" />
                    <BulletList items={strategies} />
                  </section>
                )}

                {/* 3. Functions & Benefits */}
                {active === "functions" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
                    <TabHeading title="Functions" />
                    <BoldIntro text="Some of the functions expected of the IQAC are :" />
                    <BulletList items={iqacFunctions} />

                    <div className="my-8 border-t border-slate-100" />

                    <TabHeading title="Benefits" />
                    <BoldIntro text="IQAC will facilitate/contribute:" />
                    <BulletList items={benefits} />

                    <div className="my-8 border-t border-slate-100" />

                    <TabHeading title="Follow Up" />
                    <BulletList items={followUp} />
                  </section>
                )}

                {/* 4. IQAC Composition */}
                {active === "composition" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                    <TabHeading title="IQAC Composition" />
                    <p className="font-body text-slate-800 text-sm md:text-base leading-relaxed text-justify">
                      {compositionIntroText}
                    </p>
                    <BoldIntro text="The composition of the IQAC may be as follows:" />
                    <BulletList items={compositionNotes} />

                    <div className="my-6 border-t border-slate-100" />

                    <TabHeading title="Composition of Internal Quality Assurance Cell:" />
                    <p className="font-body text-slate-800 text-sm md:text-base leading-relaxed text-justify">
                      {compositionMitsText}
                    </p>
                    <PublicationList docs={filter(compositionYearly)} />

                    <div className="my-6 border-t border-slate-100" />

                    <TabHeading title="Submission of Annual Quality Assurance Report (AQAR)" />
                    <BulletList items={aqarSubmissionParagraphs} />

                    <div className="my-6 border-t border-slate-100" />

                    <TabHeading title="Timeline" />
                    <p className="font-body text-slate-800 text-sm md:text-base leading-relaxed text-justify mb-3">
                      {aqarTimelineParagraphs[0]}
                    </p>
                    <BulletList items={aqarTimelineParagraphs.slice(1)} />
                  </section>
                )}

                {/* 5. IQAC Organogram */}
                {active === "organogram" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
                    <TabHeading title="IQAC Organogram" />
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200 mb-4">
                      <span className="font-body font-semibold text-[#0f2a44] text-sm">IQAC Organogram Document</span>
                      <a
                        href={organogramPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#b31317] text-white text-xs font-bold hover:bg-[#8a0e12] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> View PDF
                      </a>
                    </div>
                    <iframe
                      src={organogramPdf}
                      title="IQAC Organogram"
                      className="w-full h-[650px] rounded-xl border border-slate-200"
                    />
                  </section>
                )}

                {/* 6. IQAC Policies */}
                {active === "policies" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="IQAC Policies" />
                    <PublicationList docs={filter(iqacPolicies)} />
                  </section>
                )}

                {/* 7. Policies (MITS DTBU) */}
                {active === "policiesDtbu" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="Policies (MITS DTBU)" />
                    <PublicationList docs={filter(mitsDtbuPolicies)} />
                  </section>
                )}

                {/* 8. Activities of IQAC */}
                {active === "activities" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
                    <TabHeading title="Activities of IQAC" />
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200 mb-4">
                      <span className="font-body font-semibold text-[#0f2a44] text-sm">Activities of IQAC Document</span>
                      <a
                        href="https://mits.ac.in/assets/pdf/iqac/Activities of IQAC.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#b31317] text-white text-xs font-bold hover:bg-[#8a0e12] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> View PDF
                      </a>
                    </div>
                    <iframe
                      src="https://mits.ac.in/assets/pdf/iqac/Activities of IQAC.pdf"
                      title="Activities of IQAC"
                      className="w-full h-[650px] rounded-xl border border-slate-200"
                    />
                  </section>
                )}

                {/* 9. IQAC Quality Initiatives */}
                {active === "initiatives" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                    <TabHeading title="IQAC Quality Initiatives" />
                    <div className="space-y-6">
                      {qualityInitiativeInfographics.map((item, idx) => (
                        <div key={idx} className="rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>

                    <PublicationList docs={filter(qualityInitiatives)} />
                  </section>
                )}

                {/* 10. Milestones */}
                {active === "milestones" && (
                  <section className="space-y-6">
                    <TabHeading title="Milestones" />
                    <IQACMilestonesSlider />
                    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                      <img
                        src={milestonesImg}
                        alt="IQAC Milestones Chart"
                        className="w-full h-auto rounded-xl border border-slate-200"
                      />
                    </div>
                  </section>
                )}

                {/* 11. Minutes of the Meeting */}
                {active === "meetings" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="Minutes of Meetings" />
                    <PublicationList docs={filter(meetingsMom)} />
                  </section>
                )}

                {/* 12. Minutes of Meeting (MITS DTBU) */}
                {active === "meetingsDtbu" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="Minutes of Meetings" />
                    <PublicationList docs={filter(meetingsDtbu)} />
                  </section>
                )}

                {/* 13. Certifications */}
                {active === "certifications" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="Assessment, Accreditations, Approvals, and Rankings (AAA & R) Certificates" />
                    <PublicationList docs={filter(certifications)} />
                  </section>
                )}

                {/* 14. ISO 21001 : 2018 EOMS */}
                {active === "iso" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-5">
                    <TabHeading title="ISO 21001 : 2018 EOMS" />
                    <p className="font-body text-slate-800 text-sm md:text-base leading-relaxed">
                      MITS is certified under ISO 21001:2018 Educational Organizations Management System (EOMS).
                    </p>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="font-body font-semibold text-[#0f2a44] text-sm">
                        Explore complete ISO 21001 : 2018 portal
                      </span>
                      <Link
                        to="/iso"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#b31317] text-white text-xs font-bold hover:bg-[#8a0e12] transition-colors"
                      >
                        Visit ISO Portal <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </section>
                )}

                {/* 15. IMS (ISO 14001:2015 and ISO 50001:2018) */}
                {active === "ims" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-5">
                    <TabHeading title="IMS (ISO 14001:2015 and ISO 50001:2018)" />
                    <p className="font-body text-slate-800 text-sm md:text-base leading-relaxed">
                      Integrated Management System covering Environmental Management (ISO 14001:2015) and Energy Management (ISO 50001:2018).
                    </p>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="font-body font-semibold text-[#0f2a44] text-sm">
                        Explore complete IMS portal
                      </span>
                      <Link
                        to="/ims"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#b31317] text-white text-xs font-bold hover:bg-[#8a0e12] transition-colors"
                      >
                        Visit IMS Portal <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </section>
                )}

                {/* 16. AICTE Quality Mandate */}
                {active === "aicte" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="AICTE Quality Mandate" />
                    <PublicationList docs={filter(aicteMandate)} />
                  </section>
                )}

                {/* 17. AQAR */}
                {active === "aqar" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="AQAR" />
                    <AQARAccordion search={search} />
                  </section>
                )}

                {/* 18. Reports */}
                {active === "reports" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="Reports" />
                    <PublicationList docs={filter(userReportsDocs)} />
                  </section>
                )}

                {/* 19. Feedback System */}
                {active === "feedback" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                    <TabHeading title="AICTE's 360 Degree Feedback" />
                    <PublicationList docs={filter(feedbackSystemData.aicte360Feedback)} />

                    <div className="my-6 border-t border-slate-100" />
                    <TabHeading title="Stakeholder Feedback" />
                    <PublicationList docs={filter(feedbackSystemData.stakeholderFeedback)} />

                    <div className="my-6 border-t border-slate-100" />
                    <TabHeading title="Stakeholder Feedback - Action Taken Report" />
                    <PublicationList docs={filter(feedbackSystemData.actionTakenReports)} />

                    <div className="my-6 border-t border-slate-100" />
                    <TabHeading title="Evidences on ATR" />
                    <PublicationList docs={filter(feedbackSystemData.evidencesOnAtr)} />

                    <div className="my-6 border-t border-slate-100" />
                    <TabHeading title="Online Feedback Forms" />
                    <BoldIntro text="Feedback on Curriculum" />
                    <PublicationList docs={filter(feedbackSystemData.onlineCurriculumForms)} />

                    <div className="my-6 border-t border-slate-100" />
                    <TabHeading title="Other Feedback Views" />
                    <PublicationList docs={filter(feedbackSystemData.otherFeedbackViews)} />
                  </section>
                )}

                {/* 20. Academic and Administrative Audit (AAA) */}
                {active === "aaa" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                    <TabHeading title="Academic and Administrative Audit (AAA)" />
                    <p className="font-body text-slate-800 text-sm md:text-base leading-relaxed text-justify">
                      {userAaaDocs.introParagraph}
                    </p>

                    <TabHeading title="Academic Audit" />
                    <p className="font-body text-slate-800 text-sm md:text-base leading-relaxed text-justify">
                      {userAaaDocs.academicAuditParagraph}
                    </p>

                    <TabHeading title="Administrative Audit" />
                    <p className="font-body text-slate-800 text-sm md:text-base leading-relaxed text-justify">
                      {userAaaDocs.administrativeAuditParagraph}
                    </p>

                    <PublicationList docs={filter(userAaaDocs.policies)} />

                    <div className="my-6 border-t border-slate-100" />
                    <TabHeading title="Academic and Administrative Audit (AAA) Reports" />
                    <BoldIntro text="External Audit Reports" />
                    <PublicationList docs={filter(userAaaDocs.externalReports)} />

                    <BoldIntro text="Internal Audit Reports" />
                    <PublicationList docs={filter(userAaaDocs.internalReports)} />

                    <div className="my-6 border-t border-slate-100" />
                    <TabHeading title="Action Taken Reports (ATR)" />
                    <BoldIntro text="External Audit ATR" />
                    <PublicationList docs={filter(userAaaDocs.externalAtr)} />

                    <BoldIntro text="Internal Audit ATR" />
                    <PublicationList docs={filter(userAaaDocs.internalAtr)} />
                  </section>
                )}

                {/* 21. AAA & R References */}
                {active === "aaaRef" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="Assessment, Accreditations, Approvals, and Rankings (AAA & R) References" />
                    <PublicationList docs={filter(userAaaRefDocs)} />
                  </section>
                )}

                {/* 22. Strategic Plan */}
                {active === "strategic" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                    <TabHeading title="Institutional Development Plan (IDP) - MITS DTBU" />
                    <PublicationList docs={filter(userStrategicDocs.slice(0, 3))} />

                    <div className="my-6 border-t border-slate-100" />
                    <TabHeading title="Strategic Plan (MITS Autonomous)" />
                    <PublicationList docs={filter(userStrategicDocs.slice(3))} />
                  </section>
                )}

                {/* 23. Best Practice of the Institute */}
                {active === "bestPractices" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="Best Practice of the Institute" />
                    <PublicationList docs={filter(userBestPracticesDocs)} />
                  </section>
                )}

                {/* 24. Distinctive Performance of the Institute */}
                {active === "distinctive" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
                    <TabHeading title="Distinctive Performance of the Institute" />
                    <p className="font-body text-slate-800 text-sm md:text-base leading-relaxed">
                      The IQAC shall have the following functions:
                    </p>
                  </section>
                )}

                {/* 25. Student Satisfaction Survey */}
                {active === "sss" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="Student Satisfaction Survey" />
                    <PublicationList docs={filter(userSssDocs)} />
                  </section>
                )}

                {/* 26. e-Content Facility */}
                {active === "econtent" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="e-Content Facility" />
                    <PublicationList docs={filter(econtent)} />
                  </section>
                )}

                {/* 27. Vision-Mission-PEO-PO-PSO-CO of All Departments */}
                {active === "popsoco" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                    <TabHeading title="Vision-Mission-PEO-PO-PSO-CO of All Departments" />
                    <div>
                      <h4 className="font-display font-bold text-lg text-[#0f2a44] mb-2">Under Graduate</h4>
                      <PublicationList docs={filter(poPsoCoUG)} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-[#0f2a44] mb-2">Post Graduate</h4>
                      <PublicationList docs={filter(poPsoCoPG)} />
                    </div>
                  </section>
                )}

                {/* 29. MITS Annual Report */}
                {active === "annual" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                    <TabHeading title="MITS Annual Report" />
                    <PublicationList docs={filter(userAnnualReportsDocs)} />

                    <div className="my-6 border-t border-slate-100" />
                    <TabHeading title="IQAC Hours Reports" />
                    <PublicationList docs={filter(userIqacHoursDocs)} />
                  </section>
                )}

                {/* 30. Newsletter */}
                {active === "newsletter" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="Newsletter" />
                    <PublicationList docs={filter(newsletterDocs)} />
                  </section>
                )}

                {/* 31. Hand Book */}
                {active === "handbook" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="Hand Book" />
                    <PublicationList docs={filter(userHandbookDocs)} />
                  </section>
                )}

                {/* 32. UGC Quality Mandate */}
                {active === "ugc" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="UGC Quality Mandate" />
                    <PublicationList docs={filter(userUgcMandateDocs)} />
                  </section>
                )}

                {/* 33. IQAC Events & Collaborations */}
                {active === "events" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="IQAC Events & Collaborations" />
                    <PublicationList docs={filter(userIqacEventsDocs)} />
                  </section>
                )}

                {/* 34. e-IQAC */}
                {active === "eiqac" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="e-IQAC Trackers" />
                    <PublicationList docs={filter(userEiqacDocs)} />
                  </section>
                )}

                {/* 36. NAAC Reforms 2024 */}
                {active === "naacReforms" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <TabHeading title="NAAC Reforms 2024" />
                    <PublicationList docs={filter(naacReforms2024)} />
                  </section>
                )}

                {/* 37. Manual / Format / Guidelines */}
                {active === "manuals" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                    <TabHeading title="Manual / Format / Guidelines" />
                    
                    <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-[#b31317] text-white">
                              <th className="py-3 px-4 font-display font-bold text-xs uppercase tracking-wider text-white w-16 text-center">
                                S.No
                              </th>
                              <th className="py-3 px-4 font-display font-bold text-xs uppercase tracking-wider text-white">
                                Manual / Format / Templates
                              </th>
                              <th className="py-3 px-4 font-display font-bold text-xs uppercase tracking-wider text-white">
                                View Formats
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-body text-sm text-slate-700">
                            {userManualsTableData.map((row) => {
                              const matchesSearch =
                                row.title.toLowerCase().includes(search.toLowerCase().trim()) ||
                                row.formats.some(f => f.name.toLowerCase().includes(search.toLowerCase().trim()));
                              if (search.trim() && !matchesSearch) return null;

                              return (
                                <tr key={row.sno} className="hover:bg-red-50/30 transition-colors">
                                  <td className="py-3.5 px-4 font-bold text-slate-500 text-center align-top">
                                    {row.sno}
                                  </td>
                                  <td className="py-3.5 px-4 align-top">
                                    {(() => {
                                      const parts = row.title.split(/&bull;|•/).map(p => p.trim()).filter(Boolean);
                                      if (parts.length <= 1) {
                                        return (
                                          <span className="font-bold text-[#0f2a44] text-sm">
                                            {row.title}
                                          </span>
                                        );
                                      }
                                      const [heading, ...bullets] = parts;
                                      return (
                                        <div className="flex flex-col gap-1.5 text-sm">
                                          <span className="font-bold text-[#b31317]">
                                            {heading}
                                          </span>
                                          <ul className="space-y-1 pl-1">
                                            {bullets.map((bullet, bIdx) => (
                                              <li key={bIdx} className="flex items-start gap-1.5 text-slate-700 font-normal">
                                                <span className="text-slate-400 font-bold">•</span>
                                                <span>{bullet}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      );
                                    })()}
                                  </td>
                                  <td className="py-3.5 px-4 align-top">
                                    {row.formats.length === 0 ? (
                                      <span className="text-slate-400 italic text-sm">-</span>
                                    ) : (
                                      <div className="flex flex-col gap-2">
                                        {row.formats.map((fmt, idx) => (
                                          <a
                                            key={idx}
                                            href={fmt.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#b31317] hover:text-[#8a0e12] hover:underline"
                                          >
                                            {fmt.type === "link" ? (
                                              <ExternalLink className="w-3.5 h-3.5 shrink-0 text-[#caa74d]" />
                                            ) : (
                                              <Download className="w-3.5 h-3.5 shrink-0 text-[#b31317]" />
                                            )}
                                            <span>{fmt.name}</span>
                                          </a>
                                        ))}
                                      </div>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                )}

                {/* Gallery */}
                {active === "gallery" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                    <TabHeading title="Gallery" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                      {userGalleryDocs.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-2xs group flex flex-col justify-between"
                        >
                          <div className="overflow-hidden bg-slate-100 flex items-center justify-center p-2">
                            <img
                              src={item.src || item.img}
                              alt={item.title}
                              className="w-full h-52 object-contain group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          <div className="p-4 flex-1 flex flex-col justify-between bg-white border-t border-slate-100">
                            <p className="font-body text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* 39. Contact Us */}
                {active === "contact" && (
                  <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                    <TabHeading title="Contact Us" />
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center space-y-2">
                        <Users className="w-6 h-6 text-[#b31317] mx-auto" />
                        <h4 className="font-display font-bold text-base text-[#0f2a44]">Dr. K. Sathesh</h4>
                        <p className="text-xs font-semibold text-[#b31317]">IQAC & NAAC Coordinator</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center space-y-2">
                        <Users className="w-6 h-6 text-[#b31317] mx-auto" />
                        <h4 className="font-display font-bold text-base text-[#0f2a44]">Mrs. Kowsalya P</h4>
                        <p className="text-xs font-semibold text-[#b31317]">IQAC Document Manager</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center space-y-2">
                        <Users className="w-6 h-6 text-[#b31317] mx-auto" />
                        <h4 className="font-display font-bold text-base text-[#0f2a44]">Mrs. K. Revathi</h4>
                        <p className="text-xs font-semibold text-[#b31317]">IQAC Document Manager</p>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4 font-body text-sm text-slate-800">
                      <h4 className="font-display font-bold text-base text-[#0f2a44]">Address</h4>
                      <div className="space-y-1 text-slate-700 leading-relaxed">
                        <p className="font-semibold text-[#0f2a44]">Room No: SRB211A</p>
                        <p>Madanapalle Institute of Technology & Science</p>
                        <p>Deemed to be University</p>
                        <p>Madanapalle-Kadiri Road, Kurabalakota Mandal</p>
                        <p>Madanapalle - 517325, Andhra Pradesh, India</p>
                      </div>

                      <div className="pt-3 border-t border-slate-200 space-y-2">
                        <p className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#b31317]" />
                          <span>Phone: +91- 08571280255, 9100973388</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#b31317]" />
                          <span>Email: iqaccoordinator@mits.ac.in ; iqacdocmanager@mits.ac.in</span>
                        </p>
                      </div>
                    </div>
                  </section>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IQAC;

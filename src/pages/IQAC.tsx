import { useState, useMemo } from "react";
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
  Video,
  Menu,
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
  CheckCircle2,
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
  aqarReportsYearly,
  iqacENotices,
  organogram,
  naacReforms2024,
  milestones,
  certifications,
  aicteMandate,
  aicte360Feedback,
  feedbackPolicy,
  actionTakenReports,
  atrEvidence,
  feedbackForms,
  aaaOverview,
  aaaPolicyDocs,
  externalAuditReports,
  internalAuditReports,
  externalAuditATR,
  internalAuditATR,
  aaaReferences,
  strategicPlan,
  econtent,
  poPsoCoUG,
  poPsoCoPG,
  annualReports,
  iqacHoursReports,
  ugcMandate,
  iqacEvents,
  auditFormats,
  naacFormats,
  nbaFormats,
  nirfFormats,
  checkLists,
  manualsTable,
  qualityInitiatives,
  qualityInitiativesOverview,
  newsletterDocs,
  handbookDocs,
  iqacPolicies,
  mitsDtbuPolicies,
  meetingsMom,
  meetingsDtbu,
  iso21001Subtabs,
  imsSubtabs,
  aqarReportsList,
  userReportsDocs,
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
  contact,
  bannerImage,
  type Doc,
} from "@/data/iqac";

const BASE = import.meta.env.BASE_URL;

type SectionKey =
  | "about"
  | "objectives"
  | "functions"
  | "composition"
  | "organogram"
  | "policies"
  | "activities"
  | "initiatives"
  | "milestones"
  | "meetings"
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

const sections: { key: SectionKey; label: string; icon: React.ComponentType<{ className?: string }>; group: string }[] = [
  { key: "about", label: "About IQAC", icon: BookOpen, group: "Introduction" },
  { key: "objectives", label: "Objectives & Strategies", icon: Target, group: "Introduction" },
  { key: "functions", label: "Functions & Benefits", icon: Layers, group: "Introduction" },
  { key: "composition", label: "IQAC Composition", icon: Users, group: "Governance" },
  { key: "organogram", label: "IQAC Organogram", icon: FolderTree, group: "Governance" },
  { key: "policies", label: "IQAC Policies", icon: ShieldCheck, group: "Governance" },
  { key: "policiesDtbu", label: "Policies (MITS DTBU)", icon: ShieldCheck, group: "Governance" },
  { key: "activities", label: "Activities of IQAC", icon: Calendar, group: "Operations" },
  { key: "initiatives", label: "Quality Initiatives", icon: Sparkles, group: "Operations" },
  { key: "milestones", label: "Milestones", icon: Milestone, group: "Operations" },
  { key: "meetings", label: "Minutes of Meeting", icon: ClipboardList, group: "Operations" },
  { key: "meetingsDtbu", label: "Minutes of Meeting (MITS DTBU)", icon: ClipboardList, group: "Operations" },
  { key: "certifications", label: "Certifications", icon: Award, group: "Accreditation" },
  { key: "iso", label: "ISO 21001 : 2018 EOMS", icon: ShieldCheck, group: "Accreditation" },
  { key: "ims", label: "IMS (ISO 14001:2015 & ISO 50001:2018)", icon: ShieldCheck, group: "Accreditation" },
  { key: "aicte", label: "AICTE Quality Mandate", icon: Trophy, group: "Accreditation" },
  { key: "aqar", label: "AQAR", icon: ClipboardCheck, group: "Accreditation" },
  { key: "reports", label: "Reports", icon: FileText, group: "Accreditation" },
  { key: "feedback", label: "Feedback System", icon: MessageSquare, group: "Assurance" },
  { key: "aaa", label: "Academic & Admin Audit", icon: ScrollText, group: "Assurance" },
  { key: "aaaRef", label: "AAA & References", icon: BookMarked, group: "Assurance" },
  { key: "strategic", label: "Strategic Plan", icon: Target, group: "Planning" },
  { key: "bestPractices", label: "Best Practices", icon: Star, group: "Planning" },
  { key: "distinctive", label: "Distinctive Performance", icon: Sparkles, group: "Planning" },
  { key: "sss", label: "Student Satisfaction Survey", icon: BarChart3, group: "Assurance" },
  { key: "econtent", label: "e-Content Facility", icon: LibraryIcon, group: "Academic" },
  { key: "popsoco", label: "PO-PSO-CO", icon: GraduationCap, group: "Academic" },
  { key: "annual", label: "MITS Annual Report", icon: FileText, group: "Publications" },
  { key: "newsletter", label: "Newsletter", icon: Newspaper, group: "Publications" },
  { key: "handbook", label: "Hand Book", icon: BookMarked, group: "Publications" },
  { key: "ugc", label: "UGC Quality Mandate", icon: Building2, group: "External" },
  { key: "events", label: "IQAC Events & Collaborations", icon: Calendar, group: "External" },
  { key: "eiqac", label: "e-IQAC", icon: Globe, group: "External" },
  { key: "naacReforms", label: "NAAC Reforms 2024", icon: ShieldCheck, group: "Accreditation" },
  { key: "manuals", label: "Manuals / Formats / Guidelines", icon: Files, group: "Downloads" },
  { key: "gallery", label: "Gallery", icon: ImageIcon, group: "External" },
  { key: "contact", label: "Contact Us", icon: Mail, group: "External" },
];

const NAVY = "#0f2a44";
const GOLD = "#caa74d";

const DocCard = ({ doc }: { doc: Doc }) => {
  const isVideo = doc.type === "video";
  const isLink = doc.type === "link";
  const isInternal = doc.url.startsWith("/");
  const Icon = isVideo ? Video : isLink ? ExternalLink : FileText;
  const label =
    isVideo ? "Video" :
    isLink ? (isInternal ? "Internal Page" : "External Link") :
    doc.type === "xlsx" ? "Excel Document" :
    doc.type === "doc" ? "Word Document" :
    doc.type === "zip" ? "Archive" :
    "PDF Document";

  const ActionIcon = isLink || isVideo ? ExternalLink : Download;

  const cardContent = (
    <>
      <div className={`shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${isVideo ? "from-[#b31317] to-[#8a0e12]" : isLink ? "from-[#b31317] to-[#8a0e12]" : "from-[#0f2a44] to-[#11355a]"} text-white`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-body font-semibold text-[#0f2a44] text-sm md:text-[15px] leading-snug">{doc.title}</p>
        <p className="font-body text-[11px] text-[#0f2a44]/60 mt-1 uppercase tracking-wider">{label}</p>
      </div>
      <ActionIcon className="w-5 h-5 text-[#0f2a44]/40 group-hover:text-[#b31317] transition-colors shrink-0" />
    </>
  );

  if (isInternal) {
    return (
      <Link
        to={doc.url}
        className="group relative flex items-center gap-4 rounded-xl border border-[#0f2a44]/10 bg-white p-4 md:p-5 shadow-sm transition-all hover:shadow-[0_12px_32px_rgba(15,42,68,0.12)] hover:border-[#caa74d]"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <motion.a
      href={doc.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className="group relative flex items-center gap-4 rounded-xl border border-[#0f2a44]/10 bg-white p-4 md:p-5 shadow-sm transition-all hover:shadow-[0_12px_32px_rgba(15,42,68,0.12)] hover:border-[#caa74d]"
    >
      {cardContent}
    </motion.a>
  );
};

const DocGrid = ({ docs }: { docs: Doc[] }) =>
  docs.length === 0 ? (
    <p className="font-body text-[#0f2a44]/60 italic">No documents match your search.</p>
  ) : (
    <div className="grid sm:grid-cols-2 gap-4">
      {docs.map((d, i) => <DocCard key={d.title + d.url + i} doc={d} />)}
    </div>
  );

const SectionHeader = ({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) => (
  <div className="mb-8">
    <p className="font-body text-sm uppercase tracking-[0.2em] text-[#caa74d] font-semibold mb-2">{eyebrow}</p>
    <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0f2a44]">{title}</h2>
    {description && <p className="font-body text-[#0f2a44]/70 mt-3 max-w-3xl leading-relaxed">{description}</p>}
  </div>
);

const IQACENoticeBoardTicker = () => {
  const scrollRef = useState<HTMLDivElement | null>(null);
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
      {/* Header bar matching official website red styling with navigation controls */}
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

      {/* Auto-scrollable ticker container with larger cards & 120s slow movement */}
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
                  <p className="font-body text-sm md:text-sm text-slate-700 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {item.url && (
                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm md:text-sm font-bold text-[#b31317] hover:text-[#0f2a44] transition-colors"
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
      {/* Header bar matching official website red styling */}
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

        {/* Non-scrollable Year Matrix Grid */}
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
                  <span className={`text-sm md:text-sm font-extrabold font-display ${isSelected ? "text-white" : ""}`}>
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

          {/* Active Milestone Card Box */}
          <motion.div
            key={currentMilestone.year}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-md flex flex-col md:flex-row items-center gap-6 text-center md:text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#caa74d]/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="w-28 h-28 md:w-36 md:h-36 shrink-0 rounded-2xl bg-gradient-to-br from-slate-50 to-white p-4 border border-slate-200 shadow-sm flex items-center justify-center">
              <img
                src="https://mits.ac.in/assets/images/mits-logo.png"
                alt="MITS Deemed to be University Logo"
                className="w-full h-auto max-h-full object-contain"
              />
            </div>
            
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#b31317] text-white font-extrabold text-sm md:text-sm shadow-xs">
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
                  : currentMilestone.year === "2015"
                  ? "UGC & JNTUA Autonomous Status"
                  : currentMilestone.year === "2008"
                  ? "Establishment of IQAC Cell"
                  : currentMilestone.year === "1998"
                  ? "Founding of MITS Institution"
                  : `Institutional Achievement ${currentMilestone.year}`}
              </h4>
              
              <p className="font-body text-slate-700 text-sm md:text-base leading-relaxed max-w-2xl">
                {currentMilestone.text}
              </p>
            </div>
          </motion.div>

          {/* Bottom Navigation Buttons */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <button
              onClick={handlePrev}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#b31317] hover:border-[#b31317] text-sm md:text-sm font-semibold transition-all shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Previous Year
            </button>
            <span className="text-sm text-slate-400 font-medium hidden sm:inline">
              {selectedYearIdx + 1} of {milestones.length} Milestones
            </span>
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#b31317] text-white hover:bg-[#8a0e12] text-sm md:text-sm font-semibold transition-all shadow-xs cursor-pointer"
            >
              Next Year <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

const ISOEOMSSection = () => {
  const [activeTabId, setActiveTabId] = useState(iso21001Subtabs[0].id);
  const [subSearch, setSubSearch] = useState("");

  const currentSubtab = iso21001Subtabs.find((t) => t.id === activeTabId) || iso21001Subtabs[0];

  const filteredDocs = currentSubtab.docs.filter((d) =>
    d.title.toLowerCase().includes(subSearch.toLowerCase())
  );

  return (
    <section className="space-y-6">
      <SectionHeader
        eyebrow="ISO Accreditation"
        title="ISO 21001 : 2018 EOMS"
        description="Educational Organizations Management System (EOMS) certifications, policies, manuals, procedures, exhibits, forms, flowcharts, SOPs and MRM records."
      />

      {/* Horizontal Top Sub-Tab Switcher (Single main sidebar design) */}
      <div className="bg-white rounded-2xl border border-[#0f2a44]/10 p-6 md:p-8 shadow-sm space-y-6">
        
        {/* Top Horizontal Subtabs Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-slate-300">
          {iso21001Subtabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTabId(tab.id);
                  setSubSearch("");
                }}
                className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm md:text-sm font-body font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#b31317] text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/80"
                }`}
              >
                <span>{tab.title}</span>
                <span
                  className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {tab.docs.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Header & Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-slate-100">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
              {currentSubtab.title}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Showing {filteredDocs.length} of {currentSubtab.docs.length} documents
            </p>
          </div>

          {/* Search Filter */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={subSearch}
              onChange={(e) => setSubSearch(e.target.value)}
              placeholder="Filter documents..."
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm font-body focus:outline-none focus:border-[#b31317] focus:bg-white"
            />
          </div>
        </div>

        {/* Documents Grid */}
        {filteredDocs.length === 0 ? (
          <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-200 text-slate-500 text-sm">
            No matching documents found.
          </div>
        ) : (
          <DocGrid docs={filteredDocs as Doc[]} />
        )}
      </div>
    </section>
  );
};

const IMSEOMSSection = () => {
  const [activeTabId, setActiveTabId] = useState(imsSubtabs[0].id);
  const [subSearch, setSubSearch] = useState("");

  const currentSubtab = imsSubtabs.find((t) => t.id === activeTabId) || imsSubtabs[0];

  const filteredDocs = currentSubtab.docs.filter((d) =>
    d.title.toLowerCase().includes(subSearch.toLowerCase())
  );

  return (
    <section className="space-y-6">
      <SectionHeader
        eyebrow="Integrated Management System"
        title="IMS (ISO 14001:2015 and ISO 50001:2018)"
        description="Integrated Environmental and Energy Management System policies, manuals, review records, annexures and formats."
      />

      {/* Horizontal Top Sub-Tab Switcher (Single main sidebar design) */}
      <div className="bg-white rounded-2xl border border-[#0f2a44]/10 p-6 md:p-8 shadow-sm space-y-6">
        
        {/* Top Horizontal Subtabs Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-slate-300">
          {imsSubtabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTabId(tab.id);
                  setSubSearch("");
                }}
                className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm md:text-sm font-body font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#b31317] text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/80"
                }`}
              >
                <span>{tab.title}</span>
                <span
                  className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {tab.docs.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Header & Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-slate-100">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
              {currentSubtab.title}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Showing {filteredDocs.length} of {currentSubtab.docs.length} documents
            </p>
          </div>

          {/* Search Filter */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={subSearch}
              onChange={(e) => setSubSearch(e.target.value)}
              placeholder="Filter documents..."
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm font-body focus:outline-none focus:border-[#b31317] focus:bg-white"
            />
          </div>
        </div>

        {/* Documents Grid */}
        {filteredDocs.length === 0 ? (
          <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-200 text-slate-500 text-sm">
            No matching documents found.
          </div>
        ) : (
          <DocGrid docs={filteredDocs as Doc[]} />
        )}
      </div>
    </section>
  );
};

const SubHeader = ({ title }: { title: string }) => (
  <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44] mt-10 mb-4 flex items-center gap-2">
    <span className="w-1 h-6 bg-[#caa74d] rounded" /> {title}
  </h3>
);

const NoticeCard = ({ notice }: { notice: { title: string; date: string; detail?: string; url?: string } }) => (
  <div className="rounded-xl border border-[#0f2a44]/10 bg-white p-4 hover:border-[#caa74d] transition-colors">
    <div className="flex items-start gap-3">
      <Bell className="w-4 h-4 text-[#caa74d] mt-0.5 shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-body font-semibold text-[#0f2a44] text-sm">{notice.title}</p>
        <p className="font-body text-sm text-[#0f2a44]/70 mt-1">{notice.date}</p>
        {notice.detail && <p className="font-body text-sm text-[#0f2a44]/60 mt-1">{notice.detail}</p>}
        {notice.url && (
          <a href={notice.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-[#b31317] hover:underline">
            View details <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const IQAC = () => {
  const [active, setActive] = useState<SectionKey>("about");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filter = (docs: Doc[]) => {
    if (!search.trim()) return docs;
    const q = search.toLowerCase();
    return docs.filter((d) => d.title.toLowerCase().includes(q));
  };

  const grouped = useMemo(() => {
    const map: Record<string, typeof sections> = {};
    sections.forEach((s) => {
      (map[s.group] ||= []).push(s);
    });
    return map;
  }, []);

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <Header />

      {/* Hero — Same exact design as About Page */}
      <section
        className="relative pt-32 md:pt-44 pb-24 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.2em] uppercase text-sm sm:text-sm mb-4">
            Internal Quality Assurance Cell
          </p>
          <h1
            className="font-display text-4xl md:text-6xl font-bold mb-5 text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Quality Assurance <span className="text-[#ffd15c]">at MITS</span>
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Driving institutional excellence through continuous quality enhancement, accreditation, academic audits,
            best practices and outcome-based education — anchored in NAAC, NBA, ISO 21001:2018 and UGC frameworks.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-2xl mx-auto">
            {[
              { k: "NAAC", v: "A+ Grade" },
              { k: "ISO", v: "21001:2018" },
              { k: "AQARs", v: "Submitted" },
              { k: "Est.", v: "IQAC 2008" },
            ].map((s) => (
              <div key={s.k} className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 text-center">
                <p className="font-display font-extrabold text-[#ffd15c] text-sm md:text-base">{s.v}</p>
                <p className="font-body text-[11px] text-white/80 font-medium uppercase tracking-wider">{s.k}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 left-6 z-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-white/90">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">›</li>
              <li>
                <Link to="/naac" className="text-white/70 hover:text-white transition-colors">
                  NAAC
                </Link>
              </li>
              <li className="text-white/50">›</li>
              <li className="text-[#ffd15c] font-semibold">IQAC Portal</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main */}
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-8">
          {/* Sidebar */}
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
                <nav className="space-y-3">
                  {Object.entries(grouped).map(([group, items]) => (
                    <div key={group}>
                      <p className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-[#0f2a44]/50 px-2 mb-1">{group}</p>
                      <div className="space-y-0.5">
                        {items.map((s) => {
                          const Icon = s.icon;
                          const isActive = active === s.key;
                          return (
                            <button
                              key={s.key}
                              onClick={() => setActive(s.key)}
                              className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] font-body font-semibold text-left transition-all ${
                                isActive
                                  ? "bg-gradient-to-r from-[#b31317] to-[#8a0e12] text-white shadow-md shadow-[#b31317]/20"
                                  : "text-[#0f2a44]/75 hover:bg-[#b31317]/10 hover:text-[#b31317]"
                              }`}
                            >
                              <Icon className="w-4 h-4 shrink-0" />
                              <span className="truncate">{s.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
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

          {/* Mobile nav */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileNavOpen((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#0f2a44]/10 rounded-xl shadow-sm"
            >
              <span className="flex items-center gap-2 font-body font-semibold text-primary">
                <Menu className="w-4 h-4" />
                {sections.find((s) => s.key === active)?.label}
              </span>
              <ChevronRight className={`w-4 h-4 transition-transform ${mobileNavOpen ? "rotate-90" : ""}`} />
            </button>
            <AnimatePresence>
              {mobileNavOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-white border border-t-0 border-[#0f2a44]/10 rounded-b-xl"
                >
                  <div className="p-2 grid grid-cols-2 gap-1 max-h-[60vh] overflow-y-auto">
                    {sections.map((s) => {
                      const Icon = s.icon;
                      return (
                        <button
                          key={s.key}
                          onClick={() => { setActive(s.key); setMobileNavOpen(false); }}
                          className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-body font-medium text-left ${
                            active === s.key ? "bg-[#b31317] text-white font-bold shadow-xs" : "text-[#0f2a44]/75 hover:bg-[#b31317]/10"
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

          {/* Content */}
          <main className="min-w-0">
            {/* Quick Live Publications Banner matching mits.ac.in/iqac */}
            <div className="mb-8 rounded-2xl bg-white border border-[#0f2a44]/10 p-5 md:p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-[#b31317]" />
                  <h3 className="font-display font-bold text-base md:text-lg text-[#0f2a44]">
                    Official IQAC Documentation &amp; Statutory Notifications
                  </h3>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#caa74d] bg-[#0f2a44] px-2.5 py-1 rounded-md self-start sm:self-auto">
                  Live Notifications
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  {
                    title: "Composition of IQAC",
                    href: "https://mits.ac.in/assets/pdf/admin/Composition of IQAC.pdf",
                    desc: "Official Committee Notification",
                  },
                  {
                    title: "Functions of IQAC",
                    href: "https://mits.ac.in/assets/pdf/admin/Functions of IQAC.pdf",
                    desc: "Core Mandate & Guidelines",
                  },
                  {
                    title: "IQAC Meetings",
                    href: "https://mits.ac.in/assets/pdf/admin/Meetings.pdf",
                    desc: "Minutes & Agendas",
                  },
                  {
                    title: "Student Quality Assurance Cell (SQAC)",
                    href: "https://mits.ac.in/assets/pdf/swc/Notification 1.pdf",
                    desc: "SQAC Official Charter",
                  },
                ].map((doc) => (
                  <a
                    key={doc.title}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-between p-3.5 rounded-xl border border-gray-100 bg-[#faf7f2]/60 hover:bg-[#fff8e6] hover:border-[#caa74d]/60 hover:shadow-sm transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <FileText className="w-4 h-4 text-[#b31317] group-hover:scale-110 transition-transform" />
                        <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#b31317] transition-colors" />
                      </div>
                      <p className="font-display font-bold text-xs sm:text-sm text-[#0f2a44] group-hover:text-[#b31317] transition-colors line-clamp-2">
                        {doc.title}
                      </p>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-2 font-medium">
                      {doc.desc}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {active === "about" && (
                  <section>
                    <IQACENoticeBoardTicker />

                    <SectionHeader eyebrow="Introduction" title="About IQAC" />
                    <div className="bg-white rounded-2xl border border-[#0f2a44]/10 p-6 md:p-8 shadow-sm space-y-4 font-body text-[#0f2a44]/85 leading-relaxed">
                      {about.intro.map((p, i) => <p key={i}>{p}</p>)}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-gradient-to-br from-[#0f2a44] to-[#152f4f] text-white rounded-2xl p-6">
                        <p className="text-sm uppercase tracking-[0.2em] text-[#caa74d] mb-2">Vision</p>
                        <p className="font-body text-white/90 leading-relaxed">{about.vision}</p>
                      </div>
                      <div className="bg-white rounded-2xl p-6 border border-[#0f2a44]/10">
                        <p className="text-sm uppercase tracking-[0.2em] text-[#caa74d] mb-3">Mission</p>
                        <ul className="space-y-2 font-body text-[#0f2a44]/85 text-sm">
                          {about.mission.map((m, i) => (
                            <li key={i} className="flex gap-2"><span className="text-[#caa74d]">•</span>{m}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Official IQAC Quality Framework Infographic */}
                    <div className="mt-8 bg-white rounded-2xl border border-[#0f2a44]/10 p-4 md:p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display text-lg font-bold text-[#0f2a44]">IQAC Quality Framework</h3>
                        <a
                          href={qualityFrameworkImg}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0f2a44] text-white text-xs sm:text-sm font-semibold hover:bg-primary transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> View High-Res
                        </a>
                      </div>
                      <img
                        src={qualityFrameworkImg}
                        alt="MITS IQAC Quality Framework"
                        className="w-full h-auto rounded-xl border border-slate-200"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Official IQAC Action Plan 2026-27 Infographic */}
                    <div className="mt-6 bg-white rounded-2xl border border-[#0f2a44]/10 p-4 md:p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display text-lg font-bold text-[#0f2a44]">IQAC Action Plan 2026-27</h3>
                        <a
                          href={actionPlanImg}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0f2a44] text-white text-xs sm:text-sm font-semibold hover:bg-primary transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> View High-Res
                        </a>
                      </div>
                      <img
                        src={actionPlanImg}
                        alt="MITS IQAC Action Plan 2026-27"
                        className="w-full h-auto rounded-xl border border-slate-200"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  </section>
                )}

                {active === "objectives" && (
                  <section>
                    <SectionHeader eyebrow="Purpose" title="Objectives & Strategies" description="The primary aim of IQAC and the mechanisms it evolves to deliver on institutional quality." />
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-2xl p-6 border border-[#0f2a44]/10">
                        <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-3">Primary Objectives</h3>
                        <ul className="space-y-3">
                          {objectives.map((o, i) => (
                            <li key={i} className="flex gap-3 font-body text-sm text-[#0f2a44]/85">
                              <span className="shrink-0 w-6 h-6 rounded-full bg-[#caa74d]/15 text-[#caa74d] font-bold text-sm flex items-center justify-center">{i + 1}</span>
                              <span>{o}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-[#0f2a44] to-[#152f4f] text-white rounded-2xl p-6">
                        <h3 className="font-display text-xl font-bold mb-3 text-[#caa74d]">Strategies</h3>
                        <p className="text-sm text-white/70 mb-3">IQAC shall evolve mechanisms and procedures for:</p>
                        <ul className="space-y-2 font-body text-sm text-white/90">
                          {strategies.map((s, i) => (
                            <li key={i} className="flex gap-2"><span className="text-[#caa74d]">›</span>{s}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                )}

                {active === "functions" && (
                  <section>
                    <SectionHeader eyebrow="Scope" title="Functions & Benefits" />
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-3">Functions of IQAC</h3>
                        <div className="space-y-2">
                          {iqacFunctions.map((f, i) => (
                            <div key={i} className="bg-white rounded-lg p-4 border border-[#0f2a44]/10 font-body text-sm text-[#0f2a44]/85 flex gap-3">
                              <Sparkles className="w-4 h-4 text-[#caa74d] shrink-0 mt-0.5" />{f}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-3">Benefits</h3>
                          <div className="space-y-2">
                            {benefits.map((b, i) => (
                              <div key={i} className="bg-gradient-to-br from-[#faf7f2] to-white rounded-lg p-4 border border-[#caa74d]/30 font-body text-sm text-[#0f2a44]/85 flex gap-3">
                                <Trophy className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5" />{b}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Follow Up Section */}
                        <div className="bg-white rounded-2xl p-6 border border-[#0f2a44]/10">
                          <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-3">Follow Up</h3>
                          <ul className="space-y-2.5 font-body text-sm text-[#0f2a44]/85">
                            {followUp.map((fu, i) => (
                              <li key={i} className="flex gap-2.5 items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#b31317] shrink-0 mt-2" />
                                <span>{fu}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {active === "composition" && (
                  <section>
                    <SectionHeader eyebrow="Governance" title="IQAC Composition" description={compositionIntroText} />
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#0f2a44]/10 mb-6 space-y-4">
                      <p className="font-body text-[#0f2a44]/85 text-sm font-semibold">
                        The composition of the IQAC may be as follows:
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2.5 font-body text-sm text-[#0f2a44]/85">
                        {compositionNotes.map((c, i) => (
                          <li key={i} className="flex gap-2.5 items-start">
                            <span className="w-2 h-2 rounded-full bg-[#caa74d] shrink-0 mt-1.5" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-[#faf7f2] to-white rounded-2xl p-6 border border-[#caa74d]/30 mb-8 space-y-3">
                      <h3 className="font-display font-bold text-[#0f2a44] text-lg">Composition of Internal Quality Assurance Cell</h3>
                      <p className="font-body text-sm text-[#0f2a44]/85 leading-relaxed">
                        {compositionMitsText}
                      </p>
                    </div>

                    <SubHeader title="Composition Notifications & Committee Members" />
                    <DocGrid docs={filter(compositionYearly)} />
                  </section>
                )}

                {active === "organogram" && (
                  <section>
                    <SectionHeader eyebrow="Structure" title="IQAC Organogram" />
                    <div className="bg-white rounded-2xl p-6 border border-[#0f2a44]/10 overflow-hidden">
                      <div className="flex items-center justify-between mb-4">
                        <p className="font-body text-[#0f2a44]/80 text-sm">{organogram.note}</p>
                        <a
                          href={organogramPdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0f2a44] text-white text-sm font-semibold hover:bg-[#11355a] transition-colors shrink-0"
                        >
                          <Download className="w-3.5 h-3.5" /> Download PDF
                        </a>
                      </div>
                      <div className="w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-50 min-h-[600px]">
                        <iframe
                          src={organogramPdf}
                          title="IQAC Organogram PDF"
                          className="w-full h-[750px] border-0"
                        />
                      </div>
                    </div>
                  </section>
                )}

                {active === "policies" && (
                  <section>
                    <SectionHeader eyebrow="Policies" title="IQAC Policies (Autonomous)" description="Comprehensive quality policies governing MITS autonomous operations, EOMS, academics, examination and stakeholder standards." />
                    <DocGrid docs={filter(iqacPolicies)} />
                    <SubHeader title="Policies (MITS DTBU)" />
                    <DocGrid docs={filter(mitsDtbuPolicies)} />
                  </section>
                )}

                {active === "policiesDtbu" && (
                  <section>
                    <SectionHeader eyebrow="Governance" title="Policies (MITS DTBU)" description="Approved institutional policies for MITS Deemed to be University across industry relations, IMS, human values, research and diversity." />
                    <DocGrid docs={filter(mitsDtbuPolicies)} />
                    <SubHeader title="Autonomous Policies Reference" />
                    <DocGrid docs={filter(iqacPolicies)} />
                  </section>
                )}

                {active === "activities" && (
                  <section>
                    <SectionHeader eyebrow="Overview & Timeline" title="Activities of IQAC" description="Official activities flowchart and chronological log of IQAC-conducted programmes, audits and initiatives." />
                    
                    {/* Embedded Official PDF Flowchart */}
                    <div className="bg-white rounded-2xl border border-[#0f2a44]/10 p-4 md:p-6 shadow-sm mb-8">
                      <div className="flex items-center justify-end mb-4">
                        <a
                          href="https://mits.ac.in/assets/pdf/iqac/Activities of IQAC.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#b31317] text-white text-sm font-semibold hover:bg-[#8a0e12] transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" /> Download PDF
                        </a>
                      </div>
                      <div className="w-full h-[650px] md:h-[850px] rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                        <iframe
                          src="https://mits.ac.in/assets/pdf/iqac/Activities of IQAC.pdf"
                          title="Activities of IQAC PDF"
                          className="w-full h-full"
                        />
                      </div>
                    </div>

                    <SubHeader title="Chronological Events & Reports" />
                    <div className="relative pl-6 border-l-2 border-[#caa74d]/40 space-y-6">
                      {filter(iqacEvents.map((e) => ({ title: `${e.title} — ${e.date}`, url: e.url || "#", type: "pdf" as const }))).map((e, i) => {
                        const original = iqacEvents.find((x) => `${x.title} — ${x.date}` === e.title);
                        if (!original) return null;
                        return (
                          <motion.div
                            key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}
                            className="relative"
                          >
                            <span className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-[#caa74d] border-4 border-[#faf7f2]" />
                            <div className="bg-white rounded-xl p-4 border border-[#0f2a44]/10">
                              <p className="font-body text-sm text-[#b31317] font-bold uppercase tracking-wider">{original.date}</p>
                              <p className="font-display font-semibold text-[#0f2a44] mt-1">{original.title}</p>
                              {original.url && (
                                <a href={original.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-sm text-[#caa74d] font-semibold hover:underline">
                                  <FileText className="w-3.5 h-3.5" /> Read Report
                                </a>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </section>
                )}

                {active === "initiatives" && (
                  <section>
                    <SectionHeader eyebrow="Quality Framework" title="IQAC Quality Initiatives" description="Core institutional levers deployed by IQAC to embed quality across academics, governance and student experience." />
                    
                    {/* All 7 Official Quality Architecture Infographics */}
                    <div className="space-y-6 mb-8">
                      {qualityInitiativeInfographics.map((info, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-[#0f2a44]/10 p-4 md:p-6 shadow-sm">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                            <div>
                              <h3 className="font-display text-lg font-bold text-[#0f2a44]">{info.title}</h3>
                              {info.subtitle && <p className="font-body text-xs text-slate-500 mt-0.5">{info.subtitle}</p>}
                            </div>
                            <a
                              href={info.downloadUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0f2a44] text-white text-xs sm:text-sm font-semibold hover:bg-primary transition-colors shrink-0"
                            >
                              <Download className="w-3.5 h-3.5" /> {info.downloadLabel}
                            </a>
                          </div>
                          <img
                            src={info.src}
                            alt={info.title}
                            className="w-full h-auto rounded-xl border border-slate-200"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    <SubHeader title="Quality Initiatives Documents" />
                    <DocGrid docs={filter(qualityInitiatives)} />
                  </section>
                )}

                {active === "milestones" && (
                  <section>
                    <SectionHeader eyebrow="Journey" title="MITS Quality Milestones" description="Key institutional milestones and accreditation timeline since the IQAC was established." />
                    
                    {/* Official Milestones Infographic */}
                    <div className="bg-white rounded-2xl border border-[#0f2a44]/10 p-4 md:p-6 shadow-sm mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display text-lg font-bold text-[#0f2a44]">IQAC Milestones Journey</h3>
                        <a
                          href={milestonesImg}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0f2a44] text-white text-xs sm:text-sm font-semibold hover:bg-primary transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> View High-Res
                        </a>
                      </div>
                      <img
                        src={milestonesImg}
                        alt="MITS IQAC Milestones"
                        className="w-full h-auto rounded-xl border border-slate-200"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>

                    <IQACMilestonesSlider />
                  </section>
                )}

                {active === "meetings" && (
                  <section>
                    <SectionHeader eyebrow="Minutes of Meeting" title="IQAC Meeting Records" description="Year-wise minutes, agendas and resolutions of IQAC review meetings for MITS and MITS Deemed to be University (DTBU)." />
                    <SubHeader title="Minutes of Meeting (MITS DTBU)" />
                    <DocGrid docs={filter(meetingsDtbu)} />
                    <SubHeader title="Minutes of the Meeting (Autonomous)" />
                    <DocGrid docs={filter(meetingsMom)} />
                    <SubHeader title="IQAC Hours — Monthly Reports" />
                    <DocGrid docs={filter(iqacHoursReports)} />
                  </section>
                )}

                {active === "meetingsDtbu" && (
                  <section>
                    <SectionHeader eyebrow="Operations" title="Minutes of Meeting (MITS DTBU)" description="Official minutes, agenda points and action resolutions for MITS Deemed to be University IQAC meetings." />
                    <DocGrid docs={filter(meetingsDtbu)} />
                  </section>
                )}

                {active === "certifications" && (
                  <section>
                    <SectionHeader eyebrow="Accreditation" title="Certifications & Approvals" description="ISO 21001:2018, NAAC, NBA, UGC-Autonomous, AICTE approvals and NIRF rankings — the full accreditation portfolio of MITS." />
                    <DocGrid docs={filter(certifications)} />
                  </section>
                )}

                {active === "iso" && <ISOEOMSSection />}

                {active === "ims" && <IMSEOMSSection />}

                {active === "aicte" && (
                  <section>
                    <SectionHeader eyebrow="Regulator" title="AICTE Quality Mandate" description="AICTE's quality initiatives, examination reforms, PARAKH, NEAT, ONOD, NETF and the MITS 360° Feedback participation record." />
                    <SubHeader title="AICTE Quality Mandate — Resources" />
                    <DocGrid docs={filter(aicteMandate)} />
                    <SubHeader title="AICTE 360° Feedback" />
                    <DocGrid docs={filter(aicte360Feedback)} />
                  </section>
                )}

                {active === "aqar" && (
                  <section className="space-y-6">
                    <SectionHeader
                      eyebrow="AQAR"
                      title="Submission of Annual Quality Assurance Report (AQAR)"
                      description="Year-wise submitted AQAR reports and metric-wise AQAR criterion documentation."
                    />

                    {/* Prominent Single Card for AQAR Criterion Wise Details */}
                    <div className="bg-gradient-to-r from-[#b31317] via-[#940f13] to-[#750b0f] text-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
                      <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 opacity-10 pointer-events-none">
                        <Award className="w-64 h-64 text-white" />
                      </div>
                      
                      <div className="space-y-2 max-w-2xl relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#caa74d] text-sm font-extrabold uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5" /> NAAC Metric Analysis
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white">
                          AQAR Criterion Wise Details
                        </h3>
                        <p className="text-white/85 text-sm md:text-sm leading-relaxed font-body">
                          Access complete metric-wise reports and documentation across all 7 NAAC criteria (Curricular Aspects, Teaching-Learning, Research, Infrastructure, Student Support, Governance, Best Practices) and Extended Profile.
                        </p>
                      </div>

                      <Link
                        to="/aqarcriteria"
                        className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#caa74d] hover:bg-[#b8953c] text-[#0f2a44] font-body font-extrabold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 relative z-10"
                      >
                        <span>Explore AQAR Criterion Wise</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Year-Wise AQAR Reports Table */}
                    <div className="bg-white rounded-2xl border border-[#0f2a44]/10 p-6 md:p-8 shadow-sm space-y-6">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div>
                          <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                            Year-wise AQAR Reports
                          </h3>
                          <p className="text-sm text-slate-500 mt-1">
                            Official Annual Quality Assurance Reports submitted to NAAC.
                          </p>
                        </div>
                      </div>

                      <div className="overflow-x-auto rounded-xl border border-slate-200">
                        <table className="w-full text-left text-sm md:text-sm border-collapse">
                          <thead>
                            <tr className="bg-[#b31317] text-white font-bold uppercase tracking-wider">
                              <th className="py-3.5 px-6">Academic Year</th>
                              <th className="py-3.5 px-6 text-right">AQAR Document</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 bg-white font-body">
                            {aqarReportsList.map((item, idx) => (
                              <tr key={idx} className="hover:bg-slate-50/90 transition-colors">
                                <td className="py-4 px-6 font-bold text-[#0f2a44]">
                                  <div className="flex items-center gap-3">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#b31317]" />
                                    <span className="text-sm md:text-base font-display">{item.year}</span>
                                  </div>
                                </td>
                                <td className="py-4 px-6 text-right">
                                  {item.reportUrl && item.reportUrl !== "#" ? (
                                    <a
                                      href={item.reportUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#b31317] hover:bg-[#8a0e12] text-white text-sm md:text-sm font-bold transition-colors shadow-2xs"
                                    >
                                      <FileText className="w-4 h-4" /> View AQAR Report
                                    </a>
                                  ) : (
                                    <span className="text-sm text-slate-400 font-medium italic">Document Pending</span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                )}

                {active === "reports" && (
                  <section>
                    <SectionHeader eyebrow="Reports" title="Reports" description="Official NAAC Peer Team Reports and External Peer Team Reports." />
                    <DocGrid docs={filter(userReportsDocs)} />
                  </section>
                )}

                {active === "feedback" && (
                  <section className="space-y-6">
                    <SectionHeader eyebrow="Feedback" title="Feedback System" description="AICTE 360 Degree Feedback, Stakeholder Feedback Policy, Questionnaires, ATRs, Evidences and Online Forms." />
                    
                    <SubHeader title="AICTE's 360 Degree Feedback" />
                    <DocGrid docs={filter(userFeedbackSections.aicte360)} />

                    <SubHeader title="Stakeholder Feedback" />
                    <DocGrid docs={filter(userFeedbackSections.stakeholderPolicy)} />

                    <SubHeader title="Stakeholder Feedback - Action Taken Report" />
                    <DocGrid docs={filter(userFeedbackSections.stakeholderAtr)} />

                    <SubHeader title="Evidences on ATR" />
                    <DocGrid docs={filter(userFeedbackSections.evidencesAtr)} />

                    <SubHeader title="Online Feedback Forms" />
                    <div className="space-y-4">
                      <h4 className="font-display font-bold text-[#0f2a44] text-sm">Feedback on Curriculum</h4>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {userFeedbackSections.onlineCurriculumForms.map((f) => (
                          <a
                            key={f.category}
                            href={f.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#b31317] hover:shadow-md transition-all group"
                          >
                            <span className="font-body font-semibold text-sm text-[#0f2a44] group-hover:text-[#b31317]">
                              {f.category}
                            </span>
                            <span className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 group-hover:text-[#b31317]">
                              View <ExternalLink className="w-3.5 h-3.5" />
                            </span>
                          </a>
                        ))}
                      </div>

                      <div className="pt-2">
                        <a
                          href={userFeedbackSections.curriculumIndustryExpert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#b31317] hover:bg-white hover:shadow-md transition-all group"
                        >
                          <span className="font-display font-bold text-sm text-[#0f2a44] group-hover:text-[#b31317]">
                            {userFeedbackSections.curriculumIndustryExpert.title}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 group-hover:text-[#b31317]">
                            View <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </a>
                      </div>
                    </div>

                    <SubHeader title="Other Feedback Views" />
                    <DocGrid docs={filter(userFeedbackSections.otherFeedbackViews)} />
                  </section>
                )}

                {active === "aaa" && (
                  <section className="space-y-6">
                    <SectionHeader eyebrow="AAA" title="Academic and Administrative Audit (AAA)" />
                    
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-4 font-body text-sm text-slate-700 leading-relaxed">
                      <p>
                        Madanapalle Institute of Technology &amp; Science is committed to maintaining and enhancing academic excellence through a structured Quality assurance mechanism. Academic &amp; Administrative audit serves as a critical tool to assess, monitor, and improve the quality of Teaching &amp; Learning, and Academic processes and the administrative system to support the quality of such a delivery. This policy applies to all Academic Departments, Programs, and Faculty members, ensuring a systematic review of instructional methods, curriculum effectiveness, student engagement, Faculty performance, and overall academic governance. Audit process of quality of education impart and assess compliance with accreditation bodies such as NAAC, NBA and other regulatory requirements for its sustenance is monitored through the Internal Quality Assurance Cell (IQAC).
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 pt-2">
                        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                          <h4 className="font-display font-bold text-[#0f2a44] text-base mb-2">Academic Audit</h4>
                          <p className="text-sm md:text-sm text-slate-600 leading-relaxed">
                            Academic Audit is a structured and methodical approach to evaluate the Quality of an Institution's academic processes. It involves a deliberate and systematic sampling to assess the effectiveness of Academic delivery, encompassing areas such as Teaching-Learning practices, Curriculum Design and evaluation, Research initiatives, outreach programs, and other related academic endeavours. This process aligns with quality assurance principles and aims to evaluate the effectiveness of Academic Procedures and Processes adopted by Departments for quality enhancement.
                          </p>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                          <h4 className="font-display font-bold text-[#0f2a44] text-base mb-2">Administrative Audit</h4>
                          <p className="text-sm md:text-sm text-slate-600 leading-relaxed">
                            Administrative Audit focuses on evaluating the effectiveness of various administrative processes that facilitate academic activities. This includes areas such as student support services, management of Academic Infrastructure, Campus maintenance, IT services, student facilities, and measures ensuring the safety and security of students and the campus as a whole. Audit process typically involves sampling methods and conducting targeted interviews with relevant stakeholders.
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 grid sm:grid-cols-2 gap-3">
                        <DocCard doc={userAaaDocs.policy} />
                        {userAaaDocs.dtbuPolicy && <DocCard doc={userAaaDocs.dtbuPolicy} />}
                      </div>
                    </div>

                    <SubHeader title="Academic and Administrative Audit (AAA) Reports" />
                    
                    <h4 className="font-display font-bold text-[#0f2a44] text-base mt-4 mb-2">External Audit Reports</h4>
                    <DocGrid docs={filter(userAaaDocs.externalReports)} />

                    <h4 className="font-display font-bold text-[#0f2a44] text-base mt-6 mb-2">Internal Audit Reports</h4>
                    <DocGrid docs={filter(userAaaDocs.internalReports)} />

                    <SubHeader title="Action Taken Reports (ATR)" />

                    <h4 className="font-display font-bold text-[#0f2a44] text-base mt-4 mb-2">External Audit ATR</h4>
                    <DocGrid docs={filter(userAaaDocs.externalAtr)} />

                    <h4 className="font-display font-bold text-[#0f2a44] text-base mt-6 mb-2">Internal Audit ATR</h4>
                    <DocGrid docs={filter(userAaaDocs.internalAtr)} />
                  </section>
                )}

                {active === "aaaRef" && (
                  <section>
                    <SectionHeader eyebrow="References" title="Assessment, Accreditations, Approvals, and Rankings (AAA & R) References" description="Reference manuals, SSR, SOPs, guidelines and methodology documents from NAAC, NBA, and NIRF." />
                    <DocGrid docs={filter(userAaaRefDocs)} />
                  </section>
                )}

                {active === "strategic" && (
                  <section>
                    <SectionHeader eyebrow="Vision to Action" title="Strategic Plan" description="Strategic Plan Implementation, Gap Analysis Reports, and Strategic Plan (2022-23 to 2026-27)." />
                    <DocGrid docs={filter(userStrategicDocs)} />
                  </section>
                )}

                {active === "bestPractices" && (
                  <section>
                    <SectionHeader eyebrow="Best Practices" title="Best Practice of the Institute" description="Institutionalised best practices of Madanapalle Institute of Technology & Science." />
                    <DocGrid docs={filter(userBestPracticesDocs)} />
                  </section>
                )}

                {active === "distinctive" && (
                  <section className="space-y-6">
                    <SectionHeader
                      eyebrow="Institutional Distinctiveness"
                      title="Distinctive Performance of the Institute"
                    />
                    
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
                      <p className="font-body text-base text-[#0f2a44] font-medium">
                        The IQAC shall have the following functions:
                      </p>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                        {[
                          { t: "Deemed to be University Status", d: "Declared Deemed to be University u/s 3 of UGC Act, 1956 — Gazette Notification dated 15.07.2025." },
                          { t: "NAAC A+ Accreditation", d: "Accredited with NAAC A+ Grade in Cycle 1." },
                          { t: "NBA Accreditation", d: "Tier-I NBA accredited UG and PG engineering and professional programs." },
                          { t: "ISO 21001:2018 EOMS Certified", d: "Certified Educational Organizations Management System for quality assurance." },
                          { t: "NIRF Ranked Institution", d: "Consistently ranked in NIRF Innovation, Engineering, and Overall bands." },
                          { t: "Global Pathways & Internationalization", d: "Active dual-degree & credit transfer partnerships with leading foreign universities." },
                        ].map((d, i) => (
                          <div key={i} className="bg-slate-50/80 hover:bg-white rounded-xl border border-slate-200 hover:border-[#b31317]/40 p-5 transition-all shadow-2xs">
                            <Star className="w-5 h-5 text-[#caa74d] mb-2" />
                            <h4 className="font-display font-bold text-[#0f2a44] text-base">{d.t}</h4>
                            <p className="font-body text-sm md:text-sm text-slate-600 mt-1.5 leading-relaxed">{d.d}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {active === "sss" && (
                  <section>
                    <SectionHeader eyebrow="SSS" title="Student Satisfaction Survey" description="Annual Student Satisfaction Survey reports evaluating teaching-learning process, infrastructure and overall student experience." />
                    <DocGrid docs={filter(userSssDocs)} />
                  </section>
                )}

                {active === "econtent" && (
                  <section>
                    <SectionHeader eyebrow="Digital Learning" title="e-Content Facility" description="MITS e-Content Development Center, facilities, SOPs and faculty repository." />
                    <DocGrid docs={filter(econtent)} />
                  </section>
                )}

                {active === "popsoco" && (
                  <section>
                    <SectionHeader eyebrow="Outcomes" title="PO – PSO – CO of All Departments" description="Programme Outcomes, Programme Specific Outcomes and Course Outcomes across UG and PG departments." />
                    <SubHeader title="Under Graduate Programmes" />
                    <DocGrid docs={filter(poPsoCoUG)} />
                    <SubHeader title="Post Graduate Programmes" />
                    <DocGrid docs={filter(poPsoCoPG)} />
                  </section>
                )}

                {active === "annual" && (
                  <section className="space-y-6">
                    <SectionHeader eyebrow="Annual Reports" title="MITS Annual Report & IQAC Hours Reports" description="Institution-wide annual reports covering academics, research, placements, infrastructure, governance, and monthly IQAC hours reports." />
                    
                    <SubHeader title="MITS Annual Reports" />
                    <DocGrid docs={filter(userAnnualReportsDocs)} />

                    <SubHeader title="IQAC Hours Reports" />
                    <DocGrid docs={filter(userIqacHoursDocs)} />
                  </section>
                )}

                {active === "newsletter" && (
                  <section>
                    <SectionHeader eyebrow="Communication" title="MITS Newsletter" description="Departmental and institutional newsletters archive." />
                    <DocGrid docs={filter(newsletterDocs)} />
                  </section>
                )}

                {active === "handbook" && (
                  <section>
                    <SectionHeader eyebrow="Handbook" title="Institutional Handbook" description="Handbook curated by IQAC covering academic and administrative processes, files to be maintained and general information." />
                    <DocGrid docs={filter(userHandbookDocs)} />
                  </section>
                )}

                {active === "ugc" && (
                  <section>
                    <SectionHeader eyebrow="UGC" title="UGC Quality Mandate" description="Guidelines, frameworks and quality initiatives from UGC, MoE and allied national bodies." />
                    <DocGrid docs={filter(userUgcMandateDocs)} />
                  </section>
                )}

                {active === "events" && (
                  <section className="space-y-6">
                    <SectionHeader
                      eyebrow="Events"
                      title="IQAC Events & Collaborations"
                      description="Professional development programmes, workshops, audits, expert talks and collaborations conducted by IQAC."
                    />
                    
                    <div className="bg-white rounded-2xl p-5 md:p-7 border border-slate-200 shadow-sm space-y-3.5">
                      {userIqacEventsDocs.map((item, idx) => {
                        const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase().trim());
                        if (search.trim() && !matchesSearch) return null;

                        return (
                          <a
                            key={idx}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 text-sm md:text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors group border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                          >
                            <span className="w-5 h-5 rounded-full bg-red-100 text-[#b31317] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#b31317] group-hover:text-white transition-colors">
                              <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                            <span className="flex-1 leading-normal">
                              {item.title}
                            </span>
                            <Download className="w-4 h-4 text-slate-400 group-hover:text-[#b31317] shrink-0 mt-0.5" />
                          </a>
                        );
                      })}
                    </div>
                  </section>
                )}

                {active === "eiqac" && (
                  <section>
                    <SectionHeader eyebrow="Digital IQAC" title="e-IQAC Trackers" description="MITS e-IQAC portal — internal tracker for departments, cells and committees." />
                    <DocGrid docs={filter(userEiqacDocs)} />
                  </section>
                )}

                {active === "naacReforms" && (
                  <section>
                    <SectionHeader eyebrow="NAAC 2024" title="NAAC Reforms 2024" description="Institutional preparedness for NAAC 2024 reforms including binary accreditation framework, supporting document manuals and MITS responsibilities matrix." />
                    <DocGrid docs={filter(naacReforms2024)} />
                  </section>
                )}

                {active === "manuals" && (
                  <section className="space-y-6">
                    <SectionHeader eyebrow="Downloads" title="Manual / Format / Guidelines" description="Comprehensive downloads for department, audit, NAAC, NBA and NIRF formats along with functional check-lists." />
                    
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-[#b31317] text-white">
                              <th className="py-3.5 px-5 font-display font-bold text-sm md:text-sm uppercase tracking-wider text-white w-16 text-center">
                                S.No
                              </th>
                              <th className="py-3.5 px-5 font-display font-bold text-sm md:text-sm uppercase tracking-wider text-white">
                                Manual / Format / Templates
                              </th>
                              <th className="py-3.5 px-5 font-display font-bold text-sm md:text-sm uppercase tracking-wider text-white">
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
                                  <td className="py-4 px-5 font-bold text-slate-500 text-center align-top">
                                    {row.sno}
                                  </td>
                                  <td className="py-4 px-5 font-bold text-[#0f2a44] align-top">
                                    {row.title}
                                  </td>
                                  <td className="py-4 px-5 align-top">
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

                {active === "gallery" && (
                  <section>
                    <SectionHeader eyebrow="Gallery" title="IQAC Gallery" description="Snapshots from IQAC-conducted programmes, audits and faculty development workshops." />
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {userGalleryDocs.map((item, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col">
                          <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                              <span className="text-sm text-white font-medium">{item.title}</span>
                            </div>
                          </div>
                          <div className="p-4 bg-white border-t border-slate-100">
                            <p className="font-display font-bold text-sm md:text-sm text-[#0f2a44] line-clamp-2">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {active === "contact" && (
                  <section className="space-y-6">
                    <SectionHeader eyebrow="Contact" title="Contact Us" description="Internal Quality Assurance Cell (IQAC), Madanapalle Institute of Technology & Science." />
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* IQAC Team Card */}
                      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
                        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                          <div className="w-10 h-10 rounded-xl bg-red-50 text-[#b31317] flex items-center justify-center font-bold">
                            <Users className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-lg text-[#0f2a44]">IQAC Team</h3>
                            <p className="text-sm text-slate-500 font-medium">Core Administration & Coordination</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                            <h4 className="font-display font-bold text-base text-[#0f2a44]">Dr. K. Sathesh</h4>
                            <p className="text-sm font-semibold text-[#b31317] uppercase tracking-wider mt-0.5">IQAC & NAAC Coordinator</p>
                          </div>

                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                            <h4 className="font-display font-bold text-base text-[#0f2a44]">Mrs. Kowsalya P</h4>
                            <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mt-0.5">IQAC Document Manager</p>
                          </div>

                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                            <h4 className="font-display font-bold text-base text-[#0f2a44]">Mrs. K. Revathi</h4>
                            <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mt-0.5">IQAC Document Manager</p>
                          </div>
                        </div>
                      </div>

                      {/* Address & Communication Card */}
                      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
                        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                          <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#caa74d] flex items-center justify-center font-bold">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-lg text-[#0f2a44]">Address & Contact Details</h3>
                            <p className="text-sm text-slate-500 font-medium">Campus Location & Email Directory</p>
                          </div>
                        </div>

                        <div className="space-y-4 text-sm font-body text-slate-700">
                          <div>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Address</p>
                            <p className="font-semibold text-[#0f2a44]">Room No: SRB211A</p>
                            <p>Madanapalle Institute of Technology & Science</p>
                            <p className="text-sm text-slate-500 font-medium">Deemed to be University</p>
                            <p>Madanapalle-Kadiri Road, Kurabalakota Mandal</p>
                            <p>Madanapalle - 517325, Andhra Pradesh, India</p>
                          </div>

                          <div className="pt-3 border-t border-slate-100">
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                              <Phone className="w-3.5 h-3.5 text-[#b31317]" /> Phone Numbers
                            </p>
                            <p className="font-semibold text-[#0f2a44]">+91-08571280255, 9100973388</p>
                          </div>

                          <div className="pt-3 border-t border-slate-100">
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                              <Mail className="w-3.5 h-3.5 text-[#b31317]" /> Email Addresses
                            </p>
                            <div className="flex flex-col gap-1">
                              <a href="mailto:iqaccell@mits.ac.in" className="font-semibold text-[#b31317] hover:underline">iqaccell@mits.ac.in</a>
                              <a href="mailto:iqac-coordinator@mits.ac.in" className="font-semibold text-[#b31317] hover:underline">iqac-coordinator@mits.ac.in</a>
                            </div>
                          </div>
                        </div>
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

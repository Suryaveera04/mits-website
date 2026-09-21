import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText, Download, Calendar, ClipboardList, BookOpen, FolderDown,
  Megaphone, GraduationCap, IdCard, Phone, Mail, MapPin,
  ChevronRight, Building2, ShieldCheck, ExternalLink, FileSpreadsheet,
  FileArchive, Sparkles, Clock,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BASE = import.meta.env.BASE_URL;
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import {
  ugNotifications, ugMidTermTimetables, ugEndSemTimetables,
  ugFacultyFormats, ugStudentFormats, ugDownloads, ugCirculars,
  pgNotifications, pgCirculars, pgMidTermTimetables, pgEndSemTimetables,
  pgFacultyFormats, pgStudentFormats, pgDownloads,
  ugResults, pgResults, apaarAbc,
  coeOffice, coeResponsibilities, type ExamLink,
} from "@/data/examData";

type SectionKey =
  | "overview" | "ug-notif" | "ug-circulars" | "ug-mid" | "ug-end"
  | "ug-fac" | "ug-stu" | "ug-down"
  | "pg-notif" | "pg-circulars" | "pg-mid" | "pg-end" | "pg-fac" | "pg-stu" | "pg-down"
  | "results" | "apaar" | "contact";

const NAV: { id: SectionKey; label: string; icon: LucideIcon; group: string }[] = [
  { id: "overview",     label: "Home",                     icon: Building2,     group: "Office of CoE" },
  { id: "ug-notif",     label: "Notifications",            icon: Megaphone,     group: "Office of CoE" },
  { id: "ug-circulars", label: "Circulars",                icon: FileText,      group: "Office of CoE" },
  { id: "ug-mid",       label: "Mid Term Tests",           icon: Calendar,      group: "Office of CoE" },
  { id: "ug-end",       label: "End Semester Exams",       icon: ClipboardList, group: "Office of CoE" },
  { id: "ug-fac",       label: "Formats — Faculty",        icon: FileSpreadsheet, group: "Office of CoE" },
  { id: "ug-stu",       label: "Formats — Students",       icon: FileSpreadsheet, group: "Office of CoE" },
  { id: "ug-down",      label: "Downloads",                icon: FolderDown,    group: "Office of CoE" },
  { id: "pg-notif",     label: "Notifications",            icon: Megaphone,     group: "Office of CoE" },
  { id: "pg-circulars",  label: "Circulars",                icon: FileText,      group: "Office of CoE" },
  { id: "pg-mid",       label: "Mid Term Tests",           icon: Calendar,      group: "Office of CoE" },
  { id: "pg-end",       label: "End Semester Exams",       icon: ClipboardList, group: "Office of CoE" },
  { id: "pg-fac",       label: "Formats — Faculty",        icon: FileSpreadsheet, group: "Office of CoE" },
  { id: "pg-stu",       label: "Formats — Students",       icon: FileSpreadsheet, group: "Office of CoE" },
  { id: "pg-down",      label: "Downloads",                icon: FolderDown,    group: "Office of CoE" },
  { id: "results",      label: "Results",                  icon: GraduationCap, group: "Results & Records" },
  { id: "apaar",        label: "APAAR / ABC",              icon: IdCard,        group: "Results & Records" },
  { id: "contact",      label: "Contact Us",               icon: Phone,         group: "Office of CoE" },
];

const kindIcon = (k?: ExamLink["kind"]) => {
  switch (k) {
    case "doc": return FileText;
    case "xlsx": return FileSpreadsheet;
    case "rar": return FileArchive;
    case "link": return ExternalLink;
    default: return FileText;
  }
};

/* ---------------- Notification list card ---------------- */
const NotificationList = ({ items, query, emptyMessage = "No items are available right now." }: { items: ExamLink[]; query: string; emptyMessage?: string }) => {
  const filtered = useMemo(
    () => items.filter((i) => i.title.toLowerCase().includes(query.toLowerCase())),
    [items, query],
  );

  if (!items.length) {
    return <EmptyState message={emptyMessage} />;
  }
  if (!filtered.length) {
    return (
      <div className="text-center py-12 text-muted-foreground bg-muted/30 rounded-xl border border-dashed">
        No items match your search.
      </div>
    );
  }
  return (
    <ul className="divide-y divide-border rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      {filtered.map((it, i) => {
        const Icon = kindIcon(it.kind);
        return (
          <motion.li
            key={it.href + i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.02 }}
            className="group"
          >
            <a
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 md:p-5 hover:bg-primary/5 transition-colors"
            >
              {typeof it.no === "number" && (
                <span className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 text-primary font-display font-semibold flex items-center justify-center text-sm">
                  {it.no}
                </span>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                  {it.title}
                </p>
                <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                  {it.kind === "link" ? "External link" : `${(it.kind || "pdf").toUpperCase()} document`}
                </p>
              </div>
              <span className="shrink-0 w-10 h-10 rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground text-muted-foreground flex items-center justify-center transition-all">
                <Icon className="w-4 h-4" />
              </span>
            </a>
          </motion.li>
        );
      })}
    </ul>
  );
};

const SectionHead = ({ icon: Icon, title, subtitle }: { icon: LucideIcon; title: string; subtitle?: string }) => (
  <div className="mb-6 md:mb-8">
    <div className="flex items-center gap-3 mb-2">
      <span className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center shadow-md">
        <Icon className="w-5 h-5" />
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
    </div>
    {subtitle && <p className="text-sm md:text-base text-muted-foreground ml-14">{subtitle}</p>}
  </div>
);

/* ---------------- Page ---------------- */
const Examinations = () => {
  const [active, setActive] = useState<SectionKey>("overview");
  const query = "";
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [ugOpen, setUgOpen] = useState(false);
  const [pgOpen, setPgOpen] = useState(false);
  const [pgDownloadsOpen, setPgDownloadsOpen] = useState({ mba: false, mca: false, mtech: false });

  useEffect(() => {
    if (location.hash) {
      const k = location.hash.slice(1) as SectionKey;
      if (NAV.some((n) => n.id === k)) setActive(k);
    }
  }, []);

  const grouped = useMemo(() => {
    const map: Record<string, typeof NAV> = {};
    NAV.forEach((n) => { (map[n.group] ||= []).push(n); });
    return map;
  }, []);

  const officeItems = grouped["Office of CoE"] ?? [];
  const resultsItems = grouped["Results & Records"] ?? [];
  const homeItem = officeItems.find((item) => item.id === "overview");
  const contactItem = officeItems.find((item) => item.id === "contact");
  const ugItems = officeItems.filter((item) => item.id.startsWith("ug-"));
  const pgItems = officeItems.filter((item) => item.id.startsWith("pg-"));

  const pgDownloadsGroups = useMemo(() => {
    const mba = pgDownloads.filter((item) => item.title.toLowerCase().includes("mba question papers"));
    const mca = pgDownloads.filter((item) => item.title.toLowerCase().includes("mca question papers"));
    const mtech = pgDownloads.filter((item) => item.title.toLowerCase().includes("m.tech question papers"));

    return {
      mba,
      mca,
      mtech,
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO */}
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
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#ffb300] font-bold tracking-[0.2em] uppercase text-sm sm:text-sm mb-4 inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#ffb300]" /> MITS Deemed to be University
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Office of <span className="text-[#ffd15c]">Controller of Examinations</span>
            </motion.h1>
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
                  <Link to="/academics" className="text-white/70 hover:text-white transition-colors">
                    Academics
                  </Link>
                </li>
                <li className="text-white/50">›</li>
                <li className="text-[#ffd15c] font-semibold">Examinations</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* SEARCH + MOBILE NAV TRIGGER */}
        <div className="sticky top-16 z-30 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-3 flex items-center">
            <button
              onClick={() => setMobileNavOpen((o) => !o)}
              className="lg:hidden shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card text-sm font-medium"
            >
              <ClipboardList className="w-4 h-4" /> Sections
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* SIDEBAR */}
            <aside className={cn("lg:block", mobileNavOpen ? "block" : "hidden")}>
              <div className="lg:sticky lg:top-32 space-y-6">
                <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
                  <ul className="space-y-1 p-2">
                    {homeItem && (
                      <li key={homeItem.id}>
                        <button
                          onClick={() => { setActive(homeItem.id); setMobileNavOpen(false); window.scrollTo({ top: 200, behavior: "smooth" }); }}
                          className={cn(
                            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all group",
                            active === homeItem.id
                              ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md"
                              : "text-foreground hover:bg-muted",
                          )}
                        >
                          <homeItem.icon className={cn("w-4 h-4 shrink-0", active === homeItem.id ? "" : "text-muted-foreground group-hover:text-primary")} />
                          <span className="flex-1 text-left truncate">{homeItem.label}</span>
                          {active === homeItem.id && <ChevronRight className="w-4 h-4" />}
                        </button>
                      </li>
                    )}
                    <li>
                      <Collapsible open={ugOpen} onOpenChange={setUgOpen}>
                        <CollapsibleTrigger className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm transition-all text-foreground hover:bg-muted">
                          <span className="font-medium text-left">UG Programmes</span>
                          <ChevronRight className={cn("w-4 h-4 transition-transform text-muted-foreground", ugOpen && "rotate-90")} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pt-1">
                          <ul className="space-y-1 pl-2">
                            {ugItems.filter((item) => item.id !== "overview" && item.id !== "contact").map((n) => (
                              <li key={n.id}>
                                <button
                                  onClick={() => { setActive(n.id); setMobileNavOpen(false); window.scrollTo({ top: 200, behavior: "smooth" }); }}
                                  className={cn(
                                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all group",
                                    active === n.id
                                      ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md"
                                      : "text-foreground hover:bg-muted",
                                  )}
                                >
                                  <n.icon className={cn("w-4 h-4 shrink-0", active === n.id ? "" : "text-muted-foreground group-hover:text-primary")} />
                                  <span className="flex-1 text-left truncate">{n.label}</span>
                                  {active === n.id && <ChevronRight className="w-4 h-4" />}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </li>
                    <li>
                      <Collapsible open={pgOpen} onOpenChange={setPgOpen}>
                        <CollapsibleTrigger className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm transition-all text-foreground hover:bg-muted">
                          <span className="font-medium text-left">PG Programmes</span>
                          <ChevronRight className={cn("w-4 h-4 transition-transform text-muted-foreground", pgOpen && "rotate-90")} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pt-1">
                          <ul className="space-y-1 pl-2">
                            {pgItems.map((n) => (
                              <li key={n.id}>
                                <button
                                  onClick={() => { setActive(n.id); setMobileNavOpen(false); window.scrollTo({ top: 200, behavior: "smooth" }); }}
                                  className={cn(
                                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all group",
                                    active === n.id
                                      ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md"
                                      : "text-foreground hover:bg-muted",
                                  )}
                                >
                                  <n.icon className={cn("w-4 h-4 shrink-0", active === n.id ? "" : "text-muted-foreground group-hover:text-primary")} />
                                  <span className="flex-1 text-left truncate">{n.label}</span>
                                  {active === n.id && <ChevronRight className="w-4 h-4" />}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </li>
                    {resultsItems.map((n) => (
                      <li key={n.id}>
                        <button
                          onClick={() => { setActive(n.id); setMobileNavOpen(false); window.scrollTo({ top: 200, behavior: "smooth" }); }}
                          className={cn(
                            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all group",
                            active === n.id
                              ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md"
                              : "text-foreground hover:bg-muted",
                          )}
                        >
                          <n.icon className={cn("w-4 h-4 shrink-0", active === n.id ? "" : "text-muted-foreground group-hover:text-primary")} />
                          <span className="flex-1 text-left truncate">{n.label}</span>
                          {active === n.id && <ChevronRight className="w-4 h-4" />}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {contactItem && (
                  <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
                    <button
                      onClick={() => { setActive(contactItem.id); setMobileNavOpen(false); window.scrollTo({ top: 200, behavior: "smooth" }); }}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all group",
                        active === contactItem.id
                          ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md"
                          : "text-foreground hover:bg-muted",
                      )}
                    >
                      <contactItem.icon className={cn("w-4 h-4 shrink-0", active === contactItem.id ? "" : "text-muted-foreground group-hover:text-primary")} />
                      <span className="flex-1 text-left truncate">{contactItem.label}</span>
                      {active === contactItem.id && <ChevronRight className="w-4 h-4" />}
                    </button>
                  </div>
                )}
              </div>
            </aside>

            {/* CONTENT */}
            <section className="min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {active === "overview" && <Overview />}
                  {active === "ug-notif" && (<>
                    <SectionHead icon={Megaphone} title="Notifications" subtitle="Official end-semester, regular, supplementary, re-evaluation and recounting notifications." />
                    <NotificationList items={ugNotifications} query={query} />
                  </>)}
                  {active === "ug-circulars" && (<>
                    <SectionHead icon={FileText} title="Circulars" subtitle="Latest circulars from the Controller of Examinations." />
                    <NotificationList items={ugCirculars} query={query} emptyMessage="No active circulars at this time. Please check back later or refer to the latest notifications." />
                  </>)}
                  {active === "ug-mid" && (<>
                    <SectionHead icon={Calendar} title="Mid Term Tests" subtitle="Time tables for I & II Mid term examinations including Engineering Graphics." />
                    <NotificationList items={ugMidTermTimetables} query={query} />
                  </>)}
                  {active === "ug-end" && (<>
                    <SectionHead icon={ClipboardList} title="End Semester Exams" subtitle="Theory, practical and model lab time tables." />
                    <NotificationList items={ugEndSemTimetables} query={query} />
                  </>)}
                  {active === "ug-fac" && (<>
                    <SectionHead icon={FileSpreadsheet} title="Formats — Faculty" subtitle="Forms and templates for invigilation, evaluation and lab awards." />
                    <NotificationList items={ugFacultyFormats} query={query} />
                  </>)}
                  {active === "ug-stu" && (<>
                    <SectionHead icon={FileSpreadsheet} title="Formats — Students" subtitle="Application forms for re-evaluation and recounting of answer scripts." />
                    <NotificationList items={ugStudentFormats} query={query} />
                  </>)}
                  {active === "ug-down" && (<>
                    <SectionHead icon={FolderDown} title="Downloads" subtitle="Question papers, regulations, syllabi and academic calendars." />
                    <NotificationList items={ugDownloads} query={query} />
                  </>)}
                  {active === "pg-notif" && (<>
                    <SectionHead icon={Megaphone} title="Notifications" subtitle="End-semester examination notifications for MBA, MCA and M.Tech." />
                    <NotificationList items={pgNotifications} query={query} />
                  </>)}
                  {active === "pg-circulars" && (<>
                    <SectionHead icon={FileText} title="Circulars" subtitle="Latest circulars and official examination updates." />
                    <NotificationList items={pgCirculars} query={query} emptyMessage="No active PG circulars are available right now." />
                  </>)}
                  {active === "pg-mid" && (<>
                    <SectionHead icon={Calendar} title="Mid Term Tests" subtitle="Mid term examination notices and time table updates." />
                    <NotificationList items={pgMidTermTimetables} query={query} emptyMessage="No active PG mid term test notices are available right now." />
                  </>)}
                  {active === "pg-end" && (<>
                    <SectionHead icon={ClipboardList} title="End Semester Exams" subtitle="Current end-semester examination notices." />
                    <NotificationList items={pgEndSemTimetables} query={query} emptyMessage="No active PG end semester exam items are available right now." />
                  </>)}
                  {active === "pg-fac" && (<>
                    <SectionHead icon={FileSpreadsheet} title="Formats — Faculty" subtitle="Official formats used by faculty for PG examinations." />
                    <NotificationList items={pgFacultyFormats} query={query} emptyMessage="No PG faculty formats are available right now." />
                  </>)}
                  {active === "pg-stu" && (<>
                    <SectionHead icon={FileSpreadsheet} title="Formats — Students" subtitle="Official forms and student request formats for PG examinations." />
                    <NotificationList items={pgStudentFormats} query={query} emptyMessage="No PG student formats are available right now." />
                  </>)}
                  {active === "pg-down" && (<>
                    <SectionHead icon={FolderDown} title="Downloads" subtitle="Question papers, archives and other downloadable resources for PG programmes." />
                    <div className="space-y-3">
                      <Collapsible open={pgDownloadsOpen.mba} onOpenChange={(open) => setPgDownloadsOpen((prev) => ({ ...prev, mba: open }))}>
                        <CollapsibleTrigger className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-border bg-card text-sm md:text-base font-medium text-left hover:bg-muted transition-colors">
                          <span>MBA Question Papers</span>
                          <ChevronRight className={cn("w-4 h-4 transition-transform text-muted-foreground", pgDownloadsOpen.mba && "rotate-90")} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pt-2">
                          <NotificationList items={pgDownloadsGroups.mba} query={query} emptyMessage="No MBA question papers are available right now." />
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible open={pgDownloadsOpen.mca} onOpenChange={(open) => setPgDownloadsOpen((prev) => ({ ...prev, mca: open }))}>
                        <CollapsibleTrigger className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-border bg-card text-sm md:text-base font-medium text-left hover:bg-muted transition-colors">
                          <span>MCA Question Papers</span>
                          <ChevronRight className={cn("w-4 h-4 transition-transform text-muted-foreground", pgDownloadsOpen.mca && "rotate-90")} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pt-2">
                          <NotificationList items={pgDownloadsGroups.mca} query={query} emptyMessage="No MCA question papers are available right now." />
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible open={pgDownloadsOpen.mtech} onOpenChange={(open) => setPgDownloadsOpen((prev) => ({ ...prev, mtech: open }))}>
                        <CollapsibleTrigger className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-border bg-card text-sm md:text-base font-medium text-left hover:bg-muted transition-colors">
                          <span>M.Tech Question Papers</span>
                          <ChevronRight className={cn("w-4 h-4 transition-transform text-muted-foreground", pgDownloadsOpen.mtech && "rotate-90")} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pt-2">
                          <NotificationList items={pgDownloadsGroups.mtech} query={query} emptyMessage="No M.Tech question papers are available right now." />
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  </>)}
                  {active === "results" && (<>
                    <SectionHead icon={GraduationCap} title="Results" subtitle="UG and PG results portal — including recounting and re-evaluation outcomes." />
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-display text-xl font-semibold mb-3 text-foreground">UG Results</h3>
                        <NotificationList items={ugResults} query={query} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold mb-3 text-foreground">PG Results</h3>
                        <NotificationList items={pgResults} query={query} />
                      </div>
                    </div>
                  </>)}
                  {active === "apaar" && (<>
                    <SectionHead icon={IdCard} title="APAAR / ABC" subtitle="Automated Permanent Academic Account Registry and Academic Bank of Credits." />
                    <div className="rounded-xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-6 mb-6">
                      <ShieldCheck className="w-8 h-8 text-primary mb-3" />
                      <p className="text-sm md:text-base text-foreground leading-relaxed">
                        APAAR ID (One Nation One Student ID) and the Academic Bank of Credits enable students to digitally store, transfer and accumulate academic credits across institutions under NEP 2020. All MITS students must generate their APAAR/ABC ID.
                      </p>
                    </div>
                    <NotificationList items={apaarAbc} query={query} />
                  </>)}
                  {active === "contact" && <Contact />}
                </motion.div>
              </AnimatePresence>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

/* ---------------- Sub-views ---------------- */
const EmptyState = ({ message }: { message: string }) => (
  <div className="rounded-xl border border-dashed border-border bg-muted/30 p-10 text-center">
    <Clock className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
    <p className="text-sm text-muted-foreground max-w-md mx-auto">{message}</p>
  </div>
);

const Overview = () => (
  <div>
    <SectionHead
      icon={Building2}
      title="Office of the Controller of Examinations"
      subtitle="Central authority for conduction, evaluation and certification of all university examinations."
    />
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm mb-10">
      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">About</h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl">
        The office of the Controller of Examinations is vital to the University. The O/o CoE is responsible for the entire examination system, including preparation, scheduling, and the conduct of Continuous Internal Assessments and End Semester Examinations. Key functions include ensuring the integrity and fairness of the evaluation process, processing and publishing results, managing examination records, handling student grievances, and ensuring compliance with academic regulations. The O/o CoE works closely with various academic departments to ensure the smooth functioning of the overall examination process.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-4 mb-10">
      {[
        { v: "5,000+", l: "Students Examined / Year", i: GraduationCap },
        { v: "100%",   l: "Result Accuracy",          i: ShieldCheck },
        { v: "15 Days", l: "Result Declaration",       i: Clock },
      ].map((s) => (
        <div key={s.l} className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <s.i className="w-7 h-7 text-primary mb-3" />
          <p className="font-display text-3xl font-bold text-foreground">{s.v}</p>
          <p className="text-sm text-muted-foreground">{s.l}</p>
        </div>
      ))}
    </div>
    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">Functions & Responsibilities</h3>
    <ul className="grid md:grid-cols-2 gap-3">
      {coeResponsibilities.map((r, i) => (
        <li key={i} className="flex gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
          <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
          <p className="text-sm text-foreground leading-relaxed">{r}</p>
        </li>
      ))}
    </ul>
  </div>
);

const Contact = () => (
  <div>
    <SectionHead icon={Phone} title="Contact the Examination Office" subtitle="For grievances, certificates, verifications and general queries." />
    <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-gradient-to-br from-card to-card/60">
      <div className="bg-gradient-to-r from-[#0f2a44] via-[#163a5f] to-[#0f2a44] text-white p-6 border-b border-amber-400/20">
        <p className="text-xs uppercase tracking-widest text-[#ffd15c] font-bold">Controller of Examinations</p>
        <h3 className="font-display text-2xl md:text-3xl font-bold mt-1 text-[#ffd15c]">{coeOffice.name}</h3>
        <p className="text-white/90 text-sm">{coeOffice.designation}</p>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex gap-3"><MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-sm text-foreground">{coeOffice.address}</p></div>
        <div className="flex gap-3"><Phone  className="w-5 h-5 text-primary shrink-0 mt-0.5" /><a href={`tel:${coeOffice.phone}`} className="text-sm text-foreground hover:text-primary">{coeOffice.phone}</a></div>
        <div className="flex gap-3"><Mail   className="w-5 h-5 text-primary shrink-0 mt-0.5" /><a href={`mailto:${coeOffice.email}`} className="text-sm text-foreground hover:text-primary">{coeOffice.email}</a></div>
      </div>
    </div>
  </div>
);

export default Examinations;

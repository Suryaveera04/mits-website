import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  FileText,
  ExternalLink,
  Download,
  Shield,
  Landmark,
  GraduationCap,
  Award,
  Microscope,
  Users,
  BookOpen,
  Image as ImageIcon,
  Phone,
  BadgeCheck as BadgeCheckIcon,
  LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { psdSections, psdOverviewPdf, type PsdRow } from "@/data/psdData";

const BASE = import.meta.env.BASE_URL;

const sectionIcon: Record<string, LucideIcon> = {
  "about-hei": Landmark,
  administration: Users,
  academics: GraduationCap,
  "admissions-fee": BookOpen,
  research: Microscope,
  "student-life": Award,
  alumni: Users,
  "information-corner": Shield,
  gallery: ImageIcon,
  contact: Phone,
};

const RowItem = ({ row }: { row: PsdRow }) => (
  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 px-4 md:px-5 py-4 border-b border-[#0f2a44]/5 last:border-0 hover:bg-[#fff8e6]/40 transition-colors">
    <div className="flex-1 min-w-0">
      <p className="font-body text-[#0f2a44] text-sm md:text-base font-medium leading-snug">{row.subject}</p>
      {row.details && (
        <p className="font-body text-sm md:text-sm text-[#0f2a44]/60 mt-1 whitespace-pre-line">{row.details}</p>
      )}
      <span className="inline-flex items-center gap-1.5 mt-2 text-[10px] uppercase tracking-wider font-semibold text-[#b31317]">
        <span className="inline-block w-1 h-1 rounded-full bg-[#caa74d]" />
        {row.category}
      </span>
    </div>
    <div className="flex flex-wrap gap-2 shrink-0">
      {row.actions.length === 0 ? (
        <span className="text-sm text-[#0f2a44]/40 italic">No document</span>
      ) : (
        row.actions.map((a, i) =>
          a.internal ? (
            <Link
              key={i}
              to={a.href}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#0f2a44] text-white text-sm font-semibold hover:bg-[#11355a] transition-colors"
            >
              {a.label} <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <a
              key={i}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#0f2a44]/15 bg-white text-sm font-semibold text-[#0f2a44] hover:border-[#caa74d] hover:bg-[#fff8e6] transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#b31317]" />
              {a.label}
              <ExternalLink className="w-3 h-3 text-[#0f2a44]/40" />
            </a>
          )
        )
      )}
    </div>
  </div>
);

const PublicSelfDisclosures = () => {
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(psdSections.map((s) => [s.id, false]))
  );

  const splitTitle = (text: string) => {
    const words = text.trim().split(/\s+/);
    if (words.length <= 1) {
      return <span className="text-white">{text}</span>;
    }
    const splitIndex = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, splitIndex).join(" ");
    const secondHalf = words.slice(splitIndex).join(" ");
    return (
      <>
        <span className="text-white">{firstHalf}</span>{" "}
        <span className="text-[#ffd15c]">{secondHalf}</span>
      </>
    );
  };

  const filteredSections = psdSections;

  const totalDocs = psdSections.reduce(
    (n, s) => n + s.rows.reduce((m, r) => m + r.actions.length, 0),
    0
  );

  const related = [
    { label: "NAAC Portal", to: "/naac", icon: Award },
    { label: "NIRF Portal", to: "/nirf", icon: Award },
    { label: "Affiliations & Accreditations", to: "/affiliations-accreditations", icon: BadgeCheckIcon },
    { label: "Mandatory Disclosures", to: "/about/mandatory-disclosures", icon: Shield },
    { label: "Research", to: "/research", icon: Microscope },
    { label: "Examinations", to: "/examinations", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />

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
          <p className="text-[#ffb300] font-bold tracking-[0.2em] uppercase text-sm sm:text-sm mb-4">
            Transparency &amp; Governance
          </p>
          <h1
            className="font-display text-4xl md:text-6xl font-bold mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {splitTitle("Public Self Disclosures")}
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Institutional Transparency, Governance, Compliance and Public Information Repository of MITS Deemed to be University.
          </p>

          <div className="flex justify-center gap-3 mt-8">
            <a
              href={psdOverviewPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-white text-sm font-semibold shadow-md hover:opacity-95 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PSD Booklet</span>
            </a>
            <Link
              to="/about/mandatory-disclosures"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/15 transition-colors"
            >
              Mandatory Disclosures
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-4 left-6 z-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-white/80">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/50">›</li>
              <li className="text-white/70">Compliance</li>
              <li className="text-white/50">›</li>
              <li className="text-[#ffd15c] font-semibold">Public Self Disclosures</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* QUICK NAV CATEGORIES removed per request */}

      {/* SEARCH + FILTERS removed */}

      {/* MAIN CONTENT */}
      <main className="container mx-auto px-4 py-10 md:py-14 space-y-5">
        {filteredSections.map((sec) => {
          const Icon = sectionIcon[sec.id] ?? FileText;
          const isOpen = !!open[sec.id];
          return (
            <ScrollReveal key={sec.id}>
              <section
                id={`psd-${sec.id}`}
                className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden scroll-mt-32"
              >
                <button
                  onClick={() => setOpen((o) => ({ ...o, [sec.id]: !o[sec.id] }))}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-7 py-5 text-left hover:bg-[#fff8e6]/40 transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f2a44] to-[#11355a] text-[#caa74d] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-lg md:text-xl font-bold text-[#0f2a44] leading-tight">
                        {sec.number}. {sec.title}
                      </p>
                      <p className="font-body text-sm text-[#0f2a44]/60 mt-1">
                        {sec.rows.length} disclosure{sec.rows.length === 1 ? "" : "s"}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0f2a44]/60 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#0f2a44]/5">
                        {sec.rows.map((r, i) => (
                          <RowItem key={i} row={r} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            </ScrollReveal>
          );
        })}

        {filteredSections.length === 0 && (
          <p className="text-center py-16 text-[#0f2a44]/60">No disclosures match your search.</p>
        )}

        {/* RELATED */}
        <ScrollReveal>
          <section className="rounded-2xl bg-gradient-to-br from-[#0f2a44] to-[#11355a] text-white p-7 md:p-10 mt-10">
            <p className="text-[#caa74d] uppercase tracking-[0.3em] text-sm font-semibold mb-2">Related Portals</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-white">Explore More Compliance Portals</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {related.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#caa74d] transition-colors"
                >
                  <span className="font-body font-semibold text-sm text-white">{r.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#caa74d] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
};

export default PublicSelfDisclosures;

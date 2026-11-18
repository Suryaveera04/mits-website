import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Users, Calendar, Hash, ExternalLink, BookOpen, Tag, Building2, Globe } from "lucide-react";
import { useEffect } from "react";
import type { CMSPatent } from "@/hooks/useDeptCMSData";

interface Props { patent: CMSPatent; onClose: () => void; }

function isValid(v: unknown): boolean {
  if (v == null) return false;
  const s = String(v).trim();
  return s !== "" && s !== "0000-00-00" && s.toLowerCase() !== "null" && s.toLowerCase() !== "n/a";
}

function formatDate(d?: string | null): string | null {
  if (!isValid(d)) return null;
  const s = String(d).trim();
  try {
    const t = Date.parse(s);
    if (isNaN(t)) return s;
    return new Date(t).toLocaleDateString("en-IN", {
      day: "numeric", month: "short", year: "numeric",
    });
  } catch {
    return s;
  }
}

function cleanInventors(s?: string | null): string {
  if (!s) return "";
  let clean = s.trim();
  if ((clean.startsWith('"') && clean.endsWith('"')) || (clean.startsWith("'") && clean.endsWith("'"))) {
    clean = clean.slice(1, -1).trim();
  }
  return clean;
}

const statusStyles: Record<string, { badge: string; grad: string }> = {
  Granted:   { badge: "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30", grad: "from-emerald-800 to-slate-900" },
  Published: { badge: "bg-blue-500/20 text-blue-300 border border-blue-400/30",       grad: "from-blue-900 to-slate-900" },
  Filed:     { badge: "bg-amber-500/20 text-amber-300 border border-amber-400/30",     grad: "from-amber-900 to-slate-900" },
};

function InfoCard({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5 bg-slate-50/90 rounded-xl p-3 border border-slate-200/70 hover:border-slate-300 transition-colors">
      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="w-3.5 h-3.5 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{label}</p>
        <p className="text-xs font-semibold text-slate-800 mt-0.5 break-words leading-tight">{value}</p>
      </div>
    </div>
  );
}

function ModalContent({ patent: p, onClose }: Props) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  const raw = p as Record<string, any>;
  const style = statusStyles[p.status] ?? statusStyles.Filed;
  const inventors = cleanInventors(p.inventors);
  const filingDate = formatDate(raw.filing_date);
  const pubDate = formatDate(raw.published_date);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999]"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
        className="relative z-[10000] w-full max-w-2xl max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200/80 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean Modern Header */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-primary/5 px-6 pt-6 pb-5 border-b border-slate-200/80 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-40 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border border-slate-200/60 shadow-xs"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2.5 pr-10">
            <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
              p.status === "Granted"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : p.status === "Published"
                ? "bg-blue-50 text-blue-700 border border-blue-200"
                : "bg-amber-50 text-amber-700 border border-amber-200"
            }`}>
              {p.status || "Patent"}
            </span>
            {isValid(p.patent_type) && p.patent_type !== p.status && (
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {p.patent_type}
              </span>
            )}
            {isValid(raw.office) && (
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                Office: {raw.office}
              </span>
            )}
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
            {p.title}
          </h2>
        </div>

        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-4">
          {/* Quick info cards - ONLY non-empty */}
          {(() => {
            const cards: Array<{ icon: React.ElementType; label: string; value: string }> = [];
            if (isValid(p.patent_number)) cards.push({ icon: Hash, label: "Patent Number", value: p.patent_number! });
            if (isValid(p.application_number)) cards.push({ icon: Tag, label: "Application No.", value: p.application_number! });
            if (isValid(filingDate)) cards.push({ icon: Calendar, label: "Filing Date", value: filingDate! });
            if (isValid(pubDate)) cards.push({ icon: Calendar, label: "Published Date", value: pubDate! });
            if (isValid(p.year) && !filingDate && !pubDate) cards.push({ icon: Calendar, label: "Year", value: p.year });
            if (isValid(raw.office)) cards.push({ icon: Globe, label: "Patent Jurisdiction", value: String(raw.office) });

            if (cards.length === 0) return null;
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cards.map((c, i) => (
                  <InfoCard key={i} icon={c.icon} label={c.label} value={c.value} />
                ))}
              </div>
            );
          })()}

          {/* Inventors */}
          {isValid(inventors) && (
            <div className="pt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-primary" />Inventors / Applicants
              </h3>
              <p className="text-sm font-medium text-slate-800 bg-slate-50/90 rounded-xl p-3.5 border border-slate-200/80 leading-relaxed">
                {inventors}
              </p>
            </div>
          )}

          {/* Abstract */}
          {isValid(p.abstract) && (
            <div className="pt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-primary" />Patent Abstract
              </h3>
              <div className="text-slate-700 text-xs sm:text-sm leading-relaxed bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 prose prose-sm max-w-none whitespace-pre-line">
                {p.abstract}
              </div>
            </div>
          )}

          {/* External Link */}
          {isValid(p.external_link) && (
            <div className="pt-2 border-t border-slate-100">
              <a
                href={p.external_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-bold text-xs rounded-xl shadow-xs hover:bg-primary/90 active:scale-95 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                View Patent on Official Registry
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function PatentDetailModal({ patent, onClose }: Props) {
  return createPortal(
    <AnimatePresence><ModalContent key={patent.id} patent={patent} onClose={onClose} /></AnimatePresence>,
    document.body
  );
}

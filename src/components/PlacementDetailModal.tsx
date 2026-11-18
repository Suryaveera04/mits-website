import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Building2, User, Briefcase, Calendar, Users, BookOpen, DollarSign, Hash, ExternalLink, FileText } from "lucide-react";
import { useEffect } from "react";
import type { CMSPlacement } from "@/hooks/useDeptCMSData";

interface Props { placement: CMSPlacement; onClose: () => void; }

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

const subtypeStyles: Record<string, { badge: string; grad: string }> = {
  Placement:  { badge: "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30", grad: "from-emerald-900 to-slate-900" },
  Internship: { badge: "bg-blue-500/20 text-blue-300 border border-blue-400/30",       grad: "from-blue-900 to-slate-900" },
  Training:   { badge: "bg-purple-500/20 text-purple-300 border border-purple-400/30",   grad: "from-purple-900 to-slate-900" },
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

function ModalContent({ placement: p, onClose }: Props) {
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
  const style = subtypeStyles[p.subtype] ?? subtypeStyles.Placement;
  const isTraining = p.subtype === "Training";
  const headline = isTraining ? (p.programTitle || "Training Programme") : (p.studentName || "Student Placement");
  const subline  = isTraining ? (p.conductedBy || "") : (p.companyName || "");
  const startDate = formatDate(p.startDate);
  const endDate = formatDate(p.endDate);
  const trainingDates = (startDate && endDate) ? `${startDate} – ${endDate}` : (startDate || endDate);

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
            <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
              p.subtype === "Placement"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : p.subtype === "Internship"
                ? "bg-blue-50 text-blue-700 border border-blue-200"
                : "bg-purple-50 text-purple-700 border border-purple-200"
            }`}>
              {p.subtype}
            </span>
            {isValid(raw.placementType) && (
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {raw.placementType}
              </span>
            )}
            {isValid(p.year) && (
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                Year: {p.year}
              </span>
            )}
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
            {headline}
          </h2>
          {isValid(subline) && <p className="text-primary font-semibold text-xs sm:text-sm mt-1">{subline}</p>}
          {!isTraining && isValid(p.package) && (
            <div className="mt-2.5 inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-1 text-emerald-700 font-bold text-xs sm:text-sm">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <span>Package: {p.package}</span>
            </div>
          )}
        </div>

        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-4">
          {/* Quick info cards - ONLY non-empty */}
          {(() => {
            const cards: Array<{ icon: React.ElementType; label: string; value: string }> = [];
            if (!isTraining && isValid(p.studentName)) cards.push({ icon: User, label: "Student Name", value: p.studentName! });
            if (!isTraining && isValid(p.rollNumber)) cards.push({ icon: Hash, label: "Roll Number", value: p.rollNumber! });
            if (!isTraining && isValid(p.companyName)) cards.push({ icon: Building2, label: "Recruiting Company", value: p.companyName! });
            if (!isTraining && isValid(p.role)) cards.push({ icon: Briefcase, label: "Offered Role", value: p.role! });
            if (!isTraining && isValid(raw.placementType)) cards.push({ icon: Trophy, label: "Placement Drive", value: String(raw.placementType) });
            if (isValid(p.year)) cards.push({ icon: Calendar, label: "Academic Batch", value: p.year! });

            if (isTraining && isValid(p.programTitle)) cards.push({ icon: BookOpen, label: "Training Program", value: p.programTitle! });
            if (isTraining && isValid(p.conductedBy)) cards.push({ icon: Building2, label: "Conducted By", value: p.conductedBy! });
            if (isTraining && isValid(raw.trainingType)) cards.push({ icon: Trophy, label: "Training Type", value: String(raw.trainingType) });
            if (isTraining && isValid(trainingDates)) cards.push({ icon: Calendar, label: "Program Dates", value: trainingDates! });
            if (isTraining && p.numberOfStudents != null && p.numberOfStudents > 0) {
              cards.push({ icon: Users, label: "Students Benefited", value: `${p.numberOfStudents} Students` });
            }

            if (cards.length === 0) return null;
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cards.map((c, i) => (
                  <InfoCard key={i} icon={c.icon} label={c.label} value={c.value} />
                ))}
              </div>
            );
          })()}

          {/* Description */}
          {isValid(p.description) && (
            <div className="pt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-primary" />Program Description
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 whitespace-pre-line">
                {p.description}
              </p>
            </div>
          )}

          {/* Offer Letter / Certificate */}
          {(isValid(raw.offerLetterUrl) || isValid(raw.certificateUrl)) && (
            <div className="flex flex-wrap gap-2.5 pt-2 border-t border-slate-100">
              {isValid(raw.offerLetterUrl) && (
                <a
                  href={raw.offerLetterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-bold text-xs rounded-xl shadow-xs hover:bg-primary/90 active:scale-95 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Offer Letter
                </a>
              )}
              {isValid(raw.certificateUrl) && (
                <a
                  href={raw.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-300 text-slate-700 font-bold text-xs rounded-xl hover:border-primary hover:text-primary transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function PlacementDetailModal({ placement, onClose }: Props) {
  return createPortal(
    <AnimatePresence><ModalContent key={placement.id} placement={placement} onClose={onClose} /></AnimatePresence>,
    document.body
  );
}

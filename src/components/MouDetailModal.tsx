import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Handshake, Globe, Tag, Building2, FileText, CheckCircle2, Clock, Layers, Calendar, Bookmark } from "lucide-react";
import { useEffect } from "react";
import type { CMSMoU } from "@/hooks/useDeptCMSData";

interface Props { mou: CMSMoU; onClose: () => void; }

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

function ModalContent({ mou, onClose }: Props) {
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

  const raw = mou as Record<string, any>;
  const orgName = mou.organization || mou.partner_org || raw.partner_org || mou.title;
  const orgType = raw.org_type;
  const mouCategory = raw.mou_category;
  const startDate = formatDate(raw.start_date);
  const endDate = formatDate(raw.end_date);
  const validityPeriod = (startDate && endDate) ? `${startDate} – ${endDate}` : (startDate || endDate);

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
            {isValid(mou.status) && (
              <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                mou.status === "Active"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-slate-100 text-slate-700 border border-slate-200"
              }`}>
                {mou.status}
              </span>
            )}
            {isValid(orgType) && (
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {orgType}
              </span>
            )}
            {isValid(mouCategory) && (
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                {mouCategory}
              </span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
            {orgName}
          </h2>
          {mou.title && mou.title !== orgName && (
            <p className="text-primary font-semibold text-xs sm:text-sm mt-1">{mou.title}</p>
          )}
        </div>

        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-4">
          {/* Quick info grid - ONLY if non-empty */}
          {(() => {
            const cards: Array<{ icon: React.ElementType; label: string; value: string }> = [];
            if (isValid(mou.year)) cards.push({ icon: Tag, label: "Year Signed", value: mou.year });
            if (isValid(mou.country)) cards.push({ icon: Globe, label: "Country", value: mou.country });
            if (isValid(validityPeriod)) cards.push({ icon: Calendar, label: "Duration / Validity", value: validityPeriod! });
            if (isValid(raw.department)) cards.push({ icon: Building2, label: "Department", value: String(raw.department) });

            if (cards.length === 0) return null;
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cards.map((c, i) => (
                  <InfoCard key={i} icon={c.icon} label={c.label} value={c.value} />
                ))}
              </div>
            );
          })()}

          {/* Purpose / Scope */}
          {(isValid(mou.purpose) || isValid(raw.scope)) && (
            <div className="pt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-primary" />Purpose & Scope
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/80 whitespace-pre-line">
                {mou.purpose || raw.scope}
              </p>
            </div>
          )}

          {/* Collab Areas */}
          {mou.collabAreas && mou.collabAreas.length > 0 && (
            <div className="pt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-primary" />Key Collaboration Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {mou.collabAreas.map((area, i) => (
                  <span key={i} className="text-xs bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function MouDetailModal({ mou, onClose }: Props) {
  return createPortal(
    <AnimatePresence><ModalContent key={mou.id} mou={mou} onClose={onClose} /></AnimatePresence>,
    document.body
  );
}

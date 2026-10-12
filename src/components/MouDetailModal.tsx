import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Handshake, Globe, Tag, Building2, FileText, CheckCircle2, Clock, Layers } from "lucide-react";
import { useEffect } from "react";
import type { CMSMoU } from "@/hooks/useDeptCMSData";

interface Props { mou: CMSMoU; onClose: () => void; }

const statusColor = (s?: string) =>
  s === "Active" ? "bg-green-100 text-green-700" : s === "Expired" ? "bg-red-100 text-red-600" : "bg-slate-100 text-slate-600";

function InfoRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100">
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div>
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="text-sm font-medium text-secondary mt-0.5">{value}</p>
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

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        className="relative z-10 w-full sm:max-w-2xl max-h-[96vh] sm:max-h-[88vh] flex flex-col bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors" aria-label="Close">
          <X className="w-4 h-4 text-slate-700" />
        </button>

        {/* Hero banner */}
        <div className="bg-gradient-to-br from-sky-600 to-primary px-6 py-8 text-white">
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
            <Handshake className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-xl font-bold leading-snug">{mou.organization}</h2>
          {mou.title && mou.title !== mou.organization && (
            <p className="text-sky-100 text-sm mt-1">{mou.title}</p>
          )}
          <div className="flex flex-wrap gap-2 mt-3">
            {mou.status && <span className={`text-sm font-semibold px-2.5 py-0.5 rounded-full ${statusColor(mou.status)}`}>{mou.status}</span>}
            {mou.year && <span className="text-sm font-semibold px-2.5 py-0.5 rounded-full bg-white/20 text-white">{mou.year}</span>}
          </div>
        </div>

        <div className="overflow-y-auto flex-1 p-5 space-y-5">
          {/* Quick info */}
          <div className="grid grid-cols-2 gap-3">
            {mou.year && <InfoRow icon={Tag} label="Year" value={mou.year} />}
            {mou.country && <InfoRow icon={Globe} label="Country" value={mou.country} />}
            {mou.status && <InfoRow icon={mou.status === "Active" ? CheckCircle2 : Clock} label="Status" value={mou.status} />}
          </div>

          {/* Purpose */}
          {mou.purpose && (
            <div>
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4 text-primary" />Purpose / Scope
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed bg-slate-50 rounded-xl p-4 border border-slate-100">{mou.purpose}</p>
            </div>
          )}

          {/* Collab Areas */}
          {mou.collabAreas && mou.collabAreas.length > 0 && (
            <div>
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2 text-sm">
                <Layers className="w-4 h-4 text-primary" />Collaboration Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {mou.collabAreas.map((area, i) => (
                  <span key={i} className="text-sm bg-primary/5 text-primary border border-primary/15 px-3 py-1 rounded-full font-medium">{area}</span>
                ))}
              </div>
            </div>
          )}

          {/* Department */}
          {(mou as Record<string, unknown>).department && (
            <InfoRow icon={Building2} label="Department" value={String((mou as Record<string, unknown>).department)} />
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

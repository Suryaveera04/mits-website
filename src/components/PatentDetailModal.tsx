import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Users, Calendar, Hash, ExternalLink, BookOpen, Tag } from "lucide-react";
import { useEffect } from "react";
import type { CMSPatent } from "@/hooks/useDeptCMSData";

interface Props { patent: CMSPatent; onClose: () => void; }

const statusStyles: Record<string, { badge: string; grad: string }> = {
  Granted:   { badge: "bg-green-100 text-green-700",  grad: "from-green-600 to-emerald-700" },
  Published: { badge: "bg-blue-100 text-blue-700",    grad: "from-blue-600 to-sky-700" },
  Filed:     { badge: "bg-amber-100 text-amber-700",  grad: "from-amber-500 to-orange-600" },
};

function InfoRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100">
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="text-sm font-medium text-secondary mt-0.5 break-words">{value}</p>
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

  const style = statusStyles[p.status] ?? statusStyles.Filed;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        className="relative z-10 w-full sm:max-w-xl max-h-[96vh] sm:max-h-[88vh] flex flex-col bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors">
          <X className="w-4 h-4 text-slate-700" />
        </button>

        <div className={`bg-gradient-to-br ${style.grad} px-6 py-8 text-white`}>
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
            <FileText className="w-7 h-7 text-white" />
          </div>
          <span className={`text-sm font-bold px-2.5 py-0.5 rounded-full ${style.badge} mb-2 inline-block`}>{p.status}</span>
          <h2 className="text-xl font-bold leading-snug mt-1">{p.title}</h2>
          {p.patent_type && <p className="text-white/70 text-sm mt-1 uppercase tracking-wider">{p.patent_type}</p>}
        </div>

        <div className="overflow-y-auto flex-1 p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {p.year && <InfoRow icon={Calendar} label="Year" value={p.year} />}
            {p.patent_number && <InfoRow icon={Hash} label="Patent No." value={p.patent_number} />}
            {p.application_number && <InfoRow icon={Tag} label="Application No." value={p.application_number} />}
            {p.inventors && <InfoRow icon={Users} label="Inventors" value={p.inventors} />}
          </div>

          {p.abstract && (
            <div>
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-primary" />Abstract
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed bg-slate-50 rounded-xl p-4 border border-slate-100 whitespace-pre-line">{p.abstract}</p>
            </div>
          )}

          {p.external_link && (
            <a href={p.external_link} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-white font-semibold text-sm rounded-xl hover:bg-primary/90 active:scale-95 transition-all shadow-sm">
              <ExternalLink className="w-4 h-4" />View Patent
            </a>
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

import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Calendar, ExternalLink, User, BookOpen } from "lucide-react";
import { useEffect } from "react";
import type { CMSAchievement } from "@/hooks/useDeptCMSData";

interface Props { achievement: CMSAchievement; onClose: () => void; }

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

function ModalContent({ achievement: a, onClose }: Props) {
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

  const isFaculty = a.type === "faculty";
  const gradFrom = isFaculty ? "from-purple-600" : "from-amber-500";
  const gradTo   = isFaculty ? "to-violet-800"  : "to-orange-600";
  const typeBg   = isFaculty ? "bg-purple-100 text-purple-700" : "bg-amber-100 text-amber-700";

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

        <div className={`bg-gradient-to-br ${gradFrom} ${gradTo} px-6 py-8 text-white`}>
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
            <Award className="w-7 h-7 text-white" />
          </div>
          <span className={`text-sm font-bold px-2.5 py-0.5 rounded-full ${typeBg} mb-2 inline-block`}>{a.type}</span>
          <h2 className="text-xl font-bold leading-snug mt-1">{a.title}</h2>
          {a.name && <p className="text-white/80 text-sm mt-1">{a.name}</p>}
        </div>

        <div className="overflow-y-auto flex-1 p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {a.name && <InfoRow icon={User} label="Achiever" value={a.name} />}
            {a.date && <InfoRow icon={Calendar} label="Date" value={a.date} />}
          </div>

          {a.description && (
            <div>
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-primary" />Details
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed bg-slate-50 rounded-xl p-4 border border-slate-100 whitespace-pre-line">{a.description}</p>
            </div>
          )}

          {a.external_link && (
            <a href={a.external_link} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-white font-semibold text-sm rounded-xl hover:bg-primary/90 active:scale-95 transition-all shadow-sm">
              <ExternalLink className="w-4 h-4" />View Achievement
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function AchievementDetailModal({ achievement, onClose }: Props) {
  return createPortal(
    <AnimatePresence><ModalContent key={achievement.id} achievement={achievement} onClose={onClose} /></AnimatePresence>,
    document.body
  );
}

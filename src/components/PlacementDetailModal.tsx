import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Building2, User, Briefcase, Calendar, Users, BookOpen, DollarSign, Hash } from "lucide-react";
import { useEffect } from "react";
import type { CMSPlacement } from "@/hooks/useDeptCMSData";

interface Props { placement: CMSPlacement; onClose: () => void; }

const subtypeStyles: Record<string, { badge: string; grad: string }> = {
  Placement:  { badge: "bg-green-100 text-green-700",  grad: "from-green-600 to-emerald-700" },
  Internship: { badge: "bg-blue-100 text-blue-700",    grad: "from-blue-600 to-sky-700" },
  Training:   { badge: "bg-purple-100 text-purple-700", grad: "from-purple-600 to-violet-700" },
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

  const style = subtypeStyles[p.subtype] ?? subtypeStyles.Placement;
  const isTraining = p.subtype === "Training";
  const headline = isTraining ? (p.programTitle || "Training Programme") : (p.studentName || "Student");
  const subline  = isTraining ? (p.conductedBy || "") : (p.companyName || "");

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
            <Trophy className="w-7 h-7 text-white" />
          </div>
          <span className={`text-sm font-bold px-2.5 py-0.5 rounded-full ${style.badge} mb-2 inline-block`}>{p.subtype}</span>
          <h2 className="text-xl font-bold leading-snug mt-1">{headline}</h2>
          {subline && <p className="text-white/80 text-sm mt-1">{subline}</p>}
          {!isTraining && p.package && (
            <div className="mt-3 inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-xl px-3 py-1.5">
              <DollarSign className="w-4 h-4" />
              <span className="font-bold text-sm">{p.package}</span>
            </div>
          )}
        </div>

        <div className="overflow-y-auto flex-1 p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {!isTraining && p.studentName  && <InfoRow icon={User}      label="Student"       value={p.studentName} />}
            {!isTraining && p.rollNumber   && <InfoRow icon={Hash}      label="Roll No."      value={p.rollNumber} />}
            {!isTraining && p.companyName  && <InfoRow icon={Building2} label="Company"       value={p.companyName} />}
            {!isTraining && p.role         && <InfoRow icon={Briefcase} label="Role"          value={p.role} />}
            {!isTraining && p.package      && <InfoRow icon={DollarSign} label="Package"     value={p.package} />}
            {isTraining  && p.conductedBy  && <InfoRow icon={Building2} label="Conducted By"  value={p.conductedBy} />}
            {isTraining  && p.numberOfStudents != null && (
              <InfoRow icon={Users} label="No. of Students" value={String(p.numberOfStudents)} />
            )}
            {isTraining  && p.startDate    && <InfoRow icon={Calendar}  label="Start Date"   value={p.startDate} />}
            {isTraining  && p.endDate      && <InfoRow icon={Calendar}  label="End Date"     value={p.endDate} />}
            {p.year                        && <InfoRow icon={Calendar}  label="Year"         value={p.year} />}
          </div>

          {p.description && (
            <div>
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-primary" />Description
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed bg-slate-50 rounded-xl p-4 border border-slate-100 whitespace-pre-line">{p.description}</p>
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

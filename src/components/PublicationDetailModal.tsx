import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, Users, Calendar, ExternalLink, Hash, Award, Tag } from "lucide-react";
import { useEffect } from "react";
import type { CMSPublication } from "@/hooks/useDeptCMSData";

interface Props { publication: CMSPublication; onClose: () => void; }

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

function ModalContent({ publication: pub, onClose }: Props) {
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

  const isJournal = pub.type === "journal";

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

        <div className={`bg-gradient-to-br ${isJournal ? "from-slate-700 to-slate-900" : "from-indigo-600 to-violet-700"} px-6 py-8 text-white`}>
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
            <BookOpen className="w-7 h-7 text-white" />
          </div>
          <span className={`text-sm font-bold px-2.5 py-0.5 rounded-full mb-2 inline-block ${isJournal ? "bg-slate-200 text-slate-700" : "bg-indigo-100 text-indigo-700"}`}>
            {isJournal ? "Journal" : "Conference"}
          </span>
          <h2 className="text-lg font-bold leading-snug mt-1">{pub.title}</h2>
          {pub.venue && <p className="text-white/70 text-sm mt-1 italic">{pub.venue}</p>}
        </div>

        <div className="overflow-y-auto flex-1 p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {pub.year && <InfoRow icon={Calendar} label="Year" value={pub.year} />}
            {pub.indexing && <InfoRow icon={Tag} label="Indexing" value={pub.indexing} />}
            {pub.citationCount != null && <InfoRow icon={Award} label="Citations" value={String(pub.citationCount)} />}
          </div>

          {pub.authors && (
            <div>
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-primary" />Authors
              </h3>
              <p className="text-sm text-muted-foreground bg-slate-50 rounded-xl p-4 border border-slate-100">{pub.authors}</p>
            </div>
          )}

          {pub.venue && (
            <div>
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-primary" />{isJournal ? "Journal" : "Conference"}
              </h3>
              <p className="text-sm text-muted-foreground bg-slate-50 rounded-xl p-4 border border-slate-100 italic">{pub.venue}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-1">
            {pub.doi && (
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-semibold text-sm rounded-xl hover:bg-primary/90 active:scale-95 transition-all shadow-sm">
                <Hash className="w-4 h-4" />DOI Link
              </a>
            )}
            {pub.external_link && (
              <a href={pub.external_link} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border-2 border-primary/30 text-primary font-semibold text-sm rounded-xl hover:bg-primary/5 active:scale-95 transition-all">
                <ExternalLink className="w-4 h-4" />View Publication
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function PublicationDetailModal({ publication, onClose }: Props) {
  return createPortal(
    <AnimatePresence><ModalContent key={publication.id} publication={publication} onClose={onClose} /></AnimatePresence>,
    document.body
  );
}

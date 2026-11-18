import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, Users, Calendar, ExternalLink, Hash, Award, Tag, Building, FileText } from "lucide-react";
import { useEffect } from "react";
import type { CMSPublication } from "@/hooks/useDeptCMSData";

interface Props { publication: CMSPublication; onClose: () => void; }

function isValid(v: unknown): boolean {
  if (v == null) return false;
  const s = String(v).trim();
  return s !== "" && s !== "0000-00-00" && s.toLowerCase() !== "null" && s.toLowerCase() !== "n/a";
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

  const raw = pub as Record<string, any>;
  const isJournal = pub.type === "journal";
  const publisher = raw.publisher;
  const issn = raw.issn;
  const abstract = raw.abstract;

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
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {isJournal ? "Peer-Reviewed Journal" : "Conference Paper"}
            </span>
            {isValid(pub.year) && (
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                {pub.year}
              </span>
            )}
            {isValid(pub.indexing) && (
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                {pub.indexing}
              </span>
            )}
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
            {pub.title}
          </h2>
          {isValid(pub.venue) && (
            <p className="text-primary font-semibold text-xs sm:text-sm mt-1.5 italic font-serif">{pub.venue}</p>
          )}
        </div>

        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-4">
          {/* Quick info cards - ONLY non-empty */}
          {(() => {
            const cards: Array<{ icon: React.ElementType; label: string; value: string }> = [];
            if (isValid(pub.year)) cards.push({ icon: Calendar, label: "Publication Year", value: pub.year });
            if (isValid(publisher)) cards.push({ icon: Building, label: "Publisher", value: String(publisher) });
            if (isValid(issn)) cards.push({ icon: Hash, label: "ISSN / ISBN", value: String(issn) });
            if (isValid(pub.indexing)) cards.push({ icon: Tag, label: "Indexing Database", value: pub.indexing });
            if (pub.citationCount != null && Number(pub.citationCount) > 0) {
              cards.push({ icon: Award, label: "Citations", value: String(pub.citationCount) });
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

          {/* Authors */}
          {isValid(pub.authors) && (
            <div className="pt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-primary" />Authors / Investigators
              </h3>
              <p className="text-sm font-medium text-slate-800 bg-slate-50/90 rounded-xl p-3.5 border border-slate-200/80">
                {pub.authors}
              </p>
            </div>
          )}

          {/* Abstract */}
          {isValid(abstract) && (
            <div className="pt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-primary" />Abstract
              </h3>
              <div className="text-slate-700 text-xs sm:text-sm leading-relaxed bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 prose prose-sm max-w-none">
                {abstract}
              </div>
            </div>
          )}

          {/* External Links / DOI */}
          {(isValid(pub.doi) || isValid(pub.external_link)) && (
            <div className="flex flex-wrap gap-2.5 pt-2 border-t border-slate-100">
              {isValid(pub.doi) && (
                <a
                  href={pub.doi!.startsWith("http") ? pub.doi : `https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-bold text-xs rounded-xl shadow-xs hover:bg-primary/90 active:scale-95 transition-all"
                >
                  <Hash className="w-4 h-4" />
                  View via DOI
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                </a>
              )}
              {isValid(pub.external_link) && pub.external_link !== pub.doi && (
                <a
                  href={pub.external_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-300 text-slate-700 font-bold text-xs rounded-xl hover:border-primary hover:text-primary transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Full Article / Journal
                </a>
              )}
            </div>
          )}
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

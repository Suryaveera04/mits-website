import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, FolderOpen, Users, BookOpen, Layers, Github, ExternalLink, Calendar, Tag } from "lucide-react";
import { useEffect } from "react";
import type { CMSProject } from "@/hooks/useDeptCMSData";

interface Props { project: CMSProject; onClose: () => void; }

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

function ModalContent({ project: proj, onClose }: Props) {
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

  const raw = proj as Record<string, any>;
  const team = proj.students || raw.team;
  const description = proj.description || raw.abstract;
  const projectId = raw.projectId;

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
            {isValid(proj.academicYear) && (
              <span className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200">
                AY {proj.academicYear}
              </span>
            )}
            {isValid(raw.type) && (
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {raw.type}
              </span>
            )}
            {isValid(projectId) && (
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                {projectId}
              </span>
            )}
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
            {proj.title}
          </h2>
          {isValid(proj.guide) && (
            <p className="text-primary font-semibold text-xs sm:text-sm mt-1">
              Faculty Guide: <strong className="text-slate-800">{proj.guide}</strong>
            </p>
          )}
        </div>

        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-4">
          {/* Quick info cards - ONLY non-empty */}
          {(() => {
            const cards: Array<{ icon: React.ElementType; label: string; value: string }> = [];
            if (isValid(proj.guide)) cards.push({ icon: BookOpen, label: "Faculty Guide", value: proj.guide! });
            if (isValid(proj.academicYear)) cards.push({ icon: Calendar, label: "Academic Year", value: proj.academicYear! });
            if (isValid(proj.stack)) cards.push({ icon: Layers, label: "Technology Stack", value: proj.stack! });
            if (isValid(raw.department)) cards.push({ icon: Tag, label: "Department", value: String(raw.department) });

            if (cards.length === 0) return null;
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cards.map((c, i) => (
                  <InfoCard key={i} icon={c.icon} label={c.label} value={c.value} />
                ))}
              </div>
            );
          })()}

          {/* Team Members */}
          {isValid(team) && (
            <div className="pt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-primary" />Student Team
              </h3>
              <p className="text-sm font-medium text-slate-800 bg-slate-50/90 rounded-xl p-3.5 border border-slate-200/80">
                {team}
              </p>
            </div>
          )}

          {/* Project Abstract / Description */}
          {isValid(description) && (
            <div className="pt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FolderOpen className="w-4 h-4 text-primary" />Project Abstract / Description
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 whitespace-pre-line">
                {description}
              </p>
            </div>
          )}

          {/* Action Links */}
          {(isValid(proj.github) || isValid(proj.demo)) && (
            <div className="flex flex-wrap gap-2.5 pt-2 border-t border-slate-100">
              {isValid(proj.github) && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl shadow-xs hover:bg-slate-800 active:scale-95 transition-all"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              )}
              {isValid(proj.demo) && (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-bold text-xs rounded-xl shadow-xs hover:bg-primary/90 active:scale-95 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Project Demo
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectDetailModal({ project, onClose }: Props) {
  return createPortal(
    <AnimatePresence><ModalContent key={project.id} project={project} onClose={onClose} /></AnimatePresence>,
    document.body
  );
}

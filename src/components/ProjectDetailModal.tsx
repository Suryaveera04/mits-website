import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, FolderOpen, Users, BookOpen, Layers, Github, ExternalLink, Calendar } from "lucide-react";
import { useEffect } from "react";
import type { CMSProject } from "@/hooks/useDeptCMSData";

interface Props { project: CMSProject; onClose: () => void; }

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

        <div className="bg-gradient-to-br from-orange-500 to-red-600 px-6 py-8 text-white">
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
            <FolderOpen className="w-7 h-7 text-white" />
          </div>
          {proj.academicYear && (
            <span className="text-sm font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 mb-2 inline-block">{proj.academicYear}</span>
          )}
          <h2 className="text-xl font-bold leading-snug mt-1">{proj.title}</h2>
          {proj.guide && <p className="text-white/80 text-sm mt-1">Guide: {proj.guide}</p>}
        </div>

        <div className="overflow-y-auto flex-1 p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {proj.guide        && <InfoRow icon={BookOpen} label="Faculty Guide"  value={proj.guide} />}
            {proj.academicYear && <InfoRow icon={Calendar} label="Academic Year"  value={proj.academicYear} />}
            {proj.stack        && <InfoRow icon={Layers}   label="Tech Stack"     value={proj.stack} />}
          </div>

          {proj.students && (
            <div>
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-primary" />Team Members
              </h3>
              <p className="text-sm text-muted-foreground bg-slate-50 rounded-xl p-4 border border-slate-100">{proj.students}</p>
            </div>
          )}

          {proj.description && (
            <div>
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2 text-sm">
                <FolderOpen className="w-4 h-4 text-primary" />Project Description
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed bg-slate-50 rounded-xl p-4 border border-slate-100 whitespace-pre-line">{proj.description}</p>
            </div>
          )}

          {(proj.github || proj.demo) && (
            <div className="flex flex-wrap gap-3 pt-1">
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 text-white font-semibold text-sm rounded-xl hover:bg-slate-700 active:scale-95 transition-all shadow-sm">
                  <Github className="w-4 h-4" />GitHub
                </a>
              )}
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-semibold text-sm rounded-xl hover:bg-primary/90 active:scale-95 transition-all shadow-sm">
                  <ExternalLink className="w-4 h-4" />Live Demo
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

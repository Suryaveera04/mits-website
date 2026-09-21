import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const AdmissionModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show once per browser session
    const isDismissed = sessionStorage.getItem("mits_admission_modal_dismissed");
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200); // Gentle 1.2s delay after page load
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("mits_admission_modal_dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full z-10 border border-amber-200/50"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 hover:bg-black text-white transition-colors shadow-lg"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Poster / Image */}
            <Link to="/admissions" onClick={handleClose} className="block group">
              <div className="relative overflow-hidden bg-slate-100">
                <img
                  src="https://mits.ac.in/mitsuniversity.jpg"
                  alt="MITS Deemed University Admissions 2026-27"
                  className="w-full h-auto max-h-[75vh] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  onError={(e) => {
                    // Fallback if live image fails
                    (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}Hero-Section/admissions.png`;
                  }}
                />
              </div>
            </Link>

            {/* Action Bar */}
            <div className="p-4 bg-gradient-to-r from-slate-900 to-[#0f2a44] flex items-center justify-between gap-4">
              <div>
                <p className="text-[#ffd15c] font-bold text-sm">Admissions Open 2026-27</p>
                <p className="text-white/70 text-xs">MITS Deemed to be University</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClose}
                  className="px-3 py-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors"
                >
                  Dismiss
                </button>
                <Link
                  to="/admissions"
                  onClick={handleClose}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#b31317] hover:bg-[#8b0000] text-white text-xs font-bold rounded-lg shadow transition-colors"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionModal;

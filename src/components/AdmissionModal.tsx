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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
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
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl max-w-sm sm:max-w-md md:max-w-lg w-full max-h-[92vh] flex flex-col z-10 border border-amber-200/50 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-black/70 hover:bg-black text-white transition-colors shadow-lg cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Poster / Image */}
            <Link to="/admissions" onClick={handleClose} className="block group flex-1 min-h-0 overflow-hidden bg-slate-100 flex items-center justify-center">
              <img
                src="https://mits.ac.in/mitsuniversity.jpg"
                alt="MITS Deemed University Admissions 2027-28"
                className="w-full h-auto max-h-[58vh] sm:max-h-[68vh] md:max-h-[72vh] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                onError={(e) => {
                  // Fallback if live image fails
                  (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}Hero-Section/admissions.png`;
                }}
              />
            </Link>

            {/* Action Bar */}
            <div className="p-3 sm:p-4 bg-gradient-to-r from-slate-900 to-[#0f2a44] flex items-center justify-between gap-3 shrink-0">
              <div className="min-w-0">
                <p className="text-[#ffd15c] font-bold text-xs sm:text-sm truncate">Admissions Open 2027-28</p>
                <p className="text-white/70 text-[10px] sm:text-xs truncate">MITS Deemed to be University</p>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  onClick={handleClose}
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Dismiss
                </button>
                <Link
                  to="/admissions"
                  onClick={handleClose}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 bg-[#b31317] hover:bg-[#8b0000] text-white text-[11px] sm:text-xs font-bold rounded-lg shadow transition-colors"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
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

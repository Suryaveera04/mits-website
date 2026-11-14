import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const AdmissionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    `${import.meta.env.BASE_URL}mitsuniversity.jpg`
  );

  useEffect(() => {
    // Only show once per browser session
    const isDismissed = sessionStorage.getItem("mits_admission_modal_dismissed");
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000); // 1s delay after page load
      return () => clearTimeout(timer);
    }
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("mits_admission_modal_dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop (dims the full viewport including the fixed header) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Card - Responsive and optically centered on all devices */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[430px] md:max-w-[460px] max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3rem)] flex flex-col z-10 border border-slate-200/90 my-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Admissions Open 2027-28"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-black text-white hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white/80"
              aria-label="Close popup"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>

            {/* Poster / Image Container */}
            <Link
              to="/admissions"
              onClick={handleClose}
              className="block group flex-1 min-h-0 overflow-hidden bg-white flex items-center justify-center p-1 sm:p-2 cursor-pointer"
              title="Click to view admissions details"
            >
              <img
                src={imgSrc}
                alt="MITS Deemed University Admissions 2027-28"
                className="w-auto h-auto max-w-full max-h-[min(52vh,360px)] sm:max-h-[min(56vh,400px)] md:max-h-[min(60vh,440px)] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                onError={() => {
                  // Fallback pipeline: local -> remote -> admissions banner
                  if (!imgSrc.startsWith("https://")) {
                    setImgSrc("https://mits.ac.in/mitsuniversity.jpg");
                  } else {
                    setImgSrc(`${import.meta.env.BASE_URL}Hero-Section/admissions.png`);
                  }
                }}
              />
            </Link>

            {/* Action Bar */}
            <div className="px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gradient-to-r from-slate-900 via-[#0f2a44] to-slate-900 flex items-center justify-between gap-3 shrink-0 border-t border-white/10">
              <div className="min-w-0">
                <p className="text-[#ffd15c] font-bold text-xs sm:text-sm tracking-wide truncate">
                  Admissions Open 2027-28
                </p>
                <p className="text-white/70 text-[10px] sm:text-xs truncate">
                  MITS Deemed to be University
                </p>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  onClick={handleClose}
                  className="px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Dismiss
                </button>
                <Link
                  to="/admissions"
                  onClick={handleClose}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#b31317] hover:bg-[#8b0000] text-white text-[11px] sm:text-xs font-bold rounded-lg shadow transition-colors"
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

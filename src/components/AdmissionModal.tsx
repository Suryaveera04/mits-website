import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, ExternalLink, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BASE = import.meta.env.BASE_URL;

export const AdmissionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(`${BASE}mitsuniversity.jpg`);
  const fallbackIndexRef = useRef(0);

  useEffect(() => {
    // Only show once per browser session
    const isDismissed = sessionStorage.getItem("mits_admission_modal_dismissed");
    if (isDismissed) return;

    // Immediately preload image in background
    const preloader = new Image();
    preloader.src = `${BASE}mitsuniversity.jpg`;
    preloader.onload = () => {
      setIsLoaded(true);
    };
    preloader.onerror = () => {
      // Try relative root fallback immediately
      const fb = new Image();
      fb.src = "/mitsuniversity.jpg";
      fb.onload = () => {
        setImgSrc("/mitsuniversity.jpg");
        setIsLoaded(true);
      };
    };

    // Fast opening: 300ms so user is not waiting and it appears smoothly
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 300);

    return () => clearTimeout(timer);
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

  const handleImageError = () => {
    const fallbacks = [
      "/mitsuniversity.jpg",
      `${BASE}Hero-Section/admissions.png`,
      "https://mits.ac.in/mitsuniversity.jpg",
    ];

    if (fallbackIndexRef.current < fallbacks.length) {
      const nextSrc = fallbacks[fallbackIndexRef.current];
      fallbackIndexRef.current += 1;
      setImgSrc(nextSrc);
    }
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

          {/* Modal Card - Responsive and proportioned with aspect-square so it NEVER collapses */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.1 }}
            className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-[360px] xs:max-w-[400px] sm:max-w-[440px] md:max-w-[460px] flex flex-col z-10 border border-slate-200/90 my-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Admissions Open 2027-28"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-black text-white hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white/80"
              aria-label="Close popup"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>

            {/* Poster / Image Container with explicit aspect-square so it NEVER collapses */}
            <Link
              to="/admissions"
              onClick={handleClose}
              className="relative block group w-full aspect-square bg-slate-100 overflow-hidden cursor-pointer"
              title="Click to view admissions details"
            >
              {/* Shimmer skeleton with branding while image loads */}
              {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200/70 to-slate-100 animate-pulse flex flex-col items-center justify-center gap-3 p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#8B1D1D]/10 flex items-center justify-center text-[#8B1D1D]">
                    <Loader2 className="w-6 h-6 animate-spin text-[#8B1D1D]" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">Admissions Open 2027-28</p>
                    <p className="text-xs text-slate-500">MITS Deemed to be University</p>
                  </div>
                </div>
              )}

              <img
                src={imgSrc}
                alt="MITS Deemed University Admissions 2027-28"
                width={450}
                height={450}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                onLoad={() => setIsLoaded(true)}
                onError={handleImageError}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                } group-hover:scale-[1.01]`}
              />
            </Link>

            {/* Action Bar */}
            <div className="px-4 py-3 bg-gradient-to-r from-slate-900 via-[#0f2a44] to-slate-900 flex items-center justify-between gap-3 shrink-0 border-t border-white/10">
              <div className="min-w-0">
                <p className="text-[#ffd15c] font-bold text-xs sm:text-sm tracking-wide truncate">
                  Admissions Open 2027-28
                </p>
                <p className="text-white/70 text-[10px] sm:text-xs truncate">
                  MITS Deemed to be University
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleClose}
                  className="px-2.5 py-1 text-xs font-semibold text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Dismiss
                </button>
                <Link
                  to="/admissions"
                  onClick={handleClose}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#b31317] hover:bg-[#8b0000] text-white text-xs font-bold rounded-lg shadow transition-colors"
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

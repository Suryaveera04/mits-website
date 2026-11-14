import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, Play, Pause } from "lucide-react";
const BASE = import.meta.env.BASE_URL;

interface Slide {
  id: string;
  video?: string;
  image: string;
  overlay?: string;
  eyebrow?: string;
  title?: string;
  tagline?: string;
  buttons?: Array<{ label: string; href: string; style: string; external?: boolean }>;
  align?: string;
}

const slides: Slide[] = [
  {
    id: "campus-welcome",
    image: `${BASE}Hero-Section/banners/college_image_autonomous2.jpg`,
    overlay: "bg-[linear-gradient(90deg,rgba(7,21,37,0.85)_0%,rgba(7,21,37,0.55)_50%,rgba(7,21,37,0.15)_100%)]",
    eyebrow: "Welcome to MITS Madanapalle",
    title: "A Place for Learning, Expression, Discourse & Innovation",
    tagline: "Freedom to explore, experiment, and collaborate — powered by technology.",
    buttons: [
      { label: "Explore Programs", href: "/academics/programs", style: "primary" },
      { label: "Contact Us", href: "/contact", style: "outline" },
    ],
    align: "left",
  },
  {
    id: "placements-2025-2026",
    image: `${BASE}Hero-Section/banners/placement-2025-2026.jpg`,
    buttons: [],
    align: "center",
  },
  {
    id: "cognizant-offers",
    image: `${BASE}Hero-Section/banners/cognizant_offers.jpg`,
    buttons: [],
    align: "center",
  },
  {
    id: "the-rankings-2027",
    image: `${BASE}Hero-Section/banners/times_higher_education_world_university_rankings_2027.jpeg`,
    buttons: [],
    align: "center",
  },
  {
    id: "ui-greenmetric-2026",
    image: `${BASE}Hero-Section/banners/ui_greenmetric_world_university_rankings_2026.jpeg`,
    buttons: [],
    align: "center",
  },
  {
    id: "nirf-ranking",
    image: `${BASE}Hero-Section/banners/nirf-au.jpg`,
    buttons: [],
    align: "center",
  },
  {
    id: "naac-accreditation",
    image: `${BASE}Hero-Section/banners/naac-image.jpg`,
    buttons: [],
    align: "center",
  },
  {
    id: "dataquest-ranking",
    image: `${BASE}Hero-Section/banners/dataquest-2025-26.jpg`,
    buttons: [],
    align: "center",
  },
  {
    id: "career-360-aaaa",
    image: `${BASE}Hero-Section/banners/career_360_aaaa.jpg`,
    buttons: [],
    align: "center",
  },
  {
    id: "campus-recognition",
    image: `${BASE}Hero-Section/banners/d699222bd54fd353d7e8d2f541a6f1c3.jpg`,
    buttons: [],
    align: "center",
  },
  {
    id: "correspondent-message",
    image: `${BASE}Hero-Section/banners/correspodent.jpg`,
    buttons: [],
    align: "center",
  },
  {
    id: "radio-mits",
    image: `${BASE}Hero-Section/banners/radio-mits.jpg`,
    buttons: [],
    align: "center",
  },
  {
    id: "ipfc",
    image: `${BASE}Hero-Section/banners/ipfc.png`,
    buttons: [],
    align: "center",
  },
  {
    id: "alumni",
    image: `${BASE}Hero-Section/banners/alumni-2025-26.jpg`,
    buttons: [],
    align: "center",
  },
  {
    id: "nptel",
    image: `${BASE}Hero-Section/banners/nptel-au.jpg`,
    buttons: [],
    align: "center",
  },
  {
    id: "times-engineering",
    image: `${BASE}Hero-Section/banners/times-au.jpg`,
    buttons: [],
    align: "center",
  },
  {
    id: "campus",
    video: `${BASE}Hero-Section/campuse.mp4`,
    image: `${BASE}Hero-Section/image%206.jpg`,
    overlay: "bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_50%,rgba(0,0,0,0.55)_100%)]",
    eyebrow: "Life at MITS",
    title: "Campus Life",
    tagline: "Vibrant  •  Dynamic  •  Inspiring",
    buttons: [{ label: "Explore Campus", href: "/campus-life", style: "outline" }],
    align: "center",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
  exit:   { opacity: 0, y: -16 },
};

const HeroSection = () => {
  const [current, setCurrent]           = useState(0);
  const [, setDir]                      = useState(1);
  const [isVisible, setIsVisible]       = useState(true);
  const [isPlaying, setIsPlaying]       = useState(true);
  const [isHovered, setIsHovered]       = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const go = useCallback((next: number) => {
    setDir(next > current ? 1 : -1);
    setCurrent(next);
  }, [current]);

  const prev = () => go((current - 1 + slides.length) % slides.length);
  const next = useCallback(() => go((current + 1) % slides.length), [current, go]);

  // Listen to visibilitychange (tab focus/blur)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // IntersectionObserver
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Play/pause video on visibility, play state, or tab visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const currentSlide = slides[current];
    if (!currentSlide.video) return;
    if (isVisible && isPlaying && isTabVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible, current, isPlaying, isTabVisible]);

  // Reset + restart video when slide changes
  useEffect(() => {
    if (slides[current].video) {
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        if (isPlaying && isVisible && isTabVisible) {
          video.play().catch(() => {});
        }
      }
    }
  }, [current, isPlaying, isVisible, isTabVisible]);

  // Slide timer / video-end
  useEffect(() => {
    if (!isPlaying || !isTabVisible) return;
    if (isHovered) return;

    const currentSlide = slides[current];
    if (currentSlide.video) {
      const video = videoRef.current;
      if (!video) return;

      let fallbackTimer: ReturnType<typeof setTimeout> | null = null;
      if (!isVisible) {
        fallbackTimer = setTimeout(() => next(), 15000);
      }

      if (video.ended) {
        next();
        return;
      }

      const onEnded = () => {
        if (isVisible) next();
      };

      video.addEventListener("ended", onEnded);
      return () => {
        if (fallbackTimer) clearTimeout(fallbackTimer);
        video.removeEventListener("ended", onEnded);
      };
    }

    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, current, isVisible, isPlaying, isHovered, isTabVisible]);

  const handleMouseEnter = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const slide = slides[current];
  const contentAlign =
    slide.align === "left"  ? "items-start text-left"  :
    slide.align === "right" ? "items-end   text-right" :
                              "items-center text-center";

  return (
    <section
      ref={sectionRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden hero-section bg-slate-950"
    >
      {/* Backgrounds */}
      {slides.map((s, i) => (
        <motion.div
          key={s.id}
          className="absolute inset-0 bg-slate-950 flex items-center justify-center overflow-hidden"
          style={{ zIndex: i === current ? 1 : 0 }}
          initial={false}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {s.video ? (
            <video
              ref={i === current ? videoRef : undefined}
              autoPlay
              loop={false}
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{
                objectFit: "cover",
                objectPosition: "center center",
                filter: "contrast(1.08) brightness(1.05) saturate(1.1)",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                width: "100%",
                height: "100%",
              }}
              src={s.video}
            />
          ) : (
            <motion.img
              src={s.image}
              alt={s.eyebrow || s.title || s.id}
              className="w-full h-full object-cover"
              style={{
                objectFit: "cover",
                objectPosition: "center center",
              }}
              initial={false}
              animate={{
                scale: s.id === "campus-welcome" ? (i === current ? 1.02 : 1) : 1,
              }}
              transition={{ duration: 6, ease: "easeOut" }}
            />
          )}
          {s.overlay ? (
            <div className={`absolute inset-0 ${s.overlay}`} />
          ) : null}
        </motion.div>
      ))}

      {/* Main content overlays */}
      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">
        <div className={`flex-1 flex flex-col justify-center px-4 sm:px-10 md:px-16 lg:px-24 ${contentAlign}`}>
          {/* ── Campus Life Video Slide Content ── */}
          {slide.id === "campus" && (
            <div className="flex flex-col items-center text-center pointer-events-auto">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="font-body font-semibold text-[#caa74d] tracking-[0.18em] uppercase text-[10px] sm:text-xs md:text-sm mb-1.5 sm:mb-3"
              >
                Life at MITS
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-display font-bold text-white leading-[1.05] mb-1.5 sm:mb-3 md:mb-4"
                style={{ fontSize: "clamp(1.5rem, 5vw, 4.5rem)" }}
              >
                Campus Life
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="font-body text-white/80 text-xs sm:text-base md:text-lg font-light mb-3 tracking-wide"
              >
                Vibrant &bull; Dynamic &bull; Inspiring
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Link to="/campus-life">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white backdrop-blur-sm font-body font-bold px-5 md:px-8 py-1.5 md:py-2.5 rounded-full text-xs md:text-sm transition-all"
                  >
                    Explore Campus
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          )}

          {/* ── Slides with text content (e.g. campus-welcome) ── */}
          {slide.id !== "campus" && Boolean(slide.title) && (
            <AnimatePresence mode="wait">
              <div
                key={current}
                className={`flex flex-col ${contentAlign} max-w-xl md:max-w-2xl pointer-events-auto ${
                  slide.align === "right"
                    ? "ml-auto"
                    : slide.align === "left"
                    ? "mr-auto"
                    : "mx-auto"
                }`}
              >
                {slide.eyebrow && (
                  <motion.p
                    variants={textVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="font-body font-semibold text-[#caa74d] tracking-[0.18em] uppercase text-[10px] sm:text-xs md:text-sm mb-1.5 sm:mb-2"
                  >
                    {slide.eyebrow}
                  </motion.p>
                )}
                {slide.title && (
                  <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="font-display font-bold text-white leading-[1.1] mb-2 sm:mb-3"
                    style={{ fontSize: "clamp(1.15rem, 3.2vw, 2.75rem)" }}
                  >
                    {slide.title}
                  </motion.h1>
                )}
                {slide.tagline && (
                  <motion.p
                    variants={textVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="font-body text-white/90 text-xs sm:text-sm md:text-base font-light mb-3 sm:mb-4 tracking-wide line-clamp-3 sm:line-clamp-none"
                  >
                    {slide.tagline}
                  </motion.p>
                )}
                {slide.buttons && slide.buttons.length > 0 && (
                  <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className={`flex flex-wrap gap-2 sm:gap-3 ${
                      slide.align === "center"
                        ? "justify-center"
                        : slide.align === "right"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {slide.buttons.map((btn) => {
                      const cls =
                        btn.style === "primary"
                          ? "bg-[#b30000] hover:bg-[#d40000] text-white border-2 border-[#b30000] hover:border-[#d40000] shadow-[0_4px_24px_rgba(179,0,0,0.4)]"
                          : "bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white backdrop-blur-sm";
                      const inner = (
                        <motion.button
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          className={`${cls} font-body font-bold px-3 sm:px-5 md:px-7 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm transition-all duration-250`}
                        >
                          {btn.label}
                        </motion.button>
                      );
                      return btn.href.startsWith("http") ? (
                        <a key={btn.label} href={btn.href} target="_blank" rel="noreferrer">
                          {inner}
                        </a>
                      ) : (
                        <Link key={btn.label} to={btn.href}>
                          {inner}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </div>
            </AnimatePresence>
          )}
        </div>

        {/* Bottom controls */}
        <div className="relative z-20 flex items-center justify-between px-3 sm:px-6 md:px-12 pb-2 sm:pb-3 pointer-events-auto">
          <div className="flex items-center gap-2 sm:gap-3 mx-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              className="text-white/70 hover:text-[#caa74d] transition-colors p-1 focus:outline-none"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              ) : (
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              )}
            </button>
            <div className="flex items-center gap-1 sm:gap-1.5 max-w-[70vw] overflow-x-auto no-scrollbar py-1">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full shrink-0 transition-all duration-300 ${
                    i === current
                      ? "w-4 sm:w-6 h-1 sm:h-1.5 bg-[#caa74d]"
                      : "w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
          <a
            href="#about"
            aria-label="Scroll down"
            className="text-white/50 hover:text-[#caa74d] transition-colors hidden md:block"
          >
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-black/40 hover:bg-[#b30000] border border-white/20 hover:border-[#b30000] text-white backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-105"
      >
        <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-black/40 hover:bg-[#b30000] border border-white/20 hover:border-[#b30000] text-white backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-105"
      >
        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      </button>
    </section>
  );
};

export default HeroSection;

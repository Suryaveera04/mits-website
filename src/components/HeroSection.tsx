import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, Play, Pause } from "lucide-react";
const BASE = import.meta.env.BASE_URL;

interface Slide {
  id: string;
  video?: string;
  image: string;
  overlay: string;
  eyebrow: string;
  title: string;
  tagline: string;
  highlight?: string;
  subHighlight?: string;
  leftLogo?: string;
  rightLogo?: string;
  buttons: Array<{ label: string; href: string; style: string; external?: boolean }>;
  align: string;
  showCredentials?: boolean;
}

const slides: Slide[] = [
  {
    id: "identity",
    image: `${BASE}Hero-Section/home%20page%20img1.png`,
    overlay: "",
    eyebrow: "",
    title: "",
    tagline: "",
    highlight: "",
    subHighlight: "",
    leftLogo: "",
    rightLogo: "",
    buttons: [],
    align: "center",
  },
  {
    id: "admissions",
    image: `${BASE}Hero-Section/admissions.png`,
    overlay: "",
    eyebrow: "",
    title: "",
    tagline: "",
    buttons: [],
    align: "right",
  },
  {
    id: "placements",
    image: `${BASE}Hero-Section/placements2.png`,
    overlay: "",
    eyebrow: "",
    title: "",
    tagline: "",
    highlight: "",
    buttons: [],
    align: "right",
  },
  {
    id: "credentials",
    image: `${BASE}Hero-Section/image-5.jpg`,
    overlay: "bg-[linear-gradient(180deg,rgba(7,21,37,0.80)_0%,rgba(7,21,37,0.70)_100%)]",
    eyebrow: "Excellence Since 1998",
    title: "Legacy of Achievements",
    tagline: "Shaping Tomorrow's Leaders Today",
    buttons: [],
    align: "center",
    showCredentials: true,
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

const credentials = [
  { label: "NAAC A+",            gold: true  },
  { label: "UGC Recognized",     gold: false },
  { label: "NIRF 201–300",       gold: true  },
  { label: "4,401+ Scholarships", gold: false },
  { label: "9,599+ Internships", gold: true  },
  { label: "600+ International",  gold: false },
  { label: "46,923+ Online Certifications", gold: true  },
];

const textVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
  exit:   { opacity: 0, y: -16 },
};

const HeroSection = () => {
  const [current, setCurrent]           = useState(0);
  const [dir,     setDir]               = useState(1);
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

  // Play/pause video on visibility, play state, or tab visibility (ignores hover so video plays continuously)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const currentSlide = slides[current];
    if (!currentSlide.video) return;
    if (isVisible && isPlaying && isTabVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
      // Move to next slide when user scrolls down (only if autoplay active)
      if (!isVisible && isPlaying && isTabVisible) {
        next();
      }
    }
  }, [isVisible, current, isPlaying, isTabVisible, next]);

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

  // Slide timer / video-end (13 seconds)
  useEffect(() => {
    if (!isPlaying || !isTabVisible) return;

    // Pause slide transition if hovered
    if (isHovered) return;

    const currentSlide = slides[current];
    if (currentSlide.video) {
      const video = videoRef.current;
      if (!video) return;
      
      let fallbackTimer: ReturnType<typeof setTimeout> | null = null;
      if (!isVisible) {
        fallbackTimer = setTimeout(() => next(), 13000);
      }
      
      // If the video ended while hovered, transition immediately upon mouse leave
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

    const t = setInterval(next, 13000);
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
      className="relative w-full overflow-hidden hero-section"
    >
      {/* Backgrounds */}
      {slides.map((s, i) => (
        <motion.div
          key={s.id}
          className="absolute inset-0"
          style={{ zIndex: i === current ? 1 : 0 }}
          initial={false}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          {s.video ? (
            <video
              ref={i === current ? videoRef : undefined}
              autoPlay loop={false} muted playsInline
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
              src={s.image} alt={s.id}
              className="w-full h-full"
              style={{
                objectFit: "cover",
                objectPosition: s.id === "identity" ? "center 18%" : s.id === "admissions" ? "center 30%" : s.id === "placements" ? "center 20%" : "center center",
              }}
              initial={false}
              animate={{ scale: (s.id === "admissions" || s.id === "placements" || s.id === "identity") ? 1 : (i === current ? 1.04 : 1) }}
              transition={{ duration: 7, ease: "easeOut" }}
            />
          )}
          {s.overlay ? (
            <div className={`absolute inset-0 ${s.overlay}`} />
          ) : null}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="absolute inset-0 z-10 flex flex-col overflow-hidden">
        <div className={`flex-1 flex flex-col justify-center ${
          slide.id === "admissions" || slide.id === "placements"
            ? "px-2 sm:px-4"
            : "px-3 sm:px-8 md:px-16 lg:px-24"
        } ${contentAlign}`}>

          {/* ── Campus slide: all stacked together, title animates out ── */}
          {slide.id === "campus" && (
            <div className="flex flex-col items-center text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="font-body font-semibold text-[#caa74d] tracking-[0.18em] uppercase text-[10px] sm:text-sm md:text-sm mb-2 sm:mb-3"
              >
                Life at MITS
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-display font-bold text-white leading-[1.05] mb-2 sm:mb-3 md:mb-4"
                style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}
              >
                Campus Life
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="font-body text-white/80 text-sm sm:text-base md:text-xl font-light mb-3 tracking-wide"
              >
                Vibrant  •  Dynamic  •  Inspiring
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Link to="/campus-life">
                  <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                    className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white backdrop-blur-sm font-body font-bold px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base transition-all">
                    Explore Campus
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          )}

          {/* ── Non-campus slides ── */}
          {slide.id !== "campus" && slide.id !== "identity" && (
            <AnimatePresence mode="wait">
              <div
                key={current}
                className={`flex flex-col ${contentAlign} ${
                  slide.id === "admissions"
                    ? "absolute right-4 sm:right-16 md:right-32 top-1/2 sm:top-3/4 -translate-y-1/2 sm:-translate-y-[calc(50%+10px)] w-[85%] sm:w-[45%] md:w-[38%] pr-2 sm:pr-6 md:pr-10 text-right items-end"
                    : slide.id === "placements"
                    ? "absolute right-4 sm:right-16 md:right-32 top-1/2 sm:top-3/4 -translate-y-1/2 sm:-translate-y-[calc(50%+60px)] w-[85%] sm:w-[45%] md:w-[38%] pr-2 sm:pr-6 md:pr-10 text-right items-end"
                    : slide.id === "identity"
                    ? "absolute bottom-4 sm:bottom-10 md:bottom-40 left-1/2 -translate-x-1/2 w-full px-3 sm:px-4"
                    : slide.align === "right" 
                    ? "max-w-xl md:max-w-2xl ml-auto"
                    : slide.align === "left"  
                    ? "max-w-xl md:max-w-2xl"
                    : "max-w-xl md:max-w-2xl mx-auto"
                }`}
              >
                <motion.p variants={textVariants} initial="hidden" animate="show" exit="exit" transition={{ duration: 0.3 }}
                  className="font-body font-semibold text-[#caa74d] tracking-[0.18em] uppercase text-[10px] sm:text-sm md:text-sm mb-2 sm:mb-3 md:mb-4">
                  {slide.eyebrow}
                </motion.p>
                <motion.h1 variants={textVariants} initial="hidden" animate="show" exit="exit" transition={{ duration: 0.3 }}
                  className={`font-display font-bold text-white leading-[1.05] ${slide.id === "placements" ? "mb-1 sm:mb-2" : "mb-2 sm:mb-3 md:mb-4"}`}
                  style={{ fontSize: slide.id === "placements" ? "clamp(2.2rem, 5.5vw, 5rem)" : "clamp(2rem, 6vw, 5.5rem)" }}>
                  {slide.title}
                </motion.h1>
                <motion.p variants={textVariants} initial="hidden" animate="show" exit="exit" transition={{ duration: 0.3 }}
                  className="font-body text-white/80 text-sm sm:text-base md:text-xl font-light mb-2 sm:mb-3 tracking-wide">
                  {slide.tagline}
                </motion.p>
                {"highlight" in slide && slide.highlight && (
                  <motion.p variants={textVariants} initial="hidden" animate="show" exit="exit" transition={{ duration: 0.3 }}
                    className="font-body text-[#caa74d] text-sm sm:text-base md:text-xl font-bold tracking-wider mx-auto text-center">
                    {slide.highlight}
                  </motion.p>
                )}
                {"subHighlight" in slide && slide.subHighlight && (
                  <motion.p variants={textVariants} initial="hidden" animate="show" exit="exit" transition={{ duration: 0.3 }}
                    className="font-body text-white/80 text-sm sm:text-sm md:text-base font-medium tracking-wider mt-2 mb-3 sm:mb-4 text-center">
                    {slide.subHighlight}
                  </motion.p>
                )}
                {slide.buttons.length > 0 && (
                  <motion.div variants={textVariants} initial="hidden" animate="show" exit="exit" transition={{ duration: 0.3 }}
                    className={`flex flex-wrap gap-2 sm:gap-3 ${slide.id === "identity" ? "mt-2 sm:mt-3" : "mt-3 sm:mt-4 md:mt-6"} ${slide.align === "center" ? "justify-center" : slide.align === "right" ? "justify-end" : "justify-start"}`}>
                    {slide.buttons.map((btn) => {
                      const isAdmissions = slide.id === "admissions";
                      const cls = btn.style === "primary"
                        ? isAdmissions
                          ? "bg-[#caa74d] hover:bg-[#ddb85e] text-white border-2 border-[#caa74d] hover:border-[#ddb85e] shadow-[0_4px_24px_rgba(202,167,77,0.4)]"
                          : "bg-[#b30000] hover:bg-[#d40000] text-white border-2 border-[#b30000] hover:border-[#d40000] shadow-[0_4px_24px_rgba(179,0,0,0.4)]"
                        : "bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white backdrop-blur-sm";
                      const inner = (
                        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                          className={`${cls} font-body font-bold px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-full text-[10px] sm:text-sm md:text-sm lg:text-base transition-all duration-250`}>
                          {btn.label}
                        </motion.button>
                      );
                      return btn.external
                        ? <a key={btn.label} href={btn.href} target="_blank" rel="noreferrer">{inner}</a>
                        : btn.href.startsWith("#")
                          ? <a key={btn.label} href={btn.href}>{inner}</a>
                          : <Link key={btn.label} to={btn.href}>{inner}</Link>;
                    })}
                  </motion.div>
                )}
              </div>
            </AnimatePresence>
          )}

{/* Logos for identity slide - hidden */}
           {/* {false && slide.id === "identity" && (...) */}
           </div>

        {/* Credential bar */}
        <AnimatePresence>
          {slide.showCredentials && (
            <motion.div key="cred-bar"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mx-2 sm:mx-6 md:mx-16 mb-4 sm:mb-8 md:mb-14">
              <div className="rounded-xl border border-white/15 px-2 sm:px-4 md:px-6 py-2 sm:py-3 flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 md:gap-x-6 gap-y-1 sm:gap-y-2 overflow-x-auto"
                style={{ background: "rgba(7,21,37,0.65)", backdropFilter: "blur(14px)" }}>
                {credentials.map((c, i) => (
                  <div key={c.label} className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                    <span className={`font-body font-bold text-[9px] sm:text-sm md:text-sm whitespace-nowrap ${c.gold ? "text-[#caa74d]" : "text-white"}`}>
                      {c.label}
                    </span>
                    {i < credentials.length - 1 && <span className="w-px h-3 bg-white/20 shrink-0" />}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom controls */}
        <div className="relative z-20 flex items-center justify-between px-3 sm:px-6 md:px-16 pb-3 sm:pb-4 md:pb-6">
          <div className="flex items-center gap-3.5 mx-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              className="text-white/60 hover:text-[#caa74d] transition-colors p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#caa74d]"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {slides.map((_, i) => (
                <button key={i} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-400 ${
                    i === current ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-[#caa74d]" : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/35 hover:bg-white/60"
                  }`} />
              ))}
            </div>
          </div>
          <a href="#about" aria-label="Scroll down" className="text-white/50 hover:text-[#caa74d] transition-colors hidden md:block">
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button onClick={prev} aria-label="Previous slide"
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-[#b30000] border border-white/20 hover:border-[#b30000] text-white backdrop-blur-sm flex items-center justify-center transition-all duration-250 hover:scale-110">
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button onClick={next} aria-label="Next slide"
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-[#b30000] border border-white/20 hover:border-[#b30000] text-white backdrop-blur-sm flex items-center justify-center transition-all duration-250 hover:scale-110">
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </section>
  );
};

export default HeroSection;



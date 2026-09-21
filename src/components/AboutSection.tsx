import { Target, Eye, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PanInfo } from "framer-motion";
const BASE = import.meta.env.BASE_URL;
import ScrollReveal from "@/components/ScrollReveal";

const SLIDE_INTERVAL = 4800;

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "108%" : "-108%",
    rotateY: dir > 0 ? 22 : -22,
    scale: 0.88,
    opacity: 0.35,
  }),
  center: {
    x: 0,
    rotateY: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.95, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] },
  },
  exit: (dir: number) => ({
    x: dir < 0 ? "108%" : "-108%",
    rotateY: dir < 0 ? 22 : -22,
    scale: 0.88,
    opacity: 0,
    transition: { duration: 0.72, ease: [0.55, 0, 1, 0.45] as [number, number, number, number] },
  }),
};

const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

const AboutSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const campusImages = [
    `${BASE}Hero-Section/image%201.JPG`,
    `${BASE}Hero-Section/image%202.JPG`,
    `${BASE}Hero-Section/image%203.JPG`,
    `${BASE}Hero-Section/image%204.JPG`,
    `${BASE}Hero-Section/image%205.JPG`,
  ];

  const total = campusImages.length;
  const activeIndex = ((page % total) + total) % total;

  const paginate = useCallback((newDir: number) => {
    setPage(([p]) => [p + newDir, newDir]);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => paginate(1), SLIDE_INTERVAL);
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, [isPaused, paginate]);

  const handleDragEnd = (_: PointerEvent, info: PanInfo) => {
    const power = swipePower(info.offset.x, info.velocity.x);
    if (power < -7000) paginate(1);
    else if (power > 7000) paginate(-1);
  };

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <p className="text-[#b30000] font-body font-semibold tracking-[0.18em] uppercase text-sm md:text-sm mb-3">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
              Shaping Futures Since 1998
            </h2>
            <p className="font-body text-[#1a1a1a] text-base md:text-lg mb-8 leading-[1.8] max-w-prose">
              Madanapalle Institute of Technology & Science (MITS), now MITS - Deemed to be University,
              was established in 1998 and has grown into a leading center for engineering, sciences, and
              management education. With NAAC A+ accreditation and NBA-recognized programs, MITS advances
              academic excellence, research relevance, and community impact.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                  <Target className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#0f172a] text-lg mb-1 group-hover:text-[#b30000] transition-colors">Our Mission</h3>
                  <p className="font-body text-[#1a1a1a] text-sm md:text-base leading-relaxed group-hover:text-[#0f172a] transition-colors">To serve region, nation, and world through academic excellence, research relevance, and community engagement.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-md bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                  <Eye className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#0f172a] text-lg mb-1 group-hover:text-[#b30000] transition-colors">Our Vision</h3>
                  <p className="font-body text-[#1a1a1a] text-sm md:text-base leading-relaxed group-hover:text-[#0f172a] transition-colors">To be a globally respected institution known for innovation, ethics, and future-ready education.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-all duration-300">
                  <Award className="w-6 h-6 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#0f172a] text-lg mb-1 group-hover:text-[#b30000] transition-colors">NAAC A+ Accredited</h3>
                  <p className="font-body text-[#1a1a1a] text-sm md:text-base leading-relaxed group-hover:text-[#0f172a] transition-colors">Recognized for academic excellence and quality standards by the National Assessment and Accreditation Council.</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6">
                  Read More
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* -- RIGHT SIDE: 3D CAROUSEL -- */}
          <ScrollReveal direction="right" delay={0.2}>
            <div
              className="relative pt-6 pl-6"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* 28+ badge  -  pinned top-left, always on top */}
              <div className="absolute top-0 left-0 bg-primary rounded-md px-5 py-4 shadow-xl hidden md:block z-10 transition-all duration-300 hover:-translate-y-1 hover:bg-accent group/badge">
                <p className="text-accent font-display text-3xl font-bold leading-none group-hover/badge:text-accent-foreground">28+</p>
                <p className="text-primary-foreground/80 text-sm mt-1 group-hover/badge:text-accent-foreground/80">Years of Academic Excellence</p>
              </div>

              {/* Carousel viewport */}
              <div
                className="relative h-[440px] md:h-[500px] w-full overflow-hidden rounded-xl border border-primary/15 bg-black shadow-[0_22px_60px_-18px_rgba(10,22,55,0.6)] transition-shadow duration-500 hover:shadow-[0_32px_80px_-20px_rgba(10,22,55,0.75)]"
                style={{ perspective: "1300px" }}
              >
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.08}
                    onDragEnd={handleDragEnd}
                    className="absolute inset-0 cursor-grab active:cursor-grabbing select-none"
                    style={{ transformStyle: "preserve-3d", willChange: "transform, opacity" }}
                  >
                    <motion.img
                      src={campusImages[activeIndex]}
                      alt={`MITS Campus View ${activeIndex + 1}`}
                      className="h-full w-full object-cover pointer-events-none"
                      draggable={false}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5 }}
                    />
                    {/* gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
                  </motion.div>
                </AnimatePresence>

                {/* Left arrow  -  desktop only */}
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => paginate(-1)}
                  className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 items-center justify-center rounded-full bg-black/45 backdrop-blur-sm border border-white/20 text-white hover:bg-primary transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right arrow  -  desktop only */}
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => paginate(1)}
                  className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 items-center justify-center rounded-full bg-black/45 backdrop-blur-sm border border-white/20 text-white hover:bg-primary transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dot pagination */}
                <div className="absolute bottom-3 left-0 right-0 z-30 flex justify-center gap-1.5">
                  {campusImages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Go to image ${i + 1}`}
                      onClick={() => setPage([i, i > activeIndex ? 1 : -1])}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-6 bg-white"
                          : "w-1.5 bg-white/45 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


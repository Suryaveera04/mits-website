import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Globe, Users, GraduationCap, Award, Plane, Sparkles, Calendar,
  BookOpen, FileText, Download, ExternalLink, MapPin, Phone, Mail,
  Building2, ChevronLeft, ChevronRight, Home, ArrowRight, Landmark, Star, CheckCircle2,
  Search, X,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn, slugify } from "@/lib/utils";
import {
  aboutIR, aboutGallery, contactCard, partners, partnerImages, type Partner,
  internships, fellowships, globalPrograms,
  events, workshops, heroBanner, heroStats,
  internshipGallery, fellowshipGallery, globalGallery, eventGallery,
  workshopGallery, stanfordGallery, heroBanners,
} from "@/data/internationalRelations";

type Section =
  | "about" | "mou" | "internships" | "fellowships"
  | "global" | "events" | "workshops" | "stanford";

const NAV: { id: Section; label: string; icon: LucideIcon }[] = [
  { id: "about",       label: "About",             icon: Globe },
  { id: "mou",         label: "MoUs",              icon: Landmark },
  { id: "internships", label: "Internships & Exchange", icon: Plane },
  { id: "fellowships", label: "Fellowships",       icon: Award },
  { id: "global",      label: "Global Immersion",  icon: Sparkles },
  { id: "events",      label: "Events",            icon: Calendar },
  { id: "workshops",   label: "Workshops",         icon: BookOpen },
  { id: "stanford",    label: "Stanford Initiative", icon: Star },
];

/** Full-bleed page container — used everywhere instead of the old narrow max-w-7xl wrapper. */
const WIDE = "w-full max-w-[1900px] mx-auto px-3 sm:px-6 lg:px-10 xl:px-16";

/**
 * Each tab gets its own accent so the section doesn't read as one flat navy/gold block —
 * distinct from MITS' own site-wide red/white identity, and distinct tab-to-tab.
 */
const TAB_THEME: Record<Section, { solid: string; soft: string; text: string; ring: string; glow: string }> = {
  about:       { solid: "bg-[#0f2a44]", soft: "bg-[#0f2a44]/10", text: "text-[#0f2a44]", ring: "ring-[#0f2a44]/30", glow: "shadow-[0_8px_30px_-6px_rgba(15,42,68,0.55)]" },
  mou:         { solid: "bg-[#caa74d]", soft: "bg-[#caa74d]/15", text: "text-[#8a6d1f]", ring: "ring-[#caa74d]/40", glow: "shadow-[0_8px_30px_-6px_rgba(202,167,77,0.55)]" },
  internships: { solid: "bg-teal-600",  soft: "bg-teal-50",      text: "text-teal-700",  ring: "ring-teal-400/40", glow: "shadow-[0_8px_30px_-6px_rgba(13,148,136,0.5)]" },
  fellowships: { solid: "bg-violet-600",soft: "bg-violet-50",    text: "text-violet-700",ring: "ring-violet-400/40", glow: "shadow-[0_8px_30px_-6px_rgba(124,58,237,0.5)]" },
  global:      { solid: "bg-sky-600",   soft: "bg-sky-50",       text: "text-sky-700",   ring: "ring-sky-400/40", glow: "shadow-[0_8px_30px_-6px_rgba(2,132,199,0.5)]" },
  events:      { solid: "bg-orange-600",soft: "bg-orange-50",    text: "text-orange-700",ring: "ring-orange-400/40", glow: "shadow-[0_8px_30px_-6px_rgba(234,88,12,0.5)]" },
  workshops:   { solid: "bg-emerald-600",soft: "bg-emerald-50",  text: "text-emerald-700",ring: "ring-emerald-400/40", glow: "shadow-[0_8px_30px_-6px_rgba(5,150,105,0.5)]" },
  stanford:    { solid: "bg-[#8C1515]", soft: "bg-[#8C1515]/10", text: "text-[#8C1515]", ring: "ring-[#8C1515]/40", glow: "shadow-[0_8px_30px_-6px_rgba(140,21,21,0.55)]" },
};

export const regionColors: Record<string, string> = {
  US: "bg-blue-100 text-blue-800",
  Europe: "bg-emerald-100 text-emerald-800",
  Japan: "bg-rose-100 text-rose-800",
  Taiwan: "bg-amber-100 text-amber-800",
  "South Korea": "bg-indigo-100 text-indigo-800",
  Singapore: "bg-teal-100 text-teal-800",
  "Middle East": "bg-orange-100 text-orange-800",
  Other: "bg-slate-100 text-slate-700",
};

/* ---------- shared UI helpers ---------- */

/** Crossfades through the real IRO delegation/campus photos already defined in heroBanners. */
const HeroBackdrop = ({ images }: { images: string[] }) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => setIdx((p) => (p + 1) % images.length), 6000);
    return () => clearInterval(timer);
  }, [images?.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="absolute inset-0 opacity-30">
      <AnimatePresence mode="sync">
        <motion.img
          key={images[idx]}
          src={images[idx]}
          alt="MITS International Relations delegations and partnerships"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

/** Counts up to the numeric portion of a stat value (e.g. "20+", "300+") once it scrolls into view. */
const AnimatedStat = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1100;
    const stepMs = 16;
    const steps = Math.max(1, Math.round(duration / stepMs));
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step += 1;
      current += increment;
      if (step >= steps) {
        setDisplay(target);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current));
      }
    }, stepMs);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-[#0f2a44]" style={{ fontFamily: "var(--font-display)" }}>
        {display}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="relative mb-8 md:mb-10">
    <div className="absolute -left-3 top-1 h-10 w-1 rounded-full bg-gradient-to-b from-[#caa74d] to-sky-500" />
    <h2 className="text-3xl md:text-5xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
      {title}
    </h2>
    {subtitle && <p className="text-muted-foreground mt-3 max-w-4xl">{subtitle}</p>}
    <div className="h-1.5 w-24 bg-gradient-to-r from-[#0f2a44] via-[#caa74d] to-sky-400 rounded-full mt-5" />
  </div>
);

/** Shared leadership content: shown with the office contact details, not instead of them. */
const IROLeadership = ({ tone = "light" }: { tone?: "light" | "dark" }) => {
  const dark = tone === "dark";

  return (
    <div className={cn("border-t pt-4", dark ? "border-white/15" : "border-slate-200") }>
      <div className={cn("flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.13em]", dark ? "text-[#e8c97a]" : "text-[#0f2a44]")}>
        <Users className="h-4 w-4" /> International Relations Office (IRO) Leadership
      </div>
      <p className={cn("mt-2.5 text-sm leading-relaxed", dark ? "text-white/90" : "text-slate-700")}>
        {aboutIR.office}
      </p>
      <div className="mt-4 flex flex-col gap-2">
        {contactCard.team.map((member) => (
          <div key={member.name} className={cn("flex items-start gap-3 rounded-xl border p-3", dark ? "border-white/15 bg-white/5" : "border-slate-200 bg-slate-50/80")}>
            <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold mt-0.5", dark ? "bg-[#e8c97a] text-[#0f2a44]" : "bg-[#0f2a44] text-[#e8c97a]")}>
              {member.initials}
            </span>
            <div className="min-w-0 flex-1">
              <div className={cn("text-sm font-bold leading-tight break-words", dark ? "text-white" : "text-[#0f2a44]")}>{member.name}</div>
              <div className={cn("mt-0.5 text-sm leading-snug break-words", dark ? "text-white/75" : "text-slate-600")}>{member.designation}</div>
              {member.email && <a href={`mailto:${member.email}`} className={cn("mt-1 inline-flex items-center gap-1 text-sm font-semibold hover:underline break-all", dark ? "text-[#e8c97a]" : "text-primary")}><Mail className="h-3 w-3 shrink-0" />{member.email}</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      <div className="ir-media-deck relative w-full min-h-[280px] md:min-h-[440px] lg:min-h-[540px] overflow-hidden rounded-[1.75rem] border border-white/50 bg-[#092239] group mb-10">
        {/* Blurred backdrop fill (same image, scaled + blurred) — prevents empty bars while keeping subject intact */}
        <div
          className="absolute inset-0 bg-center bg-cover scale-110 blur-2xl opacity-45"
          style={{ backgroundImage: `url("${images[currentIndex]}")` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#061624]/70 via-transparent to-[#caa74d]/20" />
        <div className="ir-grid-surface absolute inset-0 opacity-50" aria-hidden />
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="International Relations"
            initial={{ opacity: 0, scale: 1.075, rotate: -0.25 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain p-2 md:p-3 cursor-zoom-in"
            onClick={() => setLightbox(images[currentIndex])}
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
        </AnimatePresence>

        {/* Bottom visual control rail */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#061624]/85 to-transparent pointer-events-none" />
        <div className="absolute left-4 md:left-6 bottom-4 md:bottom-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#061624]/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-[#e8c97a]" /> Visual journal
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-secondary shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-secondary shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Indicator Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-white w-5" : "bg-white/50 w-1.5"
                }`}
              />
            ))}
          </div>
        )}
      </div>


      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <img src={lightbox} className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const GalleryGrid = ({ images }: { images: string[] }) => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightbox(src)}
            className="group relative aspect-video overflow-hidden rounded-xl bg-secondary/90"
          >
            <div
              className="absolute inset-0 bg-center bg-cover scale-110 blur-xl opacity-40"
              style={{ backgroundImage: `url("${src}")` }}
              aria-hidden
            />
            <img
              src={src}
              alt=""
              loading="lazy"
              className="relative w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <img src={lightbox} className="max-h-[92vh] max-w-[92vw] object-contain rounded-lg" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ---------- Section renderers ---------- */

const AboutSection = () => (
  <div className="space-y-12">
    <SectionTitle
      title={aboutIR.title}
      subtitle={aboutIR.tagline}
    />
    <ImageCarousel images={aboutGallery} />

    {/* Partner logo marquee — directly under images */}
    <div className="relative overflow-hidden rounded-5xl border border-border bg-white py-5">
      <p className="text-center text-[14px] font-bold uppercase tracking-widest text-muted-foreground mb-5">
        In Partnership With Universities Worldwide
      </p>
      <div className="recruiter-marquee-track">
        {[...partners, ...partners].map((p, i) => {
          const BASE = import.meta.env.BASE_URL;
          const local = localLogos[p.name];
          return (
            <div key={`${p.name}-${i}`} className="recruiter-logo-card" aria-hidden={i >= partners.length}>
              {local ? (
                <img src={`${BASE}${local}`} alt={p.name} className="h-16 w-auto object-contain" loading="lazy" />
              ) : (
                <span className="text-sm font-bold text-secondary text-center px-2">{p.name}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>

    {/* Intro Overview Grid — Contact now sits top-right, beside "A Global Academic Community" */}
    <div className="grid lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3 space-y-4 text-[15px] leading-relaxed text-secondary/90 bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm">
        <h3 className="font-bold text-secondary text-xl mb-3" style={{ fontFamily: "var(--font-display)" }}>
          A Global Academic Community
        </h3>
        {aboutIR.intro.map((p, i) => (
          <p key={i} className="text-sm">{p}</p>
        ))}
        {/* The goal and mission complete the academic-community story, with no unused space below it. */}
        <div className="grid gap-4 border-t border-slate-200 pt-5 xl:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            whileHover={{ rotateX: 3, rotateY: 3, y: -2 }}
            style={{ transformStyle: "preserve-3d" }}
            className="rounded-2xl bg-gradient-to-br from-[#0f2a44] to-[#11355a] p-5 text-white shadow-md"
          >
            <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#caa74d]">
              <Sparkles className="h-4 w-4" /> Strategic Goal
            </div>
            <p className="text-sm font-medium leading-relaxed text-white/90">{aboutIR.goal}</p>
          </motion.div>
          <motion.div
            whileHover={{ rotateX: 3, rotateY: -3, y: -2 }}
            style={{ transformStyle: "preserve-3d" }}
            className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm"
          >
            <div className="mb-3 flex items-center gap-2 font-bold text-[16px]">
              <Award className="h-5 w-5 text-primary" /> Key Mission
            </div>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {aboutIR.mission.map((m, i) => (
                <li key={i} className="flex gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="lg:col-span-2 space-y-4">
        {/* Contact — moved to the top for this landing tab, per the dean's brief */}
        <motion.div
          whileHover={{ rotateX: 4, rotateY: -4, y: -3 }}
          style={{ transformStyle: "preserve-3d" }}
          className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl p-6 shadow-xl space-y-3"
        >
          <div className="flex items-center gap-2 text-[#0f2a44] font-bold text-sm uppercase tracking-widest">
            <Building2 className="w-4 h-4" /> Contact the IRO
          </div>
          <div className="space-y-2 text-sm text-slate-700">
            <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />{contactCard.address}</div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary shrink-0" />{contactCard.timings}</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${contactCard.phone}`} className="hover:underline">{contactCard.phone}</a></div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary shrink-0" /><a href={`mailto:${contactCard.email}`} className="hover:underline">{contactCard.email}</a></div>
          </div>
          <IROLeadership />
          <div className="flex flex-wrap gap-2 pt-1">
            <a href={`mailto:${contactCard.email}`}><Button size="sm" className="gap-1.5"><Mail className="w-3.5 h-3.5" />Email</Button></a>
            <a href={contactCard.mapsUrl} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="outline" className="gap-1.5"><MapPin className="w-3.5 h-3.5" />Directions</Button></a>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Functions of IRO & Central Hub */}
    <div className="bg-white rounded-3xl border border-border shadow-sm p-8 md:p-10">
      <span className="text-sm font-bold uppercase tracking-widest text-[#0f2a44] bg-[#0f2a44]/8 px-3.5 py-1 rounded-full border border-[#0f2a44]/20">
        Multicultural Ecosystem
      </span>
      <div className="mt-6 grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left — title + description */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0f2a44]" style={{ fontFamily: "var(--font-display)" }}>
            {aboutIR.functionsTitle}
          </h3>
          <p className="text-base text-slate-600 leading-loose">
            {aboutIR.functionsDesc}
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-[#0f2a44] via-[#caa74d] to-sky-400 rounded-full" />
        </div>
        {/* Right — bullet objectives */}
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-wider text-[#caa74d] mb-1">Central Hub for Global Engagement Objectives</p>
          {aboutIR.centralHubObjectives.map((obj, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5 hover:border-[#caa74d]/50 hover:bg-[#caa74d]/5 transition-all group">
              <CheckCircle2 className="w-4 h-4 text-[#caa74d] shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 font-medium leading-snug group-hover:text-[#0f2a44]">{obj}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Key Benefits for Students */}
    <div className="bg-white p-8 rounded-3xl border border-border shadow-sm space-y-6">
      <div className="flex items-center gap-3 border-b border-border pb-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-secondary text-xl" style={{ fontFamily: "var(--font-display)" }}>
            Key Benefits for Students
          </h3>
          <p className="text-sm text-muted-foreground">Transformative opportunities gained through MITS International Exposure</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {aboutIR.studentBenefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
            className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-[#caa74d] hover:shadow-md transition-all group"
          >
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
              ✓
            </span>
            <p className="text-sm text-slate-700 font-medium leading-relaxed group-hover:text-secondary">
              {b}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Stanford Milestone & Long Term Objectives */}
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Journey Milestone */}
      <div className="rounded-3xl border border-border bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-white p-8 shadow-sm space-y-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-amber-700 font-bold text-sm uppercase tracking-widest mb-2">
            <Star className="w-4 h-4 text-amber-600" /> Milestone Achievement
          </div>
          <h3 className="font-bold text-secondary text-2xl mb-3" style={{ fontFamily: "var(--font-display)" }}>
            {aboutIR.journey.title}
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            {aboutIR.journey.text}
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-amber-200 text-sm text-amber-900 font-semibold flex items-center gap-3">
          <Award className="w-5 h-5 text-amber-600 shrink-0" />
          <span>60 MITS Students Trained at Stanford d.school in Innovation, Design Thinking &amp; Leadership</span>
        </div>
      </div>

      {/* Long Term Strategic Objectives */}
      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm space-y-4">
        <h3 className="font-bold text-secondary text-2xl mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Long-Term Strategic Objectives
        </h3>
        <p className="text-sm text-muted-foreground mb-4">Expanding MITS global footprint through bilateral research and pathways</p>
        <ul className="space-y-3">
          {aboutIR.longTermObjectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-700 font-medium">
              <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* IRO Leadership & Contact */}
    <div className="rounded-3xl border border-border bg-gradient-to-r from-[#0f2a44] to-[#152f4f] text-white p-6 md:p-8 shadow-lg space-y-6">
      <div>
        <div className="flex items-center gap-2 text-[#caa74d] font-bold mb-3 uppercase text-sm tracking-widest">
          <Users className="w-4 h-4" /> International Relations Office (IRO) Leadership
        </div>
        <p className="text-sm leading-relaxed text-white/90">{aboutIR.office}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-white/10">
        {contactCard.team.map((t) => (
          <div key={t.name} className="rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-all flex flex-col gap-2">
            <div className="w-11 h-11 rounded-full bg-[#caa74d]/20 border border-[#caa74d]/40 text-[#caa74d] flex items-center justify-center font-bold text-sm shrink-0">
              {t.name
                .replace(/^(Dr\.|Mrs\.|Mr\.|Ms\.)\s*/, "")
                .split(" ")
                .filter(Boolean)
                .slice(0, 2)
                .map((w) => w[0])
                .join("")
                .toUpperCase()}
            </div>
            <div>
              <div className="font-semibold text-sm text-white leading-snug">{t.name}</div>
              <div className="text-[11px] text-white/70 mt-0.5 leading-snug">{t.designation}</div>
            </div>
            {t.email && (
              <a href={`mailto:${t.email}`} className="text-[11px] text-[#caa74d] hover:underline inline-flex items-center gap-1 mt-auto pt-1">
                <Mail className="w-3 h-3" />{t.email}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const domainMap: Record<string, string> = {
  "Bowling Green State University (BGSU)": "bgsu.edu",
  "Rivier University": "rivier.edu",
  "University of Applied Sciences, Hagenberg – Upper Austria": "fh-ooe.at",
  "BRNO University of Technology": "vutbr.cz",
  "Maharishi Vedic University": "meru.international",
  "University of Eastern Finland": "uef.fi",
  "Karlsruhe Institute of Technology": "kit.edu",
  "University of Aizu": "u-aizu.ac.jp",
  "Ichinoseki College (NIT)": "ichinoseki.ac.jp",
  "Iwate Prefectural University – Faculty of Software & Information Science": "iwate-pu.ac.jp",
  "Asia University": "asia.edu.tw",
  "Providence University": "pu.edu.tw",
  "National Chiao Tung University (NCTU)": "nycu.edu.tw",
  "National Chung Cheng University (NCCU)": "ccu.edu.tw",
  "Pusan National University": "pusan.ac.kr",
  "Kookmin University": "kookmin.ac.kr",
  "GS Co., Ltd. – Gyeonggi-do": "gscorp.co.kr",
  "Nanyang Technological University (NTU)": "ntu.edu.sg",
  "Rise & Shine Group of Companies": "riseandshinegroup.com",
  "Jenmars Technical Services LLC": "jenmars.com",
};

const getDomain = (url: string) => {
  try {
    if (!url || url === "#") return null;
    const clean = url
      .replace("https://www.", "")
      .replace("http://www.", "")
      .replace("https://", "")
      .replace("http://", "");
    return clean.split("/")[0];
  } catch (e) {
    return null;
  }
};

export const FallbackCrest = ({ name }: { name: string }) => {
  const isCompany =
    name.toLowerCase().includes("group") ||
    name.toLowerCase().includes("services") ||
    name.toLowerCase().includes("co., ltd.");

  if (isCompany) {
    return (
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#caa74d]/10 to-[#caa74d]/20 border border-[#caa74d]/30 flex items-center justify-center p-3 text-[#caa74d] shrink-0 shadow-sm">
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full text-[#caa74d] fill-none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      </div>
    );
  }

  return (
    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 flex items-center justify-center p-2.5 text-primary shrink-0 shadow-sm">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-primary fill-none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M50 12 L82 22 V55 C82 72 67 83 50 88 C33 83 18 72 18 55 V22 Z" />
        <path d="M35 48 H65 M50 35 V62" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M35 55 L50 65 L65 55" strokeWidth="2" />
        <circle cx="50" cy="35" r="5" className="fill-primary" />
      </svg>
    </div>
  );
};

export const localLogos: Record<string, string> = {
  "Bowling Green State University (BGSU)": "Logos/bgsu.png",
  "Bowling Green State University": "Logos/bgsu.png",
  "University of Applied Sciences Upper Austria (Hagenberg Campus)": "Logos/fh-ooe.png",
  "University of Applied Sciences, Hagenberg – Upper Austria": "Logos/fh-ooe.png",
  "Brno University of Technology (BUT)": "Logos/brno.png",
  "BRNO University of Technology": "Logos/brno.png",
  "The University of South Bohemia in České Budějovice (USB)": "Logos/jcu.png",
  "The University of South Bohemia in České Budějovice": "Logos/jcu.png",
  "Maharishi Vedic University": "Logos/meru.png",
  "University of Aizu (UoA)": "Logos/aizu.png",
  "University of Aizu": "Logos/aizu.png",
  "Ichinoseki College (National Institute of Technology - KOSEN)": "Logos/ichinoseki.png",
  "Ichinoseki College (NIT)": "Logos/ichinoseki.png",
  "Iwate Prefectural University (Faculty of Software & Information Science)": "Logos/iwate.png",
  "Iwate Prefectural University – Faculty of Software & Information Science": "Logos/iwate.png",
  "Asia University (AU)": "Logos/asia.png",
  "Asia University": "Logos/asia.png",
  "Providence University": "Logos/providence.png",
  "Pusan National University (PNU)": "Logos/pusan.png",
  "Pusan National University": "Logos/pusan.png",
  "Kookmin University": "Logos/kookmin.png",
};

export const PartnerCard = ({ p }: { p: (typeof partners)[0] }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const BASE = import.meta.env.BASE_URL;
  const localLogo = localLogos[p.name];
  const logoUrl = localLogo ? `${BASE}${localLogo}` : null;

  return (
    <div className="group rounded-2xl border border-border bg-white p-6 hover:shadow-xl hover:-translate-y-1 hover:border-[#caa74d]/60 transition-all flex flex-col justify-between h-full">
      <div className="space-y-4">
        {/* Top Header with Crest & QS Ranking */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          {!imgFailed && logoUrl ? (
            <div className="h-12 flex items-center bg-white shrink-0">
              <img
                src={logoUrl}
                alt={`${p.name} logo`}
                className="h-full w-auto object-contain max-w-[130px]"
                onError={() => setImgFailed(true)}
              />
            </div>
          ) : (
            <FallbackCrest name={p.name} />
          )}

          {p.ranking && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold bg-amber-50 text-amber-900 border border-amber-200 shrink-0 shadow-sm">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              {p.ranking}
            </span>
          )}
        </div>

        {/* University Title & Country */}
        <div>
          <h4
            className="font-bold text-secondary text-lg leading-snug group-hover:text-primary transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {p.name}
          </h4>
          <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1 font-semibold">
            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
            {p.country}
          </p>
        </div>

        {/* Full Detailed Description from Document */}
        {p.description && (
          <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
            {p.description}
          </p>
        )}

        {/* Key Strengths Pills */}
        {p.strengths && p.strengths.length > 0 && (
          <div className="space-y-1.5 pt-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Strengths & Focus Areas</span>
            <div className="flex flex-wrap gap-1.5">
              {p.strengths.map((str, idx) => (
                <span key={idx} className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                  {str}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Highlight & Website Hyperlink Button */}
      <div className="mt-6 pt-4 border-t border-border space-y-3">
        {p.highlight && (
          <p className="text-sm text-secondary/80 font-medium leading-relaxed bg-amber-50/50 p-2.5 rounded-lg border border-amber-100/80">
            ✨ {p.highlight}
          </p>
        )}

        <a
          href={p.website}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-[#0f2a44] text-slate-800 hover:text-white border border-slate-200 hover:border-[#0f2a44] text-sm font-bold transition-all duration-200 group/btn shadow-sm"
        >
          <span>Web Link: {p.name}</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
};

/** Single logo tile — no redirect, pure image only */
const PartnerLogoTile = ({ p }: { p: (typeof partners)[0] }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const BASE = import.meta.env.BASE_URL;
  const localLogo = localLogos[p.name];
  const logoUrl = localLogo ? `${BASE}${localLogo}` : null;

  return (
    <div className="group relative flex flex-col items-center justify-center aspect-[4/3] rounded-2xl border border-slate-200/80 bg-white p-5 overflow-hidden hover:shadow-md hover:border-[#caa74d]/40 transition-all">
      {!imgFailed && logoUrl ? (
        <img
          src={logoUrl}
          alt={`${p.name} logo`}
          className="max-h-16 md:max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <FallbackCrest name={p.name} />
      )}
      {/* Hover tooltip */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-[#0f2a44] to-[#0f2a44]/90 px-3 py-2 text-center">
        <div className="text-[10px] font-bold leading-tight line-clamp-2 text-[#caa74d]">{p.name}</div>
        <div className="text-[9px] text-white/70 mt-0.5">{p.country}</div>
      </div>
    </div>
  );
};

/** Horizontal oval pill — university name + Read more, clicks to partner page */
const MouPartnerOval = ({ p }: { p: (typeof partners)[0] }) => (
  <Link
    to={`/international-relations/mou/${slugify(p.name)}`}
    style={{ borderRadius: '50% / 50%', padding: '22px 48px', border: '2.5px solid rgba(202,167,77,0.65)' }}
    className="ir-lift-card group w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#fdf6e3] via-[#fef9ee] to-[#fdf0c8] hover:from-[#0f2a44] hover:via-[#0f2a44] hover:to-[#143557] transition-all duration-300 shadow-md hover:shadow-xl text-center"
  >
    <span className="text-sm font-bold text-[#5a3e00] group-hover:text-white leading-snug text-center" style={{ fontFamily: 'var(--font-display)' }}>
      {p.name}
    </span>
    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#8a6d1f] group-hover:text-[#caa74d] transition-transform duration-300 group-hover:translate-x-0.5" />
  </Link>
);

const MoUSection = () => {
  const [regionFilter, setRegionFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  const availableRegions = useMemo(
    () => Array.from(new Set(partners.map((p) => p.region))),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return partners.filter((p) => {
      const matchesRegion = regionFilter === "All" || p.region === regionFilter;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.country.toLowerCase().includes(q) ||
        (p.strengths || []).some((s) => s.toLowerCase().includes(q));
      return matchesRegion && matchesQuery;
    });
  }, [regionFilter, query]);

  const regionLabel = (region: string) =>
    region === "US" ? "United States" : region === "Europe" ? "Europe" : region;

  /* Country-led reading order: USA, Europe, then Asia. Individual countries are kept on every partner tile. */
  // Ordered: USA → Europe → Asia
  const regionOrder = ["US", "Europe"];
  const sortedFiltered = useMemo(() => [
    ...filtered.filter((p) => p.region === "US"),
    ...filtered.filter((p) => p.region === "Europe"),
    ...filtered.filter((p) => !regionOrder.includes(p.region)),
  ], [filtered]);

  return (
    <div className="space-y-12">
      <SectionTitle
        title="MoUs with QS Ranking Partner Universities"
        subtitle="MITS – Deemed to be University has active MoUs and global partnerships with leading QS-ranked institutions worldwide."
      />
      <ImageCarousel images={partnerImages} />

      {/* Filter & search bar */}
      <div className="ir-lift-card rounded-[1.5rem] border border-white/70 bg-white/75 p-4 md:p-5 shadow-sm backdrop-blur-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by university, country, or focus area…"
              className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-border bg-slate-50 text-sm text-secondary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-secondary"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <span className="text-sm font-semibold text-muted-foreground shrink-0">
            {filtered.length} of {partners.length} partner{partners.length === 1 ? "" : "s"}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setRegionFilter("All")}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-sm font-bold border transition-all",
              regionFilter === "All"
                ? "bg-secondary text-white border-secondary"
                : "bg-white text-secondary border-border hover:border-secondary"
            )}
          >
            All Regions
          </button>
          {availableRegions.map((region) => (
            <button
              key={region}
              onClick={() => setRegionFilter(region)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-sm font-bold border transition-all",
                regionFilter === region
                  ? cn(regionColors[region], "border-transparent shadow-sm")
                  : "bg-white text-secondary border-border hover:border-primary"
              )}
            >
              {regionLabel(region)}
            </button>
          ))}
        </div>
      </div>

      {sortedFiltered.length === 0 && (
        <div className="text-center py-16 rounded-2xl border border-dashed border-border bg-slate-50/60">
          <p className="text-sm text-muted-foreground">No partner universities match your search.</p>
        </div>
      )}

      {sortedFiltered.length > 0 && (
        <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 p-4 md:p-7 xl:p-9 shadow-[0_24px_60px_-48px_rgba(15,42,68,0.7)]">
          <div className="absolute inset-0 ir-grid-surface opacity-60 pointer-events-none" />

          {/* Single unified collage — all logos side by side, ordered USA → Europe → Asia */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4">
            {sortedFiltered.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              >
                <PartnerLogoTile p={p} />
              </motion.div>
            ))}
          </div>

          {/* Oval pills — 3 per row, all partners in same continent order */}
          <div className="relative mt-8 border-t border-slate-200/80 pt-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Click a university to view its full profile</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {sortedFiltered.map((p) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.3 }}
                  className="flex"
                >
                  <MouPartnerOval p={p} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

/** Extracts the academic year from a program, falling back to extracting from period string. */
const getProgramYear = (p: (typeof internships)[number]): string => {
  if (p.academicYear) return p.academicYear;
  if (!p.period) return "Undated";
  const match = p.period.match(/\d{4}/);
  if (!match) return "Undated";
  const year = parseInt(match[0], 10);
  // Convert calendar year to academic year: July–Dec → year/year+1, Jan–Jun → year-1/year
  const monthMatch = p.period.match(/(January|February|March|April|May|June|July|August|September|October|November|December)/i);
  if (monthMatch) {
    const month = monthMatch[0].toLowerCase();
    const lateMonths = ["july", "august", "september", "october", "november", "december"];
    if (lateMonths.includes(month)) return `${year}-${String(year + 1).slice(2)}`;
    return `${year - 1}-${String(year).slice(2)}`;
  }
  return `${year}-${String(year + 1).slice(2)}`;
};

const ParticipantsModal = ({
  program,
  onClose,
}: {
  program: (typeof internships)[number] | null;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {program && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-[#0f2a44]/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-hidden flex flex-col"
        >
          <div className="p-5 border-b border-border flex items-start justify-between gap-3 bg-gradient-to-r from-[#0f2a44] to-[#152f4f] text-white shrink-0">
            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-widest text-[#caa74d] font-bold mb-1">Participants</div>
              <h3 className="font-bold leading-snug text-sm text-[#caa74d]" style={{ fontFamily: "var(--font-display)" }}>
                {program.title}
              </h3>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white shrink-0">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="overflow-y-auto p-5">
            <table className="w-full text-sm">
              <thead className="text-sm uppercase text-[#caa74d] border-b border-border">
                <tr>
                  <th className="text-left py-2 pr-4">#</th>
                  <th className="text-left py-2 pr-4">Name</th>
                  <th className="text-left py-2 pr-4">Department</th>
                  <th className="text-left py-2">Roll No</th>
                </tr>
              </thead>
              <tbody>
                {program.participants?.map((s) => (
                  <tr key={s.sno} className="border-b border-border last:border-0">
                    <td className="py-2 pr-4 text-muted-foreground">{s.sno}</td>
                    <td className="py-2 pr-4 font-medium text-secondary">
                      {s.name}
                      {s.extra ? <span className="text-muted-foreground font-normal"> ({s.extra})</span> : null}
                    </td>
                    <td className="py-2 pr-4">{s.dept}</td>
                    <td className="py-2 text-muted-foreground">{s.roll}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/** Strips a trailing "(...)" so names like "Ichinoseki College (National Institute of Technology - KOSEN)" compare cleanly. */
const stripParenthetical = (s: string) => s.replace(/\s*\([^)]*\)\s*/g, "").trim().toLowerCase();

/**
 * Matches a program's free-text `partner` field (e.g. "University of Aizu") against the
 * existing MoU `partners` records to find that university's real, already-stored website.
 * Returns undefined for partners that aren't in our MoU list (e.g. GS Co., Ltd.) rather
 * than guessing a URL.
 */
const findPartnerWebsite = (partnerName?: string): string | undefined => {
  if (!partnerName) return undefined;
  const frag = stripParenthetical(partnerName);
  const match = partners.find((p) => {
    const core = stripParenthetical(p.name);
    return core.includes(frag) || frag.includes(core);
  });
  return match?.website;
};

const InternshipProgramCard = ({
  p,
  onViewParticipants,
}: {
  p: (typeof internships)[number];
  onViewParticipants: (p: (typeof internships)[number]) => void;
}) => {
  const website = findPartnerWebsite(p.partner);

  return (
    <div className="ir-lift-card relative overflow-hidden rounded-[1.6rem] border border-white/80 bg-white">
      <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-teal-400 via-sky-500 to-[#0f2a44]" />
      <div className="p-5 md:p-6 bg-[linear-gradient(115deg,rgba(240,253,250,.95),rgba(255,255,255,.95)_52%,rgba(240,249,255,.9))] border-b border-slate-200/80">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-[#caa74d] leading-snug" style={{ fontFamily: "var(--font-display)" }}>
              {p.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
              {p.country && (
                <span className="inline-flex items-center gap-1">
                  <Globe className="w-3 h-3" />
                  {p.country}
                </span>
              )}
              {p.partner && (
                website ? (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                  >
                    <Building2 className="w-3 h-3" />
                    {p.partner}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    {p.partner}
                  </span>
                )
              )}
              {p.period && (
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {p.period}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            {website && (
              <a href={website} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="gap-2">
                  <Globe className="w-4 h-4" />
                  University Website
                </Button>
              </a>
            )}
            {p.reportUrl && (
              <a href={p.reportUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Report
                </Button>
              </a>
            )}
          </div>
        </div>
        {p.activity && (
          <span className="inline-block mt-3 text-[11px] font-bold uppercase tracking-wide text-primary bg-primary/10 px-2.5 py-1 rounded-full">
            {p.activity}
          </span>
        )}
        {p.description && <p className="text-sm text-secondary/80 mt-3 leading-relaxed">{p.description}</p>}
      </div>
      {p.participants && p.participants.length > 0 && (
        <button
          onClick={() => onViewParticipants(p)}
          className="w-full flex items-center justify-between px-5 md:px-6 py-4 hover:bg-slate-50 transition-colors group"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
            <Users className="w-4 h-4 text-[#caa74d]" />
            {p.participants.length} Participant{p.participants.length === 1 ? "" : "s"}
          </span>
          <span className="text-sm font-bold text-[#caa74d] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            View List <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </button>
      )}
    </div>
  );
};

const InternshipsSection = () => {
  const [groupBy, setGroupBy] = useState<"year" | "university">("year");
  const [activeProgram, setActiveProgram] = useState<(typeof internships)[number] | null>(null);

  const byYear = internships.reduce((acc, p) => {
    const y = getProgramYear(p);
    (acc[y] ||= []).push(p);
    return acc;
  }, {} as Record<string, typeof internships>);
  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a));

  const byUniversity = internships.reduce((acc, p) => {
    const u = p.partner || "Other";
    (acc[u] ||= []).push(p);
    return acc;
  }, {} as Record<string, typeof internships>);
  const universities = Object.keys(byUniversity).sort();

  const groups =
    groupBy === "year"
      ? years.map((y) => ({ key: y, label: y === "Undated" ? "Undated" : y, list: byYear[y] }))
      : universities.map((u) => ({ key: u, label: u, list: byUniversity[u] }));

  return (
    <div className="space-y-10">
      <SectionTitle
        title="Internships & Exchange Programs"
        subtitle="Research internships, student exchange and academic mobility across MITS' global network."
      />
      <ImageCarousel images={internshipGallery} />

      <div className="flex items-center justify-center gap-1 rounded-full border border-white/70 bg-white/75 p-1.5 w-fit mx-auto shadow-lg backdrop-blur-xl">
        <button
          onClick={() => setGroupBy("year")}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-bold transition-all",
            groupBy === "year" ? "bg-white text-secondary shadow" : "text-muted-foreground hover:text-secondary"
          )}
        >
          Year-wise
        </button>
        <button
          onClick={() => setGroupBy("university")}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-bold transition-all",
            groupBy === "university" ? "bg-white text-secondary shadow" : "text-muted-foreground hover:text-secondary"
          )}
        >
          University-wise
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={groupBy}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="space-y-10"
        >
          {groups.map((g) => (
            <div key={g.key} className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h3
                  className="font-bold text-secondary text-lg flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {groupBy === "year" ? (
                    <Calendar className="w-4 h-4 text-primary" />
                  ) : (
                    <Building2 className="w-4 h-4 text-primary" />
                  )}
                  {g.label}
                </h3>
                <span className="text-sm font-bold text-muted-foreground bg-slate-100 px-2.5 py-1 rounded-full">
                  {g.list.length} Programme{g.list.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className="grid gap-5">
                {g.list.map((p) => (
                  <InternshipProgramCard key={`${p.title}__${p.period}`} p={p} onViewParticipants={setActiveProgram} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <ParticipantsModal program={activeProgram} onClose={() => setActiveProgram(null)} />
    </div>
  );
};

const FellowshipsSection = () => (
  <div className="space-y-10">
    <SectionTitle title="Fellowships & Scholarships" subtitle="Prestigious global programmes MITS students are encouraged to compete for." />
    <ImageCarousel images={fellowshipGallery} />
    <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <div className="absolute -inset-5 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_15%_20%,rgba(202,167,77,.17),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(14,165,233,.13),transparent_32%)]" />
      {fellowships.map((f, index) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ delay: (index % 3) * 0.06 }}
          whileHover={{ y: -7, rotateX: 2, rotateY: index % 2 ? -1 : 1 }}
          style={{ transformStyle: "preserve-3d" }}
          className="group relative overflow-hidden rounded-[1.65rem] border border-white/80 bg-white p-6 shadow-[0_22px_48px_-36px_rgba(15,42,68,.56)]"
        >
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-[#caa74d]/25 to-sky-300/10 blur-sm transition-transform duration-500 group-hover:scale-125" />
          <div className="relative flex items-start gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[#0f2a44] text-[#e8c97a] shadow-lg shadow-[#0f2a44]/20"><Award className="w-5 h-5" /></div>
            <div className="flex-1">
              <h3 className="font-bold text-secondary text-lg" style={{ fontFamily: "var(--font-display)" }}>{f.title}</h3>
              <div className="flex flex-wrap gap-2 mt-1 text-sm text-muted-foreground">
                {f.country && <span className="inline-flex items-center gap-1"><Globe className="w-3 h-3" />{f.country}</span>}
                {f.partner && <span className="inline-flex items-center gap-1"><Building2 className="w-3 h-3" />{f.partner}</span>}
                {f.period && <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{f.period}</span>}
              </div>
            </div>
          </div>
          {f.description && <p className="relative text-sm text-secondary/80 leading-relaxed">{f.description}</p>}
          {f.reportUrl && (
            <a href={f.reportUrl} target="_blank" rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 mt-5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-primary hover:bg-primary hover:text-white transition-colors">
              <FileText className="w-4 h-4" />View Report
            </a>
          )}
        </motion.div>
      ))}
    </div>
  </div>
);

const GlobalSection = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (title: string) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="space-y-10">
      <SectionTitle title="Global Immersion, Summer & Winter Programs" subtitle="Short-term intensive academic and cultural immersion experiences with partner universities." />
      <ImageCarousel images={globalGallery} />
      <div className="space-y-6">
        {globalPrograms.map((g, index) => (
          <motion.article
            key={g.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (index % 3) * 0.05 }}
            whileHover={{ y: -5, rotateX: 1 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-white shadow-[0_22px_50px_-40px_rgba(15,42,68,.58)]"
          >
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-sky-400 via-[#caa74d] to-[#0f2a44]" />
            <div className="p-6 md:p-7 border-b border-slate-200/80 bg-[linear-gradient(115deg,rgba(240,249,255,.95),rgba(255,255,255,.95)_42%,rgba(255,248,235,.9))]">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-sm text-primary font-bold mb-1.5 uppercase tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />{g.country}
                  </div>
                  <h3 className="text-xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>{g.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                    {g.partner && <span className="inline-flex items-center gap-1"><Building2 className="w-3 h-3" />{g.partner}</span>}
                    {g.period && <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{g.period}</span>}
                  </div>
                </div>
                {g.participants && g.participants.length > 0 && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleExpand(g.title)}
                    className="gap-2"
                  >
                    <Users className="w-4 h-4" />
                    {expanded[g.title] ? "Hide Participants" : `View Participants (${g.participants.length})`}
                  </Button>
                )}
              </div>
              {g.description && <p className="text-sm text-secondary/80 mt-3 leading-relaxed">{g.description}</p>}
            </div>

            {/* Collapsible Student Table */}
            {g.participants && g.participants.length > 0 && expanded[g.title] && (
              <div className="p-6 md:p-7 border-t border-border overflow-x-auto bg-slate-50/60">
                <table className="w-full text-sm">
                  <thead className="text-sm uppercase text-muted-foreground border-b border-border">
                    <tr>
                      <th className="text-left py-2 pr-4">#</th>
                      <th className="text-left py-2 pr-4">Name</th>
                      <th className="text-left py-2 pr-4">Department</th>
                      <th className="text-left py-2 pr-4">Roll No</th>
                      <th className="text-left py-2">Program Track</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.participants.map((s) => (
                      <tr key={s.sno} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="py-2.5 pr-4 text-muted-foreground">{s.sno}</td>
                        <td className="py-2.5 pr-4 font-medium text-secondary">{s.name}</td>
                        <td className="py-2.5 pr-4">{s.dept}</td>
                        <td className="py-2.5 pr-4 text-muted-foreground">{s.roll}</td>
                        <td className="py-2.5 text-secondary/70">{s.extra || "Global Immersion"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
};

/** Infers a display category from the event title's own wording — purely presentational, no new facts added. */
const classifyEvent = (title: string): { label: string; Icon: LucideIcon; classes: string } => {
  const t = title.toLowerCase();
  if (t.includes("mou")) {
    return { label: "MoU Signing", Icon: CheckCircle2, classes: "bg-[#caa74d]/15 text-[#8a6d1f] border-[#caa74d]/30" };
  }
  if (t.includes("visit") || t.includes("delegation")) {
    return { label: "Delegation Visit", Icon: Plane, classes: "bg-secondary/10 text-secondary border-secondary/20" };
  }
  if (
    t.includes("awareness") ||
    t.includes("seminar") ||
    t.includes("session") ||
    t.includes("lecture") ||
    t.includes("induction") ||
    t.includes("talk")
  ) {
    return { label: "Awareness Programme", Icon: GraduationCap, classes: "bg-primary/10 text-primary border-primary/20" };
  }
  if (t.includes("interaction") || t.includes("roundtable")) {
    return { label: "Interactive Session", Icon: Users, classes: "bg-emerald-50 text-emerald-700 border-emerald-200" };
  }
  return { label: "IRO Event", Icon: Globe, classes: "bg-slate-100 text-slate-700 border-slate-200" };
};

/** Extracts the first 4-digit year from an event/workshop date string, for year-wise timeline grouping. */
const getEventYear = (date: string): string => {
  const match = date.match(/\d{4}/);
  return match ? match[0] : "Undated";
};

const EventCard = ({ e }: { e: { date: string; title: string; description: string; reportUrl?: string } }) => {
  const [showFull, setShowFull] = useState(false);
  const needsTruncation = e.description.length > 280;
  const text = showFull ? e.description : (needsTruncation ? `${e.description.substring(0, 260)}...` : e.description);
  const kind = classifyEvent(e.title);
  const Icon = kind.Icon;

  return (
    <div className="p-5 md:p-6">
      <div className="flex items-start gap-3 mb-3">
        <div className={cn("w-9 h-9 rounded-xl border flex items-center justify-center shrink-0", kind.classes)}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-sm font-bold text-primary uppercase tracking-wide">{e.date}</span>
            <span className={cn("text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border", kind.classes)}>
              {kind.label}
            </span>
          </div>
          <h3 className="font-bold text-secondary text-lg leading-snug" style={{ fontFamily: "var(--font-display)" }}>
            {e.title}
          </h3>
        </div>
      </div>
      <p className="text-sm text-secondary/80 leading-relaxed whitespace-pre-line">
        {text}
        {needsTruncation && (
          <button
            onClick={() => setShowFull(!showFull)}
            className="text-primary font-semibold ml-2 hover:underline focus:outline-none inline-flex items-center gap-0.5 text-sm"
          >
            {showFull ? "Read Less" : "Read More"}
          </button>
        )}
      </p>
      {e.reportUrl && (
        <a href={e.reportUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors bg-primary/5 hover:bg-primary/10 px-3 py-2 rounded-lg border border-primary/20">
          <Download className="w-3.5 h-3.5" />Event Report (PDF)
        </a>
      )}
    </div>
  );
};

const EventsSection = () => {
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [yearFilter, setYearFilter] = useState<string>("All");

  const eventTypes = useMemo(
    () => Array.from(new Set(events.map((e) => classifyEvent(e.title).label))),
    []
  );

  const eventYears = useMemo(
    () => Array.from(new Set(events.map((e) => getEventYear(e.date)))).sort((a, b) => b.localeCompare(a)),
    []
  );

  const filtered = useMemo(() => events.filter((e) => {
    const matchesType = typeFilter === "All" || classifyEvent(e.title).label === typeFilter;
    const matchesYear = yearFilter === "All" || getEventYear(e.date) === yearFilter;
    return matchesType && matchesYear;
  }), [typeFilter, yearFilter]);

  const grouped = filtered.reduce((acc, e) => {
    const y = getEventYear(e.date);
    (acc[y] ||= []).push(e);
    return acc;
  }, {} as Record<string, typeof events>);
  const years = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  return (
    <div className="space-y-8">
      <SectionTitle
        title="International Events & Delegations"
        subtitle="Visits, MoU signings, awareness programmes and international interactions organised by the IRO."
      />
      <ImageCarousel images={eventGallery} />

      {/* Year-first event toggle, followed by event type. */}
      <div className="ir-lift-card rounded-[1.5rem] border border-white/70 bg-white/75 p-4 md:p-5 backdrop-blur-xl space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="mr-1 inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#0f2a44]/60"><Calendar className="h-3.5 w-3.5" /> Year</span>
          <button
            onClick={() => setYearFilter("All")}
            className={cn("rounded-full border px-3.5 py-1.5 text-sm font-bold transition-all", yearFilter === "All" ? "bg-[#0f2a44] text-white border-[#0f2a44] shadow-md" : "bg-white text-secondary border-border hover:border-secondary")}
          >
            All years
          </button>
          {eventYears.map((year) => (
            <button
              key={year}
              onClick={() => setYearFilter(year)}
              className={cn("rounded-full border px-3.5 py-1.5 text-sm font-bold transition-all", yearFilter === year ? "bg-[#caa74d] text-[#0f2a44] border-[#caa74d] shadow-md" : "bg-white text-secondary border-border hover:border-[#caa74d]")}
            >
              {year}
            </button>
          ))}
        </div>
        <div className="h-px bg-slate-200/80" />
        <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setTypeFilter("All")}
          className={cn(
            "px-3.5 py-1.5 rounded-full text-sm font-bold border transition-all",
            typeFilter === "All"
              ? "bg-secondary text-white border-secondary"
              : "bg-white text-secondary border-border hover:border-secondary"
          )}
        >
          All ({events.length})
        </button>
        {eventTypes.map((label) => {
          const count = events.filter((e) => classifyEvent(e.title).label === label).length;
          const sample = classifyEvent(events.find((e) => classifyEvent(e.title).label === label)!.title);
          return (
            <button
              key={label}
              onClick={() => setTypeFilter(label)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-sm font-bold border transition-all",
                typeFilter === label ? cn(sample.classes, "border-transparent shadow-sm") : "bg-white text-secondary border-border hover:border-primary"
              )}
            >
              {label} ({count})
            </button>
          );
        })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${typeFilter}-${yearFilter}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative border-l-2 border-primary/30 ml-4 space-y-10 pl-8"
        >
          {years.map((year) => (
            <div key={year} className="space-y-6">
              <div className="relative">
                <div className="absolute -left-[45px] -top-0.5 w-7 h-7 rounded-full bg-secondary text-white flex items-center justify-center ring-4 ring-white shadow-md">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-xl md:text-2xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                    {year}
                  </span>
                  <span className="text-sm font-bold text-muted-foreground bg-slate-100 px-2.5 py-1 rounded-full">
                    {grouped[year].length} Event{grouped[year].length === 1 ? "" : "s"}
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                {grouped[year].map((e, i) => (
                  <motion.div
                    key={`${e.title}__${e.date}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white shadow-md" />
                    <div className="rounded-2xl border border-border bg-white overflow-hidden hover:shadow-lg transition-all">
                      <EventCard e={e} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12 rounded-2xl border border-dashed border-border bg-slate-50/60 -ml-8">
              <p className="text-sm text-muted-foreground">No events match this filter.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const WorkshopsSection = () => (
  <div className="space-y-10">
    <SectionTitle title="Workshops" subtitle="Skill-building sessions and awareness workshops facilitated by the IRO." />
    <ImageCarousel images={workshopGallery} />
    <div className="grid gap-6 xl:grid-cols-2">
      {workshops.map((w, i) => (
        <motion.article
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ y: -6, rotateX: 1 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-white p-6 md:p-8 shadow-[0_25px_52px_-40px_rgba(15,42,68,.6)]"
        >
          <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[4rem] bg-gradient-to-bl from-emerald-200/60 to-transparent" />
          <div className="relative flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider mb-3">
            <Calendar className="w-4 h-4" />{w.date}
          </div>
          <h3 className="relative font-bold text-secondary text-xl md:text-2xl mb-4" style={{ fontFamily: "var(--font-display)" }}>
            {w.title}
          </h3>
          <p className="relative text-sm text-secondary/80 leading-relaxed mb-6">
            {w.description}
          </p>

          {w.scientists && w.scientists.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-secondary text-sm uppercase tracking-wider mb-3 flex items-center gap-2 text-primary">
                <Users className="w-4 h-4 text-primary" /> Distinguished Scientists &amp; Resource Persons
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-secondary/80">
                {w.scientists.map((s, idx) => (
                  <li key={idx} className="flex gap-2 items-start bg-muted/50 p-2.5 rounded-lg border border-border/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {w.objectives && w.objectives.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-secondary text-sm uppercase tracking-wider mb-3 flex items-center gap-2 text-secondary/90">
                <Sparkles className="w-4 h-4 text-secondary/80" /> Objectives of the Workshop
              </h4>
              <ul className="space-y-2 text-sm text-secondary/80">
                {w.objectives.map((obj, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {w.reportUrl && (
            <div className="relative pt-4 border-t border-border/60">
              <a href={w.reportUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-primary/80 transition-colors">
                <FileText className="w-4 h-4" /> Download Official Workshop Report (PDF)
              </a>
            </div>
          )}
        </motion.article>
      ))}
    </div>
  </div>
);

const StanfordTeaser = () => (
  <div className="space-y-6">
    <SectionTitle title="Stanford d.school Initiative" subtitle="MITS – University Innovation Fellows (UIF) programme, in association with Stanford University's Hasso Plattner Institute of Design." />
    <ImageCarousel images={stanfordGallery} />
    <div className="ir-media-deck relative overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-[#25070b] via-[#8C1515] to-[#0f2a44] text-white p-8 md:p-12">
      <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/15 bg-white/5" />
      <div className="absolute bottom-0 right-12 h-48 w-48 rounded-full border border-[#e8c97a]/40" />
      <div className="relative flex items-center gap-2 text-[#e8c97a] font-bold text-sm uppercase tracking-widest mb-4">
        <Star className="w-4 h-4" />Global Student Leadership
      </div>
      <h3 className="relative text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
        11 Batches of Fellows since 2016
      </h3>
      <p className="relative text-white/90 max-w-3xl mb-6">
        MITS has consistently produced batches of University Innovation Fellows, empowering student leaders to become
        agents of change on campus through Stanford d.school's global network.
      </p>
      <Link to="/international-relations/stanford-initiative" className="relative">
        <Button size="lg" className="bg-[#e8c97a] text-[#3d0a0e] hover:bg-[#f0d994] font-bold shadow-xl">
          Explore the Stanford Initiative <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  </div>
);

/** Countries strip — derived purely from partners[].country, deduplicated. No data added. */
const GlobalFootprintStrip = () => {
  const countryRegion = new Map<string, string>();
  partners.forEach((p) => {
    if (!countryRegion.has(p.country)) countryRegion.set(p.country, p.region);
  });
  const countries = Array.from(countryRegion.entries());

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6 md:mt-8">
      <div className="rounded-2xl border border-border bg-white/70 backdrop-blur-sm px-5 py-4 md:px-8 md:py-5 flex flex-wrap items-center gap-3 md:gap-4 shadow-sm">
        <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground shrink-0 flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-primary" /> Our Global Footprint
        </span>
        <div className="h-4 w-px bg-border hidden md:block" />
        <div className="flex flex-wrap gap-2">
          {countries.map(([country, region]) => (
            <span
              key={country}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border border-transparent",
                regionColors[region] || regionColors.Other
              )}
            >
              <MapPin className="w-3 h-3" />
              {country}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------- MAIN PAGE ---------- */

const InternationalRelations = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initial = (location.hash.replace("#", "") as Section) || "about";
  const validIds = NAV.map(n => n.id);
  const [active, setActive] = useState<Section>(
    validIds.includes(initial) ? initial : "about"
  );

  useEffect(() => {
    const hash = location.hash.replace("#", "") as Section;
    if (hash && validIds.includes(hash)) setActive(hash);
  }, [location.hash]);

  const handleNav = (id: Section) => {
    setActive(id);
    navigate({ hash: id }, { replace: false });
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <div className="ir-canvas min-h-screen" style={{ perspective: "1400px" }}>
      <Header />
      <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />

      {/* Hero — full-bleed */}
      <section className="relative min-h-[560px] overflow-hidden bg-gradient-to-br from-[#0f2a44] via-[#143557] to-[#0a1f33] text-white py-16 md:py-24 flex items-center">
        <HeroBackdrop images={heroBanners} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2a44]/95 via-[#0f2a44]/80 to-[#0a1f33]/95" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #caa74d 0%, transparent 40%), radial-gradient(circle at 80% 80%, #b31317 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22><path d=%22M0 0h60v60H0z%22 fill=%22none%22/><path d=%22M30 0v60M0 30h60%22 stroke=%22%23ffffff%22 stroke-opacity=%220.04%22/></svg>')]" />
        <div className="absolute -right-32 -bottom-40 h-[32rem] w-[32rem] rounded-full border border-white/10 bg-white/5" />
        <div className="ir-orbit-float absolute right-[13%] top-[20%] h-24 w-24 rounded-3xl border border-[#e8c97a]/35 bg-[#caa74d]/10 backdrop-blur-sm hidden lg:block" />
        <div className="ir-orbit-float-delayed absolute right-[29%] bottom-[18%] h-14 w-14 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm hidden lg:block" />

        <div className={cn(WIDE, "relative")}>
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 font-body">
            <Link to="/" className="hover:text-[#caa74d] transition-colors inline-flex items-center gap-1">
              <Home className="w-3 h-3" />Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#caa74d]">International Relations</span>
          </nav>
          
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#caa74d]/15 border border-[#caa74d]/30 text-[#caa74d] text-sm font-semibold uppercase tracking-[0.2em] mb-5">
              <Globe className="w-3.5 h-3.5" /> Global Engagement
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-6xl font-bold leading-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              International Relations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-body text-sm text-white/80 mt-6 max-w-2xl leading-relaxed"
            >
              Connecting MITS to global universities through academic partnerships, student mobility,
              collaborative research and international learning opportunities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Glass stat strip — floats on the seam between hero and page */}
      <div className={cn(WIDE, "-mt-10 md:-mt-14 relative z-20")}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/60 p-4 md:p-6">
          {heroStats.map((s) => (
            <AnimatedStat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>

      {/* Global Footprint strip — countries derived directly from the MoU partner records */}
      <GlobalFootprintStrip />

      {/* 3D horizontal tab bar */}
      <div className={cn(WIDE, "mt-10")}>
        <div
          className="sticky top-16 md:top-[100px] xl:top-[116px] z-30 flex flex-wrap justify-center gap-2 md:gap-2.5 p-2.5 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/70 shadow-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          {NAV.map((n) => {
            const Icon = n.icon;
            const isActive = active === n.id;
            const theme = TAB_THEME[n.id];
            return (
              <motion.button
                key={n.id}
                onClick={() => handleNav(n.id)}
                whileHover={isActive ? {} : { y: -3, rotateX: 6 }}
                whileTap={{ scale: 0.96 }}
                style={{ transformStyle: "preserve-3d" }}
                className={cn(
                  "relative flex items-center gap-2 px-3.5 md:px-4 py-2.5 rounded-xl text-sm md:text-sm font-bold whitespace-nowrap transition-colors overflow-hidden",
                  isActive ? cn(theme.solid, "text-white", theme.glow) : "bg-white/70 text-secondary border border-white/80 hover:text-secondary"
                )}
              >
                <Icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10 hidden sm:inline">{n.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Tab content — full width */}
      <section className={cn(WIDE, "py-10 md:py-16")}>
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {active === "about" && <AboutSection />}
            {active === "mou" && <MoUSection />}
            {active === "internships" && <InternshipsSection />}
            {active === "fellowships" && <FellowshipsSection />}
            {active === "global" && <GlobalSection />}
            {active === "events" && <EventsSection />}
            {active === "workshops" && <WorkshopsSection />}
            {active === "stanford" && <StanfordTeaser />}
          </motion.div>
        </AnimatePresence>

        {/* Contact card — bottom placement for every tab except About (About shows it up top instead) */}
        {active !== "about" && (
          <div className="ir-media-deck mt-14 rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#0a1f33] via-[#0f2a44] to-[#183f61] text-white p-6 md:p-8">
                        {/* Team members — just before Contact the IRO */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {contactCard.team.map((t) => (
                <div key={t.name} className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#caa74d]/20 border border-[#caa74d]/40 text-[#caa74d] flex items-center justify-center font-bold text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-white leading-snug">{t.name}</div>
                    <div className="text-[11px] text-white/70 mt-0.5 leading-snug">{t.designation}</div>
                    {t.email && (
                      <a href={`mailto:${t.email}`} className="text-[11px] text-[#caa74d] hover:underline inline-flex items-center gap-1 mt-0.5">
                        <Mail className="w-3 h-3" />{t.email}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
<div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest mb-4">
              <Phone className="w-4 h-4" />Contact the IRO
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-1 text-white" style={{ fontFamily: "var(--font-display)" }}>{contactCard.office}</h3>
                <p className="text-sm text-white/90 mb-4">{contactCard.institute}</p>
                <div className="space-y-2 text-sm text-white/95">
                  <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />{contactCard.address}</div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" />{contactCard.timings}</div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /><a href={`tel:${contactCard.phone}`} className="hover:underline text-white">{contactCard.phone}</a></div>
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /><a href={`mailto:${contactCard.email}`} className="hover:underline text-white">{contactCard.email}</a></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  <a href={`mailto:${contactCard.email}`}><Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"><Mail className="w-4 h-4" />Email</Button></a>
                  <a href={`tel:${contactCard.phone}`}><Button size="sm" variant="outline" className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white gap-2"><Phone className="w-4 h-4" />Call</Button></a>
                  <a href={contactCard.mapsUrl} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="outline" className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white gap-2"><MapPin className="w-4 h-4" />Directions</Button></a>
                </div>
              </div>
              <IROLeadership tone="dark" />
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default InternationalRelations;


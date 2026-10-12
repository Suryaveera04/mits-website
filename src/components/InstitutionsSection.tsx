import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

// -- CountUp ------------------------------------------------------------------
const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 55));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); return; }
      setCount(current);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

// -- Data ----------------------------------------------------------------------
const trustCards = [
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.4l-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" opacity="0.25"/></svg>`,
    value: "NAAC A+",
    label: "Accreditation",
    sub: "Highest grade by National Assessment & Accreditation Council",
    isStatic: true,
  },
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12l3 3 5-5"/><path d="M3 9h18"/></svg>`,
    value: "UGC",
    label: "Recognition",
    sub: "Recognized under Sections 2(f) & 12(B) of the UGC Act",
    isStatic: true,
  },
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21l4-18 4 18"/><path d="M6 15h12"/><circle cx="12" cy="3" r="1.5" fill="currentColor" stroke="none" opacity="0.3"/></svg>`,
    value: "201 - 300",
    label: "NIRF Ranking",
    sub: "Consistently ranked in NIRF Engineering category",
    isStatic: true,
  },
];

const successCards = [
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    target: 4401,
    suffix: "+",
    label: "Student Scholarships",
    sub: "Financial support empowering deserving students",
  },
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
    target: 9599,
    suffix: "+",
    label: "Student Internships",
    sub: "Industry internships building real-world experience",
  },
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    target: 600,
    suffix: "+",
    label: "International Internships",
    sub: "Global exposure through international placements",
  },
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    target: 144,
    suffix: "+",
    label: "MoUs with Industries",
    sub: "Strategic partnerships with leading industry players",
  },
];

// -- Component -----------------------------------------------------------------
const InstitutionsSection = () => {
  return (
    <section className="py-16 bg-[#0a1929] relative overflow-hidden" aria-labelledby="excellence-heading">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#b30000]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#caa74d]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">

        {/* -- Section Header -- */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-[#caa74d] font-body font-semibold tracking-[0.18em] uppercase text-sm md:text-sm mb-3">
              Our Achievements
            </p>
            <h2
              id="excellence-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            >
              Excellence &amp; Student Opportunities
            </h2>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Recognized for quality education and committed to student success and global exposure
            </p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#caa74d] via-[#b30000] to-[#caa74d] mx-auto mt-5 rounded-full" />
          </div>
        </ScrollReveal>

        {/* -- ROW 1: Trust & Accreditation -- */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[#caa74d] font-body font-semibold tracking-widest uppercase text-sm px-3">
              Trust &amp; Accreditation
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10">
          {trustCards.map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 0.1}>
              <div className="group relative rounded-2xl p-7 text-center cursor-default h-full
                bg-white/5 border border-white/10 backdrop-blur-sm
                hover:bg-white/10 hover:border-[#caa74d]/40 hover:-translate-y-1.5
                hover:shadow-[0_8px_32px_rgba(202,167,77,0.15)]
                transition-all duration-300">

                {/* Top gold accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#caa74d] rounded-full opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-300" />

                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-2xl mb-5 flex items-center justify-center
                  bg-gradient-to-br from-[#caa74d]/20 to-[#caa74d]/5
                  border border-[#caa74d]/30
                  group-hover:scale-110 group-hover:from-[#caa74d]/35
                  transition-all duration-300
                  shadow-[0_4px_20px_rgba(202,167,77,0.1)]">
                  <span
                    className="w-8 h-8 text-[#caa74d] block"
                    dangerouslySetInnerHTML={{ __html: card.svg }}
                    aria-hidden="true"
                  />
                </div>

                {/* Value */}
                <p className="font-display text-3xl md:text-4xl font-bold text-[#caa74d] mb-1 leading-none">
                  {card.value}
                </p>

                {/* Label */}
                <p className="font-body font-semibold text-white text-sm md:text-base mb-2">
                  {card.label}
                </p>

                {/* Sub */}
                <p className="font-body text-white/55 text-sm leading-relaxed">
                  {card.sub}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* -- ROW 2: Student Success -- */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[#b30000] font-body font-semibold tracking-widest uppercase text-sm px-3">
              Student Success
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {successCards.map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 0.1}>
              <div className="group relative rounded-2xl p-6 text-center cursor-default h-full
                bg-white/5 border border-white/10 backdrop-blur-sm
                hover:bg-white/10 hover:border-[#b30000]/40 hover:-translate-y-1.5
                hover:shadow-[0_8px_32px_rgba(179,0,0,0.15)]
                transition-all duration-300">

                {/* Top red accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#b30000] rounded-full opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-300" />

                {/* Icon */}
                <div className="w-14 h-14 mx-auto rounded-2xl mb-4 flex items-center justify-center
                  bg-gradient-to-br from-[#b30000]/20 to-[#b30000]/5
                  border border-[#b30000]/30
                  group-hover:scale-110 group-hover:from-[#b30000]/35
                  transition-all duration-300
                  shadow-[0_4px_20px_rgba(179,0,0,0.1)]">
                  <span
                    className="w-7 h-7 text-[#b30000] block"
                    dangerouslySetInnerHTML={{ __html: card.svg }}
                    aria-hidden="true"
                  />
                </div>

                {/* CountUp value */}
                <p className="font-display text-3xl md:text-4xl font-bold text-[#caa74d] mb-1 leading-none">
                  <CountUp target={card.target} suffix={card.suffix} />
                </p>

                {/* Label */}
                <p className="font-body font-semibold text-white text-sm mb-2">
                  {card.label}
                </p>

                {/* Sub */}
                <p className="font-body text-white/55 text-sm leading-relaxed">
                  {card.sub}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstitutionsSection;


import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const trustCards = [
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.4l-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" opacity="0.25"/></svg>`,
    value: "NAAC A+",
    label: "Accreditation",
    sub: "Highest grade by National Assessment & Accreditation Council",
  },
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12l3 3 5-5"/><path d="M3 9h18"/></svg>`,
    value: "UGC",
    label: "Recognition",
    sub: "Recognized under Sections 2(f) & 12(B) of the UGC Act",
  },
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M8 14l-4 8h16l-4-8"/><path d="M12 14v8"/></svg>`,
    value: "201–300",
    label: "NIRF Ranking",
    sub: "Consistently ranked in NIRF Engineering category",
  },
];

const successCards = [
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    value: "4401+",
    label: "Student Scholarships",
    sub: "Financial support empowering deserving students",
  },
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
    value: "9599+",
    label: "Student Internships",
    sub: "Industry internships building real-world experience",
  },
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    value: "600+",
    label: "International Internships",
    sub: "Global exposure through international placements",
  },
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M7 7h10v6H7z"/><circle cx="10" cy="10" r="1"/><circle cx="14" cy="10" r="1"/></svg>`,
    value: "46923+",
    label: "Online Certifications",
    sub: "MITS Students have completed various MOOCs courses through global providers.",
  },
];

const RankingsSection = () => {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="relative py-12 overflow-hidden bg-cover bg-center bg-fixed md:bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `url("${BASE}Hero-Section/image-4.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-black/35" />
      {/* Subtle gold ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#caa74d]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-[#caa74d]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="text-[#ffd36b] font-body font-semibold tracking-[0.22em] uppercase text-sm md:text-sm mb-4 px-4 py-1.5 rounded-full bg-[#0f2a44] border border-[#caa74d]/30 inline-block shadow-[0_4px_16px_rgba(15,42,68,0.4)]">
              Our Achievements
            </p>
            <h2
              id="trust-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.75)]"
            >
              Excellence in Education
            </h2>
            <p className="font-body text-white/90 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
              Recognized for quality education and committed to student success and global exposure
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#caa74d] to-transparent mx-auto mt-6 rounded-full" />
          </div>
        </ScrollReveal>

        {/* ROW 1: Trust & Accreditation */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-7">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#caa74d]/40" />
            <span className="text-[#ffd36b] font-body font-bold tracking-widest uppercase text-sm px-5 py-2 rounded-full border border-[#caa74d]/40 bg-[#0f2a44] shadow-[0_4px_20px_rgba(15,42,68,0.45)]">
              Trust &amp; Accreditation
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#caa74d]/40" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {trustCards.map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 0.1}>
              <div className="group relative rounded-2xl p-7 text-center cursor-default h-full
                bg-white/95 border border-white/80
                hover:-translate-y-2
                hover:shadow-[0_16px_48px_rgba(202,167,77,0.35),0_0_0_2px_rgba(202,167,77,0.4)]
                shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                transition-all duration-300">

                {/* Gold top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#caa74d] via-[#e8c96a] to-[#caa74d] rounded-t-2xl" />

                {/* Icon */}
                <div className="w-14 h-14 mx-auto rounded-2xl mb-4 flex items-center justify-center
                  bg-gradient-to-br from-[#0f2a44] to-[#1a4a7a]
                  group-hover:scale-110 transition-all duration-300
                  shadow-[0_4px_16px_rgba(15,42,68,0.3)]">
                  <span className="w-7 h-7 text-[#caa74d] block" dangerouslySetInnerHTML={{ __html: card.svg }} aria-hidden="true" />
                </div>

                <p className="font-display text-4xl font-extrabold text-[#caa74d] mb-1 leading-none">{card.value}</p>
                <p className="font-body font-bold text-[#0f2a44] text-sm mb-2">{card.label}</p>
                <p className="font-body text-[#0f2a44]/60 text-sm leading-relaxed">{card.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ROW 2: Student Success */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-7">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b30000]/40" />
            <span className="text-[#ffd36b] font-body font-bold tracking-widest uppercase text-sm px-5 py-2 rounded-full border border-[#caa74d]/40 bg-[#0f2a44] shadow-[0_4px_20px_rgba(15,42,68,0.45)]">
              Student Success
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b30000]/40" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {successCards.map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 0.1}>
              <div className="group relative rounded-2xl p-7 text-center cursor-default h-full
                bg-white/95 border border-white/80
                hover:-translate-y-2
                hover:shadow-[0_16px_48px_rgba(202,167,77,0.35),0_0_0_2px_rgba(202,167,77,0.4)]
                shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                transition-all duration-300">

                {/* Gold top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#caa74d] via-[#e8c96a] to-[#caa74d] rounded-t-2xl" />

                {/* Icon */}
                <div className="w-14 h-14 mx-auto rounded-2xl mb-4 flex items-center justify-center
                  bg-gradient-to-br from-[#0f2a44] to-[#1a4a7a]
                  group-hover:scale-110 transition-all duration-300
                  shadow-[0_4px_16px_rgba(15,42,68,0.3)]">
                  <span className="w-7 h-7 text-[#caa74d] block" dangerouslySetInnerHTML={{ __html: card.svg }} aria-hidden="true" />
                </div>

                <p className="font-display text-4xl font-extrabold text-[#caa74d] mb-1 leading-none">{card.value}</p>
                <p className="font-body font-bold text-[#0f2a44] text-sm mb-2">{card.label}</p>
                <p className="font-body text-[#0f2a44]/60 text-sm leading-relaxed">{card.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RankingsSection;


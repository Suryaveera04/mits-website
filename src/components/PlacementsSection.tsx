import { TrendingUp, Users, Building, IndianRupee } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: IndianRupee, value: 21, suffix: " LPA", label: "Highest Package" },
  { icon: TrendingUp, value: 6, suffix: ".8 LPA", label: "Average Package" },
  { icon: Users, value: 94, suffix: "%", label: "Placement Percentage" },
  { icon: Building, value: 200, suffix: "+", label: "Recruiters" },
];

const recruiters = [
  { name: "Accenture", logo: "accenture.webp" },
  { name: "Akkodis", logo: "akkodis.webp" },
  { name: "Amazon", logo: "amazon.webp" },
  { name: "Bosch", logo: "bosch.webp" },
  { name: "Broadridge", logo: "broadridge.webp" },
  { name: "Capgemini", logo: "capgemini.webp" },
  { name: "Capsitech", logo: "capsitech.webp" },
  { name: "Cognizant", logo: "cognizant.webp" },
  { name: "Deloitte", logo: "Deloitte.webp" },
  { name: "Finbox", logo: "finbox.webp" },
  { name: "Google", logo: "google.webp" },
  { name: "HCL Tech", logo: "hcltech.webp" },
  { name: "Hexaware", logo: "hexaware.webp" },
  { name: "IBM", logo: "IBM.webp" },
  { name: "Infosys", logo: "infosys.webp" },
  { name: "ITC", logo: "itc.webp" },
  { name: "JLL", logo: "jll.webp" },
  { name: "Kewaunee", logo: "kewaunee.webp" },
  { name: "Knowledge Lens", logo: "knowledge lens.webp" },
  { name: "L&T", logo: "L&T.webp" },
  { name: "LTIMindtree", logo: "ltimindtree.webp" },
  { name: "Lumen", logo: "lumen.webp" },
  { name: "Mahindra", logo: "mahindra.webp" },
  { name: "Microsoft", logo: "microsoft.webp" },
  { name: "PeopleTech", logo: "peopletech.webp" },
  { name: "Recruit", logo: "recruit.webp" },
  { name: "Regami", logo: "regami.webp" },
  { name: "SBI General", logo: "SBI General.webp" },
  { name: "TCS", logo: "tcs.webp" },
  { name: "Tech Mahindra", logo: "tech mahindra.webp" },
  { name: "Wiley", logo: "wiley.webp" },
  { name: "Wipro", logo: "wipro.webp" },
  { name: "Yash Tech", logo: "yash tech.webp" },
  { name: "Zoho", logo: "zoho.webp" },
];


const getRecruiterLogoSrc = (logo: string) => `${import.meta.env.BASE_URL}recruiters/${logo}`;

const CountUp = ({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / (duration * 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); } else { setCount(start); }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const PlacementsSection = () => {
  return (
    <section className="py-24 bg-navy-gradient text-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-[#caa74d] font-body font-semibold tracking-[0.18em] uppercase text-sm md:text-sm mb-3">Career Success</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">Placement Highlights</h2>
            <p className="font-body text-white/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Our students are recruited by top companies across the globe.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-[#caa74d]/40 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(0,0,0,0.3),0_0_20px_rgba(202,167,77,0.1)] transition-all duration-300">
                <div className="w-16 h-16 mx-auto rounded-xl bg-[#caa74d]/20 flex items-center justify-center mb-4 group-hover:bg-[#caa74d]/35 transition-colors">
                  <stat.icon className="w-8 h-8 text-[#caa74d]" aria-hidden="true" />
                </div>
                <p className="font-display text-4xl md:text-5xl font-bold text-[#caa74d] leading-none">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-body text-white/80 text-sm md:text-base mt-2">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">Top Recruiters</p>
            <div className="relative overflow-hidden rounded-xl border border-white/15 bg-white/5 py-4 max-w-full">
              <div className="recruiter-marquee-track">
                {[...recruiters, ...recruiters].map((company, index) => (
                  <div key={`${company.name}-${index}`} className="recruiter-logo-card" aria-hidden={index >= recruiters.length}>
                    <img src={getRecruiterLogoSrc(company.logo)} alt={company.name} className="h-10 w-auto object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <Link to="/placements">
                <Button className="bg-accent text-accent-foreground hover:bg-gold-light font-bold px-6 text-sm rounded-full shadow-lg">
                  Explore Placements
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlacementsSection;

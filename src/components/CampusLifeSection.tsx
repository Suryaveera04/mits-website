import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, FlaskConical, Sparkles, Dumbbell, Home, Building2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { campusLifeData } from "@/data/galleryData/campusLife";

// Map keys to their route and icon
const categoryConfig: Record<string, { href: string; icon: React.ComponentType<{ className?: string }> }> = {
  clubs: { href: "/campus-life/student-clubs", icon: Users },
  cultural: { href: "/campus-life/cultural-life", icon: Sparkles },
  sports: { href: "/sports", icon: Dumbbell },
  infrastructure: { href: "/infrastructure", icon: Building2 },
};

// Speed up image loading helper
const getLocalUrl = (url: string) => {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    const filename = encodeURIComponent(url.substring(url.lastIndexOf("/") + 1));
    return `${import.meta.env.BASE_URL}gallery/${filename}`;
  }
  if (url.startsWith("/gallery/")) {
    return `${import.meta.env.BASE_URL}${url.substring(1)}`;
  }
  if (url.startsWith("gallery/")) {
    return `${import.meta.env.BASE_URL}${url}`;
  }
  return url;
};

interface CampusLifeCategory {
  title: string;
  description: string;
  images: string[];
}

const SlideshowCard = ({ catKey, category }: { catKey: string; category: CampusLifeCategory }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const images = category.images;
  const config = categoryConfig[catKey];

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    // Rotate images every 5 seconds, randomized offset start to prevent all slides rotating simultaneously
    const startDelay = Math.random() * 2000;
    let timer: ReturnType<typeof setInterval>;
    
    const timeout = setTimeout(() => {
      timer = setInterval(() => {
        setImgIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (timer) clearInterval(timer);
    };
  }, [images]);

  const currentImage = images && images.length > 0 ? images[imgIndex] : "";

  return (
    <Link to={config.href} className="block w-full">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="relative h-[300px] md:h-[350px] w-full overflow-hidden rounded-2xl cursor-pointer group shadow-lg bg-slate-900"
      >
        {/* Background Image Slideshow */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={imgIndex}
              src={getLocalUrl(currentImage)}
              alt={category.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4000ms]"
              onContextMenu={(e) => e.preventDefault()}
            />
          </AnimatePresence>
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 group-hover:via-black/50 transition-all duration-500" />

        {/* Glass overlay on hover */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500" />

        {/* Card Border Highlight */}
        <div className="absolute inset-0 border border-white/10 group-hover:border-accent/40 rounded-2xl transition-colors duration-500" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end">
          {/* Header Stats */}
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 backdrop-blur-md flex items-center justify-center text-accent">
              {config.icon && <config.icon className="w-5 h-5" />}
            </div>
            <span className="text-accent font-bold text-sm tracking-wider uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/25">
              {category.stats}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-accent transition-colors">
            {category.title}
          </h3>

          {/* Short description */}
          <p className="text-white/70 text-sm leading-relaxed line-clamp-2 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 overflow-hidden transition-all duration-500">
            {category.description}
          </p>

          {/* Arrow / Explore Link */}
          <div className="mt-3 flex items-center gap-2 text-accent font-semibold text-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span>Explore Life</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const CampusLifeSection = () => {
  return (
    <section className="py-24 bg-navy-gradient relative overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/30 text-accent rounded-full text-sm font-bold tracking-widest uppercase mb-4">
              Life at MITS
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
              Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent">Campus Life</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Explore the vibrant student clubs, cultural celebrations, sports activities, and academic infrastructure.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid of Slideshow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(campusLifeData).map(([key, category], index) => (
            <ScrollReveal key={key} delay={index * 0.1}>
              <SlideshowCard catKey={key} category={category} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;

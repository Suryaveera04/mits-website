import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const images = [
  { src: `${BASE}gallery/mits-about-menu.jpg`, alt: "MITS Campus Aerial View", span: "md:col-span-2" },
  { src: `${BASE}gallery/circular block.JPG`, alt: "MITS Main Building", span: "" },
  { src: `${BASE}gallery/camp1.JPG`, alt: "Students in Campus", span: "" },
  { src: `${BASE}gallery/lib1.jpg`, alt: "MITS Library", span: "" },
  { src: `${BASE}gallery/seminar_hall_audience.jpg`, alt: "Campus Event", span: "md:col-span-2" },
];

const CampusGallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-[#b30000] font-body font-semibold tracking-[0.18em] uppercase text-sm md:text-sm mb-3">Campus Life</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4 leading-tight">Campus Gallery</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <ScrollReveal key={img.alt} delay={i * 0.1} className={img.span}>
              <div className="overflow-hidden rounded-xl group relative cursor-pointer">
                <img src={img.src} alt={img.alt} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/50 transition-all duration-300" />
              </div>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={images.length * 0.1}>
            <Link to="/gallery">
              <div className="overflow-hidden rounded-xl group relative cursor-pointer h-64 bg-gradient-to-br from-[#0f2a44] to-[#1a3d5c] flex items-center justify-center hover:from-[#b30000] hover:to-[#d40000] transition-all duration-500">
                <div className="text-center">
                  <p className="text-white font-display text-2xl md:text-3xl font-bold mb-2">View All</p>
                  <p className="text-white/80 font-body text-sm">Images →</p>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CampusGallery;

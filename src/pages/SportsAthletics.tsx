import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SportsFacilities from "@/components/SportsFacilities";

const BASE = import.meta.env.BASE_URL;

const SportsAthletics = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#fdfbf7] via-white to-white">
    <Header />
    <SEO title="Sports & Athletics | MITS Madanapalle" description="Explore the Department of Physical Education and Sports at MITS, including facilities, sports events, committees, gymnasium documents, and fitness initiatives." canonical="/sports-athletics" />
    <main>
      <section
        className="relative overflow-hidden pt-32 pb-24 md:pt-44"
        style={{
          backgroundImage: `url("${BASE}infrastructure/sports/ground-1.JPG")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ffd15c] sm:text-sm">Campus Infrastructure</p>
          <h1 className="font-display mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
            Sports &amp; <span className="text-[#ffd15c]">Athletics</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base font-normal leading-relaxed text-white/90 sm:text-lg md:text-xl">Promoting fitness, teamwork, sportsmanship, and athletic excellence across the MITS campus.</p>
        </div>
        <div className="absolute bottom-4 left-6 z-10 sm:left-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs text-white/80 sm:text-sm">
              <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
              <li className="text-white/50">›</li>
              <li><Link to="/infrastructure?tab=sports" className="transition-colors hover:text-white">Infrastructure</Link></li>
              <li className="text-white/50">›</li>
              <li className="font-semibold text-amber-300">Sports &amp; Athletics</li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="container mx-auto px-4 py-10 md:py-14"><div className="mx-auto max-w-6xl"><SportsFacilities /></div></section>
    </main>
    <Footer />
  </div>
);

export default SportsAthletics;

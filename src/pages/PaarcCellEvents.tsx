import { Sparkles } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

export default function PaarcCellEvents() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800">
      <Header />
      {/* HERO BANNER – simplified */}
      <section className="relative pt-32 md:pt-44 pb-20 overflow-hidden" style={{
        backgroundImage: `url("https://mits.edu/Hero-Section/image-5.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffd15c]" />
            Institutional Planning, Approvals &amp; Accreditations
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            PAARC Events
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Planning, Approvals, Accreditations, Rankings &amp; Certifications Cell • Madanapalle Institute of Technology &amp; Science (Deemed to be University)
          </p>
        </div>
        {/* BREADCRUMB */}
        <nav className="absolute bottom-4 left-6 md:left-12 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells &amp; Committees</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-medium">PAARC Events</li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTENT */}
      <section className="container mx-auto px-4 py-12">
        <ul className="list-disc pl-5 mb-4">
          <li className="text-lg font-bold">
            <Link
              to="https://mits.ac.in/assets/pdf/assoc/THE_Interdisciplinary_Science_Rankings_2027_MITS_Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              MITS International ranking “Times Higher Education (THE) Interdisciplinary Science Rankings 2027”
            </Link>
          </li>
          <li className="text-lg">
            <Link
              to="https://mits.ac.in/assets/pdf/assoc/MITS-Business%20Today%E2%80%93MDRA%20Best%20B-School%20Ranking%202026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Business Today–MDRA Best B-School Ranking 2026
            </Link>
          </li>
        </ul>

      </section>

      <Footer />
    </div>
  );
}

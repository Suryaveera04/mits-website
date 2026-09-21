import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AcademicsSection from "@/components/AcademicsSection";
import AdmissionHighlight from "@/components/AdmissionHighlight";
import NewsEventsSection from "@/components/NewsEventsSection";
import PlacementsSection from "@/components/PlacementsSection";
import RankingsSection from "@/components/RankingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CampusLifeSection from "@/components/CampusLifeSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FloatingAutonomousTab from "@/components/FloatingAutonomousTab";
import AdmissionModal from "@/components/AdmissionModal";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "name": "Madanapalle Institute of Technology & Science",
  "alternateName": "MITS Madanapalle",
  "url": "https://mits.ac.in",
  "logo": "https://ragupathi05.github.io/MITS-Design1/mits-logo.png",
  "description": "NAAC A+ accredited, UGC-recognised Deemed University in Andhra Pradesh offering B.Tech, M.Tech, MBA and MCA programmes.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Post Box No. 4, Angallu, Madanapalle-Kadiri Road, Kurabalakota Mandal",
    "addressLocality": "Madanapalle",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "517325",
    "addressCountry": "IN"
  },
  "telephone": "+91-7330803555",
  "email": "info@mits.ac.in",
  "sameAs": [
    "https://mits.ac.in",
    "https://www.facebook.com/MITSMadanapalle",
    "https://www.linkedin.com/school/madanapalle-institute-of-technology-science"
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="MITS Madanapalle – NAAC A+ Deemed University, Andhra Pradesh"
        description="Madanapalle Institute of Technology & Science – NAAC A+ accredited Deemed University in AP. B.Tech, M.Tech, MBA & MCA. 94% placement rate, 200+ recruiters."
        canonical="/"
        jsonLd={orgSchema}
      />
      <Header />
      {/* Spacer: mobile = h-16 (64px nav only), md = h-16+h-9 (100px), lg = h-20+h-9 (116px) */}
      <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />
      <main>
        <HeroSection />
        {/* Accent ticker bar */}
        <div className="relative z-10 bg-primary">
          <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-6 flex-wrap">
            {["NAAC A+ Accredited", "UGC Recognized", "AICTE Approved", "NBA Accredited", "NIRF Ranked"].map((label, i) => (
              <span key={label} className="flex items-center gap-2 text-sm font-semibold text-primary-foreground uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                {label}
                {i < 4 && <span className="w-px h-4 bg-primary-foreground/25 ml-4 hidden sm:block" />}
              </span>
            ))}
          </div>
          <div className="h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>
        <RankingsSection />
        <AboutSection />
        <AcademicsSection />
        <AdmissionHighlight />
        <PlacementsSection />
        <NewsEventsSection />
        <TestimonialsSection />
        <CampusLifeSection />
      </main>
      <FloatingAutonomousTab />
      <AdmissionModal />
      <Footer />
    </div>
  );
};

export default Index;

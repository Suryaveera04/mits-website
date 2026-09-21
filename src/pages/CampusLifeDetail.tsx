import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Home as HomeIcon, CheckCircle2, ArrowLeft, ArrowRight, X, ZoomIn, Maximize2, Minimize2, Calendar, FileText, ExternalLink, Download, Phone, MapPin, Mail, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { campusLifeData, CampusLifeCategory } from "@/data/galleryData/campusLife";
import StudentClubsSection from "@/components/StudentClubsSection";

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

interface CampusLifeDetailProps {
  categoryKey: "clubs" | "cultural" | "sports";
}

const CampusLifeDetail = ({ categoryKey }: CampusLifeDetailProps) => {
  const navigate = useNavigate();
  const category = campusLifeData[categoryKey];

  // Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselImages = category ? category.images.slice(0, 10) : []; // Use first 10 for carousel showcase

  useEffect(() => {
    if (carouselImages.length <= 1) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages]);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, lightboxIndex]);

  // Skeletons state for lazy loaded image grid
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Category Not Found</h2>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const { title, stats, description, highlights, images } = category;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setZoomLevel(1);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setIsFullscreen(false);
    setZoomLevel(1);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
    setZoomLevel(1);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(1);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1));
  };

  // Get related categories (excluding the current one)
  const relatedCategories = Object.entries(campusLifeData)
    .filter(([key]) => key !== categoryKey)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Spacer for navbar height */}
      <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-border py-4">
        <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1 font-medium">
            <HomeIcon className="w-4 h-4" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
          <Link to="/campus-life" className="hover:text-primary transition-colors font-medium">
            Campus Life
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
          <span className="text-foreground font-semibold">{title}</span>
        </div>
      </div>

      <main className="py-8 md:py-12">
        {categoryKey === "clubs" ? (
          <div className="container mx-auto px-4 mb-20">
            <StudentClubsSection />
          </div>
        ) : (
          <>
            {/* Category Hero Banner */}
            <div className="container mx-auto px-4 mb-16">
              <div className="relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-slate-950">
                {/* Background image */}
                <img
                  src={getLocalUrl(images[0])}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  onContextMenu={(e) => e.preventDefault()}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* Floating details overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="max-w-2xl">
                    <span className="inline-block px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-bold uppercase tracking-wider mb-3">
                      {stats}
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                      {title}
                    </h1>
                  </div>
                  <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 backdrop-blur-md font-semibold text-sm transition-all shrink-0 self-start md:self-end"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {categoryKey !== "clubs" && (
          <div className="container mx-auto px-4 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Description Block */}
              <div className="lg:col-span-7">
                <ScrollReveal>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                    About <span className="text-primary">{title}</span>
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {description}
                  </p>

                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Key Highlights & Activities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex gap-3 bg-slate-50 border border-border rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-[#b30000] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-700 leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Photo Carousel */}
              <div className="lg:col-span-5">
                <ScrollReveal delay={0.2}>
                  <div className="bg-slate-900 border border-white/10 rounded-3xl p-4 shadow-xl">
                    <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden">
                      <AnimatePresence mode="popLayout">
                        <motion.img
                          key={carouselIndex}
                          src={getLocalUrl(carouselImages[carouselIndex])}
                          alt="Carousel Slide"
                          initial={{ opacity: 0, scale: 1.03 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8 }}
                          className="w-full h-full object-cover"
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </AnimatePresence>

                      {/* Gradient bar at bottom */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex justify-between items-center text-white text-sm font-semibold">
                        <span>Showcase Image {carouselIndex + 1} of {carouselImages.length}</span>
                        <div className="flex gap-1.5">
                          {carouselImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCarouselIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                carouselIndex === idx ? "bg-accent" : "bg-white/40"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        )}

        {/* Media Grid / Gallery */}
        <div className="bg-slate-50 border-y border-border py-20 mb-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Photo Gallery
                </h2>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  Browse real photographs from the MITS campus life events and activities.
                </p>
              </div>
            </ScrollReveal>

            {/* Masonry-like dynamic photo grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((imgUrl, index) => (
                <ScrollReveal key={index} delay={index * 0.03}>
                  <div
                    onClick={() => openLightbox(index)}
                    className="relative overflow-hidden rounded-2xl cursor-pointer group shadow bg-slate-200 aspect-[4/3] w-full"
                  >
                    {/* Skeleton loader overlay */}
                    {!loadedImages[index] && (
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-shimmer" />
                    )}

                    <img
                      src={getLocalUrl(imgUrl)}
                      alt={`${title} event shot ${index + 1}`}
                      loading="lazy"
                      onLoad={() => setLoadedImages((prev) => ({ ...prev, [index]: true }))}
                      className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                        loadedImages[index] ? "opacity-100" : "opacity-0"
                      }`}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    
                    {/* Hover effects */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 border border-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all duration-300">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Related Categories Grid */}
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Explore More of MITS
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCategories.map(([key, item]) => (
              <ScrollReveal key={key}>
                <Link to={key === "infrastructure" ? "/infrastructure" : key === "sports" ? "/sports" : `/campus-life/${item.id}`} className="block group">
                  <div className="bg-white border border-border hover:border-primary/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={getLocalUrl(item.images[0])}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                      <div className="absolute top-4 left-4 bg-primary/95 text-white font-bold text-sm px-3 py-1 rounded-full uppercase tracking-wider">
                        {item.stats}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-primary text-sm font-bold">
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Lightbox modal with advanced image controls */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 select-none"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full flex items-center justify-center text-white transition-colors z-[10000]"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Top Toolbar Controls */}
            <div className="absolute top-6 left-6 flex gap-3 z-[10000]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoom();
                }}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full flex items-center justify-center text-white transition-colors"
                title="Zoom image"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full flex items-center justify-center text-white transition-colors"
                title="Toggle fullscreen"
              >
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </button>
            </div>

            {/* Left Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 z-[10000]"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 z-[10000]"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Image Container with Scale Zoom support */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-[85vw] max-h-[80vh] flex flex-col items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={getLocalUrl(images[lightboxIndex])}
                alt={`${title} large image`}
                animate={{ scale: zoomLevel }}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl transition-transform duration-200"
                style={{ cursor: zoomLevel > 1 ? "zoom-out" : "zoom-in" }}
                onClick={handleZoom}
                onContextMenu={(e) => e.preventDefault()}
              />
              
              {/* Bottom Image Counter & Details */}
              <div className="text-white text-center mt-6">
                <p className="text-lg font-bold tracking-wide">{title} Gallery</p>
                <p className="text-white/60 text-sm mt-1">
                  Image {lightboxIndex + 1} of {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CampusLifeDetail;

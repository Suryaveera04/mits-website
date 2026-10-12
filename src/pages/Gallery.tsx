import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, X, ZoomIn, Maximize2, Minimize2, Home, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

// Import raw image arrays from our data module
import {
  gallery1Images,
  gallery2Images,
  gallery3Images,
  gallery4Images,
  gallery5Images,
  gallery6Images,
  gallery7Images,
} from "@/data/galleryData";

const galleries = [
  { id: "gallery1", label: "Events", images: gallery1Images },
  { id: "gallery2", label: "Activities", images: [...gallery2Images, ...gallery5Images] },
  { id: "gallery3", label: "Labs", images: gallery3Images },
  { id: "gallery4", label: "Seminars", images: gallery4Images },
  { id: "gallery6", label: "IT & Power", images: gallery6Images },
  { id: "gallery7", label: "Campus", images: gallery7Images },
];

const getFriendlyTitle = (url: string) => {
  const filename = url.substring(url.lastIndexOf("/") + 1).split(".")[0];
  const decoded = decodeURIComponent(filename);
  
  if (decoded.toLowerCase().includes("ashv")) return "ASHV Cultural Festival";
  if (decoded.toLowerCase().includes("nss")) return "NSS Community Service";
  if (decoded.toLowerCase().includes("ncc")) return "NCC Cadet Activity";
  if (decoded.toLowerCase().includes("sports") || decoded.toLowerCase().includes("ground")) return "Sports Ground & Activities";
  if (decoded.toLowerCase().includes("gym")) return "Campus Gymnasium";
  if (decoded.toLowerCase().includes("lib") || decoded.toLowerCase().includes("library")) return "Central Library Facility";
  if (decoded.toLowerCase().includes("hostel")) return "Campus Residential Complex";
  if (decoded.toLowerCase().includes("mess")) return "Campus Dining Hall";
  if (decoded.toLowerCase().includes("canteen")) return "Campus Canteen Dining";
  if (decoded.toLowerCase().includes("seminar") || decoded.toLowerCase().includes("workshop")) return "Academic Seminar Hall";
  if (decoded.toLowerCase().includes("auditorium")) return "MITS Main Auditorium";
  if (decoded.toLowerCase().includes("block")) return `${decoded.replace(/[-_]/g, " ")} Block`;
  if (decoded.toLowerCase().startsWith("hl-")) return "Campus Life Activity";
  if (decoded.toLowerCase().includes("wifi")) return "Wi-Fi Hub & Connectivity";
  if (decoded.toLowerCase().includes("dji")) return "MITS Campus Aerial View";
  if (decoded.toLowerCase().includes("whatsapp image")) return "MITS Campus Event Activity";
  if (decoded.toLowerCase().includes("alumni")) return "Alumni Reunion Meet";
  
  return decoded.replace(/[-_]/g, " ").replace(/\d+/g, "").trim() || "MITS Campus Photograph";
};

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

const Gallery = () => {
  // Navigation & Active Gallery Tab
  const [activeTab, setActiveTab] = useState("gallery1");
  const activeGallery = galleries.find((g) => g.id === activeTab) || galleries[0];

  // Pagination for performance
  const [visibleCount, setVisibleCount] = useState(24);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Lazy load image tracking
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  // Reset pagination and skeletons on tab switch
  useEffect(() => {
    setVisibleCount(24);
    setLoadedImages({});
  }, [activeTab]);

  const imagesList = activeGallery.images;

  // Paginated list
  const paginatedImages = imagesList.slice(0, visibleCount);

  // Keyboard navigation inside Lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, lightboxIndex, imagesList]);

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
    setLightboxIndex((prev) => (prev + 1) % imagesList.length);
    setZoomLevel(1);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Spacer for navbar height */}
      <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-border py-4">
        <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1 font-medium">
            <Home className="w-4 h-4" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
          <span className="text-foreground font-semibold">Campus Gallery</span>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="bg-gradient-to-r from-[#0f2a44] to-[#1a3d5c] relative py-20 text-white overflow-hidden">
        {/* Decorative lights */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-accent/20 border border-accent/30 text-accent rounded-full text-sm font-bold tracking-widest uppercase mb-4">
              MITS Media Portal
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight">
              Campus Gallery
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Tabs Navigation (Renamed Shorter Sections) */}
      <section className="bg-white border-b border-border sticky top-[64px] lg:top-[80px] xl:top-[116px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center flex-wrap py-4 gap-2">
            {galleries.map((gal) => {
              const isActive = gal.id === activeTab;
              return (
                <button
                  key={gal.id}
                  onClick={() => setActiveTab(gal.id)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all border ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-md hover:bg-primary/95"
                      : "bg-slate-50 text-slate-600 border-border hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {gal.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Photo Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {imagesList.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 border border-dashed border-border rounded-3xl">
              <p className="text-muted-foreground text-lg mb-2">No photos found in this category.</p>
            </div>
          ) : (
            <>
              {/* Responsive Photo Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {paginatedImages.map((imgUrl, i) => {
                  const uniqueKey = `${activeTab}-${i}`;
                  return (
                    <ScrollReveal key={uniqueKey} delay={i * 0.015}>
                      <motion.div
                        whileHover={{ 
                          scale: 1.05, 
                          y: -6,
                          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        onClick={() => openLightbox(i)}
                        className="relative overflow-hidden rounded-2xl cursor-pointer shadow bg-slate-200 aspect-[4/3] w-full"
                      >
                        {/* Shimmer skeleton */}
                        {!loadedImages[uniqueKey] && (
                          <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-shimmer" />
                        )}

                        <img
                          src={getLocalUrl(imgUrl)}
                          alt="MITS Gallery"
                          loading="lazy"
                          onLoad={() => setLoadedImages((prev) => ({ ...prev, [uniqueKey]: true }))}
                          className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
                            loadedImages[uniqueKey] ? "opacity-100" : "opacity-0"
                          }`}
                          onContextMenu={(e) => e.preventDefault()}
                          draggable="false"
                        />
                      </motion.div>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Load More Button */}
              {visibleCount < imagesList.length && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 24)}
                    className="px-8 py-3.5 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                  >
                    Load More Images ({imagesList.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />

      {/* Lightbox with controls */}
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

            {/* Toolbar Buttons */}
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

            {/* Previous Control */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 z-[10000]"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            {/* Next Control */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 z-[10000]"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Frame */}
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
                src={getLocalUrl(imagesList[lightboxIndex])}
                alt={getFriendlyTitle(imagesList[lightboxIndex])}
                animate={{ scale: zoomLevel }}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl transition-transform duration-200"
                style={{ cursor: zoomLevel > 1 ? "zoom-out" : "zoom-in" }}
                onClick={handleZoom}
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />

              {/* Bottom details */}
              <div className="text-white text-center mt-4">
                <p className="text-white/60 text-sm">
                  Image {lightboxIndex + 1} of {imagesList.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

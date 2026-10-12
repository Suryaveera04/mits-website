import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Trophy, Bus, Heart, UtensilsCrossed, Library, Radio,
  Lightbulb, Monitor, MessageSquare, Wifi, ChevronLeft, ChevronRight,
  ZoomIn, X, ExternalLink, MapPin, ClipboardList, FileText, CheckCircle2, Info,
  Server, ShieldCheck, Laptop, Network, HardDrive, Cpu, Cloud, Globe, Lock,
  Home, Sparkles, ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const BASE = import.meta.env.BASE_URL;

// ─── Full-Bleed Layout Container (Matching International Relations) ───────────
const WIDE = "w-full max-w-[1900px] mx-auto px-3 sm:px-6 lg:px-10 xl:px-16";

// ─── Palette ────────────────────────────────────────────────────────────────
const DARK_NAVY   = "#0f2a44";
const MITS_RED    = "#b30000";
const GOLD        = "#caa74d";
const SLATE       = "#475569";
const BORDER      = "#e2e8f0";

// ─── Distinct Tab Themes per Facility (Selected by User) ────────────────────
const TAB_THEMES: Record<
  string,
  {
    solid: string;
    soft: string;
    text: string;
    ring: string;
    glow: string;
    badge: string;
    border: string;
    gradient: string;
  }
> = {
  sports: {
    solid: "bg-emerald-600",
    soft: "bg-emerald-50",
    text: "text-emerald-700",
    ring: "ring-emerald-400/40",
    glow: "shadow-[0_8px_25px_-5px_rgba(5,150,105,0.45)]",
    badge: "bg-emerald-100 text-emerald-800",
    border: "border-emerald-200",
    gradient: "from-emerald-600 to-teal-700",
  },
  transport: {
    solid: "bg-amber-600",
    soft: "bg-amber-50",
    text: "text-amber-700",
    ring: "ring-amber-400/40",
    glow: "shadow-[0_8px_25px_-5px_rgba(217,119,6,0.45)]",
    badge: "bg-amber-100 text-amber-800",
    border: "border-amber-200",
    gradient: "from-amber-600 to-orange-700",
  },
  dispensary: {
    solid: "bg-rose-600",
    soft: "bg-rose-50",
    text: "text-rose-700",
    ring: "ring-rose-400/40",
    glow: "shadow-[0_8px_25px_-5px_rgba(225,29,72,0.45)]",
    badge: "bg-rose-100 text-rose-800",
    border: "border-rose-200",
    gradient: "from-rose-600 to-red-700",
  },
  canteen: {
    solid: "bg-orange-600",
    soft: "bg-orange-50",
    text: "text-orange-700",
    ring: "ring-orange-400/40",
    glow: "shadow-[0_8px_25px_-5px_rgba(234,88,12,0.45)]",
    badge: "bg-orange-100 text-orange-800",
    border: "border-orange-200",
    gradient: "from-orange-600 to-amber-700",
  },
  wifi: {
    solid: "bg-sky-600",
    soft: "bg-sky-50",
    text: "text-sky-700",
    ring: "ring-sky-400/40",
    glow: "shadow-[0_8px_25px_-5px_rgba(2,132,199,0.45)]",
    badge: "bg-sky-100 text-sky-800",
    border: "border-sky-200",
    gradient: "from-sky-600 to-blue-700",
  },
  library: {
    solid: "bg-[#0f2a44]",
    soft: "bg-[#0f2a44]/10",
    text: "text-[#0f2a44]",
    ring: "ring-[#0f2a44]/30",
    glow: "shadow-[0_8px_25px_-5px_rgba(15,42,68,0.5)]",
    badge: "bg-[#0f2a44]/15 text-[#0f2a44]",
    border: "border-slate-300",
    gradient: "from-[#0f2a44] to-[#caa74d]",
  },
  "digital-library": {
    solid: "bg-purple-600",
    soft: "bg-purple-50",
    text: "text-purple-700",
    ring: "ring-purple-400/40",
    glow: "shadow-[0_8px_25px_-5px_rgba(147,51,234,0.45)]",
    badge: "bg-purple-100 text-purple-800",
    border: "border-purple-200",
    gradient: "from-purple-600 to-indigo-700",
  },
  radio: {
    solid: "bg-pink-600",
    soft: "bg-pink-50",
    text: "text-pink-700",
    ring: "ring-pink-400/40",
    glow: "shadow-[0_8px_25px_-5px_rgba(219,39,119,0.45)]",
    badge: "bg-pink-100 text-pink-800",
    border: "border-pink-200",
    gradient: "from-pink-600 to-rose-700",
  },
  "aicte-idea": {
    solid: "bg-indigo-600",
    soft: "bg-indigo-50",
    text: "text-indigo-700",
    ring: "ring-indigo-400/40",
    glow: "shadow-[0_8px_25px_-5px_rgba(79,70,229,0.45)]",
    badge: "bg-indigo-100 text-indigo-800",
    border: "border-indigo-200",
    gradient: "from-indigo-600 to-violet-700",
  },
  computer: {
    solid: "bg-blue-600",
    soft: "bg-blue-50",
    text: "text-blue-700",
    ring: "ring-blue-400/40",
    glow: "shadow-[0_8px_25px_-5px_rgba(37,99,235,0.45)]",
    badge: "bg-blue-100 text-blue-800",
    border: "border-blue-200",
    gradient: "from-blue-600 to-cyan-700",
  },
  "comm-lab": {
    solid: "bg-teal-600",
    soft: "bg-teal-50",
    text: "text-teal-700",
    ring: "ring-teal-400/40",
    glow: "shadow-[0_8px_25px_-5px_rgba(13,148,136,0.45)]",
    badge: "bg-teal-100 text-teal-800",
    border: "border-teal-200",
    gradient: "from-teal-600 to-emerald-700",
  },
};

// ─── Hero Key Metrics (Professional Sans-Serif) ──────────────────────────────
const heroStats = [
  { label: "Campus Sprawl", value: "26.17+ Acres" },
  { label: "Fleet Transport", value: "40+ Buses & Cars" },
  { label: "Computing Workstations", value: "2,095+ Desktops" },
  { label: "High-Speed Wi-Fi & IT", value: "2 Gbps Bandwidth" },
];

// ─── Animated Stat Counter (Professional Clean Sans-Serif Font) ─────────────
const AnimatedStat = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const match = value.match(/^([\d,.]+)(.*)$/);
  const numericStr = match ? match[1].replace(/,/g, "") : "0";
  const target = parseFloat(numericStr) || 0;
  const isFloat = numericStr.includes(".");
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1100;
    const stepMs = 18;
    const steps = Math.max(1, Math.round(duration / stepMs));
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step += 1;
      current += increment;
      if (step >= steps) {
        setDisplay(target);
        clearInterval(timer);
      } else {
        setDisplay(current);
      }
    }, stepMs);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center py-2 px-3">
      <div
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0f2a44] font-sans [font-family:var(--font-body)]"
      >
        {isFloat ? display.toFixed(2) : Math.floor(display).toLocaleString()}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1.5 font-sans [font-family:var(--font-body)]">
        {label}
      </div>
    </div>
  );
};

// ─── Campus Detail Images (hero per section) ────────────────────────────────
const campusImages: Record<string, string> = {
  sports:         `${BASE}infrastructure/sports/ground-1.JPG`,
  transport:      `${BASE}infrastructure/transport/transport-1.JPG`,
  dispensary:     `${BASE}infrastructure/dispensary/dispensary-1.JPG`,
  canteen:        `${BASE}infrastructure/canteen/canteen-1.JPG`,
  wifi:           `${BASE}gallery/wifi1.jpg`,
  library:        `${BASE}infrastructure/library/library-1.webp`,
  "digital-library": `${BASE}infrastructure/labs-library/lab-9.JPG`,
  radio:          `${BASE}infrastructure/radio-station/radio-1.JPG`,
  "aicte-idea":   `${BASE}infrastructure/aicte-lab/aicte-1.JPG`,
  computer:       `${BASE}infrastructure/labs-library/lab-1.JPG`,
  "comm-lab":     `${BASE}infrastructure/labs-library/lab-7.JPG`,
  hero:           `${BASE}gallery/main entrance.JPG`,
};

// ─── Gallery Images per Section ─────────────────────────────────────────────
const galleryImages: Record<string, { src: string; alt: string }[]> = {
  sports: [
    { src: `${BASE}infrastructure/sports/ground-1.JPG`, alt: "Sports Ground - View 1" },
    { src: `${BASE}infrastructure/sports/ground-2.JPG`, alt: "Sports Ground - View 2" },
    { src: `${BASE}infrastructure/sports/sports-1.jpg`, alt: "Sports Activities" },
    { src: `${BASE}infrastructure/sports/sports-2.JPG`, alt: "Sports Facilities" },
    { src: `${BASE}infrastructure/sports/sports-3.JPG`, alt: "Athletic Track" },
    { src: `${BASE}infrastructure/sports/sports-4.JPG`, alt: "Outdoor Sports" },
    { src: `${BASE}infrastructure/gym/gym-1.JPG`, alt: "Gymnasium - View 1" },
    { src: `${BASE}infrastructure/gym/gym-2.JPG`, alt: "Gymnasium Equipment" },
    { src: `${BASE}infrastructure/gym/gym-3.JPG`, alt: "Indoor Gym" },
    { src: `${BASE}infrastructure/gym/gym-4.JPG`, alt: "Fitness Center" },
    { src: `${BASE}infrastructure/gym/gym-5.JPG`, alt: "Gym Training Area" },
  ],
  transport: [
    { src: `${BASE}infrastructure/transport/transport-1.JPG`, alt: "Transport Fleet - View 1" },
    { src: `${BASE}infrastructure/transport/transport-2.JPG`, alt: "Transport Fleet - View 2" },
    { src: `${BASE}infrastructure/transport/transport-3.JPG`, alt: "College Buses" },
    { src: `${BASE}infrastructure/transport/transport-4.JPG`, alt: "Bus Parking Area" },
    { src: `${BASE}infrastructure/transport/transport-5.JPG`, alt: "Transport Facilities" },
  ],
  dispensary: [
    { src: `${BASE}infrastructure/dispensary/dispensary-1.JPG`, alt: "Dispensary - Main Entrance" },
    { src: `${BASE}infrastructure/dispensary/dispensary-2.JPG`, alt: "Medical Facility" },
    { src: `${BASE}infrastructure/dispensary/dispensary-3.JPG`, alt: "Consultation Room" },
    { src: `${BASE}infrastructure/dispensary/dispensary-4.JPG`, alt: "Health Center" },
    { src: `${BASE}infrastructure/dispensary/dispensary-5.JPG`, alt: "Medical Equipment" },
  ],
  canteen: [
    { src: `${BASE}infrastructure/canteen/canteen-1.JPG`, alt: "Canteen - Main Hall" },
    { src: `${BASE}infrastructure/canteen/canteen-2.JPG`, alt: "Dining Area" },
    { src: `${BASE}infrastructure/canteen/canteen-3.JPG`, alt: "Food Court" },
    { src: `${BASE}infrastructure/canteen/canteen-4.JPG`, alt: "Kitchen Facilities" },
    { src: `${BASE}infrastructure/canteen/canteen-5.JPG`, alt: "Seating Area" },
  ],
  wifi: [
    { src: `${BASE}gallery/wifi1.jpg`, alt: "Wi-Fi Router Setup" },
    { src: `${BASE}gallery/wifi2.jpg`, alt: "Network Server Rack" },
    { src: `${BASE}gallery/wifi3.jpg`, alt: "Server Room Panel" },
    { src: `${BASE}gallery/biometric authentication.jpg`, alt: "Biometric Authentication" },
    { src: `${BASE}gallery/camera.jpg`, alt: "CCTV Security camera" },
    { src: `${BASE}gallery/camera2.jpg`, alt: "CCTV Security System" },
  ],
  library: [
    { src: `${BASE}infrastructure/library/library-1.webp`, alt: "Central Library - Main Hall" },
    { src: `${BASE}infrastructure/library/library-2.webp`, alt: "Reading Section" },
    { src: `${BASE}infrastructure/library/library-3.webp`, alt: "Book Collection" },
    { src: `${BASE}infrastructure/library/library-4.webp`, alt: "Library Interior" },
    { src: `${BASE}infrastructure/labs-library/library-photo.JPG`, alt: "Library Overview" },
  ],
  "digital-library": [
    { src: `${BASE}infrastructure/labs-library/lab-9.JPG`, alt: "Digital Library - Terminals" },
    { src: `${BASE}infrastructure/labs-library/lab-10.JPG`, alt: "Digital Resource Center" },
    { src: `${BASE}infrastructure/labs-library/lab-11.JPG`, alt: "E-Library Section" },
    { src: `${BASE}infrastructure/labs-library/lab-12.JPG`, alt: "Digital Access Area" },
  ],
  radio: [
    { src: `${BASE}infrastructure/radio-station/radio-1.JPG`, alt: "Radio Station - Studio" },
    { src: `${BASE}infrastructure/radio-station/radio-2.JPG`, alt: "Broadcasting Setup" },
    { src: `${BASE}infrastructure/radio-station/radio-3.JPG`, alt: "Recording Equipment" },
    { src: `${BASE}infrastructure/radio-station/radio-4.JPG`, alt: "Radio Control Room" },
    { src: `${BASE}infrastructure/radio-station/radio-5.JPG`, alt: "On-Air Studio" },
  ],
  "aicte-idea": [
    { src: `${BASE}infrastructure/aicte-lab/aicte-1.JPG`, alt: "AICTE Idea Lab - Overview" },
    { src: `${BASE}infrastructure/aicte-lab/aicte-2.JPG`, alt: "Innovation Hub" },
    { src: `${BASE}infrastructure/aicte-lab/aicte-3.JPG`, alt: "Prototyping Area" },
    { src: `${BASE}infrastructure/aicte-lab/aicte-4.JPG`, alt: "3D Printing Station" },
    { src: `${BASE}infrastructure/aicte-lab/aicte-5.JPG`, alt: "Workshop Space" },
  ],
  computer: [
    { src: `${BASE}infrastructure/labs-library/lab-1.JPG`, alt: "Computer Lab - View 1" },
    { src: `${BASE}infrastructure/labs-library/lab-2.JPG`, alt: "Computer Lab - View 2" },
    { src: `${BASE}infrastructure/labs-library/lab-3.JPG`, alt: "High-Performance Computing" },
    { src: `${BASE}infrastructure/labs-library/lab-4.JPG`, alt: "Server Room" },
    { src: `${BASE}infrastructure/labs-library/lab-5.JPG`, alt: "Computing Infrastructure" },
    { src: `${BASE}infrastructure/labs-library/lab-6.JPG`, alt: "Lab Equipment" },
  ],
  "comm-lab": [
    { src: `${BASE}infrastructure/labs-library/lab-7.JPG`, alt: "Communication Lab - View 1" },
    { src: `${BASE}infrastructure/labs-library/lab-8.JPG`, alt: "Language Lab Terminals" },
    { src: `${BASE}infrastructure/labs-library/lab-13.JPG`, alt: "Communication Skills Lab" },
    { src: `${BASE}infrastructure/labs-library/lab-14.JPG`, alt: "Practice Room" },
  ],
};

// ─── Facilities Data ─────────────────────────────────────────────────────────
const infrastructureItems: {
  key: string;
  label: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
}[] = [
  {
    key: "sports",
    label: "Sports",
    icon: Trophy,
    title: "Sports & Athletics",
    desc: "MITS offers world-class sports infrastructure to promote physical fitness and competitive spirit among students.",
    points: [
      "Cricket ground with practice nets and pavilion",
      "Football, volleyball, and basketball courts",
      "Badminton and table tennis halls",
      "Athletics track and field facilities",
      "Indoor gymnasium with modern equipment",
      "Annual sports meet and inter-collegiate tournaments",
    ],
  },
  {
    key: "transport",
    label: "Transport",
    icon: Bus,
    title: "Transport Facilities",
    desc: "The Transport Division ensures the smooth operation of vehicles for students and staff travelling to and from MITS, Angallu.",
    points: [
      "Fleet of 35 buses and 20 cars for students and staff",
      "Regular services to eight towns in the surrounding region",
      "Additional town-corner services available on demand",
      "Seats allotted annually through a transport application",
      "Separate transport identity cards for enrolled students",
      "Dedicated student and staff transport services",
    ],
  },
  {
    key: "dispensary",
    label: "Dispensary",
    icon: Heart,
    title: "Health & Dispensary",
    desc: "A fully equipped on-campus dispensary ensures the health and well-being of all students and staff.",
    points: [
      "24/7 medical assistance on campus",
      "Qualified doctors and nursing staff",
      "First aid and emergency care facilities",
      "Tie-ups with nearby hospitals for referrals",
      "Regular health check-up camps",
      "Mental health and counseling support",
    ],
  },
  {
    key: "canteen",
    label: "Canteen",
    icon: UtensilsCrossed,
    title: "Canteen & Dining",
    desc: "Hygienic and affordable food services are available across the campus to cater to diverse tastes.",
    points: [
      "Main canteen with seating capacity of 500+",
      "Multiple food stalls across campus",
      "Vegetarian and non-vegetarian options",
      "Hygienic food preparation with regular audits",
      "Affordable meal plans and snacks for students",
      "Special dietary options available on request",
    ],
  },
  {
    key: "wifi",
    label: "Wi-Fi",
    icon: Wifi,
    title: "Wi-Fi & Connectivity",
    desc: "High-speed 2 Gbps internet connectivity, CISCO Meraki MX450 firewall security, and 192 Ruckus R650 Wi-Fi 6 access points provide robust, uninterrupted digital infrastructure across the campus.",
    points: [
      "Dedicated 2 Gbps symmetric high-speed internet bandwidth with NKN connectivity",
      "192 Ruckus R650 enterprise Wi-Fi 6 access points across all academic & hostel blocks",
      "Enterprise perimeter security powered by CISCO Meraki MX450 Next-Gen Firewall",
      "Network infrastructure supporting 2,095 desktops (832 Circular Block + 1,263 Departments)",
      "Dedicated institutional fleet of 80 laptops for faculty mobility and digital seminars",
      "Enterprise server farm with 6 Dell PowerEdge physical servers and 2 dedicated cloud servers (IMS & Moodle)",
    ],
  },
  {
    key: "library",
    label: "Library",
    icon: Library,
    title: "Central Library",
    desc: "The MITS Central Library is a knowledge hub with an extensive collection of books, journals, and digital resources.",
    points: [
      "50,000+ volumes across all disciplines",
      "Subscriptions to 100+ national and international journals",
      "Spacious reading halls with seating for 400+ students",
      "Separate sections for reference, periodicals, and thesis",
      "OPAC (Online Public Access Catalogue) system",
      "Extended library hours during examination periods",
    ],
  },
  {
    key: "digital-library",
    label: "Digital Library",
    icon: Monitor,
    title: "Digital Library",
    desc: "The Digital Library provides access to a vast repository of e-resources, online databases, and research tools.",
    points: [
      "Access to NPTEL, DELNET, and INFLIBNET N-LIST",
      "IEEE, Springer, Elsevier, and Scopus database access",
      "E-books and e-journals across all disciplines",
      "Dedicated digital library lab with 100+ terminals",
      "Remote access for students and faculty",
      "Plagiarism detection tools (Turnitin/iThenticate)",
    ],
  },
  {
    key: "radio",
    label: "Radio Station",
    icon: Radio,
    title: "Campus Radio Station",
    desc: "MITS operates a vibrant campus radio station that serves as a creative and communicative platform for students.",
    points: [
      "Licensed FM community radio station",
      "Student-run programming and content creation",
      "Broadcasts news, music, and educational content",
      "Platform for developing communication and media skills",
      "Regular shows on campus events and achievements",
      "Training in audio production and broadcasting",
    ],
  },
  {
    key: "aicte-idea",
    label: "AICTE Idea Lab",
    icon: Lightbulb,
    title: "AICTE Idea Lab",
    desc: "The AICTE Idea Lab at MITS is a state-of-the-art innovation hub that fosters creativity, prototyping, and entrepreneurship.",
    points: [
      "Equipped with 3D printers, laser cutters, and CNC machines",
      "Electronics prototyping and IoT development kits",
      "Dedicated space for student startups and projects",
      "Workshops on design thinking and innovation",
      "Collaboration with AICTE's national innovation network",
      "Mentorship from industry experts and entrepreneurs",
    ],
  },
  {
    key: "computer",
    label: "Computer Infrastructure",
    icon: Monitor,
    title: "Computer Infrastructure",
    desc: "MITS maintains cutting-edge computing infrastructure with 2,095 networked desktop workstations, 80 institutional laptops, and 8 enterprise servers.",
    points: [
      "2,095 networked desktop workstations across campus",
      "832 high-performance systems in Circular Block Central Computing Center",
      "1,263 systems equipped across all departmental laboratories",
      "80 dedicated institutional laptops for faculty & mobility",
      "8 enterprise servers (Dell PowerEdge R740, R730, R710 & Cloud Servers)",
      "High-speed 2 Gbps internet and Cisco Meraki MX450 firewall security",
    ],
  },
  {
    key: "comm-lab",
    label: "Communication Lab",
    icon: MessageSquare,
    title: "Communication Lab",
    desc: "The Communication Lab at MITS is designed to enhance the language, presentation, and interpersonal skills of students.",
    points: [
      "State-of-the-art language lab with 60+ terminals",
      "Software for pronunciation, listening, and speaking practice",
      "Group discussion and debate practice rooms",
      "Regular workshops on business communication",
      "Mock interview and presentation training sessions",
      "English proficiency programs for all students",
    ],
  },
];

// ─── Image Gallery Carousel (Widescreen Full-Width) ─────────────────────────
const ImageGallery = ({
  images,
  sectionTitle,
}: {
  images: { src: string; alt: string }[];
  sectionTitle: string;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [images]);

  const scrollToSlide = useCallback((idx: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.children;
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setCurrentSlide(idx);
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current || isDragging) return;
    const container = scrollRef.current;
    const cards = Array.from(container.children) as HTMLElement[];
    if (cards.length === 0) return;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    let closestIdx = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(containerCenter - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });
    setCurrentSlide(closestIdx);
  }, [isDragging]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setLightboxIdx((p) => Math.max(0, p - 1));
      if (e.key === "ArrowRight") setLightboxIdx((p) => Math.min(images.length - 1, p + 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-sm">
        {/* Header */}
        <div className="px-6 md:px-8 py-4 border-b border-slate-100 flex items-center justify-between gap-3 bg-slate-50/60">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-4 h-4 text-[#caa74d]" />
            <h3 className="font-bold text-sm md:text-base text-slate-800 font-sans [font-family:var(--font-body)]">
              Photo &amp; Facility Gallery
            </h3>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full font-sans">
            {images.length} Photos
          </span>
        </div>

        {/* Carousel */}
        <div className="relative p-4 md:p-6 group/gallery">
          {/* Left arrow */}
          {currentSlide > 0 && (
            <button
              onClick={() => scrollToSlide(currentSlide - 1)}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md shadow-lg transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right arrow */}
          {currentSlide < images.length - 1 && (
            <button
              onClick={() => scrollToSlide(currentSlide + 1)}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md shadow-lg transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Scrollable image strip */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            className="flex gap-4 overflow-x-auto scroll-smooth py-1 px-1 scrollbar-none"
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
            }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => openLightbox(i)}
                className="shrink-0 relative group rounded-2xl overflow-hidden shadow-sm border border-slate-200/70 hover:shadow-md transition-all duration-300 w-[85%] sm:w-[48%] lg:w-[32%] aspect-[16/10] bg-slate-100 cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  draggable={false}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center justify-between w-full text-white">
                    <p className="text-xs md:text-sm font-medium line-clamp-1 font-sans">{img.alt}</p>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#caa74d] text-slate-900 shrink-0 ml-2">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Active indicator bar */}
                {i === currentSlide && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f2a44] via-[#caa74d] to-[#b30000]" />
                )}
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-4">
            {images.map((_, i) => {
              const on = i === currentSlide;
              return (
                <button
                  key={i}
                  onClick={() => scrollToSlide(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-200 cursor-pointer",
                    on ? "w-6 bg-[#0f2a44]" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  )}
                  aria-label={`Go to image ${i + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-all z-10"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute top-6 left-6 text-white/80 text-xs sm:text-sm font-semibold z-10 font-sans">
            {lightboxIdx + 1} / {images.length} — {sectionTitle}
          </div>

          {lightboxIdx > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx((p) => p - 1);
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/25 text-white cursor-pointer transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {lightboxIdx < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx((p) => p + 1);
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/25 text-white cursor-pointer transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div className="max-w-[92vw] max-h-[82vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightboxIdx].src}
              alt={images[lightboxIdx].alt}
              className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 text-sm font-medium z-10 text-center px-4 font-sans">
            {images[lightboxIdx].alt}
          </div>

          <div
            className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 z-10 max-w-[90vw] overflow-x-auto py-2 px-3 scrollbar-none"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIdx(i)}
                className={cn(
                  "shrink-0 rounded-lg overflow-hidden transition-all cursor-pointer w-12 h-9",
                  i === lightboxIdx ? "ring-2 ring-[#caa74d] opacity-100" : "opacity-40 hover:opacity-80"
                )}
              >
                <img src={img.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

// ─── Transport Information Component ─────────────────────────────────────────
const transportRoutes = ["Madanapalle", "Punganur", "Kalikiri", "Vayalpadu", "Rayachoti", "Kadiri", "B-Kothakota", "Pileru"];

const parentInstructions = [
  "The college reserves the right to modify, merge, or cancel any proposed route without assigning a reason.",
  "Seats are allotted for each academic year on a first-come, first-served basis through an application.",
  "New routes or buses are introduced subject to student strength and bus availability; the institute's decision is final.",
  "Requests for route extensions, diversions, or additional stops will not be considered for existing routes.",
  "Suggestions, requests, and complaints must be raised only with the Transport Manager or Principal. Arguing with faculty in-charges or drivers can lead to cancellation of the facility.",
];

const studentInstructions = [
  "Carry both college and transport identity cards and present them whenever requested by the faculty in-charge or driver.",
  "Seats are allotted for each academic year on a first-come, first-served basis through an application.",
  "Ragging and indecent behaviour on buses are strictly prohibited.",
  "Be at the assigned bus stop 10 minutes before the scheduled time. Chasing a bus or forcing the driver to stop is not permitted.",
  "Do not use mobile-phone or iPod loudspeakers in the bus; clapping, whistling, shouting, and abusive language are prohibited.",
  "Do not keep hands or any other body parts outside the windows. Boys and girls must occupy separate seats.",
  "Do not argue with faculty in-charges or drivers. All complaints must be submitted in writing to the Transport Department, MITS.",
  "Damage to seats, window glass, or other bus components, including writing on the bus, will be charged at double the cost.",
  "Deboard immediately upon reaching the college and board again only after 4:00 pm.",
  "Do not leave bags, books, drafters, or other belongings on buses. The Transport Department is not responsible for loss of belongings.",
  "In case of a breakdown, follow the in-charge's or driver's instructions and make your own arrangements if an alternative is not provided.",
];

const transportDocuments = [
  { label: "Annexure 2: Route Time-table", href: "https://mits.ac.in/public/uploads/facilites/STUDENTS.pdf" },
  { label: "Annexure: Staff Special Buses", href: "https://mits.ac.in/public/uploads/facilites/STAFF.pdf" },
  { label: "Transport Request Form", href: "https://mits.ac.in/public/uploads/facilites/transportindent.pdf" },
  { label: "Application for Bus Pass", href: "https://mits.ac.in/public/uploads/facilites/Bus%20Pass%20Application%20format%20%281%29%20%281%29.pdf" },
  { label: "Transport Committee", href: "https://mits.ac.in/public/uploads/facilites/transportcommittee-2024.pdf" },
];

const GuidanceCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-2xl border p-5 md:p-6 bg-white" style={{ borderColor: BORDER }}>
    <h4 className="mb-3.5 font-sans font-bold text-base text-[#0f2a44] [font-family:var(--font-body)]">{title}</h4>
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-xs md:text-sm leading-relaxed text-slate-600 font-sans">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: GOLD }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const TransportInformation = () => (
  <section className="overflow-hidden rounded-2xl md:rounded-3xl border bg-white shadow-sm font-sans" style={{ borderColor: BORDER }}>
    <div className="border-b px-6 py-5 md:px-8" style={{ borderColor: BORDER, background: `linear-gradient(90deg, rgba(15,42,68,0.03), transparent)` }}>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
          <Bus className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-sans font-bold text-lg md:text-xl [font-family:var(--font-body)]" style={{ color: DARK_NAVY }}>
            Transport &amp; Bus Fleet Operations
          </h3>
          <p className="text-xs md:text-sm text-slate-500 font-sans">
            Network coverage, towns, guidance, rules, and application documents
          </p>
        </div>
      </div>
    </div>

    <div className="space-y-7 p-6 md:p-8">
      <div className="rounded-2xl border p-5 bg-gradient-to-r from-amber-50/70 via-amber-50/30 to-white" style={{ borderColor: `${GOLD}55` }}>
        <p className="text-sm md:text-base font-semibold leading-relaxed font-sans" style={{ color: DARK_NAVY }}>
          MITS - Deemed to be University operates an extensive fleet of 35 dedicated buses and 20 institutional cars to transport students and faculty members across Rayalaseema to and from the campus at Angallu.
        </p>
      </div>

      {/* Routes Grid */}
      <div>
        <div className="mb-3.5 flex items-center gap-2">
          <MapPin className="h-4 w-4" style={{ color: MITS_RED }} />
          <h4 className="font-sans font-bold text-base [font-family:var(--font-body)]" style={{ color: DARK_NAVY }}>
            Operational Route Network (8 Regional Towns)
          </h4>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {transportRoutes.map((route) => (
            <div
              key={route}
              className="rounded-xl border bg-slate-50/80 hover:bg-white hover:border-[#caa74d] hover:shadow-xs px-4 py-3 text-center text-sm font-bold text-slate-800 transition-all font-sans"
              style={{ borderColor: BORDER }}
            >
              {route}
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-slate-500 font-sans">
          * Additional town-corner and pickup shuttle services are regularly provisioned on student demand basis.
        </p>
      </div>

      {/* Instructions */}
      <div className="grid gap-6 lg:grid-cols-2">
        <GuidanceCard title="Instructions to Parents" items={parentInstructions} />
        <GuidanceCard title="Instructions to Students" items={studentInstructions} />
      </div>

      {/* Note Callout */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50/90 px-5 py-4">
        <div className="flex gap-3">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
          <p className="text-xs md:text-sm leading-relaxed text-amber-900 font-sans">
            <span className="font-bold">Important Notice:</span> Students must carry their valid transport ID card at all times and adhere to safe conduct. Any indiscipline or violation of guidelines may lead to immediate revocation of bus privileges.
          </p>
        </div>
      </div>

      {/* Application & Documents */}
      <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <div className="rounded-2xl border p-5 md:p-6" style={{ borderColor: BORDER }}>
          <div className="mb-3.5 flex items-center gap-2">
            <ClipboardList className="h-4 w-4" style={{ color: MITS_RED }} />
            <h4 className="font-sans font-bold text-base [font-family:var(--font-body)]" style={{ color: DARK_NAVY }}>
              How to Apply for Bus Pass
            </h4>
          </div>
          <ol className="space-y-3 text-xs md:text-sm leading-relaxed text-slate-600 font-sans">
            <li className="flex gap-2.5">
              <span className="font-bold text-sm" style={{ color: MITS_RED }}>01</span>
              <span>Submit the completed application form to the In-charge, Students Transport Facility, accompanied by two passport-size photographs.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="font-bold text-sm" style={{ color: MITS_RED }}>02</span>
              <span>Upon seat confirmation and fee verification, an official personalized Transport Identity Card is issued.</span>
            </li>
          </ol>
        </div>

        <div className="rounded-2xl border p-5 md:p-6" style={{ borderColor: BORDER }}>
          <div className="mb-3.5 flex items-center gap-2">
            <FileText className="h-4 w-4" style={{ color: MITS_RED }} />
            <h4 className="font-sans font-bold text-base [font-family:var(--font-body)]" style={{ color: DARK_NAVY }}>
              Transport Documents &amp; Time-Tables
            </h4>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {transportDocuments.map((doc) => (
              <a
                key={doc.label}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-2 rounded-xl border bg-slate-50/80 px-3.5 py-3 text-xs font-semibold text-slate-700 hover:bg-[#0f2a44] hover:text-white hover:border-[#0f2a44] transition-all font-sans"
                style={{ borderColor: BORDER }}
              >
                <span>{doc.label}</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Wi-Fi & IT Infrastructure Detailed Specs ────────────────────────────────
const wifiOverviewMetrics = [
  { label: "Total Bandwidth", value: "2 Gbps", sub: "Dedicated Leased Line & NKN", badge: "Symmetric Speed", icon: Globe, color: "#0070f3" },
  { label: "Enterprise Firewall", value: "Meraki MX450", sub: "CISCO Security & SD-WAN Appliance", badge: "Next-Gen Defense", icon: ShieldCheck, color: MITS_RED },
  { label: "Wi-Fi Access Points", value: "192 APs", sub: "Ruckus R650 Enterprise Wi-Fi 6", badge: "100% Coverage", icon: Wifi, color: GOLD },
  { label: "Total Desktops", value: "2,095", sub: "832 Circular + 1,263 Dept Labs", badge: "Gigabit LAN", icon: Monitor, color: DARK_NAVY },
  { label: "Institutional Laptops", value: "80 Units", sub: "Academic & Administrative Mobility", badge: "Portable Fleet", icon: Laptop, color: "#10b981" },
  { label: "Core Servers", value: "8 Servers", sub: "6 Physical + 2 Dedicated Cloud", badge: "High Availability", icon: Server, color: "#8b5cf6" },
];

const physicalServersData = [
  {
    server: "Server 1",
    name: "Dell PowerEdge R730 / VIKRANTH",
    badge: "High-End Server",
    processor: "Intel(R) Xeon(R) CPU E5-2620 V4 @ 2.10GHz",
    cpus: "8 CPUs x 2.099GHz",
    ram: "128 GB RAM",
    hdd: "2TB x 2 SAS (RAID 1)",
    lan: "10/100/1000 Mbps x 4 Ports",
    role: "Core Institutional Database, Compute-Intensive Services & Central Gateway",
  },
  {
    server: "Server 2",
    name: "Dell PowerEdge R710 / TRISHUL",
    badge: "Enterprise Server",
    processor: "Intel Xeon Enterprise Multi-Core Processor",
    cpus: "High-Throughput Multi-Core",
    ram: "High-Capacity Enterprise ECC",
    hdd: "Enterprise SAS RAID Storage",
    lan: "Multi-Port Gigabit LAN",
    role: "Central Authentication, Identity Management & Campus Network Operations",
  },
  {
    server: "Server 3",
    name: "Dell PowerEdge R730",
    badge: "High Performance",
    processor: "Intel Xeon Multi-Core Processor",
    cpus: "8 CPUs x 2.099GHz",
    ram: "128 GB RAM",
    hdd: "High-Speed Enterprise SAS",
    lan: "10/100/1000 Mbps Quad LAN",
    role: "Academic Computing, Virtualization Node & Departmental Software Hosting",
  },
  {
    server: "Server 4",
    name: "Dell PowerEdge R740",
    badge: "Scalable Compute",
    processor: "Dual Intel Xeon Scalable Processors",
    cpus: "High-Density Multi-Threading",
    ram: "Enterprise Registered ECC RAM",
    hdd: "High-IOPS Enterprise Storage",
    lan: "High-Speed Gigabit LAN",
    role: "Campus-Wide Digital Platform & Virtual Lab Environment",
  },
  {
    server: "Server 5",
    name: "Dell PowerEdge R740",
    badge: "Redundant Cluster",
    processor: "Dual Intel Xeon Scalable Processors",
    cpus: "High-Density Multi-Threading",
    ram: "Enterprise Registered ECC RAM",
    hdd: "Redundant SAS Array (RAID Protected)",
    lan: "High-Speed Gigabit LAN",
    role: "High-Availability Failover, Automated Backups & Core Services Continuity",
  },
  {
    server: "Server 6",
    name: "GDLC Server",
    badge: "Academic Controller",
    processor: "Multi-Core Enterprise Processor Architecture",
    cpus: "Lab Dedicated Compute",
    ram: "Lab Workload Optimized Memory",
    hdd: "High-Capacity Dedicated Storage",
    lan: "Gigabit Ethernet Controller",
    role: "Global Development & Digital Learning Center (GDLC) Lab Services & Media Streaming",
  },
];

const cloudServersData = [
  {
    server: "Cloud Server 1",
    name: "IMS SERVER",
    title: "Institute Management System (IMS)",
    processor: "Intel Core i5",
    ram: "8 GB RAM",
    hdd: "1 TB Storage",
    badge: "Cloud Hosted",
    description: "Centralized cloud enterprise ERP managing student lifecycles, admissions, exam registrations, grading, attendance tracking, fee payments, and staff administrative governance.",
  },
  {
    server: "Cloud Server 2",
    name: "MOODLE SERVER",
    title: "Learning Management System (LMS)",
    processor: "Intel Xeon Processor",
    ram: "8 GB RAM",
    hdd: "Dynamic Scalable Storage",
    badge: "24/7 E-Learning",
    description: "Interactive online academic portal hosting e-courses, syllabus notes, video modules, assignments, proctored digital quizzes, student assessments, and outcome evaluations.",
  },
];

const WifiInfrastructureInformation = () => (
  <section className="overflow-hidden rounded-2xl md:rounded-3xl border bg-white shadow-sm font-sans" style={{ borderColor: BORDER }}>
    {/* Header */}
    <div className="border-b px-6 py-5 md:px-8" style={{ borderColor: BORDER, background: `linear-gradient(90deg, rgba(15,42,68,0.03), transparent)` }}>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
          <Wifi className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-sans font-bold text-lg md:text-xl [font-family:var(--font-body)]" style={{ color: DARK_NAVY }}>
            Wi-Fi &amp; Digital IT Infrastructure Specifications
          </h3>
          <p className="text-xs md:text-sm text-slate-500 font-sans">
            2 Gbps connectivity, Cisco Meraki firewall security, server farm, and computing fleet
          </p>
        </div>
      </div>
    </div>

    <div className="space-y-8 p-6 md:p-8">
      {/* ── Key Metrics 6-Card Grid ── */}
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {wifiOverviewMetrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-2xl border p-4 transition-all duration-200 hover:shadow-sm bg-slate-50/70"
                style={{ borderColor: BORDER }}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border shadow-xs" style={{ borderColor: BORDER }}>
                    <Icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white font-sans" style={{ background: DARK_NAVY }}>
                    {item.badge}
                  </span>
                </div>
                <div className="text-xl md:text-2xl font-extrabold tracking-tight font-sans [font-family:var(--font-body)]" style={{ color: DARK_NAVY }}>
                  {item.value}
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1 leading-snug font-sans">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 leading-tight line-clamp-1 font-sans">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Computing Fleet Distribution ── */}
      <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: BORDER }}>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-5 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <Monitor className="h-5 w-5" style={{ color: MITS_RED }} />
            <h4 className="font-sans font-bold text-base md:text-lg [font-family:var(--font-body)]" style={{ color: DARK_NAVY }}>
              Computing &amp; Desktop Infrastructure Fleet
            </h4>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-white shadow-xs font-sans" style={{ background: `linear-gradient(135deg, ${DARK_NAVY}, ${MITS_RED})` }}>
            <span>Total Fleet:</span>
            <span className="text-[#ffd15c]">2,095 Desktops + 80 Laptops</span>
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-5">
          {/* Circular Block Card */}
          <div className="rounded-xl border p-4.5 bg-slate-50/70" style={{ borderColor: BORDER }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">Central Facility</span>
              <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-blue-100 text-blue-800 font-sans">Circular Block</span>
            </div>
            <div className="text-2xl md:text-3xl font-extrabold text-[#005bb5] font-sans [font-family:var(--font-body)]">832</div>
            <p className="text-xs font-bold text-slate-700 mt-0.5 font-sans">Desktops in Circular Block</p>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed font-sans">
              Equipped for institutional online examinations, campus placement coding assessments, centralized lab programs, and digital evaluations.
            </p>
          </div>

          {/* Departmental Desktops Card */}
          <div className="rounded-xl border p-4.5 bg-slate-50/70" style={{ borderColor: BORDER }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">Departmental Labs</span>
              <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-100 text-emerald-800 font-sans">All Depts</span>
            </div>
            <div className="text-2xl md:text-3xl font-extrabold font-sans [font-family:var(--font-body)]" style={{ color: MITS_RED }}>1,263</div>
            <p className="text-xs font-bold text-slate-700 mt-0.5 font-sans">Desktops in Department Labs</p>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed font-sans">
              Distributed across CSE, ECE, EEE, ME, CE, AI&amp;DS, and allied academic departments for specialized curriculum software, simulation, and research.
            </p>
          </div>

          {/* Laptops Mobility Card */}
          <div className="rounded-xl border p-4.5 bg-slate-50/70" style={{ borderColor: BORDER }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">Mobility Fleet</span>
              <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-amber-100 text-amber-800 font-sans">Institutional</span>
            </div>
            <div className="text-2xl md:text-3xl font-extrabold font-sans [font-family:var(--font-body)]" style={{ color: GOLD }}>80</div>
            <p className="text-xs font-bold text-slate-700 mt-0.5 font-sans">High-Performance Laptops</p>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed font-sans">
              Dedicated institutional laptops deployed for faculty research, international conferences, mobile digital evaluation, seminars, and technical workshops.
            </p>
          </div>
        </div>

        {/* Visual Distribution Ratio Bar */}
        <div className="rounded-xl border p-4 bg-slate-50 font-sans" style={{ borderColor: BORDER }}>
          <div className="flex items-center justify-between text-xs font-bold mb-2.5" style={{ color: DARK_NAVY }}>
            <span>Distribution Ratio: Circular Block (832) vs All Departments (1,263)</span>
            <span className="text-slate-500">Total = 2,095 Desktops</span>
          </div>
          <div className="h-3.5 w-full rounded-full overflow-hidden flex bg-slate-200">
            <div className="h-full transition-all duration-500 bg-[#005bb5]" style={{ width: "39.7%" }} title="Circular Block: 832 (39.7%)" />
            <div className="h-full transition-all duration-500 bg-[#b30000]" style={{ width: "60.3%" }} title="All Departments: 1,263 (60.3%)" />
          </div>
          <div className="flex items-center justify-between text-xs font-medium text-slate-600 mt-2.5">
            <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full inline-block bg-[#005bb5]" /> Circular Block: 832 Desktops (39.7%)</span>
            <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full inline-block bg-[#b30000]" /> All Departments: 1,263 Desktops (60.3%)</span>
          </div>
        </div>
      </div>

      {/* ── Enterprise Servers Infrastructure ── */}
      <div className="rounded-2xl border p-6 bg-white font-sans" style={{ borderColor: BORDER }}>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-5 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <Server className="h-5 w-5" style={{ color: MITS_RED }} />
            <h4 className="font-sans font-bold text-base md:text-lg [font-family:var(--font-body)]" style={{ color: DARK_NAVY }}>
              Enterprise Server Infrastructure (8 High-Availability Servers)
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-sans">
              6 Physical Servers
            </span>
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-sans">
              2 Cloud Servers
            </span>
          </div>
        </div>

        {/* Physical Servers Table */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <HardDrive className="w-4 h-4" style={{ color: GOLD }} />
            <h5 className="font-sans font-bold text-sm [font-family:var(--font-body)]" style={{ color: DARK_NAVY }}>
              Physical Servers (Dell PowerEdge Enterprise Fleet)
            </h5>
          </div>

          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: BORDER }}>
            <table className="w-full text-left text-xs border-collapse font-sans">
              <thead>
                <tr className="border-b text-slate-700 font-bold uppercase text-[10px] tracking-wider" style={{ background: `linear-gradient(90deg, #f8fafc, #edf2f7)`, borderColor: BORDER }}>
                  <th className="py-3.5 px-4">Physical Server</th>
                  <th className="py-3.5 px-4">Server Name</th>
                  <th className="py-3.5 px-4">Equipment Description &amp; Specifications</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">Primary Operational Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {physicalServersData.map((srv, idx) => (
                  <tr key={srv.server} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="py-3.5 px-4 font-bold whitespace-nowrap text-slate-900">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold bg-slate-100 text-slate-700 border border-slate-200">
                        {srv.server}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-bold whitespace-nowrap" style={{ color: DARK_NAVY }}>
                      {srv.name}
                    </td>
                    <td className="py-3.5 px-4 leading-relaxed">
                      <div className="font-semibold text-slate-800">{srv.badge}: {srv.name.split("/")[0]}</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">
                        <span className="font-medium text-slate-700">Processor:</span> {srv.processor}
                      </div>
                      <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[11px] text-slate-500 mt-0.5">
                        <span><strong className="text-slate-700">CPUs:</strong> {srv.cpus}</span>
                        <span>•</span>
                        <span><strong className="text-slate-700">RAM:</strong> {srv.ram}</span>
                        <span>•</span>
                        <span><strong className="text-slate-700">HDD:</strong> {srv.hdd}</span>
                        <span>•</span>
                        <span><strong className="text-slate-700">LAN:</strong> {srv.lan}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-slate-600 leading-snug hidden md:table-cell">
                      {srv.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cloud Servers Cards */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Cloud className="w-4 h-4 text-purple-600" />
            <h5 className="font-sans font-bold text-sm [font-family:var(--font-body)]" style={{ color: DARK_NAVY }}>
              Cloud Servers (Institutional Portals &amp; E-Learning)
            </h5>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {cloudServersData.map((cloud) => (
              <div key={cloud.server} className="rounded-2xl border p-5 bg-gradient-to-br from-purple-50/40 via-white to-white font-sans" style={{ borderColor: BORDER }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-purple-100 text-purple-800">
                    {cloud.server}
                  </span>
                  <span className="text-xs font-bold" style={{ color: DARK_NAVY }}>{cloud.name}</span>
                </div>
                <h6 className="font-sans font-bold text-base text-slate-900 mb-1 [font-family:var(--font-body)]">{cloud.title}</h6>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">{cloud.description}</p>
                <div className="pt-2.5 border-t border-purple-100/70 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
                  <span><strong>Processor:</strong> {cloud.processor}</span>
                  <span><strong>RAM:</strong> {cloud.ram}</span>
                  <span><strong>Storage:</strong> {cloud.hdd}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Network Security & Wireless Access Deep Dive ── */}
      <div className="grid gap-6 md:grid-cols-2 font-sans">
        {/* Firewall Card */}
        <div className="rounded-2xl border p-6 bg-gradient-to-br from-red-50/30 via-white to-white" style={{ borderColor: BORDER }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-100 text-red-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg [font-family:var(--font-body)]" style={{ color: DARK_NAVY }}>
                Perimeter Firewall &amp; Threat Defense
              </h4>
              <p className="text-xs text-slate-500 font-sans">CISCO Meraki MX450 Next-Gen Security Appliance</p>
            </div>
          </div>
          <ul className="space-y-2.5 text-xs md:text-sm text-slate-600 leading-relaxed">
            <li className="flex gap-2.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
              <span><strong>10G-Capable Stateful Firewall:</strong> High-throughput Deep Packet Inspection ensuring zero latency across high-bandwidth traffic.</span>
            </li>
            <li className="flex gap-2.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
              <span><strong>Snort-Based Threat Protection:</strong> Real-time Intrusion Detection and Prevention (IDS/IPS) defending all on-campus servers and databases.</span>
            </li>
            <li className="flex gap-2.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
              <span><strong>Content Filtering &amp; Policy Control:</strong> Granular Layer-7 application visibility and content filtering for academic compliance.</span>
            </li>
            <li className="flex gap-2.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
              <span><strong>Isolated VLAN Segments:</strong> Dedicated subnets for research labs, administrative servers, examination systems, and student Wi-Fi.</span>
            </li>
          </ul>
        </div>

        {/* Wireless APs Card */}
        <div className="rounded-2xl border p-6 bg-gradient-to-br from-amber-50/30 via-white to-white" style={{ borderColor: BORDER }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-amber-100 text-amber-700">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg [font-family:var(--font-body)]" style={{ color: DARK_NAVY }}>
                High-Density Wi-Fi 6 Enterprise APs
              </h4>
              <p className="text-xs text-slate-500 font-sans">192 Ruckus R650 Enterprise Access Points</p>
            </div>
          </div>
          <ul className="space-y-2.5 text-xs md:text-sm text-slate-600 leading-relaxed">
            <li className="flex gap-2.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
              <span><strong>192 Enterprise APs:</strong> Total coverage across all instructional blocks, seminar halls, library, hostels, and administrative premises.</span>
            </li>
            <li className="flex gap-2.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
              <span><strong>Ruckus R650 Wi-Fi 6 (802.11ax):</strong> Dual-band concurrent technology providing gigabit wireless throughput and ultra-low latency.</span>
            </li>
            <li className="flex gap-2.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
              <span><strong>BeamFlex+ Adaptive Antennas:</strong> Dynamic multi-directional signal steering preventing physical interference and dead zones.</span>
            </li>
            <li className="flex gap-2.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
              <span><strong>High Concurrency &amp; Roaming:</strong> Designed for high-density student assemblies with seamless handoff and 24/7 connectivity.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// ─── MAIN INFRASTRUCTURE PAGE COMPONENT ──────────────────────────────────────
const Infrastructure = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getInitialTab = () => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      const search = new URLSearchParams(window.location.search);
      const tabParam = search.get("tab");
      if (
        hash === "tab-2" ||
        hash === "sports" ||
        tabParam === "sports" ||
        location.pathname === "/sports" ||
        location.pathname === "/facilities"
      ) {
        return "sports";
      }
      const match = infrastructureItems.find(
        (i) => hash === i.key || tabParam === i.key
      );
      if (match) return match.key;
    }
    return infrastructureItems[0].key;
  };

  const [activeInfra, setActiveInfra] = useState<string>(getInitialTab);
  const current = infrastructureItems.find((i) => i.key === activeInfra) || infrastructureItems[0];
  const currentIdx = infrastructureItems.findIndex((i) => i.key === activeInfra);
  const theme = TAB_THEMES[current.key] || TAB_THEMES.sports;
  const currentGallery = galleryImages[current.key] || [];

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const search = new URLSearchParams(location.search);
    const tabParam = search.get("tab");
    if (hash === "tab-2" || tabParam === "sports" || hash === "sports") {
      setActiveInfra("sports");
    } else if (tabParam && infrastructureItems.some((i) => i.key === tabParam)) {
      setActiveInfra(tabParam);
    } else if (hash && infrastructureItems.some((i) => i.key === hash)) {
      setActiveInfra(hash);
    }
  }, [location]);

  const handleNav = (key: string) => {
    setActiveInfra(key);
    navigate({ hash: key }, { replace: false });
    const bar = document.getElementById("facility-tabs-bar");
    if (bar) {
      const topOffset = bar.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: Math.max(0, topOffset), behavior: "smooth" });
    }
  };

  const go = (dir: -1 | 1) => {
    const next = (currentIdx + dir + infrastructureItems.length) % infrastructureItems.length;
    handleNav(infrastructureItems[next].key);
  };

  const prevIdx = (currentIdx - 1 + infrastructureItems.length) % infrastructureItems.length;
  const nextIdx = (currentIdx + 1) % infrastructureItems.length;
  const prevItem = infrastructureItems[prevIdx];
  const nextItem = infrastructureItems[nextIdx];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfbf7] via-white to-white font-sans [font-family:var(--font-body)]">
      <Header />
      <SEO
        title="MITS Campus Infrastructure – Labs, Library, Sports & Facilities"
        description="Explore MITS Madanapalle infrastructure: 26.17-acre campus, 2,095+ computers, 2 Gbps Wi-Fi, central library with 50,000+ volumes, AICTE Idea Lab, auditoriums, and sports grounds."
        canonical="/infrastructure"
      />
      <main>
        {/* ══════════════════════════════════════════════════════
            HERO — matching International Relations executive style
           ══════════════════════════════════════════════════════ */}
        <section className="relative min-h-[440px] md:min-h-[500px] overflow-hidden bg-gradient-to-br from-[#0f2a44] via-[#143557] to-[#0a1f33] text-white pt-28 md:pt-36 pb-20 md:pb-24 flex items-center font-sans">
          {/* Background image overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
            style={{ backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2a44]/95 via-[#0f2a44]/80 to-[#0a1f33]/95" />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, #caa74d 0%, transparent 40%), radial-gradient(circle at 80% 80%, #b30000 0%, transparent 50%)",
            }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22><path d=%22M0 0h60v60H0z%22 fill=%22none%22/><path d=%22M30 0v60M0 30h60%22 stroke=%22%23ffffff%22 stroke-opacity=%220.04%22/></svg>')]" />
          <div className="absolute -right-32 -bottom-40 h-[32rem] w-[32rem] rounded-full border border-white/10 bg-white/5" />

          <div className={cn(WIDE, "relative z-10")}>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm text-white/70 mb-5 font-sans">
              <Link to="/" className="hover:text-[#caa74d] transition-colors inline-flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5" />Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <span className="text-white/60">Campus</span>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <span className="text-[#caa74d] font-semibold">{current.label}</span>
            </nav>

            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#caa74d]/15 border border-[#caa74d]/30 text-[#caa74d] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4 font-sans">
                <Sparkles className="w-3.5 h-3.5" /> Campus Excellence &amp; Facilities
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-sans text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white tracking-tight [font-family:var(--font-body)]"
              >
                Campus <span className="text-[#ffd15c]">Infrastructure</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="font-sans text-sm md:text-base text-white/80 mt-4 max-w-2xl leading-relaxed"
              >
                Sprawled across 26.17+ acres of lush green campus, offering state-of-the-art academic laboratories, high-speed 2 Gbps network infrastructure, central library, and comprehensive athletic facilities.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            GLASS STAT STRIP — floating on the seam between hero & page
           ══════════════════════════════════════════════════════ */}
        <div className={cn(WIDE, "-mt-10 md:-mt-14 relative z-20 font-sans")}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 bg-white/75 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/70 p-4 md:p-6 divide-x-0 md:divide-x divide-slate-100">
            {heroStats.map((s) => (
              <AnimatedStat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            STICKY HORIZONTAL FACILITIES TAB BAR (Exact IR style)
           ══════════════════════════════════════════════════════ */}
        <div id="facility-tabs-bar" className={cn(WIDE, "mt-8 md:mt-12 font-sans")}>
          <div
            className="sticky top-16 md:top-[100px] xl:top-[116px] z-30 flex items-center overflow-x-auto md:flex-wrap md:justify-center gap-2 md:gap-2.5 p-2 md:p-2.5 rounded-2xl bg-white/75 backdrop-blur-xl border border-white/80 shadow-xl scrollbar-none"
            style={{ transformStyle: "preserve-3d" }}
          >
            {infrastructureItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeInfra === item.key;
              const tabTheme = TAB_THEMES[item.key] || TAB_THEMES.sports;
              return (
                <motion.button
                  key={item.key}
                  onClick={() => handleNav(item.key)}
                  whileHover={isActive ? {} : { y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={cn(
                    "relative flex items-center gap-2 px-3.5 md:px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 font-sans",
                    isActive
                      ? cn(tabTheme.solid, "text-white", tabTheme.glow, "ring-1 ring-white/40")
                      : "bg-white/80 text-slate-700 hover:text-[#0f2a44] hover:bg-white border border-slate-200/70 shadow-xs"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-slate-500")} />
                  <span>{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            FULL-WIDTH FACILITY CONTENT VIEW
           ══════════════════════════════════════════════════════ */}
        <section className={cn(WIDE, "py-8 md:py-12 font-sans")}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.28 }}
              className="space-y-8"
            >
              {/* ── FACILITY HEADER BANNER CARD ── */}
              <div
                className={cn(
                  "p-6 md:p-8 rounded-2xl md:rounded-3xl border bg-white shadow-sm transition-all duration-300 relative overflow-hidden font-sans",
                  theme.border
                )}
              >
                {/* Subtle accent bar at the top */}
                <div className={cn("absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r", theme.gradient)} />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-white shadow-md",
                        theme.solid
                      )}
                    >
                      {(() => {
                        const IconComp = current.icon;
                        return <IconComp className="w-7 h-7" />;
                      })()}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className={cn("text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full font-sans", theme.badge)}>
                          Facility {String(currentIdx + 1).padStart(2, "0")} / {String(infrastructureItems.length).padStart(2, "0")}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 font-sans">
                          Campus Asset &amp; Student Service
                        </span>
                      </div>
                      <h2
                        className="font-sans text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight [font-family:var(--font-body)]"
                      >
                        {current.title}
                      </h2>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-2.5 max-w-4xl font-sans">
                        {current.desc}
                      </p>
                    </div>
                  </div>

                  {/* Quick Action Link for specific facilities */}
                  {(current.key === "library" || current.key === "digital-library") && (
                    <div className="shrink-0 pt-2 lg:pt-0">
                      <Link
                        to="/library"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white shadow-sm hover:shadow-md hover:scale-[1.02] transition-all bg-[#0f2a44] font-sans"
                      >
                        Explore Central Library Page
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  )}

                  {current.key === "sports" && (
                    <div className="shrink-0 pt-2 lg:pt-0">
                      <Link
                        to="/sports-athletics"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white shadow-sm hover:shadow-md hover:scale-[1.02] transition-all bg-emerald-700 font-sans"
                      >
                        Explore Sports &amp; Athletics
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* ── PHOTO GALLERY CAROUSEL (Widescreen Full Width) ── */}
              <ImageGallery images={currentGallery} sectionTitle={current.title} />

              {/* ── KEY HIGHLIGHTS (Responsive 3-Column Grid) ── */}
              <div className="rounded-2xl md:rounded-3xl border border-slate-200/80 bg-white shadow-sm overflow-hidden font-sans">
                <div className="px-6 md:px-8 py-4 md:py-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50/60">
                  <div className="flex items-center gap-2.5">
                    <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center text-white", theme.solid)}>
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-base md:text-lg text-slate-900 [font-family:var(--font-body)]">
                        Key Highlights &amp; Capabilities
                      </h3>
                      <p className="text-xs text-slate-500 font-sans">Core features, amenities, and operational metrics</p>
                    </div>
                  </div>
                  <span className={cn("text-xs font-bold px-3 py-1 rounded-full font-sans", theme.badge)}>
                    {current.points.length} Highlights
                  </span>
                </div>

                <div className="p-6 md:p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-4">
                  {current.points.map((text, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3.5 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-200 group font-sans"
                    >
                      <span
                        className={cn(
                          "shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold text-white mt-0.5 shadow-xs font-sans",
                          theme.solid
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed group-hover:text-slate-900 font-sans">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── TRANSPORT SPECIALIZED DEEP-DIVE ── */}
              {current.key === "transport" && <TransportInformation />}

              {/* ── WI-FI & IT INFRASTRUCTURE SPECIALIZED DEEP-DIVE ── */}
              {(current.key === "wifi" || current.key === "computer") && <WifiInfrastructureInformation />}

              {/* ── BOTTOM SEQUENTIAL NAVIGATOR ── */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 font-sans">
                <button
                  onClick={() => go(-1)}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all font-sans"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-500 hidden sm:inline">Previous:</span>
                  <span>{prevItem.label}</span>
                </button>

                {/* Dots indicator */}
                <div className="flex items-center gap-1.5 py-1">
                  {infrastructureItems.map((item, i) => {
                    const on = i === currentIdx;
                    const itemTheme = TAB_THEMES[item.key] || TAB_THEMES.sports;
                    return (
                      <button
                        key={item.key}
                        onClick={() => handleNav(item.key)}
                        title={item.label}
                        className={cn(
                          "h-2 rounded-full transition-all duration-300 cursor-pointer",
                          on ? cn("w-6", itemTheme.solid) : "w-2 bg-slate-200 hover:bg-slate-300"
                        )}
                      />
                    );
                  })}
                </div>

                <button
                  onClick={() => go(1)}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all font-sans"
                >
                  <span className="text-slate-500 hidden sm:inline">Next:</span>
                  <span>{nextItem.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Infrastructure;

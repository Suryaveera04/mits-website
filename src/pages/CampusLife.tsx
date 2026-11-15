import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Play, Pause, ArrowRight, Calendar, MapPin, Users, Award, Sparkles, BookOpen, Mic2, Dumbbell, Building2, Home, Music, Palette, Theater, Trophy, FlaskConical, Laptop, Code2, HeartHandshake } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";

const BASE = import.meta.env.BASE_URL;

// ============================================
// EXPERIENCE CARDS DATA
// ============================================
import { campusLifeData } from "@/data/galleryData/campusLife";

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

// ============================================
// EXPERIENCE CARDS DATA (Generated from official MITS data)
// ============================================
const experienceCards = [
  {
    id: "cultural",
    title: campusLifeData.cultural.title,
    description: campusLifeData.cultural.description,
    image: getLocalUrl(campusLifeData.cultural.images[0]),
    icon: Sparkles,
    stats: campusLifeData.cultural.stats,
    href: "/campus-life/cultural-life",
  },
  {
    id: "clubs",
    title: campusLifeData.clubs.title,
    description: campusLifeData.clubs.description,
    image: getLocalUrl(campusLifeData.clubs.images[0]),
    icon: Users,
    stats: campusLifeData.clubs.stats,
    href: "/campus-life/student-clubs",
  },
  {
    id: "sports",
    title: campusLifeData.sports.title,
    description: campusLifeData.sports.description,
    image: getLocalUrl(campusLifeData.sports.images[0]),
    icon: Dumbbell,
    stats: campusLifeData.sports.stats,
    href: "/sports",
  },
  {
    id: "infrastructure",
    title: campusLifeData.infrastructure.title,
    description: campusLifeData.infrastructure.description,
    image: getLocalUrl(campusLifeData.infrastructure.images[0]),
    icon: Building2,
    stats: campusLifeData.infrastructure.stats,
    href: "/infrastructure",
  },
];

// ============================================
// ASHV FESTIVAL GALLERY (Generated from official MITS data)
// ============================================
const ashvGallery = [
  {
    id: 1,
    title: "ASHV Cultural Celebrations",
    description: "Vibrant stages showcasing music, dance and cultural talents",
    image: getLocalUrl(campusLifeData.cultural.images[0]) || `${BASE}news-events/smruthi-sangamam.jpg`,
  },
  {
    id: 2,
    title: "Stage Performances",
    description: "Students perform in front of cheering campus audiences",
    image: getLocalUrl("/gallery/ashv(2k25)19.jpg"),
  },
  {
    id: 3,
    title: "Celebrity & Music Concerts",
    description: "High-energy musical nights featuring renowned guest artists",
    image: getLocalUrl(campusLifeData.cultural.images[1]) || `${BASE}news-events/3k-run.jpg`,
  },
  {
    id: 4,
    title: "Dance & Choreography",
    description: "Inter-collegiate dance troupes competing in the race of talent",
    image: getLocalUrl("/gallery/ashv(2k26)4.jpg"),
  },
];

// ============================================
// CLUBS SHOWCASE DATA (Generated from official MITS data)
// ============================================
const clubsShowcase = [
  {
    name: "Technical Clubs",
    category: "Coding & Innovation",
    icon: Code2,
    color: "from-blue-600 to-indigo-600",
    description:
      "Coding, Web Development, Robotics, and IoT enthusiasts collaborating on hackathons, live engineering builds, and tech competitions.",
    activities: ["Hackathons & Coding Sprints", "Robotics & Drone Workshops", "Open Source Projects"],
    image: getLocalUrl(campusLifeData.clubs.images[5]),
    reverse: false,
  },
  {
    name: "Arts & Cultural Club",
    category: "Creative Expressions",
    icon: Palette,
    color: "from-purple-600 to-pink-600",
    description:
      "Unleashing stage talents in classical and western dance, vocal music, drama, fine arts, and anchoring for major university events.",
    activities: ["Music & Band Performances", "Dance Competitions", "Theater & Drama"],
    image: getLocalUrl(campusLifeData.clubs.images[0]),
    reverse: true,
  },
  {
    name: "Social Responsibility (MSR)",
    category: "Community Impact",
    icon: HeartHandshake,
    color: "from-emerald-600 to-teal-600",
    description:
      "Dedicated to social outreach, blood donation camps, rural development, environmental green drives, and education for underprivileged children.",
    activities: ["Blood Donation Camps", "Village Adoption Drives", "Eco-Friendly Initiatives"],
    image: getLocalUrl(campusLifeData.clubs.images[3]),
    reverse: false,
  },
];

// ============================================
// STUDENT LIFE STORIES (Generated from official MITS data)
// ============================================
const lifeStories = [
  {
    id: 1,
    title: "Vibrant Cultural Diversity",
    description: campusLifeData.cultural.description,
    image: getLocalUrl(campusLifeData.cultural.images[4]) || `${BASE}Hero-Section/image%204.JPG`,
    stats: campusLifeData.cultural.stats,
    reverse: false,
  },
  {
    id: 2,
    title: "Student Collaboration & Clubs",
    description: campusLifeData.clubs.description,
    image: getLocalUrl(campusLifeData.clubs.images[1]) || `${BASE}Hero-Section/image%202.JPG`,
    stats: campusLifeData.clubs.stats,
    reverse: true,
  },
  {
    id: 3,
    title: "Green Campus Environment",
    description: campusLifeData.infrastructure.description,
    image: getLocalUrl(campusLifeData.infrastructure.images[1]) || `${BASE}Hero-Section/image%201.JPG`,
    stats: campusLifeData.infrastructure.stats,
    reverse: false,
  },
];

// ============================================
// CAMPUS GALLERY (Generated from official MITS data)
// ============================================
const campusGallery = [
  { id: 1, image: getLocalUrl(campusLifeData.infrastructure.images[0]), title: "Main Campus Entrance" },
  { id: 2, image: getLocalUrl(campusLifeData.clubs.images[2]), title: "Student Club Activities" },
  { id: 3, image: getLocalUrl(campusLifeData.infrastructure.images[2]), title: "Industrial Block" },
  { id: 4, image: getLocalUrl(campusLifeData.infrastructure.images[1]), title: "Circular Academic Block" },
  { id: 5, image: getLocalUrl(campusLifeData.infrastructure.images[6]), title: "Central Library & Digital Hub" },
  { id: 6, image: getLocalUrl(campusLifeData.sports.images[0]), title: "Official Sports Ground" },
  { id: 7, image: getLocalUrl(campusLifeData.cultural.images[5]), title: "Cultural Festival Stages" },
  { id: 8, image: getLocalUrl(campusLifeData.infrastructure.images[5]), title: "Innovation Cell & Laboratories" },
  { id: 9, image: getLocalUrl(campusLifeData.sports.images[1]), title: "Sports Complex Area" },
];

// ============================================
// FACILITIES (Generated from official MITS data)
// ============================================
const facilities = [
  {
    id: 1,
    title: "Central Library",
    description: "A treasure trove of knowledge with physical books, digital library resources, and study zones.",
    image: getLocalUrl(campusLifeData.infrastructure.images[6]),
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Research Laboratories",
    description: "State-of-the-art computer labs, department research zones, and experimental tools.",
    image: getLocalUrl(campusLifeData.infrastructure.images[5]),
    icon: FlaskConical,
  },
  {
    id: 3,
    title: "Sports Complex",
    description: "Well-maintained athletic tracks, cricket net practices, basketball and volleyball court facilities.",
    image: getLocalUrl(campusLifeData.sports.images[2]),
    icon: Dumbbell,
  },
  {
    id: 4,
    title: "Auditoriums",
    description: "Spacious air-conditioned auditoriums hosting national-level workshops, conferences and fests.",
    image: getLocalUrl(campusLifeData.infrastructure.images[7]),
    icon: Mic2,
  },
  {
    id: 5,
    title: "Smart Classrooms",
    description: "Interactive audio-visual smart classrooms and multimedia seminar halls.",
    image: getLocalUrl(campusLifeData.infrastructure.images[1]),
    icon: Building2,
  },
  {
    id: 6,
    title: "Computer Center",
    description: "High-performance computing terminals with high-speed internet bandwidth and software licenses.",
    image: getLocalUrl(campusLifeData.infrastructure.images[9]),
    icon: Laptop,
  },
];

// ============================================
// COMPONENTS
// ============================================

// Cinematic Hero Section
const CinematicHero = () => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToContent = () => {
    document.getElementById("experience-cards")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[60vh] min-h-[480px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={getLocalUrl("/gallery/main entrance.JPG")}
        alt="MITS Main Entrance"
      />

      {/* Lightened Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

      {/* Animated Particles/Shimmer Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y: y2, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent font-semibold text-sm tracking-[0.2em] uppercase">
            Life at MITS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          Vibrant{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent">
            Campus Life
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 font-light"
        >
          A community of learning, culture, and endless opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/admissions">
            <button className="group relative px-8 py-4 bg-primary text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40">
              <span className="relative z-10 flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
          </Link>
          <button
            onClick={scrollToContent}
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Explore Campus
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Experience Card with 3D Tilt Effect
const ExperienceCard = ({ card, index }: { card: typeof experienceCards[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative h-[400px] md:h-[450px] w-full"
    >
      <Link to={card.href} className="block w-full h-full">
        <div
          ref={cardRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-full overflow-hidden rounded-2xl cursor-pointer group"
          style={{
            transformStyle: "preserve-3d",
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'scale(1.02)' : 'scale(1)'}`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={card.image}
              alt={card.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 transition-all duration-500 ${isHovered ? 'bg-gradient-to-t from-black/90 via-black/50 to-transparent' : 'bg-gradient-to-t from-black/70 via-black/30 to-transparent'}`} />

          {/* Glassmorphism Overlay */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'bg-white/5 backdrop-blur-sm' : ''}`} />

          {/* Content */}
          <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-20'}`}>
            {/* Icon */}
            <div className={`flex items-center gap-3 mb-3 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
              <div className="w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-md flex items-center justify-center">
                <card.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">
                {card.stats}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              {card.title}
            </h3>

            {/* Description */}
            <p className={`text-white/70 text-sm md:text-base leading-relaxed transition-all duration-500 ${isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
              {card.description}
            </p>

            {/* Explore More Link */}
            <div className={`mt-4 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                Explore More
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Corner Accent */}
          <div className={`absolute top-4 right-4 w-16 h-16 border-2 border-accent/30 rounded-full transition-all duration-500 ${isHovered ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
        </div>
      </Link>
    </motion.div>
  );
};

// ASHV Festival Showcase
const ASHVShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ashvGallery.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section className="relative py-24 bg-navy-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #b30000 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, #caa74d 0%, transparent 50%)`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
              Annual Cultural Festival
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              ASHV <span className="text-accent">Festival</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The most awaited cultural extravaganza that brings together students from across the nation
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Showcase */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Image */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group"
            >
              <img
                src={ashvGallery[activeIndex].image}
                alt={ashvGallery[activeIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Play/Pause Button */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                  {ashvGallery[activeIndex].title}
                </h3>
                <p className="text-white/70">{ashvGallery[activeIndex].description}</p>
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 gap-4">
              {ashvGallery.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative h-[240px] rounded-xl overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'ring-2 ring-accent ring-offset-2 ring-offset-navy-gradient' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Festival Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: Calendar, label: "Duration", value: "2 Days" },
            { icon: Users, label: "Participants", value: "10000+" },
            { icon: Award, label: "Events", value: "50+" },
          ].map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-white/60 text-sm uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-white text-2xl font-bold">{stat.value}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Student Life Story Section
const StudentLifeStory = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
              Beyond Classroom
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              The MITS <span className="text-primary">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover a world of opportunities, friendships, and memories that last a lifetime
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {lifeStories.map((story, index) => (
            <ScrollReveal key={story.id} direction={story.reverse ? "right" : "left"}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${story.reverse ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`relative ${story.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden group">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Stats Badge */}
                    <div className="absolute bottom-6 left-6 bg-accent text-accent-foreground px-5 py-3 rounded-xl font-bold shadow-lg">
                      {story.stats}
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-xl -z-10" />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full -z-10" />
                </div>

                {/* Content */}
                <div className={story.reverse ? 'lg:order-1' : 'lg:order-2'}>
                  <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
                    0{story.id}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Campus Gallery with Lightbox
const CampusGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % campusGallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + campusGallery.length) % campusGallery.length);
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
              Our Campus
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Our <span className="text-primary">Campus</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take a visual journey through our world-class facilities and vibrant campus life
            </p>
          </div>
        </ScrollReveal>

        {/* Uniform Grid of Equal Heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {campusGallery.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                onClick={() => openLightbox(index)}
                className="relative overflow-hidden rounded-xl cursor-pointer group h-64 shadow-md bg-slate-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* View Full Gallery Link Button */}
        <div className="flex justify-center mt-12">
          <Link to="/gallery">
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:scale-105">
              View Full Campus Gallery →
            </button>
          </Link>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronDown className="w-6 h-6 rotate-90" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronDown className="w-6 h-6 -rotate-90" />
              </button>

              {/* Image */}
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="max-w-5xl max-h-[80vh] px-16"
              >
                <img
                  src={campusGallery[currentImage].image}
                  alt={campusGallery[currentImage].title}
                  className="w-full h-full object-contain"
                />
                <p className="text-white text-center mt-4 text-lg font-semibold">
                  {campusGallery[currentImage].title}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Facilities Showcase
const FacilitiesShowcase = () => {
  return (
    <section className="py-24 bg-navy-gradient">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
              World-Class Infrastructure
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-accent">Facilities</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              State-of-the-art amenities designed to support your academic and personal growth
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <ScrollReveal key={facility.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative h-[350px] rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.2)_70%,rgba(0,0,0,0.4)_100%)] group-hover:from-primary/90 group-hover:via-primary/70 transition-all duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <facility.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-2 group-hover:text-white/90 transition-colors">
                    {facility.description}
                  </p>
                </div>

                {/* Hover Accent */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={`${BASE}Hero-Section/image%204.JPG`}
          alt="Join Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Begin Your Journey at MITS
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Join a community of innovators, leaders, and change-makers. Experience education that goes beyond textbooks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <button className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:scale-105">
                  Apply Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                  Visit Campus
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================
const CampusLife = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Cinematic Hero */}
        <CinematicHero />

        {/* Experience Cards Section */}
        <section id="experience-cards" className="py-24 bg-navy-gradient">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
                  Discover Life at MITS
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                  Experience <span className="text-accent">Campus Life</span>
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                  From academics to extracurriculars, discover a world of opportunities waiting for you
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experienceCards.map((card, index) => (
                <ExperienceCard key={card.id} card={card} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ASHV Festival Showcase */}
        <ASHVShowcase />

        {/* Student Life Stories */}
        <StudentLifeStory />

        {/* Campus Gallery */}
        <CampusGallery />

        {/* Facilities Showcase */}
        <FacilitiesShowcase />

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default CampusLife;

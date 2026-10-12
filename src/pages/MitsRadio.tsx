import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  FileText,
  Download,
  ExternalLink,
  Search,
  Radio,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Play,
  Pause,
  Volume2,
  Image as ImageIcon,
  Building,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import {
  radioCoordinator,
  radioContacts,
  radioTeam,
  thematicFocusAreas,
  radioSdgs,
  primetimePrograms,
  radioCommittees,
  radioDownloads,
  radioEvents,
  radioGallery,
} from "@/data/radioData";

const BASE = import.meta.env.BASE_URL;

type TabKey =
  | "home"
  | "about"
  | "programs"
  | "schedule"
  | "archives"
  | "facilities"
  | "committees"
  | "events"
  | "contact"
  | "downloads";

const tabs: { key: TabKey; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "about", label: "About Us" },
  { key: "programs", label: "Programs" },
  { key: "schedule", label: "Schedule" },
  { key: "archives", label: "Archives" },
  { key: "facilities", label: "MITS Radio 90.8 CR Station Facilities" },
  { key: "committees", label: "Committees" },
  { key: "events", label: "Events" },
  { key: "contact", label: "Contact" },
  { key: "downloads", label: "Downloads" },
];

const MitsRadio = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  
  // Audio Player State & Native Audio Element Integration
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize the audio element once
  useEffect(() => {
    const audio = new Audio();
    audio.preload = "none";
    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audioRef.current = null;
    };
  }, []);

  // Update native volume and mute states
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Check for native HLS support (e.g. Safari)
      const isHlsSupported = 
        audioRef.current.canPlayType("application/x-mpegURL") || 
        audioRef.current.canPlayType("application/vnd.apple.mpegurl");

      if (isHlsSupported) {
        audioRef.current.src = "https://d12gz0f3xyruqy.cloudfront.net/mitsradio.m3u8";
      } else {
        audioRef.current.src = "http://streamasiacdn.atc-labs.com/mitsradio.aac";
      }

      audioRef.current.load();
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Direct stream failed, trying fallback stream...", err);
          // Try fallback stream
          if (audioRef.current) {
            audioRef.current.src = "http://streamasiacdn.atc-labs.com/mitsradio.aac";
            audioRef.current.load();
            audioRef.current.play()
              .then(() => setIsPlaying(true))
              .catch((e) => console.error("Playback failed completely:", e));
          }
        });
    }
  };

  // Events Search & Pagination State
  const [eventQuery, setEventQuery] = useState("");
  const [eventPage, setEventPage] = useState(1);
  const eventsPerPage = 8;

  // Gallery Pagination State
  const [galleryLimit, setGalleryLimit] = useState(8);

  const filteredEvents = useMemo(() => {
    const q = eventQuery.trim().toLowerCase();
    if (!q) return radioEvents;
    return radioEvents.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.date.toLowerCase().includes(q)
    );
  }, [eventQuery]);

  const paginatedEvents = useMemo(() => {
    const startIndex = (eventPage - 1) * eventsPerPage;
    return filteredEvents.slice(startIndex, startIndex + eventsPerPage);
  }, [filteredEvents, eventPage]);

  const totalEventPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f5f0]">
      <Header />
      <SEO
        title="MITS Radio 90.8 CRS – Madanapalle Community Radio Station"
        description="MITS Radio 90.8 CRS is the first community FM radio station of Madanapalle. Educating, engaging, and empowering local communities with agricultural guides, healthcare, and educational broadcasts."
        canonical="/mits-radio"
      />
      <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2a44] via-[#143557] to-[#0a1f33] text-white">
          <div className="absolute inset-0 opacity-45">
            <img
              src={`${BASE}Hero-Section/radio.jpg`}
              alt="MITS Radio Studio"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2a44]/70 via-[#0f2a44]/50 to-[#0a1f33]/75" />
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-[#caa74d]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] bg-[#b31317]/10 rounded-full blur-3xl" />

          <div className="relative container mx-auto px-4 py-14 md:py-20">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1.5 text-sm md:text-sm text-white/75 mb-6"
            >
              <Link to="/" className="hover:text-[#caa74d] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/50" />
              <span className="text-[#caa74d] font-semibold">MITS Radio 90.8 CRS</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#caa74d]/15 border border-[#caa74d]/30 text-[#e8c96a] text-sm font-semibold tracking-wider uppercase mb-5"
            >
              <Radio className="w-3.5 h-3.5 animate-pulse text-[#caa74d]" />
              90.8 MHz CRS · Voice of the Community
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl bg-gradient-to-r from-[#e8c96a] via-[#f7df8a] to-white bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-display)", fontVariantNumeric: "lining-nums" }}
            >
              MITS Community Radio 90.8 CRS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-4 max-w-3xl text-white/90 text-sm md:text-base leading-relaxed"
            >
              Madanapalle's first community radio station, operating under Ratakonda Ranga Reddy Educational Academy. Connecting, educating, and empowering the grassroots of our community since June 2023.
            </motion.p>
          </div>
        </section>

        {/* MAIN LAYOUT */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT TABS MENU */}
            <div className="lg:col-span-3 lg:sticky lg:top-28 z-20">
              <div className="bg-white rounded-2xl border border-[#0f2a44]/10 p-3 shadow-md">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0f2a44]/55 px-3 py-2 border-b border-border/60 mb-2">
                  Station Navigation
                </p>
                <div className="flex flex-col gap-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => {
                        setActiveTab(tab.key);
                        setEventPage(1); // Reset event pagination on tab switch
                      }}
                      className={`w-full text-left px-3 py-3 rounded-xl text-sm md:text-sm font-semibold transition-all duration-200 flex items-center justify-between group ${
                        activeTab === tab.key
                          ? "bg-[#0f2a44] text-white shadow-md shadow-[#0f2a44]/10"
                          : "text-secondary hover:bg-[#0f2a44]/5 hover:text-[#0f2a44]"
                      }`}
                    >
                      <span className="truncate pr-2">{tab.label}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          activeTab === tab.key ? "translate-x-0.5 text-[#caa74d]" : "text-secondary/40 group-hover:translate-x-0.5"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT WORKSPACE */}
            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl border border-[#0f2a44]/10 p-6 md:p-8 shadow-md min-h-[500px]"
                >
                  {/* HOME TAB */}
                  {activeTab === "home" && (
                    <div>
                      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between pb-6 border-b border-border/85">
                        <div className="flex-1">
                          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44] mb-3">
                            About Community Radio
                          </h2>
                          <div className="text-secondary text-sm md:text-base leading-relaxed space-y-4 pr-0 md:pr-4 text-left">
                            <p>
                              Radio is a social medium, fostering participation and engagement in people's own home languages. Radio goes where newer technologies can't—reaching beyond electricity and beyond mobile network signals.
                            </p>
                            <p>
                              It reaches rich and poor alike: the educated and uneducated, young and old, across every tribe, region, gender, and race. Programs are broadcast in local languages, providing nutrition tips for mothers, medical updates for health workers, safety protocols during disease outbreaks, conservation farming techniques for farmers, and remote school lessons for children.
                            </p>
                          </div>
                        </div>
                        <div className="w-56 h-56 shrink-0 mx-auto md:mx-0 p-2 bg-white rounded-full border border-border shadow-sm flex items-center justify-center">
                          <img
                            src="https://mits.ac.in/public/uploads/radio/mits-comunity-logo.jpg"
                            alt="MITS Community Radio 90.8 Logo"
                            className="w-full h-full object-contain rounded-full"
                          />
                        </div>
                      </div>

                      <div className="py-6 border-b border-border/85 text-secondary text-sm md:text-base leading-relaxed text-left">
                        <p>
                          <strong>MITS Radio 90.8 CRS</strong> is designed with a vision to provide the most recent updates of science and technological advancements. It connects the listeners through the realm of sound waves, empowering the grassroots of the community. Key objectives include developing a scientific temper, building awareness about sanitation, hygiene, and health, and educating the general masses. Empowerment of women, farmers, and children remains our pivotal goal. MITS Radio 90.8 CRS strongly believes that change is the need of the hour and that change is brought by disseminating related information.
                        </p>
                      </div>

                      {/* AUDIO PLAYER & DOWNLOADS ROW */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-b border-border/85 items-center">
                        {/* Custom Audio Player Mock */}
                        <div className="bg-[#0f2a44] rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-[#caa74d]/10 rounded-full blur-xl" />
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#caa74d] mb-1">
                            Live Stream Broadcast
                          </p>
                           <h4 className="font-display font-bold text-lg mb-4 text-white">
                            MITS RADIO 90.8 CR
                          </h4>
                          
                          <div className="flex items-center gap-4 mb-4">
                            <button
                              onClick={togglePlay}
                              className="w-12 h-12 rounded-full bg-[#caa74d] text-[#0f2a44] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-md"
                            >
                              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                            </button>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-white truncate">
                                {isPlaying ? "Broadcasting Live Content..." : "Stream Paused"}
                              </p>
                              <p className="text-[10px] text-white/70">
                                90.8 MHz CRS Studio
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <button onClick={() => setIsMuted(!isMuted)} className="text-white/70 hover:text-white">
                              {isMuted ? <Pause className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                            </button>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={isMuted ? 0 : volume}
                              onChange={(e) => {
                                setVolume(Number(e.target.value));
                                setIsMuted(false);
                              }}
                              className="flex-1 h-1 bg-white/20 accent-[#caa74d] rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="text-[10px] text-white w-6 text-right">
                              {isMuted ? 0 : volume}%
                            </span>
                          </div>
                        </div>

                        {/* App Store Download Badges */}
                        <div className="flex flex-col justify-center space-y-4">
                          <p className="font-semibold text-secondary text-sm">
                            Listen to MITS Radio anytime, anywhere on your mobile device! Download the official mobile application:
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <a
                              href="https://play.google.com/store/apps/details?id=com.atc.mitsradio"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:scale-105 active:scale-95 transition-transform"
                            >
                              <img
                                src={`${BASE}gp.jpg`}
                                alt="Get it on Google Play Store"
                                className="h-12 w-auto object-contain rounded-md"
                                onError={(e) => {
                                  e.currentTarget.src = "https://mits.ac.in/assets/images/gp.jpg";
                                }}
                              />
                            </a>
                            <a
                              href="https://apps.apple.com/in/app/mits-radio-90-8-cr/id1668776731"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:scale-105 active:scale-95 transition-transform"
                            >
                              <img
                                src={`${BASE}aps.jpg`}
                                alt="Download on the App Store"
                                className="h-12 w-auto object-contain rounded-md"
                                onError={(e) => {
                                  e.currentTarget.src = "https://mits.ac.in/assets/images/aps.jpg";
                                }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Vision & Mission Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-b border-border/85">
                        <div className="bg-[#fcfbf9] rounded-xl p-5 border border-border/60">
                          <div className="flex items-center gap-3 mb-3">
                            <img
                              src="https://mits.ac.in/public/uploads/radio/f685db89a1074321314ce1234ce595f4.png"
                              alt=""
                              className="w-8 h-8 object-contain shrink-0"
                            />
                            <h3 className="font-display font-bold text-lg text-[#0f2a44]">Vision</h3>
                          </div>
                          <p className="text-secondary text-sm leading-relaxed text-left">
                            MITS RADIO 90.8 Community Radio Station will focus on programming that is informative, engaging, entertaining, empowering, inspiring, and respectful of the diversity of its listeners while preserving local cultural history and encouraging wellness, prosperity, and a greater sense of community.
                          </p>
                        </div>

                        <div className="bg-[#fcfbf9] rounded-xl p-5 border border-border/60">
                          <div className="flex items-center gap-3 mb-3">
                            <img
                              src="https://mits.ac.in/public/uploads/radio/ad543a53838a5da066f38f7d5ff3d37f.png"
                              alt=""
                              className="w-8 h-8 object-contain shrink-0"
                            />
                            <h3 className="font-display font-bold text-lg text-[#0f2a44]">Mission</h3>
                          </div>
                          <p className="text-secondary text-sm leading-relaxed mb-3">
                            MITS RADIO 90.8 Community Radio Station provides a forum:
                          </p>
                          <ul className="text-secondary text-sm space-y-1.5 list-disc pl-5">
                            <li>To share information pertinent to the Madanapalle Community in an inclusive, progressive manner.</li>
                            <li>To help our community become more unified.</li>
                            <li>To increase our knowledge and experience through radio technology.</li>
                            <li>To provide ongoing training for local volunteers seeking to become involved, thereby developing new technical and leadership skills.</li>
                          </ul>
                        </div>
                      </div>

                      {/* IMAGE GALLERY SUBSECTION */}
                      <div className="py-6">
                        <h3 className="font-display text-xl font-bold text-[#0f2a44] mb-4 text-center">
                          Image <span className="text-[#b31317]">Gallery</span>
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {radioGallery.slice(0, galleryLimit).map((imgUrl, idx) => (
                            <div key={idx} className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm h-32 md:h-40">
                              <img
                                src={imgUrl}
                                alt={`MITS Radio Gallery Image ${idx + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                          ))}
                        </div>
                        {galleryLimit < radioGallery.length && (
                          <div className="text-center mt-6">
                            <button
                              onClick={() => setGalleryLimit(prev => Math.min(prev + 8, radioGallery.length))}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0f2a44]/20 hover:border-[#caa74d] hover:bg-[#0f2a44]/5 text-secondary hover:text-[#0f2a44] text-sm font-semibold tracking-wider transition-all shadow-sm"
                            >
                              <ImageIcon className="w-4 h-4" /> Load More Images
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* ABOUT US TAB */}
                  {activeTab === "about" && (
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44] mb-6">
                        About Community Radio Station
                      </h2>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                        <div className="lg:col-span-8 text-secondary text-sm md:text-base leading-relaxed space-y-4 text-left">
                          <p>
                            <strong>MITS RADIO 90.8 CRS</strong> is Madanapalle's 1st Community Radio operating from the Madanapalle Institute of Technology & Science - Deemed to be University. Sourced on 24 years of academic excellence, MITS is approved by AICTE and affiliated to JNTUA, Anantapur. It functions under the leadership of Ratakonda Ranga Reddy Educational Academy.
                          </p>
                          <p>
                            <strong>Dr. N. Vijaya Bhaskar Choudary,</strong> Chancellor, initiated the station under the stewardship of <strong>Ms. Keerthi Nadella,</strong> Executive Director, and <strong>Dr. C. Yuvaraj,</strong> Vice Chancellor (I/c), MITS. It targets culminating societal activities by blending core informational objectives with art and entertainment.
                          </p>
                          <p>
                            The application for setting up the community radio was submitted to the Ministry of Information & Broadcasting in November 2018. MIB issued the Letter of Intent (LOI) in September 2019, WPC assigned the Frequency of 90.8 MHz in September 2019, SACFA clearance was obtained in February 2022, and the Grant of Permission Agreement (GoPA) was signed in March 2022. WPC issued the Wireless Operating License (WOL) in January 2023.
                          </p>
                          <p>
                            The formal inauguration of the station took place on <strong>June 24, 2023</strong>. The inaugural event featured a 4-hour broadcast and was inaugurated by <strong>Prof. T. G. Sitharam,</strong> Chairman of the All India Council for Technical Education (AICTE), in New Delhi.
                          </p>
                        </div>

                        {/* Coordinator Details Sidebar */}
                        <div className="lg:col-span-4 bg-gradient-to-br from-[#0f2a44] to-[#143557] rounded-xl p-5 text-white shadow-md">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#caa74d] mb-1">
                            CRS Coordinator
                          </p>
                          <h4 className="font-display font-bold text-lg leading-tight mb-4 text-white">
                            {radioCoordinator.name}
                          </h4>
                          <div className="space-y-4 text-sm">
                            <div className="flex gap-2">
                              <MapPin className="w-4 h-4 text-[#caa74d] shrink-0 mt-0.5" />
                              <p className="text-white/80 leading-relaxed whitespace-pre-line">
                                {radioCoordinator.address}
                              </p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <Phone className="w-4 h-4 text-[#caa74d] shrink-0" />
                              <p className="text-white/80">{radioCoordinator.phone}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <Mail className="w-4 h-4 text-[#caa74d] shrink-0" />
                              <a href={`mailto:${radioCoordinator.email}`} className="text-[#caa74d] hover:underline">
                                {radioCoordinator.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Team Members */}
                      <div>
                        <h3 className="font-display text-xl font-bold text-[#0f2a44] mb-5 border-b border-border/70 pb-2">
                          Our Team
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          {radioTeam.map((member, idx) => (
                            <div key={idx} className="bg-white rounded-xl border border-border shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all">
                              <div className="h-48 md:h-52 overflow-hidden bg-muted">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover object-center"
                                />
                              </div>
                              <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                  <h4 className="font-display font-bold text-sm md:text-base text-[#0f2a44] mb-0.5">
                                    {member.name}
                                  </h4>
                                  <p className="text-sm text-[#caa74d] font-semibold mb-2">
                                    {member.designation}
                                  </p>
                                </div>
                                <p className="text-sm text-secondary/90 leading-relaxed border-t border-border/50 pt-2 text-left">
                                  {member.role}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PROGRAMS TAB */}
                  {activeTab === "programs" && (
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44] mb-6">
                        Broadcast Programs & thematic Focus
                      </h2>

                      {/* Broadcast Hours */}
                      <div className="bg-[#fcfbf9] rounded-xl p-5 border border-border/70 mb-6">
                        <h3 className="font-display font-bold text-lg text-[#b31317] mb-2">
                          Broadcast Hours and Language
                        </h3>
                        <p className="text-secondary text-sm md:text-base leading-relaxed text-left">
                          From <strong>Monday to Sunday</strong>, we transmit for <strong>4 hours</strong> each day. The primary live broadcast is scheduled from <strong>12:00 PM to 02:00 PM</strong> (2 hours), with a repeat broadcast broadcast from <strong>04:00 PM to 06:00 PM</strong> (2 hours). Our broadcasts are delivered in both <strong>Telugu</strong> and <strong>English</strong>.
                        </p>
                      </div>

                      {/* Thematic Focus Area tags */}
                      <div className="mb-8">
                        <h3 className="font-display font-bold text-lg text-[#0f2a44] mb-3">
                          Thematic Focus Areas
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {thematicFocusAreas.map((area, idx) => (
                            <span
                              key={idx}
                              className="px-3.5 py-1.5 rounded-full bg-[#0f2a44]/5 border border-[#0f2a44]/10 text-secondary text-sm font-semibold"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* SDGs focus */}
                      <div className="mb-8">
                        <h3 className="font-display font-bold text-lg text-[#0f2a44] mb-3">
                          Focus on Sustainable Development Goals (SDGs)
                        </h3>
                        <p className="text-secondary text-sm mb-4 leading-relaxed text-left">
                          MITS Community Radio is dedicated to contributing towards critical UN Sustainable Development Goals (SDGs) through strategic outreach programming:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {radioSdgs.map((sdg) => (
                            <div key={sdg.number} className="bg-white rounded-xl border border-border p-4 hover:border-[#caa74d] transition-colors flex gap-3">
                              <div className="shrink-0 px-2.5 h-10 rounded-lg bg-[#b31317] text-white flex items-center justify-center font-display font-bold text-sm whitespace-nowrap">
                                SDG {sdg.number}
                              </div>
                              <div>
                                <h4 className="font-bold text-sm md:text-sm text-[#0f2a44] mb-1">
                                  {sdg.title}
                                </h4>
                                <p className="text-[11px] md:text-sm text-secondary/90 leading-relaxed text-left">
                                  {sdg.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Primetime Programs */}
                      <div>
                        <h3 className="font-display font-bold text-lg text-[#0f2a44] mb-4 border-b border-border pb-2">
                          Primetime Programmes
                        </h3>
                        <div className="space-y-4">
                          {primetimePrograms.map((prog, idx) => (
                            <div key={idx} className="flex gap-4 items-start bg-muted/30 rounded-xl p-4">
                              <div className="shrink-0 w-8 h-8 rounded-full bg-[#caa74d]/20 text-[#caa74d] flex items-center justify-center font-bold text-sm">
                                {idx + 1}
                              </div>
                              <div>
                                <h4 className="font-display font-bold text-[#0f2a44] text-sm md:text-base mb-1">
                                  {prog.title}
                                </h4>
                                <p className="text-sm md:text-sm text-secondary/95 leading-relaxed text-left">
                                  {prog.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SCHEDULE TAB */}
                  {activeTab === "schedule" && (
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44] mb-3">
                        Broadcast Schedules
                      </h2>
                      <p className="text-secondary text-sm mb-6 leading-relaxed">
                        Access and download our detailed daily program schedules, including Q-sheets and Fixed Point Charts (FPCs).
                      </p>

                      <div className="space-y-8">
                        {/* Q-Sheet PDF */}
                        <div className="border border-border rounded-2xl p-4 bg-[#fcfbf9]">
                          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                            <h3 className="font-display font-bold text-base md:text-lg text-[#0f2a44] flex items-center gap-2">
                              <FileText className="w-5 h-5 text-[#b31317]" />
                              LIST OF PROGRAMMES - Q-Sheet
                            </h3>
                            <a
                              href="https://mits.ac.in/assets/radio/LIST OF PROGRAMMES- Q–Sheet-compressed.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-[#b31317] hover:underline font-semibold"
                            >
                              <Download className="w-4.5 h-4.5" /> Download PDF
                            </a>
                          </div>
                          <div className="overflow-hidden rounded-xl border border-border bg-white">
                            <iframe
                              src="https://mits.ac.in/assets/radio/LIST OF PROGRAMMES- Q–Sheet-compressed.pdf"
                              title="Q-Sheet PDF"
                              className="w-full h-[550px] border-0"
                            />
                          </div>
                        </div>

                        {/* FPC PDF */}
                        <div className="border border-border rounded-2xl p-4 bg-[#fcfbf9]">
                          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                            <h3 className="font-display font-bold text-base md:text-lg text-[#0f2a44] flex items-center gap-2">
                              <FileText className="w-5 h-5 text-[#b31317]" />
                              PROGRAMME SCHEDULE – FIXED POINT CHART (FPC)
                            </h3>
                            <a
                              href="https://mits.ac.in/assets/radio/PROGRAMME SCHEDULE – FIXED POINT CHART (FPC) 1-compressed.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-[#b31317] hover:underline font-semibold"
                            >
                              <Download className="w-4.5 h-4.5" /> Download PDF
                            </a>
                          </div>
                          <div className="overflow-hidden rounded-xl border border-border bg-white">
                            <iframe
                              src="https://mits.ac.in/assets/radio/PROGRAMME SCHEDULE – FIXED POINT CHART (FPC) 1-compressed.pdf"
                              title="Fixed Point Chart PDF"
                              className="w-full h-[550px] border-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ARCHIVES TAB */}
                  {activeTab === "archives" && (
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44] mb-6">
                        Station Archives & Historical Milestones
                      </h2>

                      <div className="space-y-8">
                        {/* Milestone 1 — Radio Inauguration */}
                        <div className="border border-border rounded-2xl p-5 bg-white shadow-sm">
                          <h3 className="font-display font-bold text-lg text-[#0f2a44] mb-3">
                            Radio Inauguration
                          </h3>
                          {/* Inauguration banner image from old site */}
                          <div className="rounded-xl overflow-hidden mb-3 border border-border">
                            <img
                              src="https://mits.ac.in/assets/radio/inauguration.JPG"
                              alt="MITS Radio Inauguration Banner"
                              className="w-full h-auto object-contain bg-muted"
                              onError={(e) => {
                                e.currentTarget.src = "https://mits.ac.in/public/uploads/radio/index1.jpg";
                              }}
                            />
                          </div>
                          {/* Embedded inauguration PDF */}
                          <div className="rounded-xl overflow-hidden mb-4 border border-border bg-white">
                            <iframe
                              src="https://mits.ac.in/assets/radio/radio%20inaguaration.pdf"
                              title="Radio Inauguration PDF"
                              className="w-full h-[600px] border-0"
                            />
                          </div>
                          <div className="flex justify-between items-center flex-wrap gap-2 pt-3 border-t border-border/50">
                            <span className="text-sm text-secondary/60 flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" /> 24th June 2023
                            </span>
                            <a
                              href="https://mits.ac.in/assets/radio/radio%20inaguaration.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b31317] hover:underline"
                            >
                              <Download className="w-4 h-4" /> Download Inauguration PDF Report
                            </a>
                          </div>
                        </div>

                        {/* Milestone 2 — Mann Ki Baat */}
                        <div className="border border-border rounded-2xl p-5 bg-white shadow-sm">
                          <h3 className="font-display font-bold text-lg text-[#0f2a44] mb-3">
                            Mann Ki Baat 100th Episode Celebration
                          </h3>
                          {/* Mann Ki Baat banner image from old site */}
                          <div className="rounded-xl overflow-hidden mb-4 border border-border">
                            <img
                              src="https://mits.ac.in/assets/radio/mann ki baat.JPG"
                              alt="Mann Ki Baat 100th Episode Celebration"
                              className="w-full h-auto object-contain bg-muted"
                              onError={(e) => {
                                e.currentTarget.src = "https://mits.ac.in/public/uploads/radio/image1.png";
                              }}
                            />
                          </div>
                          <div className="flex justify-between items-center flex-wrap gap-2 pt-3 border-t border-border/50">
                            <span className="text-sm text-secondary/60 flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" /> 30th April 2023
                            </span>
                            <a
                              href="https://mits.ac.in/assets/radio/MANN%20KI%20BAAT.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b31317] hover:underline"
                            >
                              <Download className="w-4 h-4" /> Download Mann Ki Baat PDF Report
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FACILITIES TAB */}
                  {activeTab === "facilities" && (
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44] mb-3">
                        CRS Station Facilities
                      </h2>
                      <p className="text-secondary text-sm mb-6 leading-relaxed">
                        MITS Community Radio is equipped with state-of-the-art recording, production, and broadcasting technology.
                      </p>

                      <div className="border border-border rounded-2xl p-4 bg-[#fcfbf9]">
                        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                          <h3 className="font-display font-bold text-base md:text-lg text-[#0f2a44] flex items-center gap-2">
                            <Building className="w-5 h-5 text-[#caa74d]" />
                            STATION FACILITIES GUIDE
                          </h3>
                          <a
                            href="https://mits.ac.in/assets/pdf/radio/MITS%20RADIO%2090.8%20CR_STATION%20FACILITIES.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-[#b31317] hover:underline font-semibold"
                          >
                            <Download className="w-4.5 h-4.5" /> Download PDF
                          </a>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-border bg-white">
                          <iframe
                            src="https://mits.ac.in/assets/pdf/radio/MITS%20RADIO%2090.8%20CR_STATION%20FACILITIES.pdf"
                            title="Station Facilities PDF"
                            className="w-full h-[550px] border-0"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* COMMITTEES TAB */}
                  {activeTab === "committees" && (
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44] mb-3">
                        Steering & Advisory Committees
                      </h2>
                      <p className="text-secondary text-sm mb-6 leading-relaxed">
                        Governance, steering directives, advisory boards, and departmental coordinators for MITS Community Radio 90.8 CRS.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {radioCommittees.map((comm, idx) => (
                          <a
                            key={idx}
                            href={comm.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-4 p-4 border border-border hover:border-[#caa74d] rounded-xl hover:shadow-md transition-all group"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-10 h-10 shrink-0 bg-[#0f2a44]/5 text-[#0f2a44] rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5" />
                              </div>
                              <span className="font-body font-semibold text-secondary group-hover:text-[#0f2a44] text-sm md:text-sm line-clamp-2 leading-snug">
                                {comm.label}
                              </span>
                            </div>
                            <ExternalLink className="w-4 h-4 text-secondary/30 shrink-0 group-hover:text-[#b31317] transition-colors" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* EVENTS TAB */}
                  {activeTab === "events" && (
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                        <div>
                          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44]">
                            Activities & Events Timeline
                          </h2>
                          <p className="text-secondary text-sm md:text-sm mt-1">
                            Search and view MITS Community Radio broadcast events, guest talks, and reports.
                          </p>
                        </div>

                        {/* Search field */}
                        <div className="relative w-full md:w-72 shrink-0">
                          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/40" />
                          <input
                            type="text"
                            placeholder="Search events by title or date..."
                            value={eventQuery}
                            onChange={(e) => {
                              setEventQuery(e.target.value);
                              setEventPage(1); // Reset page to 1
                            }}
                            className="w-full pl-9 pr-4 py-2 border border-border/80 focus:border-[#caa74d] focus:ring-1 focus:ring-[#caa74d]/20 rounded-xl text-sm md:text-sm transition-all focus:outline-none"
                          />
                        </div>
                      </div>

                      {filteredEvents.length === 0 ? (
                        <div className="text-center py-12 border border-dashed border-border rounded-xl">
                          <p className="text-secondary text-sm">No events found matching your search.</p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {paginatedEvents.map((evt, idx) => (
                            <a
                              key={idx}
                              href={evt.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-4 border border-border/70 hover:border-[#caa74d] rounded-xl hover:shadow-sm transition-all group bg-[#fcfbf9]/40"
                            >
                              <div className="min-w-0 pr-4">
                                <h4 className="font-semibold text-secondary group-hover:text-[#0f2a44] text-sm md:text-sm leading-snug line-clamp-2">
                                  {evt.title}
                                </h4>
                                <span className="text-[10px] md:text-sm text-secondary/50 flex items-center gap-1.5 mt-1.5">
                                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                                  {evt.date}
                                </span>
                              </div>
                              <span className="shrink-0 inline-flex items-center gap-1 text-[10px] md:text-sm text-[#b31317] font-semibold border border-[#b31317]/15 px-3 py-1 rounded-full bg-[#b31317]/5 group-hover:bg-[#b31317] group-hover:text-white transition-colors">
                                View Report <ExternalLink className="w-3 h-3" />
                              </span>
                            </a>
                          ))}

                          {/* Pagination controls */}
                          {totalEventPages > 1 && (
                            <div className="flex items-center justify-center gap-3 mt-6 pt-4 border-t border-border/60">
                              <button
                                onClick={() => setEventPage(p => Math.max(p - 1, 1))}
                                disabled={eventPage === 1}
                                className="px-3.5 py-1.5 border border-border rounded-lg text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
                              >
                                Prev
                              </button>
                              <span className="text-sm text-secondary font-semibold">
                                Page {eventPage} of {totalEventPages}
                              </span>
                              <button
                                onClick={() => setEventPage(p => Math.min(p + 1, totalEventPages))}
                                disabled={eventPage === totalEventPages}
                                className="px-3.5 py-1.5 border border-border rounded-lg text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
                              >
                                Next
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* CONTACT TAB */}
                  {activeTab === "contact" && (
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44] mb-6">
                        Contact MITS Radio 90.8 CRS
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Contacts List */}
                        <div className="space-y-5">
                          <div className="bg-[#fcfbf9] rounded-xl border border-border/80 p-5">
                            <h3 className="font-display font-bold text-[#0f2a44] text-base mb-3 border-b border-border/60 pb-1.5">
                              Broadcasting Team Points
                            </h3>
                            <div className="space-y-4">
                              {radioContacts.map((contact, idx) => (
                                <div key={idx} className="flex justify-between items-start gap-4 text-sm md:text-sm">
                                  <div>
                                    <h4 className="font-bold text-secondary">{contact.name}</h4>
                                    <p className="text-[11px] text-secondary/60">{contact.role}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-[#0f2a44]/5 rounded-xl p-5 border border-[#0f2a44]/10 space-y-4 text-sm md:text-sm text-secondary">
                            <div className="flex gap-2">
                              <MapPin className="w-5 h-5 text-[#b31317] shrink-0 mt-0.5" />
                              <p className="leading-relaxed">
                                <strong>Address:</strong><br />
                                Madanapalle Institute of Technology & Science<br />
                                Deemed to be University<br /> 
                                Kadiri Road, Kurabalakota Mandal, Madanapalle-517325,<br />
                                Andhra Pradesh, India.
                              </p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <Phone className="w-5 h-5 text-[#b31317] shrink-0" />
                              <p><strong>Phone:</strong> 08571-220388, 8712655126, 9100973388</p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <Mail className="w-5 h-5 text-[#b31317] shrink-0" />
                              <p>
                                <strong>E Mail:</strong>{" "}
                                <a href="mailto:mitsradio90.8cr@mits.ac.in" className="text-[#b31317] hover:underline">
                                  mitsradio90.8cr@mits.ac.in
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Scan & App QR codes */}
                        <div className="bg-[#fcfbf9] rounded-xl border border-border/80 p-5 text-center">
                          <h3 className="font-display font-bold text-[#0f2a44] text-base mb-4">
                            Scan & Follow MITS Radio
                          </h3>
                          
                          <div className="grid grid-cols-2 gap-4">
                            {/* Android QR */}
                            <div className="flex flex-col items-center p-3 border border-border rounded-xl bg-white shadow-sm">
                              <p className="text-[10px] font-bold text-secondary mb-2 uppercase tracking-wider">
                                Android App
                              </p>
                              <div className="p-2 border-2 border-[#caa74d]/50 rounded-lg bg-white mb-2">
                                <img
                                  src="https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=https://play.google.com/store/apps/details?id=com.atc.mitsradio"
                                  alt="Android App Download QR Code"
                                  className="w-28 h-28 object-contain"
                                />
                              </div>
                              <span className="text-[10px] text-secondary/60">
                                Google Play
                              </span>
                            </div>

                            {/* iOS QR */}
                            <div className="flex flex-col items-center p-3 border border-border rounded-xl bg-white shadow-sm">
                              <p className="text-[10px] font-bold text-secondary mb-2 uppercase tracking-wider">
                                iOS App
                              </p>
                              <div className="p-2 border-2 border-[#caa74d]/50 rounded-lg bg-white mb-2">
                                <img
                                  src="https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=https://apps.apple.com/in/app/mits-radio-90-8-cr/id1668776731"
                                  alt="iOS App Download QR Code"
                                  className="w-28 h-28 object-contain"
                                />
                              </div>
                              <span className="text-[10px] text-secondary/60">
                                Apple App Store
                              </span>
                            </div>
                          </div>

                          <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-secondary leading-relaxed">
                            Scan these QR codes with your smartphone's camera or a QR scanner to directly download the MITS Community Radio apps from official stores.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* DOWNLOADS TAB */}
                  {activeTab === "downloads" && (
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44] mb-3">
                        Volunteer Forms & Standard Operating Procedures (SOP)
                      </h2>
                      <p className="text-secondary text-sm mb-6 leading-relaxed">
                        Download forms to participate, volunteer, present guests, or submit E-content proposals for MITS Community Radio.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {radioDownloads.map((doc, idx) => (
                          <a
                            key={idx}
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-4 p-4 border border-border hover:border-[#caa74d] rounded-xl hover:shadow-md transition-all group"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-10 h-10 shrink-0 bg-[#b31317]/5 text-[#b31317] rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5" />
                              </div>
                              <span className="font-body font-semibold text-secondary group-hover:text-[#0f2a44] text-sm md:text-sm line-clamp-2 leading-snug">
                                {doc.label}
                              </span>
                            </div>
                            <Download className="w-4 h-4 text-secondary/30 shrink-0 group-hover:text-[#b31317] transition-colors" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MitsRadio;

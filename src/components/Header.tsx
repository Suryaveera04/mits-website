import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import AboutMegaMenu from "@/components/AboutMegaMenu";
import { aboutSections } from "@/data/aboutData";
import HeaderSearchBar from "@/components/HeaderSearchBar";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[]; mega?: "about" };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    mega: "about",
    children: aboutSections.filter((s) => s.href !== "#").map((s) => ({ label: s.label, href: s.href })),
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Programs Offered", href: "/academics" },
      { label: "Departments", href: "/departments" },
      { label: "Academic Regulations", href: "/academic-regulations" },
      { label: "Curriculum & Syllabus", href: "/curriculum-academic-syllabus" },
      { label: "Academic Calendar", href: "/academic-calendar" },
      { label: "Examinations", href: "/examinations" },
      { label: "Library", href: "/library" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admission Process", href: "/admissions" },
      { label: "National Admission Procedure", href: "/national-admissions-procedure" },
      { label: "International Admission Procedure", href: "/international-admissions-procedure" },
      { label: "Eligibility & Fees", href: "/eligibility-and-fees" },
      { label: "Apply Online", href: "https://admission.mits.ac.in/" },
    ],
  },
  { label: "Research", href: "/research" },
  { label: "Placements", href: "/placements" },
  { label: "Campus Life", href: "/campus-life" },
  {
    label: "More",
    href: "",
    children: [
      { label: "Careers", href: "/career" },
      { label: "Infrastructure", href: "/infrastructure" },
      { label: "International Relations", href: "/international-relations" },
      { label: "MITS Radio 90.8 CRS", href: "/mits-radio" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "shadow-xl" : ""}`}>
      {/* Top ticker bar */}
      <div className="bg-primary text-primary-foreground hidden md:block overflow-hidden">
        <div className="h-9 flex items-center justify-between">
          <div className="flex items-center h-full overflow-hidden flex-1">
            <div className="bg-accent text-accent-foreground font-bold text-sm px-4 h-full flex items-center shrink-0 z-10">
              🎓 ADMISSIONS 2026
            </div>
            <div className="overflow-hidden flex-1 relative">
              <div className="flex whitespace-nowrap animate-marquee">
                {[1, 2].map((n) => (
                  <span key={n} className="inline-flex items-center gap-6 px-8 text-sm font-semibold">
                    <span className="text-accent font-bold tracking-wide">🌟 Admissions for 2026 are NOW OPEN!</span>
                    <span className="text-primary-foreground/60">•</span>
                    <span>Apply today at MITS — Deemed to be University</span>
                    <span className="text-primary-foreground/60">•</span>
                    <span className="text-accent font-bold">🚀 Limited seats — Don't miss out!</span>
                    <span className="text-primary-foreground/60">•</span>
                    <span>NAAC A+ Accredited | UGC Recognized | AICTE Approved</span>
                    <span className="text-primary-foreground/60">•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-3 sm:px-5 text-sm font-semibold shrink-0 z-20 bg-primary h-full">
            {/* Blue Box Autonomous Institution Link */}
            <a
              href="https://mits.ac.in/ugc-autonomous"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#005bb5] hover:bg-[#004994] text-white text-xs sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-md shadow-xs hover:shadow transition-all flex items-center gap-1.5 shrink-0 border border-blue-300/30 tracking-wide"
              title="UGC Autonomous Institution"
            >
              <span>🏛️</span>
              <span>Autonomous Institution</span>
            </a>
            <span className="text-primary-foreground/30">|</span>
            {/* Interactive Search Bar in place of Moodle */}
            <HeaderSearchBar variant="topbar" />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white border-b border-border shadow-sm">
        <div className="w-full flex items-center justify-between min-h-16 lg:min-h-20 px-2 sm:px-4 md:px-6 py-2 gap-2 sm:gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center min-w-0 shrink" onClick={() => setMobileOpen(false)}>
            <img
              src={`${import.meta.env.BASE_URL}mits-official-logo.png`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = `${import.meta.env.BASE_URL}mits-logo.png`;
              }}
              alt="MITS Madanapalle official logo"
              className="h-9 min-[400px]:h-11 sm:h-14 md:h-16 lg:h-[76px] w-auto max-w-[170px] min-[360px]:max-w-[200px] min-[400px]:max-w-[250px] sm:max-w-[330px] md:max-w-[390px] object-contain shrink"
            />
            <span className="sr-only">MITS Madanapalle Home</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-end">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className={item.mega ? "" : "relative"}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-0.5 px-2 py-2 text-sm font-semibold transition-colors duration-200 rounded-md
                      ${isActive(item.href) ? "text-primary bg-primary/5" : "text-secondary hover:text-primary hover:bg-primary/5"}
                    `}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </Link>
                  {item.mega === "about" ? (
                    <AboutMegaMenu open={openDropdown === item.label} onClose={() => setOpenDropdown(null)} />
                  ) : (
                    <div
                      className={`absolute top-full left-0 mt-0 pt-1 w-max z-50 transition-all duration-200 ${
                        openDropdown === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-white rounded-lg border border-border shadow-xl py-2">
                        {item.children.map((child) => {
                          const isExternal = child.href.startsWith("http");
                          return isExternal ? (
                            <a
                              key={child.label}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2.5 text-base text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-150 font-medium whitespace-nowrap"
                              style={{ fontFamily: "var(--font-body)" }}
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block px-4 py-2.5 text-base text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-150 font-medium whitespace-nowrap"
                              style={{ fontFamily: "var(--font-body)" }}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-2 py-2 text-sm font-semibold transition-colors duration-200 rounded-md
                    ${isActive(item.href) ? "text-primary bg-primary/5" : "text-secondary hover:text-primary hover:bg-primary/5"}
                  `}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right: Search + Apply + Mobile toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 ml-auto lg:ml-0">
            <HeaderSearchBar variant="navbar" className="hidden lg:flex" />
            <Link to="/admissions" className="shrink-0">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-xs sm:text-sm px-2.5 sm:px-5 h-8 sm:h-9 rounded-full transition-all duration-200 shadow-md hover:shadow-lg shrink-0">
                Apply Now
              </Button>
            </Link>
            <HeaderSearchBar variant="navbar" className="lg:hidden shrink-0" />
            <button
              className="xl:hidden text-secondary hover:text-primary transition-colors p-1.5 rounded-md hover:bg-slate-100 shrink-0"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden bg-white border-t border-border shadow-lg max-h-[75vh] overflow-y-auto"
          >
            {/* Mobile Search input */}
            <div className="px-4 pt-3.5 pb-1">
              <HeaderSearchBar variant="mobile" />
            </div>

            <nav className="w-full px-[20px] py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      className={`flex-1 text-sm font-semibold py-2.5 transition-colors ${
                        isActive(item.href) ? "text-primary" : "text-secondary hover:text-primary"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        className="p-2 text-secondary hover:text-primary"
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  {item.children && mobileExpanded === item.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="pl-4 pb-2 space-y-1 overflow-hidden"
                    >
                      {item.children.map((child) => {
                        const isExternal = child.href.startsWith("http");
                        return isExternal ? (
                          <a
                            key={child.label}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm text-muted-foreground hover:text-primary py-1.5 transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block text-sm text-muted-foreground hover:text-primary py-1.5 transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

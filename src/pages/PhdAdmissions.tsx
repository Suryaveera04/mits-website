// src/pages/PhdAdmissions.tsx - Exact Replica & Enhanced Responsive Layout of https://mits.ac.in/phd-admissions
import { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  GraduationCap, Microscope, Laptop, Radio, Zap, Settings,
  Building2, TrendingUp, Code2, BookOpen, Calculator, Atom,
  FlaskConical, ChevronRight, Download, ExternalLink, FileText,
  CheckCircle2, Sparkles, HelpCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  PHD_SYLLABUS_DEPARTMENTS,
  JANUARY_SUB_TABS,
  JULY_SUB_TABS,
  RESEARCH_AREAS_DEPARTMENTS,
} from "@/data/phdData";
import "./PhdAdmissions.css";

interface PhdAdmissionsProps {
  initialView?: "january" | "july" | "research-areas";
}

// Icon helper to render the corresponding Lucide icon
function getDeptIcon(iconName: string, size = 18) {
  switch (iconName) {
    case "Microscope":   return <Microscope size={size} />;
    case "Laptop":       return <Laptop size={size} />;
    case "Radio":        return <Radio size={size} />;
    case "Zap":          return <Zap size={size} />;
    case "Settings":     return <Settings size={size} />;
    case "Building2":    return <Building2 size={size} />;
    case "TrendingUp":   return <TrendingUp size={size} />;
    case "Code2":        return <Code2 size={size} />;
    case "BookOpen":     return <BookOpen size={size} />;
    case "Calculator":   return <Calculator size={size} />;
    case "Atom":         return <Atom size={size} />;
    case "FlaskConical": return <FlaskConical size={size} />;
    default:             return <GraduationCap size={size} />;
  }
}

export default function PhdAdmissions({ initialView }: PhdAdmissionsProps) {
  const location = useLocation();

  // Determine current active view: "january" | "july" | "research-areas"
  const activeSession = useMemo<"january" | "july" | "research-areas">(() => {
    if (initialView) return initialView;
    const path = location.pathname.toLowerCase();
    if (path.includes("july")) return "july";
    if (path.includes("research-areas")) return "research-areas";
    return "january";
  }, [location.pathname, initialView]);

  // Selected department tab in Syllabus view
  const [activeSyllabusId, setActiveSyllabusId] = useState<string>("ug-tab21");

  // Selected department tab in Research Areas view
  const [activeResearchDeptId, setActiveResearchDeptId] = useState<string>("ug-tab22");

  // Auto-scroll on tab click or update
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSession]);

  // Current active department syllabus
  const activeSyllabus = useMemo(() => {
    return (
      PHD_SYLLABUS_DEPARTMENTS.find((d) => d.id === activeSyllabusId) ||
      PHD_SYLLABUS_DEPARTMENTS[0]
    );
  }, [activeSyllabusId]);

  // Current active research area department
  const activeResearchDept = useMemo(() => {
    return (
      RESEARCH_AREAS_DEPARTMENTS.find((d) => d.id === activeResearchDeptId) ||
      RESEARCH_AREAS_DEPARTMENTS[0]
    );
  }, [activeResearchDeptId]);

  // Banner titles and breadcrumbs based on active view
  const bannerConfig = useMemo(() => {
    switch (activeSession) {
      case "july":
        return {
          title: "Admissions for Ph.D. Programs July 2026-27",
          pageTitle: "Admissions for Ph.D. Programs July 2026-27 | MITS Deemed to be University",
          description: "MITS Ph.D. Admissions July 2026-27 Session - MITSDAT Syllabus, Notifications, Regulations, and Results.",
          deptTitle: "Department wise Syllabus for MITSDAT Exam 2026-27 July Session",
        };
      case "research-areas":
        return {
          title: "Admissions for Ph.D. Programs - Research Areas",
          pageTitle: "Ph.D. Research Areas | MITS Deemed to be University",
          description: "Explore Department-wise Doctoral Research Thrust Areas at MITS Deemed to be University.",
          deptTitle: "Department wise Research Areas",
        };
      case "january":
      default:
        return {
          title: "Admissions for Ph.D. Programs January 2026-27",
          pageTitle: "Admissions for Ph.D. Programs January 2026-27 | MITS Deemed to be University",
          description: "MITS Ph.D. Admissions January 2026-27 Session - MITSDAT Syllabus, Question Paper Pattern, Regulations, and Fee Structure.",
          deptTitle: "Department wise Syllabus for MITSDAT Exam 2026-27 January Session",
        };
    }
  }, [activeSession]);

  // Subtabs list for the top pill bar
  const subTabs = useMemo(() => {
    switch (activeSession) {
      case "july":
        return JULY_SUB_TABS;
      case "research-areas":
      case "january":
      default:
        return JANUARY_SUB_TABS;
    }
  }, [activeSession]);

  return (
    <div className="phd-page-root">
      <SEO
        title={bannerConfig.pageTitle}
        description={bannerConfig.description}
        canonical={location.pathname}
      />
      <Header />

      {/* Spacer for fixed navbar: mobile = 64px, md = 100px, xl = 116px */}
      <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />

      {/* ── HERO BANNER ── */}
      <div className="phd-hero-banner">
        <div className="phd-hero-bg">
          <img
            src={`${import.meta.env.BASE_URL}images/inner-banner.jpg`}
            alt="MITS Ph.D. Admissions Banner"
            className="phd-hero-img"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "https://mits.ac.in/images/inner-banner.jpg";
            }}
          />
          <div className="phd-hero-overlay" />
        </div>
        <div className="phd-hero-content">
          <div className="phd-hero-badge">
            <span className="phd-hero-badge-dot" />
            <span>MITS DEEMED TO BE UNIVERSITY • DOCTORAL ADMISSIONS</span>
          </div>
          <h1 className="phd-hero-title">{bannerConfig.title}</h1>
          <p className="phd-hero-subtitle">{bannerConfig.description}</p>
          <div className="phd-hero-breadcrumbs">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <Link to="/admissions">Admissions</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Ph.D. Admissions</span>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="phd-main-wrapper">
        {/* ── SESSION TOGGLE SWITCHER BAR ── */}
        <div className="phd-session-nav">
          <Link
            to="/phd-admissions"
            className={`phd-session-btn ${activeSession === "january" ? "active" : ""}`}
          >
            <GraduationCap size={18} />
            <span>January 2026-27 Session</span>
          </Link>

          <Link
            to="/phd-admissions-2026-27-july-session"
            className={`phd-session-btn ${activeSession === "july" ? "active" : ""}`}
          >
            <GraduationCap size={18} />
            <span>July 2026-27 Session</span>
          </Link>

          <Link
            to="/research-areas"
            className={`phd-session-btn ${activeSession === "research-areas" ? "active" : ""}`}
          >
            <Microscope size={18} />
            <span>Research Thrust Areas</span>
          </Link>
        </div>

        {/* ── SUBTABS PILLS BAR ── */}
        <div className="sub-subtabs">
          <ul className="sub-subtabs-list">
            {subTabs.map((tab, idx) => {
              const pillClass = tab.isNavy ? "pill-navy" : "";
              if (tab.isExternal) {
                return (
                  <li key={idx} className="sub-subtabs-item">
                    <a
                      href={tab.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`sub-subtabs-link ${pillClass}`}
                    >
                      {tab.badge && <span className="new-badge">NEW</span>}
                      <span>{tab.title}</span>
                      <ExternalLink size={12} className="shrink-0 opacity-75" />
                    </a>
                  </li>
                );
              }

              // Internal Route link
              const isPillActive = location.pathname === tab.href;
              return (
                <li key={idx} className="sub-subtabs-item">
                  <Link
                    to={tab.href}
                    className={`sub-subtabs-link ${pillClass} ${isPillActive ? "active" : ""}`}
                  >
                    {tab.badge && <span className="new-badge">NEW</span>}
                    <span>{tab.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ── 2-COLUMN LAYOUT (.rearch-flex) ── */}
        <div className="rearch-flex">
          {/* ════ LEFT COLUMN: DEPARTMENT NAVIGATION ════ */}
          <div className="rearch-left">
            <div className="dept-title-card">
              <div className="dept-title-badge-row">
                <span className="new-badge">MITSDAT 2026-27</span>
              </div>
              <h3 className="dept-title-heading">
                <GraduationCap size={18} />
                <span>{bannerConfig.deptTitle}</span>
              </h3>
            </div>

            {/* If in Syllabus mode (January or July) */}
            {activeSession !== "research-areas" ? (
              <ul className="courses-tab-list">
                {PHD_SYLLABUS_DEPARTMENTS.map((dept) => {
                  const isSelected = activeSyllabusId === dept.id;
                  return (
                    <li key={dept.id} className="courses-tab-item">
                      <button
                        type="button"
                        onClick={() => setActiveSyllabusId(dept.id)}
                        className={`courses-tab-btn ${isSelected ? "active" : ""}`}
                        aria-selected={isSelected}
                      >
                        <div className="tab-left-content">
                          <div className="tab-icon-wrap">
                            {getDeptIcon(dept.iconName, 18)}
                          </div>
                          <div className="tab-text-wrap">
                            <span className="tab-dept-name">{dept.name}</span>
                            {dept.subname && (
                              <span className="tab-dept-subname">{dept.subname}</span>
                            )}
                          </div>
                        </div>
                        <ChevronRight size={16} className="tab-chevron" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              /* If in Research Areas mode */
              <ul className="courses-tab-list">
                {RESEARCH_AREAS_DEPARTMENTS.map((dept) => {
                  const isSelected = activeResearchDeptId === dept.id;
                  return (
                    <li key={dept.id} className="courses-tab-item">
                      <button
                        type="button"
                        onClick={() => setActiveResearchDeptId(dept.id)}
                        className={`courses-tab-btn ${isSelected ? "active" : ""}`}
                        aria-selected={isSelected}
                      >
                        <div className="tab-left-content">
                          <div className="tab-icon-wrap">
                            {getDeptIcon(dept.iconName, 18)}
                          </div>
                          <div className="tab-text-wrap">
                            <span className="tab-dept-name">{dept.name}</span>
                          </div>
                        </div>
                        <ChevronRight size={16} className="tab-chevron" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* ════ RIGHT COLUMN: CONTENT PANE ════ */}
          <div className="rearch-right">
            {activeSession !== "research-areas" ? (
              /* ── SYLLABUS PDF EMBED PANE ── */
              <div className="research-box">
                <div className="research-box-header">
                  <div className="research-box-title">
                    {getDeptIcon(activeSyllabus.iconName, 20)}
                    <span>{activeSyllabus.heading}</span>
                  </div>
                  <div className="research-box-actions">
                    <a
                      href={activeSyllabus.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="research-action-btn"
                      title="Open full PDF in a new browser tab"
                    >
                      <ExternalLink size={13} />
                      <span>Open in New Tab</span>
                    </a>
                    <a
                      href={activeSyllabus.pdfUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="research-action-btn btn-gold"
                      title="Download syllabus PDF"
                    >
                      <Download size={13} />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>

                {/* Embedded High-Resolution PDF Iframe */}
                <iframe
                  key={activeSyllabus.pdfUrl}
                  src={activeSyllabus.pdfUrl}
                  title={activeSyllabus.heading}
                  className="research-pdf-iframe"
                  loading="lazy"
                />

                {/* Mobile & Tablet Fallback helper */}
                <div className="pdf-mobile-fallback">
                  <p>
                    Having trouble viewing the PDF preview directly on this device?
                  </p>
                  <a
                    href={activeSyllabus.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="research-action-btn btn-gold"
                    style={{ padding: "9px 20px" }}
                  >
                    <Download size={15} />
                    <span>Download {activeSyllabus.name} Syllabus PDF</span>
                  </a>
                </div>
              </div>
            ) : (
              /* ── RESEARCH AREAS LIST PANE ── */
              <div className="research-box">
                <div className="research-box-header">
                  <div className="research-box-title">
                    {getDeptIcon(activeResearchDept.iconName, 20)}
                    <span>{activeResearchDept.heading}</span>
                  </div>
                  <div className="research-box-actions">
                    <span className="thrust-areas-badge">
                      {activeResearchDept.items.length} Thrust Areas
                    </span>
                  </div>
                </div>

                <div className="program-list-container">
                  <ul className="program-list-items">
                    {activeResearchDept.items.map((item, idx) => (
                      <li key={idx} className="program-list-row">
                        <span className="program-bullet-icon">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

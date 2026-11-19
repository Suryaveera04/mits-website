import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Calendar, ChevronLeft, MapPin, Users, BookOpen, Clock,
  ExternalLink, Loader2, FileText, Download, Building2,
  Star, Link2, Mail, Phone, ImageOff, Maximize2, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { getNewsEventBySlug, getNewsEventImageSrc, hasValidEventImage } from "@/data/newsEvents";
import { fetchEventDetail, type CMSEvent } from "@/hooks/useDeptCMSData";
import { useLiveEvents, getCanonicalDept } from "@/hooks/useLiveEvents";

function fmtDate(dateStr?: string | null): string | null {
  if (!dateStr) return null;
  const s = dateStr.trim();
  if (!s || s.startsWith("0000") || s.toLowerCase() === "n/a" || s.toLowerCase() === "upcoming") {
    return null;
  }
  try {
    const d = new Date(s);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }
  } catch {}
  return dateStr;
}

function fmtTime(t?: string | null): string | null {
  if (!t) return null;
  try {
    const parts = t.split(":");
    const h = Number(parts[0]);
    const m = Number(parts[1]);
    if (!isNaN(h) && !isNaN(m)) {
      const ampm = h >= 12 ? "PM" : "AM";
      return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${ampm}`;
    }
  } catch {}
  return t;
}

const NewsEventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getEventBySlug, cmsEvents, loading: liveLoading } = useLiveEvents();
  const [cmsEvent, setCmsEvent] = useState<CMSEvent | null>(null);
  const [cmsLoading, setCmsLoading] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // 1. Resolve live/cached event item
  const liveItem = slug ? (getEventBySlug(slug) || getNewsEventBySlug(slug)) : undefined;

  // 2. Identify numeric CMS event ID if available
  const numId = useMemo(() => {
    if (!slug) return null;
    const match = slug.match(/^cms-(\d+)/) || slug.match(/^(\d+)$/);
    if (match) return Number(match[1]);
    if (liveItem?.id && typeof liveItem.id === "number") return liveItem.id;
    // Look up in cmsEvents by slug number, or match by title
    if (cmsEvents && cmsEvents.length > 0) {
      const matchInCms = cmsEvents.find(
        (c) =>
          c.id === Number(slug) ||
          slug.includes(`-${c.id}-`) ||
          slug.endsWith(`-${c.id}`) ||
          (liveItem?.title && c.title.toLowerCase().trim() === liveItem.title.toLowerCase().trim())
      );
      if (matchInCms) return matchInCms.id;
    }
    return null;
  }, [slug, liveItem?.id, liveItem?.title, cmsEvents]);

  // 3. Fetch authoritative CMS event details if this is a CMS event
  useEffect(() => {
    if (!numId) return;
    let cancelled = false;
    setCmsLoading(true);
    fetchEventDetail(numId)
      .then((ev) => {
        if (!cancelled && ev) {
          setCmsEvent(ev);
        }
      })
      .catch((err) => {
        console.warn("[NewsEventDetail] Failed to fetch CMS event detail:", err);
      })
      .finally(() => {
        if (!cancelled) setCmsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [numId]);

  // Check if anything is available
  const hasData = Boolean(liveItem || cmsEvent);

  // Loading state
  if ((liveLoading || cmsLoading) && !hasData) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
        <Header />
        <div className="flex flex-col items-center justify-center py-40 gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-muted-foreground font-medium">Loading event details…</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Not found state
  if (!hasData) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested event could not be located or may have expired.</p>
          <Button asChild>
            <Link to="/news-events">Back to All Events</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Authoritative field resolution
  const title = cmsEvent?.title || liveItem?.title || "MITS Event";
  const rawDepartment = cmsEvent?.department || liveItem?.department || "";
  const deptInfo = getCanonicalDept(rawDepartment);
  const categoryOrType = cmsEvent?.type || cmsEvent?.event_type || liveItem?.category || "Event";

  // Date formatting
  const formattedFromDate = fmtDate(cmsEvent?.from_date || cmsEvent?.date || liveItem?.date);
  const formattedToDate = fmtDate(cmsEvent?.to_date);
  const displayDate = formattedFromDate && formattedToDate && formattedFromDate !== formattedToDate
    ? `${formattedFromDate} – ${formattedToDate}`
    : (formattedFromDate || cmsEvent?.date || liveItem?.date || "Date TBA");

  // Time formatting
  const timeStr = (() => {
    if (cmsEvent?.from_time && cmsEvent?.to_time) {
      return `${fmtTime(cmsEvent.from_time)} – ${fmtTime(cmsEvent.to_time)}`;
    }
    if (cmsEvent?.from_time) return fmtTime(cmsEvent.from_time);
    return null;
  })();

  const venue = cmsEvent?.venue || liveItem?.location || "";

  // Full matter / description - never duplicated
  const fullDescription = (cmsEvent?.description || liveItem?.details || liveItem?.excerpt || "").trim();

  // Poster resolution
  const rawPoster = cmsEvent?.posterDataUrl || cmsEvent?.poster || liveItem?.image;
  const imageSrc = getNewsEventImageSrc(rawPoster);
  const showImage = Boolean(imageSrc && !imageFailed);

  // PDF report document resolution
  const pdfUrl = (cmsEvent as any)?.file || liveItem?.pdfUrl || (rawPoster && rawPoster.toLowerCase().endsWith(".pdf") ? rawPoster : null);

  const coordinators = cmsEvent?.coordinators || [];
  const resourcePersons = cmsEvent?.resourcePersons || [];
  const gallery = cmsEvent?.gallery || [];
  const registrationLink = cmsEvent?.registrationLink || null;
  const registrationDeadline = cmsEvent?.registrationDeadline ? fmtDate(cmsEvent.registrationDeadline) : null;
  const sponsorOrg = cmsEvent?.sponsorOrg || null;
  const sponsorAmount = cmsEvent?.sponsorAmount || null;
  const collaborationDept = cmsEvent?.collaborationDept || null;
  const totalRegistered = cmsEvent?.totalRegistered ?? null;
  const totalAttended = cmsEvent?.totalAttended ?? null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title={`${title} – MITS Madanapalle`}
        description={fullDescription ? fullDescription.replace(/<[^>]+>/g, "").slice(0, 160) : `Event hosted by Department of ${deptInfo.name}`}
        canonical={`/news-events/${slug}`}
      />
      <main className="pt-24 pb-20">
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button asChild variant="outline" className="mb-6 rounded-full">
              <Link to="/news-events" className="inline-flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to All Events
              </Link>
            </Button>

            <article className="bg-card border border-border rounded-2xl overflow-hidden shadow-md">
              {/* Event Poster / Banner */}
              {showImage && (
                <div className="w-full bg-slate-950 flex flex-col items-center justify-center relative p-3 sm:p-5">
                  {liveItem?.pinned && (
                    <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1 rounded-full bg-[#b30000] px-3 py-1 text-xs font-bold text-white shadow-md">
                      📌 Pinned Event
                    </div>
                  )}
                  <img
                    src={imageSrc}
                    alt={title}
                    className="max-h-[600px] w-auto max-w-full object-contain rounded-xl shadow-lg cursor-pointer hover:opacity-95 transition-opacity"
                    onClick={() => setLightboxImg(imageSrc)}
                    onError={() => setImageFailed(true)}
                  />
                  <div className="mt-3 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setLightboxImg(imageSrc)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 hover:bg-white text-slate-800 text-xs font-semibold shadow-md transition-all cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-primary" />
                      View Full Flyer
                    </button>
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8 space-y-6">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-secondary text-white inline-flex items-center gap-1 shadow-xs">
                    <Building2 className="w-3.5 h-3.5" />
                    {deptInfo.badge}
                  </span>
                  {categoryOrType && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-foreground border border-border">
                      {categoryOrType}
                    </span>
                  )}
                  {cmsLoading && (
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary animate-pulse inline-flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      Syncing event details…
                    </span>
                  )}
                </div>

                {/* Event Title */}
                <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                  {title}
                </h1>

                {/* Meta details bar */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border/70">
                  <div className="flex items-center gap-2 font-medium">
                    <Calendar className="w-4 h-4 text-primary shrink-0" />
                    <span>{displayDate}</span>
                  </div>
                  {timeStr && (
                    <div className="flex items-center gap-2 font-medium">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      <span>{timeStr}</span>
                    </div>
                  )}
                  {venue && (
                    <div className="flex items-center gap-2 font-medium">
                      <MapPin className="w-4 h-4 text-secondary shrink-0" />
                      <span>{venue}</span>
                    </div>
                  )}
                </div>

                {/* Quick Info Grid for structured CMS metadata */}
                {(registrationDeadline || collaborationDept || sponsorOrg || totalRegistered != null || totalAttended != null) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-muted/20 p-4 rounded-xl border border-border/60 text-xs">
                    {registrationDeadline && (
                      <div className="space-y-0.5">
                        <span className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">Registration Deadline</span>
                        <p className="font-bold text-foreground text-sm">{registrationDeadline}</p>
                      </div>
                    )}
                    {collaborationDept && (
                      <div className="space-y-0.5">
                        <span className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">In Association With</span>
                        <p className="font-bold text-foreground text-sm">{collaborationDept}</p>
                      </div>
                    )}
                    {sponsorOrg && (
                      <div className="space-y-0.5">
                        <span className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">Sponsored By</span>
                        <p className="font-bold text-foreground text-sm">
                          {sponsorOrg} {sponsorAmount ? `(${sponsorAmount})` : ""}
                        </p>
                      </div>
                    )}
                    {totalRegistered != null && (
                      <div className="space-y-0.5">
                        <span className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">Total Registered</span>
                        <p className="font-bold text-foreground text-sm">{totalRegistered}</p>
                      </div>
                    )}
                    {totalAttended != null && (
                      <div className="space-y-0.5">
                        <span className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">Total Attended</span>
                        <p className="font-bold text-foreground text-sm">{totalAttended}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Matter of the Event - Displayed ONCE without duplicate excerpt */}
                {fullDescription ? (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-bold text-secondary flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      About this Event
                    </h3>
                    {/<[a-z][\s\S]*>/i.test(fullDescription) ? (
                      <div
                        className="text-muted-foreground text-sm sm:text-base leading-relaxed text-left prose prose-slate max-w-none space-y-4"
                        dangerouslySetInnerHTML={{ __html: fullDescription }}
                      />
                    ) : (
                      <div className="text-muted-foreground text-sm sm:text-base leading-relaxed text-left">
                        {fullDescription.replace(/&amp;/gi, "&").replace(/&nbsp;/gi, " ")}
                      </div>
                    )}
                  </div>
                ) : null}

                {/* Resource Persons */}
                {resourcePersons.length > 0 && (
                  <div className="pt-6 border-t border-border/70 space-y-4">
                    <h3 className="text-base sm:text-lg font-bold text-secondary flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary" />
                      Resource Persons
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {resourcePersons.map((rp, idx) => (
                        <div key={rp.id || idx} className="bg-muted/30 p-4 rounded-xl border border-border/60 space-y-1">
                          <p className="font-bold text-sm text-foreground">{rp.name}</p>
                          {rp.designation && <p className="text-xs text-primary font-medium">{rp.designation}</p>}
                          {rp.organization && <p className="text-xs text-muted-foreground">{rp.organization}</p>}
                          {rp.topic && (
                            <p className="text-xs text-secondary mt-1 font-medium bg-secondary/10 px-2 py-1 rounded inline-block">
                              Topic: {rp.topic}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Coordinators */}
                {coordinators.length > 0 && (
                  <div className="pt-6 border-t border-border/70 space-y-4">
                    <h3 className="text-base sm:text-lg font-bold text-secondary flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Event Coordinators
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {coordinators.map((c, idx) => (
                        <div key={c.id || idx} className="bg-muted/30 p-4 rounded-xl border border-border/60 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-bold text-sm text-foreground">{c.name}</p>
                            {c.type && (
                              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                {c.type}
                              </span>
                            )}
                          </div>
                          {c.role && <p className="text-xs text-muted-foreground">{c.role}</p>}
                          {c.email && (
                            <a href={`mailto:${c.email}`} className="text-xs text-primary hover:underline flex items-center gap-1.5 pt-1">
                              <Mail className="w-3 h-3" />
                              {c.email}
                            </a>
                          )}
                          {c.phone && (
                            <a href={`tel:${c.phone}`} className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5">
                              <Phone className="w-3 h-3" />
                              {c.phone}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Photo Gallery (if multiple pictures available) */}
                {gallery.length > 0 && (
                  <div className="pt-6 border-t border-border/70 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-secondary">Event Gallery ({gallery.length} Photos)</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {gallery.map((gUrl, gIdx) => (
                        <div
                          key={gIdx}
                          role="button"
                          tabIndex={0}
                          onClick={() => setLightboxImg(gUrl)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setLightboxImg(gUrl);
                            }
                          }}
                          className="rounded-xl overflow-hidden aspect-video bg-muted border border-border/60 hover:opacity-90 hover:scale-[1.02] transition-all block cursor-pointer group relative"
                        >
                          <img
                            src={gUrl}
                            alt={`${title} photo ${gIdx + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="px-2.5 py-1 rounded-full bg-black/60 text-white text-[11px] font-medium flex items-center gap-1">
                              <Maximize2 className="w-3 h-3" /> Zoom
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Call to Action: Registration Link & Official PDF Report */}
                {(registrationLink || pdfUrl) && (
                  <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-muted/30 p-5 rounded-xl border border-border/60">
                    <div className="space-y-1">
                      <h4 className="font-bold text-foreground text-base flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#b30000]" />
                        Official Event Resources
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Access event registration portals or download official event proceedings.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                      {registrationLink && (
                        <a
                          href={registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-xs sm:text-sm hover:bg-primary/90 transition-colors shadow-xs"
                        >
                          <Link2 className="w-4 h-4" />
                          Register for Event
                          <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                        </a>
                      )}

                      {pdfUrl && (
                        <a
                          href={pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#b30000] text-white font-semibold text-xs sm:text-sm hover:bg-[#8f0000] transition-colors shadow-xs"
                        >
                          <Download className="w-4 h-4" />
                          View Event Report
                          <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* Full Screen Image Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setLightboxImg(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxImg(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10 cursor-pointer"
              aria-label="Close image popup"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg}
                alt="Enlarged view"
                className="max-h-[86vh] max-w-[92vw] object-contain rounded-xl shadow-2xl border border-white/10"
              />
              <div className="mt-3 flex items-center gap-2">
                <a
                  href={lightboxImg}
                  download="mits-event-image.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-colors border border-white/15"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Image
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default NewsEventDetail;

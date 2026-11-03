import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Calendar, ChevronLeft, MapPin, Users, BookOpen, Clock,
  ExternalLink, Loader2, FileText, Download
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getNewsEventBySlug, getNewsEventImageSrc } from "@/data/newsEvents";
import { fetchEventDetail, type CMSEvent } from "@/hooks/useDeptCMSData";
import { useLiveEvents } from "@/hooks/useLiveEvents";

const NewsEventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getEventBySlug, loading: liveLoading } = useLiveEvents();
  const [cmsEvent, setCmsEvent] = useState<CMSEvent | null>(null);
  const [cmsLoading, setCmsLoading] = useState(false);

  // 1. Check live Google Sheet events & static baseline
  const liveItem = slug ? (getEventBySlug(slug) || getNewsEventBySlug(slug)) : undefined;

  // 2. If not found in live/static, check if slug points to a CMS numeric ID or cms-prefix
  useEffect(() => {
    if (!slug || liveItem) return;

    const numId = Number(slug.replace(/^cms-/, ""));
    if (!isNaN(numId) && numId > 0) {
      setCmsLoading(true);
      fetchEventDetail(numId)
        .then((ev) => setCmsEvent(ev))
        .finally(() => setCmsLoading(false));
    }
  }, [slug, liveItem]);

  // Loading state
  if (liveLoading && !liveItem && !cmsEvent) {
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

  // Render Live Sheet or Static Event
  if (liveItem) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <SEO
          title={`${liveItem.title} – MITS Madanapalle`}
          description={liveItem.excerpt}
          canonical={`/news-events/${slug}`}
        />
        <main className="pt-24 pb-20">
          <section className="py-14">
            <div className="container mx-auto px-4 max-w-4xl">
              <Button asChild variant="outline" className="mb-6">
                <Link to="/news-events" className="inline-flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  Back to Events
                </Link>
              </Button>

              <article className="bg-card border border-border rounded-2xl overflow-hidden shadow-md">
                <div className="relative">
                  {liveItem.pinned && (
                    <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1 rounded-full bg-[#b30000] px-3 py-1 text-xs font-bold text-white shadow-md">
                      📌 Pinned Event
                    </div>
                  )}
                  <img
                    src={getNewsEventImageSrc(liveItem.image)}
                    alt={liveItem.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                    {liveItem.category || "Campus Event"}
                  </p>
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                    {liveItem.title}
                  </h1>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{liveItem.date}</span>
                    </div>
                    {liveItem.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span>{liveItem.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Short summary / excerpt */}
                  {liveItem.excerpt && liveItem.excerpt !== liveItem.details && (
                    <p className="text-lg font-medium text-foreground/90 leading-relaxed mb-6 bg-muted/40 p-4 rounded-xl border border-border/40">
                      {liveItem.excerpt}
                    </p>
                  )}

                  {/* Full details */}
                  <div className="text-muted-foreground text-base md:text-lg leading-relaxed whitespace-pre-line space-y-4">
                    {liveItem.details}
                  </div>

                  {/* Optional PDF Report Download Link */}
                  {liveItem.pdfUrl && (
                    <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-muted/30 p-5 rounded-xl border border-border/60">
                      <div>
                        <h4 className="font-semibold text-foreground text-base flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#b30000]" />
                          Event Report Document
                        </h4>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          Download or view the official event proceedings report (PDF).
                        </p>
                      </div>

                      <a
                        href={liveItem.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#b30000] text-white font-semibold text-sm hover:bg-[#8f0000] transition-colors shadow-sm shrink-0"
                      >
                        <Download className="w-4 h-4" />
                        View Event Report
                        <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // Render CMS Event (if loaded from database)
  if (cmsEvent) {
    const posterSrc = cmsEvent.poster
      ? (cmsEvent.poster.startsWith("http") ? cmsEvent.poster : `${import.meta.env.BASE_URL}${cmsEvent.poster.replace(/^\//, "")}`)
      : null;

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <SEO
          title={`${cmsEvent.title} – MITS Madanapalle`}
          description={cmsEvent.description || `Event hosted by Department of ${cmsEvent.department || "MITS"}`}
          canonical={`/news-events/${slug}`}
        />
        <main className="pt-24 pb-20">
          <section className="py-14">
            <div className="container mx-auto px-4 max-w-4xl">
              <Button asChild variant="outline" className="mb-6">
                <Link to="/news-events" className="inline-flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  Back to All Events
                </Link>
              </Button>

              <article className="bg-card border border-border rounded-2xl overflow-hidden shadow-md">
                {posterSrc && (
                  <div className="w-full bg-slate-900 flex justify-center max-h-[460px] overflow-hidden">
                    <img src={posterSrc} alt={cmsEvent.title} className="w-full h-auto object-contain max-h-[460px]" />
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {cmsEvent.department && (
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-secondary text-white">
                        {cmsEvent.department}
                      </span>
                    )}
                    {cmsEvent.type && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-foreground">
                        {cmsEvent.type}
                      </span>
                    )}
                  </div>

                  <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
                    {cmsEvent.title}
                  </h1>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground pb-6 border-b border-border">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{cmsEvent.date || cmsEvent.from_date || "Date TBA"}</span>
                    </div>
                    {cmsEvent.venue && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span>{cmsEvent.venue}</span>
                      </div>
                    )}
                  </div>

                  {cmsEvent.description && (
                    <div className="text-muted-foreground text-base leading-relaxed whitespace-pre-line mb-6">
                      {cmsEvent.description}
                    </div>
                  )}

                  {cmsEvent.coordinators && cmsEvent.coordinators.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-border">
                      <h3 className="text-base font-bold text-foreground flex items-center gap-2 mb-4">
                        <Users className="w-4 h-4 text-primary" />
                        Event Coordinators
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {cmsEvent.coordinators.map((c) => (
                          <div key={c.id} className="bg-muted/40 p-3.5 rounded-xl border border-border">
                            <p className="font-semibold text-sm text-foreground">{c.name}</p>
                            {c.role && <p className="text-xs text-muted-foreground">{c.role}</p>}
                            {c.email && <p className="text-xs text-primary mt-1">{c.email}</p>}
                            {c.phone && <p className="text-xs text-muted-foreground">{c.phone}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {cmsEvent.resourcePersons && cmsEvent.resourcePersons.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-border">
                      <h3 className="text-base font-bold text-foreground flex items-center gap-2 mb-4">
                        <BookOpen className="w-4 h-4 text-secondary" />
                        Resource Persons
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {cmsEvent.resourcePersons.map((rp) => (
                          <div key={rp.id} className="bg-muted/40 p-3.5 rounded-xl border border-border">
                            <p className="font-semibold text-sm text-foreground">{rp.name}</p>
                            {rp.designation && <p className="text-xs text-muted-foreground">{rp.designation}</p>}
                            {rp.organization && <p className="text-xs text-secondary font-medium">{rp.organization}</p>}
                            {rp.topic && <p className="text-xs text-muted-foreground mt-1">Topic: {rp.topic}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // Not found
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
};

export default NewsEventDetail;

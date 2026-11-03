import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, MapPin, Users, BookOpen, Clock, ExternalLink, Loader2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getNewsEventBySlug, getNewsEventImageSrc } from "@/data/newsEvents";
import { fetchEventDetail, type CMSEvent } from "@/hooks/useDeptCMSData";

const NewsEventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [cmsEvent, setCmsEvent] = useState<CMSEvent | null>(null);
  const [loading, setLoading] = useState(false);

  const staticItem = slug ? getNewsEventBySlug(slug) : undefined;

  useEffect(() => {
    if (!slug || staticItem) return;

    // Check if slug is a numeric CMS ID or starts with "cms-"
    const numId = Number(slug.replace(/^cms-/, ""));
    if (!isNaN(numId) && numId > 0) {
      setLoading(true);
      fetchEventDetail(numId)
        .then((ev) => setCmsEvent(ev))
        .finally(() => setLoading(false));
    }
  }, [slug, staticItem]);

  if (staticItem) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <SEO
          title={`${staticItem.title} – MITS Madanapalle`}
          description={staticItem.excerpt}
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
                <img src={getNewsEventImageSrc(staticItem.image)} alt={staticItem.title} className="w-full h-64 md:h-80 object-cover" />
                <div className="p-6 md:p-8">
                  <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">{staticItem.category}</p>
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                    {staticItem.title}
                  </h1>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{staticItem.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{staticItem.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">{staticItem.details}</p>
                </div>
              </article>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (loading) {
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

  if (cmsEvent) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <SEO
          title={`${cmsEvent.title} – MITS Madanapalle`}
          description={cmsEvent.description || cmsEvent.title}
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
                {cmsEvent.poster && (
                  <img src={cmsEvent.poster} alt={cmsEvent.title} className="w-full max-h-96 object-contain bg-slate-900" />
                )}
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {cmsEvent.department && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-secondary text-white">
                        {cmsEvent.department}
                      </span>
                    )}
                    {cmsEvent.type && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                        {cmsEvent.type}
                      </span>
                    )}
                  </div>

                  <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                    {cmsEvent.title}
                  </h1>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
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
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6 whitespace-pre-line">
                      {cmsEvent.description}
                    </p>
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

  // Not found fallback
  return (
    <div className="min-h-screen bg-background">
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

import { Calendar, ChevronRight, PartyPopper, Building2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { getNewsEventImageSrc } from "@/data/newsEvents";
import InstagramFeed from "@/components/InstagramFeed";
import { useLiveEvents } from "@/hooks/useLiveEvents";

const EventCardSkeleton = ({ index }: { index: number }) => (
  <div
    className="rounded-2xl overflow-hidden bg-white border border-border/50 shadow-sm flex flex-col relative"
    style={{ height: "300px" }}
  >
    {/* Animated image skeleton with shimmer sweep */}
    <div className="relative h-[210px] bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"
        style={{ animationDuration: `${1.2 + index * 0.15}s` }}
      />
      {/* Badge placeholder */}
      <div className="absolute top-3 left-3 w-24 h-6 rounded-full bg-slate-300/80 animate-pulse" />
      {/* Silhouette icon */}
      <div className="w-12 h-12 rounded-full bg-slate-300/50 flex items-center justify-center text-slate-400">
        <Calendar className="w-6 h-6 opacity-60" />
      </div>
    </div>

    {/* Content skeleton */}
    <div
      className="px-4 py-3 flex flex-col justify-center flex-1 space-y-2.5"
      style={{ background: "rgba(241,245,252,0.85)" }}
    >
      <div className="h-4 bg-slate-300/80 rounded w-5/6 animate-pulse" />
      <div className="h-3 bg-slate-200 rounded w-1/2 animate-pulse" />
      <div className="flex items-center justify-between pt-1">
        <div className="h-3 bg-slate-200 rounded w-24 animate-pulse" />
        <div className="h-3 bg-slate-200 rounded w-20 animate-pulse" />
      </div>
    </div>
  </div>
);

const NewsEventsSection = () => {
  const { latestDeptEvents, events, loading } = useLiveEvents();
  // Strictly one most recently entered event per department, top 6 departments
  const displayEvents = latestDeptEvents.slice(0, 6);
  const isFetching = loading && displayEvents.length === 0;

  return (
    <section className="py-20 bg-muted" id="news">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-[#b30000] font-body font-semibold tracking-[0.18em] uppercase text-sm md:text-sm mb-3">Stay Updated</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4 leading-tight">Trending, News &amp; Events</h2>
            <p className="font-body text-[#1a1a1a] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Institutional updates, live campus events, and student highlights inspired by the official MITS portal.
            </p>
          </div>
        </ScrollReveal>

        <div className="mb-12">
          <ScrollReveal>
            <div className="bg-white border border-border rounded-2xl p-5 shadow-sm lg:h-[600px] flex flex-col w-full">
              <InstagramFeed />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <PartyPopper className="w-6 h-6 text-[#b30000]" aria-hidden="true" />
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[#0f172a]">Latest Events</h3>
              {isFetching && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold animate-pulse ml-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-primary" />
                  Loading live events…
                </span>
              )}
            </div>
            {!isFetching && events.length > 0 && (
              <Link
                to="/news-events"
                className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                View All ({events.length})
                <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </ScrollReveal>

        {isFetching ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <EventCardSkeleton key={idx} index={idx} />
            ))}
          </div>
        ) : displayEvents.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-border max-w-xl mx-auto p-8 shadow-sm">
            <PartyPopper className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" />
            <h4 className="font-display text-lg font-bold text-foreground mb-1">Connecting to Event Portal</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Live departmental events are currently syncing from the database. Please check back shortly or browse all campus updates.
            </p>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/news-events">View Event Archive</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayEvents.map((item, i) => {
              const deptLabel = item.departmentBadge || item.department || "MITS";
              const imageSrc = getNewsEventImageSrc(item.image);

              return (
                <ScrollReveal key={item.slug} delay={i * 0.08}>
                  <Link
                    to={`/news-events/${item.slug}`}
                    className="block group relative rounded-2xl overflow-hidden bg-white border border-border/40
                      shadow-md transition-all duration-400 ease-out
                      hover:shadow-2xl hover:-translate-y-2 flex flex-col"
                    style={{ height: "300px" }}
                  >
                    <div className="relative overflow-hidden h-[210px] bg-slate-900">
                      {/* Department Badge */}
                      <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-full bg-secondary/95 px-3 py-1 text-[11px] font-bold text-white shadow-md backdrop-blur">
                        <Building2 className="w-3 h-3" />
                        {deptLabel}
                      </div>

                      {item.pinned && (
                        <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-[#b30000] px-2.5 py-1 text-[11px] font-bold text-white shadow-md backdrop-blur">
                          📌 Pinned
                        </div>
                      )}

                      {item.image ? (
                        <img
                          src={imageSrc}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                          onError={(e) => {
                            const target = e.currentTarget;
                            const fallback = `${import.meta.env.BASE_URL}Hero-Section/image-2.jpg`;
                            if (target.src !== fallback) {
                              target.src = fallback;
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300">
                          <Calendar className="w-10 h-10 mb-2 text-secondary opacity-80" />
                          <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Department of</span>
                          <span className="font-bold text-sm text-white mt-0.5">{item.department || "MITS"}</span>
                        </div>
                      )}
                    </div>

                    <div
                      className="px-4 py-3 flex flex-col justify-center flex-1"
                      style={{ background: "rgba(241,245,252,1)" }}
                    >
                      <h4 className="text-gray-800 font-bold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h4>
                      <div className="text-gray-500 text-xs mt-1.5 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3 h-3 flex-shrink-0 text-secondary" />
                          {item.date}
                        </span>
                        {item.location && (
                          <span className="truncate max-w-[130px] text-gray-500 font-medium">
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Hover slide-up details overlay */}
                    <div
                      className="absolute inset-0 flex flex-col justify-end
                        opacity-0 translate-y-4
                        group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-400 ease-out pointer-events-none group-hover:pointer-events-auto"
                      style={{ background: "rgba(140,50,60,0.75)" }}
                    >
                      <div
                        className="px-5 py-4"
                        style={{ background: "rgba(120,40,52,0.92)" }}
                      >
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                          {deptLabel}
                        </div>
                        <h4 className="text-white font-bold text-sm leading-snug line-clamp-2 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 text-xs flex items-center gap-1.5 mb-2">
                          <Calendar className="w-3 h-3 flex-shrink-0" />
                          {item.date}
                        </p>
                        <p className="text-slate-200 text-xs leading-relaxed line-clamp-2 mb-3">
                          {item.excerpt}
                        </p>
                        <span
                          className="inline-flex items-center gap-1.5 w-fit px-4 py-1.5 rounded-full
                            bg-secondary text-white text-xs font-semibold shadow-md"
                        >
                          View Event
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        )}

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-[#b30000] text-[#b30000] hover:bg-[#b30000] hover:text-white font-body font-semibold px-6 rounded-full"
            >
              <Link to="/news-events">View All Campus Events</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsEventsSection;

import { useState } from "react";
import { Calendar, ChevronRight, PartyPopper, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { getNewsEventImageSrc, newsEvents } from "@/data/newsEvents";
import InstagramFeed from "@/components/InstagramFeed";
import { useAllCMSEvents, type CMSEvent } from "@/hooks/useDeptCMSData";
import EventDetailModal from "@/components/EventDetailModal";

const NewsEventsSection = () => {
  const { events: cmsEvents, loading: cmsLoading } = useAllCMSEvents();
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  const displayEvents = cmsEvents.length > 0 ? cmsEvents.slice(0, 6) : [];

  return (
    <section className="py-20 bg-muted" id="news">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-[#b30000] font-body font-semibold tracking-[0.18em] uppercase text-sm md:text-sm mb-3">Stay Updated</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4 leading-tight">Trending, News &amp; Events</h2>
            <p className="font-body text-[#1a1a1a] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Live updates, academic conferences, guest lectures, and campus activities from all departments.
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
            </div>
            <Link
              to="/news-events"
              className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
            >
              View All ({cmsEvents.length > 0 ? cmsEvents.length : newsEvents.length})
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayEvents.length > 0
            ? displayEvents.map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 0.08}>
                  <div
                    onClick={() => setSelectedEventId(item.id)}
                    className="block group relative rounded-2xl overflow-hidden bg-white border border-border/40
                      shadow-md transition-all duration-400 ease-out cursor-pointer
                      hover:shadow-2xl hover:-translate-y-2"
                    style={{ height: "300px" }}
                  >
                    <div className="relative overflow-hidden h-[210px] bg-slate-100">
                      {item.poster ? (
                        <img
                          src={item.poster}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400 p-4">
                          <Calendar className="w-10 h-10 mb-2 text-primary opacity-60" />
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                            {item.department || "MITS Event"}
                          </span>
                        </div>
                      )}
                      {item.department && (
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-secondary/90 text-white backdrop-blur-sm shadow-sm">
                          {item.department}
                        </span>
                      )}
                      {item.type && (
                        <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/90 text-primary backdrop-blur-sm shadow-sm">
                          {item.type}
                        </span>
                      )}
                    </div>

                    <div
                      className="px-4 py-3 flex flex-col justify-center"
                      style={{ height: "90px", background: "rgba(241,245,252,1)" }}
                    >
                      <h4 className="text-gray-800 font-bold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-secondary flex-shrink-0" />
                          {item.date || item.from_date || "Upcoming"}
                        </span>
                        {item.venue && (
                          <span className="flex items-center gap-1 line-clamp-1 max-w-[120px] truncate">
                            <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                            {item.venue}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div
                      className="absolute inset-0 flex flex-col justify-end
                        opacity-0 translate-y-4
                        group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-400 ease-out pointer-events-none group-hover:pointer-events-auto"
                      style={{ background: "rgba(140,50,60,0.70)" }}
                    >
                      <div
                        className="px-5 py-4"
                        style={{ background: "rgba(120,40,52,0.92)" }}
                      >
                        <h4 className="text-white font-bold text-sm leading-snug line-clamp-2 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 text-xs flex items-center gap-1.5 mb-2">
                          <Calendar className="w-3 h-3 flex-shrink-0 text-secondary" />
                          {item.date || item.from_date || "Date TBA"}
                        </p>
                        <p className="text-slate-200 text-xs leading-relaxed line-clamp-2 mb-3">
                          {item.description || "Click to see detailed coordinator info, resource persons, schedule, and registration links."}
                        </p>
                        <span
                          className="inline-flex items-center gap-1.5 w-fit px-4 py-1.5 rounded-full
                            bg-secondary text-white text-xs font-semibold shadow-md"
                        >
                          View Details
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))
            : newsEvents.slice(0, 6).map((item, i) => (
                <ScrollReveal key={item.slug} delay={i * 0.08}>
                  <Link
                    to={`/news-events/${item.slug}`}
                    className="block group relative rounded-2xl overflow-hidden bg-white border border-border/40
                      shadow-md transition-all duration-400 ease-out
                      hover:shadow-2xl hover:-translate-y-2"
                    style={{ height: "288px" }}
                  >
                    <div className="relative overflow-hidden h-[208px]">
                      <img
                        src={getNewsEventImageSrc(item.image)}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>

                    <div
                      className="px-4 py-3 flex flex-col justify-center"
                      style={{ height: "80px", background: "rgba(241,245,252,1)" }}
                    >
                      <h4 className="text-gray-800 font-bold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 flex-shrink-0 text-secondary" />
                        {item.date}
                      </p>
                    </div>

                    <div
                      className="absolute inset-0 flex flex-col justify-end
                        opacity-0 translate-y-4
                        group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-400 ease-out pointer-events-none group-hover:pointer-events-auto"
                      style={{ background: "rgba(140,50,60,0.70)" }}
                    >
                      <div
                        className="px-5 py-4"
                        style={{ background: "rgba(120,40,52,0.88)" }}
                      >
                        <h4 className="text-white font-bold text-sm leading-snug line-clamp-2 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm flex items-center gap-1.5 mb-2">
                          <Calendar className="w-3 h-3 flex-shrink-0" />
                          {item.date}
                        </p>
                        <p className="text-slate-200 text-sm leading-relaxed line-clamp-3 mb-3">
                          {item.excerpt}
                        </p>
                        <span
                          className="inline-flex items-center gap-1.5 w-fit px-4 py-1.5 rounded-full
                            bg-secondary text-white text-sm font-semibold shadow-md"
                        >
                          View Event
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
        </div>

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

      {selectedEventId && (
        <EventDetailModal
          eventId={selectedEventId}
          onClose={() => setSelectedEventId(null)}
        />
      )}
    </section>
  );
};

export default NewsEventsSection;

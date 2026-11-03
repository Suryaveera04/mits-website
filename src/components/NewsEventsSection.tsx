import { Calendar, ChevronRight, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { getNewsEventImageSrc } from "@/data/newsEvents";
import InstagramFeed from "@/components/InstagramFeed";
import { useLiveEvents } from "@/hooks/useLiveEvents";

const NewsEventsSection = () => {
  const { events } = useLiveEvents();

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
            </div>
            <Link
              to="/news-events"
              className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
            >
              View All ({events.length})
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(0, 6).map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.08}>
              <Link
                to={`/news-events/${item.slug}`}
                className="block group relative rounded-2xl overflow-hidden bg-white border border-border/40
                  shadow-md transition-all duration-400 ease-out
                  hover:shadow-2xl hover:-translate-y-2"
                style={{ height: "288px" }}
              >
                <div className="relative overflow-hidden h-[208px]">
                  {(item as { pinned?: boolean }).pinned && (
                    <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-full bg-[#b30000] px-2.5 py-1 text-[11px] font-bold text-white shadow-md backdrop-blur">
                      📌 Pinned
                    </div>
                  )}
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
    </section>
  );
};

export default NewsEventsSection;

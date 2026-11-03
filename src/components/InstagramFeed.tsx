import { useEffect, useRef, useState } from "react";
import { Instagram, Play, ExternalLink, ArrowLeft, ArrowRight, Pause, PlayCircle, Pin } from "lucide-react";
import { useTrendingFeed } from "@/hooks/useTrendingFeed";
import { SHEETS_CONFIG } from "@/config/sheetsConfig";

const USERNAME = SHEETS_CONFIG.INSTAGRAM_HANDLE;
const PROFILE_URL = SHEETS_CONFIG.INSTAGRAM_PROFILE_URL;

const InstagramFeed = () => {
  const { items: visibleItems } = useTrendingFeed();
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCardRow = (direction: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.max(240, Math.floor(el.clientWidth * 0.8));
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  const resetScrollIfNeeded = () => {
    const el = scrollRef.current;
    if (!el) return;
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 8) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || visibleItems.length === 0) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const autoScrollHandle = window.setInterval(() => {
      if (isPaused || document.visibilityState !== "visible") return;
      el.scrollLeft += 1;
      resetScrollIfNeeded();
    }, 24);

    return () => window.clearInterval(autoScrollHandle);
  }, [isPaused, visibleItems.length]);

  return (
    <div className="flex flex-col h-full min-h-0">
      <div className="flex flex-col gap-4 mb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-2">
            <h3 className="relative inline-block font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight">
              What&apos;s Trending <span className="text-gradient-red">On</span>
              <span className="absolute left-0 -bottom-2 h-1 w-24 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] shadow-[0_0_18px_rgba(221,42,123,0.35)]" />
            </h3>
          </div>

          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-[#0f172a] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <Instagram className="w-4 h-4 text-[#dd2a7b]" /> @{USERNAME}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {visibleItems.length > 0 && (
            <button
              type="button"
              onClick={() => setIsPaused((value) => !value)}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 border border-border text-[#0f172a] transition-colors hover:border-[#b30000] hover:text-[#b30000]"
            >
              {isPaused ? <Pause className="w-3.5 h-3.5" /> : <PlayCircle className="w-3.5 h-3.5" />}
              {isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            </button>
          )}
        </div>
      </div>

      <div className="hidden sm:flex items-center justify-between mb-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b30000]">Latest campus highlights</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCardRow(-1)}
            className="w-9 h-9 rounded-full border border-border bg-white text-[#0f172a] shadow-sm hover:bg-[#b30000] hover:text-white hover:border-[#b30000] transition-all"
            aria-label="Scroll campus highlights left"
          >
            <ArrowLeft className="w-4 h-4 mx-auto" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCardRow(1)}
            className="w-9 h-9 rounded-full border border-border bg-white text-[#0f172a] shadow-sm hover:bg-[#b30000] hover:text-white hover:border-[#b30000] transition-all"
            aria-label="Scroll campus highlights right"
          >
            <ArrowRight className="w-4 h-4 mx-auto" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex-1 overflow-x-auto overflow-y-hidden pb-3 snap-x snap-mandatory scroll-smooth touch-pan-x rounded-[1.35rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: "touch", overscrollBehaviorX: "contain" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div className="flex gap-4 min-w-max pr-2 h-full">
          {visibleItems.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`group snap-start w-[250px] sm:w-[268px] flex-shrink-0 rounded-[1.35rem] border ${
                p.pinned ? "border-[#b30000]/60 ring-2 ring-[#b30000]/20" : "border-border"
              } bg-white overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.16)] hover:-translate-y-1 transition-all duration-300 flex flex-col`}
            >
              <div className="px-3.5 py-2.5 border-b border-border/70 bg-white/95 backdrop-blur flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Instagram className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <p className="text-[12px] leading-none font-semibold text-[#0f172a] truncate">MITS Madanapalle</p>
                    <span className="w-2 h-2 rounded-full bg-[#0f2a44] shrink-0" />
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate">@{USERNAME}</p>
                </div>
                <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold ${p.isReel ? "bg-[#8134af]/10 text-[#8134af]" : "bg-[#0f2a44]/10 text-[#0f2a44]"}`}>
                  {p.isReel ? <Play className="w-3 h-3" /> : <Instagram className="w-3 h-3" />}
                  {p.isReel ? "Reel" : "Post"}
                </span>
              </div>
              <div className="relative w-full aspect-[4/5] bg-muted overflow-hidden">
                <img
                  src={p.image}
                  alt={p.caption || "Campus highlight"}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent pointer-events-none" />
                
                {p.pinned ? (
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-[#b30000] px-2.5 py-1 text-[10px] font-bold text-white shadow-md backdrop-blur">
                    <Pin className="w-3 h-3 fill-white" /> Pinned
                  </div>
                ) : (
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-[#0f172a] shadow-sm backdrop-blur">
                    Featured
                  </div>
                )}

                {p.isReel && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/72 text-white text-[10px] font-semibold backdrop-blur">
                    <Play className="w-2.5 h-2.5 fill-white" /> Reel
                  </span>
                )}
                <span className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-[#0f172a] text-[10px] font-semibold shadow-sm">
                  <ExternalLink className="w-2.5 h-2.5" /> Open Instagram
                </span>
              </div>
              <div className="px-3.5 py-3 bg-white flex-1 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-1 text-[11px] text-muted-foreground">
                  <span>{p.isReel ? "Reel" : "Post"}</span>
                  {p.date && <span>{p.date}</span>}
                </div>
                <p className="text-sm leading-relaxed text-foreground/85 line-clamp-3">{p.caption || "View on Instagram"}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <a
        href={PROFILE_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 text-[#b30000] text-sm font-medium hover:underline self-start"
      >
        Follow @{USERNAME} to see what&apos;s happening on campus
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};

export default InstagramFeed;

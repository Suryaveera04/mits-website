import { useEffect, useRef, useState } from "react";
import { Instagram, Play, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { useTrendingFeed } from "@/hooks/useTrendingFeed";
import { SHEETS_CONFIG } from "@/config/sheetsConfig";

const USERNAME = SHEETS_CONFIG.INSTAGRAM_HANDLE;
const PROFILE_URL = SHEETS_CONFIG.INSTAGRAM_PROFILE_URL;

function formatCleanCaption(text: string): string {
  if (!text) return "";
  return text
    .normalize("NFKD")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/?[^>]+(>|$)/g, " ")
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&;s/g, "'s")
    .replace(/&;/g, "")
    .replace(/&!/g, "")
    .replace(/#[\w_]+/g, "")
    .replace(/[\r\n\t]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const InstagramFeed = () => {
  const { items: visibleItems } = useTrendingFeed();
  const [curatorActive, setCuratorActive] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize official Curator.io live feed widget
  useEffect(() => {
    const SCRIPT_ID = "curator-feed-script";

    const checkCuratorReady = () => {
      const el = document.getElementById("curator-feed-default-feed-layout");
      if (el && (el.querySelector(".crt-widget") || el.querySelector(".crt-post") || el.children.length > 1)) {
        setCuratorActive(true);
      }
    };

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.async = true;
      script.charset = "UTF-8";
      script.src = "https://cdn.curator.io/published/1a6d1223-3ae3-46ea-8c39-adea5ff5e1d8.js";
      document.body.appendChild(script);
    }

    // Observer to detect when Curator finishes mounting its waterfall layout
    const observer = new MutationObserver(() => {
      checkCuratorReady();
    });

    const target = document.getElementById("curator-feed-default-feed-layout");
    if (target) {
      observer.observe(target, { childList: true, subtree: true });
    }

    const interval = setInterval(checkCuratorReady, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const step = 280;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header matching official mits.ac.in */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight">
          Whats Trending <span className="text-[#b30000]">On</span>
        </h3>

        <div className="flex items-center gap-3">
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#0f172a] shadow-xs hover:border-[#b30000] hover:text-[#b30000] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-[#dd2a7b]" /> @{USERNAME}
          </a>

          {!curatorActive && (
            <div className="hidden sm:flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-[#b30000] hover:text-white hover:border-[#b30000] transition-all flex items-center justify-center cursor-pointer"
                aria-label="Scroll highlights left"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-[#b30000] hover:text-white hover:border-[#b30000] transition-all flex items-center justify-center cursor-pointer"
                aria-label="Scroll highlights right"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Official Curator Live Feed Container */}
      <div className="w-full flex-1 min-h-[460px]">
        <div id="curator-feed-default-feed-layout">
          <a
            href="https://curator.io"
            target="_blank"
            rel="noopener noreferrer"
            className="crt-logo crt-tag text-xs text-slate-400"
          >
            Powered by Curator.io
          </a>
        </div>

        {/* Vertical Poster Carousel Fallback matching official mits.ac.in */}
        {!curatorActive && (
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto overflow-y-hidden pb-4 pt-1 snap-x snap-mandatory scroll-smooth [scrollbar-width:thin] select-none"
          >
            {visibleItems.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group snap-start w-[240px] sm:w-[260px] flex-shrink-0 rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Official Card Top Header matching mits.ac.in */}
                <div className="px-3.5 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-6 h-6 rounded-md bg-black text-white flex items-center justify-center shrink-0">
                      <Instagram className="w-3.5 h-3.5" />
                    </div>
                    <img
                      src="/mits-logo.png"
                      alt="MITS"
                      className="w-6 h-6 rounded-full border border-slate-200 object-contain shrink-0"
                    />
                    <div className="min-w-0 flex flex-col leading-tight">
                      <span className="text-xs font-bold text-slate-800 truncate">mits_mpl</span>
                      <span className="text-[10px] text-slate-400 truncate">@mits_mpl</span>
                    </div>
                  </div>

                  {p.isReel && (
                    <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold bg-[#b30000]/10 text-[#b30000]">
                      <Play className="w-2.5 h-2.5 fill-[#b30000]" /> Reel
                    </span>
                  )}
                </div>

                {/* Vertical Full-Bleed Poster Image (No text bloat underneath) */}
                <div className="relative w-full aspect-[4/5] bg-slate-100 overflow-hidden">
                  <img
                    src={p.image}
                    alt={formatCleanCaption(p.caption) || "MITS Official Poster"}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  />

                  {/* Play Button Overlay for Reels matching official site */}
                  {p.isReel && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/25 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-black/50 border border-white/80 flex items-center justify-center shadow-lg backdrop-blur-xs">
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/80 text-white text-[10px] font-semibold backdrop-blur-xs">
                      <ExternalLink className="w-2.5 h-2.5" /> View
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Official Footer matching mits.ac.in */}
      <div className="mt-4 pt-3 border-t border-slate-100 text-center">
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#b30000] hover:underline"
        >
          Follow @MITS to see what is happening around campus
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;

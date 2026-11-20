import { useRef } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const step = 280;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Header: In one line with Title, Powered by Curator.io, and Scroll Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-2 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0f172a] leading-tight">
            Whats Trending <span className="text-[#b30000]">On</span>
          </h3>

          <a
            href="https://curator.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium text-slate-400 hover:text-slate-600 transition-colors border border-slate-200/80 rounded px-2 py-0.5 bg-slate-50 shrink-0"
          >
            Powered by Curator.io
          </a>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#0f172a] shadow-xs hover:border-[#b30000] hover:text-[#b30000] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-[#dd2a7b]" /> @{USERNAME}
          </a>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-[#b30000] hover:text-white hover:border-[#b30000] transition-all flex items-center justify-center cursor-pointer active:scale-95"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-[#b30000] hover:text-white hover:border-[#b30000] transition-all flex items-center justify-center cursor-pointer active:scale-95"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards Container: In ONE LINE, fixed height, scrollable to left and right */}
      <div className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex flex-row flex-nowrap gap-4 overflow-x-auto overflow-y-hidden pb-3 pt-1 snap-x snap-mandatory scroll-smooth [scrollbar-width:thin] select-none"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {visibleItems.map((p) => {
            const cleanTitle = formatCleanCaption(p.caption) || "MITS Highlights";

            return (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group snap-start w-[260px] h-[370px] shrink-0 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* 1. Header (Fixed 38px) */}
                <div className="h-[38px] px-3 bg-white border-b border-slate-100 flex items-center justify-between gap-2 shrink-0">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <div className="w-5 h-5 rounded-md bg-black text-white flex items-center justify-center shrink-0">
                      <Instagram className="w-3 h-3" />
                    </div>
                    <img
                      src="/mits-logo.png"
                      alt="MITS"
                      className="w-5 h-5 rounded-full border border-slate-200 object-contain shrink-0"
                    />
                    <div className="min-w-0 flex flex-col leading-none">
                      <span className="text-[11px] font-bold text-slate-800 truncate">mits_mpl</span>
                      <span className="text-[9px] text-slate-400 truncate">@mits_mpl</span>
                    </div>
                  </div>

                  {p.isReel ? (
                    <span className="inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-semibold bg-[#b30000]/10 text-[#b30000] shrink-0">
                      <Play className="w-2 h-2 fill-[#b30000]" /> Reel
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full px-1.5 py-0.5 text-[9px] font-semibold bg-slate-100 text-slate-600 shrink-0">
                      Post
                    </span>
                  )}
                </div>

                {/* 2. Media Image: Fixed Reel/Post Poster Height (Fixed 254px) */}
                <div className="relative w-full h-[254px] bg-slate-100 overflow-hidden shrink-0">
                  <img
                    src={p.image}
                    alt={cleanTitle}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-104"
                  />

                  {/* Play Button Overlay for Reels */}
                  {p.isReel && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                      <div className="w-11 h-11 rounded-full bg-black/50 border border-white/80 flex items-center justify-center shadow-md backdrop-blur-xs">
                        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Hover indicator */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/80 text-white text-[10px] font-medium backdrop-blur-xs">
                      <ExternalLink className="w-2.5 h-2.5" /> Open
                    </span>
                  </div>
                </div>

                {/* 3. Content: Exactly 2-line title and date (Fixed 78px) */}
                <div className="h-[78px] p-2.5 bg-white flex flex-col justify-between border-t border-slate-100 shrink-0">
                  <p className="text-xs font-semibold text-slate-800 line-clamp-2 leading-snug group-hover:text-[#b30000] transition-colors">
                    {cleanTitle}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium pt-1">
                    <span>{p.isReel ? "Instagram Reel" : "Instagram Post"}</span>
                    <span>{p.date}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Official Footer matching mits.ac.in */}
      <div className="mt-3 pt-2 border-t border-slate-100 text-center">
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#b30000] hover:underline"
        >
          Follow @MITS to see what is happening around campus
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;

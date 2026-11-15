import React, { useState, useEffect } from "react";
import { Search, Sparkles } from "lucide-react";
import { GlobalSearchModal } from "./GlobalSearchModal";

interface HeaderSearchBarProps {
  variant?: "topbar" | "navbar" | "mobile";
  className?: string;
}

export const HeaderSearchBar: React.FC<HeaderSearchBarProps> = ({
  variant = "topbar",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf("MAC") >= 0);

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Toggle search on Ctrl+K, Cmd+K or pressing '/' when not typing in an input
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (
        e.key === "/" &&
        !["INPUT", "TEXTAREA", "SELECT"].includes((document.activeElement as HTMLElement)?.tagName)
      ) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  if (variant === "topbar") {
    return (
      <>
        <div className={`relative flex items-center ${className}`}>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Search MITS website"
            className="group flex items-center gap-2 px-3 py-1 text-xs font-medium text-primary-foreground/90 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full transition-all duration-200 shadow-xs cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform" />
            <span className="hidden lg:inline text-white/90 group-hover:text-white">
              Search MITS website...
            </span>
            <span className="lg:hidden text-white/90">Search...</span>
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-semibold bg-white/20 text-white/90 border border-white/20">
              {isMac ? "⌘K" : "Ctrl+K"}
            </kbd>
          </button>
        </div>

        <GlobalSearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  }

  if (variant === "navbar") {
    return (
      <>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Search website"
          className={`flex items-center justify-center p-2 rounded-full text-secondary hover:text-primary hover:bg-primary/5 border border-transparent hover:border-border transition-all duration-200 ${className}`}
          title={`Search (${isMac ? "⌘K" : "Ctrl+K"})`}
        >
          <Search className="w-4 h-4" />
        </button>

        <GlobalSearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  }

  // Mobile drawer variant
  return (
    <>
      <div className={`w-full ${className}`}>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center justify-between px-3.5 py-2.5 bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200 rounded-xl text-sm text-slate-600 font-medium transition-all"
        >
          <div className="flex items-center gap-2.5">
            <Search className="w-4 h-4 text-primary" />
            <span>Search complete website...</span>
          </div>
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        </button>
      </div>

      <GlobalSearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default HeaderSearchBar;

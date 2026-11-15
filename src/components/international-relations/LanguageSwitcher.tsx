import { useEffect, useRef, useState } from "react";
import { Languages, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    google?: { translate?: { TranslateElement: new (opts: Record<string, unknown>, id: string) => void } };
    googleTranslateElementInit?: () => void;
  }
}

const LANGUAGES: { code: string; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "te", label: "Telugu", native: "తెలుగు" },
  { code: "es", label: "Spanish", native: "Español" },
  { code: "fr", label: "French", native: "Français" },
  { code: "de", label: "German", native: "Deutsch" },
  { code: "ja", label: "Japanese", native: "日本語" },
  { code: "ko", label: "Korean", native: "한국어" },
  { code: "zh-CN", label: "Chinese", native: "中文" },
  { code: "ar", label: "Arabic", native: "العربية" },
  { code: "pt", label: "Portuguese", native: "Português" },
  { code: "cs", label: "Czech", native: "Čeština" },
];

let scriptLoadStarted = false;

/**
 * Floating, self-contained language switcher for international visitors.
 * Wraps Google's website-translator widget (loaded on demand) behind a
 * clean custom dropdown instead of Google's default banner UI.
 */
const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState("en");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scriptLoadStarted) {
      const poll = setInterval(() => {
        if (document.getElementById("goog-te-combo")) {
          setReady(true);
          clearInterval(poll);
        }
      }, 300);
      return () => clearInterval(poll);
    }
    scriptLoadStarted = true;

    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", autoDisplay: false },
          "google_translate_element_ir"
        );
        setReady(true);
      }
    };

    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const selectLanguage = (code: string) => {
    setActive(code);
    setOpen(false);
    if (code === "en") {
      // Reset to original by clearing Google's translate cookie & reloading the combo.
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.reload();
      return;
    }
    const combo = document.getElementById("goog-te-combo") as HTMLSelectElement | null;
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-[150]">
      {/* Required (hidden) mount point for the Google widget */}
      <div id="google_translate_element_ir" className="hidden" />

      <AnimatedPanel open={open}>
        <div className="px-4 pt-4 pb-2 flex items-center justify-between border-b border-border">
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">Select Language</span>
          <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-secondary">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="max-h-72 overflow-y-auto py-2">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => selectLanguage(l.code)}
              disabled={!ready && l.code !== "en"}
              className={cn(
                "w-full flex items-center justify-between px-4 py-2.5 text-sm text-left hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                active === l.code ? "text-primary font-semibold" : "text-secondary"
              )}
            >
              <span>
                {l.label} <span className="text-muted-foreground font-normal">· {l.native}</span>
              </span>
              {active === l.code && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
        {!ready && (
          <p className="px-4 pb-3 text-[11px] text-muted-foreground">Loading translator…</p>
        )}
      </AnimatedPanel>

      <button
        onClick={() => setOpen((p) => !p)}
        aria-label="Change language"
        className="notranslate flex items-center gap-2 rounded-full bg-[#0f2a44] hover:bg-[#143557] text-white shadow-xl px-4 py-3 text-sm font-bold transition-all hover:-translate-y-0.5"
      >
        <Languages className="w-4 h-4 text-[#caa74d]" />
        <span className="hidden sm:inline">Language</span>
      </button>
    </div>
  );
};

const AnimatedPanel = ({ open, children }: { open: boolean; children: React.ReactNode }) => (
  <div
    className={cn(
      "notranslate absolute bottom-full right-0 mb-3 w-64 rounded-2xl border border-border bg-white shadow-2xl overflow-hidden origin-bottom-right transition-all duration-200",
      open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
    )}
  >
    {children}
  </div>
);

export default LanguageSwitcher;

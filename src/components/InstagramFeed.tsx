import { useEffect } from "react";
import { Instagram, ExternalLink } from "lucide-react";
import { SHEETS_CONFIG } from "@/config/sheetsConfig";

const USERNAME = SHEETS_CONFIG.INSTAGRAM_HANDLE;
const PROFILE_URL = SHEETS_CONFIG.INSTAGRAM_PROFILE_URL;

const InstagramFeed = () => {
  useEffect(() => {
    const config = {
      type: "Waterfall",
      post: {
        animate: true,
        maxHeight: 0,
        showTitles: true,
        showShare: true,
        showComments: false,
        showLikes: false,
        autoPlayVideos: false,
        clickAction: "open-popup",
        clickReadMoreAction: "open-popup",
        maxLines: 0,
        useHighQualityImages: false,
      },
      widget: {
        template: "widget-waterfall",
        colWidth: 250,
        colGutter: 0,
        showLoadMore: true,
        continuousScroll: false,
        postsPerPage: 12,
        animate: false,
        progressiveLoad: false,
        lazyLoad: false,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        autoLoadNew: false,
        lazyLoadType: "none",
        gridMobile: true,
        gridMobileRows: 3,
        gridMobileShowLoadMore: false,
        gridMobileDimensions: "1:1",
        gridMobileLayoutMode: "byWidth",
        gridMobileMinWidth: 150,
        gridMobileColumnCount: 2,
      },
      lang: "en",
      container: "#curator-feed-default-feed-layout",
      debug: 0,
      hidePoweredBy: false,
      embedSource: "",
      forceHttps: false,
      feed: {
        id: "1a6d1223-3ae3-46ea-8c39-adea5ff5e1d8",
        apiEndpoint: "https://api.curator.io",
        postsPerPage: 12,
        params: {},
        limit: 25,
      },
      popup: {
        template: "popup",
        templateWrapper: "popup-wrapper",
        autoPlayVideos: false,
        deepLink: false,
      },
      filter: {
        template: "filter",
        showNetworks: false,
        showSources: false,
        showAll: false,
        default: "all",
        limitPosts: false,
        limitPostNumber: 0,
        period: "",
      },
      theme: "sydney",
    };

    const colours = {
      widgetBgColor: "transparent",
      bgColor: "#ffffff",
      borderColor: "#cccccc",
      iconColor: "#222222",
      textColor: "#222222",
      linkColor: "#595959",
      dateColor: "#000000",
      footerColor: "#ffffff",
      tabIndexColor: "#cccccc",
      buttonColor: "#dddddd",
      popupBgColor: "#ffffff",
      popupLetterboxColor: "#F5F5F5",
      popupTextColor: "#222222",
      popupLinkColor: "#595959",
      popupIconColor: "#222222",
      popupDateColor: "#222222",
      shareBgColor: "#ffffff",
      shareTextColor: "#222222",
      shareIconColor: "#222222",
    };

    const win = window as any;

    const mountCurator = () => {
      const container = document.getElementById("curator-feed-default-feed-layout");
      if (container && win.Curator && typeof win.Curator.loadWidget === "function") {
        try {
          win.Curator.loadWidget(config, colours, {});
        } catch (e) {
          console.warn("Curator loadWidget error:", e);
        }
      }
    };

    if (win.Curator && typeof win.Curator.loadWidget === "function") {
      mountCurator();
    } else {
      const scriptId = "curator-feed-script-tag";
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.async = true;
        script.charset = "UTF-8";
        script.src = "https://cdn.curator.io/published/1a6d1223-3ae3-46ea-8c39-adea5ff5e1d8.js";
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-2 border-b border-slate-100">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0f172a] leading-tight">
          Whats Trending <span className="text-[#b30000]">On</span>
        </h3>

        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#0f172a] shadow-xs hover:border-[#b30000] hover:text-[#b30000] transition-colors"
        >
          <Instagram className="w-3.5 h-3.5 text-[#dd2a7b]" /> @{USERNAME}
        </a>
      </div>

      {/* Curator Feed Layout Container as requested */}
      <div className="w-full min-h-[420px]">
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
      </div>

      {/* Footer */}
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

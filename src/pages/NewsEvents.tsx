import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Calendar, MapPin, Search, Filter, Sparkles, Building2,
  Tag, ExternalLink, ChevronRight, Loader2, PartyPopper, RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";
import { getNewsEventImageSrc, newsEvents } from "@/data/newsEvents";
import { useAllCMSEvents, type CMSEvent } from "@/hooks/useDeptCMSData";
import EventDetailModal from "@/components/EventDetailModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const deptFilters = [
  { id: "all", label: "All Departments" },
  { id: "cse", label: "CSE" },
  { id: "ce", label: "Civil (CE)" },
  { id: "me", label: "Mechanical (ME)" },
  { id: "bsh", label: "BSH" },
  { id: "mca", label: "MCA" },
  { id: "mba", label: "MBA / MNA" },
  { id: "ece", label: "ECE" },
  { id: "eee", label: "EEE" },
  { id: "aiml", label: "AI & ML" },
  { id: "ai", label: "AI" },
  { id: "csecs", label: "CSE-CS" },
];

function matchesDeptFilter(e: CMSEvent, filterId: string): boolean {
  if (filterId === "all") return true;
  const d = (e.department || "").toLowerCase().trim();
  if (filterId === "cse") return d === "cse" || d.includes("computer science & eng");
  if (filterId === "ce") return d === "ce" || d === "civil" || d.includes("civil");
  if (filterId === "me") return d === "me" || d === "mech" || d.includes("mech") || d.includes("mechanical");
  if (filterId === "bsh") return d === "bsh" || d.includes("basic science") || d.includes("humanities");
  if (filterId === "mca") return d === "mca" || d.includes("computer application");
  if (filterId === "mba") return d === "mba" || d === "mna" || d.includes("management");
  if (filterId === "ece") return d === "ece" || d.includes("electronics");
  if (filterId === "eee") return d === "eee" || d.includes("electrical");
  if (filterId === "aiml") return d === "aiml" || d.includes("aiml") || d.includes("machine learning");
  if (filterId === "ai") return d === "ai" || d === "cse-ai";
  if (filterId === "csecs") return d === "csecs" || d === "cs" || d.includes("cyber");
  return true;
}

const NewsEvents = () => {
  const { events: cmsEvents, loading: cmsLoading, refresh } = useAllCMSEvents();
  const [selectedDept, setSelectedDept] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"cms" | "highlights">("cms");

  const filteredCmsEvents = useMemo(() => {
    return cmsEvents.filter((e) => {
      const matchesDept = matchesDeptFilter(e, selectedDept);
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        e.title?.toLowerCase().includes(q) ||
        e.department?.toLowerCase().includes(q) ||
        e.venue?.toLowerCase().includes(q) ||
        e.type?.toLowerCase().includes(q) ||
        e.description?.toLowerCase().includes(q);
      return matchesDept && matchesSearch;
    });
  }, [cmsEvents, selectedDept, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title="MITS News & Events – Live Campus Updates, Seminars & Workshops"
        description="Browse all live events and institutional updates from Madanapalle Institute of Technology & Science across CSE, Civil, Mechanical, BSH, MCA, MBA, ECE, EEE, AI/ML and more."
        canonical="/news-events"
      />
      <main className="pt-24 pb-20">
        <section className="py-12 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <nav aria-label="Breadcrumb" className="flex justify-center mb-3">
                <ol className="flex items-center gap-1.5 text-sm">
                  <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                  <li className="text-muted-foreground">/</li>
                  <li className="text-foreground font-semibold">News &amp; Events</li>
                </ol>
              </nav>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Live Campus Portal
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Campus Events &amp; News
              </h1>
              <p className="text-muted-foreground text-lg">
                Explore seminars, guest lectures, industrial visits, workshops, and institutional achievements happening across all departments at MITS.
              </p>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <button
                onClick={() => setActiveTab("cms")}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
                  activeTab === "cms"
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                <PartyPopper className="w-4 h-4" />
                Live CMS Events
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeTab === "cms" ? "bg-white/20 text-white" : "bg-muted text-foreground"
                }`}>
                  {cmsEvents.length}
                </span>
              </button>
              <button
                onClick={() => setActiveTab("highlights")}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
                  activeTab === "highlights"
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                <Building2 className="w-4 h-4" />
                Institutional Highlights
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeTab === "highlights" ? "bg-white/20 text-white" : "bg-muted text-foreground"
                }`}>
                  {newsEvents.length}
                </span>
              </button>
            </div>

            {activeTab === "cms" && (
              <div className="bg-card border border-border rounded-2xl p-5 shadow-sm max-w-5xl mx-auto mb-10">
                {/* Search Bar */}
                <div className="flex flex-col md:flex-row gap-3 mb-4">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search events by title, department, venue, or keyword…"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => refresh()}
                    disabled={cmsLoading}
                    className="flex items-center gap-2 text-sm"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${cmsLoading ? "animate-spin" : ""}`} />
                    Refresh
                  </Button>
                </div>

                {/* Department Filter Chips */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                  <Filter className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase flex-shrink-0">Filter:</span>
                  {deptFilters.map((df) => (
                    <button
                      key={df.id}
                      onClick={() => setSelectedDept(df.id)}
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                        selectedDept === df.id
                          ? "bg-secondary text-white font-semibold shadow-sm"
                          : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {df.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            {activeTab === "cms" ? (
              <>
                {cmsLoading && cmsEvents.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 gap-3">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    <p className="text-muted-foreground font-medium">Loading live campus events from database…</p>
                  </div>
                ) : filteredCmsEvents.length === 0 ? (
                  <div className="text-center py-20 bg-card rounded-2xl border border-border max-w-xl mx-auto p-8">
                    <PartyPopper className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" />
                    <h3 className="text-lg font-bold text-foreground mb-1">No Events Found</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      No events match your current filter criteria. Try clearing your search or selecting &ldquo;All Departments&rdquo;.
                    </p>
                    <Button variant="outline" onClick={() => { setSelectedDept("all"); setSearchQuery(""); }}>
                      Reset Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCmsEvents.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedEventId(item.id)}
                        className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-border flex flex-col cursor-pointer group"
                      >
                        <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                          {item.poster ? (
                            <img
                              src={item.poster}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400 p-6 text-center">
                              <Calendar className="w-10 h-10 mb-2 opacity-50 text-primary" />
                              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                {item.department || "MITS Event"}
                              </span>
                            </div>
                          )}
                          {item.department && (
                            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-secondary/90 text-white backdrop-blur-sm shadow-sm">
                              {item.department}
                            </span>
                          )}
                          {item.type && (
                            <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-primary backdrop-blur-sm shadow-sm">
                              {item.type}
                            </span>
                          )}
                        </div>

                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <h2 className="font-display text-base font-bold text-card-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-2">
                              {item.title}
                            </h2>
                            {item.description ? (
                              <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                                {item.description}
                              </p>
                            ) : (
                              <p className="text-sm text-muted-foreground/70 italic line-clamp-2 mb-4">
                                Click to view complete event schedule, resource persons, and coordinators.
                              </p>
                            )}
                          </div>

                          <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-1.5 font-medium">
                              <Calendar className="w-3.5 h-3.5 text-primary" />
                              <span>{item.date || item.from_date || "Date TBA"}</span>
                            </div>
                            {item.venue && (
                              <div className="flex items-center gap-1 line-clamp-1 max-w-[140px]">
                                <MapPin className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                                <span className="truncate">{item.venue}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              /* Institutional Highlights / Static News Section */
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {newsEvents.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/news-events/${item.slug}`}
                    className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-border group"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={getNewsEventImageSrc(item.image)}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-sm font-semibold text-secondary uppercase tracking-wider">{item.category}</span>
                      <h2 className="font-display text-lg font-semibold text-card-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h2>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{item.excerpt}</p>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="line-clamp-1">{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {selectedEventId && (
        <EventDetailModal
          eventId={selectedEventId}
          onClose={() => setSelectedEventId(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default NewsEvents;

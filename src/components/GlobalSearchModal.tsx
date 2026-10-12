import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Building2,
  Users,
  Award,
  Calendar,
  HelpCircle,
  Clock,
  Trash2,
  ExternalLink,
  Sparkles,
  SearchX,
  FileText,
  Radio,
  Briefcase,
  Layers,
} from "lucide-react";
import {
  searchWebsite,
  SearchCategory,
  SearchItem,
  popularSearchSuggestions,
} from "@/data/searchIndex";

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

const CATEGORIES: SearchCategory[] = [
  "All",
  "Pages",
  "Departments",
  "Faculty & Leadership",
  "Academics & Courses",
  "Admissions & Fees",
  "Placements & Careers",
  "Research & Innovation",
  "Campus Life & Facilities",
  "Cells & Committees",
  "News & Events",
];

const RECENT_SEARCHES_KEY = "mits_recent_searches_v1";

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  initialQuery = "",
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<SearchCategory>("All");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (saved) {
        setRecentSearches(JSON.parse(saved).slice(0, 8));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Update query when initialQuery changes or when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 60);
    }
  }, [isOpen, initialQuery]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Save to recent searches
  const saveRecentSearch = (searchTerm: string) => {
    const term = searchTerm.trim();
    if (!term || term.length < 2) return;
    try {
      const updated = [term, ...recentSearches.filter((s) => s.toLowerCase() !== term.toLowerCase())].slice(0, 8);
      setRecentSearches(updated);
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const removeRecentSearch = (termToRemove: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const updated = recentSearches.filter((s) => s !== termToRemove);
      setRecentSearches(updated);
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const clearAllRecent = () => {
    try {
      setRecentSearches([]);
      localStorage.removeItem(RECENT_SEARCHES_KEY);
    } catch {
      // ignore
    }
  };

  // Perform search
  const searchResults = useMemo(() => {
    return searchWebsite(query, selectedCategory, 40);
  }, [query, selectedCategory]);

  // Reset selectedIndex when results or category change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, selectedCategory]);

  // Handle result selection / navigation
  const handleSelectResult = (item: SearchItem) => {
    saveRecentSearch(query || item.title);
    onClose();
    if (item.isExternal || item.href.startsWith("http")) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      navigate(item.href);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
      return;
    }

    if (searchResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => {
        const next = prev < searchResults.length - 1 ? prev + 1 : 0;
        scrollIntoView(next);
        return next;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => {
        const next = prev > 0 ? prev - 1 : searchResults.length - 1;
        scrollIntoView(next);
        return next;
      });
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (searchResults[selectedIndex]) {
        handleSelectResult(searchResults[selectedIndex].item);
      }
    }
  };

  const scrollIntoView = (index: number) => {
    const el = document.getElementById(`search-result-${index}`);
    if (el) {
      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  };

  // Category Icon helper
  const getCategoryIcon = (cat: SearchCategory) => {
    switch (cat) {
      case "Departments":
        return <Building2 className="w-4 h-4 text-blue-600" />;
      case "Faculty & Leadership":
        return <Users className="w-4 h-4 text-purple-600" />;
      case "Academics & Courses":
        return <BookOpen className="w-4 h-4 text-emerald-600" />;
      case "Admissions & Fees":
        return <GraduationCap className="w-4 h-4 text-amber-600" />;
      case "Placements & Careers":
        return <Briefcase className="w-4 h-4 text-indigo-600" />;
      case "Research & Innovation":
        return <Award className="w-4 h-4 text-rose-600" />;
      case "Campus Life & Facilities":
        return <Radio className="w-4 h-4 text-cyan-600" />;
      case "Cells & Committees":
        return <Layers className="w-4 h-4 text-teal-600" />;
      case "News & Events":
        return <Calendar className="w-4 h-4 text-orange-600" />;
      default:
        return <FileText className="w-4 h-4 text-primary" />;
    }
  };

  // Highlight matching terms in text
  const highlightMatch = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text;
    const tokens = searchTerm.trim().split(/\s+/).filter(Boolean);
    if (!tokens.length) return text;

    try {
      const regex = new RegExp(`(${tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
      const parts = text.split(regex);
      return parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-amber-200/80 text-gray-900 font-semibold px-0.5 rounded">
            {part}
          </mark>
        ) : (
          part
        )
      );
    } catch {
      return text;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-start justify-center p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -12 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col my-auto max-h-[88vh] z-10"
          onKeyDown={handleKeyDown}
        >
          {/* Header & Input Field */}
          <div className="p-4 sm:p-5 border-b border-slate-100 bg-gradient-to-r from-slate-50/80 to-white flex flex-col gap-3">
            <div className="flex items-center gap-3 relative">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                <Search className="w-5 h-5" />
              </div>

              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search departments, faculty, admissions, courses, placements, facilities..."
                className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-base sm:text-lg font-medium focus:outline-none pr-10"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    inputRef.current?.focus();
                  }}
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
                  title="Clear input"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <button
                type="button"
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors shrink-0 ml-1"
                title="Close (Esc)"
              >
                <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 rounded">
                  ESC
                </kbd>
                <X className="w-5 h-5 sm:hidden" />
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-200">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 shrink-0 ${
                      isSelected
                        ? "bg-primary text-white shadow-sm ring-2 ring-primary/20"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Body / Results Section */}
          <div
            ref={resultsContainerRef}
            className="flex-1 overflow-y-auto p-3 sm:p-4 divide-y divide-slate-100/80 min-h-[260px]"
          >
            {/* Case 1: Results Found */}
            {searchResults.length > 0 && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between px-2 py-1 text-xs font-semibold text-slate-400">
                  <span>
                    {query ? `Found ${searchResults.length} matching item${searchResults.length > 1 ? "s" : ""}` : "Suggested pages & quick resources"}
                  </span>
                  <span className="hidden sm:inline">Use ↑ ↓ arrows to navigate, Enter to open</span>
                </div>

                {searchResults.map(({ item, matchedField }, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      id={`search-result-${idx}`}
                      onClick={() => handleSelectResult(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`group relative p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-150 flex items-start justify-between gap-3 border ${
                        isSelected
                          ? "bg-primary/5 border-primary/30 shadow-sm"
                          : "bg-white border-transparent hover:bg-slate-50 hover:border-slate-200/60"
                      }`}
                    >
                      <div className="flex items-start gap-3 min-w-0 flex-1">
                        <div
                          className={`mt-0.5 p-2 rounded-lg shrink-0 transition-colors ${
                            isSelected ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary"
                          }`}
                        >
                          {getCategoryIcon(item.category)}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-0.5">
                            <h4 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                              {highlightMatch(item.title, query)}
                            </h4>

                            {item.metaBadge && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-amber-100/80 text-amber-800 border border-amber-200/60">
                                {item.metaBadge}
                              </span>
                            )}

                            <span className="inline-flex items-center text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                              {item.category}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                            {highlightMatch(item.description, query)}
                          </p>

                          {/* Extra metadata if faculty or department */}
                          {(item.department || item.designation) && (
                            <div className="flex items-center gap-3 mt-1 text-xs text-slate-400 font-medium">
                              {item.designation && <span>{item.designation}</span>}
                              {item.department && <span>• {item.department}</span>}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center self-center pl-2 shrink-0">
                        {item.isExternal ? (
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                        ) : (
                          <div
                            className={`p-1.5 rounded-full transition-all ${
                              isSelected ? "bg-primary text-white" : "text-slate-300 group-hover:text-primary"
                            }`}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Case 2: No Results Found (Error / Empty State) */}
            {query.trim().length > 0 && searchResults.length === 0 && (
              <div className="py-10 px-4 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 mb-4 shadow-sm animate-pulse">
                  <SearchX className="w-8 h-8" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">
                  No details found for &ldquo;<span className="text-rose-600">{query}</span>&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6 leading-relaxed">
                  We searched through all 11+ departments, 320+ faculty profiles, admissions, placements, academic regulations, and campus facilities, but couldn&apos;t find an exact match.
                </p>

                <div className="w-full max-w-lg bg-slate-50 rounded-xl p-4 border border-slate-200/80 text-left">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wide mb-2.5">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Try searching for:</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {popularSearchSuggestions.slice(0, 8).map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => {
                          setQuery(term);
                          inputRef.current?.focus();
                        }}
                        className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-primary hover:text-primary hover:shadow-sm transition-all"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Case 3: Initial Empty State with Recent & Popular Searches */}
            {!query.trim() && (
              <div className="p-3 sm:p-4 space-y-6">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 px-1">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> Recent Searches
                      </span>
                      <button
                        type="button"
                        onClick={clearAllRecent}
                        className="text-[11px] text-slate-400 hover:text-rose-600 flex items-center gap-1 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" /> Clear History
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((term) => (
                        <div
                          key={term}
                          onClick={() => {
                            setQuery(term);
                            inputRef.current?.focus();
                          }}
                          className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-primary/10 border border-slate-200 hover:border-primary/30 text-xs font-medium text-slate-700 hover:text-primary cursor-pointer transition-all"
                        >
                          <span>{term}</span>
                          <button
                            type="button"
                            onClick={(e) => removeRecentSearch(term, e)}
                            className="p-0.5 text-slate-400 hover:text-rose-500 rounded transition-colors"
                            title="Remove"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular Topics */}
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 px-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Popular Quick Searches
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {popularSearchSuggestions.map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => {
                          setQuery(term);
                          inputRef.current?.focus();
                        }}
                        className="text-left px-3 py-2 rounded-xl bg-slate-50 hover:bg-primary/5 hover:border-primary/30 border border-slate-200/70 text-xs sm:text-sm font-medium text-slate-700 hover:text-primary transition-all flex items-center justify-between group"
                      >
                        <span className="truncate">{term}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="p-3 px-4 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-white border border-slate-200 rounded shadow-xs">
                  ↑
                </kbd>
                <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-white border border-slate-200 rounded shadow-xs">
                  ↓
                </kbd>
                <span className="hidden sm:inline">Navigate</span>
              </span>

              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-white border border-slate-200 rounded shadow-xs">
                  ↵
                </kbd>
                <span className="hidden sm:inline">Select</span>
              </span>

              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-white border border-slate-200 rounded shadow-xs">
                  ESC
                </kbd>
                <span className="hidden sm:inline">Close</span>
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-400">
              <span>MITS Search Engine</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GlobalSearchModal;

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  FileText,
  ExternalLink,
  Download,
  Search,
  ShieldCheck,
  BookOpen,
  ClipboardList,
  Layers,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { imsTabsData, type ImsTab, type ImsDoc } from "@/data/imsData";

const BASE = "https://mits.edu/";

const tabIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  policy: ShieldCheck,
  manual: BookOpen,
  mrm: Layers,
  formats: ClipboardList,
};

export const IMS = () => {
  const [activeTabId, setActiveTabId] = useState<string>("policy");
  const [search, setSearch] = useState("");

  const activeTab: ImsTab =
    imsTabsData.find((t) => t.id === activeTabId) || imsTabsData[0];

  const filterDocs = (docs: ImsDoc[]) => {
    if (!search.trim()) return docs;
    const query = search.toLowerCase().trim();
    return docs.filter((doc) => doc.title.toLowerCase().includes(query));
  };

  const filteredDocs = filterDocs(activeTab.docs);

  return (
    <div className="min-h-screen bg-[#faf7f2] font-body text-slate-800">
      <Header />
      <SEO
        title="Integrated Management System (IMS) – MITS Madanapalle"
        description="Integrated Management System (ISO 14001:2015 and ISO 50001:2018) Policies, Manuals, Record Formats, and Annexures of Madanapalle Institute of Technology & Science."
        canonical="/ims"
      />

      {/* Hero Banner — Exact header from official portal */}
      <section
        className="relative pt-32 md:pt-40 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70 bg-gradient-to-b from-black/80 via-slate-900/60 to-slate-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-[#caa74d] font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">
            Environmental & Energy Management
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Integrated Management System (IMS)
          </h1>
          <p className="text-white/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            (ISO 14001:2015 and ISO 50001:2018)
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-4 left-4 sm:left-8 z-10">
          <nav className="flex items-center gap-2 text-xs text-white/70">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/iqac" className="hover:text-white transition-colors">
              IQAC
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">IMS</span>
          </nav>
        </div>
      </section>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#b31317] tracking-tight">
            Integrated Management System (ISO 14001:2015 and ISO 50001:2018)
          </h2>
          <div className="w-20 h-1 bg-[#caa74d] mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sidebar Tabs */}
          <aside className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 sticky top-24">
            <div className="relative mb-4">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search IMS documents..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#b31317] focus:bg-white transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            <nav className="space-y-1.5" aria-label="IMS Tabs">
              {imsTabsData.map((tab) => {
                const isActive = tab.id === activeTabId;
                const IconComponent = tabIcons[tab.id] || ShieldCheck;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTabId(tab.id);
                      setSearch("");
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left text-xs sm:text-[13px] font-body transition-all group cursor-pointer ${
                      isActive
                        ? "bg-[#b31317] text-white font-bold shadow-md shadow-[#b31317]/20"
                        : "text-[#0f2a44] font-medium hover:bg-slate-100/80 hover:text-[#b31317]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 pr-2">
                      <IconComponent
                        className={`w-4 h-4 shrink-0 transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-[#b31317] group-hover:text-[#b31317]"
                        }`}
                      />
                      <span className="leading-snug">{tab.label}</span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive
                          ? "text-white translate-x-0.5"
                          : "text-slate-400 group-hover:text-[#b31317] group-hover:translate-x-0.5"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Back to IQAC Portal</span>
              <Link
                to="/iqac"
                className="inline-flex items-center gap-1 font-semibold text-[#b31317] hover:underline"
              >
                IQAC <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>

          {/* Right Column: Tab Content */}
          <section className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 min-h-[500px]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-100">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#b31317] tracking-wide">
                {activeTab.label}
              </h3>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#b31317] border border-red-100 w-fit">
                {filteredDocs.length} {filteredDocs.length === 1 ? "Document" : "Documents"}
              </span>
            </div>

            {/* Documents List */}
            <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
              {filteredDocs.length === 0 ? (
                <div className="p-10 text-center text-slate-500">
                  <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-body italic">
                    {search
                      ? `No documents found matching "${search}".`
                      : "No documents available in this section."}
                  </p>
                </div>
              ) : (
                filteredDocs.map((doc, idx) => {
                  const isExternalLink = doc.type === "placeholder" || doc.url === "#";
                  return (
                    <a
                      key={idx}
                      href={doc.url}
                      target={isExternalLink ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (isExternalLink) {
                          e.preventDefault();
                          alert(`Document "${doc.title}" is an internal institutional reference.`);
                        }
                      }}
                      className="flex items-center justify-between py-3.5 px-4 sm:px-5 hover:bg-red-50/30 transition-colors group"
                    >
                      <span className="font-body text-xs sm:text-sm font-medium text-slate-800 group-hover:text-[#b31317] transition-colors pr-4 leading-relaxed">
                        {doc.title}
                      </span>
                      <span className="shrink-0 flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-[#b31317]">
                        {doc.type === "placeholder" || doc.url === "#" ? (
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#b31317]" />
                        ) : (
                          <div className="flex items-center gap-1.5 text-slate-500 group-hover:text-[#b31317]">
                            <FileText className="w-4 h-4 text-[#b31317]" />
                            <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#b31317]" />
                          </div>
                        )}
                      </span>
                    </a>
                  );
                })
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IMS;

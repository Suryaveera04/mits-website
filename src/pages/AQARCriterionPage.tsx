import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { aqarCriteriaData } from "@/data/iqac";

const BASE = import.meta.env.BASE_URL;

export const AQARCriterionPage = () => {
  const [activeCriterionId, setActiveCriterionId] = useState("criterion-1");

  const currentCriterion =
    aqarCriteriaData.find((c) => c.id === activeCriterionId) || aqarCriteriaData[0];

  return (
    <div className="min-h-screen bg-[#faf7f2] font-body">
      <Header />
      <SEO
        title="AQAR Criterion Details – MITS Madanapalle"
        description="Metric-wise documentation and key indicator verification reports for Annual Quality Assurance Reports (AQAR) at Madanapalle Institute of Technology & Science."
        canonical="/aqarcriteria"
      />

      {/* Hero Section — Exact design as About Page */}
      <section
        className="relative pt-32 md:pt-44 pb-24 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.2em] uppercase text-sm sm:text-sm mb-4">
            NAAC &amp; IQAC Quality Reports
          </p>
          <h1
            className="font-display text-4xl md:text-6xl font-bold mb-5 text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            AQAR <span className="text-[#ffd15c]">CRITERION</span>
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Metric-wise documentation and key indicator verification reports for Annual Quality Assurance Reports (AQAR).
          </p>
        </div>
        <div className="absolute bottom-4 left-6 z-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-white/90">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">›</li>
              <li>
                <Link to="/iqac" className="text-white/70 hover:text-white transition-colors">
                  IQAC
                </Link>
              </li>
              <li className="text-white/50">›</li>
              <li className="text-[#ffd15c] font-semibold">AQAR Criterion</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-10 md:py-14">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-8 space-y-8 lg:space-y-0">
          
          {/* Left Sidebar Sub-Navigation */}
          <aside className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm h-fit">
            <p className="font-display font-extrabold text-sm uppercase tracking-wider text-[#b31317] mb-3 px-2">
              AQAR CRITERIA
            </p>
            <nav className="space-y-1">
              {aqarCriteriaData.map((c) => {
                const isActive = c.id === activeCriterionId;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCriterionId(c.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm md:text-sm font-semibold text-left transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#b31317] text-white shadow-md font-bold"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-transparent"
                    }`}
                  >
                    <span>{c.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${isActive ? "rotate-90 text-white" : "text-slate-400"}`}
                    />
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right Criterion Tables */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-8">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#0f2a44]">
                {currentCriterion.title}
              </h2>
              <p className="text-sm md:text-sm text-slate-500 mt-1">
                Metric ID details, key indicator documentation, and direct PDF view links.
              </p>
            </div>

            {/* Key Indicator Tables */}
            <div className="space-y-8">
              {currentCriterion.indicators.map((ind, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                  {/* Red Header Bar */}
                  <div className="bg-[#b31317] text-white px-5 py-3.5 flex items-center justify-between">
                    <h3 className="font-display font-bold text-sm md:text-base tracking-wide text-white">
                      {ind.keyIndicator}
                    </h3>
                    <span className="text-sm bg-white/20 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                      View
                    </span>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm md:text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                          <th className="py-3.5 px-4 w-28 text-slate-800">Metric ID</th>
                          <th className="py-3.5 px-4 text-slate-800">Key Indicator / Description</th>
                          <th className="py-3.5 px-4 w-28 text-center text-slate-800">View</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white font-body">
                        {ind.metrics.map((m) => (
                          <tr key={m.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-4 px-4 font-bold text-[#b31317] align-top text-sm">
                              {m.id}
                            </td>
                            <td className="py-4 px-4 text-slate-800 leading-relaxed align-top font-medium text-sm md:text-sm">
                              {m.description}
                            </td>
                            <td className="py-4 px-4 align-top text-center">
                              {m.url && m.url !== "#" ? (
                                <a
                                  href={m.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#b31317] hover:bg-[#8a0e12] text-white text-sm font-bold transition-colors shadow-2xs"
                                >
                                  <FileText className="w-3.5 h-3.5" /> View
                                </a>
                              ) : (
                                <span className="text-sm text-slate-400 font-medium italic">N/A</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

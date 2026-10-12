import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, Newspaper, Calendar, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsletterList } from "@/data/newsletterData";

const BASE = import.meta.env.BASE_URL;

const NewsletterPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNewsletters = newsletterList.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
    item.academicYear.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col font-body">
      <Header />

      {/* Hero Section — Same exact design as About, IQAC, & e-Content Pages */}
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
            Institutional Publications
          </p>
          <h1
            className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            MITS Newsletter <span className="text-[#ffd15c]">Archive</span>
          </h1>
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
              <li className="text-[#ffd15c] font-semibold">Newsletter Archive</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-10 md:py-14">
        {/* Search & Header Bar */}
        <div className="bg-white rounded-2xl p-4 md:p-6 border border-slate-200 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#b31317] flex items-center justify-center font-bold shrink-0">
              <Newspaper className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-[#0f2a44]">Published Issues</h2>
              <p className="text-sm text-slate-500 font-medium">
                {filteredNewsletters.length} Newsletter {filteredNewsletters.length === 1 ? "Issue" : "Issues"} Available
              </p>
            </div>
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search newsletter or year..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm md:text-sm focus:outline-hidden focus:border-[#b31317] focus:ring-1 focus:ring-[#b31317] bg-slate-50/50"
            />
          </div>
        </div>

        {/* Newsletter Table with Red Header Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#b31317] text-white">
                  <th className="py-4 px-6 font-display font-bold text-sm md:text-sm uppercase tracking-wider text-white w-20 text-center">
                    S.No
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-sm md:text-sm uppercase tracking-wider text-white">
                    Newsletter Title
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-sm md:text-sm uppercase tracking-wider text-white w-44">
                    Academic Year
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-sm md:text-sm uppercase tracking-wider text-white w-40 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-body text-sm text-slate-700">
                {filteredNewsletters.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-slate-400 italic">
                      No newsletters match your search query.
                    </td>
                  </tr>
                ) : (
                  filteredNewsletters.map((item, idx) => (
                    <motion.tr
                      key={item.sno}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      className="hover:bg-red-50/40 transition-colors group"
                    >
                      <td className="py-4 px-6 font-semibold text-slate-500 text-center">
                        {item.sno}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <FileText className="w-4 h-4 text-[#b31317] shrink-0" />
                          <span className="font-bold text-[#0f2a44] group-hover:text-[#b31317] transition-colors">
                            {item.title}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-[#caa74d]" />
                          AY {item.academicYear}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#b31317] hover:bg-[#8a0e12] text-white text-sm font-bold transition-all shadow-2xs hover:shadow-md"
                        >
                          <Download className="w-3.5 h-3.5" /> View PDF
                        </a>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsletterPage;

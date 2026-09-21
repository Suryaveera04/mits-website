import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, ExternalLink, Search, ShieldCheck } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { Input } from "@/components/ui/input";
import { mandatoryDisclosures } from "@/data/aboutData";

import { mandatoryDisclosureRecords } from "@/data/mandatoryDisclosuresTableData";

const MandatoryDisclosures = () => {
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(mandatoryDisclosures.map((c, i) => [c.category, i < 2]))
  );
  const [q, setQ] = useState("");
  const [tableSearch, setTableSearch] = useState("");

  const filteredTableDocs = mandatoryDisclosureRecords.filter((doc) =>
    doc.title.toLowerCase().includes(tableSearch.toLowerCase()) ||
    doc.sno.includes(tableSearch)
  );

  const filtered = mandatoryDisclosures
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((it) =>
        it.label.toLowerCase().includes(q.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <PageShell
      eyebrow="Compliance"
      title="Mandatory Disclosures"
      intro="Statutory documents, audit reports, AICTE/NBA approvals, UGC certifications and annual reports of MITS Deemed to be University."
    >
      {/* KEY MANDATORY DISCLOSURES TABLE — Complete 76 Official Records */}
      <div className="mb-12 bg-white border border-[#0f2a44]/15 rounded-2xl p-5 sm:p-7 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-[#0f2a44]/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8b0000]/10 flex items-center justify-center text-[#8b0000]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-[#0f2a44]">
                Mandatory Disclosures
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Official statutory disclosures &amp; notifications published as per regulatory guidelines
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#8b0000]/10 text-[#8b0000]">
              {filteredTableDocs.length} of {mandatoryDisclosureRecords.length} Documents
            </span>
          </div>
        </div>

        {/* Real-time search inside table */}
        <div className="relative max-w-md mb-5">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="Search within mandatory disclosures..."
            value={tableSearch}
            onChange={(e) => setTableSearch(e.target.value)}
            className="pl-9 bg-slate-50/70 border-slate-200"
          />
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm max-h-[550px] overflow-y-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="sticky top-0 z-10">
              <tr className="bg-[#8b0000] text-white">
                <th className="py-3.5 px-4 font-semibold w-20 text-center border border-white/20">S.No</th>
                <th className="py-3.5 px-4 font-semibold border border-white/20">Mandatory Disclosure</th>
                <th className="py-3.5 px-4 font-semibold w-28 text-center border border-white/20">View</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredTableDocs.map((doc) => {
                const isInternalBog = doc.href.includes("/bog");
                const isInternalMinutesAc = doc.href.includes("/minutes-ac");
                const isInternalUniversityFC = doc.href.includes("/university-finance-committee");
                const isInternalFC = doc.href.includes("/finance-committee") && !doc.href.includes("/university-finance-committee");
                const isInternal = doc.href.startsWith("/") || isInternalBog || isInternalMinutesAc || isInternalUniversityFC || isInternalFC;
                const targetUrl = isInternalUniversityFC
                  ? "/university-finance-committee"
                  : isInternalFC
                  ? "/finance-committee"
                  : isInternalBog
                  ? "/bog"
                  : isInternalMinutesAc
                  ? "/minutes-ac"
                  : doc.href;

                return (
                  <tr key={doc.sno} className="hover:bg-amber-50/30 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-600 text-center border border-slate-200/80">
                      {doc.sno}
                    </td>
                    <td className="py-3 px-4 font-medium text-slate-800 border border-slate-200/80 leading-snug">
                      {doc.title}
                    </td>
                    <td className="py-3 px-4 text-center border border-slate-200/80">
                      {isInternal ? (
                        <Link
                          to={targetUrl}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-[#8b0000]/10 text-[#8b0000] hover:bg-[#8b0000] hover:text-white transition-all shadow-xs"
                        >
                          <span>View</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      ) : (
                        <a
                          href={targetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-[#8b0000]/10 text-[#8b0000] hover:bg-[#8b0000] hover:text-white transition-all shadow-xs"
                        >
                          <span>View</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* SEARCH AND CATEGORIZED DISCLOSURES ACCORDION */}
      <div className="relative max-w-md mb-6">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-secondary/50" />
        <Input
          placeholder="Search all disclosures..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((cat) => {
          const isOpen = q ? true : !!open[cat.category];
          return (
            <div
              key={cat.category}
              className="bg-white border border-border rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() =>
                  setOpen((o) => ({ ...o, [cat.category]: !o[cat.category] }))
                }
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-primary/5 transition-colors"
              >
                <div>
                  <p className="text-base font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                    {cat.category}
                  </p>
                  <p className="text-sm text-secondary/60 mt-0.5">
                    {cat.items.length} document{cat.items.length === 1 ? "" : "s"}
                  </p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-secondary/60 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <ul className="divide-y divide-border border-t border-border">
                      {cat.items.map((it) => (
                        <li key={it.url}>
                          {it.url.startsWith("/") ? (
                            <Link
                              to={it.url}
                              className="flex items-center justify-between gap-3 px-5 py-3 text-sm hover:bg-secondary/5 transition-colors group"
                            >
                              <span className="flex items-center gap-3 min-w-0">
                                <FileText className="w-4 h-4 text-primary shrink-0" />
                                <span className="text-secondary group-hover:text-primary truncate font-medium">
                                  {it.label}
                                </span>
                              </span>
                              <ExternalLink className="w-3.5 h-3.5 text-secondary/50 group-hover:text-primary shrink-0" />
                            </Link>
                          ) : (
                            <a
                              href={it.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between gap-3 px-5 py-3 text-sm hover:bg-secondary/5 transition-colors group"
                            >
                              <span className="flex items-center gap-3 min-w-0">
                                <FileText className="w-4 h-4 text-primary shrink-0" />
                                <span className="text-secondary group-hover:text-primary truncate">
                                  {it.label}
                                </span>
                              </span>
                              <ExternalLink className="w-3.5 h-3.5 text-secondary/50 group-hover:text-primary shrink-0" />
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <p className="text-sm text-secondary/60 py-12 text-center">No disclosures match your search.</p>
        )}
      </div>
    </PageShell>
  );
};

export default MandatoryDisclosures;

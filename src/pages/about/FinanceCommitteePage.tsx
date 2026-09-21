import { useState, useMemo } from "react";
import { FileText, ExternalLink, Landmark, ArrowRight, ShieldCheck, Search } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell from "@/components/about/PageShell";
import { Input } from "@/components/ui/input";

interface FinanceRecord {
  sno: number;
  title: string;
  year: string;
  url: string;
}

const financeRecords: FinanceRecord[] = [
  {
    sno: 1,
    title: "Finance Committee 2025-26",
    year: "2025-26",
    url: "https://mits.ac.in/assets/pdf/admin/Finance Committee Meeting 2025-26.pdf",
  },
  {
    sno: 2,
    title: "Finance Committee 2024-25",
    year: "2024-25",
    url: "https://mits.ac.in/assets/pdf/admin/Finance Committee Meeting 2024-25.pdf",
  },
  {
    sno: 3,
    title: "Finance Committee 2023-24",
    year: "2023-24",
    url: "https://mits.ac.in/assets/pdf/admin/Finance-Committee 2023-2024.pdf",
  },
  {
    sno: 4,
    title: "Finance Committee 2022-23",
    year: "2022-23",
    url: "https://mits.ac.in/assets/pdf/admin/Finance Committee 2022-2023.pdf",
  },
  {
    sno: 5,
    title: "Finance Committee 2021-22",
    year: "2021-22",
    url: "https://mits.ac.in/assets/pdf/admin/Finance Committee 2021-2022.pdf",
  },
  {
    sno: 6,
    title: "Finance Committee 2020-21",
    year: "2020-21",
    url: "https://mits.ac.in/assets/pdf/admin/Finance Committee 2020-2021.pdf",
  },
  {
    sno: 7,
    title: "Finance Committee 2019-20",
    year: "2019-20",
    url: "https://mits.ac.in/assets/pdf/admin/Finance Committee 2019-2020.pdf",
  },
  {
    sno: 8,
    title: "Finance Committee 2018-19",
    year: "2018-19",
    url: "https://mits.ac.in/assets/pdf/admin/2018-19 FINANCIAL COMMITTE FILE.pdf",
  },
  {
    sno: 9,
    title: "Finance Committee 2017-18",
    year: "2017-18",
    url: "https://mits.ac.in/assets/pdf/admin/2017-18 FINANCIAL COMMITTE FILE.pdf",
  },
  {
    sno: 10,
    title: "Finance Committee 2016-17",
    year: "2016-17",
    url: "https://mits.ac.in/assets/pdf/admin/2016-17 FINANCIAL COMMITTE FILE.pdf",
  },
  {
    sno: 11,
    title: "Finance Committee 2015-16",
    year: "2015-16",
    url: "https://mits.ac.in/assets/pdf/admin/2015-16 FINANCIAL COMMITTE FILE.pdf",
  },
];

const FinanceCommitteePage = () => {
  const [query, setQuery] = useState("");

  const filteredRecords = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return financeRecords;
    return financeRecords.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.year.toLowerCase().includes(q) ||
        String(r.sno).includes(q)
    );
  }, [query]);

  return (
    <PageShell
      eyebrow="Governance & Finance"
      title="Finance Committee 2015–16 to 2025–26"
      intro="Historical meeting records and resolutions of the Finance Committee of Madanapalle Institute of Technology & Science (Autonomous institution records from 2015–16 to 2025–26)."
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Info Card */}
        <div className="bg-white border border-[#0f2a44]/15 rounded-2xl p-6 sm:p-7 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-[#0f2a44]/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8b0000]/10 text-[#8b0000] flex items-center justify-center shrink-0">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-xl text-[#0f2a44]">
                  Finance Committee (Autonomous)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Annual Committee Records (2015–16 through 2025–26)
                </p>
              </div>
            </div>

            <Link
              to="/university-finance-committee"
              className="inline-flex items-center gap-2 self-start sm:self-center px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#8b0000]/10 text-[#8b0000] hover:bg-[#8b0000] hover:text-white transition-all shadow-xs group"
            >
              <span>View Deemed University (DTBU) Records</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            The Finance Committee of MITS (Autonomous) acts as an advisory body to the Governing Body for financial
            matters. It prepares and reviews budget estimates relating to grant allocations from UGC and other funding
            agencies, as well as revenue received from student fees and other sources.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> UGC Autonomous Compliance
            </span>
            <span className="text-slate-300">•</span>
            <span>Coverage: 11 Academic Years</span>
            <span className="text-slate-300">•</span>
            <span>All signed resolutions preserved</span>
          </div>
        </div>

        {/* Filter & Records Table */}
        <div className="bg-white border border-[#0f2a44]/15 rounded-2xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 bg-slate-50/80 border-b border-[#0f2a44]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-display font-bold text-base text-[#0f2a44]">
                Finance Committee Meetings & Files
              </h3>
              <p className="text-xs text-slate-500">
                Showing {filteredRecords.length} of {financeRecords.length} records
              </p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search year or title..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9 h-9 text-xs sm:text-sm bg-white"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#8b0000] text-white">
                  <th className="py-3.5 px-5 font-semibold w-20 text-center border border-white/20">
                    S.No
                  </th>
                  <th className="py-3.5 px-5 font-semibold border border-white/20">
                    Finance Committee Document
                  </th>
                  <th className="py-3.5 px-5 font-semibold w-32 text-center border border-white/20">
                    Academic Year
                  </th>
                  <th className="py-3.5 px-5 font-semibold w-32 text-center border border-white/20">
                    View
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredRecords.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-10 text-center text-slate-500 text-sm">
                      No finance committee records matched &ldquo;{query}&rdquo;.
                    </td>
                  </tr>
                ) : (
                  filteredRecords.map((item, idx) => (
                    <tr
                      key={item.sno}
                      className={`hover:bg-amber-50/50 transition-colors ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                      }`}
                    >
                      <td className="py-4 px-5 font-semibold text-slate-600 text-center border border-slate-100">
                        {item.sno}
                      </td>
                      <td className="py-4 px-5 text-slate-800 font-medium border border-slate-100">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 text-slate-800 hover:text-[#8b0000] font-medium transition-colors group"
                        >
                          <FileText className="w-4 h-4 text-[#8b0000] shrink-0 group-hover:scale-110 transition-transform" />
                          <span>{item.title}</span>
                        </a>
                      </td>
                      <td className="py-4 px-5 text-center border border-slate-100">
                        <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                          {item.year}
                        </span>
                      </td>
                      <td className="py-4 px-5 text-center border border-slate-100">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#8b0000]/10 text-[#8b0000] hover:bg-[#8b0000] hover:text-white transition-all shadow-xs"
                        >
                          <span>View</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <p className="text-xs text-slate-500">
              Preserved autonomous records (2015–2026). Documents hosted on mits.ac.in.
            </p>
            <p className="text-xs text-slate-400">PDF format • Opens in new tab</p>
          </div>
        </div>

        {/* Quick Navigation Footer */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            to="/university-finance-committee"
            className="p-5 rounded-2xl bg-[#8b0000]/5 border border-[#8b0000]/20 hover:bg-[#8b0000]/10 transition-all shadow-xs flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-semibold text-[#8b0000] uppercase tracking-wider">
                Deemed to be University
              </p>
              <h4 className="font-bold text-[#8b0000] transition-colors mt-0.5">
                Finance Committee (DTBU) 2025–26
              </h4>
            </div>
            <ArrowRight className="w-5 h-5 text-[#8b0000]/60 group-hover:text-[#8b0000] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/about/mandatory-disclosures"
            className="p-5 rounded-2xl bg-white border border-[#0f2a44]/15 hover:border-[#8b0000]/40 transition-all shadow-xs flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Governance
              </p>
              <h4 className="font-bold text-slate-800 group-hover:text-[#8b0000] transition-colors mt-0.5">
                Mandatory Disclosures
              </h4>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#8b0000] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
};

export default FinanceCommitteePage;

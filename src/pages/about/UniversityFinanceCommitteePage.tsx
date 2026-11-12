import { useState } from "react";
import { FileText, ExternalLink, Landmark, ArrowRight, ShieldCheck, Search } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell from "@/components/about/PageShell";

interface MeetingItem {
  sno: number;
  title: string;
  url: string;
}

// All 5 Finance Committee (DTBU) 2025-26 meetings verified with live https://mits.ac.in/university-finance-committee
const dtbuFinanceMeetings: MeetingItem[] = [
  {
    sno: 1,
    title: "Minutes of 5th Finance Committee meeting",
    url: "https://mits.ac.in/assets/pdf/admin/5th Finance Comittee Meeting-protected.pdf",
  },
  {
    sno: 2,
    title: "Minutes of 4th Finance Committee meeting",
    url: "https://mits.ac.in/assets/pdf/admin/Minutes of 4th Finance Committee meeting-protected.pdf",
  },
  {
    sno: 3,
    title: "Minutes of 3rd Finance Committee meeting",
    url: "https://mits.ac.in/assets/pdf/admin/Minutes of 3rd Finance Committee meeting-protected.pdf",
  },
  {
    sno: 4,
    title: "Minutes of 2nd Finance Committee Meeting",
    url: "https://mits.ac.in/assets/pdf/admin/Minutes of 2nd Finance Committee meeting-protected.pdf",
  },
  {
    sno: 5,
    title: "Minutes of 1st Finance Committee Meeting",
    url: "https://mits.ac.in/assets/pdf/admin/Minutes of 1st Finance Committee Meeting-protected.pdf",
  },
];

const UniversityFinanceCommitteePage = () => {
  const [search, setSearch] = useState("");

  const filteredMeetings = dtbuFinanceMeetings.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.sno.toString().includes(search)
  );

  return (
    <PageShell
      eyebrow="Governance & Finance"
      title="Finance Committee (DTBU) 2025–26"
      intro="Official minutes and proceedings of the Finance Committee of Madanapalle Institute of Technology & Science – Deemed to be University."
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
                  University Finance Committee (DTBU)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Statutory Body of MITS Deemed to be University
                </p>
              </div>
            </div>

            <Link
              to="/finance-committee"
              className="inline-flex items-center gap-2 self-start sm:self-center px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#0f2a44]/5 text-[#0f2a44] hover:bg-[#8b0000] hover:text-white transition-all shadow-xs group"
            >
              <span>Autonomous Era Records (2015–2026)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            The Finance Committee of MITS Deemed to be University exercises overarching statutory oversight regarding annual budget forecasts, audited statements, capital allocation, statutory reserves, and financial governance standards as stipulated under University Grants Commission (UGC) norms.
          </p>
        </div>

        {/* Search & Records Section */}
        <div className="bg-white border border-[#0f2a44]/15 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <h3 className="font-display font-bold text-lg text-[#0f2a44]">
                Proceedings of Finance Committee Meetings
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Official signed minutes of Deemed to be University meetings
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search meeting (e.g. 5th)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8b0000]/20 focus:border-[#8b0000]"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#8b0000] text-white">
                  <th className="py-3 px-4 font-semibold w-16 text-center border-r border-white/20">
                    S.No
                  </th>
                  <th className="py-3 px-4 font-semibold border-r border-white/20">
                    Finance Committee
                  </th>
                  <th className="py-3 px-4 font-semibold w-28 text-center">
                    View
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredMeetings.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="py-8 text-center text-slate-500 text-xs">
                      No meeting found matching your query.
                    </td>
                  </tr>
                ) : (
                  filteredMeetings.map((item, idx) => (
                    <tr
                      key={item.sno}
                      className={`hover:bg-amber-50/40 transition-colors ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                      }`}
                    >
                      <td className="py-3.5 px-4 font-bold text-slate-600 text-center border-r border-slate-100">
                        {item.sno}
                      </td>
                      <td className="py-3.5 px-4 text-slate-800 font-medium border-r border-slate-100">
                        <span className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#8b0000] shrink-0" />
                          <span>{item.title}</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-[#8b0000] hover:text-white hover:bg-[#8b0000] border border-[#8b0000]/30 transition-all shadow-xs"
                        >
                          <span>View</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Showing {filteredMeetings.length} of {dtbuFinanceMeetings.length} Recorded Meetings</span>
            <span className="flex items-center gap-1 text-[#8b0000] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> UGC Compliance Verified
            </span>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default UniversityFinanceCommitteePage;

import { FileText, ExternalLink, Landmark, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell from "@/components/about/PageShell";

interface MeetingItem {
  sno: number;
  title: string;
  url: string;
}

const dtbuFinanceMeetings: MeetingItem[] = [
  {
    sno: 1,
    title: "Minutes of 3rd Finance Committee meeting",
    url: "https://mits.ac.in/assets/pdf/admin/Minutes of 3rd Finance Committee meeting.pdf",
  },
  {
    sno: 2,
    title: "Minutes of 2nd Finance Committee Meeting",
    url: "https://mits.ac.in/assets/pdf/admin/Minutes of 2nd Finance Committee meeting.pdf",
  },
  {
    sno: 3,
    title: "Minutes of 1st Finance Committee Meeting",
    url: "https://mits.ac.in/assets/pdf/admin/Minutes of 1st Finance Committee Meeting.pdf",
  },
];

const UniversityFinanceCommitteePage = () => {
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
            The Finance Committee of MITS Deemed to be University is a statutory body constituted as per UGC
            regulations. It advises the Executive Council on financial matters, scrutinizes the annual budget estimates,
            reviews audited accounts, oversees recurring and non-recurring expenditures, and monitors the institutional
            financial policies.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> UGC Deemed to be University Compliance
            </span>
            <span className="text-slate-300">•</span>
            <span>Academic Year: 2025–26</span>
            <span className="text-slate-300">•</span>
            <span>All records verified and signed</span>
          </div>
        </div>

        {/* Meetings Table */}
        <div className="bg-white border border-[#0f2a44]/15 rounded-2xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 bg-slate-50/80 border-b border-[#0f2a44]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-display font-bold text-base text-[#0f2a44]">
              Minutes of Finance Committee Meetings
            </h3>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#8b0000]/10 text-[#8b0000] self-start sm:self-auto">
              {dtbuFinanceMeetings.length} Meetings on Record
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#8b0000] text-white">
                  <th className="py-3.5 px-5 font-semibold w-20 text-center border border-white/20">
                    S.No
                  </th>
                  <th className="py-3.5 px-5 font-semibold border border-white/20">
                    Finance Committee
                  </th>
                  <th className="py-3.5 px-5 font-semibold w-32 text-center border border-white/20">
                    View Document
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {dtbuFinanceMeetings.map((item, idx) => (
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
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <p className="text-xs text-slate-500">
              Official records maintained by the Registrar & Finance Office, MITS Deemed to be University.
            </p>
            <p className="text-xs text-slate-400">PDF format • Opens in new tab</p>
          </div>
        </div>

        {/* Quick Navigation Footer */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            to="/about/mandatory-disclosures"
            className="p-5 rounded-2xl bg-white border border-[#0f2a44]/15 hover:border-[#8b0000]/40 transition-all shadow-xs flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Related Governance
              </p>
              <h4 className="font-bold text-slate-800 group-hover:text-[#8b0000] transition-colors mt-0.5">
                Mandatory Disclosures
              </h4>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#8b0000] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/finance-committee"
            className="p-5 rounded-2xl bg-[#0f2a44]/5 border border-[#0f2a44]/15 hover:bg-[#0f2a44]/10 hover:border-[#0f2a44]/30 transition-all shadow-xs flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Archive
              </p>
              <h4 className="font-bold text-[#0f2a44] transition-colors mt-0.5">
                Finance Committee 2015–16 to 2025–26
              </h4>
            </div>
            <ArrowRight className="w-5 h-5 text-[#0f2a44]/60 group-hover:text-[#0f2a44] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
};

export default UniversityFinanceCommitteePage;

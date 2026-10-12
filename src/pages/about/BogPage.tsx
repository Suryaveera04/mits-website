import { FileText, ExternalLink, Users } from "lucide-react";
import PageShell from "@/components/about/PageShell";

const bogMeetings = [
  { sno: 1, title: "42nd Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/42nd Meeting of Governing Body.pdf" },
  { sno: 2, title: "41st Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/41st Meeting of Governing Body.pdf" },
  { sno: 3, title: "40th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/40th Meeting of Governing Body.pdf" },
  { sno: 4, title: "39th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/39th Meeting of Governing Body.pdf" },
  { sno: 5, title: "38th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/38th Meeting of Governing Body.pdf" },
  { sno: 6, title: "37th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/37th Meeting of Governing Body.pdf" },
  { sno: 7, title: "36th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/36th Meeting of Governing Body.pdf" },
  { sno: 8, title: "35th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/35th Meeting of Governing Body.pdf" },
  { sno: 9, title: "34th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/34th Meeting of Governing Body.pdf" },
  { sno: 10, title: "33rd Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/33rd Meeting of Governing Body.pdf" },
  { sno: 11, title: "32nd Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/32nd Meeting of Governing Body.pdf" },
  { sno: 12, title: "31st Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/31st Meeting of Governing Body.pdf" },
  { sno: 13, title: "30th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/30th Meeting of Governing Body.pdf" },
  { sno: 14, title: "29th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/29th Meeting of Governing Body.pdf" },
  { sno: 15, title: "28th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/28th Meeting of Governing Body.pdf" },
  { sno: 16, title: "27th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/27th Meeting of Governing Body.pdf" },
  { sno: 17, title: "26th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/26th Meeting of Governing Body.pdf" },
  { sno: 18, title: "25th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/25th Meeting of Governing Body.pdf" },
  { sno: 19, title: "24th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/24th Meeting of Governing Body.pdf" },
  { sno: 20, title: "23rd Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/23rd Meeting of Governing Body.pdf" },
  { sno: 21, title: "22nd Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/22nd Meeting of Governing Body.pdf" },
  { sno: 22, title: "21st Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/21st Meeting of Governing Body.pdf" },
  { sno: 23, title: "20th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/20th Meeting of Governing Body.pdf" },
  { sno: 24, title: "19th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/19th Meeting of Governing Body.pdf" },
  { sno: 25, title: "18th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/18th Meeting of Governing Body.pdf" },
  { sno: 26, title: "17th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/17th Meeting of Governing Body.pdf" },
  { sno: 27, title: "16th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/16th Meeting of Governing Body.pdf" },
  { sno: 28, title: "15th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/15th Meeting of Governing Body.pdf" },
  { sno: 29, title: "14th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/mandatory/14th Meeting of Governing Body.pdf" },
];

const BogPage = () => {
  return (
    <PageShell
      eyebrow="Governance"
      title="Minutes of Governing Council Meetings"
      intro="Official minutes of the Board of Governors meetings of Madanapalle Institute of Technology & Science – Deemed to be University (2014–2026)."
    >
      {/* Info card */}
      <div className="mb-8 bg-white border border-[#0f2a44]/15 rounded-2xl p-5 sm:p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#0f2a44]/10">
          <Users className="w-5 h-5 text-[#8b0000]" />
          <h3 className="font-display font-bold text-lg text-[#0f2a44]">
            Board of Governors – Meeting Minutes
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          The Board of Governors is the apex body of MITS Deemed to be University responsible for overall governance, policy decisions, and strategic direction. The minutes of all meetings are maintained as official records in accordance with UGC regulations.
        </p>
      </div>

      {/* Table */}
      <div className="bg-white border border-[#0f2a44]/15 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#8b0000] text-white">
                <th className="py-3.5 px-5 font-semibold w-16 text-center border border-white/20">S.No</th>
                <th className="py-3.5 px-5 font-semibold border border-white/20">Minutes of Governing Council Meetings</th>
                <th className="py-3.5 px-5 font-semibold w-28 text-center border border-white/20">View</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {bogMeetings.map((item, idx) => (
                <tr
                  key={item.sno}
                  className={`hover:bg-amber-50/40 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}
                >
                  <td className="py-3.5 px-5 font-semibold text-slate-500 text-center border border-slate-100">
                    {item.sno}
                  </td>
                  <td className="py-3.5 px-5 text-slate-800 font-medium border border-slate-100">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#8b0000] shrink-0" />
                      {item.title}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-center border border-slate-100">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-bold text-[#8b0000] hover:text-[#6e0000] hover:underline"
                    >
                      View <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-100">
          <p className="text-xs text-slate-500">Total: {bogMeetings.length} meetings on record &nbsp;|&nbsp; Documents hosted on mits.ac.in</p>
        </div>
      </div>
    </PageShell>
  );
};

export default BogPage;

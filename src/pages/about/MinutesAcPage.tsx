import { FileText, ExternalLink, GraduationCap } from "lucide-react";
import PageShell from "@/components/about/PageShell";

const acMeetings = [
  { sno: 1, title: "20th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/20th Academic Council Meeting.pdf" },
  { sno: 2, title: "19th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/19th Academic Council Meeting.pdf" },
  { sno: 3, title: "18th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/18th Academic Council Meeting.pdf" },
  { sno: 4, title: "17th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/17th Academic Council.pdf" },
  { sno: 5, title: "16th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/16th Academic Council.pdf" },
  { sno: 6, title: "15th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/Academic Council meeting minutes till 15th_1-28-10-2014.pdf" },
  { sno: 7, title: "14th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/Academic Council meeting minutes till 15th_2-30-12-2014.pdf" },
  { sno: 8, title: "13th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/Academic Council meeting minutes till 15th_3-29-07-2015.pdf" },
  { sno: 9, title: "12th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/Academic Council meeting minutes till 15th_4-2-7-2016.pdf" },
  { sno: 10, title: "11th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/Academic Council meeting minutes till 15th_5-28-3-2017.pdf" },
  { sno: 11, title: "10th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/Academic Council meeting minutes till 15th_6-7-7-2018.pdf" },
  { sno: 12, title: "9th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/Academic Council meeting minutes till 15th_7-26-6-2019.pdf" },
  { sno: 13, title: "8th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/Academic Council meeting minutes till 15th_8-23-12-2019.pdf" },
  { sno: 14, title: "7th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/Academic Council meeting minutes till 15th_9-31-8-2020.pdf" },
  { sno: 15, title: "6th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/Academic Council meeting minutes till 15th_10-3-3-2021.pdf" },
  { sno: 16, title: "5th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/Academic Council meeting minutes till 15th_11-20-9-2021.pdf" },
  { sno: 17, title: "4th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/Academic Council meeting minutes till 15th_12-5-5-2022.pdf" },
  { sno: 18, title: "3rd Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/Academic Council meeting minutes till 15th_13-9-9-2022.pdf" },
  { sno: 19, title: "2nd Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/Academic Council meeting minutes till 15th_14-18-5-2023.pdf" },
  { sno: 20, title: "1st Academic Council Meeting", url: "https://mits.ac.in/public/uploads/mandatory/Academic Council meeting minutes till 15th_15-17-11-2023.pdf" },
];

const MinutesAcPage = () => {
  return (
    <PageShell
      eyebrow="Academics"
      title="Minutes of Academic Council Meetings"
      intro="Official minutes of the Academic Council meetings of Madanapalle Institute of Technology & Science – Deemed to be University (2014–2026)."
    >
      {/* Info card */}
      <div className="mb-8 bg-white border border-[#0f2a44]/15 rounded-2xl p-5 sm:p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#0f2a44]/10">
          <GraduationCap className="w-5 h-5 text-[#8b0000]" />
          <h3 className="font-display font-bold text-lg text-[#0f2a44]">
            Academic Council – Meeting Minutes
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          The Academic Council is the principal academic body of MITS Deemed to be University. It is responsible for maintaining standards of instruction, education, and research. All meeting minutes are maintained as official records in compliance with UGC and statutory requirements.
        </p>
      </div>

      {/* Table */}
      <div className="bg-white border border-[#0f2a44]/15 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#8b0000] text-white">
                <th className="py-3.5 px-5 font-semibold w-16 text-center border border-white/20">S.No</th>
                <th className="py-3.5 px-5 font-semibold border border-white/20">Minutes of Academic Council Meetings</th>
                <th className="py-3.5 px-5 font-semibold w-28 text-center border border-white/20">View</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {acMeetings.map((item, idx) => (
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
          <p className="text-xs text-slate-500">Total: {acMeetings.length} meetings on record &nbsp;|&nbsp; Documents hosted on mits.ac.in</p>
        </div>
      </div>
    </PageShell>
  );
};

export default MinutesAcPage;

import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, ExternalLink, GraduationCap, Search, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "https://mits.edu/";

// All 20 Academic Council Meetings verified directly with live https://mits.ac.in/minutes-ac
const acMeetings = [
  { sno: 1, title: "20th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/20th Academic Council Meeting.pdf" },
  { sno: 2, title: "19th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/19th Academic Council Meeting.pdf" },
  { sno: 3, title: "18th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/18th Academic Council Meeting.pdf" },
  { sno: 4, title: "17th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/17th Academic Council.pdf" },
  { sno: 5, title: "16th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/16th Academic Council.pdf" },
  { sno: 6, title: "15th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/Academic Council meeting minutes till 15th_1-28-10-2014.pdf" },
  { sno: 7, title: "14th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/Academic Council meeting minutes till 15th_2-30-12-2014.pdf" },
  { sno: 8, title: "13th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/Academic Council meeting minutes till 15th_3-29-07-2015.pdf" },
  { sno: 9, title: "12th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/Academic Council meeting minutes till 15th_4-2-7-2016.pdf" },
  { sno: 10, title: "11th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/Academic Council meeting minutes till 15th_5-28-3-2017.pdf" },
  { sno: 11, title: "10th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/Academic Council meeting minutes till 15th_6-7-7-2018.pdf" },
  { sno: 12, title: "9th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/Academic Council meeting minutes till 15th_7-26-6-2019.pdf" },
  { sno: 13, title: "8th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/Academic Council meeting minutes till 15th_8-23-12-2019.pdf" },
  { sno: 14, title: "7th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/Academic Council meeting minutes till 15th_9-31-8-2020.pdf" },
  { sno: 15, title: "6th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/Academic Council meeting minutes till 15th_10-3-3-2021.pdf" },
  { sno: 16, title: "5th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/Academic Council meeting minutes till 15th_11-20-9-2021.pdf" },
  { sno: 17, title: "4th Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/Academic Council meeting minutes till 15th_12-5-5-2022.pdf" },
  { sno: 18, title: "3rd Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/Academic Council meeting minutes till 15th_13-9-9-2022.pdf" },
  { sno: 19, title: "2nd Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/Academic Council meeting minutes till 15th_14-18-5-2023.pdf" },
  { sno: 20, title: "1st Academic Council Meeting", url: "https://mits.ac.in/public/uploads/static-pdf/Academic Council meeting minutes till 15th_15-17-11-2023.pdf" },
];

export default function MinutesAcPage() {
  const [search, setSearch] = useState("");

  const filteredMeetings = acMeetings.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.sno.toString().includes(search)
  );

  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800 flex flex-col font-sans">
      <Header />

      {/* HERO BANNER - Exact match to https://mits.ac.in/minutes-ac */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffd15c] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm flex items-center justify-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#ffd15c]" />
            Academic Governance • Statutory Council
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Minutes of Academic Council Meetings
          </h1>
          <p className="text-white/90 text-sm sm:text-base font-medium max-w-2xl mx-auto drop-shadow-sm">
            Madanapalle Institute of Technology &amp; Science • Deemed to be University (2014–2026)
          </p>
        </div>

        {/* BOTTOM-LEFT CORNER BREADCRUMB */}
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            <li>
              <Link to="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-white/50">›</li>
            <li>
              <Link to="/about/mandatory-disclosures" className="text-white/70 hover:text-white transition-colors">
                Mandatory Disclosures
              </Link>
            </li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold truncate max-w-[280px]">
              Academic Council Meetings
            </li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1">
        <ScrollReveal>
          {/* Header Action & Search Bar */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/80 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0f2a44] flex items-center gap-2.5">
                <GraduationCap className="w-6 h-6 text-[#990000]" />
                Academic Council Resolutions &amp; Curricular Approvals
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Principal academic body responsible for academic regulations, curriculum design, and examinations
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search meeting (e.g. 20th)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#990000]/20 focus:border-[#990000]"
              />
            </div>
          </div>

          {/* TABLE - Matching official MITS style with dark red header */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#990000] text-white">
                    <th className="py-4 px-6 font-bold w-20 text-center border-r border-red-800 tracking-wider">
                      S.No
                    </th>
                    <th className="py-4 px-6 font-bold border-r border-red-800 tracking-wide">
                      Minutes of Academic Council Meetings
                    </th>
                    <th className="py-4 px-6 font-bold w-32 text-center tracking-wider">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredMeetings.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="py-10 text-center text-slate-500 text-sm">
                        No meeting records found matching "{search}".
                      </td>
                    </tr>
                  ) : (
                    filteredMeetings.map((item, idx) => (
                      <tr
                        key={item.sno}
                        className={`hover:bg-amber-50/50 transition-colors ${
                          idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                        }`}
                      >
                        <td className="py-3.5 px-6 font-bold text-slate-600 text-center border-r border-slate-200/80">
                          {item.sno}
                        </td>
                        <td className="py-3.5 px-6 font-semibold text-slate-800 border-r border-slate-200/80">
                          <span className="flex items-center gap-3">
                            <FileText className="w-4 h-4 text-[#990000] shrink-0" />
                            <span>{item.title}</span>
                          </span>
                        </td>
                        <td className="py-3.5 px-6 text-center">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold text-[#990000] hover:text-white hover:bg-[#990000] border border-[#990000]/30 transition-all shadow-xs"
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

            {/* Table Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
              <span>Showing {filteredMeetings.length} of {acMeetings.length} Recorded Meetings</span>
              <span>Documents hosted on official repository mits.ac.in</span>
            </div>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, ExternalLink, Users, Search, ChevronRight, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "https://mits.edu/";

// Sharp PDF Icon matching the official MITS style
function PdfIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`shrink-0 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 28 32" fill="none" className="w-full h-full drop-shadow-sm">
        <path
          d="M4 2h13l7 7v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
          fill="#ffffff"
          stroke="#b31317"
          strokeWidth="1.8"
        />
        <path
          d="M17 2v7h7"
          stroke="#b31317"
          strokeWidth="1.8"
          fill="#fde8e8"
        />
        <rect x="4.5" y="14" width="17" height="10" rx="2" fill="#b31317" />
        <text
          x="6"
          y="21.5"
          fill="#ffffff"
          fontSize="7"
          fontWeight="800"
          fontFamily="sans-serif"
          letterSpacing="0.4"
        >
          PDF
        </text>
      </svg>
    </div>
  );
}

// Complete 29 Governing Body Meeting Records (Verified with https://mits.ac.in/bog)
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
  { sno: 29, title: "14th Meeting of Governing Body", url: "https://mits.ac.in/public/uploads/static-pdf/14th Meeting of Governing Body.pdf" },
];

export default function BogPage() {
  const [search, setSearch] = useState("");

  const filteredMeetings = bogMeetings.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.sno.toString().includes(search)
  );

  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800 flex flex-col font-sans">
      <Header />

      {/* HERO BANNER - Exact match to https://mits.ac.in/bog */}
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
            <Shield className="w-4 h-4 text-[#ffd15c]" />
            Statutory Governance • Board of Governors
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Minutes of Governing Council Meetings
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
              Governing Council Meetings
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
                <Users className="w-6 h-6 text-[#990000]" />
                Official Meeting Proceedings &amp; Resolutions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Apex statutory body governing policy decisions, academic leadership, and institutional strategy
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search meeting by number (e.g. 42nd)..."
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
                      Minutes of Governing Council Meetings
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
              <span>Showing {filteredMeetings.length} of {bogMeetings.length} Recorded Meetings</span>
              <span>Official statutory records published as per regulatory standards</span>
            </div>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}

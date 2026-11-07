import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Users, Calendar, Phone, Mail, Award, BookOpen, ChevronRight, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const notices = [
  {
    title: "Inauguration of AI Learning Hub",
    body: 'Student Activity Center [SAC] organized "Inauguration of AI Learning Hub" on 26th May 2027.',
    link: "https://mits.ac.in/public/uploads/sac/Inauguration of AI Learning Hub.pdf",
    linkText: "Click here for Report on Event",
    date: "26 May 2027",
  },
  {
    title: "28th Annual Day Celebrations 2027",
    body: "Student Activity Center [SAC] organized the 28th Annual Day Celebrations-2027 for the Academic year 2025-26 at MITS. Date: 18th April 2027",
    link: "https://mits.ac.in/public/uploads/sac/28th Annual Day Celebrations 2027.pdf",
    linkText: "Click here for Report on Event",
    date: "18 Apr 2027",
  },
  {
    title: "Workshop on Development Environment",
    body: 'The MITS Web Club under Student Activity Center (SAC), organized a workshop on "Introduction to Development Environment". Date: 12th September 2025',
    link: "https://mits.ac.in/public/uploads/sac/Introduction to Development Environment.pdf",
    linkText: "Click here for Event Details",
    date: "12 Sep 2025",
  },
  {
    title: "Anti-Ragging Logo League",
    body: "Anti-Ragging Logo League under Skill Bee Club was organized by Student Activity Center & Anti-Ragging Cell at MITS in association with Department of CSE - Data Science. Date: 14th August 2025",
    link: "https://mits.ac.in/assets/pdf/assoc/Anti-Ragging-Week.pdf",
    linkText: "Click here for Event Details",
    date: "14 Aug 2025",
  },
  {
    title: "Anti-Ragging Art Competition",
    body: "Anti-Ragging Art Competition was organized at MITS in association with Arts and Cultural Club. Date: 14th August 2025",
    link: "https://mits.ac.in/assets/pdf/assoc/Anti-Ragging-Week.pdf",
    linkText: "Click here for Event Details",
    date: "14 Aug 2025",
  },
  {
    title: "Zero Tolerance Rally",
    body: "Zero Tolerance Rally was organized at MITS in association with MSR Club. Date: 12th August 2025",
    link: "https://mits.ac.in/assets/pdf/assoc/Anti-Ragging-Week.pdf",
    linkText: "Click here for Event Details",
    date: "12 Aug 2025",
  },
  {
    title: "Anti-Ragging Week",
    body: "Anti-Ragging Week was organized at MITS in association with Film Makers Club, SAC and Anti-Ragging Cell. Date: 12th August 2025",
    link: "https://mits.ac.in/assets/pdf/assoc/Anti-Ragging-Week.pdf",
    linkText: "Click here for Event Details",
    date: "12 Aug 2025",
  },
];

const clubsTable = [
  { sno: 1, name: "Arts & Cultural Club", faculty: "Mr. Y. Pradeep Kumar", student: "M. Harsha Vardhan", contact: "8143767320" },
  { sno: 2, name: "Film Makers Club", faculty: "Mr. K. Md.Riyaz Ali", student: "P. Sohith Reddy\nP. Meghana", contact: "6309713619\n8247015236" },
  { sno: 3, name: "Sports Club", faculty: "Dr. C. Damodharan", student: "V. Wazid", contact: "8247432448" },
  { sno: 4, name: "MSR Club", faculty: "Mr. B.S.H. Shayeez Ahamed", student: "S. Janardhan Yadav", contact: "9949847100" },
  { sno: 5, name: "Web Club", faculty: "Dr. R. Nidhya", student: "V. Dinesh Kumar\nR. Divya Sree", contact: "6304038756\n6305690838" },
  { sno: 6, name: "Tech Club", faculty: "Mr. D. Abdul Jaleel", student: "Syed Mushtaq Ahamed\nM Naganandini", contact: "8309667680\n9885102775" },
  { sno: 7, name: "Coding Club", faculty: "Mrs. Komala Anamalamudi", student: "Geethika TV", contact: "9441395117" },
  { sno: 8, name: "Builders Club", faculty: "Dr. K. Imran", student: "Vandadi Shivani", contact: "8523815918" },
  { sno: 9, name: "Literary Club", faculty: "Mr. T. Rama Mohan", student: "Varshini Rasineni\nS.Tabrez Basha", contact: "6301272700\n9390487698" },
  { sno: 10, name: "Yoga & Meditation Club", faculty: "Mr. K. Manju Vikram", student: "S Leela Narasimha Venkat", contact: "6305696086" },
  { sno: 11, name: "SKILL BEE Club", faculty: "Mr. K. Durga Charan", student: "Chakala Hanish Kumar", contact: "8125409248" },
  { sno: 12, name: "Anchors Club", faculty: "Mr. Narasimha Charlu", student: "M Keerthana Evanjilin", contact: "8897983614" },
  { sno: 13, name: "Entrepreneurship Development Cell", faculty: "Dr. Kosaraju Sireesha", student: "M. Pothan Rama\nM. Murari", contact: "6305710028\n9989051606" },
  { sno: 14, name: "Drone Technology Club", faculty: "Mr. P. Mohammed Rizwan Ali", student: "Shaik Mohammad Thaheer", contact: "7680893631" },
];

export default function StudentClubs() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"clubs" | "notices">("clubs");

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />

      {/* HERO SECTION */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 drop-shadow-sm">
            Student Activity Center (SAC)
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Student Clubs
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            Over 14 dynamic student clubs nurturing creativity, technical innovation, social responsibility, arts, and leadership across campus.
          </p>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells & Committees</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells/sac" className="text-white/70 hover:text-white transition-colors">SAC</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold">Student Clubs</li>
          </ol>
        </nav>
      </section>

      {/* TAB BAR (SAC | Student Clubs) */}
      <div className="border-b border-gray-200 bg-white sticky top-16 z-20 shadow-xs">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="flex items-center gap-0 overflow-x-auto">
            <button
              onClick={() => navigate("/cells/sac")}
              className="relative flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap text-[#0f2a44]/70 hover:text-[#b31317] transition-colors cursor-pointer"
            >
              SAC
            </button>
            <span className="text-gray-300 text-base select-none px-1">|</span>
            <button
              onClick={() => setActiveTab("clubs")}
              className="relative flex items-center gap-2 px-5 py-4 text-sm font-bold whitespace-nowrap text-[#b31317] border-b-2 border-[#b31317] transition-colors cursor-pointer"
            >
              Student Clubs
            </button>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-10 md:py-14 max-w-6xl">
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            onClick={() => navigate("/cells/sac")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to SAC Main Page
          </button>

          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("clubs")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "clubs" ? "bg-white text-[#b31317] shadow-xs" : "text-slate-600 hover:text-[#0f2a44]"
              }`}
            >
              Clubs Directory
            </button>
            <button
              onClick={() => setActiveTab("notices")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "notices" ? "bg-white text-[#b31317] shadow-xs" : "text-slate-600 hover:text-[#0f2a44]"
              }`}
            >
              Events & Notices ({notices.length})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">
            {activeTab === "clubs" ? (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                  <div className="p-6 md:p-8 border-b border-gray-100 bg-gradient-to-r from-slate-50 to-white flex items-center justify-between">
                    <div>
                      <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-2.5">
                        <Users className="w-6 h-6 text-[#b31317]" />
                        Active Student Clubs Directory
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Official list of registered SAC student clubs with faculty coordinators and student leads.
                      </p>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#0f2a44] text-white text-xs uppercase tracking-wider">
                          <th className="py-3.5 px-4 text-center w-12">S.No</th>
                          <th className="py-3.5 px-4 text-left">Name of the Club</th>
                          <th className="py-3.5 px-4 text-left">Faculty Coordinator</th>
                          <th className="py-3.5 px-4 text-left">Student Coordinator</th>
                          <th className="py-3.5 px-4 text-left">Contact No.</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {clubsTable.map((club) => (
                          <tr key={club.sno} className="hover:bg-[#fff8e6]/40 transition-colors">
                            <td className="py-3.5 px-4 text-center font-bold text-slate-400">{club.sno}</td>
                            <td className="py-3.5 px-4 font-bold text-[#0f2a44]">
                              {club.name}
                            </td>
                            <td className="py-3.5 px-4 text-slate-700 font-medium">
                              {club.faculty}
                            </td>
                            <td className="py-3.5 px-4 text-slate-600 whitespace-pre-line text-xs sm:text-sm">
                              {club.student}
                            </td>
                            <td className="py-3.5 px-4 text-slate-600 whitespace-pre-line text-xs font-mono">
                              {club.contact}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </ScrollReveal>
            ) : (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                  <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44] mb-6 flex items-center gap-2.5">
                    <Calendar className="w-6 h-6 text-[#b31317]" />
                    Club Events & Notices
                  </h2>
                  <div className="space-y-4">
                    {notices.map((n, i) => (
                      <div
                        key={i}
                        className="p-4 sm:p-5 rounded-xl border border-slate-200/80 hover:border-[#caa74d] hover:bg-[#fff8e6]/20 transition-all duration-200 shadow-xs"
                      >
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#b31317] bg-[#b31317]/10 px-2.5 py-0.5 rounded-full">
                            {n.date}
                          </span>
                        </div>
                        <h3 className="font-bold text-[#0f2a44] text-base mb-1.5">{n.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">{n.body}</p>
                        {n.link && (
                          <a
                            href={n.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b31317] hover:underline"
                          >
                            <span>{n.linkText || "View Document"}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6">
                <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#b31317]" />
                  Club Participation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Student clubs operate under the aegis of the Student Activity Center (SAC) to conduct regular technical meetups, hackathons, open mic nights, theatrical performances, sports tournaments, and community welfare camps.
                </p>
                <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
                  <span className="font-bold">How to Join: </span>
                  Reach out to the respective student coordinators or visit the SAC office in the Student Amenities Centre.
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6">
                <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-4 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#b31317]" />
                  SAC Coordinator
                </h3>
                <div className="space-y-2 text-sm text-slate-700">
                  <p className="font-bold text-[#0f2a44]">Student Activity Center (SAC)</p>
                  <p className="text-xs text-[#b31317] font-semibold">Madanapalle Institute of Technology & Science</p>
                  <p className="text-xs text-slate-500">Angallu, Madanapalle - 517325</p>
                  <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <a href="mailto:sac@mits.ac.in" className="text-[#b31317] hover:underline font-medium">
                      sac@mits.ac.in
                    </a>
                  </div>
                </div>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

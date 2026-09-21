import React, { useState } from "react";
import {
  FileText,
  Download,
  ExternalLink,
  Phone,
  User,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Info,
  Search,
  Bell
} from "lucide-react";
import {
  noticeBoardData,
  aboutClubsContent,
  studentClubsDirectory,
  studentClubsList,
  StudentClubItem
} from "@/data/studentClubsData";

interface StudentClubsSectionProps {
  onSelectClub?: (clubId: string) => void;
}

export const StudentClubsSection: React.FC<StudentClubsSectionProps> = () => {
  const [activeTab, setActiveTab] = useState<string>("about");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Tab navigation items matching the screenshot
  const navTabs = [
    { id: "about", name: "About Student Clubs" },
    { id: "arts-cultural", name: "Arts & Cultural Club" },
    { id: "film-makers", name: "Film Makers Club" },
    { id: "sports", name: "Sports Club" },
    { id: "msr", name: "MSR Club" },
    { id: "web", name: "Web Club" },
    { id: "tech", name: "Tech Club" },
    { id: "coding", name: "Coding Club" },
    { id: "builders", name: "Builders Club" },
    { id: "literary", name: "Literary Club" },
    { id: "yoga-meditation", name: "Yoga & Meditation Club" },
    { id: "skill-bee", name: "SKILL BEE Club" },
    { id: "arc", name: "ARC Club" },
    { id: "drone-technology", name: "Drone Technology Club" },
    { id: "entrepreneurs", name: "Entrepreneur's Club" }
  ];

  const currentClub: StudentClubItem | undefined = studentClubsList.find(
    (c) => c.id === activeTab
  );

  // Filtered directory for the About page table
  const filteredDirectory = studentClubsDirectory.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.facultyAdvisor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.studentCoordinator.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#8b0000] tracking-tight">
          Student Clubs
        </h1>
        <p className="text-muted-foreground text-sm mt-1.5">
          Student Activity Center (SAC) — Madanapalle Institute of Technology & Science
        </p>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar Navigation */}
        <aside className="lg:col-span-4 xl:col-span-3">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden sticky top-28">
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 font-bold text-xs uppercase tracking-wider text-slate-700 flex items-center justify-between">
              <span>Club Navigation</span>
              <span className="text-slate-400 font-normal">{navTabs.length} Tabs</span>
            </div>

            <nav className="divide-y divide-slate-100 max-h-[78vh] overflow-y-auto custom-scrollbar">
              {navTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      window.scrollTo({ top: 320, behavior: "smooth" });
                    }}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-all flex items-center justify-between group ${
                      isActive
                        ? "bg-red-50/80 text-[#8b0000] font-bold border-l-4 border-[#8b0000]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent"
                    }`}
                  >
                    <span className="leading-snug">{tab.name}</span>
                    <span
                      className={`ml-2 text-base transition-transform group-hover:translate-x-1 ${
                        isActive
                          ? "text-[#8b0000] font-bold"
                          : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="lg:col-span-8 xl:col-span-9 space-y-8">
          {/* E-Notice Board Card (Matches User Screenshot) */}
          <section className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            {/* Dark Crimson Header */}
            <div className="bg-[#8b0000] px-5 py-3 text-white flex items-center justify-between">
              <h2 className="font-bold text-base md:text-lg tracking-wide flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-300" />
                E-Notice Board
              </h2>
              <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full font-semibold">
                Latest SAC Update
              </span>
            </div>

            {/* E-Notice Content */}
            <div className="p-5 md:p-6 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                {noticeBoardData.title}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {noticeBoardData.description}
              </p>
              <p className="text-xs font-semibold text-slate-500">
                Date: {noticeBoardData.date}
              </p>
              <div className="pt-2">
                <a
                  href={noticeBoardData.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#8b0000] hover:text-red-700 hover:underline transition-colors group"
                >
                  <span>Click here for Report on Event</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </section>

          {/* Tab Content Display */}
          {activeTab === "about" ? (
            /* ======================================================== */
            /* ABOUT STUDENT CLUBS VIEW (Matches exact screenshot)       */
            /* ======================================================== */
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-8">
              {/* Main Heading */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                  About Student Clubs
                </h2>
                <p className="text-slate-700 text-base leading-relaxed text-justify">
                  {aboutClubsContent.intro}
                </p>
              </div>

              {/* Importance of Student Clubs */}
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-slate-900">
                  Importance of Student Clubs :
                </h3>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify">
                  {aboutClubsContent.importance}
                </p>
              </div>

              {/* Benefits of Students Clubs */}
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-slate-900">
                  Benefits of Students Clubs:
                </h3>
                <ul className="space-y-2.5 pl-1">
                  {aboutClubsContent.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm md:text-base text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-[#8b0000] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons / Official Documents (Matches Screenshot) */}
              <div className="border-t border-b border-slate-200 py-4">
                <div className="flex flex-wrap items-center gap-3">
                  {aboutClubsContent.quickLinks.map((link, qIdx) => (
                    <a
                      key={qIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs md:text-sm shadow-sm transition-all hover:shadow"
                    >
                      <Download className="w-4 h-4" />
                      <span>{link.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Clubs Directory Table */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    Clubs Directory
                  </h3>
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search club or advisor..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#8b0000]/20 focus:border-[#8b0000]"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#8b0000] text-white">
                        <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider w-16 text-center">
                          S.No
                        </th>
                        <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">
                          Name of the Club
                        </th>
                        <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">
                          Faculty Advisor
                        </th>
                        <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">
                          Student Coordinator
                        </th>
                        <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">
                          Contact Number
                        </th>
                        <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {filteredDirectory.length > 0 ? (
                        filteredDirectory.map((club, idx) => (
                          <tr
                            key={club.sno}
                            className={`hover:bg-red-50/40 transition-colors ${
                              idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                            }`}
                          >
                            <td className="py-3 px-4 text-center font-bold text-slate-700">
                              {club.sno}
                            </td>
                            <td className="py-3 px-4 font-semibold text-slate-900">
                              <button
                                onClick={() => {
                                  setActiveTab(club.tabId);
                                  window.scrollTo({ top: 320, behavior: "smooth" });
                                }}
                                className="text-left text-[#8b0000] hover:underline font-bold"
                              >
                                {club.name}
                              </button>
                            </td>
                            <td className="py-3 px-4 text-slate-700 whitespace-pre-line">
                              {club.facultyAdvisor}
                            </td>
                            <td className="py-3 px-4 text-slate-700">
                              {club.studentCoordinator}
                            </td>
                            <td className="py-3 px-4 text-slate-700 font-mono text-xs">
                              <a
                                href={`tel:${club.contactNumber}`}
                                className="hover:text-[#8b0000] flex items-center gap-1.5"
                              >
                                <Phone className="w-3.5 h-3.5 text-slate-400" />
                                {club.contactNumber}
                              </a>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <button
                                onClick={() => {
                                  setActiveTab(club.tabId);
                                  window.scrollTo({ top: 320, behavior: "smooth" });
                                }}
                                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded bg-red-100 text-[#8b0000] hover:bg-[#8b0000] hover:text-white transition-colors"
                              >
                                <span>View</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-slate-400">
                            No clubs found matching &quot;{searchQuery}&quot;
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : currentClub ? (
            /* ======================================================== */
            /* INDIVIDUAL CLUB DETAIL VIEW                              */
            /* ======================================================== */
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-8">
              {/* Club Header */}
              <div className="border-b border-slate-200 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <span className="inline-block px-3 py-1 bg-red-100 text-[#8b0000] text-xs font-bold uppercase rounded-full tracking-wider">
                    {currentClub.category || "Student Club"}
                  </span>
                  <button
                    onClick={() => setActiveTab("about")}
                    className="text-xs font-semibold text-slate-500 hover:text-[#8b0000] flex items-center gap-1 transition-colors"
                  >
                    <span>← Back to About Clubs</span>
                  </button>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {currentClub.name}
                </h2>
              </div>

              {/* Club Banner Image */}
              {currentClub.image && (
                <div className="rounded-xl overflow-hidden border border-slate-200 max-h-[380px] bg-slate-100">
                  <img
                    src={currentClub.image}
                    alt={currentClub.name}
                    className="w-full h-full object-cover max-h-[380px]"
                    onError={(e) => {
                      // Fallback if image fails to load
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
              )}

              {/* About Us Section */}
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-slate-900">
                  About Us:
                </h3>
                <p className="text-slate-700 text-base leading-relaxed text-justify whitespace-pre-line">
                  {currentClub.about}
                </p>
              </div>

              {/* Vision & Mission if available */}
              {(currentClub.vision || currentClub.mission) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentClub.vision && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                      <h4 className="font-bold text-sm text-[#8b0000] uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#8b0000]" /> Vision
                      </h4>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                        {currentClub.vision}
                      </p>
                    </div>
                  )}
                  {currentClub.mission && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                      <h4 className="font-bold text-sm text-blue-800 uppercase tracking-wider flex items-center gap-1.5">
                        <Info className="w-4 h-4 text-blue-700" /> Mission
                      </h4>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                        {currentClub.mission}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Key Activities if available */}
              {currentClub.activities && currentClub.activities.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">
                    Activities & Focus Areas:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentClub.activities.map((act, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-2.5 bg-slate-50 border border-slate-100 rounded-lg p-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#8b0000] shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm font-medium text-slate-800 leading-snug">
                          {act}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Faculty Advisor & Student Coordinator Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-base text-amber-300 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-amber-300" />
                  Club Leadership & Coordinators
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-1 border-l-2 border-amber-300/40 pl-3">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      Faculty Advisor
                    </p>
                    <p className="text-base font-bold text-white whitespace-pre-line">
                      {currentClub.facultyAdvisor}
                    </p>
                    <p className="text-xs text-slate-300">Department / Academic Mentor</p>
                  </div>

                  <div className="space-y-1 border-l-2 border-red-400/40 pl-3">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      Student Coordinator
                    </p>
                    <p className="text-base font-bold text-white">
                      {currentClub.studentCoordinator}
                    </p>
                    <a
                      href={`tel:${currentClub.contactNumber}`}
                      className="text-xs text-amber-300 hover:underline flex items-center gap-1 pt-1 font-mono"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {currentClub.contactNumber}
                    </a>
                  </div>
                </div>
              </div>

              {/* Events Organized & Activity Reports (CRITICAL SECTION USER REQUESTED) */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                    <Calendar className="w-6 h-6 text-[#8b0000]" />
                    Events Organized & Activity Reports
                  </h3>
                  <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-bold">
                    {currentClub.events.length} {currentClub.events.length === 1 ? "Report" : "Reports"} Available
                  </span>
                </div>

                {currentClub.events.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {currentClub.events.map((ev, eIdx) => (
                      <a
                        key={eIdx}
                        href={ev.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start justify-between gap-3 p-4 rounded-xl border border-slate-200 hover:border-[#8b0000] hover:bg-red-50/30 transition-all group bg-white shadow-sm hover:shadow"
                      >
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            {ev.year && (
                              <span className="px-2 py-0.5 text-[11px] font-bold rounded bg-red-100 text-[#8b0000]">
                                {ev.year}
                              </span>
                            )}
                            <span className="text-[11px] text-slate-400 font-medium">
                              Official Report (PDF)
                            </span>
                          </div>
                          <h5 className="text-sm font-semibold text-slate-900 group-hover:text-[#8b0000] transition-colors leading-snug break-words">
                            {ev.title}
                          </h5>
                          <span className="text-xs font-bold text-[#8b0000] inline-flex items-center gap-1 pt-0.5">
                            <Download className="w-3 h-3" />
                            Download PDF
                          </span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#8b0000] transition-colors shrink-0 mt-1" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-200 text-slate-500 text-sm">
                    Activity reports are currently being compiled for this club. Please check back shortly.
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </main>
      </div>
    </div>
  );
};

export default StudentClubsSection;

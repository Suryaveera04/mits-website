import React, { useState } from "react";
import {
  Trophy,
  FileText,
  Download,
  ChevronDown,
  ChevronUp,
  Award,
  Calendar,
  ExternalLink,
  Users,
  Dumbbell,
  Medal,
  Activity,
  ArrowRight,
} from "lucide-react";

interface SportsDoc {
  title: string;
  url: string;
  year?: string;
  description?: string;
}

const currentEvents2027_28: SportsDoc[] = [
  {
    title: 'The "80th Independence Day Celebration" was organized by Department of Physical Education at MITS Deemed to be University on 15th August 2027.',
    url: "https://mits.ac.in/assets/pdf/assoc/80th Independence Day Celebration.pdf",
    year: "2027-28",
  },
  {
    title: 'A Campaign on "Tiranga Rally – Har Ghar Tiranga" was organized by MITS NCC, NSS and Sports Teams on 14th August 2027.',
    url: "https://mits.ac.in/assets/pdf/assoc/Tiranga Rally.pdf",
    year: "2027-28",
  },
  {
    title: 'A "World International Yoga Day Programme-2027" was organized by Department of Physical Education and Sports & Yoga and Meditation Club on 21st June 2027.',
    url: "https://mits.ac.in/assets/pdf/facility/World International Yoga Day Programme-2027.pdf",
    year: "2027-28",
  },
  {
    title: "MITS Inter Department Faculty Cricket Tournament 2027-2028 was organized by Department of Physical Education & Sports from 19th to 25th May 2027.",
    url: "https://mits.ac.in/assets/pdf/facility/MITS Inter Department Faculty Cricket Tournament 2027-2028.pdf",
    year: "2027-28",
  },
  {
    title: "Report on International Conference on Sports (SRM)",
    url: "https://mits.ac.in/assets/pdf/facility/Report on international conference on sports (SRM)-compressed.pdf",
    year: "2027-28",
  },
  {
    title: "79th Independence Day Celebration Event Report",
    url: "https://mits.ac.in/assets/pdf/facility/79th independence day.pdf",
    year: "2025-26",
  },
];

const sportsCommittees: SportsDoc[] = [
  { title: "Sports Committee 2025-26 Office Order", url: "https://mits.ac.in/public/uploads/facilites/Sports Committee Office Order 2025.pdf", year: "2025-26" },
  { title: "Sports Committee 2023-24 Order", url: "https://mits.ac.in/public/uploads/facilites/Sports Committee - order 2024.pdf", year: "2023-24" },
  { title: "Sports Committee 2021-22 Minutes of Meeting", url: "https://mits.ac.in/public/uploads/facilites/Sports committee MOM- 2021-2022.pdf", year: "2021-22" },
  { title: "Sports Committee 2020-21 Notification", url: "https://mits.ac.in/public/uploads/facilites/56abaddb38a169f9460629efdda978b7.pdf", year: "2020-21" },
  { title: "Sports Committee 2018-19 Office Order", url: "https://mits.ac.in/public/uploads/facilites/dcd57e90a1a0f6833f4af4fe28865a6b.pdf", year: "2018-19" },
  { title: "Sports Committee 2017-18 Office Order", url: "https://mits.ac.in/public/uploads/facilites/301fe6de98e11515e7ea5410b09c9e84.pdf", year: "2017-18" },
];

const sportsClubEvents: SportsDoc[] = [
  { title: "Sports Club Event Details 2021-22", url: "https://mits.ac.in/public/uploads/facilites/MITS_Sports Club_2021-22.pdf", year: "2021-22" },
  { title: "Sports Club Event Details 2020-21", url: "https://mits.ac.in/public/uploads/facilites/fbbc5df3f076f62ea96104c8c10b94cf.pdf", year: "2020-21" },
  { title: "Sports Club Event Details 2019-20", url: "https://mits.ac.in/public/uploads/facilites/9f155b6e05809a533b9f6579268a46d0.pdf", year: "2019-20" },
  { title: "Sports Club Event Details 2018-19", url: "https://mits.ac.in/public/uploads/facilites/73ae8dd53edf6ac8f52d6ed77775e9c2.pdf", year: "2018-19" },
  { title: "Sports Club Event Details 2017-18", url: "https://mits.ac.in/public/uploads/facilites/19de367c985edc7ccd0a3e2c09ab4e49.pdf", year: "2017-18" },
  { title: "Sports Club Event Details 2016-17", url: "https://mits.ac.in/public/uploads/facilites/e43e9a0077676d47f5b85de062edcdd4.pdf", year: "2016-17" },
];

const jntuaPlayers: SportsDoc[] = [
  { title: "2024-2025 University Representatives JNTUA (South Zone Inter University)", url: "https://mits.ac.in/public/uploads/facilites/2024-2025 UNIVERSITY REPRESENTATIVES JNTUA (SOUTH ZONE INTER UNIVERSITY).pdf", year: "2024-25" },
  { title: "2023-2024 University Representatives JNTUA", url: "https://mits.ac.in/public/uploads/facilites/univ repre.pdf", year: "2023-24" },
  { title: "2022-2023 Achievers in JNTUA All India Inter University", url: "https://mits.ac.in/public/uploads/facilites/2022-2023 ACHIEVERS IN JNTUA ALL INDIA INTER UNVERSITY-min.pdf", year: "2022-23" },
  { title: "2021-2022 JNTUA Players NBA 2022", url: "https://mits.ac.in/public/uploads/facilites/JNTUA Players_2021-22 NBA 2022.pdf", year: "2021-22" },
  { title: "2019-2020 JNTUA Representation Details", url: "https://mits.ac.in/public/uploads/facilites/6b6e28b6867781770d749a7b4b5f9faf.pdf", year: "2019-20" },
  { title: "2018-2019 JNTUA Representation Details", url: "https://mits.ac.in/public/uploads/facilites/d892c78a9cd011c9dcdadb835a02d9da.pdf", year: "2018-19" },
];

const gymFacilities: SportsDoc[] = [
  { title: "Gym Facilities 2018-19", url: "https://mits.ac.in/public/uploads/facilites/gymfacilities-2018-19.pdf", year: "2018-19" },
  { title: "Gym Facilities 2017-18", url: "https://mits.ac.in/public/uploads/facilites/bc3438117d6223a5712f85222ae24bb5.pdf", year: "2017-18" },
  { title: "Gym Facilities 2016-17", url: "https://mits.ac.in/public/uploads/facilites/f62fce690d251b3ee9ccfddb50d35689.pdf", year: "2016-17" },
  { title: "Gym Facilities 2015-16", url: "https://mits.ac.in/public/uploads/facilites/37299176e5d5cf2bea189b9d4d2056d6.pdf", year: "2015-16" },
  { title: "Gym Facilities 2014-15", url: "https://mits.ac.in/public/uploads/facilites/385686a64254bddf6ea7a57cdb33d808.pdf", year: "2014-15" },
];

const sportsSubsections = [
  { id: "about", label: "About Sports", icon: Trophy },
  { id: "policy", label: "Policy Guidelines", icon: FileText },
  { id: "facilities", label: "Physical Facilities", icon: Activity },
  { id: "accessibility", label: "Sports Facility Accessibility", icon: Dumbbell },
  { id: "committee", label: "Sports Committee", icon: Users },
  { id: "club", label: "Sports Club", icon: Medal },
  { id: "participated", label: "Events Participated", icon: Award },
  { id: "organized", label: "Events organized", icon: Calendar },
  { id: "jntua", label: "MITS Representatives in JNTUA", icon: Users },
  { id: "incentives", label: "MITS Sports Incentives", icon: Trophy },
  { id: "gym", label: "GYM", icon: Dumbbell },
  { id: "gallery", label: "Gallery", icon: Trophy },
  { id: "fitindia", label: "Fit India Fitness Protocols", icon: Activity },
];

export const SportsFacilities: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<string>("about");
  const [currentEventsOpen, setCurrentEventsOpen] = useState<boolean>(true);

  return (
    <div className="mt-8 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
      {/* Top Banner Title */}
      <div className="bg-[#0f2a44] px-6 py-5 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-[#ffd15c]" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-wide">
              DEPARTMENT OF PHYSICAL EDUCATION &amp; SPORTS
            </h3>
            <p className="text-xs text-amber-200/80 mt-0.5">
              Fostering Athletic Excellence, Health &amp; Sportsmanship
            </p>
          </div>
        </div>
      </div>

      {/* Main Subsections Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Left Navigation Sidebar (13 items matching Image 1) */}
        <div className="lg:col-span-4 bg-slate-50/70 border-r border-slate-200/80 p-3 sm:p-4">
          <nav className="space-y-1">
            {sportsSubsections.map((item) => {
              const active = activeSubTab === item.id;
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSubTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-left cursor-pointer ${
                    active
                      ? "bg-[#0f2a44] text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-200/60 hover:text-[#0f2a44]"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <IconComp className={`w-4 h-4 flex-shrink-0 ${active ? "text-amber-400" : "text-slate-400"}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${active ? "translate-x-0.5 text-amber-400" : "text-slate-400"}`} />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Content Panel */}
        <div className="lg:col-span-8 p-5 sm:p-7">
          {/* Subtab 1: About Sports with Current Events 2027-28 Accordion */}
          {activeSubTab === "about" && (
            <div className="space-y-6">
              <div>
                <h4 className="font-display text-xl font-bold text-[#0f2a44] mb-2">
                  Department of Physical Education &amp; Sports
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The Department of Physical Education and Sports is committed to enhancing student wellness, fitness, and sporting competitive spirit. It oversees comprehensive outdoor grounds, multi-gym setups, inter-university representations, and annual tournaments.
                </p>
              </div>

              {/* Accordion: Current Events 2027-28 matching reference image */}
              <div className="rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <button
                  onClick={() => setCurrentEventsOpen(!currentEventsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3.5 bg-slate-50 hover:bg-slate-100 transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#b30000]" />
                    <span className="font-bold text-sm text-[#b30000]">Current Events 2027-28</span>
                  </div>
                  {currentEventsOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  )}
                </button>

                {currentEventsOpen && (
                  <div className="p-4 bg-white divide-y divide-slate-100 space-y-3">
                    {currentEvents2027_28.map((event, idx) => (
                      <div key={idx} className="pt-3 first:pt-0">
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {event.title}
                        </p>
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f2a44] hover:text-[#b30000] hover:underline mt-1.5 transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5 text-[#b30000]" />
                          <span>Click here for Report on Event</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Subtab 2: Policy Guidelines */}
          {activeSubTab === "policy" && (
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-[#0f2a44]">
                Sports Policy Guidelines
              </h4>
              <p className="text-sm text-slate-600">
                Official policy guidelines governing physical education facilities, code of conduct, student participation, and health protocols at MITS.
              </p>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#b30000]" />
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Policy Guidelines - MITS Sports</h5>
                    <p className="text-xs text-slate-500">Official Document • PDF</p>
                  </div>
                </div>
                <a
                  href="https://mits.ac.in/public/uploads/facilites/Policy Guidliness_MITS_Sports.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0f2a44] hover:bg-[#1a4168] text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          )}

          {/* Subtab 3: Physical Facilities */}
          {activeSubTab === "facilities" && (
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-[#0f2a44]">
                Sports Physical Facilities
              </h4>
              <p className="text-sm text-slate-600">
                Comprehensive overview of athletic tracks, indoor game courts, outdoor sports fields, and training infrastructure across the 26.17-acre campus.
              </p>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#b30000]" />
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">MITS Sports Physical Facilities Brochure</h5>
                    <p className="text-xs text-slate-500">Infrastructure Inventory &amp; Specifications</p>
                  </div>
                </div>
                <a
                  href="https://mits.ac.in/public/uploads/facilites/MITS _Sports Physical Facilities.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0f2a44] hover:bg-[#1a4168] text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          )}

          {/* Subtab 4: Sports Facility Accessibility */}
          {activeSubTab === "accessibility" && (
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-[#0f2a44]">
                Sports Facility Accessibility
              </h4>
              <p className="text-sm text-slate-600">
                Timings, reservation procedures, and accessible infrastructure for students, faculty, and differently-abled individuals.
              </p>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#b30000]" />
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Sports Facility Accessibility Document</h5>
                    <p className="text-xs text-slate-500">Access Protocols &amp; Operating Hours</p>
                  </div>
                </div>
                <a
                  href="https://mits.ac.in/public/uploads/facilites/Sports facility accessibility.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0f2a44] hover:bg-[#1a4168] text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          )}

          {/* Subtab 5: Sports Committee */}
          {activeSubTab === "committee" && (
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-[#0f2a44]">
                Sports Committee
              </h4>
              <p className="text-sm text-slate-600">
                Official Office Orders and Minutes of Meetings for the Sports Advisory Committee across academic years:
              </p>
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
                {sportsCommittees.map((c, i) => (
                  <div key={i} className="p-3.5 bg-white hover:bg-slate-50 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">{c.title}</span>
                    </div>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-[#0f2a44] hover:text-white rounded text-xs font-semibold text-slate-700 transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      <span>PDF</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subtab 6: Sports Club */}
          {activeSubTab === "club" && (
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-[#0f2a44]">
                Sports Club Event Details
              </h4>
              <p className="text-sm text-slate-600">
                Annual activities, inter-branch tournaments, and intramural competitions coordinated by the MITS Sports Club:
              </p>
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
                {sportsClubEvents.map((c, i) => (
                  <div key={i} className="p-3.5 bg-white hover:bg-slate-50 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <Medal className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">{c.title}</span>
                    </div>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-[#0f2a44] hover:text-white rounded text-xs font-semibold text-slate-700 transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      <span>PDF</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subtab 7: Events Participated */}
          {activeSubTab === "participated" && (
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-[#0f2a44]">
                Events Participated
              </h4>
              <p className="text-sm text-slate-600">
                Record of MITS student athletes representing the institution at South Zone, Inter-University, and National championships.
              </p>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#b30000]" />
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">MITS Sports Events Participated</h5>
                    <p className="text-xs text-slate-500">Comprehensive Record of External Tournaments</p>
                  </div>
                </div>
                <a
                  href="https://mits.ac.in/public/uploads/facilites/MITS_Sports Events Participated.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0f2a44] hover:bg-[#1a4168] text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          )}

          {/* Subtab 8: Events organized */}
          {activeSubTab === "organized" && (
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-[#0f2a44]">
                Events Organized
              </h4>
              <p className="text-sm text-slate-600">
                Tournaments, athletic meets, and fitness campaigns organized on campus by the Department of Physical Education:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    <div>
                      <h5 className="text-sm font-bold text-slate-800">Events Organized 2024-25</h5>
                      <p className="text-xs text-slate-500">Comprehensive Report</p>
                    </div>
                  </div>
                  <a
                    href="https://mits.ac.in/public/uploads/facilites/256c5cc88a014b0d54f4b796f2659704.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0f2a44] hover:bg-[#1a4168] text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>PDF</span>
                  </a>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    <div>
                      <h5 className="text-sm font-bold text-slate-800">Events Organized 2018-23</h5>
                      <p className="text-xs text-slate-500">Multi-year Cumulative Report</p>
                    </div>
                  </div>
                  <a
                    href="https://mits.ac.in/public/uploads/facilites/147c4d3f701d0c5c16ecbd150b348949.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0f2a44] hover:bg-[#1a4168] text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>PDF</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Subtab 9: MITS Representatives in JNTUA */}
          {activeSubTab === "jntua" && (
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-[#0f2a44]">
                MITS Representatives in JNTUA &amp; South Zone
              </h4>
              <p className="text-sm text-slate-600">
                Official rosters of student athletes selected to represent JNTUA and South Zone in All India Inter-University championships:
              </p>
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
                {jntuaPlayers.map((c, i) => (
                  <div key={i} className="p-3.5 bg-white hover:bg-slate-50 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <Trophy className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">{c.title}</span>
                    </div>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-[#0f2a44] hover:text-white rounded text-xs font-semibold text-slate-700 transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      <span>PDF</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subtab 10: MITS Sports Incentives */}
          {activeSubTab === "incentives" && (
            <div className="space-y-5">
              <div>
                <h4 className="font-display text-xl font-bold text-[#0f2a44]">
                  SPORTS EXCELLENCE AWARD (MEN &amp; WOMEN)
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  The basic objective of the award is to serve as an incentive to achievers and an inspiration to upcoming sportspersons. This award goes to an individual (male or female) who displays exemplary sportsmanship, competitive drive, and athletic leadership.
                </p>
                <p className="text-xs text-amber-800 bg-amber-50 p-3 rounded-lg border border-amber-200/60 mt-3">
                  Winners receive cash awards, medals, and certificates under the &quot;MITS College Sports Awards Criteria Points System&quot; during Annual Day celebrations.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0f2a44] text-white text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="py-2.5 px-3">Batch</th>
                      <th className="py-2.5 px-3">Name</th>
                      <th className="py-2.5 px-3">Category</th>
                      <th className="py-2.5 px-3">Dept</th>
                      <th className="py-2.5 px-3">Game</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-semibold text-slate-900">2018-19</td>
                      <td className="py-2.5 px-3">E. Suresh</td>
                      <td className="py-2.5 px-3">Men</td>
                      <td className="py-2.5 px-3">CE</td>
                      <td className="py-2.5 px-3 font-medium text-amber-700">Kho–Kho</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-semibold text-slate-900">2018-19</td>
                      <td className="py-2.5 px-3">V. Sravani</td>
                      <td className="py-2.5 px-3">Women</td>
                      <td className="py-2.5 px-3">EEE</td>
                      <td className="py-2.5 px-3 font-medium text-amber-700">Tennikoit</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-semibold text-slate-900">2017-18</td>
                      <td className="py-2.5 px-3">SG. Md. Ashfaq</td>
                      <td className="py-2.5 px-3">Men</td>
                      <td className="py-2.5 px-3">ME</td>
                      <td className="py-2.5 px-3 font-medium text-amber-700">Volleyball</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-semibold text-slate-900">2017-18</td>
                      <td className="py-2.5 px-3">G. Bhavyasree</td>
                      <td className="py-2.5 px-3">Women</td>
                      <td className="py-2.5 px-3">ME</td>
                      <td className="py-2.5 px-3 font-medium text-amber-700">Basketball</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-semibold text-slate-900">2016-17</td>
                      <td className="py-2.5 px-3">G. Mahesh</td>
                      <td className="py-2.5 px-3">Men</td>
                      <td className="py-2.5 px-3">ECE</td>
                      <td className="py-2.5 px-3 font-medium text-amber-700">Volleyball</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Subtab 11: GYM */}
          {activeSubTab === "gym" && (
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-[#0f2a44]">
                Campus Gymnasium Facilities
              </h4>
              <p className="text-sm text-slate-600">
                Modern fitness center equipped with strength-training machines, free weights, treadmills, and dedicated trainers for men and women students and faculty:
              </p>
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
                {gymFacilities.map((c, i) => (
                  <div key={i} className="p-3.5 bg-white hover:bg-slate-50 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <Dumbbell className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">{c.title}</span>
                    </div>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-[#0f2a44] hover:text-white rounded text-xs font-semibold text-slate-700 transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      <span>PDF</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subtab 12: Gallery */}
          {activeSubTab === "gallery" && (
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-[#0f2a44]">
                Sports Achievements Gallery
              </h4>
              <p className="text-sm text-slate-600">
                View documented achievements, ceremony photo collections, and tournament presentations:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h5 className="font-bold text-sm text-slate-800 mb-1">Sports Achievements Gallery 1</h5>
                  <p className="text-xs text-slate-500 mb-3">Trophy presentations &amp; championship moments</p>
                  <a
                    href="https://mits.ac.in/public/uploads/facilites/SPORTS ACHIEVEMENT GALLERY.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0f2a44] hover:bg-[#1a4168] text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>View Gallery Presentation</span>
                  </a>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h5 className="font-bold text-sm text-slate-800 mb-1">Sports Achievements Gallery 2</h5>
                  <p className="text-xs text-slate-500 mb-3">South Zone &amp; National meet highlights</p>
                  <a
                    href="https://mits.ac.in/public/uploads/facilites/UPDATED SPORTS PRESENTATION FINAL.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0f2a44] hover:bg-[#1a4168] text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>View Gallery Presentation</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Subtab 13: Fit India Fitness Protocols */}
          {activeSubTab === "fitindia" && (
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-[#0f2a44]">
                Fit India Fitness Protocols
              </h4>
              <p className="text-sm text-slate-600">
                MITS actively participates in the Government of India&apos;s Fit India Movement, promoting healthy lifestyles, yoga, and regular cardiovascular fitness across campus.
              </p>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-emerald-600" />
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Fit India Fitness Protocol Guidelines</h5>
                    <p className="text-xs text-slate-500">Government of India Standard Protocols</p>
                  </div>
                </div>
                <a
                  href="https://mits.ac.in/public/uploads/facilites/Sports%20Physical%20Facilities.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0f2a44] hover:bg-[#1a4168] text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Protocol</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SportsFacilities;

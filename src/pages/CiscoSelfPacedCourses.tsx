import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { selfPacedCoursesData, type SelfPacedCourse } from "@/data/ciscoData";
import { Calendar, Search, FileText, ExternalLink, ArrowLeft } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const CiscoSelfPacedCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<string>("All");

  const domains = useMemo(() => {
    const dSet = new Set(selfPacedCoursesData.courses.map((c: SelfPacedCourse) => c.domain));
    return ["All", ...Array.from(dSet)];
  }, []);

  const filteredCourses = useMemo(() => {
    return selfPacedCoursesData.courses.filter((course: SelfPacedCourse) => {
      const matchesSearch =
        course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.achievements.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDomain = selectedDomain === "All" || course.domain === selectedDomain;
      return matchesSearch && matchesDomain;
    });
  }, [searchQuery, selectedDomain]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans">
      <SEO
        title="Cisco Self-Paced Courses – MITS Networking Academy"
        description="Browse all Cisco self-paced certification courses at MITS Madanapalle. Filter by domain and enroll directly on NetAcad."
        canonical="/cisco-self-paced-courses"
      />
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section
          className="relative pt-32 md:pt-44 pb-24 overflow-hidden"
          style={{
            backgroundImage: `url("${BASE}Hero-Section/image-3.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0f2a44]/70" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p className="text-[#ffb300] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
              ONLINE CERTIFICATION CATALOG
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Cisco <span className="text-[#ffd15c]">Self-Paced Courses</span>
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {selfPacedCoursesData.subtitle}
            </p>
          </div>
          <div className="absolute bottom-4 left-6 sm:left-8 z-10 hidden sm:block">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/50">›</li>
                <li><Link to="/cisco-networking-academy" className="hover:text-white transition-colors">Cisco Networking Academy</Link></li>
                <li className="text-white/50">›</li>
                <li className="text-amber-300 font-semibold">Self-Paced Courses</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* FULL WIDTH CONTENT */}
        <section className="container mx-auto px-4 py-12 md:py-16">

          {/* Dark blue header — exactly like official page */}
          <div className="bg-[#0f2a44] rounded-t-2xl px-6 sm:px-10 py-8">
            <h2 className="text-white font-bold text-xl sm:text-2xl">
              MITS – <span className="text-amber-400">Cisco Networking Academy</span>
            </h2>
            <p className="text-white/75 text-sm sm:text-base mt-2 leading-relaxed max-w-4xl">
              {selfPacedCoursesData.subtitle}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 bg-amber-500 text-slate-950 font-bold text-sm px-5 py-2 rounded-full">
              <Calendar className="w-4 h-4" />
              {selfPacedCoursesData.deadline}
            </div>
          </div>

          {/* Search & Domain Filter */}
          <div className="bg-white border-x border-slate-200 px-6 sm:px-10 py-5 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative w-full md:max-w-sm">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses by name or keyword..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 focus:bg-white transition-all"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {domains.map((dom) => (
                <button
                  key={dom}
                  onClick={() => setSelectedDomain(dom)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all border ${
                    selectedDomain === dom
                      ? "bg-[#0f2a44] text-white border-[#0f2a44] shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:border-[#0f2a44] hover:text-[#0f2a44]"
                  }`}
                >
                  {dom.replace("&amp;", "&")}
                </button>
              ))}
            </div>
          </div>

          {/* Full-Width Table */}
          <div className="bg-white border border-slate-200 rounded-b-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-700 text-white text-left">
                    <th className="px-5 py-4 font-semibold text-sm text-center w-16 whitespace-nowrap">S.No</th>
                    <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap">Domain</th>
                    <th className="px-5 py-4 font-semibold text-sm">Name of the Course</th>
                    <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap">Duration</th>
                    <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap">Level</th>
                    <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap">Learning Type</th>
                    <th className="px-5 py-4 font-semibold text-sm">Achievements Badge and Certifications</th>
                    <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap text-center">Self Enrollment Link</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCourses.map((c: SelfPacedCourse, idx: number) => (
                    <tr
                      key={c.sno}
                      className={`border-b border-slate-100 hover:bg-amber-50/60 transition-colors ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                      }`}
                    >
                      <td className="px-5 py-5 text-sm font-semibold text-slate-500 text-center align-top">
                        {c.sno}
                      </td>
                      <td className="px-5 py-5 align-top">
                        <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-[#0f2a44]/10 text-[#0f2a44] border border-[#0f2a44]/20 whitespace-nowrap">
                          {c.domain.replace("&amp;", "&")}
                        </span>
                      </td>
                      <td className="px-5 py-5 align-top min-w-[200px]">
                        <span className="font-bold text-[#0f2a44] text-sm sm:text-base leading-snug">
                          {c.courseName}
                        </span>
                      </td>
                      <td className="px-5 py-5 text-sm text-slate-700 font-medium whitespace-nowrap align-top">
                        {c.duration}
                      </td>
                      <td className="px-5 py-5 align-top whitespace-nowrap">
                        <span className="text-sm font-bold text-blue-700">{c.level}</span>
                      </td>
                      <td className="px-5 py-5 text-sm text-slate-600 whitespace-nowrap align-top">
                        Self-paced
                      </td>
                      <td className="px-5 py-5 text-sm text-slate-600 leading-relaxed align-top min-w-[280px]">
                        {c.achievements}
                      </td>
                      <td className="px-5 py-5 align-top text-center">
                        {c.enrollLink ? (
                          <a
                            href={c.enrollLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-[#b30000] hover:bg-[#950000] text-white text-sm font-bold py-2.5 px-5 rounded-lg transition-colors whitespace-nowrap shadow-sm"
                          >
                            Enroll Now <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="text-sm text-slate-400 italic">Via NetAcad</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  {filteredCourses.length === 0 && (
                    <tr>
                      <td colSpan={8} className="px-6 py-20 text-center text-slate-500 text-base">
                        No courses found. Try adjusting your search or domain filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-10 py-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm text-slate-500">
                Showing{" "}
                <strong className="text-slate-800">{filteredCourses.length}</strong> of{" "}
                <strong className="text-slate-800">{selfPacedCoursesData.courses.length}</strong>{" "}
                courses
                {selectedDomain !== "All" && ` in "${selectedDomain.replace("&amp;", "&")}"`}
              </p>
              <a
                href={selfPacedCoursesData.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0f2a44] hover:bg-[#1a3f63] text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4" /> Download Full Course List PDF
              </a>
            </div>

            {/* Note */}
            <div className="px-6 sm:px-10 pb-8">
              <p className="text-sm text-slate-500 leading-relaxed pt-4 border-t border-slate-100">
                <strong>Note:</strong> {selfPacedCoursesData.note}
              </p>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link
              to="/cisco-networking-academy"
              className="inline-flex items-center gap-2 text-[#0f2a44] font-semibold text-sm hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Cisco Networking Academy
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CiscoSelfPacedCourses;

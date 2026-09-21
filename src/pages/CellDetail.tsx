import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft, FileText, Download, Phone, Mail, MapPin,
  Users, BookOpen, ChevronRight, ExternalLink, Calendar, ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { cellsDetailData } from "@/data/cellsDetailData";
import { cellCategories } from "@/data/cellsData";
import IeiView from "@/components/cells/IeiView";

type TabId = "home" | "vidya-laxmi" | "scholarships" | "documents" | "events" | "gallery" | "financial-aid" | "contact";

const CELL_TABS: Record<string, { id: TabId; label: string }[]> = {
  swc: [
    { id: "home", label: "Home" },
    { id: "vidya-laxmi", label: "Vidya Laxmi Portal" },
    { id: "scholarships", label: "Scholarships" },
    { id: "documents", label: "Forms & Documents" },
    { id: "events", label: "Events" },
    { id: "gallery", label: "Gallery" },
    { id: "financial-aid", label: "Financial Aid" },
    { id: "contact", label: "Contact Us" },
  ],
};

const DEFAULT_TABS: { id: TabId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "documents", label: "Documents" },
  { id: "events", label: "Events" },
  { id: "contact", label: "Contact Us" },
];

const BASE = import.meta.env.BASE_URL;

// Helper to make URLs and emails clickable in about text
function renderTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+|[\w.-]+@[\w.-]+\.[a-zA-Z]{2,})/g;
  const parts = text.split(urlRegex);
  return parts.map((part, index) => {
    if (part.startsWith("http://") || part.startsWith("https://")) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b31317] hover:text-[#8b0000] underline font-medium break-all"
        >
          {part}
        </a>
      );
    }
    if (part.includes("@") && !part.includes(" ")) {
      return (
        <a
          key={index}
          href={`mailto:${part}`}
          className="text-[#b31317] hover:text-[#8b0000] underline font-medium"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export default function CellDetail({ overrideId }: { overrideId?: string } = {}) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const targetId = overrideId || id;
  const cell = targetId ? cellsDetailData[targetId] : null;
  const tabs = CELL_TABS[cell?.id ?? ""] ?? DEFAULT_TABS;
  const [activeTab, setActiveTab] = useState<TabId>("home");

  if (targetId === "iei") {
    return <IeiView />;
  }

  if (!cell) {
    return (
      <div className="min-h-screen bg-[#fafaf7]">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <h2 className="text-2xl font-bold text-[#0f2a44]">Cell not found</h2>
          <Link to="/cells" className="text-[#b31317] hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to Cells
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const categoryTitle =
    cellCategories.find((cat) => cat.cells.some((c) => c.detailId === id))?.title ??
    "Cells & Committees";

  const brochureDoc = cell.id !== "grc" ? cell.documents.find((d) => d.title === "Download Brochure") : null;
  const otherDocs   = cell.documents.filter((d) => d.title !== "Download Brochure");
  const isStatsTable = cell.id === "swc" && cell.members.length > 0 && cell.members[0].sno === "Year";

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />

      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-sm sm:text-sm mb-4">
            {categoryTitle}
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto">
            {cell.name}
          </h1>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-sm text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells & Committees</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold truncate max-w-[200px]">{cell.name}</li>
          </ol>
        </nav>
      </section>

      {/* TAB BAR */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="flex items-center gap-0 overflow-x-auto">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-[#b31317] border-b-2 border-[#b31317]"
                    : "text-[#0f2a44]/70 hover:text-[#0f2a44]"
                }`}
              >
                {i > 0 && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 text-base select-none">|</span>
                )}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 md:py-16 max-w-6xl">
        <button
          onClick={() => navigate("/cells")}
          className="mb-8 flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells & Committees
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {activeTab === "contact" ? (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                  <h2 className="font-display text-2xl font-bold text-[#0f2a44] mb-6">Contact</h2>
                  <div className="space-y-6">
                    {cell.contacts.map((c, i) => (
                      <div key={i} className="space-y-1.5">
                        {c.name && <p className="font-semibold text-[#0f2a44]">{c.name}</p>}
                        {c.designation && <p className="text-sm text-[#b31317] font-medium">{c.designation}</p>}
                        {c.address && (
                          <p className="text-sm text-[#0f2a44]/60 flex items-start gap-1.5">
                            <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />{c.address}
                          </p>
                        )}
                        {c.phone && c.phone.trim() && (
                          <p className="text-sm text-[#0f2a44]/70 flex items-start gap-1.5 whitespace-pre-line">
                            <Phone className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                            {c.phone.replace("Phone :", "").trim()}
                          </p>
                        )}
                        {c.email && c.email.trim() && (
                          <p className="text-sm text-[#0f2a44]/70 flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 shrink-0" />{c.email}
                          </p>
                        )}
                        {i < cell.contacts.length - 1 && <hr className="border-gray-100 mt-3" />}
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            ) : activeTab === "vidya-laxmi" ? (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                  <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-4 flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 text-[#b31317]" />
                    Vidya Laxmi Portal
                  </h2>
                  <p className="text-[#0f2a44]/70 text-sm mb-5 leading-relaxed">
                    Vidya Lakshmi is a first of its kind portal for students seeking Education Loan. Students can view, apply and track education loan applications to Banks anytime, anywhere by accessing this portal.
                  </p>
                  <a
                    href="https://pmvidyalaxmi.co.in/StudentLogin.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0f2a44] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#b31317] transition-colors"
                  >
                    Visit Vidya Laxmi Portal <ExternalLink className="w-4 h-4" />
                  </a>
                </section>
              </ScrollReveal>
            ) : activeTab === "scholarships" ? (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                  <div className="mb-5">
                    <span className="inline-block bg-[#b31317] text-white text-sm font-semibold px-4 py-2 rounded">
                      Scholarships Beneficiaries Data
                    </span>
                  </div>
                  <hr className="border-gray-200 mb-5" />
                  <p className="text-[#b31317] text-sm mb-6 leading-relaxed">
                    The Student Affairs Cell at MITS plays a key role in supporting students by identifying, exploring, and applying for various scholarship schemes offered by government bodies as well as private and NGO sources.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-gray-200">
                      <thead>
                        <tr className="bg-[#b31317] text-white">
                          <th className="py-3 px-4 text-left font-semibold">Year</th>
                          <th className="py-3 px-4 text-left font-semibold">No.of Scholarships</th>
                          <th className="py-3 px-4 text-left font-semibold">No.of Student Beneficiaries</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["2025-26", "16 (Progressive)", "405 (Progressive)"],
                          ["2024-25", "9", "351"],
                          ["2023-24", "10", "269"],
                          ["2022-23", "13", "374"],
                          ["2021-22", "12", "224"],
                          ["2020-21", "12", "361"],
                          ["2019-20", "20", "364"],
                          ["2018-19", "18", "637"],
                          ["2017-18", "14", "569"],
                          ["2016-17", "12", "408"],
                          ["2015-16", "11", "383"],
                          ["2014-15", "10", "336"],
                          ["2013-14", "6", "64"],
                        ].map(([year, scholarships, beneficiaries], i) => (
                          <tr key={i} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="py-3 px-4 text-[#0f2a44]/70">{year}</td>
                            <td className="py-3 px-4 text-[#1a56a0]">{scholarships}</td>
                            <td className="py-3 px-4 text-[#0f2a44]/70">{beneficiaries}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </ScrollReveal>
            ) : activeTab === "gallery" ? (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                  <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-5">Gallery</h2>
                  {cell.gallery && cell.gallery.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {cell.gallery.map((src, i) => (
                        <a
                          key={i}
                          href={src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block overflow-hidden rounded-lg border border-gray-100 hover:border-[#caa74d] transition-all group aspect-square"
                        >
                          <img
                            src={src}
                            alt={`Gallery image ${i + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[#0f2a44]/50 text-sm">Gallery content coming soon.</p>
                  )}
                </section>
              </ScrollReveal>
            ) : activeTab === "financial-aid" ? (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                  <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-5">Financial Aid</h2>
                  <iframe
                    src="https://mits.ac.in/assets/pdf/swc/Financial-AID.pdf#toolbar=1&navpanes=0&scrollbar=1&zoom=page-width"
                    width="100%"
                    height="900"
                    className="border border-gray-200 rounded-lg w-full block"
                    title="Financial Aid"
                  />
                </section>
              </ScrollReveal>
            ) : activeTab === "documents" ? (
              otherDocs.length > 0 ? (
                <ScrollReveal>
                  <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                    <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-5 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#b31317]" />
                      Documents & Downloads
                    </h2>
                    {cell.id === "swc" && (
                      <div className="mb-5 p-4 bg-[#fff8e6] border border-[#caa74d]/40 rounded-lg text-sm text-[#0f2a44]/80 leading-relaxed">
                        <span className="font-semibold text-[#b31317]">Note: </span>
                        After Applying, Please Check Your Mail to Collect Your Document at SWC.
                      </div>
                    )}
                    <ul className="divide-y divide-gray-100">
                      {otherDocs.map((doc, i) => {
                        const genericTitles = ["document link", "view document", "for report on event click here", "click here for event details", "for report on event click here", "click here for report on event", "report on event click here", "click here for details on event", "click here for details", "click here report on event", "click here for report", "for event winners click here", "event winners click here", "click here for event details"];
                        const isGeneric = genericTitles.includes(doc.title.toLowerCase().trim());
                        const displayTitle = isGeneric
                          ? decodeURIComponent(doc.href.split("/").pop() ?? doc.title).replace(/\.pdf$/i, "").replace(/[-_]/g, " ").replace(/\s+/g, " ").trim()
                          : doc.title;
                        return (
                          <li key={i}>
                            <a
                              href={doc.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between gap-3 py-3 group hover:bg-[#fff8e6]/40 -mx-2 px-2 rounded-lg transition-colors"
                            >
                              <span className="flex items-center gap-2.5 text-sm text-[#0f2a44] group-hover:text-[#b31317] transition-colors font-medium leading-snug">
                                <FileText className="w-4 h-4 shrink-0 text-[#caa74d]" />
                                {displayTitle}
                              </span>
                              {(() => {
                                const isPdf = doc.href.includes(".pdf") || doc.href.includes(".doc") || doc.href.includes(".xlsx");
                                const ActionIcon = isPdf ? Download : ExternalLink;
                                return <ActionIcon className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-[#b31317] transition-colors" />;
                              })()}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                </ScrollReveal>
              ) : <p className="text-[#0f2a44]/50 text-sm">No documents available.</p>
            ) : activeTab === "events" ? (
              cell.events && cell.events.length > 0 ? (
                <ScrollReveal>
                  <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                    <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-5 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#b31317]" />
                      Events Organized
                    </h2>
                    <ul className="space-y-3">
                      {cell.events.map((ev, i) => (
                        <li key={i}>
                          <a
                            href={ev.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#0f2a44]/10 hover:border-[#caa74d] hover:bg-[#fff8e6]/30 transition-all group"
                          >
                            <div className="flex items-start gap-3 min-w-0">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#b31317] shrink-0 mt-2 shadow-sm group-hover:scale-125 transition-transform" />
                              <span className="text-sm font-medium text-[#0f2a44] group-hover:text-[#b31317] transition-colors leading-relaxed">
                                {ev.title}
                              </span>
                            </div>
                            <ExternalLink className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-[#b31317] transition-colors mt-0.5" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </section>
                </ScrollReveal>
              ) : <p className="text-[#0f2a44]/50 text-sm">No events available.</p>
            ) : cell.sections && cell.sections.length > 0 ? (
              <div className="space-y-8">
                {cell.sections.map((sec, sIdx) => (
                  <ScrollReveal key={sIdx}>
                    <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                      <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-[#b31317]" />
                        {sec.title}
                      </h2>
                      <div className="space-y-3">
                        {sec.paragraphs.map((para, pIdx) => (
                          <p key={pIdx} className="text-[#0f2a44]/80 text-sm md:text-base leading-relaxed">
                            {renderTextWithLinks(para)}
                          </p>
                        ))}
                      </div>
                    </section>
                  </ScrollReveal>
                ))}
              </div>
            ) : cell.aboutText.length > 0 ? (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                  <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-5 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#b31317]" />
                    About {cell.name}
                  </h2>
                  <div className="space-y-3">
                    {cell.aboutText.map((para, i) => (
                      <p key={i} className="text-[#0f2a44]/80 text-sm md:text-base leading-relaxed">
                        {renderTextWithLinks(para)}
                      </p>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            ) : null}

            {activeTab === "home" && cell.id === "grc" && (
              <ScrollReveal>
                <section className="bg-gradient-to-br from-[#fffdfa] to-[#fff8e6]/50 rounded-2xl border border-[#caa74d]/30 shadow-sm p-6 md:p-8">
                  <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#b31317]" />
                    All the students and staff
                  </h3>
                  <ul className="space-y-2.5 text-sm text-[#0f2a44]/85">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#b31317] font-bold mt-0.5">•</span>
                      <span>can utilize the suggestion box to drop their complaints.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#b31317] font-bold mt-0.5">•</span>
                      <span>can complain to the GRC Coordinator directly.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#b31317] font-bold mt-0.5">•</span>
                      <span>can complain to their respective HoDs.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#b31317] font-bold mt-0.5">•</span>
                      <span>can complain directly to the Principal.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#b31317] font-bold mt-0.5">•</span>
                      <span>
                        can complain through mails to{" "}
                        <a href="mailto:grc@mits.ac.in" className="text-[#b31317] font-semibold underline hover:text-[#8b0000]">
                          grc@mits.ac.in
                        </a>
                      </span>
                    </li>
                  </ul>
                </section>
              </ScrollReveal>
            )}

            {activeTab === "home" && cell.id !== "swc" && cell.members.length > 0 && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                  <div className="px-6 md:px-8 py-5 border-b border-[#0f2a44]/5 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#b31317]" />
                    <h2 className="font-display text-xl font-bold text-[#0f2a44]">
                      {isStatsTable ? "Scholarship Statistics" : "Committee Members"}
                    </h2>
                  </div>
                  <div className="overflow-x-auto">
                    {isStatsTable ? (
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-[#0f2a44] text-white text-sm uppercase tracking-wider">
                            <th className="py-3 px-5 text-left">Year</th>
                            <th className="py-3 px-5 text-left">No. of Scholarships</th>
                            <th className="py-3 px-5 text-left">No. of Student Beneficiaries</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {cell.members.slice(1).map((row, i) => (
                            <tr key={i} className="hover:bg-[#fff8e6]/30 transition-colors">
                              <td className="py-3 px-5 font-semibold text-[#0f2a44]">{row.sno}</td>
                              <td className="py-3 px-5 text-[#0f2a44]/80">{row.name}</td>
                              <td className="py-3 px-5 text-[#0f2a44]/80">{row.designation}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-[#0f2a44] text-white text-sm uppercase tracking-wider">
                            <th className="py-3 px-4 text-center w-12">S.No</th>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left hidden sm:table-cell">Designation</th>
                            <th className="py-3 px-4 text-left">Position</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {cell.members.map((m, i) => (
                            <tr key={i} className="hover:bg-[#fff8e6]/30 transition-colors">
                              <td className="py-3 px-4 text-center text-[#0f2a44]/50 font-medium">{m.sno ?? i + 1}</td>
                              <td className="py-3 px-4 font-semibold text-[#0f2a44]">{m.name}</td>
                              <td className="py-3 px-4 text-[#0f2a44]/70 hidden sm:table-cell">{m.designation}</td>
                              <td className="py-3 px-4">
                                <span className="text-sm bg-[#fff8e6] border border-[#ffd15c]/30 text-[#b31317] px-2.5 py-0.5 rounded-full font-semibold inline-block">
                                  {m.position}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </section>
              </ScrollReveal>
            )}


          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            {cell.contacts.length > 0 && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6">
                  <h2 className="font-display text-lg font-bold text-[#0f2a44] mb-4 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#b31317]" />
                    Contact
                  </h2>
                  <div className="space-y-5">
                    {cell.contacts.map((c, i) => (
                      <div key={i} className="space-y-1.5">
                        {c.name && <p className="font-semibold text-[#0f2a44] text-sm">{c.name}</p>}
                        {c.designation && <p className="text-sm text-[#b31317] font-medium">{c.designation}</p>}
                        {c.address && (
                          <p className="text-sm text-[#0f2a44]/60 flex items-start gap-1.5">
                            <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />{c.address}
                          </p>
                        )}
                        {c.phone && c.phone.trim() && (
                          <p className="text-sm text-[#0f2a44]/70 flex items-start gap-1.5 whitespace-pre-line">
                            <Phone className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                            {c.phone.replace("Phone :", "").trim()}
                          </p>
                        )}
                        {c.email && c.email.trim() && (
                          <p className="text-sm text-[#0f2a44]/70 flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 shrink-0" />{c.email}
                          </p>
                        )}
                        {i < cell.contacts.length - 1 && <hr className="border-gray-100 mt-3" />}
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            )}

            {brochureDoc && (
              <ScrollReveal>
                <a
                  href={brochureDoc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 bg-gradient-to-br from-[#0f2a44] to-[#11355a] text-white rounded-2xl p-5 hover:shadow-lg transition-all group"
                >
                  <div>
                    <p className="text-sm text-[#caa74d] font-semibold uppercase tracking-wider mb-1">Official</p>
                    <p className="font-display font-bold text-base">Download Brochure</p>
                    <p className="text-white/60 text-sm mt-0.5">MITS Deemed to be University 2026</p>
                  </div>
                  <Download className="w-6 h-6 text-[#caa74d] group-hover:scale-110 transition-transform shrink-0" />
                </a>
              </ScrollReveal>
            )}

            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-5">
                <h3 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-3">
                  Compliance Portals
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "IQAC", to: "/iqac" },
                    { label: "NAAC", to: "/naac" },
                    { label: "NIRF Rankings", to: "/nirf" },
                    { label: "Public Disclosures", to: "/psd" },
                  ].map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="flex items-center justify-between text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-1.5 border-b border-gray-50 last:border-0 group"
                    >
                      {p.label}
                      <ChevronRight className="w-3.5 h-3.5 text-[#caa74d] group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <a
                href={cell.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 text-sm text-[#0f2a44]/50 hover:text-[#b31317] transition-colors px-1"
              >
                <span>View original source page</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

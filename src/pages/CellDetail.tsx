import { useParams, Link, useNavigate } from "react-router-dom";
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

  if (targetId === "iei") {
    return <IeiView />;
  }

  const cell = targetId ? cellsDetailData[targetId] : null;

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

            {cell.sections && cell.sections.length > 0 ? (
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

            {cell.id === "grc" && (
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

            {cell.members.length > 0 && (
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

            {otherDocs.length > 0 && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                  <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-5 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#b31317]" />
                    Documents & Downloads
                  </h2>
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
            )}

            {cell.events && cell.events.length > 0 && (
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

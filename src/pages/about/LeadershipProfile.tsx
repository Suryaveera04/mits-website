import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Quote, Award, FileText, ArrowLeft, GraduationCap, Sparkles, BookOpen, Briefcase, Award as Medal, Mail } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { leadershipProfiles } from "@/data/aboutData";
import { Button } from "@/components/ui/button";

const LeadershipProfilePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const profile = slug ? leadershipProfiles[slug] : undefined;

  if (!profile) {
    return <Navigate to="/about/leadership" replace />;
  }

  return (
    <PageShell
      eyebrow="Leadership"
      title={profile.name}
      intro={profile.designation + (profile.qualification ? ` • ${profile.qualification}` : "")}
    >
      <Link
        to="/about/leadership"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Leadership
      </Link>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Portrait Sidebar Card */}
        <motion.aside
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4"
        >
          <div className="sticky top-28 bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-[3/4] bg-secondary/5 relative">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://mits.ac.in/images/inner-banner.jpg";
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white p-5">
                {profile.tagline && (
                  <p className="text-xs uppercase tracking-[0.18em] text-amber-300 font-bold mb-1">
                    "{profile.tagline}"
                  </p>
                )}
                <p className="font-display text-xl font-bold text-white leading-tight">
                  {profile.name}
                </p>
                <p className="text-sm text-white/90 mt-1 font-medium">{profile.designation}</p>
              </div>
            </div>
            {profile.qualification && (
              <div className="px-5 py-3 bg-slate-50 border-t border-border text-xs font-semibold text-secondary/80">
                {profile.qualification}
              </div>
            )}
            {profile.email && (
              <div className="px-5 py-3 bg-white border-t border-border flex items-center gap-2 text-xs font-medium text-secondary/80">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${profile.email}`} className="text-primary hover:underline font-semibold break-all">
                  {profile.email}
                </a>
              </div>
            )}
          </div>
        </motion.aside>

        {/* Main Content Body */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-8 space-y-8"
        >
          {/* Motto Tagline Banner */}
          {profile.tagline && (
            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-xl text-amber-900 font-semibold italic text-base sm:text-lg">
              "{profile.tagline}"
            </div>
          )}

          {/* Message Box (e.g. Chancellor's Message) */}
          {profile.message && (
            <div className="relative bg-gradient-to-br from-primary/5 via-white to-amber-500/5 border-l-4 border-primary p-6 md:p-8 rounded-r-2xl shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold text-lg font-display">
                <Quote className="w-5 h-5" />
                <h3>{profile.designation.includes("Chancellor") ? "Chancellor's Message:" : "Leadership Message:"}</h3>
              </div>
              <p className="text-base md:text-lg italic text-secondary/90 leading-relaxed pt-1">
                "{profile.message}"
              </p>
              <p className="text-sm font-bold text-primary text-right pt-2">— {profile.name}</p>
            </div>
          )}

          {/* Brief Profile Bio */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-4 font-display pb-2 border-b border-border">
              Brief Profile
            </h2>
            <div className="space-y-4 text-secondary/85 text-base leading-[1.8] text-justify">
              {profile.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Recognized Highlights / Awards */}
          {profile.highlights && profile.highlights.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4 font-display pb-2 border-b border-border">
                Recognitions & Highlights
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {profile.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-4 bg-white border border-border rounded-xl hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-secondary/85 font-medium">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Detailed Sections (Educational Qualifications, Publications, Patents, Research Projects) */}
          {profile.sections && profile.sections.length > 0 && (
            <div className="space-y-8 pt-4">
              {profile.sections.map((section, idx) => (
                <div key={idx} className="bg-white border border-border rounded-2xl p-6 shadow-xs space-y-4">
                  <h3 className="text-xl font-bold text-secondary font-display flex items-center gap-2 border-b border-border pb-3">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span>{section.title}</span>
                  </h3>

                  {Array.isArray(section.content) && section.content.length > 0 && typeof section.content[0] === "object" ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm border-collapse">
                        <thead>
                          <tr className="bg-primary text-white">
                            {Object.keys(section.content[0]).map((key) => (
                              <th key={key} className="p-3 border border-white/20 font-semibold capitalize">
                                {key}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {section.content.map((row: any, rIdx: number) => (
                            <tr key={rIdx} className="hover:bg-slate-50">
                              {Object.values(row).map((val: any, cIdx: number) => (
                                <td key={cIdx} className="p-3 border border-border text-secondary/85 text-xs sm:text-sm">
                                  {val}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <ul className="space-y-2 text-sm text-secondary/85">
                      {Array.isArray(section.content) &&
                        section.content.map((item: any, iIdx: number) => (
                          <li key={iIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            <span>{typeof item === "string" ? item : JSON.stringify(item)}</span>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Official Orders / Documents (removed "Documents & Publications" heading as requested) */}
          {profile.documents && profile.documents.length > 0 && (
            <div className="pt-2">
              {profile.documentTitle && (
                <h2 className="text-2xl font-bold text-secondary mb-4 font-display pb-2 border-b border-border">
                  {profile.documentTitle}
                </h2>
              )}
              <div className="flex flex-wrap gap-3">
                {profile.documents.map((d) => (
                  <Button key={d.url} asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <a href={d.url} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 mr-2" /> {d.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </motion.section>
      </div>
    </PageShell>
  );
};

export default LeadershipProfilePage;

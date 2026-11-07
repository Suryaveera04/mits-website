import { motion } from "framer-motion";
import { Calendar, Handshake, ExternalLink, Globe, MapPin, Tag, Loader2, Award, BookOpen, FileText, FolderOpen, Trophy } from "lucide-react";
import { useDeptCMSData } from "@/hooks/useDeptCMSData";
import { useState } from "react";
import EventDetailModal from "@/components/EventDetailModal";
import MouDetailModal from "@/components/MouDetailModal";
import AchievementDetailModal from "@/components/AchievementDetailModal";
import PatentDetailModal from "@/components/PatentDetailModal";
import PublicationDetailModal from "@/components/PublicationDetailModal";
import PlacementDetailModal from "@/components/PlacementDetailModal";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import type { CMSMoU, CMSAchievement, CMSPatent, CMSPublication, CMSPlacement, CMSProject } from "@/hooks/useDeptCMSData";

interface Props { deptKey: string; }

const typeColors: Record<string, string> = {
  Conference: "bg-blue-100 text-blue-700",
  Workshop:   "bg-emerald-100 text-emerald-700",
  Seminar:    "bg-violet-100 text-violet-700",
  FDP:        "bg-orange-100 text-orange-700",
  Hackathon:  "bg-pink-100 text-pink-700",
};

const SectionTitle = ({ icon: Icon, title, count, color }: { icon: React.ElementType; title: string; count: number; color: string }) => (
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-2.5">
      <div className="p-2 rounded-lg" style={{ background: `${color}18` }}>
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <h3 className="font-bold text-base text-slate-800" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
    </div>
    <span className="text-sm bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-full font-medium">{count} items</span>
  </div>
);

const DeptCMSStrip = ({ deptKey }: Props) => {
  const { data, loading } = useDeptCMSData(deptKey);
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [selectedMou, setSelectedMou] = useState<CMSMoU | null>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<CMSAchievement | null>(null);
  const [selectedPatent, setSelectedPatent] = useState<CMSPatent | null>(null);
  const [selectedPublication, setSelectedPublication] = useState<CMSPublication | null>(null);
  const [selectedPlacement, setSelectedPlacement] = useState<CMSPlacement | null>(null);
  const [selectedProject, setSelectedProject] = useState<CMSProject | null>(null);

  const hasContent = data.events.length > 0 || data.mous.length > 0 ||
    data.achievements.length > 0 || data.patents.length > 0 ||
    data.publications.length > 0 || data.placements.length > 0 || data.projects.length > 0 ||
    (data.subjects && data.subjects.length > 0);

  if (loading) {
    return (
      <div className="mt-10 pt-8 border-t border-slate-200 flex items-center justify-center gap-2 text-sm text-muted-foreground py-8">
        <Loader2 className="w-4 h-4 animate-spin" />Loading department updates…
      </div>
    );
  }

  if (!hasContent) return null;

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-10 pt-8 border-t border-slate-200"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
            Department Updates
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">Live content from MITS CMS</p>
        </div>
        <a href="https://mits-cms.freedev.app/backend" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-primary font-medium hover:underline">
          <ExternalLink className="w-3.5 h-3.5" />CMS Portal
        </a>
      </div>

      <div className="space-y-8">
        {data.events.length > 0 && (
          <div>
            <SectionTitle icon={Calendar} title="Events & Programmes" count={data.events.length} color="#b30000" />
            <div className="grid sm:grid-cols-2 gap-3">
              {data.events.map(ev => (
                <motion.div key={ev.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  onClick={() => setSelectedEventId(ev.id)}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col gap-2 cursor-pointer">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-sm text-slate-800 leading-snug flex-1">{ev.title}</h4>
                    {ev.type && (
                      <span className={`text-sm px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${typeColors[ev.type] ?? "bg-slate-100 text-slate-600"}`}>
                        {ev.type}
                      </span>
                    )}
                  </div>
                  {ev.description && <p className="text-sm text-slate-500 leading-relaxed">{ev.description}</p>}
                  <div className="flex flex-wrap items-center gap-3 mt-auto pt-1">
                    <span className="flex items-center gap-1 text-sm text-primary font-medium">
                      <Calendar className="w-3 h-3" />{ev.from_date || ev.date}
                    </span>
                    {ev.venue && <span className="flex items-center gap-1 text-sm text-slate-400"><MapPin className="w-3 h-3" />{ev.venue}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {data.achievements.length > 0 && (
          <div>
            <SectionTitle icon={Award} title="Achievements" count={data.achievements.length} color="#0ea5e9" />
            <div className="grid sm:grid-cols-2 gap-3">
              {data.achievements.map(a => (
                <motion.div key={a.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  onClick={() => setSelectedAchievement(a)}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-sm text-slate-800 flex-1">{a.title}</h4>
                    <span className={`text-sm px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${a.type === "faculty" ? "bg-purple-100 text-purple-700" : "bg-amber-100 text-amber-700"}`}>
                      {a.type}
                    </span>
                  </div>
                  {a.name && <p className="text-sm text-primary font-medium mt-1">{a.name}</p>}
                  {a.description && <p className="text-sm text-slate-500 mt-1">{a.description}</p>}
                  {a.external_link && (
                    <a href={a.external_link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1">
                      <ExternalLink className="w-3 h-3" />View
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {data.mous.length > 0 && (
          <div>
            <SectionTitle icon={Handshake} title="MoUs & Collaborations" count={data.mous.length} color="#0ea5e9" />
            <div className="grid sm:grid-cols-2 gap-3">
              {data.mous.map(m => (
                <motion.div key={m.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  onClick={() => setSelectedMou(m)}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                      <Handshake className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-slate-800 group-hover:text-primary transition-colors">{m.organization}</h4>
                      {m.title && <p className="text-sm text-primary font-medium mt-0.5">{m.title}</p>}
                      {m.purpose && <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{m.purpose}</p>}
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        {m.year && <span className="flex items-center gap-1 text-sm bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full"><Tag className="w-3 h-3" />{m.year}</span>}
                        {m.country && <span className="flex items-center gap-1 text-sm text-slate-400"><Globe className="w-3 h-3" />{m.country}</span>}
                        {m.status && <span className={`text-sm px-2 py-0.5 rounded-full font-medium ${m.status === "Active" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"}`}>{m.status}</span>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {data.patents.length > 0 && (
          <div>
            <SectionTitle icon={FileText} title="Patents" count={data.patents.length} color="#7c3aed" />
            <div className="grid sm:grid-cols-2 gap-3">
              {data.patents.map(p => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  onClick={() => setSelectedPatent(p)}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-sm text-slate-800 flex-1">{p.title}</h4>
                    <span className={`text-sm px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${p.status === "Granted" ? "bg-green-100 text-green-700" : p.status === "Published" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"}`}>
                      {p.status}
                    </span>
                  </div>
                  {p.inventors && <p className="text-sm text-slate-500 mt-1">Inventors: {p.inventors}</p>}
                  {p.year && <p className="text-sm text-muted-foreground">Year: {p.year}</p>}
                  {p.external_link && (
                    <a href={p.external_link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1">
                      <ExternalLink className="w-3 h-3" />View
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {data.publications.length > 0 && (
          <div>
            <SectionTitle icon={BookOpen} title="Publications" count={data.publications.length} color="#0f2a44" />
            <div className="space-y-2">
              {data.publications.map(p => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  onClick={() => setSelectedPublication(p)}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-slate-800 flex-1">{p.title}</p>
                    <span className="text-sm px-2 py-0.5 rounded-full font-medium bg-slate-100 text-slate-600 whitespace-nowrap">{p.type}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    {p.authors && <span className="text-sm text-slate-500">{p.authors}</span>}
                    <span className="text-sm bg-muted px-2 py-0.5 rounded-full">{p.year}</span>
                    {p.venue && <span className="text-sm text-slate-400 italic">{p.venue}</span>}
                    {p.doi && <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline"><ExternalLink className="w-3 h-3" />DOI</a>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {data.placements.length > 0 && (
          <div>
            <SectionTitle icon={Trophy} title="Placements & Internships" count={data.placements.length} color="#16a34a" />
            <div className="grid sm:grid-cols-2 gap-3">
              {data.placements.map(p => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  onClick={() => setSelectedPlacement(p)}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      {p.subtype === "Training" ? (
                        <>
                          <p className="font-semibold text-sm text-slate-800">{p.programTitle}</p>
                          <p className="text-sm text-slate-500 mt-0.5">By: {p.conductedBy}</p>
                          {p.numberOfStudents ? <p className="text-sm text-slate-500">{p.numberOfStudents} students</p> : null}
                        </>
                      ) : (
                        <>
                          <p className="font-semibold text-sm text-slate-800">{p.studentName}</p>
                          <p className="text-sm text-primary font-medium">{p.companyName}</p>
                          {p.role && <p className="text-sm text-slate-500">{p.role}</p>}
                          {p.package && <p className="text-sm font-semibold text-green-700">{p.package}</p>}
                        </>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <span className={`text-sm px-2 py-0.5 rounded-full font-medium ${p.subtype === "Placement" ? "bg-green-100 text-green-700" : p.subtype === "Internship" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>
                        {p.subtype}
                      </span>
                      {p.year && <p className="text-sm text-slate-400 mt-1">{p.year}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {data.projects.length > 0 && (
          <div>
            <SectionTitle icon={FolderOpen} title="Student Projects" count={data.projects.length} color="#ea580c" />
            <div className="grid sm:grid-cols-2 gap-3">
              {data.projects.map(p => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  onClick={() => setSelectedProject(p)}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                  <h4 className="font-semibold text-sm text-slate-800">{p.title}</h4>
                  {p.students && <p className="text-sm text-slate-500 mt-0.5">{p.students}</p>}
                  {p.guide && <p className="text-sm text-primary font-medium mt-0.5">Guide: {p.guide}</p>}
                  {p.stack && <p className="text-sm text-slate-400 mt-0.5">Stack: {p.stack}</p>}
                  {p.description && <p className="text-sm text-slate-500 mt-1">{p.description}</p>}
                  <div className="flex gap-2 mt-2">
                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">GitHub</a>}
                    {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Demo</a>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {data.subjects && data.subjects.length > 0 && (
          <div>
            <SectionTitle icon={Layers} title="Curriculum & Subjects" count={data.subjects.length} color="#7c3aed" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {data.subjects.slice(0, 6).map(s => (
                <motion.div key={s.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                      {s.code && <span className="font-mono text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">{s.code}</span>}
                      {s.regulation && <span className="text-[11px] font-semibold bg-amber-500/10 text-amber-700 border border-amber-500/20 px-1.5 py-0.5 rounded">{s.regulation}</span>}
                      {s.semester && <span className="text-[11px] font-medium bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">{s.semester}</span>}
                    </div>
                    <h4 className="font-semibold text-sm text-slate-800 leading-snug">{s.name || s.title}</h4>
                    {s.faculty && <p className="text-xs text-slate-500 mt-1.5">Faculty: <span className="font-medium text-slate-700">{s.faculty}</span></p>}
                    {s.credits !== undefined && s.credits !== "" && <p className="text-xs text-primary font-medium mt-0.5">Credits: {String(s.credits)}</p>}
                  </div>
                  {s.resources && (
                    <a href={s.resources} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-semibold hover:underline flex items-center gap-1 mt-2.5 pt-2 border-t border-slate-100">
                      <ExternalLink className="w-3 h-3" />Syllabus / Resources
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>

    {selectedEventId !== null && (
      <EventDetailModal eventId={selectedEventId} onClose={() => setSelectedEventId(null)} />
    )}
    {selectedMou && (
      <MouDetailModal mou={selectedMou} onClose={() => setSelectedMou(null)} />
    )}
    {selectedAchievement && (
      <AchievementDetailModal achievement={selectedAchievement} onClose={() => setSelectedAchievement(null)} />
    )}
    {selectedPatent && (
      <PatentDetailModal patent={selectedPatent} onClose={() => setSelectedPatent(null)} />
    )}
    {selectedPublication && (
      <PublicationDetailModal publication={selectedPublication} onClose={() => setSelectedPublication(null)} />
    )}
    {selectedPlacement && (
      <PlacementDetailModal placement={selectedPlacement} onClose={() => setSelectedPlacement(null)} />
    )}
    {selectedProject && (
      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    )}
    </>
  );
};

export default DeptCMSStrip;

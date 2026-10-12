import { motion } from "framer-motion";
import { ArrowLeft, Users } from "lucide-react";
import type { FacultyProfile, FacultySection } from "@/data/facultyProfiles";

interface InlineFacultyProfileProps {
  profile: FacultyProfile;
  onBack: () => void;
}

export default function InlineFacultyProfile({ profile, onBack }: InlineFacultyProfileProps) {
  const isTableContent = (content: unknown): boolean => {
    if (!Array.isArray(content)) return false;
    return content.length > 0 && typeof content[0] === 'object' && content[0] !== null;
  };

  const isLinkList = (content: unknown): boolean => {
    if (!Array.isArray(content)) return false;
    if (content.length === 0) return false;
    const first = content[0];
    if (typeof first !== 'object' || first === null) return false;
    const keys = Object.keys(first);
    return keys.includes('Link') && keys.includes('Identifier');
  };

  const getTableColumns = (content: Record<string, string>[]): string[] => {
    if (content.length === 0) return [];
    return Object.keys(content[0]);
  };

  const renderSectionContent = (section: FacultySection) => {
    const content = section.content;

    if (typeof content === 'string') {
      return (
        <div className="px-6">
          <p className="text-sm md:text-base text-slate-600 leading-relaxed whitespace-pre-line">{content}</p>
        </div>
      );
    }

    if (Array.isArray(content)) {
      if (isLinkList(content)) {
        return (
          <div className="space-y-2 px-6">
            {(content as Record<string, string>[]).map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="font-medium text-slate-700">{item.Identifier}:</span>
                {item.Link && item.Link.startsWith('http') ? (
                  <a href={item.Link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {item.Link}
                  </a>
                ) : (
                  <span className="text-slate-600">{item.Link}</span>
                )}
              </div>
            ))}
          </div>
        );
      }

      if (isTableContent(content)) {
        const columns = getTableColumns(content as Record<string, string>[]);
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  {columns.map(col => (
                    <th key={col} className="px-6 py-3 capitalize">{col.replace(/([A-Z])/g, ' $1').trim()}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(content as Record<string, string>[]).map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50">
                    {columns.map(col => (
                      <td key={col} className="px-6 py-4 text-slate-600">{row[col] || '-'}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      return (
        <ul className="space-y-2 px-6">
          {content.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="w-full flex-1 flex flex-col space-y-8 pb-16"
    >
      <div>
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </span>
          Back to Faculty List
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="h-4 bg-gradient-to-r from-primary via-accent to-secondary" />
        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="shrink-0 relative group">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-slate-100 relative">
              {profile.image ? (
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = "none";
                    const fallback = (e.currentTarget.parentElement?.querySelector(".avatar-fallback") as HTMLElement);
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
              ) : null}
              <div className={`avatar-fallback w-full h-full ${profile.image ? "hidden" : "flex"} items-center justify-center bg-gradient-to-br from-primary/10 to-slate-200 text-primary font-bold text-3xl`}>
                {profile.name.split(" ").filter(Boolean).slice(0, 2).map((n) => n[0]).join("")}
              </div>
            </div>
          </div>

          <div className="flex-1 pt-2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-2" style={{ fontFamily: "var(--font-display)" }}>
              {profile.name}
            </h1>
            <p className="text-lg text-primary font-medium">{profile.designation}</p>
            
            {profile.email && (
              <div className="flex items-center gap-2 mt-4 text-sm text-slate-500">
                <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">{profile.email}</a>
              </div>
            )}
          </div>
        </div>
      </div>

      {profile.sections?.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
        >
          <div className="px-6 py-5 border-b border-slate-100">
            <h3 className="text-xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>{section.title}</h3>
          </div>
          <div className="py-6">
            {renderSectionContent(section)}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

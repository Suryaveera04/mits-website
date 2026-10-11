import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { departmentHeads } from "@/data/aboutData";
import { slugifyFaculty, cleanFacultyName } from "@/lib/facultySlug";
import { useFacultyData } from "@/hooks/useFacultyData";
import { getFacultyPhotoUrl } from "@/lib/facultyApi";

const DepartmentHeads = () => {
  const { getDepartmentHod, findFacultyByName } = useFacultyData();

  return (
    <PageShell
      eyebrow="About"
      title="Department Heads"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {departmentHeads.map((h, i) => {
          const dynamicHod = getDepartmentHod(h.deptKey, h.name);
          const apiMatch = findFacultyByName(h.name);
          const name = cleanFacultyName(apiMatch?.fullName || dynamicHod?.name || h.name);
          
          // Photo priority: live API photo > dynamic resolved photo > official fallback photo
          const photo =
            (apiMatch?.profilePhoto ? getFacultyPhotoUrl(apiMatch.profilePhoto) : undefined) ||
            dynamicHod?.image ||
            h.image;

          const profileLink =
            dynamicHod?.profileUrl ||
            (apiMatch ? `/department/${h.deptKey}/faculty/${slugifyFaculty(name)}` : (h.externalProfile || `/department/${h.deptKey}/faculty/${slugifyFaculty(name)}`));
          const designation =
            dynamicHod?.designation ||
            (apiMatch?.designation ? `${apiMatch.designation.replace(/s$/, "")} & Head` : undefined);

          const initials = name
            .replace(/^Dr\.?\s*/i, "")
            .replace(/^Prof\.?\s*/i, "")
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0])
            .join("")
            .toUpperCase();

          return (
            <motion.div
              key={`${h.name}-${h.department}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                to={profileLink}
                className="group flex gap-4 bg-card border border-border rounded-2xl p-5 hover:-translate-y-1 hover:shadow-2xl transition-all"
              >
                <div className="w-24 h-28 shrink-0 rounded-lg overflow-hidden bg-secondary/5 relative flex items-center justify-center">
                  {photo ? (
                    <img
                      src={photo}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = "none";
                        const fallback = e.currentTarget.parentElement?.querySelector(".avatar-fallback") as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className={`avatar-fallback w-full h-full ${
                      photo ? "hidden" : "flex"
                    } items-center justify-center bg-gradient-to-br from-primary/10 via-slate-100 to-slate-200 text-primary font-bold text-lg select-none`}
                  >
                    {initials || "HOD"}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-semibold mb-1 truncate">
                    Head — {h.department}
                  </p>
                  <h3
                    className="text-base font-bold text-[#0f2a44] leading-tight group-hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {name}
                  </h3>
                  {designation && (
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                      {designation}
                    </p>
                  )}
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-primary">
                    View profile <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </PageShell>
  );
};

export default DepartmentHeads;

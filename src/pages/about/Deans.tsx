import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { deansList } from "@/data/aboutData";
import { slugifyFaculty } from "@/lib/facultySlug";
import { useFacultyData } from "@/hooks/useFacultyData";
import { getFacultyPhotoUrl } from "@/lib/facultyApi";

const Deans = () => {
  const { findFacultyByName } = useFacultyData();

  return (
    <PageShell
      eyebrow="About"
      title="Deans of MITS"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {deansList.map((d, i) => {
          const apiMatch = findFacultyByName(d.facultyName || d.name);
          const dynamicPhoto = (apiMatch?.profilePhoto && getFacultyPhotoUrl(apiMatch.profilePhoto)) || d.image;
          const dynamicQualification = apiMatch?.phd?.topic || apiMatch?.phd?.status === "Awarded" ? "Ph.D." : d.qualification;
          const targetDeptKey = d.deptKey || (apiMatch?.department?.code ? apiMatch.department.code.toLowerCase() : "cse");
          const targetName = d.facultyName || d.name;

          return (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex gap-5 bg-card border border-border rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="w-32 h-40 sm:w-36 sm:h-48 shrink-0 rounded-xl overflow-hidden bg-secondary/5">
                <img
                  src={dynamicPhoto}
                  alt={d.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    if (d.image && (e.currentTarget as HTMLImageElement).src !== d.image) {
                      (e.currentTarget as HTMLImageElement).src = d.image;
                    } else {
                      (e.currentTarget as HTMLImageElement).src = "https://mits.ac.in/images/inner-banner.jpg";
                    }
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-1">
                  {d.school}
                </p>
                <h3
                  className="text-xl font-bold text-[#0f2a44] leading-tight group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {d.name}
                </h3>
                <p className="text-sm text-muted-foreground font-semibold mt-1">{d.designation}</p>
                <p className="text-sm text-secondary/70 mt-1">{dynamicQualification}</p>

                <div className="mt-4 flex flex-wrap gap-3 items-center">
                  {targetDeptKey && targetName ? (
                    <Link
                      to={`/department/${targetDeptKey}/faculty/${slugifyFaculty(targetName)}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      View profile <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : d.externalProfile ? (
                    <a
                      href={d.externalProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      Official profile <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </PageShell>
  );
};

export default Deans;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { leadershipProfiles, LeadershipProfile } from "@/data/aboutData";

const AcademicLeadership = () => {
  const academicKeys = [
    "vice-chancellor",
    "registrar",
    "principal",
    "controller-of-examinations",
    "ombudsperson",
  ];
  const profiles = academicKeys.map((k) => leadershipProfiles[k]).filter((p): p is LeadershipProfile => Boolean(p));

  return (
    <PageShell
      eyebrow="About"
      title="Academic Leadership"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {profiles.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
          >
            <Link
              to={`/about/leadership/${p.slug}`}
              className="group block bg-white border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-[4/5] bg-secondary/5 overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://mits.ac.in/images/inner-banner.jpg";
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold">
                    {p.designation}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <h3
                  className={`text-lg font-bold transition-colors ${
                    p.slug === "controller-of-examinations" ? "text-[#b8860b] font-extrabold" : "text-[#0f2a44] group-hover:text-[#caa74d]"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.name}
                </h3>
                {p.qualification && (
                  <p className="text-sm text-secondary/60 mt-1">{p.qualification}</p>
                )}
                <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-primary">
                  View profile <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
};

export default AcademicLeadership;

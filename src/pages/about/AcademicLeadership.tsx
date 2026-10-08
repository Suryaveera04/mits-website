import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { leadershipProfiles } from "@/data/aboutData";

const AcademicLeadership = () => {
  const vc = leadershipProfiles["vice-chancellor"];
  const registrar = leadershipProfiles["registrar"];
  const principal = leadershipProfiles["principal"];
  const coe = leadershipProfiles["controller-of-examinations"];
  const ombudsperson = leadershipProfiles["ombudsperson"];

  return (
    <PageShell
      eyebrow="About"
      title="Academic Leadership"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Vice-Chancellor */}
        {vc && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.04 }}
          >
            <Link
              to={`/about/leadership/${vc.slug}`}
              className="group block bg-white border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
            >
              <div className="aspect-[4/5] bg-secondary/5 overflow-hidden relative">
                <img
                  src={vc.image}
                  alt={vc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://mits.ac.in/images/inner-banner.jpg";
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold">
                    {vc.designation}
                  </p>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-lg font-bold text-[#0f2a44] group-hover:text-[#caa74d] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {vc.name}
                  </h3>
                  {vc.qualification && (
                    <p className="text-sm text-secondary/60 mt-1">{vc.qualification}</p>
                  )}
                </div>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary">
                  View profile <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* 2. Registrar */}
        {registrar && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <Link
              to={`/about/leadership/${registrar.slug}`}
              className="group block bg-white border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
            >
              <div className="aspect-[4/5] bg-secondary/5 overflow-hidden relative">
                <img
                  src={registrar.image}
                  alt={registrar.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://mits.ac.in/images/inner-banner.jpg";
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold">
                    {registrar.designation}
                  </p>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-lg font-bold text-[#0f2a44] group-hover:text-[#caa74d] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {registrar.name}
                  </h3>
                  {registrar.qualification && (
                    <p className="text-sm text-secondary/60 mt-1">{registrar.qualification}</p>
                  )}
                </div>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary">
                  View profile <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* 3. Additional Registrar (No link, no photo, blank details) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 }}
        >
          <div className="block bg-white border border-border rounded-2xl overflow-hidden h-full flex flex-col select-none">
            <div className="aspect-[4/5] bg-secondary/5 flex flex-col items-center justify-center relative p-6">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center border border-border">
                <User className="w-9 h-9 text-secondary/40" />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold">
                  ADDITIONAL REGISTRAR
                </p>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3
                  className="text-lg font-bold text-[#0f2a44]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Additional Registrar
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. Principal */}
        {principal && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
          >
            <Link
              to={`/about/leadership/${principal.slug}`}
              className="group block bg-white border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
            >
              <div className="aspect-[4/5] bg-secondary/5 overflow-hidden relative">
                <img
                  src={principal.image}
                  alt={principal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://mits.ac.in/images/inner-banner.jpg";
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold">
                    {principal.designation}
                  </p>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-lg font-bold text-[#0f2a44] group-hover:text-[#caa74d] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {principal.name}
                  </h3>
                  {principal.qualification && (
                    <p className="text-sm text-secondary/60 mt-1">{principal.qualification}</p>
                  )}
                </div>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary">
                  View profile <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* 5. Controller of Examinations */}
        {coe && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <Link
              to={`/about/leadership/${coe.slug}`}
              className="group block bg-white border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
            >
              <div className="aspect-[4/5] bg-secondary/5 overflow-hidden relative">
                <img
                  src={coe.image}
                  alt={coe.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://mits.ac.in/images/inner-banner.jpg";
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold">
                    {coe.designation}
                  </p>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-lg font-bold text-[#0f2a44] group-hover:text-[#caa74d] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {coe.name}
                  </h3>
                  {coe.qualification && (
                    <p className="text-sm text-secondary/60 mt-1">{coe.qualification}</p>
                  )}
                </div>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary">
                  View profile <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* 6. Ombudsperson (Name removed, only OMBUDSPERSON, identical look and color) */}
        {ombudsperson && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.24 }}
          >
            <Link
              to={`/about/leadership/${ombudsperson.slug}`}
              className="group block bg-white border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
            >
              <div className="aspect-[4/5] bg-secondary/5 overflow-hidden relative">
                <img
                  src={ombudsperson.image}
                  alt="OMBUDSPERSON"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://mits.ac.in/images/inner-banner.jpg";
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold">
                    OMBUDSPERSON
                  </p>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-lg font-bold text-[#0f2a44] group-hover:text-[#caa74d] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    OMBUDSPERSON
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary">
                  View profile <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </PageShell>
  );
};

export default AcademicLeadership;

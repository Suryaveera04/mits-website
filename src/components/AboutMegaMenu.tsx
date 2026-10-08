import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, User } from "lucide-react";
import { aboutSections, leadershipProfiles } from "@/data/aboutData";

const BASE = import.meta.env.BASE_URL;

interface Props {
  open: boolean;
  onClose: () => void;
}

const previewMap: Record<string, { title: string; body: string; image: string }> = {
  leadership: {
    title: "Institutional Leadership",
    body: "Founder & Chancellor and Pro-Chancellor guiding the institution at the highest level.",
    image: `${BASE}Hero-Section/image-1.jpg`,
  },
  "academic-leadership": {
    title: "Academic Leadership",
    body: "Vice-Chancellor, Registrar, Additional Registrar, Controller of Examinations and Ombudsperson supporting academic governance.",
    image: `${BASE}Hero-Section/image-2.jpg`,
  },
  deans: {
    title: "Deans of Schools",
    body: "School Deans steering each academic vertical with global academic credentials.",
    image: `${BASE}Hero-Section/image-3.jpg`,
  },
  "department-heads": {
    title: "Department Heads",
    body: "Heads of departments across Engineering, Computing, Sciences, Humanities and Management.",
    image: `${BASE}Hero-Section/image-4.jpg`,
  },
  "executive-council": {
    title: "Executive Council",
    body: "Apex governance body — administration, financial governance and strategic direction.",
    image: `${BASE}Hero-Section/image-5.jpg`,
  },
  "academic-council": {
    title: "Academic Council",
    body: "Highest academic authority — curriculum, evaluation and academic policy.",
    image: `${BASE}Hero-Section/image-1.jpg`,
  },
  bos: {
    title: "Board of Studies",
    body: "Departmental academic boards for curriculum design across all schools.",
    image: `${BASE}Hero-Section/image-2.jpg`,
  },
  organogram: {
    title: "University Organogram",
    body: "Complete organisational hierarchy of MITS Deemed to be University.",
    image: `${BASE}Hero-Section/image-3.jpg`,
  },
  "important-links": {
    title: "Important Links",
    body: "Quick access to institutional certifications, quality ratings, and public disclosures.",
    image: `${BASE}Hero-Section/image-5.jpg`,
  },
};

const AboutMegaMenu = ({ open, onClose }: Props) => {
  const [hovered, setHovered] = useState<string>("leadership");
  const preview = previewMap[hovered] ?? previewMap.leadership;
  const institutionalLeaders = ["chancellor", "pro-chancellor"].map((s) => leadershipProfiles[s]);
  const vc = leadershipProfiles["vice-chancellor"];
  const registrar = leadershipProfiles["registrar"];
  const coe = leadershipProfiles["controller-of-examinations"];
  const ombudsperson = leadershipProfiles["ombudsperson"];

  const renderLeaderGrid = (leaders: typeof institutionalLeaders) => (
    <div className="grid grid-cols-2 gap-2 text-left">
      {leaders.map((l) => (
        <Link
          key={l.slug}
          to={`/about/leadership/${l.slug}`}
          onClick={onClose}
          className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/5 transition-colors group text-left"
        >
          <img
            src={l.image}
            alt={l.name}
            className="w-9 h-9 rounded-full object-cover border border-border shrink-0"
          />
          <div className="min-w-0 flex-1 text-left">
            <p className="text-left text-[11px] font-semibold text-secondary leading-snug line-clamp-2 group-hover:text-primary [text-align:left]">
              {l.name}
            </p>
            <p className="text-left text-[9px] text-secondary/60 uppercase tracking-wider truncate mt-0.5 [text-align:left]">
              {l.designation}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );

  const renderAcademicLeaderGrid = () => (
    <div className="grid grid-cols-2 gap-2 text-left">
      {/* 1. Vice-Chancellor */}
      {vc && (
        <Link
          key={vc.slug}
          to={`/about/leadership/${vc.slug}`}
          onClick={onClose}
          className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/5 transition-colors group text-left"
        >
          <img
            src={vc.image}
            alt={vc.name}
            className="w-9 h-9 rounded-full object-cover border border-border shrink-0"
          />
          <div className="min-w-0 flex-1 text-left">
            <p className="text-left text-[11px] font-semibold text-secondary leading-snug line-clamp-2 group-hover:text-primary [text-align:left]">
              {vc.name}
            </p>
            <p className="text-left text-[9px] text-secondary/60 uppercase tracking-wider truncate mt-0.5 [text-align:left]">
              {vc.designation}
            </p>
          </div>
        </Link>
      )}

      {/* 2. Registrar */}
      {registrar && (
        <Link
          key={registrar.slug}
          to={`/about/leadership/${registrar.slug}`}
          onClick={onClose}
          className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/5 transition-colors group text-left"
        >
          <img
            src={registrar.image}
            alt={registrar.name}
            className="w-9 h-9 rounded-full object-cover border border-border shrink-0"
          />
          <div className="min-w-0 flex-1 text-left">
            <p className="text-left text-[11px] font-semibold text-secondary leading-snug line-clamp-2 group-hover:text-primary [text-align:left]">
              {registrar.name}
            </p>
            <p className="text-left text-[9px] text-secondary/60 uppercase tracking-wider truncate mt-0.5 [text-align:left]">
              {registrar.designation}
            </p>
          </div>
        </Link>
      )}

      {/* 3. Controller of Examinations */}
      {coe && (
        <Link
          key={coe.slug}
          to={`/about/leadership/${coe.slug}`}
          onClick={onClose}
          className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/5 transition-colors group text-left"
        >
          <img
            src={coe.image}
            alt={coe.name}
            className="w-9 h-9 rounded-full object-cover border border-border shrink-0"
          />
          <div className="min-w-0 flex-1 text-left">
            <p className="text-left text-[11px] font-semibold text-secondary leading-snug line-clamp-2 group-hover:text-primary [text-align:left]">
              {coe.name}
            </p>
            <p className="text-left text-[9px] text-secondary/60 uppercase tracking-wider truncate mt-0.5 [text-align:left]">
              {coe.designation}
            </p>
          </div>
        </Link>
      )}

      {/* 4. Additional Registrar (No link, no photo, blank data, matching style) */}
      <div className="flex items-center gap-2 p-2 rounded-md text-left select-none">
        <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center border border-border shrink-0">
          <User className="w-4 h-4 text-secondary/50" />
        </div>
        <div className="min-w-0 flex-1 text-left">
          <p className="text-left text-[11px] font-semibold text-secondary leading-snug line-clamp-2 [text-align:left]">
            ADDITIONAL REGISTRAR
          </p>
        </div>
      </div>

      {/* 5. Ombudsperson (Name removed, only OMBUDSPERSON, identical look and color to remaining ones) */}
      {ombudsperson && (
        <Link
          key={ombudsperson.slug}
          to={`/about/leadership/${ombudsperson.slug}`}
          onClick={onClose}
          className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/5 transition-colors group text-left"
        >
          <img
            src={ombudsperson.image}
            alt="OMBUDSPERSON"
            className="w-9 h-9 rounded-full object-cover border border-border shrink-0"
          />
          <div className="min-w-0 flex-1 text-left">
            <p className="text-left text-[11px] font-semibold text-secondary leading-snug line-clamp-2 group-hover:text-primary [text-align:left]">
              OMBUDSPERSON
            </p>
          </div>
        </Link>
      )}
    </div>
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-0 right-0 z-50 mt-0 pt-1"
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="bg-white rounded-b-2xl border border-border shadow-2xl overflow-hidden">
              <div className="grid grid-cols-12">
                {/* LEFT: section nav */}
                <div className="col-span-4 bg-gradient-to-b from-primary/[0.04] to-transparent border-r border-border p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary mb-4">
                    About MITS
                  </p>
                  <ul className="space-y-0.5">
                    {aboutSections.map((s) => (
                      <li key={s.key}>
                        {s.href === "#" ? (
                          <button
                            onMouseEnter={() => setHovered(s.key)}
                            className={`group flex items-center justify-between w-full px-3 py-2.5 rounded-md text-sm font-semibold transition-colors duration-150 ${
                              hovered === s.key
                                ? "bg-primary/10 text-primary"
                                : "text-secondary hover:bg-primary/5 hover:text-primary"
                            }`}
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            <span>{s.label}</span>
                            <ChevronRight
                              className={`w-4 h-4 transition-transform ${
                                hovered === s.key ? "translate-x-0.5 text-primary" : "text-secondary/40"
                              }`}
                            />
                          </button>
                        ) : (
                          <Link
                            to={s.href}
                            onMouseEnter={() => setHovered(s.key)}
                            onClick={onClose}
                            className={`group flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-semibold transition-colors duration-150 ${
                              hovered === s.key
                                ? "bg-primary/10 text-primary"
                                : "text-secondary hover:bg-primary/5 hover:text-primary"
                            }`}
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            <span>{s.label}</span>
                            <ChevronRight
                              className={`w-4 h-4 transition-transform ${
                                hovered === s.key ? "translate-x-0.5 text-primary" : "text-secondary/40"
                              }`}
                            />
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT: dynamic preview */}
                <div className="col-span-8 p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={hovered}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-5 gap-6 items-start"
                    >
                      <div className="col-span-2 relative h-44 rounded-lg overflow-hidden bg-secondary/5">
                        <img
                          src={preview.image}
                          alt={preview.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = `${BASE}Hero-Section/image-1.jpg`;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                      <div className="col-span-3">
                        <h3
                          className="text-2xl font-bold text-secondary mb-2"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {preview.title}
                        </h3>
                        <p className="text-left text-sm text-secondary/70 leading-relaxed mb-4 [text-align:left]">
                          {preview.body}
                        </p>
                        {hovered === "leadership" && renderLeaderGrid(institutionalLeaders)}
                        {hovered === "academic-leadership" && renderAcademicLeaderGrid()}
                        {hovered === "important-links" && (
                          <div className="flex flex-col gap-1.5 mt-2">
                            {[
                              { label: "NIRF", href: "/nirf" },
                              { label: "NAAC", href: "/naac" },
                              { label: "IQAC", href: "/iqac" },
                              { label: "Affiliations & Accreditations", href: "/affiliations-accreditations" },
                              { label: "Public Self Disclosures", href: "/psd" },
                              { label: "Mandatory Disclosures", href: "/about/mandatory-disclosures" },
                            ].map((link) => (
                              <Link
                                key={link.label}
                                to={link.href}
                                onClick={onClose}
                                className="flex items-center gap-1.5 py-1 text-sm font-bold text-secondary hover:text-primary transition-colors group"
                              >
                                <ChevronRight className="w-3.5 h-3.5 text-primary opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
                                <span className="group-hover:translate-x-0.5 transition-transform duration-150">{link.label}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutMegaMenu;

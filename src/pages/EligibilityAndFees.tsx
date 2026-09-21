import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { UserCheck, Star, Phone, Globe, Layers, Globe2, Award, Download } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const eligibility = [
  {
    program: "B.Tech (Regular / 4-Year)",
    criteria: [
      "10+2 with Physics, Mathematics, and Chemistry/Biology as compulsory subjects.",
      "Minimum 50% aggregate marks in the qualifying examination (45% for reserved categories).",
      "Valid rank in MITSUCET, JEE Main, or State-level Engineering Entrance Exams (e.g., AP EAPCET)."
    ]
  },
  {
    program: "B.Tech (Lateral Entry / 3-Year)",
    criteria: [
      "Passed a minimum 3-year or 2-year (Lateral Entry) Engineering Diploma with at least 50% marks (45% for reserved categories).",
      "OR passed B.Sc. Degree with at least 50% marks and cleared Mathematics at 10+2 level.",
      "Merit ranking based on ECET scores or qualifying diploma academic performance."
    ]
  },
  {
    program: "BBA & BCA",
    criteria: [
      "10+2 in any stream (Commerce, Science, Arts) from a recognized Board.",
      "Minimum 50% aggregate marks in the qualifying examination.",
      "Admissions through MITSUCET rank or academic merit lists."
    ]
  },
  {
    program: "MBA & MCA",
    criteria: [
      "Passed recognized Bachelor's Degree of minimum 3 years' duration.",
      "Minimum 50% aggregate marks in the qualifying degree (45% for reserved categories).",
      "Valid score in State ICET or national entrance tests (CAT, MAT, NIMCET)."
    ]
  },
  {
    program: "M.Tech",
    criteria: [
      "Passed B.E./B.Tech in relevant Engineering discipline from a recognized University.",
      "Minimum 50% aggregate marks in the qualifying degree (45% for reserved categories).",
      "Valid score in GATE, PGECET, or undergraduate merit rankings."
    ]
  }
];

/* Shared table styling classes - sans-serif and comfortable dimensions */
const TH = "py-3 px-4 text-center font-extrabold text-sm md:text-sm uppercase tracking-wider border border-slate-200 bg-[#0f2a44] text-white font-sans";
const TD = "py-3.5 px-4 text-center text-sm md:text-sm border border-slate-200 align-middle text-slate-700 font-semibold leading-relaxed font-sans";
const SCHOOL_TD = "py-3.5 px-4 text-left text-sm md:text-sm font-extrabold border border-slate-200 align-middle bg-[#f8fafc] text-[#0f2a44] leading-relaxed font-sans";
const PROG_TD = "py-3.5 px-4 text-left text-sm md:text-sm font-bold border border-slate-200 align-middle text-slate-800 leading-relaxed font-sans";
const BASE_TD = "py-3.5 px-4 text-center text-sm md:text-sm font-extrabold border border-slate-200 align-middle bg-slate-50 text-slate-900 leading-relaxed font-sans";
const FINAL_TD = "py-3.5 px-4 text-center text-sm md:text-sm font-extrabold border border-slate-200 align-middle text-[#b31317] bg-red-50/40 leading-relaxed font-sans";

const EligibilityAndFees = () => (
  <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
    <Header />
    <SEO
      title="Fee Structure & Scholarship Eligibility – MITS Deemed to be University"
      description="Official tuition fee matrix, regular B.Tech/PG scholarships, lateral entry fee structure, and SAARC country fee concessions at MITS."
      canonical="/eligibility-and-fees"
    />
    <main className="flex-grow">
      {/* Hero Banner */}
      <section
        className="relative pt-32 md:pt-44 pb-24 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center space-y-4">
          <p className="text-[#ffd15c] font-bold tracking-[0.2em] uppercase text-sm sm:text-sm">
            AY 2026-27 Admissions
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Eligibility &amp; <span className="text-[#ffd15c]">Fee Structure</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Official program fees, lateral entry schedules, academic criteria, and SAARC student concession lists.
          </p>
        </div>

        <div className="absolute bottom-4 left-6 z-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-white/90">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">›</li>
              <li>
                <Link to="/admissions" className="text-white/70 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li className="text-white/50">›</li>
              <li className="text-[#ffd15c] font-semibold">Eligibility &amp; Fee Structure</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ELIGIBILITY SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 space-y-8">
          <ScrollReveal>
            <div className="text-center space-y-2">
              <p className="text-[#b31317] font-bold tracking-widest uppercase text-sm md:text-sm">Qualifications</p>
              <h2 className="font-sans text-xl md:text-3xl font-extrabold text-[#0f2a44]">Eligibility Guidelines</h2>
              <p className="text-slate-505 max-w-2xl mx-auto text-sm md:text-sm leading-relaxed">Ensure you meet the academic requirements before starting the online application.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eligibility.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="p-6 h-full border-slate-200 hover:border-[#caa74d] hover:shadow-xl transition-all duration-300 flex flex-col justify-between rounded-2xl bg-white">
                  <div>
                    <h3 className="font-sans text-base md:text-lg font-bold text-[#0f2a44] mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                      <UserCheck className="w-5 h-5 text-[#caa74d]" /> {item.program}
                    </h3>
                    <ul className="space-y-2.5">
                      {item.criteria.map((c, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm md:text-sm text-slate-500 leading-relaxed font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#caa74d] mt-1.5 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEE STRUCTURE SECTION */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/50">
        <div className="container mx-auto px-4 md:px-8 space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-2">
              <p className="text-[#b31317] font-bold tracking-widest uppercase text-sm md:text-sm">Concessions &amp; Fees</p>
              <h2 className="font-sans text-xl md:text-3xl font-extrabold text-[#0f2a44]">Fee &amp; Scholarship Matrix</h2>
              <p className="text-slate-505 max-w-2xl mx-auto text-sm md:text-sm leading-relaxed">Official fee lists and merit-based concessions applicable for domestic and international admissions.</p>
            </div>
          </ScrollReveal>

          {/* Official Fee Structure PDF Download Card */}
          <ScrollReveal>
            <div className="p-5 md:p-6 rounded-2xl bg-[#0f2a44] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg border border-amber-400/30">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-[#ffd15c]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                      Official Document
                    </span>
                    <span className="text-xs text-slate-300">• Approved by Competent Authority</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mt-1">
                    MITS Deemed to be University Fee Structure (AY 2026-27)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                    Download the official notified fee schedule, tuition rules, and scholarship criteria PDF.
                  </p>
                </div>
              </div>
              <a
                href="https://mits.ac.in/assets/pdf/admin/Fee_str_2026-27.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>Download Fee Structure PDF</span>
              </a>
            </div>
          </ScrollReveal>

          {/* TABLE 1: B.Tech Regular Group 1 */}
          <ScrollReveal>
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-[#0f2a44] flex items-center gap-2 font-sans">
                <Layers className="w-5 h-5 text-[#caa74d]" /> 1. UG Fee Structure — School of Engineering, Computing
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full border-collapse text-sm md:text-sm">
                  <thead>
                    <tr>
                      <th className={TH} rowSpan={2}>Program Name</th>
                      <th className={TH} rowSpan={2}>Base Fee / Sem (₹)</th>
                      <th className={TH} colSpan={4}>Scholarship Criteria (Any One)</th>
                      <th className={TH} rowSpan={2}>Final Fee / Sem (₹)</th>
                    </tr>
                    <tr className="bg-slate-800 text-white/90 text-[11px] font-semibold">
                      <th className="py-2.5 px-3 border border-slate-700 text-center">10+2 %</th>
                      <th className="py-2.5 px-3 border border-slate-700 text-center">CBSE/ICSE GPA</th>
                      <th className="py-2.5 px-3 border border-slate-700 text-center">State CET Rank</th>
                      <th className="py-2.5 px-3 border border-slate-700 text-center">JEE Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Civil, Mech, EEE */}
                    <tr>
                      <td className={PROG_TD} rowSpan={2}>
                        1. B.Tech. Civil Engineering<br />
                        2. B.Tech. Mechanical Engineering<br />
                        3. B.Tech. Electrical &amp; Electronics Engineering
                      </td>
                      <td className={BASE_TD} rowSpan={2}>₹ 50,000</td>
                      <td className={TD}>75 – 100</td>
                      <td className={TD}>&ge; 7</td>
                      <td className={TD}>&le; 10,000</td>
                      <td className={TD}>&le; 50,000</td>
                      <td className={FINAL_TD}>₹ 45,000</td>
                    </tr>
                    <tr className="bg-slate-50/40">
                      <td className={TD} colSpan={4}>Other eligible candidates</td>
                      <td className={FINAL_TD}>₹ 50,000</td>
                    </tr>

                    {/* Bioinformatics, CSE (AI & Robotics) */}
                    <tr className="border-t-2 border-slate-200">
                      <td className={PROG_TD} rowSpan={4}>
                        1. B.Tech. Bioinformatics<br />
                        2. B.Tech. CSE (AI &amp; Robotics)
                      </td>
                      <td className={BASE_TD} rowSpan={4}>₹ 80,000</td>
                      <td className={TD}>90 – 100</td>
                      <td className={TD}>&ge; 8</td>
                      <td className={TD}>&le; 25,000</td>
                      <td className={TD}>&le; 50,000</td>
                      <td className={FINAL_TD}>₹ 65,000</td>
                    </tr>
                    <tr className="bg-slate-50/40">
                      <td className={TD}>80 – 89.99</td>
                      <td className={TD}>&ge; 7</td>
                      <td className={TD}>25,001 – 50,000</td>
                      <td className={TD}>50,001 – 70,000</td>
                      <td className={FINAL_TD}>₹ 70,000</td>
                    </tr>
                    <tr>
                      <td className={TD}>70 – 79.99</td>
                      <td className={TD}>&ge; 6</td>
                      <td className={TD}>50,001 – 70,000</td>
                      <td className={TD}>70,001 – 90,000</td>
                      <td className={FINAL_TD}>₹ 75,000</td>
                    </tr>
                    <tr className="bg-slate-50/40">
                      <td className={TD} colSpan={4}>Other eligible candidates</td>
                      <td className={FINAL_TD}>₹ 80,000</td>
                    </tr>

                    {/* CSE, ECE */}
                    <tr className="border-t-2 border-slate-200">
                      <td className={PROG_TD} rowSpan={5}>
                        1. B.Tech. Computer Science &amp; Engineering<br />
                        2. B.Tech. Electronics &amp; Communication Engineering
                      </td>
                      <td className={BASE_TD} rowSpan={5}>₹ 99,000</td>
                      <td className={TD}>90 – 100</td>
                      <td className={TD}>&ge; 9</td>
                      <td className={TD}>&le; 10,000</td>
                      <td className={TD}>&le; 30,000</td>
                      <td className={FINAL_TD}>₹ 80,000</td>
                    </tr>
                    <tr className="bg-slate-50/40">
                      <td className={TD}>85 – 89.99</td>
                      <td className={TD}>&ge; 8</td>
                      <td className={TD}>10,001 – 15,000</td>
                      <td className={TD}>30,001 – 50,000</td>
                      <td className={FINAL_TD}>₹ 85,000</td>
                    </tr>
                    <tr>
                      <td className={TD}>80 – 84.99</td>
                      <td className={TD}>&ge; 7</td>
                      <td className={TD}>15,001 – 25,000</td>
                      <td className={TD}>50,001 – 70,000</td>
                      <td className={FINAL_TD}>₹ 90,000</td>
                    </tr>
                    <tr className="bg-slate-50/40">
                      <td className={TD}>70 – 79.99</td>
                      <td className={TD}>&ge; 6</td>
                      <td className={TD}>25,001 – 40,000</td>
                      <td className={TD}>70,001 – 90,000</td>
                      <td className={FINAL_TD}>₹ 95,000</td>
                    </tr>
                    <tr>
                      <td className={TD} colSpan={4}>Other eligible candidates</td>
                      <td className={FINAL_TD}>₹ 99,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* TABLE 2: B.Tech Regular Group 2 */}
          <ScrollReveal>
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-[#0f2a44] flex items-center gap-2 font-sans">
                <Layers className="w-5 h-5 text-[#caa74d]" /> 2. B.Tech. Regular Fee (Computing Group 2)
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full border-collapse text-sm md:text-sm">
                  <thead>
                    <tr>
                      <th className={TH} rowSpan={2}>Program Name</th>
                      <th className={TH} rowSpan={2}>Base Fee / Sem</th>
                      <th className={TH} colSpan={4}>Scholarship Criteria (Any One)</th>
                      <th className={TH} rowSpan={2}>Final Fee / Sem</th>
                    </tr>
                    <tr className="bg-slate-800 text-white/90 text-[11px] font-semibold">
                      <th className="py-2.5 px-3 border border-slate-700 text-center">10+2 %</th>
                      <th className="py-2.5 px-3 border border-slate-700 text-center">CBSE/ICSE GPA</th>
                      <th className="py-2.5 px-3 border border-slate-700 text-center">State CET Rank</th>
                      <th className="py-2.5 px-3 border border-slate-700 text-center">JEE Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={PROG_TD} rowSpan={5}>
                        1. B.Tech. CSE (AI &amp; Data Science)<br />
                        2. B.Tech. CSE (AI &amp; ML)<br />
                        3. B.Tech. CSE (Cyber Security)
                      </td>
                      <td className={BASE_TD} rowSpan={5}>₹ 1,25,000</td>
                      <td className={TD}>95 – 100</td>
                      <td className={TD}>&ge; 9</td>
                      <td className={TD}>&le; 10,000</td>
                      <td className={TD}>&le; 30,000</td>
                      <td className={FINAL_TD}>₹ 99,000</td>
                    </tr>
                    <tr className="bg-slate-50/40">
                      <td className={TD}>90 – 94.99</td>
                      <td className={TD}>&ge; 8</td>
                      <td className={TD}>10,001 – 15,000</td>
                      <td className={TD}>30,001 – 50,000</td>
                      <td className={FINAL_TD}>₹ 1,07,500</td>
                    </tr>
                    <tr>
                      <td className={TD}>85 – 89.99</td>
                      <td className={TD}>&ge; 7</td>
                      <td className={TD}>15,001 – 25,000</td>
                      <td className={TD}>50,001 – 70,000</td>
                      <td className={FINAL_TD}>₹ 1,12,500</td>
                    </tr>
                    <tr className="bg-slate-50/40">
                      <td className={TD}>75 – 84.99</td>
                      <td className={TD}>&ge; 6</td>
                      <td className={TD}>25,001 – 40,000</td>
                      <td className={TD}>70,001 – 90,000</td>
                      <td className={FINAL_TD}>₹ 1,17,500</td>
                    </tr>
                    <tr>
                      <td className={TD} colSpan={4}>Other eligible candidates</td>
                      <td className={FINAL_TD}>₹ 1,25,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* TABLE 3: UG BBA & BCA */}
          <ScrollReveal>
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-[#0f2a44] flex items-center gap-2 font-sans">
                <Layers className="w-5 h-5 text-[#caa74d]" /> 3. School of Business &amp; School of Sciences (UG Programs)
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full border-collapse text-sm md:text-sm">
                  <thead>
                    <tr>
                      <th className={TH}>Program Name</th>
                      <th className={TH}>Base Fee / Sem</th>
                      <th className={TH}>10+2 % Scholarship Criteria</th>
                      <th className={TH}>Final Fee / Sem</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={PROG_TD} rowSpan={2}>
                        1. BBA – Bachelor of Business Administration<br />
                        2. BCA – Bachelor of Computer Applications
                      </td>
                      <td className={BASE_TD} rowSpan={2}>₹ 45,000</td>
                      <td className={TD}>75 – 100</td>
                      <td className={FINAL_TD}>₹ 37,500</td>
                    </tr>
                    <tr className="bg-slate-50/40">
                      <td className={TD}>Other eligible candidates</td>
                      <td className={FINAL_TD}>₹ 45,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* TABLE 4: MITSUCET Ranks */}
          <ScrollReveal>
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-[#0f2a44] flex items-center gap-2 font-sans">
                <Star className="w-5 h-5 text-[#caa74d]" /> 4. MITSUCET Merit Fee Waiver (B.Tech. Regular)
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full border-collapse text-sm md:text-sm">
                  <thead>
                    <tr>
                      <th className={TH} rowSpan={2}>Rank in MITSUCET</th>
                      <th className={TH} rowSpan={2}>Tuition Fee Waiver</th>
                      <th className={TH} colSpan={3}>Tuition Fee / Semester (₹)</th>
                    </tr>
                    <tr className="bg-slate-800 text-white/90 text-[11px] font-semibold">
                      <th className="py-2.5 px-3 border border-slate-700 text-center">CSE / CSE Variants</th>
                      <th className="py-2.5 px-3 border border-slate-700 text-center">Civil / EEE / Mech</th>
                      <th className="py-2.5 px-3 border border-slate-700 text-center">ECE / Bioinformatics / CSE / CSE (AI&amp;R)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={PROG_TD}>Rank 1</td>
                      <td className={TD}>100% Waiver</td>
                      <td className={FINAL_TD}>₹ 0</td>
                      <td className={FINAL_TD}>₹ 0</td>
                      <td className={FINAL_TD}>₹ 0</td>
                    </tr>
                    <tr className="bg-slate-50/40">
                      <td className={PROG_TD}>Rank 2 – 5</td>
                      <td className={TD}>75% Waiver</td>
                      <td className={TD}>₹ 31,250</td>
                      <td className={TD}>₹ 16,250</td>
                      <td className={TD}>₹ 24,750</td>
                    </tr>
                    <tr>
                      <td className={PROG_TD}>Rank 6 – 10</td>
                      <td className={TD}>50% Waiver</td>
                      <td className={TD}>₹ 62,500</td>
                      <td className={TD}>₹ 32,500</td>
                      <td className={TD}>₹ 49,500</td>
                    </tr>
                    <tr className="bg-slate-50/40">
                      <td className={PROG_TD}>Rank 11 – 20</td>
                      <td className={TD}>25% Waiver</td>
                      <td className={TD}>₹ 93,750</td>
                      <td className={TD}>₹ 48,750</td>
                      <td className={TD}>₹ 74,250</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* TABLE 5: PG program fees */}
          <ScrollReveal>
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-[#0f2a44] flex items-center gap-2 font-sans">
                <Layers className="w-5 h-5 text-[#caa74d]" /> 5. Post Graduate (PG) Program Fees
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full border-collapse text-sm md:text-sm">
                  <thead>
                    <tr>
                      <th className={TH}>Program Name</th>
                      <th className={TH}>Base Fee / Sem</th>
                      <th className={TH} colSpan={3}>Scholarship Criteria (Any One)</th>
                      <th className={TH}>Final Fee / Sem</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={PROG_TD} rowSpan={4}>
                        1. M.Tech. VLSI Design &amp; Embedded Systems<br />
                        2. M.Tech. Civil Engg. (Construction Engg. &amp; Mgmt.)<br />
                        3. M.Tech. Automation and Robotics<br />
                        4. M.Tech. Electric Vehicle Technology<br />
                        5. M.Tech. Computer Science &amp; Engineering<br />
                        6. M.Tech. CSE (AI &amp; ML)
                      </td>
                      <td className={BASE_TD} rowSpan={4}>₹ 35,000</td>
                      <td className="py-3 px-4 border border-slate-200 font-extrabold bg-[#f8fafc] text-center text-sm md:text-sm text-[#0f2a44] font-sans" colSpan={3}>
                        Qualifying Exams: UG CGPA / PGECET Rank / GATE Score
                      </td>
                      <td className={FINAL_TD} rowSpan={1}>—</td>
                    </tr>
                    <tr className="bg-slate-50/40">
                      <td className={TD}>UG CGPA &ge; 9.0</td>
                      <td className={TD}>PGECET Rank &lt; 100</td>
                      <td className={TD}>GATE Qualified (Any Rank)</td>
                      <td className={FINAL_TD}>₹ 0</td>
                    </tr>
                    <tr>
                      <td className={TD}>UG CGPA &ge; 8.0</td>
                      <td className={TD}>PGECET Rank &lt; 300</td>
                      <td className={TD}>—</td>
                      <td className={FINAL_TD}>₹ 10,000</td>
                    </tr>
                    <tr className="bg-slate-50/40">
                      <td className={TD}>UG CGPA &ge; 7.0</td>
                      <td className={TD}>PGECET Rank &lt; 500</td>
                      <td className={TD}>—</td>
                      <td className={FINAL_TD}>₹ 20,000</td>
                    </tr>

                    <tr className="border-t-2 border-slate-200">
                      <td className={PROG_TD} rowSpan={2}>
                        MBA – Master of Business Administration
                      </td>
                      <td className={BASE_TD} rowSpan={2}>₹ 60,000</td>
                      <td className={TD}>Qualifying %: 75 – 100</td>
                      <td className={TD}>ICET Rank &lt; 500</td>
                      <td className={TD}>CAT / MAT %tile &ge; 75</td>
                      <td className={FINAL_TD}>₹ 50,000</td>
                    </tr>
                    <tr className="bg-slate-50/40">
                      <td className={TD} colSpan={3}>Other eligible candidates</td>
                      <td className={FINAL_TD}>₹ 60,000</td>
                    </tr>

                    <tr className="border-t-2 border-slate-200">
                      <td className={PROG_TD} rowSpan={2}>
                        MCA – Master of Computer Applications
                      </td>
                      <td className={BASE_TD} rowSpan={2}>₹ 60,000</td>
                      <td className={TD}>Qualifying %: 75 – 100</td>
                      <td className={TD} colSpan={2}>ICET Rank &lt; 500</td>
                      <td className={FINAL_TD}>₹ 50,000</td>
                    </tr>
                    <tr className="bg-slate-50/40">
                      <td className={TD} colSpan={3}>Other eligible candidates</td>
                      <td className={FINAL_TD}>₹ 60,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* TABLE 6: Lateral Entry */}
          <ScrollReveal>
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-[#0f2a44] flex items-center gap-2 font-sans">
                <Layers className="w-5 h-5 text-[#caa74d]" /> 6. B.Tech. Lateral Entry Fee (Diploma Holders)
              </h3>
              
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full border-collapse text-sm md:text-sm">
                    <thead>
                      <tr>
                        <th className={TH}>Program Name</th>
                        <th className={TH}>Tuition Fee / Semester</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={PROG_TD}>
                          1. B.Tech. Civil Engineering (CIV)<br />
                          2. B.Tech. Electrical &amp; Electronics Engineering (EEE)<br />
                          3. B.Tech. Mechanical Engineering (MEC)<br />
                          4. B.Tech. CSE<br />
                          5. B.Tech. CSE (Artificial Intelligence)<br />
                          6. B.Tech. CSE (Data Science)
                        </td>
                        <td className={FINAL_TD}>₹ 45,000</td>
                      </tr>
                      <tr className="bg-slate-50/40">
                        <td className={PROG_TD}>B.Tech. Electronics &amp; Communication Engg. (ECE)</td>
                        <td className={FINAL_TD}>₹ 50,000</td>
                      </tr>
                      <tr>
                        <td className={PROG_TD}>
                          1. B.Tech. CSE (AI &amp; ML)<br />
                          2. B.Tech. CSE (Cyber Security)
                        </td>
                        <td className={FINAL_TD}>₹ 60,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Lateral Entry Scholarships */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
                  <table className="w-full border-collapse text-sm md:text-sm">
                    <thead>
                      <tr>
                        <th className="py-3 px-4 font-bold bg-[#caa74d] text-[#0f2a44] text-center border-b border-slate-200 font-sans" colSpan={3}>
                          <span className="flex items-center justify-center gap-1.5 font-bold">
                            <Award className="w-4 h-4" /> LE Scholarship Bracket
                          </span>
                        </th>
                      </tr>
                      <tr className="bg-[#0f2a44] text-white text-[11px] font-semibold">
                        <th className="py-2.5 px-3 border border-slate-700 text-center font-bold">Waiver</th>
                        <th className="py-2.5 px-3 border border-slate-700 text-center font-bold">Diploma Marks</th>
                        <th className="py-2.5 px-3 border border-slate-700 text-center font-bold">ECET Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-3 border border-slate-200 text-center font-bold text-slate-800">75%</td>
                        <td className={TD}>&gt; 95%</td>
                        <td className={TD}>&lt; 500</td>
                      </tr>
                      <tr className="bg-slate-50/40">
                        <td className="py-3 px-3 border border-slate-200 text-center font-bold text-slate-800">50%</td>
                        <td className={TD}>&gt; 90%</td>
                        <td className={TD}>&lt; 1,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 border border-slate-200 text-center font-bold text-slate-800">25%</td>
                        <td className={TD}>&gt; 80%</td>
                        <td className={TD}>&lt; 3,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="p-4 bg-slate-50 text-slate-550 text-sm md:text-sm leading-relaxed font-semibold border-t border-slate-100 font-sans">
                    <span className="text-[#b31317] font-bold">Note:</span> 100% Scholarship offered to the topper of each Diploma College. Regular fee applies if candidates do not qualify any waiver bracket.
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* TABLE 7: SAARC countries */}
          <ScrollReveal>
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-[#0f2a44] flex items-center gap-2 font-sans">
                <Globe2 className="w-5 h-5 text-[#caa74d]" /> 7. Discounted Fee for SAARC Countries (International)
              </h3>
              
              <div className="space-y-6">
                {/* UG */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full border-collapse text-sm md:text-sm">
                    <thead>
                      <tr>
                        <th className="py-3 px-4 font-bold bg-[#0f2a44] text-white text-left font-sans" colSpan={7}>UG programs (SAARC)</th>
                      </tr>
                      <tr className="bg-slate-800 text-white text-[11px] font-semibold">
                        <th className="py-2.5 px-3 border border-slate-700 text-left">Program Name</th>
                        <th className="py-2.5 px-3 border border-slate-700 text-center">Actual Total Fee</th>
                        <th className="py-2.5 px-3 border border-slate-700 text-center">Year 1</th>
                        <th className="py-2.5 px-3 border border-slate-700 text-center">Year 2</th>
                        <th className="py-2.5 px-3 border border-slate-700 text-center">Year 3</th>
                        <th className="py-2.5 px-3 border border-slate-700 text-center">Year 4</th>
                        <th className="py-2.5 px-3 border border-slate-700 text-center">Total (After Concession)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={PROG_TD}>
                          1. B.Tech. ECE <br />
                          2. B.Tech. Bioinformatics
                        </td>
                        <td className={BASE_TD}>₹ 7,92,000</td>
                        <td className={TD}>₹ 1,69,000</td>
                        <td className={TD}>₹ 1,00,000</td>
                        <td className={TD}>₹ 1,00,000</td>
                        <td className={TD}>₹ 1,00,000</td>
                        <td className={FINAL_TD}>₹ 4,69,000</td>
                      </tr>
                      <tr className="bg-slate-50/40">
                        <td className={PROG_TD}>
                          1. B.Tech. Civil<br />
                          2. B.Tech. Mechanical<br />
                          3. B.Tech. EEE
                        </td>
                        <td className={BASE_TD}>₹ 5,20,000</td>
                        <td className={TD}>₹ 1,26,000</td>
                        <td className={TD}>₹ 88,200</td>
                        <td className={TD}>₹ 88,200</td>
                        <td className={TD}>₹ 88,200</td>
                        <td className={FINAL_TD}>₹ 3,90,600</td>
                      </tr>
                      <tr>
                        <td className={PROG_TD}>
                          1. B.Tech. CSE<br />
                          2. B.Tech. CSE (AI &amp; DS)<br />
                          3. B.Tech. CSE (AI &amp; ML)<br />
                          4. B.Tech. CSE (AI &amp; Robotics)<br />
                          5. B.Tech. CSE (Cyber Security)
                        </td>
                        <td className={BASE_TD}>₹ 10,00,000</td>
                        <td className={TD}>₹ 1,99,000</td>
                        <td className={TD}>₹ 1,25,000</td>
                        <td className={TD}>₹ 1,25,000</td>
                        <td className={TD}>₹ 1,25,000</td>
                        <td className={FINAL_TD}>₹ 5,74,000</td>
                      </tr>
                      <tr className="bg-slate-50/40">
                        <td className={PROG_TD}>
                          1. BBA <br />
                          2. BCA
                        </td>
                        <td className={BASE_TD}>₹ 2,70,000</td>
                        <td className={TD}>₹ 60,000</td>
                        <td className={TD}>₹ 40,000</td>
                        <td className={TD}>₹ 40,000</td>
                        <td className={TD}>—</td>
                        <td className={FINAL_TD}>₹ 1,40,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* PG */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full border-collapse text-sm md:text-sm">
                    <thead>
                      <tr>
                        <th className="py-3 px-4 font-bold bg-[#0f2a44] text-white text-left font-sans" colSpan={5}>PG programs (SAARC)</th>
                      </tr>
                      <tr className="bg-slate-800 text-white text-[11px] font-semibold">
                        <th className="py-2.5 px-3 border border-slate-700 text-left">Program Name</th>
                        <th className="py-2.5 px-3 border border-slate-700 text-center">Actual Total Fee</th>
                        <th className="py-2.5 px-3 border border-slate-700 text-center">Year 1</th>
                        <th className="py-2.5 px-3 border border-slate-700 text-center">Year 2</th>
                        <th className="py-2.5 px-3 border border-slate-700 text-center">Total (After Concession)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={PROG_TD}>M.Tech. (All Specializations)</td>
                        <td className={BASE_TD}>₹ 1,40,000</td>
                        <td className={TD}>₹ 50,000</td>
                        <td className={TD}>₹ 40,000</td>
                        <td className={FINAL_TD}>₹ 90,000</td>
                      </tr>
                      <tr className="bg-slate-50/40">
                        <td className={PROG_TD}>MBA – Master of Business Administration</td>
                        <td className={BASE_TD}>₹ 2,40,000</td>
                        <td className={TD}>₹ 1,00,000</td>
                        <td className={TD}>₹ 70,000</td>
                        <td className={FINAL_TD}>₹ 1,70,000</td>
                      </tr>
                      <tr>
                        <td className={PROG_TD}>MCA – Master of Computer Applications</td>
                        <td className={BASE_TD}>₹ 2,40,000</td>
                        <td className={TD}>₹ 1,00,000</td>
                        <td className={TD}>₹ 70,000</td>
                        <td className={FINAL_TD}>₹ 1,70,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 md:px-8 text-center space-y-4">
          <ScrollReveal>
            <h2 className="font-sans text-xl md:text-3xl font-extrabold text-[#0f2a44] mb-2">Ready to Apply?</h2>
            <p className="text-slate-550 max-w-xl mx-auto mb-6 text-sm md:text-sm leading-relaxed font-sans">
              For detailed eligibility, scholarship clearances, or admissions guidance, contact our counselors or apply online.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <a href="https://admission.mits.ac.in/" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#b31317] hover:bg-[#990000] text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-transform hover:scale-[1.02] text-sm md:text-sm font-sans">
                  Start Application Portal
                </button>
              </a>
            </div>
            <div className="mt-4 text-[#b31317] font-bold text-sm md:text-base space-y-1 font-sans">
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-slate-550" /> 7330 803 555 &nbsp;/&nbsp; 7330 852 555
              </p>
              <p className="flex items-center justify-center gap-2 text-slate-600">
                <Globe className="w-5 h-5 text-slate-400" /> www.mits.ac.in
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
    <Footer />
  </div>
);

export default EligibilityAndFees;

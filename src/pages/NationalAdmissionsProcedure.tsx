import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ShieldCheck, ClipboardCheck, ArrowRight, UserCheck, Landmark, RefreshCw, Info, HelpCircle } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const NationalAdmissionsProcedure = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <SEO
        title="National Admission Procedure – MITS Deemed to be University"
        description="Official national admission policies, quotas, seat matrix, tie-breaker rules, and lateral entry guidelines at MITS."
        canonical="/national-admissions-procedure"
      />
      <Header />

      {/* Hero Section */}
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
          <p className="text-[#ffb300] font-bold tracking-[0.2em] uppercase text-sm sm:text-sm">
            Academic Year 2027-28
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            National <span className="text-[#ffd15c]">Admission Policy</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Official guidelines, seat matrices, admission channels, and direct second-year lateral entry regulations for Indian applicants.
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
              <li className="text-[#ffd15c] font-semibold">National Admission Policy</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Flow Content */}
      <main className="flex-grow container mx-auto px-4 md:px-8 py-12 space-y-12">
        
        {/* Preamble Card */}
        <ScrollReveal>
          <Card className="p-6 md:p-8 border-slate-200 shadow-md bg-white relative overflow-hidden rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#caa74d]" />
            <p className="text-slate-700 leading-relaxed text-sm md:text-base font-sans font-medium">
              This Admission Policy of Madanapalle Institute of Technology &amp; Science (MITS) Deemed to be University, Madanapalle covers admissions into the regular programs offered by the University within the Country, and also the Lateral Entry Admissions into the 2nd year of the B.Tech Program.
            </p>
          </Card>
        </ScrollReveal>

        {/* SECTION A: GENERAL POLICY */}
        <ScrollReveal>
          <div className="space-y-6" id="general-policy">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0f2a44] font-sans border-b border-slate-200 pb-3 flex items-center gap-2">
              <Landmark className="w-6 h-6 text-[#caa74d]" /> A. General Policy
            </h2>
            
            {/* Step List */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-bold text-[#0f2a44] flex items-center gap-2 border-b border-slate-100 pb-2">
                <Info className="w-5 h-5 text-[#caa74d]" /> A.1. Admission Procedure Flow
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans">
                The admissions process at MITS is merit-based and systematically executed through the following stages:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { step: "Notification", desc: "An official admission notification will be published on the institute's website, detailing application timelines, course portfolios, and procedures." },
                  { step: "Application", desc: "Candidates must submit their applications online via the official MITS admission portal, uploading all relevant credentials." },
                  { step: "Entrance Exam / Merit List", desc: "Admissions will be based on the rank secured in the applicable Entrance Tests (e.g., MITSUCET, JEE, or state-level CETs)." },
                  { step: "Direct Merit-Based Selection", desc: "For direct merit channels, a standardized merit list will be prepared based on the aggregate marks scored in the qualifying examination/degree." },
                  { step: "Counselling & Branch Allocation", desc: "Shortlisted candidates will participate in counselling sessions where branches are allotted based on merit rank, category/reservation guidelines, and availability." },
                  { step: "Seat Allotment & Confirmation", desc: "To secure the allotted seat, candidates must pay the tuition and university fees within the specified schedule. Unconfirmed seats forfeit immediately." }
                ].map((s, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200/60 p-5 rounded-xl flex items-start gap-4 hover:bg-slate-100/50 transition-colors duration-200">
                    <span className="w-7 h-7 rounded-full bg-[#0f2a44] text-[#caa74d] flex items-center justify-center font-bold text-sm shrink-0 border border-[#caa74d]/30 shadow-sm">{idx + 1}</span>
                    <div className="space-y-1">
                      <h4 className="font-bold text-[#0f2a44] text-sm md:text-base">{s.step}</h4>
                      <p className="text-sm md:text-sm text-slate-550 leading-relaxed font-sans">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* General Policy Sub-sections */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-slate-200 shadow-md bg-white relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#b31317] group-hover:bg-[#0f2a44] transition-colors duration-300" />
                <h3 className="font-bold text-sm md:text-base text-[#0f2a44] mb-2 pl-2">A.2. Branch Allocation and Change Policy</h3>
                <p className="text-sm md:text-sm text-slate-500 pl-2 leading-relaxed font-sans">
                  Once a branch is officially allotted during the counselling round, requests for branch change will not be permitted under any circumstances.
                </p>
              </Card>

              <Card className="p-6 border-slate-200 shadow-md bg-white relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#b31317] group-hover:bg-[#0f2a44] transition-colors duration-300" />
                <h3 className="font-bold text-sm md:text-base text-[#0f2a44] mb-2 pl-2">A.3. Reservation Policy</h3>
                <p className="text-sm md:text-sm text-slate-500 pl-2 leading-relaxed font-sans">
                  Reservations for SC, ST, OBC, EWS, and Persons with Disabilities (PwD) categories are strictly implemented in alignment with Central Government norms.
                </p>
              </Card>
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION B: NATIONAL ADMISSION POLICY */}
        <ScrollReveal>
          <div className="space-y-6" id="national-policy">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0f2a44] font-sans border-b border-slate-200 pb-3 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#caa74d]" /> B. National Admission Policy
            </h2>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-bold text-[#0f2a44] flex items-center gap-2 border-b border-slate-100 pb-2">
                <UserCheck className="w-5 h-5 text-[#caa74d]" /> B.I. Admissions into Regular Programmes
              </h3>
              
              <h4 className="font-bold text-sm md:text-base text-[#0f2a44]">B.I.1. Program Eligibility &amp; Approved Admission Channels</h4>
              <p className="text-slate-600 text-sm md:text-sm leading-relaxed font-sans">
                Admissions are granted strictly on merit through recognized entrance examinations and qualifying degree performance:
              </p>

              {/* Table of Eligibility */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full border-collapse text-left text-sm md:text-sm">
                  <thead>
                    <tr className="bg-[#0f2a44] text-white">
                      <th className="py-3 px-4 font-bold border border-slate-200 w-1/4">Program</th>
                      <th className="py-3 px-4 font-bold border border-slate-200 w-1/2">Minimum Eligibility (Qualifying Exam)</th>
                      <th className="py-3 px-4 font-bold border border-slate-200 w-1/4">Admission Channels</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50/50 transition-colors duration-150">
                      <td className="py-3 px-4 font-bold text-[#0f2a44] border border-slate-200 text-sm md:text-sm">B.Tech</td>
                      <td className="py-3 px-4 text-slate-600 border border-slate-200 leading-relaxed text-sm md:text-sm font-sans">
                        10+2 with Physics, Mathematics, Chemistry (Min. 50% aggregate).<br />
                        <span className="text-[11px] md:text-sm text-slate-400 font-semibold block mt-1">10+2 with Physics, Chemistry, Biology (PCB) is acceptable for B.Tech in Bioinformatics.</span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-slate-700 border border-slate-200 leading-relaxed text-sm md:text-sm font-sans">MITSUCET, JEE, National Level Entrance tests, State level Entrance tests, 10+2 Merit</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors duration-150">
                      <td className="py-3 px-4 font-bold text-[#0f2a44] border border-slate-200 text-sm md:text-sm">BBA &amp; BCA</td>
                      <td className="py-3 px-4 text-slate-600 border border-slate-200 leading-relaxed text-sm md:text-sm font-sans">10+2 in any stream (Min. 50% aggregate).</td>
                      <td className="py-3 px-4 font-semibold text-slate-700 border border-slate-200 leading-relaxed text-sm md:text-sm font-sans">MITSUCET, 10+2 Merit</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors duration-150">
                      <td className="py-3 px-4 font-bold text-[#0f2a44] border border-slate-200 text-sm md:text-sm">MBA</td>
                      <td className="py-3 px-4 text-slate-600 border border-slate-200 leading-relaxed text-sm md:text-sm font-sans">Bachelor's Degree of minimum 3 years duration (Min. 50% aggregate).</td>
                      <td className="py-3 px-4 font-semibold text-slate-700 border border-slate-200 leading-relaxed text-sm md:text-sm font-sans">National Level Entrance tests, CAT, MAT, State level Entrance tests, MITSUCET, UG Merit</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors duration-150">
                      <td className="py-3 px-4 font-bold text-[#0f2a44] border border-slate-200 text-sm md:text-sm">MCA</td>
                      <td className="py-3 px-4 text-slate-600 border border-slate-200 leading-relaxed text-sm md:text-sm font-sans">BCA/Bachelor Degree in Comp. Sci. OR B.Sc/B.A./B.Com with Math at 10+2 or Undergraduate level (Min. 50%).</td>
                      <td className="py-3 px-4 font-semibold text-slate-700 border border-slate-200 leading-relaxed text-sm md:text-sm font-sans">NIMCET, State level Entrance tests, MITSUCET, UG Merit</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors duration-150">
                      <td className="py-3 px-4 font-bold text-[#0f2a44] border border-slate-200 text-sm md:text-sm">M.Tech</td>
                      <td className="py-3 px-4 text-slate-600 border border-slate-200 leading-relaxed text-sm md:text-sm font-sans">B.E./B.Tech in relevant discipline (Min. 50% aggregate).</td>
                      <td className="py-3 px-4 font-semibold text-slate-700 border border-slate-200 leading-relaxed text-sm md:text-sm font-sans">GATE, State level Entrance tests, UG Merit</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-50 border-l-4 border-[#b31317] rounded-r-xl p-4 text-sm md:text-sm text-slate-600 leading-relaxed font-sans">
                <span className="font-bold text-[#b31317]">Note:</span> A statutory relaxation of 5% in the qualifying examination marks is applicable for reserved categories (SC, ST, OBC) as per Government of India norms.
              </div>
            </div>

            {/* Quota Section */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-6">
              <h4 className="font-bold text-[#0f2a44] text-sm md:text-base">B.I.2. Admission Quota &amp; Seat Matrix</h4>
              <p className="text-slate-600 text-sm md:text-sm leading-relaxed font-sans">
                The approved intake for all academic programs is divided into delineated quotas:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full border-collapse text-left text-sm md:text-sm">
                  <thead>
                    <tr className="bg-[#0f2a44] text-white">
                      <th className="py-3 px-4 font-bold border border-slate-200 w-1/3">Quota Category</th>
                      <th className="py-3 px-4 font-bold border border-slate-200 w-1/4">Seat Allocation</th>
                      <th className="py-3 px-4 font-bold border border-slate-200 w-5/12">Admission Channel / Applicable Exams</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                    <tr className="hover:bg-slate-50/50 transition-colors duration-150">
                      <td className="py-3 px-4 font-bold text-slate-800 border border-slate-200 text-sm md:text-sm">Category B</td>
                      <td className="py-3 px-4 border border-slate-200 text-sm md:text-sm">10% of Total Intake</td>
                      <td className="py-3 px-4 text-slate-600 border border-slate-200 font-normal leading-relaxed text-sm md:text-sm font-sans">Management Quota: Candidates satisfying basic qualifying exam eligibility are exempt from the entrance exam requirement.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors duration-150">
                      <td className="py-3 px-4 font-bold text-slate-800 border border-slate-200 text-sm md:text-sm" rowSpan={5}>Category A (General Merit Quota)</td>
                      <td className="py-3 px-4 border border-slate-200 text-[#0f2a44] font-bold text-sm md:text-sm">90% of Total Intake</td>
                      <td className="py-3 px-4 text-slate-600 border border-slate-200 font-normal leading-relaxed text-sm md:text-sm font-sans">Divided strictly into sub-quotas as detailed below:</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 bg-slate-50/30 transition-colors duration-150">
                      <td className="py-2.5 px-6 border border-slate-200 font-semibold text-slate-800 text-[11px] md:text-sm">└ Sub-Quota A1 (25%)</td>
                      <td className="py-2.5 px-5 text-slate-550 border border-slate-200 font-normal leading-relaxed text-[11px] md:text-sm font-sans">National Level Exams: JEE Main (B.Tech), CAT/MAT (MBA), NIMCET (MCA), GATE (M.Tech).</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 bg-slate-50/30 transition-colors duration-150">
                      <td className="py-2.5 px-6 border border-slate-200 font-semibold text-slate-800 text-[11px] md:text-sm">└ Sub-Quota A2 (45%)</td>
                      <td className="py-2.5 px-5 text-slate-550 border border-slate-200 font-normal leading-relaxed text-[11px] md:text-sm font-sans">University Exam: MITSUCET (Proctored CBT or PBT).</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 bg-slate-50/30 transition-colors duration-150">
                      <td className="py-2.5 px-6 border border-slate-200 font-semibold text-slate-800 text-[11px] md:text-sm">└ Sub-Quota A3 (10%)</td>
                      <td className="py-2.5 px-5 text-slate-550 border border-slate-200 font-normal leading-relaxed text-[11px] md:text-sm font-sans">State Level Exams: State CET (B.Tech), State ICET (MBA/MCA).</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 bg-slate-50/30 transition-colors duration-150">
                      <td className="py-2.5 px-6 border border-slate-200 font-semibold text-slate-800 text-[11px] md:text-sm">└ Sub-Quota A4 (10%)</td>
                      <td className="py-2.5 px-5 text-slate-550 border border-slate-200 font-normal leading-relaxed text-[11px] md:text-sm font-sans">Merit/Qualifying Exam: 10+2 equivalent (UG) or Bachelor's Degree (PG).</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Cascade box */}
              <div className="bg-[#fffcf3] border border-amber-200 rounded-xl p-5 flex items-start gap-4 shadow-sm">
                <RefreshCw className="w-5 h-5 text-amber-600 shrink-0 mt-1 animate-spin-slow" />
                <div className="space-y-2">
                  <h5 className="font-bold text-[#785310] text-sm md:text-base">The Cascade Rule (Sliding Mechanism)</h5>
                  <p className="text-sm md:text-sm text-[#785310]/80 leading-relaxed font-sans">
                    To ensure maximum seat occupancy, vacant seats in any sub-quota automatically cascade to the next in the sequence:
                  </p>
                  <div className="inline-flex items-center gap-2 bg-[#785310] text-white text-[11px] md:text-sm font-extrabold px-4 py-1.5 rounded-full mt-1 shadow-sm">
                    A1 <ArrowRight className="w-3.5 h-3.5" /> A2 <ArrowRight className="w-3.5 h-3.5" /> A3 <ArrowRight className="w-3.5 h-3.5" /> A4
                  </div>
                </div>
              </div>
            </div>

            {/* Tie Breakers */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-6">
              <h4 className="font-bold text-[#0f2a44] text-sm md:text-base">B.I.4. Tie-Breaker Rules (Applicable to All Streams)</h4>
              <p className="text-slate-650 text-sm md:text-sm leading-relaxed font-sans">
                In the event of identical normalized scores or ranks within any sub-quota, the following tie-breaking rules are applied strictly in descending order:
              </p>
              
              <div className="grid md:grid-cols-3 gap-5">
                <div className="border border-slate-200 p-5 bg-slate-50/50 rounded-xl space-y-1.5 hover:border-[#caa74d] transition-colors duration-200">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-red-600">Priority 1</span>
                  <h5 className="font-bold text-[#0f2a44] text-sm md:text-base">Subject Performance</h5>
                  <p className="text-slate-500 text-sm md:text-sm leading-relaxed font-sans">
                    Higher normalized scores or percentages in core subjects. For B.Tech: Higher 10+2 scores in Physics, Chemistry, and Mathematics/Biology.
                  </p>
                </div>
                <div className="border border-slate-200 p-5 bg-slate-50/50 rounded-xl space-y-1.5 hover:border-[#caa74d] transition-colors duration-200">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-red-600">Priority 2</span>
                  <h5 className="font-bold text-[#0f2a44] text-sm md:text-base">Candidate Age</h5>
                  <p className="text-slate-500 text-sm md:text-sm leading-relaxed font-sans">
                    If a tie persists after reviewing core subject performance, the older candidate by date of birth is given preference.
                  </p>
                </div>
                <div className="border border-slate-200 p-5 bg-slate-50/50 rounded-xl space-y-1.5 hover:border-[#caa74d] transition-colors duration-200">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-red-600">Priority 3</span>
                  <h5 className="font-bold text-[#0f2a44] text-sm md:text-base">Registration Date</h5>
                  <p className="text-slate-500 text-sm md:text-sm leading-relaxed font-sans">
                    As a final measure, the candidate with the lower registration number (i.e. chronologically earlier application registration) will be ranked higher.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION C: LATERAL ENTRY */}
        <ScrollReveal>
          <div className="space-y-6" id="lateral-entry">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0f2a44] font-sans border-b border-slate-200 pb-3 flex items-center gap-2">
              <ClipboardCheck className="w-6 h-6 text-[#caa74d]" /> B.II. B.Tech Lateral Entry (Direct Second Year)
            </h2>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-6">
              <div className="flex flex-wrap gap-2.5">
                <Badge className="bg-[#0f2a44] text-white text-sm px-3 py-1">Applicable Programs: B.Tech (All Branches)</Badge>
                <Badge className="bg-[#caa74d] text-[#0f2a44] text-sm px-3 py-1">Entry Level: Second Year (3rd Semester)</Badge>
              </div>

              <h3 className="text-base md:text-lg font-bold text-[#0f2a44]">B.II.1. Intake Capacity</h3>
              <p className="text-slate-655 text-sm md:text-sm leading-relaxed font-sans">
                Lateral entry admissions are subject to seat availability and statutory body guidelines:
              </p>
              <ul className="space-y-2.5 pl-1 text-slate-500 text-sm md:text-sm font-sans">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#caa74d] mt-1.5 shrink-0" />
                  <span><strong className="text-slate-700">Supernumerary Seats:</strong> Up to 10% of the approved intake capacity of the previous academic year for each branch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#caa74d] mt-1.5 shrink-0" />
                  <span><strong className="text-slate-700">Vacant Seats:</strong> Any unfilled or vacant seats carried forward from the first year of the respective B.Tech program.</span>
                </li>
              </ul>

              <h3 className="text-base md:text-lg font-bold text-[#0f2a44] pt-2">B.II.2. Minimum Eligibility (Qualifying Exam)</h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="border border-slate-200 p-5 rounded-xl bg-white shadow-sm hover:border-[#caa74d] transition-colors duration-200">
                  <h4 className="font-bold text-[#0f2a44] text-sm md:text-base">Diploma Holders</h4>
                  <p className="text-slate-500 text-sm md:text-sm leading-relaxed mt-2 font-sans">
                    Passed a minimum 3-year / 2-year (Lateral Entry) Diploma examination with at least 50% marks (45% for candidates belonging to SC/ST/OBC categories) in any branch of Engineering and Technology.
                  </p>
                </div>
                <div className="border border-slate-200 p-5 rounded-xl bg-white shadow-sm hover:border-[#caa74d] transition-colors duration-200">
                  <h4 className="font-bold text-[#0f2a44] text-sm md:text-base">B.Sc. Graduates</h4>
                  <p className="text-slate-500 text-sm md:text-sm leading-relaxed mt-2 font-sans">
                    Passed B.Sc. Degree from a recognized University (as defined by UGC) with at least 50% marks (45% for candidates belonging to SC/ST/OBC categories) and passed 10+2 examination with Mathematics as a subject.<br />
                    <span className="text-[11px] md:text-sm text-red-650 font-semibold block mt-2.5 bg-red-50/50 p-2.5 rounded-lg border border-red-100">Note: B.Sc. stream students shall clear Engineering Graphics / Drawing and Engineering Mechanics of the 1st year along with 2nd year subjects.</span>
                  </p>
                </div>
              </div>

              <h3 className="text-base md:text-lg font-bold text-[#0f2a44] pt-2">B.II.3. Quota Allocation</h3>
              <p className="text-slate-655 text-sm md:text-sm leading-relaxed font-sans">
                The approved intake for lateral entry is divided into three legally delineated quotas:
              </p>
              
              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full border-collapse text-left text-sm md:text-sm">
                  <thead>
                    <tr className="bg-[#0f2a44] text-white">
                      <th className="py-3 px-4 font-bold border border-slate-200 w-12 text-center">Sl.</th>
                      <th className="py-3 px-4 font-bold border border-slate-200 w-1/3">Quota Category</th>
                      <th className="py-3 px-4 font-bold border border-slate-200 w-1/4">Intake Allocation</th>
                      <th className="py-3 px-4 font-bold border border-slate-200">Admission Channel / Criteria</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
                    <tr className="hover:bg-slate-50/50 transition-colors duration-150">
                      <td className="py-3 px-4 text-center border border-slate-200 font-bold">1</td>
                      <td className="py-3 px-4 border border-slate-200 font-bold text-slate-800 text-sm md:text-sm">Management Quota</td>
                      <td className="py-3 px-4 border border-slate-200 text-sm md:text-sm">20% of Total LE Intake</td>
                      <td className="py-3 px-4 text-slate-550 border border-slate-200 font-normal leading-relaxed text-sm md:text-sm font-sans">Exempt from entrance exam mandate; satisfying basic diploma qualifying criteria.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors duration-150">
                      <td className="py-3 px-4 text-center border border-slate-200 font-bold">2</td>
                      <td className="py-3 px-4 border border-slate-200 font-bold text-slate-800 text-sm md:text-sm">Entrance Exam Merit Quota</td>
                      <td className="py-3 px-4 border border-slate-200 text-sm md:text-sm">40% of Total LE Intake</td>
                      <td className="py-3 px-4 text-slate-550 border border-slate-200 font-normal leading-relaxed text-sm md:text-sm font-sans">Ranked strictly based on performance in recognized State Level Lateral Entry Exams (e.g. AP ECET) or the University Entrance Exam.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors duration-150">
                      <td className="py-3 px-4 text-center border border-slate-200 font-bold">3</td>
                      <td className="py-3 px-4 border border-slate-200 font-bold text-slate-800 text-sm md:text-sm">Diploma Merit Quota</td>
                      <td className="py-3 px-4 border border-slate-200 text-sm md:text-sm">40% of Total LE Intake</td>
                      <td className="py-3 px-4 text-slate-550 border border-slate-200 font-normal leading-relaxed text-sm md:text-sm font-sans">Ranked strictly based on the academic merit (aggregate percentage) achieved in the qualifying Engineering Diploma.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* LE Cascade & Tie Breaker */}
              <div className="grid md:grid-cols-2 gap-5 pt-2">
                <div className="bg-[#fffcf3] border border-amber-200 rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-[#785310] text-sm md:text-base font-sans">B.II.4. The Cascade Rule</h4>
                  <p className="text-sm md:text-sm text-[#785310]/80 mt-1.5 leading-relaxed font-sans">
                    If seats remain vacant in the Entrance Exam Merit Quota after the final round of counselling, those vacant seats will automatically cascade to the Diploma Merit Quota.
                  </p>
                </div>
                <div className="bg-[#fffcf3] border border-amber-200 rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-[#785310] text-sm md:text-base font-sans">B.II.5. Tie-Breaker Rule</h4>
                  <p className="text-sm md:text-sm text-[#785310]/80 mt-1.5 leading-relaxed font-sans">
                    In the event of identical normalized scores or ranks within any sub-quota, the candidate with the lower, chronologically earlier application registration number will be ranked higher.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION D: REFUND POLICY */}
        <ScrollReveal>
          <div className="space-y-6" id="refund-policy">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0f2a44] font-sans border-b border-slate-200 pb-3 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#caa74d]" /> Fee Refund Policy
            </h2>

            <Card className="p-6 md:p-8 border-slate-200 shadow-md bg-white relative overflow-hidden rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#b31317]" />
              <h3 className="font-bold text-[#0f2a44] text-base md:text-lg mb-2">UGC Aligned Refund Terms</h3>
              <p className="text-slate-655 leading-relaxed text-sm md:text-sm font-sans">
                Cancellations and refunds are processed strictly aligned with the prevailing UGC Notification/Circular (D.O.No.F.2-71/2022 (CPP-II) (c-114546) Dated 12.06.2024) on the Refund of Fees and Non-Retention of Original Certificates. Standard percentages of fee refunds shall be applicable as per the statutory mandate.
              </p>
            </Card>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
};

export default NationalAdmissionsProcedure;

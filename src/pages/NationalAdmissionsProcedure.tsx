import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import {
  Landmark,
  ShieldCheck,
  GraduationCap,
  Scale,
  Award,
  Info,
  Layers,
  ArrowRight,
  CheckCircle2,
  GitMerge,
  BookOpen,
} from "lucide-react";

const BASE = "https://mits.edu/";

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
            AY 2026-27
          </p>
          <h1
            className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            National <span className="text-[#ffd15c]">Admission Policy</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            For Academic Programs: B.Tech, BBA, BCA, M.Tech, MBA, MCA · MITS Deemed to be University · Madanapalle
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

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 md:px-8 py-12 space-y-12">
        {/* Preamble Card */}
        <ScrollReveal>
          <Card className="p-6 md:p-8 border-slate-200 shadow-md bg-white relative overflow-hidden rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#caa74d]" />
            <h2 className="text-[#0f2a44] font-bold text-base md:text-lg mb-2 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#caa74d]" /> Preamble
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base font-sans">
              This Admission Policy of Madanapalle Institute of Technology &amp; Science (MITS) Deemed to be
              University, Madanapalle covers admissions into the regular programs offered by the University within
              the Country and for International Students, and also the Lateral Entry Admissions into the 2nd year of
              the B.Tech Program.
            </p>
          </Card>
        </ScrollReveal>

        {/* Section A: General Policy */}
        <ScrollReveal>
          <div className="space-y-6" id="general-policy">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0f2a44] font-sans border-b border-slate-200 pb-3 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#caa74d]" /> A. General Policy
            </h2>

            {/* A.1. Admission Procedure */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-4 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-bold text-[#0f2a44] flex items-center gap-2 border-b border-slate-100 pb-2">
                <Layers className="w-5 h-5 text-[#caa74d]" /> A.1. Admission Procedure
              </h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                The admission process is merit-based and follows these sequential steps:
              </p>
              <div className="grid gap-3 pt-2">
                {[
                  {
                    title: "Notification",
                    text: "An official admission notification will be published on the institute's website.",
                  },
                  {
                    title: "Application",
                    text: "Candidates must submit their applications online via the admission portal.",
                  },
                  {
                    title: "Entrance Examination / Merit List",
                    text: "Admissions will be based on the rank secured in the applicable Tests.",
                  },
                  {
                    title: "Direct Merit-Based",
                    text: "If direct merit-based, a merit list will be prepared based on the aggregate marks scored in the qualifying examination/degree.",
                  },
                  {
                    title: "Counselling",
                    text: "Shortlisted candidates will be invited for counselling rounds where branch allocation will be finalized based on merit rank, category/reservation norms, and seat availability.",
                  },
                  {
                    title: "Seat Allotment & Fee Payment",
                    text: "Upon seat allotment, candidates must secure their admission by paying the stipulated tuition and admission fees within the given timeframe. Failure to do so will result in the forfeiture of the seat.",
                  },
                ].map((step, index) => (
                  <div
                    key={step.title}
                    className="flex items-start gap-3.5 bg-slate-50/70 p-3.5 rounded-xl border border-slate-200 hover:border-[#caa74d] transition-all duration-200"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0f2a44] text-[#caa74d] text-xs font-bold shadow-sm">
                      {index + 1}
                    </span>
                    <div className="text-sm md:text-sm leading-relaxed text-slate-700">
                      <strong className="text-[#0f2a44] font-bold">{step.title}:</strong> {step.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* A.2 and A.3 Grid Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-3 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-[#0f2a44] flex items-center gap-2 border-b border-slate-100 pb-2">
                  <GitMerge className="w-5 h-5 text-[#caa74d]" /> A.2. Branch Allocation and Change Policy
                </h3>
                <p className="text-slate-700 text-sm md:text-sm leading-relaxed font-sans">
                  Once a branch is allotted during admission, no branch change will be permitted under any circumstances.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-3 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-[#0f2a44] flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Scale className="w-5 h-5 text-[#caa74d]" /> A.3. Reservation Policy
                </h3>
                <p className="text-slate-700 text-sm md:text-sm leading-relaxed font-sans">
                  Reservations for SC, ST, OBC, EWS, and Persons with Disabilities (PwD) categories will be strictly
                  implemented as per the norms defined by the Central Government.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Section B: National Admission Policy */}
        <ScrollReveal>
          <div className="space-y-6" id="national-policy">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0f2a44] font-sans border-b border-slate-200 pb-3 flex items-center gap-2">
              <GraduationCap className="w-7 h-7 text-[#caa74d]" /> B. National Admission Policy
            </h2>

            {/* B.I. Admissions into the Regular Programmes */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-6 hover:shadow-lg transition-shadow duration-300">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-lg md:text-xl font-bold text-[#0f2a44]">
                  B.I. Admissions into the Regular Programmes
                </h3>
                <h4 className="mt-2 text-sm md:text-base font-semibold text-[#8C0509]">
                  B.I.1. Program Eligibility &amp; Approved Admission Channels
                </h4>
                <p className="mt-1 text-slate-700 text-sm md:text-sm leading-relaxed font-sans">
                  Admissions are granted strictly on merit through recognized entrance examinations and qualifying
                  degree performance.
                </p>
              </div>

              {/* Table 1: Program Eligibility */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#0f2a44] text-white">
                      <th className="px-4 py-3.5 font-bold text-xs md:text-sm tracking-wide">Program</th>
                      <th className="px-4 py-3.5 font-bold text-xs md:text-sm tracking-wide">
                        Minimum Eligibility (Qualifying Exam)
                      </th>
                      <th className="px-4 py-3.5 font-bold text-xs md:text-sm tracking-wide">
                        Admission Channels
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 font-sans">
                    <tr className="bg-white hover:bg-[#fffdf8] transition-colors">
                      <td className="px-4 py-3.5 font-bold text-[#0f2a44] align-top whitespace-nowrap">B.Tech</td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        10+2 with Physics, Mathematics, Chemistry (Min. 45% aggregate).
                        <br />
                        10+2 with Physics, Chemistry, Biology (PCB) for B.Tech in Bioinformatics (Min. 45% aggregate).
                      </td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        MITSUCET, JEE, National Level Entrance tests, State level Entrance tests, 10+2 Merit
                      </td>
                    </tr>
                    <tr className="bg-slate-50/60 hover:bg-[#fffdf8] transition-colors">
                      <td className="px-4 py-3.5 font-bold text-[#0f2a44] align-top whitespace-nowrap">BBA &amp; BCA</td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        10+2 in any stream (Min. 45% aggregate).
                      </td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        MITSUCET, 10+2 Merit
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-[#fffdf8] transition-colors">
                      <td className="px-4 py-3.5 font-bold text-[#0f2a44] align-top whitespace-nowrap">MBA</td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        Bachelor's Degree of minimum 3 years duration (Min. 50% aggregate).
                      </td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        National Level Entrance tests, CAT, MAT, State level Entrance tests, MITSUCET, UG Merit
                      </td>
                    </tr>
                    <tr className="bg-slate-50/60 hover:bg-[#fffdf8] transition-colors">
                      <td className="px-4 py-3.5 font-bold text-[#0f2a44] align-top whitespace-nowrap">MCA</td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        BCA/Bachelor Degree in Comp. Sci. OR B.Sc/B.A./B.Com with Math at 10+2 or Undergraduate level (Min. 50%).
                      </td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        NIMCET, State level Entrance tests, MITSUCET, UG Merit
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-[#fffdf8] transition-colors">
                      <td className="px-4 py-3.5 font-bold text-[#0f2a44] align-top whitespace-nowrap">M.Tech</td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        B.E./B.Tech in relevant discipline (Min. 50% aggregate).
                        <br />
                        M.Tech CSE and M.Tech CSE-AI&amp;ML: Candidates who have completed B.E./B.Tech in Computer Science &amp;
                        Engineering and allied branches, ECE, EEE, MCA (Master of Computer Applications), M.Sc. Computer
                        Science / IT / Software Engineering / Data Science or related branches are eligible.
                      </td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        GATE, State level Entrance tests, UG Merit
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Note */}
              <div className="bg-[#fffcf3] border border-amber-200 rounded-xl p-4 text-sm md:text-sm text-[#785310] leading-relaxed shadow-sm font-sans">
                <strong>Note:</strong> A statutory relaxation of 5% in the qualifying examination marks is applicable for
                reserved categories (SC, ST, OBC) as per Government of India norms.
              </div>
            </div>

            {/* B.I.2. Admission Quota & Seat Matrix */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-6 hover:shadow-lg transition-shadow duration-300">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-base md:text-lg font-bold text-[#0f2a44]">
                  B.I.2. Admission Quota &amp; Seat Matrix
                </h3>
                <p className="mt-1 text-slate-700 text-sm md:text-sm leading-relaxed font-sans">
                  The approved intake for all academic programs is divided into delineated quotas.
                </p>
              </div>

              {/* Table 2: Quota & Seat Matrix */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#0f2a44] text-white">
                      <th className="px-4 py-3.5 font-bold text-xs md:text-sm tracking-wide">Quota Category</th>
                      <th className="px-4 py-3.5 font-bold text-xs md:text-sm tracking-wide">Sub-Quota Allocation</th>
                      <th className="px-4 py-3.5 font-bold text-xs md:text-sm tracking-wide">
                        Admission Channel / Applicable Exams
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 font-sans">
                    <tr className="bg-white hover:bg-[#fffdf8] transition-colors">
                      <td className="px-4 py-3.5 font-bold text-[#0f2a44] align-top">Category B</td>
                      <td className="px-4 py-3.5 align-top whitespace-nowrap font-semibold text-[#8C0509]">
                        10% of Total Intake
                      </td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        Management: Exempt from entrance exam mandate; satisfying qualifying criteria.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/60 hover:bg-[#fffdf8] transition-colors">
                      <td className="px-4 py-3.5 font-bold text-[#0f2a44] align-top">
                        Category A (General Merit Quota)
                      </td>
                      <td className="px-4 py-3.5 align-top whitespace-nowrap font-semibold text-[#0f2a44]">
                        90% of Total Intake
                      </td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        Divided strictly into sub-quotas as detailed below.
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-[#fffdf8] transition-colors">
                      <td className="px-4 py-3.5 pl-8 text-slate-700 align-top">Sub-Quota A1</td>
                      <td className="px-4 py-3.5 align-top whitespace-nowrap">25% of Total Intake</td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        National Level Exams: JEE Main (B.Tech), CAT/MAT (MBA), NIMCET (MCA), GATE (M.Tech).
                      </td>
                    </tr>
                    <tr className="bg-slate-50/60 hover:bg-[#fffdf8] transition-colors">
                      <td className="px-4 py-3.5 pl-8 text-slate-700 align-top">Sub-Quota A2</td>
                      <td className="px-4 py-3.5 align-top whitespace-nowrap">45% of Total Intake</td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        University Exam: MITSUCET (Proctored CBT or PBT).
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-[#fffdf8] transition-colors">
                      <td className="px-4 py-3.5 pl-8 text-slate-700 align-top">Sub-Quota A3</td>
                      <td className="px-4 py-3.5 align-top whitespace-nowrap">10% of Total Intake</td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        State Level Exams: State CET (B.Tech), State ICET (MBA/MCA).
                      </td>
                    </tr>
                    <tr className="bg-slate-50/60 hover:bg-[#fffdf8] transition-colors">
                      <td className="px-4 py-3.5 pl-8 text-slate-700 align-top">Sub-Quota A4</td>
                      <td className="px-4 py-3.5 align-top whitespace-nowrap">10% of Total Intake</td>
                      <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                        Merit/Qualifying Exam: 10+2 equivalent (UG) or Bachelor's Degree (PG).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* The Cascade Rule */}
              <div className="bg-red-50/70 border border-red-200/80 rounded-2xl p-5 md:p-6 space-y-3 shadow-sm">
                <h4 className="font-bold text-[#8C0509] text-base flex items-center gap-2">
                  <GitMerge className="w-5 h-5 text-[#8C0509]" /> The Cascade Rule (Sliding Mechanism)
                </h4>
                <p className="text-slate-700 text-sm md:text-sm leading-relaxed font-sans">
                  To ensure maximum seat occupancy, vacant seats in any sub-quota automatically cascade to the next in the sequence:
                </p>
                <div className="pt-1 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#8C0509] text-white font-bold text-xs sm:text-sm shadow-sm">
                    A1 <ArrowRight className="w-3.5 h-3.5" /> A2 <ArrowRight className="w-3.5 h-3.5" /> A3{" "}
                    <ArrowRight className="w-3.5 h-3.5" /> A4
                  </span>
                </div>
              </div>

              {/* B.I.4. Tie-Breaker Rules */}
              <div className="pt-4 border-t border-slate-200 space-y-4">
                <h4 className="text-base md:text-lg font-bold text-[#0f2a44] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#caa74d]" /> B.I.4. Tie-Breaker Rules (Applicable to All Streams)
                </h4>
                <p className="text-slate-700 text-sm md:text-sm leading-relaxed font-sans">
                  In the event of identical normalized scores or ranks within any sub-quota, the following tie-breaking
                  rules are applied strictly in descending order:
                </p>
                <div className="grid gap-3 pt-1">
                  {[
                    {
                      title: "Subject-Specific Performance:",
                      text: "Priority is given to candidates with higher normalized scores or percentages in core subjects relevant to their chosen field. For B.Tech admission: higher 10+2 scores in Physics, Chemistry, and Mathematics/Biology.",
                    },
                    {
                      title: "Candidate Age:",
                      text: "If a tie persists after reviewing core subject performance, the older candidate by date of birth is given preference.",
                    },
                    {
                      title: "Application Chronology:",
                      text: "As a final measure, the candidate with the lower registration number (i.e. chronologically earlier application registration number) will be ranked higher.",
                    },
                  ].map((rule, idx) => (
                    <div
                      key={rule.title}
                      className="border border-slate-200 p-4 bg-slate-50/60 rounded-xl flex items-start gap-3.5 hover:border-[#caa74d] transition-colors duration-200"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#caa74d] text-[#0f2a44] text-xs font-bold mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="text-sm md:text-sm leading-relaxed text-slate-700 font-sans">
                        <strong className="text-[#8C0509] font-bold">{rule.title}</strong> {rule.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* B.II. B.Tech Lateral Entry (Direct Second Year) */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-6 hover:shadow-lg transition-shadow duration-300">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-lg md:text-xl font-bold text-[#0f2a44] flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#caa74d]" /> B.II. B.Tech Lateral Entry (Direct Second Year)
                </h3>
                <p className="mt-1 text-xs md:text-sm font-semibold text-[#8C0509]">
                  Applicable Programs: B.Tech (All Branches) · Entry Level: Second Year (3rd Semester)
                </p>
              </div>

              {/* B.II.1. Intake Capacity */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-[#0f2a44]">B.II.1. Intake Capacity</h4>
                <p className="text-slate-700 text-sm md:text-sm leading-relaxed font-sans">
                  Lateral entry admissions are subject to seat availability and statutory body guidelines:
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-1">
                  <div className="border border-slate-200 p-4 bg-slate-50/60 rounded-xl flex items-start gap-3 hover:border-[#caa74d] transition-colors duration-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div className="text-sm md:text-sm leading-relaxed text-slate-700 font-sans">
                      <strong className="text-[#0f2a44] font-bold">Supernumerary Seats:</strong> Up to 10% of the
                      approved intake capacity of the previous academic year for each branch.
                    </div>
                  </div>
                  <div className="border border-slate-200 p-4 bg-slate-50/60 rounded-xl flex items-start gap-3 hover:border-[#caa74d] transition-colors duration-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div className="text-sm md:text-sm leading-relaxed text-slate-700 font-sans">
                      <strong className="text-[#0f2a44] font-bold">Vacant Seats:</strong> Any unfilled or vacant seats
                      carried forward from the first year of the respective B.Tech program.
                    </div>
                  </div>
                </div>
              </div>

              {/* B.II.2. Minimum Eligibility (Qualifying Exam) */}
              <div className="space-y-3 pt-3 border-t border-slate-200">
                <h4 className="text-base font-bold text-[#0f2a44]">
                  B.II.2. Minimum Eligibility (Qualifying Exam)
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-slate-200 p-4 bg-slate-50/60 rounded-xl space-y-1.5 hover:border-[#caa74d] transition-colors duration-200">
                    <h5 className="font-bold text-[#0f2a44] text-sm md:text-base">Diploma Holders</h5>
                    <p className="text-slate-700 text-sm md:text-sm leading-relaxed font-sans">
                      Passed a minimum 3-year / 2-year (Lateral Entry) Diploma examination with at least 50% marks in any
                      branch of Engineering and Technology.
                    </p>
                  </div>
                  <div className="border border-slate-200 p-4 bg-slate-50/60 rounded-xl space-y-1.5 hover:border-[#caa74d] transition-colors duration-200">
                    <h5 className="font-bold text-[#0f2a44] text-sm md:text-base">B.Sc. Graduates</h5>
                    <p className="text-slate-700 text-sm md:text-sm leading-relaxed font-sans">
                      Passed B.Sc. Degree from a recognized University (as defined by UGC) with at least 50% marks and
                      passed 10+2 examination with Mathematics as a subject.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50/70 border border-red-200/80 rounded-xl p-4 text-sm md:text-sm text-red-800 leading-relaxed shadow-sm font-sans">
                  <strong className="text-[#8C0509]">Note:</strong> B.Sc. stream students shall clear Engineering
                  Graphics/Engineering Drawing and Engineering Mechanics of the First-Year Engineering Programme along
                  with Second-Year subjects.
                </div>

                <div className="bg-[#fffcf3] border border-amber-200 rounded-xl p-4 text-sm md:text-sm text-[#785310] leading-relaxed shadow-sm font-sans">
                  <strong>Statutory Relaxation:</strong> A statutory relaxation of 5% in the qualifying examination
                  marks is applicable for reserved categories as per Government of India norms.
                </div>
              </div>

              {/* B.II.3. Quota Allocation */}
              <div className="space-y-3 pt-3 border-t border-slate-200">
                <h4 className="text-base font-bold text-[#0f2a44]">B.II.3. Quota Allocation</h4>
                <p className="text-slate-700 text-sm md:text-sm leading-relaxed font-sans">
                  The approved intake for lateral entry is divided into three legally delineated quotas:
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#0f2a44] text-white">
                        <th className="px-4 py-3.5 font-bold text-xs md:text-sm tracking-wide">Sl. No.</th>
                        <th className="px-4 py-3.5 font-bold text-xs md:text-sm tracking-wide">Quota Category</th>
                        <th className="px-4 py-3.5 font-bold text-xs md:text-sm tracking-wide">Sub-Quota Allocation</th>
                        <th className="px-4 py-3.5 font-bold text-xs md:text-sm tracking-wide">
                          Admission Channel / Criteria
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-sans">
                      <tr className="bg-white hover:bg-[#fffdf8] transition-colors">
                        <td className="px-4 py-3.5 font-bold text-[#0f2a44] align-top">1.</td>
                        <td className="px-4 py-3.5 font-bold text-[#0f2a44] align-top whitespace-nowrap">
                          Management Quota
                        </td>
                        <td className="px-4 py-3.5 align-top whitespace-nowrap font-semibold text-[#8C0509]">
                          20% of Total LE Intake
                        </td>
                        <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                          Exempt from entrance exam mandate; satisfying basic diploma qualifying criteria.
                        </td>
                      </tr>
                      <tr className="bg-slate-50/60 hover:bg-[#fffdf8] transition-colors">
                        <td className="px-4 py-3.5 font-bold text-[#0f2a44] align-top">2.</td>
                        <td className="px-4 py-3.5 font-bold text-[#0f2a44] align-top whitespace-nowrap">
                          Entrance Exam Merit Quota
                        </td>
                        <td className="px-4 py-3.5 align-top whitespace-nowrap font-semibold text-[#0f2a44]">
                          40% of Total LE Intake
                        </td>
                        <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                          Ranked strictly based on performance in recognized State Level Lateral Entry Exams (e.g., AP
                          ECET) or the University Entrance Exam.
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-[#fffdf8] transition-colors">
                        <td className="px-4 py-3.5 font-bold text-[#0f2a44] align-top">3.</td>
                        <td className="px-4 py-3.5 font-bold text-[#0f2a44] align-top whitespace-nowrap">
                          Diploma Merit Quota
                        </td>
                        <td className="px-4 py-3.5 align-top whitespace-nowrap font-semibold text-[#0f2a44]">
                          40% of Total LE Intake
                        </td>
                        <td className="px-4 py-3.5 align-top leading-relaxed text-xs md:text-sm">
                          Ranked strictly based on the academic merit (aggregate percentage) achieved in the qualifying
                          Engineering Diploma.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* B.II.4. The Cascade Rule */}
              <div className="space-y-2 pt-3 border-t border-slate-200">
                <h4 className="text-base font-bold text-[#0f2a44] flex items-center gap-2">
                  <GitMerge className="w-5 h-5 text-[#caa74d]" /> B.II.4. The Cascade Rule (Sliding Mechanism)
                </h4>
                <p className="text-slate-700 text-sm md:text-sm leading-relaxed font-sans">
                  To ensure maximum seat occupancy, if seats remain vacant in the Entrance Exam Merit Quota after the
                  final round of counselling, those vacant seats will automatically cascade to the Diploma Merit Quota.
                </p>
              </div>

              {/* B.II.5. Tie-Breaker Rule */}
              <div className="space-y-2 pt-3 border-t border-slate-200">
                <h4 className="text-base font-bold text-[#0f2a44] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#caa74d]" /> B.II.5. Tie-Breaker Rule (Applicable to All Lateral Entry Streams)
                </h4>
                <p className="text-slate-700 text-sm md:text-sm leading-relaxed font-sans">
                  In the event of identical normalized scores or ranks within any sub-quota, the following tie-breaking
                  rule is applied: the candidate with the lower, chronologically earlier application registration number
                  will be ranked higher.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Fee Refund Policy Section */}
        <ScrollReveal>
          <div className="space-y-6" id="refund-policy">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0f2a44] font-sans border-b border-slate-200 pb-3 flex items-center gap-2">
              <Scale className="w-6 h-6 text-[#caa74d]" /> Fee Refund Policy
            </h2>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-4 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#8C0509]" />
              <div className="space-y-2 text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                <strong className="text-[#8C0509] font-bold">Fee Refund Policy:</strong>{" "}
                Cancellations and refunds are processed strictly aligned with the prevailing UGC Notification/Circular
                (D.O.No.F.2-71/2022 (CPP-II) (c-114546) Dated 12.06.2024) on the Refund of Fees and Non-Retention of
                Original Certificates. Standard percentages of fee refunds shall be applicable as per the mandate.
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
};

export default NationalAdmissionsProcedure;

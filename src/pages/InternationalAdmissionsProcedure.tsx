import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Globe, ShieldCheck, Landmark, CheckCircle2, UserCheck, Compass, GraduationCap, Scale, Award, Info } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const InternationalAdmissionsProcedure = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <SEO
        title="International Admission Procedure – MITS Deemed to be University"
        description="Official international admission framework, NRI sponsorship, visa registration, AIU equivalency, and GCE A-Levels requirements."
        canonical="/international-admissions-procedure"
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
            International <span className="text-[#ffd15c]">Admission Policy</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            NRI quotas, foreign national sponsorships, academic equivalency criteria, and immigration rules for global applicants.
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
              <li className="text-[#ffd15c] font-semibold">International Admission Policy</li>
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
            <h2 className="text-[#0f2a44] font-bold text-base md:text-lg mb-2 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#caa74d]" /> Preamble &amp; Regulatory Compliance
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-sm font-sans">
              This Admission Policy of Madanapalle Institute of Technology &amp; Science (MITS) Deemed to be University, Madanapalle covers admissions into regular programs for International Students, including Lateral Entry Admissions into the 2nd year of the B.Tech program. This framework governs the admission of international applicants to ensure a transparent, merit-based, and equitable process.
            </p>
          </Card>
        </ScrollReveal>

        {/* Categories & Eligibility */}
        <ScrollReveal>
          <div className="space-y-6" id="seat-allocation">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0f2a44] font-sans border-b border-slate-200 pb-3 flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-[#caa74d]" /> Category &amp; Seat Allocation
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Who Can Apply */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-4 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-[#0f2a44] flex items-center gap-2 border-b border-slate-100 pb-2">
                  <ShieldCheck className="w-5 h-5 text-[#caa74d]" /> Who Can Apply
                </h3>
                <p className="text-slate-655 text-sm md:text-sm leading-relaxed font-sans">
                  MITS admits candidates under the Foreign / NRI category (International) strictly on fulfilling the designated eligibility requirements. Seats are exclusively available for:
                </p>
                <div className="space-y-2 pt-2 text-sm md:text-sm font-bold text-[#0f2a44] font-sans">
                  {["Foreign Nationals", "Candidates with NRI status", "Candidates sponsored by relatives with NRI status", "Overseas Citizen of India (OCI)", "Persons of Indian Origin (PIO)"].map((cat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-200 hover:border-[#caa74d] transition-all duration-200">
                      <span className="w-2 h-2 rounded-full bg-[#caa74d] shrink-0" />
                      <span>{cat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Allocation & Process */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-4 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-[#0f2a44] flex items-center gap-2 border-b border-slate-100 pb-2 mb-2">
                    <Globe className="w-5 h-5 text-[#caa74d]" /> Allocation &amp; Process
                  </h3>
                  <ul className="space-y-3 pl-1 text-slate-500 text-sm md:text-sm leading-relaxed font-sans">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#caa74d] mt-1.5 shrink-0" />
                      <span><strong className="text-slate-700 font-bold">Seat Quota:</strong> MITS allocates 15% of seats under the Foreign / NRI category.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#caa74d] mt-1.5 shrink-0" />
                      <span><strong className="text-slate-700 font-bold">NRI Sponsorship:</strong> Sponsored candidates may be backed by parents, siblings of parents, siblings of the candidate, grandparents, or the spouse. The sponsor must hold verified NRI status.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#caa74d] mt-1.5 shrink-0" />
                      <span><strong className="text-slate-700 font-bold">Merit-Based Process:</strong> Applications are processed on a first-come-first-serve merit basis of qualifying exams.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#caa74d] mt-1.5 shrink-0" />
                      <span><strong className="text-slate-700 font-bold">Entrance Exams:</strong> There will be <span className="text-[#b31317] font-bold">NO entrance examinations</span> for this category.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-150 rounded-xl p-4 text-sm md:text-sm text-red-800 leading-relaxed font-bold mt-3 shadow-sm font-sans">
                  Exclusivity Rule: Candidates confirming admission here by paying the first-year fee cannot simultaneously hold an admission under the General Merit category.
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Academic Eligibility */}
        <ScrollReveal>
          <div className="space-y-6" id="academic-qualifications">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0f2a44] font-sans border-b border-slate-200 pb-3 flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-[#caa74d]" /> Academic Qualifications
            </h2>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-4 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-bold text-[#0f2a44] flex items-center gap-2 border-b border-slate-100 pb-2">
                <Info className="w-5 h-5 text-[#caa74d]" /> General Qualifications &amp; Equivalence
              </h3>
              <p className="text-slate-700 text-sm md:text-sm leading-relaxed font-sans">
                Applicants seeking admission to UG or PG programs must have obtained their qualifications from a recognized Board or University. For PG programs (MBA, MCA, M.Tech), candidates <strong className="text-[#0f2a44] font-bold">MUST</strong> possess a Bachelor's degree of a minimum 3 years' duration from a recognized University.
              </p>
              <div className="bg-[#fffcf3] border border-amber-200 rounded-xl p-4 text-sm md:text-sm text-[#785310] leading-relaxed font-bold shadow-sm font-sans">
                Equivalency Mandate: Candidates with foreign qualifications must submit an equivalency certificate from the Association of Indian Universities (AIU), New Delhi.
              </div>
            </div>

            {/* UG Qualifications */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-bold text-[#0f2a44] border-b border-slate-100 pb-2">Undergraduate (UG) Admission Qualifications</h3>
              <p className="text-slate-655 text-sm md:text-sm leading-relaxed font-sans">
                The following Boards/Qualifications are officially recognized:
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  "10+2 of India obtained from recognized Central (CBSE / ISC) or State Boards.",
                  "GCE 'A' Levels & International Baccalaureate (IB).",
                  "12 Year High School Diploma from accredited Schools of USA.",
                  "12 years General Secondary Education Certificate of the Ministry of Education — Bahrain, Egypt, Jordan, Kuwait, Oman, Saudi Arabia, UAE, and other Gulf countries.",
                  "Intermediate / Senior Secondary / Higher Secondary examinations of approved Boards in Bangladesh, Bhutan, Nepal, etc."
                ].map((qual, idx) => (
                  <div key={idx} className="border border-slate-200 p-4 bg-slate-50/50 rounded-xl flex items-start gap-3 hover:border-[#caa74d] transition-colors duration-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-sm text-slate-700 leading-relaxed font-bold font-sans">{qual}</span>
                  </div>
                ))}
              </div>

              {/* Equivalence breakdown */}
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                <div className="space-y-4">
                  <h4 className="font-bold text-[#0f2a44] text-sm md:text-base flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#caa74d]" /> British &amp; Cambridge GCE 'A' Levels
                  </h4>
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2 text-sm md:text-sm font-bold text-slate-700 shadow-inner font-sans">
                    <div className="flex justify-between py-1.5 border-b border-slate-200">
                      <span>IGCSE / GCSE / GCE 'O' Levels</span>
                      <span className="text-[#0f2a44]">↓ 10th Grade Equivalent</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-200">
                      <span>Advanced Subsidiary (AS) Level</span>
                      <span className="text-[#0f2a44]">↓ 11th Grade Equivalent</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span>GCE 'A' Levels</span>
                      <span className="text-[#0f2a44]">↓ 12th Grade Equivalent</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-sm text-slate-550 leading-relaxed pl-1 font-sans">
                    <strong>Requirements:</strong> Candidates must have a minimum of 5 passes at IGCSE / GCSE / GCE 'O' Levels (including English), plus a minimum of 2–3 subjects at the GCE Advanced Level, depending on specific program prerequisites (e.g., 3 subjects including Physics and Math for B.Tech).
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-[#0f2a44] text-sm md:text-base flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#caa74d]" /> International Baccalaureate (IB)
                  </h4>
                  <p className="text-sm md:text-sm text-slate-600 leading-relaxed font-bold font-sans">
                    Candidates must take a minimum of 3 subjects at the Higher Level (HL) and 3 subjects at the Standard Level (SL).
                  </p>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm md:text-sm text-slate-700 leading-relaxed space-y-2 shadow-inner font-bold font-sans">
                    <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#caa74d]" /> Must secure an overall minimum of <span className="text-[#0f2a44]">24 points</span></p>
                    <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#caa74d]" /> Minimum <span className="text-[#0f2a44]">12 points in HL</span></p>
                    <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#caa74d]" /> Minimum <span className="text-[#0f2a44]">12 points in SL</span> for Diploma holders</p>
                    <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#caa74d]" /> Minimum <span className="text-[#0f2a44]">3 points in each subject</span></p>
                  </div>
                  <p className="text-sm md:text-sm text-slate-550 leading-relaxed pl-1 font-sans">
                    Note: Candidates must meet all program eligibility requirements laid down by statutory bodies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Legal & Visa */}
        <ScrollReveal>
          <div className="space-y-6" id="legal-visa">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0f2a44] font-sans border-b border-slate-200 pb-3 flex items-center gap-2">
              <Compass className="w-8 h-8 text-[#caa74d]" /> Visa, Registration &amp; Legal Compliance
            </h2>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-6 hover:shadow-lg transition-shadow duration-300">
              <div className="grid gap-5 md:grid-cols-2">
                {[
                  { title: "Student Visa Requirement", icon: ShieldCheck, desc: "International students must enter and reside on campus exclusively on a valid Student Visa. Admissions will not be granted to international students on a Tourist Visa." },
                  { title: "e-FRRO Registration", icon: Info, desc: "All international students must register online through the e-FRRO portal within 14 days of their arrival in India. OCI cardholders are exempt but must secure Form C (accommodation) and Form S (college office)." },
                  { title: "Residential Permit (RP)", icon: Landmark, desc: "RPs are issued by the concerned FRRO. Renewals or extensions must be applied for online at least one month prior to the expiry of the current RP or stay visa." },
                  { title: "Immigration & Surrender", icon: Compass, desc: "Students must produce their RP during travel and surrender it to the immigration officer at the airport upon final departure after course completion." }
                ].map((law, idx) => (
                  <div key={idx} className="border border-slate-200 p-5 bg-slate-50/50 rounded-2xl flex items-start gap-4 hover:border-[#caa74d] transition-colors duration-200">
                    <div className="w-10 h-10 rounded-lg bg-[#0f2a44] text-[#caa74d] flex items-center justify-center shrink-0 border border-[#caa74d]/30 shadow-sm">
                      <law.icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-[#0f2a44] text-sm md:text-base leading-tight">{law.title}</h4>
                      <p className="text-sm md:text-sm text-slate-500 leading-relaxed mt-1">{law.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border border-red-150 rounded-xl p-4 text-sm md:text-sm text-red-800 leading-relaxed font-bold shadow-sm font-sans">
                <span className="font-bold flex items-center gap-1.5 mb-1.5 text-[#b31317]"><Scale className="w-4 h-4" /> Legal Adherence Reminder</span>
                Students must obey the law of the land. If a passport is lost, a complaint must be registered immediately at the concerned police station. Overstaying beyond the permissible visa limit is strictly prohibited and subject to legal penalties under Indian immigration laws.
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
};

export default InternationalAdmissionsProcedure;

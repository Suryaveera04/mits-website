import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, FileText, ExternalLink, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const publications = [
  { title: "Annexure A - Office Order - SC/ST Cell - 05.11.2025", href: "https://mits.ac.in/assets/pdf/assoc/SC-ST CELL-2025.pdf" },
  { title: "Annexure A - Office Order - SC/ST Cell - 02.09.2024", href: "https://mits.ac.in/assets/pdf/assoc/SC ST - Office Order-sep2024.pdf" },
  { title: "Annexure A - Office Order - SC/ST Cell - 04.08.2023", href: "https://mits.ac.in/assets/pdf/assoc/SC-ST Cell 04-08-2023.pdf" },
  { title: "Annexure A - Office Order - SC/ST Cell - 23.11.2020", href: "https://mits.ac.in/assets/pdf/assoc/Annexure - A_Office Order - SC-ST Cell - 23.11.2020.pdf" },
  { title: "Annexure B - Constitutional Safeguards & Legislation to SC-STs", href: "https://mits.ac.in/assets/pdf/assoc/Annexure - C_Constitutional Safeguards _ Legislation to SC-STs.pdf" },
  { title: "AICTE Regulations - 12-12-2019", href: "https://mits.ac.in/assets/pdf/assoc/AICTE Regulations_12-12-2019.pdf" },
  { title: "Academic Year 2023-24", href: "https://mits.ac.in/assets/pdf/admin/SCST CELL-2023-2024.pdf" },
];

const functioning = [
  "To promote higher education in these two communities, who are suffering from economic, social and educational deprivations.",
  "Monitor the working of the remedial coaching scheme; Function as a Grievances Redressal Cell for the grievances of SC/ST students and employees of the MITS and render them necessary help in solving their academic as well as administrative problems.",
];

const activities = [
  "The SC & ST Cell gives wide publicity through circulars to all the students about the various scholarships; namely, Post-Metric Scholarship, AP Higher Education Scholarship schemes, any other scholarships and fellowships.",
  "The SC & ST Cell takes up the problems of the SC & ST students and employees with the MITS authorities and divert the same to Grievances and redressal Cell – MITS to solve the issue.",
  "The Cell takes due care in monitoring the Book Bank and Book Grants for the SC & ST students on the central library – MITS and monitor the utilization. The Cell also advises the students to utilise the facilities of the Book Bank and to borrow books depending on availability.",
];

const specialActivities = [
  {
    heading: "Post-Admission Orientation",
    points: [
      "The Cell provides post-admission orientation to the students who are admitted in various programmes.",
      "The main focus is on the course curriculum, selection of the optional subjects, and maintaining the whole new multi-cultural and multi-lingual environment.",
    ],
  },
  {
    heading: "Capacity Building Sessions",
    points: [
      "Arranges Language classes for students to improve communication skills and proficiency of language.",
      "Conducts programmes on 'Personality Development'.",
      "Provides Career counselling to the students.",
      "Arranges Computer classes to the students to enhance their skills in operating the computer.",
    ],
  },
  {
    heading: "Remedial/Co-Curricular Coaching",
    points: [
      "Conducts remedial/co-curricular classes in the following areas depending upon the students' interest.",
      "Language classes for English and Foreign Languages.",
      "Skill workshops for use of the library, writing an assignment, making presentation in class, public speaking, job selection and job interviews.",
      "Orientation on scholarships available for higher studies.",
    ],
  },
];

export default function ScStView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />

      {/* HERO */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 bg-gradient-to-b from-black/15 via-transparent to-black/30" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 drop-shadow-sm">
            Cells &amp; Committees • Equity &amp; Inclusion
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            SC &amp; ST Cell
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            Established as per UGC guidelines to improve academics, employment, entrepreneurial opportunities and welfare of SC/ST students at MITS.
          </p>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells &amp; Committees</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold">SC &amp; ST Cell</li>
          </ol>
        </nav>
      </section>

      <main className="container mx-auto px-4 py-10 md:py-14 max-w-7xl">
        <button
          onClick={() => navigate("/cells")}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells &amp; Committees
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT / MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* ABOUT */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-[#b31317] mb-4 flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-[#b31317]" />
                  About SC &amp; ST Cell
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify mb-6">
                  As per the UGC guidelines for the establishment of Special Cell for Scheduled Castes and Scheduled Tribes, MITS initiated the establishment of the SC/ST Cell for the improvement of the Academics, Employment &amp; Entrepreneurial opportunities and Welfare of the SC/ST students.
                </p>

                {/* Publication list */}
                <ul className="divide-y divide-slate-100">
                  {publications.map((doc, i) => (
                    <li key={i}>
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 py-3 group hover:bg-[#fff8e6]/40 -mx-2 px-2 rounded-lg transition-colors"
                      >
                        <span className="flex items-center gap-2.5 text-sm font-semibold text-[#0f2a44] group-hover:text-[#b31317] transition-colors leading-snug">
                          <ChevronRight className="w-4 h-4 shrink-0 text-[#caa74d] group-hover:text-[#b31317] transition-colors" />
                          {doc.title}
                        </span>
                        <ExternalLink className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-[#b31317] transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* VISION & MISSION */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#b31317]/10 flex items-center justify-center">
                      <span className="text-[#b31317] font-bold text-lg">V</span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[#0f2a44] uppercase tracking-wider mb-3">Vision</h3>
                    <p className="text-slate-700 text-sm leading-relaxed text-justify">
                      To be an institution of excellence in higher education that continually responds to the changing social realities through the development and application of knowledge, towards creating a people-centred and ecologically sustainable society that promotes and protects the dignity, equality, social justice and human rights for all, with special emphasis on marginalised and vulnerable students.
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#0f2a44]/10 flex items-center justify-center">
                      <span className="text-[#0f2a44] font-bold text-lg">M</span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[#0f2a44] uppercase tracking-wider mb-3">Mission</h3>
                    <p className="text-slate-700 text-sm leading-relaxed text-justify">
                      In pursuance of its vision, the Madanapalle Institute of Technology and Science, Madanapalle organizes awareness programs to the students, remedial classes for slow learning students.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* OBJECTIVES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-3 flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#b31317]" />
                  Objectives
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                  Monitor, promote and improve the students' ability in Spoken English, Communication Skills, Higher Educational Opportunities, Employability Skills, Leadership Qualities, Entrepreneurship Skills and also assist the students in various Competitive Exams.
                </p>
              </section>
            </ScrollReveal>

            {/* FUNCTIONING */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-4 flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-[#b31317]" />
                  Functioning of SC/ST Cell
                </h2>
                <ul className="space-y-3">
                  {functioning.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                      <span className="w-5 h-5 rounded-full bg-[#b31317] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-sm text-slate-700 leading-relaxed text-justify">{point}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* ACTIVITIES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-3 flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-[#b31317]" />
                  Activities of SC &amp; ST Cell
                </h2>
                <p className="text-slate-700 text-sm leading-relaxed text-justify mb-3">
                  The SC &amp; ST Cell is established in the MITS to undertake the activities to develop the awareness among the SC/ST students, especially from the rural areas. The staff of the Cell actively engage in coordinating and habituating this environment. They announce details of government scholarships and fellowships through circulars to the SC/ST students.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  The SC &amp; ST Cell monitors the following activities:
                </p>
                <ul className="space-y-3">
                  {activities.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0 mt-2" />
                      <p className="text-sm text-slate-700 leading-relaxed text-justify">{point}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* SPECIAL ACTIVITIES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-5 flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-[#b31317]" />
                  Special Activities of Cell
                </h2>
                <div className="space-y-5">
                  {specialActivities.map((section, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-[#0f2a44] text-sm mb-2 pl-1 border-l-2 border-[#b31317]">
                        {section.heading}
                      </h3>
                      <ul className="space-y-2 pl-3">
                        {section.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#caa74d] shrink-0 mt-2" />
                            <p className="text-sm text-slate-700 leading-relaxed text-justify">{point}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* GRIEVANCE REDRESSAL */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-4 flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#b31317]" />
                  Grievance Redressal
                </h2>
                <p className="text-slate-700 text-sm leading-relaxed text-justify mb-5">
                  The SC/ST students and Employees can approach the Liaison Officer of the Cell for redressal of any of their grievance(s) regarding academic, administrative or social problems. The Liaison Officer often meets the concerned students and staff to understand their problems, submit the reports to Principal/Grievances and Redressal Cell (GRC) for further necessary action/necessary advice/help to resolve the matter.
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                    <h3 className="font-semibold text-[#0f2a44] text-sm mb-2">Procedure to file a complaint</h3>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                      A written complaint may be submitted to the Liaison Officer, SC/ST Cell. Any student and employee (including contractual, casual and temporary) of MITS can approach the Cell.
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                    <h3 className="font-semibold text-[#0f2a44] text-sm mb-2">Drop Box</h3>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                      A Drop Box is available in SC/ST Cell, any student/employee belonging to SC/ST may drop his/her complaint if any.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            {/* CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#b31317] px-5 py-3">
                  <h3 className="font-display text-base font-bold text-white tracking-wide">Contact</h3>
                </div>
                <div className="p-5 space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-bold text-[#0f2a44] text-base">Mrs. Vidhyashree B</p>
                    <p className="text-xs text-[#b31317] font-semibold mt-0.5">Assistant Professor &amp; Coordinator – SC/ST Cell</p>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-600 leading-relaxed">
                      <p className="font-semibold text-slate-800">Address:</p>
                      <p>Madanapalle Institute of Technology &amp; Science</p>
                      <p>Deemed to be University</p>
                      <p>Madanapalle-Kadiri Road</p>
                      <p>Kurabalakota Mandal, Madanapalle-517325</p>
                      <p>Andhra Pradesh, India</p>
                    </div>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#b31317] shrink-0" />
                    <div className="text-xs text-slate-700">
                      <span className="font-semibold">Phone: </span>+91-8571-280255; 280706
                    </div>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#b31317] shrink-0" />
                    <a
                      href="mailto:scstcell@mits.ac.in"
                      className="text-xs text-[#b31317] hover:underline font-medium"
                    >
                      scstcell@mits.ac.in
                    </a>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* COMPLIANCE PORTALS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-5">
                <h3 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-3">
                  Compliance Portals
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "IQAC", to: "/cells/iqac" },
                    { label: "NAAC", to: "/naac" },
                    { label: "NIRF Rankings", to: "/nirf" },
                    { label: "Public Disclosures", to: "/psd" },
                  ].map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="flex items-center justify-between text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-1.5 border-b border-gray-50 last:border-0 group"
                    >
                      {p.label}
                      <ChevronRight className="w-3.5 h-3.5 text-[#caa74d] group-hover:text-[#b31317] transition-colors" />
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* ORIGINAL SOURCE LINK */}
            <ScrollReveal>
              <a
                href="https://mits.ac.in/sc-st-cell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 text-sm text-[#0f2a44]/50 hover:text-[#b31317] transition-colors px-1"
              >
                <span>View original source page</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </ScrollReveal>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

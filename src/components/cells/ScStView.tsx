import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Target,
  FileDown,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Shield,
  Eye,
  Compass,
  GraduationCap,
  Sparkles,
  Inbox
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import visionIcon from "@/assets/icons/vision-icon.png";
import missionIcon from "@/assets/icons/mission-icon.png";

const BASE = "https://mits.edu/";

const publications = [
  {
    title: "Annexure A - Office Order - SC/ST Cell - 05.11.2025",
    href: "https://mits.ac.in/assets/pdf/assoc/SC-ST%20CELL-2025.pdf"
  },
  {
    title: "Annexure A - Office Order - SC/ST Cell - 02.09.2024",
    href: "https://mits.ac.in/assets/pdf/assoc/SC%20ST%20-%20Office%20Order-sep2024.pdf"
  },
  {
    title: "Annexure A - Office Order - SC/ST Cell - 04.08.2023",
    href: "https://mits.ac.in/assets/pdf/assoc/SC-ST%20Cell%2004-08-2023.pdf"
  },
  {
    title: "Annexure A - Office Order - SC/ST Cell - 23.11.2020",
    href: "https://mits.ac.in/assets/pdf/assoc/Annexure%20-%20A_Office%20Order%20-%20SC-ST%20Cell%20-%2023.11.2020.pdf"
  },
  {
    title: "Annexure B - Constitutional Safeguards & Legislation to SC-STs",
    href: "https://mits.ac.in/assets/pdf/assoc/Annexure%20-%20C_Constitutional%20Safeguards%20_%20Legislation%20to%20SC-STs.pdf"
  },
  {
    title: "AICTE Regulations - 12-12-2019",
    href: "https://mits.ac.in/assets/pdf/assoc/AICTE%20Regulations_12-12-2019.pdf"
  },
  {
    title: "Academic Year 2023-24",
    href: "https://mits.ac.in/assets/pdf/admin/SCST%20CELL-2023-2024.pdf"
  }
];

const functioning = [
  "To promote higher education in these two communities, who are suffering from economic, social and educational deprivations.",
  "Monitor the working of the remedial coaching scheme; Function as a Grievances Redressal Cell for the grievances of SC/ST students and employees of the MITS and render them necessary help in solving their academic as well as administrative problems."
];

const activities = [
  "The SC & ST Cell gives wide publicity through circulars to all the students about the various scholarships; namely, Post-Metric Scholarship, AP Higher Education Scholarship schemes, any other scholarships and fellowships.",
  "The SC & ST Cell takes up the problems of the SC & ST students and employees with the MITS authorities and divert the same to Grievances and redressal Cell – MITS to solve the issue.",
  "The Cell takes due care in monitoring the Book Bank and Book Grants for the SC & ST students on the central library – MITS and monitor the utilization. The Cell also advises the students to utilise the facilities of the Book Bank and to borrow books depending on availability."
];

const specialActivities = [
  {
    title: "Post-Admission Orientation",
    icon: Compass,
    points: [
      "The Cell provides post-admission orientation to the students who are admitted in various programmes.",
      "The main focus is on the course curriculum, selection of the optional subjects, and maintaining the whole new multi-cultural and multi-lingual environment."
    ]
  },
  {
    title: "Capacity Building Sessions",
    icon: Sparkles,
    points: [
      "Arranges Language classes for students to improve communication skills and proficiency of language.",
      "Conducts programmes on 'Personality Development'.",
      "Provides Career counselling to the students.",
      "Arranges Computer classes to the students to enhance their skills in operating the computer."
    ]
  },
  {
    title: "Remedial / Co-Curricular Coaching",
    icon: GraduationCap,
    points: [
      "Conducts remedial/co-curricular classes in the following areas depending upon the students' interest:",
      "Language classes for English and Foreign Languages.",
      "Skill workshops for use of the library, writing an assignment, making presentation in class, public speaking, job selection and job interviews.",
      "Orientation on scholarships available for higher studies."
    ]
  }
];

export default function ScStView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />

      {/* HERO SECTION */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 w-full max-w-[96%] mx-auto px-4 text-center">
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 drop-shadow-sm">
            Statutory Bodies &amp; Student Welfare • Equity &amp; Inclusion
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            SC &amp; ST Cell
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-3xl mx-auto drop-shadow-sm font-medium">
            Established as per UGC guidelines for the improvement of academics, employment, entrepreneurial opportunities and welfare of SC/ST students.
          </p>
        </div>
        <nav className="absolute bottom-4 left-6 z-10 hidden sm:block">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
            <li>
              <Link to="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-white/50">›</li>
            <li>
              <Link to="/cells" className="text-white/70 hover:text-white transition-colors">
                Cells &amp; Committees
              </Link>
            </li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold">SC &amp; ST Cell</li>
          </ol>
        </nav>
      </section>

      {/* FULL WIDTH CONTAINER - LEAVING LITTLE SPACE LEFT AND RIGHT */}
      <main className="w-full max-w-[96%] mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-12">
        <button
          onClick={() => navigate("/cells")}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells &amp; Committees
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT / MAIN COLUMN (7 cols on lg, 8 cols on xl) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            {/* ABOUT SC & ST CELL */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <BookOpen className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                      About SC &amp; ST Cell
                    </h2>
                    <p className="text-xs text-[#0f2a44]/60">
                      Madanapalle Institute of Technology &amp; Science (Deemed to be University)
                    </p>
                  </div>
                </div>

                <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4">
                  <p className="!text-left text-left">
                    As per the UGC guidelines for the establishment of Special Cell for Scheduled Castes and Scheduled Tribes, MITS initiated the establishment of the SC/ST Cell for the improvement of the Academics, Employment &amp; Entrepreneurial opportunities and Welfare of the SC/ST students.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* ANNEXURES & REGULATIONS (DOCUMENTS) */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                      <FileDown className="w-5 h-5 text-[#b31317]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44]">
                        Office Orders &amp; Regulations
                      </h3>
                      <p className="text-xs text-[#0f2a44]/60">Annexures, constitutional safeguards, and annual appointment orders</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-[#0f2a44] rounded-full">
                    {publications.length} Documents
                  </span>
                </div>

                <div className="divide-y divide-gray-100">
                  {publications.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-3.5 px-3 sm:px-4 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <span className="text-sm sm:text-base text-[#0f2a44] font-medium group-hover:text-[#b31317] transition-colors pr-4">
                        {doc.title}
                      </span>
                      <span className="shrink-0 text-slate-400 group-hover:text-[#b31317] transition-colors p-1">
                        <FileDown className="w-5 h-5 text-slate-500 group-hover:text-[#b31317]" />
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* VISION & MISSION - EXACT MATCHING TO THE IMAGE SPECIFICATION */}
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* VISION - ORANGE CARD */}
                <div className="bg-[#f58220] rounded-2xl p-7 md:p-8 text-white flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3">
                    <img
                      src={visionIcon}
                      alt="VISION"
                      className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-sm"
                      onError={(e) => {
                        e.currentTarget.src = "https://mits.ac.in/public/uploads/images/vision-icon.png";
                      }}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-wider uppercase mb-4 !text-white text-white drop-shadow-sm">
                    VISION
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-white/95 !text-justify text-justify font-normal">
                    To be an institution of excellence in higher education that continually responds to the changing social realities through the development and application of knowledge, towards creating a people-centred and ecologically sustainable society that promotes and protects the dignity, equality, social justice and human rights for all, with special emphasis on marginalised and vulnerable students.
                  </p>
                </div>

                {/* MISSION - PURPLE CARD */}
                <div className="bg-[#7e57c2] rounded-2xl p-7 md:p-8 text-white flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3">
                    <img
                      src={missionIcon}
                      alt="MISSION"
                      className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-sm"
                      onError={(e) => {
                        e.currentTarget.src = "https://mits.ac.in/public/uploads/images/mission-icon.png";
                      }}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-wider uppercase mb-4 !text-white text-white drop-shadow-sm">
                    MISSION
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-white/95 !text-justify text-justify font-normal">
                    In pursuance of its vision, the Madanapalle Institute of Technology and Science, Madanapalle organizes awareness programs to the students, remedial classes for slow learning students.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* OBJECTIVES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <Compass className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                    Objectives
                  </h2>
                </div>
                <div className="bg-slate-50/80 border border-slate-200/70 rounded-xl p-5">
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed !text-left text-left">
                    Monitor, promote and improve the students’ ability in Spoken English, Communication Skills, Higher Educational Opportunities, Employability Skills, Leadership Qualities, Entrepreneurship Skills and also assist the students in various Competitive Exams.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* FUNCTIONING OF SC/ST CELL */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5 border-b border-gray-100 pb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <Shield className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                    Functioning of SC/ST Cell
                  </h2>
                </div>

                <div className="space-y-3.5">
                  {functioning.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 bg-slate-50/80 border border-slate-200/70 rounded-xl p-4"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#b31317] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        {idx + 1}
                      </span>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed !text-left text-left">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* ACTIVITIES OF SC & ST CELL */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <Sparkles className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                    Activities of SC &amp; ST Cell
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed !text-left text-left mb-5">
                  The SC &amp; ST Cell is established in the MITS to undertake the activities to develop the awareness among the SC/ST students, especially from the rural areas. The staff of the Cell actively engage in coordinating and habituating this environment. They announce details of government scholarships and fellowships through circulars to the SC/ST students.
                </p>

                <p className="text-xs font-bold text-[#b31317] uppercase tracking-wider mb-3 !text-left text-left">
                  The SC &amp; ST Cell monitors the following activities:
                </p>

                <div className="space-y-3">
                  {activities.map((act, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-gray-200/80 rounded-xl p-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b31317] shrink-0 mt-2" />
                      <p className="text-sm text-slate-700 leading-relaxed !text-left text-left">
                        {act}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* SPECIAL ACTIVITIES OF CELL */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <GraduationCap className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                    Special Activities of Cell
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {specialActivities.map((spec, i) => {
                    const IconComponent = spec.icon;
                    return (
                      <div
                        key={i}
                        className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-5 flex flex-col justify-between hover:border-[#b31317]/30 transition-all hover:shadow-sm"
                      >
                        <div>
                          <div className="flex items-center gap-2.5 mb-3.5">
                            <div className="w-7 h-7 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                              <IconComponent className="w-4 h-4 text-[#b31317]" />
                            </div>
                            <h4 className="font-display font-bold text-sm text-[#0f2a44]">
                              {spec.title}
                            </h4>
                          </div>
                          <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                            {spec.points.map((pt, j) => (
                              <li key={j} className="flex items-start gap-2 !text-left text-left">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#b31317] shrink-0 mt-1.5" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </ScrollReveal>

            {/* GRIEVANCE REDRESSAL MECHANISM */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-5">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <Shield className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                    Grievance Redressal
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed !text-left text-left">
                  The SC/ST students and Employees can approach the Liaison Officer of the Cell for redressal of any of their grievance(s) regarding academic, administrative or social problems. The Liaison Officer often meets the concerned students and staff to understand their problems, submit the reports to Principal/Grievances and Redressal Cell (GRC) for further necessary action/necessary advice/help to resolve the matter.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div className="bg-[#fff8e6] border border-[#ffd15c] rounded-xl p-5 text-left">
                    <h3 className="font-display font-bold text-sm text-[#0f2a44] uppercase tracking-wide mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#b31317]" />
                      Procedure to File a Complaint
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed !text-left text-left">
                      A written complaint may be submitted to the Liaison Officer, SC/ST Cell. Any student and employee (including contractual, casual and temporary) of MITS can approach the Cell.
                    </p>
                  </div>

                  <div className="bg-[#fff8e6] border border-[#ffd15c] rounded-xl p-5 text-left">
                    <h3 className="font-display font-bold text-sm text-[#0f2a44] uppercase tracking-wide mb-2 flex items-center gap-2">
                      <Inbox className="w-4 h-4 text-[#b31317]" />
                      Drop Box
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed !text-left text-left">
                      A Drop Box is available in SC/ST Cell, any student/employee belonging to SC/ST may drop his/her complaint if any.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* RIGHT / SIDEBAR COLUMN (5 cols on lg, 4 cols on xl - Increased Width) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            {/* CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden text-left">
                <div className="bg-[#b31317] text-white px-6 py-4">
                  <h2 className="font-display text-lg font-bold !text-white text-white">Contact</h2>
                </div>
                <div className="p-6 space-y-5">
                  <div className="text-left">
                    <h3 className="font-semibold text-lg text-[#0f2a44] !text-left">Mrs. Vidhyashree B</h3>
                    <p className="text-sm text-[#b31317] font-semibold !text-left">
                      Assistant Professor &amp; Coordinator – SC/ST Cell
                    </p>
                  </div>

                  <hr className="border-gray-100" />

                  <div className="space-y-4 text-sm text-[#0f2a44]/80 text-left">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                      <div className="text-xs sm:text-sm leading-relaxed text-left space-y-0.5">
                        <p className="font-semibold text-[#0f2a44] !text-left">Address :</p>
                        <p className="font-bold text-[#0f2a44] !text-left">Madanapalle Institute of Technology &amp; Science</p>
                        <p className="!text-left">Deemed to be University</p>
                        <p className="!text-left">Madanapalle-Kadiri Road</p>
                        <p className="!text-left">kurabalakota Mandal, Madanapalle-517325</p>
                        <p className="!text-left">Andhra Pradesh, India</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                      <Phone className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                      <div className="text-left">
                        <p className="font-semibold text-[#0f2a44] !text-left">Phone :</p>
                        <p className="text-slate-600 !text-left">+91-8571-280255; 280706</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                      <Mail className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                      <div className="text-left">
                        <p className="font-semibold text-[#0f2a44] !text-left">Email :</p>
                        <a
                          href="mailto:scstcell@mits.ac.in"
                          className="text-[#b31317] hover:underline font-semibold whitespace-nowrap block"
                        >
                          scstcell@mits.ac.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* COMPLIANCE & STUDENT SAFETY PORTALS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-5">
                <h3 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-3">
                  Safety &amp; Compliance Portals
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Grievance Redressal Cell (GRC)", to: "/grc" },
                    { label: "Anti-Ragging Cell", to: "/anti-ragging" },
                    { label: "Minority Cell", to: "/minoritycell" },
                    { label: "Internal Complaints Committee (ICC)", to: "/icc" },
                    { label: "Women Empowerment Cell", to: "/cells/wec" },
                    { label: "Internal Quality Assurance Cell", to: "/iqac" }
                  ].map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="flex items-center justify-between text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-2 border-b border-gray-50 last:border-0 group font-medium"
                    >
                      <span>{p.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#caa74d] group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

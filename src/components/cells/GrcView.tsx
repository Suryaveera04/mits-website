import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Users,
  ShieldCheck,
  FileText,
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Send,
  FileDown
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "https://mits.edu/";

const documents = [
  {
    title: "Ombudsperson by JNTUA",
    href: "https://www.mits.ac.in/assets/pdf/admin/appointment%20of%20-%20OMBUDSMAN-Nomination.pdf"
  },
  {
    title: "Student Grievance Redressal Policy",
    href: "https://www.mits.ac.in/assets/pdf/admin/Students%20Grievance%20Redressal%20Policy.pdf"
  },
  {
    title: "Student Grievance Redressal Committee 2025-26",
    href: "https://www.mits.ac.in/assets/pdf/admin/Office%20Order-SGRC%20Appointment.pdf"
  },
  {
    title: "Student Grievance Redressal Committee 2024-25",
    href: "https://www.mits.ac.in/assets/pdf/admin/Student%20Grievance%20Redressal%20Committee.pdf"
  },
  {
    title: "Grievances Redressed",
    href: "https://www.mits.ac.in/assets/pdf/admin/GRC.pdf"
  }
];

const committeeMembers = [
  {
    sno: "1",
    name: "Dr. P. Ramanathan",
    designation: "Principal",
    position: "Chairperson",
    email: "principal@mits.ac.in"
  },
  {
    sno: "2",
    name: "Dr. C. Kamal Basha",
    designation: "Professor",
    position: "Member",
    email: "viceprincipaladministration@mits.ac.in"
  },
  {
    sno: "3",
    name: "Dr. S. Shanmuga Priya",
    designation: "Associate Professor",
    position: "Member",
    email: "shanmugapriyas@mits.ac.in"
  },
  {
    sno: "4",
    name: "Dr. K. Chandra Mohan",
    designation: "Associate Professor",
    position: "Member",
    email: "drkchandramohan@mits.ac.in"
  },
  {
    sno: "5",
    name: "Dr. Rajesh Dagupati",
    designation: "Assistant Professor",
    position: "Member",
    email: "drrajeshd@mits.ac.in"
  },
  {
    sno: "6",
    name: "Ms. Ch. Jeshnavi",
    designation: "Student",
    position: "Special Invitee",
    email: "jeshnavichintapalli@gmail.com"
  }
];

const submissionPoints = [
  "can utilize the suggestion box to drop their complaints.",
  "can complain to the GRC Coordinator directly.",
  "can complain to their respective HoDs.",
  "can complain directly to the Principal.",
  "can complain through mails to grc@mits.ac.in"
];

export default function GrcView() {
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
        <div className="absolute inset-0 bg-black/25 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm">
            Cells &amp; Committees • Student Support &amp; Redressal
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Grievance Redressal Cell (GRC)
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-3xl mx-auto drop-shadow-sm font-medium">
            Dedicated statutory mechanism to address student grievances upholding transparency, fairness, and prompt institutional accountability.
          </p>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
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
            <li className="text-[#ffd15c] font-semibold">Grievance Redressal Cell</li>
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
          {/* LEFT / MAIN COLUMN */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            {/* ABOUT GRC */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-[#b31317]">About GRC</h2>
                    <p className="text-sm font-semibold text-[#0f2a44]">Grievance Redressal Cell</p>
                  </div>
                </div>

                <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4 text-justify">
                  <p>
                    As per All India Council for Technical Education (AICTE) regulations regarding the establishment of Mechanism for Grievance Redressal in Technical Institutions, a Grievance Redressal Committee (GRC) is formed to address the grievances of the students.
                  </p>
                  <p>
                    The Vice-Principal – Administration is nominated as the Co-ordinator for the Grievance Redressal Committee. The student grievance can be lodged online at the website{" "}
                    <a
                      href="https://mitsmadanapalle.edugrievance.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#b31317] font-semibold underline hover:text-[#8b0000] break-all"
                    >
                      https://mitsmadanapalle.edugrievance.com/
                    </a>{" "}
                    or through{" "}
                    <a
                      href="https://forms.office.com/r/vke9XhMFac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#b31317] font-semibold underline hover:text-[#8b0000] break-all"
                    >
                      https://forms.office.com/r/vke9XhMFac
                    </a>{" "}
                    or send through e-mail to{" "}
                    <a
                      href="mailto:grc@mits.ac.in"
                      className="text-[#b31317] font-semibold underline hover:text-[#8b0000]"
                    >
                      grc@mits.ac.in
                    </a>{" "}
                    or in writing to &quot;The Coordinator-GRC, MITS, Madanapalle - 517325&quot;. For each grievance, reported to the Committee, an enquiry committee shall be constituted under the Chairmanship of the Principal and he shall nominate the appropriate members.
                  </p>
                  <p>
                    The Principal will nominate the co-opt members to the Enquiry Committee as per the type and the nature of the grievance and the situation. Coordinator-GRC will chair the meeting for that particular matter.
                  </p>
                  <p>
                    If any of the complainants are not satisfied with the decision of the Grievance Redressal Committee, they may approach the Ombudsman in JNTUA directly. The Ombudsman shall hear to those grievances and disposes them. Within one month of receipt for early redressal of grievance.
                  </p>
                  <p>
                    The online students Grievance Redressal Portal{" "}
                    <a
                      href="https://samadhaan.ugc.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#b31317] font-semibold underline hover:text-[#8b0000] break-all"
                    >
                      https://samadhaan.ugc.ac.in/
                    </a>{" "}
                    is initiated by the University Grants Commission, and{" "}
                    <a
                      href="https://www.aicte-india.org/feedback/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#b31317] font-semibold underline hover:text-[#8b0000] break-all"
                    >
                      https://www.aicte-india.org/feedback/
                    </a>{" "}
                    by AICTE to facilitate students and staff to lodge his/her grievance and provide a mechanism for redressal of their grievances.
                  </p>
                </div>

                {/* FAST ACCESS LODGE GRIEVANCE BUTTONS */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap gap-3">
                  <a
                    href="https://mitsmadanapalle.edugrievance.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#b31317] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#8b0000] transition-colors shadow-sm"
                  >
                    <span>Lodge on EduGrievance Portal</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://forms.office.com/r/vke9XhMFac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0f2a44] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1a56a0] transition-colors shadow-sm"
                  >
                    <span>Lodge via Microsoft Forms</span>
                    <Send className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:grc@mits.ac.in"
                    className="inline-flex items-center gap-2 bg-[#fff8e6] border border-[#ffd15c] text-[#0f2a44] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#ffd15c]/20 transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4 text-[#b31317]" />
                    <span>Email: grc@mits.ac.in</span>
                  </a>
                </div>
              </section>
            </ScrollReveal>

            {/* MEMBERS TABLE */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="px-6 md:px-8 py-5 border-b border-[#0f2a44]/5 flex items-center gap-3 bg-gradient-to-r from-gray-50/70 to-white">
                  <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-[#0f2a44]">
                      Members of the Grievance Redressal Committee 2025-26
                    </h2>
                    <p className="text-xs text-[#0f2a44]/60">Statutory Institutional Grievance Redressal Committee</p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#0f2a44] text-white uppercase text-xs tracking-wider">
                        <th className="py-3.5 px-4 text-center w-16">S.No</th>
                        <th className="py-3.5 px-5 text-left">Name</th>
                        <th className="py-3.5 px-5 text-left">Designation</th>
                        <th className="py-3.5 px-5 text-left">Position</th>
                        <th className="py-3.5 px-5 text-left">Contact Email-ID</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {committeeMembers.map((member, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#fff8e6]/30 transition-colors group"
                        >
                          <td className="py-3.5 px-4 text-center text-[#0f2a44]/60 font-semibold">
                            {member.sno}
                          </td>
                          <td className="py-3.5 px-5 font-semibold text-[#0f2a44] whitespace-nowrap">
                            {member.name}
                          </td>
                          <td className="py-3.5 px-5 text-slate-600">
                            {member.designation}
                          </td>
                          <td className="py-3.5 px-5">
                            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                              member.position === "Chairperson"
                                ? "bg-[#b31317]/10 text-[#b31317] border border-[#b31317]/30"
                                : member.position === "Special Invitee"
                                ? "bg-[#1a56a0]/10 text-[#1a56a0] border border-[#1a56a0]/30"
                                : "bg-[#fff8e6] text-[#0f2a44] border border-[#ffd15c]/50"
                            }`}>
                              {member.position}
                            </span>
                          </td>
                          <td className="py-3.5 px-5">
                            <a
                              href={`mailto:${member.email}`}
                              className="text-[#b31317] hover:underline font-medium flex items-center gap-1.5"
                            >
                              <Mail className="w-3.5 h-3.5 text-[#b31317]/70 shrink-0" />
                              <span>{member.email}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollReveal>

            {/* ALL THE STUDENTS AND STAFF (SUBMISSION CHANNELS) */}
            <ScrollReveal>
              <section className="bg-gradient-to-br from-[#fffdfa] to-[#fff8e6]/50 rounded-2xl border border-[#caa74d]/30 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#0f2a44]">
                    All the students and staff
                  </h3>
                </div>
                <ul className="space-y-3 text-sm md:text-base text-[#0f2a44]/85">
                  {submissionPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#b31317] font-bold text-lg leading-none mt-1">•</span>
                      <span>
                        {pt.includes("grc@mits.ac.in") ? (
                          <>
                            can complain through mails to{" "}
                            <a
                              href="mailto:grc@mits.ac.in"
                              className="text-[#b31317] font-semibold underline hover:text-[#8b0000]"
                            >
                              grc@mits.ac.in
                            </a>
                          </>
                        ) : (
                          pt
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* DOCUMENTS & POLICIES (SINGLE ROW LAYOUT MATCHING SYLLABUS/REGULATIONS) */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-[#0f2a44]">
                      Policies, Orders &amp; Redressal Reports
                    </h2>
                    <p className="text-xs text-[#0f2a44]/60">Official notifications, guidelines and documentation</p>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {documents.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-4 px-3 sm:px-4 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <span className="text-sm sm:text-base text-[#0f2a44] font-medium group-hover:text-[#b31317] transition-colors pr-4">
                        {doc.title}
                      </span>
                      <span className="shrink-0 text-slate-400 group-hover:text-[#b31317] transition-colors p-1.5">
                        <FileDown className="w-5 h-5 text-slate-500 group-hover:text-[#b31317]" />
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* RIGHT / SIDEBAR COLUMN */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            {/* CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#b31317] text-white px-6 py-4">
                  <h2 className="font-display text-lg font-bold !text-white text-white">Contact</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-[#0f2a44]">Dr. C. Kamal Basha</h3>
                    <p className="text-sm text-[#b31317] font-medium">Co-Ordinator</p>
                    <p className="text-xs text-slate-500 font-medium">Grievance Redressal Committee</p>
                  </div>

                  <hr className="border-gray-100" />

                  <div className="space-y-3.5 text-sm text-[#0f2a44]/80">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                      <div className="text-xs sm:text-sm leading-relaxed text-left space-y-0.5">
                        <p className="font-semibold text-[#0f2a44] !text-left">Address :</p>
                        <p className="font-bold text-[#0f2a44] !text-left">Madanapalle Institute of Technology &amp; Science</p>
                        <p className="!text-left">Deemed to be University</p>
                        <p className="!text-left">Madanapalle-Kadiri Road</p>
                        <p className="!text-left">Kurabalakota Mandal, Madanapalle-517325</p>
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
                        <p className="font-semibold text-[#0f2a44] !text-left">E Mail :</p>
                        <a
                          href="mailto:grc@mits.ac.in"
                          className="text-[#b31317] hover:underline font-semibold whitespace-nowrap block"
                        >
                          grc@mits.ac.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* ONLINE GRIEVANCE REDRESSAL PORTALS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6">
                <h3 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#b31317]" />
                  External Redressal Portals
                </h3>
                <div className="space-y-2.5">
                  <a
                    href="https://mitsmadanapalle.edugrievance.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-2 border-b border-gray-50 group font-medium"
                  >
                    <span>MITS EduGrievance Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#caa74d] group-hover:text-[#b31317] transition-colors shrink-0" />
                  </a>
                  <a
                    href="https://samadhaan.ugc.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-2 border-b border-gray-50 group font-medium"
                  >
                    <span>UGC e-Samadhaan Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#caa74d] group-hover:text-[#b31317] transition-colors shrink-0" />
                  </a>
                  <a
                    href="https://www.aicte-india.org/feedback/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-2 border-b border-gray-50 group font-medium"
                  >
                    <span>AICTE Feedback Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#caa74d] group-hover:text-[#b31317] transition-colors shrink-0" />
                  </a>
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
                    { label: "IQAC", to: "/iqac" },
                    { label: "NAAC", to: "/naac" },
                    { label: "NIRF Rankings", to: "/nirf" },
                    { label: "Public Disclosures", to: "/psd" }
                  ].map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="flex items-center justify-between text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-1.5 border-b border-gray-50 last:border-0 group"
                    >
                      {p.label}
                      <ChevronRight className="w-3.5 h-3.5 text-[#caa74d] group-hover:translate-x-0.5 transition-transform" />
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

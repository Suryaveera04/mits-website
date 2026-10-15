import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Download,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Users,
  ChevronRight,
  Target,
  Search,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

interface CommitteeMember {
  sno: number;
  name: string;
  designation: string;
  position: string;
}

const aboutParagraphs = [
  "The Intellectual Property Facilitation Centre (IPFC) has been established at Madanapalle Institute of Technology & Science - Deemed to be University in the year A.Y:2023-24 sponsored by Development Commissioner (Micro, Small, and Medium Enterprises), Ministry of MSME, Govt. of India.",
  "MITS-IPFC acts as an institutional catalyst connecting innovators, academic researchers, student entrepreneurs, and regional MSME clusters with comprehensive intellectual property resources, patent agents, and government reimbursement schemes.",
];

const objectiveParagraphs = [
  "The primary objective of MITS-IPFC is to provide comprehensive support and services related to intellectual property rights (IPR) for MSMEs, Startups, Faculty, Researchers, and students which includes promoting IP awareness among students, faculty, and local businesses. Also, Providing IP education and consultation services. Further, it supports IP registration and protection.",
];

const servicesList = [
  {
    title: "IPR Awareness, Training & Legal Advisory",
    description:
      "To render IPR awareness, training, protection, information & advisory services, through IPR Experts/Agents/attorneys, specialized in IP Laws for filing (national and international level), protection and litigation matters for Students/professionals/researchers and MSMEs.",
  },
  {
    title: "IP Filing Services",
    description:
      "Facilitating filing services such as Patents, Designs, Trademarks, Copyrights, Geographical Indications etc.",
  },
  {
    title: "Search & Prior Art Analysis",
    description:
      "IP search and analysis assistances to clients in conducting patent searches, trademark searches, and prior art searches etc.",
  },
  {
    title: "Registration & Application Assistance",
    description:
      "IP registration assistance to clients with the application and registration processes for Patents, Trademarks, Copyrights, and other IP rights.",
  },
  {
    title: "Strategic IPR Advisory",
    description:
      "Advisory services on various IPR filings.",
  },
  {
    title: "MSME Reimbursement Facilitation",
    description:
      "Facilitates the process of reimbursement application for granted patents, trademarks, designs and GI’s filed by eligible applicants.",
  },
];

const committeeMembers: CommitteeMember[] = [
  {
    sno: 1,
    name: "Dr. C. Yuvaraj",
    designation: "Vice Chancellor (I/c) and IPFC Chairperson, MITS",
    position: "Chairman",
  },
  {
    sno: 2,
    name: "Sri. D Chandra Sekhar",
    designation: "Additional Development Commissioner, MSME-Development and Facilitation Office, Hyderabad.",
    position: "Member",
  },
  {
    sno: 3,
    name: "Dr. R. Thulasiram Naidu",
    designation: "Advisor R&D and Consultancy, MITS",
    position: "IPFC In-charge",
  },
  {
    sno: 4,
    name: "Dr. P. B. N. Prasad",
    designation: "Director, Techno Confluence Intelligent Engineering Solutions Pvt. Ltd.",
    position: "Member",
  },
  {
    sno: 5,
    name: "Swarna Srivastava",
    designation: "IP advisory & Attorney, Zeya IP, Gurgaon Haryana",
    position: "Member",
  },
  {
    sno: 6,
    name: "Dr. P. Sivaiah",
    designation: "Associate Dean-R&D, MITS",
    position: "Member",
  },
  {
    sno: 7,
    name: "Dr. D. Pradeep Kumar",
    designation: "Registrar & Chief Coordinator, (NAAC/NEP/ISO Affairs), MITS",
    position: "Member",
  },
  {
    sno: 8,
    name: "Dr. P. Ramanathan",
    designation: "Principal, MITS",
    position: "Member",
  },
  {
    sno: 9,
    name: "Dr. C. Kamal Basha",
    designation: "Vice Principal (Administration), MITS",
    position: "Member",
  },
  {
    sno: 11,
    name: "Dr. Anantha Raman L",
    designation: "IIC coordinator, MITS",
    position: "Member",
  },
  {
    sno: 12,
    name: "Dr. A. V. Pavan Kumar",
    designation: "NIRF coordinator, MITS",
    position: "Member",
  },
  {
    sno: 13,
    name: "Dr. Manish Sharma",
    designation: "NBA coordinator, MITS",
    position: "Member",
  },
  {
    sno: 14,
    name: "Dr. Dipankar Roy",
    designation: "Professor & Head of the Dept., Civil Engg., MITS",
    position: "Member",
  },
  {
    sno: 15,
    name: "Dr. Manavaalan Gunasekaran",
    designation: "Assoc. Professor & Head of the Dept., EEE, MITS",
    position: "Member",
  },
  {
    sno: 16,
    name: "Dr. S. Baskaran",
    designation: "Associate Professor & Head of the Dept., ME Engg., MITS",
    position: "Member",
  },
  {
    sno: 17,
    name: "Dr. S. Rajasekaran",
    designation: "Professor & Head of the Dept., ECE, MITS",
    position: "Member",
  },
  {
    sno: 18,
    name: "Dr. R. Kalpana",
    designation: "Professor & Head of the Dept., CSE- AI, MITS",
    position: "Member",
  },
  {
    sno: 19,
    name: "Dr. K. Dinesh",
    designation: "Associate Professor & Head of the Dept., CST, MITS",
    position: "Member",
  },
  {
    sno: 20,
    name: "Dr. S. V. S. Ganga Devi",
    designation: "Professor & Head of the Dept., CSE-CS, MITS",
    position: "Member",
  },
  {
    sno: 21,
    name: "Dr. M. Sreedevi",
    designation: "Professor & Head of the Dept., CSE, MITS",
    position: "Member",
  },
  {
    sno: 22,
    name: "Dr. S. Kusuma",
    designation: "Assistant Professor & Head of the Dept., CSE-DS, MITS",
    position: "Member",
  },
];

const documents = [
  {
    label: "Intellectual Property Facilitation Centre Brochure",
    href: "https://mits.ac.in/assets/pdf/admin/IPFC Brochure.pdf",
  },
];

const relatedCells = [
  { label: "Intellectual Property Rights Cell (IPRC)", to: "/cells/ipr" },
  { label: "Centre of Innovation & Incubation (CII)", to: "/cells/cii" },
  { label: "Startup Cell / NISP", to: "/cells/startup" },
  { label: "Design Thinking Studio (DTS)", to: "/cells/dts" },
  { label: "Internal Quality Assurance Cell (IQAC)", to: "/cells/iqac" },
];

const addressBlock = (
  <div className="text-xs text-slate-600 leading-relaxed">
    <p>Madanapalle Institute of Technology &amp; Science</p>
    <p className="font-semibold text-slate-700">Deemed to be University</p>
    <p>Madanapalle-Kadiri Road</p>
    <p>Kurabalakota Mandal, Madanapalle-517325</p>
    <p>Andhra Pradesh, India</p>
  </div>
);

export default function IpfcView() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = useMemo(() => {
    if (!searchTerm.trim()) return committeeMembers;
    const term = searchTerm.toLowerCase();
    return committeeMembers.filter(
      (m) =>
        m.name.toLowerCase().includes(term) ||
        m.designation.toLowerCase().includes(term) ||
        m.position.toLowerCase().includes(term) ||
        m.sno.toString().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />

      {/* HERO — Structured as in UHV Cell */}
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
            Cells &amp; Committees • Innovation, Research &amp; Entrepreneurship
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Intellectual Property Facilitation Centre
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            Sponsored by Development Commissioner (MSME), Ministry of MSME, Govt. of India
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
            <li className="text-[#ffd15c] font-semibold">IPFC Cell</li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTAINER */}
      <main className="container mx-auto px-4 py-10 md:py-14 max-w-7xl">
        <button
          onClick={() => navigate("/cells")}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells &amp; Committees
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN CONTENT (LEFT 2 COLUMNS) */}
          <div className="lg:col-span-2 space-y-8">
            {/* ABOUT MITS IPFC */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-[#b31317] mb-4 flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-[#b31317]" />
                  About MITS IPFC
                </h2>
                <div className="space-y-3">
                  {aboutParagraphs.map((p, i) => (
                    <p key={i} className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* OBJECTIVE */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#b31317] mb-4 flex items-center gap-2.5">
                  <Target className="w-5 h-5 text-[#b31317]" />
                  Objective
                </h2>
                <div className="space-y-3">
                  {objectiveParagraphs.map((p, i) => (
                    <p key={i} className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* SERVICES AVAILABLE AT IPFC */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-[#b31317] mb-2 flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#b31317]" />
                  Services Available at IPFC
                </h2>
                <p className="text-slate-600 text-sm mb-5">
                  The following services are available at IPFC:
                </p>

                <ul className="space-y-4">
                  {servicesList.map((service, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0 mt-2" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm text-[#0f2a44] group-hover:text-[#b31317] transition-colors mb-1">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-700 leading-relaxed text-justify">
                          {service.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* STEERING COMMITTEE */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-display text-xl font-bold text-[#b31317] flex items-center gap-2.5">
                      <Users className="w-5 h-5 text-[#b31317]" />
                      Steering Committee
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      A steering committee has been constituted to take decisions with respect to the activities of IPFC and review the same.
                    </p>
                  </div>

                  {/* SEARCH */}
                  <div className="relative min-w-[200px] sm:min-w-[240px] shrink-0">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search committee..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-gray-200 focus:outline-hidden focus:border-[#b31317] transition-colors"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto mt-4 rounded-xl border border-gray-100">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#0f2a44] text-white text-xs uppercase tracking-wider font-semibold">
                        <th className="py-3 px-3.5 w-16 text-center">Sl. No.</th>
                        <th className="py-3 px-3.5 min-w-[180px]">Name</th>
                        <th className="py-3 px-3.5 min-w-[250px]">Designation</th>
                        <th className="py-3 px-3.5 text-center min-w-[140px]">Position in Committee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredMembers.length > 0 ? (
                        filteredMembers.map((member) => {
                          const isChairman = member.position.toLowerCase().includes("chairman");
                          const isIncharge =
                            member.position.toLowerCase().includes("in-charge") ||
                            member.position.toLowerCase().includes("incharge");

                          return (
                            <tr
                              key={member.sno}
                              className="hover:bg-amber-50/40 transition-colors group"
                            >
                              <td className="py-3 px-3.5 text-center font-bold text-gray-400 group-hover:text-[#0f2a44] text-xs">
                                {member.sno}
                              </td>
                              <td className="py-3 px-3.5 font-semibold text-[#0f2a44] group-hover:text-[#b31317] transition-colors">
                                {member.name}
                              </td>
                              <td className="py-3 px-3.5 text-xs text-slate-600 leading-relaxed">
                                {member.designation}
                              </td>
                              <td className="py-3 px-3.5 text-center">
                                <span
                                  className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold ${
                                    isChairman
                                      ? "bg-red-50 text-[#b31317] border border-red-200"
                                      : isIncharge
                                      ? "bg-[#fff8e6] text-[#996515] border border-[#ffd15c]/60"
                                      : "bg-gray-100 text-gray-700"
                                  }`}
                                >
                                  {member.position}
                                </span>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan={4} className="py-8 text-center text-sm text-gray-400">
                            No committee members match "{searchTerm}".
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="px-2 py-3 text-xs text-gray-500 flex items-center justify-between">
                  <span>Showing {filteredMembers.length} of {committeeMembers.length} members</span>
                  <span className="font-medium text-[#0f2a44]">MITS Steering Committee</span>
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* SIDEBAR (RIGHT 1 COLUMN) */}
          <div className="space-y-6">
            {/* IPFC BROCHURE */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#b31317] px-5 py-3">
                  <h3 className="font-display text-base font-bold text-white tracking-wide">
                    IPFC Brochure
                  </h3>
                </div>
                <div className="p-5">
                  <ul className="divide-y divide-gray-100">
                    {documents.map((doc, i) => (
                      <li key={i}>
                        <a
                          href={doc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 py-2 group hover:bg-[#fff8e6]/40 -mx-2 px-2 rounded-lg transition-colors"
                        >
                          <span className="flex items-center gap-2.5 text-sm font-semibold text-[#0f2a44] group-hover:text-[#b31317] transition-colors">
                            <ChevronRight className="w-4 h-4 shrink-0 text-[#caa74d] group-hover:text-[#b31317] transition-colors" />
                            {doc.label}
                          </span>
                          <Download className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-[#b31317] transition-colors" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </ScrollReveal>

            {/* CONTACT CARD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#0f2a44] px-5 py-3">
                  <h3 className="font-display text-base font-bold text-white tracking-wide">
                    Contact IPFC
                  </h3>
                </div>
                <div className="p-5 space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5" />
                    {addressBlock}
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#b31317] shrink-0" />
                    <span className="text-xs text-slate-700 font-medium">
                      +91-8571-280255, 280706
                    </span>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#b31317] shrink-0" />
                    <a
                      href="mailto:arulkumark@mits.ac.in"
                      className="text-xs text-[#b31317] hover:underline font-medium"
                    >
                      arulkumark@mits.ac.in
                    </a>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* IPFC IN-CHARGE & CO-ORDINATORS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#b31317] px-5 py-3">
                  <h3 className="font-display text-base font-bold text-white tracking-wide">
                    IPFC Key Officials
                  </h3>
                </div>
                <div className="p-5 space-y-4 text-xs text-slate-700">
                  <div>
                    <p className="font-bold text-[#b31317] text-sm">Dr. R. Thulasiram Naidu</p>
                    <p className="text-slate-600 mt-0.5">Advisor R&amp;D and Consultancy, MITS</p>
                    <p className="font-semibold text-[#0f2a44] mt-0.5">IPFC In-charge</p>
                  </div>
                  <hr className="border-slate-100" />
                  <div>
                    <p className="font-bold text-[#0f2a44] text-sm">Dr. P. Sivaiah</p>
                    <p className="text-slate-600 mt-0.5">Associate Dean-R&amp;D, MITS</p>
                    <p className="font-semibold text-slate-700 mt-0.5">Coordinator</p>
                  </div>
                  <hr className="border-slate-100" />
                  <div>
                    <p className="font-bold text-[#0f2a44] text-sm">Dr. K. Arul kumar</p>
                    <p className="text-slate-600 mt-0.5">Associate Professor, Dept. of EEE</p>
                    <p className="font-semibold text-slate-700 mt-0.5">Co-Coordinator</p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* RELATED INNOVATION & COMPLIANCE PORTALS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-5">
                <h3 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-3">
                  Related Innovation Cells
                </h3>
                <div className="space-y-2">
                  {relatedCells.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="flex items-center justify-between text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-1.5 border-b border-gray-50 last:border-0 group"
                    >
                      <span>{p.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#caa74d] group-hover:text-[#b31317] transition-colors" />
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* SOURCE LINK */}
            <ScrollReveal>
              <a
                href="https://mits.ac.in/ipfc"
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

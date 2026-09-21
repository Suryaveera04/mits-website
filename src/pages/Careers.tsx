import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import {
  Briefcase,
  GraduationCap,
  Award,
  Users,
  CheckCircle2,
  Mail,
  Phone,
  Building2,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  DollarSign,
  TrendingUp,
  Landmark,
  UserCheck,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-4">
    <h3 className="font-display text-2xl font-bold text-foreground tracking-tight">{title}</h3>
    {subtitle && <p className="text-muted-foreground text-sm md:text-sm mt-1">{subtitle}</p>}
  </div>
);

const Careers = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const careerTabs = [
    { id: "overview",     label: "Careers" },
    { id: "vc",           label: "VC Position" },
    { id: "director-tp",  label: "Director Training & Placements" },
    { id: "deans",        label: "Dean Positions" },
    { id: "faculty",      label: "Faculty Positions" },
    { id: "benefits",     label: "Benefits" },
    { id: "press",        label: "Press Release" },
    { id: "contact",      label: "Contact" },
  ];

  const featuredRoles = [
    {
      title: "Chief Finance Officer",
      img: "https://mits.ac.in/public/uploads/career/car-img-3.jpg",
      dept: "Finance & Accounts Division",
    },
    {
      title: "Senior Placement Officer",
      img: "https://mits.ac.in/public/uploads/career/car-img-1.jpg",
      dept: "Training & Placement Cell",
    },
    {
      title: "Placement Officer",
      img: "https://mits.ac.in/public/uploads/career/car-img-2.jpg",
      dept: "Training & Placement Cell",
    },
  ];

  const whatWeDoList = [
    {
      title: "A mature and motivated student community",
      img: "https://mits.ac.in/public/uploads/career/moti1.png",
    },
    {
      title: "A talented and diverse student body",
      img: "https://mits.ac.in/public/uploads/career/ta-student.png",
    },
    {
      title: "Access to the latest instructional technologies",
      img: "https://mits.ac.in/public/uploads/career/3lates.png",
    },
    {
      title: "Comprehensive training and ongoing support",
      img: "https://mits.ac.in/public/uploads/career/moti.png",
    },
  ];

  const benefitsList = [
    {
      icon: DollarSign,
      title: "Competitive Pay Scale",
      desc: "Salary benchmarked against 7th Pay Commission norms with higher pay for Ph.D. holders from IITs/IISc/NITs.",
    },
    {
      icon: Award,
      title: "Research & Publication Incentives",
      desc: "Cash rewards and performance incentives for high-impact Scopus/WoS journal publications and granted patents.",
    },
    {
      icon: TrendingUp,
      title: "Conference Sponsorship",
      desc: "Financial assistance and Duty Leave for presenting research papers at reputed national and international conferences.",
    },
    {
      icon: Sparkles,
      title: "Internal Seed Funding",
      desc: "Dedicated institutional seed grants to kickstart innovative interdisciplinary projects and prototype development.",
    },
    {
      icon: ShieldCheck,
      title: "Health & Medical Insurance",
      desc: "Comprehensive health insurance policy for employees & family along with on-campus free medical dispensary.",
    },
    {
      icon: Landmark,
      title: "Retirement & Social Security",
      desc: "Employees' Provident Fund (EPF), Gratuity benefits, and Encashment of Accumulated Earned Leave.",
    },
    {
      icon: Building2,
      title: "Campus Housing & Transport",
      desc: "Subsidized staff quarters within serene campus surroundings and complimentary bus transportation facilities.",
    },
    {
      icon: HeartHandshake,
      title: "Child Education & Wellness",
      desc: "Tuition fee concessions for children of employees, access to campus sports complex, gymnasium, and yoga center.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pt-20">
      <Header />
      <main className="flex-1">
      <SEO
        title="Careers & Faculty Recruitment | MITS Deemed to be University"
        description="Explore career opportunities, faculty positions, Vice-Chancellor (VC) position, Director Training & Placements recruitment, and employee benefits at Madanapalle Institute of Technology & Science (MITS)."
      />

      {/* Hero Banner */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-bold uppercase tracking-wider mb-4">
                <Briefcase className="w-4 h-4 text-blue-400" />
                Join Our Academic Leadership & Team
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                Build Your Future at MITS
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Madanapalle Institute of Technology &amp; Science (MITS), Deemed to be University, invites passionate educators, researchers, and administrators to shape the next generation of global leaders.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sub-tab Navigation Strip */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-none gap-1 py-2">
            {careerTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-sm md:text-sm font-semibold transition-all shrink-0 ${
                  activeTab === t.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* TAB 1 — OVERVIEW / CAREERS */}
          {activeTab === "overview" && (
            <div className="space-y-10">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Welcome to MITS Careers</h2>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Our goal is to equip students with the knowledge, skills, and leadership abilities needed to pursue environmental management and technical leadership positions in industry, government, consulting, and business organizations.
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    We are a pioneer in technical education in this region and are committed to build an effective team that performs at the highest standards and upholds our legacy of excellence. Due to our blistering pace of growth, we continuously seek competent and dedicated professionals across academic, management, and support functions.
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    MITS strives to create an attractive and supportive work environment that enables employees to achieve excellence and take pride in their accomplishments. We are committed to provide a rewarding and enriching MITS experience for all staff members. We value and respect our employees and actively involve them in decision-making processes. Promoting equal opportunity, openness, freedom of expression, and social responsibility is central to our success.
                  </p>
                </div>
              </ScrollReveal>

              {/* Teach for MITS and Enjoy */}
              <ScrollReveal delay={0.05}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <SectionHeading title="Teach for MITS and Enjoy" />
                    <ul className="space-y-3.5">
                      {[
                        "A mature and motivated student community",
                        "A talented and diverse student body",
                        "Access to the latest instructional technologies",
                        "Comprehensive training and ongoing professional support",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <SectionHeading title="Equal Employment Opportunity Policy" />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      MITS is committed to a policy of equal employment opportunity and does not discriminate against any employee or applicant on the basis of race, age, sex, color, physical or mental disability, religion, sexual orientation, marital status, national origin, or political affiliation.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Featured Key Roles */}
              <ScrollReveal delay={0.08}>
                <div>
                  <SectionHeading title="Featured Key Positions" subtitle="Key managerial and operational leadership roles at MITS." />
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                    {featuredRoles.map((role, i) => (
                      <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="aspect-[4/3] bg-muted overflow-hidden">
                          <img
                            src={role.img}
                            alt={role.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://placehold.co/600x450/1e293b/38bdf8?text=Key+Position";
                            }}
                          />
                        </div>
                        <div className="p-5">
                          <span className="text-[11px] font-bold text-primary uppercase tracking-wider">{role.dept}</span>
                          <h3 className="font-bold text-foreground text-base mt-1">{role.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* What We Do Here */}
              <ScrollReveal delay={0.1}>
                <div className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
                  <SectionHeading title="What We Do Here" subtitle="A vibrant culture of collaborative learning and innovation." />
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    {whatWeDoList.map((item, idx) => (
                      <div key={idx} className="bg-card border border-border rounded-xl p-4 flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        </div>
                        <h4 className="font-semibold text-foreground text-sm leading-snug">{item.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Apply Banner */}
              <ScrollReveal delay={0.12}>
                <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-amber-300 drop-shadow-sm">Applications Invited for Faculty Positions</h3>
                    <p className="text-white/90 text-sm mt-1">Submit your CV and credentials to join our distinguished faculty team.</p>
                  </div>
                  <a
                    href="mailto:jobs@mits.ac.in"
                    className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors shrink-0 shadow-lg"
                  >
                    <Mail className="w-4 h-4" />
                    jobs@mits.ac.in
                  </a>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* TAB 2 — VC POSITION */}
          {activeTab === "vc" && (
            <div className="space-y-6">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl p-2 sm:p-4">
                  {/* Full VC recruitment poster image */}
                  <div className="w-full rounded-xl overflow-hidden shadow-md bg-white">
                    <img
                      src="https://mits.ac.in/assets/vcposition.jpeg"
                      alt="MITS Vice-Chancellor Recruitment Poster"
                      className="w-full h-auto object-contain mx-auto"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://mits.ac.in/assets/images/vcpos.png";
                      }}
                    />
                  </div>

                  {/* HOW TO APPLY BAR */}
                  <div className="bg-[#0b2c5f] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mt-6">
                    <div className="space-y-2">
                      <h4 className="font-extrabold text-white text-lg sm:text-xl tracking-wide uppercase">HOW TO APPLY</h4>
                      <p className="text-slate-200 text-sm sm:text-sm">
                        Eligible and interested academic leaders are invited to submit their detailed CV with Vision Statement to:
                      </p>
                      <div className="pt-1">
                        <a
                          href="mailto:leadershipsearch@mits.ac.in"
                          className="inline-block bg-[#ffd166] text-[#0b2c5f] font-bold text-sm sm:text-base px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors shadow-md"
                        >
                          leadershipsearch@mits.ac.in
                        </a>
                      </div>
                    </div>
                    <div className="text-center md:text-right shrink-0">
                      <p className="font-extrabold text-white text-sm sm:text-lg tracking-wider uppercase">
                        LAST DATE : 15 MAY 2026
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* TAB 3 — DIRECTOR TRAINING & PLACEMENTS */}
          {activeTab === "director-tp" && (
            <div className="space-y-6">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl p-2 sm:p-4">
                  {/* Full Director T&P poster image */}
                  <div className="w-full rounded-xl overflow-hidden shadow-md bg-white">
                    <img
                      src="https://mits.ac.in/assets/dtp5.jpg"
                      alt="Director Training & Placements Position Poster"
                      className="w-full h-auto object-contain mx-auto"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://mits.ac.in/assets/images/dtp.png";
                      }}
                    />
                  </div>

                  {/* HOW TO APPLY BAR */}
                  <div className="bg-[#0b2c5f] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mt-6">
                    <div className="space-y-2">
                      <h4 className="font-extrabold text-white text-lg sm:text-xl tracking-wide uppercase">HOW TO APPLY</h4>
                      <p className="text-slate-200 text-sm sm:text-sm">
                        Eligible and interested Candidates are invited to submit their Application to:
                      </p>
                      <div className="pt-1">
                        <a
                          href="mailto:executivesearch@mits.ac.in"
                          className="inline-block bg-[#ffd166] text-[#0b2c5f] font-bold text-sm sm:text-base px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors shadow-md"
                        >
                          executivesearch@mits.ac.in
                        </a>
                      </div>
                    </div>
                    <div className="text-center md:text-right shrink-0">
                      <p className="font-extrabold text-white text-sm sm:text-lg tracking-wider uppercase">
                        LAST DATE : 20 MAY 2026
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* TAB 4 — DEAN POSITIONS */}
          {activeTab === "deans" && (
            <div className="space-y-6">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
                  <div className="text-center space-y-3">
                    <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">
                      Deans Recruitment Drive for the Academic Year 2026-27
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-sm max-w-4xl mx-auto leading-relaxed text-justify">
                      Madanapalle Institute of Technology &amp; Science (MITS) since its establishment in 1998, has evolved into an Autonomous Institution in 2014 and was conferred Deemed to be University status by Ministry of Education &amp; UGC, New Delhi vide Notification No. 9-1/2025-U.3(A) dated 15th July, 2025. MITS Deemed to be University is poised for exponential growth invites applications from self-motivated, committed and competent academic leaders who can make a difference and add significant value to the University.
                    </p>
                    <p className="text-red-700 dark:text-red-400 font-bold text-sm md:text-sm pt-2">
                      Applications received for the mentioned positions till 30.04.2026 will be scrutinized and Interviews shall be conducted in the month of May 2026.
                    </p>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto border border-red-900/30 rounded-xl shadow-sm">
                    <h3 className="font-bold text-lg text-foreground px-4 py-3 bg-muted/40 border-b border-border">Dean Positions</h3>
                    <table className="w-full text-left text-sm md:text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#8b0000] text-white font-bold">
                          <th className="p-3.5 border-r border-red-950/20 w-1/3 min-w-[200px]">Positions</th>
                          <th className="p-3.5">Qualification, Experience &amp; Pay</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border bg-card">
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-bold text-foreground align-top border-r border-border">
                            Dean - Artificial Intelligence &amp; Machine Learning
                          </td>
                          <td className="p-4 space-y-2 text-muted-foreground">
                            <p><strong className="text-red-800 dark:text-red-400">Qualification:</strong> Ph.D. in appropriate discipline from IIT / NIT / IIM / Foreign University (with First class at B.Tech. &amp; M.Tech.)</p>
                            <p><strong className="text-red-800 dark:text-red-400">Experience:</strong> Minimum 15 years of Post Ph.D. experience in Academics / Research / Industry and relevant experience for the offered positions</p>
                            <p><strong className="text-red-800 dark:text-red-400">Salary:</strong> As per the revised AICTE Pay scale, upto Rs.41 LPA based on the Credentials</p>
                            <p className="text-sm italic"><strong className="text-red-800 dark:text-red-400">Note:</strong> Applicants for the positions must also meet the eligibility criteria as specified in the UGC guidelines.</p>
                          </td>
                        </tr>
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-bold text-foreground align-top border-r border-border">
                            Dean - Online &amp; Distance Education
                          </td>
                          <td className="p-4 space-y-2 text-muted-foreground">
                            <p><strong className="text-red-800 dark:text-red-400">Qualification:</strong> Ph.D. in appropriate discipline from IIT / NIT / IIM / Foreign University (with First class at B.Tech. &amp; M.Tech.)</p>
                            <p><strong className="text-red-800 dark:text-red-400">Experience:</strong> Minimum 15 years of Post Ph.D. experience in Academics / Research / Industry and relevant experience for the offered positions</p>
                            <p><strong className="text-red-800 dark:text-red-400">Salary:</strong> As per the revised AICTE Pay scale, upto Rs.36 LPA based on the Credentials</p>
                            <p className="text-sm italic"><strong className="text-red-800 dark:text-red-400">Note:</strong> Applicants for the positions must also meet the eligibility criteria as specified in the UGC guidelines.</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Red Notice Box & Contact Card */}
                  <div className="space-y-4 pt-4">
                    <div className="bg-[#8b0000] text-white text-center p-4 rounded-xl font-semibold text-sm md:text-sm shadow-md">
                      Applications received for the above mentioned positions till 30.04.2026, will be scrutinized and interviews shall be conducted in the month of May 2026. Selected applicants shall be sent offer letters and can join the university on or before 01-07-2026.
                    </div>

                    <div className="bg-card border-2 border-red-800/40 rounded-xl p-6 text-center space-y-2 shadow-sm">
                      <p className="text-sm font-bold text-foreground">
                        Interested applicants may send their updated resumes to{" "}
                        <a href="mailto:jobs@mits.ac.in" className="text-blue-600 dark:text-blue-400 hover:underline">
                          jobs@mits.ac.in
                        </a>
                      </p>
                      <p className="text-sm sm:text-sm font-bold text-red-800 dark:text-red-400">
                        For further details, please contact: 9100080999 / 9160020744 / 9100973274
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* TAB 5 — FACULTY POSITIONS */}
          {activeTab === "faculty" && (
            <div className="space-y-6">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
                  <div className="text-center space-y-3">
                    <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">
                      Faculty Recruitment Drive for the Academic Year 2026-27
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-sm max-w-4xl mx-auto leading-relaxed text-justify">
                      Madanapalle Institute of Technology &amp; Science (MITS) since its establishment in 1998, has evolved into an Autonomous Institution in 2014 and was conferred Deemed to be University status by Ministry of Education &amp; UGC, New Delhi vide Notification No. 9-1/2025-U.3(A) dated 15th July, 2025. MITS Deemed to be University is poised for exponential growth invites applications from self-motivated, committed and competent academic leaders who can make a difference and add significant value to the University.
                    </p>
                  </div>

                  {/* Faculty Table */}
                  <div className="overflow-x-auto border border-red-900/30 rounded-xl shadow-sm">
                    <h3 className="font-bold text-lg text-foreground px-4 py-3 bg-muted/40 border-b border-border">Faculty Positions</h3>
                    <table className="w-full text-left text-sm md:text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#8b0000] text-white font-bold">
                          <th className="p-3.5 border-r border-red-950/20 w-1/4 min-w-[150px]">Department</th>
                          <th className="p-3.5 border-r border-red-950/20 w-1/4 min-w-[150px]">Positions</th>
                          <th className="p-3.5">Qualification, Experience &amp; Pay</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border bg-card">
                        {/* School of Computing */}
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td rowSpan={4} className="p-4 font-bold text-foreground align-top border-r border-border bg-muted/10">
                            School of Computing
                          </td>
                          <td className="p-4 font-semibold text-foreground align-top border-r border-border">
                            Professor
                          </td>
                          <td className="p-4 space-y-1.5 text-muted-foreground">
                            <p><strong className="text-red-800 dark:text-red-400">Qualification:</strong> Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. &amp; M.Tech.)</p>
                            <p><strong className="text-red-800 dark:text-red-400">Specialization:</strong> CSE - Artificial Intelligence / Machine Learning / Data Science / Cyber Security / Robotics</p>
                            <p><strong className="text-red-800 dark:text-red-400">Experience:</strong> Minimum 12 Years of Post Ph.D. experience in Academics / Research / Industry</p>
                            <p><strong className="text-red-800 dark:text-red-400">Salary:</strong> As per the revised AICTE Pay scale, upto Rs.36 LPA.</p>
                            <p className="text-sm font-bold text-red-700 dark:text-red-400">Higher pay for deserving applicants.</p>
                          </td>
                        </tr>
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold text-foreground align-top border-r border-border">
                            Associate Professor
                          </td>
                          <td className="p-4 space-y-1.5 text-muted-foreground">
                            <p><strong className="text-red-800 dark:text-red-400">Qualification:</strong> Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. &amp; M.Tech.)</p>
                            <p><strong className="text-red-800 dark:text-red-400">Specialization:</strong> CSE - Artificial Intelligence / Machine Learning / Data Science / Cyber Security / Robotics</p>
                            <p><strong className="text-red-800 dark:text-red-400">Experience:</strong> Minimum 7 Years of Post Ph.D. experience in Academics / Research / Industry</p>
                            <p><strong className="text-red-800 dark:text-red-400">Salary:</strong> As per the revised AICTE Pay scale, upto Rs.30 LPA.</p>
                            <p className="text-sm font-bold text-red-700 dark:text-red-400">Higher pay for deserving applicants.</p>
                          </td>
                        </tr>
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold text-foreground align-top border-r border-border">
                            Senior Assistant Professor
                          </td>
                          <td className="p-4 space-y-1.5 text-muted-foreground">
                            <p><strong className="text-red-800 dark:text-red-400">Qualification:</strong> Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. &amp; M.Tech.)</p>
                            <p><strong className="text-red-800 dark:text-red-400">Specialization:</strong> CSE - Artificial Intelligence / Machine Learning / Data Science / Cyber Security / Robotics</p>
                            <p><strong className="text-red-800 dark:text-red-400">Experience:</strong> Minimum 2 Years of Post Ph.D. experience in Academics / Research / Industry</p>
                            <p><strong className="text-red-800 dark:text-red-400">Salary:</strong> As per the revised AICTE Pay scale, upto Rs.18 LPA.</p>
                            <p className="text-sm font-bold text-red-700 dark:text-red-400">Higher pay for deserving applicants.</p>
                          </td>
                        </tr>
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold text-foreground align-top border-r border-border">
                            Assistant Professor with M.Tech Qualification
                          </td>
                          <td className="p-4 space-y-1.5 text-muted-foreground">
                            <p><strong className="text-red-800 dark:text-red-400">Qualification:</strong> M.Tech. in appropriate discipline from a reputed university. (with First class at B.Tech. &amp; M.Tech.)</p>
                            <p><strong className="text-red-800 dark:text-red-400">Specialization:</strong> CSE - Artificial Intelligence / Machine Learning / Data Science / Cyber Security / Robotics</p>
                            <p><strong className="text-red-800 dark:text-red-400">Experience:</strong> Minimum 2 Years of Post M.Tech. experience in Academics / Research / Industry</p>
                            <p><strong className="text-red-800 dark:text-red-400">Salary:</strong> As per the revised AICTE Pay scale, upto Rs.12 LPA.</p>
                            <p className="text-sm font-bold text-red-700 dark:text-red-400">Higher pay for deserving applicants.</p>
                          </td>
                        </tr>

                        {/* Computer Applications */}
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-bold text-foreground align-top border-r border-border bg-muted/10">
                            Computer Applications
                          </td>
                          <td className="p-4 font-semibold text-foreground align-top border-r border-border">
                            Professor
                          </td>
                          <td className="p-4 space-y-1.5 text-muted-foreground">
                            <p><strong className="text-red-800 dark:text-red-400">Qualification:</strong> Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at UG &amp; M.Tech. / M.C.A)</p>
                            <p><strong className="text-red-800 dark:text-red-400">Experience:</strong> Minimum 15 Years of Post Ph.D. experience in Academics / Research / Industry</p>
                            <p><strong className="text-red-800 dark:text-red-400">Salary:</strong> As per the revised AICTE Pay scale at minimum of Rs.36 LPA.</p>
                            <p className="text-sm font-bold text-red-700 dark:text-red-400">Higher pay for deserving applicants.</p>
                          </td>
                        </tr>

                        {/* Electronics & Communication Engineering */}
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td rowSpan={3} className="p-4 font-bold text-foreground align-top border-r border-border bg-muted/10">
                            Electronics &amp; Communication Engineering
                          </td>
                          <td className="p-4 font-semibold text-foreground align-top border-r border-border">
                            Professor
                          </td>
                          <td className="p-4 space-y-1.5 text-muted-foreground">
                            <p><strong className="text-red-800 dark:text-red-400">Qualification:</strong> Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. &amp; M.Tech.)</p>
                            <p><strong className="text-red-800 dark:text-red-400">Specialization:</strong> Signal Processing / Embedded Systems / VLSI Design / Antenna Microwave</p>
                            <p><strong className="text-red-800 dark:text-red-400">Experience:</strong> Minimum 12 Years of Post Ph.D. experience in Academics / Research / Industry</p>
                            <p><strong className="text-red-800 dark:text-red-400">Salary:</strong> As per the revised AICTE Pay scale, upto Rs.30 LPA.</p>
                            <p className="text-sm font-bold text-red-700 dark:text-red-400">Higher pay for deserving applicants.</p>
                          </td>
                        </tr>
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold text-foreground align-top border-r border-border">
                            Associate Professor
                          </td>
                          <td className="p-4 space-y-1.5 text-muted-foreground">
                            <p><strong className="text-red-800 dark:text-red-400">Qualification:</strong> Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. &amp; M.Tech.)</p>
                            <p><strong className="text-red-800 dark:text-red-400">Specialization:</strong> Signal Processing / Embedded Systems / VLSI Design / Antenna Microwave</p>
                            <p><strong className="text-red-800 dark:text-red-400">Experience:</strong> Minimum 7 Years of Post Ph.D. experience in Academics / Research / Industry</p>
                            <p><strong className="text-red-800 dark:text-red-400">Salary:</strong> As per the revised AICTE Pay scale, upto Rs.28 LPA.</p>
                            <p className="text-sm font-bold text-red-700 dark:text-red-400">Higher pay for deserving applicants.</p>
                          </td>
                        </tr>
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold text-foreground align-top border-r border-border">
                            Assistant Professor
                          </td>
                          <td className="p-4 space-y-1.5 text-muted-foreground">
                            <p><strong className="text-red-800 dark:text-red-400">Qualification:</strong> Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. &amp; M.Tech.)</p>
                            <p><strong className="text-red-800 dark:text-red-400">Specialization:</strong> Signal Processing / Embedded Systems / VLSI Design / Antenna Microwave</p>
                            <p><strong className="text-red-800 dark:text-red-400">Experience:</strong> Minimum 3 Years of Post Ph.D. experience in Academics / Research / Industry</p>
                            <p><strong className="text-red-800 dark:text-red-400">Salary:</strong> As per the revised AICTE Pay scale at minimum of Rs.12 LPA.</p>
                            <p className="text-sm font-bold text-red-700 dark:text-red-400">Higher pay for deserving applicants.</p>
                          </td>
                        </tr>

                        {/* Electrical & Electronics Engineering */}
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td rowSpan={2} className="p-4 font-bold text-foreground align-top border-r border-border bg-muted/10">
                            Electrical &amp; Electronics Engineering
                          </td>
                          <td className="p-4 font-semibold text-foreground align-top border-r border-border">
                            Professor
                          </td>
                          <td className="p-4 space-y-1.5 text-muted-foreground">
                            <p><strong className="text-red-800 dark:text-red-400">Qualification:</strong> Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. &amp; M.Tech.)</p>
                            <p><strong className="text-red-800 dark:text-red-400">Specialization:</strong> Electrical Vehicle Technology / Control Systems / Power Systems</p>
                            <p><strong className="text-red-800 dark:text-red-400">Experience:</strong> Minimum 12 Years of Post Ph.D. experience in Academics / Research / Industry</p>
                            <p><strong className="text-red-800 dark:text-red-400">Salary:</strong> As per the revised AICTE Pay scale at minimum of Rs.30 LPA.</p>
                            <p className="text-sm font-bold text-red-700 dark:text-red-400">Higher pay for deserving applicants.</p>
                          </td>
                        </tr>
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold text-foreground align-top border-r border-border">
                            Associate Professor
                          </td>
                          <td className="p-4 space-y-1.5 text-muted-foreground">
                            <p><strong className="text-red-800 dark:text-red-400">Qualification:</strong> Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. &amp; M.Tech.)</p>
                            <p><strong className="text-red-800 dark:text-red-400">Specialization:</strong> Electrical Vehicle Technology / Control Systems / Power Systems</p>
                            <p><strong className="text-red-800 dark:text-red-400">Experience:</strong> Minimum 7 Years of Post Ph.D. experience in Academics / Research / Industry</p>
                            <p><strong className="text-red-800 dark:text-red-400">Salary:</strong> As per the revised AICTE Pay scale, upto Rs.28 LPA.</p>
                            <p className="text-sm font-bold text-red-700 dark:text-red-400">Higher pay for deserving applicants.</p>
                          </td>
                        </tr>

                        {/* Mathematics / Physics / Chemistry / English */}
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-bold text-foreground align-top border-r border-border bg-muted/10">
                            Mathematics / Physics / Chemistry / English
                          </td>
                          <td className="p-4 font-semibold text-foreground align-top border-r border-border">
                            Professor
                          </td>
                          <td className="p-4 space-y-1.5 text-muted-foreground">
                            <p><strong className="text-red-800 dark:text-red-400">Qualification:</strong> Ph.D. in appropriate discipline from IIT / NIT / EFLU / Foreign University. (with First Class at UG &amp; PG)</p>
                            <p><strong className="text-red-800 dark:text-red-400">Experience:</strong> Minimum 15 Years of Post Ph.D. experience in Academics / Research / Industry</p>
                            <p><strong className="text-red-800 dark:text-red-400">Salary:</strong> As per revised AICTE Pay Scale of a Minimum of Rs.30 LPA.</p>
                            <p className="text-sm font-bold text-red-700 dark:text-red-400">Higher pay for deserving applicants.</p>
                          </td>
                        </tr>

                        {/* Management Studies */}
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-bold text-foreground align-top border-r border-border bg-muted/10">
                            Management Studies
                          </td>
                          <td className="p-4 font-semibold text-foreground align-top border-r border-border">
                            Assistant Professor
                          </td>
                          <td className="p-4 space-y-1.5 text-muted-foreground">
                            <p><strong className="text-red-800 dark:text-red-400">Qualification:</strong> Ph.D. in appropriate discipline from IIM / IIT / NIT. (with First class at UG &amp; PG in Management)</p>
                            <p><strong className="text-red-800 dark:text-red-400">Experience:</strong> Minimum 2 Years of Post Ph.D. experience in Academics / Research / Industry</p>
                            <p><strong className="text-red-800 dark:text-red-400">Salary:</strong> As per the revised AICTE Pay scale at minimum of Rs.12 LPA.</p>
                            <p className="text-sm font-bold text-red-700 dark:text-red-400">Higher pay for deserving applicants.</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Red Notice Box & Contact Card */}
                  <div className="space-y-4 pt-4">
                    <div className="bg-card border-2 border-red-800/40 rounded-xl p-6 text-center space-y-2 shadow-sm">
                      <p className="text-sm font-bold text-foreground">
                        Interested applicants may send their updated resumes to{" "}
                        <a href="mailto:jobs@mits.ac.in" className="text-blue-600 dark:text-blue-400 hover:underline">
                          jobs@mits.ac.in
                        </a>
                      </p>
                      <p className="text-sm sm:text-sm font-bold text-red-800 dark:text-red-400">
                        For further details, please contact: 9100080999 / 9160020744 / 9100973274
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* TAB 6 — BENEFITS */}
          {activeTab === "benefits" && (
            <div className="space-y-8">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-8">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-3">MITS Employee Benefits</h2>
                    <p className="text-sm font-semibold text-primary">MITS offers the following opportunities and attractive Employee Benefits</p>
                  </div>

                  {/* Research Publications */}
                  <div className="space-y-6">
                    <h3 className="font-bold text-xl text-foreground border-b border-border pb-2">Research Publications:</h3>

                    {/* Category A */}
                    <div className="bg-muted/30 border border-border p-5 rounded-xl space-y-3">
                      <h4 className="font-bold text-red-800 dark:text-red-400 text-sm">Category - A : Top rated Publications</h4>
                      <p className="text-sm md:text-sm text-muted-foreground leading-relaxed">
                        The 1st author of the publication must be from MITS. The incentive amount shall be Rs. 25,000/- per publication which will be distributed in the ratio of 70:30. The 1st author necessarily from MITS shall be eligible for 70% of Rs. 25,000/- and the balance amount shall be distributed amongst the remaining authors from MITS. There shall be no limit to number of authors. The 2nd publication from the same author shall be rewarded with Rs. 30,000/-, and the 1st author shall be eligible for 70% of Rs. 30,000/- and the balance amount shall be paid as referred above. The 3rd publication from the same author shall be rewarded with Rs. 50,000/- and the 1st author shall be eligible for 70% of Rs. 50,000/- and the balance shall be distributed as referred above.
                      </p>
                      <div className="text-sm text-muted-foreground space-y-1 pl-3 border-l-2 border-primary">
                        <p className="font-bold text-foreground">The following four conditions are to be fulfilled for providing publication incentive under Category - A :</p>
                        <p>1. Journal should be indexed in SCI/SCIE/SSCI with 5-year average Impact factor &gt; 7 (for Subject area: Engineering), &gt; 14 (for Subject area: Sciences) and, &gt;3 (for Subject area: Humanities, Social Sciences and Management studies).</p>
                        <p>2. Journal should be in Top 10% Q1 rated list as per the Scopus database in the respective discipline.</p>
                        <p className="italic font-medium text-amber-700 dark:text-amber-400 mt-2">Note: The articles which does not fall under Category-A will be considered under Category B</p>
                      </div>
                    </div>

                    {/* Category B */}
                    <div className="bg-muted/30 border border-border p-5 rounded-xl space-y-2">
                      <h4 className="font-bold text-red-800 dark:text-red-400 text-sm">
                        Category - B : Science Citation Index (SCI), Science Citation Index Expanded (SCIE) and Social Science Citation Index (SSCI) Journals.
                      </h4>
                      <p className="text-sm md:text-sm text-muted-foreground leading-relaxed">
                        The 1st author of the publication must be from MITS. The incentive amount shall be Rs. 16,000/- per publication published in Q1 &amp; Q2 journals and Rs.14,000/- per publication published in Q3 &amp; Q4 journals. If the paper is contributed by more than one author, the incentive amount will be distributed in the ratio of 70:30. The 1st author shall be eligible for 70% amount and the balance amount shall be distributed amongst the remaining authors from MITS.
                      </p>
                    </div>

                    {/* Category C */}
                    <div className="bg-muted/30 border border-border p-5 rounded-xl space-y-2">
                      <h4 className="font-bold text-red-800 dark:text-red-400 text-sm">Category - C : Scopus Indexed Journals.</h4>
                      <p className="text-sm md:text-sm text-muted-foreground leading-relaxed">
                        The 1st author of the publication must be from MITS. The incentive amount shall be Rs. 11,000/- per publication published in Q1 &amp; Q2 journals and Rs.9,000/- per publication published in Q3 &amp; Q4 journals. If the paper is contributed by more than one author, the incentive amount will be distributed in the ratio of 70:30. The 1st author shall be eligible for 70% amount and the balance amount shall be distributed amongst the remaining authors from MITS.
                      </p>
                    </div>

                    {/* Category D */}
                    <div className="bg-muted/30 border border-border p-5 rounded-xl space-y-2">
                      <h4 className="font-bold text-red-800 dark:text-red-400 text-sm">Category - D : For book chapter publications reflecting in Scopus Database.</h4>
                      <p className="text-sm md:text-sm text-muted-foreground leading-relaxed">
                        The 1st author of the publication must be from MITS. The incentive amount shall be Rs. 3,000/- per book chapter. If the book chapter is contributed by more than one author, the incentive amount will be distributed in the ratio of 70:30. The 1st author shall be eligible for 70% amount and the balance amount shall be distributed amongst the remaining authors from MITS.
                      </p>
                    </div>

                    {/* Category E */}
                    <div className="bg-muted/30 border border-border p-5 rounded-xl space-y-2">
                      <h4 className="font-bold text-red-800 dark:text-red-400 text-sm">
                        Category - E : If 1st author is not from 'Madanapalle Institute of Technology &amp; Science'.
                      </h4>
                      <p className="text-sm md:text-sm text-muted-foreground leading-relaxed">
                        The articles published under Category A, Category B, Category C &amp; Category D will get an incentive equivalent to 30% of the total amount of the respective category. The amount shall be distributed amongst the authors from MITS.
                      </p>
                    </div>

                    {/* Category F */}
                    <div className="bg-muted/30 border border-border p-5 rounded-xl space-y-2">
                      <h4 className="font-bold text-red-800 dark:text-red-400 text-sm">
                        Category - F : Research articles published in ABDC indexed (only A&amp;B) journals, open-access journals indexed by WOS/Scopus and conference proceedings published in the Scopus database. The journal publisher should be Nature, IEEE, Elsevier, Springer Nature, Taylor &amp; Francis, Wiley, SAGE, ASCE, ASME, Inderscience, MDPI, AMS, AIP, IOP, Cambridge University Press, ACS.
                      </h4>
                      <p className="text-sm md:text-sm text-muted-foreground leading-relaxed">
                        The incentive for articles published in Category - F shall be 50% of the amount specified for Categories A to E.
                      </p>
                      <p className="text-sm italic text-red-700 dark:text-red-400 font-medium">
                        Note: Articles published in Q1 journal under 'Category F' shall be eligible to get an additional incentive amount of Rs.2000 per paper for 'Categories A to C' and Rs.1000 per paper for 'Categories E'.
                      </p>
                    </div>

                    {/* Category G */}
                    <div className="bg-muted/30 border border-border p-5 rounded-xl space-y-2">
                      <h4 className="font-bold text-red-800 dark:text-red-400 text-sm">
                        Category - G : Student publications (Scopus indexed Journals and conference proceedings):
                      </h4>
                      <p className="text-sm md:text-sm text-muted-foreground leading-relaxed">
                        The articles published under Category G will get an incentive amount of Rs. 1000/- per student in a research article. Number of students should be equal to the student batch size in the student project work/internship.
                      </p>
                    </div>
                  </div>

                  {/* Consultancy Projects */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-foreground border-b border-border pb-2">Consultancy Projects</h3>
                    <ul className="space-y-3 text-sm md:text-sm text-muted-foreground">
                      <li className="flex items-start gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-700 shrink-0 mt-1.5"></span>
                        <span>If the faculty and staff contributed their knowledge, time and skill for the Consultancy Projects without utilising the resources of the Institute (like laboratory, equipment's, computer, software etc.) they will get an incentive of 70% of the net amount earned through the project.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-700 shrink-0 mt-1.5"></span>
                        <span>If the resources of the Institute (like laboratory, equipment's, computer, software etc.) and other facilities like OD etc. have been utilised for the execution of Consultancy projects the faculty and the staff involved in such projects will get 50% of the net amount earned from the project.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Funded Project Proposals */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-foreground border-b border-border pb-2">Funded Project Proposals</h3>
                    <div className="flex items-start gap-2.5 text-sm md:text-sm text-muted-foreground">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-700 shrink-0 mt-1.5"></span>
                      <span>10% of the total Non-Recurring grant of funded Research Project will be paid as incentive to Project Investigator/Investigators. 5% of such grant will be paid on receipt of first instalment of research project grant and the remaining balance of 5% amount on completion and submission of all relevant documents to the funding agency and after receipt of final instalment of the research grant.</span>
                    </div>
                  </div>

                  {/* Conferences / Seminars / Workshops / Symposia */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-foreground border-b border-border pb-2">Conferences / Seminars / Workshops / Symposia</h3>
                    <div className="flex items-start gap-2.5 text-sm md:text-sm text-muted-foreground">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-700 shrink-0 mt-1.5"></span>
                      <span>Full sponsorship (limited to Rs.15,000/- each) is also provided to all faculty members after completion of the probation period for a maximum of two conferences / seminars / workshops / symposiums per year held within India and during the vacation time at IITs, NITs. Beyond the stipulated two opportunities, only registration fee may be payable at the discretion of Management.</span>
                    </div>
                  </div>

                  {/* Hospitalization Benefits */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-foreground border-b border-border pb-2">Hospitalization Benefits</h3>
                    <div className="flex items-start gap-2.5 text-sm md:text-sm text-muted-foreground">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-700 shrink-0 mt-1.5"></span>
                      <span>Contributory Cashless Medical Health Insurance Scheme limited to Rs. 5 Lakhs on Family floater scheme</span>
                    </div>
                  </div>

                  {/* Other Benefits */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-foreground border-b border-border pb-2">Other Benefits</h3>
                    <ul className="space-y-2 text-sm md:text-sm text-muted-foreground">
                      {[
                        "Sports and Gym facilities in the Campus.",
                        "Casual leave for 15 days in a year on prorate basis based on date of joining in the 1st year.",
                        "Vacation of 3 days, 1 week and 2 weeks depending on service.",
                        "Flexi work hours of 8 hours between 8am to 6 pm. 2nd & 4th Saturdays are holidays.",
                        "Paid vacation during summer as per institution norms.",
                        "Research seed fund support.",
                        "Leaves available (CL, ML etc.,)",
                      ].map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-700 shrink-0 mt-1.5"></span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Special Benefits for Ph.D. holders */}
                  <div className="space-y-3 bg-red-900/5 border border-red-900/20 p-5 rounded-2xl">
                    <h3 className="font-bold text-lg text-red-900 dark:text-red-400 border-b border-red-900/20 pb-2">Special Benefits for Ph.D. holders</h3>
                    <ul className="space-y-2 text-sm md:text-sm text-muted-foreground">
                      <li className="flex items-start gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-700 shrink-0 mt-1.5"></span>
                        <span>Mobile Sim with 4G data card.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-700 shrink-0 mt-1.5"></span>
                        <span>News Paper will be provided at the residence.</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </ScrollReveal>
            </div>
          )}

          {/* TAB 7 — PRESS RELEASE */}
          {activeTab === "press" && (
            <div className="space-y-6">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-2">Press Release</h2>
                    <p className="text-muted-foreground text-sm md:text-sm">
                      Official recruitment drive notifications and advertisements published in leading national dailies.
                    </p>
                  </div>

                  {/* Advertisements Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 10.04.2023 Advertised on Website",
                        img: "https://mits.ac.in/public/uploads/pressrelease/Advertisement -JNTUA Ratification Paper -2023 copy_page-0001.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 25.11.2020 Hindu Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/20-hinduclip-25-11-2020.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 19.02.2020 Times of India",
                        img: "https://mits.ac.in/public/uploads/pressrelease/18-times19-02-2020.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 18.02.2020 Eenadu Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/17-eenadu2020-18.02.2020.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 06.04.2016 Hindu Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/16-The Hindu Papert-06.04.2016.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 27.02.2015 Eenadu Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/15-EENADU Paper-27.02.2015.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 04.03.2015 The Hindu Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/14-The Hindu Paper-04.03.2015.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 22.04.2015 Hindu Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/13-The Hindu Paper-22.04.2015.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 12.03.2014 The Hindu Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/12-The Hindu Paper-12.03.2014.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 14.03.2014 EENADU Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/11-EEnadu Paper-14.03.2014.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 08.03.2013 EEnadu Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/10-EENADU Paper-08.03.2013.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 13.03.2013 The Hindu Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/9-The Hindu Paper-13.03.2013.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 27.03.2013 Deccan Herald (Bangalore)",
                        img: "https://mits.ac.in/public/uploads/pressrelease/8-Deccan Herald Paper (Bangalore)-27.03.2013.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 21.11.2012 The Hindu Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/7-The Hindu Paper-21.11.2012.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 16.11.2012 EENADU Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/6-Eenadu Paper-16.11.2012.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 29.08.2012 The Hindu Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/5-Hindu Paper-29.08.2012.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 21.08.2012 EEnadu Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/4-Eenadu Paper-21.08.2012.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 21.08.2012 Eenadu Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/3-Eenadu Paper-21.08.2012.jpg",
                      },
                      {
                        title: "Faculty Recruitment",
                        paper: "Date of the Advertisement : 04.04.2012 The Hindu Paper",
                        img: "https://mits.ac.in/public/uploads/pressrelease/2-Hindu Paper-04.04.2012.jpg",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                        <div className="aspect-[3/4] bg-muted overflow-hidden p-2">
                          <img
                            src={encodeURI(item.img)}
                            alt={item.title}
                            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://placehold.co/400x550/1e293b/38bdf8?text=Press+Advertisement";
                            }}
                          />
                        </div>
                        <div className="p-4 bg-muted/20 border-t border-border flex-1 flex flex-col justify-between">
                          <h4 className="font-bold text-red-800 dark:text-red-400 text-sm sm:text-sm">{item.title}</h4>
                          <p className="text-[11px] text-muted-foreground mt-1">{item.paper}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* TAB 8 — CONTACT */}
          {activeTab === "contact" && (
            <div className="space-y-6">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 max-w-2xl">
                  <SectionHeading title="Contact HR & Recruitment Office" />
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Mr. Dinesh Motakatla</h4>
                    <p className="text-primary text-sm font-semibold">Senior Manager - HR</p>
                  </div>

                  <div className="space-y-3 text-sm text-muted-foreground border-t border-border pt-4">
                    <p className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary shrink-0" />
                      <span>
                        Madanapalle Institute of Technology &amp; Science<br />
                        Deemed to be University<br />
                        Madanapalle-Kadiri Road, Kurabalakota Mandal, Madanapalle - 517325<br />
                        Andhra Pradesh, India
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <span>Phone: +91 9160020744 / 9100973274</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <span>Email: <a href="mailto:jobs@mits.ac.in" className="text-primary hover:underline font-semibold">jobs@mits.ac.in</a>, <a href="mailto:hr@mits.ac.in" className="text-primary hover:underline font-semibold">hr@mits.ac.in</a></span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;

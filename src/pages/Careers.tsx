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
  MapPin,
  ExternalLink,
  ChevronRight,
  FileText,
  FileCheck,
  Clock,
  Heart,
  Globe,
  X,
  ZoomIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-6">
    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">{title}</h3>
    {subtitle && <p className="text-muted-foreground text-base mt-1.5 leading-relaxed">{subtitle}</p>}
  </div>
);

const Careers = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const careerTabs = [
    { id: "overview", label: "Careers" },
    { id: "leadership", label: "Leadership Positions" },
    { id: "faculty", label: "Faculty Positions" },
    { id: "benefits", label: "Benefits" },
    { id: "press", label: "Press Release" },
    { id: "contact", label: "Contact" },
  ];

  // Administrative / Featured roles on Careers Tab
  const adminRoles = [
    {
      title: "Chief Finance Officer",
      img: "https://mits.ac.in/public/uploads/career/car-img-3.jpg",
      dept: "Finance & Accounts",
    },
    {
      title: "Senior Placement officer",
      img: "https://mits.ac.in/public/uploads/career/car-img-1.jpg",
      dept: "Training & Placement Cell",
    },
    {
      title: "Placement officer",
      img: "https://mits.ac.in/public/uploads/career/car-img-2.jpg",
      dept: "Training & Placement Cell",
    },
  ];

  // "Teach for MITS and enjoy" items
  const teachEnjoyItems = [
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

  // Leadership Positions Data
  const leadershipPositions = [
    {
      title: "Pro Vice-Chancellor (Academics)",
      qualification:
        "Ph.D. in appropriate discipline from IIT / NIT / IIM / Foreign University (with First class at B.Tech. & M.Tech.)",
      experience: [
        "Minimum 15 years of Post Ph.D. experience in Academics / Research / Industry and relevant experience for the offered positions",
        "Distinguished academic and administrative experience.",
        "Significant experience in university-level academic leadership.",
        "Proven track record in academic governance, curriculum development and institutional development.",
        "Experience in NAAC, NBA, NIRF and UGC regulatory processes will be preferred.",
      ],
      salary: "As per the revised AICTE Pay scale, upto Rs.60 LPA based on the Credentials",
    },
    {
      title: "Dean - Artificial Intelligence & Machine Learning",
      qualification:
        "Ph.D. in appropriate discipline from IIT / NIT / IIM / Foreign University (with First class at B.Tech. & M.Tech.)",
      experience: [
        "Minimum 15 years of Post Ph.D. experience in Academics / Research / Industry and relevant experience for the offered positions",
      ],
      salary: "As per the revised AICTE Pay scale, upto Rs.50 LPA based on the Credentials",
    },
    {
      title: "Director - Admissions",
      qualification:
        "Min Postgraduate degree in Management, Education, Marketing or a relevant discipline.",
      experience: [
        "Minimum 10–15 years of relevant professional experience.",
        "Significant experience in university admissions, student recruitment, educational marketing or institutional outreach.",
        "Proven leadership experience in managing large admission teams and achieving enrolment targets.",
      ],
      salary: "As per the revised AICTE Pay scale, upto Rs.42 LPA based on the Credentials",
    },
    {
      title: "Director - Online & Distance Education",
      qualification:
        "Ph.D. in appropriate discipline from IIT / NIT / IIM / Foreign University (with First class at B.Tech. & M.Tech.)",
      experience: [
        "Minimum 15 years of Post Ph.D. experience in Academics / Research and relevant experience for the offered positions",
        "Significant experience in higher education administration, academic leadership and institutional development.",
        "Proven experience in Online Education, Open and Distance Learning (ODL), digital learning or university-level academic administration.",
        "Strong knowledge of UGC-DEB regulations, statutory compliance requirements and online education frameworks.",
        "Demonstrated ability to lead multidisciplinary academic, administrative and technical teams.",
        "Experience in strategic planning, programme development, academic operations and institutional growth.",
        "Experience in establishing, developing or managing an Online & Distance Education Directorate, Centre or School.",
        "Expertise in Learning Management Systems (LMS), MOOCs, SWAYAM and digital content development.",
        "Experience in designing, developing and delivering online and distance education programmes.",
        "Familiarity with NAAC accreditation, NIRF, academic audits and institutional quality assurance processes.",
        "Experience in student recruitment, digital learning operations, learner support systems and institutional collaborations.",
        "Proven track record in expanding online and distance education enrolments and developing sustainable academic delivery models.",
        "Experience in managing digital education platforms, technology integration and virtual learning environments.",
      ],
      salary: "As per the revised AICTE Pay scale, upto Rs.42 LPA based on the Credentials",
    },
  ];

  // Faculty Positions Data
  const facultyGroups = [
    {
      department: "School of Computing",
      roles: [
        {
          position: "Professor",
          qualification:
            "Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. & M.Tech.)",
          specialization:
            "CSE - Artificial Intelligence / Machine Learning / Data Science / Cyber Security / Robotics",
          experience: "Minimum 12 Years of Post Ph.D. experience in Academics / Research / Industry",
          salary: "As per the revised AICTE Pay scale, upto Rs.36 LPA. Higher pay for deserving applicants.",
        },
        {
          position: "Associate Professor",
          qualification:
            "Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. & M.Tech.)",
          specialization:
            "CSE - Artificial Intelligence / Machine Learning / Data Science / Cyber Security / Robotics",
          experience: "Minimum 7 Years of Post Ph.D. experience in Academics / Research / Industry",
          salary: "As per the revised AICTE Pay scale, upto Rs.30 LPA. Higher pay for deserving applicants.",
        },
        {
          position: "Senior Assistant Professor",
          qualification:
            "Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. & M.Tech.)",
          specialization:
            "CSE - Artificial Intelligence / Machine Learning / Data Science / Cyber Security / Robotics",
          experience: "Minimum 2 Years of Post Ph.D. experience in Academics / Research / Industry",
          salary: "As per the revised AICTE Pay scale, upto Rs.18 LPA. Higher pay for deserving applicants.",
        },
        {
          position: "Assistant Professor with M.Tech Qualification",
          qualification:
            "M.Tech. in appropriate discipline from a reputed university. (with First class at B.Tech. & M.Tech.)",
          specialization:
            "CSE - Artificial Intelligence / Machine Learning / Data Science / Cyber Security / Robotics",
          experience: "Minimum 2 Years of Post M.Tech. experience in Academics / Research / Industry",
          salary: "As per the revised AICTE Pay scale, upto Rs.12 LPA. Higher pay for deserving applicants.",
        },
      ],
    },
    {
      department: "Computer Applications",
      roles: [
        {
          position: "Professor",
          qualification:
            "Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at UG & M.Tech. / M.C.A)",
          specialization: undefined,
          experience: "Minimum 15 Years of Post Ph.D. experience in Academics / Research / Industry",
          salary: "As per the revised AICTE Pay scale at minimum of Rs.36 LPA. Higher pay for deserving applicants.",
        },
      ],
    },
    {
      department: "Electronics & Communication Engineering",
      roles: [
        {
          position: "Professor",
          qualification:
            "Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. & M.Tech.)",
          specialization: "Signal Processing / Embedded Systems / VLSI Design / Antenna Microwave",
          experience: "Minimum 12 Years of Post Ph.D. experience in Academics / Research / Industry",
          salary: "As per the revised AICTE Pay scale, upto Rs.30 LPA. Higher pay for deserving applicants.",
        },
        {
          position: "Associate Professor",
          qualification:
            "Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. & M.Tech.)",
          specialization: "Signal Processing / Embedded Systems / VLSI Design / Antenna Microwave",
          experience: "Minimum 7 Years of Post Ph.D. experience in Academics / Research / Industry",
          salary: "As per the revised AICTE Pay scale, upto Rs.28 LPA. Higher pay for deserving applicants.",
        },
        {
          position: "Assistant Professor",
          qualification:
            "Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. & M.Tech.)",
          specialization: "Signal Processing / Embedded Systems / VLSI Design / Antenna Microwave",
          experience: "Minimum 3 Years of Post Ph.D. experience in Academics / Research / Industry",
          salary: "As per the revised AICTE Pay scale at minimum of Rs.12 LPA. Higher pay for deserving applicants.",
        },
      ],
    },
    {
      department: "Electrical & Electronics Engineering",
      roles: [
        {
          position: "Professor",
          qualification:
            "Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. & M.Tech.)",
          specialization: "Electrical Vehicle Technology / Control Systems / Power Systems",
          experience: "Minimum 12 Years of Post Ph.D. experience in Academics / Research / Industry",
          salary: "As per the revised AICTE Pay scale at minimum of Rs.30 LPA. Higher pay for deserving applicants.",
        },
        {
          position: "Associate Professor",
          qualification:
            "Ph.D. in appropriate discipline from IIT / NIT / Foreign University. (with First class at B.Tech. & M.Tech.)",
          specialization: "Electrical Vehicle Technology / Control Systems / Power Systems",
          experience: "Minimum 7 Years of Post Ph.D. experience in Academics / Research / Industry",
          salary: "As per the revised AICTE Pay scale, upto Rs.28 LPA. Higher pay for deserving applicants.",
        },
      ],
    },
    {
      department: "Mathematics, Physics, Chemistry, English",
      roles: [
        {
          position: "Professor",
          qualification:
            "Ph.D. in appropriate discipline from IIT / NIT / EFLU / Foreign University (with First Class at UG & PG).",
          specialization: undefined,
          experience: "Minimum 15 Years of Post Ph.D. experience in Academics / Research / Industry",
          salary: "As per revised AICTE Pay Scale of a Minimum of Rs.30 LPA. Higher pay for deserving applicants.",
        },
      ],
    },
    {
      department: "Management Studies",
      roles: [
        {
          position: "Assistant Professor",
          qualification:
            "Ph.D. in appropriate discipline from IIM / IIT / NIT (with First class at UG & PG in Management)",
          specialization: undefined,
          experience: "Minimum 2 Years of Post Ph.D. experience in Academics / Research / Industry",
          salary: "As per the revised AICTE Pay scale at minimum of Rs.12 LPA. Higher pay for deserving applicants.",
        },
      ],
    },
  ];

  // Press Release Items
  const pressItems = [
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/Advertisement -JNTUA Ratification Paper -2023 copy_page-0001.jpg",
      date: "Date of the Advertisement : 10.04.2023 Advertised on Website",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/20-hinduclip-25-11-2020.jpg",
      date: "Date of the Advertisement : 25.11.2020 Hindu Paper",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/18-times19-02-2020.jpg",
      date: "Date of the Advertisement : 19.02.2020 Times of India",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/17-eenadu2020-18.02.2020.jpg",
      date: "Date of the Advertisement : 18.02.2020 Eenadu Paper",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/16-The Hindu Papert-06.04.2016.jpg",
      date: "Date of the Advertisement : 06.04.2016 Hindu Paper",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/15-EENADU Paper-27.02.2015.jpg",
      date: "Date of the Advertisement : 27.02.2015 Eenadu Paper",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/14-The Hindu Paper-04.03.2015.jpg",
      date: "Date of the Advertisement : 04.03.2015 The Hindu Paper",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/13-The Hindu Paper-22.04.2015.jpg",
      date: "Date of the Advertisement : 22.04.2015 Hindu Paper",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/12-The Hindu Paper-12.03.2014.jpg",
      date: "Date of the Advertisement : 12.03.2014 The Hindu Paper",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/11-EEnadu Paper-14.03.2014.jpg",
      date: "Date of the Advertisement : 14.03.2014 EENADU Paper",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/10-EENADU Paper-08.03.2013.jpg",
      date: "Date of the Advertisement : 08.03.2013 EEnadu Paper",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/9-The Hindu Paper-13.03.2013.jpg",
      date: "Date of the Advertisement : 13.03.2013 The Hindu Paper",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/8-Deccan Herald Paper (Bangalore)-27.03.2013.jpg",
      date: "Date of the Advertisement : 27.03.2013 Deccan Herald (Bangalore)",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/7-The Hindu Paper-21.11.2012.jpg",
      date: "Date of the Advertisement : 21.11.2012 The Hindu Paper",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/6-Eenadu Paper-16.11.2012.jpg",
      date: "Date of the Advertisement : 16.11.2012 EENADU Paper",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/5-Hindu Paper-29.08.2012.jpg",
      date: "Date of the Advertisement : 29.08.2012 The Hindu Paper",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/4-Eenadu Paper-21.08.2012.jpg",
      date: "Date of the Advertisement : 21.08.2012 EEnadu Paper",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/3-Eenadu Paper-21.08.2012.jpg",
      date: "Date of the Advertisement : 21.08.2012 Eenadu Paper",
    },
    {
      title: "Faculty Recruitment",
      img: "https://mits.ac.in/public/uploads/pressrelease/2-Hindu Paper-04.04.2012.jpg",
      date: "Date of the Advertisement : 04.04.2012 The Hindu Paper",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="Careers at MITS | Deemed to be University Faculty & Leadership Recruitment"
        description="Explore leadership and faculty recruitment opportunities at Madanapalle Institute of Technology & Science (MITS - Deemed to be University). Apply for academic and leadership positions."
        keywords="MITS careers, faculty recruitment, leadership positions, Madanapalle Institute of Technology and Science jobs, university recruitment"
      />
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white overflow-hidden">
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
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                Madanapalle Institute of Technology &amp; Science (MITS), Deemed to be University, invites passionate educators, researchers, and administrators to shape the next generation of global leaders.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Left Breadcrumb Navigation */}
        <div className="absolute bottom-4 left-4 sm:left-6 md:left-8 z-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">›</li>
              <li className="text-amber-300 font-semibold">Careers</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Navigation Sub-Menu Bar */}
      <section className="border-b bg-card sticky top-16 md:top-28 z-20 shadow-sm backdrop-blur-md bg-card/95">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto py-2.5 scrollbar-none">
            {careerTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-md transition-all duration-200 border-b-2 ${
                    isActive
                      ? "text-primary border-primary bg-primary/5 font-semibold"
                      : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Body Content */}
      <main className="container mx-auto px-4 py-12 flex-grow max-w-7xl">
        {/* ========================================================================= */}
        {/* TAB 1: CAREERS (OVERVIEW)                                                 */}
        {/* ========================================================================= */}
        {activeTab === "overview" && (
          <ScrollReveal>
            <div className="space-y-10 max-w-5xl mx-auto">
              {/* Goal Statement */}
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-3">Careers</h2>
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                  Our goal is to equip students with the knowledge, skills, and leadership abilities needed to
                  pursue environmental management positions in industry, government, consulting, and business
                  organizations.
                </p>
              </div>

              {/* Welcome to MITS */}
              <div className="space-y-5">
                <SectionHeading title="Welcome to MITS" />
                <p className="text-foreground/90 text-base md:text-[17px] leading-relaxed">
                  We are a pioneer in technical education in this region and are committed to build an effective
                  team that performs at the highest standards and upholds our legacy of excellence. Due to our
                  blistering pace of growth, we continuously seek competent and dedicated professionals across
                  academic, management, and support functions.
                </p>
                <p className="text-foreground/90 text-base md:text-[17px] leading-relaxed">
                  MITS strives to create an attractive and supportive work environment that enables employees to
                  achieve excellence and take pride in their accomplishments. We are committed to provide a
                  rewarding and enriching MITS experience for all staff members. We value and respect our employees
                  and actively involve them in decision-making processes. Promoting equal opportunity, openness,
                  freedom of expression, and social responsibility is central to our success. In recognition of your
                  outstanding contributions, we offer competitive pay and a comprehensive benefits package.
                </p>
                <p className="text-foreground/90 text-base md:text-[17px] leading-relaxed">
                  Discover the many ways MITS empowers you to apply and enhance your professional and educational
                  talents to their fullest potential.
                </p>
              </div>

              {/* Teach for MITS and enjoy */}
              <div>
                <SectionHeading title="Teach for MITS and enjoy" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                  {teachEnjoyItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="border rounded-xl p-6 bg-card hover:shadow-md transition flex flex-col items-center text-center group"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-10 h-10 object-contain"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      </div>
                      <p className="text-base font-semibold text-foreground leading-snug">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equal Employment Opportunity Policy */}
              <div className="bg-muted/40 border rounded-xl p-6 md:p-8">
                <h4 className="text-lg md:text-xl font-bold text-foreground mb-3 flex items-center gap-2.5">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  Equal Employment Opportunity Policy
                </h4>
                <p className="text-base md:text-[17px] text-foreground/90 leading-relaxed">
                  MITS is committed to a policy of equal employment opportunity and does not discriminate against
                  any employee or applicant on the basis of race, age, sex, color, physical or mental disability,
                  religion, sexual orientation, marital status, national origin, or political affiliation.
                </p>
              </div>

              {/* Administrative Positions Highlight */}
              <div>
                <SectionHeading
                  title="Administrative Positions"
                  subtitle="Key administrative roles driving academic and career operations"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  {adminRoles.map((role, idx) => (
                    <div
                      key={idx}
                      className="border rounded-xl overflow-hidden bg-card hover:shadow-md transition flex flex-col"
                    >
                      <div className="h-52 overflow-hidden bg-muted">
                        <img
                          src={role.img}
                          alt={role.title}
                          className="w-full h-full object-cover object-top hover:scale-105 transition duration-300"
                        />
                      </div>
                      <div className="p-5 flex-grow flex flex-col justify-between">
                        <div>
                          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
                            {role.dept}
                          </p>
                          <h4 className="font-bold text-lg text-foreground">{role.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Invitation for Faculty Positions Callout */}
              <div className="bg-primary text-primary-foreground p-7 rounded-xl flex flex-col md:flex-row items-center justify-between gap-5 shadow">
                <div className="space-y-1.5 text-center md:text-left">
                  <h4 className="text-xl md:text-2xl font-bold">Applications Invited for Various Faculty Positions</h4>
                  <p className="text-primary-foreground/90 text-base md:text-[17px]">
                    Interested candidates can send resumes to{" "}
                    <a href="mailto:jobs@mits.ac.in" className="underline font-bold hover:text-white">
                      jobs@mits.ac.in
                    </a>
                  </p>
                </div>
                <Button
                  variant="secondary"
                  className="font-bold text-base px-6 py-6 whitespace-nowrap bg-white text-slate-900 hover:bg-slate-100"
                  onClick={() => setActiveTab("faculty")}
                >
                  View Faculty Openings <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Contact Snapshot on Overview Tab */}
              <div className="border rounded-xl p-6 md:p-8 bg-card space-y-4">
                <h4 className="text-xl font-bold text-foreground">Contact Us</h4>
                <p className="text-base text-muted-foreground">All correspondence may be addressed to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base pt-3 border-t">
                  <div>
                    <p className="font-bold text-lg text-foreground">Mr. Dinesh Motakatla</p>
                    <p className="text-primary font-semibold text-sm">Senior Manager - HR</p>
                    <p className="text-foreground/90 mt-2 leading-relaxed">
                      Madanapalle Institute of Technology & Science
                      <br />
                      Deemed to be University
                      <br />
                      Madanapalle-Kadiri Road, Kurabalakota Mandal,
                      <br />
                      Madanapalle-517325, Andhra Pradesh, India
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="flex items-center gap-2.5 text-foreground/90">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      <span>+91 9160020744 / 9100973274</span>
                    </p>
                    <p className="flex items-center gap-2.5 text-foreground/90">
                      <Mail className="w-5 h-5 text-primary shrink-0" />
                      <a href="mailto:jobs@mits.ac.in" className="hover:underline text-primary font-semibold">
                        jobs@mits.ac.in
                      </a>
                      ,{" "}
                      <a href="mailto:shrm@mits.ac.in" className="hover:underline text-primary font-semibold">
                        shrm@mits.ac.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: LEADERSHIP POSITIONS                                               */}
        {/* ========================================================================= */}
        {activeTab === "leadership" && (
          <ScrollReveal>
            <div className="space-y-8 max-w-6xl mx-auto">
              <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">
                  Leadership Positions Recruitment Drive for the Academic Year 2026-27
                </h2>
                <p className="text-base md:text-[17px] text-foreground/90 leading-relaxed">
                  Madanapalle Institute of Technology & Science (MITS) since its establishment in 1998, has evolved
                  into an Autonomous Institution in 2014 and was conferred Deemed to be University status by Ministry
                  of Education & UGC, New Delhi vide Notification No. 9-1/2025-U.3(A) dated 15th July, 2025. MITS
                  Deemed to be University is poised for exponential growth invites applications from self-motivated,
                  committed and competent academic leaders who can make a difference and add significant value to the
                  University.
                </p>
                <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-md text-amber-900 dark:text-amber-200 text-base leading-relaxed">
                  <strong>Important Notice:</strong> Applications received for the mentioned positions till{" "}
                  <strong>20.11.2026</strong> will be scrutinized and interviews shall be conducted in{" "}
                  <strong>December 1st Week of 2026</strong>. Selected applicants shall be sent offer letters and can
                  join on or before <strong>09-01-2027</strong>.
                </div>
              </div>

              {/* Leadership Positions Table / Cards */}
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold font-display text-foreground">
                  Leadership Positions Offered
                </h3>

                <div className="border rounded-xl overflow-hidden bg-card shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-base">
                      <thead>
                        <tr className="bg-muted text-foreground border-b text-sm md:text-base uppercase tracking-wider font-bold">
                          <th className="p-4 md:p-5 w-1/3 border-r">Positions</th>
                          <th className="p-4 md:p-5 w-2/3">Qualification, Experience & Pay</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {leadershipPositions.map((pos, idx) => (
                          <tr key={idx} className="hover:bg-muted/20 transition">
                            <td className="p-5 md:p-6 align-top border-r">
                              <h4 className="font-bold text-lg md:text-xl text-foreground mb-2 leading-snug">
                                {pos.title}
                              </h4>
                              <span className="inline-block px-3 py-1 rounded text-xs md:text-sm font-semibold bg-primary/10 text-primary">
                                University Leadership
                              </span>
                            </td>
                            <td className="p-5 md:p-6 align-top space-y-4">
                              <div>
                                <p className="font-bold text-foreground text-sm uppercase tracking-wide mb-1">
                                  Qualification:
                                </p>
                                <p className="text-base text-foreground/90 leading-relaxed">{pos.qualification}</p>
                              </div>

                              <div>
                                <p className="font-bold text-foreground text-sm uppercase tracking-wide mb-2">
                                  Experience:
                                </p>
                                <ul className="space-y-2 mt-1">
                                  {pos.experience.map((exp, eIdx) => (
                                    <li
                                      key={eIdx}
                                      className="flex items-start gap-2.5 text-[15px] md:text-base text-foreground/90 leading-relaxed"
                                    >
                                      <span className="w-2 h-2 rounded-full bg-[#990000] shrink-0 mt-2" />
                                      <span>{exp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="pt-3 border-t">
                                <p className="text-[15px] md:text-base font-bold text-[#990000] dark:text-red-400">
                                  Salary:{" "}
                                  <span className="font-semibold text-foreground/90">
                                    {pos.salary.replace(/^Salary:\s*/i, "")}
                                  </span>
                                </p>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-sm md:text-[15px] text-[#990000] dark:text-red-400 font-medium">
                  Note: Applicants for the positions must also meet the eligibility criteria as specified in the UGC
                  guidelines.
                </p>
              </div>

              {/* Official Red Notice Banner */}
              <div className="bg-[#990000] text-white p-5 md:p-6 rounded-xl font-medium text-base md:text-[17px] leading-relaxed shadow-sm">
                Applications received for the above mentioned positions till <strong>20.11.2026</strong>, will be
                scrutinized and interviews shall be conducted in the month of <strong>December 1st week of 2026</strong>.
                Selected applicants shall be sent offer letters and can join the university on or before{" "}
                <strong>09-01-2026</strong>.
              </div>

              {/* Application CTA */}
              <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm space-y-4">
                <h4 className="font-bold text-foreground text-xl">How to Apply</h4>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-1">
                  <a
                    href="mailto:leadershipsearch@mits.ac.in"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#990000] text-white font-bold text-base hover:bg-[#800000] transition shadow-sm"
                  >
                    <Mail className="w-5 h-5" /> Send Resume to leadershipsearch@mits.ac.in
                  </a>
                  <p className="text-base text-foreground font-medium">
                    For further details, please contact:{" "}
                    <strong className="text-primary font-bold">9100080999 / 9160020744</strong>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: FACULTY POSITIONS                                                  */}
        {/* ========================================================================= */}
        {activeTab === "faculty" && (
          <ScrollReveal>
            <div className="space-y-8 max-w-6xl mx-auto">
              <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">
                  Faculty Recruitment Drive for the Academic Year 2026-27
                </h2>
                <p className="text-base md:text-[17px] text-foreground/90 leading-relaxed">
                  Madanapalle Institute of Technology & Science (MITS) since its establishment in 1998, has evolved
                  into an Autonomous Institution in 2014 and was conferred Deemed to be University status by Ministry
                  of Education & UGC, New Delhi vide Notification No. 9-1/2025-U.3(A) dated 15th July, 2025. MITS
                  Deemed to be University is poised for exponential growth invites applications from self-motivated,
                  committed and competent academic leaders who can make a difference and add significant value to the
                  University.
                </p>
              </div>

              {/* Faculty Positions by Department */}
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold font-display text-foreground">
                  Positions Offered by Department
                </h3>

                <div className="border rounded-xl overflow-hidden bg-card shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-base">
                      <thead>
                        <tr className="bg-muted text-foreground border-b text-sm md:text-base uppercase tracking-wider font-bold">
                          <th className="p-4 md:p-5 w-1/4 border-r">Department</th>
                          <th className="p-4 md:p-5 w-1/4 border-r">Positions</th>
                          <th className="p-4 md:p-5 w-1/2">Qualification, Experience & Pay</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {facultyGroups.map((group, gIdx) =>
                          group.roles.map((role, rIdx) => (
                            <tr key={`${gIdx}-${rIdx}`} className="hover:bg-muted/20 transition">
                              {rIdx === 0 ? (
                                <td
                                  rowSpan={group.roles.length}
                                  className="p-5 align-top font-bold text-foreground border-r bg-muted/10 text-base md:text-lg"
                                >
                                  {group.department}
                                </td>
                              ) : null}
                              <td className="p-5 align-top font-bold text-foreground text-base border-r">
                                {role.position}
                              </td>
                              <td className="p-5 align-top space-y-3 text-[15px] md:text-base leading-relaxed">
                                <div>
                                  <span className="font-bold text-foreground">Qualification: </span>
                                  <span className="text-foreground/90">{role.qualification}</span>
                                </div>
                                {role.specialization && (
                                  <div>
                                    <span className="font-bold text-foreground">Specialization: </span>
                                    <span className="text-foreground/90">{role.specialization}</span>
                                  </div>
                                )}
                                <div>
                                  <span className="font-bold text-foreground">Experience: </span>
                                  <span className="text-foreground/90">{role.experience}</span>
                                </div>
                                <div className="pt-2 border-t">
                                  <span className="font-bold text-[#990000] dark:text-red-400">Salary: </span>
                                  <span className="font-semibold text-foreground/90">{role.salary}</span>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-sm md:text-[15px] text-[#990000] dark:text-red-400 font-medium">
                  Note: Applicants for the above mentioned positions must also meet the eligibility criteria as
                  specified in the UGC guidelines.
                </p>
              </div>

              {/* Faculty Application Contact Box */}
              <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm space-y-4">
                <h4 className="font-bold text-foreground text-xl">Application Instructions</h4>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-1">
                  <a
                    href="mailto:jobs@mits.ac.in"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#990000] text-white font-bold text-base hover:bg-[#800000] transition shadow-sm"
                  >
                    <Mail className="w-5 h-5" /> Send Resume to jobs@mits.ac.in
                  </a>
                  <p className="text-base text-foreground font-medium">
                    For further details, please contact:{" "}
                    <strong className="text-primary font-bold">9100080999 / 9160020744 / 9100973274</strong>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: BENEFITS                                                           */}
        {/* ========================================================================= */}
        {activeTab === "benefits" && (
          <ScrollReveal>
            <div className="space-y-10 max-w-6xl mx-auto">
              <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm space-y-2">
                <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">
                  MITS Employee Benefits
                </h2>
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                  MITS offers the following opportunities and attractive Employee Benefits.
                </p>
              </div>

              {/* 1. Research Publications */}
              <div className="space-y-5">
                <h3 className="text-xl md:text-2xl font-bold font-display text-foreground flex items-center gap-2.5">
                  <Award className="w-6 h-6 text-primary" /> Research Publications
                </h3>

                <div className="grid grid-cols-1 gap-5 text-base">
                  {/* Category A */}
                  <div className="border rounded-xl p-6 bg-card space-y-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-foreground text-lg">
                        Category - A : Top rated Publications
                      </h4>
                      <span className="px-3 py-1 rounded text-sm font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                        Up to Rs. 50,000/-
                      </span>
                    </div>
                    <p className="text-foreground/90 text-[15px] md:text-base leading-relaxed">
                      The 1st author of the publication must be from MITS. The incentive amount shall be Rs. 25,000/-
                      per publication which will be distributed in the ratio of 70:30. The 1st author necessarily from
                      MITS shall be eligible for 70% of Rs. 25,000/- and the balance amount shall be distributed
                      amongst the remaining authors from MITS. There shall be no limit to number of authors. The 2nd
                      publication from the same author shall be rewarded with Rs. 30,000/-, and the 1st author shall be
                      eligible for 70% of Rs. 30,000/- and the balance amount shall be paid as referred above. The 3rd
                      publication from the same author shall be rewarded with Rs. 50,000/- and the 1st author shall be
                      eligible for 70% of Rs. 50,000/- and the balance shall be distributed as referred above.
                    </p>
                    <div className="bg-muted/40 p-4 rounded-lg text-sm md:text-[15px] space-y-2 border">
                      <p className="font-bold text-foreground">
                        Conditions to be fulfilled for publication incentive under Category - A:
                      </p>
                      <p className="text-foreground/90">
                        1. Journal should be indexed in SCI/SCIE/SSCI with 5-year average Impact factor &gt; 7 (for
                        Subject area: Engineering), &gt; 14 (for Subject area: Sciences) and &gt; 3 (for Subject area:
                        Humanities, Social Sciences and Management studies).
                      </p>
                      <p className="text-foreground/90">
                        2. Journal should be in Top 10% Q1 rated list as per the Scopus database in the respective
                        discipline.
                      </p>
                      <p className="text-muted-foreground italic">
                        Note: The articles which do not fall under Category-A will be considered under Category B.
                      </p>
                    </div>
                  </div>

                  {/* Category B */}
                  <div className="border rounded-xl p-6 bg-card space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-foreground text-lg">
                        Category - B : Science Citation Index (SCI), SCIE and SSCI Journals
                      </h4>
                      <span className="px-3 py-1 rounded text-sm font-bold bg-primary/10 text-primary">
                        Rs. 14,000 - 16,000/-
                      </span>
                    </div>
                    <p className="text-foreground/90 text-[15px] md:text-base leading-relaxed">
                      The 1st author of the publication must be from MITS. The incentive amount shall be Rs. 16,000/-
                      per publication published in Q1 & Q2 journals and Rs. 14,000/- per publication published in Q3 &
                      Q4 journals. If the paper is contributed by more than one author, the incentive amount will be
                      distributed in the ratio of 70:30. The 1st author shall be eligible for 70% amount and the balance
                      amount shall be distributed amongst the remaining authors from MITS.
                    </p>
                  </div>

                  {/* Category C */}
                  <div className="border rounded-xl p-6 bg-card space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-foreground text-lg">
                        Category - C : Scopus Indexed Journals
                      </h4>
                      <span className="px-3 py-1 rounded text-sm font-bold bg-primary/10 text-primary">
                        Rs. 9,000 - 11,000/-
                      </span>
                    </div>
                    <p className="text-foreground/90 text-[15px] md:text-base leading-relaxed">
                      The 1st author of the publication must be from MITS. The incentive amount shall be Rs. 11,000/-
                      per publication published in Q1 & Q2 journals and Rs. 9,000/- per publication published in Q3 & Q4
                      journals. If the paper is contributed by more than one author, the incentive amount will be
                      distributed in the ratio of 70:30. The 1st author shall be eligible for 70% amount and the balance
                      amount shall be distributed amongst the remaining authors from MITS.
                    </p>
                  </div>

                  {/* Category D */}
                  <div className="border rounded-xl p-6 bg-card space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-foreground text-lg">
                        Category - D : Book Chapter Publications in Scopus Database
                      </h4>
                      <span className="px-3 py-1 rounded text-sm font-bold bg-primary/10 text-primary">
                        Rs. 3,000/-
                      </span>
                    </div>
                    <p className="text-foreground/90 text-[15px] md:text-base leading-relaxed">
                      The 1st author of the publication must be from MITS. The incentive amount shall be Rs. 3,000/- per
                      book chapter. If the book chapter is contributed by more than one author, the incentive amount
                      will be distributed in the ratio of 70:30. The 1st author shall be eligible for 70% amount and the
                      balance amount shall be distributed amongst the remaining authors from MITS.
                    </p>
                  </div>

                  {/* Category E */}
                  <div className="border rounded-xl p-6 bg-card space-y-3">
                    <h4 className="font-bold text-foreground text-lg">
                      Category - E : If 1st author is not from ‘Madanapalle Institute of Technology & Science’
                    </h4>
                    <p className="text-foreground/90 text-[15px] md:text-base leading-relaxed">
                      The articles published under Category A, Category B, Category C & Category D will get an incentive
                      equivalent to 30% of the total amount of the respective category. The amount shall be distributed
                      amongst the authors from MITS.
                    </p>
                  </div>

                  {/* Category F */}
                  <div className="border rounded-xl p-6 bg-card space-y-3">
                    <h4 className="font-bold text-foreground text-lg">
                      Category - F : ABDC, Open-Access & Select Publisher Articles
                    </h4>
                    <p className="text-foreground/90 text-[15px] md:text-base leading-relaxed">
                      Research articles published in ABDC indexed (only A&B) journals, open-access journals indexed by
                      WOS/Scopus and conference proceedings published in the Scopus database. The journal publisher
                      should be Nature, IEEE, Elsevier, Springer Nature, Taylor & Francis, Wiley, SAGE, ASCE, ASME,
                      Inderscience, MDPI, AMS, AIP, IOP, Cambridge University Press, ACS.
                    </p>
                    <p className="text-foreground/90 text-[15px] md:text-base leading-relaxed">
                      The incentive for articles published in Category - F shall be 50% of the amount specified for
                      Categories A to E.
                    </p>
                    <p className="text-sm text-foreground/90 italic bg-muted/40 p-3 rounded border">
                      Note: Articles published in Q1 journal under ‘Category F’ shall be eligible to get an additional
                      incentive amount of Rs. 2,000 per paper for ‘Categories A to C’ and Rs. 1,000 per paper for
                      ‘Categories E’.
                    </p>
                  </div>

                  {/* Category G */}
                  <div className="border rounded-xl p-6 bg-card space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-foreground text-lg">
                        Category - G : Student Publications (Scopus indexed Journals & Conferences)
                      </h4>
                      <span className="px-3 py-1 rounded text-sm font-bold bg-primary/10 text-primary">
                        Rs. 1,000/- per student
                      </span>
                    </div>
                    <p className="text-foreground/90 text-[15px] md:text-base leading-relaxed">
                      The articles published under Category G will get an incentive amount of Rs. 1,000/- per student in
                      a research article. Number of students should be equal to the student batch size in the student
                      project work/internship.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Consultancy Projects & Funded Proposals */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-xl p-6 md:p-8 bg-card space-y-3.5">
                  <h3 className="text-xl font-bold font-display text-foreground flex items-center gap-2.5">
                    <Briefcase className="w-5 h-5 text-primary" /> Consultancy Projects
                  </h3>
                  <ul className="space-y-3 text-[15px] md:text-base text-foreground/90 leading-relaxed">
                    <li>
                      • If faculty and staff contributed their knowledge, time and skill for Consultancy Projects
                      without utilising the resources of the Institute (laboratory, equipment, computer, software,
                      etc.), they will get an incentive of <strong>70% of the net amount</strong> earned through the
                      project.
                    </li>
                    <li>
                      • If institute resources (laboratory, equipment, software, OD etc.) have been utilised, faculty
                      and staff involved will get <strong>50% of the net amount</strong> earned from the project.
                    </li>
                  </ul>
                </div>

                <div className="border rounded-xl p-6 md:p-8 bg-card space-y-3.5">
                  <h3 className="text-xl font-bold font-display text-foreground flex items-center gap-2.5">
                    <TrendingUp className="w-5 h-5 text-primary" /> Funded Project Proposals
                  </h3>
                  <p className="text-[15px] md:text-base text-foreground/90 leading-relaxed">
                    <strong>10% of the total Non-Recurring grant</strong> of funded Research Project will be paid as
                    incentive to Project Investigator/Investigators:
                  </p>
                  <ul className="space-y-2 text-[15px] md:text-base text-foreground/90">
                    <li>• <strong>5%</strong> paid on receipt of first instalment of research project grant.</li>
                    <li>
                      • <strong>5%</strong> balance paid on completion, submission of all relevant documents to the
                      funding agency, and after receipt of final instalment of research grant.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3. Conferences / Seminars / Workshops */}
              <div className="border rounded-xl p-6 md:p-8 bg-card space-y-3.5">
                <h3 className="text-xl font-bold font-display text-foreground flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-primary" /> Conferences / Seminars / Workshops / Symposia
                </h3>
                <p className="text-[15px] md:text-base text-foreground/90 leading-relaxed">
                  Full sponsorship (limited to <strong>Rs. 15,000/- each</strong>) is provided to all faculty members
                  after completion of the probation period for a maximum of <strong>two conferences / seminars /
                  workshops / symposiums per year</strong> held within India and during vacation time at IITs, NITs.
                  Beyond the stipulated two opportunities, only registration fee may be payable at the discretion of
                  Management.
                </p>
              </div>

              {/* 4. Hospitalization & Other Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-xl p-6 md:p-8 bg-card space-y-3.5">
                  <h3 className="text-xl font-bold font-display text-foreground flex items-center gap-2.5">
                    <Heart className="w-5 h-5 text-rose-500" /> Hospitalization Benefits
                  </h3>
                  <p className="text-[15px] md:text-base text-foreground/90 leading-relaxed">
                    Contributory Cashless Medical Health Insurance Scheme limited to <strong>Rs. 5 Lakhs</strong> on
                    Family floater scheme.
                  </p>
                </div>

                <div className="border rounded-xl p-6 md:p-8 bg-card space-y-3.5">
                  <h3 className="text-xl font-bold font-display text-foreground flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-amber-500" /> Special Benefits for Ph.D. Holders
                  </h3>
                  <ul className="space-y-2 text-[15px] md:text-base text-foreground/90">
                    <li>• Mobile SIM with 4G data card.</li>
                    <li>• Newspaper will be provided at the residence.</li>
                  </ul>
                </div>
              </div>

              {/* 5. General / Other Benefits */}
              <div className="border rounded-xl p-6 md:p-8 bg-card space-y-4">
                <h3 className="text-xl font-bold font-display text-foreground flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Other Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[15px] md:text-base text-foreground/90">
                  <div className="flex items-start gap-2.5">
                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Sports and Gym facilities in the Campus.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Casual leave for 15 days in a year on prorate basis based on date of joining in the 1st year.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Vacation of 3 days, 1 week and 2 weeks depending on service.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Flexi work hours of 8 hours between 8am to 6 pm. 2nd & 4th Saturdays are holidays.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Paid vacation during summer as per institution norms.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Research seed fund support.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Leaves available (CL, ML etc.,)</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: PRESS RELEASE                                                      */}
        {/* ========================================================================= */}
        {activeTab === "press" && (
          <ScrollReveal>
            <div className="space-y-8 max-w-6xl mx-auto">
              <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">Press Release</h2>
                <p className="text-base text-foreground/90 mt-2">
                  Historical recruitment advertisements and press releases published across leading newspapers and media.
                </p>
              </div>

              {/* Grid of press items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pressItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="border rounded-xl overflow-hidden bg-card hover:shadow-lg transition flex flex-col group"
                  >
                    <div
                      className="relative h-60 overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer"
                      onClick={() => setSelectedImage(item.img)}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-medium text-sm gap-2">
                        <ZoomIn className="w-5 h-5" /> Click to enlarge
                      </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-lg text-foreground mb-1.5">{item.title}</h4>
                        <p className="text-sm md:text-[15px] text-foreground/80 leading-relaxed">{item.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lightbox Modal */}
              {selectedImage && (
                <div
                  className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
                  onClick={() => setSelectedImage(null)}
                >
                  <div className="relative max-w-4xl max-h-[90vh] bg-background rounded-lg overflow-hidden p-2">
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-4 right-4 bg-black/70 text-white rounded-full p-2 hover:bg-black transition z-10"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <img
                      src={selectedImage}
                      alt="Press advertisement"
                      className="max-h-[85vh] w-auto mx-auto object-contain rounded"
                    />
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: CONTACT                                                            */}
        {/* ========================================================================= */}
        {activeTab === "contact" && (
          <ScrollReveal>
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="bg-card border rounded-xl p-8 md:p-10 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">Contact Us</h2>
                  <p className="text-foreground/80 text-base mt-1.5">All correspondence may be addressed to :</p>
                </div>

                <div className="space-y-5 pt-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Mr. Dinesh Motakatla</h3>
                    <p className="text-primary font-semibold text-base">Senior Manager - HR</p>
                  </div>

                  <div className="space-y-4 text-base md:text-[17px] text-foreground/90">
                    <div className="flex items-start gap-3.5">
                      <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-foreground">Madanapalle Institute of Technology & Science</p>
                        <p>Deemed to be University</p>
                        <p>Madanapalle-Kadiri Road</p>
                        <p>Kurabalakota Mandal, Madanapalle-517325</p>
                        <p>Andhra Pradesh, India</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5 pt-2">
                      <Phone className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <span className="font-bold text-foreground">Phone: </span>
                        <span>+91 9160020744 / 9100973274</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <Mail className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <span className="font-bold text-foreground">E Mail: </span>
                        <a href="mailto:jobs@mits.ac.in" className="text-primary hover:underline font-bold">
                          jobs@mits.ac.in
                        </a>
                        ,{" "}
                        <a href="mailto:shrm@mits.ac.in" className="text-primary hover:underline font-bold">
                          shrm@mits.ac.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t flex flex-wrap gap-4">
                  <a
                    href="mailto:jobs@mits.ac.in"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#990000] text-white font-bold text-base hover:bg-[#800000] transition shadow-sm"
                  >
                    <Mail className="w-5 h-5" /> Email HR Office
                  </a>
                  <a
                    href="tel:+919160020744"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border bg-card text-foreground font-bold text-base hover:bg-muted transition"
                  >
                    <Phone className="w-5 h-5" /> Call +91 9160020744
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Careers;

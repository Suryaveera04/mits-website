import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Building, IndianRupee, TrendingUp, Users, Target, Briefcase, GraduationCap, Star, ChevronRight, ArrowRight, CheckCircle2, Zap, Trophy, Globe, Clock, Heart, Mail, Phone, MapPin, ExternalLink, ChevronDown, Calendar, Video, FileText, Link2, Users2, Building2, Sparkles, TrendingDown, BarChart3, PieChart, Activity } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";

const BASE = import.meta.env.BASE_URL;

const sidebarTabs = [
  { id: "training-placement-cell", label: "Training & Placement Cell", icon: Users2 },
  { id: "news-events", label: "News & Events", icon: Star },
  { id: "procedure", label: "Procedure", icon: FileText },
  { id: "training-calendar", label: "Training Calendar", icon: Calendar },
  { id: "interview-preparation", label: "Interview Preparation", icon: Video },
  { id: "placement-statistics", label: "Placement Statistics", icon: TrendingUp },
  { id: "online-practice", label: "Online Practice Links", icon: Link2 },
  { id: "recruiters", label: "Our Recruiters", icon: Building2 },
  { id: "placement-training-team", label: "Placement & Training Team", icon: Award },
  { id: "placement-gallery", label: "Placement Gallery", icon: Building2 },
  { id: "cisco-networking-academy", label: "Cisco Networking Academy", icon: Globe, path: "/cisco-networking-academy" },
  { id: "contact", label: "Contact", icon: Mail },
];

const stats = [
  { icon: IndianRupee, value: 23, suffix: " LPA", label: "Highest Package", color: "from-amber-500 to-orange-500" },
  { icon: TrendingUp, value: 6.8, suffix: " LPA", label: "Average Package", color: "from-emerald-500 to-teal-500" },
  { icon: Users, value: 94, suffix: "%", label: "Placement Rate", color: "from-blue-500 to-cyan-500" },
  { icon: Building, value: 200, suffix: "+", label: "Total Recruiters", color: "from-violet-500 to-purple-500" },
  { icon: Briefcase, value: 5676, suffix: "+", label: "Total Offers", color: "from-rose-500 to-pink-500" },
  { icon: GraduationCap, value: 3700, suffix: "", label: "Students Placed", color: "from-indigo-500 to-blue-500" },
];

const recruiters = [
  { name: "Google", logo: `${BASE}recruiters/google.webp` },
  { name: "Microsoft", logo: `${BASE}recruiters/microsoft.webp` },
  { name: "Amazon", logo: `${BASE}recruiters/amazon.webp` },
  { name: "Deloitte", logo: `${BASE}recruiters/Deloitte.webp` },
  { name: "TCS", logo: `${BASE}recruiters/tcs.webp` },
  { name: "Infosys", logo: `${BASE}recruiters/infosys.webp` },
  { name: "Wipro", logo: `${BASE}recruiters/wipro.webp` },
  { name: "Accenture", logo: `${BASE}recruiters/accenture.webp` },
  { name: "Cognizant", logo: `${BASE}recruiters/cognizant.webp` },
  { name: "Capgemini", logo: `${BASE}recruiters/capgemini.webp` },
  { name: "IBM", logo: `${BASE}recruiters/IBM.webp` },
  { name: "HCL Tech", logo: `${BASE}recruiters/hcltech.webp` },
  { name: "Tech Mahindra", logo: `${BASE}recruiters/tech mahindra.webp` },
  { name: "L&T", logo: `${BASE}recruiters/L&T.webp` },
  { name: "Bosch", logo: `${BASE}recruiters/bosch.webp` },
  { name: "Mahindra", logo: `${BASE}recruiters/mahindra.webp` },
  { name: "Broadridge", logo: `${BASE}recruiters/broadridge.webp` },
  { name: "Hexaware", logo: `${BASE}recruiters/hexaware.webp` },
  { name: "LTIMindtree", logo: `${BASE}recruiters/ltimindtree.webp` },
  { name: "Zoho", logo: `${BASE}recruiters/zoho.webp` },
  { name: "Akkodis", logo: `${BASE}recruiters/akkodis.webp` },
  { name: "ITC", logo: `${BASE}recruiters/itc.webp` },
  { name: "JLL", logo: `${BASE}recruiters/jll.webp` },
  { name: "SBI General", logo: `${BASE}recruiters/SBI General.webp` },
];

const newsEvents = [
  "182 students were selected for COGNIZANT GENC NEXT, GenC Elevate, GenC Pro, On Campus Drive held on 27th Oct, 2025.",
  "127 students were selected for Infosys, On Campus Drive held on 02nd Dec, 2025.",
  "124 students were selected for LTIMindtree, On Campus Drive held on 12th Dec, 2025.",
  "18 students were selected for Deloitte US-India, On Campus Drive held on 19th Dec, 2025.",
  "01 student was selected for Hashira Works Pvt Ltd (Catalog) Interviews held on 18th Jun, 2025.",
  "05 students were selected for Berger Paints India Ltd, On Campus Drive held on 15th Oct, 2025.",
  "02 students were selected for Radcam Technologies Pvt. Ltd Company Limited, On Campus Drive held on 11th Dec, 2025.",
  "03 students were selected for JSW, On Campus Recruitment Event held on 20th Dec, 2025.",
  "04 students were selected for SHAHGARON, On Campus Drive held on 02nd Jan, 2026.",
  "11 students were selected for MEIL (Megha Engineering & Infrastructures Ltd.), On Campus Drive held on 02nd Feb, 2026.",
  "04 students were selected for Alpha Innovation Pvt. Ltd, Campus Drive held on 16th Feb 2026.",
  "01 student was selected for IBM, On Campus Drive held on 25th Nov, 2025.",
  "03 students were selected for Wissda Inc, On Campus Drive held on 19th Jul, 2025.",
  "08 students were selected for Bandhan Bank, On Campus Drive held on 09th Jan, 2026.",
];

type TeamMember = {
  name: string;
  qualification: string;
  designation: string;
  department: string;
  profileUrl: string;
  image?: string;
};

const placementTeam: TeamMember[] = [
  {
    name: "Dr. S. V. S. Ganga Devi",
    qualification: "Ph.D. (SPMVV, Tirupathi)",
    designation: "Associate Director (I/c) – Placements",
    department: "Placements",
    profileUrl: "https://mits.ac.in/facultyprofile/253",
    image: "https://mits.ac.in/public/uploads/faculty/Dr. S. V. S. Ganga Devi.JPG",
  },
  {
    name: "Mr. J. T. Drupad",
    qualification: "M.B.A. (Madurai Kamaraj University)",
    designation: "Placement Officer",
    department: "Placements",
    profileUrl: "#",
  },
  {
    name: "Mr. S. Naveen Kumar",
    qualification: "M.B.A. (Vel.S.R.S.College)",
    designation: "Placement Officer",
    department: "Placements",
    profileUrl: "https://mits.ac.in/facultyprofile/1090",
    image: "https://mits.ac.in/public/uploads/faculty/f34e520484bb61226d29fcb583cb91a3.JPG",
  },
  {
    name: "Mr. D. V. Sameer Kumar",
    qualification: "M.B.A. (Sikkim Manipal University)",
    designation: "Placement Officer",
    department: "MBA",
    profileUrl: "https://mits.ac.in/facultyprofile/642",
    image: "https://mits.ac.in/public/uploads/faculty/DSC_7003.JPG",
  },
  {
    name: "Mr. G. Naresh",
    qualification: "M.B.A. (JNTU Anantapur)",
    designation: "AAO",
    department: "Placements",
    profileUrl: "#",
  },
];

const trainingTeam: TeamMember[] = [
  {
    name: "Dr. K. Dasthagiri Basha",
    qualification: "Ph.D. (Sri Venkateswara University)",
    designation: "Quantitative / Reasoning Aptitude Trainer",
    department: "MBA",
    profileUrl: "https://mits.ac.in/facultyprofile/284",
    image: "https://mits.ac.in/public/uploads/faculty/f0e6516ebfe4f08e473f3c2980faf553.jpg",
  },
  {
    name: "Dr. Rajesh Thulasidass",
    qualification: "Ph.D. (Annamalai University)",
    designation: "Verbal Trainer",
    department: "E & FL",
    profileUrl: "https://mits.ac.in/facultyprofile/699",
    image: "https://mits.ac.in/public/uploads/faculty/07b8118684b156622ba362fbaf1d380e.JPG",
  },
  {
    name: "Mr. Anandakumar. V",
    qualification: "M.A., M.Phil. (Bharathidasan University)",
    designation: "Verbal & Soft Skills Trainer",
    department: "E & FL",
    profileUrl: "https://mits.ac.in/facultyprofile/348",
    image: "https://mits.ac.in/public/uploads/faculty/0c33d86fe4d7354686893bdf16462456.jpg",
  },
  {
    name: "Mr. T. Rama Mohan",
    qualification: "M.A., M.Phil. (Madurai Kamaraj University)",
    designation: "Verbal & Soft Skills Trainer",
    department: "E & FL",
    profileUrl: "https://mits.ac.in/facultyprofile/423",
    image: "https://mits.ac.in/public/uploads/faculty/rammohan.jpg",
  },
  {
    name: "Mr. Darshan. B. V",
    qualification: "M.Tech. (University BDT College of Engineering)",
    designation: "Quantitative / Reasoning Aptitude Trainer",
    department: "ME",
    profileUrl: "https://mits.ac.in/facultyprofile/492",
    image: "https://mits.ac.in/public/uploads/faculty/Darshan. B.V.JPG",
  },
  {
    name: "Mr. A. Naveen Chandra",
    qualification: "M.Sc., M.Tech. (Nagarjuna University)",
    designation: "Aptitude & Reasoning Trainer",
    department: "MCA",
    profileUrl: "https://mits.ac.in/facultyprofile/487",
    image: "https://mits.ac.in/public/uploads/faculty/Naveen.JPG",
  },
  {
    name: "Mr. Chollangi Venkata Ramu",
    qualification: "M.Tech. (JNTU Kakinada)",
    designation: "Aptitude Trainer",
    department: "EEE",
    profileUrl: "https://mits.ac.in/facultyprofile/641",
    image: "https://mits.ac.in/public/uploads/faculty/CHOLLANGI.jpeg",
  },
  {
    name: "Mr. Shaik Tipu Rahaman",
    qualification: "M.Tech., M.Sc. (SVIST Kadapa)",
    designation: "Aptitude Trainer",
    department: "ECE",
    profileUrl: "https://mits.ac.in/facultyprofile/797",
    image: "https://mits.ac.in/public/uploads/faculty/Mr. Shaik Tipu Rahaman.JPG",
  },
  {
    name: "Mrs. V. Srilatha",
    qualification: "M.B.A. (JNTU Anantapur)",
    designation: "AAO",
    department: "Training",
    profileUrl: "#",
  },
];

const trainingSkills = [
  "Presentation Skills",
  "Interpersonal Skills",
  "Brain Strain",
  "Speed Mathematics",
  "Inference",
  "Verbal Reasoning",
  "Team Building",
  "Group Discussion",
  "Planning & Goal Setting",
  "Personal Grooming",
  "Listening Skills",
  "Apty Reach",
  "Logical Reasoning",
  "Deciphering the Matrix",
  "Situational Conversation",
  "Creativity",
  "Time Management",
  "Sentence Construction",
];

const onlinePracticeLinks = [
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/", desc: "Practice coding problems and algorithms", icon: "💻" },
  { name: "LeetCode", url: "https://leetcode.com/", desc: "Coding interview preparation", icon: "🎯" },
  { name: "HackerRank", url: "https://www.hackerrank.com/", desc: "Practice coding challenges", icon: "🏆" },
  { name: "InterviewBit", url: "https://www.interviewbit.com/", desc: "Interview preparation platform", icon: "📋" },
  { name: "CodeChef", url: "https://www.codechef.com/", desc: "Competitive programming", icon: "👨‍💻" },
  { name: "Placement India", url: "https://www.placementindia.com/", desc: "Job search and placement resources", icon: "🔍" },
];

// Placement Statistics Data for all years
const placementStatsData: { [key: string]: { branches: { [key: string]: { eligible: number; placed: number } } } } = {
  "2025-26*": {
    branches: {
      "CSE": { eligible: 264, placed: 209 },
      "CST": { eligible: 192, placed: 179 },
      "CAI": { eligible: 196, placed: 180 },
      "CSD": { eligible: 115, placed: 93 },
      "CSC": { eligible: 57, placed: 38 },
      "ECE": { eligible: 245, placed: 168 },
      "EEE": { eligible: 60, placed: 76 },
      "MECH": { eligible: 48, placed: 66 },
      "Civil": { eligible: 49, placed: 53 },
      "MBA": { eligible: 167, placed: 201 },
      "MCA": { eligible: 185, placed: 91 },
      "M.Tech": { eligible: 27, placed: 3 },
    }
  },
  "2024-25": {
    branches: {
      "CSE": { eligible: 285, placed: 169 },
      "CST": { eligible: 213, placed: 97 },
      "CAI": { eligible: 213, placed: 108 },
      "CSD": { eligible: 143, placed: 83 },
      "CSC": { eligible: 70, placed: 25 },
      "ECE": { eligible: 339, placed: 218 },
      "EEE": { eligible: 70, placed: 55 },
      "MECH": { eligible: 68, placed: 35 },
      "Civil": { eligible: 58, placed: 21 },
      "MBA": { eligible: 199, placed: 217 },
      "MCA": { eligible: 198, placed: 59 },
    }
  },
  "2023-24": {
    branches: {
      "CSE": { eligible: 239, placed: 250 },
      "CST": { eligible: 176, placed: 140 },
      "CAI": { eligible: 69, placed: 98 },
      "CSD": { eligible: 66, placed: 102 },
      "CSO": { eligible: 56, placed: 32 },
      "CSC": { eligible: 62, placed: 39 },
      "ECE": { eligible: 343, placed: 306 },
      "EEE": { eligible: 195, placed: 231 },
      "MECH": { eligible: 241, placed: 275 },
      "Civil": { eligible: 60, placed: 18 },
      "MBA": { eligible: 169, placed: 266 },
      "MCA": { eligible: 178, placed: 186 },
    }
  },
  "2022-23": {
    branches: {
      "CSE": { eligible: 258, placed: 396 },
      "CST": { eligible: 168, placed: 214 },
      "ECE": { eligible: 370, placed: 458 },
      "EEE": { eligible: 109, placed: 143 },
      "MECH": { eligible: 213, placed: 209 },
      "Civil": { eligible: 65, placed: 26 },
      "MBA": { eligible: 159, placed: 284 },
      "MCA": { eligible: 177, placed: 126 },
    }
  },
  "2021-22": {
    branches: {
      "CSE": { eligible: 243, placed: 537 },
      "CSIT & CST": { eligible: 50, placed: 285 },
      "ECE": { eligible: 374, placed: 697 },
      "EEE": { eligible: 100, placed: 189 },
      "MECH": { eligible: 217, placed: 210 },
      "Civil": { eligible: 63, placed: 46 },
      "MBA": { eligible: 171, placed: 210 },
      "MCA": { eligible: 174, placed: 294 },
    }
  },
  "2020-21": {
    branches: {
      "CSE": { eligible: 250, placed: 397 },
      "CSIT": { eligible: 60, placed: 76 },
      "IT": { eligible: 54, placed: 87 },
      "ECE": { eligible: 385, placed: 547 },
      "EEE": { eligible: 100, placed: 121 },
      "MECH": { eligible: 210, placed: 205 },
      "Civil": { eligible: 55, placed: 7 },
      "MCA": { eligible: 57, placed: 32 },
      "MBA": { eligible: 230, placed: 214 },
    }
  },
  "2019-20": {
    branches: {
      "CSE": { eligible: 253, placed: 244 },
      "ECE": { eligible: 367, placed: 313 },
      "EEE": { eligible: 152, placed: 85 },
      "MECH": { eligible: 210, placed: 94 },
      "Civil": { eligible: 61, placed: 27 },
      "MCA": { eligible: 141, placed: 49 },
      "MBA": { eligible: 209, placed: 178 },
      "M.Tech": { eligible: 12, placed: 0 },
    }
  },
  "2018-19": {
    branches: {
      "CSE": { eligible: 229, placed: 199 },
      "ECE": { eligible: 385, placed: 284 },
      "EEE": { eligible: 142, placed: 60 },
      "MECH": { eligible: 304, placed: 102 },
      "Civil": { eligible: 69, placed: 27 },
      "MCA": { eligible: 148, placed: 63 },
      "MBA": { eligible: 213, placed: 223 },
      "M.Tech": { eligible: 53, placed: 0 },
    }
  },
  "2017-18": {
    branches: {
      "CSE": { eligible: 140, placed: 130 },
      "ECE": { eligible: 271, placed: 264 },
      "EEE": { eligible: 127, placed: 105 },
      "MECH": { eligible: 245, placed: 218 },
      "Civil": { eligible: 62, placed: 37 },
      "MCA": { eligible: 98, placed: 21 },
      "MBA": { eligible: 180, placed: 116 },
      "M.Tech": { eligible: 21, placed: 5 },
    }
  },
  "2016-17": {
    branches: {
      "CSE": { eligible: 111, placed: 103 },
      "ECE": { eligible: 276, placed: 240 },
      "EEE": { eligible: 71, placed: 50 },
      "MECH": { eligible: 198, placed: 156 },
      "MCA": { eligible: 87, placed: 83 },
      "MBA": { eligible: 146, placed: 121 },
      "M.Tech": { eligible: 49, placed: 37 },
    }
  },
  "2015-16": {
    branches: {
      "CSE": { eligible: 112, placed: 104 },
      "ECE": { eligible: 188, placed: 155 },
      "EEE": { eligible: 59, placed: 50 },
      "MECH": { eligible: 122, placed: 95 },
      "MCA": { eligible: 92, placed: 81 },
      "MBA": { eligible: 165, placed: 122 },
      "M.Tech": { eligible: 95, placed: 24 },
    }
  },
  "2014-15": {
    branches: {
      "CSE": { eligible: 116, placed: 59 },
      "ECE": { eligible: 132, placed: 102 },
      "EEE": { eligible: 63, placed: 48 },
      "IT": { eligible: 53, placed: 19 },
      "MECH": { eligible: 64, placed: 53 },
      "MCA": { eligible: 53, placed: 11 },
      "MBA": { eligible: 114, placed: 67 },
      "M.Tech": { eligible: 65, placed: 46 },
    }
  },
  "2013-14": {
    branches: {
      "CSE": { eligible: 64, placed: 64 },
      "ECE": { eligible: 100, placed: 100 },
      "EEE": { eligible: 44, placed: 44 },
      "IT": { eligible: 8, placed: 8 },
      "MECH": { eligible: 20, placed: 20 },
      "MBA": { eligible: 46, placed: 46 },
    }
  },
  "2012-13": {
    branches: {
      "CSE": { eligible: 95, placed: 95 },
      "ECE": { eligible: 114, placed: 114 },
      "EEE": { eligible: 44, placed: 44 },
      "IT": { eligible: 19, placed: 19 },
      "MECH": { eligible: 24, placed: 24 },
      "MBA": { eligible: 45, placed: 45 },
      "MCA": { eligible: 16, placed: 16 },
      "M.Tech": { eligible: 2, placed: 2 },
      "Diploma": { eligible: 4, placed: 4 },
    }
  },
  "2011-12": {
    branches: {
      "ECE": { eligible: 60, placed: 60 },
      "CSE": { eligible: 41, placed: 41 },
      "EEE": { eligible: 20, placed: 20 },
      "MECH": { eligible: 16, placed: 16 },
      "IT": { eligible: 23, placed: 23 },
      "BT": { eligible: 1, placed: 1 },
      "MCA": { eligible: 23, placed: 23 },
      "MBA": { eligible: 20, placed: 20 },
    }
  },
  "2010-11": {
    branches: {
      "ECE": { eligible: 106, placed: 106 },
      "CSE": { eligible: 86, placed: 86 },
      "EEE": { eligible: 42, placed: 42 },
      "MECH": { eligible: 15, placed: 15 },
      "IT": { eligible: 42, placed: 42 },
      "BT": { eligible: 2, placed: 2 },
      "MCA": { eligible: 4, placed: 4 },
      "MBA": { eligible: 26, placed: 26 },
    }
  },
  "2009-10": {
    branches: {
      "ECE": { eligible: 91, placed: 91 },
      "CSE": { eligible: 81, placed: 81 },
      "EEE": { eligible: 80, placed: 80 },
      "MECH": { eligible: 50, placed: 50 },
      "MCA": { eligible: 27, placed: 27 },
      "MBA": { eligible: 18, placed: 18 },
    }
  },
};

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(0.1, target / 45);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); return; }
      setCount(Math.round(current * 10) / 10);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{Number.isInteger(target) ? Math.round(count) : count.toFixed(1)}{suffix}</span>;
};

const getInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const TeamFacultyCard = ({
  member,
  accent,
}: {
  member: TeamMember;
  accent: string;
}) => {
  const hasInternalProfile = member.profileUrl && member.profileUrl !== "#";
  const internalSlug = member.name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative bg-white border border-slate-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 flex flex-col items-center text-center">
      <div className="w-36 h-36 sm:w-40 sm:h-40 mx-auto rounded-full bg-slate-100 flex items-center justify-center mb-4 overflow-hidden border-4 border-white ring-2 ring-slate-200 group-hover:ring-primary/30 transition-all shadow-lg">
        {member.image && !imgError ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${accent} text-white font-bold text-3xl`}>
            {getInitials(member.name)}
          </div>
        )}
      </div>

      <p className="text-[11px] uppercase tracking-[0.14em] text-primary font-semibold mb-1 truncate max-w-full">
        {member.department}
      </p>
      <h4 className="font-bold text-secondary mb-1 leading-tight text-[15px]" style={{ fontFamily: "var(--font-body)" }}>
        {member.name}
      </h4>
      <p className="text-[13px] text-primary font-semibold mb-0.5">{member.designation}</p>
      <p className="text-[11px] text-slate-500 mb-3 uppercase tracking-wider">{member.qualification}</p>

      <div className="mt-auto pt-4 w-full flex justify-center border-t border-slate-50">
        <Link
          to={`/placements/team/${internalSlug}`}
          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary bg-primary/5 px-4 py-1.5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors uppercase tracking-widest no-underline"
        >
          View Profile <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

const Placements = () => {
  const [activeTab, setActiveTab] = useState("training-placement-cell");
  const [selectedYear, setSelectedYear] = useState("2025-26*");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const sectionParam = params.section;

  const shouldShowSection = (id: string) => activeTab === id;

  const scrollToSection = (id: string) => {
    const targetTab = sidebarTabs.find(t => t.id === id);
    if (targetTab && 'path' in targetTab && targetTab.path) {
      navigate(targetTab.path);
      return;
    }
    setActiveTab(id);
    try {
      navigate(`/placements/${id}`, { replace: true });
    } catch (e) {
      console.debug(e);
    }
    setSidebarOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 500, behavior: "smooth" });
      }
    }, 80);
  };

  // Set active tab from URL param on mount
  useEffect(() => {
    if (params.section && sidebarTabs.some(t => t.id === params.section)) {
      setActiveTab(params.section);
    }
  }, [params.section]);

  const getYearData = (year: string) => {
    return placementStatsData[year] || null;
  };

  const calculateTotals = (year: string) => {
    const data = getYearData(year);
    if (!data) return { totalEligible: 0, totalPlaced: 0, percentage: 0 };
    
    let totalEligible = 0;
    let totalPlaced = 0;
    
    Object.values(data.branches).forEach(branch => {
      totalEligible += branch.eligible;
      totalPlaced += branch.placed;
    });
    
    const percentage = totalEligible > 0 ? Math.round((totalPlaced / totalEligible) * 100) : 0;
    
    return { totalEligible, totalPlaced, percentage };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <SEO
        title="MITS Placements – 94% Rate, ₹21 LPA Highest | Madanapalle"
        description="MITS Madanapalle placement record: 94% placement rate, ₹6.8 LPA average, ₹21 LPA highest package. 200+ recruiters including Google, TCS, Infosys, Wipro. 5,676+ total offers."
        canonical="/placements"
      />
      <main className="pt-24 md:pt-28 lg:pt-28">
        {/* Hero Section - Enhanced */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background: Sharp high-res placement hero image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={`${BASE}Hero-Section/image-5.jpg`}
              alt="MITS Placements Drive"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Crisp dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/90" />
          
          {/* Animated Decorative Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl" />
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                <span className="text-white/90 text-sm font-semibold tracking-wide">Your Future Starts Here</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                Placements at <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400">MITS</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
                Empowering Careers with Industry Connections
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('recruiters')}
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105"
                >
                  View Recruiters
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('placement-statistics')}
                  className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Placement Report
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Scroll Indicator removed per design request */}
        </section>

        {/* Placement Highlights - Enhanced */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f5f3ff 100%)' }}>
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.25),transparent_50%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(99,102,241,0.15),transparent_50%)]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                  <Trophy className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 font-semibold text-sm">Key Achievements</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800 mb-4">Placement Highlights</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full" />
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 0.08}>
                  <div className="group relative bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl p-6 text-center h-full flex flex-col justify-between hover:border-blue-300 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-200/50 shadow-xl">
                    <div>
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <p className="font-display text-3xl md:text-4xl font-bold text-slate-800 mb-2 whitespace-nowrap">
                        <CountUp target={stat.value} suffix={stat.suffix} />
                      </p>
                    </div>
                    <p className="text-slate-600 text-sm font-semibold mt-auto">{stat.label}</p>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-violet-50/0 group-hover:from-blue-50/50 group-hover:to-violet-50/50 transition-all duration-500 pointer-events-none" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Sidebar - Enhanced */}
              <div className="lg:w-72 flex-shrink-0">
                <div className="sticky top-24 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 p-5">
                    <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-amber-300" />
                      Placement Menu
                    </h3>
                  </div>
                  <nav className="p-3">
                    {sidebarTabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => scrollToSection(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-300 mb-2 ${
                          activeTab === tab.id
                            ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                            : 'text-slate-700 hover:bg-slate-100 hover:scale-102'
                        }`}
                      >
                        <tab.icon className={`w-5 h-5 flex-shrink-0 ${activeTab === tab.id ? 'text-white' : 'text-blue-600'}`} />
                        <span className="text-sm font-semibold">{tab.label}</span>
                        {activeTab === tab.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                {/* Removed 'View all sections' button - page shows only training section by default */}
                {/* Training & Placement Cell */}
                {shouldShowSection('training-placement-cell') && (
                <section id="training-placement-cell" className="mb-12 scroll-mt-24">
                  <ScrollReveal>
                    <div className="bg-gradient-to-br from-blue-50 via-white to-violet-50 border border-blue-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg">
                          <Users2 className="w-6 h-6 text-white" />
                        </div>
                        Training & Placement Cell
                      </h2>
                      <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                        MITS-Placement Cell concentrates on career exploration, self-assessment, long-term career planning, and developing networking skills, in addition to job search strategies for the short-term. Along with an intense focus on students' success, the Placement Cell is committed to creating and maintaining positive relationships with corporate employers.
                      </p>
                      <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                        MITS-TPC team manages active relationships with companies that recruit students, working to ensure that the recruiting process is smooth, hassle-free and rewarding. In concert with administration, faculty-corporate relations and students, the TPC works continually to bring new companies on-Grounds and to expand existing relationships.
                      </p>
                      <p className="text-slate-600 leading-relaxed text-lg mb-8">
                        The TPC also maintains an intranet that facilitates many technical aspects of the job search, allowing students to manage their search electronically from computers on-Grounds or online. Using the TPC site, students can research companies and contacts, search for employment opportunities, apply for jobs, sign up for company presentations, schedule on-Campus interviews and much more.
                      </p>

                      <div className="mt-8 pt-6 border-t border-slate-200/80">
                        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-red-50 text-red-700 flex items-center justify-center shrink-0">
                              <FileText className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-800 text-base">Training & Placements Committee Order</h4>
                              <p className="text-xs text-slate-500 mt-0.5">Official constitution order and administrative structure of the Placement Cell</p>
                            </div>
                          </div>
                          <Button asChild variant="outline" className="border-red-700 text-red-700 hover:bg-red-700 hover:text-white shrink-0">
                            <a href="https://mits.ac.in/assets/pdf/admin/TPC_Committee_Order.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <FileText className="w-4 h-4" />
                              View Order PDF
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </section>
                )}

                {/* News & Events - Enhanced */}
                {shouldShowSection('news-events') && (
                <section id="news-events" className="mb-12">
                  <ScrollReveal>
                    <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 border border-amber-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <h3 className="font-display text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        News & Events
                      </h3>
                      <div className="space-y-3">
                        {newsEvents.map((event, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all duration-300 group">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                            <p className="text-slate-700">{event}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </section>
                )}

                {/* Procedure - Enhanced */}
                {shouldShowSection('procedure') && (
                <section id="procedure" className="mb-12 scroll-mt-24">
                  <ScrollReveal>
                    <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 border border-emerald-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        Procedure for Campus Recruitment
                      </h2>
                      <div className="space-y-6">
                        {[
                          { title: "1. Campus Recruitment Timeline", content: "Campus recruitment for final year students starts from Dec onwards every year. Recruitment after passing out of the campus will also be done depending on the availability of non-placed students." },
                          { title: "2. Recruiter Requirements", content: "Interested recruiters are requested to mail the following details to placements@mits.ac.in: Job Profile, Job Location, Training Period, CTC during & after Training, Designation before & after Training, Service agreement if any, Degrees & Branches required, Eligibility Criteria, Selection Process, Facilities Required, Preferred dates to visit. NB: Placement with Paid Training by students and Consulting fee attached placements are not allowed." },
                          { title: "3. Student Registration", content: "Based on the above data, students will register at Placement Centre. Number of interested students will be informed to the recruiting company." },
                          { title: "4. Venue Selection", content: "Based on the number of interested students, company can fix the venue either at college or at their office. Resumes of the interested students can also be sent to the company for short listing at their end." },
                          { title: "5. Selection Process", content: "List of Selected candidates and offer letters shall be given to the Placement Officer at the end of the process. If there is any delay in announcement of results, students will be permitted to attend the next company." },
                          { title: "6. Feedback", content: "The recruiters are requested to give the feedback of the quality of the students at the end of the selection process and also after the training period." },
                          { title: "7. Dream Offer Policy", content: "To the companies that offer a CTC of more than Rs.3.50 lakhs p.a. To Engineering Companies so that Engineering companies do not fall in short of quality students. If the student gets placed in the Dream Offer, his previous offer will be cancelled." },
                        ].map((item, i) => (
                          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-slate-800 mb-3 text-lg">{item.title}</h4>
                            <p className="text-slate-600">{item.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </section>
                )}

                {/* Training Calendar - Enhanced */}
                {shouldShowSection('training-calendar') && (
                <section id="training-calendar" className="mb-12 scroll-mt-24">
                  <ScrollReveal>
                    <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 border border-purple-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        Training Programs
                      </h2>
                      <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                        Our Placement and Training Cell offering Career Development Program for the students who are raring to enter the corporate world and introduce them to the prospective employers according to their aspirations and background.
                      </p>
                      <h4 className="font-bold text-slate-800 mb-4 text-xl">Training Modules Include:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {trainingSkills.map((skill, i) => (
                          <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 group">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-slate-700 font-medium">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </section>
                )}

                {/* Interview Preparation - Enhanced */}
                {shouldShowSection('interview-preparation') && (
                <section id="interview-preparation" className="mb-12 scroll-mt-24">
                  <ScrollReveal>
                    <div className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 border border-cyan-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                          <Video className="w-6 h-6 text-white" />
                        </div>
                        Interview Preparation
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all duration-300">
                          <h4 className="font-bold text-slate-800 mb-4 text-lg flex items-center gap-2">
                            <Target className="w-5 h-5 text-cyan-600" />
                            Interview Tips
                          </h4>
                          <ul className="space-y-3 text-slate-600">
                            {["Research the company thoroughly", "Practice common interview questions", "Dress professionally", "Arrive early", "Bring multiple copies of resume"].map((tip, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all duration-300">
                          <h4 className="font-bold text-slate-800 mb-4 text-lg flex items-center gap-2">
                            <FileText className="w-5 h-5 text-cyan-600" />
                            Resume Writing
                          </h4>
                          <ul className="space-y-3 text-slate-600">
                            {["Keep it concise (1-2 pages)", "Highlight relevant skills", "Use action verbs", "Proofread carefully", "Include contact information"].map((tip, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </section>
                )}

                {/* Placement Statistics - Enhanced with all years */}
                {shouldShowSection('placement-statistics') && (
                <section id="placement-statistics" className="mb-12 scroll-mt-24">
                  <ScrollReveal>
                    <div className="bg-gradient-to-br from-rose-50 via-white to-pink-50 border border-rose-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        Placement Statistics
                      </h2>
                      
                      {/* Year Dropdown removed — quick year tiles provide selection */}

                      {/* Stats Table */}
                      {getYearData(selectedYear) && (
                        <div className="overflow-x-auto rounded-xl border border-slate-200 mb-8">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500">
                                <th className="px-6 py-4 text-left text-white font-bold rounded-tl-xl">Branch</th>
                                {Object.keys(getYearData(selectedYear)!.branches).map((branch) => (
                                  <th key={branch} className="px-6 py-4 text-center text-white font-bold">{branch}</th>
                                ))}
                                <th className="px-6 py-4 text-center text-white font-bold rounded-tr-xl">TOTAL</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-white border-b border-slate-200 hover:bg-rose-50 transition-colors">
                                <td className="px-6 py-4 font-bold text-slate-800">No of Eligible Students</td>
                                {Object.entries(getYearData(selectedYear)!.branches).map(([branch, data]) => (
                                  <td key={branch} className="px-6 py-4 text-center text-slate-700 font-semibold">{data.eligible}</td>
                                ))}
                                <td className="px-6 py-4 text-center text-slate-800 font-bold">{calculateTotals(selectedYear).totalEligible}</td>
                              </tr>
                              <tr className="bg-white border-b border-slate-200 hover:bg-rose-50 transition-colors">
                                <td className="px-6 py-4 font-bold text-slate-800">Total Multiple Offers</td>
                                {Object.entries(getYearData(selectedYear)!.branches).map(([branch, data]) => (
                                  <td key={branch} className="px-6 py-4 text-center text-slate-700 font-semibold">{data.placed}</td>
                                ))}
                                <td className="px-6 py-4 text-center text-slate-800 font-bold">{calculateTotals(selectedYear).totalPlaced}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* All Years Summary */}
                      <div className="mt-8">
                        <h4 className="font-bold text-slate-800 mb-4 text-lg">Quick Year Selection:</h4>
                        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-3">
                          {Object.keys(placementStatsData).map((year) => {
                            const totals = calculateTotals(year);
                            return (
                              <div 
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                  selectedYear === year 
                                    ? 'bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white border-transparent shadow-xl scale-105' 
                                    : 'bg-white border-slate-200 hover:border-rose-300 hover:shadow-lg hover:scale-102'
                                }`}
                              >
                                <p className={`font-bold text-sm ${selectedYear === year ? 'text-white' : 'text-slate-800'}`}>{year}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </section>
                )}

                {/* Online Practice Links - Enhanced */}
                {shouldShowSection('online-practice') && (
                <section id="online-practice" className="mb-12 scroll-mt-24">
                  <ScrollReveal>
                    <div className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 border border-indigo-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg">
                          <Link2 className="w-6 h-6 text-white" />
                        </div>
                        Online Practice Links
                      </h2>
                      <div className="grid md:grid-cols-2 gap-5">
                        {onlinePracticeLinks.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 p-5 bg-white rounded-xl border-2 border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 hover:scale-102"
                          >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md text-2xl">
                              {link.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors text-lg">{link.name}</h4>
                              <p className="text-slate-500">{link.desc}</p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-slate-400 ml-auto group-hover:text-indigo-600 transition-colors" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </section>
                )}

                {/* Our Recruiters - Enhanced */}
                {shouldShowSection('recruiters') && (
                <section id="recruiters" className="mb-12 scroll-mt-24">
                  <ScrollReveal>
                    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 border border-slate-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                        Our Recruiters
                      </h2>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5">
                        {recruiters.map((rec, i) => (
                          <div key={i} className="group bg-white border-2 border-slate-200 rounded-xl p-5 flex items-center justify-center h-28 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <img
                              src={rec.logo}
                              alt={rec.name + " logo"}
                              className="max-h-14 max-w-[90px] object-contain group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                              title={rec.name}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </section>
                )}

                {/* Placement & Training Team - Enhanced */}
                {shouldShowSection('placement-training-team') && (
                <section id="placement-training-team" className="mb-12 scroll-mt-24">
                  <ScrollReveal>
                    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-50 via-white to-blue-50 p-8 shadow-2xl">
                      <div className="absolute inset-0 opacity-60">
                        <div className="absolute -top-20 left-10 h-48 w-48 rounded-full bg-amber-200 blur-3xl" />
                        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
                      </div>

                      <div className="relative z-10 mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/85 px-4 py-2 text-amber-700 shadow-sm backdrop-blur-sm">
                            <Sparkles className="h-4 w-4" />
                            <span className="text-sm font-semibold uppercase tracking-[0.22em]">People behind placements</span>
                          </div>
                          <h2 className="mt-4 font-display text-3xl font-bold text-slate-800 md:text-4xl">Placement &amp; Training Team</h2>
                          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
                            The teams below coordinate company outreach, student preparation, and training support to make the placement process smooth and effective.
                          </p>
                        </div>
                        <div className="rounded-2xl border border-amber-200 bg-white px-5 py-4 text-sm text-slate-700 shadow-lg">
                          <p className="font-semibold text-slate-900">Placement support</p>
                          <p className="mt-1 text-slate-600">Student guidance, recruiter coordination, and skill development</p>
                        </div>
                      </div>

                      <div className="relative z-10 space-y-8">
                        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm">
                          <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/20">
                              <Users className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-display text-2xl font-bold text-slate-800">Placement Team</h3>
                              <p className="text-sm text-slate-500">Industry relations and placement coordination</p>
                            </div>
                          </div>
                          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {placementTeam.map((member) => (
                              <TeamFacultyCard key={member.name} member={member} accent="from-amber-400 to-orange-500" />
                            ))}
                          </div>
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm">
                          <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 shadow-lg shadow-blue-500/20">
                              <Award className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-display text-2xl font-bold text-slate-800">Training Team</h3>
                              <p className="text-sm text-slate-500">Aptitude, verbal, and soft-skills preparation</p>
                            </div>
                          </div>
                          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {trainingTeam.map((member) => (
                              <TeamFacultyCard key={member.name} member={member} accent="from-blue-400 to-cyan-500" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </section>
                )}


                {/* Placement Gallery */}
                {shouldShowSection('placement-gallery') && (
                <section id="placement-gallery" className="mb-12 scroll-mt-24">
                  <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 border border-slate-200 rounded-2xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      Placement Gallery
                    </h2>
                    <div className="columns-2 sm:columns-3 md:columns-4 gap-3 space-y-3">
                      {[
                        "DSC_1089.JPG","DSC_1450.JPG","DSC_7604 copy.jpg","DSC_7607 copy.jpg",
                        "DSC_7611 copy.jpg","Group Photo Placement - 3.JPG","image 1.jpg","image 2.jpg",
                        "image 3.jpeg","IMG-20171112-WA0003_Original.jpg","IMG-20191030-WA0022_Original.jpg",
                        "IMG_20181130_190831981_Original.jpg","Mindtree-2022.jpg",
                        "WhatsApp Image 2026-06-19 at 12.13.28.jpeg"
                      ].map((img, i) => (
                        <div key={i} className="break-inside-avoid overflow-hidden rounded-xl border border-slate-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 mb-3">
                          <img
                            src={`${BASE}placement-pictures/${img}`}
                            alt={`Placement ${i + 1}`}
                            loading="lazy"
                            className="w-full object-cover"
                            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                )}

                {/* Contact - Enhanced */}
                {shouldShowSection('contact') && (
                <section id="contact" className="mb-12 scroll-mt-24">
                  <ScrollReveal>
                    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-8 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl" />
                      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-orange-200/40 blur-3xl" />

                      <div className="relative z-10 mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-amber-700 shadow-sm ring-1 ring-amber-200 backdrop-blur">
                            <Mail className="h-4 w-4" />
                            <span className="text-sm font-semibold uppercase tracking-[0.22em]">Contact</span>
                          </div>
                          <h2 className="mt-4 font-display text-3xl font-bold text-slate-800 md:text-4xl">Contact Placement Cell</h2>
                          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
                            Reach the placement office for admissions, recruitment support, and general coordination.
                          </p>
                        </div>
                        <div className="rounded-2xl bg-slate-900 px-5 py-4 text-white shadow-lg">
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Quick connect</p>
                          <p className="mt-1 text-sm text-slate-300">placements@mits.ac.in</p>
                        </div>
                      </div>

                      <div className="relative z-10 grid gap-5 md:grid-cols-3">
                        <div className="group rounded-2xl border border-white/70 bg-white/90 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/20">
                            <MapPin className="h-6 w-6 text-white" />
                          </div>
                          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">Address</p>
                          <p className="mt-3 text-sm leading-6 text-slate-600">Madanapalle Institute of Technology & Science<br />Deemed to be University<br />Madanapalle-Kadiri Road<br />Kurabalakota Mandal, Madanapalle-517325<br />Andhra Pradesh, India</p>
                        </div>

                        <div className="group rounded-2xl border border-white/70 bg-white/90 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20">
                            <Phone className="h-6 w-6 text-white" />
                          </div>
                          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Phone</p>
                          <p className="mt-3 text-sm leading-6 text-slate-600">+91-7330803555<br />+91-7330852555</p>
                        </div>

                        <div className="group rounded-2xl border border-white/70 bg-white/90 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/20">
                            <Mail className="h-6 w-6 text-white" />
                          </div>
                          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">Email</p>
                          <p className="mt-3 text-sm leading-6 text-slate-600">placements@mits.ac.in<br />admissions@mits.ac.in</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </section>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <style>{`
        @keyframes zoom-slow {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-zoom-slow {
          animation: zoom-slow 20s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Placements;

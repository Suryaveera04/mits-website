import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Award,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  FileText,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Building2,
  GraduationCap,
  Layers,
  Globe,
  Compass,
  Trophy,
  Calendar,
  ChevronRight,
  TrendingUp,
  DollarSign,
  History,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

interface SocietyItem {
  sno: number;
  society: string;
  department: string;
}

interface CommitteeMember {
  sno: number;
  name: string;
  designation: string;
  branchOrSociety: string;
  position: "Chairperson" | "Advisor" | "Counsellor";
}

interface ArchiveEvent {
  title: string;
  department: string;
  date: string;
  reportUrl: string;
  isExternalLink?: boolean;
}

interface ParticipatedEvent {
  facultyOrStudent: string;
  details: string;
}

const societies: SocietyItem[] = [
  { sno: 1, society: "IEEE - Computer Society", department: "Computer Science & Technology" },
  { sno: 2, society: "IEEE - Education Society", department: "Computer Science & Technology" },
  { sno: 3, society: "IEEE - Intelligent Transportation Systems Society", department: "Computer Science Engineering" },
  { sno: 4, society: "IEEE - Robotics and Automation Society", department: "Computer Science Engineering (Artificial Intelligence)" },
  { sno: 5, society: "IEEE - Systems, Man, and Cybernetics Society", department: "Computer Science Engineering (Cyber Security)" },
  { sno: 6, society: "IEEE - Reliability Society", department: "Computer Science Engineering (Data Science)" },
  { sno: 7, society: "IEEE - Information Theory Society", department: "Computer Science Engineering - (Artificial Intelligence Machine Learning)" },
  { sno: 8, society: "IEEE - Women in Engineering", department: "Computer Science Engineering - (Artificial Intelligence Machine Learning)" },
  { sno: 9, society: "IEEE - Power & Energy Society", department: "Electrical & Electronics Engineering" },
  { sno: 10, society: "IEEE - Circuits and Systems Society", department: "Electronics & Communication Engineering" },
  { sno: 11, society: "IEEE - Communications Society", department: "Electronics & Communication Engineering" },
  { sno: 12, society: "IEEE - Sensors Council", department: "Electronics & Communication Engineering" },
  { sno: 13, society: "IEEE - Signal Processing Society and Systems Council", department: "Electronics & Communication Engineering" },
  { sno: 14, society: "IEEE - Nanotechnology Council", department: "Mechanical Engineering" },
  { sno: 15, society: "IEEE - Computational Intelligence Society", department: "Master of Computer Application" },
  { sno: 16, society: "IEEE - Geoscience and Remote Sensing Society", department: "Master of Computer Application" },
  { sno: 17, society: "IEEE Electron Devices Society", department: "Electrical & Electronics Engineering" },
];

const committeeMembers: CommitteeMember[] = [
  {
    sno: 1,
    name: "Dr. C. Yuvaraj",
    designation: "Vice Chancellor (I/c)",
    branchOrSociety: "MITS IEEE Student Branch [STB64791]",
    position: "Chairperson",
  },
  {
    sno: 2,
    name: "Dr. Pavan Kumar A V",
    designation: "Professor & Asst. Dean Accreditations",
    branchOrSociety: "Power & Energy Society [SBC64791N]",
    position: "Advisor",
  },
  {
    sno: 3,
    name: "Dr. Arun I",
    designation: "Professor - ME",
    branchOrSociety: "Nanotechnology Council [SBC64791D]",
    position: "Advisor",
  },
  {
    sno: 4,
    name: "Dr. Nehru Kandasamy",
    designation: "Professor - ECE",
    branchOrSociety: "Circuits and Systems Society [SBC64791A] & Electron Devices Society [SBC64791O]",
    position: "Advisor",
  },
  {
    sno: 5,
    name: "Dr. E. Aravind Raj",
    designation: "Assistant Professor - ECE",
    branchOrSociety: "Communications Society [SBC64791I]",
    position: "Advisor",
  },
  {
    sno: 6,
    name: "Dr. Gutti Nagaswetha",
    designation: "Assistant Professor - ECE",
    branchOrSociety: "Signal Processing Society and Systems Council [SBC64791H]",
    position: "Advisor",
  },
  {
    sno: 7,
    name: "Dr. G. Reddy Hemantha",
    designation: "Assistant Professor - ECE",
    branchOrSociety: "Sensors Council [SBC64791B]",
    position: "Advisor",
  },
  {
    sno: 8,
    name: "Dr. E. Gayatri",
    designation: "Assistant Professor - CSE",
    branchOrSociety: "Intelligent Transportation Systems Society [SBC64791K]",
    position: "Advisor",
  },
  {
    sno: 9,
    name: "Dr. K. Dinesh",
    designation: "Associate Professor & Head - CST",
    branchOrSociety: "Computer Society [SBC64791C] & Education Society [SBC64791E]",
    position: "Advisor",
  },
  {
    sno: 10,
    name: "Mr. K. Mahammad",
    designation: "Assistant Professor - CSE (AI)",
    branchOrSociety: "Robotics and Automation Society [SBC64791J]",
    position: "Advisor",
  },
  {
    sno: 11,
    name: "Dr. S. Kusuma",
    designation: "Assistant Professor & Head - CSE (DS)",
    branchOrSociety: "Reliability Society [SBC64791L]",
    position: "Advisor",
  },
  {
    sno: 12,
    name: "Mr. T. Niranjan Babu",
    designation: "Assistant Professor - CSE (CS)",
    branchOrSociety: "Systems, Man, and Cybernetics Society [SBC64791I]",
    position: "Advisor",
  },
  {
    sno: 13,
    name: "Dr. S. Padma",
    designation: "Associate Professor & Head - CSE (AI & ML)",
    branchOrSociety: "Women in Engineering [SBA64791] & Information Theory Society [SBC64791M]",
    position: "Advisor",
  },
  {
    sno: 14,
    name: "Dr. R. Marathamuthu",
    designation: "Assistant Professor - MCA",
    branchOrSociety: "Computational Intelligence Society [SBC64791F]",
    position: "Advisor",
  },
  {
    sno: 15,
    name: "Dr. C. Kumar",
    designation: "Assistant Professor - ECE",
    branchOrSociety: "MITS IEEE Student Branch [STB64791]",
    position: "Counsellor",
  },
];

const governanceDocuments = [
  {
    title: "MITS IEEE Student Branch Standard Operating Procedure (SOP)",
    href: "https://mits.ac.in/assets/pdf/assoc/MITS%20IEEE%20SOP.pdf",
    category: "Governance & SOP",
  },
  {
    title: "MITS IEEE Society List",
    href: "https://mits.ac.in/assets/pdf/assoc/Society%20List.pdf",
    category: "Societies Roster",
  },
  {
    title: "MITS IEEE Society Advisor's List",
    href: "https://mits.ac.in/assets/pdf/assoc/Society%20Advisors%20List.pdf",
    category: "Faculty Advisors",
  },
  {
    title: "Office order: MITS IEEE Professional Executive Committee & Advisors - 2025",
    href: "https://mits.ac.in/assets/pdf/assoc/IEEE%20Student%20branch-2025.pdf",
    category: "Office Order",
  },
  {
    title: "MITS IEEE Organizational Hierarchy",
    href: "https://mits.ac.in/assets/pdf/assoc/MITS%20IEEE%20Hierarchy.pdf",
    category: "Structure",
  },
  {
    title: "MITS IEEE SB Student Head Committee",
    href: "https://mits.ac.in/assets/pdf/assoc/Student%20Head%20Committee.pdf",
    category: "Student Leadership",
  },
  {
    title: "MITS IEEE Society Approval Letters from IEEE Headquarters",
    href: "https://mits.ac.in/assets/pdf/assoc/MITS%20IEEE%20Society%20Approval%20Letters.pdf",
    category: "Official Approvals",
  },
  {
    title: "MITS IEEE Student Executive Committee (ExCom)",
    href: "https://mits.ac.in/assets/pdf/assoc/Student%20Excom.pdf",
    category: "Executive Body",
  },
];

const membershipDocuments = [
  {
    title: "2025* Student Membership List",
    href: "https://mits.ac.in/assets/pdf/assoc/2025%20Student%20Membership%20List.pdf",
    category: "Annual Membership",
  },
  {
    title: "2024 Student Membership List (Top in Membership Count under Hyderabad Section)",
    href: "https://mits.ac.in/assets/pdf/assoc/2024%20Student%20Membership%20List.pdf",
    category: "Annual Membership",
  },
  {
    title: "2023 Student Membership List",
    href: "https://mits.ac.in/assets/pdf/assoc/2023%20Student%20Membership%20List.pdf",
    category: "Annual Membership",
  },
  {
    title: "MITS IEEE Student Membership List - Department of CST",
    href: "https://mits.ac.in/assets/pdf/assoc/Department%20of%20CST.pdf",
    category: "Department Roster",
  },
  {
    title: "MITS IEEE Student Membership List - Department of CSE",
    href: "https://mits.ac.in/assets/pdf/assoc/Department%20of%20CSE.pdf",
    category: "Department Roster",
  },
  {
    title: "MITS IEEE Student Membership List - Department of ECE",
    href: "https://mits.ac.in/assets/pdf/assoc/Department%20of%20ECE.pdf",
    category: "Department Roster",
  },
  {
    title: "MITS IEEE Student Membership List - Department of EEE",
    href: "https://mits.ac.in/assets/pdf/assoc/Department%20of%20EEE.pdf",
    category: "Department Roster",
  },
];

const departmentEventLists = [
  {
    title: "Seasonal School on Neuromorphic Computing & in Memory Computing Using Non-Volatile Memory Devices (Hybrid)",
    date: "23rd to 25th September 2024",
    href: "https://mits.ac.in/sscas",
    isExternalLink: true,
  },
  {
    title: "IEEE SPAx funded Project Design Contest and Poster Presentation on 'Engineering in Agriculture, Sustainability and Green Electronics'",
    date: "23rd January 2025",
    href: "https://mits.ac.in/assets/pdf/eee/Engineering%20in%20Agriculture,%20Sustainability%20and%20Green%20Electronics.pdf",
  },
  {
    title: "List of IEEE Events - Department of CST",
    href: "https://mits.ac.in/assets/pdf/cst/CST%20IEEE%20Events.pdf",
  },
  {
    title: "List of IEEE Events - Department of EEE",
    href: "https://mits.ac.in/assets/pdf/assoc/IEEE%20consolidated-EEE.pdf",
  },
  {
    title: "List of IEEE Events - Department of CS (Summary Data 2025-26)",
    href: "https://mits.ac.in/assets/pdf/assoc/IEEE%20Events%20Summary%20Data%202025-26.pdf",
  },
  {
    title: "List of IEEE Events - Department of CSE (AI and ML) Achievements",
    href: "https://mits.ac.in/assets/pdf/assoc/CSE(AIML)%20Achievement%20with%20IEEE%20Student%20Branch%20Chapter.pdf",
  },
  {
    title: "List of IEEE Events - Department of CSE (AI)",
    href: "https://mits.ac.in/assets/pdf/assoc/IEEE_ALL_CSE_AI.pdf",
  },
  {
    title: "List of IEEE Events - Department of CSE",
    href: "https://mits.ac.in/assets/pdf/assoc/List%20of%20IEEE%20Events%20-%20Department%20of%20CSE.pdf",
  },
  {
    title: "Activities Allotted to the Faculty",
    href: "https://mits.ac.in/public/uploads/ieee/Activities%20alloted%20to%20the%20Faculty.pdf",
  },
  {
    title: "Activities Organized Report",
    href: "https://mits.ac.in/public/uploads/ieee/Activities%20Organized.pdf",
  },
];

const archiveEvents: ArchiveEvent[] = [
  {
    title: "A One Day Seminar on 'Commercialization of Concept into a Product'",
    department: "Department of Computer Science & Engineering - Artificial Intelligence as part of IEEE Day 2026 Celebrations in Association with IEEE–RAS Student Chapter",
    date: "14th October 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Commercialization%20of%20Concept%20into%20a%20Produc.pdf",
  },
  {
    title: "An Expert Talk on 'Human- Intelligent Robotics'",
    department: "Department of Electrical & Electronics Engineering in association with IEEE Student Chapter and IEEE PES Student Branch Chapter (SBC64791N)",
    date: "13th October 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Human-Centered%20Intelligent%20Robotics%2013-10-2026.pdf",
  },
  {
    title: "A Three Days Workshop on 'Industry-Ready DevOps: From Code to Deployment'",
    department: "Department of Computer Science & Engineering - Cyber Security in association with IEEE",
    date: "27th to 29th August 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Industry-Ready%20DevOps%20From%20Code%20to%20Deployment.pdf",
  },
  {
    title: "A Six Weeks Online Hands-On Internship 'Fundamentals of Switching & Routing'",
    department: "IEEE Communications Society, IEEE Hyderabad Section in association with IEEE MITS Student Branch & MITS Cisco Networking Academy",
    date: "25th May to 3rd July 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/6%20Weeks%20IEEE%20ComSoc%20Hands-on%20Virtual%20Internship.pdf",
  },
  {
    title: "An Innovation driven exhibition on 'AI Powered Solution Expo: Demo Day for AI / Industry 4.0 Prototypes'",
    department: "Department of Computer Science & Engineering - Artificial Intelligence Sponsored by IEEE Robotics and Automation Society, MITS",
    date: "7th April 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/AI%20Powered%20Solution%20Expo%20Demo%20Day%20for%20AI%20Industry%204.0%20Prototypes.pdf",
  },
  {
    title: "A Seminar on 'Robotics 5.0 - From Automation to Autonomous Intelligence'",
    department: "Department of Computer Science & Engineering in Association with IEEE Student Chapter (ITSS)",
    date: "05th February 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Robotics%205.0%20From%20Automation%20to%20Autonomous%20Intelligence-compressed.pdf",
  },
  {
    title: "An Industry Perspective Session on 'Understanding EHT Substations: From Generation to Grid'",
    department: "Department of Electrical and Electronics Engineering In Association with IEEE Student Branch Chapter, PES Student Branch Chapter and IIIC",
    date: "03rd February 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Report%20on%20Industry%20Perspective%20Session%20on%20Understanding%20EHT%20Substations%20-%20From%20Generation%20to%20Grid.pdf",
  },
  {
    title: "A Hands-on workshop on 'Multi Rotor Drone Technology & Aerodynamics'",
    department: "Department of Electronics & Communication Engineering in association with Training & Placement Cell & MITS IEEE Student Branch",
    date: "29th to 31st January 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Multi%20Rotor%20Drone%20Technology%20&%20Aerodynamics.pdf",
  },
  {
    title: "A One Week Domain-Specific Hands-On Workshop on 'Building Intelligent Systems Using Machine Learning Techniques'",
    department: "Department of Computer Science & Engineering In Association with IEEE",
    date: "5th to 10th January 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Building%20Intelligent%20Systems%20Using%20Machine%20Learning%20Techniques.pdf",
  },
  {
    title: "2025 IEEE ComSoc School Series Virtual Event on 'Advances in Wireless Connectivity: Technologies, Systems and Network Evolution'",
    department: "IEEE Communication Society (ComSoc) Student Chapter - STB64791 & Department of Electronics & Communication Engineering",
    date: "08th to 10th December 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Advances%20in%20Wireless%20Connectivity%20Technologies,%20Systems,%20and%20Network%20Evolution.pdf",
  },
  {
    title: "A Community Outreach Program on 'Hands-on Experience on Electronics Sensors and Actuators'",
    department: "Department of Electronics & Communication Engineering in association with MITS IEEE Student Branch",
    date: "11th November 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Hands-on%20Experience%20on%20Electronics%20Sensors%20and%20Actuators.pdf",
  },
  {
    title: "A Webinar on 'Nanofluid Assisted Thermal Performance Optimization in Non-Circular Ducts Across Multiple Engineering Applications'",
    department: "Department of Mechanical Engineering in Association with IEEE Student Chapter",
    date: "10th November 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/mech/Nanofluid%20Assisted%20Thermal%20Performance%20Optimization%20in%20Non-Circular%20Ducts%20Across%20Multiple%20Engineering%20Applications.pdf",
  },
  {
    title: "An Expert Lecture on 'AI Evolution and Transformation in Digital Technologies'",
    department: "Department of Computer Science and Engineering (Artificial Intelligence) In association with IEEE RAS Student Chapter",
    date: "17th October 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/AI%20Evolution%20and%20Transformation%20in%20Digital%20Technologies.pdf",
  },
  {
    title: "An outreach event 'Exploring Technology – ATAL Outreach Program'",
    department: "IEEE Communication Society Hyderabad Section, MITS IEEE Student Branch, and MITS IEEE Communication Society & MITS IIIC",
    date: "15th October 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Exploring%20Technology%20-%20ATAL%20Outreach%20Program.pdf",
  },
  {
    title: "A Guest Lecture on 'Hydrogen Research Trends and Technologies'",
    department: "Department of EEE in association with IEEE Student Branch Chapter and PES Student Branch Chapter (SBC64791N)",
    date: "07th October 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Hydrogen%20Research%20Trends%20and%20Technologies.pdf",
  },
  {
    title: "An Inauguration of New office Members to MITS IEEE Student Branch and Seminar on 'Benefits of IEEE Professional membership'",
    department: "MITS IEEE Student Branch",
    date: "19th September 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Benefits%20of%20IEEE%20Professional%20membership.pdf",
  },
  {
    title: "A Three Days Hands-on Workshop on 'PCB Design using KiCad'",
    department: "Department of Electrical & Electronics Engineering (EEE) in association with MITS IEEE PES Student Branch Chapter (SBC64791N), Training & Placements",
    date: "01st to 03rd September 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Three%20Days%20Hands-on%20Workshop%20on%20PCB%20Design%20using%20KiCad.pdf",
  },
  {
    title: "An event on 'Nurturing Minds, Empowering Futures'",
    department: "Department of Computer Science & Engineering - Artificial Intelligence In association with Women Empowerment Cell and IEEE-RAS Student Chapter",
    date: "06th August 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/aids/Nurturing%20Minds,%20Empowering%20Futures.pdf",
  },
  {
    title: "An Online Guest Lecture on 'PCB Altium Software'",
    department: "Department of Electronics & Communication Engineering in association with IEEE SB of MITS and MITS IIIC",
    date: "04th August 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/PCB%20Altium%20Software.pdf",
  },
  {
    title: "A Two-Day Hands-on Workshop on 'PCB Design using Autodesk Eagle'",
    department: "Department of Electrical & Electronics Engineering (EEE) in association with MITS IEEE PES Student Branch Chapter (SBC64791N), Training & Placements",
    date: "11th & 12th June 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Two-Day%20Hands-on%20Workshop%20on%20PCB%20Design%20using%20Autodesk%20Eagle.pdf",
  },
  {
    title: "A One day Hands on Workshop on 'Offense and Defence in Cybersecurity: Penetration Testing and IDS with N-Stalker and Snort'",
    department: "Department of Computer Science and Technology in association with MITS IEEE Student Branch",
    date: "14th May 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/cst/Offense%20and%20Defence%20in%20Cybersecurity%20Penetration%20Testing%20and%20IDS%20with%20N-Stalker%20and%20Snort.pdf",
  },
  {
    title: "A One Day Workshop on 'Recent Trends in Generative AI and Robotics'",
    department: "Department of Computer Science & Engineering - Artificial Intelligence in Association with IEEE – RAS Student Chapter",
    date: "15th April 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/aids/Recent%20Trends%20in%20Generative%20AI%20and%20Robotics.pdf",
  },
  {
    title: "A One Day Workshop on 'UI/UX Design'",
    department: "Department of CSE - Artificial Intelligence in Association with IIC & IEEE - MITS",
    date: "05th March 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/aids/UI-UX%20Design-min.pdf",
  },
  {
    title: "A One-Day Workshop on 'Real-World Threat Analysis with KQL & Microsoft Security Tools'",
    department: "Department of Computer Science and Technology in association with MITS IEEE Student branch, IEEE Computer Society & IEEE Education Society",
    date: "14th February 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/cst/Real-World%20Threat%20Analysis%20with%20KQL%20&%20Microsoft%20Security%20Tools.pdf",
  },
  {
    title: "A Five-day Faculty Development Programme on 'Modern Machine Learning and AI Techniques Using MATLAB for Engineering and Industry'",
    department: "Department of Electronics & Communication Engineering and sponsored by MITS IEEE ComSoc Student Branch",
    date: "27th to 31st January 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Modern%20Machine%20Learning%20and%20AI%20Techniques%20Using%20MATLAB%20for%20Engineering%20and%20Industry.pdf",
  },
  {
    title: "An Inaugural Ceremony of IEEE PES Student Branch Chapter",
    department: "Department of Electrical & Electronics Engineering in association with IEEE Student Chapter",
    date: "31st January 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/PESReport.pdf",
  },
  {
    title: "An Expert talk on 'IEEE Power and Energy Student Branch Chapter: Advancing Towards the Award of High-Performing Student Branch Chapter Program (HPSBCP)'",
    department: "Department of Electrical & Electronics Engineering in association with IEEE Student Chapter",
    date: "31st January 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/ETPESreport.pdf",
  },
  {
    title: "A Five-Day National Level Workshop on 'Hands-On EDA Tools for Semiconductor Manufacturing'",
    department: "Department of Electronics and Communication Engineering Sponsored by MITS – IEEE, ComSoc (Hybrid Mode)",
    date: "20th to 24th January 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Hands-On%20EDA%20Tools%20for%20Semiconductor%20Manufacturing.pdf",
  },
  {
    title: "IEEE SPAx funded Project Design Contest and Poster Presentation on 'Engineering in Agriculture, Sustainability and Green Electronics'",
    department: "IEEE Circuits and Systems Society, Department of EEE in association with IEEE Student chapter at MITS",
    date: "23rd January 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Engineering%20in%20Agriculture,%20Sustainability%20and%20Green%20Electronics.pdf",
  },
  {
    title: "An Alumni Guest Lecture on 'Live Hacking in Action: A Deep Dive into Cyber Threats and Real-World Exploits'",
    department: "Department of Computer Science & Engineering - Cyber Security in Association with MITS Alumni Welfare Association and IEEE",
    date: "29th November 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Live%20Hacking%20in%20Action%20A%20Deep%20Dive%20into%20Cyber%20Threats%20and%20Real-World%20Exploits.pdf",
  },
  {
    title: "A Three Days International Workshop on 'Fundamentals and Recent Trends in Intellectual Property Rights, Startup Development, and Research Publication'",
    department: "Department of Electronics and Communication Engineering in collaboration with MITS IPFC & MITS IEEE Student Branch Chapter (ComSoc)",
    date: "27th to 29th November 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Fundamentals%20and%20Recent%20Trends%20in%20Intellectual%20Property%20Rights%20Startup%20Development%20and%20Research%20Publication.pdf",
  },
  {
    title: "A Two Days Ideathon 'IdeaBurst - 2K24'",
    department: "Department of Computer Science & Technology in association with Institute Innovation Council & IEEE Student Chapter",
    date: "27th & 28th November 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cst/IdeaBurst-2K24.pdf",
  },
  {
    title: "A One Day Hands-on Training on 'Virtual Reality and Its Applications'",
    department: "Department of Computer Science & Engineering In Association with IEEE",
    date: "20th November 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Empowering%20Real-time%20Solutions%20through%20IOT%20AI%20and%20Cloud%20Computing.pdf",
  },
  {
    title: "A Webinar on 'Insights from Global Leaders in Robotics'",
    department: "Department of CSE- Artificial Intelligence in Association with IEEE Robotics & Automation Society of Hyderabad Section Chapter, India",
    date: "20th November 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/aids/Insights%20from%20Global%20Leaders%20in%20Robotics.pdf",
  },
  {
    title: "A Guest Lecture on 'Gate and All PSU Career Guidance Program for Engineering Students'",
    department: "Department of Electrical & Electronics Engineering in association with IEEE & IIIC, MITS",
    date: "19th November 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Gate%20and%20All%20PSU%20Career%20Guidance%20Program%20for%20Engineering%20Students.pdf",
  },
  {
    title: "A Community Outreach Program for School Students",
    department: "MITS IEEE Student Branch Chapter In association with Department of Electronics & Communication Engineering",
    date: "18th November 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Community%20Outreach%20Program%20for%20School%20Students.pdf",
  },
  {
    title: "An Alumni Talk on 'Enhancing Placement Skills for Career'",
    department: "Department of Electronics & Communication Engineering in association with MITS Alumni Welfare Association and MITS IEEE Student Chapter",
    date: "28th October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Enhancing%20Placement%20Skills%20for%20Career.pdf",
  },
  {
    title: "A Hands on Workshop 'Full Stack Development'",
    department: "Department of Computer Science & Engineering in association with IEEE",
    date: "25th October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Full%20Stack%20Development%2025-10-2024.pdf",
  },
  {
    title: "A Three-Days Workshop on 'Cyber Security Essentials & Digital Defense'",
    department: "Department of Computer Science & Engineering - Cyber Security in collaboration with MITS IEEE Student Chapter, IEEE SMC and IIIC",
    date: "22nd to 24th October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Cyber%20Security%20Essentials%20&%20Digital%20Defense.pdf",
  },
  {
    title: "A Webinar on 'NLP from DL to LLM - Evolution of Language Models'",
    department: "Department of Computer Science & Engineering- Artificial Intelligence in Association with MITS IEEE & IEEE Robotics & Automation Society",
    date: "24th October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/aids/NLP%20from%20DL%20to%20LLM-Evolution%20of%20Language%20Models.pdf",
  },
  {
    title: "A Workshop of Entrepreneurship Development program on 'From IDEA to Execution'",
    department: "Department of Computer Science & Engineering - Data Science in association with IEEE & ED Cell",
    date: "22nd October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/From%20IDEA%20to%20Execution.pdf",
  },
  {
    title: "An Alumni Guest Lecture on 'The Art of Data: Visualizing and Analyzing with SQL and Business Intelligence'",
    department: "Department of Computer Science & Technology In Association with IEEE Student Branch, IEEE Computer Society, IEEE Education Society, MITS",
    date: "23rd October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cst/The%20Art%20of%20Data%20Visualizing%20and%20Analyzing%20with%20SQL%20and%20Business%20Intelligence.pdf.pdf",
  },
  {
    title: "A Workshop on 'Full Stack Web Development Bootcamp'",
    department: "Department of Computer Science & Engineering in association with Alumni Welfare and IEEE",
    date: "19th October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Full%20Stack%20Web%20Development%20Bootcamp-19-10-2024.pdf",
  },
  {
    title: "A Workshop on 'From Logic to Code: Building Effective Programs'",
    department: "Department of Computer Science & Engineering in association with Alumni Welfare and IEEE",
    date: "19th October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/From%20Logic%20to%20Code%20Building%20Effective%20Programs.pdf",
  },
  {
    title: "A IEEE Virtual Speaker Program on 'Grid Modernization: Technological Advancements Beyond Smart Grid'",
    department: "Department of Electrical & Electronics Engineering and MITS IEEE Student Chapter",
    date: "17th October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/ETreport.pdf",
  },
  {
    title: "A Guest Lecture on 'Solar PV Integration: Hardware Design and Development'",
    department: "Department of Electrical & Electronics Engineering in association with MITS IEEE Student Chapter",
    date: "20th September 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/500%20kVA%20DG%20Set%20Inspection.pdf",
  },
  {
    title: "An Alumni Guest Lecture on 'Top Tips for Excelling in Campus Placements'",
    department: "Department of Computer Science & Engineering in association with MITS Alumni Welfare Association and IEEE",
    date: "17th September 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Top%20Tips%20for%20Excelling%20in%20Campus%20Placements.pdf",
  },
  {
    title: "An 'Inauguration of IEEE Student Chapter'",
    department: "Department of Computer Science & Engineering In Association with IEEE",
    date: "12th September 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Inauguration%20of%20IEEE%20Student%20Chapter.pdf",
  },
  {
    title: "An Alumni Guest lecture on 'Building Your Professional Career: Strategic for Successful Placement'",
    department: "Department of Computer Science & Engineering in association with IEEE",
    date: "04th September 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Building%20Your%20Professional%20Career%20Strategic%20for%20Successful%20Placement.pdf",
  },
  {
    title: "An Alumni Guest Lecture 'Career Guidance on Software Industry'",
    department: "Department of Electronics & Communication Engineering in association with MITS Alumni Welfare Association and MITS IEEE Student Chapter",
    date: "29th August 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Carrer%20Guidance%20on%20Software%20Industry-2024.pdf",
  },
  {
    title: "A 'Departmental Level Hackathon'",
    department: "Department of Computer Science & Engineering in association with Institution’s Innovation Council, IEEE Intelligent Transportation Systems Society Student Branch Chapter",
    date: "28th August 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Departmental%20Level%20Hackathon.pdf",
  },
  {
    title: "An Inauguration of 'IEEE Reliability Society under MITS IEEE Student Branch'",
    department: "Department of Computer Science & Engineering - Data Science",
    date: "20th August 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/IEEE%20Reliability%20Society%20under%20MITS%20IEEE%20Student%20Branch.pdf",
  },
  {
    title: "A Guest Lecture on 'Career Development Skills for Employability'",
    department: "Department of Electronics & Communication Engineering in association with MITS Alumni Welfare Association and MITS IEEE Student Branch",
    date: "30th August 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Career%20Development%20Skills%20for%20Employability.pdf",
  },
  {
    title: "An Online Guest Lecture on 'Deep Learning Techniques for Data Mining, Predictive Maintenance'",
    department: "Department of Computer Science & Technology In association with IEEE, IIIC, IIC-MITS",
    date: "03rd August 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cst/Deep%20Learning%20Techniques%20for%20Data%20Mining,%20Predictive%20Maintenance.pdf",
  },
  {
    title: "A Five Day National Level Online Faculty Development Programme on 'Leveraging AI: Human Factors in Cyber Security'",
    department: "Department of Computer Science & Engineering - Cyber Security in Association with IEEE Student Branch",
    date: "08th to 12th July 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Leveraging%20AI%20Human%20Factors%20in%20Cyber%20Security.pdf",
  },
  {
    title: "A One Day National Level Technical Symposium 'Mechonance-2k24'",
    department: "Department of Mechanical in association with IIC and IEEE Chapter",
    date: "1st May 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/mech/Mechonanace-2K24.pdf",
  },
  {
    title: "An Interactive Session on Opportunities in Japan",
    department: "Department of Computer Science & Engineering - Artificial Intelligence in Association with IRO, IIC & IEEE - MITS",
    date: "2nd April 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/aids/An%20Interactive%20Session%20on%20Opportunities%20in%20Japan.pdf",
  },
  {
    title: "A Webinar on 'Power BI End to End Project for Beginners'",
    department: "Department of Computer Science & Engineering - Artificial Intelligence in Association with IEEE & IIIC - MITS",
    date: "01st March 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Power%20BI%20End%20to%20End%20Project%20for%20Beginners.pdf",
  },
  {
    title: "One Day Expert Talk on 'Intellectual Property Rights: Concept, Importance, and Its Role in Economic Growth'",
    department: "Department of Electrical & Electronics Engineering In Association with IIC and IEEE Chapter, MITS",
    date: "29th February 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Report%20Expert%20Tal_29_Feb_2024_Intellectual%20Property%20Rights.pdf",
  },
  {
    title: "A One-Day Guest Lecture on 'The Evolution of Cyber Threats: Navigating Emerging Trends'",
    department: "Department of Computer Science & Technology in association with Institute of Electrical and Electronics Engineers (IEEE)",
    date: "26th February 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cst/The%20Evolution%20of%20Cyber%20Threats%20Navigating%20Emerging%20Trends.pdf",
  },
  {
    title: "A 5 Days International Level Online FDP on 'Unveiling Emerging Trends in Artificial Intelligence and Data Renaissance'",
    department: "Department of Computer Science & Engineering (Artificial Intelligence) in association with MITS - IEEE Student Branch, Indian Society for Technical Education (ISTE) and MITS IIC",
    date: "19th to 23rd February 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Unveiling%20Emerging%20Trends%20in%20Artificial%20Intelligence%20and%20Data%20Renaissance.pdf",
  },
  {
    title: "An Industrial Visit to 'Sathanur Hydro-Electric Power Station'",
    department: "Department of Electrical & Electronics Engineering In Association with IIIC, IEEE and ISTE Chapter for II Year students",
    date: "23rd February 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Report%20on%20II%20Year%20Industrial%20Visit%20to%20Sathanur%20Power%20House.pdf",
  },
  {
    title: "One-Day Expert Talk on 'Beyond Boundaries: Design Thinking as the Catalyst for Innovation'",
    department: "Department of Electrical & Electronics Engineering In Association with Institution Innovation Council (IIC) & IEEE-Student Chapter",
    date: "17th February 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Beyond%20Boundaries%20Design%20Thinking%20as%20the%20Catalyst%20for%20Innovation.pdf",
  },
  {
    title: "A Workshop on 'Social Information Network - Data Analysis and Visualization'",
    department: "Department of Computer Science & Engineering in association with Institute of Electrical and Electronics Engineers (IEEE)",
    date: "06th January 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Social%20Information%20Network%20-%20Data%20Analysis%20and%20Visualization.pdf",
  },
  {
    title: "1st International Conference on Optimization Techniques for Learning (ICOTL 2023)",
    department: "Department of Computer Science & Engineering in Association with IEEE",
    date: "7th & 8th December 2023",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/International%20Conference%20on%20Optimization%20Techniques%20for%20Learning%20-%20ICOTL23.pdf",
  },
  {
    title: "A Guest Lecture on 'Challenges in Developing Mobile Apps'",
    department: "Department of Computer Science & Engineering in Association with IEEE",
    date: "22nd November 2023",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Report%20on%20Guest%20Lecture%20Organised%20by%20Dept%20of%20CSE%20on%20Challenges%20in%20Developing%20Mobile%20Apps.pdf",
  },
  {
    title: "IEEE Day Celebration 2023",
    department: "MITS IEEE Student Branch Jointly together with All the Departments In Association with MITS IEEE Communication Society & MITS IEEE Circuit and Systems Society, MITS IEEE Computer Society, MITS IEEE Sensor Council, MITS IEEE Nanotechnology Council",
    date: "31st October 2023",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/IEEE%20Day%20Celebration%202023.pdf",
  },
  {
    title: "An Alumni Guest Lecture on 'Pathway Towards Software Opportunities'",
    department: "Department of Electrical & Electronics Engineering",
    date: "5th August 2023",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Pathway%20Towards%20Software%20Opportunities.pdf",
  },
  {
    title: "A Guest Lecture on 'Benefits of IEEE Membership' awareness programme by Dr. Basabi Chakraborty",
    department: "MITS IEEE Student Branch",
    date: "1st February 2023",
    reportUrl: "https://mits.ac.in/assets/event/Benefits%20of%20IEEE%20Membership.pdf",
  },
  {
    title: "A One Week Online Faculty Induction Workshop on Thrust Areas Programme",
    department: "Department of Computer Science and Computer Science and Engineering in association with IEEE",
    date: "10-10-2022 to 15-10-2022",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/One%20Week%20Online%20Faculty%20Induction%20Workshop%20on%20Thrust%20Areas.pdf",
  },
  {
    title: "IEEE Day 2022 'Leveraging Technology for Better Tomorrow'",
    department: "IEEE MITS Student Branch",
    date: "14th October 2022",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/IEEE%20DAY%202022.pdf",
  },
  {
    title: "A Guest Lecture on 'Intelligent Controller for Smart Integrated Wind and Solar based Hybrid Power Generation Scheme'",
    department: "Department of Electrical & Electronics Engineering on the occasion of IEEE Day Celebrations",
    date: "14th October 2022",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Report%20on%20IEEE%20day's%20technical%20talk.pdf",
  },
  {
    title: "IEEE MITS Student Branch Congress and Celebration of IEEE-Day",
    department: "Jointly Organized by Department of Electronics and Communication Engineering & Department of Electrical and Electronics Engineering",
    date: "5th October 2021",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Report%20on%20IEEE%20Day-2021.pdf",
  },
  {
    title: "One Day International webinar on 'Blockchain technology and its applications'",
    department: "Department of Computer Science & Engineering in Association with IEEE- MITS Student Chapter",
    date: "02nd July 2021",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/WEBINAR%20REPORT%20SCBOSE2-2021-min.pdf",
  },
  {
    title: "One Day Workshop on 'Electrical Substation design'",
    department: "Department of Electrical and Electronics Engineering in association with IEEE through Microsoft Teams",
    date: "25th June 2021",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Electrical%20Substation%20design.pdf",
  },
  {
    title: "A Webinar on 'Electric Vehicle - Design Overview'",
    department: "Department of Electrical and Electronics Engineering in association with IEEE MITS Student Chapter through Microsoft Teams",
    date: "11th June 2021",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Webinar%20Report%20on%20EV.pdf",
  },
  {
    title: "IEEE MITS Student Branch Congress and Celebration of IEEE Day",
    department: "Department of Electrical & Electronics Engineering",
    date: "06th October 2020",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Report%20on%20IEEE%20Day-EEE.pdf",
  },
  {
    title: "IEEE MITS Student Branch Congress and Celebration of IEEE Day",
    department: "Department of Computer Science & Engineering",
    date: "06th October 2020",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Report%20on%20IEEE%20Day-CSE.pdf",
  },
  {
    title: "IEEE MITS Student Branch Congress on the theme of UN Sustainable Development Goal 2030",
    department: "Departments of ECE & MITS IEEE SB",
    date: "1st October 2019",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Recent%20Trend%20in%20Cyber%20Security.pdf",
  },
  {
    title: "A Workshop on 'Recent Trends in Cyber Security'",
    department: "Sponsored by TEQIP-II and IEEE-MITS Student Branch",
    date: "17th November 2018",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Recent%20Trend%20in%20Cyber%20Security.pdf",
  },
  {
    title: "A Guest Lecture on IEEE Student Membership by resource person Dr. Ramalatha Marimuthu",
    department: "MITS-IEEE Chapter at MITS under TEQIP-II",
    date: "23 January 2017",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/IEEE-%20A%20Stepping%20Stone%20to%20Success.pdf",
  },
];

const participatedEvents: ParticipatedEvent[] = [
  {
    facultyOrStudent: "Mrs. Komala Anamalamudi",
    details: "Attended 3rd Conference Organizers Workshop at TCS, Madhapur, Hyderabad conducted by IEEE India Council and IEEE Hyderabad section on 25th April 2015.",
  },
  {
    facultyOrStudent: "Mr. G. Sambasiva Rao & Mr. L. Ashok",
    details: "Participated in a Two Day IEEE International Conference on Advances in Engineering and Technology (ICAET 2014) on 2 & 3 May 2014 and presented the paper entitled 'A 0.6V Low-power FGMOS Current Reference with Subtraction Technique' organized by the department of ECE, EGS Pillai Engineering College, Nagapattinam.",
  },
  {
    facultyOrStudent: "Mr. M. Jagadeesh Babu, Mr. E. Santhosh & Mr. A. M. Sivakrishna",
    details: "Mr. M. Jagadeesh Babu (Member of IEEE, Branch counselor & Associate professor) and two IEEE student members Mr. E. Santhosh (III ECE, 11691A0495), Mr. A. M. Sivakrishna (III IT, 11691A1240) attended one day workshop on 'Technology Enhanced Learning through IEEE for imparting Higher Quality Education' Organized by JNTU Ananthapuramu on 19th April 2014.",
  },
  {
    facultyOrStudent: "Mr. D. Chinna Kullay Reddy & Mr. G. Ravi Prakash",
    details: "Assistant Professors, EEE Department participated in two day National Symposium and Technical Exhibition 2013 on 'Micro Grids: Laboratory to Real Markets' at Danube Auditorium in TechMahindra Satyam Campus, Hyderabad February 22-23, 2013 organised by the IEEE PES/IAS/PELS Joint chapter, Hyderabad section.",
  },
  {
    facultyOrStudent: "Mr. K. Bhanu Kiran, Mr. K. Vasu, Mr. Y. Vasudeva Reddy & Mr. N. Sudhakar",
    details: "Attended workshop on 'ELECTRICAL FIRE AND SAFETY', organized by IEEE and FSAI, conducted from 8th to 10th November 2012 at Novotel, Hyderabad.",
  },
  {
    facultyOrStudent: "Dr. E. Madhusudhana Reddy & Mr. S. Mohammad Ghouse",
    details: "Presented a Paper titled 'A novel on Transductive Decision Tree' in the Book Titled Advances in Engineering and Technology Series, Year: 2013, Paper Type: Book Series, DOI: 03.AETS.2013.2.57, Pages: 274-278, Vol. 2. Two Papers published in IEEE conference Book.",
  },
  {
    facultyOrStudent: "Mr. S. M. Farooq",
    details: "Attended a two day National Workshop on 'Notable Trends in Current Computer Science and Engineering' Technically Co-Sponsored by IEEE Hyderabad Section & IEEE Computer Society Chapter, Hyderabad Section on 30-31 January 2013, Venue seminar hall, Muffakham Jah College of Engg and Technology, Hyderabad.",
  },
  {
    facultyOrStudent: "Dr. M. Suresh Babu & K. Chandra Sekhar",
    details: "Attended one day workshop on 'Mobile Security' conducted by CDAC, Hyderabad in Association with SIT, JNTUH and IEEE Hyderabad Section on 2nd February 2013.",
  },
  {
    facultyOrStudent: "Mr. Mahesh (Assoc. Prof., ECE)",
    details: "Presented a paper titled 'Automatic Image Mosaic system Using Steerable Harris corner Detector' in an International Conference on Machine Vision and Image Processing (MVIP12), Organized by Department of Instrumentation and Control Engineering, PSG College of Technology Technically Co-Sponsored by IEEE, Coimbatore, Tamil Nadu.",
  },
  {
    facultyOrStudent: "Mr. M. Jagadeesh Babu (ECE)",
    details: "Attended one Day IEEE Conference organizers workshop (13 October 2012) organised by IEEE Hyderabad Section and Co-sponsored by IEEE Vizag Bay Subsection.",
  },
  {
    facultyOrStudent: "Mr. D. Chinna Kullay Reddy (EEE)",
    details: "Attended one Day IEEE Conference organizers workshop (13 October 2012) organised by IEEE Hyderabad Section and Co-sponsored by IEEE Vizag Bay Subsection.",
  },
  {
    facultyOrStudent: "Mr. K. Vasu",
    details: "Attended IEEE National Level Conference on Control Systems (Aug 2009, NIT Calicut), IEEE National Level Conference on Power Systems (Jan 2010, NIT Calicut), and Building an Education and Research Program in Power and Energy Systems international 5-day workshop (27 May to 1 June 2011, MITS Madanapalle).",
  },
];

const focusAreas = [
  { no: 1, text: "Providing training to the students to become \"Master in Technology\"." },
  { no: 2, text: "Encouraging innovation and excellence in students through various means." },
  { no: 4, text: "Promoting better career development opportunities and services for students." },
  { no: 5, text: "Arranging expert lectures and interactions with eminent global scientists and technologists." },
  { no: 6, text: "Extending full support for all the national seminars and technical events in the university." },
  { no: 7, text: "Enhancing the self-confidence, communication skills and self-esteem of students." },
  { no: 8, text: "Conducting various competitions within the college to enhance the competency and presentation skills of students." },
];

const grantsAndSponsorships = [
  {
    title: "IEEE CAS Seasonal School Grant ($2,173 USD / Rs. 1,80,359)",
    desc: "Received approval from IEEE CAS (Circuit & Systems Society) Headquarters to organize Seasonal School on \"Neuromorphic Computing and Logic In Memory Computing Using Non Volatile Memory Devices\" with a support fund of 2,173 USD.",
    highlight: "$2,173 USD (~Rs. 1.8 Lakhs)",
  },
  {
    title: "IEEE Nanotechnology Council Summer School Grant ($4,620 USD)",
    desc: "Received 4,620 USD grant to organize International level Nanotechnology Summer School titled \"NANO-CRHES: Nanotechnology for Integrated Computing, Robotics, Healthcare and Environmental Sustainability\" through IEEE Nanotechnology Council.",
    highlight: "$4,620 USD",
  },
  {
    title: "IEEE Robotics & Automation Society Startup Grant ($500 USD)",
    desc: "Received 500 USD as Startup grant for MITS IEEE Robotics and Automation Society Student Branch Chapter.",
    highlight: "$500 USD",
  },
  {
    title: "IEEE SPAX Ashv 2K25 Approval ($400 USD)",
    desc: "Received approval 400 USD for Ashv 2K25 technical festival from IEEE SPAX initiatives.",
    highlight: "$400 USD",
  },
  {
    title: "IEEE ComSoc Event Support Fund 2025 ($350 USD)",
    desc: "Received approval 350 USD for Event Support fund for MITS IEEE Communication Society for the year 2025.",
    highlight: "$350 USD",
  },
  {
    title: "IEEE CAS Society Startup Grant ($250 USD)",
    desc: "Received approval 250 USD for Startup grant for MITS IEEE Circuit and Systems Society.",
    highlight: "$250 USD",
  },
  {
    title: "IEEE Hyderabad Section Annual Sponsorship (Rs. 50,000 / Year 2023)",
    desc: "Received Rs. 50,000 /- sponsorship from IEEE Hyderabad Section.",
    highlight: "Rs. 50,000",
  },
  {
    title: "IEEE CAS Hyderabad Section Sponsorship (Rs. 25,000)",
    desc: "Rs. 25,000 /- sponsorship received from IEEE CAS, Hyderabad Section.",
    highlight: "Rs. 25,000",
  },
  {
    title: "IEEE ComSoc Hyderabad Section Sponsorship (Rs. 10,000 / Year 2024)",
    desc: "Rs. 10,000 /- sponsorship received from IEEE ComSoc, Hyderabad Section.",
    highlight: "Rs. 10,000",
  },
  {
    title: "IEEE Ananthapuramu Subsection & Reliability Society Chapter (Rs. 10,000)",
    desc: "Rs. 10,000 /- sponsorship received from IEEE Ananthapuramu Subsection & IEEE Reliability Society Chapter, Hyderabad.",
    highlight: "Rs. 10,000",
  },
  {
    title: "IEEE Headquarters Rebate (146 USD / Year 2023)",
    desc: "Received 146 USD as annual rebate from IEEE Headquarters for excellence in branch reporting.",
    highlight: "$146 USD",
  },
  {
    title: "16+ Technical Societies & Councils Initiated Till March 2025",
    desc: "Each department actively organizing regular technical events under MITS IEEE Student Branch in association with IEEE Hyderabad Section and IEEE Ananthapuramu Subsection.",
    highlight: "17 Societies",
  },
];

export default function IeeeView() {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800">
      <Header />

      {/* HERO BANNER - Standard MITS Cell Design */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffd15c]" />
            <span>Professional Society &amp; Technical Student Branch</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            MITS IEEE Student Branch [STB64791]
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Institute of Electrical and Electronics Engineers • Madanapalle Institute of Technology &amp; Science (Deemed to be University)
          </p>
        </div>

        {/* BOTTOM-LEFT CORNER BREADCRUMB */}
        <nav className="absolute bottom-4 left-6 md:left-12 z-10">
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
            <li className="text-[#ffd15c] font-medium">IEEE Student Branch</li>
          </ol>
        </nav>
      </section>

      {/* MAIN CONTAINER - Full Space Coverage */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        {/* BACK BUTTON */}
        <div className="mb-6">
          <Link
            to="/cells"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#8B1D1D] hover:text-[#691313] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Cells &amp; Committees
          </Link>
        </div>

        {/* TOP SECTION: 2-COLUMN EXPANSIVE OVERVIEW (LEFT CONTENT + RIGHT STICKY CONTACT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start mb-12">
          {/* LEFT COLUMN (8-9 COLS) */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            {/* ABOUT IEEE CARD WITH OFFICIAL EMBEDDED LOGO */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
                {/* LOGO & HEADING ROW */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6 pb-6 border-b border-slate-100">
                  <div className="shrink-0 bg-white p-2 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-center">
                    <img
                      src={logoError ? "https://mits.ac.in/images/ieee.png" : `${BASE}images/ieee.png`}
                      alt="MITS IEEE Student Branch Logo"
                      className="w-48 sm:w-56 md:w-60 h-auto object-contain"
                      onError={() => setLogoError(true)}
                    />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#8B1D1D] border border-red-200 mb-2">
                      Branch Code: STB64791
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      MITS IEEE Student Branch
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Under IEEE Hyderabad Section &amp; IEEE Ananthapuramu Subsection • Established 2005
                    </p>
                  </div>
                </div>

                {/* ABOUT IEEE NARRATIVE */}
                <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                  <h3 className="text-lg font-bold text-slate-900">About IEEE</h3>
                  <p>
                    <strong>IEEE</strong> stands for the <strong>Institute of Electrical and Electronics Engineers</strong>. It is the largest technical professional organization in the world, and is dedicated to advancing technology for the benefit of humanity. IEEE inspires a global community through its publications, conferences, technology standards, and professional and educational activities.
                  </p>
                  <p>
                    IEEE was formed in 1963 when the <strong>American Institute of Electrical Engineers (AIEE)</strong> and the <strong>Institute of Radio Engineers (IRE)</strong> merged. The AIEE was established in 1884 to support and aid electrical professionals, and the IRE was founded in 1912 and focused on radio and electronics.
                  </p>
                  <p>
                    IEEE develops industry standards in a wide range of technologies, and its standards often become national and international standards. IEEE also publishes a number of journals, has many local chapters, and several large societies in special areas, such as the IEEE Computer Society.
                  </p>
                </div>

                {/* MISSION & VISION */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
                  <div className="p-4 rounded-xl bg-red-50/40 border border-red-100">
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#8B1D1D]" />
                      Mission
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#8B1D1D]" />
                      Vision
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.
                    </p>
                  </div>
                </div>

                {/* MAJOR OBJECTIVES */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B1D1D]" />
                    The major objectives of the IEEE are:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D] shrink-0 mt-1.5" />
                      <span>Foster technological innovation</span>
                    </li>
                    <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D] shrink-0 mt-1.5" />
                      <span>Advance the technical and educational aspects of computer engineering, telecommunications, electrical and electronic engineering</span>
                    </li>
                    <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D] shrink-0 mt-1.5" />
                      <span>Inspire the global community through publications, conferences, technology standards, and professional and educational activities</span>
                    </li>
                    <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D] shrink-0 mt-1.5" />
                      <span>Be essential to the global technical community</span>
                    </li>
                    <li className="flex items-start gap-2 sm:col-span-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D] shrink-0 mt-1.5" />
                      <span>Be universally recognized for the contributions of technical professionals and technology in improving global conditions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* MITS IEEE STUDENT BRANCH STANDARD OPERATING PROCEDURE (SOP) OVERVIEW */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      MITS IEEE Student Branch Standard Operating Procedure (SOP)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Constitutional governance under IEEE Hyderabad Section &amp; IEEE Ananthapuramu Subsection
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  <strong>MITS IEEE Student Branch (STB64791)</strong> was initiated in the year 2005. The student branch functions as per the IEEE constitution-and-bylaw under <strong>IEEE Hyderabad Section</strong> and <strong>IEEE Ananthapuramu Subsection</strong>. This is one of the most active student branches across Andhra Pradesh and Telangana States. The following 17 societies are under MITS IEEE SB.
                </p>

                {/* 17 SOCIETIES TABLE - COMPLETELY VISIBLE WITHOUT SCROLL */}
                <div className="rounded-lg border border-slate-200 shadow-2xs overflow-hidden mb-6">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#8B1D1D] text-white">
                        <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase text-center w-14 whitespace-nowrap">
                          S.No
                        </th>
                        <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase whitespace-nowrap">
                          Society
                        </th>
                        <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase whitespace-nowrap">
                          Department Association
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {societies.map((soc) => (
                        <tr key={soc.sno} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2.5 px-4 font-medium text-slate-500 text-center whitespace-nowrap">
                            {soc.sno}
                          </td>
                          <td className="py-2.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                            {soc.society}
                          </td>
                          <td className="py-2.5 px-4 text-slate-700 whitespace-nowrap">
                            {soc.department}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* THREE PRIMARY LINKS ROW */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <a
                    href="https://mits.ac.in/assets/pdf/assoc/MITS%20IEEE%20SOP.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-red-50/50 hover:bg-red-50 border border-red-200/80 transition-colors group"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#8B1D1D]">
                      MITS IEEE SOP
                    </span>
                    <span className="text-[11px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">PDF</span>
                  </a>

                  <a
                    href="https://mits.ac.in/assets/pdf/assoc/Society%20List.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-red-50/50 hover:bg-red-50 border border-red-200/80 transition-colors group"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#8B1D1D]">
                      MITS IEEE Society List
                    </span>
                    <span className="text-[11px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">PDF</span>
                  </a>

                  <a
                    href="https://mits.ac.in/assets/pdf/assoc/Society%20Advisors%20List.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-red-50/50 hover:bg-red-50 border border-red-200/80 transition-colors group"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#8B1D1D]">
                      MITS IEEE Society Advisor's List
                    </span>
                    <span className="text-[11px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">PDF</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* ACHIEVEMENTS & MEMBERSHIP STATISTICS (ITEMIZED BREAKDOWN) */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      Achievements &amp; Global Grants
                    </h3>
                    <p className="text-xs text-slate-500">
                      Record student memberships, senior elevation &amp; IEEE funding milestones
                    </p>
                  </div>
                </div>

                {/* MEMBERSHIP NUMERICAL STATS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {/* Student Membership */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50/60 to-red-50/40 border border-amber-200/80">
                    <div className="flex items-center gap-2 mb-2 text-[#8B1D1D] font-bold text-xs uppercase tracking-wider">
                      <Users className="w-4 h-4" />
                      <span>Student Membership</span>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                      <li className="flex justify-between items-center py-0.5 border-b border-amber-200/50">
                        <span className="font-semibold text-slate-900">Year 2025</span>
                        <span className="font-bold text-[#8B1D1D]">36*</span>
                      </li>
                      <li className="flex justify-between items-center py-0.5 border-b border-amber-200/50">
                        <span className="font-semibold text-slate-900">Year 2024</span>
                        <span className="font-bold text-emerald-700">106 (Top in Hyderabad)</span>
                      </li>
                      <li className="flex justify-between items-center py-0.5 border-b border-amber-200/50">
                        <span className="font-semibold text-slate-900">Year 2023</span>
                        <span className="font-bold text-slate-800">54</span>
                      </li>
                      <li className="flex justify-between items-center py-0.5">
                        <span className="font-semibold text-slate-600">Year 2005-2022</span>
                        <span className="font-bold text-slate-700">12</span>
                      </li>
                    </ul>
                  </div>

                  {/* Professional Membership */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50/60 to-slate-50 border border-blue-200/80">
                    <div className="flex items-center gap-2 mb-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
                      <GraduationCap className="w-4 h-4" />
                      <span>Professional Membership</span>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                      <li className="flex justify-between items-center py-0.5 border-b border-blue-200/50">
                        <span className="font-semibold text-slate-900">Year 2024</span>
                        <span className="font-bold text-blue-800">12+</span>
                      </li>
                      <li className="flex justify-between items-center py-0.5">
                        <span className="font-semibold text-slate-900">Year 2023</span>
                        <span className="font-bold text-slate-800">8</span>
                      </li>
                    </ul>
                  </div>

                  {/* Senior Membership Elevation */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/60 to-slate-50 border border-emerald-200/80">
                    <div className="flex items-center gap-2 mb-2 text-emerald-900 font-bold text-xs uppercase tracking-wider">
                      <Award className="w-4 h-4" />
                      <span>Senior Membership Elevation</span>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                      <li className="flex justify-between items-center py-0.5 border-b border-emerald-200/50">
                        <span className="font-semibold text-slate-900">Year 2024</span>
                        <span className="font-bold text-emerald-800">2</span>
                      </li>
                      <li className="flex justify-between items-center py-0.5 border-b border-emerald-200/50">
                        <span className="font-semibold text-slate-900">Year 2023</span>
                        <span className="font-bold text-slate-800">1</span>
                      </li>
                      <li className="flex justify-between items-center py-0.5">
                        <span className="font-semibold text-slate-600">Year 2005-2022</span>
                        <span className="font-bold text-slate-700">0</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ITEMIZED GRANTS & SPONSORSHIPS */}
                <h4 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#8B1D1D]" />
                  Grants, Sponsorships &amp; Approvals Received:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {grantsAndSponsorships.map((grant, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60 hover:bg-red-50/20 hover:border-red-200 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h5 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                            {grant.title}
                          </h5>
                          <span className="text-[11px] font-bold text-red-800 bg-red-100 px-2 py-0.5 rounded shrink-0 whitespace-nowrap">
                            {grant.highlight}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {grant.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* MAJOR FOCUS AREAS (1 TO 8) */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      MITS-IEEE Chapter Major Focus Areas
                    </h3>
                    <p className="text-xs text-slate-500">
                      Core training, leadership development &amp; student empowerment goals
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {focusAreas.map((area) => (
                    <div
                      key={area.no}
                      className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50/80 border border-slate-200/60 hover:bg-red-50/20 hover:border-red-200 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#8B1D1D] text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        {area.no}
                      </div>
                      <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium">
                        {area.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT SIDEBAR (3-4 COLS) - CRISP STICKY CONTACT CARD */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6 lg:sticky lg:top-28">
            {/* CONTACT CARD */}
            <div className="bg-white rounded-xl shadow-md border border-slate-200/80 overflow-hidden">
              <div className="bg-[#8B1D1D] px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white !text-white leading-tight">
                    Contact Us
                  </h3>
                  <p className="text-xs text-amber-100/90 !text-amber-100 font-medium">
                    MITS IEEE Student Branch
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 !text-slate-900">
                    Dr. Somu Vijaya Bhaskar
                  </h4>
                  <div className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-[#8B1D1D] border border-red-200">
                    IEEE Coordinator
                  </div>
                  <p className="text-xs text-slate-700 font-medium mt-1.5 leading-relaxed">
                    Associate Professor, Dept. of EEE<br />
                    Chair, Communications Society - IEEE Hyderabad Section
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md bg-red-50 text-[#8B1D1D] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-slate-800 leading-relaxed">
                      <strong className="block text-slate-900 font-bold mb-0.5 uppercase tracking-wider text-[11px]">
                        Address:
                      </strong>
                      Madanapalle Institute of Technology &amp; Science<br />
                      Deemed to be University<br />
                      Madanapalle-Kadiri Road<br />
                      Kurabalakota Mandal, Madanapalle - 517325<br />
                      Andhra Pradesh, India
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md bg-red-50 text-[#8B1D1D] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-slate-800 leading-relaxed">
                      <strong className="block text-slate-900 font-bold mb-0.5 uppercase tracking-wider text-[11px]">
                        Phone:
                      </strong>
                      <a href="tel:+918571280255" className="text-[#8B1D1D] font-bold hover:underline">
                        +91-8571-280255
                      </a>
                      ,{" "}
                      <a href="tel:+918571280706" className="text-[#8B1D1D] font-bold hover:underline">
                        280706
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md bg-red-50 text-[#8B1D1D] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-slate-800 leading-relaxed">
                      <strong className="block text-slate-900 font-bold mb-0.5 uppercase tracking-wider text-[11px]">
                        E-Mail:
                      </strong>
                      <a
                        href="mailto:ieeechapter@mits.ac.in"
                        className="text-[#8B1D1D] hover:underline font-bold block break-all text-sm"
                      >
                        ieeechapter@mits.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK FACTS CARD */}
            <div className="bg-gradient-to-br from-red-50/50 to-amber-50/30 rounded-xl p-5 border border-red-100 shadow-sm">
              <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8B1D1D]" />
                Chapter Quick Facts
              </h4>
              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span><strong>Branch Code:</strong> STB64791</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span><strong>Section:</strong> IEEE Hyderabad Section</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span><strong>Subsection:</strong> IEEE Ananthapuramu Subsection</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span><strong>Technical Societies:</strong> 17 Chapters &amp; Councils</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span><strong>Inaugurated:</strong> 2nd February 2006</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FULL-WIDTH SECTION: PROFESSIONAL EXECUTIVE COMMITTEE & ADVISORS 2025-26 */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  MITS IEEE Professional Executive Committee &amp; Advisors 2025-26
                </h3>
                <p className="text-xs text-slate-500">
                  Leadership hierarchy, society advisors and branch counsellors
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 shadow-2xs overflow-hidden">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#8B1D1D] text-white">
                    <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase text-center w-14 whitespace-nowrap">
                      S.No
                    </th>
                    <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase whitespace-nowrap">
                      Name of the Committee Member
                    </th>
                    <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase">
                      Name of the IEEE Student Branch / Society / Council
                    </th>
                    <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase text-center whitespace-nowrap">
                      Chairperson / Counsellor / Advisor
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {committeeMembers.map((member) => (
                    <tr key={member.sno} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 px-4 font-medium text-slate-500 text-center whitespace-nowrap">
                        {member.sno}
                      </td>
                      <td className="py-2.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                        {member.name}
                        <span className="block text-xs font-normal text-slate-500">{member.designation}</span>
                      </td>
                      <td className="py-2.5 px-4 text-slate-800">
                        {member.branchOrSociety}
                      </td>
                      <td className="py-2.5 px-4 text-center whitespace-nowrap">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                            member.position === "Chairperson"
                              ? "bg-amber-100 text-amber-900 border border-amber-300"
                              : member.position === "Counsellor"
                              ? "bg-red-100 text-red-900 border border-red-300"
                              : "bg-blue-50 text-blue-800 border border-blue-200"
                          }`}
                        >
                          {member.position}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* FULL-WIDTH SECTION: OFFICIAL GOVERNANCE & ORDERS (PDF ROWS) */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 overflow-hidden mb-12">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Official Orders, Hierarchy &amp; Committee Approvals
                </h3>
                <p className="text-xs text-slate-500">
                  Direct official documents, office orders and student executive bodies
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {governanceDocuments.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-6 py-3.5 hover:bg-red-50/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-800 text-sm sm:text-base group-hover:text-[#8B1D1D] transition-colors">
                      {doc.title}
                    </span>
                    <span className="hidden md:inline-block text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {doc.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200/80">
                      PDF
                    </span>
                    <FileText className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* FULL-WIDTH SECTION: STUDENT MEMBERSHIP LISTS (PDF ROWS) */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 overflow-hidden mb-12">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  MITS IEEE Student Membership Lists
                </h3>
                <p className="text-xs text-slate-500">
                  Official annual membership rosters and department-wise student registration reports
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {membershipDocuments.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-6 py-3.5 hover:bg-red-50/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-800 text-sm sm:text-base group-hover:text-[#8B1D1D] transition-colors">
                      {doc.title}
                    </span>
                    <span className="hidden md:inline-block text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {doc.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200/80">
                      PDF
                    </span>
                    <FileText className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* FULL-WIDTH SECTION: DEPARTMENT-WISE CONSOLIDATED EVENTS & REPORTS */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 overflow-hidden mb-12">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  MITS IEEE Events &amp; Department Event Summaries
                </h3>
                <p className="text-xs text-slate-500">
                  Consolidated events by CST, EEE, CS, CSE (AI&amp;ML), CSE (AI) and faculty activities
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {departmentEventLists.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-6 py-3.5 hover:bg-red-50/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-800 text-sm sm:text-base group-hover:text-[#8B1D1D] transition-colors">
                      {item.title}
                    </span>
                    {item.date && (
                      <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
                        ({item.date})
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0">
                    {item.isExternalLink ? (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                        Event Site
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200/80">
                        PDF
                      </span>
                    )}
                    {item.isExternalLink ? (
                      <ExternalLink className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                    ) : (
                      <FileText className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* FULL-WIDTH SECTION: ARCHIVE EVENTS ORGANIZED (COMPLETE LIST) */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 overflow-hidden mb-12">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold shrink-0">
                  <History className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    Archive Events Organized
                  </h3>
                  <p className="text-xs text-slate-500">
                    Complete chronicle of conferences, workshops, guest lectures &amp; IEEE Day celebrations
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                {archiveEvents.length} Events Listed
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {archiveEvents.map((evt, idx) => (
                <div
                  key={idx}
                  className="px-6 py-4 hover:bg-slate-50/70 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3"
                >
                  <div className="space-y-1 pr-4">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {evt.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {evt.department} • <strong className="text-slate-800">{evt.date}</strong>
                    </p>
                  </div>
                  <div className="shrink-0">
                    <a
                      href={evt.reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#8B1D1D] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-red-600" />
                      <span>Report on Event</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 text-red-500" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* FULL-WIDTH SECTION: EVENTS PARTICIPATED */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8B1D1D] flex items-center justify-center font-bold shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Events Participated by Faculty &amp; Students
                </h3>
                <p className="text-xs text-slate-500">
                  National conferences, workshops, technical symposiums and IEEE presentations
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {participatedEvents.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-slate-50/70 border border-slate-200/60 hover:bg-red-50/20 hover:border-red-200 transition-colors flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#8B1D1D] text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    <strong className="text-slate-900 block font-bold mb-0.5">
                      {item.facultyOrStudent}
                    </strong>
                    <span className="text-slate-700">{item.details}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* FULL-WIDTH SECTION: IEEE@MITS INAUGURAL HISTORY */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#8B1D1D] via-[#691313] to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[#ffd15c] font-bold text-xs uppercase tracking-widest block mb-1">
                  Heritage &amp; Inception
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                  IEEE @ MITS Since 2006
                </h3>
                <p className="text-white/90 text-sm sm:text-base max-w-3xl leading-relaxed">
                  The IEEE student branch at MITS, under the IEEE Hyderabad section, was inaugurated on <strong>2nd February 2006</strong> with an initial membership of 20 students, three faculty advisors, and a branch counselor. Today, it has evolved into a premier student branch with 17 specialized societies and top regional membership counts.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="mailto:ieeechapter@mits.ac.in"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#8B1D1D] hover:bg-amber-100 font-bold text-sm shadow-md transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#8B1D1D]" />
                  <span>Join IEEE Student Branch</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <Footer />
    </div>
  );
}

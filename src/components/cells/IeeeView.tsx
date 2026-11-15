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
    title: "Office order MITS IEEE Professional Executive Committee & Advisors - 2025",
    href: "https://mits.ac.in/assets/pdf/assoc/IEEE%20Student%20branch-2025.pdf",
    category: "Office Order",
  },
  {
    title: "MITS IEEE Hierarchy",
    href: "https://mits.ac.in/assets/pdf/assoc/MITS%20IEEE%20Hierarchy.pdf",
    category: "Structure",
  },
  {
    title: "MITS IEEE SB Student Head Committee",
    href: "https://mits.ac.in/assets/pdf/assoc/Student%20Head%20Committee.pdf",
    category: "Student Leadership",
  },
  {
    title: "MITS IEEE Society Approval Letters",
    href: "https://mits.ac.in/assets/pdf/assoc/MITS%20IEEE%20Society%20Approval%20Letters.pdf",
    category: "Official Approvals",
  },
  {
    title: "MITS IEEE Student Executive committee",
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
    title: "2024 Student Membership List",
    href: "https://mits.ac.in/assets/pdf/assoc/2024%20Student%20Membership%20List.pdf",
    category: "Annual Membership",
  },
  {
    title: "2023 Student Membership List",
    href: "https://mits.ac.in/assets/pdf/assoc/2023%20Student%20Membership%20List.pdf",
    category: "Annual Membership",
  },
  {
    title: "Department of CST",
    href: "https://mits.ac.in/assets/pdf/assoc/Department%20of%20CST.pdf",
    category: "Department Roster",
  },
  {
    title: "Department of CSE",
    href: "https://mits.ac.in/assets/pdf/assoc/Department%20of%20CSE.pdf",
    category: "Department Roster",
  },
  {
    title: "Department of ECE",
    href: "https://mits.ac.in/assets/pdf/assoc/Department%20of%20ECE.pdf",
    category: "Department Roster",
  },
  {
    title: "Department of EEE",
    href: "https://mits.ac.in/assets/pdf/assoc/Department%20of%20EEE.pdf",
    category: "Department Roster",
  },
];

const featuredEvents = [
  {
    title: "Seasonal School on Neuromorphic Computing and in Memory Computing Using Non-Volatile Memory Devices (Hybrid) - 23rd to 25th September 2024.",
    href: "https://mits.ac.in/sscas",
    isExternalLink: true,
  },
  {
    title: "IEEE SPAx funded Project Design Contest and Poster Presentation on \"Engineering in Agriculture, Sustainability and Green Electronics\" was organized by IEEE Circuits and Systems Society, Department of EEE in association with IEEE Student chapter at MITS on 23rd January 2025.",
    href: "https://mits.ac.in/assets/pdf/eee/Engineering%20in%20Agriculture,%20Sustainability%20and%20Green%20Electronics.pdf",
    isExternalLink: false,
  },
];

const departmentEventLists = [
  {
    title: "List of IEEE Events - Department of CST",
    href: "https://mits.ac.in/assets/pdf/cst/CST%20IEEE%20Events.pdf",
  },
  {
    title: "List of IEEE Events - Department of EEE",
    href: "https://mits.ac.in/assets/pdf/assoc/IEEE%20consolidated-EEE.pdf",
  },
  {
    title: "List of IEEE Events - Department of CS",
    href: "https://mits.ac.in/assets/pdf/assoc/IEEE%20Events%20Summary%20Data%202025-26.pdf",
  },
  {
    title: "List of IEEE Events - Department of CSE (AI and ML)",
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
    title: "Activities alloted to the Faculty",
    href: "https://mits.ac.in/public/uploads/ieee/Activities%20alloted%20to%20the%20Faculty.pdf",
  },
  {
    title: "Activities Organized",
    href: "https://mits.ac.in/public/uploads/ieee/Activities%20Organized.pdf",
  },
];

const archiveEvents: ArchiveEvent[] = [
  {
    title: "A One Day Seminar on “Commercialization of Concept into a Product” was organized by Department of Computer Science & Engineering - Artificial Intelligence as part of IEEE Day 2026 Celebrations in Association with IEEE–RAS Student Chapter on 14th October 2026.",
    department: "Department of Computer Science & Engineering - Artificial Intelligence",
    date: "14th October 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Commercialization%20of%20Concept%20into%20a%20Produc.pdf",
  },
  {
    title: "An Expert Talk on “Human- Intelligent Robotics” was organized by Department of Electrical & Electronics Engineering in association with IEEE Student Chapter and IEEE PES Student Branch Chapter (SBC64791N) on 13th October 2026.",
    department: "Department of Electrical & Electronics Engineering",
    date: "13th October 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Human-Centered%20Intelligent%20Robotics%2013-10-2026.pdf",
  },
  {
    title: "A Three Days Workshop on “Industry-Ready DevOps: From Code to Deployment” was organized by Department of Computer Science & Engineering - Cyber Security in association with IEEE From 27th to 29th August 2026.",
    department: "Department of Computer Science & Engineering - Cyber Security",
    date: "27th to 29th August 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Industry-Ready%20DevOps%20From%20Code%20to%20Deployment.pdf",
  },
  {
    title: "A Six Weeks Online Hands-On Internship Fundamentals of Switching & Routing was organized by IEEE Communications Society, IEEE Hyderabad Section In association with IEEE MITS Student Branch & MITS Cisco Networking Academy 25th May to 3rd July 2026.",
    department: "IEEE Communications Society, IEEE Hyderabad Section & MITS Cisco Networking Academy",
    date: "25th May to 3rd July 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/6%20Weeks%20IEEE%20ComSoc%20Hands-on%20Virtual%20Internship.pdf",
  },
  {
    title: "An Innovation driven exhibition on \"AI Powered Solution Expo: Demo Day for AI / Industry 4.0 Prototypes\" was organized by Department of Computer Science & Engineering - Artificial Intelligence Sponsored by IEEE Robotics and Automation Society, MITS on 7th April 2026.",
    department: "Department of Computer Science & Engineering - Artificial Intelligence",
    date: "7th April 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/AI%20Powered%20Solution%20Expo%20Demo%20Day%20for%20AI%20Industry%204.0%20Prototypes.pdf",
  },
  {
    title: "A Seminar on \"Robotics 5.0- From Automation to Autonomous Intelligence\" was organized by Department of Computer Science & Engineering in Association with IEEE Student Chapter (ITSS) on 05th February 2026.",
    department: "Department of Computer Science & Engineering",
    date: "05th February 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Robotics%205.0%20From%20Automation%20to%20Autonomous%20Intelligence-compressed.pdf",
  },
  {
    title: "An Industry Perspective Session on “Understanding EHT Substations: From Generation to Grid” was organised by Department of Electrical and Electronics Engineering In Association with IEEE Student Branch Chapter, PES Student Branch Chapter and IIIC on 03rd February 2026.",
    department: "Department of Electrical and Electronics Engineering",
    date: "03rd February 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Report%20on%20Industry%20Perspective%20Session%20on%20Understanding%20EHT%20Substations%20-%20From%20Generation%20to%20Grid.pdf",
  },
  {
    title: "A Hands-on workshop on “Multi Rotor Drone Technology & Aerodynamics” was organized by Department of Electronics & Communication Engineering in association with Training & Placement Cell & MITS IEEE Student Branch from 29th to 31st January 2026.",
    department: "Department of Electronics & Communication Engineering",
    date: "29th to 31st January 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Multi%20Rotor%20Drone%20Technology%20&%20Aerodynamics.pdf",
  },
  {
    title: "A One Week Domain-Specific Hands-On Workshop on “Building Intelligent Systems Using Machine Learning Techniques” was organized by Department of Computer Science & Engineering In Association with IEEE on 5th to 10th January 2026.",
    department: "Department of Computer Science & Engineering",
    date: "5th to 10th January 2026",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Building%20Intelligent%20Systems%20Using%20Machine%20Learning%20Techniques.pdf",
  },
  {
    title: "2025 IEEE ComSoc School Series Virtual Event on “Advances in Wireless Connectivity: Technologies, Systems and Network Evolution” was organized by IEEE Communication Society (ComSoc) Student Chapter - STB64791 & Department of Electronics & Communication Engineering from 08th to 10th December 2025.",
    department: "IEEE Communication Society (ComSoc) Student Chapter & Dept. of ECE",
    date: "08th to 10th December 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Advances%20in%20Wireless%20Connectivity%20Technologies,%20Systems,%20and%20Network%20Evolution.pdf",
  },
  {
    title: "A Community Outreach Program on \"Hands-on Experience on Electronics Sensors and Actuators\" was organized by Department of Electronics & Communication Engineering in association with MITS IEEE Student Branch on 11th November 2025.",
    department: "Department of Electronics & Communication Engineering",
    date: "11th November 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Hands-on%20Experience%20on%20Electronics%20Sensors%20and%20Actuators.pdf",
  },
  {
    title: "A Webinar on “Nanofluid Assisted Thermal Performance Optimization in Non-Circular Ducts Across Multiple Engineering Applications” was organized by Department of Mechanical Engineering in Association with IEEE Student Chapter on 10th November 2025.",
    department: "Department of Mechanical Engineering",
    date: "10th November 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/mech/Nanofluid%20Assisted%20Thermal%20Performance%20Optimization%20in%20Non-Circular%20Ducts%20Across%20Multiple%20Engineering%20Applications.pdf",
  },
  {
    title: "An Expert Lecture on \"AI Evolution and Transformation in Digital Technologies\" was organized by Department of Computer Science and Engineering (Artificial Intelligence) In association with IEEE RAS Student Chapter on 17th October 2025.",
    department: "Department of Computer Science and Engineering (Artificial Intelligence)",
    date: "17th October 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/AI%20Evolution%20and%20Transformation%20in%20Digital%20Technologies.pdf",
  },
  {
    title: "An outreach event “Exploring Technology – ATAL Outreach Program” was organized by IEEE Communication Society Hyderabad Section, MITS IEEE Student Branch, and MITS IEEE Communication Society & MITS IIIC on 15th October.",
    department: "IEEE Communication Society Hyderabad Section & MITS IEEE SB",
    date: "15th October 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Exploring%20Technology%20-%20ATAL%20Outreach%20Program.pdf",
  },
  {
    title: "A Guest Lecture on \"Hydrogen Research Trends and Technologies\" was organized by Department of EEE in association with IEEE Student Branch Chapter and PES Student Branch Chapter (SBC64791N) 07th October 2025.",
    department: "Department of EEE",
    date: "07th October 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Hydrogen%20Research%20Trends%20and%20Technologies.pdf",
  },
  {
    title: "An Inauguration of New office Members to MITS IEEE Student Branch and Seminar on “Benefits of IEEE Professional membership” was organized by MITS IEEE Student Branch on 19th September 2025.",
    department: "MITS IEEE Student Branch",
    date: "19th September 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/Benefits%20of%20IEEE%20Professional%20membership.pdf",
  },
  {
    title: "A Three Days Hands-on Workshop on PCB Design using KiCad was organized by Department of Electrical & Electronics Engineering (EEE) in association with MITS IEEE PES Student Branch Chapter (SBC64791N), Training & Placements from 01st to 03rd September 2025.",
    department: "Department of Electrical & Electronics Engineering",
    date: "01st to 03rd September 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Three%20Days%20Hands-on%20Workshop%20on%20PCB%20Design%20using%20KiCad.pdf",
  },
  {
    title: "An event on \"Nurturing Minds, Empowering Futures\" was organized by Department of Computer Science & Engineering - Artificial Intelligence In association with Women Empowerment Cell and IEEE-RAS Student Chapter on 06th August 2025.",
    department: "Department of Computer Science & Engineering - Artificial Intelligence",
    date: "06th August 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/aids/Nurturing%20Minds,%20Empowering%20Futures.pdf",
  },
  {
    title: "An Online Guest Lecture on \"PCB Altium Software\" was organized by Department of Electronics & Communication Engineering in association with IEEE SB of MITS and MITS IIIC on 04th August 2025.",
    department: "Department of Electronics & Communication Engineering",
    date: "04th August 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/PCB%20Altium%20Software.pdf",
  },
  {
    title: "A Two-Day Hands-on Workshop on PCB Design using Autodesk Eagle was organized by Department of Electrical & Electronics Engineering (EEE) in association with MITS IEEE PES Student Branch Chapter (SBC64791N), Training & Placements on 11th & 12th June 2025.",
    department: "Department of Electrical & Electronics Engineering",
    date: "11th & 12th June 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Two-Day%20Hands-on%20Workshop%20on%20PCB%20Design%20using%20Autodesk%20Eagle.pdf",
  },
  {
    title: "A One day Hands on Workshop on “Offense and Defence in Cybersecurity: Penetration Testing and IDS with N-Stalker and Snort” was organized by Department of Computer Science and Technology in association with MITS IEEE Student Branch on 14th May 2025.",
    department: "Department of Computer Science and Technology",
    date: "14th May 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/cst/Offense%20and%20Defence%20in%20Cybersecurity%20Penetration%20Testing%20and%20IDS%20with%20N-Stalker%20and%20Snort.pdf",
  },
  {
    title: "A One Day Workshop on “Recent Trends in Generative AI and Robotics” was organized by Department of Computer Science & Engineering - Artificial Intelligence in Association with IEEE – RAS Student Chapter on 15th April 2025.",
    department: "Department of Computer Science & Engineering - Artificial Intelligence",
    date: "15th April 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/aids/Recent%20Trends%20in%20Generative%20AI%20and%20Robotics.pdf",
  },
  {
    title: "A One Day Workshop on “UI/UX Design” was organised by Department of CSE - Artificial Intelligence in Association with IIC & IEEE - MITS on 05th March 2025.",
    department: "Department of CSE - Artificial Intelligence",
    date: "05th March 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/aids/UI-UX%20Design-min.pdf",
  },
  {
    title: "A One-Day Workshop on “Real-World Threat Analysis with KQL & Microsoft Security Tools” was organized by Department of Computer Science and Technology in association with MITS IEEE Student branch, IEEE Computer Society & IEEE Education Society on 14th February 2025.",
    department: "Department of Computer Science and Technology",
    date: "14th February 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/cst/Real-World%20Threat%20Analysis%20with%20KQL%20&%20Microsoft%20Security%20Tools.pdf",
  },
  {
    title: "A Five-day Faculty Development Programme on \"Modern Machine Learning and AI Techniques Using MATLAB for Engineering and Industry\" was organized by Department of Electronics & Communication Engineering and sponsored by MITS IEEE ComSoc Student Branch 27th to 31st January 2025.",
    department: "Department of Electronics & Communication Engineering",
    date: "27th to 31st January 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Modern%20Machine%20Learning%20and%20AI%20Techniques%20Using%20MATLAB%20for%20Engineering%20and%20Industry.pdf",
  },
  {
    title: "An Inaugural Ceremony of IEEE PES Student Branch Chapter was organized by Department of Electrical & Electronics Engineering in association with IEEE Student Chapter on 31st January 2025.",
    department: "Department of Electrical & Electronics Engineering",
    date: "31st January 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/PESReport.pdf",
  },
  {
    title: "An Expert talk on \"IEEE Power and Energy Student Branch Chapter: Advancing Towards the Award of High-Performing Student Branch Chapter Program (HPSBCP)\" was organized by Department of Electrical & Electronics Engineering in association with IEEE Student Chapter on 31st January 2025.",
    department: "Department of Electrical & Electronics Engineering",
    date: "31st January 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/ETPESreport.pdf",
  },
  {
    title: "A Five-Day National Level Workshop on \"Hands-On EDA Tools for Semiconductor Manufacturing\" was organized by Department of Electronics and Communication Engineering Sponsored by MITS – IEEE, ComSoc (Hybrid Mode) from 20th to 24 January 2025.",
    department: "Department of Electronics and Communication Engineering",
    date: "20th to 24th January 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Hands-On%20EDA%20Tools%20for%20Semiconductor%20Manufacturing.pdf",
  },
  {
    title: "IEEE SPAx funded Project Design Contest and Poster Presentation on \"Engineering in Agriculture, Sustainability and Green Electronics\" was organized by IEEE Circuits and Systems Society, Department of EEE in association with IEEE Student chapter at MITS on 23rd January 2025.",
    department: "IEEE Circuits and Systems Society, Dept. of EEE",
    date: "23rd January 2025",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Engineering%20in%20Agriculture,%20Sustainability%20and%20Green%20Electronics.pdf",
  },
  {
    title: "An Alumni Guest Lecture on \"Live Hacking in Action: A Deep Dive into Cyber Threats and Real-World Exploits\" was organized by Department of Computer Science & Engineering - Cyber Security in Association with MITS Alumni Welfare Association and IEEE on 29th November 2024.",
    department: "Department of Computer Science & Engineering - Cyber Security",
    date: "29th November 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Live%20Hacking%20in%20Action%20A%20Deep%20Dive%20into%20Cyber%20Threats%20and%20Real-World%20Exploits.pdf",
  },
  {
    title: "A Three Days International Workshop on \"Fundamentals and Recent Trends in Intellectual Property Rights, Startup Development, and Research Publication\" was organised by Department of Electronics and Communication Engineering in collaboration with MITS IPFC & MITS IEEE Student Branch Chapter (ComSoc) from 27th to 29th November 2024.",
    department: "Department of Electronics and Communication Engineering",
    date: "27th to 29th November 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Fundamentals%20and%20Recent%20Trends%20in%20Intellectual%20Property%20Rights%20Startup%20Development%20and%20Research%20Publication.pdf",
  },
  {
    title: "A Two Days Ideathon \"IdeaBurst - 2K24\" was organized by Department of Computer Science & Technology in association with Institute Innovation Council & IEEE Student Chapter from 27th & 28th November 2024.",
    department: "Department of Computer Science & Technology",
    date: "27th & 28th November 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cst/IdeaBurst-2K24.pdf",
  },
  {
    title: "A One Day Hands-on Training on \"Virtual Reality and Its Applications\" was organized by Department of Computer Science & Engineering In Association with IEEE on 20th November 2024.",
    department: "Department of Computer Science & Engineering",
    date: "20th November 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Empowering%20Real-time%20Solutions%20through%20IOT%20AI%20and%20Cloud%20Computing.pdf",
  },
  {
    title: "A Webinar on “Insights from Global Leaders in Robotics” was organized By Department of CSE- Artificial Intelligence in Association with IEEE Robotics & Automation Society of Hyderabad Section Chapter, India on 20th November 2024.",
    department: "Department of CSE- Artificial Intelligence",
    date: "20th November 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/aids/Insights%20from%20Global%20Leaders%20in%20Robotics.pdf",
  },
  {
    title: "A Guest Lecture on “Gate and All PSU Career Guidance Program for Engineering Students” was organised by Department of Electrical & Electronics Engineering in association with IEEE & IIIC, MITS on 19th November 2024.",
    department: "Department of Electrical & Electronics Engineering",
    date: "19th November 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Gate%20and%20All%20PSU%20Career%20Guidance%20Program%20for%20Engineering%20Students.pdf",
  },
  {
    title: "A Community Outreach Program for School Students was organised by MITS IEEE Student Branch Chapter In association with Department of Electronics & Communication Engineering on 18th November 2024.",
    department: "MITS IEEE Student Branch Chapter & Dept. of ECE",
    date: "18th November 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Community%20Outreach%20Program%20for%20School%20Students.pdf",
  },
  {
    title: "An Alumni Talk on \"Enhancing Placement Skills for Career\" was organized by Department of Electronics & Communication Engineering in association with MITS Alumni Welfare Association and MITS IEEE Student Chapter on 28th October 2024.",
    department: "Department of Electronics & Communication Engineering",
    date: "28th October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Enhancing%20Placement%20Skills%20for%20Career.pdf",
  },
  {
    title: "A Hands on Workshop “Full Stack Development” was organized by Department of Computer Science & Engineering in association with IEEE on 25th October 2024.",
    department: "Department of Computer Science & Engineering",
    date: "25th October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Full%20Stack%20Development%2025-10-2024.pdf",
  },
  {
    title: "A Three-Days Workshop on \"Cyber Security Essentials & Digital Defense\" was organised by Department of Computer Science & Engineering - Cyber Security in collaboration with MITS IEEE Student Chapter, IEEE SMC and IIIC from 22nd to 24th October 2024.",
    department: "Department of Computer Science & Engineering - Cyber Security",
    date: "22nd to 24th October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Cyber%20Security%20Essentials%20&%20Digital%20Defense.pdf",
  },
  {
    title: "A Webinar on “NLP from DL to LLM-Evolution of Language Models” was organised By Department of Computer Science & Engineering- Artificial Intelligence in Association with MITS IEEE & IEEE Robotics & Automation Society on 24th October 2024.",
    department: "Department of Computer Science & Engineering- Artificial Intelligence",
    date: "24th October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/aids/NLP%20from%20DL%20to%20LLM-Evolution%20of%20Language%20Models.pdf",
  },
  {
    title: "A Workshop of Entrepreneurship Development program on “From IDEA to Execution” was organized by Department of Computer Science & Engineering - Data Science in association with IEEE & ED Cell on 22nd October 2024.",
    department: "Department of Computer Science & Engineering - Data Science",
    date: "22nd October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/From%20IDEA%20to%20Execution.pdf",
  },
  {
    title: "An Alumni Guest Lecture on “The Art of Data: Visualizing and Analyzing with SQL and Business Intelligence” was organised by Department of Computer Science & Technology In Association with IEEE Student Branch, IEEE Computer Society, IEEE Education Society, MITS on 23rd October 2024.",
    department: "Department of Computer Science & Technology",
    date: "23rd October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cst/The%20Art%20of%20Data%20Visualizing%20and%20Analyzing%20with%20SQL%20and%20Business%20Intelligence.pdf.pdf",
  },
  {
    title: "A Workshop on \"Full Stack Web Development Bootcamp\" was organised by Department of Computer Science & Engineering in association with Alumni Welfare and IEEE on 19th October 2024.",
    department: "Department of Computer Science & Engineering",
    date: "19th October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Full%20Stack%20Web%20Development%20Bootcamp-19-10-2024.pdf",
  },
  {
    title: "A Workshop on \"From Logic to Code: Building Effective Programs\" was organized by Department of Computer Science & Engineering in association with Alumni Welfare and IEEE on 19th October 2024.",
    department: "Department of Computer Science & Engineering",
    date: "19th October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/From%20Logic%20to%20Code%20Building%20Effective%20Programs.pdf",
  },
  {
    title: "A IEEE Virtual Speaker Program on “Grid Modernization: Technological Advancements Beyond Smart Grid” was organized by Department of Electrical & Electronics Engineering and MITS IEEE Student Chapter 17th October 2024.",
    department: "Department of Electrical & Electronics Engineering",
    date: "17th October 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/ETreport.pdf",
  },
  {
    title: "A Guest Lecture on “Solar PV Integration: Hardware Design and Development” was organized by Department of Electrical & Electronics Engineering in association with MITS IEEE Student Chapter on 20th September 2024.",
    department: "Department of Electrical & Electronics Engineering",
    date: "20th September 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/500%20kVA%20DG%20Set%20Inspection.pdf",
  },
  {
    title: "An Alumni Guest Lecture on \"Top Tips for Excelling in Campus Placements\" was organized by Department of Computer Science & Engineering in association with MITS Alumni Welfare Association and IEEE on 17th September 2024.",
    department: "Department of Computer Science & Engineering",
    date: "17th September 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Top%20Tips%20for%20Excelling%20in%20Campus%20Placements.pdf",
  },
  {
    title: "An “Inauguration of IEEE Student Chapter” was organized by Department of Computer Science & Engineering In Association with IEEE on 12th Sepemtember 2024.",
    department: "Department of Computer Science & Engineering",
    date: "12th September 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Inauguration%20of%20IEEE%20Student%20Chapter.pdf",
  },
  {
    title: "An Alumni Guest lecture on “Building Your Professional Career: Strategic for Successful Placement” was organized by Department of Computer Science & Engineering in association with IEEE on 04th September 2024.",
    department: "Department of Computer Science & Engineering",
    date: "04th September 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Building%20Your%20Professional%20Career%20Strategic%20for%20Successful%20Placement.pdf",
  },
  {
    title: "An Alumni Guest Lecture \"Carrer Guidance on Software Industry\" was organised by Department of Electronics & Communication Engineering in association with MITS Alumni Welfare Association and MITS IEEE Student Chapter on 29th August 2024.",
    department: "Department of Electronics & Communication Engineering",
    date: "29th August 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Carrer%20Guidance%20on%20Software%20Industry-2024.pdf",
  },
  {
    title: "A \"Departmental Level Hackathon\" was organized by Department of Computer Science & Engineering in association with Institution’s Innovation Council, IEEE Intelligent Transportation Systems Society Student Branch Chapter on 28th August 2024.",
    department: "Department of Computer Science & Engineering",
    date: "28th August 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Departmental%20Level%20Hackathon.pdf",
  },
  {
    title: "An Inauguration of \"IEEE Reliability Society under MITS IEEE Student Branch\" was organized by Department of Computer Science & Engineering - Data Science on 20th August 2024.",
    department: "Department of Computer Science & Engineering - Data Science",
    date: "20th August 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/IEEE%20Reliability%20Society%20under%20MITS%20IEEE%20Student%20Branch.pdf",
  },
  {
    title: "A Guest Lecture on \"Career Development Skills for Employability\" was organised by Department of Electronics & Communication Engineering in association with MITS Alumni Welfare Association and MITS IEEE Student Branch on 30th August 2024.",
    department: "Department of Electronics & Communication Engineering",
    date: "30th August 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Career%20Development%20Skills%20for%20Employability.pdf",
  },
  {
    title: "An Online Guest Lecture on “Deep Learning Techniques for Data Mining, Predictive Maintenance” was organised by Department of Computer Science & Technology In association with IEEE, IIIC, IIC-MITS on 03rd August 2024.",
    department: "Department of Computer Science & Technology",
    date: "03rd August 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cst/Deep%20Learning%20Techniques%20for%20Data%20Mining,%20Predictive%20Maintenance.pdf",
  },
  {
    title: "A Five Day National Level Online Faculty Development Programme on “Leveraging AI: Human Factors in Cyber Security” was organized by Department of Computer Science & Engineering - Cyber Security in Association with IEEE Student Branch from 08th to 12th July 2024.",
    department: "Department of Computer Science & Engineering - Cyber Security",
    date: "08th to 12th July 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Leveraging%20AI%20Human%20Factors%20in%20Cyber%20Security.pdf",
  },
  {
    title: "A One Day National Level Technical Symposium Mechonance-2k24 was organized by Department of Mechanical in association with IIC and IEEE Chapter on 1st May 2024.",
    department: "Department of Mechanical Engineering",
    date: "1st May 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/mech/Mechonanace-2K24.pdf",
  },
  {
    title: "An Interactive Session on Opportunities in Japan was organised by Department of Computer Science & Engineering - Artificial Intelligence in Association with IRO, IIC & IEEE - MITS on 2nd April 2024.",
    department: "Department of Computer Science & Engineering - Artificial Intelligence",
    date: "2nd April 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/aids/An%20Interactive%20Session%20on%20Opportunities%20in%20Japan.pdf",
  },
  {
    title: "A Webinar on \"Power BI End to End Project for Beginners\" was organised by Department of Computer Science & Engineering - Artificial Intelligence in Association with IEEE & IIIC - MITS on 01st March 2024.",
    department: "Department of Computer Science & Engineering - Artificial Intelligence",
    date: "01st March 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Power%20BI%20End%20to%20End%20Project%20for%20Beginners.pdf",
  },
  {
    title: "One Day Expert Talk on “Intellectual Property Rights: Concept, Importance, and Its Role in Economic Growth” was organised by Department of Electrical & Electronics Engineering In Association with IIC and IEEE Chapter, MITS on 29th February 2024.",
    department: "Department of Electrical & Electronics Engineering",
    date: "29th February 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Report%20Expert%20Tal_29_Feb_2024_Intellectual%20Property%20Rights.pdf",
  },
  {
    title: "A One-Day Guest Lecture on “The Evolution of Cyber Threats: Navigating Emerging Trends” was organized by Department of Computer Science & Technology in association with Institute of Electrical and Electronics Engineers (IEEE), on 26th February 2024.",
    department: "Department of Computer Science & Technology",
    date: "26th February 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cst/The%20Evolution%20of%20Cyber%20Threats%20Navigating%20Emerging%20Trends.pdf",
  },
  {
    title: "A 5 Days International Level Online FDP on “Unveiling Emerging Trends in Artificial Intelligence and Data Renaissance” was organized by Department of Computer Science & Engineering (Artificial Intelligence) in association with MITS - IEEE Student Branch, Indian Society for Technical Education (ISTE) and MITS IIC during 19th to 23 February 2024.",
    department: "Department of Computer Science & Engineering (Artificial Intelligence)",
    date: "19th to 23rd February 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Unveiling%20Emerging%20Trends%20in%20Artificial%20Intelligence%20and%20Data%20Renaissance.pdf",
  },
  {
    title: "An Industrial Visit to “Sathanur Hydro-Electric Power Station” was organised by Department of Electrical & Electronics Engineering In Association with IIIC, IEEE and ISTE Chapter for II Year students on 23rd February 2024.",
    department: "Department of Electrical & Electronics Engineering",
    date: "23rd February 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Report%20on%20II%20Year%20Industrial%20Visit%20to%20Sathanur%20Power%20House.pdf",
  },
  {
    title: "One-Day Expert Talk on “Beyond Boundaries:Design Thinking as the Catalyst for Innovation” organized by Department of Electrical & Electronics Engineering In Association with Institution Innovation Council (IIC) & IEEE-Student Chapter on 17th February 2024.",
    department: "Department of Electrical & Electronics Engineering",
    date: "17th February 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Beyond%20Boundaries%20Design%20Thinking%20as%20the%20Catalyst%20for%20Innovation.pdf",
  },
  {
    title: "A Workshop on \"Social Information Network - Data Analysis and Visualization\" was organized by Department of Computer Science & Engineering in association with Institute of Electrical and Electronics Engineers (IEEE) on 06th January 2024.",
    department: "Department of Computer Science & Engineering",
    date: "06th January 2024",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Social%20Information%20Network%20-%20Data%20Analysis%20and%20Visualization.pdf",
  },
  {
    title: "1st International Conference on Optimization Techniques for Learning (ICOTL 2023) organized by Department of Computer Science & Engineering in Association with IEEE on 7th & 8th December 2023.",
    department: "Department of Computer Science & Engineering",
    date: "7th & 8th December 2023",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/International%20Conference%20on%20Optimization%20Techniques%20for%20Learning%20-%20ICOTL23.pdf",
  },
  {
    title: "A Guest Lecture on \"Challenges in Developing Mobile Apps\" was organised by Department of Computer Science & Engineering in Association with IEEE on 22nd November 2023.",
    department: "Department of Computer Science & Engineering",
    date: "22nd November 2023",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/Report%20on%20Guest%20Lecture%20Organised%20by%20Dept%20of%20CSE%20on%20Challenges%20in%20Developing%20Mobile%20Apps.pdf",
  },
  {
    title: "IEEE Day Celebration 2023 was organized by MITS IEEE Student Branch Jointly together with All the Departments In Association with MITS IEEE Communication Society & MITS IEEE Circuit and Systems Society, MITS IEEE Computer Society, MITS IEEE Sensor Council, MITS IEEE Nanotechnology Council on 31st October 2023.",
    department: "MITS IEEE Student Branch Jointly with All Departments",
    date: "31st October 2023",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/IEEE%20Day%20Celebration%202023.pdf",
  },
  {
    title: "An Alumni Guest Lecture on “Pathway Towards Software Opportunities” was organised by the Department of Electrical & Electronics Engineering on 5th August 2023.",
    department: "Department of Electrical & Electronics Engineering",
    date: "5th August 2023",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Pathway%20Towards%20Software%20Opportunities.pdf",
  },
  {
    title: "A Guest Lecture on \"Benefits of IEEE Membership\" an awareness programme for the students by Dr. Basabi Chakraborty on 1st February 2023.",
    department: "MITS IEEE Student Branch",
    date: "1st February 2023",
    reportUrl: "https://mits.ac.in/assets/event/Benefits%20of%20IEEE%20Membership.pdf",
  },
  {
    title: "A One Week Online Faculty Induction Workshop on Thrust Areas Programme was conducted from 10-10-2022 to 15-10-2022 in virtual mode was being organized by Department of Computer Science and Computer Science and Engineering in association with IEEE.",
    department: "Department of Computer Science and Engineering",
    date: "10-10-2022 to 15-10-2022",
    reportUrl: "https://mits.ac.in/assets/pdf/cse/One%20Week%20Online%20Faculty%20Induction%20Workshop%20on%20Thrust%20Areas.pdf",
  },
  {
    title: "IEEE Day 2022 \"Levereging Technology for Better Tomorrow\" was organized by IEEE MITS Student Branch on 14th October 2022.",
    department: "IEEE MITS Student Branch",
    date: "14th October 2022",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/IEEE%20DAY%202022.pdf",
  },
  {
    title: "A Guest Lecture on \"Intelligent Controller for Smart Integrated Wind and Solar based Hybrid Power Generation Scheme” was organised by Department of Electrical & Electronics Engineering on the occasion of Institute of Electrical & Electronics Engineers Day Celebrations held on 14th October 2022.",
    department: "Department of Electrical & Electronics Engineering",
    date: "14th October 2022",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Report%20on%20IEEE%20day's%20technical%20talk.pdf",
  },
  {
    title: "IEEE MITS Student Branch Congress and Celebration of IEEE-Day was Jointly Organized by Department of Electronics and communication Engineering & Department of Electrical and Electronics Engineering 5th October 2021.",
    department: "Department of ECE & Department of EEE",
    date: "5th October 2021",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Report%20on%20IEEE%20Day-2021.pdf",
  },
  {
    title: "One Day International webinar on \"Blockchain technology and its applications” was organized by Department of Computer Science & Engineering in Association with IEEE- MITS Student Chapter on 02nd July 2021.",
    department: "Department of Computer Science & Engineering",
    date: "02nd July 2021",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/WEBINAR%20REPORT%20SCBOSE2-2021-min.pdf",
  },
  {
    title: "One Day Workshop on \"Electrical Substation design\" was organized by Department of Electrical and Electronics Engineering in association with IEEE through Microsoft Teams on 25th June 2021.",
    department: "Department of Electrical and Electronics Engineering",
    date: "25th June 2021",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Electrical%20Substation%20design.pdf",
  },
  {
    title: "A Webinar on \"Electric Vehicle - Design Overview\" was conducted by Department of Electrical and Electronics Engineering in association with IEEE MITS Student Chapter through Microsoft Teams on 11th June 2021.",
    department: "Department of Electrical and Electronics Engineering",
    date: "11th June 2021",
    reportUrl: "https://mits.ac.in/assets/pdf/eee/Webinar%20Report%20on%20EV.pdf",
  },
  {
    title: "IEEE MITS Student Branch Congress and Celebration of IEEE Day was Organized by Department of Electrical & Electronics Engineering on 06th October 2020.",
    department: "Department of Electrical & Electronics Engineering",
    date: "06th October 2020",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Report%20on%20IEEE%20Day-EEE.pdf",
  },
  {
    title: "IEEE MITS Student Branch Congress and Celebration of IEEE Day was Organized by Department of Computer Science & Engineering on 06th October 2020.",
    department: "Department of Computer Science & Engineering",
    date: "06th October 2020",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Report%20on%20IEEE%20Day-CSE.pdf",
  },
  {
    title: "IEEE MITS Student Branch Congress organized by Departments of ECE & MITS IEEE SB on the theme of UN Sustainable Development Goal 2030 on 1st October 2019.",
    department: "Departments of ECE & MITS IEEE SB",
    date: "1st October 2019",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Recent%20Trend%20in%20Cyber%20Security.pdf",
  },
  {
    title: "A Workshop on \"Recent Trends in Cyber Security\" was sponsored by TEQIP-II and IEEE-MITS Student Branch on 17th November 2018.",
    department: "Sponsored by TEQIP-II and IEEE-MITS Student Branch",
    date: "17th November 2018",
    reportUrl: "https://mits.ac.in/assets/pdf/ece/Recent%20Trend%20in%20Cyber%20Security.pdf",
  },
  {
    title: "A Guest Lecture on IEEE Student Membership by resource person Dr. Ramalatha Marimuthu, organized by MITS-IEEE Chapter at MITS on 23 January 2017 under TEQIP-II.",
    department: "MITS-IEEE Chapter at MITS under TEQIP-II",
    date: "23rd January 2017",
    reportUrl: "https://mits.ac.in/assets/pdf/assoc/IEEE-%20A%20Stepping%20Stone%20to%20Success.pdf",
  },
];

const participatedEvents: ParticipatedEvent[] = [
  {
    facultyOrStudent: "Mrs. Komala Anamalamudi",
    details: "attended 3rd Conference Organizers Workshop at TCS, Madhapur, Hyderabad conducted by IEEE India Council and IEEE Hyderabad section on 25th April 2015.",
  },
  {
    facultyOrStudent: "Mr. G. Sambasiva Rao & Mr. L. Ashok",
    details: "participated in a Two Day IEEE International Conference on Advances in Engineering and Technology-(ICAET 2014) on 2 & 3 May 2014 and presented the paper entitled“ A 0.6V Low-power FGMOS Current Reference with Subtraction Technique” organized by the department of ECE, EGS Pillai Engineering College, Nagapattinam.",
  },
  {
    facultyOrStudent: "Mr. M. Jagadeesh Babu, Mr. E.Santhosh & Mr. A. M. Sivakrishna",
    details: "Mr. M. Jagadeesh Babu, Member of IEEE, Branch counselor & Associate professor and two IEEE student members Mr. E.Santhosh, III ECE (11691A0495), Mr. A. M. Sivakrishna, III IT (11691A1240) of attended one day workshop on “Technology Enhanced Learning through IEEE for imparting Higher Quality Education” Organized by Jawaharlal Nehru Technological University Ananthpuramu on 19th APRIL 2014.",
  },
  {
    facultyOrStudent: "Mr. D. Chinna Kullay Reddy and Mr. G.Ravi Prakash",
    details: "Assistant Professors, EEE Department participated in two day National Symposium and Technical Exhibition 2013 on “Micro Grids: Laboratory to Real Markets” at Danube Auditorium in TechMahindra Satyam Campus, Hyderabad February 22-23, 2013 organised by the IEEE PES/IAS/PELS Joint chapter, Hyderabad section.",
  },
  {
    facultyOrStudent: "Mr. K. Bhanu Kiran, Mr. K.Vasu, Mr. Y.Vasudeva Reddy & Mr. N.Sudhakar",
    details: "attended workshop on “ELECTRICAL FIRE AND SAFETY”, organized by IEEE and FSAI, was conducted from 8th to 10th November, 2012 in Novotel at Hyderabad.",
  },
  {
    facultyOrStudent: "Dr. E. Madhusudhana Reddy and Mr. S. Mohammad Ghouse",
    details: "presented a Paper titled “A novel on Transductive Decision Tree” in the Book Titled Advances in Engineering and Technology Series, Year: 2013 ,Paper Type : Book Series,Digital Object Identifier: 03.AETS.2013.2.57 Page(s):274 - 278 ,Volume No: 2 .Two Papers published in IEEE conference Book .",
  },
  {
    facultyOrStudent: "Mr. S. M. FAROOQ",
    details: "has attended a two day National Workshop on “Notable Trends in Current Computer Science and Engineering” Technically Co-Sponsored by IEEE Hyderabad Section & IEEE Computer Society Chapter, Hyderabad Section on 30-31 January 2013, Venue seminar hall, Muffakam jah college of engg and Technology, Hyderabad Organized By Department of Information Technology, Muffakam jah college of Engg and Technology",
  },
  {
    facultyOrStudent: "Dr. M. Suresh Babu and K.Chandra Sekhar",
    details: "attended one day workshop on “ Mobile Security “ was conducted by CDAC, Hyderabad in Association wirh SIT, JNTUH and IEEE Hyderabad Section on 2nd February 2013.",
  },
  {
    facultyOrStudent: "Mr. Mahesh (Assoc. Prof., ECE)",
    details: "presented a paper titled “Automatic Image Mosaic system Using Steerable Harris corner Detector” in an International Conference on Machine Vision and image Processing (MVIP12), Organized by the Department of Instrumentation and Control Engineering, PSG College of Technology Technically Co-Sponsored by IEEE ,Coimbatore-6411004, Tamil Nadu, India.",
  },
  {
    facultyOrStudent: "Mr. M. Jagadeesh Babu (ECE)",
    details: "attended one Day IEEE Conference organizers workshop (13 October,2012) organised by IEEE Hyderabad Section and Cosponsored by IEEE Vizag Bay Subsection.",
  },
  {
    facultyOrStudent: "Mr. D.Chinna kullay Reddy (EEE)",
    details: "attended one Day IEEE Conference organizers workshop (13 October,2012) organised by IEEE Hyderabad Section and Cosponsored by IEEE Vizag Bay Subsection.",
  },
  {
    facultyOrStudent: "Mr. K. Vasu",
    details: "Attended IEEE National Level Conference on Control Systems Aug-2009 NIT, Calicut IEEE National Level Conference on Power Systems Jan-2010 NIT, Calicut . Building an Education and Research Program in Power and Energy systems international 5 Days workshop 27 to 1-june- 2011 MITS, Madanapalli.",
  },
];

const focusAreas = [
  "1. Providing training to the students to become \"Master in Technology\".",
  "2. Encouraging innovation and excellence in students through various means.",
  "4. Promoting better career development opportunities and services for students.",
  "5. Arranging expert lectures.",
  "6. Extending full support for all the national seminars and technical events in the college.",
  "7. Enhancing the self-confidence and self-esteem of students.",
  "8. Conducting various competitions within the college to enhance the competency and presentation skills of students.",
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
            <span>Institute of Electrical and Electronics Engineers - Student Branch</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
            MITS IEEE Student Branch [STB64791]
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Madanapalle Institute of Technology &amp; Science (Deemed to be University)
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

      {/* MAIN CONTAINER - Full Space Coverage Across Screen */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 space-y-10">
        {/* BACK BUTTON */}
        <div>
          <Link
            to="/cells"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#8B1D1D] hover:text-[#691313] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Cells &amp; Committees
          </Link>
        </div>

        {/* SECTION 1: ABOUT IEEE & OFFICIAL CONTACT CARD (SIDE-BY-SIDE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 8 COLS: ABOUT IEEE */}
          <div className="lg:col-span-8 bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
              MITS IEEE Student Branch [STB64791]
            </h2>

            {/* EMBEDDED LOGO (Exact as in official site) */}
            <div className="my-4">
              <img
                src={logoError ? "https://mits.ac.in/images/ieee.png" : `${BASE}images/ieee.png`}
                alt="MITS IEEE Student Branch"
                className="w-56 sm:w-60 h-auto object-contain"
                onError={() => setLogoError(true)}
              />
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <h3 className="text-xl font-bold text-slate-900 pt-2">About IEEE</h3>
              <p>
                IEEE stands for the Institute of Electrical and Electronics Engineers. It is the largest technical professional organization in the world, and is dedicated to advancing technology for the benefit of humanity. IEEE inspires a global community through its publications, conferences, technology standards, and professional and educational activities.
              </p>
              <p>
                IEEE was formed in 1963 when the American Institute of Electrical Engineers (AIEE) and the Institute of Radio Engineers (IRE) merged. The AIEE was established in 1884 to support and aid electrical professionals, and the IRE was founded in 1912 and focused on radio and electronics.
              </p>
              <p>
                IEEE develops industry standards in a wide range of technologies, and its standards often become national and international standards. IEEE also publishes a number of journals, has many local chapters, and several large societies in special areas, such as the IEEE Computer Society.
              </p>

              <h4 className="text-base font-bold text-slate-900 pt-2">Mission</h4>
              <p>
                IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.
              </p>

              <h4 className="text-base font-bold text-slate-900 pt-2">Vision</h4>
              <p>
                IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.
              </p>

              <h4 className="text-base font-bold text-slate-900 pt-2">The major objectives of the IEEE are:</h4>
              <ul className="list-disc list-inside space-y-1 pl-1 text-slate-700">
                <li>Foster technological innovation</li>
                <li>Advance the technical and educational aspects of computer engineering, telecommunications, electrical and electronic engineering</li>
                <li>Inspire the global community through publications, conferences, technology standards, and professional and educational activities</li>
                <li>Be essential to the global technical community</li>
                <li>Be universally recognized for the contributions of technical professionals and technology in improving global conditions</li>
              </ul>
            </div>
          </div>

          {/* RIGHT 4 COLS: CONTACT CARD */}
          <div className="lg:col-span-4 bg-white rounded-xl shadow-md border border-slate-200/80 overflow-hidden">
            <div className="bg-[#8B1D1D] px-6 py-4">
              <h3 className="text-xl font-bold tracking-tight text-white !text-white leading-tight">
                Contact
              </h3>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <h4 className="text-lg font-bold text-slate-900 !text-slate-900">
                  Dr. Somu Vijaya Bhaskar
                </h4>
                <div className="text-xs font-bold text-[#8B1D1D] mt-0.5">
                  IEEE Coordinator
                </div>
                <p className="text-xs text-slate-700 font-medium mt-1.5 leading-relaxed">
                  Associate Professor<br />
                  Department of EEE<br />
                  Chair, Communication Society<br />
                  Hyderabad Section
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4 space-y-4 text-sm">
                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5 text-xs">
                    Address :
                  </strong>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Madanapalle Institute of Technology &amp; Science<br />
                    Deemed to be University<br />
                    Madanapalle-Kadiri Road<br />
                    Kurabalakota Mandal, Madanapalle - 517325<br />
                    Andhra Pradesh, India
                  </p>
                </div>

                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5 text-xs">
                    Phone :
                  </strong>
                  <p className="text-xs text-slate-700">
                    <a href="tel:+918571280255" className="hover:underline font-semibold text-[#8B1D1D]">
                      +91-8571-280255
                    </a>
                    ;{" "}
                    <a href="tel:+918571280706" className="hover:underline font-semibold text-[#8B1D1D]">
                      280706
                    </a>
                  </p>
                </div>

                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5 text-xs">
                    E Mail :
                  </strong>
                  <p className="text-xs text-slate-700">
                    <a href="mailto:ieeechapter@mits.ac.in" className="hover:underline font-semibold text-[#8B1D1D]">
                      ieeechapter@mits.ac.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 (FULL WIDTH): MITS IEEE STUDENT BRANCH STANDARD OPERATING PROCEDURE & 17 SOCIETIES */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
              MITS IEEE Student Branch Standard Operating Procedure
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              MITS IEEE Student Branch (STB64791) initiated in the year 2005. The student branch functions as per IEEE constitution-and- bylaw under IEEE Hyderabad Section and IEEE Ananthapurmu Subsection. This is one of the active student branch in Andhra Pradesh and Telangana States. The following society are under MITS IEEE SB
            </p>

            {/* 17 SOCIETIES TABLE - COMPLETELY FULL WIDTH & NON-SCROLLABLE */}
            <div className="rounded-lg border border-slate-200 overflow-hidden mb-6">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#8B1D1D] text-white">
                    <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase text-center w-16 whitespace-nowrap">
                      S.No
                    </th>
                    <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase whitespace-nowrap">
                      Society
                    </th>
                    <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase">
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
                      <td className="py-2.5 px-4 text-slate-700">
                        {soc.department}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 3 PRIMARY SOP LINKS AS CLEAN HORIZONTAL ROWS */}
            <div className="space-y-2 pt-2">
              <a
                href="https://mits.ac.in/assets/pdf/assoc/MITS%20IEEE%20SOP.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-red-50/30 transition-colors group"
              >
                <span className="font-semibold text-sm sm:text-base text-slate-800 group-hover:text-[#8B1D1D]">
                  MITS IEEE SOP
                </span>
                <span className="text-xs font-bold text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                  PDF
                </span>
              </a>

              <a
                href="https://mits.ac.in/assets/pdf/assoc/Society%20List.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-red-50/30 transition-colors group"
              >
                <span className="font-semibold text-sm sm:text-base text-slate-800 group-hover:text-[#8B1D1D]">
                  MITS IEEE Society List
                </span>
                <span className="text-xs font-bold text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                  PDF
                </span>
              </a>

              <a
                href="https://mits.ac.in/assets/pdf/assoc/Society%20Advisors%20List.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-red-50/30 transition-colors group"
              >
                <span className="font-semibold text-sm sm:text-base text-slate-800 group-hover:text-[#8B1D1D]">
                  MITS IEEE Society Advisor's List
                </span>
                <span className="text-xs font-bold text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                  PDF
                </span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION 3 (FULL WIDTH): ACHIEVEMENTS & EXACT OFFICIAL TEXT */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
              Achievements:
            </h3>

            {/* MEMBERSHIP BLOCKS */}
            <div className="space-y-4 mb-6 text-sm sm:text-base text-slate-800">
              <div>
                <strong className="block text-slate-900 font-bold mb-1">
                  Student Membership :
                </strong>
                <p className="text-slate-700 pl-4 space-y-0.5">
                  <span className="block">Year 2025 : 36*</span>
                  <span className="block font-semibold text-slate-900">
                    Year 2024 : 106 [Top in Membership Count under Hyderabad Section]
                  </span>
                  <span className="block">Year 2023 : 54</span>
                  <span className="block">Year 2005 - 2022 : 12</span>
                </p>
              </div>

              <div>
                <strong className="block text-slate-900 font-bold mb-1">
                  Professional Membership :
                </strong>
                <p className="text-slate-700 pl-4 space-y-0.5">
                  <span className="block">Year 2024 : 12+</span>
                  <span className="block">Year 2023 : 8</span>
                </p>
              </div>

              <div>
                <strong className="block text-slate-900 font-bold mb-1">
                  Senior Membership Elevation
                </strong>
                <p className="text-slate-700 pl-4 space-y-0.5">
                  <span className="block">Year 2024 : 2</span>
                  <span className="block">Year 2023 : 1</span>
                  <span className="block">Year 2005 - 2022 : 0</span>
                </p>
              </div>
            </div>

            {/* 4 OFFICIAL PARAGRAPHS */}
            <div className="space-y-2.5 mb-6 text-sm sm:text-base text-slate-800 leading-relaxed">
              <p>
                Received approval from IEEE CAS (Circuit &amp; Systems Society) Head Quarters to organize Seasonal School “Neuromorphic Computing and Logic In Memory Computing Using Non Volatile Memory Devices” with support fund of 2,173 USD (Rs. 180359 /-)
              </p>
              <p>
                Rs. 10000 /- Sponsorship received from IEEE ComSoc, Hyderabad Section – Year 2024
              </p>
              <p>
                Rs. 50000 /- received Sponsorship from IEEE Hyderabad Section – Year 2023
              </p>
              <p>
                Initiated 16 technical Society/Council under MITS IEEE Student Branch Till March 2025
              </p>
            </div>

            {/* 8 BULLET POINTS WITH EXACT RED ARROW/CHEVRON AS ON LIVE SITE (Matches Image 1) */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800">
                <span className="w-5 h-5 rounded-full bg-[#8B1D1D] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Received approval 250 USD for Startup grant for MITS IEEE Circuit and System Society</span>
              </div>

              <div className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800">
                <span className="w-5 h-5 rounded-full bg-[#8B1D1D] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Received approval 350 USD for Event Support fund for MITS IEEE Communication Society for the year 2025</span>
              </div>

              <div className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800">
                <span className="w-5 h-5 rounded-full bg-[#8B1D1D] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Received approval 400 USD for Ashv 2K25 from IEEE SPAX</span>
              </div>

              <div className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800">
                <span className="w-5 h-5 rounded-full bg-[#8B1D1D] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Received 4620 USD to organize International level nanotechnology summer School titled "NANO-CRHES: Nanotechnology for Integrated Computing, Robotics, Healthcare and Environmental Sustainability" through IEEE nanotechnology Council</span>
              </div>

              <div className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800">
                <span className="w-5 h-5 rounded-full bg-[#8B1D1D] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Received 500 USD for Startup grant for MITS IEEE Robotics and Automation Society</span>
              </div>

              <div className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800">
                <span className="w-5 h-5 rounded-full bg-[#8B1D1D] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Received 146 USD as rebate from IEEE Headquarters for the year 2023</span>
              </div>

              <div className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800">
                <span className="w-5 h-5 rounded-full bg-[#8B1D1D] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Rs.10000 /- Sponsorship received from IEEE Ananthapuramu Subsection &amp; IEEE Reliability Society Chapter, Hyderabad</span>
              </div>

              <div className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800">
                <span className="w-5 h-5 rounded-full bg-[#8B1D1D] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Rs.25000/- Sponsorship received from IEEE CAS, Hyderabad Section</span>
              </div>
            </div>

            {/* CLOSING OFFICIAL NOTE */}
            <p className="text-sm sm:text-base text-slate-700 italic border-t border-slate-100 pt-4">
              Each Department organizing more events under MITS IEEE Student Branch in association with IEEE Hyderabad Section and IEEE Ananthapuramu Subsection.
            </p>
          </div>
        </ScrollReveal>

        {/* SECTION 4 (FULL WIDTH): THE MITS-IEEE CHAPTER MAJOR FOCUS AREAS */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
              The MITS-IEEE Chapter major focus areas are:
            </h3>

            <div className="space-y-2 text-sm sm:text-base text-slate-800">
              {focusAreas.map((item, idx) => (
                <p key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION 5 (FULL WIDTH): PROFESSIONAL EXECUTIVE COMMITTEE & ADVISORS 2025-26 */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
              MITS IEEE Professional Executive Committee &amp; Advisors 2025-26
            </h3>

            <div className="rounded-lg border border-slate-200 overflow-hidden mb-6">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#8B1D1D] text-white">
                    <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase text-center w-16 whitespace-nowrap">
                      S.No
                    </th>
                    <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase whitespace-nowrap">
                      Name of the Committee Member
                    </th>
                    <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase">
                      Name of the IEEE Student Branch/ Society/ Council
                    </th>
                    <th className="py-3 px-4 font-semibold text-xs tracking-wider uppercase text-center whitespace-nowrap">
                      Chairperson / Counsellor/Advisor
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
                        {member.designation && member.name !== "Dr. C. Yuvaraj" && (
                          <span className="block text-xs font-normal text-slate-500">
                            {member.designation}
                          </span>
                        )}
                        {member.name === "Dr. C. Yuvaraj" && (
                          <span className="block text-xs font-normal text-slate-500">
                            Vice Chancellor (I/c)
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 px-4 text-slate-800">
                        {member.branchOrSociety}
                      </td>
                      <td className="py-2.5 px-4 text-center whitespace-nowrap font-semibold text-slate-800">
                        {member.position}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* COMMITTEE DOCUMENT LINKS */}
            <div className="space-y-2">
              {governanceDocuments.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-red-50/30 transition-colors group"
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-800 group-hover:text-[#8B1D1D]">
                    {doc.title}
                  </span>
                  <span className="text-xs font-bold text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                    PDF
                  </span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION 6 (FULL WIDTH): MITS IEEE STUDENT MEMBERSHIP LIST */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              MITS IEEE Student Branch Events List
            </h3>
            <p className="text-sm text-slate-600 mb-4">MITS IEEE Student Membership List</p>

            <div className="space-y-2">
              {membershipDocuments.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-red-50/30 transition-colors group"
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-800 group-hover:text-[#8B1D1D]">
                    {doc.title}
                  </span>
                  <span className="text-xs font-bold text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                    PDF
                  </span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION 7 (FULL WIDTH): MITS IEEE EVENTS (FEATURED & DEPARTMENT-WISE) */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
              MITS IEEE Events
            </h3>

            <div className="space-y-3 mb-6">
              {featuredEvents.map((evt, idx) => (
                <a
                  key={idx}
                  href={evt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg border border-slate-200 hover:bg-red-50/30 transition-colors group"
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-800 group-hover:text-[#8B1D1D] pr-4">
                    {evt.title}
                  </span>
                  <span className="shrink-0 text-xs font-bold text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                    {evt.isExternalLink ? "Link" : "PDF"}
                  </span>
                </a>
              ))}
            </div>

            <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
              MITS IEEE Events List
            </h4>
            <div className="space-y-2">
              {departmentEventLists.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-red-50/30 transition-colors group"
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-800 group-hover:text-[#8B1D1D]">
                    {item.title}
                  </span>
                  <span className="text-xs font-bold text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                    PDF
                  </span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION 8 (FULL WIDTH): ARCHIVE EVENTS ORGANIZED */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3 mb-4">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Archive Events organized
              </h3>
              <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                {archiveEvents.length} Events
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {archiveEvents.map((evt, idx) => (
                <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-sm sm:text-base text-slate-800 pr-4 leading-relaxed">
                    {evt.title}
                  </p>
                  <a
                    href={evt.reportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#8B1D1D] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors"
                  >
                    <span>Click here for Report on Event</span>
                    <ExternalLink className="w-3 h-3 text-red-500" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION 9 (FULL WIDTH): EVENTS PARTICIPATED */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Events Participated
            </h3>

            <div className="space-y-3">
              {participatedEvents.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-50 border border-slate-100 text-sm sm:text-base text-slate-800 leading-relaxed">
                  <strong>{item.facultyOrStudent}</strong>, {item.details}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION 10 (FULL WIDTH): IEEE@MITS */}
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              IEEE@MITS
            </h3>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
              The IEEE student branch at MITS, under IEEE Hyderabad section was inaugurated in 2nd February 2006 with a membership of 20 students, three faculty advisors and branch counselor.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <Footer />
    </div>
  );
}

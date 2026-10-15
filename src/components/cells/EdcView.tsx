import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  FileText,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  Search,
  Sparkles,
  Compass,
  Target,
  Download,
  Building2,
  Calendar,
  Layers,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

interface ActivityItem {
  text: string;
  link?: string;
  linkLabel?: string;
  year?: string;
  subList?: {
    title: string;
    items: string[];
  }[];
}

const allEdcActivities: ActivityItem[] = [
  {
    text: '"World Water Day" was organized by Department of Civil Engineering in association with ED Cell & Builders Club Under the aegis of ASCE MITS Student Chapter on 23rd March 2026.',
    link: "https://mits.ac.in/assets/pdf/civil/WORLD WATER DAY 2026.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2026",
  },
  {
    text: 'A Hands-on Workshop on “Business Plan Development” was organized by School of Management In association with ED cell on 09th March 2026.',
    link: "https://mits.ac.in/assets/pdf/mba/Business Plan Development.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2026",
  },
  {
    text: 'An Online Expert Talk on “Building Growth and Innovation Mindset using AI” was organized by Department of Master of Computer Applications in association with Entrepreneurship & Development Cell on 31st January 2026.',
    link: "https://mits.ac.in/assets/pdf/ca/Building Growth and Innovation Mindset using AI.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2026",
  },
  {
    text: 'A Workshop on "Design Thinking, Critical Thinking & Innovation Design" was organized by Department of Civil Engineering in association with ASCE MITS Student Chapter, Institution’s Innovation Council (IIC), ED Cell & Builders club on 31st January 2026.',
    link: "https://mits.ac.in/assets/pdf/civil/Design Thinking, Critical Thinking Innovation Design.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2026",
  },
  {
    text: 'An Online Expert Talk on “Effective sales And Marketing Strategies For Start-ups” was organized By Department of Computer Science & Engineering In Association with Entrepreneurship Development Cell on 28th January 2026.',
    link: "https://mits.ac.in/assets/pdf/cse/Effective sales And Marketing Strategies For Start-ups.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2026",
  },
  {
    text: 'An MoU Exchange between MITS and GUVI – HCL Corporation Pvt. Ltd was organized by Department of CSE - AI and Department of CSE (AI & ML) In collaboration with Start-Up Cell & ED Cell on 02nd January 2026.',
    link: "https://mits.ac.in/assets/pdf/aids/GUVI – HCL Corporation Pvt.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2026",
  },
  {
    text: 'A "Finance for Everyone" was organized by School of Management in association with Entrepreneurship & Development Cell on 17th December 2025.',
    link: "https://mits.ac.in/assets/pdf/mba/Finance for Everyone.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2025",
  },
  {
    text: 'An "Art & Craft Exhibition" was organized by School of Management in association with Entrepreneurship & Development Cell on 16th December 2025.',
    link: "https://mits.ac.in/assets/pdf/mba/Art & Craft Exhibition.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2025",
  },
  {
    text: 'An "Exhibition on Value Chain Activities" was organized by School of Management in association with Entrepreneurship & Development Cell on 20th November 2025.',
    link: "https://mits.ac.in/assets/pdf/mba/Exhibition on Value Chain Activities.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2025",
  },
  {
    text: 'An Awareness Workshop on "Entrepreneurship & Innovation as Career opportunities” was organized by Department of Mechanical Engineering in association with Entrepreneurship & Development Cell on 15th November 2025.',
    link: "https://mits.ac.in/assets/pdf/mech/Entrepreneurship & Innovation as Career opportunities.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2025",
  },
  {
    text: 'An "Entrepreneurship Awareness Program" was organized by School of Management In association with NSIC and MITS – ED cell on 13th November 2025.',
    link: "https://mits.ac.in/assets/pdf/mba/Entrepreneurship Awareness Program-13-11-2025.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2025",
  },
  {
    text: '"Celebrating Entrepreneurship Day" was organized by School of Management In association with ED Cell and ED Club on 10th November 2025.',
    link: "https://mits.ac.in/assets/pdf/mba/Celebrating Entrepreneurship Day.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2025",
  },
  {
    text: 'An "Entrepreneurship Talk" was organized by Builders Club Under the aegis of ASCE MITS Student Chapter & ED Cell on 14th October 2025.',
    link: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Talk-2025.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2025",
  },
  {
    text: 'An Induction Program of Entrepreneurship Development Program “From Passion to Profit: Turning Your Idea into a Business” was organized by Department of Master of Computer Applications in association with ED Cell on 6th September 2025.',
    link: "https://mits.ac.in/assets/pdf/ca/From Passion to Profit Turning Your Idea into a Business.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2025",
  },
  {
    text: 'An “Entrepreneurial Mindset-Preparing Youth for Success” was organized by Department of Management Studies in association with ED Cell On 11th February 2025.',
    link: "https://mits.ac.in/assets/pdf/assoc/Report on Entrepreneurial Mindset-11th February 2025.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2025",
  },
  {
    text: 'A “Business Idea Contest” was organized by Department of Management Studies in association with ED Cell On 12th December 2024.',
    link: "https://mits.ac.in/assets/pdf/assoc/Report on business idea contest-12th December 2024.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2024",
  },
  {
    text: 'An Online Seminar on “Startup Success: Turning Ambition into Achievement” was organized by Department of Computer Science & Engineering In Association with Entrepreneurship Development Cell on 05th December 2024.',
    link: "https://mits.ac.in/assets/pdf/cse/Startup Success Turning Ambition into Achievement.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2024",
  },
  {
    text: 'A Workshop of Entrepreneurship Development Program “Pathways to Entrepreneurship: Building a Successful Career as an Entrepreneur” was organized by Department of Computer Applications in association with Entrepreneurship Development Cell on 23rd November 2024.',
    link: "https://mits.ac.in/assets/pdf/ca/Pathways to Entrepreneurship Building a Successful Career as an Entrepreneur.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2024",
  },
  {
    text: 'An Awareness Program on "Entrepreneurship Opportunities on Embedded Systems" was organized by Department of Electronics and Communication Engineering in association with Entrepreneurship Development Cell on 11th November 2024.',
    link: "https://mits.ac.in/assets/pdf/ece/Entrepreneurship Opportunities on Embedded Systems-11-11-2024.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2024",
  },
  {
    text: 'A Guest Lecture on "Basics of IPR and Patent Filing" was organized by Department of Computer Science and Engineering – AI & ML in association with Institution Innovation Cell (IIC) & ED Cell on 06th November 2024.',
    link: "https://mits.ac.in/assets/pdf/aids/Basics of IPR and Patent Filing.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2024",
  },
  {
    text: 'A Workshop of Entrepreneurship Development program on “From IDEA to Execution” was organized by Department of Computer Science & Engineering - Data Science in association with IEEE & ED Cell on 22nd October 2024.',
    link: "https://mits.ac.in/assets/pdf/cse/From IDEA to Execution.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2024",
  },
  {
    text: 'A “Ice-breaking session on Entrepreneurship” was organized by Department of MBA in association with ED Cell on 22nd October 2024.',
    link: "https://mits.ac.in/assets/pdf/assoc/Ice-breaking session on Entrepreneurship 22.10.2024.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2024",
  },
  {
    text: 'An Entrepreneurship Development- Pathway to Innovation & Success was organized by Department of MBA in association with ED Cell On 4th October 2024.',
    link: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Development- Pathway to Innovation & Success-04.10.2024.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2024",
  },
  {
    text: 'An “Economic Indicators and understanding their importance in Start-up business” was organized by Department of MBA in association with ED Cell On 1st October 2024.',
    link: "https://mits.ac.in/assets/pdf/assoc/Economic Indicators and understanding their importance in Start-up business 01.10.2024.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2024",
  },
  {
    text: 'A “Young Entrepreneurs in India: Inspiring stories”: Shaping the future of India’s Economy organized by Department of MBA in association with ED Cell On 30th September 2024.',
    link: "https://mits.ac.in/assets/pdf/assoc/Young Entrepreneurs in India Inspiring stories Shaping the future of Indias Economy 30.9.2024.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2024",
  },
  {
    text: 'An Alumni Talk on "How to reinforce the Structured Career" was organised by Department of Civil Engineering in association with ASCE MITS Student Chapter and ED Cell on 20th September 2024.',
    link: "https://mits.ac.in/assets/pdf/civil/How to reinforce the Structured Career.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2024",
  },
  {
    text: 'An Expert talk on "A Talk on Journey towards Entrepreneurship" was organized by Department of Mechanical Engineering in association with Institute Innovation Cell & Entrepreneurship Development Cell on 21st August 2024.',
    link: "https://mits.ac.in/assets/pdf/mech/A Talk on Journey towards Entrepreneurship.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2024",
  },
  {
    text: 'An Internal Project Expo - 2024 was organized by Department of Computer Science & Technology in Association with Institute Innovation Cell & Entrepreneurship Development Cell on 24th April 2024.',
    link: "https://mits.ac.in/assets/pdf/cst/Internal Project Expo-2024.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2024",
  },
  {
    text: 'A One Day Entrepreneurship Development Program on "Company registration and Documentations to start a new Business" was organised by Department of Electrical & Electronics Engineering on 01st February 2024.',
    link: "https://mits.ac.in/assets/pdf/eee/Report_Company registration and Documentations to start a new Business.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2024",
  },
  {
    text: 'The Entrepreneurship Development Cell in association with Department of Computer Science & Technology organized an online current affairs quiz competition for all the management and Engineering students on 13th December 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition December 2nd week.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'The Entrepreneurship Development Cell in association with Department of Computer Science & Technology organized an online current affairs quiz competition for all the management and Engineering students on 6th December 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition December 1st week.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'The Entrepreneurship Development Cell in association with Department of Mechanical Engineering organized an online current affairs quiz competition for all the management and Engineering students on 29th November 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition November week 5.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'The Entrepreneurship Development Cell in association with Department of Mechanical Engineering organized an online current affairs quiz competition for all the management and Engineering students on 23rd November 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition November week 4.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'One Day Workshop on “Entrepreneurship and Innovation” as Career Opportunity was organized by Department of Mechanical Engineering in association with IIC & ED Cell on 29th November, 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship and Innovation.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A One Day Entrepreneurship Development Program on “Company registration and Documentations to start a new Business” was organized by Department of CSE-Data Science in association with Entrepreneurship Development Cell on 24th November 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Company%20registration%20and%20Documentations%20to%20start%20a%20new%20Business.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Guest Lecture on “Soft Skills for Managers and Entrepreneurs” was organised by Department of Management Studies in Association with Entrepreneurship Development Cell-MITS on 18th November 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Soft Skills for Managers and Entrepreneurs.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Online Current Affairs Quiz Competition for all the Management and Engineering students was organised by Entrepreneurship Development Cell in association with Department of Mechanical Engineering on 16th November 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition-16-11-23.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Online Current Affairs Quiz Competition for all the Management and Engineering students was organised by Entrepreneurship Development Cell in association with Department of Mechanical Engineering on 08th November 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition-08-11-23.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Guest Lecture on “The Seven Habits of Highly Effective People” was organised by Department of Management Studies in Association with Entrepreneurship Development Cell-MITS on 4th November 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/The Seven Habits of Highly Effective People.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Online Current Affairs Quiz Competition for all the Management and Engineering students was organised by Entrepreneurship Development Cell in association with Department of Mechanical Engineering on 1st November 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition November week1.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'An Orientation Programme on "Entrepreneurship and Career Development" was organised by Department of Management Studies in Association with Entrepreneurship Development Cell-MITS on 26th October 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Orientation Programme on Entrepreneurship and Career Development.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Online Current Affairs Quiz Competition for all the Management and Engineering students was organised by Entrepreneurship Development Cell in association with Department of CSE-AI on 26th October 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition October week 4.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Guest Lecture on “Networking for Entrepreneurial Success” was organised by Department of Management Studies in Association with Entrepreneurship Development Cell on 20th October 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Networking for Entrepreneurial Success.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Online Current Affairs Quiz Competition for all the Management and Engineering students was organised by Entrepreneurship Development Cell in association with Department of CSE-AI on 18th October 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition October week3.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Virtual Session on “Unlocking India\'s Wealth Potential: Navigating Equities, Mutual Funds, and Equity Capital Markets” was organised by Entrepreneurship Development Cell & Department of Management Studies In Association with All India Management Association on 13th October 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Unlocking Indias Wealth Potential.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Online Current Affairs Quiz Competition for all the Management and Engineering students was organised by Entrepreneurship Development Cell in association with Department of CSE-AI on 11th October 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition October week2.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Online Current Affairs Quiz Competition for all the Management and Engineering students was organised by Entrepreneurship Development Cell in association with Department of CSE-AI on 4th October 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition October week1.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'An Online Current Affairs Quiz Competition was organised by Entrepreneurship Development Cell & Department of Management Studies on 27th September 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition-27-9-23.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'An Online Current Affairs Quiz Competition was organised by Entrepreneurship Development Cell & Department of Management Studies on 20th September 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A National Webinar on “Inclination of Construction Industries Towards Geospatial Technology” was organised by Department of Civil Engineering, ASCE – Student Chapter, MITS In Collaboration with Entrepreneurship Development Cell-MITS on 20th September 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Inclination of Construction Industries Towards Geospatial Technology.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'An Online Current Affairs Quiz Competition- September week:2 was organised by Entrepreneurship Development Cell & Department of Management Studies on 13th September 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/week2 Report on Online Current Affairs Quiz Competition.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'An Online Current Affairs Quiz Competition - September week :1 was organised by Entrepreneurship Development Cell & Department of Management Studies on 2nd September 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/week1 Report on Online Current Affairs Quiz Competition.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A One day Entrepreneurship Development Programme on “Entrepreneurship and the Companies Act 2013” was organised by Entrepreneurship Development Cell in Association with Institution Innovation Council (IIC) Indian Society for Technical Education (ISTE) on 21st August 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship and the Companies Act 2013.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'An Online Webinar on "Entrepreneurship Opportunities in the Livestock Sector” was organised by Entrepreneurship Development Cell on 19th August 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Opportunities in the Livestock Sector.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'The Entrepreneurship Development Cell and Department of Management Studies jointly organized an ‘Orphanage Visit’ on 15th August 2023 from 7.00 PM to 9.00 PM.',
    link: "https://mits.ac.in/assets/pdf/mba/Orphanage Visit.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Webinar on “Role of Women in Tech Leadership” was organised by Entrepreneurship Development Cell & Department of Management Studies on 27th July 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Role of Women in Tech Leadership.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: '“ARTS & CRAFTS EXHIBITION - 2023” was organised by Entrepreneurship Development Cell, Department of Management Studies & Institute’s Innovation Cell on 17th July 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/ARTS & CRAFTS EXHIBITION 2023.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'The IIC Cell, ED cell, Department of Mechanical Engineering and Department of Management Studies has jointly organized a Virtual Orientation Programme on “Agribusiness Incubation Scheme & The Funding Opportunities For Agri Innovators” on 06th July 2023 in association with "ANGRAU Poshan Incubator", Acharya N.G. Ranga Agricultural University.',
    link: "https://mits.ac.in/assets/pdf/assoc/AGRIBUSINESS INCUBATION SCHEME.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Webinar on “Legal System for Startups” was organized by Entrepreneurship Development Cell, Department of Management Studies & Institution’s Innovation Council on 28th June 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Legal System for Startups.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A World MSME Day 2023 was organized by Research and Development Cell, IIC Cell and ED Cell on 27th June 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/MSME Day 2023.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'The Department of Management studies organized a ‘Awareness Generation Program On Entrepreneurship’ recommended by APSSDC on 12th June 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/AWARENESS GENERATION PROGRAM ON ENTREPRENEURSHIP.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'The Department of Management studies and ED cell organized a ‘Skill Development Programme’ recommended by APSSDC on ‘Industry Led Training Orientation & Selection’on 9th June 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Industry led training orientation and selection.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'The Department of Management studies and ED Cell jointly organized a Skill quiz on “Characteristics or qualities or values of Advertisement Copy” on 8th June 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Values of Advertising.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Webinar on Empowering Workplace: Managing Stress for Better Performance was organized by Department of Management Studies in collaboration with All India Management Association 26th May 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Empowering Workplace Managing Stress for Better Performance.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A One Day Online Workshop on "Application of Automated Machine Learning in Electrical Industry" was conducted by the Department of Electrical and Electronics Engineering in association with IIC & ED Cell on 24th May, 2023.',
    link: "https://mits.ac.in/assets/pdf/eee/Application of Automated Machine Learning in Electrical Industry.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'The Department of Management studies in association with Entrepreneurship development cell organized a webinar on the topic ‘Entrepreneurship Challenges in 21st Century on 10th February 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/ENTREPRENEURSHIP CHALLENGES IN 21STCENTURY.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Webinar in the topic of “Entrepreneurial Uses of AI” was organised by Department of Artificial Intelligence & Data Science in association with Entrepreneurship Development Cell on 25th January 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurial Uses of AI.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'An Awareness programmes on “How to Groom Entrepreneurs” was organized by Entrepreneurship Development Cell on 24th January 2023.',
    link: "https://mits.ac.in/assets/pdf/assoc/How to Groom Entrepreneurs.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2023",
  },
  {
    text: 'A Guest Lecture on “A talk on Entrepreneurship Skill, Attitude and Behavior Development” was organized by Department of Civil Engineering on 27th December 2022 in association with Institution’s Innovation Council (IIC) and Entrepreneurship Development Cell.',
    link: "https://mits.ac.in/assets/pdf/assoc/A talk on Entrepreneurship Skill, Attitude and Behavior Development.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2022",
  },
  {
    text: 'An Awareness programmes on “APSCHE Start-Up Programmes & MSME Schemes” was organized by Entrepreneurship Development Cell & Department of Computer Science &Engineering on 22nd December 2022.',
    link: "https://mits.ac.in/assets/pdf/assoc/APSCHE Start-Up Programmes & MSME Schemes.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2022",
  },
  {
    text: 'An Awareness programmes on “APSCHE Start-Up Programmes & MSME Schemes” was organized by Entrepreneurship Development Cell & Department of Computer Science & Engineering on 22nd November 2022.',
    link: "https://mits.ac.in/assets/pdf/cse/APSCHE Start-Up Programmes MSME Schemes.pdf",
    linkLabel: "Click here for Report on Event",
    year: "2022",
  },
  {
    text: '"Opportunities and Challenges of Entrepreneur" in Association with Computer Society of India(CSI) on 27th April 2022.',
    link: "https://mits.ac.in/assets/pdf/assoc/Opportunities and Challenges of Entrepreneuron 27th April 2022.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2022",
  },
  {
    text: "World's Entrepreneurs Day Organized by Entrepreneurship Development Cell on 21 August 2021.",
    link: "https://mits.ac.in/assets/pdf/assoc/Worlds Entrepreneurs Day on 21 August 2021.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2021",
  },
  {
    text: 'Positive Entrepreneurship for MBA & MCA Students Organized by Entrepreneurship Development Cell on 6 January 2022.',
    link: "https://mits.ac.in/assets/pdf/assoc/Positive Entrepreneurship on 6 January 2022.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2022",
  },
  {
    text: 'Financial Planning - Feasibility for Project Proposals for B.Tech, MBA & MCA Students Organized by Entrepreneurship Development Cell.',
    link: "https://mits.ac.in/assets/pdf/assoc/Financial Planning - Feasibility for Project Proposals on 23 April 2022.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2022",
  },
  {
    text: 'Entrepreneurial Motivation for MBA & MCA Students Organized by Entrepreneurship Development Cell on 07 January 2022.',
    link: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurial Motivation on 07 January 2022.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2022",
  },
  {
    text: 'Awareness Program on Intellectual Property Rights & MSME Schemes for Faculty Organized by Research & Development and Entrepreneurship Development Cell on 09 April 2022.',
    link: "https://mits.ac.in/assets/pdf/assoc/Awareness Program on Intellectual Property Rights & MSME Schemes for Faculty Organized by Research & Development and Entrepreneurship Development Cell on 09 April 2022.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2022",
  },
  {
    text: 'Agripreneurship Orientation Programme for B. Tech, MBA & MCA students Organised by Entrepreneurship Development Cell on 24 January 2022 Venue: Seminar Hall B (Blended Mode) @ 11.00AM',
    link: "https://mits.ac.in/assets/pdf/assoc/Agripreneurship Orientation Programme on 24 January 2022.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2022",
  },
  {
    text: 'Entrepreneurship Programme was organized by Entrepreneurship Development Cell on 22nd April 2022.',
    link: "https://mba.mits.ac.in/assets/pdf/mba/Entrepreneurship%20Program-2022.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2022",
  },
  {
    text: 'Agri based Start-ups in Agriculture and Allied Sectors was organized by Entrepreneurship Development Cell on 16 June 2021.',
    link: "https://mits.ac.in/assets/pdf/assoc/Schemes for Agri based start-ups in Agriculture and Allied sectors.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2021",
  },
  {
    text: 'Government Schemes for Start-up was organized by Entrepreneurship Development Cell on 1st May 2021.',
    link: "https://mits.ac.in/assets/pdf/assoc/Govt. Schemes for Start-up.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2021",
  },
  {
    text: 'Secrets in Starting a Successful Startup was organized by Entrepreneurship Development Cell on 18 October 2020.',
    link: "https://mits.ac.in/assets/pdf/assoc/Secrets in Starting a Successful Startup.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2020",
  },
  {
    text: 'Entrepreneurship Orientation Programme was organized by Entrepreneurship Development Cell on 18 September 2020.',
    link: "https://mits.ac.in/assets/pdf/assoc/ENTREPRENEURSHIP ORIENTATION PROGRAMME.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2020",
  },
  {
    text: "Worlds's Entrepreneurship Day was organized by Entrepreneurship Development Cell on 21 August 2020.",
    link: "https://mits.ac.in/assets/pdf/assoc/WORLD'S ENTREPRENEURS DAY.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2020",
  },
  {
    text: 'Awareness Programme on Entrepreneurship was organized by Entrepreneurship Development Cell on 04 February 2020.',
    link: "https://mits.ac.in/assets/pdf/assoc/AWARENESS PROGRAM ON ENTREPRENEURSHIP.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2020",
  },
  {
    text: 'An Awareness Program on “Skilling Imperatives for Enabling the clean Tech & Agri Business Community Entrepreneurship” for B.Tech & MBA Students was organized by Department of Entrepreneurship Development Cell on 24th October 2019.',
    link: "https://mits.ac.in/assets/pdf/assoc/Skilling Imperatives for Enabling the Clean Tech and Agri Business Community Entrepreneurship.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2019",
  },
  {
    text: 'A Workshop on "Entrepreneurship for start ups: Role of Technology & Innovation" for B.Tech III Year Students organized by ED Cell on 27th August 2019.',
    link: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship for start-ups- Role of Technology & Innovation.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2019",
  },
  {
    text: 'Agripreneurship Orientation Programme was organised by Entrepreneurship Development Cell on 22 August 2019.',
    link: "https://mits.ac.in/assets/pdf/assoc/Agripreneurship Orientation Programme.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2019",
  },
  {
    text: 'A Two-day Workshop on IoT and Drones on 20th & 21st April 2019.',
    link: "https://mits.ac.in/assets/pdf/assoc/A Two-day Workshop on IoT and Drones (20&21.04.2019).pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2019",
  },
  {
    text: 'Workshop on Web Application & Server App Development was organised by Entrepreneurship Development Cell on 18.01.2019.',
    link: "https://mits.ac.in/assets/pdf/assoc/Workshop on Web Application & Server App Development .pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2019",
  },
  {
    text: 'ROLE OF INNOVATIVE TECHNOLOGIES IN ENTREPRENEURSHIP was organised by Entrepreneurship Development Cell on 12.12.2018.',
    link: "https://mits.ac.in/assets/pdf/assoc/ROLE OF INNOVATIVE TECHNOLOGIES IN ENTREPRENEURSHIP (12.12.2018).pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2018",
  },
  {
    text: 'Demonstration of Hybrid Solar Inverter for PV Power Generation was organised by Entrepreneurship Development Cell on 02.11.2018.',
    link: "https://mits.ac.in/assets/pdf/assoc/Demonstration of Hybrid Solar Inverter for PV Power Generation (02.11.2018).pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2018",
  },
  {
    text: 'Entrepreneurship in Power Electronics-Practical Applications and Future Industry Needs was organised by Entrepreneurship Development Cell on 27.09.2018.',
    link: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship in Power Electronics-Practical Applications and Future Industry Needs (27.09.2018).pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2018",
  },
  {
    text: 'A Workshop on Open Source Technologies was organised by Entrepreneurship Development Cell on 31.08.2018.',
    link: "https://mits.ac.in/assets/pdf/assoc/A Workshop on Open Source Technologies (31.08.2018).pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2018",
  },
  {
    text: 'The Excitement of Combining Research, Innovation and Entrepreneurship was organised by Entrepreneurship Development Cell on 28.08.2018.',
    link: "https://mits.ac.in/assets/pdf/assoc/The Excitement of Combining Research, Innovation and Entrepreneurship (28.08.2018).pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2018",
  },
  {
    text: 'A Guest Lecture on "Entrepreneurship Development & Opportunities" organised by ED Cell held on 6th August 2018.',
    year: "2018",
  },
  {
    text: 'A 2-Day Workshop with Hands-on Training on Android Applications organized by MITS Innovation Society & ED cell on 26th & 27th April 2018.',
    link: "https://mits.ac.in/assets/pdf/assoc/Android Applications.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2018",
  },
  {
    text: 'Inauguration of Pradhan Mantri Yuva Yojana Certificate Course in Entrepreneurship & Seminar on Entrepreneurship by Ms. Swetha Narayan organized by ED Cell on 22nd February 2018.',
    link: "https://mits.ac.in/assets/pdf/assoc/Awareness Programme on Entrepreneurship.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2018",
  },
  {
    text: '48 Hours WEBATHON organized by ED Cell on 16th & 17th February 2018.',
    link: "https://mits.ac.in/assets/pdf/assoc/48 Hour WEB-A-THON-min.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2018",
  },
  {
    text: 'Entrepreneurship Awareness Camp for B.Tech Students from 04-01-2018 to 06-01-2018 organized by ED Cell.',
    link: "https://mits.ac.in/assets/pdf/assoc/EAC.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2018",
  },
  {
    text: 'A Workshop on "Entrepreneurship & Research Proposals to various Funding Agencies" organized by ED cell & IIIC cell on 15-11-2017.',
    link: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship and Research Proposals to Various Funding Agencies.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2017",
  },
  {
    text: 'A Seminar on "Entrepreneurship and Self Development" organized by EDC Cell & IIIC Cell on 19th September 2017.',
    link: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship & Self Development.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2017",
  },
  {
    text: 'A Workshop on "Innovation and Entrepreneurship" by resource person Dr. Pavan Soni organized by ED Cell on 10/08/2017.',
    link: "https://mits.ac.in/assets/pdf/assoc/Innovation and Entrepreneurship 2017.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2017",
  },
  {
    text: 'An awareness programme on "Entrepreneurship Development on E-talk on I3" organized by MITS – ED Cell on 29th July 2017.',
    link: "https://mits.ac.in/assets/pdf/assoc/E-TALK on I3.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2017",
  },
  {
    text: 'A Report on DIYA (Dynamic Ideas by Young Aspirants) - An Idea Generation Contest organized by MITS – ED Cell 20th April 2017.',
    link: "https://mits.ac.in/assets/pdf/assoc/A Report on DIYA (Dynamic Ideas by Young Aspirants) - An Idea Generation Contest (20.04.2017).pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2017",
  },
  {
    text: 'A Two Day Seminar on "Creating Entrepreneurship and Development Entrepreneurial Management" for B.Tech Students organized by ED cell on 16th & 17th March 2017.',
    link: "https://mits.ac.in/assets/pdf/assoc/Creating Entrepreneurship Environment and Developing Entrepreneurial Management.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2017",
  },
  {
    text: 'Entrepreneurship Development Cell organized a Two Day Entrepreneurship Orientation Programme on 21st & 22nd December 2016 for the final year M.B.A., M.C.A., & B.Tech students in collaboration with National Small Industries Corporation (NSIC), Hyderabad.',
    link: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Orientation Program.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2016",
  },
  {
    text: 'MITS received Rs.10,00,000/- grant from Ministry of Skill Development & Entrepreneurship under Pradhan Mantri Yuva Yojana (Udyamita)',
    year: "2016",
  },
  {
    text: 'MITS Signed MoU with National Entrepreneurship Network, Bengaluru (Wadhwani Foundation) on 15/09/16.',
    link: "https://mits.ac.in/assets/pdf/assoc/wadhwani.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2016",
  },
  {
    text: 'Mentoring Program on entrepreneurship development for ED Cell Faculty coordinators by Sri. Vikram Jit Misra, Regional Manager, NEN, Hyderabad.',
    link: "https://mits.ac.in/assets/pdf/assoc/Mentoring Program on entrepreneurship development.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2016",
  },
  {
    text: 'Orientation Programme on entrepreneurship development for B.Tech III Year, MBA & MCA Students by Sri. Vikram Jit Misra, Regional Manager, NEN, Hyderabad.',
    link: "https://mits.ac.in/assets/pdf/assoc/entrepreneurship development2016.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2016",
  },
  {
    text: 'Mr. Vikram Jit Misra, Regional Manager, Hyderabad exchanged documents with Dr. C. Yuvaraj, Principal, MITS.',
    year: "2016",
  },
  {
    text: 'MITS will have access to various entrepreneurial development initiatives taken by NEN.',
    year: "2016",
  },
  {
    text: 'NEN Programs Initiatives:',
    year: "2016",
    subList: [
      {
        title: "FOR CAPACITY BUILDING",
        items: [
          "Content and Curricula",
          "Faculty and Mentor Development",
          "Consultancy for Advanced",
          "Infrastructure",
          "Experts Bureau and Networking",
          "National Platforms",
        ],
      },
      {
        title: "FOR ENTREPRENEURS",
        items: [
          "Knowledge and Skills-Building",
          "Mentoring",
          "Experts Bureau and Networking",
          "National Platforms",
          "Online Entrepreneur Academy",
        ],
      },
    ],
  },
  {
    text: 'A Guest Lecture on "Innovation and Entrepreneurship" by Resource Person Mr. Koushal Kushi, CEO, @Vendext, Bangalore was organised by EDC-Cell on 28-09-2016.',
    link: "https://mits.ac.in/assets/pdf/assoc/Innovation & Entrepreneurship.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2016",
  },
  {
    text: 'The Entrepreneurship Development Cell organized A One day Workshop on Technology Entrepreneurship Development on 31.03.2016.',
    link: "https://mits.ac.in/assets/pdf/assoc/One day Workshop on Technology Entrepreneurship Development (31.03.2016).pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2016",
  },
  {
    text: 'The Entrepreneurship Development Cell organized a One Day Workshop on “Entrepreneurship Development” on 12th February, 2016 for IV- B.Tech Students of all branches.',
    link: "https://mits.ac.in/assets/pdf/assoc/One Day Workshop on Entrepreneurship Developmentfor IV- B.Tech Students.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2016",
  },
  {
    text: 'Entrepreneurship Development Cell of MITS organized a Two Day Workshop on “Entrepreneurship Development” during 3rd - 4th November, 2015 for the final year M.B.A., M.C.A., II year and B.Tech II year ME-D students in collaboration with National Small Industries Corporation (NSIC), Hyderabad.',
    link: "https://mits.ac.in/assets/pdf/assoc/Two Day Workshop on Entrepreneurship Development Nov 2015.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2015",
  },
  {
    text: 'A Workshop on Latest Trends in Technology Entrepreneurship Development on 6th October 2015.',
    link: "https://mits.ac.in/assets/pdf/assoc/Workshop on Latest Trends in Technology Entrepreneurship Development (6.10.2015).pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2015",
  },
  {
    text: 'Entrepreneurship & Promotion of SMEs Opportunities and Challenges 27th & 28th May 2015.',
    link: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship & Promotion of SMEs Opportunities and Challenges (27&28.05.2015).pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2015",
  },
  {
    text: 'A Two Day Workshop on “Entrepreneurship Development” organized by Entrepreneurship Development Cell was held at Madanapalle Institute of Technology & Science during 16 - 17 March, 2015.',
    link: "https://mits.ac.in/assets/pdf/assoc/A Two day Workshop on Entrepreneurship Development (1).pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2015",
  },
  {
    text: 'Entrepreneurship in Renewable Energy Sources & REC Mechanism organized by Entrepreneurship Development Cell on 30th January 2015.',
    link: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship in Renewable Energy Sources & REC Mechanism (30.01.2015).pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2015",
  },
  {
    text: 'Entrepreneurship Development Cell organized a one day workshop on Entrepreneurship Development on 7th November, 2014 for all the branches of all final year B.Tech students. The Resource Person was Mr. V. Chaturvedi, Vice-president, Business Development and Collaborations, Indo-American Cancer Hospital and former Registrar of NIMSME, Hyderabad.',
    link: "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Development.pdf",
    linkLabel: "For Report on Event Click Here",
    year: "2014",
  },
  {
    text: 'A seminar on “Necessity is the mother of Invention” was organized for the final year students on 20/10/2012 by Sri C. Mallesam, Inventor of Lakshmi Aasu Machine (for weavers), Hyderabad.',
    year: "2012",
  },
  {
    text: 'A seminar on “Ethics in Entrepreneurship” was organized for the final year students of all branches on 23/11/2011 by Mr. C. Ashok Kumar, Asst. Director, District Industries Centre, Chittoor.',
    year: "2011",
  },
  {
    text: 'A workshop on “Entrepreneurship Opportunities” was organized on 18/7/2010 through Mr. Prabhakaran, ERS Consultants, Bangalore for the final year students of all branches.',
    year: "2010",
  },
  {
    text: 'A workshop on “Financial Assistance for the Entrepreneurs” was organized for final year students on 28/12/2010 through Sri Seetharama Rao, Branch Manager, SBH, Madanapalle',
    year: "2010",
  },
];

const relatedCells = [
  { label: "MITS Next New Venture Studio", to: "/venture-studio" },
  { label: "Startup & Incubation Cell (NISP)", to: "/cells/startup" },
  { label: "Industry-Institute Interaction Cell (IIIC)", to: "/cells/iiic" },
  { label: "Design Thinking Studio (DTS)", to: "/cells/dts" },
  { label: "Intellectual Property Facilitation Centre (IPFC)", to: "/cells/ipfc" },
  { label: "Student Activity Centre (SAC)", to: "/cells/sac" },
];

export default function EdcView() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const yearFilters = [
    { id: "all", label: "All Activities" },
    { id: "2026", label: "2026" },
    { id: "2025", label: "2025" },
    { id: "2024", label: "2024" },
    { id: "2023", label: "2023" },
    { id: "2022", label: "2022" },
    { id: "2021", label: "2021" },
    { id: "2020-2018", label: "2018-2020" },
    { id: "2017-2010", label: "2010-2017" },
  ];

  const filteredActivities = useMemo(() => {
    return allEdcActivities.filter((item) => {
      // Year filter
      let matchYear = true;
      if (selectedYear === "2026") matchYear = item.year === "2026";
      else if (selectedYear === "2025") matchYear = item.year === "2025";
      else if (selectedYear === "2024") matchYear = item.year === "2024";
      else if (selectedYear === "2023") matchYear = item.year === "2023";
      else if (selectedYear === "2022") matchYear = item.year === "2022";
      else if (selectedYear === "2021") matchYear = item.year === "2021";
      else if (selectedYear === "2020-2018") matchYear = ["2020", "2019", "2018"].includes(item.year || "");
      else if (selectedYear === "2017-2010") matchYear = !!item.year && parseInt(item.year) <= 2017;

      // Search term
      let matchSearch = true;
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        matchSearch = item.text.toLowerCase().includes(q) || (item.year && item.year.includes(q)) || false;
      }

      return matchYear && matchSearch;
    });
  }, [searchTerm, selectedYear]);

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />

      {/* INNER BANNER - EXACT REPRESENTATION BLENDED WITH SITE HERO STYLE */}
      <section
        className="relative pt-32 md:pt-40 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("https://mits.ac.in/public/uploads/wec/1d27e3693e2f1bda0c067535420b9ce4.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0f2a44]/80 backdrop-blur-[2px] bg-gradient-to-b from-[#0f2a44]/90 via-[#0f2a44]/80 to-[#0f2a44]/95" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffd15c] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 drop-shadow-sm flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#ffd15c]" />
            Cells &amp; Committees • Innovation, Research &amp; Entrepreneurship
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-3 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Entrepreneurship Development Cell
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto drop-shadow-sm font-medium">
            Shaping the future entrepreneurs to transform the world for a better living.
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
            <li className="text-[#ffd15c] font-semibold">Entrepreneurship Development Cell</li>
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

        {/* TWO COLUMN SECTION: LEFT & DCE-RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            {/* MAIN HEADING & CONTENT BLOCK */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                {/* LOGO IMAGE (FLOAT RIGHT AS IN ORIGINAL HTML) */}
                <div className="float-none sm:float-right ml-0 sm:ml-6 mb-5 flex justify-center sm:block">
                  <div className="p-2.5 rounded-xl border border-gray-200/80 bg-white shadow-xs max-w-[210px]">
                    <img
                      src="https://mits.ac.in/assets/images/edcell.jpg"
                      alt="Entrepreneurship Development Cell Logo"
                      className="w-full h-auto object-contain rounded-lg"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>

                {/* TITLE */}
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#b31317] mb-4">
                  Entrepreneurship Development Cell
                </h2>

                {/* ESTABLISHMENT TEXT */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify mb-5">
                  Entrepreneurship Development Cell was established on <strong>1-7-2010</strong> with the one faculty as a Coordinator and department wise one faculty as committee members.
                </p>

                {/* VISION */}
                <div className="mb-4">
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#0f2a44] mb-1">
                    Vision:
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                    Shaping the future entrepreneurs to transform the world for a better living.
                  </p>
                </div>

                {/* MISSION */}
                <div className="mb-5">
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#0f2a44] mb-1">
                    Mission:
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                    To create and foster entrepreneurial culture among students by identifying, training and motivating students to become entrepreneurs.
                  </p>
                </div>

                {/* OBJECTIVES */}
                <div className="mb-6">
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#0f2a44] mb-3">
                    Objectives of Entrepreneurship Development Cell:
                  </h3>
                  <ol className="list-decimal pl-5 space-y-2.5 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                    <li>
                      To create greater awareness of opportunities and benefits of entrepreneurship among the students, to make them realize their dream business through innovative products and to develop greater entrepreneurial culture within the institution.
                    </li>
                    <li>
                      To create greater number of sustainable startup business with potential for further growth.
                    </li>
                    <li>
                      To create awareness among students on industrial business and on the availability of financial assistance enabling them to start their own industrial ventures.
                    </li>
                  </ol>
                </div>

                {/* SCOPE PANEL (panel panel-default) */}
                <div className="rounded-xl border border-gray-200 bg-gray-50/70 p-5 md:p-6 mb-6">
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#b31317] mb-2 flex items-center gap-2">
                    Scope:
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                    Eminent personnel from industry (entrepreneurs), financial institutions (Banks), and academics will be invited to interact and to empower the knowledge in the concern fields that enrich the students how to start an entrepreneur at their own cost and procedures to be followed further. They also share their experiences about their success and failures of growth as an entrepreneur and motivate students at the plethora of opportunities they have in the World of industrial sector and encourage the students to launch new ventures.
                  </p>
                </div>

                {/* PUBLICATION LIST (ED Cell Committee 2025-26) */}
                <div className="pt-2 pb-4 border-b border-gray-100 mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Committee &amp; Official Orders
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://mits.ac.in/assets/pdf/assoc/Office%20order-ED%20CELL-2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#b31317] hover:text-[#0f2a44] transition-colors group"
                      >
                        <FileText className="w-5 h-5 text-[#b31317] shrink-0" />
                        <span className="underline group-hover:no-underline">ED Cell Committee 2025-26 (Download PDF)</span>
                        <Download className="w-4 h-4 text-slate-400 group-hover:text-[#b31317] transition-colors" />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* ACTIVITIES ORGANIZED HEADER + SEARCH & FILTERS */}
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#b31317]">
                      Activities Organized :
                    </h3>

                    {/* SEARCH INPUT */}
                    <div className="relative min-w-[200px]">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search event, date, topic..."
                        className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-gray-200 focus:outline-hidden focus:border-[#b31317] transition-colors"
                      />
                    </div>
                  </div>

                  {/* YEAR PILLS */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                    {yearFilters.map((yf) => (
                      <button
                        key={yf.id}
                        onClick={() => setSelectedYear(yf.id)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                          selectedYear === yf.id
                            ? "bg-[#0f2a44] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {yf.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ACTIVITIES LIST */}
                <ul className="space-y-4">
                  {filteredActivities.length > 0 ? (
                    filteredActivities.map((act, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#b31317] shrink-0 mt-2.5" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base text-slate-800 leading-relaxed text-justify">
                            {act.text}
                          </p>

                          {/* SUB-LIST (E.G. NEN PROGRAMS) */}
                          {act.subList && (
                            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50/70 p-4 rounded-xl border border-gray-200">
                              {act.subList.map((sub, sIdx) => (
                                <div key={sIdx}>
                                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#0f2a44] mb-2">
                                    {sub.title}
                                  </h4>
                                  <ol className="list-decimal pl-4 space-y-1 text-xs text-slate-700">
                                    {sub.items.map((item, iIdx) => (
                                      <li key={iIdx}>{item}</li>
                                    ))}
                                  </ol>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* LINK FOR EVENT REPORT */}
                          {act.link && (
                            <div className="mt-1.5">
                              <a
                                href={act.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#b31317] hover:text-[#0f2a44] transition-colors hover:underline"
                              >
                                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                                {act.linkLabel || "Click here for Report on Event"}
                              </a>
                            </div>
                          )}
                        </div>
                      </li>
                    ))
                  ) : (
                    <li className="py-8 text-center text-sm text-gray-400">
                      No activities match your query.
                    </li>
                  )}
                </ul>

                <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Showing {filteredActivities.length} of {allEdcActivities.length} activities</span>
                  <span className="font-semibold text-[#0f2a44]">ED Cell MITS Archives</span>
                </div>
              </section>
            </ScrollReveal>

            {/* VISMIS CARDS (flex vismis text-center mb-4 light-color-text) */}
            <ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* VISION */}
                <div className="bg-gradient-to-br from-white to-amber-50/50 rounded-2xl border border-amber-200/80 shadow-sm p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-3.5 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center">
                    <Compass className="w-7 h-7" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-2">
                    Vision
                  </h2>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Shaping the future entrepreneurs to transform the world for a better living.
                  </p>
                </div>

                {/* MISSION */}
                <div className="bg-gradient-to-br from-white to-red-50/50 rounded-2xl border border-red-200/80 shadow-sm p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-3.5 rounded-full bg-[#b31317]/10 text-[#b31317] flex items-center justify-center">
                    <Target className="w-7 h-7" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-[#b31317] mb-2">
                    Mission
                  </h2>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    To create and foster entrepreneurial culture among students by identifying, training and motivating students to become entrepreneurs.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* DCE-RIGHT (SIDEBAR) */}
          <div className="space-y-6">
            {/* CONTACT US (h2 class="bg-red") */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#b31317] px-6 py-4">
                  <h2 className="font-display text-lg font-bold text-white tracking-wide">
                    Contact Us
                  </h2>
                </div>
                <div className="p-6 space-y-4 text-sm text-slate-700">
                  {/* ADDRESS */}
                  <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
                    <MapPin className="w-5 h-5 text-[#b31317] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0f2a44] block mb-1">Address :</span>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Madanapalle Institute of Technology &amp; Science<br />
                        Deemed to be University <br />
                        Madanapalle-Kadiri Road <br />
                        kurabalakota Mandal, Madanapalle-517325 <br />
                        Andhra Pradesh, India
                      </p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
                    <Phone className="w-5 h-5 text-[#b31317] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0f2a44] block mb-1">Phone :</span>
                      <p className="text-xs sm:text-sm text-slate-700">
                        +91-8571-280255; 280706
                      </p>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#b31317] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0f2a44] block mb-1">E Mail :</span>
                      <a
                        href="mailto:edcell@mits.ac.in"
                        className="text-xs sm:text-sm text-[#b31317] hover:underline font-semibold"
                      >
                        edcell@mits.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* KEY DOCUMENT DOWNLOAD */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-5">
                <h3 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#caa74d]" />
                  Cell Office Order
                </h3>
                <a
                  href="https://mits.ac.in/assets/pdf/assoc/Office%20order-ED%20CELL-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 p-3 rounded-xl border border-gray-100 bg-[#fafaf7] hover:bg-amber-50/40 hover:border-amber-200 transition-colors group"
                >
                  <span className="text-xs font-semibold text-[#0f2a44] group-hover:text-[#b31317] transition-colors">
                    ED Cell Committee 2025-26
                  </span>
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-[#b31317] transition-colors shrink-0" />
                </a>
              </section>
            </ScrollReveal>

            {/* RELATED ECOSYSTEM LINKS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-5">
                <h3 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#caa74d]" />
                  Related Cells &amp; Portals
                </h3>
                <div className="space-y-1.5">
                  {relatedCells.map((cell) => (
                    <Link
                      key={cell.to}
                      to={cell.to}
                      className="flex items-center justify-between text-xs sm:text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-2 border-b border-gray-50 last:border-0 group"
                    >
                      <span>{cell.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#caa74d] group-hover:text-[#b31317] transition-colors" />
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* SOURCE LINK */}
            <ScrollReveal>
              <a
                href="https://mits.ac.in/ed-cell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 text-xs text-[#0f2a44]/60 hover:text-[#b31317] transition-colors px-1"
              >
                <span>View original website page</span>
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

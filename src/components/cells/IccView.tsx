import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  FileDown,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  BookOpen,
  Scale,
  Calendar,
  AlertCircle,
  Award,
  CheckCircle2,
  Users
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "https://mits.edu/";

const iccDocuments = [
  {
    title: "MITS Zero Tolerance Policy",
    href: "https://mits.ac.in/assets/pdf/admin/ICC-POSH.pdf"
  },
  {
    title: "MITS ICC Handbook",
    href: "https://mits.ac.in/assets/pdf/admin/MITS%20ICC%20Handbook.pdf"
  },
  {
    title: "The Gazette of India Notification on POSH - 2013 & 2016",
    href: "http://www.mits.ac.in/assets/pdf/admin/1.1.Sexual-Harassment-at-Workplace-Act.pdf"
  },
  {
    title: "ICC Committee Members 2025-26",
    href: "https://mits.ac.in/assets/pdf/assoc/ICC-Committee-Order%202025-26.pdf"
  },
  {
    title: "ICC Committee Members 2024-25",
    href: "https://mits.ac.in/assets/pdf/assoc/ICC%20-Office%20Order-%20sep%202024.pdf"
  },
  {
    title: "ICC Committee Members 2023-24",
    href: "https://mits.ac.in/assets/pdf/assoc/Internal%20Complaints%20Committee%202023-24.pdf"
  },
  {
    title: "Academic Year 2023-24",
    href: "https://mits.ac.in/assets/pdf/admin/ICC-2023-24.pdf"
  },
  {
    title: "Handbook on Sexual Harassment of Women at Workplace",
    href: "https://mits.ac.in/assets/pdf/assoc/Handbook%20on%20Sexual%20Harassment%20of%20Women%20at%20Workplace.pdf"
  },
  {
    title: "Working Rules for Internal Complaints Committee",
    href: "https://mits.ac.in/icc#"
  },
  {
    title: "Internal Complaints Committee 2023-24",
    href: "https://mits.ac.in/assets/pdf/assoc/Internal%20Complaint%20Committee%202024.pdf"
  },
  {
    title: "Constitution of Internal Complaints Committee",
    href: "https://mits.ac.in/assets/pdf/assoc/ICC%20Committee.pdf"
  },
  {
    title: "AICTE Schemes for Women Empowerment and Girl Students",
    href: "http://www.aicte-india.org/opportunities/students/facilites"
  }
];

const actionPlans = [
  {
    title: "Action plan of ICC for the Academic year 2025-26",
    href: "https://mits.ac.in/assets/pdf/assoc/ICC_Action%20Plan_25_26.pdf"
  },
  {
    title: "Action plan of ICC for the Academic year 2024-25",
    href: "https://mits.ac.in/assets/pdf/assoc/icc-ac-2024-25.pdf"
  },
  {
    title: "Action plan of ICC for the Academic year 2022-23",
    href: "https://mits.ac.in/assets/pdf/assoc/ICC%20ACTION%20PLAN%202022-23.pdf"
  },
  {
    title: "Action plan of ICC for the Academic year 2021-22",
    href: "https://mits.ac.in/assets/pdf/assoc/ICC%20ACTION%20PLAN%202021-22.pdf"
  },
  {
    title: "Action plan of ICC for the Academic year 2020-21",
    href: "https://mits.ac.in/assets/pdf/assoc/Action%20plan%20of%20ICC%20for%20the%20Academic%20year%202020-21-min.pdf"
  },
  {
    title: "Action plan of ICC for the Academic year 2019-20",
    href: "https://mits.ac.in/assets/pdf/assoc/Action%20plan%20of%20ICC%20for%20the%20Academic%20year%202019-20-min.pdf"
  }
];

const iccEvents = [
  {
    title: 'A Sensitization Programme on "Ensuring a Safe Campus-Understanding POSH" organized by ICC on 20th December 2025',
    href: "https://mits.ac.in/assets/pdf/assoc/Ensuring%20a%20Safe%20Campus-Understanding%20POSH.pdf"
  },
  {
    title: 'A Session conducted on "GURU-DAKSHA Faculty Induction Program 2025-26" organized by ICC on 15th November 2025',
    href: "https://mits.ac.in/assets/pdf/assoc/Faculty%20Induction_NOV%202025-min.pdf"
  },
  {
    title: 'An Awareness Program on "Building Gender Sensitivity: Towards an inclusive Campus" on 27th & 28th October 2025',
    href: "https://mits.ac.in/assets/pdf/assoc/I%20B.tech_OCT%202025-min.pdf"
  },
  {
    title: 'An "Induction Program for I MBA" organized by Internal Complaints Cell (ICC) on 12th September 2025',
    href: "https://mits.ac.in/assets/pdf/assoc/PG%20%20Induction%20Program_Sep2025-min.pdf"
  },
  {
    title: 'An "Orientation Program for I B. Tech on Gender Sensitization, Socialization and gender-based violence" on 21st August 2025',
    href: "https://mits.ac.in/assets/pdf/assoc/UG%20Induction%20Program_Aug2025-min.pdf"
  },
  {
    title: '“Case study discussion - Analyze real-life cases of workplace harassment” organized by ICC on 10.02.2025',
    href: "https://mits.ac.in/assets/pdf/assoc/01%20A%20Report%20on%20%E2%80%9CCase%20study%20discussion-%20Analyze%20real-life%20cases%20of%20workplace%20harassment.%E2%80%9D%20Organized%20by%20Internal%20Complaint%20Cell%20on%2010.02.2025.pdf"
  },
  {
    title: '“National Girl Child Day” organized by Internal Complaint Cell on 24.01.2025',
    href: "https://mits.ac.in/assets/pdf/assoc/02%20A%20Report%20on%20%E2%80%9CNational%20Girl%20Child%20Day%E2%80%9D%20Organized%20by%20Internal%20Complaint%20Cell%20on%2024.01.2025.pdf"
  },
  {
    title: '“Story telling Session” organized by Internal Complaint Cell on 19.12.2024',
    href: "https://mits.ac.in/assets/pdf/assoc/03%20A%20Report%20on%20%E2%80%9CStory%20telling%20Session%E2%80%9D%20Organized%20by%20Internal%20Complaint%20Cell%20on19.12.2024.pdf"
  },
  {
    title: '“Role play Handling uncomfortable situations” organized by Internal Complaint Cell on 14.11.2024',
    href: "https://mits.ac.in/assets/pdf/assoc/04%20A%20Report%20on%20%E2%80%9CRole%20play%20Handling%20uncomfortable%20situations%E2%80%9D%20Organized%20by%20Internal%20Complaint%20Cell%20on%2014.11.2024.pdf"
  },
  {
    title: '“Boosting Self-Esteem in Professional Set up” organized by Internal Complaint Committee on 25.10.2024',
    href: "https://mits.ac.in/assets/pdf/assoc/05%20A%20Report%20on%20%E2%80%9CBoosting%20Self-Esteem%20in%20Professional%20Set%20up%E2%80%9D%20Organized%20by%20Internal%20Complaint%20Committee%20on%2025.10.2024.pdf"
  },
  {
    title: '“Orientation Program for MBA on Internal Complaint Cell” organized on 27.09.2024',
    href: "https://mits.ac.in/assets/pdf/assoc/06%20A%20Report%20on%20%E2%80%9COrientation%20Program%20for%20MBA%20on%20Internal%20Complaint%20Cell%E2%80%9D%20Organized%20by%20Internal%20Complaint%20Cell%20on%2027.09.2024.pdf"
  },
  {
    title: '“Orientation Program for MCA on Internal Complaint Cell” organized on 26.09.2024',
    href: "https://mits.ac.in/assets/pdf/assoc/07%20A%20Report%20on%20%E2%80%9COrientation%20Program%20for%20MCA%20on%20Internal%20Complaint%20Cell%E2%80%9D%20Organized%20by%20Internal%20Complaint%20Cell%20on%2026.09.2024.pdf"
  },
  {
    title: '“Orientation Program for I B.Tech on Internal Complaint Cell” organized on 13.08.2024',
    href: "https://mits.ac.in/assets/pdf/assoc/08%20A%20Report%20on%20%E2%80%9COrientation%20Program%20for%20I%20B.Tech%20on%20Internal%20Complaint%20Cell%E2%80%9D%20Organized%20by%20Internal%20Complaint%20Cell%20on%2013.08.2024.pdf"
  },
  {
    title: '“Orientation Program for I B.Tech on Internal Complaint Cell” organized on 06.08.2024',
    href: "https://mits.ac.in/assets/pdf/assoc/09%20A%20Report%20on%20%E2%80%9COrientation%20Program%20for%20I%20B.Tech%20on%20Internal%20Complaint%20Cell%E2%80%9D%20Organized%20by%20Internal%20Complaint%20Cell%20on%2006.08.2024.pdf"
  },
  {
    title: '“Being Socially Responsible” organized by Internal Complaint Cell on 26.07.2024',
    href: "https://mits.ac.in/assets/pdf/assoc/10%20A%20Report%20on%20%E2%80%9CBeing%20Socially%20Responsible%E2%80%9D%20Organized%20by%20Internal%20Complaint%20Cell%20on%2026.07.2024.pdf"
  },
  {
    title: '“International Women’s Day” organized by Internal Complaint Committee of MITS on 7th March, 2024',
    href: "https://mits.ac.in/assets/pdf/assoc/International%20Womens%20Day-2024.pdf"
  },
  {
    title: '“National Wear Red Day” organized by Internal Complaint Committee of MITS on 2nd February 2024',
    href: "https://mits.ac.in/assets/pdf/assoc/Red%20Wear%20Day.pdf"
  },
  {
    title: "National Girl Child Day organized by Internal Complaint Committee of MITS on 24th January 2024",
    href: "https://mits.ac.in/assets/pdf/assoc/NATIONAL%20GIRL%20CHILD%20DAY%20ON%2024%20JANUARY%202024.pdf"
  },
  {
    title: "A Rendezvous with Doctor Dr. Prathima Gupta organized by ICC of MITS on 24th November 2023",
    href: "https://mits.ac.in/assets/pdf/assoc/Rendezvous%20with%20Doctor.pdf"
  },
  {
    title: "An Orientation Program for MCA Students organised by ICC on 27th October 2023",
    href: "https://mits.ac.in/assets/pdf/assoc/MCA-INDUCTION%20REPORT-23.pdf"
  },
  {
    title: "An Orientation Program for MBA Students organised by ICC on 25th October 2023",
    href: "https://mits.ac.in/assets/pdf/assoc/MBA-INDUCTION%20REPORT-23.pdf"
  },
  {
    title: "An Orientation Program for B.Tech Students organised by ICC on 14th September 2023",
    href: "https://mits.ac.in/assets/pdf/assoc/B.TECH-INDUCTION%202%20-23.pdf"
  },
  {
    title: "An Orientation Program for B.Tech Students organised by ICC on 13th September 2023",
    href: "https://mits.ac.in/assets/pdf/assoc/B.TECH-%20INDUCTION%201-23.pdf"
  },
  {
    title: "“International Women’s Day” organized by ICC of MITS on 8th March, 2023",
    href: "https://mits.ac.in/assets/pdf/assoc/International%20Womens%20Day%202023.pdf"
  },
  {
    title: "“International Women’s Day” organized by ICC of MITS on 8th March, 2022",
    href: "https://mits.ac.in/assets/pdf/assoc/REPORT%20ON%20INTERNATIONAL%20WOMEN_S%20DAY%202022-min.pdf"
  },
  {
    title: "Personality Development for PG Girl students organized by ICC on 10th February 2022",
    href: "https://mits.ac.in/assets/pdf/assoc/Personality%20Development%20for%20PG%20Girl%20students-min.pdf"
  },
  {
    title: "“International Women’s Day” organized by ICC of MITS on 8th March, 2021",
    href: "https://mits.ac.in/assets/pdf/assoc/REPORT%20ON%20INTERNATIONAL%20WOMEN_S%20DAY%202021.pdf"
  },
  {
    title: "“Role of women in containing the spread of Covid-19” organized on 12-11-2020",
    href: "https://mits.ac.in/assets/pdf/assoc/corona.pdf"
  },
  {
    title: "“International Women’s Day” organized by ICC of MITS on 8th March, 2020",
    href: "https://mits.ac.in/assets/pdf/assoc/REPORT%20ON%20INTERNATIONAL%20WOMEN_S%20DAY%202020-min.pdf"
  },
  {
    title: "National Girl Child Day organized by ICC on 24th January 2020",
    href: "https://mits.ac.in/assets/pdf/assoc/national%20girl%20child%20day%2020.pdf"
  },
  {
    title: "An International Day of the Girl Child organized by ICC on 11th October 2019",
    href: "https://mits.ac.in/assets/pdf/assoc/International%20Day%20of%20Girl%20Child-min.pdf"
  },
  {
    title: "Rendezvous with Doctor organized by ICC on 22nd August 2019",
    href: "https://mits.ac.in/assets/pdf/assoc/Report%20on%20Rendezvous%20with%20Dr%20Prathima%20Gupta%20organised%20by%20Internal%20Complaint-min.pdf"
  },
  {
    title: "International Women’s Day organized by Internal Complaints Committee on 8th March 2019",
    href: "https://mits.ac.in/assets/pdf/assoc/Womens%20Day%20Celebrations%202019.pdf"
  },
  {
    title: "Competitions like Pick and Speak, Essay Writing and Poetry held from 25th to 28th February 2019",
    href: "https://mits.ac.in/assets/pdf/assoc/Report%20on%20Competitions%20like%20Pick%20and%20Speak.pdf"
  },
  {
    title: "National Girl Child Day conducted by Internal Complaints Committee on 24th January 2019",
    href: "https://mits.ac.in/assets/pdf/assoc/NATIONAL%20GIRL-CHILD%20DAY-min.pdf"
  },
  {
    title: "Workplace Treatment of Women on 8th October 2018",
    href: "https://mits.ac.in/assets/pdf/assoc/Report%20on%20Workplace%20Treatment%20of%20Women.pdf"
  },
  {
    title: "Projection of Women in TV Ads on 28th September 2018",
    href: "https://mits.ac.in/assets/pdf/assoc/Report%20on%20Projection%20of%20Women%20in%20TV%20Ads.pdf"
  },
  {
    title: "Social Empowerment by Internal Complaints Committee of MITS on 17th September 2018",
    href: "https://mits.ac.in/assets/pdf/assoc/Report%20of%20Social%20Empowerment.pdf"
  },
  {
    title: "Personality Development Program for PG Students on 28th March 2018",
    href: "https://mits.ac.in/assets/pdf/assoc/Report%20on%20Personality%20Development%20Program%20for%20PG%20Students.pdf"
  },
  {
    title: "International Women’s Day organized by Internal Complaints Committee on 8th March 2018",
    href: "https://mits.ac.in/assets/pdf/assoc/International%20Women%20Day%202018-min.pdf"
  },
  {
    title: "Generating Awareness About Legal Rights of Woman organized on 30 & 31 October 2017",
    href: "https://mits.ac.in/assets/pdf/assoc/Generating%20Awareness%20About%20Legal%20Rights%20of%20Woman-min.pdf"
  },
  {
    title: "Awareness Programme conducted to the Girl Students of I B.Tech on 13th September 2017",
    href: "https://mits.ac.in/assets/pdf/assoc/Awareness%20Programme%20conducted%20to%20the%20Girl%20Students%20of%20I%20B.Tech-min.pdf"
  },
  {
    title: "International Women’s Day organized by Internal Complaints Committee on 08th March 2017",
    href: "https://mits.ac.in/assets/pdf/assoc/women's%20day%20report.pdf"
  },
  {
    title: "Session on ‘Empowering Women — Strengthening Democracy’ on 2nd March 2017",
    href: "https://mits.ac.in/assets/pdf/assoc/EMPOWERING%20WOMEN%20-min.pdf"
  },
  {
    title: "Interaction session of educating I B.Tech girl students on women related issues on 01 November 2016",
    href: "https://mits.ac.in/assets/pdf/assoc/women%20related%20issues-min.pdf"
  },
  {
    title: "Swasakthi: Empowering Women organized by ICC in association with Rotary Club on 20th October 2016",
    href: "https://mits.ac.in/assets/pdf/assoc/SWASAKTHI-min.pdf"
  }
];

const iccObjectives = [
  "To prevent sexual harassment by promoting gender amity among staff, students and other employees.",
  "To deal with cases of sexual harassment in a time bound manner, aiming at ensuring support services to the victimized, prevention and termination of the harassment.",
  "Recommend appropriate redressal and punitive action against the guilty to the Management.",
  "To comply with the provisions of the Sexual Harassment at Workplace (Prevention, Prohibition and Redressal) Act, 2015 (Act) and to develop and implement a policy against sexual harassment of women at the MITS.",
  "To uphold Women's Right to Protection against Sexual Harassment and for the prevention and redressal of sexual harassment of women.",
  "To evolve a permanent mechanism for the prevention, prohibition and redressal of sexual harassment of women at MITS.",
  "To actively promote a social, physical and psychological environment that will raise awareness about and deter acts of sexual harassment of women.",
  "To undertake all necessary and reasonable steps including the constitution of appropriate committees for purposes of gender sensitization and to conduct enquiries into complaints of sexual harassment."
];

export default function IccView() {
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
            Statutory Bodies &amp; Women Safety • POSH Compliance
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
            Internal Complaints Committee (ICC)
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-3xl mx-auto drop-shadow-sm font-medium">
            Dedicated to ensuring a safe, secure, gender-equitable workplace and zero-tolerance against sexual harassment under the Government of India POSH Act.
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
            <li className="text-[#ffd15c] font-semibold">Internal Complaints Committee</li>
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
            {/* ABOUT PREVENTION OF SEXUAL HARASSMENT AT WORKPLACE */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <Shield className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                      About Prevention of Sexual Harassment at Workplace
                    </h2>
                    <p className="text-xs text-[#0f2a44]/60">
                      MITS (Deemed to be University) Zero Tolerance Policy &amp; Safety Mandate
                    </p>
                  </div>
                </div>

                <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4">
                  <p className="!text-left text-left">
                    Madanapalle Institute of Technology &amp; Science - Deemed to be University is committed to provide a safe workplace for all women employees and girl students. In this direction, MITS has implemented Government of India’s Prevention of Sexual Harassment (POSH) Act of 2013 and as amended in 2016. A committee is in place to address any Sexual harassment related complaints. Girl students or lady faculty members can lodge any sexual harassment complaint:{" "}
                    <a href="mailto:posh@mits.ac.in" className="text-[#b31317] font-semibold underline hover:text-[#8b0000]">
                      posh@mits.ac.in
                    </a>{" "}
                    or contact POSH Cell Coordinator Mrs. U. Vijaya Lakshmi or Principal, MITS.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* THE ACT & SUPREME COURT VISHAKA OBLIGATIONS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <Scale className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                      The ACT
                    </h2>
                    <p className="text-xs text-[#0f2a44]/60">
                      Supreme Court Vishaka Guidelines &amp; Statutory Compliance (AIR 1997 Supreme Court 3011)
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 text-sm md:text-base leading-relaxed !text-left text-left">
                  Having raised the bar of responsibility and accountability in the Vishaka Guidelines, the Supreme Court placed an obligation on workplaces, institutions and those in positions of responsibility, to uphold working women’s fundamental right to equality and dignity at the workplace. Three key obligations were imposed on institutions to meet that standard, namely:
                </p>

                {/* 3 PILLARS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: "Prohibition", desc: "Explicitly forbidding any form of sexual misconduct or gender intimidation across campus." },
                    { label: "Prevention", desc: "Conducting continuous awareness sessions, orientations, and gender sensitization programmes." },
                    { label: "Redress", desc: "Providing a time-bound, confidential, victim-centric inquiry and punitive recommendation mechanism." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 text-left hover:border-[#b31317]/30 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#b31317] shrink-0" />
                        <h4 className="font-display font-bold text-base text-[#0f2a44]">{item.label}</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed !text-left text-left">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-slate-700 text-sm md:text-base leading-relaxed !text-left text-left">
                  In 2013, the Government of India notified the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act (referred to as Act hereinafter). Consistent with the Vishaka judgment, the Act aspires to ensure women’s right to workplace equality, free from sexual harassment through compliance with the above mentioned three elements.
                </p>
              </section>
            </ScrollReveal>

            {/* ABOUT ICC & OBJECTIVES */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <BookOpen className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                      About ICC &amp; Objectives
                    </h2>
                    <p className="text-xs text-[#0f2a44]/60">Anti-Sexual Harassment Cell &amp; Core Mandate</p>
                  </div>
                </div>

                <p className="text-slate-700 text-sm md:text-base leading-relaxed !text-left text-left">
                  In pursuance of guidelines issued by Supreme Court, UGC and as per the provisions of the Sexual Harassment of Women at Workplace (Prevention, Prohibition &amp; Redressal) Act, 2015, Anti-Sexual Harassment Cell (Internal Complaints Committee) is reconstituted to provide for the effective enforcement of the basic human rights of gender equality and guarantee against sexual harassment and abuse, and to provide conducive atmosphere in the campus, to all the staff members, employees and students of MITS.
                </p>

                <div className="pt-2">
                  <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-4 !text-left text-left">
                    Objectives of the Committee
                  </h3>
                  <div className="space-y-3">
                    {iccObjectives.map((obj, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3.5 bg-slate-50/80 border border-slate-200/70 rounded-xl p-4 hover:border-[#b31317]/30 transition-colors"
                      >
                        <span className="w-6 h-6 rounded-full bg-[#b31317] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          {i + 1}
                        </span>
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed !text-left text-left">
                          {obj}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* INTERNAL COMPLAINTS MECHANISM */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                    <Users className="w-5 h-5 text-[#b31317]" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">
                      Internal Complaints Mechanism
                    </h2>
                    <p className="text-xs text-[#0f2a44]/60">Nine-member statutory committee including external civil representative</p>
                  </div>
                </div>

                <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4">
                  <p className="!text-left text-left">
                    MITS - Deemed to be University has constituted Internal Complaint Committee (ICC) in pursuance of guidelines issued by Supreme Court, UGC and as per the provisions of the Sexual Harassment of Women at Workplace (Prevention, Prohibition &amp; Redressal) Act, 2015, Anti-Sexual Harassment Cell (Internal Complaints Committee) is reconstituted to provide for the effective enforcement of the basic human rights of gender equality and guarantee against sexual harassment and abuse, and to provide conducive atmosphere in the campus, to all the staff members, employees and students of MITS.
                  </p>
                  <p className="!text-left text-left font-medium text-[#0f2a44] bg-[#fff8e6] border border-[#ffd15c] rounded-xl p-4">
                    The committee has a team of nine members among them one person is Rotary Club President. The committee works for the prevention, prohibition and redressal of sexual harassment of women at MITS, as MITS has <strong>Zero tolerance towards sexual harassment</strong>.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* POLICY, HANDBOOKS & ORDERS (DOCUMENTS) */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                      <FileDown className="w-5 h-5 text-[#b31317]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44]">
                        Policies, Handbooks &amp; Committee Orders
                      </h3>
                      <p className="text-xs text-[#0f2a44]/60">Official gazette notifications, handbooks and committee appointment orders</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-[#0f2a44] rounded-full">
                    {iccDocuments.length} Documents
                  </span>
                </div>

                <div className="divide-y divide-gray-100">
                  {iccDocuments.map((doc, idx) => (
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

            {/* ACTION PLANS */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                      <Calendar className="w-5 h-5 text-[#b31317]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44]">
                        Annual Action Plans of ICC
                      </h3>
                      <p className="text-xs text-[#0f2a44]/60">Annual strategic roadmaps and activity scheduling</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-[#0f2a44] rounded-full">
                    {actionPlans.length} Action Plans
                  </span>
                </div>

                <div className="divide-y divide-gray-100">
                  {actionPlans.map((doc, idx) => (
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

            {/* EVENTS ORGANIZED */}
            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#b31317]/10 flex items-center justify-center text-[#b31317] shrink-0">
                      <Award className="w-5 h-5 text-[#b31317]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-[#0f2a44]">
                        Events &amp; Awareness Programmes Organized
                      </h3>
                      <p className="text-xs text-[#0f2a44]/60">Sensitization workshops, conferences, induction programs, and reports</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-[#0f2a44] rounded-full">
                    {iccEvents.length} Events
                  </span>
                </div>

                <div className="divide-y divide-gray-100">
                  {iccEvents.map((ev, idx) => (
                    <a
                      key={idx}
                      href={ev.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-3.5 px-3 sm:px-4 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <span className="text-sm sm:text-base text-[#0f2a44] font-medium group-hover:text-[#b31317] transition-colors pr-4">
                        {ev.title}
                      </span>
                      <span className="shrink-0 text-slate-400 group-hover:text-[#b31317] transition-colors p-1">
                        <FileDown className="w-5 h-5 text-slate-500 group-hover:text-[#b31317]" />
                      </span>
                    </a>
                  ))}
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
                    <h3 className="font-semibold text-lg text-[#0f2a44] !text-left">Dr. R. Nidhya</h3>
                    <p className="text-sm text-[#b31317] font-semibold !text-left">Coordinator</p>
                    <p className="text-xs text-slate-500 font-medium">Internal Complaints Committee (ICC)</p>
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
                        <p className="font-semibold text-[#0f2a44] !text-left">E Mail :</p>
                        <a
                          href="mailto:icc@mits.ac.in"
                          className="text-[#b31317] hover:underline font-semibold whitespace-nowrap block"
                        >
                          icc@mits.ac.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                      <Mail className="w-4 h-4 text-[#b31317] shrink-0 mt-1" />
                      <div className="text-left">
                        <p className="font-semibold text-[#0f2a44] !text-left">POSH Lodging Email :</p>
                        <a
                          href="mailto:posh@mits.ac.in"
                          className="text-[#b31317] hover:underline font-semibold whitespace-nowrap block"
                        >
                          posh@mits.ac.in
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
                    { label: "SC & ST Cell", to: "/sc-st-cell" },
                    { label: "Minority Cell", to: "/minoritycell" },
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

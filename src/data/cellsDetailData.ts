/* This file contains detailed information for Cells and Committees */

export interface Member {
  sno?: string;
  name: string;
  designation: string;
  position: string;
  email: string;
}

export interface DocumentLink {
  title: string;
  href: string;
}

export interface ContactInfo {
  name?: string;
  designation?: string;
  address?: string;
  phone?: string;
  email?: string;
}

export interface CellEvent {
  title: string;
  href: string;
  date?: string;
}

export interface CellSection {
  title: string;
  paragraphs: string[];
}

export interface CellDetail {
  id: string;
  name: string;
  aboutText: string[];
  sections?: CellSection[];
  members: Member[];
  documents: DocumentLink[];
  events?: CellEvent[];
  gallery?: string[];
  contacts: ContactInfo[];
  url: string;
}

export const cellsDetailData: Record<string, CellDetail> = {
  "grc": {
    "name": "Grievance Redressal Cell",
    "aboutText": [
      "As per All India Council for Technical Education (AICTE) regulations regarding the establishment of Mechanism for Grievance Redressal in Technical Institutions, a Grievance Redressal Committee (GRC) is formed to address the grievances of the students.",
      "The Vice-Principal – Administration is nominated as the Co-ordinator for the Grievance Redressal Committee. The student grievance can be lodged online at the website https://mitsmadanapalle.edugrievance.com/ or through https://forms.office.com/r/vke9XhMFac or send through e-mail to grc@mits.ac.in or in writing to \"The Coordinator-GRC, MITS, Madanapalle - 517325\". For each grievance, reported to the Committee, an enquiry committee shall be constituted under the Chairmanship of the Principal and he shall nominate the appropriate members.",
      "The Principal will nominate the co-opt members to the Enquiry Committee as per the type and the nature of the grievance and the situation. Coordinator-GRC will chair the meeting for that particular matter.",
      "If any of the complainants are not satisfied with the decision of the Grievance Redressal Committee, they may approach the Ombudsman in JNTUA directly. The Ombudsman shall hear to those grievances and disposes them within one month of receipt for early redressal of grievance.",
      "The online students Grievance Redressal Portal https://samadhaan.ugc.ac.in/ is initiated by the University Grants Commission, and https://www.aicte-india.org/feedback/ by AICTE to facilitate students and staff to lodge his/her grievance and provide a mechanism for redressal of their grievances."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. P. Ramanathan",
        "designation": "Principal",
        "position": "Chairperson",
        "email": "drramanathanp@mits.ac.in"
      },
      {
        "sno": "2",
        "name": "Dr. C. Kamal Basha",
        "designation": "Professor",
        "position": "Member",
        "email": "viceprincipaladministration@mits.ac.in"
      },
      {
        "sno": "3",
        "name": "Dr. S. Shanmuga Priya",
        "designation": "Associate Professor",
        "position": "Member",
        "email": "shanmugapriyas@mits.ac.in"
      },
      {
        "sno": "4",
        "name": "Dr. K. Chandra Mohan",
        "designation": "Associate Professor",
        "position": "Member",
        "email": "drkchandramohan@mits.ac.in"
      },
      {
        "sno": "5",
        "name": "Dr. Rajesh Dagupati",
        "designation": "Assistant Professor",
        "position": "Member",
        "email": "drrajeshd@mits.ac.in"
      },
      {
        "sno": "6",
        "name": "Ms. Ch. Jeshnavi",
        "designation": "Student",
        "position": "Special Invitee",
        "email": "jeshnavichintapalli@gmail.com"
      }
    ],
    "documents": [
      {
        "title": "Ombudsperson by JNTUA",
        "href": "http://www.mits.ac.in/assets/pdf/admin/appointment of - OMBUDSMAN-Nomination.pdf"
      },
      {
        "title": "Student Grievance Redressal Policy",
        "href": "http://www.mits.ac.in/assets/pdf/admin/Student Grievance Redressal Policy-2025-26.pdf"
      },
      {
        "title": "Student Grievance Redressal Committee 2025-26",
        "href": "http://www.mits.ac.in/assets/pdf/admin/Office Order-SGRC Appointment.pdf"
      },
      {
        "title": "Student Grievance Redressal Committee 2024-25",
        "href": "http://www.mits.ac.in/assets/pdf/admin/Student Grievance Redressal Committee.pdf"
      },
      {
        "title": "Grievances Redressed",
        "href": "https://www.mits.ac.in/assets/pdf/admin/GRC.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. C. Kamal Basha",
        "designation": "Co-Ordinator",
        "email": "grc@mits.ac.in",
        "phone": "Phone :\n+91-8571-280255; 280706\n",
        "address": "Madanapalle Institute of Technology & Science"
      }
    ],
    "id": "grc",
    "url": "https://mits.ac.in/grc"
  },
  "anti-ragging": {
    "name": "Anti-Ragging Cell",
    "aboutText": [
      "MITS - Deemed to be University, facilities have zero tolerance for ragging and proud to state that MITS is ragging free. Students are informed to follow the act and ensure a ragging free campus.",
      "To ensure compliance as per the UGC Regulations on curbing menace of ragging in higher educational institutions, 2009, the Anti-Ragging Committee is nominated and headed by the Head of the institution, and comprises of representatives as prescribed by the UGC Regulations, including civil and police administration, local media, Non-Government Organizations involved in youth activities and representatives from the institute.",
      "The committee will ensure compliance with the provisions of the Anti-ragging regulations; monitor and oversee the performance of the Anti-Ragging Squad in prevention of ragging in the institution."
    ],
    "members": [],
    "documents": [
      {
        "title": "Anti-Ragging Committee 2026-27",
        "href": "https://mits.ac.in/assets/pdf/admin/Anti Ragging Proceedings-scan-2026.pdf"
      },
      {
        "title": "Anti-Ragging Cell with effective from 07-08-2026",
        "href": "https://mits.ac.in/assets/pdf/admin/Antiragging-2026-27.pdf"
      },
      {
        "title": "Anti-Ragging Cell Policy (MITSDTBU) 2026-27",
        "href": "https://mits.ac.in/assets/pdf/admin/AR-MITSDTBU-Policy 2026-27.pdf"
      },
      {
        "title": "Anti-Ragging Cell Standard Operating Procedure",
        "href": "https://mits.ac.in/assets/pdf/admin/SOP - Anti-Ragging.pdf"
      },
      {
        "title": "Anti-Ragging Committee 2025-26",
        "href": "https://mits.ac.in/assets/pdf/admin/Anti Ragging Committee Cells Squad-2025-26.pdf"
      },
      {
        "title": "Anti-Ragging Committee 2024-25",
        "href": "https://mits.ac.in/assets/pdf/admin/Anti-Ragging Committee 2024-25.pdf"
      },
      {
        "title": "Anti-Ragging Committee 2023-24",
        "href": "https://mits.ac.in/assets/pdf/admin/AntiRagging Committee - 2023-24.pdf"
      },
      {
        "title": "Anti-Ragging Committee 2022-23",
        "href": "https://mits.ac.in/public/uploads/antiraggging/Anti-ragging 2022-23.pdf"
      },
      {
        "title": "Anti-Ragging Committee 2021-22",
        "href": "https://mits.ac.in/public/uploads/antiraggging/Anti Ragging 2021-22.pdf"
      },
      {
        "title": "Anti-Ragging Committee 2020-21",
        "href": "https://mits.ac.in/public/uploads/antiraggging/anti-ragging 2020.pdf"
      },
      {
        "title": "Anti-Ragging Committee 2019-20",
        "href": "https://mits.ac.in/public/uploads/antiraggging/anti-ragging 2019.pdf"
      },
      {
        "title": "Anti-Ragging Activities 2019-20",
        "href": "https://mits.ac.in/public/uploads/antiraggging/2019-20-Anti-Ragging.pdf"
      },
      {
        "title": "Anti-Ragging Committee 2018-19",
        "href": "https://mits.ac.in/public/uploads/antiraggging/anti-ragging 2018.pdf"
      },
      {
        "title": "Anti-Ragging Activities 2018-19",
        "href": "https://mits.ac.in/public/uploads/antiraggging/2018-19-Anti-Ragging.pdf"
      },
      {
        "title": "Anti-Ragging Committee 2017-18",
        "href": "https://mits.ac.in/public/uploads/antiraggging/anti-ragging.pdf"
      },
      {
        "title": "Anti-Ragging Activities 2017-18",
        "href": "https://mits.ac.in/public/uploads/antiraggging/2017-18-Anti-Ragging.pdf"
      },
      {
        "title": "Anti-Ragging Committee 2016-17",
        "href": "https://mits.ac.in/public/uploads/antiraggging/2016-17-Anti-Ragging-Proceedings.pdf"
      },
      {
        "title": "Anti-Ragging Activities 2016-17",
        "href": "https://mits.ac.in/public/uploads/antiraggging/2016-17-Anti-Ragging.pdf"
      },
      {
        "title": "Anti-Ragging Committee 2015-16",
        "href": "https://mits.ac.in/public/uploads/antiraggging/2015-16-Anti-Ragging-Proceedings.pdf"
      },
      {
        "title": "Anti-Ragging Activities 2015-16",
        "href": "https://mits.ac.in/public/uploads/antiraggging/2015-16-Anti-Ragging.pdf"
      },
      {
        "title": "Anti-Ragging Committee 2014-15",
        "href": "https://mits.ac.in/public/uploads/antiraggging/2014-15-Anti-Ragging-Proceedings.pdf"
      },
      {
        "title": "Anti-Ragging Activities 2014-15",
        "href": "https://mits.ac.in/public/uploads/antiraggging/2014-15-Anti-Ragging.pdf"
      },
      {
        "title": "Student Affidavit",
        "href": "https://mits.ac.in/public/uploads/antiraggging/student affidavit.pdf"
      },
      {
        "title": "Parent Affidavit",
        "href": "https://mits.ac.in/public/uploads/antiraggging/parent affidavit.pdf"
      },
      {
        "title": "Summary of UGC Regulations",
        "href": "https://mits.ac.in/public/uploads/antiraggging/summary of ugc regulation.pdf"
      },
      {
        "title": "Summary of the Supreme Court Judgment",
        "href": "https://mits.ac.in/public/uploads/antiraggging/Summary of the Supreme court Judgment.pdf"
      },
      {
        "title": "Anti-Ragging Notice",
        "href": "https://mits.ac.in/public/uploads/antiraggging/AICTE-anti_ragging_notice.pdf"
      },
      {
        "title": "AP Prohibition of Ragging in All Educational Institutions Rules, 2002",
        "href": "https://mits.ac.in/public/uploads/antiraggging/AP Prohibition of Ragging in All Educational Institutions Rules 2002.pdf"
      }
    ],
    "events": [
      {
        "title": "An \"Anti-Ragging Week\" was organized on 13th of August 2026.",
        "href": "https://mits.ac.in/assets/pdf/assoc/Anti-Ragging Week-2026.pdf"
      },
      {
        "title": "An \"Anti-Ragging Day Rally\" was organized on 12th August 2026.",
        "href": "https://mits.ac.in/assets/pdf/assoc/Anti-Ragging Day Rally-2026.pdf"
      },
      {
        "title": "An \"Anti-Ragging Day\" was organized on 12th August 2026.",
        "href": "https://mits.ac.in/assets/pdf/admin/Anti-Ragging Day – Awareness Program.pdf"
      },
      {
        "title": "Anti-Ragging Week Celebrations - 12th to 18th August 2026",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on Anti-Ragging Week Celebrations - 12-18 August 2026.pdf"
      },
      {
        "title": "An \"Anti-Ragging Week\" was organized from 12th to 18th August 2025.",
        "href": "https://mits.ac.in/assets/pdf/admin/Anti-Ragging Week 2025.pdf"
      },
      {
        "title": "An \"Anti-Ragging Day\" was organized on 12th August 2025.",
        "href": "https://mits.ac.in/assets/pdf/admin/Anti-Ragging Day-Rally 2025-26.pdf"
      },
      {
        "title": "An Awareness programme on Anti-Ragging by Shri. K. Ramesh, Circle - Inspector of Police on 5th November 2024.",
        "href": "https://mits.ac.in/assets/pdf/admin/Anti-Ragging Awareness program 05-11-2024.pdf"
      },
      {
        "title": "An Anti-Ragging Day was organized on 12th August 2024.",
        "href": "https://mits.ac.in/assets/pdf/admin/Anti-Ragging Day - 12th August 2024.pdf"
      },
      {
        "title": "An Anti-Ragging Week was organized on 12th & 17th August 2024.",
        "href": "https://mits.ac.in/assets/pdf/admin/Report of Anti-Ragging Week Celebration - 12-17, August 2024.pdf"
      },
      {
        "title": "An Awareness programs on Anti-Ragging to the freshers of B.Tech, MBA and MCA in all the venues of Student Induction Program for the academic year 2024-25 was conducted at MITS.",
        "href": "https://mits.ac.in/assets/pdf/admin/Report on Awareness on Anti Ragging  to Freshers (B.Tech., M.B.A and M.C.A) 2024-25 in Stident Induction Program.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Help Line",
        "designation": "Anti-Ragging Helpline",
        "email": "antiragginghelpline@mits.ac.in",
        "phone": "Phone :\n+91 8008500767\n",
        "address": "Madanapalle Institute of Technology & Science"
      },
      {
        "name": "Dr. Chandra Mohan K",
        "designation": "Coordinator - Anti-Ragging Squad",
        "email": "",
        "phone": "Phone :\n+91 9100973269\n",
        "address": "Madanapalle Institute of Technology & Science"
      },
      {
        "name": "Dr.Subba Rao A",
        "designation": "Additional Coordinator - Anti-Ragging Squad",
        "email": "",
        "phone": "Phone :\n+91 9160020473\n",
        "address": "Madanapalle Institute of Technology & Science"
      },
      {
        "name": "Dr. G. Hemalatha",
        "designation": "Additional Coordinator (Women) - Anti-Ragging Squad",
        "email": "",
        "phone": "Phone :\n+91 9629966218\n",
        "address": "Madanapalle Institute of Technology & Science"
      },
      {
        "name": "Mrs. Vijaya Lakshmi U",
        "designation": "Associate Director - International Relations & Institute Counsellor - MITS",
        "email": "vijayalakshmiu@mits.ac.in",
        "phone": "Phone :\n+91 9100600773\n",
        "address": "Madanapalle Institute of Technology & Science"
      },
      {
        "name": "Dr.Chennaiah R",
        "designation": "Medical Officer",
        "email": "",
        "phone": "",
        "address": "Madanapalle Institute of Technology & Science"
      }
    ],
    "id": "anti-ragging",
    "url": "https://mits.ac.in/anti-ragging"
  },
  "icc": {
    "name": "Internal Complaints Cell",
    "aboutText": [
      "Madanapalle Institute of Technology & Science - Deemed to be University is committed to provide a safe workplace for all women employees and girl students. In this direction, MITS has implemented Government of India’s Prevention of Sexual Harassment (POSH) Act of 2013 and as amended in 2016. A committee is in place to address any Sexual harassment related complaints. Girl students or lady faculty members can lodge any sexual harassment complaint:",
      "Having raised the bar of responsibility and accountability in the Vishaka Guidelines, the Supreme Court placed an obligation on workplaces, institutions and those in positions of responsibility, to uphold working women’s fundamental right to equality and dignity at the workplace. Three key obligations were imposed on institutions to meet that standard, namely:4 (AIR 1997 Supreme Court 3011)",
      "In 2013, the Government of India notified the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act (referred to as Act hereinafter). Consistent with the Vishaka judgment, the Act aspires to ensure women’s right to workplace equality, free from sexual harassment through compliance with the above mentioned three elements.",
      "In pursuance of guidelines issued by Supreme Court, UGC and as per the provisions of the Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act, 2015, Anti-Sexual Harassment Cell (Internal Complaints Committee) is reconstituted to provide for the effective enforcement of the basic human rights of gender equality and guarantee against sexual harassment and abuse, and to provide conducive atmosphere in the campus, to all the staff members, employees and students of MITS.",
      "To prevent sexual harassment by promoting gender amity among staff, students and other employees.",
      "MITS - Deemed to be University has constituted Internal Complaint Committee (ICC) in pursuance of guidelines issued by Supreme Court, UGC and as per the provisions of the Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act, 2015, Anti-Sexual Harassment Cell (Internal Complaints Committee) is reconstituted to provide for the effective enforcement of the basic human rights of gender equality and guarantee against sexual harassment and abuse, and to provide conducive atmosphere in the campus, to all the staff members, employees and students of MITS. The committee has a team of nine members among them one person is Rotatory club president. The committee works for the prevention, prohibition and redressed of sexual harassment of women at MITS, as MITS has Zero tolerance towards sexual harassment."
    ],
    "members": [],
    "documents": [
      {
        "title": "MITS Zero Tolerance Policy",
        "href": "https://mits.ac.in/assets/pdf/admin/ICC-POSH.pdf"
      },
      {
        "title": "MITS ICC Handbook",
        "href": "https://mits.ac.in/assets/pdf/admin/MITS ICC Handbook.pdf"
      },
      {
        "title": "The Gazette of India notification on POSH - 2013 & 2016",
        "href": "http://www.mits.ac.in/assets/pdf/admin/1.1.Sexual-Harassment-at-Workplace-Act.pdf"
      },
      {
        "title": "ICC Committee Members 2025-26",
        "href": "https://mits.ac.in/assets/pdf/assoc/ICC-Committee-Order 2025-26.pdf"
      },
      {
        "title": "ICC Committee Members 2024-25",
        "href": "https://mits.ac.in/assets/pdf/assoc/ICC -Office Order- sep 2024.pdf"
      },
      {
        "title": "ICC Committee Members 2023-24",
        "href": "https://mits.ac.in/assets/pdf/assoc/Internal Complaints Committee 2023-24.pdf"
      },
      {
        "title": "Academic Year 2023-24",
        "href": "https://mits.ac.in/assets/pdf/admin/ICC-2023-24.pdf"
      },
      {
        "title": "Handbook on Sexual Harassment of Women at Workplace",
        "href": "https://mits.ac.in/assets/pdf/assoc/Handbook%20on%20Sexual%20Harassment%20of%20Women%20at%20Workplace.pdf"
      },
      {
        "title": "Working Rules for Internal Complaints Committee",
        "href": "https://mits.ac.in/assets/pdf/assoc/ICC-POSH.pdf"
      },
      {
        "title": "Internal Complaints Committee 2023-24",
        "href": "https://mits.ac.in/assets/pdf/assoc/Internal Complaint Committee 2024.pdf"
      },
      {
        "title": "Constitution of Internal Complaints Committee",
        "href": "https://mits.ac.in/assets/pdf/assoc/ICC%20Committee.pdf"
      },
      {
        "title": "Please click here for AICTE Schemes for Women Empowerment and Girl Students",
        "href": "http://www.aicte-india.org/opportunities/students/facilites"
      },
      {
        "title": "Please click here for Action plan of ICC for the Academic year 2024-25",
        "href": "https://mits.ac.in/assets/pdf/assoc/icc-ac-2024-25.pdf"
      },
      {
        "title": "Please click here for Action plan of ICC for the Academic year 2022-23",
        "href": "https://mits.ac.in/assets/pdf/assoc/ICC ACTION PLAN 2022-23.pdf"
      },
      {
        "title": "Please click here for Action plan of ICC for the Academic year 2021-22",
        "href": "https://mits.ac.in/assets/pdf/assoc/ICC ACTION PLAN 2021-22.pdf"
      },
      {
        "title": "Please click here for Action plan of ICC for the Academic year 2020-21",
        "href": "https://mits.ac.in/assets/pdf/assoc/Action%20plan%20of%20ICC%20for%20the%20Academic%20year%202020-21-min.pdf"
      },
      {
        "title": "Please click here for Action plan of ICC for the Academic year 2019-20",
        "href": "https://mits.ac.in/assets/pdf/assoc/Action%20plan%20of%20ICC%20for%20the%20Academic%20year%202019-20-min.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. R. Nidhya",
        "designation": "Coordinator",
        "address": "Madanapalle Institute of Technology & Science Deemed to be University, Madanapalle-Kadiri Road, Kurabalakota Mandal, Madanapalle-517325 Andhra Pradesh, India",
        "phone": "+91-8571-280255; 280706",
        "email": "icc@mits.ac.in"
      }
    ],
    "id": "icc",
    "url": "https://mits.ac.in/icc",
    "sections": [
      {
        "title": "About Prevention of Sexual Harrasment at Work Place",
        "paragraphs": [
          "Madanapalle Institute of Technology & Science - Deemed to be University is committed to provide a safe workplace for all women employees and girl students. In this direction, MITS has implemented Government of India's Prevention of Sexual Harassment (POSH) Act of 2013 and as amended in 2016. A committee is in place to address any Sexual harassment related complaints. Girl students or lady faculty members can lodge any sexual harassment complaint: posh@mits.ac.in or contact POSH Cell Coordinator Mrs. U. Vijaya Lakshmi or Principal, MITS."
        ]
      },
      {
        "title": "The ACT",
        "paragraphs": [
          "Having raised the bar of responsibility and accountability in the Vishaka Guidelines, the Supreme Court placed an obligation on workplaces, institutions and those in positions of responsibility, to uphold working women's fundamental right to equality and dignity at the workplace. Three key obligations were imposed on institutions to meet that standard, namely: (AIR 1997 Supreme Court 3011) ◆ Prohibition ◆ Prevention ◆ Redress",
          "In 2013, the Government of India notified the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act (referred to as Act hereinafter). Consistent with the Vishaka judgment, the Act aspires to ensure women's right to workplace equality, free from sexual harassment through compliance with the above mentioned three elements."
        ]
      },
      {
        "title": "About ICC",
        "paragraphs": [
          "In pursuance of guidelines issued by Supreme Court, UGC and as per the provisions of the Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act, 2015, Anti-Sexual Harassment Cell (Internal Complaints Committee) is reconstituted to provide for the effective enforcement of the basic human rights of gender equality and guarantee against sexual harassment and abuse, and to provide conducive atmosphere in the campus, to all the staff members, employees and students of MITS."
        ]
      },
      {
        "title": "Objectives of the Committee",
        "paragraphs": [
          "To prevent sexual harassment by promoting gender amity among staff, students and other employees.",
          "To deal with cases of sexual harassment in a time bound manner, aiming at ensuring support services to the victimized, prevention and termination of the harassment.",
          "Recommend appropriate redressal and punitive action against the guilty to the Management.",
          "To comply with the provisions of the Sexual Harassment at Workplace (Prevention, Prohibition and Redressal) Act, 2015 (Act) and to develop and implement a policy against sexual harassment of women at the MITS.",
          "To uphold Women's Right to Protection against Sexual Harassment and for the prevention and redressal of sexual harassment of women.",
          "To evolve a permanent mechanism for the prevention, prohibition and redressal of sexual harassment of women at MITS.",
          "To actively promote a social, physical and psychological environment that will raise awareness about and deter acts of sexual harassment of women.",
          "To undertake all necessary and reasonable steps including the constitution of appropriate committees for purposes of gender sensitization and to conduct enquiries into complaints of sexual harassment."
        ]
      },
      {
        "title": "Internal Complaints Mechanism",
        "paragraphs": [
          "MITS - Deemed to be University has constituted Internal Complaint Committee (ICC) in pursuance of guidelines issued by Supreme Court, UGC and as per the provisions of the Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act, 2015, Anti-Sexual Harassment Cell (Internal Complaints Committee) is reconstituted to provide for the effective enforcement of the basic human rights of gender equality and guarantee against sexual harassment and abuse, and to provide conducive atmosphere in the campus, to all the staff members, employees and students of MITS. The committee has a team of nine members among them one person is Rotatory club president. The committee works for the prevention, prohibition and redressed of sexual harassment of women at MITS, as MITS has Zero tolerance towards sexual harassment."
        ]
      }
    ],
    "events": [
      {
        "title": "A Sensitization Programme on \"Ensuring a Safe Campus-Understanding POSH\" was organized by Internal Complaints Committee on 20th December 2025. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/Ensuring a Safe Campus-Understanding POSH.pdf"
      },
      {
        "title": "A Session conducted on \"GURU-DAKSHA Faculty Induction Program 2025-26\" was organized by Internal Complaints Committee on 15th November 2025 Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/Faculty Induction_NOV 2025-min.pdf"
      },
      {
        "title": "An Awareness Program on \"Building Gender Sensitivity: Towards an inclusive Campus\" was organized by Women Empowerment Cell in Collaboration with Grievance Redressal Cell and Internal Complaints Committee on 27th & 28th October 2025 Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/I B.tech_OCT 2025-min.pdf"
      },
      {
        "title": "An \"Induction Program for I MBA was organized by Internal Complaints Cell (ICC) on 12th September 2025 Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/PG  Induction Program_Sep2025-min.pdf"
      },
      {
        "title": "An \"Orientation Program for I B. Tech on Gender Sensitization, Socialization and gender-based violence\" was organized by Internal Complaints Cell (ICC) on 21st August 2025. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/UG Induction Program_Aug2025-min.pdf"
      },
      {
        "title": "\"Case study discussion- Analyze real-life cases of workplace harassment\" was organized by Internal Complaint Cell on 10.02.2025 Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/01 A Report on “Case study discussion- Analyze real-life cases of workplace harassment.” Organized by Internal Complaint Cell on 10.02.2025.pdf"
      },
      {
        "title": "\"National Girl Child Day\" was organized by Internal Complaint Cell on 24.01.2025 Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/02 A Report on “National Girl Child Day” Organized by Internal Complaint Cell on 24.01.2025.pdf"
      },
      {
        "title": "\"Story telling Session\" was organized by Internal Complaint Cell on19.12.2024 Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/03 A Report on “Story telling Session” Organized by Internal Complaint Cell on19.12.2024.pdf"
      },
      {
        "title": "\"Role play Handling uncomfortable situations\" was organized by Internal Complaint Cell on 14.11.2024 Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/04 A Report on “Role play Handling uncomfortable situations” Organized by Internal Complaint Cell on 14.11.2024.pdf"
      },
      {
        "title": "\"Boosting Self-Esteem in Professional Set up\" was organized by Internal Complaint Committee on 25.10.2024 Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/05 A Report on “Boosting Self-Esteem in Professional Set up” Organized by Internal Complaint Committee on 25.10.2024.pdf"
      },
      {
        "title": "\"Orientation Program for MBA on Internal Complaint Cell\" was organized by Internal Complaint Cell on 27.09.2024 Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/06 A Report on “Orientation Program for MBA on Internal Complaint Cell” Organized by Internal Complaint Cell on 27.09.2024.pdf"
      },
      {
        "title": "\"Orientation Program for MCA on Internal Complaint Cell\" was organized by Internal Complaint Cell on 26.09.2024 Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/07 A Report on “Orientation Program for MCA on Internal Complaint Cell” Organized by Internal Complaint Cell on 26.09.2024.pdf"
      },
      {
        "title": "\"Orientation Program for I B.Tech on Internal Complaint Cell\" was organized by Internal Complaint Cell on 13.08.2024 Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/08 A Report on “Orientation Program for I B.Tech on Internal Complaint Cell” Organized by Internal Complaint Cell on 13.08.2024.pdf"
      },
      {
        "title": "\"Orientation Program for I B.Tech on Internal Complaint Cell\" was organized by Internal Complaint Cell on 06.08.2024 Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/09 A Report on “Orientation Program for I B.Tech on Internal Complaint Cell” Organized by Internal Complaint Cell on 06.08.2024.pdf"
      },
      {
        "title": "\"Being Socially Responsible\" was organized by Internal Complaint Cell on 26.07.2024 Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/10 A Report on “Being Socially Responsible” Organized by Internal Complaint Cell on 26.07.2024.pdf"
      },
      {
        "title": "\"International Women's Day\" was organized by Internal Complaint Committee of MITS on 7th March, 2024. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/International Womens Day-2024.pdf"
      },
      {
        "title": "\"National Wear Red Day\" was organized by Internal Complaint Committee of MITS on 2nd February 2024. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/Red Wear Day.pdf"
      },
      {
        "title": "National Girl Child Day was organized by Internal Complaint Committee of MITS on 24th January 2024. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/NATIONAL GIRL CHILD DAY ON 24 JANUARY 2024.pdf"
      },
      {
        "title": "A Rendezvous with Doctor Dr. Prathima Gupta organized by Internal Complaint Committee of MITS on 24th November 2023. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/Rendezvous with Doctor.pdf"
      },
      {
        "title": "An Orientation Program for MCA Students was organised by Internal Complaint Committee of MITS on 27th October 2023. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/MCA-INDUCTION REPORT-23.pdf"
      },
      {
        "title": "An Orientation Program for MBA Students was organised by Internal Complaint Committee of MITS on 25th October 2023. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/MBA-INDUCTION REPORT-23.pdf"
      },
      {
        "title": "An Orientation Program for B.Tech Students was organised by Internal Complaint Committee of MITS on 14th September 2023. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/B.TECH-INDUCTION 2 -23.pdf"
      },
      {
        "title": "An Orientation Program for B.Tech Students was organised by Internal Complaint Committee of MITS on 13th September 2023. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/B.TECH- INDUCTION 1-23.pdf"
      },
      {
        "title": "\"International Women's Day\" was organized by ICC of MITS on 8th March, 2023. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/International Womens Day 2023.pdf"
      },
      {
        "title": "\"International Women's Day\" was organized by ICC of MITS on 8th March, 2022. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/REPORT ON INTERNATIONAL WOMEN_S DAY 2022-min.pdf"
      },
      {
        "title": "Personality Development for PG Girl students\" organized by Internal Complaint Committee of MITS on 10th February 2022 . Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/Personality Development for PG Girl students-min.pdf"
      },
      {
        "title": "\"International Women's Day\" was organized by ICC of MITS on 8th March, 2021. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/REPORT ON INTERNATIONAL WOMEN_S DAY 2021.pdf"
      },
      {
        "title": "\"Role of women in containing the spread of Covid-19 (An experiential deliberation)\" was organized by Internal Complaints Committee of MITS on 12-11- 2020. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/corona.pdf"
      },
      {
        "title": "\"International Women's Day\" was organized by ICC of MITS on 8th March, 2020. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/REPORT ON INTERNATIONAL WOMEN_S DAY 2020-min.pdf"
      },
      {
        "title": "National Girl Child Day was organized by ICC on 24th January 2020. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/national girl child day 20.pdf"
      },
      {
        "title": "An International Day of the Girl Child was organized by ICC on 11th October 2019. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/International Day of Girl Child-min.pdf"
      },
      {
        "title": "Rendezvous with Doctor was organized by ICC on 22nd August 2019. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on Rendezvous with Dr Prathima Gupta organised by Internal Complaint-min.pdf"
      },
      {
        "title": "International Women's Day was organized by Internal Complaints Committee on 8th March 2019. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/Womens Day Celebrations 2019.pdf"
      },
      {
        "title": "Competitions like Pick and Speak, Essay Writing and Poetry were held from 25th to 28th February 2019. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on Competitions like Pick and Speak.pdf"
      },
      {
        "title": "National Girl Child Day was conducted by Internal Complaints Committee on 24th January 2019. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/NATIONAL GIRL-CHILD DAY-min.pdf"
      },
      {
        "title": "Workplace Treatment of Women on 8th October 2018. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on Workplace Treatment of Women.pdf"
      },
      {
        "title": "Projection of Women in TV Ads on 28th September 2018. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on Projection of Women in TV Ads.pdf"
      },
      {
        "title": "Social Empowerment by Internal Complaints Committee of MITS on 17th September 2018. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report of Social Empowerment.pdf"
      },
      {
        "title": "Personality Development Program for PG Students on 28th March 2018. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on Personality Development Program for PG Students.pdf"
      },
      {
        "title": "International Women's Day was organized by Internal Complaints Committee on 8th March 2018. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/International Women Day 2018-min.pdf"
      },
      {
        "title": "Generating Awareness About Legal Rights of Woman was organized by Internal Complaints Committee on 30 & 31 October 2017. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/Generating Awareness About Legal Rights of Woman-min.pdf"
      },
      {
        "title": "Awareness Programme conducted to the Girl Students of I B.Tech was organized by Internal Complaints Committee on 13th September 2017. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/Awareness Programme conducted to the Girl Students of I B.Tech-min.pdf"
      },
      {
        "title": "International Women's Day was organized by Internal Complaints Committee on 08th March 2017. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/women"
      },
      {
        "title": "A session on the theme: 'Empowering Women &mdash; Strengthening Democracy' was organized by Department of Management Studies on 2nd March 2017 for the women staff and students. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/EMPOWERING WOMEN -min.pdf"
      },
      {
        "title": "Interaction session of educating I B.Tech girl students on women related issues, was organized by Internal Complaints Committee on 01 November 2016. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/women related issues-min.pdf"
      },
      {
        "title": "Internal Complaint Committee of MITS organized Swasakthi: Empowering Women on 20th October 2016 in association with Rotary Club, Madanapalle. Click here for Report on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/SWASAKTHI-min.pdf"
      }
    ]
  },
  "pcc": {
    "name": "Psychological Counselling Cell",
    "aboutText": [
      "In today's ever-changing complex world, educational institutions play a crucial role in shaping young minds by preparing them for future success. Academic achievement is undeniably important, but it is equally vital to address students' emotional and mental well-being. Hence, MITS initiated Counselling services through Mrs. Vijaya Lakshmi, Institutional Counsellor, who completed Masters in Guidance & Counselling in NCERT, Mysore. She has been rendering Mental Health & Counselling services to MITS students. Psychological problems, parental counselling, interpersonal relationship, stress related problems are dealt with. How to promote mental health, significance of yoga and meditation, healthy habits and positive thinking and trends in the life style etc are being addressed in the campus. She also coordinates with Dr. Sujay Nama an External Expert Counsellor & Psychiatrist to handle the vulnerable cases.",
      "◆ To empower the students in recognizing their unique potentials and skills"
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairman",
        "email": "vicechancellor@mits.ac.in"
      },
      {
        "sno": "2",
        "name": "Dr. C. Kamal Basha",
        "designation": "Vice Principal - Administration",
        "position": "Member",
        "email": "viceprincipaladministration@mits.ac.in"
      },
      {
        "sno": "3",
        "name": "Dr. K. Chandra Mohan",
        "designation": "Associate Professor",
        "position": "Member",
        "email": "drkchandramohan@mits.ac.in"
      },
      {
        "sno": "4",
        "name": "Dr. K. Dasthagiri Basha",
        "designation": "Psychologist",
        "position": "Member",
        "email": "drdasthagiribashak@mits.ac.in"
      },
      {
        "sno": "5",
        "name": "Dr. Sujay Nama",
        "designation": "External Expert Counsellor (Psychiatrist)",
        "position": "Member",
        "email": "dr_sujay@yahoo.com"
      },
      {
        "sno": "6",
        "name": "Mr. Jaswanth Muthineedi",
        "designation": "Student (3rd Year AI-B)",
        "position": "Member",
        "email": "21691A3168@mits.ac.in"
      },
      {
        "sno": "7",
        "name": "Ms. Lakshmi Sree Kota",
        "designation": "Student (3rd Year AI-B)",
        "position": "Member",
        "email": "21691A3183@mits.ac.in"
      },
      {
        "sno": "8",
        "name": "Mr. Abubakar Siddiq Khan P",
        "designation": "Student (3rd Year Civil)",
        "position": "Member",
        "email": "21691A0101@mits.ac.in"
      },
      {
        "sno": "9",
        "name": "Mr. Prasad",
        "designation": "Parent",
        "position": "Member",
        "email": "prasadfour@gmail.com"
      },
      {
        "sno": "10",
        "name": "Dr. M. Parvathi",
        "designation": "Assistant Professor - Department of English & Foreign Languages",
        "position": "Member",
        "email": "parvathim@mits.ac.in"
      },
      {
        "sno": "11",
        "name": "Mrs. U. Vijaya Lakshmi",
        "designation": "Institute Counsellor",
        "position": "Member Secretary",
        "email": "vijayalakshmiu@mits.ac.in"
      }
    ],
    "documents": [
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/SSC Cell-2025-26.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/SSC-2025-26.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/Institute Counsellor Office Order.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/Action taken_counselling_30th nov 2019.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/Psychological Counselling Committee Office Order.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/MoM-01 & 02.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/Acknowledgement-Office Order - Student Counsellor.pdf"
      },
      {
        "title": "Download Brochure",
        "href": "https://mits.ac.in/public/uploads/static-pdf/MITS Deemed to be University Brochure 2026.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Mrs. U. Vijaya Lakshmi",
        "designation": "Coordinator - Associate Director-International Relations & Institute Counsellor - MITS",
        "email": "vijayalakshmiu@mits.ac.in",
        "phone": "Phone :\n+91-9100600773, 8571-280255, 280706\n",
        "address": "Madanapalle Institute of Technology & Science, Deemed to be University, Madanapalle-Kadiri Road, kurabalakota Mandal, Madanapalle-517325, Andhra Pradesh, India"
      }
    ],
    "id": "pcc",
    "url": "https://mits.ac.in/pcc"
  },
  "swc": {
    "name": "Student Welfare Cell",
    "aboutText": [],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairperson",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. P. Athahar",
        "designation": "Senior Manager – Student Affairs",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Ms. Raga Deepthi",
        "designation": "Assistant Administrative Officer (Students Welfare)",
        "position": "Member Secretary",
        "email": ""
      },
      {
        "sno": "4",
        "name": "Dr. P. Ramanathan",
        "designation": "Vice-Principal (Administration)",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "5",
        "name": "Dr. K. Arul kumar",
        "designation": "Associate Professor, Dept. of EEE",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "Request Form",
        "href": "https://mits.ac.in/pdf/2018-19-Request-Form.docx"
      },
      {
        "title": "No Dues Form",
        "href": "https://mits.ac.in/pdf/No-due-form.doc"
      },
      {
        "title": "Student Affidavit",
        "href": "https://mits.ac.in/pdf/student-affidavit.pdf"
      },
      {
        "title": "Parent Affidavit",
        "href": "https://mits.ac.in/pdf/parent-affidavit.pdf"
      },
      {
        "title": "Attendance Declaration",
        "href": "https://mits.ac.in/pdf/DECLARATION-UNDERTAKING-FROM-THE-STUDENT.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. P. Athahar",
        "designation": "Senior Manager – Student Affairs",
        "address": "Madanapalle Institute of Technology & Science, Deemed to be University, Madanapalle-Kadiri Road, kurabalakota Mandal, Madanapalle-517325, Andhra Pradesh, India",
        "phone": "+91-8571-280255",
        "email": "sm.studentaffairs@mits.ac.in"
      },
      {
        "name": "Ms. Raga Deepthi",
        "designation": "Assistant Administrative Officer (Students Welfare)",
        "address": "Madanapalle Institute of Technology & Science, Deemed to be University, Madanapalle-Kadiri Road, kurabalakota Mandal, Madanapalle-517325, Andhra Pradesh, India",
        "phone": "+91-8571-280255",
        "email": "swo@mits.ac.in"
      }
    ],
    "gallery": [
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-05-19 at 8.17.02 AM.jpeg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-05-19 at 8.55.26 AM.jpeg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-05-07 at 10.05.39 AM.jpeg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-05-15 at 8.05.06 AM (1).jpeg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-05-07 at 10.05.39 AM (1).jpeg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-05-15 at 8.05.04 AM (1).jpeg",
      "https://mits.ac.in/public/uploads/gallery/swc-2026.jpg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-04-01 at 3.41.53 PM.jpeg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-04-06 at 8.07.31 AM (1).jpeg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-04-06 at 8.07.31 AM.jpeg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-04-06 at 8.07.32 AM (1).jpeg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-04-06 at 8.07.32 AM (2).jpeg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-04-06 at 8.07.32 AM.jpeg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-04-06 at 8.07.33 AM (1).jpeg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-04-06 at 8.07.33 AM (2).jpeg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-04-06 at 8.07.33 AM.jpeg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-04-06 at 8.07.34 AM.jpeg",
      "https://mits.ac.in/public/uploads/gallery/886a22fa-24a3-4f01-897e-2b7c1fa67cc6.jpg",
      "https://mits.ac.in/public/uploads/gallery/aa98f6e3-3f9b-471d-942f-1594d8244609.jpg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-03-05 at 2.51.59 PM.jpg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-03-05 at 2.52.01 PM.jpg",
      "https://mits.ac.in/public/uploads/gallery/111swc.jpg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-03-09 at 3.43.27 PM.jpg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-03-09 at 3.43.28 PM (3).jpg",
      "https://mits.ac.in/public/uploads/gallery/WhatsApp Image 2026-03-09 at 3.43.28 PM.jpg"
    ],
    "id": "swc",
    "url": "https://mits.ac.in/swc",
    "sections": [
      {
        "title": "MITS Scholarship Provision & Scope",
        "paragraphs": [
          "Madanapalle Institute of Technology & Science (MITS), Deemed to be University, firmly believes that education is the greatest enabler of social and economic progress. In pursuit of its mission to promote inclusive excellence, MITS has established a comprehensive scholarship policy designed to support and encourage students from diverse backgrounds, ensuring that financial constraints do not impede access to quality education.",
          "This policy reflects the University's commitment to provide financial assistance to students with academic potential and economic need, foster inclusion by supporting students from underrepresented, marginalized or economically disadvantaged backgrounds by recognizing their academic achievement with exemplary conduct and holistic development.",
          "This policy applies to all students admitted to various full-time programs of MITS Deemed to be University and covers institutional, governmental, and externally funded scholarships administered through the University."
        ]
      },
      {
        "title": "MITS Support and Guidance for External Scholarships",
        "paragraphs": [
          "Dedicated Student Affairs Cell: MITS has a Student Affairs Cell whose key role is to support students in finding and applying for scholarships both government-funded and from private/NGO sources.",
          "Information dissemination: The cell circulates details about scholarships such as those available through the National Scholarship Portal (NSP), AICTE, UGC, Ministry of Minority Affairs (MOMA), SC/ST scholarships, AICTE's Single Girl Child Scholarship, and other schemes like ONGC and private organisations.",
          "Regular updates: Students receive notifications almost throughout the year when new scholarships or applications open.",
          "Guidance on eligibility & application process: The cell explains eligibility criteria and correct documentation needed for various schemes.",
          "Over the years, hundreds of MITS students have benefited from central government and private scholarship schemes through this support system."
        ]
      },
      {
        "title": "Scholarship Awareness & Application Help",
        "paragraphs": [
          "Counselling on scholarship choices: Helping students identify which scholarships they are eligible for based on category (e.g., SC/ST, minority, EWS) and academic performance.",
          "Assistance with online portals: Particularly the National Scholarship Portal (NSP) the central government's unified platform for applying and tracking scholarship applications.",
          "Circulation of application procedures: Official circulars and directions for how to register, which forms to use, and how to complete applications properly (both fresh and renewal)."
        ]
      },
      {
        "title": "Eligibility Criteria",
        "paragraphs": [
          "To qualify for any scholarship or award under this policy, a student must:",
          "1. Be a bonafide, full-time student of MITS.",
          "2. Maintain good scholastic standing.",
          "3. Exhibit good conduct, discipline, and attendance throughout the academic year.",
          "4. Submit valid income and merit documents as applicable.",
          "5. Not simultaneously hold another full scholarship for the same purpose unless permitted by the Scholarship Committee."
        ]
      }
    ],
    "events": [
      {
        "title": "An Expert Talk on \"Personal Branding in the Digital Age: The LinkedIn Blueprint\" on 10th April 2026 at the Auditorium.",
        "href": "https://mits.ac.in/assets/pdf/swc/Personal Branding in the Digital Age The LinkedIn Blueprint.pdf",
        "date": "10-04-2026"
      },
      {
        "title": "An Awareness Session on \"Scholarships and Study Abroad Success Strategies\" was organized on 27/02/26.",
        "href": "https://mits.ac.in/assets/pdf/swc/Scholarships and Study Abroad Success Strategies.pdf",
        "date": "27-02-2026"
      },
      {
        "title": "An Awareness Session on \"University-Specific Private Scholarships for Master's Programs Abroad\" was organized on 23/02/26.",
        "href": "https://mits.ac.in/assets/pdf/swc/University-Specific Private Scholarships for Master's Programs Abroad .pdf",
        "date": "23-02-2026"
      },
      {
        "title": "An Awareness Session on \"Financial Support Options for Indian Students to study abroad\" on 4th February 2026.",
        "href": "https://mits.ac.in/assets/pdf/swc/Financial Support Options.pdf",
        "date": "04-02-2026"
      },
      {
        "title": "An Awareness Session about Vidya Lakshmi Educational Loan scheme on 2nd December 2025.",
        "href": "https://mits.ac.in/assets/pdf/swc/Vidya Lakshmi Educational Loan scheme.pdf",
        "date": "02-12-2025"
      },
      {
        "title": "An Awareness programme on the National Scholarship Portal (NSP) application process was conducted on 16th November 2025.",
        "href": "https://mits.ac.in/assets/pdf/swc/NSP Application Process.pdf",
        "date": "16-11-2025"
      },
      {
        "title": "An Awareness Programme on \"Central and Private Scholarships\" was organized on 15-02-2025.",
        "href": "https://mits.ac.in/assets/pdf/swc/Awareness Program Report Central and Private Scholarships.pdf",
        "date": "15-02-2025"
      }
    ]
  },
  "sac": {
    "name": "Student Activity Center (SAC)",
    "aboutText": [
      "The Student Activity Center (SAC) at Madanapalle Institute of Technology & Science serves as the vibrant nucleus of extracurricular engagement, leadership development, cultural heritage, and youth empowerment on campus.",
      "SAC coordinates over 25 registered student clubs spanning technical innovation, visual and performing arts, literary expression, social service, fitness, and media broadcasting.",
      "Operating under a constitutionally structured governance framework, SAC empowers students to organize monumental college fests, inter-collegiate tournaments, awareness drives, and creative showcases throughout the academic year."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Patron",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. G. Reddy Hemantha",
        "designation": "Coordinator - Student Activity Center",
        "position": "Faculty Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. P. Athahar",
        "designation": "Senior Manager – Student Affairs",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "4",
        "name": "Student General Secretary",
        "designation": "President - Student Council",
        "position": "Student Representative",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "Office Order - SAC Committee - 05.11.2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/Office Order-SAC Committe.pdf"
      },
      {
        "title": "SAC Constitution, Bylaws & Event Guidelines",
        "href": "https://mits.ac.in/assets/pdf/assoc/Office Order-SAC Committe.pdf"
      },
      {
        "title": "Student Activity Calendar 2025-26",
        "href": "https://mits.ac.in/assets/pdf/assoc/Office Order-SAC Committe.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. G. Reddy Hemantha",
        "designation": "Coordinator for Student Activity Center (SAC)",
        "address": "Student Activity Center, MITS, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "sac@mits.ac.in"
      }
    ],
    "id": "sac",
    "url": "https://mits.ac.in/student-activity-center-sac",
    "events": [
      {
        "title": "Freshers’ Day Celebrations 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/Freshers’ Day Celebrations 2025.pdf",
        "date": "25-09-2025"
      },
      {
        "title": "Strong Minds, Safe Lives - Student Mental Wellness & Awareness Campaign",
        "href": "https://mits.ac.in/assets/pdf/assoc/Strong Minds, Safe Lives.pdf",
        "date": "12-10-2025"
      },
      {
        "title": "Arts & Culture Festival: Music, Dance & Theatre Showcase",
        "href": "https://mits.ac.in/assets/pdf/assoc/Arts & Culture Poster-2023.pdf",
        "date": "15-03-2025"
      },
      {
        "title": "Investiture Ceremony of Student Council & Club Office Bearers",
        "href": "https://mits.ac.in/assets/event/Investiture Ceremony.pdf",
        "date": "19-11-2024"
      },
      {
        "title": "Apna Time Aayega - Season 2 Campus Talent Hunt",
        "href": "https://mits.ac.in/assets/pdf/assoc/Freshers’ Day Celebrations 2025.pdf",
        "date": "05-12-2024"
      },
      {
        "title": "Campus Youth Parliament & Parliamentary Debate Series",
        "href": "https://mits.ac.in/assets/pdf/assoc/Strong Minds, Safe Lives.pdf",
        "date": "22-01-2025"
      }
    ],
    "sections": [
      {
        "title": "Preamble",
        "paragraphs": [
          "We, the students and faculty mentors of Madanapalle Institute of Technology & Science, united in our mission to foster leadership, creativity, discipline, and community spirit, establish the Student Activity Center as an autonomous student-led body under the guidance of university leadership."
        ]
      },
      {
        "title": "Article-I: Name, Purpose & Membership",
        "paragraphs": [
          "SECTION 1 (Nomenclature): The organization shall be designated as the 'Student Activity Center (SAC)', MITS.",
          "SECTION 2 (Core Purpose): SAC shall cultivate holistic co-curricular talents, leadership attributes, cultural inclusivity, and civic awareness among undergraduate and postgraduate scholars.",
          "SECTION 3 (Membership): All bona fide registered students of MITS are entitled to participate in SAC clubs and contests upon meeting requisite academic attendance standards.",
          "SECTION 4 (Code of Conduct): All activities must align with the academic dignity, safety, and values of the university."
        ]
      },
      {
        "title": "Article-II: Coordinators & Meetings",
        "paragraphs": [
          "SECTION 1 (Governance Structure): SAC functions under the guidance of the Faculty Coordinator appointed by the Vice Chancellor, assisted by Student Executive Office Bearers.",
          "SECTION 2 (Meeting Frequency): The SAC council convenes bi-weekly to review ongoing events, club proposals, and budget disbursements.",
          "SECTION 3 (Quorum): Formal policy resolutions require a two-thirds majority of executive members present."
        ]
      },
      {
        "title": "Article-III: Schedule and Duties of the Coordinators",
        "paragraphs": [
          "SECTION 1 (Executive Duties): The Coordinator oversees annual event calendars, club registrations, equipment allocation, and institutional event compliance.",
          "SECTION 2 (Financial Integrity): Every club maintains audited income and expense records submitted to the Finance Committee.",
          "SECTION 3 (Safety & Permissions): All public gatherings, celebrity visits, and outbound student delegations require prior written sanction from the SAC coordinator and Vice Chancellor."
        ]
      },
      {
        "title": "Student Activity Calendar 2025-26",
        "paragraphs": [
          "Monthly themed activities, intra-college club showcases, sports meets, hackathons, and cultural fests scheduled across both academic semesters."
        ]
      }
    ]
  },
  "mmc": {
    "name": "Mentor - Mentee Cell",
    "aboutText": [
      "The Mentor-Mentee Cell (MMC) at Madanapalle Institute of Technology & Science drives a comprehensive student mentoring system that guarantees continuous personalized guidance, academic tracking, psycho-social counsel, and professional mentoring for every enrolled learner.",
      "Upon admission, each student is mapped to a dedicated faculty mentor who remains their trusted advisor throughout their multi-year academic journey.",
      "The Cell organizes regular one-on-one mentor-mentee interaction sessions, records holistic student profiles in customized mentoring logbooks, coordinates with parents, and collaborates with career counseling cells to ensure high academic success and emotional resilience."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairperson",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. M. Parvathi",
        "designation": "Assistant Professor, Dept. of English & Foreign Languages",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. K. Arul kumar",
        "designation": "Associate Professor, Dept. of EEE",
        "position": "Co-Coordinator",
        "email": ""
      },
      {
        "sno": "4",
        "name": "Dr. P. Ramanathan",
        "designation": "Vice-Principal (Administration)",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "5",
        "name": "Dr. C. Kamal Basha",
        "designation": "Dean Quality Assurance",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "Mentor Mentee Office Order 2025",
        "href": "https://mits.ac.in/assets/pdf/admin/Mentor Mentee Cell-office order-feb 2025.pdf"
      },
      {
        "title": "Mentor Mentee Office Order 2024",
        "href": "https://mits.ac.in/assets/pdf/admin/Mentor Mentee office Order.pdf"
      },
      {
        "title": "Mentoring System Policy & SOP",
        "href": "https://mits.ac.in/assets/pdf/admin/Mentoring System scan-min.pdf"
      },
      {
        "title": "Mentor Coordinators Roster",
        "href": "https://mits.ac.in/assets/pdf/admin/Mentor Coordinators.pdf"
      },
      {
        "title": "Mentor-Mentee Interaction Forms",
        "href": "https://www.mits.ac.in/assets/pdf/admin/Mentor-Mentee Interaction Forms.pdf"
      },
      {
        "title": "Student (Mentee) Information Booklet",
        "href": "https://www.mits.ac.in/assets/pdf/admin/STUDENT (MENTEE) INFORMATION.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. M. Parvathi",
        "designation": "Assistant Professor, Dept. of English & Foreign Languages & Coordinator",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "parvathim@mits.ac.in"
      },
      {
        "name": "Dr. K. Arul kumar",
        "designation": "Associate Professor, Dept. of EEE & Co-Coordinator",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "arulkumark@mits.ac.in"
      }
    ],
    "id": "mmc",
    "url": "https://mits.ac.in/mmc",
    "sections": [
      {
        "title": "Vision & Mission",
        "paragraphs": [
          "Vision: To establish an empathetic, student-centric academic culture where individualized mentorship empowers students to excel academically, professionally, and personally.",
          "Mission: To provide structured faculty mentorship that addresses learning bottlenecks, nurtures innate talents, and prepares graduates with strong ethical and career competencies."
        ]
      },
      {
        "title": "Preamble & Comprehensive Mentoring System",
        "paragraphs": [
          "The Institution adheres to a healthy mentor-mentee ratio (1:15 to 1:20) ensuring personalized attention.",
          "Faculty mentors maintain confidential Mentee Information Forms recording academic milestones, co-curricular inclinations, attendance patterns, and psycho-social observations.",
          "Mentors conduct fortnightly scheduled interactions and open-door counseling to identify slow learners, advanced learners, and students requiring specialized interventions.",
          "Mentors liaise constructively with heads of departments, parents, hostel wardens, and placement officers to optimize student outcomes."
        ]
      }
    ],
    "events": [
      {
        "title": "Faculty Mentor Orientation on Empathetic Mentoring and Behavioral Tracking",
        "href": "https://mits.ac.in/assets/pdf/admin/Mentor Mentee Cell-office order-feb 2025.pdf",
        "date": "22-08-2025"
      },
      {
        "title": "Mid-Semester Academic Progress & Peer Support Review Session",
        "href": "https://mits.ac.in/assets/pdf/admin/Mentoring System scan-min.pdf",
        "date": "14-11-2025"
      },
      {
        "title": "Parent-Mentor Interactive Conclave for First-Year Undergraduates",
        "href": "https://mits.ac.in/assets/pdf/admin/Mentor Mentee office Order.pdf",
        "date": "18-10-2025"
      }
    ]
  },
  "alumni": {
    "name": "Alumni Cell",
    "aboutText": [],
    "members": [],
    "documents": [],
    "contacts": [],
    "id": "alumni",
    "url": "https://alumni.mits.ac.in/"
  },
  "minority": {
    "name": "Minority Cell",
    "aboutText": [
      "The Minority Cell at Madanapalle Institute of Technology & Science is established pursuant to UGC and Ministry of Minority Affairs guidelines to safeguard the educational, social, and emotional interests of students belonging to minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi).",
      "The Cell ensures an inclusive campus climate free from discrimination, disseminates details on central and state minority welfare schemes, and assists students in availing merit-cum-means financial assistance."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairperson",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. S. Baskaran",
        "designation": "Head, Dept. of Mechanical Engineering",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. P. Athahar",
        "designation": "Senior Manager – Student Affairs",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "Minority Cell Committee Office Order 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/Minority Cell Office Order 2025.pdf"
      },
      {
        "title": "Ministry of Minority Affairs Scholarship Guidelines",
        "href": "https://www.minorityaffairs.gov.in/"
      }
    ],
    "contacts": [
      {
        "name": "Dr. S. Baskaran",
        "designation": "Head, Dept. of Mechanical Engineering & Coordinator - Minority Cell",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "minoritycell@mits.ac.in"
      }
    ],
    "id": "minority",
    "url": "https://mits.ac.in/minority",
    "sections": [
      {
        "title": "Objectives & Functions",
        "paragraphs": [
          "Facilitating the seamless disbursement of National Minority Scholarships and Post-Matric Financial Schemes.",
          "Providing remedial academic coaching and career guidance to minority students.",
          "Functioning as a dedicated grievance listening mechanism to maintain an inclusive, diverse, and cordial campus environment."
        ]
      }
    ],
    "events": [
      {
        "title": "Minority Welfare Scholarship Awareness Camp",
        "href": "https://mits.ac.in/assets/pdf/assoc/Minority Cell Office Order 2025.pdf",
        "date": "08-09-2025"
      },
      {
        "title": "Career Guidance and Higher Education Opportunities Seminar",
        "href": "https://mits.ac.in/assets/pdf/assoc/Minority Cell Office Order 2025.pdf",
        "date": "20-03-2025"
      }
    ]
  },
  "sc-st": {
    "name": "SC & ST Cell",
    "aboutText": [
      "The Scheduled Caste (SC) and Scheduled Tribe (ST) Cell at Madanapalle Institute of Technology & Science is constituted as per statutory mandates to ensure effective implementation of reservation policies, welfare schemes, and academic support systems for SC/ST students and staff.",
      "The Cell actively monitors scholarship disbursements, organizes skill enhancement programs, and provides a safe and supportive redressal channel to ensure complete social equality across the institution."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairperson",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. K. Sathesh",
        "designation": "Associate Professor, Dept. of ECE",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. P. Ramanathan",
        "designation": "Vice-Principal (Administration)",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "SC/ST Cell Committee Office Order 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/SC-ST Cell Office Order 2025.pdf"
      },
      {
        "title": "Statutory Safeguards and Scholarship Facilitation Handbook",
        "href": "https://socialjustice.gov.in/"
      }
    ],
    "contacts": [
      {
        "name": "Dr. K. Sathesh",
        "designation": "Associate Professor (ECE) & Coordinator - SC/ST Cell",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "scstcell@mits.ac.in"
      }
    ],
    "id": "sc-st",
    "url": "https://mits.ac.in/sc-st",
    "sections": [
      {
        "title": "Objectives & Scope",
        "paragraphs": [
          "Supervising the implementation of reservation rosters in admissions and appointments.",
          "Counseling students regarding Post-Matric Government Scholarships, Top Class Education Schemes, and overseas fellowships.",
          "Organizing bridge courses, remedial tutorials, and soft skills training to enhance career placements."
        ]
      }
    ],
    "events": [
      {
        "title": "Dr. B.R. Ambedkar Commemorative Lecture on Social Justice and Technical Education",
        "href": "https://mits.ac.in/assets/pdf/assoc/SC-ST Cell Office Order 2025.pdf",
        "date": "14-04-2025"
      },
      {
        "title": "Post-Matric Scholarship & Digital Literacy Facilitation Camp",
        "href": "https://mits.ac.in/assets/pdf/assoc/SC-ST Cell Office Order 2025.pdf",
        "date": "16-09-2025"
      }
    ]
  },
  "wec": {
    "name": "Women Empowerment Cell (WEC)",
    "aboutText": [
      "The Women Empowerment Cell (WEC) at Madanapalle Institute of Technology & Science is dedicated to creating an empowering, egalitarian, and secure environment that enables women students and female faculty to realize their potential in leadership, innovation, and academics.",
      "The Cell conducts proactive workshops on women's legal rights, self-defense, health and hygiene, entrepreneurship, and leadership development, celebrating achievements and ensuring zero-tolerance for gender discrimination."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Patron",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. P. Athahar",
        "designation": "Senior Manager – Student Affairs",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. M. Parvathi",
        "designation": "Assistant Professor, Dept. of English",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "4",
        "name": "Mrs. K. Revathi",
        "designation": "Assistant Professor, Dept. of EEE",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "WEC Committee Office Order 2025-26",
        "href": "https://mits.ac.in/assets/pdf/assoc/WEC Committee Office Order 2025.pdf"
      },
      {
        "title": "POSH Act Compliance & Women Rights Directive",
        "href": "https://mits.ac.in/assets/pdf/assoc/WEC Committee Office Order 2025.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. P. Athahar",
        "designation": "Senior Manager – Student Affairs & Coordinator - WEC",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "wec@mits.ac.in"
      }
    ],
    "id": "wec",
    "url": "https://mits.ac.in/wec",
    "sections": [
      {
        "title": "Objectives & Activities",
        "paragraphs": [
          "Creating gender sensitization and awareness on POSH Act, women rights, and equal opportunity laws.",
          "Organizing professional skill development sessions tailored for female engineers and researchers.",
          "Fostering a mentorship network connecting female students with successful women industry leaders and alumni."
        ]
      }
    ],
    "events": [
      {
        "title": "International Women’s Day Celebrations & Inspiring Women Leadership Summit",
        "href": "https://mits.ac.in/assets/pdf/assoc/WEC Committee Office Order 2025.pdf",
        "date": "08-03-2025"
      },
      {
        "title": "Self-Defense & Personal Safety Practical Masterclass for Female Students",
        "href": "https://mits.ac.in/assets/pdf/assoc/WEC Committee Office Order 2025.pdf",
        "date": "12-10-2025"
      },
      {
        "title": "Women in STEM: Careers in Deep Tech, AI, and Entrepreneurship",
        "href": "https://mits.ac.in/assets/pdf/assoc/WEC Committee Office Order 2025.pdf",
        "date": "25-01-2025"
      }
    ]
  },
  "sedg": {
    "name": "Socio-Economically Disadvantaged Group (SEDG) Cell",
    "aboutText": [
      "The SEDG Cell at Madanapalle Institute of Technology & Science is established in alignment with NEP 2020 directives to ensure equitable access, bridge learning interventions, and institutional support for students from socio-economically disadvantaged backgrounds.",
      "The Cell identifies learning gaps early, arranges bridge courses in mathematics, English communication, and programming, and provides access to free learning resources, fee assistance, and book bank facilities."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairperson",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. P. Ramanathan",
        "designation": "Vice-Principal (Administration)",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. P. Athahar",
        "designation": "Senior Manager – Student Affairs",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "SEDG Cell Constitution and Office Order",
        "href": "https://mits.ac.in/assets/pdf/assoc/SEDG Office Order.pdf"
      },
      {
        "title": "NEP 2020 SEDG Guidelines and Framework",
        "href": "https://mits.ac.in/assets/pdf/assoc/SEDG Office Order.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. P. Ramanathan",
        "designation": "Vice-Principal (Administration) & Coordinator - SEDG Cell",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "sedg@mits.ac.in"
      }
    ],
    "id": "sedg",
    "url": "https://mits.ac.in/sedg",
    "sections": [
      {
        "title": "Core Initiatives",
        "paragraphs": [
          "Academic Bridge Courses and peer tutoring programs during induction semesters.",
          "Book Bank access offering complete semester textbook sets on long-term loan.",
          "Targeted placement readiness bootcamps and communication skill workshops."
        ]
      }
    ],
    "events": [
      {
        "title": "Bridge Learning Orientation & Skill Diagnostic Session for SEDG Scholars",
        "href": "https://mits.ac.in/assets/pdf/assoc/SEDG Office Order.pdf",
        "date": "25-08-2025"
      },
      {
        "title": "Academic Mentoring and Resource Distribution Drive",
        "href": "https://mits.ac.in/assets/pdf/assoc/SEDG Office Order.pdf",
        "date": "15-11-2025"
      }
    ]
  },
  "eof": {
    "name": "Equal Opportunity Facilitation Cell (EOFC)",
    "aboutText": [
      "The Equal Opportunity Facilitation Cell (EOFC) at Madanapalle Institute of Technology & Science is dedicated to creating a barrier-free, accessible, and inclusive environment for differently-abled students and individuals across all university premises.",
      "The Cell reviews barrier-free physical infrastructure (ramps, elevators, dedicated restrooms), provides assistive software and hardware in libraries and computing laboratories, and ensures customized examination concessions as per statutory guidelines."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairperson",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. P. Ramanathan",
        "designation": "Vice-Principal (Administration)",
        "position": "Coordinator",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "EOFC Policy & Committee Office Order",
        "href": "https://mits.ac.in/assets/pdf/assoc/EOFC Committee Order.pdf"
      },
      {
        "title": "Rights of Persons with Disabilities (RPwD) Statutory Directives",
        "href": "https://mits.ac.in/assets/pdf/assoc/EOFC Committee Order.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. P. Ramanathan",
        "designation": "Vice-Principal (Administration) & Coordinator - EOFC",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "eofc@mits.ac.in"
      }
    ],
    "id": "eof",
    "url": "https://mits.ac.in/eof",
    "sections": [
      {
        "title": "Facilities & Mandate",
        "paragraphs": [
          "Complete ramp and elevator accessibility across all academic blocks and auditoriums.",
          "Screen reading software (JAWS/NVDA) and specialized computing terminals in central library.",
          "Facilitation of scribes, extra time, and ground floor seating arrangements during semester examinations."
        ]
      }
    ],
    "events": [
      {
        "title": "Sensitization Workshop on Inclusive Education and Assistive Technologies",
        "href": "https://mits.ac.in/assets/pdf/assoc/EOFC Committee Order.pdf",
        "date": "03-12-2025"
      },
      {
        "title": "Accessibility Infrastructure Audit & Student Needs Assessment",
        "href": "https://mits.ac.in/assets/pdf/assoc/EOFC Committee Order.pdf",
        "date": "14-08-2025"
      }
    ]
  },
  "paarcc": {
    "name": "Performance Assessment, Ranking & Autonomous Accreditations Review Cell (PAARC)",
    "aboutText": [
      "The Performance Assessment, Ranking & Autonomous Accreditations Review Cell (PAARC) at Madanapalle Institute of Technology & Science is the premier apex institutional review body responsible for benchmarking, quality audits, ranking submissions, and accreditation compliance across all autonomous academic programs.",
      "The Cell coordinates comprehensive institutional data preparation, criterion-wise metrics evaluation, and strategic gap analysis for apex statutory frameworks including NIRF, NAAC, NBA, QS Rankings, and autonomous statutory review panels.",
      "PAARC drives continuous quality enhancement (CQE) by instituting rigorous internal assessment protocols and working synergistically with academic departments to sustain institutional excellence."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairperson",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. A V Pavan Kumar",
        "designation": "Chief Coordinator - PAARC Cell & Associate Professor, Dept. of EEE",
        "position": "Chief Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. C. Kamal Basha",
        "designation": "Dean Quality Assurance & Professor, Dept. of EEE",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "4",
        "name": "Dr. K. Sathesh",
        "designation": "Associate Professor, Dept. of ECE",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "5",
        "name": "Dr. R. Ravindraiah",
        "designation": "Associate Professor, Dept. of Mechanical Engineering",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "6",
        "name": "Dr. Manish Sharma",
        "designation": "Associate Professor, Dept. of CSE",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "7",
        "name": "Mr. T. Manivannan",
        "designation": "Assistant Professor, Dept. of CST",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "8",
        "name": "Mr. Ch. Srinivas",
        "designation": "Assistant Professor, Dept. of Humanities",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "PAARC Committee Office Order 2025-26",
        "href": "https://mits.ac.in/assets/pdf/assoc/PAARC Office Order 2025.pdf"
      },
      {
        "title": "Institutional Quality Metrics Audit Guidelines",
        "href": "https://mits.ac.in/assets/pdf/assoc/PAARC Office Order 2025.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. A V Pavan Kumar",
        "designation": "Asst. Dean Accreditations & Chief Coordinator - PAARC Cell",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "paarccell@mits.ac.in"
      }
    ],
    "id": "paarcc",
    "url": "https://mits.ac.in/paarc",
    "sections": [
      {
        "title": "Core Responsibilities & Mandate",
        "paragraphs": [
          "Directing institutional preparations for NIRF India Rankings, NAAC Accreditations, and NBA Outcome Based Accreditations.",
          "Conducting periodic internal mock audits and quality peer team reviews across all teaching-learning faculties.",
          "Developing standardized data collection frameworks to track teaching quality, research citations, patents, and placements.",
          "Assessing compliance with university autonomous regulations and University Grants Commission (UGC) guidelines."
        ]
      }
    ],
    "events": [
      {
        "title": "Annual Quality Benchmarking & Autonomous Accreditations Review Meeting",
        "href": "https://mits.ac.in/assets/pdf/assoc/PAARC Office Order 2025.pdf",
        "date": "19-09-2025"
      },
      {
        "title": "NIRF 2026 Data Verification & Quantitative Metrics Workshop",
        "href": "https://mits.ac.in/assets/pdf/assoc/PAARC Office Order 2025.pdf",
        "date": "04-12-2025"
      },
      {
        "title": "Outcome Based Education (OBE) Attainment Audit for Autonomous Engineering Programmes",
        "href": "https://mits.ac.in/assets/pdf/assoc/PAARC Office Order 2025.pdf",
        "date": "14-04-2025"
      }
    ]
  },
  "iqac": {
    "name": "Internal Quality Assurance Cell",
    "aboutText": [
      "NITTTRC Professional Development Programme on \"AI in Teaching and Learning\".",
      "Internal Academic Audit for the Academic Year 2025-26 – I Semester for UG (II/III/IV-Year B.Tech) and PG (MBA, MCA, M.Tech) programs .",
      "Guru Dakshta (Faculty Induction Program (FIP))",
      "NITTTRC Professional Development Programme on \"UI /UX DESIGN\"",
      "NITTTRC Professional Development Programme on \"National Educational Policy NEP 2020 & Institutional Development\"",
      "NITTTRC Professional Development Programme on \"Augmented Reality & Virtual Reality",
      "Internal Academic & Administrative Audit for the Academic Year 2023-24 – II Semester",
      "Internal Audit for the Academic Year 2023-24 - I Semester for MBA, MCA & BSH"
    ],
    "members": [
      {
        "sno": "Alumni",
        "name": "Alumni",
        "designation": "View",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "Employer",
        "name": "Employer",
        "designation": "View",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "National / International Experts",
        "name": "National / International Experts",
        "designation": "View",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "Curriculum Enrichment from Industry Experts",
        "name": "Curriculum Enrichment from Industry Experts",
        "designation": "View",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "1",
        "name": "Process & Quality Manual",
        "designation": "-",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Quality Objective Parameters",
        "designation": "Quality Objective Parameters",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Files to be maintained by Department for B.Tech Programme",
        "designation": "Files to be maintained by Department for B.Tech Programme Version.1",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "4",
        "name": "Files to be maintained by the Department for M.Tech / MBA / MCA Programme",
        "designation": "Files to be maintained by the Department for M.Tech / MBA / MCA Programme Version.1",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "5",
        "name": "General Information to be maintained by the Department",
        "designation": "General Information to be maintained by the Department",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "6",
        "name": "Action Taken Reports to be maintained",
        "designation": "Action Taken Reports to be maintained",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "7",
        "name": "Academic Calendar • Institute Academic Calendar • Department Activity Calendar",
        "designation": "Institute Academic Calendar Department Activity Calendar",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "8",
        "name": "Curriculum • R20 Curriculum & Regulations • R23 Curriculum & Regulations",
        "designation": "R20 Curriculum & Regulations R23 Curriculum & Regulations",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "9",
        "name": "Course Allocation • Teaching hours calculation • Faculty Course Choices • Faculty Wise Course Allocation • Class Wise Course Allocation • Student Elective Choices • MOOC Courses",
        "designation": "Course Allocation",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "10",
        "name": "Time Table • Class Time Table • Faculty Time Table • Class Room Occupancy • Laboratory Occupancy • Master Time Table",
        "designation": "-",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "11",
        "name": "Course Monitoring Daily Class Conduction Record Course Monitoring (Syllabus Coverage Record)",
        "designation": "-",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "12",
        "name": "Continuous Internal Evaluation • Sample Mid Exam Schedule (Notice) • Sample Seating Arrangement • Sample Invigilation Duty Allocation for Mid Exam • Department Internal Exam Result Analysis",
        "designation": "--- Department Internal Exam Result Analysis",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "13",
        "name": "End Semester Examination Result Analysis",
        "designation": "-",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "14",
        "name": "Course File Theory",
        "designation": "Course File Theory (DTBU) Course File Theory (UGC-Autonomous) Master List of Documents - B.Tech Theory Course File Master List of Documents - M.Tech Theory Course File Course File Theory - MCA (UGC-Autonomous) Master List of Documents - MCA Theory Course File Course File Theory - MBA (UGC-Autonomous) Master List of Documents - MBA Theory Course File",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "16",
        "name": "Course File MOOCS",
        "designation": "-",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "17",
        "name": "Value Added Course • Proposal for Offering Value-Added Courses • Checklist : Value-Added Courses",
        "designation": "Proposal for Offering Value-Added Courses Checklist : Value-Added Courses",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "18",
        "name": "Remedial Classes • Schedule & Time Table for Remedial Classes • List of Failure Students • Remedial Coaching Attendance Record • Report on Performance Improvement after Remedial Classes",
        "designation": "Remedial Classes",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "19",
        "name": "Mentoring Scheme • List of Mentees Mentee /Student Profile • Mentor-Mentee Session Attendance • Mentor-Mentee Session Weekly Report • Student Counselling Record • Improvement Status of Mentee",
        "designation": "Mentoring Scheme",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "20",
        "name": "Bridge Course • Bridge Course Schedule • Bridge Course Attendance",
        "designation": "Bridge Course Schedule & Attendance",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "21",
        "name": "Stakeholder Feedback • Questionnaire • Stakeholder Feedback - Action taken Report",
        "designation": "Questionnaire Stakeholder Feedback - Action taken Report",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "22",
        "name": "Industrial Visit • Permission for Industrial Visit • Industrial Visit Report",
        "designation": "Permission for Industrial Visit Industrial Visit Report",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "23",
        "name": "Application for Event Participation",
        "designation": "Application for Event Participation",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "24",
        "name": "Proposal to Organize Events",
        "designation": "Proposal to Organize Events",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "25",
        "name": "Proposal for Research Seed Funding",
        "designation": "Proposal for Research Seed Funding",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "26",
        "name": "Proposal for Organizing NSS, NCC, Sports, and Cultural Events",
        "designation": "Proposal for Organizing NSS, NCC, Sports, and Cultural Events",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "27",
        "name": "Laboratory Equipment Maintenance",
        "designation": "Laboratory Equipment Maintenance",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "28",
        "name": "Laboratory Dead Stock Equipment",
        "designation": "Laboratory Dead Stock Equipment",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "29",
        "name": "Laboratory Equipment Maintenance Action Report",
        "designation": "Laboratory Equipment Maintenance Action Report",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "30",
        "name": "Appraisal and 360° Feedback Calculation",
        "designation": "Appraisal and 360° Feedback Calculation",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "31",
        "name": "Minutes of Meeting",
        "designation": "MOM Format Cell MOM Format Department",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "32",
        "name": "AUDIT Formats",
        "designation": "MITS EOMS Theory Course File Audit ISO 21001 MITS EOMS Laboratory Course File Audit ISO 21001 MITS Laboratory EOMS Audit Notes ISO 21001 MITS EOMS Department Check List ISO 21001 MITS EOMS Non Conformity Report ISO 21001 MITS Department Objectives Target & Achieved",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "33",
        "name": "NAAC Formats",
        "designation": "NAAC AQAR’S Support Documents NAAC Supporting Document Manual - Quantitative Inputs For AQAR NAAC Benchmarks and SOP (Standard Operating Procedures) NAAC AQAR Benchmarks & SOP Stakeholders Feedback - Action Taken Report Format Correlation between New NAAC Reforms 2024 & Existing NAAC Criterion (Key Indicators) MITS Responsibilities Matrix for NAAC 2024 Reforms (MBGL) Extended Profile Mapping Between SSR and AQAR (Autonomous College-Manual) NAAC RAF SSR NEW Format (9-8-2023) (Autonomous College) Criterion_1_Curricular_Aspects_SSR_AQAR_Mapping Criterion II – Teaching-Learning and Evaluation_SSR_AQAR_Mapping Criterion III – Research, Innovations and Extension _SSR_AQAR_Mapping Criterion IV – Infrastructure and Learning Resources _SSR_AQAR_Mapping Criterion V – Student Support and Progression_SSR_AQAR_Mapping Criterion VI – Governance, Leadership and Management_SSR_AQAR_Mapping Criterion VII –Institutional Values and Best Practices _SSR_AQAR_Mapping NBA-NAAC Comparison MITS NAAC AQAR SSR Mapping Supporting Document Manual Criteria I-II-III MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion IV MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion V MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion VI MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion VII",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "34",
        "name": "NBA / Outcome Based Education (OBE) Formats",
        "designation": "R23 CO-PO-Assesment Template - UG Engineering R20 CO-PO-Assesment Template - UG Engineering NBA (New SAR) - List of Files to be Maintained in the ENGG Departments NBA Supporting Document Manual - Program Specific Files NBA - List of Files to be Maintained in the BSH Department NBA - List of Files to be Maintained in the ENGG Departments NBA - List of Files to be Maintained in the MBA Department NBA - List of Files to be Maintained in the MCA Department AICTE CO-PO Mapping Template CSE Allied Branches AICTE CO-PO Mapping Template Core Branches Complex Engineering Problem Solving CPS Form Program Outcomes (PO) Mapping with WA & WK SDG Mapping IEA-GAPC2021 Graduate Attributes & Professional Competencies Mapping of Courses to Knowledge Profile (WK) SDG-Global-Indicator-Framework-after-2024-refinement SDG-Global-Indicator-Framework-after-2024-refinement QP Analysis Basis of Blooms Level Template",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "35",
        "name": "NIRF Formats",
        "designation": "NIRF Department Data Template NIRF Financial Data Template",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "36",
        "name": "Check List",
        "designation": "Check List- Anti-Ragging Committee (ARC) Check List- Culturals Check List- Events Organized (NSS_NCC) Check List- Events Organized Check List- Grievances and Redressal Committee (GRC) Check List- Internal Complaint Committee (ICC) Check List- Sports Check List- Stakeholders Feedback MITS Check List - Value Added Course MITS Check List - DAB, PAC & IAAB",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "37",
        "name": "Faculty Personal File",
        "designation": "Faculty Personal File",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "38",
        "name": "NEP 2020 – Active Learning Methods",
        "designation": "UGC’s Innovative Pedagogical Approaches 228-Active-Learning-Strategies 3-2-1 Technique Analytic Teams Blended Learning Case Based Learning Contemporary Issues Journal Digital Story Experential Learning FishBowl Flipped Classroom Group Grid Jeopardy Jig Saw Mind Mapping Peer Assisted Learning The Minute Paper Think Pair Share Three Minute Message Problem Based Learning Project Based Learning Learning Outcomes",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "39",
        "name": "NEP 2020 – WIT & WIL Method",
        "designation": "NEP 2020 – WIT& WIL Method Sample Template WIT & WIL Method",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "40",
        "name": "NEP 2020 – MITS Lab Protocol",
        "designation": "NEP 2020 – MITS Lab Protocol",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "41",
        "name": "NEP 2020 – Show & Tell Corner",
        "designation": "NEP 2020 – Show & Tell Corner",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "42",
        "name": "Sustainable Development Goals (SDG)",
        "designation": "MITS SDG Cell SDG Mapping SDG Events Mapping Template SDG Curriculum Mapping Template SDG Project Mapping Template SDG Internship Mapping Template SDG-The Impact Rankings Template SDG: QS Sustainability Rankings Template Sample Procedure for SDG Curriculum Mapping",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "43",
        "name": "MITS DTBU Policy Formats",
        "designation": "Draft Policy Document Format",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "44",
        "name": "Outcome Based Education (OBE)",
        "designation": "OBE Teaching Formula",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "45",
        "name": "AI in Teaching and Learning",
        "designation": "AI in Teaching and Learning AI Visual Guides for Educators AI Literacy Guides AI PDP 2026 Material",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC poster_PDP.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NITTTR Banner.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NITTTR Brochure.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Institution-wise NAAC Criterion Coordinators_2026.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Department-wise NAAC Coordinators.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Institutional Cells & Committee Incharges Details.pdf"
      },
      {
        "title": "Document Link",
        "href": "http://naac.gov.in/images/docs/NAAC-Major_Reforms_in_Accreditation-Press_Release-27January_2024.pdf"
      },
      {
        "title": "Document Link",
        "href": "http://naac.gov.in/images/docs/DrRadhakrishnanCommittee-FinalReport.pdf"
      },
      {
        "title": "Document Link",
        "href": "http://naac.gov.in/images/docs/announcement/NAAC_Reforms_2024-Announcements-29thJune2024_240629_143341.pdf"
      },
      {
        "title": "Document Link",
        "href": "http://naac.gov.in/images/docs/announcement/NAAC_Press_Release_10022025.pdf"
      },
      {
        "title": "Document Link",
        "href": "http://naac.gov.in/images/docs/notification/validity_extension_notification_5_12_25.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/New Reforms Correlation and MIts Responsibilities.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NAAC Accreditation Preparedness 21-04-2026- Dr.K.Sathesh.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NAAC_Survey 21-04-2026- Dr.K.Sathesh.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Department-wise Stakeholder Feedback Coordinators.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NAAC Reforms 2024 Pilot Survey for Binary Accreditation Framework (University) (Draft Copy)_Data_Template.docx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS NAAC Survey– QnM & QlM Data Collection Manual (Draft Copy).docx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NAAC Accreditation Preparedness _Supporting_Document_Manual (Draft Copy).docx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NAAC Supporting Document Manual Based on Dr. K. Radhakrishnan Report, November 2023 (Draft Copy).docx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Composition of committee members for Year 2025-2026.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Composition of committee members for Year 2024-2025.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Composition%20of%20committee%20members%20for%20Year%202023-2024.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Composition%20of%20committee%20members%20for%20Year%202022-2023.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Composition%20of%20committee%20members%20for%20Year%202021-2022.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Composition%20of%20committee%20members%20for%20Year%202020-2021.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Composition%20of%20committee%20members%20for%20Year%202019-2020.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Composition%20of%20committee%20members%20for%20Year%202018-2019.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Composition%20of%20committee%20members%20for%20Year%202015-2016.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.aicte-india.org/sites/default/files/AICTE%20QUALITY%20INITIATIVES%20IN%20TECHNICAL%20EDUCATION.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/AICTE -ExaminationReforms (Nov 2018) (uploaded on 20231102).pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/AICTE-Model Question Paper (uploaded on 20231102).pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/Gazette%20Notification%20No.%209-1-2025-U.3A%20dated%2015.07.2025-1.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/EOA%20Report%202026-2027.PDF"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/affiliations/EOA-Corrigendum%202025-26_1-44642479593%20(1).pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202024-2025.PDF"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/affiliations/EOA-Report-2023-2024.PDF"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/9b55cb6cdd40bf4ca955cdd3a5383031.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/affiliations/MBA%20NBA%20Cetificate-2025.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/affiliations/MCA%20NBA%20Cetificate-2025.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/affiliations/Madanapalle%20Institute%20of%20Technology%20_%20Science,%20Andhra%20Pradesh19_6_2025_12_45_57.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/affiliations/NBA%20-%20CST-%20confirmation%20-till%2030.6.2027.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/affiliations/NBA-MCA%20Extention%20till%202025%20June.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/affiliations/NBA-MBA-2022-25.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/affiliations/b6c8a081779294cbbd70a1180dc7746f.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/affiliations/NBA-MCA-2022-24.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/UGC-2025-35-Madanapalle%20Institute%20of%20Technology%20Science.pdf "
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/UGC-Autonomous%202020-25.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/UGC-Autonomous%202014-20.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/scholarship/MITS_Engg_ranking-2025.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/scholarship/MITS_Engg_ranking-2024.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/scholarship/MITS-RankBand-251-300.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/ISO%20Certificarte.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/ISO-210012018-cerificate.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.aicte-india.org/sites/default/files/Corrigendum%20Exemption%20from%20360%20degree%20feedback.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Coordinator- Office-Order.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/AICTE 360 ° office order.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/Certificate_SMC-2023-AWD100197.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/AWD100195.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/Cert AICTE 360 Degree Feedback-2023-24.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/AWD100203.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS-Stakeholder Feedback-Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS_Stakeholder Feedback Questionnaire.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS Stakeholder Feedback Questionnaire from (AY 2024-25 Onwards).pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Action Taken Report 2024-25.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Action Taken Report 2023-24.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Action Taken Report 2022-23.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/ATR 2021-22.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/ATR 2020-21.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/ATR 2019-20.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/ATR 2018-19.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/CSE ATR 24-25.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Evidence ATR 2023-24.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Evidence_on_ATR_2022-23.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Evidence_on_ATR_2021-22.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NAAC (1st Cycle) - Self Study Report (SSR).pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NAAC Autonomous_College Benchmarks December 2022.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NAAC Autonomous_College_SOP December 2022.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NAAC Autonomous_College Manual_29-03-2023_Updated_9-8-2023.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Comparison of NAAC Criteria and ISO 210012018 EOMS Clauses.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NBA_Guidelines for Faculty Updated 22-08-2023.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NBA_UGEngg_Tier_I_Manual (uploaded on 20231102)-2.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.nbaind.org/files/2-SAR-UG-EG-T1_1%20August%202024_revised_Format_20240801144723.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.nbaind.org/files/SAR-PG-MAG-18-4-2024_Format_20240514144527.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.nbaind.org/Files/MCA_New/2-SAR-MCA-final-21-12-2023.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://nbaind.org/files/2-SAR-UG-EG-T1_1%20August%202024_Format_20240801124948.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.nbaind.org/files/PG-Eng-SAR-13-8-24_Format_20240813153128.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NIRF 2023 Methodology - Engineering.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NIRF 2023 Methodology - Management.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NIRF 2023 Methodology - Overall.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS%20IQAC%20Academic%20Audit%20Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/External Audit Report 2023-24.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/External Audit Report 2022-23.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/External Audit Report 2021-22.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Internal Audit Report 2024-25.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Internal Audit Report 2023-24.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Internal Audit Report 2022-23.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Internal Audit Report 2021-22.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/External Audit ATR 2023-24.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/External Audit ATR 2022-23.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/External Audit ATR 2021-22.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Internal Audit ATR 2023-24.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Internal Audit ATR 2022-23.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Internal Audit ATR 2021-22.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/23-24_GAp ANalysis Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/22-23_GAp ANalysis Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/Strategic%20Plan%202022-27.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/Strategic-Plan-Implementation.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS-DTBU-Mpl-Best Practices-1.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS-DTBU-Mpl-Best Practices-2.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS e-Content.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/E- Content Facilities in MITS CRS.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/E- Content Preparation _ Declaration Form.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/E- Content Preparation Standard Operating Procedure-SOP.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/ed46c87d7524601b5488d7516cf131d5.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/CSE%20UG%20PEOs%20&%20POs.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/5bd07f16cbebedd4a2ae66f779cb8412.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/bf5cbf47b24c0038d0214b4c63a286fb.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/3085fc5bac5d124dfac551ddc5c04bc4.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/dad4367ee11ac4205b47349921354e98.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/a362fcdaee05429e6c443f6b052b7282.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/3246f8050efcce5e4666346725a26690.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/AnnualReport%202024-25.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/AnnualReport%202023-24.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/Annual%20Report%202022-23.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/Annual%20Report%20AY%202021-22.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/2018-19%20Annual%20Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/2017-18%20Annual%20Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/2016-17%20Annual%20Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/2015-16%20Annual%20Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/admin/2014-15%20Annual%20Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours July 2024 to June 2025(ENGG,MBA , MCA & BSH).pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours May 2025.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours April 2025.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours March 2025.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours February 2025.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours January 2025.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours December 2024.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC HOURS November 2024 Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC HOURS October 2024 Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC 2024 ENGG.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC 2024 BSH.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours ENGG_MBA_MCA July to June 2024.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours BSH July 2023 - Jun 2024.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours June 2024.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours May 2024.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours April.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours March.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC HOURS February 2024 Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC HOURS January 2024 Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC HOURS December 2023 Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC HOURS November 2023 Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours July to Oct 2023.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITSU_IQAC_Handbook.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/8308176_NAAC-Grading.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/1238790_Dr_Radhakrishnan-Committee-Final-Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/e-book/Quality%20Mandate%20E-BOOK.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/3830821_DeeksharambhEnglish.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/e-book/locf.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/4874522_Draft-Curriculum-for-Life-SKill-Jeevan-Kaushal.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/e-book/UNNAT%20BHARAT%20ABHIYAN.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/e-book/CARE%20ENGLISH.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/2089255_STRIDE_FINAL_BOOK.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/8799370_Mulya-Parvah_Guideline.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/e-book/GURU%20DAKSHTA%20English.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/0899501_IQAC-guidelines-for-University.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/5172195_Guideline_IQACs.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/e-book/EVALUATION%20ENGLISH.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/1031121_Guidelines-Innovative-Pedagogical-Approaches-Evaluation-Reforms.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/2990035_Final-NHEQF.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/9028476_Report-of-National-Credit-Framework.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/1566510_SAARTHI-GUIDELINES.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/e-book/GL%20Multipe%20Entry%20Exit.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/6769753_UGC-Letter-Implementation-of-NEP.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://nqr.gov.in/downloads/pdfs/NSQF_Gazette_Notification.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/0920543_Public-Notice-UG-and-PG-Regulations-2025.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Curriculum-and-Credit-Framework-for-Postgraduate-Programmes.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/AI in teaching and Learning.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/ISO Surveillnace 2 Audit Report 22nd & 24th January 2026.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Report_UI  UX Design.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/ISO 210012018 Surveillance Audit - EOMS.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/SDP.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Report_National Education Policy 2020 & Institutional Development.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Augmented Reality & Virtual Reality.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/AICTE 360 Feedback System Published Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/AICTE360-Report-1.2.2025.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/one-day workshop on National Credit Framework (NCrF).pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/External Academic and Administrative Audit 2023-24.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Published_Generative_AI _Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Guru-Dakshta Faculty Induction Program.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Block Chain Technologies.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/5 Days Professional Development Programme (PDP) on NBA ACCREDITATION in association with NITTTR, Chennai _12.02.2024 – 16.02.2024.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/ISO Stage 2 Audit Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/ADMIN AUDIT FORMAT.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/External Department Audit Format.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/External Audit Frame work - Mapping of P Files & Supporting FIles.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/FACULTY AUDIT FORMAT.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS NCR Report ISO 21001.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Department Check List ISO 21001.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Internal Audit Notes ISO 21001.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Course File Audit ISO 21001.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS Check List Laboratory Audit.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Theory Course File Audit ISO 21001 2024-25.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Lab Course File Audit ISO 21001 2024-25.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/AQAR_MITS Support Documents.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Supporting Document Manual - Quantitative Inputs For AQAR.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS_benchmarks-_IQAC.xlsx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS-AQAR-Benchmarks-SOP.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS Dept_Stakeholders Action Taken Report_format.docx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Correlation between New NAAC Reforms 2024 & Existing NAAC Criterion Key Indicators.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NBA Supporting Document Manual - Program Specific Files.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/BSH_NBA_Files List.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/AICTE CO-PO Mapping Template_CSE Allied Branches.xlsx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/AICTE CO-PO Mapping Template_Core Branches.xlsx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Complex Engineering Problem-Solving _CPS_Form.xlsx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Program Outcomes (PO) Mapping with WA & WK.xlsx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/SDG Mapping.xlsx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IEA-GAPC2021_GRADUATE ATTRIBUTES & PROFESSIONAL COMPETENCIES.xlsx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NIRF- Department_data_template_MITS(3).xlsx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NIRF - Financial_data_template_MITS(3).xlsx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Check List- Anti-Ragging Committee (ARC).pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Check List- Culturals.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Check List- EVENTS ORGANIZED (NSS_NCC).pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Check List- Events Organized.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Check List- Grievances and Redressal Committee (GRC).pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Check List- Internal Complaint Committee (ICC).pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Check List- Sports.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Check List- Stakeholders Feedback.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS Check List - DAB, PAC & IAAB.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Check lIst-Value Added Course.pdf"
      },
      {
        "title": "Quality Objective Parameters",
        "href": "https://mits.ac.in/assets/pdf/iqac/Quality Objective Parameters.xlsx"
      },
      {
        "title": "Files to be maintained by Department for B.Tech Programme Version.1",
        "href": "https://mits.ac.in/assets/pdf/iqac/Files to be_maintained by Department for B.Tech V0.1.pdf"
      },
      {
        "title": "General Information to be maintained by the Department",
        "href": "https://mits.ac.in/assets/pdf/iqac/General Information to be maintained by Department.pdf"
      },
      {
        "title": "Action Taken Reports to be maintained",
        "href": "https://mits.ac.in/assets/pdf/iqac/Action Taken Reports to be maintained.pdf"
      },
      {
        "title": "Department Activity Calendar",
        "href": "https://mits.ac.in/assets/pdf/iqac/Department Activity Calendar.xlsx"
      },
      {
        "title": "Course Allocation",
        "href": "https://mits.ac.in/assets/pdf/iqac/Course_Allocation.xlsx"
      },
      {
        "title": "Department Internal Exam Result Analysis",
        "href": "https://mits.ac.in/assets/pdf/iqac/Department Internal - Exam Result Analysis.xlsx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS DTBU Theory Course File.rar"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Course File Theory.rar"
      },
      {
        "title": "Master List of Documents - B.Tech Theory Course File",
        "href": "https://mits.ac.in/assets/pdf/iqac/DOC-ID_B.Tech Theory Course File.pdf"
      },
      {
        "title": "Master List of Documents - M.Tech Theory Course File",
        "href": "https://mits.ac.in/assets/pdf/iqac/DOC-ID_M.Tech Theory Course File.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Course File Theory-MCA.rar"
      },
      {
        "title": "Master List of Documents - MCA Theory Course File",
        "href": "https://mits.ac.in/assets/pdf/iqac/DOC-ID_M.C.A Theory Course File.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Coursefile Theory-MBA.rar"
      },
      {
        "title": "Master List of Documents - MBA Theory Course File",
        "href": "https://mits.ac.in/assets/pdf/iqac/DOC-ID_M.B.A Theory Course File.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS DTBU Laboratory Course FIle.rar"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Course File Laboratory.rar"
      },
      {
        "title": "Master List of Documents - B.Tech Laboratory Course File",
        "href": "https://mits.ac.in/assets/pdf/iqac/DOC-ID_B.Tech Laboratory Course File.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Lab Coursefile Theory-MBA.rar"
      },
      {
        "title": "Master List of Documents - MBA Laboratory Course File",
        "href": "https://mits.ac.in/assets/pdf/iqac/DOC-ID_M.B.A Laboratory Course File.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Course File_Laboratory_MCA.rar"
      },
      {
        "title": "Master List of Documents - MCA Laboratory Course File",
        "href": "https://mits.ac.in/assets/pdf/iqac/DOC-ID_M.C.A Laboratory Course File.pdf"
      },
      {
        "title": "Proposal for Offering Value-Added Courses",
        "href": "https://mits.ac.in/assets/pdf/iqac/Proposal_to_Conduct_Value_Added_Courses.docx"
      },
      {
        "title": "Checklist : Value-Added Courses",
        "href": "https://mits.ac.in/assets/pdf/iqac/Check lIst-Value Added Course.docx"
      },
      {
        "title": "Remedial Classes",
        "href": "https://mits.ac.in/assets/pdf/iqac/Remedial Class Schedule & Attendance Improvement.xlsx"
      },
      {
        "title": "Mentoring Scheme",
        "href": "https://mits.ac.in/assets/pdf/iqac/Mentoring Scheme.xlsx"
      },
      {
        "title": "Bridge Course Schedule & Attendance",
        "href": "https://mits.ac.in/assets/pdf/iqac/Bridge Course Schedule & Attendance.xlsx"
      },
      {
        "title": "Questionnaire",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS%20Stakeholder%20Feedback%20Questionnaire%20(From%20AY%202024-25%20Onwards).pdf"
      },
      {
        "title": "Stakeholder Feedback - Action taken Report",
        "href": "https://mits.ac.in/assets/pdf/iqac/Stakeholders Action Taken Report format.docx"
      },
      {
        "title": "Permission for Industrial Visit",
        "href": "https://mits.ac.in/assets/pdf/iqac/Permission for Industrial Visit.docx"
      },
      {
        "title": "Industrial Visit Report",
        "href": "https://mits.ac.in/assets/pdf/iqac/Industrial Visit Report.doc"
      },
      {
        "title": "Application for Event Participation",
        "href": "https://mits.ac.in/assets/pdf/iqac/Application_for_Event_Participation.docx"
      },
      {
        "title": "Proposal to Organize Events",
        "href": "https://mits.ac.in/assets/pdf/iqac/Proposal_to_Organize_Event.docx"
      },
      {
        "title": "Proposal for Research Seed Funding",
        "href": "https://mits.ac.in/assets/pdf/iqac/Proposal for Research Seed Funding.docx"
      },
      {
        "title": "Proposal for Organizing NSS, NCC, Sports, and Cultural Events",
        "href": "https://mits.ac.in/assets/pdf/iqac/Proposal_to_Organize_NSS_Sports_Cultural Events.docx"
      },
      {
        "title": "Laboratory Equipment Maintenance",
        "href": "https://mits.ac.in/assets/pdf/iqac/Laboratory Equipment Maintenance.docx"
      },
      {
        "title": "Laboratory Dead Stock Equipment",
        "href": "https://mits.ac.in/assets/pdf/iqac/Laboratory_Dead_Stock_Equipment.docx"
      },
      {
        "title": "Laboratory Equipment Maintenance Action Report",
        "href": "https://mits.ac.in/assets/pdf/iqac/Laboratory Equipment  Maintenance Action Report.docx"
      },
      {
        "title": "Appraisal and 360° Feedback Calculation",
        "href": "https://mits.ac.in/assets/pdf/iqac/Appraisal%20and%20360%C2%B0%20Feedback%20Calculation.pdf"
      },
      {
        "title": "MOM Format Cell",
        "href": "https://mits.ac.in/assets/pdf/iqac/MOM_format_Cells.docx"
      },
      {
        "title": "MOM Format Department",
        "href": "https://mits.ac.in/assets/pdf/iqac/MOM_format_Department.docx"
      },
      {
        "title": "MITS EOMS Theory Course File Audit ISO 21001",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Theory Course File Audit.pdf"
      },
      {
        "title": "MITS EOMS Laboratory Course File Audit ISO 21001",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Lab Course File Audit ISO 21001.pdf"
      },
      {
        "title": "MITS Laboratory EOMS Audit Notes ISO 21001",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS Laboratory EOMS Audit Notes ISO 21001.pdf"
      },
      {
        "title": "MITS EOMS Department Check List ISO 21001",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Department Check List  ISO 21001.pdf"
      },
      {
        "title": "MITS EOMS Non Conformity Report ISO 21001",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Non Conformity Report ISO 21001.pdf"
      },
      {
        "title": "MITS Department Objectives Target & Achieved",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS Department Objectives Target & achieved.pdf"
      },
      {
        "title": "NAAC AQAR’S Support Documents",
        "href": "https://mits.ac.in/assets/pdf/iqac/AQAR_MITS%20Support%20Documents.pdf"
      },
      {
        "title": "NAAC Supporting Document Manual - Quantitative Inputs For AQAR",
        "href": "https://mits.ac.in/assets/pdf/iqac/Supporting%20Document%20Manual%20-%20Quantitative%20Inputs%20For%20AQAR.pdf"
      },
      {
        "title": "Extended Profile Mapping Between SSR and AQAR (Autonomous College-Manual)",
        "href": "https://mits.ac.in/assets/pdf/iqac/Extended Profile Mapping Between SSR and AQAR(Autonomous College-Manual).pdf"
      },
      {
        "title": "NAAC RAF SSR NEW Format (9-8-2023) (Autonomous College)",
        "href": "https://mits.ac.in/assets/pdf/iqac/NAAC RAF SSR NEW Format (9-8-2023)(Autonomous College).pdf"
      },
      {
        "title": "Criterion_1_Curricular_Aspects_SSR_AQAR_Mapping",
        "href": "https://mits.ac.in/assets/pdf/iqac/Criterion_1_Curricular_Aspects_SSR_AQAR_Mapping_Autonomous_College-1.pdf"
      },
      {
        "title": "Criterion II – Teaching-Learning and Evaluation_SSR_AQAR_Mapping",
        "href": "https://mits.ac.in/assets/pdf/iqac/Criterion II – Teaching-Learning and Evaluation_SSR_AQAR_Mapping_Autonomous_College-1.pdf"
      },
      {
        "title": "Criterion III – Research, Innovations and Extension _SSR_AQAR_Mapping",
        "href": "https://mits.ac.in/assets/pdf/iqac/Criterion III – – Research, Innovations and Extension _SSR_AQAR_Mapping_Autonomous_College-2-1.pdf"
      },
      {
        "title": "Criterion IV – Infrastructure and Learning Resources _SSR_AQAR_Mapping",
        "href": "https://mits.ac.in/assets/pdf/iqac/Criterion IV – Infrastructure and Learning Resources _SSR_AQAR_Mapping_Autonomous_College.pdf"
      },
      {
        "title": "Criterion V – Student Support and Progression_SSR_AQAR_Mapping",
        "href": "https://mits.ac.in/assets/pdf/iqac/Criterion V – Student Support and Progression_SSR_AQAR_Mapping_Autonomous_College.pdf"
      },
      {
        "title": "Criterion VI – Governance, Leadership and Management_SSR_AQAR_Mapping",
        "href": "https://mits.ac.in/assets/pdf/iqac/Criterion VI – Governance.pdf"
      },
      {
        "title": "Criterion VII –Institutional Values and Best Practices _SSR_AQAR_Mapping",
        "href": "https://mits.ac.in/assets/pdf/iqac/Criterion VII –Institutional Values and Best Practices _SSR_AQAR_Mapping_Autonomous_College.pdf"
      },
      {
        "title": "NBA-NAAC Comparison",
        "href": "https://mits.ac.in/assets/pdf/iqac/NBA-NAAC Comparsion.xlsx"
      },
      {
        "title": "MITS NAAC AQAR SSR Mapping Supporting Document Manual Criteria I-II-III",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS_NAAC_AQAR-SSR Mapping _Supporting_Document_Manual_Criteria-I_II_III.docx"
      },
      {
        "title": "MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion IV",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS_NAAC_AQAR-SSR Mapping _Supporting_Document_Manual_Criterion-IV.docx"
      },
      {
        "title": "MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion V",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS_NAAC_AQAR-SSR Mapping _Supporting_Document_Manual_Criterion-V.docx"
      },
      {
        "title": "MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion VI",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS_NAAC_AQAR_SSR Mapping _Supporting_Document_Manual_Criterion-VI.docx"
      },
      {
        "title": "MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion VII",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS_NAAC_AQAR_SSR Mapping _Supporting_Document_Manual_Criterion-VII.docx"
      },
      {
        "title": "R23 CO-PO-Assesment Template - UG Engineering",
        "href": "https://mits.ac.in/assets/pdf/iqac/R23 CO-PO-Assesment Template - UG Engineering.rar"
      },
      {
        "title": "R20 CO-PO-Assesment Template - UG Engineering",
        "href": "https://mits.ac.in/assets/pdf/iqac/R20_CO-PO-Assesment_Template-UG Engineering.rar"
      },
      {
        "title": "NBA (New SAR) - List of Files to be Maintained in the ENGG Departments",
        "href": "https://www.nbaind.org/files/UG_Acrreditaion/10-List%20of%20documents-UG-EG-T1-5-7-24.pdf"
      },
      {
        "title": "NBA Supporting Document Manual - Program Specific Files",
        "href": "https://mits.ac.in/assets/pdf/iqac/NBA%20Supporting%20Document%20Manual%20-%20Program%20Specific%20Files.pdf"
      },
      {
        "title": "NBA - List of Files to be Maintained in the BSH Department",
        "href": "https://mits.ac.in/assets/pdf/iqac/NBA - List of Files to be Maintained in the BSH Department.pdf"
      },
      {
        "title": "NBA - List of Files to be Maintained in the ENGG Departments",
        "href": "https://mits.ac.in/assets/pdf/iqac/NBA - List of Files to be Maintained in the ENGG Departments.pdf"
      },
      {
        "title": "NBA - List of Files to be Maintained in the MBA Department",
        "href": "https://mits.ac.in/assets/pdf/iqac/NBA - List of Files to be Maintained in the MBA Department.pdf"
      },
      {
        "title": "NBA - List of Files to be Maintained in the MCA Department",
        "href": "https://mits.ac.in/assets/pdf/iqac/NBA - List of Files to be Maintained in the MCA Department.pdf"
      },
      {
        "title": "Mapping of Courses to Knowledge Profile (WK)",
        "href": "https://mits.ac.in/assets/pdf/iqac/Mapping of Courses to Knowledge Profile (WK).xlsx"
      },
      {
        "title": "SDG-Global-Indicator-Framework-after-2024-refinement",
        "href": "https://unstats.un.org/sdgs/indicators/Global-Indicator-Framework-after-2024-refinement-English.pdf"
      },
      {
        "title": "QP Analysis Basis of Blooms Level Template",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC_QP Analysis Basis of Blooms Level_Template.xlsx"
      },
      {
        "title": "Check List- Events Organized",
        "href": "https://mits.ac.in/assets/pdf/iqac/Check%20List-%20Events%20Organized.pdf"
      },
      {
        "title": "MITS Check List - Value Added Course",
        "href": "https://mits.ac.in/assets/pdf/iqac/Check%20lIst-Value%20Added%20Course.pdf"
      },
      {
        "title": "MITS Check List - DAB, PAC & IAAB",
        "href": "https://mits.ac.in/assets/pdf/iqac/Check List-DAB-PAC-IAAB.pdf"
      },
      {
        "title": "Faculty Personal File",
        "href": "https://mits.ac.in/assets/pdf/iqac/37_Personal File_template_2024.docx"
      },
      {
        "title": "228-Active-Learning-Strategies",
        "href": "https://mits.ac.in/assets/pdf/iqac/handout-interactive-techniques.pdf"
      },
      {
        "title": "3-2-1 Technique",
        "href": "https://mits.ac.in/assets/pdf/iqac/3-2-1 Technique.pdf"
      },
      {
        "title": "Analytic Teams",
        "href": "https://mits.ac.in/assets/pdf/iqac/Analytic Teams.pdf"
      },
      {
        "title": "Blended Learning",
        "href": "https://mits.ac.in/assets/pdf/iqac/Blended Learning.pdf"
      },
      {
        "title": "Case Based Learning",
        "href": "https://mits.ac.in/assets/pdf/iqac/Case Based Learning.pdf"
      },
      {
        "title": "Contemporary Issues Journal",
        "href": "https://mits.ac.in/assets/pdf/iqac/Contemporary Issues Journal.pdf"
      },
      {
        "title": "Digital Story",
        "href": "https://mits.ac.in/assets/pdf/iqac/Digital Story.pdf"
      },
      {
        "title": "Experential Learning",
        "href": "https://mits.ac.in/assets/pdf/iqac/Experential Learning.pdf"
      },
      {
        "title": "FishBowl",
        "href": "https://mits.ac.in/assets/pdf/iqac/FishBowl.pdf"
      },
      {
        "title": "Flipped Classroom",
        "href": "https://mits.ac.in/assets/pdf/iqac/Flipped Classroom.pdf"
      },
      {
        "title": "Group Grid",
        "href": "https://mits.ac.in/assets/pdf/iqac/Group Grid.pdf"
      },
      {
        "title": "Jeopardy",
        "href": "https://mits.ac.in/assets/pdf/iqac/Jeopardy.pdf"
      },
      {
        "title": "Jig Saw",
        "href": "https://mits.ac.in/assets/pdf/iqac/Jig Saw.pdf"
      },
      {
        "title": "Mind Mapping",
        "href": "https://mits.ac.in/assets/pdf/iqac/Mind Mapping.pdf"
      },
      {
        "title": "Peer Assisted Learning",
        "href": "https://mits.ac.in/assets/pdf/iqac/Peer Assisted Learning.pdf"
      },
      {
        "title": "The Minute Paper",
        "href": "https://mits.ac.in/assets/pdf/iqac/The Minute Paper.pdf"
      },
      {
        "title": "Think Pair Share",
        "href": "https://mits.ac.in/assets/pdf/iqac/Think Pair Share.pdf"
      },
      {
        "title": "Three Minute Message",
        "href": "https://mits.ac.in/assets/pdf/iqac/Three Minute Message.pdf"
      },
      {
        "title": "Problem Based Learning",
        "href": "https://mits.ac.in/assets/pdf/iqac/Problem Based Learning.pdf"
      },
      {
        "title": "Project Based Learning",
        "href": "https://mits.ac.in/assets/pdf/iqac/Project based Learning.pdf"
      },
      {
        "title": "Learning Outcomes",
        "href": "https://mits.ac.in/assets/pdf/iqac/Learning Outcomes.pdf"
      },
      {
        "title": "NEP 2020 – WIT& WIL Method Sample Template",
        "href": "https://mits.ac.in/assets/pdf/iqac/Sample Template_WIT& WIL method.pdf"
      },
      {
        "title": "WIT & WIL Method",
        "href": "https://mits.ac.in/assets/pdf/iqac/WIT & WIL Method.pdf"
      },
      {
        "title": "NEP 2020 – MITS Lab Protocol",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS Lab Protocol 6.11.24.pdf"
      },
      {
        "title": "NEP 2020 – Show & Tell Corner",
        "href": "https://mits.ac.in/assets/pdf/iqac/Show & Tell Corner.pdf"
      },
      {
        "title": "SDG Mapping",
        "href": "https://mits.ac.in/assets/pdf/iqac/SDG-Mapping.xlsx"
      },
      {
        "title": "SDG Events Mapping Template",
        "href": "https://mits.ac.in/assets/pdf/iqac/SDG Events Mapping _Template.xlsx"
      },
      {
        "title": "SDG Curriculum Mapping Template",
        "href": "https://mits.ac.in/assets/pdf/iqac/SDG_Curriculum_Mapping_Template.xlsx"
      },
      {
        "title": "SDG Project Mapping Template",
        "href": "https://mits.ac.in/assets/pdf/iqac/SDG Project Mapping _Template.xlsx"
      },
      {
        "title": "SDG Internship Mapping Template",
        "href": "https://mits.ac.in/assets/pdf/iqac/SDG Internship Mapping _Template.xlsx"
      },
      {
        "title": "SDG: QS Sustainability Rankings Template",
        "href": "https://mits.ac.in/assets/pdf/iqac/SDG-QS Sustainability Rankings Template.xlsx"
      },
      {
        "title": "Sample Procedure for SDG Curriculum Mapping",
        "href": "https://mits.ac.in/assets/pdf/iqac/Sample Procedure for SDG Curriculum Mapping.pdf"
      },
      {
        "title": "Draft Policy Document Format",
        "href": "https://mits.ac.in/assets/pdf/iqac/01_DRAFT_POLICY_DOCUMENT_FORMAT.pdf"
      },
      {
        "title": "OBE Teaching Formula",
        "href": "https://mits.ac.in/assets/pdf/iqac/OBE Teaching Formula.pdf"
      },
      {
        "title": "AI in Teaching and Learning",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS DTBU_ AI Tools Teaching & Learning-compressed.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC%20Quality%20Framework.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/QA%20Initiatives.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/QA 2022-23.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/QA 2021-22.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS-IQAC Hours.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/TQM in HEIs.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Academic Audit Process of IQAC.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Student Feedback Process Flow.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Fish Bone Chart.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Faculty Professional Growth Plan.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS DTBU Internal Quality Assurnace Cell Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Anti%20Bribery%20%20Corruption%20Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Climate%20Action%20Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Diversity%20and%20Inclusion%20Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Equality.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Sustainable%20Investment%20Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Industry Relations Cell _ Policy Document_2026.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Approved%20IMS%20Policy_ISO.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Minority Cell Policy Document(1)-1.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/POLICY DOCUMENT _ MITS Radio _ Signed.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS IEEE SB DTBU Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS IETE Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/WEC Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/assoc/UHV%20Cell%20Policy%20document%20ver01_25-26.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/EOMS Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Central Library Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Consultancy Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Examination Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Information Security Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Innovation & Startup Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/International Relations Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IPR Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Research & Development Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Sports Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Teaching - Learning Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Training and Placement Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Teacher Training Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Transport Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Alumni Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS-Stakeholder%20Feedback-Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS IQAC Academic Audit Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Anti-Discrimination Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/ANTI-HARASSMENT POLICY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/DISABILITY ACCOMMODATION POLICY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/ENERGY EFFICIENT RENOVATION AND BUILDING POLICY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/GENDER EQUITY POLICY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/LIFE LONG LEARNING ACCESS POLICY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/POLICY ADDRESSING POVERTY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/POLICY DEVELOPMENT FOR CLEAN ENERGY TECHNOLOGY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/POLICY FOR MINIMIZATION OF PLASTIC USE.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/POLICY WASTE DISPOSAL – HAZARDOUS MATERIALS.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/SMOKE-FREE CAMPUS POLICY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/WATER REUSE POLICY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/IMS-Policy MITS.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/AQAR 2023-24.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/AQAR 2022-23.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/AQAR%202021-2022.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/AQAR%202020-2021.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/AQAR2019-20.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/AQAR2018-19.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/AQAR2017-18.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/MoM 2023-24.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/MoM_2022-2023.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/IQAC%20MINUTES%20OF%20MEETING%202021%20-2022.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/0fde145546a6c0e9d269571626392b6d.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/2dba8e25c77e6c7ac33aa492458bb520.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/86b13e657eeba50d11452a0f0f0c54fd.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/MoM-2025-26.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/ADMIN%20AUDIT%20FORMAT.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/DEPARTMENT%20AUDIT%20FORMAT.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/FACULTY%20AUDIT%20FORMAT.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/NAAC PEER TEAM REPORT.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/NAAC Peer Team Metric wise Score Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/Report of External Peer Team Visit of IQAC during UGC Autonomy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/Student Satisfaction Survey AY 2024-25.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/Student Satisfaction Survey AY 2023-24.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/Student Satisfaction Survey AY 2022-23.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/Student%20Satisfaction%20Survey%202021-%202022.pdf"
      },
      {
        "title": "Download Brochure",
        "href": "https://mits.ac.in/public/uploads/static-pdf/MITS Deemed to be University Brochure 2026.pdf"
      }
    ],
    "contacts": [],
    "id": "iqac",
    "url": "https://mits.ac.in/newiqac1",
    "events": [
      {
        "title": "IQAC PDP poster 2026",
        "href": "https://mits.ac.in/assets/pdf/iqac/IQAC PDP poster-2026.pdf"
      }
    ]
  },
  "uhvc": {
    "name": "Universal Human Values (UHV) Cell",
    "aboutText": [
      "The Universal Human Values (UHV) Cell at Madanapalle Institute of Technology & Science is established pursuant to AICTE guidelines to integrate value-based education into engineering and management pedagogy.",
      "The Cell conducts foundational UHV courses, faculty development programs, and student workshops that explore self-exploration, harmony in human relationships, ecological balance, and professional ethics."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Patron",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. R. Preetha",
        "designation": "Associate Professor, Dept. of English",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. K. Arul kumar",
        "designation": "Associate Professor, Dept. of EEE",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "AICTE UHV Guidelines & SIP Compendium",
        "href": "https://www.aicte-india.org/"
      },
      {
        "title": "UHV Committee Office Order 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/UHV Committee Order 2025.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. R. Preetha",
        "designation": "Associate Professor & Coordinator - UHV Cell",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "uhv@mits.ac.in"
      }
    ],
    "id": "uhvc",
    "url": "https://mits.ac.in/uhv",
    "sections": [
      {
        "title": "Philosophical Framework & Objectives",
        "paragraphs": [
          "Understanding harmony at all four levels of human living: Self, Family, Society, and Nature/Existence.",
          "Embedding value education modules into student induction programmes (Deeksharambh).",
          "Encouraging socially conscious and environmentally responsible engineering innovation."
        ]
      }
    ],
    "events": [
      {
        "title": "5-Day Faculty Development Program on Universal Human Values in Higher Education",
        "href": "https://mits.ac.in/assets/pdf/assoc/UHV Committee Order 2025.pdf",
        "date": "20-07-2025"
      },
      {
        "title": "Student Induction Program (SIP) UHV Module for Freshers",
        "href": "https://mits.ac.in/assets/pdf/assoc/UHV Committee Order 2025.pdf",
        "date": "06-08-2025"
      },
      {
        "title": "Harmony in Human Relationships: Interactive Student Conclave",
        "href": "https://mits.ac.in/assets/pdf/assoc/UHV Committee Order 2025.pdf",
        "date": "14-02-2025"
      }
    ]
  },
  "parakh": {
    "name": "AICTE PARAKH Cell",
    "aboutText": [
      "The AICTE PARAKH Cell at Madanapalle Institute of Technology & Science facilitates the comprehensive assessment of student learning outcomes in cognitive, behavioral, and practical skills through the AICTE PARAKH portal.",
      "The Cell coordinates benchmark diagnostic evaluations for emerging engineers, enabling faculty to tailor pedagogic strategies that enhance higher-order problem solving and analytical thinking."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairperson",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. M. Sreedevi",
        "designation": "Professor & Head, Dept. of CST",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. C. Kamal Basha",
        "designation": "Dean Quality Assurance",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "PARAKH Portal Student Assessment Manual",
        "href": "https://parakh.aicte-india.org/"
      },
      {
        "title": "Institutional PARAKH Committee Office Order 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/PARAKH Committee 2025.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. M. Sreedevi",
        "designation": "Professor & Head, Dept. of CST & Coordinator - PARAKH Cell",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "parakh@mits.ac.in"
      }
    ],
    "id": "parakh",
    "url": "https://mits.ac.in/parakh",
    "sections": [
      {
        "title": "Objectives & Assessment Framework",
        "paragraphs": [
          "Administering AICTE PARAKH assessments to gauge technical, mathematical, and 21st-century workplace competencies.",
          "Using analytics and outcome benchmarks to identify curriculum enhancement requirements.",
          "Strengthening national competitiveness and graduate readiness for global industries."
        ]
      }
    ],
    "events": [
      {
        "title": "AICTE PARAKH Diagnostic Assessment Drive for Final & Pre-Final Year Students",
        "href": "https://parakh.aicte-india.org/",
        "date": "24-09-2025"
      },
      {
        "title": "Cognitive Outcome Mapping Workshop for Engineering Faculty",
        "href": "https://parakh.aicte-india.org/",
        "date": "10-04-2025"
      }
    ]
  },
  "nep": {
    "id": "nep",
    "name": "National Education Policy (NEP 2020) Cell",
    "aboutText": [
      "The National Education Policy (NEP 2020) Cell at Madanapalle Institute of Technology & Science (MITS) is established to align institutional curricula, pedagogy, and governance with the progressive mandates of the National Education Policy 2020.",
      "The cell facilitates multidisciplinary learning, curriculum flexibility with multiple entry and exit pathways, adoption of the Academic Bank of Credits (ABC), internship-embedded vocational education, and holistic student development.",
      "Through regular workshops, curriculum redesign conclaves, and policy dissemination sessions, the NEP Cell empowers faculty and students to realize the vision of an equitable, vibrant, and knowledge-driven academic ecosystem."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairperson",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Mr. E. Sathiyanarayanan",
        "designation": "Assistant Professor, Dept. of ECE",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. P. Ramanathan",
        "designation": "Vice-Principal (Administration)",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "4",
        "name": "Dr. C. Kamal Basha",
        "designation": "Dean Quality Assurance",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "5",
        "name": "Dr. S. Baskaran",
        "designation": "Head, Dept. of Mechanical Engineering",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "6",
        "name": "Dr. K. Arul kumar",
        "designation": "Associate Professor, Dept. of EEE",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "7",
        "name": "Dr. M. Sreedevi",
        "designation": "Professor & Head, Dept. of CST",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "NEP Co-ordinator & Committee Members 2025-26",
        "href": "https://mits.ac.in/assets/pdf/iqac/NEP Cell 2025-26.pdf"
      },
      {
        "title": "NEP Co-ordinator & Committee Members 2024-25",
        "href": "https://mits.ac.in/assets/pdf/iqac/NEP%20Committee%20-%202024.pdf"
      },
      {
        "title": "Deeksharambh - Student Induction Programme (SIP)",
        "href": "https://www.ugc.gov.in/pdfnews/3830821_DeeksharambhEnglish.pdf"
      },
      {
        "title": "LOCF - Learning Outcomes-Based Curriculum Framework",
        "href": "https://www.ugc.gov.in/e-book/locf.pdf"
      },
      {
        "title": "National Education Policy 2020 Official Document",
        "href": "https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf"
      },
      {
        "title": "Academic Bank of Credits (ABC) Implementation Guidelines",
        "href": "https://www.abc.gov.in/"
      }
    ],
    "contacts": [
      {
        "name": "Mr. E. Sathiyanarayanan",
        "designation": "Assistant Professor, Dept. of ECE & Coordinator - NEP Cell",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "nepcell@mits.ac.in"
      }
    ],
    "url": "https://mits.ac.in/nep",
    "sections": [
      {
        "title": "Objectives of NEP 2020 Cell",
        "paragraphs": [
          "Promoting holistic and multidisciplinary education across all engineering and management programs.",
          "Implementation and smooth credit transfer through the Academic Bank of Credits (ABC) portal under Digilocker.",
          "Fostering flexibility in academic pathways, major-minor degree tracks, and research-oriented honors degrees.",
          "Embedding Indian Knowledge Systems (IKS), ethics, human values, and skill-based vocational certifications in mainstream curricula.",
          "Facilitating experiential learning, community engagement, and mandatory industry internships for every learner."
        ]
      },
      {
        "title": "Key Focus Areas & Initiatives",
        "paragraphs": [
          "Multiple Entry and Exit Framework (MEEF) aligned with UGC guidelines.",
          "LOCF (Learning Outcomes-Based Curriculum Framework) formulation for all academic departments.",
          "Deeksharambh: Comprehensive Student Induction Programme for first-year entrants.",
          "Faculty Continuous Professional Development (CPD) in innovative pedagogy, digital technologies, and OBE assessment."
        ]
      }
    ],
    "events": [
      {
        "title": "One-Day Workshop on NEP 2020: Curriculum Framework & Credit System Implementation",
        "href": "https://mits.ac.in/assets/pdf/iqac/NEP Cell 2025-26.pdf",
        "date": "18-09-2025"
      },
      {
        "title": "Faculty Sensitization Programme on Multiple Entry-Exit Pathways & LOCF",
        "href": "https://mits.ac.in/assets/pdf/iqac/NEP%20Committee%20-%202024.pdf",
        "date": "12-03-2025"
      },
      {
        "title": "Deeksharambh - Student Induction Programme (SIP) for Batch 2025-26",
        "href": "https://www.ugc.gov.in/pdfnews/3830821_DeeksharambhEnglish.pdf",
        "date": "04-08-2025"
      }
    ]
  },
  "sdg": {
    "name": "Sustainable Development Goals Cell",
    "aboutText": [
      "MITS has constituted the SDG cell to match its academic activities with the United Nations 2030 agenda for sustainable developments. This agenda consists of 3 broad elements a. economic growth, b. social inclusion, c. environmental protection which are elaborated into 17 objectives (or goals).",
      "Madanapalle Institute of Technology & Science",
      "Assessment, Accreditations, Approvals, and Rankings",
      "The IQAC shall have the following functions:",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    ],
    "members": [
      {
        "sno": "Alumni",
        "name": "Alumni",
        "designation": "View",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "Employer",
        "name": "Employer",
        "designation": "View",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/The Impact Rankings 2025 Results.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Anti-Discrimination Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/ANTI-HARASSMENT POLICY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/DISABILITY ACCOMMODATION POLICY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/ENERGY EFFICIENT RENOVATION AND BUILDING POLICY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/GENDER EQUITY POLICY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/LIFE LONG LEARNING ACCESS POLICY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/POLICY ADDRESSING POVERTY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/POLICY DEVELOPMENT FOR CLEAN ENERGY TECHNOLOGY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/POLICY FOR MINIMIZATION OF PLASTIC USE.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/POLICY WASTE DISPOSAL – HAZARDOUS MATERIALS.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/SMOKE-FREE CAMPUS POLICY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/WATER REUSE POLICY.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Anti Bribery  Corruption Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Climate Action Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Diversity and Inclusion Policy.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Equality.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Sustainable Procurement Policy-compressed.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/AICTE -ExaminationReforms (Nov 2018) (uploaded on 20231102).pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/AICTE-Model Question Paper (uploaded on 20231102).pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NAAC (1st Cycle) - Self Study Report (SSR).pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NAAC Autonomous_College Benchmarks December 2022.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NAAC Autonomous_College_SOP December 2022.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NAAC Autonomous_College Manual_29-03-2023_Updated_9-8-2023.pdf"
      },
      {
        "title": "Document Link",
        "href": "http://naac.gov.in/images/docs/Publication/books/QMS_IN_HE_1772022.pdf"
      },
      {
        "title": "Document Link",
        "href": "http://naac.gov.in/images/docs/Publication/EQUAM-BI-NAAC-Project-Document.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Comparison of NAAC Criteria and ISO 210012018 EOMS Clauses.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NBA_Guidelines for Faculty Updated 22-08-2023.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NBA_UGEngg_Tier_I_Manual (uploaded on 20231102)-2.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NIRF 2023 Methodology - Engineering.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NIRF 2023 Methodology - Management.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NIRF 2023 Methodology - Overall.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS e-Content.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/E- Content Facilities in MITS CRS.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/E- Content Preparation _ Declaration Form.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/E- Content Preparation Standard Operating Procedure-SOP.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/ed46c87d7524601b5488d7516cf131d5.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/CSE%20UG%20PEOs%20&%20POs.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/5bd07f16cbebedd4a2ae66f779cb8412.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/bf5cbf47b24c0038d0214b4c63a286fb.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/3085fc5bac5d124dfac551ddc5c04bc4.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/dad4367ee11ac4205b47349921354e98.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/a362fcdaee05429e6c443f6b052b7282.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/courseattainment/3246f8050efcce5e4666346725a26690.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/e-book/Quality%20Mandate%20E-BOOK.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/3830821_DeeksharambhEnglish.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/e-book/locf.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/4874522_Draft-Curriculum-for-Life-SKill-Jeevan-Kaushal.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/e-book/UNNAT%20BHARAT%20ABHIYAN.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/e-book/CARE%20ENGLISH.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/2089255_STRIDE_FINAL_BOOK.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/8799370_Mulya-Parvah_Guideline.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/e-book/GURU%20DAKSHTA%20English.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/0899501_IQAC-guidelines-for-University.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/5172195_Guideline_IQACs.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/e-book/EVALUATION%20ENGLISH.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/1031121_Guidelines-Innovative-Pedagogical-Approaches-Evaluation-Reforms.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/2990035_Final-NHEQF.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/9028476_Report-of-National-Credit-Framework.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/1566510_SAARTHI-GUIDELINES.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/e-book/GL%20Multipe%20Entry%20Exit.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://www.ugc.gov.in/pdfnews/6769753_UGC-Letter-Implementation-of-NEP.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/ADMIN AUDIT FORMAT.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/DEPARTMENT AUDIT FORMAT.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/FACULTY AUDIT FORMAT.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/AQAR_MITS Support Documents.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Supporting Document Manual - Quantitative Inputs For AQAR.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS_benchmarks-_IQAC.xlsx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS-AQAR-Benchmarks-SOP.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NIRF - Financial_data_template_MITS.xlsx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/NIRF- Department_data_template_MITS.xlsx"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/sdg/Energy_Generated & Consumed.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/sdg/Green Coverage Details.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/sdg/Health and Well Being Details.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/sdg/Sustainable Communities and Patnership Details.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/sdg/Waste Management Details.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/sdg/Water Management Details.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/QA%20Initiatives.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/MITS-IQAC Hours.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/TQM in HEIs.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Academic Audit Process of IQAC.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Student Feedback Process Flow.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Fish Bone Chart.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/iqac/Faculty Professional Growth Plan.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/AQAR%202021-2022.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/AQAR%202020-2021.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/AQAR2019-20.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/AQAR2018-19.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/AQAR2017-18.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/IQAC%20MINUTES%20OF%20MEETING%202021%20-2022.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/0fde145546a6c0e9d269571626392b6d.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/2dba8e25c77e6c7ac33aa492458bb520.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/86b13e657eeba50d11452a0f0f0c54fd.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/ADMIN%20AUDIT%20FORMAT.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/DEPARTMENT%20AUDIT%20FORMAT.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/FACULTY%20AUDIT%20FORMAT.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/db689e5eef62bf46b6430dfdf1c0ed07.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/NAAC PEER TEAM REPORT.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/NAAC Peer Team Metric wise Score Report.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/public/uploads/naac/Student%20Satisfaction%20Survey%202021-%202022.pdf"
      },
      {
        "title": "Download Brochure",
        "href": "https://mits.ac.in/public/uploads/static-pdf/MITS Deemed to be University Brochure 2026.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. Sanoop P",
        "designation": "Assistant Professor",
        "email": "",
        "phone": "Phone :\n+91-8571-280255 ",
        "address": "Madanapalle Institute of Technology & Science"
      }
    ],
    "id": "sdg",
    "url": "https://mits.ac.in/sdg-cell"
  },
  "startup": {
    "name": "Startup Cell",
    "aboutText": [
      "Madanapalle Institute of Technology & Science - Deemed to be University has inculcated the culture of entrepreneurship. MITS has initiated the incubation centre in the year 2023 with an intention to provide creative atmosphere, wherein new ideas and projects can flourish. The incubation centre is registered as Madanapalle Institute of Technology and Science Foundation (MITS Foundation), a section 8 company as per the Companies Act, 2013. The foundation was registered on 3rd October 2024. The Foundation is established to offer a platform for staffs, students, alumni and general public who are aligned with its theme, for the purpose of business incubation and innovation. The center is taking an active role in fostering an entrepreneurial culture and environment for ideating, establishing, and commercializing businesses. Also, it provides working spaces for incubation and offers counseling services on business management and technological solutions. The approach is intended to help innovators in transforming their ideas into products. It identifies tools, devices, and technology and putting together a network to commercialize the items or services, thereby innovators and entrepreneurs can get benefitted.",
      "❖ To become a prominent incubation center for developing sustainable and successful startup ventures and contribute to the Socio-techno-economic development of the nation.",
      "❖ MITS Foundation is committed to foster an innovation and entrepreneurship culture and support budding innovators in their early-stage business ventures.",
      "National Innovation Startup Policy Statement",
      "To provide guidelines for creating an ecosystem for fostering innovation and entrepreneurial spirit among Students, Faculty and Staff, that promotes the establishment of Science & Technology Driven Start-ups which benefits the society, nation and beyond."
    ],
    "members": [],
    "documents": [
      {
        "title": "MITS Startup Policy",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS-Startup-Policy.pdf"
      },
      {
        "title": "Pitch Deck Template - 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/Pitch_Deck_Template.pptx"
      },
      {
        "title": "Startup Cell Achievements",
        "href": "https://mits.ac.in/assets/pdf/assoc/Startup Cell Achievements.pdf"
      },
      {
        "title": "List of Startups Incubated in the Year 2024-25",
        "href": "https://mits.ac.in/assets/pdf/assoc/List of Startups Incubated in the Year 2024-25.pdf"
      },
      {
        "title": "List of Startups Incubated in the Year 2023-24",
        "href": "https://mits.ac.in/assets/pdf/assoc/List of Startups Incubated in the Year 2023-24.pdf"
      },
      {
        "title": "NISP Annual News Letter 2023-24",
        "href": "https://mits.ac.in/assets/pdf/assoc/NISP_Annual News Letter 2022-23.pdf"
      },
      {
        "title": "NISP 2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/NISP%202019.pdf"
      },
      {
        "title": "AP Innovation and Startup Policy",
        "href": "https://mits.ac.in/assets/pdf/assoc/AP%20Innovation%20and%20Startup%20Policy.pdf"
      },
      {
        "title": "NISP Commitee Members 2025-26",
        "href": "https://mits.ac.in/assets/pdf/assoc/Office Order-STARTUP & INCUBATION CELL-2025.pdf"
      },
      {
        "title": "NISP Commitee Members 2023-24",
        "href": "https://mits.ac.in/assets/pdf/assoc/NISP%20Commitee%20Members.pdf"
      },
      {
        "title": "MITS Startup Policy",
        "href": "https://mits.ac.in/assets/pdf/assoc/Scanned_MITS_ISP_policy.pdf"
      },
      {
        "title": "Documents Required for Startup",
        "href": "https://mits.ac.in/assets/pdf/assoc/Documents Required for Startup.pdf"
      },
      {
        "title": "Flowchart for Startup Registration",
        "href": "https://mits.ac.in/assets/pdf/assoc/Flowchart for Startup Registration.pdf"
      },
      {
        "title": "Download Brochure",
        "href": "https://mits.ac.in/public/uploads/static-pdf/MITS Deemed to be University Brochure 2026.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. L. Anantha Raman",
        "designation": "Coordinator",
        "email": "",
        "phone": "Phone :\n+91-8571-280255",
        "address": "Madanapalle Institute of Technology & Science"
      }
    ],
    "id": "startup",
    "url": "https://mits.ac.in/nisp"
  },
  "ipr": {
    "name": "Intellectual Property Rights (IPR) Cell",
    "aboutText": [
      "The Intellectual Property Rights (IPR) Cell at Madanapalle Institute of Technology & Science (MITS) is committed to creating awareness, fostering an inventive spirit, and providing institutional support for patent filing, design registration, copyrights, and technology commercialization.",
      "The Cell guides faculty members, researchers, and students through the entire lifecycle of IP protection—from invention disclosure and patentability searches to drafting, filing, and responding to examination reports.",
      "Collaborating closely with the National IP Awareness Mission (NIPAM) and MSME IP Facilitation Centre, the IPR Cell ensures that high-impact research translates into protected commercial intellectual assets."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairperson",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. P. Sivaiah",
        "designation": "Associate Professor, Dept. of Mechanical Engineering",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. K. Arul kumar",
        "designation": "Associate Professor, Dept. of EEE",
        "position": "Co-Coordinator",
        "email": ""
      },
      {
        "sno": "4",
        "name": "Dr. P. Ramanathan",
        "designation": "Vice-Principal (Administration)",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "5",
        "name": "Dr. C. Kamal Basha",
        "designation": "Dean Quality Assurance",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "MITS IPR Committee 2025-26",
        "href": "https://mits.ac.in/assets/pdf/admin/IPR Committee-17-12-2025.pdf"
      },
      {
        "title": "MITS Intellectual Property Rights Policy",
        "href": "https://mits.ac.in/assets/pdf/admin/MITS-IPR-Policy.pdf"
      },
      {
        "title": "Invention Disclosure Form (IDF) Template",
        "href": "https://mits.ac.in/assets/pdf/admin/MITS-IPR-Policy.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. P. Sivaiah",
        "designation": "Associate Professor (ME) & Coordinator - IPR Cell",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "iprcell@mits.ac.in"
      },
      {
        "name": "Dr. K. Arul kumar",
        "designation": "Associate Professor (EEE) & Co-Coordinator - IPR Cell",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "arulkumark@mits.ac.in"
      }
    ],
    "id": "ipr",
    "url": "https://mits.ac.in/ipr",
    "sections": [
      {
        "title": "Vision & Mission",
        "paragraphs": [
          "Vision: To establish an innovation-led ecosystem that nurtures intellectual property creation, protection, and commercialization to address societal and technological challenges.",
          "Mission: To build institutional capability for generating novel inventions, establishing seamless patent filing procedures, and safeguarding the intellectual assets of the university community."
        ]
      },
      {
        "title": "Core Functions & Services",
        "paragraphs": [
          "Assisting inventors with prior art searches and novelty assessments using global patent databases.",
          "Institutional financial grant facilitation for patent filing, publication, and examination charges.",
          "Organizing regular IPR awareness drives, patent drafting workshops, and IP clinics.",
          "Managing technology transfer, licensing agreements, and industry partnerships for patented technologies."
        ]
      }
    ],
    "events": [
      {
        "title": "National Intellectual Property Awareness Mission (NIPAM) Interactive Workshop",
        "href": "https://mits.ac.in/assets/pdf/admin/IPR Committee-17-12-2025.pdf",
        "date": "14-11-2025"
      },
      {
        "title": "Masterclass on Patent Drafting, Search Methodologies, and Commercialization",
        "href": "https://mits.ac.in/assets/pdf/admin/MITS-IPR-Policy.pdf",
        "date": "26-04-2025"
      },
      {
        "title": "IP Clinic: One-on-One Invention Evaluation and Prior Art Review for Final Year Projects",
        "href": "https://mits.ac.in/assets/pdf/admin/MITS-IPR-Policy.pdf",
        "date": "10-02-2025"
      }
    ]
  },
  "dts": {
    "name": "Drone & Technology Studio (DTS) Cell",
    "aboutText": [
      "The Drone & Technology Studio (DTS) Cell at Madanapalle Institute of Technology & Science is an advanced interdisciplinary innovation center designed to build next-generation skills in unmanned aerial vehicles (UAVs), robotics, IoT, and embedded autonomous technologies.",
      "The DTS Cell provides a creative platform where students experiment with drone aerodynamics, flight controllers, autonomous path planning, sensor telemetry, and payloads for agricultural and surveillance applications.",
      "Through collaborative hackathons, project incubations, and DGCA-aligned drone piloting workshops, the DTS Cell transforms theoretical engineering foundations into practical aerial intelligence solutions."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairperson",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Mr. Arjun Chakravarthi Pogaku",
        "designation": "Assistant Professor, Dept. of ECE",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. K. Arul kumar",
        "designation": "Associate Professor, Dept. of EEE",
        "position": "Co-Coordinator",
        "email": ""
      },
      {
        "sno": "4",
        "name": "Dr. S. Baskaran",
        "designation": "Head, Dept. of Mechanical Engineering",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "5",
        "name": "Dr. K. Sathesh",
        "designation": "Associate Professor, Dept. of ECE",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "DTS Office Order",
        "href": "https://mits.ac.in/assets/pdf/assoc/DTS-Office Order.pdf"
      },
      {
        "title": "DTS Policy Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/DTS Policy Doc.pdf"
      },
      {
        "title": "DTS Committee",
        "href": "https://mits.ac.in/assets/pdf/assoc/DTS-Committee.pdf"
      },
      {
        "title": "MITS Intellectual Property Rights Policy",
        "href": "https://mits.ac.in/assets/pdf/admin/MITS-IPR-Policy.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Mr. Arjun Chakravarthi Pogaku",
        "designation": "Assistant Professor (ECE) & Coordinator - DTS Cell",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "dtscell@mits.ac.in"
      },
      {
        "name": "Dr. K. Arul kumar",
        "designation": "Associate Professor (EEE) & Co-Coordinator - DTS Cell",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "arulkumark@mits.ac.in"
      }
    ],
    "id": "dts",
    "url": "https://mits.ac.in/dts",
    "sections": [
      {
        "title": "Objectives & Mission",
        "paragraphs": [
          "Equipping engineering graduates with cutting-edge expertise in drone design, avionics, and autonomous systems.",
          "Fostering cross-departmental research integrating IoT, Computer Vision, AI edge computing, and aerial robotics.",
          "Encouraging student entrepreneurship in Agri-Tech drones, disaster response robotics, and smart surveillance systems.",
          "Conducting certified skill training in UAV flight piloting, maintenance, and DGCA safety protocols."
        ]
      },
      {
        "title": "Facilities & Focus Areas",
        "paragraphs": [
          "Quadcopter and Hexacopter Prototyping Laboratory with 3D printing and flight simulation suites.",
          "FPV (First Person View) racing and obstacle avoidance testing environment.",
          "Payload integration lab for multispectral cameras, LiDAR, and thermal imaging sensors.",
          "Collaborative drone startup incubation with regional industry partners."
        ]
      }
    ],
    "events": [
      {
        "title": "Hands-on Workshop on Drone Aerodynamics, Fabrication & Flight Control Systems",
        "href": "https://mits.ac.in/assets/pdf/assoc/DTS-Office Order.pdf",
        "date": "20-10-2025"
      },
      {
        "title": "Autonomous Drone Navigation & Computer Vision Challenge",
        "href": "https://mits.ac.in/assets/pdf/assoc/DTS Policy Doc.pdf",
        "date": "15-05-2025"
      },
      {
        "title": "Drone-based Agricultural Spraying Demonstration & Field Trial",
        "href": "https://mits.ac.in/assets/pdf/assoc/DTS-Committee.pdf",
        "date": "12-02-2025"
      }
    ]
  },
  "cii": {
    "name": "Centre of Innovation & Incubation",
    "aboutText": [
      "Innovation center focuses on following activities:",
      "Ignition, Innovation and Incubation center",
      "The Innovation and Incubation Center is a common platform where the Students, research scholars, researchers, field experts and industry personals are interacting and working in partnership to instigate breakthroughs: fusing the uncommon, taking risks and thinking big.",
      "The Center of Innovation and Incubation is a common platform where the Students, research scholars, researchers, field experts and industry personals are interacting and working in partnership to instigate breakthroughs: fusing the uncommon, taking risks and thinking big.",
      "Due to a rapid development in science and technology, Management has decided to establish MITS-INNOVATION CENTRE in our college campus. A distinct office for innovation activities has been established in MITS campus on 2nd November-2015. The main objective is for invoking the innovative ideas from teaching and students fraternity and also to increase the job opportunities for young and dynamic students. Students are motivated to actively participate in the management of technology transfer at the MITS campus. Today, our main objective is to increase the effectiveness and utilization of development and research activities in various domains such as social, business, education and so on. Our management is actively assisting in broadening the scope of research activities and utilization of research and intellectual properties. We thereby can increase our efficiency and add value to our MITS’s mission.",
      "The MITS Incubation Centre has been initiated in the year 2015 and Provides creative atmosphere where new ideas and projects can flourish. Incubation center which will offer a platform for staffs and students for the purpose of business incubation and innovation. Provides spaces for incubation and offers counseling services on business management and technological solutions. Interacting with the industries and other institutes, finding the real world social issues and providing appropriate feasible solutions. Ours is a systematic process designed for innovators to convert their concepts, ideas into product. This entire team is consistently working for the growth of staff and students in MITS campus. We are identifying the tools, devices, technologies and constructing a network for commercializing the products or services. Innovators and entrepreneurs can get all the benefits with respect to the technology, expertise and facilities from MITS environment.",
      "Trishant III year CSE-DS Student participate Young Scientist Conference in IISC Bangalore and got first prize project title “ Autonomous Flying Copter for Public Safety\", on 7th January 2024.",
      "Desai Rohith Reddy and Bode Reddy Prasad Student of III-year CSE- CS have participated at the iTIC, IIT Hyderabad Greenko BUILD 2023 Program and has been awarded a financial support of Rs. 1,00,000/- from iTIC incubator at IIT Hyderabad."
    ],
    "members": [
      {
        "sno": "Sl.No",
        "name": "Event Type",
        "designation": "Title",
        "position": "Description",
        "email": "From"
      },
      {
        "sno": "1",
        "name": "Competition",
        "designation": "Proof of Concept (POC) Submission",
        "position": "Inviting nominations of maximum 4 best Ideas/PoCs from each IICs in two major categories of themes (Category A and Category B)",
        "email": "15-05-2019"
      },
      {
        "sno": "2",
        "name": "Offline Workshop",
        "designation": "Workshop on Cognitive Skills, Design Thinking and Critical Thinking using local resource persons",
        "position": "IICs have to organize this workshop and upload the report on the IIC portal as per parameters attached.",
        "email": "04-09-2019"
      },
      {
        "sno": "3",
        "name": "Leadership Talk",
        "designation": "Episode 04 of India First Leadership Talk with with Prof. Anil D. Sahasrabudhe, Chairman, AICTE",
        "position": "MHRD Innovation Cell (MIC) is organizing \"India First Leadership Talk Series\" with Prof. Anil D. Sahasrabudhe, Chairman, All India Council for Technical Education.",
        "email": "04-10-2019"
      },
      {
        "sno": "4",
        "name": "Design Competition",
        "designation": "Design Competition for Proof of Concept Development",
        "position": "This is the next step after the \"Idea Competition\". Selected Ideas at the end of the Idea Competition should be invited to give a presentation to the Evaluation Committee based on their idea submitted. IICs should organize Design Competition / Workshop for awareness among students who submitted the idea to designing and development of Proof of Concept of Idea submitted.",
        "email": "04-01-2019"
      },
      {
        "sno": "5",
        "name": "Competition",
        "designation": "Idea Competition",
        "position": "Invite innovative Ideas from students of your Institution from various departments to solve the problems related to at least two/all of following themes- 1. Agriculture & Rural development 2. Health Care 3. Energy 4. Environment 5. Others",
        "email": "15-02-2019"
      },
      {
        "sno": "6",
        "name": "Leadership Talk",
        "designation": "Episode 03 of India First Leadership Talk with Dr. Ajit Doval, NSA, Govt. of india",
        "position": "MHRD Innovation Cell (MIC)",
        "email": "21-02-2019"
      },
      {
        "sno": "7",
        "name": "Leadership Talk",
        "designation": "Episode 02 of India First Leadership Talk with Dr. Anand Deshpande, CMD, Persistent Systems Ltd.",
        "position": "Episode 02 of “India First Leadership Talk Series” with Dr. Anand Deshpande, Founder, Chairman & Managing Director Persistent Systems Ltd. on theme “Planning for Career, Future industry trends and Startup”. This will be an hour long program",
        "email": "24-01-2019"
      },
      {
        "sno": "8",
        "name": "Workshop",
        "designation": "Off line workshop on IPR for Students and Faculty Members",
        "position": "offline session by Local expert invited by Institute for Workshop on \"IPR for Students and Faculty Members\" Date: 10th January, 2019 to 24th January 2019, preferably on 10th January but date can be extended by institute for maximum 15 days due to unavoidable circumstances.",
        "email": "01-11-2019"
      },
      {
        "sno": "9",
        "name": "Workshop",
        "designation": "Workshop on IPR for Students and Faculty Members",
        "position": "Facebook Live session by MHRD Innovation Cell for Workshop on \"IPR for Students and Faculty Members\" Date: 10th January, 2019 Time: 1:30 PM to 3:30 PM",
        "email": "01-10-2019"
      },
      {
        "sno": "10",
        "name": "Leadership Talk",
        "designation": "India First Leadership Talk by Shri. Anand Mahindra, Chairman, Mahindra Group",
        "position": "MHRD Innovation Cell (MIC) is organising \"India First Leadership Talk Series\" as per IIC calendar on 8th January 2019. Shri. Anand Mahindra, Chairman, Mahindra Group will be the speaker for this session. We are inviting questions from students all across the country to be asked from Shri. Anand Mahindra. One question per IIC regarding Innovation, leadership and achievements will be entertained. Submit your questions at www.mic.gov.in/questions.html",
        "email": "01-08-2019"
      },
      {
        "sno": "11",
        "name": "Launch",
        "designation": "Launch of Institution Innovation Council",
        "position": "Launch of IICs by Hon'ble Minister of HRD, Shri Prakash Javadekar",
        "email": "21-11-2018"
      }
    ],
    "documents": [
      {
        "title": "Commitee Members 2025-26",
        "href": "https://mits.ac.in/assets/pdf/assoc/Office Order-IIC CELL-2025.pdf"
      },
      {
        "title": "Commitee Members 2024-25",
        "href": "https://mits.ac.in/assets/pdf/assoc/IIC -Innovation-Office Order- sep2024.pdf"
      },
      {
        "title": "Commitee Members 2023-24",
        "href": "https://mits.ac.in/assets/pdf/assoc/Institute Innovation Council (IIC) Reconstitution.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/ece/Bhuwalka Castings & Forging Pvt. Ltd., & Vishwakarma Refractories Pvt. Ltd.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mech/Multidisciplinary Research Proposal Writing.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/ece/Kajaria Ceramics Limited.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/civil/Design Thinking, Critical Thinking Innovation Design.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/MITS Spark Innovation Day Celebration.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/A Department Level Hackathon SMART INDIA HACKATHON 2K25.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/Next-Gen Tech Mastery Cloud, DevOps & AI Prompting.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/Angel Investment VC Funding Opportunity for Early-Stage Entrepreneurs.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/ca/Generative AI Using Microservices Architecture.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/civil/World Environment Day 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mba/Integrating Sustainability into Business Strategy Challenges Opportunities and Best Practices.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/aids/UI-UX Design-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/Innovation, Leadership and the Spirit of Swami Vivekananda.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/aids/Innovate with AI Tools A KNIME based Approach.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/ca/National Education Day-2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/API Attack Vectors and AI Exploits Learn by Doing.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cst/Intellectual Property Rights-2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/aids/Empowering Innovation through Cloud Storage and Security.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/Launching Your Tech Career From Front-End Development to Data Analytics Mastery.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/ece/Design Thinking in IoT Development-20-11-2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/Intellectual Property Rights 13-11-2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mech/Journey from a Tinkerer to an Entrepreneur.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/ece/Microwave Instrumentation-8-11-2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/aids/Basics of IPR and Patent Filing.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/eee/Smart Grid and Renewable Energy with AI Tools.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/civil/Recent trends in Ground Improvement Techniques.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/ece/Design Thinking, Research and Innovation.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/eee/Innovators of Tomorrow A Hands-On STEM and Creativity Program for Young Minds.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/aids/Department-Level Internal Hackathon.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cst/Departmental Level Hackathon-CST.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/Departmental Level Hackathon.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mech/A Talk on Journey towards Entrepreneurship.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/VC Funding Opportunity for Early-Stage Entrepreneurs.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cst/Empower Yourself as a Computer Science Entrepreneur.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/aids/Value Proposition Fit & Business Fit.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/How to Write a Patent Application.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cst/Deep Learning Techniques for Data Mining, Predictive Maintenance.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/ca/Legal Structures and Ethical Steps in Establishing Startups.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/Innovation & Technology.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mech/MITS Prototype Challenge 2.0 & Inauguration of Startup Cell.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mech/Mechonanace-2K24.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cst/Internal Project Expo-2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/aids/An Interactive Session on Opportunities in Japan.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/aids/Designing Your Digital Presence.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mech/Inno-Tech Spark 2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/ca/Awareness on IPR.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/eee/Report Expert Tal_29_Feb_2024_Intellectual Property Rights.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/Unveiling Emerging Trends in Artificial Intelligence and Data Renaissance.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/One Week Bootcamp.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/eee/Expert talk on Beyond Boundaries Design Thinking as The Catalyst For Innovation.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/eee/Report_National Energy Conservaion Day_14-12-2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/civil/National Pollution Control Day.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship and Innovation.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/eee/Motivational session on Design Thinking.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/Crafting Embedded Systems with C C++Getting into Open BMC Project.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship and the Companies Act 2013.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/aids/Primer on Containers and Microservices.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/ARTS & CRAFTS EXHIBITION 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/AGRIBUSINESS INCUBATION SCHEME.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS Ideathon 1.0 2023 - Report-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MSME Day 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/aids/IMAGE PROCESSING using MATLAB.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/Recent Advancement in Smart Grid and Renewable Energy with Modern Computational Technique-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/eee/Application of Automated Machine Learning in Electrical Industry.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/Bigdata Technologies-2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Intellectual Property Rights _IPRs_ and IP Management for Startup.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/National Technology Day 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/NARL-2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/How to plan for start-up and Legal Ethical Steps.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/RAIDS2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/INVICTA-2k23-CST.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/Cutting Edge Technology on Cloud Computing.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/Encouraging Students for Research.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/IIC Event  Report on 23.02.2023-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/IIC Event  Report on 21.02.2023-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/Machine Learning and its Applications-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/Entrepreneurial Uses of AI-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/How to Groom Entrepreneurs.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/Challenges and Opportunities in IT Sector.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/Linux and Databases.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Seminar 12.01.2023-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/Entrepreneurship Opportunities in Solar Power-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report of Guest talk on 27-12-22-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/An Introduction to Research Document Preparation using LaTex-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report_Guest Lecture_14-12-2022-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report_Poster Presentation_14-12-2022-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/Guest Lecture VLSI-2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/event/MITS-INTRA hackathon-2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/My Story – Motivational Session by a Start-up Founder-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/Fundamentals of PCB design.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/Real Time Cyber Security solutions.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report-National Education Day-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report of Webinar on ENTREPRENEURSHIP INNOVATION AND CAREER OPPORTUNITY-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report of Workshop on Design Thinking Innovation 2022-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on National Innovation Day 2022-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/Recent Tools & Techniques for Data Science and Artificial Intelligence.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/Report_Guest Lecture_17-09-2022-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/ assets/pdf/facility/MATLAB Toolbox for IOT Application Development.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/IMPACT LECTURE SERIES REPORT.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/REPORT ON -SIH-INTERNAL HACKATHON-2022 PDF FORMAT-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Promoting Innovative Ventures Role of Technology Business Incubator.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/A Brief Overview of Thermal Power Plant.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/world youth skills day-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Innovation Day-15-Oct-2019.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS INNOVATION CLUB ANNUAL MEET-2019-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on Felicitation one day program.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Awareness Camp.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/DESIGN THINKING WORKSHOP REPORT WITH STILLS-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/OFF-LINE WORKSHOP.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/FB LIVE WORKSHOP.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/innovationclub-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/JNANABHERI.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Android Applications.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/3-DAY WORKSHOP ON IoT.pdf"
      },
      {
        "title": "Download Brochure",
        "href": "https://mits.ac.in/public/uploads/static-pdf/MITS Deemed to be University Brochure 2026.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. Anantha Raman L",
        "designation": "Coordinator",
        "email": "",
        "phone": "Phone :\n+91-8571-280255",
        "address": "Madanapalle Institute of Technology & Science"
      }
    ],
    "id": "cii",
    "url": "https://mits.ac.in/innovation-center"
  },
  "ipfc": {
    "name": "MSME Intellectual Property Facilitation Centre (IPFC)",
    "aboutText": [
      "The MSME Intellectual Property Facilitation Centre (IPFC) at Madanapalle Institute of Technology & Science is established with grant-in-aid support from the Ministry of MSME, Government of India, to nurture intellectual property awareness, registration, and commercialization among Micro, Small, and Medium Enterprises (MSMEs), grassroots innovators, and academic researchers in the Rayalaseema region.",
      "The Centre provides specialized guidance in patent drafting, industrial design registrations, trademark protection, and geographical indications, serving as an innovation catalyst connecting academia with regional industrial clusters."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c) and IPFC Chairperson",
        "position": "Chairman",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. P. Sivaiah",
        "designation": "Associate Professor, Dept. of Mechanical Engineering",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. K. Arul kumar",
        "designation": "Associate Professor, Dept. of EEE",
        "position": "Co-Coordinator",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "IPFC Establishment Order & MSME Guidelines",
        "href": "https://mits.ac.in/assets/pdf/assoc/IPFC Committee Order.pdf"
      },
      {
        "title": "Patent and Trademark Advisory Handbook",
        "href": "https://mits.ac.in/assets/pdf/admin/MITS-IPR-Policy.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. P. Sivaiah",
        "designation": "Associate Professor (ME) & Coordinator - IPFC",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "ipfc@mits.ac.in"
      },
      {
        "name": "Dr. K. Arul kumar",
        "designation": "Associate Professor (EEE) & Co-Coordinator - IPFC",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "arulkumark@mits.ac.in"
      }
    ],
    "id": "ipfc",
    "url": "https://mits.ac.in/ipfc",
    "sections": [
      {
        "title": "Services Offered",
        "paragraphs": [
          "Pro bono and subsidized patentability evaluations and prior art search services for local MSMEs.",
          "Facilitating government subsidies under MSME IP schemes for patent and trademark applications.",
          "Incubating innovative industrial designs and filing geographical indication registrations for regional artisanal clusters."
        ]
      }
    ],
    "events": [
      {
        "title": "MSME IP Awareness & Capacity Building Conclave for Regional Entrepreneurs",
        "href": "https://mits.ac.in/assets/pdf/assoc/IPFC Committee Order.pdf",
        "date": "18-11-2025"
      },
      {
        "title": "Workshop on Trademark Registration & Brand Building for Startups",
        "href": "https://mits.ac.in/assets/pdf/assoc/IPFC Committee Order.pdf",
        "date": "25-03-2025"
      }
    ]
  },
  "iiic": {
    "name": "Industry-Institute Interaction Cell (IIIC / IRC)",
    "aboutText": [
      "The Industry-Institute Interaction Cell (IIIC / Industry Relations Cell - IRC) at Madanapalle Institute of Technology & Science acts as the strategic interface bridging academic curricula with corporate industry practices.",
      "The Cell catalyzes active corporate MoUs, industry-sponsored laboratories, student internships, sabbatical faculty training, and joint consultancy projects with Fortune 500 tech leaders and premier manufacturing conglomerates.",
      "Through structured industry engagement, the Cell ensures that MITS graduates possess job-ready competencies and deep exposure to contemporary technological workflows."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairperson",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. G. Sreenivasulu",
        "designation": "Dean - Industry Institute Interaction",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. P. Ramanathan",
        "designation": "Vice-Principal (Administration)",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "4",
        "name": "Dr. S. Baskaran",
        "designation": "Head, Dept. of Mechanical Engineering",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "MITS IRC Policy Document 2025-2026",
        "href": "https://mits.ac.in/assets/pdf/assoc/Industry Relations Cell _ Policy Document_2026.pdf"
      },
      {
        "title": "MITS IRC Committee order 2025-2026",
        "href": "https://mits.ac.in/assets/pdf/assoc/Industry Relation Cell (IRC) Consitutions 2025.pdf"
      },
      {
        "title": "MITS IRC MOM 2025-2026",
        "href": "https://mits.ac.in/assets/pdf/assoc/MOM-iiic-2025-26.pdf"
      },
      {
        "title": "MITS Internship Guidelines 2024-25",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS-INTERNSHIP GUDELINES 2024-25.pdf"
      },
      {
        "title": "Committee Members 2024-25",
        "href": "https://mits.ac.in/assets/pdf/assoc/IIIC -Office Order-sep2024.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. G. Sreenivasulu",
        "designation": "Dean - Industry Institute Interaction",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "iiic@mits.ac.in"
      }
    ],
    "id": "iiic",
    "url": "https://mits.ac.in/iiic",
    "events": [
      {
        "title": "Annual Industry-Academia Conclave & HR Leadership Round Table 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/Industry Relations Cell _ Policy Document_2026.pdf",
        "date": "28-08-2025"
      },
      {
        "title": "Corporate Internship Fair & Tech Talent Showcase",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS-INTERNSHIP GUDELINES 2024-25.pdf",
        "date": "14-03-2025"
      },
      {
        "title": "Executive Seminar on Cloud Computing and Enterprise Architecture",
        "href": "https://mits.ac.in/assets/pdf/assoc/MOM-iiic-2025-26.pdf",
        "date": "12-11-2024"
      }
    ],
    "sections": [
      {
        "title": "Strategic Focus Areas",
        "paragraphs": [
          "Facilitating mandatory full-semester corporate internships for undergraduate and postgraduate scholars.",
          "Establishing state-of-the-art Centers of Excellence (CoE) in association with global technology leaders.",
          "Organizing executive guest lectures, industry conclaves, and corporate hackathons.",
          "Facilitating faculty industrial consultancies and sponsored research projects."
        ]
      }
    ]
  },
  "edc": {
    "name": "Entrepreneurship Development Cell",
    "aboutText": [
      "Entrepreneurship Development Cell was established on 1-7-2010 with the one faculty as a Coordinator and department wise one faculty as committee members.",
      "Shaping the future entrepreneurs to transform the world for a better living.",
      "To create and foster entrepreneurial culture among students by identifying, training and motivating students to become entrepreneurs.",
      "Eminent personnel from industry (entrepreneurs), financial institutions (Banks), and academics will be invited to interact and to empower the knowledge in the concern fields that enrich the students how to start an entrepreneur at their own cost and procedures to be followed further. They also share their experiences about their success and failures of growth as an entrepreneur and motivate students at the plethora of opportunities they have in the World of industrial sector and encourage the students to launch new ventures."
    ],
    "members": [],
    "documents": [
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/assoc/Office order-ED CELL-2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/civil/WORLD WATER DAY 2026.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mba/Business Plan Development.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/ca/Building Growth and Innovation Mindset using AI.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/civil/Design Thinking, Critical Thinking Innovation Design.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/Effective sales And Marketing Strategies For Start-ups.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/aids/GUVI – HCL Corporation Pvt.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mba/Finance for Everyone.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mba/Art & Craft Exhibition.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mba/Exhibition on Value Chain Activities.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mech/Entrepreneurship & Innovation as Career opportunities.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mba/Entrepreneurship Awareness Program-13-11-2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mba/Celebrating Entrepreneurship Day.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Talk-2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/ca/From Passion to Profit Turning Your Idea into a Business.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on Entrepreneurial Mindset-11th February 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on business idea contest-12th December 2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/Startup Success Turning Ambition into Achievement.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/ca/Pathways to Entrepreneurship Building a Successful Career as an Entrepreneur.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/ece/Entrepreneurship Opportunities on Embedded Systems-11-11-2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/aids/Basics of IPR and Patent Filing.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/From IDEA to Execution.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Ice-breaking session on Entrepreneurship 22.10.2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Development- Pathway to Innovation & Success-04.10.2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Economic Indicators and understanding their importance in Start-up business 01.10.2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Young Entrepreneurs in India Inspiring stories Shaping the future of Indias Economy 30.9.2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/civil/How to reinforce the Structured Career.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mech/A Talk on Journey towards Entrepreneurship.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cst/Internal Project Expo-2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/eee/Report_Company registration and Documentations to start a new Business.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition December 2nd week.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition December 1st week.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition November week 5.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition November week 4.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship and Innovation.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Company%20registration%20and%20Documentations%20to%20start%20a%20new%20Business.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Soft Skills for Managers and Entrepreneurs.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition-16-11-23.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition-08-11-23.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/The Seven Habits of Highly Effective People.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition November week1.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Orientation Programme on Entrepreneurship and Career Development.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition October week 4.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Networking for Entrepreneurial Success.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition October week3.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Unlocking Indias Wealth Potential.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition October week2.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition October week1.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition-27-9-23.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Online Current Affairs Quiz Competition.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Inclination of Construction Industries Towards Geospatial Technology.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/week2 Report on Online Current Affairs Quiz Competition.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/week1 Report on Online Current Affairs Quiz Competition.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship and the Companies Act 2013.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Opportunities in the Livestock Sector.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/mba/Orphanage Visit.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Role of Women in Tech Leadership.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/ARTS & CRAFTS EXHIBITION 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/AGRIBUSINESS INCUBATION SCHEME.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Legal System for Startups.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MSME Day 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/AWARENESS GENERATION PROGRAM ON ENTREPRENEURSHIP.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Industry led training orientation and selection.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Values of Advertising.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Empowering Workplace Managing Stress for Better Performance.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/eee/Application of Automated Machine Learning in Electrical Industry.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/ENTREPRENEURSHIP CHALLENGES IN 21STCENTURY.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurial Uses of AI.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/How to Groom Entrepreneurs.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/A talk on Entrepreneurship Skill, Attitude and Behavior Development.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/APSCHE Start-Up Programmes & MSME Schemes.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/cse/APSCHE Start-Up Programmes MSME Schemes.pdf"
      },
      {
        "title": "Download Brochure",
        "href": "https://mits.ac.in/public/uploads/static-pdf/MITS Deemed to be University Brochure 2026.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. L. Anantha Raman",
        "designation": "Coordinator ED Cell",
        "email": "",
        "phone": "Phone :\n+91-8571-280255; 280706\n",
        "address": "Madanapalle Institute of Technology & Science"
      }
    ],
    "id": "edc",
    "url": "https://mits.ac.in/ed-cell",
    "events": [
      {
        "title": "Opportunities and Challenges of Entrepreneuron 27th April 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/Opportunities and Challenges of Entrepreneuron 27th April 2022.pdf"
      },
      {
        "title": "Worlds Entrepreneurs Day on 21 August 2021",
        "href": "https://mits.ac.in/assets/pdf/assoc/Worlds Entrepreneurs Day on 21 August 2021.pdf"
      },
      {
        "title": "Positive Entrepreneurship on 6 January 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/Positive Entrepreneurship on 6 January 2022.pdf"
      },
      {
        "title": "Financial Planning   Feasibility for Project Proposals on 23 April 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/Financial Planning - Feasibility for Project Proposals on 23 April 2022.pdf"
      },
      {
        "title": "Entrepreneurial Motivation on 07 January 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurial Motivation on 07 January 2022.pdf"
      },
      {
        "title": "Awareness Program on Intellectual Property Rights & MSME Schemes for Faculty Organized by Research & Development and Entrepreneurship Development Cell on 09 April 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/Awareness Program on Intellectual Property Rights & MSME Schemes for Faculty Organized by Research & Development and Entrepreneurship Development Cell on 09 April 2022.pdf"
      },
      {
        "title": "Agripreneurship Orientation Programme on 24 January 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/Agripreneurship Orientation Programme on 24 January 2022.pdf"
      },
      {
        "title": "Entrepreneurship Program 2022",
        "href": "https://mba.mits.ac.in/assets/pdf/mba/Entrepreneurship%20Program-2022.pdf"
      },
      {
        "title": "Schemes for Agri based start ups in Agriculture and Allied sectors",
        "href": "https://mits.ac.in/assets/pdf/assoc/Schemes for Agri based start-ups in Agriculture and Allied sectors.pdf"
      },
      {
        "title": "Govt. Schemes for Start up",
        "href": "https://mits.ac.in/assets/pdf/assoc/Govt. Schemes for Start-up.pdf"
      },
      {
        "title": "Secrets in Starting a Successful Startup",
        "href": "https://mits.ac.in/assets/pdf/assoc/Secrets in Starting a Successful Startup.pdf"
      },
      {
        "title": "ENTREPRENEURSHIP ORIENTATION PROGRAMME",
        "href": "https://mits.ac.in/assets/pdf/assoc/ENTREPRENEURSHIP ORIENTATION PROGRAMME.pdf"
      },
      {
        "title": "WORLD'S ENTREPRENEURS DAY",
        "href": "https://mits.ac.in/assets/pdf/assoc/WORLD'S ENTREPRENEURS DAY.pdf"
      },
      {
        "title": "AWARENESS PROGRAM ON ENTREPRENEURSHIP",
        "href": "https://mits.ac.in/assets/pdf/assoc/AWARENESS PROGRAM ON ENTREPRENEURSHIP.pdf"
      },
      {
        "title": "Skilling Imperatives for Enabling the Clean Tech and Agri Business Community Entrepreneurship",
        "href": "https://mits.ac.in/assets/pdf/assoc/Skilling Imperatives for Enabling the Clean Tech and Agri Business Community Entrepreneurship.pdf"
      },
      {
        "title": "Entrepreneurship for start ups  Role of Technology & Innovation",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship for start-ups- Role of Technology & Innovation.pdf"
      },
      {
        "title": "Agripreneurship Orientation Programme",
        "href": "https://mits.ac.in/assets/pdf/assoc/Agripreneurship Orientation Programme.pdf"
      },
      {
        "title": "A Two day Workshop on IoT and Drones (20&21.04.2019)",
        "href": "https://mits.ac.in/assets/pdf/assoc/A Two-day Workshop on IoT and Drones (20&21.04.2019).pdf"
      },
      {
        "title": "Workshop on Web Application & Server App Development ",
        "href": "https://mits.ac.in/assets/pdf/assoc/Workshop on Web Application & Server App Development .pdf"
      },
      {
        "title": "ROLE OF INNOVATIVE TECHNOLOGIES IN ENTREPRENEURSHIP (12.12.2018)",
        "href": "https://mits.ac.in/assets/pdf/assoc/ROLE OF INNOVATIVE TECHNOLOGIES IN ENTREPRENEURSHIP (12.12.2018).pdf"
      },
      {
        "title": "Demonstration of Hybrid Solar Inverter for PV Power Generation (02.11.2018)",
        "href": "https://mits.ac.in/assets/pdf/assoc/Demonstration of Hybrid Solar Inverter for PV Power Generation (02.11.2018).pdf"
      },
      {
        "title": "Entrepreneurship in Power Electronics Practical Applications and Future Industry Needs (27.09.2018)",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship in Power Electronics-Practical Applications and Future Industry Needs (27.09.2018).pdf"
      },
      {
        "title": "A Workshop on Open Source Technologies (31.08.2018)",
        "href": "https://mits.ac.in/assets/pdf/assoc/A Workshop on Open Source Technologies (31.08.2018).pdf"
      },
      {
        "title": "The Excitement of Combining Research, Innovation and Entrepreneurship (28.08.2018)",
        "href": "https://mits.ac.in/assets/pdf/assoc/The Excitement of Combining Research, Innovation and Entrepreneurship (28.08.2018).pdf"
      },
      {
        "title": "Android Applications",
        "href": "https://mits.ac.in/assets/pdf/assoc/Android Applications.pdf"
      },
      {
        "title": "Awareness Programme on Entrepreneurship",
        "href": "https://mits.ac.in/assets/pdf/assoc/Awareness Programme on Entrepreneurship.pdf"
      },
      {
        "title": "48 Hour WEB A THON min",
        "href": "https://mits.ac.in/assets/pdf/assoc/48 Hour WEB-A-THON-min.pdf"
      },
      {
        "title": "For Report on Event Click Here",
        "href": "https://mits.ac.in/assets/pdf/assoc/EAC.pdf"
      },
      {
        "title": "Entrepreneurship and Research Proposals to Various Funding Agencies",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship and Research Proposals to Various Funding Agencies.pdf"
      },
      {
        "title": "Entrepreneurship & Self Development",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship & Self Development.pdf"
      },
      {
        "title": "Innovation and Entrepreneurship 2017",
        "href": "https://mits.ac.in/assets/pdf/assoc/Innovation and Entrepreneurship 2017.pdf"
      },
      {
        "title": "E TALK on I3",
        "href": "https://mits.ac.in/assets/pdf/assoc/E-TALK on I3.pdf"
      },
      {
        "title": "A Report on DIYA (Dynamic Ideas by Young Aspirants)   An Idea Generation Contest (20.04.2017)",
        "href": "https://mits.ac.in/assets/pdf/assoc/A Report on DIYA (Dynamic Ideas by Young Aspirants) - An Idea Generation Contest (20.04.2017).pdf"
      },
      {
        "title": "Creating Entrepreneurship Environment and Developing Entrepreneurial Management",
        "href": "https://mits.ac.in/assets/pdf/assoc/Creating Entrepreneurship Environment and Developing Entrepreneurial Management.pdf"
      },
      {
        "title": "Entrepreneurship Orientation Program",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Orientation Program.pdf"
      },
      {
        "title": "wadhwani",
        "href": "https://mits.ac.in/assets/pdf/assoc/wadhwani.pdf"
      },
      {
        "title": "Mentoring Program on entrepreneurship development",
        "href": "https://mits.ac.in/assets/pdf/assoc/Mentoring Program on entrepreneurship development.pdf"
      },
      {
        "title": "entrepreneurship development2016",
        "href": "https://mits.ac.in/assets/pdf/assoc/entrepreneurship development2016.pdf"
      },
      {
        "title": "Innovation & Entrepreneurship",
        "href": "https://mits.ac.in/assets/pdf/assoc/Innovation & Entrepreneurship.pdf"
      },
      {
        "title": "One day Workshop on Technology Entrepreneurship Development (31.03.2016)",
        "href": "https://mits.ac.in/assets/pdf/assoc/One day Workshop on Technology Entrepreneurship Development (31.03.2016).pdf"
      },
      {
        "title": "One Day Workshop on Entrepreneurship Developmentfor IV  B.Tech Students",
        "href": "https://mits.ac.in/assets/pdf/assoc/One Day Workshop on Entrepreneurship Developmentfor IV- B.Tech Students.pdf"
      },
      {
        "title": "Two Day Workshop on Entrepreneurship Development Nov 2015",
        "href": "https://mits.ac.in/assets/pdf/assoc/Two Day Workshop on Entrepreneurship Development Nov 2015.pdf"
      },
      {
        "title": "Workshop on Latest Trends in Technology Entrepreneurship Development (6.10.2015)",
        "href": "https://mits.ac.in/assets/pdf/assoc/Workshop on Latest Trends in Technology Entrepreneurship Development (6.10.2015).pdf"
      },
      {
        "title": "Entrepreneurship & Promotion of SMEs Opportunities and Challenges (27&28.05.2015)",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship & Promotion of SMEs Opportunities and Challenges (27&28.05.2015).pdf"
      },
      {
        "title": "A Two day Workshop on Entrepreneurship Development (1)",
        "href": "https://mits.ac.in/assets/pdf/assoc/A Two day Workshop on Entrepreneurship Development (1).pdf"
      },
      {
        "title": "Entrepreneurship in Renewable Energy Sources & REC Mechanism (30.01.2015)",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship in Renewable Energy Sources & REC Mechanism (30.01.2015).pdf"
      },
      {
        "title": "Entrepreneurship Development",
        "href": "https://mits.ac.in/assets/pdf/assoc/Entrepreneurship Development.pdf"
      }
    ]
  },
  "rd-cell": {
    "name": "R & D Cell Formation",
    "aboutText": [
      "In pursuance of the Institute vision, to enhance academic excellence, foster innovation, industry collaborations and contribute to advancements in the field of education and research, Madanapalle Institute of Technology & Science - Deemed to be University has constituted the Research and Development (R&D) CelI on 11-06-2013 to scrutinize the matters related to Research Publications, Research Project Proposals and Consultancy.",
      "This cell will also focus on identifying and undertaking research projects, coordinating research activities across departments, assisting in the commercialization of research outcomes and patents, developing new knowledge, and contributing to the overall growth of the Institution."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairman",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. D. Pradeep Kumar",
        "designation": "Registrar & Cheif Coordinator (PAARC)",
        "position": "In-Charge - 1",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. P. Ramanathan",
        "designation": "Principal",
        "position": "In-Charge - 2",
        "email": ""
      },
      {
        "sno": "4",
        "name": "Dr. C. Kamal Basha",
        "designation": "Vice Principal (Administration)",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "5",
        "name": "Dr. R. Thulasiram Naidu",
        "designation": "Advisor (Advisor - R&D & Consultancy)",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "6",
        "name": "Dr. G. Sreenivasulu",
        "designation": "NIRF Coordinator",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "7",
        "name": "Dr. Manish Sharma",
        "designation": "NBA Coordinator",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "8",
        "name": "Dr. P. Sivaiah",
        "designation": "Associate Dean - R&D",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "9",
        "name": "Dr. N. Nanda Kumar Reddy",
        "designation": "Associate Dean - R&D-Ph.D. Programs",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "Download Brochure",
        "href": "https://mits.ac.in/public/uploads/static-pdf/MITS Deemed to be University Brochure 2026.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. R. Thulasiram Naidu",
        "designation": "Advisor - R&D & Consultancy",
        "email": "",
        "phone": "Phone :\n+91-8571-280255",
        "address": "Madanapalle Institute of Technology & Science"
      }
    ],
    "id": "rd-cell",
    "url": "https://mits.ac.in/r&d-cell"
  },
  "nss": {
    "name": "National Service Scheme - NSS Unit",
    "aboutText": [
      "National Service Scheme Unit has been introduced at MITS - Deemed to be University since 2003 as a part of the academic programs and since then NSS has been functioning as a regular feature in the realm of our Academics. The overall objective of the scheme is educational and service to the community is the activity through which the objective is sought to be achieved. It is a student-cantered program in which projects are implemented by the NSS volunteers in the community in close collaboration with the community and thereby it provides vast scope for the student's interaction with the people.",
      "N.S.S has enriched the students’ souls and minds. The overall objective of this scheme is Education and Service to the community and by the community. It’s students’ programme where we cater to the need of the community, as and when required, It will also help the students to communicate with the society. Student develop many skills and learn how to behave and interact with different kinds of people. The students go to the rural areas and try to develop a Technocratic Environment and help the underprivileged people to develop themselves.",
      "NSS volunteers undertake various activities in adopted villages and slums for community service, Duration of these services is 120 hours. The NSS Units organize the regular activities as detailed below :",
      "(i) Orientation of NSS Volunteers : To get the NSS volunteers acquainted with the basics of NSS Programmes, 20 hours are allocated for their orientation through lectures, discussions, field visits, and audio-visuals etc.",
      "(ii) Campus work : The NSS volunteers may be involved in the projects undertaken for the benefit of the institution and students concerned. Such projects cover development of play grounds, laying of gardens, tree plantation in the premises, awareness programmes on drug-abuse, AIDS, population education and other projects. The NSS volunteers may work on campus projects for not exceeding 30 hours in a year;",
      "(iii) The remaining 70 hours will be utilized for community service on the projects in adopted villages/urban slums independently or in collaboration with others in this field, as detailed below."
    ],
    "members": [],
    "documents": [
      {
        "title": "SoP",
        "href": "https://mits.ac.in/public/uploads/paars/SOP_NSS.pdf"
      },
      {
        "title": "NSS Year Plan 2025",
        "href": "https://mits.ac.in/public/uploads/paars/NSS Year Plan 2025.pdf"
      },
      {
        "title": "NSS Year Plan 2024",
        "href": "https://mits.ac.in/public/uploads/paars/NSS Year Plan 2024.pdf"
      },
      {
        "title": "NSS Year Plan 2023",
        "href": "https://mits.ac.in/public/uploads/paars/NSS Year Plan 2023.pdf"
      },
      {
        "title": "NSS Year Plan 2022",
        "href": "https://mits.ac.in/public/uploads/paars/NSS Year Plan 2022.pdf"
      },
      {
        "title": "NSS Year Plan 2021",
        "href": "https://mits.ac.in/public/uploads/paars/NSS 2021 Year Plan.pdf"
      },
      {
        "title": "NSS Year Plan 2020",
        "href": "https://mits.ac.in/public/uploads/paars/NSS 2020 Year Plan.pdf"
      },
      {
        "title": "NSS Faculty & Student Coordinator Committee",
        "href": "https://mits.ac.in/public/uploads/paars/NSS Faculty and Student Committee.pdf"
      },
      {
        "title": "Student Volunteers",
        "href": "https://mits.ac.in/public/uploads/paars/NSS Student Volunteers List 2022-25.pdf"
      },
      {
        "title": "Gallery",
        "href": "https://mits.ac.in/public/uploads/paars/NSS Photo Gallery.pdf"
      },
      {
        "title": "NSS MITS List of Events 2021-2022",
        "href": "https://mits.ac.in/public/uploads/paars/NSS Events List 2021-22.pdf"
      },
      {
        "title": "NSS MITS List of Events 2022-2023",
        "href": "https://mits.ac.in/public/uploads/paars/NSS Events List 2022-23.pdf"
      },
      {
        "title": "NSS MITS List of Events 2023-2024",
        "href": "https://mits.ac.in/public/uploads/paars/NSS Events List 2023-24.pdf"
      },
      {
        "title": "NSS MITS List of Events 2024-2025",
        "href": "https://mits.ac.in/public/uploads/paars/NSS Events List 2024-25.pdf"
      },
      {
        "title": "NSS MITS List of Events 2025-2026",
        "href": "https://mits.ac.in/assets/pdf/assoc/List%20events%20during%20April%202026.pdf"
      },
      {
        "title": "NSS Committee Office Order 2025-26",
        "href": "https://mits.ac.in/assets/pdf/assoc/NSS-19-11-2025.pdf"
      },
      {
        "title": "NSS - Nasha Mukti Bharath Abhiyaan Committee",
        "href": "https://mits.ac.in/assets/pdf/assoc/Nasha Mukti Bharath Abhiyaan Committee.pdf"
      },
      {
        "title": "NSS - Unnat Bharat Abhiyan - Villages adopted",
        "href": "https://mits.ac.in/assets/pdf/assoc/NSS - Unnat Bharat Abhiyan - Villages adopted.pdf"
      },
      {
        "title": "NSS PO Appointment Office Order",
        "href": "https://mits.ac.in/public/uploads/paars/NSS%20PO%20Appointment%20order.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/International Yoga Day-2026.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Yogandhra Program-2026.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Environment Day Celebration.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MyBhoomi Clean-Up Drive (25-04-2026).pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Dr.B.R. Ambedkar Jayanthi-(14-04-2026).pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Health Day Walkathon 07-04-2026.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Rajadhaniki Pattina Grahanam Veedindi (02-04-2026).pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/bsh/National%20Science%20Day%20Celebrations-2026.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS_NSS_Speical Camp 2026-compressed.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS-NSS Report on Blood Donation Camp on 19th November 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS-NSS Report on Blood Donation Ophthalmology and Dental Camp on 8th October 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS-NSS Report on Ektha Diwas on 31st October 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS-NSS Report on Gandhi Jayanthi on 2nd October 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Suicide Prevention Day 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS-NSS Report on Blood Donation Camp on 17th September 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS-NSS Report on World Suicide Prevention Day on 10th September 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS-NSS Report on Fire Fighting Techniques and Emergency Response Procedures on 8th September 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS-NSS Report on Teachers Day on 5th September 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/civil/World Environment Day 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/01 MITS - NSS Program on PRIKSHA PE CHARCHA on 10th February 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/02 MITS - NSS Blood Donation Camp on 5th February 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/03 MITS - NSS Save Earth-No War rally on 3rd February 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/04 MITS - NSS Program on Republic Day on 26th January 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/05 MITS - NSS Program on National Voter's Day on 25th January 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/06 MITS - NSS 1st Clothes Donation Drive in Association with the EEE department at Velugu Orphanage on 27th November 2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/07 MITS - NSS Program on BLOOD DONATION CAMP in Collaboration with NTR BLOOD BANK Association with HDFC BANK on 20th November 2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/aids/Safe Mobile Application usage for School students.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/08 MITS - NSS  Clothes Collection Camp on 29th October to 6th November 2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/09 MITS - NSS Event on EYE CHECK UP CAMP IN ASSOCIATION WITH THE DR.AGARWAL'S EYE HOSPITAL on 29th October 2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/10 MITS - NSS Event on EKTHA DIWAS WEEK on 22nd October to 24th October 2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/11 MITS - NSS Program on GANDHI JAYANTHI on 2nd October 2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/12 MITS - NSS Program on Swachtaa Hi Sewa on 30th September 2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/5. Heart check-up on 27th September 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/14 MITS - NSS Event on National Service Scheme (NSS) DAY on 24th September 2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/15 MITS - NSS  Fundraising event for the Vijayawada floods on 5th September to 12th September 2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf//assoc/16 MITS - NSS EYE CHECK UP Camp in Association With the DR. Agarwal's Eye Hospital on 30th August 2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/17 MITS - NSS Program on National Space Day on 23rd August 2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf//assoc/18 MITS - NSS Program on EK PED MAA KE NAAM Campaign on 15th August 2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/civil/World Organ Donation Day-2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Master Trainers on My Bharat Portal and Digital Literacy.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/69_NSS Unit_MITS_NSS Special Camp Report 2023-24.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/10.University level NSS programme officers Orientation on Planning, training & Review meeting on 23.3.2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/9.Mera Pehla Vote Desh Ke Liye on 11.3.2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/8.National Science Day on 28.02.2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/7.75th Republic Day on 26.01.2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/6.National Voters Day on 25.01.2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/5.Free Eye Check-up Camp on 23.01.2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/4.Blood Donation Camp on 23.01.2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/3.National Youth Day on 12.01.2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/2.Vote Enrolment Awareness Program on 09.01.2024.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/1. Viksit Bharat@2047 Promotions on 19.12.2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/12. Awareness on Drug Abuse on 13th December 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/11. Sexual Harassement on 29th November 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/10. Awareness on Voter Enrolment on 23rd November 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/9. Ektha Diwas National unity Day on 31 st October 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/8. Road Safety Awareness on 12th October 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/7. gandhi jayanthi on 2nd October 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/6. swachataa hi sewa on 1st October 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/4. Teacher's day on 5th September 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/3. 77th Independence Day on 15th August 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/2. Har Ghar Tiranga on 15th August 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/1. Meri Maati Mera Desh Campaign on 11th August 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/43_International Day Aganist Drug Abuse and implicit Trafficking on 26th June 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/42_INTERNATIONAL YOGA DAY on 21st June 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/41_world food safety day on 7th June 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/40_world envirnment day on 5th June 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/39_ NSS Delegation meet on 26th May 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/38_NATIONAL TECHNOLOGY DAY on 11th May 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/37_blood donatioin on 27th April 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/36_blood donatioin on 17th April 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/35_Ambedkar Jayanti on 14th April 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/34_World Water Day on 22nd March 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/33_INTERNATIONAL WOMEN'S DAY on 7th March 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/31_World Radio Day on 13th Feb 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/30_Republic Day on 26th Jan 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/29_national voters day on 25th Jan 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/28_National YOUTH DAY on 12th Jan 2023.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/27_Anti drug awareness camp on 21st December 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/26_Awarness on Electrol ENrollment during 3rd December to 6th December 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/25_Constution Day on 26th November 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/24_womens day on 24th November 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/23_Cultural unity day on 23rd November 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/22_Weaker Section Day on 22nd November 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/21_Linguistic Harmony Day on 21st November 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/20_Welfare of Minorities Day on 19th November 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/19_national education day on 11th November 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/18_national unity day on 31st October 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/17_APJ Abdul Kalam BIrth Anniversary on 15th October 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/16. International Girl Child Day 11th October 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/15_mahatham gandhi jayanthi on 2nd October 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/14_Free Mega Camp by Mobile Speech and Hearing Out Reach Clinic 27th September 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/13_NSS FOUNDATION DAY on 24th September 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/12_Free Eye Check-up Camp on 8th September 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/11_Suicide Prevention Awareness on 7th September 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/10_Teachers Day 5th September 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/9_Suicide Prevention Awareness on 2nd September 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/8_blood donatioin camp 23rd August 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/7_COVID-19 Vaccination Drive 16th to 22nd August 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/6_report on 76th independence day 15th August 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/5_Azadi Ka Amrut Mahostav 12th August 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/4_Har Ghar Ka Tirang promotions 11th August 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/3_Dr. APJ Abdul Kalam Death Anniversary on 27th July 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/2_COVID-19 Vaccination Drive during 19 to 22th July 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Blood Donors Day on 14th June 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World No Tobacco Day on 31st May 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/National Technology Day on 11th May 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Awareness Programme on Disha AOS app on 6th May 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Electoral Enrollment on 28th April 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Ralley on Vote System and Electoral Enrollment on 26th April 2022pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Systematic Voter Education and Electoral Program on 19th April 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Ambedkar jayanthi on 14th April 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/1_Alluri Seetharamaraju Jayanthi on 7th April 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/National Science Day 28th February 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/International Mother Language Day on 21st February 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NSS Delegation meet on 5th February 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Cancer Day on 4th February 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/73rd Republic Day Celebrations 26th January 2022.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NSS Special Camp Programme.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/National Farmers Day 23rd December 2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Tree Plantation Programme 21st December 2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/International Human Rights Day 10th December 2009.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Mega Vaccine Drive from 9th & 10th December 2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/National Integration Day 27th November 2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/National Unity Day 31st October 2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Clean India 23rd October 2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Gandhi Jayanthi 2nd October 2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NSS Foundation Day 24th September 2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/International Day of Peace 21st September 2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Mega Vaccine Drive from 16th & 20th September 2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Ozone day 16th September 2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Engineers Day 15th September 2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World First Aid Day 11th September 2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Teachers Day 5th September 2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Fit India Freedom Run on 21st August 2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NSS-World Nature Conservation Day Program 2021-28-7-2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NSS-Dr. APJ Abdul Kalam Death Anniversary Program 2021-27-7-2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NSS-Awareness on DISHA App Program 2021-21-7-2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/International Day of Yoga-21-6-2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Covid Care Program-16-6-2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Environmental Day-5-6-2021.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Ambedhkar Jayanthi 2021 report.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/yoga day 2019-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NATIONAL YOUTH DAY.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/votersday2019-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Aids Day Awareness Rally 2018-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Rashtriya Ekta Diwas-2018-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/GANDHI JAYANTHI 2018-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Swachhata Hi Seva 2018 (SHS) was organized by NSS at MITS from 15 September to 2 October 2018.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/vanam 2018-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Swachhata Hi Seva-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NATIONAL SERVICE SCHEME DAY 2018-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Peace Day 2018-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/International Literacy Day 2018-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Teachers Day-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/report_vanam Manam 21-7-2018.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Yoga day 21-7-2018.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NATIONAL VOTERS DAY 2018-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Swami Vivekananda Jayanti-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Flag day 07-12-17.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Human Immunodeficiency Virus Awareness Rally.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/DONATION FOR NATIONAL FOUNDATION FOR COMMUNAL HARMONY.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/report on Swachh survekshan 2018.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Children’s Day Celebrations 2017.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Moving towards the Nature-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Blood Donation Camp-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/National Cancer Awareness Day-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/CORRUPTION FREE INDIA.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Sardar Vallabhbhai Patel.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Dr A P J Abdul Kalams Birthday - Global Hand-washing Day Celebrations.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/report swachata.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NSS Day Celebrations 2017.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Peace Day Rally.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Rivers.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/teachersday2017.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Literacy Day 2017.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/International Yoga Day Celebrations - 2017.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Ambedkar Jayanthi 126.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/report_Mega Financial Literacy Training Program 2016-17.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Cashless Transactions.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/National Foundation for Communal Harmony.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/National Education Day.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Aids Day Awareness Rally.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Central Vigilance Awareness week, Integrity Pledge organized by MITS - NSS on 04-11-2016.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Rastriya Ekta Diwas.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Global Hand Washing Day2016.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/abdulkalam.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Relaxation & Meditation.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Gandhi Jayanti.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Blood Donation Camp sept 2016.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/report_DENGUE preventive medicines 28-09-2016.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NSS Day Celebrations - 2016.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Mosquitoes Conducted rally on 23-09-2016 by NSS CELL .pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Peace Day - 2016.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/PLANITATION RALLY AT ANGALLU  ON 18-09-2016.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/International Literacy Day Celebrations1.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Teachers' Day celebrations - 2016.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/smart pulse survey 2016-17.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/VANAM-MANAM ON 29-07-2016.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/70th independence day celebrations” FREEDOM RALLY” and sporting events  organized on 19-08-16.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Independence day celebrations-15-8-2015.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/KRISHNA PUSHKARALU - 12-08-2016 to 23-08-2016.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Quit India Day.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Socio Economic Survey.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Plantation.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Second International Yoga Day Celebrations - 2016.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/BLOOD DONATION PROGRAM.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/INTERNATIONAL WATER DAY HELD ON 22-03-2016.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Science Day Celebrations.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Swami Vivekananda.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/nss.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Swachh Bharat 2015.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NSS Day Celebrations - 2015.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MEGA BLOOD DONATION CAMP.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Peace Day - 2015.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World First Aid Day - Save Life.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Anti- Suicide Day Life Matters.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Training Program for Girl Students SELF DEFENCE.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/International%20Literacy%20Day%20Celebrations.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Mega Medical Health Camp at Angallu.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NAVA NIRMANA DEEKSHA RALLY-02-06-15.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/SWINE FLU - Awareness Program (2).pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/SWACHH BHARAT 24-11-2014 (1).pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/National Unity Day (1).pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Global Hand washing Day (1).pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/SWACHH BHARAT (1).pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on Blood Donation Camp (1).pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS NSS UNIT JAN 2014 (1).pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NSS Votersday (1).pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NSS Polio (1).pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NSS Voter (1).pdf"
      },
      {
        "title": "Click here for details on Event",
        "href": "https://mits.ac.in/assets/pdf/assoc/NATIONAL SERVICE SCHEME 2013 (1).pdf"
      },
      {
        "title": "Download Brochure",
        "href": "https://mits.ac.in/public/uploads/static-pdf/MITS Deemed to be University Brochure 2026.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Mr. Pujari Rajesh",
        "designation": "Program Officer",
        "email": "",
        "phone": "Phone :\n+91-9100069516; 8571-280255; 280706\n",
        "address": "Madanapalle Institute of Technology & Science"
      }
    ],
    "id": "nss",
    "url": "https://mits.ac.in/nss",
    "events": [
      {
        "title": "GANDHI JAYANTHI CELEBRATIONS  OCT 2020 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/GANDHI JAYANTHI CELEBRATIONS  OCT 2020-min.pdf"
      },
      {
        "title": "Report on NSS Day 25 9 2020 min",
        "href": "https://mits.ac.in/assets/pdf/assoc//Report on NSS Day 25-9-2020-min.pdf"
      },
      {
        "title": "No smoking day 2020 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/No_smoking_day_2020-min.pdf"
      },
      {
        "title": "Report on COVID 19 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on COVID-19-min.pdf"
      },
      {
        "title": "Report on World Cancer Day and rally organized by NSS CELL MITS on 4th February 2020 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on World Cancer Day and rally organized by NSS CELL MITS on 4th February 2020-min.pdf"
      },
      {
        "title": "Report of National Voters Day 2020 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report of National Voters Day 2020-min.pdf"
      },
      {
        "title": "NATIONAL YOURTH DAY CELEBRATED ON JAN 12 TH 2020 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/NATIONAL YOURTH DAY CELEBRATED ON JAN 12 TH 2020-min.pdf"
      },
      {
        "title": "Report on International Human Rights Day 10 12 19",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on International Human Rights Day 10-12-19.pdf"
      },
      {
        "title": "Report on International Anti Corruption day 9 12 2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on International Anti Corruption day 9-12-2019.pdf"
      },
      {
        "title": "63rd Death Anniversary of Bharath Ratna Dr.B.R.Ambedkar on 06.12.2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/63rd Death Anniversary of Bharath Ratna Dr.B.R.Ambedkar on 06.12.2019.pdf"
      },
      {
        "title": "Report of 70th Constitution Day on 26th November 2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report of 70th Constitution Day on 26th November 2019.pdf"
      },
      {
        "title": "Report on National Cancer Awareness Day conference and rally organized by NSS CELL MITS on 7th November 2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on National Cancer Awareness Day conference and rally organized by NSS CELL MITS on 7th November 2019.pdf"
      },
      {
        "title": "Report on Sardar vallabhbhai patel Birth day 31 10 2019 National Unity Day",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on Sardar vallabhbhai patel Birth day 31-10-2019 National Unity Day.pdf"
      },
      {
        "title": "Report on Report on Poshan Abhiyaan on 18 10 2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on Report on Poshan Abhiyaan on 18-10-2019.pdf"
      },
      {
        "title": "Report on Global Hand Washing day on 15th October 2019 by MITS NSS CELL",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on Global Hand Washing day on 15th October 2019 by MITS-NSS CELL.pdf"
      },
      {
        "title": "Report on Rally against Plastic Use on 04 10 2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on Rally against Plastic Use on 04-10-2019.pdf"
      },
      {
        "title": "Report on Gandhi jayanthi 02 10 2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on Gandhi jayanthi 02-10-2019.pdf"
      },
      {
        "title": "report Blood Donation 26 9 2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/report Blood Donation 26-9-2019.pdf"
      },
      {
        "title": "report NSS Day  23 & 24th sep 2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/report_NSS Day- 23 & 24th sep 2019.pdf"
      },
      {
        "title": "report swachhata Pakhwada 13 9 2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/report_swachhata Pakhwada 13-9-2019.pdf"
      },
      {
        "title": "report International Literacy Day 8 9 2019(7th)",
        "href": "https://mits.ac.in/assets/pdf/assoc/report_International Literacy Day 8-9-2019(7th).pdf"
      },
      {
        "title": "Teacher's Day Celebrations min",
        "href": "https://mits.ac.in/assets/pdf/assoc/Teacher's Day Celebrations-min.pdf"
      },
      {
        "title": "Swami Vivekananda Jayanti",
        "href": "https://mits.ac.in/assets/pdf/assoc/Swami Vivekananda Jayanti.pdf"
      },
      {
        "title": "APJ Abdul Kalam Jayanti 15 10 18",
        "href": "https://mits.ac.in/assets/pdf/assoc/APJ Abdul Kalam Jayanti 15-10-18.pdf"
      },
      {
        "title": "NSSMPL (1)",
        "href": "https://mits.ac.in/assets/pdf/assoc/NSSMPL (1).pdf"
      }
    ]
  },
  "ncc-army": {
    "name": "National Cadet Corps (Army) - NCC Unit",
    "aboutText": [
      "National Cadet Corps Unit of MITS started in 2016. It has presently a strength of 108 - Cadets (Army), it is attached to 35 - Andhra Battalion, Chittoor, under Tirupati Head Quarters. NCC unit of MITS is certainly a leading cell that fosters the overall development of each of its cadet in every field like sports, academics, cultural activities or adventurous activities. NCC has made an ineradicable mark in its entire program. The humble growth of NCC in MITS from just a cell that lacked shine to a group that brought glory to the institution.",
      "The ‘Aims’ of the NCC laid out in 1988 have stood the test of time and continue to meet the requirements expected of it in the current socio–economic scenario of the country. The NCC aims at developing character, comradeship, discipline, a secular outlook, the spirit of adventure and ideals of selfless service amongst young citizens. Further, it aims at creating a pool of organized, trained and motivated youth with leadership qualities in all walks of life, who will serve the Nation regardless of which career they choose. Needless to say, the NCC also provides an environment conducive to motivating young Indians to join the armed forces.",
      "The aims of NCC as approved by MOD in Mar 2001 are as under:-",
      "The genesis of the NCC can be traced back to the First World War when the Britishers created the University Corps as the second line of defense and to have a large pool of trained youth available for employment into the Armed Forces. The Naval Wing of the NCC was raised in Jul 1952, thus completing the true representation of all services in the Corps. Presently, NCC has approximately 13 Lakhs Cadets under its fold.",
      "Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain",
      "NCC Flag Contains NCC Crest in gold in the middle, with the letters \"NCC\" encircled by a wreath of seventeen lotus with a background in Red, Blue and Light blue.Red depicts the Army, Deep Blue depicts the Navy and Light Blue depicts the Air Force. The seventeen lotuses represent the 17 State Directorates. \"Unity of Discipline\" (Ekta aur Anushasan) is written at the bottom of the NCC Flag."
    ],
    "members": [
      {
        "sno": "1",
        "name": "2017-2018",
        "designation": "Certificate -B",
        "position": "27",
        "email": "27"
      },
      {
        "sno": "2018-2019",
        "name": "Certificate -C",
        "designation": "26",
        "position": "26",
        "email": "1"
      },
      {
        "sno": "2",
        "name": "2018-2019",
        "designation": "Certificate -B",
        "position": "34",
        "email": "34"
      },
      {
        "sno": "2019-2020",
        "name": "Certificate -C",
        "designation": "26",
        "position": "25",
        "email": "1"
      },
      {
        "sno": "3",
        "name": "2019-2020",
        "designation": "Certificate -B",
        "position": "29",
        "email": "28"
      },
      {
        "sno": "2020-2021",
        "name": "Certificate -C",
        "designation": "24",
        "position": "24",
        "email": "7"
      },
      {
        "sno": "4",
        "name": "2020-2021",
        "designation": "Certificate -B",
        "position": "35",
        "email": "35"
      },
      {
        "sno": "2021-2022",
        "name": "Certificate -C",
        "designation": "35",
        "position": "35",
        "email": "15"
      },
      {
        "sno": "5",
        "name": "2021-2022",
        "designation": "Certificate-B",
        "position": "27",
        "email": "27"
      },
      {
        "sno": "2022-2023",
        "name": "Certificate-C",
        "designation": "26",
        "position": "22",
        "email": "0"
      },
      {
        "sno": "6",
        "name": "2022-2023",
        "designation": "Certificate-B",
        "position": "34",
        "email": "34"
      }
    ],
    "documents": [
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/assoc/NCC Cell Committee 2025-26.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Trekking camp at Darjeeling 25 May-3 June 2026.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Sikkim Camp 8th April to 5th May 2026.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/One day ANO's conclave 30-01-2026.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Republic Day Celebrations at MITS 26-01-2026.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Republic Day Celebrations at Madanapalle 26-01-2026.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/LRDC at Amaravathi 26-01-2026.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/HORSELY HILLS-21-DEC-2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/PARENTS MEETING-20-DEC-2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/ARMED FORCE FLAG DAY14-DEC-2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/UNITY MARCH-31-OCT-2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/swach Bharat-25-OCT-2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/CERTIFICATE DISTRIBUTION- 30-SEP-2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/WORLD RIVER DAY-29-SEP-2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Suicide Prevention Day 2025.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NCC%20Day%202018-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/INTER%20GROUP%20COMPETITION-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Swachhata%20Hi%20Seva-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Significance%20of%20Team%20Work%20&%20Tree%20Plantation-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Enumulavaripalli%20Village-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/World%20Water%20Day%202018-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/NATIONAL%20VOTERS%20DAY%202018-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Swami%20Vivekananda%20Jayanti-min.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/ARMED%20FORCES%20FLAG%20DAY.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Human%20Immunodeficiency%20Virus%20Awareness%20Rally.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Helping%20Hands%20Program.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Sardar%20Vallabhbhai%20Patel.pdf"
      },
      {
        "title": "View Document",
        "href": "https://mits.ac.in/assets/pdf/assoc/Dr%20A%20P%20J%20Abdul%20Kalams%20Birthday%20-%20Global%20Hand-washing%20Day%20Celebrations.pdf"
      },
      {
        "title": "Click here for Details",
        "href": "https://mits.ac.in/assets/pdf/facility/71th%20Independence%20Day%20Celebrations.pdf"
      },
      {
        "title": "Download Brochure",
        "href": "https://mits.ac.in/public/uploads/static-pdf/MITS Deemed to be University Brochure 2026.pdf"
      }
    ],
    "contacts": [],
    "id": "ncc-army",
    "url": "https://mits.ac.in/ncc",
    "events": [
      {
        "title": "LIDC Camp Participation 15 AUG 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/LIDC Camp Participation-15-AUG-2025.pdf"
      },
      {
        "title": "ANTI TOBACCO DAY 21 May 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/ANTI TOBACCO DAY-21-May-2025.pdf"
      },
      {
        "title": "EARTH DAY 22 APRIL 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/EARTH DAY-22-APRIL-2025.pdf"
      },
      {
        "title": "ANTI DRUG DAY 26 JUNE 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/ANTI DRUG DAY-26-JUNE-2025.pdf"
      },
      {
        "title": "YOGA  DAY 21 June 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/YOGA  DAY-21-June-2025.pdf"
      },
      {
        "title": "76th REPUBLIC DAY 26 01 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/76th REPUBLIC DAY 26-01-2025.pdf"
      },
      {
        "title": "One day Trekking at Horsley Hills  02 02 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/One-day Trekking at Horsley Hills- 02-02-2025.pdf"
      },
      {
        "title": "LRDC CAMP18th Jan 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/LRDC CAMP18th Jan 2025.pdf"
      },
      {
        "title": "PARENTS MEETING 28 11 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/PARENTS MEETING-28-11-2024.pdf"
      },
      {
        "title": "NCC Day 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/NCC Day 2024.pdf"
      },
      {
        "title": "GANDHI JAYANTHI 2 October",
        "href": "https://mits.ac.in/assets/pdf/assoc/GANDHI JAYANTHI 2 October.pdf"
      },
      {
        "title": "Swachhata Diwas October 1 and 2 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/Swachhata Diwas October 1 and 2 2024.pdf"
      },
      {
        "title": "World Maritime Day September 28 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Maritime Day September 28 2024.pdf"
      },
      {
        "title": "World Tourism Day MITS NCC 27 September 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Tourism Day MITS-NCC 27 September 2024.pdf"
      },
      {
        "title": "World Rivers Day MITS NCC 24th September 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Rivers Day MITS-NCC 24th September 2024.pdf"
      },
      {
        "title": "Selections  day September 21 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/Selections  day September 21 2024.pdf"
      },
      {
        "title": "Revanth felicitation 19 9 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/Revanth felicitation 19-9-2024.pdf"
      },
      {
        "title": "Engineers Day September 15",
        "href": "https://mits.ac.in/assets/pdf/assoc/Engineers Day September 15.pdf"
      },
      {
        "title": "LIDC CAMP 7th August to 16th August",
        "href": "https://mits.ac.in/assets/pdf/assoc/LIDC CAMP 7th August to 16th August.pdf"
      },
      {
        "title": "78th Independence Day 15th August",
        "href": "https://mits.ac.in/assets/pdf/assoc/78th Independence Day 15th August.pdf"
      },
      {
        "title": "kargil 26th July 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/kargil 26th July 2024.pdf"
      },
      {
        "title": "Paper Bag Day July 12 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/Paper Bag Day July 12 2024.pdf"
      },
      {
        "title": "Anti Drug Day MITS NCC June 26 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/Anti-Drug Day MITS-NCC June 26 2024.pdf"
      },
      {
        "title": "World Environment Day May 27 to June 5 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Environment Day May 27 to June 5 2024.pdf"
      },
      {
        "title": "MITS NCC Tobacco Day 21 May2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS-NCC Tobacco Day 21 May2024.pdf"
      },
      {
        "title": "Election Day 12 May 2024 to 13 May  2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/Election Day 12-May-2024 to 13-May -2024.pdf"
      },
      {
        "title": "World Earth Day 22 April 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Earth Day 22 April 2024.pdf"
      },
      {
        "title": "PARENTS MEETING & CAREER GUIDANCE ON OPPORTUNITIES IN INDIAN ARMED FORCES min",
        "href": "https://mits.ac.in/assets/pdf/assoc/PARENTS MEETING & CAREER GUIDANCE ON OPPORTUNITIES IN INDIAN ARMED FORCES-min.pdf"
      },
      {
        "title": "World Water Day 22 March 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Water Day 22 March 2024.pdf"
      },
      {
        "title": "World Forest Day 21st March 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Forest Day 21st March 2024.pdf"
      },
      {
        "title": "INTERACTION SESSION WITH ADDITIONAL DIRECTOR GENERAL AP & T DIRECTORATE",
        "href": "https://mits.ac.in/assets/pdf/assoc/INTERACTION SESSION WITH ADDITIONAL DIRECTOR GENERAL AP & T DIRECTORATE.pdf"
      },
      {
        "title": "Black Day MITS NCC 14 February 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/Black Day MITS-NCC 14 February 2024.pdf"
      },
      {
        "title": "Cleanness Day MITS NCC 30 January 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/Cleanness Day MITS-NCC 30 January 2024.pdf"
      },
      {
        "title": "Republic Day 26 January 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/Republic Day 26 January 2024.pdf"
      },
      {
        "title": "National Youth Day January 12 2024",
        "href": "https://mits.ac.in/assets/pdf/assoc/National Youth Day January 12 2024.pdf"
      },
      {
        "title": "One day Trekking at Horsley Hills",
        "href": "https://mits.ac.in/assets/pdf/assoc/One-day Trekking at Horsley Hills.pdf"
      },
      {
        "title": "Armed Forces Flag Day on 07 12 2023",
        "href": "https://mits.ac.in/assets/pdf/assoc/Armed Forces Flag Day on 07-12-2023.pdf"
      },
      {
        "title": "NCC Day on 26 11 2023",
        "href": "https://mits.ac.in/assets/pdf/assoc/NCC Day on 26-11-2023.pdf"
      },
      {
        "title": "Gandhi Jayanti on 02 10 2023",
        "href": "https://mits.ac.in/assets/pdf/assoc/Gandhi Jayanti on 02-10-2023.pdf"
      },
      {
        "title": "Swachhata Pakhwada 16 09 2023 to 30 09 2023",
        "href": "https://mits.ac.in/assets/pdf/assoc/Swachhata Pakhwada-16-09-2023 to 30-09-2023.pdf"
      },
      {
        "title": "Report on Independence Day August 15 2023",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on Independence Day August 15-2023.pdf"
      },
      {
        "title": "Anti Plastic Awareness 03 07 2023",
        "href": "https://mits.ac.in/assets/pdf/assoc/Anti Plastic Awareness-03-07-2023.pdf"
      },
      {
        "title": "World Ocean Day Report on CLEANING WATER BODIES 08 06 2023",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Ocean Day Report on CLEANING WATER BODIES-08-06-2023.pdf"
      },
      {
        "title": "Report on CELEBRATION OF INTERNATIONAL YOGA DAY 21 06 2023",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on CELEBRATION OF INTERNATIONAL YOGA DAY 21-06-2023.pdf"
      },
      {
        "title": "WORLD DONAR DAY ON 14 06 2023 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/WORLD DONAR DAY ON 14-06-2023-min.pdf"
      },
      {
        "title": "Report on  INTERNATIONAL NO TOBACCO DAY 31 05 2023",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on  INTERNATIONAL NO TOBACCO DAY 31-05-2023.pdf"
      },
      {
        "title": "world environmental day 27 05 2023 to 05 06 2023 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/world environmental day 27-05-2023 to 05-06-2023-min.pdf"
      },
      {
        "title": "Report on TREE PLANTATION IN MITS CAMPUS15 05 2023",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on TREE PLANTATION IN MITS-CAMPUS15-05-2023.pdf"
      },
      {
        "title": "POKHARN II DAY 17 04 2023 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/POKHARN II DAY 17-04-2023-min.pdf"
      },
      {
        "title": "AWARNESS PROGRAM ON G20 IN ONLINE MODE on 06 04 2023 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/AWARNESS PROGRAM ON G20 IN ONLINE MODE on 06-04-2023-min.pdf"
      },
      {
        "title": "Report on CARRIER GUIDANCE IN INDIAN ARMED FORCE  25 03 2023",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on CARRIER GUIDANCE IN INDIAN ARMED FORCE -25-03-2023.pdf"
      },
      {
        "title": "Report on WORLD WATER DAY 22 03 2023 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on WORLD WATER DAY 22-03-2023-min.pdf"
      },
      {
        "title": "Report on BLACK DAY 10 02 2023 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/Report on BLACK DAY-10-02-2023-min.pdf"
      },
      {
        "title": "RepublicDay 26 01 2023 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/RepublicDay 26-01-2023-min.pdf"
      },
      {
        "title": "Guest lecture on career opportunity in civil on 17 12 2022 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/Guest lecture on career opportunity in civil on 17-12-2022-min.pdf"
      },
      {
        "title": "armed forces flag day 08 12 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/armed forces flag day 08-12-2022.pdf"
      },
      {
        "title": "NCC Day 27 11 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/NCC Day 27-11-2022.pdf"
      },
      {
        "title": "NCC SELECTIONS 31 10 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/NCC SELECTIONS 31-10-2022.pdf"
      },
      {
        "title": "Indian armed forces by bangalore on 17 oct 2022 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/Indian armed forces by bangalore on 17 oct 2022-min.pdf"
      },
      {
        "title": "World Rivers  Day 25 September 2022 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/World Rivers  Day 25 September 2022-min.pdf"
      },
      {
        "title": "INTERNATIONAL PEACE DAY 21 Sep 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/INTERNATIONAL PEACE DAY 21 Sep 2022.pdf"
      },
      {
        "title": "Teachers day celebrations on 5 09 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/Teachers day celebrations on 5-09-2022.pdf"
      },
      {
        "title": "INDEPENDENCE DAY 15 08 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/INDEPENDENCE DAY 15-08-2022.pdf"
      },
      {
        "title": "yoga day on 21 06 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/yoga day on 21-06-2022.pdf"
      },
      {
        "title": "NCC Day celebrations on 15th june 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/NCC Day celebrations on 15th june 2022.pdf"
      },
      {
        "title": "Indigenous sports on Jun 14th 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/Indigenous sports on Jun 14th 2022.pdf"
      },
      {
        "title": "world tobacco on 21 05 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/world tobacco on 21-05-2022.pdf"
      },
      {
        "title": "WORLD EARTH DAY 22th April 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/WORLD EARTH DAY 22th April 2022.pdf"
      },
      {
        "title": "Bangalore Defence Academy 26 03 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/Bangalore Defence Academy 26-03-2022.pdf"
      },
      {
        "title": "saheed diwas on 23 03 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/saheed diwas on 23-03-2022.pdf"
      },
      {
        "title": "forest day 21 03 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/forest day 21-03-2022.pdf"
      },
      {
        "title": "bangalore academy 17 03 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/bangalore academy 17-03-2022.pdf"
      },
      {
        "title": "RepublicDay 2022 Jun 26",
        "href": "https://mits.ac.in/assets/pdf/assoc/RepublicDay 2022 Jun 26.pdf"
      },
      {
        "title": "subash chandra bose on 23 01 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/subash chandra bose on 23-01-2022.pdf"
      },
      {
        "title": "trekking camp on 02 01 2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/trekking camp on 02-01-2022.pdf"
      },
      {
        "title": "Indian costitution day on 26 Nov 2021",
        "href": "https://mits.ac.in/assets/pdf/assoc/Indian costitution day on 26 Nov 2021.pdf"
      },
      {
        "title": "Tree plantation program in madanapalle 21 11 2021   Copy",
        "href": "https://mits.ac.in/assets/pdf/assoc/Tree plantation program in madanapalle 21-11-2021 - Copy.pdf"
      },
      {
        "title": "Swatch Bharat 30 10 2021",
        "href": "https://mits.ac.in/assets/pdf/assoc/Swatch Bharat 30-10-2021.pdf"
      },
      {
        "title": "MITS NCC PARTICIPATED IN LANCE NAIK SAI TEJA FUNERAL DUTIES 13 10 2021   Copy",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS NCC PARTICIPATED IN LANCE NAIK SAI TEJA FUNERAL DUTIES 13-10-2021 - Copy.pdf"
      },
      {
        "title": "Gandhi Jayanti on 02 10 2021",
        "href": "https://mits.ac.in/assets/pdf/assoc/Gandhi Jayanti on 02-10-2021.pdf"
      },
      {
        "title": "Flag area competition 10 08 2021",
        "href": "https://mits.ac.in/assets/pdf/assoc/Flag area competition 10-08-2021.pdf"
      },
      {
        "title": "Fit India Freedom Run 19 08 2021",
        "href": "https://mits.ac.in/assets/pdf/assoc/Fit India Freedom Run 19-08-2021.pdf"
      },
      {
        "title": "kargil 26th July 2021",
        "href": "https://mits.ac.in/assets/pdf/assoc/kargil 26th July 2021.pdf"
      },
      {
        "title": "black day 14 02 2021",
        "href": "https://mits.ac.in/assets/pdf/assoc/black day 14-02-2021.pdf"
      },
      {
        "title": "armed forces flag day 08 10 2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/armed forces flag day 08-10-2019.pdf"
      },
      {
        "title": "Awareness Programme on Disaster Management",
        "href": "https://mits.ac.in/assets/pdf/assoc/Awareness%20Programme%20on%20Disaster%20Management.pdf"
      },
      {
        "title": "Kargil Vijay Diwas min",
        "href": "https://mits.ac.in/assets/pdf/assoc/Kargil%20Vijay%20Diwas-min.pdf"
      },
      {
        "title": "Career Opportunities for Technical Graduates in Armed Forces",
        "href": "https://mits.ac.in/assets/pdf/assoc/Career%20Opportunities%20for%20Technical%20Graduates%20in%20Armed%20Forces.pdf"
      },
      {
        "title": "PRIZES won by MITS NCC at CATC IV",
        "href": "https://mits.ac.in/assets/pdf/assoc/PRIZES%20won%20by%20MITS%20NCC%20at%20CATC-IV.pdf"
      },
      {
        "title": "CATC – III",
        "href": "https://mits.ac.in/assets/pdf/assoc/CATC%20%E2%80%93%20III.pdf"
      },
      {
        "title": "NCC B Certificate",
        "href": "https://mits.ac.in/assets/pdf/assoc/NCC%20B-Certificate.pdf"
      },
      {
        "title": "Air Pollution Day 2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/Air%20Pollution%20Day%202019.pdf"
      },
      {
        "title": "World Environment Day 2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/World%20Environment%20Day%202019.pdf"
      },
      {
        "title": "Anti Terrorism Day 2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/Anti-Terrorism%20Day%202019.pdf"
      },
      {
        "title": "One day Trekking to Horsley Hills",
        "href": "https://mits.ac.in/assets/pdf/assoc/One-day%20Trekking%20to%20Horsley%20Hills.pdf"
      },
      {
        "title": "World Water Day 2019 min",
        "href": "https://mits.ac.in/assets/pdf/assoc/World%20Water%20Day%202019-min.pdf"
      },
      {
        "title": "Career Opportunities in Indian Army as Officers min",
        "href": "https://mits.ac.in/assets/pdf/assoc/Career%20Opportunities%20in%20Indian%20Army%20as%20Officers-min.pdf"
      },
      {
        "title": "70th Republic Day Celebrations min",
        "href": "https://mits.ac.in/assets/pdf/assoc/70th%20Republic%20Day%20Celebrations-min.pdf"
      },
      {
        "title": "Netaji Subhash Chandra Bose's Birthday Celebrations min",
        "href": "https://mits.ac.in/assets/pdf/assoc/Netaji%20Subhash%20Chandra%20Bose's%20Birthday%20Celebrations-min.pdf"
      },
      {
        "title": "CATC II",
        "href": "https://mits.ac.in/assets/pdf/assoc/CATC-II.pdf"
      },
      {
        "title": "TREKKING CAMP",
        "href": "https://mits.ac.in/assets/pdf/assoc/TREKKING%20CAMP.pdf"
      },
      {
        "title": "GANDHI JAYANTI CELEBRATIONS",
        "href": "https://mits.ac.in/assets/pdf/assoc/GANDHI%20JAYANTI%20CELEBRATIONS.pdf"
      },
      {
        "title": "Shauchalaya Nirman & Swachh Bharat",
        "href": "https://mits.ac.in/assets/pdf/assoc/Shauchalaya%20Nirman%20&%20Swachh%20Bharat.pdf"
      },
      {
        "title": "Rivers",
        "href": "https://mits.ac.in/assets/pdf/assoc/Rivers.pdf"
      },
      {
        "title": "Swachh Bharat 2017",
        "href": "https://mits.ac.in/assets/pdf/assoc/Swachh%20Bharat%202017.pdf"
      },
      {
        "title": "Awareness Program on Fire Safety Precautions",
        "href": "https://mits.ac.in/assets/pdf/assoc/Awareness%20Program%20on%20Fire%20Safety%20Precautions.pdf"
      },
      {
        "title": "CATC VI",
        "href": "https://mits.ac.in/assets/pdf/assoc/CATC-VI.pdf"
      },
      {
        "title": "CATC V",
        "href": "https://mits.ac.in/assets/pdf/assoc/CATC-V.pdf"
      },
      {
        "title": "onedaytrekkingcamp",
        "href": "https://mits.ac.in/assets/pdf/assoc/onedaytrekkingcamp.pdf"
      },
      {
        "title": "National Cadet Corps (NCC) Awareness Program",
        "href": "https://mits.ac.in/assets/pdf/assoc/National%20Cadet%20Corps%20(NCC)%20Awareness%20Program.pdf"
      },
      {
        "title": "National Cadet Corps (NCC) Selections   2016 17",
        "href": "https://mits.ac.in/assets/pdf/assoc/National%20Cadet%20Corps%20(NCC)%20Selections%20-%202016-17.pdf"
      },
      {
        "title": "Cashless Transactions",
        "href": "https://mits.ac.in/assets/pdf/assoc/Cashless%20Transactions.pdf"
      }
    ]
  },
  "ncc-air": {
    "name": "National Cadet Corps (Air Wing) - NCC Unit",
    "aboutText": [
      "The mission of the NCC Air Wing at MITS is to build character, leadership qualities, and civic responsibility in students. Through structured aviation-oriented training and social service activities, the unit nurtures confident and service-oriented youth.",
      "The NCC Air Wing at MITS began its journey in the academic year 2025 - 2026 with the sanctioning of 16 cadets by 11 (A) AIR SQN (T) NCC, Tirupati, marking a significant milestone in the institute’s commitment to youth leadership and national service. With the introduction of this unit, students gained access to Air Wing training, aero-modelling activities, and national-level NCC opportunities. The NCC Air Wing Cell continues to grow as a platform for discipline, leadership, and patriotic service among the youth of MITS.",
      "National Cadet Corps is a Tri-Services Organisation comprising the Army, Navy and Air Force, engaged in grooming the youth – 'The Leaders of Tomorrow' – into disciplined and patriotic citizens. After independence, the present-day NCC under the Ministry of Defence came into existence on 16 Apr 1948 through the NCC Act XXXI, 1948. NCC was formally inaugurated on 15 Jul 1948, as soon as the schools and colleges reopened after summer vacation. The Girls Division of the NCC was started in Jul 1949. In 1950, Air Wing was added on 01 Apr with one Air squadron each at Bombay and Kolkata. The Naval Wing of the NCC was raised in Jul 1952, thus completing the true representation of all services in the Corps. Presently, NCC has approximately 13 Lakhs Cadets under its fold.",
      "WE THE CADETS OF THE NATIONAL CADET CORPS,",
      "Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain",
      "The NCC Air Wing at MITS conducts a broad range of military, aviation, and personality-development activities under the guidance of trained instructors and the affiliated squadron.",
      "The NCC Air Wing cadets at MITS are provided with a complete uniform and accessories by the institute, ensuring that all students participate with pride and uniformity.",
      "The genesis of the NCC can be traced back to the First World War when the Britishers created the University Corps as the second line of defense and to have a large pool of trained youth available for employment into the Armed Forces. The Naval Wing of the NCC was raised in Jul 1952, thus completing the true representation of all services in the Corps. Presently, NCC has approximately 13 Lakhs Cadets under its fold."
    ],
    "members": [
      {
        "sno": "1",
        "name": "2016-2019",
        "designation": "‘B-Certificate’",
        "position": "27",
        "email": "27"
      },
      {
        "sno": "2",
        "name": "2016-2019",
        "designation": "‘C-Certificate’",
        "position": "26",
        "email": "26"
      },
      {
        "sno": "3",
        "name": "2017-2020",
        "designation": "‘B-Certificate’",
        "position": "34",
        "email": "34"
      },
      {
        "sno": "4",
        "name": "2017-2020",
        "designation": "‘C-Certificate’",
        "position": "26",
        "email": "25"
      },
      {
        "sno": "5",
        "name": "2018-2021",
        "designation": "‘B-Certificate’",
        "position": "29",
        "email": "28"
      },
      {
        "sno": "6",
        "name": "2019-2022",
        "designation": "‘B-Certificate’",
        "position": "35",
        "email": "35"
      },
      {
        "sno": "1",
        "name": "P.Abdhl Khadeer",
        "designation": "AP18/SDA/521719",
        "position": "ECE-A",
        "email": ""
      },
      {
        "sno": "2",
        "name": "N.Ajay Kumar Reddy",
        "designation": "AP18/SDA/521720",
        "position": "CSIT-A",
        "email": ""
      },
      {
        "sno": "3",
        "name": "K.Balaji",
        "designation": "AP18/SDA/521721",
        "position": "ECE-A",
        "email": ""
      },
      {
        "sno": "4",
        "name": "M.Charan Teja",
        "designation": "AP18/SDA/521722",
        "position": "MECH-A",
        "email": ""
      },
      {
        "sno": "5",
        "name": "T.Chinna Subba Reddy",
        "designation": "AP18/SDA/521723",
        "position": "MECH-A",
        "email": ""
      },
      {
        "sno": "6",
        "name": "M.Devan Dilip",
        "designation": "AP18/SDA/521724",
        "position": "EEE-A",
        "email": ""
      },
      {
        "sno": "7",
        "name": "K.Govardhan",
        "designation": "AP18/SDA/521725",
        "position": "CSE-A",
        "email": ""
      },
      {
        "sno": "8",
        "name": "B.Harikrishna",
        "designation": "AP18/SDA/521726",
        "position": "CIVIL",
        "email": ""
      },
      {
        "sno": "9",
        "name": "B.Harkrishna",
        "designation": "AP18/SDA/521727",
        "position": "ECE-A",
        "email": ""
      },
      {
        "sno": "10",
        "name": "k.Hari Prasad",
        "designation": "AP18/SDA/521728",
        "position": "EEE-A",
        "email": ""
      },
      {
        "sno": "11",
        "name": "M.Jaswanth",
        "designation": "AP18/SDA/521729",
        "position": "MECH-A",
        "email": ""
      },
      {
        "sno": "12",
        "name": "B.Kiran Kumar",
        "designation": "AP18/SDA/521730",
        "position": "CSE-A",
        "email": ""
      },
      {
        "sno": "13",
        "name": "K.Kiran Kumar",
        "designation": "AP18/SDA/521731",
        "position": "CSE-A",
        "email": ""
      },
      {
        "sno": "14",
        "name": "B.Lakshmi Chennakesava",
        "designation": "AP18/SDA/521732",
        "position": "MECH-A",
        "email": ""
      },
      {
        "sno": "15",
        "name": "K.Maheshwar Reddy",
        "designation": "AP18/SDA/521733",
        "position": "ECE-E",
        "email": ""
      },
      {
        "sno": "16",
        "name": "S.Masthan suhail",
        "designation": "AP18/SDA/521734",
        "position": "ECE-B",
        "email": ""
      },
      {
        "sno": "17",
        "name": "K.Mohammed Shoyab",
        "designation": "AP18/SDA/521735",
        "position": "EEE-B",
        "email": ""
      },
      {
        "sno": "18",
        "name": "O.Navaneeswar Reddy",
        "designation": "AP18/SDA/521736",
        "position": "MECH-B",
        "email": ""
      },
      {
        "sno": "19",
        "name": "G.Nawaz",
        "designation": "AP18/SDA/521737",
        "position": "CIVIL",
        "email": ""
      },
      {
        "sno": "20",
        "name": "D.Pavan Kumar Reddy",
        "designation": "AP18/SDA/521738",
        "position": "CSE-D",
        "email": ""
      },
      {
        "sno": "21",
        "name": "S.Rupesh",
        "designation": "AP18/SDA/521739",
        "position": "CSIT-B",
        "email": ""
      },
      {
        "sno": "22",
        "name": "I. Sai Venkatesh",
        "designation": "AP18/SDA/521740",
        "position": "CSIT-B",
        "email": ""
      },
      {
        "sno": "23",
        "name": "T.Sasidhar",
        "designation": "AP18/SDA/521741",
        "position": "MECH-C",
        "email": ""
      },
      {
        "sno": "24",
        "name": "P.sreenath",
        "designation": "AP18/SDA/521742",
        "position": "ECE-D",
        "email": ""
      },
      {
        "sno": "25",
        "name": "R.Sreenath",
        "designation": "AP18/SDA/521743",
        "position": "MECH-B",
        "email": ""
      },
      {
        "sno": "26",
        "name": "S.Sohail Basha",
        "designation": "AP18/SDA/521744",
        "position": "EEE-B",
        "email": ""
      },
      {
        "sno": "27",
        "name": "S.Sumanth",
        "designation": "AP18/SDA/521745",
        "position": "EEE-B",
        "email": ""
      },
      {
        "sno": "28",
        "name": "P.Teja Vardhan",
        "designation": "AP18/SDA/521746",
        "position": "ECE-D",
        "email": ""
      },
      {
        "sno": "29",
        "name": "R.Tarakeswara Reddy",
        "designation": "AP18/SDA/521747",
        "position": "MECH-C",
        "email": ""
      },
      {
        "sno": "30",
        "name": "B.Vinay Kumar",
        "designation": "AP18/SDA/521748",
        "position": "MECH-C",
        "email": ""
      },
      {
        "sno": "31",
        "name": "M.Yashwanth",
        "designation": "AP18/SDA/521749",
        "position": "CSE-D",
        "email": ""
      },
      {
        "sno": "32",
        "name": "P.Bhavana",
        "designation": "AP18/SWA/521750",
        "position": "ECE-A",
        "email": ""
      },
      {
        "sno": "33",
        "name": "T.Manasa",
        "designation": "AP18/SWA/521751",
        "position": "ECE-B",
        "email": ""
      },
      {
        "sno": "34",
        "name": "N.Mounika",
        "designation": "AP18/SWA/521752",
        "position": "EEE-A",
        "email": ""
      },
      {
        "sno": "35",
        "name": "K.Ramya",
        "designation": "AP18/SWA/521753",
        "position": "ECE-C",
        "email": ""
      },
      {
        "sno": "36",
        "name": "N.Sowmya",
        "designation": "AP18/SWA/521754",
        "position": "EEE-A",
        "email": ""
      },
      {
        "sno": "1",
        "name": "AP17/SD/521275",
        "designation": "L.G.AKHIL",
        "position": "1st.B.Tech",
        "email": "IT"
      },
      {
        "sno": "2",
        "name": "AP17/SD/521276",
        "designation": "K.ARBAZ",
        "position": "1st.B.Tech",
        "email": "ECE"
      },
      {
        "sno": "3",
        "name": "AP17/SD/521277",
        "designation": "B.ARUN KUMAR",
        "position": "1st.B.Tech",
        "email": "EEE-A"
      },
      {
        "sno": "4",
        "name": "AP17/SD/521278",
        "designation": "DHAMARAESHWARA.M",
        "position": "1st.B.Tech",
        "email": "CSE"
      },
      {
        "sno": "5",
        "name": "AP17/SD/521279",
        "designation": "HEMANTH KUMAR REDDY.B",
        "position": "1st.B.Tech",
        "email": "CSE-D"
      },
      {
        "sno": "6",
        "name": "AP17/SD/521280",
        "designation": "HEMANTH KUMAR REDDY.S",
        "position": "1st.B.Tech",
        "email": "MEC-A"
      },
      {
        "sno": "7",
        "name": "AP17/SD/521281",
        "designation": "HIMA TEJA.M",
        "position": "1st.B.Tech",
        "email": "MEC-B"
      },
      {
        "sno": "8",
        "name": "AP17/SD/521282",
        "designation": "KIRAN KUMAR.D",
        "position": "1st.B.Tech",
        "email": "ECE-B"
      },
      {
        "sno": "9",
        "name": "AP17/SD/521283",
        "designation": "KISHORE KUMAR REDDDY.P",
        "position": "1st.B.Tech",
        "email": "ECE-E"
      },
      {
        "sno": "10",
        "name": "AP17/SD/521284",
        "designation": "MAHESH.G",
        "position": "1st.B.Tech",
        "email": "MEC-B"
      },
      {
        "sno": "11",
        "name": "AP17/SD/521285",
        "designation": "MAHESH.M",
        "position": "1st.B.Tech",
        "email": "MEC-B"
      },
      {
        "sno": "12",
        "name": "AP17/SD/521286",
        "designation": "NARESH.K",
        "position": "1st.B.Tech",
        "email": "ECE-B"
      },
      {
        "sno": "13",
        "name": "AP17/SD/521287",
        "designation": "NARESH.K",
        "position": "1st.B.Tech",
        "email": "EEE-A"
      },
      {
        "sno": "14",
        "name": "AP17/SD/521288",
        "designation": "NAVEEN KUMAR.M",
        "position": "1st.B.Tech",
        "email": "MEC-B"
      },
      {
        "sno": "15",
        "name": "AP17/SD/521289",
        "designation": "NIKHIL.Z",
        "position": "1st.B.Tech",
        "email": "MEC-B"
      },
      {
        "sno": "16",
        "name": "AP17/SD/521290O",
        "designation": "M PRAKASH.N",
        "position": "1st.B.Tech",
        "email": "ECE-F"
      },
      {
        "sno": "17",
        "name": "AP17/SD/521291",
        "designation": "PAVAN KUMAR.B",
        "position": "1st.B.Tech",
        "email": "MEC-B"
      },
      {
        "sno": "18",
        "name": "AP17/SD/521292",
        "designation": "PAVAN KALYAN.M",
        "position": "1st.B.Tech",
        "email": "MEC-B"
      },
      {
        "sno": "19",
        "name": "AP17/SD/521293",
        "designation": "PRUDHVI RAJU.D",
        "position": "1st.B.Tech",
        "email": "CSE-D"
      },
      {
        "sno": "20",
        "name": "AP17/SD/521294",
        "designation": "RAKESH.K",
        "position": "1st.B.Tech",
        "email": "MEC"
      },
      {
        "sno": "21",
        "name": "AP17/SD/521295",
        "designation": "RAVI TEJA.K",
        "position": "1st.B.Tech",
        "email": "MEC"
      },
      {
        "sno": "22",
        "name": "AP17/SD/521296",
        "designation": "SAI TEJA.M",
        "position": "1st.B.Tech",
        "email": "ECE"
      },
      {
        "sno": "23",
        "name": "AP17/SD/521297",
        "designation": "SATHISH KUMAR.K",
        "position": "1st.B.Tech",
        "email": "ECE-F"
      },
      {
        "sno": "24",
        "name": "AP17/SD/521298",
        "designation": "THEJA.A",
        "position": "1st.B.Tech",
        "email": "ECE"
      },
      {
        "sno": "25",
        "name": "AP17/SD/521299",
        "designation": "UDAY KUMAR.N",
        "position": "1st.B.Tech",
        "email": "ECE"
      },
      {
        "sno": "26",
        "name": "AP17/SD/521300",
        "designation": "VASANTH KUMAR REDDY.CH",
        "position": "1st.B.Tech",
        "email": "MEC-C"
      },
      {
        "sno": "27",
        "name": "AP17/SD/521301VEDA",
        "designation": "VYAS.T",
        "position": "1st.B.Tech",
        "email": "ECE"
      },
      {
        "sno": "28",
        "name": "AP17/SD/521242",
        "designation": "VENU MADHAV.K",
        "position": "1st.B.Tech",
        "email": "ECE-D"
      },
      {
        "sno": "29",
        "name": "AP17/SD/521247",
        "designation": "VENKAT KALYAN.J",
        "position": "1st.B.Tech",
        "email": "MEC"
      },
      {
        "sno": "30",
        "name": "AP17/SD/521248",
        "designation": "ZEESHAN ALI.S",
        "position": "1st.B.Tech",
        "email": "EEE-B"
      },
      {
        "sno": "31",
        "name": "AP17/SW/521302",
        "designation": "R.DEEPTHI",
        "position": "1st.B.Tech",
        "email": "ECE-A"
      },
      {
        "sno": "32",
        "name": "AP17/SW/521303",
        "designation": "B.PRAVALLIKA REDDY",
        "position": "1st.B.Tech",
        "email": "ECE-C"
      },
      {
        "sno": "33",
        "name": "AP17/SW/521304",
        "designation": "B.PRATHIBHA",
        "position": "1st.B.Tech",
        "email": "ECE-C"
      },
      {
        "sno": "34",
        "name": "AP17/SW/521305",
        "designation": "M.POOJA CHOWDARY",
        "position": "1st.B.Tech",
        "email": "CSE-B"
      },
      {
        "sno": "35",
        "name": "AP17/SW/521306",
        "designation": "N.PRANEETHA",
        "position": "1st.B.Tech",
        "email": "CS.IT"
      },
      {
        "sno": "36",
        "name": "AP17/SW/521307",
        "designation": "O.SAI LAKSHMI",
        "position": "1st.B.Tech",
        "email": "IT"
      },
      {
        "sno": "37",
        "name": "AP17/SW/521308",
        "designation": "M.TEJASWINI",
        "position": "1st.B.Tech",
        "email": "EEE-B"
      },
      {
        "sno": "1",
        "name": "Ap16/SW/521241",
        "designation": "D.Anusha",
        "position": "ECE-E",
        "email": "2nd B.TECH"
      },
      {
        "sno": "2",
        "name": "Ap16/SW/521243",
        "designation": "D.Dharshini",
        "position": "ECE-C",
        "email": "2nd B.TECH"
      },
      {
        "sno": "3",
        "name": "Ap16/SW/521244",
        "designation": "R.Gnana Prasoona",
        "position": "CIVIL",
        "email": "2nd B.TECH"
      },
      {
        "sno": "4",
        "name": "Ap16/SW/521245",
        "designation": "N.Jhansi",
        "position": "ECE-F",
        "email": "2nd B.TECH"
      },
      {
        "sno": "5",
        "name": "Ap16/SW/521246",
        "designation": "N.Keerthana Reddy",
        "position": "CIVIL",
        "email": "2nd B.TECH"
      },
      {
        "sno": "6",
        "name": "Ap16/SW/521249",
        "designation": "M.Nandini",
        "position": "ECE-B",
        "email": "2nd B.TECH"
      },
      {
        "sno": "7",
        "name": "Ap16/SW/521250",
        "designation": "C.yuthi",
        "position": "ECE-F",
        "email": "2nd B.TECH"
      },
      {
        "sno": "8",
        "name": "Ap16/SD/521251",
        "designation": "T.Ahmed Basha",
        "position": "CSE-D",
        "email": "2nd B.TECH"
      },
      {
        "sno": "9",
        "name": "Ap16/SD/521252",
        "designation": "N.Anand kumar",
        "position": "ECE-E",
        "email": "2nd B.TECH"
      },
      {
        "sno": "10",
        "name": "Ap16/SD/521253",
        "designation": "S.Girish",
        "position": "ECE-E",
        "email": "2nd B.TECH"
      },
      {
        "sno": "11",
        "name": "Ap16/SD/521254",
        "designation": "N.Harsha vardhan Reddy",
        "position": "ECE-A",
        "email": "2nd B.TECH"
      },
      {
        "sno": "12",
        "name": "Ap16/SD/521255",
        "designation": "B.Jaswanth kumar reddy",
        "position": "EEE-B",
        "email": "2nd B.TECH"
      },
      {
        "sno": "13",
        "name": "Ap16/SD/521256",
        "designation": "S.Jaya prakash",
        "position": "ECE-D",
        "email": "2nd B.TECH"
      },
      {
        "sno": "14",
        "name": "Ap16/SD/521257",
        "designation": "B.Jitendra Reddy",
        "position": "EEE-A",
        "email": "2nd B.TECH"
      },
      {
        "sno": "15",
        "name": "Ap16/SD/521258",
        "designation": "V.Mohammad Rafi",
        "position": "MECH-A",
        "email": "2nd B.TECH"
      },
      {
        "sno": "16",
        "name": "Ap16/SD/521259",
        "designation": "K.Nagendra babu",
        "position": "ECE-D",
        "email": "2nd B.TECH"
      },
      {
        "sno": "17",
        "name": "Ap16/SD/521260",
        "designation": "E.Naveen Kumar",
        "position": "MEC-B",
        "email": "2nd B.TECH"
      },
      {
        "sno": "18",
        "name": "Ap16/SD/521261",
        "designation": "V.P.Naveen",
        "position": "EEE-B",
        "email": "2nd B.TECH"
      },
      {
        "sno": "19",
        "name": "Ap16/SD/521262",
        "designation": "C.Obulesu",
        "position": "ECE-D",
        "email": "2nd B.TECH"
      },
      {
        "sno": "20",
        "name": "Ap16/SD/521263",
        "designation": "D.Obulesu Raju",
        "position": "EEE-A",
        "email": "2nd B.TECH"
      },
      {
        "sno": "21",
        "name": "Ap16/SD/521264",
        "designation": "G.Pavan kumar Reddy",
        "position": "CSE-D",
        "email": "2nd B.TECH"
      },
      {
        "sno": "22",
        "name": "Ap16/SD/521265",
        "designation": "S.Prudhvi",
        "position": "CSE-A",
        "email": "2nd B.TECH"
      },
      {
        "sno": "23",
        "name": "Ap16/SD/521266",
        "designation": "Y.Reddeiah",
        "position": "ECE-D",
        "email": "2nd B.TECH"
      },
      {
        "sno": "24",
        "name": "Ap16/SD/521267",
        "designation": "G.Sai Pavan",
        "position": "EEE-B",
        "email": "2nd B.TECH"
      },
      {
        "sno": "25",
        "name": "Ap16/SD/521268",
        "designation": "J.Sreenivas sriram",
        "position": "ECE-C",
        "email": "2nd B.TECH"
      },
      {
        "sno": "26",
        "name": "Ap16/SD/521269",
        "designation": "Shyam Sundar",
        "position": "CSE-C",
        "email": "2nd B.TECH"
      },
      {
        "sno": "27",
        "name": "Ap16/SD/521270",
        "designation": "P.Sudharshan",
        "position": "CSE-C",
        "email": "2nd B.TECH"
      },
      {
        "sno": "28",
        "name": "Ap16/SD/521271",
        "designation": "E.Venkata Lakshmi Reddy",
        "position": "ECE-F",
        "email": "2nd B.TECH"
      },
      {
        "sno": "29",
        "name": "Ap16/SD/521272",
        "designation": "K.V. Sai Prakash",
        "position": "MECH-B",
        "email": "2nd B.TECH"
      },
      {
        "sno": "30",
        "name": "Ap16/SD/521273",
        "designation": "B.Vivekananda Reddy",
        "position": "ECE-F",
        "email": "2nd B.TECH"
      },
      {
        "sno": "31",
        "name": "Ap16/SD/521274",
        "designation": "N.Yugal Kishore",
        "position": "MECH-B",
        "email": "2nd B.TECH"
      }
    ],
    "documents": [
      {
        "title": "Selected NCC cadets 2025-2026",
        "href": "https://mits.ac.in/assets/pdf/assoc/Selected%20NCC%20cadets%202025-2026.pdf"
      },
      {
        "title": "162814116795NCC OE - 01 - Forms by Cdts - Acceptance of Enrolment",
        "href": "https://mits.ac.in/assets/pdf/assoc/162814116795NCC OE - 01 - Forms by Cdts - Acceptance of Enrolment.pdf"
      },
      {
        "title": "162814116813NCC OE - 02 - Forms by Cdts - Medical Certificate",
        "href": "https://mits.ac.in/assets/pdf/assoc/162814116813NCC OE - 02 - Forms by Cdts - Medical Certificate.pdf"
      },
      {
        "title": "162814116812NCC OE - 03 - Forms by Cdts - Extension of Enrolment",
        "href": "https://mits.ac.in/assets/pdf/assoc/162814116812NCC OE - 03 - Forms by Cdts - Extension of Enrolment.pdf"
      },
      {
        "title": "162814116813NCC OE - 04 - Forms by Cdts - Nomination to CWS",
        "href": "https://mits.ac.in/assets/pdf/assoc/162814116813NCC OE - 04 - Forms by Cdts - Nomination to CWS.pdf"
      },
      {
        "title": "Enrolment form 2024-25",
        "href": "https://mits.ac.in/assets/pdf/assoc/Enrolment form 2024-25.pdf"
      },
      {
        "title": "SD Enrolment Form",
        "href": "https://mits.ac.in/assets/pdf/assoc/SD Enrolment Form.pdf"
      },
      {
        "title": "Download Brochure",
        "href": "https://mits.ac.in/public/uploads/static-pdf/MITS Deemed to be University Brochure 2026.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. Charan Kuchi",
        "designation": "Caretaker Officer (CTO),",
        "email": "",
        "phone": "+91 9705559770\n",
        "address": "Madanapalle Institute of Technology & Science"
      },
      {
        "name": "Lt. Dr. N. Naveen Kumar M",
        "designation": "Associate NCC Officer",
        "email": "",
        "phone": "",
        "address": "Madanapalle Institute of Technology & Science"
      }
    ],
    "id": "ncc-air",
    "url": "https://mits.ac.in/ncc-airwing"
  },
  "ieee": {
    "name": "IEEE Student Branch (STB17051)",
    "aboutText": [
      "The IEEE Student Branch at Madanapalle Institute of Technology & Science is one of the most vibrant professional technical student communities in the region, affiliated with the IEEE Hyderabad Section.",
      "The Student Branch encompasses multiple active technical chapters and affinity groups, including IEEE Computer Society, IEEE Power & Energy Society (PES), IEEE Communications Society (ComSoc), and IEEE Women in Engineering (WIE).",
      "Through expert lecture series, international technical symposiums, coding hackathons, and global humanitarian technology challenges, MITS IEEE inspires young engineers to innovate for the benefit of humanity."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Patron",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. Velumani M",
        "designation": "Assistant Professor, Dept. of ECE",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. K. Arul kumar",
        "designation": "Associate Professor, Dept. of EEE",
        "position": "Branch Counselor / Advisor",
        "email": ""
      },
      {
        "sno": "4",
        "name": "Dr. C. Kamal Basha",
        "designation": "Professor, Dept. of EEE",
        "position": "Senior Advisor",
        "email": ""
      },
      {
        "sno": "5",
        "name": "Student Chair",
        "designation": "Undergraduate Student, ECE",
        "position": "Student Chair",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "Office order MITS IEEE Professional Executive Committee & Advisors - 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/IEEE Student branch-2025.pdf"
      },
      {
        "title": "MITS IEEE SOP",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS IEEE SOP.pdf"
      },
      {
        "title": "MITS IEEE Society List",
        "href": "https://mits.ac.in/assets/pdf/assoc/Society List.pdf"
      },
      {
        "title": "MITS IEEE Society Advisors List",
        "href": "https://mits.ac.in/assets/pdf/assoc/Society Advisors List.pdf"
      },
      {
        "title": "MITS IEEE Hierarchy",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS IEEE Hierarchy.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. Velumani M",
        "designation": "Assistant Professor (ECE) & IEEE Coordinator",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "ieee@mits.ac.in"
      }
    ],
    "id": "ieee",
    "url": "https://mits.ac.in/ieee",
    "events": [
      {
        "title": "IEEE Day Global Celebrations & Technical Paper Presentation Colloquium",
        "href": "https://mits.ac.in/assets/pdf/assoc/IEEE Student branch-2025.pdf",
        "date": "07-10-2025"
      },
      {
        "title": "IEEE IEEEXtreme 19.0 Global 24-Hour Virtual Coding Competition",
        "href": "https://mits.ac.in/assets/pdf/assoc/MITS IEEE SOP.pdf",
        "date": "25-10-2025"
      },
      {
        "title": "Workshop on Next-Gen 6G Wireless Communications & Signal Processing",
        "href": "https://mits.ac.in/assets/pdf/assoc/Society List.pdf",
        "date": "18-04-2025"
      }
    ],
    "sections": [
      {
        "title": "Branch Structure & Societies",
        "paragraphs": [
          "IEEE Student Branch (STB17051) under IEEE Region 10 and IEEE Hyderabad Section.",
          "IEEE Computer Society Student Branch Chapter.",
          "IEEE Power & Energy Society (PES) Chapter.",
          "IEEE Women in Engineering (WIE) Affinity Group.",
          "IEEE Robotics & Automation Society (RAS) Student Chapter."
        ]
      },
      {
        "title": "Student Benefits & Opportunities",
        "paragraphs": [
          "Access to IEEE Xplore digital library for research papers and standards.",
          "Opportunities to present research at international IEEE conferences worldwide.",
          "Leadership roles, global networking with IEEE Young Professionals and Fellows.",
          "Participation in prestigious IEEE competitions like IEEE Xtreme 24-Hour Programming Competition."
        ]
      }
    ]
  },
  "iste": {
    "name": "Indian Society for Technical Education (ISTE) Chapter",
    "aboutText": [
      "The Indian Society for Technical Education (ISTE) Chapter at Madanapalle Institute of Technology & Science promotes qualitative development in technical education, fostering professional growth among teachers and personality development among students.",
      "MITS ISTE Chapter has consistently received AP State ISTE Awards for outstanding institutional chapters, exemplary faculty contributions, and best student project innovations.",
      "The Chapter organizes faculty development programs, pedagogical workshops, national technical symposiums, and inter-collegiate technical quizzes to elevate educational standards."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "President",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. Ved Prakash",
        "designation": "Associate Professor",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. P. Ramanathan",
        "designation": "Vice-Principal (Administration)",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "4",
        "name": "Dr. S. Baskaran",
        "designation": "Head, Dept. of Mechanical Engineering",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "ISTE AP State Awards-2022",
        "href": "https://mits.ac.in/assets/pdf/assoc/ISTE AP State Award 2022.pdf"
      },
      {
        "title": "ISTE AP State Awards-2021",
        "href": "https://mits.ac.in/assets/pdf/assoc/ISTE AP State Award 2021.pdf"
      },
      {
        "title": "ISTE AP State Awards-2020",
        "href": "https://mits.ac.in/assets/pdf/assoc/2020-ISTE-Awards.pdf"
      },
      {
        "title": "ISTE AP State Awards-2019",
        "href": "https://mits.ac.in/assets/pdf/assoc/2019-ISTE-Awards.pdf"
      },
      {
        "title": "ISTE AP State Awards-2018",
        "href": "https://mits.ac.in/assets/pdf/mech/Indian%20Society%20for%20Technical%20Education%20(ISTE)%20AP%20Section%20Awards%202018-min.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. Ved Prakash",
        "designation": "Coordinator of ISTE Chapter",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "iste@mits.ac.in"
      }
    ],
    "id": "iste",
    "url": "https://mits.ac.in/iste",
    "events": [
      {
        "title": "Faculty Development Programme on Next-Gen Pedagogical Methodologies and OBE",
        "href": "https://mits.ac.in/assets/pdf/assoc/ISTE AP State Award 2022.pdf",
        "date": "16-09-2025"
      },
      {
        "title": "State-Level Inter-Collegiate Technical Quiz Competition (TechQuizzica)",
        "href": "https://mits.ac.in/assets/pdf/assoc/ISTE AP State Award 2021.pdf",
        "date": "22-03-2025"
      },
      {
        "title": "National Conference on Innovations in Engineering Pedagogy and Educational Technology",
        "href": "https://mits.ac.in/assets/pdf/assoc/2020-ISTE-Awards.pdf",
        "date": "10-12-2024"
      }
    ],
    "sections": [
      {
        "title": "Objectives of ISTE Chapter",
        "paragraphs": [
          "Enhancing professional instructional skills of technical educators through pedagogical masterclasses.",
          "Fostering technical innovation, ethical values, and research temperament in students.",
          "Promoting industry-institute networking and cooperative education partnerships.",
          "Recognizing and awarding outstanding academic achievements and student innovations across disciplines."
        ]
      },
      {
        "title": "Awards & Distinctions",
        "paragraphs": [
          "Recipient of the Best ISTE AP Section Chapter Award across multiple academic cycles (2018, 2019, 2020, 2021, 2022).",
          "Consistently high member enrollment of faculty and student fellows across South India."
        ]
      }
    ]
  },
  "csi": {
    "name": "Computer Society of India (CSI) Student Branch",
    "aboutText": [
      "The Computer Society of India (CSI) Student Branch at Madanapalle Institute of Technology & Science (Branch Code: 500127) is a premier technical society cultivating programming prowess, algorithmic problem solving, software engineering, and emerging computing skills.",
      "The Branch organizes coding hackathons, technical conferences, generative AI seminars, and open-source contributions, creating an exceptional platform for computer science enthusiasts to thrive."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Patron",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. M. Sakthivel",
        "designation": "Associate Professor, Dept. of CSE",
        "position": "Student Branch Counselor",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. Manish Sharma",
        "designation": "Associate Professor, Dept. of CSE",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "CSI Student Branch Accreditation & Bylaws",
        "href": "https://mits.ac.in/assets/pdf/cse/INNOSPARK 1.0.pdf"
      },
      {
        "title": "CSI Annual Activity Calendar",
        "href": "https://mits.ac.in/assets/pdf/cse/INNOSPARK 1.0.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. M. Sakthivel",
        "designation": "Associate Professor (CSE) & CSI Student Branch Counselor",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "csi@mits.ac.in"
      }
    ],
    "id": "csi",
    "url": "https://mits.ac.in/csi",
    "events": [
      {
        "title": "Seminar on Human Centered Applied AI Research",
        "href": "https://mits.ac.in/assets/pdf/cse/Human Centered Applied AI Research.pdf",
        "date": "15-10-2025"
      },
      {
        "title": "Seminar on Generative AI & Reimagining Retail Supply Chains Transformative Power of Agentic AI",
        "href": "https://mits.ac.in/assets/pdf/cse/Generative AI & Reimagining Retail Supply Chains Transformative Power of Agentic AI.pdf",
        "date": "12-09-2025"
      },
      {
        "title": "Masterclass on Edge AI 2.0 Towards Establishing & Sustaining Real-Time Enterprises",
        "href": "https://mits.ac.in/assets/pdf/cse/Edge AI 2.0 Towards Establishing & Sustaining Real-Time Enterprises.pdf",
        "date": "04-08-2025"
      },
      {
        "title": "INNOSPARK 1.0 Hackathon & Coding Challenge",
        "href": "https://mits.ac.in/assets/pdf/cse/INNOSPARK 1.0.pdf",
        "date": "20-03-2025"
      },
      {
        "title": "Hands-on Workshop on Gen AI Tools and Techniques",
        "href": "https://mits.ac.in/assets/pdf/cse/Gen AI Tools and Techniques.pdf",
        "date": "18-01-2025"
      }
    ],
    "sections": [
      {
        "title": "Focus Areas & Activities",
        "paragraphs": [
          "Hands-on masterclasses in Artificial Intelligence, Edge Computing, and Cloud native development.",
          "Hosting the flagship annual coding marathon 'INNOSPARK' and technical project expos.",
          "Promoting student publications in CSI Communications and national student symposiums."
        ]
      }
    ]
  },
  "iete": {
    "name": "Institution of Electronics and Telecommunication Engineers (IETE) Chapter",
    "aboutText": [
      "The Institution of Electronics and Telecommunication Engineers (IETE) Students' Forum (ISF) at Madanapalle Institute of Technology & Science is dedicated to advancing the disciplines of electronics, telecommunications, semiconductor systems, and information technology.",
      "The Forum provides a platform for engineering students to bridge academic theory with industry requirements through hands-on technical workshops, industrial seminars, and hardware project exhibitions.",
      "In active collaboration with the Department of ECE and EEE, MITS IETE organizes state-of-the-art skill development initiatives in Full Stack Development, VLSI semiconductor design, and embedded telecommunication infrastructure."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Patron",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Mrs. K. Revathi",
        "designation": "Assistant Professor, Dept. of EEE",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. K. Sathesh",
        "designation": "Associate Professor, Dept. of ECE",
        "position": "Faculty Advisor",
        "email": ""
      },
      {
        "sno": "4",
        "name": "Dr. Velumani M",
        "designation": "Assistant Professor, Dept. of ECE",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "IETE Committee Office Order 2025-26",
        "href": "https://mits.ac.in/assets/pdf/assoc/IETE Committee Office Order 2025.pdf"
      },
      {
        "title": "IETE Committee Office Order 2024-25",
        "href": "https://mits.ac.in/assets/pdf/assoc/IETE Committee Office Order 2024.pdf"
      },
      {
        "title": "IETE Technical Event Form",
        "href": "https://mits.ac.in/assets/pdf/assoc/IETE-Technical event Form.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Mrs. K. Revathi",
        "designation": "Assistant Professor (EEE) & Coordinator of IETE",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "iete@mits.ac.in"
      }
    ],
    "id": "iete",
    "url": "https://mits.ac.in/iete",
    "events": [
      {
        "title": "Skill Development Programme on “Full Stack Development for Future Software Engineers” organized by ECE in Association with MITS ISF on 06th April 2026",
        "href": "https://mits.ac.in/assets/pdf/ece/IETE technical event report 06.04.2026.pdf",
        "date": "06-04-2026"
      },
      {
        "title": "Seminar on “From Silicon to Systems: Powering the future with Semiconductor Innovation” organized by ECE in Association with MITS ISF on 24th February 2026",
        "href": "https://mits.ac.in/assets/pdf/ece/From Silicon to Systems Powering the future with Semiconductor-compressed.pdf",
        "date": "24-02-2026"
      },
      {
        "title": "Hands-on Workshop on Embedded IoT and Next-Gen Communication Protocols",
        "href": "https://mits.ac.in/assets/pdf/assoc/IETE-Technical event Form.pdf",
        "date": "15-11-2025"
      }
    ],
    "sections": [
      {
        "title": "Aims & Focus Areas",
        "paragraphs": [
          "Organizing technical symposiums, seminars, and industrial tours for electronics and communication engineers.",
          "Facilitating student paper publications in prestigious IETE journals and regional technical bulletins.",
          "Conducting hands-on bootcamps in FPGA programming, embedded microcontrollers, and modern full-stack development.",
          "Strengthening industry connections with telecommunications, semiconductor, and embedded technology enterprises."
        ]
      }
    ]
  },
  "nasscom": {
    "name": "National Association of Software and Services Companies (NASSCOM) Cell",
    "aboutText": [
      "The NASSCOM FutureSkills Prime Cell at Madanapalle Institute of Technology & Science is established under the national skilling initiative in partnership with Ministry of Electronics and IT (MeitY) and NASSCOM.",
      "The Cell delivers industry-validated digital certifications in Artificial Intelligence, Big Data, Cloud Computing, Cybersecurity, and IoT, aligning students with high-growth IT and ITeS employment opportunities."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairperson",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Dr. P. Ramanathan",
        "designation": "Vice-Principal (Administration)",
        "position": "Coordinator",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Dr. C. Kamal Basha",
        "designation": "Dean Quality Assurance",
        "position": "Member",
        "email": ""
      }
    ],
    "documents": [
      {
        "title": "NASSCOM Committee Order 2025-26",
        "href": "https://mits.ac.in/assets/pdf/assoc/Office%20Order-NASSCOM.pdf"
      },
      {
        "title": "NASSCOM Committee Order 2024-25",
        "href": "https://mits.ac.in/assets/pdf/assoc/NASSCOM-Committee-order-2024.pdf"
      },
      {
        "title": "NASSCOMM Office Order",
        "href": "https://mits.ac.in/assets/pdf/assoc/NASSCOMM OFFICE ORDER.pdf"
      },
      {
        "title": "Memorandum of Understanding (MoU)",
        "href": "https://mits.ac.in/assets/pdf/assoc/NASSCOMM MoU 09.07.2024.pdf"
      },
      {
        "title": "Certificate Summary 2024-25 Sem I",
        "href": "https://mits.ac.in/assets/pdf/assoc/certificatesummary_2024-25_Sem1.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. P. Ramanathan",
        "designation": "Vice-Principal (Administration) & Coordinator - NASSCOM Cell",
        "address": "Madanapalle Institute of Technology & Science, Madanapalle - 517325",
        "phone": "+91-8571-280255",
        "email": "nasscom@mits.ac.in"
      }
    ],
    "id": "nasscom",
    "url": "https://mits.ac.in/nasscom",
    "sections": [
      {
        "title": "Programs & Certification Tracks",
        "paragraphs": [
          "NASSCOM FutureSkills Prime Foundation & Deep-Skilling courses.",
          "Direct assessment and proctored certification recognized by leading IT employers across India.",
          "Faculty training programs in emerging tech pedagogy led by NASSCOM certified industry mentors."
        ]
      }
    ],
    "events": [
      {
        "title": "NASSCOM FutureSkills Prime Emerging Technologies Certification Drive",
        "href": "https://mits.ac.in/assets/pdf/assoc/Office%20Order-NASSCOM.pdf",
        "date": "10-09-2025"
      },
      {
        "title": "AI & Cloud Foundations Masterclass in Partnership with NASSCOM",
        "href": "https://mits.ac.in/assets/pdf/assoc/NASSCOMM MoU 09.07.2024.pdf",
        "date": "14-04-2025"
      },
      {
        "title": "Cybersecurity Fundamentals and Threat Intelligence Boot Camp",
        "href": "https://mits.ac.in/assets/pdf/assoc/certificatesummary_2024-25_Sem1.pdf",
        "date": "20-01-2025"
      }
    ]
  },
  "iei": {
    "name": "The Institution of Engineers (India)",
    "aboutText": [
      "About The Institution of Engineers (India) [IEI]",
      "The Institution of Engineers (India) [IEI], headquartered in Kolkata, aims to address the needs of the student community by serving as a platform for global engineering connections and actively supporting R&D initiatives through various promotional programs. Additionally, it facilitates activities such as lectures, seminars, symposium, workshops, and other educational programs. Madanapalle Institute of Technology and Science - Deemed to be University has been fostering academic excellence by encouraging and promoting student chapters of various technical societies. This initiative led to the establishment of the MITS-IE(I) Students Chapter.",
      "Nineteen esteemed faculty members hold prestigious IEI Memberships, including:",
      "The Institution of Engineers (India), Kolkata, approves three department student chapter at MITS.",
      "Madanapalle Institute of Technology & Science has received Institutional Membership from Institution of Engineers (India) on 18.02.2025.",
      "The Institution of Engineers (India) [IEI] MITS comprising of the following faculty is constituted for the Academic Year (2024-25) for implementing various initiatives. The Objective of the committee is to empower students with Technical Knowledge, Professional Skills & Industry Exposure, fostering innovation, collaboration, and career growth. The members of this cell will work to provide a platform for students to enhance their engineering expertise, leadership capabilities and industry readiness through learning and innovation."
    ],
    "members": [
      {
        "sno": "1",
        "name": "Department of Mechanical Engineering",
        "designation": "517325/MITS/MC",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "2",
        "name": "Department of Electrical & Electronics Engineering",
        "designation": "517325/MITS/EE",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "3",
        "name": "Department of Electronics & Communication Engineering",
        "designation": "517325/MITS/EC",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "4",
        "name": "Department of Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
        "designation": "517325/MITS/AM",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "5",
        "name": "Department of Computer Science & Engineering",
        "designation": "517325/MITS/CS",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "6",
        "name": "Department of Computer Science and Engineering (Data Science)",
        "designation": "517325/MITS/DS",
        "position": "Member",
        "email": ""
      },
      {
        "sno": "1",
        "name": "Dr. C. Yuvaraj",
        "designation": "Vice Chancellor (I/c)",
        "position": "Chairman",
        "email": "vicechancellor@mits.ac.in"
      },
      {
        "sno": "2",
        "name": "Dr. P. Ramanathan",
        "designation": "Principal",
        "position": "Member",
        "email": "drramanathanp@mits.ac.in"
      },
      {
        "sno": "3",
        "name": "Dr. S. Baskaran",
        "designation": "Assoc. Professor & Head, ME",
        "position": "Member",
        "email": "mehod@mits.ac.in"
      },
      {
        "sno": "4",
        "name": "Dr. A. V. Pavan Kumar",
        "designation": "Professor & Head, EEE",
        "position": "Member",
        "email": "pavankumarav@mits.ac.in"
      },
      {
        "sno": "5",
        "name": "Dr. S. Rajasekaran",
        "designation": "Professor & Head, ECE",
        "position": "Member",
        "email": "hod_ece@mits.ac.in"
      },
      {
        "sno": "6",
        "name": "Dr. S. Padma",
        "designation": "Assoc. Professor & Head, CSE (AI and ML)",
        "position": "Member",
        "email": "drpadmas@mits.ac.in"
      },
      {
        "sno": "7",
        "name": "Ms. Revathi K.",
        "designation": "Assistant Professor, EEE",
        "position": "Co-Coordinator",
        "email": "revathik@mits.ac.in"
      },
      {
        "sno": "8",
        "name": "Dr. C. Kumar",
        "designation": "Assistant Professor, EEE",
        "position": "Coordinator",
        "email": "ckumar@mits.ac.in"
      }
    ],
    "documents": [
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/assoc/Faculty Members IEI.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/assoc/IEI Committee Office Order 2025.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/assoc/Chapter Certificate-ME.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.i88n/assets/pdf/assoc/Chapter Certificate-EEE.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/assoc/Chapter Certificate-ECE.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/assoc/Chapter Certificate CSE.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/assoc/Chapter Certificate CSE (AI&ML).pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/assoc/Chapter Certificate DS.pdf"
      },
      {
        "title": "Document Link",
        "href": "https://mits.ac.in/assets/pdf/assoc/The Institution Engineers (IEI) certificate.pdf"
      },
      {
        "title": "An Industry Insight on “Energy Conservation – Watt You Save Matters!” was organised by Department of Electrical and Electronics Engineering In Association with IEI Students’ Chapter and IIIC on 03rd February 2026.",
        "href": "https://mits.ac.in/assets/pdf/eee/Report%20on%20Industry%20Insight%20on%20Energy%20Conseravtion%20-%20Watt%20You%20Save%20Matters.pdf"
      },
      {
        "title": "A One week training program on “ANSYS & Space Claim” was organized by Department of Mechanical Engineering In association with IEI Student Chapter from 13.10.2025 to 18.10.2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/ANSYS & Space Claim - Event Report_IEI_ME_13.10.2025-18.10.2025-min.pdf"
      },
      {
        "title": "A One Day Workshop on “Career Development in Mechanical Engineering through Computational Analysis” was organized by Department of Mechanical Engineering In association with IEI Student Chapter on 12.09.2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/Career Development in Mechanical Engineering through Computational Analysis Event Report_IEI_ME_12.09.2025-min.pdf"
      },
      {
        "title": "The Poster Presentation on Cutting-Edge Technologies was organized by the Department of Electronics and Communication Engineering in association with the IEI (ECE) Student’s Forum, at MITS on 29 December 2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/Cutting-Edge Technologies  - Event Report_IEI_ECE_ 29-12-2025-min.pdf"
      },
      {
        "title": "A Hands on Workshop on \"IC Engine Dismantling & Assembly\" was organized by Department of Mechanical Engineering In association with Institution of Engineers-INDIA Student Chapter- Mechanical Engineering on 08-10-2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/IC Engine Dismantling & Assembly Event Report_IEI_ME_08.10.2025-min.pdf"
      },
      {
        "title": "A Seminar on “Integrating VLSI with Industry 5.0: A New Era of Smart Manufacturing” was organized by Department of Electronics & Communication Engineering In Association with MITS IEI Student’s Forum 19.09.2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/Integrating VLSI with Industry 5.0 A New Era of Smart Manufacturing Event Report_IEI_ECE_19.09.2025-min.pdf"
      },
      {
        "title": "The Department of CSE (AI and ML), in association with the Institute of Engineers (India) – IEI Student Chapter, MITS, organized a one-day seminar on “Machine Learning Applications in Geographic Information Systems (GIS)” on 05-11-2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/Machine Learning Applications in Geographic Information Systems  Event Report_IEI_AIML_05.11.2025-min.pdf"
      },
      {
        "title": "A One-Day Hands-on Training Program on “POWER BI” was organized by Department of Electrical and Electronics Engineering In association with MITS - IE (I) Students’ Chapter on 03/11/2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/POWER BI Event Report_IEI_EEE_03.11.2025-min.pdf"
      },
      {
        "title": "A Hands-on workshop on “Understanding Prompt Engineering and Today’s AI Tools” was organized by Department of Electronics & Communication Engineering In Association with MITS IEI Student’s Forum 11.11.2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/Understanding Prompt Engineering and Today’s AI Tools Event Report_IEI_ECE_11.11.2025-min.pdf"
      },
      {
        "title": "Download Brochure",
        "href": "https://mits.ac.in/public/uploads/static-pdf/MITS Deemed to be University Brochure 2026.pdf"
      }
    ],
    "contacts": [
      {
        "name": "Dr. C. Kumar",
        "designation": "Coordinator - IEI",
        "email": "",
        "phone": "Phone :\n+91-8571-280255",
        "address": "Madanapalle Institute of Technology & Science"
      }
    ],
    "id": "iei",
    "url": "https://mits.ac.in/iei",
    "events": [
      {
        "title": "A Guest Lecture on “EEE in the 21st Century: Career Paths & Emerging Trends” was organised by Department of Electrical and Electronics Engineering In association with The Institution of Engineers (India) [IEI] on 09.05.2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/EEE in the 21st Century  Career Paths & Emerging Trends - Event Report _IEI_EEE-09.05.2025-min.pdf"
      },
      {
        "title": "A Guest Lecture on “Emerging Trends and Skill Sets in Core Electronics Careers” was organized by Department of Electronics & Communication Engineering In Association with MITS IEI Student’s Forum 15.11.2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/Emerging Trends and Skill Sets in Core Electronics Careers Event Report_IEI_ECE_15-11-2025-min.pdf"
      },
      {
        "title": "A Guest Lecture on \"Sustainable Innovation through Collaborative DevOps Culture and Practices\" was organized by Department of CSE-Data Science in association with Institution of Engineers(India) on 15.11.2025",
        "href": "https://mits.ac.in/assets/pdf/assoc/Sustainable Innovation through Collaborative DevOps Culture and Practices - Event Report_IEI_CSE DS_15.11.2025-min.pdf"
      }
    ]
  }
};

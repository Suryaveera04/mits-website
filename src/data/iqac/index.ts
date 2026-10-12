// IQAC Portal data — sourced from https://mits.ac.in/newiqac1
// Automatically extracted and compiled with 100% data integrity.

export type Doc = { title: string; url: string; type?: "pdf" | "link" | "video" | "doc" | "xlsx" | "zip" };
export type YearGroup = { year: string; docs: Doc[] };
export type IqacEvent = { title: string; date: string; url?: string };

// ---------------- ABOUT ----------------
export const about = {
  intro: [
  "In pursuance of its Action Plan for performance evaluation, assessment & accreditation & quality up-gradation of institutions of higher education, NAAC proposes that every accredited institution should establish an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. Since quality enhancement is a continuous process, the IQAC will become a part of the institution's system & work towards realisation of the goals of quality enhancement & sustenance.",
  "The guidelines within the following pages will direct and support Madanapalle Institute of Technology & Science (MITS) in establishing and operating the Internal Quality Assurance Cell (IQAC). The IQAC's role is the initial phase in internalizing and institutionalizing quality enhancement initiatives at MITS. Its success hinges on its ability to foster a sense of belonging and active involvement among all the institution's members.",
  "It won't function as another hierarchical structure or a mere record-keeping exercise; instead, it will serve as a facilitating and participatory voluntary entity within MITS. It possesses the potential to serve as a catalyst for enhancing quality by implementing planned interventionist strategies to address deficiencies and elevate quality, similar to the concept of 'Quality Circles' in industries."
],
  vision: "To make quality the defining element of higher education in India through a combination of self and external quality evaluation, promotion, and sustenance initiatives, while simultaneously striving to become a globally recognized research and academic institution contributing to the technological and socio-economic development of the nation.",
  mission: [
  "Conducting regular assessments and accreditation of higher education institutions, their units, academic programs, and projects.",
  "Fostering an academic atmosphere that enhances the quality of teaching, learning, and research in higher education institutions.",
  "Promoting self-evaluation, accountability, autonomy, and innovation in higher education.",
  "Engaging in research studies, consultancy, and training programs related to quality assurance.",
  "Collaborating with various stakeholders in the field of higher education to ensure the evaluation, promotion, and sustainability of quality standards."
]
};

// ---------------- OBJECTIVES & STRATEGIES ----------------
export const objectives = [
  "To develop a quality system for conscious, consistent and catalytic programmed action to improve the academic and administrative performance of the Institution.",
  "To promote measures for institutional functioning towards quality enhancement through internationalization of quality culture and institutionalization of best practices."
];

export const strategies = [
  "Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks.",
  "The relevance and quality of academic and research programmes.",
  "Equitable access to and affordability of academic programmes for various sections of society.",
  "Optimization and integration of modern methods of teaching and learning.",
  "The credibility of evaluation procedures.",
  "Ensuring the adequacy, maintenance and functioning of the support structure and services.",
  "Research sharing and networking with other institutions in India and abroad."
];

// ---------------- FUNCTIONS & BENEFITS ----------------
export const functions = [
  "Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution.",
  "Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation.",
  "Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes.",
  "Dissemination of information on various quality parameters of higher education.",
  "Organization of inter and intra institutional workshops, seminars on quality-related themes and promotion of quality circles.",
  "Documentation of the various programmes/activities leading to quality improvement.",
  "Acting as a nodal agency of the Institution for coordinating quality-related activities.",
  "Development and maintenance of institutional database through MIS for maintaining/enhancing institutional quality.",
  "Development of Quality Culture in the institution.",
  "Preparation of the Annual Quality Assurance Report (AQAR) for submission to NAAC.",
  "Bi-annual development of Quality Radars (QRs) and Ranking of Integral Units of institution based on the AQAR.",
  "Interaction with SQACs in the pre and post accreditation quality assessment, sustenance and enhancement endeavours."
];

export const benefits = [
  "Ensure heightened level of clarity and focus in institutional functioning towards quality enhancement.",
  "Ensure internalization of the quality culture.",
  "Ensure enhancement and coordination among various activities of the institution and institutionalize all good practices.",
  "Provide a sound basis for decision-making to improve institutional functioning.",
  "Act as a dynamic system for quality changes in the Institution.",
  "Build an organised methodology of documentation and internal communication."
];

export const qualityFrameworkImg = "https://mits.ac.in/assets/images/MITS IQAC Quality Framework.png";
export const organogramPdf = "https://mits.ac.in/assets/pdf/iqac/IQAC Organogram.pdf";

export const followUp = [
  "The AQAR shall be approved by the statutory bodies of the institution for the follow up action for necessary quality enhancement measures.",
  "The institution shall regularly submit its AQARs to NAAC.",
  "The Institution shall submit AQARs and / or Quality Radars (QRs) and follow up reports of AQARs to the UGC as and when called for.",
  "The IQAC must create its exclusive window on its institutional website, to regularly report on its activities as well as for hosting the AQAR."
];

// ---------------- COMPOSITION ----------------
export const compositionIntroText = "IQAC may be constituted in every institution under the Chairmanship of the Head of the institution with heads of important academic and administrative units and a few teachers and a few distinguished educationists and representatives of local management and stakeholders";

export const compositionMitsText = "Cognizant of MITS College's commitment to quality assurance, the IQAC has been seamlessly integrated as a core element, focused on instituting robust processes that maintain exceptional standards across various critical institutional activities. The composition of the IQAC has been meticulously devised, taking into consideration the counsel and recommendations of accreditation bodies and committees. Here, we present the composition of the IQAC at MITS College:";

export const compositionNotes = [
  "Chairperson: Head of the Institution",
  "A few senior administrative officers",
  "Three to eight teachers",
  "One member from the Management",
  "One/two nominees from local society, Students and Alumni",
  "One/two nominees from Employers /Industrialists/stakeholders",
  "One of the senior teachers as the coordinator/Director of the IQAC"
];

// ---------------- AQAR SUBMISSION ----------------
export const aqarSubmissionParagraphs = [
  "As per the Guidelines all the HEIS need to submit AQAR online. Submitting AQAR by e-mail/hard copy is not be accepted w.e.f 1st January 2019.",
  "HEIs which have not yet registered to online portal of NAAC need to follow the registration process and requested to register immediately. This is applicable to all HEIs which have been accredited by NAAC. Those who not registered to online portal are not able to submit the AQAR. (For further details of registration process, kindly refer NAAC Website – Apply online page).",
  "After registration the AQAR will be available in HEI portal, under the Manage AQAR menu.",
  "The academic year displayed in the portal under the Manage AQAR menu for filling AQAR does not consider the reports submitted earlier by email.",
  "After submission of AQAR, it will be verified by NAAC and clarification may be asked regarding the data/information provided in the AQAR.",
  "During clarification period the HEIs can edit their AQAR based on the clarification requested or may provide the reason for 0/Nil data for any of the metrics, in the response box and re-submit the AQAR. The last date for submission of response will be 15 days from date of clarification requested.",
  "After re-verification of the response submitted by HEI the AQAR will be accepted.",
  "For each cycle of accreditation with validity period of 5 years, HEIs have to submit only 4 AQARs. In case of extended validity by NAAC for HEIs with ‘A’ grade in three consecutive cycles, wherein the validity period is increased to 7, the HEIs have to submit 6 AQARs."
];

export const aqarTimelineParagraphs = [
  "All accredited HEIs have to submit AQAR regularly to NAAC. On completion of the Academic year, HEIs have to submit the AQAR on or before 31st December of every year, irrespective of their Date of Accreditation.",
  "If an HEI is accredited on 16 Sept. 2019, the HEI need to submit the AQAR of 2018-2019 before December 31, 2019. It means, previous Completed Academic Year (2018-2019) AQAR needs to be submitted.",
  "If an HEI is accredited on 12 March 2020, the HEI need to submit the AQAR of 2019-2020 before December 31, 2020. It means, previous Completed Academic Year (2019-2020) AQAR needs to be submitted."
];

export const aqarReportsYearly: Doc[] = [
  { title: "AQAR 2023-24 Report", url: "https://mits.ac.in/assets/pdf/iqac/AQAR 2023-24.pdf", type: "pdf" },
  { title: "AQAR 2022-23 Report", url: "https://mits.ac.in/public/uploads/naac/AQAR 2022-23.pdf", type: "pdf" },
  { title: "AQAR 2021-22 Report", url: "https://mits.ac.in/public/uploads/naac/AQAR%202021-2022.pdf", type: "pdf" },
  { title: "AQAR 2020-21 Report", url: "https://mits.ac.in/public/uploads/naac/AQAR%202020-2021.pdf", type: "pdf" },
  { title: "AQAR 2019-20 Report", url: "https://mits.ac.in/public/uploads/naac/AQAR2019-20.pdf", type: "pdf" },
  { title: "AQAR 2018-19 Report", url: "https://mits.ac.in/public/uploads/naac/AQAR2018-19.pdf", type: "pdf" },
  { title: "AQAR 2017-18 Report", url: "https://mits.ac.in/public/uploads/naac/AQAR2017-18.pdf", type: "pdf" }
];

export const compositionYearly: Doc[] = [
  {
    title: "Composition of Committee Members for Year 2026-2027",
    url: "https://mits.ac.in/assets/pdf/iqac/Composition of committee members for Year 2026-2027.pdf",
    type: "pdf"
  },
  {
    title: "Composition of Committee Members for Year 2025-2026",
    url: "https://mits.ac.in/assets/pdf/iqac/Composition of committee members for Year 2025-2026.pdf",
    type: "pdf"
  },

  {
    "title": "Composition of committee members for Year 2024-2025",
    "url": "https://mits.ac.in/assets/pdf/iqac/Composition of committee members for Year 2024-2025.pdf",
    "type": "pdf"
  },
  {
    "title": "Composition of committee members for Year 2023-2024",
    "url": "https://mits.ac.in/assets/pdf/iqac/Composition%20of%20committee%20members%20for%20Year%202023-2024.pdf",
    "type": "pdf"
  },
  {
    "title": "Composition of committee members for Year 2022-2023",
    "url": "https://mits.ac.in/assets/pdf/iqac/Composition%20of%20committee%20members%20for%20Year%202022-2023.pdf",
    "type": "pdf"
  },
  {
    "title": "Composition of committee members for Year 2021-2022",
    "url": "https://mits.ac.in/assets/pdf/iqac/Composition%20of%20committee%20members%20for%20Year%202021-2022.pdf",
    "type": "pdf"
  },
  {
    "title": "Composition of committee members for Year 2020-2021",
    "url": "https://mits.ac.in/assets/pdf/iqac/Composition%20of%20committee%20members%20for%20Year%202020-2021.pdf",
    "type": "pdf"
  },
  {
    "title": "Composition of committee members for Year 2019-2020",
    "url": "https://mits.ac.in/assets/pdf/iqac/Composition%20of%20committee%20members%20for%20Year%202019-2020.pdf",
    "type": "pdf"
  },
  {
    "title": "Composition of committee members for Year 2018-2019",
    "url": "https://mits.ac.in/assets/pdf/iqac/Composition%20of%20committee%20members%20for%20Year%202018-2019.pdf",
    "type": "pdf"
  },
  {
    "title": "Composition of committee members for Year 2015-2016",
    "url": "https://mits.ac.in/assets/pdf/iqac/Composition%20of%20committee%20members%20for%20Year%202015-2016.pdf",
    "type": "pdf"
  }
];

// ---------------- ORGANOGRAM ----------------
export const organogram = {
  imageUrl: "https://mits.ac.in/assets/pdf/iqac/IQAC Organogram.jpg",
  note: "IQAC Organogram — MITS institutional quality governance structure. Chairperson (Vice-Chancellor) at apex, followed by IQAC Director, IQAC Coordinator, Criterion Coordinators, Department Coordinators, and functional cells."
};

// ---------------- NAAC REFORMS 2024 ----------------
export const naacReforms2024: Doc[] = [
  {
    title: "Department-wise DQAC Coordinators List 2026-27",
    url: "https://mits.ac.in/assets/pdf/iqac/Departmentwise DQAC Coordinators List 2026-27.pdf",
    type: "pdf"
  },
  {
    title: "Department-wise NAAC Coordinators 2026-27",
    url: "https://mits.ac.in/assets/pdf/iqac/Department-wise NAAC Coordinators 2026-27.pdf",
    type: "pdf"
  },
  {
    title: "Institutional Cells & Committee Incharges Details 14th August 2026",
    url: "https://mits.ac.in/assets/pdf/iqac/Cells Coordinators Details 14th August 2026.pdf",
    type: "pdf"
  },
  {
    title: "NAAC_Survey (Draft) 21-04-2026 - Dr. K. Sathesh",
    url: "https://mits.ac.in/assets/pdf/iqac/NAAC_Survey 21-04-2026-Dr.K.Sathesh.pdf",
    type: "pdf"
  },
  {
    title: "Extended Profile Mapping Between SSR and AQAR (Autonomous College-Manual)",
    url: "https://mits.ac.in/assets/pdf/iqac/Extended Profile Mapping Between SSR and AQAR(Autonomous College-Manual).pdf",
    type: "pdf"
  },
  {
    title: "NAAC RAF SSR NEW Format (9-8-2023) (Autonomous College)",
    url: "https://mits.ac.in/assets/pdf/iqac/NAAC RAF SSR NEW Format (9-8-2023)(Autonomous College).pdf",
    type: "pdf"
  },
  {
    title: "Criterion I – Curricular Aspects (SSR-AQAR Mapping)",
    url: "https://mits.ac.in/assets/pdf/iqac/Criterion_1_Curricular_Aspects_SSR_AQAR_Mapping_Autonomous_College-1.pdf",
    type: "pdf"
  },
  {
    title: "Criterion II – Teaching-Learning and Evaluation (SSR-AQAR Mapping)",
    url: "https://mits.ac.in/assets/pdf/iqac/Criterion II – Teaching-Learning and Evaluation_SSR_AQAR_Mapping_Autonomous_College-1.pdf",
    type: "pdf"
  },
  {
    title: "Criterion III – Research, Innovations and Extension (SSR-AQAR Mapping)",
    url: "https://mits.ac.in/assets/pdf/iqac/Criterion III – – Research, Innovations and Extension _SSR_AQAR_Mapping_Autonomous_College-2-1.pdf",
    type: "pdf"
  },
  {
    title: "Criterion IV – Infrastructure and Learning Resources (SSR-AQAR Mapping)",
    url: "https://mits.ac.in/assets/pdf/iqac/Criterion IV – Infrastructure and Learning Resources _SSR_AQAR_Mapping_Autonomous_College.pdf",
    type: "pdf"
  },
  {
    title: "Criterion V – Student Support and Progression (SSR-AQAR Mapping)",
    url: "https://mits.ac.in/assets/pdf/iqac/Criterion V – Student Support and Progression_SSR_AQAR_Mapping_Autonomous_College.pdf",
    type: "pdf"
  },
  {
    title: "Criterion VI – Governance, Leadership and Management (SSR-AQAR Mapping)",
    url: "https://mits.ac.in/assets/pdf/iqac/Criterion VI – Governance.pdf",
    type: "pdf"
  },
  {
    title: "Criterion VII – Institutional Values and Best Practices (SSR-AQAR Mapping)",
    url: "https://mits.ac.in/assets/pdf/iqac/Criterion VII –Institutional Values and Best Practices _SSR_AQAR_Mapping_Autonomous_College.pdf",
    type: "pdf"
  },
  {
    title: "NBA-NAAC Comparison",
    url: "https://mits.ac.in/assets/pdf/iqac/NBA-NAAC Comparsion.xlsx",
    type: "xlsx"
  },
  {
    title: "MITS NAAC AQAR SSR Mapping Supporting Document Manual Criteria I-II-III",
    url: "https://mits.ac.in/assets/pdf/iqac/MITS_NAAC_AQAR-SSR Mapping _Supporting_Document_Manual_Criteria-I_II_III.docx",
    type: "doc"
  },
  {
    title: "MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion IV",
    url: "https://mits.ac.in/assets/pdf/iqac/MITS_NAAC_AQAR-SSR Mapping _Supporting_Document_Manual_Criterion-IV.docx",
    type: "doc"
  },
  {
    title: "MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion V",
    url: "https://mits.ac.in/assets/pdf/iqac/MITS_NAAC_AQAR-SSR Mapping _Supporting_Document_Manual_Criterion-V.docx",
    type: "doc"
  },
  {
    title: "MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion VI",
    url: "https://mits.ac.in/assets/pdf/iqac/MITS_NAAC_AQAR_SSR Mapping _Supporting_Document_Manual_Criterion-VI.docx",
    type: "doc"
  },
  {
    title: "MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion VII",
    url: "https://mits.ac.in/assets/pdf/iqac/MITS_NAAC_AQAR_SSR Mapping _Supporting_Document_Manual_Criterion-VII.docx",
    type: "doc"
  },
  {
    "title": "Institution-wise NAAC Criterion Coordinators 2026",
    "url": "https://mits.ac.in/assets/pdf/iqac/Institution-wise NAAC Criterion Coordinators_2026.pdf",
    "type": "pdf"
  },
  {
    "title": "Department-wise NAAC Coordinators",
    "url": "https://mits.ac.in/assets/pdf/iqac/Department-wise NAAC Coordinators.pdf",
    "type": "pdf"
  },
  {
    "title": "Institutional Cells & Committee Incharges Details",
    "url": "https://mits.ac.in/assets/pdf/iqac/Institutional Cells & Committee Incharges Details.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC-Reforms in Accreditation",
    "url": "http://naac.gov.in/images/docs/NAAC-Major_Reforms_in_Accreditation-Press_Release-27January_2024.pdf",
    "type": "pdf"
  },
  {
    "title": "Dr Radhakrishnan Committee Report",
    "url": "http://naac.gov.in/images/docs/DrRadhakrishnanCommittee-FinalReport.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC Reforms 2024: Dt.29th June 2024",
    "url": "http://naac.gov.in/images/docs/announcement/NAAC_Reforms_2024-Announcements-29thJune2024_240629_143341.pdf",
    "type": "pdf"
  },
  {
    "title": "SoP for Colleges and Universities and SoP for Assessors: Dt.07th April 2025",
    "url": "http://naac.gov.in/images/docs/announcement/NAAC_Press_Release_10022025.pdf",
    "type": "pdf"
  },
  {
    "title": "Validity Extension Notification: Dt.5th December 2025",
    "url": "http://naac.gov.in/images/docs/notification/validity_extension_notification_5_12_25.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS Responsibilities Matrix for NAAC 2024 Reforms (MBGL)",
    "url": "https://mits.ac.in/assets/pdf/iqac/New Reforms Correlation and MIts Responsibilities.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC Accreditation Preparedness",
    "url": "https://mits.ac.in/assets/pdf/iqac/NAAC Accreditation Preparedness 21-04-2026- Dr.K.Sathesh.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC_Survey (Draft)",
    "url": "https://mits.ac.in/assets/pdf/iqac/NAAC_Survey 21-04-2026- Dr.K.Sathesh.pdf",
    "type": "pdf"
  },
  {
    "title": "Department-wise Stakeholder Feedback Coordinators",
    "url": "https://mits.ac.in/assets/pdf/iqac/Department-wise Stakeholder Feedback Coordinators.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC Reforms 2024 Pilot Survey for Binary Accreditation Framework (University) (Draft Copy) Data Template",
    "url": "https://mits.ac.in/assets/pdf/iqac/NAAC Reforms 2024 Pilot Survey for Binary Accreditation Framework (University) (Draft Copy)_Data_Template.docx",
    "type": "doc"
  },
  {
    "title": "NAAC Survey– QnM & QlM Data Collection Manual (Draft Copy)",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS NAAC Survey– QnM & QlM Data Collection Manual (Draft Copy).docx",
    "type": "doc"
  },
  {
    "title": "NAAC Accreditation Preparedness Supporting Document Manual (Draft Copy)",
    "url": "https://mits.ac.in/assets/pdf/iqac/NAAC Accreditation Preparedness _Supporting_Document_Manual (Draft Copy).docx",
    "type": "doc"
  },
  {
    "title": "NAAC Supporting Document Manual Based on Dr. K. Radhakrishnan Report, November 2023 (Draft Copy)",
    "url": "https://mits.ac.in/assets/pdf/iqac/NAAC Supporting Document Manual Based on Dr. K. Radhakrishnan Report, November 2023 (Draft Copy).docx",
    "type": "doc"
  }
];

// ---------------- MILESTONES ----------------
export const milestones = [
  { year: "2025", text: "Conferred Deemed to be University status by Ministry of Education, Govt. of India under Section 3 of UGC Act, 1956." },
  { year: "2024", text: "NAAC A+ Grade reaccreditation & NBA Accreditation extension for B.Tech programs till 2027." },
  { year: "2023", text: "ISO 21001:2018 EOMS Certification & Launch of IQAC Monthly Quality Review / IQAC Hours." },
  { year: "2022", text: "NIRF Innovation Ranking & NBA Accreditation for MBA and MCA postgraduate programs." },
  { year: "2021", text: "NAAC 'A+' Grade Accreditation in Cycle 1 with top score & establishment of Advanced Research Centers." },
  { year: "2020", text: "Implementation of NEP 2020 Guidelines & Digital LMS Learning Transformation." },
  { year: "2019", text: "NBA Accreditation for 5 UG Engineering Programs & Golden Jubilee Research Grant Awards." },
  { year: "2018", text: "UGC Autonomous Status extension and SIRO recognition by DSIR, Ministry of Science & Technology." },
  { year: "2017", text: "Establishment of Incubation Center & Center of Excellence in Microelectronics." },
  { year: "2016", text: "UGC 2(f) & 12(B) Recognition & AICTE-CII Gold Category Ranking." },
  { year: "2015", text: "Conferred Autonomous Status by UGC & JNTUA Ananthapuramu." },
  { year: "2014", text: "NBA Accreditation for major B.Tech branches (CSE, ECE, EEE, ME)." },
  { year: "2012", text: "Establishment of Industry-Institute Interaction Cell & R&D Center." },
  { year: "2008", text: "Establishment of Internal Quality Assurance Cell (IQAC) at MITS." },
  { year: "1998", text: "Establishment of Madanapalle Institute of Technology & Science." }
];

// ---------------- CERTIFICATIONS ----------------
export const certifications: Doc[] = [
  {
    title: "AICTE Approval for (2026-2027)",
    url: "https://mits.ac.in/assets/pdf/admin/EOA%20Report%202026-2027.PDF",
    type: "pdf"
  },
  {
    title: "EOA Corrigendum 2025-26",
    url: "https://mits.ac.in/public/uploads/affiliations/EOA-Corrigendum%202025-26_1-44642479593%20(1).pdf",
    type: "pdf"
  },
  {
    title: "Gazette Notification (MITS Deemed to be University)",
    url: "https://mits.ac.in/assets/pdf/admin/Gazette%20Notification%20No.%209-1-2025-U.3A%20dated%2015.07.2025-1.pdf",
    type: "pdf"
  },
  {
    "title": "UGC - Deemed to be University approval",
    "url": "https://mits.ac.in/assets/pdf/admin/Gazette%20Notification%20No.%209-1-2025-U.3A%20dated%2015.07.2025-1.pdf",
    "type": "pdf"
  },
  {
    "title": "AICTE Approval for (2025-2026)",
    "url": "https://mits.ac.in/public/uploads/affiliations/EOA-Corrigendum%202025-26_1-44642479593%20(1).pdf",
    "type": "pdf"
  },
  {
    "title": "AICTE Approval for (2024-2025)",
    "url": "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202024-2025.PDF",
    "type": "pdf"
  },
  {
    "title": "AICTE Approval for (2023-2024)",
    "url": "https://mits.ac.in/public/uploads/affiliations/EOA-Report-2023-2024.PDF",
    "type": "pdf"
  },
  {
    "title": "NAAC 1st Cycle (Valid from 2021 to 2026)",
    "url": "https://mits.ac.in/public/uploads/naac/9b55cb6cdd40bf4ca955cdd3a5383031.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA Accreditation for PG Programme (MBA) (2025 - 2028)",
    "url": "https://mits.ac.in/public/uploads/affiliations/MBA%20NBA%20Cetificate-2025.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA Accreditation for PG Programme (MCA) (2025 - 2028)",
    "url": "https://mits.ac.in/public/uploads/affiliations/MCA%20NBA%20Cetificate-2025.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA Accreditation for UG Programmes (2025 - 2028)",
    "url": "https://mits.ac.in/public/uploads/affiliations/Madanapalle%20Institute%20of%20Technology%20_%20Science,%20Andhra%20Pradesh19_6_2025_12_45_57.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA Accreditation for UG Programme (CST) (2024 - 2027)",
    "url": "https://mits.ac.in/public/uploads/affiliations/NBA%20-%20CST-%20confirmation%20-till%2030.6.2027.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA Accreditation for PG Programme (MCA) (2024 - 2025)",
    "url": "https://mits.ac.in/public/uploads/affiliations/NBA-MCA%20Extention%20till%202025%20June.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA Accreditation for PG Programme (MBA) (2022 - 2025)",
    "url": "https://mits.ac.in/public/uploads/affiliations/NBA-MBA-2022-25.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA Accreditation for UG Programmes (2022 - 2025)",
    "url": "https://mits.ac.in/public/uploads/affiliations/b6c8a081779294cbbd70a1180dc7746f.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA Accreditation for PG Programme (MCA) (2022 - 2024)",
    "url": "https://mits.ac.in/public/uploads/affiliations/NBA-MCA-2022-24.pdf",
    "type": "pdf"
  },
  {
    "title": "UGC-Autonomous 2025-2026 to 2034-2035",
    "url": "https://mits.ac.in/assets/pdf/admin/UGC-2025-35-Madanapalle%20Institute%20of%20Technology%20Science.pdf",
    "type": "pdf"
  },
  {
    "title": "UGC-Autonomous 2019-2020 to 2024-2025",
    "url": "https://mits.ac.in/assets/pdf/admin/UGC-Autonomous%202020-25.pdf",
    "type": "pdf"
  },
  {
    "title": "UGC-Autonomous 2014-2015 to 2019-2020",
    "url": "https://mits.ac.in/assets/pdf/admin/UGC-Autonomous%202014-20.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS ranked in the band 201-300 – NIRF 2025",
    "url": "https://mits.ac.in/public/uploads/scholarship/MITS_Engg_ranking-2025.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS ranked in the band 201-300 – NIRF 2024",
    "url": "https://mits.ac.in/public/uploads/scholarship/MITS_Engg_ranking-2024.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS ranked in the band 251-300 – NIRF 2022",
    "url": "https://mits.ac.in/public/uploads/scholarship/MITS-RankBand-251-300.pdf",
    "type": "pdf"
  },
  {
    "title": "ISO 9001:2015 Quality Management System",
    "url": "https://mits.ac.in/assets/pdf/admin/ISO%20Certificarte.pdf",
    "type": "pdf"
  },
  {
    "title": "ISO 21001:2018 Educational Organizations Management System",
    "url": "https://mits.ac.in/assets/pdf/admin/ISO-210012018-cerificate.pdf",
    "type": "pdf"
  }
];

// ---------------- AICTE MANDATE ----------------
export const aicteMandate: Doc[] = [
  {
    "title": "AICTE Quality Initiatives in Technical Education",
    "url": "https://www.aicte-india.org/sites/default/files/AICTE%20QUALITY%20INITIATIVES%20IN%20TECHNICAL%20EDUCATION.pdf",
    "type": "pdf"
  },
  {
    "title": "Circular for Implementation of AICTE Student Learning Assessment Project (PARAKH) in AICTE Approved Institution",
    "url": "https://aslapapi.aicte-india.org/api/downloadAnnouncementHomepage?id=MTA=",
    "type": "link"
  },
  {
    "title": "AICTE-Student Learning Assessment (PARAKH)",
    "url": "https://parakh.aicte-india.org/",
    "type": "link"
  },
  {
    "title": "AICTE- Anuvadini (AI Text & Voice Translation Tool)",
    "url": "https://anuvadini.aicte-india.org/",
    "type": "link"
  },
  {
    "title": "National Educational Alliance for Technology (NEAT) Portal",
    "url": "https://neat.aicte-india.org/",
    "type": "link"
  },
  {
    "title": "One Nation One Data (ONOD)",
    "url": "https://onod.aicte-india.org/",
    "type": "link"
  },
  {
    "title": "National Educational Technology Forum (NETF)",
    "url": "https://netf.aicte-india.org/about-netf.html",
    "type": "link"
  },
  {
    "title": "AICTE - Examination Reforms (Nov 2018)",
    "url": "https://mits.ac.in/assets/pdf/iqac/AICTE -ExaminationReforms (Nov 2018) (uploaded on 20231102).pdf",
    "type": "pdf"
  },
  {
    "title": "AICTE - Model Question Paper",
    "url": "https://mits.ac.in/assets/pdf/iqac/AICTE-Model Question Paper (uploaded on 20231102).pdf",
    "type": "pdf"
  },
  {
    "title": "AICTE - Workshop on Examination Reforms - Day 1",
    "url": "https://www.youtube.com/watch?v=8pkY6VnmQK8&feature=youtu.be",
    "type": "link"
  },
  {
    "title": "AICTE - Workshop on Examination Reforms - Day 2",
    "url": "https://www.youtube.com/watch?v=2l1OXd-VLrg&ab_channel=MediaAICTE",
    "type": "link"
  },
  {
    "title": "AICTE - Workshop on Examination Reforms - Day 3",
    "url": "https://www.youtube.com/watch?v=RezQsx6SpFM&ab_channel=MediaAICTE",
    "type": "link"
  },
  {
    "title": "Sensitization of AICTE - Student Learning Assessment Project (PARAKH)",
    "url": "https://youtu.be/59XVSVoKros",
    "type": "link"
  }
];
export const aicte360Feedback: Doc[] = [];

// ---------------- FEEDBACK ----------------
export const feedbackPolicy: Doc[] = [
  {
    "title": "MITS Stakeholder Feedback - Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS-Stakeholder Feedback-Policy.pdf",
    "type": "pdf"
  }
];
export const actionTakenReports: Doc[] = [
  {
    "title": "Stakeholder Feedback - Evidences for Action Taken Report 2022-23",
    "url": "https://mits.ac.in/assets/pdf/iqac/Evidence_on_ATR_2022-23.pdf",
    "type": "pdf"
  },
  {
    "title": "Stakeholder Feedback - Evidences for Action Taken Report 2021-22",
    "url": "https://mits.ac.in/assets/pdf/iqac/Evidence_on_ATR_2021-22.pdf",
    "type": "pdf"
  },
  {
    "title": "Action Taken Report 2024-25",
    "url": "https://mits.ac.in/assets/pdf/iqac/Action Taken Report 2024-25.pdf",
    "type": "pdf"
  },
  {
    "title": "Action Taken Report 2023-24",
    "url": "https://mits.ac.in/assets/pdf/iqac/Action Taken Report 2023-24.pdf",
    "type": "pdf"
  },
  {
    "title": "Action Taken Report 2022-23",
    "url": "https://mits.ac.in/assets/pdf/iqac/Action Taken Report 2022-23.pdf",
    "type": "pdf"
  },
  {
    "title": "Action Taken Report 2021-22",
    "url": "https://mits.ac.in/public/uploads/naac/ATR 2021-22.pdf",
    "type": "pdf"
  },
  {
    "title": "Action Taken Report 2020-21",
    "url": "https://mits.ac.in/public/uploads/naac/ATR 2020-21.pdf",
    "type": "pdf"
  },
  {
    "title": "Action Taken Report 2019-20",
    "url": "https://mits.ac.in/public/uploads/naac/ATR 2019-20.pdf",
    "type": "pdf"
  },
  {
    "title": "Action Taken Report 2018-19",
    "url": "https://mits.ac.in/public/uploads/naac/ATR 2018-19.pdf",
    "type": "pdf"
  },
  {
    "title": "Stakeholder Feedback - Evidences for Action Taken Report 2024-25",
    "url": "https://mits.ac.in/assets/pdf/iqac/CSE ATR 24-25.pdf",
    "type": "pdf"
  },
  {
    "title": "Stakeholder Feedback - Evidences for Action Taken Report 2023-24",
    "url": "https://mits.ac.in/assets/pdf/iqac/Evidence ATR 2023-24.pdf",
    "type": "pdf"
  },
  {
    "title": "Stakeholder Feedback - Evidences for Action Taken Report 2022-23",
    "url": "https://mits.ac.in/assets/pdf/iqac/Evidence_on_ATR_2022-23.pdf",
    "type": "pdf"
  },
  {
    "title": "Stakeholder Feedback - Evidences for Action Taken Report 2021-22",
    "url": "https://mits.ac.in/assets/pdf/iqac/Evidence_on_ATR_2021-22.pdf",
    "type": "pdf"
  }
];
export const atrEvidence: Doc[] = [
  {
    "title": "Stakeholder Feedback - Evidences for Action Taken Report 2022-23",
    "url": "https://mits.ac.in/assets/pdf/iqac/Evidence_on_ATR_2022-23.pdf",
    "type": "pdf"
  },
  {
    "title": "Stakeholder Feedback - Evidences for Action Taken Report 2021-22",
    "url": "https://mits.ac.in/assets/pdf/iqac/Evidence_on_ATR_2021-22.pdf",
    "type": "pdf"
  },
  {
    "title": "Stakeholder Feedback - Evidences for Action Taken Report 2024-25",
    "url": "https://mits.ac.in/assets/pdf/iqac/CSE ATR 24-25.pdf",
    "type": "pdf"
  },
  {
    "title": "Stakeholder Feedback - Evidences for Action Taken Report 2023-24",
    "url": "https://mits.ac.in/assets/pdf/iqac/Evidence ATR 2023-24.pdf",
    "type": "pdf"
  },
  {
    "title": "Stakeholder Feedback - Evidences for Action Taken Report 2022-23",
    "url": "https://mits.ac.in/assets/pdf/iqac/Evidence_on_ATR_2022-23.pdf",
    "type": "pdf"
  },
  {
    "title": "Stakeholder Feedback - Evidences for Action Taken Report 2021-22",
    "url": "https://mits.ac.in/assets/pdf/iqac/Evidence_on_ATR_2021-22.pdf",
    "type": "pdf"
  }
];
export const feedbackForms = [
  {
    "title": "Student Satisfaction Survey (SSS) on Teaching Learning Process",
    "url": "https://74.235.98.35/mits_fb_iqac_24/feedback_form.php",
    "type": "link"
  }
];

// ---------------- AAA ----------------
export const aaaOverview = {
  policy: "MITS is committed to maintaining academic excellence through a structured Quality assurance mechanism. Academic & Administrative Audit assesses, monitors and improves the quality of Teaching-Learning, Academic processes and the administrative system that supports quality delivery. The audit process is monitored through the Internal Quality Assurance Cell (IQAC).",
  academic: "Focuses on course file audit, teaching pedagogy evaluation, examination reforms, OBE implementation, laboratory logs, course coverage and student attendance monitoring.",
  administrative: "Focuses on administrative efficiency, file maintenance of functional cells & committees, library utilization, sports infrastructure, EOMS ISO 21001 compliance, and safety standards."
};

export const aaaPolicyDocs: Doc[] = [
  {
    "title": "Academic and Administrative Audit Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS%20IQAC%20Academic%20Audit%20Policy.pdf",
    "type": "pdf"
  }
];
export const externalAuditReports: Doc[] = [
  {
    "title": "External Audit Report 2023-24",
    "url": "https://mits.ac.in/assets/pdf/iqac/External Audit Report 2023-24.pdf",
    "type": "pdf"
  },
  {
    "title": "External Audit Report 2022-23",
    "url": "https://mits.ac.in/assets/pdf/iqac/External Audit Report 2022-23.pdf",
    "type": "pdf"
  },
  {
    "title": "External Audit Report 2021-22",
    "url": "https://mits.ac.in/assets/pdf/iqac/External Audit Report 2021-22.pdf",
    "type": "pdf"
  }
];
export const internalAuditReports: Doc[] = [
  {
    "title": "Internal Audit Report 2024-25",
    "url": "https://mits.ac.in/assets/pdf/iqac/Internal Audit Report 2024-25.pdf",
    "type": "pdf"
  },
  {
    "title": "Internal Audit Report 2023-24",
    "url": "https://mits.ac.in/assets/pdf/iqac/Internal Audit Report 2023-24.pdf",
    "type": "pdf"
  },
  {
    "title": "Internal Audit Report 2022-23",
    "url": "https://mits.ac.in/assets/pdf/iqac/Internal Audit Report 2022-23.pdf",
    "type": "pdf"
  },
  {
    "title": "Internal Audit Report 2021-22",
    "url": "https://mits.ac.in/assets/pdf/iqac/Internal Audit Report 2021-22.pdf",
    "type": "pdf"
  }
];
export const externalAuditATR: Doc[] = [
  {
    "title": "External Audit ATR 2023-24",
    "url": "https://mits.ac.in/assets/pdf/iqac/External Audit ATR 2023-24.pdf",
    "type": "pdf"
  },
  {
    "title": "External Audit ATR 2022-23",
    "url": "https://mits.ac.in/assets/pdf/iqac/External Audit ATR 2022-23.pdf",
    "type": "pdf"
  },
  {
    "title": "External Audit ATR 2021-22",
    "url": "https://mits.ac.in/assets/pdf/iqac/External Audit ATR 2021-22.pdf",
    "type": "pdf"
  }
];
export const internalAuditATR: Doc[] = [
  {
    "title": "Internal Action Taken Report 2024-25",
    "url": "https://mits.ac.in/assets/pdf/iqac/Action Taken Report 2024-25.pdf",
    "type": "pdf"
  },
  {
    "title": "Internal Action Taken Report 2023-24",
    "url": "https://mits.ac.in/assets/pdf/iqac/Internal Audit ATR 2023-24.pdf",
    "type": "pdf"
  },
  {
    "title": "Internal Action Taken Report 2022-23",
    "url": "https://mits.ac.in/assets/pdf/iqac/Internal Audit ATR 2022-23.pdf",
    "type": "pdf"
  },
  {
    "title": "Internal Action Taken Report 2021-22",
    "url": "https://mits.ac.in/assets/pdf/iqac/Internal Audit ATR 2021-22.pdf",
    "type": "pdf"
  }
];
export const aaaReferences: Doc[] = [
  {
    "title": "NAAC (1st Cycle) - Self Study Report (SSR)",
    "url": "https://mits.ac.in/assets/pdf/iqac/NAAC (1st Cycle) - Self Study Report (SSR).pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC Autonomous College Benchmarks December 2022",
    "url": "https://mits.ac.in/assets/pdf/iqac/NAAC Autonomous_College Benchmarks December 2022.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC Autonomous College SOP December 2022",
    "url": "https://mits.ac.in/assets/pdf/iqac/NAAC Autonomous_College_SOP December 2022.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC Autonomous College Manual 2023",
    "url": "https://mits.ac.in/assets/pdf/iqac/NAAC Autonomous_College Manual_29-03-2023_Updated_9-8-2023.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC-Reforms in Accreditation",
    "url": "http://naac.gov.in/images/docs/NAAC-Major_Reforms_in_Accreditation-Press_Release-27January_2024.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC- Quality Management System in Higher Education",
    "url": "http://naac.gov.in/images/docs/Publication/books/QMS_IN_HE_1772022.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC (Best Practices) - Internal Quality Assurance Mechanism: Good Practices of Partner Institutions from Europe and India",
    "url": "http://naac.gov.in/images/docs/Publication/EQUAM-BI-NAAC-Project-Document.pdf",
    "type": "pdf"
  },
  {
    "title": "Comparison of NAAC Criteria and ISO 21001:2018 EOMS Clauses",
    "url": "https://mits.ac.in/assets/pdf/iqac/Comparison of NAAC Criteria and ISO 210012018 EOMS Clauses.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA Guidelines for Faculty 2023",
    "url": "https://mits.ac.in/assets/pdf/iqac/NBA_Guidelines for Faculty Updated 22-08-2023.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA UG Engg Tier I Manual",
    "url": "https://mits.ac.in/assets/pdf/iqac/NBA_UGEngg_Tier_I_Manual (uploaded on 20231102)-2.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA-Self Assessment Report (SAR)-UG-Engineering (TIER-I Institutions)",
    "url": "https://www.nbaind.org/files/2-SAR-UG-EG-T1_1%20August%202024_revised_Format_20240801144723.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA-Self Assessment Report (SAR)-PG-Management (TIER-I Institutions)",
    "url": "https://www.nbaind.org/files/SAR-PG-MAG-18-4-2024_Format_20240514144527.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA-Self Assessment Report (SAR)-PG-Computer Application- MCA (TIER-I Institutions)",
    "url": "https://www.nbaind.org/Files/MCA_New/2-SAR-MCA-final-21-12-2023.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA-New_Self Assessment Report (SAR)-UG-Engineering (TIER-I Institutions)",
    "url": "https://nbaind.org/files/2-SAR-UG-EG-T1_1%20August%202024_Format_20240801124948.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA-Self Assessment Report (SAR)-PG-Engineering (TIER-I Institutions)",
    "url": "https://www.nbaind.org/files/PG-Eng-SAR-13-8-24_Format_20240813153128.pdf",
    "type": "pdf"
  },
  {
    "title": "NIRF 2023 Methodology - Engineering",
    "url": "https://mits.ac.in/assets/pdf/iqac/NIRF 2023 Methodology - Engineering.pdf",
    "type": "pdf"
  },
  {
    "title": "NIRF 2023 Methodology - Management",
    "url": "https://mits.ac.in/assets/pdf/iqac/NIRF 2023 Methodology - Management.pdf",
    "type": "pdf"
  },
  {
    "title": "NIRF 2023 Methodology - Overall",
    "url": "https://mits.ac.in/assets/pdf/iqac/NIRF 2023 Methodology - Overall.pdf",
    "type": "pdf"
  }
];

// ---------------- STRATEGIC PLAN ----------------
export const strategicPlan: Doc[] = [
  {
    "title": "Strategic Plan Implementation (AY 2023-24 Gap Analysis Report)",
    "url": "https://mits.ac.in/assets/pdf/iqac/23-24_GAp ANalysis Report.pdf",
    "type": "pdf"
  },
  {
    "title": "Strategic Plan Implementation (AY 2022-23 Gap Analysis Report)",
    "url": "https://mits.ac.in/assets/pdf/iqac/22-23_GAp ANalysis Report.pdf",
    "type": "pdf"
  },
  {
    "title": "Strategic Plan (2022-23 to 2026-27)",
    "url": "https://mits.ac.in/assets/pdf/admin/Strategic%20Plan%202022-27.pdf",
    "type": "pdf"
  },
  {
    "title": "Strategic Plan Implementation",
    "url": "https://mits.ac.in/assets/pdf/admin/Strategic-Plan-Implementation.pdf",
    "type": "pdf"
  }
];

// ---------------- E-CONTENT ----------------
export const econtent: Doc[] = [
  {
    "title": "e-Content Development Center",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS e-Content.pdf",
    "type": "pdf"
  },
  {
    "title": "e-Content Facilities in MITS CRS",
    "url": "https://mits.ac.in/assets/pdf/iqac/E- Content Facilities in MITS CRS.pdf",
    "type": "pdf"
  },
  {
    "title": "e-Content Preparation Declaration Form",
    "url": "https://mits.ac.in/assets/pdf/iqac/E- Content Preparation _ Declaration Form.pdf",
    "type": "pdf"
  },
  {
    "title": "e-Content Preparation Standard Operating Procedure-SOP",
    "url": "https://mits.ac.in/assets/pdf/iqac/E- Content Preparation Standard Operating Procedure-SOP.pdf",
    "type": "pdf"
  },
  {
    "title": "e-Content by MITS Faculty",
    "url": "/e-content",
    "type": "link"
  }
];

// ---------------- PO-PSO-CO ----------------
export const poPsoCoUG: Doc[] = [
  {
    "title": "B.Tech - Civil Engineering",
    "url": "https://mits.ac.in/public/uploads/courseattainment/ed46c87d7524601b5488d7516cf131d5.pdf",
    "type": "pdf"
  },
  {
    "title": "B.Tech - Computer Science & Engineering",
    "url": "https://mits.ac.in/public/uploads/courseattainment/CSE%20UG%20PEOs%20&%20POs.pdf",
    "type": "pdf"
  },
  {
    "title": "B.Tech - Computer Science and Technology",
    "url": "https://mits.ac.in/public/uploads/courseattainment/5bd07f16cbebedd4a2ae66f779cb8412.pdf",
    "type": "pdf"
  },
  {
    "title": "B.Tech - Electronics & Communication Engineering",
    "url": "https://mits.ac.in/public/uploads/courseattainment/bf5cbf47b24c0038d0214b4c63a286fb.pdf",
    "type": "pdf"
  },
  {
    "title": "B.Tech - Electrical and Electronics Engineering",
    "url": "https://mits.ac.in/public/uploads/courseattainment/3085fc5bac5d124dfac551ddc5c04bc4.pdf",
    "type": "pdf"
  },
  {
    "title": "B.Tech - Mechanical Engineering",
    "url": "https://mits.ac.in/public/uploads/courseattainment/dad4367ee11ac4205b47349921354e98.pdf",
    "type": "pdf"
  }
];
export const poPsoCoPG: Doc[] = [
  {
    title: "B.B.A. - Bachelor of Business Administration (Vision & Mission)",
    url: "https://mits.ac.in/public/uploads/courseattainment/BBA%20vision,%20mission.pdf",
    type: "pdf"
  },
  {
    title: "M.B.A. - Master of Business Administration (Vision & Mission)",
    url: "https://mits.ac.in/public/uploads/courseattainment/MBA%20Vision%20and%20Mission.pdf",
    type: "pdf"
  },
  {
    "title": "M.B.A. - Master of Business Administration",
    "url": "https://mits.ac.in/public/uploads/courseattainment/a362fcdaee05429e6c443f6b052b7282.pdf",
    "type": "pdf"
  },
  {
    "title": "M.C.A. - Master of Computer Applications",
    "url": "https://mits.ac.in/public/uploads/courseattainment/3246f8050efcce5e4666346725a26690.pdf",
    "type": "pdf"
  },
  {
    "title": "M.Tech - Computer Science And Engineering",
    "url": "https://mits.ac.in/public/uploads/courseattainment/CSE%20UG%20PEOs%20&%20POs.pdf",
    "type": "pdf"
  },
  {
    "title": "M.Tech - VLSI Design And Embedded Systems",
    "url": "https://mits.ac.in/public/uploads/courseattainment/bf5cbf47b24c0038d0214b4c63a286fb.pdf",
    "type": "pdf"
  }
];

// ---------------- ANNUAL & IQAC HOURS REPORTS ----------------
export const annualReports: Doc[] = [
  {
    "title": "Annual Reports 2024-25",
    "url": "https://mits.ac.in/assets/pdf/admin/AnnualReport%202024-25.pdf",
    "type": "pdf"
  },
  {
    "title": "Annual Reports 2023-24",
    "url": "https://mits.ac.in/assets/pdf/admin/AnnualReport%202023-24.pdf",
    "type": "pdf"
  },
  {
    "title": "Annual Reports 2022-23",
    "url": "https://mits.ac.in/assets/pdf/admin/Annual%20Report%202022-23.pdf",
    "type": "pdf"
  },
  {
    "title": "Annual Reports 2021-22",
    "url": "https://mits.ac.in/assets/pdf/admin/Annual%20Report%20AY%202021-22.pdf",
    "type": "pdf"
  },
  {
    "title": "Annual Reports 2018-19",
    "url": "https://mits.ac.in/assets/pdf/admin/2018-19%20Annual%20Report.pdf",
    "type": "pdf"
  },
  {
    "title": "Annual Reports 2017-18",
    "url": "https://mits.ac.in/assets/pdf/admin/2017-18%20Annual%20Report.pdf",
    "type": "pdf"
  },
  {
    "title": "Annual Reports 2016-17",
    "url": "https://mits.ac.in/assets/pdf/admin/2016-17%20Annual%20Report.pdf",
    "type": "pdf"
  },
  {
    "title": "Annual Reports 2015-16",
    "url": "https://mits.ac.in/assets/pdf/admin/2015-16%20Annual%20Report.pdf",
    "type": "pdf"
  },
  {
    "title": "Annual Reports 2014-15",
    "url": "https://mits.ac.in/assets/pdf/admin/2014-15%20Annual%20Report.pdf",
    "type": "pdf"
  }
];
export const iqacHoursReports: Doc[] = [
  {
    "title": "IQAC HOURS May 2025 Report (ENGG, MBA, MCA & BSH)",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours May 2025.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS April 2025 Report (ENGG, MBA, MCA & BSH)",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours April 2025.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS March 2025 Report (ENGG, MBA, MCA & BSH)",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours March 2025.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS February 2025 Report (ENGG, MBA, MCA & BSH)",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours February 2025.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS January 2025 Report (ENGG, MBA, MCA & BSH)",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours January 2025.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS December 2024 Report (ENGG, MBA, MCA & BSH)",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours December 2024.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS November 2024 Report (ENGG, MBA, MCA & BSH)",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC HOURS November 2024 Report.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS October 2024 Report (ENGG, MBA, MCA & BSH)",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC HOURS October 2024 Report.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS July - September 2024 Report (ENGG, MBA & MCA)",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC 2024 ENGG.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS July - September 2024 Report (BSH)",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC 2024 BSH.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS July 2023 to June 2024 (ENGG, MBA & MCA)",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours ENGG_MBA_MCA July to June 2024.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS July 2023 to June 2024 (BSH)",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours BSH July 2023 - Jun 2024.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS June 2024 Report",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours June 2024.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS May 2024 Report",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours May 2024.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS April 2024 Report",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours April.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS March 2024 Report",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours March.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS February 2024 Report",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC HOURS February 2024 Report.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS January 2024 Report",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC HOURS January 2024 Report.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS December 2023 Report",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC HOURS December 2023 Report.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS November 2023 Report",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC HOURS November 2023 Report.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC HOURS July to October 2023 Report",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC Hours July to Oct 2023.pdf",
    "type": "pdf"
  }
];

// ---------------- NEWSLETTERS & HANDBOOKS ----------------
export const newsletterDocs: Doc[] = [
  {
    "title": "MITS Newsletter Archive",
    "url": "/newsletter",
    "type": "link"
  }
];
export const handbookDocs: Doc[] = [];

// ---------------- UGC MANDATE ----------------
export const ugcMandate: Doc[] = [
  {
    "title": "Bureau of Indian Standards (BIS)",
    "url": "https://www.bis.gov.in/",
    "type": "link"
  },
  {
    "title": "Anusandhan National Research Foundation (ANRF)",
    "url": "https://anrfonline.in/ANRF/HomePage",
    "type": "link"
  },
  {
    "title": "Grading of Higher Education Institutions (HEIs) based on Implementation of National Education Policy (NEP) 2020",
    "url": "https://www.ugc.gov.in/pdfnews/8308176_NAAC-Grading.pdf",
    "type": "pdf"
  },
  {
    "title": "NEP 2020 - Akhil Bharatiya Shiksha Samagam 2022",
    "url": "https://www.education.gov.in/nep/abss-2022",
    "type": "link"
  },
  {
    "title": "NEP 2020 - Akhil Bharatiya Shiksha Samagam 2023",
    "url": "https://www.education.gov.in/nep/abss-2023",
    "type": "link"
  },
  {
    "title": "NEP 2020 - Akhil Bharatiya Shiksha Samagam 2024",
    "url": "https://www.education.gov.in/hi/node/22597",
    "type": "link"
  },
  {
    "title": "Report of the Overarching Committe (Constituted bby ministry of Education) for Transformative Reforms for Strengthening Assessment and Accreditation of Higher Education Institutions in India",
    "url": "https://www.ugc.gov.in/pdfnews/1238790_Dr_Radhakrishnan-Committee-Final-Report.pdf",
    "type": "pdf"
  },
  {
    "title": "Quality Mandate for Higher Education Institutions in India",
    "url": "https://www.ugc.gov.in/e-book/Quality%20Mandate%20E-BOOK.pdf",
    "type": "pdf"
  },
  {
    "title": "Deeksharambh - Student Induction Programme (SIP)",
    "url": "https://www.ugc.gov.in/pdfnews/3830821_DeeksharambhEnglish.pdf",
    "type": "pdf"
  },
  {
    "title": "LOCF -Learing Outcomes-Based Curriculum Framework",
    "url": "https://www.ugc.gov.in/e-book/locf.pdf",
    "type": "pdf"
  },
  {
    "title": "Jeevan Kaushal -Curriculum for Life Skills",
    "url": "https://www.ugc.gov.in/pdfnews/4874522_Draft-Curriculum-for-Life-SKill-Jeevan-Kaushal.pdf",
    "type": "pdf"
  },
  {
    "title": "Social and Industry Connect - Fostering Social Responsibility & Community Engagement",
    "url": "https://www.ugc.gov.in/e-book/UNNAT%20BHARAT%20ABHIYAN.pdf",
    "type": "pdf"
  },
  {
    "title": "CARE - Consortium for Academic Research and Ethics",
    "url": "https://www.ugc.gov.in/e-book/CARE%20ENGLISH.pdf",
    "type": "pdf"
  },
  {
    "title": "STRIDE - Scheme for Trans-disciplinary Research for India’s Developing Economy",
    "url": "https://www.ugc.gov.in/pdfnews/2089255_STRIDE_FINAL_BOOK.pdf",
    "type": "pdf"
  },
  {
    "title": "SATAT - Framework for Eco-Friendly and Sustainable Campus Development",
    "url": "https://www.ugc.gov.in/e-book/STAT%20ENGLISH/mobile/index.html#p=6",
    "type": "link"
  },
  {
    "title": "MULYA PRAVAH - Guidelines for Inculcation of Human Values and Professional Ethics",
    "url": "https://www.ugc.gov.in/pdfnews/8799370_Mulya-Parvah_Guideline.pdf",
    "type": "pdf"
  },
  {
    "title": "GURU DAKSHTA - Faculty Induction Programme (FIP) for newly appointed faculty members",
    "url": "https://www.ugc.gov.in/e-book/GURU%20DAKSHTA%20English.pdf",
    "type": "pdf"
  },
  {
    "title": "PARAMARSH - Scheme For Mentoring NAAC Accrediation Aspirant Institutions to Promote Quality Assurance in Higher Education",
    "url": "https://paramarsh.ugc.ac.in/",
    "type": "link"
  },
  {
    "title": "IQAC Guidelines for University (XII PLAN GUIDELINES)",
    "url": "https://www.ugc.gov.in/pdfnews/0899501_IQAC-guidelines-for-University.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC Guidelines for Colleges (XII PLAN GUIDELINES)",
    "url": "https://www.ugc.gov.in/pdfnews/5172195_Guideline_IQACs.pdf",
    "type": "pdf"
  },
  {
    "title": "Evaluation Reforms in HEls - Guidelines for reforms in evaluation & assessment Systems",
    "url": "https://www.ugc.gov.in/e-book/EVALUATION%20ENGLISH.pdf",
    "type": "pdf"
  },
  {
    "title": "Guidelines for Innovative Pedagogical Approaches & Evaluation Reforms",
    "url": "https://www.ugc.gov.in/pdfnews/1031121_Guidelines-Innovative-Pedagogical-Approaches-Evaluation-Reforms.pdf",
    "type": "pdf"
  },
  {
    "title": "National Higher Education Qualifications Framework (NHEQF)",
    "url": "https://www.ugc.gov.in/pdfnews/2990035_Final-NHEQF.pdf",
    "type": "pdf"
  },
  {
    "title": "National Credit Framework (NCrF)",
    "url": "https://www.ugc.gov.in/pdfnews/9028476_Report-of-National-Credit-Framework.pdf",
    "type": "pdf"
  },
  {
    "title": "Curriculum and Credit Framework for Undergraduate Programmes",
    "url": "https://www.ugc.gov.in/e-book/FYUGP/mobile/index.html",
    "type": "link"
  },
  {
    "title": "Guidelines for Establishment of Research & Development Cell In Higher Education Institutions",
    "url": "https://www.ugc.gov.in/e-book/RDC_Guidelines/mobile/index.html",
    "type": "link"
  },
  {
    "title": "UTSAH (Undertaking Transformative Strategies and Actions in Higher Education)",
    "url": "https://utsah.ugc.ac.in/",
    "type": "link"
  },
  {
    "title": "National Educational Policy (NEP) 2020",
    "url": "https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf",
    "type": "pdf"
  },
  {
    "title": "NEP SAARTHI - Student Ambassador for Academic Reforms in Transforming Higher Education in India",
    "url": "https://www.ugc.gov.in/pdfnews/1566510_SAARTHI-GUIDELINES.pdf",
    "type": "pdf"
  },
  {
    "title": "NEP 2020 - Guidelines for Multiple Entry and Exit in Academic Programmes",
    "url": "https://www.ugc.gov.in/e-book/GL%20Multipe%20Entry%20Exit.pdf",
    "type": "pdf"
  },
  {
    "title": "Initiatives undertaken by UGC for implementation of NEP - 2020",
    "url": "https://www.ugc.gov.in/pdfnews/6769753_UGC-Letter-Implementation-of-NEP.pdf",
    "type": "pdf"
  },
  {
    "title": "ICT Initiatives of MoE",
    "url": "https://www.education.gov.in/ict-initiatives",
    "type": "link"
  },
  {
    "title": "National Skills Qualification Framework (NSQF)",
    "url": "https://nqr.gov.in/downloads/pdfs/NSQF_Gazette_Notification.pdf",
    "type": "pdf"
  },
  {
    "title": "SWAYAM Plus",
    "url": "https://swayam-plus.swayam2.ac.in/courses",
    "type": "link"
  },
  {
    "title": "UGC (Minimum Standards of Instruction for the Grant of Undergraduate Degree and Postgraduate Degree) Regulations, 2025",
    "url": "https://www.ugc.gov.in/pdfnews/0920543_Public-Notice-UG-and-PG-Regulations-2025.pdf",
    "type": "pdf"
  },
  {
    "title": "Curriculum and Credit Framework for Postgraduate Programmes",
    "url": "https://mits.ac.in/assets/pdf/iqac/Curriculum-and-Credit-Framework-for-Postgraduate-Programmes.pdf",
    "type": "pdf"
  }
];

// ---------------- EVENTS & NOTICE BOARD ----------------
export const iqacEvents: IqacEvent[] = [
  {
    "title": "5-Day Professional Development Programme (PDP) on \"AI in Teaching and Learning\" was organized by Internal Quality Assurance Cell (IQAC) in association with NITTTR, Chennai from 06.04.2026 to 10.04.2026.",
    "date": "with NITTTR, Chennai from 06",
    "url": "https://mits.ac.in/assets/pdf/iqac/AI in teaching and Learning.pdf"
  },
  {
    "title": "3-Day ISO 21001: 2018 Surveillance Audit 2 was held during 22nd – 24th January 2026 by, TUV SUD South Asia.",
    "date": "22nd – 24th January 2026",
    "url": "https://mits.ac.in/assets/pdf/iqac/ISO Surveillnace 2 Audit Report 22nd & 24th January 2026.pdf"
  },
  {
    "title": "5-Day Professional Development Programme (PDP) on \"UI / UX Design\" was organized by Internal Quality Assurance Cell (IQAC) in association with NITTTR, Chennai from 30.06.2025 to 04.07.2025.",
    "date": "with NITTTR, Chennai from 30",
    "url": "https://mits.ac.in/assets/pdf/iqac/Report_UI  UX Design.pdf"
  },
  {
    "title": "2-Day ISO 21001:2018 EOMS First Surveillance Audit was held on March 10th and 11th, 2025.",
    "date": "March 10th and 11th, 2025",
    "url": "https://mits.ac.in/assets/pdf/iqac/ISO 210012018 Surveillance Audit - EOMS.pdf"
  },
  {
    "title": "An Awareness Programme on Staff Development Program on \"Enhancing Digital Skills\" was organized by Internal Quality Assurance Cell (IQAC) on 22nd March 2025.",
    "date": "22nd March 2025",
    "url": "https://mits.ac.in/assets/pdf/iqac/SDP.pdf"
  },
  {
    "title": "A 5-day Professional Development Programme (PDP) on \"National Education Policy 2020 & Institutional Development\" in association with NITTTR Chennai, was held from March 10th-14th, 2025.",
    "date": "with NITTTR Chennai, was held from March 10th-14th, 2025",
    "url": "https://mits.ac.in/assets/pdf/iqac/Report_National Education Policy 2020 & Institutional Development.pdf"
  },
  {
    "title": "A 6-day Professional Development Programme (PDP) on Augmented Reality and Virtual Reality, in association with NITTTR Chennai, was held from February 24, 2025, to March 1, 2025.",
    "date": "Augmented Reality and Virtual Reality, in association with NITTTR Chennai, was held from February 24, 2025, to March 1, 2025",
    "url": "https://mits.ac.in/assets/pdf/iqac/Augmented Reality & Virtual Reality.pdf"
  },
  {
    "title": "An Awareness Programme on \"AICTE 360° Feedback System\" was organized by Internal Quality Assurance Cell (IQAC) on 15th February 2025.",
    "date": "15th February 2025",
    "url": "https://mits.ac.in/assets/pdf/iqac/AICTE 360 Feedback System Published Report.pdf"
  },
  {
    "title": "An Awareness Programme on \"AICTE 360° Feedback System\" was organized by Internal Quality Assurance Cell (IQAC) on 1st February 2025.",
    "date": "1st February 2025",
    "url": "https://mits.ac.in/assets/pdf/iqac/AICTE360-Report-1.2.2025.pdf"
  },
  {
    "title": "1-Day Workshop on 'National Credit Framework (NCrF): Revamping Curriculum, Pedagogy, and Assessment' was organized by the Internal Quality Assurance Cell (IQAC) on January 29, 2025.",
    "date": "January 29, 2025",
    "url": "https://mits.ac.in/assets/pdf/iqac/one-day workshop on National Credit Framework (NCrF).pdf"
  },
  {
    "title": "A Two-day External Academic and Administrative Audit for AY 2023-24 was held from 18th to 19th December 2024.",
    "date": "18th to 19th December 2024",
    "url": "https://mits.ac.in/assets/pdf/iqac/External Academic and Administrative Audit 2023-24.pdf"
  },
  {
    "title": "An Expert Talk on \"Generative AI\" was organized by Internal Quality Assurance Cell (IQAC) on 21st November 2024.",
    "date": "21st November 2024",
    "url": "https://mits.ac.in/assets/pdf/iqac/Published_Generative_AI _Report.pdf"
  },
  {
    "title": "A \"Guru-Dakshta Faculty Induction Program (FIP)\" was organized by IQAC, MITS for the Academic Year 2024-25 from 17th to 27th September 2024.",
    "date": "17th to 27th September 2024",
    "url": "https://mits.ac.in/assets/pdf/iqac/Guru-Dakshta Faculty Induction Program.pdf"
  },
  {
    "title": "A 5-Day Professional Development Programme (PDP) on Block Chain Technologies, in association with NITTTR, Chennai, was held from June 03rd to 07th, 2024.",
    "date": "Block Chain Technologies, in association with NITTTR, Chennai, was held from June 03rd to 07th, 2024",
    "url": "https://mits.ac.in/assets/pdf/iqac/Block Chain Technologies.pdf"
  },
  {
    "title": "A 5-Day Professional Development Programme (PDP) on NBA ACCREDITATION, in association with NITTTR, Chennai, was held from February 12th to 16th, 2024.",
    "date": "NBA ACCREDITATION, in association with NITTTR, Chennai, was held from February 12th to 16th, 2024",
    "url": "https://mits.ac.in/assets/pdf/iqac/5 Days Professional Development Programme (PDP) on NBA ACCREDITATION in association with NITTTR, Chennai _12.02.2024 – 16.02.2024.pdf"
  },
  {
    "title": "A 5-Day ISO 21001:2018 Certification Audit - EOMS Stage 2 was held from November 27th to December 1st, 2023.",
    "date": "Audit - EOMS Stage 2 was held from November 27th to December 1st, 2023",
    "url": "https://mits.ac.in/assets/pdf/iqac/ISO Stage 2 Audit Report.pdf"
  }
];
export const iqacENotices = [
  {
    title: "📢 Internal Academic Audit – AY 2025–26, Semester–II for UG & PG programs (9th – 13th March 2026, Conducted by PAARC & IQAC Team)",
    date: "March 2026",
    url: "https://mits.ac.in/assets/pdf/iqac/IQAC PDP poster-2026.pdf",
    highlight: true
  },
  {
    title: "🌍 Times Higher Education – MITS World University Rankings 2027",
    date: "2026",
    url: "https://www.timeshighereducation.com/world-university-rankings/madanapalle-institute-technology-and-science-deemed-be-university",
    highlight: true
  },
  {
    title: "🌿 UI GreenMetric – World University Rankings 2026 Profile",
    date: "2026",
    url: "https://uigreenmetric.com/university/mits.ac.in",
    highlight: true
  },
  {
    title: "Review Meeting — Conducted by IQAC (22nd to 24th January 2026)",
    date: "Jan 2026",
    url: "#"
  },
  {
    title: "Cell / Committee Review Meeting (5th November 2025 to 12th January 2026)",
    date: "Nov 2025 - Jan 2026",
    url: "#"
  },
  {
    title: "Guru Dakshta (Faculty Induction Program (FIP)) (27th October - 14th November 2025)",
    date: "Oct - Nov 2025",
    url: "#"
  },
  {
    title: "Professional Development Programme",
    detail: "NITTTRC Professional Development Programme on \"AI in Teaching and Learning\". 06th April - 10th April 2026",
    url: "https://mits.ac.in/assets/pdf/iqac/IQAC PDP poster-2026.pdf",
    linkText: "Click here for Event Details"
  },
  {
    title: "Internal Academic Audit",
    detail: "Internal Academic Audit for the Academic Year 2025-26 – I Semester for UG (II/III/IV-Year B.Tech) and PG (MBA, MCA, M.Tech) programs. 9th – 13th March 2026. Conducted by : PAARC & IQAC Team - MITS",
    url: null,
    linkText: null
  },
  {
    title: "Review Meeting",
    detail: "ISO 21001:2018 EOMS Surveillance Audit. 22nd to 24th January, 2026",
    url: null,
    linkText: null
  },
  {
    title: "Review Meeting",
    detail: "Cell / Committee Review Meeting. From 5th November 2025 to 12th January 2026",
    url: null,
    linkText: null
  },
  {
    title: "Guru Dakshta",
    detail: "Guru Dakshta (Faculty Induction Program (FIP)). Date: 27th October - 14th November 2025 | Venue: Seminar Hall- A | Time: 4:00 to 5:00 PM | Conducted By: IQAC - MITS",
    url: null,
    linkText: null
  },
  {
    title: "Professional Development Programme",
    detail: "NITTTRC Professional Development Programme on \"UI / UX DESIGN\". 30th June - 04th July 2025",
    url: null,
    linkText: null
  },
  {
    title: "IQAC Hours",
    detail: "26th June 2025 (Last Thursday of Every Month) | Time: 10:00 AM - 04:00 PM",
    url: null,
    linkText: null
  },
  {
    title: "IQAC Hours",
    detail: "24th April 2025 (Last Thursday of Every Month) | Time: 10:00 AM - 04:00 PM",
    url: null,
    linkText: null
  },
  {
    title: "IQAC Hours",
    detail: "27th March 2025 (Last Thursday of Every Month) | Time: 10:00 AM - 04:00 PM",
    url: null,
    linkText: null
  },
  {
    title: "Professional Development Programme",
    detail: "NITTTRC Professional Development Programme on \"National Educational Policy NEP 2020 & Institutional Development\". 10th - 14th March 2025",
    url: "https://mits.ac.in/assets/pdf/iqac/IQAC poster_PDP.pdf",
    linkText: "Click here for Event Details"
  },
  {
    title: "Audit",
    detail: "ISO 21001:2018 EOMS Surveillance Audit. 10th – 11th March 2025",
    url: null,
    linkText: null
  },
  {
    title: "IQAC Hours",
    detail: "27th February 2025 (Last Thursday of Every Month) | Time: 10:00 AM - 04:00 PM",
    url: null,
    linkText: null
  },
  {
    title: "Professional Development Programme",
    detail: "NITTTRC Professional Development Programme on \"Augmented Reality & Virtual Reality\". 24th February - 1st March 2025",
    url: null,
    linkText: null
  },
  {
    title: "IQAC Hours",
    detail: "30th January 2025 (Last Thursday of Every Month) | Time: 10:00 AM - 04:00 PM",
    url: null,
    linkText: null
  },
  {
    title: "IQAC Hours",
    detail: "26th December 2024 (Last Thursday of Every Month) | Time: 10:00 AM - 04:00 PM",
    url: null,
    linkText: null
  },
  {
    title: "External Academic & Administrative Audit (AAA)",
    detail: "Academic Year : 2023-24. 18th - 19th December 2024. Conducted By: IQAC - MITS",
    url: null,
    linkText: null
  },
  {
    title: "Guru Dakshta (Faculty Induction Program (FIP))",
    detail: "Date: 17th - 27th September 2024 | Venue: Seminar Hall- A | Time: 4:00 to 5:00 PM | Conducted by : IQAC - MITS",
    url: null,
    linkText: null
  },
  {
    title: "Internal Audit",
    detail: "Internal Academic & Administrative Audit for the Academic Year 2023-24 – II Semester. Date : September 9th to 13th & 17th, 2024. Conducted by : PAARC & IQAC Team - MITS",
    url: null,
    linkText: null
  },
  {
    title: "IQAC Hours",
    detail: "29th August 2024 (Last Thursday of Every Month) | Time: 10:00 AM - 04:00 PM",
    url: null,
    linkText: null
  },
  {
    title: "IQAC Hours",
    detail: "27th June 2024 (Last Thursday of Every Month) | Time: 10:00 AM - 04:00 PM",
    url: null,
    linkText: null
  },
  {
    title: "IQAC Hours",
    detail: "30th May 2024 (Last Thursday of Every Month) | Time: 10:00 AM - 04:00 PM",
    url: null,
    linkText: null
  },
  {
    title: "Internal Audit",
    detail: "Internal Audit for the Academic Year 2023-24 - I Semester for MBA, MCA & BSH. Date : 1st & 2nd May, 2024. Conducted by : PAARC & IQAC Team - MITS",
    url: null,
    linkText: null
  },
  {
    title: "IQAC Hours",
    detail: "25th April 2024 (Last Thursday of Every Month) | Time: 10:00 AM - 04:00 PM",
    url: null,
    linkText: null
  },
  {
    title: "IQAC Hours",
    detail: "28th March 2024 (Last Thursday of Every Month) | Time: 10:00 AM - 04:00 PM",
    url: null,
    linkText: null
  },
  {
    title: "IQAC Hours",
    detail: "29th February 2024 (Last Thursday of Every Month) | Time: 10:00 AM - 04:00 PM",
    url: null,
    linkText: null
  },
  {
    title: "NITTTR Professional Development Program on \"NBA Accreditation\"",
    detail: "February 12th – 16th 2024",
    url: "https://mits.ac.in/assets/pdf/iqac/NITTTR Banner.pdf",
    linkText: "Click here for Event Banner"
  },
  {
    title: "NITTTRC Professional Development Program on \"NBA Accreditation\"",
    detail: "February 12th – 17th 2024",
    url: null,
    linkText: null
  },
  {
    title: "IQAC Hours",
    detail: "25th January 2024 (Last Thursday of Every Month) | Time: 10:00 AM - 04:00 PM",
    url: null,
    linkText: null
  },
  {
    title: "Internal Audit",
    detail: "Internal Audit for the Academic Year 2023-24 - I Semester for all the Engineering Departments. Date : 3rd - 12th January, 2024. Conducted by : PAARC & IQAC Team - MITS",
    url: null,
    linkText: null
  },
  {
    title: "Internal Inspection",
    detail: "Internal Inspection of Status of Documents maintained by MITS Cells / Committees. Date : 22nd December 2023. Conducted by : PAARC & IQAC Team - MITS",
    url: null,
    linkText: null
  },
  {
    title: "ISO Audit 21001 : 2018",
    detail: "ISO Audit 21001 : 2018 Stage 2 Audit. 30th November – 01st December 2023",
    url: null,
    linkText: null
  },
  {
    title: "IQAC Hours",
    detail: "28th December 2023 (Last Thursday of Every Month) | Time: 10:00 AM - 04:00 PM",
    url: null,
    linkText: null
  }
];

// ---------------- DOWNLOADS ----------------
export const auditFormats: Doc[] = [
  {
    "title": "Admin Audit Format",
    "url": "https://mits.ac.in/assets/pdf/iqac/ADMIN AUDIT FORMAT.pdf",
    "type": "pdf"
  },
  {
    "title": "External Department Audit Format",
    "url": "https://mits.ac.in/assets/pdf/iqac/External Department Audit Format.pdf",
    "type": "pdf"
  },
  {
    "title": "External Audit Frame work - Mapping of P Files & Supporting FIles",
    "url": "https://mits.ac.in/assets/pdf/iqac/External Audit Frame work - Mapping of P Files & Supporting FIles.pdf",
    "type": "pdf"
  },
  {
    "title": "Faculty Audit Format",
    "url": "https://mits.ac.in/assets/pdf/iqac/FACULTY AUDIT FORMAT.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS EOMS Internal Audit Notes ISO 21001",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Internal Audit Notes ISO 21001.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS EOMS Course File Audit ISO 21001",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Course File Audit ISO 21001.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS Check List - Laboratory Audit",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS Check List Laboratory Audit.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS EOMS Theory Course File Audit ISO 21001 2024-25",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Theory Course File Audit ISO 21001 2024-25.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS EOMS Lab Course File Audit ISO 21001 2024-25",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Lab Course File Audit ISO 21001 2024-25.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS EOMS Internal Audit Notes ISO 21001",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Internal Audit Notes ISO 21001.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS EOMS Course File Audit ISO 21001",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Course File Audit ISO 21001.pdf",
    "type": "pdf"
  }
];
export const naacFormats: Doc[] = [
  {
    "title": "Comparison of NAAC Criteria and ISO 210012018 EOMS Clauses",
    "url": "https://mits.ac.in/assets/pdf/iqac/Comparison of NAAC Criteria and ISO 210012018 EOMS Clauses.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC AQAR’S Support Documents",
    "url": "https://mits.ac.in/assets/pdf/iqac/AQAR_MITS Support Documents.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC Supporting Document Manual - Quantitative Inputs For AQAR",
    "url": "https://mits.ac.in/assets/pdf/iqac/Supporting Document Manual - Quantitative Inputs For AQAR.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC Benchmarks and SOP (Standard Operating Procedures)",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS_benchmarks-_IQAC.xlsx",
    "type": "xlsx"
  },
  {
    "title": "NAAC AQAR Benchmarks & SOP",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS-AQAR-Benchmarks-SOP.pdf",
    "type": "pdf"
  },
  {
    "title": "Correlation between New NAAC Reforms 2024 & Existing NAAC Criterion (Key Indicators)",
    "url": "https://mits.ac.in/assets/pdf/iqac/Correlation between New NAAC Reforms 2024 & Existing NAAC Criterion Key Indicators.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS Responsibilities Matrix for NAAC 2024 Reforms (MBGL)",
    "url": "https://mits.ac.in/assets/pdf/iqac/New Reforms Correlation and MIts Responsibilities.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC AQAR’S Support Documents",
    "url": "https://mits.ac.in/assets/pdf/iqac/AQAR_MITS Support Documents.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC Supporting Document Manual - Quantitative Inputs For AQAR",
    "url": "https://mits.ac.in/assets/pdf/iqac/Supporting Document Manual - Quantitative Inputs For AQAR.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC Benchmarks and SOP (Standard Operating Procedures)",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS_benchmarks-_IQAC.xlsx",
    "type": "xlsx"
  },
  {
    "title": "NAAC AQAR Benchmarks & SOP",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS-AQAR-Benchmarks-SOP.pdf",
    "type": "pdf"
  },
  {
    "title": "Comparison of NAAC Criteria and ISO 210012018 EOMS Clauses",
    "url": "https://mits.ac.in/assets/pdf/iqac/Comparison of NAAC Criteria and ISO 210012018 EOMS Clauses.pdf",
    "type": "pdf"
  }
];
export const nbaFormats: Doc[] = [
  {
    "title": "External Audit Frame work - Mapping of P Files & Supporting FIles",
    "url": "https://mits.ac.in/assets/pdf/iqac/External Audit Frame work - Mapping of P Files & Supporting FIles.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS EOMS NCR Report ISO 21001",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS NCR Report ISO 21001.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC AQAR’S Support Documents",
    "url": "https://mits.ac.in/assets/pdf/iqac/AQAR_MITS Support Documents.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC Supporting Document Manual - Quantitative Inputs For AQAR",
    "url": "https://mits.ac.in/assets/pdf/iqac/Supporting Document Manual - Quantitative Inputs For AQAR.pdf",
    "type": "pdf"
  },
  {
    "title": "Stakeholders Feedback - Action Taken Report Format",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS Dept_Stakeholders Action Taken Report_format.docx",
    "type": "doc"
  },
  {
    "title": "MITS Responsibilities Matrix for NAAC 2024 Reforms (MBGL)",
    "url": "https://mits.ac.in/assets/pdf/iqac/New Reforms Correlation and MIts Responsibilities.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA Supporting Document Manual - Program Specific Files",
    "url": "https://mits.ac.in/assets/pdf/iqac/NBA Supporting Document Manual - Program Specific Files.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA - List of Files to be Maintained in the BSH Department",
    "url": "https://mits.ac.in/assets/pdf/iqac/BSH_NBA_Files List.pdf",
    "type": "pdf"
  },
  {
    "title": "AICTE CO-PO Mapping Template CSE Allied Branches",
    "url": "https://mits.ac.in/assets/pdf/iqac/AICTE CO-PO Mapping Template_CSE Allied Branches.xlsx",
    "type": "xlsx"
  },
  {
    "title": "AICTE CO-PO Mapping Template Core Branches",
    "url": "https://mits.ac.in/assets/pdf/iqac/AICTE CO-PO Mapping Template_Core Branches.xlsx",
    "type": "xlsx"
  },
  {
    "title": "Program Outcomes (PO) Mapping with WA & WK",
    "url": "https://mits.ac.in/assets/pdf/iqac/Program Outcomes (PO) Mapping with WA & WK.xlsx",
    "type": "xlsx"
  },
  {
    "title": "Check List- Sports",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Sports.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC AQAR’S Support Documents",
    "url": "https://mits.ac.in/assets/pdf/iqac/AQAR_MITS Support Documents.pdf",
    "type": "pdf"
  },
  {
    "title": "NAAC Supporting Document Manual - Quantitative Inputs For AQAR",
    "url": "https://mits.ac.in/assets/pdf/iqac/Supporting Document Manual - Quantitative Inputs For AQAR.pdf",
    "type": "pdf"
  },
  {
    "title": "NBA Supporting Document Manual - Program Specific Files",
    "url": "https://mits.ac.in/assets/pdf/iqac/NBA Supporting Document Manual - Program Specific Files.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS EOMS NCR Report ISO 21001",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS NCR Report ISO 21001.pdf",
    "type": "pdf"
  },
  {
    "title": "Check List- Sports",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Sports.pdf",
    "type": "pdf"
  }
];
export const nirfFormats: Doc[] = [
  {
    "title": "NIRF Department Data Template",
    "url": "https://mits.ac.in/assets/pdf/iqac/NIRF- Department_data_template_MITS(3).xlsx",
    "type": "xlsx"
  },
  {
    "title": "NIRF Financial Data Template",
    "url": "https://mits.ac.in/assets/pdf/iqac/NIRF - Financial_data_template_MITS(3).xlsx",
    "type": "xlsx"
  },
  {
    "title": "NIRF Department Data Template",
    "url": "https://mits.ac.in/assets/pdf/iqac/NIRF - Financial_data_template_MITS.xlsx",
    "type": "xlsx"
  },
  {
    "title": "NIRF Financial Data Template",
    "url": "https://mits.ac.in/assets/pdf/iqac/NIRF- Department_data_template_MITS.xlsx",
    "type": "xlsx"
  }
];
export const checkLists: Doc[] = [
  {
    "title": "MITS EOMS Department Check List ISO 21001",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Department Check List ISO 21001.pdf",
    "type": "pdf"
  },
  {
    "title": "Complex Engineering Problem Solving CPS Form",
    "url": "https://mits.ac.in/assets/pdf/iqac/Complex Engineering Problem-Solving _CPS_Form.xlsx",
    "type": "xlsx"
  },
  {
    "title": "SDG Mapping",
    "url": "https://mits.ac.in/assets/pdf/iqac/SDG Mapping.xlsx",
    "type": "xlsx"
  },
  {
    "title": "IEA-GAPC2021 Graduate Attributes & Professional Competencies",
    "url": "https://mits.ac.in/assets/pdf/iqac/IEA-GAPC2021_GRADUATE ATTRIBUTES & PROFESSIONAL COMPETENCIES.xlsx",
    "type": "xlsx"
  },
  {
    "title": "Check List- Anti-Ragging Committee (ARC)",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Anti-Ragging Committee (ARC).pdf",
    "type": "pdf"
  },
  {
    "title": "Check List- Culturals",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Culturals.pdf",
    "type": "pdf"
  },
  {
    "title": "Check List- Events Organized (NSS_NCC)",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- EVENTS ORGANIZED (NSS_NCC).pdf",
    "type": "pdf"
  },
  {
    "title": "Check List- Events Organized",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Events Organized.pdf",
    "type": "pdf"
  },
  {
    "title": "Check List- Grievances and Redressal Committee (GRC)",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Grievances and Redressal Committee (GRC).pdf",
    "type": "pdf"
  },
  {
    "title": "Check List- Internal Complaint Committee (ICC)",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Internal Complaint Committee (ICC).pdf",
    "type": "pdf"
  },
  {
    "title": "Check List- Stakeholders Feedback",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Stakeholders Feedback.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS Check List - DAB, PAC & IAAB",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS Check List - DAB, PAC & IAAB.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS Check List - Value Added Course",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check lIst-Value Added Course.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS Check List - DAB, PAC & IAAB",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List-DAB-PAC-IAAB.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS EOMS Department Check List ISO 21001",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Department Check List ISO 21001.pdf",
    "type": "pdf"
  },
  {
    "title": "Check List- Anti-Ragging Committee (ARC)",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Anti-Ragging Committee (ARC).pdf",
    "type": "pdf"
  },
  {
    "title": "Check List- Culturals",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Culturals.pdf",
    "type": "pdf"
  },
  {
    "title": "Check List- Events Organized (NSS_NCC)",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- EVENTS ORGANIZED (NSS_NCC).pdf",
    "type": "pdf"
  },
  {
    "title": "Check List- Events Organized",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Events Organized.pdf",
    "type": "pdf"
  },
  {
    "title": "Check List- Grievances and Redressal Committee (GRC)",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Grievances and Redressal Committee (GRC).pdf",
    "type": "pdf"
  },
  {
    "title": "Check List- Internal Complaint Committee (ICC)",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Internal Complaint Committee (ICC).pdf",
    "type": "pdf"
  },
  {
    "title": "Check List- Stakeholders Feedback",
    "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Stakeholders Feedback.pdf",
    "type": "pdf"
  }
];

// ---------------- MANUALS TABLE ----------------
export const manualsTable = [
  {
    "no": 1,
    "title": "Process &amp; Quality Manual",
    "docs": []
  },
  {
    "no": 2,
    "title": "Quality Objective Parameters",
    "docs": [
      {
        "title": "Quality Objective Parameters",
        "url": "https://mits.ac.in/assets/pdf/iqac/Quality Objective Parameters.xlsx",
        "type": "xlsx"
      }
    ]
  },
  {
    "no": 3,
    "title": "Files to be maintained by Department for B.Tech Programme",
    "docs": [
      {
        "title": "Files to be maintained by Department for B.Tech Programme Version.1",
        "url": "https://mits.ac.in/assets/pdf/iqac/Files to be_maintained by Department for B.Tech V0.1.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "no": 4,
    "title": "Files to be maintained by the Department for M.Tech / MBA / MCA Programme",
    "docs": [
      {
        "title": "Files to be maintained by the Department for M.Tech / MBA / MCA Programme Version.1",
        "url": "https://mits.ac.in/assets/pdf/iqac/Files to be_maintained by Department for B.Tech V0.1.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "no": 5,
    "title": "General Information to be maintained by the Department",
    "docs": [
      {
        "title": "General Information to be maintained by the Department",
        "url": "https://mits.ac.in/assets/pdf/iqac/General Information to be maintained by Department.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "no": 6,
    "title": "Action Taken Reports to be maintained",
    "docs": [
      {
        "title": "Action Taken Reports to be maintained",
        "url": "https://mits.ac.in/assets/pdf/iqac/Action Taken Reports to be maintained.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "no": 7,
    "title": "Academic Calendar &bull; Institute Academic Calendar &bull; Department Activity Calendar",
    "docs": [
      {
        "title": "Institute Academic Calendar",
        "url": "https://mits.ac.in/ugc-autonomous-exam-portal",
        "type": "link"
      },
      {
        "title": "Department Activity Calendar",
        "url": "https://mits.ac.in/assets/pdf/iqac/Department Activity Calendar.xlsx",
        "type": "xlsx"
      }
    ]
  },
  {
    "no": 8,
    "title": "Curriculum &bull; R20 Curriculum &amp; Regulations &bull; R23 Curriculum &amp; Regulations",
    "docs": [
      {
        "title": "R20 Curriculum & Regulations",
        "url": "https://mits.ac.in/ugc-autonomous-exam-portal",
        "type": "link"
      },
      {
        "title": "R23 Curriculum & Regulations",
        "url": "https://mits.ac.in/ugc-autonomous-exam-portal",
        "type": "link"
      }
    ]
  },
  {
    "no": 9,
    "title": "Course Allocation &bull; Teaching hours calculation &bull; Faculty Course Choices &bull; Faculty Wise Course Allocation &bull; Class Wise Course Allocation &bull; Student Elective Choices &bull; MOOC Courses",
    "docs": [
      {
        "title": "Course Allocation",
        "url": "https://mits.ac.in/assets/pdf/iqac/Course_Allocation.xlsx",
        "type": "xlsx"
      },
      {
        "title": "Faculty Course Choices",
        "url": "https://mits.ac.in/assets/pdf/iqac/Course_Allocation.xlsx",
        "type": "xlsx"
      },
      {
        "title": "Faculty Wise Course Allocation",
        "url": "https://mits.ac.in/assets/pdf/iqac/Course_Allocation.xlsx",
        "type": "xlsx"
      },
      {
        "title": "Class Wise Course Allocation",
        "url": "https://mits.ac.in/assets/pdf/iqac/Course_Allocation.xlsx",
        "type": "xlsx"
      },
      {
        "title": "Student Elective Choices",
        "url": "https://mits.ac.in/assets/pdf/iqac/Course_Allocation.xlsx",
        "type": "xlsx"
      },
      {
        "title": "MOOC Courses",
        "url": "https://mits.ac.in/assets/pdf/iqac/Course_Allocation.xlsx",
        "type": "xlsx"
      }
    ]
  },
  {
    "no": 10,
    "title": "Time Table &bull; Class Time Table &bull; Faculty Time Table &bull; Class Room Occupancy &bull; Laboratory Occupancy &bull; Master Time Table",
    "docs": []
  },
  {
    "no": 11,
    "title": "Course Monitoring Daily Class Conduction Record Course Monitoring (Syllabus Coverage Record)",
    "docs": []
  },
  {
    "no": 12,
    "title": "Continuous Internal Evaluation &bull; Sample Mid Exam Schedule (Notice) &bull; Sample Seating Arrangement &bull; Sample Invigilation Duty Allocation for Mid Exam &bull; Department Internal Exam Result Analysis",
    "docs": [
      {
        "title": "Department Internal Exam Result Analysis",
        "url": "https://mits.ac.in/assets/pdf/iqac/Department Internal - Exam Result Analysis.xlsx",
        "type": "xlsx"
      }
    ]
  },
  {
    "no": 13,
    "title": "End Semester Examination Result Analysis",
    "docs": []
  },
  {
    "no": 14,
    "title": "Course File Theory",
    "docs": [
      {
        "title": "Course File Theory (DTBU)",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS DTBU Theory Course File.rar",
        "type": "link"
      },
      {
        "title": "Course File Theory (UGC-Autonomous)",
        "url": "https://mits.ac.in/assets/pdf/iqac/Course File Theory.rar",
        "type": "link"
      },
      {
        "title": "Master List of Documents - B.Tech Theory Course File",
        "url": "https://mits.ac.in/assets/pdf/iqac/DOC-ID_B.Tech Theory Course File.pdf",
        "type": "pdf"
      },
      {
        "title": "Master List of Documents - M.Tech Theory Course File",
        "url": "https://mits.ac.in/assets/pdf/iqac/DOC-ID_M.Tech Theory Course File.pdf",
        "type": "pdf"
      },
      {
        "title": "Course File Theory - MCA (UGC-Autonomous)",
        "url": "https://mits.ac.in/assets/pdf/iqac/Course File Theory-MCA.rar",
        "type": "link"
      },
      {
        "title": "Master List of Documents - MCA Theory Course File",
        "url": "https://mits.ac.in/assets/pdf/iqac/DOC-ID_M.C.A Theory Course File.pdf",
        "type": "pdf"
      },
      {
        "title": "Course File Theory - MBA (UGC-Autonomous)",
        "url": "https://mits.ac.in/assets/pdf/iqac/Coursefile Theory-MBA.rar",
        "type": "link"
      },
      {
        "title": "Master List of Documents - MBA Theory Course File",
        "url": "https://mits.ac.in/assets/pdf/iqac/DOC-ID_M.B.A Theory Course File.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "no": 16,
    "title": "Course File MOOCS",
    "docs": []
  },
  {
    "no": 17,
    "title": "Value Added Course &bull; Proposal for Offering Value-Added Courses &bull; Checklist : Value-Added Courses",
    "docs": [
      {
        "title": "Proposal for Offering Value-Added Courses",
        "url": "https://mits.ac.in/assets/pdf/iqac/Proposal_to_Conduct_Value_Added_Courses.docx",
        "type": "doc"
      },
      {
        "title": "Checklist : Value-Added Courses",
        "url": "https://mits.ac.in/assets/pdf/iqac/Check lIst-Value Added Course.docx",
        "type": "doc"
      }
    ]
  },
  {
    "no": 18,
    "title": "Remedial Classes &bull; Schedule &amp; Time Table for Remedial Classes &bull; List of Failure Students &bull; Remedial Coaching Attendance Record &bull; Report on Performance Improvement after Remedial Classes",
    "docs": [
      {
        "title": "Remedial Classes",
        "url": "https://mits.ac.in/assets/pdf/iqac/Remedial Class Schedule & Attendance Improvement.xlsx",
        "type": "xlsx"
      }
    ]
  },
  {
    "no": 19,
    "title": "Mentoring Scheme &bull; List of Mentees Mentee /Student Profile &bull; Mentor-Mentee Session Attendance &bull; Mentor-Mentee Session Weekly Report &bull; Student Counselling Record &bull; Improvement Status of Mentee",
    "docs": [
      {
        "title": "Mentoring Scheme",
        "url": "https://mits.ac.in/assets/pdf/iqac/Mentoring Scheme.xlsx",
        "type": "xlsx"
      }
    ]
  },
  {
    "no": 20,
    "title": "Bridge Course &bull; Bridge Course Schedule &bull; Bridge Course Attendance",
    "docs": [
      {
        "title": "Bridge Course Schedule & Attendance",
        "url": "https://mits.ac.in/assets/pdf/iqac/Bridge Course Schedule & Attendance.xlsx",
        "type": "xlsx"
      }
    ]
  },
  {
    "no": 21,
    "title": "Stakeholder Feedback &bull; Questionnaire &bull; Stakeholder Feedback - Action taken Report",
    "docs": [
      {
        "title": "Questionnaire",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS%20Stakeholder%20Feedback%20Questionnaire%20(From%20AY%202024-25%20Onwards).pdf",
        "type": "pdf"
      },
      {
        "title": "Stakeholder Feedback - Action taken Report",
        "url": "https://mits.ac.in/assets/pdf/iqac/Stakeholders Action Taken Report format.docx",
        "type": "doc"
      }
    ]
  },
  {
    "no": 22,
    "title": "Industrial Visit &bull; Permission for Industrial Visit &bull; Industrial Visit Report",
    "docs": [
      {
        "title": "Permission for Industrial Visit",
        "url": "https://mits.ac.in/assets/pdf/iqac/Permission for Industrial Visit.docx",
        "type": "doc"
      },
      {
        "title": "Industrial Visit Report",
        "url": "https://mits.ac.in/assets/pdf/iqac/Industrial Visit Report.doc",
        "type": "doc"
      }
    ]
  },
  {
    "no": 23,
    "title": "Application for Event Participation",
    "docs": [
      {
        "title": "Application for Event Participation",
        "url": "https://mits.ac.in/assets/pdf/iqac/Application_for_Event_Participation.docx",
        "type": "doc"
      }
    ]
  },
  {
    "no": 24,
    "title": "Proposal to Organize Events",
    "docs": [
      {
        "title": "Proposal to Organize Events",
        "url": "https://mits.ac.in/assets/pdf/iqac/Proposal_to_Organize_Event.docx",
        "type": "doc"
      }
    ]
  },
  {
    "no": 25,
    "title": "Proposal for Research Seed Funding",
    "docs": [
      {
        "title": "Proposal for Research Seed Funding",
        "url": "https://mits.ac.in/assets/pdf/iqac/Proposal for Research Seed Funding.docx",
        "type": "doc"
      }
    ]
  },
  {
    "no": 26,
    "title": "Proposal for Organizing NSS, NCC, Sports, and Cultural Events",
    "docs": [
      {
        "title": "Proposal for Organizing NSS, NCC, Sports, and Cultural Events",
        "url": "https://mits.ac.in/assets/pdf/iqac/Proposal_to_Organize_NSS_Sports_Cultural Events.docx",
        "type": "doc"
      }
    ]
  },
  {
    "no": 27,
    "title": "Laboratory Equipment Maintenance",
    "docs": [
      {
        "title": "Laboratory Equipment Maintenance",
        "url": "https://mits.ac.in/assets/pdf/iqac/Laboratory Equipment Maintenance.docx",
        "type": "doc"
      }
    ]
  },
  {
    "no": 28,
    "title": "Laboratory Dead Stock Equipment",
    "docs": [
      {
        "title": "Laboratory Dead Stock Equipment",
        "url": "https://mits.ac.in/assets/pdf/iqac/Laboratory_Dead_Stock_Equipment.docx",
        "type": "doc"
      }
    ]
  },
  {
    "no": 29,
    "title": "Laboratory Equipment Maintenance Action Report",
    "docs": [
      {
        "title": "Laboratory Equipment Maintenance Action Report",
        "url": "https://mits.ac.in/assets/pdf/iqac/Laboratory Equipment  Maintenance Action Report.docx",
        "type": "doc"
      }
    ]
  },
  {
    "no": 30,
    "title": "Appraisal and 360&deg; Feedback Calculation",
    "docs": [
      {
        "title": "Appraisal and 360° Feedback Calculation",
        "url": "https://mits.ac.in/assets/pdf/iqac/Appraisal%20and%20360%C2%B0%20Feedback%20Calculation.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "no": 31,
    "title": "Minutes of Meeting",
    "docs": [
      {
        "title": "MOM Format Cell",
        "url": "https://mits.ac.in/assets/pdf/iqac/MOM_format_Cells.docx",
        "type": "doc"
      },
      {
        "title": "MOM Format Department",
        "url": "https://mits.ac.in/assets/pdf/iqac/MOM_format_Department.docx",
        "type": "doc"
      }
    ]
  },
  {
    "no": 32,
    "title": "AUDIT Formats",
    "docs": [
      {
        "title": "MITS EOMS Theory Course File Audit ISO 21001",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Theory Course File Audit.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS EOMS Laboratory Course File Audit ISO 21001",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Lab Course File Audit ISO 21001.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS Laboratory EOMS Audit Notes ISO 21001",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS Laboratory EOMS Audit Notes ISO 21001.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS EOMS Department Check List ISO 21001",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Department Check List  ISO 21001.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS EOMS Non Conformity Report ISO 21001",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Non Conformity Report ISO 21001.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS Department Objectives Target & Achieved",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS Department Objectives Target & achieved.pdf",
        "type": "pdf"
      },
      {
        "title": "Admin Audit Format",
        "url": "https://mits.ac.in/assets/pdf/iqac/ADMIN%20AUDIT%20FORMAT.pdf",
        "type": "pdf"
      },
      {
        "title": "External Department Audit Format",
        "url": "https://mits.ac.in/assets/pdf/iqac/External Department Audit Format.pdf",
        "type": "pdf"
      },
      {
        "title": "External Audit Frame work - Mapping of P Files & Supporting FIles",
        "url": "https://mits.ac.in/assets/pdf/iqac/External Audit Frame work - Mapping of P Files & Supporting FIles.pdf",
        "type": "pdf"
      },
      {
        "title": "Faculty Audit Format",
        "url": "https://mits.ac.in/assets/pdf/iqac/FACULTY%20AUDIT%20FORMAT.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS EOMS NCR Report ISO 21001",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS%20EOMS%20NCR%20Report%20ISO%2021001.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS EOMS Department Check List ISO 21001",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS%20EOMS%20Department%20Check%20List%20ISO%2021001.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS EOMS Internal Audit Notes ISO 21001",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS%20EOMS%20Internal%20Audit%20Notes%20ISO%2021001.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS EOMS Course File Audit ISO 21001",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS%20EOMS%20Course%20File%20Audit%20ISO%2021001.pdf",
        "type": "pdf"
      },
      {
        "title": "Comparison of NAAC Criteria and ISO 210012018 EOMS Clauses",
        "url": "https://mits.ac.in/assets/pdf/iqac/Comparison%20of%20NAAC%20Criteria%20and%20ISO%20210012018%20EOMS%20Clauses.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS Check List - Laboratory Audit",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS%20Check%20List%20Laboratory%20Audit.pdf",
        "type": "pdf"
      },
      {
        "title": "Sample Laboratory MITS EOMS Internal Audit Notes ISO 21001",
        "url": "https://mits.ac.in/assets/pdf/iqac/Sample_Laboratory_MITS EOMS Internal Audit Notes ISO 21001.pdf",
        "type": "pdf"
      },
      {
        "title": "Sample 1 Lab Course MITS EOMS Internal Audit Notes ISO 21001",
        "url": "https://mits.ac.in/assets/pdf/iqac/Sample1_Lab_course_MITS EOMS Internal Audit Notes ISO 21001.pdf",
        "type": "pdf"
      },
      {
        "title": "Sample 2 Lab Course MITS EOMS Internal Audit Notes ISO 21001",
        "url": "https://mits.ac.in/assets/pdf/iqac/Sample_2_Lab_course_MITS EOMS Internal Audit Notes ISO 21001.pdf",
        "type": "pdf"
      },
      {
        "title": "Sample Theory Course MITS EOMS Internal Audit Notes ISO 21001",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Course File Audit ISO 21001 template.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS EOMS Theory Course File Audit ISO 21001 2024-25",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Theory Course File Audit ISO 21001 2024-25.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS EOMS Lab Course File Audit ISO 21001 2024-25",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Lab Course File Audit ISO 21001 2024-25.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS EOMS Internal Audit Notes ISO 21001 Curriculum Design",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS EOMS Internal Audit Notes ISO 21001 Curriculum Design.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "no": 33,
    "title": "NAAC Formats",
    "docs": [
      {
        "title": "NAAC AQAR’S Support Documents",
        "url": "https://mits.ac.in/assets/pdf/iqac/AQAR_MITS%20Support%20Documents.pdf",
        "type": "pdf"
      },
      {
        "title": "NAAC Supporting Document Manual - Quantitative Inputs For AQAR",
        "url": "https://mits.ac.in/assets/pdf/iqac/Supporting%20Document%20Manual%20-%20Quantitative%20Inputs%20For%20AQAR.pdf",
        "type": "pdf"
      },
      {
        "title": "NAAC Benchmarks and SOP (Standard Operating Procedures)",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS_benchmarks-_IQAC.xlsx",
        "type": "xlsx"
      },
      {
        "title": "NAAC AQAR Benchmarks & SOP",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS-AQAR-Benchmarks-SOP.pdf",
        "type": "pdf"
      },
      {
        "title": "Stakeholders Feedback - Action Taken Report Format",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS Dept_Stakeholders Action Taken Report_format.docx",
        "type": "doc"
      },
      {
        "title": "Correlation between New NAAC Reforms 2024 & Existing NAAC Criterion (Key Indicators)",
        "url": "https://mits.ac.in/assets/pdf/iqac/Correlation between New NAAC Reforms 2024 & Existing NAAC Criterion Key Indicators.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS Responsibilities Matrix for NAAC 2024 Reforms (MBGL)",
        "url": "https://mits.ac.in/assets/pdf/iqac/New Reforms Correlation and MIts Responsibilities.pdf",
        "type": "pdf"
      },
      {
        "title": "Extended Profile Mapping Between SSR and AQAR (Autonomous College-Manual)",
        "url": "https://mits.ac.in/assets/pdf/iqac/Extended Profile Mapping Between SSR and AQAR(Autonomous College-Manual).pdf",
        "type": "pdf"
      },
      {
        "title": "NAAC RAF SSR NEW Format (9-8-2023) (Autonomous College)",
        "url": "https://mits.ac.in/assets/pdf/iqac/NAAC RAF SSR NEW Format (9-8-2023)(Autonomous College).pdf",
        "type": "pdf"
      },
      {
        "title": "Criterion_1_Curricular_Aspects_SSR_AQAR_Mapping",
        "url": "https://mits.ac.in/assets/pdf/iqac/Criterion_1_Curricular_Aspects_SSR_AQAR_Mapping_Autonomous_College-1.pdf",
        "type": "pdf"
      },
      {
        "title": "Criterion II – Teaching-Learning and Evaluation_SSR_AQAR_Mapping",
        "url": "https://mits.ac.in/assets/pdf/iqac/Criterion II – Teaching-Learning and Evaluation_SSR_AQAR_Mapping_Autonomous_College-1.pdf",
        "type": "pdf"
      },
      {
        "title": "Criterion III – Research, Innovations and Extension _SSR_AQAR_Mapping",
        "url": "https://mits.ac.in/assets/pdf/iqac/Criterion III – – Research, Innovations and Extension _SSR_AQAR_Mapping_Autonomous_College-2-1.pdf",
        "type": "pdf"
      },
      {
        "title": "Criterion IV – Infrastructure and Learning Resources _SSR_AQAR_Mapping",
        "url": "https://mits.ac.in/assets/pdf/iqac/Criterion IV – Infrastructure and Learning Resources _SSR_AQAR_Mapping_Autonomous_College.pdf",
        "type": "pdf"
      },
      {
        "title": "Criterion V – Student Support and Progression_SSR_AQAR_Mapping",
        "url": "https://mits.ac.in/assets/pdf/iqac/Criterion V – Student Support and Progression_SSR_AQAR_Mapping_Autonomous_College.pdf",
        "type": "pdf"
      },
      {
        "title": "Criterion VI – Governance, Leadership and Management_SSR_AQAR_Mapping",
        "url": "https://mits.ac.in/assets/pdf/iqac/Criterion VI – Governance.pdf",
        "type": "pdf"
      },
      {
        "title": "Criterion VII –Institutional Values and Best Practices _SSR_AQAR_Mapping",
        "url": "https://mits.ac.in/assets/pdf/iqac/Criterion VII –Institutional Values and Best Practices _SSR_AQAR_Mapping_Autonomous_College.pdf",
        "type": "pdf"
      },
      {
        "title": "NBA-NAAC Comparison",
        "url": "https://mits.ac.in/assets/pdf/iqac/NBA-NAAC Comparsion.xlsx",
        "type": "xlsx"
      },
      {
        "title": "MITS NAAC AQAR SSR Mapping Supporting Document Manual Criteria I-II-III",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS_NAAC_AQAR-SSR Mapping _Supporting_Document_Manual_Criteria-I_II_III.docx",
        "type": "doc"
      },
      {
        "title": "MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion IV",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS_NAAC_AQAR-SSR Mapping _Supporting_Document_Manual_Criterion-IV.docx",
        "type": "doc"
      },
      {
        "title": "MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion V",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS_NAAC_AQAR-SSR Mapping _Supporting_Document_Manual_Criterion-V.docx",
        "type": "doc"
      },
      {
        "title": "MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion VI",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS_NAAC_AQAR_SSR Mapping _Supporting_Document_Manual_Criterion-VI.docx",
        "type": "doc"
      },
      {
        "title": "MITS NAAC AQAR SSR Mapping Supporting Document Manual Criterion VII",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS_NAAC_AQAR_SSR Mapping _Supporting_Document_Manual_Criterion-VII.docx",
        "type": "doc"
      }
    ]
  },
  {
    "no": 34,
    "title": "NBA / Outcome Based Education (OBE) Formats",
    "docs": [
      {
        "title": "R23 CO-PO-Assesment Template - UG Engineering",
        "url": "https://mits.ac.in/assets/pdf/iqac/R23 CO-PO-Assesment Template - UG Engineering.rar",
        "type": "link"
      },
      {
        "title": "R20 CO-PO-Assesment Template - UG Engineering",
        "url": "https://mits.ac.in/assets/pdf/iqac/R20_CO-PO-Assesment_Template-UG Engineering.rar",
        "type": "link"
      },
      {
        "title": "NBA (New SAR) - List of Files to be Maintained in the ENGG Departments",
        "url": "https://www.nbaind.org/files/UG_Acrreditaion/10-List%20of%20documents-UG-EG-T1-5-7-24.pdf",
        "type": "pdf"
      },
      {
        "title": "NBA Supporting Document Manual - Program Specific Files",
        "url": "https://mits.ac.in/assets/pdf/iqac/NBA%20Supporting%20Document%20Manual%20-%20Program%20Specific%20Files.pdf",
        "type": "pdf"
      },
      {
        "title": "NBA - List of Files to be Maintained in the BSH Department",
        "url": "https://mits.ac.in/assets/pdf/iqac/NBA - List of Files to be Maintained in the BSH Department.pdf",
        "type": "pdf"
      },
      {
        "title": "NBA - List of Files to be Maintained in the ENGG Departments",
        "url": "https://mits.ac.in/assets/pdf/iqac/NBA - List of Files to be Maintained in the ENGG Departments.pdf",
        "type": "pdf"
      },
      {
        "title": "NBA - List of Files to be Maintained in the MBA Department",
        "url": "https://mits.ac.in/assets/pdf/iqac/NBA - List of Files to be Maintained in the MBA Department.pdf",
        "type": "pdf"
      },
      {
        "title": "NBA - List of Files to be Maintained in the MCA Department",
        "url": "https://mits.ac.in/assets/pdf/iqac/NBA - List of Files to be Maintained in the MCA Department.pdf",
        "type": "pdf"
      },
      {
        "title": "AICTE CO-PO Mapping Template CSE Allied Branches",
        "url": "https://mits.ac.in/assets/pdf/iqac/AICTE CO-PO Mapping Template_CSE Allied Branches.xlsx",
        "type": "xlsx"
      },
      {
        "title": "AICTE CO-PO Mapping Template Core Branches",
        "url": "https://mits.ac.in/assets/pdf/iqac/AICTE CO-PO Mapping Template_Core Branches.xlsx",
        "type": "xlsx"
      },
      {
        "title": "Complex Engineering Problem Solving CPS Form",
        "url": "https://mits.ac.in/assets/pdf/iqac/Complex Engineering Problem-Solving _CPS_Form.xlsx",
        "type": "xlsx"
      },
      {
        "title": "Program Outcomes (PO) Mapping with WA & WK",
        "url": "https://mits.ac.in/assets/pdf/iqac/Program Outcomes (PO) Mapping with WA & WK.xlsx",
        "type": "xlsx"
      },
      {
        "title": "SDG Mapping",
        "url": "https://mits.ac.in/assets/pdf/iqac/SDG Mapping.xlsx",
        "type": "xlsx"
      },
      {
        "title": "IEA-GAPC2021 Graduate Attributes & Professional Competencies",
        "url": "https://mits.ac.in/assets/pdf/iqac/IEA-GAPC2021_GRADUATE ATTRIBUTES & PROFESSIONAL COMPETENCIES.xlsx",
        "type": "xlsx"
      },
      {
        "title": "Mapping of Courses to Knowledge Profile (WK)",
        "url": "https://mits.ac.in/assets/pdf/iqac/Mapping of Courses to Knowledge Profile (WK).xlsx",
        "type": "xlsx"
      },
      {
        "title": "SDG-Global-Indicator-Framework-after-2024-refinement",
        "url": "https://unstats.un.org/sdgs/indicators/Global-Indicator-Framework-after-2024-refinement-English.pdf",
        "type": "pdf"
      },
      {
        "title": "SDG-Global-Indicator-Framework-after-2024-refinement",
        "url": "https://unstats.un.org/sdgs/indicators/Global-Indicator-Framework-after-2024-refinement-English.xlsx",
        "type": "xlsx"
      },
      {
        "title": "SDG-The Impact Rankings Template",
        "url": "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fthe-ranking.s3.eu-west-1.amazonaws.com%2FIMPACT%2FIMPACT2023%2FImpact%2B2023-data%2Bcollection%2Bsupport_updated%2Bv1.xlsx&wdOrigin=BROWSEView",
        "type": "link"
      },
      {
        "title": "QP Analysis Basis of Blooms Level Template",
        "url": "https://mits.ac.in/assets/pdf/iqac/IQAC_QP Analysis Basis of Blooms Level_Template.xlsx",
        "type": "xlsx"
      }
    ]
  },
  {
    "no": 35,
    "title": "NIRF Formats",
    "docs": [
      {
        "title": "NIRF Department Data Template",
        "url": "https://mits.ac.in/assets/pdf/iqac/NIRF- Department_data_template_MITS(3).xlsx",
        "type": "xlsx"
      },
      {
        "title": "NIRF Financial Data Template",
        "url": "https://mits.ac.in/assets/pdf/iqac/NIRF - Financial_data_template_MITS(3).xlsx",
        "type": "xlsx"
      }
    ]
  },
  {
    "no": 36,
    "title": "Check List",
    "docs": [
      {
        "title": "Check List- Anti-Ragging Committee (ARC)",
        "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Anti-Ragging Committee (ARC).pdf",
        "type": "pdf"
      },
      {
        "title": "Check List- Culturals",
        "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Culturals.pdf",
        "type": "pdf"
      },
      {
        "title": "Check List- Events Organized (NSS_NCC)",
        "url": "https://mits.ac.in/assets/pdf/iqac/Check List- EVENTS ORGANIZED (NSS_NCC).pdf",
        "type": "pdf"
      },
      {
        "title": "Check List- Events Organized",
        "url": "https://mits.ac.in/assets/pdf/iqac/Check%20List-%20Events%20Organized.pdf",
        "type": "pdf"
      },
      {
        "title": "Check List- Grievances and Redressal Committee (GRC)",
        "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Grievances and Redressal Committee (GRC).pdf",
        "type": "pdf"
      },
      {
        "title": "Check List- Internal Complaint Committee (ICC)",
        "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Internal Complaint Committee (ICC).pdf",
        "type": "pdf"
      },
      {
        "title": "Check List- Sports",
        "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Sports.pdf",
        "type": "pdf"
      },
      {
        "title": "Check List- Stakeholders Feedback",
        "url": "https://mits.ac.in/assets/pdf/iqac/Check List- Stakeholders Feedback.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS Check List - Value Added Course",
        "url": "https://mits.ac.in/assets/pdf/iqac/Check%20lIst-Value%20Added%20Course.pdf",
        "type": "pdf"
      },
      {
        "title": "MITS Check List - DAB, PAC & IAAB",
        "url": "https://mits.ac.in/assets/pdf/iqac/Check List-DAB-PAC-IAAB.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "no": 37,
    "title": "Faculty Personal File",
    "docs": [
      {
        "title": "Faculty Personal File",
        "url": "https://mits.ac.in/assets/pdf/iqac/37_Personal File_template_2024.docx",
        "type": "doc"
      }
    ]
  },
  {
    "no": 38,
    "title": "NEP 2020 – Active Learning Methods",
    "docs": [
      {
        "title": "UGC’s Innovative Pedagogical Approaches",
        "url": "https://www.ugc.gov.in/pdfnews/1031121_Guidelines-Innovative-Pedagogical-Approaches-Evaluation-Reforms.pdf",
        "type": "pdf"
      },
      {
        "title": "228-Active-Learning-Strategies",
        "url": "https://mits.ac.in/assets/pdf/iqac/handout-interactive-techniques.pdf",
        "type": "pdf"
      },
      {
        "title": "3-2-1 Technique",
        "url": "https://mits.ac.in/assets/pdf/iqac/3-2-1 Technique.pdf",
        "type": "pdf"
      },
      {
        "title": "Analytic Teams",
        "url": "https://mits.ac.in/assets/pdf/iqac/Analytic Teams.pdf",
        "type": "pdf"
      },
      {
        "title": "Blended Learning",
        "url": "https://mits.ac.in/assets/pdf/iqac/Blended Learning.pdf",
        "type": "pdf"
      },
      {
        "title": "Case Based Learning",
        "url": "https://mits.ac.in/assets/pdf/iqac/Case Based Learning.pdf",
        "type": "pdf"
      },
      {
        "title": "Contemporary Issues Journal",
        "url": "https://mits.ac.in/assets/pdf/iqac/Contemporary Issues Journal.pdf",
        "type": "pdf"
      },
      {
        "title": "Digital Story",
        "url": "https://mits.ac.in/assets/pdf/iqac/Digital Story.pdf",
        "type": "pdf"
      },
      {
        "title": "Experential Learning",
        "url": "https://mits.ac.in/assets/pdf/iqac/Experential Learning.pdf",
        "type": "pdf"
      },
      {
        "title": "FishBowl",
        "url": "https://mits.ac.in/assets/pdf/iqac/FishBowl.pdf",
        "type": "pdf"
      },
      {
        "title": "Flipped Classroom",
        "url": "https://mits.ac.in/assets/pdf/iqac/Flipped Classroom.pdf",
        "type": "pdf"
      },
      {
        "title": "Group Grid",
        "url": "https://mits.ac.in/assets/pdf/iqac/Group Grid.pdf",
        "type": "pdf"
      },
      {
        "title": "Jeopardy",
        "url": "https://mits.ac.in/assets/pdf/iqac/Jeopardy.pdf",
        "type": "pdf"
      },
      {
        "title": "Jig Saw",
        "url": "https://mits.ac.in/assets/pdf/iqac/Jig Saw.pdf",
        "type": "pdf"
      },
      {
        "title": "Mind Mapping",
        "url": "https://mits.ac.in/assets/pdf/iqac/Mind Mapping.pdf",
        "type": "pdf"
      },
      {
        "title": "Peer Assisted Learning",
        "url": "https://mits.ac.in/assets/pdf/iqac/Peer Assisted Learning.pdf",
        "type": "pdf"
      },
      {
        "title": "The Minute Paper",
        "url": "https://mits.ac.in/assets/pdf/iqac/The Minute Paper.pdf",
        "type": "pdf"
      },
      {
        "title": "Think Pair Share",
        "url": "https://mits.ac.in/assets/pdf/iqac/Think Pair Share.pdf",
        "type": "pdf"
      },
      {
        "title": "Three Minute Message",
        "url": "https://mits.ac.in/assets/pdf/iqac/Three Minute Message.pdf",
        "type": "pdf"
      },
      {
        "title": "Problem Based Learning",
        "url": "https://mits.ac.in/assets/pdf/iqac/Problem Based Learning.pdf",
        "type": "pdf"
      },
      {
        "title": "Project Based Learning",
        "url": "https://mits.ac.in/assets/pdf/iqac/Project based Learning.pdf",
        "type": "pdf"
      },
      {
        "title": "Learning Outcomes",
        "url": "https://mits.ac.in/assets/pdf/iqac/Learning Outcomes.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "no": 39,
    "title": "NEP 2020 – WIT & WIL Method",
    "docs": [
      {
        "title": "NEP 2020 – WIT& WIL Method Sample Template",
        "url": "https://mits.ac.in/assets/pdf/iqac/Sample Template_WIT& WIL method.pdf",
        "type": "pdf"
      },
      {
        "title": "WIT & WIL Method",
        "url": "https://mits.ac.in/assets/pdf/iqac/WIT & WIL Method.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "no": 40,
    "title": "NEP 2020 – MITS Lab Protocol",
    "docs": [
      {
        "title": "NEP 2020 – MITS Lab Protocol",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS Lab Protocol 6.11.24.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "no": 41,
    "title": "NEP 2020 – Show & Tell Corner",
    "docs": [
      {
        "title": "NEP 2020 – Show & Tell Corner",
        "url": "https://mits.ac.in/assets/pdf/iqac/Show & Tell Corner.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "no": 42,
    "title": "Sustainable Development Goals (SDG)",
    "docs": [
      {
        "title": "MITS SDG Cell",
        "url": "https://mits.ac.in/sdg-cell",
        "type": "link"
      },
      {
        "title": "SDG Mapping",
        "url": "https://mits.ac.in/assets/pdf/iqac/SDG-Mapping.xlsx",
        "type": "xlsx"
      },
      {
        "title": "SDG Events Mapping Template",
        "url": "https://mits.ac.in/assets/pdf/iqac/SDG Events Mapping _Template.xlsx",
        "type": "xlsx"
      },
      {
        "title": "SDG Curriculum Mapping Template",
        "url": "https://mits.ac.in/assets/pdf/iqac/SDG_Curriculum_Mapping_Template.xlsx",
        "type": "xlsx"
      },
      {
        "title": "SDG Project Mapping Template",
        "url": "https://mits.ac.in/assets/pdf/iqac/SDG Project Mapping _Template.xlsx",
        "type": "xlsx"
      },
      {
        "title": "SDG Internship Mapping Template",
        "url": "https://mits.ac.in/assets/pdf/iqac/SDG Internship Mapping _Template.xlsx",
        "type": "xlsx"
      },
      {
        "title": "SDG-The Impact Rankings Template",
        "url": "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fthe-ranking.s3.eu-west-1.amazonaws.com%2FIMPACT%2FIMPACT2023%2FImpact%2B2023-data%2Bcollection%2Bsupport_updated%2Bv1.xlsx&wdOrigin=BROWSEView",
        "type": "link"
      },
      {
        "title": "SDG: QS Sustainability Rankings Template",
        "url": "https://mits.ac.in/assets/pdf/iqac/SDG-QS Sustainability Rankings Template.xlsx",
        "type": "xlsx"
      },
      {
        "title": "Sample Procedure for SDG Curriculum Mapping",
        "url": "https://mits.ac.in/assets/pdf/iqac/Sample Procedure for SDG Curriculum Mapping.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "no": 43,
    "title": "MITS DTBU Policy Formats",
    "docs": [
      {
        "title": "Draft Policy Document Format",
        "url": "https://mits.ac.in/assets/pdf/iqac/01_DRAFT_POLICY_DOCUMENT_FORMAT.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "no": 44,
    "title": "Outcome Based Education (OBE)",
    "docs": [
      {
        "title": "OBE Teaching Formula",
        "url": "https://mits.ac.in/assets/pdf/iqac/OBE Teaching Formula.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "no": 45,
    "title": "AI in Teaching and Learning",
    "docs": [
      {
        "title": "AI in Teaching and Learning",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS DTBU_ AI Tools Teaching & Learning-compressed.pdf",
        "type": "pdf"
      },
      {
        "title": "AI Visual Guides for Educators",
        "url": "https://medkharbach.com/visuals/",
        "type": "link"
      },
      {
        "title": "AI Literacy Guides",
        "url": "https://medkharbach.com/ai-literacy-guides/",
        "type": "link"
      },
      {
        "title": "AI PDP 2026 Material",
        "url": "https://mitsacin-my.sharepoint.com/:f:/g/personal/iqaccell_mits_ac_in/IgBrcDUBn35qQ5ssGj35VXnoASLgg70R5kObtWG7w4ya8aY?e=xjhvzp​",
        "type": "link"
      }
    ]
  }
];

// ---------------- POLICIES ----------------
export const iqacPolicies: Doc[] = [
  {
    "title": "IQAC Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/IQAC Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "EOMS Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/EOMS Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Central Library Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Central Library Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Consultancy Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Consultancy Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Examination Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Examination Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Information Security Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Information Security Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Innovation & Startup Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Innovation & Startup Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Intellectual Property Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Intellectual Property Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "International Relations Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/International Relations Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "IPR Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/IPR Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Research & Development Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Research & Development Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Sports Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Sports Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Teaching - Learning Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Teaching - Learning Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Training and Placement Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Training and Placement Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Teacher Training Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Teacher Training Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Transport Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Transport Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Alumni Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Alumni Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Stakeholders Feedback Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS-Stakeholder%20Feedback-Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Academic and Administrative Audit Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS IQAC Academic Audit Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Anti-Discrimination Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Anti-Discrimination Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Anti-Harassment Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/ANTI-HARASSMENT POLICY.pdf",
    "type": "pdf"
  },
  {
    "title": "Disability Accommodation Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/DISABILITY ACCOMMODATION POLICY.pdf",
    "type": "pdf"
  },
  {
    "title": "Energy Efficient Renovation And Building Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/ENERGY EFFICIENT RENOVATION AND BUILDING POLICY.pdf",
    "type": "pdf"
  },
  {
    "title": "Gender Equity Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/GENDER EQUITY POLICY.pdf",
    "type": "pdf"
  },
  {
    "title": "Life Long Learning Access Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/LIFE LONG LEARNING ACCESS POLICY.pdf",
    "type": "pdf"
  },
  {
    "title": "Policy Addressing Poverty",
    "url": "https://mits.ac.in/assets/pdf/iqac/POLICY ADDRESSING POVERTY.pdf",
    "type": "pdf"
  },
  {
    "title": "Policy Development For Clean Energy Technology",
    "url": "https://mits.ac.in/assets/pdf/iqac/POLICY DEVELOPMENT FOR CLEAN ENERGY TECHNOLOGY.pdf",
    "type": "pdf"
  },
  {
    "title": "Policy For Minimization Of Plastic Use",
    "url": "https://mits.ac.in/assets/pdf/iqac/POLICY FOR MINIMIZATION OF PLASTIC USE.pdf",
    "type": "pdf"
  },
  {
    "title": "Policy Waste Disposal – Hazardous Materials",
    "url": "https://mits.ac.in/assets/pdf/iqac/POLICY WASTE DISPOSAL – HAZARDOUS MATERIALS.pdf",
    "type": "pdf"
  },
  {
    "title": "Smoke-Free Campus Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/SMOKE-FREE CAMPUS POLICY.pdf",
    "type": "pdf"
  },
  {
    "title": "Water Reuse Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/WATER REUSE POLICY.pdf",
    "type": "pdf"
  },
  {
    "title": "Integrated Management System (IMS - Environment & Energy) Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/IMS-Policy MITS.pdf",
    "type": "pdf"
  },
  {
    "title": "About Us",
    "url": "/about",
    "type": "link"
  },
  {
    "title": "Contact Us",
    "url": "/contact",
    "type": "link"
  },
  {
    "title": "Website Privacy Policy",
    "url": "/privacy-policy",
    "type": "link"
  },
  {
    "title": "Terms & Conditions Policy",
    "url": "/terms-conditions-policy",
    "type": "link"
  },
  {
    "title": "Refund Policy",
    "url": "/refund-policy",
    "type": "link"
  }
];
export const mitsDtbuPolicies: Doc[] = [
  {
    title: "Women Empowerment Cell Policy",
    url: "https://mits.ac.in/assets/pdf/iqac/WEC Policy.pdf",
    type: "pdf"
  },
  {
    title: "MITS IETE Policy",
    url: "https://mits.ac.in/assets/pdf/iqac/MITS IETE Policy.pdf",
    type: "pdf"
  },
  {
    title: "MITS Universal Human Values Cell Policy",
    url: "https://mits.ac.in/assets/pdf/assoc/UHV%20Cell%20Policy%20document%20ver01_25-26.pdf",
    type: "pdf"
  },
  {
    title: "MITS Anti-Ragging Cell Policy",
    url: "https://mits.ac.in/assets/pdf/iqac/ver1_POLICY DOCUMENT OF ANTI-RAGGING CELL.pdf",
    type: "pdf"
  },
  {
    title: "MITS SC ST Policy",
    url: "https://mits.ac.in/assets/pdf/iqac/MITS SC ST Policy Document .pdf",
    type: "pdf"
  },
  {
    title: "Internal Complaints Committee (ICC) Policy",
    url: "https://mits.ac.in/assets/pdf/iqac/ICC Policy.pdf",
    type: "pdf"
  },
  {
    title: "Students\' Grievance Redressal Committee (SGRC) Policy",
    url: "https://www.mits.ac.in/assets/pdf/admin/Students%20Grievance%20Redressal%20Policy.pdf",
    type: "pdf"
  },
  {
    "title": "Internal Quality Assurance Cell Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS DTBU Internal Quality Assurnace Cell Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Anti Bribery Corruption Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Anti%20Bribery%20%20Corruption%20Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Climate Action Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Climate%20Action%20Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Sustainable Investment Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Diversity%20and%20Inclusion%20Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Equality, Diversity and Inclusion Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Equality.pdf",
    "type": "pdf"
  },
  {
    "title": "Sustainable Procurement Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Sustainable%20Investment%20Policy.pdf",
    "type": "pdf"
  },
  {
    "title": "Industry Relations Cell Policy Document 2026",
    "url": "https://mits.ac.in/assets/pdf/iqac/Industry Relations Cell _ Policy Document_2026.pdf",
    "type": "pdf"
  },
  {
    "title": "Integrated Management System Policy (ISO 14001:2015 and ISO 50001:2018)",
    "url": "https://mits.ac.in/assets/pdf/iqac/Approved%20IMS%20Policy_ISO.pdf",
    "type": "pdf"
  },
  {
    "title": "Minority Cell Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Minority Cell Policy Document(1)-1.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS Radio 90.8 MHz Community Radio Station Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/POLICY DOCUMENT _ MITS Radio _ Signed.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS IEEE Student Branch Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS IEEE SB DTBU Policy.pdf",
    "type": "pdf"
  }
];

// ---------------- MEETINGS ----------------
export const meetingsMom: Doc[] = [
  {
    title: "MoM 2024-25",
    url: "https://mits.ac.in/public/uploads/naac/IQAC_MoM 2024-25.pdf",
    type: "pdf"
  },
  {
    "title": "IQAC Committee",
    "url": "https://mits.ac.in/public/uploads/naac/Composition%20of%20IQAC.pdf",
    "type": "pdf"
  },
  {
    "title": "MoM 2025-26",
    "url": "https://mits.ac.in/public/uploads/naac/MoM 2025-26.pdf",
    "type": "pdf"
  },
  {
    "title": "MoM 2023-24",
    "url": "https://mits.ac.in/public/uploads/naac/MoM 2023-24.pdf",
    "type": "pdf"
  },
  {
    "title": "MoM 2022-23",
    "url": "https://mits.ac.in/public/uploads/naac/MoM_2022-2023.pdf",
    "type": "pdf"
  },
  {
    "title": "MoM 2021-22",
    "url": "https://mits.ac.in/public/uploads/naac/IQAC%20MINUTES%20OF%20MEETING%202021%20-2022.pdf",
    "type": "pdf"
  },
  {
    "title": "MoM 2020-21",
    "url": "https://mits.ac.in/public/uploads/naac/0fde145546a6c0e9d269571626392b6d.pdf",
    "type": "pdf"
  },
  {
    "title": "MoM 2019-20",
    "url": "https://mits.ac.in/public/uploads/naac/2dba8e25c77e6c7ac33aa492458bb520.pdf",
    "type": "pdf"
  },
  {
    "title": "MoM 2018-19",
    "url": "https://mits.ac.in/public/uploads/naac/86b13e657eeba50d11452a0f0f0c54fd.pdf",
    "type": "pdf"
  },
  {
    "title": "Action Taken Report 2021-22",
    "url": "https://mits.ac.in/public/uploads/naac/ATR 2021-22.pdf",
    "type": "pdf"
  },
  {
    "title": "Action Taken Report 2020-21",
    "url": "https://mits.ac.in/public/uploads/naac/ATR 2020-21.pdf",
    "type": "pdf"
  },
  {
    "title": "Action Taken Report 2019-20",
    "url": "https://mits.ac.in/public/uploads/naac/ATR 2019-20.pdf",
    "type": "pdf"
  },
  {
    "title": "Action Taken Report 2018-19",
    "url": "https://mits.ac.in/public/uploads/naac/ATR 2018-19.pdf",
    "type": "pdf"
  }
];
export const meetingsDtbu: Doc[] = [
  {
    "title": "IQAC Committee",
    "url": "https://mits.ac.in/public/uploads/naac/Composition%20of%20IQAC.pdf",
    "type": "pdf"
  },
  {
    "title": "MoM 2025-26",
    "url": "https://mits.ac.in/public/uploads/naac/MoM-2025-26.pdf",
    "type": "pdf"
  },
  {
    "title": "Action Taken Report 2021-22",
    "url": "https://mits.ac.in/public/uploads/naac/ATR 2021-22.pdf",
    "type": "pdf"
  },
  {
    "title": "Action Taken Report 2020-21",
    "url": "https://mits.ac.in/public/uploads/naac/ATR 2020-21.pdf",
    "type": "pdf"
  },
  {
    "title": "Action Taken Report 2019-20",
    "url": "https://mits.ac.in/public/uploads/naac/ATR 2019-20.pdf",
    "type": "pdf"
  },
  {
    "title": "Action Taken Report 2018-19",
    "url": "https://mits.ac.in/public/uploads/naac/ATR 2018-19.pdf",
    "type": "pdf"
  },
  {
    "title": "IQAC Committee",
    "url": "https://mits.ac.in/public/uploads/naac/Composition%20of%20IQAC.pdf",
    "type": "pdf"
  },
  {
    "title": "Admin Audit Format",
    "url": "https://mits.ac.in/public/uploads/naac/ADMIN%20AUDIT%20FORMAT.pdf",
    "type": "pdf"
  },
  {
    "title": "Department Audit Format",
    "url": "https://mits.ac.in/public/uploads/naac/DEPARTMENT%20AUDIT%20FORMAT.pdf",
    "type": "pdf"
  },
  {
    "title": "Faculty Audit Format",
    "url": "https://mits.ac.in/public/uploads/naac/FACULTY%20AUDIT%20FORMAT.pdf",
    "type": "pdf"
  }
];

// ---------------- QUALITY INITIATIVES ----------------
export const qualityInitiativesOverview = [
  { title: "Outcome Based Education (OBE)", desc: "Systematic implementation of OBE across UG/PG with defined POs, PSOs, COs, direct/indirect attainment, and closing-the-loop reviews." },
  { title: "Academic & Administrative Audits", desc: "Annual Internal & External AAA with action-taken reports, gap analysis and continuous improvement." },
  { title: "Faculty Development", desc: "NITTTR PDPs, Guru Dakshta Faculty Induction Programme, and department-level capability building." },
  { title: "Student Development", desc: "Mentoring, bridge courses, remedial classes, value-added resources, life-skills and career progression tracking." },
  { title: "Stakeholder Feedback Loop", desc: "Structured feedback from students, faculty, parents, alumni, employers with published ATR & evidence." },
  { title: "Best Practices & Distinctive Performance", desc: "Institutionalized best practices with measurable outcomes and distinct MITS identity in research, sports, culture and social impact." },
  { title: "ISO 21001:2018 EOMS", desc: "Educational Organizations Management System — surveillance audits by TUV SUD, aligned with NAAC criteria." },
  { title: "e-Content & Digital Learning", desc: "MITS e-Content Development Center, faculty e-content repository, SOP and declaration frameworks." }
];

export const qualityInitiatives: Doc[] = [
  {
    "title": "QA Initiatives",
    "url": "https://mits.ac.in/public/uploads/naac/QA%20Initiatives.pdf",
    "type": "pdf"
  },
  {
    "title": "QA Initiatives 2022-23",
    "url": "https://mits.ac.in/public/uploads/naac/QA 2022-23.pdf",
    "type": "pdf"
  },
  {
    "title": "QA Initiatives 2021-22",
    "url": "https://mits.ac.in/public/uploads/naac/QA 2021-22.pdf",
    "type": "pdf"
  },
  {
    "title": "MITS - IQAC Hours",
    "url": "https://mits.ac.in/assets/pdf/iqac/MITS-IQAC Hours.pdf",
    "type": "pdf"
  },
  {
    "title": "Total Quality Management in HEIs (Higher Education Institutions)",
    "url": "https://mits.ac.in/assets/pdf/iqac/TQM in HEIs.pdf",
    "type": "pdf"
  },
  {
    "title": "Academic Audit Process",
    "url": "https://mits.ac.in/assets/pdf/iqac/Academic Audit Process of IQAC.pdf",
    "type": "pdf"
  },
  {
    "title": "Student Feedback Process",
    "url": "https://mits.ac.in/assets/pdf/iqac/Student Feedback Process Flow.pdf",
    "type": "pdf"
  },
  {
    "title": "Fish Bone Chart",
    "url": "https://mits.ac.in/assets/pdf/iqac/Fish Bone Chart.pdf",
    "type": "pdf"
  },
  {
    "title": "Faculty Professional Growth Plan",
    "url": "https://mits.ac.in/assets/pdf/iqac/Faculty Professional Growth Plan.pdf",
    "type": "pdf"
  }
];

// ---------------- CONTACT ----------------
export const contact = {
  coordinator: "Dr. K. Sathesh",
  title: "IQAC & NAAC Coordinator",
  coCoordinator1: "Dr. S. Padma",
  coCoordinator1Title: "Co-Coordinator (Quality Measurements & Assurance)",
  coCoordinator2: "Dr. G. Sreenivasulu",
  coCoordinator2Title: "Co-Coordinator (Quality Sustenance, Initiative & Enhancement)",
  address: "Room No: WB211A, Madanapalle Institute of Technology & Science, Deemed to be University, Madanapalle-Kadiri Road, Kurabalakota Mandal, Madanapalle - 517325, Andhra Pradesh, India.",
  email: "iqaccoordinator@mits.ac.in",
  phone: "+91-8571-280255",
  mobile: "+91-9100902830"
};

export const bannerImage = "https://mits.ac.in/images/inner-banner.jpg";

export { iso21001Subtabs, type ISOSubtab } from "./isoData";
export { imsSubtabs, type IMSSubtab } from "./imsData";
export { aqarReportsList, aqarCriteriaData, type AQARCriterion, type AQARReportItem } from "./aqarData";
export { userReportsDocs, userFeedbackSections, userAaaDocs, userAaaRefDocs, userStrategicDocs, userBestPracticesDocs, userSssDocs, userAnnualReportsDocs, userIqacHoursDocs, userHandbookDocs, userUgcMandateDocs, userIqacEventsDocs, userEiqacDocs, userGalleryDocs, userManualsTableData } from "./userUpdatedSections";

export const actionPlanImg = "https://mits.ac.in/assets/images/IQAC Action Plan 2026-27.png";
export const milestonesImg = "https://mits.ac.in/assets/images/IQAC Milestones.png";

export const qualityInitiativeInfographics = [
  {
    title: "MITS IQAC Quality Framework",
    subtitle: "Comprehensive institutional quality framework across leadership, governance & academic metrics",
    src: "https://mits.ac.in/assets/images/MITS IQAC-Quality Framework.png",
    downloadUrl: "https://mits.ac.in/assets/pdf/iqac/MITS IQAC Quality Framework-1.pdf",
    downloadLabel: "Download Framework PDF"
  },
  {
    title: "MITS IQAC Monthly Quality Review | IQAC Hours",
    subtitle: "Systematic monthly departmental monitoring of academic progression, labs & faculty outcomes",
    src: "https://mits.ac.in/assets/images/MITS IQAC-Monthly review.png",
    downloadUrl: "https://mits.ac.in/assets/pdf/iqac/MITS-IQAC Hours.pdf",
    downloadLabel: "Download IQAC Hours PDF"
  },
  {
    title: "MITS IQAC Audit & Continuous Improvement",
    subtitle: "Internal & external audit cycle driving non-conformity tracking and evidence-backed resolution",
    src: "https://mits.ac.in/assets/images/MITS IQAC Audit & Continuous Improvement.png",
    downloadUrl: "https://mits.ac.in/assets/images/MITS IQAC Audit & Continuous Improvement.png",
    downloadLabel: "View Full Resolution Infographic"
  },
  {
    title: "MITS IQAC Stakeholder's Feedback Process",
    subtitle: "Multi-tier 360° stakeholder evaluation loop including students, faculty, employers, alumni & parents",
    src: "https://mits.ac.in/assets/images/MITS IQAC Stakeholder's Feedback Process.png",
    downloadUrl: "https://mits.ac.in/assets/pdf/iqac/Student Feedback Process Flow.pdf",
    downloadLabel: "Download Feedback Flow PDF"
  },
  {
    title: "MITS IQAC Strategic Plan",
    subtitle: "Long-term institutional development planning (IDP), five-year horizons, and milestone verification",
    src: "https://mits.ac.in/assets/images/MITS IQAC Strategic Plan.png",
    downloadUrl: "https://mits.ac.in/assets/images/MITS IQAC Strategic Plan.png",
    downloadLabel: "View Full Resolution Infographic"
  },
  {
    title: "MITS SDG Impact & Excellence",
    subtitle: "Global Sustainable Development Goals integration across teaching, campus operations and community",
    src: "https://mits.ac.in/assets/images/MITS SDG Impact & Excellence.png",
    downloadUrl: "https://mits.ac.in/assets/images/MITS SDG Impact & Excellence.png",
    downloadLabel: "View Full Resolution Infographic"
  },
  {
    title: "MITS National Education Policy (NEP) Quality Architecture",
    subtitle: "Implementation roadmap for multidisciplinary pedagogy, credit transfers and holistic competency frameworks",
    src: "https://mits.ac.in/assets/images/MITS NEP.png",
    downloadUrl: "https://mits.ac.in/assets/images/MITS NEP.png",
    downloadLabel: "View Full Resolution Infographic"
  }
];

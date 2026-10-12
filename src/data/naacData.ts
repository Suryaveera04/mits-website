export type DocLink = {
  title: string;
  url: string;
  type?: "pdf" | "video" | "link";
  metricId?: string;
};

const BASE = "https://mits.ac.in/public/uploads/naac/";
const DVV = "https://mits.ac.in/public/uploads/dvv/";

export const NAAC_GRADE = "A+";
export const NAAC_CYCLE = "Cycle 1 (Reassessment 2020)";
export const NAAC_INSTITUTE = "Madanapalle Institute of Technology & Science";

export const accreditationCore: DocLink[] = [
  { title: "NAAC Certificate", url: BASE + "9b55cb6cdd40bf4ca955cdd3a5383031.pdf", type: "pdf" },
  { title: "Peer Team Report", url: BASE + "Peer%20Team%20Report.pdf", type: "pdf" },
  { title: "Self Study Report (SSR)", url: BASE + "MITS-Updated-SSR-16.pdf", type: "pdf" },
  { title: "MITS NAAC Visit Video", url: "https://mits.ac.in/assets/videos/MITS-NAAC.mp4", type: "video" },
];

export const cycle1Documents: DocLink[] = [
  { title: "NAAC Certificate", url: BASE + "9b55cb6cdd40bf4ca955cdd3a5383031.pdf", type: "pdf" },
  { title: "NAAC Institutional Grade Sheet", url: BASE + "Institutional_Grade_Sheet.pdf", type: "pdf" },
  { title: "NAAC Peer Team Report", url: BASE + "NAAC%20PEER%20TEAM%20REPORT.pdf", type: "pdf" },
  { title: "Peer Team Metric-wise Score Report", url: BASE + "NAAC%20Peer%20Team%20Metric%20wise%20Score%20Report.pdf", type: "pdf" },
  { title: "NAAC Revised Advisory Committee", url: BASE + "NAAC%20Revised%20Advisory%20Committee.pdf", type: "pdf" },
  { title: "NAAC Undertaking", url: BASE + "NAAC%20Undertaking.pdf", type: "pdf" },
  { title: "NAAC Declaration", url: BASE + "NAAC%20%20Declaration.pdf", type: "pdf" },
  { title: "IIQA", url: BASE + "IIQA.pdf", type: "pdf" },
  { title: "SSR of MITS", url: BASE + "SSR%20of%20MITS.pdf", type: "pdf" },
];

export const aisheReports: DocLink[] = [
  { title: "AISHE 2024-25", url: BASE + "AISHE%20Certificate%202024-25.pdf", type: "pdf" },
  { title: "AISHE 2023-24", url: BASE + "AISHE%20Certificate%202023-24.pdf", type: "pdf" },
  { title: "AISHE 2022-23", url: BASE + "AISHE%20Certificate%202022-23.pdf", type: "pdf" },
  { title: "AISHE 2021-22", url: BASE + "AISHE%20Certificate%202021-22.pdf", type: "pdf" },
  { title: "AISHE 2020-21", url: BASE + "AISHE_Certificate%202020-21.pdf", type: "pdf" },
  { title: "AISHE 2019-20", url: BASE + "AISHE%20Certificate-2019-20.pdf", type: "pdf" },
  { title: "AISHE 2018-19", url: BASE + "f5af7fa3126e73f5849448285357c15b.pdf", type: "pdf" },
  { title: "AISHE 2017-18", url: BASE + "abb32c1c49e24a4aa4cc09776ea9f0e5.pdf", type: "pdf" },
  { title: "AISHE 2016-17", url: BASE + "b888a17d471e9045000bf6179deb334b.pdf", type: "pdf" },
  { title: "AISHE 2015-16", url: BASE + "3ea2b62d7c31398763fa3b97008d33ec.pdf", type: "pdf" },
];

export type Criterion = {
  number: number;
  title: string;
  description: string;
  url: string;
};

export type MetricDoc = {
  metricId: string;
  description: string;
  url: string;
};

export type CriterionWithMetrics = {
  number: number;
  title: string;
  description: string;
  url: string;
  metrics: MetricDoc[];
};

export const criteria: Criterion[] = [
  { number: 1, title: "Curricular Aspects", description: "Curriculum design, development, planning and implementation aligned with the institution's vision.", url: "https://mits.ac.in/criterion/1" },
  { number: 2, title: "Teaching, Learning & Evaluation", description: "Student-centric methods, assessment processes and quality of learning experiences.", url: "https://mits.ac.in/criterion/2" },
  { number: 3, title: "Research, Innovations & Extension", description: "Promotion of research culture, innovation ecosystem and community engagement.", url: "https://mits.ac.in/criterion/3" },
  { number: 4, title: "Infrastructure & Learning Resources", description: "Adequate physical, academic and support infrastructure to facilitate effective teaching-learning.", url: "https://mits.ac.in/criterion/4" },
  { number: 5, title: "Student Support & Progression", description: "Student support services, scholarships, progression to higher studies and placements.", url: "https://mits.ac.in/criterion/5" },
  { number: 6, title: "Governance, Leadership & Management", description: "Institutional vision, governance practices, strategy deployment and financial management.", url: "https://mits.ac.in/criterion/6" },
  { number: 7, title: "Institutional Values & Best Practices", description: "Gender equity, environmental consciousness, inclusive practices and institutional distinctiveness.", url: "https://mits.ac.in/criterion/7" },
];

export const criteriaWithMetrics: CriterionWithMetrics[] = [
  {
    number: 1,
    title: "Curricular Aspects",
    description: "Curriculum design, development, planning and implementation aligned with the institution's vision.",
    url: "https://mits.ac.in/criterion/1",
    metrics: [
      {
        metricId: "1.3.2",
        description: "Number of value-added courses for imparting transferable and life skills offered during last five years",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18794id_C1-DVV-1.3.2.pdf",
      },
      {
        metricId: "1.3.3",
        description: "Average Percentage of students enrolled in the courses under 1.3.2 above.",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18795id_C1-DVV-1.3.3.pdf",
      },
    ],
  },
  {
    number: 2,
    title: "Teaching, Learning & Evaluation",
    description: "Student-centric methods, assessment processes and quality of learning experiences.",
    url: "https://mits.ac.in/criterion/2",
    metrics: [
      {
        metricId: "2.1.1",
        description: "Average Enrollment percentage (Average of last five years)",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18817id_C2-DVV-2.1.1.pdf",
      },
      {
        metricId: "2.1.2",
        description: "Average percentage of seats filled against seats reserved for various categories (SC, ST, OBC, Divyangjan, etc. as per applicable reservation policy) during the last five years (exclusive of supernumerary seats)",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18821id_C2%20DVV%202.1.2.pdf",
      },
      {
        metricId: "2.2.2",
        description: "Student - Full time teacher ratio (Data for the latest completed academic year)",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18826id_C2-DVV-2.2.2.pdf",
      },
      {
        metricId: "2.3.3",
        description: "Ratio of mentor to students for academic and other related issues (Data for the latest completed academic year)",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18831id_C2-DVV-2.3.3.pdf",
      },
      {
        metricId: "2.4.1",
        description: "Average percentage of full time teachers against sanctioned posts during the last five years",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18852id_C2-DVV-2.4.1.pdf",
      },
      {
        metricId: "2.4.3",
        description: "Average teaching experience of full time teachers in the same institution (Data for the latest completed academic year in number of years)",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18854id_C2-DVV-2.4.3.pdf",
      },
      {
        metricId: "2.6.3",
        description: "Pass Percentage of students",
        url: "https://mits.ac.in/public/uploads/criterion/101542_19262id_C2-DVV-2.6.3.pdf",
      },
    ],
  },
  {
    number: 3,
    title: "Research, Innovations & Extension",
    description: "Promotion of research culture, innovation ecosystem and community engagement.",
    url: "https://mits.ac.in/criterion/3",
    metrics: [
      {
        metricId: "3.1.2",
        description: "The institution provides seed money to its teachers for research (average per year, INR in Lakhs)",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18882id_C3-DVV-3.1.2.pdf",
      },
      {
        metricId: "3.2.1",
        description: "Grants received from Government and non-governmental agencies for research projects, endowments, Chairs in the institution during the last five years (INR in Lakhs)",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18884id_C3-DVV-3.2.1.pdf",
      },
      {
        metricId: "3.2.2",
        description: "Percentage of teachers having research projects during the last five years",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18885id_C3-DVV-3.2.2.pdf",
      },
      {
        metricId: "3.2.3",
        description: "Percentage of teachers recognised as research guides",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18886id_C3-DVV-3.2.3.pdf",
      },
      {
        metricId: "3.3.2",
        description: "Number of workshops/seminars conducted on Research methodology, Intellectual Property Rights (IPR), entrepreneurship, skill development during the last five years.",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18889id_C3-DVV-3.3.2.pdf",
      },
      {
        metricId: "3.4.2",
        description: "Number of Ph.D's registered per teacher (as per the data given w.r.t recognized Ph.D guides/ supervisors provided at 3.2.3 metric) during the last five years.",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18891id_C3-DVV-3.4.2.pdf",
      },
      {
        metricId: "3.4.3",
        description: "Number of research papers per teachers in the Journals notified on UGC website during the last five years",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18892id_C3-DVV-3.4.3.pdf",
      },
      {
        metricId: "3.4.4",
        description: "Number of books and chapters in edited volumes published per teacher during the last five years.",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18893id_C3-DVV-3.4.4.pdf",
      },
      {
        metricId: "3.5.1",
        description: "Revenue generated from consultancy and corporate training during the last five years (INR in Lakhs).",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18896id_C3-DVV-3.5.1.pdf",
      },
      {
        metricId: "3.6.2",
        description: "Number of awards and recognition received by the Institution, its teachers and students for extension activities from Government / Government recognised bodies during last five years.",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18899id_C3-DVV-3.6.2.pdf",
      },
      {
        metricId: "3.7.1",
        description: "Number of Collaborative activities per year for research / faculty exchange / student exchange / internship / on-the-job training / project work.",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18902id_C3-DVV-3.7.1.pdf",
      },
    ],
  },
  {
    number: 4,
    title: "Infrastructure & Learning Resources",
    description: "Adequate physical, academic and support infrastructure to facilitate effective teaching-learning.",
    url: "https://mits.ac.in/criterion/4",
    metrics: [
      {
        metricId: "4.2.4",
        description: "Percentage per day usage of library by teachers and students during the last completed academic year",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18911id_C4-DVV-4.2.4.pdf",
      },
      {
        metricId: "4.3.2",
        description: "Student - Computer ratio (Data for the latest completed academic year)",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18913id_C4-DDV-4.3.2.pdf",
      },
      {
        metricId: "4.3.4",
        description: "Institution has the following Facilities for e-content development 1. Media centre 2. Audio visual centre 3. Lecture Capturing System(LCS) 4. Mixing equipments and softwares for editing",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18915id_C4-DVV-4.3.4.pdf",
      },
      {
        metricId: "5.4.2",
        description: "Alumni financial contribution during the last five years (in INR).",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18930id_C5-DVV-5.4.2.pdf",
      },
    ],
  },
  {
    number: 5,
    title: "Student Support & Progression",
    description: "Student support services, scholarships, progression to higher studies and placements.",
    url: "https://mits.ac.in/criterion/5",
    metrics: [
      {
        metricId: "5.2.1",
        description: "Average percentage of placement of outgoing students during the last five years",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18923id_C5-DVV-5.2.1.pdf",
      },
      {
        metricId: "5.2.3",
        description: "Average percentage of students qualifying in state/national/international level examinations during the last five years (eg: IIT/JAM/ NET/SLET/GATE/ GMAT/CAT/GRE/ TOEFL/ Civil Services/State government examinations, etc.)",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18925id_C5-DVV-5.2.3.pdf",
      },
      {
        metricId: "5.3.1",
        description: "Number of awards/medals for outstanding performance in sports/cultural activities at university/state/national/international level (award for a team event should be counted as one) during the last five years.",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18926id_C5-DVV-5.3.1.pdf",
      },
      {
        metricId: "5.3.3",
        description: "Average number of sports and cultural events / competitions organised by the institution per year.",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18928id_C5-DVV-5.3.3.pdf",
      },
    ],
  },
  {
    number: 6,
    title: "Governance, Leadership & Management",
    description: "Institutional vision, governance practices, strategy deployment and financial management.",
    url: "https://mits.ac.in/criterion/6",
    metrics: [
      {
        metricId: "6.3.3",
        description: "Average number of professional development / administrative training Programmes organized by the institution for teaching and non-teaching staff during the last five years",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18938id_C6-DVV-6.3.3.pdf",
      },
      {
        metricId: "6.3.4",
        description: "Average percentage of teachers undergoing online/ face-to-face Faculty Development Programmes (FDP)during the last five years (Professional Development Programmes, Orientation / Induction Programmes, Refresher Course, Short Term Course)",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18939id_C6-DVV-6.3.4.pdf",
      },
    ],
  },
  {
    number: 7,
    title: "Institutional Values & Best Practices",
    description: "Gender equity, environmental consciousness, inclusive practices and institutional distinctiveness.",
    url: "https://mits.ac.in/criterion/7",
    metrics: [
      {
        metricId: "7.1.6",
        description: "Quality audits on environment and energy regularly undertaken by the Institution 1. Green audit 2. Energy audit 3. Environment audit 4. Clean and green campus recognitions / awards 5. Beyond the campus environmental promotion activities",
        url: "https://mits.ac.in/public/uploads/criterion/101542_18961id_C7-DVV-7.1.6.pdf",
      },
    ],
  },
];

export const extendedProfileDVV: DocLink[] = [
  { metricId: "1.1", title: "Number of programs offered year-wise for last five years", url: DVV + "EP-DVV-1.1.pdf", type: "pdf" },
  { metricId: "1.2", title: "Number of departments offering academic programmes", url: DVV + "EP-DVV-1.2.pdf", type: "pdf" },
  { metricId: "2.1", title: "Number of students year-wise during last five years", url: DVV + "EP-DVV-2.1.pdf", type: "pdf" },
  { metricId: "2.2", title: "Number of outgoing / final year students year-wise during last five years", url: DVV + "EP-DVV-2.2.pdf", type: "pdf" },
  { metricId: "2.3", title: "Number of students appeared in examinations conducted by the Institution", url: DVV + "EP-DVV-2.3.pdf", type: "pdf" },
  { metricId: "2.4", title: "Number of revaluation applications year-wise during last five years", url: DVV + "EP-DVV-2.4.pdf", type: "pdf" },
  { metricId: "3.1", title: "Number of courses in all programs year-wise during last five years", url: DVV + "EP-DVV-3.1.pdf", type: "pdf" },
  { metricId: "3.2", title: "Number of full-time teachers year-wise during the last five years", url: DVV + "EP-DVV-3.2.pdf", type: "pdf" },
  { metricId: "3.3", title: "Number of sanctioned posts year-wise during last five years", url: DVV + "EP-DVV-3.3.pdf", type: "pdf" },
  { metricId: "4.1", title: "Number of eligible applications received for admissions year-wise", url: DVV + "EP-DVV-4.1.pdf", type: "pdf" },
  { metricId: "4.2", title: "Number of seats earmarked for reserved category year-wise", url: DVV + "EP-DVV-4.2.pdf", type: "pdf" },
  { metricId: "4.3", title: "Total number of classrooms and seminar halls", url: DVV + "EP-DVV-4.3.pdf", type: "pdf" },
  { metricId: "4.4", title: "Total number of computers in the campus for academic purpose", url: DVV + "EP-DVV-4.4.pdf", type: "pdf" },
  { metricId: "4.5", title: "Total Expenditure excluding salary year-wise during last five years ( INR in Lakhs)", url: DVV + "EP-DVV-4.5.pdf", type: "pdf" },
];

export const iqacLinks: DocLink[] = [
  { title: "Internal Quality Assurance Cell (IQAC) Portal", url: "#/iqac", type: "link" },
  { title: "IIQA Submission", url: BASE + "IIQA.pdf", type: "pdf" },
  { title: "NAAC Advisory Committee", url: BASE + "NAAC%20Revised%20Advisory%20Committee.pdf", type: "pdf" },
];

export const highlights = [
  { label: "NAAC Grade", value: "A+", note: "First Cycle Accreditation" },
  { label: "Deemed to be University", value: "2025", note: "Section 3 of UGC Act, 1956" },
  { label: "Established", value: "1998", note: "27+ Years of Legacy" },
  { label: "Criteria Covered", value: "7", note: "Comprehensive Assessment" },
];

export const coordinator = {
  office: "Internal Quality Assurance Cell (IQAC)",
  institute: "Madanapalle Institute of Technology & Science",
  address: "Post Box No. 4, Angallu, Madanapalle – 517325, Andhra Pradesh, India",
  email: "iqac@mits.ac.in",
  phone: "+91-7330803555",
};

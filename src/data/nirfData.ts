export type NirfDoc = {
  title: string;
  url: string;
  category?: string;
  highlight?: boolean;
  type?: "pdf" | "rar";
};

export type NirfYear = {
  year: string;
  key: string;
  rankingNote?: string;
  docs: NirfDoc[];
};

export const NIRF_INSTITUTE_ID = "IR-C-26902";

export const nirfYears: NirfYear[] = [
  {
    year: "NIRF 2027",
    key: "2027",
    docs: [
      { title: "Engineering Data", category: "IR-E-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/Engg.NIRF_2027.pdf" },
      { title: "Overall Data", category: "IR-O-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/Overall.NIRF_2027.pdf" },
      { title: "Innovation Data", category: "IR-I-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/Innovation.NIRF_2027.pdf" },
      { title: "Sustainable Institutions Data", category: "IR-B-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/NIRF_SDG_Submission_2027.pdf" },
    ],
  },
  {
    year: "NIRF 2025",
    key: "2025",
    rankingNote: "MITS ranked in the band 201–300 – NIRF 2025",
    docs: [
      { title: "MITS Ranked Band 201–300 – NIRF 2025", category: "Ranking Certificate", highlight: true, url: "https://mits.ac.in/public/uploads/scholarship/Ranking%20Engg_2025-band%20201-300.pdf" },
      { title: "Engineering Data", category: "IR-E-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/IR-E-C-26902_NIRF-2025.pdf" },
      { title: "SDG Institution Data", category: "IR-B-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/IR-B-C-26902_NIRF-2025.pdf" },
      { title: "Innovation Data", category: "IR-I-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/IR-I-C-26902_NIRF-2025.pdf" },
      { title: "Overall Data", category: "IR-O-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/IR-O-C-26902_NIRF-2025.pdf" },
    ],
  },
  {
    year: "NIRF 2024",
    key: "2024",
    rankingNote: "MITS ranked in the band 201–300 – NIRF 2024",
    docs: [
      { title: "MITS Ranked Band 201–300 – NIRF 2024", category: "Ranking Certificate", highlight: true, url: "https://mits.ac.in/public/uploads/scholarship/MITS_Engg_ranking-2024.pdf" },
      { title: "Engineering Data", category: "IR-E-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/NIRF%20-%202024%20Engineering%20Data%20(IR-E-C-26902).pdf" },
      { title: "Innovation Data", category: "IR-I-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/NIRF_Innovation-2024.pdf" },
      { title: "Overall Data", category: "IR-O-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/NIRF%20-%202024%20Overall%20Data%20(IR-O-C-26902).pdf" },
    ],
  },
  {
    year: "NIRF 2023",
    key: "2023",
    docs: [
      { title: "Engineering Data", category: "IR-E-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/IR-E-C-26902-Engg-NIRF2023.pdf" },
      { title: "Innovation Participation Certificate", category: "Certificate", url: "https://mits.ac.in/public/uploads/scholarship/NIRF_2023_Participation.pdf" },
    ],
  },
  {
    year: "NIRF 2022",
    key: "2022",
    rankingNote: "MITS ranked in the band 251–300 – NIRF 2022",
    docs: [
      { title: "MITS Ranked Band 251–300 – NIRF 2022", category: "Ranking Certificate", highlight: true, url: "https://mits.ac.in/public/uploads/scholarship/MITS-RankBand-251-300.pdf" },
      { title: "Engineering Data", category: "IR-E-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/MITS_NIRF_2022_Engg_Data.pdf" },
    ],
  },
  {
    year: "NIRF 2021",
    key: "2021",
    rankingNote: "MITS ranked in the band 201–250 – NIRF 2021",
    docs: [
      { title: "MITS Ranked Band 201–250 – NIRF 2021", category: "Ranking Certificate", highlight: true, url: "https://mits.ac.in/public/uploads/scholarship/NIRF2021-MITS.pdf" },
      { title: "Engineering Data", category: "IR-E-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/MITS_NIRF_2021_Engg_Data.pdf" },
    ],
  },
  {
    year: "NIRF 2020",
    key: "2020",
    rankingNote: "MITS ranked in the band 201–250 – NIRF 2020",
    docs: [
      { title: "MITS Ranked Band 201–250 – NIRF 2020", category: "Ranking Certificate", highlight: true, url: "https://mits.ac.in/public/uploads/scholarship/MITS-NIRF-2020.pdf" },
      { title: "Engineering Data", category: "IR-E-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/MITS_NIRF_2020_Engg_Data.pdf" },
    ],
  },
  {
    year: "NIRF 2019",
    key: "2019",
    docs: [
      { title: "Overall Data", category: "IR-O-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/NIRF2019_Overall_data.pdf" },
      { title: "Management Data", category: "IR-M-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/NIRF2019_Mgmt_data.pdf" },
      { title: "Engineering Data", category: "IR-E-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/NIRF2019_Engg_data.pdf" },
    ],
  },
  {
    year: "NIRF 2018",
    key: "2018",
    docs: [
      { title: "Management Data", category: "IR-2-M-EM-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/MITS_NIRF_2018_Mgmt.pdf" },
      { title: "Engineering Data", category: "IR-2-E-EM-C-26902", url: "https://mits.ac.in/public/uploads/scholarship/MITS_NIRF_2018_Engg.pdf" },
    ],
  },
  {
    year: "NIRF 2017",
    key: "2017",
    docs: [
      { title: "Management – DCS Report", category: "IR17-MGMT-2-23467", url: "https://mits.ac.in/public/uploads/scholarship/NIRF_MBA2017.pdf" },
      { title: "Management – Prescribed Formats", category: "IR17-MGMT-2-23467", type: "rar", url: "https://mits.ac.in/public/uploads/scholarship/NIRF%20MBA.rar" },
      { title: "Engineering – DCS Report", category: "IR17-ENGG-2-23467", url: "https://mits.ac.in/public/uploads/scholarship/ENGINEERING_DCS%20NIRF.pdf" },
      { title: "Engineering – Prescribed Formats", category: "IR17-ENGG-2-23467", type: "rar", url: "https://mits.ac.in/public/uploads/scholarship/NIRF-Engineering.rar" },
    ],
  },
];

export const nirfDataDocs: NirfDoc[] = [
  { title: "Scopus – Document/Paper Year-wise", category: "Research Output", url: "https://mits.ac.in/assets/pdf/nirf/Scopus%20-%20Document%20paper%20year%20wise.pdf" },
];

export const nirfCommitteeDocs: NirfDoc[] = [
  { title: "Office Order – NIRF Committee 2025-26", category: "Office Order", url: "https://mits.ac.in/assets/pdf/assoc/Office%20Order-NIRF-2025.pdf" },
  { title: "Office Order – NIRF Committee 2023-24", category: "Office Order", url: "https://mits.ac.in/assets/pdf/admin/NIRF_Committe.pdf" },
];

export const nirfCategories = [
  { code: "Engineering", id: "IR-E-C-26902", description: "Ranking of engineering institutions across India." },
  { code: "Overall", id: "IR-O-C-26902", description: "Overall ranking across all institution categories." },
  { code: "Innovation", id: "IR-I-C-26902", description: "Excellence in research, IPR, technology transfer and entrepreneurship." },
  { code: "Sustainable Institution", id: "IR-B-C-26902", description: "Performance against UN Sustainable Development Goals." },
  { code: "Management", id: "IR-M-C-26902", description: "Ranking of management institutions (legacy)." },
];

export const nirfHighlights = [
  { value: "201–300", label: "NIRF Engineering Band", note: "Consistent ranking 2020–2025" },
  { value: "A+", label: "NAAC Accreditation", note: "Highest grade" },
  { value: "5+", label: "NIRF Categories", note: "Engineering · Overall · Innovation · SDG · Management" },
  { value: "10+", label: "Years of Participation", note: "Since NIRF 2017" },
];

export const nirfCoordinator = {
  name: "Dr. A. V. Pavan Kumar",
  role: "NIRF Coordinator",
  designation: "Professor & Assistant Dean",
  email: "nirf@mits.ac.in",
  institute: "Madanapalle Institute of Technology & Science",
};

export interface ImsDoc {
  title: string;
  url: string;
  type?: "pdf" | "doc" | "xlsx" | "zip" | "placeholder";
}

export interface ImsTab {
  id: string;
  label: string;
  docs: ImsDoc[];
}

export const imsTabsData: ImsTab[] = [
  {
    id: "policy",
    label: "IMS Policy",
    docs: [
      {
        title: "Integrated Management System Policy (ISO 14001:2015 and ISO 50001:2018)",
        url: "https://mits.ac.in/assets/pdf/iqac/Approved%20IMS%20Policy_ISO.pdf",
        type: "pdf",
      },
    ],
  },
  {
    id: "manual",
    label: "IMS Manual",
    docs: [
      {
        title: "IMS Manual",
        url: "https://mits.ac.in/assets/pdf/iqac/Final_IMS%20Manual_12-06-2026.pdf",
        type: "pdf",
      },
    ],
  },
  {
    id: "mrm",
    label: "Management Review Meeting (MRM)",
    docs: [],
  },
  {
    id: "formats",
    label: "Record Formats & Annexures",
    docs: [
      {
        title: "12.1. MITS IMS Annexure I",
        url: "https://mits.ac.in/public/uploads/naac/12.1.%20MITS%20IMS%20Annexure%20i.pdf",
        type: "pdf",
      },
      {
        title: "12.2. MITS IMS Annexure II",
        url: "https://mits.ac.in/public/uploads/naac/12.2.%20MITS%20IMS%20Annexure%20ii.pdf",
        type: "pdf",
      },
      {
        title: "12.3. MITS IMS Annexure III",
        url: "https://mits.ac.in/public/uploads/naac/12.3.%20MITS%20IMS%20Annexure%20iii.pdf",
        type: "pdf",
      },
      {
        title: "12.4. MITS IMS Annexure IV",
        url: "https://mits.ac.in/public/uploads/naac/12.4.%20MITS%20IMS%20Annexure%20iv.pdf",
        type: "pdf",
      },
      {
        title: "12.5. MITS IMS Annexure V",
        url: "https://mits.ac.in/public/uploads/naac/12.5.%20MITS%20IMS%20Annexure%20v.pdf",
        type: "pdf",
      },
      {
        title: "12.6. MITS IMS Annexure VI",
        url: "https://mits.ac.in/public/uploads/naac/12.6.%20MITS%20IMS%20Annexure%20vi.pdf",
        type: "pdf",
      },
      {
        title: "12.7. MITS IMS Annexure VII",
        url: "https://mits.ac.in/public/uploads/naac/12.7.%20MITS%20IMS%20Annexure%20vii.pdf",
        type: "pdf",
      },
      {
        title: "12.8. MITS IMS Annexure VIII",
        url: "https://mits.ac.in/public/uploads/naac/12.8.%20MITS%20IMS%20Annexure%20viii.pdf",
        type: "pdf",
      },
      {
        title: "12.9. MITS IMS Annexure IX",
        url: "https://mits.ac.in/public/uploads/naac/12.9.%20MITS%20IMS%20Annexure%20ix.pdf",
        type: "pdf",
      },
      {
        title: "12.10. MITS IMS Annexure X",
        url: "https://mits.ac.in/public/uploads/naac/12.10.%20MITS%20IMS%20Annexure%20x.pdf",
        type: "pdf",
      },
      {
        title: "12.11. MITS IMS Annexure XI",
        url: "https://mits.ac.in/public/uploads/naac/12.11.%20MITS%20IMS%20Annexure%20xi.pdf",
        type: "pdf",
      },
      {
        title: "12.12. MITS IMS Annexure XII",
        url: "https://mits.ac.in/public/uploads/naac/12.12.%20MITS%20IMS%20Annexure%20xii.pdf",
        type: "pdf",
      },
      {
        title: "11.1. MITS IMS Document Issue Amendment RECORD",
        url: "https://mits.ac.in/public/uploads/naac/11.1-IMS_MITS_%20DOCUMENT%20ISSUE%20AMENDMENT%20RECORD.pdf",
        type: "pdf",
      },
      {
        title: "11.2. MITS IMS Initial Environmental Review RECORD",
        url: "https://mits.ac.in/public/uploads/naac/11.2-IMS_MITS_INITIAL%20ENVIRONMENTAL%20REVIEW%20RECORD.pdf",
        type: "pdf",
      },
      {
        title: "11.3. MITS IMS Management Objectives, Targets, Action Plans & Achievements",
        url: "https://mits.ac.in/public/uploads/naac/11.3-IMS_MITS_MANAGEMENT%20OBJECTIVES,%20TARGETS,%20ACTION%20PLANS%20&%20ACHIEVEMENTS.pdf",
        type: "pdf",
      },
      {
        title: "11.4. Customer Feedback Record",
        url: "https://mits.ac.in/public/uploads/naac/11.4-CUSTOMER%20FEEDBACK%20RECORD.pdf",
        type: "pdf",
      },
      {
        title: "11.5. MITS IMS Internal Audit Plan",
        url: "https://mits.ac.in/public/uploads/naac/11.5-IMS_MITS_INTERNAL%20AUDIT%20PLAN.pdf",
        type: "pdf",
      },
      {
        title: "11.6. MITS IMS Internal Audit Report",
        url: "https://mits.ac.in/public/uploads/naac/11.6-IMS_MITS_INTERNAL%20AUDIT%20REPORT.pdf",
        type: "pdf",
      },
      {
        title: "11.7. MITS IMS Managememt Review Record",
        url: "https://mits.ac.in/public/uploads/naac/11.7-IMS_MITS_MANAGEMENT%20REVIEW%20RECORD.pdf",
        type: "pdf",
      },
      {
        title: "11.8. MITS IMS Statutes Compliance Record",
        url: "https://mits.ac.in/public/uploads/naac/11.8-IMS_MITS_STATUTES%20COMPLIANCE%20RECORD.pdf",
        type: "pdf",
      },
      {
        title: "11.9. MITS IMS Energy Review Record",
        url: "https://mits.ac.in/public/uploads/naac/11.9-IMS_MITS_ENERGY%20REVIEW%20RECORD.pdf",
        type: "pdf",
      },
      {
        title: "11.10. MITS IMS Energy Baseline Record",
        url: "https://mits.ac.in/public/uploads/naac/11.10-IMS_MITS_ENERGY%20BASELINE%20RECORD.pdf",
        type: "pdf",
      },
      {
        title: "11.11. MITS IMS Energy Performance Plan and Record",
        url: "https://mits.ac.in/public/uploads/naac/11.11-IMS_MITS_ENERGY%20PERFORMANACE%20PLAN%20AND%20RECORD.pdf",
        type: "pdf",
      },
      {
        title: "11.12. MITS IMS Energy Measurement Plan and RecordD",
        url: "https://mits.ac.in/public/uploads/naac/11.12-IMS_MITS_ENERGY%20MEASUREMENT%20PLAN%20AND%20RECORD.pdf",
        type: "pdf",
      },
    ],
  },
];

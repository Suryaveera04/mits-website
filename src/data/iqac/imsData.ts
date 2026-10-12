export interface IMSDoc {
  title: string;
  url: string;
  type: "pdf" | "doc" | "xlsx" | "link";
}

export interface IMSSubtab {
  id: string;
  title: string;
  docs: IMSDoc[];
}

export const imsSubtabs: IMSSubtab[] = [
  {
    "id": "ims-policy",
    "title": "IMS Policy",
    "docs": [
      {
        "title": "Integrated Management System Policy (ISO 14001:2015 and ISO 50001:2018)",
        "url": "https://mits.ac.in/assets/pdf/iqac/Approved IMS Policy_ISO.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "id": "ims-manual",
    "title": "IMS Manual",
    "docs": [
      {
        "title": "IMS Manual",
        "url": "https://mits.ac.in/assets/pdf/iqac/Final_IMS Manual_12-06-2026.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "id": "ims-mrm",
    "title": "Management Review Meeting (MRM)",
    "docs": [
      {
        "title": "Minutes on Management Review Meeting dated on 27th December 2024",
        "url": "https://mits.ac.in/assets/pdf/iqac/MRM Minutes dated 27th December 2024.pdf",
        "type": "pdf"
      },
      {
        "title": "Minutes on Management Review Meeting dated on 4th March 2024",
        "url": "https://mits.ac.in/assets/pdf/iqac/MRM Minutes dated 4th March 2024.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "id": "ims-formats",
    "title": "Record Formats & Annexures",
    "docs": [
      {
        "title": "12.1. MITS IMS Annexure I",
        "url": "https://mits.ac.in/public/uploads/naac/12.1. MITS IMS Annexure i.pdf",
        "type": "pdf"
      },
      {
        "title": "12.2. MITS IMS Annexure II",
        "url": "https://mits.ac.in/public/uploads/naac/12.2. MITS IMS Annexure ii.pdf",
        "type": "pdf"
      },
      {
        "title": "12.3. MITS IMS Annexure III",
        "url": "https://mits.ac.in/public/uploads/naac/12.3. MITS IMS Annexure iii.pdf",
        "type": "pdf"
      },
      {
        "title": "12.4. MITS IMS Annexure IV",
        "url": "https://mits.ac.in/public/uploads/naac/12.4. MITS IMS Annexure iv.pdf",
        "type": "pdf"
      },
      {
        "title": "12.5. MITS IMS Annexure V",
        "url": "https://mits.ac.in/public/uploads/naac/12.5. MITS IMS Annexure v.pdf",
        "type": "pdf"
      },
      {
        "title": "12.6. MITS IMS Annexure VI",
        "url": "https://mits.ac.in/public/uploads/naac/12.6. MITS IMS Annexure vi.pdf",
        "type": "pdf"
      },
      {
        "title": "12.7. MITS IMS Annexure VII",
        "url": "https://mits.ac.in/public/uploads/naac/12.7. MITS IMS Annexure vii.pdf",
        "type": "pdf"
      },
      {
        "title": "12.8. MITS IMS Annexure VIII",
        "url": "https://mits.ac.in/public/uploads/naac/12.8. MITS IMS Annexure viii.pdf",
        "type": "pdf"
      },
      {
        "title": "12.9. MITS IMS Annexure IX",
        "url": "https://mits.ac.in/public/uploads/naac/12.9. MITS IMS Annexure ix.pdf",
        "type": "pdf"
      },
      {
        "title": "12.10. MITS IMS Annexure X",
        "url": "https://mits.ac.in/public/uploads/naac/12.10. MITS IMS Annexure x.pdf",
        "type": "pdf"
      },
      {
        "title": "12.11. MITS IMS Annexure XI",
        "url": "https://mits.ac.in/public/uploads/naac/12.11. MITS IMS Annexure xi.pdf",
        "type": "pdf"
      },
      {
        "title": "12.12. MITS IMS Annexure XII",
        "url": "https://mits.ac.in/public/uploads/naac/12.12. MITS IMS Annexure xii.pdf",
        "type": "pdf"
      },
      {
        "title": "11.1. MITS IMS Document Issue Amendment RECORD",
        "url": "https://mits.ac.in/public/uploads/naac/11.1-IMS_MITS_ DOCUMENT ISSUE AMENDMENT RECORD.pdf",
        "type": "pdf"
      },
      {
        "title": "11.2. MITS IMS Initial Environmental Review RECORD",
        "url": "https://mits.ac.in/public/uploads/naac/11.2-IMS_MITS_INITIAL ENVIRONMENTAL REVIEW RECORD.pdf",
        "type": "pdf"
      },
      {
        "title": "11.3. MITS IMS Management Objectives, Targets, Action Plans & Achievements",
        "url": "https://mits.ac.in/public/uploads/naac/11.3-IMS_MITS_MANAGEMENT OBJECTIVES, TARGETS, ACTION PLANS & ACHIEVEMENTS.pdf",
        "type": "pdf"
      },
      {
        "title": "11.4. Customer Feedback Record",
        "url": "https://mits.ac.in/public/uploads/naac/11.4-CUSTOMER FEEDBACK RECORD.pdf",
        "type": "pdf"
      },
      {
        "title": "11.5. MITS IMS Internal Audit Plan",
        "url": "https://mits.ac.in/public/uploads/naac/11.5-IMS_MITS_INTERNAL AUDIT PLAN.pdf",
        "type": "pdf"
      },
      {
        "title": "11.6. MITS IMS Internal Audit Report",
        "url": "https://mits.ac.in/public/uploads/naac/11.6-IMS_MITS_INTERNAL AUDIT REPORT.pdf",
        "type": "pdf"
      },
      {
        "title": "11.7. MITS IMS Managememt Review Record",
        "url": "https://mits.ac.in/public/uploads/naac/11.7-IMS_MITS_MANAGEMENT REVIEW RECORD.pdf",
        "type": "pdf"
      },
      {
        "title": "11.8. MITS IMS Statutes Compliance Record",
        "url": "https://mits.ac.in/public/uploads/naac/11.8-IMS_MITS_STATUTES COMPLIANCE RECORD.pdf",
        "type": "pdf"
      },
      {
        "title": "11.9. MITS IMS Energy Review Record",
        "url": "https://mits.ac.in/public/uploads/naac/11.9-IMS_MITS_ENERGY REVIEW RECORD.pdf",
        "type": "pdf"
      },
      {
        "title": "11.10. MITS IMS Energy Baseline Record",
        "url": "https://mits.ac.in/public/uploads/naac/11.10-IMS_MITS_ENERGY BASELINE RECORD.pdf",
        "type": "pdf"
      },
      {
        "title": "11.11. MITS IMS Energy Performance Plan and Record",
        "url": "https://mits.ac.in/public/uploads/naac/11.11-IMS_MITS_ENERGY PERFORMANACE PLAN AND RECORD.pdf",
        "type": "pdf"
      },
      {
        "title": "11.12. MITS IMS Energy Measurement Plan and RecordD",
        "url": "https://mits.ac.in/public/uploads/naac/11.12-IMS_MITS_ENERGY MEASUREMENT PLAN AND RECORD.pdf",
        "type": "pdf"
      }
    ]
  }
];

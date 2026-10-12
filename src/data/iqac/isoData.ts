export interface ISODoc {
  title: string;
  url: string;
  type: "pdf" | "doc" | "xlsx" | "link";
}

export interface ISOSubtab {
  id: string;
  title: string;
  docs: ISODoc[];
}

export const iso21001Subtabs: ISOSubtab[] = [
  {
    "id": "ug-tab21",
    "title": "EOMS Certificate",
    "docs": [
      {
        "title": "Certificate ISO 21001:2018 Educational Organizations Management System",
        "url": "https://mits.ac.in/assets/pdf/iqac/Madanapalle Institute of Technology & Science V2.pdf",
        "type": "pdf"
      },
      {
        "title": "Certificate ISO 21001:2018 Educational Organizations Management System (Ver1-SA1)",
        "url": "https://mits.ac.in/assets/pdf/admin/Madanapalle Institute of Technology & Science-ISO.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "id": "ug-tab22",
    "title": "EOMS Policy",
    "docs": [
      {
        "title": "EOMS Policy",
        "url": "https://mits.ac.in/public/uploads/naac/EOMS Policy.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "id": "ug-tab23",
    "title": "EOMS Manual",
    "docs": [
      {
        "title": "EOMS Manual Version 1",
        "url": "https://mits.ac.in/assets/pdf/iqac/EOMS Manual Version 1.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "id": "ug-tab24",
    "title": "EOMS Procedures",
    "docs": [
      {
        "title": "Procedure for Control of Documents and Records",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      },
      {
        "title": "Procedure for Context of Organization",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS SOP Context of the organization.pdf",
        "type": "pdf"
      },
      {
        "title": "Procedure for Admission Process",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS SOP FOR ADMISSION PROCESS 10.7.25.pdf",
        "type": "pdf"
      },
      {
        "title": "Procedure for Faculty Evaluation, Appointment",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      },
      {
        "title": "Procedure for Internal Communication",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS SOP- Internal Communication 1.pdf",
        "type": "pdf"
      },
      {
        "title": "Procedure for External Communication",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS SOP- External communication .pdf",
        "type": "pdf"
      },
      {
        "title": "Procedure for Stakeholder Feedback and Quality Enhancement",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      },
      {
        "title": "Procedure for on Periodic Review of Curriculum and Educational Resources",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      },
      {
        "title": "Procedure for Conduction of Meeting",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS SOP FOR CONDUCTION OF MEETINGS 1.pdf",
        "type": "pdf"
      },
      {
        "title": "Procedure for Academic Audit",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS SOP OF ACADEMIC AUDIT 1.pdf",
        "type": "pdf"
      },
      {
        "title": "Procedure for Internal Audit",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS SOP Internal audit.pdf",
        "type": "pdf"
      },
      {
        "title": "Procedure for Non-Conforming Outputs",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS PRO for NCO.pdf",
        "type": "pdf"
      },
      {
        "title": "Procedure for Management Review Meeting",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS SOP for MRM 1.pdf",
        "type": "pdf"
      },
      {
        "title": "Procedure for Risk and Opportunities",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS Procedure for Risks & Oppprtunities  4.6.25.pdf",
        "type": "pdf"
      },
      {
        "title": "Procedure for Risk Assessment",
        "url": "https://mits.ac.in/assets/pdf/iqac/MITS-Procedure for Risk Assessment 4.6.25.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "id": "ug-tabloe",
    "title": "EOMS List of Exhibits",
    "docs": [
      {
        "title": "Needs and Expectations of Interested Parties",
        "url": "https://mits.ac.in/assets/pdf/iqac/Annex -2 Needs and Expectations of the Interested Parties.pdf",
        "type": "pdf"
      },
      {
        "title": "Risk Analysis Sheet",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      },
      {
        "title": "Document Identification and Codification System",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      }
    ]
  },
  {
    "id": "ug-tab25",
    "title": "EOMS List of Forms (Blank Sample Formats)",
    "docs": [
      {
        "title": "Master List of Forms",
        "url": "https://mits.ac.in/assets/pdf/iqac/Master List of Forms.pdf",
        "type": "pdf"
      },
      {
        "title": "Master List of Documents",
        "url": "https://mits.ac.in/assets/pdf/iqac/01_Master List of Documents.pdf",
        "type": "pdf"
      },
      {
        "title": "Master List of Records",
        "url": "https://mits.ac.in/assets/pdf/iqac/02_Master List of Records.pdf",
        "type": "pdf"
      },
      {
        "title": "Master List of External Documents",
        "url": "https://mits.ac.in/assets/pdf/iqac/03_Master List of External Documents.pdf",
        "type": "pdf"
      },
      {
        "title": "Master List of Formats",
        "url": "https://mits.ac.in/assets/pdf/iqac/04_Master List of Formats.pdf",
        "type": "pdf"
      },
      {
        "title": "Document of External Origin",
        "url": "https://mits.ac.in/assets/pdf/iqac/05_Document of External Origin.pdf",
        "type": "pdf"
      },
      {
        "title": "Change Request",
        "url": "https://mits.ac.in/assets/pdf/iqac/06_Change Request.pdf",
        "type": "pdf"
      },
      {
        "title": "Issue Log Register",
        "url": "https://mits.ac.in/assets/pdf/iqac/07_Issue Log Register.pdf",
        "type": "pdf"
      },
      {
        "title": "Personnel Records of Faculty Internal and External",
        "url": "https://mits.ac.in/assets/pdf/iqac/08_Personnel Records of Faculty Internal and External.pdf",
        "type": "pdf"
      },
      {
        "title": "Faculty Registration Form",
        "url": "https://mits.ac.in/assets/pdf/iqac/09_Faculty Registration Form.pdf",
        "type": "pdf"
      },
      {
        "title": "Job Description",
        "url": "https://mits.ac.in/assets/pdf/iqac/10_Job Description.pdf",
        "type": "pdf"
      },
      {
        "title": "Competence Chart",
        "url": "https://mits.ac.in/assets/pdf/iqac/11_Competence Chart.pdf",
        "type": "pdf"
      },
      {
        "title": "Skill Matrix",
        "url": "https://mits.ac.in/assets/pdf/iqac/12_Skill Matrix.pdf",
        "type": "pdf"
      },
      {
        "title": "Staff Competency Review and Assessment",
        "url": "https://mits.ac.in/assets/pdf/iqac/13_Staff Competency Review and Assessment.pdf",
        "type": "pdf"
      },
      {
        "title": "Code of Conduct for Faculty Internal",
        "url": "https://mits.ac.in/assets/pdf/iqac/14_Code of Conduct for Faculty  Internal.pdf",
        "type": "pdf"
      },
      {
        "title": "Code of Conduct for Faculty External",
        "url": "https://mits.ac.in/assets/pdf/iqac/15_Code of Conduct for Faculty  External.pdf",
        "type": "pdf"
      },
      {
        "title": "Training Calendar",
        "url": "https://mits.ac.in/assets/pdf/iqac/16_Training Calendar.pdf",
        "type": "pdf"
      },
      {
        "title": "Training Report",
        "url": "https://mits.ac.in/assets/pdf/iqac/17_Training Report.pdf",
        "type": "pdf"
      },
      {
        "title": "Induction Training Report",
        "url": "https://mits.ac.in/assets/pdf/iqac/18_Induction Training Report.pdf",
        "type": "pdf"
      },
      {
        "title": "Training Room Checklist",
        "url": "https://mits.ac.in/assets/pdf/iqac/19_Training Room Checklist.pdf",
        "type": "pdf"
      },
      {
        "title": "Training Needs Analysis Report",
        "url": "https://mits.ac.in/assets/pdf/iqac/20_Training Needs Analysis Report.pdf",
        "type": "pdf"
      },
      {
        "title": "Trainee Evaluation Report",
        "url": "https://mits.ac.in/assets/pdf/iqac/21_Trainee Evaluation Report.pdf",
        "type": "pdf"
      },
      {
        "title": "Admission Form University",
        "url": "https://mits.ac.in/assets/pdf/iqac/22_Admission Form University.pdf",
        "type": "pdf"
      },
      {
        "title": "Learner’s Feedback Form",
        "url": "https://mits.ac.in/assets/pdf/iqac/23_Learner’s Feedback Form.pdf",
        "type": "pdf"
      },
      {
        "title": "Analysis of Feedback",
        "url": "https://mits.ac.in/assets/pdf/iqac/24_Analysis of Feedback.pdf",
        "type": "pdf"
      },
      {
        "title": "Performance Evaluation of Learners",
        "url": "https://mits.ac.in/assets/pdf/iqac/25_Performance Evaluation of Learners.pdf",
        "type": "pdf"
      },
      {
        "title": "Customer Complaint Feedback Form",
        "url": "https://mits.ac.in/assets/pdf/iqac/26_Customer Complaint Feedback Form.pdf",
        "type": "pdf"
      },
      {
        "title": "Customer Complaint Register",
        "url": "https://mits.ac.in/assets/pdf/iqac/27_Customer Complaint Register.pdf",
        "type": "pdf"
      },
      {
        "title": "Complaints and Appeals Report",
        "url": "https://mits.ac.in/assets/pdf/iqac/28_Complaints and Appeals Report.pdf",
        "type": "pdf"
      },
      {
        "title": "Customer Inquiry Log Form",
        "url": "https://mits.ac.in/assets/pdf/iqac/29_Customer Inquiry Log Form.pdf",
        "type": "pdf"
      },
      {
        "title": "Course Curriculum Design",
        "url": "https://mits.ac.in/assets/pdf/iqac/30_Course Curriculum Design.pdf",
        "type": "pdf"
      },
      {
        "title": "Course Curriculum Verification",
        "url": "https://mits.ac.in/assets/pdf/iqac/31_Course Curriculum Verification.pdf",
        "type": "pdf"
      },
      {
        "title": "Curriculum Change Request Form",
        "url": "https://mits.ac.in/assets/pdf/iqac/32_Curriculum Change Request Form.pdf",
        "type": "pdf"
      },
      {
        "title": "Curriculum Review Report",
        "url": "https://mits.ac.in/assets/pdf/iqac/33_Curriculum Review Report.pdf",
        "type": "pdf"
      },
      {
        "title": "Exam Results",
        "url": "https://mits.ac.in/assets/pdf/iqac/34_Exam Results.pdf",
        "type": "pdf"
      },
      {
        "title": "Teacher Evaluation Form",
        "url": "https://mits.ac.in/assets/pdf/iqac/35_Teacher Evaluation Form.pdf",
        "type": "pdf"
      },
      {
        "title": "Purchase Order - Service Order",
        "url": "https://mits.ac.in/assets/pdf/iqac/36_Purchase Order_ Service Order.pdf",
        "type": "pdf"
      },
      {
        "title": "Indent – Purchase Requisition",
        "url": "https://mits.ac.in/assets/pdf/iqac/37_Indent – Purchase Requisition.pdf",
        "type": "pdf"
      },
      {
        "title": "List of Approved Suppliers",
        "url": "https://mits.ac.in/assets/pdf/iqac/38_List of Approved Suppliers.pdf",
        "type": "pdf"
      },
      {
        "title": "Supplier Evaluation Form",
        "url": "https://mits.ac.in/assets/pdf/iqac/39_Supplier Evaluation Form.pdf",
        "type": "pdf"
      },
      {
        "title": "Supplier Re-Evaluation Form",
        "url": "https://mits.ac.in/assets/pdf/iqac/40_Supplier Re-Evaluation Form.pdf",
        "type": "pdf"
      },
      {
        "title": "Approved External Providers List",
        "url": "https://mits.ac.in/assets/pdf/iqac/41_Approved External Providers List.pdf",
        "type": "pdf"
      },
      {
        "title": "External Providers Registration Form",
        "url": "https://mits.ac.in/assets/pdf/iqac/42_External Providers Registration Form.pdf",
        "type": "pdf"
      },
      {
        "title": "External Providers Periodic Evaluation Report",
        "url": "https://mits.ac.in/assets/pdf/iqac/43_External Providers Periodic Evaluation Report.pdf",
        "type": "pdf"
      },
      {
        "title": "Educational Organization Risk Register",
        "url": "https://mits.ac.in/assets/pdf/iqac/44_Educational Organization Risk Register.pdf",
        "type": "pdf"
      },
      {
        "title": "Risk Assessment Form",
        "url": "https://mits.ac.in/assets/pdf/iqac/45_Risk Assessment Form.pdf",
        "type": "pdf"
      },
      {
        "title": "Objective Monitoring Sheet",
        "url": "https://mits.ac.in/assets/pdf/iqac/46_Objective Monitoring Sheet.pdf",
        "type": "pdf"
      },
      {
        "title": "Objective Sheet",
        "url": "https://mits.ac.in/assets/pdf/iqac/47_Objective Sheet.pdf",
        "type": "pdf"
      },
      {
        "title": "Communication Matrix",
        "url": "https://mits.ac.in/assets/pdf/iqac/48_Communication Matrix.pdf",
        "type": "pdf"
      },
      {
        "title": "Interested Parties",
        "url": "https://mits.ac.in/assets/pdf/iqac/49_Interested Parties.pdf",
        "type": "pdf"
      },
      {
        "title": "Internal Audit Schedule",
        "url": "https://mits.ac.in/assets/pdf/iqac/50_Internal Audit Schedule.pdf",
        "type": "pdf"
      },
      {
        "title": "Internal Audit Plan",
        "url": "https://mits.ac.in/assets/pdf/iqac/51_Internal Audit Plan.pdf",
        "type": "pdf"
      },
      {
        "title": "ISO 21001 Internal Audit Checklist",
        "url": "https://mits.ac.in/assets/pdf/iqac/52_ISO 21001 Internal Audit Checklist.pdf",
        "type": "pdf"
      },
      {
        "title": "Internal Audit Report",
        "url": "https://mits.ac.in/assets/pdf/iqac/53_Internal Audit Report.pdf",
        "type": "pdf"
      },
      {
        "title": "Internal Audit Non-Conformity Report (NCR)",
        "url": "https://mits.ac.in/assets/pdf/iqac/54_ Internal Audit Non-Conformity Report (NCR).pdf",
        "type": "pdf"
      },
      {
        "title": "Consolidated Statement of Non-Conformities",
        "url": "https://mits.ac.in/assets/pdf/iqac/55_ Consolidated Statement of Non-Conformities.pdf",
        "type": "pdf"
      },
      {
        "title": "Internal Audit Findings",
        "url": "https://mits.ac.in/assets/pdf/iqac/56_ Internal Audit Findings.pdf",
        "type": "pdf"
      },
      {
        "title": "Corrective Action Request Report (CAR)",
        "url": "https://mits.ac.in/assets/pdf/iqac/57_ Corrective Action Request  Report (CAR).pdf",
        "type": "pdf"
      },
      {
        "title": "Preventive Action Request Form",
        "url": "https://mits.ac.in/assets/pdf/iqac/58_Preventive Action Request Form.pdf",
        "type": "pdf"
      },
      {
        "title": "Meeting Notice for Management Review",
        "url": "https://mits.ac.in/assets/pdf/iqac/59_ Meeting Notice for Management Review.pdf",
        "type": "pdf"
      },
      {
        "title": "Attendance Record of Management Review",
        "url": "https://mits.ac.in/assets/pdf/iqac/60_Attendance Record of Management Review.pdf",
        "type": "pdf"
      },
      {
        "title": "Attendance Sheet",
        "url": "https://mits.ac.in/assets/pdf/iqac/61_Attendance Sheet.pdf",
        "type": "pdf"
      },
      {
        "title": "Minutes of Management Review",
        "url": "https://mits.ac.in/assets/pdf/iqac/62_ Minutes of Management Review.pdf",
        "type": "pdf"
      },
      {
        "title": "Review Status of Action Taken",
        "url": "https://mits.ac.in/assets/pdf/iqac/63_ Review Status of Action Taken.pdf",
        "type": "pdf"
      },
      {
        "title": "Management Review Report",
        "url": "https://mits.ac.in/assets/pdf/iqac/64_ Management Review Report.pdf",
        "type": "pdf"
      },
      {
        "title": "Proof of Receipt (Certificate)",
        "url": "https://mits.ac.in/assets/pdf/iqac/65_ Proof of Receipt (Certificate).pdf",
        "type": "pdf"
      },
      {
        "title": "Market Needs Analysis Report",
        "url": "https://mits.ac.in/assets/pdf/iqac/66_ Market Needs Analysis Report.pdf",
        "type": "pdf"
      },
      {
        "title": "Training and Evaluation Reports",
        "url": "https://mits.ac.in/assets/pdf/iqac/67_ Training and Evaluation Reports.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "id": "ug-tabfc",
    "title": "EOMS Process Flow Charts",
    "docs": [
      {
        "title": "Process flow chart Academic Department",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      },
      {
        "title": "Process flow chart Academic Teaching Learning",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      },
      {
        "title": "Process flow chart Admissions",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      },
      {
        "title": "Process flow chart Examination",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      },
      {
        "title": "Process flow chart Training & Placements",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      },
      {
        "title": "Process flow chart HR",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      },
      {
        "title": "Process flow chart IT",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      },
      {
        "title": "Process Flow Chart Library",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      },
      {
        "title": "Process flow chart Purchasing",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      },
      {
        "title": "Process flow chart Research",
        "url": "https://mits.ac.in/assets/pdf/iqac/Process Flow Chart - Research.pdf",
        "type": "pdf"
      },
      {
        "title": "Process flow chart Sports",
        "url": "https://mits.ac.in/iso#",
        "type": "pdf"
      }
    ]
  },
  {
    "id": "ug-tab53",
    "title": "EOMS Standard Operating Procedures (SOP)",
    "docs": [
      {
        "title": "Master List of Standard Operating Procedures (SOP)",
        "url": "https://mits.ac.in/assets/pdf/iqac/LIST of MITS SOPs.pdf",
        "type": "pdf"
      },
      {
        "title": "01. MITS SOP for Admission Proces",
        "url": "https://mits.ac.in/assets/pdf/iqac/01_ MITS SOP FOR ADMISSION PROCESS.pdf",
        "type": "pdf"
      },
      {
        "title": "02. MITS SOP for Academic & Administrative Bodies",
        "url": "https://mits.ac.in/assets/pdf/iqac/02_MITS SOP FOR ACADEMIC & ADMINISTRATIVE BODIES.pdf",
        "type": "pdf"
      },
      {
        "title": "03. MITS SOP for Assignment of Responsibilities",
        "url": "https://mits.ac.in/assets/pdf/iqac/03_MITS SOP for ASSIGNMENT OF RESPOSIBILITIES.pdf",
        "type": "pdf"
      },
      {
        "title": "04. MITS SOP for Branding of an Institution",
        "url": "https://mits.ac.in/assets/pdf/iqac/04_MITS SOP FOR BRANDING OF AN INSTITUTION.pdf",
        "type": "pdf"
      },
      {
        "title": "05. MITS SOP for Competencies",
        "url": "https://mits.ac.in/assets/pdf/iqac/05_MITS SOP for COMPETENCIES.pdf",
        "type": "pdf"
      },
      {
        "title": "06. MITS SOP for Conduction of Meetings",
        "url": "https://mits.ac.in/assets/pdf/iqac/06_MITS SOP FOR CONDUCTION OF MEETINGS.pdf",
        "type": "pdf"
      },
      {
        "title": "07. MITS SOP for Environment Management System",
        "url": "https://mits.ac.in/assets/pdf/iqac/07_MITS SOP FOR ENVIRONMENT MANAGEMENT SYSTEM.pdf",
        "type": "pdf"
      },
      {
        "title": "08. MITS SOP for Fees Collection",
        "url": "https://mits.ac.in/assets/pdf/iqac/08_MITS SOP FOR FEES COLLECTION.pdf",
        "type": "pdf"
      },
      {
        "title": "09. MITS SOP Internal Academic Audit",
        "url": "https://mits.ac.in/assets/pdf/iqac/09_MITS SOP INTERNAL ACADEMIC AUDIT.pdf",
        "type": "pdf"
      },
      {
        "title": "10. MITS SOP for Industry Institute Interaction Cell",
        "url": "https://mits.ac.in/assets/pdf/iqac/10_ MITS SOP FOR INDUSTRY INSTITUTE INTERACTION CELL.pdf",
        "type": "pdf"
      },
      {
        "title": "11. MITS SOP for Preparation on Quarterly Report",
        "url": "https://mits.ac.in/assets/pdf/iqac/11_MITS  SOP for PREPARATION ON QUARTERLY REPORT.pdf",
        "type": "pdf"
      },
      {
        "title": "12. MITS SOP for NBA, NAAC & NIRF",
        "url": "https://mits.ac.in/assets/pdf/iqac/12_MITS  SOP FOR NBA, NAAC & NIRF.pdf",
        "type": "pdf"
      },
      {
        "title": "13. MITS SOP for Preparation of Institutional Budget",
        "url": "https://mits.ac.in/assets/pdf/iqac/13_MITS  SOP FOR PREPARATION OF INSTITUTIONAL BUDGET.pdf",
        "type": "pdf"
      },
      {
        "title": "14. MITS SOP for Purchase of Consumables",
        "url": "https://mits.ac.in/assets/pdf/iqac/14_MITS  SOP FOR PURCHASE OF CONSUMABLES.pdf",
        "type": "pdf"
      },
      {
        "title": "15. MITS SOP for Purchase of Equipment",
        "url": "https://mits.ac.in/assets/pdf/iqac/15_MITS  SOP FOR PURCHASE OF EQUIPMENT.pdf",
        "type": "pdf"
      },
      {
        "title": "16. MITS SOP for Record Management Policy",
        "url": "https://mits.ac.in/assets/pdf/iqac/16_MITS  FOR  RECORD MANAGEMENT POLICY.pdf",
        "type": "pdf"
      },
      {
        "title": "17. MITS SOP for Posting on Social Media",
        "url": "https://mits.ac.in/assets/pdf/iqac/17_MITS FOR SOP POSTING ON SOCIAL MEDIA.pdf",
        "type": "pdf"
      },
      {
        "title": "18. MITS SOP for Statutory Compliance",
        "url": "https://mits.ac.in/assets/pdf/iqac/18_MITS SOP FOR STATUTORY COMPLIANCE.pdf",
        "type": "pdf"
      },
      {
        "title": "19. MITS SOP for Stock Verification",
        "url": "https://mits.ac.in/assets/pdf/iqac/19_MITS SOP FOR STOCK VERIFICATION.pdf",
        "type": "pdf"
      },
      {
        "title": "20. MITS SOP for Training and Placement Cell",
        "url": "https://mits.ac.in/assets/pdf/iqac/20_MITS  SOP FOR TRAINING AND PLACEMENT CELL.pdf",
        "type": "pdf"
      },
      {
        "title": "21. MITS SOP for Website Updation and Maintenance",
        "url": "https://mits.ac.in/assets/pdf/iqac/21_MITS SOP FOR WEBSITE UPDATION AND MAINTENANCE.pdf",
        "type": "pdf"
      },
      {
        "title": "22. MITS SOP for WHATSAPP Group",
        "url": "https://mits.ac.in/assets/pdf/iqac/22_MITS SOP FOR WHATSAPP GROUP.pdf",
        "type": "pdf"
      },
      {
        "title": "23. MITS SOP for Work from Home",
        "url": "https://mits.ac.in/assets/pdf/iqac/23_MITS SOP FOR WORK FROM HOME.pdf",
        "type": "pdf"
      },
      {
        "title": "24. MITS SOP for Academic Performance Monitoring",
        "url": "https://mits.ac.in/assets/pdf/iqac/24_MITS  SOP FOR ACADEMIC PERFORMANCE MONITORING.pdf",
        "type": "pdf"
      },
      {
        "title": "25. MITS SOP for Academic Performance Index",
        "url": "https://mits.ac.in/assets/pdf/iqac/25_MITS  SOP FOR ACADEMIC PERFORMANCE INDEX.pdf",
        "type": "pdf"
      },
      {
        "title": "26. MITS SOP for Academic Review Meeting",
        "url": "https://mits.ac.in/assets/pdf/iqac/26_ MITS SOP FOR ACADEMIC REVIEW MEETING.pdf",
        "type": "pdf"
      },
      {
        "title": "27. MITS SOP for Attending FDP, Seminar, Workshop on other Institutions",
        "url": "https://mits.ac.in/assets/pdf/iqac/27_MITS SOP FOR ATTENDING FDP, SEMINAR, WORKSHOP IN OTHER INSTITUTIONS.pdf",
        "type": "pdf"
      },
      {
        "title": "28. MITS SOP for Conduction of Board of Studies Meeting",
        "url": "https://mits.ac.in/assets/pdf/iqac/28_MITS  SOP FOR CONDUCTION OF BOARD OF STUDIES MEETING.pdf",
        "type": "pdf"
      },
      {
        "title": "29. MITS SOP for Preparation of Class & Individual Time Table",
        "url": "https://mits.ac.in/assets/pdf/iqac/29_MITS  SOP FOR PREPARATION OF CLASS & INDIVIDUAL TIME TABLE.pdf",
        "type": "pdf"
      },
      {
        "title": "30. MITS SOP for Classroom Allotment",
        "url": "https://mits.ac.in/assets/pdf/iqac/30_ MITS  SOP FOR CLASSROOM ALLOTMENT.pdf",
        "type": "pdf"
      },
      {
        "title": "31. MITS SOP for Conducting Remedial Class",
        "url": "https://mits.ac.in/assets/pdf/iqac/31_MITS SOP FOR CONDUCTING REMEDIAL CLASS.pdf",
        "type": "pdf"
      },
      {
        "title": "32. MITS SOP for Course Content Development",
        "url": "https://mits.ac.in/assets/pdf/iqac/32_MITS SOP FOR COURSE CONTENT DEVELOPMENT.pdf",
        "type": "pdf"
      },
      {
        "title": "33. MITS for for Course Outcomes",
        "url": "https://mits.ac.in/assets/pdf/iqac/33_MITS  SOP FOR COURSE OUTCOMES.pdf",
        "type": "pdf"
      },
      {
        "title": "34. MITS SOP for Curriculum Development",
        "url": "https://mits.ac.in/assets/pdf/iqac/34_MITS  SOP FOR CURRICULUM DEVELOPMENT.pdf",
        "type": "pdf"
      },
      {
        "title": "35. MITS SOP for Enrollment of Student for Examination",
        "url": "https://mits.ac.in/assets/pdf/iqac/35_MITS  SOP FOR ENROLMENT OF STUDENT FOR EXAMINATION.pdf",
        "type": "pdf"
      },
      {
        "title": "36. MITS SOP for Feedback about Faculty",
        "url": "https://mits.ac.in/assets/pdf/iqac/36_MITS SOP FOR FEEDBACK ABOUT FACULTY.pdf",
        "type": "pdf"
      },
      {
        "title": "37. MITS SOP for Preparation of Lab Manual",
        "url": "https://mits.ac.in/assets/pdf/iqac/37_MITS  SOP FOR PREPARATION OF LAB MANUAL.pdf",
        "type": "pdf"
      },
      {
        "title": "38. MITS SOP for Library",
        "url": "https://mits.ac.in/assets/pdf/iqac/38_ MITS  SOP FOR LIBRARY.pdf",
        "type": "pdf"
      },
      {
        "title": "39. MITS SOP for Online Certification Course",
        "url": "https://mits.ac.in/assets/pdf/iqac/39_ MITS  SOP FOR ONLINE CERTIFICATION COURSE.pdf",
        "type": "pdf"
      },
      {
        "title": "40. MITS SOP for Online Classroom Creation and Maintenance",
        "url": "https://mits.ac.in/assets/pdf/iqac/40_MITS  SOP FOR ONLINE CLASROOM CREATION AND MAINTENANCE.pdf",
        "type": "pdf"
      },
      {
        "title": "41. MITS SOP for Project Guides",
        "url": "https://mits.ac.in/assets/pdf/iqac/41_MITS  SOP FOR PROJECT GUIDES.pdf",
        "type": "pdf"
      },
      {
        "title": "42. MITS SOP for Research Proposal",
        "url": "https://mits.ac.in/assets/pdf/iqac/SOP for Research Proposal.pdf",
        "type": "pdf"
      },
      {
        "title": "43. MITS SOP for Sponsoring Faculty for Higher Studies & Program",
        "url": "https://mits.ac.in/assets/pdf/iqac/43_MITS  SOP FOR SPONSORING FACULTY FOR HIGHER STUDIES & PROGRAM.pdf",
        "type": "pdf"
      },
      {
        "title": "44. MITS SOP for Subject Allotment",
        "url": "https://mits.ac.in/assets/pdf/iqac/44_MITS SOP FOR SUBJECT ALLOTMENT.pdf",
        "type": "pdf"
      },
      {
        "title": "45. MITS SOP for Preparation of Syllabus",
        "url": "https://mits.ac.in/assets/pdf/iqac/45_MITS  SOP FOR PREPARATION OF SYLLABUS.pdf",
        "type": "pdf"
      },
      {
        "title": "46. MITS SOP for Organizing & Conducting First Year's Orientation Program",
        "url": "https://mits.ac.in/assets/pdf/iqac/46_MITS  SOP FOR ORGANIZING  & CONDUCTING FIRST YEAR'S ORIENTATION PROGRAM.pdf",
        "type": "pdf"
      },
      {
        "title": "47. MITS SOP for Organizing FDP, Seminar, Workshop",
        "url": "https://mits.ac.in/assets/pdf/iqac/47_MITS  SOP FOR ORGANIZING FDP, SEMINAR, WORKSHOP.pdf",
        "type": "pdf"
      },
      {
        "title": "48. MITS SOP for Leading up to Degree Awarding Ceremony",
        "url": "https://mits.ac.in/assets/pdf/iqac/48_MITS  SOP FOR LEADING UP TO DEGREE AWARDING CEREMONY.pdf",
        "type": "pdf"
      },
      {
        "title": "49. MITS SOP for Awards and Appreciation",
        "url": "https://mits.ac.in/assets/pdf/iqac/49_ MITS  SOP FOR AWARDS AND APPRECIATION.pdf",
        "type": "pdf"
      },
      {
        "title": "50. MITS SOP for Conduction of Technical Symposium",
        "url": "https://mits.ac.in/assets/pdf/iqac/50_MITS  SOP FOR CONDUCTION OF TECHNICAL SYMPOSIUM.pdf",
        "type": "pdf"
      },
      {
        "title": "51. MITS SOP for Hostel",
        "url": "https://mits.ac.in/assets/pdf/iqac/51_MITS  SOP FOR HOSTEL.pdf",
        "type": "pdf"
      },
      {
        "title": "52. MITS SOP for Hostel Quality Committee Meeting",
        "url": "https://mits.ac.in/assets/pdf/iqac/52_MITS  SOP FOR HOSTEL QUALITY COMMITTEE MEETING.pdf",
        "type": "pdf"
      },
      {
        "title": "53. MITS SOP for Canteen",
        "url": "https://mits.ac.in/assets/pdf/iqac/53_MITS  SOP FOR CANTEEN.pdf",
        "type": "pdf"
      },
      {
        "title": "54. MITS SOP for Canteen Committee",
        "url": "https://mits.ac.in/assets/pdf/iqac/54_MITS  SOP FOR  CANTEEN COMMITTEE.pdf",
        "type": "pdf"
      },
      {
        "title": "55. MITS SOP for Campus Cleanliness",
        "url": "https://mits.ac.in/assets/pdf/iqac/55_MITS  SOP FOR CAMPUS CLEANLINESS.pdf",
        "type": "pdf"
      },
      {
        "title": "56. MITS SOP for Class Room Maintenance",
        "url": "https://mits.ac.in/assets/pdf/iqac/56_ MITS  SOP FOR CLASS ROOM MAINTENANCE.pdf",
        "type": "pdf"
      },
      {
        "title": "57. MITS SOP for Laboratory Maintenance",
        "url": "https://mits.ac.in/assets/pdf/iqac/57_ MITS  SOP FOR LABORATORY MAINTENANCE.pdf",
        "type": "pdf"
      },
      {
        "title": "58. MITS SOP for Mentorship",
        "url": "https://mits.ac.in/assets/pdf/iqac/58_ MITS  SOP FOR MENTORSHIP.pdf",
        "type": "pdf"
      },
      {
        "title": "59. MITS SOP for Communication Skill Enhancement",
        "url": "https://mits.ac.in/assets/pdf/iqac/59_MITS  SOP FOR COMMUNICATION SKILL ENHANCEMENT.pdf",
        "type": "pdf"
      },
      {
        "title": "60. MITS SOP for Monitoring DutyUTY",
        "url": "https://mits.ac.in/assets/pdf/iqac/60_MITS  SOP FOR MONITORING DUTY.pdf",
        "type": "pdf"
      },
      {
        "title": "61. MITS SOP for Club Activities",
        "url": "https://mits.ac.in/assets/pdf/iqac/61_MITS  SOP FOR CLUB ACTIVITIES.pdf",
        "type": "pdf"
      },
      {
        "title": "62. MITS SOP for Students Feedback",
        "url": "https://mits.ac.in/assets/pdf/iqac/62_MITS SOP FOR STUDENTS FEEDBACK.pdf",
        "type": "pdf"
      },
      {
        "title": "63. MITS SOP for Amendment tO SOPS",
        "url": "https://mits.ac.in/assets/pdf/iqac/63_ MITS  SOP FOR AMENDMENT TO SOPS.pdf",
        "type": "pdf"
      },
      {
        "title": "64. MITS SOP for Accesibility & Equity",
        "url": "https://mits.ac.in/assets/pdf/iqac/64_MITS SOP for Accesibility & Equity.pdf",
        "type": "pdf"
      },
      {
        "title": "65. MITS SOP for Data Security and Protection",
        "url": "https://mits.ac.in/assets/pdf/iqac/65_ MITS SOP for Data Security and Protection.pdf",
        "type": "pdf"
      },
      {
        "title": "66. MITS SOP for Facilities for Differently able students",
        "url": "https://mits.ac.in/assets/pdf/iqac/66_MITS SOP for Facilities for Differently able students.pdf",
        "type": "pdf"
      },
      {
        "title": "67. MITS SOP for SABLA",
        "url": "https://mits.ac.in/assets/pdf/iqac/67_MITS SOP FOR SABLA.pdf",
        "type": "pdf"
      },
      {
        "title": "68. MITS SOP for Social Resposibility",
        "url": "https://mits.ac.in/assets/pdf/iqac/68_MITS SOP for Social Resposibility.pdf",
        "type": "pdf"
      },
      {
        "title": "69. MITS SOP for Anti Ragging Revised",
        "url": "https://mits.ac.in/assets/pdf/iqac/69. SOP for Antiragging.pdf",
        "type": "pdf"
      },
      {
        "title": "70. MITS SOP for Gender Equity",
        "url": "https://mits.ac.in/assets/pdf/iqac/70_MITS SOP of Gender Equity.pdf",
        "type": "pdf"
      }
    ]
  },
  {
    "id": "ug-tabmrm",
    "title": "Management Review Meeting (MRM)",
    "docs": [
      {
        "title": "Minutes of Management Review Meeting dated on 29th December 2025",
        "url": "https://mits.ac.in/assets/pdf/iqac/Minutes of Management Review Meeting dated on 29th December 2025.pdf",
        "type": "pdf"
      },
      {
        "title": "Minutes of Management Review Meeting dated on 23rd May 2025",
        "url": "https://mits.ac.in/assets/pdf/iqac/Minutes of Management Review Meeting dated on 23rd May 2025.pdf",
        "type": "pdf"
      },
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
  }
];

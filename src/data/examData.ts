// MITS Controller of Examinations (CoE) — Complete Official Datasets
// Synced live with official portal: https://mits.ac.in/university-exam

export interface ExamLink {
  no?: number;
  title: string;
  href: string;
  kind?: "pdf" | "doc" | "xlsx" | "rar" | "link";
  category?: string;
  date?: string;
}

const pdf = (no: number, title: string, href: string): ExamLink => ({ no, title, href, kind: "pdf" });
const doc = (no: number, title: string, href: string): ExamLink => ({ no, title, href, kind: "doc" });
const link = (title: string, href: string): ExamLink => ({ title, href, kind: "link" });

// ==================== UG PROGRAMMES ====================

// 1. UG Notifications (8 items)
export const ugNotifications: ExamLink[] = [
  {
    "no": 8,
    "title": "Notification - B.Tech. II Year I Semester (R25) Regular End Semester Examinations - December 2026",
    "href": "https://mits.ac.in/public/uploads/files/Notification - B.Tech. II Year I Semester (R25) Regular End Semester Examinations - December 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 7,
    "title": "Re-Evaluation Notification for B.Tech I Year II Semester (R25) Regular, B.Tech I Year I Semester (R25) Supplementary End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/files/Re-Evaluation Notification for B.Tech I-II(R25) Regular, B.Tech I-I(R25) Supplementary End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 6,
    "title": "Re-Counting Notification for B.Tech I Year II Semester (R25) Regular and B.Tech I Year I Semester (R25) Supplementary End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/files/Re-Counting Notification for B.Tech I-II(R25) Regular and B.Tech I-I(R25) Supplementary End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 5,
    "title": "Notification for B.Tech I Year I Semester (R25) Supplementary End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/files/Notification for B.Tech I Year I Semester (R25) Supplementary End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 4,
    "title": "Notification for B.Tech I Year II Semester (R25) Regular End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/files/Notification for B.Tech I Year II Semester (R25) Regular End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 3,
    "title": "Recounting Notification for B.Tech I Year I Semester (R25) Regular End Exams January 2026",
    "href": "https://mits.ac.in/public/uploads/files/Recounting Notification for B.Tech I year I Semester (R25) Regular End Exams January 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 2,
    "title": "Re-Evaluation Notification for B.Tech I Year I Semester (R25) Regular End Exams January 2026",
    "href": "https://mits.ac.in/public/uploads/files/Re-Evaluation Notification for B.Tech I Year I Semester (R25) Regular End Exams January 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "Notification for B.Tech I year I Semester (R25) Regular End Semester Exams January 2026",
    "href": "https://mits.ac.in/public/uploads/files/Notification for B.Tech I Year I Semester (R25) Regular End Semester Examinations January 2026.pdf",
    "kind": "pdf"
  }
];

// 2. UG Circulars (4 items)
export const ugCirculars: ExamLink[] = [
  {
    "no": 4,
    "title": "Re-Evaluation Results for B.Tech I Year II Semester (R25) Regular & I Semester Supplementary End Exams June 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/Re-evaluation Results for -B.Tech I Year II Semester (R25) Regular & I Semester Supplementary End Exams June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 3,
    "title": "Recounting Results for B.Tech I Year II Semester (R25) Regular End Exams June 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/Recounting Results for -B.Tech I Year II Semester (R25) Regular End Exams June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 2,
    "title": "Results Announcement Ciruclar for B.Tech I Year II Semester Regular & I Semester (R25) Supplementary, MBA, MCA I Year I Semester (R25) Supplementary Exams June 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/Results Announcement Ciruclar for -B.Tech I Year II Semester Regular & I Semester (R25) Supplementary ,MBA,MCA I Year I Semester (R25) Supplementary Exams June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "Re-Evaluation Results for B.Tech I Year I Semester (R25) Regular End Exams January 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/Re Evaluation Results for B.Tech I Year I Semester (R25) Regular End Exams January 2026.pdf",
    "kind": "pdf"
  }
];

// 3. UG Mid Term Tests (22 items)
export const ugMidTermTimetables: ExamLink[] = [
  {
    "no": 23,
    "title": "BBA I Year I Semester (R26) AEC I Mid Term Test I October 2026",
    "href": "https://mits.ac.in/public/uploads/exam/BBA I Year I Semester (R26) AEC I Mid Term Test I October 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 22,
    "title": "Revised BCA I Year I Semester (R26) SEC I Mid Term Test Time Table October 2026",
    "href": "https://mits.ac.in/public/uploads/exam/Revised BCA I Year I Semester (R26) SEC I Mid Term Test I Time Table October 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 21,
    "title": "BBA I Year I Semester (R26) I Mid Term Test Schedule October 2026",
    "href": "https://mits.ac.in/public/uploads/exam/BBA I Year I Semester (R26) I Mid Term Test Schedule October 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 19,
    "title": "BCA I Year I Semester (R26) I Mid Term Test Schedule October 2026",
    "href": "https://mits.ac.in/public/uploads/exam/BCA I Year I Semester (R26) I Mid Term Test  Schedule October 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 18,
    "title": "Engineering Graphics Time Table for B.Tech I Year I Semester (R25) I Mid Exams November 2026",
    "href": "https://mits.ac.in/public/uploads/exam/Engineering Graphics Time Table for B.Tech I Year I Semester (R25) I Mid Exams November 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 17,
    "title": "Time Table for B.Tech I Year I Semester (R25) I Mid Exams October 2026",
    "href": "https://mits.ac.in/public/uploads/exam/Time Table for-B.Tech I Year I Semester (R25) I Mid Exams October 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 16,
    "title": "B. Tech II Year I Semester (R25) Skill Enhancement Course I Mid Term Test I September 2026",
    "href": "https://mits.ac.in/public/uploads/exam/Schedule for B. Tech II Year I Semester (R25) Skill Enhancement Course - I - Mid Term Test -I September 2026-1.pdf",
    "kind": "pdf"
  },
  {
    "no": 15,
    "title": "B.Tech II Year I Semester (R25) I Mid Exams September 2026",
    "href": "https://mits.ac.in/public/uploads/exam/Time Table for-B.Tech. II Year I Semester (R25) - I Mid Term Test - September 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 14,
    "title": "B.Tech I Year II Semester (R25) I Mid Exams June 2026 (NCC Students only)",
    "href": "https://mits.ac.in/public/uploads/exam/B.Tech I Year II Semester (R25) I Mid Exams June 2025 (NCC Students only).pdf",
    "kind": "pdf"
  },
  {
    "no": 13,
    "title": "B.Tech I Year II Semester (R25) II Mid Exams June 2026 (NCC Students only)",
    "href": "https://mits.ac.in/public/uploads/exam/B.Tech I Year II Semester (R25) II Mid Exams June 2026 (NCC Students only).pdf",
    "kind": "pdf"
  },
  {
    "no": 12,
    "title": "Time Table for B.Tech I Year II Semester (R25) Engineering Graphics II Mid Exams June 2026",
    "href": "https://mits.ac.in/public/uploads/exam/Engineering Graphics Mid Time Table for B.Tech I year II Semester (R25) Exams June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 11,
    "title": "Model Lab Time Table for B.Tech I Year II Semester (R25) Regular Exams June 2026 (Physics Stream)",
    "href": "https://mits.ac.in/public/uploads/exam/Model Lab Time Table for B.Tech I Year II Semester (R25) Regular Exams June 2026 (Physics Stream).pdf",
    "kind": "pdf"
  },
  {
    "no": 10,
    "title": "Model Lab Time Table for B.Tech I Year II Semester (R25) Regular Exams June 2026 (Chemistry Stream)",
    "href": "https://mits.ac.in/public/uploads/exam/Model Lab Time Table for B.Tech I Year II Semester (R25) Regular Exams June 2026 (Chemistry Stream).pdf",
    "kind": "pdf"
  },
  {
    "no": 9,
    "title": "Time Table for B.Tech I Year II Semester (R25) II Mid Exams June 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/Mid Exam Time Table for B.Tech I Year II Semester (R25) Exams June 2026-1.pdf",
    "kind": "pdf"
  },
  {
    "no": 8,
    "title": "Time Table for Engineering Graphics Time Table for B.Tech I Year II Semester (R25) I Mid Exams April 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/Engineering Graphics Time Table for B.Tech I Year II Semester (R25) I Mid Exams April 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 7,
    "title": "Time Table for B.Tech I year II Semester (R25) I Mid Exams April 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/Time Table for B.Tech I Year II Semester (R25) I Mid Exams April 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 6,
    "title": "Time Table for B.Tech I Year I Semester (R25) II Mid Exams January 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/Time Table for B.Tech I Year I Semester (R25) II Mid Exams January 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 5,
    "title": "Model Lab Time Table for B.Tech I year I Semester (R25) Regular Exams December / January 2025-26 (Physics Stream)",
    "href": "https://mits.ac.in/public/uploads/ugc/Model Lab Time Table for B.Tech I year I Semester (R25) Regular Exams Dec-Jan 2025-26 (Physics Stream).pdf",
    "kind": "pdf"
  },
  {
    "no": 4,
    "title": "Model Lab Time Table for B.Tech I year I Semester (R25) Regular Exams December / January 2025-26 (Chemistry Stream)",
    "href": "https://mits.ac.in/public/uploads/ugc/Model Lab Time Table for B.Tech I year I Semester (R25) Regular Exams Dec-Jan 2025-26 (Chemistry Stream).pdf",
    "kind": "pdf"
  },
  {
    "no": 3,
    "title": "Time Table for Engineering Graphics Mid Time Table for B.Tech I Year I Semester (R25) II Mid Exams December / January 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/Engineering Graphics Time Table for B.Tech I Year I Semester (R25) II Mid Exams December-January-2025-2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 2,
    "title": "Engineering Graphics Mid Time Table for B.Tech I Year I Semester (R25) I Mid Exams November 2025",
    "href": "https://mits.ac.in/public/uploads/ugc/Engineering Graphics Mid Time Table for B.Tech I Year I Semester (R25) November 2025.pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "Time Table for B.Tech I Year I Semester (R25) I Mid Term Exams November 2025",
    "href": "https://mits.ac.in/public/uploads/ugc/Time Table for-B.Tech I Year I Semester (R25) I Mid Term Exams November 2025.pdf",
    "kind": "pdf"
  }
];

// 4. UG End Semester Exams (9 items)
export const ugEndSemTimetables: ExamLink[] = [
  {
    "no": 9,
    "title": "B.Tech I Year I Semester (R25) Supplementary End Practical Exams June 2026",
    "href": "https://mits.ac.in/public/uploads/exam/Time Table for-B.Tech I Year I Semester (R25) Supplementary End Practical Exams June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 8,
    "title": "Revised Time Table for B.Tech I Year II Semester (R25) Regular End Semester Exams June 2026",
    "href": "https://mits.ac.in/public/uploads/exam/Revised Time Table for B.Tech I Year II Semester (R25) Regular End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 7,
    "title": "B.Tech I Year I Semester (R25) Supplementary End Semester Exams June 2026",
    "href": "https://mits.ac.in/public/uploads/exam/B.Tech I Year I Semester (R25) Supplementary End Semester Exams June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 6,
    "title": "B.Tech I Year II Semester (R25) End Semester Practical Regular Exams June 2026",
    "href": "https://mits.ac.in/public/uploads/exam/End Semester Practical Exams for B.Tech I Year II Semester (R25) Regular Exams June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 5,
    "title": "Engineering Graphics Time Table for B.Tech I Year I Semester (R25) Regular End Exams January 2026",
    "href": "https://mits.ac.in/public/uploads/exam/Engineering Graphics Time Table for B.Tech I Year I Semester (R25) Regular End Exams January 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 4,
    "title": "Time Table for B.Tech I Year I Semester (R25) Regular End Exams January 2026 (Chemistry Stream)",
    "href": "https://mits.ac.in/public/uploads/exam/Time Table for B.Tech I Year I Semester (R25) Regular End Exams January 2026 (Chemistry Stream).pdf",
    "kind": "pdf"
  },
  {
    "no": 3,
    "title": "Time Table for B.Tech I Year I Semester (R25) Regular End Exams January 2026 (Physics Stream)",
    "href": "https://mits.ac.in/public/uploads/exam/Time Table for B.Tech I Year I Semester (R25) Regular End Exams January 2026 (Physics Stream).pdf",
    "kind": "pdf"
  },
  {
    "no": 2,
    "title": "B.Tech I Year I Semester (R25) Regular End Semester Practical Exams January 2026 (Chemistry Stream)",
    "href": "https://mits.ac.in/public/uploads/exam/B.Tech I Year I Semester (R25) Regular End Semester Practical Exams January 2026(Chemistry Stream).pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "B.Tech I Year I Semester (R25) Regular End Semester Practical Exams January 2026 (Physics Stream)",
    "href": "https://mits.ac.in/public/uploads/exam/B.Tech I Year I Semester (R25) Regular End Semester Practical Exams January 2026(Physics Stream).pdf",
    "kind": "pdf"
  }
];

// 5. UG Formats — Faculty (1 item)
export const ugFacultyFormats: ExamLink[] = [
  {
    "no": 1,
    "title": "End Semester Examinations - Invigilation Duty Substitution Letter",
    "href": "https://mits.ac.in/public/uploads/ugc/ES_Invigilation_Substitute_Letter.docx",
    "kind": "doc"
  }
];

// 6. UG Formats — Students (2 items)
export const ugStudentFormats: ExamLink[] = [
  {
    "no": 2,
    "title": "Recounting Application form",
    "href": "https://mits.ac.in/public/uploads/ugc/Recounting-MITS DTBU_Application.pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "Re-Evaluation Applicaton Form",
    "href": "https://mits.ac.in/public/uploads/ugc/Re Valuation-MITS DTBU_Application Form.pdf",
    "kind": "pdf"
  }
];

// 7. UG Downloads (2 items)
export const ugDownloads: ExamLink[] = [
  {
    "no": 2,
    "title": "B.Tech I Year II Semester (R25) Regular & I Semester Supplementary Exams Questions Papers June 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/B.Tech I year II Semester (R25) Regular & I Semester Supplementary Exams June 2026 -Questions Papers.pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "B.Tech I Year I Semester (R25) Regular End Semester Exams Question Papers January 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/Question Papers for -B.Tech I Year I Semester (R25) Regular End Semester Exams January 2026.pdf",
    "kind": "pdf"
  }
];


// ==================== PG PROGRAMMES ====================

// 1. PG Notifications (16 items)
export const pgNotifications: ExamLink[] = [
  {
    "no": 16,
    "title": "Re-Counting Notification for MBA, MCA I Year I Semester (R25) Supplementary End Semester Examinations July 2026",
    "href": "https://mits.ac.in/public/uploads/files/Re-Counting Notification for MBA, MCA I-I(R25) Supplementary End Semester Examinations July 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 15,
    "title": "Re-Evaluation Notification for MBA, MCA I Year I Semester (R25) Supplementary End Semester Examinations July 2026",
    "href": "https://mits.ac.in/public/uploads/files/Re-Evaluation Notification for MBA, MCA I-I(R25) Supplementary End Semester Examinations  July 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 14,
    "title": "Recounting Notification for MBA I-I,I-II,II-I (R22), MBA I-I, I-II, II-I (R24), MCA II-I (R22), MCA I-I, I-II, II-I (R24) Supplementary End Semester Exams June 2026",
    "href": "https://mits.ac.in/public/uploads/files/Recounting Notification for MBA I-I,I-II,II-I(R22), MBA I-I, I-II, II-I(R24), MCA II-I(R22), MCA I-I, I-II, II-I(R24) Supplementary End Semester Exams June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 13,
    "title": "Re-Evaluation Notification For MBA, MCA, M.Tech I Year II Semester (R25) Regular End Exams June 2026",
    "href": "https://mits.ac.in/public/uploads/files/Re-Evaluation Notification for MBA, MCA, M.Tech I Year II Semester (R25) Regular and M.Tech I-I(R25) Supplementary End Exams June_July 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 12,
    "title": "Recounting Notification for MBA, MCA, M.Tech I Year II Semester (R25) Regular End Semester Exams June 2026",
    "href": "https://mits.ac.in/public/uploads/files/Recounting Notification for MBA, MCA, M.Tech I Year II Semester (R25) Regular and M.Tech I-I(R25) Supplementary End Semester Exams June_July 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 11,
    "title": "Notification for M.Tech I Year I Semester (R25) Supplementary End Semester Examinations June 2026 (For 2025 Admitted batch Only)",
    "href": "https://mits.ac.in/public/uploads/files/Notification for M.Tech I Year I Semester (R25) Supplementary End Semester Examinations June 2026 (For 2025 Admitted batch).pdf",
    "kind": "pdf"
  },
  {
    "no": 10,
    "title": "Notification for M.Tech I Year II Semester (R25) Regular End Semester Examination June 2026 (For 2025 Admitted batch Only)",
    "href": "https://mits.ac.in/public/uploads/files/Notification for M.Tech I Year II Semester (R25) Regular End Semester Examination June 2026 (For 2025 admitted batch).pdf",
    "kind": "pdf"
  },
  {
    "no": 9,
    "title": "Notification for MBA I Year I Semester (R25) Supplementary End Semester Examinations June 2026 (For 2025 Admitted batch Only)",
    "href": "https://mits.ac.in/public/uploads/files/Notification for MBA I Year I Semester (R25) Supplementary End Semester Examinations June 2026 (For 2025 Admitted batch).pdf",
    "kind": "pdf"
  },
  {
    "no": 8,
    "title": "Notification for MBA I Year II Semester (R25) Regular End Semester Examinations June 2026 (For 2025 Admitted batch Only)",
    "href": "https://mits.ac.in/public/uploads/files/Notification for MBA I Year II Semester (R25) Regular End Semester Examinations June 2026 (For 2025 Admitted batch) .pdf",
    "kind": "pdf"
  },
  {
    "no": 7,
    "title": "Notification for MCA I Year I Semester (R25) Supplementary End Semester Examinations June 2026 (For 2025 Admitted batch Only)",
    "href": "https://mits.ac.in/public/uploads/files/Notification for MCA I Year I Semester (R25) Supplementary End Semester Examinations June 2026 (For 2025 Admitted batch).pdf",
    "kind": "pdf"
  },
  {
    "no": 6,
    "title": "Notification for MCA I Year II Semester (R25) Regular End Semester Examinations June 2026 (For 2025 Admitted batch Only)",
    "href": "https://mits.ac.in/public/uploads/files/Notification for MCA I Year II Semester (R25) Regular End Semester Examination June 2026 (For 2025 Admitted batch).pdf",
    "kind": "pdf"
  },
  {
    "no": 5,
    "title": "Recounting Notification for M.Tech, MBA, MCA I Year I Semester (R25) Regular End Exams January 2026",
    "href": "https://mits.ac.in/public/uploads/files/Recounting Notification for M.Tech,MBA,MCA I year I Semester (R25) Regular End Exams January 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 4,
    "title": "Re-Evaluation Notification for M.Tech, MBA, MCA I Year I Semester (R25) Regular End Exams January 2026",
    "href": "https://mits.ac.in/public/uploads/files/Re-Evaluation Notification for M.Tech,MBA,MCA I Year I Semester (R25) Regular End Exams January 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 3,
    "title": "M.Tech I Year I Semester (R25) Regular End Semester Examinations January 2026 (2025 Admitted batch)",
    "href": "https://mits.ac.in/public/uploads/files/Notification for M.Tech I Year I Semester (R25) Regular End Semester Examinations January 2026 (For 2025 Admitted batch).pdf",
    "kind": "pdf"
  },
  {
    "no": 2,
    "title": "MBA I Year I Semester (R25) Regular End Semester Examinations January 2026 (For 2025 Admitted batch)",
    "href": "https://mits.ac.in/public/uploads/files/Notification for MBA I Year I Semester (R25) Regular End Semester Examinations January 2026 (For 2025 Admitted batch).pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "MCA I Year I Semester (R25) Regular End Semester Examinations January 2026 (For 2025 Admitted batch)",
    "href": "https://mits.ac.in/public/uploads/files/Notification for MCA I Year I Semester (R25) Regular End Semester Examinations January 2026 (For 2025 Admitted batch).pdf",
    "kind": "pdf"
  }
];

// 2. PG Circulars (4 items)
export const pgCirculars: ExamLink[] = [
  {
    "no": 4,
    "title": "Re-Evaluation Results for MCA, M.Tech I Year II Semester (R25) Regular End Semester Exams June 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/Re Evaluation Results for MCA, M.Tech I Year II Semester (R25) Regular End Semester Exams June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 3,
    "title": "Results Announcement Ciruclar for B.Tech I Year II Semester Regular & I Semester (R25) Supplementary, MBA, MCA I Year I Semester (R25) Supplementary Exams June 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/Results Announcement Ciruclar for -B.Tech I Year II Semester Regular & I Semester (R25) Supplementary ,MBA,MCA I Year I Semester (R25) Supplementary Exams June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 2,
    "title": "Result Announcement Circular for M.Tech, M.B.A & M.C.A. I Year II Semester (R25) Regular End Semester Examinations June 2025 & M.Tech I Year I Semester (R25) Supplementary End Semester Examinations June 2025",
    "href": "https://mits.ac.in/public/uploads/ugc/Result Announcement Circular June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "Re-Evaluation Results for M.Tech, MCA I Year I Semester (R25) Regular End Exams January 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/Re Evaluation Results for M.Tech,MCA I Year I Semester (R25) Regular End Exams January 2026.pdf",
    "kind": "pdf"
  }
];

// 3. PG Mid Term Tests (31 items)
export const pgMidTermTimetables: ExamLink[] = [
  {
    "no": 28,
    "title": "M.Tech (VES) II Year I Semester (R25) SEC III Mid Term Test I Time Table October 2026",
    "href": "https://mits.ac.in/public/uploads/files/M.Tech(VES) II Year I Semester (R25) SEC III Mid Term Test I Time Table October 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 27,
    "title": "M. Tech (CSE) II Year I Semester SEC Mid Term Test I Time Table October 2026",
    "href": "https://mits.ac.in/public/uploads/files/M.Tech (CSE) II Year I Semester (R25) SEC III Mid Term Test I Schedule October 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 26,
    "title": "MCA II Year I Semester (R25) SEC III Mid Term Test I Schedule October 2026",
    "href": "https://mits.ac.in/public/uploads/files/MCA II Year I Semester (R25) SEC III Mid Term Test I Schedule October 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 25,
    "title": "M. Tech II Year I Semester (R25) I Mid Term Test Schedule October 2026",
    "href": "https://mits.ac.in/public/uploads/files/M. Tech II Year I Semester (R25) I Mid Term Test Schedule October 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 25,
    "title": "MBA II Year I Semester (R25) I Mid Term Test Schedule October 2026",
    "href": "https://mits.ac.in/public/uploads/files/MBA II Year I Semester (R25) I Mid Term Test Schedule October 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 24,
    "title": "MCA II Year I Semester (R25) I Mid Term Schedule October 2026",
    "href": "https://mits.ac.in/public/uploads/files/MCA II Year I Semester (R25) I Mid Term Schedule October 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 23,
    "title": "M.Tech I Year II Semester (R25) SEC II Mid Term Test-II Schedule June 2026",
    "href": "https://mits.ac.in/public/uploads/files/M.Tech I Year II Semester (R25) SEC II Mid Term Test -II Schedule June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 22,
    "title": "MCA I Year II Semester SEC-II Mid Term Test-II Schedule June 2026",
    "href": "https://mits.ac.in/public/uploads/files/MCA I Year II Semester SEC-II  Mid Term Test-II Schedule June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 21,
    "title": "MBA I Year II Semester (R25) SEC II Mid Term Test Schedule June 2026",
    "href": "https://mits.ac.in/public/uploads/files/MBA I Year II Semester (R25) SEC II Mid Term Test Schedule June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 21,
    "title": "MBA I Year II Semester (R25) II Mid Term Test Schedule June 2026",
    "href": "https://mits.ac.in/public/uploads/files/MBA I Year II Semester (R25) II Mid Term Test Schedule June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 20,
    "title": "MCA I Year II Semester (R25) II Mid Term Test Schedule June 2026",
    "href": "https://mits.ac.in/public/uploads/files/MCA I Year II Semester (R25) II Mid Term Test Schedule June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 19,
    "title": "M. Tech I Year II Semester (R25) II Mid Term Test Schedule June 2026",
    "href": "https://mits.ac.in/public/uploads/files/M. Tech I Year II Semester (R25) II Mid Term Test Schedule June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 18,
    "title": "MBA I Year II Semester (R25) SEC-II Mid Term Test -I Schedule April 2026",
    "href": "https://mits.ac.in/public/uploads/files/MBA I Year II Semester (R25) SEC-II Mid Term Test -I Schedule April 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 17,
    "title": "MCA I Year II Semester (R25) SEC-II Mid Term Test-I Schedule April 2026",
    "href": "https://mits.ac.in/public/uploads/files/MCA I Year II Semester (R25) SEC-II Mid Term Test-I Schedule April 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 16,
    "title": "M.Tech (VLSI & ES) I Year II Semester (R25) SEC-II I Mid Exam Schedule April 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/M.Tech-(VLSI & ES) I Year II Semester (R25) SEC II I Mid Exam Schedule April 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 15,
    "title": "M.Tech (CSE) I Year II Semester (R25) SEC-II I Mid Term Test Schedule April 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/M.Tech (CSE) I Year II Semester (R25) SEC-II, Mid Term Test -I Schedule April 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 14,
    "title": "M.Tech (CSE & VES) I Year II Semester (R25) I Mid Term Test Schedule April 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/M.Tech (CSE & VES) I Year II Semester (R25) I Mid Term Test Schedule  April 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 13,
    "title": "MBA I Year II Semester (R25) I Mid Term Test Schedule April 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/MBA I Year II Semester (R25) I Mid Term Test Schedule  April 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 12,
    "title": "MCA I Year II Semester (R25) I Mid Term Test Schedule April 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/MCA I Year II Semester (R25) I Mid Term Test Schedule April 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 11,
    "title": "M.Tech I Year I Semester (R25) II Mid Term Test Schedule January 2026 (For 2025 Admitted batch)",
    "href": "https://mits.ac.in/public/uploads/ugc/M.Tech I Year I Semester (R25) II Mid Term Test Schedule January 2026 (For 2025 Admitted batch).pdf",
    "kind": "pdf"
  },
  {
    "no": 10,
    "title": "MBA I Year I Semester (R25) II Mid Term Test Schedule January 2026 (For 2025 Admitted batch)",
    "href": "https://mits.ac.in/public/uploads/ugc/MBA I Year I Semester (R25)  II Mid Term Test Schedule January 2026 (For 2025 Admitted batch).pdf",
    "kind": "pdf"
  },
  {
    "no": 9,
    "title": "MCA I Year I Semester (R25) II Mid Term Test Schedule January 2026 (For 2025 Admitted batch)",
    "href": "https://mits.ac.in/public/uploads/ugc/MCA I Year I Semester (R25) II Mid Term Test Schedule January 2026 (For 2025 Admitted batch).pdf",
    "kind": "pdf"
  },
  {
    "no": 8,
    "title": "M.Tech I Year I Semester (R25) SEC-I Mid Term Test II Schedule December / January 2025-26",
    "href": "https://mits.ac.in/public/uploads/ugc/M.Tech I-I(R25) SEC-I Mid Term Test -II Schedule December_January  2025 -26 .pdf",
    "kind": "pdf"
  },
  {
    "no": 7,
    "title": "MBA I Year I Semester (R25) SEC-I Mid Term Test II Schedule January 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/MBA I Year I Semester (R25)  SEC- I  Mid Term Test -II Schedule January 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 6,
    "title": "MCA I Year I Semester SEC-I Mid Term Test II Schedule December 2025",
    "href": "https://mits.ac.in/public/uploads/files/MCA I Year I Semester SEC-I Mid Term Test II Schedule December 2025.pdf",
    "kind": "pdf"
  },
  {
    "no": 5,
    "title": "M.Tech (CSE, VES) I Year I Semester SEC-I I Mid Term Test Schedule November 2025",
    "href": "https://mits.ac.in/public/uploads/files/M.Tech (CSE, VES) I Year I Semester SEC-I Mid- I Term Test Schedule November 2025.pdf",
    "kind": "pdf"
  },
  {
    "no": 4,
    "title": "MBA I Year I Semester SEC-I I Mid Term Test Schedule 2025",
    "href": "https://mits.ac.in/public/uploads/files/MBA I Year I Semester SEC-I Mid- I Term Test Schedule November 2025.pdf",
    "kind": "pdf"
  },
  {
    "no": 3,
    "title": "MCA I Year I Semester SEC-I Mid Term Test I Schedule November 2025",
    "href": "https://mits.ac.in/public/uploads/files/MCA I Year I Semester SEC-I Mid Term Test -I Schedule November 2025.pdf",
    "kind": "pdf"
  },
  {
    "no": 3,
    "title": "MCA I Year I Semester I Mid Term Test Schedule November 2025",
    "href": "https://mits.ac.in/public/uploads/files/MCA I Year I Semester  I Mid Term Test Schedule November 2025.pdf",
    "kind": "pdf"
  },
  {
    "no": 2,
    "title": "MBA I Year I Semester I Mid Term Test Schedule November 2025",
    "href": "https://mits.ac.in/public/uploads/files/MBA I Year I Semester  I Mid  Term Test Schedule November 2025.pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "M.Tech (CSE, VES) I Year I Semester I Mid Term Test Schedule November 2025",
    "href": "https://mits.ac.in/public/uploads/files/M.Tech (CSE, VES) I Year I Semester I Mid Term Test Schedule November 2025.pdf",
    "kind": "pdf"
  }
];

// 4. PG End Semester Exams (19 items)
export const pgEndSemTimetables: ExamLink[] = [
  {
    "no": 19,
    "title": "MCA I Year I Semester (R25) Supplementary Practical End Semester Examinations Schedule July 2026",
    "href": "https://mits.ac.in/public/uploads/files/MCA I Year I Semester (R25) Supplementary Practical End Semester Examinations Schedule July 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 18,
    "title": "MBA I Year I Semester (R25) Supplementary Practical End Semester Examinations Schedule July 2026",
    "href": "https://mits.ac.in/public/uploads/files/MBA I Year I Semester (R25) Supplementary Practical End Semester Examinations Schedule July 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 17,
    "title": "Revised Time Table for MCA I Year II Semester (R25) Regular End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/files/Revised Time Table - MCA I Year II Semester (R25) Regular End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 16,
    "title": "Revised Time Table for MCA I Year I Semester (R25) Supplementary End Semester Examinations July 2026",
    "href": "https://mits.ac.in/public/uploads/files/Revised Time Table - MCA I Year I Semester (R25) Supplementary End Semester Examinations July 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 15,
    "title": "Revised Time Table for MBA I Year II Semester (R25) Regular End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/files/Revised Time Table - MBA I Year II Semester (R25) Regular End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 14,
    "title": "Revised Time Table for MBA I Year I Semester (R25) Supplementary End Semester Examinations July 2026",
    "href": "https://mits.ac.in/public/uploads/files/Revised Time Table - MBA I Year I Semester (R25) Supplementary End Semester Examinations July 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 13,
    "title": "Revised Time Table for M.Tech I Year II Semester (R25) Regular End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/files/Revised Time Table - M.Tech I Year II Semester (R25) Regular End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 12,
    "title": "Revised Time Table for M.Tech I Year I Semester (R25) Supplementary End Semester Examinations July 2026",
    "href": "https://mits.ac.in/public/uploads/files/Revised Time Table - M.Tech I Year I Semester (R25) Supplementary End Semester Examinations July 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 11,
    "title": "M.Tech (CSE) I Year II Semester (R25) Regular Practical End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/files/M.Tech (CSE) I Year II Semester (R25) Regular Practical End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 10,
    "title": "M.Tech (VLSI & Embedded Systems) I Year II Semester (R25) Regular Practical End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/files/M.Tech (VLSI & Embedded Systems) I Year II Semester (R25) Regular Practical End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 9,
    "title": "MCA I Year II Semester (R25) Regular Practical End Semester Examinations Schedule June 2026",
    "href": "https://mits.ac.in/public/uploads/files/MCA I Year II Semester (R25) Regular Practical End Semester Examinations Schedule  June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 8,
    "title": "MBA I Year II Semester (R25) Regular Practical End Semester Examinations Schedule June 2026",
    "href": "https://mits.ac.in/public/uploads/files/MBA I Year II Semester (R25) Regular Practical End Semester Examinations Schedule June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 7,
    "title": "M.Tech I Year I Semester (R25) Regular End Semester Examinations January 2026 (For 2025 Admitted batch)",
    "href": "https://mits.ac.in/public/uploads/files/M.Tech I Year I Semester (R25) Regular End Semester Examinations January 2026 (For 2025 Admitted batch).pdf",
    "kind": "pdf"
  },
  {
    "no": 6,
    "title": "MBA I Year I Semester (R25) Regular End Semester Examinations January 2026 (For 2025 Admitted batch)",
    "href": "https://mits.ac.in/public/uploads/files/MBA I Year I Semester (R25) Regular End Semester Examinations January 2026 (For 2025 Admitted batch).pdf",
    "kind": "pdf"
  },
  {
    "no": 5,
    "title": "MCA I Year I Semester (R25) Regular End Semester Examinations January 2026 (For 2025 Admitted batch)",
    "href": "https://mits.ac.in/public/uploads/files/MCA I Year I Semester (R25) Regular End Semester Examinations January 2026 (For 2025 Admitted batch).pdf",
    "kind": "pdf"
  },
  {
    "no": 4,
    "title": "M.Tech (CSE) I Year I Semester (R25) Regular End Semester Practical Exams January 2026",
    "href": "https://mits.ac.in/public/uploads/files/M.Tech (CSE) I Year I Semester (R25) Regular End Semester Practical Exams January 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 3,
    "title": "M.Tech (VLSI Design & Embedded Systems ) (R25) Regular End Semester Practical Exams January 2026",
    "href": "https://mits.ac.in/public/uploads/files/M.Tech (VLSI Design & Embedded Systems ) (R25) Regular End Semester Practical Exams January 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 2,
    "title": "MBA I Year I Semester (R25) Regular End Semester Practical Exams January 2026",
    "href": "https://mits.ac.in/public/uploads/files/MBA I Year I Semester (R25) Regular End Semester Practical Exams January 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "MCA I Year I Semester (R25) Regular End Semester Practical Exams January 2026",
    "href": "https://mits.ac.in/public/uploads/files/MCA  I Year I Semester (R25) Regular End Semester Practical Exams  January 2026.pdf",
    "kind": "pdf"
  }
];

// 5. PG Formats — Faculty (1 item)
export const pgFacultyFormats: ExamLink[] = [
  {
    "no": 1,
    "title": "End Semester Examinations - Invigilation Duty Substitution Letter",
    "href": "https://mits.ac.in/public/uploads/ugc/ES_Invigilation_Substitute_Letter.docx",
    "kind": "doc"
  }
];

// 6. PG Formats — Students (2 items)
export const pgStudentFormats: ExamLink[] = [
  {
    "no": 2,
    "title": "Recounting Application form",
    "href": "https://mits.ac.in/public/uploads/ugc/Recounting-MITS DTBU_Application.pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "Re-Evaluation Applicaton Form",
    "href": "https://mits.ac.in/public/uploads/ugc/Re Valuation-MITS DTBU_Application Form.pdf",
    "kind": "pdf"
  }
];

// 7. PG Downloads (MBA, MCA, M.Tech Question Papers - 11 items)
export const pgDownloads: ExamLink[] = [
  {
    "no": 3,
    "title": "MBA I Year I Semester (R25) Supplementary End Semester Examinations July2026-compressed",
    "href": "https://mits.ac.in/public/uploads/ugc/MBA I Year I Semester (R25) Supplementary End Semester Examinations July2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 2,
    "title": "MBA I Year II Semester (R25) Reguar End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/MBA I Year II Semester (R25) Reguar End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "MBA I Year I Semester (R25) Regular End Semester Examinations January 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/MBA I Year I Semester (R25) Regular End Semester Examinations January 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 3,
    "title": "MCA I Year I Semester (R25) Supplementary End Semestere Examinations July 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/MCA I Year I Semester (R25) Supplementary End Semestere Examinations July 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 2,
    "title": "MCA I Year II Semester (R25) Regular End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/MCA I Year II Semester (R25) Regular End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "MCA I Year I Semester (R25) Regular End Semester Examinations January 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/MCA I Year I Semester (R25) Regular End Semester Examinations  January 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 5,
    "title": "M.Tech (CSE) I Year I Semester (R25) Supplementary End Semester Examinations July 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/M.Tech(CSE) I Year I Semester (R25) Supplementary End Semester Examinations July 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 4,
    "title": "M.Tech (VLSI Design & ES) I Year II Semester (R25) Regular End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/M.Tech (VLSI Design & ES) I Year II Semester (R25) Regular End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 3,
    "title": "M.Tech (CSE) I Year II Semester (R25) Regular End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/M.Tech (CSE) I Year II Semester (R25) Regular End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 2,
    "title": "M.Tech (CSE) I Year I Semester Regular End Semester Examinations January 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/M.Tech (CSE) I Year I Semester Regular End Semester Examinations January 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "M.Tech (VLSI ES) I Year I Semester (R25) Regular End Semester Examinations January 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/M.Tech (VLSI  ES) I Year I Semester (R25) Regular End Semester Examinations January 2026.pdf",
    "kind": "pdf"
  }
];

// Direct access to individual PG Question Paper sets
export const pgMbaQuestionPapers: ExamLink[] = [
  {
    "no": 3,
    "title": "MBA I Year I Semester (R25) Supplementary End Semester Examinations July2026-compressed",
    "href": "https://mits.ac.in/public/uploads/ugc/MBA I Year I Semester (R25) Supplementary End Semester Examinations July2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 2,
    "title": "MBA I Year II Semester (R25) Reguar End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/MBA I Year II Semester (R25) Reguar End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "MBA I Year I Semester (R25) Regular End Semester Examinations January 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/MBA I Year I Semester (R25) Regular End Semester Examinations January 2026.pdf",
    "kind": "pdf"
  }
];
export const pgMcaQuestionPapers: ExamLink[] = [
  {
    "no": 3,
    "title": "MCA I Year I Semester (R25) Supplementary End Semestere Examinations July 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/MCA I Year I Semester (R25) Supplementary End Semestere Examinations July 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 2,
    "title": "MCA I Year II Semester (R25) Regular End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/MCA I Year II Semester (R25) Regular End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "MCA I Year I Semester (R25) Regular End Semester Examinations January 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/MCA I Year I Semester (R25) Regular End Semester Examinations  January 2026.pdf",
    "kind": "pdf"
  }
];
export const pgMtechQuestionPapers: ExamLink[] = [
  {
    "no": 5,
    "title": "M.Tech (CSE) I Year I Semester (R25) Supplementary End Semester Examinations July 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/M.Tech(CSE) I Year I Semester (R25) Supplementary End Semester Examinations July 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 4,
    "title": "M.Tech (VLSI Design & ES) I Year II Semester (R25) Regular End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/M.Tech (VLSI Design & ES) I Year II Semester (R25) Regular End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 3,
    "title": "M.Tech (CSE) I Year II Semester (R25) Regular End Semester Examinations June 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/M.Tech (CSE) I Year II Semester (R25) Regular End Semester Examinations June 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 2,
    "title": "M.Tech (CSE) I Year I Semester Regular End Semester Examinations January 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/M.Tech (CSE) I Year I Semester Regular End Semester Examinations January 2026.pdf",
    "kind": "pdf"
  },
  {
    "no": 1,
    "title": "M.Tech (VLSI ES) I Year I Semester (R25) Regular End Semester Examinations January 2026",
    "href": "https://mits.ac.in/public/uploads/ugc/M.Tech (VLSI  ES) I Year I Semester (R25) Regular End Semester Examinations January 2026.pdf",
    "kind": "pdf"
  }
];


export const ugResults: ExamLink[] = [
  { title: "UG Results — Announced from May 2024 onwards (Live Portal)", href: "http://125.16.54.154/mitsresults/resultug", kind: "link" },
  { title: "UG Results — Announced up to April 2024", href: "https://mits.ac.in/ugresults", kind: "link" },
  { title: "UG Recounting Results — Announced from May 2024 onwards", href: "https://mits.ac.in/recountingugresults", kind: "link" },
  { no: 1, title: "Re-Evaluation Results — B.Tech I Year I Semester (R25) Regular End Exams January 2026", href: "https://mits.ac.in/public/uploads/ugc/Re%20Evaluation%20Results%20for%20B.Tech%20I%20Year%20I%20Semester%20(R25)%20Regular%20End%20Exams%20January%202026.pdf", kind: "pdf" },
];

export const pgResults: ExamLink[] = [
  { title: "PG Results — Announced from May 2024 onwards (Live Portal)", href: "http://125.16.54.154/mitsresults/resultpg", kind: "link" },
  { title: "PG Results — Announced up to April 2024", href: "https://mits.ac.in/pgresults", kind: "link" },
  { title: "PG Recounting Results — Announced from May 2024 onwards", href: "https://mits.ac.in/recountingpgresults", kind: "link" },
];

// -------------------- APAAR / ABC --------------------
export const apaarAbc: ExamLink[] = [
  { no: 1, title: "Manual for APAAR / ABC ID Creation", href: "https://mits.ac.in/assets/pdf/exam/APAAR%20ID%20Creation.pdf", kind: "pdf" },
  { title: "Academic Bank of Credits (ABC) — Official Portal", href: "https://www.abc.gov.in/", kind: "link" },
  { title: "APAAR ID — Official Portal", href: "https://apaar.education.gov.in/", kind: "link" },
];

// -------------------- CoE OFFICE --------------------
export const coeOffice = {
  name: "Dr. Sai Kumar.V",
  designation: "Controller of Examinations",
  address: "Madanapalle Institute of Technology & Science (Deemed to be University), Madanapalle-Kadiri Road, Kurabalakota Mandal, Madanapalle-517325, Andhra Pradesh, India",
  phone: "08571-280255, 280706",
  email: "coeu@mits.ac.in",
};

// -------------------- CoE RESPONSIBILITIES --------------------
export const coeResponsibilities: string[] = [
  "Releasing examination Notifications, Circulars and Time Tables for all programmes.",
  "Managing registration for end-semester examinations.",
  "Issuing Hall Tickets to all eligible students.",
  "Acquiring mid-term and end-semester question papers confidentially.",
  "Conducting continuous internal assessments and end-semester examinations.",
  "Logistics — stationery, exam venues, invigilators, seating arrangements.",
  "Appointing examiners for practical end-semester examinations.",
  "Appointing examiners for spot evaluation of theory courses.",
  "Implementing measures to prevent malpractice and ensure integrity.",
  "Ensuring confidentiality of all examination materials.",
  "Compiling marks, processing results and verifying accuracy of final grades.",
  "Publishing student results accurately and in a timely manner.",
  "Awarding class to students who satisfy academic norms.",
  "Issuing Grade Cards, Transcripts, Provisional, Degree, Migration and Duplicate Certificates.",
  "Issuing CGPA-to-percentage conversion and Medium-of-Instruction certificates.",
  "Maintaining detailed examination records for audit and reference.",
  "Acting as central contact for exam grievances of students and faculty.",
  "Organising the Graduation Day Ceremony for successful candidates.",
  "Providing genuineness & verification services to government, institutions and verification agencies.",
];

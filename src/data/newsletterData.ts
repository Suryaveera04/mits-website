export interface NewsletterItem {
  sno: number;
  title: string;
  url: string;
  academicYear: string;
  issue: string;
}

export const newsletterList: NewsletterItem[] = [
  {
    sno: 1,
    title: "Newsletter Issue 1 AY 2024-25",
    url: "https://mits.ac.in/assets/pdf/admin/Issue%201%20AY%202024-25.pdf",
    academicYear: "2024-25",
    issue: "Issue 1"
  },
  {
    sno: 2,
    title: "Newsletter Issue 2 AY 2023-24",
    url: "https://mits.ac.in/assets/pdf/admin/Issue%202%20for%20AY%202023-24.pdf",
    academicYear: "2023-24",
    issue: "Issue 2"
  },
  {
    sno: 3,
    title: "Newsletter Issue 1 AY 2023-24",
    url: "https://mits.ac.in/assets/pdf/admin/Issue%201%20for%20AY%202023-24.pdf",
    academicYear: "2023-24",
    issue: "Issue 1"
  },
  {
    sno: 4,
    title: "Newsletter Issue 2 AY 2022-23",
    url: "https://mits.ac.in/assets/pdf/admin/Issue%202%20for%20AY%202022-23.pdf",
    academicYear: "2022-23",
    issue: "Issue 2"
  },
  {
    sno: 5,
    title: "Newsletter Issue 1 AY 2022-23",
    url: "https://mits.ac.in/assets/pdf/admin/Issue%201%20for%20AY%202022-23.pdf",
    academicYear: "2022-23",
    issue: "Issue 1"
  },
  {
    sno: 6,
    title: "Newsletter Issue AY 2021-22",
    url: "https://mits.ac.in/assets/pdf/admin/Newsletter%20AY%202021-22.pdf",
    academicYear: "2021-22",
    issue: "Annual Issue"
  }
];

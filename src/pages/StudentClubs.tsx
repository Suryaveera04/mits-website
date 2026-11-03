import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const notices = [
  { title: "Inauguration of AI Learning Hub", body: 'Student Activity Center [SAC] organized "Inauguration of AI Learning Hub" on 26th May 2027.', link: "https://mits.ac.in/public/uploads/sac/Inauguration of AI Learning Hub.pdf", linkText: "Click here for Report on Event" },
  { title: "28th Annual Day Celebrations 2027", body: "Student Activity Center [SAC] organized the 28th Annual Day Celebrations-2027 for the Academic year 2025-26 at MITS. Date: 18th April 2027", link: "https://mits.ac.in/public/uploads/sac/28th Annual Day Celebrations 2027.pdf", linkText: "Click here for Report on Event" },
  { title: "Workshop", body: 'The MITS Web Club under Student Activity Center (SAC), organized a workshop on "Introduction to Development Environment". Date: 12th September 2025', link: "https://mits.ac.in/public/uploads/sac/Introduction to Development Environment.pdf", linkText: "Click here for Event Details" },
  { title: "Anti-Ragging Logo League", body: "Anti-Ragging Logo League under Skill Bee Club was organized by Student Activity Center & Anti-Ragging Cell at MITS in association with Department of CSE - Data Science. Date: 14th August 2025", link: "", linkText: "" },
  { title: "Anti-Ragging Art Competition", body: "Anti-Ragging Art Competition was organized at MITS in association Arts and Cultural Club. Date: 14th August 2025", link: "", linkText: "" },
  { title: "Zero Tolerance Rally", body: "Zero Tolerance Rally was organized at MITS in association MSR Club. Date: 12th August 2025", link: "", linkText: "" },
  { title: "Anti-Ragging Week", body: "Anti-Ragging Week was organized at MITS in association with Film Makers Club, SAC and Anti-Ragging Cell. Date: 12th August 2025", link: "", linkText: "" },
];

const clubsTable = [
  { sno: 1, name: "Arts & Cultural Club", faculty: "Mr. Y. Pradeep Kumar", student: "M. Harsha Vardhan", contact: "8143767320" },
  { sno: 2, name: "Film Makers Club", faculty: "Mr. K. Md.Riyaz Ali", student: "P. Sohith Reddy\nP. Meghana", contact: "6309713619\n8247015236" },
  { sno: 3, name: "Sports Club", faculty: "Dr. C. Damodharan", student: "V. Wazid", contact: "8247432448" },
  { sno: 4, name: "MSR Club", faculty: "Mr. B.S.H. Shayeez Ahamed", student: "S. Janardhan Yadav", contact: "9949847100" },
  { sno: 5, name: "Web Club", faculty: "Dr. R. Nidhya", student: "V. Dinesh Kumar\nR. Divya Sree", contact: "6304038756\n6305690838" },
  { sno: 6, name: "Tech Club", faculty: "Mr. D. Abdul Jaleel", student: "Syesd Mushtaq Ahamed\nM Naganandini", contact: "8309667680\n9885102775" },
  { sno: 7, name: "Coding Club", faculty: "Mrs. Komala Anamalamudi", student: "Geethika TV", contact: "9441395117" },
  { sno: 8, name: "Builders Club", faculty: "Dr. K. Imran", student: "Vandadi Shivani", contact: "8523815918" },
  { sno: 9, name: "Literary Club", faculty: "Mr. T. Rama Mohan", student: "Varshini Rasineni\nS.Tabrez Basha", contact: "6301272700\n9390487698" },
  { sno: 10, name: "Yoga & Meditation Club", faculty: "Mr. K. Manju Vikram", student: "S Leela Narasimha Venkat", contact: "6305696086" },
  { sno: 11, name: "SKILL BEE Club", faculty: "Mr. K. Durga Charan", student: "Chakala Hanish Kumar", contact: "8125409248" },
  { sno: 12, name: "Anchors Club", faculty: "Mr. Narasimha Charlu", student: "M Keerthana Evanjilin", contact: "8897983614" },
  { sno: 13, name: "Entrepreneurship Development Cell", faculty: "Dr. Kosaraju Sireesha", student: "M. Pothan Rama\nM. Murari", contact: "6305710028\n9989051606" },
  { sno: 14, name: "Drone Technology Club", faculty: "Mr. P. Mohammed Rizwan Ali", student: "Shaik Mohammad Thaheer", contact: "7680893631" },
];

/**
 * Faculty Profiles Data Schema
 * 
 * ============================================================================
 * HOW TO EDIT FACULTY PROFILE DATA (PUBLICATIONS, PATENTS, PROJECTS, ETC.)
 * ============================================================================
 * 
 * 1. HOW TO EDIT A SPECIFIC SECTION (e.g., Publication Details):
 *    - Each faculty member's profile is a dictionary entry. Under the `sections` array,
 *      each section has a `title` and a `content` array of objects (representing tables)
 *      or string/array of strings (representing bullet lists).
 *    - To add a publication or patent, locate the correct object under `content` and append
 *      or edit a row object matching the table column keys.
 * 
 * 2. HOW TO REORDER SECTIONS:
 *    - Rearrange the objects inside the `sections` array to change which tabs/sections
 *      display first on the faculty details page.
 */
﻿// Faculty profile data - stored as flexible content sections

export interface FacultySection {
  title: string;
  content: string | string[] | Record<string, string>[];
}

export interface FacultyProfile {
  name: string;
  designation: string;
  image?: string;
  email?: string;
  officeAddress?: string;
  sections: FacultySection[];
}

export const aiProfiles: Record<string, FacultyProfile> = {
  /*
  // Static faculty profile data preserved in comments (Dynamic profiles fetched from EngageAI database API)
"Dr. Y. Ravi Raju": {
        "name": "Dr. Y. Ravi Raju",
        "email": "dryraviraju@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Y. Ravi Raju.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "C.S.E",
                            "Branch": "Ph.D",
                            "College Name/University": "Kalinga University",
                            "Year of Passing": "2026"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "C.S.E",
                            "Branch": "C.S.E",
                            "College Name/University": "B.V.C Engineering College, JNT University, Kakinada",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "C.S.E",
                            "Branch": "C.S.E",
                            "College Name/University": "B.V.C.Institute of Technology and Science, JNT University, Kakinada",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Computer Networks, Cyber Security, Bigdata Analytics"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57212565415",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/460682",
                        "Google scholar : https://scholar.google.com/citations?user=Pvg4GngAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 5"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "A Machine Learning Approach in Communication 5G-6G Network",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimization of Natural Language Processing Models for Multilingual Legal Document Analysis",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Integrating the Internet of Things to Protect Electric Vehicle Control Systems from Cyber Attacks",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Wearable Devices and Health Monitoring: Big Data and AI for Remote Patient Care",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Disease Biomarker Discovery with Big Data Analysis",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Dr. R. Kalpana": {
        "name": "Dr. R. Kalpana",
        "email": "drkalpanar@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. R. Kalpana.JPG",
        "designation": "Professor &amp; Head",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "MANET",
                            "Branch": "Information and Communication Engineering",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Sathyabama University",
                            "Year of Passing": "2006"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Madras University",
                            "Year of Passing": "1991"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Mobile Ad Hoc Networks, IOT, AI & ML"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57038672800",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/273713",
                        "Google scholar: https://scholar.google.com/citations?user=qTE35YYAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 5"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Agriculture crop election and yield forecasting using machine learning algorithms&rdquo;, International Conference on Innovative Approaches in Engineering & Technology (ICIAET-24) doi.org/10.1063/5.0256272",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "&ldquo;Performance Evaluation of Children at Risk for Schizophrenia Using Ensemble Learning&rdquo;, Smart Factories for Industry 5.0 Transformation, Pages 269-281",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Facial Age and Gender Prediction using Deep Learning&rdquo;, International Conference on Communication and Signal Processing, ICCSP2024, Pages 1571-1576",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Smart System for Vehicle Number Plate Recognition Using Convolutional Neural Networks (CNN)&rdquo;, International Conference on Optimization Techniques for Learning",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Brain Tumar Diagnosis with MCNN-Based MRI Image Analysis&rdquo;, International Conference on Optimization Techniques for Learning, ICOTL Dec 2023",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Internet of Things (IOT) Based Machine Learning Techniques for Wind Energy Harvesting&rdquo;, Electric Power Components and Systems Dec 2023 10.1080/15325008.2023.2293952",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "&ldquo;Energy Harvesting Scheme Using Queuing Theory for Wireless Body Area Network&rdquo; EAI/Springer Innovation in Communication and Computing 2023 Part F1482, pp 169-186. 10.1007/978-3-031-35965-1_9",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "6",
                            "Details of Research Publication": "&ldquo;Legendre neural network method for solving nonlinear singular systems&rdquo;, Intelligent Technologies for Sensors: Applications, Design, and Optimization for a Smart World, Pages 25-37",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "6",
                            "Details of Research Publication": "&ldquo;The future of web crowdfunding: An ethereum blockchain approach&rdquo;, Intelligent Technologies for Sensors: Applications, Design, and Optimization for a Smart World, Pages 337-372",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "3",
                            "Details of Research Publication": "&ldquo;A Heuristic Data Aggregation in Heterogeneous Low Power Devices for Internet of Things&rdquo;, Journal of Critical Reviews ISSN &ndash; 2394-5125 Vol 7, Issue 14",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "2",
                            "Details of Research Publication": "&rdquo;Optimized traffic control and Data processing using IoT, Springer Cluster Computing, pp. 1-10, February 2018. 10.1007/s10586-018-2172-5.(SCI)",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Fusion for Image Based Human Age Estimation&rdquo; Intelligent Automation & Soft Computing, Taylor & Francis ISSN: 1079-8587, pp 319-323 Sep 2016",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;TAR: TOA&ndash;AOA Based Random Transmission Directed Localization&rdquo;, Wireless Personal Communication Springer Science Business Media New York 2016, 10.1007/s11277-016-3237-5",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-15",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Mobile Anonymous Trust Routing For Ad Hoc Networks Using Ant Colony Optimization&rdquo; International Journal of Applied Engineering Research, ISSN 0973-4562 Volume 10, Number 4 (2015) pp. 10415-10430, April 2015",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Anonymous Trust Routing for Ad-hoc Networks &ndash; A Meta Heuristic Approach&rdquo;, Life Science Journal ISSN: 1097-8135, Vol. 10, No. 4s, pp. 517-525, Sep 2013",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Mobile Anonymous Trust Based Routing Using Ant Colony Optimization&rdquo;, American Journal of Applied Sciences. ISSN:1546-9239, Vol. 9 No. 8, pp. 1283-1289, Jun 2012",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-11",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;MACT &ndash; Mobile Anonymous Continuous Trust Based Routing Protocol&rdquo; European Journal of Scientific Research ISSN:1450-216X, Vol. 66 No. 2, pp. 187-194, Dec 2011.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Application ID": "202141032225 A",
                            "Title of the Patent": "Detection of Breast Cancer Using AI & ML Based IoT Smart Device: A Secure Blockchain Storage Approach",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "My Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Optimized traffic control and data processing using IoT",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Springer Cluster Computing, pp. 1-10, February 2018. doi.org/10.1007/s10586-018-2172-5.(SCI)."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "\u201cEfficient Secured Two Party Computibg with Encrypted Data for Public Cloud\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Innovative Research in Computer Science & Technology, ISSN: 2347-5552, Vol 3, Issue 2 March 2015."
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "\u201cDetecting Malware by Signature Distribution Algorithm in MANET with Heterogeneous Devices\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Computer Science and Mobile Computing, ISSN 2320-088X, Vol 4, Issue 3, March 2015."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "\u201cFuzzy Regression Based Clustering on Uncertain Data\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Research & Development Organization, ISSN: 3785 \u2013 0855, Vol 2, Issue 3 March 2015."
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "\u201cMobile Anonymous Trust Routing For Ad Hoc Networks Using Ant Colony Optimization\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Applied Engineering Research, ISSN 0973-4562 Volume 10, Number 4 (2015) pp. 10415-10430, April 2015.(ANNEXURE \u2013 II )"
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "\u201cIntelligent Transport System for Human Detection with an Efficient HOG Extraction Method\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Innovative Research in Computer Science & Technology, ISSN: 2347-5552, Volume-3, Issue-3, May-2015."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "\u201cA survey on data and energy reduction in a multi sensor network for detecting rainfall induced landslide\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Research in Information and Communication Engineering ISSN 2321-8762 Online ISSN 2321-8940 Print Volume 2, Issue 12, December 2014."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "\u201cAnt Colony Optimized Mobile Anonymous Trust Routing for Ad-hoc Networks\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Archives Des Sciences, ISSN 1661-464X, Vol. 66, No. 3, pp. 211-223, 2013. (ANNEXURE \u2013 I IMPACT FACTOR 0.21)"
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "\u201cAnonymous Trust Routing for Ad-hoc Networks \u2013 A Meta Heuristic Approach\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Life Science Journal ISSN: 1097-8135,Vol. 10, No. 4s, pp. 517-525, 2013. (ANNEXURE \u2013 I IMPACT FACTOR 0.158)"
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "\u201cMobile Anonymous Trust Based Routing Using Ant Colony Optimization\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "American Journal of Applied Sciences. ISSN:1546-9239, Vol. 9 No. 8, pp. 1283-1289, 2012.(ANNEXURE \u2013 II IMPACT FACTOR 0.2) 9*+8q"
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "\u201cMACT \u2013 Mobile Anonymous Continuous Trust Based Routing Protocol\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "European Journal of Scientific Research ISSN:1450-216X, Vol. 66 No. 2, pp. 187-194, 2011. (ANNEXURE \u2013 II IMPACT FACTOR 0.1)"
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "TAR: TOA\u2013AOA Based Random Transmission Directed Localization",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Wireless Personal Communication - Springer"
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "Fusion for Image Based Human Age Estimation",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Intelligent Automation & Soft Computing - Taylor & Francis."
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "\u201cAnonymous Ad-hoc Network Performance Degradation Analysis in the Presence of Selfish\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal on Computer Science and Engineering ISSN: 0975\u20133397, Vol. 3, No. 3, pp.1302-1306, 2011."
                        }
                    ]
                },
                {
                    "title": "Conferences & Workshops attended",
                    "content": "A Two-day Workshop on \u201cOutcome Based Learning\u201d, Phase-VI was organized for MITS faculty members at Birla Institute of Technology and Science, Pilani, Hyderabad Campus during 26th \u2013 27th August 2016."
                }
            ]
    },

    "Dr. Ben Sujin": {
        "name": "Dr. Ben Sujin",
        "designation": "Professor",
        "email": "drbensujin@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Ben Sujin.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Postdoc",
                            "Specialization": "CSE",
                            "Group": "CSE",
                            "College Name/University": "Singapore Institute of Technology, Singapore",
                            "Year of Passing": "2025"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Group": "CSE",
                            "College Name/University": "Karunya University, India",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computer & Information Technology",
                            "Group": "CIT",
                            "College Name/University": "Manonmaniam Sundaranar University, India",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information Technology",
                            "Group": "Information Technology",
                            "College Name/University": "Manonmaniam Sundaranar University, India",
                            "Year of Passing": "2003"
                        }
                    ]
                }
            ]
    },

    "Dr. S. Satheesh Kumar": {
        "name": "Dr. S. Satheesh Kumar",
        "email": "drsatheeshkumars@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. S. Satheesh Kumar.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Wireless Sensor Networks",
                            "Branch": "CSE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2018"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Kongu Engineering College, Anna University",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Pavaai Engineering College, Anna University",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Wireless Sensor Networks, Machine Learning, Deep Learning, Cloud Computing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58554655000",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/354026",
                        "Google scholar : https://scholar.google.co.in/citations?user=o3tsDkQAAAAJ",
                        "h-Index (As per Scopus Data) : 4"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-2026",
                            "Author Position": "4",
                            "Details of Research Publication": "A Novel Feature Extraction and Siamese Zeiler and Fergus Forward Taylor Network-Based Rice Plant Leaf Disease Detection https://doi.org/10.1111/jph.70074",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-2025",
                            "Author Position": "2",
                            "Details of Research Publication": "An Effective Deep Learning-Based Intrusion Detection System for the Healthcare Environment https://doi.org/10.1142/S1469026824500330",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-2025",
                            "Author Position": "4",
                            "Details of Research Publication": "Smart Heath Solution: Intelligent web-based system for personalized yoga and dietary recommendations for chronic disease management using machine learning https://ijsdr.org/viewpaperforall?paper=IJSDR2501009",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-2025",
                            "Author Position": "4",
                            "Details of Research Publication": "CNN LIPNET: Automated Lip Reading Using Deep Convolutional Neural Networks DOI:10.1109/ICAECT63952.2025.10958857",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-2025",
                            "Author Position": "4",
                            "Details of Research Publication": "Enhanced Machine Learning Approach for Detecting Spammers in Industrial Mobile Cloud Computing Environment DOI: 10.1109/ICICNIS64247.2024.10823355",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-2025",
                            "Author Position": "4",
                            "Details of Research Publication": "Biological Profile Estimation of the Human Skeleton based Forensic Identification using Deep Learning Image Classification DOI: 10.1109/ICICNIS64247.2024.10823326",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Chendur Publishing House, Chennai. Design and Analysis of Algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Heart Stroke Prediction Using Machine Learning Algorithms DOI: https://doi.org/10.47392/IRJAEM.2024.0169",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Data Science and Its Applications in Cyber Security https://www.ijesat.com/ijesat/files/V24I2036_1708960646.pdf",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Modified wild Horse Herd Optimization based Bhattacharyya error constraint (BEC) based L2-norm Linear discriminant analysis (LDA) method for the sentiment analysis DOI:10.52783/jes.2847",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Ep-Satty-MCDM based business decision-making model using behaviour and review data https://doi.org/10.3233/IDA-227446",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Recognize Human Face Reactions using Convolutional Neural Network Techniques DOI:18.0002.IJAEMA.2022.V14I011.200001.01568597177297",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Detecting Fake Reviews using Multi-Dimensional Representation with Fine Grained Aspects Plan DOI:18.0002.IJAEMA.2022.V14I011.200001.01568597177334",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Privacy Preserving Security Spam Detection Technique for Protecting The IOT Devices Using Machine Learning DOI:18.0002.IJAEMA.2022.V14I011.200001.01568597177298",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-2023",
                            "Author Position": "2",
                            "Details of Research Publication": "AETS Global Experimental study of recent issues in underwater data communication under different water channels",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Exploring New Opportunities to Defeat Low-Rate DDOS Attack in Container-Based Cloud Environment DOI:18.0002.IJAEMA.2022.V14I03.200001.01568596705",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Defending against jellyfish attacks using cluster-based routing protocol for secured data transmission in MANET DOI:10.1007/s10586-017-1202-z",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-2020",
                            "Author Position": "1",
                            "Details of Research Publication": "An Secured Data Transmission in Manet Networks with Optimizing Link State Routing Protocol Using ACO-CBRP Protocols DOI: 10.1109/ICSNS.2018.8573630",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-2020",
                            "Author Position": "1",
                            "Details of Research Publication": "An Resilient Hierarchical Authentication Scheme Based Byzantine Attack Detection in Mobile Ad Hoc Networks DOI:10.1166/jctn.2017.6868",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Division and Replication of Data in Grid for Optimal Performance and Security DOI:10.5121/ijgca.2016.7101",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-2019",
                            "Author Position": "2",
                            "Details of Research Publication": "Optimal Performance and Security for Data in Grid using TDEA https://doi.org/10.1016/j.jksuci.2023.101744",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-2019",
                            "Author Position": "2",
                            "Details of Research Publication": "A Survey on Security in Smart Grid Environment DOI:10.1002/sec.559",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Application ID": "202341081303",
                            "Title of the Patent": "Predictive Analytics for Proactive Fault Detection in Internet of Things (Iot) Sensors Using Machine Learning",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Application ID": "202241057183 A",
                            "Title of the Patent": "STRESS DETECTION IN IT PROFESSIONALS BY IMAGE PROCESSING AND KNN",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Application ID": "202341052745 A",
                            "Title of the Patent": "An intelligence fish tank monitoring system using IOT",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Application ID": "6259379",
                            "Title of the Patent": "Solar Powered Agriculture Robot",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Application ID": "50/2021",
                            "Title of the Patent": "An Automated Insurance Claim Generation System Using Blockchain Based Smart Contracts",
                            "Status": "Published"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Application ID": "201841010055",
                            "Title of the Patent": "IOT based intelligent municipal waste management system by auto detecting and filtering non-bio-degradable plastic waste",
                            "Status": "Granted"
                        }
                    ]
                },
                {
                    "title": "Consultancy",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2018-2019",
                            "Name of the Consulting Firm": "Anbhumathi Tex, Erode, T.N",
                            "Title of the Project/Event": "Textile Billing Software",
                            "Amount in Rs. /-": "20,000"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2016-2017",
                            "Name of the Consulting Firm": "Fabric Management System",
                            "Title of the Project/Event": "Management ERP Portal System",
                            "Amount in Rs. /-": "30,000"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2016-2017",
                            "Name of the Consulting Firm": "Habiliment Management System",
                            "Title of the Project/Event": "Management ERP Portal System",
                            "Amount in Rs. /-": "30,000"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Best Proctor Award by Nandha Engineering College for the year 2016-2017.",
                        "Deputy Head of the Department in IARE(Autonomous), Hyderabad. TS."
                    ]
                }
            ]
    },

    "Dr. K. Chokkanathan": {
        "name": "Dr. K. Chokkanathan",
        "email": "chokkanathank@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. K. Chokkanathan.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Network Traffic Classification",
                            "Branch": "Computer Science Engineering",
                            "College Name/University": "Veltech University, Chennai",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Computer Science Engineering",
                            "Branch": "Computer Science Engineering",
                            "College Name/University": "Thiruvalluvar College Of Engg. And Tech",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "M.C.A.",
                            "College Name/University": "Bharath institute of Science and Technology, Madras University",
                            "Year of Passing": "2000"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Network traffic classification, Machine learning Algorithms, Blockchain"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://orcid.org/0000-0001-9099-9978 (57201880044)",
                        "Vidwan: https://mits.irins.org/profile/274348",
                        "Google scholar: https://scholar.google.com/citations?user=vWi7U1IAAAAJ&hl=en&oi=ao",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhanced chronic kidney disease detection using XGBoost with improved brainstorm optimization for hyperparameter tuning, https://doi.org/10.1007/s42452-025-07633-7 , 10 October 2025, Volume 7, article number 1181, 1-25 pages.",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Blockchain Integration for Smart City Infrastructure: Advancing Urban Connectivity and Security",
                            "Indexing": "SCOPUS",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhancing image-based diagnosis of gastrointestinal tract diseases through deep learning with EfficientNet and advanced data augmentation techniques, ,Volume-24, Pages-306, 12-Nov-2024.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Enhancing IoT healthcare security with verifiable random ranking-based secure blockchain consensus mechanism",
                            "Indexing": "AIP",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "AI-driven zero trust architecture: Enhancing cyber-security resilience",
                            "Indexing": "IEEE",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Attention-based Feature Fusion with External Attention Transformers for Breast Cancer Histopathology Analysis",
                            "Indexing": "IEEE",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Bio-Inspired Blockchain for Healthcare Workers: Insights on Covid-19",
                            "Indexing": "SCOPUS",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Augmented Reality-Enabled IoT Devices for Wireless Communication",
                            "Indexing": "SCOPUS",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Smart Containers for Dieticians: Enabling Efficient Nutritional Monitoring through IoT IEEE",
                            "Indexing": "IEEE",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "MLPDR: High Performance ML Algorithms for the Prediction of Diabetes Retinopathy IEEE",
                            "Indexing": "IEEE",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Developing Algorithms for Personalized Recommendations Based on User Behavior IEEE",
                            "Indexing": "IEEE",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "4",
                            "Details of Research Publication": "Hybridization of mean shift clustering and deep packet inspected classification for network traffic analysis, Wireless Personal Communications, Volume-127, Issue-1, Pages-217-233",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "4",
                            "Details of Research Publication": "A Secured and Decentralized Medical Document Management Methodology using a Private Block Chain, International Journal of Computer Science and Network SecurityVolume-22, Issue-6, Pages-670-74",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "4",
                            "Details of Research Publication": "Plant Identification and Classification Using Multiwavelet Transform, Publication date-2021/5-Annals of the Romanian Society for Cell Biology-Volume-25, Issue-5, Pages-4295 to 4300",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "4",
                            "Details of Research Publication": "Deep Packet Inspection Using Hybrid Classifier for Unknown Traffic Flows in the Internet, Publication date, 2021/3, ICTACT journal on communication technology,Volume-12, Issue-01, Pages-2239 -2243",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "4",
                            "Details of Research Publication": "Signature Based Key Authentication Protocol for Wireless Body Sensor Networks, 2020/12, European Journal of Molecular & Clinical Medicine (EJMCM), Volume-7, Issue-3, Pages-5563-5572",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "2",
                            "Details of Research Publication": "An integrated approach for network traffic analysis using unsupervised clustering and supervised classification, 2019/9, Int. J. Internet Technology and Secured Transactions - https://doi.org/10.1504/ijitst.2019.102797 , Volume-9, Issue-4, Pages-517-536",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "2",
                            "Details of Research Publication": "Dynamic Packet Scheduler for Queuing Real-Time and Non-Real Time Internet Traffic, 2019, International Journal of Recent Technology and Engineering (IJRTE), Volume-8, Issue-3, pages-3424-3428",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "2",
                            "Details of Research Publication": "Privacy Protection and Perfect Classification Nature of C4.5 Algorithm, 2018, International Journal of Engineering & Technology, Volume-7, Issue-2.24, pages-235-238.",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "2",
                            "Details of Research Publication": "A study on flow based classification models using machine learning techniques, 2018, International Journal of Intelligent Systems Technologies and Applications, Volume-17, Issue-4, pages-467-482",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2012-13",
                            "Author Position": "1",
                            "Details of Research Publication": "Simplified Filtering Technique to Edge Reconstruction and Comparison of Original Image in Low to High Density Noise Values, 2012, International Journal of Science and Research, Volume-3, Issue-8, Pages-538-541",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Application ID": "202241053218",
                            "Title of the Patent": "Deep Learning based Cybercrime Detection Technology",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Application ID": "202141038370",
                            "Title of the Patent": "Blockchain- enabled Intelligent IoT Architecture with AI",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Application ID": "202141006348",
                            "Title of the Patent": "Advanced Technology in Smart City, Global Transportations and Logistics Using AI.",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Application ID": "202111004715",
                            "Title of the Patent": "Intelligent Connectivity Driving using vehicular Ad-hoc networks for further transportation",
                            "Status": "Published"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Application ID": "202041015194",
                            "Title of the Patent": "ATM card authentication system for online banking using smartphone",
                            "Status": "Published"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Application ID": "202141055281",
                            "Title of the Patent": "Automated Education Process with Feedback system using Machine Learning and AI.",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Resource Person for a Session on &ldquo;Artificial Intelligence&rdquo; , Organized by AIDS Department, Adhiparasakthi College of Engineering, Kalavai, T.N., on 25-October-2025.",
                        "As a Resource Person for a Session in One Week FDP &quot;Advance Tools & Technology for Research development&quot;, Topic &ldquo;Impact of R & D on the future of AI and ML&rdquo; organized by Sri Venkateshwara College of Engineering, Nellore, A.P., on 2-Oct-2024.",
                        "As a Resource person, Session in a National Conference, on &ldquo;Ethical Al Leadership: Navigating the moral and Social Implications of Al.&quot;, organized by MBA Department, PKR Arts College for Women, Gobichettipalayam, Erode, T.N. on 25-Sep-2024.",
                        "As a Resource person, One Day Hands-on session- &ldquo;Python for Artificial Intelligence and Machine Learning using&rdquo;, Organized by ECE Department, Adhiparasakthi College of Engineering, Kalavai, T.N., on 9-April-2024.",
                        "As a Resource person gave an expert lecture on &ldquo;Artificial Intelligence and its Applications in Healthcare Industry&rdquo;, in National Level Five day Virtual Faculty Development Program - &quot;RECENT TRENDS 2022&quot;, organized by MSR Arts, Science and Commerce college, Bangalore, on 24-March-2022.",
                        "As a Resource person gave an expert lecture on &ldquo;Artificial Intelligence and its Applications in Healthcare Industry&rdquo;, in a One Week Virtual Faculty Development Program, organized by Narayana Engineering College, Nellore, on 25-Feb-2022.",
                        "AICTE-STTP Online Mode Expert Lecture on &ldquo;Cloud Computing and Robotics for Industrial Automation&rdquo;, held on 23-Sep-2021, Organized by Rajagopal polytechnic college, Gudiyattam.",
                        "AICTE-STTP Online Mode Expert Lecture on &ldquo;&ldquo;Artificial Intelligence in IoT&rdquo;, held on 24-Aug-2021, Organized by Rajagopal polytechnic college, Gudiyattam.",
                        "Online National Webinar on &ldquo;Blockchain Technology and its Features&rdquo;, held on 28-May-2021, Organized by CSI College of Engineering, Ooty.",
                        "Online Webinar on &ldquo;Blockchain Technology&rdquo;, held on 21-May-2021, Organized by the Department of AI & DS, KGISL, Coimbatore.",
                        "Online Webinar on &ldquo;Artificial Intelligence in Robotics&rdquo; held on on 12th March 2021, Organized by Department of Computer Applications, Dr.N.G.P Arts and Science College, Coimbatore. Tamil Nadu.",
                        "AICTE-STTP Online Mode Expert Lecture on &ldquo;Role of Artificial Intelligence in Robotics&rdquo;, held on 16-Feb-2021, Organized by Rajagopal polytechnic college, Gudiyattam.",
                        "Chaired an Online-Session on &ldquo;Blockchain Technology&rdquo;, held on 22nd Jan- 2021, Organized by Marudar Kesari Jain College for Women, Vaniyambadi.",
                        "Online Webinar on &ldquo;Usage of Blockchain Technology in Various Domains&rdquo;, held on 5th July-2020, Organized by Higher College of Technology, Muscat, Sultanate of Oman.",
                        "Online Webinar on &ldquo;Usage of Blockchain Technology in Various Domains&rdquo;, held on 5th July-2020, Organized by Higher College of Technology, Muscat, Sultanate of Oman.",
                        "Two Days National Level Online-FDP on &ldquo;BlockChain Technology&rdquo;, held on 30th & 31st May-2020, Organized by MITS-MCA dept.",
                        "Guest speaker in a National Level Seminar on &ldquo;Data Mining and Its Techniques & Embedded System&rdquo;, held on 27th Feb-2012, Organized by Indo- American college, Cheyyar, TamilNadu.",
                        "Guest Lecture on &ldquo;Data Mining Concepts and Techniques&rdquo;, held on 6th Jan-2012, Organized by Dept. of CSE, Adhiparasakth College of Engineering, Kalavai, TamilNadu.",
                        "Chief Guest Address and Expert Lecture on &ldquo;Networking Concepts&rdquo;, held on 1st March-2011, Organized by Arignar Anna Government Arts College, Cheyyar, Tamil Nadu."
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "A Hybrid Particle Swarm Optimization and Simulated Annealing With Load Balancing Mechanism for Resource Allocation in Fog-Cloud Environments",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IEEE Access, 1 November 2024, Date of current version 27 November 2024, DOI 10.1109/ACCESS.2024.3489960"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Enhancing image-based diagnosis of gastrointestinal tract diseases through deep learning with EfficientNet and advanced data augmentation techniques",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "BMC Medical Imaging (2024) 24:306, https://doi.org/10.1186/s12880-024-01479-y"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "Attention-Based Feature Fusion with External Attention Transformers for Breast Cancer Histopathology Analysis",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IEEE Access, 10 August 2024, Date of Publication 16 November 2024, Date of current version 17 September 2024, DOI 10.1109/ACCESS.2024.3443126"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "\u201cSignature Based Key Authentication Protocol for Wireless Body Sensor Networks\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "European Journal of Molecular & Clinical Medicine (EJMCM), Volume 7, Issue 3, Dec-2020."
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "\u201cDynamic Packet Scheduler for Queuing Real Time and Non Real Time Internet Traffic\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Recent Technology and Engineering (IJRTE), Volume-8 Issue-3, September 2019."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "\u201cAn Integrated Approach For Network Traffic Analysis Using Unsupervised Clustering And Supervised Classification\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Int. J. of Internet Technology and Secured Transactions-Vol. 9, No. 4, Sep-2019."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "\u201cA Study on Flow Based Classification Models Using Machine Learning Techniques\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Int. J. of Intelligent Systems Technologies and Applications-(Inderscience Publishers) Vol. 17, No. 4, pp. 467-482, 2018 July."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "\u201cDistribution based EM clustering and random forest classification ensemble model for effective network traffic classification\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Cluster Computing (Springer), Acceptance Received."
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "A Study on Customer lifetime value prediction by a Markov chain based data mining model: Application to an auto servicing in Tata Motors.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on \u201cEngineering and Technology\u201d - Sri Venkateshwara College of Engineering and Tech., Thiruppachur, T.N., 18th and 19th Apr-2013."
                        }
                    ]
                },
                {
                    "title": "Conferences & Workshops attended",
                    "content": [
                        "Participated in TEQIP-III sponsored Two Day online Workshop on \u201cAgile Project Management: The Journey for Young Corporates\u201d, organized by JNTUA & EDP Cell during 23-24-March 2021.",
                        "Participated in the AICTE sponsored one week Short Term Training Programme \u201cIndustrial Robotics\u201d, from 25-31-Jan-2021, organized by Rajagopal Polytechnic College, Gudiyattam.",
                        "Design Thinking Workshop (Virtual Mode) on 27-Jan-2021 powered by IBM, organized by (TOOOPLE)JNTUA, Anantapuramu.",
                        "One Day Session \"IIC 2.0 and ARIIA 2020\" on Mentoring & Orientation held on 2nd August 2019 at University of Hyderabad, Hyderabad.",
                        "One Day workshop on Creating Roadmap for Innovation and Incubation Centres in AP Educational Institutions, organized by ITE&C department on 19-10-2016 at Gateway Hotel in Vijayawada.",
                        "One Day workshop on \u201cMobile IPv6 and Network Layer Mobility Management\u201d was organized by ERNET India and ECE Dept., IISc, Bangalore on 18th January 2013."
                    ]
                },
                {
                    "title": "Paper Presentations",
                    "content": [
                        "Presented a Paper entitled \u201cGenetic Approach for Computing Stock Market Forecasting\u201d in the \"PSG-ACM National Conference on intelligent Computing (NCIC 2013)\" organized by Dept. of Computer Science & Engineering, PSG College of Technology, Coimbatore, 26-27 April, 2013.",
                        "Attended & Presented a Paper entitled \u201cA study on Customer lifetime value prediction by a Markov chain based data mining model: Application to an auto servicing in Tata Motors\u201d in an International Conference on Engineering & Technology-ICET2K13 organized Dept. of Electronics & Communication Engineering , Sri Venkateshwara College of Engineering and Technology, Thirupachur, Chennai, T.N. ( 18-20 April, 2013).",
                        "Presented a paper titled \u201d Privacy and security issues in Ubiquitious computing\u201d in a National conference on Cryptography and network security\" Organized by Department of CSE, SVS Group of Institutions, Bheemaram, Hanamkonda , on 22-03-2013 & 23-03-2013.",
                        "Presented a paper titled \u201cMajor factors affecting esposal of soas using the rough set of approach in data mining\u201d Organized by Sri Ganesh School of Business Management,Attur Main Road, Mettupatti, Valapaddy (Tk),Salem-Dt, Tamil Nadu, INDIA on 22 February 2013.",
                        "Presented a paper titled \u201cAn authentication frame work for ubiquitous computing environment\u201dOrganized by Sri Ganesh School of Business Management,Attur Main Road, Mettupatti, Valapaddy (Tk),Salem-Dt, Tamil Nadu, INDIA on 22 February 2013."
                    ]
                }
            ]
    },

    "Dr. A. Poongodai": {
        "name": "Dr. A. Poongodai",
        "email": "drpoongodaia@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. A. Poongodai.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Pondicherry University",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "M.Tech",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "JNTU Hyderabad",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Madras University",
                            "Year of Passing": "2000"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "AI and ML, Hybrid System"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57210204510",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/250645",
                        "Google scholar: https://scholar.google.com/citations?user=ptEplTsAAAAJ",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Improvised Breast Cancer Detection Using CNN With Particle Swarm Optimization, 6th International Conference on Inventive Research in Computing Applications, 2025, 25-27 June 2025, 10.1109/ICIRCA65293.2025.11089807, IEEE Conference Location: RVS College of Engineering and Technology, Coimbatore, India",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Human Emotion Detection Through Real-Time Facial Expressions Using Deep Learning, 6th International Conference on Inventive Research in Computing Applications, 025, 25-27 June 2025, 0.1109/ICIRCA65293.2025.11089747, IEEE Conference Location: RVS College of Engineering and Technology, Coimbatore, India",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Grey wolf optimization technique with U-shaped and capsule networks-A novel framework for glaucoma diagnosis, MethodsX, Volume 14, IF 1.9, https://doi.org/10.1016/j.mex.2024.103052",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhanced diabetic retinopathy detection using U-shaped network and capsule network-driven deep learning, MethodsX, Volume 14, IF 1.9, https://doi.org/10.1016/j.mex.2024.103052",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Human Emotion Recognition Based on Machine Learning Algorithms with low Resource Environment, ACM Trans. Asian Low-Resour. Lang. Inf. Process, Online Published, IF 3.16, https://doi.org/10.1145/3640340",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Advancing Glaucoma Detection: Synthetic Image Generation via Generative Adversarial Networks and Classification with Pretrained MobileNetV2,&quot; 2024 International Conference on System, Computation, Automation and Networking (ICSCAN), PUDUCHERRY, India, 2024, pp. 1-5, doi: 10.1109/ICSCAN62807.2024.10893916",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Biological inspired self-organized secure autonomous routing protocol and secured data assured routing in WSN: Hybrid EHO and MBO approach, International Journal of Communication system, Volume-35, Issue-4, 1.8, https://doi.org/10.1002/dac.5044",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Association Between Demographic Factors and Internet Banking Usage. In: Mirzazadeh, A., Molamohamadi, Z., Erdebilli, B., Babaee Tirkolaee, E., Weber, GW. (eds) Science, Engineering Management and Information Technology. SEMIT 2023. Communications in Computer and Information Science, vol 2198. Springer, Cham. https://doi.org/10.1007/978-3-031-72284-4_27",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "A Novel Decision Support System for the Prognosis of Parkinson Disease, IEEE ISMAC 2022 Conference Proceedings, 10-12, Nov&rsquo; 2022, https://ieeexplore.ieee.org/abstract/document/9986506",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Fruit Detection Using Recurrent Convolutional Neural Network, Lecture Notes in Electrical Engineering book series (LNEE, volume 698), Springer Singapore.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "3",
                            "Details of Research Publication": "Preventing Crime Using Advanced Artificial Intelligence Techniques, Proceedings of International Conference on Advances in Computer Engineering and Communication System &ndash; ICACECS 2020, 978-981-15-9292-8, VNR Vignana Jyothi Institute of Engineering and Technology, Hyderabad, Springer. https://link.springer.com/chapter/10.1007/978-981-15-9293-5_6",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "A Command Line Tool for Tracking Error Details of Program using Web Scrapper, International Journal of Recent Technology and Engineering (IJRTE), 2277-3878, Volume-8, Issue-2S11, September 2019 https://www.ijrte.org/wp-content/uploads/papers/v8i2S11/B12760982S1119.pdf",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Regression Based on Examining Population Forecasting Accuracy, International Journal of Recent Technology and Engineering (IJRTE), 2277-3878, Volume-8, Issue-1S4, June 2019, www.ijrte.org/wp-content/uploads/papers/v8i1s4/A11270681S419.pdf",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202541020125 A",
                            "Title of the Patent": "AI-Enhanced Autonomous Underwater Exploration Apparatus",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Application ID": "202341067306",
                            "Title of the Patent": "System And Method For Quality Of Service (Qos): Improvement In Wireless Networks",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Application ID": "202341043568 A",
                            "Title of the Patent": "Design And Development Of Automated Attendance Management System Based On Face Recognition Algorithms",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Application ID": "202241024866 A",
                            "Title of the Patent": "A Smart Blockchain based system for dispatching Government Schemes and Funds to the Authorized People",
                            "Status": "Published"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Application ID": "202041048476 A",
                            "Title of the Patent": "Chest Strap for Heart Attack Prediction using Internet Of Medical Things with Deep Learning Algorithm",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Consultancy",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Name of the Consulting Firm": "Astra Softwares",
                            "Title of the Project/Event": "Prediction of Server Hardware and Software Failures Using AI",
                            "Amount in Rs. /-": "1,30,000"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Outstanding Faculty Award by Ramfo Academic Award, R. K. Foundation, Vellore, Tamil Nadu in the year 2023."
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "A Novel Decision Support System for the Prognosis of Parkinson Disease",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IEEE ISMAC 2022 Conference Proceedings, 10-12, Nov\u2019 2022"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Association between Demographic factors and Internet Banking Usage",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Accepted in Lecture notes, Springer."
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "Prediction of polycystic ovarian syndrome using F3I based Machine Learning Approach for earlier treatment",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Accepted in Lecture notes, Springer."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "Internet Banking Usage and E-Service Quality Dimensions: A Pilot Study,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Accepted in International Conference on \u201cContinuity, Consistency and Innovation in Applied Sciences and Humanities\u201d, Sep 2022"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "Biological inspired self-organized secure autonomous routing protocol and secured data assured routing in WSN: Hybrid EHO and MBO approach",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Communication system, Volume-35, Issue-4, https://doi.org/10.1002/dac.5044."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "Fruit Detection Using Recurrent Convolutional Neural Network",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Lecture Notes in Electrical Engineering book series (LNEE, volume 698), Springer Singapore."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "Preventing Crime Using Advanced Artificial Intelligence Techniques",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Proceedings of International Conference on Advances in Computer Engineering and Communication System \u2013 ICACECS 2020, 978-981-15-9292-8, VNR Vignana Jyothi Institute of Engineering and Technology, Hyderabad, Springer."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "Regression Based on Examining Population Forecasting Accuracy",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Recent Technology and Engineering (IJRTE), 2277-3878, Volume-8, Issue-1S4, June 2019."
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "A Command Line Tool for Tracking Error Details of Program using Web Scrapper",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Recent Technology and Engineering (IJRTE), 2277-3878, Volume-8, Issue-2S11, September 2019."
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "A Novel Method for prediction of Parkinson Disease (Voice Dysphonia): Statistical Approach",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Control Theory and Application, vol. 10, No. 1, ISSN : 0974"
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "Generic Method for Tracking the Progressiveness of Parkinson Disease (speech signal): Regression Technique",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Control Theory and Application."
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "An Empirical approach for fuzzy rules using Classification and Regression Tree",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Control Theory and Application and Proceedings of the 2nd International Conference on Sustainable Computing Techniques in Engineering, Science and Management (SCESM)"
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "Prognostic System for Parkinson Disease (An overview)",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Research in Computer and communication Engineering, Vol.3, Issue 8. (IF \u2013 5.359)."
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "AI Technique in Diagnostics and Prognostics",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Computer Applications (0975 \u2013 8887), 2nd National Conference on Future Computing. (IF - 3.1524)."
                        },
                        {
                            "S.No": "15",
                            "Title of the Paper": "iGain - Apriori: An interest gain based rule assessment for Association Rule Mining",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Scientific and Research Publications, Volume 2, Issue 1."
                        },
                        {
                            "S.No": "16",
                            "Title of the Paper": "Extended Apriori for association rule mining: Diminution based utility weightage measuring approach",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Global Journal of Computer Science and Technology, Vol 11 Issue 22, Online ISSN: 0975-4172 & Print ISSN: 0975-4350."
                        },
                        {
                            "S.No": "17",
                            "Title of the Paper": "Mining Weighted Association Rules",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IJAEST, International Journal of Advanced Engineering Sciences and Technologies, Vol No. 11, Issue No. 1, pp. 153 - 156."
                        },
                        {
                            "S.No": "18",
                            "Title of the Paper": "An Ontology Based Search for Relevant Pages Using Semantic Web",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Engineering Sciences and Technologies, Vol.11, Pp. 106 \u2013 110."
                        },
                        {
                            "S.No": "19",
                            "Title of the Paper": "Detection and Removal of Short Gun Surgery Bad Smell",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Computational Intelligence and Information Security, vol. 1, no. 8."
                        }
                    ]
                }
            ]
    },

    "Dr. Vamsi Bandi": {
        "name": "Dr. Vamsi Bandi",
        "email": "drvamsib@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Vamsi Bandi.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Machine Learning, Deep Learning",
                            "Branch": "Information Technology",
                            "College Name/University": "Lincoln University College, Malaysia",
                            "Year of Passing": "2022"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computer Science and Technology in Bio-informatics",
                            "Branch": "CST",
                            "College Name/University": "Andhra University College of Engineering, Visakhapatnam",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "D.M.S. Sri Venkateshwara Hindu College, Machilipatnam",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Medical Image Analysis"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57222591822",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/218697",
                        "Google scholar: https://scholar.google.com/citations?user=LVyNYcYAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 6"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Kolmogorov&ndash;Arnold Networks for predicting carotid intima-media thickness in cardiovascular risk assessment. Sci Rep 15, 32108 (2025). https://doi.org/10.1038/s41598-025-14869-1",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Predicting Diabetic Distress and Emotional Burden in Type-2 Diabetes Using Explainable AI,&quot; in IEEE Access, vol. 13, pp. 109484-109502, 2025, doi: 10.1109/ACCESS.2025.3582191",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "A Stroke Complication Neural Network Model to Predict the Severity of Brain Stroke Using Family History. In: Lin, F.M., Patel, A., Kesswani, N., Sambana, B. (eds) Accelerating Discoveries in Data Science and Artificial Intelligence I. ICDSAI 2023. Springer Proceedings in Mathematics & Statistics, vol 421. Springer, Cham. https://doi.org/10.1007/978-3-031-51167-7_79",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "An Early-Stage Colorectal Cancer Detection from Colonoscopy Images Using Enhanced Res-UNET. In: Lin, F.M., Patel, A., Kesswani, N., Sambana, B. (eds) Accelerating Discoveries in Data Science and Artificial Intelligence I. ICDSAI 2023. Springer Proceedings in Mathematics & Statistics, vol 421. Springer, Cham. https://doi.org/10.1007/978-3-031-51167-7_5",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Prediction of Rice Leaf Diseases at an Early Stage Using Deep Neural Networks. In: Lin, F.M., Patel, A., Kesswani, N., Sambana, B. (eds) Accelerating Discoveries in Data Science and Artificial Intelligence I. ICDSAI 2023. Springer Proceedings in Mathematics & Statistics, vol 421. Springer, Cham. https://doi.org/10.1007/978-3-031-51167-7_6",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Machine learning-based classification of mosquito wing beats using Mel spectrogram images and ensemble modeling. Traitement du Signal, Vol. 41, No. 4, pp. 2093-2101. https://doi.org/10.18280/ts.410437",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;A Memory-Based Neural Network Model for English to Telugu Language Translation on Different Types of Sentences&rdquo;. International Journal of Advanced Computer Science and Applications (ijacsa) 15.7 (2024). http://dx.doi.org/10.14569/IJACSA.2024.0150706",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;A Detailed Case Study on Various Challenges in Vehicular Networks for Smart Traffic Control System Using Machine Learning Algorithms&rdquo;, 2024, CRC Press, 37, DOI: 10.1201/9781003409502-3",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Unicode-Powered Handwritten Telugu-to-English Character Recognition and Translation System using Deep Learning. International Journal of Intelligent Systems and Applications in Engineering, 12(10s), 515&ndash;525. Retrieved from https://ijisae.org/index.php/IJISAE/article/view/4400",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Lexical based reordering models for English to Telugu machine translation. Revue dIntelligence Artificielle, Vol. 37, No. 5, pp. 1109-1120. https://doi.org/10.18280/ria.370503",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "An Efficient, Lightweight, Tiny 2D-CNN Ensemble Model to Detect Cardiomegaly in Heart CT Images. Journal of Personalized Medicine, 13(9), 1338. https://doi.org/10.3390/jpm13091338",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "A Corpus-Based Auto-encoder-and-Decoder Machine Translation Using Deep Neural Network for Translation from English to Telugu Language. SN COMPUT. SCI. 4, 354 (2023). https://doi.org/10.1007/s42979-023-01678-4",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "An Auto Encoder-Decoder Approach to Classify the Bird Sounds Using Deep Learning Techniques. SN COMPUT. SCI. 4, 289 (2023). https://doi.org/10.1007/s42979-023-01686-4",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Prediction of Micro Vascular and Macro Vascular Complications in Type-2 Diabetic Patients using Machine Learning Techniques&rdquo;. International Journal of Advanced Computer Science and Applications (IJACSA) 13.11 (2022). http://dx.doi.org/10.14569/IJACSA.2022.0131103",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "202541080172",
                            "Title of the Patent": "Streamlined Offline Exam Management System for Higher Education Institutions",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "SW-25721/2025-CO (Copyright Act,1957)A",
                            "Title of the Patent": "ML Studio for Scientific Data Using Statistical Analysis: An Auto ML Approach",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Consultancy",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Name of the Consulting Firm": "Standardinsights, Chennai",
                            "Title of the Project/Event": "MVP for XERP",
                            "Amount in Rs. /-": "1,00,000"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Best Reviewer Award - 2nd International Conference on Data Science and Artificial Intelligence (ICDSAI) 2023",
                        "Ratified as Assistant Professor 2024 under JNTU-A, Ananthapuramu",
                        "Ratified as Assistant Professor 2017 under JNTU-K, Kakinada"
                    ]
                }
            ]
    },

    "Dr. Purandhar N": {
        "name": "Dr. Purandhar N",
        "email": "drpurandharn@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Purandhar N.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Anna University, Chennai",
                            "Year of Passing": "2022"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Sri Venkateswara University College of Engineering, Tirupati",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Sree Vidyanikethan Engineering College, Tirupati",
                            "Year of Passing": "2004"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning and Data Analytics"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57212148592",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/432174",
                        "Google scholar: https://scholar.google.com/citations?user=FAtU0KYAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Food recognition and calorie estimation in mixed food items using MobileNet., 6th International Conference on Intelligent Communication Technologies and Virtual Mobile Networks (ICICV) (pp. 1014&ndash;1019). IEEE. 10.1109/ICICV64824.2025.11085688",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "Comprehensive Surface Analysis Using PCA and Gradient Vector Flow Snakes for Defect Localization in Robotics Automation. International Journal of Automation and Smart Technology, 15(1). https://www.jausmt.org/index.php/jausmt/article/view/90",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "A deep learning approach for ECG-based cardiac anomaly detection with improved feature extraction. In 2024 Global Conference on Communications and Information Technologies (GCCIT) (pp. 1&ndash;7). IEEE. 10.1109/GCCIT63234.2024.10862751",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Adaptive computational intelligence algorithms for efficient resource management in smart systems. International Journal of Computational and Experimental Science and Engineering, Vol. 14 -No. 1, pp. 331&ndash;339. 10.22399/ijcesen.836",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Cyber-Physical System Security through AI-Driven Intrusion Detection and Blockchain Integration, International Journal of Computational and Experimental Science and Engineering, Vol. 11-No.1, pp. 1356-1362, 10.22399/ijcesen.1168",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Classification of clustered healthcare data analysis using generative adversarial networks (GAN). Soft Computing, 26(12), 5511&ndash;5521. 10.1007/s00500-021-06681-2",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Strategic real-time framework for healthcare using fuzzy C-means systems. Automated Software Engineering, 29(1), 17. 10.1007/s10515-021-00323-1",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "An empirical analysis on big analytics for e-healthcare and agriculture. In International Conference on Artificial Intelligence for Smart Community: AISC 2020, 17&ndash;18 December, Universiti Teknologi Petronas, Malaysia (pp. 409&ndash;417). Springer Nature Singapore.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Clustering healthcare big data using advanced and enhanced fuzzy C-means algorithm. International Journal of Communication Systems, 34(1), e4629. 10.1002/dac.4629",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Review of data extraction, segregation & privacy with big data analytics in the online health care systems. In 2019 International Conference on Intelligent Sustainable Systems (ICISS) (pp. 193&ndash;197). IEEE. 10.1109/ISS1.2019.8907973",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202541020127A",
                            "Title of the Patent": "Intelligent traffic management apparatus using reinforcement learning",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "\u201cHypertension Glaucoma Detection using Angular Sinusoidal Multiclass Hinge Support Machine Learner\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Applied Artificial Intelligence. (Paper under Review)."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "\u201cStrategic real time framework for healthcare using fuzzy C\u2011means systems\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Automated Software Engineering, Online ISSN: 0928-8910, Impact Factor:1.273, https://doi.org/10.1007/s10515-021-00302-0."
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "\u201cClassification of Clustered Healthcare Data Analysis Using Generative Adversarial Networks (GAN)\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Soft Computing, Online ISSN: 5511\u20135521, Impact Factor: 3.643, https://doi.org/10.1007/s00500-022-07026-7."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "\u201cClustering healthcare big data using advanced and enhanced fuzzy C\u2010means algorithm\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Communication Systems, Online ISSN: 1074-5351, Impact Factor: 2.047, https://onlinelibrary.wiley.com/doi/epdf/10.1002/dac.4629."
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "\u201cResearch on Cloud Computing By using SaaS Model\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Recent Technology and Engineering (IJRTE), ISSN: 2277-3878, Volume-8, Issue-14."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "\u201cA Model to improve the performance Condor for DAG based tasks through Cache Memory in Grid environments\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal International Journal of New Technologies in Science and Engineering, ISSN 2349-0780, Vol 2, Issue -2. Nov 2015."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "\u201cImproving the performance Condor for DAG based tasks through Cache Memory in Grid environments\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Innovative Research in Computer and Communication Engineering, ISSN(Online): 2320-9801, Vol-2, Issue-4, Sept 2014."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "\u201cAn Empirical Analysis on Big Analytics For E-healthcare& Agriculture\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Virtual Conference on Artificial Intelligence for Smart Community, Nov 2022, Springer, ISBN: 978-981-16-2183-3, https://doi.org/10.1007/978-981-16-2183-3_40."
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "\u201cReview of Data Extraction, Segregation & Privacy with Big Data Analytics in the Online Health Care Systems\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Intelligent Sustainable Systems (ICISS 2019) IEEE Xplore Part Number: CFP19M19-ART; ISBN: 978-1-5386-7799-5 DOI: 10.1109/ISS1.2019.8907973"
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "\u201cImproving the performance Condor for DAG based tasks through Cache Memory in Grid environments\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference on Recent Trends in Electronics and Computer Science Engineering at SV College of Engineering on 27th August 2014 -"
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "\u201cEfficient Cache Management System in DAG-Condor\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National conference on High Performance computing and Networking, held at Annamacharya Institute of Technology and Sciences, Rajampet, on 13th and 14th August 2011."
                        }
                    ]
                },
                {
                    "title": "Book Publication",
                    "content": "Dr. S. Anandamurugan, Dr. S. Ayyasamy, Mr. A. Ganesh and Mr. N. Purandhar, \u201cWireless Sensor Network for Internet of Things\u201d, 2020, AkiNik Publications, New Delhi, ISBN: 978-93-90420-20-9, https://doi.org/10.22271/ed.book.907"
                }
            ]
    },

    "Dr. K. Hemalatha": {
        "name": "Dr. K. Hemalatha",
        "email": "drhemalathak@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Hemalatha.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Computer Science",
                            "Branch": "Computer Science",
                            "College Name/University": "Sri Padmavati Mahila Visvavidyalayam (SPMVV), Tirupati",
                            "Year of Passing": "2018"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "M.C.A.",
                            "College Name/University": "S.V. University",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Maths, Physics, Computer Science",
                            "Branch": "B.Sc.",
                            "College Name/University": "S.V. University",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Artificial Intelligence, Natural Language Processing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=59772689100",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/274329",
                        "Google scholar: https://scholar.google.com/citations?user=f9PBk7wAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Consensus-Based Cryptographic Framework for Side-Channel Attack Resilience in Cloud Environments, Journal of Harbin Institute of Technology (New Series), DOI:10.11916/j.issn.1005-9113.2023130.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Large Language Model based Personalized Learning Assistant for Career-Oriented Skills, 2nd International Conference on Signal Processing, Communication, Power and Embedded System (SCOPES), Paralakhemundi Campus, Centurion University of Technology and Management, Odisha., India, 2024, pp. 1-6, doi: 10.1109/SCOPES64467.2024.10990788.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Texture Features Based Hybrid Multi Support Vector Machine Model for the diagnosis of Alzheimers disease through Brain MRI Images 2023 International Conference on Computational Intelligence, Networks and Security (ICCINS), Mylavaram, India, 2023, pp. 1-6, doi: 10.1109/ICCINS58907.2023.10450096.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "IoT-driven automatic vehicle accident rescue system implemented with Proteus, 2023 1st International Conference on Optimization Techniques for Learning (ICOTL), Bengaluru, India, 2023, pp. 1-6, doi: 10.1109/ICOTL59758.2023.10435294.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "An Enhanced Analysis of Blood Cancer Prediction Using ANN Sensor-Based Model, Eng. Proc. 2023, 59, 65. https://doi.org/10.3390/ engproc2023059065 , ISSN: 2673-4591",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Predictive Analysis of Damage Occurred Due to Natural Disasters Using Whale-Optimization Algorithm-Based Hybrid Computation&rdquo;, &rdquo;, Lecture Notes in Networks and Systems, vol 215. Springer, Singapore. https://doi.org/10.1007/978-981-16-1941-0_7 .",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Data Analysis on Biopsies of Breast Cancer Tumors Data Using Data Science. In: Jyothi S., Mamatha D., Satapathy S., Raju K., Favorskaya M. (eds) Advances in Computational and Bio-Engineering. CBE 2019. Learning and Analytics in Intelligent Systems, vol 15. Springer, Cham (20 July 2020), Online ISBN 978-3-030-46939-9, Pages: 461-468.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Utilization of Blockchain Technology to Overthrow the Challenges in Healthcare Industry. In: Venkata Krishna P., Obaidat M. (eds) Emerging Research in Data Engineering Systems and Computer Communications. Advances in Intelligent Systems and Computing, vol 1054. ISBN 978-981-15-0135-7 Feb 2020, Springer, Singapore PP: 199-208.",
                            "Indexing": "SCI & Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "A Comparison of Multi Support Vector Machine Performance with Popular Decomposition Strategies on Alzheimer&rsquo;s Data, In: Jyothi S., Mamatha D., Satapathy S., Raju K., Favorskaya M. (eds) Advances in Computational and Bio-Engineering. CBE 2019. Learning and Analytics in Intelligent Systems, vol 15. Springer, Cham.Online ISBN978-3-030-46939-9, Pages: 469-479.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "3",
                            "Details of Research Publication": "A Fuzzy-Based Expert System to Diagnose Alzheimer&rsquo;s Disease, Internet of Things and Personalized Healthcare Systems, SpringerBriefs in Forensic and Medical Bioinformatics, ISBN 978-981-13-0866-6, November, 2018 pp 65-74",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "An Optimal Neural Network Classifier for Cervical Pap Smear Data, 2017 IEEE 7th International Advance Computing Conference (IACC), Hyderabad, India, 2017, pp. 110-114.doi: 10.1109/IACC.2017.0036,ISSN: 2473-3571",
                            "Indexing": "SCI & Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Feature Extraction of Cervical Pap Smear Images Using Fuzzy Edge Detection Method, In: Satapathy S., Bhateja V., Raju K., Janakiramaiah B. (eds) Data Engineering and Intelligent Computing. Advances in Intelligent Systems and Computing, vol 542 PP.83-90. Springer, Singapore ISBN: 978-981-10-3222-6",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Application ID": "202141059185",
                            "Title of the Patent": "MRI brain segmentation image processing project &ndash; MATLAB",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Acted as Session Chair for National and International Conferences.",
                        "NPTEL Motivated Learner Star",
                        "Elsevier Recognized Reviewer",
                        "NPTEL Top Performing Mentor",
                        "NPTEL Domain Certification in Programming Domain",
                        "Editorial Board of London Journal Press, UK recognized under &quot;Quarterly Franklin Membership&quot; (Membership ID#OS96069).",
                        "Appointed as an NTA Representative for the NEET exam conducted on 5th may 2019."
                    ]
                },
                {
                    "title": "My Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Texture Features Based Hybrid Multi Support Vector Machine Model for the diagnosis of Alzheimer's disease through Brain MRI Images",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IEEE Xplorer, 2023 International Conference on Computational Intelligence, Networks and Security (ICCINS), Mylavaram, India, 2023, pp. 1-6, doi: 10.1109/ICCINS58907.2023.10450096"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "IoT-driven automatic vehicle accident rescue system implemented with Proteus",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IEEE Xplorer, 2023 1st International Conference on Optimization Techniques for Learning (ICOTL), Bengaluru, India, 2023, pp. 1-6, doi: 10.1109/ICOTL59758.2023.10435294."
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "An Enhanced Analysis of Blood Cancer Prediction Using ANN Sensor-Based Model",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Eng. Proc. 2023, 59, 65. https://doi.org/10.3390/ engproc2023059065"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "An IoT Based Interface for the Smart Watering of Plants using Soil Moisture Sensor",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IRO Journal on Sustainable Wireless Systems, 5(2), 175-182. doi:10.36548/jsws.2023.2.008"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "Startup assistant android application",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Engineering Development and Research (IJEDR), ISSN:2321-9939, Vol.10, Issue 5, pp.e532-e535, May 2022"
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "GA based Feature Selection Model using MSVM for the Diagnosis of Alzheimer\u2019s Disease",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Design Engineering, 10752-10761. Retrieved from http://thedesignengineering.com/index.php/DE/article/view/8195,Vol.2021,Issue 09,2021."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "Predictive Analysis of Damage Occurred Due to Natural Disasters Using Whale-Optimization Algorithm-Based Hybrid Computation",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Lecture Notes in Networks and Systems, vol 215. Springer, Singapore. https://doi.org/10.1007/978-981-16-1941-0_7."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "Optimal Blockchain Consensus Algorithms for Crypto Currencies",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Aegaeum Journal, Vol 9, Issue 9, PP NO: 1-7, ISSN No: 0776-3808, Sep 2021."
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "Data Analysis on Biopsies of Breast Cancer Tumors Data Using Data Science",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Advances in Computational and Bio-Engineering. CBE 2019. Learning and Analytics in Intelligent Systems, vol 15. Springer, Cham (20 July 2020), Online ISBN 978-3-030-46939-9, Pages: 461-468."
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "A Comparison of Multi Support Vector Machine Performance with Popular Decomposition Strategies on Alzheimer\u2019s Data",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Advances in Computational and Bio-Engineering. CBE 2019. Learning and Analytics in Intelligent Systems, vol 15. Springer, Cham.Online ISBN978-3-030-46939-9, Pages: 469-479."
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "Python based Expert System for Mango crop Disease Detection using Random Forest",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Test Engineering and Management, Vol.83, PP No: 5428-5432, May-June 2020, ISSN: 0193-4120 (Scopus)."
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "Feature Based Analysis of MSVM on Brain MRI Images",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Test Engineering and Management, Vol.83, PP No: 5748-5752, May-June 2020."
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "Utilization of Blockchain Technology to Overthrow the Challenges in Healthcare Industry",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "(eds) Emerging Research in Data Engineering Systems and Computer Communications. Advances in Intelligent Systems and Computing, vol 1054. ISBN 978-981-15-0135-7 Feb 2020, Springer, Singapore PP: 199-208."
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "Enhanced MLP classifier performance using variant of Back Propagation on Modified Cervical Pap smear Data",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Computer Science Engineering (IJCSE), Vol. 8, Issue No.06, PP: 255-260, ISSN: 2319-7323, Dec 2019."
                        },
                        {
                            "S.No": "15",
                            "Title of the Paper": "A Fuzzy-Based Expert System to Diagnose Alzheimer\u2019s Disease, Internet of Things and Personalized Healthcare Systems",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Springer Briefs in Forensic and Medical Bioinformatics, ISBN 978-981-13-0866-6, November, 2018 pp 65-74"
                        },
                        {
                            "S.No": "16",
                            "Title of the Paper": "An Efficient Fuzzy Hybrid Method for Image Segmentation and Feature Extraction of Cervical Pap smear Images",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Imaging Science and Engineering (IJISE) ISSN: 1934 \u2013 9955, Volume-10, Issue-1, January, 2018."
                        },
                        {
                            "S.No": "17",
                            "Title of the Paper": "Feature Extraction of Cervical Pap Smear Images Using Fuzzy Edge Detection Method. Data Engineering and Intelligent Computing.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Advances in Intelligent Systems and Computing, vol 542 PP.83-90. Springer, Singapore ISBN: 978-981-10-3222-6"
                        },
                        {
                            "S.No": "18",
                            "Title of the Paper": "An Optimal Neural Network Classifier for Cervical Pap Smear Data",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "2017 IEEE 7th International Advance Computing Conference (IACC), Hyderabad, India, 2017, pp. 110-114.doi: 10.1109/IACC.2017.0036,ISSN: 2473-3571"
                        },
                        {
                            "S.No": "19",
                            "Title of the Paper": "Advancements in Multi-Layer Perceptron Training to Improve Classification Accuracy",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "June 17 Volume 5 Issue 6, International Journal on Recent and Innovation Trends in Computing and Communication (IJRITCC), ISSN: 2321-8169, PP: 353 \u2013 357"
                        },
                        {
                            "S.No": "20",
                            "Title of the Paper": "Improvement of Multi-Layer Perceptron Classification on Cervical Pap smear data with Feature Extraction",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Innovative Research in Science Engineering and Technology (IJIRSET), Vol. 5, Issue 12, PP 20419-20424, December-2016, ISSN(Online) : 2319-8753, ISSN (Print) : 2347-6710"
                        },
                        {
                            "S.No": "21",
                            "Title of the Paper": "Performance Comparison of Hierarchical Multi-Layered Perceptron Network with different Back Propagation Algorithms on Cervical Cancer data",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Computational Science, Mathematics and Engineering (IJCSME), Volume-3,Issue-1,PP 217-221,January-2016, E-ISSN-2349-8439"
                        }
                    ]
                },
                {
                    "title": "International Conferences",
                    "content": [
                        "International Conference On Computational Intelligence, Networks And Security (Iccins-2023)\" Held On 22nd & 23rd December 2023, Organized By The Departments Of CSE, It And Ai & Ds, Lakireddy Bali Reddy College Of Engineering (Autonomous), Mylavaram, Andhra Pradesh, India.",
                        "IEEE International Conference on \"Optimization Techniques for Learning\" (ICOTL 2023) organized by School of Computers, MITS,Madanapalle during 7-8 December 2023.",
                        "International Conference on \"Computing, Communications and Data engineering\" (CCODE-2023) organized by Department of Computer Science, Sri Padmavati Mahila Visvavidyalayam, Tirupati 17-18 March 2023.",
                        "International Conference on \" AI&ML in Applied Biotechnology\" (AIMLBIO22) organized by Department of Biotechnology, RV COLLEGE OF ENGINEERING, R.V. Vidyaniketan Post, 8th Mile, Mysuru Road, Bengaluru - 560059, 8-10th December 2022.",
                        "International Conference on \"Advanced Materials and Processes for Engineering Applications\" (ICAMP-2022) organized by Department of Mechanical Engineering of ST.Martin's Engineering college, Dhulapally, Secundrabad, Telangana, India on 8th & 9th July 2022.",
                        "The Virtual International Conference On \"Research Trends In Deep Learning, Big Data & Iot\" During 26th & 27th February 2021 Organized By The Department Of Computer Science And Engineering. Siddarth Institute of Engineering & Technology (Autonomous), Puttur, Chittoor District.",
                        "2ND International conference on Computational and Bio Engineering (CBE'20), Sri Padmavati Mahila Visvavidyalayam, Tirupati, 4-5, Dec 2020.",
                        "International Conference on Computational and Bio Engineering (CBE'19), Sri Padmavati Mahila Visvavidyalayam, Tirupati, 27-28, Dec 2019.",
                        "2017 IEEE International Conference on Computational Intelligence and Computing Research (ICCIC), Tamilnadu College of Engineering, Coimbatore - 641659, Tamil Nadu, India 14 to 16 Dec 2017.",
                        "International Conference on Innovative Applications in Engineering and Information Technology (IAEIT-17), Organized by Dept.of Computer Science, SPMVV, 01-02 February 2017.",
                        "7th IEEE International Advance Computing Conference (IACC-2017) Organized by IEEE Computer Society Chapter of India Council & VNR Vignana Jyothi Institute of Engineering and Technology, Hyderabad, India, 5- 7 January 2017.",
                        "3rd International Conference on Computer & Communication Technologies (IC3T,Springer), Organized by Dept.of Computer Science and Engineering, DVR & Dr. Hima Sekhar MIC College of Technology, Vijayawada, 5-6 November, 2016.",
                        "International Conference on Computational, Mathematical and Biological Modeling ( ICCMBM2016), Organized by Dept. of Computer science, SPMVV, Tirupati, from March 25-26, 2016."
                    ]
                },
                {
                    "title": "National Conferences",
                    "content": [
                        "National Conference on 'Education for a Holistic Future: A NAAC Perspective', held on 1st & 2nd Feburary 2024 at women's Christian college,Chennai.",
                        "National Conference on Recent Advancements in Computing, Communication & Societal Applications (NASA'23) organized by the department of Computer Science and Engineering on 19-20 April, 2023.",
                        "\"A review on detection of COVID-19 using Lung Ultrasound Images\", National Conference on Recent Trends in Information Communication and Computing Technology (NCRICTT'22) held on 28th may 2022 organized by Department of Computer Science & Engineering in Association with CSI, Kuppam Engineering College, Kuppam, A.P",
                        "\"Performance Evaluation of SVM Kernel functions for the diagnosis of Alzheimer's disease in the First National Conference on Emerging Vistas of Computer Science & IT in 21st Century on December 18, 2021 Organized by the Faculty of IT and Computer Science, Parul University, Vadodara, Gujarat.",
                        "Online National Conference on \"Innovations and Challenges in Geotechnical Engineering, Computer Science and VLSI (NCGCE-20), Thrissur, Kerala. 01-08-2020.",
                        "Virtual Conference on \" Artificial Intelligence Current Trends and Applications (AICTA2020)\" , 27-28 March 2020, SPMVV, Tirupati.",
                        "\"Promising Services and Use cases in Internet of Medical Things\", National Conference on Sensors Networks, Internet of Things and Internet of Every Thing, October 17-19, 2019, Chadalavada Ramanamma Engineering College, Tirupati",
                        "\"Optimal Back Propagation Learning algorithm for the classification of Cervical Cancer Data\", AP Science Congress, November 9-11, 2018, Yogi Vemana University, Kadapa",
                        "\"Digital Transformation of Media: The Impact of Information and Communication Technology\", Dr.K.Usha Rani, K.Hemalatha, National Conference on Changing role of media in India perspectives and challenges, organized by the Dept.of Commnication and Journalism, SPMVV, 13-14 December 2017.",
                        "\"A Novel Fuzzy Logic based Image Segmentation of Cervical Pap smear Images\", Dr.K.Usha Rani, K.Hemalatha, 104th Indian Science Congress Science & Technology for National Development, Jan 3 - 7, 2017. Sri Venkateswara University, Tirupati",
                        "\"A Review on Hybrid Soft Computing Techniques for Efficient Diagnosis of Cervical Cancer\", K.Hemalatha, Dr. K.Usha Rani, First Andhra Pradesh National Science Congress National Conference, January 27-29, 2016.",
                        "\"Retrieval of Information Methods and Approaches in Digital Library - Online and Offline\", K.Hemalatha, Dr.K.Usha Rani, K. Vijaya Sri, ICSSR & UGC Sponsored National Seminar on Contemporary Trends in Librarianship (CTL - 2015), Organized on 28th - 29th December, 2015 by the Department of Library and Information Science, S.K. University, Ananthapuram."
                    ]
                },
                {
                    "title": "Book Chapters",
                    "content": [
                        "Holistic Pedagogy approaches, EMERALD publishers, ISBN: 9788195800285, Feb 2024.",
                        "RM Mallika, Dr K Usha Rani, Dr K Hemalatha, \"Optimal Kernel function of Multi Support Vector Machine for the diagnosis of Alzheimer's disease\", NCEVT -Dec 18, 2021- ISBN - 978-93-93627-02-5",
                        "Dr. K. Usha Rani, Dr. K. Hemalatha, \u201cWomen Empowerment\u201d, Empyreal Publishing house, ISBN : 978-81-936264-1-2, February 2020.",
                        "Dr. K.Hemalatha, Dr. K. Usha Rani, \u201cHybrid Soft Computing algorithms for the diagnosis of Cervical Cancer\u201d, Scholar Press, Mauritius, ISBN: 978-613-8-83751-0, June 2019.",
                        "Dr. K.Hemalatha, Dr. K. Usha Rani,\u201cHybrid Approaches to Improve MLP Performance By Using Meta-Heuristic Algorithms\u201d, IEEE Podhigai , ISBN: 978-1-5090-6619-3,2017.",
                        "Dr. K.Usha Rani, K.Hemalatha, Information and Communication Technology to Support Women Telecommuters, Technological Initiatives for Women Empowerment, Agrobios (India), ISBN : 9788193753729, October, 2018.",
                        "\u201cStrategies for Women Empowerment Using ICT\u201d, K. Usha Rani, K.Hemalatha, Vijaya Sri. K, 91-98, Sonali Publications, New Delhi, ISBN 978-81-8411-568-0, 2016.",
                        "\u201cRetrieval of Information Methods and Approaches in Digital Library \u2013 Online and Offline\u201d, K.Hemalatha, Dr.K.Usha Rani, K. Vijaya Sri, 577-581, SBW Publishers, New Delhi, ISBN 978-81-85708-64-3, 2015."
                    ]
                },
                {
                    "title": "Workshops Organized",
                    "content": [
                        "One day Workshop on \u201c Machine Learning for Web Developers\u201d as a part of India Edu Program, Google on 11-08-2023.",
                        "One day Workshop on \u201cArtificial Intelligence Techniques and Applications using MATLAB\u201d, 29-08-2019, Sri Venkateswara College of Engineering, Tirupati."
                    ]
                },
                {
                    "title": "Reviewer",
                    "content": [
                        "PLANT LEAVE DISEASE DETECTION METHODS USING CNN, Biomedical Signal Processing and Control, March ,2024.",
                        "PD-SIM: A Simple Framework for Contrastive Learning Patch-based Data Augmentation in Alzheimer's Disease Diagnosis, Biomedical Signal Processing and Control, Jan,2024.",
                        "Improved Anterior Cruciate Ligament Tear Diagnosis using Gated Recurrent Unit Networks and Hybrid Tasmanian Devil Optimization, Biomedical Signal Processing and Control, December ,2023.",
                        "CNN-SVM Ensemble: Leveraging the Strengths of Deep Learning and Classical Machine Learning for Basil Leaf Disease Detection. International Conference on Optimization Techniques for Learning to be conducted 7-8 December 2023, Organized by School of Computers, MITs on September 2023.",
                        "Revolutionizing Retail: Empowering Personalized Shopping with Advanced Algorithms, International Conference on Optimization Techniques for Learning to be conducted 7-8 December 2023, Organized by School of Computers, MITs on September 2023.",
                        "A New Approach Towards Deployment and Management of Machine Learning Models Using K-serve Platform for Building Robust Machine Learning Systems, International Conference on Optimization Techniques for Learning to be conducted 7-8 December 2023, Organized by School of Computers, MITs on August 2023.",
                        "Advanced ABS Disease Recognition in Lemon A Multi-Level Approach using CNN and Random Forest Ensemble, International Conference on Optimization Techniques for Learning to be conducted 7-8 December 2023, Organized by School of Computers, MITs on August 2023.",
                        "CNN-SVM Ensemble: Leveraging the Strengths of Deep Learning and Classical Machine Learning for Basil Leaf Disease Detection, International Conference on Optimization Techniques for Learning to be conducted 7-8 December 2023, Organized by School of Computers, MITs on August 2023",
                        "ECG and PCG signals for Heart Rate Detection using Convolution Neural Network, 5th International Conference on Machine Learning and Intelligent Systems (MLIS 2023) to be held in Online Conference during 14-17 August 2023.",
                        "Sentence Similarity Using Modified Latent Semantic Analysis and Semantic Relations, 5th International Conference on Machine Learning and Intelligent Systems (MLIS 2023) to be held in Online Conference during 14-17 August 2023.",
                        "Osteosarcoma Detection in Histopathology Images using Ensemble Machine Learning Techniques, Imaging Science Journal, Taylor & Francis Group,April,2023.",
                        "\u201c3D ANAGLYPH IMAGE CONTENT PROTECTION AND INTEGRITY BASED ON BLOCKCHAIN & DIGITAL WATERMARKING\u201d, Imaging Science Journal, Taylor & Francis Group, January2023.",
                        "Improvement Method for Cervical Cancer Detection: A Meta-Analysis\u201d, Imaging Science Journal , Taylor & Francis Group, 2022.",
                        "\u201cAn Education Tool that Supports Junior Learners in Studying Machine Learning\u201d, The 4th International Conference on Machine Learning and Intelligent Systems (MLIS 2022) to be held in Seoul, Republic of Korea during 8-11 November 2022.",
                        "\u201cCorn Disease Detection Based on an Improved YOLOX-Tiny Network Model\u201d, The 4th International Conference on Machine Learning and Intelligent Systems (MLIS 2022) to be held in Seoul, Republic of Korea during 8-11 November 2022."
                    ]
                }
            ]
    },

    "Dr. G. Jenifa": {
      name: "Dr. G. Jenifa",
      designation: "Asst. Professor",
      email: "drjenifag@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/Jenifa.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Speech Processing", "Branch": "Information and Communication Engineering", "College Name/University": "Anna University, Chennai", "Year of Passing": "2022"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "Anna University, Tiruchirappalli", "Year of Passing": "2009"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "Anna University, Chennai", "Year of Passing": "2007"}
          ]
        },
        {
          title: "Research Areas",
          content: "Deep Learning, Natural Language Processing"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57224319751"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/586500"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&user=WefmeegAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "3"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Multimodal Low-Light Image Enhancement using Retinex-based Decomposition and Transformer Networks”, International Conference on Intelligent Communication Technologies and Virtual Mobile Networks (ICICV), 10.1109/ICICV64824.2025.11085854", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Integrating Advanced Convolutional and Recurrent Architectures for Speech Enhancement, International Conference on Intelligent Communication Technologies and Virtual Mobile Networks (ICICV), 10.1109/ICICV64824.2025.11085871", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Leveraging ARIMA and prophet models for effective sales forecasting and inventory management, International Conference on Self Sustainable Artificial Intelligence Systems, 0.1109/ICSSAS66150.2025.11081351", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Implementation of Auto Scaling Mechanism for Serverless Computing in Cloud Environment, Journal of Information Systems Engineering and Management, 2025, 10(43s) e-ISSN: 2468-4376", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Transformer-Enhanced Dilated Convolutional Networks for Early Detection of Neurological Disorders, International Conference on Artificial Intelligence and Machine Learning Applications Theme: Healthcare and Internet of Things (AIMLA), 10.1109/AIMLA63829.2025.11041352", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Energy-Efficient Smart Grid Management Using IoT Sensors and Support Vector Regression, International Conference on Artificial Intelligence and Machine Learning Applications Theme: Healthcare and Internet of Things (AIMLA)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Internet of Things: An Aggregated Proof based Secure Healthcare Monitoring System- Comparative Analysis”, International Conference on Mobile Computing and Sustainable Informatics (ICMCSI), 10.1109/ICMCSI64620.2025.10883135", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "An Effective Personality Recognition Model Design using Generative Artificial Intelligence based Learning Principles, International Conference on Computing and Data Science, 10.1109/ICCDS60734.2024.10560368", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "ASI (Agriculture Smart Irrigation) Multiparameter Optimization System for Precision Agriculture, International Journal of Intelligent Systems and Applications in Engineering, 2024, 12(8s), 326–333", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "A Hybrid Speech Enhancement Algorithm for Voice Assistance Application”, Sensors 2021, 21(21), 7025, DOI: 10.3390/s21217025", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Visitor/Intruder Monitoring System Using Machine Learning”, AI and IoT‐Based Intelligent Automation in Robotics, Wiley AI, 10.1002/9781119711230.ch18", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "2", "Details of Research Publication": "Optimum Feature Selection Using Firefly Algorithm for Keystroke Dynamics, Intelligent Systems Design and Applications. International Conference on Intelligent Systems Design and Applications (ISDA). Advances in Intelligent Systems and Computing (AISC 736), Publisher Springer Singapore, 10.1007/978‑3‑319‑76348‑4_39", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025-26", "Application ID": "202541080172", "Title of the Patent": "Streamlined Offline Exam Management System for Higher Education Institutions", "Status": "Published"},
            {"S.No": "2", "Affiliation": "Others", "Academic Year": "2023-24", "Application ID": "202341081785 A", "Title of the Patent": "Voice Assistant for Aphasia Patients", "Status": "Published"},
            {"S.No": "3", "Affiliation": "Others", "Academic Year": "2023-24", "Application ID": "202341081782 A", "Title of the Patent": "An Efficient Rainfall Irrigation System", "Status": "Published"},
            {"S.No": "4", "Affiliation": "Others", "Academic Year": "2022-23", "Application ID": "202341027391 A", "Title of the Patent": "An Artificial Intelligence and Machine Learning System to Diagnose and Treat Neurological Disorders", "Status": "Published"},
            {"S.No": "5", "Affiliation": "Others", "Academic Year": "2022-23", "Application ID": "2022/10003", "Title of the Patent": "A Hybrid Deep Neural Network-Based Intrusion Detection System", "Status": "Published"},
            {"S.No": "6", "Affiliation": "Others", "Academic Year": "2021-22", "Application ID": "202241005869 A", "Title of the Patent": "A System for detecting unknown network worms using honeypots and method thereof", "Status": "Published"}
          ]
        },
        {
          title: "Consultancy",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-25", "Client/Organization": "Standardinsights, Chennai", "Project": "Xerp: Voice Commands", "Amount": "1,00,000"},
            {"S.No": "2", "Affiliation": "Others", "Academic Year": "2023-24", "Client/Organization": "Standardinsights, Chennai", "Project": "API Integration", "Amount": "50,000"},
            {"S.No": "3", "Affiliation": "Others", "Academic Year": "2022-23", "Client/Organization": "Next99 LLC, Chennai", "Project": "DocOpp – Resume Extraction", "Amount": "1,00,000"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Best Faculty – Industry Collaboration by International Institute of Organized Research (I2OR), India in the year 2025."
          ]
        }
      ]
    },

    "Dr. R. Rampriya": {
      name: "Dr. R. Rampriya",
      designation: "Asst. Professor",
      email: "rampriyar@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Rampriya.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "Annamalai University", "Year of Passing": "2025"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "Anna University", "Year of Passing": "2012"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Information Technology", "Branch": "Information Technology", "College Name/University": "Anna University", "Year of Passing": "2010"}
          ]
        },
        {
          title: "Research Areas",
          content: "Data Analytics, IoT and Deep Learning"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=59516457300"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/461772"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=vsR4IUQAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "2"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "“Diagnosis and Risk Analysis of Pulmonary Disorder in CXR Images using Optimized Deep Learning Techniques” IEEE Xplore, July 2025, 6th International Conference on Inventive Research in Computing Applications(ICIRCA), DOI: 10.1109/ICIRCA65293.2025.11089624, https://ieeexplore.ieee.org/document/11089624", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "“Ocular Disease Detection Using CNN and Recommendation System”, IEEE Xplore, July 2025, 6th International Conference on Inventive Research in Computing Applications(ICIRCA), DOI: 10.1109/ICIRCA65293.2025.11089673, https://ieeexplore.ieee.org/document/11089673", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "“Capsule network-based deep learning for early and accurate diabetic retinopathy detection”, International Ophthalmology, Feb 2025. https://link.springer.com/article/10.1007/s10792-024-03391-4", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "5", "Details of Research Publication": "“Sensorless vector-controlled induction motor drives: Boosting performance with Adaptive Neuro-Fuzzy Inference System integrated augmented Model Reference Adaptive System” Methodsx, December 2024, https://www.sciencedirect.com/science/article/pii/S2215016124004436", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "“Improving Robustness and Dynamic Performance of Sensor less Vector-Controlled IM Drives with ANFIS-Enhanced MRAS”, Journal of Electrical and Electronics Research (IJEER), August 2024. https://ijeer.forexjournal.co.in/papers-pdf/ijeer-120331.pdf", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "“Advancing Glaucoma Detection: Synthetic Image Generation via Generative Adversarial Networks and Classification with Pretrained MobileNetV2”, IEEE Xplore, Feb 2025, DOI: 10.1109/ICSCAN62807.2024.10893916, https://ieeexplore.ieee.org/document/10893916", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "“Optimal Feature Selection and Classification of Respiratory Diseases by Novel EFICNN-EBOA Algorithm: A Real Time Implementation Concept”, International journal of Intelligent Systems and Applications in Engineering, October 2023. https://ijisae.org/index.php/IJISAE/article/view/3746", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025-26", "Application ID": "202541020125 A", "Title of the Patent": "AI-Enhanced Autonomous Underwater Exploration Apparatus", "Status": "Published"},
            {"S.No": "2", "Affiliation": "Others", "Academic Year": "2023-24", "Application ID": "202341043568 A", "Title of the Patent": "Design and Development of Automated attendance management system based on Face Recognition Algorithms", "Status": "Published"}
          ]
        },
        {
          title: "Consultancy",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-25", "Client/Organization": "Astra Softwares", "Project": "Prediction of Server Hardware and Software Failures Using AI", "Amount": "1,30,000"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Top Performing Mentor for NPTEL Online course “Design, Technology and Innovation”, Jan – Apr 2025"
          ]
        }
      ]
    },

    "Mr. Y. Ravi Raju": {
        "name": "Mr. Y. Ravi Raju",
        "email": "ravirajuy@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Y. Ravi Raju.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "C.S.E",
                            "Branch": "Ph.D",
                            "College Name/University": "Kalinga University",
                            "Year of Passing": "2026"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "C.S.E",
                            "Branch": "C.S.E",
                            "College Name/University": "B.V.C Engineering College, JNT University, Kakinada",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "C.S.E",
                            "Branch": "C.S.E",
                            "College Name/University": "B.V.C.Institute of Technology and Science, JNT University, Kakinada",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Computer Networks, Cyber Security, Bigdata Analytics"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57212565415",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/460682",
                        "Google scholar : https://scholar.google.com/citations?user=Pvg4GngAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 5"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "A Machine Learning Approach in Communication 5G-6G Network",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimization of Natural Language Processing Models for Multilingual Legal Document Analysis",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Integrating the Internet of Things to Protect Electric Vehicle Control Systems from Cyber Attacks",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Wearable Devices and Health Monitoring: Big Data and AI for Remote Patient Care",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Disease Biomarker Discovery with Big Data Analysis",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Mr. K. Chandra Sekhar": {
        "name": "Mr. K. Chandra Sekhar",
        "email": "kchandrasekhar@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/K. Chandra Sekhar.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Computer Vision",
                            "Branch": "CSE",
                            "College Name/University": "GITAM University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CST",
                            "Branch": "CST",
                            "College Name/University": "Andhra University",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Andhra University",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Computer Vision, Deep Learning (Medical Imaging)"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus:",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/462821",
                        "Google scholar : https://scholar.google.co.in/citations?user=1mCTGBIAAAAJ",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "An Ensemble Model for Early Prediction of Diabetes Using Machine Learning Algorithms. https://doi.org/10.1007/978-3-031-84513-0_10",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Brain Tumor Detection and Classification in MRI Images Using SWIN Transformer 10.1109/ASSIC64892.2025.11158498",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Innovative Machine Learning Strategies for Enhancing Cyber Security Resilience in IoT Environments.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Quadrant Analysis of Learner&rsquo;s Performance in Quantitative Aptitude and Coding DOI: 10.1109/ESIC64052.2025.10962742",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202541020127 A",
                            "Title of the Patent": "Intelligent Traffic Management Apparatus Using Reinforcement Learning",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mr. J. Viswanath": {
        "name": "Mr. J. Viswanath",
        "email": "viswanathj@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. J. Viswanath.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Artificial Intelligence",
                            "Branch": "CSE",
                            "College Name/University": "Jain University, Bengaluru",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech",
                            "Specialization": "Software Engineering",
                            "Branch": "CSE",
                            "College Name/University": "Hindustan University, Chennai",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.Tech",
                            "Specialization": "Information Technology",
                            "Branch": "IT",
                            "College Name/University": "SRM University, Chennai",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "AI & ML"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=37051281800",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/276191",
                        "Google scholar: https://scholar.google.com/citations?user=_b9qLIgAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 2"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "An Interactive Application for Eggplant Quality Detection Using YOLOV8-E. https://doi.org/10.1109/ICIRCA65293.2025.11089564",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Enhanced leukemia prediction using hybrid ant colony and ant lion optimization for gene selection and classification, https://doi.org/10.1016/j.mex.2025.103239",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Epileptic Seizure Prediction through ML And DL Models: A Survey. https://doi.org/10.1109/ICECA63461.2024.10800774",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Ensemble Techniques for the Prediction of Heart Disease with Reduced Entropy. https://doi.org/10.1109/IATMSI60426.2024.10503147",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Vigilant Salp Swarm Algorithm for Feature Selection https://doi.org/10.31577/cai_2023_4_805",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "1",
                            "Details of Research Publication": "Specification based test case generation using classification tree method. https://doi.org/10.1007/978-3-642-19542-6_48",
                            "Indexing": "SCI",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "202541074996",
                            "Title of the Patent": "A Wearable PET Health Monitoring System and Method of Operation Thereof",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Application ID": "202241053218 A",
                            "Title of the Patent": "Deep Learning Based Cybercrime Detection Technology",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Application ID": "202241059115",
                            "Title of the Patent": "Customisable Instant Non-Electric Winding, All Purpose Wearable Notifier Band",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Consultancy",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Name of the Consulting Firm": "Astra Software Pvt Ltd",
                            "Title of the Project/Event": "Developing an AI solution to predict server hardware and software failures by analyzing system performance metrics, logs, and historical downtime",
                            "Amount in Rs. /-": "1,30,000"
                        }
                    ]
                }
            ]
    },

    "Mr. P. Raguraman": {
        "name": "Mr. P. Raguraman",
        "email": "raguramanp@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. P. Raguraman.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Image Processing",
                            "Branch": "CSE",
                            "College Name/University": "Jain University, Bengaluru",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "B.S.Abdur Rahman University",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Anna University, Chennai",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning, IoT, Image Processing, Computer Networks"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=59445138900",
                        "Vidwan: https://vidwan.inflibnet.ac.in/myprofile",
                        "Google scholar: https://scholar.google.com/citations?user=myWDrz8AAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-2025",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;A Comprehensive Survey of AI-Driven Biomedical Image Processing for Intracerebral Hemorrhage Detection and Classification: Current Trends, Challenges, and Future Directions&rdquo;, 10.1109/ICECA63461.2024.10801000",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-2025",
                            "Author Position": "3",
                            "Details of Research Publication": "&ldquo;Comparative analysis of wind speed prediction: enhancing accuracy using PCA and linear regression vs. GPR, SVR, and RNN&rdquo;, DOI: 10.11591/ijpeds.v16.i1",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-2025",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Cluster-based routing protocols through optimal cluster head selection for mobile ad hoc network&rdquo;, DOI: 10.11591/eei.v14i1.8863",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-2024",
                            "Author Position": "3",
                            "Details of Research Publication": "&ldquo;Early Prediction of Gestational Diabetes with Parameter-Tuned K-Nearest Neighbor Classifier&rdquo;, DOI: 10.18196/jrc.v4i4.18412",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "202541074996",
                            "Title of the Patent": "A Wearable PET Health Monitoring System and Method of Operation Thereof",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202541020126 A",
                            "Title of the Patent": "Smart Medication Dispenser with IoT Connectivity",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "My Publications",
                    "content": [
                        {
                            "Column_1": "1",
                            "Column_2": "Journal Of Engineering Sciences, Volume 13, Page No: 824-833, 2022."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "HAND GESTURE RECOGNITION AND VOICE CONVERSION FOR DEAF AND DUMB",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "JOURNAL OF CRITICAL REVIEWS, Volume 9, Page: 195-202, 2022"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "COLLEGE CONNECT APP",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "he International Journal Of Analytical And Experimental Modal Analysis, Volume 14, Page No: 1396-1402, 2022."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "DETECTING AND REMOVING WEB APPLICATION VULNERABILITIES WITH STATIC ANALYSIS AND DATA MINING,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal Of Interdisciplinary Cycle Research, Volume 14, Page No: 1310-1318, 2022"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "TRAFFIC SIGN AND LANE DETECTION USING SSLA,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "ournal Of Interdisciplinary Cycle Research, Volume 14, Page No: 1378-1383, 2022"
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "ROUTING IN MULTI HOP NETWORKS",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "AC : A Journal Of Composition Theory, Volume 14, Page No: 27-33, 2021."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "MOBILE SEARCH ENGINE BASED ON USER\u2019S PRIORITY,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Science, Technology and Development, Volume 10, page no: 189-196, 2021"
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "COLOR DETECTION OF RGB IMAGES USING PYTHON AND OPENCV,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal Science Research Computer Science Engineering Information Technology, Volume 7, page no: 109-112, 2021."
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "EFFECTIVE HEART DISEASE PREDICTION USING HYBRID MACHINE LEARNING TECHNIQUES,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Levant Journal, Volume 20, page no: 78-82, 2021."
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "ROUTING IN MULTI HOP NETWORKS,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "JAC : A Journal Of Composition Theory, Volume 14, page no: 27-33, 2021."
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "ATTRIBUTE- BASED CLOUD DATA INTEGRITY AUDITING FOR SECURE OUTSOURCED STORAGE",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "JAC : A Journal Of Composition Theory, Volume 14, page no: 118-125, 2021."
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "ANDROID APP FOR HOUSE RENT MANAGEMENT SYSTEM,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "The International journal of analytical and experimental modal analysis, Volume 13, page no: 1345-1352, 2021."
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "SENTIMENT ANALYSIS OF E-COMMERCE USING RECOMMENDATION SYSTEM,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Studia Rosenthaliana (Journal for the Study of Research), Volume 12, page no: 372-382, 2020."
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "AN EFFICIENT ATTRIBUTE-BASED ENCRYPTION SCHEME FOR PRESERVING CONFIDENTIALITY OVER HIERARCHICAL DATA IN CLOUD COMPUTING,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "The International journal of analytical and experimental modal analysis, Volume 12, page no: 485-492, 2020"
                        },
                        {
                            "S.No": "15",
                            "Title of the Paper": "PRIVACY PROTECTION IN WIRELESS MEDICAL SENSOR NETWORKS USING TOKENS",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "The International journal of analytical and experimental modal analysis, Volume 12, page no: 770-777, 2020."
                        },
                        {
                            "S.No": "16",
                            "Title of the Paper": "GENERATION OF RELIABLE AND VALID KEY GENERATION AND MANAGEMENT IN CLOUD ENVIRONMENT",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "The International journal of analytical and experimental modal analysis, Volume 12, page no: 878-887, 2020"
                        },
                        {
                            "S.No": "17",
                            "Title of the Paper": "A REVIEW ON OBSERVING HUMAN HEALTH CONDITION ON BASED ON OSN USER ACTIVITIES",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Universal Review, Volume 8, page no: 81-88, 2019."
                        },
                        {
                            "S.No": "18",
                            "Title of the Paper": "COLLEGE INFORMATION MANAGEMENT SYSTEM ANDROID APP",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Management, Technology And Engineering, Volume 9, page no: 1192-1199, 2019."
                        },
                        {
                            "S.No": "19",
                            "Title of the Paper": "KEY AGGREGATE PROTECTION ACCESS CONTROL IN CLOUD COMPUTING",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Research, Volume 9, page no: 110-117, 2019."
                        },
                        {
                            "S.No": "20",
                            "Title of the Paper": "A Region of Interest Based Spatial Domain by Non Uniform Grid Transformatio",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "INTERNATIONAL JOURNAL OF INNOVATIVE RESEARCH EXPLORER, Volume 5, page no: 274-278, 2018."
                        }
                    ]
                }
            ]
    },

    "Mr. Praneel Kumar Peruru": {
        "name": "Mr. Praneel Kumar Peruru",
        "email": "praneelkumarp@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Praneel Kumar Peruru.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Image Processing",
                            "Branch": "CSE",
                            "College Name/University": "JNTU, Anantapur",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech",
                            "Specialization": "CS",
                            "Branch": "CSE",
                            "College Name/University": "JNTU, Anantapur",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.Tech",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "SRM University, Chennai",
                            "Year of Passing": "2005"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Cloud Computing, Big Data and Image Processing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57192166757",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/515345",
                        "Google scholar: https://scholar.google.com/citations?user=IyRs_UIAAAAJ&hl",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Mine safe: IOT based smart helmet for mining workers, AIP Conference Proceedings 3237 (1), 060035,https://doi.org/10.1063/5.0247061",
                            "Indexing": "WoS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Multimodal medical image fusion based on undecimated wavelet transform and fuzzy sets, International Journal of Innovative Technology and Exploring Engineering, Vol. 8, Issue 6, 97-103.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "2",
                            "Details of Research Publication": "Inter image element loss less image compression with delimiter and folding, 2017 IEEE International Conference on Power, Control, Signals and Computation, https://doi.org/10.1109/ICPCSI.2017.8392203",
                            "Indexing": "SCI (WoS)",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "3",
                            "Details of Research Publication": "A Novel Technique for Edge Detection Using Gabor Transform and K-Means with FCM Algorithms, Proceedings of International Conference on Emerging Trends in Electrical Engineering, Communications and Information Technologies, https://doi.org/10.1007/978-981-10-1540-3_29",
                            "Indexing": "SCI (WoS)",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Application ID": "201941003789 A",
                            "Title of the Patent": "An apparatus for detection of gas leakage",
                            "Status": "Filed"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Best SPOC (Sinlge Point of Contact) Award from Eduskills Foundation in November 2023.",
                        "Google Cloud Computing Foundations - Google &ndash; August 2023.",
                        "Cisco Certified Network Associate &ndash; Edcreate Foundation (Cisco Supported Netacad) &ndash; April 2023.",
                        "AWS Academy Educator"
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "AI-driven Self-healing Drones for Prolonged Missions in Hazardous Environments",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Communicated to International Conference on Advanced Materials, Manufacturing and Sustainable Development, December 2024"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Enhancing Cloud Storage Security using RBAC: Authentication and Authorization Solutions for Data Protection",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Communicated to SCI journal, awaiting response"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "On the use of Fractional Lower Order Moments for the detection of tumors in medical images",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Under Consideration for publishing in a SCI Journal"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "Multimodal Medical Image Fusion based on Undecimated Wavelet Transform and Fuzzy Sets",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Innovative Technology and Exploring Engineering, 2019. (Scopus Indexed) (7 Citations)"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "Inter Image Element Loss less Image Compression with Delimiter and Folding",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IEEE International Conference on Power, Control, Signals and Instrumentation Engineering, ICPCSI 2017, 2018, pp. 2672\u20132676 (Scopus Indexed, Web of Science)"
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "A Novel Technique for Edge Detection using Gabor Transform and K-means with FCM Algorithms",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Published in Lecture Notes in Electrical Engineering, Springer. (Scopus Indexed, Web of Science)"
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "A Novel Approach for Broken Character Recognition on Vehicle License Plates Using SVMS",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Innovative Research in Computer and Communication Engineering\u201d, August 2015. (2 Citations)"
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "Secure framework and Sparsity structure of Linear programming in Cloud Computing",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Emerging Trends in Electrical, Communication and Information Technologies (ICECIT-2012)\u201d published in Elsevier Science Direct."
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "Optimal routing in Multi-hop Wireless Networks using Floyd-Warshall algorithm",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Research in Technology\u201d in 2012."
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "Advanced Performance Analysis of Transmission Control Protocol Collision Control Algorithms",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advances in Science and Technology\u201d in 2011."
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "Confrontation and Opportunities of Big Data - A Survey",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Big Data Analytics and Computational Intelligence (ICBDACI) 2017 (IEEE Xplore Digital Library)"
                        }
                    ]
                },
                {
                    "title": "Book Chapter",
                    "content": "Map Reduce for Beginners (A Monograph) published in Edupedia, 2018. ISBN: \u201c978-93-86647-93-1\u201d."
                }
            ]
    },

    "Mr. Vasudevan M": {
        "name": "Mr. Vasudevan M",
        "email": "vasudevanm@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Vasudevan M.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Machine Learning",
                            "Branch": "CSE",
                            "College Name/University": "Puducherry Technological University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2010"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning and Deep Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId= 59249181700",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/ 590123",
                        "Google scholar: https://scholar.google.com/citations?user=6zRUYxcAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "CNN based Error Level Analysis (ELA) With Scores to Detect Digital Image Manipulation 10.1109/ICSSAS66150.2025.11081309",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "A Comprehensive Experimentation on Security-Conserving Storage Verifications and Data Dynamics Over Cloud Storage Environment 10.1109/ICECSP61809.2024.10698380",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Ensemble Learning: Importance, Applications, Challenges, and Future Work 10.1109/ICIETDW61607.2024.10939877",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Blockchain-Based Federated Learning for Data Privacy and Security 10.1109/ACCAI61061.2024.10602356",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202541020125 A",
                            "Title of the Patent": "AI - Enhanced Autonomous Underwater Exploration Apparatus",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mr. Kiran Palakeeti": {
        "name": "Mr. Kiran Palakeeti",
        "email": "kiranpalakeeti@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/fe2eba45961fcbed70a1a5b29e7ea727.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Puducherry Technological University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Bapatla Engineering College, Acharya Nagarjuna University",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Prakasam Engineering College, JNTU Kakinada",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Artificial Intelligence & Machine Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57750933900",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/461630",
                        "Google scholar: https://scholar.google.com/citations?user=0AjNcd8AAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 2"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Optimizing Resource Allocation and Link Reliability in IoT&ndash;Fog&ndash;Cloud Networks Using Machine Learning and Multi-Objective Algorithms&rdquo;, DOI: 10.18196/jrc.v6i4.25026",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;An Attention-based Rainfall Prediction System using LSTM Model and Convolutional Block Module&rdquo;, 10.1109/ICSSAS64001.2024.10760287",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Leveraging Deep Belief Networks and Multi-Class Support Vector Machine for Nutritional Deficiency Identification in Grape Plant Leaves, 10.1109/ICECA58529.2023.10395807",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Leveraging the Ensemble Model in Spam detection for Youtube Comments, 10.1109/ICSSAS57918.2023.10331815",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "5",
                            "Details of Research Publication": "Neural network-based secured routing protocol for IoT environment using DE algorithm. https://doi.org/10.1504/IJES.2023.141962 16(5-6), pp. 422-430",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Artificial Neural Network Based Effective Detection of Breast Cancer by Using Mammogram Data, 10.1109/ICDCS54290.2022.9780761",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "4",
                            "Details of Research Publication": "An Effective Hybrid Threefold Encrypted and Double Protected Cryptographic Technique in Wireless Sensor Networks, 10.1109/ICDCS54290.2022.9780761",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "A Swarm Intelligence-Based Model for Disease Detection in Mango Crops. 10.1109/ICCST55948.2022.10040428",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202541020126",
                            "Title of the Patent": "Smart Medication Dispenser with IoT Connectivity",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mr. Toralkar Pawan": {
        "name": "Mr. Toralkar Pawan",
        "email": "pawant@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Toralkar Pawan.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Visvesvaraya Technological University (VTU)",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Goa College of Engineering",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Agnel Institute Of Technology & Design",
                            "Year of Passing": "2018"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning, Deep Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57218674193",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/277320",
                        "Google scholar: https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=Iy2WeHcAAAAJ",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "An Adaptive Cyber Threat Detection via Scaled SVM Kernels: A Data-Driven Perspective. doi: 10.1109/ICOCT64433.2025.11118295.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhanced Intrusion Detection Using Conditional-Tabular-Generative-Adversarial-Network-Augmented Data and a Convolutional Neural Network: A Robust Approach to Addressing, Mathematics, 2025, Vol. 13(12), 1923.",
                            "Indexing": "SCI /Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhanced Intrusion Detection with Advanced Deep Features and Ensemble Classifier Techniques, Enhanced Intrusion Detection with Advanced Deep Features and Ensemble Classifier Techniques. SN COMPUT. SCI. 6, 381 (2025). https://doi.org/10.1007/s42979-025-03859-9",
                            "Indexing": "SCI /Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Leveraging AI and ML for Predictive Analysis and Feature Attribution in Abnormal Network Behavior Detection, 2nd World Conference on Communication & Computing (WCONF), RAIPUR, India, 2024, pp. 1-4, doi: 10.1109/WCONF61366.2024.10692056.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023 - 24",
                            "Author Position": "3",
                            "Details of Research Publication": "Privacy-Preserving Techniques for IoT Data Sharing, Proceedings of 9th International Conference on Science, Technology, Engineering and Mathematics: The Role of Emerging Technologies in Digital Transformation, ICONSTEM 2024 2024 | Conference paper DOI: 10.1109/ICONSTEM60960.2024.10568673",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "202541075889",
                            "Title of the Patent": "An Automated System For Sewage Inspection And Hazard Detection and A Method Of Operation Thereof",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "202541074996",
                            "Title of the Patent": "A Wearable PET Health Monitoring System and Method of Operation Thereof",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mr. K. Mahammad": {
        "name": "Mr. K. Mahammad",
        "email": "mahammadk@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. K. Mahammad.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "JNTU, Anantapur",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Madanapalle Institute of Technology And Science, JNTU, Anantapur",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "IT",
                            "Branch": "IT",
                            "College Name/University": "Sree Vidyanikethan Engineering college, JNTU, Hyderabad",
                            "Year of Passing": "2007"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Algorithms, Machine Learning, Data Mining"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=59160788300&origin=recordpage",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/461894",
                        "Google scholar: https://scholar.google.com/citations?user=ox5V20AAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;A Novel Algorithm for Selecting Relay Nodes in Clusters of Mobile Wireless Sensor Networks Considering Power and Delay Doi:10.1109/ICACCS60874.2024.10716993&ldquo;",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "&ldquo;Advanced wireless networking classification using transformer Based inception resnetv2 with non-Linear analysis https://eudoxuspress.com/index.php/pub/article/view/303/233",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Early prediction of chronic heart disease with recursive feature elimination and supervised learning techniques http://doi.org/10.11591/ijai.v13.i1.pp730-736",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202541020127",
                            "Title of the Patent": "Intelligent Traffic Management Apparatus Using Reinforcement Learning",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "My Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Early prediction of chronic heart disease with recursive feature elimination and supervised learning techniques.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IAES International Journal of Artificial Intelligence (IJ-AI), Vol 13, No 1: March 2024."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Measuring Semantic Similarity Between Words in Web Search Engines",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal Of Computer Application (IJCA) (JUNE-2012)"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "An Integrated Method to Measure Semantic Similarity Between Words in Web Search Engines",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Computer Information Systems (IJCIS) (JUNE-2012)"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "A Novel Algorithm for selecting relay nodes in clusters of mobile wireless sensor networks considering power and delay.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "ICACCS-2024, International conference on Advanced computing & Communication systems."
                        }
                    ]
                }
            ]
    },

    "Mrs. A. Naga Lakshmi": {
        "name": "Mrs. A. Naga Lakshmi",
        "email": "nagalakshmia@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. A. Naga Lakshmi.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Amrita University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Sri Aditya Engineering college, JNTUK",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Sri Prakash college of Engineering, JNTUK",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Cloud, Machine Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=59117999200",
                        "Vidwan:",
                        "Google scholar:",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;Medical Plant Identification and Utilities Recommendation using Ensemble Techniques,&quot; 10.1109/ICICV64824.2025.11085644.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "&quot;Prediction of Personality based Rumor Propagation on Social Media using Deep Learning. 10.1109/ICCCNT61001.2024.10724516.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Data Generation for Speech Recognition based on Generative Adversarial Networks https://ijisae.org/index.php/IJISAE/article/view/4724",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202541020127 A",
                            "Title of the Patent": "Intelligent Traffic Management Apparatus Using Reinforcement Learning",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Top Performing Mentor for NPTEL Online course &ldquo;Learning Analytics Tools&rdquo;, Jan &ndash; June 2024.",
                        "NPTEL Domain Star in Data Science, June &ndash; Dec 2024.",
                        "NPTEL Discipline Star, June &ndash; Dec 2024."
                    ]
                }
            ]
    },

    "Mrs. A. Esther Merlin": {
        "name": "Mrs. A. Esther Merlin",
        "designation": "Asst. Professor",
        "email": "esthermerlina@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. A. Esther Merlin.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Artificial Intelligence, NLP",
                            "Branch": "CSE",
                            "College Name/University": "Visvesvaraya Technological University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Data Analytics, IoT and Deep Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus:",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/631968",
                        "Google scholar: https://scholar.google.com/citations?view_op=new_profile&hl=en",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202541083941 A",
                            "Title of the Patent": "Multi-View Scene Reconstruction system Using Self Supervised Deep vision Models",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Application ID": "202441088800 A",
                            "Title of the Patent": "Natural Language Processing for Automated Medical Coding and billing",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Top Performing Mentor for NPTEL Online course &ldquo;Introduction to IoT&rdquo;, Jan &ndash; Apr 2025."
                }
            ]
    },

    "Ms. N. Mohana Priya": {
        "name": "Ms. N. Mohana Priya",
        "email": "mohanapriyan@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Ms. N. Mohana Priya.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "Bharath university",
                            "Year of Passing": "2006"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "Universityof Madras",
                            "Year of Passing": "2003"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Artificial Intelligence, IOT, Image processing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=59189126900",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/461686",
                        "Google scholar: https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=9HoCYxEAAAAJ",
                        "h-Index (As per Scopus Data) : 2"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Revolutionizing Healthcare with Large Language Models: Advancements, Challenges, And Future Prospects in AI-Driven Diagnostics and Decision Support&rdquo; https://www.jatit.org/volumes/Vol103No9/8Vol103No9.pdf",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;An Enhanced Analysis of Blood Cancer Prediction Using ANN Sensor-Based Model&rdquo; https://doi.org/10.3390/engproc2023059065",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202541020126 A",
                            "Title of the Patent": "Smart Medication Dispenser with IoT Connectivity",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Top Performing Mentor for NPTEL Online course &ldquo;Understanding Incubation and Entrepreneurship&rdquo;, Jan &ndash; Apr 2025.",
                        "Top Performing Mentor for NPTEL Online course &ldquo;Cloud Computing and Distributed Systems&rdquo;, Jan &ndash; Apr 2024."
                    ]
                },
                {
                    "title": "My Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "\u201cEye Disease Prediction Using Machine Learning\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference On Research Quest (Ncrq \u201922) At Manonmaniam Sundaranar University Constituent College Of Arts And Science College, Kadayanallur And Sponsored By Tamilnadu State Council For Higher Education, Chennai, Proceeding\u2019S..., 22nd & 23rd April 2022."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "\u201cFake News Detection Using Deep Learning\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference On Research Quest (Ncrq \u201922) At Manonmaniam Sundaranar University Constituent College Of Arts And Science College, Kadayanallur And Sponsored By Tamilnadu State Council For Higher Education, Chennai, Proceeding\u2019S..., 22nd & 23rd April 2022."
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "\u201cSkin Disease Recognition Based On Image Color And Texture Feature\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference On Research Quest (Ncrq \u201922) At Manonmaniam Sundaranar University Constituent College Of Arts And Science College, Kadayanallur And Sponsored By Tamilnadu State Council For Higher Education, Chennai, Proceeding\u2019S..., 22nd & 23rd April 2022."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "\u201cDetection Of Surface Crack In Building Structures Using Otsu Method For Image Thresholding\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference On Research Quest (Ncrq \u201922) At Manonmaniam Sundaranar University Constituent College Of Arts And Science College, Kadayanallur And Sponsored By Tamilnadu State Council For Higher Education, Chennai, Proceeding\u2019S..., 22nd & 23rd April 2022."
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "\u201cBone Fracture Detection Using Hough Transform Algorithm\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference On Research Quest (Ncrq \u201922) At Manonmaniam Sundaranar University Constituent College Of Arts And Science College, Kadayanallur And Sponsored By Tamilnadu State Council For Higher Education, Chennai, Proceedings..., 22nd & 23rd April 2022."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "\u201cEvolution In Diagnosis And Detection Of Brain Tumor\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference On Research Quest (Ncrq \u201922) At Manonmaniam Sundaranar University Constituent College Of Arts And Science College, Kadayanallur And Sponsored By Tamilnadu State Council For Higher Education, Chennai, Proceeding\u2019S..., 22nd & 23rd April 2022."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "\u201cControlled Environment Smart Agriculture Using Iot\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference On Research Quest (Ncrq \u201922) At Manonmaniam Sundaranar University Constituent College Of Arts And Science College, Kadayanallur And Sponsored By Tamilnadu State Council For Higher Education, Chennai, Proceeding\u2019S..., 22nd & 23rd April 2022."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "\u201cMusic Played By Face Expression Based On Local Directional Pattern Variance (Lpdv)\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference On Research Quest (Ncrq \u201920) At Manonmaniam Sundaranar University Constituent College Of Arts And Science College, Kadayanallur, Proceeding\u2019S..., 7th March 2020."
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "\u201cPredictive Analysisn On Student Dataset For Academic Improvement\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference On Recent Research In Engineering (Icrre 2016) At Skr Engineering College, Proceeding\u2019S..., 31th March 2016."
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "\u201cPredictive Analysisn On Student Dataset For Academic Improvement\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal Of Emerging Technology In Computer Science And Electronics, Volume 21 Issue 3rd April \u201916, Issn : 09761353."
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "\u201cAuthentication Based On Iris Recognition For Banking Application\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference On Recent Innovations In Engineering, Management, Technology & Applications-Riemta-2015, At Priyadarshini Engineering College, Vaniyambadi, Proceeding\u2019S..., 25th & 26th March 2015."
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "\u201cAutomated Classification Of Annotations\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference On Advances In Computing Technology ( Aict \u201914 ) At St. Joseph College Of Engineering, Sriperumbudur, Chennai, Proceeding\u2019S..., 19th March 2014."
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "\u201cFinding Fishing Sites By Heuristics Decisive\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conferenceon Emerging Trends In Computer Technology & Application ( Ncetcta 2012 ) At C. Abdul Hakeem College Of Engg. And Technology, Vellore., Proceeding\u2019S..., March 3rd 2012."
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "\u201cFinding Legitimate Sites By Heuristics Decisive\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference On Computing And Communication ( Nccc \u201912 ) At Ganadipathytulsi\u2019S Jain Engg. College, Vellore., Proceeding\u2019S..., February 24th 2012."
                        },
                        {
                            "S.No": "15",
                            "Title of the Paper": "\u201cSecured Content Processing By Using Intermediaries In Distributed Systems\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference On Computing And Communication ( Nccc \u201910 ) At Ganadipathytulsi\u2019S Jain Engg. College, Vellore., Proceeding\u2019S..., February 19th 2010."
                        },
                        {
                            "S.No": "16",
                            "Title of the Paper": "\u201cCollaborative Proxy System For Distributed Web Content Transcoding\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference On Computing And Communication ( Nccc \u201909 ) At Ganadipathytulsi\u2019S Jain Engg. College, Vellore., Proceeding\u2019S..., February 21st 2009"
                        }
                    ]
                }
            ]
    },

    "Mr. Surya Bahadur": {
        "name": "Mr. Surya Bahadur",
        "designation": "Asst. Professor",
        "email": "suryabahadur@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/surya-bahudur.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Group": "CSE",
                            "College Name/University": "Acharya Nagarjuna University",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "IT",
                            "Group": "IT",
                            "College Name/University": "Utkal University",
                            "Year of Passing": "2005"
                        }
                    ]
                }
            ]
    },

    "Mrs. R. Dhanalakshmi": {
      name: "Mrs. R. Dhanalakshmi",
      designation: "Asst. Professor",
      email: "dhanalakshmir@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/Dhanalakshmi.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "M.E.", "Specialization": "Computer Science & Engineering", "Branch": "Computer Science & Engineering", "College Name/University": "Paavai Engineering College", "Year of Passing": "2011"},
            {"S.No": "2", "Course": "B.E.", "Specialization": "Computer Science & Engineering", "Branch": "Computer Science & Engineering", "College Name/University": "Jayaram College of Engineering & Technology", "Year of Passing": "1998"}
          ]
        },
        {
          title: "Research Areas",
          content: "Machine Learning"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=60053936200"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/277373"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=-VuhdIYAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "1"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Breaking the Digital Grip: AI Models for Evaluating the Internet and Mobile Addiction Across All Age Groups 2025 6th International Conference on Inventive Research in Computing Applications (ICIRCA) DOI: 10.1109/ICIRCA65293.2025.11089701", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Question Crafting System for Personalized Learning using Large Language Model 2025 6th International Conference on Inventive Research in Computing Applications (ICIRCA) DOI: 10.1109/ICIRCA65293.2025.11089510", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "202541020126 A", "Title of the Patent": "Smart Medication Dispenser with IoT Connectivity", "Status": "Published"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2022-23", "Application ID": "202241053218 A", "Title of the Patent": "Deep Learning Based Cybercrime Detection Technology", "Status": "Published"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Top performer for NPTEL Online course “Learning Analytics Tools”, July to Dec 2024."
          ]
        }
      ]
    },

    "Mr. D. Jaganathan": {
        "name": "Mr. D. Jaganathan",
        "email": "jaganathand@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. D. Jaganathan.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "Sathyabama University",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "IOT, Machine Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=36470168000",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/461690",
                        "Google scholar: https://scholar.google.com/citations?user=eFMUHMMAAAAJ&hl=en&oi=sra",
                        "h-Index (As per Scopus Data) : 4"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Revolutionizing Cardiovascular Attack Prediction: A Comprehensive Machine Learning Approach for Accurate and Timely Detection. DOI: 10.1109/ICOECA62351.2024.00119",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Analysing and Forecasting Financial Services using Packet Transform through Wavelet Transitions. https://doi.org/10.1109/ICSSAS64001.2024.10760688",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Comprehensive Analysis Of Various Attacks In The IoT Environment. DOI: 10.1109/RMKMATE59243.2023.10369543",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "MLIDS: Revolutionizing of IoT based Digital Security Mechanism with Machine Learning Assisted Intrusion Detection System. DOI: 10.1109/AUTOCOM60220.2024.10486179",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "IoT based Gas Leakage Detection System DOI: 10.1109/ICSCDS56580.2023.10105018",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Morphogenesis Method to Detect Brain Tumor using Machine Learning Technique and Noise Filtering DOI: 10.1109/ICSCDS53736.2022.9760744",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Cardiovascular Disease Prediction using Enhanced Support Vector Machine Algorithm DOI: 10.1109/ICCMC53470.2022.9753916",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Performance Assessment of Routing Protocols in an Internet of Things by communicating in a Wireless Sensor Networks DOI: 10.1109/ICICCS53718.2022.9788156",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Independence action recognition using self similarities DOI: 10.35940/ijitee.L3964.1081219",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "2",
                            "Details of Research Publication": "Geographic based detection and prevention of spoofing attack. International Journal of Innovative Technology and Exploring Engineering (IJITEE) ISSN: 2278-3075, Volume-8 Issue-7 May, 2019",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202541020125 A",
                            "Title of the Patent": "AI-Enhanced Autonomous Underwater Exploration Apparatus",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "[Swayam NPTEL Course (Non-FDP or Pass certificate only)] Introduction to operating Systems: July 21, 2025 to Sept. 20, 2025",
                        "[NEP Theme Training (Malviya Mission Scheme)] NEP 2020 Orientation & Sensitization Programme under Malaviya Mission Teacher Training Programme (MM-TTP) of University Grants Commission (UGC),: June 20, 2025 to June 28, 2025",
                        "[Workshop] Mini CSR Training from IBM: March 26, 2025 to March 29, 2025",
                        "[Swayam NPTEL Course (Non-FDP or Pass certificate only)] Cloud Computing and Distributed Systems: Jan. 3, 2025 to March 22, 2025",
                        "[FDP (Swayam NPTEL)] Cloud Computing and Distributed Systems: Jan. 3, 2025 to March 22, 2025",
                        "[FDP (ATAL)] AI Solutions for Water Management in Smart Cities: Dec. 2, 2024 to Dec. 7, 2024",
                        "[FDP (Swayam NPTEL)] E-Business: July 30, 2024 to Oct. 30, 2024",
                        "[Swayam NPTEL Course (Non-FDP or Pass certificate only)] E-Business: July 30, 2024 to Oct. 30, 2024",
                        "[Any Faculty Appreciation] E-Business NPTEL Topper Appreciation: July 4, 2024 to Oct. 26, 2024",
                        "[FDP (Faculty Development Program, other than ATAL/NPTEL)] Exploring Advanced Machine Learning Techniques: June 24, 2024 to June 29, 2024",
                        "[FDP (Faculty Development Program, other than ATAL/NPTEL)] Blockchain Technology: Jan. 8, 2024 to Jan. 12, 2024",
                        "[FDP (Swayam NPTEL)] Introduction To Internet Of Things: Jan. 1, 2024 to April 21, 2024",
                        "[Swayam NPTEL Course (Non-FDP or Pass certificate only)] Introduction To Internet Of Things: Jan. 1, 2024 to April 21, 2024",
                        "[FDP (Faculty Development Program, other than ATAL/NPTEL)] Industry grade JAVA: Integrating Testing Frameworks, sonarQube with a mini project:: Sept. 27, 2023 to Oct. 5, 2023",
                        "[FDP (Faculty Development Program, other than ATAL/NPTEL)] Cloud Infrastructure(AWS): Aug. 21, 2023 to Aug. 25, 2023",
                        "[FDP (Faculty Development Program, other than ATAL/NPTEL)] Emerging Technologies: Aug. 7, 2023 to Aug. 11, 2023",
                        "[FDP (Swayam NPTEL)] Management Information System: Aug. 1, 2023 to Oct. 27, 2023",
                        "[Swayam NPTEL Course (Non-FDP or Pass certificate only)] Management Information System: Aug. 1, 2023 to Oct. 27, 2023",
                        "[Workshop] ADVANCED RESEARCH METHODOLOGY: July 3, 2023 to July 18, 2023",
                        "[FDP (Faculty Development Program, other than ATAL/NPTEL)] The problem of Feature Selection and approaches for solution: June 26, 2023 to July 1, 2023"
                    ]
                }
            ]
    },

    "Mr. Sreenath Kocharala": {
      name: "Mr. Sreenath Kocharala",
      designation: "Asst. Professor",
      email: "sreenathk@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/Mr. Sreenath Kocharla.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "M.Tech.", "Specialization": "Information Technology", "Branch": "Information Technology", "College Name/University": "Vignan's Foundation for Science, Technology and Research (Deemed to be University)", "Year of Passing": "2011"},
            {"S.No": "2", "Course": "B.Tech.", "Specialization": "Computer Science & Engineering", "Branch": "Computer Science & Engineering", "College Name/University": "D.M.S. S.V.H Colloge of Engineering", "Year of Passing": "2008"}
          ]
        },
        {
          title: "Research Areas",
          content: "Deep Learning"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57751965800"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/655245"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&user=FrDNB30AAAAJ#d=gs_hdr_drw&t=1760079220167"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "2"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "EHA-LNN: Optimized light gradient-boosting machine enabled neural network for cancer detection using mammographyQ2", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "4", "Details of Research Publication": "“AI- Powered Diagnosis: Revolutionizing Healthcare with Neural Networks", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "4", "Details of Research Publication": "“A Swarm Intelligence-Based Model for Disease Detection in Mango Crops”", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "An Effective Hybrid Threefold Encrypted and Double Protected Cryptographic Technique in Wireless Sensor Networks” in International Conference on Devices, Circuits and Systems (ICDCS)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025-26", "Application ID": "202541020126", "Title of the Patent": "Smart Medication Dispenser with IoT Connectivity", "Status": "Published"}
          ]
        }
      ]
    },

    "Mr. K. Venkata Subramanyam": {
        "name": "Mr. K. Venkata Subramanyam",
        "designation": "Asst. Professor",
        "email": "venkatasubramanyamk@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. K. Venkata Subramanyam.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computer Science",
                            "Branch": "Computer Science",
                            "College Name/University": "University of Hyderabad",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "Koneru Lakshmaiah College of Engineering, Vaddeswaram",
                            "Year of Passing": "2007"
                        }
                    ]
                }
            ]
    }
  */
};

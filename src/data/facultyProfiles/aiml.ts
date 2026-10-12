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
import type { FacultyProfile } from './index';

export const aimlProfiles: Record<string, FacultyProfile> = {
  /*
  // Static faculty profile data preserved in comments (Dynamic profiles fetched from EngageAI database API)
"Mr. Sanath Hegde": {
        "name": "Mr. Sanath Hegde",
        "designation": "Professor of Practice",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Sanath Hegde.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.B.A.",
                            "Specialization": "Quantitative Finance",
                            "Branch": "M.B.A.",
                            "College Name/University": "Indian Institute of Science, Bangalore",
                            "Year of Passing": "2005"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Malnad College of Engineering, Hassan",
                            "Year of Passing": "2001"
                        }
                    ]
                },
                {
                    "title": "Skill Areas",
                    "content": "Machine Learning, Natura Language Processing, Artificial Intelligence, Text Mining, Business Analytics & Strategy, CRM & Marketing Startegy, Customer Experience, Digital Analytics, Fraud Analytics, Python/SAS/SQL, Adobe Marketing Cloud"
                }
            ]
    },
  "Dr. V. Chandra Sekhar": {
        "name": "Dr. V. Chandra Sekhar",
        "designation": "Professor of Practice",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. V. Chandra Sekhar.png",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Deep Learning & Online Signature Verification",
                            "Branch": "CSE",
                            "College Name/University": "IIIT, SriCity",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "MS",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Dhirubhai Ambani Institute Of Information and Communication Technology - (DA-IICT)",
                            "Year of Passing": "2008"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Jawaharlal Nehru Technological university, Hyderabad",
                            "Year of Passing": "2004"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": [
                        "Deep Learning, Computer Vision",
                        "Online Signature Verification",
                        "Biometrics",
                        "Generative AI",
                        "Agentic AI",
                        "Large Language Models (LLMs)",
                        "Transformers",
                        "Distributed Machine Learning",
                        "MLOps and Multimodal Learning"
                    ]
                }
            ]
    },
  "Dr. Ramakanta Mohanty": {
        "name": "Dr. Ramakanta Mohanty",
        "designation": "Professor",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/eb2a41b68e1a35df79af8f682114ed41.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Berhampur University",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Software Engineering",
                            "Branch": "Software Engineering",
                            "College Name/University": "NIT Allahabad",
                            "Year of Passing": "2002"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "JNTUH, Hyderabad",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "AMIE",
                            "Specialization": "Electronics & Communication Engineering",
                            "Branch": "Electronics & Communication Engineering",
                            "College Name/University": "Institution of Engineers (IEI)",
                            "Year of Passing": "1999"
                        }
                    ]
                }
            ]
    },
  "Dr. M. Rajeswari": {
        "name": "Dr. M. Rajeswari",
        "email": null,
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. M. Rajeswari.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "ICE",
                            "Branch": "CSE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "ME",
                            "Branch": "CSE",
                            "College Name/University": "Nandha Engineering College, Anna University",
                            "Year of Passing": "2008"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "IT",
                            "Branch": "IT",
                            "College Name/University": "Maharaja Engineering College, Anna University",
                            "Year of Passing": "2005"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Networking, MANET, VANET, Artificial Intelligence, Machine Learning, Deep Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57218711503",
                        "Vidwan : https://mits.irins.org/profile/356408",
                        "Google scholar : https://scholar.google.com/citations?user=oxRIARoAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 8"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "1",
                            "Details of Research Publication": "Design and Validation of an Explainable Artificial Intelligence Based Decision Intelligence Model for Cyber Risk Aware Quality Systems and Ethical Human Resource Management: Investigating the Moderating Influence of Corporate Social Responsibility in Digitally Transformed Organizations, Quality - Access to Success, Vol.27, No.210, 2026",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "2",
                            "Details of Research Publication": "Ontology-Enabled Digital Twin Design with AI-Based Data Management and Privacy-Preserving Mechanisms for Secure 6G Communication Systems",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "AI-Enabled Neural Computing and Genetic Algorithm Optimization for Resource-Efficient Smart Environments in IoT Applications, Natural and Engineering Sciences, 10 (3), Dec 2025",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Assessing the Performance of WBAN using Reliability Analysis: UGFT-A Universal Generating Function Technique, Journal of Sensor Science and Technology",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "4",
                            "Details of Research Publication": "Mental Health Treatment Prediction Using Machine Learning, Biomedical and Pharmacology Journal, 2025",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "3",
                            "Details of Research Publication": "Early-Stage Detection of Colorectal Cancer Using Image Classification, 4th International Conference on Sentiment Analysis and Deep Learning Icsadl 2025 Proceedingspp. 1613-1618",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Performance Analysis of AlN/GaN HEMTs on &beta;-Ga2O3 Through Exploration of Varied Back Barriers: An Investigative Study for Advanced RF Power Applications, Journal of Electronic Materials53(7), pp. 3887-3900",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Innovative Financial Fraud Detection: Combining GCRNN and DiffPool with N-Way K-Shot Classification Techniques, 3rd International Conference on Automation Computing and Renewable Systems Icacrs 2024 Proceedingspp. 636-643",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "Fetal Health Status Classification Using Machine Learning Algorithms-A Comparative Analysis, 2024 International Conference on Smart Electronics and Communication Systems Isense 2024",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "A Comprehensive Review of Recent Artificial Intelligence Techniques and IOT Applications in Dairy Farms, 10th International Conference on Advanced Computing and Communication Systems Icaccs 2024 pp. 242-247",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "AI-Based Desktop VIZ: A Voice-Activated Personal Assistant-Futuristic and Sustainable Technology, Proceedings of the 2024 10th International Conference on Communication and Signal Processing Iccsp 2024 pp. 1095-1100",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Prior Alzehmiers detection using Deep Learning, Proceedings of the 2024 10th International Conference on Communication and Signal Processing Iccsp 2024 pp. 1095-1100",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Study on a solar water heater performance under the influence of nanofluid, Energy Environment Efficiency Resources Globalization 10(2), pp. 7-18",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "6",
                            "Details of Research Publication": "NLP-ML Hybrid: Identifying Signs of Suicidal Thoughts in Social Media Content, 2nd International Conference on Self Sustainable Artificial Intelligence Systems Icssas 2024 Proceedingspp. 1373-1379",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Comparable Works in Blockchain Technology, Blockchain Intelligent Systems Protocols Application and Approaches for Future Generation Computingpp. 34-50",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Voice-based Virtual Assistant with Security, Proceedings of the 2023 2nd International Conference on Electronics and Renewable Systems Icears 2023 pp. 822-827",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Song Recommendation based on Voice Tone Analysis, Proceedings of the 2023 2nd International Conference on Electronics and Renewable Systems Icears 2023 pp. 708-712",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "mpowering Tourists with Context-Aware Recommendations using GAN, Proceedings of the 2023 2nd International Conference on Electronics and Renewable Systems Icears 2023 pp. 1444-1449",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Neural Network-based Prognostic Model for Cerebrovascular Accident using CT Scans, 2nd International Conference on Sustainable Computing and Data Communication Systems Icscds 2023 Proceedings pp. 497-502",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Analysis of DC and RF performance of Al0.31Ga0.69N/Al0.1Ga0.9N/ &beta;-Ga2O3 double quantum well HEMT on silicon carbide substrate, International Journal of RF and Microwave Computer Aided Engineering 32(6)",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Utilization of deep learning technology in recognizing bird species, Aip Conference Proceedings 2463",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Detection of tyre defects using weighted quality-based convolutional neural network, Soft Computing 26(9), pp. 4261-4273",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Exploration of sentiment analysis and legitimate artistry for opinion mining, Multimedia Tools and Applications, 81(9), pp. 11989-12004",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "vention of School Shooting using Neural Networks and Computer Vision, Proceedings of the 2022 3rd International Conference on Intelligent Computing Instrumentation and Control Technologies Computational Intelligence for Smart Systems Icicict 2022 pp. 1703-1709",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "2",
                            "Details of Research Publication": "Visual Saliency Prediction Using Deep Learning, 2021 7th International Conference on Advanced Computing and Communication Systems",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "5",
                            "Details of Research Publication": "Recent Survey on Emotion Recognition Using Physiological Signals, 2021 7th International Conference on Advanced Computing and Communication Systems Icaccs 2021 pp. 1858-1863",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "2",
                            "Details of Research Publication": "Adaptive beam formation and channel allocation using substance near multicast protocol and CS-iEHO, Soft Computing 25(6), pp. 4663-4676",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "2",
                            "Details of Research Publication": "Tyre inspection through multi-state convolutional neural networks, Intelligent Automation and Soft Computing 27(1), pp. 1-13",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "29 Person identification with aerial imaginary using SegNet based semantic segmentation, Earth Science Informatics 13(4), pp. 1293-1304",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "4",
                            "Details of Research Publication": "Cascading Model in Underwater Wireless Sensors using Routing Policy for State Transitions, Microprocessors and Microsystems 79",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Usage of energy efficient sensor nodes on wearable device for fall and child abduction detection, International Journal of Engineering and Advanced Technology 9(1), pp. 6482-6485",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "3",
                            "Details of Research Publication": "A secure model for hiding multimedia files within two cover images, International Journal of Recent Technology and Engineering 7(5), pp. 406-409",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Dispersal of traffic alert messages without missing the reliability for environmental protection, Ekoloji 28(107), pp. 571-581",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Performability of VBRCP in VANET using UGFT, International Journal of Innovative Technology and Exploring Engineering 8(3), pp. 42-46",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "3",
                            "Details of Research Publication": "Game theoretical approach with Audit based Misbehavior Detection system, Proceedings of the International Conference on Inventive Communication and Computational Technologies Icicct 2018 pp. 1932-1935",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "36",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Emerging trends in computing: Reliability design for a VANET with WUGFT subject to time and cost constraints, International Journal of Engineering and Advanced Technology 8(2), pp. 195-200",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "37",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Reliability analysis of MANET with RCFP: Reliable cluster forming protocol, International Journal of Applied Engineering Research 11(1), pp. 440-447",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "38",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "1",
                            "Details of Research Publication": "Assessing the reliability of adhoc network using UGF: Probabilistic approach, Asian Journal of Information Technology 15(3), pp. 563-566",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "39",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Reliable fuzzy reputation system to enhance the performance of disseminating the information in VANET, International Journal of Engineering and Technology 6(4), pp. 1856-1866",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "40",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012",
                            "Author Position": "1",
                            "Details of Research Publication": "Performance analysis of AODV, DSR, TORA and OLSR to achieve group communication in MANET, 4th International Conference on Advanced Computing Icoac 2012",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "41",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010",
                            "Author Position": "1",
                            "Details of Research Publication": "Maximizing resource sharing by minimizing response time in ad-hoc network, Proceedings of 2010 International Conference on Communication and Computational Intelligence Incocci 2010pp. 63-67",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2019",
                            "Application ID": "201941028900",
                            "Title of the Patent": "A system and method of biometric identification based on distributed Internet-of-Things lock and unlocking thereof",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2020",
                            "Application ID": "202041029484 A",
                            "Title of the Patent": "Portable low cost smart Spirometer using Embedded & IOT",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "2021103130",
                            "Title of the Patent": "A system and method for person detection in aerial imagery using semantic segmentation",
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
                            "Academic Year": "2020",
                            "Name of the Consulting Firm": "Sahrdaya College of Engineering and Technology",
                            "Title of the Project/Event": "QuerySoft: A Personalized Query Software",
                            "Amount in Rs. /-": "70,000"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Received Best faculty award for the academic year 2010 &ndash; 2011 in Angel College of Engineering and Technology, Tirupur",
                        "Received Gold Coin for producing 100% results in Nandha Engineering College, Erode",
                        "Received certificate of appreciation for producing 100% results in various subjects in Angel College of Engineer"
                    ]
                }
            ]
    },
  "Dr. Kurumalla Suresh": {
        "name": "Dr. Kurumalla Suresh",
        "email": null,
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Kurumalla Suresh.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Post-Doctoral Researcher",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "London Metropolitan University-UK",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Jawaharlal Nehru Technological University, Kakinada",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Artificial Intelligence and Robotics",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Andhra University",
                            "Year of Passing": "2008"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Lenora College of Engineering, JNTUH",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Artifiial Intelligence, Machine Learning, Deep Learning, Dataware Housing & Mining"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59685209400",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/463388",
                        "Google scholar : https://scholar.google.co.in/citations?user=UF4jF-cAAAAJ",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "3",
                            "Details of Research Publication": "Matrix Factorization based recommendation system using hybrid optimization technique Research article in &ldquo;European Union Digital Library &ldquo;published in 19-02-2021.EAI Endorsed Transactions on Energy Web 07 2021 - 09 2021 | Volume 8 | Issue 35 | e14",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "-"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Various image segmentation algorithms: A survey,Smart Innovation, Systems and Technologies,ISSN: 21903018,Volume: 10",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "-"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "2",
                            "Details of Research Publication": "Cluster Based Prediction of Keyword Query Over Databases,Lecture Notes in Networks and SystemsISSN: 23673370,Volume: 5",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "-"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "1",
                            "Details of Research Publication": "K-nearest neighbor based dbscan clustering algorithm for image segmentation,Journal of Theoretical and Applied Information Technology,ISSN: 1992-8645,Volume: 92,Issue: 2",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Edge detection on an image using ant colony optimization,Advances in Intelligent Systems and Computing,ISSN: 21945357,Volume: 381",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "-"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "An improved k-means clustering algorithm for image segmentation,International Journal of Applied Engineering Research,ISSN: 09734562, Volume: 10,Issue: 13",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "-"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Improving query processing performance using optimization among CPEL factors,Advances in Intelligent Systems and Computing,ISSN: 21945357,Volume: 327",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "-"
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2025",
                            "Funded Project /Event": "Funded Project",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Design and Fabrication of Banana Bunch Harvesting Robot using AI",
                            "Amount in Rs. /-": "13,00,000",
                            "Funding Agency": "MSME"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2024",
                            "Funded Project /Event": "Funded Event(ATAL FDP)",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Next-Gen Solution for Medical challenges Powered by AI based Intelligent Systems",
                            "Amount in Rs. /-": "1,00,000",
                            "Funding Agency": "AICTE"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2026",
                            "Application ID": "202641046800 A",
                            "Title of the Patent": "System and Method for Temporal memory-bases Monocular three-dimensional Object detection in Video Sequences",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2024",
                            "Application ID": "202441087351 A",
                            "Title of the Patent": "Real-Time AI Powered Image processing Framework for Remote Health Care diagnostics over 5G",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "202241047928 A",
                            "Title of the Patent": "A System for Detecting Block chain SMS Posting Bot Based on Machine Learning and Method Thereof",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2021",
                            "Application ID": "202041055099",
                            "Title of the Patent": "Flexible Spacesuit Hand Gloves",
                            "Status": "Granted"
                        }
                    ]
                },
                {
                    "title": "Consultancy Projects",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2025",
                            "Funded Project / Event": "Funded Project",
                            "Role": "Co-Invistigator",
                            "Title of the Project/Event": "Enhancement of target in inclement weather conditions",
                            "Amount in Rupees Rs/-": "6,00,000/-",
                            "Funding Agency": "ATTIC INFORMATICS"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2025",
                            "Funded Project / Event": "Funded Project",
                            "Role": "Co-Invistigator",
                            "Title of the Project/Event": "E-Commerce Website and App development",
                            "Amount in Rupees Rs/-": "6,00,000/-",
                            "Funding Agency": "ATTIC INFORMATICS"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2025",
                            "Funded Project / Event": "Funded Project",
                            "Role": "Co-Invistigator",
                            "Title of the Project/Event": "Micro-Controller based APS System with Machine Learning Software",
                            "Amount in Rupees Rs/-": "3,50,000/-",
                            "Funding Agency": "IBR TECHNOLOGIES PVT.LTD"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Recognized as a Research Superviser in the Year 2026 from SR University.",
                        "Teacher of the Year 2025 Award from St.Martins Engineering College.",
                        "Recognized as a Research Superviser in the Year 2025 from JNTUH.",
                        "Qualified Andhra Pradesh State Eligibility Test (APSET) in the Year 26th April 2024.",
                        "Resource Person: 3-day workshop on Machine learning in Association with INTEL UNNATI held from 12th Sept 24 to 14 Sept24,MRCET.",
                        "Ratified as a Associate Professor by JNTUH,Date:23.11.2023.",
                        "Ratified as a Assistant Professor by JNTUH,Date:27.07.2021.",
                        "Ratified as a Assistant Professor by Andhra University,Date:23.09.2014.",
                        "Elsevier REVIEWER: Engineering Science and Technology, an International Journal.",
                        "Life time Member in Member of the Institution of Engineers (MIE).Membership No: 1622077.",
                        "Life time Member in Computer Society of India (MCSI),Membership No: I1501028.",
                        "Member in Association for Computing Machinery (ACM),Membership No: 8262975."
                    ]
                }
            ]
    },
  "Dr. S. Padma": {
        "name": "Dr. S. Padma",
        "email": "drpadmas@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. S. Padma.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Machine Learning",
                            "Branch": "Computer Science",
                            "College Name/University": "Bharathiar University",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "Computer Science",
                            "Branch": "Computer Science",
                            "College Name/University": "Bharathidasan University",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "M.C.A",
                            "Specialization": "Computer Applications",
                            "Branch": "Computer Applications",
                            "College Name/University": "Bharathidasan University",
                            "Year of Passing": "2002"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Computer Science",
                            "Branch": "B.Sc.",
                            "College Name/University": "Bharathiar University",
                            "Year of Passing": "1998"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning, Computer Vision"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57421746300",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/154008",
                        "Google scholar : https://scholar.google.com/citations?user=ZsrUdcwAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 4"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Feature extraction and feature selection in medical images, Editor(s): Bikesh Kumar Singh, G.R. Sinha, Intelligent Computing Techniques in Biomedical Imaging, Academic Press, 2025, Pages 83-97, ISBN 9780443159992, https://doi.org/10.1016/B978-0-443-15999-2.00008-6 .",
                            "Indexing": "Scopus",
                            "Publication": "Book chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "Leveraging EfficientNetB3 in a Deep Learning Framework for High-Accuracy MRI Tumor Classification\u201d, CMC-Computers, Materials & Continua, DOI:10.32604/cmc.2024.053563",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Classification of Mental Health and Emotion of Human from Text using Machine Learning Approaches,\" 2023 6th International Conference on Information Systems and Computer Networks (ISCON), Mathura, India, 2023, pp. 1-7, IEEE Xplore",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Predictive Modeling of Academic Success using Extreme Learning Machine\u201d, at ICCICCT &ndash; 2024",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "A Review on Smart Agriculture System\u201d, at ICCICCT &ndash; 2024",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Network Intrusion Detection using Gradient Boosting Algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Effective Water Quality Prediction using Random Forest Algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Analyzing How E-Learning and Virtual Reality could be Integrated to Enhance Studies\u201d, ECS Transactions, 107 (1) 13163-13173 (2022), The Electrochemical Society",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Imparting OBE to the Younger Generation.\" Assessment Tools for Mapping Learning Outcomes With Learning Objectives, edited by G. R. Sinha, IGI Global, 2021, pp. 27-41. https://doi.org/10.4018/978-1-7998-4784-7.ch003",
                            "Indexing": "Scopus",
                            "Publication": "Book chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Design of Classifiers. In: Sinha, G. (eds) Advances in Biometrics. Springer, Cham. https://doi.org/10.1007/978-3-030-30436-2_6",
                            "Indexing": "Scopus",
                            "Publication": "Book chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Solving Classification Problems Using Projection Based Learning Algorithm With Fuzzy Radial Basis Function Neural Network\u201d, International Journal of Computer Intelligence and Applications (IJCIA) Vol. 17, No. 03, 1850013-1-11,2018",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "A Survey on study of various machine learning methods for classification\u201c International Journal of Database Theory and Application Vol 8. No 5(2015)",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "1",
                            "Details of Research Publication": "A Comparative Study on Different Meta-Cognitive Learning for Classification Problems \u201c Journal of NanoScience and NanoTechnology - Spring Edition Vol 2, No 1 (2014)",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Funded Project /Event": "Funded Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "WIE Funding &ndash; Tech Queens",
                            "Amount in Rs. /-": "($200) 17,000",
                            "Funding Agency": "IEEE - WIE"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Funded Project /Event": "Funded Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Number Analytics and Data Science",
                            "Amount in Rs. /-": "2,29,500",
                            "Funding Agency": "Indian Academy of Sciences, Bengaluru"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Funded Project /Event": "Funded Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Modern Computational Techniques",
                            "Amount in Rs. /-": "22,500",
                            "Funding Agency": "(Online) Indian Academy of Sciences, Bengaluru"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Funded Project /Event": "Funded Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Scientific Computations",
                            "Amount in Rs. /-": "22,500",
                            "Funding Agency": "(Online) Indian Academy of Sciences, Bengaluru"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Funded Project /Event": "Funded Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Numerical methods and Scientific Computing",
                            "Amount in Rs. /-": "1,28,262",
                            "Funding Agency": "Indian Academy of Sciences, Bengaluru"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Funded Project /Event": "Funded Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Entering Life Science Research Arena through Bigdata",
                            "Amount in Rs. /-": "50,000",
                            "Funding Agency": "DBT (Department of Biotechnology)"
                        },
                        {
                            "S.No": "7",
                            "Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Funded Project /Event": "Funded Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Artificial Intelligence and Computational Biology",
                            "Amount in Rs. /-": "1,85,200",
                            "Funding Agency": "Indian Academy of Sciences, Bengaluru"
                        },
                        {
                            "S.No": "8",
                            "Affiliation": "Others",
                            "Academic Year": "2015-17",
                            "Funded Project /Event": "Funded Project",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Computer Training for Rural School Students",
                            "Amount in Rs. /-": "4,50,000",
                            "Funding Agency": "KSR Educational and Charitable Trust"
                        },
                        {
                            "S.No": "9",
                            "Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Funded Project /Event": "Funded Project",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Unnat Bharat Abhiyan",
                            "Amount in Rs. /-": "50,000",
                            "Funding Agency": "UBA, MHRD"
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
                            "Application ID": "202141055281 A",
                            "Title of the Patent": "AUTOMATED EDUCATION PROCESS WITH FEEDBACK SYSTEM USING MACHINE LEARNING AND AI",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Received the Best Administrator Award (2017) from Dr. Kalam Educational Trust, Chennai.",
                        "Elected as CSTA India Chapter Leader (Curriculum and Professional Development) in 2024.",
                        "Recognized with ICT Academy Awards (2018):",
                        "Best Practices Award for Engaging Students towards Social Responsibility.",
                        "Best Academic Partner Excellence Award for Skill Development Initiatives.",
                        "Acted as Session Chair and Reviewer for several international conferences including ASCIS 2024, ISCAIE 2021, and ISIEA 2021.",
                        "Reviewer and Editorial Board Member for reputed international journals such as Inderscience&rsquo;s Journal of Business Intelligence and Data Mining and American Journal of Data Mining and Knowledge Discovery.",
                        "Invited Teacher at the Indian Academy of Sciences Annual and Mid-Year Meetings (BHU, Varanasi 2018, IISc Bangalore 2019; SRM University AP 2022).",
                        "Serving as Mentor for the Women in Machine Learning (WiML) Mentorship Program",
                        "Senior Member IEEE &ndash; Membership No: 98329128",
                        "IEEE WIE Student Advisor &ndash; MITS Student Branch",
                        "Life Member ISTE &ndash; Membership No : LM140721"
                    ]
                }
            ]
    },
  "Dr. Sandhya. E": {
        "name": "Dr. Sandhya. E",
        "email": null,
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Sandhya. E.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "IoT Security",
                            "Branch": "CSE",
                            "College Name/University": "SRM Institute of Science and Technology",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "SRM University",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "JNTU, Hyderabad",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "IoT Security, Network Security, Machine Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58308190400",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/460126",
                        "Google scholar : https://scholar.google.com/citations?user=OOjpzlYAAAAJ&hl=en",
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
                            "Details of Research Publication": "Enhancing security and efficiency in Mobile Ad Hoc Networks using a hybrid deep learning model for flooding attack detection, Scientific Reports, Volume 15, Issue 1, 2025",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "AI-Driven Threat Detection in Cloud Environments, Convergence of Cyber security and Cloud Computing, Pages 261-284, Publisher IGI Global Scientific Publishing, 2025",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Cutting-Edge approaches to data protection and encryption in cloud computing security, Convergence of Cybersecurity and Cloud Computing, Pages 261-284, IGI Global Scientific Publishing",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "A comprehensive review of computerized respiratory sound analysis and deep learning techniques for acoustic signal-based disease classification, AIP Conference Proceedings, Volume 3237, Issue 1, 2025, Publisher AIP Publishing LLC",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Visual data analysis and inference through dimensionality reduction techniques, Interactive and Dynamic Dashboard Pages 21-68, 2024, Publisher CRC Press",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Performance Analysis of ML and DL Models: Impact of Linear and Non-Linear Optimizers on Model Efficiency, Advances in Nonlinear Variational Inequalities, Volume 28, Issue 1s, 2024.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Deep learning model for intrusion detection in SDN networks, 1st International Conference on Optimization Techniques for Learning (ICOTL), Pages 1-6, Publisher IEEE, 2023",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Intrusion Detection using HRO with Ensemble Learning Models and Comparison, 1st International Conference on Optimization Techniques for Learning (ICOTL), Pages 1-6, Publisher IEEE, 2023",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Intrusion Detection System for IoT Networks, 1st International Conference on Optimization Techniques for Learning (ICOTL), Pages 1-6, Publisher IEEE, 2023",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Energy Management and Network Traffic Avoidance Using GAODM and E-AODV Protocols in Mobile Ad-Hoc Network, International Journal of Computer Network and Information Security, Volume 3, 78-89, 2023",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "6",
                            "Details of Research Publication": "Selection of Features Using Adaptive Tunicate Swarm Algorithm with Optimized Deep Learning Model for Thyroid Disease Classification, Ingenierie des Systemes dInformation, International Information and Engineering Technology Association, Volume 28, Issue 2, Pages 299-308, 2023",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "A Hybrid Spider Monkey and Hierarchical Particle Swarm Optimization Approach for Intrusion Detection on Internet of Things, Sensors, MDPI, 2022",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing the Performance of an Intrusion Detection System Using Spider Monkey Optimization in IoT, International Journal of Intelligent Engineering and Systems, Volume 14, Issue 6, 2021",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "3",
                            "Details of Research Publication": "Health Monitoring System using Integration of Cloud and Data Mining Techniques, Helix International Journal (Thomson Reuters), Vol. 7(5), pg .no 2047-2052, 2017",
                            "Indexing": "WoS",
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
                            "Academic Year": "2024-25",
                            "Application ID": "202241029619",
                            "Title of the Patent": "A Machine Learning-based Hybrid Intrusion Detection System for Detecting the Cyber-Physical Attacks",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Application ID": "202141007324",
                            "Title of the Patent": "A Smart Wearable Travel Support System for Supervising Visually Impaired People",
                            "Status": "Granted"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Top Performing Mentor for Course on &ldquo;Introduction on Intellectual Property to Engineers and Technologists&rdquo; - Jan to Apr 2025 - NPTEL.",
                        "Top Performing Mentor for Course on &ldquo;Cloud Computing and Distributed Systems&rdquo; - Jan to Mar 2024 - NPTEL",
                        "&ldquo;Certificate of Excellence&rdquo; for the program &ldquo;Use of ICT Education for on-line and Blended Learning&rdquo; - October, 2016 - IIT Bombay.",
                        "Ratified as Assistant Professor, JNTU Anantapuramu - June 2015 - JNTU Anantapuramu."
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "\u201cEnergy Management and Network traffic avoidance Using GAODM and E-AODV protocols in Mobile Ad- Hoc Network\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Communication Networks and Information Security , Accepted in Nov 2022. (Scopus Indexed)"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "\u201cSelection of Features Using Adaptive Tunicate Swarm Algorithm with Optimized Deep Learning Model for Thyroid Disease Classification\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Ingenierie des Systemes d'Information, International Information and Engineering Technology Association, Vol. 28, No. 2, April 2023. https://doi.org/10.18280/isi.280205 (Scopus Indexed)"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "\u201cA Hybrid Spider Monkey and Hierarchical Particle Swarm Optimization Approach for Intrusion Detection on Internet of Things\"",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Sensors, MDPI, 2022. https://doi.org/10.3390/s22218566. (SCIE Indexed)"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "\u201cEnhancing the Performance of an Intrusion Detection System Using Spider Monkey Optimization in IoT\"",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Intelligent Engineering and Systems Vol.14, No.6, 2021. DOI: 10.22266/ijies2021.1231.04. (Scopus Indexed),"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "\u201cHealth Monitoring System using Integration of Cloud and Data Mining Techniques\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Helix International Journal(Thomson Reuters), Vol. 7(5), pg .no 2047-2052, September 2017. (WoS Indexed)"
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "\u201cInvestigating Student Learning Process and Predicting Student Performance Using Machine Learning Approaches\"",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Early Childhood Special Education, Vol. 14 Issue 7, 2022, pg no.622-628."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "\u201cUsing Traditional Machine Learning Algorithms and SMOTE Technique to Estimate Student\u2019s Academic Performance in Higher Education\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal Of Algebraic Statistics, Vol.13, No.3,2022, pg no. 3031-3041."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "\u201cSmart Online Examination Monitoring System\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal Of Algebraic Statistics, Volume 13 Issue 3, 2022,Pg No 559-570."
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "\u201cHealth Monitoring System Using IoT Sensors\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal Of Algebraic Statistics, Vol.13, No.3,2022, pg no. 3051-3056."
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "\u201cPopular Attacks on IoT Layers and its Countermeasures, Security Requirements and Open Issues\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Science and Technology, Vol. 29, No. 7s, (2020), pp. 5191 \u2013 5203."
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "\u201cOptimization of Security Policies on Virtual Machines using Flow Differentiator & Zone Manager\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "(IJCSIT) International Journal of Computer Science and Information Technologies, Vol. 5 , Issue 5, 2014. (Google Scholar)"
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "\u201cManaging DDoS attacks on virtual machines by segregated policy management\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Global Journal of Computer Science and Technology : E Network, Web & Security, Vol. 14, Issue 6, October 2014."
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "\u201cA Study on Program Verification using EFSBI approach\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Research in Computer and Communication Engineering Vol. 2, Issue 5, May 2013. (Google Scholar)"
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "\u201cDetecting Phishing Websites Using ML\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Advances in Data Analytics, Smart Computing and Networks (IDASCN-2022) , organized by Dept. of CSE (Data Science) and Information Technology, Mohan Babu University (Erstwhile Sree Vidyanikethan Engineering College), Tirupati, October 13-14, 2022."
                        },
                        {
                            "S.No": "15",
                            "Title of the Paper": "\u201cPrediction Of Student Performance Using Machine Learning Techniques In Higher Education\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Advances in Data Analytics, Smart Computing and Networks (IDASCN-2022) , organized by Dept. of CSE (Data Science) and Information Technology, Mohan Babu University (Erstwhile Sree Vidyanikethan Engineering College), Tirupati, October 13-14, 2022."
                        },
                        {
                            "S.No": "16",
                            "Title of the Paper": "\u201cInvestigating Student Learning Process And Predicting Student Performance Using Machine Learning Approaches\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Advances in Data Analytics, Smart Computing and Networks (IDASCN-2022) , organized by Dept. of CSE (Data Science) and Information Technology, Mohan Babu University (Erstwhile Sree Vidyanikethan Engineering College), Tirupati, October 13-14, 2022."
                        },
                        {
                            "S.No": "17",
                            "Title of the Paper": "\u201cOnline Book Rental Portal\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Advances in Data Analytics, Smart Computing and Networks (IDASCN-2022) , organized by Dept. of CSE (Data Science) and Information Technology, Mohan Babu University (Erstwhile Sree Vidyanikethan Engineering College), Tirupati, October 13-14, 2022."
                        },
                        {
                            "S.No": "18",
                            "Title of the Paper": "\u201cHealth Monitoring System\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Advances in Data Analytics, Smart Computing and Networks (IDASCN-2022) , organized by Dept. of CSE (Data Science) and Information Technology, Mohan Babu University (Erstwhile Sree Vidyanikethan Engineering College), Tirupati, October 13-14, 2022."
                        },
                        {
                            "S.No": "19",
                            "Title of the Paper": "\u201cStudent Grade Prediction in Higher Institutions using Machine Learning Techniques\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference on Knowledge Innovations and Technologies for Sustainability (NCKITS-2022) organized by Dept. of Computer Science Engineering, Sree Vidyanikethan Engineering College, Tirupati, April 28, 2022."
                        },
                        {
                            "S.No": "20",
                            "Title of the Paper": "\u201cInvestigation Student Learning Process and Predicting Student Performance using Machine Learning Approaches\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference on Knowledge Innovations and Technologies for Sustainability(NCKITS-2022) organized by Dept. of Computer Science Engineering, Sree Vidyanikethan Engineering College, Tirupati, April 28, 2022."
                        },
                        {
                            "S.No": "21",
                            "Title of the Paper": "\u201cIoT Based Vehicle Security Systems\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "2nd Virtual National Conference on Advances in Artificial Intelligence organized by DST-CURE-Artificial Intelligence Centre, Sri Padmavathi Mahila Viswavidayalayam, Tirupati, November 11-12, 2021."
                        },
                        {
                            "S.No": "22",
                            "Title of the Paper": "\u201cSecuring IoT: Popular Attacks on IoT Layers, Security Requirements and Consideration\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Proceeding of International conference on Internet of Things-ICIoT 2019,organized by Department of CSE in association with IET, SRM Institute of Science and Technology, Chennai, March 11-15,2019."
                        },
                        {
                            "S.No": "23",
                            "Title of the Paper": "\u201cGame of things : A Survey\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Proceeding of IEEE International conference on Electrical, Electronics, Computers, Communication, Mechanical and Computing, organized by Priyadarshini Engineering College, Vaniyambadi ,Tamilnadu ,Jan 28- 28,2018."
                        },
                        {
                            "S.No": "24",
                            "Title of the Paper": "\u201cHealth Monitoring System using Integration of Cloud and Data Mining Techniques\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Proceeding of International conference on Cognitive Science and Artificial Intelligence (ICCSAI-2017) organized by Sree Vidyanikethan Engineering College, Tirupati, July 05-07, 2017."
                        },
                        {
                            "S.No": "25",
                            "Title of the Paper": "\u201cChecking Correctness of Java code in Refactoring Engines\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Innovations in Computer Science &Engineering, CSI& Guru Nanak Institutions, Aug 08-09,2014"
                        },
                        {
                            "S.No": "26",
                            "Title of the Paper": "\u201cEliminating Application Level DDos Attacks by using Various Port Hopping Techniques\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Proceedings of International conference on Electrical, Electronics & Computer Science (ICEECS) organized by Institute for Research and Development (IRD), India, Dec 2012."
                        },
                        {
                            "S.No": "27",
                            "Title of the Paper": "\u201cImpact of Structural Changes on the Maintainability of Service-Oriented Software\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Computing and Control Engineering organized by Dr. M.G.R Educational & Research Institute University, Chennai, April 12-13,2012."
                        },
                        {
                            "S.No": "28",
                            "Title of the Paper": "\u201cIsolation Of Compromised Vms Against DDOS Attacks Using Normalizers\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference On Innovation In Intelligence And Computing Technologies, CSI & Easwari Engg. College, Chennai, August 2011"
                        }
                    ]
                },
                {
                    "title": "Book Publication",
                    "content": "Ms. E.Sandhya, Dr. Gowtham Mamidisetti, Dr. GnanaprakasamThangavel, \u201cInternet of Things\u201d, Publisher : Book Rivers, ISBN-10 : 9355157487, ISBN-13 : 978-9355157485, January 2023"
                }
            ]
    },
  "Dr. D. Sathyanarayanan": {
        "name": "Dr. D. Sathyanarayanan",
        "designation": "Asst. Professor",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Sathyanarayanan.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "AMET University",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2002"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "University of Madras",
                            "Year of Passing": "1998"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Data Mining, Artificial Intelligence, Machine Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=6505688475",
                        "Vidwan : https://vidwan.inflibnet.ac.in//profile/373118",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=6yl8tHEAAAAJ",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                }
            ]
    },
  "Dr. R. Praveen Kumar": {
        "name": "Dr. R. Praveen Kumar",
        "email": null,
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. R. Praveen Kumar.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "National Institute of Technology, Durgapur, West Bengal",
                            "Year of Passing": "2024"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computer Networks and Information Security",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Sree Vidyanikethan Engineering college, Tirupathi",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Priyadarshini College of Engineering, JNTU Ananthapur",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Sensor Data Processing, Applications of Machine Learning, Information Security, Internet of Things"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57213825906",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/587138",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=bPBx07wAAAAJ&view_op=list_works",
                        "h-Index (As per Scopus Data) : 5"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhanced Unimodal Continuous Authentication Architecture on Smartphones for User Identification through Behavioral Biometrics, 2023 2nd International Conference on Vision Towards Emerging Trends in Communication and Networking Technologies (ViTECoN), PP. 1-6, IEEE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Sensor-based continuous user authentication on smartphone through machine learning. Microprocessors and Microsystems, 96, p.104750",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Continuous User Authentication on Smartphone via Behavioral Biometrics: A Survey, Multimedia Tools and Applications, 82(2), P.1633&ndash;1667",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "3",
                            "Details of Research Publication": "Architecture and Security Issues in Fog Computing Applications, IGI Global",
                            "Indexing": "Scopus",
                            "Publication": "Book",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Continuous Gait Authentication Against Unauthorized Smartphone Access Through Na&iuml;ve Bayes Classifier, International Conference on Intelligent Computing and Communication, PP. 799-808, Springer",
                            "Indexing": "Scopus and Web of Science",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "\u201cMultimodal Continuous Authentication on Smart- phones through Multi-Layer LSTM Model\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Communicated to Journal. (Submitted to SCIE indexed journal, Status: Under review)"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "\u201cSensor-based Continuous User Authentication on Smartphone through Machine Learning\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Microprocessors and Microsystems Jour- nal, 2023. (DOI: 10.1016/j.micpro.2022.104750) (Indexed in Scopus and SCIE)"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "\u201cContinuous user authentication on smartphone via behavioral biometrics: a survey\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Multimedia Tools and Applications An Inter- national Journal, 2022. (DOI: 10.1007/s11042-022-13245-9) (Indexed in Scopus and SCIE)"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "\u201cMulti-Layer Token Based Au- thentication Through Honey Password in Fog Computing\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Fog Computing, 1(1), IGI Global, 2018. (DOI: 10.4018/IJFC.2018010104)"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "\u201cMitigating Application DDoS Attacks using Random Port Hopping Technique\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IJERMT Vol.4, Issue No.1, JAN 2015."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "\u201cEnhanced Unimodal Continuous Authentication Architecture on smartphones for User Identification through Behavioral Biometrics\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "in the proceedings of the IEEE 2nd International Conference on Vision Towards Emerging Trends in Communication and Networking Technolo- gies ViTECoN 2023, at VIT (Vellore Institute of Technology) University, Vellore, Tamilnadu, India. (Indexed in Scopus)"
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "\u201cContinuous Gait Au- thentication Against Unauthorized Smartphone Access Through Na\u00a8\u0131ve Bayes Classi- fier\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "in the proceedings of 3rd International Conference On Intelligent Computing And Communications (ICICC 2019), at Dayananda Sagar University, Bangalore, Karnataka, India. (Indexed in Scopus and Web of Science)"
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "\u201cSecuring Information using Steganography\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "in the proceedings of IEEE International Conference on Circuit, Power and Computing Technologies 2013 (ICCPCT 2013), at Noorul Islam University, Kanyakumari, TamilNadu, India. (Indexed in Scopus)"
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "\u201cTwo Phase Clandestine Image Encryption\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "in the National Conference on Networking and Information Technology 2012 (N2IT 2012), at Annamacharya Institute of Technology and Sci- ences (AITS), Rajampet, Andhra Pradesh, India"
                        }
                    ]
                },
                {
                    "title": "Books",
                    "content": [
                        "S. Goundar and P. K. Rayani, Eds., \u201cApplications of Big Data in Large- and Small-Scale Systems\u201d. IGI Global, 2021. DOI: 10.4018/978-1-7998-6673-2.",
                        "S. Goundar, S. B. Bhushan, and P. K. Rayani, Eds., \u201cArchitecture and Security Issues in Fog Computing Applications\u201d. IGI Global, 2020. DOI: 10.4018/978-1- 7998-0194-8. (Indexed in Scopus)"
                    ]
                },
                {
                    "title": "Book Chapters",
                    "content": [
                        "S. Goundar, N. Prasad, D. Chetty, R. Prasad, and P. K. Rayani, \u201cUsage and Ben- efits of Banner ERP System at a University\u201d. pp. 291-304, ISBN: 9781648023439, Information Age Publishing, 2021.",
                        "R. K. Poluru, S. B. Bhushan, B. S. Muzamil, P. K. Rayani and P. K. Reddy, \u201cApplications of Domain-Specific Predictive Analytics Applied to Big Data\u201d. pp. 289-306, ISBN: 978-15-225-4999-4, IGI Global, August 2018."
                    ]
                }
            ]
    },
  "Dr. Shahnazeer C K": {
        "name": "Dr. Shahnazeer C K",
        "designation": "Asst. Professor",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Shahnazeer C K.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Pondicherry University, Karaikal",
                            "Year of Passing": "2026"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "Anna University, Coimbatore",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "Government Engineering College, University of Calicut",
                            "Year of Passing": "2006"
                        }
                    ]
                }
            ]
    },
  "Mr. V. Sivaraman": {
        "name": "Mr. V. Sivaraman",
        "email": null,
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. V. Sivaraman.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Deep Learning",
                            "Branch": "CSE",
                            "College Name/University": "Visvesvaraya Technological University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Jayaram College of Engg. and Technology, Anna University",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Madha Engineering College, Madras University",
                            "Year of Passing": "2004"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Deep Learning, GenAI"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59312432500",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/587078",
                        "Google scholar : https://scholar.google.com/citations?user=7hNiIUYAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 2"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "Title:&ldquo;Locating Patient Health Data Theft Using Gradient Boosting with Hybrid Microwave Transmission-Based Wearable Device&rdquo; Conference Name: International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication (IConSCEPT) Publisher: IEEE DOI: 10.1109/IConSCEPT61884.2024.10627827 Page: 1-6, Published: July 4, 2024 Published: July 4, 2024",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Title: Emerging Trends in Edge AI for Industry 4.0 and 5.0: Technologies, Applications, and Challenges Chapter Name: Advances in Hospitality, Tourism, and the Services Industry Publisher: IGI Global Page: 211-228, Published: July 1, 2024",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "4",
                            "Details of Research Publication": "Title: &ldquo;Accelerating Alzheimers Research with Machine Learning Models for Improved Detection&rdquo; Conference Name: 7th International Conference on Electronics, Communication and Aerospace Technology (ICECA) Publisher: IEEE DOI: 10.1109/ICECA58529.2023.10395855 Page: 855-862, Published: Feb. 9, 2024",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Awarded for top performing mentor for NPTEL course Understanding Incubation and Entrepreneurship during Jan-Apr 2025",
                        "Certificate of appreciation in recognition role as mentor for NPTEL course German-1during Jul-Dec 2024."
                    ]
                }
            ]
    },
  "Mr. P. Udayakumar": {
        "name": "Mr. P. Udayakumar",
        "email": null,
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. P. Udayakumar.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Artificial Intelligence",
                            "Branch": "CSE",
                            "College Name/University": "Vellore Institute of Technology, Vellore",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine and Deep Learning, Neuro Imaging Data analysis, GenAI, Connectome, Network Programming, Full Stack Development."
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58091327400",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/263889",
                        "Google scholar : https://scholar.google.com/citations?user=cV5MPAQAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 2"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "&lsquo;Connectome graph attention network (CGAT): A multimodal approach for enhanced classification of Alzheimer&rsquo;s disease&rsquo;, Results in Engineering, 26, 105200. doi:10.1016/j.rineng.2025.105200.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Connectome-based schizophrenia prediction using structural connectivity - Deep Graph Neural Network (sc-DGNN)&rsquo;, Journal of X-Ray Science and Technology, 32(4). doi:10.3233/XST-230426",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "&lsquo;Integrating Deep Learning in Brain Connectome Mapping: Insights from a Systematic Review&rsquo;, International Research Journal of Multidisciplinary Scope (IRJMS), 6(2), 1&ndash;20. doi:10.47857/irjms.2025.v06i02.01953",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "&lsquo;fMRI Data to Connectivity Matrices: Building Functional Connectomes for Deep Learning Models&rsquo;, 2024 IEEE WIECON-ECE, Chennai, India, pp. 175&ndash;179. doi:10.1109/WIECON-ECE64149.2024.10914733.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "&lsquo;Diffusion MRI preprocessing for Deep Learning Analysis of Brain Structural Connectivity&rsquo;, 2023 IEEE ICoAC, Chennai, India, pp. 1&ndash;5. doi:10.1109/ICoAC59537.2023.10249302.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "2024 - Raman Research Award, Vellore Institute of Technology, Vellore, India.",
                        "2025- Raman Research Award, Vellore Institute of Technology, Vellore, India."
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Connectome based schizophrenia prediction using structural connectivity - Deep Graph Neural Network(sc-DGNN),",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "In Journal of X-Ray Science and Technology (Impact Factor: 3.0)."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Semantic web based sensor planning services (SPS) for sensor web enablement (SWE),",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "In International Journal of Computer Engineering Science (IJCES) https://doi.org/10.48550/arXiv.1207.5310, 2012 ."
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "Integrating deep learning in brain connectome mapping: Insights from a systematic review,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "In International Research Journal of Multidisciplinary Scope (IRJMS)."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "Connectome Spatial Temporal - Graph Convolutional Neural Network (CST-GCNN) based schizophrenia classification from healthy controls,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "In Results in Engineering (RINENG)."
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "Connectome Graph Attention Network (CGAT): A Multimodal approach for enhanced classification of Alzheimer\u2019s disease controls",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "In IEEE Access."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "fmri data to connectivity matrices: Building functional connectomes for deep learning models.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "In 2024 International Conference on Communication, Computing, Smart Materials and Devices(ICCCSMD-2024), pages 1\u20135. IEEE, 2024."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "Diffusion mri preprocessing for deep learning analysis of brain structural connectivity.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "In 2023 12th International Conference on Advanced Computing (ICoAC), pages 1\u20135. IEEE, 2023."
                        }
                    ]
                },
                {
                    "title": "Conferences & Workshops attended",
                    "content": "Participated in \u201cICT Academy BRIDGE\u201925 \u2013 High Impact Industry \u2013 Institute Interaction Event & AI Learnathon 2025 Achievement\u201d was organized by ICT Academy in association with the Information Technology and Digital Services Department, Government of Tamil Nadu on 30th December 2025."
                }
            ]
    },
  "Mr. C. Anbarasan": {
        "name": "Mr. C. Anbarasan",
        "designation": "Asst. Professor",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. C. Anbarasan.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "AI-Deep Learning Agriculture Domain",
                            "Branch": "CSE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Computer and Communication Engineering",
                            "Branch": "Computer and Communication Engineering",
                            "College Name/University": "Tamil Nadu College of Engineering, Anna University",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "PARK College of Engineering Technology, CBE /Anna University",
                            "Year of Passing": "2008"
                        }
                    ]
                }
            ]
    },
  "Mr. B. S. H. Shayeez Ahamed": {
        "name": "Mr. B. S. H. Shayeez Ahamed",
        "email": null,
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. B. S. H. Shayeez Ahamed.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Deep Learning",
                            "Branch": "CSE",
                            "College Name/University": "Saveetha University, SIMATS",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Artificial Intelligence",
                            "Branch": "CSE",
                            "College Name/University": "JNTU Anantapur",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSIT",
                            "Branch": "CSIT",
                            "College Name/University": "JNTUK-Vizianagaram",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Deep Learning, Machine Learning & AI"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58038999500",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/273691",
                        "Google scholar : https://scholar.google.com/citations?user=DYHMOyIAAAAJ&hl=en",
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
                            "Details of Research Publication": "An XGBoost-Driven Framework for Accurate Peak-Hour Traffic Accident Prediction",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "5",
                            "Details of Research Publication": "A Synergistic Machine Learning-Metaheuristic Approach for Smart Grid Load Dispatch",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhanced Rainfall Prediction Using Conv1D and Temporal Fusion Transformers for Precision Forecasting",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhanced Real-Time Traffic Monitoring and Anomaly Detection Using YOLOv8 Segmentation in Heterogeneous Urban Environments",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Integrating DCCS-Net for High-Fidelity Watermarking and Tampering Detection in Brain Scan Images&rdquo; in 2024 IEEE 6th International Conference on Cybernetics, Cognition and Machine Learning Applications (ICCCMLA) 19 &ndash; 20 October 2024. DOI: 10.1109/ICCCMLA63077.2024.10871454",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Enhanced Brain Tumor MRI Scan Reconstruction via the EI-Fusion-Net Model&rdquo; in International Journal of Intelligent Engineering and Systems (INASS), Vol.17, No.4, May 29, 2024. DOI: 10.22266/ijies2024.0831.53",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "&ldquo;Multi Objective Evaluator Model Development for Analyze the Customer Behavior&rdquo; in 3rd International Conference on Advancement in Electronics & Communication Engineering (AECE) 23 &ndash; 24 November 2023. DOI: https://doi.org/10.1109/AECE59614.2023.10428189",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;A Deep Learning-based Methodology for Predicting Monkey Pox from Skin Sores&rdquo; in IEEE MysuruCon 2022 &ndash; 2nd edition of the Flagship International Conference Series of IEEE Mysuru Subsection in Association with IEEE Bangalore Section Hosted by JSS Science & Technology University, Bengaluru, 16th & 17th October 2022. DOI: 10.1109/MysuruCon55714.2022.9972746",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
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
                            "Academic Year": "2025-26",
                            "Application ID": "202541108667",
                            "Title of the Patent": "Hybrid Cloud Orchestration System for Small and Medium Business Resource Optimization",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Acted as Reviewer for Two Day &ldquo;National Conference on Recent Advancements in Computing, Communication & Societal Applications (NASA&rsquo; 23)&rdquo; organized by the Department of Computer Science & Engineering on 19th & 20th April 2023.",
                        "Acted as Reviewer for Two Day &ldquo;IEEE International Conference on Optimization Techniques for Learning (ICOTL&rsquo; 23)&rdquo; organized by the School of Computers, Madanapalle Institute of Technology & Science, Madanapalle, Andhra Pradesh, India during 7th & 8th December 2023.",
                        "&ldquo;Best Paper Award for the title Evaluation Ensembles of Machine Learning Models for the Prediction of Smart Phone Addiction&rdquo; presented during the International Conference of Embracing the Digital Horizon: Pioneering Commerce and Management Strategies for a Transformative Future (EDH 2024), organized by Loyala College of Arts & Science, Mettala, Tamil Nadu during 13th &ndash; 14th March 2024.",
                        "&ldquo;Best Paper Award for the title Diabetes Prediction using Supervised and Unsupervised Learning&rdquo; presented during the International Conference of Embracing the Digital Horizon: Pioneering Commerce and Management Strategies for a Transformative Future (EDH 2024), organized by Loyala College of Arts & Science, Mettala, Tamil Nadu during 13th &ndash; 14th March 2024.",
                        "Recognized as NPTEL Discipline Star.",
                        "Recognized as NPTEL Motivated Learner.",
                        "Received Feedback Appreciation for the Academic Year 2023-24.",
                        "Received Feedback Appreciation for the Academic Year 2024-25.",
                        "Received Appreciation as mentor for the NPTEL Online Certification Course Privacy and Security in online social media.",
                        "Received Appreciation as mentor for the NPTEL Online Certification Course Understanding Incubation and Entrepreneurship.",
                        "Received Appreciation for acting as Co-Convener for ASHV &ndash; 2K25.",
                        "Organized a MoU Exchange between &ldquo;Dept. of CSE &ndash; AI & ML and Xenovex Technologies&rdquo; on 8th November 2024.",
                        "Organized a MoU Exchange between &ldquo;Dept. of CSE &ndash; AI & ML and Techno hub Software Solutions&rdquo; on 21st November 2024.",
                        "Organized an Expert Talk on &ldquo;Software Life Cycle&rdquo; on 21st November 2024.",
                        "Organized a 5 Days Skill Development Program on &ldquo;Python Programming&rdquo; from 25th November to 29th November 2024.",
                        "Organized a MoU Exchange between &ldquo;Dept. of CSE &ndash; AI & ML and Menmozhi Technologies&rdquo; on 2nd December 2024.",
                        "Organized a Hands-on session on &ldquo;GenAI Tools and App Development&rdquo; on 2nd December 2024.",
                        "Organized a 3 Day Hands-on Workshop on &ldquo;Web and Mobile App Development: From Basics to Deployment&rdquo; from 27th January to 29th January 2025.",
                        "Organized a Workshop on &quot;AI & ML Product Development Bootcamp: From Idea to Deployment&quot; was organized by Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning in association with Industry Institute Interaction Cell (IIIC) from 3rd to 5th March 2025.",
                        "Organized a Faculty Development Program on &quot;Microsoft Azure AI Engineer Associate&quot; was organized by Department of Computer Science and Engineering (Artificial Intelligence and Machine Learning) in association with ICT ACADEMY 07th to 11th April 2025.",
                        "Organized a National Level Technical Symposium &quot;AIMEX 2k25&quot; was organized by Department of Computer Science and Engineering (Artificial Intelligence and Machine Learning) on 23rd April 2025.",
                        "Organized a Two-Day Career Guidance Programme on &ldquo;Engineering Elevates and Enlightens&rdquo; was organized by Department of Computer Science and Engineering (AI and ML) on 9th and 10th September 2025."
                    ]
                }
            ]
    },
  "Mrs. R. Usha": {
        "name": "Mrs. R. Usha",
        "email": null,
        "image": "https://mits.ac.in/public/uploads/faculty/P. Usha.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Saveetha University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Madanapalle Institute of Technology & Science, JNTUA Anathapur",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Madanapalle Institute of Technology & Science, JNTUA Ananthapur",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Image Processing and Machine Learning for Automated Plant Disease Detection in Precision Agriculture"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58038839300",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/273931",
                        "Google scholar : https://scholar.google.com/citations?user=VcY8I88AAAAJ&hl=en",
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
                            "Details of Research Publication": "Deep Learning-Based Hybrid Segmentation and Decision-Support Model for Tomato Leaf Disease Classification and Treatment Guidance. 2026 IEEE International Conference on Emerging Computing and Intelligent Technologies (ICoECIT). IEEE, 2026.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Enhanced Rainfall Prediction Using Conv1D and Temporal Fusion Transformers for Precision Forecasting. 2026 IEEE International Conference on Emerging Computing and Intelligent Technologies (ICoECIT). IEEE, 2026.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Balancing Pesticides Production and Environmental Agricultural Farming. 2025 9th International Conference on Electronics, Communication and Aerospace Technology (ICECA). IEEE, 2025.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Deep Learning-Based Depression Detection: Insights from Twitter data through Hashtag Text Analysis. 2026 IEEE International Conference on Emerging Computing and Intelligent Technologies (ICoECIT). IEEE, 2026.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Early Detection of Student Depression Using Deep Learning Algorithms 2025 Second International Conference on Networks and Soft Computing (ICNSoC) 12-14 June 2025, Doi :10.1109/ICCAMS65118.2025.11233910",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "A Machine-Learning (ML)-Based Conventional Charge Management System Guiding Electric Cars (Evs) To Charging Stations, 11-12 July 2025, 22nd International Conference on New Frontiers in Communication, Automation, Management and Security (ICCAMS)10.1109/ICCAMS65118.2025.11233910",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Automated Detection of Tomato Leaf Diseases: A Comprehensive Review and Framework Development Using Machine Learning Techniques Fifth International Conference on Advances in Computer Engineering and&hellip; (ICACECS 2024), doi.org/10.1007/978-981-96-4410-0_36",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "FungiDetect-Ensemble: A Novel Model for the Comprehensive Detection of Diseases in Tomato Leaves, 7th International Conference on Communications and Cyber Physical Engineering, doi.org/10.1007/978-981-95-0269-1_112",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Hybrid AI Framework for Detecting Deep-Fake Tweets on social media 4th International Conference on Information Technology, Civil Innovation, Science, and Management (ICITSM-25) DOI 10.4108/eai.28-4-2025.2357923",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Integrating Data into Machine Learning Models for Better Bankruptcy Prediction 4th International Conference on Information Technology, Civil Innovation, Science and Management (ICITSM-25), DOI 10.4108/eai.28-4-2025.2358019",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Automated Early Detection of Oral Cancer using CNN based Multimodal Analysis GrenzeID: 01.GIJET.11.2.362_22",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "A Hybrid Transfer Learning Model for Predicting Chronic Kidney Disease Using DenseNet121 and InceptionV3 28-29 April 2025, DOI: 10.1109/ICKECS65700.2025.11036010",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Deep Learning Driven - Pest Classification and Sustainable Agriculture 2025 International Conference on Electronics and Renewable Systems (ICEARS), 11-13 February 2025, DOI: 10.1109/ICEARS64219.2025.10940311",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Factors Influencing Customers Inclination to buy Green Products: An Indian Perspective DOI: 10.4018/979-8-3693-9954-5.ch009 ISBN-13 (Print): 979-8-3693-9954-5 ISBN-13 (Electronic): 979-8-3693-9956-9",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Integrating the Bigdata and Deep Learning Analysis Human Movement to Improve the Sports 2023 International Conference on New Frontiers in Communication, Automation Management and Security (ICCAMS), 27-28 October 2023 DOI: 10.1109/ICCAMS60113.2023.10525936",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Development of CNN Model to Avoid the Food Spoiling Level in 2023 3rd International Conference on Advancement in Electronics & Communication Engineering (AECE), 23-24 November 2023 DOI: 10.1109/AECE59614.2023.10428236",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "A Deep Learning-based Methodology for Predicting Monkey Pox from Skin Sores&rdquo; in IEEE MysuruCon 2022 &ndash; 2nd edition of the Flagship International Conference Series of IEEE Mysuru Subsection in Association with IEEE Bangalore Section Hosted by JSS Science & Technology University, Bengaluru, 16th & 17th October 2022. DOI: 10.1109/MysuruCon55714.2022.9972746",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
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
                            "Academic Year": "2025-2026",
                            "Application ID": "482761-001",
                            "Title of the Patent": "IoT Based Robot for Library Management",
                            "Status": "Filed"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-2026",
                            "Application ID": "473973-001",
                            "Title of the Patent": "IoT -Enabled interactive Device for Emotion &ndash; Aware Personalized Learning Recommendations",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-2026",
                            "Application ID": "202541092300",
                            "Title of the Patent": "DEEP LEARNING-DRIVEN DIAGNOSTIC TOOL FOR AUTOMATED DETECTION OF PULMONARY DISEASES FROM X-RAYS",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-2025",
                            "Application ID": "20254100293",
                            "Title of the Patent": "Detection and Classification of Skin Cancer using Back Propagated Artificial Neural Networks",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "&ldquo;Best Paper Award for the title Deep Learning-Based Emotion Recognition System with Depression Detection Capability&rdquo; presented during the International Conference of Embracing the Digital Horizon: Pioneering Commerce and Management Strategies for a Transformative Future (EDH 2024), organized by Loyala College of Arts & Science, Mettala, Tamil Nadu during 13th &ndash; 14th March 2024.",
                        "&ldquo;Best Paper Award for the title Evaluating Ensemble Machine Learning Approaches for Accurate Flight Pricing Predictions&rdquo; presented during the International Conference of Embracing the Digital Horizon: Pioneering Commerce and Management Strategies for a Transformative Future (EDH 2024), organized by Loyala College of Arts & Science, Mettala, Tamil Nadu during 13th &ndash; 14th March 2024.",
                        "Recognized as NPTEL Discipline Star July &ndash; Dec 2025",
                        "Recognized as NPTEL Discipline Star July &ndash; Dec 2023"
                    ]
                }
            ]
    },
  "Mr. Rama Krushna Rath": {
        "name": "Mr. Rama Krushna Rath",
        "designation": "Asst. Professor",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Rama Krushna Rath.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "IIIT Sri City",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Sambalpur University, Odisha",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Biju Patnaik University of Technology, Odisha",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57223028596",
                        "Vidwan :",
                        "Google scholar : https://scholar.google.com/citations?user=ce6q-tUAAAAJ&hl=en&oi=ao",
                        "h-Index (As per Scopus Data) : 4"
                    ]
                }
            ]
    },
  "Mr. Manoj Kumar K": {
        "name": "Mr. Manoj Kumar K",
        "designation": "Asst. Professor",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Manoj Kumar K.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Deep Learning",
                            "Branch": "CSE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Sathyabama University, Chennai",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Sree Vidyanikethan Engineering College, JNTU Anantapur",
                            "Year of Passing": "2013"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Cloud Computing & DevOps, Artificial Intelligence & Machine Learning, Software Engineering & Automation, Computer Networks & Security"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=56599626100",
                        "Vidwan :",
                        "Google scholar : https://scholar.google.co.in/citations?user=FoxUuv4AAAAJ&hl=en&oi=sra",
                        "h-Index (As per Scopus Data) : 9"
                    ]
                }
            ]
    },
  "Ms. Nighitha Varghese": {
        "name": "Ms. Nighitha Varghese",
        "designation": "Asst. Professor",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Ms. Nighitha Varghese.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "CIT, Anna University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "NPNMJ Engineering College, Anna University",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Thejus Engineering College, Calicut University",
                            "Year of Passing": "2013"
                        }
                    ]
                }
            ]
    },
  "Mr. Tharakeswara Raju B": {
        "name": "Mr. Tharakeswara Raju B",
        "designation": "Asst. Professor",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Tharakeswara Raju B.png",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Wireless Networks",
                            "Branch": "CSE",
                            "College Name/University": "IIT, Tirupati",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Madanapalle Institute of Technology & Science, JNTUA",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/657369",
                        "Google scholar : https://scholar.google.com/citations?user=BLr32e000QsC&hl=en&authuser=1",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "How Fresh is the Data? An Optimal Learning-Based End-to-End Pull-Based Forwarding Framework for NDNoTs In ACM MSWiM",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                }
            ]
    },
  "Mr. Subhas Das": {
        "name": "Mr. Subhas Das",
        "designation": "Asst. Professor",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Subhas Das.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "IIIT, Nagpur",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "MAKAUT",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "West Bengal University of Technology",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Missing Value Prediction using Machine Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59940833600",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/664282",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=233OYz0AAAAJ",
                        "h-Index (As per Scopus Data) :"
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
                            "Details of Research Publication": "Neural Network-Based Prediction of Sensor Data for Enhanced Decision-Making in Smart Agriculture",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                }
            ]
    },
  "Ms. Harsharani": {
        "name": "Ms. Harsharani",
        "designation": "Asst. Professor",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Ms. Harsharani.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "VIT-AP University, Amaravati",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "National Institute of Engineering, VTU",
                            "Year of Passing": "2021"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Guru Nanak Dev Engineering, VTU",
                            "Year of Passing": "2009"
                        }
                    ]
                }
            ]
    },
  "Mrs. S. Annapurna Shobitha": {
        "name": "Mrs. S. Annapurna Shobitha",
        "designation": "Asst. Professor",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. S. Annapurna Shobitha.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Computer science and Engineering",
                            "Branch": "Computer science and Engineering",
                            "College Name/University": "Saveetha University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech. (Integrated)",
                            "Specialization": "Computer science and Engineering",
                            "Branch": "Computer science and Engineering",
                            "College Name/University": "Vellore Institute of Technology, Vellore",
                            "Year of Passing": "2025"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Artificial Intelligence, Machine Learning, Data Science, and Genomics"
                }
            ]
    },
  "Mr. G. Nithin": {
        "name": "Mr. G. Nithin",
        "designation": "Asst. Professor",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. G. Nithin.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "MS (5 Year Integrated Degree)",
                            "Specialization": "Software Engineering",
                            "Branch": "Computing Science and Engineering",
                            "College Name/University": "VIT University, Chennai",
                            "Year of Passing": "2017"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/657375",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=AlwJ-dUAAAAJ",
                        "h-Index (As per Scopus Data) :"
                    ]
                }
            ]
    },
  "Mr. M. Esakkiraj": {
        "name": "Mr. M. Esakkiraj",
        "designation": "Asst. Professor",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. M. Esakkiraj.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "Manonmaniam Sundaranar University",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "Manonmaniam Sundaranar University",
                            "Year of Passing": "2016"
                        }
                    ]
                }
            ]
    },
  "Ms. Shivani Jha": {
        "name": "Ms. Shivani Jha",
        "designation": "Asst. Professor",
        "email": "",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Ms. Shivani Jha.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computer science and Engineering",
                            "Branch": "Computer science and Engineering",
                            "College Name/University": "Birla Institute of Technology, Mesra",
                            "Year of Passing": "2025"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Computer science and Engineering",
                            "Branch": "Computer science and Engineering",
                            "College Name/University": "Engineering College, Bikaner",
                            "Year of Passing": "2022"
                        }
                    ]
                }
            ]
    }
  */
};
